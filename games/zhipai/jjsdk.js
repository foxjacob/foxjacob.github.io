function trackEvent() {
    var t = [];
    for (var a in arguments) t.push(arguments[a]);
    t.unshift("_trackEvent"),
    _hmt.push(t)
}
var JJSDK = JJSDK || {},
JJCONFIG = {
    PLATFORMKEY: {
        UNKNOW: 0,
        WEIXIN: 1,
        QQ: 2,
        BAIDUAPP: 3,
        BAIDUBROWSER: 4,
        LIEBAO: 5,
        ZHANGTING: 6
    },
    PLATFORMID: {
        1001 : 5,
        1009 : 6
    }
};
JJSDK.util = {
    getUrlParams: function(t) {
        var a = {};
        if (t.indexOf("?") >= 0) {
            var e = t.split("?");
            t = [],
            e[1].indexOf("&") >= 0 ? t = e[1].split("&") : t.push(e[1]),
            e = [];
            for (var i = 0; i < t.length; i++) t[i].indexOf("=") >= 0 && (e = t[i].split("="), a[e[0]] = e[1])
        }
        return a
    },
    loadScript: function(t, a) {
        var e = document.getElementsByTagName("head")[0],
        i = document.createElement("script");
        i.readyState ? i.onreadystatechange = function() { ("loaded" == i.readyState || "complete" == i.readyState) && (i.onreadystatechange = null, a && a())
        }: i.onload = function() {
            a && a()
        },
        i.src = t,
        i.type = "text/javascript",
        e.appendChild(i)
    },
    getJSON: function(t) {
        if (window.ajax && ajax.JSONP) ajax.JSONP({
            url: t.url,
            data: t.data,
            success: function(a) {
                console.log("采集数据结果", a),
                t.callBack && t.callBack.call(this, a)
            }
        });
        else if (window.$ && $.getJSON) $.getJSON(t.url, t.data,
        function(a) {
            console.log("采集数据结果", a),
            t.callBack && t.callBack.call(this, a)
        });
        else {
            var a = new Image;
            a.src = t.geturl
        }
    }
},
JJSDK.env = {
    params: {},
    options: {},
    init: function(t) {
        this.options = t;
        var a = top === window ? window.location.href: document.referrer;
        this.params = JJSDK.util.getUrlParams(a)
    }
},
JJSDK.platfrom = {
    platform: JJCONFIG.PLATFORMKEY.UNKNOW,
    init: function() {
        this._checkPlatform()
    },
    _checkPlatform: function() {
        var t = JJSDK.env;
        if (t.params._f && JJCONFIG.PLATFORMID[t.params._f]) return void(this.platform = JJCONFIG.PLATFORMID[t.params._f]);
        var a = navigator.userAgent,
        e = a.match(/micromessenger|baiduboxapp|baidubrowser|liebao/i) || [""];
        if (e && e.length > 0) switch (e[0].toLowerCase()) {
        case "micromessenger":
            this.platform = JJCONFIG.PLATFORMKEY.WEIXIN;
            break;
        case "baiduboxapp":
            this.platform = JJCONFIG.PLATFORMKEY.BAIDUAPP;
            break;
        case "baidubrowser":
            this.platform = JJCONFIG.PLATFORMKEY.BAIDUBROWSER;
            break;
        case "liebao":
            this.platform = JJCONFIG.PLATFORMKEY.LIEBAO
        }
    }
},
JJSDK.share = {

    init: function() {
        this._initShare(JJSDK.env.options)
    },
    setShareInfo: function(t) {
        this.shareData.desc = t
    },
    shareGame: function(t) {
        if (JJSDK.platfrom.platform == JJCONFIG.PLATFORMKEY.WEIXIN) t && (t.style.display = "block", setTimeout(function() {
            t.style.display = "none",
            t = null
        },
        3e3));
        else if (JJSDK.platfrom.platform == JJCONFIG.PLATFORMKEY.LIEBAO) {
            if (LBShare) try {
                LBShare.updateData({
                    title: this.shareData.title,
                    imgUrl: this.shareData.imgUrl,
                    desc: this.shareData.desc,
                    wxFriendDesc: this.shareData.desc,
                    wxTimelineDesc: this.shareData.desc,
                    url: this.shareData.link,
                    doneJump: !1,
                    afterShare: function() {
                        var t = top || window;
                        t.location.href = "http://dl.game.35go.net/weixin/game/kw.html?from=jj_daomu"
                    }
                }),
                LBShare.callShare()
            } catch(a) {}
        } else Blend && Blend.mbaas.socialshare.callShare({
            mediaType: "all",
            title: this.shareData.title,
            content: this.shareData.desc,
            linkUrl: this.shareData.link,
            imageUrl: this.shareData.imgUrl,
            onfail: function() {},
            onsuccess: function() {}
        })
    },
    _initShare: function(t) {
       
    },
    _initWeixinShare: function() {
       
    },
    _initBaiduShare: function(t) {
       
    },
    _initLiebaoShare: function() {
       
    }
},
JJSDK.advert = {
    showAd: function() {
       
    },
    hideAd: function() {
      
    }
},
JJSDK.statistical = {
    init: function() {
        var t = this;
        t._jjStat(),
        t._thirdStat()
    },
    _jjStat: function() {
        _hmt.push(["_setAccount", JJSDK.env.options.baiduStatKey]);
        var t = document.createElement("script");
        t.src = "//hm.baidu.com/hm.js?" + JJSDK.env.options.baiduStatKey;
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(t, a)
    },
    _thirdStat: function() {
        if (JJSDK.platfrom.platform == JJCONFIG.PLATFORMKEY.LIEBAO) {
            var t = document.createElement("script");
            t.src = "//hm.baidu.com/hm.js?e0f99980e6764b63bdc04b63dd9d9831";
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(t, a)
        }
    }
},
JJSDK.game = {
    moreGame: function() {
       
    },
    followGoGo: function() {
        
    },
    recordResult: function(t, a, e) {
		/*
        var i = {
            url: "http://sgapi.wan.jj.cn/rank/?f=getrank&callback=?",
            data: {
                gameid: JJSDK.env.options.gameId,
                score: t,
                constime: a
            },
            callBack: e,
            geturl: "http://sgapi.wan.jj.cn/rank/?f=getrank&gameid=" + JJSDK.env.options.gameId + "&score=" + t + "&constime=" + a
        };
        JJSDK.util.getJSON(i)
		*/
    },
    recordBegin: function() {
		/*
        if (!/\/wan.jj.cn\//.test(document.referrer)) {
            var t = JJSDK.env.params._f ? "&fid=" + JJSDK.env.params._f: "",
            a = document.createElement("script");
            a.src = "//sgapi.wan.jj.cn/h/?gid=" + JJSDK.env.options.gameId + t;
            var e = document.getElementsByTagName("script")[0];
            e.parentNode.insertBefore(a, e)
        }
		*/
    },
    recordThirdResult: function(t) {
/*
        if (JJSDK.platfrom.platform === JJCONFIG.PLATFORMKEY.ZHANGTING) {
            var a = JJSDK.env.params.gameid ? JJSDK.env.params.gameid + "": "",
            e = JJSDK.env.params.openid ? JJSDK.env.params.openid + "": "",
            i = {
                url: "http://114.215.168.231/higame/api/mark/?callback=?",
                data: {
                    openid: e,
                    gameid: a,
                    mark: t,
                    sign: md5(md5(e + a + t) + "8h3i2o7m5c")
                },
                callBack: function() {},
                geturl: "http://114.215.168.231/higame/api/mark/?openid=" + e + "&gameid=" + a + "&mark=" + t + "&sign=" + md5(md5(e + a + t) + "8h3i2o7m5c")
            };
            JJSDK.util.getJSON(i)
        }
		*/
    }
},
JJSDK.init = function(t) {
    JJSDK.env.init(t),
    JJSDK.platfrom.init(),
    JJSDK.game.recordBegin(),
    JJSDK.share.init(),
    JJSDK.statistical.init()
};
var _hmt = _hmt || []; !
function() {
    function t(t, a) {
        var o = t[0],
        s = t[1],
        c = t[2],
        l = t[3];
        o = e(o, s, c, l, a[0], 7, -680876936),
        l = e(l, o, s, c, a[1], 12, -389564586),
        c = e(c, l, o, s, a[2], 17, 606105819),
        s = e(s, c, l, o, a[3], 22, -1044525330),
        o = e(o, s, c, l, a[4], 7, -176418897),
        l = e(l, o, s, c, a[5], 12, 1200080426),
        c = e(c, l, o, s, a[6], 17, -1473231341),
        s = e(s, c, l, o, a[7], 22, -45705983),
        o = e(o, s, c, l, a[8], 7, 1770035416),
        l = e(l, o, s, c, a[9], 12, -1958414417),
        c = e(c, l, o, s, a[10], 17, -42063),
        s = e(s, c, l, o, a[11], 22, -1990404162),
        o = e(o, s, c, l, a[12], 7, 1804603682),
        l = e(l, o, s, c, a[13], 12, -40341101),
        c = e(c, l, o, s, a[14], 17, -1502002290),
        s = e(s, c, l, o, a[15], 22, 1236535329),
        o = i(o, s, c, l, a[1], 5, -165796510),
        l = i(l, o, s, c, a[6], 9, -1069501632),
        c = i(c, l, o, s, a[11], 14, 643717713),
        s = i(s, c, l, o, a[0], 20, -373897302),
        o = i(o, s, c, l, a[5], 5, -701558691),
        l = i(l, o, s, c, a[10], 9, 38016083),
        c = i(c, l, o, s, a[15], 14, -660478335),
        s = i(s, c, l, o, a[4], 20, -405537848),
        o = i(o, s, c, l, a[9], 5, 568446438),
        l = i(l, o, s, c, a[14], 9, -1019803690),
        c = i(c, l, o, s, a[3], 14, -187363961),
        s = i(s, c, l, o, a[8], 20, 1163531501),
        o = i(o, s, c, l, a[13], 5, -1444681467),
        l = i(l, o, s, c, a[2], 9, -51403784),
        c = i(c, l, o, s, a[7], 14, 1735328473),
        s = i(s, c, l, o, a[12], 20, -1926607734),
        o = n(o, s, c, l, a[5], 4, -378558),
        l = n(l, o, s, c, a[8], 11, -2022574463),
        c = n(c, l, o, s, a[11], 16, 1839030562),
        s = n(s, c, l, o, a[14], 23, -35309556),
        o = n(o, s, c, l, a[1], 4, -1530992060),
        l = n(l, o, s, c, a[4], 11, 1272893353),
        c = n(c, l, o, s, a[7], 16, -155497632),
        s = n(s, c, l, o, a[10], 23, -1094730640),
        o = n(o, s, c, l, a[13], 4, 681279174),
        l = n(l, o, s, c, a[0], 11, -358537222),
        c = n(c, l, o, s, a[3], 16, -722521979),
        s = n(s, c, l, o, a[6], 23, 76029189),
        o = n(o, s, c, l, a[9], 4, -640364487),
        l = n(l, o, s, c, a[12], 11, -421815835),
        c = n(c, l, o, s, a[15], 16, 530742520),
        s = n(s, c, l, o, a[2], 23, -995338651),
        o = r(o, s, c, l, a[0], 6, -198630844),
        l = r(l, o, s, c, a[7], 10, 1126891415),
        c = r(c, l, o, s, a[14], 15, -1416354905),
        s = r(s, c, l, o, a[5], 21, -57434055),
        o = r(o, s, c, l, a[12], 6, 1700485571),
        l = r(l, o, s, c, a[3], 10, -1894986606),
        c = r(c, l, o, s, a[10], 15, -1051523),
        s = r(s, c, l, o, a[1], 21, -2054922799),
        o = r(o, s, c, l, a[8], 6, 1873313359),
        l = r(l, o, s, c, a[15], 10, -30611744),
        c = r(c, l, o, s, a[6], 15, -1560198380),
        s = r(s, c, l, o, a[13], 21, 1309151649),
        o = r(o, s, c, l, a[4], 6, -145523070),
        l = r(l, o, s, c, a[11], 10, -1120210379),
        c = r(c, l, o, s, a[2], 15, 718787259),
        s = r(s, c, l, o, a[9], 21, -343485551),
        t[0] = h(o, t[0]),
        t[1] = h(s, t[1]),
        t[2] = h(c, t[2]),
        t[3] = h(l, t[3])
    }
    function a(t, a, e, i, n, r) {
        return a = h(h(a, t), h(i, r)),
        h(a << n | a >>> 32 - n, e)
    }
    function e(t, e, i, n, r, o, s) {
        return a(e & i | ~e & n, t, e, r, o, s)
    }
    function i(t, e, i, n, r, o, s) {
        return a(e & n | i & ~n, t, e, r, o, s)
    }
    function n(t, e, i, n, r, o, s) {
        return a(e ^ i ^ n, t, e, r, o, s)
    }
    function r(t, e, i, n, r, o, s) {
        return a(i ^ (e | ~n), t, e, r, o, s)
    }
    function o(a) { / [\x80 - \xFF] / .test(a) && (a = unescape(encodeURI(a))),
        txt = "";
        var e, i = a.length,
        n = [1732584193, -271733879, -1732584194, 271733878];
        for (e = 64; e <= a.length; e += 64) t(n, s(a.substring(e - 64, e)));
        a = a.substring(e - 64);
        var r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (e = 0; e < a.length; e++) r[e >> 2] |= a.charCodeAt(e) << (e % 4 << 3);
        if (r[e >> 2] |= 128 << (e % 4 << 3), e > 55) for (t(n, r), e = 0; 16 > e; e++) r[e] = 0;
        return r[14] = 8 * i,
        t(n, r),
        n
    }
    function s(t) {
        var a, e = [];
        for (a = 0; 64 > a; a += 4) e[a >> 2] = t.charCodeAt(a) + (t.charCodeAt(a + 1) << 8) + (t.charCodeAt(a + 2) << 16) + (t.charCodeAt(a + 3) << 24);
        return e
    }
    function c(t) {
        for (var a = "",
        e = 0; 4 > e; e++) a += d[t >> 8 * e + 4 & 15] + d[t >> 8 * e & 15];
        return a
    }
    function l(t) {
        for (var a = 0; a < t.length; a++) t[a] = c(t[a]);
        return t.join("")
    }
    function h(t, a) {
        return t + a & 4294967295
    }
    function h(t, a) {
        var e = (65535 & t) + (65535 & a),
        i = (t >> 16) + (a >> 16) + (e >> 16);
        return i << 16 | 65535 & e
    }
    var d = "0123456789abcdef".split("");
    md5 = function(t) {
        return l(o(t))
    },
    "5d41402abc4b2a76b9719d911017c592" != md5("hello")
} ();