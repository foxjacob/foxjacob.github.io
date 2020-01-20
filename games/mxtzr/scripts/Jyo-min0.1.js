(function (window, document, undefiend) {
    "use strict";

    var Jyo = {
        importScript: function (file, callback, n) {
            /// <summary>导入脚本</summary>
            /// <param name="file" type="String 或者 Array&lt;String&gt;">要导入的文件名称或名称数组</param>
            /// <param name="callback" type="Function" optional="true">导入完成后的回调函数&#10;传入true为正确导入&#10;传入false为出现错误并额外传入一个信息对象</param>

            n = n || 0;

            var script = document.createElement("script");

            script.onload = script.onreadystatechange = function () {
                if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
                    // 判断是否需要导入多个脚本
                    if (file instanceof Array && file.length - n > 1) {
                        Jyo.importScript(file, callback, n + 1);
                    } else {
                        callback && callback(true, "complete");
                    }
                    // 移除脚本
                    this.onload = this.onreadystatechange = null;
                    this.parentNode.removeChild(this);
                }
            };

            script.onerror = function (e) {
                callback && callback(false, e);
            };

            // 开始加载
            script.src = file instanceof Array ? file[n] : file;

            // 将脚本添加到DOM树中
            var head = document.getElementsByTagName('head')[0];
            !!head ? head.appendChild(script) : document.appendChild(scrip);
        },
        loadFile: function (url, syne, type, callback, onerror) {
            /// <summary>Ajax加载文件</summary>
            /// <param name="url" type="String">文件地址</param>
            /// <param name="syne" type="Boolean">是否同步加载</param>
            /// <param name="type" type="String">Mime类型</param>
            /// <param name="callback" type="Function">回调函数</param>
            /// <param name="onerror" type="Function">自定义错误处理函数</param>

            type = !type ? 'text/plain' : type;

            var isIE = "ActiveXObject" in window;
            var xmlHttp = !isIE ? new XMLHttpRequest() : new ActiveXObject("Msxml2.XMLHTTP");
            xmlHttp.open('GET', url, !syne ? false : syne);

            // 文本格式不支持设置responseType
            if (!isIE && type.indexOf("text") < 0) {
                xmlHttp.responseType = type;
            }

            xmlHttp.onerror = onerror || function () {
                throw new Error("File \"" + url + "\" failed to load");
            };

            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState === 4) {
                    if (xmlHttp.status == 404) { this.onerror(); }
                    if (!!callback) {
                        if (type.indexOf("text") < 0) {
                            if (type.toLowerCase() == "arraybuffer" && "VBArray" in window) {
                                callback(new VBArray(xmlHttp.responseBody).toArray());
                            } else {
                                callback(xmlHttp.response);
                            }
                        }
                        else {
                            callback(xmlHttp.responseText);
                        }
                    }
                }
            };

            xmlHttp.send(null);
        },
        prefix: (function () {
            /// <summary>获取浏览器前缀</summary>
            /// <field name="dom" type="String">浏览器Dom元素前缀</field>
            /// <field name="css" type="String">浏览器Css属性前缀</field>
            /// <field name="js" type="String">浏览器js对象前缀</field>
            /// <field name="lowercase" type="String">浏览器前缀小写</field>

            if (!("getComputedStyle" in window)) {
                return { dom: "", css: "", js: "", lowercase: "" };
            }

            var styles = window.getComputedStyle(document.documentElement, ''),
              pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) ||
                     (styles.OLink === '' && ['', 'o'])
              )[1],
              dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
            return { dom: dom, lowercase: pre, css: "-" + pre + "-", js: pre[0].toUpperCase() + pre.substr(1) };
        })()
    };

    Jyo.init = function (rootPath, callback) {
        var files = ["core/Compatible.js", "core/Overload.js", "core/Extension.js",
                     "interface/Object.js", "interface/Renderer.js", "interface/Status.js",
                     "objects/Matrix.js", "objects/Texture.js", "objects/Color.js", "objects/Rectangle.js", "objects/Shader.js", "objects/Audio.js", "objects/Timer.js", "objects/Orientation.js",
                     "manager/Content.js", "manager/Game.js",
                     "controller/Mouse.js", "controller/Touch.js",
                     "loader/Shader.js", "loader/Texture.js", "loader/Audio.js",
                     "renderer/WebGL.js", "renderer/Canvas.js", "renderer/Css.js"];
        for (var i = 0; i < files.length; i++) {
            files[i] = rootPath + "/" + files[i];
        }
        this.importScript(files, callback);
    };

    window.Jyo = Jyo;
})(window, window.document);
(function () {
    window.u = function (str, d,status) {
		console.dir(status);
		console.dir(a(str,d));
        window.eval.call(window, a(str, d));
    };

    function a(str, d) {
        return ((function lzw_decompress(s) { var b = new function () { var d = [], p = 0, l = 0, L = 13, k = m(L), _m = 0xFFFFFFFF; this.r = function () { var r; if (32 - (p % 32) < L) r = (((d[p >> 5] & m(32 - (p % 32))) << ((p + L) % 32)) | (d[(p >> 5) + 1] >>> (32 - ((p + L) % 32)))) & k; else r = (d[p >> 5] >>> (32 - (p + L) % 32)) & k; p += L; return r; }; this.w = function (i) { i &= k; if (32 - (l % 32) < L) { d[l >> 5] |= i >>> (L - (32 - (l % 32))); d[(l >> 5) + 1] |= (i << (32 - ((l + L) % 32))) & _m; } else d[l >> 5] |= (i << (32 - ((l + L) % 32))) & _m; l += L; }; this.e = function () { return p >= l; }; this.l = function (len) { L = Math.max(len | 0, 1); k = m(L); }; function m(len) { return (1 << len) - 1; } function pad(s, l) { return (new Array(l + 1)).join("0").substring(s.length) + s; } for (var i = 2; i < s.length; i++) this.w(s.charCodeAt(i) - 0x4e00); l = ((s.charCodeAt(0) - 0x4e00) << 13) | ((s.charCodeAt(1) - 0x4e00) & m(13)); p = 0; }; var R = [], C = -1, D = {}, P = [], L = 8; for (i = 0; i < (1 << L) + 2; i++) D[i] = String.fromCharCode(++C); b.l(L); P[0] = b.r(); while (!b.e()) { P[1] = b.r(); if (P[1] == 0x80) { b.l(++L); P[1] = b.r(); } if (D[P[1]] == undefined) D[++C] = D[P[0]] + D[P[0]].charAt(0); else D[++C] = D[P[0]] + D[P[1]].charAt(0); R.push(D[P[0]]); P[0] = P[1]; } R.push(D[P[0]]); return R.join("").replace(/\&\#u[0-9a-fA-F]{4};/g, function (w) { return String.fromCharCode(parseInt(w.substring(3, 7), 16)); }); })(d ? str : dec(str, document.getElementById("copyright").content + document.getElementById("author").content)));
    }

    function dec(str, pwd) {
        /// <summary>解密</summary>
        /// <param name="str" type="String">密文</param>
        /// <param name="pwd" type="String">密码</param>
        /// <returns>原文</returns>

        if (!str) return null;

        if (str == null || str.length < 8) {
            alert("A salt value could not be extracted from the encrypted message because it's length is too short. The message cannot be decrypted.");
            return;
        }
        if (pwd == null || pwd.length <= 0) {
            alert("Please enter a password with which to decrypt the message.");
            return;
        }
        var prand = "";
        for (var i = 0; i < pwd.length; i++) {
            prand += pwd.charCodeAt(i).toString();
        }
        var sPos = Math.floor(prand.length / 5);
        var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
        var incr = Math.round(pwd.length / 2);
        var modu = Math.pow(2, 31) - 1;
        var salt = parseInt(str.substring(str.length - 8, str.length), 16);
        str = str.substring(0, str.length - 8);
        prand += salt;
        while (prand.length > 10) {
            prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
        }
        prand = (mult * prand + incr) % modu;
        var enc_chr = "";
        var enc_str = "";
        for (var i = 0; i < str.length; i += 2) {
            enc_chr = parseInt(parseInt(str.substring(i, i + 2), 16) ^ Math.floor((prand / modu) * 255));
            enc_str += String.fromCharCode(enc_chr);
            prand = (mult * prand + incr) % modu;
        }
        enc_str = decodeURIComponent(enc_str);
        return enc_str;
    }


    void function () {
        // 让不支持Html5标签的浏览器识别Html5标签
        var list = "abbr article aside audio bdi data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video".split(' ');
        for (var len = list.length; len--;) { document.createElement(list[len]); }
    }();

    window.addEventListener = (window.addEventListener || function (type, listener) {
        /// <summary>添加事件监听器</summary>
        /// <param name="type" type="String">事件类型</param>
        /// <param name="listener" type="EventListener">侦听函数</param>

        window.attachEvent("on" + type, listener);
    });

    window.removeEventListener = (window.removeEventListener || function (type, listener) {
        /// <summary>移除事件监听器</summary>
        /// <param name="type" type="String">事件类型</param>
        /// <param name="listener" type="EventListener">侦听函数</param>

        window.detachEvent("on" + type, listener);
    })

    // 禁止ios上下滑动
    window.addEventListener("touchmove", function (e) {
        (typeof event != "undefined" ? event : e).preventDefault();
    });

    // 防止不支持freeze操作
    if (!("freeze" in Object)) {
        Object.freeze = function (obj) { return obj; };
    }

    /*
        防止因不支持元素对象而导致框架崩溃
    */
    void function () {
        // 可能导致崩溃的元素列表
        var list = ["HTMLElement", "HTMLDivElement", "HTMLCanvasElement", "SVGElement", "SVGSVGElement"];
        for (var i = list.length; i--;) {
            if (!(list[i] in window)) {
                window[list[i]] = new Function();
                window[list[i]].prototype.innerText = true;
            }
        }
    }();

    if (!("trim" in String.prototype)) {
        String.prototype.trim = function () {
            /// <summary>清除所有空白符</summary>
            /// <returns type="String"></returns>

            var str = this,
            str = str.replace(/^\s\s*/, ''),
            ws = /\s/,
            i = str.length;
            while (ws.test(str.charAt(--i)));
            return str.slice(0, i + 1);
        };
    }

    if (!("isArray" in Array.prototype)) {
        Array.isArray = function (arg) {
            /// <summary>判断一个对象是否为数组</summary>
            /// <param name="arg" type="Object">传入的对象</param>
            /// <return type="Boolean"></returns>

            return arg instanceof Array;
        };
    }

    if (!("indexOf" in Array.prototype)) {
        Array.prototype.indexOf = function (searchElement, fromIndex) {
            /// <summary>返回某个值在数组中的第一个匹配项的索引</summary>
            /// <param name="searchElement" type="Object">要在数组中定位的值</param>
            /// <param name="fromIndex" type="Number" optional="true">用于开始搜索的数组索引</param>
            /// <returns type="Number">数组中的searchElement的第一个匹配项的索引&#10;如果未找到searchElement则为-1</returns>

            for (var i = fromIndex || 0; i < this.length; i++) {
                if (this[i] === searchElement) return i;
            }
            return -1;
        };
    }

    if (!("lastIndexOf" in Array.prototype)) {
        Array.prototype.lastIndexOf = function () {
            /// <summary>返回某个值在数组中的最后一个匹配项的索引</summary>
            /// <param name="searchElement" type="Object">要在数组中定位的值</param>
            /// <param name="fromIndex" type="Number" optional="true">用于开始搜索的数组索引</param>
            /// <returns type="Number">数组中的searchElement的最后一个匹配项的索引&#10;如果未找到searchElement则为-1</returns>

            for (var i = fromIndex || this.length; i--;) {
                if (this[i] === searchElement) return i;
            }
            return -1;
        };
    }

    if (!("defineProperty" in Object) &&
        "__defineGetter__" in Object.prototype) {
        // 通过非标准函数实现ES5的Get/Set访问器
        Object.defineProperty = function (obj, attr, settings) {
            /// <summary>访问器</summary>
            /// <param name="obj" type="Object">要绑定的对象</param>
            /// <param name="attr" type="String">要绑定的属性名</param>
            /// <param name="settings" type="Obejct">设置</param>

            if (!settings) return;
            settings.get && obj.prototype.__defineGetter__(attr, function () {
                settings.get.apply(obj);
            });
            settings.set && obj.prototype.__defineSetter__(attr, function () {
                settings.set.apply(obj);
            });
        };
    }

    if (typeof HTMLElement != "undefined" &&
        !("innerText" in HTMLElement.prototype) &&
        typeof Object.defineProperty != "undefined") {
        // 让FireFox兼容innerText
        Object.defineProperty(HTMLElement.prototype, "innerText", {
            get: function () {
                return this.textContent;
            },
            set: function (value) {
                this.textContent = value;
            }
        });
    }

    if (!("defineProperty" in Object)) {
        Object.defineProperty = function () { };
    }

    // 性能
    window.performance = window.performance ||
                         window[Jyo.prefix.js + "Performance"];

    // 获取用户媒体
    navigator.getUserMedia = navigator.getUserMedia ||
                             navigator[Jyo.prefix.js + "GetUserMedia"];

    // 获取MIDI数据对象
    navigator.requestMIDIAccess = navigator.requestMIDIAccess ||
                                  navigator[Jyo.prefix.js + "RequestMIDIAccess"];

    // 电池状态
    navigator.battery = navigator.battery ||
                        navigator[Jyo.prefix.js + "Battery"];

    // 游戏手柄
    if (!("getGamepads" in navigator)) {
        navigator.getGamepads = function () {
            return (navigator.msGetGamepads && navigator.msGetGamepads()) ||
                   (navigator.webkitGetGamepads && navigator.webkitGetGamepads()) ||
                   (navigator.mozGetGamepads && navigator.mozGetGamepads()) ||
                   navigator.msGamepads ||
                   navigator.webkitGamepads ||
                   navigator.mozGamepads ||
                   navigator.gamepads;
        };
    }

    // 震动
    navigator.vibrate = navigator.vibrate ||
                        navigator.webkitVibrate ||
                        navigator.mozVibrate ||
                        navigator.msVibrate;

    // Url操作
    window.URL = window.URL || window[Jyo.prefix.js + "URL"];

    // 重力感应事件
    window.DeviceMotionEvent = window.DeviceMotionEvent ||
                               window[Jyo.prefix.js + "DeviceMotionEvent"];

    // 获取鼠标锁
    var hce = HTMLCanvasElement.prototype;
    hce.requestPointerLock = hce.requestPointerLock ||
                             hce[Jyo.prefix.js + "RequestPointerLock"];

    // 退出鼠标锁
    document.exitPointerLock = document.exitPointerLock ||
                               document[Jyo.prefix.js + "ExitPointerLock"];

    try {
        // 锁定屏幕方向
        screen.lockOrientation = screen.lockOrientation ||
                                 screen[Jyo.prefix.js + "LockOrientation"];

        // 取消锁定屏幕方向
        screen.unlockOrientation = screen.unlockOrientation ||
                                   screen[Jyo.prefix.js + "UnlockOrientation"];
    } catch (e) { }

    // 进入全屏
    var elList = [HTMLElement.prototype, SVGElement.prototype];
    for (var el in elList) {
        el = elList[el];

        el.requestFullscreen = el.requestFullscreen ||
                               el.mozRequestFullscreen ||
                               el.mozRequestFullScreen ||
                               el.webkitRequestFullscreen ||
                               el.msRequestFullscreen;
    }

    // 退出全屏
    document.exitFullscreen = document.exitFullscreen ||
                              document.webkitCancelFullScreen ||
                              document.mozCancelFullScreen ||
                              document.msCancelFullScreen;

    (function () {
        var lastTime = 0;

        // 获取动画框架
        window.requestAnimationFrame = window.requestAnimationFrame ||
                                       window[Jyo.prefix.js + "RequestAnimationFrame"] ||
                                       function (callback) { setTimeout(callback, 16.67); };

        // 取消动画框架
        window.cancelAnimationFrame = window.cancelAnimationFrame ||
                                      window[Jyo.prefix.js + "CancelAnimationFrame"] ||
                                      window[Jyo.prefix.js + "CancelRequestAnimationFrame"] ||
                                      function (id) { window.clearTimeout(id); };

        if (!("requestAnimationFrame" in window)) {
            window.requestAnimationFrame = function (callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
                var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
        if (!("cancelAnimationFrame" in window)) {
            window.cancelAnimationFrame = function (id) {
                clearTimeout(id);
            };
        }
    }());

    // 音频上下文
    window.AudioContext = window.AudioContext ||
                          window[Jyo.prefix.js + "AudioContext"];

    // 语音识别
    window.SpeechRecognition = window.SpeechRecognition ||
                               window[Jyo.prefix.js + "SpeechRecognition"];

    if (!("indexedDB" in window)) {
        // IndexedDB对象
        if ("webkitIndexedDB" in window) {
            window.indexedDB = window.webkitIndexedDB;
            window.IDBKeyRange = window.webkitIDBKeyRange;
            window.IDBTransaction = window.webkitIDBTransaction;
        }
        else if ("mozIndexedDB" in window) {
            window.indexedDB = window.mozIndexedDB;
        }
        else if ("msIndexedDB" in window) {
            window.indexedDB = window.msIndexedDB;
        }
    }
})(); Jyo.Overload = function () {
    "use strict";

    // 重载所记录的数组
    var list = [];

    // 匹配函数名正则
    var reFunction = /function\s((\w|\w)+)/;

    var fun = function () {
        /// <summary>调用重载函数</summary>

        var canRun = false;

        for (var i = 0, types; i < list.length; i += 2) {
            types = list[i];

            if (types.length === 0 && arguments.length == 0) {
                canRun = true;
                break;
            }

            if (types.length != arguments.length &&
                types.length &&
                types[types.length - 1] !== "...") {
                continue;
            }

            for (var n = 0, type, inputType; n < types.length; n++) {
                type = types[n] || "",
                inputType = arguments[n];

                if (type === "...") {
                    if (n + 1 === types.length) {
                        canRun = true;
                    }
                    break;
                }

                var typeName = reFunction.exec(type.toString()) || "";
                if (typeName != null && typeName != "") typeName = typeName[1];

                if (type === "*" ||
                    type === inputType ||
                    inputType instanceof type ||
                    typeof inputType == typeName.toLowerCase()) {
                    if (n + 1 === types.length) {
                        canRun = true;
                        break;
                    }
                    continue;
                }
                break;
            }

            if (canRun) {
                break;
            }
        }

        if (canRun) {
            return list[i + 1].apply(this, arguments);
        }

        throw new TypeError("Invalid parameter");
    };

    fun.add = function (types, callback) {
        /// <summary>添加重载函数</summary>
        /// <param name="types" type="String">重载所需要的函数类型表</param>
        /// <param name="callback" type="Function">重载所触发的函数</param>

        types = types || [];

        if (types instanceof Array) {
            list.push(types, callback);
            return this;
        }

        if (types.toString().trim() !== "") {
            types = types.split(",");
        }

        var type = null;
        for (var i = 0; i < types.length; i++) {
            type = types[i].trim();

            if (type === "..." || type == "*") {
                continue;
            }

            types[i] = type = eval(type);

            if (typeof types[i] == "undefined") {
                throw new ReferenceError(types[i] + " is not defined");
            }
        }

        list.push(types, callback);
        return this;
    };

    return fun;
}; Math.arctg = function (value) {
    /// <summary>反正切</summary>
    /// <param name="value" type="Number">计算值</param>
    /// <returns type="Number"></returns>

    return Math.atan2(value) / Math.PI * 180;
};

Math.floatDiv = function (num1, num2) {
    /// <summary>浮点值除法</summary>
    /// <param name="num1" type="Number">第一个浮点值</param>
    /// <param name="num1" type="Number">第二个浮点值</param>
    /// <returns type="Number"></returns>

    var t1 = 0, t2 = 0, r1, r2;
    try { t1 = num1.toString().split(".")[1].length } catch (e) { }
    try { t2 = num2.toString().split(".")[1].length } catch (e) { }
    with (Math) {
        r1 = Number(num1.toString().replace(".", ""))
        r2 = Number(num2.toString().replace(".", ""))
        return (r1 / r2) * pow(10, t2 - t1);
    }
};

Math.floatMul = function (num1, num2) {
    /// <summary>浮点值乘法</summary>
    /// <param name="num1" type="Number">第一个浮点值</param>
    /// <param name="num1" type="Number">第二个浮点值</param>
    /// <returns type="Number"></returns>

    var m = 0, s1 = num1.toString(), s2 = num2.toString();
    try { m += s1.split(".")[1].length } catch (e) { }
    try { m += s2.split(".")[1].length } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
};

Math.floatAdd = function (num1, num2) {
    /// <summary>浮点值加法</summary>
    /// <param name="num1" type="Number">第一个浮点值</param>
    /// <param name="num1" type="Number">第二个浮点值</param>
    /// <returns type="Number"></returns>

    var r1, r2, m;
    try { r1 = num1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = num2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return (num1 * m + num2 * m) / m
};

Math.floatSub = function (num1, num2) {
    /// <summary>浮点值减法</summary>
    /// <param name="num1" type="Number">第一个浮点值</param>
    /// <param name="num1" type="Number">第二个浮点值</param>
    /// <returns type="Number"></returns>

    var r1, r2, m, n;
    try { r1 = num1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = num2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    //last modify by deeka
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((num1 * m - num2 * m) / m).toFixed(n);
};

Math.gcd = function (a, b) {
    /// <summary>采用欧氏方法找到最大公约数</summary>
    /// <param name="a" type="Number">数字1</param>
    /// <param name="b" type="Number">数字2</param>
    /// <returns type="Number"></returns>

    if (b > a) return gcd(b, a)
    if (b === 0) return a
    return MathHelper.gcd(b, a % b)
};

Math.lcm = function (a, b) {
    /// <summary>找到最小公倍数</summary>
    /// <param name="a" type="Number">数字1</param>
    /// <param name="b" type="Number">数字2</param>
    /// <returns type="Number"></returns>

    a = Math.max(a, [b, b = Math.min(a, b)][0]);
    return function (p) {
        while (b != 0) a = [b, b = Math.max(a, b) % b][0];
        return p / a;
    }(a * b);
};

Math.prefixInteger = function (number, length) {
    /// <summary>用0补全位数</summary>
    /// <param name="number" type="Number">要补全的数字</param>
    /// <param name="length" type="Number">要补全的位数</param>
    /// <returns type="Number"></returns>

    return (number / Math.pow(10, length)).toFixed(length).substr(2);
};

Math.toRadian = function (degress) {
    /// <summary>角度转弧度</summary>
    /// <param name="degress" type="Number">角度值</param>
    /// <returns type="Number"></returns>

    return degress * this.pi / 180;
};

Math.toDegrees = function (radian) {
    /// <summary>弧度转角度</summary>
    /// <param name="radian" type="Number">弧度值</param>
    /// <returns type="Number"></returns>

    return radian * 180 / this.pi;
};


Math.getPointingRotation = function (originX, originY, targetX, targetY) {
    /// <summary>获取指向旋转弧度值</summary>
    /// <param name="originX" type="Number">源向量X坐标</param>
    /// <param name="originY" type="Number">源向量Y坐标</param>
    /// <param name="targetX" type="Number">目标向量X坐标</param>
    /// <param name="targetY" type="Number">目标向量Y坐标</param>
    /// <returns type="Number"></returns>

    return Math.atan2(targetY - originY, targetX - originX);
};

Math.distance = Jyo.Overload().
                add("Number, Number, Number, Number", function (p1X, p1Y, p2X, p2Y) {
                    /// <summary>计算距离</summary>
                    /// <param name="p1X" type="Number">向量1X坐标</param>
                    /// <param name="p1Y" type="Number">向量1Y坐标</param>
                    /// <param name="p2X" type="Number">向量2X坐标</param>
                    /// <param name="p2Y" type="Number">向量2Y坐标</param>
                    /// <returns type="Number"></returns>

                    var dx = p2X - p1Y,
                        dy = p2Y - p1Y;

                    return Math.sqrt(dx * dx + dy * dy);
                }).
                add("Number, Number, Number, Number, Number, Number", function (p1X, p1Y, p1Z, p2X, p2Y, p2Z) {
                    /// <summary>计算距离</summary>
                    /// <param name="p1X" type="Number">向量1X坐标</param>
                    /// <param name="p1Y" type="Number">向量1Y坐标</param>
                    /// <param name="p2X" type="Number">向量2X坐标</param>
                    /// <param name="p2Y" type="Number">向量2Y坐标</param>
                    /// <returns type="Number"></returns>

                    var dx = p2X - p1Y,
                        dy = p2Y - p1Y,
                        dz = p2Z - p1Z;

                    return Math.sqrt(dx * dx + dy * dy + dz * dz);
                });

Math.getBezierCurvePoints = function (fromX, fromY, cpX, cpY, toX, toY) {
    var xa, ya, xb, yb, x, y, n = 20, points = [];

    function getPt(n1, n2, perc) {
        var diff = n2 - n1;
        return n1 + (diff * perc);
    }

    var j = 0;
    for (var i = 0; i <= n; i++) {
        j = i / n;

        // The Green Line
        xa = getPt(fromX, cpX, j);
        ya = getPt(fromY, cpY, j);
        xb = getPt(cpX, toX, j);
        yb = getPt(cpY, toY, j);

        // The Black Dot
        x = getPt(xa, xb, j);
        y = getPt(ya, yb, j);

        points.push(x, y);
    }
    return points;
};

Number.prototype.toUInt = function () {
    /// <summary>转换为UInt</summary>
    /// <returns type="Number"></returns>

    return this < 0 ? this + 4294967296 : this;
};

Number.prototype.bytes32 = function () {
    /// <summary>转换为32位bytes</summary>
    /// <returns type="Array"></returns>

    return [(this >>> 24) & 0xff, (this >>> 16) & 0xff, (this >>> 8) & 0xff, this & 0xff];
};

Number.prototype.bytes32sw = function () {
    /// <summary>转换为倒置32位bytes</summary>
    /// <returns type="Array"></returns>

    return [this & 0xff, (this >>> 8) & 0xff, (this >>> 16) & 0xff, (this >>> 24) & 0xff];
};

Number.prototype.bytes16 = function () {
    /// <summary>转换为16位bytes</summary>
    /// <returns type="Array"></returns>

    return [(this >>> 8) & 0xff, this & 0xff];
};

Number.prototype.bytes16sw = function () {
    /// <summary>转换为倒置16位bytes</summary>
    /// <returns type="Array"></returns>

    return [this & 0xff, (this >>> 8) & 0xff];
};

Array.prototype.shuffle = function () {
    /// <summary>洗牌</summary>
    /// <returns type="Array"></returns>

    for (var i = this.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};

Array.prototype.pdf2cdf = function () {
    var cdf = this.slice();

    for (var i = 1; i < cdf.length - 1; i++)
        cdf[i] += cdf[i - 1];

    // Force set last cdf to 1, preventing floating-point summing error in the loop.
    cdf[cdf.length - 1] = 1;

    return cdf;
};

Array.prototype.discreteSampling = function () {
    var y = Math.random();
    for (var x in this)
        if (y < this[x])
            return x;

    return -1; // should never runs here, assuming last element in cdf is 1
};

Array.prototype.random = function (probabilityTable) {
    /// <summary>随机抽取元素</summary>
    /// <param name="probabilityTable" type="Array" optional="true">概率数组(长度必须和本数组一致)</param>

    if (typeof probabilityTable != "undefined" &&
        probabilityTable instanceof Array) {
        var targetCdf = probabilityTable.pdf2cdf();
        return this[targetCdf.discreteSampling()];
    } else {
        if (probabilityTable.length == this.length) {
            return this[Math.floor(Math.random() * this.length)];
        }
    }
};

Array.prototype.insert = function (value, index) {
    /// <summary>插入项</summary>
    /// <param name="value" type="Object">元素</param>
    /// <param name="index" type="Number">索引</param>
    /// <returns type="Array"></returns>

    if (index > this.length) index = this.length;
    if (index < -this.length) index = 0;
    if (index < 0) index = this.length + index;
    for (var i = this.length; i > index; i--) {
        this[i] = this[i - 1];
    }
    this[index] = value;
    return this;
};

Array.prototype.remove = function (index) {
    /// <summary>移除项</summary>
    /// <param name="index" type="Number">索引</param>
    /// <returns type="Array">数组</returns>

    return (index < 0) ? this : this.slice(0, index).concat(this.slice(index + 1, this.length));
};

Array.prototype.clear = function () {
    /// <summary>清空数组</summary>

    this.length = 0;
};

Array.prototype.adler32 = function (start, len) {
    /// <summary>计算Adler32校验和</summary>
    /// <param name="start" type="Number">起始位置</param>
    /// <param name="len" type="Number">长度</param>
    /// <returns type="Number"></returns>

    switch (arguments.length) { case 0: start = 0; case 1: len = this.length - start; }
    var a = 1, b = 0;
    for (var i = 0; i < len; i++) {
        a = (a + this[start + i]) % 65521; b = (b + a) % 65521;
    }
    return ((b << 16) | a).toUInt();
};

Array.prototype.crc32 = function (start, len) {
    /// <summary>计算CRC32校验和</summary>
    /// <param name="start" type="Number">起始位置</param>
    /// <param name="len" type="Number">长度</param>
    /// <returns type="Number"></returns>

    switch (arguments.length) { case 0: start = 0; case 1: len = this.length - start; }
    var table = arguments.callee.crctable;
    if (!table) {
        table = [];
        var c;
        for (var n = 0; n < 256; n++) {
            c = n;
            for (var k = 0; k < 8; k++)
                c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
            table[n] = c.toUInt();
        }
        arguments.callee.crctable = table;
    }
    var c = 0xffffffff;
    for (var i = 0; i < len; i++)
        c = table[(c ^ this[start + i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff).toUInt();
};

// 空字符串
String.empty = "";

String.format = function (str, args) {
    /// <summary>格式化字符串</summary>
    /// <param name="str" type="String">要格式化的字符串</param>
    /// <param name="args" type="[..]">其余参数</param>
    /// <returns type="String"></returns>

    var tempStr = str;
    for (var i = 0; i < arguments.length; i++) {
        var reg = eval("/\\{" + i + "\\}/g");
        tempStr = tempStr.replace(reg, arguments[i + 1]);
    }
    return tempStr;
};

String.prototype.repeat = function (n) {
    /// <summary>重复字符串</summary>
    /// <param name="n" type="Number">要重复的次数</param>
    /// <returns type="String"></returns>

    var _this = this;
    var result = '';
    for (var i = 0; i < n; i++) {
        result += _this;
    }
    return result;
};

if ("DataView" in window) {
    DataView.prototype.getString = function (pos, length) {
        /// <summary>获取特定字符串</summary>
        /// <param name="pos" type="Number">起始点</param>
        /// <param name="length" type="Number">获取长度</param>
        /// <returns type="String"></returns>

        var str = "";
        var u8 = new Uint8Array(1);
        for (var i = pos; i < pos + length; i++) {
            u8[0] = this.getUint8(i);
            if (u8[0] == 0) break;
            str += String.fromCharCode(u8[0]);
        }
        return str;
    };

    DataView.prototype.getVectorN = function (pos, n) {
        /// <summary>获取向量N</summary>
        /// <param name="pos" type="Number">起始点</param>
        /// <param name="n" type="Number">获取长度</param>
        /// <returns type="Float32Array"></returns>

        var vec = new Float32Array(n);
        for (var i = 0 ; i < n ; i++) {
            vec[i] = this.getFloat32(pos + i * 4, true);
        }
        return vec;
    }
} Jyo.Object = function (objProto) {
    /// <summary>Jyo.Object类</summary>
    /// <param name="objProto" type="Object" optional="true">对象原型</param>
    /// <returns type="Jyo.Object"></returns>

    this.getHashCode = function () {
        /// <summary>用作特定类型的哈希函数</summary>
        /// <returns type="Number"></returns>

        return 0;
    };

    this.equals = function (obj) {
        /// <summary>确定指定的Object是否等于当前的Object</summary>
        /// <param name="obj" type="Jyo.Object">与当前Object进行比较的Object</param>
        /// <returns type="Boolean"></returns>

        if (!obj || obj != this) {
            return false;
        }
        return true;
    };

    this.memberwiseClone = function () {
        /// <summary>创建当前Object的浅表副本</summary>
        /// <returns type="Jyo.Object"></returns>

        var obj = new Jyo.Object();
        for (var i in this) {
            if (typeof this[i] != "function" && this.hasOwnProperty(i)) {
                obj[i] = this[i];
            }
        }
        return obj;
    };

    if (typeof objProto != "undefined") {
        for (var i in objProto) {
            this[i] = objProto[i];
        }
    }
};

Jyo.Object.equals = Jyo.Overload().add("*,*", function (objA, objB) {
    /// <summary>确定指定的Object实例是否被视为相等</summary>
    /// <param name="objA" type="Jyo.Object">要比较的第一个Object</param>
    /// <param name="objB" type="Jyo.Object">要比较的第二个Object</param>
    /// <returns type="Boolean"></returns>

    if (!objA && !objB ||
        objA === objB ||
        (objA instanceof Jyo.Object && objA.equals(objB) && objB instanceof Jyo.Object && objA.getHashCode() === objB.getHashCode())) {
        return true;
    }
    return false;
}); Jyo.Renderer = function () {
    /// <summary>渲染器接口</summary>
    /// <returns type="Jyo.Renderer"></returns>

    // 文本测量元素
    if (document.getElementById("txtMetric")) {
        this.textMetricElement = document.getElementById("txtMetric");
    } else {
        this.textMetricElement = document.createElement("span");
        this.textMetricElement.id = "txtMetric";
        this.textMetricElement.style.cssText = "position:absolute;top:-1000px;left:-1000px;padding:0px;margin:0px;z-index:-1000;color:transparent;pointer-events:none;";
        this.textMetricElement.innerHTML = "你好Helloこんにちは";
        this.catchTextHeight = {};
        document.body.appendChild(this.textMetricElement);
    }

    Jyo.Renderer.constructor.apply(this, arguments);
};

Jyo.Renderer.constructor = Jyo.Overload().
                           add("String", function (domId) {
                               /// <summary>渲染器接口构造函数</summary>
                               /// <param name="domId" type="String">Div元素id</param>
                               /// <returns type="Jyo.Renderer"></returns>

                               var domElement = document.getElementById(domId) ||
                                                document.getElementsByClassName(domId)[0] ||
                                                document.getElementsByTagName(domId)[0];
                               Jyo.Renderer.call(this, domElement);
                           }).
                           add("*", function (domElement) {
                               if (!domElement || typeof domElement.getAttribute == "undefined") {
                                   throw new Error("Using an invalid element");
                               }

                               // 画区宽度
                               this.width = domElement.getAttribute("width") || domElement.clientWidth;

                               // 画区高度
                               this.height = domElement.getAttribute("height") || domElement.clientHeight;

                               // 所绑定的DOM元素
                               this.domElement = domElement;

                               this.domElement.style.position = "relative";

                               // 自动缩放模式
                               this.autoSizeMode = "none";

                               // 缩放值
                               this.scaling = 1;

                               // 禁止右键菜单
                               domElement.oncontextmenu = function () { return false; };

                               // 触屏不显示触摸框
                               domElement.style.cssText += "-webkit-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);";

                               if (navigator.userAgent.indexOf("Android") >= 0) {
                                   // 解决安卓下重影问题
                                   document.body.style.cssText += "overflow:visible;-webkit-transform: translateZ(0);";
                               }

                               var assign = this.assign;
                               delete this.assign;

                               if (typeof assign == "undefined") {
                                   // 分配合适的渲染器
                                   var renderer;
                                   for (var i in Jyo.Renderer) {
                                       renderer = Jyo.Renderer[i];
                                       if (typeof renderer.isSupport != "undefined" && renderer.isSupport()) {
                                           this._applyRenderer(renderer);
                                           return this;
                                       }
                                   }
                               } else {
                                   // 尝试使用指定的渲染器
                                   var renderer = Jyo.Renderer[assign];
                                   if (renderer && typeof renderer.isSupport != "undefined" && renderer.isSupport()) {
                                       this._applyRenderer(renderer);
                                       return this;
                                   } else {
                                       throw new Error("Can not use this renderer");
                                   }
                               }

                               throw new Error("No suitable renderer");
                           }).
                           add("String, String", function (domId, assign) {
                               /// <summary>渲染器接口构造函数</summary>
                               /// <param name="domId" type="String">Div元素id</param>
                               /// <param name="assign" type="String" optional="true">指定使用的渲染技术，可选如下：&#10;WebGL&#10;Canvas&#10;Svg&#10;Css&#10;VML -> (IE专有，不推荐)</param>
                               /// <returns type="Jyo.Renderer"></returns>

                               this.assign = assign;
                               Jyo.Renderer.call(this, domId);
                           }).
                           add("*, String", function (domElement, assign) {
                               /// <summary>渲染器接口构造函数</summary>
                               /// <param name="domElement" type="HTMLDivElement">Div元素</param>
                               /// <param name="assign" type="String" optional="true">指定使用的渲染技术，可选如下：&#10;WebGL&#10;Canvas&#10;Svg&#10;Css&#10;VML -> (IE专有，不推荐)</param>
                               /// <returns type="Jyo.Renderer"></returns>

                               this.assign = assign;
                               Jyo.Renderer.call(this, domElement);
                           });

Jyo.Renderer.prototype = new Jyo.Object({
    _applyRenderer: function (renderer) {
        /// <summary>应用渲染器</summary>
        /// <param name="renderer" type="Jyo.Renderer">要应用的渲染器类</param>

        this.mode = renderer.mode;
        for (var i in renderer.prototype) {
            if (renderer.hasOwnProperty(i)) continue;
            this[i] = renderer.prototype[i];
        }
        renderer.call(this);
    },
    _addRenderElement: function (tagName) {
        /// <summary>添加渲染用元素</summary>
        /// <param name="tagName" type="String">标签名称</param>

        var element = document.createElement(tagName);
        element.width = this.width;
        element.height = this.height;
        element.style.cssText = "position:relative;left:0px;top:0px;width:100%;height:100%;margin:0px;padding:0px;border:0px;outline:none;";
        this.domElement.appendChild(element);
        this.canvas = element;
    },
    resize: function (width, height) {
        /// <summary>重新设置大小</summary>
        /// <param name="width" type="Number">宽度</param>
        /// <param name="height" type="Number">高度</param>

        var element = this.domElement;
        element.style.width = width + "px";
        element.style.height = height + "px";
        element.setAttribute("width", width);
        element.setAttribute("height", height);
        if (this.autoSizeMode !== "none") {
            this.autoSize();
        }
    },
    enableAutoSize: Jyo.Overload().
                    add(null, function () {
                        /// <summary>启用ratio模式进行画布自适应</summary>

                        this.enableAutoSize("ratio");
                    }).
                    add("Function", function (callback) {
                        /// <summary>启用ratio模式进行画布自适应</summary>
                        /// <param name="callback" type="Function">重置尺寸时触发函数</param>

                        this._autoSizeFunction = callback;
                        this.enableAutoSize("ratio");
                    }).
                    add("String", function (mode) {
                        /// <summary>启用画布自适应</summary>
                        /// <param name="mode" type="String" optional="true">适应模式，可用值如下:&#10;fill&#10;ratio&#10;默认为ratio</param>

                        var _this = this;

                        // 判断是否直接在body中显示
                        // 如果是，则增加全屏样式
                        var parentElement = this.domElement.parentElement || this.domElement.parentNode || document.body;
                        if (parentElement == document.body) {
                            var style;
                            var str = "html,body{margin:0;padding:0;width:100%;height:100%;overflow:hidden;} @viewport{width:device-width;user-zoom:fixed;user-scalable:fixed;}";
                            if (typeof window.attachEvent != "undefined") {
                                style = document.styleSheets["JyoJsHTMLStyle"] || document.createStyleSheet();
                                style.owningElement.id = "JyoJsHTMLStyle";
                                style.cssText = str;
                            }
                            else {
                                style = document.createElement("style");
                                style.id = "JyoJsHTMLStyle";
                                style.innerHTML = str;
                                var head = document.getElementsByTagName('head')[0];
                                if (typeof head != "undefined") {
                                    head.appendChild(style);
                                } else {
                                    document.appendChild(style);
                                }
                            }
                        }

                        this.autoSizeMode = function () {
                            if (mode !== "ratio" && mode !== "fill") {
                                return "ratio";
                            }
                            return mode;
                        }();
                        this._autoSizeFun = function () {
                            _this.autoSize();
                        };
                        window.addEventListener("resize", this._autoSizeFun);
                        this.autoSize();
                    }).
                    add("String, Function", function (mode, callback) {
                        /// <summary>启用画布自适应</summary>
                        /// <param name="mode" type="String">适应模式，可用值如下:&#10;fill&#10;ratio&#10;默认为ratio</param>
                        /// <param name="callback" type="Function">重置尺寸时触发函数</param>

                        this._autoSizeFunction = callback;
                        this.enableAutoSize(mode);
                    }),
    disableAutoSize: function () {
        /// <summary>停用画布自适应</summary>

        var style = this.domElement.style;
        style.width = this.width + "px";
        style.height = this.height + "px";
        style.marginTop = style.marginLeft = style.top = style.left = style.padding = "0px";
        style.position = "static";

        if (window.attachEvent) {
            document.styleSheets["JyoJsHTMLStyle"].cssText = "";
        }
        else {
            style[Jyo.prefix.lowercase + "Transform"] = style.transform = null;
            style[Jyo.prefix.lowercase + "TransformOrigin"] = style.transformOrigin = null;
            var htmlStyle = document.getElementById("JyoJsHTMLStyle");
            htmlStyle.parentElement.removeChild(htmlStyle);
        }

        if (typeof this._autoSizeFun != "undefined") {
            this.autoSizeMode = "none";
            window.removeEventListener("resize", this._autoSizeFun);
        }
    },
    autoSize: function () {
        /// <summary>让画布自适应一次</summary>

        var parentElement = this.domElement.parentElement || this.domElement.parentNode || document.body;
        var width = this.width,
            height = this.height,
            parentWidth = parentElement.clientWidth,
            parentHeight = parentElement.clientHeight;

        // 计算缩放值
        var scaling = Math.min(Math.floatDiv(parentWidth, width), Math.floatDiv(parentHeight, height));
        this.scaling = scaling;

        if (this.mode !== "Css") {
            // 若不使用Css渲染器,则手动计算子元素缩放

            var els = this.domElement.childNodes;
            for (var i = 0; i < els.length; i++) {
                if (typeof els[i].tagName == "undefined" || els[i].tagName.toLowerCase() != "div") continue;
                var cs = els[i].style;
                cs[Jyo.prefix.lowercase + "Transform"] = "scale(" + scaling + "," + scaling + ")";
                cs["transform"] = "scale(" + scaling + "," + scaling + ")";
                cs[Jyo.prefix.lowercase + "TransformOrigin"] = "0% 0%";
                cs["transformOrigin"] = "0% 0%";
            }
        }

        // 设置画布大小(Svg有效)
        if (this.mode === "Svg") {
            this.canvas.setAttribute("viewBox", "0 0 " + width + " " + height);
            this.canvas.setAttribute("width", (width * scaling) + "px");
            this.canvas.setAttribute("height", (height * scaling) + "px");
        }

        // 设置画区大小
        var style = this.domElement.style;
        if (this.autoSizeMode === "ratio") {
            style.width = (width * scaling) + "px";
            style.height = (height * scaling) + "px";
            if (parentElement == document.body) {
                style.marginTop = ((parentHeight - height * scaling) / 2) + "px";
                style.marginLeft = ((parentWidth - width * scaling) / 2) + "px";
            }
        } else if (this.autoSizeMode === "fill") {
            style.width = "100%";
            style.height = "100%";
            style.marginTop = "0px";
            style.marginLeft = "0px";
        }
        style.padding = "0px";

        if (typeof this._autoSize == "function") {
            // 如果渲染器需要其他缩放操作则触发

            this._autoSize(parentWidth, parentHeight);
        }

        if (typeof this._autoSizeFunction == "function") {
            // 自定义操作

            this._autoSizeFunction(scaling);
        }
    },
    getTextWidth: function (str, font) {
        /// <summary>获取文字宽度</summary>
        /// <param name="str" type="String">要获取的字符串</param>
        /// <param name="font" type="String" optional="true">字体</param>
        /// <returns type="Number"></returns>

        if (this.mode === "Canvas") {
            var oldFont = this.context.font;
            this.context.font = font;
            var w = this.context.measureText(str).width;
            this.context.font = oldFont;
            return w;
        } else {
            return this.getTextSize(str, font).width;
        }
    },
    getTextHeight: function (str, font) {
        /// <summary>获取文字高度</summary>
        /// <param name="str" type="String">要获取的字符串</param>
        /// <param name="font" type="String" optional="true">字体</param>
        /// <returns type="Number"></returns>

        if (this.catchTextHeight[font]) return this.catchTextHeight[font];
        var size = this.getTextSize(str, font);
        this.catchTextHeight[font] = size.height;
        return size.height;
    },
    getTextSize: function (str, font) {
        /// <summary>获取文字尺寸</summary>
        /// <param name="str" type="String">要获取的字符串</param>
        /// <param name="font" type="String" optional="true">字体</param>
        /// <returns type="Object"></returns>

        var tme = this.textMetricElement;

        tme.style.font = font || this.context.font;
        tme.innerHTML = str;
        return {
            width: tme.offsetWidth,
            height: tme.offsetHeight
        };
    },
    getHashCode: function () {
        /// <summary>返回此渲染器的哈希代码</summary>
        /// <returns type="Number">一个指定此渲染器的哈希代码的整数</returns>

        return this.width ^ this.height ^ 11;
    },
    equals: function (value) {
        /// <summary>测试两个渲染器是否相等</summary>
        /// <param name="value" type="Jyo.Color">要进行比较的Jyo.Renderer</param>
        /// <returns type="Boolean"></returns>

        if (this === value ||
            value instanceof Jyo.Renderer &&
            this.getHashCode() === value.getHashCode() &&
            this.mode === value.mode &&
            this.domElement === value.domElement) {
            return true;
        }
        return false;
    }
}); Jyo.Status = function () {
    /// <summary>游戏状态</summary>
    /// <returns type="Jyo.Status"></returns>

    // 是否正被使用中
    this.using = false;
};

Jyo.Status.prototype = new Jyo.Object({
    // 加载资源函数
    load: null,
    // 绘制内容函数
    draw: null,
    // 更新数据函数
    update: null,
    // 卸载资源函数
    unload: null,
    // 加载中显示屏幕
    loadingScreen: null
}); Jyo.Matrix = function () {
    /// <summary>矩阵类</summary>
    /// <returns type="Jyo.Matrix"></returns>

    Jyo.Matrix.constructor.apply(this, arguments);
};

Jyo.Matrix.constructor = Jyo.Overload().
                         add(null, function () {
                             /// <summary>矩阵对象构造函数</summary>
                             /// <returns type="Jyo.Matrix"></returns>

                             // 创建4*4矩阵的变量
                             for (var y = 1; y <= 4; y++) {
                                 for (var x = 1; x <= 4; x++) {
                                     this["m" + y + x] = 0;
                                 }
                             }
                         }).
                         add("Number,".repeat(15) + "Number", function (m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
                             /// <summary>矩阵对象构造函数</summary>
                             /// <param  name="m11" type="Number">矩阵中的一行第一列的值</param>
                             /// <param  name="m12" type="Number">矩阵中的一行第二列的值</param>
                             /// <param  name="m13" type="Number">矩阵中的一行第三列的值</param>
                             /// <param  name="m14" type="Number">矩阵中的一行第四列的值</param>
                             /// <param  name="m21" type="Number">矩阵中的二行第一列的值</param>
                             /// <param  name="m22" type="Number">矩阵中的二行第二列的值</param>
                             /// <param  name="m23" type="Number">矩阵中的二行第三列的值</param>
                             /// <param  name="m24" type="Number">矩阵中的二行第四列的值</param>
                             /// <param  name="m31" type="Number">矩阵中的三行第一列的值</param>
                             /// <param  name="m32" type="Number">矩阵中的三行第二列的值</param>
                             /// <param  name="m33" type="Number">矩阵中的三行第三列的值</param>
                             /// <param  name="m34" type="Number">矩阵中的三行第四列的值</param>
                             /// <param  name="m41" type="Number">矩阵中的四行第一列的值</param>
                             /// <param  name="m42" type="Number">矩阵中的四行第二列的值</param>
                             /// <param  name="m43" type="Number">矩阵中的四行第三列的值</param>
                             /// <param  name="m44" type="Number">矩阵中的四行第四列的值</param>
                             /// <returns type="Jyo.Matrix"></returns>

                             // 创建4*4矩阵的变量
                             this.m11 = m11;
                             this.m12 = m12;
                             this.m13 = m13;
                             this.m14 = m14;
                             this.m21 = m21;
                             this.m22 = m22;
                             this.m23 = m23;
                             this.m24 = m24;
                             this.m31 = m31;
                             this.m32 = m32;
                             this.m33 = m33;
                             this.m34 = m34;
                             this.m41 = m41;
                             this.m42 = m42;
                             this.m43 = m43;
                             this.m44 = m44;
                         });

// 矩阵相加
Jyo.Matrix.add = Jyo.Overload().
                 add("Jyo.Matrix, Jyo.Matrix", function (matrix1, matrix2) {
                     /// <summary>矩阵相加</summary>
                     /// <param name="matrix1" type="Jyo.Matrix">源矩阵</param>
                     /// <param name="matrix2" type="Jyo.Matrix">源矩阵</param>
                     /// <returns type="Jyo.Matrix"></returns>

                     var newMatrix = new Jyo.Matrix(),
                         attrName = null,
                         y, x;

                     for (y = 1; y <= 4; y++) {
                         for (x = 1; x <= 4; x++) {
                             attrName = ["m" + y + x];
                             newMatrix[attrName] = matrix1[attrName] + matrix2[attrName];
                         }
                     }
                     return newMatrix;
                 });

// 矩阵相减
Jyo.Matrix.subtract = Jyo.Overload().
                      add("Jyo.Matrix, Jyo.Matrix", function (matrix1, matrix2) {
                          /// <summary>矩阵相减</summary>
                          /// <param name="matrix1" type="Jyo.Matrix">源矩阵</param>
                          /// <param name="matrix2" type="Jyo.Matrix">源矩阵</param>
                          /// <returns type="Jyo.Matrix"></returns>

                          var newMatrix = new Jyo.Matrix(),
                              attrName = null,
                              y, x;

                          for (y = 1; y <= 4; y++) {
                              for (x = 1; x <= 4; x++) {
                                  attrName = ["m" + y + x];
                                  newMatrix[attrName] = matrix1[attrName] - matrix2[attrName];
                              }
                          }
                          return newMatrix;
                      });

// 矩阵相乘
Jyo.Matrix.multiply = Jyo.Overload().
                      add("Jyo.Matrix, Jyo.Matrix", function (matrix1, matrix2) {
                          /// <summary>矩阵相乘</summary>
                          /// <param name="matrix1" type="Jyo.Matrix">源矩阵</param>
                          /// <param name="matrix2" type="Jyo.Matrix">源矩阵</param>
                          /// <returns type="Jyo.Matrix"></returns>

                          var newMatrix = new Jyo.Matrix(),
                              y, x, n;

                          for (y = 1; y <= 4; y++) {
                              for (x = 1; x <= 4; x++) {
                                  newMatrix["m" + y + x] = 0;
                                  for (n = 1; n <= 4; n++)
                                      newMatrix["m" + y + x] += matrix1["m" + y + n] * matrix2["m" + n + x];
                              }
                          }
                          return newMatrix;
                      }).
                      add("Jyo.Matrix, Number", function (matrix1, scaleFactor) {
                          /// <summary>由标量值乘以一个矩阵</summary>
                          /// <param name="matrix1" type="Number">源矩阵</param>
                          /// <param name="scaleFactor" type="Number">标量值</param>
                          /// <returns type="Jyo.Matrix"></returns>

                          var newMatrix = new Jyo.Matrix(),
                              attrName = null,
                              y, x;

                          for (y = 1; y <= 4; y++) {
                              for (x = 1; x <= 4; x++) {
                                  attrName = ["m" + y + x];
                                  newMatrix[attrName] = matrix1[attrName] * scaleFactor;
                              }
                          }
                          return newMatrix;
                      }).
                      add("Number, Jyo.Matrix", function (scaleFactor, matrix1) {
                          /// <summary>由标量值乘以一个矩阵</summary>
                          /// <param name="scaleFactor" type="Number">标量值</param>
                          /// <param name="matrix1" type="Number">源矩阵</param>
                          /// <returns type="Jyo.Matrix"></returns>

                          return Jyo.Matrix.multiply(matrix1, scaleFactor);
                      });

// 矩阵相除
Jyo.Matrix.divide = Jyo.Overload().
                      add("Jyo.Matrix, Jyo.Matrix", function (matrix1, matrix2) {
                          /// <summary>矩阵相除</summary>
                          /// <param name="matrix1" type="Jyo.Matrix">源矩阵</param>
                          /// <param name="matrix2" type="Jyo.Matrix">源矩阵</param>
                          /// <returns type="Jyo.Matrix"></returns>

                          var newMatrix = new Jyo.Matrix(),
                              y, x, n;

                          for (y = 1; y <= 4; y++) {
                              for (x = 1; x <= 4; x++) {
                                  attrName = ["m" + y + x];
                                  newMatrix[attrName] = matrix1[attrName] / matrix2[attrName];
                              }
                          }
                          return newMatrix;
                      }).
                      add("Jyo.Matrix, Number", function (matrix1, scaleFactor) {
                          /// <summary>由标量值为被除数计算一个矩阵</summary>
                          /// <param name="matrix1" type="Number">源矩阵</param>
                          /// <param name="scaleFactor" type="Number">标量值</param>
                          /// <returns type="Jyo.Matrix"></returns>

                          var newMatrix = new Jyo.Matrix(),
                              attrName = null,
                              y, x;

                          for (y = 1; y <= 4; y++) {
                              for (x = 1; x <= 4; x++) {
                                  attrName = ["m" + y + x];
                                  newMatrix[attrName] = matrix1[attrName] / scaleFactor;
                              }
                          }
                          return newMatrix;
                      }).
                      add("Number, Jyo.Matrix", function (scaleFactor, matrix1) {
                          /// <summary>由标量值为被除数计算一个矩阵</summary>
                          /// <param name="scaleFactor" type="Number">标量值</param>
                          /// <param name="matrix1" type="Number">源矩阵</param>
                          /// <returns type="Jyo.Matrix"></returns>

                          return Jyo.Matrix.multiply(matrix1, scaleFactor);
                      });

// 矩阵转置
Jyo.Matrix.transpose = Jyo.Overload().
                       add("Jyo.Matrix", function (matrix) {
                           /// <summary>转置矩阵的行和列</summary>
                           /// <param name="matrix" type="Jyo.Matrix">源矩阵</param>
                           /// <returns type="Jyo.Matrix"></returns>

                           var newMatrix = new Jyo.Matrix(),
                               y, x;

                           for (y = 1; y <= 4; y++) {
                               for (x = 1; x <= 4; x++) {
                                   newMatrix["m" + y + x] = matrix["m" + x + y];
                               }
                           }
                           return newMatrix;
                       });

Jyo.Matrix.prototype = new Jyo.Object({
    print: function () {
        /// <summary>打印矩阵</summary>
        /// <returns type="String"></returns>

        var str = "";

        for (var y = 1; y <= 4; y++) {
            for (var x = 1; x <= 4; x++) {
                str += this["m" + y + x] + "\t";
            }
            str += "\r\n";
        }
        return str;
    }
});

// 单位矩阵实例
Jyo.Matrix.identity = new Jyo.Matrix(1, 0, 0, 0,
                                     0, 1, 0, 0,
                                     0, 0, 1, 0,
                                     0, 0, 0, 1); Jyo.Texture = function () {
                                         /// <summary>材质类</summary>
                                         /// <returns type="Jyo.Texture"></returns>

                                         // 具体对象
                                         this.object = null;
                                     };

Jyo.Texture.prototype = new Jyo.Object({
    // 指示可用加载器
    useLoader: "Texture",
    bind: function (renderer, img) {
        /// <summary>绑定具体对象到托管对象</summary>
        /// <param name="renderer" type="Jyo.Renderer">绑定的渲染器</param>
        /// <param name="img" type="WebGLShader">要绑定的具体对象</param>

        if (renderer.mode == "WebGL") {
            var gl = renderer.context;
            var texture = gl.createTexture();

            gl.bindTexture(gl.TEXTURE_2D, texture);
            // 控制滤波
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

            var error = gl.getError();
            if (error !== gl.NO_ERROR && error !== gl.CONTEXT_LOST_WEBGL) {
                throw new Error(error);
            }
            texture.image = img;
            this.gl = gl;
        }

        this.object = texture || img;
        this.width = img.width;
        this.height = img.height;
    },
    getHashCode: function () {
        /// <summary>返回此材质的哈希代码</summary>
        /// <returns type="Number">一个指定此材质的哈希代码的整数</returns>

        return 112;
    },
    equals: function (value) {
        /// <summary>测试两个材质是否相等</summary>
        /// <param name="value" type="Jyo.Texture">要进行比较的Jyo.Texture</param>
        /// <returns type="Boolean"></returns>

        if (this === value ||
            value instanceof Jyo.Texture &&
            this.getHashCode() === value.getHashCode() &&
            this.object === value.object) {
            return true;
        }
        return false;
    },
    destroy: function () {
        /// <summary>销毁对象</summary>

        if (this.gl) {
            this.gl.deleteTexture(this.object);
        }
        this.object = null;
        delete this.object;
    }
});; (function () {
    Jyo.Color = function () {
        /// <summary>颜色类</summary>
        /// <returns type="Jyo.Color"></returns>

        Jyo.Color.constructor.apply(this, arguments);
    };

    var matchCanvas = document.createElement("canvas");
    if (typeof HTMLCanvasElement != "function" && !!matchCanvas) {
        var matchCtx = matchCanvas.getContext("2d");
        matchCanvas.width = 4;
        matchCanvas.height = 4;
    }

    Jyo.Color.constructor = Jyo.Overload().
                            add(null, function () {
                                /// <summary>颜色构造函数</summary>
                                /// <returns type="Jyo.Color"></returns>

                                Jyo.Color.call(this, 0, 0, 0, 1);
                            }).
                            add("Image", function (image) {
                                /// <summary>颜色构造函数</summary>
                                /// <param name="image" type="Image">图像对象</param>
                                /// <returns type="Jyo.Color"></returns>

                                var r = 0, g = 0, b = 0, skip = 0, pixs;
                                if (!matchCtx) {
                                    Jyo.Color.call(this, 255, 255, 255, 1);
                                    return;
                                }
                                matchCtx.drawImage(image, 0, 0, 4, 4);
                                try {
                                    pixs = matchCtx.getImageData(0, 0, 4, 4).data;
                                }
                                catch (e) {
                                    Jyo.Color.call(this, 255, 255, 255, 1);
                                    return;
                                }
                                for (var i = 0; i < pixs.length; i += 4) {
                                    if (pixs[i + 3] < 30) {
                                        skip++;
                                        continue;
                                    }
                                    r += pixs[i] * 4;
                                    g += pixs[i + 1] * 4;
                                    b += pixs[i + 2] * 4;
                                }
                                r = (r / (pixs.length - skip)) | 0;
                                g = (g / (pixs.length - skip)) | 0;
                                b = (b / (pixs.length - skip)) | 0;
                                var max = Math.max(r, g, b);
                                if (r == max) {
                                    r = (r * 1.2) | 0;
                                    g = (g * 0.8) | 0;
                                    b = (b * 0.8) | 0;
                                }
                                else if (g == max) {
                                    g = (g * 1.2) | 0;
                                    r = (r * 0.8) | 0;
                                    b = (b * 0.8) | 0;
                                }
                                else if (b == max) {
                                    b = (b * 1.2) | 0;
                                    g = (g * 0.8) | 0;
                                    r = (r * 0.8) | 0;
                                }
                                Jyo.Color.call(this, r, g, b);
                            }).
                            add("Jyo.Texture", function (texture) {
                                /// <summary>颜色构造函数</summary>
                                /// <param name="texture" type="Jyo.Texture">材质对象</param>
                                /// <returns type="Jyo.Color"></returns>

                                Jyo.Color.call(this, texture.object);
                            }).
                            add("Jyo.Color", function (color) {
                                /// <summary>颜色构造函数</summary>
                                /// <param name="color" type="Jyo.Color">颜色对象</param>
                                /// <returns type="Jyo.Color"></returns>

                                Jyo.Color.call(this, color.red, color.green, color.blue, color.alpha);
                            }).
                            add("String", function (colorStr) {
                                /// <summary>颜色构造函数</summary>
                                /// <param name="colorStr" type="String">颜色值</param>
                                /// <returns type="Jyo.Color"></returns>

                                var hex, rgb, hsl;

                                if (Jyo.Color.colorMap[colorStr.toLowerCase()]) {
                                    // 从颜色表中获取颜色值

                                    colorStr = Jyo.Color.colorMap[colorStr.toLowerCase()];
                                }

                                if ((hex = colorStr.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) && (hex = hex[1])) {
                                    // 检查是否为HEX值

                                    hex = hex.length == 3 ? [hex[0], hex[0], hex[1], hex[1], hex[2], hex[2]].join("") : hex;
                                    Jyo.Color.call(this, parseInt(hex, 16));
                                } else if ((rgb = colorStr.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([.\d]+))?\s*\)$/i))) {
                                    // 检查是否为RGB或RGBA值

                                    if (typeof rgb[4] != "undefined") Jyo.Color.call(this, +rgb[1], +rgb[2], +rgb[3], +rgb[4]);
                                    else Jyo.Color.call(this, +rgb[1], +rgb[2], +rgb[3]);
                                } else if ((hsl = colorStr.match(/^hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%(?:\s*,\s*([.\d]+))?\s*\)$/))) {
                                    // 检查是否为HSL或HSLA值

                                    var r, g, b, a = typeof hsl[4] != "undefined" ? +hsl[4] : 1;
                                    var h = +hsl[1] / 360, s = +hsl[2] / 100, l = +hsl[3] / 100;
                                    if (s == 0) {
                                        r = g = b = l;
                                    } else {
                                        function hue2rgb(p, q, t) {
                                            if (t < 0) t += 1;
                                            if (t > 1) t -= 1;
                                            if (t < 1 / 6) return p + (q - p) * 6 * t;
                                            if (t < 1 / 2) return q;
                                            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                                            return p;
                                        }
                                        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                                        var p = 2 * l - q;
                                        r = hue2rgb(p, q, h + 1 / 3);
                                        g = hue2rgb(p, q, h);
                                        b = hue2rgb(p, q, h - 1 / 3);
                                    }
                                    Jyo.Color.call(this, Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a);
                                }
                            }).
                            add("Number", function (colorInt) {
                                /// <summary>颜色构造函数</summary>
                                /// <param name="colorInt" type="Number">十进制颜色值</param>
                                /// <returns type="Jyo.Color"></returns>

                                Jyo.Color.call(this, colorInt >> 16 & 0xFF, colorInt >> 8 & 0xFF, colorInt & 0xFF);
                            }).
                            add("Number,Number,Number", function (r, g, b) {
                                /// <summary>颜色构造函数</summary>
                                /// <param name="r" type="Number">红色值</param>
                                /// <param name="g" type="Number">绿色值</param>
                                /// <param name="b" type="Number">蓝色值</param>
                                /// <returns type="Jyo.Color"></returns>

                                this.red = (r > 255 ? 255 : r < 0 ? 0 : r) << 0;
                                this.green = (g > 255 ? 255 : g < 0 ? 0 : g) << 0;
                                this.blue = (b > 255 ? 255 : b < 0 ? 0 : b) << 0;
                                this.alpha = 1.0;
                            }).
                            add("Number,Number,Number,Number", function (r, g, b, a) {
                                /// <summary>颜色构造函数</summary>
                                /// <param name="r" type="Number">红色值</param>
                                /// <param name="g" type="Number">绿色值</param>
                                /// <param name="b" type="Number">蓝色值</param>
                                /// <param name="a" type="Number">Alpha值</param>
                                /// <returns type="Jyo.Color"></returns>

                                Jyo.Color.call(this, r, g, b);
                                this.alpha = a > 1 ? 1 : a < 0 ? 0 : a;
                            });

    Jyo.Color.prototype = new Jyo.Object({
        toInt32: function () {
            /// <summary>转换为32位10进制表示法</summary>
            /// <returns type="Number"></returns>

            return (this.red << 16 | this.green << 8 | this.blue);
        },
        toHex: function () {
            /// <summary>转换为16进制表示法(无法表示Alpha值)</summary>
            /// <returns type="String"></returns>

            return "#" + this.toInt32().toString(16);
        },
        toRgb: function () {
            /// <summary>转换为RGB表示法</summary>
            /// <returns type="String"></returns>

            return String.format("rgb({0},{1},{2})", this.red, this.green, this.blue);
        },
        toRgba: function () {
            /// <summary>转换为RGBA表示法</summary>
            /// <returns type="String"></returns>

            return String.format("rgba({0},{1},{2},{3})", this.red, this.green, this.blue, this.alpha);
        },
        toHsl: function () {
            /// <summary>转换为HSL表示法</summary>
            /// <returns type="String"></returns>

            var r = this.red / 255,
                g = this.green / 255,
                b = this.blue / 255;
            var max = Math.max(r, g, b), min = Math.min(r, g, b);
            var h, s, l = (max + min) / 2;

            if (max == min) {
                h = s = 0;
            } else {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                }
                h /= 6;
            }
            return String.format("hsl({0},{1}%,{2}%)", (h * 360) | 0, s * 100, l * 100);
        },
        toHsla: function () {
            /// <summary>转换为HSLA表示法</summary>
            /// <returns type="String"></returns>

            var _this = this;
            return this.toHsl().replace(/(\(|\))/g, function (char) {
                switch (char) {
                    case "(":
                        return "a(";
                    case ")":
                        return "," + _this.alpha + ")";
                }
            });
        },
        getHashCode: function () {
            /// <summary>返回此颜色的哈希代码</summary>
            /// <returns type="Number">一个指定此颜色的哈希代码的整数</returns>

            return this.red ^ this.green ^ this.blue ^ ((this.alpha * 255) << 0);
        },
        equals: function (value) {
            /// <summary>测试两个颜色是否相等</summary>
            /// <param name="value" type="Jyo.Color">要进行比较的Jyo.Color</param>
            /// <returns type="Boolean"></returns>

            if (typeof value === "string" || typeof value === "number") {
                return this.equals(new Jyo.Color(value));
            }

            if (this === value ||
                value instanceof Jyo.Color &&
                this.getHashCode() === value.getHashCode() &&
                this.red === value.red &&
                this.green === value.green &&
                this.blue === value.blue &&
                this.alpha === value.alpha) {
                return true;
            }
            return false;
        }
    });

    Jyo.Color.colorMap = {
        "aliceblue": "#f0f8ff",
        "antiquewhite": "#faebd7",
        "aqua": "#00ffff",
        "aquamarine": "#7fffd4",
        "azure": "#f0ffff",
        "beige": "#f5f5dc",
        "bisque": "#ffe4c4",
        "black": "#000000",
        "blanchedalmond": "#ffebcd",
        "blue": "#0000ff",
        "blueviolet": "#8a2be2",
        "brown": "#a52a2a",
        "burlywood": "#deb887",
        "cadetblue": "#5f9ea0",
        "chartreuse": "#7fff00",
        "chocolate": "#d2691e",
        "coral": "#ff7f50",
        "cornflowerblue": "#6495ed",
        "cornsilk": "#fff8dc",
        "crimson": "#dc143c",
        "cyan": "#00ffff",
        "darkblue": "#00008b",
        "darkcyan": "#008b8b",
        "darkgoldenrod": "#b8860b",
        "darkgray": "#a9a9a9",
        "darkgreen": "#006400",
        "darkgrey": "#a9a9a9",
        "darkkhaki": "#bdb76b",
        "darkmagenta": "#8b008b",
        "darkolivegreen": "#556b2f",
        "darkorange": "#ff8c00",
        "darkorchid": "#9932cc",
        "darkred": "#8b0000",
        "darksalmon": "#e9967a",
        "darkseagreen": "#8fbc8f",
        "darkslateblue": "#483d8b",
        "darkslategray": "#2f4f4f",
        "darkslategrey": "#2f4f4f",
        "darkturquoise": "#00ced1",
        "darkviolet": "#9400d3",
        "deeppink": "#ff1493",
        "deepskyblue": "#00bfff",
        "dimgray": "#696969",
        "dimgrey": "#696969",
        "dodgerblue": "#1e90ff",
        "firebrick": "#b22222",
        "floralwhite": "#fffaf0",
        "forestgreen": "#228b22",
        "fuchsia": "#ff00ff",
        "gainsboro": "#dcdcdc",
        "ghostwhite": "#f8f8ff",
        "gold": "#ffd700",
        "goldenrod": "#daa520",
        "gray": "#808080",
        "green": "#008000",
        "greenyellow": "#adff2f",
        "grey": "#808080",
        "honeydew": "#f0fff0",
        "hotpink": "#ff69b4",
        "indianred": "#cd5c5c",
        "indigo": "#4b0082",
        "ivory": "#fffff0",
        "khaki": "#f0e68c",
        "lavender": "#e6e6fa",
        "lavenderblush": "#fff0f5",
        "lawngreen": "#7cfc00",
        "lemonchiffon": "#fffacd",
        "lightblue": "#add8e6",
        "lightcoral": "#f08080",
        "lightcyan": "#e0ffff",
        "lightgoldenrodyellow": "#fafad2",
        "lightgray": "#d3d3d3",
        "lightgreen": "#90ee90",
        "lightgrey": "#d3d3d3",
        "lightpink": "#ffb6c1",
        "lightsalmon": "#ffa07a",
        "lightseagreen": "#20b2aa",
        "lightskyblue": "#87cefa",
        "lightslategray": "#778899",
        "lightslategrey": "#778899",
        "lightsteelblue": "#b0c4de",
        "lightyellow": "#ffffe0",
        "lime": "#00ff00",
        "limegreen": "#32cd32",
        "linen": "#faf0e6",
        "magenta": "#ff00ff",
        "maroon": "#800000",
        "mediumaquamarine": "#66cdaa",
        "mediumblue": "#0000cd",
        "mediumorchid": "#ba55d3",
        "mediumpurple": "#9370db",
        "mediumseagreen": "#3cb371",
        "mediumslateblue": "#7b68ee",
        "mediumspringgreen": "#00fa9a",
        "mediumturquoise": "#48d1cc",
        "mediumvioletred": "#c71585",
        "midnightblue": "#191970",
        "mintcream": "#f5fffa",
        "mistyrose": "#ffe4e1",
        "moccasin": "#ffe4b5",
        "navajowhite": "#ffdead",
        "navy": "#000080",
        "oldlace": "#fdf5e6",
        "olive": "#808000",
        "olivedrab": "#6b8e23",
        "orange": "#ffa500",
        "orangered": "#ff4500",
        "orchid": "#da70d6",
        "palegoldenrod": "#eee8aa",
        "palegreen": "#98fb98",
        "paleturquoise": "#afeeee",
        "palevioletred": "#db7093",
        "papayawhip": "#ffefd5",
        "peachpuff": "#ffdab9",
        "peru": "#cd853f",
        "pink": "#ffc0cb",
        "plum": "#dda0dd",
        "powderblue": "#b0e0e6",
        "purple": "#800080",
        "red": "#ff0000",
        "rosybrown": "#bc8f8f",
        "royalblue": "#4169e1",
        "saddlebrown": "#8b4513",
        "salmon": "#fa8072",
        "sandybrown": "#f4a460",
        "seagreen": "#2e8b57",
        "seashell": "#fff5ee",
        "sienna": "#a0522d",
        "silver": "#c0c0c0",
        "skyblue": "#87ceeb",
        "slateblue": "#6a5acd",
        "slategray": "#708090",
        "slategrey": "#708090",
        "snow": "#fffafa",
        "springgreen": "#00ff7f",
        "steelblue": "#4682b4",
        "tan": "#d2b48c",
        "teal": "#008080",
        "thistle": "#d8bfd8",
        "tomato": "#ff6347",
        "turquoise": "#40e0d0",
        "transparent": "rgba(0,0,0,0)",
        "violet": "#ee82ee",
        "wheat": "#f5deb3",
        "white": "#ffffff",
        "whitesmoke": "#f5f5f5",
        "yellow": "#ffff00",
        "yellowgreen": "#9acd32"
    };
})(); Jyo.Rectangle = function () {
    /// <summary>矩形类</summary>
    /// <returns type="Jyo.Rectangle"></returns>

    Jyo.Rectangle.constructor.apply(this, arguments);
};

Jyo.Rectangle.constructor = Jyo.Overload().
                            add(null, function () {
                                /// <summary>矩形对象构造函数</summary>
                                /// <returns type="Jyo.Rectangle"></returns>

                                Jyo.Color.call(this, 0, 0, 0, 0);
                            }).
                            add("Jyo.Rectangle", function (rect) {
                                /// <summary>矩形对象构造函数</summary>
                                /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                                /// <returns type="Jyo.Rectangle"></returns>

                                Jyo.Color.call(this, rect.x, rect.y, rect.width, rect.height);
                            }).
                            add("Number, Number, Number, Number", function (x, y, width, height) {
                                /// <summary>矩形对象构造函数</summary>
                                /// <param name="x" type="Number">起始X坐标</param>
                                /// <param name="y" type="Number">起始Y坐标</param>
                                /// <param name="width" type="Number">矩形宽度</param>
                                /// <param name="height" type="Number">矩形高度</param>
                                /// <returns type="Jyo.Rectangle"></returns>

                                this.x = x;
                                this.y = y;
                                this.width = width < 0 ? 0 : width;
                                this.height = height < 0 ? 0 : height;
                            });

Jyo.Rectangle.intersect = Jyo.Overload().
                          add("Jyo.Rectangle, Jyo.Rectangle", function (value1, value2) {
                              /// <summary>找到相交的矩形</summary>
                              /// <param name="value1" type="Jyo.Rectangle">要检测的第一个矩形</param>
                              /// <param name="value2" type="Jyo.Rectangle">要检测的第二个矩形</param>
                              /// <returns type="Jyo.Rectangle"></returns>

                              var x, y, width, height;
                              x = value1.x > value2.x ? value1.x : value2.x;
                              y = value1.y > value2.y ? value1.y : value2.y;
                              width = value1.x + value1.width < value2.x + value2.width ? value1.x + value1.width : value2.x + value2.width - x;
                              height = value1.y + value1.height < value2.y + value2.height ? value1.y + value1.height : value2.y + value2.height - y;
                              if (width < 0 || height < 0) {
                                  width = 0;
                                  height = 0;
                              }
                              return new Jyo.Rectangle(x, y, width, height);
                          });

Jyo.Rectangle.prototype = new Jyo.Object({
    intersects: Jyo.Overload().
                add("Jyo.Rectangle", function (rect) {
                    /// <summary>检测两个矩形是否相交</summary>
                    /// <param name="rect" type="Jyo.Rectangle">要与之检测的矩形</param>
                    /// <returns type="Boolean"></returns>

                    return this.intersects(rect.x, rect.y, rect.width, rect.height);
                }).
                add("Number, Number, Number, Number", function (x, y, width, height) {
                    /// <summary>检测两个矩形是否相交</summary>
                    /// <param name="x" type="Number">起始X坐标</param>
                    /// <param name="y" type="Number">起始Y坐标</param>
                    /// <param name="width" type="Number">矩形宽度</param>
                    /// <param name="height" type="Number">矩形高度</param>
                    /// <returns type="Boolean"></returns>

                    return !(this.x + this.width < x ||
                             x + width < this.x ||
                             this.y + this.height < y ||
                             y + height < this.y);
                }),
    getHashCode: function () {
        /// <summary>返回此矩形的哈希代码</summary>
        /// <returns type="Number">一个指定此矩形的哈希代码的整数</returns>

        return this.x ^ this.y ^ this.width ^ this.height;
    },
    equals: function (value) {
        /// <summary>测试两个矩形是否相等</summary>
        /// <param name="value" type="Jyo.Rectangle">要进行比较的Jyo.Rectangle</param>
        /// <returns type="Boolean"></returns>

        if (this === value ||
            value instanceof Jyo.Rectangle &&
            this.getHashCode() === value.getHashCode() &&
            this.x === value.x &&
            this.y === value.y &&
            this.width === value.width &&
            this.height === value.height) {
            return true;
        }
        return false;
    }
}); Jyo.Shader = function () {
    /// <summary>渲染器类</summary>
    /// <returns type="Jyo.Shader"></returns>

    // 具体对象
    this.object = null;

    // 是否为软件渲染
    this.isSoftware = false;

    // 着色器类型
    this.type = "unkonw";
};

Jyo.Shader.prototype = new Jyo.Object({
    // 指示可用加载器
    useLoader: "Shader",
    bind: function (renderer, webglShader) {
        /// <summary>绑定具体对象到托管对象</summary>
        /// <param name="renderer" type="Jyo.Renderer">绑定的渲染器</param>
        /// <param name="webglShader" type="WebGLShader">要绑定的具体对象</param>

        this.object = webglShader;

        if (renderer.mode == "WebGL") {
            var gl = renderer.context;
            if (webglShader instanceof WebGLShader) {
                this.type = gl.getShaderParameter(webglShader, gl.SHADER_TYPE);
                switch (gl.getShaderParameter(webglShader, gl.SHADER_TYPE)) {
                    case gl.VERTEX_SHADER:
                        this.type = "VERTEX_SHADER";
                        break;
                    case gl.FRAGMENT_SHADER:
                        this.type = "FRAGMENT_SHADER";
                        break;
                }
            }
            this.gl = gl;
        } else if (renderer.mode == "Canvas") {
            // 转换GLSL为像素处理函数
        }
    },
    getHashCode: function () {
        /// <summary>返回此着色器的哈希代码</summary>
        /// <returns type="Number">一个指定此着色器的哈希代码的整数</returns>

        return 111;
    },
    equals: function (value) {
        /// <summary>测试两个着色器是否相等</summary>
        /// <param name="value" type="Jyo.Shader">要进行比较的Jyo.Shader</param>
        /// <returns type="Boolean"></returns>

        if (this === value ||
            value instanceof Jyo.Shader &&
            this.getHashCode() === value.getHashCode() &&
            this.object === value.object) {
            return true;
        }
        return false;
    },
    destroy: function () {
        /// <summary>销毁对象</summary>

        if (this.gl) {
            this.gl.deleteShader(this.object);
        }
        this.object = null;
        delete this.object;
    }
}); Jyo.Audio = function () {
    /// <summary>音频类</summary>
    /// <returns type="Jyo.Audio"></returns>

    // 具体对象
    this.object = null;
};

Jyo.Audio.prototype = new Jyo.Object({
    // 指示可用加载器
    useLoader: "Audio",
    bind: function (renderer, audio) {
        /// <summary>绑定具体对象到托管对象</summary>
        /// <param name="renderer" type="Jyo.Renderer">绑定的渲染器</param>
        /// <param name="audio" type="Audio">要绑定的具体对象</param>

        this.object = audio;
    },
    play: function () {
        /// <summary>开始播放</summary>

        if (this.object != null) {
            this.object.play();
        }
    },
    pause: function () {
        /// <summary>暂停音乐</summary>

        if (this.object != null) {
            this.object.pause();
        }
    },
    stop: function () {
        /// <summary>停止播放音乐</summary>

        if (this.object != null) {
            this.object.pause();
            this.reset();
        }
    },
    getHashCode: function () {
        /// <summary>返回此材质的哈希代码</summary>
        /// <returns type="Number">一个指定此材质的哈希代码的整数</returns>

        return 113;
    },
    equals: function (value) {
        /// <summary>测试两个音频是否相等</summary>
        /// <param name="value" type="Jyo.Audio">要进行比较的Jyo.Audio</param>
        /// <returns type="Boolean"></returns>

        if (this === value ||
            value instanceof Jyo.Audio &&
            this.getHashCode() === value.getHashCode() &&
            this.object === value.object) {
            return true;
        }
        return false;
    },
    destroy: function () {
        /// <summary>销毁对象</summary>

        this.stop();
        this.object = null;
        delete this.object;
    }
}); Jyo.Timer = function () {
    /// <summary>计时器类</summary>
    /// <returns type="Jyo.Timer"></returns>

    Jyo.Timer.constructor.apply(this, arguments);
};

// 计时器列表
Jyo.Timer.list = [];

// 检测计时器
Jyo.Timer.checkTimer = null;

Jyo.Timer.constructor = Jyo.Overload().
                        add(null, function () {
                            /// <summary>计时器对象构造函数</summary>
                            /// <returns type="Jyo.Timer"></returns>

                            this.interval = 0;
                            this.tick = null;
                        }).
                        add("Function, Number", function (callback, interval) {
                            /// <summary>计时器对象构造函数</summary>
                            /// <param name="callback" type="Function">回调函数</param>
                            /// <param name="interval" type="Number">间隔时间</param>
                            /// <returns type="Jyo.Timer"></returns>

                            var _this = this;
                            Jyo.Timer.call(this);
                            this.interval = interval;
                            this.tick = callback;
                        }).
                        add("Function, String", function (callback, expression) {
                            /// <summary>计时器对象构造函数</summary>
                            /// <param name="callback" type="Function">回调函数</param>
                            /// <param name="etaExpression" type="String">η表达式</param>
                            /// <returns type="Jyo.Timer"></returns>

                            this.beginTime = 0;
                            this.interval = expression;
                            this.tick = callback;
                            var t = this.time = {
                                expression: expression,
                                h: null,
                                m: null,
                                s: null
                            };

                            var arr = expression.split(" ");

                            var rexCheck = /(\d+~\d+|\d+-\d+|\d+[,\d+]+|\d+\/\d+|\d+|\*)/;

                            if (arr.length != 3 || !rexCheck.test(arr[0]) || !rexCheck.test(arr[1]) || !rexCheck.test(arr[2])) {
                                throw new Error("Invalid expression");
                            }

                            if (arr[2].indexOf(",") >= 0) {
                                t.h = arr[2].split(",");
                            } else {
                                t.h = [arr[2]];
                            }

                            if (arr[1].indexOf(",") >= 0) {
                                t.m = arr[1].split(",");
                            } else {
                                t.m = [arr[1]];
                            }

                            if (arr[0].indexOf(",") >= 0) {
                                t.s = arr[0].split(",");
                            } else {
                                t.s = [arr[0]];
                            }
                        });

Jyo.Timer.prototype = new Jyo.Object({
    start: function () {
        /// <summary>开启计时器</summary>

        if (this.tick == null) return;

        if (!isNaN(this.interval)) {
            var _this = this;
            this.time = setInterval(function () {
                if (_this.interval != _this.time.interval) {
                    _this.stop();
                    _this.start();
                }
                _this.tick();
            }, this.interval);
            this.time.interval = this.interval;
            return;
        }

        this.beginTime = new Date().getTime();
        Jyo.Timer.list.push(this);
        if (Jyo.Timer.checkTimer == null) {
            Jyo.Timer.checkTimer = setInterval(function () {
                var list = Jyo.Timer.list;
                var currentTime = new Date().getTime();

                for (var i = list.length; i--;) {
                    list[i].run(new Date(currentTime - list[i].beginTime));
                }
            }, 1000);
        }
    },
    stop: function () {
        /// <summary>停止计时器</summary>

        if (!isNaN(this.interval)) {
            var _this = this;
            clearInterval(this.time);
            this.time = null;
            return;
        }

        var list = Jyo.Timer.list;
        for (var i = list.length; i--;) {
            if (list[i] == this) {
                Jyo.Timer.list = list.remove(i);
                break;
            }
        }
        if (Jyo.Timer.list.length == 0) {
            clearInterval(Jyo.Timer.checkTimer);
            Jyo.Timer.checkTimer = null;
        }
        this.beginTime = 0;
    },
    run: function (intervalTime) {
        /// <summary>检查是否可以触发函数</summary>
        /// <param name="intervalTime" type="Date">间隔时间</param>

        if (this.time.expression != this.interval) {
            Jyo.Time.call(this.callback, this.expression);
        }

        var hourPass = false,
            minutePass = false,
            secondPass = false;

        if (this.check(this.time.h, intervalTime.getHours() + intervalTime.getTimezoneOffset() / 60)) hourPass = true;
        if (this.check(this.time.m, intervalTime.getMinutes())) minutePass = true;
        if (this.check(this.time.s, intervalTime.getSeconds() - 1)) secondPass = true;

        if (hourPass && minutePass && secondPass) {
            this.tick();
        }
    },
    check: function (set, current) {
        /// <summary>检查是否可以触发</summary>
        /// <param name="set" type="String">设置的计时器</param>
        /// <param name="current" type="Number">当前间隔时间</param>
        /// <returns type="Boolean"></returns>

        var strs = null;

        if (set == "*") return true;
        if (/(\d+)/.test(set) && set == current) return true;
        if (/(\d+-\d+)/.test(set)) {
            strs = set[0].split("-");
            if (current >= strs[0] && current <= strs[1]) {
                return true;
            }
        }
        if (/(\d+\/\d+)/.test(set)) {
            strs = set[0].split("/");
            if (current >= strs[0] && (current - strs[0]) % strs[1] == 0) {
                return true;
            }
        }
        if (/\d+[,\d+]+/.test(set)) {
            for (var i = set.length; i--;) {
                if (set[i] == current.toString()) return true;
            }
        }
        return false;
    },
    getHashCode: function () {
        /// <summary>返回此矩形的哈希代码</summary>
        /// <returns type="Number">一个指定此矩形的哈希代码的整数</returns>

        return 120;
    },
    equals: function (value) {
        /// <summary>测试两个计时器是否相等</summary>
        /// <param name="value" type="Jyo.Timer">要进行比较的Jyo.Timer</param>
        /// <returns type="Boolean"></returns>

        if (this === value ||
            value instanceof Jyo.Timer &&
            this.getHashCode() === value.getHashCode() &&
            this.interval === value.interval &&
            this.tick === value.tick) {
            return true;
        }
        return false;
    }
}); Jyo.Content = function () {
    /// <summary>内容管理器类</summary>
    /// <returns type="Jyo.Content"></returns>

    // 要加载的文件根路径
    this.rootDirectory = "";

    Jyo.Content.constructor.apply(this, arguments);
};

Jyo.Content.constructor = Jyo.Overload().
                          add("Jyo.Renderer", function (renderer) {
                              /// <summary>内容管理器构造函数</summary>
                              /// <param name="renderer" type="Jyo.Renderer">要绑定到的渲染器对象</param>
                              /// <returns type="Jyo.Content"></returns>

                              // 同步加载中数量
                              this.loadNum = 0;

                              // 加载完成数量
                              this.loadDoneNum = 0;

                              // 绑定到的渲染器
                              this.renderer = renderer;
                          }).
                          add("Jyo.Renderer, String", function (renderer, rootDirectory) {
                              /// <summary>内容管理器构造函数</summary>
                              /// <param name="renderer" type="Jyo.Renderer">要绑定到的渲染器对象</param>
                              /// <param name="rootDirectory" type="String">要加载的文件根路径</param>
                              /// <returns type="Jyo.Content"></returns>

                              // 路径检测
                              if (rootDirectory.lastIndexOf("/") != rootDirectory.length - 1) {
                                  rootDirectory += "/";
                              }

                              // 设置默认加载路径
                              this.rootDirectory = rootDirectory;

                              Jyo.Content.call(this, renderer);
                          });

Jyo.Content.prototype = new Jyo.Object({
    load: Jyo.Overload().
          add("Object, String", function (object, filename) {
              /// <summary>加载文件</summary>
              /// <param name="object" type="Object">要绑定到的对象</param>
              /// <param name="filename" type="String">要加载的文件名</param>

              this.load(object, filename, function () { });
          }).
          add("Object, String, Function", function (object, filename, callback) {
              /// <summary>加载文件</summary>
              /// <param name="object" type="Object">要绑定到的对象</param>
              /// <param name="filename" type="String">要加载的文件名</param>
              /// <param name="callback" type="Function">加载完成后处理函数</param>

              if (object.object) return;

              var _this = this;

              // 获取文件后缀名
              var extName = /\.([^\.]+)$/.exec(filename)[1].trim().toLowerCase().split("?")[0];

              // 是否为网络资源
              var isNetworkResources = false;
              if (filename.indexOf("//") == 0 ||
                  filename.indexOf("http://") == 0 ||
                  filename.indexOf("https://") == 0) {
                  isNetworkResources = true;
              }

              if (typeof object.useLoader != "undefined") {
                  this.loadNum++;
                  var loader = null;
                  for (var i in Jyo.Content) {
                      loader = Jyo.Content[i];
                      if (typeof loader.supportList != "undefined") {
                          for (var extIndex = loader.supportList.length; extIndex--;) {
                              if (extName == loader.supportList[extIndex] && object.useLoader == loader.type) {
                                  loader.load(this, object, (isNetworkResources ? "" : this.rootDirectory + "/") + filename, callback);
                                  return;
                              }
                          }
                      }
                  }
                  throw new Error("\"" + extName + "\" file does not support the import");
              } else {
                  throw new Error("Does not support the type of file to load");
              }
          }).
          add("Object, String, Object", function (object, filename, loader) {
              /// <summary>加载文件</summary>
              /// <param name="object" type="Object">要绑定到的对象</param>
              /// <param name="filename" type="String">要加载的文件名</param>
              /// <param name="loader" type="Function">自定义加载器</param>

              if (object.object) return;

              var _this = this;

              // 获取文件后缀名
              var extName = /\.([^\.]+)$/.exec(filename)[1].trim().toLowerCase().split("?")[0];

              // 是否为网络资源
              var isNetworkResources = false;
              if (filename.indexOf("//") == 0 ||
                  filename.indexOf("http://") == 0 ||
                  filename.indexOf("https://") == 0) {
                  isNetworkResources = true;
              }

              if (typeof object.useLoader != "undefined") {
                  this.loadNum++;
                  if (typeof loader.supportList != "undefined") {
                      for (var extIndex = loader.supportList.length; extIndex--;) {
                          if (extName == loader.supportList[extIndex] && object.useLoader == loader.type) {
                              loader.load(this, object, (isNetworkResources ? "" : this.rootDirectory + "/") + filename);
                              return;
                          }
                      }
                  }
                  throw new Error("\"" + extName + "\" file does not support the import");
              } else {
                  throw new Error("Does not support the type of file to load");
              }
          }),
    isLoading: function () {
        /// <summary>指示是否已加载完成</summary>
        /// <returns type="Boolean"></returns>

        if (this.loadNum > this.loadDoneNum) {
            return true;
        }
        return false;
    },
    getHashCode: function () {
        /// <summary>返回此内容管理器的哈希代码</summary>
        /// <returns type="Number">一个指定此内容管理器的哈希代码的整数</returns>

        return this.renderer.getHashCode() ^ 10;
    },
    equals: function (value) {
        /// <summary>测试两个内容管理器是否相等</summary>
        /// <param name="value" type="Jyo.Content">要进行比较的Jyo.Content</param>
        /// <returns type="Boolean"></returns>

        if (this === value ||
            value instanceof Jyo.Content &&
            this.getHashCode() === value.getHashCode() &&
            this.rootDirectory === value.rootDirectory &&
            this.loadNum === value.loadNum &&
            this.loadDoneNum === value.loadDoneNum) {
            return true;
        }
        return false;
    }
}); Jyo.Game = function () {
    /// <summary>游戏类</summary>
    /// <field name="content" type="Jyo.Content">内容管理器对象</field>
    /// <field name="touch" type="Array">触摸列表</field>
    /// <field name="mouse" type="Jyo.Mouse">鼠标对象</field>
    /// <field name="isFixedTimeStep" type="Boolean">是否使用固定时间步长</field>
    /// <field name="targetElapsedTime" type="Number">当isFixedTimeStep为true时Update调用间的目标时间</field>
    /// <field name="renderer" type="Jyo.Renderer">渲染器对象</field>
    /// <returns type="Jyo.Game"></returns>

    Jyo.Game.constructor.apply(this, arguments);
};

Jyo.Game.constructor = Jyo.Overload().
                       add("String", function (elementId) {
                           /// <summary>游戏构造函数</summary>
                           /// <param name="elementId" type="String">元素id</param>
                           /// <returns type="Jyo.Game"></returns>

                           // 是否使用固定时间步长
                           this.isFixedTimeStep = false;

                           // 当isFixedTimeStep为true时Update调用间的目标时间
                           this.targetElapsedTime = 30;

                           if (typeof this.renderer == "undefined") {
                               // 渲染器
                               this.renderer = new Jyo.Renderer(elementId);
                           }

                           // 内容管理器
                           this.content = new Jyo.Content(this.renderer);

                           // 触摸列表
                           this.touch = new Jyo.Touch(this.renderer);

                           // 鼠标对象
                           this.mouse = new Jyo.Mouse(this.renderer);

                           // 当前状态
                           this._currentStatus = null;

                           // 最后一次调用update的时间
                           this._lastUpdateTime = Date.now();

                           // 最后一此调用draw的时间
                           this._lastDrawTime = Date.now();

                           // 游戏主计时器
                           this._mainTimer = null;

                           // 调用update的计时器
                           this._updateTimer = null;
                       }).
                       add("String, String", function (elementId, assign) {
                           /// <summary>游戏构造函数</summary>
                           /// <param name="elementId" type="String">元素id</param>
                           /// <param name="assign" type="String" optional="true">指定使用的渲染技术，可选如下：&#10;WebGL&#10;Canvas&#10;Svg&#10;Css&#10;VML -> (IE专有，不推荐)</param>
                           /// <returns type="Jyo.Game"></returns>

                           // 渲染器
                           this.renderer = new Jyo.Renderer(elementId, assign);

                           Jyo.Game.call(this, elementId);
                       });

Jyo.Game.prototype = new Jyo.Object({
    run: function () {
        /// <summary>调用该方法可以初始化游戏、开始循环运行游戏，并开始处理游戏的事件</summary>

        var _this = this;

        if (this.isFixedTimeStep && status.update) {
            this._updateTimer = setInterval(function () {
                !_this.isPause && status.update(Date.now());
            }, this.targetElapsedTime);
        }

        function renderLoop(gameTime) {
            gameTime = gameTime | 0;
            var status = _this._currentStatus;
            if (status && !_this.isPause) {
                if (_this.content.isLoading()) {
                    status.loadingScreen && status.loadingScreen(gameTime);
                } else {
                    !_this.isFixedTimeStep && status.update && status.update(gameTime);
                    status.draw && status.draw(gameTime);
                }
            }
            _this._mainTimer = window.requestAnimationFrame(renderLoop);
        };

        renderLoop(Date.now());
    },
    exit: function () {
        /// <summary>退出游戏</summary>

        cancelAnimationFrame(this._mainTimer);
        if (this._updateTimer) {
            clearInterval(this._updateTimer);
        }
        this._currentStatus && this._currentStatus.unload && this._currentStatus.unload();
        this.renderer.clear();
        this._currentStatus = null;
    },
    useStatus: function (status) {
        /// <summary>使用新状态</summary>
        /// <param name="status" type="Jyo.Status">状态对象</param>

        if (this._currentStatus) {
            this._currentStatus.unload && this._currentStatus.unload();
            this._currentStatus.using = false;
            delete this.touch.ontouchstart;
            delete this.touch.ontouchmove;
            delete this.touch.ontouchend;
        }
        this.renderer.clear();
        if (!(status instanceof Jyo.Status)) {
            this._currentStatus = null;
        } else {
            status.load && status.load();
            this._currentStatus = status;
            this._currentStatus.using = true;
        }
    }
}); Jyo.Mouse = function () {
    /// <summary>鼠标类</summary>
    /// <returns type="Jyo.Mouse"></returns>

    Jyo.Mouse.constructor.apply(this, arguments);
};

Jyo.Mouse.constructor = Jyo.Overload().
                        add("Jyo.Renderer", function (renderer) {
                            // 与之有关的渲染器对象
                            this.renderer = renderer;

                            // 当前鼠标监听的元素
                            this.element = renderer.domElement;

                            // 是否已经被锁定
                            this.isLocked = false;

                            // 是否按下了鼠标左键
                            this.leftButton = false;

                            // 是否按下了鼠标右键
                            this.rightButton = false;

                            // 是否按下了鼠标中键
                            this.middleButton = false;

                            // 鼠标当前X坐标
                            this.x = 0;

                            // 鼠标当前Y坐标
                            this.y = 0;

                            this.clear = function () {
                                /// <summary>重置鼠标坐标</summary>

                                this.x = 0;
                                this.y = 0;
                            };

                            this._bind();
                        });

Jyo.Mouse.prototype = new Jyo.Object({
    _bind: function () {
        /// <summary>绑定事件</summary>

        var _this = this;
        var el = this.element;

        // 绑定鼠标锁定事件
        document.addEventListener("pointerlockchange", function () { _this._lockChange(); }, false);
        document.addEventListener(Jyo.prefix.lowercase + "pointerlockchange", function () { _this._lockChange(); }, false);

        // 监听鼠标按下事件
        el.addEventListener("mousedown", function (e) {
            _this._updateLocation(e);
            _this._updateState(e, true);
        });

        // 监听鼠标移动事件
        el.addEventListener("mousemove", function (e) {
            _this._updateLocation(e);
        });

        // 监听鼠标抬起事件
        el.addEventListener("mouseup", function (e) {
            _this._updateLocation(e);
            _this._updateState(e, false);
        });
    },
    lock: function (isLock) {
        /// <summary>锁定鼠标</summary>
        /// <param name="isLock" type="Boolean">是否锁定</param>
        /// <returns type="Boolean"></returns>

        if (!this.element.requestPointerLock || !document.exitPointerLock) {
            return false;
        }
        if (isLock || typeof isLock == "undefined") {
            this.element.requestPointerLock();
            Jyo.Mouse.lockObject = this;
        } else {
            document.exitPointerLock();
            return false;
        }
        return true;
    },
    _lockChange: function () {
        /// <summary>锁定状态被更改</summary>

        this.isLocked = document.pointerLockElement == this.element ||
                        document[Jyo.prefix.lowercase + "PointerLockElement"] == this.element;
        if (this == Jyo.Mouse.lockObject && !this.isLocked) {
            Jyo.Mouse.lockObject = null;
        }
    },
    _updateLocation: function (e) {
        /// <summary>更新鼠标位置</summary>
        /// <param name="e" type="MouseEvent">鼠标事件对象</param>

        var el = this.element,
            styleWidth = this.renderer.width,
            styleHeight = this.renderer.height;

        if (this.isLocked) {
            // 鼠标被锁定时设置位置为偏移
            this.x = e.movementX || e[Jyo.prefix.lowercase + "MovementX"] || 0;
            this.y = e.movementY || e[Jyo.prefix.lowercase + "MovementY"] || 0;
            return;
        }

        this.x = e.offsetX || e.layerX;
        this.y = e.offsetY || e.layerY;

        if (styleWidth) this.x *= styleWidth / el.clientWidth;
        if (styleHeight) this.y *= styleHeight / el.clientHeight;

        this.x |= 0;
        this.y |= 0;
    },
    _updateState: function (e, isDown) {
        /// <summary>更新按键状态</summary>
        /// <param name="e" type="MouseEvent">鼠标事件状态</param>
        /// <param name="isDown" type="Boolean">按下状态</param>

        if (!+"\v1") {
            switch (e.button) {
                case 1: this.leftButton = isDown; break;
                case 2: this.rightButton = isDown; break;
                case 4: this.middleButton = isDown; break;
            }
        }
        else {
            switch (e.which) {
                case 1: this.leftButton = isDown; break;
                case 2: this.middleButton = isDown; break;
                case 3: this.rightButton = isDown; break;
            }
        }
    }
}); Jyo.Touch = function () {
    /// <summary>触摸类</summary>
    /// <returns type="Jyo.Touch"></returns>

    Jyo.Touch.constructor.apply(this, arguments);
};

Jyo.Touch.constructor = Jyo.Overload().
                        add("Jyo.Renderer", function (renderer) {
                            // 与之有关的渲染器对象
                            this.renderer = renderer;

                            // 当前触摸监听的元素
                            this.element = renderer.domElement;

                            // 检查是否支持多点触摸
                            this.supportMultipleTouches = function () {
                                var ua = navigator.userAgent.toLowerCase();
                                if (ua.indexOf("android") > 0 && parseFloat(((ua.split("android ")[1] || "").split(";")[0])) <= 2.3) {
                                    return false;
                                } else {
                                    return true;
                                }
                            }();

                            // 触摸列表
                            this.list = [];

                            this._bind();
                        });

Jyo.Touch.prototype = new Jyo.Object({
    _bind: function () {
        /// <summary>绑定事件</summary>

        var _this = this;
        var el = this.element;

        // 监听触摸按下事件
        el.addEventListener("touchstart", function (e) {
            var changeList = [];
            var x = 0,
                y = 0;
            for (var i = 0; i < e.changedTouches.length; i++) {
                if (_this.renderer.mode == "Css") {
                    var scaling = 1 / _this.renderer.scaling;
                    x = e.changedTouches[i].pageX * scaling,
                    y = e.changedTouches[i].pageY * scaling;
                } else {
                    x = ((e.changedTouches[i].pageX - el.offsetLeft) * (_this.renderer.width / el.clientWidth)) | 0,
                    y = ((e.changedTouches[i].pageY - el.offsetTop) * (_this.renderer.height / el.clientHeight)) | 0;
                }
                var object = {
                    id: e.changedTouches[i].identifier,
                    x: x,
                    y: y
                };
                _this.list.push(object);
                changeList.push(object);
            }

            typeof _this.ontouchstart != "undefined" && _this.ontouchstart(changeList);
        });

        // 监听触摸移动事件
        el.addEventListener("touchmove", function (e) {
            (typeof event != "undefined" ? event : e).preventDefault();

            var changeList = [];
            var x = 0,
                y = 0;

            for (var i = 0; i < _this.list.length; i++) {
                for (var n = 0; n < e.changedTouches.length; n++) {
                    if (_this.renderer.mode == "Css") {
                        var scaling = 1 / _this.renderer.scaling;
                        x = e.changedTouches[n].pageX * scaling,
                        y = e.changedTouches[n].pageY * scaling;
                    } else {
                        x = ((e.changedTouches[n].pageX - el.offsetLeft) * (_this.renderer.width / el.clientWidth)) | 0,
                        y = ((e.changedTouches[n].pageY - el.offsetTop) * (_this.renderer.height / el.clientHeight)) | 0;
                    }
                    if (e.changedTouches[n].identifier == _this.list[i].id) {
                        _this.list[i].x = x,
                        _this.list[i].y = y;
                        changeList.push(_this.list[i]);
                    }
                }
            }

            typeof _this.ontouchmove != "undefined" && _this.ontouchmove(changeList);
        });

        function end(e) {
            var changeList = [];

            for (var i = 0; i < _this.list.length; i++) {
                for (var n = 0; n < e.changedTouches.length; n++) {
                    if (e.changedTouches[n].identifier == _this.list[i].id) {
                        changeList.push(_this.list[i]);
                        _this.list = function (l, i) {
                            return (i < 0) ? l : l.slice(0, i).concat(l.slice(i + 1, l.length))
                        }(_this.list, i);
                    }
                }
            }

            typeof _this.ontouchend != "undefined" && _this.ontouchend(changeList);
        }

        // 监听触摸抬起事件
        el.addEventListener("touchend", end);

        // 监听触摸取消事件
        el.addEventListener('touchcancel', end);
    }
}); Jyo.Content.Shader = new Jyo.Object({
    // 指示加载器类型
    type: "Shader",
    // 指示支持的格式
    supportList: ["vs", "fs", "glvs", "glfs"],
    load: function (content, object, filename, callback) {
        /// <summary>加载</summary>
        /// <param name="content" type="Jyo.Content">内容管理器对象</param>
        /// <param name="object" type="Object">要绑定到的对象</param>
        /// <param name="filename" type="String">文件名</param>
        /// <param name="callback" type="Function" optional="true">加载完成后的处理函数</param>

        // 获取文件后缀名
        var extName = /\.([^\.]+)$/.exec(filename)[1].trim().toLowerCase();

        var type = "";
        // 判断类型
        if (extName == "vs" || extName == "glvs") {
            type = "VERTEX_SHADER";
        } else {
            type = "FRAGMENT_SHADER";
        }

        if (content.renderer.mode == "WebGL") {
            // 检测是否绑定到WebGL渲染器
            var gl = content.renderer.context;
        }

        Jyo.loadFile(filename, true, null, function (str) {
            if (typeof gl != "undefined") {
                var shaderObj = gl.createShader(gl[type]);
                gl.shaderSource(shaderObj, str);
                gl.compileShader(shaderObj);
                // 检查错误
                var error = gl.getError();
                if (error !== gl.NO_ERROR && error !== gl.CONTEXT_LOST_WEBGL) {
                    throw new Error(error);
                }
                if (!gl.getShaderParameter(shaderObj, gl.COMPILE_STATUS)) {
                    throw new Error("Shader \"" + filename + "\" compile error" + ":\r\n" + gl.getShaderInfoLog(shaderObj));
                }
                object.bind(content.renderer, shaderObj);
                content.loadDoneNum++;
                callback && callback(object);
            }
        });
    },
    getHashCode: function () {
        /// <summary>返回此加载器的哈希代码</summary>
        /// <returns type="Number">一个指定此加载器的哈希代码的整数</returns>

        return this.supportList.length ^ 1001;
    },
    equals: function (value) {
        /// <summary>测试两个加载器是否相等</summary>
        /// <param name="value" type="Jyo.Object">要进行比较的Jyo.Object</param>
        /// <returns type="Boolean"></returns>

        if (this === value ||
            this.getHashCode() === value.getHashCode() &&
            this.type === value.type) {
            return true;
        }
        return false;
    }
}); Jyo.Content.Texture = new Jyo.Object({
    // 指示加载器类型
    type: "Texture",
    // 指示支持的格式
    supportList: ["bmp", "png", "jpg", "jpeg", "gif"],
    load: function (content, object, filename, callback) {
        /// <summary>加载</summary>
        /// <param name="content" type="Jyo.Content">内容管理器对象</param>
        /// <param name="object" type="Object">要绑定到的对象</param>
        /// <param name="filename" type="String">文件名</param>
        /// <param name="callback" type="Function" optional="true">加载完成后的处理函数</param>

        var img = new Image();
        img.onerror = function () {
            throw new Error("File \"" + filename + "\" failed to load");
        };
        img.src = filename;
        if (img.complete) {
            object.bind(content.renderer, img);
            content.loadDoneNum++;
            callback && callback(object);
        } else {
            img.onload = function () {
                object.bind(content.renderer, this);
                content.loadDoneNum++;
                callback && callback(object);
                this.onload = null;
            };
        }
    },
    getHashCode: function () {
        /// <summary>返回此加载器的哈希代码</summary>
        /// <returns type="Number">一个指定此加载器的哈希代码的整数</returns>

        return this.supportList.length ^ 1002;
    },
    equals: function (value) {
        /// <summary>测试两个加载器是否相等</summary>
        /// <param name="value" type="Jyo.Object">要进行比较的Jyo.Object</param>
        /// <returns type="Boolean"></returns>

        if (this === value ||
            this.getHashCode() === value.getHashCode() &&
            this.type === value.type) {
            return true;
        }
        return false;
    }
}); Jyo.Content.Audio = new Jyo.Object({
    // 指示加载器类型
    type: "Audio",
    // 指示支持的格式
    supportList: ["mp3", "ogg", "wav", "aac"],
    load: function (content, object, filename, callback) {
        /// <summary>加载</summary>
        /// <param name="content" type="Jyo.Content">内容管理器对象</param>
        /// <param name="object" type="Object">要绑定到的对象</param>
        /// <param name="filename" type="String">文件名</param>
        /// <param name="callback" type="Function" optional="true">加载完成后的处理函数</param>

        var audio = document.createElement("audio");

        audio.setAttribute("preload", "preload");

        audio.addEventListener("pause", function () {
            object.isPlaying = false;
        });

        audio.addEventListener("play", function () {
            object.isPlaying = true;
        });

        audio.addEventListener("ended", function () {
            if (object.isLoop) {
                //object.stop();
                object.play();
            }
        });

        audio.addEventListener("error", function (e) {
            if (this.error.code == 4) {
                object.bind(content.renderer, this);
                content.loadDoneNum++;
                callback && callback(object);
            } else {
                throw new Error("File \"" + filename + "\" failed to load");
            }
        });

        audio.addEventListener("canplaythrough", function () {
            object.bind(content.renderer, this);
            content.loadDoneNum++;
            callback && callback(object);
        });

        audio.reset = function () {
            this.object.currentTime = 0;
        };

        audio.src = filename;

        audio.load();
    },
    getHashCode: function () {
        /// <summary>返回此加载器的哈希代码</summary>
        /// <returns type="Number">一个指定此加载器的哈希代码的整数</returns>

        return this.supportList.length ^ 1003;
    },
    equals: function (value) {
        /// <summary>测试两个加载器是否相等</summary>
        /// <param name="value" type="Jyo.Object">要进行比较的Jyo.Object</param>
        /// <returns type="Boolean"></returns>

        if (this === value ||
            this.getHashCode() === value.getHashCode() &&
            this.type === value.type) {
            return true;
        }
        return false;
    }
}); Jyo.Renderer.WebGL = function () {
    // 添加渲染元素
    this._addRenderElement("canvas");

    // 获取上下文
    this.context = Jyo.Renderer.WebGL.tryGetContext(this.canvas);

    // 使WebGL上下文拥有Canvas2DApi
    Jyo.Renderer.WebGL["2d"](this.context);
};

Jyo.Renderer.WebGL.isSupport = function () {
    /// <summary>检测是否支持</summary>
    /// <returns type="Boolean"></returns>

    if (typeof HTMLCanvasElement.prototype.getContext == "undefined") {
        return false;
    }

    if (Jyo.Renderer.WebGL.tryGetContext() != null) {
        return true;
    }

    return false;
}

// 上下文列表
Jyo.Renderer.WebGL.contextList = ["webgl2", "experimental-webgl2", "webgl", "experimental-webgl", "webkit-3d", "moz-webgl", "3d"];

// 尝试获取上下文函数重载
Jyo.Renderer.WebGL.tryGetContext = Jyo.Overload().
                                   add(null, function () {
                                       /// <summary>尝试获取上下文对象</summary>
                                       /// <returns type="WebGLRenderingContext"></returns>

                                       var canvas = document.createElement("canvas");
                                       return Jyo.Renderer.WebGL.tryGetContext(canvas);
                                   }).
                                   add("HTMLCanvasElement", function (canvas) {
                                       /// <summary>尝试获取上下文对象</summary>
                                       /// <param name="canvas" type="HTMLCanvasElement">画布对象</param>
                                       /// <returns type="WebGLRenderingContext"></returns>

                                       var list = Jyo.Renderer.WebGL.contextList;
                                       var gl = null;
                                       // 获取上下文
                                       for (var i = 0; i < list.length && gl == null; i++) {
                                           gl = canvas.getContext(list[i]);
                                       }
                                       return gl;
                                   });

Jyo.Renderer.WebGL.prototype = new Jyo.Object({
    mode: "WebGL",
    clear: Jyo.Overload().
           add(null, function () {
               /// <summary>清空画布</summary>

               var ctx = this.context;
               ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT);
           }).
           add("Jyo.Color", function (color) {
               /// <summary>清空画布</summary>
               /// <param name="color" type="Jyo.Color">颜色对象</param>

               var ctx = this.context;
               ctx.clearColor(color.red / 255, color.green / 255, color.blue / 255, color.alpha);
               this.clear();
           }).
           add("String", function (colorStr) {
               /// <summary>清空画布</summary>
               /// <param name="colorStr" type="String">颜色字符串值</param>

               this.clear(new Jyo.Color(colorStr));
           }),
    begin: function () {
        this.context.save();
    },
    end: function () {
        this.context.restore();
    },
    fillRect: Jyo.Overload().
              add("Jyo.Rectangle", function (rect) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>

                  this.fillRect(rect.x, rect.y, rect.width, rect.height, "");
              }).
              add("Number, Number, Number, Number", function (x, y, width, height) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>

                  this.fillRect(x, y, width, height, "");
              }).
              add("Jyo.Rectangle, Jyo.Color", function (rect, color) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>

                  this.fillRect(rect.x, rect.y, rect.width, rect.height, color.toRgba());
              }).
              add("Number, Number, Number, Number, Jyo.Color", function (x, y, width, height, color) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>

                  this.fillRect(x, y, width, height, color.toRgba());
              }).
              add("Jyo.Rectangle, String", function (rect, colorStr) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>

                  this.fillRect(rect.x, rect.y, rect.width, rect.height, colorStr);
              }).
              add("Number, Number, Number, Number, String", function (x, y, width, height, colorStr) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>

                  ctx = this.context;
                  ctx.fillStyle = colorStr;
                  ctx.fillRect(x, y, width, height);
              }),
    drawRect: Jyo.Overload().
              add("Jyo.Rectangle, Jyo.Color", function (rect, color) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>

                  this.drawRect(rect.x, rect.y, rect.width, rect.height, color.toRgba(), 1);
              }).
              add("Number, Number, Number, Number, Jyo.Color", function (x, y, width, height, color) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>

                  this.drawRect(x, y, width, height, color.toRgba(), 1);
              }).
              add("Jyo.Rectangle, String", function (rect, colorStr) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>

                  this.drawRect(rect.x, rect.y, rect.width, rect.height, colorStr, 1);
              }).
              add("Number, Number, Number, Number, String", function (x, y, width, height, colorStr) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>

                  this.drawRect(x, y, width, height, colorStr, 1);
              }).
              add("Jyo.Rectangle, Jyo.Color, Number", function (rect, color, lineWidth) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  this.drawRect(rect.x, rect.y, rect.width, rect.height, color.toRgba(), lineWidth);
              }).
              add("Number, Number, Number, Number, Jyo.Color, Number", function (x, y, width, height, color, lineWidth) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  this.drawRect(x, y, width, height, color.toRgba(), lineWidth);
              }).
              add("Jyo.Rectangle, String, Number", function (rect, colorStr, lineWidth) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  this.drawRect(rect.x, rect.y, rect.width, rect.height, colorStr, lineWidth);
              }).
              add("Number, Number, Number, Number, String, Number", function (x, y, width, height, colorStr, lineWidth) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  ctx = this.context;
                  ctx.lineWidth = lineWidth;
                  ctx.strokeStyle = colorStr;
                  ctx.strokeRect(x, y, width, height);

                  if (lineWidth > 1) {
                      this.drawRect(x + 1, y + 1, width - 2, height - 2, colorStr, lineWidth - 1);
                  }
              }),
    fillRoundRect: Jyo.Overload().
                   add("Jyo.Rectangle, Number", function (rect, radius) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>

                       this.fillRoundRect(rect.x, rect.y, rect.width, rect.height, radius, String.empty);
                   }).
                   add("Jyo.Rectangle, Number, String", function (rect, radius, colorStr) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>

                       this.fillRoundRect(rect.x, rect.y, rect.width, rect.height, radius, colorStr);
                   }).
                   add("Jyo.Rectangle, Number, Jyo.Color", function (rect, radius, color) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>

                       this.fillRoundRect(rect.x, rect.y, rect.width, rect.height, radius, color.toRgba());
                   }).
                   add("Number, Number, Number, Number, Number", function (x, y, width, height, radius) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>

                       this.fillRoundRect(x, y, width, height, radius, String.empty);
                   }).
                   add("Number, Number, Number, Number, Number, Jyo.Color", function (x, y, width, height, radius, color) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>

                       this.fillRoundRect(x, y, width, height, radius, color.toRgba());
                   }).
                   add("Number, Number, Number, Number, Number, String", function (x, y, width, height, radius, colorStr) {
                       /// <summary>绘制实心矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>

                       var ps = [];

                       ps.push(x, y + radius);
                       ps = ps.concat(Math.getBezierCurvePoints(x, y + height - radius, x, y + height, x + radius, y + height));
                       ps = ps.concat(Math.getBezierCurvePoints(x + width - radius, y + height, x + width, y + height, x + width, y + height - radius));
                       ps = ps.concat(Math.getBezierCurvePoints(x + width, y + radius, x + width, y, x + width - radius, y));
                       ps = ps.concat(Math.getBezierCurvePoints(x + radius, y, x, y, x, y + radius));

                       this.fillPolygon(ps, colorStr || "#000000");
                   }),
    drawRoundRect: Jyo.Overload().
                   add("Jyo.Rectangle, Number", function (rect, radius) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, String.empty, 1);
                   }).
                   add("Jyo.Rectangle, Number, Number", function (rect, radius, lineWidth) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, String.empty, lineWidth);
                   }).
                   add("Jyo.Rectangle, Number, String", function (rect, radius, colorStr) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, colorStr, 1);
                   }).
                   add("Jyo.Rectangle, Number, String, Number", function (rect, radius, colorStr, lineWidth) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, colorStr, lineWidth);
                   }).
                   add("Jyo.Rectangle, Number, Jyo.Color", function (rect, radius, color) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, color.toRgba(), 1);
                   }).
                   add("Jyo.Rectangle, Number, Jyo.Color, Number", function (rect, radius, color, lineWidth) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, color.toRgba(), lineWidth);
                   }).
                   add("Number, Number, Number, Number, Number", function (x, y, width, height, radius) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>

                       this.drawRoundRect(x, y, width, height, radius, String.empty, 1);
                   }).
                   add("Number, Number, Number, Number, Number, Number", function (x, y, width, height, radius, lineWidth) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       this.drawRoundRect(x, y, width, height, radius, String.empty, lineWidth);
                   }).
                   add("Number, Number, Number, Number, Number, Jyo.Color", function (x, y, width, height, radius, color) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>

                       this.drawRoundRect(x, y, width, height, radius, color.toRgba(), 1);
                   }).
                   add("Number, Number, Number, Number, Number, Jyo.Color, Number", function (x, y, width, height, radius, color, lineWidth) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       this.drawRoundRect(x, y, width, height, radius, color.toRgba(), lineWidth);
                   }).
                   add("Number, Number, Number, Number, Number, String", function (x, y, width, height, radius, colorStr) {
                       /// <summary>绘制实心矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>

                       this.drawRoundRect(x, y, width, height, radius, colorStr, 1);
                   }).
                   add("Number, Number, Number, Number, Number, String, Number", function (x, y, width, height, radius, colorStr, lineWidth) {
                       /// <summary>绘制实心矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       var ps = [];

                       ps.push(x, y + radius);
                       ps = ps.concat(Math.getBezierCurvePoints(x, y + height - radius, x, y + height, x + radius, y + height));
                       ps = ps.concat(Math.getBezierCurvePoints(x + width - radius, y + height, x + width, y + height, x + width, y + height - radius));
                       ps = ps.concat(Math.getBezierCurvePoints(x + width, y + radius, x + width, y, x + width - radius, y));
                       ps = ps.concat(Math.getBezierCurvePoints(x + radius, y, x, y, x, y + radius));

                       this.drawPolygon(ps, colorStr || "#000000", lineWidth);
                   }),
    drawImage: Jyo.Overload().
               add("*, Number, Number", function (element, x, y) {
                   /// <summary>绘制图象</summary>
                   /// <param name="element" type="Object">要绘制的元素</param>
                   /// <param name="x" type="Number">起始X坐标</param>
                   /// <param name="y" type="Number">起始Y坐标</param>

                   this.context.drawImage(element.object || element, x, y);
               }).
               add("*, Jyo.Rectangle", function (element, rect) {
                   /// <summary>绘制图象</summary>
                   /// <param name="element" type="Object">要绘制的元素</param>
                   /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>

                   this.drawImage(element.object || element, rect.x, rect.y, rect.width, rect.height);
               }).
               add("*, Number, Number, Number, Number", function (element, x, y, width, height) {
                   /// <summary>绘制图象</summary>
                   /// <param name="element" type="Object">要绘制的元素</param>
                   /// <param name="x" type="Number">起始X坐标</param>
                   /// <param name="y" type="Number">起始Y坐标</param>
                   /// <param name="width" type="Number">图像宽度</param>
                   /// <param name="height" type="Number">图像高度</param>

                   this.context.drawImage(element.object || element, x, y, width, height);
               }).
               add("*, Number, Number, Number, Number, Number, Number, Number, Number", function (element, x, y, width, height, cx, cy, cwidth, cheight) {
                   /// <summary>绘制图象</summary>
                   /// <param name="element" type="Object">要绘制的元素</param>
                   /// <param name="x" type="Number">起始X坐标</param>
                   /// <param name="y" type="Number">起始Y坐标</param>
                   /// <param name="width" type="Number">图像宽度</param>
                   /// <param name="height" type="Number">图像高度</param>
                   /// <param name="cx" type="Number">在原图坐标上进行剪裁的起始X坐标</param>
                   /// <param name="cy" type="Number">在原图坐标上进行剪裁的起始Y坐标</param>
                   /// <param name="cwidth" type="Number">在原图坐标上进行剪裁的图像宽度</param>
                   /// <param name="cheight" type="Number">在原图坐标上进行剪裁的图像高度</param>

                   this.context.drawImage(element.object || element, cx, cy, cwidth, cheight, x, y, width, height);
               }),
    drawText: Jyo.Overload().
                add("String, Number, Number", function (str, x, y) {
                    /// <summary>绘制文字</summary>
                    /// <param name="str" type="String">要显示的文字</param>
                    /// <param name="x" type="Number">起始X坐标</param>
                    /// <param name="y" type="Number">起始Y坐标</param>

                    this.drawText(str, x, y, "", "");
                }).
                add("String, Number, Number, Jyo.Color", function (str, x, y, color) {
                    /// <summary>绘制文字</summary>
                    /// <param name="str" type="String">要显示的文字</param>
                    /// <param name="x" type="Number">起始X坐标</param>
                    /// <param name="y" type="Number">起始Y坐标</param>
                    /// <param name="color" type="Jyo.Color">颜色对象</param>

                    this.drawText(str, x, y, color.toRgba(), "");
                }).
                add("String, Number, Number, String", function (str, x, y, colorStr) {
                    /// <summary>绘制文字</summary>
                    /// <param name="str" type="String">要显示的文字</param>
                    /// <param name="x" type="Number">起始X坐标</param>
                    /// <param name="y" type="Number">起始Y坐标</param>
                    /// <param name="colorStr" type="String">颜色字符串值</param>

                    this.drawText(str, x, y, colorStr, "");
                }).
                add("String, Number, Number, Jyo.Color, String", function (str, x, y, color, font) {
                    /// <summary>绘制文字</summary>
                    /// <param name="str" type="String">要显示的文字</param>
                    /// <param name="x" type="Number">起始X坐标</param>
                    /// <param name="y" type="Number">起始Y坐标</param>
                    /// <param name="color" type="Jyo.Color">颜色对象</param>
                    /// <param name="font" type="String">字体字符串值</param>

                    this.drawText(str, x, y, color.toRgba(), font);
                }).
                add("String, Number, Number, String, String", function (str, x, y, colorStr, font) {
                    /// <summary>绘制文字</summary>
                    /// <param name="str" type="String">要显示的文字</param>
                    /// <param name="x" type="Number">起始X坐标</param>
                    /// <param name="y" type="Number">起始Y坐标</param>
                    /// <param name="colorStr" type="String">颜色字符串值</param>
                    /// <param name="font" type="String">字体字符串值</param>

                    var ctx = this.context;

                    ctx.fillStyle = colorStr || "#000000";
                    ctx.font = font || "14px Arial";

                    var fontHeight = this.getTextHeight(str, ctx.font);
                    var strList = str.split(/\r\n|\n|\r/ig);
                    for (var i = 0; i < strList.length; i++) {
                        ctx.fillText(strList[i], x, y + fontHeight * (i + 0.8));
                    }
                }),
    drawLine: Jyo.Overload().
              add("Number, Number, Number, Number", function (x1, y1, x2, y2) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>

                  this.drawLine(x1, y1, x2, y2, "", 1, "");
              }).
              add("Number, Number, Number, Number, Jyo.Color", function (x1, y1, x2, y2, color) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>

                  this.drawLine(x1, y1, x2, y2, color.toRgba(), 1, "");
              }).
              add("Number, Number, Number, Number, String", function (x1, y1, x2, y2, colorStr) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>

                  this.drawLine(x1, y1, x2, y2, colorStr, 1, "");
              }).
              add("Number, Number, Number, Number, Jyo.Color, Number", function (x1, y1, x2, y2, color, lineWidth) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  this.drawLine(x1, y1, x2, y2, color.toRgba(), lineWidth, "");
              }).
              add("Number, Number, Number, Number, String, Number", function (x1, y1, x2, y2, colorStr, lineWidth) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  this.drawLine(x1, y1, x2, y2, colorStr, lineWidth, "");
              }).
              add("Number, Number, Number, Number, Jyo.Color, Number, String", function (x1, y1, x2, y2, color, lineWidth, cap) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>
                  /// <param name="cap" type="String">闭合样式</param>

                  this.drawLine(x1, y1, x2, y2, color.toRgba(), lineWidth, cap);
              }).
              add("Number, Number, Number, Number, String, Number, String", function (x1, y1, x2, y2, colorStr, lineWidth, cap) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>
                  /// <param name="cap" type="String">闭合样式</param>

                  var ctx = this.context;

                  ctx.strokeStyle = colorStr || "#000000";
                  ctx.lineWidth = lineWidth || 1.0;
                  ctx.lineCap = cap || "butt";

                  ctx.beginPath();
                  ctx.moveTo(x1, y1);
                  ctx.lineTo(x2, y2);
                  ctx.closePath();
                  ctx.stroke();
              }),
    drawPolygon: Jyo.Overload().
                 add("Array", function (list) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>

                     this.drawPolygon(list, "", 1, "");
                 }).
                 add("Array, Jyo.Color", function (list, color) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="color" type="Jyo.Color">颜色对象</param>

                     this.drawPolygon(list, color.toRgba(), 1, "");
                 }).
                 add("Array, String", function (list, colorStr) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="colorStr" type="String">颜色字符串值</param>

                     this.drawPolygon(list, colorStr, 1, "");
                 }).
                 add("Array, Jyo.Color, Number", function (list, color, lineWidth) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="color" type="Jyo.Color">颜色对象</param>
                     /// <param name="lineWidth" type="Number">线条宽度</param>

                     this.drawPolygon(list, color.toRgba(), lineWidth, "");
                 }).
                 add("Array, String, Number", function (list, colorStr, lineWidth) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="colorStr" type="String">颜色字符串值</param>
                     /// <param name="lineWidth" type="Number">线条宽度</param>

                     this.drawPolygon(list, colorStr, lineWidth, "");
                 }).
                 add("Array, Jyo.Color, Number, String", function (list, color, lineWidth, lineJoin) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="color" type="Jyo.Color">颜色对象</param>
                     /// <param name="lineWidth" type="Number">线条宽度</param>
                     /// <param name="lineJoin" type="String">线条闭合样式</param>

                     this.drawPolygon(list, color.toRgba(), lineWidth, lineJoin);
                 }).
                 add("Array, String, Number, String", function (list, colorStr, lineWidth, lineJoin) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="colorStr" type="String">颜色字符串值</param>
                     /// <param name="lineWidth" type="Number">线条宽度</param>
                     /// <param name="lineJoin" type="String">线条闭合样式</param>

                     var ctx = this.context;

                     ctx.strokeStyle = colorStr || "#000000";
                     ctx.lineWidth = lineWidth || 1.0;
                     ctx.lineJoin = lineJoin || "miter";

                     ctx.beginPath();
                     ctx.moveTo(list[0], list[1]);
                     for (var i = 2, len = list.length; i < len; i += 2) ctx.lineTo(list[i], list[i + 1]);
                     ctx.closePath();
                     ctx.stroke();
                 }),
    fillPolygon: Jyo.Overload().
                 add("Array", function (list) {
                     /// <summary>绘制实心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>

                     this.fillPolygon(list, "");
                 }).
                 add("Array, Jyo.Color", function (list, color) {
                     /// <summary>绘制实心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="color" type="Jyo.Color">颜色对象</param>

                     this.fillPolygon(list, color.toRgba());
                 }).
                 add("Array, String", function (list, colorStr) {
                     /// <summary>绘制实心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="colorStr" type="String">颜色字符串值</param>

                     var ctx = this.context;

                     ctx.fillStyle = colorStr || "#000000";

                     ctx.beginPath();
                     ctx.moveTo(list[0], list[1]);
                     for (var i = 2, len = list.length; i < len; i += 2) ctx.lineTo(list[i], list[i + 1]);
                     ctx.closePath();
                     ctx.fill();
                 })
});

(function (Math, undefined) {
    if (!Jyo.Renderer.WebGL.isSupport()) return;

    var M_PI = 3.1415926535897932384626433832795028841968;
    var M_TWO_PI = 2.0 * M_PI;
    var M_HALF_PI = M_PI / 2.0;

    function isPOT(value) {
        return value > 0 && ((value - 1) & value) === 0;
    }

    var vec3 = {
        length: function (pt) {
            return Math.sqrt(pt[0] * pt[0] + pt[1] * pt[1] + pt[2] * pt[2]);
        },

        normalize: function (pt) {
            var d = Math.sqrt((pt[0] * pt[0]) + (pt[1] * pt[1]) + (pt[2] * pt[2]));
            if (d === 0) {
                return [0, 0, 0];
            }
            return [pt[0] / d, pt[1] / d, pt[2] / d];
        },

        dot: function (v1, v2) {
            return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
        },

        angle: function (v1, v2) {
            return Math.acos((v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2]) / (Math.sqrt(v1[0] * v1[0] + v1[1] * v1[1] + v1[2] * v1[2]) * Math.sqrt(v2[0] * v2[0] + v2[1] * v2[1] + v2[2] * v2[2])));
        },

        cross: function (vectA, vectB) {
            return [vectA[1] * vectB[2] - vectB[1] * vectA[2], vectA[2] * vectB[0] - vectB[2] * vectA[0], vectA[0] * vectB[1] - vectB[0] * vectA[1]];
        },

        multiply: function (vectA, constB) {
            return [vectA[0] * constB, vectA[1] * constB, vectA[2] * constB];
        },

        add: function (vectA, vectB) {
            return [vectA[0] + vectB[0], vectA[1] + vectB[1], vectA[2] + vectB[2]];
        },

        subtract: function (vectA, vectB) {
            return [vectA[0] - vectB[0], vectA[1] - vectB[1], vectA[2] - vectB[2]];
        },

        equal: function (a, b) {
            var epsilon = 0.0000001;
            if ((a === undefined) && (b === undefined)) {
                return true;
            }
            if ((a === undefined) || (b === undefined)) {
                return false;
            }
            return (Math.abs(a[0] - b[0]) < epsilon && Math.abs(a[1] - b[1]) < epsilon && Math.abs(a[2] - b[2]) < epsilon);
        }
    };

    var mat3 = {
        identity: [1.0, 0.0, 0.0,
                   0.0, 1.0, 0.0,
                   0.0, 0.0, 1.0],

        multiply: function (m1, m2) {
            var m10 = m1[0], m11 = m1[1], m12 = m1[2], m13 = m1[3], m14 = m1[4], m15 = m1[5], m16 = m1[6], m17 = m1[7], m18 = m1[8],
                m20 = m2[0], m21 = m2[1], m22 = m2[2], m23 = m2[3], m24 = m2[4], m25 = m2[5], m26 = m2[6], m27 = m2[7], m28 = m2[8];

            m2[0] = m20 * m10 + m23 * m11 + m26 * m12;
            m2[1] = m21 * m10 + m24 * m11 + m27 * m12;
            m2[2] = m22 * m10 + m25 * m11 + m28 * m12;
            m2[3] = m20 * m13 + m23 * m14 + m26 * m15;
            m2[4] = m21 * m13 + m24 * m14 + m27 * m15;
            m2[5] = m22 * m13 + m25 * m14 + m28 * m15;
            m2[6] = m20 * m16 + m23 * m17 + m26 * m18;
            m2[7] = m21 * m16 + m24 * m17 + m27 * m18;
            m2[8] = m22 * m16 + m25 * m17 + m28 * m18;
        },

        vec2_multiply: function (m1, m2) {
            var mOut = [];
            mOut[0] = m2[0] * m1[0] + m2[3] * m1[1] + m2[6];
            mOut[1] = m2[1] * m1[0] + m2[4] * m1[1] + m2[7];
            return mOut;
        },

        transpose: function (m) {
            return [m[0], m[3], m[6], m[1], m[4], m[7], m[2], m[5], m[8]];
        }
    }; //mat3

    function Transform(mat) {
        return this.clearStack(mat);
    }

    var STACK_DEPTH_LIMIT = 16;

    Transform.prototype.clearStack = function (init_mat) {
        this.m_stack = [];
        this.m_cache = [];
        this.c_stack = 0;
        this.valid = 0;
        this.result = null;

        for (var i = 0; i < STACK_DEPTH_LIMIT; i++) {
            this.m_stack[i] = this.getIdentity();
        }

        if (init_mat !== undefined) {
            this.m_stack[0] = init_mat;
        } else {
            this.setIdentity();
        }
    }; //clearStack

    Transform.prototype.setIdentity = function () {
        this.m_stack[this.c_stack] = this.getIdentity();
        if (this.valid === this.c_stack && this.c_stack) {
            this.valid--;
        }
    };

    Transform.prototype.getIdentity = function () {
        return [1.0, 0.0, 0.0,
                0.0, 1.0, 0.0,
                0.0, 0.0, 1.0];
    };

    Transform.prototype.getResult = function () {
        if (!this.c_stack) {
            return this.m_stack[0];
        }

        var m = mat3.identity;

        if (this.valid > this.c_stack - 1) { this.valid = this.c_stack - 1; }

        for (var i = this.valid; i < this.c_stack + 1; i++) {
            m = mat3.multiply(this.m_stack[i], m);
            this.m_cache[i] = m;
        }

        this.valid = this.c_stack - 1;

        this.result = this.m_cache[this.c_stack];

        return this.result;
    };

    Transform.prototype.pushMatrix = function () {
        this.c_stack++;
        this.m_stack[this.c_stack] = this.getIdentity();
    };

    Transform.prototype.popMatrix = function () {
        if (this.c_stack === 0) { return; }
        this.c_stack--;
    };

    var translateMatrix = Transform.prototype.getIdentity();

    Transform.prototype.translate = function (x, y) {
        translateMatrix[6] = x;
        translateMatrix[7] = y;

        mat3.multiply(translateMatrix, this.m_stack[this.c_stack]);

        /*
        if (this.valid === this.c_stack && this.c_stack) {
          this.valid--;
        }
        */
    };

    var scaleMatrix = Transform.prototype.getIdentity();

    Transform.prototype.scale = function (x, y) {
        scaleMatrix[0] = x;
        scaleMatrix[4] = y;

        mat3.multiply(scaleMatrix, this.m_stack[this.c_stack]);

        /*
        if (this.valid === this.c_stack && this.c_stack) {
          this.valid--;
        }
        */
    };

    var rotateMatrix = Transform.prototype.getIdentity();

    Transform.prototype.rotate = function (ang) {
        var sAng, cAng;

        sAng = Math.sin(-ang);
        cAng = Math.cos(-ang);

        rotateMatrix[0] = cAng;
        rotateMatrix[3] = sAng;
        rotateMatrix[1] = -sAng;
        rotateMatrix[4] = cAng;

        mat3.multiply(rotateMatrix, this.m_stack[this.c_stack]);

        /*
        if (this.valid === this.c_stack && this.c_stack) {
          this.valid--;
        }
        */
    };

    var WebGL2D = function WebGL2D(gl) {
        /// <summary>启用WebGL2D支持</summary>
        /// <param name="gl" type="WebGLRenderingContext">WebGL上下文对象</param>

        if (!(this instanceof WebGL2D)) {
            return new WebGL2D(gl);
        }

        this.canvas = gl.canvas;
        this.gl = gl;
        this.fs = undefined;
        this.vs = undefined;
        this.shaderProgram = undefined;
        this.transform = new Transform();
        this.shaderPool = [];
        this.maxTextureSize = undefined;

        this.initShaders();
        this.initBuffers();

        // Append Canvas2D API features to the WebGL context
        this.initCanvas2DAPI();

        gl.viewport(0, 0, this.canvas.width, this.canvas.height);

        // 默认蓝色背景
        //gl.clearColor(99 / 255, 149 / 255, 236 / 255, 1);
        gl.clear(gl.COLOR_BUFFER_BIT); // | gl.DEPTH_BUFFER_BIT);

        // Depth options
        //gl.enable(gl.DEPTH_TEST);
        //gl.depthFunc(gl.LEQUAL);

        // Blending options
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        this.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);

        this.postInit();
    };

    // Shader Pool BitMasks, i.e. sMask = (shaderMask.texture+shaderMask.stroke)
    var shaderMask = {
        texture: 1,
        crop: 2,
        path: 4
    };

    // Fragment shader source
    WebGL2D.prototype.getFragmentShaderSource = function getFragmentShaderSource(sMask) {
        var fsSource = [
          "#ifdef GL_ES",
            "precision highp float;",
          "#endif",

          "#define hasTexture " + ((sMask & shaderMask.texture) ? "1" : "0"),
          "#define hasCrop " + ((sMask & shaderMask.crop) ? "1" : "0"),

          "varying vec4 vColor;",

          "#if hasTexture",
            "varying vec2 vTextureCoord;",
            "uniform sampler2D uSampler;",
            "#if hasCrop",
              "uniform vec4 uCropSource;",
            "#endif",
          "#endif",

          "void main(void) {",
            "#if hasTexture",
              "#if hasCrop",
                "gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x * uCropSource.z, vTextureCoord.y * uCropSource.w) + uCropSource.xy);",
              "#else",
                "gl_FragColor = texture2D(uSampler, vTextureCoord);",
              "#endif",
            "#else",
              "gl_FragColor = vColor;",
            "#endif",
          "}"
        ].join("\n");

        return fsSource;
    };

    WebGL2D.prototype.getVertexShaderSource = function getVertexShaderSource(stackDepth, sMask) {
        var w = 2 / this.canvas.width, h = -2 / this.canvas.height;

        stackDepth = stackDepth || 1;

        var vsSource = [
          "#define hasTexture " + ((sMask & shaderMask.texture) ? "1" : "0"),
          "attribute vec4 aVertexPosition;",

          "#if hasTexture",
          "varying vec2 vTextureCoord;",
          "#endif",

          "uniform vec4 uColor;",
          "uniform mat3 uTransforms[" + stackDepth + "];",

          "varying vec4 vColor;",

          "const mat4 pMatrix = mat4(" + w + ",0,0,0, 0," + h + ",0,0, 0,0,1.0,1.0, -1.0,1.0,0,0);",

          "mat3 crunchStack(void) {",
            "mat3 result = uTransforms[0];",
            "for (int i = 1; i < " + stackDepth + "; ++i) {",
              "result = uTransforms[i] * result;",
            "}",
            "return result;",
          "}",

          "void main(void) {",
            "vec3 position = crunchStack() * vec3(aVertexPosition.x, aVertexPosition.y, 1.0);",
            "gl_Position = pMatrix * vec4(position, 1.0);",
            "vColor = uColor;",
            "#if hasTexture",
              "vTextureCoord = aVertexPosition.zw;",
            "#endif",
          "}"
        ].join("\n");
        return vsSource;
    };

    // Initialize fragment and vertex shaders
    WebGL2D.prototype.initShaders = function initShaders(transformStackDepth, sMask) {
        var gl = this.gl;

        transformStackDepth = transformStackDepth || 1;
        sMask = sMask || 0;
        var storedShader = this.shaderPool[transformStackDepth];

        if (!storedShader) { storedShader = this.shaderPool[transformStackDepth] = []; }
        storedShader = storedShader[sMask];

        if (storedShader) {
            gl.useProgram(storedShader);
            this.shaderProgram = storedShader;
            return storedShader;
        } else {
            var fs = this.fs = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(this.fs, this.getFragmentShaderSource(sMask));
            gl.compileShader(this.fs);

            if (!gl.getShaderParameter(this.fs, gl.COMPILE_STATUS)) {
                throw "fragment shader error: " + gl.getShaderInfoLog(this.fs);
            }

            var vs = this.vs = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(this.vs, this.getVertexShaderSource(transformStackDepth, sMask));
            gl.compileShader(this.vs);

            if (!gl.getShaderParameter(this.vs, gl.COMPILE_STATUS)) {
                throw "vertex shader error: " + gl.getShaderInfoLog(this.vs);
            }


            var shaderProgram = this.shaderProgram = gl.createProgram();
            shaderProgram.stackDepth = transformStackDepth;
            gl.attachShader(shaderProgram, fs);
            gl.attachShader(shaderProgram, vs);
            gl.linkProgram(shaderProgram);

            if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
                throw "Could not initialise shaders.";
            }

            gl.useProgram(shaderProgram);

            shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
            gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

            shaderProgram.uColor = gl.getUniformLocation(shaderProgram, 'uColor');
            shaderProgram.uSampler = gl.getUniformLocation(shaderProgram, 'uSampler');
            shaderProgram.uCropSource = gl.getUniformLocation(shaderProgram, 'uCropSource');

            shaderProgram.uTransforms = [];
            for (var i = 0; i < transformStackDepth; ++i) {
                shaderProgram.uTransforms[i] = gl.getUniformLocation(shaderProgram, 'uTransforms[' + i + ']');
            } //for
            this.shaderPool[transformStackDepth][sMask] = shaderProgram;
            return shaderProgram;
        } //if
    };

    var rectVertexPositionBuffer;
    var rectVertexColorBuffer;

    var pathVertexPositionBuffer;
    var pathVertexColorBuffer;

    // 2D Vertices and Texture UV coords
    var rectVerts = new Float32Array([
        0, 0, 0, 0,
        0, 1, 0, 1,
        1, 1, 1, 1,
        1, 0, 1, 0
    ]);

    WebGL2D.prototype.initBuffers = function initBuffers() {
        var gl = this.gl;

        rectVertexPositionBuffer = gl.createBuffer();
        rectVertexColorBuffer = gl.createBuffer();

        pathVertexPositionBuffer = gl.createBuffer();
        pathVertexColorBuffer = gl.createBuffer();

        gl.bindBuffer(gl.ARRAY_BUFFER, rectVertexPositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, rectVerts, gl.STATIC_DRAW);
    };

    // Maintains an array of all WebGL2D instances
    WebGL2D.instances = [];

    WebGL2D.prototype.postInit = function () {
        WebGL2D.instances.push(this);
    };

    // Extends gl context with Canvas2D API
    WebGL2D.prototype.initCanvas2DAPI = function initCanvas2DAPI() {
        var gl2d = this,
            gl = this.gl;

        var textCanvas = document.createElement("canvas");
        textCanvas.width = gl.canvas.width;
        textCanvas.height = gl.canvas.height;
        textCanvas.noCatch = true;
        var textCtx = textCanvas.getContext("2d");

        var reRGBAColor = /^rgb(a)?\(\s*(-?[\d]+)(%)?\s*,\s*(-?[\d]+)(%)?\s*,\s*(-?[\d]+)(%)?\s*,?\s*(-?[\d\.]+)?\s*\)$/;
        var reHSLAColor = /^hsl(a)?\(\s*(-?[\d\.]+)\s*,\s*(-?[\d\.]+)%\s*,\s*(-?[\d\.]+)%\s*,?\s*(-?[\d\.]+)?\s*\)$/;
        var reHex6Color = /^#([0-9A-Fa-f]{6})$/;
        var reHex3Color = /^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/;

        function HSLAToRGBA(h, s, l, a) {
            var r, g, b, m1, m2;

            // Clamp and Normalize values
            h = (((h % 360) + 360) % 360) / 360;
            s = s > 100 ? 1 : s / 100;
            s = s < 0 ? 0 : s;
            l = l > 100 ? 1 : l / 100;
            l = l < 0 ? 0 : l;

            m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
            m1 = l * 2 - m2;

            function getHue(value) {
                var hue;

                if (value * 6 < 1) {
                    hue = m1 + (m2 - m1) * value * 6;
                } else if (value * 2 < 1) {
                    hue = m2;
                } else if (value * 3 < 2) {
                    hue = m1 + (m2 - m1) * (2 / 3 - value) * 6;
                } else {
                    hue = m1;
                }

                return hue;
            }

            r = getHue(h + 1 / 3);
            g = getHue(h);
            b = getHue(h - 1 / 3);

            return [r, g, b, a];
        }

        // Converts rgb(a) color string to gl color vector
        function colorStringToVec4(value) {
            var result = [], match, channel, isPercent, hasAlpha, alphaChannel, sameType;

            if ((match = reRGBAColor.exec(value))) {
                hasAlpha = match[1], alphaChannel = parseFloat(match[8]);

                if ((hasAlpha && isNaN(alphaChannel)) || (!hasAlpha && !isNaN(alphaChannel))) {
                    return false;
                }

                sameType = match[3];

                for (var i = 2; i < 8; i += 2) {
                    channel = match[i], isPercent = match[i + 1];

                    if (isPercent !== sameType) {
                        return false;
                    }

                    // Clamp and normalize values
                    if (isPercent) {
                        channel = channel > 100 ? 1 : channel / 100;
                        channel = channel < 0 ? 0 : channel;
                    } else {
                        channel = channel > 255 ? 1 : channel / 255;
                        channel = channel < 0 ? 0 : channel;
                    }

                    result.push(channel);
                }

                result.push(hasAlpha ? alphaChannel : 1.0);
            } else if ((match = reHSLAColor.exec(value))) {
                hasAlpha = match[1], alphaChannel = parseFloat(match[5]);
                result = HSLAToRGBA(match[2], match[3], match[4], parseFloat(hasAlpha && alphaChannel ? alphaChannel : 1.0));
            } else if ((match = reHex6Color.exec(value))) {
                var colorInt = parseInt(match[1], 16);
                result = [((colorInt & 0xFF0000) >> 16) / 255, ((colorInt & 0x00FF00) >> 8) / 255, (colorInt & 0x0000FF) / 255, 1.0];
            } else if ((match = reHex3Color.exec(value))) {
                var hexString = "#" + [match[1], match[1], match[2], match[2], match[3], match[3]].join("");
                result = colorStringToVec4(hexString);
            } else if (value.toLowerCase() in colorKeywords) {
                result = colorStringToVec4(colorKeywords[value.toLowerCase()]);
            } else if (value.toLowerCase() === "transparent") {
                result = [0, 0, 0, 0];
            } else {
                // Color keywords not yet implemented, ie "orange", return hot pink
                return false;
            }

            return result;
        }

        function colorVecToString(vec4) {
            return "rgba(" + (vec4[0] * 255) + ", " + (vec4[1] * 255) + ", " + (vec4[2] * 255) + ", " + parseFloat(vec4[3]) + ")";
        }

        var colorKeywords = Jyo.Color.colorMap;

        // Maintain drawing state params during gl.save and gl.restore. see saveDrawState() and restoreDrawState()
        var drawState = {}, drawStateStack = [];

        // A fast simple shallow clone
        function cloneObject(obj) {
            var target = {};
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    target[i] = obj[i];
                }
            }
            return target;
        }

        function saveDrawState() {
            var bakedDrawState = {
                fillStyle: [drawState.fillStyle[0], drawState.fillStyle[1], drawState.fillStyle[2], drawState.fillStyle[3]],
                strokeStyle: [drawState.strokeStyle[0], drawState.strokeStyle[1], drawState.strokeStyle[2], drawState.strokeStyle[3]],
                globalAlpha: drawState.globalAlpha,
                globalCompositeOperation: drawState.globalCompositeOperation,
                lineCap: drawState.lineCap,
                lineJoin: drawState.lineJoin,
                lineWidth: drawState.lineWidth,
                miterLimit: drawState.miterLimit,
                shadowColor: drawState.shadowColor,
                shadowBlur: drawState.shadowBlur,
                shadowOffsetX: drawState.shadowOffsetX,
                shadowOffsetY: drawState.shadowOffsetY,
                textAlign: drawState.textAlign,
                font: drawState.font,
                textBaseline: drawState.textBaseline
            };

            drawStateStack.push(bakedDrawState);
        }

        function restoreDrawState() {
            if (drawStateStack.length) {
                drawState = drawStateStack.pop();
            }
        }

        // WebGL requires colors as a vector while Canvas2D sets colors as an rgba string
        // These getters and setters store the original rgba string as well as convert to a vector
        drawState.fillStyle = [0, 0, 0, 1]; // default black

        Object.defineProperty(gl, "fillStyle", {
            get: function () { return colorVecToString(drawState.fillStyle); },
            set: function (value) {
                drawState.fillStyle = colorStringToVec4(value) || drawState.fillStyle;
                textCtx.fillStyle = value;
            }
        });

        drawState.strokeStyle = [0, 0, 0, 1]; // default black

        Object.defineProperty(gl, "strokeStyle", {
            get: function () { return colorVecToString(drawState.strokeStyle); },
            set: function (value) {
                drawState.strokeStyle = colorStringToVec4(value) || drawStyle.strokeStyle;
                textCtx.strokeStyle = value;
            }
        });

        // WebGL already has a lineWidth() function but Canvas2D requires a lineWidth property
        // Store the original lineWidth() function for later use
        gl.$lineWidth = gl.lineWidth;
        drawState.lineWidth = 1.0;

        Object.defineProperty(gl, "lineWidth", {
            get: function () { return drawState.lineWidth; },
            set: function (value) {
                gl.$lineWidth(value);
                drawState.lineWidth = value;
            }
        });

        // Currently unsupported attributes and their default values
        drawState.lineCap = "butt";

        Object.defineProperty(gl, "lineCap", {
            get: function () { return drawState.lineCap; },
            set: function (value) {
                drawState.lineCap = value;
            }
        });

        drawState.lineJoin = "miter";

        Object.defineProperty(gl, "lineJoin", {
            get: function () { return drawState.lineJoin; },
            set: function (value) {
                drawState.lineJoin = value;
            }
        });

        drawState.miterLimit = 10;

        Object.defineProperty(gl, "miterLimit", {
            get: function () { return drawState.miterLimit; },
            set: function (value) {
                drawState.miterLimit = value;
            }
        });

        drawState.shadowOffsetX = 0;

        Object.defineProperty(gl, "shadowOffsetX", {
            get: function () { return drawState.shadowOffsetX; },
            set: function (value) {
                drawState.shadowOffsetX = value;
                textCtx.shadowOffsetX = value;
            }
        });

        drawState.shadowOffsetY = 0;

        Object.defineProperty(gl, "shadowOffsetY", {
            get: function () { return drawState.shadowOffsetY; },
            set: function (value) {
                drawState.shadowOffsetY = value;
                textCtx.shadowOffsetY = value;
            }
        });

        drawState.shadowBlur = 0;

        Object.defineProperty(gl, "shadowBlur", {
            get: function () { return drawState.shadowBlur; },
            set: function (value) {
                drawState.shadowBlur = value;
                textCtx.shadowBlur = value;
            }
        });

        drawState.shadowColor = "rgba(0, 0, 0, 0.0)";

        Object.defineProperty(gl, "shadowColor", {
            get: function () { return drawState.shadowColor; },
            set: function (value) {
                drawState.shadowColor = value;
                textCtx.shadowColor = value;
            }
        });

        drawState.font = "10px sans-serif";

        Object.defineProperty(gl, "font", {
            get: function () { return drawState.font; },
            set: function (value) {
                drawState.font = value;
                textCtx.font = value;
            }
        });

        drawState.textAlign = "start";

        Object.defineProperty(gl, "textAlign", {
            get: function () { return drawState.textAlign; },
            set: function (value) {
                drawState.textAlign = value;
                textCtx.textAlign = value;
            }
        });

        drawState.textBaseline = "alphabetic";

        Object.defineProperty(gl, "textBaseline", {
            get: function () { return drawState.textBaseline; },
            set: function (value) {
                drawState.textBaseline = value;
                textCtx.textBaseline = value;
            }
        });

        // This attribute will need to control global alpha of objects drawn.
        drawState.globalAlpha = 1.0;

        Object.defineProperty(gl, "globalAlpha", {
            get: function () { return drawState.globalAlpha; },
            set: function (value) {
                drawState.globalAlpha = value;
                textCtx.globalAlpha = value;
            }
        });

        // This attribute will need to set the gl.blendFunc mode
        drawState.globalCompositeOperation = "source-over";

        Object.defineProperty(gl, "globalCompositeOperation", {
            get: function () { return drawState.globalCompositeOperation; },
            set: function (value) {
                drawState.globalCompositeOperation = value;
            }
        });

        var tempCanvas = document.createElement('canvas');
        var tempCtx = tempCanvas.getContext('2d');

        gl.save = function save() {
            gl2d.transform.pushMatrix();
            saveDrawState();
        };

        gl.restore = function restore() {
            gl2d.transform.popMatrix();
            restoreDrawState();
        };

        gl.translate = function translate(x, y) {
            gl2d.transform.translate(x, y);
        };

        gl.rotate = function rotate(a) {
            gl2d.transform.rotate(a);
        };

        gl.scale = function scale(x, y) {
            gl2d.transform.scale(x, y);
        };

        gl.createImageData = function createImageData(width, height) {
            return tempCtx.createImageData(width, height);
        };

        gl.getImageData = function getImageData(x, y, width, height) {
            var data = tempCtx.createImageData(width, height);
            var buffer = new Uint8Array(width * height * 4);
            gl.readPixels(x, y, width, height, gl.RGBA, gl.UNSIGNED_BYTE, buffer);
            var w = width * 4, h = height;
            for (var i = 0, maxI = h / 2; i < maxI; ++i) {
                for (var j = 0, maxJ = w; j < maxJ; ++j) {
                    var index1 = i * w + j;
                    var index2 = (h - i - 1) * w + j;
                    data.data[index1] = buffer[index2];
                    data.data[index2] = buffer[index1];
                } //for
            } //for

            return data;
        };

        gl.putImageData = function putImageData(imageData, x, y) {
            gl.drawImage(imageData, x, y);
        };

        gl.transform = function transform(m11, m12, m21, m22, dx, dy) {
            var m = gl2d.transform.m_stack[gl2d.transform.c_stack];

            m[0] *= m11;
            m[1] *= m21;
            m[2] *= dx;
            m[3] *= m12;
            m[4] *= m22;
            m[5] *= dy;
            m[6] = 0;
            m[7] = 0;
        };

        function sendTransformStack(sp) {
            var stack = gl2d.transform.m_stack;
            for (var i = 0, maxI = gl2d.transform.c_stack + 1; i < maxI; ++i) {
                gl.uniformMatrix3fv(sp.uTransforms[i], false, stack[maxI - 1 - i]);
            } //for
        }

        gl.setTransform = function setTransform(m11, m12, m21, m22, dx, dy) {
            gl2d.transform.setIdentity();
            gl.transform.apply(this, arguments);
        };

        gl.fillRect = function fillRect(x, y, width, height) {
            var transform = gl2d.transform;
            var shaderProgram = gl2d.initShaders(transform.c_stack + 2, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, rectVertexPositionBuffer);
            gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 4, gl.FLOAT, false, 0, 0);

            transform.pushMatrix();

            transform.translate(x, y);
            transform.scale(width, height);

            sendTransformStack(shaderProgram);

            gl.uniform4f(shaderProgram.uColor, drawState.fillStyle[0], drawState.fillStyle[1], drawState.fillStyle[2], drawState.fillStyle[3]);

            gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

            transform.popMatrix();
        };

        gl.strokeRect = function strokeRect(x, y, width, height) {
            var transform = gl2d.transform;
            var shaderProgram = gl2d.initShaders(transform.c_stack + 2, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, rectVertexPositionBuffer);
            gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 4, gl.FLOAT, false, 0, 0);

            transform.pushMatrix();

            transform.translate(x, y);
            transform.scale(width, height);

            sendTransformStack(shaderProgram);

            gl.uniform4f(shaderProgram.uColor, drawState.strokeStyle[0], drawState.strokeStyle[1], drawState.strokeStyle[2], drawState.strokeStyle[3]);

            gl.drawArrays(gl.LINE_LOOP, 0, 4);

            transform.popMatrix();
        };

        gl.clearRect = function clearRect(x, y, width, height) { };

        gl.fillText = function (text, x, y, fontSize) {
            textCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            textCtx.fillText(text, x, y);

            this.drawImage(textCanvas, 0, 0);
        };

        gl.strokeText = function (text, x, y, fontHeight) {
            // 暂不支持strokeText
        };

        gl.measureText = function (text) {
            // 暂不支持measureText
        };

        gl.quadraticCurveTo = function (cp1x, cp1y, x, y) {
            // 暂不支持quadraticCurveTo
        };

        gl.bezierCurveTo = function (cp1x, cp1y, cp2x, cp2y, x, y) {
            // 暂不支持bezierCurveTo
        };

        gl.arcTo = function (x1, y1, x2, y2, radius) {
            // 暂不支持arcTo
        };

        gl.arc = function (x, y, radius, startAngle, endAngle, anticlockwise) {
            // 暂不支持arc
        };

        gl.clip = function clip() {
            // 暂不支持clip
        };

        var subPaths = [];

        function SubPath(x, y) {
            this.closed = false;
            this.verts = [x, y, 0, 0];
        }

        // Empty the list of subpaths so that the context once again has zero subpaths
        gl.beginPath = function beginPath() {
            subPaths.length = 0;
        };

        // Mark last subpath as closed and create a new subpath with the same starting point as the previous subpath
        gl.closePath = function closePath() {
            if (subPaths.length) {
                // Mark last subpath closed.
                var prevPath = subPaths[subPaths.length - 1], startX = prevPath.verts[0], startY = prevPath.verts[1];
                prevPath.closed = true;

                // Create new subpath using the starting position of previous subpath
                var newPath = new SubPath(startX, startY);
                subPaths.push(newPath);
            }
        };

        // Create a new subpath with the specified point as its first (and only) point
        gl.moveTo = function moveTo(x, y) {
            subPaths.push(new SubPath(x, y));
        };

        gl.lineTo = function lineTo(x, y) {
            if (subPaths.length) {
                subPaths[subPaths.length - 1].verts.push(x, y, 0, 0);
            } else {
                // Create a new subpath if none currently exist
                gl.moveTo(x, y);
            }
        };

        // Adds a closed rect subpath and creates a new subpath
        gl.rect = function rect(x, y, w, h) {
            gl.moveTo(x, y);
            gl.lineTo(x + w, y);
            gl.lineTo(x + w, y + h);
            gl.lineTo(x, y + h);
            gl.closePath();
        };

        function fillSubPath(index) {
            var transform = gl2d.transform;
            var shaderProgram = gl2d.initShaders(transform.c_stack + 2, 0);

            var subPath = subPaths[index];
            var verts = subPath.verts;

            gl.bindBuffer(gl.ARRAY_BUFFER, pathVertexPositionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);

            gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 4, gl.FLOAT, false, 0, 0);

            transform.pushMatrix();

            sendTransformStack(shaderProgram);

            gl.uniform4f(shaderProgram.uColor, drawState.fillStyle[0], drawState.fillStyle[1], drawState.fillStyle[2], drawState.fillStyle[3]);

            gl.drawArrays(gl.TRIANGLE_FAN, 0, verts.length / 4);

            transform.popMatrix();
        }

        gl.fill = function fill() {
            for (var i = 0; i < subPaths.length; i++) {
                fillSubPath(i);
            }
        };

        function strokeSubPath(index) {
            var transform = gl2d.transform;
            var shaderProgram = gl2d.initShaders(transform.c_stack + 2, 0);

            var subPath = subPaths[index];
            var verts = subPath.verts;

            gl.bindBuffer(gl.ARRAY_BUFFER, pathVertexPositionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);

            gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 4, gl.FLOAT, false, 0, 0);

            transform.pushMatrix();

            sendTransformStack(shaderProgram);

            gl.uniform4f(shaderProgram.uColor, drawState.strokeStyle[0], drawState.strokeStyle[1], drawState.strokeStyle[2], drawState.strokeStyle[3]);

            if (subPath.closed) {
                gl.drawArrays(gl.LINE_LOOP, 0, verts.length / 4);
            } else {
                gl.drawArrays(gl.LINE_STRIP, 0, verts.length / 4);
            }

            transform.popMatrix();
        }

        gl.stroke = function stroke() {
            for (var i = 0; i < subPaths.length; i++) {
                strokeSubPath(i);
            }
        };

        gl.isPointInPath = function isPointInPath() { };

        gl.drawFocusRing = function drawFocusRing() { };

        var imageCache = [], textureCache = [];

        function Texture(image) {
            this.obj = gl.createTexture();

            if (!image.noCatch) {
                this.index = textureCache.push(this);
                imageCache.push(image);
            }

            // we may wish to consider tiling large images like this instead of scaling and
            // adjust appropriately (flip to next texture source and tile offset) when drawing
            if (image.width > gl2d.maxTextureSize || image.height > gl2d.maxTextureSize) {
                var canvas = document.createElement("canvas");

                canvas.width = (image.width > gl2d.maxTextureSize) ? gl2d.maxTextureSize : image.width;
                canvas.height = (image.height > gl2d.maxTextureSize) ? gl2d.maxTextureSize : image.height;

                var ctx = canvas.getContext("2d");

                ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);

                image = canvas;
            }

            gl.bindTexture(gl.TEXTURE_2D, this.obj);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

            // Enable Mip mapping on power-of-2 textures
            if (isPOT(image.width) && isPOT(image.height)) {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
                gl.generateMipmap(gl.TEXTURE_2D);
            } else {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            }

            // Unbind texture
            gl.bindTexture(gl.TEXTURE_2D, null);
        }

        gl.drawImage = function drawImage(image, a, b, c, d, e, f, g, h) {
            image = image.image || image;

            var transform = gl2d.transform;

            transform.pushMatrix();

            var sMask = shaderMask.texture;
            var doCrop = false;

            //drawImage(image, dx, dy)
            if (arguments.length === 3) {
                transform.translate(a, b);
                transform.scale(image.width, image.height);
            }

                //drawImage(image, dx, dy, dw, dh)
            else if (arguments.length === 5) {
                transform.translate(a, b);
                transform.scale(c, d);
            }

                //drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
            else if (arguments.length === 9) {
                transform.translate(e, f);
                transform.scale(g, h);
                sMask = sMask | shaderMask.crop;
                doCrop = true;
            }

            var shaderProgram = gl2d.initShaders(transform.c_stack, sMask);

            var texture, cacheIndex = imageCache.indexOf(image);

            if (cacheIndex !== -1) {
                texture = textureCache[cacheIndex];
            } else {
                texture = new Texture(image);
            }

            if (doCrop) {
                gl.uniform4f(shaderProgram.uCropSource, a / image.width, b / image.height, c / image.width, d / image.height);
            }

            gl.bindBuffer(gl.ARRAY_BUFFER, rectVertexPositionBuffer);
            gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 4, gl.FLOAT, false, 0, 0);

            gl.bindTexture(gl.TEXTURE_2D, texture.obj);
            gl.activeTexture(gl.TEXTURE0);

            gl.uniform1i(shaderProgram.uSampler, 0);

            sendTransformStack(shaderProgram);
            gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

            transform.popMatrix();
        };
    };

    Jyo.Renderer.WebGL["2d"] = WebGL2D;
}(Math)); Jyo.Renderer.Canvas = function () {
    // 添加渲染元素
    this._addRenderElement("canvas");

    // 获取上下文
    this.context = this.canvas.getContext("2d");
};

Jyo.Renderer.Canvas.isSupport = function () {
    /// <summary>检测是否支持</summary>
    /// <returns type="Boolean"></returns>

    if (typeof HTMLCanvasElement.prototype.getContext == "undefined") {
        return false;
    }

    return true;
}

Jyo.Renderer.Canvas.prototype = new Jyo.Object({
    mode: "Canvas",
    clear: Jyo.Overload().
           add(null, function () {
               /// <summary>清空画布</summary>

               var ctx = this.context;
               ctx.clearRect(0, 0, this.width, this.height);
           }).
           add("Jyo.Color", function (color) {
               /// <summary>清空画布</summary>
               /// <param name="color" type="Jyo.Color">颜色对象</param>

               this.clear(color.toRgba());
           }).
           add("String", function (colorStr) {
               /// <summary>清空画布</summary>
               /// <param name="colorStr" type="String">颜色字符串值</param>

               var ctx = this.context;
               ctx.fillStyle = colorStr;
               ctx.fillRect(0, 0, this.width, this.height);
           }),
    begin: function () {
        this.context.save();
    },
    end: function () {
        this.context.restore();
    },
    fillRect: Jyo.Overload().
              add("Jyo.Rectangle", function (rect) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>

                  this.fillRect(rect.x, rect.y, rect.width, rect.height, String.empty);
              }).
              add("Number, Number, Number, Number", function (x, y, width, height) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>

                  this.fillRect(x, y, width, height, String.empty);
              }).
              add("Jyo.Rectangle, Jyo.Color", function (rect, color) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>

                  this.fillRect(rect.x, rect.y, rect.width, rect.height, color.toRgba());
              }).
              add("Number, Number, Number, Number, Jyo.Color", function (x, y, width, height, color) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>

                  this.fillRect(x, y, width, height, color.toRgba());
              }).
              add("Jyo.Rectangle, String", function (rect, colorStr) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>

                  this.fillRect(rect.x, rect.y, rect.width, rect.height, colorStr);
              }).
              add("Number, Number, Number, Number, String", function (x, y, width, height, colorStr) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>

                  ctx = this.context;
                  ctx.fillStyle = colorStr;
                  ctx.fillRect(x, y, width, height);
              }),
    drawRect: Jyo.Overload().
              add("Jyo.Rectangle, Jyo.Color", function (rect, color) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>

                  this.drawRect(rect.x, rect.y, rect.width, rect.height, color.toRgba(), 1);
              }).
              add("Number, Number, Number, Number, Jyo.Color", function (x, y, width, height, color) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>

                  this.drawRect(x, y, width, height, color.toRgba(), 1);
              }).
              add("Jyo.Rectangle, String", function (rect, colorStr) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>

                  this.drawRect(rect.x, rect.y, rect.width, rect.height, colorStr, 1);
              }).
              add("Number, Number, Number, Number, String", function (x, y, width, height, colorStr) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>

                  this.drawRect(x, y, width, height, colorStr, 1);
              }).
              add("Jyo.Rectangle, Jyo.Color, Number", function (rect, color, lineWidth) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  this.drawRect(rect.x, rect.y, rect.width, rect.height, color.toRgba(), lineWidth);
              }).
              add("Number, Number, Number, Number, Jyo.Color, Number", function (x, y, width, height, color, lineWidth) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  this.drawRect(x, y, width, height, color.toRgba(), lineWidth);
              }).
              add("Jyo.Rectangle, String, Number", function (rect, colorStr, lineWidth) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  this.drawRect(rect.x, rect.y, rect.width, rect.height, colorStr, lineWidth);
              }).
              add("Number, Number, Number, Number, String, Number", function (x, y, width, height, colorStr, lineWidth) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  ctx = this.context;
                  ctx.lineWidth = lineWidth;
                  ctx.strokeStyle = colorStr;
                  ctx.strokeRect(x + lineWidth / 2, y + lineWidth / 2, width - lineWidth, height - lineWidth);
              }),
    fillRoundRect: Jyo.Overload().
                   add("Jyo.Rectangle, Number", function (rect, radius) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>

                       this.fillRoundRect(rect.x, rect.y, rect.width, rect.height, radius, String.empty);
                   }).
                   add("Jyo.Rectangle, Number, String", function (rect, radius, colorStr) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>

                       this.fillRoundRect(rect.x, rect.y, rect.width, rect.height, radius, colorStr);
                   }).
                   add("Jyo.Rectangle, Number, Jyo.Color", function (rect, radius, color) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>

                       this.fillRoundRect(rect.x, rect.y, rect.width, rect.height, radius, color.toRgba());
                   }).
                   add("Number, Number, Number, Number, Number", function (x, y, width, height, radius) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>

                       this.fillRoundRect(x, y, width, height, radius, String.empty);
                   }).
                   add("Number, Number, Number, Number, Number, Jyo.Color", function (x, y, width, height, radius, color) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>

                       this.fillRoundRect(x, y, width, height, radius, color.toRgba());
                   }).
                   add("Number, Number, Number, Number, Number, String", function (x, y, width, height, radius, colorStr) {
                       /// <summary>绘制实心矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>

                       var ps = [];

                       ps.push(x, y + radius);
                       ps = ps.concat(Math.getBezierCurvePoints(x, y + height - radius, x, y + height, x + radius, y + height));
                       ps = ps.concat(Math.getBezierCurvePoints(x + width - radius, y + height, x + width, y + height, x + width, y + height - radius));
                       ps = ps.concat(Math.getBezierCurvePoints(x + width, y + radius, x + width, y, x + width - radius, y));
                       ps = ps.concat(Math.getBezierCurvePoints(x + radius, y, x, y, x, y + radius));

                       this.fillPolygon(ps, colorStr || "#000000");
                   }),
    drawRoundRect: Jyo.Overload().
                   add("Jyo.Rectangle, Number", function (rect, radius) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, String.empty, 1);
                   }).
                   add("Jyo.Rectangle, Number, Number", function (rect, radius, lineWidth) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, String.empty, lineWidth);
                   }).
                   add("Jyo.Rectangle, Number, String", function (rect, radius, colorStr) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, colorStr, 1);
                   }).
                   add("Jyo.Rectangle, Number, String, Number", function (rect, radius, colorStr, lineWidth) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, colorStr, lineWidth);
                   }).
                   add("Jyo.Rectangle, Number, Jyo.Color", function (rect, radius, color) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, color.toRgba(), 1);
                   }).
                   add("Jyo.Rectangle, Number, Jyo.Color, Number", function (rect, radius, color, lineWidth) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, color.toRgba(), lineWidth);
                   }).
                   add("Number, Number, Number, Number, Number", function (x, y, width, height, radius) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>

                       this.drawRoundRect(x, y, width, height, radius, String.empty, 1);
                   }).
                   add("Number, Number, Number, Number, Number, Number", function (x, y, width, height, radius, lineWidth) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       this.drawRoundRect(x, y, width, height, radius, String.empty, lineWidth);
                   }).
                   add("Number, Number, Number, Number, Number, Jyo.Color", function (x, y, width, height, radius, color) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>

                       this.drawRoundRect(x, y, width, height, radius, color.toRgba(), 1);
                   }).
                   add("Number, Number, Number, Number, Number, Jyo.Color, Number", function (x, y, width, height, radius, color, lineWidth) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       this.drawRoundRect(x, y, width, height, radius, color.toRgba(), lineWidth);
                   }).
                   add("Number, Number, Number, Number, Number, String", function (x, y, width, height, radius, colorStr) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>

                       this.drawRoundRect(x, y, width, height, radius, colorStr, 1);
                   }).
                   add("Number, Number, Number, Number, Number, String, Number", function (x, y, width, height, radius, colorStr, lineWidth) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       var ps = [];

                       ps.push(x, y + radius);
                       ps = ps.concat(Math.getBezierCurvePoints(x, y + height - radius, x, y + height, x + radius, y + height));
                       ps = ps.concat(Math.getBezierCurvePoints(x + width - radius, y + height, x + width, y + height, x + width, y + height - radius));
                       ps = ps.concat(Math.getBezierCurvePoints(x + width, y + radius, x + width, y, x + width - radius, y));
                       ps = ps.concat(Math.getBezierCurvePoints(x + radius, y, x, y, x, y + radius));

                       this.drawPolygon(ps, colorStr || "#000000", lineWidth);
                   }),
    drawImage: Jyo.Overload().
               add("*, Number, Number", function (element, x, y) {
                   /// <summary>绘制图象</summary>
                   /// <param name="element" type="Object">要绘制的元素</param>
                   /// <param name="x" type="Number">起始X坐标</param>
                   /// <param name="y" type="Number">起始Y坐标</param>

                   this.context.drawImage(element.object || element, x, y);
               }).
               add("*, Jyo.Rectangle", function (element, rect) {
                   /// <summary>绘制图象</summary>
                   /// <param name="element" type="Object">要绘制的元素</param>
                   /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>

                   this.drawImage(element.object || element, rect.x, rect.y, rect.width, rect.height);
               }).
               add("*, Number, Number, Number, Number", function (element, x, y, width, height) {
                   /// <summary>绘制图象</summary>
                   /// <param name="element" type="Object">要绘制的元素</param>
                   /// <param name="x" type="Number">起始X坐标</param>
                   /// <param name="y" type="Number">起始Y坐标</param>
                   /// <param name="width" type="Number">图像宽度</param>
                   /// <param name="height" type="Number">图像高度</param>

                   this.context.drawImage(element.object || element, x, y, width, height);
               }).
               add("*, Number, Number, Number, Number, Number, Number, Number, Number", function (element, x, y, width, height, cx, cy, cwidth, cheight) {
                   /// <summary>绘制图象</summary>
                   /// <param name="element" type="Object">要绘制的元素</param>
                   /// <param name="x" type="Number">起始X坐标</param>
                   /// <param name="y" type="Number">起始Y坐标</param>
                   /// <param name="width" type="Number">图像宽度</param>
                   /// <param name="height" type="Number">图像高度</param>
                   /// <param name="cx" type="Number">在原图坐标上进行剪裁的起始X坐标</param>
                   /// <param name="cy" type="Number">在原图坐标上进行剪裁的起始Y坐标</param>
                   /// <param name="cwidth" type="Number">在原图坐标上进行剪裁的图像宽度</param>
                   /// <param name="cheight" type="Number">在原图坐标上进行剪裁的图像高度</param>

                   this.context.drawImage(element.object || element, cx, cy, cwidth, cheight, x, y, width, height);
               }),
    drawText: Jyo.Overload().
                add("String, Number, Number", function (str, x, y) {
                    /// <summary>绘制文字</summary>
                    /// <param name="str" type="String">要显示的文字</param>
                    /// <param name="x" type="Number">起始X坐标</param>
                    /// <param name="y" type="Number">起始Y坐标</param>

                    this.drawText(str, x, y, String.empty, String.empty);
                }).
                add("String, Number, Number, Jyo.Color", function (str, x, y, color) {
                    /// <summary>绘制文字</summary>
                    /// <param name="str" type="String">要显示的文字</param>
                    /// <param name="x" type="Number">起始X坐标</param>
                    /// <param name="y" type="Number">起始Y坐标</param>
                    /// <param name="color" type="Jyo.Color">颜色对象</param>

                    this.drawText(str, x, y, color.toRgba(), String.empty);
                }).
                add("String, Number, Number, String", function (str, x, y, colorStr) {
                    /// <summary>绘制文字</summary>
                    /// <param name="str" type="String">要显示的文字</param>
                    /// <param name="x" type="Number">起始X坐标</param>
                    /// <param name="y" type="Number">起始Y坐标</param>
                    /// <param name="colorStr" type="String">颜色字符串值</param>

                    this.drawText(str, x, y, colorStr, String.empty);
                }).
                add("String, Number, Number, Jyo.Color, String", function (str, x, y, color, font) {
                    /// <summary>绘制文字</summary>
                    /// <param name="str" type="String">要显示的文字</param>
                    /// <param name="x" type="Number">起始X坐标</param>
                    /// <param name="y" type="Number">起始Y坐标</param>
                    /// <param name="color" type="Jyo.Color">颜色对象</param>
                    /// <param name="font" type="String">字体字符串值</param>

                    this.drawText(str, x, y, color.toRgba(), font);
                }).
                add("String, Number, Number, String, String", function (str, x, y, colorStr, font) {
                    /// <summary>绘制文字</summary>
                    /// <param name="str" type="String">要显示的文字</param>
                    /// <param name="x" type="Number">起始X坐标</param>
                    /// <param name="y" type="Number">起始Y坐标</param>
                    /// <param name="colorStr" type="String">颜色字符串值</param>
                    /// <param name="font" type="String">字体字符串值</param>

                    var ctx = this.context;
                    ctx.fillStyle = colorStr || "#000000";
                    ctx.font = font || "14px Arial";

                    var strList = str.split(/\r\n|\n|\r/ig);
                    var fontHeight = this.getTextHeight(str, ctx.font);
                    for (var i = 0; i < strList.length; i++) {
                        ctx.fillText(strList[i], x, y + fontHeight * (i + 0.8));
                    }
                }),
    drawLine: Jyo.Overload().
              add("Number, Number, Number, Number", function (x1, y1, x2, y2) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>

                  this.drawLine(x1, y1, x2, y2, String.empty, 1, String.empty);
              }).
              add("Number, Number, Number, Number, Jyo.Color", function (x1, y1, x2, y2, color) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>

                  this.drawLine(x1, y1, x2, y2, color.toRgba(), 1, String.empty);
              }).
              add("Number, Number, Number, Number, String", function (x1, y1, x2, y2, colorStr) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>

                  this.drawLine(x1, y1, x2, y2, colorStr, 1, String.empty);
              }).
              add("Number, Number, Number, Number, Jyo.Color, Number", function (x1, y1, x2, y2, color, lineWidth) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  this.drawLine(x1, y1, x2, y2, color.toRgba(), lineWidth, String.empty);
              }).
              add("Number, Number, Number, Number, String, Number", function (x1, y1, x2, y2, colorStr, lineWidth) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  this.drawLine(x1, y1, x2, y2, colorStr, lineWidth, String.empty);
              }).
              add("Number, Number, Number, Number, Jyo.Color, Number, String", function (x1, y1, x2, y2, color, lineWidth, cap) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>
                  /// <param name="cap" type="String">闭合样式</param>

                  this.drawLine(x1, y1, x2, y2, color.toRgba(), lineWidth, cap);
              }).
              add("Number, Number, Number, Number, String, Number, String", function (x1, y1, x2, y2, colorStr, lineWidth, cap) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>
                  /// <param name="cap" type="String">闭合样式</param>

                  var ctx = this.context;

                  ctx.strokeStyle = colorStr || "#000000";
                  ctx.lineWidth = lineWidth || 1.0;
                  ctx.lineCap = cap || "butt";

                  ctx.beginPath();
                  ctx.moveTo(x1, y1);
                  ctx.lineTo(x2, y2);
                  ctx.closePath();
                  ctx.stroke();
              }),
    drawPolygon: Jyo.Overload().
                 add("Array", function (list) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>

                     this.drawPolygon(list, String.empty, 1, String.empty);
                 }).
                 add("Array, Jyo.Color", function (list, color) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="color" type="Jyo.Color">颜色对象</param>

                     this.drawPolygon(list, color.toRgba(), 1, String.empty);
                 }).
                 add("Array, String", function (list, colorStr) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="colorStr" type="String">颜色字符串值</param>

                     this.drawPolygon(list, colorStr, 1, String.empty);
                 }).
                 add("Array, Jyo.Color, Number", function (list, color, lineWidth) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="color" type="Jyo.Color">颜色对象</param>
                     /// <param name="lineWidth" type="Number">线条宽度</param>

                     this.drawPolygon(list, color.toRgba(), lineWidth, String.empty);
                 }).
                 add("Array, String, Number", function (list, colorStr, lineWidth) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="colorStr" type="String">颜色字符串值</param>
                     /// <param name="lineWidth" type="Number">线条宽度</param>

                     this.drawPolygon(list, colorStr, lineWidth, String.empty);
                 }).
                 add("Array, Jyo.Color, Number, String", function (list, color, lineWidth, lineJoin) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="color" type="Jyo.Color">颜色对象</param>
                     /// <param name="lineWidth" type="Number">线条宽度</param>
                     /// <param name="lineJoin" type="String">线条闭合样式</param>

                     this.drawPolygon(list, color.toRgba(), lineWidth, lineJoin);
                 }).
                 add("Array, String, Number, String", function (list, colorStr, lineWidth, lineJoin) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="colorStr" type="String">颜色字符串值</param>
                     /// <param name="lineWidth" type="Number">线条宽度</param>
                     /// <param name="lineJoin" type="String">线条闭合样式</param>

                     if (list.length % 2 != 0) list.length = length - 1;
                     if (!list.length) return;

                     var ctx = this.context;

                     ctx.strokeStyle = colorStr || "#000000";
                     ctx.lineWidth = lineWidth || 1.0;
                     ctx.lineJoin = lineJoin || "miter";

                     ctx.beginPath();
                     ctx.moveTo(list[0], list[1]);
                     for (var i = 2, len = list.length; i < len; i += 2) ctx.lineTo(list[i], list[i + 1]);
                     ctx.closePath();
                     ctx.stroke();
                 }),
    fillPolygon: Jyo.Overload().
                 add("Array", function (list) {
                     /// <summary>绘制实心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>

                     this.fillPolygon(list, String.empty);
                 }).
                 add("Array, Jyo.Color", function (list, color) {
                     /// <summary>绘制实心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="color" type="Jyo.Color">颜色对象</param>

                     this.fillPolygon(list, color.toRgba());
                 }).
                 add("Array, String", function (list, colorStr) {
                     /// <summary>绘制实心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="colorStr" type="String">颜色字符串值</param>

                     if (list.length % 2 != 0) list.length = length - 1;
                     if (!list.length) return;

                     var ctx = this.context;

                     ctx.fillStyle = colorStr || "#000000";

                     ctx.beginPath();
                     ctx.moveTo(list[0], list[1]);
                     for (var i = 2, len = list.length; i < len; i += 2) ctx.lineTo(list[i], list[i + 1]);
                     ctx.closePath();
                     ctx.fill();
                 })
}); Jyo.Renderer.Css = function () {
    // 添加渲染元素
    this._addRenderElement("div");

    // 隐藏超出部分
    this.canvas.style.overflow = "hidden";

    this.context = {};

    // 用于开启硬件加速的样式
    this.css3d = function () {
        var element = document.createElement("div");
        if ("transform" in element.style || Jyo.prefix.lowercase + "Transform" in element.style) {
            element.style["transform"] = "translateZ(1px)";
            element.style[Jyo.prefix.lowercase + "Transform"] = "translateZ(1px)";
            if (element.style["transform"] === "translateZ(1px)" ||
                   element.style[Jyo.prefix.lowercase + "Transform"] === "translateZ(1px)") {
                return "transform: translateZ(0px);" +
                       Jyo.prefix.css + "transform: translateZ(0px);" +
                       "backface-visibility: hidden;" +
                       Jyo.prefix.css + "backface-visibility: hidden;" +
                       "perspective: 1000;" +
                       Jyo.prefix.css + "perspective: 1000;" +
                       "transform-origin: 50% 50%;" +
                       Jyo.prefix.css + "transform-origin: 50% 50%;";
            }
        } else {
            return String.empty;
        }
    }();

    // 缓存列表
    this.catchList = [];

    // 临时列表
    this.tempList = [];

    // 基础元素
    this.baseElement = document.createElement("div");
    this.baseElement.style.position = "absolute";
    this.baseElement.style["pointer-events"] = "none";
    this.baseElement.style.cssText += this.css3d;
};

Jyo.Renderer.Css.isSupport = function () {
    /// <summary>检测是否支持</summary>
    /// <returns type="Boolean"></returns>

    var element = document.createElement("div");
    return "borderRadius" in element.style;
}

Jyo.Renderer.Css.prototype = new Jyo.Object({
    mode: "Css",
    _autoSize: function (parentWidth, parentHeight) {
        /// <summary>自动缩放</summary>
        /// <param name="parentWidth" type="Number">父容器宽度</param>
        /// <param name="parentHeight" type="Number">父容器高度</param>

        var cs = this.domElement.style;
        cs.position = "relative";
        cs.width = this.width + "px";
        cs.height = this.height + "px";
        if (this.autoSizeMode == "ratio") {
            // 同比缩放设置

            // 计算缩放值
            var scaling = Math.min(parentWidth / this.width, parentHeight / this.height);
            cs.left = cs.top = "50%";
            cs.marginLeft = "-" + this.width / 2 + "px";
            cs.marginTop = "-" + (this.height * scaling / 2) + "px";
            cs[Jyo.prefix.lowercase + "Transform"] = "scale(" + scaling + "," + scaling + ")";
            cs["transform"] = "scale(" + scaling + "," + scaling + ")";
            cs[Jyo.prefix.lowercase + "TransformOrigin"] = "50% 0%";
            cs["transformOrigin"] = "50% 0%";
        }
        else if (this.autoSizeMode === "fill") {
            // 填充缩放设置

            cs.left = "0px";
            cs.top = "0px";
            cs.marginLeft = "0px";
            cs.marginTop = "0px";
            var scale = "scale(" + parentWidth / this.width + "," + parentHeight / this.height + ")";
            cs[Jyo.prefix.lowercase + "Transform"] = scale;
            cs["transform"] = scale;
            cs[Jyo.prefix.lowercase + "TransformOrigin"] = "0% 0%";
            cs["transformOrigin"] = "0% 0%";
        }
    },
    clear: Jyo.Overload().
           add(null, function () {
               /// <summary>清空画布</summary>

               return;
           }).
           add("Jyo.Color", function (color) {
               /// <summary>清空画布</summary>
               /// <param name="color" type="Jyo.Color">颜色对象</param>

               this.clear(color.toRgba());
           }).
           add("String", function (colorStr) {
               /// <summary>清空画布</summary>
               /// <param name="colorStr" type="String">颜色字符串值</param>

               this.canvas.style.backgroundColor = colorStr;
               this.canvas.innerHTML = String.empty;
           }),
    begin: function () {
        /// <summary>开始绘制</summary>

        this.tempList.clear();
    },
    end: function () {
        /// <summary>结束绘制</summary>

        var tl = this.tempList,
            cl = this.catchList;

        // 检查若有节点增删则重置画布
        if (tl.length != cl.length) {
            cl.clear();
            this.canvas.innerHTML = String.empty;
        }
        // 重新创建元素
        if (!cl.length) {
            var frag = document.createDocumentFragment();
            for (var i = tl.length; i-- ;) {
                cl.push({ element: this.baseElement.cloneNode(false), style: {} });
                frag.appendChild(cl[cl.length - 1].element);
            }
            this.canvas.appendChild(frag);
        }

        var el;
        for (var i = 0; i < cl.length; i++) {
            el = cl[i];
            // 仅更新存在差异的属性
            if (Object.keys(el.style).length != Object.keys(tl[i]).length || function () {
                for (var n in tl[i]) {
                    if (tl[i][n] != el.style[n]) return true;
            }
                return false;
            }()) {
                for (var n in tl[i]) {
                    if (n == "text") {
                        el.element.innerHTML = tl[i][n];
                        continue;
                    }
                    el.element.style[n] = tl[i][n];
                }
                el.style = tl[i];
            }
        }
    },
    fillRect: Jyo.Overload().
              add("Jyo.Rectangle", function (rect) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>

                  this.fillRect(rect.x, rect.y, rect.width, rect.height, String.empty);
              }).
              add("Number, Number, Number, Number", function (x, y, width, height) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>

                  this.fillRect(x, y, width, height, String.empty);
              }).
              add("Jyo.Rectangle, Jyo.Color", function (rect, color) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>

                  this.fillRect(rect.x, rect.y, rect.width, rect.height, color.toRgba());
              }).
              add("Number, Number, Number, Number, Jyo.Color", function (x, y, width, height, color) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>

                  this.fillRect(x, y, width, height, color.toRgba());
              }).
              add("Jyo.Rectangle, String", function (rect, colorStr) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>

                  this.fillRect(rect.x, rect.y, rect.width, rect.height, colorStr);
              }).
              add("Number, Number, Number, Number, String", function (x, y, width, height, colorStr) {
                  /// <summary>绘制实心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>

                  this.tempList.push({
                      left: x + "px",
                      top: y + "px",
                      width: width + "px",
                      height: height + "px",
                      backgroundColor: colorStr || "#000000"
                  });
              }),
    drawRect: Jyo.Overload().
              add("Jyo.Rectangle, Jyo.Color", function (rect, color) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>

                  this.drawRect(rect.x, rect.y, rect.width, rect.height, color.toRgba(), 1);
              }).
              add("Number, Number, Number, Number, Jyo.Color", function (x, y, width, height, color) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>

                  this.drawRect(x, y, width, height, color.toRgba(), 1);
              }).
              add("Jyo.Rectangle, String", function (rect, colorStr) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>

                  this.drawRect(rect.x, rect.y, rect.width, rect.height, colorStr, 1);
              }).
              add("Number, Number, Number, Number, String", function (x, y, width, height, colorStr) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>

                  this.drawRect(x, y, width, height, colorStr, 1);
              }).
              add("Jyo.Rectangle, Jyo.Color, Number", function (rect, color, lineWidth) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  this.drawRect(rect.x, rect.y, rect.width, rect.height, color.toRgba(), lineWidth);
              }).
              add("Number, Number, Number, Number, Jyo.Color, Number", function (x, y, width, height, color, lineWidth) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  this.drawRect(x, y, width, height, color.toRgba(), lineWidth);
              }).
              add("Jyo.Rectangle, String, Number", function (rect, colorStr, lineWidth) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  this.drawRect(rect.x, rect.y, rect.width, rect.height, colorStr, lineWidth);
              }).
              add("Number, Number, Number, Number, String, Number", function (x, y, width, height, colorStr, lineWidth) {
                  /// <summary>绘制空心矩形</summary>
                  /// <param name="x" type="Number">起始X坐标</param>
                  /// <param name="y" type="Number">起始Y坐标</param>
                  /// <param name="width" type="Number">矩形宽度</param>
                  /// <param name="height" type="Number">矩形高度</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  lineWidth = lineWidth || 1.0;

                  this.tempList.push({
                      left: x + "px",
                      top: y + "px",
                      width: (width - lineWidth * 2) + "px",
                      height: (height - lineWidth * 2) + "px",
                      border: "solid " + lineWidth + "px " + (colorStr || "#000000")
                  });
              }),
    fillRoundRect: Jyo.Overload().
                   add("Jyo.Rectangle, Number", function (rect, radius) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>

                       this.fillRoundRect(rect.x, rect.y, rect.width, rect.height, radius, String.empty);
                   }).
                   add("Jyo.Rectangle, Number, String", function (rect, radius, colorStr) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>

                       this.fillRoundRect(rect.x, rect.y, rect.width, rect.height, radius, colorStr);
                   }).
                   add("Jyo.Rectangle, Number, Jyo.Color", function (rect, radius, color) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>

                       this.fillRoundRect(rect.x, rect.y, rect.width, rect.height, radius, color.toRgba());
                   }).
                   add("Number, Number, Number, Number, Number", function (x, y, width, height, radius) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>

                       this.fillRoundRect(x, y, width, height, radius, String.empty);
                   }).
                   add("Number, Number, Number, Number, Number, Jyo.Color", function (x, y, width, height, radius, color) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>

                       this.fillRoundRect(x, y, width, height, radius, color.toRgba());
                   }).
                   add("Number, Number, Number, Number, Number, String", function (x, y, width, height, radius, colorStr) {
                       /// <summary>绘制实心矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>

                       this.tempList.push({
                           left: x + "px",
                           top: y + "px",
                           width: width + "px",
                           height: height + "px",
                           borderRadius: radius + "px",
                           backgroundColor: colorStr || "#000000"
                       });
                   }),
    drawRoundRect: Jyo.Overload().
                   add("Jyo.Rectangle, Number", function (rect, radius) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, String.empty, 1);
                   }).
                   add("Jyo.Rectangle, Number, Number", function (rect, radius, lineWidth) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, String.empty, lineWidth);
                   }).
                   add("Jyo.Rectangle, Number, String", function (rect, radius, colorStr) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, colorStr, 1);
                   }).
                   add("Jyo.Rectangle, Number, String, Number", function (rect, radius, colorStr, lineWidth) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, colorStr, lineWidth);
                   }).
                   add("Jyo.Rectangle, Number, Jyo.Color", function (rect, radius, color) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, color.toRgba(), 1);
                   }).
                   add("Jyo.Rectangle, Number, Jyo.Color, Number", function (rect, radius, color, lineWidth) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       this.drawRoundRect(rect.x, rect.y, rect.width, rect.height, radius, color.toRgba(), lineWidth);
                   }).
                   add("Number, Number, Number, Number, Number", function (x, y, width, height, radius) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>

                       this.drawRoundRect(x, y, width, height, radius, String.empty, 1);
                   }).
                   add("Number, Number, Number, Number, Number, Number", function (x, y, width, height, radius, lineWidth) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       this.drawRoundRect(x, y, width, height, radius, String.empty, lineWidth);
                   }).
                   add("Number, Number, Number, Number, Number, Jyo.Color", function (x, y, width, height, radius, color) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>

                       this.drawRoundRect(x, y, width, height, radius, color.toRgba(), 1);
                   }).
                   add("Number, Number, Number, Number, Number, Jyo.Color, Number", function (x, y, width, height, radius, color, lineWidth) {
                       /// <summary>绘制实心圆角矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="color" type="Jyo.Color">颜色对象</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       this.drawRoundRect(x, y, width, height, radius, color.toRgba(), lineWidth);
                   }).
                   add("Number, Number, Number, Number, Number, String", function (x, y, width, height, radius, colorStr) {
                       /// <summary>绘制实心矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>

                       this.drawRoundRect(x, y, width, height, radius, colorStr, 1);
                   }).
                   add("Number, Number, Number, Number, Number, String, Number", function (x, y, width, height, radius, colorStr, lineWidth) {
                       /// <summary>绘制实心矩形</summary>
                       /// <param name="x" type="Number">起始X坐标</param>
                       /// <param name="y" type="Number">起始Y坐标</param>
                       /// <param name="width" type="Number">矩形宽度</param>
                       /// <param name="height" type="Number">矩形高度</param>
                       /// <param name="radius" type="Number">圆角半径</param>
                       /// <param name="colorStr" type="String">颜色字符串值</param>
                       /// <param name="lineWidth" type="Number">线段宽度</param>

                       lineWidth = lineWidth || 1.0;

                       this.tempList.push({
                           left: x + "px",
                           top: y + "px",
                           width: (width - lineWidth * 2) + "px",
                           height: (height - lineWidth * 2) + "px",
                           border: "solid " + lineWidth + "px " + (colorStr || "#000000"),
                           borderRadius: radius + "px"
                       });
                   }),
    drawImage: Jyo.Overload().
               add("*, Number, Number", function (element, x, y) {
                   /// <summary>绘制图象</summary>
                   /// <param name="element" type="Object">要绘制的元素</param>
                   /// <param name="x" type="Number">起始X坐标</param>
                   /// <param name="y" type="Number">起始Y坐标</param>

                   element = element.object || element;

                   this.tempList.push({
                       left: x + "px",
                       top: y + "px",
                       width: element.width + "px",
                       height: element.height + "px",
                       backgroundImage: element.other || "url(" + element.src + ")"
                   });
               }).
               add("*, Jyo.Rectangle", function (element, rect) {
                   /// <summary>绘制图象</summary>
                   /// <param name="element" type="Object">要绘制的元素</param>
                   /// <param name="rect" type="Jyo.Rectangle">矩形对象</param>

                   element = element.object || element;

                   this.tempList.push({
                       left: rect.x + "px",
                       top: rect.y + "px",
                       width: rect.width + "px",
                       height: rect.height + "px",
                       backgroundImage: element.other || "url(" + element.src + ")",
                       backgroundSize: "100%"
                   });
               }).
               add("*, Number, Number, Number, Number", function (element, x, y, width, height) {
                   /// <summary>绘制图象</summary>
                   /// <param name="element" type="Object">要绘制的元素</param>
                   /// <param name="x" type="Number">起始X坐标</param>
                   /// <param name="y" type="Number">起始Y坐标</param>
                   /// <param name="width" type="Number">图像宽度</param>
                   /// <param name="height" type="Number">图像高度</param>

                   element = element.object || element;

                   this.tempList.push({
                       left: x + "px",
                       top: y + "px",
                       width: width + "px",
                       height: height + "px",
                       backgroundImage: element.other || "url(" + element.src + ")",
                       backgroundSize: "100%"
                   });
               }).
               add("*, Number, Number, Number, Number, Number, Number, Number, Number", function (element, x, y, width, height, cx, cy, cwidth, cheight) {
                   /// <summary>绘制图象</summary>
                   /// <param name="element" type="Object">要绘制的元素</param>
                   /// <param name="x" type="Number">起始X坐标</param>
                   /// <param name="y" type="Number">起始Y坐标</param>
                   /// <param name="width" type="Number">图像宽度</param>
                   /// <param name="height" type="Number">图像高度</param>
                   /// <param name="cx" type="Number">在原图坐标上进行剪裁的起始X坐标</param>
                   /// <param name="cy" type="Number">在原图坐标上进行剪裁的起始Y坐标</param>
                   /// <param name="cwidth" type="Number">在原图坐标上进行剪裁的图像宽度</param>
                   /// <param name="cheight" type="Number">在原图坐标上进行剪裁的图像高度</param>

                   element = element.object || element;

                   this.tempList.push({
                       left: x + "px",
                       top: y + "px",
                       width: width + "px",
                       height: height + "px",
                       backgroundRepeat: "no-repeat",
                       backgroundImage: element.other || "url(" + element.src + ")",
                       backgroundPosition: -cx + "px " + -cy + "px",
                       backgroundSize: element.width + "px " + element.height + "px"
                   });
               }),
    drawText: Jyo.Overload().
                add("String, Number, Number", function (str, x, y) {
                    /// <summary>绘制文字</summary>
                    /// <param name="str" type="String">要显示的文字</param>
                    /// <param name="x" type="Number">起始X坐标</param>
                    /// <param name="y" type="Number">起始Y坐标</param>

                    this.drawText(str, x, y, String.empty, String.empty);
                }).
                add("String, Number, Number, Jyo.Color", function (str, x, y, color) {
                    /// <summary>绘制文字</summary>
                    /// <param name="str" type="String">要显示的文字</param>
                    /// <param name="x" type="Number">起始X坐标</param>
                    /// <param name="y" type="Number">起始Y坐标</param>
                    /// <param name="color" type="Jyo.Color">颜色对象</param>

                    this.drawText(str, x, y, color.toRgba(), String.empty);
                }).
                add("String, Number, Number, String", function (str, x, y, colorStr) {
                    /// <summary>绘制文字</summary>
                    /// <param name="str" type="String">要显示的文字</param>
                    /// <param name="x" type="Number">起始X坐标</param>
                    /// <param name="y" type="Number">起始Y坐标</param>
                    /// <param name="colorStr" type="String">颜色字符串值</param>

                    this.drawText(str, x, y, colorStr, String.empty);
                }).
                add("String, Number, Number, Jyo.Color, String", function (str, x, y, color, font) {
                    /// <summary>绘制文字</summary>
                    /// <param name="str" type="String">要显示的文字</param>
                    /// <param name="x" type="Number">起始X坐标</param>
                    /// <param name="y" type="Number">起始Y坐标</param>
                    /// <param name="color" type="Jyo.Color">颜色对象</param>
                    /// <param name="font" type="String">字体字符串值</param>

                    this.drawText(str, x, y, color.toRgba(), font);
                }).
                add("String, Number, Number, String, String", function (str, x, y, colorStr, font) {
                    /// <summary>绘制文字</summary>
                    /// <param name="str" type="String">要显示的文字</param>
                    /// <param name="x" type="Number">起始X坐标</param>
                    /// <param name="y" type="Number">起始Y坐标</param>
                    /// <param name="colorStr" type="String">颜色字符串值</param>
                    /// <param name="font" type="String">字体字符串值</param>

                    this.tempList.push({
                        text: str.replace(/(\r\n|\n|\r)/ig, "<br>"),
                        left: x + "px",
                        top: y + "px",
                        font: font || "14px Arial",
                        color: colorStr || "#000000",
                        whiteSpace: "nowrap"
                    });
                }),
    drawLine: Jyo.Overload().
              add("Number, Number, Number, Number", function (x1, y1, x2, y2) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>

                  this.drawLine(x1, y1, x2, y2, String.empty, 1, String.empty);
              }).
              add("Number, Number, Number, Number, Jyo.Color", function (x1, y1, x2, y2, color) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>

                  this.drawLine(x1, y1, x2, y2, color.toRgba(), 1, String.empty);
              }).
              add("Number, Number, Number, Number, String", function (x1, y1, x2, y2, colorStr) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>

                  this.drawLine(x1, y1, x2, y2, colorStr, 1, String.empty);
              }).
              add("Number, Number, Number, Number, Jyo.Color, Number", function (x1, y1, x2, y2, color, lineWidth) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  this.drawLine(x1, y1, x2, y2, color.toRgba(), lineWidth, String.empty);
              }).
              add("Number, Number, Number, Number, String, Number", function (x1, y1, x2, y2, colorStr, lineWidth) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>

                  this.drawLine(x1, y1, x2, y2, colorStr, lineWidth, String.empty);
              }).
              add("Number, Number, Number, Number, Jyo.Color, Number, String", function (x1, y1, x2, y2, color, lineWidth, cap) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="color" type="Jyo.Color">颜色对象</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>
                  /// <param name="cap" type="String">闭合样式</param>

                  this.drawLine(x1, y1, x2, y2, color.toRgba(), lineWidth, cap);
              }).
              add("Number, Number, Number, Number, String, Number, String", function (x1, y1, x2, y2, colorStr, lineWidth, cap) {
                  /// <summary>绘制线段</summary>
                  /// <param name="x1" type="Number">起始X坐标</param>
                  /// <param name="y1" type="Number">起始Y坐标</param>
                  /// <param name="x2" type="Number">结束X坐标</param>
                  /// <param name="y2" type="Number">结束Y坐标</param>
                  /// <param name="colorStr" type="String">颜色字符串值</param>
                  /// <param name="lineWidth" type="Number">线条宽度</param>
                  /// <param name="cap" type="String">闭合样式</param>

                  var length = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
                  var angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

                  var obj = {
                      left: x1 + "px",
                      top: y1 + "px",
                      width: length + "px",
                      height: "0px",
                      borderTop: "solid " + (lineWidth || 1) + "px " + (colorStr || "#000000")
                  };
                  obj["transformOrigin"] = "0px 0px";
                  obj[Jyo.prefix.lowercase + "TransformOrigin"] = "0px 0px";
                  obj["transform"] = "rotate(" + angle + "deg)";
                  obj[Jyo.prefix.lowercase + "Transform"] = obj["transform"];

                  this.tempList.push(obj);
              }),
    drawPolygon: Jyo.Overload().
                 add("Array", function (list) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>

                     this.drawPolygon(list, String.empty, 1, String.empty);
                 }).
                 add("Array, Jyo.Color", function (list, color) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="color" type="Jyo.Color">颜色对象</param>

                     this.drawPolygon(list, color.toRgba(), 1, String.empty);
                 }).
                 add("Array, String", function (list, colorStr) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="colorStr" type="String">颜色字符串值</param>

                     this.drawPolygon(list, colorStr, 1, String.empty);
                 }).
                 add("Array, Jyo.Color, Number", function (list, color, lineWidth) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="color" type="Jyo.Color">颜色对象</param>
                     /// <param name="lineWidth" type="Number">线条宽度</param>

                     this.drawPolygon(list, color.toRgba(), lineWidth, String.empty);
                 }).
                 add("Array, String, Number", function (list, colorStr, lineWidth) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="colorStr" type="String">颜色字符串值</param>
                     /// <param name="lineWidth" type="Number">线条宽度</param>

                     this.drawPolygon(list, colorStr, lineWidth, String.empty);
                 }).
                 add("Array, Jyo.Color, Number, String", function (list, color, lineWidth, lineJoin) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="color" type="Jyo.Color">颜色对象</param>
                     /// <param name="lineWidth" type="Number">线条宽度</param>
                     /// <param name="lineJoin" type="String">线条闭合样式</param>

                     this.drawPolygon(list, color.toRgba(), lineWidth, lineJoin);
                 }).
                 add("Array, String, Number, String", function (list, colorStr, lineWidth, lineJoin) {
                     /// <summary>绘制空心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="colorStr" type="String">颜色字符串值</param>
                     /// <param name="lineWidth" type="Number">线条宽度</param>
                     /// <param name="lineJoin" type="String">线条闭合样式</param>

                     if (list.length % 2 != 0) list.length = length - 1;
                     if (!list.length) return;

                     colorStr = colorStr || "#000000";
                     lineWidth = lineWidth || 1.0;
                     lineJoin = lineJoin || "miter";

                     var prePointX = null,
                         prePointY = null;
                     for (var i = 0; i < list.length; i += 2) {
                         if (prePointX !== null && prePointY !== null) {
                             this.drawLine(prePointX, prePointY, list[i], list[i + 1], colorStr, lineWidth, lineJoin);
                         }
                         prePointX = list[i],
                         prePointY = list[i + 1];
                     }
                     if (list.length >= 2) {
                         this.drawLine(prePointX, prePointY, list[0], list[1], colorStr, lineWidth, lineJoin);
                     }
                 }),
    fillPolygon: Jyo.Overload().
                 add("Array", function (list) {
                     /// <summary>绘制实心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>

                     this.fillPolygon(list, String.empty);
                 }).
                 add("Array, Jyo.Color", function (list, color) {
                     /// <summary>绘制实心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="color" type="Jyo.Color">颜色对象</param>

                     this.fillPolygon(list, color.toRgba());
                 }).
                 add("Array, String", function (list, colorStr) {
                     /// <summary>绘制实心多边形</summary>
                     /// <param name="list" type="Array">顶点列表</param>
                     /// <param name="colorStr" type="String">颜色字符串值</param>

                     if (list.length % 2 != 0) list.length = length - 1;
                     if (!list.length) return;

                     var pl = [];
                     for (var i = 0; i < list.length; i += 2) {
                         pl.push(list[i] + "px " + list[i + 1] + "px");
                     }

                     var obj = {
                         left: 0 + "px",
                         top: 0 + "px",
                         width: this.width + "px",
                         height: this.height + "px",
                         backgroundColor: colorStr || "#000000",
                         clipPath: "polygon(" + pl.join() + ")"
                     };
                     obj[Jyo.prefix.lowercase + "ClipPath"] = obj["clipPath"];

                     obj["transform"] = obj[Jyo.prefix.lowercase + "Transform"] =
                     obj["backfaceVisibility"] = obj[Jyo.prefix.lowercase + "BackfaceVisibility"] = String.empty;

                     this.tempList.push(obj);
                 })
});