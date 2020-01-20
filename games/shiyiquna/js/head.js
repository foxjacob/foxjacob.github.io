var _Mvar = {
    myGroup: '11',
    gid: 310,
    id: 15,
   // gid: 6,
   // id: 13,
    wxNum: "",
    username: "",
    phone: "",
    nickname: "",
    headimgurl: "",
    domain: '',
    data: '',
    msg: '可能是网络原因，请刷新页面重试!',
    cantest: '',
    jsoncallback: '',
    go: 0,
    uid:0,
    cantest: '',
    wxid: '',
    wxName: '',
    myid:'',
    shareText:'黄金国际邀您拆礼盒啦',
    shareText1:'',
    shareText2:'',
    prize: '万精',
    chance: 0,
    times: 0,
    num: 0,
    loadImg: 'http://wx.qqauto.cn/html/upcoin/kupao/2/images/img2.png',
    share: 0,
    countdown:0
};
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}


//微信分享需引用<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
var shareUrl = location.href;
var imgUrl = shareUrl.replace(/(index\.html)|(share\.html)/, 'images/share.jpg');
if (imgUrl.indexOf('images/share.jpg') == -1)
    imgUrl = shareUrl.replace(/\/\?/, '\/images/share.jpg?');
if (imgUrl.indexOf('images/share.jpg') == -1)
    imgUrl = shareUrl + 'images/share.jpg';
var shareData = {
    title: '奔跑吧！soho！',
    desc: '奔跑吧！soho！',
    //   link: shareUrl,
    imgUrl: 'http://wx.qqauto.cn/html/upcoin/kupao/2/images/theme.png',
    success: function () {
        $.ajax({
            url: _Mvar.domain + '/UpcoinMobile/Share',
            data:$('#form1').serialize(),
            success: function (d) {
                if (d && d.success) {
                    alert('分享成功，恭喜您获得额外3次游戏机会');
                    _Mvar.share++;
                } 
            }
        })
    }
};


_Mvar.wxNum = getQueryString("uid");
var hostname = location.hostname;
var myUrl = "http://" + hostname + location.pathname + "?uid=" + _Mvar.wxNum + '&gid=' + _Mvar.gid;
function init2() {

    $.ajax({
        type: "get",
        url: "http://wx.qqauto.cn/CommonApi/OAuth2?id=" + _Mvar.id + "&gid=" + _Mvar.gid + "&myUrl=" + encodeURIComponent(myUrl) + "&_r=" + Math.random(),
        dataType: "json",
        async: false,
        success: function (data) {
            if (data.success == true) {
                _Mvar.wxid = data.wxnum;
                _Mvar.nickname = data.nickname;
                _Mvar.headimgurl = data.headimg;
            } else {
                window.location.href = data.msg;
            }
        },
        timeout: 15000,
        error: function (xhr, type) {
            alert("网络异常，请刷新重试。");
        }
    });
}
var isLocal = hostname && hostname.indexOf('wx.qqauto.cn') > -1;
if (isLocal)
    init2();
else {
    _Mvar.domain = 'http://wx.qqauto.cn',
        _Mvar.domain = 'http://192.168.1.104',
    _Mvar.cantest = 'can',
    _Mvar.wxid = '112',
    _Mvar.jsoncallback = '?jsoncallback=?';
    _Mvar.nickname='哦呵呵呵呵';
    _Mvar.gid = 6;
    _Mvar.id = 13;
}