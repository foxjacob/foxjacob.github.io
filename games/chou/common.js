// window.devicePixelRatio;

var ajax = function(options) {
    var data = null;
    this.options = {
        url: "",
        data: {},
        format: "json",
        method: "GET",
        before: null,
        callback: null,
    };
    for (var i in options) {
        this.options[i] = options[i];
    }
    try {
        this.req = new XMLHttpRequest();
    } catch(e) {
        try {
            this.req = new ActiveXObject("Microsoft.XMLHTTP");
        } catch(e) {
            return false;
        }
    }

    this.headers = {
    "X-Requested-With": "XMLHTTPRequest",
    "Accept": 'text/javascript, text/html, application/xml, text/xml, */*'
    };

    var self = this;
    this.req.onreadystatechange = function() {
        if (self.req.readyState == 4 && self.req.status == 200) {
            if (self.options.format == "json") {
                if (this.responseText) {
                    var result = JSON.parse(this.responseText);
                }
            } else {
                var result = this.responseText;
            }
            if (self.options.callback) {
                return self.options.callback(result);
            }
        }
    }

    var p = [];
    for (var i in this.options.data) {
        var v = this.options.data[i];
        if (typeof v == typeof {}) {
            v = JSON.stringify(v);
        }
        p.push(i + "=" + encodeURIComponent(v));
    }

    if (p.length > 0) {
        if (this.options.method == "GET") {
            var c = this.options.url.indexOf("?") != -1 ? "&" : "?";
            this.options.url = this.options.url + c + p.join("&");
        }

        if (this.options.method == "POST") {
            data = p.join("&");
        }
    }

    this.req.open(this.options.method, this.options.url, true);

    for(var i in this.headers) {
        try {
            this.req.setRequestHeader(i, this.headers[i]);
        } catch(e) {
        }
    }

    if (this.options.method == "POST") {
        this.req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }

    this.req.send(data);

    if (this.options.before) {
        this.options.before();
    }
}

if (typeof $ == "undefined") {
    function $(id) {
        return document.getElementById(id);
    }
}

Element.prototype.nextElement = function() {
    var n = this;
    do {
        n = n.nextSibling;
    } while (n && n.nodeType != 1);
    return n;
}

Element.prototype.prevElement = function() {
    var n = this;
    do {
        n = n.previousSibling;
    } while (n && n.nodeType != 1);
    return n;
}

Element.prototype.hasClass = function(c) {
    var p = this.className.indexOf(c);
    return p != -1 && (this.className.charCodeAt(p - 1) || 32 == 32 && this.className.charCodeAt(p + c.length) || 32 == 32);
}

Element.prototype.addClass = function(c) {
    if (!this.hasClass(c)) {
        this.className += " " + c;
    }
    return this;
}

Element.prototype.removeClass = function(c) {
    var cls = this.className.split(" ");
    for (var i = 0;i < cls.length;i++) {
        if (cls[i] == c) {
            delete cls[i];
        }
    }
    this.className = cls.join(" ");
}

Element.prototype.toggleClass = function(c) {
    if (!this.hasClass(c)) {
        this.className += " " + c;
    } else {
        this.removeClass(c);
    }

    return this;
}

function query_get(name){
    var urlt = window.location.href.split("?");
    if(typeof(urlt[1]) != "undefined"){
        var gets = urlt[1].split("&");
        for(var i=0;i<gets.length;i++){
            var get = gets[i].split("=");
            if(get[0] == name){
                var value = get[1];
                break;
            }
        }
        return value;
    }
}

function getToday() {
    var d = new Date();
    var date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    return date;
}

function getTime() {
    var d = new Date();
    var time = d.getHours() + ':' + d.getMinutes();
    return time;
}

function switch_tab(tab) {
    var tabs = ['com', 'new', 'hot'];
    for (var i in tabs) {
        var el = tabs[i];
        $("d_" + el).style.display = "none";
        $(el).removeClass("selected");
        if (el == tab) {
            $("d_" + el).style.display = "";
            $(el).addClass("selected");
        }
    }
}
