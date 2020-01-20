! function() {
    function FastClick(layer, options) {
        "use strict";

        function bind(method, context) {
            return function() {
                return method.apply(context, arguments)
            }
        }
        var oldOnClick;
        if (options = options || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = options.touchBoundary || 10, this.layer = layer, this.tapDelay = options.tapDelay || 200, !FastClick.notNeeded(layer)) {
            for (var methods = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], context = this, i = 0, l = methods.length; l > i; i++) context[methods[i]] = bind(context[methods[i]], context);
            deviceIsAndroid && (layer.addEventListener("mouseover", this.onMouse, !0), layer.addEventListener("mousedown", this.onMouse, !0), layer.addEventListener("mouseup", this.onMouse, !0)), layer.addEventListener("click", this.onClick, !0), layer.addEventListener("touchstart", this.onTouchStart, !1), layer.addEventListener("touchmove", this.onTouchMove, !1), layer.addEventListener("touchend", this.onTouchEnd, !1), layer.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (layer.removeEventListener = function(type, callback, capture) {
                var rmv = Node.prototype.removeEventListener;
                "click" === type ? rmv.call(layer, type, callback.hijacked || callback, capture) : rmv.call(layer, type, callback, capture)
            }, layer.addEventListener = function(type, callback, capture) {
                var adv = Node.prototype.addEventListener;
                "click" === type ? adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
                    event.propagationStopped || callback(event)
                }), capture) : adv.call(layer, type, callback, capture)
            }), "function" == typeof layer.onclick && (oldOnClick = layer.onclick, layer.addEventListener("click", function(event) {
                oldOnClick(event)
            }, !1), layer.onclick = null)
        }
    }
    var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
        deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
        deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
        deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0;
    FastClick.prototype.needsClick = function(target) {
        "use strict";
        switch (target.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (target.disabled) return !0;
                break;
            case "input":
                if (deviceIsIOS && "file" === target.type || target.disabled) return !0;
                break;
            case "label":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(target.className)
    }, FastClick.prototype.needsFocus = function(target) {
        "use strict";
        switch (target.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !deviceIsAndroid;
            case "input":
                switch (target.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !target.disabled && !target.readOnly;
            default:
                return /\bneedsfocus\b/.test(target.className)
        }
    }, FastClick.prototype.sendClick = function(targetElement, event) {
        "use strict";
        var clickEvent, touch;
        document.activeElement && document.activeElement !== targetElement && document.activeElement.blur(), touch = event.changedTouches[0], clickEvent = document.createEvent("MouseEvents"), clickEvent.initMouseEvent(this.determineEventType(targetElement), !0, !0, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, !1, !1, !1, !1, 0, null), clickEvent.forwardedTouchEvent = !0, targetElement.dispatchEvent(clickEvent)
    }, FastClick.prototype.determineEventType = function(targetElement) {
        "use strict";
        return deviceIsAndroid && "select" === targetElement.tagName.toLowerCase() ? "mousedown" : "click"
    }, FastClick.prototype.focus = function(targetElement) {
        "use strict";
        var length;
        deviceIsIOS && targetElement.setSelectionRange && 0 !== targetElement.type.indexOf("date") && "time" !== targetElement.type ? (length = targetElement.value.length, targetElement.setSelectionRange(length, length)) : targetElement.focus()
    }, FastClick.prototype.updateScrollParent = function(targetElement) {
        "use strict";
        var scrollParent, parentElement;
        if (scrollParent = targetElement.fastClickScrollParent, !scrollParent || !scrollParent.contains(targetElement)) {
            parentElement = targetElement;
            do {
                if (parentElement.scrollHeight > parentElement.offsetHeight) {
                    scrollParent = parentElement, targetElement.fastClickScrollParent = parentElement;
                    break
                }
                parentElement = parentElement.parentElement
            } while (parentElement)
        }
        scrollParent && (scrollParent.fastClickLastScrollTop = scrollParent.scrollTop)
    }, FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
        "use strict";
        return eventTarget.nodeType === Node.TEXT_NODE ? eventTarget.parentNode : eventTarget
    }, FastClick.prototype.onTouchStart = function(event) {
        "use strict";
        var targetElement, touch, selection;
        if (event.targetTouches.length > 1) return !0;
        if (targetElement = this.getTargetElementFromEventTarget(event.target), touch = event.targetTouches[0], deviceIsIOS) {
            if (selection = window.getSelection(), selection.rangeCount && !selection.isCollapsed) return !0;
            if (!deviceIsIOS4) {
                if (touch.identifier && touch.identifier === this.lastTouchIdentifier) return event.preventDefault(), !1;
                this.lastTouchIdentifier = touch.identifier, this.updateScrollParent(targetElement)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = event.timeStamp, this.targetElement = targetElement, this.touchStartX = touch.pageX, this.touchStartY = touch.pageY, event.timeStamp - this.lastClickTime < this.tapDelay && event.preventDefault(), !0
    }, FastClick.prototype.touchHasMoved = function(event) {
        "use strict";
        var touch = event.changedTouches[0],
            boundary = this.touchBoundary;
        return Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary ? !0 : !1
    }, FastClick.prototype.onTouchMove = function(event) {
        "use strict";
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
    }, FastClick.prototype.findControl = function(labelElement) {
        "use strict";
        return void 0 !== labelElement.control ? labelElement.control : labelElement.htmlFor ? document.getElementById(labelElement.htmlFor) : labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, FastClick.prototype.onTouchEnd = function(event) {
        "use strict";
        var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;
        if (!this.trackingClick) return !0;
        if (event.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (this.cancelNextClick = !1, this.lastClickTime = event.timeStamp, trackingClickStart = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (touch = event.changedTouches[0], targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement, targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent), targetTagName = targetElement.tagName.toLowerCase(), "label" === targetTagName) {
            if (forElement = this.findControl(targetElement)) {
                if (this.focus(targetElement), deviceIsAndroid) return !1;
                targetElement = forElement
            }
        } else if (this.needsFocus(targetElement)) return event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && "input" === targetTagName ? (this.targetElement = null, !1) : (this.focus(targetElement), this.sendClick(targetElement, event), deviceIsIOS && "select" === targetTagName || (this.targetElement = null, event.preventDefault()), !1);
        return deviceIsIOS && !deviceIsIOS4 && (scrollParent = targetElement.fastClickScrollParent, scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) ? !0 : (this.needsClick(targetElement) || (event.preventDefault(), this.sendClick(targetElement, event)), !1)
    }, FastClick.prototype.onTouchCancel = function() {
        "use strict";
        this.trackingClick = !1, this.targetElement = null
    }, FastClick.prototype.onMouse = function(event) {
        "use strict";
        return this.targetElement ? event.forwardedTouchEvent ? !0 : event.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (event.stopImmediatePropagation ? event.stopImmediatePropagation() : event.propagationStopped = !0, event.stopPropagation(), event.preventDefault(), !1) : !0 : !0
    }, FastClick.prototype.onClick = function(event) {
        "use strict";
        var permitted;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === event.target.type && 0 === event.detail ? !0 : (permitted = this.onMouse(event), permitted || (this.targetElement = null), permitted)
    }, FastClick.prototype.destroy = function() {
        "use strict";
        var layer = this.layer;
        deviceIsAndroid && (layer.removeEventListener("mouseover", this.onMouse, !0), layer.removeEventListener("mousedown", this.onMouse, !0), layer.removeEventListener("mouseup", this.onMouse, !0)), layer.removeEventListener("click", this.onClick, !0), layer.removeEventListener("touchstart", this.onTouchStart, !1), layer.removeEventListener("touchmove", this.onTouchMove, !1), layer.removeEventListener("touchend", this.onTouchEnd, !1), layer.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, FastClick.notNeeded = function(layer) {
        "use strict";
        var metaViewport, chromeVersion, blackberryVersion;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!deviceIsAndroid) return !0;
            if (metaViewport = document.querySelector("meta[name=viewport]")) {
                if (-1 !== metaViewport.content.indexOf("user-scalable=no")) return !0;
                if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (deviceIsBlackBerry10 && (blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3 && (metaViewport = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== metaViewport.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === layer.style.msTouchAction ? !0 : !1
    }, FastClick.attach = function(layer, options) {
        "use strict";
        return new FastClick(layer, options)
    }, qike.lib.FastClick = FastClick
}();