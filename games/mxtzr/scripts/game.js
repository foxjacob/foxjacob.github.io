/// <reference path="../vs-doc.js" /> 
// 定义游戏对象 
var game; // 基础路径
var baseUrl = ""; 
var currentSelectPerson = 0; 
// 分数 
var score = 0; 
var textures = { title: new Jyo.Texture(), startTips: new Jyo.Texture(), ranklistBg: new Jyo.Texture(), items: new Jyo.Texture(), faces: new Jyo.Texture(), btnStart: new Jyo.Texture(), btnStart1: new Jyo.Texture(), btnRanklist: new Jyo.Texture(), body: new Jyo.Texture(), box: new Jyo.Texture(), gameOverTitle: new Jyo.Texture(), gameOverBg: new Jyo.Texture(), gameOverSubTitle: new Jyo.Texture(), btnGameOver: new Jyo.Texture(),    bang: new Jyo.Texture(), dialog: new Jyo.Texture(), ranklistElement: new Jyo.Texture() }; var backgroundMusic = document.createElement("audio"); backgroundMusic.addEventListener("ended", function () { this.play(); }, false); backgroundMusic.addEventListener("canplaythrough", function () { if (this.canPlay) { this.play(); } }, false); backgroundMusic.src = baseUrl + "#"; var isInit = false; try { game = new Jyo.Game(); } catch (e) { } window.onload = function () { 
//IE6-9 
document.body.onselectstart = document.body.ondrag = function () { return false; }
 document.getElementById("score").onselectstart = document.getElementById("score").onselect = function (e) {
 e = e || event; e.returnValue = false; e.stopPropagation(); e.preventDefault(); 
 document.getElementById("game").focus();
 }; 
 document.getElementById("game").onselectstart = document.getElementById("game").onselect = function (e) { 
 e = e || event; e.returnValue = false; 
 e.stopPropagation(); 
 e.preventDefault(); 
 document.getElementById("game").focus(); }; 
// 实例化游戏对象
 game = game = new Jyo.Game("game", "Canvas"); 
 // 运行游戏 
 game.run(); 
 // updateShare(0);
 // 设置资源根目录
 game.content.rootDirectory = "content"; 
 // 设置画布为同比缩放模式 
 game.renderer.enableAutoSize("ratio"); // 加载开始屏幕 
 Jyo.importScript(baseUrl + "scripts/status/startScreen.js"); }; 
 window.onunload = function () { backgroundMusic.src = "#"; };