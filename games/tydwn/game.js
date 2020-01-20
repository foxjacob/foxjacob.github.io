var CRENDER_DEBUG = !1;
"undefined" == typeof window.console && (window.console = {
	log: function() {}
});
window.Utils || (window.Utils = {});
var Utils = Utils;
Utils.detectMobileBrowser = function() {
	return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
};
Utils.getTouchStartEvent = function() {
	return Utils.isWindowsPhone() ? "mspointerdown" : "touchstart"
};
Utils.getTouchMoveEvent = function() {
	return Utils.isWindowsPhone() ? "mspointermove" : "touchmove"
};
Utils.getTouchEndEvent = function() {
	return Utils.isWindowsPhone() ? "mspointerup" : "touchend"
};
Utils.touchScreen = Utils.detectMobileBrowser();
Utils.globalScale = 1;
Utils.globalPixelScale = 1;
Utils.isWindowHidden = !1;
Utils.DOMMainContainerId = "main_container";
Utils.DOMProgressContainerId = "progress_container";
Utils.DOMProgressId = "progress";
Utils.DOMScreenBackgroundContainerId = "screen_background_container";
Utils.DOMScreenBackgroundWrapperId = "screen_background_wrapper";
Utils.DOMScreenBackgroundId = "screen_background";
Utils.DOMScreenContainerId = "screen_container";
Utils.DOMScreenWrapperId = "screen_wrapper";
Utils.DOMScreenId = "screen";
Utils.DOMP2lContainerId = "p2l_container";
Utils.DOMP2lId = "p2l";
Utils.DOMMarkId = "mark";
Utils.setCookie = function(a, c) {
	try {
		window.localStorage.setItem(a, c)
	} catch (d) {
		var e = new Date;
		e.setDate(e.getDate() + 3650);
		document.cookie = a + "=" + c + "; expires=" + e.toUTCString()
	}
};
Utils.getCookie = function(a) {
	var c;
	try {
		c = window.localStorage.getItem(a)
	} catch (d) {
		a += "=";
		c = document.cookie.indexOf(a);
		if (-1 == c) return null;
		var e = document.cookie.indexOf(";", c + a.length); - 1 == e && (e = document.cookie.length);
		c = unescape(document.cookie.substring(c + a.length, e))
	}
	return c
};
Utils.bindEvent = function(a, c, d) {
	a.addEventListener ? a.addEventListener(c, d, !1) : a.attachEvent && a.attachEvent("on" + c, d)
};
Utils.unbindEvent = function(a, c, d) {
	a.removeEventListener ? a.removeEventListener(c, d, !1) : a.detachEvent && a.detachEvent("on" + c, d)
};
Utils.getObjectLeft = function(a) {
	var c = a.offsetLeft;
	a.offsetParent && (c += Utils.getObjectLeft(a.offsetParent));
	return c
};
Utils.getObjectTop = function(a) {
	var c = a.offsetTop;
	a.offsetParent && (c += Utils.getObjectTop(a.offsetParent));
	return c
};
Utils.parseGet = function() {
	var a = {},
		c = window.location.toString(),
		d = window.location.toString().indexOf("?");
	if (0 <= d)
		for (var c = c.substr(d + 1, c.length), d = c.split("&"), e = 0; e < d.length; e++) c = d[e].split("="), a[c[0]] = c[1];
	return a
};
Utils.getMouseCoord = function(a, c) {
	var d = a || window.event;
	d.touches && (d = d.touches[0]);
	if (!d) return {
		x: 0,
		y: 0
	};
	var e = 0,
		f = 0,
		g = 0,
		h = 0;
	c && (e = Utils.getObjectLeft(c), f = Utils.getObjectTop(c));
	if (d.pageX || d.pageY) g = d.pageX, h = d.pageY;
	else if (d.clientX || d.clientY) g = d.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft, h = d.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
	return {
		x: g - e,
		y: h - f
	}
};
Utils.removeFromArray = function(a, c) {
	for (var d = [], e = 0; e < a.length; e++) a[e] != c && d.push(a[e]);
	return d
};
Utils.showLoadProgress = function(a) {
	var c = Utils.globalScale,
		d;
	d = "Loading: " + a + "%<br><br>";
	d += '<div style="display: block; background: #000; width: ' + a * c * 2 + "px; height: " + 10 * c + 'px;">&nbsp;</div>';
	document.getElementById(Utils.DOMProgressId).innerHTML = d
};
Utils.hideAddressBarLock = !1;
Utils.mobileHideAddressBar = function() {
	Utils.hideAddressBarLock || window.scrollTo(0, 1)
};
Utils.mobileCheckIphone4 = function() {
	return Utils.touchScreen && 0 <= navigator.userAgent.indexOf("iPhone") && 2 == window.devicePixelRatio
};
Utils.mobileCheckBrokenAndroid = function() {
	return Utils.touchScreen && Utils.isAndroid() && !Utils.isChrome() && !Utils.isFirefox()
};
Utils.mobileCheckSlowDevice = function() {
	return Utils.mobileCheckBrokenAndroid() && 0 <= navigator.userAgent.toLowerCase().indexOf("sm-t310") || Utils.touchScreen && Utils.isAndroid() && Utils.isFirefox() && 0 <= navigator.userAgent.toLowerCase().indexOf("sm-t310")
};
Utils.isChrome = function() {
	var a = !1;
	0 <= navigator.userAgent.toLowerCase().indexOf("chrome") && (a = !0, Utils.isAndroid() && 22 > (parseInt((/Chrome\/([0-9]+)/.exec(navigator.appVersion) || 0)[1], 10) || 0) && (a = !1));
	return a
};
Utils.isAndroid = function() {
	return 0 <= navigator.userAgent.toLowerCase().indexOf("android")
};
Utils.isIOS = function() {
	return navigator.userAgent.toLowerCase().match(/(ipad|iphone|ipod)/g) ? !0 : !1
};
Utils.isPlayFreeBrowser = function() {
	return 0 <= navigator.userAgent.toLowerCase().indexOf("playfreebrowser")
};
Utils.isFirefox = function() {
	return 0 <= navigator.userAgent.toLowerCase().indexOf("firefox")
};
Utils.isWindowsPhone = function() {
	return 0 <= navigator.userAgent.toLowerCase().indexOf("windows phone")
};
Utils.disableCorrectPixelRatio = !1;
Utils.mobileCorrectPixelRatio = function() {
	for (var a = document.getElementsByTagName("head")[0].getElementsByTagName("meta"), c = !0, d = null, e = "", f = 0; f < a.length; f++)
		if ("viewport" == a[f].name) {
			d = a[f];
			c = !1;
			break
		}
	c && (d = document.createElement("meta"), d.name = "viewport");
	e += "target-densitydpi=device-dpi, user-scalable=0";
	Utils.isPlayFreeBrowser() && (e += ", width=device-width, height=device-height");
	a = 1 / (window.devicePixelRatio ? window.devicePixelRatio : 1);
	a = a.toFixed(2);
	Utils.disableCorrectPixelRatio && (a = 1);
	d.content =
		e + (", initial-scale=" + a + ", maximum-scale=" + a + ", minimum-scale=" + a);
	c && document.getElementsByTagName("head")[0].appendChild(d)
};
Utils.getMobileScreenResolution = function(a) {
	var c = 1,
		d = window.innerWidth,
		e = window.innerHeight;
	d && e || (d = screen.width, e = screen.height);
	c = 1;
	Utils.disableCorrectPixelRatio && (c = window.devicePixelRatio ? window.devicePixelRatio : 1);
	var d = d * c,
		e = e * c,
		f = [{
			scale: 1,
			width: 320,
			height: 480
		}, {
			scale: 1.5,
			width: 480,
			height: 720
		}, {
			scale: 2,
			width: 640,
			height: 960
		}],
		g = {
			width: 0,
			height: 0
		},
		h = "";
	Utils.touchScreen ? (g.width = Math.min(d, e), g.height = Math.max(d, e)) : (a && (f = [{
		scale: 1,
		width: 480,
		height: 320
	}, {
		scale: 1.5,
		width: 720,
		height: 480
	}, {
		scale: 2,
		width: 960,
		height: 640
	}]), g.width = d, g.height = e);
	h = "height";
	d = Number.MAX_VALUE;
	for (e = 0; e < f.length; e++) {
		var l = Math.abs(g[h] - f[e][h]);
		d > l && (d = l, c = f[e].scale)
	}
	return Utils.getScaleScreenResolution(c, a)
};
Utils.getScaleScreenResolution = function(a, c) {
	var d = Math.round(320 * a),
		e = Math.round(480 * a);
	return {
		width: c ? e : d,
		height: c ? d : e,
		scale: a
	}
};
Utils.imagesRoot = "images";
Utils.initialResolution = {
	width: 320,
	height: 480,
	scale: 1
};
Utils.ignoreMobileHeightCorrection = !1;
Utils.createLayout = function(a, c, d, e) {
	var f = Utils.globalScale;
	Utils.initialResolution = c;
	d = window.innerHeight;
	document.body.style.overflow = "hidden";
	var g;
	g = "" + ('<div id="' + Utils.DOMProgressContainerId + '" align="center" style="width: 100%; height: ' + d + 'px; display: block; width: 100%; position: absolute; left: 0px; top: 0px;">');
	g += '<table cellspacing="0" cellpadding="0" border="0"><tr><td id="' + Utils.DOMProgressId + '" align="center" valign="middle" style="width: ' + c.width + "px; height: " + c.height + "px; color: #000; background: #fff; font-weight: bold; font-family: Verdana; font-size: " +
		12 * f + 'px; vertical-align: middle; box-sizing: border-box"></td></tr></table>';
	g = g + "</div>" + ('<div id="' + Utils.DOMScreenBackgroundContainerId + '" style="width: 100%; height: ' + d + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 2;">');
	g += '<div id="' + Utils.DOMScreenBackgroundWrapperId + '" style="width: ' + c.width + "px; height: " + c.height + 'px; position: relative; left: 0px; overflow: hidden;">';
	e || (g += '<canvas id="' + Utils.DOMScreenBackgroundId + '" width="' + c.width + '" height="' + c.height +
		'" style="transform: translateZ(0)"></canvas>');
	g += "</div>";
	g += "</div>";
	g += '<div id="' + Utils.DOMScreenContainerId + '" style="width: 100%; height: ' + d + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 3;">';
	g += '<div id="' + Utils.DOMScreenWrapperId + '" width="' + c.width + '" height="' + c.height + '" style="width: ' + c.width + "px; height: " + c.height + 'px; position: relative; left: 0px; overflow: hidden;">';
	e || (g += '<canvas id="' + Utils.DOMScreenId + '" style="position: absolute; left: 0px; top: 0px;" width="' +
		c.width + '" height="' + c.height + '">You browser does not support this application :(</canvas>');
	g += "</div>";
	g += "</div>";
	a.innerHTML = g;
	a = document.createElement("div");
	a.setAttribute("id", Utils.DOMP2lContainerId);
	a.setAttribute("align", "center");
	a.setAttribute("style", "width: 100%; height: " + d + "px; position: absolute; left: 0px; top: 0px; visibility: hidden; z-index: 1000; background-color: #fff; background-image: url(" + Utils.imagesRoot + "/p2l.jpg); background-repeat: no-repeat; background-position: center center");
	c = document.createElement("img");
	c.setAttribute("id", Utils.DOMP2lId);
	c.width = 1;
	c.height = 1;
	c.style.display = "none";
	a.appendChild(c);
	document.body.appendChild(a);
	a = document.createElement("div");
	a.setAttribute("id", Utils.DOMMarkId);
	a.style.position = "fixed";
	a.style.right = "0px";
	a.style.bottom = "0px";
	a.style.width = "1px";
	a.style.height = "1px";
	a.style.background = "";
	a.style.zIndex = "100000";
	document.body.appendChild(a);
	Utils.fitLayoutToScreen()
};
Utils.showMainLayoutContent = function() {
	document.getElementById(Utils.DOMProgressContainerId).style.display = "none";
	document.getElementById(Utils.DOMScreenContainerId).style.display = "block";
	document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display = "block"
};
Utils.preventEvent = function(a) {
	a.preventDefault();
	a.stopPropagation();
	a.cancelBubble = !0;
	return a.returnValue = !1
};
Utils.touchStartEventDisabled = !1;
Utils.preventTouchStart = function() {
	Utils.touchStartEventDisabled && Utils.bindEvent(document.body, Utils.getTouchStartEvent(), Utils.preventEvent)
};
Utils.removePreventTouchStart = function() {
	Utils.touchStartEventDisabled && Utils.unbindEvent(document.body, Utils.getTouchStartEvent(), Utils.preventEvent)
};
Utils.addMobileListeners = function(a, c) {
	if (c || !navigator.userAgent.match(/(iPad|iPhone|iPod).*CPU.*OS 7_\d/i)) Utils.touchStartEventDisabled = !0, Utils.preventTouchStart();
	Utils.isPlayFreeBrowser() || Utils.bindEvent(window, "scroll", function(a) {
		setTimeout(Utils.mobileHideAddressBar, 300)
	});
	document.addEventListener(Utils.getVisibiltyProps().visibilityChange, Utils.handleVisibilityChange, !1);
	setInterval("Utils.checkOrientation(" + (a ? "true" : "false") + ")", 500);
	setTimeout(Utils.mobileHideAddressBar, 500)
};
Utils.handleVisibilityChange = function() {
	Utils.isWindowHidden = document[Utils.getVisibiltyProps().hidden];
	Utils.dispatchEvent(Utils.isWindowHidden ? "hidewindow" : "showwindow")
};
Utils.getVisibiltyProps = function() {
	var a, c;
	"undefined" !== typeof document.hidden ? (a = "hidden", c = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (a = "mozHidden", c = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (a = "msHidden", c = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (a = "webkitHidden", c = "webkitvisibilitychange");
	return {
		hidden: a,
		visibilityChange: c
	}
};
Utils.staticWindowRect = null;
Utils.setWindowRect = function(a, c) {
	Utils.staticWindowRect = {
		width: a,
		height: c
	}
};
Utils.getWindowRect = function() {
	var a = document.getElementById(Utils.DOMMarkId);
	return Utils.isAndroid() && a ? {
		width: window.innerWidth,
		height: a.offsetTop + 1
	} : {
		width: window.innerWidth,
		height: window.innerHeight
	}
};
Utils.storeOrient = null;
Utils.noCheckOrient = !1;
Utils.checkOrientation = function(a) {
	if (Utils.touchScreen && document.getElementById(Utils.DOMScreenContainerId) && !Utils.noCheckOrient && 1 != Utils.parseGet().nocheckorient) {
		var c = Utils.getWindowRect(),
			c = c.width > c.height;
		Utils.storeOrient !== c && (Utils.storeOrient = c, c != a ? (Utils.dispatchEvent("lockscreen"), document.getElementById(Utils.DOMP2lContainerId).style.visibility = "visible", document.getElementById(Utils.DOMProgressContainerId).style.visibility = "hidden", document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display =
			"none", document.getElementById(Utils.DOMScreenContainerId).style.display = "none") : (Utils.dispatchEvent("unlockscreen"), document.getElementById(Utils.DOMP2lContainerId).style.visibility = "hidden", document.getElementById(Utils.DOMProgressContainerId).style.visibility = "visible", document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display = "block", document.getElementById(Utils.DOMScreenContainerId).style.display = "block"), setTimeout(Utils.mobileHideAddressBar, 900), setTimeout(Utils.fitLayoutToScreen,
			1E3))
	}
};
Utils.fitLayoutTimer = null;
Utils.addFitLayoutListeners = function() {
	Utils.fitLayoutTimer = setInterval(Utils.fitLayoutToScreen, 500)
};
Utils.removeFitLayoutListeners = function() {
	clearInterval(Utils.fitLayoutTimer)
};
Utils.fitLayoutLock = !1;
Utils.fitLayoutCorrectHeight = 0;
Utils.fitLayoutAlign = "center";
Utils.fitLayoutVerticalAlign = "top";
Utils.layoutMargin = {
	left: 0,
	right: 0,
	top: 0,
	bottom: 0
};
Utils.fitLayoutToScreen = function(a) {
	if (!Utils.fitLayoutLock) {
		var c, d, e, f, g;
		g = Utils.getWindowRect();
		"object" == typeof a && a.width || (f = Utils.staticWindowRect ? Utils.staticWindowRect : g, d = f.width, e = f.height, e += Utils.fitLayoutCorrectHeight, e -= Utils.layoutMargin.top, e -= Utils.layoutMargin.bottom, d -= Utils.layoutMargin.left, d -= Utils.layoutMargin.right, a = {
			width: d,
			height: e
		});
		if (a.width && a.height && (c = document.getElementById(Utils.DOMScreenWrapperId))) {
			c.initWidth || (c.initWidth = Utils.initialResolution.width, c.initHeight =
				Utils.initialResolution.height);
			d = c.initWidth;
			e = c.initHeight;
			var h = 1,
				h = a.width / d,
				l = a.height / e,
				h = h < l ? h : l;
			Utils.globalPixelScale = h;
			d = Math.floor(d * h);
			e = Math.floor(e * h);
			if (c.lastWidth != a.width || c.lastHeight != a.height || c.lastRealWidth != g.width || c.lastRealHeight != g.height) c.lastWidth = a.width, c.lastHeight = a.height, c.lastRealWidth = g.width, c.lastRealHeight = g.height, Utils.resizeElement(Utils.DOMScreenId, d, e), Utils.resizeElement(Utils.DOMScreenBackgroundId, d, e), Utils.resizeElement(Utils.DOMProgressContainerId,
				f.width, f.height), Utils.resizeElement(Utils.DOMProgressId, d, e), c = Utils.resizeElement(Utils.DOMScreenWrapperId, d, e), Utils.alignElement(c, g, d, e), c = Utils.resizeElement(Utils.DOMScreenBackgroundWrapperId, d, e), Utils.alignElement(c, g, d, e), Utils.resizeElement(Utils.DOMP2lContainerId, f.width, f.height), Utils.resizeElement(Utils.DOMScreenContainerId, f.width, f.height), Utils.resizeElement(Utils.DOMScreenBackgroundContainerId, f.width, f.height), Utils.dispatchEvent("fitlayout"), Utils.isPlayFreeBrowser() && window.scrollTo(1,
				2), setTimeout(Utils.mobileHideAddressBar, 10)
		}
	}
};
Utils.alignElement = function(a, c, d, e) {
	a && (a.style.left = "left" == Utils.fitLayoutAlign ? Utils.layoutMargin.left + "px" : "right" == Utils.fitLayoutAlign ? Math.floor(c.width - d - Utils.layoutMargin.right) + "px" : Math.floor((c.width - d - Utils.layoutMargin.left - Utils.layoutMargin.right) / 2) + "px", a.style.top = "top" == Utils.fitLayoutVerticalAlign ? Utils.layoutMargin.top + "px" : "bottom" == Utils.fitLayoutVerticalAlign ? Math.floor(c.height - e - Utils.layoutMargin.bottom) + "px" : Math.floor((c.height - e - Utils.layoutMargin.top - Utils.layoutMargin.bottom) /
		2) + "px")
};
Utils.resizeElement = function(a, c, d) {
	a = document.getElementById(a);
	if (!a) return null;
	a.style.width = Math.floor(c) + "px";
	a.style.height = Math.floor(d) + "px";
	return a
};
Utils.drawIphoneLimiter = function(a, c) {
	c ? a.drawRectangle(240, 295, 480, 54, "#f00", !0, .5, !0) : a.drawRectangle(160, 448, 320, 64, "#f00", !0, .5, !0)
};
Utils.drawGrid = function(a, c, d) {
	"undefined" == typeof c && (c = !1);
	"undefined" == typeof d && (d = "#FFF");
	var e = c ? 480 : 320;
	c = c ? 320 : 480;
	for (var f = 10; f < e; f += 10) {
		var g = .1 + (f - 10) / 10 % 10 * .1;
		a.drawLine(f, 0, f, c, 1, d, g)
	}
	for (f = 10; f < c; f += 10) g = .1 + (f - 10) / 10 % 10 * .1, a.drawLine(0, f, e, f, 1, d, g)
};
Utils.drawScaleFix = function(a, c) {.75 == Utils.globalScale && (c ? a.drawRectangle(507, 160, 54, 320, "#000", !0, 1, !0) : a.drawRectangle(160, 507, 320, 54, "#000", !0, 1, !0));
	1.5 == Utils.globalScale && (c ? a.drawRectangle(510, 160, 60, 320, "#000", !0, 1, !0) : a.drawRectangle(160, 510, 320, 60, "#000", !0, 1, !0))
};
Utils.grad2radian = function(a) {
	return a / (180 / Math.PI)
};
Utils.radian2grad = function(a) {
	return 180 / Math.PI * a
};
Utils.eventsListeners = [];
Utils.onlockscreen = null;
Utils.onunlockscreen = null;
Utils.onhidewindow = null;
Utils.onshowwindow = null;
Utils.onfitlayout = null;
Utils.addEventListener = function(a, c) {
	EventsManager.addEvent(Utils, a, c)
};
Utils.removeEventListener = function(a, c) {
	EventsManager.removeEvent(Utils, a, c)
};
Utils.dispatchEvent = function(a, c) {
	return EventsManager.dispatchEvent(Utils, a, c)
};
Utils.isArray = function(a) {
	return "[object Array]" === Object.prototype.toString.call(a)
};
Utils.isPlainObject = function(a) {
	return a && a.constructor ? a.constructor === Object : !1
};
Utils.getFunctionArguments = function(a, c) {
	"undefined" == typeof c && (c = 0);
	return [].slice.call(a, c)
};
Utils.proxy = function(a, c) {
	var d = Utils.getFunctionArguments(arguments, 2);
	return function() {
		return a.apply(c || this, Utils.getFunctionArguments(arguments, 0).concat(d))
	}
};
Utils.extend = function(a, c) {
	var d = function() {};
	d.prototype = c.prototype;
	a.prototype = new d;
	a.prototype.constructor = a;
	a.superclass = c.prototype
};
Utils.callSuperConstructor = function(a, c) {
	a.superclass.constructor.apply(c, Utils.getFunctionArguments(arguments, 2))
};
Utils.callSuperMethod = function(a, c, d) {
	return a.superclass[d].apply(c, Utils.getFunctionArguments(arguments, 3))
};
Utils.copyObjectProps = function(a, c) {
	for (var d in a)
		if (a.hasOwnProperty(d))
			if (Utils.isArray(a[d])) {
				c[d] = [];
				for (var e = 0; e < a[d].length; e++) "object" == typeof a[d][e] && (c[d][e] = Utils.cloneEmptyObject(a[d][e])), Utils.copyObjectProps(a[d][e], c[d][e])
			} else Utils.isPlainObject(a[d]) ? (c[d] = {}, Utils.copyObjectProps(a[d], c[d])) : c[d] = a[d]
};
Utils.cloneEmptyObject = function(a) {
	return a.constructor ? new a.constructor : {}
};
Utils.clone = function(a) {
	if (!a || "object" != typeof a) return a;
	var c = Utils.cloneEmptyObject(a);
	Utils.copyObjectProps(a, c);
	return c
};
Utils.switchToTimeMode = function(a) {
	Tween.STEP_TYPE = Tween.STEP_BY_TIME;
	StageTimer.TIMEOUT_TYPE = StageTimer.TIMEOUT_BY_TIME;
	Sprite.CHANGE_FRAME_TYPE = Sprite.CHANGE_FRAME_BY_TIME;
	Sprite.CHANGE_FRAME_DELAY = a
};
Utils.getGameID = function() {
	if (window.GAME_ID && "my_game" != window.GAME_ID) return window.GAME_ID;
	for (var a = window.location.toString().split("/"), c = ""; !c;) c = a.pop(), 1 < c.split(".").length && (c = ""), 0 == a.length && (c = "my_game");
	return c
};
Utils.ajax = function(a, c, d, e, f, g) {
	var h;
	h = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
	h.onreadystatechange = function() {
		if (4 == h.readyState)
			if (200 == h.status) {
				var a = h.responseText;
				"json" == e && (a = JSON.parse(a));
				"xml" == e && (a = Utils.parseXMLString(a));
				f && f(a, h)
			} else g && g(h.status, h)
	};
	if (d) {
		var l = [],
			k;
		for (k in d) l.push(encodeURIComponent(k) + "=" + encodeURIComponent(d[k]));
		d = l.join("&")
	} else d = "";
	c || (c = "GET");
	h.open(c, a + ("GET" == c ? "?" + d : ""), !0);
	"POST" == c && h.setRequestHeader("Content-type",
		"application/x-www-form-urlencoded");
	h.send("GET" != c ? d : null)
};
Utils.get = function(a, c, d, e, f) {
	Utils.ajax(a, "GET", c, d, e, f)
};
Utils.post = function(a, c, d, e, f) {
	Utils.ajax(a, "POST", c, d, e, f)
};
Utils.getBezierBasis = function(a, c, d) {
	function e(a) {
		return 1 >= a ? 1 : a * e(a - 1)
	}
	return e(c) / (e(a) * e(c - a)) * Math.pow(d, a) * Math.pow(1 - d, c - a)
};
Utils.getBezierCurve = function(a, c) {
	"undefined" == typeof c && (c = .1);
	var d = [];
	c /= a.length;
	for (var e = 0; e < 1 + c; e += c) {
		1 < e && (e = 1);
		var f = d.length;
		d[f] = {
			x: 0,
			y: 0
		};
		for (var g = 0; g < a.length; g++) {
			var h = Utils.getBezierBasis(g, a.length - 1, e);
			d[f].x += a[g].x * h;
			d[f].y += a[g].y * h
		}
	}
	return d
};
Utils.parseXMLString = function(a) {
	var c = null;
	if ("undefined" != typeof window.DOMParser) c = (new window.DOMParser).parseFromString(a, "text/xml");
	else if ("undefined" != typeof window.ActiveXObject && new window.ActiveXObject("Microsoft.XMLDOM")) c = new window.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a);
	else throw Error("No XML parser found");
	return c
};
Utils.gotoFullScreen = function() {
	var a = document.documentElement;
	a.requestFullscreen && a.requestFullscreen();
	a.webkitRequestFullscreen && a.webkitRequestFullscreen();
	a.mozRequestFullscreen && a.mozRequestFullscreen();
	a.msRequestFullscreen && a.msRequestFullscreen()
};
Utils.cancelFullScreen = function() {
	document.cancelFullScreen && document.cancelFullScreen();
	document.webkitCancelFullScreen && document.webkitCancelFullScreen();
	document.mozCancelFullScreen && document.mozCancelFullScreen();
	document.msExitFullscreen && document.msExitFullscreen()
};
Utils.isFullScreen = function() {
	return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)
};
Utils.isFullScreenEnabled = function() {
	return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullscreenEnabled || document.msFullscreenEnabled)
};
Utils.toggleFullScreen = function() {
	Utils.isFullScreen() ? Utils.cancelFullScreen() : Utils.gotoFullScreen()
};
Utils.sign = function(a) {
	return 0 == a ? 0 : 0 < a ? 1 : -1
};

function ImagesPreloader() {
	this.curItem = -1;
	this.loadedImages = {};
	this.processCallback = this.endCallback = this.data = null;
	this.minProgressVal = 0;
	this.maxProgressVal = 100;
	this.wait = Utils.proxy(this.wait, this)
}
ImagesPreloader.prototype.load = function(a, c, d) {
	this.data = a;
	this.endCallback = c;
	this.processCallback = d;
	for (a = 0; a < this.data.length; a++) c = this.data[a], d = new Image, d.src = c.src, this.loadedImages[c.name] = d;
	this.wait()
};
ImagesPreloader.prototype.wait = function() {
	var a = 0,
		c = 0,
		d;
	for (d in this.loadedImages) this.loadedImages[d].complete && a++, c++;
	a >= c ? this.endCallback && this.endCallback(this.loadedImages) : (this.processCallback && this.processCallback(Math.floor(a / c * this.maxProgressVal + this.minProgressVal)), setTimeout(this.wait, 50))
};

function SoundsPreloader(a, c, d) {
	this.sounds = a;
	this.endCallback = c;
	this.progressCallback = d;
	this.minProgressVal = this.loadedCount = 0;
	this.maxProgressVal = 100
}
SoundsPreloader.prototype.isMp3Support = function() {
	return "" != document.createElement("audio").canPlayType("audio/mpeg")
};
SoundsPreloader.prototype.isWebAudio = function() {
	return Boolean(window.AudioMixer) && AudioMixer.isWebAudioSupport()
};
SoundsPreloader.prototype.load = function(a, c, d) {
	a && (this.sounds = a);
	c && (this.endCallback = c);
	d && (this.progressCallback = d);
	if (!this.sounds || 1 > this.sounds.length || !this.isWebAudio()) this.endCallback && this.endCallback();
	else {
		a = this.isMp3Support() ? "mp3" : "ogg";
		var e;
		this.loadedCount = 0;
		var f = this;
		for (d = 0; d < this.sounds.length; d++) c = this.sounds[d] + "." + a, this.isWebAudio() ? (e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), e.open("GET", c, !0), e.responseType = "arraybuffer", e.onreadystatechange =
			function() {
				if (4 == this.readyState && 200 == this.status) {
					var a = this.soundSrc;
					AudioMixer.waContext || (AudioMixer.waContext = new AudioContext);
					AudioMixer.waContext.decodeAudioData(this.response, function(c) {
						AudioMixer.buffer[a] = c;
						f.soundIsLoaded(null, f)
					}, function(a) {
						f.soundIsLoaded(null, f)
					})
				}
			}, e.soundSrc = c, e.send()) : (e = document.createElement("audio"), e.src = c, e.type = "mp3" == a ? "audio/mpeg" : "audio/ogg", e.preload = "auto", e.load(), e.addEventListener("canplay", Utils.proxy(this.soundIsLoaded, e, this)), e.addEventListener("canplaythrough",
			Utils.proxy(this.soundIsLoaded, e, this)))
	}
};
SoundsPreloader.prototype.soundIsLoaded = function(a, c) {
	if (this.nodeName && "audio" == this.nodeName.toLowerCase()) {
		if (this.alreadyLoaded) return;
		this.alreadyLoaded = !0
	}
	c.loadedCount++;
	c.progressCallback && c.progressCallback(Math.floor(c.loadedCount / c.sounds.length * c.maxProgressVal + c.minProgressVal));
	c.loadedCount >= c.sounds.length && c.endCallback && c.endCallback()
};

function Asset(a, c, d, e, f, g) {
	this.name = a + "";
	this.src = c + "";
	this.width = d;
	this.height = e;
	this.frames = f;
	this.layers = g;
	this.object = this.bitmap = null;
	this.ready = !(!this.width || !this.height);
	this.spriteClass = null
}
Asset.prototype.detectSize = function() {
	if (!this.bitmap) return !1;
	try {
		isNaN(this.width) && (this.width = this.bitmap.width ? parseInt(this.bitmap.width) : 0), isNaN(this.height) && (this.height = this.bitmap.height ? parseInt(this.bitmap.height) : 0)
	} catch (a) {
		CRENDER_DEBUG && console.log(a)
	}
	return !isNaN(this.width) && !isNaN(this.height)
};
Asset.prototype.normalize = function(a) {
	if (!this.ready && this.detectSize()) {
		if (isNaN(this.frames) || 1 > this.frames) this.frames = 1;
		if (isNaN(this.layers) || 1 > this.layers) this.layers = 1;
		this.width = Math.ceil(this.width / this.layers / a);
		this.height = Math.ceil(this.height / this.frames / a);
		this.ready = !0
	}
};

function AssetsLibrary(a, c, d) {
	this.path = "images";
	this.scale = 1;
	this.items = {};
	this.bitmaps = {};
	this.loaded = !1;
	this.onloadprogress = this.onload = null;
	this.spriteClass = Sprite;
	this.onLoadHandler = Utils.proxy(this.onLoadHandler, this);
	this.onLoadProgressHandler = Utils.proxy(this.onLoadProgressHandler, this);
	this.init(a, c);
	this.addAssets(d)
}
AssetsLibrary.prototype.init = function(a, c) {
	"undefined" != typeof a && (this.path = a + "");
	"undefined" != typeof c && (this.scale = parseFloat(c), isNaN(this.scale) && (this.scale = 1))
};
AssetsLibrary.prototype.load = function(a, c, d, e) {
	this.onload = a;
	this.onloadprogress = c;
	a = new ImagesPreloader;
	c = [];
	for (var f in this.items) c.push(this.items[f]);
	"undefined" != typeof d && (a.minProgressVal = d);
	"undefined" != typeof e && (a.maxProgressVal = e);
	a.load(c, this.onLoadHandler, this.onLoadProgressHandler)
};
AssetsLibrary.prototype.onLoadProgressHandler = function(a) {
	if ("function" == typeof this.onloadprogress) this.onloadprogress(a)
};
AssetsLibrary.prototype.onLoadHandler = function(a) {
	this.loaded = !0;
	for (var c in a) {
		var d = this.items[c];
		d.bitmap = a[c];
		d.normalize(this.scale)
	}
	if ("function" == typeof this.onload) this.onload(this.items)
};
AssetsLibrary.prototype.addAssets = function(a) {
	if ("undefined" != typeof a && "object" == typeof a)
		for (var c = 0; c < a.length; c++) {
			var d = a[c];
			d.noscale = "undefined" == typeof d.noscale ? !1 : d.noscale;
			d.noscale || (d.src = "%SCALE%/" + d.src);
			this.addAsset(d)
		}
};
AssetsLibrary.prototype.addAsset = function(a, c, d, e, f, g) {
	var h = null,
		l = null;
	"object" == typeof a && 1 == arguments.length && (c = a.name, d = a.width || NaN, e = a.height || NaN, f = a.frames || 1, g = a.layers || 1, h = a.spriteClass || null, l = a.properties || null, a = a.src);
	a = a.replace("%SCALE%", "%PATH%/" + this.scale);
	a = a.replace("%PATH%", this.path);
	if ("undefined" == typeof c) {
		var k = a.split("/"),
			k = k.pop(),
			k = k.split(".");
		c = k = k.shift() + ""
	}
	k = new Asset(c, a, d, e, f, g);
	k.spriteClass = h;
	if (l)
		for (var m in l) "undefined" == typeof k[m] && (k[m] = l[m]);
	return this.items[c] =
		k
};
AssetsLibrary.prototype.addObject = function(a) {
	var c = this.addAsset("%SCALE%/" + a.image, a.name, a.width * this.scale, a.height * this.scale, a.frames, a.layers);
	c && (c.object = a);
	return c
};
AssetsLibrary.prototype.getAsset = function(a, c) {
	var d = null;
	"undefined" != typeof this.items[a] && this.items[a].bitmap && (d = "undefined" != typeof c && !c || this.items[a].ready ? this.items[a] : null);
	if (!d) throw Error('Trying to get undefined asset "' + a + '"');
	return d
};
AssetsLibrary.prototype.getSprite = function(a, c, d) {
	var e = null,
		e = null;
	try {
		e = this.getAsset(a, !0)
	} catch (f) {
		e = new Asset
	}
	if ((d = d || e.spriteClass || this.spriteClass || window.Sprite) && "function" == typeof d || "function" == typeof window[d]) d = "function" == typeof d ? d : window[d];
	e = d.create && "function" == typeof d.create ? d.create(e, this) : new d(e.bitmap, e.width, e.height, e.frames, e.layers);
	if (c && "object" == typeof c)
		for (var g in c) e[g] = c[g];
	return e
};
AssetsLibrary.prototype.getBitmap = function(a) {
	try {
		return this.getAsset(a, !0).bitmap
	} catch (c) {
		return null
	}
};

function Vector(a, c) {
	"undefined" == typeof a && (a = 0);
	this.x = a;
	"undefined" == typeof c && (c = 0);
	this.y = c
}
Vector.prototype.isZero = function() {
	return 0 == this.x && 0 == this.y
};
Vector.prototype.clone = function() {
	return new Vector(this.x, this.y)
};
Vector.prototype.add = function(a) {
	this.x += a.x;
	this.y += a.y;
	return this
};
Vector.prototype.subtract = function(a) {
	this.x -= a.x;
	this.y -= a.y;
	return this
};
Vector.prototype.mult = function(a) {
	this.x *= a;
	this.y *= a;
	return this
};
Vector.prototype.invert = function() {
	this.mult(-1);
	return this
};
Vector.prototype.rotate = function(a, c) {
	"undefined" == typeof c && (c = new Vector(0, 0));
	var d = this.clone();
	d.subtract(c);
	d.x = this.x * Math.cos(a) + this.y * Math.sin(a);
	d.y = this.x * -Math.sin(a) + this.y * Math.cos(a);
	d.add(c);
	this.x = d.x;
	this.y = d.y;
	return this
};
Vector.prototype.normalize = function(a, c) {
	"undefined" == typeof c && (c = new Vector(0, 0));
	this.subtract(c);
	this.rotate(-a);
	return this
};
Vector.prototype.getLength = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y)
};
Vector.prototype.distanceTo = function(a) {
	p2 = this.clone();
	p2.subtract(a);
	return p2.getLength()
};

function Rectangle(a, c, d, e, f) {
	this.center = new Vector(a, c);
	this.width = d;
	this.height = e;
	this.angle = f;
	this.vertices = [];
	this.AABB = [];
	this.refreshVertices()
}
Rectangle.prototype.clone = function() {
	return new Rectangle(this.center.x, this.center.y, this.width, this.height, this.angle)
};
Rectangle.prototype.refreshVertices = function() {
	var a = this.width / 2,
		c = this.height / 2;
	this.vertices = [];
	this.vertices.push(new Vector(-a, c));
	this.vertices.push(new Vector(a, c));
	this.vertices.push(new Vector(a, -c));
	this.vertices.push(new Vector(-a, -c));
	this.AABB = [this.center.clone(), this.center.clone()];
	for (a = 0; 4 > a; a++) this.vertices[a].rotate(-this.angle, this.center), this.vertices[a].x < this.AABB[0].x && (this.AABB[0].x = this.vertices[a].x), this.vertices[a].x > this.AABB[1].x && (this.AABB[1].x = this.vertices[a].x),
		this.vertices[a].y < this.AABB[0].y && (this.AABB[0].y = this.vertices[a].y), this.vertices[a].y > this.AABB[1].y && (this.AABB[1].y = this.vertices[a].y)
};
Rectangle.prototype.move = function(a, c) {
	this.center.add(new Vector(a, c));
	this.refreshVertices()
};
Rectangle.prototype.rotate = function(a) {
	this.angle += a;
	this.refreshVertices()
};
Rectangle.prototype.hitTestPoint = function(a) {
	a = a.clone();
	a.normalize(-this.angle, this.center);
	return Math.abs(a.x) <= this.width / 2 && Math.abs(a.y) <= this.height / 2
};
Rectangle.prototype.hitTestRectangle = function(a) {
	var c = this.clone();
	a = a.clone();
	var d, e, f;
	c.move(-this.center.x, -this.center.y);
	a.move(-this.center.x, -this.center.y);
	a.center.rotate(this.angle);
	c.rotate(-this.angle);
	a.rotate(-this.angle);
	d = Math.max(c.AABB[0].x, c.AABB[1].x, a.AABB[0].x, a.AABB[1].x) - Math.min(c.AABB[0].x, c.AABB[1].x, a.AABB[0].x, a.AABB[1].x);
	e = c.AABB[1].x - c.AABB[0].x;
	f = a.AABB[1].x - a.AABB[0].x;
	if (d > e + f) return !1;
	d = Math.max(c.AABB[0].y, c.AABB[1].y, a.AABB[0].y, a.AABB[1].y) - Math.min(c.AABB[0].y,
		c.AABB[1].y, a.AABB[0].y, a.AABB[1].y);
	e = c.AABB[1].y - c.AABB[0].y;
	f = a.AABB[1].y - a.AABB[0].y;
	if (d > e + f) return !1;
	c.move(-a.center.x, -a.center.y);
	a.move(-a.center.x, -a.center.y);
	c.center.rotate(a.angle);
	c.refreshVertices();
	c.rotate(-a.angle);
	a.rotate(-a.angle);
	d = Math.max(c.AABB[0].x, c.AABB[1].x, a.AABB[0].x, a.AABB[1].x) - Math.min(c.AABB[0].x, c.AABB[1].x, a.AABB[0].x, a.AABB[1].x);
	e = c.AABB[1].x - c.AABB[0].x;
	f = a.AABB[1].x - a.AABB[0].x;
	if (d > e + f) return !1;
	d = Math.max(c.AABB[0].y, c.AABB[1].y, a.AABB[0].y, a.AABB[1].y) -
		Math.min(c.AABB[0].y, c.AABB[1].y, a.AABB[0].y, a.AABB[1].y);
	e = c.AABB[1].y - c.AABB[0].y;
	f = a.AABB[1].y - a.AABB[0].y;
	return d > e + f ? !1 : !0
};
var EventsManager = {
	addEvent: function(a, c, d) {
		if (a.eventsListeners) {
			for (var e = 0; e < a.eventsListeners.length; e++)
				if (a.eventsListeners[e].type === c && a.eventsListeners[e].callback === d) return;
			a.eventsListeners.push({
				type: c,
				callback: d
			})
		}
	},
	removeEvent: function(a, c, d) {
		if (a.eventsListeners)
			for (var e = 0; e < a.eventsListeners.length; e++)
				if (a.eventsListeners[e].type === c && a.eventsListeners[e].callback === d) {
					a.eventsListeners = Utils.removeFromArray(a.eventsListeners, a.eventsListeners[e]);
					break
				}
	},
	dispatchEvent: function(a,
		c, d) {
		if (a.eventsListeners) {
			var e;
			if ("function" == typeof a["on" + c] && (e = a["on" + c](d), !1 === e)) return !1;
			for (var f = 0; f < a.eventsListeners.length; f++)
				if (a.eventsListeners[f].type === c && (e = a.eventsListeners[f].callback(d), !1 === e)) return !1
		}
	},
	hasEventListener: function(a, c) {
		if (a.eventsListeners) {
			for (var d = 0; d < a.eventsListeners.length; d++)
				if (a.eventsListeners[d].type === c) return !0;
			return !1
		}
	},
	removeAllEventListeners: function(a, c) {
		if (a.eventsListeners) {
			"undefined" == typeof c && (a.eventsListeners = []);
			for (var d = [], e =
					0; e < a.eventsListeners.length; e++) a.eventsListeners[e].type !== c && d.push(a.eventsListeners[e]);
			a.eventsListeners = d
		}
	}
};

function EventsProxy() {
	this.eventsListeners = []
}
EventsProxy.prototype.addEventListener = function(a, c) {
	EventsManager.addEvent(this, a, c)
};
EventsProxy.prototype.removeEventListener = function(a, c) {
	EventsManager.removeEvent(this, a, c)
};
EventsProxy.prototype.dispatchEvent = function(a, c) {
	return EventsManager.dispatchEvent(this, a, c)
};
EventsProxy.prototype.hasEventListener = function(a) {
	return EventsManager.hasEventListener(this, a)
};
EventsProxy.prototype.removeAllEventListeners = function(a) {
	EventsManager.removeAllEventListeners(this, a)
};
var Easing = {
	back: {
		easeIn: function(a, c, d, e) {
			return d * (a /= e) * a * (2.70158 * a - 1.70158) + c
		},
		easeOut: function(a, c, d, e) {
			return d * ((a = a / e - 1) * a * (2.70158 * a + 1.70158) + 1) + c
		},
		easeInOut: function(a, c, d, e) {
			var f = 1.70158;
			return 1 > (a /= e / 2) ? d / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c : d / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c
		}
	},
	bounce: {
		easeIn: function(a, c, d, e) {
			return d - Easing.bounce.easeOut(e - a, 0, d, e) + c
		},
		easeOut: function(a, c, d, e) {
			return (a /= e) < 1 / 2.75 ? 7.5625 * d * a * a + c : a < 2 / 2.75 ? d * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + c : a < 2.5 / 2.75 ? d * (7.5625 * (a -= 2.25 /
				2.75) * a + .9375) + c : d * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + c
		},
		easeInOut: function(a, c, d, e) {
			return a < e / 2 ? .5 * Easing.bounce.easeIn(2 * a, 0, d, e) + c : .5 * Easing.bounce.easeOut(2 * a - e, 0, d, e) + .5 * d + c
		}
	},
	circular: {
		easeIn: function(a, c, d, e) {
			return -d * (Math.sqrt(1 - (a /= e) * a) - 1) + c
		},
		easeOut: function(a, c, d, e) {
			return d * Math.sqrt(1 - (a = a / e - 1) * a) + c
		},
		easeInOut: function(a, c, d, e) {
			return 1 > (a /= e / 2) ? -d / 2 * (Math.sqrt(1 - a * a) - 1) + c : d / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
		}
	},
	cubic: {
		easeIn: function(a, c, d, e) {
			return d * (a /= e) * a * a + c
		},
		easeOut: function(a, c,
			d, e) {
			return d * ((a = a / e - 1) * a * a + 1) + c
		},
		easeInOut: function(a, c, d, e) {
			return 1 > (a /= e / 2) ? d / 2 * a * a * a + c : d / 2 * ((a -= 2) * a * a + 2) + c
		}
	},
	exponential: {
		easeIn: function(a, c, d, e) {
			return 0 == a ? c : d * Math.pow(2, 10 * (a / e - 1)) + c
		},
		easeOut: function(a, c, d, e) {
			return a == e ? c + d : d * (-Math.pow(2, -10 * a / e) + 1) + c
		},
		easeInOut: function(a, c, d, e) {
			return 0 == a ? c : a == e ? c + d : 1 > (a /= e / 2) ? d / 2 * Math.pow(2, 10 * (a - 1)) + c : d / 2 * (-Math.pow(2, -10 * --a) + 2) + c
		}
	},
	linear: {
		easeIn: function(a, c, d, e) {
			return d * a / e + c
		},
		easeOut: function(a, c, d, e) {
			return d * a / e + c
		},
		easeInOut: function(a,
			c, d, e) {
			return d * a / e + c
		}
	},
	quadratic: {
		easeIn: function(a, c, d, e) {
			return d * (a /= e) * a + c
		},
		easeOut: function(a, c, d, e) {
			return -d * (a /= e) * (a - 2) + c
		},
		easeInOut: function(a, c, d, e) {
			return 1 > (a /= e / 2) ? d / 2 * a * a + c : -d / 2 * (--a * (a - 2) - 1) + c
		}
	},
	quartic: {
		easeIn: function(a, c, d, e) {
			return d * (a /= e) * a * a * a + c
		},
		easeOut: function(a, c, d, e) {
			return -d * ((a = a / e - 1) * a * a * a - 1) + c
		},
		easeInOut: function(a, c, d, e) {
			return 1 > (a /= e / 2) ? d / 2 * a * a * a * a + c : -d / 2 * ((a -= 2) * a * a * a - 2) + c
		}
	},
	quintic: {
		easeIn: function(a, c, d, e) {
			return d * (a /= e) * a * a * a * a + c
		},
		easeOut: function(a, c, d, e) {
			return d *
				((a = a / e - 1) * a * a * a * a + 1) + c
		},
		easeInOut: function(a, c, d, e) {
			return 1 > (a /= e / 2) ? d / 2 * a * a * a * a * a + c : d / 2 * ((a -= 2) * a * a * a * a + 2) + c
		}
	},
	sine: {
		easeIn: function(a, c, d, e) {
			return -d * Math.cos(a / e * (Math.PI / 2)) + d + c
		},
		easeOut: function(a, c, d, e) {
			return d * Math.sin(a / e * (Math.PI / 2)) + c
		},
		easeInOut: function(a, c, d, e) {
			return -d / 2 * (Math.cos(Math.PI * a / e) - 1) + c
		}
	},
	smoothstep: {
		easeIn: function(a, c, d, e) {
			a = a / e / 2;
			return 2 * a * a * (3 - 2 * a) * d + c
		},
		easeOut: function(a, c, d, e) {
			a = (a / e + 1) / 2;
			return (2 * a * a * (3 - 2 * a) - 1) * d + c
		},
		easeInOut: function(a, c, d, e) {
			a /= e;
			return a * a * (3 -
				2 * a) * d + c
		}
	}
};

function Tween(a, c, d, e, f, g) {
	Utils.callSuperConstructor(Tween, this);
	"object" != typeof a && (a = null);
	if (a) {
		if ("undefined" == typeof a[c]) throw Error('Trying to tween undefined property "' + c + '"');
		if (isNaN(a[c])) throw Error("Tweened value can not be " + typeof a[c]);
	} else if (isNaN(c)) throw Error("Tweened value can not be " + typeof c);
	"function" != typeof g && (g = Easing.linear.easeIn);
	this.obj = a;
	this.prop = c;
	this.onfinish = this.onchange = null;
	this.start = d;
	this.end = e;
	this.duration = ~~f;
	this.callback = g;
	this.playing = !1;
	this._pos = -1;
	this.newly = !0;
	this.eventsListeners = []
}
Utils.extend(Tween, EventsProxy);
Tween.prototype.play = function() {
	this.playing = !0;
	this.tick(0)
};
Tween.prototype.pause = function() {
	this.playing = !1
};
Tween.prototype.rewind = function() {
	this._pos = -1
};
Tween.prototype.forward = function() {
	this._pos = this.duration
};
Tween.prototype.stop = function() {
	this.pause();
	this.rewind()
};
Tween.prototype.updateValue = function(a) {
	this.obj ? this.obj[this.prop] = a : this.prop = a
};
Tween.prototype.tick = function(a) {
	if (!this.playing) return !1;
	a || (a = 0);
	Tween.STEP_TYPE == Tween.STEP_BY_FRAME ? this._pos++ : this._pos += a;
	if (0 > this._pos) return !1;
	if (this._pos > this.duration) return this.finish();
	a = this.callback;
	a = a(this._pos, this.start, this.end - this.start, this.duration);
	this.updateValue(a);
	this.dispatchEvent("change", {
		target: this,
		value: a
	});
	return !1
};
Tween.prototype.finish = function() {
	this.stop();
	this.updateValue(this.end);
	return !1 === this.dispatchEvent("finish", {
		target: this,
		value: this.end
	}) ? !1 : !0
};
Tween.STEP_BY_FRAME = 0;
Tween.STEP_BY_TIME = 1;
Tween.STEP_TYPE = Tween.STEP_BY_FRAME;

function DisplayObjectContainer() {
	Utils.callSuperConstructor(DisplayObjectContainer, this);
	this.objects = [];
	this.anchor = {
		x: 0,
		y: 0
	}
}
Utils.extend(DisplayObjectContainer, EventsProxy);
DisplayObjectContainer.prototype.objectsCounter = 0;
DisplayObjectContainer.prototype.scaleX = 1;
DisplayObjectContainer.prototype.scaleY = 1;
DisplayObjectContainer.prototype.opacity = 1;
DisplayObjectContainer.prototype.x = 0;
DisplayObjectContainer.prototype.y = 0;
DisplayObjectContainer.prototype.width = 0;
DisplayObjectContainer.prototype.height = 0;
DisplayObjectContainer.prototype.skewX = 0;
DisplayObjectContainer.prototype.skewY = 0;
DisplayObjectContainer.prototype.rotation = 0;
DisplayObjectContainer.prototype.parent = null;
DisplayObjectContainer.prototype.hitArea = null;
DisplayObjectContainer.prototype.fillColor = null;
DisplayObjectContainer.prototype.fillLinearGradient = null;
DisplayObjectContainer.prototype.fillRadialGradient = null;
DisplayObjectContainer.prototype.fillPattern = null;
DisplayObjectContainer.prototype.getAbsoluteRotation = function() {
	return this.rotation + (this.parent ? this.parent.getAbsoluteRotation() : 0)
};
DisplayObjectContainer.prototype.getAbsoluteOpacity = function() {
	return this.opacity * (this.parent ? this.parent.getAbsoluteOpacity() : 1)
};
DisplayObjectContainer.prototype.getAbsoluteScaleX = function() {
	return this.scaleX * (this.parent ? this.parent.getAbsoluteScaleX() : 1)
};
DisplayObjectContainer.prototype.getAbsoluteScaleY = function() {
	return this.scaleY * (this.parent ? this.parent.getAbsoluteScaleY() : 1)
};
DisplayObjectContainer.prototype.getAbsoluteSkewX = function() {
	return this.skewX + (this.parent ? this.parent.getAbsoluteSkewX() : 0)
};
DisplayObjectContainer.prototype.getAbsoluteSkewY = function() {
	return this.skewY + (this.parent ? this.parent.getAbsoluteSkewY() : 0)
};
DisplayObjectContainer.prototype.render = function(a, c, d) {
	for (var e = 0; e < this.objects.length; e++) obj = this.objects[e], obj.destroy ? (this.removeChild(obj), e--) : obj.visible && obj.render(a, c, d)
};
DisplayObjectContainer.prototype.getX = function() {
	return Math.round(this.x * Utils.globalScale)
};
DisplayObjectContainer.prototype.getY = function() {
	return Math.round(this.y * Utils.globalScale)
};
DisplayObjectContainer.prototype.getWidth = function() {
	return this.width * Math.abs(this.getAbsoluteScaleX()) * Utils.globalScale
};
DisplayObjectContainer.prototype.getHeight = function() {
	return this.height * Math.abs(this.getAbsoluteScaleY()) * Utils.globalScale
};
DisplayObjectContainer.prototype.getPosition = function() {
	return {
		x: this.x,
		y: this.y
	}
};
DisplayObjectContainer.prototype.setPosition = function(a, c) {
	if ("undefined" == typeof c && "undefined" != typeof a.x && "undefined" != typeof a.y) return this.setPosition(a.x, a.y);
	this.x = parseFloat(a);
	this.y = parseFloat(c)
};
DisplayObjectContainer.prototype.setPropScale = function(a) {
	this.scaleX = this.scaleY = 1 * a
};
DisplayObjectContainer.prototype.getAnchor = function() {
	return this.anchor
};
DisplayObjectContainer.prototype.setAnchor = function(a, c) {
	if ("undefined" == typeof c && "undefined" != typeof a.x && "undefined" != typeof a.y) return this.setAnchor(a.x, a.y);
	this.anchor.x = parseFloat(a);
	this.anchor.y = parseFloat(c)
};
DisplayObjectContainer.prototype.alignAnchor = function(a, c) {
	a = parseInt(a);
	isNaN(a) && (a = DisplayObjectContainer.ANCHOR_ALIGN_CENTER);
	0 > a && (a = DisplayObjectContainer.ANCHOR_ALIGN_LEFT);
	0 < a && (a = DisplayObjectContainer.ANCHOR_ALIGN_RIGHT);
	c = parseInt(c);
	isNaN(c) && (c = DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE);
	0 > c && (c = DisplayObjectContainer.ANCHOR_VALIGN_TOP);
	0 < c && (c = DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM);
	this.anchor.x = this.width * a / 2;
	this.anchor.y = this.height * c / 2;
	return this.getAnchor()
};
DisplayObjectContainer.prototype.getAbsoluteAnchor = function() {
	return this.getPosition()
};
DisplayObjectContainer.prototype.getRelativeCenter = function() {
	var a = this.getAnchor(),
		c = this.getAbsoluteRotation(),
		a = {
			x: a.x,
			y: a.y
		};
	0 != c ? (a = new Vector(-a.x * this.getAbsoluteScaleX(), -a.y * this.getAbsoluteScaleY()), a.rotate(-c)) : (a.x = -(a.x * this.getAbsoluteScaleX()), a.y = -(a.y * this.getAbsoluteScaleY()));
	return a
};
DisplayObjectContainer.prototype.getAbsolutePosition = function() {
	var a = {
		x: this.x,
		y: this.y
	};
	if (this.parent) {
		var c = this.parent.getAbsolutePosition(),
			d = this.parent.getAbsoluteRotation();
		if (0 != d) {
			var e = new Vector(a.x * this.parent.getAbsoluteScaleX(), a.y * this.parent.getAbsoluteScaleY());
			e.rotate(-d);
			a.x = c.x + e.x;
			a.y = c.y + e.y
		} else a.x = c.x + a.x * this.parent.getAbsoluteScaleX(), a.y = c.y + a.y * this.parent.getAbsoluteScaleY()
	}
	return a
};
DisplayObjectContainer.prototype.getAbsoluteCenter = function() {
	var a = this.getAbsolutePosition(),
		c = this.getRelativeCenter();
	a.x += c.x;
	a.y += c.y;
	return a
};
DisplayObjectContainer.prototype.getCenter = function() {
	return this.getAbsoluteCenter()
};
DisplayObjectContainer.prototype.getIgnoreViewport = function() {
	return this.ignoreViewport || this.parent && this.parent.getIgnoreViewport()
};
DisplayObjectContainer.prototype.getHitAreaRectangle = function() {
	if (!this.hitArea) return this.getDrawRectangle();
	var a = this.getAbsoluteRotation(),
		c = this.getAbsoluteScaleX(),
		d = this.getAbsoluteScaleY(),
		e = this.getCenter(),
		f = new Rectangle(0, 0, this.hitArea.width * Math.abs(c), this.hitArea.height * Math.abs(d), a);
	0 != a ? (c = new Vector(this.hitArea.x * c, this.hitArea.y * d), c.rotate(-a), f.move(e.x + c.x, e.y + c.y)) : f.move(e.x + this.hitArea.x * c, e.y + this.hitArea.x * d);
	return f
};
DisplayObjectContainer.prototype.getDrawRectangle = function() {
	var a = this.getCenter(),
		c = new Rectangle(0, 0, this.width * Math.abs(this.getAbsoluteScaleX()), this.height * Math.abs(this.getAbsoluteScaleY()), this.getAbsoluteRotation());
	c.move(a.x, a.y);
	return c
};
DisplayObjectContainer.prototype.getAABBRectangle = function() {
	var a = this.getDrawRectangle(),
		c = a.AABB[1].x - a.AABB[0].x,
		d = a.AABB[1].y - a.AABB[0].y;
	return new Rectangle(a.AABB[0].x + c / 2, a.AABB[0].y + d / 2, c, d, 0)
};
DisplayObjectContainer.prototype.getFullAABBRectangle = function() {
	for (var a = [this.getAABBRectangle()], c = 0; c < this.objects.length; c++) a.push(this.objects[c].getFullAABBRectangle());
	for (var d = [{
			x: Number.MAX_VALUE,
			y: Number.MAX_VALUE
		}, {
			x: Number.MIN_VALUE,
			y: Number.MIN_VALUE
		}], c = 0; c < a.length; c++) r = a[c], d[0].x = Math.min(d[0].x, r.AABB[0].x), d[0].y = Math.min(d[0].y, r.AABB[0].y), d[1].x = Math.max(d[1].x, r.AABB[1].x), d[1].y = Math.max(d[1].y, r.AABB[1].y);
	a = d[1].x - d[0].x;
	c = d[1].y - d[0].y;
	return new Rectangle(d[0].x + a /
		2, d[0].y + c / 2, a, c, 0)
};
DisplayObjectContainer.prototype.cacheAsBitmap = function() {
	var a = this.x,
		c = this.y,
		d = this.rotation,
		e = this.parent;
	this.rotation = 0;
	this.parent = null;
	var f = this.getAABBRectangle(),
		g = this.getFullAABBRectangle();
	this.getCenter();
	this.x = f.AABB[0].x - g.AABB[0].x + (this.width / 2 + this.anchor.x) * this.scaleX;
	this.y = f.AABB[0].y - g.AABB[0].y + (this.height / 2 + this.anchor.y) * this.scaleY;
	f = document.createElement("canvas");
	f.width = g.width * Utils.globalScale;
	f.height = g.height * Utils.globalScale;
	f.ctx = f.getContext("2d");
	this.render(f, !0, 0);
	this.render(f, !1, 0);
	this.parent = e;
	this.x = a;
	this.y = c;
	this.rotation = d;
	return f
};
DisplayObjectContainer.prototype.localToGlobal = function(a, c) {
	var d = "object" == typeof a && "undefined" != typeof a.x && "undefined" != typeof a.y ? new Vector(a.x + 0, a.y + 0) : new Vector(a, c);
	d.rotate(this.getAbsoluteRotation()).add(this.getAbsolutePosition());
	return d
};
DisplayObjectContainer.prototype.globalToLocal = function(a, c) {
	var d = "object" == typeof a && "undefined" != typeof a.x && "undefined" != typeof a.y ? new Vector(a.x + 0, a.y + 0) : new Vector(a, c);
	d.subtract(this.getAbsolutePosition()).rotate(this.getAbsoluteRotation());
	return d
};
DisplayObjectContainer.prototype.findMaxZIndex = function() {
	for (var a = -1, c = !1, d = 0; d < this.objects.length; d++) this.objects[d].zIndex > a && (a = this.objects[d].zIndex, c = d);
	return {
		index: c,
		zIndex: a
	}
};
DisplayObjectContainer.prototype.findMinZIndex = function() {
	for (var a = -1, c = !1, d = 0; d < this.objects.length; d++) 0 == d && (a = this.objects[d].zIndex, c = 0), this.objects[d].zIndex < a && (a = this.objects[d].zIndex, c = d);
	return {
		index: c,
		zIndex: a
	}
};
DisplayObjectContainer.prototype.addChild = function(a) {
	var c = this.findMaxZIndex(),
		d = a.zIndex;
	a.zIndex = !1 !== c.index ? c.zIndex + 1 : 0;
	this.objectsCounter++;
	a.uid = this.objectsCounter;
	a.parent = this;
	a.setStage(this.stage);
	this.objects.push(a);
	0 != d && this.setChildZIndex(a, ~~d);
	a.dispatchEvent("add", {
		target: a
	});
	return a
};
DisplayObjectContainer.prototype.setStage = function(a) {
	this.stage = a;
	for (var c = 0; c < this.objects.length; c++) this.objects[c].setStage(a)
};
DisplayObjectContainer.prototype.removeChild = function(a) {
	a && 0 <= this.objects.indexOf(a) && (a.stage && a.stage.clearObjectTweens(a), a.clear(), a.dispatchEvent("remove", {
		target: a
	}), a.removeAllEventListeners(), a.parent = null, a.stage = null, this.objects = Utils.removeFromArray(this.objects, a))
};
DisplayObjectContainer.prototype.setChildZIndex = function(a, c) {
	a.zIndex = c;
	this.objects = this.objects.sort(function(a, c) {
		return a.zIndex == c.zIndex ? a.uid > c.uid ? 1 : -1 : a.zIndex > c.zIndex ? 1 : -1
	})
};
DisplayObjectContainer.prototype.getHitArea = function() {
	return this.hitArea ? this.hitArea : {
		x: 0,
		y: 0,
		width: this.width,
		height: this.height
	}
};
DisplayObjectContainer.prototype.hitTest = function(a, c) {
	c || (c = this);
	if (0 == a.getAbsoluteRotation() && 0 == c.getAbsoluteRotation()) {
		var d = a.getCenter(),
			e = c.getCenter(),
			f = a.width * Math.abs(a.getAbsoluteScaleX()),
			g = a.height * Math.abs(a.getAbsoluteScaleY()),
			h = c.width * Math.abs(c.getAbsoluteScaleX()),
			l = c.height * Math.abs(c.getAbsoluteScaleY()),
			k = d.x - f / 2,
			d = d.y - g / 2,
			m = e.x - h / 2,
			n = e.y - l / 2,
			p = Math.max(d, n),
			e = Math.max(k, m),
			f = Math.min(k + f, m + h),
			g = Math.min(d + g, n + l) - p;
		return 0 < f - e && 0 < g
	}
	g = a.getDrawRectangle();
	l = c.getDrawRectangle();
	return g.hitTestRectangle(l)
};
DisplayObjectContainer.prototype.hitTestPointObject = function(a, c, d, e, f) {
	var g, h, l, k, m, n, p;
	"boolean" == typeof a.pixelCheck && (e = a.pixelCheck);
	p = a.getHitArea();
	l = p.width * Math.abs(a.getAbsoluteScaleX());
	k = p.height * Math.abs(a.getAbsoluteScaleY());
	m = a.getAbsoluteCenter();
	g = m.x + p.x - l / 2;
	h = m.y + p.y - k / 2;
	m = c;
	n = d;
	a.ignoreViewport || (m += this.stage.viewport.x, n += this.stage.viewport.y);
	p = !1;
	0 == a.getAbsoluteRotation() ? g <= m && h <= n && g + l >= m && h + k >= n && (p = !0) : (g = a.getHitAreaRectangle(), g.hitTestPoint(new Vector(m, n)) && (p = !0));
	p && e && (this.stage.buffer.width = this.stage.canvas.width, this.stage.buffer.height = this.stage.canvas.height, this.stage.clearScreen(this.stage.buffer), a.render(this.stage.buffer, a.static, 0), c = this.stage.buffer.ctx.getImageData(Math.floor(c * Utils.globalScale), Math.floor(d * Utils.globalScale), 1, 1), 0 == c.data[3] && (p = !1));
	!p && f && a.dragged && (p = !0);
	return p
};
DisplayObjectContainer.prototype.getObjectsStackByCoord = function(a, c, d, e) {
	for (var f, g = [], h = this.objects.length - 1; 0 <= h; h--) this.objects[h].visible && (f = this.objects[h], f.objects && f.objects.length && (g = g.concat(f.getObjectsStackByCoord(a, c, d, e))), this.hitTestPointObject(f, a, c, d, e) && g.push(f));
	return g
};
DisplayObjectContainer.prototype.doDrag = function(a, c) {
	for (var d = 0; d < this.objects.length; d++) this.objects[d].doDrag(a, c);
	if (this.dragged) {
		var d = a,
			e = c;
		this.ignoreViewport || (d += this.stage.viewport.x, e += this.stage.viewport.y);
		d -= this.dragX;
		e -= this.dragY;
		d = this.parent.globalToLocal(d, e);
		this.x = d.x;
		this.y = d.y
	}
};
DisplayObjectContainer.prototype.checkMouseOut = function(a, c) {
	for (var d = this.objects.length - 1; 0 <= d; d--)
		if (!1 === this.objects[d].checkMouseOut(a, c)) return;
	if (this.mouseOn && 0 > a.indexOf(this)) return this.mouseOn = !1, d = this.stage.finalizeMouseCoords(this, c), this.dispatchEvent("mouseout", {
		target: this,
		x: d.x,
		y: d.y
	})
};
DisplayObjectContainer.prototype.getMaxZIndexInStack = function(a) {
	for (var c = -1, d = 0, e = 0; e < a.length; e++) a[e].zIndex > c && (c = a[e].zIndex, d = e);
	return d
};
DisplayObjectContainer.prototype.sortStack = function(a, c) {
	return a.sort(function(a, e) {
		a.zIndex == e.zIndex ? c ? a.uid < e.uid ? 1 : -1 : a.uid > e.uid ? 1 : -1 : c ? a.zIndex < e.zIndex ? 1 : -1 : a.zIndex > e.zIndex ? 1 : -1
	})
};
DisplayObjectContainer.prototype.clear = function() {
	for (; this.objects.length;) this.removeChild(this.objects[0])
};
DisplayObjectContainer.prototype.getFillStyle = function(a) {
	var c = null;
	if (this.fillLinearGradient) {
		a = a.ctx.createLinearGradient(this.fillLinearGradient.x0 * Utils.globalScale, this.fillLinearGradient.y0 * Utils.globalScale, this.fillLinearGradient.x1 * Utils.globalScale, this.fillLinearGradient.y1 * Utils.globalScale);
		for (c = 0; c < this.fillLinearGradient.points.length; c++) a.addColorStop(this.fillLinearGradient.points[c].point, this.fillLinearGradient.points[c].color);
		c = a
	} else if (this.fillRadialGradient) {
		a = a.ctx.createRadialGradient(this.fillRadialGradient.x0 *
			Utils.globalScale, this.fillRadialGradient.y0 * Utils.globalScale, this.fillRadialGradient.r0 * Utils.globalScale, this.fillRadialGradient.x1 * Utils.globalScale, this.fillRadialGradient.y1 * Utils.globalScale, this.fillRadialGradient.r1 * Utils.globalScale);
		for (c = 0; c < this.fillRadialGradient.points.length; c++) a.addColorStop(this.fillRadialGradient.points[c].point, this.fillRadialGradient.points[c].color);
		c = a
	} else c = this.fillPattern ? a.ctx.createPattern(this.fillPattern.img, this.fillPattern.repeat) : this.fillColor;
	return c
};
DisplayObjectContainer.ANCHOR_ALIGN_LEFT = -1;
DisplayObjectContainer.ANCHOR_ALIGN_CENTER = 0;
DisplayObjectContainer.ANCHOR_ALIGN_RIGHT = 1;
DisplayObjectContainer.ANCHOR_VALIGN_TOP = -1;
DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE = 0;
DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM = 1;
var ANCHOR_ALIGN_LEFT = DisplayObjectContainer.ANCHOR_ALIGN_LEFT,
	ANCHOR_ALIGN_CENTER = DisplayObjectContainer.ANCHOR_ALIGN_CENTER,
	ANCHOR_ALIGN_RIGHT = DisplayObjectContainer.ANCHOR_ALIGN_RIGHT,
	ANCHOR_VALIGN_TOP = DisplayObjectContainer.ANCHOR_VALIGN_TOP,
	ANCHOR_VALIGN_MIDDLE = DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE,
	ANCHOR_VALIGN_BOTTOM = DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM;

function DisplayObject() {
	Utils.callSuperConstructor(DisplayObject, this)
}
Utils.extend(DisplayObject, DisplayObjectContainer);
DisplayObject.prototype.uid = 0;
DisplayObject.prototype.stage = null;
DisplayObject.prototype.shadowColor = null;
DisplayObject.prototype.shadowOffsetX = 0;
DisplayObject.prototype.shadowOffsetY = 0;
DisplayObject.prototype.shadowBlur = 0;
DisplayObject.prototype.zIndex = 0;
DisplayObject.prototype.visible = !0;
DisplayObject.prototype.static = !1;
DisplayObject.prototype.ignoreViewport = !1;
DisplayObject.prototype.destroy = !1;
DisplayObject.prototype.dragged = !1;
DisplayObject.prototype.dragX = 0;
DisplayObject.prototype.dragY = 0;
DisplayObject.prototype.mouseOn = !1;
DisplayObject.prototype.allowDebugDrawing = !0;
DisplayObject.prototype.pixelCheck = null;
DisplayObject.prototype.onmouseover = null;
DisplayObject.prototype.onmouseout = null;
DisplayObject.prototype.onmousedown = null;
DisplayObject.prototype.onmouseup = null;
DisplayObject.prototype.onclick = null;
DisplayObject.prototype.oncontextmenu = null;
DisplayObject.prototype.onmousemove = null;
DisplayObject.prototype.onprerender = null;
DisplayObject.prototype.onenterframe = null;
DisplayObject.prototype.onrender = null;
DisplayObject.prototype.onadd = null;
DisplayObject.prototype.onremove = null;
DisplayObject.prototype.onbox2dsync = null;
DisplayObject.prototype.setStatic = function(a, c) {
	a = Boolean(a);
	if (!c)
		for (var d = 0; d < this.objects.length; d++) this.objects[d].setStatic(a);
	return this.static != a ? (this.static = a, this.stage && this.stage.refreshBackground(), !0) : !1
};
DisplayObject.prototype.startDrag = function(a, c) {
	this.dragged = !0;
	this.dragX = a;
	this.dragY = c
};
DisplayObject.prototype.stopDrag = function() {
	this.dragged = !1;
	this.dragY = this.dragX = 0
};
DisplayObject.prototype.removeTweens = function() {
	this.stage && this.stage.clearObjectTweens(this)
};
DisplayObject.prototype.addTween = function(a, c, d, e, f, g) {
	if (this.stage) {
		var h = this[a];
		if (!isNaN(h)) return a = this.stage.createTween(this, a, h, c, d, e), a.onchange = g, a.onfinish = f, a
	}
};
DisplayObject.prototype.moveTo = function(a, c, d, e, f, g) {
	d = ~~d;
	0 >= d ? this.setPosition(a, c) : ((a = this.addTween("x", a, d, e)) && a.play(), (c = this.addTween("y", c, d, e, f, g)) && c.play());
	return this
};
DisplayObject.prototype.moveBy = function(a, c, d, e, f, g) {
	return this.moveTo(this.x + a, this.y + c, d, e, f, g)
};
DisplayObject.prototype.fadeTo = function(a, c, d, e, f) {
	c = ~~c;
	0 >= c ? this.opacity = a : (a = this.addTween("opacity", a, c, d, e, f)) && a.play();
	return this
};
DisplayObject.prototype.fadeBy = function(a, c, d, e, f) {
	a = Math.max(0, Math.min(1, this.opacity + a));
	return this.fadeTo(a, c, d, e, f)
};
DisplayObject.prototype.rotateTo = function(a, c, d, e, f) {
	c = ~~c;
	0 >= c ? this.rotation = a : (a = this.addTween("rotation", a, c, d, e, f)) && a.play();
	return this
};
DisplayObject.prototype.rotateBy = function(a, c, d, e, f) {
	return this.rotateTo(this.rotation + a, c, d, e, f)
};
DisplayObject.prototype.skewXTo = function(a, c, d, e, f) {
	c = ~~c;
	0 >= c ? this.skewX = a : (a = this.addTween("skewX", a, c, d, e, f)) && a.play();
	return this
};
DisplayObject.prototype.skewXBy = function(a, c, d, e, f) {
	return this.skewXTo(this.skewX + a, c, d, e, f)
};
DisplayObject.prototype.skewYTo = function(a, c, d, e, f) {
	c = ~~c;
	0 >= c ? this.skewY = a : (a = this.addTween("skewY", a, c, d, e, f)) && a.play();
	return this
};
DisplayObject.prototype.skewYBy = function(a, c, d, e, f) {
	return this.skewYTo(this.skewY + a, c, d, e, f)
};
DisplayObject.prototype.scaleTo = function(a, c, d, e, f) {
	c = ~~c;
	if (0 >= c) this.scaleX = this.scaleY = a;
	else {
		var g = this.addTween("scaleX", a, c, d, e, f);
		g && g.play();
		(a = this.addTween("scaleY", a, c, d, g ? null : e, g ? null : f)) && a.play()
	}
	return this
};
DisplayObject.prototype.setZIndex = function(a) {
	this.zIndex = ~~a;
	this.parent && this.parent.setChildZIndex(this, this.zIndex)
};
DisplayObject.prototype.hitTestPoint = function(a, c, d, e, f) {
	return this.stage ? this.stage.hitTestPointObject(this, a, c, d, e, f) : !1
};
DisplayObject.prototype.setRelativePosition = function(a, c, d, e) {
	switch (d) {
		case "right":
			a = this.stage.screenWidth - a;
			break;
		case "left":
			break;
		default:
			a = this.stage.screenWidth / 2 + a
	}
	switch (e) {
		case "bottom":
			c = this.stage.screenHeight - c;
			break;
		case "top":
			break;
		default:
			c = this.stage.screenHeight / 2 + c
	}
	this.setPosition(a, c)
};
DisplayObject.prototype.debugDraw = function() {
	if (this.visible && this.allowDebugDrawing) {
		var a = this.getAbsolutePosition(),
			c = this.getCenter(),
			d = this.getDrawRectangle(),
			e = this.getAABBRectangle();
		stage.drawCircle(a.x, a.y, 1, 1, "rgba(255,0,0,0.9)");
		stage.drawCircle(c.x, c.y, 1, 1, "rgba(0,255,0,0.9)");
		stage.drawLine(a.x, a.y, c.x, c.y, 1, "rgba(255,255,255,0.5)");
		stage.drawPolygon(d.vertices, .5, "rgba(255,0,255,0.5)", 1);
		stage.drawLine(e.vertices[0].x, e.vertices[0].y, e.vertices[2].x, e.vertices[2].y, 1, "rgba(255,255,255,0.5)");
		stage.drawLine(e.vertices[2].x, e.vertices[0].y, e.vertices[0].x, e.vertices[2].y, 1, "rgba(255,255,255,0.5)");
		stage.drawPolygon(e.vertices, .5, "rgba(255,255,255,0.5)")
	}
};
DisplayObject.prototype.fixChildrenParent = function(a) {
	for (a = 0; a < this.objects.length; a++) this.objects[a].parent = this, this.objects[a].fixChildrenParent()
};
DisplayObject.prototype.clone = function() {
	var a = Utils.clone(this);
	a.fixChildrenParent();
	return a
};

function Graphics() {
	Utils.callSuperConstructor(Graphics, this)
}
Utils.extend(Graphics, DisplayObject);
Graphics.prototype.x = 0;
Graphics.prototype.y = 0;
Graphics.prototype.color = "#000";
Graphics.prototype.lineWidth = 1;
Graphics.prototype.render = function(a, c, d) {
	!!this.static == !!c && this.dispatchEvent("render", {
		target: this,
		canvas: a,
		delta: d
	});
	Utils.callSuperMethod(Graphics, this, "render", a, c, d)
};
Graphics.prototype.prepareCanvas = function(a, c) {
	c.ctx.save();
	this.getIgnoreViewport() || (a.x -= this.stage.viewport.x, a.y -= this.stage.viewport.y);
	a.x *= Utils.globalScale;
	a.y *= Utils.globalScale;
	c.ctx.translate(a.x, a.y);
	var d = this.getAbsoluteRotation();
	c.ctx.rotate(d);
	c.ctx.scale(this.getAbsoluteScaleX(), this.getAbsoluteScaleY());
	var e = this.getAbsoluteSkewX(),
		f = this.getAbsoluteSkewY();
	0 == e && 0 == f || c.ctx.transform(1, e, f, 1, 0, 0);
	this.shadowColor && (c.ctx.shadowColor = this.shadowColor, 0 != d ? (e = new Vector(this.shadowOffsetX *
		Utils.globalScale, this.shadowOffsetY * Utils.globalScale), e.rotate(-d), c.ctx.shadowOffsetX = e.x, c.ctx.shadowOffsetY = e.y) : (c.ctx.shadowOffsetX = this.shadowOffsetX * Utils.globalScale, c.ctx.shadowOffsetY = this.shadowOffsetY * Utils.globalScale), c.ctx.shadowBlur = this.shadowBlur * Utils.globalScale)
};
Graphics.prototype.preparePath = function(a) {
	a.ctx.beginPath();
	a.ctx.strokeStyle = 0 < this.lineWidth ? this.color : "transparent";
	a.ctx.lineWidth = this.lineWidth * Utils.globalScale;
	a.ctx.globalAlpha = this.getAbsoluteOpacity();
	a.ctx.fillStyle = this.getFillStyle(a)
};
Graphics.prototype.finalizeCanvas = function(a) {
	(this.fillColor || this.fillLinearGradient || this.fillRadialGradient || this.fillPattern) && a.ctx.fill();
	a.ctx.stroke()
};
Graphics.prototype.restoreCanvas = function(a) {
	a.ctx.restore()
};
Graphics.prototype.resetView = function() {
	this.color = "transparent";
	this.fillPattern = this.fillRadialGradient = this.fillLinearGradient = this.fillColor = null
};
Graphics.circle = function(a, c, d) {
	Utils.callSuperConstructor(Graphics.circle, this);
	this.x = a;
	this.y = c;
	this.radius = d;
	this.width = 2 * d;
	this.height = 2 * d
};
Utils.extend(Graphics.circle, Graphics);
Graphics.circle.prototype.render = function(a, c, d) {
	!!this.static == !!c && 0 != this.opacity && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.arc(0, 0, this.radius * Utils.globalScale, 0, 2 * Math.PI), this.finalizeCanvas(a), this.restoreCanvas(a));
	Utils.callSuperMethod(Graphics.circle, this, "render", a, c, d)
};
Graphics.line = function(a, c, d, e) {
	Utils.callSuperConstructor(Graphics.line, this);
	this.x1 = a;
	this.x2 = d;
	this.y1 = c;
	this.y2 = e
};
Utils.extend(Graphics.line, Graphics);
Graphics.line.prototype.render = function(a, c, d) {
	!!this.static == !!c && 0 != this.opacity && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.moveTo(this.x1 * Utils.globalScale, this.y1 * Utils.globalScale), a.ctx.lineTo(this.x2 * Utils.globalScale, this.y2 * Utils.globalScale), this.finalizeCanvas(a), this.restoreCanvas(a));
	Utils.callSuperMethod(Graphics.line, this, "render", a, c, d)
};
Graphics.rectangle = function(a, c, d, e) {
	Utils.callSuperConstructor(Graphics.rectangle, this);
	this.x = a;
	this.y = c;
	this.width = d;
	this.height = e
};
Utils.extend(Graphics.rectangle, Graphics);
Graphics.rectangle.prototype.render = function(a, c, d) {
	!!this.static == !!c && 0 != this.opacity && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.rect(-this.width / 2 * Utils.globalScale, -this.height / 2 * Utils.globalScale, this.width * Utils.globalScale, this.height * Utils.globalScale), this.finalizeCanvas(a), this.restoreCanvas(a));
	Utils.callSuperMethod(Graphics.rectangle, this, "render", a, c, d)
};
Graphics.arc = function(a, c, d, e, f, g) {
	Utils.callSuperConstructor(Graphics.arc, this);
	this.x = a;
	this.y = c;
	this.radius = d;
	this.startAngle = e;
	this.endAngle = f;
	this.antiClockWise = g;
	this.width = 2 * d;
	this.height = 2 * d
};
Utils.extend(Graphics.arc, Graphics);
Graphics.arc.prototype.render = function(a, c, d) {
	!!this.static == !!c && 0 != this.opacity && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.arc(0, 0, this.radius * Utils.globalScale, this.startAngle, this.endAngle, this.antiClockWise), this.finalizeCanvas(a), this.restoreCanvas(a));
	Utils.callSuperMethod(Graphics.arc, this, "render", a, c, d)
};
Graphics.polygon = function(a) {
	if (!a || 2 > a.length) throw Error("Invalid parameters");
	Utils.callSuperConstructor(Graphics.polygon, this);
	this.points = a;
	for (var c = Number.MAX_VALUE, d = Number.MAX_VALUE, e = Number.MIN_VALUE, f = Number.MIN_VALUE, g = 0; g < a.length; g++) a[g].x < c && (c = a[g].x), a[g].y < d && (d = a[g].y), a[g].x > e && (e = a[g].x), a[g].y > f && (f = a[g].y);
	this.width = e - c;
	this.height = f - d
};
Utils.extend(Graphics.polygon, Graphics);
Graphics.polygon.prototype.render = function(a, c, d) {
	if (!!this.static == !!c && 0 != this.opacity) {
		this.prepareCanvas(this.getAbsoluteCenter(), a);
		this.preparePath(a);
		a.ctx.moveTo(this.points[0].x * Utils.globalScale, this.points[0].y * Utils.globalScale);
		for (var e = 1; e < this.points.length; e++) a.ctx.lineTo(this.points[e].x * Utils.globalScale, this.points[e].y * Utils.globalScale);
		a.ctx.lineTo(this.points[0].x * Utils.globalScale, this.points[0].y * Utils.globalScale);
		this.finalizeCanvas(a);
		this.restoreCanvas(a)
	}
	Utils.callSuperMethod(Graphics.polygon,
		this, "render", a, c, d)
};
Graphics.text = function(a, c, d) {
	Utils.callSuperConstructor(Graphics.text, this);
	this.x = a;
	this.y = c;
	this.text = d;
	this.align = Graphics.text.ALIGN_LEFT;
	this.valign = Graphics.text.VALIGN_MIDDLE;
	this.style = "normal";
	this.size = 10;
	this.font = "sans-serif"
};
Utils.extend(Graphics.text, Graphics);
Graphics.text.ALIGN_LEFT = "left";
Graphics.text.ALIGN_CENTER = "center";
Graphics.text.ALIGN_RIGHT = "right";
Graphics.text.VALIGN_TOP = "top";
Graphics.text.VALIGN_MIDDLE = "middle";
Graphics.text.VALIGN_BOTTOM = "bottom";
Graphics.text.prototype.getRect = function(a) {
	return a.ctx.measureText(this.text)
};
Graphics.text.prototype.render = function(a, c, d) {
	!!this.static == !!c && 0 != this.opacity && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.font = this.style + " " + Math.floor(this.size * Utils.globalScale) + "px " + this.font, a.ctx.textAlign = this.align, a.ctx.textBaseline = this.valign, this.fillColor && a.ctx.fillText(this.text, 0, 0), a.ctx.strokeText(this.text, 0, 0), this.finalizeCanvas(a), this.restoreCanvas(a));
	Utils.callSuperMethod(Graphics.text, this, "render", a, c, d)
};
Graphics.free = function() {
	this.commands = [];
	Utils.callSuperConstructor(Graphics.free, this)
};
Utils.extend(Graphics.free, Graphics);
Graphics.free.prototype.clear = function() {
	this.commands = [];
	Utils.callSuperMethod(Graphics.free, this, "clear")
};
Graphics.free.prototype.beginPath = function() {
	this.commands.push({
		command: "beginPath"
	});
	return this
};
Graphics.free.prototype.stroke = function() {
	this.commands.push({
		command: "stroke"
	});
	return this
};
Graphics.free.prototype.setStrokeStyle = function(a) {
	this.commands.push({
		command: "setStrokeStyle",
		style: a
	});
	return this
};
Graphics.free.prototype.setFillStyle = function(a) {
	this.commands.push({
		command: "setFillStyle",
		style: a
	});
	return this
};
Graphics.free.prototype.fill = function() {
	this.commands.push({
		command: "fill"
	});
	return this
};
Graphics.free.prototype.moveTo = function(a, c) {
	this.commands.push({
		command: "moveTo",
		x: a,
		y: c
	});
	return this
};
Graphics.free.prototype.lineTo = function(a, c) {
	this.commands.push({
		command: "lineTo",
		x: a,
		y: c
	});
	return this
};
Graphics.free.prototype.arc = function(a, c, d, e, f, g) {
	this.commands.push({
		command: "arc",
		x: a,
		y: c,
		radius: d,
		startAngle: e,
		endAngle: f,
		antiClockWise: g
	});
	return this
};
Graphics.free.prototype.circle = function(a, c, d) {
	this.commands.push({
		command: "circle",
		x: a,
		y: c,
		radius: d
	});
	return this
};
Graphics.free.prototype.rect = function(a, c, d, e) {
	this.commands.push({
		command: "circle",
		x: a,
		y: c,
		width: d,
		height: e
	});
	return this
};
Graphics.free.prototype.polygon = function(a) {
	this.commands.push({
		command: "polygon",
		points: a
	});
	return this
};
Graphics.free.prototype.executeCommand = function(a, c) {
	switch (c.command) {
		case "beginPath":
			a.ctx.beginPath();
			break;
		case "stroke":
			a.ctx.stroke();
			break;
		case "fill":
			a.ctx.fill();
			break;
		case "setStrokeStyle":
			a.ctx.strokeStyle = 0 < this.lineWidth ? c.style : "transparent";
			break;
		case "setFillStyle":
			a.ctx.fillStyle = c.style;
			break;
		case "moveTo":
			a.ctx.moveTo(c.x * Utils.globalScale, c.y * Utils.globalScale);
			break;
		case "lineTo":
			a.ctx.lineTo(c.x * Utils.globalScale, c.y * Utils.globalScale);
			break;
		case "arc":
			a.ctx.arc(c.x * Utils.globalScale,
				c.y * Utils.globalScale, c.radius * Utils.globalScale, c.startAngle, c.endAngle, c.antiClockWise);
			break;
		case "circle":
			a.ctx.arc(c.x * Utils.globalScale, c.y * Utils.globalScale, c.radius * Utils.globalScale, 0, 2 * Math.PI);
			break;
		case "rect":
			a.ctx.rect((c.x - c.width / 2) * Utils.globalScale, (c.y - c.height / 2) * Utils.globalScale, c.width * Utils.globalScale, \u0441.height * Utils.globalScale);
			break;
		case "polygon":
			a.ctx.moveTo(c.points[0].x * Utils.globalScale, c.points[0].y * Utils.globalScale);
			for (var d = 1; d < c.points.length; d++) a.ctx.lineTo(c.points[d].x *
				Utils.globalScale, c.points[d].y * Utils.globalScale);
			a.ctx.lineTo(c.points[0].x * Utils.globalScale, c.points[0].y * Utils.globalScale)
	}
};
Graphics.free.prototype.executeCommands = function(a) {
	for (var c = 0; c < this.commands.length; c++) this.executeCommand(a, this.commands[c])
};
Graphics.free.prototype.render = function(a, c, d) {
	!!this.static == !!c && 0 != this.opacity && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), this.executeCommands(a), this.finalizeCanvas(a), this.restoreCanvas(a));
	Utils.callSuperMethod(Graphics.free, this, "render", a, c, d)
};
var BitmapsCache = {
	bitmaps: {},
	cache: function(a) {
		if (!(a && a instanceof Image)) return a;
		if (BitmapsCache.bitmaps[a.src]) return BitmapsCache.bitmaps[a.src];
		cns = document.createElement("canvas");
		cns.width = a.width;
		cns.height = a.height;
		ctx = cns.getContext("2d");
		ctx.drawImage(a, 0, 0, a.width, a.height, 0, 0, a.width, a.height);
		return BitmapsCache.bitmaps[a.src] = cns
	}
};

function Sprite(a, c, d, e, f) {
	Utils.callSuperConstructor(Sprite, this);
	this.offset = {
		left: 0,
		top: 0
	};
	this.width = c;
	this.height = d;
	this.totalFrames = Math.max(1, ~~e);
	1 >= this.totalFrames && (this.animated = !1);
	this.totalLayers = Math.max(1, ~~f);
	this.bitmap = a;
	this.changeFrameDelay = Sprite.CHANGE_FRAME_DELAY;
	this.cacheBitmap = Sprite.CACHE_BITMAPS
}
Utils.extend(Sprite, DisplayObject);
Sprite.prototype.animated = !0;
Sprite.prototype.animDirection = 1;
Sprite.prototype.currentFrame = 0;
Sprite.prototype.totalFrames = 1;
Sprite.prototype.currentLayer = 0;
Sprite.prototype.totalLayers = 1;
Sprite.prototype.bitmap = null;
Sprite.prototype.mask = null;
Sprite.prototype.isMask = !1;
Sprite.prototype.maskParent = null;
Sprite.prototype.maskInvert = !1;
Sprite.prototype.animStep = 0;
Sprite.prototype.animDelay = 1;
Sprite.prototype.changeFrameDelay = 1E3 / 24;
Sprite.prototype.changeFrameTime = 0;
Sprite.prototype.onchangeframe = null;
Sprite.prototype.cacheBitmap = !1;
Sprite.create = function(a, c) {
	if ("string" == typeof a) {
		c = c || window.library;
		if (!c) throw Error("Could not create sprite from asset '%s'. Library not found.", a);
		a = c.getAsset(a)
	}
	return new Sprite(a.bitmap, a.width || 1, a.height || 1, a.frames || 1, a.layers || 1)
};
Sprite.prototype.play = function() {
	this.animated = !0
};
Sprite.prototype.stop = function() {
	this.animated = !1
};
Sprite.prototype.gotoAndStop = function(a) {
	this.currentFrame = a;
	this.stop()
};
Sprite.prototype.gotoAndPlay = function(a) {
	this.currentFrame = a;
	this.play()
};
Sprite.prototype.nextFrame = function(a) {
	this.dispatchEvent("enterframe", {
		target: this,
		delta: a
	});
	var c = 1;
	if (Sprite.CHANGE_FRAME_TYPE == Sprite.CHANGE_FRAME_BY_TIME)
		if (this.changeFrameTime += a, this.changeFrameTime >= this.changeFrameDelay * this.animDelay) c = Math.floor(this.changeFrameTime / (this.changeFrameDelay * this.animDelay)), this.changeFrameTime -= Math.abs(c) * this.changeFrameDelay * this.animDelay;
		else return;
	else this.animStep++;
	if (this.animStep >= this.animDelay || Sprite.CHANGE_FRAME_TYPE == Sprite.CHANGE_FRAME_BY_TIME) {
		for (var d =
				0; d < c; d++) this.animated && (this.currentFrame += this.animDirection), 0 < this.animDirection && this.currentFrame >= this.totalFrames && (this.currentFrame = 0), 0 > this.animDirection && 0 > this.currentFrame && (this.currentFrame = this.totalFrames - 1), this.dispatchEvent("changeframe", {
			target: this,
			delta: a
		});
		this.animStep = 0
	}
};
Sprite.prototype.setMask = function(a) {
	this.mask = a;
	this.mask.isMask = !0;
	this.mask.stage = this.stage;
	this.mask.maskParent = this
};
Sprite.prototype.renderBack = function(a, c, d, e, f, g) {
	c && (a.ctx.save(), a.ctx.translate(-(f / 2), -(g / 2)), a.ctx.fillStyle = c, a.ctx.strokeStyle = c, a.ctx.fillRect(0, 0, f, g), a.ctx.restore())
};
Sprite.prototype.renderBitmap = function(a, c, d, e, f) {
	var g = {
		x: 0,
		y: 0,
		width: e,
		height: f
	};
	if (this.bitmap) {
		var h = this.bitmap.width,
			l = this.bitmap.height,
			k = this.currentLayer * e + this.offset.left * Utils.globalScale,
			m = this.currentFrame * f + this.offset.top * Utils.globalScale;
		if (k < h && m < l) {
			var n = e,
				p = f;
			k + n > h && (n = h - k);
			m + p > l && (p = l - m);
			Sprite.FLOOR_VALUES_ON_RENDER && (k = ~~k, m = ~~m, n = ~~n, p = ~~p, c = ~~c, d = ~~d, e = ~~e, f = ~~f);
			0 < n && 0 < p && 0 < e && 0 < f && a.ctx.drawImage(this.cacheBitmap ? BitmapsCache.cache(this.bitmap) : this.bitmap, k, m, n, p, c, d,
				e, f);
			g.x = k;
			g.y = m;
			g.width = n;
			g.height = p
		}
	}
	return g
};
Sprite.prototype.render = function(a, c, d, e) {
	if (!this.isMask || e) {
		if (!!this.static == !!c) {
			d || (d = 0);
			this.nextFrame(d);
			if (!this.visible || !1 === this.dispatchEvent("prerender", {
					target: this,
					canvas: a,
					delta: d
				}) || !this.stage || 0 == this.opacity) return;
			var f = this.getAbsoluteCenter();
			if (e) {
				var f = {
						x: this.x - this.getAnchor().x,
						y: this.y - this.getAnchor().y
					},
					g = this.parent ? this.parent : this.maskParent;
				g && (f.x += g.getAnchor().x + g.width / 2, f.y += g.getAnchor().y + g.height / 2)
			}
			e = this.width * Utils.globalScale;
			var h = this.height * Utils.globalScale,
				l = f.x * Utils.globalScale - e / 2,
				f = f.y * Utils.globalScale - h / 2,
				k = this.getAbsoluteRotation(),
				g = this.getAbsoluteScaleX(),
				m = this.getAbsoluteScaleY(),
				n = this.getAbsoluteSkewX(),
				p = this.getAbsoluteSkewY(),
				q = this.getFillStyle(a),
				u = Boolean(0 != k || 1 != g || 1 != m || this.shadowColor || q || 0 != n || 0 != p);
			this.getIgnoreViewport() || (l -= this.stage.viewport.x * Utils.globalScale, f -= this.stage.viewport.y * Utils.globalScale);
			u && (a.ctx.save(), a.ctx.translate(l + e / 2, f + h / 2), a.ctx.rotate(k), a.ctx.scale(g, m), 0 == n && 0 == p || a.ctx.transform(1, n, p,
				1, 0, 0), l = -(e / 2), f = -(h / 2), this.shadowColor && (0 != k ? (g = new Vector(this.shadowOffsetX * Utils.globalScale, this.shadowOffsetY * Utils.globalScale), g.rotate(-k), a.ctx.shadowOffsetX = g.x, a.ctx.shadowOffsetY = g.y) : (a.ctx.shadowOffsetX = this.shadowOffsetX * Utils.globalScale, a.ctx.shadowOffsetY = this.shadowOffsetY * Utils.globalScale), a.ctx.shadowColor = this.shadowColor, a.ctx.shadowBlur = this.shadowBlur * Utils.globalScale));
			a.ctx.globalAlpha = this.getAbsoluteOpacity();
			this.ceilSizes && (e = Math.ceil(e), h = Math.ceil(h));
			this.mask ?
				(this.stage.buffer.ctx.save(), this.stage.buffer.ctx.clearRect(0, 0, e, h), this.renderBack(this.stage.buffer, q, 0, 0, e, h), k = this.renderBitmap(this.stage.buffer, 0, 0, e, h), this.stage.buffer.ctx.globalCompositeOperation = this.maskInvert ? "destination-out" : "destination-in", this.mask.render ? this.mask.render(this.stage.buffer, c, d, !0) : this.stage.buffer.ctx.drawImage(this.mask, this.mask.x ? this.mask.x : 0, this.mask.y ? this.mask.y : 0), Sprite.FLOOR_VALUES_ON_RENDER ? a.ctx.drawImage(this.stage.buffer, 0, 0, k.width, k.height, ~~l, ~~f, ~~e, ~~h) : a.ctx.drawImage(this.stage.buffer, 0, 0, k.width, k.height, l, f, e, h), this.stage.buffer.ctx.restore()) : (this.renderBack(a, q, l, f, e, h), this.renderBitmap(a, l, f, e, h));
			u && a.ctx.restore();
			this.stage.allowDebugDrawing && this.allowDebugDrawing && (!this.stage.allowStaticDebugDrawing && this.static || this.debugDraw());
			this.dispatchEvent("render", {
				target: this,
				canvas: a,
				delta: d
			})
		}
		Utils.callSuperMethod(Sprite, this, "render", a, c, d)
	}
};
Sprite.prototype.resetView = function() {
	this.fillPattern = this.fillRadialGradient = this.fillLinearGradient = this.fillColor = this.bitmap = null;
	for (var a = 0; a < this.objects.length; a++) this.objects[a].resetView && this.objects[a].resetView()
};
Sprite.CHANGE_FRAME_BY_FRAME = 0;
Sprite.CHANGE_FRAME_BY_TIME = 1;
Sprite.CHANGE_FRAME_DELAY = 1E3 / 24;
Sprite.CHANGE_FRAME_TYPE = Sprite.CHANGE_FRAME_BY_FRAME;
Sprite.FLOOR_VALUES_ON_RENDER = !0;
Sprite.CACHE_BITMAPS = Utils.isIOS();

function StageTimer(a, c, d) {
	Utils.callSuperConstructor(StageTimer, this);
	this.repeat = d;
	this.timeout = this.initialTimeout = c;
	this.onend = a;
	this.ontick = null;
	this.destroy = !1;
	this.newly = !0;
	this.paused = !1
}
Utils.extend(StageTimer, EventsProxy);
StageTimer.prototype.update = function(a) {
	if (this.destroy) return !0;
	if (this.paused) return !1;
	StageTimer.TIMEOUT_TYPE == StageTimer.TIMEOUT_BY_FRAME ? this.timeout-- : this.timeout -= a;
	if (0 >= this.timeout)
		if ("string" == typeof this.onend ? eval(this.onend) : this.dispatchEvent("end", {
				target: this
			}), this.repeat) this.rewind();
		else return !0;
	this.dispatchEvent("tick", {
		target: this,
		delta: a
	});
	return !1
};
StageTimer.prototype.rewind = function() {
	this.timeout = this.initialTimeout
};
StageTimer.prototype.resume = function() {
	this.paused = !1
};
StageTimer.prototype.pause = function() {
	this.paused = !0
};
StageTimer.TIMEOUT_BY_FRAME = 0;
StageTimer.TIMEOUT_BY_TIME = 1;
StageTimer.TIMEOUT_TYPE = StageTimer.TIMEOUT_BY_FRAME;

function Stage(a, c, d) {
	Utils.callSuperConstructor(Stage, this);
	this.canvas = null;
	a && (this.canvas = "string" == typeof a ? document.getElementById(a) : a, this.canvas.ctx = this.canvas.getContext("2d"));
	this.backgroundCanvas = null;
	this.needToRebuildBack = !1;
	this.screenWidth = c;
	this.screenHeight = d;
	this.viewport = {
		x: 0,
		y: 0
	};
	this.buffer = null;
	try {
		this.buffer = document.createElement("canvas"), this.buffer.width = c * Utils.globalScale, this.buffer.height = d * Utils.globalScale, this.buffer.ctx = this.buffer.getContext("2d")
	} catch (e) {
		this.buffer =
			this.canvas
	}
	this.delay = 40;
	this.started = !1;
	this.lastFPS = this.fps = 0;
	this.ceilSizes = this.pixelMouseMoveEvent = this.pixelMouseDownEvent = this.pixelMouseUpEvent = this.pixelClickEvent = this.showFPS = !1;
	this.tmFPS = this.tmMain = null;
	this.allowStaticDebugDrawing = this.allowDebugDrawing = this.clearLock = !1;
	this.drawBackAlways = Utils.mobileCheckBrokenAndroid();
	this.tweens = [];
	this.timers = [];
	this.eventsListeners = [];
	this.lastTick = 0;
	this.onmousemove = this.oncontextmenu = this.onclick = this.onmouseup = this.onmousedown = this.onposttick =
		this.prerender = this.onpretick = this.inputController = null;
	this.canvas && this.addInputListeners(this.canvas);
	this.tick = Utils.proxy(this.tick, this);
	this.clearFPS = Utils.proxy(this.clearFPS, this);
	this.stage = this;
	this.drawScene = this.render
}
Utils.extend(Stage, DisplayObjectContainer);
Stage.prototype.refreshBackground = function() {
	this.needToRebuildBack = !0
};
Stage.prototype.setBackgroundCanvas = function(a) {
	a && (this.backgroundCanvas = "string" == typeof a ? document.getElementById(a) : a, this.backgroundCanvas.ctx = this.backgroundCanvas.getContext("2d"))
};
Stage.prototype.destroy = function() {
	clearTimeout(this.tmMain);
	clearTimeout(this.tmFPS);
	this.stop();
	this.clear();
	this.clearScreen(this.canvas);
	this.backgroundCanvas && this.clearScreen(this.backgroundCanvas);
	this.removeInputListeners(this.stage)
};
Stage.prototype.clearScreen = function(a) {
	this.clearLock || a.ctx.clearRect(0, 0, Math.floor(a.width), Math.floor(a.height))
};
Stage.prototype.addChild = function(a) {
	a.stage = this;
	return Utils.callSuperMethod(Stage, this, "addChild", a)
};
Stage.prototype.setZIndex = function(a, c) {
	this.setChildZIndex(a, c)
};
Stage.prototype.finalizeMouseCoords = function(a, c) {
	if (!a) return c;
	var d = this.prepareMouseCoord(c.x),
		e = this.prepareMouseCoord(c.y);
	a.getIgnoreViewport() || (d += this.viewport.x, e += this.viewport.y);
	var f = a.getAbsolutePosition(),
		d = d - f.x,
		e = e - f.y;
	return {
		x: d,
		y: e
	}
};
Stage.prototype.prepareMouseCoord = function(a) {
	return a / Utils.globalScale / Utils.globalPixelScale
};
Stage.prototype.processMouseEvent = function(a, c, d) {
	a = Utils.getMouseCoord(a, this.inputController);
	d = this.getObjectsStackByCoord(this.prepareMouseCoord(a.x), this.prepareMouseCoord(a.y), d, !1);
	for (var e, f = 0; f < d.length; f++)
		if (e = this.finalizeMouseCoords(d[f], a), e = d[f].dispatchEvent(c, {
				target: d[f],
				x: e.x,
				y: e.y
			}), !1 === e) return;
	this.dispatchEvent(c, {
		target: this,
		x: Math.floor(this.prepareMouseCoord(a.x)),
		y: Math.floor(this.prepareMouseCoord(a.y))
	})
};
Stage.prototype.checkClick = function(a) {
	this.processMouseEvent(a, "click", this.pixelClickEvent)
};
Stage.prototype.checkContextMenu = function(a) {
	this.processMouseEvent(a, "contextmenu", this.pixelClickEvent)
};
Stage.prototype.checkMouseMove = function(a) {
	a = Utils.getMouseCoord(a, this.inputController);
	this.doDrag(this.prepareMouseCoord(a.x), this.prepareMouseCoord(a.y));
	var c = this.getObjectsStackByCoord(this.prepareMouseCoord(a.x), this.prepareMouseCoord(a.y), this.pixelMouseMoveEvent),
		d, e, f, g = [];
	if (0 < c.length) {
		for (d = 0; d < c.length && (g.push(c[d]), f = this.finalizeMouseCoords(c[d], a), c[d].mouseOn || (e = c[d].dispatchEvent("mouseover", {
				target: c[d],
				x: f.x,
				y: f.y
			})), c[d].mouseOn = !0, !1 !== e); d++);
		e = !0;
		for (d = 0; d < c.length && (f =
				this.finalizeMouseCoords(c[d], a), e = c[d].dispatchEvent("mousemove", {
					target: c[d],
					x: f.x,
					y: f.y
				}), !1 !== e); d++);
		!1 !== e && this.dispatchEvent("mousemove", {
			target: this,
			x: Math.floor(this.prepareMouseCoord(a.x)),
			y: Math.floor(this.prepareMouseCoord(a.y))
		})
	}
	this.checkMouseOut(g, a)
};
Stage.prototype.checkMouseDown = function(a) {
	this.processMouseEvent(a, "mousedown", this.pixelMouseDownEvent)
};
Stage.prototype.checkMouseUp = function(a) {
	this.processMouseEvent(a, "mouseup", this.pixelMouseUpEvent)
};
Stage.prototype.clear = function() {
	this.tweens = [];
	this.timers = [];
	this.eventsListeners = [];
	this.objectsCounter = 0;
	Utils.callSuperMethod(Stage, this, "clear")
};
Stage.prototype.getCenter = function() {
	return {
		x: this.screenWidth / 2,
		y: this.screenHeight / 2
	}
};
Stage.prototype.drawRectangle = function(a, c, d, e, f, g, h, l) {
	var k = this.canvas;
	k.ctx.globalAlpha = "undefined" != typeof h ? h : 1;
	k.ctx.fillStyle = f;
	k.ctx.strokeStyle = f;
	l || (a -= this.viewport.x, c -= this.viewport.y);
	a *= Utils.globalScale;
	c *= Utils.globalScale;
	d *= Utils.globalScale;
	e *= Utils.globalScale;
	g ? k.ctx.fillRect(a - d / 2, c - e / 2, d, e) : k.ctx.strokeRect(a - d / 2, c - e / 2, d, e)
};
Stage.prototype.drawCircle = function(a, c, d, e, f, g, h) {
	this.drawArc(a, c, d, 0, 2 * Math.PI, !1, e, f, g, h)
};
Stage.prototype.drawArc = function(a, c, d, e, f, g, h, l, k, m) {
	var n = this.canvas,
		p = n.ctx.lineWidth;
	"undefined" == typeof l && (l = "#000");
	n.ctx.strokeStyle = l;
	"undefined" == typeof h && (h = 1);
	n.ctx.lineWidth = h * Utils.globalScale;
	"undefined" == typeof k && (k = 1);
	n.ctx.globalAlpha = k;
	m || (a -= this.viewport.x, c -= this.viewport.y);
	a *= Utils.globalScale;
	c *= Utils.globalScale;
	d *= Utils.globalScale;
	n.ctx.beginPath();
	n.ctx.arc(a, c, d, e, f, g);
	n.ctx.stroke();
	n.ctx.lineWidth = p
};
Stage.prototype.drawPolygon = function(a, c, d, e, f) {
	if ("object" == typeof a && a instanceof Array && !(2 > a.length)) {
		for (var g = 0; g < a.length - 1; g++) this.drawLine(a[g].x, a[g].y, a[g + 1].x, a[g + 1].y, c, d, e, f);
		this.drawLine(a[g].x, a[g].y, a[0].x, a[0].y, c, d, e, f)
	}
};
Stage.prototype.drawLine = function(a, c, d, e, f, g, h, l) {
	var k = this.canvas,
		m = k.ctx.lineWidth;
	k.ctx.strokeStyle = g ? g : "#000";
	k.ctx.lineWidth = f ? f * Utils.globalScale : 1 * Utils.globalScale;
	k.ctx.globalAlpha = h ? h : 1;
	l || (a -= this.viewport.x, c -= this.viewport.y, d -= this.viewport.x, e -= this.viewport.y);
	a *= Utils.globalScale;
	c *= Utils.globalScale;
	d *= Utils.globalScale;
	e *= Utils.globalScale;
	k.ctx.beginPath();
	k.ctx.moveTo(a, c);
	k.ctx.lineTo(d, e);
	k.ctx.stroke();
	k.ctx.lineWidth = m
};
Stage.prototype.start = function() {
	this.started || (this.started = !0, this.clearFPS(), this.tick())
};
Stage.prototype.forceRender = function() {
	this.started && this.tick()
};
Stage.prototype.stop = function() {
	this.started = !1
};
Stage.prototype.clearFPS = function() {
	this.lastFPS = this.fps;
	this.fps = 0;
	this.started && (this.tmFPS = setTimeout(this.clearFPS, 1E3))
};
Stage.prototype.setTextStyle = function(a, c, d, e, f, g) {
	g = g ? g : this.canvas;
	g.ctx.fillStyle = e;
	g.ctx.strokeStyle = f;
	e = "";
	d && (e += d + " ");
	c && (e += Math.floor(c * Utils.globalScale) + "px ");
	a && (e += a);
	g.ctx.font = e
};
Stage.prototype.drawText = function(a, c, d, e, f, g, h) {
	h = h ? h : this.canvas;
	h.ctx.globalAlpha = "undefined" == typeof e ? 1 : e;
	f || (c -= this.viewport.x, d -= this.viewport.y);
	c *= Utils.globalScale;
	d *= Utils.globalScale;
	g && (c -= this.getTextWidth(a) / 2);
	h.ctx.fillText(a, c, d)
};
Stage.prototype.strokeText = function(a, c, d, e, f, g, h) {
	h = h ? h : this.canvas;
	h.ctx.globalAlpha = "undefined" == typeof e ? 1 : e;
	f || (c -= this.viewport.x, d -= this.viewport.y);
	c *= Utils.globalScale;
	d *= Utils.globalScale;
	g && (c -= this.getTextWidth(a) / 2);
	h.ctx.strokeText(a, c, d)
};
Stage.prototype.getTextWidth = function(a, c) {
	return (c ? c : this.canvas).ctx.measureText(a).width
};
Stage.prototype.render = function(a, c, d, e) {
	a && (e || (e = 0), a && !a.ctx && (a.ctx = a.getContext("2d")), d || ((d = this.getFillStyle(a)) ? (a.ctx.fillStyle = d, a.ctx.fillRect(0, 0, a.width, a.height)) : this.clearLock || this.clearScreen(a)), Utils.callSuperMethod(Stage, this, "render", a, c, e))
};
Stage.prototype.createTween = function(a, c, d, e, f, g) {
	a = new Tween(a, c, d, e, f, g);
	this.tweens.push(a);
	return a
};
Stage.prototype.removeTween = function(a) {
	var c = null;
	if (isNaN(a))
		for (var d = 0; d < this.tweens.length; d++) {
			if (this.tweens[d] === a) {
				c = d;
				break
			}
		} else c = a;
	isNaN(c) || (this.tweens[c] && this.tweens[c].pause(), this.tweens.splice(c, 1));
	return c
};
Stage.prototype.clearObjectTweens = function(a) {
	for (var c = 0; c < this.tweens.length; c++) this.tweens[c].obj === a && (this.tweens[c].destroy = !0)
};
Stage.prototype.updateTweens = function(a) {
	for (var c, d = 0; d < this.tweens.length; d++) c = this.tweens[d], c.destroy && (d = this.removeTween(d), d--);
	for (d = 0; d < this.tweens.length; d++) c = this.tweens[d], !c.newly && c.tick(a) && (c.destroy = !0), c.newly = !1
};
Stage.prototype.setTimeout = function(a, c) {
	var d = new StageTimer(a, c);
	this.timers.push(d);
	return d
};
Stage.prototype.clearTimeout = function(a) {
	a && (a.destroy = !0)
};
Stage.prototype.setInterval = function(a, c) {
	var d = new StageTimer(a, c, !0);
	this.timers.push(d);
	return d
};
Stage.prototype.clearInterval = function(a) {
	this.clearTimeout(a)
};
Stage.prototype.removeTimer = function(a) {
	this.timers = Utils.removeFromArray(this.timers, a)
};
Stage.prototype.updateTimers = function(a) {
	for (var c, d = 0; d < this.timers.length; d++) c = this.timers[d], c.destroy && (this.removeTimer(c), d--);
	for (d = 0; d < this.timers.length; d++) c = this.timers[d], !c.newly && c.update(a) && (c.destroy = !0), c.newly = !1
};
Stage.prototype.tick = function() {
	clearTimeout(this.tmMain);
	var a;
	if (Utils.isWindowHidden) this.lastTick = 0, a = this.delay;
	else {
		a = (new Date).getTime();
		var c = Math.min(Stage.MIN_DELTA, a - this.lastTick);
		this.lastTick = a;
		this.dispatchEvent("pretick", {
			target: this,
			delta: c
		});
		if (!this.started) {
			this.lastTick = 0;
			return
		}
		this.updateTweens(c);
		if (!this.started) {
			this.lastTick = 0;
			return
		}
		this.updateTimers(c);
		if (!this.started) {
			this.lastTick = 0;
			return
		}
		this.dispatchEvent("prerender", {
			target: this,
			delta: c
		});
		var d = !1;
		this.drawBackAlways ?
			(this.render(this.canvas, !0, !1, c), d = !0) : this.needToRebuildBack && (this.needToRebuildBack = !1, this.backgroundCanvas && this.render(this.backgroundCanvas, !0));
		this.render(this.canvas, !1, d, c);
		this.showFPS && (this.setTextStyle("sans-serif", 10, "bold", "#fff", "#000"), this.drawText("FPS: " + this.lastFPS, 2, 10, 1, !0));
		this.dispatchEvent("posttick", {
			target: this,
			delta: c
		});
		a = (new Date).getTime() - a;
		a = this.delay - a;
		1 > a && (a = 1);
		this.fps++
	}
	this.started ? this.tmMain = setTimeout(this.tick, a) : this.lastTick = 0
};
Stage.prototype.box2dSync = function(a) {
	for (b = a.m_bodyList; b; b = b.m_next) b.sprite && (b.sprite.rotation = b.GetRotation(), a = b.GetPosition(), b.sprite.x = a.x, b.sprite.y = a.y, b.sprite.dispatchEvent("box2dsync", {
		target: b.sprite
	}))
};
Stage.prototype.processTouchEvent = function(a, c) {
	for (var d = 0; d < a.length; d++) this[c]({
		clientX: a[d].clientX,
		clientY: a[d].clientY
	})
};
Stage.prototype.prepareEventTouches = function(a, c) {
	a[c] || (a[c] = [{
		clientX: a.clientX,
		clientY: a.clientY
	}]);
	return a[c]
};
Stage.prototype.addInputListeners = function(a) {
	this.inputController = a;
	Utils.touchScreen ? (a["on" + Utils.getTouchStartEvent()] = Utils.proxy(function(a) {
		this.processTouchEvent(this.prepareEventTouches(a, "changedTouches"), "checkMouseDown");
		this.processTouchEvent(this.prepareEventTouches(a, "changedTouches"), "checkClick");
		a.preventDefault()
	}, this), a["on" + Utils.getTouchMoveEvent()] = Utils.proxy(function(a) {
			this.processTouchEvent(this.prepareEventTouches(a, "changedTouches"), "checkMouseMove");
			a.preventDefault()
		},
		this), a["on" + Utils.getTouchEndEvent()] = Utils.proxy(function(a) {
		this.processTouchEvent(this.prepareEventTouches(a, "changedTouches"), "checkMouseUp");
		a.preventDefault()
	}, this)) : (a.onclick = Utils.proxy(function(a) {
		this.checkClick(a)
	}, this), a.onmousemove = Utils.proxy(function(a) {
		this.checkMouseMove(a)
	}, this), a.onmousedown = Utils.proxy(function(a) {
		0 == a.button && this.checkMouseDown(a)
	}, this), a.onmouseup = Utils.proxy(function(a) {
		0 == a.button && this.checkMouseUp(a)
	}, this), a.oncontextmenu = Utils.proxy(function(a) {
			this.checkContextMenu(a)
		},
		this))
};
Stage.prototype.removeInputListeners = function(a) {
	a.ontouchstart = null;
	a.ontouchmove = null;
	a.ontouchend = null;
	a.onmspointerdown = null;
	a.onmspointermove = null;
	a.onmspointerup = null;
	a.onclick = null;
	a.onmousemove = null;
	a.onmousedown = null;
	a.onmouseup = null;
	a.oncontextmenu = null
};
Stage.MIN_DELTA = 500;
var ExternalAPI = {
		type: "default",
		init: function() {},
		exec: function() {
			var a = arguments[0];
			if ("exec" != a && "function" == typeof ExternalAPI[a]) return ExternalAPI[a].apply(ExternalAPI, Utils.getFunctionArguments(arguments, 1))
		},
		check: function() {
			return !1
		},
		openWidget: function() {},
		closeWidget: function() {},
		getMoreGamesURL: function(a, c) {
			return "http://playtomax.com/"
		},
		getPreloaderURL: function() {
			return "http://playtomax.com/"
		},
		showCopyright: function() {},
		isPortalEnvironment: function() {
			var a = window.location.href;
			return 0 ==
				a.indexOf("http://playtomax.com") || 0 == a.indexOf("https://playtomax.com")
		},
		isPlainPortalEnvironment: function() {
			return ExternalAPI.isPortalEnvironment() ? "whitelabel" != Utils.parseGet().external : !1
		},
		showAds: function() {
			// ExternalAPI.isPortalEnvironment() && (window.GoogleIMA ? GoogleIMA.show() : window.Leadbolt && Leadbolt.show())
		},
		sendGAEvent: function(a, c, d, e) {
			// ExternalAPI.isPlainPortalEnvironment() && window.ga && (e || (e = 0), ga("send", "event", a, c, d, e))
		},
		openPlayMarket: function(a, c, d) {
			/*a = "https://play.google.com/store/apps/details?id=" +
				a + ("&referrer=utm_source%3D" + c);
			a += "%26utm_medium%3Dbutton%26utm_campaign%3D" + d;
			window.open(a, "_blank")*/
		},
		shareTwitter: function(a, c) {
			/*c || (c = "en");
			var d = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(a) + "&lang=" + c,
				e = window.open(d, "_blank");
			e ? e.focus() : window.location.href = d*/
		},
		trackGameEvent: function(a, c) {
			var d = window._gameEventCounter || {};
			"undefined" == typeof d[a] && (d[a] = {});
			"undefined" == typeof d[a][c] && (d[a][c] = 1);
			ExternalAPI.exec("sendGAEvent", GAME_ID || "Unknown_Game", a, c, d[a][c]++);
			window._gameEventCounter =
				d
		}
	},
	TTLoader = {
		endCallback: null,
		loadedData: null,
		landscapeMode: !1,
		skipPlayButton: !1,
		create: function(a, c, d, e) {
			TTLoader.endCallback = a;
			TTLoader.landscapeMode = c;
			TTLoader.skipPlayButton = d;
			document.getElementById("progress_container").style.background = "#fff";
			document.getElementById("progress_container").style.zIndex = "1000";
			a = document.getElementById("progress");
			a.setAttribute("valign", "top");
			a.style.verticalAlign = "top";
			a.style.background = "#fff";
			c = document.createElement("div");
			d = document.createElement("a");
			d.setAttribute("id", "tt_load_logo_c");
			/*var f = window.ExternalAPI ? ExternalAPI.exec("getPreloaderURL") : "http://playtomax.com/",
				g = "_blank";
			if (e || !f) f = "javascript:void(0)", g = "";
			d.setAttribute("href", f);
			d.setAttribute("target", g);*/
			e = new Image;
			e.setAttribute("id", "tt_load_logo");
			e.setAttribute("border", "");
			e.src = TTLoader.logoSrc;
			e.style.cursor = "pointer";
			d.appendChild(e);
			c.appendChild(d);
			a.appendChild(c);
			c = document.createElement("div");
			c.setAttribute("id", "tt_load_progress_cont");
			c.setAttribute("align", "left");
			c.setAttribute("style", "padding: 1px; border: 2px solid #e44d26; background: #fff");
			e = document.createElement("div");
			e.setAttribute("id", "tt_load_progress");
			e.setAttribute("style", "width: 0px; background: #e44d26;");
			e.innerHTML = "&nbsp;";
			c.appendChild(e);
			a.appendChild(c);
			c = document.createElement("div");
			c.setAttribute("id", "tt_load_play");
			e = new Image;
			e.setAttribute("id", "tt_load_button");
			e.src = TTLoader.buttonDisabledSrc;
			e.style.visibility = TTLoader.skipPlayButton ? "hidden" : "hidden";
			c.appendChild(e);
			a.appendChild(c);
			Utils.addEventListener("fitlayout", TTLoader.setSizes);
			TTLoader.setSizes()
		},
		setSizes: function() {
			var a = Utils.getWindowRect();
			document.getElementById("progress_container").style.width = a.width + "px";
			document.getElementById("progress_container").style.height = a.height + "px";
			a = Utils.globalScale * Utils.globalPixelScale;
			TTLoader.landscapeMode || (document.getElementById("progress").style.paddingTop = Math.floor(80 * a) + "px");
			document.getElementById("tt_load_progress_cont").style.width = Math.floor(200 * a) + "px";
			document.getElementById("tt_load_progress").style.height =
				Math.floor(12 * a) + "px";
			document.getElementById("tt_load_progress").style.width = a * TTLoader.progressVal * 2 + "px";
			document.getElementById("tt_load_logo").style.marginTop = Math.floor(80) + "px";
			document.getElementById("tt_load_logo").setAttribute("width", Math.floor(300) + "px");
			document.getElementById("tt_load_logo").setAttribute("height", Math.floor(304) + "px");
			document.getElementById("tt_load_button").setAttribute("width", Math.floor(65 * a) + "px");
			document.getElementById("tt_load_button").setAttribute("height",
				Math.floor(29 * a) + "px");
			document.getElementById("tt_load_button").style.marginTop = Math.floor(30 * a) + "px"
		},
		progressVal: 0,
		showLoadProgress: function(a) {
			0 > a && (a = 0);
			100 < a && (a = 100);
			TTLoader.progressVal = a;
			TTLoader.setSizes()
		},
		loadComplete: function(a) {
			TTLoader.showLoadProgress(100);
			TTLoader.loadedData = a;
			a = document.getElementById("tt_load_button");
			var c = "click";
			Utils.touchScreen && !Utils.isWindowsPhone() && (c = Utils.getTouchStartEvent());
			Utils.bindEvent(a, c, TTLoader.close);
			Utils.bindEvent(a, "click", TTLoader.close);
			a.style.cursor = "pointer";
			a.src = TTLoader.buttonSrc;
			a = document.getElementById("tt_load_progress");
			a.style.background = "transparent";
			a = document.getElementById("tt_load_progress_cont");
			a.style.border = "2px solid transparent";
			a.style.background = "transparent";
			// document.getElementById("tt_load_button").style.display = "block";
			/*TTLoader.skipPlayButton &&*/ TTLoader.close()
		},
		close: function(a) {
			clearTimeout(TTLoader.animateTimeout);
			TTLoader.endCallback(TTLoader.loadedData)
		},
		logoSrc: "images/68_logo.png",
		buttonDisabledSrc: "",
		buttonSrc: ""
	};

function Animation(a, c, d) {
	this.obj = a;
	this.sequence = c;
	this.currentAnimation = -1;
	this.currentTweens = [];
	this.ended = !1;
	this.endTimer = this.startTimer = null;
	this.playNext = Utils.proxy(this.playNext, this);
	this.play = Utils.proxy(this.play, this);
	this.onfinish = d
}
Animation.prototype.play = function() {
	this.playNext()
};
Animation.prototype.playNext = function() {
	if (0 <= this.currentAnimation) {
		var a = this.sequence[this.currentAnimation];
		if (a.onfinish) a.onfinish({
			target: this
		});
		"undefined" != typeof a.loop && 0 <= a.loop && (this.currentAnimation = a.loop - 1)
	}
	this.currentAnimation++;
	if (this.currentAnimation >= this.sequence.length) {
		if (this.ended = !0, "function" == typeof this.onfinish) this.onfinish({
			target: this
		})
	} else {
		var a = this.sequence[this.currentAnimation],
			c, d, e, f, g, h, l;
		e = a.tweens;
		Utils.isArray(e) || (e = [e]);
		c = a.duration || 0;
		this.currentTweens =
			[];
		for (var k = null, m = 0; m < e.length; m++) f = e[m], d = f.duration, "undefined" == typeof d && (d = c), g = f.from, "undefined" == typeof g && (g = this.obj[f.prop]), h = f.to, "undefined" == typeof h && (h = this.obj[f.prop]), l = f.ease || a.ease || null, g = Animation.stage.createTween(this.obj, f.prop, g, h, d, l), "undefined" != typeof f.onchange && (g.onchange = f.onchange), "undefined" != typeof f.onfinish && (g.onfinish = f.onfinish), g.play(), this.currentTweens.push(g), d == c && (k = g);
		if (k) {
			var n = this,
				p = k.onfinish;
			k.onfinish = function(a) {
				"function" == typeof p &&
					p(a);
				n.playNext()
			}
		} else this.endTimer = Animation.stage.setTimeout(this.playNext, c)
	}
};
Animation.prototype.executeTweensMethod = function(a) {
	for (var c = 0; c < this.currentTweens.length; c++) this.currentTweens[c][a]()
};
Animation.prototype.clearTweens = function() {
	for (var a = 0; a < this.currentTweens.length; a++) this.currentTweens[a].destroy = !0;
	this.currentTweens = []
};
Animation.prototype.stop = function() {
	this.ended || (this.executeTweensMethod("stop"), this.startTimer && Animation.stage.clearTimeout(this.startTimer), this.endTimer && Animation.stage.clearTimeout(this.endTimer))
};
Animation.prototype.pause = function() {
	this.ended || (this.executeTweensMethod("pause"), this.startTimer && this.startTimer.pause(), this.endTimer && this.endTimer.pause())
};
Animation.prototype.resume = function() {
	this.ended || (this.executeTweensMethod("play"), this.startTimer && this.startTimer.resume(), this.endTimer && this.endTimer.resume())
};
Animation.stage = null;
Animation.play = function(a, c, d, e) {
	if (a && c) return a.stage && (Animation.stage = a.stage), Animation.stage || (Animation.stage = window.stage), a = new Animation(a, c, d), e ? a.startTimer = Animation.stage.setTimeout(a.play, e) : a.play(), a
};

function AudioPlayer() {
	this.disabled = !1;
	this.basePath = "";
	this.mp3Support = !0;
	this.delayPlay = !1;
	this.audioWrapper = null;
	this.busy = this.locked = !1;
	this.startPlayTime = 0;
	this.onend = null;
	this.controlPlay = Utils.proxy(this.controlPlay, this)
}
AudioPlayer.prototype.createNewAudio = function() {
	if (AudioMixer.isWebAudioSupport()) {
		var a = AudioMixer.waContext.createBufferSource();
		a.connect(AudioMixer.waContext.destination);
		return a
	}
	return document.createElement("audio")
};
AudioPlayer.prototype.init = function(a) {
	this.basePath = a ? a : "";
	this.delayPlay = "ontouchstart" in window;
	this.audioWrapper = this.createNewAudio();
	a = document.createElement("audio");
	a.canPlayType ? this.mp3Support = "" != a.canPlayType("audio/mpeg") : this.disabled = !0;
	return !this.disabled
};
AudioPlayer.prototype.play = function(a, c) {
	if (this.disabled) return !1;
	var d = this.basePath + "/" + a + (this.mp3Support ? ".mp3" : ".ogg");
	this.stop();
	this.audioWrapper = this.createNewAudio();
	this.audioWrapper.doLoop = c ? !0 : !1;
	this.audioWrapper.fileName = a;
	if (AudioMixer.isWebAudioSupport()) {
		var e = this;
		this.loadSound(d, function(a) {
			e.audioWrapper.buffer = a;
			e.audioWrapper.noteOn ? e.audioWrapper.noteOn(0) : e.audioWrapper.start(0);
			e.startPlayTime = (new Date).getTime();
			e.audioWrapper.loop = c;
			"undefined" != typeof e.audioWrapper.playbackState ?
				e.waCheckInterval = setInterval(function() {
					e.audioWrapper ? e.audioWrapper.playbackState == e.audioWrapper.FINISHED_STATE && e.controlPlay() : clearInterval(e.waCheckInterval)
				}, 100) : e.audioWrapper.onended = e.controlPlay
		})
	} else this.audioWrapper.src = d, this.audioWrapper.type = this.mp3Support ? "audio/mpeg" : "audio/ogg", this.audioWrapper.loop = !1, this.audioWrapper.preload = "auto", this.audioWrapper.load(), this.delayPlay ? (this.audioWrapper.addEventListener("canplay", this.readyToPlay), this.audioWrapper.addEventListener("canplaythrough",
		this.readyToPlay)) : this.audioWrapper.play(), this.audioWrapper.addEventListener("ended", this.controlPlay, !1);
	this.busy = !0;
	this.startPlayTime = (new Date).getTime()
};
AudioPlayer.prototype.loadSound = function(a, c) {
	if (AudioMixer.buffer[a]) c && c(AudioMixer.buffer[a]);
	else {
		var d = new XMLHttpRequest;
		d.open("GET", a, !0);
		d.responseType = "arraybuffer";
		d.onload = function() {
			AudioMixer.waContext.decodeAudioData(this.response, function(d) {
				AudioMixer.buffer[a] = d;
				c && c(d)
			})
		};
		d.send()
	}
};
AudioPlayer.prototype.readyToPlay = function(a) {
	a.currentTarget.alreadyLoaded || (a.currentTarget.alreadyLoaded = !0, a.currentTarget.play())
};
AudioPlayer.prototype.stop = function() {
	this.busy = !1;
	try {
		AudioMixer.isWebAudioSupport() ? this.audioWrapper.noteOff ? this.audioWrapper.noteOff(0) : this.audioWrapper.stop(0) : (this.audioWrapper.removeEventListener("canplay", this.readyToPlay), this.audioWrapper.removeEventListener("canplaythrough", this.readyToPlay), this.audioWrapper.pause(), this.audioWrapper.currentTime = 0), this.audioWrapper = null
	} catch (a) {}
};
AudioPlayer.prototype.pause = function() {
	AudioMixer.isWebAudioSupport() ? this.audioWrapper && this.audioWrapper.disconnect() : this.audioWrapper.pause()
};
AudioPlayer.prototype.resume = function() {
	if (AudioMixer.isWebAudioSupport()) {
		if (this.audioWrapper) try {
			this.audioWrapper.connect(AudioMixer.waContext.destination)
		} catch (a) {}
	} else this.audioWrapper.play()
};
AudioPlayer.prototype.controlPlay = function() {
	if (this.audioWrapper)
		if (this.audioWrapper.doLoop) AudioMixer.isWebAudioSupport() || (Utils.isFirefox() ? this.play(this.audioWrapper.fileName, !0) : (this.audioWrapper.currentTime = 0, this.audioWrapper.play()));
		else {
			this.busy = !1;
			if ("function" == typeof this.onend) this.onend();
			this.waCheckInterval && clearInterval(this.waCheckInterval)
		}
};
AudioPlayer.prototype.getPosition = function() {
	if (AudioMixer.isWebAudioSupport()) {
		if (!this.startPlayTime) return 0;
		var a = this.getDuration();
		if (!a) return 0;
		var c = ((new Date).getTime() - this.startPlayTime) / 1E3;
		return c <= a ? c : this.audioWrapper.doLoop ? c - Math.floor(c / a) * a : a
	}
	return this.audioWrapper.currentTime ? this.audioWrapper.currentTime : 0
};
AudioPlayer.prototype.getDuration = function() {
	return AudioMixer.isWebAudioSupport() ? this.audioWrapper.buffer ? this.audioWrapper.buffer.duration : 0 : this.audioWrapper.duration ? this.audioWrapper.duration : 0
};

function AudioMixer(a, c) {
	this.singleChannelMode = !1;
	this.channels = [];
	this.init(a, c)
}
AudioMixer.prototype.init = function(a, c) {
	if (AudioMixer.isWebAudioSupport()) {
		AudioMixer.waContext = new window.AudioContext;
		var d = AudioMixer.waContext.createBuffer(1, 1, 22050),
			e = AudioMixer.waContext.createBufferSource();
		e.buffer = d;
		e.connect(AudioMixer.waContext.destination);
		e.noteOn ? e.noteOn(0) : e.start(0)
	}
	AudioMixer.isWebAudioSupport() || -1 == navigator.userAgent.toLowerCase().indexOf("mac") || (this.singleChannelMode = !0, c = 1);
	this.path = a;
	this.channels = [];
	for (d = 0; d < c; d++) this.channels[d] = new AudioPlayer, this.channels[d].init(a);
	Utils.addEventListener("hidewindow", Utils.proxy(this.pauseOnHide, this));
	Utils.addEventListener("showwindow", Utils.proxy(this.resumeOnShow, this))
};
AudioMixer.prototype.pauseOnHide = function() {
	for (var a = 0; a < this.channels.length; a++) this.channels[a].pause()
};
AudioMixer.prototype.resumeOnShow = function() {
	for (var a = 0; a < this.channels.length; a++) this.channels[a].resume()
};
AudioMixer.prototype.play = function(a, c, d, e) {
	var f = -1,
		f = "number" == typeof e ? e : this.getFreeChannel(d);
	0 <= f && f < this.channels.length && (this.channels[f].stop(), this.channels[f].play(a, c));
	return this.channels[f]
};
AudioMixer.prototype.stop = function(a) {
	0 <= a && a < this.channels.length && this.channels[a].stop()
};
AudioMixer.prototype.getFreeChannel = function(a) {
	for (var c = -1, d = [], e = -1, f = -1, g = 0, h = 0; h < this.channels.length; h++) this.channels[h].locked || (this.channels[h].busy ? (g = (new Date).getTime(), g -= this.channels[h].startPlayTime, g > f && (f = g, e = h)) : d.push(h));
	0 == d.length ? !a && 0 <= e && (c = e) : c = d[0];
	return c
};
AudioMixer.isWebAudioSupport = function() {
	return Boolean(window.AudioContext)
};
window.AudioContext = window.AudioContext || window.webkitAudioContext;
AudioMixer.buffer = {};
AudioMixer.waContext = null;

function PathTween(a, c, d, e) {
	this.obj = a;
	this.path = c;
	this.loop = !!e;
	d && (this.path = Utils.getBezierCurve(c));
	this.pathLen = this.getPathLen();
	this.position = 0;
	this.startTimer = this.tween = null
}
PathTween.prototype.getPathLen = function() {
	for (var a, c, d = 0, e = 0; e < this.path.length - 1; e++) a = this.path[e].x - this.path[e + 1].x, c = this.path[e].y - this.path[e + 1].y, d += Math.sqrt(a * a + c * c);
	return d
};
PathTween.prototype.getPoint = function(a) {
	for (var c, d, e = c = 0, f = 0, g = this.path[0].x, h = this.path[0].y;;) {
		f++;
		if (f >= this.path.length) return {
			x: this.path[this.path.length - 1].x,
			y: this.path[this.path.length - 1].y
		};
		c = g - this.path[f].x;
		d = h - this.path[f].y;
		c = Math.sqrt(c * c + d * d);
		if (e + c >= a) return f = Math.atan2(this.path[f].y - h, this.path[f].x - g), c = a - e, g += Math.cos(f) * c, h += Math.sin(f) * c, {
			x: g,
			y: h
		};
		e += c;
		g = this.path[f].x;
		h = this.path[f].y
	}
};
PathTween.prototype.start = function(a, c, d, e, f) {
	function g() {
		h.position = 0;
		h.tween && (h.tween.stop(), h.tween.destroy = !0);
		h.tween = h.obj.stage.createTween(h, "position", 0, h.pathLen, a, c);
		h.tween.addEventListener("finish", h.updateOnFinish);
		h.tween.addEventListener("change", h.updateOnTween);
		d && h.tween.addEventListener("finish", d);
		e && h.tween.addEventListener("change", e);
		h.tween.play();
		h.startTimer = null
	}
	var h = this;
	f ? this.startTimer = this.obj.stage.setTimeout(g, f) : g()
};
PathTween.prototype.pause = function() {
	this.tween && this.tween.pause();
	this.startTimer && this.startTimer.pause()
};
PathTween.prototype.play = function() {
	this.tween && this.tween.play();
	this.startTimer && this.startTimer.pause()
};
PathTween.prototype.rewind = function() {
	this.tween && this.tween.rewind();
	this.startTimer && this.startTimer.rewind()
};
PathTween.prototype.forward = function() {
	this.tween && this.tween.forward();
	this.startTimer && (this.startTimer.pause(), this.startTimer.destroy = !0)
};
PathTween.prototype.stop = function() {
	this.tween && this.tween.stop();
	this.startTimer && (this.startTimer.pause(), this.startTimer.destroy = !0)
};
PathTween.prototype.updateOnFinish = function(a) {
	a = a.target.obj;
	var c = a.path[a.path.length - 1];
	a.obj.x = c.x;
	a.obj.y = c.y;
	if (a.loop) return a.rewind(), a.play(), !1
};
PathTween.prototype.updateOnTween = function(a) {
	a = a.target.obj;
	var c = a.getPoint(a.position);
	a.obj.x = c.x;
	a.obj.y = c.y
};

function SimpleText(a, c, d, e) {
	this.font = a;
	this.y = this.x = 0;
	this.width = c;
	this.height = d;
	this.align = SimpleText.ALIGN_LEFT;
	this.charSpacing = this.rotation = 0;
	this.opacity = this.scale = 1;
	this.static = !1;
	this.charMap = "0123456789".split("");
	this.charWidth = [];
	this.sprites = [];
	this.text = "";
	this.parent = this.stage = window.stage;
	this.ALIGN_LEFT = SimpleText.ALIGN_LEFT;
	this.ALIGN_RIGHT = SimpleText.ALIGN_RIGHT;
	this.ALIGN_CENTER = SimpleText.ALIGN_CENTER;
	this.ignoreViewport = e
}
SimpleText.prototype.manageSprites = function(a) {
	var c, d = a.length,
		e = this.sprites.length;
	if (e < d)
		for (a = 0; a < d - e; a++) c = new window[SimpleText.spriteClass](this.font, this.width, this.height, this.charMap.length), this.sprites.push(c), this.parent.addChild(c);
	if (e > d) {
		for (a = 0; a < e - d; a++) this.parent.removeChild(this.sprites[a]);
		this.sprites.splice(0, e - d)
	}
};
SimpleText.prototype.getCharIx = function(a) {
	for (var c = 0; c < this.charMap.length; c++)
		if (this.charMap[c] == a) return c;
	return -1
};
SimpleText.prototype.getCharWidth = function(a) {
	a = this.getCharIx(a);
	return 0 <= a ? this.charWidth[a] ? this.charWidth[a] : this.width : this.width
};
SimpleText.prototype.getWidth = function() {
	for (var a = 0, c = 0; c < this.text.length; c++) a += this.getCharWidth(this.text.substr(c, 1)) + this.charSpacing;
	return a
};
SimpleText.prototype.write = function(a) {
	var c, d, e, f;
	this.text = a += "";
	this.manageSprites(a);
	c = this.x;
	this.align == SimpleText.ALIGN_CENTER && (c = this.x - this.getWidth() / 2 * this.scale + this.getCharWidth(this.text.substr(0, 1)) / 2 * this.scale);
	this.align == SimpleText.ALIGN_RIGHT && (c = this.x - this.getWidth() * this.scale);
	e = new Vector(c - this.x, 0);
	e.rotate(-this.rotation);
	c = e.x + this.x;
	d = e.y + this.y;
	e = new Vector(0, 0);
	for (var g = 0; g < a.length; g++)
		if (this.sprites[g].visible = !0, f = this.charMap.indexOf(a.substr(g, 1)), 0 > f) this.sprites[g].visible = !1;
		else {
			var h = this.getCharWidth(this.text.substr(g, 1));
			this.sprites[g].scaleX = this.sprites[g].scaleY = this.scale;
			this.sprites[g].gotoAndStop(f);
			f = e.clone();
			f.x *= this.scale;
			f.rotate(-this.rotation);
			this.sprites[g].x = f.x + ("," == this.text.substr(g, 1) ? c - h / 2 : c);
			this.sprites[g].y = f.y + d;
			this.sprites[g].rotation = this.rotation;
			this.sprites[g].static = this.static;
			this.sprites[g].opacity = this.opacity;
			this.sprites[g].ignoreViewport = this.ignoreViewport;
			this.sprites[g].gx = this.sprites[g].x;
			this.sprites[g].gy = this.sprites[g].y;
			this.sprites[g].gscaleX = this.sprites[g].scaleX;
			this.sprites[g].gscaleY = this.sprites[g].scaleY;
			this.sprites[g].grotation = this.sprites[g].rotation;
			this.sprites[g].gopacity = this.sprites[g].opacity;
			e.x += h + this.charSpacing
		}
};
SimpleText.prototype.refresh = function() {
	this.write(this.text)
};
SimpleText.prototype.addToGroup = function(a) {
	for (var c = 0; c < this.sprites.length; c++) this.sprites[c].gx = this.sprites[c].x / 2, this.sprites[c].gy = this.sprites[c].y, a.addChild(this.sprites[c], !1)
};
SimpleText.prototype.putToGroup = function(a) {
	for (var c = 0; c < this.sprites.length; c++) this.sprites[c].gx = this.sprites[c].x, this.sprites[c].gy = this.sprites[c].y, a.addChild(this.sprites[c], !1)
};
SimpleText.prototype.refreshOnTween = function(a) {
	a.target.obj.refresh()
};
SimpleText.prototype.setPosition = function(a, c) {
	this.x = a;
	this.y = c;
	this.refresh()
};
SimpleText.prototype.removeTweens = function() {
	this.stage && this.stage.clearObjectTweens(this)
};
SimpleText.prototype.addTween = function(a, c, d, e, f, g) {
	if (this.stage) {
		var h = this[a];
		if (!isNaN(h)) return a = this.stage.createTween(this, a, h, c, d, e), a.onchange = g, a.onfinish = f, a
	}
};
SimpleText.prototype.moveTo = function(a, c, d, e, f, g) {
	d = ~~d;
	if (0 >= d) this.setPosition(a, c);
	else {
		if (a = this.addTween("x", a, d, e, f, g)) a.addEventListener("change", this.refreshOnTween), a.addEventListener("finish", this.refreshOnTween), a.play();
		if (c = this.addTween("y", c, d, e, a ? null : f, a ? null : g)) c.addEventListener("change", this.refreshOnTween), c.addEventListener("finish", this.refreshOnTween), c.play()
	}
	return this
};
SimpleText.prototype.moveBy = function(a, c, d, e, f, g) {
	return this.moveTo(this.x + a, this.y + c, d, e, f, g)
};
SimpleText.prototype.fadeTo = function(a, c, d, e, f) {
	c = ~~c;
	if (0 >= c) this.opacity = a;
	else if (a = this.addTween("opacity", a, c, d, e, f)) a.play(), a.addEventListener("change", this.refreshOnTween), a.addEventListener("finish", this.refreshOnTween);
	return this
};
SimpleText.prototype.fadeBy = function(a, c, d, e, f) {
	a = Math.max(0, Math.min(1, this.opacity + a));
	return this.fadeTo(a, c, d, e, f)
};
SimpleText.prototype.rotateTo = function(a, c, d, e, f) {
	c = ~~c;
	if (0 >= c) this.rotation = a;
	else if (a = this.addTween("rotation", a, c, d, e, f)) a.play(), a.addEventListener("change", this.refreshOnTween), a.addEventListener("finish", this.refreshOnTween);
	return this
};
SimpleText.prototype.rotateBy = function(a, c, d, e, f) {
	return this.rotateTo(this.rotation + a, c, d, e, f)
};
SimpleText.prototype.scaleTo = function(a, c, d, e, f) {
	c = ~~c;
	if (0 >= c) this.scale = a;
	else if (a = this.addTween("scale", a, c, d, e, f)) a.play(), a.addEventListener("change", this.refreshOnTween), a.addEventListener("finish", this.refreshOnTween);
	return this
};
SimpleText.spriteClass = "Sprite";
SimpleText.ALIGN_LEFT = 0;
SimpleText.ALIGN_RIGHT = 1;
SimpleText.ALIGN_CENTER = 2;

function BitmapText(a, c) {
	this.font = Utils.isArray(a) ? a : [a];
	this.charMap = c;
	this.sprites = [];
	this.lines = [];
	this.parent = this.stage = window.stage
}
BitmapText.ALIGN_LEFT = 0;
BitmapText.ALIGN_RIGHT = 1;
BitmapText.ALIGN_CENTER = 2;
BitmapText.VALIGN_TOP = 0;
BitmapText.VALIGN_MIDDLE = 1;
BitmapText.VALIGN_BOTTOM = 2;
BitmapText.spriteClass = "Sprite";
BitmapText.LINES_DELIMITER = "\n";
BitmapText.prototype.x = 0;
BitmapText.prototype.y = 0;
BitmapText.prototype.align = BitmapText.ALIGN_LEFT;
BitmapText.prototype.valign = BitmapText.VALIGN_TOP;
BitmapText.prototype.rotation = 0;
BitmapText.prototype.charSpacing = 0;
BitmapText.prototype.lineSpacing = 0;
BitmapText.prototype.maxWidth = 0;
BitmapText.prototype.scale = 1;
BitmapText.prototype.opacity = 1;
BitmapText.prototype.static = !1;
BitmapText.prototype.text = "";
this.ignoreViewport = !1;
this.zIndex = void 0;
BitmapText.prototype.manageSprites = function(a) {
	if (this.parent) {
		var c, d = a.length,
			e = this.sprites.length;
		if (e < d)
			for (a = 0; a < d - e; a++) c = new window[BitmapText.spriteClass](null, 0, 0), this.sprites.push(c), this.parent.addChild(c);
		if (e > d) {
			for (a = 0; a < e - d; a++) this.parent.removeChild(this.sprites[a]);
			this.sprites.splice(0, e - d)
		}
	}
};
BitmapText.prototype.getChar = function(a) {
	for (var c = a.charCodeAt(0), d = 0; d < this.charMap.length; d++)
		if (this.charMap[d].id == c) return this.charMap[d];
	console.log("Char not found", a, c, this.text);
	return {
		id: 0,
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		xoffset: 0,
		yoffset: 0,
		page: 0,
		xadvance: 0
	}
};
BitmapText.prototype.getWidth = function() {
	for (var a = 0, c = 0; c < this.lines.length; c++) {
		for (var d = 0, e, f = 0; f < this.lines[c].length; f++) e = this.getChar(this.lines[c].substr(f, 1)), d += e.xadvance + this.charSpacing;
		d > a && (a = d)
	}
	return a
};
BitmapText.prototype.getWidthOfLine = function(a) {
	for (var c = 0, d, e = 0; e < this.lines[a].length; e++) d = this.getChar(this.lines[a].substr(e, 1)), c += d.xadvance + this.charSpacing;
	return c
};
BitmapText.prototype.getHeight = function() {
	for (var a = 0, c = 0; c < this.lines.length; c++) a += this.getHeightOfLine(c) + this.lineSpacing;
	return a
};
BitmapText.prototype.getHeightOfLine = function(a) {
	for (var c = 0, d, e = 0; e < this.lines[a].length; e++) d = this.getChar(this.lines[a].substr(e, 1)), d.height + d.yoffset > c && (c = d.height + d.yoffset);
	return c
};
BitmapText.prototype.write = function(a) {
	var c, d, e, f, g, h, l, k;
	a += "";
	if (0 < this.maxWidth) {
		f = a.split(BitmapText.LINES_DELIMITER);
		c = [];
		for (e = 0; e < f.length; e++) {
			d = f[e].split(" ");
			a = "";
			for (l = 0; l < d.length; l++) this.lines = [a + d[l]], this.getWidthOfLine(0) > this.maxWidth ? (c.push(a), a = d[l] + " ") : a += d[l] + " ";
			c.push(a)
		}
		a = c.join(BitmapText.LINES_DELIMITER)
	}
	this.text = a;
	this.lines = a.split(BitmapText.LINES_DELIMITER);
	this.manageSprites(a);
	a = this.x;
	f = this.y;
	l = this.getHeight();
	this.valign == BitmapText.VALIGN_MIDDLE && (f = this.y -
		l / 2 * this.scale);
	this.valign == BitmapText.VALIGN_BOTTOM && (f = this.y - l * this.scale);
	var m = 0,
		n = 0;
	for (l = 0; l < this.lines.length; l++) {
		k = this.getHeightOfLine(l);
		this.align == BitmapText.ALIGN_CENTER && (a = this.x - this.getWidthOfLine(l) / 2 * this.scale);
		this.align == BitmapText.ALIGN_RIGHT && (a = this.x - this.getWidthOfLine(l) * this.scale);
		g = new Vector(a - this.x, f - this.y + n);
		g.rotate(-this.rotation);
		a = g.x + this.x;
		e = g.y + this.y;
		n += (k + this.lineSpacing) * this.scale;
		g = new Vector(0, 0);
		for (var p = 0; p < this.lines[l].length; p++) d = this.sprites[m],
			m++, d.visible = !0, (c = this.getChar(this.lines[l].substr(p, 1))) ? (d.bitmap = this.font[c.page ? c.page : 0], d.width = c.width, d.height = c.height, d.offset.left = c.x, d.offset.top = c.y, d.anchor.x = -c.width / 2, d.anchor.y = -c.height / 2, h = g.clone(), h.x += c.xoffset * this.scale, h.y += (c.yoffset - k / 2) * this.scale, h.rotate(-this.rotation), d.x = h.x + a, d.y = h.y + e, d.scaleX = d.scaleY = this.scale, d.rotation = this.rotation, d.setStatic(this.static), d.ignoreViewport = this.ignoreViewport, d.opacity = this.opacity, d.gx = d.x, d.gy = d.y, d.gscaleX = d.scaleX,
				d.gscaleY = d.scaleY, d.grotation = d.rotation, d.gopacity = d.opacity, g.x += (c.xadvance + this.charSpacing) * this.scale, "number" == typeof this.zIndex && d.zIndex != this.zIndex && d.setZIndex(this.zIndex)) : d.visible = !1
	}
};
BitmapText.prototype.setStatic = function(a) {
	a = !!a;
	this.static != a && (this.static = a, this.refresh())
};
BitmapText.prototype.setZIndex = function(a) {
	this.zIndex = a;
	for (var c = 0; c < this.sprites.length; c++) this.sprites[c].setZIndex(a)
};
BitmapText.prototype.addToGroup = function(a) {
	for (var c = 0; c < this.sprites.length; c++) this.sprites[c].gx = this.sprites[c].x / 2, this.sprites[c].gy = this.sprites[c].y, a.addChild(this.sprites[c], !1)
};
BitmapText.prototype.putToGroup = function(a) {
	for (var c = 0; c < this.sprites.length; c++) this.sprites[c].gx = this.sprites[c].x, this.sprites[c].gy = this.sprites[c].y, a.addChild(this.sprites[c], !1)
};
BitmapText.prototype.refresh = function() {
	this.write(this.text)
};
BitmapText.prototype.refreshOnTween = function(a) {
	a.target.obj.refresh()
};
BitmapText.prototype.setPosition = function(a, c) {
	this.x = a;
	this.y = c;
	this.refresh()
};
BitmapText.prototype.removeTweens = function() {
	this.stage && this.stage.clearObjectTweens(this)
};
BitmapText.prototype.addTween = function(a, c, d, e, f, g) {
	if (this.stage) {
		var h = this[a];
		if (!isNaN(h)) return a = stage.createTween(this, a, h, c, d, e), a.onchange = g, a.onfinish = f, a
	}
};
BitmapText.prototype.moveTo = function(a, c, d, e, f, g) {
	d = ~~d;
	if (0 >= d) this.setPosition(a, c);
	else {
		if (a = this.addTween("x", a, d, e, f, g)) a.addEventListener("change", this.refreshOnTween), a.addEventListener("finish", this.refreshOnTween), a.play();
		if (c = this.addTween("y", c, d, e, a ? null : f, a ? null : g)) c.addEventListener("change", this.refreshOnTween), c.addEventListener("finish", this.refreshOnTween), c.play()
	}
	return this
};
BitmapText.prototype.moveBy = function(a, c, d, e, f, g) {
	return this.moveTo(this.x + a, this.y + c, d, e, f, g)
};
BitmapText.prototype.fadeTo = function(a, c, d, e, f) {
	c = ~~c;
	if (0 >= c) this.opacity = a;
	else if (a = this.addTween("opacity", a, c, d, e, f)) a.play(), a.addEventListener("change", this.refreshOnTween), a.addEventListener("finish", this.refreshOnTween);
	return this
};
BitmapText.prototype.fadeBy = function(a, c, d, e, f) {
	a = Math.max(0, Math.min(1, this.opacity + a));
	return this.fadeTo(a, c, d, e, f)
};
BitmapText.prototype.rotateTo = function(a, c, d, e, f) {
	c = ~~c;
	if (0 >= c) this.rotation = a;
	else if (a = this.addTween("rotation", a, c, d, e, f)) a.play(), a.addEventListener("change", this.refreshOnTween), a.addEventListener("finish", this.refreshOnTween);
	return this
};
BitmapText.prototype.rotateBy = function(a, c, d, e, f) {
	return this.rotateTo(this.rotation + a, c, d, e, f)
};
BitmapText.prototype.scaleTo = function(a, c, d, e, f) {
	c = ~~c;
	if (0 >= c) this.scale = a;
	else if (a = this.addTween("scale", a, c, d, e, f)) a.play(), a.addEventListener("change", this.refreshOnTween), a.addEventListener("finish", this.refreshOnTween);
	return this
};

function TilesSprite(a, c, d, e, f, g) {
	TilesSprite.superclass.constructor.call(this, a, c, d, f, g);
	this.framesCount = e;
	this.animated = 1 < e;
	this.addEventListener("changeframe", TilesSprite.changeStep);
	this.addEventListener("prerender", TilesSprite.sync)
}
Utils.extend(TilesSprite, Sprite);
TilesSprite.prototype.currentFrameX = 0;
TilesSprite.create = function(a, c) {
	if ("string" == typeof a) {
		c = c || window.library;
		if (!c) throw Error("Could not create sprite from asset '%s'. Library not found.", a);
		a = c.getAsset(a)
	}
	return new TilesSprite(a.bitmap, a.width || 1, a.height || 1, a.framesCount || (a.frames || 1) * (a.layers || 1), a.frames || 1, a.layers || 1)
};
TilesSprite.prototype.gotoAndStop = function(a) {
	this.currentFrameX = a;
	this.stop()
};
TilesSprite.prototype.gotoAndPlay = function(a) {
	this.currentFrameX = a;
	this.play()
};
TilesSprite.changeStep = function(a) {
	a = a.target;
	a.animated && (a.currentFrameX += a.animDirection, 0 < a.animDirection && a.currentFrameX >= a.framesCount && (a.currentFrameX = 0), 0 > a.animDirection && 0 > a.currentFrameX && (a.currentFrameX = a.framesCount - 1))
};
TilesSprite.sync = function(a) {
	a = a.target;
	a.currentLayer = Math.floor(a.currentFrameX / a.totalFrames);
	a.currentFrame = a.currentFrameX - a.currentLayer * a.totalFrames
};
var assets = [{
		name: "char_jump",
		src: "anim/char_jump.png",
		frames: 13,
		layers: 2,
		width: 54,
		height: 48
	}, {
		name: "char_walk",
		src: "anim/char_walk.png",
		frames: 17,
		layers: 2,
		width: 56,
		height: 44
	}, {
		name: "enemy_1",
		src: "anim/enemy_1.png",
		frames: 17,
		layers: 2,
		width: 60,
		height: 48
	}, {
		name: "enemy_2",
		src: "anim/enemy_2.png",
		frames: 17,
		layers: 2,
		width: 60,
		height: 48
	}, {
		name: "enemy_3",
		src: "anim/enemy_3.png",
		frames: 17,
		layers: 2,
		width: 60,
		height: 48
	}, {
		name: "enemy_4",
		src: "anim/enemy_4.png",
		frames: 8,
		layers: 1,
		width: 42,
		height: 40
	}, {
		name: "background_preview",
		src: "background/background_preview.png",
		frames: 1,
		layers: 1,
		width: 320,
		height: 480
	}, {
		name: "bushes",
		src: "background/bushes.png",
		frames: 1,
		layers: 1,
		width: 320,
		height: 156
	}, {
		name: "cloud_1",
		src: "background/clouds/cloud_1.png",
		frames: 1,
		layers: 1,
		width: 130,
		height: 62
	}, {
		name: "cloud_2",
		src: "background/clouds/cloud_2.png",
		frames: 1,
		layers: 1,
		width: 98,
		height: 44
	}, {
		name: "cloud_3",
		src: "background/clouds/cloud_3.png",
		frames: 1,
		layers: 1,
		width: 122,
		height: 50
	}, {
		name: "cloud_4",
		src: "background/clouds/cloud_4.png",
		frames: 1,
		layers: 1,
		width: 80,
		height: 48
	}, {
		name: "cloud_5",
		src: "background/clouds/cloud_5.png",
		frames: 1,
		layers: 1,
		width: 84,
		height: 30
	}, {
		name: "crass",
		src: "background/crass.png",
		frames: 1,
		layers: 1,
		width: 320,
		height: 96
	}, {
		name: "lvl_1",
		src: "background/lvl_1.png",
		frames: 1,
		layers: 1,
		width: 320,
		height: 50
	}, {
		name: "lvl_2",
		src: "background/lvl_2.png",
		frames: 1,
		layers: 1,
		width: 320,
		height: 50
	}, {
		name: "lvl_3",
		src: "background/lvl_3.png",
		frames: 1,
		layers: 1,
		width: 320,
		height: 50
	}, {
		name: "mountains",
		src: "background/mountains.png",
		frames: 1,
		layers: 1,
		width: 320,
		height: 218
	}, {
		name: "sky",
		src: "background/sky.png",
		frames: 1,
		layers: 1,
		width: 320,
		height: 480
	}, {
		name: "trees",
		src: "background/trees.png",
		frames: 1,
		layers: 1,
		width: 320,
		height: 210
	}, {
		name: "btn_back",
		src: "btns/btn_back.png",
		frames: 1,
		layers: 1,
		width: 80,
		height: 80
	}, {
		name: "btn_facebook",
		src: "btns/btn_facebook.png",
		frames: 1,
		layers: 1,
		width: 62,
		height: 62
	}, {
		name: "btn_logo",
		src: "btns/btn_logo.png",
		frames: 1,
		layers: 1,
		width: 52,
		height: 52
	}, {
		name: "btn_more_games",
		src: "btns/btn_more_games.png",
		frames: 1,
		layers: 1,
		width: 52,
		height: 52
	}, {
		name: "btn_more_games_1",
		src: "btns/btn_more_games_1.png",
		frames: 1,
		layers: 1,
		width: 62,
		height: 62
	}, {
		name: "btn_restart",
		src: "btns/btn_restart.png",
		frames: 1,
		layers: 1,
		width: 138,
		height: 138
	}, {
		name: "btn_sound",
		src: "btns/btn_sound.png",
		frames: 2,
		layers: 1,
		width: 44,
		height: 44
	}, {
		name: "btn_twitter",
		src: "btns/btn_twitter.png",
		frames: 1,
		layers: 1,
		width: 62,
		height: 62
	}, {
		name: "credits_1",
		src: "credits/credits_1.png",
		frames: 1,
		layers: 1,
		width: 250,
		height: 422
	}, {
		name: "credits_2",
		src: "credits/credits_2.png",
		frames: 1,
		layers: 1,
		width: 250,
		height: 422
	}, {
		name: "font_blue_en",
		src: "fonts/font_blue_en.png",
		frames: 1,
		layers: 1,
		width: 934,
		height: 256
	}, {
		name: "font_blue_ru",
		src: "fonts/font_blue_ru.png",
		frames: 1,
		layers: 1,
		width: 319,
		height: 256
	}, {
		name: "font_green_en",
		src: "fonts/font_green_en.png",
		frames: 1,
		layers: 1,
		width: 934,
		height: 256
	}, {
		name: "font_green_ru",
		src: "fonts/font_green_ru.png",
		frames: 1,
		layers: 1,
		width: 319,
		height: 256
	}, {
		name: "font_red_en",
		src: "fonts/font_red_en.png",
		frames: 1,
		layers: 1,
		width: 857,
		height: 256
	}, {
		name: "font_red_ru",
		src: "fonts/font_red_ru.png",
		frames: 1,
		layers: 1,
		width: 304,
		height: 256
	}, {
		name: "complete_preview",
		src: "level_complete/complete_preview.png",
		frames: 1,
		layers: 1,
		width: 320,
		height: 558
	}, {
		name: "score_panel",
		src: "level_complete/score_panel.png",
		frames: 1,
		layers: 1,
		width: 286,
		height: 222
	}, {
		name: "left_tile",
		src: "tiles/left_tile.png",
		frames: 1,
		layers: 1,
		width: 50,
		height: 50
	}, {
		name: "right_tile",
		src: "tiles/right_tile.png",
		frames: 1,
		layers: 1,
		width: 50,
		height: 50
	}, {
		name: "tile_1",
		src: "tiles/tile_1.png",
		frames: 1,
		layers: 1,
		width: 50,
		height: 50
	}, {
		name: "logo",
		src: "logo.png",
		frames: 1,
		layers: 1,
		width: 304,
		height: 242
	}, {
		name: "bg_left",
		src: "tiles/bg_left.png",
		frames: 1,
		layers: 1,
		width: 27,
		height: 123
	}, {
		name: "bg_right",
		src: "tiles/bg_right.png",
		frames: 1,
		layers: 1,
		width: 27,
		height: 123
	},{
		name: "cn_txt",
		src: "cn/txt.png",
		frames: 1,
		layers: 1,
		width: 240,
		height: 50
	}],
	FaceBook = {
		getUserInfo: function(a, c) {
			FB.getLoginStatus(function(d) {
				"connected" === d.status ? (flag_fb = 1, "function" === typeof a && a(c)) : FB.login(function(d) {
					if (d.authResponse) flag_fb = 1, "function" === typeof a && a(c);
					else return flag_fb = 0, !1
				}, {
					scope: "publish_actions"
				})
			})
		},
		postOnWall: function(a) {
			FB.ui({
				method: "feed",
				name: "I've scored " + a + " in Jumping Snail game. You'll never beat me!",
				link: "http://playtomax.com/details/Jumping-Snail",
				picture: "http://public.playtomax.com/static/games/thumbs2x/jumping_snail.jpg",
				description: "Jumping snail is an jumping game, where you climb up the tree, avoiding of nasty bugs.",
				caption: "playtomax.com"
			})
		}
	},
	GAME_ID = "jumping_snail",
	stage = null,
	fps = 60,
	pps = 1E3,
	library = null,
	GET = {},
	LANDSCAPE_MODE = !1;
window.onload = function() {
	GET = Utils.parseGet();
	Utils.addMobileListeners(LANDSCAPE_MODE, !0);
	Utils.mobileCorrectPixelRatio();
	Utils.addFitLayoutListeners();
	ExternalAPI.exec("init");
	Utils.switchToTimeMode(1E3 / fps);
	setTimeout(startLoad, 600)
};

function startLoad() {
	var a = Utils.getMobileScreenResolution(LANDSCAPE_MODE);
	GET.debug && (a = Utils.getScaleScreenResolution(1, LANDSCAPE_MODE));
	if (Utils.mobileCheckSlowDevice() || Utils.isFirefox()) a = Utils.getScaleScreenResolution(1, LANDSCAPE_MODE);
	Utils.globalScale = a.scale;
	Utils.createLayout(document.getElementById(Utils.DOMMainContainerId), a);
	Utils.addEventListener("fitlayout", function() {
		stage && (stage.drawScene(stage.canvas), stage.drawScene(stage.backgroundCanvas, !0));
		resizeCSSBack()
	});
	Utils.addEventListener("lockscreen",
		function() {
			stage && stage.started && stage.stop()
		});
	Utils.addEventListener("unlockscreen", function() {
		stage && !stage.started && stage.start()
	});
	Utils.mobileHideAddressBar();
	UserSettings.load();
	I18.initLocale();
	["font_blue", "font_green", "font_red"].forEach(function(a) {
		GU.addJSFile("js/fonts/" + a + "_" + I18.currentLocale + ".js")
	});
	GET.debug || Utils.checkOrientation(LANDSCAPE_MODE);
	library = new AssetsLibrary("images", Utils.globalScale, assets);
	TTLoader.create(loadSoundsEnd, !0, 1 == GET.debug);
	library.load(loadImagesEnd,
		TTLoader.showLoadProgress, 0, 50)
}

function loadImagesEnd() {
	for (var a = [], c = 0; c < SoundUtils.tracks.length; c++) a.push("sounds/" + SoundUtils.tracks[c]);
	c = new SoundsPreloader;
	c.maxProgressVal = 50;
	c.minProgressVal = 50;
	c.load(a, TTLoader.loadComplete, TTLoader.showLoadProgress)
}

function loadSoundsEnd() {
	SoundUtils.setMixer();
	SoundUtils.playBack();
	Utils.showMainLayoutContent();
	createScene()
}
var backgroundImage = null;

function setCSSBack(a) {
	if (a) {
		backgroundImage = a;
		var c = document.getElementById("screen_background_container");
		c.style.backgroundImage = "url(" + a.src + ")";
		c.style.backgroundRepeat = "repeat"
	}
	resizeCSSBack()
}

function resizeCSSBack() {
	backgroundImage && Utils.getWindowRect()
}

function createStage() {
	stage && (stage.destroy(), stage.stop());
	stage = new Stage("screen", 320, 480, !1);
	stage.setBackgroundCanvas("screen_background");
	stage.delay = 1E3 / fps;
	stage.ceilSizes = !0;
	stage.showFPS = !1
}

function createScene() {
	createStage();
	setCSSBack(library.getBitmap("tile_1"));
	MainScene.start();
	stage.start();
	stage.refreshBackground()
}

function getGameDataId() {
	return "playtomax_" + GAME_ID + "_data"
}

function showMoreGames() {
	if(document.referrer){
		// Play68.goHome();
	}else{
		// play68_goHome();
	}

	
	/*window.open(ExternalAPI.exec("getMoreGamesURL"), "_blank");
	return !1*/
}

function getStageWidth() {
	return Math.floor(LANDSCAPE_MODE ? 480 : 320)
}

function getStageHeight() {
	return Math.floor(LANDSCAPE_MODE ? 320 : 480)
}

function getStageWidthCenter() {
	return getStageWidth() / 2
}

function getStageHeightCenter() {
	return getStageHeight() / 2
}
var I18 = {
		currentLocale: "en",
		supportedLanguage: ["en", "ru"],
		strings: {},
		init: function(a) {
			Utils.get("localization/" + I18.currentLocale + ".csv", null, null, function(c) {
				var d = {};
				c = c.split("\n");
				for (var e, f = 0; f < c.length; f++) e = c[f].split(";"), d[I18.trim(e[0])] = I18.trim(e[1]);
				I18.setup(d);
				"function" === typeof a && a()
			})
		},
		initLocale: function() {
			if (!I18.currentLocale) {
				var a = window.navigator.language ? window.navigator.language.substr(0, 2) : "";
				0 > I18.supportedLanguage.indexOf(a) && (a = I18.supportedLanguage[0]);
				I18.currentLocale =
					a
			}
		},
		setup: function(a) {
			I18.strings = a
		},
		trim: function(a) {
			return a ? a.replace(/^\s+|\s+$/gm, "") : ""
		},
		arrayAntidot: function(a) {
			if (a) return 0 < a.length && Utils.isArray(a[0]) ? a[0] : a
		},
		getString: function(a, c) {
			"undefined" == typeof c && (c = null);
			var d = I18.getStringOrNull(a, c);
			return null == d ? "{" + a + "}" : d
		},
		getStringOrNull: function(a, c) {
			"undefined" == typeof c && (c = null);
			var d = I18.strings[a];
			"undefined" == typeof d && (d = null);
			if (null == c || null == d) return d;
			c = [d].concat(I18.arrayAntidot(c));
			return I18.sprintf.apply(I18, c)
		},
		f: function(a) {
			var c =
				I18.arrayAntidot(Array.prototype.slice.call(arguments, 1));
			Utils.isArray(c) || (c = [c]);
			return I18.getString(a, c)
		},
		s: function(a, c, d) {
			Utils.isArray(d) || (d = [d]);
			return I18.getString(a + "_" + c, I18.arrayAntidot(d))
		},
		sf: function(a, c, d) {
			return I18.getString(a + "_" + c, I18.arrayAntidot(d))
		},
		psf: function(a, c, d, e, f) {
			return I18.getString(a + "_" + c + "_" + d, I18.arrayAntidot(e))
		},
		sprintf: function() {
			var a = arguments,
				c = 0,
				d = function(a, c, d, e) {
					d || (d = " ");
					c = a.length >= c ? "" : Array(1 + c - a.length >>> 0).join(d);
					return e ? a + c : c + a
				},
				e = function(a,
					c, e, f, m, n) {
					var p = f - a.length;
					0 < p && (a = e || !m ? d(a, f, n, e) : a.slice(0, c.length) + d("", p, "0", !0) + a.slice(c.length));
					return a
				},
				f = function(a, c, f, k, m, n, p) {
					a >>>= 0;
					f = f && a && {
						2: "0b",
						8: "0",
						16: "0x"
					}[c] || "";
					a = f + d(a.toString(c), n || 0, "0", !1);
					return e(a, f, k, m, p)
				};
			return a[c++].replace(/%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g, function(g, h, l, k, m, n, p) {
				var q, u;
				if ("%%" === g) return "%";
				var t = !1;
				u = "";
				var v = m = !1;
				q = " ";
				for (var x = l.length, w = 0; l && w < x; w++) switch (l.charAt(w)) {
					case " ":
						u = " ";
						break;
					case "+":
						u = "+";
						break;
					case "-":
						t = !0;
						break;
					case "'":
						q = l.charAt(w + 1);
						break;
					case "0":
						m = !0;
						q = "0";
						break;
					case "#":
						v = !0
				}
				k = k ? "*" === k ? +a[c++] : "*" == k.charAt(0) ? +a[k.slice(1, -1)] : +k : 0;
				0 > k && (k = -k, t = !0);
				if (!isFinite(k)) throw Error("sprintf: (minimum-)width must be finite");
				n = n ? "*" === n ? +a[c++] : "*" == n.charAt(0) ? +a[n.slice(1, -1)] : +n : -1 < "fFeE".indexOf(p) ? 6 : "d" === p ? 0 : void 0;
				h = h ? a[h.slice(0, -1)] : a[c++];
				switch (p) {
					case "s":
						return p = String(h), null != n && (p = p.slice(0, n)), e(p, "", t, k, m, q);
					case "c":
						return p = String.fromCharCode(+h),
							null != n && (p = p.slice(0, n)), e(p, "", t, k, m, void 0);
					case "b":
						return f(h, 2, v, t, k, n, m);
					case "o":
						return f(h, 8, v, t, k, n, m);
					case "x":
						return f(h, 16, v, t, k, n, m);
					case "X":
						return f(h, 16, v, t, k, n, m).toUpperCase();
					case "u":
						return f(h, 10, v, t, k, n, m);
					case "i":
					case "d":
						return q = +h || 0, q = Math.round(q - q % 1), g = 0 > q ? "-" : u, h = g + d(String(Math.abs(q)), n, "0", !1), e(h, g, t, k, m);
					case "e":
					case "E":
					case "f":
					case "F":
					case "g":
					case "G":
						return q = +h, g = 0 > q ? "-" : u, u = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(p.toLowerCase())], p = ["toString",
							"toUpperCase"
						]["eEfFgG".indexOf(p) % 2], h = g + Math.abs(q)[u](n), e(h, g, t, k, m)[p]();
					default:
						return g
				}
			})
		}
	},
	UserSettings = {
		cookieObj: {},
		load: function() {
			var a = Utils.getCookie(getGameDataId());
			a && (UserSettings.cookieObj = JSON.parse(a));
			UserSettings.music = 1;
			UserSettings.points = UserSettings.cookieObj.points || 0;
			UserSettings.skin = UserSettings.cookieObj.skin || 0
		},
		save: function() {
			UserSettings.cookieObj.music = UserSettings.music;
			UserSettings.cookieObj.points = UserSettings.points;
			Utils.setCookie(getGameDataId(), JSON.stringify(UserSettings.cookieObj))
		},
		reset: function() {
			UserSettings.cookieObj.points = 0;
			UserSettings.save()
		}
	},
	GameConfig = {
		level: {}
	};
GameConfig.level.borderWidth = 20;
GameConfig.level.topBorderHeight = 65;
GameConfig.level.bottomBorderHeight = 90;
GameConfig.level.speedY = 220;
GameConfig.level.doubleTapDuration = 800;
GameConfig.snail = {};
GameConfig.snail.speedX = 130;
GameConfig.snail.hitAreaRadius = 12;
GameConfig.snail.jumpDuration = 400;
GameConfig.snail.jumpHighDuration = 300;
GameConfig.snail.jumpPostHighDuration = 200;
GameConfig.snail.jumpEasing = "cubic.easeOut";
GameConfig.snail.jumpFallEasing = "cubic.easeIn";
GameConfig.snail.jumpHighEasing = "cubic.easeOut";
GameConfig.snail.jumpPostHighEasing = "cubic.easeIn";
GameConfig.snail.jumpSpeedXKoef = 1.6;
GameConfig.stick = {};
GameConfig.stick.y0 = 165;
GameConfig.stick.dY = 110;
GameConfig.enemy = {};
GameConfig.enemy.speeds = [60, 70, 80, 90, 100];
var SoundUtils = {
		tracks: "fail jump landing music tap win".split(" "),
		soundEnable: !1,
		effectEnable: !1,
		mixer: null,
		soundBtn: null,
		effectBtn: null,
		iosMode: !1,
		android: !1,
		currentTrack: "",
		channel_cnt: 10,
		playBack: function() {
			SoundUtils.mixer && SoundUtils.soundEnable && "music" != SoundUtils.currentTrack && (SoundUtils.mixer.play("music", !0, !1, 0), SoundUtils.currentTrack = "music")
		},
		setMixer: function() {
			SoundUtils.iosMode = -1 != navigator.userAgent.toLowerCase().indexOf("mac");
			Utils.isAndroid() && (SoundUtils.android = !0);
			var a =
				AudioMixer.isWebAudioSupport() ? SoundUtils.channel_cnt : 1;
			SoundUtils.mixer = new AudioMixer("sounds", a);
			1 == UserSettings.music && (SoundUtils.soundEnable = !0, SoundUtils.effectEnable = !0)
		},
		setSoundBtn: function() {
			SoundUtils.soundBtn.gotoAndStop(SoundUtils.soundEnable ? 0 : 1)
		},
		switchSoundBtn: function() {
			if (!SoundUtils.soundBtn) return !1;
			SoundUtils.soundEnable ? SoundUtils.offSoundBtn() : SoundUtils.onSoundBtn();
			return !1
		},
		onSoundBtn: function() {
			if (!SoundUtils.soundBtn) return !1;
			SoundUtils.soundBtn.gotoAndStop(0);
			SoundUtils.soundEnable = !0;
			SoundUtils.playBack();
			UserSettings.music = 1;
			UserSettings.save()
		},
		offSoundBtn: function() {
			if (!SoundUtils.soundBtn || !SoundUtils.mixer) return !1;
			SoundUtils.soundBtn.gotoAndStop(1);
			SoundUtils.soundEnable = !1;
			SoundUtils.mixer.stop(0);
			SoundUtils.currentTrack = "";
			UserSettings.music = 0;
			UserSettings.save()
		},
		playEffect: function(a) {
			if (!AudioMixer.isWebAudioSupport()) return !1;
			SoundUtils.mixer && SoundUtils.soundEnable && SoundUtils.mixer.play(a, !1, !0)
		}
	},
	GU = {
		addJSFile: function(a) {
			var c = document.createElement("script");
			c.src = a;
			document.getElementsByTagName("head")[0].appendChild(c)
		},
		destroyMeAfterTween: function(a) {
			a.target.obj.destroy = !0
		},
		preventMe: function() {
			return !1
		},
		setS: function(a, c, d, e, f) {
			c = c ? library.getSprite(c ? c : null, null, OwnSprite) : new OwnSprite(null, 1, 1);
			c.setPosition(d, e);
			GU.applyProperties(c, f);
			a.addChild(c);
			return c
		},
		setTS: function(a, c, d, e, f) {
			c = library.getAsset(c);
			c = new TilesSprite(c.bitmap, c.width, c.height, f._frames, c.frames, c.layers);
			GU.applyProperties(c, f);
			c.setPosition(d, e);
			a.addChild(c);
			return c
		},
		setG: function(a, c, d, e, f) {
			c = new Graphics[c](d, e);
			GU.applyProperties(c, f);
			a.addChild(c);
			return c
		},
		setGT: function(a, c, d, e, f) {
			c = new Graphics.text(d, e, c);
			GU.applyProperties(c, f);
			a.addChild(c);
			return c
		},
		setST: function(a, c, d, e, f, g) {
			c = library.getAsset(c);
			c = new SimpleText(c.bitmap, c.width, c.height, c.frames);
			c.setPosition(e, f);
			c.parent = a;
			GU.applyProperties(c, g);
			c.write(d);
			return c
		},
		setBT: function(a, c, d, e, f, g) {
			c = c + "_" + I18.currentLocale;
			var h = window[c];
			c = new BitmapText(library.getBitmap(c), h);
			c.setPosition(e,
				f);
			c.parent = a;
			GU.applyProperties(c, g);
			c.write(d);
			return c
		},
		applyProperties: function(a, c) {
			var d, e;
			for (e in c) d = c[e], "zI" == e || "zIndex" == e ? a.setZIndex(d) : "static" == e || "s" == e ? a.setStatic(d) : "w" == e ? a.width = d : "h" == e ? a.height = d : "fC" == e ? a.fillColor = d : "o" == e ? a.opacity = d : "r" == e ? a.rotation = d : "a" == e ? a.align = d : "vA" == e ? a.valign = d : a[e] = d
		}
	};
GU.center = {
	x: getStageWidthCenter(),
	y: getStageHeightCenter()
};
GU.Math = {};
GU.Math.calcLength = function(a, c, d, e) {
	a -= d;
	c -= e;
	return ~~Math.sqrt(a * a + c * c)
};
GU.Math.calcAngle = function(a, c, d, e, f) {
	a = Math.atan2(c - e, a - d);
	if (f) return a;
	a = ~~Utils.radian2grad(a);
	0 > a && (a = 360 + a);
	return a
};
GU.Math.circleIntersectLine = function(a, c, d, e, f, g, h) {
	var l = Math.calcLength(e, f, c, d),
		k = Math.calcLength(g, h, c, d);
	if (l <= a || k <= a) return !0;
	var k = (h - f) / (g - e),
		l = -1 / k,
		l = (k * e - f - l * c + d) / (k - l),
		k = k * (l - e) + f,
		m = !0;
	g > e ? l >= e && l <= g || (m = !1) : l >= g && l <= e || (m = !1);
	h > f ? k >= f && k <= h || (m = !1) : k >= h && k <= f || (m = !1);
	return m ? Math.calcLength(c, d, l, k) < a ? !0 : !1 : !1
};
GU.Math.circleIntersectRect = function(a, c, d, e, f, g, h) {
	return g < c ? f < a ? (f - a) * (f - a) + (g - c) * (g - c) <= h * h : f > d ? (f - d) * (f - d) + (g - c) * (g - c) <= h * h : c - g <= h : g > e ? f < a ? (f - a) * (f - a) + (g - e) * (g - e) <= h * h : f > d ? (f - d) * (f - d) + (g - e) * (g - e) <= h * h : g - e <= h : f < a ? a - f <= h : f > d ? f - d <= h : f - a <= h || d - f <= h || g - c <= h || e - g <= h
};
GU.Math.getRandomValue = function(a, c) {
	return Math.floor(Math.random() * (c + 1 - a)) + a
};
GU.Array = {};
GU.Array.getRandomValue = function(a) {
	var c = Math.floor(Math.random() * a.length);
	return a[c]
};
GU.Array.isPresentValue = function(a, c) {
	return 0 <= a.indexOf(c)
};
GU.Array.deleteElement = function(a, c) {
	a.splice(a.indexOf(c), 1)
};

function OwnSprite(a, c, d, e, f) {
	Utils.callSuperConstructor(OwnSprite, this, a, c, d, e, f)
}
Utils.extend(OwnSprite, Sprite);
OwnSprite.prototype.preventAllEvents = function() {
	this.addEventListener("mousedown", GU.preventMe);
	this.addEventListener("mouseup", GU.preventMe);
	this.addEventListener("mousemove", GU.preventMe);
	this.addEventListener("mouseout", GU.preventMe);
	this.addEventListener("mouseover", GU.preventMe);
	this.addEventListener("click", GU.preventMe)
};
OwnSprite.prototype.dd = function() {
	this.onmousedown = function(a) {
		this.startDrag(a.x, a.y);
		return !1
	};
	this.onmouseup = function(a) {
		this.stopDrag();
		console.log(~~this.x, ~~this.y);
		return !1
	}
};
OwnSprite.prototype.destroyMe = function() {
	this.destroy = !0
};
OwnSprite.prototype.checkStaticSprites = function(a) {
	function c(d) {
		d.static || (a && console.log(d[a]), e++);
		if (d.objects)
			for (var f = 0; f < d.objects.length; f++) c(d.objects[f])
	}

	function d(c) {
		c.static && (a && console.log(c[a]), h++);
		if (c.objects)
			for (var e = 0; e < c.objects.length; e++) d(c.objects[e])
	}
	console.log("-----------------------\x3e");
	console.log("DYNAMIC SPRITES:");
	for (var e = 0, f = 0; f < this.objects.length; f++) {
		var g = this.objects[f];
		c(g)
	}
	console.log("Total dynamic count: " + e);
	console.log("STATIC SPRITES:");
	for (var h =
			0, f = 0; f < this.objects.length; f++) g = this.objects[f], d(g);
	console.log("Total static count: " + h);
	console.log("<-----------------------")
};

function Button(a, c, d, e, f) {
	Utils.callSuperConstructor(Button, this, null, 1, 1);
	a = library.getAsset("name");
	this.bitmap = a.bitmap;
	this.width = a.width;
	this.height = a.height;
	this.totalFrames = a.frames;
	this.totalLayers = a.layers;
	this.mouseDownHandler = Utils.proxy(this.mouseDownHandler, this);
	this.mouseUpHandler = Utils.proxy(this.mouseUpHandler, this);
	this.mouseOverHandler = Utils.proxy(this.mouseOverHandler, this);
	this.mouseDownHandler = Utils.proxy(this.mouseDownHandler, this);
	this.mouseMoveHandler = Utils.proxy(this.mouseMoveHandler,
		this);
	this.clickHandler = Utils.proxy(this.clickHandler, this)
}
Utils.extend(Button, OwnSprite);
Button.prototype.addListeners = function() {
	this.addEventListener("mousedown", this.mouseDownHandler);
	this.addEventListener("mouseup", this.mouseUpHandler);
	this.addEventListener("mousemove", this.mouseMoveHandler);
	this.addEventListener("mouseover", this.mouseOverHandler);
	this.addEventListener("mouseout", this.mouseOutHandler);
	this.addEventListener("click", this.clickHandler)
};
Button.prototype.setStartSkin = function() {};
Button.prototype.mouseDownHandler = function() {};
Button.prototype.mouseUpHandler = function() {};
Button.prototype.mouseOverHandler = function() {};
Button.prototype.mouseOutHandler = function() {};
Button.prototype.mouseMoveHandler = function() {};
Button.prototype.clickHandler = function() {};

function Enemy() {
	this.type = GU.Math.getRandomValue(1, 4);
	var a = library.getAsset("enemy_" + this.type);
	Utils.callSuperConstructor(Enemy, this, a.bitmap, a.width, a.height, a.frames * a.layers, a.frames, a.layers);
	this.changeFrameDelay = pps / 24;
	this.direction = GU.Math.getRandomValue(Enemy.DIRECTION_RIGHT, Enemy.DIRECTION_LEFT);
	this.scaleX = this.direction == Enemy.DIRECTION_RIGHT ? 1 : -1;
	this.speedX = GU.Array.getRandomValue(GameConfig.enemy.speeds);
	this.collisionArea = {
		r: 4 != this.type ? 22 : 18
	}
}
Utils.extend(Enemy, TilesSprite);
Enemy.prototype.set = function() {
	this.setPosition(100, -25)
};
Enemy.prototype.changeDirection = function() {
	this.direction = !this.direction;
	this.scaleX *= -1
};
Enemy.prototype.step = function(a) {
	a *= this.speedX / 1E3;
	this.x += this.direction == Snail.DIRECTION_RIGHT ? a : -a;
	this.x >= GU.center.x - GameConfig.level.borderWidth && this.direction == Enemy.DIRECTION_RIGHT ? this.changeDirection() : this.x <= -GU.center.x + GameConfig.level.borderWidth && this.direction == Enemy.DIRECTION_LEFT && this.changeDirection()
};
Enemy.DIRECTION_RIGHT = 0;
Enemy.DIRECTION_LEFT = 1;
Enemy.add = function(a) {
	var c = new Enemy;
	a.addChild(c);
	c.set();
	return c
};

function Stick(a) {
	this.id = a;
	this.enemy = null;
	this.type = GU.Math.getRandomValue(1, 3);
	Utils.callSuperConstructor(Stick, this, null, 1, 1)
}
Utils.extend(Stick, OwnSprite);
Stick.prototype.set = function() {
	var a = GameConfig.stick.y0 - this.id * GameConfig.stick.dY;
	this.stickSpr = 0 == this.id ? GU.setS(this, "crass", 0, 32) : GU.setS(this, "lvl_" + this.type, 0, 0);
	this.setPosition(0, a);
	this.checkIsEmpty() || this.setEnemy()
};
Stick.prototype.setEnemy = function() {
	this.enemy = Enemy.add(this.stickSpr)
};
Stick.prototype.trim = function() {
	0 != this.id && Animation.play(this.stickSpr, [{
		tweens: [{
			prop: "y",
			to: 5,
			ease: Easing.quadratic.easeIn
		}],
		duration: 100
	}, {
		tweens: [{
			prop: "y",
			to: 0,
			ease: Easing.bounce.easeOut
		}],
		duration: 600
	}])
};
Stick.prototype.checkIsEmpty = function() {
	for (var a = 0, c = 0, d = !1; c <= this.id;) c += a, a++, c == this.id && (d = !0);
	return d
};
Stick.add = function(a, c) {
	var d = new Stick(c);
	a.addChild(d);
	d.set();
	return d
};

function Snail() {
	var a = library.getAsset("char_walk");
	Utils.callSuperConstructor(Snail, this, a.bitmap, a.width, a.height, a.frames * a.layers, a.frames, a.layers);
	this.endJump = Utils.proxy(this.endJump, this);
	this.checkJump = Utils.proxy(this.checkJump, this);
	this.changeDirection = Utils.proxy(this.changeDirection, this);
	this.checkSkinFrame = Utils.proxy(this.checkSkinFrame, this);
	this.changeFrameDelay = pps / 24;
	this.stickId = 0;
	this.direction = Snail.DIRECTION_RIGHT;
	this.collisionArea = {
		r: 22
	}
}
Utils.extend(Snail, TilesSprite);
Snail.prototype.set = function() {
	this.setPosition(0, GameConfig.stick.y0 - 25)
};
Snail.prototype.startInMenu = function() {
	this.state = Snail.STATE_START
};
Snail.prototype.setSkin = function(a) {
	var c = library.getAsset(a);
	this.bitmap = c.bitmap;
	this.width = c.width;
	this.height = c.height;
	this.currentFrameX = 0;
	this.totalFrames = c.frames;
	this.totalLayers = c.layers;
	this.framesCount = c.frames * c.layers;
	"char_walk" == a ? (this.changeFrameDelay = pps / 24, this.removeCheckSkinListener()) : (this.changeFrameDelay = Math.min(2 * GameConfig.snail.jumpDuration, GameConfig.snail.jumpHighDuration + GameConfig.snail.jumpPostHighDuration) / this.framesCount, this.addCheckSkinListener())
};
Snail.prototype.addCheckSkinListener = function() {
	this.addEventListener("changeframe", this.checkSkinFrame)
};
Snail.prototype.removeCheckSkinListener = function() {
	this.removeEventListener("changeframe", this.checkSkinFrame)
};
Snail.prototype.checkSkinFrame = function() {
	this.currentFrameX == this.framesCount - 1 && this.setSkin("char_walk")
};
Snail.prototype.jump = function(a) {
	this.endJumpCallback = a;
	this.jumping = !0;
	this.startJumpY = this.y;
	this.currentTime = 0;
	this.setSkin("char_jump");
	SoundUtils.playEffect("jump")
};
Snail.prototype.playJumping = function(a) {
	this.y = Snail.getEasing(GameConfig.snail.jumpEasing)(this.currentTime, this.startJumpY, .8 * -GameConfig.stick.dY, GameConfig.snail.jumpDuration);
	this.currentTime += a;
	this.currentTime > GameConfig.snail.jumpDuration && (this.y = this.startJumpY - .8 * GameConfig.stick.dY, this.currentTime = 0, this.jumping = !1, this.startJumpY = this.y, this.fallJumping = !0)
};
Snail.prototype.playFallingJump = function(a) {
	this.y = Snail.getEasing(GameConfig.snail.jumpFallEasing)(this.currentTime, this.startJumpY, .8 * GameConfig.stick.dY, GameConfig.snail.jumpDuration);
	this.currentTime += a;
	this.currentTime > GameConfig.snail.jumpDuration && (this.y = this.startJumpY + .8 * GameConfig.stick.dY, this.jumping = this.fallJumping = !1, this.endJump())
};
Snail.prototype.prepareForHighJump = function() {
	this.stickId++;
	MainScene.area.makeParallaxStep();
	this.currentTime = 0;
	this.startJumpY = this.y;
	this.highJumping = !0;
	this.fallJumping = this.jumping = !1
};
Snail.prototype.playHighJump = function(a) {
	var c = GameConfig.stick.y0 - 25 - this.stickId * GameConfig.stick.dY - .1 * GameConfig.stick.dY;
	this.y = Snail.getEasing(GameConfig.snail.jumpHighEasing)(this.currentTime, this.startJumpY, c - this.startJumpY, GameConfig.snail.jumpHighDuration);
	this.currentTime += a;
	this.currentTime > GameConfig.snail.jumpHighDuration && (this.y = c, this.jumping = this.highJumping = !1, this.startJumpY = this.y, this.highPostJumping = !0, this.currentTime = 0)
};
Snail.prototype.playPostHighJump = function(a) {
	var c = GameConfig.stick.y0 - 25 - this.stickId * GameConfig.stick.dY;
	this.y = Snail.getEasing(GameConfig.snail.jumpPostHighEasing)(this.currentTime, this.startJumpY, c - this.startJumpY, GameConfig.snail.jumpPostHighDuration);
	this.currentTime += a;
	this.currentTime > GameConfig.snail.jumpPostHighDuration && (this.y = c, this.highPostJumping = !1, this.endJump(), MainScene.level.addPoints())
};
Snail.prototype.endJump = function() {
	this.endJumpCallback()
};
Snail.prototype.showDeath = function() {
	this.state = Snail.STATE_DEAD
};
Snail.prototype.changeDirection = function() {
	this.direction = !this.direction;
	this.scaleX *= -1
};
Snail.prototype.step = function(a) {
	a = GameConfig.snail.speedX / 1E3 * a * (this.jumping || this.highJumping || this.highPostJumping ? GameConfig.snail.jumpSpeedXKoef : 1);
	this.x += this.direction == Snail.DIRECTION_RIGHT ? a : -a;
	this.x >= GU.center.x - GameConfig.level.borderWidth && this.direction == Snail.DIRECTION_RIGHT ? this.changeDirection() : this.x <= -GU.center.x + GameConfig.level.borderWidth && this.direction == Snail.DIRECTION_LEFT && this.changeDirection()
};
Snail.prototype.showDeathAnimation = function(a) {
	Animation.play(this, [{
		tweens: [],
		duration: 300
	}, {
		tweens: [{
			prop: "y",
			from: this.y,
			to: this.y + 400,
			ease: Easing.quadratic.easeIn
		}, {
			prop: "rotation",
			to: this.direction == Snail.DIRECTION_RIGHT ? -Math.PI : Math.PI,
			ease: Easing.linear.easeOut
		}],
		duration: 750,
		onfinish: a
	}])
};
Snail.getEasing = function(a) {
	a = a.split(".");
	return Easing[a[0]][a[1]]
};
Snail.DIRECTION_RIGHT = 0;
Snail.DIRECTION_LEFT = 1;
Snail.STATE_SLEEP = 0;
Snail.STATE_FALL = 1;
Snail.STATE_JUMP = 2;
Snail.STATE_DEAD = 3;
Snail.STATE_START = 4;
Snail.add = function(a) {
	var c = new Snail;
	a.addChild(c);
	c.set();
	return c
};

function MainScene() {
	Utils.callSuperConstructor(MainScene, this, null, 1, 1)
}
Utils.extend(MainScene, OwnSprite);
MainScene.prototype.set = function() {
	this.setBack()
};
MainScene.prototype.setBack = function() {
	GU.setS(this, "sky", 0, 0, {
		static: !0
	});
	this.mountains = GU.setS(this, "mountains", 0, -15, {
		static: !1,
		startY: -15
	});
	this.bushes = GU.setS(this, "bushes", 0, 50, {
		static: !1,
		startY: 50
	});
	this.trees = GU.setS(this, "trees", 0, 135, {
		static: !1,
		startY: 135
	});
	GU.setS(this, "cloud_1", -92, -208);
	GU.setS(this, "cloud_2", 75, -190);
	this.fastShowMenuSpr = GU.setS(this, null, 0, 0, {
		w: 2 * GU.center.x,
		h: 2 * GU.center.y
	});
	this.setTiles();
	this.soundBtn = GU.setS(this, "btn_sound", 133, -210);
	this.soundBtn.setZIndex(100);
	this.soundBtn.addEventListener("mousedown", SoundUtils.switchSoundBtn);
	this.soundBtn.addEventListener("mouseup", GU.preventMe);
	SoundUtils.soundBtn = this.soundBtn;
	SoundUtils.setSoundBtn()
};
MainScene.prototype.setTiles = function() {
	this.tilesSpr = GU.setS(this, null, 0, 0);
	this.tilesSpr.setZIndex(100);
	for (var a = -GU.center.x + 13, c = GU.center.x - 13, d = 0; 5 > d; d++) GU.setS(this.tilesSpr, "bg_left", a, -178 + 120 * d), GU.setS(this.tilesSpr, "bg_right", c, -178 + 120 * d)
};
MainScene.prototype.makeParallaxStep = function() {
	this.tween1 && this.tween1.stop();
	this.tween2 && this.tween2.stop();
	this.tween3 && this.tween3.stop();
	this.tween1 = this.mountains.addTween("y", this.mountains.y + 12, 1E3).play();
	this.tween2 = this.bushes.addTween("y", this.bushes.y + 13, 1E3).play();
	this.tween3 = this.trees.addTween("y", this.trees.y + 14, 1E3).play()
};
MainScene.prototype.addBackListener = function() {
	this.fastShowMenuSpr.addEventListener("mouseup", Utils.proxy(this.fastStartMenu, this))
};
MainScene.prototype.removeBackListener = function() {
	this.fastShowMenuSpr.removeAllEventListeners()
};
MainScene.prototype.resetParallax = function() {
	this.mountains.y = this.mountains.startY;
	this.bushes.y = this.bushes.startY;
	this.trees.y = this.trees.startY
};
MainScene.prototype.setMenu = function() {
	MainScene.level && MainScene.level.destroyMe();
	this.setLevel();
	MainScene.menu = Menu.add(this);
	MainScene.menu.setZIndex(50)
};
MainScene.prototype.fastStartMenu = function() {
	this.removeBackListener();
	MainScene.snail.startCallback = null;
	Menu.show();
	return !1
};
MainScene.prototype.setLevel = function() {
	this.resetParallax();
	MainScene.level = Level.add(this);
	MainScene.level.setZIndex(50)
};
MainScene.prototype.setPopup = function(a) {
	MainScene.popup = Popup.add(this, a);
	MainScene.popup.setZIndex(50)
};
MainScene.MENU_SCENE = 0;
MainScene.GAME_SCENE = 1;
MainScene.POPUP_SCENE = 2;
MainScene.CREDITS_SCENE = 3;
MainScene.currentScene = MainScene.MENU_SCENE;
MainScene.area = null;
MainScene.snail = null;
MainScene.start = function() {
	MainScene.area = new MainScene;
	MainScene.area.setPosition(GU.center.x, GU.center.y);
	stage.addChild(MainScene.area);
	MainScene.area.set();
	MainScene.area.setMenu()
};

function Level() {
	Utils.callSuperConstructor(Level, this, null, 1, 1);
	this.clickOnBack = Utils.proxy(this.clickOnBack, this);
	this.endJump = Utils.proxy(this.endJump, this);
	this.tick = Utils.proxy(this.tick, this);
	this.showPopup = Utils.proxy(this.showPopup, this);
	this.unBlockClick = Utils.proxy(this.unBlockClick, this);
	this.lastStickId = 0;
	this.sticks = [];
	this.points = 0
}
Utils.extend(Level, OwnSprite);
Level.prototype.set = function() {
	this.movingSprite = GU.setS(this, null, 0, 0, {
		w: 2 * GU.center.x,
		h: 2 * GU.center.y
	});
	this.stickSpr = GU.setS(this.movingSprite, null, 0, 0, {
		w: 1,
		h: 1
	});
	this.startSleepMode();
	this.setSnail()
};
Level.prototype.setSnail = function() {
	MainScene.snail = Snail.add(this.movingSprite)
};
Level.prototype.startSleepMode = function() {
	this.state = Level.STATE_MENU;
	this.setSticks()
};
Level.prototype.startActiveMode = function() {
	this.state = Level.STATE_ACTIVE;
	this.pointsText = GU.setBT(this, "font_blue", this.points, 0, -260, {
		a: BitmapText.ALIGN_CENTER
	});
	this.pointsText.moveTo(0, -180, pps / 2, Easing.cubic.easeOut);
	this.listenerSpr = GU.setS(this, null, 0, 0, {
		w: 2 * GU.center.x,
		h: 2 * GU.center.y
	});
	this.addBackListener();
	stage.addEventListener("pretick", this.tick)
};
Level.prototype.tick = function(a) {
	MainScene.snail.step(a.delta);
	for (var c = 0, d = 0; d < this.sticks.length; d++) {
		var e = this.sticks[d];
		e.id == MainScene.snail.stickId && (c = e.y, e.getAbsolutePosition().y < GU.center.y + GameConfig.stick.y0 ? this.moveLevelDownByY(a.delta) : this.movingSprite.y = GameConfig.stick.y0 - c);
		if (e.enemy) {
			if (e.id == MainScene.snail.stickId) {
				var c = e.enemy.getAbsolutePosition(),
					f = MainScene.snail.getAbsolutePosition();
				if (GU.Math.calcLength(c.x, c.y, f.x, f.y) <= e.enemy.collisionArea.r + MainScene.snail.collisionArea.r) {
					this.showGameOver();
					return
				}
			}
			e.enemy.step(a.delta)
		}
	}
	MainScene.snail.highJumping ? MainScene.snail.playHighJump(a.delta) : MainScene.snail.highPostJumping ? MainScene.snail.playPostHighJump(a.delta) : MainScene.snail.jumping ? MainScene.snail.playJumping(a.delta) : MainScene.snail.fallJumping && MainScene.snail.playFallingJump(a.delta);
	this.sticks[0].getAbsolutePosition().y > 2 * GU.center.y + 50 && (this.sticks[0].destroyMe(), this.sticks.shift())
};
Level.prototype.moveLevelDownByY = function(a) {
	this.movingSprite.y += GameConfig.level.speedY / 1E3 * a
};
Level.prototype.stopTick = function() {
	stage.removeEventListener("pretick", this.tick);
	this.removeBackListener()
};
Level.highJump = !1;
Level.doubleClickFlag = !1;
Level.prototype.clickOnBack = function() {
	Level.doubleClickFlag && !Level.highJump && (Level.highJump = !0, MainScene.snail.prepareForHighJump());
	if (this.blockJump) return !1;
	this.blockClick();
	this.startDoubleClickTimer();
	MainScene.snail.jump(this.endJump)
};
Level.prototype.blockClick = function() {
	this.blockJump = !0
};
Level.prototype.unBlockClick = function() {
	this.blockJump = Level.highJump = !1
};
Level.prototype.endJump = function() {
	Level.highJump && this.setStick();
	stage.setTimeout(this.unBlockClick, 100);
	this.trimStick()
};
Level.prototype.trimStick = function() {
	this.getStick(MainScene.snail.stickId).trim()
};
Level.prototype.getStick = function(a) {
	for (a = 0; a < this.sticks.length; a++) {
		var c = this.sticks[a];
		if (c.id == MainScene.snail.stickId) return c
	}
};
Level.prototype.startDoubleClickTimer = function() {
	Level.doubleClickFlag = !0;
	stage.setTimeout(Level.endDoubleClickFlag, GameConfig.level.doubleTapDuration)
};
Level.endDoubleClickFlag = function() {
	Level.doubleClickFlag = !1
};
Level.prototype.setSticks = function() {
	this.setStick()
};
Level.prototype.setStick = function() {
	var a = Stick.add(this.stickSpr, this.lastStickId);
	this.lastStickId++;
	this.sticks.push(a);
	0 < a.getAbsolutePosition().y && this.setStick()
};
Level.prototype.addBackListener = function() {
	this.listenerSpr.addEventListener("mousedown", this.clickOnBack)
};
Level.prototype.removeBackListener = function() {
	this.listenerSpr.removeAllEventListeners()
};
Level.prototype.hideLevel = function() {
	this.fadeTo(0, pps / 2, null, GU.destroyMeAfterTween)
};
Level.prototype.addPoints = function() {
	this.points++;
	this.pointsText.write(this.points)
};
Level.prototype.showGameOver = function() {
	this.stopTick();
	this.removeBackListener();
	this.points > UserSettings.points && (UserSettings.points = this.points, UserSettings.save());
	this.showSnailDeathAnimation()
};
Level.prototype.showSnailDeathAnimation = function() {
	MainScene.snail.showDeathAnimation(this.showPopup)
};
Level.prototype.showPopup = function() {
	this.points > UserSettings.points && (UserSettings.points = this.points);
	UserSettings.save();
	this.hideLevel();
	MainScene.area.setPopup(this.points)
};
Level.STATE_MENU = 1;
Level.STATE_ACTIVE = 2;
Level.STATE_GAME_OVER = 3;
Level.add = function(a) {
	var c = new Level;
	c.setPosition(0, 0);
	a.addChild(c);
	c.set();
	return c
};

function Menu() {
	Utils.callSuperConstructor(Menu, this, null, 1, 1);
	this.startLevel = Utils.proxy(this.startLevel, this);
	this.showCredits = Utils.proxy(this.showCredits, this);
	this.addAllListeners = Utils.proxy(this.addAllListeners, this);
	this.removeAllListeners = Utils.proxy(this.removeAllListeners, this)
}
Utils.extend(Menu, OwnSprite);
Menu.prototype.set = function() {
	this.setPosition(0, 0);
	GU.setS(this, "logo", 0, -130);
	GU.setBT(this, "font_green", "Best score: " + UserSettings.points, 0, 0, {
		a: BitmapText.ALIGN_CENTER
	});
	this.clickSpr = GU.setS(this, null, 0, 0, {
		w: 2 * GU.center.x,
		h: 2 * GU.center.y
	});
	this.moreGamesButton = GU.setS(this, "btn_more_games", 120, 60);
	this.creditsButton = GU.setS(this, "btn_logo", 120, 120);
	/*var a = GU.setBT(this, "font_blue", "Tap to jump, double tap to jump on the next level", 0, 210, {
		a: BitmapText.ALIGN_CENTER,
		maxWidth: 400,
		vA: BitmapText.VALIGN_MIDDLE
	});*/
	var a = GU.setS(this,"cn_txt",0,190);
	a.scaleTo(1);
	// a.refresh();
	this.playShowEffect()
};
Menu.prototype.addTapListener = function() {
	this.clickSpr.addEventListener("mouseup", this.startLevel)
};
Menu.prototype.removeTapListener = function() {
	this.clickSpr.removeAllEventListeners()
};
Menu.prototype.addButtonsListeners = function() {
	this.moreGamesButton.addEventListener("mouseup", showMoreGames);
	this.creditsButton.addEventListener("mouseup", this.showCredits)
};
Menu.prototype.removeButtonsListeners = function() {
	this.clickSpr.removeAllEventListeners();
	this.moreGamesButton.removeAllEventListeners();
	this.creditsButton.removeAllEventListeners()
};
Menu.prototype.setButtons = function() {
	this.moreGamesButton = new Button(this, "btn_more_games", -60, 65);
	this.creditsButton = new Button(this, "ptm", 60, 65)
};
Menu.prototype.playShowEffect = function() {
	this.addTapListener();
	this.addButtonsListeners()
};
Menu.prototype.playHideEffect = function() {
	this.removeButtonsListeners();
	this.fadeTo(0, pps / 2, null, GU.destroyMeAfterTween)
};
Menu.prototype.playHideCreditsEffect = function() {
	this.removeAllListeners();
	this.moveBy(0, 2 * -GU.center.y, pps)
};
Menu.prototype.playShowCreditsEffect = function() {
	this.moveBy(0, 2 * GU.center.y, pps, null, this.addAllListeners)
};
Menu.prototype.addAllListeners = function() {
	this.addButtonsListeners();
	this.addTapListener()
};
Menu.prototype.removeAllListeners = function() {
	this.removeButtonsListeners();
	this.removeTapListener()
};
Menu.prototype.startLevel = function() {
	this.playHideEffect();
	MainScene.level.startActiveMode();
	SoundUtils.playEffect("tap");
	return !1
};
Menu.prototype.showCredits = function() {
	this.playHideCreditsEffect();
	Credits.add(MainScene.area);
	SoundUtils.playEffect("tap");
	return !1
};
Menu.add = function(a) {
	var c = new Menu;
	a.addChild(c);
	c.set();
	return c
};

function Credits() {
	Utils.callSuperConstructor(Credits, this, null, 1, 1);
	this.addCloseListener = Utils.proxy(this.addCloseListener, this);
	this.backToMenu = Utils.proxy(this.backToMenu, this)
}
Utils.extend(Credits, OwnSprite);
Credits.prototype.set = function() {
	this.setPosition(0, 2 * GU.center.y);
	this.back = GU.setS(this, "credits_1", 0, 0);
	this.playShowEffect()
};
Credits.prototype.playShowEffect = function() {
	this.moveBy(0, 2 * -GU.center.y, pps, null, this.addCloseListener)
};
Credits.prototype.playHideEffect = function() {
	this.removeCloseListener();
	this.moveBy(0, 2 * GU.center.y, pps, null, GU.destroyMeAfterTween)
};
Credits.prototype.backToMenu = function() {
	this.playHideEffect();
	MainScene.menu.playShowCreditsEffect();
	SoundUtils.playEffect("tap");
	return !1
};
Credits.prototype.addCloseListener = function() {
	this.back.addEventListener("mouseup", this.backToMenu)
};
Credits.prototype.removeCloseListener = function() {
	this.back.removeAllEventListeners()
};
Credits.add = function(a) {
	var c = new Credits;
	a.addChild(c);
	c.set();
	return c
};

function Popup(a) {
	Utils.callSuperConstructor(Popup, this, null, 1, 1);
	this.points = a;
	this.opacity = 0;
	this.restartGame = Utils.proxy(this.restartGame, this);
	this.facebook = Utils.proxy(this.facebook, this);
	this.twitter = Utils.proxy(this.twitter, this);
	this.addButtonsListeners = Utils.proxy(this.addButtonsListeners, this)
}
Utils.extend(Popup, OwnSprite);
Popup.prototype.set = function() {
	this.setPosition(0, 0);
	this.setElements();
	this.playShowEffect();
	// ExternalAPI.exec("showAds")
};
Popup.prototype.setElements = function() {
	this.panel = GU.setS(this, "score_panel", 0, -250);
	this.scoreTextTitle = GU.setBT(this, "font_blue", "SCORE", -20, -320, {
		a: BitmapText.ALIGN_CENTER
	});
	this.scoreTextTitle.rotateTo(-Math.PI / 15);
	this.scoreTextTitle.refresh();
	this.scoreText = GU.setBT(this, "font_blue", this.points, -10, -280, {
		a: BitmapText.ALIGN_CENTER
	});
	this.scoreText.rotateTo(-Math.PI / 15);
	this.scoreText.refresh();
	this.bestScoreTextTitle = GU.setBT(this, "font_blue", "BEST SCORE", 0, -230, {
		a: BitmapText.ALIGN_CENTER
	});
	this.bestScoreTextTitle.rotateTo(-Math.PI / 12);
	this.bestScoreTextTitle.refresh();
	this.bestScoreText = GU.setBT(this, "font_blue", UserSettings.points, 20, -195, {
		a: BitmapText.ALIGN_CENTER
	});
	this.bestScoreText.rotateTo(-Math.PI / 12);
	this.bestScoreText.refresh();
	this.moreGamesBtn = GU.setS(this, "btn_more_games_1", -60, 210);
	// this.facebookBtn = GU.setS(this, "btn_facebook", -86, 190);
	this.twitterBtn = GU.setS(this, "btn_twitter", 60, 210);
	this.restartBtn = GU.setS(this, "btn_restart", 0, 320)
	// play68_score = UserSettings.points;
	// updateShare(play68_score);
	// Play68.setRankingScoreDesc(play68_score);
};
Popup.prototype.addButtonsListeners = function() {
	this.restartBtn.addEventListener("mouseup", this.restartGame);
	this.moreGamesBtn.addEventListener("mouseup", showMoreGames);
	// this.facebookBtn.addEventListener("mouseup", this.facebook);
	this.twitterBtn.addEventListener("mouseup", this.twitter)
};
Popup.prototype.removeButtonsListeners = function() {
	this.restartBtn.removeAllEventListeners();
	this.moreGamesBtn.removeAllEventListeners();
	// this.facebookBtn.removeAllEventListeners();
	this.twitterBtn.removeAllEventListeners()
};
Popup.prototype.playShowEffect = function() {
	this.fadeTo(1, pps / 2, null, this.addButtonsListeners);
	this.panel.moveBy(0, 160, pps / 2);
	this.scoreTextTitle.moveBy(0, 160, pps / 2);
	this.scoreText.moveBy(0, 160, pps / 2);
	this.bestScoreTextTitle.moveBy(0, 160, pps / 2);
	this.bestScoreText.moveBy(0, 160, pps / 2);
	this.moreGamesBtn.moveBy(0, -160, pps / 2);
	// this.facebookBtn.moveBy(0, -160, pps / 2);
	this.twitterBtn.moveBy(0, -160, pps / 2);
	this.restartBtn.moveBy(0, -160, pps / 2);
	SoundUtils.playEffect("win")
};
Popup.prototype.facebook = function() {
	// FaceBook.getUserInfo(FaceBook.postOnWall, this.points)
};
Popup.prototype.twitter = function() {
	// play68_submitScore(play68_score);
	// ExternalAPI.exec("shareTwitter", "I've scored " + this.points + " in #JumpingSnail. You'll never beat me!")
};
Popup.prototype.playHideEffect = function() {
	this.removeButtonsListeners();
	GU.setS(stage, null, GU.center.x, GU.center.y, {
		w: 2 * GU.center.x,
		h: 2 * GU.center.y,
		fC: "white",
		o: 0
	}).fadeTo(1, pps / 2, null, Utils.proxy(function(a) {
		a.target.obj.destroy = !0;
		this.destroyMe();
		MainScene.area.setMenu()
	}, this))
};
Popup.prototype.restartGame = function() {
	this.playHideEffect();
	SoundUtils.playEffect("tap");
	return !1
};
Popup.add = function(a, c) {
	var d = new Popup(c);
	a.addChild(d);
	d.set();
	return d
};