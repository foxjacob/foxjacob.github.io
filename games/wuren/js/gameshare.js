/*15175游戏基础代码 */
(function(window){
	if(!window.LBGAME) window.LBGAME={};
	LBGAME.Ua=function(){
		var ua=window.navigator.userAgent,type="pc";
		if(/MicroMessenger/.test(ua)) type="weixin";
		if(/CM/.test(ua)) type="cm";
		if(/(Gkuwan)/gi.test(ua)) type="kuwan";
		return type;
	};
	LBGAME.Share={
		shareData:{},
		updateData:function(obj){
			this.shareData=obj;
			switch(LBGAME.Ua()){
				case "weixin":
					if(!obj.call) this.weixinFun(obj);
					break;
				case "cm":
					if(!window.android) return
					shareFun(window.android);
					break;
				case "kuwan":
					if(!window.updateclient) return
					shareFun(window.updateclient);
					break;
				default :
					
			}
			//if(obj.call) LBGAME.Share.show();
			if(obj.fun) obj.fun();
			function shareFun(d){
				//更新分享数据
				d.updatesharedata(obj.title,obj.imgUrl, obj.cont, obj.url);
				//调起客户端分享
				if(obj.call) d.sharescore();
			}
		},
		getJson : function(a) {
		    var b = new XMLHttpRequest();
		    b.onreadystatechange = function() {
		        if (b.readyState == 4 && b.status == 200) {
		            a.callback(b.responseText)
		        }
		    };
		    b.open("get", a.url);
		    b.send(null)
		},
		setShareUrl : function(setfun){
			this.getJson({url: "./jumpCloud.json?t=" + new Date().getTime(),
				callback: function(b) {
					var a = JSON.parse(b);

					/*check weixin jump*/
					var host = window.location.href;
					try{
						var gameType = host.match(/liebao\.cn\/game\/(.*)\//)[1];
					}catch(e){
						return
					}
					
					if( /liebao\.cn\//.test(host) && LBGAME.Ua() == 'weixin'){
						window.location.href = "http://q" + (Math.floor(Math.random() * 5000)) + "." + a.jumphost + "/game/"+gameType+"/?t=" + (new Date()).valueOf();
					}

					/*check weixin jump*/
					var link = "http://q" + (Math.floor(Math.random() * 5000)) + "." + a.jumphost + "/game/"+gameType+"/?t=" + (new Date()).valueOf();

					setfun(link);
				}
			});
		},
		weixinFun:function(){
			document.addEventListener("WeixinJSBridgeReady", function a() {
				WeixinJSBridge.on("menu:share:appmessage", function(c) {
					WeixinJSBridge.invoke("sendAppMessage", {
						img_url: LBGAME.Share.shareData.imgUrl,
						link:LBGAME.Share.shareData.url,
						desc:LBGAME.Share.shareData.cont,
						title:LBGAME.Share.shareData.title
					}, function(d) {
						// if(_hmt){ 
						// 	_hmt.push(["_trackEvent", "WXShareButton", "gameShareWXFriend"]);
						// }
						if(LBGAME.Share.shareData.doneJump == "" ) return
						document.location.href = LBGAME.Share.shareData.doneJump
					})
				});
				WeixinJSBridge.on("menu:share:timeline", function(c) {
					WeixinJSBridge.invoke("shareTimeline", {
						img_url: LBGAME.Share.shareData.imgUrl,
						img_width: "300",
						img_height: "300",
						link:LBGAME.Share.shareData.url,
						desc:LBGAME.Share.shareData.cont,
						title:LBGAME.Share.shareData.title

					}, function(d) {
						// if(_hmt){ 
						// 	_hmt.push(["_trackEvent", "WXShareButton", "gameShareWX"]);
						// }
						if(LBGAME.Share.shareData.doneJump == "" ) return
						document.location.href = LBGAME.Share.shareData.doneJump
					})
				});
				WeixinJSBridge.on("menu:share:weibo", function(c) {
					WeixinJSBridge.invoke("shareWeibo", {
						content: LBGAME.Share.shareData.cont,
						url: LBGAME.Share.shareData.url
					}, function(d) {
						// if(_hmt){ 
						// 	_hmt.push(["_trackEvent", "WXShareButton", "gameShareWXweibo"]);
						// }
						if(LBGAME.Share.shareData.doneJump == "" ) return
						document.location.href = LBGAME.Share.shareData.doneJump
					})
				})
			}, false);
		},
		createTip:function(){
			var tip=document.createElement("div");
			tip.id="LBGAME_share";
			tip.setAttribute("style","position: fixed;top: 0px;left: 0px;width: 100%;height: 100%;z-index: 100;display: block;");
			if(LBGAME.Ua=="pc"){
				tip.style.background="url(/game/iq_test/images/share_tip_2.png?v=1) center bottom rgba(0,0,0,.6) no-repeat";
			}else{
				tip.style.background="url('/game/iq_test/images/share_tip.png?v=1') 50% 0 rgba(0,0,0,.6) no-repeat";
			}
			tip.addEventListener("click",function(){
				tip.style.display="none";
			},false);
			document.getElementsByTagName("body")[0].appendChild(tip);
		},
		show:function(){
			var s=document.getElementById("LBGAME_share");
			if(!s) LBGAME.Share.createTip();
			else{s.style.display="block"}
		},
		hide:function(){
			var s=document.getElementById("LBGAME_share");
			if(s) s.style.display="none";
		}
	};
})(window);
/*
LBGAME.Share.updateData({
	call:false,// false只更新数据||true更新数据+调启用户端分享
	title:"title",
	imgUrl:"imgUrl",
	cont:"cont",
	url:"url",
	doneJump:"doneJump",
	fun:"" // 分享时回调，不 fun:function(){}
});
*/