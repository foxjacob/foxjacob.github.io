function extend(Child, Parent) {
    var F = function() {
    };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}

function TrinUtil() {
}

TrinUtil.prototype.drawEllipse = function(ctx, x, y, w, h) {
    var kappa = 0.5522848,
            ox = (w / 2) * kappa, // control point offset horizontal
            oy = (h / 2) * kappa, // control point offset vertical
            xe = x + w, // x-end
            ye = y + h, // y-end
            xm = x + w / 2, // x-middle
            ym = y + h / 2;       // y-middle

    ctx.beginPath();
    ctx.moveTo(x, ym);
    ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    ctx.closePath();
    ctx.stroke();
};

TrinUtil.prototype.detectmob = function() {
    if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i))
    {
        return true;
    } else {
        return false;
    }
};

TrinUtil.prototype.isAndroid = function(){
    return navigator.userAgent.match(/Android/i);
};

TrinUtil.prototype.isIDevice = function(){
    return (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i));
};

TrinUtil.prototype.digits = "0123456789ABCDEF";
TrinUtil.prototype.numberToDec = function(number, base) {
    var dec = 0;
    var p = 1;
    number = number.toUpperCase();
    for (var i = number.length - 1; i >= 0; i--) {
        var c = number[i];
        dec += this.digits.indexOf(c) * p;
        p *= base;
    }
    return dec;
};

TrinUtil.prototype.decToNumber = function(dec, base, len) {
    if (len === undefined) {
        len = 2;
    }
    var number = "";
    while (dec > 0) {
        number = this.digits[dec % base] + number;
        dec = Math.floor(dec / base);
    }
    while (number.length < len) {
        number = "0" + number;
    }
    return number;
};
