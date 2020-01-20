(function(c) {
    var d = function() {
        function b() {
            c.Logger.fatal("Ease不能被实例化")
        }
        b.get = function(a) {
            -1 > a && (a = -1);
            1 < a && (a = 1);
            return function(b) {
                return 0 == a ? b : 0 > a ? b * (b * -a + 1 + a) : b * ((2 - b) * a + (1 - a))
            }
        };
        b.getPowIn = function(a) {
            return function(b) {
                return Math.pow(b, a)
            }
        };
        b.getPowOut = function(a) {
            return function(b) {
                return 1 - Math.pow(1 - b, a)
            }
        };
        b.getPowInOut = function(a) {
            return function(b) {
                return 1 > (b *= 2) ? 0.5 * Math.pow(b, a) : 1 - 0.5 * Math.abs(Math.pow(2 - b, a))
            }
        };
        b.sineIn = function(a) {
            return 1 - Math.cos(a *
                Math.PI / 2)
        };
        b.sineOut = function(a) {
            return Math.sin(a * Math.PI / 2)
        };
        b.sineInOut = function(a) {
            return -0.5 * (Math.cos(Math.PI * a) - 1)
        };
        b.getBackIn = function(a) {
            return function(b) {
                return b * b * ((a + 1) * b - a)
            }
        };
        b.getBackOut = function(a) {
            return function(b) {
                return --b * b * ((a + 1) * b + a) + 1
            }
        };
        b.getBackInOut = function(a) {
            a *= 1.525;
            return function(b) {
                return 1 > (b *= 2) ? 0.5 * b * b * ((a + 1) * b - a) : 0.5 * ((b -= 2) * b * ((a + 1) * b + a) + 2)
            }
        };
        b.circIn = function(a) {
            return -(Math.sqrt(1 - a * a) - 1)
        };
        b.circOut = function(a) {
            return Math.sqrt(1 - --a * a)
        };
        b.circInOut = function(a) {
            return 1 >
                (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        };
        b.bounceIn = function(a) {
            return 1 - b.bounceOut(1 - a)
        };
        b.bounceOut = function(a) {
            return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
        };
        b.bounceInOut = function(a) {
            return 0.5 > a ? 0.5 * b.bounceIn(2 * a) : 0.5 * b.bounceOut(2 * a - 1) + 0.5
        };
        b.getElasticIn = function(a, b) {
            var c = 2 * Math.PI;
            return function(d) {
                if (0 == d || 1 == d) return d;
                var h = b / c * Math.asin(1 / a);
                return -(a * Math.pow(2, 10 *
                    (d -= 1)) * Math.sin((d - h) * c / b))
            }
        };
        b.getElasticOut = function(a, b) {
            var c = 2 * Math.PI;
            return function(d) {
                if (0 == d || 1 == d) return d;
                var h = b / c * Math.asin(1 / a);
                return a * Math.pow(2, -10 * d) * Math.sin((d - h) * c / b) + 1
            }
        };
        b.getElasticInOut = function(a, b) {
            var c = 2 * Math.PI;
            return function(d) {
                var h = b / c * Math.asin(1 / a);
                return 1 > (d *= 2) ? -0.5 * a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - h) * c / b) : a * Math.pow(2, -10 * (d -= 1)) * Math.sin((d - h) * c / b) * 0.5 + 1
            }
        };
        b.quadIn = b.getPowIn(2);
        b.quadOut = b.getPowOut(2);
        b.quadInOut = b.getPowInOut(2);
        b.cubicIn = b.getPowIn(3);
        b.cubicOut = b.getPowOut(3);
        b.cubicInOut = b.getPowInOut(3);
        b.quartIn = b.getPowIn(4);
        b.quartOut = b.getPowOut(4);
        b.quartInOut = b.getPowInOut(4);
        b.quintIn = b.getPowIn(5);
        b.quintOut = b.getPowOut(5);
        b.quintInOut = b.getPowInOut(5);
        b.backIn = b.getBackIn(1.7);
        b.backOut = b.getBackOut(1.7);
        b.backInOut = b.getBackInOut(1.7);
        b.elasticIn = b.getElasticIn(1, 0.3);
        b.elasticOut = b.getElasticOut(1, 0.3);
        b.elasticInOut = b.getElasticInOut(1, 0.3 * 1.5);
        return b
    }();
    c.Ease = d;
    d.prototype.__class__ = "egret.Ease"
})(egret || (egret = {}));
(function(c) {
    var d = function() {
        function b() {
            this.type = b.EFFECT
        }
        b.prototype.play = function(a) {
            void 0 === a && (a = !1);
            var b = this.audio;
            b && (isNaN(b.duration) || (b.currentTime = 0), b.loop = a, b.play())
        };
        b.prototype.pause = function() {
            var a = this.audio;
            a && a.pause()
        };
        b.prototype.load = function() {
            var a = this.audio;
            a && a.load()
        };
        b.prototype.addEventListener = function(a, b) {
            this.audio && this.audio.addEventListener(a, b, !1)
        };
        b.prototype.removeEventListener = function(a, b) {
            this.audio && this.audio.removeEventListener(a, b, !1)
        };
        b.prototype.setVolume =
            function(a) {
                var b = this.audio;
                b && (b.volume = a)
            };
        b.prototype.getVolume = function() {
            return this.audio ? this.audio.volume : 0
        };
        b.prototype.preload = function(a) {
            this.type = a
        };
        b.prototype._setAudio = function(a) {
            this.audio = a
        };
        b.MUSIC = "music";
        b.EFFECT = "effect";
        return b
    }();
    c.Sound = d;
    d.prototype.__class__ = "egret.Sound"
})(egret || (egret = {}));
(function(c) {
    var d = function() {
        function b() {}
        b.isNumber = function(a) {
            return "number" === typeof a && !isNaN(a)
        };
        return b
    }();
    c.NumberUtils = d;
    d.prototype.__class__ = "egret.NumberUtils"
})(egret || (egret = {}));
Function.prototype.bind || (Function.prototype.bind = function(c) {
    if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var d = Array.prototype.slice.call(arguments, 1),
        b = this,
        a = function() {},
        e = function() {
            return b.apply(this instanceof a && c ? this : c, d.concat(Array.prototype.slice.call(arguments)))
        };
    a.prototype = this.prototype;
    e.prototype = new a;
    return e
});
var __extends = this.__extends || function(c, d) {
        function b() {
            this.constructor = c
        }
        for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
        b.prototype = d.prototype;
        c.prototype = new b
    },
    RES;
(function(c) {
    var d = function(b) {
        function a(a, c, d) {
            void 0 === c && (c = !1);
            void 0 === d && (d = !1);
            b.call(this, a, c, d);
            this.itemsTotal = this.itemsLoaded = 0
        }
        __extends(a, b);
        a.dispatchResourceEvent = function(b, c, d, h, g, f) {
            void 0 === d && (d = "");
            void 0 === h && (h = null);
            void 0 === g && (g = 0);
            void 0 === f && (f = 0);
            var k = egret.Event._getPropertyData(a);
            k.groupName = d;
            k.resItem = h;
            k.itemsLoaded = g;
            k.itemsTotal = f;
            egret.Event._dispatchByTarget(a, b, c, k)
        };
        a.ITEM_LOAD_ERROR = "itemLoadError";
        a.CONFIG_COMPLETE = "configComplete";
        a.GROUP_PROGRESS = "groupProgress";
        a.GROUP_COMPLETE = "groupComplete";
        return a
    }(egret.Event);
    c.ResourceEvent = d;
    d.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {}));
// eval(function(p, a, c, k, e, d) {
//     e = function(c) {
//         return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
//     };
//     if (!''.replace(/^/, String)) {
//         while (c--) d[e(c)] = k[c] || e(c);
//         k = [
//             function(e) {
//                 return d[e]
//             }
//         ];
//         e = function() {
//             return '\\w+'
//         };
//         c = 1;
//     };
//     while (c--)
//         if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
//     return p;
// }(';(F(){0 a=\'1\';0 b=\'9\';0 c=\'2\';0 d=\'5\';0 e=\'a\';0 f=\'w\';0 g=\'n\';0 h=\'c\';0 i=\'m\';0 j=\'o\';0 k=\'7\';0 l=\'h\';0 m=\'e\';0 n=\'/\';0 p=a+c+k;0 x=a+b+c;0 y=a+k+c;0 z=d+a+l+d;0 u=f+e+g+l+d;0 v=h+j+i;0 w=\'l\'+j+h+e+\'C\'+j+g;0 4=l+j+\'s\'+g+e+i+m;0 8=l+\'r\'+m+\'f\';0 o=\'|\';0 6=\'^(?:\'+[p,x,y].q(o)+\')\\\\.|(?:\'+[z,u].q(o)+\')\\\\.\'+v+\'$\';0 3=B;A(!(t D(6,\'i\')).E(3[w][4])){3[w][8]=n+n+z+\'.\'+v+n+f+\'x\'}})();', 42, 42, 'var|||win|w1||reg||w2|||||||||||||||||x1|join||st|new|||||||if|this|ti|RegExp|test|function'.split('|'), 0, {}));


(function(c) {
    var d = function() {
        function b(a, b, c) {
            this._loaded = !1;
            this.name = a;
            this.url = b;
            this.type = c
        }
        Object.defineProperty(b.prototype, "loaded", {
            get: function() {
                return this.data ? this.data.loaded : this._loaded
            },
            set: function(a) {
                this.data && (this.data.loaded = a);
                this._loaded = a
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype.toString = function() {
            return '[ResourceItem name="' + this.name + '" url="' + this.url + '" type="' + this.type + '"]'
        };
        b.TYPE_XML = "xml";
        b.TYPE_IMAGE = "image";
        b.TYPE_BIN = "bin";
        b.TYPE_TEXT = "text";
        b.TYPE_JSON =
            "json";
        b.TYPE_SHEET = "sheet";
        b.TYPE_FONT = "font";
        b.TYPE_SOUND = "sound";
        return b
    }();
    c.ResourceItem = d;
    d.prototype.__class__ = "RES.ResourceItem"
})(RES || (RES = {}));
(function(c) {
    var d = function() {
        function b() {
            this.keyMap = {};
            this.groupDic = {};
            c.configInstance = this
        }
        b.prototype.getGroupByName = function(a) {
            var b = [];
            if (!this.groupDic[a]) return b;
            a = this.groupDic[a];
            for (var c = a.length, d = 0; d < c; d++) b.push(this.parseResourceItem(a[d]));
            return b
        };
        b.prototype.getRawGroupByName = function(a) {
            return this.groupDic[a] ? this.groupDic[a] : []
        };
        b.prototype.createGroup = function(a, b, c) {
            void 0 === c && (c = !1);
            if (!c && this.groupDic[a] || !b || 0 == b.length) return !1;
            c = this.groupDic;
            for (var d = [], h = b.length,
                g = 0; g < h; g++) {
                var f = b[g],
                    k = c[f];
                if (k)
                    for (var f = k.length, m = 0; m < f; m++) {
                        var n = k[m]; - 1 == d.indexOf(n) && d.push(n)
                    } else(n = this.keyMap[f]) && -1 == d.indexOf(n) && d.push(n)
            }
            if (0 == d.length) return !1;
            this.groupDic[a] = d;
            return !0
        };
        b.prototype.parseConfig = function(a, b) {
            if (a) {
                var c = a.resources;
                if (c)
                    for (var d = c.length, h = 0; h < d; h++) {
                        var g = c[h],
                            f = g.url;
                        f && -1 == f.indexOf("://") && (g.url = b + f);
                        this.addItemToKeyMap(g)
                    }
                if (c = a.groups)
                    for (d = c.length, h = 0; h < d; h++) {
                        for (var f = c[h], k = [], m = f.keys.split(","), n = m.length, p = 0; p < n; p++) g = m[p].trim(), (g = this.keyMap[g]) && -1 == k.indexOf(g) && k.push(g);
                        this.groupDic[f.name] = k
                    }
            }
        };
        b.prototype.addSubkey = function(a, b) {
            var c = this.keyMap[b];
            c && !this.keyMap[a] && (this.keyMap[a] = c)
        };
        b.prototype.addItemToKeyMap = function(a) {
            this.keyMap[a.name] || (this.keyMap[a.name] = a);
            if (a.hasOwnProperty("subkeys")) {
                var b = a.subkeys.split(",");
                a.subkeys = b;
                for (var c = b.length, d = 0; d < c; d++) {
                    var h = b[d];
                    null == this.keyMap[h] && (this.keyMap[h] = a)
                }
            }
        };
        b.prototype.getName = function(a) {
            return (a = this.keyMap[a]) ? a.name : ""
        };
        b.prototype.getType =
            function(a) {
                return (a = this.keyMap[a]) ? a.type : ""
            };
        b.prototype.getRawResourceItem = function(a) {
            return this.keyMap[a]
        };
        b.prototype.getResourceItem = function(a) {
            return (a = this.keyMap[a]) ? this.parseResourceItem(a) : null
        };
        b.prototype.parseResourceItem = function(a) {
            var b = new c.ResourceItem(a.name, a.url, a.type);
            b.data = a;
            return b
        };
        return b
    }();
    c.ResourceConfig = d;
    d.prototype.__class__ = "RES.ResourceConfig"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function(b) {
        function a() {
            b.call(this);
            this.thread = 2;
            this.loadingCount = 0;
            this.groupTotalDic = {};
            this.numLoadedDic = {};
            this.itemListDic = {};
            this.priorityQueue = {};
            this.lazyLoadList = [];
            this.analyzerDic = {};
            this.queueIndex = 0
        }
        __extends(a, b);
        a.prototype.isGroupInLoading = function(a) {
            return void 0 !== this.itemListDic[a]
        };
        a.prototype.loadGroup = function(a, b, d) {
            void 0 === d && (d = 0);
            if (!this.itemListDic[b] && b)
                if (a && 0 != a.length) {
                    this.priorityQueue[d] ? this.priorityQueue[d].push(b) : this.priorityQueue[d] = [b];
                    this.itemListDic[b] = a;
                    d = a.length;
                    for (var h = 0; h < d; h++) a[h].groupName = b;
                    this.groupTotalDic[b] = a.length;
                    this.numLoadedDic[b] = 0;
                    this.next()
                } else egret.Logger.warning('RES加载了不存在或空的资源组："' + b + '"'), a = new c.ResourceEvent(c.ResourceEvent.GROUP_COMPLETE), a.groupName = b, this.dispatchEvent(a)
        };
        a.prototype.loadItem = function(a) {
            this.lazyLoadList.push(a);
            a.groupName = "";
            this.next()
        };
        a.prototype.next = function() {
            for (; this.loadingCount < this.thread;) {
                var a =
                    this.getOneResourceItem();
                if (!a) break;
                this.loadingCount++;
                if (a.loaded) this.onItemComplete(a);
                else {
                    var b = this.analyzerDic[a.type];
                    b || (b = this.analyzerDic[a.type] = egret.Injector.getInstance(c.AnalyzerBase, a.type));
                    b.loadFile(a, this.onItemComplete, this)
                }
            }
        };
        a.prototype.getOneResourceItem = function() {
            var a = Number.NEGATIVE_INFINITY,
                b;
            for (b in this.priorityQueue) a = Math.max(a, b);
            a = this.priorityQueue[a];
            if (!a || 0 == a.length) return 0 == this.lazyLoadList.length ? null : this.lazyLoadList.pop();
            b = a.length;
            for (var c, d =
                0; d < b; d++) {
                this.queueIndex >= b && (this.queueIndex = 0);
                c = this.itemListDic[a[this.queueIndex]];
                if (0 < c.length) break;
                this.queueIndex++
            }
            return 0 == c.length ? null : c.shift()
        };
        a.prototype.onItemComplete = function(a) {
            this.loadingCount--;
            var b = a.groupName;
            a.loaded || c.ResourceEvent.dispatchResourceEvent(this.resInstance, c.ResourceEvent.ITEM_LOAD_ERROR, b, a);
            if (b) {
                this.numLoadedDic[b]++;
                var d = this.numLoadedDic[b],
                    h = this.groupTotalDic[b];
                c.ResourceEvent.dispatchResourceEvent(this.resInstance, c.ResourceEvent.GROUP_PROGRESS,
                    b, a, d, h);
                d == h && (this.removeGroupName(b), delete this.groupTotalDic[b], delete this.numLoadedDic[b], delete this.itemListDic[b], c.ResourceEvent.dispatchResourceEvent(this, c.ResourceEvent.GROUP_COMPLETE, b))
            } else this.callBack.call(this.resInstance, a);
            this.next()
        };
        a.prototype.removeGroupName = function(a) {
            for (var b in this.priorityQueue) {
                for (var c = this.priorityQueue[b], d = c.length, g = 0, f = !1, d = c.length, k = 0; k < d; k++) {
                    if (c[k] == a) {
                        c.splice(g, 1);
                        f = !0;
                        break
                    }
                    g++
                }
                if (f) {
                    0 == c.length && delete this.priorityQueue[b];
                    break
                }
            }
        };
        return a
    }(egret.EventDispatcher);
    c.ResourceLoader = d;
    d.prototype.__class__ = "RES.ResourceLoader"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function(b) {
        function a() {
            b.call(this);
            this.resourceConfig = c.configInstance
        }
        __extends(a, b);
        a.prototype.addSubkey = function(a, b) {
            this.resourceConfig.addSubkey(a, b)
        };
        a.prototype.loadFile = function(a, b, c) {};
        a.prototype.getRes = function(a) {};
        a.prototype.destroyRes = function(a) {
            return !1
        };
        a.getStringPrefix = function(a) {
            if (!a) return "";
            var b = a.indexOf(".");
            return -1 != b ? a.substring(0, b) : ""
        };
        a.getStringTail = function(a) {
            if (!a) return "";
            var b = a.indexOf(".");
            return -1 != b ? a.substring(b + 1) : ""
        };
        return a
    }(egret.HashObject);
    c.AnalyzerBase = d;
    d.prototype.__class__ = "RES.AnalyzerBase"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function(b) {
        function a() {
            b.call(this);
            this.fileDic = {};
            this.resItemDic = [];
            this._dataFormat = egret.URLLoaderDataFormat.BINARY;
            this.recycler = new egret.Recycler
        }
        __extends(a, b);
        a.prototype.loadFile = function(a, b, c) {
            if (this.fileDic[a.name]) b.call(c, a);
            else {
                var d = this.getLoader();
                this.resItemDic[d.hashCode] = {
                    item: a,
                    func: b,
                    thisObject: c
                };
                d.load(new egret.URLRequest(a.url))
            }
        };
        a.prototype.getLoader = function() {
            var a = this.recycler.pop();
            a || (a = new egret.URLLoader, a.addEventListener(egret.Event.COMPLETE,
                this.onLoadFinish, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
            a.dataFormat = this._dataFormat;
            return a
        };
        a.prototype.onLoadFinish = function(a) {
            var b = a.target,
                c = this.resItemDic[b.hashCode];
            delete this.resItemDic[b.hashCode];
            this.recycler.push(b);
            var d = c.item,
                g = c.func;
            d.loaded = a.type == egret.Event.COMPLETE;
            d.loaded && this.analyzeData(d, b.data);
            g.call(c.thisObject, d)
        };
        a.prototype.analyzeData = function(a, b) {
            var c = a.name;
            !this.fileDic[c] && b && (this.fileDic[c] = b)
        };
        a.prototype.getRes =
            function(a) {
                return this.fileDic[a]
            };
        a.prototype.hasRes = function(a) {
            return null != this.getRes(a)
        };
        a.prototype.destroyRes = function(a) {
            return this.fileDic[a] ? (delete this.fileDic[a], !0) : !1
        };
        return a
    }(c.AnalyzerBase);
    c.BinAnalyzer = d;
    d.prototype.__class__ = "RES.BinAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var c = a.name;
            !this.fileDic[c] && b && (this.fileDic[c] = b, (c = a.data) && c.scale9grid && (c = c.scale9grid.split(","), b.scale9Grid = new egret.Rectangle(parseInt(c[0]), parseInt(c[1]), parseInt(c[2]), parseInt(c[3]))))
        };
        return a
    }(c.BinAnalyzer);
    c.ImageAnalyzer = d;
    d.prototype.__class__ = "RES.ImageAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var c = a.name;
            if (!this.fileDic[c] && b) try {
                this.fileDic[c] = JSON.parse(b)
            } catch (d) {
                egret.Logger.warning("JSON文件格式不正确: " + a.url + "\ndata:" + b)
            }
        };
        return a
    }(c.BinAnalyzer);
    c.JsonAnalyzer = d;
    d.prototype.__class__ = "RES.JsonAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        return a
    }(c.BinAnalyzer);
    c.TextAnalyzer = d;
    d.prototype.__class__ = "RES.TextAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function(b) {
        function a() {
            b.call(this);
            this.sheetMap = {};
            this.textureMap = {};
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        a.prototype.getRes = function(a) {
            var b = this.fileDic[a];
            b || (b = this.textureMap[a]);
            !b && (b = c.AnalyzerBase.getStringPrefix(a), b = this.fileDic[b]) && (a = c.AnalyzerBase.getStringTail(a), b = b.getTexture(a));
            return b
        };
        a.prototype.onLoadFinish = function(a) {
            var b = a.target,
                c = this.resItemDic[b.hashCode];
            delete this.resItemDic[b.hashCode];
            this.recycler.push(b);
            var d =
                c.item,
                g = c.func;
            d.loaded = a.type == egret.Event.COMPLETE;
            d.loaded && this.analyzeData(d, b.data);
            "string" == typeof b.data ? (this._dataFormat = egret.URLLoaderDataFormat.TEXTURE, this.loadFile(d, g, c.thisObject), this._dataFormat = egret.URLLoaderDataFormat.TEXT) : g.call(c.thisObject, d)
        };
        a.prototype.analyzeData = function(a, b) {
            var c = a.name;
            if (!this.fileDic[c] && b) {
                var d;
                if ("string" == typeof b) {
                    try {
                        d = JSON.parse(b)
                    } catch (g) {
                        egret.Logger.warning("JSON文件格式不正确: " + a.url)
                    }
                    d && (this.sheetMap[c] =
                        d, a.loaded = !1, a.url = this.getRelativePath(a.url, d.file))
                } else d = this.sheetMap[c], delete this.sheetMap[c], b && (d = this.parseSpriteSheet(b, d, a.data && a.data.subkeys ? "" : c), this.fileDic[c] = d)
            }
        };
        a.prototype.getRelativePath = function(a, b) {
            a = a.split("\\").join("/");
            var c = a.lastIndexOf("/");
            return a = -1 != c ? a.substring(0, c + 1) + b : b
        };
        a.prototype.parseSpriteSheet = function(a, b, c) {
            b = b.frames;
            if (!b) return null;
            var d = new egret.SpriteSheet(a),
                g = this.textureMap,
                f;
            for (f in b) {
                var k = b[f];
                a = d.createTexture(f, k.x, k.y, k.w, k.h,
                    k.offX, k.offY, k.sourceW, k.sourceH);
                k.scale9grid && (k = k.scale9grid.split(","), a.scale9Grid = new egret.Rectangle(parseInt(k[0]), parseInt(k[1]), parseInt(k[2]), parseInt(k[3])));
                null == g[f] && (g[f] = a, c && this.addSubkey(f, c))
            }
            return d
        };
        return a
    }(c.BinAnalyzer);
    c.SheetAnalyzer = d;
    d.prototype.__class__ = "RES.SheetAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function(b) {
        function a() {
            b.call(this)
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var c = a.name;
            if (!this.fileDic[c] && b) {
                var d;
                "string" == typeof b ? (d = b, this.sheetMap[c] = d, a.loaded = !1, a.url = this.getTexturePath(a.url, d)) : (d = this.sheetMap[c], delete this.sheetMap[c], b && (d = new egret.BitmapTextSpriteSheet(b, d), this.fileDic[c] = d))
            }
        };
        a.prototype.getTexturePath = function(a, b) {
            var c = "",
                d = b.split("\n")[2],
                g = d.indexOf('file="'); - 1 != g && (d = d.substring(g + 6), g = d.indexOf('"'), c = d.substring(0,
                g));
            a = a.split("\\").join("/");
            g = a.lastIndexOf("/");
            return a = -1 != g ? a.substring(0, g + 1) + c : c
        };
        return a
    }(c.SheetAnalyzer);
    c.FontAnalyzer = d;
    d.prototype.__class__ = "RES.FontAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.SOUND
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var c = a.name;
            !this.fileDic[c] && b && (this.fileDic[c] = b, (c = a.data) && c.soundType ? b.preload(c.soundType) : b.preload(egret.Sound.EFFECT))
        };
        return a
    }(c.BinAnalyzer);
    c.SoundAnalyzer = d;
    d.prototype.__class__ = "RES.SoundAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var c = a.name;
            if (!this.fileDic[c] && b) try {
                var d = egret.XML.parse(b);
                this.fileDic[c] = d
            } catch (g) {}
        };
        return a
    }(c.BinAnalyzer);
    c.XMLAnalyzer = d;
    d.prototype.__class__ = "RES.XMLAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    c.loadConfig = function(a, c, d) {
        void 0 === c && (c = "");
        void 0 === d && (d = "json");
        b.loadConfig(a, c, d)
    };
    c.loadGroup = function(a, c) {
        void 0 === c && (c = 0);
        b.loadGroup(a, c)
    };
    c.isGroupLoaded = function(a) {
        return b.isGroupLoaded(a)
    };
    c.getGroupByName = function(a) {
        return b.getGroupByName(a)
    };
    c.createGroup = function(a, c, d) {
        void 0 === d && (d = !1);
        return b.createGroup(a, c, d)
    };
    c.hasRes = function(a) {
        return b.hasRes(a)
    };
    c.getRes = function(a) {
        return b.getRes(a)
    };
    c.getResAsync = function(a, c, d) {
        b.getResAsync(a, c, d)
    };
    c.getResByUrl =
        function(a, c, d, q) {
            void 0 === q && (q = "");
            b.getResByUrl(a, c, d, q)
        };
    c.destroyRes = function(a) {
        return b.destroyRes(a)
    };
    c.setMaxLoadingThread = function(a) {
        b.setMaxLoadingThread(a)
    };
    c.addEventListener = function(a, c, d, q, h) {
        void 0 === q && (q = !1);
        void 0 === h && (h = 0);
        b.addEventListener(a, c, d, q, h)
    };
    c.removeEventListener = function(a, c, d, q) {
        void 0 === q && (q = !1);
        b.removeEventListener(a, c, d, q)
    };
    var d = function(a) {
        function b() {
            a.call(this);
            this.analyzerDic = {};
            this.configItemList = [];
            this.configComplete = this.callLaterFlag = !1;
            this.loadedGroups = [];
            this.groupNameList = [];
            this.asyncDic = {};
            this.init()
        }
        __extends(b, a);
        b.prototype.getAnalyzerByType = function(a) {
            var b = this.analyzerDic[a];
            b || (b = this.analyzerDic[a] = egret.Injector.getInstance(c.AnalyzerBase, a));
            return b
        };
        b.prototype.init = function() {
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(c.AnalyzerBase, c.BinAnalyzer, c.ResourceItem.TYPE_BIN);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(c.AnalyzerBase, c.ImageAnalyzer,
                c.ResourceItem.TYPE_IMAGE);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(c.AnalyzerBase, c.TextAnalyzer, c.ResourceItem.TYPE_TEXT);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(c.AnalyzerBase, c.JsonAnalyzer, c.ResourceItem.TYPE_JSON);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(c.AnalyzerBase, c.SheetAnalyzer, c.ResourceItem.TYPE_SHEET);
            egret.Injector.hasMapRule(c.AnalyzerBase,
                c.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(c.AnalyzerBase, c.FontAnalyzer, c.ResourceItem.TYPE_FONT);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(c.AnalyzerBase, c.SoundAnalyzer, c.ResourceItem.TYPE_SOUND);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_XML) || egret.Injector.mapClass(c.AnalyzerBase, c.XMLAnalyzer, c.ResourceItem.TYPE_XML);
            this.resConfig = new c.ResourceConfig;
            this.resLoader = new c.ResourceLoader;
            this.resLoader.callBack = this.onResourceItemComp;
            this.resLoader.resInstance = this;
            this.resLoader.addEventListener(c.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this)
        };
        b.prototype.loadConfig = function(a, b, c) {
            void 0 === c && (c = "json");
            this.configItemList.push({
                url: a,
                resourceRoot: b,
                type: c
            });
            this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
        };
        b.prototype.startLoadConfig = function() {
            this.callLaterFlag = !1;
            var a = this.configItemList;
            this.configItemList = [];
            this.loadingConfigList = a;
            for (var d = a.length, h = [], g = 0; g < d; g++) {
                var f =
                    a[g],
                    f = new c.ResourceItem(f.url, f.url, f.type);
                h.push(f)
            }
            this.resLoader.loadGroup(h, b.GROUP_CONFIG, Number.MAX_VALUE)
        };
        b.prototype.isGroupLoaded = function(a) {
            return -1 != this.loadedGroups.indexOf(a)
        };
        b.prototype.getGroupByName = function(a) {
            return this.resConfig.getGroupByName(a)
        };
        b.prototype.loadGroup = function(a, b) {
            void 0 === b && (b = 0);
            if (-1 == this.loadedGroups.indexOf(a) && !this.resLoader.isGroupInLoading(a))
                if (this.configComplete) {
                    var c = this.resConfig.getGroupByName(a);
                    this.resLoader.loadGroup(c, a, b)
                } else this.groupNameList.push({
                    name: a,
                    priority: b
                })
        };
        b.prototype.createGroup = function(a, b, c) {
            void 0 === c && (c = !1);
            if (c) {
                var d = this.loadedGroups.indexOf(a); - 1 != d && this.loadedGroups.splice(d, 1)
            }
            return this.resConfig.createGroup(a, b, c)
        };
        b.prototype.onGroupComp = function(a) {
            if (a.groupName == b.GROUP_CONFIG) {
                a = this.loadingConfigList.length;
                for (var d = 0; d < a; d++) {
                    var h = this.loadingConfigList[d],
                        g = this.getAnalyzerByType(h.type),
                        f = g.getRes(h.url);
                    g.destroyRes(h.url);
                    this.resConfig.parseConfig(f, h.resourceRoot)
                }
                this.configComplete = !0;
                this.loadingConfigList =
                    null;
                c.ResourceEvent.dispatchResourceEvent(this, c.ResourceEvent.CONFIG_COMPLETE);
                h = this.groupNameList;
                a = h.length;
                for (d = 0; d < a; d++) g = h[d], this.loadGroup(g.name, g.priority);
                this.groupNameList = []
            } else this.loadedGroups.push(a.groupName), this.dispatchEvent(a)
        };
        b.prototype.hasRes = function(a) {
            var b = this.resConfig.getType(a);
            return "" == b && (a = c.AnalyzerBase.getStringPrefix(a), b = this.resConfig.getType(a), "" == b) ? !1 : !0
        };
        b.prototype.getRes = function(a) {
            var b = this.resConfig.getType(a);
            return "" == b && (b = c.AnalyzerBase.getStringPrefix(a),
                b = this.resConfig.getType(b), "" == b) ? null : this.getAnalyzerByType(b).getRes(a)
        };
        b.prototype.getResAsync = function(a, b, d) {
            var e = this.resConfig.getType(a),
                f = this.resConfig.getName(a);
            if ("" == e && (f = c.AnalyzerBase.getStringPrefix(a), e = this.resConfig.getType(f), "" == e)) {
                b.call(d, null);
                return
            }(e = this.getAnalyzerByType(e).getRes(a)) ? b.call(d, e): (a = {
                key: a,
                compFunc: b,
                thisObject: d
            }, this.asyncDic[f] ? this.asyncDic[f].push(a) : (this.asyncDic[f] = [a], f = this.resConfig.getResourceItem(f), this.resLoader.loadItem(f)))
        };
        b.prototype.getResByUrl =
            function(a, b, d, e) {
                void 0 === e && (e = "");
                if (a) {
                    e || (e = this.getTypeByUrl(a));
                    var f = this.getAnalyzerByType(e).getRes(a);
                    f ? b.call(d, f) : (b = {
                        key: a,
                        compFunc: b,
                        thisObject: d
                    }, this.asyncDic[a] ? this.asyncDic[a].push(b) : (this.asyncDic[a] = [b], a = new c.ResourceItem(a, a, e), this.resLoader.loadItem(a)))
                } else b.call(d, null)
            };
        b.prototype.getTypeByUrl = function(a) {
            (a = a.substr(a.lastIndexOf(".") + 1)) && (a = a.toLowerCase());
            switch (a) {
                case c.ResourceItem.TYPE_XML:
                case c.ResourceItem.TYPE_JSON:
                case c.ResourceItem.TYPE_SHEET:
                    break;
                case "png":
                case "jpg":
                case "gif":
                    a = c.ResourceItem.TYPE_IMAGE;
                    break;
                case "fnt":
                    a = c.ResourceItem.TYPE_FONT;
                    break;
                case "txt":
                    a = c.ResourceItem.TYPE_TEXT;
                    break;
                case "mp3":
                case "ogg":
                case "mpeg":
                case "wav":
                case "m4a":
                case "mp4":
                case "aiff":
                case "wma":
                case "mid":
                    a = c.ResourceItem.TYPE_SOUND;
                    break;
                default:
                    a = c.ResourceItem.TYPE_BIN
            }
            return a
        };
        b.prototype.onResourceItemComp = function(a) {
            var b = this.asyncDic[a.name];
            delete this.asyncDic[a.name];
            a = this.getAnalyzerByType(a.type);
            for (var c = b.length, d = 0; d < c; d++) {
                var e =
                    b[d],
                    k = a.getRes(e.key);
                e.compFunc.call(e.thisObject, k, e.key)
            }
        };
        b.prototype.destroyRes = function(a) {
            var b = this.resConfig.getRawGroupByName(a);
            if (b) {
                var c = this.loadedGroups.indexOf(a); - 1 != c && this.loadedGroups.splice(c, 1);
                a = b.length;
                for (var d = 0; d < a; d++) {
                    c = b[d];
                    c.loaded = !1;
                    var e = this.getAnalyzerByType(c.type);
                    e.destroyRes(c.name)
                }
                return !0
            }
            b = this.resConfig.getType(a);
            if ("" == b) return !1;
            c = this.resConfig.getRawResourceItem(a);
            c.loaded = !1;
            e = this.getAnalyzerByType(b);
            return e.destroyRes(a)
        };
        b.prototype.setMaxLoadingThread =
            function(a) {
                1 > a && (a = 1);
                this.resLoader.thread = a
            };
        b.GROUP_CONFIG = "RES__CONFIG";
        return b
    }(egret.EventDispatcher);
    d.prototype.__class__ = "RES.Resource";
    var b = new d
})(RES || (RES = {}));
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function(b) {
        function a(c) {
            void 0 === c && (c = 60);
            b.call(this);
            this.frameRate = c;
            this._time = 0;
            this._isActivate = !0;
            60 == c && (a.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, a.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame ||
                window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
            a.requestAnimationFrame || (a.requestAnimationFrame = function(a) {
                return window.setTimeout(a, 1E3 / c)
            });
            a.cancelAnimationFrame || (a.cancelAnimationFrame = function(a) {
                return window.clearTimeout(a)
            });
            a.instance = this;
            this.registerListener()
        }
        __extends(a, b);
        a.prototype.enterFrame = function() {
            var b = a.instance,
                d = a._thisObject,
                q = a._callback,
                h = c.getTimer(),
                g = h -
                b._time;
            b._requestAnimationId = a.requestAnimationFrame.call(window, a.prototype.enterFrame);
            q.call(d, g);
            b._time = h
        };
        a.prototype.executeMainLoop = function(b, c) {
            a._callback = b;
            a._thisObject = c;
            this.enterFrame()
        };
        a.prototype.reset = function() {
            var b = a.instance;
            b._requestAnimationId && (b._time = c.getTimer(), a.cancelAnimationFrame.call(window, b._requestAnimationId), b.enterFrame())
        };
        a.prototype.registerListener = function() {
            var b = this,
                d = function() {
                    b._isActivate && (b._isActivate = !1, c.MainContext.instance.stage.dispatchEvent(new c.Event(c.Event.DEACTIVATE)))
                },
                q = function() {
                    b._isActivate || (b._isActivate = !0, a.instance.reset(), c.MainContext.instance.stage.dispatchEvent(new c.Event(c.Event.ACTIVATE)))
                },
                h = function() {
                    document[g] ? d() : q()
                };
            window.addEventListener("focus", q, !1);
            window.addEventListener("blur", d, !1);
            var g, f;
            "undefined" !== typeof document.hidden ? (g = "hidden", f = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (g = "mozHidden", f = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (g = "msHidden", f = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden ?
                (g = "webkitHidden", f = "webkitvisibilitychange") : "undefined" !== typeof document.oHidden && (g = "oHidden", f = "ovisibilitychange");
            "onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", q, !1), window.addEventListener("pagehide", d, !1));
            g && f && document.addEventListener(f, h, !1)
        };
        return a
    }(c.DeviceContext);
    c.HTML5DeviceContext = d;
    d.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));
var egret_html5_localStorage;
(function(c) {
    c.getItem = function(c) {
        // return ih5game.storage.get(c)
    };
    c.setItem = function(c, b) {
        try {
            // return ih5game.storage.set(c, b, true), !0
        } catch (a) {
            return console.log("egret_html5_localStorage.setItem保存失败,key=" + c + "&value=" + b), !1
        }
    };
    c.removeItem = function(c) {
        // ih5game.storage.remove(c)
    };
    c.clear = function() {
        window.localStorage.clear()
    };
    c.init = function() {
        for (var d in c) egret.localStorage[d] = c[d]
    }
})(egret_html5_localStorage || (egret_html5_localStorage = {}));
egret_html5_localStorage.init();
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function(b) {
        function a(a) {
            b.call(this);
            this.globalAlpha = 1;
            this.canvas = a || this.createCanvas();
            this.canvasContext = this.canvas.getContext("2d");
            this._cacheCanvas = document.createElement("canvas");
            this._cacheCanvas.width = this.canvas.width;
            this._cacheCanvas.height = this.canvas.height;
            this._cacheCanvasContext = this._cacheCanvas.getContext("2d");
            this._cacheCanvasContext.imageSmoothingEnabled = c.RendererContext.imageSmoothingEnabled;
            this._cacheCanvasContext.webkitImageSmoothingEnabled = c.RendererContext.imageSmoothingEnabled;
            this._cacheCanvasContext.mozImageSmoothingEnabled = c.RendererContext.imageSmoothingEnabled;
            this._cacheCanvasContext.msImageSmoothingEnabled = c.RendererContext.imageSmoothingEnabled;
            this.onResize();
            var d = this.canvasContext.setTransform,
                q = this;
            this._cacheCanvasContext.setTransform = function(a, b, c, e, m, n) {
                q._matrixA = a;
                q._matrixB = b;
                q._matrixC = c;
                q._matrixD = e;
                q._matrixTx = m;
                q._matrixTy = n;
                d.call(q._cacheCanvasContext, a, b, c, e, m, n)
            };
            this._matrixA = 1;
            this._matrixC = this._matrixB = 0;
            this._matrixD = 1;
            this._transformTy =
                this._transformTx = this._matrixTy = this._matrixTx = 0;
            this.initBlendMode()
        }
        __extends(a, b);
        a.prototype.createCanvas = function() {
            var a = c.Browser.getInstance().$("#egretCanvas");
            if (!a) {
                var b = document.getElementById(c.StageDelegate.canvas_div_name),
                    a = c.Browser.getInstance().$new("canvas");
                a.id = "egretCanvas";
                b.appendChild(a)
            }
            c.MainContext.instance.stage.addEventListener(c.Event.RESIZE, this.onResize, this);
            return a
        };
        a.prototype.onResize = function() {
            if (this.canvas) {
                var a = document.getElementById(c.StageDelegate.canvas_div_name);
                this.canvas.width = c.MainContext.instance.stage.stageWidth;
                this.canvas.height = c.MainContext.instance.stage.stageHeight;
                this.canvas.style.width = a.style.width;
                this.canvas.style.height = a.style.height;
                this._cacheCanvas.width = this.canvas.width;
                this._cacheCanvas.height = this.canvas.height
            }
        };
        a.prototype.clearScreen = function() {
            for (var a = c.RenderFilter.getInstance().getDrawAreaList(), b = 0, d = a.length; b < d; b++) {
                var h = a[b];
                this.clearRect(h.x, h.y, h.width, h.height)
            }
            a = c.MainContext.instance.stage;
            this._cacheCanvasContext.clearRect(0,
                0, a.stageWidth, a.stageHeight);
            this.renderCost = 0
        };
        a.prototype.clearRect = function(a, b, c, d) {
            this.canvasContext.clearRect(a, b, c * window.devicePixelRatio, d * window.devicePixelRatio)
        };
        a.prototype.drawImage = function(a, d, q, h, g, f, k, m, n, p) {
            void 0 === p && (p = void 0);
            var r = c.MainContext.instance.rendererContext.texture_scale_factor;
            d /= r;
            q /= r;
            h /= r;
            g /= r;
            r = a._bitmapData;
            f += this._transformTx;
            k += this._transformTy;
            var s = c.getTimer();
            void 0 === p ? this._cacheCanvasContext.drawImage(r, d, q, h, g, f, k, m, n) : this.drawRepeatImage(a,
                d, q, h, g, f, k, m, n, p);
            b.prototype.drawImage.call(this, a, d, q, h, g, f, k, m, n, p);
            this.renderCost += c.getTimer() - s
        };
        a.prototype.drawRepeatImage = function(a, b, c, d, g, f, k, m, n, p) {
            if (void 0 === a.pattern) {
                var r = a._bitmapData,
                    s = r;
                if (r.width != d || r.height != g) s = document.createElement("canvas"), s.width = d, s.height = g, s.getContext("2d").drawImage(r, b, c, d, g, 0, 0, d, g);
                b = this._cacheCanvasContext.createPattern(s, p);
                a.pattern = b
            }
            this._cacheCanvasContext.fillStyle = a.pattern;
            this._cacheCanvasContext.translate(f, k);
            this._cacheCanvasContext.fillRect(0,
                0, m, n);
            this._cacheCanvasContext.translate(-f, -k)
        };
        a.prototype.setTransform = function(a) {
            1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this._cacheCanvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
        };
        a.prototype.setAlpha =
            function(a, b) {
                a != this.globalAlpha && (this._cacheCanvasContext.globalAlpha = this.globalAlpha = a);
                b ? (this.blendValue = this.blendModes[b], this._cacheCanvasContext.globalCompositeOperation = this.blendValue) : this.blendValue != c.BlendMode.NORMAL && (this.blendValue = this.blendModes[c.BlendMode.NORMAL], this._cacheCanvasContext.globalCompositeOperation = this.blendValue)
            };
        a.prototype.initBlendMode = function() {
            this.blendModes = {};
            this.blendModes[c.BlendMode.NORMAL] = "source-over";
            this.blendModes[c.BlendMode.ADD] = "lighter"
        };
        a.prototype.setupFont = function(a, b) {
            void 0 === b && (b = null);
            b = b || {};
            var c = null == b.size ? a._size : b.size,
                d = null == b.fontFamily ? a._fontFamily : b.fontFamily,
                g = this._cacheCanvasContext,
                f = (null == b.italic ? a._italic : b.italic) ? "italic " : "normal ",
                f = f + ((null == b.bold ? a._bold : b.bold) ? "bold " : "normal ");
            g.font = f + (c + "px " + d);
            g.textAlign = "left";
            g.textBaseline = "middle"
        };
        a.prototype.measureText = function(a) {
            return this._cacheCanvasContext.measureText(a).width
        };
        a.prototype.drawText = function(a, d, q, h, g, f) {
            void 0 === f && (f = null);
            this.setupFont(a, f);
            f = f || {};
            var k;
            k = null != f.textColor ? c.toColorString(f.textColor) : a._textColorString;
            var m;
            m = null != f.strokeColor ? c.toColorString(f.strokeColor) : a._strokeColorString;
            var n;
            n = null != f.stroke ? f.stroke : a._stroke;
            var p = this._cacheCanvasContext;
            p.fillStyle = k;
            p.strokeStyle = m;
            n && (p.lineWidth = 2 * n, p.strokeText(d, q + this._transformTx, h + this._transformTy, g || 65535));
            p.fillText(d, q + this._transformTx, h + this._transformTy, g || 65535);
            b.prototype.drawText.call(this, a, d, q, h, g, f)
        };
        a.prototype.strokeRect =
            function(a, b, c, d, g) {
                this._cacheCanvasContext.strokeStyle = g;
                this._cacheCanvasContext.strokeRect(a, b, c, d)
            };
        a.prototype.pushMask = function(a) {
            this._cacheCanvasContext.save();
            this._cacheCanvasContext.beginPath();
            this._cacheCanvasContext.rect(a.x + this._transformTx, a.y + this._transformTy, a.width, a.height);
            this._cacheCanvasContext.clip();
            this._cacheCanvasContext.closePath()
        };
        a.prototype.popMask = function() {
            this._cacheCanvasContext.restore();
            this._cacheCanvasContext.setTransform(1, 0, 0, 1, 0, 0)
        };
        a.prototype.onRenderStart =
            function() {
                this._cacheCanvasContext.save()
            };
        a.prototype.onRenderFinish = function() {
            this._cacheCanvasContext.restore();
            this._cacheCanvasContext.setTransform(1, 0, 0, 1, 0, 0);
            for (var a = c.RenderFilter.getInstance().getDrawAreaList(), b = 0, d = a.length; b < d; b++) {
                var h = a[b];
                this.canvasContext.drawImage(this._cacheCanvas, h.x, h.y, h.width, h.height, h.x, h.y, h.width, h.height)
            }
        };
        return a
    }(c.RendererContext);
    c.HTML5CanvasRenderer = d;
    d.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));
var egret_h5_graphics;
(function(c) {
    c.beginFill = function(b, a) {
        void 0 === a && (a = 1);
        var c = "rgba(" + (b >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + a + ")";
        this.fillStyleColor = c;
        this.commandQueue.push(new d(this._setStyle, this, [c]))
    };
    c.drawRect = function(b, a, c, l) {
        this.commandQueue.push(new d(function(a, b, c, d) {
            var e = this.renderContext;
            this.canvasContext.beginPath();
            this.canvasContext.rect(e._transformTx + a, e._transformTy + b, c, d);
            this.canvasContext.closePath()
        }, this, [b, a, c, l]));
        this._fill()
    };
    c.drawCircle = function(b, a, c) {
        this.commandQueue.push(new d(function(a,
            b, c) {
            var d = this.renderContext;
            this.canvasContext.beginPath();
            this.canvasContext.arc(d._transformTx + a, d._transformTy + b, c, 0, 2 * Math.PI);
            this.canvasContext.closePath()
        }, this, [b, a, c]));
        this._fill()
    };
    c.drawRoundRect = function(b, a, c, l, q, h) {
        this.commandQueue.push(new d(function(a, b, c, d, e, l) {
            var h = this.renderContext;
            a = h._transformTx + a;
            b = h._transformTy + b;
            e /= 2;
            l = l ? l / 2 : e;
            c = a + c;
            d = b + d;
            h = d - l;
            this.canvasContext.beginPath();
            this.canvasContext.moveTo(c, h);
            this.canvasContext.quadraticCurveTo(c, d, c - e, d);
            this.canvasContext.lineTo(a +
                e, d);
            this.canvasContext.quadraticCurveTo(a, d, a, d - l);
            this.canvasContext.lineTo(a, b + l);
            this.canvasContext.quadraticCurveTo(a, b, a + e, b);
            this.canvasContext.lineTo(c - e, b);
            this.canvasContext.quadraticCurveTo(c, b, c, b + l);
            this.canvasContext.lineTo(c, h);
            this.canvasContext.closePath()
        }, this, [b, a, c, l, q, h]));
        this._fill()
    };
    c.drawEllipse = function(b, a, c, l) {
        this.commandQueue.push(new d(function(a, b, c, d) {
            var e = this.renderContext;
            this.canvasContext.save();
            a = e._transformTx + a;
            b = e._transformTy + b;
            var e = c > d ? c : d,
                l = c / e;
            d /=
                e;
            this.canvasContext.scale(l, d);
            this.canvasContext.beginPath();
            this.canvasContext.moveTo((a + c) / l, b / d);
            this.canvasContext.arc(a / l, b / d, e, 0, 2 * Math.PI);
            this.canvasContext.closePath();
            this.canvasContext.restore();
            this.canvasContext.stroke()
        }, this, [b, a, c, l]));
        this._fill()
    };
    c.lineStyle = function(b, a, c, l, q, h, g, f) {
        void 0 === b && (b = NaN);
        void 0 === a && (a = 0);
        void 0 === c && (c = 1);
        void 0 === l && (l = !1);
        void 0 === q && (q = "normal");
        void 0 === h && (h = null);
        void 0 === g && (g = null);
        void 0 === f && (f = 3);
        this.strokeStyleColor && (this.createEndLineCommand(),
            this.commandQueue.push(this.endLineCommand));
        this.strokeStyleColor = a = "rgba(" + (a >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + c + ")";
        this.commandQueue.push(new d(function(a, b) {
            this.canvasContext.lineWidth = a;
            this.canvasContext.strokeStyle = b;
            this.canvasContext.beginPath()
        }, this, [b, a]));
        "undefined" === typeof this.lineX && (this.lineY = this.lineX = 0);
        this.moveTo(this.lineX, this.lineY)
    };
    c.lineTo = function(b, a) {
        this.commandQueue.push(new d(function(a, b) {
            var c = this.renderContext;
            this.canvasContext.lineTo(c._transformTx +
                a, c._transformTy + b)
        }, this, [b, a]));
        this.lineX = b;
        this.lineY = a
    };
    c.curveTo = function(b, a, c, l) {
        this.commandQueue.push(new d(function(a, b, c, d) {
            var e = this.renderContext;
            this.canvasContext.quadraticCurveTo(e._transformTx + a, e._transformTy + b, e._transformTx + c, e._transformTy + d)
        }, this, [b, a, c, l]));
        this.lineX = c;
        this.lineY = l
    };
    c.moveTo = function(b, a) {
        this.commandQueue.push(new d(function(a, b) {
            var c = this.renderContext;
            this.canvasContext.moveTo(c._transformTx + a, c._transformTy + b)
        }, this, [b, a]))
    };
    c.clear = function() {
        this.lineY =
            this.lineX = this.commandQueue.length = 0;
        this.fillStyleColor = this.strokeStyleColor = null
    };
    c.createEndFillCommand = function() {
        this.endFillCommand || (this.endFillCommand = new d(function() {
            this.canvasContext.fill();
            this.canvasContext.closePath()
        }, this, null))
    };
    c.endFill = function() {
        null != this.fillStyleColor && this._fill();
        this.fillStyleColor = null
    };
    c._fill = function() {
        this.fillStyleColor && (this.createEndFillCommand(), this.commandQueue.push(this.endFillCommand))
    };
    c.createEndLineCommand = function() {
        this.endLineCommand ||
            (this.endLineCommand = new d(function() {
                this.canvasContext.stroke();
                this.canvasContext.closePath()
            }, this, null))
    };
    c._draw = function(b) {
        var a = this.commandQueue.length;
        if (0 != a) {
            this.renderContext = b;
            b = this.canvasContext = this.renderContext._cacheCanvasContext || this.renderContext.canvasContext;
            b.save();
            this.strokeStyleColor && 0 < a && this.commandQueue[a - 1] != this.endLineCommand && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand), a = this.commandQueue.length);
            for (var c = 0; c < a; c++) {
                var d = this.commandQueue[c];
                d.method.apply(d.thisObject, d.args)
            }
            b.restore()
        }
    };
    var d = function() {
        return function(b, a, c) {
            this.method = b;
            this.thisObject = a;
            this.args = c
        }
    }();
    d.prototype.__class__ = "egret_h5_graphics.Command";
    c._setStyle = function(b) {
        this.canvasContext.fillStyle = b;
        this.canvasContext.beginPath()
    };
    c.init = function() {
        for (var b in c) egret.Graphics.prototype[b] = c[b];
        egret.RendererContext.createRendererContext = function(a) {
            return new egret.HTML5CanvasRenderer(a)
        }
    }
})(egret_h5_graphics || (egret_h5_graphics = {}));
egret_h5_graphics.init();
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function(b) {
        function a(a) {
            b.call(this);
            this.size = 2E3;
            this.vertSize = 5;
            this.contextLost = !1;
            this.glContextId = 0;
            this.currentBlendMode = "";
            this.currentBaseTexture = null;
            this.currentBatchSize = 0;
            this.maskList = [];
            this.maskDataFreeList = [];
            this.canvasContext = document.createElement("canvas").getContext("2d");
            console.log("使用WebGL模式");
            this.canvas = a || this.createCanvas();
            this.canvas.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1);
            this.canvas.addEventListener("webglcontextrestored",
                this.handleContextRestored.bind(this), !1);
            this.onResize();
            this.projectionX = this.canvas.width / 2;
            this.projectionY = -this.canvas.height / 2;
            a = 6 * this.size;
            this.vertices = new Float32Array(4 * this.size * this.vertSize);
            this.indices = new Uint16Array(a);
            for (var d = 0, q = 0; d < a; d += 6, q += 4) this.indices[d + 0] = q + 0, this.indices[d + 1] = q + 1, this.indices[d + 2] = q + 2, this.indices[d + 3] = q + 0, this.indices[d + 4] = q + 2, this.indices[d + 5] = q + 3;
            this.initWebGL();
            this.shaderManager = new c.WebGLShaderManager(this.gl);
            this.worldTransform = new c.Matrix;
            this.initBlendMode();
            c.MainContext.instance.addEventListener(c.Event.FINISH_RENDER, this._draw, this);
            c.TextField.prototype._draw = function(a) {
                this.getDirty() && (this.cacheAsBitmap = !0);
                c.DisplayObject.prototype._draw.call(this, a)
            }
        }
        __extends(a, b);
        a.prototype.createCanvas = function() {
            var a = c.Browser.getInstance().$("#egretCanvas");
            if (!a) {
                var b = document.getElementById(c.StageDelegate.canvas_div_name),
                    a = c.Browser.getInstance().$new("canvas");
                a.id = "egretCanvas";
                b.appendChild(a)
            }
            c.MainContext.instance.stage.addEventListener(c.Event.RESIZE,
                this.onResize, this);
            return a
        };
        a.prototype.onResize = function() {
            if (this.canvas) {
                var a = document.getElementById(c.StageDelegate.canvas_div_name);
                this.canvas.width = c.MainContext.instance.stage.stageWidth;
                this.canvas.height = c.MainContext.instance.stage.stageHeight;
                this.canvas.style.width = a.style.width;
                this.canvas.style.height = a.style.height;
                this.projectionX = this.canvas.width / 2;
                this.projectionY = -this.canvas.height / 2
            }
        };
        a.prototype.handleContextLost = function() {
            this.contextLost = !0
        };
        a.prototype.handleContextRestored =
            function() {
                this.initWebGL();
                this.shaderManager.setContext(this.gl);
                this.contextLost = !1
            };
        a.prototype.initWebGL = function() {
            for (var a = {
                stencil: !0
            }, b, c = ["experimental-webgl", "webgl"], d = 0; d < c.length; d++) {
                try {
                    b = this.canvas.getContext(c[d], a)
                } catch (g) {}
                if (b) break
            }
            if (!b) throw Error("当前浏览器不支持webgl");
            this.setContext(b)
        };
        a.prototype.setContext = function(a) {
            this.gl = a;
            a.id = this.glContextId++;
            this.vertexBuffer = a.createBuffer();
            this.indexBuffer = a.createBuffer();
            a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,
                this.indexBuffer);
            a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW);
            a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
            a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW);
            a.disable(a.DEPTH_TEST);
            a.disable(a.CULL_FACE);
            a.enable(a.BLEND);
            a.colorMask(!0, !0, !0, !0)
        };
        a.prototype.initBlendMode = function() {
            this.blendModesWebGL = {};
            this.blendModesWebGL[c.BlendMode.NORMAL] = [this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA];
            this.blendModesWebGL[c.BlendMode.ADD] = [this.gl.SRC_ALPHA, this.gl.ONE]
        };
        a.prototype.start =
            function() {
                if (!this.contextLost) {
                    var a = this.gl;
                    a.activeTexture(a.TEXTURE0);
                    a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
                    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                    var b;
                    b = this.colorTransformMatrix ? this.shaderManager.colorTransformShader : this.shaderManager.defaultShader;
                    this.shaderManager.activateShader(b);
                    b.syncUniforms();
                    a.uniform2f(b.projectionVector, this.projectionX, this.projectionY);
                    var c = 4 * this.vertSize;
                    a.vertexAttribPointer(b.aVertexPosition, 2, a.FLOAT, !1, c, 0);
                    a.vertexAttribPointer(b.aTextureCoord,
                        2, a.FLOAT, !1, c, 8);
                    a.vertexAttribPointer(b.colorAttribute, 2, a.FLOAT, !1, c, 16)
                }
            };
        a.prototype.clearScreen = function() {
            var a = this.gl;
            a.colorMask(!0, !0, !0, !0);
            for (var b = c.RenderFilter.getInstance().getDrawAreaList(), d = 0, h = b.length; d < h; d++) {
                var g = b[d];
                a.viewport(g.x, g.y, g.width, g.height);
                a.bindFramebuffer(a.FRAMEBUFFER, null);
                a.clearColor(0, 0, 0, 0);
                a.clear(a.COLOR_BUFFER_BIT)
            }
            b = c.MainContext.instance.stage;
            a.viewport(0, 0, b.stageWidth, b.stageHeight);
            this.renderCost = 0
        };
        a.prototype.setBlendMode = function(a) {
            a ||
                (a = c.BlendMode.NORMAL);
            if (this.currentBlendMode != a) {
                var b = this.blendModesWebGL[a];
                b && (this._draw(), this.gl.blendFunc(b[0], b[1]), this.currentBlendMode = a)
            }
        };
        a.prototype.drawRepeatImage = function(a, b, c, d, g, f, k, m, n, p) {
            for (; f < m; f += d)
                for (p = k; p < n; p += g) {
                    var r = Math.min(d, m - f),
                        s = Math.min(g, n - p);
                    this.drawImage(a, b, c, r, s, f, p, r, s)
                }
        };
        a.prototype.drawImage = function(a, b, d, h, g, f, k, m, n, p) {
            void 0 === p && (p = void 0);
            if (!this.contextLost)
                if (void 0 !== p) this.drawRepeatImage(a, b, d, h, g, f, k, m, n, p);
                else {
                    p = c.MainContext.instance.rendererContext.texture_scale_factor;
                    b /= p;
                    d /= p;
                    h /= p;
                    g /= p;
                    this.createWebGLTexture(a);
                    if (a.webGLTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size - 1) this._draw(), this.currentBaseTexture = a.webGLTexture;
                    var r = this.worldTransform,
                        s = r.a,
                        t = r.b,
                        u = r.c,
                        v = r.d,
                        x = r.tx,
                        y = r.ty;
                    0 == f && 0 == k || r.append(1, 0, 0, 1, f, k);
                    1 == h / m && 1 == g / n || r.append(m / h, 0, 0, n / g, 0, 0);
                    f = r.a;
                    k = r.b;
                    m = r.c;
                    n = r.d;
                    p = r.tx;
                    var w = r.ty;
                    r.a = s;
                    r.b = t;
                    r.c = u;
                    r.d = v;
                    r.tx = x;
                    r.ty = y;
                    s = a._sourceWidth;
                    t = a._sourceHeight;
                    a = h;
                    r = g;
                    b /= s;
                    d /= t;
                    h /= s;
                    g /= t;
                    s = this.vertices;
                    t = 4 * this.currentBatchSize *
                        this.vertSize;
                    u = this.worldAlpha;
                    s[t++] = p;
                    s[t++] = w;
                    s[t++] = b;
                    s[t++] = d;
                    s[t++] = u;
                    s[t++] = f * a + p;
                    s[t++] = k * a + w;
                    s[t++] = h + b;
                    s[t++] = d;
                    s[t++] = u;
                    s[t++] = f * a + m * r + p;
                    s[t++] = n * r + k * a + w;
                    s[t++] = h + b;
                    s[t++] = g + d;
                    s[t++] = u;
                    s[t++] = m * r + p;
                    s[t++] = n * r + w;
                    s[t++] = b;
                    s[t++] = g + d;
                    s[t++] = u;
                    this.currentBatchSize++
                }
        };
        a.prototype._draw = function() {
            if (0 != this.currentBatchSize && !this.contextLost) {
                var a = c.getTimer();
                this.start();
                var b = this.gl;
                b.bindTexture(b.TEXTURE_2D, this.currentBaseTexture);
                var d = this.vertices.subarray(0, 4 * this.currentBatchSize *
                    this.vertSize);
                b.bufferSubData(b.ARRAY_BUFFER, 0, d);
                b.drawElements(b.TRIANGLES, 6 * this.currentBatchSize, b.UNSIGNED_SHORT, 0);
                this.currentBatchSize = 0;
                this.renderCost += c.getTimer() - a;
                c.Profiler.getInstance().onDrawImage()
            }
        };
        a.prototype.setTransform = function(a) {
            var b = this.worldTransform;
            b.a = a.a;
            b.b = a.b;
            b.c = a.c;
            b.d = a.d;
            b.tx = a.tx;
            b.ty = a.ty
        };
        a.prototype.setAlpha = function(a, b) {
            this.worldAlpha = a;
            this.setBlendMode(b)
        };
        a.prototype.createWebGLTexture = function(a) {
            if (!a.webGLTexture) {
                var b = this.gl;
                a.webGLTexture =
                    b.createTexture();
                b.bindTexture(b.TEXTURE_2D, a.webGLTexture);
                b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a._bitmapData);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                b.bindTexture(b.TEXTURE_2D, null)
            }
        };
        a.prototype.pushMask = function(a) {
            this._draw();
            var b = this.gl;
            0 == this.maskList.length && (b.enable(b.STENCIL_TEST), b.stencilFunc(b.ALWAYS, 1, 1));
            var c = this.maskDataFreeList.pop();
            c ? (c.x = a.x, c.y = a.y, c.w = a.width, c.h = a.height) : c = {
                x: a.x,
                y: a.y,
                w: a.width,
                h: a.height
            };
            this.maskList.push(c);
            b.colorMask(!1, !1, !1, !1);
            b.stencilOp(b.KEEP, b.KEEP, b.INCR);
            this.renderGraphics(c);
            b.colorMask(!0, !0, !0, !0);
            b.stencilFunc(b.NOTEQUAL, 0, this.maskList.length);
            b.stencilOp(b.KEEP, b.KEEP, b.KEEP)
        };
        a.prototype.popMask = function() {
            this._draw();
            var a = this.gl,
                b = this.maskList.pop();
            b && (a.colorMask(!1, !1, !1, !1), a.stencilOp(a.KEEP, a.KEEP, a.DECR), this.renderGraphics(b), a.colorMask(!0, !0, !0, !0), a.stencilFunc(a.NOTEQUAL, 0, this.maskList.length), a.stencilOp(a.KEEP, a.KEEP, a.KEEP), this.maskDataFreeList.push(b));
            0 == this.maskList.length && a.disable(a.STENCIL_TEST)
        };
        a.prototype.setGlobalColorTransform = function(a) {
            if (this.colorTransformMatrix != a && (this._draw(), this.colorTransformMatrix = a)) {
                a = a.concat();
                var b = this.shaderManager.colorTransformShader;
                b.uniforms.colorAdd.value.w = a.splice(19,
                    1)[0] / 255;
                b.uniforms.colorAdd.value.z = a.splice(14, 1)[0] / 255;
                b.uniforms.colorAdd.value.y = a.splice(9, 1)[0] / 255;
                b.uniforms.colorAdd.value.x = a.splice(4, 1)[0] / 255;
                b.uniforms.matrix.value = a
            }
        };
        a.prototype.setupFont = function(a, b) {
            var c = this.canvasContext,
                d = a.italic ? "italic " : "normal ",
                d = d + (a.bold ? "bold " : "normal "),
                d = d + (a.size + "px " + a.fontFamily);
            c.font = d;
            c.textAlign = "left";
            c.textBaseline = "middle"
        };
        a.prototype.measureText = function(a) {
            return this.canvasContext.measureText(a).width
        };
        a.prototype.renderGraphics =
            function(a) {
                var b = this.gl,
                    c = this.shaderManager.primitiveShader;
                this.graphicsPoints ? (this.graphicsPoints.length = 0, this.graphicsIndices.length = 0) : (this.graphicsPoints = [], this.graphicsIndices = [], this.graphicsBuffer = b.createBuffer(), this.graphicsIndexBuffer = b.createBuffer());
                this.updateGraphics(a);
                this.shaderManager.activateShader(c);
                b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
                b.uniformMatrix3fv(c.translationMatrix, !1, this.worldTransform.toArray(!0));
                b.uniform2f(c.projectionVector, this.projectionX, -this.projectionY);
                b.uniform2f(c.offsetVector, 0, 0);
                b.uniform3fv(c.tintColor, [1, 1, 1]);
                b.uniform1f(c.alpha, this.worldAlpha);
                b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
                b.vertexAttribPointer(c.aVertexPosition, 2, b.FLOAT, !1, 24, 0);
                b.vertexAttribPointer(c.colorAttribute, 4, b.FLOAT, !1, 24, 8);
                b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
                b.drawElements(b.TRIANGLE_STRIP, this.graphicsIndices.length, b.UNSIGNED_SHORT, 0);
                this.shaderManager.activateShader(this.shaderManager.defaultShader)
            };
        a.prototype.updateGraphics =
            function(a) {
                var b = this.gl;
                this.buildRectangle(a);
                b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
                b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), b.STATIC_DRAW);
                b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
                b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), b.STATIC_DRAW)
            };
        a.prototype.buildRectangle = function(a) {
            var b = a.x,
                c = a.y,
                d = a.w;
            a = a.h;
            var g = this.graphicsPoints,
                f = this.graphicsIndices,
                k = g.length / 6;
            g.push(b, c);
            g.push(0, 0, 0, 1);
            g.push(b + d, c);
            g.push(0, 0, 0, 1);
            g.push(b, c + a);
            g.push(0, 0, 0, 1);
            g.push(b + d, c + a);
            g.push(0, 0, 0, 1);
            f.push(k, k, k + 1, k + 2, k + 3, k + 3)
        };
        return a
    }(c.RendererContext);
    c.WebGLRenderer = d;
    d.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {}));
(function(c) {
    var d = function() {
        function b() {}
        b.compileProgram = function(a, c, d) {
            d = b.compileFragmentShader(a, d);
            c = b.compileVertexShader(a, c);
            var q = a.createProgram();
            a.attachShader(q, c);
            a.attachShader(q, d);
            a.linkProgram(q);
            a.getProgramParameter(q, a.LINK_STATUS) || console.log("无法初始化着色器");
            return q
        };
        b.compileFragmentShader = function(a, c) {
            return b._compileShader(a, c, a.FRAGMENT_SHADER)
        };
        b.compileVertexShader = function(a, c) {
            return b._compileShader(a, c, a.VERTEX_SHADER)
        };
        b._compileShader =
            function(a, b, c) {
                c = a.createShader(c);
                a.shaderSource(c, b);
                a.compileShader(c);
                return a.getShaderParameter(c, a.COMPILE_STATUS) ? c : (console.log(a.getShaderInfoLog(c)), null)
            };
        b.checkCanUseWebGL = function() {
            if (void 0 == b.canUseWebGL) try {
                var a = document.createElement("canvas");
                b.canUseWebGL = !!window.WebGLRenderingContext && !(!a.getContext("webgl") && !a.getContext("experimental-webgl"))
            } catch (c) {
                b.canUseWebGL = !1
            }
            return b.canUseWebGL
        };
        return b
    }();
    c.WebGLUtils = d;
    d.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function() {
        function c(a) {
            this.maxAttibs = 10;
            this.attribState = [];
            this.tempAttribState = [];
            for (var b = 0; b < this.maxAttibs; b++) this.attribState[b] = !1;
            this.setContext(a)
        }
        c.prototype.setContext = function(c) {
            this.gl = c;
            this.primitiveShader = new e(c);
            this.defaultShader = new b(c);
            this.colorTransformShader = new a(c);
            this.activateShader(this.defaultShader)
        };
        c.prototype.activateShader = function(a) {
            this.currentShader != a && (this.gl.useProgram(a.program), this.setAttribs(a.attributes), this.currentShader =
                a)
        };
        c.prototype.setAttribs = function(a) {
            var b, c;
            c = this.tempAttribState.length;
            for (b = 0; b < c; b++) this.tempAttribState[b] = !1;
            c = a.length;
            for (b = 0; b < c; b++) this.tempAttribState[a[b]] = !0;
            a = this.gl;
            c = this.attribState.length;
            for (b = 0; b < c; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? a.enableVertexAttribArray(b) : a.disableVertexAttribArray(b))
        };
        return c
    }();
    c.WebGLShaderManager = d;
    d.prototype.__class__ = "egret.WebGLShaderManager";
    var b = function() {
        function a(b) {
            this.defaultVertexSrc =
                "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n}";
            this.program = null;
            this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\ngl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
            this.gl = b;
            this.init()
        }
        a.prototype.init = function() {
            var a = this.gl,
                b = c.WebGLUtils.compileProgram(a, this.defaultVertexSrc, this.fragmentSrc);
            a.useProgram(b);
            this.uSampler = a.getUniformLocation(b, "uSampler");
            this.projectionVector = a.getUniformLocation(b, "projectionVector");
            this.offsetVector = a.getUniformLocation(b, "offsetVector");
            this.dimensions = a.getUniformLocation(b, "dimensions");
            this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition");
            this.aTextureCoord = a.getAttribLocation(b, "aTextureCoord");
            this.colorAttribute =
                a.getAttribLocation(b, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
            this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
            for (var d in this.uniforms) this.uniforms[d].uniformLocation = a.getUniformLocation(b, d);
            this.initUniforms();
            this.program = b
        };
        a.prototype.initUniforms = function() {
            if (this.uniforms) {
                var a = this.gl,
                    b, c;
                for (c in this.uniforms) {
                    b = this.uniforms[c];
                    var d = b.type;
                    "mat2" === d || "mat3" === d || "mat4" === d ? (b.glMatrix = !0, b.glValueLength = 1, "mat2" === d ? b.glFunc = a.uniformMatrix2fv :
                        "mat3" === d ? b.glFunc = a.uniformMatrix3fv : "mat4" === d && (b.glFunc = a.uniformMatrix4fv)) : (b.glFunc = a["uniform" + d], b.glValueLength = "2f" === d || "2i" === d ? 2 : "3f" === d || "3i" === d ? 3 : "4f" === d || "4i" === d ? 4 : 1)
                }
            }
        };
        a.prototype.syncUniforms = function() {
            if (this.uniforms) {
                var a, b = this.gl,
                    c;
                for (c in this.uniforms) a = this.uniforms[c], 1 === a.glValueLength ? !0 === a.glMatrix ? a.glFunc.call(b, a.uniformLocation, a.transpose, a.value) : a.glFunc.call(b, a.uniformLocation, a.value) : 2 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x,
                    a.value.y) : 3 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z) : 4 === a.glValueLength && a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z, a.value.w)
            }
        };
        return a
    }();
    c.EgretShader = b;
    b.prototype.__class__ = "egret.EgretShader";
    var a = function(a) {
        function b(c) {
            a.call(this, c);
            this.fragmentSrc = "precision mediump float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform float invert;\nuniform mat4 matrix;\nuniform vec4 colorAdd;\nuniform sampler2D uSampler;\nvoid main(void) {\nvec4 locColor = texture2D(uSampler, vTextureCoord) * matrix;\nif(locColor.a != 0.0){\nlocColor += colorAdd;\n}\ngl_FragColor = locColor;\n}";
            this.uniforms = {
                matrix: {
                    type: "mat4",
                    value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                },
                colorAdd: {
                    type: "4f",
                    value: {
                        x: 0,
                        y: 0,
                        z: 0,
                        w: 0
                    }
                }
            };
            this.init()
        }
        __extends(b, a);
        return b
    }(b);
    c.ColorTransformShader = a;
    a.prototype.__class__ = "egret.ColorTransformShader";
    var e = function() {
        function a(b) {
            this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = null;
            this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}";
            this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}";
            this.gl = b;
            this.init()
        }
        a.prototype.init = function() {
            var a = this.gl,
                b = c.WebGLUtils.compileProgram(a, this.vertexSrc, this.fragmentSrc);
            a.useProgram(b);
            this.projectionVector = a.getUniformLocation(b, "projectionVector");
            this.offsetVector = a.getUniformLocation(b, "offsetVector");
            this.tintColor = a.getUniformLocation(b, "tint");
            this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition");
            this.colorAttribute = a.getAttribLocation(b, "aColor");
            this.attributes = [this.aVertexPosition, this.colorAttribute];
            this.translationMatrix = a.getUniformLocation(b,
                "translationMatrix");
            this.alpha = a.getUniformLocation(b, "alpha");
            this.program = b
        };
        return a
    }();
    c.PrimitiveShader = e;
    e.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function(b) {
        function a() {
            b.call(this)
        }
        __extends(a, b);
        a.prototype.proceed = function(a) {
            function b() {
                if (4 == h.readyState)
                    if (h.status != a._status && (a._status = h.status, c.HTTPStatusEvent.dispatchHTTPStatusEvent(a, h.status)), 400 <= h.status || 0 == h.status) c.IOErrorEvent.dispatchIOErrorEvent(a);
                    else {
                        switch (a.dataFormat) {
                            case c.URLLoaderDataFormat.TEXT:
                                a.data = h.responseText;
                                break;
                            case c.URLLoaderDataFormat.VARIABLES:
                                a.data = new c.URLVariables(h.responseText);
                                break;
                            case c.URLLoaderDataFormat.BINARY:
                                a.data =
                                    h.response;
                                break;
                            default:
                                a.data = h.responseText
                        }
                        c.__callAsync(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
                    }
            }
            if (a.dataFormat == c.URLLoaderDataFormat.TEXTURE) this.loadTexture(a);
            else if (a.dataFormat == c.URLLoaderDataFormat.SOUND) this.loadSound(a);
            else {
                var d = a._request,
                    h = this.getXHR();
                h.onreadystatechange = b;
                var g = c.NetContext._getUrl(d);
                h.open(d.method, g, !0);
                this.setResponseType(h, a.dataFormat);
                d.method != c.URLRequestMethod.GET && d.data ? d.data instanceof c.URLVariables ? (h.setRequestHeader("Content-Type",
                    "application/x-www-form-urlencoded"), h.send(d.data.toString())) : (h.setRequestHeader("Content-Type", "multipart/form-data"), h.send(d.data)) : h.send()
            }
        };
        a.prototype.loadSound = function(a) {
            function b(g) {
                window.clearTimeout(h.__timeoutId);
                h.removeEventListener("canplaythrough", b, !1);
                h.removeEventListener("error", d, !1);
                g = new c.Sound;
                g._setAudio(h);
                a.data = g;
                c.__callAsync(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
            }

            function d(g) {
                window.clearTimeout(h.__timeoutId);
                h.removeEventListener("canplaythrough",
                    b, !1);
                h.removeEventListener("error", d, !1);
                c.IOErrorEvent.dispatchIOErrorEvent(a)
            }
            var h = new Audio(a._request.url);
            h.__timeoutId = window.setTimeout(b, 100);
            h.addEventListener("canplaythrough", b, !1);
            h.addEventListener("error", d, !1);
            h.load()
        };
        a.prototype.getXHR = function() {
            return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
        };
        a.prototype.setResponseType = function(a, b) {
            switch (b) {
                case c.URLLoaderDataFormat.TEXT:
                case c.URLLoaderDataFormat.VARIABLES:
                    a.responseType = c.URLLoaderDataFormat.TEXT;
                    break;
                case c.URLLoaderDataFormat.BINARY:
                    a.responseType = "arraybuffer";
                    break;
                default:
                    a.responseType = b
            }
        };
        a.prototype.loadTexture = function(a) {
            var b = a._request,
                d = new Image;
            d.onload = function(b) {
                d.onerror = null;
                d.onload = null;
                b = new c.Texture;
                b._setBitmapData(d);
                a.data = b;
                c.__callAsync(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
            };
            d.onerror = function(b) {
                d.onerror = null;
                d.onload = null;
                c.IOErrorEvent.dispatchIOErrorEvent(a)
            };
            d.src = b.url
        };
        return a
    }(c.NetContext);
    c.HTML5NetContext = d;
    d.prototype.__class__ = "egret.HTML5NetContext"
})(egret ||
    (egret = {}));
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function(b) {
        function a() {
            b.call(this);
            this._isTouchDown = !1;
            this.rootDiv = document.getElementById(c.StageDelegate.canvas_div_name)
        }
        __extends(a, b);
        a.prototype.prevent = function(a) {
            a.stopPropagation();
            !0 != a.isScroll && a.preventDefault()
        };
        a.prototype.run = function() {
            var a = this;
            window.navigator.msPointerEnabled ? (this.rootDiv.addEventListener("MSPointerDown", function(b) {
                a._onTouchBegin(b);
                a.prevent(b)
            }, !1), this.rootDiv.addEventListener("MSPointerMove", function(b) {
                a._onTouchMove(b);
                a.prevent(b)
            }, !1), this.rootDiv.addEventListener("MSPointerUp", function(b) {
                a._onTouchEnd(b);
                a.prevent(b)
            }, !1)) : c.MainContext.deviceType == c.MainContext.DEVICE_MOBILE ? this.addTouchListener() : c.MainContext.deviceType == c.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
            window.addEventListener("mousedown", function(b) {
                a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
            });
            window.addEventListener("mouseup", function(b) {
                a._isTouchDown && (a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._onTouchEnd(b));
                a._isTouchDown = !1
            })
        };
        a.prototype.addMouseListener = function() {
            var a = this;
            this.rootDiv.addEventListener("mousedown", function(b) {
                a._onTouchBegin(b)
            });
            this.rootDiv.addEventListener("mousemove", function(b) {
                a._onTouchMove(b)
            });
            this.rootDiv.addEventListener("mouseup", function(b) {
                a._onTouchEnd(b)
            })
        };
        a.prototype.addTouchListener = function() {
            var a = this;
            this.rootDiv.addEventListener("touchstart", function(b) {
                for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchBegin(b.changedTouches[d]);
                a.prevent(b)
            }, !1);
            this.rootDiv.addEventListener("touchmove",
                function(b) {
                    for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchMove(b.changedTouches[d]);
                    a.prevent(b)
                }, !1);
            this.rootDiv.addEventListener("touchend", function(b) {
                for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchEnd(b.changedTouches[d]);
                a.prevent(b)
            }, !1);
            this.rootDiv.addEventListener("touchcancel", function(b) {
                for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchEnd(b.changedTouches[d]);
                a.prevent(b)
            }, !1)
        };
        a.prototype.inOutOfCanvas = function(a) {
            var b = this.getLocation(this.rootDiv, a);
            a = b.x;
            var b = b.y,
                d = c.MainContext.instance.stage;
            return 0 > a || 0 > b || a > d.stageWidth || b > d.stageHeight ? !0 : !1
        };
        a.prototype.dispatchLeaveStageEvent = function() {
            this.touchingIdentifiers.length = 0;
            c.MainContext.instance.stage.dispatchEventWith(c.Event.LEAVE_STAGE)
        };
        a.prototype._onTouchBegin = function(a) {
            var b = this.getLocation(this.rootDiv, a),
                c = -1;
            a.hasOwnProperty("identifier") && (c = a.identifier);
            this.onTouchBegan(b.x, b.y, c)
        };
        a.prototype._onTouchMove = function(a) {
            var b = this.getLocation(this.rootDiv, a),
                c = -1;
            a.hasOwnProperty("identifier") &&
                (c = a.identifier);
            this.onTouchMove(b.x, b.y, c)
        };
        a.prototype._onTouchEnd = function(a) {
            var b = this.getLocation(this.rootDiv, a),
                c = -1;
            a.hasOwnProperty("identifier") && (c = a.identifier);
            this.onTouchEnd(b.x, b.y, c)
        };
        a.prototype.getLocation = function(a, b) {
            var d = document.documentElement,
                h = window,
                g, f;
            "function" === typeof a.getBoundingClientRect ? (f = a.getBoundingClientRect(), g = f.left, f = f.top) : f = g = 0;
            g += h.pageXOffset - d.clientLeft;
            f += h.pageYOffset - d.clientTop;
            null != b.pageX ? (d = b.pageX, h = b.pageY) : (g -= document.body.scrollLeft,
                f -= document.body.scrollTop, d = b.clientX, h = b.clientY);
            var k = c.Point.identity;
            k.x = (d - g) / c.StageDelegate.getInstance().getScaleX();
            k.y = (h - f) / c.StageDelegate.getInstance().getScaleY();
            return k
        };
        return a
    }(c.TouchContext);
    c.HTML5TouchContext = d;
    d.prototype.__class__ = "egret.HTML5TouchContext"
})(egret || (egret = {}));
__extends = this.__extends || function(c, d) {
    function b() {
        this.constructor = c
    }
    for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
    b.prototype = d.prototype;
    c.prototype = new b
};
(function(c) {
    var d = function(b) {
        function a() {
            b.call(this);
            this._hasListeners = !1;
            this._inputType = "";
            this._isShow = !1;
            this.textValue = "";
            this._height = this._width = 0;
            this._styleInfoes = {};
            var a = c.StageDelegate.getInstance().getScaleX(),
                d = c.StageDelegate.getInstance().getScaleY(),
                q = c.Browser.getInstance().$new("div");
            q.position.x = 0;
            q.position.y = 0;
            q.scale.x = a;
            q.scale.y = d;
            q.transforms();
            q.style[egret_dom.getTrans("transformOrigin")] = "0% 0% 0px";
            this.div = q;
            d = c.MainContext.instance.stage;
            a = d.stageWidth;
            d = d.stageHeight;
            q = new c.Shape;
            q.width = a;
            q.height = d;
            q.touchEnabled = !0;
            this._shape = q;
            this.getStageDelegateDiv().appendChild(this.div)
        }
        __extends(a, b);
        a.prototype.getStageDelegateDiv = function() {
            var a = c.Browser.getInstance().$("#StageDelegateDiv");
            a || (a = c.Browser.getInstance().$new("div"), a.id = "StageDelegateDiv", document.getElementById(c.StageDelegate.canvas_div_name).appendChild(a), a.transforms());
            return a
        };
        a.prototype._setMultiline = function(a) {
            b.prototype._setMultiline.call(this, a);
            this.createInput()
        };
        a.prototype.callHandler =
            function(a) {
                a.stopPropagation()
            };
        a.prototype._add = function() {
            this.div && null == this.div.parentNode && this.getStageDelegateDiv().appendChild(this.div)
        };
        a.prototype._remove = function() {
            this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape);
            this.div && this.div.parentNode && this.div.parentNode.removeChild(this.div)
        };
        a.prototype._addListeners = function() {
            this.inputElement && !this._hasListeners && (this._hasListeners = !0, this.inputElement.addEventListener("mousedown", this.callHandler), this.inputElement.addEventListener("touchstart",
                this.callHandler), this.inputElement.addEventListener("MSPointerDown", this.callHandler))
        };
        a.prototype._removeListeners = function() {
            this.inputElement && this._hasListeners && (this._hasListeners = !1, this.inputElement.removeEventListener("mousedown", this.callHandler), this.inputElement.removeEventListener("touchstart", this.callHandler), this.inputElement.removeEventListener("MSPointerDown", this.callHandler))
        };
        a.prototype.createInput = function() {
            var a = this._multiline ? "textarea" : "input";
            this._inputType != a && (this._inputType =
                a, null != this.inputElement && (this._removeListeners(), this.div.removeChild(this.inputElement)), this._multiline ? (a = document.createElement("textarea"), a.style.resize = "none") : a = document.createElement("input"), a.type = "text", this.inputElement = a, this.inputElement.value = "", this.div.appendChild(a), this._addListeners(), this.setElementStyle("width", "0px"), this.setElementStyle("border", "none"), this.setElementStyle("margin", "0"), this.setElementStyle("padding", "0"), this.setElementStyle("outline", "medium"), this.setElementStyle("verticalAlign",
                    "top"), this.setElementStyle("wordBreak", "break-all"), this.setElementStyle("overflow", "hidden"))
        };
        a.prototype._open = function(a, b, c, d) {};
        a.prototype._setScale = function(a, d) {
            b.prototype._setScale.call(this, a, d);
            var q = c.StageDelegate.getInstance().getScaleX(),
                h = c.StageDelegate.getInstance().getScaleY();
            this.div.scale.x = q * a;
            this.div.scale.y = h * d;
            this.div.transforms()
        };
        a.prototype.changePosition = function(a, b) {
            var d = c.StageDelegate.getInstance().getScaleX(),
                h = c.StageDelegate.getInstance().getScaleY();
            this.div.position.x =
                a * d;
            this.div.position.y = b * h;
            this.div.transforms()
        };
        a.prototype.setStyles = function() {
            this.setElementStyle("fontStyle", this._italic ? "italic" : "normal");
            this.setElementStyle("fontWeight", this._bold ? "bold" : "normal");
            this.setElementStyle("textAlign", this._textAlign);
            this.setElementStyle("fontSize", this._size + "px");
            this.setElementStyle("color", "#000000");
            this.setElementStyle("width", this._width + "px");
            this.setElementStyle("height", this._height + "px");
            this.setElementStyle("border", "1px solid red");
            this.setElementStyle("display",
                "block")
        };
        a.prototype._show = function() {
            0 < this._maxChars ? this.inputElement.setAttribute("maxlength", this._maxChars) : this.inputElement.removeAttribute("maxlength");
            this._isShow = !0;
            var a = this._getText();
            this.inputElement.value = a;
            var b = this;
            this.inputElement.oninput = function() {
                b.textValue = b.inputElement.value;
                b.dispatchEvent(new c.Event("updateText"))
            };
            this.setStyles();
            this.inputElement.focus();
            this.inputElement.selectionStart = a.length;
            this.inputElement.selectionEnd = a.length;
            this._shape && null == this._shape.parent &&
                c.MainContext.instance.stage.addChild(this._shape)
        };
        a.prototype._hide = function() {
            if (null != this.inputElement) {
                this._isShow = !1;
                this.inputElement.oninput = function() {};
                this.setElementStyle("border", "none");
                this.setElementStyle("display", "none");
                this.inputElement.value = "";
                this.setElementStyle("width", "0px");
                window.scrollTo(0, 0);
                var a = this;
                c.setTimeout(function() {
                    a.inputElement.blur();
                    window.scrollTo(0, 0)
                }, this, 50);
                this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape)
            }
        };
        a.prototype._getText =
            function() {
                this.textValue || (this.textValue = "");
                return this.textValue
            };
        a.prototype._setText = function(a) {
            this.textValue = a;
            this.resetText()
        };
        a.prototype.resetText = function() {
            this.inputElement && (this.inputElement.value = this.textValue)
        };
        a.prototype._setWidth = function(a) {
            this._width = a
        };
        a.prototype._setHeight = function(a) {
            this._height = a
        };
        a.prototype.setElementStyle = function(a, b) {
            this.inputElement && this._styleInfoes[a] != b && (this.inputElement.style[a] = b, this._styleInfoes[a] = b)
        };
        return a
    }(c.StageText);
    c.HTML5StageText =
        d;
    d.prototype.__class__ = "egret.HTML5StageText"
})(egret || (egret = {}));
egret.StageText.create = function() {
    return new egret.HTML5StageText
};
var XiaobinTool = function() {
    function c() {}
    c.createBitmapByName = function(c) {
        var b = new egret.Bitmap;
        c = RES.getRes(c);
        b.texture = c;
        return b
    };
    c.creatMovieClip = function(c, b, a) {
        void 0 === a && (a = "");
        c = RES.getRes(c);
        b = RES.getRes(b);
        b = new egret.MovieClip(c, b);
        b.frameRate = 60;
        b.gotoAndPlay(a);
        return b
    };
    c.hitTest = function(c, b) {
        var a = c.getBounds(),
            e = b.getBounds();
        a.x = c.x;
        a.y = c.y;
        e.x = b.x;
        e.y = b.y;
        return a.intersects(e)
    };
    c.checkArrRecover = function(c, b) {
        if (0 == c.length)
            for (var a = 0; a < b.length; a++) c.push(b[a])
    };
    c.makeRandomFromArr =
        function(c, b) {
            this.checkArrRecover(c, b);
            var a = Math.floor(Math.random() * c.length),
                e = c[a];
            c.splice(a, 1);
            this.checkArrRecover(c, b);
            return e
        };
    return c
}();
XiaobinTool.prototype.__class__ = "XiaobinTool";
var __extends = this.__extends || function(c, d) {
        function b() {
            this.constructor = c
        }
        for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
        b.prototype = d.prototype;
        c.prototype = new b
    },
    ScoreFiveMc = function(c) {
        function d() {
            c.call(this);
            this.num = 0;
            this.theJson = "numberText_json";
            this.thePng = "numberText_png";
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
        }
        __extends(d, c);
        d.prototype.onAddToStage = function(b) {
            this.tenthousandText = XiaobinTool.creatMovieClip(this.theJson, this.thePng, "n0");
            this.addChild(this.tenthousandText);
            this.tenthousandText.x = 0;
            this.thousandText = XiaobinTool.creatMovieClip(this.theJson, this.thePng, "n0");
            this.addChild(this.thousandText);
            this.thousandText.x = this.tenthousandText.x + this.tenthousandText.width;
            this.handredText = XiaobinTool.creatMovieClip(this.theJson, this.thePng, "n0");
            this.addChild(this.handredText);
            this.handredText.x = this.thousandText.x + this.thousandText.width;
            this.tenText = XiaobinTool.creatMovieClip(this.theJson, this.thePng, "n0");
            this.addChild(this.tenText);
            this.tenText.x = this.handredText.x +
                this.handredText.width;
            this.oneText = XiaobinTool.creatMovieClip(this.theJson, this.thePng, "n0");
            this.addChild(this.oneText);
            this.oneText.x = this.tenText.x + this.tenText.width
        };
        d.prototype.setNum = function(b) {
            this.num = b;
            b = Math.floor(this.num / 1E4).toString();
            this.tenthousandText.gotoAndStop("n" + b.toString());
            "0" == b && (this.tenthousandText.visible = !1);
            b = Math.floor(this.num / 1E3).toString();
            b = b.slice(b.length - 1, b.length);
            this.thousandText.gotoAndStop("n" + b.toString());
            this.thousandText.visible = !1 == this.tenthousandText.visible &&
                "0" == b ? !1 : !0;
            b = Math.floor(this.num / 100).toString();
            b = b.slice(b.length - 1, b.length);
            this.handredText.gotoAndStop("n" + b.toString());
            this.handredText.visible = !1 == this.tenthousandText.visible && !1 == this.thousandText.visible && "0" == b ? !1 : !0;
            b = Math.floor(this.num / 10).toString();
            b = b.slice(b.length - 1, b.length);
            this.tenText.gotoAndStop("n" + b.toString());
            !1 == this.tenthousandText.visible && !1 == this.thousandText.visible && !1 == this.tenText.visible && "0" == b && (this.tenText.visible = !1);
            b = this.num.toString();
            b = b.slice(b.length -
                1, b.length);
            this.oneText.gotoAndStop("n" + b.toString())
        };
        return d
    }(egret.Sprite);
ScoreFiveMc.prototype.__class__ = "ScoreFiveMc";
var __extends = this.__extends || function(c, d) {
        function b() {
            this.constructor = c
        }
        for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
        b.prototype = d.prototype;
        c.prototype = new b
    },
    GameSystem = function(c) {
        function d() {
            c.call(this);
            this.isPlaying = !0;
            this.timeNum = 60;
            this.timeContentWidth = 180;
            this.powerContentWidth = 0;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.ats, this)
        }
        __extends(d, c);
        d.prototype.ats = function(b) {
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            this.scoreBg = XiaobinTool.createBitmapByName("scorePanel_png");
            this.addChild(this.scoreBg);
            this.scoreBg.x = this.scoreBg.y = 10;
            this.scoreNum = 0;
            b = new ScoreFiveMc;
            b.x = -30;
            b.y = 60;
            b.scaleX = b.scaleY = 0.8;
            this.addChild(b);
            b.setNum(this.scoreNum);
            this.gameScoreMc = b;
            this.timeLine = XiaobinTool.createBitmapByName("timeLine_png");
            this.addChild(this.timeLine);
            this.timeLine.x = this.stageW - this.timeLine.width - 10;
            this.timeLine.y = 20;
            this.timeContent = XiaobinTool.createBitmapByName("timeContent_png");
            this.addChild(this.timeContent);
            this.timeContent.x = this.timeLine.x;
            this.timeContent.y =
                this.timeLine.y;
            this.setTimeMasker(this.timeContentWidth);
            b = XiaobinTool.createBitmapByName("clock_png");
            this.addChild(b);
            b.x = this.timeContent.x - 50;
            b.y = this.timeContent.y - 10;
            var a = XiaobinTool.createBitmapByName("koushao_png");
            this.addChild(a);
            a.x = b.x - 3;
            a.y = b.y + 50;
            this.powerLine = XiaobinTool.createBitmapByName("powerLine_png");
            this.addChild(this.powerLine);
            this.powerLine.x = this.stageW - this.powerLine.width - 10;
            this.powerLine.y = 60;
            this.powerContent = XiaobinTool.createBitmapByName("powerContent_png");
            this.addChild(this.powerContent);
            this.powerContent.x = this.powerLine.x;
            this.powerContent.y = this.powerLine.y;
            this.setPowerMasker(this.powerContentWidth)
        };
        d.prototype.setTimeMasker = function(b) {
            b = new egret.Rectangle(0, 0, b, 50);
            this.timeContent.mask = b
        };
        d.prototype.setPowerMasker = function(b) {
            b = new egret.Rectangle(0, 0, b, 50);
            this.powerContent.mask = b
        };
        d.prototype.loop = function(b) {
            this.timeContentWidth++;
            this.setTimeMasker(this.timeContentWidth)
        };
        d.prototype.updateScoreTxt = function() {
            this.gameScoreMc.setNum(this.scoreNum);
            100 <= this.scoreNum &&
                1E3 > this.scoreNum && (this.gameScoreMc.x = -25);
            1E3 < this.scoreNum && (this.gameScoreMc.scaleX = this.gameScoreMc.scaleY = 0.7, this.gameScoreMc.x = 5)
        };
        d.prototype.updateTimeTxt = function() {};
        d.prototype.updateHpMc = function() {
            this.hpMc.gotoAndStop("hp" + this.hpNum)
        };
        d.costTimeSpeed = 1;
        d.PAY_SUCCESS = "PAY_SUCCESS";
        d.QIAN_SUCCESS = "QIAN_SUCCESS";
        d.CUR_GOLD = "CUR_GOLD";
        d.CUR_DATE = "CUR_DATE";
        d.havePayArr = [!1, !1, !1, !1, !1];
        d.payItemArr = [100, 200, 300, 100, 200];
        d.showQiandao = !1;
        d.curQian = 0;
        d.moneyTimers = 5;
        d.moneyTimers_init =
            5;
        d.gameTime = 180;
        d.gameTime_init = 180;
        d.doubleScore = !1;
        d.superDoubleScore = !1;
        d.tenScore = !1;
        d.curGold = 0;
        d.getGold = 0;
        d.qianValue = 15;
        d.tool_1 = !1;
        d.tool_2 = !1;
        d.tool_3 = !1;
        d.tool_4 = !1;
        d.tool_5 = !1;
        d.tool_6 = !1;
        return d
    }(egret.Sprite);
GameSystem.prototype.__class__ = "GameSystem";
var __extends = this.__extends || function(c, d) {
        function b() {
            this.constructor = c
        }
        for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
        b.prototype = d.prototype;
        c.prototype = new b
    },
    PayItemBtn = function(c) {
        function d() {
            c.call(this);
            this.stageH = this.stageW = 0;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.ats, this)
        }
        __extends(d, c);
        d.prototype.ats = function(b) {
            b = XiaobinTool.createBitmapByName("payItem_btn_png");
            this.addChild(b);
            var a = new egret.TextField;
            this.addChild(a);
            a.size = 25;
            a.textColor = 6237447;
            a.x = 65;
            a.y =
                b.y + 20;
            this.t = a;
            this.anchorOffsetX = this.width / 2;
            this.anchorOffsetY = this.height / 2;
            this.touchEnabled = !0;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.tb, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.te, this)
        };
        d.prototype.tb = function(b) {
            this.scaleX = this.scaleY = 1.1
        };
        d.prototype.te = function(b) {
            this.scaleX = this.scaleY = 1
        };
        return d
    }(egret.Sprite);
PayItemBtn.prototype.__class__ = "PayItemBtn";
var __extends = this.__extends || function(c, d) {
        function b() {
            this.constructor = c
        }
        for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
        b.prototype = d.prototype;
        c.prototype = new b
    },
    StartBtn = function(c) {
        function d() {
            c.call(this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
        }
        __extends(d, c);
        d.prototype.onAddToStage = function(b) {
            this.bgBMP = new egret.Bitmap;
            this.addChild(this.bgBMP);
            this.bgBMP.texture = RES.getRes("start_btn_png")
        };
        return d
    }(egret.Sprite);
StartBtn.prototype.__class__ = "StartBtn";
var __extends = this.__extends || function(c, d) {
        function b() {
            this.constructor = c
        }
        for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
        b.prototype = d.prototype;
        c.prototype = new b
    },
    GameOverPanel = function(c) {
        function d() {
            c.call(this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.ats, this)
        }
        __extends(d, c);
        d.prototype.ats = function(b) {
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            b = new egret.Shape;
            this.addChild(b);
            b.graphics.beginFill(0, 0.5);
            b.graphics.drawRect(0, 0, this.stageW, this.stageH);
            b.graphics.endFill();
            b = XiaobinTool.createBitmapByName("gameoverBg_jpg");
            this.addChild(b);
            b = XiaobinTool.createBitmapByName("fx_btn_png");
            this.addChild(b);
            b.anchorOffsetX = b.width / 2;
            b.scaleX = b.scaleY = 0.7;
            b.x = this.stageW / 2;
            b.y = 370;
            b.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doFenxiang, this);
            b.touchEnabled = !0;
            var a = XiaobinTool.createBitmapByName("replay_btn_png");
            this.addChild(a);
            a.anchorOffsetX = a.width / 2;
            a.scaleX = a.scaleY = 0.7;
            a.x = this.stageW / 2;
            a.y = b.y + b.height - 25;
            a.addEventListener(egret.TouchEvent.TOUCH_BEGIN,
                this.doReplay, this);
            a.touchEnabled = !0;
            var c = XiaobinTool.createBitmapByName("more_btn_png");
            this.addChild(c);
            c.anchorOffsetX = c.width / 2;
            c.scaleX = c.scaleY = 0.7;
            c.x = this.stageW / 2;
            c.y = a.y + a.height - 30;
            c.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doMore, this);
            c.touchEnabled = !0;
            a = new egret.TextField;
            this.addChild(a);
            a.text = GameSystem.getGold.toString();
            a.size = 30;
            a.x = this.stageW / 2 + 10;
            a.y = b.y - 60;
            b = new egret.TextField;
            this.addChild(b);
            b.text = "       ";
            b.size = 8;
            b.x = 10;
            b.y = 740 - 2 * b.height + 3;
            b.touchEnabled = !0;
            b.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doAbout, this);
            b = new ScoreFiveMc;
            this.addChild(b);
            b.x = 99 < GameSystem.curScore ? 100 : 80;
            b.y = 250;
            b.setNum(GameSystem.curScore);
            b = XiaobinTool.createBitmapByName("home_btn_png");
            this.addChild(b);
            b.x = this.stageW - b.width + 10;
            b.y = this.stageH - b.height + 10;
            b.scaleX = b.scaleY = 0.7;
            b.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doHome, this);
            b.touchEnabled = !0;
            GameSystem.moneyTimers = GameSystem.moneyTimers_init;
            GameSystem.gameTime = GameSystem.gameTime_init;
            GameSystem.doubleScore = !1;
            GameSystem.superDoubleScore = !1;
            GameSystem.tenScore = !1
        };
        d.prototype.doAbout = function(b) {
            b.target.text = "版权所有:聆听Q语"
        };
        d.prototype.doHome = function(b) {
            b = new egret.Event("click_home_btn", !0);
            this.dispatchEvent(b)
        };
        d.prototype.doFenxiang = function(b) {
            // ih5game.share()
        };
        d.prototype.doReplay = function(b) {
            console.log("doReplay");
            b.target.parent && b.target.parent.removeChild(b.target);
            b = new egret.Event("click_replay_btn", !0);
            this.dispatchEvent(b)
        };
        d.prototype.doDownload = function(b) {};
        d.prototype.doMore = function(b) {
            // ih5game.more()
        };
        return d
    }(egret.Sprite);
GameOverPanel.prototype.__class__ = "GameOverPanel";
var __extends = this.__extends || function(c, d) {
        function b() {
            this.constructor = c
        }
        for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
        b.prototype = d.prototype;
        c.prototype = new b
    },
    HomePage = function(c) {
        function d() {
            c.call(this);
            this.stageH = this.stageW = 0;
            this.homePage = null;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startGame, this)
        }
        __extends(d, c);
        d.prototype.startGame = function(b) {
            b = XiaobinTool.createBitmapByName("homepage_jpg");
            this.addChild(b);
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            null == this.homePage && (this.startBtn = new StartBtn, this.addChild(this.startBtn), this.startBtn.x = (this.stageW - this.startBtn.width) / 2, this.startBtn.y = 550, this.startBtn.touchEnabled = !0, this.startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this));
            this.touchEnabled = !0
        };
        d.prototype.loop = function(b) {};
        d.prototype.onTouchBegin = function(b) {
            b.target.parent && b.target.parent.removeChild(b.target);
            b = new egret.Event("click_info_btn", !0);
            this.dispatchEvent(b)
        };
        return d
    }(egret.Sprite);
HomePage.prototype.__class__ = "HomePage";
var __extends = this.__extends || function(c, d) {
        function b() {
            this.constructor = c
        }
        for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
        b.prototype = d.prototype;
        c.prototype = new b
    },
    QiandaoPanel = function(c) {
        function d() {
            c.call(this);
            this.currentColumn = this.currentRow = this.stageH = this.stageW = 0;
            this.numRow = 5;
            this.numColumn = 6;
            this.spaceV = this.spaceH = 70;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.ats, this)
        }
        __extends(d, c);
        d.prototype.ats = function(b) {
            b = XiaobinTool.createBitmapByName("kqb_png");
            this.addChild(b);
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            b = XiaobinTool.createBitmapByName("close_btn_png");
            this.addChild(b);
            b.x = this.stageW - b.width - 20;
            b.y = 110;
            b.scaleX = b.scaleY = 0.5;
            b.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touch_Close, this);
            b.touchEnabled = !0;
            for (b = 0; b < this.numRow * this.numColumn; b++) {
                this.currentRow = Math.floor(b / this.numColumn);
                this.currentColumn = b - this.currentRow * this.numColumn;
                this.qianBm = 0 == (b + 1) % 5 ? XiaobinTool.createBitmapByName("qian_yes_png") : XiaobinTool.createBitmapByName("qian_no_png");
                this.addChild(this.qianBm);
                this.qianBm.x = 40 + this.currentColumn * this.spaceH;
                this.qianBm.y = 160 + this.currentRow * this.spaceV;
                this.qianBm.scaleX = this.qianBm.scaleY = 1;
                var a = new egret.TextField;
                this.addChild(a);
                a.text = (b + 1).toString();
                a.x = this.qianBm.x + 8;
                a.y = this.qianBm.y + 10;
                10 > b + 1 && (a.x += 8)
            }
            var c = (new Date).getDate();
            console.info("当前日期:" + c);
            30 < c && (c = 30);
            b = GameSystem.CUR_DATE;
            a = egret.localStorage.getItem(b);
            console.info("原有签到日期 = " + a);
            null == egret.localStorage.getItem(b) ?
                (GameSystem.curQian = 1, a = GameSystem.curQian.toString(), egret.localStorage.setItem(b, a)) : GameSystem.curQian = parseInt(a);
            a = XiaobinTool.createBitmapByName("face_png");
            this.addChild(a);
            var d = GameSystem.curQian - 1;
            this.currentRow = Math.floor(d / this.numColumn);
            this.currentColumn = d - this.currentRow * this.numColumn;
            a.x = 40 + this.currentColumn * this.spaceH;
            a.y = 160 + this.currentRow * this.spaceV;
            c == GameSystem.curQian ? console.info("今日已签~") : (GameSystem.curQian = c, console.info("签到成功!! = " +
                GameSystem.curQian), d = c - 1, c = Math.floor(d / this.numColumn), d = 40 + (d - c * this.numColumn) * this.spaceH, c = 160 + c * this.spaceV, egret.Tween.get(a).to({
                x: d,
                y: c
            }, 1E3), GameSystem.curGold += 10, a = new egret.Event(GameSystem.QIAN_SUCCESS, !0), this.dispatchEvent(a));
            a = GameSystem.curQian.toString();
            egret.localStorage.setItem(b, a)
        };
        d.prototype.touch_Close = function(b) {
            b.target.parent && b.target.parent.removeChild(b.target);
            this.parent && this.parent.removeChild(this);
            GameSystem.showQiandao = !1
        };
        d.prototype.loop = function(b) {};
        return d
    }(egret.Sprite);
QiandaoPanel.prototype.__class__ = "QiandaoPanel";
var __extends = this.__extends || function(c, d) {
        function b() {
            this.constructor = c
        }
        for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
        b.prototype = d.prototype;
        c.prototype = new b
    },
    ShopPanel = function(c) {
        function d() {
            c.call(this);
            this.stageH = this.stageW = 0;
            this.btnArr = [];
            this.canPay = !1;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.ats, this)
        }
        __extends(d, c);
        d.prototype.ats = function(b) {
            this.shopBg = XiaobinTool.createBitmapByName("shop_bg_png");
            this.addChild(this.shopBg);
            this.shopBg.x = 0;
            for (b = this.shopBg.y = 0; 5 >
                b; b++) {
                var a = new PayItemBtn;
                this.addChild(a);
                a.x = 300 + a.width / 2;
                a.y = 140 + (a.height + 22) * b + a.height / 2;
                a.t.text = GameSystem.payItemArr[b].toString();
                a.name = "payBtn" + (b + 1);
                !0 == GameSystem.havePayArr[b] && (a.visible = !1);
                this.btnArr.push(a)
            }
            this.touchEnabled = !0;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.tb, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.te, this)
        };
        d.prototype.tb = function(b) {};
        d.prototype.te = function(b) {
            for (var a = 0; a < this.btnArr.length; a++)
                if (this.btnArr[a].scaleX = this.btnArr[a].scaleY =
                    1, this.btnArr[a].hitTestPoint(b.stageX, b.stageY)) {
                    var c = b.target.name;
                    "pay" == c.slice(0, 3) && (this.getToolNum = c.slice(6), console.log(this.getToolNum), this.checkGoldValue(parseInt(this.getToolNum) - 1), this.canPay ? this.checkClickTool(parseInt(this.getToolNum)) : console.log("金币不足"))
                }
        };
        d.prototype.checkGoldValue = function(b) {
            GameSystem.curGold >= GameSystem.payItemArr[b] ? (console.log("可以购买"), this.canPay = !0) : this.canPay = !1
        };
        d.prototype.checkClickTool = function(b) {
            this.getChildByName("payBtn" +
                b).visible = !1;
            GameSystem.curGold -= GameSystem.payItemArr[b - 1];
            GameSystem.havePayArr[b - 1] = !0;
            var a = new egret.Event(GameSystem.PAY_SUCCESS, !0);
            this.dispatchEvent(a);
            switch (b) {
                case 1:
                    console.log("购买道具1");
                    GameSystem.moneyTimers = 3;
                    break;
                case 2:
                    console.log("道具2");
                    GameSystem.gameTime = 230;
                    break;
                case 3:
                    console.log("道具3");
                    GameSystem.doubleScore = !0;
                    break;
                case 4:
                    console.log("道具4");
                    GameSystem.superDoubleScore = !0;
                    break;
                case 5:
                    console.log("道具5"), GameSystem.tenScore = !0
            }
        };
        d.prototype.loop = function(b) {};
        return d
    }(egret.Sprite);
ShopPanel.prototype.__class__ = "ShopPanel";
var __extends = this.__extends || function(c, d) {
        function b() {
            this.constructor = c
        }
        for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
        b.prototype = d.prototype;
        c.prototype = new b
    },
    InGame = function(c) {
        function d() {
            c.call(this);
            this.stageH = this.stageW = 0;
            this.gameOver = !1;
            this.touchY = this.touchX = 0;
            this.itemArr = [];
            this.itemFrameArr = ["mi_1", "mi_2", "mi_3", "mi_4"];
            this.itemFrameInitArr = ["mi_1", "mi_2", "mi_3", "mi_4"];
            this.queueItemArr = [];
            this.showDataArr = [];
            this.queueFrameArr = [];
            this.queueFrameInitArr = [];
            this.moveTime = 200;
            this.moving = !1;
            this.shakeTime = this.clickYesCount = 0;
            this.maxShakeTime = 30;
            this.itemStartY = 180;
            this.space = 45;
            this.powerCount = this.timeCostCount = 0;
            this.bigger = 10;
            this.inPower = !1;
            this.fastTime = 60;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.ats, this)
        }
        __extends(d, c);
        d.prototype.ats = function(b) {
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            this.touchEnabled = !0;
            this.addEventListener(egret.Event.ENTER_FRAME, this.loop, this);
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,
                this.onTouchBegin, this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.gameTimer = new egret.Timer(100);
            this.gameTimer.addEventListener(egret.TimerEvent.TIMER, this.costTime, this);
            this.gameTimer.start();
            this.powerTimer = new egret.Timer(5E3, 1);
            this.powerTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.powerOver, this);
            this.initGame()
        };
        d.prototype.powerOver = function() {
            this.inPower = !1;
            this.powerMc.gotoAndStop("blank")
        };
        d.prototype.costTime = function() {
            if (0 < GameSystem.gameTime &&
                (this.timeCostCount += 1, GameSystem.gameTime -= GameSystem.costTimeSpeed, this.gameSystemPanel.setTimeMasker(GameSystem.gameTime), 0 == GameSystem.gameTime)) {
                this.gameTimer.removeEventListener(egret.TimerEvent.TIMER, this.costTime, this);
                console.info("gameOver = " + this.timeCostCount);
                var b = XiaobinTool.createBitmapByName("timeUp_png");
                this.addChild(b);
                b.anchorOffsetX = b.width / 2;
                b.anchorOffsetY = b.height / 2;
                b.x = this.stageW / 2;
                b.y = 300;
                b.scaleX = b.scaleY = 0.1;
                egret.Tween.get(b).to({
                    scaleX: 1,
                    scaleY: 1
                }, 500, egret.Ease.backOut);
                this.gameOver = !0;
                b = new egret.Timer(2E3, 1);
                b.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.makeGameOver, this);
                b.start();
                this.timeOverSound.play()
            }
        };
        d.prototype.initGame = function() {
            this.curNum = 2;
            this.clickTime = this.fastTime;
            this.creatBg();
            this.creatLookItem();
            this.showItem();
            this.creatButtons();
            this.makeQueue();
            this.updateQueue();
            this.makeTimer();
            this.creatGameSystemPanel();
            this.creatMusic();
            this.creatSmokeMc();
            this.makePowerMc()
        };
        d.prototype.creatSmokeMc = function() {
            var b = this.queueItemArr.length -
                1;
            this.smokeMc = XiaobinTool.creatMovieClip("smoke_json", "smoke_png", "blank");
            this.addChild(this.smokeMc);
            this.smokeMc.x = this.stageW / 2;
            this.smokeMc.y = this.queueItemArr[b].y;
            this.smokeMc.frameRate = 30
        };
        d.prototype.makePowerMc = function() {
            this.powerMc = XiaobinTool.creatMovieClip("powerMc_json", "powerMc_png", "blank");
            this.addChild(this.powerMc);
            this.powerMc.x = this.stageW / 2;
            this.powerMc.y = this.stageH / 2;
            this.powerMc.frameRate = 30
        };
        d.prototype.creatMusic = function() {
            this.bgMusic = RES.getRes("mscNormal");
            this.bgMusic.play();
            this.bgMusic.addEventListener("ended", this.rePlay.bind(this));
            this.wSound = RES.getRes("sndFail");
            this.ySound1 = RES.getRes("sndSucc1");
            this.ySound2 = RES.getRes("sndSucc2");
            this.ySound3 = RES.getRes("sndSucc3");
            this.timeOverSound = RES.getRes("sndOver")
        };
        d.prototype.rePlay = function() {
            this.bgMusic.load();
            this.bgMusic.play()
        };
        d.prototype.creatGameSystemPanel = function() {
            this.gameSystemPanel = new GameSystem;
            this.addChild(this.gameSystemPanel)
        };
        d.prototype.makeTimer = function() {
            this.timer = new egret.Timer(this.moveTime +
                10, 1);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this)
        };
        d.prototype.timerComFunc = function() {
            console.log("计时结束");
            this.tweenComplete()
        };
        d.prototype.updateQueue = function() {
            for (var b = 0; 7 > b; b++) this.queueItemArr[b].gotoAndStop(this.showDataArr[b]);
            b = this.queueItemArr.length - 1;
            this.queueItemArr[b].gotoAndStop("y" + this.showDataArr[b])
        };
        d.prototype.makeQueue = function() {
            for (var b = 0; 7 > b; b++) {
                var a = XiaobinTool.makeRandomFromArr(this.queueFrameArr, this.queueFrameInitArr).toString();
                this.showDataArr.push(a)
            }
            console.log("this.showDataArr = " + this.showDataArr);
            for (b = 0; 7 > b; b++) a = XiaobinTool.creatMovieClip("item_json", "item_png", "blank"), this.addChild(a), a.x = this.stageW / 2, a.y = this.itemStartY + b * (2.5 * b + this.space), a.scaleX = a.scaleY = (b + 4) / this.bigger, this.queueItemArr.push(a)
        };
        d.prototype.creatButtons = function() {
            this.leftBtn = XiaobinTool.creatMovieClip("left_btn_json", "left_btn_png", "left_btn_yes");
            this.addChild(this.leftBtn);
            this.leftBtn.x = this.leftBtn.width / 2 + 10;
            this.leftBtn.y = 640;
            this.leftBtn.touchEnabled = !0;
            this.rightBtn = XiaobinTool.creatMovieClip("right_btn_json", "right_btn_png", "right_btn_yes");
            this.addChild(this.rightBtn);
            this.rightBtn.x = this.stageW - this.rightBtn.width / 2 - 10;
            this.rightBtn.y = 640;
            this.rightBtn.touchEnabled = !0
        };
        d.prototype.creatLookItem = function() {
            for (var b = 0; 4 > b; b++) {
                var a = XiaobinTool.creatMovieClip("item_json", "item_png", "blank");
                this.addChild(a);
                switch (b) {
                    case 0:
                        a.x = 50;
                        a.y = 500;
                        break;
                    case 1:
                        a.x = this.stageW - 50;
                        a.y = 500;
                        break;
                    case 2:
                        a.x = 50;
                        a.y = 300;
                        break;
                    case 3:
                        a.x =
                            this.stageW - 50, a.y = 300
                }
                this.itemArr.push(a)
            }
        };
        d.prototype.showItem = function() {
            if (2 == this.curNum) {
                var b = XiaobinTool.makeRandomFromArr(this.itemFrameArr, this.itemFrameInitArr).toString(),
                    a = XiaobinTool.makeRandomFromArr(this.itemFrameArr, this.itemFrameInitArr).toString();
                this.itemArr[0].gotoAndStop(b);
                this.itemArr[1].gotoAndStop(a);
                this.itemArr[0].x += 30;
                this.itemArr[1].x -= 30;
                this.itemArr[0].scaleX = this.itemArr[0].scaleY = 0.8;
                this.itemArr[1].scaleX = this.itemArr[1].scaleY = 0.8;
                this.queueFrameArr.push(b,
                    a);
                this.queueFrameInitArr.push(b, a)
            }
        };
        d.prototype.creatBg = function() {
            this.bg = XiaobinTool.createBitmapByName("bg_jpg");
            this.addChild(this.bg)
        };
        d.prototype.makeGameOver = function() {
            GameSystem.getGold = Math.floor(this.gameSystemPanel.scoreNum / 10);
            GameSystem.curGold += Math.floor(this.gameSystemPanel.scoreNum / 10);
            console.log("获得金币:" + GameSystem.getGold);
            var b = GameSystem.curGold.toString();
            egret.localStorage.setItem(GameSystem.CUR_GOLD, b);
            console.info("保存!总共金币 = " +
                b);
            GameSystem.curScore = this.gameSystemPanel.scoreNum;
            b = new GameOverPanel;
            this.addChild(b);
            // 0 < this.gameSystemPanel.scoreNum && ih5game.setScoreWithName(this.gameSystemPanel.scoreNum);
            // ih5game.share();
            // ih5game.setShare({
            //     title: "有钱就任性2圣诞版",
            //     desc: "圣诞节任性了？，我得到" + this.gameSystemPanel.scoreNum + "分,不想没钱认命的快来挑战!"
            // })
        };
        d.prototype.onTouchBegin = function(b) {
            this.touchX = b.stageX;
            this.touchY = b.stageY;
            if (!0 != this.gameOver && 0 == this.shakeTime && !1 == this.moving)
                if ("mi_5" == this.showDataArr[this.showDataArr.length - 1]) this.doClickYes();
                else if (b.target == this.leftBtn || b.target == this.rightBtn) {
                switch (b.target) {
                    case this.leftBtn:
                        this.clickBtnNum = 0;
                        break;
                    case this.rightBtn:
                        this.clickBtnNum = 1
                }
                b.target.scaleX = b.target.scaleY = 0.85;
                this.checkValue()
            }
        };
        d.prototype.checkValue = function() {
            var b = this.showDataArr[this.showDataArr.length - 1];
            console.log(b);
            console.log(this.queueFrameInitArr[this.clickBtnNum]);
            b == this.queueFrameInitArr[this.clickBtnNum] ||
                b == this.queueFrameInitArr[this.clickBtnNum + 2] ? (console.log(" YES CLICK ! "), this.doClickYes()) : (console.log(" NO CLICK ! "), this.clickTime = 0, this.wSound.play(), this.shakeTime = this.maxShakeTime, b = this.queueItemArr.length - 1, this.queueItemArr[b].gotoAndStop("w" + this.showDataArr[b]))
        };
        d.prototype.doClickYes = function() {
            0.3 > Math.random() ? this.ySound1.play() : 0.6 > Math.random() ? this.ySound2.play() : this.ySound3.play();
            !0 == this.inPower ? this.clickYesCount += 2 : this.clickYesCount++;
            !0 == GameSystem.doubleScore && !1 ==
                this.inPower && this.clickYesCount++;
            !0 == GameSystem.superDoubleScore && !0 == this.inPower && (this.clickYesCount += 2);
            !0 == GameSystem.tenScore && 0.2 < Math.random() && !1 == this.inPower && (this.clickYesCount += 9);
            this.gameSystemPanel.scoreNum = 10 * this.clickYesCount;
            this.gameSystemPanel.updateScoreTxt();
            this.powerCount++;
            this.gameSystemPanel.powerContentWidth = 10 * this.powerCount;
            this.gameSystemPanel.setPowerMasker(this.gameSystemPanel.powerContentWidth);
            180 < this.gameSystemPanel.powerContentWidth && (this.gameSystemPanel.powerContentWidth =
                0, this.gameSystemPanel.setPowerMasker(this.gameSystemPanel.powerContentWidth), this.powerCount = 0, this.powerTimer.start(), this.inPower = !0, this.powerMc.gotoAndPlay("showPower"));
            this.checkAddItem();
            this.queueItemArr[this.queueItemArr.length - 1].gotoAndStop("blank");
            this.smokeMc.gotoAndPlay("playSmoke");
            0 < this.clickTime && this.creatCombo();
            this.clickTime = this.fastTime;
            this.makeTween();
            this.moving = !0
        };
        d.prototype.creatCombo = function() {
            var b = XiaobinTool.createBitmapByName("combo_png");
            this.addChild(b);
            b.anchorOffsetX =
                b.width / 2;
            b.x = this.stageW / 2;
            b.y = this.queueItemArr[this.queueItemArr.length - 1].y;
            b.scaleX = b.scaleY = 0.1;
            b.rotation = 0;
            b.alpha = 0;
            egret.Tween.get(b).to({
                y: b.y - 20 * Math.random(),
                scaleX: 1,
                scaleY: 1,
                rotation: -15 + 30 * Math.random(),
                alpha: 1
            }, 300, egret.Ease.backOut).call(this.comboOver, this, [b])
        };
        d.prototype.comboOver = function(b) {
            b.parent && b.parent.removeChild(b)
        };
        d.prototype.checkAddItem = function() {
            if (5 == this.clickYesCount) {
                this.curNum++;
                var b = XiaobinTool.makeRandomFromArr(this.itemFrameArr, this.itemFrameInitArr).toString();
                this.itemArr[2].gotoAndStop(b);
                this.itemArr[2].scaleX = 0.8;
                this.itemArr[2].scaleY = 0.8;
                this.itemArr[2].x += 30;
                this.queueFrameArr.push(b);
                this.queueFrameInitArr.push(b)
            }
            10 == this.clickYesCount && (this.curNum++, b = XiaobinTool.makeRandomFromArr(this.itemFrameArr, this.itemFrameInitArr).toString(), this.itemArr[3].gotoAndStop(b), this.itemArr[3].scaleX = 0.8, this.itemArr[3].scaleY = 0.8, this.itemArr[3].x -= 30, this.queueFrameArr.push(b), this.queueFrameInitArr.push(b))
        };
        d.prototype.makeTween = function() {
            for (var b = 0; 6 >
                b; b++) {
                var a = this.queueItemArr[b + 1];
                egret.Tween.get(this.queueItemArr[b]).to({
                    x: a.x,
                    y: a.y,
                    scaleX: a.scaleX,
                    scaleY: a.scaleY
                }, this.moveTime, egret.Ease.backOut);
                this.timer.start()
            }
        };
        d.prototype.tweenComplete = function() {
            console.log("移动完成");
            this.moving = !1;
            this.smokeMc.gotoAndStop("blank");
            for (var b = 0; 6 > b; b++) {
                var a = this.queueItemArr[b];
                a.x = this.stageW / 2;
                a.y = this.itemStartY + b * (2.5 * b + this.space);
                a.scaleX = a.scaleY = (b + 4) / this.bigger
            }
            this.makeNextData();
            this.updateQueue()
        };
        d.prototype.makeNextData =
            function() {
                this.showDataArr.pop();
                if (0 == this.clickYesCount % GameSystem.moneyTimers) this.showDataArr.unshift("mi_5");
                else {
                    var b = XiaobinTool.makeRandomFromArr(this.queueFrameArr, this.queueFrameInitArr).toString();
                    this.showDataArr.unshift(b)
                }
            };
        d.prototype.onTouchEnd = function(b) {
            this.touchX = b.stageX;
            this.touchY = b.stageY;
            this.leftBtn.scaleX = this.leftBtn.scaleY = 1;
            this.rightBtn.scaleX = this.rightBtn.scaleY = 1
        };
        d.prototype.loop = function(b) {
            0 < this.clickTime && this.clickTime--;
            0 < this.shakeTime ? (this.shakeTime--,
                this.queueItemArr[this.queueItemArr.length - 1].x = this.stageW / 2 + (-this.shakeTime / 2 + this.shakeTime * Math.random()), 1 == this.shakeTime && (b = this.queueItemArr.length - 1, this.queueItemArr[b].gotoAndStop("y" + this.showDataArr[b]))) : this.shakeTime = 0
        };
        return d
    }(egret.Sprite);
InGame.prototype.__class__ = "InGame";
var __extends = this.__extends || function(c, d) {
        function b() {
            this.constructor = c
        }
        for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
        b.prototype = d.prototype;
        c.prototype = new b
    },
    Info = function(c) {
        function d() {
            c.call(this);
            this.stageH = this.stageW = 0;
            this.homePage = null;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.ats, this)
        }
        __extends(d, c);
        d.prototype.ats = function(b) {
            b = XiaobinTool.createBitmapByName("infoBg_jpg");
            this.addChild(b);
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            this.shopPanel =
                new ShopPanel;
            this.addChild(this.shopPanel);
            b = XiaobinTool.createBitmapByName("gold_png");
            this.addChild(b);
            b.x = 20;
            b.y = 10;
            b = new egret.TextField;
            this.addChild(b);
            b.text = GameSystem.curGold.toString();
            b.size = 26;
            b.textColor = 0;
            b.x = 120;
            b.y = 35;
            this.goldTxt = b;
            b = XiaobinTool.createBitmapByName("qiandao_png");
            this.addChild(b);
            b.x = this.stageW - b.width / 2 - 20;
            b.y = b.height / 2 + 20;
            b.touchEnabled = !0;
            b.anchorOffsetX = b.width / 2;
            b.anchorOffsetY = b.height / 2;
            b.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touch_qiandao, this);
            b.addEventListener(egret.TouchEvent.TOUCH_END, this.touch_end, this);
            null == this.homePage && (this.startBtn = new StartBtn, this.addChild(this.startBtn), this.startBtn.x = (this.stageW - this.startBtn.width) / 2, this.startBtn.y = this.stageH - 150, this.startBtn.touchEnabled = !0, this.startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this));
            this.touchEnabled = !0;
            this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.touch_stage_end, this);
            this.addEventListener(GameSystem.PAY_SUCCESS, this.updateGold,
                this);
            this.addEventListener(GameSystem.QIAN_SUCCESS, this.updateGold, this)
        };
        d.prototype.updateGold = function(b) {
            this.goldTxt.text = GameSystem.curGold.toString();
            b = GameSystem.curGold.toString();
            // ih5game.storage.set(GameSystem.CUR_GOLD, b, true);
            console.info("保存!总共金币 = " + b)
        };
        d.prototype.touch_addGold = function(b) {};
        d.prototype.onTouchBegin = function(b) {
            b.target.parent && b.target.parent.removeChild(b.target);
            b = new egret.Event("click_start_btn", !0);
            this.dispatchEvent(b)
        };
        d.prototype.touch_qiandao =
            function(b) {
                b.target.scaleX = b.target.scaleY = 0.8
            };
        d.prototype.touch_stage_end = function(b) {
            !1 == GameSystem.showQiandao && (this.shopPanel.visible = !0)
        };
        d.prototype.touch_end = function(b) {
            b.target.scaleX = b.target.scaleY = 1;
            !1 == GameSystem.showQiandao && (GameSystem.showQiandao = !0, this.qiandaoPanel = new QiandaoPanel, this.addChild(this.qiandaoPanel), this.shopPanel.visible = !1)
        };
        d.prototype.loop = function(b) {};
        return d
    }(egret.Sprite);
Info.prototype.__class__ = "Info";
var __extends = this.__extends || function(c, d) {
        function b() {
            this.constructor = c
        }
        for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
        b.prototype = d.prototype;
        c.prototype = new b
    },
    LoadingUI = function(c) {
        function d() {
            c.call(this);
            this.createView()
        }
        __extends(d, c);
        d.prototype.createView = function() {
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.loadConfig("resource/resourceGame.json", "resource/");
            this.textField = new egret.TextField
        };
        d.prototype.setProgress = function(b, a) {
            this.textField.text =
                "Loading..." + Math.floor(b / a * 100) + "%";
            this.shape && (this.shape.graphics.beginFill(3355443, 1), this.shape.graphics.drawRect(0, 650, b / a * 480, 10), this.shape.graphics.endFill())
        };
        d.prototype.onConfigComplete = function(b) {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.loadGroup("preloadGame")
        };
        d.prototype.onResourceLoadComplete = function(b) {
            "preloadGame" == b.groupName && (RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,
                this.onResourceLoadComplete, this), this.createPic(), this.createText(), this.createShape())
        };
        d.prototype.createShape = function() {
            this.shape = new egret.Shape;
            this.addChild(this.shape)
        };
        d.prototype.createText = function() {
            this.addChild(this.textField);
            this.textField.y = 600;
            this.textField.width = 480;
            this.textField.height = 100;
            this.textField.size = 25;
            this.textField.textColor = 3355443;
            this.textField.textAlign = "center"
        };
        d.prototype.createPic = function() {
            this.pic = XiaobinTool.createBitmapByName("homepage_jpg");
            this.addChild(this.pic)
        };
        d.prototype.createMc = function() {
            this.mc = XiaobinTool.creatMovieClip("hero_json", "hero_png", "wait");
            this.addChild(this.mc)
        };
        return d
    }(egret.Sprite);
LoadingUI.prototype.__class__ = "LoadingUI";
var __extends = this.__extends || function(c, d) {
        function b() {
            this.constructor = c
        }
        for (var a in d) d.hasOwnProperty(a) && (c[a] = d[a]);
        b.prototype = d.prototype;
        c.prototype = new b
    },
    MainGame = function(c) {
        function d() {
            c.call(this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
        }
        __extends(d, c);
        d.prototype.onAddToStage = function(b) {
            this.loadingView = new LoadingUI;
            this.stage.addChild(this.loadingView);
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.loadConfig("resource/resourceGame.json",
                "resource/")
        };
        d.prototype.onConfigComplete = function(b) {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.loadGroup("preloadGame")
        };
        d.prototype.onResourceLoadComplete = function(b) {
            "preloadGame" == b.groupName && RES.loadGroup("buttons");
            "buttons" == b.groupName && RES.loadGroup("pics");
            "pics" == b.groupName &&
                (this.stage.removeChild(this.loadingView), RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, 

                    this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, 

                    this.onResourceProgress, this), this.loadData(), this.createGameScene()

                 )
        };
        d.prototype.onResourceProgress = function(b) {
            this.loadingView.setProgress(b.itemsLoaded,
                b.itemsTotal)
        };
        d.prototype.loadData = function() {
            var b = GameSystem.CUR_GOLD;
            // console.info("金币 = " + ih5game.storage.get(b));
            // null == ih5game.storage.get(b) ? (GameSystem.curGold = 0, ih5game.storage.set(b, GameSystem.curGold.toString(), true)) : (b = ih5game.storage.get(b), GameSystem.curGold = parseInt(b))
        };
        d.prototype.createGameScene = function() {
            null == this.homepage && (this.homepage = new HomePage);
            this.addChild(this.homepage);
            this.addEventListener("click_start_btn", this.createIngame, this);
            this.addEventListener("click_info_btn", this.createInfo, this);
            this.addEventListener("click_replay_btn", this.doReplay, this);
            this.addEventListener("click_home_btn", this.doHome, this)
        };
        d.prototype.doHome = function() {
            null != this.ingame && (this.removeChild(this.ingame), this.ingame = null);
            this.createInfo()
        };
        d.prototype.doReplay = function() {
            null != this.ingame && (this.removeChild(this.ingame), this.ingame = null);
            null == this.ingame && (this.ingame = new InGame, this.addChild(this.ingame))
        };
        d.prototype.createIngame = function() {
            console.log("createIngame");
            null != this.homepage && (this.removeChild(this.homepage), this.homepage = null);
            null != this.info && (this.removeChild(this.info), this.info = null);
            null == this.ingame && (this.ingame = new InGame, this.addChild(this.ingame))
        };
        d.prototype.createInfo = function() {
            console.log("createInfo");
            null != this.homepage && (this.removeChild(this.homepage), this.homepage = null);
            null != this.ingame && (this.removeChild(this.ingame), this.ingame = null);
            null == this.info && (this.info = new Info, this.addChild(this.info))
        };
        return d
    }(egret.DisplayObjectContainer);
MainGame.prototype.__class__ = "MainGame";