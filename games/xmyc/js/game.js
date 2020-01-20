﻿var screenWidth = 640,
screenHeight = 960,
renderer = PIXI.autoDetectRenderer(screenWidth, screenHeight);
document.body.appendChild(renderer.view);
var interactive = !1,
stage = new PIXI.Stage(0, interactive),
Titles = function() {
	this.starttitle = "讨人嫌的蚊蝇又来了，消灭他们， 不要误伤勤劳的小蜜蜂哦！;讨人嫌的蚊蝇又来了，消灭他们， 不要误伤勤劳的小蜜蜂哦！;讨人嫌的蚊蝇又来了，消灭他们， 不要误伤勤劳的小蜜蜂哦！;讨人嫌的蚊蝇又来了，消灭他们， 不要误伤勤劳的小蜜蜂哦！！;讨人嫌的蚊蝇又来了，消灭他们， 不要误伤勤劳的小蜜蜂哦！！;讨人嫌的蚊蝇又来了，消灭他们， 不要误伤勤劳的小蜜蜂哦！;讨人嫌的蚊蝇又来了，消灭他们， 不要误伤勤劳的小蜜蜂哦！;讨人嫌的蚊蝇又来了，消灭他们， 不要误伤勤劳的小蜜蜂哦！".split(";");
	this.endtitle = ["", "", "", "", ""];
	this.endratio = [[10, 39], [40, 59], [60, 79], [80, 89], [90, 99]]
};
Titles.constructor = Titles;
Titles.prototype.getStartTitle = function() {
	var a = this.starttitle.length,
	a = Math.floor(Math.random() * a);
	return this.starttitle[a]
};
Titles.prototype.getEndTitle = function() {
	return 500 > userScore ? 0 : 650 > userScore ? 1 : 800 > userScore ? 2 : 1E3 > userScore ? 3 : 4
};
Titles.prototype.getEndratio = function(a) {
	return Math.floor(Math.random() * (this.endratio[a][1] - this.endratio[a][0])) + this.endratio[a][0]
};
var Time = function() {
	this.gameDuration = 35E3;
	this.freeze = 200;
	this.startTime = this.lastTime = this.timeleft = 0
};
Time.constructor = Time;
Time.prototype.update = function() {
	var a = Date.now();
	this.timeleft = this.gameDuration - (a - this.startTime);
	var b = Math.round(this.timeleft / 1E3);
	if (0 < showhits && a > showhits) {
		for (var c = hitsTexture.shift(); void 0 != c;) stage.removeChild(c),
		c = hitsTexture.shift();
		stage.removeChild(hittext);
		showhits = 0
	}
	0 < showminus && a > showminus && (stage.removeChild(minusscore), showminus = 0);
	0 < this.timeleft ? (timeText.setText(b + "\u79d2"), a = this.timeleft - (this.gameDuration - 531 / 555 * this.gameDuration), 0 > a && (a = 0), a = a / this.gameDuration * 555, timemiddlebar.width = a, timerightbar.position.x = 55 + a) : (timeleftbar.width = 0, timemiddlebar.width = 0, timerightbar.width = 0, stage.addChild(startbackground), finalScoreText.setText(userScore), finalScoreText.position.x = (screenWidth - finalScoreText.width) / 2, stage.addChild(finalScoreText), stage.addChild(scoreprofile), a = title.getEndTitle(), shareData.sDesc = sprintf("\u6211\u706d\u4e86{count}\u53ea\u868a\u8747\uff0c \u8d85{ratio}%\u7684\u4eba\uff0c\u4f60\u6765\u8bd5\u8bd5\u5457\uff01{title}", {
		count: userScore,
		ratio: title.getEndratio(a),
		title: title.endtitle[a]
	}),dp_submitScore(userScore), finalTitleText.setText(shareData.sDesc + "\uff01"), finalTitleText.position.x = (screenWidth - finalTitleText.width) / 2, stage.addChild(finalTitleText), stage.addChild(restartbutton), stage.addChild(fenxiangbutton), GAME.currentScreen = "scoreScreen", console.log("times up!"))
};
Time.prototype.start = function() {
	this.startTime = this.lastTime = Date.now();
	userScore = gameHits = 0
};
Time.prototype.showGUIZI = function() {
	for (var a = Date.now(), b = this.getGameStage(), c = GAME.cast.SHOWTIME[0][b], d = 0; d < gameCellCount; d++) 0 < gameCells[d][3] && a - gameCells[d][1] > gameCells[d][2] && (GAME.game.resetCell(d), 1 == gameCells[d][3] ? (delete GAME.cast.onstageGUIZI[gameCells[d][0]], userScore -= GAME.game.scores[1][b], gameHits = 0, 0 > userScore && (userScore = 0), gameCells[d] = [ - 1, a, this.freeze, 5]) : 2 == gameCells[d][3] || 4 == gameCells[d][3] ? gameCells[d] = [ - 1, a, this.freeze, 5] : 3 == gameCells[d][3] ? (delete GAME.cast.onstageGUIZI[gameCells[d][0]], gameCells[d] = [ - 1, a, this.freeze, 5]) : 5 == gameCells[d][3] && (emptyCells[d] = 1, gameCells[d] = [ - 1, 0, 0, 0]));
	if (void 0 != GAME.cast.onstageGIRL[0] && a - this.startTime > GAME.cast.onstageGIRL[0][1] && (d = GAME.game.selectCell(), null !== d)) {
		var e = GAME.cast.SHOWTIME[2][b];
		GAME.cast.stageGirl(d, GAME.cast.onstageGIRL[0][0]);
		gameCells[d] = [GAME.cast.onstageGIRL[0][0], a, e, 2];
		GAME.cast.onstageGIRL.shift()
	}
	a - this.lastTime > c && (this.lastTime = a, d = GAME.game.selectCell(), null !== d && (c = GAME.cast.selectGuizi(), e = GAME.cast.SHOWTIME[1][b], gameCells[d] = [c, a, e, 1], GAME.cast.onstageGUIZI[c] = 1, GAME.cast.stageGuizi(d, c)))
};
Time.prototype.getGameStage = function() {
	var a = Date.now() - this.startTime;
	return phase = 5E3 > a ? 0 : 15E3 > a ? 1 : 25E3 > a ? 2 : 3
};
var Cast = function() {
	this.onstageGUIZI = {};
	this.onstageGIRL = [];
	this.GUIZI = [[PIXI.Texture.fromImage("images/renwu/anbei_01.png"), PIXI.Texture.fromImage("images/renwu/anbei_02.png"), 12, 38, 1, 30, 4, 12, "", ""], [PIXI.Texture.fromImage("images/renwu/dongtiaoyingji_01.png"), PIXI.Texture.fromImage("images/renwu/dongtiaoyingji_02.png"), 12, 42, 4, 31, 5, 15, "", ""], [PIXI.Texture.fromImage("images/renwu/shanben56_01.png"), PIXI.Texture.fromImage("images/renwu/shanben56_02.png"), 10, 30, 1, 20, 3, 3, "", ""], [PIXI.Texture.fromImage("images/renwu/shiyuan_01.png"), PIXI.Texture.fromImage("images/renwu/shiyuan_02.png"), 12, 32, 1, 22, 6, 6, "", ""], [PIXI.Texture.fromImage("images/renwu/tufei_01.png"), PIXI.Texture.fromImage("images/renwu/tufei_02.png"), 14, 48, 3, 30, 5, 21, "", ""], [PIXI.Texture.fromImage("images/renwu/xiaoquan_01.png"), PIXI.Texture.fromImage("images/renwu/xiaoquan_02.png"), -2, 27, -10, 17, -7, 3, "", ""]];
	this.GIRL = [[PIXI.Texture.fromImage("images/renwu/bo_01.png"), PIXI.Texture.fromImage("images/renwu/bo_02.png"), 27, 21, 30, -21, 15, 0, "", ""], [PIXI.Texture.fromImage("images/renwu/cang_01.png"), PIXI.Texture.fromImage("images/renwu/cang_02.png"), 35, 29, 10, -15, 25, 0, "", ""], [PIXI.Texture.fromImage("images/renwu/long_01.png"), PIXI.Texture.fromImage("images/renwu/long_02.png"), 35, 30, 25, -12, 25, 0, "", ""]];
	this.SHOWTIME = [[800, 400, 240, 140], [900, 800, 700, 600], [1500, 1E3, 800, 600]]
};
Cast.constructor = Cast;
Cast.prototype.selectGuizi = function(a) {
	for (a = Math.floor(Math.random() * guiziCount);;) if (void 0 != this.onstageGUIZI[a]) a = Math.floor(Math.random() * guiziCount);
	else return a
};
Cast.prototype.initGirls = function() {
	var a = 0,
	a = [],
	b;
	GAME.cast.onstageGIRL = [];
	for (var c = 0,
	d = GAME.game.girltime.length; c < d; c++) a = GAME.game.girltime[c],
	b = Math.round(1E3 * (a[0] + Math.random() * (a[1] - a[0]))),
	a = c % girlCount,
	a = [a, b],
	GAME.cast.onstageGIRL.push(a)
};
Cast.prototype.stageGuizi = function(a, b) {
	cellSpirits[a].setTexture(this.GUIZI[b][0]);
	cellSpirits[a].position.x = cellbarPositions[a][0] + this.GUIZI[b][2];
	cellSpirits[a].position.y = cellbarPositions[a][1] + this.GUIZI[b][3]
};
Cast.prototype.strikeGuizi = function(a, b) {
	cellSpirits[a].setTexture(this.GUIZI[b][1]);
	cellSpirits[a].position.x = cellbarPositions[a][0] + this.GUIZI[b][4];
	cellSpirits[a].position.y = cellbarPositions[a][1] + this.GUIZI[b][5]
};
Cast.prototype.stageGirl = function(a, b) {
	cellSpirits[a].setTexture(this.GIRL[b][0]);
	cellSpirits[a].position.x = cellbarPositions[a][0] + this.GIRL[b][2];
	cellSpirits[a].position.y = cellbarPositions[a][1] + this.GIRL[b][3]
};
Cast.prototype.strikeGirl = function(a, b) {
	cellSpirits[a].setTexture(this.GIRL[b][1]);
	cellSpirits[a].position.x = cellbarPositions[a][0] + this.GIRL[b][4];
	cellSpirits[a].position.y = cellbarPositions[a][1] + this.GIRL[b][5]
};
var Jianyu = function() {
	this.scores = [[1, 1, 1, 1], [0, 0, 0, 0], [2, 2, 2, 2]];
	this.girltime = [[5, 7], [7, 10], [10, 12], [12, 14], [14, 16], [16, 18], [18, 20], [20, 22], [22, 24], [24, 25], [25, 27], [27, 29], [29, 30], [30, 31], [31, 32], [32, 34]]
};
Jianyu.constructor = Jianyu;
Jianyu.prototype.update = function() {
	GAME.time.update();
	GAME.time.showGUIZI();
	scoreText.setText(userScore);
	scoreText.position.x = (screenWidth - scoreText.width) / 2
};
Jianyu.prototype.start = function() {
	null === GAME.currentScreen ? (stage.removeChild(startbackground), stage.removeChild(loadingguizibg), stage.removeChild(loadingguizi), stage.removeChild(guiziName), stage.removeChild(guiziText), stage.removeChild(titleText), stage.removeChild(startbutton)) : (timeleftbar.width = 12, timemiddlebar.width = 531, timerightbar.width = 12, 0 >= GAME.time.timeleft && (stage.removeChild(startbackground), stage.removeChild(finalScoreText), stage.removeChild(scoreprofile), stage.removeChild(finalTitleText), stage.removeChild(restartbutton), stage.removeChild(fenxiangbutton)));
	GAME.time.start();
	GAME.cast.initGirls();
	GAME.cast.onstageGUIZI = [];
	for (var a = 0; a < gameCellCount; a++) gameCells[a] = [ - 1, 0, 0, 0],
	emptyCells[a] = 1,
	this.resetCell(a);
	GAME.currentScreen = "gameScreen"
};
Jianyu.prototype.selectCell = function() {
	if (0 == emptyCells.length) return console.log("null cell"),
	null;
	var a = [],
	b;
	for (b in emptyCells) a[a.length] = b;
	b = Math.floor(Math.random() * a.length);
	delete emptyCells[a[b]];
	return a[b]
};
Jianyu.prototype.resetCell = function(a) {
	cellSpirits[a].setTexture(cellbarTexture);
	cellSpirits[a].position.x = cellbarPositions[a][0] + 30;
	cellSpirits[a].position.y = cellbarPositions[a][1]
};
Jianyu.prototype.getPlusScore = function() {
	return 3 > gameHits ? 0 : 18 > gameHits ? gameHits - 2 : 15
};
Jianyu.prototype.touch = function(a) {
	if ("gameScreen" == GAME.currentScreen) {
		var b = GAME.time.getGameStage();
		if (1 == gameCells[a][3]) {
			gameHits++;
			var c = this.getPlusScore();
			GAME.cast.strikeGuizi(a, gameCells[a][0]);
			userScore += this.scores[0][b] + c;
			gameCells[a] = [gameCells[a][0], Date.now(), GAME.time.freeze, 3];
			if (0 < c) {
				for (var b = gameHits.toString().split(""), d = c = 0, e = b.length; d < e; d++) {
					if (void 0 == hitsTexture[d]) var f = new PIXI.Sprite(digits[b[d]][0]);
					else f = hitsTexture[d],
					f.setTexture(digits[b[d]][0]);
					f.position.x = cellbarPositions[a][0] + 60 + c;
					f.position.y = cellbarPositions[a][1] + 7;
					c += digits[b[d]][1];
					void 0 == hitsTexture[d] && (hitsTexture.push(f), stage.addChild(f))
				}
				hittext.position.x = cellbarPositions[a][0] + 60 + c;
				hittext.position.y = cellbarPositions[a][1];
				0 == showhits && stage.addChild(hittext);
				showhits = Date.now() + 600
			}
		} else 2 == gameCells[a][3] && (GAME.cast.strikeGirl(a, gameCells[a][0]), userScore -= this.scores[2][b], gameHits = 0, 0 > userScore && (userScore = 0), gameCells[a] = [ - 1, Date.now(), GAME.time.freeze, 4], minusscore.position.x = cellbarPositions[a][0] + 175, minusscore.position.y = cellbarPositions[a][1] + 75, 0 == showminus && stage.addChild(minusscore), showminus = Date.now() + 600)
	}
};
Startup = function() {
	var a = PIXI.Sprite.fromImage("images/loading_bg.jpg");
	stage.addChild(a);
	var b = PIXI.Sprite.fromImage("images/loading.png");
	b.position.x = 160;
	b.position.y = 432;
	stage.addChild(b);
	this.loader = new PIXI.AssetLoader("images/renwu/anbei_01.png images/renwu/anbei_02.png images/renwu/bo_01.png images/renwu/bo_02.png images/renwu/cang_01.png images/renwu/cang_02.png images/renwu/dongtiaoyingji_01.png images/renwu/dongtiaoyingji_02.png images/renwu/long_01.png images/renwu/long_02.png images/renwu/shanben56_01.png images/renwu/shanben56_02.png images/renwu/shiyuan_01.png images/renwu/shiyuan_02.png images/renwu/tufei_01.png images/renwu/tufei_02.png images/renwu/xiaoquan_01.png images/renwu/xiaoquan_02.png images/renwu/can.png images/jianyu_bg.jpg images/block_bg.png images/renwu_bg.jpg images/lianji.png".split(" "));
	this.loader.addEventListener("onComplete",
	function() {
		stage.addChild(background);
		stage.addChild(timeleftbar);
		stage.addChild(timemiddlebar);
		stage.addChild(timerightbar);
		stage.addChild(timeText);
		stage.addChild(refreshbutton);
		stage.addChild(scoreText);
		for (var c = 0; c < gameCellCount; c++) stage.addChild(cellSpirits[c]);
		stage.addChild(startbackground);
		stage.addChild(loadingguizibg);
		c = Math.floor(Math.random() * gameCellCount);
		6 > c ? (loadingguizi = new PIXI.Sprite(GAME.cast.GUIZI[c][0]), loadingguizi.position.x = 130 + GAME.cast.GUIZI[c][6], loadingguizi.position.y = 285 + GAME.cast.GUIZI[c][7], guiziName.setText(GAME.cast.GUIZI[c][8]), guiziText.setText(GAME.cast.GUIZI[c][9])) : (c -= 6, loadingguizi = new PIXI.Sprite(GAME.cast.GIRL[c][0]), loadingguizi.position.x = 130 + GAME.cast.GIRL[c][6], loadingguizi.position.y = 285 + GAME.cast.GIRL[c][7], guiziName.setText(GAME.cast.GIRL[c][8]), guiziText.setText(GAME.cast.GIRL[c][9]));
		stage.addChild(loadingguizi);
		stage.addChild(guiziName);
		stage.addChild(guiziText);
		stage.addChild(titleText);
		stage.addChild(startbutton);
		stage.removeChild(a);
		stage.removeChild(b)
	})
};
Startup.constructor = Startup;
Startup.prototype.run = function() {
	this.loader.load()
};
var GAME = {};
GAME.time = new Time;
GAME.game = new Jianyu;
GAME.cast = new Cast;
GAME.currentScreen = null;
var gameCellCount = 9,
girlCount = 3,
guiziCount = 6,
gameHits = 0,
gameCells = [],
emptyCells = {},
cellSpirits = [],
hitsTexture = [],
userScore = showhits = showminus = 0,
startup = new Startup,
loadingguizi,
background = PIXI.Sprite.fromImage("images/jianyu_bg.jpg"),
timeleftbar = PIXI.Sprite.fromImage("images/time_left.png");
timeleftbar.position.x = 43;
timeleftbar.position.y = 16;
var timemiddlebar = PIXI.Sprite.fromImage("images/time_line.jpg");
timemiddlebar.position.x = 55;
timemiddlebar.position.y = 16;
timemiddlebar.width = 531;
var timerightbar = PIXI.Sprite.fromImage("images/time_right.png");
timerightbar.position.x = 586;
timerightbar.position.y = 16;
var refreshbutton = PIXI.Sprite.fromImage("images/shuaxin.png");
refreshbutton.position.x = 514;
refreshbutton.position.y = 55;
refreshbutton.setInteractive(!0);
refreshbutton.mousedown = refreshbutton.touchstart = function() {
	GAME.game.start()
};
var scoreText = new PIXI.Text("0", {
	font: "bold 48px \u9ed1\u4f53",
	fill: "#FFFFFF"
});
scoreText.position.x = (screenWidth - scoreText.width) / 2;
scoreText.position.y = 65;
var displayTime = Math.round(GAME.time.gameDuration / 1E3),
timeText = new PIXI.Text(displayTime + "\u79d2", {
	font: "bold 24px \u9ed1\u4f53",
	fill: "#FFFFFF"
});
timeText.anchor.x = 1;
timeText.anchor.y = 0;
timeText.position.x = (screenWidth + timeText.width) / 2 + 20;
timeText.position.y = 16;
var finalScoreText = new PIXI.Text("", {
	font: "bold 48px \u9ed1\u4f53",
	fill: "#8ADE3A"
});
finalScoreText.position.x = (screenWidth - finalScoreText.width) / 2;
finalScoreText.position.y = 470;
var hittext = PIXI.Sprite.fromImage("images/lianji.png"),
minusscore = PIXI.Sprite.fromImage("images/-2.png");
minusscore.anchor.x = 1;
for (var digits = [[PIXI.Texture.fromImage("images/num/0.png"), 30], [PIXI.Texture.fromImage("images/num/1.png"), 26], [PIXI.Texture.fromImage("images/num/2.png"), 31], [PIXI.Texture.fromImage("images/num/3.png"), 28], [PIXI.Texture.fromImage("images/num/4.png"), 31], [PIXI.Texture.fromImage("images/num/5.png"), 29], [PIXI.Texture.fromImage("images/num/6.png"), 29], [PIXI.Texture.fromImage("images/num/7.png"), 30], [PIXI.Texture.fromImage("images/num/8.png"), 30], [PIXI.Texture.fromImage("images/num/9.png"), 29]], cellbarTexture = PIXI.Texture.fromImage("images/langan.png"), cellbarPositions = [[40, 150], [233, 150], [426, 150], [40, 414], [233, 414], [426, 414], [40, 678], [233, 678], [426, 678]], i = 0; i < gameCellCount; i++) {
	var prison = new PIXI.Sprite(cellbarTexture);
	prison.setInteractive(!0);
	prison.position.x = cellbarPositions[i][0] + 30;
	prison.position.y = cellbarPositions[i][1];
	prison.mousedown = prison.touchstart = function() {
		GAME.game.touch(this.cellprisonIndex)
	};
	prison.cellprisonIndex = i;
	cellSpirits.push(prison)
}
var startbackground = PIXI.Sprite.fromImage("images/block_bg.png"),
loadingguizibg = PIXI.Sprite.fromImage("images/renwu_bg.jpg");
loadingguizibg.position.x = 130;
loadingguizibg.position.y = 285;
var guiziName = new PIXI.Text("", {
	font: "24px \u5fae\u8f6f\u96c5\u9ed1",
	fill: "#B3B7BA",
	wordWrap: "true",
	wordWrapWidth: "213"
});
guiziName.position.x = 343;
guiziName.position.y = 285;
var guiziText = new PIXI.Text("", {
	font: "24px \u5fae\u8f6f\u96c5\u9ed1",
	fill: "#B3B7BA",
	wordWrap: "true",
	wordWrapWidth: "213"
});
guiziText.position.x = 343;
guiziText.position.y = 331;
var title = new Titles,
titleText = new PIXI.Text(title.getStartTitle(), {
	font: "30px \u5fae\u8f6f\u96c5\u9ed1",
	fill: "#FFFFFF",
	align: "left",
	wordWrap: "true",
	wordWrapWidth: "480"
});
titleText.position.x = (screenWidth - titleText.width) / 2;
titleText.position.y = 600;
var startbutton = PIXI.Sprite.fromImage("images/kaishi_btn.jpg");
startbutton.position.x = 220;
startbutton.position.y = 740;
startbutton.setInteractive(!0);
startbutton.mousedown = startbutton.touchstart = function() {
	GAME.game.start()
};
var scoreprofile = PIXI.Sprite.fromImage("images/renwu/can.png");
scoreprofile.position.x = 250;
scoreprofile.position.y = 255;
var finalTitleText = new PIXI.Text("", {
	font: "27px \u5fae\u8f6f\u96c5\u9ed1",
	fill: "#FFFFFF",
	align: "center",
	wordWrap: "true",
	wordWrapWidth: "428"
});
finalTitleText.position.y = 560;
var restartbutton = PIXI.Sprite.fromImage("images/zaiwan.jpg");
restartbutton.position.x = 90;
restartbutton.position.y = 710;
restartbutton.setInteractive(!0);
restartbutton.mousedown = restartbutton.touchstart = function() {
	GAME.game.start()
};
var fenxiangbutton = PIXI.Sprite.fromImage("images/fenxiang_btn.jpg");
fenxiangbutton.position.x = 335;
fenxiangbutton.position.y = 710;
fenxiangbutton.setInteractive(!0);
fenxiangbutton.mousedown = fenxiangbutton.touchstart = function() {
	//this.scale.x = .9;
	//this.scale.y = .9
	clickMore();
};
fenxiangbutton.mouseup = fenxiangbutton.touchend = function() {
	//this.scale.x = 1;
	//this.scale.y = 1;
	//stage.addChild(fenxiangbackground)
};
var fenxiangbackground = PIXI.Sprite.fromImage("images/fenxiang.png");
fenxiangbackground.setInteractive(!0);
fenxiangbackground.mousedown = fenxiangbackground.touchstart = function() {
	stage.removeChild(fenxiangbackground)
};
var ratio = new PIXI.Point;
function onResize() {
	var a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	ratio.x = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / screenWidth;
	ratio.y = a / screenHeight;
	var a = ratio.x < ratio.y ? ratio.x: ratio.y,
	b = screenHeight * a;
	renderer.view.style.width = screenWidth * a + "px";
	renderer.view.style.height = b + "px"
}
function intPrintf() {
	var a = [].slice.call(arguments),
	b = 0;
	return a.shift().replace(/%(\w)?(\d)?([dfsx])/ig,
	function(c, d, e, f) {
		c = e ? Array(e - 0 + 1).join(d || "") : "";
		"d" == f && (c += parseInt(a[b++]));
		return e ? c.slice( - 1 * e) : c
	})
}
function sprintf(a, b) {
	return a.replace(/\{([^}]+)\}/g,
	function(a, d) {
		return b[d]
	})
}
function animate() {
	"gameScreen" == GAME.currentScreen && GAME.game.update();
	renderer.render(stage);
	requestAnimFrame(animate)
}
window.onresize = onResize;
var shareData = {
	sTitle: "\u53ea\u67091%\u7684\u4eba\u624d\u80fd\u5f971\u5343\u5206\u4ee5\u4e0a\u7684\u5c0f\u6e38\u620f",
	sDesc: "",
};
 (function() {
	startup.run();
	requestAnimFrame(animate);
	onResize();
	document.oncontextmenu = function(a) {
		return ! 1
	}
})();
