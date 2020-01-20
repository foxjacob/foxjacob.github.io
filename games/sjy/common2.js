function signCallback(data){
   
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wx1da54372a98911ec', // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature,// 必填，签名，见附录1
        jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function(){
        window.shareData = window.shareData || {
            title: document.title, // 分享标题
            link:  window.location.href, // 分享链接
            imgUrl: '', // 分享图标
            desc : ""
        };

        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "img_url": window.shareData.imgUrl,
                "link": window.shareData.link,
                "desc": window.shareData.desc,
                "title": window.shareData.title
            }, function (res) {
                //window.shareData.callback();
            })
        });

        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url": window.shareData.imgUrl,
                "link": window.shareData.link,
                "desc": window.shareData.desc,
                "title": window.shareData.desc
            }, function (res) {
                //window.shareData.callback();
            });
        });

        WeixinJSBridge.on('menu:share:weibo', function (argv) {
            WeixinJSBridge.invoke('shareWeibo', {
                "content": window.shareData.desc,
                "url": window.shareData.link
            }, function (res) {
                //window.shareData.callback();
            });
        });
        
        WeixinJSBridge.on('menu:share:qq', function (argv) {
            WeixinJSBridge.invoke('shareQQ', {
                "img_url": window.shareData.imgUrl,
                "link": window.shareData.link,
                "desc": window.shareData.desc,
                "title": window.shareData.title
            }, function (res) {
                //window.shareData.callback();
            });
        });

        /*
        wx.onMenuShareTimeline({
            title: window.shareData.desc, // 分享标题
            link: window.shareData.link, // 分享链接
            imgUrl: window.shareData.imgUrl, // 分享图标
            success: function () { 
                // 用户确认分享后执行的回调函数
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
            }
        });

        wx.onMenuShareAppMessage({
            title: window.shareData.title, // 分享标题
            desc: window.shareData.desc, // 分享描述
            link: window.shareData.link, // 分享链接
            imgUrl: window.shareData.imgUrl, // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () { 
                // 用户确认分享后执行的回调函数
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
            }
        });

        wx.onMenuShareQQ({
            title: window.shareData.title, // 分享标题
            desc: window.shareData.desc, // 分享描述
            link: window.shareData.link, // 分享链接
            imgUrl: window.shareData.imgUrl, // 分享图标
            success: function () { 
               // 用户确认分享后执行的回调函数
            },
            cancel: function () { 
               // 用户取消分享后执行的回调函数
            }
        });   

        wx.onMenuShareWeibo({
            title: window.shareData.title, // 分享标题
            desc: window.shareData.desc, // 分享描述
            link: window.shareData.link, // 分享链接
            imgUrl: window.shareData.imgUrl, // 分享图标
            success: function () { 
               // 用户确认分享后执行的回调函数
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
            }
        });        
        */
    });
}
;(function(){
    var _scri = document.createElement("script");
    var _loca = window.location.href;
    _scri.src="http://ts.html5youxi.com/weixin/signature/" + encodeURIComponent(encodeURIComponent(_loca));
    document.getElementsByTagName("head")[0].appendChild(_scri);
})();
