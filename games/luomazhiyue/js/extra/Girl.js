this.Girl = this.Girl || {};
(function(G, cjs){
	var lib = {},p;
	(lib.Girl = function(_data,_conflicts){
		this.initialize();
		this._srcData = this.copyData(_data);
		this._dressData = this.copyData(_data);
		this._dressParts = {};
		this._conflicts = _conflicts || {};
		if(G.createUI != null) {
			G.createUI(this);
		}
	}).prototype = p = new cjs.Container;

	p.copyData = function(sData) {
		var o = {};
		for(var m in sData) {
			o[m] = sData[m];
		}
		return o;
	};
	p._srcData = null;
	p._conflicts = null;
	p._dressData = null;
	p._dressParts = null;
	p.addDress = function(item, key) {
		this.addChild(item);
		if(key) {
			if(!this._dressParts.hasOwnProperty(key)) {
				this._dressParts[key] = [];
			}
			this._dressParts[key].push(item);
		}
	};
	p.render = function(){
		for(var m in this._dressParts) {
			this.showPart(m);
		}
	};
	p.reset = function(_data) {
		if(_data) {
			this._srcData = this.copyData(_data);
		}
		this._dressData = this.copyData(this._srcData);
		this.render();
	};
	p.autoNext = function(pid) {
		var item = this._dressParts[pid][0];

		var total = item.spriteSheet.getNumFrames();
		var vid = undefined;
		if(this._dressData.hasOwnProperty(pid)) {
			vid = this._dressData[pid];
		}
		if(isNaN(vid)) {
			vid = 0;
		} else {
			vid ++;
			if(vid >= total) {
				vid = 0;
			}
		}
		this.change(pid, vid);
	};
	p.change = function(pid, vid) {
		this._dressData[pid] = vid;
		this.showPart(pid);
		this.handleConflict(pid);
	};
	p.handleConflict = function(pKey) {
		if(!this._conflicts.hasOwnProperty(pKey)) {
			return;
		}
		var arr = this._conflicts[pKey];
		var vid = this._dressData[pKey];
		var needErase = !isNaN(vid);
		var len = arr.length;
		for(var i = 0; i < len; i ++) {
			
			var tmpKey = arr[i];
			this._dressData[tmpKey] = needErase?undefined:(this._srcData.hasOwnProperty(tmpKey)?this._srcData[tmpKey]:undefined);
			this.showPart(tmpKey);
		}

	};
	p.showPart = function(pKey) {
		var arr = this._dressParts[pKey];
		var len = arr.length;
		var vid = undefined;
		if(this._dressData.hasOwnProperty(pKey)) {
			vid = this._dressData[pKey];
		}
		for(var i = 0; i < len; i ++) {
			var item = arr[i];
			if(isNaN(vid)) {
				item.visible = false;
			} else {
				item.gotoAndStop(vid);
				item.visible = true;
			}
		}
	};
	p.getData = function(){
		return this.copyData(this._dressData);
	};
	G._instance = null;
	G.getInstance = function(){
		return G._instance;
	};
	G.getPerson = function(_data, _conflicts) {
		return new lib.Girl(_data,_conflicts);
	};
	G.createUI = null;
})(this.Girl, createjs);