
window.appMessage = {
    "imgUrl" : img,
    "timeLineLink" :link,
    "tTitle" : title,
    "tContent" : desc
};
document.addEventListener('WeixinJSBridgeReady',
    function onBridgeReady() {
        WeixinJSBridge.on('menu:share:appmessage', function(argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "img_url" : window.appMessage.imgUrl,
                "link" : window.appMessage.timeLineLink,
                "desc" : window.appMessage.tContent,
                "title" : window.appMessage.tTitle
	            }, function(res) {
                    doPost(res.err_msg);
	            }
            );
        });

        WeixinJSBridge.on('menu:share:timeline', function(argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url" : window.appMessage.imgUrl,
                "img_width" : "640",
                "img_height" : "640",
                "link" : window.appMessage.timeLineLink,
                "desc" : window.appMessage.tContent,
                "title" : window.appMessage.tTitle
            }, function(res) {
                doPost(res.err_msg);
            });
        });
    }, false);

function doPost(msg) {
    switch(msg){
        case 'send_app_msg:ok':
        case 'send_app_msg:confirm':
        case 'share_timeline:ok':
        case 'share_timeline:confirm':{
			//alert("明天！");
            hrefSU();
        }
        break;
    };
}