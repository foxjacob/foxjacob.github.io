(function(win) {
	//确认签名已拿到
	if (typeof signPackage != "undefined") {
		wx.config({
			debug: false,
			appId: signPackage.appId,
			timestamp: signPackage.timestamp + "",
			nonceStr: signPackage.nonceStr,
			signature: signPackage.signature,
			jsApiList: [　'checkJsApi',
				'onMenuShareTimeline',
				'onMenuShareAppMessage'
			]
		});
		wxShare();
	}
})(window);

/*
 * 微信JS-SDK 分享类接口
 * @gameOver
 * @param {String} title    分享标题
 * @param {String} desc     分享描述
 * @param {String} link     分享链接
 * @param {String} imgUrl   分享图标
 * @allparam
 */
function wxShare() {
	wx.ready(function() {
		//分享给朋友
		wx.onMenuShareAppMessage({
			trigger: function(res) {
				this.title = window.shareData.tTitle;
				this.desc = window.shareData.tContent;
				this.link = window.shareData.timeLineLink;
				this.imgUrl = window.shareData.imgUrl;
			},
			success: function() {
				statistics("onShareFriends");
			},
		});
		//分享到朋友圈
		wx.onMenuShareTimeline({
			trigger: function(res) {
				this.title = window.shareData.tTitle;
				this.link = window.shareData.timeLineLink;
				this.imgUrl = window.shareData.imgUrl;
			},
			success: function() {
				statistics("onShareCircle");
			}
		});
	});
}

// 判断哪种统计 cnzz , DCAgent 
function statistics(shareName) {
	if (typeof _cnz != "undefined") {

		//cnzz
		if (shareName == "onShareCircle") {
			_czc.push(['_trackEvent', '分享朋友圈']);
		} else {
			_czc.push(['_trackEvent', '分享好友']);
		}

	} else if (typeof DCAgent != "undefined") {

		//dataeye
		if (shareName == "onShareCircle") {
			DCAgent.onEvent("share_timeline", 1, {
				userID: 'null'
			});
		} else {
			DCAgent.onEvent("share_app", 1, {
				userID: 'null'
			});
		}

	}
}
//判断是否为微信环境
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
(function(global) {

	var _wx = {

		/*
		 * 配置微信信息
		 @param 
		 config == {
			appId: signPackage.appId,
			timestamp: signPackage.timestamp,
			nonceStr: signPackage.nonceStr,
			signature: signPackage.signature,
			jsApiList: [
				'onMenuShareTimeline',
				'onMenuShareAppMessage'
			]
		}
		*/
		init: function(config) {
			wx && wx.config(config);
			return this;
		},

		/*
		 * 初始化微信分享数据
		 * @param info == { title :'title', desc : 'desc', link : 'link', imgUrl:'imgurl'}
		 *
		 */
		config: function(info) {
			var me = this;
			this.info = info || {};
			document.title = info.title; 
			wx.ready(function() {
				//分享给朋友
				wx.onMenuShareAppMessage({
					trigger: function(res) {
						this.title = info.title;
						this.desc = infot.desc;
						this.link = info.link;
						this.imgUrl = info.imgUrl;
					},
					success: function() {
						me.statistics("onShareFriends");
					},
				});
				//分享到朋友圈
				wx.onMenuShareTimeline({
					trigger: function(res) {
						this.title = info.title;
						this.link = info.link;
						this.imgUrl = info.imgUrl;
					},
					success: function() {
						me.statistics("onShareCircle");
					}
				});
			});
			return this;
		},

		/*
		 * 修改分享内容
		 * @changeInfo
		 * @param key,value         单条内容
		 * @param object     		内容对象
		 * @usage CKShare.wx.changeInfo("url",'http://266.com')
		 * @allparam
		 */
		changeInfo: function() {
			var arg = arguments,
				len = arg.length;
			if (len > 1) {
				this.info[arg[0]] = arg[1];
			} else if ("[object Object]" == Object.prototype.toString.call(arg[0])) {
				var obj = arg[0],
					i;
				for (i in obj) {
					this.info[i] = obj[i];
				}
			}
			document.title = this.info.title;
			return this;
		},

		/*
		* 统计
		*/
		statistics: function(type) {
			if (typeof _cnz != "undefined") {

				//cnzz
				if (type == "onShareCircle") {
					_czc.push(['_trackEvent', 'share_timeline']);
				} else {
					_czc.push(['_trackEvent', 'share_app']);
				}

			} else if (typeof DCAgent != "undefined") {

				//dataeye
				if (type == "onShareCircle") {
					DCAgent.onEvent("share_timeline", 1, {
						userID: 'CK_guest'
					});
				} else {
					DCAgent.onEvent("share_app", 1, {
						userID: 'CK_guest'
					});
				}

			}
		}
	}

	global.CKShare = {
		wx: _wx
	}

})(window);