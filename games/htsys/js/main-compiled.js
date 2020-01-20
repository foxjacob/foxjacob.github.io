var highestEvolutionLevel=0;
function pickAdURL() {}

function DetectIphone() {
    return -1 < uagent.search(deviceIphone) ? DetectIpad() || DetectIpod() ? !1 : !0 : !1
}

function DetectIpod() {
    return -1 < uagent.search(deviceIpod) ? !0 : !1
}

function DetectIpad() {
    return -1 < uagent.search(deviceIpad) && DetectWebkit() ? !0 : !1
}

function DetectIphoneOrIpod() {
    return -1 < uagent.search(deviceIphone) || -1 < uagent.search(deviceIpod) ? !0 : !1
}

function DetectIos() {
    return DetectIphoneOrIpod() || DetectIpad() ? !0 : !1
}

function DetectAndroid() {
    return -1 < uagent.search(deviceAndroid) || DetectGoogleTV() ? !0 : -1 < uagent.search(deviceHtcFlyer) ? !0 : !1
}

function DetectAndroidPhone() {
    return DetectAndroid() && -1 < uagent.search(mobile) || DetectOperaAndroidPhone() ? !0 : -1 < uagent.search(deviceHtcFlyer) ? !0 : !1
}

function DetectAndroidTablet() {
    return !DetectAndroid() || DetectOperaMobile() || -1 < uagent.search(deviceHtcFlyer) ? !1 : -1 < uagent.search(mobile) ? !1 : !0
}

function DetectAndroidWebKit() {
    return DetectAndroid() && DetectWebkit() ? !0 : !1
}

function DetectGoogleTV() {
    return -1 < uagent.search(deviceGoogleTV) ? !0 : !1
}

function DetectWebkit() {
    return -1 < uagent.search(engineWebKit) ? !0 : !1
}

function DetectS60OssBrowser() {
    return DetectWebkit() ? -1 < uagent.search(deviceS60) || -1 < uagent.search(deviceSymbian) ? !0 : !1 : !1
}

function DetectSymbianOS() {
    return -1 < uagent.search(deviceSymbian) || -1 < uagent.search(deviceS60) || -1 < uagent.search(deviceS70) || -1 < uagent.search(deviceS80) || -1 < uagent.search(deviceS90) ? !0 : !1
}

function DetectWindowsPhone7() {
    return -1 < uagent.search(deviceWinPhone7) ? !0 : !1
}

function DetectWindowsMobile() {
    return DetectWindowsPhone7() ? !1 : -1 < uagent.search(deviceWinMob) || -1 < uagent.search(deviceIeMob) || -1 < uagent.search(enginePie) || -1 < uagent.search(devicePpc) && !(-1 < uagent.search(deviceMacPpc)) ? !0 : -1 < uagent.search(manuHtc) && -1 < uagent.search(deviceWindows) ? !0 : !1
}

function DetectBlackBerry() {
    return -1 < uagent.search(deviceBB) ? !0 : -1 < uagent.search(vndRIM) ? !0 : !1
}

function DetectBlackBerryTablet() {
    return -1 < uagent.search(deviceBBPlaybook) ? !0 : !1
}

function DetectBlackBerryWebKit() {
    return DetectBlackBerry() && -1 < uagent.search(engineWebKit) ? !0 : !1
}

function DetectBlackBerryTouch() {
    return DetectBlackBerry() && (-1 < uagent.search(deviceBBStorm) || -1 < uagent.search(deviceBBTorch) || -1 < uagent.search(deviceBBBoldTouch) || -1 < uagent.search(deviceBBCurveTouch)) ? !0 : !1
}

function DetectBlackBerryHigh() {
    return DetectBlackBerryWebKit() ? !1 : DetectBlackBerry() ? DetectBlackBerryTouch() || -1 < uagent.search(deviceBBBold) || -1 < uagent.search(deviceBBTour) || -1 < uagent.search(deviceBBCurve) ? !0 : !1 : !1
}

function DetectBlackBerryLow() {
    return DetectBlackBerry() ? DetectBlackBerryHigh() || DetectBlackBerryWebKit() ? !1 : !0 : !1
}

function DetectPalmOS() {
    return -1 < uagent.search(devicePalm) || -1 < uagent.search(engineBlazer) || -1 < uagent.search(engineXiino) ? DetectPalmWebOS() ? !1 : !0 : !1
}

function DetectPalmWebOS() {
    return -1 < uagent.search(deviceWebOS) ? !0 : !1
}

function DetectWebOSTablet() {
    return -1 < uagent.search(deviceWebOShp) && -1 < uagent.search(deviceTablet) ? !0 : !1
}

function DetectGarminNuvifone() {
    return -1 < uagent.search(deviceNuvifone) ? !0 : !1
}

function DetectSmartphone() {
    return DetectIphoneOrIpod() || DetectAndroidPhone() || DetectS60OssBrowser() || DetectSymbianOS() || DetectWindowsMobile() || DetectWindowsPhone7() || DetectBlackBerry() || DetectPalmWebOS() || DetectPalmOS() || DetectGarminNuvifone() ? !0 : !1
}

function DetectArchos() {
    return -1 < uagent.search(deviceArchos) ? !0 : !1
}

function DetectBrewDevice() {
    return -1 < uagent.search(deviceBrew) ? !0 : !1
}

function DetectDangerHiptop() {
    return -1 < uagent.search(deviceDanger) || -1 < uagent.search(deviceHiptop) ? !0 : !1
}

function DetectMaemoTablet() {
    return -1 < uagent.search(maemo) ? !0 : -1 < uagent.search(linux) && -1 < uagent.search(deviceTablet) && !DetectWebOSTablet() && !DetectAndroid() ? !0 : !1
}

function DetectSonyMylo() {
    return -1 < uagent.search(manuSony) ? -1 < uagent.search(qtembedded) || -1 < uagent.search(mylocom2) ? !0 : !1 : !1
}

function DetectOperaMobile() {
    return -1 < uagent.search(engineOpera) ? -1 < uagent.search(mini) || -1 < uagent.search(mobi) ? !0 : !1 : !1
}

function DetectOperaAndroidPhone() {
    return -1 < uagent.search(engineOpera) && -1 < uagent.search(deviceAndroid) && -1 < uagent.search(mobi) ? !0 : !1
}

function DetectOperaAndroidTablet() {
    return -1 < uagent.search(engineOpera) && -1 < uagent.search(deviceAndroid) && -1 < uagent.search(deviceTablet) ? !0 : !1
}

function DetectSonyPlaystation() {
    return -1 < uagent.search(devicePlaystation) ? !0 : !1
}

function DetectNintendo() {
    return -1 < uagent.search(deviceNintendo) || -1 < uagent.search(deviceWii) || -1 < uagent.search(deviceNintendoDs) ? !0 : !1
}

function DetectXbox() {
    return -1 < uagent.search(deviceXbox) ? !0 : !1
}

function DetectGameConsole() {
    return DetectSonyPlaystation() || DetectNintendo() ? !0 : DetectXbox() ? !0 : !1
}

function DetectKindle() {
    return -1 < uagent.search(deviceKindle) && !DetectAndroid() ? !0 : !1
}

function DetectAmazonSilk() {
    return -1 < uagent.search(engineSilk) ? !0 : !1
}

function DetectMobileQuick() {
    return DetectTierTablet() ? !1 : DetectSmartphone() || -1 < uagent.search(deviceMidp) || DetectBrewDevice() || DetectOperaMobile() || -1 < uagent.search(engineNetfront) || -1 < uagent.search(engineUpBrowser) || -1 < uagent.search(engineOpenWeb) || DetectDangerHiptop() || DetectMaemoTablet() || DetectArchos() || -1 < uagent.search(devicePda) && !(-1 < uagent.search(disUpdate)) || -1 < uagent.search(mobile) || DetectKindle() || DetectAmazonSilk() ? !0 : !1
}

function DetectMobileLong() {
    return DetectMobileQuick() || DetectGameConsole() || DetectSonyMylo() || -1 < uagent.search(manuSamsung1) || -1 < uagent.search(manuSonyEricsson) || -1 < uagent.search(manuericsson) || -1 < uagent.search(svcDocomo) || -1 < uagent.search(svcKddi) || -1 < uagent.search(svcVodafone) ? !0 : !1
}

function DetectTierTablet() {
    return DetectIpad() || DetectAndroidTablet() || DetectBlackBerryTablet() || DetectWebOSTablet() ? !0 : !1
}

function DetectTierIphone() {
    return DetectIphoneOrIpod() || DetectAndroidPhone() || DetectBlackBerryWebKit() && DetectBlackBerryTouch() || DetectWindowsPhone7() || DetectPalmWebOS() ? !0 : DetectGarminNuvifone() ? !0 : !1
}

function DetectTierRichCss() {
    return DetectMobileQuick() ? DetectTierIphone() || DetectKindle() ? !1 : DetectWebkit() || DetectS60OssBrowser() || DetectBlackBerryHigh() || DetectWindowsMobile() ? !0 : -1 < uagent.search(engineTelecaQ) ? !0 : !1 : !1
}

function DetectTierOtherPhones() {
    return DetectMobileLong() ? DetectTierIphone() || DetectTierRichCss() ? !1 : !0 : !1
}

function InitDeviceScan() {
    isIphone = DetectIphoneOrIpod();
    isAndroidPhone = DetectAndroidPhone();
    isTierIphone = DetectTierIphone();
    isTierTablet = DetectTierTablet();
    isTierRichCss = DetectTierRichCss();
    isTierGenericMobile = DetectTierOtherPhones()
}

function randomSnd() {
    for (var e = 0, t = 0; 3 > t; t++) var n = Random.random(),
        e = e + (2 * n - 1);
    return e
}

function randNormal(e, t) {
    return randomSnd() * t + e
}

function rand(e) {
    return Math.floor(Math.random() * e)
}

function containsObject(e, t) {
    var n;
    for (n = 0; n < t.length; n++)
        if (t[n] === e) return !0;
    return !1
}

function addCommas(e) {
    x = (e + "").split(".");
    x1 = x[0];
    x2 = 1 < x.length ? "." + x[1] : "";
    for (e = /(\d+)(\d{3})/; e.test(x1);) x1 = x1.replace(e, "$1,$2");
    return x1 + x2
}

function initHighscore() {
    var e = localStorage[GAME_UID + "highscoreTable"];
    return void 0 === e || null === e ? [] : JSON.parse(e)
}

function createHighscoreEntry(e) {
    var t = {};
    t.date = Date.now();
    t.score = e;
    return t
}

function addToHighscoreList(e) {
    var t;
    for (t = 0; t < _G.highscoreTable.length && !(_G.highscoreTable[t].score < e.score); t++);
    _G.highscoreTable.splice(t, 0, e);
    10 < _G.highscoreTable.length && _G.highscoreTable.pop();
    localStorage[GAME_UID + "highscoreTable"] = JSON.stringify(_G.highscoreTable)
}

function setLoadingScene() {
    var e = new Scene,
        t = new Sprite(320, 480);
    t.image = enchant.Game.instance.assets["res/splashScreen.png"];
    e.addChild(t);
    enchant.Game.instance.loadingScene = e;
    enchant.Game.instance.start()
}
var isIphone = !1,
    isAndroidPhone = !1,
    isTierTablet = !1,
    isTierIphone = !1,
    isTierRichCss = !1,
    isTierGenericMobile = !1,
    engineWebKit = "webkit",
    deviceIphone = "iphone",
    deviceIpod = "ipod",
    deviceIpad = "ipad",
    deviceMacPpc = "macintosh",
    deviceAndroid = "android",
    deviceGoogleTV = "googletv",
    deviceXoom = "xoom",
    deviceHtcFlyer = "htc_flyer",
    deviceNuvifone = "nuvifone",
    deviceSymbian = "symbian",
    deviceS60 = "series60",
    deviceS70 = "series70",
    deviceS80 = "series80",
    deviceS90 = "series90",
    deviceWinPhone7 = "windows phone os 7",
    deviceWinMob = "windows ce",
    deviceWindows = "windows",
    deviceIeMob = "iemobile",
    devicePpc = "ppc",
    enginePie = "wm5 pie",
    deviceBB = "blackberry",
    vndRIM = "vnd.rim",
    deviceBBStorm = "blackberry95",
    deviceBBBold = "blackberry97",
    deviceBBBoldTouch = "blackberry 99",
    deviceBBTour = "blackberry96",
    deviceBBCurve = "blackberry89",
    deviceBBCurveTouch = "blackberry 938",
    deviceBBTorch = "blackberry 98",
    deviceBBPlaybook = "playbook",
    devicePalm = "palm",
    deviceWebOS = "webos",
    deviceWebOShp = "hpwos",
    engineBlazer = "blazer",
    engineXiino = "xiino",
    deviceKindle = "kindle",
    engineSilk = "silk",
    vndwap = "vnd.wap",
    wml = "wml",
    deviceTablet = "tablet",
    deviceBrew = "brew",
    deviceDanger = "danger",
    deviceHiptop = "hiptop",
    devicePlaystation = "playstation",
    deviceNintendoDs = "nitro",
    deviceNintendo = "nintendo",
    deviceWii = "wii",
    deviceXbox = "xbox",
    deviceArchos = "archos",
    engineOpera = "opera",
    engineNetfront = "netfront",
    engineUpBrowser = "up.browser",
    engineOpenWeb = "openweb",
    deviceMidp = "midp",
    uplink = "up.link",
    engineTelecaQ = "teleca q",
    devicePda = "pda",
    mini = "mini",
    mobile = "mobile",
    mobi = "mobi",
    maemo = "maemo",
    linux = "linux",
    qtembedded = "qt embedded",
    mylocom2 = "com2",
    manuSonyEricsson = "sonyericsson",
    manuericsson = "ericsson",
    manuSamsung1 = "sec-sgh",
    manuSony = "sony",
    manuHtc = "htc",
    svcDocomo = "docomo",
    svcKddi = "kddi",
    svcVodafone = "vodafone",
    disUpdate = "update",
    uagent = "";
navigator && navigator.userAgent && (uagent = navigator.userAgent.toLowerCase());
InitDeviceScan();
Random = {};
(function(e, t, n, r, i, s, o) {
    function u(e) {
        var t, r, i = this,
            s = e.length,
            o = 0,
            u = i.i = i.j = i.m = 0;
        i.S = [];
        i.c = [];
        for (s || (e = [s++]); o < n;) i.S[o] = o++;
        for (o = 0; o < n; o++) t = i.S[o], u = u + t + e[o % s] & n - 1, r = i.S[u], i.S[o] = r, i.S[u] = t;
        i.g = function(e) {
            var t = i.S,
                r = i.i + 1 & n - 1,
                s = t[r],
                o = i.j + s & n - 1,
                u = t[o];
            t[r] = u;
            t[o] = s;
            for (var a = t[s + u & n - 1]; --e;) r = r + 1 & n - 1, s = t[r], o = o + s & n - 1, u = t[o], t[r] = u, t[o] = s, a = a * n + t[s + u & n - 1];
            i.i = r;
            i.j = o;
            return a
        };
        i.g(n)
    }

    function a(e, t, n, r, i) {
        n = [];
        i = typeof e;
        if (t && "object" == i)
            for (r in e)
                if (5 > r.indexOf("S")) try {
                    n.push(a(e[r], t - 1))
                } catch (s) {}
                return n.length ? n : e + ("string" != i ? "\0" : "")
    }

    function f(e, t, r, i) {
        e += "";
        for (i = r = 0; i < e.length; i++) {
            var s = t,
                o = i & n - 1,
                u = (r ^= 19 * t[i & n - 1]) + e.charCodeAt(i);
            s[o] = u & n - 1
        }
        e = "";
        for (i in t) e += String.fromCharCode(t[i]);
        return e
    }
    t.seedrandom = function(l, p) {
        var v = [],
            m, l = f(a(p ? [l, e] : arguments.length ? l : [(new Date).getTime(), e, window], 3), v);
        m = new u(v);
        f(m.S, e);
        t.random = function() {
            for (var e = m.g(r), t = o, u = 0; e < i;) e = (e + u) * n, t *= n, u = m.g(1);
            for (; e >= s;) e /= 2, t /= 2, u >>>= 1;
            return (e + u) / t
        };
        return l
    };
    o = Math.pow(n, r);
    i = Math.pow(2, i);
    s = 2 * i;
    f(Math.random(), e)
})([], Random, 256, 6, 52);
(window._gsQueue || (window._gsQueue = [])).push(function() {
    _gsDefine("easing.Back", ["easing.Ease"], function(e) {
        var t = window.com.greensock._class,
            n = function(n, r) {
                var i = t("easing." + n, function() {}, !0),
                    s = i.prototype = new e;
                s.constructor = i;
                s.getRatio = r;
                return i
            },
            r = function(n, r) {
                var i = t("easing." + n, function(e) {
                        this._p1 = e || 0 === e ? e : 1.70158;
                        this._p2 = 1.525 * this._p1
                    }, !0),
                    s = i.prototype = new e;
                s.constructor = i;
                s.getRatio = r;
                s.config = function(e) {
                    return new i(e)
                };
                return i
            },
            i = r("BackOut", function(e) {
                return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
            }),
            s = r("BackIn", function(e) {
                return e * e * ((this._p1 + 1) * e - this._p1)
            }),
            r = r("BackInOut", function(e) {
                return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
            }),
            o = n("BounceOut", function(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }),
            u = n("BounceIn", function(e) {
                return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }),
            a = n("BounceInOut", function(e) {
                var t = .5 > e,
                    e = t ? 1 - 2 * e : 2 * e - 1,
                    e = e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375;
                return t ? .5 * (1 - e) : .5 * e + .5
            }),
            f = n("CircOut", function(e) {
                return Math.sqrt(1 - (e -= 1) * e)
            }),
            l = n("CircIn", function(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }),
            c = n("CircInOut", function(e) {
                return 1 > (e *= 2) ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }),
            h = 2 * Math.PI,
            p = function(n, r, i) {
                var s = t("easing." + n, function(e, t) {
                        e = e || 0;
                        this._p1 = !e || 1 > e ? 1 : e;
                        this._p2 = t || i;
                        this._p3 = this._p2 / h * Math.asin(1 / this._p1)
                    }, !0),
                    n = s.prototype = new e;
                n.constructor = s;
                n.getRatio = r;
                n.config = function(e, t) {
                    return new s(e, t)
                };
                return s
            },
            d = p("ElasticOut", function(e) {
                return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * h / this._p2) + 1
            }, .3),
            v = p("ElasticIn", function(e) {
                return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * h / this._p2))
            }, .3),
            p = p("ElasticInOut", function(e) {
                return 1 > (e *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * h / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * h / this._p2) + 1
            }, .45),
            m = n("ExpoOut", function(e) {
                return 1 - Math.pow(2, -10 * e)
            }),
            g = n("ExpoIn", function(e) {
                return Math.pow(2, 10 * (e - 1)) - .001
            }),
            y = n("ExpoInOut", function(e) {
                return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            }),
            b = Math.PI / 2,
            w = n("SineOut", function(e) {
                return Math.sin(e * b)
            }),
            E = n("SineIn", function(e) {
                return -Math.cos(e * b) + 1
            }),
            n = n("SineInOut", function(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            }),
            S = t("easing.SlowMo", function(e, t, n) {
                null == e ? e = .7 : 1 < e && (e = 1);
                this._p = 1 != e ? t || 0 === t ? t : .7 : 0;
                this._p1 = (1 - e) / 2;
                this._p2 = e;
                this._p3 = this._p1 + this._p2;
                this._calcEnd = !0 === n
            }, !0),
            x = S.prototype = new e;
        x.constructor = S;
        x.getRatio = function(e) {
            var t = e + (.5 - e) * this._p;
            return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
        };
        S.ease = new S(.7, .7);
        x.config = S.config = function(e, t, n) {
            return new S(e, t, n)
        };
        var T = t("easing.SteppedEase", function(e) {
                e = e || 1;
                this._p1 = 1 / e;
                this._p2 = e + 1
            }, !0),
            x = T.prototype = new e;
        x.constructor = T;
        x.getRatio = function(e) {
            0 > e ? e = 0 : 1 <= e && (e = .999999999);
            return (this._p2 * e >> 0) * this._p1
        };
        x.config = T.config = function(e) {
            return new T(e)
        };
        t("easing.Bounce", {
            easeOut: new o,
            easeIn: new u,
            easeInOut: new a
        }, !0);
        t("easing.Circ", {
            easeOut: new f,
            easeIn: new l,
            easeInOut: new c
        }, !0);
        t("easing.Elastic", {
            easeOut: new d,
            easeIn: new v,
            easeInOut: new p
        }, !0);
        t("easing.Expo", {
            easeOut: new m,
            easeIn: new g,
            easeInOut: new y
        }, !0);
        t("easing.Sine", {
            easeOut: new w,
            easeIn: new E,
            easeInOut: new n
        }, !0);
        return {
            easeOut: new i,
            easeIn: new s,
            easeInOut: new r
        }
    }, !0)
});
window._gsDefine && _gsQueue.pop()();
(function(e) {
    var t = function(t) {
            var t = t.split("."),
                n = e,
                r;
            for (r = 0; r < t.length; r++) n[t[r]] = n = n[t[r]] || {};
            return n
        },
        n = t("com.greensock"),
        r, i, s, o, u = {},
        a = function(n, r, i, s) {
            this.sc = u[n] ? u[n].sc : [];
            u[n] = this;
            this.gsClass = null;
            this.def = i;
            var o = r || [],
                f = [];
            this.check = function(r) {
                for (var l = o.length, c = 0, h; - 1 < --l;)(h = u[o[l]] || new a(o[l])).gsClass ? f[l] = h.gsClass : (c++, r && h.sc.push(this));
                if (0 === c && i) {
                    var r = ("com.greensock." + n).split("."),
                        l = r.pop(),
                        p = t(r.join("."))[l] = this.gsClass = i.apply(i, f);
                    s && ((e.GreenSockGlobals || e)[l] = p, "function" === typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + n.split(".").join("/"), [], function() {
                        return p
                    }) : "undefined" !== typeof module && module.exports && (module.exports = p));
                    for (l = 0; l < this.sc.length; l++) this.sc[l].check(!1)
                }
            };
            this.check(!0)
        },
        f = n._class = function(e, t, n) {
            new a(e, [], function() {
                return t
            }, n);
            return t
        };
    e._gsDefine = function(e, t, n, r) {
        return new a(e, t, n, r)
    };
    var l = [0, 0, 1, 1],
        c = [],
        h = f("easing.Ease", function(e, t, n, r) {
            this._func = e;
            this._type = n || 0;
            this._power = r || 0;
            this._params = t ? l.concat(t) : l
        }, !0);
    s = h.prototype;
    s._calcEnd = !1;
    s.getRatio = function(e) {
        if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
        var t = this._type,
            n = this._power,
            r = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
        1 === n ? r *= r : 2 === n ? r *= r * r : 3 === n ? r *= r * r * r : 4 === n && (r *= r * r * r * r);
        return 1 === t ? 1 - r : 2 === t ? r : .5 > e ? r / 2 : 1 - r / 2
    };
    r = ["Linear", "Quad", "Cubic", "Quart", "Quint"];
    for (i = r.length; - 1 < --i;) s = f("easing." + r[i], function() {}, !0), o = f("easing.Power" + i, function() {}, !0), s.easeOut = o.easeOut = new h(null, null, 1, i), s.easeIn = o.easeIn = new h(null, null, 2, i), s.easeInOut = o.easeInOut = new h(null, null, 3, i);
    f("easing.Strong", n.easing.Power4, !0);
    n.easing.Linear.easeNone = n.easing.Linear.easeIn;
    s = f("events.EventDispatcher", function(e) {
        this._listeners = {};
        this._eventTarget = e || this
    }).prototype;
    s.addEventListener = function(e, t, n, r, i) {
        var i = i || 0,
            s = this._listeners[e],
            o = 0,
            u;
        null == s && (this._listeners[e] = s = []);
        for (u = s.length; - 1 < --u;) e = s[u], e.c === t ? s.splice(u, 1) : 0 === o && e.pr < i && (o = u + 1);
        s.splice(o, 0, {
            c: t,
            s: n,
            up: r,
            pr: i
        })
    };
    s.removeEventListener = function(e, t) {
        var n = this._listeners[e];
        if (n)
            for (var r = n.length; - 1 < --r;)
                if (n[r].c === t) {
                    n.splice(r, 1);
                    break
                }
    };
    s.dispatchEvent = function(e) {
        var t = this._listeners[e];
        if (t)
            for (var n = t.length, r, i = this._eventTarget; - 1 < --n;) r = t[n], r.up ? r.c.call(r.s || i, {
                type: e,
                target: i
            }) : r.c.call(r.s || i)
    };
    var p = e.requestAnimationFrame,
        d = e.cancelAnimationFrame,
        v = Date.now || function() {
            return (new Date).getTime()
        };
    r = ["ms", "moz", "webkit", "o"];
    for (i = r.length; - 1 < --i && !p;) p = e[r[i] + "RequestAnimationFrame"], d = e[r[i] + "CancelAnimationFrame"] || e[r[i] + "CancelRequestAnimationFrame"];
    d || (d = function(t) {
        e.clearTimeout(t)
    });
    f("Ticker", function(t, n) {
        this.frame = this.time = 0;
        var r = this,
            i = v(),
            s = !1 !== n,
            o, u, a, f, l;
        this.tick = function() {
            r.time = (v() - i) / 1e3;
            if (!o || r.time >= l) r.frame++, l = r.time + f - (r.time - l) - 5e-4, l <= r.time && (l = r.time + .001), r.dispatchEvent("tick");
            a = u(r.tick)
        };
        this.fps = function(t) {
            if (!arguments.length) return o;
            o = t;
            f = 1 / (o || 60);
            l = this.time + f;
            u = 0 === o ? function() {} : !s || !p ? function(t) {
                return e.setTimeout(t, 1e3 * (l - r.time) + 1 >> 0 || 1)
            } : p;
            d(a);
            a = u(r.tick)
        };
        this.useRAF = function(e) {
            if (!arguments.length) return s;
            s = e;
            this.fps(o)
        };
        this.fps(t)
    });
    s = n.Ticker.prototype = new n.events.EventDispatcher;
    s.constructor = n.Ticker;
    var m = f("core.Animation", function(e, t) {
            this.vars = t || {};
            this._duration = this._totalDuration = e || 0;
            this._delay = Number(this.vars.delay) || 0;
            this._timeScale = 1;
            this._active = !0 == this.vars.immediateRender;
            this.data = this.vars.data;
            this._reversed = !0 == this.vars.reversed;
            if (N) {
                var n = this.vars.useFrames ? T : N;
                n.insert(this, n._time);
                this.vars.paused && this.paused(!0)
            }
        }),
        g = m.ticker = new n.Ticker;
    s = m.prototype;
    s._dirty = s._gc = s._initted = s._paused = !1;
    s._totalTime = s._time = 0;
    s._rawPrevTime = -1;
    s._next = s._last = s._onUpdate = s._timeline = s.timeline = null;
    s._paused = !1;
    s.play = function(e, t) {
        arguments.length && this.seek(e, t);
        this.reversed(!1);
        return this.paused(!1)
    };
    s.pause = function(e, t) {
        arguments.length && this.seek(e, t);
        return this.paused(!0)
    };
    s.resume = function(e, t) {
        arguments.length && this.seek(e, t);
        return this.paused(!1)
    };
    s.seek = function(e, t) {
        return this.totalTime(Number(e), !1 != t)
    };
    s.restart = function(e, t) {
        this.reversed(!1);
        this.paused(!1);
        return this.totalTime(e ? -this._delay : 0, !1 != t)
    };
    s.reverse = function(e, t) {
        arguments.length && this.seek(e || this.totalDuration(), t);
        this.reversed(!0);
        return this.paused(!1)
    };
    s.render = function() {};
    s.invalidate = function() {
        return this
    };
    s._enabled = function(e, t) {
        this._gc = !e;
        this._active = e && !this._paused && 0 < this._totalTime && this._totalTime < this._totalDuration;
        !0 != t && (e && null == this.timeline ? this._timeline.insert(this, this._startTime - this._delay) : !e && null != this.timeline && this._timeline._remove(this, !0));
        return !1
    };
    s._kill = function() {
        return this._enabled(!1, !1)
    };
    s.kill = function(e, t) {
        this._kill(e, t);
        return this
    };
    s._uncache = function(e) {
        for (e = e ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
        return this
    };
    s.eventCallback = function(e, t, n, r) {
        if (null == e) return null;
        if ("on" === e.substr(0, 2)) {
            if (1 === arguments.length) return this.vars[e];
            if (null == t) delete this.vars[e];
            else if (this.vars[e] = t, this.vars[e + "Params"] = n, this.vars[e + "Scope"] = r, n)
                for (var i = n.length; - 1 < --i;) "{self}" === n[i] && (n = this.vars[e + "Params"] = n.concat(), n[i] = this);
            "onUpdate" === e && (this._onUpdate = t)
        }
        return this
    };
    s.delay = function(e) {
        if (!arguments.length) return this._delay;
        this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay);
        this._delay = e;
        return this
    };
    s.duration = function(e) {
        if (!arguments.length) return this._dirty = !1, this._duration;
        this._duration = this._totalDuration = e;
        this._uncache(!0);
        this._timeline.smoothChildTiming && this._active && 0 != e && this.totalTime(this._totalTime * (e / this._duration), !0);
        return this
    };
    s.totalDuration = function(e) {
        this._dirty = !1;
        return !arguments.length ? this._totalDuration : this.duration(e)
    };
    s.time = function(e, t) {
        if (!arguments.length) return this._time;
        this._dirty && this.totalDuration();
        e > this._duration && (e = this._duration);
        return this.totalTime(e, t)
    };
    s.totalTime = function(e, t) {
        if (!arguments.length) return this._totalTime;
        if (this._timeline) {
            0 > e && (e += this.totalDuration());
            if (this._timeline.smoothChildTiming && (this._dirty && this.totalDuration(), e > this._totalDuration && (e = this._totalDuration), this._startTime = (this._paused ? this._pauseTime : this._timeline._time) - (!this._reversed ? e : this._totalDuration - e) / this._timeScale, this._timeline._dirty || this._uncache(!1), !this._timeline._active))
                for (var n = this._timeline; n._timeline;) n.totalTime(n._totalTime, !0), n = n._timeline;
            this._gc && this._enabled(!0, !1);
            this._totalTime != e && this.render(e, t, !1)
        }
        return this
    };
    s.startTime = function(e) {
        if (!arguments.length) return this._startTime;
        e != this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.insert(this, e - this._delay));
        return this
    };
    s.timeScale = function(e) {
        if (!arguments.length) return this._timeScale;
        e = e || 1e-6;
        if (this._timeline && this._timeline.smoothChildTiming) {
            var t = this._pauseTime || 0 == this._pauseTime ? this._pauseTime : this._timeline._totalTime;
            this._startTime = t - (t - this._startTime) * this._timeScale / e
        }
        this._timeScale = e;
        return this._uncache(!1)
    };
    s.reversed = function(e) {
        if (!arguments.length) return this._reversed;
        e != this._reversed && (this._reversed = e, this.totalTime(this._totalTime, !0));
        return this
    };
    s.paused = function(e) {
        if (!arguments.length) return this._paused;
        e != this._paused && this._timeline && (!e && this._timeline.smoothChildTiming && (this._startTime += this._timeline.rawTime() - this._pauseTime, this._uncache(!1)), this._pauseTime = e ? this._timeline.rawTime() : null, this._paused = e, this._active = !this._paused && 0 < this._totalTime && this._totalTime < this._totalDuration);
        this._gc && (e || this._enabled(!0, !1));
        return this
    };
    n = f("core.SimpleTimeline", function(e) {
        m.call(this, 0, e);
        this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    s = n.prototype = new m;
    s.constructor = n;
    s.kill()._gc = !1;
    s._first = s._last = null;
    s._sortChildren = !1;
    s.insert = function(e, t) {
        e._startTime = Number(t || 0) + e._delay;
        e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale);
        e.timeline && e.timeline._remove(e, !0);
        e.timeline = e._timeline = this;
        e._gc && e._enabled(!0, !0);
        var n = this._last;
        if (this._sortChildren)
            for (var r = e._startTime; n && n._startTime > r;) n = n._prev;
        n ? (e._next = n._next, n._next = e) : (e._next = this._first, this._first = e);
        e._next ? e._next._prev = e : this._last = e;
        e._prev = n;
        this._timeline && this._uncache(!0);
        return this
    };
    s._remove = function(e, t) {
        e.timeline === this && (t || e._enabled(!1, !0), e.timeline = null, e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), this._timeline && this._uncache(!0));
        return this
    };
    s.render = function(e, t) {
        var n = this._first,
            r;
        for (this._totalTime = this._time = this._rawPrevTime = e; n;) {
            r = n._next;
            if (n._active || e >= n._startTime && !n._paused) n._reversed ? n.render((!n._dirty ? n._totalDuration : n.totalDuration()) - (e - n._startTime) * n._timeScale, t, !1) : n.render((e - n._startTime) * n._timeScale, t, !1);
            n = r
        }
    };
    s.rawTime = function() {
        return this._totalTime
    };
    var y = f("TweenLite", function(e, t, n) {
        m.call(this, t, n);
        if (null == e) throw "Cannot tween an undefined reference.";
        this.target = e;
        this._overwrite = null == this.vars.overwrite ? x[y.defaultOverwrite] : "number" === typeof this.vars.overwrite ? this.vars.overwrite >> 0 : x[this.vars.overwrite];
        if ((e instanceof Array || e.jquery) && "object" === typeof e[0]) {
            this._targets = e.slice(0);
            this._propLookup = [];
            this._siblings = [];
            for (e = 0; e < this._targets.length; e++) n = this._targets[e], n.jquery ? (this._targets.splice(e--, 1), this._targets = this._targets.concat(n.constructor.makeArray(n))) : (this._siblings[e] = C(n, this, !1), 1 === this._overwrite && 1 < this._siblings[e].length && k(n, this, null, 1, this._siblings[e]))
        } else this._propLookup = {}, this._siblings = C(e, this, !1), 1 === this._overwrite && 1 < this._siblings.length && k(e, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === t && 0 === this._delay && !1 != this.vars.immediateRender) && this.render(0, !1, !0)
    }, !0);
    s = y.prototype = new m;
    s.constructor = y;
    s.kill()._gc = !1;
    s.ratio = 0;
    s._firstPT = s._targets = s._overwrittenProps = null;
    s._notifyPluginsOfEnabled = !1;
    y.version = 12;
    y.defaultEase = s._ease = new h(null, null, 1, 1);
    y.defaultOverwrite = "auto";
    y.ticker = g;
    var b = y._plugins = {},
        w = {},
        E = 0,
        S = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            orientToBezier: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1
        },
        x = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        T = m._rootFramesTimeline = new n,
        N = m._rootTimeline = new n;
    N._startTime = g.time;
    T._startTime = g.frame;
    N._active = T._active = !0;
    m._updateRoot = function() {
        N.render((g.time - N._startTime) * N._timeScale, !1, !1);
        T.render((g.frame - T._startTime) * T._timeScale, !1, !1);
        if (!(g.frame % 120)) {
            var e, t, n;
            for (n in w) {
                t = w[n].tweens;
                for (e = t.length; - 1 < --e;) t[e]._gc && t.splice(e, 1);
                0 === t.length && delete w[n]
            }
        }
    };
    g.addEventListener("tick", m._updateRoot);
    var C = function(e, t, n) {
            var r = e._gsTweenID,
                i;
            if (!w[r || (e._gsTweenID = r = "t" + E++)]) w[r] = {
                target: e,
                tweens: []
            };
            if (t && (e = w[r].tweens, e[i = e.length] = t, n))
                for (; - 1 < --i;) e[i] === t && e.splice(i, 1);
            return w[r].tweens
        },
        k = function(e, t, n, r, i) {
            var s, o, u;
            if (1 === r || 4 <= r) {
                e = i.length;
                for (s = 0; s < e; s++)
                    if ((u = i[s]) !== t) u._gc || u._enabled(!1, !1) && (o = !0);
                    else if (5 === r) break;
                return o
            }
            var a = t._startTime + 1e-10,
                f = [],
                l = 0,
                c;
            for (s = i.length; - 1 < --s;)
                if (!((u = i[s]) === t || u._gc || u._paused)) u._timeline !== t._timeline ? (c = c || L(t, 0), 0 === L(u, c) && (f[l++] = u)) : u._startTime <= a && u._startTime + u.totalDuration() / u._timeScale + 1e-10 > a && ((0 === t._duration || !u._initted) && 2e-10 >= a - u._startTime || (f[l++] = u));
            for (s = l; - 1 < --s;)
                if (u = f[s], 2 === r && u._kill(n, e) && (o = !0), 2 !== r || !u._firstPT && u._initted) u._enabled(!1, !1) && (o = !0);
            return o
        },
        L = function(e, t) {
            for (var n = e._timeline, r = n._timeScale, i = e._startTime; n._timeline;) {
                i += n._startTime;
                r *= n._timeScale;
                if (n._paused) return -100;
                n = n._timeline
            }
            i /= r;
            return i > t ? i - t : !e._initted && 2e-10 > i - t ? 1e-10 : (i += e.totalDuration() / e._timeScale / r) > t ? 0 : i - t - 1e-10
        };
    s._init = function() {
        this.vars.startAt && (this.vars.startAt.overwrite = 0, this.vars.startAt.immediateRender = !0, y.to(this.target, 0, this.vars.startAt));
        var e, t;
        this._ease = this.vars.ease instanceof h ? this.vars.easeParams instanceof Array ? this.vars.ease.config.apply(this.vars.ease, this.vars.easeParams) : this.vars.ease : "function" === typeof this.vars.ease ? new h(this.vars.ease, this.vars.easeParams) : y.defaultEase;
        this._easeType = this._ease._type;
        this._easePower = this._ease._power;
        this._firstPT = null;
        if (this._targets)
            for (e = this._targets.length; - 1 < --e;) {
                if (this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], this._overwrittenProps ? this._overwrittenProps[e] : null)) t = !0
            } else t = this._initProps(this.target, this._propLookup, this._siblings, this._overwrittenProps);
        t && y._onPluginEvent("_onInitAllProps", this);
        this._overwrittenProps && null == this._firstPT && "function" !== typeof this.target && this._enabled(!1, !1);
        if (this.vars.runBackwards)
            for (e = this._firstPT; e;) e.s += e.c, e.c = -e.c, e = e._next;
        this._onUpdate = this.vars.onUpdate;
        this._initted = !0
    };
    s._initProps = function(e, t, n, r) {
        var i, s, o, u, a;
        if (null == e) return !1;
        for (i in this.vars) {
            if (S[i]) {
                if ("onStartParams" === i || "onUpdateParams" === i || "onCompleteParams" === i || "onReverseCompleteParams" === i || "onRepeatParams" === i)
                    if (a = this.vars[i])
                        for (s = a.length; - 1 < --s;) "{self}" === a[s] && (a = this.vars[i] = a.concat(), a[s] = this)
            } else if (b[i] && (u = new b[i])._onInitTween(e, this.vars[i], this)) {
                this._firstPT = {
                    _next: this._firstPT,
                    t: u,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: !0,
                    n: i,
                    pg: !0,
                    pr: u._priority
                };
                for (s = u._overwriteProps.length; - 1 < --s;) t[u._overwriteProps[s]] = this._firstPT;
                if (u._priority || u._onInitAllProps) o = !0;
                if (u._onDisable || u._onEnable) this._notifyPluginsOfEnabled = !0
            } else this._firstPT = t[i] = {
                _next: this._firstPT,
                t: e,
                p: i,
                f: "function" === typeof e[i],
                n: i,
                pg: !1,
                pr: 0
            }, this._firstPT.s = !this._firstPT.f ? parseFloat(e[i]) : e[i.indexOf("set") || "function" !== typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)](), this._firstPT.c = "number" === typeof this.vars[i] ? this.vars[i] - this._firstPT.s : "string" === typeof this.vars[i] ? parseFloat(this.vars[i].split("=").join("")) : 0;
            this._firstPT && this._firstPT._next && (this._firstPT._next._prev = this._firstPT)
        }
        return r && this._kill(r, e) ? this._initProps(e, t, n, r) : 1 < this._overwrite && this._firstPT && 1 < n.length && k(e, this, t, this._overwrite, n) ? (this._kill(t, e), this._initProps(e, t, n, r)) : o
    };
    s.render = function(e, t, n) {
        var r = this._time,
            i, s;
        if (e >= this._duration) {
            if (this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, s = "onComplete"), 0 === this._duration) {
                if (0 === e || 0 > this._rawPrevTime) this._rawPrevTime !== e && (n = !0);
                this._rawPrevTime = e
            }
        } else if (0 >= e) {
            this._totalTime = this._time = 0;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
            if (0 !== r || 0 === this._duration && 0 < this._rawPrevTime) s = "onReverseComplete", i = this._reversed;
            0 > e ? (this._active = !1, 0 === this._duration && (0 <= this._rawPrevTime && (n = !0), this._rawPrevTime = e)) : this._initted || (n = !0)
        } else if (this._totalTime = this._time = e, this._easeType) {
            var o = e / this._duration,
                u = this._easeType,
                a = this._easePower;
            if (1 === u || 3 === u && .5 <= o) o = 1 - o;
            3 === u && (o *= 2);
            1 === a ? o *= o : 2 === a ? o *= o * o : 3 === a ? o *= o * o * o : 4 === a && (o *= o * o * o * o);
            this.ratio = 1 === u ? 1 - o : 2 === u ? o : .5 > e / this._duration ? o / 2 : 1 - o / 2
        } else this.ratio = this._ease.getRatio(e / this._duration); if (this._time !== r || n) {
            this._initted || (this._init(), !i && this._time && (this.ratio = this._ease.getRatio(this._time / this._duration)));
            !this._active && !this._paused && (this._active = !0);
            if (0 === r && this.vars.onStart && (0 !== this._time || 0 === this._duration)) t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c);
            for (e = this._firstPT; e;) {
                if (e.f) e.t[e.p](e.c * this.ratio + e.s);
                else e.t[e.p] = e.c * this.ratio + e.s;
                e = e._next
            }
            this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c));
            s && !this._gc && (i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), t || this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || c))
        }
    };
    s._kill = function(e, t) {
        "all" === e && (e = null);
        if (null == e && (null == t || t == this.target)) return this._enabled(!1, !1);
        var t = t || this._targets || this.target,
            n, r, i, s, o, u, a;
        if ((t instanceof Array || t.jquery) && "object" === typeof t[0])
            for (n = t.length; - 1 < --n;) this._kill(e, t[n]) && (o = !0);
        else {
            if (this._targets)
                for (n = this._targets.length; - 1 < --n;) {
                    if (t === this._targets[n]) {
                        s = this._propLookup[n] || {};
                        this._overwrittenProps = this._overwrittenProps || [];
                        r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                        break
                    }
                } else {
                    if (t !== this.target) return !1;
                    s = this._propLookup;
                    r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                } if (s)
                    for (i in u = e || s, a = e != r && "all" != r && e != s && (null == e || !0 != e._tempKill), u) {
                        if (n = s[i]) {
                            n.pg && n.t._kill(u) && (o = !0);
                            if (!n.pg || 0 === n.t._overwriteProps.length) n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null;
                            delete s[i]
                        }
                        a && (r[i] = 1)
                    }
        }
        return o
    };
    s.invalidate = function() {
        this._notifyPluginsOfEnabled && y._onPluginEvent("_onDisable", this);
        this._onUpdate = this._overwrittenProps = this._firstPT = null;
        this._initted = this._active = this._notifyPluginsOfEnabled = !1;
        this._propLookup = this._targets ? {} : [];
        return this
    };
    s._enabled = function(e, t) {
        if (e && this._gc)
            if (this._targets)
                for (var n = this._targets.length; - 1 < --n;) this._siblings[n] = C(this._targets[n], this, !0);
            else this._siblings = C(this.target, this, !0);
        m.prototype._enabled.call(this, e, t);
        return this._notifyPluginsOfEnabled && this._firstPT ? y._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
    };
    y.to = function(e, t, n) {
        return new y(e, t, n)
    };
    y.from = function(e, t, n) {
        n.runBackwards = !0;
        !1 != n.immediateRender && (n.immediateRender = !0);
        return new y(e, t, n)
    };
    y.fromTo = function(e, t, n, r) {
        r.startAt = n;
        n.immediateRender && (r.immediateRender = !0);
        return new y(e, t, r)
    };
    y.delayedCall = function(e, t, n, r, i) {
        return new y(t, 0, {
            delay: e,
            onComplete: t,
            onCompleteParams: n,
            onCompleteScope: r,
            onReverseComplete: t,
            onReverseCompleteParams: n,
            onReverseCompleteScope: r,
            immediateRender: !1,
            useFrames: i,
            overwrite: 0
        })
    };
    y.set = function(e, t) {
        return new y(e, 0, t)
    };
    y.killTweensOf = y.killDelayedCallsTo = function(e, t) {
        for (var n = y.getTweensOf(e), r = n.length; - 1 < --r;) n[r]._kill(t, e)
    };
    y.getTweensOf = function(e) {
        if (null != e) {
            var t, n, r;
            if ((e instanceof Array || e.jquery) && "object" === typeof e[0]) {
                t = e.length;
                for (n = []; - 1 < --t;) n = n.concat(y.getTweensOf(e[t]));
                for (t = n.length; - 1 < --t;) {
                    r = n[t];
                    for (e = t; - 1 < --e;) r === n[e] && n.splice(t, 1)
                }
            } else {
                n = C(e).concat();
                for (t = n.length; - 1 < --t;) n[t]._gc && n.splice(t, 1)
            }
            return n
        }
    };
    var A = f("plugins.TweenPlugin", function(e, t) {
        this._overwriteProps = (e || "").split(",");
        this._propName = this._overwriteProps[0];
        this._priority = t || 0
    }, !0);
    s = A.prototype;
    A.version = 12;
    A.API = 2;
    s._firstPT = null;
    s._addTween = function(e, t, n, r, i, s) {
        var o;
        if (null != r && (o = "number" === typeof r || "=" !== r.charAt(1) ? Number(r) - n : Number(r.split("=").join("")))) this._firstPT = {
            _next: this._firstPT,
            t: e,
            p: t,
            s: n,
            c: o,
            f: "function" == typeof e[t],
            n: i || t,
            r: s
        }, this._firstPT._next && (this._firstPT._next._prev = this._firstPT)
    };
    s.setRatio = function(e) {
        for (var t = this._firstPT, n; t;) {
            n = t.c * e + t.s;
            t.r && (n = n + (0 < n ? .5 : -.5) >> 0);
            if (t.f) t.t[t.p](n);
            else t.t[t.p] = n;
            t = t._next
        }
    };
    s._kill = function(e) {
        if (null != e[this._propName]) this._overwriteProps = [];
        else
            for (var t = this._overwriteProps.length; - 1 < --t;) null != e[this._overwriteProps[t]] && this._overwriteProps.splice(t, 1);
        for (t = this._firstPT; t;) null != e[t.n] && ((t._next && (t._next._prev = t._prev), t._prev) ? (t._prev._next = t._next, t._prev = null) : this._firstPT === t && (this._firstPT = t._next)), t = t._next;
        return !1
    };
    s._roundProps = function(e, t) {
        for (var n = this._firstPT; n;) {
            if (e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")]) n.r = t;
            n = n._next
        }
    };
    y._onPluginEvent = function(e, t) {
        var n = t._firstPT,
            r;
        if ("_onInitAllProps" === e) {
            for (var i, s, o, u; n;) {
                u = n._next;
                for (i = s; i && i.pr > n.pr;) i = i._next;
                (n._prev = i ? i._prev : o) ? n._prev._next = n: s = n;
                (n._next = i) ? i._prev = n: o = n;
                n = u
            }
            n = t._firstPT = s
        }
        for (; n;) n.pg && "function" === typeof n.t[e] && n.t[e]() && (r = !0), n = n._next;
        return r
    };
    A.activate = function(e) {
        for (var t = e.length; - 1 < --t;) e[t].API === A.API && (y._plugins[(new e[t])._propName] = e[t]);
        return !0
    };
    if (r = e._gsQueue) {
        for (i = 0; i < r.length; i++) r[i]();
        for (s in u) u[s].def || console.log("Warning: TweenLite encountered missing dependency: com.greensock." + s)
    }
})(window);
(window._gsQueue || (window._gsQueue = [])).push(function() {
    _gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, n) {
        var r = function(t) {
                e.call(this, t);
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                this._cycle = 0;
                this._yoyo = !0 == this.vars.yoyo;
                this._dirty = !0
            },
            i = [],
            s = new n(null, null, 1, 0),
            n = r.prototype = new e;
        n.constructor = r;
        n.kill()._gc = !1;
        r.version = 12;
        n.invalidate = function() {
            this._yoyo = !0 == this.vars.yoyo;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(!0);
            return e.prototype.invalidate.call(this)
        };
        n.addCallback = function(e, n, r, i) {
            return this.insert(t.delayedCall(0, e, r, i), n)
        };
        n.removeCallback = function(e, t) {
            if (null == t) this._kill(null, e);
            else
                for (var n = this.getTweensOf(e, !1), r = n.length, i = this._parseTimeOrLabel(t, !1); - 1 < --r;) n[r]._startTime === i && n[r]._enabled(!1, !1);
            return this
        };
        n.tweenTo = function(e, n) {
            var n = n || {},
                r = {
                    ease: s,
                    overwrite: 2,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                },
                o, u;
            for (o in n) r[o] = n[o];
            r.time = this._parseTimeOrLabel(e, !1);
            u = new t(this, Math.abs(Number(r.time) - this._time) / this._timeScale || .001, r);
            r.onStart = function() {
                u.target.paused(!0);
                u.vars.time != u.target.time() && u.duration(Math.abs(u.vars.time - u.target.time()) / u.target._timeScale);
                n.onStart && n.onStart.apply(n.onStartScope || u, n.onStartParams || i)
            };
            return u
        };
        n.tweenFromTo = function(e, t, n) {
            n = n || {};
            n.startAt = {
                time: this._parseTimeOrLabel(e, !1)
            };
            e = this.tweenTo(t, n);
            return e.duration(Math.abs(e.vars.time - e.vars.startAt.time) / this._timeScale || .001)
        };
        n.render = function(e, t, n) {
            this._gc && this._enabled(!0, !1);
            this._active = !this._paused;
            var r = !this._dirty ? this._totalDuration : this.totalDuration(),
                s = this._time,
                o = this._totalTime,
                u = this._startTime,
                a = this._timeScale,
                f = this._rawPrevTime,
                l = this._paused,
                c = this._cycle,
                h, p;
            if (e >= r) {
                this._locked || (this._totalTime = r, this._cycle = this._repeat);
                if (!this._reversed && !this._hasPausedChild() && (h = !0, p = "onComplete", 0 === this._duration && (0 === e || 0 > this._rawPrevTime))) this._rawPrevTime !== e && (n = !0);
                this._rawPrevTime = e;
                this._yoyo && 0 !== (this._cycle & 1) ? (this._time = 0, e = -1e-6) : (this._time = this._duration, e = this._duration + 1e-6)
            } else if (0 >= e) {
                this._locked || (this._totalTime = this._cycle = 0);
                this._time = 0;
                if (0 !== s || 0 === this._duration && 0 < this._rawPrevTime) p = "onReverseComplete", h = this._reversed;
                0 > e ? (this._active = !1, 0 === this._duration && 0 <= this._rawPrevTime && (n = !0)) : this._initted || (n = !0);
                this._rawPrevTime = e;
                e = -1e-6
            } else if (this._time = this._rawPrevTime = e, !this._locked && (this._totalTime = e, 0 !== this._repeat))(e = this._duration + this._repeatDelay, this._cycle = this._totalTime / e >> 0, 0 !== this._cycle && this._cycle === this._totalTime / e && this._cycle--, this._time = this._totalTime - this._cycle * e, this._yoyo && 0 != (this._cycle & 1) && (this._time = this._duration - this._time), this._time > this._duration) ? (this._time = this._duration, e = this._duration + 1e-6) : 0 > this._time ? (this._time = 0, e = -1e-6) : e = this._time;
            if (this._cycle !== c && !this._locked) {
                var d = this._yoyo && 0 !== (c & 1),
                    v = d === (this._yoyo && 0 !== (this._cycle & 1)),
                    m = this._totalTime,
                    g = this._cycle,
                    y = this._rawPrevTime,
                    b = this._time;
                this._totalTime = c * this._duration;
                this._cycle < c ? d = !d : this._totalTime += this._duration;
                this._time = s;
                this._rawPrevTime = f;
                this._cycle = c;
                this._locked = !0;
                s = d ? 0 : this._duration;
                this.render(s, t, !1);
                t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, vars.onRepeatParams || i);
                v && (s = d ? this._duration + 1e-6 : -1e-6, this.render(s, !0, !1));
                this._time = b;
                this._totalTime = m;
                this._cycle = g;
                this._rawPrevTime = y;
                this._locked = !1
            }
            if (this._time !== s || n) {
                this._initted || (this._initted = !0);
                0 === o && this.vars.onStart && 0 !== this._totalTime && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || i));
                if (this._time > s)
                    for (n = this._first; n;) {
                        o = n._next;
                        if (this._paused && !l) break;
                        else if (n._active || n._startTime <= this._time && !n._paused && !n._gc) n._reversed ? n.render((!n._dirty ? n._totalDuration : n.totalDuration()) - (e - n._startTime) * n._timeScale, t, !1) : n.render((e - n._startTime) * n._timeScale, t, !1);
                        n = o
                    } else
                        for (n = this._last; n;) {
                            o = n._prev;
                            if (this._paused && !l) break;
                            else if (n._active || n._startTime <= s && !n._paused && !n._gc) n._reversed ? n.render((!n._dirty ? n._totalDuration : n.totalDuration()) - (e - n._startTime) * n._timeScale, t, !1) : n.render((e - n._startTime) * n._timeScale, t, !1);
                            n = o
                        }
                this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || i));
                if (p && !this._locked && !this._gc && (u === this._startTime || a != this._timeScale))
                    if (0 === this._time || r >= this.totalDuration()) h && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), t || this.vars[p] && this.vars[p].apply(this.vars[p + "Scope"] || this, this.vars[p + "Params"] || i)
            }
        };
        n.getActive = function(e, t, n) {
            null == e && (e = !0);
            null == t && (t = !0);
            null == n && (n = !1);
            var r = [],
                e = this.getChildren(e, t, n),
                t = 0,
                n = e.length,
                i, s;
            for (i = 0; i < n; i++)
                if (s = e[i], !s._paused && s._timeline._time >= s._startTime && s._timeline._time < s._startTime + s._totalDuration / s._timeScale) {
                    var o;
                    e: {
                        for (o = s._timeline; o;) {
                            if (o._paused) {
                                o = !0;
                                break e
                            }
                            o = o._timeline
                        }
                        o = !1
                    }
                    o || (r[t++] = s)
                }
            return r
        };
        n.getLabelAfter = function(e) {
            !e && 0 !== e && (e = this._time);
            var t = this.getLabelsArray(),
                n = t.length,
                r;
            for (r = 0; r < n; r++)
                if (t[r].time > e) return t[r].name;
            return null
        };
        n.getLabelBefore = function(e) {
            null == e && (e = this._time);
            for (var t = this.getLabelsArray(), n = t.length; - 1 < --n;)
                if (t[n].time < e) return t[n].name;
            return null
        };
        n.getLabelsArray = function() {
            var e = [],
                t = 0,
                n;
            for (n in this._labels) e[t++] = {
                time: this._labels[n],
                name: n
            };
            e.sort(function(e, t) {
                return e.time - t.time
            });
            return e
        };
        n.progress = function(e) {
            return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * e + this._cycle * this._duration, !1)
        };
        n.totalProgress = function(e) {
            return !arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * e, !1)
        };
        n.totalDuration = function(t) {
            return !arguments.length ? (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration) : -1 == this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1))
        };
        n.time = function(e, t) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            e > this._duration && (e = this._duration);
            this._yoyo && 0 !== (this._cycle & 1) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 != this._repeat && (e += this._cycle * (this._duration + this._repeatDelay));
            return this.totalTime(e, t)
        };
        n.repeat = function(e) {
            if (!arguments.length) return this._repeat;
            this._repeat = e;
            return this._uncache(!0)
        };
        n.repeatDelay = function(e) {
            if (!arguments.length) return this._repeatDelay;
            this._repeatDelay = e;
            return this._uncache(!0)
        };
        n.yoyo = function(e) {
            if (!arguments.length) return this._yoyo;
            this._yoyo = e;
            return this
        };
        n.currentLabel = function(e) {
            return !arguments.length ? this.getLabelBefore(this._time + 1e-8) : this.seek(e, !0)
        };
        return r
    }, !0);
    _gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, n) {
        var r = function(e) {
                t.call(this, e);
                this._labels = {};
                this.autoRemoveChildren = !0 == this.vars.autoRemoveChildren;
                this.smoothChildTiming = !0 == this.vars.smoothChildTiming;
                this._sortChildren = !0;
                this._onUpdate = this.vars.onUpdate;
                for (var e = i.length, n, r; - 1 < --e;)
                    if (r = this.vars[i[e]])
                        for (n = r.length; - 1 < --n;) "{self}" === r[n] && (r = this.vars[i[e]] = r.concat(), r[n] = this);
                this.vars.tweens instanceof Array && this.insertMultiple(this.vars.tweens, 0, this.vars.align || "normal", this.vars.stagger || 0)
            },
            i = ["onStartParams", "onUpdateParams", "onCompleteParams", "onReverseCompleteParams", "onRepeatParams"],
            s = [],
            o = r.prototype = new t;
        o.constructor = r;
        o.kill()._gc = !1;
        o.to = function(e, t, r, i, s) {
            return this.insert(new n(e, t, r), this._parseTimeOrLabel(s) + (i || 0))
        };
        o.from = function(e, t, r, i, s) {
            return this.insert(n.from(e, t, r), this._parseTimeOrLabel(s) + (i || 0))
        };
        o.fromTo = function(e, t, r, i, s, o) {
            return this.insert(n.fromTo(e, t, r, i), this._parseTimeOrLabel(o) + (s || 0))
        };
        o.staggerTo = function(e, t, i, s, o, u, a, f, l) {
            a = new r({
                onComplete: a,
                onCompleteParams: f,
                onCompleteScope: l
            });
            s = s || 0;
            for (f = 0; f < e.length; f++) a.insert(new n(e[f], t, i), f * s);
            return this.insert(a, this._parseTimeOrLabel(u) + (o || 0))
        };
        o.staggerFrom = function(e, t, n, r, i, s, o, u, a) {
            null == n.immediateRender && (n.immediateRender = !0);
            n.runBackwards = !0;
            return this.staggerTo(e, t, n, r, i, s, o, u, a)
        };
        o.staggerFromTo = function(e, t, n, r, i, s, o, u, a, f) {
            r.startAt = n;
            n.immediateRender && (r.immediateRender = !0);
            return this.staggerTo(e, t, r, i, s, o, u, a, f)
        };
        o.call = function(e, t, r, i, s) {
            return this.insert(n.delayedCall(0, e, t, r), this._parseTimeOrLabel(s) + (i || 0))
        };
        o.set = function(e, t, r, i) {
            t.immediateRender = !1;
            return this.insert(new n(e, 0, t), this._parseTimeOrLabel(i) + (r || 0))
        };
        r.exportRoot = function(e, t) {
            e = e || {};
            null == e.smoothChildTiming && (e.smoothChildTiming = !0);
            var i = new r(e),
                s = i._timeline;
            null == t && (t = !0);
            s._remove(i, !0);
            i._startTime = 0;
            i._rawPrevTime = i._time = i._totalTime = s._time;
            for (var o = s._first, u; o;) u = o._next, (!t || !(o instanceof n && o.target == o.vars.onComplete)) && i.insert(o, o._startTime - o._delay), o = u;
            s.insert(i, 0);
            return i
        };
        o.insert = function(r, i) {
            if (!(r instanceof e)) {
                if (r instanceof Array) return this.insertMultiple(r, i);
                if ("string" === typeof r) return this.addLabel(r, this._parseTimeOrLabel(i || 0, !0));
                if ("function" === typeof r) r = n.delayedCall(0, r);
                else throw "ERROR: Cannot insert() " + r + " into the TimelineLite/Max because it is neither a tween, timeline, function, nor a String."
            }
            t.prototype.insert.call(this, r, this._parseTimeOrLabel(i || 0, !0));
            if (this._gc && !this._paused && this._time === this._duration && this._time < this.duration())
                for (var s = this; s._gc && s._timeline;) s._timeline.smoothChildTiming ? s.totalTime(s._totalTime, !0) : s._enabled(!0, !1), s = s._timeline;
            return this
        };
        o.remove = function(t) {
            if (t instanceof e) return this._remove(t, !1);
            if (t instanceof Array) {
                for (var n = t.length; - 1 < --n;) this.remove(t[n]);
                return this
            }
            return "string" === typeof t ? this.removeLabel(t) : this.kill(null, t)
        };
        o.append = function(e, t) {
            return this.insert(e, this.duration() + (t || 0))
        };
        o.insertMultiple = function(e, t, n, i) {
            for (var n = n || "normal", i = i || 0, s, o = this._parseTimeOrLabel(t || 0, !0), u = e.length, t = 0; t < u; t++) {
                if ((s = e[t]) instanceof Array) s = new r({
                    tweens: s
                });
                this.insert(s, o);
                "string" === typeof s || "function" === typeof s || ("sequence" === n ? o = s._startTime + s.totalDuration() / s._timeScale : "start" === n && (s._startTime -= s.delay()));
                o += i
            }
            return this._uncache(!0)
        };
        o.appendMultiple = function(e, t, n, r) {
            return this.insertMultiple(e, this.duration() + (t || 0), n, r)
        };
        o.addLabel = function(e, t) {
            this._labels[e] = t;
            return this
        };
        o.removeLabel = function(e) {
            delete this._labels[e];
            return this
        };
        o.getLabelTime = function(e) {
            return null != this._labels[e] ? this._labels[e] : -1
        };
        o._parseTimeOrLabel = function(e, t) {
            return null == e ? this.duration() : "string" === typeof e && isNaN(e) ? null == this._labels[e] ? t ? this._labels[e] = this.duration() : 0 : this._labels[e] : Number(e)
        };
        o.seek = function(e, t) {
            return this.totalTime(this._parseTimeOrLabel(e, !1), !1 != t)
        };
        o.stop = function() {
            return this.paused(!0)
        };
        o.gotoAndPlay = function(e, n) {
            return t.prototype.play.call(this, e, n)
        };
        o.gotoAndStop = function(e, t) {
            return this.pause(e, t)
        };
        o.render = function(e, t, n) {
            this._gc && this._enabled(!0, !1);
            this._active = !this._paused;
            var r = !this._dirty ? this._totalDuration : this.totalDuration(),
                i = this._time,
                o = this._startTime,
                u = this._timeScale,
                a = this._paused,
                l, c, h;
            if (e >= r) {
                this._totalTime = this._time = r;
                if (!this._reversed && !this._hasPausedChild() && (l = !0, h = "onComplete", 0 === this._duration && (0 === e || 0 > this._rawPrevTime))) this._rawPrevTime !== e && (n = !0);
                this._rawPrevTime = e;
                e = r + 1e-6
            } else if (0 >= e) {
                this._totalTime = this._time = 0;
                if (0 !== i || 0 === this._duration && 0 < this._rawPrevTime) h = "onReverseComplete", l = this._reversed;
                0 > e ? (this._active = !1, 0 === this._duration && 0 <= this._rawPrevTime && (n = !0)) : this._initted || (n = !0);
                this._rawPrevTime = e;
                e = -1e-6
            } else this._totalTime = this._time = this._rawPrevTime = e; if (this._time !== i || n) {
                this._initted || (this._initted = !0);
                0 === i && this.vars.onStart && 0 !== this._time && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s));
                if (this._time > i)
                    for (n = this._first; n;) {
                        c = n._next;
                        if (this._paused && !a) break;
                        else if (n._active || n._startTime <= this._time && !n._paused && !n._gc) n._reversed ? n.render((!n._dirty ? n._totalDuration : n.totalDuration()) - (e - n._startTime) * n._timeScale, t, !1) : n.render((e - n._startTime) * n._timeScale, t, !1);
                        n = c
                    } else
                        for (n = this._last; n;) {
                            c = n._prev;
                            if (this._paused && !a) break;
                            else if (n._active || n._startTime <= i && !n._paused && !n._gc) n._reversed ? n.render((!n._dirty ? n._totalDuration : n.totalDuration()) - (e - n._startTime) * n._timeScale, t, !1) : n.render((e - n._startTime) * n._timeScale, t, !1);
                            n = c
                        }
                this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s));
                if (h && !this._gc && (o === this._startTime || u != this._timeScale))
                    if (0 === this._time || r >= this.totalDuration()) l && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), t || this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || s)
            }
        };
        o._hasPausedChild = function() {
            for (var e = this._first; e;) {
                if (e._paused || e instanceof r && e._hasPausedChild()) return !0;
                e = e._next
            }
            return !1
        };
        o.getChildren = function(e, t, r, i) {
            for (var i = i || -9999999999, s = [], o = this._first, u = 0; o;) o._startTime < i || (o instanceof n ? !1 != t && (s[u++] = o) : (!1 != r && (s[u++] = o), !1 != e && (s = s.concat(o.getChildren(!0, t, r)), u = s.length))), o = o._next;
            return s
        };
        o.getTweensOf = function(e, t) {
            for (var r = n.getTweensOf(e), i = r.length, s = [], o = 0; - 1 < --i;)
                if (r[i].timeline === this || t && this._contains(r[i])) s[o++] = r[i];
            return s
        };
        o._contains = function(e) {
            for (e = e.timeline; e;) {
                if (e === this) return !0;
                e = e.timeline
            }
            return !1
        };
        o.shiftChildren = function(e, t, n) {
            for (var n = n || 0, r = this._first; r;) r._startTime >= n && (r._startTime += e), r = r._next;
            if (t)
                for (var i in this._labels) this._labels[i] >= n && (this._labels[i] += e);
            return this._uncache(!0)
        };
        o._kill = function(e, t) {
            if (null == e && null == t) return this._enabled(!1, !1);
            for (var n = null == t ? this.getChildren(!0, !0, !1) : this.getTweensOf(t), r = n.length, i = !1; - 1 < --r;) n[r]._kill(e, t) && (i = !0);
            return i
        };
        o.clear = function(e) {
            var t = this.getChildren(!1, !0, !0),
                n = t.length;
            for (this._time = this._totalTime = 0; - 1 < --n;) t[n]._enabled(!1, !1);
            !1 != e && (this._labels = {});
            return this._uncache(!0)
        };
        o.invalidate = function() {
            for (var e = this._first; e;) e.invalidate(), e = e._next;
            return this
        };
        o._enabled = function(e, n) {
            if (e == this._gc)
                for (var r = this._first; r;) r._enabled(e, !0), r = r._next;
            return t.prototype._enabled.call(this, e, n)
        };
        o.progress = function(e) {
            return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * e, !1)
        };
        o.duration = function(e) {
            if (!arguments.length) return this._dirty && this.totalDuration(), this._duration;
            0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e);
            return this
        };
        o.totalDuration = function(e) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var t = 0, n = this._first, r = -999999999999, i; n;) i = n._next, n._startTime < r && this._sortChildren ? this.insert(n, n._startTime - n._delay) : r = n._startTime, 0 > n._startTime && (t -= n._startTime, this.shiftChildren(-n._startTime, !1, -9999999999)), n = n._startTime + (!n._dirty ? n._totalDuration : n.totalDuration()) / n._timeScale, n > t && (t = n), n = i;
                    this._duration = this._totalDuration = t;
                    this._dirty = !1
                }
                return this._totalDuration
            }
            0 !== this.totalDuration() && 0 !== e && this.timeScale(this._totalDuration / e);
            return this
        };
        o.usesFrames = function() {
            for (var t = this._timeline; t._timeline;) t = t._timeline;
            return t === e._rootFramesTimeline
        };
        o.rawTime = function() {
            return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        };
        return r
    }, !0)
});
window._gsDefine && _gsQueue.pop()();
"undefined" == typeof JKL && (JKL = function() {});
JKL.ParseXML = function(e, t, n) {
    this.http = new JKL.ParseXML.HTTP(e, t, n, !1);
    return this
};
JKL.ParseXML.VERSION = "0.22";
JKL.ParseXML.MIME_TYPE_XML = "text/xml";
JKL.ParseXML.MAP_NODETYPE = " ELEMENT_NODE ATTRIBUTE_NODE TEXT_NODE CDATA_SECTION_NODE ENTITY_REFERENCE_NODE ENTITY_NODE PROCESSING_INSTRUCTION_NODE COMMENT_NODE DOCUMENT_NODE DOCUMENT_TYPE_NODE DOCUMENT_FRAGMENT_NODE NOTATION_NODE".split(" ");
JKL.ParseXML.prototype.async = function(e, t) {
    this.callback_func = e;
    this.callback_arg = t
};
JKL.ParseXML.prototype.onerror = function(e) {
    this.onerror_func = e
};
JKL.ParseXML.prototype.parse = function() {
    if (this.http) {
        if (this.onerror_func) this.http.onerror(this.onerror_func);
        if (this.callback_func) {
            var e = this;
            this.http.async(function() {
                if (e.http) {
                    var t = e.parseResponse();
                    e.callback_func(t, e.callback_arg)
                }
            })
        }
        this.http.load();
        if (!this.callback_func) return this.parseResponse()
    }
};
JKL.ParseXML.prototype.setOutputArrayAll = function() {
    this.setOutputArray(!0)
};
JKL.ParseXML.prototype.setOutputArrayAuto = function() {
    this.setOutputArray(null)
};
JKL.ParseXML.prototype.setOutputArrayNever = function() {
    this.setOutputArray(!1)
};
JKL.ParseXML.prototype.setOutputArrayElements = function(e) {
    this.setOutputArray(e)
};
JKL.ParseXML.prototype.setOutputArray = function(e) {
    "string" == typeof e && (e = [e]);
    if (e && "object" == typeof e)
        if (0 > e.length) e = !1;
        else {
            for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = !0;
            e = t;
            e["*"] && (e = !0)
        }
    this.usearray = e
};
JKL.ParseXML.prototype.parseResponse = function() {
    var e = this.http.documentElement();
    return this.parseDocument(e)
};
JKL.ParseXML.prototype.parseDocument = function(e) {
    if (e) {
        var t = this.parseElement(e);
        !0 == this.usearray ? t = [t] : !1 != this.usearray && null != this.usearray && this.usearray[e.nodeName] && (t = [t]);
        var n = {};
        n[e.nodeName] = t;
        return n
    }
};
JKL.ParseXML.prototype.parseElement = function(e) {
    if (7 != e.nodeType) {
        if (3 == e.nodeType || 4 == e.nodeType) return null == e.nodeValue.match(/[^\x00-\x20]/) ? void 0 : e.nodeValue;
        var t, n = {};
        if (e.attributes && e.attributes.length) {
            t = {};
            for (var r = 0; r < e.attributes.length; r++) {
                var i = e.attributes[r].nodeName;
                if ("string" == typeof i) {
                    var s = e.attributes[r].nodeValue;
                    s && ("undefined" == typeof n[i] && (n[i] = 0), n[i]++, this.addNode(t, i, n[i], s))
                }
            }
        }
        if (e.childNodes && e.childNodes.length) {
            i = !0;
            t && (i = !1);
            for (r = 0; r < e.childNodes.length && i; r++) s = e.childNodes[r].nodeType, 3 == s || 4 == s || (i = !1);
            if (i) {
                t || (t = "");
                for (r = 0; r < e.childNodes.length; r++) t += e.childNodes[r].nodeValue
            } else {
                t || (t = {});
                for (r = 0; r < e.childNodes.length; r++)
                    if (i = e.childNodes[r].nodeName, "string" == typeof i && (s = this.parseElement(e.childNodes[r]))) "undefined" == typeof n[i] && (n[i] = 0), n[i]++, this.addNode(t, i, n[i], s)
            }
        }
        return t
    }
};
JKL.ParseXML.prototype.addNode = function(e, t, n, r) {
    !0 == this.usearray ? (1 == n && (e[t] = []), e[t][e[t].length] = r) : !1 == this.usearray ? 1 == n && (e[t] = r) : null == this.usearray ? 1 == n ? e[t] = r : 2 == n ? e[t] = [e[t], r] : e[t][e[t].length] = r : this.usearray[t] ? (1 == n && (e[t] = []), e[t][e[t].length] = r) : 1 == n && (e[t] = r)
};
JKL.ParseXML.Text = function(e, t, n) {
    this.http = new JKL.ParseXML.HTTP(e, t, n, !0);
    return this
};
JKL.ParseXML.Text.prototype.parse = JKL.ParseXML.prototype.parse;
JKL.ParseXML.Text.prototype.async = JKL.ParseXML.prototype.async;
JKL.ParseXML.Text.prototype.onerror = JKL.ParseXML.prototype.onerror;
JKL.ParseXML.Text.prototype.parseResponse = function() {
    return this.http.responseText()
};
JKL.ParseXML.JSON = function(e, t, n) {
    this.http = new JKL.ParseXML.HTTP(e, t, n, !0);
    return this
};
JKL.ParseXML.JSON.prototype.parse = JKL.ParseXML.prototype.parse;
JKL.ParseXML.JSON.prototype.async = JKL.ParseXML.prototype.async;
JKL.ParseXML.JSON.prototype.onerror = JKL.ParseXML.prototype.onerror;
JKL.ParseXML.JSON.prototype.parseResponse = function() {
    var a = this.http.responseText();
    if ("undefined" != typeof a && a.length) return eval("(" + a + ")")
};
JKL.ParseXML.DOM = function(e, t, n) {
    this.http = new JKL.ParseXML.HTTP(e, t, n, !1);
    return this
};
JKL.ParseXML.DOM.prototype.parse = JKL.ParseXML.prototype.parse;
JKL.ParseXML.DOM.prototype.async = JKL.ParseXML.prototype.async;
JKL.ParseXML.DOM.prototype.onerror = JKL.ParseXML.prototype.onerror;
JKL.ParseXML.DOM.prototype.parseResponse = function() {
    return this.http.documentElement()
};
JKL.ParseXML.CSV = function(e, t, n) {
    this.http = new JKL.ParseXML.HTTP(e, t, n, !0);
    return this
};
JKL.ParseXML.CSV.prototype.parse = JKL.ParseXML.prototype.parse;
JKL.ParseXML.CSV.prototype.async = JKL.ParseXML.prototype.async;
JKL.ParseXML.CSV.prototype.onerror = JKL.ParseXML.prototype.onerror;
JKL.ParseXML.CSV.prototype.parseResponse = function() {
    var e = this.http.responseText();
    return this.parseCSV(e)
};
JKL.ParseXML.CSV.prototype.parseCSV = function(e) {
    for (var e = e.replace(/\r\n?/g, "\n"), t = 0, n = e.length, r = []; t < n;) {
        for (var i = []; t < n;) {
            if ('"' == e.charAt(t)) {
                for (var s = e.indexOf('"', t + 1); s < n && -1 < s && '"' == e.charAt(s + 1);) s = e.indexOf('"', s + 2);
                if (!(0 > s))
                    if ("," == e.charAt(s + 1)) {
                        t = e.substr(t + 1, s - t - 1);
                        t = t.replace(/""/g, '"');
                        i[i.length] = t;
                        t = s + 2;
                        continue
                    } else if ("\n" == e.charAt(s + 1) || n == s + 1) {
                    t = e.substr(t + 1, s - t - 1);
                    t = t.replace(/""/g, '"');
                    i[i.length] = t;
                    t = s + 2;
                    break
                }
            }
            var s = e.indexOf(",", t),
                o = e.indexOf("\n", t);
            0 > o && (o = n);
            if (-1 < s && s < o) i[i.length] = e.substr(t, s - t), t = s + 1;
            else {
                i[i.length] = e.substr(t, o - t);
                t = o + 1;
                break
            }
        }
        0 <= i.length && (r[r.length] = i)
    }
    if (!(0 > r.length)) return r
};
JKL.ParseXML.CSVmap = function(e, t, n) {
    this.http = new JKL.ParseXML.HTTP(e, t, n, !0);
    return this
};
JKL.ParseXML.CSVmap.prototype.parse = JKL.ParseXML.prototype.parse;
JKL.ParseXML.CSVmap.prototype.async = JKL.ParseXML.prototype.async;
JKL.ParseXML.CSVmap.prototype.onerror = JKL.ParseXML.prototype.onerror;
JKL.ParseXML.CSVmap.prototype.parseCSV = JKL.ParseXML.CSV.prototype.parseCSV;
JKL.ParseXML.CSVmap.prototype.parseResponse = function() {
    var e = this.http.responseText();
    if ((e = this.parseCSV(e)) && !(0 > e.length)) {
        for (var t = e.shift(), n = [], r = 0; r < e.length; r++) {
            for (var i = {}, s = 0; s < t.length && s < e[r].length; s++) i[t[s]] = e[r][s];
            n[n.length] = i
        }
        return n
    }
};
JKL.ParseXML.LoadVars = function(e, t, n) {
    this.http = new JKL.ParseXML.HTTP(e, t, n, !0);
    return this
};
JKL.ParseXML.LoadVars.prototype.parse = JKL.ParseXML.prototype.parse;
JKL.ParseXML.LoadVars.prototype.async = JKL.ParseXML.prototype.async;
JKL.ParseXML.LoadVars.prototype.onerror = JKL.ParseXML.prototype.onerror;
JKL.ParseXML.LoadVars.prototype.parseResponse = function() {
    for (var e = this.http.responseText(), e = e.replace(/\r\n?/g, "\n"), t = {}, e = e.split("&"), n = 0; n < e.length; n++) {
        var r = e[n].indexOf("=");
        if (-1 < r) {
            var i = decodeURIComponent(e[n].substr(0, r).replace("+", "%20")),
                r = decodeURIComponent(e[n].substr(r + 1).replace("+", "%20"));
            t[i] = r
        } else t[e[n]] = ""
    }
    return t
};
JKL.ParseXML.HTTP = function(e, t, n, r) {
    this.url = e;
    this.query = "string" == typeof t ? t : "";
    this.method = n ? n : "string" == typeof t ? "POST" : "GET";
    this.textmode = r ? !0 : !1;
    this.req = null;
    this.xmldom_flag = !1;
    this.already_done = this.callback_func = this.onerror_func = null;
    return this
};
JKL.ParseXML.HTTP.REQUEST_TYPE = "application/x-www-form-urlencoded";
JKL.ParseXML.HTTP.ACTIVEX_XMLDOM = "Microsoft.XMLDOM";
JKL.ParseXML.HTTP.ACTIVEX_XMLHTTP = "Microsoft.XMLHTTP";
JKL.ParseXML.HTTP.EPOCH_TIMESTAMP = "Thu, 01 Jun 1970 00:00:00 GMT";
JKL.ParseXML.HTTP.prototype.onerror = JKL.ParseXML.prototype.onerror;
JKL.ParseXML.HTTP.prototype.async = function(e) {
    this.async_func = e
};
JKL.ParseXML.HTTP.prototype.load = function() {
    if (window.ActiveXObject) {
        var e = JKL.ParseXML.HTTP.ACTIVEX_XMLHTTP;
        "GET" == this.method && !this.textmode && (e = JKL.ParseXML.HTTP.ACTIVEX_XMLDOM);
        this.req = new ActiveXObject(e)
    } else window.XMLHttpRequest && (this.req = new XMLHttpRequest);
    e = this.async_func ? !0 : !1;
    "undefined" != typeof this.req.send && this.req.open(this.method, this.url, e);
    "undefined" != typeof this.req.setRequestHeader && this.req.setRequestHeader("Content-Type", JKL.ParseXML.HTTP.REQUEST_TYPE);
    "undefined" != typeof this.req.overrideMimeType && !this.textmode && this.req.overrideMimeType(JKL.ParseXML.MIME_TYPE_XML);
    if (e) {
        var t = this;
        t.already_done = !1;
        this.req.onreadystatechange = function() {
            4 == t.req.readyState && t.checkResponse() && !t.already_done && (t.already_done = !0, t.async_func())
        }
    }
    "undefined" != typeof this.req.send ? this.req.send(this.query) : "undefined" != typeof this.req.load && (this.req.async = e, this.req.load(this.url));
    e || this.checkResponse()
};
JKL.ParseXML.HTTP.prototype.checkResponse = function() {
    if (this.req.parseError && 0 != this.req.parseError.errorCode) {
        if (this.onerror_func) this.onerror_func(this.req.parseError.reason);
        return !1
    }
    if (0 < this.req.status - 0 && 200 != this.req.status && 206 != this.req.status && 304 != this.req.status) {
        if (this.onerror_func) this.onerror_func(this.req.status);
        return !1
    }
    return !0
};
JKL.ParseXML.HTTP.prototype.documentElement = function() {
    if (this.req) return this.req.responseXML ? this.req.responseXML.documentElement : this.req.documentElement
};
JKL.ParseXML.HTTP.prototype.responseText = function() {
    if (this.req) {
        if (navigator.appVersion.match("KHTML")) {
            var e = escape(this.req.responseText);
            if (!e.match("%u") && e.match("%")) return decodeURIComponent(e)
        }
        return this.req.responseText
    }
};
"function" !== typeof Object.defineProperty && (Object.defineProperty = function(e, t, n) {
    "value" in n && (e[t] = n.value);
    "get" in n && e.__defineGetter__(t, n.get);
    "set" in n && e.__defineSetter__(t, n.set);
    return e
});
"function" !== typeof Object.defineProperties && (Object.defineProperties = function(e, t) {
    for (var n in t) t.hasOwnProperty(n) && Object.defineProperty(e, n, t[n]);
    return e
});
"function" !== typeof Object.create && (Object.create = function(e, t) {
    function n() {}
    n.prototype = e;
    var r = new n;
    t != null && Object.defineProperties(r, t);
    return r
});
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = function(e) {
    return e.__proto__
});
"function" !== typeof Function.prototype.bind && (Function.prototype.bind = function(e) {
    var t = this,
        n = Array.prototype.slice.call(arguments, 1),
        r = function() {},
        i = function() {
            var i = n.concat(Array.prototype.slice.call(arguments));
            return t.apply(this instanceof r ? this : e || window, i)
        };
    r.prototype = t.prototype;
    i.prototype = new r;
    return i
});
var enchant = function(e) {
    if (e != null) {
        e instanceof Array || (e = Array.prototype.slice.call(arguments));
        e = e.filter(function(e) {
            return "" + e
        })
    }(function t(n, r) {
        var i = [],
            s, o;
        for (o in n)
            if (n.hasOwnProperty(o))
                if (typeof n[o] === "function") window[o] = n[o];
                else if (typeof n[o] === "object" && Object.getPrototypeOf(n[o]) === Object.prototype)
            if (e == null) i.push(o);
            else {
                s = e.indexOf(r + o);
                if (s !== -1) {
                    i.push(o);
                    e.splice(s, 1)
                }
            }
        s = 0;
        for (o = i.length; s < o; s++) t(n[i[s]], r + i[s] + ".")
    })(enchant, "");
    if (e != null && e.length) throw Error("Cannot load module: " + e.join(", "))
};
window.addEventListener("message", function(e) {
    try {
        var t = JSON.parse(e.data);
        if (t.type === "event") enchant.Game.instance.dispatchEvent(new enchant.Event(t.value));
        else if (t.type === "debug") switch (t.value) {
            case "start":
                enchant.Game.instance.start();
                break;
            case "pause":
                enchant.Game.instance.pause();
                break;
            case "resume":
                enchant.Game.instance.resume();
                break;
            case "tick":
                enchant.Game.instance._tick()
        }
    } catch (n) {}
}, !1);
enchant.Class = function(e, t) {
    return enchant.Class.create(e, t)
};
enchant.Class.create = function(e, t) {
    if (arguments.length === 0) return enchant.Class.create(Object, t);
    if (arguments.length === 1 && typeof arguments[0] !== "function") return enchant.Class.create(Object, arguments[0]);
    for (var n in t)
        if (t.hasOwnProperty(n))
            if (typeof t[n] === "object" && Object.getPrototypeOf(t[n]) === Object.prototype) {
                if (!("enumerable" in t[n])) t[n].enumerable = true
            } else t[n] = {
                value: t[n],
                enumerable: true,
                writable: true
            };
    var r = function() {
        if (this instanceof r) r.prototype.initialize.apply(this, arguments);
        else return new r
    };
    r.prototype = Object.create(e.prototype, t);
    r.prototype.constructor = r;
    if (r.prototype.initialize == null) r.prototype.initialize = function() {
        e.apply(this, arguments)
    };
    return r
};
enchant.ENV = {
    VENDOR_PREFIX: function() {
        var e = navigator.userAgent;
        return e.indexOf("Opera") !== -1 ? "O" : e.indexOf("MSIE") !== -1 ? "ms" : e.indexOf("WebKit") !== -1 ? "webkit" : navigator.product === "Gecko" ? "Moz" : ""
    }(),
    TOUCH_ENABLED: function() {
        var e = document.createElement("div");
        e.setAttribute("ontouchstart", "return");
        return typeof e.ontouchstart === "function"
    }(),
    RETINA_DISPLAY: function() {
        if (navigator.userAgent.indexOf("iPhone") !== -1 && window.devicePixelRatio === 2) {
            var e = document.querySelector('meta[name="viewport"]');
            if (e == null) {
                e = document.createElement("meta");
                document.head.appendChild(e)
            }
            return true
        }
        return false
    }(),
    USE_FLASH_SOUND: function() {
        var e = navigator.userAgent,
            t = navigator.vendor || "";
        return location.href.indexOf("http") === 0 && e.indexOf("Mobile") === -1 && t.indexOf("Apple") !== -1
    }(),
    USE_DEFAULT_EVENT_TAGS: ["input", "textarea", "select", "area"],
    CANVAS_DRAWING_METHODS: "putImageData drawImage drawFocusRing fill stroke clearRect fillRect strokeRect fillText strokeText".split(" ")
};
enchant.Event = enchant.Class.create({
    initialize: function(e) {
        this.type = e;
        this.target = null;
        this.localY = this.localX = this.y = this.x = 0
    },
    _initPosition: function(e, t) {
        var n = enchant.Game.instance;
        this.x = this.localX = (e - n._pageX) / n.scale;
        this.y = this.localY = (t - n._pageY) / n.scale
    }
});
enchant.Event.LOAD = "load";
enchant.Event.PROGRESS = "progress";
enchant.Event.ENTER_FRAME = "enterframe";
enchant.Event.EXIT_FRAME = "exitframe";
enchant.Event.ENTER = "enter";
enchant.Event.EXIT = "exit";
enchant.Event.ADDED = "added";
enchant.Event.ADDED_TO_SCENE = "addedtoscene";
enchant.Event.REMOVED = "removed";
enchant.Event.REMOVED_FROM_SCENE = "removedfromscene";
enchant.Event.TOUCH_START = "touchstart";
enchant.Event.TOUCH_MOVE = "touchmove";
enchant.Event.TOUCH_END = "touchend";
enchant.Event.RENDER = "render";
enchant.Event.INPUT_START = "inputstart";
enchant.Event.INPUT_CHANGE = "inputchange";
enchant.Event.INPUT_END = "inputend";
enchant.Event.LEFT_BUTTON_DOWN = "leftbuttondown";
enchant.Event.LEFT_BUTTON_UP = "leftbuttonup";
enchant.Event.RIGHT_BUTTON_DOWN = "rightbuttondown";
enchant.Event.RIGHT_BUTTON_UP = "rightbuttonup";
enchant.Event.UP_BUTTON_DOWN = "upbuttondown";
enchant.Event.UP_BUTTON_UP = "upbuttonup";
enchant.Event.DOWN_BUTTON_DOWN = "downbuttondown";
enchant.Event.DOWN_BUTTON_UP = "downbuttonup";
enchant.Event.A_BUTTON_DOWN = "abuttondown";
enchant.Event.A_BUTTON_UP = "abuttonup";
enchant.Event.B_BUTTON_DOWN = "bbuttondown";
enchant.Event.B_BUTTON_UP = "bbuttonup";
enchant.EventTarget = enchant.Class.create({
    initialize: function() {
        this._listeners = {}
    },
    addEventListener: function(e, t) {
        var n = this._listeners[e];
        n == null ? this._listeners[e] = [t] : n.indexOf(t) === -1 && n.unshift(t)
    },
    on: function() {
        this.addEventListener.apply(this, arguments)
    },
    removeEventListener: function(e, t) {
        var n = this._listeners[e];
        if (n != null) {
            var r = n.indexOf(t);
            r !== -1 && n.splice(r, 1)
        }
    },
    clearEventListener: function(e) {
        e != null ? delete this._listeners[e] : this._listeners = {}
    },
    dispatchEvent: function(e) {
        e.target = this;
        e.localX = e.x - this._offsetX;
        e.localY = e.y - this._offsetY;
        if (this["on" + e.type] != null) this["on" + e.type](e);
        var t = this._listeners[e.type];
        if (t != null)
            for (var t = t.slice(), n = 0, r = t.length; n < r; n++) t[n].call(this, e)
    }
});
(function() {
    var e;
    enchant.Game = enchant.Class.create(enchant.EventTarget, {
        initialize: function(t, n) {
            if (window.document.body === null) throw Error("document.body is null. Please excute 'new Game()' in window.onload.");
            enchant.EventTarget.call(this);
            var r = true;
            if (e) {
                r = false;
                e.stop()
            }
            // play68_init();
            e = enchant.Game.instance = this;
            this.width = t || 320;
            this.height = n || 320;
            this.scale = 1;
            var i = document.getElementById("enchant-stage");
            if (i) {
                var s = window.getComputedStyle(i),
                    t = parseInt(s.width, 10),
                    n = parseInt(s.height, 10);
                if (t && n) this.scale = Math.min(t / this.width, n / this.height);
                else {
                    i.style.width = this.width + "px";
                    i.style.height = this.height + "px"
                }
                for (; i.firstChild;) i.removeChild(i.firstChild);
                i.style.position = "relative";
                s = i.getBoundingClientRect();
                this._pageX = Math.round(window.scrollX + s.left);
                this._pageY = Math.round(window.scrollY + s.top)
            } else {
                i = document.createElement("div");
                i.id = "enchant-stage";
                i.style.width = window.innerWidth + "px";
                i.style.height = window.innerHeight + "px";
                i.style.position = "absolute";
                document.body.firstChild ? document.body.insertBefore(i, document.body.firstChild) : document.body.appendChild(i);
                this.scale = Math.min(window.innerWidth / this.width, window.innerHeight / this.height);
                this._pageY = this._pageX = 0
            } if (!this.scale) this.scale = 1;
            i.style.fontSize = "12px";
            i.style.webkitTextSizeAdjust = "none";
            this._element = i;
            this.fps = 30;
            this.frame = 0;
            this.ready = null;
            this.running = false;
            this.assets = {};
            var o = this._assets = [];
            (function m(e) {
                e.assets instanceof Array && [].push.apply(o, e.assets);
                for (var t in e) e.hasOwnProperty(t) && typeof e[t] === "object" && Object.getPrototypeOf(e[t]) === Object.prototype && m(e[t])
            })(enchant);
            this._scenes = [];
            this.currentScene = null;
            this.rootScene = new enchant.Scene;
            this.pushScene(this.rootScene);
            this.loadingScene = new enchant.Scene;
            this.loadingScene.backgroundColor = "#000";
            var u = this.width * .9 | 0,
                f = this.width * .3 | 0,
                l = u * .05 | 0,
                i = new enchant.Sprite(u, f);
            i.x = (this.width - u) / 2;
            i.y = (this.height - f) / 2;
            var c = new enchant.Surface(u, f);
            c.context.fillStyle = "#fff";
            c.context.fillRect(0, 0, u, f);
            c.context.fillStyle = "#000";
            c.context.fillRect(l, l, u - l * 2, f - l * 2);
            i.image = c;
            var h = 0,
                p = 0;
            this.addEventListener("progress", function(e) {
                h = e.loaded / e.total
            });
            i.addEventListener("enterframe", function() {
                p = p * .9;
                p = p + h * .1;
                c.context.fillStyle = "#fff";
                c.context.fillRect(l, 0, (u - l * 2) * p, f)
            });
            this.loadingScene.addChild(i);
            this._soundID = this._surfaceID = this._mousedownID = 0;
            this._intervalID = null;
            this._offsetY = this._offsetX = 0;
            this.input = {};
            this._keybind = {};
            this.keybind(37, "left");
            this.keybind(38, "up");
            this.keybind(39, "right");
            this.keybind(40, "down");
            var d = 0;
            ["left", "right", "up", "down", "a", "b"].forEach(function(e) {
                this.addEventListener(e + "buttondown", function(t) {
                    var n;
                    if (!this.input[e]) {
                        this.input[e] = true;
                        n = new enchant.Event(d++ ? "inputchange" : "inputstart");
                        this.dispatchEvent(n)
                    }
                    this.currentScene.dispatchEvent(t);
                    n && this.currentScene.dispatchEvent(n)
                });
                this.addEventListener(e + "buttonup", function(t) {
                    var n;
                    if (this.input[e]) {
                        this.input[e] = false;
                        n = new enchant.Event(--d ? "inputchange" : "inputend");
                        this.dispatchEvent(n)
                    }
                    this.currentScene.dispatchEvent(t);
                    n && this.currentScene.dispatchEvent(n)
                })
            }, this);
            if (r) {
                var i = enchant.Game.instance._element,
                    v;
                document.addEventListener("keydown", function(t) {
                    e.dispatchEvent(new enchant.Event("keydown"));
                    if (37 <= t.keyCode && t.keyCode <= 40 || t.keyCode === 32) {
                        t.preventDefault();
                        t.stopPropagation()
                    }
                    if (e.running)
                        if (t = e._keybind[t.keyCode]) {
                            v = new enchant.Event(t + "buttondown");
                            e.dispatchEvent(v)
                        }
                }, true);
                document.addEventListener("keyup", function(t) {
                    if (e.running)
                        if (t = e._keybind[t.keyCode]) {
                            v = new enchant.Event(t + "buttonup");
                            e.dispatchEvent(v)
                        }
                }, true);
                if (enchant.ENV.TOUCH_ENABLED) {
                    i.addEventListener("touchstart", function(t) {
                        var n = t.target.tagName.toLowerCase();
                        if (enchant.ENV.USE_DEFAULT_EVENT_TAGS.indexOf(n) === -1) {
                            t.preventDefault();
                            e.running || t.stopPropagation()
                        }
                    }, true);
                    i.addEventListener("touchmove", function(t) {
                        var n = t.target.tagName.toLowerCase();
                        if (enchant.ENV.USE_DEFAULT_EVENT_TAGS.indexOf(n) === -1) {
                            t.preventDefault();
                            e.running || t.stopPropagation()
                        }
                    }, true);
                    i.addEventListener("touchend", function(t) {
                        var n = t.target.tagName.toLowerCase();
                        if (enchant.ENV.USE_DEFAULT_EVENT_TAGS.indexOf(n) === -1) {
                            t.preventDefault();
                            e.running || t.stopPropagation()
                        }
                    }, true)
                } else {
                    i.addEventListener("mousedown", function(t) {
                        var n = t.target.tagName.toLowerCase();
                        if (enchant.ENV.USE_DEFAULT_EVENT_TAGS.indexOf(n) === -1) {
                            t.preventDefault();
                            e._mousedownID++;
                            e.running || t.stopPropagation()
                        }
                    }, true);
                    i.addEventListener("mousemove", function(t) {
                        var n = t.target.tagName.toLowerCase();
                        if (enchant.ENV.USE_DEFAULT_EVENT_TAGS.indexOf(n) === -1) {
                            t.preventDefault();
                            e.running || t.stopPropagation()
                        }
                    }, true);
                    i.addEventListener("mouseup", function(t) {
                        var n = t.target.tagName.toLowerCase();
                        if (enchant.ENV.USE_DEFAULT_EVENT_TAGS.indexOf(n) === -1) {
                            t.preventDefault();
                            e.running || t.stopPropagation()
                        }
                    }, true)
                }
            }
        },
        preload: function(e) {
            e instanceof Array || (e = Array.prototype.slice.call(arguments));
            [].push.apply(this._assets, e)
        },
        load: function(t, n) {
            n == null && (n = function() {});
            var r = enchant.Game.findExt(t);
            if (enchant.Game._loadFuncs[r]) enchant.Game._loadFuncs[r].call(this, t, n, r);
            else {
                var i = new XMLHttpRequest;
                i.open("GET", t, true);
                i.onreadystatechange = function() {
                    if (i.readyState === 4) {
                        if (i.status !== 200 && i.status !== 0) throw Error(i.status + ": Cannot load an asset: " + t);
                        var r = i.getResponseHeader("Content-Type") || "";
                        if (r.match(/^image/)) {
                            e.assets[t] = enchant.Surface.load(t);
                            e.assets[t].addEventListener("load", n)
                        } else if (r.match(/^audio/)) {
                            e.assets[t] = enchant.Sound.load(t, r);
                            e.assets[t].addEventListener("load", n)
                        } else {
                            e.assets[t] = i.responseText;
                            n()
                        }
                    }
                };
                i.send(null)
            }
        },
        start: function() {
            if (this._intervalID) window.clearInterval(this._intervalID);
            else if (this._assets.length) {
                if (enchant.Sound.enabledInMobileSafari && !e._touched && enchant.ENV.VENDOR_PREFIX === "webkit" && enchant.ENV.TOUCH_ENABLED) {
                    var t = new enchant.Scene;
                    t.backgroundColor = "#000";
                    var n = Math.round(e.width / 10),
                        r = new enchant.Sprite(e.width, n);
                    r.y = (e.height - n) / 2;
                    r.image = new enchant.Surface(e.width, n);
                    r.image.context.fillStyle = "#fff";
                    r.image.context.font = n - 1 + "px bold Helvetica,Arial,sans-serif";
                    var i = r.image.context.measureText("Touch to Start").width;
                    r.image.context.fillText("Touch to Start", (e.width - i) / 2, n - 1);
                    t.addChild(r);
                    document.addEventListener("touchstart", function() {
                        e._touched = true;
                        e.removeScene(t);
                        e.start()
                    }, true);
                    e.pushScene(t);
                    return
                }
                var s = {},
                    n = this._assets.filter(function(e) {
                        return e in s ? false : s[e] = true
                    }),
                    o = 0,
                    u = n.length,
                    r = function() {
                        var t = new enchant.Event("progress");
                        t.loaded = ++o;
                        t.total = u;
                        e.dispatchEvent(t);
                        if (o === u) {
                            e.removeScene(e.loadingScene);
                            e.dispatchEvent(new enchant.Event("load"))
                        }
                    },
                    i = 0;
                for (; i < u; i++) this.load(n[i], r);
                this.pushScene(this.loadingScene)
            } else this.dispatchEvent(new enchant.Event("load"));
            this.currentTime = Date.now();
            this._intervalID = window.setInterval(function() {
                e._tick()
            }, 1e3 / this.fps);
            this.running = true
        },
        debug: function() {
            this._debug = true;
            this.rootScene.addEventListener("enterframe", function(e) {
                this._actualFps = 1 / e
            });
            this.start()
        },
        actualFps: {
            get: function() {
                return this._actualFps || this.fps
            }
        },
        _tick: function() {
            var e = Date.now(),
                t = new enchant.Event("enterframe");
            t.elapsed = e - this.currentTime;
            this.currentTime = e;
            for (var e = this.currentScene.childNodes.slice(), n = Array.prototype.push; e.length;) {
                var r = e.pop();
                r.dispatchEvent(t);
                r.age++;
                r.childNodes && n.apply(e, r.childNodes)
            }
            this.currentScene.age++;
            this.currentScene.dispatchEvent(t);
            this.dispatchEvent(t);
            this.dispatchEvent(new enchant.Event("exitframe"));
            this.frame++
        },
        stop: function() {
            if (this._intervalID) {
                window.clearInterval(this._intervalID);
                this._intervalID = null
            }
            this.running = false
        },
        pause: function() {
            if (this._intervalID) {
                window.clearInterval(this._intervalID);
                this._intervalID = null
            }
        },
        resume: function() {
            if (!this._intervalID) {
                this.currentTime = Date.now();
                this._intervalID = window.setInterval(function() {
                    e._tick()
                }, 1e3 / this.fps);
                this.running = true
            }
        },
        pushScene: function(e) {
            this._element.appendChild(e._element);
            this.currentScene && this.currentScene.dispatchEvent(new enchant.Event("exit"));
            this.currentScene = e;
            this.currentScene.dispatchEvent(new enchant.Event("enter"));
            return this._scenes.push(e)
        },
        popScene: function() {
            if (this.currentScene === this.rootScene) return this.currentScene;
            this._element.removeChild(this.currentScene._element);
            this.currentScene.dispatchEvent(new enchant.Event("exit"));
            this.currentScene = this._scenes[this._scenes.length - 2];
            this.currentScene.dispatchEvent(new enchant.Event("enter"));
            return this._scenes.pop()
        },
        replaceScene: function(e) {
            this.popScene();
            return this.pushScene(e)
        },
        removeScene: function(e) {
            if (this.currentScene === e) return this.popScene();
            var t = this._scenes.indexOf(e);
            if (t !== -1) {
                this._scenes.splice(t, 1);
                this._element.removeChild(e._element);
                return e
            }
            return null
        },
        keybind: function(e, t) {
            this._keybind[e] = t
        },
        getElapsedTime: function() {
            return this.frame / this.fps
        }
    });
    enchant.Game._loadFuncs = {};
    enchant.Game._loadFuncs.jpg = enchant.Game._loadFuncs.jpeg = enchant.Game._loadFuncs.gif = enchant.Game._loadFuncs.png = enchant.Game._loadFuncs.bmp = function(e, t) {
        this.assets[e] = enchant.Surface.load(e);
        this.assets[e].addEventListener("load", t)
    };
    enchant.Game._loadFuncs.mp3 = enchant.Game._loadFuncs.aac = enchant.Game._loadFuncs.m4a = enchant.Game._loadFuncs.wav = enchant.Game._loadFuncs.ogg = function(e, t, n) {
        this.assets[e] = enchant.Sound.load(e, "audio/" + n);
        this.assets[e].addEventListener("load", t)
    };
    enchant.Game.findExt = function(e) {
        var t = e.match(/\.\w+$/);
        return t && t.length > 0 ? t[0].slice(1).toLowerCase() : e.indexOf("data:") === 0 ? e.split(/[\/;]/)[1].toLowerCase() : null
    };
    enchant.Game.instance = null
})();
enchant.Node = enchant.Class.create(enchant.EventTarget, {
    initialize: function() {
        enchant.EventTarget.call(this);
        this.age = this._offsetY = this._offsetX = this._y = this._x = 0;
        this.scene = this.parentNode = null;
        this.addEventListener("touchstart", function(e) {
            this.parentNode && !this.parentNode._element && this.parentNode.dispatchEvent(e)
        });
        this.addEventListener("touchmove", function(e) {
            this.parentNode && !this.parentNode._element && this.parentNode.dispatchEvent(e)
        });
        this.addEventListener("touchend", function(e) {
            this.parentNode && !this.parentNode._element && this.parentNode.dispatchEvent(e)
        })
    },
    moveTo: function(e, t) {
        this._x = e;
        this._y = t;
        this._updateCoordinate()
    },
    moveBy: function(e, t) {
        this._x = this._x + e;
        this._y = this._y + t;
        this._updateCoordinate()
    },
    x: {
        get: function() {
            return this._x
        },
        set: function(e) {
            this._x = e;
            this._updateCoordinate()
        }
    },
    y: {
        get: function() {
            return this._y
        },
        set: function(e) {
            this._y = e;
            this._updateCoordinate()
        }
    },
    _updateCoordinate: function() {
        if (this.parentNode) {
            this._offsetX = this.parentNode._offsetX + this._x;
            this._offsetY = this.parentNode._offsetY + this._y
        } else {
            this._offsetX = this._x;
            this._offsetY = this._y
        }
    },
    remove: function() {
        this._listener && this.clearEventListener();
        this.parentNode && this.parentNode.removeChild(this)
    }
});
enchant.Entity = enchant.Class.create(enchant.Node, {
    initialize: function() {
        var e = enchant.Game.instance;
        enchant.Node.call(this);
        this._element = document.createElement("div");
        this._style = this._element.style;
        this._style.position = "absolute";
        this._height = this._width = 0;
        this._backgroundColor = null;
        this._opacity = 1;
        this._visible = true;
        this._buttonMode = null;
        if (enchant.Game.instance._debug) {
            this._style.border = "1px solid blue";
            this._style.margin = "-1px"
        }
        this.buttonMode = null;
        this.buttonPressed = false;
        this.addEventListener("touchstart", function() {
            if (this.buttonMode) {
                this.buttonPressed = true;
                var t = new enchant.Event(this.buttonMode + "buttondown");
                this.dispatchEvent(t);
                e.dispatchEvent(t)
            }
        });
        this.addEventListener("touchend", function() {
            if (this.buttonMode) {
                this.buttonPressed = false;
                var t = new enchant.Event(this.buttonMode + "buttonup");
                this.dispatchEvent(t);
                e.dispatchEvent(t)
            }
        });
        var t = this,
            n = function() {
                t.dispatchEvent(new enchant.Event("render"))
            };
        this.addEventListener("addedtoscene", function() {
            n();
            e.addEventListener("exitframe", n)
        });
        this.addEventListener("removedfromscene", function() {
            e.removeEventListener("exitframe", n)
        });
        this.addEventListener("render", function() {
            if (this._offsetX !== this._previousOffsetX) this._style.left = this._offsetX + "px";
            if (this._offsetY !== this._previousOffsetY) this._style.top = this._offsetY + "px";
            this._previousOffsetX = this._offsetX;
            this._previousOffsetY = this._offsetY
        });
        if (enchant.ENV.TOUCH_ENABLED) {
            this._element.addEventListener("touchstart", function(e) {
                for (var n = e.touches, r = 0, i = n.length; r < i; r++) {
                    e = new enchant.Event("touchstart");
                    e.identifier = n[r].identifier;
                    e._initPosition(n[r].pageX, n[r].pageY);
                    t.dispatchEvent(e)
                }
            }, false);
            this._element.addEventListener("touchmove", function(e) {
                for (var n = e.touches, r = 0, i = n.length; r < i; r++) {
                    e = new enchant.Event("touchmove");
                    e.identifier = n[r].identifier;
                    e._initPosition(n[r].pageX, n[r].pageY);
                    t.dispatchEvent(e)
                }
            }, false);
            this._element.addEventListener("touchend", function(e) {
                for (var n = e.changedTouches, r = 0, i = n.length; r < i; r++) {
                    e = new enchant.Event("touchend");
                    e.identifier = n[r].identifier;
                    e._initPosition(n[r].pageX, n[r].pageY);
                    t.dispatchEvent(e)
                }
            }, false)
        } else {
            this._element.addEventListener("mousedown", function(n) {
                var r = n.pageX,
                    i = n.pageY,
                    n = new enchant.Event("touchstart");
                n.identifier = e._mousedownID;
                n._initPosition(r, i);
                t.dispatchEvent(n);
                t._mousedown = true
            }, false);
            e._element.addEventListener("mousemove", function(n) {
                if (t._mousedown) {
                    var r = n.pageX,
                        i = n.pageY,
                        n = new enchant.Event("touchmove");
                    n.identifier = e._mousedownID;
                    n._initPosition(r, i);
                    t.dispatchEvent(n)
                }
            }, false);
            e._element.addEventListener("mouseup", function(n) {
                if (t._mousedown) {
                    var r = n.pageX,
                        i = n.pageY,
                        n = new enchant.Event("touchend");
                    n.identifier = e._mousedownID;
                    n._initPosition(r, i);
                    t.dispatchEvent(n);
                    t._mousedown = false
                }
            }, false)
        }
    },
    id: {
        get: function() {
            return this._element.id
        },
        set: function(e) {
            this._element.id = e
        }
    },
    className: {
        get: function() {
            return this._element.className
        },
        set: function(e) {
            this._element.className = e
        }
    },
    width: {
        get: function() {
            return this._width
        },
        set: function(e) {
            this._style.width = (this._width = e) + "px"
        }
    },
    height: {
        get: function() {
            return this._height
        },
        set: function(e) {
            this._style.height = (this._height = e) + "px"
        }
    },
    backgroundColor: {
        get: function() {
            return this._backgroundColor
        },
        set: function(e) {
            this._element.style.backgroundColor = this._backgroundColor = e
        }
    },
    opacity: {
        get: function() {
            return this._opacity
        },
        set: function(e) {
            this._style.opacity = this._opacity = e
        }
    },
    visible: {
        get: function() {
            return this._visible
        },
        set: function(e) {
            this._style.display = (this._visible = e) ? "block" : "none"
        }
    },
    touchEnabled: {
        get: function() {
            return this._touchEnabled
        },
        set: function(e) {
            this._style.pointerEvents = (this._touchEnabled = e) ? "all" : "none"
        }
    },
    intersect: function(e) {
        return this._offsetX < e._offsetX + e.width && e._offsetX < this._offsetX + this.width && this._offsetY < e._offsetY + e.height && e._offsetY < this._offsetY + this.height
    },
    within: function(e, t) {
        t == null && (t = (this.width + this.height + e.width + e.height) / 4);
        var n;
        return (n = this._offsetX - e._offsetX + (this.width - e.width) / 2) * n + (n = this._offsetY - e._offsetY + (this.height - e.height) / 2) * n < t * t
    },
    scale: function(e, t) {
        t == null && (t = e);
        this._scaleX = this._scaleX * e;
        this._scaleY = this._scaleY * t;
        this._dirty = true
    },
    rotate: function(e) {
        this._rotation = this._rotation + e;
        this._dirty = true
    },
    scaleX: {
        get: function() {
            return this._scaleX
        },
        set: function(e) {
            this._scaleX = e;
            this._dirty = true
        }
    },
    scaleY: {
        get: function() {
            return this._scaleY
        },
        set: function(e) {
            this._scaleY = e;
            this._dirty = true
        }
    },
    rotation: {
        get: function() {
            return this._rotation
        },
        set: function(e) {
            this._rotation = e;
            this._dirty = true
        }
    }
});
enchant.Sprite = enchant.Class.create(enchant.Entity, {
    initialize: function(e, t) {
        enchant.Entity.call(this);
        this.width = e;
        this.height = t;
        this._scaleY = this._scaleX = 1;
        this._rotation = 0;
        this._dirty = false;
        this._image = null;
        this._frame = 0;
        this._frameSequence = [];
        this._style.overflow = "hidden";
        this.addEventListener("render", function() {
            if (this._dirty) {
                var e = ["rotate(", this._rotation, "deg)", "scale(", this._scaleX, ",", this._scaleY, ")"];
                navigator.userAgent.indexOf("iPhone") !== -1 && e.push("translate3d(0,0,0)");
                this._style[enchant.ENV.VENDOR_PREFIX + "Transform"] = e.join("");
                this._dirty = false
            }
        });
        this.addEventListener("enterframe", function() {
            if (this._frameSequence.length !== 0) {
                var e = this._frameSequence.shift();
                if (e === null) this._frameSequence = [];
                else {
                    this._setFrame(e);
                    this._frameSequence.push(e)
                }
            }
        });
        if (enchant.Game.instance._debug) {
            this._style.border = "1px solid red";
            this._style.margin = "-1px"
        }
    },
    image: {
        get: function() {
            return this._image
        },
        set: function(e) {
            if (e !== this._image) {
                if (this._image != null)
                    if (this._image.css) this._style.backgroundImage = "";
                    else if (this._element.firstChild) {
                    this._element.removeChild(this._element.firstChild);
                    if (this._dirtyListener) {
                        this.removeEventListener("render", this._dirtyListener);
                        this._dirtyListener = null
                    } else this._image._parent = null
                }
                if (e != null)
                    if (e._css) this._style.backgroundImage = e._css;
                    else if (e._parent) {
                    var t = document.createElement("canvas"),
                        n = t.getContext("2d");
                    t.width = e.width;
                    t.height = e.height;
                    n.drawImage(e._element, 0, 0);
                    this._dirtyListener = function() {
                        if (e._dirty) {
                            n.drawImage(e._element);
                            e._dirty = false
                        }
                    };
                    this.addEventListener("render", this._dirtyListener);
                    this._element.appendChild(t)
                } else {
                    e._parent = this;
                    this._element.appendChild(e._element)
                }
                this._image = e;
                this.frame = this.frame
            }
        }
    },
    frame: {
        get: function() {
            return this._frame
        },
        set: function(e) {
            if (e instanceof Array) {
                var t = e.shift();
                this._setFrame(t);
                e.push(t);
                this._frameSequence = e
            } else {
                this._setFrame(e);
                this._frameSequence = [];
                this._frame = e
            }
        }
    },
    _setFrame: function(e) {
        if (this._image != null) {
            this._frame = e;
            var t = this._image.width / this._width | 0;
            if (this._image._css) this._style.backgroundPosition = [-(e % t | 0) * this._width, "px ", -(e / t | 0) * this._height, "px"].join("");
            else if (this._element.firstChild) {
                var n = this._element.firstChild.style;
                n.left = -(e % t | 0) * this._width + "px";
                n.top = -(e / t | 0) * this._height + "px"
            }
        }
    }
});
enchant.Label = enchant.Class.create(enchant.Entity, {
    initialize: function(e) {
        enchant.Entity.call(this);
        this.width = 300;
        this.text = e;
        this.textAlign = "left"
    },
    text: {
        get: function() {
            return this._element.innerHTML
        },
        set: function(e) {
            this._element.innerHTML = e
        }
    },
    textAlign: {
        get: function() {
            return this._style.textAlign
        },
        set: function(e) {
            this._style.textAlign = e
        }
    },
    font: {
        get: function() {
            return this._style.font
        },
        set: function(e) {
            this._style.font = e
        }
    },
    color: {
        get: function() {
            return this._style.color
        },
        set: function(e) {
            this._style.color = e
        }
    }
});
(function() {
    enchant.Map = enchant.Class.create(enchant.Entity, {
        initialize: function(e, t) {
            var n = enchant.Game.instance;
            enchant.Entity.call(this);
            var r = document.createElement("canvas");
            if (enchant.ENV.RETINA_DISPLAY && n.scale === 2) {
                r.width = n.width * 2;
                r.height = n.height * 2;
                this._style.webkitTransformOrigin = "0 0";
                this._style.webkitTransform = "scale(0.5)"
            } else {
                r.width = n.width;
                r.height = n.height
            }
            this._element.appendChild(r);
            this._context = r.getContext("2d");
            this._tileWidth = e || 0;
            this._tileHeight = t || 0;
            this._image = null;
            this._data = [
                [
                    []
                ]
            ];
            this.touchEnabled = this._tight = this._dirty = false;
            this.collisionData = null;
            this._listeners.render = null;
            this.addEventListener("render", function() {
                if (this._dirty || this._previousOffsetX == null) {
                    this._dirty = false;
                    this.redraw(0, 0, n.width, n.height)
                } else if (this._offsetX !== this._previousOffsetX || this._offsetY !== this._previousOffsetY)
                    if (this._tight) {
                        var e = -this._offsetX,
                            t = -this._offsetY,
                            r = -this._previousOffsetX,
                            i = -this._previousOffsetY,
                            s = e - r + n.width,
                            o = r - e + n.width,
                            u = t - i + n.height,
                            a = i - t + n.height;
                        if (s > this._tileWidth && o > this._tileWidth && u > this._tileHeight && a > this._tileHeight) {
                            var f;
                            if (s < o) {
                                f = 0;
                                e = r - e;
                                o = s
                            } else {
                                f = e - r;
                                e = 0
                            } if (u < a) {
                                s = 0;
                                t = i - t
                            } else {
                                s = t - i;
                                t = 0;
                                u = a
                            } if (n._buffer == null) {
                                n._buffer = document.createElement("canvas");
                                n._buffer.width = this._context.canvas.width;
                                n._buffer.height = this._context.canvas.height
                            }
                            a = n._buffer.getContext("2d");
                            if (this._doubledImage) {
                                a.clearRect(0, 0, o * 2, u * 2);
                                a.drawImage(this._context.canvas, f * 2, s * 2, o * 2, u * 2, 0, 0, o * 2, u * 2);
                                a = this._context;
                                a.clearRect(e * 2, t * 2, o * 2, u * 2);
                                a.drawImage(n._buffer, 0, 0, o * 2, u * 2, e * 2, t * 2, o * 2, u * 2)
                            } else {
                                a.clearRect(0, 0, o, u);
                                a.drawImage(this._context.canvas, f, s, o, u, 0, 0, o, u);
                                a = this._context;
                                a.clearRect(e, t, o, u);
                                a.drawImage(n._buffer, 0, 0, o, u, e, t, o, u)
                            }
                            e === 0 ? this.redraw(o, 0, n.width - o, n.height) : this.redraw(0, 0, n.width - o, n.height);
                            t === 0 ? this.redraw(0, u, n.width, n.height - u) : this.redraw(0, 0, n.width, n.height - u)
                        } else this.redraw(0, 0, n.width, n.height)
                    } else this.redraw(0, 0, n.width, n.height);
                this._previousOffsetX = this._offsetX;
                this._previousOffsetY = this._offsetY
            })
        },
        loadData: function(e) {
            this._data = Array.prototype.slice.apply(arguments);
            this._dirty = true;
            this._tight = false;
            for (var t = 0, n = this._data.length; t < n; t++) {
                for (var r = 0, e = this._data[t], i = 0, s = e.length; i < s; i++)
                    for (var o = 0, u = e[i].length; o < u; o++) e[i][o] >= 0 && r++;
                if (r / (e.length * e[0].length) > .2) {
                    this._tight = true;
                    break
                }
            }
        },
        checkTile: function(e, t) {
            if (e < 0 || this.width <= e || t < 0 || this.height <= t) return false;
            var n = this._image.width,
                r = this._image.height,
                r = this._tileHeight || r,
                e = e / (this._tileWidth || n) | 0;
            return this._data[0][t / r | 0][e]
        },
        hitTest: function(e, t) {
            if (e < 0 || this.width <= e || t < 0 || this.height <= t) return false;
            var n = this._image.width,
                r = this._image.height,
                i = this._tileWidth || n,
                s = this._tileHeight || r,
                e = e / i | 0,
                t = t / s | 0;
            if (this.collisionData != null) return this.collisionData[t] && !!this.collisionData[t][e];
            for (var o = 0, u = this._data.length; o < u; o++) {
                var a = this._data[o],
                    f;
                if (a[t] != null && (f = a[t][e]) != null && 0 <= f && f < (n / i | 0) * (r / s | 0)) return true
            }
            return false
        },
        image: {
            get: function() {
                return this._image
            },
            set: function(e) {
                var t = enchant.Game.instance;
                this._image = e;
                if (enchant.ENV.RETINA_DISPLAY && t.scale === 2) {
                    for (var t = new enchant.Surface(e.width * 2, e.height * 2), n = this._tileWidth || e.width, r = this._tileHeight || e.height, i = e.width / n | 0, s = e.height / r | 0, o = 0; o < s; o++)
                        for (var u = 0; u < i; u++) t.draw(e, u * n, o * r, n, r, u * n * 2, o * r * 2, n * 2, r * 2);
                    this._doubledImage = t
                }
                this._dirty = true
            }
        },
        tileWidth: {
            get: function() {
                return this._tileWidth
            },
            set: function(e) {
                this._tileWidth = e;
                this._dirty = true
            }
        },
        tileHeight: {
            get: function() {
                return this._tileHeight
            },
            set: function(e) {
                this._tileHeight = e;
                this._dirty = true
            }
        },
        width: {
            get: function() {
                return this._tileWidth * this._data[0][0].length
            }
        },
        height: {
            get: function() {
                return this._tileHeight * this._data[0].length
            }
        },
        redraw: function(e, t, n, r) {
            if (this._image != null) {
                var i, s, o, u, a;
                if (this._doubledImage) {
                    i = this._doubledImage;
                    s = this._tileWidth * 2;
                    o = this._tileHeight * 2;
                    u = -this._offsetX * 2;
                    a = -this._offsetY * 2;
                    e = e * 2;
                    t = t * 2;
                    n = n * 2;
                    r = r * 2
                } else {
                    i = this._image;
                    s = this._tileWidth;
                    o = this._tileHeight;
                    u = -this._offsetX;
                    a = -this._offsetY
                }
                var f = i.width / s | 0,
                    l = i.height / o | 0,
                    c = Math.max((e + u) / s | 0, 0),
                    h = Math.max((t + a) / o | 0, 0),
                    p = Math.ceil((e + u + n) / s),
                    d = Math.ceil((t + a + r) / o);
                i = i._element;
                var v = this._context;
                v.clearRect(e, t, n, r);
                n = 0;
                for (r = this._data.length; n < r; n++)
                    for (var m = this._data[n], g = Math.min(p, m[0].length), y = Math.min(d, m.length), t = h; t < y; t++)
                        for (e = c; e < g; e++) {
                            var b = m[t][e];
                            0 <= b && b < f * l && v.drawImage(i, b % f * s, (b / f | 0) * o, s, o, e * s - u, t * o - a, s, o)
                        }
            }
        }
    })
})();
enchant.Group = enchant.Class.create(enchant.Node, {
    initialize: function() {
        enchant.Node.call(this);
        this.childNodes = [];
        this._y = this._x = 0
    },
    addChild: function(e) {
        this.childNodes.push(e);
        e.parentNode = this;
        e.dispatchEvent(new enchant.Event("added"));
        if (this.scene) {
            var t = new enchant.Event("addedtoscene");
            e.scene = this.scene;
            e.dispatchEvent(t);
            e._updateCoordinate();
            var n = document.createDocumentFragment(),
                r, i = Array.prototype.push;
            if (e._element) n.appendChild(e._element);
            else if (e.childNodes)
                for (r = e.childNodes.slice().reverse(); r.length;) {
                    e = r.pop();
                    e.scene = this.scene;
                    e.dispatchEvent(t);
                    e._element ? n.appendChild(e._element) : e.childNodes && i.apply(r, e.childNodes.reverse())
                }
            if (n.childNodes.length) {
                for (var s, t = this; t.parentNode;) {
                    r = t.parentNode.childNodes;
                    for (r = r.slice(r.indexOf(t) + 1).reverse(); r.length;) {
                        e = r.pop();
                        if (e._element) {
                            s = e._element;
                            break
                        } else e.childNodes && i.apply(r, e.childNodes.slice().reverse())
                    }
                    t = t.parentNode
                }
                s ? this.scene._element.insertBefore(n, s) : this.scene._element.appendChild(n)
            }
        }
    },
    insertBefore: function(e, t) {
        var n = this.childNodes.indexOf(t);
        if (n !== -1) {
            this.childNodes.splice(n, 0, e);
            e.parentNode = this;
            e.dispatchEvent(new enchant.Event("added"));
            if (this.scene) {
                var r = new enchant.Event("addedtoscene");
                e.scene = this.scene;
                e.dispatchEvent(r);
                e._updateCoordinate();
                var i = document.createDocumentFragment(),
                    s, o = Array.prototype.push;
                if (e._element) i.appendChild(e._element);
                else if (e.childNodes)
                    for (s = e.childNodes.slice().reverse(); s.length;) {
                        e = s.pop();
                        e.scene = this.scene;
                        e.dispatchEvent(r);
                        e._element ? i.appendChild(e._element) : e.childNodes && o.apply(s, e.childNodes.reverse())
                    }
                if (i.childNodes.length) {
                    for (var u, r = t; r !== this;) {
                        if (n != null) {
                            s = this.childNodes.slice(n + 1).reverse();
                            n = null
                        } else {
                            s = r.parentNode.childNodes;
                            s = s.slice(s.indexOf(r) + 1).reverse()
                        }
                        for (; s.length;) {
                            e = s.pop();
                            if (e._element) {
                                u = e._element;
                                break
                            } else e.childNodes && o.apply(s, e.childNodes.slice().reverse())
                        }
                        r = r.parentNode
                    }
                    u ? this.scene._element.insertBefore(i, u) : this.scene._element.appendChild(i)
                }
            }
        } else this.addChild(e)
    },
    removeChild: function(e) {
        var t = this.childNodes.indexOf(e);
        if (t !== -1) {
            this.childNodes.splice(t, 1);
            e.parentNode = null;
            e.dispatchEvent(new enchant.Event("removed"));
            if (this.scene) {
                t = new enchant.Event("removedfromscene");
                e.scene = null;
                e.dispatchEvent(t);
                if (e._element) this.scene._element.removeChild(e._element);
                else if (e.childNodes)
                    for (var n = e.childNodes.slice(), r = Array.prototype.push; n.length;) {
                        e = n.pop();
                        e.scene = null;
                        e.dispatchEvent(t);
                        e._element ? this.scene._element.removeChild(e._element) : e.childNodes && r.apply(n, e.childNodes)
                    }
            }
        }
    },
    firstChild: {
        get: function() {
            return this.childNodes[0]
        }
    },
    lastChild: {
        get: function() {
            return this.childNodes[this.childNodes.length - 1]
        }
    },
    _updateCoordinate: function() {
        if (this.parentNode) {
            this._offsetX = this.parentNode._offsetX + this._x;
            this._offsetY = this.parentNode._offsetY + this._y
        } else {
            this._offsetX = this._x;
            this._offsetY = this._y
        }
        for (var e = 0, t = this.childNodes.length; e < t; e++) this.childNodes[e]._updateCoordinate()
    }
});
enchant.RGroup = enchant.Class.create(enchant.Group, {
    initialize: function(e, t) {
        enchant.Group.call(this);
        if (arguments.length < 2) throw "Width and height of RGroup must be specified";
        this.width = e;
        this.height = t;
        this.rotationOrigin = {
            x: e / 2,
            y: t / 2
        };
        this._rotation = 0
    },
    addChild: function(e) {
        enchant.Group.prototype.addChild.apply(this, arguments);
        e.transformOrigin = "0 0"
    },
    rotation: {
        get: function() {
            return this._rotation
        },
        set: function(e) {
            var t = e - this._rotation;
            if (t !== 0) {
                for (var n = t / 180 * Math.PI, r = Math.sin(n), n = Math.cos(n), i = this.width / 2, s = this.height / 2, o = 0, u = this.childNodes.length; o < u; o++) {
                    var a = this.childNodes[o];
                    a.rotation = a.rotation - t;
                    var f = a.x - i,
                        l = a.y - s;
                    a.x = +n * f + r * l + i;
                    a.y = -r * f + n * l + s
                }
                this._rotation = e
            }
        }
    }
});
enchant.Scene = enchant.Class.create(enchant.Group, {
    initialize: function() {
        var e = enchant.Game.instance;
        enchant.Group.call(this);
        this._element = document.createElement("div");
        this._element.style.position = "absolute";
        this._element.style.overflow = "hidden";
        this._element.style.width = (this.width = e.width) + "px";
        this._element.style.height = (this.height = e.height) + "px";
        this._element.style[enchant.ENV.VENDOR_PREFIX + "TransformOrigin"] = "0 0";
        this._element.style[enchant.ENV.VENDOR_PREFIX + "Transform"] = "scale(" + e.scale + ")";
        this.scene = this;
        var t = this;
        if (enchant.ENV.TOUCH_ENABLED) {
            this._element.addEventListener("touchstart", function(e) {
                for (var n = e.touches, r = 0, i = n.length; r < i; r++) {
                    e = new enchant.Event("touchstart");
                    e.identifier = n[r].identifier;
                    e._initPosition(n[r].pageX, n[r].pageY);
                    t.dispatchEvent(e)
                }
            }, false);
            this._element.addEventListener("touchmove", function(e) {
                for (var n = e.touches, r = 0, i = n.length; r < i; r++) {
                    e = new enchant.Event("touchmove");
                    e.identifier = n[r].identifier;
                    e._initPosition(n[r].pageX, n[r].pageY);
                    t.dispatchEvent(e)
                }
            }, false);
            this._element.addEventListener("touchend", function(e) {
                for (var n = e.changedTouches, r = 0, i = n.length; r < i; r++) {
                    e = new enchant.Event("touchend");
                    e.identifier = n[r].identifier;
                    e._initPosition(n[r].pageX, n[r].pageY);
                    t.dispatchEvent(e)
                }
            }, false)
        } else {
            this._element.addEventListener("mousedown", function(n) {
                var r = n.pageX,
                    i = n.pageY,
                    n = new enchant.Event("touchstart");
                n.identifier = e._mousedownID;
                n._initPosition(r, i);
                t.dispatchEvent(n);
                t._mousedown = true
            }, false);
            e._element.addEventListener("mousemove", function(n) {
                if (t._mousedown) {
                    var r = n.pageX,
                        i = n.pageY,
                        n = new enchant.Event("touchmove");
                    n.identifier = e._mousedownID;
                    n._initPosition(r, i);
                    t.dispatchEvent(n)
                }
            }, false);
            e._element.addEventListener("mouseup", function(n) {
                if (t._mousedown) {
                    var r = n.pageX,
                        i = n.pageY,
                        n = new enchant.Event("touchend");
                    n.identifier = e._mousedownID;
                    n._initPosition(r, i);
                    t.dispatchEvent(n);
                    t._mousedown = false
                }
            }, false)
        }
    },
    backgroundColor: {
        get: function() {
            return this._backgroundColor
        },
        set: function(e) {
            this._element.style.backgroundColor = this._backgroundColor = e
        }
    },
    _updateCoordinate: function() {
        this._offsetX = this._x;
        this._offsetY = this._y;
        for (var e = 0, t = this.childNodes.length; e < t; e++) this.childNodes[e]._updateCoordinate()
    }
});
(function() {
    enchant.CanvasGroup = enchant.Class.create(enchant.Group, {
        initialize: function() {
            var t = enchant.Game.instance,
                o = this;
            enchant.Group.call(this);
            this._dirty = false;
            this._rotation = 0;
            this._cvsCache = {};
            this._cvsCache.matrix = [1, 0, 0, 1, 0, 0];
            this._cvsCache.detectColor = "#000000";
            this.width = t.width;
            this.height = t.height;
            [enchant.Event.ADDED_TO_SCENE, enchant.Event.REMOVED_FROM_SCENE].forEach(function(e) {
                this.addEventListener(e, function(e) {
                    this.childNodes.forEach(function(t) {
                        t.scene = this.scene;
                        t.dispatchEvent(e)
                    }, this)
                })
            }, this);
            this._element = document.createElement("canvas");
            this._element.width = t.width;
            this._element.height = t.height;
            this._element.style.position = "absolute";
            this._detect = document.createElement("canvas");
            this._detect.width = t.width;
            this._detect.height = t.height;
            this._detect.style.position = "absolute";
            this.context = this._element.getContext("2d");
            this._dctx = this._detect.getContext("2d");
            this._colorManager = new s(16, 256);
            if (enchant.ENV.TOUCH_ENABLED) {
                this._element.addEventListener("touchstart", function(e) {
                    for (var t = e.touches, r = 0, i = t.length; r < i; r++) {
                        e = new enchant.Event("touchstart");
                        e.identifier = t[r].identifier;
                        e._initPosition(t[r].pageX, t[r].pageY);
                        n.call(o, e)
                    }
                }, false);
                this._element.addEventListener("touchmove", function(e) {
                    for (var t = e.touches, n = 0, i = t.length; n < i; n++) {
                        e = new enchant.Event("touchmove");
                        e.identifier = t[n].identifier;
                        e._initPosition(t[n].pageX, t[n].pageY);
                        r.call(o, e)
                    }
                }, false);
                this._element.addEventListener("touchend", function(e) {
                    for (var t = e.changedTouches, n = 0, r = t.length; n < r; n++) {
                        e = new enchant.Event("touchend");
                        e.identifier = t[n].identifier;
                        e._initPosition(t[n].pageX, t[n].pageY);
                        i.call(o, e)
                    }
                }, false)
            } else {
                this._element.addEventListener("mousedown", function(e) {
                    var r = e.pageX,
                        i = e.pageY,
                        e = new enchant.Event("touchstart");
                    e.identifier = t._mousedownID;
                    e._initPosition(r, i);
                    n.call(o, e);
                    o._mousedown = true
                }, false);
                t._element.addEventListener("mousemove", function(e) {
                    if (o._mousedown) {
                        var n = e.pageX,
                            i = e.pageY,
                            e = new enchant.Event("touchmove");
                        e.identifier = t._mousedownID;
                        e._initPosition(n, i);
                        r.call(o, e)
                    }
                }, false);
                t._element.addEventListener("mouseup", function(e) {
                    if (o._mousedown) {
                        var n = e.pageX,
                            r = e.pageY,
                            e = new enchant.Event("touchend");
                        e.identifier = t._mousedownID;
                        e._initPosition(n, r);
                        i.call(o, e);
                        o._mousedown = false
                    }
                }, false)
            }
            var u = [enchant.Event.EXIT, enchant.Event.REMOVED_FROM_SCENE];
            [enchant.Event.ENTER, enchant.Event.ADDED_TO_SCENE].forEach(function(t) {
                this.addEventListener(t, this._startRendering);
                this.addEventListener(t, function() {
                    e.push(this)
                })
            }, this);
            u.forEach(function(t) {
                this.addEventListener(t, this._stopRendering);
                this.addEventListener(t, function() {
                    var t = e.indexOf(this);
                    t !== -1 && e.splice(t, 1)
                })
            }, this);
            this._onexitframe = function() {
                var e = o.context;
                e.clearRect(0, 0, t.width, t.height);
                h.call(o, o._colorManager);
                a.call(o, e)
            }
        },
        _startRendering: function() {
            var e = enchant.Game.instance;
            e._listeners.exitframe || (e._listeners.exitframe = []);
            e._listeners.exitframe.push(this._onexitframe)
        },
        _stopRendering: function() {
            enchant.Game.instance.removeEventListener("exitframe", this._onexitframe)
        },
        _getEntityByPosition: function(e, t) {
            var n = this._dctx;
            n.clearRect(0, 0, this.width, this.height);
            f.call(this, n);
            n = n.getImageData(e, t, 1, 1).data;
            return this._colorManager.getSpriteByColor(n)
        },
        _touchstartPropagation: function(e) {
            var t = this._getEntityByPosition(e.x, e.y);
            if (t) {
                this._touching = t;
                v.call(this._touching, e, this.parentNode)
            } else t = null;
            return t
        },
        _touchmovePropagation: function(e) {
            this._touching != null && v.call(this._touching, e, this.parentNode)
        },
        _touchendPropagation: function(e) {
            if (this._touching != null) {
                v.call(this._touching, e, this.parentNode);
                this._touching = null
            }
        },
        rotation: {
            get: function() {
                return this._rotation
            },
            set: function(e) {
                this._rotation = e;
                this._dirty = true
            }
        },
        scaleX: {
            get: function() {
                return this._scaleX
            },
            set: function(e) {
                this._scaleX = e;
                this._dirty = true
            }
        },
        scaleY: {
            get: function() {
                return this._scaleY
            },
            set: function(e) {
                this._scaleY = e;
                this._dirty = true
            }
        },
        addChild: function(e) {
            this.childNodes.push(e);
            e.parentNode = this;
            e.dispatchEvent(new enchant.Event("added"));
            if (this.scene) {
                e.scene = this.scene;
                var t = new enchant.Event("addedtoscene");
                p.call(e, t, this._colorManager)
            }
        },
        insertBefore: function(e, t) {
            var n = this.childNodes.indexOf(t);
            if (n !== -1) {
                this.childNodes.splice(n, 0, e);
                e.dispatchEvent(new enchant.Event("added"));
                if (this.scene) {
                    e.scene = this.scene;
                    n = new enchant.Event("addedtoscene");
                    p.call(e, n, this._colorManager)
                }
            } else this.addChild(e)
        },
        removeChild: function(e) {
            var t;
            (t = this.childNodes.indexOf(e)) !== -1 && this.childNodes.splice(t, 1);
            e.parentNode = null;
            e.dispatchEvent(new enchant.Event("removed"));
            if (this.scene) {
                e.scene = null;
                t = new enchant.Event("removedfromscene");
                d.call(e, t, this._colorManager)
            }
        }
    });
    var e = [],
        t = null,
        n = function(n) {
            for (var r = enchant.Game.instance, i, s = e.length - 1; s >= 0; s--) {
                i = e[s];
                if (i.scene === r.currentScene && i._touchstartPropagation(n)) {
                    t = i;
                    break
                }
            }
        },
        r = function(e) {
            t != null && t._touchmovePropagation(e)
        },
        i = function(e) {
            if (t != null) {
                t._touchendPropagation(e);
                t = null
            }
        };
    if (enchant.widget) enchant.widget.EntityGroup.prototype.cvsRender = function(e) {
        this.background && this.background._element.width > 0 && this.background._element.height > 0 && e.drawImage(this.background._element, 0, 0, this.width + 0, this.height + 0);
        e.beginPath();
        e.rect(0, 0, this.width, this.height);
        e.clip()
    };
    enchant.Map.prototype.cvsRender = function(e) {
        var t = enchant.Game.instance;
        e.save();
        e.setTransform(1, 0, 0, 1, 0, 0);
        e.drawImage(this._element.firstChild, 0, 0, t.width, t.height);
        e.restore()
    };
    enchant.Sprite.prototype.cvsRender = function(e) {
        var t, n, r, i, s;
        if (this._image) {
            i = Math.abs(this._frame) || 0;
            t = this._image;
            n = t._element;
            r = t.width / this._width | 0;
            s = (i % r | 0) * this._width;
            r = (i / r | 0) * this._height % t.height;
            r = Math.min(r, t.height - this._height);
            i = Math.min(t.width - s, this._width);
            t = Math.min(t.height - r, this._height);
            e.drawImage(n, s, r, i, t, 0, 0, this._width + 0, this._height + 0)
        }
    };
    enchant.Label.prototype.cvsRender = function(e) {
        if (this.text) {
            e.textBaseline = "top";
            e.font = this.font;
            e.fillStyle = this.color || "#000000";
            e.fillText(this.text, 0, 0, this.width + 0)
        }
    };
    var s = enchant.Class.create({
            initialize: function(e, t) {
                this.reference = [];
                this.detectColorNum = 0;
                this.colorResolution = e || 16;
                this.max = t || 1
            },
            attachDetectColor: function(e) {
                this.detectColorNum = this.detectColorNum + 1;
                this.reference[this.detectColorNum] = e;
                return this._createNewColor()
            },
            detachDetectColor: function(e) {
                e = this.reference.indexOf(e);
                e !== -1 && (this.reference[e] = null)
            },
            _createNewColor: function() {
                var e = this.detectColorNum,
                    t = this.colorResolution,
                    n = t / this.max;
                return [parseInt(e / t / t % t, 10) / n, parseInt(e / t % t, 10) / n, parseInt(e % t, 10) / n, 1]
            },
            _decodeDetectColor: function(e) {
                var t = this.colorResolution;
                return ~~(e[0] * t * t * t / 256) + ~~(e[1] * t * t / 256) + ~~(e[2] * t / 256)
            },
            getSpriteByColor: function(e) {
                return this.reference[this._decodeDetectColor(e)]
            }
        }),
        o = function(e, t) {
            var e = e || function() {},
                t = t || function() {},
                n = function() {
                    e.apply(this, arguments);
                    var r;
                    if (this.childNodes)
                        for (var i = 0, s = this.childNodes.length; i < s; i++) {
                            r = this.childNodes[i];
                            n.apply(r, arguments)
                        }
                    t.apply(this, arguments)
                };
            return n
        },
        u = function(e) {
            if (e.__dirty || e._cvsCache.x !== e.x || e._cvsCache.y !== e.y || e._cvsCache.width !== e.width || e._cvsCache.height !== e.height) {
                var t = e._cvsCache.matrix,
                    n = e.x,
                    r = e.y,
                    i = e.width || 0,
                    s = e.height || 0,
                    o = typeof e.scaleX === "number" ? e.scaleX : 1,
                    u = typeof e.scaleY === "number" ? e.scaleY : 1,
                    a = Math.PI * (e.rotation || 0) / 180,
                    f = Math.cos(a),
                    a = Math.sin(a),
                    i = typeof e.originX === "number" ? e.originX : i / 2,
                    s = typeof e.originY === "number" ? e.originY : s / 2;
                t[0] = o * f;
                t[1] = o * a;
                t[2] = -u * a;
                t[3] = u * f;
                t[4] = -(o * f) * i + u * a * s + n + i;
                t[5] = -(o * a) * i - u * f * s + r + s;
                e.__dirty = false;
                e._cvsCache.x = e.x;
                e._cvsCache.y = e.y;
                e._cvsCache.width = e.width;
                e._cvsCache.height = e.height
            }
        },
        a = o(function(e) {
            e.save();
            e.globalCompositeOperation = this.alphaBlending ? this.alphaBlending : "source-atob";
            e.globalAlpha = this.opacity || 1;
            u(this);
            e.transform.apply(e, this._cvsCache.matrix);
            var t = enchant.Game.instance;
            if (this.backgroundColor) {
                e.fillStyle = this.backgroundColor;
                e.fillRect(0, 0, this.width + 0, this.height + 0)
            }
            this.cvsRender && this.cvsRender(e);
            if (t._debug) {
                e.strokeStyle = this instanceof enchant.Label || this instanceof enchant.Sprite ? "#ff0000" : "#0000ff";
                e.strokeRect(0, 0, this.width + 0, this.height + 0)
            }
        }, function(e) {
            e.restore()
        }),
        f = o(function(e) {
            e.save();
            u(this);
            e.transform.apply(e, this._cvsCache.matrix);
            e.fillStyle = this._cvsCache.detectColor;
            e.fillRect(0, 0, this.width, this.height)
        }, function(e) {
            e.restore()
        }),
        l = function() {
            this.__dirty = this._dirty ? true : false
        },
        c = function(e) {
            if (!this._cvsCache) {
                this.addEventListener("render", l);
                this._cvsCache = {};
                this._cvsCache.matrix = [];
                var t = this._cvsCache,
                    e = e.attachDetectColor(this),
                    e = "#" + ("00" + Number(parseInt(e[0], 10)).toString(16)).slice(-2) + ("00" + Number(parseInt(e[1], 10)).toString(16)).slice(-2) + ("00" + Number(parseInt(e[2], 10)).toString(16)).slice(-2);
                t.detectColor = e
            }
        },
        h = o(function(e) {
            c.call(this, e)
        }),
        p = o(function(e, t) {
            this.dispatchEvent(e);
            c.call(this, t)
        }),
        d = o(function(e, t) {
            this.dispatchEvent(e);
            if (this._cvsCache) {
                this.removeEventListener("render", l);
                t.detachDetectColor(this);
                delete this._cvsCache
            }
        });
    o(function(e) {
        this.dispatchEvent(e)
    });
    var v = function(e, t) {
        this.dispatchEvent(e);
        this.parentNode && this.parentNode !== t && v.call(this.parentNode, e, t)
    }
})();
enchant.Scene = enchant.Class.create(enchant.Group, {
    initialize: function() {
        enchant.Group.call(this);
        this._element = document.createElement("div");
        this._element.style.position = "absolute";
        this._element.style.overflow = "hidden";
        this._element.style.width = (this.width = enchant.Game.instance.width) + "px";
        this._element.style.height = (this.height = enchant.Game.instance.height) + "px";
        this._element.style[enchant.ENV.VENDOR_PREFIX + "TransformOrigin"] = "0 0";
        this._element.style[enchant.ENV.VENDOR_PREFIX + "Transform"] = "scale(" + enchant.Game.instance.scale + ")";
        this.scene = this;
        var e = this;
        if (enchant.ENV.TOUCH_ENABLED) {
            this._element.addEventListener("touchstart", function(t) {
                for (var n = t.touches, r = 0, i = n.length; r < i; r++) {
                    t = new enchant.Event("touchstart");
                    t.identifier = n[r].identifier;
                    t._initPosition(n[r].pageX, n[r].pageY);
                    e.dispatchEvent(t)
                }
            }, false);
            this._element.addEventListener("touchmove", function(t) {
                for (var n = t.touches, r = 0, i = n.length; r < i; r++) {
                    t = new enchant.Event("touchmove");
                    t.identifier = n[r].identifier;
                    t._initPosition(n[r].pageX, n[r].pageY);
                    e.dispatchEvent(t)
                }
            }, false);
            this._element.addEventListener("touchend", function(t) {
                for (var n = t.changedTouches, r = 0, i = n.length; r < i; r++) {
                    t = new enchant.Event("touchend");
                    t.identifier = n[r].identifier;
                    t._initPosition(n[r].pageX, n[r].pageY);
                    e.dispatchEvent(t)
                }
            }, false)
        } else {
            this._element.addEventListener("mousedown", function(t) {
                var n = t.pageX,
                    r = t.pageY,
                    t = new enchant.Event("touchstart");
                t.identifier = enchant.Game.instance._mousedownID;
                t._initPosition(n, r);
                e.dispatchEvent(t);
                e._mousedown = true
            }, false);
            enchant.Game.instance._element.addEventListener("mousemove", function(t) {
                if (e._mousedown) {
                    var n = t.pageX,
                        r = t.pageY,
                        t = new enchant.Event("touchmove");
                    t.identifier = enchant.Game.instance._mousedownID;
                    t._initPosition(n, r);
                    e.dispatchEvent(t)
                }
            }, false);
            enchant.Game.instance._element.addEventListener("mouseup", function(t) {
                if (e._mousedown) {
                    var n = t.pageX,
                        r = t.pageY,
                        t = new enchant.Event("touchend");
                    t.identifier = enchant.Game.instance._mousedownID;
                    t._initPosition(n, r);
                    e.dispatchEvent(t);
                    e._mousedown = false
                }
            }, false)
        }
    },
    backgroundColor: {
        get: function() {
            return this._backgroundColor
        },
        set: function(e) {
            this._element.style.backgroundColor = this._backgroundColor = e
        }
    },
    _updateCoordinate: function() {
        this._offsetX = this._x;
        this._offsetY = this._y;
        for (var e = 0, t = this.childNodes.length; e < t; e++) this.childNodes[e]._updateCoordinate()
    }
});
enchant.Surface = enchant.Class.create(enchant.EventTarget, {
    initialize: function(e, t) {
        enchant.EventTarget.call(this);
        var n = enchant.Game.instance;
        this.width = e;
        this.height = t;
        this.context = null;
        n = "enchant-surface" + n._surfaceID++;
        if (document.getCSSCanvasContext) {
            this.context = document.getCSSCanvasContext("2d", n, e, t);
            this._element = this.context.canvas;
            this._css = "-webkit-canvas(" + n + ")"
        } else if (document.mozSetImageElement) {
            this._element = document.createElement("canvas");
            this._element.width = e;
            this._element.height = t;
            this._css = "-moz-element(#" + n + ")";
            this.context = this._element.getContext("2d");
            document.mozSetImageElement(n, this._element)
        } else {
            this._element = document.createElement("canvas");
            this._element.width = e;
            this._element.height = t;
            this._element.style.position = "absolute";
            this.context = this._element.getContext("2d");
            enchant.ENV.CANVAS_DRAWING_METHODS.forEach(function(e) {
                var t = this.context[e];
                this.context[e] = function() {
                    t.apply(this, arguments);
                    this._dirty = true
                }
            }, this)
        }
    },
    getPixel: function(e, t) {
        return this.context.getImageData(e, t, 1, 1).data
    },
    setPixel: function(e, t, n, r, i, s) {
        var o = this.context.createImageData(1, 1);
        o.data[0] = n;
        o.data[1] = r;
        o.data[2] = i;
        o.data[3] = s;
        this.context.putImageData(o, e, t)
    },
    clear: function() {
        this.context.clearRect(0, 0, this.width, this.height)
    },
    draw: function(e) {
        e = e._element;
        if (arguments.length === 1) this.context.drawImage(e, 0, 0);
        else {
            var t = arguments;
            t[0] = e;
            this.context.drawImage.apply(this.context, t)
        }
    },
    clone: function() {
        var e = new enchant.Surface(this.width, this.height);
        e.draw(this);
        return e
    },
    toDataURL: function() {
        var e = this._element.src;
        return e ? e.slice(0, 5) === "data:" ? e : this.clone().toDataURL() : this._element.toDataURL()
    }
});
enchant.Surface.load = function(e) {
    var t = new Image,
        n = Object.create(enchant.Surface.prototype, {
            context: {
                value: null
            },
            _css: {
                value: "url(" + e + ")"
            },
            _element: {
                value: t
            }
        });
    enchant.EventTarget.call(n);
    t.src = e;
    t.onerror = function() {
        throw Error("Cannot load an asset: " + t.src)
    };
    t.onload = function() {
        n.width = t.width;
        n.height = t.height;
        n.dispatchEvent(new enchant.Event("load"))
    };
    return n
};
enchant.Sound = enchant.Class.create(enchant.EventTarget, {
    initialize: function() {
        enchant.EventTarget.call(this);
        this.duration = 0;
        throw Error("Illegal Constructor")
    },
    play: function() {
        this._element && this._element.play()
    },
    pause: function() {
        this._element && this._element.pause()
    },
    stop: function() {
        this.pause();
        this.currentTime = 0
    },
    clone: function() {
        var e;
        if (this._element instanceof Audio) e = Object.create(enchant.Sound.prototype, {
            _element: {
                value: this._element.cloneNode(false)
            },
            duration: {
                value: this.duration
            }
        });
        else {
            if (enchant.ENV.USE_FLASH_SOUND) return this;
            e = Object.create(enchant.Sound.prototype)
        }
        enchant.EventTarget.call(e);
        return e
    },
    currentTime: {
        get: function() {
            return this._element ? this._element.currentTime : 0
        },
        set: function(e) {
            if (this._element) this._element.currentTime = e
        }
    },
    volume: {
        get: function() {
            return this._element ? this._element.volume : 1
        },
        set: function(e) {
            if (this._element) this._element.volume = e
        }
    }
});
enchant.Sound.load = function(e, t) {
    if (t == null) var n = enchant.Game.findExt(e),
        t = n ? "audio/" + n : "";
    var t = t.replace("mp3", "mpeg").replace("m4a", "mp4"),
        r = Object.create(enchant.Sound.prototype);
    enchant.EventTarget.call(r);
    var i = new Audio;
    if (!enchant.Sound.enabledInMobileSafari && enchant.ENV.VENDOR_PREFIX === "webkit" && enchant.ENV.TOUCH_ENABLED) window.setTimeout(function() {
        r.dispatchEvent(new enchant.Event("load"))
    }, 0);
    else if (!enchant.ENV.USE_FLASH_SOUND && i.canPlayType(t)) {
        i.src = e;
        i.load();
        i.autoplay = false;
        i.onerror = function() {
            throw Error("Cannot load an asset: " + i.src)
        };
        i.addEventListener("canplaythrough", function() {
            r.duration = i.duration;
            r.dispatchEvent(new enchant.Event("load"))
        }, false);
        r._element = i
    } else if (t === "audio/mpeg") {
        var s = document.createElement("embed"),
            n = "enchant-audio" + enchant.Game.instance._soundID++;
        s.width = s.height = 1;
        s.name = n;
        s.src = "sound.swf?id=" + n + "&src=" + e;
        s.allowscriptaccess = "always";
        s.style.position = "absolute";
        s.style.left = "-1px";
        r.addEventListener("load", function() {
            Object.defineProperties(s, {
                currentTime: {
                    get: function() {
                        return s.getCurrentTime()
                    },
                    set: function(e) {
                        s.setCurrentTime(e)
                    }
                },
                volume: {
                    get: function() {
                        return s.getVolume()
                    },
                    set: function(e) {
                        s.setVolume(e)
                    }
                }
            });
            r._element = s;
            r.duration = s.getDuration()
        });
        enchant.Game.instance._element.appendChild(s);
        enchant.Sound[n] = r
    } else window.setTimeout(function() {
        r.dispatchEvent(new enchant.Event("load"))
    }, 0);
    return r
};
enchant.Sound.enabledInMobileSafari = !1;
enchant.tl = {};
enchant.Event.ADDED_TO_TIMELINE = "addedtotimeline";
enchant.Event.REMOVED_FROM_TIMELINE = "removedfromtimeline";
enchant.Event.ACTION_START = "actionstart";
enchant.Event.ACTION_END = "actionend";
enchant.Event.ACTION_TICK = "actiontick";
enchant.Event.ACTION_ADDED = "actionadded";
enchant.Event.ACTION_REMOVED = "actionremoved";
(function() {
    var e = enchant.Node.prototype.initialize;
    enchant.Node.prototype.initialize = function() {
        e.apply(this, arguments);
        var t = this.tl = new enchant.tl.Timeline(this);
        this.addEventListener("enterframe", function() {
            t.dispatchEvent(new enchant.Event("enterframe"))
        })
    }
})();
enchant.tl.ActionEventTarget = enchant.Class.create(enchant.EventTarget, {
    initialize: function() {
        enchant.EventTarget.apply(this, arguments)
    },
    dispatchEvent: function(e) {
        if (this.node) {
            var t = this.node;
            e.target = t;
            e.localX = e.x - t._offsetX;
            e.localY = e.y - t._offsetY
        } else this.node = null;
        null != this["on" + e.type] && this["on" + e.type].call(t, e);
        var n = this._listeners[e.type];
        if (null != n)
            for (var n = n.slice(), r = 0, i = n.length; r < i; r++) n[r].call(t, e)
    }
});
enchant.tl.Action = enchant.Class.create(enchant.tl.ActionEventTarget, {
    initialize: function(e) {
        enchant.tl.ActionEventTarget.call(this);
        this.time = null;
        this.frame = 0;
        for (var t in e) e.hasOwnProperty(t) && null != e[t] && (this[t] = e[t]);
        var n = this;
        this.node = this.timeline = null;
        this.addEventListener(enchant.Event.ADDED_TO_TIMELINE, function(e) {
            n.timeline = e.timeline;
            n.node = e.timeline.node;
            n.frame = 0
        });
        this.addEventListener(enchant.Event.REMOVED_FROM_TIMELINE, function() {
            n.timeline = null;
            n.node = null;
            n.frame = 0
        });
        this.addEventListener(enchant.Event.ACTION_TICK, function(e) {
            n.frame++;
            null != n.time && n.frame > n.time && e.timeline.next()
        })
    }
});
enchant.tl.ParallelAction = enchant.Class.create(enchant.tl.Action, {
    initialize: function(e) {
        enchant.tl.Action.call(this, e);
        this.actions = [];
        this.endedActions = [];
        var t = this;
        this.addEventListener(enchant.Event.ACTION_START, function(e) {
            for (var n = 0, r = t.actions.length; n < r; n++) t.actions[n].dispatchEvent(e)
        });
        this.addEventListener(enchant.Event.ACTION_TICK, function(e) {
            var n, r, i = new enchant.Event("actiontick");
            i.timeline = {
                next: function() {
                    var e = t.actions[n];
                    t.actions.splice(n--, 1);
                    r = t.actions.length;
                    t.endedActions.push(e);
                    var i = new enchant.Event("actionend");
                    i.timeline = this;
                    e.dispatchEvent(i);
                    i = new enchant.Event("removedfromtimeline");
                    i.timeline = this;
                    e.dispatchEvent(i)
                }
            };
            n = 0;
            for (r = t.actions.length; n < r; n++) t.actions[n].dispatchEvent(i);
            0 == t.actions.length && e.timeline.next()
        });
        this.addEventListener(enchant.Event.ADDED_TO_TIMELINE, function(e) {
            for (var n = 0, r = t.actions.length; n < r; n++) t.actions[n].dispatchEvent(e)
        });
        this.addEventListener(enchant.Event.REMOVED_FROM_TIMELINE, function() {
            this.actions = this.endedActions;
            this.endedActions = []
        })
    }
});
enchant.tl.Tween = enchant.Class.create(enchant.tl.Action, {
    initialize: function(e) {
        var t = {},
            n = {};
        enchant.tl.Action.call(this, e);
        null == this.easing && (this.easing = function(e, t, n, r) {
            return n * e / r + t
        });
        var r = this;
        this.addEventListener(enchant.Event.ACTION_START, function() {
            var i = ["frame", "time", "callback", "onactiontick", "onactionstart", "onactionend"],
                s;
            for (s in e)
                if (e.hasOwnProperty(s)) {
                    var o;
                    o = typeof e[s] == "function" ? e[s].call(r.node) : e[s];
                    if (i.indexOf(s) == -1) {
                        t[s] = r.node[s];
                        n[s] = o
                    }
                }
        });
        this.addEventListener(enchant.Event.ACTION_TICK, function() {
            var e = r.easing(r.frame, 0, 1, r.time),
                i;
            for (i in n)
                if (n.hasOwnProperty(i) && typeof this[i] !== "undefined") {
                    var s = n[i] * e + t[i] * (1 - e);
                    r.node[i] = i === "x" || i === "y" ? Math.round(s) : s
                }
        })
    }
});
enchant.tl.Timeline = enchant.Class.create(enchant.EventTarget, {
    initialize: function(e) {
        enchant.EventTarget.call(this);
        this.node = e;
        this.queue = [];
        this.looped = this.paused = !1;
        this._parallel = null;
        this.addEventListener(enchant.Event.ENTER_FRAME, this.tick)
    },
    next: function() {
        var e, t = this.queue.shift();
        e = new enchant.Event("actionend");
        e.timeline = this;
        t.dispatchEvent(e);
        this.looped ? (e = new enchant.Event("removedfromtimeline"), e.timeline = this, t.dispatchEvent(e), t.frame = 0, this.add(t)) : (e = new enchant.Event("removedfromtimeline"), e.timeline = this, t.dispatchEvent(e));
        this.dispatchEvent(new enchant.Event("enterframe"))
    },
    tick: function() {
        if (0 < this.queue.length) {
            var e = this.queue[0];
            0 == e.frame && (t = new enchant.Event("actionstart"), t.timeline = this, e.dispatchEvent(t));
            var t = new enchant.Event("actiontick");
            t.timeline = this;
            e.dispatchEvent(t)
        }
    },
    add: function(e) {
        this._parallel ? (this._parallel.actions.push(e), this._parallel = null) : this.queue.push(e);
        e.frame = 0;
        var t = new enchant.Event("addedtotimeline");
        t.timeline = this;
        e.dispatchEvent(t);
        t = new enchant.Event("actionadded");
        t.action = e;
        this.dispatchEvent(t);
        return this
    },
    action: function(e) {
        return this.add(new enchant.tl.Action(e))
    },
    tween: function(e) {
        return this.add(new enchant.tl.Tween(e))
    },
    clear: function() {
        var e = new enchant.Event("removedfromtimeline");
        e.timeline = this;
        for (var t = 0, n = this.queue.length; t < n; t++) this.queue[t].dispatchEvent(e);
        this.queue = [];
        return this
    },
    skip: function(e) {
        for (; e--;) this.dispatchEvent(new enchant.Event("enterframe"));
        return this
    },
    pause: function() {
        this.paused = !1;
        return this
    },
    resume: function() {
        this.paused = !0;
        return this
    },
    loop: function() {
        this.looped = !0;
        return this
    },
    unloop: function() {
        this.looped = !1;
        return this
    },
    delay: function(e) {
        this.add(new enchant.tl.Action({
            time: e
        }));
        return this
    },
    wait: function() {
        return this
    },
    then: function(e) {
        var t = this;
        this.add(new enchant.tl.Action({
            onactiontick: function() {
                e.call(t.node);
                t.next()
            }
        }));
        return this
    },
    exec: function(e) {
        this.then(e)
    },
    cue: function(e) {
        var t = 0,
            n;
        for (n in e) e.hasOwnProperty(n) && (this.delay(n - t), this.then(e[n]), t = n)
    },
    repeat: function(e, t) {
        this.add(new enchant.tl.Action({
            onactiontick: function() {
                e.call(this)
            },
            time: t
        }));
        return this
    },
    and: function() {
        var e = this.queue.pop();
        if (e instanceof enchant.tl.ParallelAction) this._parallel = e, this.queue.push(e);
        else {
            var t = new enchant.tl.ParallelAction;
            t.actions.push(e);
            this.queue.push(t);
            this._parallel = t
        }
        return this
    },
    or: function() {
        return this
    },
    doAll: function() {
        return this
    },
    waitAll: function() {
        return this
    },
    waitUntil: function(e) {
        var t = this;
        this.add(new enchant.tl.Action({
            onactionstart: e,
            onactiontick: function(e) {
                e.call(this) && t.next()
            }
        }));
        return this
    },
    fadeTo: function(e, t, n) {
        this.tween({
            opacity: e,
            time: t,
            easing: n
        });
        return this
    },
    fadeIn: function(e, t) {
        return this.fadeTo(1, e, t)
    },
    fadeOut: function(e, t) {
        return this.fadeTo(0, e, t)
    },
    moveTo: function(e, t, n, r) {
        return this.tween({
            x: e,
            y: t,
            time: n,
            easing: r
        })
    },
    moveX: function(e, t, n) {
        return this.tween({
            x: e,
            time: t,
            easing: n
        })
    },
    moveY: function(e, t, n) {
        return this.tween({
            y: e,
            time: t,
            easing: n
        })
    },
    moveBy: function(e, t, n, r) {
        return this.tween({
            x: function() {
                return this.x + e
            },
            y: function() {
                return this.y + t
            },
            time: n,
            easing: r
        })
    },
    hide: function() {
        return this.then(function() {
            this.opacity = 0
        })
    },
    show: function() {
        return this.then(function() {
            this.opacity = 1
        })
    },
    removeFromScene: function() {
        return this.then(function() {
            this.scene.removeChild(this)
        })
    },
    scaleTo: function(e, t, n) {
        return this.tween({
            scaleX: e,
            scaleY: e,
            time: t,
            easing: n
        })
    },
    scaleBy: function(e, t, n) {
        return this.tween({
            scaleX: function() {
                return this.scaleX * e
            },
            scaleY: function() {
                return this.scaleY * e
            },
            time: t,
            easing: n
        })
    },
    rotateTo: function(e, t, n) {
        return this.tween({
            rotation: e,
            time: t,
            easing: n
        })
    },
    rotateBy: function(e, t, n) {
        return this.tween({
            rotation: function() {
                return this.rotation + e
            },
            time: t,
            easing: n
        })
    }
});
enchant.Easing = {
    LINEAR: function(e, t, n, r) {
        return n * e / r + t
    },
    QUAD_EASEIN: function(e, t, n, r) {
        return n * (e /= r) * e + t
    },
    QUAD_EASEOUT: function(e, t, n, r) {
        return -n * (e /= r) * (e - 2) + t
    },
    QUAD_EASEINOUT: function(e, t, n, r) {
        return 1 > (e /= r / 2) ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
    },
    CUBIC_EASEIN: function(e, t, n, r) {
        return n * (e /= r) * e * e + t
    },
    CUBIC_EASEOUT: function(e, t, n, r) {
        return n * ((e = e / r - 1) * e * e + 1) + t
    },
    CUBIC_EASEINOUT: function(e, t, n, r) {
        return 1 > (e /= r / 2) ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
    },
    QUART_EASEIN: function(e, t, n, r) {
        return n * (e /= r) * e * e * e + t
    },
    QUART_EASEOUT: function(e, t, n, r) {
        return -n * ((e = e / r - 1) * e * e * e - 1) + t
    },
    QUART_EASEINOUT: function(e, t, n, r) {
        return 1 > (e /= r / 2) ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
    },
    QUINT_EASEIN: function(e, t, n, r) {
        return n * (e /= r) * e * e * e * e + t
    },
    QUINT_EASEOUT: function(e, t, n, r) {
        return n * ((e = e / r - 1) * e * e * e * e + 1) + t
    },
    QUINT_EASEINOUT: function(e, t, n, r) {
        return 1 > (e /= r / 2) ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
    },
    SIN_EASEIN: function(e, t, n, r) {
        return -n * Math.cos(e / r * (Math.PI / 2)) + n + t
    },
    SIN_EASEOUT: function(e, t, n, r) {
        return n * Math.sin(e / r * (Math.PI / 2)) + t
    },
    SIN_EASEINOUT: function(e, t, n, r) {
        return -n / 2 * (Math.cos(Math.PI * e / r) - 1) + t
    },
    CIRC_EASEIN: function(e, t, n, r) {
        return -n * (Math.sqrt(1 - (e /= r) * e) - 1) + t
    },
    CIRC_EASEOUT: function(e, t, n, r) {
        return n * Math.sqrt(1 - (e = e / r - 1) * e) + t
    },
    CIRC_EASEINOUT: function(e, t, n, r) {
        return 1 > (e /= r / 2) ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
    },
    ELASTIC_EASEIN: function(e, t, n, r, i, s) {
        if (0 == e) return t;
        if (1 == (e /= r)) return t + n;
        s || (s = .3 * r);
        !i || i < Math.abs(n) ? (i = n, n = s / 4) : n = s / (2 * Math.PI) * Math.asin(n / i);
        return -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - n) * 2 * Math.PI / s)) + t
    },
    ELASTIC_EASEOUT: function(e, t, n, r, i, s) {
        if (0 == e) return t;
        if (1 == (e /= r)) return t + n;
        s || (s = .3 * r);
        if (!i || i < Math.abs(n)) var i = n,
            o = s / 4;
        else o = s / (2 * Math.PI) * Math.asin(n / i);
        return i * Math.pow(2, -10 * e) * Math.sin((e * r - o) * 2 * Math.PI / s) + n + t
    },
    ELASTIC_EASEINOUT: function(e, t, n, r, i, s) {
        if (0 == e) return t;
        if (2 == (e /= r / 2)) return t + n;
        s || (s = r * .3 * 1.5);
        if (!i || i < Math.abs(n)) var i = n,
            o = s / 4;
        else o = s / (2 * Math.PI) * Math.asin(n / i);
        return 1 > e ? -.5 * i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * 2 * Math.PI / s) + t : .5 * i * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - o) * 2 * Math.PI / s) + n + t
    },
    BOUNCE_EASEOUT: function(e, t, n, r) {
        return (e /= r) < 1 / 2.75 ? n * 7.5625 * e * e + t : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
    },
    BOUNCE_EASEIN: function(e, t, n, r) {
        return n - enchant.Easing.BOUNCE_EASEOUT(r - e, 0, n, r) + t
    },
    BOUNCE_EASEINOUT: function(e, t, n, r) {
        return e < r / 2 ? .5 * enchant.Easing.BOUNCE_EASEIN(2 * e, 0, n, r) + t : .5 * enchant.Easing.BOUNCE_EASEOUT(2 * e - r, 0, n, r) + .5 * n + t
    },
    BACK_EASEIN: function(e, t, n, r, i) {
        void 0 == i && (i = 1.70158);
        return n * (e /= r) * e * ((i + 1) * e - i) + t
    },
    BACK_EASEOUT: function(e, t, n, r, i) {
        void 0 == i && (i = 1.70158);
        return n * ((e = e / r - 1) * e * ((i + 1) * e + i) + 1) + t
    },
    BACK_EASEINOUT: function(e, t, n, r, i) {
        void 0 == i && (i = 1.70158);
        return 1 > (e /= r / 2) ? n / 2 * e * e * (((i *= 1.525) + 1) * e - i) + t : n / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
    },
    EXPO_EASEIN: function(e, t, n, r) {
        return 0 == e ? t : n * Math.pow(2, 10 * (e / r - 1)) + t
    },
    EXPO_EASEOUT: function(e, t, n, r) {
        return e == r ? t + n : n * (-Math.pow(2, -10 * e / r) + 1) + t
    },
    EXPO_EASEINOUT: function(e, t, n, r) {
        return 0 == e ? t : e == r ? t + n : 1 > (e /= r / 2) ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (-Math.pow(2, -10 * --e) + 2) + t
    }
};
window.addEventListener("load", function() {
    var e = window.config && window.config.code_run_origin || "http://coderun.9leap.net",
        t = {
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            32: "a"
        },
        n = {},
        r;
    (r = document.getElementById("preview-iframe")) && r.contentWindow && ["down", "up"].forEach(function(i) {
        window.addEventListener("key" + i, function(s) {
            for (var o in t)
                if (t.hasOwnProperty(o) && o == s.keyCode) {
                    if ("down" == i && n[o] || "up" == i && !n[o]) break;
                    n[o] = "down" === i;
                    r.contentWindow.postMessage(JSON.stringify({
                        type: "event",
                        value: t[o] + "button" + i
                    }), e);
                    console.log("event sent: ", t[o] + "button" + i)
                }
        }, !1)
    })
});
enchant.bmfont = {};
enchant.bmfont.fonts = {};
enchant.bmfont.createFont = function(e, t, n) {
    void 0 === enchant.bmfont.getFont(e) && (t = new Font(e, t, n), enchant.bmfont.fonts[e] = t)
};
enchant.bmfont.getFont = function(e) {
    return enchant.bmfont.fonts[e]
};
enchant.bmfont.Font = enchant.Class.create({
    initialize: function(e, t, n) {
        t = (new JKL.ParseXML(t)).parse().font.chars["char"];
        this.fontName = e;
        this.charactersCount = t.length;
        this.characters = {};
        for (e = t.length - 1; 0 <= e; e--) this.characters[t[e].id] = t[e];
        this.fontTexture = n
    }
});
enchant.bmfont.FontSprite = enchant.Class.create(enchant.Sprite, {
    initialize: function(e, t, n, r) {
        this.font = "string" === typeof e ? enchant.bmfont.getFont(e) : e;
        this._text = "";
        this._textWidth = 0;
        enchant.Sprite.call(this, t, n);
        this.image = new Surface(t, n);
        this.text = r
    },
    text: {
        get: function() {
            return this._text
        },
        set: function(e) {
            this._text = e;
            this.draw(e)
        }
    },
    textWidth: {
        get: function() {
            return this._textWidth
        }
    },
    draw: function(e) {
        var t, n, r, i, s, o, u, a, f = 0;
        this.image.clear();
        for (t = 0; t < e.length; t++) n = e.charCodeAt(t), a = this.font.characters[n.toString()], n = parseInt(a.x), r = parseInt(a.y), i = parseInt(a.width), s = parseInt(a.height), u = parseInt(a.xoffset), o = parseInt(a.yoffset), a = parseInt(a.xadvance), this.image.draw(this.font.fontTexture, n, r, i, s, f + u, o, i, s), f += a;
        this._textWidth = f
    }
});
GAME_UID = "cfd002";
_G = {
    ROW_MAXIMUM: 10,
    COLUMN_MAXIMUM: 6,
    FLICK_MIN_DISTANCE: 50,
    FLICK_MAX_VARIANCE: 25
};
_G.highscoreTable = initHighscore();
_G.score = 0;
var Gem = enchant.Class.create(enchant.Sprite, {
        initialize: function() {
            enchant.Sprite.apply(this, [40, 40]);
            this.image = _G.game.assets["res/gem_sheet_1.png"];
            this.evolutions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            this.evolutionLevel = 0;
            this.y = this.x = -100
        },
        setEvolutionLevel: function(e) {
            this.tl.clear();
            this.evolutionLevel = e;
            if (this.evolutionLevel < this.evolutions.length) return this.frame = this.evolutions[this.evolutionLevel], !1;
            this.evolutionLevel = this.evolutions.length - 1;
            this.frame = this.evolutions[this.evolutionLevel];
            return !0
        },
        flashToWhite: function() {
            var e = this;
            this.tl.repeat(function() {
                e.tl.delay(1).then(function() {
                    this.frame += this.evolutions.length
                })
            }, 3)
        },
        fadeFromWhite: function() {
            var e = this;
            this.frame += 4 * this.evolutions.length;
            this.tl.repeat(function() {
                e.tl.delay(1).then(function() {
                    this.frame -= this.evolutions.length
                })
            }, 3)
        },
        toJSON: function() {
            return this.evolutionLevel
        }
    }),
    PopupScore = enchant.Class.create(enchant.Label, {
        initialize: function(e) {
            enchant.Label.apply(this, [e]);
            this.font = "18px verdana";
            this.textAlign = "left";
            this.color = "#ffffff";
            this._style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
        },
        setup: function(e, t, n) {
            this.color = 3 >= e ? "#00ff00" : 3 < e && 7 > e ? "#ffff00" : "#ff0000";
            this.text = addCommas(t.toString());
            1 < n && (this.text += " x " + n.toString())
        }
    }),
    PopupScorePool = enchant.Class.create(enchant.Group, {
        initialize: function() {
            enchant.Group.apply(this);
            this.pool = []
        },
        get: function() {
            var e = this.pool.pop();
            void 0 === e && (e = new PopupScore("test"));
            return e
        },
        remove: function(e) {
            e.parentNode.removeChild(e);
            this.pool.push(e)
        }
    }),
    ReportTab = enchant.Class.create(enchant.Group, {
        initialize: function() {
            enchant.Group.apply(this);
            this.tab = new Sprite(168, 271);
            this.tab.image = _G.game.assets["res/GUI_NewSpecies.png"];
            this.isAppear = !1;
            this.isClickable = !0;
            this.tab.addEventListener("touchstart", this.onTouchStart);
            this.addChild(this.tab);
            this.x = -136;
            this.y = 88;
            this.warning = new Sprite(38, 44);
            this.warning.image = _G.game.assets["res/GUI_NewSpecies_Warning.png"];
            this.addChild(this.warning);
            this.warning.x = 136;
            this.warning.y = 22;
            this.warning.opacity = 0
        },
        onTouchStart: function() {
            this.parentNode.isClickable && (this.parentNode.isAppear = !this.parentNode.isAppear, this.parentNode.isAppear ? TweenLite.to(this.parentNode, .75, {
                x: 0,
                ease: Power2.easeOut
            }) : TweenLite.to(this.parentNode, .75, {
                x: -136,
                ease: Power2.easeOut
            }))
        },
        addCreature: function(e) {
            var t = new Gem;
            t.setEvolutionLevel(e);
            if (highestEvolutionLevel < e + 1) {
                highestEvolutionLevel = e + 1
            }
            this.addChild(t);
            t.x = 42 + 44 * (e % 2);
            t.y = 223 - 42 * Math.floor(e / 2)
        },
        postNotification: function() {
            var e = this.warning;
            this.warning.opacity = 0;
            this.warning.scaleX = 1.5;
            this.warning.scaleY = 1.5;
            this.warning.tl.delay(30).fadeIn(10).and().scaleTo(1, 10, enchant.Easing.BOUNCE_EASEOUT).delay(20).then(function() {
                e.opacity = 0
            })
        }
    }),
    Board = enchant.Class.create(enchant.Group, {
        initialize: function(e, t) {
            enchant.Group.apply(this);
            this.rowMaximum = e;
            this.columnMaximum = t;
            this.pool = [];
            this.board = Array(this.rowMaximum);
            for (var n = 0; n < this.rowMaximum; n++) {
                this.board[n] = Array(this.columnMaximum);
                for (var r = 0; r < this.columnMaximum; r++) {
                    this.board[n][r] = null;
                    var i = this.createGem(0);
                    this.addGemToGroup(i);
                    this.poolGem(i)
                }
            }
        },
        poolGem: function(e) {
            this.removeChild(e);
            this.pool.push(e)
        },
        createGem: function(e) {
            var t = this.pool.pop();
            void 0 == t && (t = new Gem);
            t.setEvolutionLevel(e);
            t.scene = this;
            t.row = -1;
            t.column = -1;
            return t
        },
        addGemToGroup: function(e) {
            this.addChild(e)
        },
        getGemAt: function(e, t) {
            if (0 <= e && e < this.rowMaximum && 0 <= t && t < this.columnMaximum) return this.board[e][t]
        },
        removeGemAt: function(e, t) {
            this.board[e][t] = null
        },
        removeGem: function(e) {
            this.getGemAt(e.row, e.column) === e && this.removeGemAt(e.row, e.column)
        },
        setGemAt: function(e, t, n) {
            e.row = t;
            e.column = n;
            this.board[t][n] = e
        },
        getGemPositionAt: function(e, t) {
            1 < e ? e = 2 === e ? 1.2 : e - 1 : 1 === e && null != this.getGemAt(2, t) && (e = .2);
            return {
                x: 38 * t + 44,
                y: 38 * e + 6
            }
        },
        checkGemsMatch: function(e, t) {
            return null !== e && null !== t ? e.evolutionLevel === t.evolutionLevel : !1
        },
        makeGemFall: function(a, b) {
            for (var c = !1, d = this.rowMaximum - 1; 0 < d; d--)
                for (var e = 0; e < this.columnMaximum; e++)
                    if (null === this.getGemAt(d, e))
                        for (var f = 0, g = null, h = d; 0 <= h; h--) g = this.getGemAt(h, e), null === g ? f++ : (this.removeGem(g), this.setGemAt(g, h + f, e), c = this.getGemPositionAt(h + f, e), g.x = c.x, g.tl.moveTo(g.x, c.y, 6, enchant.Easing.QUAD_EASEIN).scaleTo(1.25, 1).scaleTo(1, 12, enchant.Easing.ELASTIC_EASEOUT), c = !0);
            if (void 0 !== a)
                if (c) with(b) setTimeout(function() {
                    a.call(b)
                }, 500);
                else a.call(b)
        },
        queryGemsIntoGroup: function() {
            for (var e = [], t = 0; t < _G.ROW_MAXIMUM; t++)
                for (var n = 0; n < _G.COLUMN_MAXIMUM; n++) {
                    var r = this.getGemAt(t, n);
                    if (null !== r) {
                        for (var i = !1, s = 0; s < e.length; s++)
                            if (containsObject(r, e[s])) {
                                i = !0;
                                break
                            }
                        i || (i = [], this.findSameColor(i, r), 2 < i.length && e.push(i))
                    }
                }
            return e
        },
        findSameColor: function(e, t) {
            if (null !== t) {
                e.push(t);
                var n = t.row,
                    r = t.column;
                if (0 < t.row) {
                    var i = this.getGemAt(n - 1, r);
                    this.checkGemsMatch(t, i) && !1 == containsObject(i, e) && this.findSameColor(e, i)
                }
                t.row < _G.ROW_MAXIMUM - 1 && (i = this.getGemAt(n + 1, r), this.checkGemsMatch(t, i) && !1 == containsObject(i, e) && this.findSameColor(e, i));
                0 < t.column && (i = this.getGemAt(n, r - 1), this.checkGemsMatch(t, i) && !1 == containsObject(i, e) && this.findSameColor(e, i));
                t.column < _G.COLUMN_MAXIMUM - 1 && (i = this.getGemAt(n, r + 1), this.checkGemsMatch(t, i) && !1 == containsObject(i, e) && this.findSameColor(e, i))
            }
        },
        mergeGems: function(e) {
            var t, n, r = _G.COLUMN_MAXIMUM,
                i = 0,
                s;
            for (n = 0; n < e.length; n++) t = e[n], t.row > i ? (i = t.row, r = t.column) : t.row === i && t.column < r && (r = t.column);
            var o = this.getGemPositionAt(i, r);
            for (n = 0; n < e.length; n++) t = e[n], this.removeGem(t), s = t.evolutionLevel, t.tl.clear(), t.flashToWhite(), TweenLite.to(t, .75, {
                x: o.x,
                y: o.y,
                ease: Back.easeIn,
                onComplete: function(e, t) {
                    e.poolGem(t)
                },
                onCompleteParams: [this, t]
            });
            e = this.createGem(s + 1);
            this.setGemAt(e, i, r);
            e.x = o.x;
            e.y = o.y;
            e.scaleX = 0;
            e.scaleY = 0;
            this.addGemToGroup(e);
            e.fadeFromWhite();
            e.tl.delay(12).scaleTo(1, 12, enchant.Easing.ELASTIC_EASEOUT);
            r = {};
            r.gem = e;
            r.level = s + 2;
            return r
        },
        randomFill: function() {
            for (var e = 0; e < this.rowMaximum; e++)
                for (var t = 0; t < this.columnMaximum; t++) {
                    var n = this.createGem(0);
                    this.setGemAt(n, e, t);
                    this.addGemToGroup(n);
                    var r = this.getGemPositionAt(e, t);
                    n.x = r.x;
                    n.y = -200;
                    n.tl.moveTo(n.x, r.y, 24, enchant.Easing.EXPO_EASEIN)
                }
        }
    }),
    HighscoreBoard = enchant.Class.create(enchant.Group, {
        initialize: function() {
            enchant.Group.apply(this);
            this.logo = new Sprite(185, 30);
            this.logo.image = _G.game.assets["res/GUI_MainMenu_Menu_HighScoreHeader.png"];
            this.logo.x = 69;
            this.logo.y = 39;
            this.addChild(this.logo);
            this.entries = [];
            for (var e = 0; 10 > e; e++) {
                var t = new Group,
                    n = new Label((e + 1).toString() + ".) ------"),
                    r = new Label("0"),
                    i = _G.highscoreTable[e];
                if (void 0 != i) {
                    var s = new Date(i.date);
                    n.text = (e + 1).toString() + ".) " + s.getFullYear() + "/" + (s.getMonth() + 1) + "/" + s.getDate();
                    r.text = addCommas(i.score.toString())
                }
                t.addChild(n);
                t.addChild(r);
                n.x = 54;
                r.x = -54;
                n.y = r.y = 104 + 24 * e;
                n.font = r.font = "12px verdana";
                n.textAlign = "left";
                r.textAlign = "right";
                this.entries.push(t);
                this.addChild(t)
            }
        },
        fadeOut: function() {},
        fadeIn: function() {}
    }),
    ReplaySession = enchant.Class.create({
        initialize: function(e) {
            this.seed = e;
            this.boardState = [];
            this.score = [];
            this.selectedGems = [];
            this.reservedGems = [];
            this.nextGems = []
        },
        recordTurn: function(e, t, n, r, i) {
            this.boardState.push(e);
            this.score.push(t);
            this.selectedGems.push(n);
            this.reservedGems.push(r);
            this.nextGems.push(i)
        },
        stringify: function() {
            var e = {};
            e.boardState = this.boardState;
            e.score = this.score;
            e.selectedGems = this.selectedGems;
            e.reservedGems = this.reservedGems;
            e.nextGems = this.nextGems;
            return JSON.stringify(e)
        }
    }),
    ScenePause = enchant.Class.create(enchant.Scene, {
        initialize: function() {
            enchant.Scene.apply(this);
            this.blackBG = new Sprite(320, 480);
            var e = new Surface(320, 480);
            e.context.beginPath();
            e.context.rect(0, 0, 320, 480);
            e.context.fillStyle = "#000000";
            e.context.fill();
            this.blackBG.image = e;
            this.blackBG.opacity = .5;
            this.addChild(this.blackBG);
            this.addEventListener("touchend", function() {
                enchant.Game.instance.popScene()
            })
        }
    }),
    SceneGame = enchant.Class.create(enchant.Scene, {
        initialize: function() {
            this.replaySession = new ReplaySession(Random.seedrandom());
            enchant.Scene.apply(this);
            this.STATE_WAIT = 0;
            this.STATE_CONTROL = 1;
            this.STATE_GAMEOVER = 2;
            this.currentCombo = 1;
            this.selectedGems = [];
            this.reservedGems = [];
            this.nextGems = [];
            this.popupPool = new PopupScorePool;
            this.board = new Board(_G.ROW_MAXIMUM, _G.COLUMN_MAXIMUM);
            this.state = this.STATE_WAIT;
            this.flickFinish = this.isControllable = !1;
            this.touchStartPos = {
                x: 0,
                y: 0
            };
            var a = new Sprite(320, 480),
                b = new Sprite(92, 63),
                c = new Sprite(238, 19);
            this.reportTab = new ReportTab;
            for (var d = 0; 2 > d; d++) this.reportTab.addCreature(d);
            b.x = 32;
            b.y = 363;
            this.reserveArea = new Sprite(48, 96);
            this.reserveArea.owner = this;
            a.image = _G.game.assets["res/ABO_BG.png"];
            b.image = _G.game.assets["res/game_anim_sheet.png"];
            b.tl.delay(30).then(function() {
                b.frame = 1
            }).delay(30).then(function() {
                b.frame = 0
            }).loop();
            c.image = _G.game.assets["res/wave_sheet.png"];
            c.x = 40;
            c.y = 84;
            c.tl.repeat(function() {
                c.tl.delay(10).then(function() {
                    c.frame += 1;
                    c.frame %= 4
                })
            }, 4).loop();
            this.warning = new Sprite(38, 44);
            this.warning.image = _G.game.assets["res/GUI_NewSpecies_Warning.png"];
            this.warning.x = 136;
            this.warning.y = 22;
            this.warning.opacity = 0;
            this.scoreLabel = new FontSprite("score", 200, 48, "0");
            this.scoreLabel.x = 280 - this.scoreLabel.textWidth;
            this.scoreLabel.y = 380;
            this.bgAnim = b;
            this.addChild(a);
            this.addChild(b);
            this.addChild(c);
            this.addChild(this.board);
            this.addChild(this.warning);
            this.addChild(this.reserveArea);
            this.addChild(this.popupPool);
            this.addChild(this.reportTab);
            this.addChild(this.scoreLabel);
            this.instruction = new Sprite(320, 440);
            this.instruction.image = _G.game.assets["res/Instructions_2.png"];
            this.addChild(this.instruction);
            TweenLite.from(this.instruction, .5, {
                opacity: 0,
                scaleX: .8,
                scaleY: .8
            });
            this.registerTouchListeners();
            this.registerKeyboardListeners();
            this.evolutionLevel = 2;
            this.generateNextPairOfGems();
            with(this) setTimeout(function() {
                getNextPairOfGems()
            }, 500);
            this.setScore(0);
            a = new PopupScore("更多好玩的游戏在Play68.com");
            a.textAlign = "center";
            a.font = "14px verdana";
            a.x = 10;
            a.y = 452;
            this.addChild(a)
        },
        showScorePopup: function(e, t, n, r, i) {
            var s = this.popupPool,
                o = this.popupPool.get();
            o.x = e;
            o.y = t;
            o.setup(n, r, i);
            o.tl.moveTo(e, t - 16, 15, enchant.Easing.QUAD_EASEOUT).delay(20).then(function() {
                s.remove(o)
            });
            s.addChild(o)
        },
        setScore: function(e) {
            _G.score === _G.confirmScore ? (_G.score = e, _G.confirmScore = _G.score, this.scoreLabel.text = addCommas(e.toString())) : this.scoreLabel.text = "I CHEATED!";
            this.scoreLabel.x = 280 - this.scoreLabel.textWidth
        },
        changeState: function(e) {
            e === this.STATE_WAIT ? this.isControllable = !1 : this.state === this.STATE_WAIT && e === this.STATE_CONTROL && (this.isControllable = !0);
            this.state = e
        },
        generateNextPairOfGems: function() {
            for (var e = 0; 2 > e; e++) {
                var t = this.board.createGem(this.randomNextGem());
                this.nextGems.push(t);
                var n = this.board.getGemPositionAt(e, _G.COLUMN_MAXIMUM);
                t.x = n.x;
                t.y = n.y - 48;
                t.scaleX = 1;
                t.scaleY = 1;
                TweenLite.to(t, .5, {
                    y: n.y,
                    ease: Quad.easeOut
                });
                this.board.addGemToGroup(t)
            }
        },
        randomNextGem: function() {
            for (var e = this.evolutionLevel; e >= this.evolutionLevel;) e = Math.floor(randNormal(0, 11 / 3)), e = Math.abs(e);
            return e
        },
        getNextPairOfGems: function() {
            for (var a = 0; 2 > a; a++) {
                var b = this.nextGems[a],
                    c = this.board.getGemPositionAt(1, 2 + a);
                this.board.setGemAt(b, 1, 2 + a);
                TweenLite.to(b, .5, {
                    x: c.x,
                    y: c.y,
                    ease: Power2.easeOut
                });
                this.selectedGems.push(b)
            }
            this.nextGems = [];
            this.generateNextPairOfGems();
            with(this) setTimeout(function() {
                changeState(STATE_CONTROL)
            }, 300)
        },
        moveHorizontal: function(e) {
            for (var t = !0, n, r, i = 0; 2 > i; i++)
                if (n = this.selectedGems[i], r = n.column + e, 0 > r || r >= _G.COLUMN_MAXIMUM) {
                    t = !1;
                    break
                }
            if (t)
                for (i = 0; 2 > i; i++) {
                    n = this.selectedGems[i];
                    r = n.column + e;
                    t = n.row;
                    this.board.removeGem(n);
                    var s = this.board.getGemPositionAt(t, r);
                    this.board.setGemAt(n, t, r);
                    TweenLite.to(n, .5, {
                        x: s.x,
                        y: s.y,
                        ease: Power2.easeOut
                    })
                }
        },
        rotateGems: function() {
            var e, t, n, r, i, s;
            e = this.selectedGems[0];
            t = this.selectedGems[1];
            n = e.row;
            r = e.column;
            i = t.row;
            s = t.column;
            e.row === t.row ? e.column < t.column ? (n = 0, r = t.column) : (i = 0, s = e.column) : e.row < t.row ? 0 === t.column ? (n = t.row, r = t.column + 1) : (n = t.row, r = t.column, s = t.column - 1) : 0 === e.column ? (i = e.row, s = e.column + 1) : (i = e.row, s = e.column, r = e.column - 1);
            var o = this.board.getGemPositionAt(n, r),
                u = this.board.getGemPositionAt(i, s);
            this.board.removeGem(e);
            this.board.removeGem(t);
            this.board.setGemAt(e, n, r);
            this.board.setGemAt(t, i, s);
            TweenLite.to(e, .5, {
                x: o.x,
                y: o.y,
                ease: Power2.easeOut
            });
            TweenLite.to(t, .5, {
                x: u.x,
                y: u.y,
                ease: Power2.easeOut
            })
        },
        dropSelectedGems: function() {
            null != this.instruction && (TweenLite.to(this.instruction, .5, {
                opacity: 0,
                onCompleteScope: this.instruction,
                onComplete: function() {
                    this.parentNode.removeChild(this)
                }
            }), this.instruction = null);
            for (var a = 0; a < this.selectedGems.length; a++) TweenLite.killTweensOf(this.selectedGems[a]);
            this.selectedGems = [];
            this.changeState(this.STATE_WAIT);
            this.board.makeGemFall();
            with(this) setTimeout(function() {
                checkForMatches()
            }, 305)
        },
        saveTurnState: function(e) {
            e.recordTurn(this.board.board, this.score, this.selectedGems, this.reservedGems, this.nextGems)
        },
        swapWithReserve: function() {
            var e, t, n, r;
            if (0 === this.reservedGems.length) {
                for (var i = 0; 2 > i; i++) e = this.selectedGems[i], this.board.removeGem(e), e.row = -1, e.column = -1, n = this.board.getGemPositionAt(i, -1), this.reservedGems.push(e), TweenLite.to(e, .5, {
                    x: n.x,
                    y: n.y,
                    ease: Power2.easeOut
                });
                this.selectedGems = [];
                this.getNextPairOfGems()
            } else
                for (i = 0; 2 > i; i++) e = this.selectedGems[i], t = this.reservedGems[i], this.board.setGemAt(t, e.row, e.column), e.row = -1, e.column = -1, this.reservedGems[i] = e, this.selectedGems[i] = t, n = this.board.getGemPositionAt(i, -1), r = this.board.getGemPositionAt(t.row, t.column), TweenLite.to(e, .5, {
                    x: n.x,
                    y: n.y,
                    ease: Power2.easeOut
                }), TweenLite.to(t, .5, {
                    x: r.x,
                    y: r.y,
                    ease: Power2.easeOut
                })
        },
        checkForMatches: function() {
            var a = this.board.queryGemsIntoGroup();
            if (0 !== a.length) with(this) setTimeout(function() {
                eraseTheMatches(a)
            }, 100);
            else this.currentCombo = 1, this.checkGameEndCondition()
        },
        eraseTheMatches: function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b].length,
                    d = this.board.mergeGems(a[b]),
                    e = d.level,
                    d = d.gem,
                    f = Math.pow(3, e - 1),
                    g = Math.pow(3, e - 2) * Math.max(a[b].length - 3, 0);
                this.setScore(_G.score + (f - g) * this.currentCombo);
                this.showScorePopup(d.x, d.y, c, f - g, this.currentCombo);
                e > this.evolutionLevel && (this.evolutionLevel = e, this.reportTab.addCreature(e - 1), this.postNotification(d.x, d.y))
            }
            this.currentCombo++;
            with(this) setTimeout(function() {
                board.makeGemFall()
            }, 1255), setTimeout(function() {
                checkForMatches()
            }, 1525)
        },
        postNotification: function(e, t) {
            var n = this.warning;
            this.warning.x = e;
            this.warning.y = t - 32;
            this.warning.opacity = 0;
            this.warning.scaleX = 1.5;
            this.warning.scaleY = 1.5;
            this.warning.tl.delay(30).fadeIn(10).and().scaleTo(1, 10, enchant.Easing.BOUNCE_EASEOUT).delay(20).then(function() {
                n.opacity = 0
            })
        },
        checkGameEndCondition: function() {
            for (var a = !1, b, c = 0; 3 > c; c++)
                for (var d = 0; d < _G.COLUMN_MAXIMUM; d++)
                    if (b = this.board.getGemAt(c, d), null !== b) {
                        a = !0;
                        break
                    }
            if (a) with(this) setTimeout(function() {
                gameOverEffect()
            }, 250);
            else this.getNextPairOfGems()
        },
        gameOverEffect: function() {
            if (_G.score === _G.confirmScore) {
                var e = createHighscoreEntry(_G.score);
                addToHighscoreList(e);
                // updateShareScore(_G.score);
                // Play68.setRankingLevelScoreDesc(highestEvolutionLevel, _G.score)
            }
            for (var t = this, n = 0; n < _G.ROW_MAXIMUM; n++)
                for (var r = 0; r < _G.COLUMN_MAXIMUM; r++)
                    if (e = this.board.getGemAt(n, r), null != e) {
                        e.beforeShakeX = e.x;
                        e.beforeShakeY = e.y;
                        var i = new TimelineMax({
                            repeat: 12,
                            onCompleteScope: e,
                            onComplete: function() {
                                this.tl.clear();
                                this.tl.moveTo(-120 + rand(440), -100 - rand(200), 30, enchant.Easing.QUAD_EASEOUT)
                            }
                        });
                        i.append(TweenLite.to(e, 1 / enchant.Game.instance.fps, {
                            onComplete: function() {
                                var e = this.beforeShakeX - 2 + 4 * Math.random(),
                                    t = this.beforeShakeY - 2 + 4 * Math.random();
                                this.moveTo(e, t)
                            },
                            onCompleteScope: e
                        }));
                        i.append(TweenLite.to(e, 1 / enchant.Game.instance.fps, {
                            onComplete: function() {
                                this.moveTo(this.beforeShakeX, this.beforeShakeY)
                            },
                            onCompleteScope: e
                        }))
                    }
            var s = this.bgAnim;
            s.image = _G.game.assets["res/game_anim_gameover_sheet.png"];
            s.tl.clear();
            s.tl.delay(5).then(function() {
                s.frame = 1
            }).delay(5).then(function() {
                s.frame = 0
            }).loop();
            this.gameOverLogo = new Sprite(195, 50);
            this.gameOverLogo.image = _G.game.assets["res/GUI_GameOver.png"];
            this.gameOverLogo.opacity = 0;
            this.gameOverLogo.x = 62;
            this.gameOverLogo.y = 190;
            this.gameOverLogo.tl.delay(40).fadeIn(10).then(function() {
                t.state = t.STATE_GAMEOVER;
            });
            this.addChild(this.gameOverLogo)
        },
        touchToReturn: function() {
            _G.game.replaceScene(new SceneMainMenu)
        },
        registerTouchListeners: function() {
            this.reserveArea.addEventListener("touchstart", function() {
                this.owner.isControllable && this.owner.swapWithReserve()
            });
            this.addEventListener("touchstart", function(e) {
                window.scrollTo(0, 0);
                this.state === this.STATE_GAMEOVER ? this.touchToReturn() : (null != this.instruction && (TweenLite.to(this.instruction, .5, {
                    opacity: 0,
                    onCompleteScope: this.instruction,
                    onComplete: function() {
                        this.parentNode.removeChild(this)
                    }
                }), this.instruction = null), this.flickFinish = !1, this.touchStartPos.x = e.x, this.touchStartPos.y = e.y)
            });
            this.addEventListener("touchmove", function(e) {
                if (!this.flickFinish && this.isControllable) {
                    var t = e.x - this.touchStartPos.x,
                        n = e.y - this.touchStartPos.y,
                        r = Math.abs(t),
                        i = Math.abs(n);
                    r > _G.FLICK_MIN_DISTANCE && i < _G.FLICK_MAX_VARIANCE ? (0 < t ? this.moveHorizontal(1) : this.moveHorizontal(-1), this.flickFinish = !0) : i > _G.FLICK_MIN_DISTANCE && r < _G.FLICK_MAX_VARIANCE && (0 < n ? this.dropSelectedGems() : this.rotateGems(), this.flickFinish = !0);
                    this.flickFinish && (this.touchStartPos.x = e.x, this.touchStartPos.y = e.y, this.flickFinish = !1)
                }
            })
        },
        registerKeyboardListeners: function() {
            this.addEventListener("abuttondown", function() {
                this.isControllable && this.swapWithReserve()
            });
            this.addEventListener("leftbuttondown", function() {
                this.isControllable && this.moveHorizontal(-1)
            });
            this.addEventListener("rightbuttondown", function() {
                this.isControllable && this.moveHorizontal(1)
            });
            this.addEventListener("upbuttondown", function() {
                this.isControllable && this.rotateGems()
            });
            this.addEventListener("downbuttondown", function() {
                this.isControllable && this.dropSelectedGems()
            })
        }
    }),
    SceneMainMenu = enchant.Class.create(enchant.Scene, {
        initialize: function() {
            enchant.Scene.apply(this);
            this.STATE_WAIT = 0;
            this.STATE_MAIN = 1;
            this.STATE_HIGHSCORE = 2;
            this.state = this.STATE_WAIT;
            var e = new Sprite(320, 480),
                t = new Sprite(92, 63),
                n = new Sprite(238, 19);
            this.logo = new Sprite(195, 65);
            this.startBtn = new Sprite(71, 27);
            this.highscoreBtn = new Sprite(103, 27);
            this.moregamesBtn = new Sprite(122, 27);
            this.menuBoard = new Group;
            this.helpText = new Label("点击按钮选择");
            t.x = 32;
            t.y = 363;
            e.image = _G.game.assets["res/ABO_BG.png"];
            t.image = _G.game.assets["res/game_anim_sheet.png"];
            t.tl.delay(30).then(function() {
                t.frame = 1
            }).delay(30).then(function() {
                t.frame = 0
            }).loop();
            n.image = _G.game.assets["res/wave_sheet.png"];
            n.x = 40;
            n.y = 84;
            n.tl.repeat(function() {
                n.tl.delay(10).then(function() {
                    n.frame += 1;
                    n.frame %= 4
                })
            }, 4).loop();
            this.logo.image = _G.game.assets["res/GUI_MainMenu_LogoHTML5.png"];
            this.logo.x = 64;
            this.logo.y = 120;
            this.logo.opacity = 0;
            this.startBtn.image = _G.game.assets["res/GUI_MainMenu_Menu_Start.png"];
            this.startBtn.x = 124;
            this.startBtn.y = 206;
            this.startBtn.opacity = 0;
            this.startBtn.addEventListener("touchstart", function() {
                var e = _G.game.currentScene;
                e.state === e.STATE_MAIN && e.showInstructions()
            });
            this.highscoreBtn.image = _G.game.assets["res/GUI_MainMenu_Menu_HighScore.png"];
            this.highscoreBtn.x = 109;
            this.highscoreBtn.y = 260;
            this.highscoreBtn.opacity = 0;
            this.highscoreBtn.addEventListener("touchstart", function() {
                var e = _G.game.currentScene;
                e.state === e.STATE_MAIN && e.goToHighscoreScene()
            });
            this.moregamesBtn.image = _G.game.assets["res/GUI_MainMenu_Menu_MoreGames.png"];
            this.moregamesBtn.x = 99;
            this.moregamesBtn.y = 314;
            this.moregamesBtn.opacity = 0;
            this.moregamesBtn.addEventListener("touchstart", function() {
                // Play68.goHome()
            });
            this.menuBoard.addChild(this.logo);
            this.menuBoard.addChild(this.startBtn);
            this.menuBoard.addChild(this.highscoreBtn);
            this.menuBoard.addChild(this.moregamesBtn);
            this.helpText.font = "12px verdana";
            this.helpText.textAlign = "center";
            this.helpText.color = "#ffffff";
            this.helpText._style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
            this.helpText.x = 70;
            this.helpText.y = 390;
            this.addChild(e);
            this.addChild(t);
            this.addChild(n);
            this.addChild(this.menuBoard);
            this.addChild(this.helpText);
            var r = this;
            this.logo.tl.fadeIn(10);
            this.startBtn.tl.delay(5).fadeIn(10);
            this.highscoreBtn.tl.delay(10).fadeIn(10).then(function() {
                r.state = r.STATE_MAIN
            });
            this.moregamesBtn.tl.delay(15).fadeIn(10);
            e = new PopupScore("更多好玩的游戏在Play68.com");
            e.textAlign = "center";
            e.font = "14px verdana";
            e.x = 10;
            e.y = 452;
            this.addChild(e);
            e = new PopupScore("V." + VERSION.toFixed(2));
            e.textAlign = "center";
            e.font = "10px verdana";
            e.x = 10;
            e.y = 0;
            this.addChild(e)
        },
        goToHighscoreScene: function() {
            // Play68.shareFriend()
        },
        showInstructions: function() {
            var e = this;
            this.logo.tl.fadeOut(10);
            this.startBtn.tl.fadeOut(10);
            this.highscoreBtn.tl.fadeOut(10);
            this.moregamesBtn.tl.fadeOut(10);
            this.blackBG = new Sprite(320, 440);
            var t = new Surface(320, 440);
            t.context.beginPath();
            t.context.rect(0, 0, 320, 440);
            t.context.fillStyle = "#000000";
            t.context.fill();
            this.blackBG.image = t;
            this.blackBG.opacity = 0;
            this.addChild(this.blackBG);
            this.blackBG.tl.fadeTo(.75, 12);
            this.instruction = new Sprite(274, 397);
            this.instruction.image = enchant.Game.instance.assets["res/GUI_Tutorial.png"];
            this.instruction.y = -397;
            this.instruction.x = 23;
            this.addChild(this.instruction);
            this.instruction.tl.moveTo(this.instruction.x, 0, 12, enchant.Easing.QUAD_EASEOUT).then(function() {
                e.addEventListener("touchstart", e.goToGameScene)
            })
        },
        goToGameScene: function() {
            isMobilePhone && (banad.style.display = "none");
            this.removeEventListener("touchstart", this.goToGameScene);
            this.blackBG.tl.fadeOut(12);
            this.instruction.tl.moveTo(this.instruction.x, -397, 12, enchant.Easing.QUAD_EASEIN).then(function() {
                _G.game.replaceScene(new SceneGame(1))
            })
        },
        touchToReturn: function() {
            var e = this;
            this.state = this.STATE_WAIT;
            this.logo.tl.fadeIn(10);
            this.startBtn.tl.fadeIn(10);
            this.highscoreBtn.tl.fadeIn(10);
            this.moregamesBtn.tl.fadeIn(10).then(function() {
                e.highscoreBoard.fadeOut();
                e.removeEventListener("touchstart", e.touchToReturn)
            }).then(function() {
                e.removeChild(e.highscoreBoard);
                e.highscoreBoard = null;
                e.state = e.STATE_MAIN;
                e.helpText.text = "点击按钮选择"
            })
        }
    });
_G.confirmScore = 0;
enchant();
banad = null;
VERSION = 1;
window.onload = function() {
    var e = new Game(320, 480);
    _G.game = e;
    _G.banad = e.keybind(32, "a");
    e.preload("res/ABO_BG.png", "res/Instructions_2.png", "res/GUI_NewSpecies_Warning.png", "res/GUI_NewSpecies.png", "res/GUI_MainMenu_LogoHTML5.png", "res/GUI_GameOver.png", "res/GUI_Tutorial.png", "res/GUI_MainMenu_Menu_HighScore.png", "res/GUI_MainMenu_Menu_Start.png", "res/GUI_MainMenu_Menu_MoreGames.png", "res/GUI_MainMenu_Menu_HighScoreHeader.png", "res/game_anim_sheet.png", "res/game_anim_gameover_sheet.png", "res/wave_sheet.png", "res/gem_sheet_1.png", "res/font_0.png", "res/GUI_Controller_Button_Pause.png");
    e.fps = 24;
    e.scale = 1;
    window.scrollTo(0, 0);
    if (isMobilePhone = DetectTierIphone() || DetectTierTablet()) {
        e.scale = Math.min(window.innerHeight / e.height, window.innerWidth / e.width);
        var t = document.getElementById("enchant-stage");
        t.style.position = "relative";
        t.style.width = Math.floor(320 * e.scale) + "px"
    }
    banad = document.getElementById("banad");
    banad.style.display = "none";
    isMobilePhone ? (banad.style.left = window.innerWidth / 2 - 160 + "px", banad.style.top = window.innerHeight - 48 + "px") : (banad.style.position = "relative", banad.style.left = "0px", banad.style.margin = "0 auto");
    e.load("res/splashScreen.png", setLoadingScene);
    e.onload = function() {
        enchant.bmfont.createFont("score", "res/font.fnt", this.assets["res/font_0.png"]);
        var t = new Scene,
            n = new Sprite(320, 480);
        n.image = this.assets["res/splashScreen.png"];
        t.addChild(n);
        e.pushScene(t);
        setTimeout(function() {
            var e = new SceneMainMenu;
            enchant.Game.instance.replaceScene(e)
        }, 1e3);
        banad.style.display = "block"
    }
};