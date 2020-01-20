if (void 0 == APP_API_URL)
	var APP_API_URL = /localhost/.test(location.host) ? "http://localhost:8000/" : "http://yx8.com/";
if (void 0 == APP_LIST_URL)
	var APP_LIST_URL = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/";
if (void 0 == APP_FOLLOW_URL)
	var APP_FOLLOW_URL = "http://yx8.com/game/maomaoyujia/?from=maomaoyujia";
if (void 0 == ENABLE_SHARE)
	var ENABLE_SHARE = !0;
if (void 0 == ENABLE_LB)
	var ENABLE_LB = !0;
var APP_DEPLOYMENT = "WX", IS_IOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1, IS_ANDROID = -1 < navigator.userAgent.indexOf("Android");
qipaShare = {
	title : GID,
	desc : GID,
	link : document.URL,
	imgUrl : "./img/maomaoyujia.png"
};
(function (a, g) {
	function f(b) {
		b > a.best && (a.best = b, a.storage.set(h, a.best))
	}
	var c = APP_API_URL + "social/",
	d = location.search ? location.search + "&callback=?" : "?callback=?",
	h = GID + ":best";
	a.storage = a.storage || {};
	a.storage.get = function (b) {
		try {
			b in localStorage && ($.cookie(b, localStorage[b], {
					expires : 60
				}), localStorage.removeItem(b))
		} catch (a) {}

		return $.cookie(b)
	};
	a.storage.set = function (b,
		a) {
		$.cookie(b, a, {
			expires : 60
		});
		return !0
	};
	a.score = 0;
	a.best = a.storage.get(h) || 0;
	a.newRecord = !1;

	a.startOAuth = function () {
		console.log(APP_API_URL + "wxoauth_start");
		window.open(APP_API_URL + "wxoauth_start")
	};
	a.leaderboard = function (b, a, c) {
		console.log(APP_API_URL + "leaderboard/" + a + "/" + c + "?callback=?");
		$.getJSON(APP_API_URL + "leaderboard/" + a + "/" + c + "?callback=?", b)
	};
	a.onGameInit = function () {};
	a.onGameStarted = function () {
		qipaStage.showFollowAnim(!1)
	};
	a.onGameOver = function () {
		qipaStage.showFollowAnim(!0)
	};
	a.social = a.social || {};
	a.social.chongzhi = function (b) {
		console.log(c + "chongzhi" +
			d);
		$.getJSON(c + "chongzhi" + d, b)
	};
	a.social.startOAuth = function (b) {
		b = encodeURIComponent(b);
		console.log(c + "wxoauth_start/?ret=" + b);
		window.open(c + "wxoauth_start/?ret=" + b)
	};
	a.social.viewMe = function (b) {
		console.log(c + "me" + d);
		$.getJSON(c + "me" + d, b)
	};
	a.social.viewPlayer = function (b, a) {
		console.log(c + "view" + d + "&pid=" + a);
		$.getJSON(c + "view" + d + "&pid=" + a, b)
	};
	a.social.searchPlayer = function (b, a) {
		console.log(c + "search" + d + "&qstr=" + encodeURIComponent(a));
		$.getJSON(c + "search" + d + "&qstr=" + encodeURIComponent(a), b)
	};
	a.social.friendList =
	function (a) {
		console.log(c + "frdlist" + d);
		$.getJSON(c + "frdlist" + d, a)
	};
	a.social.mywall = function (a) {
		console.log(c + "mywall" + d);
		$.getJSON(c + "mywall" + d, a)
	};
	a.social.peerwall = function (a, e) {
		console.log(c + "wall" + d + "&pid=" + e);
		$.getJSON(c + "wall" + d + "&pid=" + e, a)
	};
	a.social.conversation = function (a, e) {
		console.log(c + "conversation" + d + "&pid=" + e);
		$.getJSON(c + "conversation" + d + "&pid=" + e, a)
	};
	a.social.wallAdd = function (a, e, k) {
		console.log(c + "walladd" + d + "&pid=" + k);
		$.getJSON(c + "walladd" + d + "&pid=" + k + "&msg=" + encodeURIComponent(e),
			a)
	};
	a.social.friendDel = function (a, e) {
		console.log(c + "frddel" + d + "&pid=" + e);
		$.getJSON(c + "frddel" + d + "&pid=" + e, a)
	};
	a.social.friendAdd = function (a, e) {
		console.log(c + "frdadd" + d + "&pid=" + e);
		$.getJSON(c + "frdadd" + d + "&pid=" + e, a)
	};
	a.social.friendBlack = function (a, e) {
		console.log(c + "frdblack" + d + "&pid=" + e);
		$.getJSON(c + "frdblack" + d + "&pid=" + e, a)
	};
	a.leaderboard = function (a, c, d) {
		console.log(APP_API_URL + "leaderboard/" + c + "/" + d + "?callback=?");
		$.getJSON(APP_API_URL + "leaderboard/" + c + "/" + d + "?callback=?", a)
	}
})(window.qipaApp = window.qipaApp || {});
function qipaUi_showPopup(a) {
	console.log("showPopup url: " + a);
	window.scroll(0, 0);
	var g = document.body.scrollWidth,
	f = document.body.scrollHeight;
	void 0 == window.popup && (window.popup = $('<iframe id="popup" class="app-popup">'), $("body").append(window.popup));
	window.popup.attr("src", a);
	window.popup.css({
		width : g,
		height : f
	}).fadeIn()
};
