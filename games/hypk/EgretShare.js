/**
 * Created by saco on 14-9-26
 */
var EgretShare = {
    ShareInfo:{
        "appId":"",
        "title":"",
        "desc":"",
        "imgUrl":"",
        "link":""
    },

    setShareData:function(title, content, link, ico){
        EgretShare.ShareInfo.title = title;
        EgretShare.ShareInfo.desc = content;
        EgretShare.ShareInfo.link = link;
        EgretShare.ShareInfo.imgUrl = ico;
        EgretShare.weixinShareGetReady();
    },

    /*
     *   单独设置分享数据
     * */
    setShareTitle:function(title){
        EgretShare.ShareInfo.title = title;
        EgretShare.weixinShareGetReady();
    },

    setShareContent:function (content){
        EgretShare.ShareInfo.desc = content;
        EgretShare.weixinShareGetReady();
    },

    setShareLink:function (link){
        EgretShare.ShareInfo.link = link;
        EgretShare.weixinShareGetReady();
    },

    setShareIco:function (ico){
        EgretShare.ShareInfo.imgUrl = ico;
        EgretShare.weixinShareGetReady();
    },

    weixinShareGetReady:function (){
        if (window.hasOwnProperty("WeixinApi")) {
            WeixinApi.ready(function (api) {
                api.shareToFriend(EgretShare.ShareInfo);
                api.shareToTimeline(EgretShare.ShareInfo);
            });
        }
    },

    moreGame:function () {
        var ua = window.navigator.userAgent;
        if (ua.indexOf("EgretRuntime") != -1 && ua.indexOf("yoyo") != -1) {
            location.href = "u9time://gamelist";
        }else if(EgretShare.isInHaima()){
            location.href = "haima://GoFrontPage";
        }else {
            var appId = EgretShare.findLocationProperty("app_id");
            window.open("http://games.egret-labs.org/more.php?app_id=" + appId, "_self");
        }
    },

    share:function (){
        if(EgretShare.isInU9())
            EgretShare.shareToU9();
        else if(EgretShare.isInWeChat())
            EgretShare.showShareImg();
        else if(EgretShare.isInHaima())
            EgretShare.shareToHaima();
        else if(EgretShare.isInU9Web())
            EgretShare.shareToU9Web();
        else
            EgretShare.showShareImg();
    },

    showShareImg:function(){
        if(document.getElementById("shareImg")){
            document.getElementById("shareImg").style.display = "";
        }else
        {
            var shareDiv = document.createElement("div");
            shareDiv.id = "shareImg";
            shareDiv.style.display = "";
            shareDiv.style.zIndex = 9999;
            var s = "<img width='100%' height='100%' src='http://static.egret-labs.org/h5game/shareUtils/share.png' style='position: fixed; z-index: 9999; top: 0; left: 0;'";
            s += "onClick=\"document.getElementById('shareImg').style.display='none'\" />";
            shareDiv.innerHTML = s;
            document.body.appendChild(shareDiv);
        }
    },

    showShareDiv:function(){
        if(document.getElementById("shareDiv")){
            document.getElementById("shareDiv").style.display = "";
        }else
        {
            var shareDiv = document.createElement("div");
            shareDiv.id = "shareDiv";
            shareDiv.style.display = "";
            shareDiv.style.zIndex = 9999;
            // var s = "<img width='100%' height='100%' src='http://static.egret-labs.org/h5game/shareUtils/share.png' style='position: fixed; z-index: 9999; top: 0; left: 0;'";
            // s += "onClick=\"document.getElementById('shareDiv').style.display='none'\" />";
            // shareDiv.innerHTML = s;
            document.body.appendChild(shareDiv);
        }
    },

    shareToU9:function () {
        var url = location.href;
        if (location.search == "") {
            url += "?channel=weixin";
        } else {
            url += "&channel=weixin";
        }
        url = encodeURIComponent(url);
        var a = "123";
        var msg = encodeURIComponent(EgretShare.ShareInfo.desc);
        var uid = EgretShare.getUid();
        var link = "u9time://share?" + "uid=" + uid + "&game_url=" + url + "&a=" + a + "&msg=" + msg;
        if (!uid) {
            link = "u9time://share?" + "&game_url=" + url + "&a=" + a + "&msg=" + msg;
        }
        location.href = link;
    },

    shareToHaima:function () {
        var url = location.href;
        url = encodeURIComponent(url);
        var msg = encodeURIComponent(EgretShare.ShareInfo.desc);
        var link = "haima://sharecustom?imgurl=" + EgretShare.ShareInfo.imgUrl+ "&sharetitle=" + EgretShare.ShareInfo.title + "&shareurl=" + url + "&sharetext=" + msg;
        location.href = link;
    },

    shareToU9Web:function () {
        EgretShare.showShareDiv();
        var share_data={
            "title":EgretShare.ShareInfo.title,
            "content":EgretShare.ShareInfo.desc,
            "link":location.href,
            "imgUrl":EgretShare.ShareInfo.imgUrl,
        };
        GS.share("shareDiv",share_data);
    },

    isInHaima:function () {
        if (EgretShare.findLocationProperty("app_id") == 1009) {
            return true;
        } 
        return false;
    },

    isInWeChat:function () {
        if (window.hasOwnProperty("egret_native")) {
            return false;
        } else {
            var ua = window.navigator.userAgent;
            return ua.indexOf("MicroMessenger") != -1;
        }
    },

    isInU9:function () {
        if (window.hasOwnProperty("egret_native")) {
            return true;
        } else {
            var ua = window.navigator.userAgent;
            return ua.indexOf("EgretRuntime") != -1 && ua.indexOf("yoyo") != -1;
        }
    },

    isInU9Web:function(){
        if (EgretShare.findLocationProperty("app_id") == 1010) {
            return true;
        } 
        return false;
    },

    findLocationProperty:function (key) {
        if (window.hasOwnProperty("location")) {
            var search = location.search;
            if (search == "") {
                return null;
            }
            search = search.slice(1);
            var searchArr = search.split("&");
            var length = searchArr.length;
            for (var i = 0; i < length; i++) {
                var str = searchArr[i];
                var arr = str.split("=");
                if (arr[0] == key) {
                    return arr[1];
                }
            }
        }
        return null;
    },

    getUid:function () {
        return EgretShare.findLocationProperty("uid");
    },

    loaded:function(){
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("EgretShareLoaded", true, true);
        document.dispatchEvent(evt);
    }
};
EgretShare.loaded();