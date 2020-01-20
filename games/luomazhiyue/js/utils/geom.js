(function(fg){
	var p;
	var Rectangle = function(x,y,w,h){
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.top = this.y;
		this.bottom = this.top + this.height;
		this.left = this.x;
		this.right = this.left + this.width;
		this.ratio = this.width/this.height;
	};
	Rectangle.prototype = p = {};
	p.resizeTo = function(w,h) {
		var ratio = w/h;
		if(ratio >= this.ratio) {
			this.width = w;
			this.height = this.width / this.ratio;
		} else {
			this.height = h;
			this.width = this.height * this.ratio;
		}
		this.x = -(this.width - w)/2;
		this.y = -(this.height -h)/2;
	};
	var Point = function(x,y) {
		this.x = x;
		this.y = y;
	};
	Point.prototype = p = {};
	p.clone = function(){
		return new Point(this.x, this.y);
	};
	Point.distance = function(pt1, pt2){
		return Math.sqrt(Math.pow(pt1.x - pt2.x, 2) + Math.pow(pt1.y - pt2.y, 2));
	};
	fg.geom = fg.geom || {};
	fg.geom.Rectangle = Rectangle;
	fg.geom.Point = Point;
})(FandlrGame);