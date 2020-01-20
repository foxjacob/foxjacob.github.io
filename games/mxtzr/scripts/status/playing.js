/// <reference path="../../vs-doc.js" />
/// <reference path="../game.js" /> 
void function (window, undefiend) { /* 缓存核心对象 */
 var content = game.content, renderer = game.renderer, touch = game.touch, mouse = game.mouse; 
 // 实例化游戏状态对象 
 var status1 = new Jyo.Status();
 var itemRects = { 
 // 金币10 
 goods10: new Jyo.Rectangle(0, 0, 108, 90), 
 // 金币50
 goods50: new Jyo.Rectangle(0, 91, 108, 90), 
 // 金币100 
 goods100: new Jyo.Rectangle(0, 182, 108, 90), 
 // 魅族 
 mx: new Jyo.Rectangle(0, 277, 92, 136),
 // 钞票 
 banknotes: new Jyo.Rectangle(0, 427, 122, 128), 
 // 秒拍X2 
 miaoPai: new Jyo.Rectangle(0, 563, 106, 110), 
 // 炸弹
 boom: new Jyo.Rectangle(0, 687, 99, 109),
 // 金币1000 
 goods1000: new Jyo.Rectangle(0, 797, 125, 87) }; 
 // 人物身体矩形列表 
 var bodyRects = { 
 // 女孩第一帧 
 girl1: new Jyo.Rectangle(0, 7, 86, 170), 
 // 女孩第二帧 
 girl2: new Jyo.Rectangle(143, 2, 86, 173), 
 // 男孩第一帧 
 boy1: new Jyo.Rectangle(272, 0, 97, 169), 
 // 男孩第二帧 
 boy2: new Jyo.Rectangle(386, 0, 100, 171) }; var npcName = currentSelectPerson == 0 ? "冰冰" : currentSelectPerson == 1 ? "晓明" : "任泉"; 
 // 说话列表 
 var sayList = [ ["要跑快点哦", "一起加油\r\n啊！"], ["加油，争取\r\n做第一哦", "快过来，捡\r\n个大的", "碧空万里无\r\n雷呀"], ["哈哈，我厉\r\n害吧", "注意别踩我\r\n脚哦", "激动的我想\r\n签名了", "让地雷来的\r\n更猛烈些吧"], ["加油,马上\r\n第一了", "你真的好棒\r\n啊", "太欢乐啦！\r\n继续加油"], ["箱子快装满\r\n了", "太棒太棒了\r\n你", "无敌幸运星\r\n啊", "碧空到处是\r\n雷啊"], ["财神爷驾到\r\n哦", "无敌了", "我们是最好\r\n搭档", "亲，小心那地\r\n雷", "简直Super棒"] ], sayList1 = [ ["xx你好俊\r\n哦", "xx记得躲开\r\n地雷哦"], ["xx你踩到\r\n我的脚了", "xx我们发\r\n财啦", "xx记得给\r\n我签名"], ["我那个去，\r\n发了", "xx你好厉\r\n害哦", "xx我要签\r\n名100张", "太欢乐啦！\r\n注意地雷"], ["跑出一身汗", "这次吃面可\r\n以加肉啦", "xx我们是\r\n无敌组合啊", "Oh my god，\r\n躲开地雷"], ["哇塞，我成\r\n财主了", "xx避开那\r\n地雷", "xx这漫天\r\n地雷啊", "xx我们要\r\n抗住啊"], ["xx我都数\r\n不过来了", "xx我们是\r\n好盆友", "嘿嘿我变态\r\n吧", "终于吊丝逆\r\n袭了", "让钱疯狂砸\r\n我吧"] ], currentSay = "", sayPerson = 0, showSay = false, sayTimer = new Jyo.Timer(function () { var subIndex = function () { if (score <= 5000) return 0; else if (score <= 10000) return 1; else if (score <= 15000) return 2; else if (score <= 25000) return 3; else if (score <= 50000) return 4; else return 5; }(); sayPerson = (sayPerson == 0 ? 1 : 0); if ((sayPerson == 0 ? sayList : sayList1)[subIndex].length == 0) { return; } currentSay = function () { var sayStr, sayIndex; if (sayPerson == 0) { sayIndex = Math.floor(Math.random() * (sayList[subIndex].length)); sayStr = sayList[subIndex][sayIndex]; sayList[subIndex] = sayList[subIndex].remove(sayIndex); } else { sayIndex = Math.floor(Math.random() * (sayList1[subIndex].length)); sayStr = sayList1[subIndex][sayIndex]; sayList1[subIndex] = sayList1[subIndex].remove(sayIndex); } return sayStr.replace("xx", npcName); }(); showSay = true; setTimeout(function () { showSay = false; }, 3000); }, 8000); 
 // 当前帧索引 
 var currentFrame = 0; 
 // 元素列表 
 var items = [];
 // 元素名称列表 
 var itemNameList = ["goods10", "goods50", "goods100", "mx", "banknotes", "miaoPai", "boom", "goods1000"]; 
 // 元素抽取概率表 
 var itemProbabilitys = [ [0.2, 0.1, 0.1, 0.05, 0.1, 0.1, 0.05, 0.3], [0.1, 0.1, 0.05, 0.1, 0.1, 0.175, 0.175, 0.2], [0.23, 0.1, 0.11, 0.01, 0.05, 0.1, 0.2, 0.2], [0.0, 0.0, 0.1, 0.05, 0.1, 0.05, 0.3, 0.3] ];
 // 元素抽取概率难度索引 
 var itemProbabilityIndex = 0; 
 // 行走动画计时器
 var animationTimer = new Jyo.Timer(function () { if (isRunning) { currentFrame = currentFrame == 0 ? 1 : 0; } }, 50); 
 // 速度计时器 
 var sppedTimer = new Jyo.Timer(function () { if (speed < 50) { speed++; if (speed > 12 && speed < 30) { itemProbabilityIndex = 1; } else if (speed >= 30 && speed < 40) { itemProbabilityIndex = 2; } else if (speed >= 40) { itemProbabilityIndex = 3; } } else { sppedTimer.stop(); } }, "1,11,21,31,41,51 * *"); 
 // 下落速度 
 var speed = 10;
 // 宝箱所在中心位置
 var boxCenterX = renderer.width / 2; 
 // 宝箱矩形 
 var boxRect = new Jyo.Rectangle(boxCenterX - 40, 1020, 80, 113);
 // 宝箱材质中心 
 var boxTextureCenterX = textures.box.width / 2;
 // 使用的Npc
 var npcFrame1 = null, npcFrame2 = null; 
 // 玩家材质
 var playerFrame1 = null, playerFrame2 = null; 
 // 分数元素 
 var scoreEl = document.getElementById("score"); 
 // 双倍分 
 var doubleSocreTimer = false; 
 // 最后分数 
 var lastAddSocre = 0, addSocreY = 900, addSocreX = 0; var isEndSay = false; var endText1, endText2; 
 // 是否已结束 
 var isEnd = false; status1.load = function () { 
 /// <summary>加载函数</summary> 
 scoreEl.value = "投资收益：$0"; document.getElementById("playingScreen").style.display = "block"; renderer.canvas.style.display = "block"; document.getElementById("leftController").style.display = "block"; document.getElementById("leftController").addEventListener("touchstart", goleft, false); document.getElementById("leftController").addEventListener("mousedown", goleft, false); document.getElementById("rightController").style.display = "block"; document.getElementById("rightController").addEventListener("touchstart", goRight, false); document.getElementById("rightController").addEventListener("mousedown", goRight, false); switch (currentSelectPerson) { case 0: npcFrame1 = createNpcTexture(bodyRects["girl1"], new Jyo.Rectangle(0, 0, 147, 148), 1); npcFrame2 = createNpcTexture(bodyRects["girl2"], new Jyo.Rectangle(0, 0, 147, 148), 2); break; case 1: npcFrame1 = createNpcTexture(bodyRects["boy1"], new Jyo.Rectangle(191, 0, 147, 148), 1); npcFrame2 = createNpcTexture(bodyRects["boy2"], new Jyo.Rectangle(191, 0, 147, 148), 2); break; case 2: npcFrame1 = createNpcTexture(bodyRects["boy1"], new Jyo.Rectangle(381, 0, 147, 148), 1); npcFrame2 = createNpcTexture(bodyRects["boy2"], new Jyo.Rectangle(381, 0, 147, 148), 2); break; } playerFrame1 = createPlayerTexture(bodyRects["boy1"], 1); playerFrame2 = createPlayerTexture(bodyRects["boy2"], 2); for (var i = 0; i < 20; i++) { var name = itemNameList.random(itemProbabilitys[itemProbabilityIndex]), x = Math.random() * (640 - itemRects[name].width), y = -itemRects[name].height - i * 200 - (Math.random() * 200); items.push({ name: name, x: x | 0, y: y, rect: itemRects[name] }); } sppedTimer.start(); animationTimer.start(); sayTimer.start(); }; function createNpcTexture(npcRect, useNpcFaceRect, frame) { 
 /* <summary>创建NPC材质</summary> /// <param name="npcRect" type="Jyo.Rectangle">NPC的身体矩形</param> /// <param name="npcRect" type="Jyo.Rectangle">NPC的头像矩形</param> /// <param name="frame" type="Number">动画帧索引</param> */
 var npcTexture = document.createElement("canvas"); npcTexture.width = npcRect.width, npcTexture.height = npcRect.height; var ctx = npcTexture.getContext("2d"); 
 // 绘制NPC身体
 ctx.drawImage(textures.body.object, npcRect.x, npcRect.y, npcRect.width, npcRect.height, 0, 0, npcRect.width, npcRect.height); if (currentSelectPerson == 2) { ctx.translate(npcRect.width, 0); ctx.scale(-1, 1); } 
 // 绘制NPC头像
 ctx.drawImage(textures.faces.object, useNpcFaceRect.x, useNpcFaceRect.y, useNpcFaceRect.width, useNpcFaceRect.height, currentSelectPerson == 2 ? 15 : currentSelectPerson == 1 ? frame == 1 ? 10 : 14 : 3, 10, 70, 70); if (currentSelectPerson == 2) { ctx.translate(npcRect.width, 0); ctx.scale(-1, 1); }
 // 绘制NPC发饰
 ctx.drawImage(textures.body.object, npcRect.x, npcRect.y, npcRect.width, 40, 0, 0, npcRect.width, 40); npcTexture.rect = npcRect; return npcTexture; } function createPlayerTexture(npcRect, frame) { 
 /** <summary>创建玩家材质</summary> /// <param name="npcRect" type="Jyo.Rectangle">玩家的身体矩形</param> /// <param name="frame" type="Number">动画帧索引</param> */
 var npcTexture = document.createElement("canvas"); npcTexture.width = npcRect.width, npcTexture.height = npcRect.height; var ctx = npcTexture.getContext("2d"); ctx.translate(npcRect.width, 0); ctx.scale(-1, 1); 
 // 绘制玩家身体
 ctx.drawImage(textures.body.object, npcRect.x, npcRect.y, npcRect.width, npcRect.height, 0, 0, npcRect.width, npcRect.height); ctx.translate(npcRect.width, 0); ctx.scale(-1, 1); 
 // 绘制玩家头像
 ctx.drawImage(textures.faces.object, 579, 22, 70, 68, 20, 14, 60, 60); ctx.translate(npcRect.width, 0); ctx.scale(-1, 1); 
 // 绘制玩家发饰
 ctx.drawImage(textures.body.object, npcRect.x, npcRect.y, npcRect.width, 40, 0, 0, npcRect.width, 40); ctx.translate(npcRect.width, 0); ctx.scale(-1, 1); npcTexture.rect = npcRect; return npcTexture; } var isRunning = false, runDir = true; status1.update = function () { 
 /// <summary>更新函数</summary>
 if (isEnd) return; 
 // 将鼠标映射到触摸事件上
 if (mouse.leftButton) { if (!mouse.click) { mouse.click = true; !!touch.ontouchstart && touch.ontouchstart([mouse]); } if (mouse.x != mouse.lastX && mouse.y != mouse.lastY) { !!touch.ontouchmove && touch.ontouchmove([mouse]); } mouse.lastX = mouse.x; mouse.lastY = mouse.y; } else if (mouse.click) { mouse.click = false; !!touch.ontouchend && touch.ontouchend([mouse]); } if (isRunning) { if (runDir) { boxCenterX -= (speed / 2); boxRect.x = boxCenterX - 40; if (boxCenterX - boxTextureCenterX - npcFrame1.rect.width + 23 <= 0) { boxCenterX = npcFrame1.rect.width + boxTextureCenterX - 23; boxRect.x = boxCenterX - 40; isRunning = false; } } else { boxCenterX += (speed / 2); boxRect.x = boxCenterX - 40; if (boxCenterX + boxTextureCenterX - 23 + playerFrame1.rect.width >= 640) { boxCenterX = 640 - playerFrame1.rect.width + 23 - boxTextureCenterX; boxRect.x = boxCenterX - 40; isRunning = false; } } } if (addSocreY >= 900) { addSocreY -= 2; } for (var i = 0; i < items.length; i++) { if (items[i].y < 1136) { items[i].y += speed; if (items[i].y >= 950 && boxRect.intersects(items[i].x, items[i].y, items[i].rect.width, items[i].rect.height)) { items[i].y = 1500; itemEvent(items[i].name); } } else if (items[i].y >= 1136) { var name = itemNameList.random(itemProbabilitys[itemProbabilityIndex]); items[i].name = name; items[i].rect = itemRects[name]; items[i].x = Math.random() * (640 - itemRects[name].width); items[i].y = items[i > 10 ? 0 : items.length - 1].y - i * 200 - (Math.random() * 200); if (items[i].y >= 0) { items[i].y = 1500; } } } }; function itemEvent(name) { var addGoods = 0; switch (name) { case "goods10": addGoods = 10; break; case "goods50": addGoods = 50; break; case "goods100": addGoods = 100; break; case "goods1000": addGoods = 1000; break; case "mx": if (doubleSocreTimer) { clearTimeout(doubleSocreTimer); } doubleSocreTimer = setTimeout(function () { clearTimeout(doubleSocreTimer); doubleSocreTimer = null; }, 5000); addSocreY = 1030; lastAddSocre = "秒拍双倍"; addGoods = Number.MAX_VALUE; break; case "banknotes": addGoods = 500; break; case "miaoPai": if (doubleSocreTimer) { clearTimeout(doubleSocreTimer); } doubleSocreTimer = setTimeout(function () { clearTimeout(doubleSocreTimer); doubleSocreTimer = null; }, 5000); addSocreY = 1030; lastAddSocre = "秒拍双倍"; addGoods = Number.MAX_VALUE; break; case "boom": var endTextList1 = ["吼吼！敢不敢\r\n再来一盘", "本来万里无雷的\r\n嘛", "下次我们要注意\r\n雷区哦", "爱死你啦，雷都\r\n敢踩"], endTextList2 = ["xx地雷炸到我\r\n了，呜呜~", "xx耍的我腿都\r\n酸啦", "xx和你玩游戏\r\n好开心哇", "xx我们中奖了\r\n,下次跑快点啊"]; endText1 = endTextList1[Math.floor(Math.random() * endTextList1.length)], endText2 = endTextList2[Math.floor(Math.random() * endTextList2.length)].replace("xx", npcName); isEnd = true; isRunning = true; setTimeout(function () { 
 // 加载结束屏幕
 Jyo.importScript(baseUrl + "scripts/status/gameOver.js"); }, 3000); setTimeout(function () { isEndSay = true; }, 1000); return; } if (addGoods != Number.MAX_VALUE) { if (doubleSocreTimer) { addGoods *= 2; lastAddSocre = "+" + (addGoods / 2) + "x2"; } else { lastAddSocre = "+" + addGoods; } if (addGoods != 0) { addSocreY = 1015; score += addGoods; scoreEl.value = "投资收益：$" + score; } else { addSocreY = 850; } } addSocreX = renderer.getTextWidth(lastAddSocre, "Bold 36px 微软雅黑,黑体") / 2; } status1.draw = function () { 
 /// <summary>绘制函数</summary> 
 // 清空画布内容 
 renderer.clear(); 
 // 准备开始绘制 
 renderer.begin(); var npcFrame = currentFrame == 0 ? npcFrame1 : npcFrame2, playerFrame = currentFrame == 0 ? playerFrame1 : playerFrame2; var item = null; for (var i = 0; i < items.length; i++) { if (items[i].y < -128) content; item = items[i], renderer.drawImage(textures.items, item.x, item.y, item.rect.width, item.rect.height, item.rect.x, item.rect.y, item.rect.width, item.rect.height); }
 // 绘制宝箱 
 renderer.drawImage(textures.box, boxCenterX - boxTextureCenterX, 1015);
 // 绘制NPC 
 renderer.drawImage(npcFrame, boxCenterX - boxTextureCenterX - npcFrame.rect.width + 23, 957); 
 // 绘制玩家
 renderer.drawImage(playerFrame, boxCenterX + boxTextureCenterX - 23, 957); if (showSay && sayPerson == 0 && !isEnd) { renderer.drawImage(textures.dialog, boxCenterX - boxTextureCenterX - npcFrame1.rect.width + 23, 850); renderer.drawText(currentSay, boxCenterX - boxTextureCenterX - npcFrame1.rect.width + 32, 859, "#5c5042", "Bold 22px 微软雅黑,黑体"); renderer.drawText(currentSay, boxCenterX - boxTextureCenterX - npcFrame1.rect.width + 33, 860, "#fff", "Bold 22px 微软雅黑,黑体"); } else if (showSay && sayPerson == 1 && !isEnd) { renderer.drawImage(textures.dialog, boxCenterX + boxTextureCenterX - 103, 850); renderer.drawText(currentSay, boxCenterX + boxTextureCenterX - 92, 859, "#5c5042", "Bold 22px 微软雅黑,黑体"); renderer.drawText(currentSay, boxCenterX + boxTextureCenterX - 93, 860, "#fff", "Bold 22px 微软雅黑,黑体"); } if (addSocreY > 965) { var color = lastAddSocre.toString().indexOf("双倍") > 0 ? "#f00" : "#ffe177"; if (color == "#f00") { renderer.drawText(lastAddSocre, boxCenterX - addSocreX - 1, addSocreY - 1, "e77a71", "Bold 36px 微软雅黑,黑体"); } renderer.drawText(lastAddSocre, boxCenterX - addSocreX, addSocreY, color, "Bold 36px 微软雅黑,黑体"); } if (isEnd) { renderer.drawImage(textures.bang, boxCenterX - textures.bang.width / 2, 800); renderer.context.shadowBlur = 5; renderer.context.shadowColor = "#5c5042"; if (isEndSay) { renderer.drawImage(textures.dialog, boxCenterX - boxTextureCenterX - npcFrame1.rect.width + 23, 750); renderer.drawText(endText1, boxCenterX - boxTextureCenterX - npcFrame1.rect.width + 33, 760, "#fff", "Bold 20px 微软雅黑,黑体"); } renderer.drawImage(textures.dialog, boxCenterX + boxTextureCenterX - 93, 670); renderer.drawText(endText2, boxCenterX + boxTextureCenterX - 83, 680, "#fff", "Bold 20px 微软雅黑,黑体"); renderer.context.shadowBlur = 0; } 
 // 结束绘制
 renderer.end(); }; status1.loadingScreen = function () {
 /// <summary>资源加载中的绘制函数</summary> 
 // 清空画布内容 
 renderer.clear(); 
 // 准备开始绘制 
 renderer.begin(); renderer.context.shadowBlur = 10; renderer.context.shadowColor = "#000"; renderer.drawText("正在加载中...", (renderer.width - renderer.getTextWidth("正在加载中...", "Bold 36px 微软雅黑,黑体")) / 2, 550, "#fff", "Bold 36px 微软雅黑,黑体"); 
 // 结束绘制 
 renderer.end(); }; status1.unload = function () {
 /// <summary>卸载函数</summary> 
 document.getElementById("leftController").style.display = "none"; document.getElementById("leftController").removeEventListener("touchstart", goleft, false); document.getElementById("leftController").removeEventListener("mousedown", goleft, false); document.getElementById("rightController").style.display = "none"; document.getElementById("rightController").removeEventListener("touchstart", goRight, false); document.getElementById("rightController").removeEventListener("mousedown", goRight, false); document.getElementById("playingScreen").style.display = "none"; renderer.canvas.style.display = "none"; sppedTimer.stop(); animationTimer.stop(); sayTimer.stop(); }; function goleft() { runDir = true; isRunning = true; } function goRight() { runDir = false; isRunning = true; } 
 // 告诉游戏管理器要使用的游戏状态 
 game.useStatus(status1); }(window);