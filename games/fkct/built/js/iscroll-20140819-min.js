! function(window, document, Math) {
    function IScroll(el, options) {
        this.wrapper = "string" == typeof el ? document.querySelector(el) : el, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0
        };
        for (var i in options) this.options[i] = options[i];
        this.translateZ = this.options.HWCompositing && utils.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = utils.hasTransition && this.options.useTransition, this.options.useTransform = utils.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY, this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
    }

    function createDefaultScrollbar(direction, interactive, type) {
        var scrollbar = document.createElement("div"),
            indicator = document.createElement("div");
        return type === !0 && (scrollbar.style.cssText = "position:absolute;z-index:9999", indicator.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), indicator.className = "iScrollIndicator", "h" == direction ? (type === !0 && (scrollbar.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", indicator.style.height = "100%"), scrollbar.className = "iScrollHorizontalScrollbar") : (type === !0 && (scrollbar.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", indicator.style.width = "100%"), scrollbar.className = "iScrollVerticalScrollbar"), scrollbar.style.cssText += ";overflow:hidden", interactive || (scrollbar.style.pointerEvents = "none"), scrollbar.appendChild(indicator), scrollbar
    }

    function Indicator(scroller, options) {
        this.wrapper = "string" == typeof options.el ? document.querySelector(options.el) : options.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = scroller, this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var i in options) this.options[i] = options[i];
        this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (utils.addEvent(this.indicator, "touchstart", this), utils.addEvent(window, "touchend", this)), this.options.disablePointer || (utils.addEvent(this.indicator, utils.prefixPointerEvent("pointerdown"), this), utils.addEvent(window, utils.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (utils.addEvent(this.indicator, "mousedown", this), utils.addEvent(window, "mouseup", this))), this.options.fade && (this.wrapperStyle[utils.style.transform] = this.scroller.translateZ, this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? "0.001s" : "0ms", this.wrapperStyle.opacity = "0")
    }
    var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            window.setTimeout(callback, 1e3 / 60)
        },
        utils = function() {
            function _prefixStyle(style) {
                return _vendor === !1 ? !1 : "" === _vendor ? style : _vendor + style.charAt(0).toUpperCase() + style.substr(1)
            }
            var me = {},
                _elementStyle = document.createElement("div").style,
                _vendor = function() {
                    for (var transform, vendors = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, l = vendors.length; l > i; i++)
                        if (transform = vendors[i] + "ransform", transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
                    return !1
                }();
            me.getTime = Date.now || function() {
                return (new Date).getTime()
            }, me.extend = function(target, obj) {
                for (var i in obj) target[i] = obj[i]
            }, me.addEvent = function(el, type, fn, capture) {
                el.addEventListener(type, fn, !!capture)
            }, me.removeEvent = function(el, type, fn, capture) {
                el.removeEventListener(type, fn, !!capture)
            }, me.prefixPointerEvent = function(pointerEvent) {
                return window.MSPointerEvent ? "MSPointer" + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10) : pointerEvent
            }, me.momentum = function(current, start, time, lowerMargin, wrapperSize, deceleration) {
                var destination, duration, distance = current - start,
                    speed = Math.abs(distance) / time;
                return deceleration = void 0 === deceleration ? 6e-4 : deceleration, destination = current + speed * speed / (2 * deceleration) * (0 > distance ? -1 : 1), duration = speed / deceleration, lowerMargin > destination ? (destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin, distance = Math.abs(destination - current), duration = distance / speed) : destination > 0 && (destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0, distance = Math.abs(current) + destination, duration = distance / speed), {
                    destination: Math.round(destination),
                    duration: duration
                }
            };
            var _transform = _prefixStyle("transform");
            return me.extend(me, {
                hasTransform: _transform !== !1,
                hasPerspective: _prefixStyle("perspective") in _elementStyle,
                hasTouch: "ontouchstart" in window,
                hasPointer: window.PointerEvent || window.MSPointerEvent,
                hasTransition: _prefixStyle("transition") in _elementStyle
            }), me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !/Chrome\/\d/.test(window.navigator.appVersion), me.extend(me.style = {}, {
                transform: _transform,
                transitionTimingFunction: _prefixStyle("transitionTimingFunction"),
                transitionDuration: _prefixStyle("transitionDuration"),
                transitionDelay: _prefixStyle("transitionDelay"),
                transformOrigin: _prefixStyle("transformOrigin")
            }), me.hasClass = function(e, c) {
                var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
                return re.test(e.className)
            }, me.addClass = function(e, c) {
                if (!me.hasClass(e, c)) {
                    var newclass = e.className.split(" ");
                    newclass.push(c), e.className = newclass.join(" ")
                }
            }, me.removeClass = function(e, c) {
                if (me.hasClass(e, c)) {
                    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
                    e.className = e.className.replace(re, " ")
                }
            }, me.offset = function(el) {
                for (var left = -el.offsetLeft, top = -el.offsetTop; el = el.offsetParent;) left -= el.offsetLeft, top -= el.offsetTop;
                return {
                    left: left,
                    top: top
                }
            }, me.preventDefaultException = function(el, exceptions) {
                for (var i in exceptions)
                    if (exceptions[i].test(el[i])) return !0;
                return !1
            }, me.extend(me.eventType = {}, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                mousedown: 2,
                mousemove: 2,
                mouseup: 2,
                pointerdown: 3,
                pointermove: 3,
                pointerup: 3,
                MSPointerDown: 3,
                MSPointerMove: 3,
                MSPointerUp: 3
            }), me.extend(me.ease = {}, {
                quadratic: {
                    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    fn: function(k) {
                        return k * (2 - k)
                    }
                },
                circular: {
                    style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                    fn: function(k) {
                        return Math.sqrt(1 - --k * k)
                    }
                },
                back: {
                    style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    fn: function(k) {
                        var b = 4;
                        return (k -= 1) * k * ((b + 1) * k + b) + 1
                    }
                },
                bounce: {
                    style: "",
                    fn: function(k) {
                        return (k /= 1) < 1 / 2.75 ? 7.5625 * k * k : 2 / 2.75 > k ? 7.5625 * (k -= 1.5 / 2.75) * k + .75 : 2.5 / 2.75 > k ? 7.5625 * (k -= 2.25 / 2.75) * k + .9375 : 7.5625 * (k -= 2.625 / 2.75) * k + .984375
                    }
                },
                elastic: {
                    style: "",
                    fn: function(k) {
                        var f = .22,
                            e = .4;
                        return 0 === k ? 0 : 1 == k ? 1 : e * Math.pow(2, -10 * k) * Math.sin(2 * (k - f / 4) * Math.PI / f) + 1
                    }
                }
            }), me.tap = function(e, eventName) {
                var ev = document.createEvent("Event");
                ev.initEvent(eventName, !0, !0), ev.pageX = e.pageX, ev.pageY = e.pageY, e.target.dispatchEvent(ev)
            }, me.click = function(e) {
                var ev, target = e.target;
                /(SELECT|INPUT|TEXTAREA)/i.test(target.tagName) || (ev = document.createEvent("MouseEvents"), ev.initMouseEvent("click", !0, !0, e.view, 1, target.screenX, target.screenY, target.clientX, target.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), ev._constructed = !0, target.dispatchEvent(ev))
            }, me
        }();
    IScroll.prototype = {
        version: "5.1.2",
        _init: function() {
            this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0), this._execEvent("destroy")
        },
        _transitionEnd: function(e) {
            e.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
        },
        _start: function(e) {
            if (!(1 != utils.eventType[e.type] && 0 !== e.button || !this.enabled || this.initiated && utils.eventType[e.type] !== this.initiated)) {
                !this.options.preventDefault || utils.isBadAndroid || utils.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
                var pos, point = e.touches ? e.touches[0] : e;
                this.initiated = utils.eventType[e.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = utils.getTime(), this.options.useTransition && this.isInTransition ? (this.isInTransition = !1, pos = this.getComputedPosition(), this._translate(Math.round(pos.x), Math.round(pos.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = point.pageX, this.pointY = point.pageY, this._execEvent("beforeScrollStart")
            }
        },
        _move: function(e) {
            if (this.enabled && utils.eventType[e.type] === this.initiated) {
                this.options.preventDefault && e.preventDefault();
                var newX, newY, absDistX, absDistY, point = e.touches ? e.touches[0] : e,
                    deltaX = point.pageX - this.pointX,
                    deltaY = point.pageY - this.pointY,
                    timestamp = utils.getTime();
                if (this.pointX = point.pageX, this.pointY = point.pageY, this.distX += deltaX, this.distY += deltaY, absDistX = Math.abs(this.distX), absDistY = Math.abs(this.distY), !(timestamp - this.endTime > 300 && 10 > absDistX && 10 > absDistY)) {
                    if (this.directionLocked || this.options.freeScroll || (this.directionLocked = absDistX > absDistY + this.options.directionLockThreshold ? "h" : absDistY >= absDistX + this.options.directionLockThreshold ? "v" : "n"), "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough) e.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                        deltaY = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough) e.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                        deltaX = 0
                    }
                    deltaX = this.hasHorizontalScroll ? deltaX : 0, deltaY = this.hasVerticalScroll ? deltaY : 0, newX = this.x + deltaX, newY = this.y + deltaY, (newX > 0 || newX < this.maxScrollX) && (newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX), (newY > 0 || newY < this.maxScrollY) && (newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY), this.directionX = deltaX > 0 ? -1 : 0 > deltaX ? 1 : 0, this.directionY = deltaY > 0 ? -1 : 0 > deltaY ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(newX, newY), timestamp - this.startTime > 300 && (this.startTime = timestamp, this.startX = this.x, this.startY = this.y)
                }
            }
        },
        _end: function(e) {
            if (this.enabled && utils.eventType[e.type] === this.initiated) {
                this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
                var momentumX, momentumY, duration = (e.changedTouches ? e.changedTouches[0] : e, utils.getTime() - this.startTime),
                    newX = Math.round(this.x),
                    newY = Math.round(this.y),
                    distanceX = Math.abs(newX - this.startX),
                    distanceY = Math.abs(newY - this.startY),
                    time = 0,
                    easing = "";
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = utils.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(newX, newY), !this.moved) return this.options.tap && utils.tap(e, this.options.tap), this.options.click && utils.click(e), void this._execEvent("scrollCancel");
                    if (this._events.flick && 200 > duration && 100 > distanceX && 100 > distanceY) return void this._execEvent("flick");
                    if (this.options.momentum && 300 > duration && (momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                        destination: newX,
                        duration: 0
                    }, momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                        destination: newY,
                        duration: 0
                    }, newX = momentumX.destination, newY = momentumY.destination, time = Math.max(momentumX.duration, momentumY.duration), this.isInTransition = 1), this.options.snap) {
                        var snap = this._nearestSnap(newX, newY);
                        this.currentPage = snap, time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1e3), Math.min(Math.abs(newY - snap.y), 1e3)), 300), newX = snap.x, newY = snap.y, this.directionX = 0, this.directionY = 0, easing = this.options.bounceEasing
                    }
                    return newX != this.x || newY != this.y ? ((newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) && (easing = utils.ease.quadratic), void this.scrollTo(newX, newY, time, easing)) : void this._execEvent("scrollEnd")
                }
            }
        },
        _resize: function() {
            var that = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                that.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function(time) {
            var x = this.x,
                y = this.y;
            return time = time || 0, !this.hasHorizontalScroll || this.x > 0 ? x = 0 : this.x < this.maxScrollX && (x = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? y = 0 : this.y < this.maxScrollY && (y = this.maxScrollY), x == this.x && y == this.y ? !1 : (this.scrollTo(x, y, time, this.options.bounceEasing), !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = utils.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
        },
        on: function(type, fn) {
            this._events[type] || (this._events[type] = []), this._events[type].push(fn)
        },
        off: function(type, fn) {
            if (this._events[type]) {
                var index = this._events[type].indexOf(fn);
                index > -1 && this._events[type].splice(index, 1)
            }
        },
        _execEvent: function(type) {
            if (this._events[type]) {
                var i = 0,
                    l = this._events[type].length;
                if (l)
                    for (; l > i; i++) this._events[type][i].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(x, y, time, easing) {
            x = this.x + x, y = this.y + y, time = time || 0, this.scrollTo(x, y, time, easing)
        },
        scrollTo: function(x, y, time, easing) {
            easing = easing || utils.ease.circular, this.isInTransition = this.options.useTransition && time > 0, !time || this.options.useTransition && easing.style ? (this._transitionTimingFunction(easing.style), this._transitionTime(time), this._translate(x, y)) : this._animate(x, y, time, easing.fn)
        },
        scrollToElement: function(el, time, offsetX, offsetY, easing) {
            if (el = el.nodeType ? el : this.scroller.querySelector(el)) {
                var pos = utils.offset(el);
                pos.left -= this.wrapperOffset.left, pos.top -= this.wrapperOffset.top, offsetX === !0 && (offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), offsetY === !0 && (offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), pos.left -= offsetX || 0, pos.top -= offsetY || 0, pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left, pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top, time = void 0 === time || null === time || "auto" === time ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time, this.scrollTo(pos.left, pos.top, time, easing)
            }
        },
        _transitionTime: function(time) {
            if (time = time || 0, this.scrollerStyle[utils.style.transitionDuration] = time + "ms", !time && utils.isBadAndroid && (this.scrollerStyle[utils.style.transitionDuration] = "0.001s"), this.indicators)
                for (var i = this.indicators.length; i--;) this.indicators[i].transitionTime(time)
        },
        _transitionTimingFunction: function(easing) {
            if (this.scrollerStyle[utils.style.transitionTimingFunction] = easing, this.indicators)
                for (var i = this.indicators.length; i--;) this.indicators[i].transitionTimingFunction(easing)
        },
        _translate: function(x, y) {
            if (this.options.useTransform ? this.scrollerStyle[utils.style.transform] = "translate(" + x + "px," + y + "px)" + this.translateZ : (x = Math.round(x), y = Math.round(y), this.scrollerStyle.left = x + "px", this.scrollerStyle.top = y + "px"), this.x = x, this.y = y, this.indicators)
                for (var i = this.indicators.length; i--;) this.indicators[i].updatePosition()
        },
        _initEvents: function(remove) {
            var eventType = remove ? utils.removeEvent : utils.addEvent,
                target = this.options.bindToWrapper ? this.wrapper : window;
            eventType(window, "orientationchange", this), eventType(window, "resize", this), this.options.click && eventType(this.wrapper, "click", this, !0), this.options.disableMouse || (eventType(this.wrapper, "mousedown", this), eventType(target, "mousemove", this), eventType(target, "mousecancel", this), eventType(target, "mouseup", this)), utils.hasPointer && !this.options.disablePointer && (eventType(this.wrapper, utils.prefixPointerEvent("pointerdown"), this), eventType(target, utils.prefixPointerEvent("pointermove"), this), eventType(target, utils.prefixPointerEvent("pointercancel"), this), eventType(target, utils.prefixPointerEvent("pointerup"), this)), utils.hasTouch && !this.options.disableTouch && (eventType(this.wrapper, "touchstart", this), eventType(target, "touchmove", this), eventType(target, "touchcancel", this), eventType(target, "touchend", this)), eventType(this.scroller, "transitionend", this), eventType(this.scroller, "webkitTransitionEnd", this), eventType(this.scroller, "oTransitionEnd", this), eventType(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var x, y, matrix = window.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (matrix = matrix[utils.style.transform].split(")")[0].split(", "), x = +(matrix[12] || matrix[4]), y = +(matrix[13] || matrix[5])) : (x = +matrix.left.replace(/[^-\d.]/g, ""), y = +matrix.top.replace(/[^-\d.]/g, "")), {
                x: x,
                y: y
            }
        },
        _initIndicators: function() {
            function _indicatorsMap(fn) {
                for (var i = that.indicators.length; i--;) fn.call(that.indicators[i])
            }
            var indicator, interactive = this.options.interactiveScrollbars,
                customStyle = "string" != typeof this.options.scrollbars,
                indicators = [],
                that = this;
            this.indicators = [], this.options.scrollbars && (this.options.scrollY && (indicator = {
                el: createDefaultScrollbar("v", interactive, this.options.scrollbars),
                interactive: interactive,
                defaultScrollbars: !0,
                customStyle: customStyle,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            }, this.wrapper.appendChild(indicator.el), indicators.push(indicator)), this.options.scrollX && (indicator = {
                el: createDefaultScrollbar("h", interactive, this.options.scrollbars),
                interactive: interactive,
                defaultScrollbars: !0,
                customStyle: customStyle,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            }, this.wrapper.appendChild(indicator.el), indicators.push(indicator))), this.options.indicators && (indicators = indicators.concat(this.options.indicators));
            for (var i = indicators.length; i--;) this.indicators.push(new Indicator(this, indicators[i]));
            this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                _indicatorsMap(function() {
                    this.fade()
                })
            }), this.on("scrollCancel", function() {
                _indicatorsMap(function() {
                    this.fade()
                })
            }), this.on("scrollStart", function() {
                _indicatorsMap(function() {
                    this.fade(1)
                })
            }), this.on("beforeScrollStart", function() {
                _indicatorsMap(function() {
                    this.fade(1, !0)
                })
            })), this.on("refresh", function() {
                _indicatorsMap(function() {
                    this.refresh()
                })
            }), this.on("destroy", function() {
                _indicatorsMap(function() {
                    this.destroy()
                }), delete this.indicators
            })
        },
        _initWheel: function() {
            utils.addEvent(this.wrapper, "wheel", this), utils.addEvent(this.wrapper, "mousewheel", this), utils.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                utils.removeEvent(this.wrapper, "wheel", this), utils.removeEvent(this.wrapper, "mousewheel", this), utils.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(e) {
            if (this.enabled) {
                e.preventDefault(), e.stopPropagation();
                var wheelDeltaX, wheelDeltaY, newX, newY, that = this;
                if (void 0 === this.wheelTimeout && that._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                    that._execEvent("scrollEnd"), that.wheelTimeout = void 0
                }, 400), "deltaX" in e) wheelDeltaX = -e.deltaX, wheelDeltaY = -e.deltaY;
                else if ("wheelDeltaX" in e) wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed, wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                else if ("wheelDelta" in e) wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
                else {
                    if (!("detail" in e)) return;
                    wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed
                } if (wheelDeltaX *= this.options.invertWheelDirection, wheelDeltaY *= this.options.invertWheelDirection, this.hasVerticalScroll || (wheelDeltaX = wheelDeltaY, wheelDeltaY = 0), this.options.snap) return newX = this.currentPage.pageX, newY = this.currentPage.pageY, wheelDeltaX > 0 ? newX-- : 0 > wheelDeltaX && newX++, wheelDeltaY > 0 ? newY-- : 0 > wheelDeltaY && newY++, void this.goToPage(newX, newY);
                newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0), newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0), newX > 0 ? newX = 0 : newX < this.maxScrollX && (newX = this.maxScrollX), newY > 0 ? newY = 0 : newY < this.maxScrollY && (newY = this.maxScrollY), this.scrollTo(newX, newY, 0)
            }
        },
        _initSnap: function() {
            this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                var l, n, cx, cy, y, el, i = 0,
                    m = 0,
                    x = 0,
                    stepX = this.options.snapStepX || this.wrapperWidth,
                    stepY = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (this.options.snap === !0)
                        for (cx = Math.round(stepX / 2), cy = Math.round(stepY / 2); x > -this.scrollerWidth;) {
                            for (this.pages[i] = [], l = 0, y = 0; y > -this.scrollerHeight;) this.pages[i][l] = {
                                x: Math.max(x, this.maxScrollX),
                                y: Math.max(y, this.maxScrollY),
                                width: stepX,
                                height: stepY,
                                cx: x - cx,
                                cy: y - cy
                            }, y -= stepY, l++;
                            x -= stepX, i++
                        } else
                            for (el = this.options.snap, l = el.length, n = -1; l > i; i++)(0 === i || el[i].offsetLeft <= el[i - 1].offsetLeft) && (m = 0, n++), this.pages[m] || (this.pages[m] = []), x = Math.max(-el[i].offsetLeft, this.maxScrollX), y = Math.max(-el[i].offsetTop, this.maxScrollY), cx = x - Math.round(el[i].offsetWidth / 2), cy = y - Math.round(el[i].offsetHeight / 2), this.pages[m][n] = {
                                x: x,
                                y: y,
                                width: el[i].offsetWidth,
                                height: el[i].offsetHeight,
                                cx: cx,
                                cy: cy
                            }, x > this.maxScrollX && m++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }), this.on("flick", function() {
                var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1e3), Math.min(Math.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time)
            })
        },
        _nearestSnap: function(x, y) {
            if (!this.pages.length) return {
                x: 0,
                y: 0,
                pageX: 0,
                pageY: 0
            };
            var i = 0,
                l = this.pages.length,
                m = 0;
            if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) return this.currentPage;
            for (x > 0 ? x = 0 : x < this.maxScrollX && (x = this.maxScrollX), y > 0 ? y = 0 : y < this.maxScrollY && (y = this.maxScrollY); l > i; i++)
                if (x >= this.pages[i][0].cx) {
                    x = this.pages[i][0].x;
                    break
                }
            for (l = this.pages[i].length; l > m; m++)
                if (y >= this.pages[0][m].cy) {
                    y = this.pages[0][m].y;
                    break
                }
            return i == this.currentPage.pageX && (i += this.directionX, 0 > i ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), x = this.pages[i][0].x), m == this.currentPage.pageY && (m += this.directionY, 0 > m ? m = 0 : m >= this.pages[0].length && (m = this.pages[0].length - 1), y = this.pages[0][m].y), {
                x: x,
                y: y,
                pageX: i,
                pageY: m
            }
        },
        goToPage: function(x, y, time, easing) {
            easing = easing || this.options.bounceEasing, x >= this.pages.length ? x = this.pages.length - 1 : 0 > x && (x = 0), y >= this.pages[x].length ? y = this.pages[x].length - 1 : 0 > y && (y = 0);
            var posX = this.pages[x][y].x,
                posY = this.pages[x][y].y;
            time = void 0 === time ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1e3), Math.min(Math.abs(posY - this.y), 1e3)), 300) : time, this.currentPage = {
                x: posX,
                y: posY,
                pageX: x,
                pageY: y
            }, this.scrollTo(posX, posY, time, easing)
        },
        next: function(time, easing) {
            var x = this.currentPage.pageX,
                y = this.currentPage.pageY;
            x++, x >= this.pages.length && this.hasVerticalScroll && (x = 0, y++), this.goToPage(x, y, time, easing)
        },
        prev: function(time, easing) {
            var x = this.currentPage.pageX,
                y = this.currentPage.pageY;
            x--, 0 > x && this.hasVerticalScroll && (x = 0, y--), this.goToPage(x, y, time, easing)
        },
        _initKeys: function() {
            var i, keys = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            if ("object" == typeof this.options.keyBindings)
                for (i in this.options.keyBindings) "string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0));
            else this.options.keyBindings = {};
            for (i in keys) this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
            utils.addEvent(window, "keydown", this), this.on("destroy", function() {
                utils.removeEvent(window, "keydown", this)
            })
        },
        _key: function(e) {
            if (this.enabled) {
                var pos, snap = this.options.snap,
                    newX = snap ? this.currentPage.pageX : this.x,
                    newY = snap ? this.currentPage.pageY : this.y,
                    now = utils.getTime(),
                    prevTime = this.keyTime || 0,
                    acceleration = .25;
                switch (this.options.useTransition && this.isInTransition && (pos = this.getComputedPosition(), this._translate(Math.round(pos.x), Math.round(pos.y)), this.isInTransition = !1), this.keyAcceleration = 200 > now - prevTime ? Math.min(this.keyAcceleration + acceleration, 50) : 0, e.keyCode) {
                    case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? newX += snap ? 1 : this.wrapperWidth : newY += snap ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? newX -= snap ? 1 : this.wrapperWidth : newY -= snap ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.end:
                        newX = snap ? this.pages.length - 1 : this.maxScrollX, newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
                        break;
                    case this.options.keyBindings.home:
                        newX = 0, newY = 0;
                        break;
                    case this.options.keyBindings.left:
                        newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.up:
                        newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.right:
                        newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.down:
                        newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    default:
                        return
                }
                if (snap) return void this.goToPage(newX, newY);
                newX > 0 ? (newX = 0, this.keyAcceleration = 0) : newX < this.maxScrollX && (newX = this.maxScrollX, this.keyAcceleration = 0), newY > 0 ? (newY = 0, this.keyAcceleration = 0) : newY < this.maxScrollY && (newY = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(newX, newY, 0), this.keyTime = now
            }
        },
        _animate: function(destX, destY, duration, easingFn) {
            function step() {
                var newX, newY, easing, now = utils.getTime();
                return now >= destTime ? (that.isAnimating = !1, that._translate(destX, destY), void(that.resetPosition(that.options.bounceTime) || that._execEvent("scrollEnd"))) : (now = (now - startTime) / duration, easing = easingFn(now), newX = (destX - startX) * easing + startX, newY = (destY - startY) * easing + startY, that._translate(newX, newY), void(that.isAnimating && rAF(step)))
            }
            var that = this,
                startX = this.x,
                startY = this.y,
                startTime = utils.getTime(),
                destTime = startTime + duration;
            this.isAnimating = !0, step()
        },
        handleEvent: function(e) {
            switch (e.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(e);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(e);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(e);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(e);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(e);
                    break;
                case "keydown":
                    this._key(e);
                    break;
                case "click":
                    e._constructed || (e.preventDefault(), e.stopPropagation())
            }
        }
    }, Indicator.prototype = {
        handleEvent: function(e) {
            switch (e.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(e);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(e);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(e)
            }
        },
        destroy: function() {
            this.options.interactive && (utils.removeEvent(this.indicator, "touchstart", this), utils.removeEvent(this.indicator, utils.prefixPointerEvent("pointerdown"), this), utils.removeEvent(this.indicator, "mousedown", this), utils.removeEvent(window, "touchmove", this), utils.removeEvent(window, utils.prefixPointerEvent("pointermove"), this), utils.removeEvent(window, "mousemove", this), utils.removeEvent(window, "touchend", this), utils.removeEvent(window, utils.prefixPointerEvent("pointerup"), this), utils.removeEvent(window, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(e) {
            var point = e.touches ? e.touches[0] : e;
            e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = point.pageX, this.lastPointY = point.pageY, this.startTime = utils.getTime(), this.options.disableTouch || utils.addEvent(window, "touchmove", this), this.options.disablePointer || utils.addEvent(window, utils.prefixPointerEvent("pointermove"), this), this.options.disableMouse || utils.addEvent(window, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(e) {
            {
                var deltaX, deltaY, newX, newY, point = e.touches ? e.touches[0] : e;
                utils.getTime()
            }
            this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, deltaX = point.pageX - this.lastPointX, this.lastPointX = point.pageX, deltaY = point.pageY - this.lastPointY, this.lastPointY = point.pageY, newX = this.x + deltaX, newY = this.y + deltaY, this._pos(newX, newY), e.preventDefault(), e.stopPropagation()
        },
        _end: function(e) {
            if (this.initiated) {
                if (this.initiated = !1, e.preventDefault(), e.stopPropagation(), utils.removeEvent(window, "touchmove", this), utils.removeEvent(window, utils.prefixPointerEvent("pointermove"), this), utils.removeEvent(window, "mousemove", this), this.scroller.options.snap) {
                    var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                        time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1e3), Math.min(Math.abs(this.scroller.y - snap.y), 1e3)), 300);
                    (this.scroller.x != snap.x || this.scroller.y != snap.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = snap, this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing))
                }
                this.moved && this.scroller._execEvent("scrollEnd")
            }
        },
        transitionTime: function(time) {
            time = time || 0, this.indicatorStyle[utils.style.transitionDuration] = time + "ms", !time && utils.isBadAndroid && (this.indicatorStyle[utils.style.transitionDuration] = "0.001s")
        },
        transitionTimingFunction: function(easing) {
            this.indicatorStyle[utils.style.transitionTimingFunction] = easing
        },
        refresh: function() {
            this.transitionTime(), this.indicatorStyle.display = this.options.listenX && !this.options.listenY ? this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.scroller.hasVerticalScroll ? "block" : "none" : this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (utils.addClass(this.wrapper, "iScrollBothScrollbars"), utils.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (utils.removeClass(this.wrapper, "iScrollBothScrollbars"), utils.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
            this.wrapper.offsetHeight;
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
        },
        updatePosition: function() {
            var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
                y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (x < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = Math.max(this.indicatorWidth + x, 8), this.indicatorStyle.width = this.width + "px"), x = this.minBoundaryX) : x > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", x = this.maxPosX + this.indicatorWidth - this.width) : x = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), y < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = Math.max(this.indicatorHeight + 3 * y, 8), this.indicatorStyle.height = this.height + "px"), y = this.minBoundaryY) : y > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = Math.max(this.indicatorHeight - 3 * (y - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", y = this.maxPosY + this.indicatorHeight - this.height) : y = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = x, this.y = y, this.scroller.options.useTransform ? this.indicatorStyle[utils.style.transform] = "translate(" + x + "px," + y + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = x + "px", this.indicatorStyle.top = y + "px")
        },
        _pos: function(x, y) {
            0 > x ? x = 0 : x > this.maxPosX && (x = this.maxPosX), 0 > y ? y = 0 : y > this.maxPosY && (y = this.maxPosY), x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x, y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(x, y)
        },
        fade: function(val, hold) {
            if (!hold || this.visible) {
                clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                var time = val ? 250 : 500,
                    delay = val ? 0 : 300;
                val = val ? "1" : "0", this.wrapperStyle[utils.style.transitionDuration] = time + "ms", this.fadeTimeout = setTimeout(function(val) {
                    this.wrapperStyle.opacity = val, this.visible = +val
                }.bind(this, val), delay)
            }
        }
    }, IScroll.utils = utils, qike.lib.IScroll = IScroll
}(window, document, Math);