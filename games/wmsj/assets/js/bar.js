var bar = {
	num: 1,
	max: 100,
	tag: true,
	timeout: null,
	randomMin: 40,
	randomMax: 60,
	first: true,
	score: 0,
	isGameStart: false,
	isShot: true,
	radIndex: 0,
	rad: [120, 110, 100, 90, 80, 70, 60, 50, 40, 20],
	$el: {
		    "score": $("#score"),
            "arrow":$(".arrow"),
            "barLifes":$(".barLifes"),
            "progress":$(".progress"),
            "apple":$("#apple"),
            "overInfo":$("#gameover,.info"),
            "failAll":$(".fail-one,.fail-two,.fail-three"),
            "overAll":$(".info,.fail-one,.fail-two,.fail-three")
    },
	init: function() {
		var me = this;
		this.initSet = true;
		this.tag = true;
		me.initBar();
		bar.isShot = true;
		return this;
	},
	initBar: function() {
		bar.$el.arrow.css({
			bottom: "80px"
		});
		clearTimeout(this.timeout);
		var parent = this;

		this.heights = bar.rad[bar.radIndex]; //高度
		this.beginBarTop = Math.floor(Math.random() * 100 + 160); //开始位置
		bar.$el.barLifes.css({
			"height": this.heights + "px",
			"bottom": this.beginBarTop + "px"
		});
		parent.num = 1;
		bar.$el.progress.css({
			height: 0 + "px"
		});
		this.tag = true;
	},
	run: function() {
		var parent = this;
		this.timeout = setTimeout(function() {
			parent.run();
		}, 1000 / 30);
		if (this.tag) {
			//this.num *= 1.4; //增长速度
			this.num += 30;
			if (this.num >= 476) {
				this.num = 476;
				this.tag = false;
			}
		} else {
			// this.num /= 1.4; //增长速度
			this.num -= 30;
			if (this.num <= 1) {
				this.num = 1;
				this.tag = true;
			}
		}
		bar.$el.progress.css({
			height: parent.num + "px"
		});
	},
	destore: function() {
		var parent = this;
		clearTimeout(parent.timeout);

		if (this.num >= this.beginBarTop && this.num <= (this.heights + this.beginBarTop)) {
			bar.isShot = false;
			bar.score++;
			setTimeout(function(){
				bar.$el.arrow.animate({
					bottom: "650px"
				},50,function() {
					bar.$el.apple.removeClass("apple").addClass("apples");
					bar.$el.score.addClass("animated fadeOut").html("+1");
				});
			}, 200);

			setTimeout(function() {
				bar.$el.apple.removeClass("apples").addClass("apple");
				bar.$el.score.removeClass("animated fadeOut").html("");
				bar.$el.arrow.animate({
					bottom: "-100px"
				}, 1);
				bar.$el.arrow.animate({
					bottom: "80px"
				}, 10);
				bar.radIndex++;
				if (bar.radIndex >= 9) {
					bar.radIndex = 9;
				}
				parent.init();
			}, 1000);

		} else {
			bar.radIndex = 0;
			var num = parseInt(this.num / 120),
				number;
			switch (num) {
				case num <= 1:
					number = "one";
					bar.$el.arrow.animate({
						bottom: "300px"
					}, 100);
					break;
				case 2:
					number = "two";
					bar.$el.arrow.animate({
						bottom: "400px"
					}, 100);
					break;
				case 3:
					number = "three";
					bar.$el.arrow.animate({
						bottom: "400px"
					}, 100);
					break;
				default:
					number = "three";
					bar.$el.arrow.animate({
						bottom: "400px"
					}, 100);
					break;
			}

			if (bar.score >0) {
				setTimeout(function() {
					bar.$el.overInfo.removeClass("hide").show();
					bar.$el.failAll.addClass("hide");
				}, 1000);
			} else {
				setTimeout(function() {
					bar.$el.overAll.addClass("hide");
					$("#gameover,.fail-" + number).removeClass("hide").show();
				}, 1000);
				return;
			}


			setTimeout(function() {
			
	
        dp_submitScore(bar.score);
		},1000);
		}

	}
}
