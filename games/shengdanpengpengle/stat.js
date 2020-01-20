window.addEventListener("load", function() {
	setTimeout(function() {
		window.scrollTo(0, 1)
	}, 0)
});

function qike_h5_v1_refer() {
	if (navigator.userAgent.indexOf("qikegameplayer") != -1) {
		qike_h5_v1_show = false;
		return false
	}
	if (qike_h5_v1_checkmobile() != "android" && qike_h5_v1_checkmobile() != "iphone" && qike_h5_v1_checkmobile() != "ipad") {
		qike_h5_v1_show = false;
		return false
	}
	var refer = document.referrer;
	if (refer == "") {
        return false
    }
};

function qike_h5_v1_checkmobile() {
	var ua = navigator.userAgent;
	ua = ua ? ua.toLowerCase().replace(/-/g, "") : "";
	if (ua.match(/(Android)/i)) {
		return "android"
	}
	if (ua.match(/(iPhone|iPod)/i)) {
		return "iphone"
	}
	if (ua.match(/(iPad)/i)) {
		return "ipad"
	}
	if (ua.match(/(U;)/i)) {
		if (ua.match(/(Adr)/i)) {
			return "android"
		}
	}
	if (ua.match(/(U;)/i)) {
		if (ua.match(/(iPh)/i)) {
			return "iphone"
		}
	}
	if (ua.match(/(U;)/i)) {
		if (ua.match(/(iPd)/i)) {
			return "ipad"
		}
	}
};

function qike_h5_v1_init() {
	if (qike_h5_v1_show == false) {
		return false
	}
	var _0 = [];
	_0.push('<div id="J-qike-h5-v1-logo"><img src="' + qike_h5_v1_logo + '" height="80"/></div>');
	_0.push('<div id="J-qike-h5-v1-progress">...游戏马上开始...</div>');
	_0.push('<div id="J-qike-h5-v1-adbox">');
	_0.push('<a id="J-qike-h5-v1-close">×</a>');
	_0.push('<div id="J-qike-h5-v1-addefault" style="display:none;"></div>');
	_0.push('<div id="J-qike-h5-v1-ad">');
	_0.push('<iframe id="ad_1" src="about:blank" width="320" height="320" allowtransparency="true" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border:0px;"></iframe>');
	_0.push('</div>');
	_0.push('</div>');
	var _1 = document.createElement("div");
	_1.id = "J-qike-h5-v1-mask";
	_1.style = "display:none;";
	document.body.appendChild(_1);
	var _1 = document.createElement("div");
	_1.id = "J-qike-h5-v1-load";
	_1.style = "display:none;";
	document.body.appendChild(_1);
	_1.innerHTML = _0.join("");
	var iframe = document.getElementById("ad_1");
	var doc = iframe.contentWindow.document;
	var ad = qike_h5_v1_ad;
	var html = ad.content;
	if (!/<body>/.test(html)) {
		html = '<!DOCTYPE html><body>' + html + '</body>'
	}
	doc.open();
	doc.write(html);
	doc.close()
};

function qike_h5_v1_ui() {
	if (qike_h5_v1_show == false) {
		return false
	}
	var _3 = 0,
		_4 = 0,
		_2 = 1;
	if (window.innerWidth) {
		_3 = window.innerWidth
	} else if ((document.body) && (document.body.clientWidth)) {
		_3 = document.body.clientWidth
	}
	if (document.documentElement && document.documentElement.clientWidth) {
		_3 = document.documentElement.clientWidth
	}
	if (window.innerHeight) {
		_4 = window.innerHeight
	} else if ((document.body) && (document.body.clientHeight)) {
		_4 = document.body.clientHeight
	}
	if (document.documentElement && document.documentElement.clientHeight) {
		_4 = document.documentElement.clientHeight
	}
	if (_3 <= _4) {
		_2 = (_3 / 350)
	} else {
		_2 = (_4 / 461)
	}
	var _6 = document.getElementById("J-qike-h5-v1-mask");
	_6.style.cssText = "z-index:90000002;position:fixed;width:100%;height:100%;top:0;left:0;background: #01a8fe;background: -moz-linear-gradient(top,#46afff 0%,#ffffff 100%);background: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#46afff),color-stop(100%,#ffffff));background: -webkit-linear-gradient(top,#46afff 0%,#ffffff 100%);background: -o-linear-gradient(top,#46afff 0%,#ffffff 100%);background: -ms-linear-gradient(top,#46afff 0%,#ffffff 100%);background: linear-gradient(to bottom,#46afff 0%,#ffffff 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#46afff',endColorstr='#ffffff',GradientType=0 );";
	var _7 = document.getElementById("J-qike-h5-v1-load");
	_7.style.cssText = "transform:scale(" + _2 + ");-webkit-transform:scale(" + _2 + ");-o-transform:scale(" + _2 + ");-moz-transform:scale(" + _2 + ");z-index:90000003;position:fixed;width:350px;top:50%;left:50%;margin-left:-175px;margin-top:-256px;text-align:center;color:#000;font-family: 'Microsoft Yahei', Arial, 'Helvetica Neue', sans-serif;-webkit-font-smoothing: antialiased;font-size:16px;";
	var _13 = document.getElementById("J-qike-h5-v1-logo");
	_13.style.cssText = "position:relative;width:100%;text-align:center;margin:40px auto 0;";
	var _14 = document.getElementById("J-qike-h5-v1-progress");
	_14.style.cssText = "position:relative;width:100%;text-align:center;line-height:30px;";
	var _12 = document.getElementById("J-qike-h5-v1-adbox");
	_12.style.cssText = "position:relative;width:320px;height:320px;text-align:center;border:#fff solid 10px;border-radius:5px;background:#fff;margin:20px auto 0;";
	var _9 = document.getElementById("J-qike-h5-v1-addefault");
	_9.style.cssText = "position:absolute;width:320px;height:320px;z-index:1;";
	_9.innerHTML = '';
	var _10 = document.getElementById("J-qike-h5-v1-ad");
	_10.style.cssText = "position:absolute;width:320px;height:320px;z-index:90000004;overflow:hidden;";
	var _8 = document.getElementById("J-qike-h5-v1-close");
	_8.onclick = qike_h5_v1_close;
	_8.style.cssText = "position:absolute;display:block;width:28px;height:28px;line-height:28px;text-align:center;background:#007cff;color:#fff;border:#fff solid 1px;border-radius:15px;top:-30px;left:50%;margin-left:-15px;font-weight:bold;cursor:pointer;"
};

function qike_h5_v1_close() {
	var _6 = document.getElementById("J-qike-h5-v1-mask");
	_6.style.cssText = "";
	_6.style.display = "none";
	_6.innerHTML = "";
	var _7 = document.getElementById("J-qike-h5-v1-load");
	_7.style.cssText = "";
	_7.style.display = "none";
	_7.innerHTML = "";
	clearTimeout(qike_h5_v1_nid);
	qike_h5_v1_show = false
};

function qike_h5_v1_progress() {
	if (qike_h5_v1_show == false) {
		clearTimeout(qike_h5_v1_nid);
		return false
	}
	if (qike_h5_v1_time >= qike_h5_v1_totaltime) {
		qike_h5_v1_close()
	} else {
		var _5 = qike_h5_v1_totaltime - qike_h5_v1_time;
		_5 = Math.ceil(_5 / 1000);
		if (_5 <= 0) {
			_5 = 1
		}
		document.getElementById("J-qike-h5-v1-progress").innerHTML = '...游戏 <span style="color:#f00">' + _5 + '</span> 秒后开始...';
		qike_h5_v1_nid = setTimeout('qike_h5_v1_progress()', 500)
	}
	qike_h5_v1_time = qike_h5_v1_time + 500
};
var qike_h5_v1_logo = "../ad/logo.png";
var qike_h5_v1_ad = {
	"content": "<script async src=\"\/\/pagead2.googlesyndication.com\/pagead\/js\/adsbygoogle.js\"><\/script><!-- yx8.zsy --><ins class=\"adsbygoogle\" style=\"display:block\" data-ad-client=\"ca-pub-3253453814032357\" data-ad-slot=\"4119231824\" data-ad-format=\"auto\"><\/ins><script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>"
};
var qike_h5_v1_totaltime = 5000;
var qike_h5_v1_time = 0;
var qike_h5_v1_show = true;
qike_h5_v1_refer();
qike_h5_v1_init();
qike_h5_v1_ui();
var qike_h5_v1_nid = setTimeout('qike_h5_v1_progress()', 500);
window.onresize = function() {
	qike_h5_v1_ui()
};
var _11 = (("https:" == document.location.protocol) ? " https://" : "   http://");
document.write(unescape("%3Cscript src='" + _11 + "hm.baidu.com/h.js%3F6d12cedf01c3bcf11e0b3f4dfd963df3' type='text/javascript'%3E%3C/script%3E"))
