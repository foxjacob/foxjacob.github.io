(function(cjs){
	var lib, p;
	lib = {};
	(lib.AutoFitLayer = function(){
		this.initialize();

	}).prototype = p = new cjs.Container;
	p.doLayout = function(){
		if(this.getNumChildren() == 0) {
			return;
		}
		var o = this.getBounds();
		
		var r = new FandlrGame.geom.Rectangle(o.x, o.y, o.width, o.height);
		
		r.resizeTo(stage.canvas.width, stage.canvas.height);

		this.scaleX = this.scaleY = r.width/o.width;
		this.x = r.x;
		this.y = r.y;
	};
	p.pAddChild = p.addChild;
	p.addChild = function(item, refresh) {
		if(refresh == undefined) {
			refresh=false;
		}
		this.pAddChild(item);
		if(refresh) {
			this.doLayout();
		}
	}
	cjs.AutoFitLayer = lib.AutoFitLayer;
})(createjs);