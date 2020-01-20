//author: C, @ishoock group
//www.ishoock.com

//获取地址栏参数
//query: query string
function GetUriQyery(query) {
    var reg = new RegExp("(^|&)" + query + "=([^&]*)(&|$)");
    var r = decodeURI(window.location.href.split("?")[1]).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

//预加载
//Progress:function handler(progress){//使用当前进度},
//Complete:function handler(){//加载完成后执行},
//imglist:[uri1,uri2,uri3,....],
//delay:nubmer
function Load(Progress, Complete, imglist, delay) {
    var complete = 0;
    var count = imglist.length;
    var currentProgress = 0;

    function _animate() {
        var completeProgres = complete / count;
        currentProgress = (currentProgress + 0.01) < completeProgres ? (currentProgress + 0.01) : completeProgres;
        if (Math.floor(currentProgress * 100) < 100) {
            Progress(currentProgress);
            setTimeout(_animate, delay);
        } else {
            setTimeout(function () {
                Progress(1);
                setTimeout(function () {
                    Complete();
                }, 200);
            }, delay);
        }
    }
    this.Start = function () {
        for (var i = 0; i < count; i++) {
            var img = new Image();
            img.onload = function () {
                complete++;
                if (!Progress && complete == count) {
                    Complete();
                }
            };
            img.src = imglist[i];
        }
        if (Progress) {
            _animate();
        }
    }
}

//手势v0.2.1
//*element:dom,
//option:{
//  pointcount:1|2(default:1),
//  direction:'x'|'y'|'both'(default:'y'),p.s. pointcount:1 only,
//  step:number(default:50),  
//  delay:ms(default:1000),
// click:function,
//},
//complete:funtion
function Gesture(element, option, complete) {
    var element = element ? element : document.body;
    var pointcount = option.pointcount ? (option.pointcount > 2 ? 2 : option.pointcount) : 1;
    var direction = option.direction ? option.direction : "y";
    var step = option.step ? option.step : 50;
    var delay = option.delay ? option.delay : 1000;
    var click = option.click;
    var points = [];
    var spacing = 0;
    var action = false;
    var delaying = false;
    var result;
    function _Start() {
        action = true;
        for (var i = 0; i < pointcount; i++) {
            points[i] = { x: event.touches[0].clientX, y: event.touches[0].clientY };
        }
        if (pointcount == 2) {
            var x = Math.abs(points[0].x - points[1], x);
            var y = Math.abs(points[0].y - points[1], y);
            spacing = Math.sqrt(x * x + y * y);
        }
        return false;
    }
    function _Move() {
        event.preventDefault();
        event.stopPropagation();
        if (action && !delaying) {
            var _points = [];
            for (var i = 0; i < pointcount; i++) {
                _points[i] = { x: event.touches[0].clientX, y: event.touches[0].clientY };
            }
            result = 0;
            if (pointcount == 1) {
                var move;
                if (direction == "both") {
                    if (Math.abs(points[0].x - _points[0].x) > Math.abs(points[0].y - _points[0].y)) {
                        move = points[0].x - _points[0].x;
                        if (move > step) {
                            result = 1;
                        } else if (move < -step) {
                            result = -1;
                        }
                        result = { "code": result, "direction": "x" };
                    } else {
                        move = points[0].y - _points[0].y;
                        if (move > step) {
                            result = 1;
                        } else if (move < -step) {
                            result = -1;
                        }
                        result = { "code": result, "direction": "y" };
                    }
                } else {
                    move = direction == "x" ? points[0].x - _points[0].x : points[0].y - _points[0].y;
                    if (move > step) {
                        result = 1;
                    } else if (move < -step) {
                        result = -1;
                    }
                }
            } else if (pointcount == 2) {
                var x = Math.abs(_points[0].x - _points[1].x);
                var y = Math.abs(_points[0].y - _points[1].y);
                var _spacing = Math.sqrt(x * x + y * y);
                var change = spacing - _spacing;
                if (change < -step) {
                    result = 1;
                } else if (change > step) {
                    result = -1;
                }
            }
            if (direction != "both") {
                if (result != 0) {
                    delaying = true;
                    action = false;
                    complete(result);
                    setTimeout(function () {
                        delaying = false;
                    }, delay);
                }
            } else {
                if (result.code != 0) {
                    delaying = true;
                    action = false;
                    complete(result);
                    setTimeout(function () {
                        delaying = false;
                    }, delay);
                }
            }
        }
        return false;
    }
    function _End() {
        action = false;
        if (click) {
            click(event);
        }
        return false;
    }

    this.Init = function () {
        $(element).on("touchstart", _Start);
        $(element).on("touchmove", _Move);
        $(element).on("touchend", _End);
        return this;
    };
    this.Kill = function () {
        $(element).off("touchstart");
        $(element).off("touchmove");
        $(element).off("touchend");
    }
}


// 限制字符串长度（区分大小写）；
String.prototype.Limit = function (max) {
    var _length = 0, len = this.length, charCode = -1;
    var str = "";
    for (var i = 0; i < len; i++) {
        charCode = this.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) {
            _length += 1;
        }
        else {
            _length += 2;
        }
        if (_length <= max) {
            str += this[i];
        } else {
            break;
        }
    }
    return str;
}
//字符串真实长度
String.prototype.Length= function () {
    var _length = 0, len = this.length, charCode = -1;
    var str = "";
    for (var i = 0; i < len; i++) {
        charCode = this.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) {
            _length += 1;
        }
        else {
            _length += 2;
        }
    }
    return _length;
}

//设置cookies 
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//读取cookies 
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

//获取手机系统
function GetDevice() {
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
            return "android";
        } else if (u.indexOf('iPhone') > -1) {
            return "iphone";
        } else if (u.indexOf('Windows Phone') > -1) {
            return "windowsphone";
        } else if (u.indexOf('iPad') > -1) {
            return "ipad";
        } else {
            return "other";
        }
}

//扇形
CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sDeg, eDeg) {
    this.save();
    this.translate(x, y);
    this.beginPath();
    this.arc(0, 0, radius, sDeg, eDeg);
    this.save();
    this.rotate(eDeg);
    this.moveTo(radius, 0);
    this.lineTo(0, 0);
    this.restore();
    this.rotate(sDeg);
    this.lineTo(radius, 0);
    this.closePath();
    this.restore();
    return this;
}