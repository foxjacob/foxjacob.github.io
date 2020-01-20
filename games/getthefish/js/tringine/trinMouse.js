function TrinMouse() {
    this.x = 0;

    this.y = 0;
    this.current = 0;
    this.last = 0;
    this.out = false;
    this.rawX = 0;
    this.rawY = 0;
}

TrinMouse.prototype = {
    update: function() {
        this.x = Math.min(Math.floor(this.rawX), _TrinGame.width);
        this.y = Math.min(Math.floor(this.rawY), _TrinGame.height);
        if (this.current === -1) {
            this.current = 0;
        } else if (this.current === 2) {
            this.current = 1;
        }

        this.last = this.current;
    },
    isDown: function() {
        return this.current > 0;
    },
    isPressed: function() {
        return this.current === 2;
    },
    isReleased: function() {
        return this.current === -1;
    },
    onMouseDown: function() {
        var mouse = arguments.callee.mouse;
        mouse.current = (mouse.current > 0) ? 1 : 2;
    },
    onMouseUp: function() {
        var mouse = arguments.callee.mouse;
        mouse.current = (mouse.current > 0) ? -1 : 0;
    },
    onTouchStart: function(event) {
        var mouse = arguments.callee.mouse;
        if (_TrinGame.isAndroid) {
            event.preventDefault();
            mouse.rawX = mouse.x = (event.changedTouches[0].pageX + event.layerX) / _TrinGame.scaleFactor;
            mouse.rawY = mouse.y = (event.changedTouches[0].pageY + event.layerY) / _TrinGame.scaleFactor;
        } else {
            mouse.rawX = mouse.x = event.layerX / _TrinGame.scaleFactor;
            mouse.rawY = mouse.y = event.layerY / _TrinGame.scaleFactor;
        }
        mouse.current = (mouse.current > 0) ? 1 : 2;
        return false;
    },
    onTouchEnd: function() {
        var mouse = arguments.callee.mouse;
        mouse.current = (mouse.current > 0) ? -1 : 0;
        mouse.rawX = -999;
        mouse.rawY = -999;
        return false;
    },
    reset: function() {
        this.current = 0;
    }
};