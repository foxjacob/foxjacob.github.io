function Observer() {
	this.listeners = {};
}
Observer.prototype.listeners = null;
Observer.prototype.addListener = function(type, callback, thisObj) {
	if(this.hasListener(type, callback, thisObj) !== -1) {
		return;
	}
	if(!(type in this.listeners)) {
		this.listeners[type] = [];
	}
	var arr = this.listeners[type];
	arr.push({func:callback, thisObj:thisObj});
};
Observer.prototype.hasListener = function(type, callback, thisObj) {
	if(!(type in this.listeners)) {
		return -1;
	}
	var arr = this.listeners[type];
	var len = arr.length;
	for(var i = 0; i < len; i ++) {
		if(arr[i].func === callback && arr[i].thisObj === thisObj) {
			return i;
		}
	}
	return -1;
}
Observer.prototype.removeListener = function(type, callback, thisObj) {
	var pos = this.hasListener(type, callback, thisObj);
	if(pos === -1) {
		return;
	}
	this.listeners[type].splice(pos, 1);
}
Observer.prototype.sendNotify = function(type, notice) {
	if(!(type in this.listeners)) {
		return;
	}
	var arr = this.listeners[type];
	var len = arr.length;
	for(var i = 0; i < len; i ++) {
		if(!arr[i]) {
			arr.splice(i,1);
			len --;
			i--;
			
			continue
		}
		if(arr[i].thisObj) {
			arr[i].func.apply(arr[i].thisObj, [type,notice]);
			if(arr.length != len) {
				len = arr.length;
				i --;
			}
		}
	}
}