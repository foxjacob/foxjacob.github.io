var _czc = _czc || [];
!function(a,b){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return b(a)}):b(a,!0)}(this,function(a,b){function c(b,c,d){a.WeixinJSBridge?WeixinJSBridge.invoke(b,e(c),function(a){i(b,a,d)}):l(b,d)}function d(b,c,d){a.WeixinJSBridge?WeixinJSBridge.on(b,function(a){d&&d.trigger&&d.trigger(a),i(b,a,c)}):d?l(b,d):l(b,c)}function e(a){return a=a||{},a.appId=B.appId,a.verifyAppId=B.appId,a.verifySignType="sha1",a.verifyTimestamp=B.timestamp+"",a.verifyNonceStr=B.nonceStr,a.verifySignature=B.signature,a}function f(a,b){return{scope:b,signType:"sha1",timeStamp:a.timestamp+"",nonceStr:a.nonceStr,addrSign:a.addrSign}}function g(a){return{timeStamp:a.timestamp+"",nonceStr:a.nonceStr,"package":a.package,paySign:a.paySign,signType:"SHA1"}}function i(a,b,c){var d,e,f;switch(delete b.err_code,delete b.err_desc,delete b.err_detail,d=b.errMsg,d||(d=b.err_msg,delete b.err_msg,d=j(a,d,c),b.errMsg=d),c=c||{},c._complete&&(c._complete(b),delete c._complete),d=b.errMsg||"",B.debug&&!c.isInnerInvoke&&alert(JSON.stringify(b)),e=d.indexOf(":"),f=d.substring(e+1)){case"ok":c.success&&c.success(b);break;case"cancel":c.cancel&&c.cancel(b);break;default:c.fail&&c.fail(b)}c.complete&&c.complete(b)}function j(a,b){var d,e,f,g;if(b){switch(d=b.indexOf(":"),a){case q.config:e="config";break;case q.openProductSpecificView:e="openProductSpecificView";break;default:e=b.substring(0,d),e=e.replace(/_/g," "),e=e.replace(/\b\w+\b/g,function(a){return a.substring(0,1).toUpperCase()+a.substring(1)}),e=e.substring(0,1).toLowerCase()+e.substring(1),e=e.replace(/ /g,""),-1!=e.indexOf("Wcpay")&&(e=e.replace("Wcpay","WCPay")),f=r[e],f&&(e=f)}g=b.substring(d+1),"confirm"==g&&(g="ok"),-1!=g.indexOf("failed_")&&(g=g.substring(7)),-1!=g.indexOf("fail_")&&(g=g.substring(5)),g=g.replace(/_/g," "),g=g.toLowerCase(),("access denied"==g||"no permission to execute"==g)&&(g="permission denied"),"config"==e&&"function not exist"==g&&(g="ok"),b=e+":"+g}return b}function k(a){var b,c,d,e;if(a){for(b=0,c=a.length;c>b;++b)d=a[b],e=q[d],e&&(a[b]=e);return a}}function l(a,b){if(B.debug&&!b.isInnerInvoke){var c=r[a];c&&(a=c),b&&b._complete&&delete b._complete,console.log('"'+a+'",',b||"")}}function m(){if(!("6.0.2">y)){var b=new Image;A.appId=B.appId,A.initTime=z.initEndTime-z.initStartTime,A.preVerifyTime=z.preVerifyEndTime-z.preVerifyStartTime,E.getNetworkType({isInnerInvoke:!0,success:function(a){A.networkType=a.networkType;var c="https://open.weixin.qq.com/sdk/report?v="+A.version+"&o="+A.isPreVerifyOk+"&s="+A.systemType+"&c="+A.clientVersion+"&a="+A.appId+"&n="+A.networkType+"&i="+A.initTime+"&p="+A.preVerifyTime+"&u="+A.url;b.src=c}})}}function n(){return(new Date).getTime()}function o(b){v&&(a.WeixinJSBridge?b():s.addEventListener&&s.addEventListener("WeixinJSBridgeReady",b,!1))}function p(){E.invoke||(E.invoke=function(b,c,d){a.WeixinJSBridge&&WeixinJSBridge.invoke(b,e(c),d)},E.on=function(b,c){a.WeixinJSBridge&&WeixinJSBridge.on(b,c)})}var q,r,s,t,u,v,w,x,y,z,A,B,C,D,E;if(!a.jWeixin)return q={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},r=function(){var b,a={};for(b in q)a[q[b]]=b;return a}(),s=a.document,t=s.title,u=navigator.userAgent.toLowerCase(),v=-1!=u.indexOf("micromessenger"),w=-1!=u.indexOf("android"),x=-1!=u.indexOf("iphone")||-1!=u.indexOf("ipad"),y=function(){var a=u.match(/micromessenger\/(\d+\.\d+\.\d+)/)||u.match(/micromessenger\/(\d+\.\d+)/);return a?a[1]:""}(),z={initStartTime:n(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},A={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:x?1:w?2:-1,clientVersion:y,url:encodeURIComponent(location.href)},B={},C={_completes:[]},D={state:0,res:{}},o(function(){z.initEndTime=n()}),E={config:function(a){B=a,l("config",a),o(function(){c(q.config,{verifyJsApiList:k(B.jsApiList)},function(){C._complete=function(a){z.preVerifyEndTime=n(),D.state=1,D.res=a},C.success=function(){A.isPreVerifyOk=0},C.fail=function(a){C._fail?C._fail(a):D.state=-1};var a=C._completes;return a.push(function(){B.debug||m()}),C.complete=function(b){for(var c=0,d=a.length;d>c;++c)a[c](b);C._completes=[]},C}()),z.preVerifyStartTime=n()}),B.beta&&p()},ready:function(a){0!=D.state?a():(C._completes.push(a),!v&&B.debug&&a())},error:function(a){"6.0.2">y||(-1==D.state?a(D.res):C._fail=a)},checkJsApi:function(a){var b=function(a){var c,d,b=a.checkResult;for(c in b)d=r[c],d&&(b[d]=b[c],delete b[c]);return a};c("checkJsApi",{jsApiList:k(a.jsApiList)},function(){return a._complete=function(a){if(w){var c=a.checkResult;c&&(a.checkResult=JSON.parse(c))}a=b(a)},a}())},onMenuShareTimeline:function(a){d(q.onMenuShareTimeline,{complete:function(){c("shareTimeline",{title:a.title||t,desc:a.title||t,img_url:a.imgUrl,link:a.link||location.href},a)}},a)},onMenuShareAppMessage:function(a){d(q.onMenuShareAppMessage,{complete:function(){c("sendAppMessage",{title:a.title||t,desc:a.desc||"",link:a.link||location.href,img_url:a.imgUrl,type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareQQ:function(a){d(q.onMenuShareQQ,{complete:function(){c("shareQQ",{title:a.title||t,desc:a.desc||"",img_url:a.imgUrl,link:a.link||location.href},a)}},a)},onMenuShareWeibo:function(a){d(q.onMenuShareWeibo,{complete:function(){c("shareWeiboApp",{title:a.title||t,desc:a.desc||"",img_url:a.imgUrl,link:a.link||location.href},a)}},a)},startRecord:function(a){c("startRecord",{},a)},stopRecord:function(a){c("stopRecord",{},a)},onVoiceRecordEnd:function(a){d("onVoiceRecordEnd",a)},playVoice:function(a){c("playVoice",{localId:a.localId},a)},pauseVoice:function(a){c("pauseVoice",{localId:a.localId},a)},stopVoice:function(a){c("stopVoice",{localId:a.localId},a)},onVoicePlayEnd:function(a){d("onVoicePlayEnd",a)},uploadVoice:function(a){c("uploadVoice",{localId:a.localId,isShowProgressTips:a.isShowProgressTips||1},a)},downloadVoice:function(a){c("downloadVoice",{serverId:a.serverId,isShowProgressTips:a.isShowProgressTips||1},a)},translateVoice:function(a){c("translateVoice",{localId:a.localId,isShowProgressTips:a.isShowProgressTips||1},a)},chooseImage:function(a){c("chooseImage",{scene:"1|2"},function(){return a._complete=function(a){if(w){var b=a.localIds;b&&(a.localIds=JSON.parse(b))}},a}())},previewImage:function(a){c(q.previewImage,{current:a.current,urls:a.urls},a)},uploadImage:function(a){c("uploadImage",{localId:a.localId,isShowProgressTips:a.isShowProgressTips||1},a)},downloadImage:function(a){c("downloadImage",{serverId:a.serverId,isShowProgressTips:a.isShowProgressTips||1},a)},getNetworkType:function(a){var b=function(a){var c,d,e,b=a.errMsg;if(a.errMsg="getNetworkType:ok",c=a.subtype,delete a.subtype,c)a.networkType=c;else switch(d=b.indexOf(":"),e=b.substring(d+1)){case"fail":case"permission denied":case"localparameters":a.errMsg="getNetworkType:fail";break;default:a.networkType=e}return a};c("getNetworkType",{},function(){return a._complete=function(a){a=b(a)},a}())},openLocation:function(a){c("openLocation",{latitude:a.latitude,longitude:a.longitude,name:a.name||"",address:a.address||"",scale:a.scale||28,infoUrl:a.infoUrl||""},a)},getLocation:function(a){c(q.getLocation,f(a,"jsapi_location"),a)},hideOptionMenu:function(a){c("hideOptionMenu",{},a)},showOptionMenu:function(a){c("showOptionMenu",{},a)},closeWindow:function(a){c("closeWindow",{immediate_close:a&&a.immediateClose||0},a)},hideMenuItems:function(a){c("hideMenuItems",{menuList:a.menuList},a)},showMenuItems:function(a){c("showMenuItems",{menuList:a.menuList},a)},hideAllNonBaseMenuItem:function(a){c("hideAllNonBaseMenuItem",{},a)},showAllNonBaseMenuItem:function(a){c("showAllNonBaseMenuItem",{},a)},scanQRCode:function(a){c("scanQRCode",{desc:a.desc,needResult:a.needResult||0,scanType:a.scanType||["qrCode","barCode"]},a)},openProductSpecificView:function(a){c(q.openProductSpecificView,{pid:a.productId,view_type:a.viewType||0},a)},addCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,card_ext:g.cardExt},d.push(h);c(q.addCard,{card_list:d},function(){return a._complete=function(a){var c,d,e,b=a.card_list;if(b){for(b=JSON.parse(b),c=0,d=b.length;d>c;++c)e=b[c],e.cardId=e.card_id,e.cardExt=e.card_ext,e.isSuccess=e.is_succ?!0:!1,delete e.card_id,delete e.card_ext,delete e.is_succ;a.cardList=b,delete a.card_list}},a}())},chooseCard:function(a){c("chooseCard",{app_id:B.appId,location_id:a.shopId||"",sign_type:"SHA1",card_id:a.cardId||"",card_type:a.cardType||"",card_sign:a.cardSign,time_stamp:a.timestamp+"",nonce_str:a.nonceStr},function(){return a._complete=function(a){a.cardList=a.choose_card_info,delete a.choose_card_info},a}())},openCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,code:g.code},d.push(h);c(q.openCard,{card_list:d},a)},chooseWXPay:function(a){c(q.chooseWXPay,g(a),a)}},b&&(a.wx=a.jWeixin=E),E});
GameLeBi = function(gameid, cpid) {
    this.gameid = gameid || null;
    this.game = null;
    this.cpid = cpid || null;
    this.spid = null;
    this.source = null;
    this.animalid = null;
    this.fromid = null;
    this.fromuser = null;
    this.baseurl = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation";
    this.gameurl = null;
    this.homeurl = null;
    this.gzurl = null;
    this.moreurl = null;
    this.score = null;
    this.scoreName = null;
    this.shareDomain = null;
    this.shareDomains = ["dm15.net", "dm15.com"];
    this.shareData = {
        imgurl: "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/img/icon.png",
        link: this.baseurl,
        title: "乐比游戏",
        content: "乐比游戏"
    };
    this.app = null;
    this.user = null;
    this.isnewuser = false;
    this.event = null;
    this.pkuid = null;
    this.pklastuser = null;
    this.utils = new GameLeBiUtils(this);
    this.auth = new GameLeBiAuth(this);
    this.init()
};
GameLeBi.prototype.init = function() {
    this.spid = this.utils.getParameter("spid");
    this.source = this.utils.getParameter("source");
    this.animalid = this.utils.getParameter("animalid");
    this.fromid = this.utils.getParameter("id");
    this.isnewuser = (this.utils.getParameter("f") == "zf");
    this.homeurl = this.baseurl + "/" + (this.spid ? "?spid=" + this.spid: "");
    this.gzurl = this.baseurl + "/" + (this.spid ? "?spid=" + this.spid: "");
    this.moreurl = (this.isnewuser ? this.gzurl: this.homeurl);
    this.shareDomain = this.shareDomains[parseInt(Math.random() * this.shareDomains.length)];
    this.pkuid = this.utils.getParameter("pkuid");
    this.pklastuser = this.utils.getParameter("pklastuser");
    switch (this.utils.getAppType()) {
    case "wx":
        this.app = new GameLeBiWx(this);
        break;
    case "9g":
        this.app = new GameLeBiApp(this);
        break;
    case "uc":
        this.app = new GameLeBiUC(this);
        break;
    case "zhongsou":
        this.app = new GameLeBiZhongsou(this);
        break
    };
    if (this.gameid) this.initGame();
};
GameLeBi.prototype.initGame = function() {
    var _this = this;
    this.gameurl = "/?gameid=" + this.gameid + (this.spid ? "&spid=" + this.spid: "") + (localStorage.myuid ? "&id=" + localStorage.myuid: "") + "&f=zf" + "&domain=" + this.shareDomain;
    this.shareData.imgurl = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/" + this.gameid + "/icon.png";
    this.shareData.link = "http://" + parseInt(Math.random()*100000) + "." + this.gameid + "." + this.shareDomain + "/" + this.gameid;
    this.utils.loading();
    if (!this.spid || this.spid == "uc" || this.spid == "9g") {
        this.ui = new GameLeBiUI(this)
    };
    if (this.utils.getAppType() == "9g" && this.utils.isIOS()) {
        setTimeout(function() {
            window.location = "appcall::setbackurl::" + _this.baseurl + "/app/games.html?r=" + Math.random()
        },
        1000)
    };
    this.connect();
    setTimeout(function() {
        _this.getEventToday()
    },
    1000);
    setTimeout(function() {
        _this.utils.showAd()
    },
    2000);
    if (this.utils.getAppType() == "wx" || this.utils.getAppType() == "9g") {
        setTimeout(function() {
            _this.bonus()
        },
        3000)
    };
    _czc.push(["_setCustomVar", "用户", (this.isnewuser ? "新用户": "老用户"), 1]);
    _czc.push(["_setCustomVar", "gameid", this.gameid, 1]);
    _czc.push(["_setCustomVar", "spid", this.spid, 1]);
    if (this.utils.getAppType() == "wx") {
        _czc.push(["_setCustomVar", "wx_ver", this.app.version, 1])
    }
};
GameLeBi.prototype.connect = function() {
    if (localStorage.accessToken) {
        var url = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/connect2?gameid=" + this.gameid + "&access_token=" + localStorage.accessToken + (this.spid ? "&spid=" + this.spid: "") + (this.fromid ? "&uid=" + this.fromid: "");
        var _this = this;
        this.utils.ajax(url,
        function(data) {
            if (data.errcode) {
                _this.auth.clear();
                _this.user = null
            } else {
                localStorage.myuid = data.uid;
                _this.user = _this.utils.extend(_this.user, data.user);
                _this.game = data.game;
            }
        })
    } else {
        var url = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/connect3.php?gameid=" + this.gameid + (this.spid ? "&spid=" + this.spid: "") + (this.utils.getParameter("f") == "zf" ? "&f=zf": "");
        var _this = this;
        this.utils.ajax(url,
        function(data) {
            _this.game = data.game;
        })
    }
};
GameLeBi.prototype.bonus = function() {
    if (!this.isTest()) return;
    if (localStorage.myuid && !gamelebi.user) {
        localStorage.bonusTipCount = localStorage.bonusTipCount || 0;
        if (localStorage.bonusTipCount && localStorage.bonusTipCount < 3) {
            var _this = this;
            this.auth.getFromUser(function() {
                var fromNickname = "";
                if (_this.fromuser) fromNickname = _this.fromuser.nickname;
                _this.utils.dialog({
                    title: "乐比游戏",
                    content: "您的朋友" + fromNickname + "帮你赢得了一元话费，是否立即领取？",
                    buttons: [{
                        label: "去领取",
                        click: function() {
                            window.location = _this.baseurl + "/bonus/new.html"
                        }
                    },
                    {
                        label: "放弃",
                        click: null
                    }]
                });
                localStorage.bonusTipCount++
            })
        }
    }
};
GameLeBi.prototype.getGameInfo = function(gameid, callback) {
    this.utils.ajax("http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/gameinfo?gameid=" + gameid, callback)
};
GameLeBi.prototype.getEventUrl = function() {
    return this.baseurl + "/app/event.html?r=" + Math.random()
};
GameLeBi.prototype.getEventToday = function(callback) {
    var url = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/getevent?gameid=" + this.gameid + (localStorage.myuid ? "&uid=" + localStorage.myuid: "");
    var _this = this;
    this.utils.ajax(url,
    function(data) {
        if (data.user) _this.user = _this.utils.extend(_this.user, data.user);
        if (data.game) _this.game = data.game;
        if (data.event) _this.event = data.event;
        if (_this.user && (_this.spid == null || _this.spid == "uc")) {
            _this.isnewuser = false;
            _this.moreurl = _this.homeurl
        };
        callback && callback.apply(_this)
    })
};
GameLeBi.prototype.setShareData = function(shareData) {
    if (shareData) this.shareData = this.utils.extend(this.shareData, shareData);
    if (this.app && this.app.setShareData) this.app.setShareData()
};
GameLeBi.prototype.share = function() {
    this.app && this.app.share()
};
GameLeBi.prototype.shareLog = function(options, callback) {
    var url = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/gameshare";
    if (options.gameid) url = this.utils.setParameter(url, "gameid", options.gameid);
    if (options.spid) url = this.utils.setParameter(url, "spid", options.spid);
    if (options.id) url = this.utils.setParameter(url, "id", options.id);
    if (options.source) url = this.utils.setParameter(url, "source", options.source);
    if (options.type) url = this.utils.setParameter(url, "type", options.type);
    if (options.domain) url = this.utils.setParameter(url, "domain", options.domain);
    this.utils.ajax(url,
    function(data) {
        callback && callback.apply(null)
    })
};
GameLeBi.prototype.shareFlow = function() {
    var _this = this;
    if (this.isnewuser && this.spid && this.spid != "9g" && this.spid != "uc" && this.spid != "zhongsou" && this.spid != "51h5") {
        this.app.shareOK = function() {
            window.location = _this.moreurl
        };
        this.utils.shareTip();
        return
    };
    if (this.source == "zoo") {
        this.app.shareOK = function() {
            window.location = _this.baseurl + "/zoo/second.html?animalid=" + _this.animalid
        };
        this.utils.shareTip();
        return
    };
    if (this.event) {
        if (this.event.gameid == this.gameid) {
            this.app.shareOK = function() {
                if (!_this.isSubmitted || _this.isSubmitted && _this.score != _this.autoScore) {
                    _this.submit(function() {
                        window.location = _this.getEventUrl()
                    })
                } else {
                    window.location = _this.getEventUrl()
                }
            };
            this.utils.shareTip()
        } else {
            this.app.shareOK = function() {
                window.location = _this.getEventUrl()
            };
            this.utils.shareTip()
        }
    } else {
        this.app.shareOK = function() {
            window.location = _this.moreurl
        };
        this.utils.shareTip()
    }
};
GameLeBi.prototype.autoSubmit = function() {
    var _this = this;
    if (localStorage.myuid && this.score != null && this.score > 0) {
        if (!this.isSubmitted || this.isSubmitted && (this.gameOrder == "asc" && this.score < this.rankScore || this.gameOrder == "desc" && this.score > this.rankScore)) {
            this.submit(function(data) {
                if (data.success) {
                    _this.isSubmitted = true;
                    _this.gameOrder = data.order;
                    _this.rankScore = data.refreshRankScore || data.lastRankScore == -1 ? _this.score: data.lastRankScore;
                    _this.autoScore = _this.score
                }
            })
        }
    }
};
GameLeBi.prototype.submit = function(callback) {
    if (!localStorage.myuid) {
        return
    };
    if (this.score == null || isNaN(this.score)) {
        return
    };
    var pkuid = (this.fromid && this.fromid != localStorage.myuid ? this.fromid: "");
    var notice = "";
    if (pkuid && !this.notice) {
        notice = "y";
        this.notice = true
    };
    var pklastuser = (this.pklastuser ? "y": "");
    var a = [this.gameid, localStorage.myuid, this.score, encodeURIComponent(this.scoreName), encodeURIComponent(this.shareData.title), pkuid, notice, pklastuser];
    var data = Base64.encode(this.utils.encrypt("gamelebicom2014123", a.join("|")));
    var url = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/submit?data=" + data;
    var _this = this;
    this.utils.ajax(url,
    function(data) {
        if (data.success) {
            _this.utils.debug(data);
            callback && callback.call(null, data)
        } else {
            _this.utils.debug("提交失败")
        }
    })
};
GameLeBi.prototype.isTest = function() {
    return (this.utils.getParameter("istest") == "y" || localStorage.myuid == "b1Atb251RGNNZktTeTRCdXp3NDFCMkpoNzR0OA==" || localStorage.myuid == "b1Atb251T1ZmS0VubEhKSXdxTi1NQ3NuV2xvZw==" || localStorage.myuid == "b1Atb251R0xBLVRldGNjcGxGZmNLWlhsOXZ0bw==" || localStorage.myuid == "b1Atb251Qi1MbllvTkRTVjduc0c3eGlQUnlQNA==" || localStorage.myuid == "b1Atb251RHpoRmtpa2M2YjhGbF9sUDRzQ28wTQ==" || localStorage.myuid == "b1Atb251SzlpMHV6eXBZLTlmTkIwUm9VWl9NWQ==" || localStorage.myuid == "b1Atb251UG8tVnNWbDM3UVFvaUI4M2hJbUQyTQ==")
};
GameLeBiAuth = function(gamelebi) {
    this.gamelebi = gamelebi
};
GameLeBiAuth.prototype.check = function(options) {
    var defaults = {
        level: "id",
        redirect: location.href,
        success: null,
        fail: null
    };
    options = this.gamelebi.utils.extend(defaults, options);
    if (this.checkError()) {
        options.fail && options.fail.apply(null);
        return
    };
    if (this.checkOKLoad(options, 10)) {
        options.success && options.success.apply(null);
        return
    };
    if (options.level == "id" && !localStorage.accessToken) {
        this.checkTask(options)
    } else if (options.level == "user" && !localStorage.token) {
        this.checkTask(options)
    } else {
        var url = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/check";
        if (options.level == "id") url += "?access_token=" + localStorage.accessToken;
        if (options.level == "user") url += "?token=" + localStorage.token;
        var _this = this;
        this.gamelebi.utils.ajax(url,
        function(data) {
            if (data && data.success) {
                _this.checkOkSave(options, data);
                options.success && options.success.apply(null)
            } else {
                _this.clear();
                _this.checkTask(options)
            }
        })
    }
};
GameLeBiAuth.prototype.checkError = function() {
    if (sessionStorage.errcode && sessionStorage.errmsg) {
        this.gamelebi.utils.debug("errcode = " + sessionStorage.errcode + ", errmsg = " + sessionStorage.errmsg);
        sessionStorage.removeItem("errcode");
        sessionStorage.removeItem("errmsg");
        this.clear();
        return true
    };
    return false
};
GameLeBiAuth.prototype.clear = function() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("token");
    localStorage.removeItem("myuid");
    localStorage.removeItem("unionid")
};
GameLeBiAuth.prototype.checkOkSave = function(options, data) {
    this.clear();
    if (data.accessToken) localStorage.accessToken = data.accessToken;
    if (data.token) localStorage.token = data.token;
    if (data.myuid) localStorage.myuid = data.myuid;
    if (data.unionid) localStorage.unionid = data.unionid;
    var key = "check_" + options.level + "_ok_time";
    sessionStorage[key] = new Date().getTime()
};
GameLeBiAuth.prototype.checkOKLoad = function(options, sec) {
    var key = "check_" + options.level + "_ok_time";
    if (sessionStorage[key]) {
        var checkTime = sessionStorage[key];
        sessionStorage.removeItem(key);
        if (checkTime && (new Date().getTime() - checkTime) <= sec * 1000) return true
    };
    return false
};
GameLeBiAuth.prototype.checkTask = function(options) {
    switch (options.level) {
    case "id":
        if (this.gamelebi.utils.getAppType() == "wx") {
            this.loginWx(options.redirect)
        } else {
            options.fail && options.fail.apply(null)
        };
        break;
    case "user":
        if (this.gamelebi.utils.getAppType() == "wx") {
            if (!localStorage.accessToken) {
                this.loginWx(options.redirect)
            } else {
                this.registerWx(options.redirect)
            }
        } else {
            this.loginForm(options.redirect)
        };
        break
    }
};
GameLeBiAuth.prototype.getUser = function(callback) {
    if (!localStorage.token) {
        callback && callback.call(null, null)
    } else {
        var _this = this;
        var url = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/getuser?token=" + localStorage.token;
        this.gamelebi.utils.ajax(url,
        function(data) {
            if (data.errcode) {
                localStorage.removeItem("token");
                _this.gamelebi.user = null;
                callback && callback.call(null, null)
            } else {
                _this.gamelebi.user = _this.gamelebi.utils.extend(_this.gamelebi.user, data);
                callback && callback.call(null, data)
            }
        })
    }
};
GameLeBiAuth.prototype.getFromUser = function() {
    var id = this.gamelebi.fromid;
    var callback = null;
    switch (arguments.length) {
    case 1:
        if (typeof arguments[0] == "string") id = arguments[0];
        if (typeof arguments[0] == "function") callback = arguments[0];
        break;
    case 2:
        id = arguments[0];
        callback = arguments[1];
        break
    };
    if (id) {
        var _this = this;
        var url = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/getuser?id=" + id;
        this.gamelebi.utils.ajax(url,
        function(data) {
            var user = null;
            if (data.errcode) {
                _this.gamelebi.utils.debug(data.errmsg)
            } else {
                user = data;
                _this.gamelebi.fromuser = user
            };
            callback && callback.call(null, user)
        })
    } else {
        callback && callback.call(null, null)
    }
};
GameLeBiAuth.prototype.loginWx = function(redirect) {
    var trans = this.gamelebi.baseurl + "/auth/trans.app.html?origin=" + encodeURIComponent(redirect);
    var url = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/check?fromurl=" + encodeURIComponent(trans);
    window.location = url
};
GameLeBiAuth.prototype.registerWx = function(redirect) {
    var trans = this.gamelebi.baseurl + "/auth/trans.app.html?origin=" + encodeURIComponent(redirect);
    var success = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/check?fromurl=" + encodeURIComponent(trans);
    var fail = this.gamelebi.baseurl + "/app/games.html";
    var url = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/getuser?success=" + encodeURIComponent(success) + "&fail=" + encodeURIComponent(fail);
    window.location = url
};
GameLeBiAuth.prototype.loginForm = function(redirect) {
    var url = this.gamelebi.baseurl + "/app/login.html?bckurl=" + encodeURIComponent(redirect);
    window.location = url
};
GameLeBiAuth.prototype.saveLink = function(callback) {
    var id = this.gamelebi.fromid;
    if (id && localStorage.accessToken && id != localStorage.myuid) {
        var url = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/link?access_token=" + localStorage.accessToken + "&id=" + id;
        var _this = this;
        this.gamelebi.utils.ajax(url,
        function(data) {
            var result = 0;
            if (data.error) {
                _this.gamelebi.utils.debug(data);
                result = -1
            } else {
                result = data.linkResult
            };
            callback && callback.call(null, result)
        })
    } else {
        callback && callback.call(null, -1)
    }
};
GameLeBiUI = function(gamelebi) {
    this.gamelebi = gamelebi;
    this.start = new GameLeBiUIStart(gamelebi);
};
GameLeBiUIStart = function(gamelebi) {
    this.gamelebi = gamelebi;
    var a = document.createElement("a");
    a.id = "gamelebi9gstart";
    a.className = "gamelebi9gstart";
    var _this = this;
    a.addEventListener("touchstart",
    function(event) {
        localStorage.hasClick9gStart = true;
        _this.gamelebi.ui.menu.show();
        event.preventDefault()
    });
    document.getElementsByTagName("body")[0].appendChild(a);
};

GameLeBiUtils = function(gamelebi) {
    this.gamelebi = gamelebi
};
GameLeBiUtils.prototype.extend = function(target, options) {
    if (target == undefined || target == null) {
        return options
    } else {
        if (options) {
            for (name in options) {
                target[name] = options[name]
            }
        };
        return target
    }
};
GameLeBiUtils.prototype.isIOS = function() {
    return /iPhone|iPod|iPad|Mac/ig.test(navigator.userAgent)
};
GameLeBiUtils.prototype.isAndroid = function() {
    return /android|linux/i.test(navigator.userAgent)
};
GameLeBiUtils.prototype.getAppType = function() {
    var ua = navigator.userAgent;
    if (/micromessenger/ig.test(ua)) {
        return "wx"
    } else if (/gamelebi/ig.test(ua)) {
        return "9g"
    } else if (/ucbrowser/ig.test(ua)) {
        return "uc"
    } else if (/souyue/ig.test(ua)) {
        return "zhongsou"
    } else {
        return "other"
    }
};
GameLeBiUtils.prototype.getAppVersion = function() {
    var result = null;
    var version = null;
    var ua = navigator.userAgent;
    switch (this.getAppType()) {
    case "wx":
        result = ua.match(/MicroMessenger\/([^\s]+)/i);
        if (result) version = result[1];
        break;
    case "9g":
        result = ua.match(/Game9g\s([^\s]+)/i);
        if (result) version = result[1];
        break;
    case "uc":
        result = ua.match(/UCBrowser\/([^\s]+)/i);
        if (result) version = result[1];
        break;
    case "zhongsou":
        result = ua.match(/souyue\/([^\s]+)/i);
        if (result) version = result[1];
        break
    };
    return version
};
GameLeBiUtils.prototype.compareVersion = function(version1, version2) {
    var r1 = version1.match(/(\d+)(?!\d)/ig);
    var r2 = version2.match(/(\d+)(?!\d)/ig);
    var result = true;
    for (var i = 0; i < 99; i++) {
        if (r2.length < i + 1) {
            result = true;
            break
        };
        var n1 = parseInt(r1[i]);
        var n2 = parseInt(r2[i]);
        if (n1 != n2) {
            result = (n1 > n2);
            break
        }
    };
    return result
};
GameLeBiUtils.prototype.getUrl = function() {
    if (location.origin && location.pathname) {
        return location.origin + location.pathname
    } else {
        return location.href.match(/[^?#]+/i)[0]
    }
};
GameLeBiUtils.prototype.getFullUrl = function() {
    return location.href.match(/[^#;]+/i)[0]
};
GameLeBiUtils.prototype.getPath = function() {
    if (location.pathname) {
        return location.pathname
    } else {
        return location.href.match(/(?:http|https):\/\/[^\/]+([^?#;]+)/i)[1]
    }
};
GameLeBiUtils.prototype.getQueryString = function() {
    return location.search
};
GameLeBiUtils.prototype.getParameter = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return r[2];
    return null
};
GameLeBiUtils.prototype.setParameter = function(url, name, value) {
    url = url.replace(/(#.*)/ig, "");
    var reg = new RegExp("([\?&])" + name + "=([^&]*)(?=&|$)", "i");
    if (reg.test(url)) {
        return url.replace(reg, "$1" + name + "=" + value)
    } else {
        return url + (url.indexOf("?") == -1 ? "?": "&") + name + "=" + value
    }
};
GameLeBiUtils.prototype.removeParameter = function(url, name) {
    url = url.replace(/(#.*)/ig, "");
    var reg = new RegExp("([\?&])" + name + "=([^&]*)(?=&|$)", "i");
    if (reg.test(url)) {
        url = url.replace(reg, "");
        if (url.indexOf("?") == -1) url = url.replace("&", "?")
    };
    return url
};
GameLeBiUtils.prototype.getHead64 = function(headimgurl) {
    if (!headimgurl) return "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/default.png";
    if (headimgurl.indexOf("/0") != -1) {
        headimgurl = headimgurl.substr(0, headimgurl.length - 2) + "/64"
    };
    return headimgurl
};
GameLeBiUtils.prototype.getHead132 = function(headimgurl) {
    if (!headimgurl) return "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/default.png";
    if (headimgurl.indexOf("/0") != -1) {
        headimgurl = headimgurl.substr(0, headimgurl.length - 2) + "/132"
    };
    return headimgurl
};
GameLeBiUtils.prototype.now = function() {
    var dt = new Date();
    dt.setMilliseconds(0);
    return dt.getTime() / 1000
};
GameLeBiUtils.prototype.today = function() {
    var dt = new Date();
    dt.setHours(0, 0, 0, 0);
    return dt.getTime() / 1000
};
GameLeBiUtils.prototype.formatDate = function() {
    var date = arguments[0];
    var format = arguments[1] || "yyyy-MM-dd HH:mm:ss";
    if (typeof date == "number") {
        date = new Date(date * 1000)
    };
    var paddNum = function(num) {
        num += "";
        return num.replace(/^(\d)$/, "0$1")
    };
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
    };
    return format.replace(/([a-z])(\1)*/ig,
    function(m) {
        return config[m]
    })
};
GameLeBiUtils.prototype.getRandomInt = function(min, max) {
    return parseInt((Math.random() * (max - min + 1)) + min)
};
GameLeBiUtils.prototype.getRandomString = function(len) {
    var base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    var str = "";
    for (var i = 0; i < len; i++) {
        var n = this.getRandomInt(1, base.length) - 1;
        str += base.substr(n, 1)
    };
    return str
};
GameLeBiUtils.prototype.shareConfirm = function(content, callback) {
    this.gamelebi.autoSubmit();
    if (this.gamelebi.spid == "zhongsou") {
        if (this.gamelebi.shareData.title.indexOf("搜悦游戏") == -1) this.gamelebi.shareData.title += "[搜悦游戏]";
        if (this.gamelebi.shareData.content.indexOf("搜悦游戏") == -1) this.gamelebi.shareData.content += "[搜悦游戏]"
    };
    var _this = this;
    setTimeout(function() {
        if (_this.getAppType() == "wx" || _this.getAppType() == "9g") {
            callback && callback.apply(null)
        } else {
            if (_this.gamelebi.app) {
                if (confirm(content)) {
                    callback && callback.apply(null)
                }
            }
        }
    },
    500)
};
//GameLeBiUtils.prototype.shareTip = function() {
//    if (document.getElementById("gamelebishareevent")) return;
//    var imgShare = document.createElement("img");
//    imgShare.id = "gamelebishareevent";
//    imgShare.src = "http://game.9g.com/img/sharetoevent.png";
//    imgShare.className = "gamelebishareevent";
//    document.getElementsByTagName("body")[0].appendChild(imgShare);
//    var mask = document.createElement("div");
//    mask.className = "gamelebisharemask";
//    document.getElementsByTagName("body")[0].appendChild(mask);
//    mask.addEventListener("touchstart",
//    function() {
//        document.getElementsByTagName("body")[0].removeChild(mask);
//        document.getElementsByTagName("body")[0].removeChild(imgShare);
//    })
//};
GameLeBiUtils.prototype.dialog = function(options) {
    new GameLeBiUtilsDialog(this.gamelebi, options).open()
};
GameLeBiUtilsDialog = function(gamelebi, options) {
    this.gamelebi = gamelebi;
    var defaults = {
        title: "乐比游戏",
        content: "",
        buttons: [],
        buttonOK: null,
        buttonCancel: null
    };
    this.options = this.gamelebi.utils.extend(defaults, options);
    this.init()
};
GameLeBiUtilsDialog.prototype.init = function() {
    if (this.options.buttonOK) {
        this.options.buttons.push(this.gamelebi.utils.extend({
            label: "确定",
            color: "#FFFFFF",
            bgcolor: "#FF0000",
            click: null
        },
        this.options.buttonOK))
    };
    if (this.options.buttonCancel) {
        this.options.buttons.push(this.gamelebi.utils.extend({
            label: "取消",
            color: "#FFFFFF",
            bgcolor: "#888888",
            click: null
        },
        this.options.buttonCancel))
    }
};
GameLeBiUtilsDialog.prototype.open = function() {
    if (document.getElementById("gamelebidialog")) return;
    var div = document.createElement("div");
    div.id = "gamelebidialog";
    div.className = "gamelebidialog";
    div.innerHTML = "<header><h2>" + this.options.title + "</h2></header><section>" + this.options.content.replace(/\n/g, "<br/>") + "</section><footer></footer>";
    var _this = this;
    for (var i = 0; i < this.options.buttons.length; i++) { (function(btn) {
            var a = document.createElement("a");
            a.innerHTML = btn.label;
            if (btn.color) a.style.color = btn.color;
            if (btn.bgcolor) a.style.backgroundColor = btn.bgcolor;
            a.addEventListener("touchstart", _this.close);
            a.addEventListener("touchstart",
            function(e) {
                btn.click && btn.click.apply(_this.gamelebi);
                e.preventDefault()
            });
            div.getElementsByTagName("footer")[0].appendChild(a)
        })(this.options.buttons[i])
    };
    document.getElementsByTagName("body")[0].appendChild(div);
    var mask = document.createElement("div");
    mask.id = "gamelebimask";
    mask.className = "gamelebimask";
    document.getElementsByTagName("body")[0].appendChild(mask)
};
GameLeBiUtilsDialog.prototype.close = function(e) {
    var div = document.getElementById("gamelebidialog");
    if (div) document.getElementsByTagName("body")[0].removeChild(div);
    var mask = document.getElementById("gamelebimask");
    if (mask) document.getElementsByTagName("body")[0].removeChild(mask);
    e.preventDefault()
};
GameLeBiUtils.prototype.ajax = function(url, success) {
    url = this.gamelebi.utils.setParameter(url, "_", Math.random());
    new GameLeBiUtilsAjax(this.gamelebi, "GET", url, null, "json", success)
};
GameLeBiUtils.prototype.jsonp = function(url, data, jsonparam, success) {
    url = this.gamelebi.utils.setParameter(url, "_", Math.random());
    new GameLeBiUtilsJsonp(url, data, jsonparam, success).request()
};
GameLeBiUtilsAjax = function(gamelebi, method, url, data, type, success) {
    this.gamelebi = gamelebi;
    this.xmlhttp = null;
    if (window.XMLHttpRequest) {
        this.xmlhttp = new XMLHttpRequest()
    } else {
        this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    };
    this.type = type;
    this.success = success;
    this.xmlhttp.open(method, url, true);
    var _this = this;
    this.xmlhttp.onreadystatechange = function() {
        _this.callback.apply(_this)
    };
    this.xmlhttp.send(data)
};
GameLeBiUtilsAjax.prototype.callback = function() {
    if (this.xmlhttp.readyState == 4 && this.xmlhttp.status == 200) {
        var data = null;
        switch (this.type) {
        case "text":
            data = this.xmlhttp.responseText;
            break;
        case "json":
            try {
                data = JSON.parse(this.xmlhttp.responseText)
            } catch(e) {
                data = this.xmlhttp.responseText
            };
            break
        };
        this.success && this.success.call(this.xmlhttp, data)
    }
};
GameLeBiUtilsJsonp = function(url, data, jsonparam, success, timeout) {
    var finish = false;
    var theHead = document.getElementsByTagName("head")[0] || document.documentElement;
    var scriptControll = document.createElement("script");
    var jsonpcallback = "jsonpcallback" + (Math.random() + "").substring(2);
    var collect = function() {
        if (theHead != null) {
            theHead.removeChild(scriptControll);
            try {
                delete window[jsonpcallback]
            } catch(ex) {};
            theHead = null
        }
    };
    var init = function() {
        scriptControll.charset = "utf-8";
        theHead.insertBefore(scriptControll, theHead.firstChild);
        window[jsonpcallback] = function(responseData) {
            finish = true;
            success(responseData)
        };
        jsonparam = jsonparam || "callback";
        if (url.indexOf("?") > 0) {
            url = url + "&" + jsonparam + "=" + jsonpcallback
        } else {
            url = url + "?" + jsonparam + "=" + jsonpcallback
        };
        if (typeof data == "object" && data != null) {
            for (var p in data) {
                url = url + "&" + p + "=" + escape(data[p])
            }
        }
    };
    var timer = function() {
        if (typeof window[jsonpcallback] == "function") {
            collect()
        };
        if (typeof timeout == "function" && finish == false) {
            timeout()
        }
    };
    this.request = function() {
        init();
        scriptControll.src = url;
        window.setTimeout(timer, 10000)
    }
};
GameLeBiUtils.prototype.loading = function() {
    var div = document.createElement("div");
    div.id = "gamelebiloading";
    div.className = "gamelebiloading";
    if (this.gamelebi.cpid) {
        div.innerHTML = "正在加载中请稍后。。。" + this.gamelebi.gameid + "正在加载中请稍后。。。' />"
    } else {
        div.innerHTML = "正在加载中请稍后。。。"
    };
    document.getElementsByTagName("body")[0].appendChild(div);
    var interval = (this.getAppType() == "9g" ? 1000 : 3000);
    setTimeout(function() {
        document.getElementsByTagName("body")[0].removeChild(div);
        var a = document.getElementById("gamelebi9gstart");
        if (a) {
            a.className = "gamelebi9gstart bounceInLeft";
            var afinish = function() {
                a.className = "gamelebi9gstart pulse infinite";
                var img = document.getElementById("gamelebi9gstarttip");
                if (img) {
                    img.className = "gamelebi9gstarttip bounceInRight";
                    var imgfinish = function() {
                        setTimeout(function() {
                            img.className = "gamelebi9gstarttip bounceOutLeft"
                        },
                        1000)
                    };
                    img.addEventListener("animationend", imgfinish);
                    img.addEventListener("webkitAnimationEnd", imgfinish)
                }
            };
            a.addEventListener("animationend", afinish);
            a.addEventListener("webkitAnimationEnd", afinish)
        }
    },
    interval)
};
GameLeBiUtils.prototype.showAd = function() {
    if (this.gamelebi.spid == "uc" && this.getAppType() != "uc") {
        var url = "http://wx.9g.com/pm/get.jsp?spid=" + this.gamelebi.spid;
        this.ajax(url,
        function(data) {
            if (data.ad) {
                var img = document.createElement("img");
                img.id = "gamelebiad";
                img.src = data.ad.imgurl;
                img.className = "gamelebiad";
                img.addEventListener("touchstart",
                function() {
                    window.location = "http://wx.9g.com/pm/click.jsp?id=" + data.ad.id
                });
                document.getElementsByTagName("body")[0].appendChild(img)
            }
        })
    };
    if (this.gamelebi.spid == "zhongsou" && this.getAppType() != "zhongsou") {
        var isZhousouInstalled = (this.getParameter("isappinstalled") == "1");
        var url = "http://wx.9g.com/pm/get.jsp?spid=" + this.gamelebi.spid;
        var _this = this;
        this.ajax(url,
        function(data) {
            if (data.ad) {
                var img = document.createElement("img");
                img.id = "gamelebiadbottom";
                img.className = "gamelebiadbottom";
                img.src = data.ad.imgurl;
                img.addEventListener("touchstart",
                function() {
                    if (isZhousouInstalled) {
                        if (_this.getAppType() == "wx") {
                            var tip = document.createElement("img");
                            tip.id = "gamelebizhongsoutip";
                            tip.className = "gamelebizhongsoutip";
                            tip.src = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/img/" + (_this.isIOS() ? "zhongsou_share_ios.png": "zhongsou_share_android.png");
                            document.getElementsByTagName("body")[0].appendChild(tip)
                        } else {
                            window.location = "wx360a9785675a8653://"
                        }
                    } else {
                        window.location = "http://wx.9g.com/pm/click.jsp?id=" + data.ad.id
                    }
                });
                document.getElementsByTagName("body")[0].appendChild(img)
            }
        })
    }
};
GameLeBiUtils.prototype.debug = function(obj) {
    if (this.gamelebi.isTest()) {
        alert("[DEBUG]\n" + this.describe(obj))
    }
};
GameLeBiUtils.prototype.describe = function(obj, tab) {
    tab = tab || "";
    var content = "";
    if (typeof obj == "object" && obj != null) {
        for (var item in obj) {
            if (typeof obj[item] == "object" && obj[item] != null) content += tab + item + " = \n" + tab + "(\n" + this.describe(obj[item], tab + "    ") + tab + ")\n";
            else content += tab + item + " = " + obj[item] + "\n"
        }
    } else {
        content += tab + obj
    };
    return content
};
GameLeBiUtils.prototype.encrypt = function(key, word) {
    var iv = CryptoJS.enc.Utf8.parse(key);
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, CryptoJS.enc.Utf8.parse(key), {
        iv: iv,
        mode: CryptoJS.mode.CBC
    });
    return encrypted.toString()
};
GameLeBiUtils.prototype.track = function() {
    var action = null;
    var value = null;
    var memo = null;
    var callback = null;
    switch (arguments.length) {
    case 1:
        action = arguments[0];
        break;
    case 2:
        action = arguments[0];
        if (!isNaN(arguments[1])) value = arguments[1];
        if (typeof arguments[1] == "function") callback = arguments[1];
        break;
    case 3:
        action = arguments[0];
        value = arguments[1];
        if (typeof arguments[2] == "string") memo = arguments[2];
        if (typeof arguments[2] == "function") callback = arguments[2];
        break;
    case 4:
        action = arguments[0];
        value = arguments[1];
        memo = arguments[2];
        callback = arguments[3];
        break
    };
    if (action == null) {
        this.debug("track ERROR: 要求 action");

        return
    };
    var url = "http://wx.9g.com/open/track?action=" + encodeURIComponent(action);
    if (value != null) url = this.setParameter(url, "value", value);
    if (memo != null) url = this.setParameter(url, "memo", encodeURIComponent(memo));
    if (this.gamelebi.gameid) url = this.setParameter(url, "gameid", this.gamelebi.gameid);
    if (localStorage.myuid) url = this.setParameter(url, "uid", localStorage.myuid);
    this.ajax(url,
    function(data) {
        if (data.success) {
            callback && callback.apply(null)
        }
    })
};

// 统计代码
GameLeBiUtils.prototype.tongji = function() {
	// baidu
	var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
	document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F88406a9ce88af98b00c43c01033bb66d' type='text/javascript'%3E%3C/script%3E"));
// cnzz
	var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
	document.write(unescape("%3Cspan id='cnzz_stat_icon_1253174262'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s5.cnzz.com/stat.php%3Fid%3D1253174262' type='text/javascript'%3E%3C/script%3E"));
}
// 广告
GameLeBiUtils.prototype.guanggao = function() {	
	var test = new adwojs({
		 eid:'spns', //节点id
		 eid:'spnx', //节点id
		 aid: '6e27bc61c672409cb4815629d2b92596', //android安卓PID
		 pid: '992e4e24c74c4daea962c845307ba446', //iOS PID
		 bt: false,
		 af:true, //是否自动适合ipad平板广告，默认值为true。
		 width: 320, //广告图片宽度(除320外，还有720宽度，用于ipad中显示)
         height:50  //广告图片高度(除50外，还有110高度，用于ipad中显示)
	});
	test.send();
}
document.write(unescape("%3Cscript src='http://static.adwo.com/jssdk/jssdk.min.js' charset='utf-8' type='text/javascript'%3E%3C/script%3E"));

GameLeBiWx = function(gamelebi) {
    this.gamelebi = gamelebi;
    this.version = null;
    this.ready = false;
    this.shareOK = null;
    this.shareCancel = null;
    this.init()
};
GameLeBiWx.prototype.init = function() {
    this.version = this.gamelebi.utils.getAppVersion();
    this.initJsApi()
};
GameLeBiWx.prototype.isVersionOver = function(version) {
    return this.gamelebi.utils.compareVersion(this.version, version)
};
GameLeBiWx.prototype.initWeixinJSBridge = function() {
    var _this = this;
    document.addEventListener("WeixinJSBridgeReady",
    function onBridgeReady() {
        WeixinJSBridge.on("menu:share:appmessage",
        function(argv) {
            WeixinJSBridge.invoke("sendAppMessage", {
                "img_url": _this.gamelebi.shareData.imgurl,
                "link": _this.gamelebi.shareData.link,
                "desc": _this.gamelebi.shareData.content,
                "title": _this.gamelebi.shareData.title
            },
            function(res) {
                if (res.err_msg == "send_app_msg:cancel") {
                    _this.shareCancelHandler()
                } else {
                    _this.shareOKHandler()
                }
            })
        });
        WeixinJSBridge.on("menu:share:timeline",
        function(argv) {
            WeixinJSBridge.invoke("shareTimeline", {
                "img_url": _this.gamelebi.shareData.imgurl,
                "img_width": "640",
                "img_height": "640",
                "link": _this.gamelebi.shareData.link,
                "desc": _this.gamelebi.shareData.content,
                "title": _this.gamelebi.shareData.title
            },
            function(res) {
                if (res.err_msg == "share_timeline:cancel") {
                    _this.shareCancelHandler()
                } else {
                    _this.shareOKHandler()
                }
            })
        })
    },
    false)
};
GameLeBiWx.prototype.initJsApi = function() {
    var timestamp = this.gamelebi.utils.now();
    var noncestr = this.gamelebi.utils.getRandomString(16);
    var url = this.gamelebi.utils.getFullUrl();
    var ajaxUrl = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/getjsapisignature/?noncestr=" + noncestr + "&timestamp=" + timestamp + "&url=" + encodeURIComponent(url);
    var _this = this;
    this.gamelebi.utils.ajax(ajaxUrl,
    function(data) {
        if (data.signature) {
            var signature = data.signature;
            wx.config({
                debug: false,
                appId: "wxe47ec7fcd82a07b0",
                timestamp: timestamp,
                nonceStr: noncestr,
                signature: signature,
                jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "translateVoice", "startRecord", "stopRecord", "onRecordEnd", "playVoice", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"]
            });
            wx.ready(function() {
                _this.ready = true;
                _this.setShareData()
            });
            wx.error(function(res) {
                _this.gamelebi.utils.debug(res)
            })
        }
    })
};
GameLeBiWx.prototype.setShareData = function() {
    var _this = this;
    wx.onMenuShareTimeline({
        title: this.gamelebi.shareData.title,
        link: this.gamelebi.shareData.link,
        imgUrl: this.gamelebi.shareData.imgurl,
        success: function() {
            var options = {
                gameid: _this.gamelebi.gameid,
                spid: _this.gamelebi.spid,
                id: localStorage.myuid || null,
                source: 1,
                type: 1,
                domain: (_this.gamelebi.shareData.link || "").indexOf(_this.gamelebi.shareDomain != -1) ? _this.gamelebi.shareDomain: null
            };
            _this.gamelebi.shareLog(options,
            function() {
                _this.shareOKHandler()
            })
        },
        cancel: function() {
            _this.shareCancelHandler()
        }
    });
    wx.onMenuShareAppMessage({
        title: this.gamelebi.shareData.title,
        desc: this.gamelebi.shareData.content,
        link: this.gamelebi.shareData.link,
        imgUrl: this.gamelebi.shareData.imgurl,
        type: "",
        dataUrl: "",
        success: function() {
            var options = {
                gameid: _this.gamelebi.gameid,
                spid: _this.gamelebi.spid,
                id: localStorage.myuid || null,
                source: 2,
                type: 1,
                domain: (_this.gamelebi.shareData.link || "").indexOf(_this.gamelebi.shareDomain != -1) ? _this.gamelebi.shareDomain: null
            };
            _this.gamelebi.shareLog(options,
            function() {
                _this.shareOKHandler()
            })
        },
        cancel: function() {
            _this.shareCancelHandler()
        }
    })
};
GameLeBiWx.prototype.share = function() {
    this.setShareData();
    if (this.gamelebi.gameid) {
        this.gamelebi.shareFlow()
    }
};
GameLeBiWx.prototype.shareOKHandler = function() {
    _czc.push(["_trackEvent", "分享", "成功"]);
    this.shareOK && this.shareOK.apply(this.gamelebi);
};
GameLeBiWx.prototype.shareCancelHandler = function() {
    this.shareCancel && this.shareCancel.apply(this.gamelebi);
};
GameLeBiApp = function(gamelebi) {
    this.gamelebi = gamelebi;
    this.version = null;
    this.type = null;
    this.shareOK = null;
    this.shareCancel = null;
    this.oldTitle = null;
    this.init()
};
GameLeBiApp.prototype.init = function() {
    this.version = this.gamelebi.utils.getAppVersion();
    if (/uuid\sios/ig.test(navigator.userAgent)) this.type = "iOS";
    if (/uuid\sandroid/ig.test(navigator.userAgent)) this.type = "Android";
    var _this = this;
    document.addEventListener("gamelebiWxShareOk",
    function onBridgeReady() {
        if (_this.oldTitle) document.title = _this.oldTitle;
        _this.shareOK && _this.shareOK.apply(_this.gamelebi)
    })
};
GameLeBiApp.prototype.isVersionOver = function(version) {
    return this.gamelebi.utils.compareVersion(this.version, version)
};
GameLeBiApp.prototype.setShareData = function() {
    if (this.type == "iOS") {
        window.location = "appcall::setwxshare::" + this.gamelebi.shareData.link + "::" + this.gamelebi.shareData.title + "::" + this.gamelebi.shareData.content + "::" + this.gamelebi.shareData.imgurl
    } else if (this.type == "Android") {
        this.oldTitle = document.title;
        var space = "9G............................................................|";
        document.title = space + this.gamelebi.shareData.link + "|" + this.gamelebi.shareData.title + "|" + this.gamelebi.shareData.content + "|" + this.gamelebi.shareData.imgurl;
    }
};
GameLeBiApp.prototype.share = function() {
    this.setShareData();
    if (this.gamelebi.gameid) {
        this.gamelebi.shareFlow()
    }
};
GameLeBiUC = function(gamelebi) {
    this.gamelebi = gamelebi;
    this.version = null;
    window.uc_param_str = {};
    this.init()
};
GameLeBiUC.prototype.init = function() {
    this.version = this.gamelebi.utils.getAppVersion();
    var url = "http://hao.uc.cn/getucparam.php";
    var data = {
        uc_param_str: "dnfrpfbivecpbtnt"
    };
    this.gamelebi.utils.jsonp(url, data, null,
    function(data) {
        window.uc_param_str = data
    })
};
GameLeBiUC.prototype.isVersionOver = function(version) {
    return this.gamelebi.utils.compareVersion(this.version, version)
};
GameLeBiUC.prototype.share = function() {
    if (uc_param_str.fr === 'android' || uc_param_str.fr === 'iphone') {
        if (uc_param_str.fr === 'android') {
            try {
                ucweb.startRequest("shell.page_share", [this.gamelebi.shareData.title, this.gamelebi.shareData.content, this.gamelebi.shareData.link, ''])
            } catch(e) {
                console.error(e.message)
            }
        } else {
            if (this.isVersionOver("9.9.0.0")) {
                this.createIconImage();
                ucbrowser.web_share(this.gamelebi.shareData.title, this.gamelebi.shareData.content, this.gamelebi.shareData.link, '', '', '来自乐比游戏', 'gamelebiucicon')
            } else {
                location.href = "ext:web_share:"
            }
        }
    } else {
        this.gamelebi.utils.debug("其它分享接口")
    }
};
GameLeBiUC.prototype.createIconImage = function() {
    var img = document.getElementById("gamelebiucicon");
    if (!img) {
        img = document.createElement("img");
        img.id = "gamelebiucicon";
        if (this.gamelebi.gameid) img.src = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/" + this.gamelebi.gameid + "/icon.png";
        else img.src = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/img/icon.png";
        img.className = "gamelebiucicon";
        document.getElementsByTagName("body")[0].appendChild(img)
    }
};
GameLeBiZhongsou = function(gamelebi) {
    this.gamelebi = gamelebi;
    this.version = null;
    this.type = null;
    this.shareOK = null;
    this.shareCancel = null;
    this.init()
};
GameLeBiZhongsou.prototype.init = function() {
    this.type = (navigator.userAgent.match(/(iPhone|iPod|iPad)/ig) ? "iOS": "Android")
};
GameLeBiZhongsou.prototype.share = function() {
    var sharedData = {
        category: "share",
        title: this.gamelebi.shareData.title,
        url: this.gamelebi.shareData.link,
        image: this.gamelebi.shareData.imgurl,
        description: this.gamelebi.shareData.content
    };
    if (this.type == "iOS") {
        location.href = "souyue.onclick://" + encodeURIComponent(JSON.stringify(sharedData))
    } else if (window.JavascriptInterface && JavascriptInterface.onJSClick) {
        JavascriptInterface.onJSClick(JSON.stringify(sharedData))
    }
};