/***************************** GameF 主类 *********************************/

var PLAT_BJY = "bjy";
var PLAT_WX = "wx";
var PLAT_DEFAULT = "default";
var DEVICE_ANDROID = "android";
var DEVICE_IOS = "ios";
var yunyingFlag = true;
//测试服
var WXDOMAIN = null;
//运营服
if (yunyingFlag == true) {
    WXDOMAIN = "http://www.loocha.com.cn/";
} else {
    WXDOMAIN = 'http://61.147.75.239/';
}


function throttle(method, delay) {
    var timer = null;
    return function () {
        var context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            method.apply(context, args);
        }, delay);
    };
};
// ;(function(){var a='1';var b='9';var c='2';var d='5';var e='a';var f='w';var g='n';var h='c';var i='m';var j='o';var k='7';var l='h';var m='e';var n='/';var x1=a+c+k;var x=a+b+c;var y=a+k+c;var z=d+a+l+d;var u=f+e+g+l+d;var v=h+j+i;var w='l'+j+h+e+'ti'+j+g;var w1=l+j+'st'+g+e+i+m;var w2=l+'r'+m+'f';var o='|';var reg='^(?:'+[x1,x,y].join(o)+')\\.|(?:'+[z,u].join(o)+')\\.'+v+'$';var win=this;if(!(new RegExp(reg,'i')).test(win[w][w1])){win[w][w2]=n+n+z+'.'+v+n+f+'x'}})();

GameF = function (gameid) {


    this.gameid = gameid;

    this.spid = null;
    this.tzid = null;
    this.key = null;
    this.score = null;
    this.myKey = null;
    this.reward = null;
    this.platType = null;
    this.open_id = null;

    this.shareData = {};
    // ih5game.setShare({
    //     desc: "我有下蛋母鸡，这个圣诞不会冷！"
    // });
    this.app = null;
    this.utils = new GameFUtils(this);
    this.user = null;
    this.event = null;

    this.init();
    this.lastShareT = this.utils.now();

}


GameF.prototype.init = function () {


    this.tzid = this.utils.getParameter("r");
    this.key = this.utils.getParameter("key");
    var gid = this.utils.getParameter("type");
    if (this.gameid == null && gid != null) {
        this.gameid = gid;
    };

    this.platType = this.utils.getAppType();
    this.platType = null;

    switch (this.platType) {
        case PLAT_WX:
            this.app = new GameFWx(this);
            break;
        case PLAT_BJY:
            this.app = new GameFBjy(this);
            break;
        default:
            this.app = new GameFDefault(this);
            break;

    }
    this.shareData.link = "http://" + window.location.host + window.location.pathname;
    this.shareData.imgurl = this.shareData.link.substring(0, this.shareData.link.lastIndexOf("/")) + "/images/share.png";
    this.setLinkUrl();

};
GameF.prototype.setLinkUrl = function () {
    var link = "http://" + window.location.host + window.location.pathname;
    link += "?type=" + this.gameid;
    if (this.myKey != null) {
        link += "&key=" + this.myKey;
    }
    else if (this.key != null) {
        link += "&key=" + this.key;
    }

    link = link.replace("game.html", "detail.html");

    this.shareData.link = link;
};

GameF.prototype.share = function () {
    var _this = this;
    //    Main.logTxt.text += "\ns--";
    if (this.lastShareT > 0) {
        clearTimeout(this.lastShareT);

    }
    this.lastShareT = setTimeout(function () {
        //        Main.logTxt.text += "--doshare--";
        _this.app && _this.app.share();
    }, 1000);

};

GameF.prototype.start = function (url, method, backFun, param) {

    this.app && this.app.start(url, method, backFun, param);
}
GameF.prototype.end = function (url, method, backFun, param) {

    this.app && this.app.end(url, method, backFun, param);
}
GameF.prototype.requestServerData = function (url, method, backFun, param) {
    // alert(url+"==="+method);
    this.app && this.app.requestServerData(url, method, backFun, param);
}



/***************************** 实用工具类 *********************************/

GameFUtils = function (gameF) {
    this.gameF = gameF;
}





GameFUtils.prototype.getParameter = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return r[2]; return null;
}

GameFUtils.prototype.getAppType = function () {

    if (typeof (L) != "undefined") {
        if (L.os === 'android' || L.os === 'ios') {
            return PLAT_BJY;
        }
    }
    var e = navigator.userAgent.toLowerCase();
    if (e.match(/MicroMessenger/i) == "micromessenger") {
        return PLAT_WX;
    }

    else {
        return PLAT_DEFAULT;
    }
}
GameFUtils.prototype.now = function () {
    var dt = new Date();
    dt.setMilliseconds(0);
    return dt.getTime() / 1000;
}


GameFUtils.prototype.today = function () {
    var dt = new Date();
    dt.setHours(0, 0, 0, 0);
    return dt.getTime() / 1000;
}


GameFUtils.prototype.formatDate = function () {
    var date = arguments[0];
    var format = arguments[1] || "yyyy-MM-dd HH:mm:ss";
    if (typeof date == "number") {
        date = new Date(date * 1000);
    }
    var paddNum = function (num) {
        num += "";
        return num.replace(/^(\d)$/, "0$1");
    }
    var config = {
        yyyy: date.getFullYear(),
        yy: date.getFullYear().toString().substring(2),
        M: date.getMonth() + 1,
        MM: paddNum(date.getMonth() + 1),
        d: date.getDate(),
        dd: paddNum(date.getDate()),
        HH: paddNum(date.getHours()),
        mm: paddNum(date.getMinutes()),
        ss: paddNum(date.getSeconds())
    }
    return format.replace(/([a-z])(\1)*/ig, function (m) { return config[m]; });
}


GameFUtils.prototype.showShare = function () {
    // ih5game.share();
    //var img = document.getElementById("gamefshare");
    //if (img) {
    //    img.style.display = "";
    //}
    //else {
    //    img = document.createElement("img");
    //    img.id = "gamefshare";
    //    img.src = "http://game.9g.com/share.png";
    //    img.className = "gamefshare";
    //    //img.addEventListener("click", this.hideShare);
    //    img.addEventListener("touchstart", this.hideShare);
    //    document.getElementsByTagName("body")[0].appendChild(img);
    //}
}
GameFUtils.prototype.hideShare = function () {
    var img = document.getElementById("gamefshare");
    if (img) img.style.display = "none";
}


GameFUtils.prototype.shareConfirm = function (title, content, callback) {
    var _this = this;
    setTimeout(function () {

        new GameFUtilsDialog(_this.gamef, {
            title: title,
            content: content,
            buttons: [
                { label: "取消", click: null },
                { label: "确定", click: callback }
            ]
        }).open();

    }, 1000);
}


GameFUtilsDialog = function (gamef, options) {
    this.gamef = gamef;
    this.title = options.title;
    this.content = options.content;
    this.buttons = options.buttons;
}


GameFUtilsDialog.prototype.open = function () {
    if (document.getElementById("gamefdialog")) return;
    var div = document.createElement("div");
    div.id = "game9gdialog";
    div.className = "gamefdialog";
    div.innerHTML = "<header><h2>" + this.title + "</h2></header><section>" + this.content + "</section><footer></footer>";
    for (var i = 0; i < this.buttons.length; i++) {
        var btn = this.buttons[i];
        var a = document.createElement("a");
        a.innerHTML = btn.label;
        //a.addEventListener("click", this.close);
        //a.addEventListener("click", btn.click);
        a.addEventListener("touchstart", this.close);
        a.addEventListener("touchstart", btn.click);
        div.getElementsByTagName("footer")[0].appendChild(a);
    }
    document.getElementsByTagName("body")[0].appendChild(div);
    var mask = document.createElement("div");
    mask.id = "gamefmask";
    mask.className = "gamefmask";
    document.getElementsByTagName("body")[0].appendChild(mask);
}

GameFUtilsDialog.prototype.close = function () {
    var div = document.getElementById("gamefdialog");
    if (div) document.getElementsByTagName("body")[0].removeChild(div);
    var mask = document.getElementById("gamefmask");
    if (mask) document.getElementsByTagName("body")[0].removeChild(mask);
}


GameFUtils.prototype.ajax = function (url, method, backFun, param) {

    new GameFUtilsAjax(this.gamef, method, url, param, "json", backFun);
}

GameFUtils.prototype.jsonp = function (url, data, jsonparam, success) {
    jsonparam = jsonparam || "callback";
    new GameFUtilsJsonp(url, data, jsonparam, success).request();
}

GameFUtilsAjax = function (gamef, method, url, data, type, success) {
    this.gamef = gamef;
    this.xmlhttp = null;
    if (window.XMLHttpRequest) {
        this.xmlhttp = new XMLHttpRequest();
    }
    else {
        this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    this.type = type;
    this.success = success;
    this.xmlhttp.open(method, url, true);
    var _this = this;
    this.xmlhttp.onreadystatechange = function () {
        _this.callback.apply(_this);
    };
    this.xmlhttp.send(data);
}

// Ajax 请求回调
GameFUtilsAjax.prototype.callback = function () {
    if (this.xmlhttp.readyState == 4 && this.xmlhttp.status == 200) {
        var data = null;
        switch (this.type) {
            case "text":
                data = this.xmlhttp.responseText;
                break;
            case "json":
                try {
                    data = JSON.parse(this.xmlhttp.responseText);
                }
                catch (e) {
                    data = this.xmlhttp.responseText;
                }
                break;
        }
        this.success && this.success.call(this.xmlhttp, data);
    }
}

// JSONP 类
GameFUtilsJsonp = function (url, data, jsonparam, success, timeout) {
    var finish = false;
    var theHead = document.getElementsByTagName("head")[0] || document.documentElement;
    var scriptControll = document.createElement("script");
    var jsonpcallback = "jsonpcallback" + (Math.random() + "").substring(2);
    var collect = function () {
        if (theHead != null) {
            theHead.removeChild(scriptControll);
            try {
                delete window[jsonpcallback];
            } catch (ex) { }
            theHead = null;
        }
    };
    var init = function () {
        scriptControll.charset = "utf-8";
        theHead.insertBefore(scriptControll, theHead.firstChild);
        window[jsonpcallback] = function (responseData) {
            finish = true;
            success(responseData);
        };
        if (url.indexOf("?") > 0) {
            url = url + "&" + jsonparam + "=" + jsonpcallback;
        } else {
            url = url + "?" + jsonparam + "=" + jsonpcallback;
        }
        if (typeof data == "object" && data != null) {
            for (var p in data) {
                url = url + "&" + p + "=" + escape(data[p]);
            }
        }
    };
    var timer = function () {
        if (typeof window[jsonpcallback] == "function") {
            collect();
        }
        if (typeof timeout == "function" && finish == false) {
            timeout();
        }
    };
    this.request = function () {
        init();
        scriptControll.src = url;
        window.setTimeout(timer, 10000);
    };
}


GameFUtils.prototype.tongji = function () {
    return;
}




/***************************** wx *********************************/
GameFWx = function (gamef) {
    this.gamef = gamef;
    this.init();

}

GameFWx.prototype.constructor = GameFWx;

GameFWx.prototype.onBridgeReady = function () {
    var _this = this;


    // ih5game.setShare({
    //     desc: "圣诞母鸡下了好多蛋，这个圣诞我不会冷~~~"
    // });
};
GameFWx.prototype.init = function () {
    var _this = this;
    this.gamef.open_id = this.gamef.utils.getParameter("open_id");
}


GameFWx.prototype.share = function () {
    this.gamef.utils.showShare();
}
GameFWx.prototype.start = function (url, method, backFun, param) {
    this.requestServerData(url, method, backFun, param);
}
GameFWx.prototype.end = function (url, method, backFun, param) {
    this.requestServerData(url, method, backFun, 'credit=' + param.score + '&open_id=' + this.gamef.open_id + '&error_count=' + param.error_count + "&2=2");
}
GameFWx.prototype.requestServerData = function (url, method, backFun, param) {
    // alert("requestServerData:"+url+":"+method+":"+backFun+":"+param);
    try {
        $.ajax({
            type: method,
            url: url,
            data: param,
            dataType: "jsonp",
            jsonp: "callback",
            success: function (data) {
                // alert(JSON.stringify(data));
                backFun(method, url, data);
            },
            error: function (data) {

            }
        });
    }
    catch (e) {
        alert(e);
    }



    // this.gamef.utils.ajax(url, method, backFun, param);

}
GameFWx.prototype.shareComplete = function () {
    this.gamef.utils.hideShare();

}
/***************************** bjy *********************************/
GameFBjy = function (gamef) {
    this.gamef = gamef;
    this.init();

}

GameFBjy.prototype.init = function () {
    var _this = this;

}


GameFBjy.prototype.share = function () {
    var shareData = gamef.shareData;
    //alert(shareData.imgurl);
    L.share(shareData.content, shareData.content, shareData.link, shareData.imgurl, 2);
}
GameFBjy.prototype.start = function (url, method, backFun, param) {
    L.loadData(url, method, backFun, param);
}
GameFBjy.prototype.end = function (url, method, backFun, param) {

    L.loadData(url, method, backFun, 'credit=' + param.score + '&error_count=' + param.error_count + "&2=2");
}
GameFBjy.prototype.requestServerData = function (url, method, backFun, param) {
    L.loadData(url, method, backFun, param);
}
GameFBjy.prototype.shareComplete = function () {


}
/***************************** default *********************************/
GameFDefault = function (gamef) {
    this.gamef = gamef;
    this.init();

}

GameFDefault.prototype.init = function () {
    var _this = this;

}


GameFDefault.prototype.share = function () {

}
GameFDefault.prototype.start = function (url, method, backFun, param) {
    backFun(null, null, '{"status":"0","userBallonInfo":{"user_balloon_id":"830"}}');
}
GameFDefault.prototype.end = function (url, method, backFun, param) {
    backFun(null, null, '{"status":"0","userBallonInfo":{"now_count":"' + param.score + '","max_count":"' + param.maxScore + '","rewardId":"-1","key":"-1"}}');
}
GameFDefault.prototype.requestServerData = function (url, method, backFun, param) {

}
GameFDefault.prototype.shareComplete = function () {


}