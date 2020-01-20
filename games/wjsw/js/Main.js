var 苦数据列表;
var 苦舞台层;
var 苦舞台索引 = 0;
var 常移步 = 8;
var 常移步慢 = 8;
var 常移步快 = 12;
var 苦值 = 3;
var 苦停止标志;
var 苦游戏主体;
var 苦运行地图;
var 苦运行角色;
var 苦名人层;
var 苦项目层;
var 苦星控制;
var bgmusic=new MusicObject("audio/bgmusic.mp3",true);
var 苦加载数据 = [
{name : "num_0",path : "images/num_0.png"}, 
{name : "num_1",path : "images/num_1.png"}, 
{name : "num_2",path : "images/num_2.png"}, 
{name : "num_3",path : "images/num_3.png"}, 
{name : "num_4",path : "images/num_4.png"}, 
{name : "num_5",path : "images/num_5.png"}, 
{name : "num_6",path : "images/num_6.png"}, 
{name : "num_7",path : "images/num_7.png"}, 
{name : "num_8",path : "images/num_8.png"}, 
{name : "num_9",path : "images/num_9.png"}, 
{name : "effect",path : "images/effect.png"}, 
{name : "logo",path : "kaishi.jpg"}, 
{name : "inputbox",path : "images/inputbox.png"}, 
{name : "spiritEffect",path : "images/spiritEffect.png"}, 
{name : "b_background",path : "beijing.jpg"}, 
{name : "m_background",path : "images/m_background.png"}, 
{name : "stage",path : "images/stage.png"}, 
{name : "chara",path : "images/chara.png"}, 
{name : "bird",path : "images/bird.png"}, 
{name : "gui",path : "images/gui.png"}, 
{name : "window",path : "shibai.jpg"}, 
{name : "HP_bg",path : "images/hp_bg.png"},  
{name : "HP_value",path : "images/hp_value.png"},
];
init(1000/30, "legend", 640, 1136, 主);
function 主() {
	var protocol = location.protocol;
	if(LGlobal.mobile){
		LGlobal.stageScale = LStageScaleMode.NO_BORDER;
		LSystem.screen(LStage.FULL_SCREEN);
	}
	LGlobal.setDebug(true);
	LMouseEventContainer.set(LMouseEvent.MOUSE_DOWN,true);
	LMouseEventContainer.set(LMouseEvent.MOUSE_UP,true);
	LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,true);
	loadingLayer = new LoadingSample4();
	addChild(loadingLayer);
	LLoadManage.load(苦加载数据, function(progress) {
		loadingLayer.setProgress(progress);
	}, 当图片加载完);
}
function 当图片加载完(result){
	苦数据列表 = result;
	removeChild(loadingLayer);
	loadingLayer = null;
	苦舞台层 = new LSprite();
	addChild(苦舞台层);
//	游戏开始();
	var logo = new 商标();
	苦舞台层.addChild(logo);
	return;
	var fps = new FPS();
	addChild(fps);
}
function 游戏开始(){
	苦舞台层.die();
	苦舞台层.removeAllChild();
	LTweenLite.removeAll();
	常移步 = 常移步慢;
	苦停止标志 = false;
	苦游戏主体 = new 游戏主体();
	苦舞台层.addChild(苦游戏主体);
	return;
	//debug
	
	var sprite = new LSprite();
	addChild(sprite);
    sprite.graphics.加(function (){
    	var c = LGlobal.canvas;
    	var w = 32,h = 32;
    	var l1 = LGlobal.width/w;
    	var l2 = LGlobal.height/h; 
		c.beginPath();
		c.strokeStyle = "#000000";
		for(var i=1;i<l1;i++){
			c.moveTo(w*i,0);
			c.lineTo(w*i,LGlobal.height);
		}
		for(var i=1;i<l2;i++){
			c.moveTo(0,h*i);
			c.lineTo(LGlobal.width,h*i);
		}
		c.stroke();
	});

	
	
}
///////////////////////////////////////
function 背景(){
	base(this,LSprite,[]);
	this.初始();
}
背景.prototype.初始 = function(){
	var 俺 = this;
	俺.back = new LBitmap(new LBitmapData(苦数据列表["b_background"],0,0,640,1136));//800,480
	俺.backX = 0;
	俺.addChild(俺.back);
	俺.grass = new LBitmap(new LBitmapData(苦数据列表["m_background"]));
	俺.grass.y = LGlobal.height - 俺.grass.getHeight();
	俺.addChild(俺.grass);
	俺.addEventListener(LEvent.ENTER_FRAME,俺.心跳);
};
背景.prototype.心跳 = function(event){
	var 俺 = event.target;
	if(苦游戏主体.为停止())return;
	俺.backX += 常移步*0.1;
	if(俺.backX > LGlobal.width){
		俺.backX -= LGlobal.width;
	}
	俺.back.bitmapData.setCoordinate(俺.backX,0);
	俺.grass.x -= 常移步*0.5;
	if(俺.grass.x + 960 < 0){
		俺.grass.x = LGlobal.width;
	}
};
///////////////////////////////////////
function 我(hp){
	base(this,LSprite,[]);
	this.初始(hp);
}
我.走 = "走";
我.飞 = "飞";
我.伤 = "伤";
我.跳 = "跳";
我.prototype.初始 = function(hp){
	var 俺 = this;
	俺.hp = hp;
	var effect = new LBitmap(new LBitmapData(苦数据列表["effect"]));
	effect.x = -180;
	effect.y = -70;
	俺.addChild(effect);
	俺.effect = effect;
	俺.effect.visible = false;
	var data = new LBitmapData(苦数据列表["chara"],0,0,100,130);
	var list = LGlobal.divideCoordinate(400,520,4,4);
	俺.action = 我.走;
	俺.heroShadows = [new LBitmap(data),new LBitmap(data)];
	俺.heroShadows[0].alpha = 0.7;
	俺.heroShadows[1].alpha = 0.3;
	俺.heroShadows[0].visible = false;
	俺.heroShadows[1].visible = false;
	俺.addChild(俺.heroShadows[0]);
	俺.addChild(俺.heroShadows[1]);
	俺.hero = new LAnimationTimeline(data,list);
	俺.hero.setLabel(我.走,0,0);
	俺.hero.setLabel(我.飞,1,0);
	俺.hero.setLabel(我.伤,2,0);
	俺.hero.setLabel(我.跳,3,0);
	俺.hero.x = -48;
	俺.hero.y = -120;
	俺.hero.speed = 6;
	俺.addChild(俺.hero);
	俺.heroShadows[0].x = 俺.hero.x - 20;
	俺.heroShadows[0].y = 俺.hero.y;
	俺.heroShadows[1].x = 俺.hero.x - 40;
	俺.heroShadows[1].y = 俺.hero.y;
	俺.vy = 0;
	俺.jumpCount = 0;
	俺.distance = 0;
	俺.spiritCount = 0;
	俺.countValue = 常移步*5;
	俺.addEventListener(LEvent.ENTER_FRAME,俺.心跳);
};
我.prototype.阴影改变 = function(value){
	var 俺 = this;
	俺.heroShadows[0].visible = value;
	俺.heroShadows[1].visible = value;
};
我.prototype.心灵结束 = function(){
	var 俺 = 苦运行角色;
	俺.spiritCount = 0;
	俺.hero.play();
	俺.hero.onframe();
	俺.阴影改变(true);
};
我.prototype.心灵开始 = function(){
	var 俺 = this;
	if(俺.spiritCount <= 1){
		苦运行角色.effect.alpha = 0;
		苦运行角色.effect.visible = true;
		常移步 = 常移步快;
		LTweenLite.to(苦运行角色.effect,1,{alpha:1,ease:LEasing.None,onComplete:俺.心灵结束});
		return;
	}
	俺.spiritCount--;
	var spirit = new LSprite();
	var spiritBitmap = new LBitmap(new LBitmapData(苦数据列表["spiritEffect"]));
	spiritBitmap.x = -spiritBitmap.getWidth()*0.5;
	spiritBitmap.y = -spiritBitmap.getHeight()*0.5;
	spirit.addChild(spiritBitmap);
	spirit.scaleX = spirit.scaleY = 5;
	俺.spirit = spirit;
	俺.addChild(spirit);
	LTweenLite.to(spirit,0.5,{scaleX:0.1,scaleY:0.1,rotate:360,ease:LEasing.None,onComplete:function(){
		俺.spirit.remove();
		俺.心灵开始();
	}});
};
我.prototype.置矩形 = function(){
	var 俺 = this;
	俺.rect = new LRectangle(50 + 俺.hero.x,22 + 俺.hero.y,50,86);
};
我.prototype.无敌 = function(){
	return this.effect.visible;
};
我.prototype.心跳 = function(event){
	var 俺 = event.target;
	if(苦游戏主体.为停止()){
		if(俺.hero.mode != 0){
			俺.hero.stop();
		}
		return;
	}else if(俺.hero.mode == 0){
		俺.hero.play();
	}
	俺.y += 俺.vy;
	俺.vy += 苦值;
	if(俺.无敌()){
		苦星控制.改值(-0.1);
		if(苦星控制.value <= 0){
			俺.effect.visible = false;
			俺.阴影改变(false);
		}
	}
	if(俺.vy > 32)俺.vy = 32;
	if(俺.y > LGlobal.height + 100){
		俺.die();
//		MySoundPlayer.playSound("gameover");
		俺.parent.游戏结束();
		return;
	}
	俺.distance += 常移步;
	var countValue = 俺.distance / 俺.countValue >>> 0;
	if(俺.distanceObj && 俺.distanceObj.value < countValue){
		俺.distanceObj.置值(countValue);
	}
	if(俺.action == 我.飞){
		俺.hp.改值(-0.5);
		if(俺.hp.value <= 1){
			俺.跳起来();
		}else{
//			MySoundPlayer.playSound("飞");
			俺.vy = 0;
			俺.y -= 4;
			if(俺.y < 64)俺.y = 64;
		}
		return;
	}else if(俺.action == 我.伤){
		if(俺.hertCount-- < 0){
			俺.运行起来();
		}
	}else{
		俺.hp.改值(0.05);
	}
	if(俺.vy < 0)return;
	var checkList = 苦运行地图.childList,child;
	for(var i=0,l=checkList.length;i<l;i++){
		child = checkList[i];
		if(child.检查碰撞点(俺.x,俺.y)){
			俺.y = child.y;
			俺.vy = 0;
			俺.jumpCount = 0;
			俺.运行起来();
			break;
		}
	}
};
我.prototype.跳 = function(){
	var 俺 = this;
	if(俺.action == 我.伤)return;
	if(俺.jumpCount < 2){
//		MySoundPlayer.playSound("跳");
		俺.vy = -30;
		俺.jumpCount++;
		俺.跳起来();
	}else if(俺.hp.value > 1){
		俺.飞();
	}
};
我.prototype.跳完 = function(){
	var 俺 = this;
	if(俺.action == 我.伤)return;
	俺.跳起来();
};
我.prototype.跳起来 = function(){
	var 俺 = this;
	if(俺.action == 我.跳)return;
	俺.action = 我.跳;
	俺.hero.gotoAndPlay(我.跳);
};
我.prototype.飞 = function(){
	var 俺 = this;
	if(俺.action == 我.飞)return;
	俺.action = 我.飞;
	俺.hero.gotoAndPlay(我.飞);
	俺.hero.onframe();
};
我.prototype.运行起来 = function(){
	var 俺 = this;
	if(俺.action == 我.走)return;
	if(俺.action == 我.伤 && 俺.hertCount>=0)return;
	俺.action = 我.走;
	俺.hero.gotoAndPlay(我.走);
	俺.hero.onframe();
};
我.prototype.伤 = function(){
	var 俺 = this;
	if(俺.action == 我.伤)return;
	俺.action = 我.伤;
	俺.hero.gotoAndPlay(我.伤);
	俺.hertCount = 10;
	俺.hp.改值(-20);
};
///////////////////////////////////////
function 商标(){
	base(this,LSprite,[]);
	this.初始();
}
商标.prototype.初始 = function(){
	var 俺 = this,labelText;
	var bitmap = new LBitmap(new LBitmapData(苦数据列表["logo"]));
	俺.addChild(bitmap);
	俺.addEventListener(LMouseEvent.MOUSE_UP, 俺.开始);
};
商标.prototype.开始 = function(event){
	var 俺 = event.clickTarget;
	游戏开始();
	bgmusic.replay();	
};
///////////////////////////////////////
function 地图(){
	base(this,LSprite,[]);
	this.初始();
}
地图.prototype.初始 = function(){
	var 俺 = this;
	俺.dieFloorList = [];
	俺.加底部(2);
	俺.floor.x = 0;
	俺.addEventListener(LEvent.ENTER_FRAME,俺.心跳);
};
地图.prototype.心跳 = function(event){
	var 俺 = event.target;
	if(苦游戏主体.为停止())return;
	while(俺.dieFloorList.length > 0){
		var child = 俺.dieFloorList.shift();
		俺.removeChild(child);
	}
};
地图.prototype.加底部 = function(index){
	var 俺 = this;
	俺.floor = StageData.取底部(index);
	俺.addChild(俺.floor);
	俺.floor.addEventListener(底部.OUT_COMPLETE,俺.取底部);
	俺.floor.addEventListener(底部.OUT_DIE,俺.加死亡底部);
};
地图.prototype.取底部 = function(event){
	var 俺 = event.target.parent;
	俺.floor.removeEventListener(底部.OUT_COMPLETE,俺.取底部);
	俺.加底部(1);
};
地图.prototype.加死亡底部 = function(event){
	var 俺 = event.target.parent;
	俺.dieFloorList.push(event.target);
};
///////////////////////////////////////
var StageData = {
	取底部:function(index){
		var floor;
		floor = new 底部(index);
		return floor;
	}
};
///////////////////////////////////////
function 游戏主体(){
	base(this,LSprite,[]);
	this.初始();
}
游戏主体.prototype.初始 = function(){
	var 俺 = this;
	俺.moveStepCount = 0;
	俺.gameover = false;
	var background = new 背景();
	俺.addChild(background);
	俺.speedBitmap = new LBitmap(new LBitmapData(苦数据列表["stage"],32*14,32*3,40,48));
	俺.speedBitmap.x = 32;
	俺.speedBitmap.y = 30;
	俺.speedBitmap.visible = false;
	俺.addChild(俺.speedBitmap);
	苦项目层 = new LSprite();
	苦名人层 = new LSprite();
	苦运行地图 = new 地图();
	俺.addChild(苦运行地图);
	俺.addChild(苦项目层);
	俺.addChild(苦名人层);
	var hp = new 血();
	hp.x = 16;
	hp.y = 10;
	苦星控制 = new 星();
	苦星控制.x = 32 + hp.getWidth();
	苦星控制.y = 2;
	苦运行角色 = new 我(hp);
	苦运行角色.x = 32 * 8;
	苦运行角色.y = 32 * 4;
	苦运行角色.置矩形();
	俺.addChild(苦运行角色);
	俺.character = 苦运行角色;
	俺.addChild(hp);
	俺.addChild(苦星控制);
	var num = new 数值(数值.LEFT);
	num.x = LGlobal.width/2 ;
	num.y = 42;
	俺.addChild(num);
	苦运行角色.distanceObj = num;
	俺.stopBitmapData = new LBitmapData(苦数据列表["stage"],32*23,32*3,64,64);
	俺.playBitmapData = new LBitmapData(苦数据列表["stage"],32*25,32*3,64,64);
	俺.stopBitmap = new LBitmap(俺.stopBitmapData);
	俺.stopBitmap.x = 416;
	俺.stopBitmap.y = 16;
	俺.addChild(俺.stopBitmap);
	俺.addEventListener(LMouseEvent.MOUSE_UP, 俺.mouseup);
	俺.addEventListener(LMouseEvent.MOUSE_DOWN, 俺.mousedown);
	俺.addEventListener(LEvent.ENTER_FRAME,俺.心跳);
};
游戏主体.prototype.为停止 = function(){
	if(苦停止标志 || 苦运行角色.spiritCount > 0){
		return true;
	}
	return false;
};
游戏主体.prototype.心跳 = function(event){
	var 俺 = event.target,child,i,l;
	if(苦游戏主体.为停止())return;
	if(常移步 == 常移步快){
		if(俺.moveStepCount-- <= 0 && !苦运行角色.无敌()){
			常移步 = 常移步慢;
			俺.speedBitmap.visible = false;
		}
	}
	for(i=0,l=苦名人层.childList.length;i<l;i++){
		child = 苦名人层.childList[i];
		if(child.x < -96){
			child.remove();
			i--;
			l--;
		}
	}
	for(i=0,l=苦项目层.childList.length;i<l;i++){
		child = 苦项目层.childList[i];
		if(child.x < -96){
			child.remove();
			i--;
			l--;
		}
	}
};
游戏主体.prototype.mousedown = function(event){
	var 俺 = event.clickTarget;
	if(event.selfX > 俺.stopBitmap.x && event.selfX < 俺.stopBitmap.x + 俺.stopBitmap.getWidth() && 
		event.selfY > 俺.stopBitmap.y && event.selfY < 俺.stopBitmap.y + 俺.stopBitmap.getHeight()){
		if(苦停止标志){
			俺.stopBitmap.bitmapData = 俺.stopBitmapData;
//			MySoundPlayer.background.play();
		}else{
			俺.stopBitmap.bitmapData = 俺.playBitmapData;
//			MySoundPlayer.background.stop();
		}
		苦停止标志 = !苦停止标志;
		return;
	}
	if(苦游戏主体.为停止())return;
//	MySoundPlayer.loadSound();
	俺.character.跳();
};
游戏主体.prototype.mouseup = function(event){
	var 俺 = event.clickTarget;
	if(苦游戏主体.为停止())return;
	俺.character.跳完();
};
游戏主体.prototype.游戏结束 = function(event){
	苦停止标志 = true;
	var 俺 = this;
	俺.removeEventListener(LMouseEvent.MOUSE_UP, 俺.mouseup);
	俺.removeEventListener(LMouseEvent.MOUSE_DOWN, 俺.mousedown);
	var overLayer = new 游戏结束();
	俺.addChild(overLayer);
};
///////////////////////////////////////
function 底部(index){
	base(this,LSprite,[]);
	this.初始(index);
}
底部.OUT_COMPLETE = "floor_out_complete";
底部.OUT_DIE = "floor_out_die";
底部.prototype.初始 = function(index){
	var 俺 = this;
	俺.isOutComplete = false;
	俺.x = LGlobal.width;
	俺.y = 32*6 + 32*(8*Math.random() >>> 0);
	俺.isStart = false;
	var bitmap,rightBitmap;
	switch(index){
		case 1:
			bitmap = new LBitmap(new LBitmapData(苦数据列表["stage"],0,0,32*(3 + (19*Math.random() >>> 0)),96));
			bitmap.y = -32;
			俺.addChild(bitmap);
			break;
		default:
			俺.isStart = true;
			bitmap = new LBitmap(new LBitmapData(苦数据列表["stage"],0,0,960,96));
			bitmap.y = -32;
			俺.addChild(bitmap);
			rightBitmap = true;
			break;
	}
	if(!rightBitmap){
		rightBitmap = new LBitmap(new LBitmapData(苦数据列表["stage"],32*29,0,32,96));
		rightBitmap.x = bitmap.getWidth();
		rightBitmap.y = -32;
		俺.addChild(rightBitmap);
	}
	俺.maxRight = LGlobal.width - 32*2 - 32*(10*Math.random() >>> 0);
	俺.right = 俺.getWidth();
	俺.bottom = 32*2;
	名人.加(俺);
	俺.addEventListener(LEvent.ENTER_FRAME,俺.心跳);
};
底部.prototype.心跳 = function(event){
	var 俺 = event.target;
	if(苦游戏主体.为停止())return;
	俺.x -= 常移步;
	if(!俺.isOutComplete && 俺.x + 俺.getWidth() < 俺.maxRight){
		俺.isOutComplete = true;
		俺.dispatchEvent(底部.OUT_COMPLETE);
	}else if(俺.x + 俺.getWidth() < 0){
		俺.dispatchEvent(底部.OUT_DIE);
		俺.die();
	}
};
底部.prototype.检查碰撞点 = function(x,y){
	var 俺 = this;
	if(x > 俺.x && x < 俺.x + 俺.right && y > 俺.y && y< 俺.y + 俺.bottom){
		return true;
	}
	return false;
};
///////////////////////////////////////
function 血(){
	base(this,LSprite,[]);
	this.初始();
}
血.prototype.初始 = function(){
	var 俺 = this;
	var HP_bg = new LBitmap(new LBitmapData(苦数据列表["HP_bg"]));
	HP_bg.x = 445;			//-15
	HP_bg.y = 100;		//-2
	俺.addChild(HP_bg);
	俺.value = 俺.maxValue = 100;
	俺.HP_value = new LBitmap(new LBitmapData(苦数据列表["HP_value"]));
	俺.HP_value.x = 453;			//-15
	俺.HP_value.y = 102;		//-2
	俺.addChild(俺.HP_value);
};
血.prototype.改值 = function(value){
	var 俺 = this;
	俺.value += value;
	if(俺.value < 1){
		俺.value = 1;
	}else if(俺.value > 100){
		俺.value = 100;
	}
	俺.HP_value.scaleX = 俺.value/俺.maxValue;
};
///////////////////////////////////////
function 数值(direction){
	base(this,LSprite,[]);
	this.初始(direction);
}
数值.LEFT = "num_left";
数值.RIGHT = "num_right";
数值.prototype.初始 = function(direction){
	var 俺 = this;
	俺.direction = direction;
	俺.苦数据列表 = [
		new LBitmapData(苦数据列表["num_0"]),
		new LBitmapData(苦数据列表["num_1"]),
		new LBitmapData(苦数据列表["num_2"]),
		new LBitmapData(苦数据列表["num_3"]),
		new LBitmapData(苦数据列表["num_4"]),
		new LBitmapData(苦数据列表["num_5"]),
		new LBitmapData(苦数据列表["num_6"]),
		new LBitmapData(苦数据列表["num_7"]),
		new LBitmapData(苦数据列表["num_8"]),
		new LBitmapData(苦数据列表["num_9"])
	];
	俺.list = [];
	俺.置值(0);
};
数值.prototype.置值 = function(value){
	var 俺 = this;
	俺.value = value;
	var strValue = 俺.value.toString(),numBitmap,sx;
	if(俺.childList.length != strValue.length){
		俺.置列表(strValue.length);
	}
	for(var i=0,l=strValue.length;i<l;i++){
		numBitmap = 俺.childList[i];
		numBitmap.bitmapData = 俺.苦数据列表[parseInt(strValue.charAt(i))];
	}
};
数值.prototype.置列表 = function(length){
	var 俺 = this;
	if(俺.childList.length > length){
		俺.childList.splice(length - 1,俺.childList.length - length);
		return;
	}
	var sx,numBitmap;
	if(俺.direction == 数值.LEFT){
		sx = -length*20;
	}else{
		sx = -20;
	}
	for(var i=0,l=length;i<l;i++){
		if(i >= 俺.childList.length){
			numBitmap = new LBitmap(俺.苦数据列表[0]);
			俺.addChild(numBitmap);
		}
		numBitmap = 俺.childList[i];
		sx += 20;
		numBitmap.x = sx;
	}
};
///////////////////////////////////////
function 名人(name){
	base(this,LSprite,[]);
	this.初始(name);
}
名人.prototype.初始 = function(name){
	var 俺 = this;
	俺.name = name;
	var data = new LBitmapData(苦数据列表[name],0,0,96,96);
	var list = LGlobal.divideCoordinate(384,96,1,4);
	俺.hero = new LAnimationTimeline(data,list);
	俺.hero.x = -48;
	俺.hero.y = -90;
	俺.hero.speed = 16;		//6
	俺.addChild(俺.hero);
	俺.vy = 0;
	俺.苦值 = 0;
	俺.speedx = 0;
	if(俺.name == "gui"){
		俺.苦值 = 苦值;
		俺.hero.y = -96;
		俺.rect = new LRectangle(-48,-70,96,70);
	}else if(俺.name == "bird"){
		俺.hero.y = -64;
		俺.speedx = 14;			//4
		俺.rect = new LRectangle(-32,-32,64,32);
	}
	//俺.graphics.drawRect(2,"#ff0000",[俺.rect.x,俺.rect.y,俺.rect.width,俺.rect.height],true,"#880088");
	俺.addEventListener(LEvent.ENTER_FRAME,俺.心跳);
};
名人.prototype.心跳 = function(event){
	var 俺 = event.target;
	if(苦游戏主体.为停止()){
		if(俺.hero.mode != 0){
			俺.hero.stop();
		}
		return;
	}else if(俺.hero.mode == 0){
		俺.hero.play();
	}
	俺.检查碰撞();
	俺.y += 俺.vy;
	俺.vy += 俺.苦值;
	俺.x -= (常移步 + 俺.speedx);
	if(俺.vy <= 0)return;
	var checkList = 苦运行地图.childList,child;
	for(var i=0,l=checkList.length;i<l;i++){
		child = checkList[i];
		if(child.检查碰撞点(俺.x,俺.y)){
			俺.y = child.y;
			俺.vy = 0;
			break;
		}
	}
};
名人.prototype.检查碰撞 = function(){
	var 俺 = this;
	if(俺.x < -96)return;
	if(苦运行角色.rect.action != 我.伤){
		var ix = (俺.x + 俺.rect.x) > (苦运行角色.x + 苦运行角色.rect.x) ? (俺.x + 俺.rect.x) : (苦运行角色.x + 苦运行角色.rect.x);
		var iy = (俺.y + 俺.rect.y) > (苦运行角色.y + 苦运行角色.rect.y) ? (俺.y + 俺.rect.y) : (苦运行角色.y + 苦运行角色.rect.y);
		var ax = (俺.x + 俺.rect.x + 俺.rect.width) > (苦运行角色.x + 苦运行角色.rect.x + 苦运行角色.rect.width) ? (苦运行角色.x + 苦运行角色.rect.x + 苦运行角色.rect.width) : (俺.x + 俺.rect.x + 俺.rect.width);
		var ay = (俺.y + 俺.rect.y + 俺.rect.height) > (苦运行角色.y + 苦运行角色.rect.y + 苦运行角色.rect.height) ? (苦运行角色.y + 苦运行角色.rect.y + 苦运行角色.rect.height) : (俺.y + 俺.rect.y + 俺.rect.height);
		if(ix <= ax && iy <= ay){
			if(苦运行角色.无敌()){
				俺.removeEventListener(LEvent.ENTER_FRAME,俺.心跳);
				LTweenLite.to(俺,4,{y:Math.random()>0.5?-LGlobal.height:LGlobal.height*2,x:-200,ease:Elastic.easeOut});
			}else{
				苦运行角色.伤();
			}
		}
	}
};
名人.加 = function(floor){
	if(floor.isStart)return;
	var npc;
	var randNum = Math.random();
	if(randNum > 0.8){
		npc = new 名人("gui");
		npc.y = floor.y - 32;
	}else if(randNum > 0.6){
		npc = new 名人("bird");
		npc.y = floor.y - npc.getHeight();
	}else{
		项.加(floor);
	}
	if(npc){
		npc.x = 48 + floor.x + (floor.getWidth() - 96)*Math.random();
		苦名人层.addChild(npc);
	}
};
///////////////////////////////////////
function 项(name){
	base(this,LSprite,[]);
	this.初始(name);
}
项.MODE_LIVE = "live";
项.MODE_GET = "get";
项.MODE_DELETE = "delete";
项.prototype.初始 = function(name){
	var 俺 = this;
	俺.name = name;
	if(俺.name == "star"){
		俺.bitmap = new LBitmap(new LBitmapData(苦数据列表["stage"],32*9,32*3,32,32));
	}else if(俺.name == "speed"){
		俺.bitmap = new LBitmap(new LBitmapData(苦数据列表["stage"],32*14,32*3,40,48));
		俺.bitmap.x = -1;
		俺.bitmap.y = -8;
	}else if(俺.name == "solution"){
		俺.bitmap = new LBitmap(new LBitmapData(苦数据列表["stage"],32*16,32*3,40,48));
		俺.bitmap.x = -4;
		俺.bitmap.y = -8;
	}
	俺.mode = 项.MODE_LIVE;
	俺.addChild(俺.bitmap);
	俺.addEventListener(LEvent.ENTER_FRAME,俺.心跳);
};
项.prototype.心跳 = function(event){
	var 俺 = event.target;
	if(苦游戏主体.为停止())return;
	if(俺.mode == 项.MODE_LIVE){
		俺.检查碰撞();
	}
	俺.x -= 常移步;
};
项.prototype.检查碰撞 = function(){
	var 俺 = this;
	if(俺.x < -130)return;
	if(苦运行角色.rect.action != 我.伤){
		var ix = 俺.x > (苦运行角色.x + 苦运行角色.rect.x) ? 俺.x : (苦运行角色.x + 苦运行角色.rect.x);
		var iy = 俺.y > (苦运行角色.y + 苦运行角色.rect.y) ? 俺.y : (苦运行角色.y + 苦运行角色.rect.y);
		var ax = (俺.x + 32) > (苦运行角色.x + 苦运行角色.rect.x + 苦运行角色.rect.width) ? (苦运行角色.x + 苦运行角色.rect.x + 苦运行角色.rect.width) : (俺.x + 32);
		var ay = (俺.y + 32) > (苦运行角色.y + 苦运行角色.rect.y + 苦运行角色.rect.height) ? (苦运行角色.y + 苦运行角色.rect.y + 苦运行角色.rect.height) : (俺.y + 32);
		if(ix <= ax && iy <= ay){
			if(俺.name == "star"){
				苦星控制.改值(1);
			}else if(俺.name == "speed"){
				苦游戏主体.moveStepCount = 200;
				苦游戏主体.speedBitmap.visible = true;
				常移步 = 常移步快;
			}else if(俺.name == "solution"){
				苦运行角色.hp.改值(20);
			}
//			MySoundPlayer.playSound("get");
			俺.mode = 项.MODE_GET;
			LTweenLite.to(俺.bitmap,0.2,{y:-10,scaleX:0.1,alpha:0.75,ease:LEasing.None})
		    .to(俺.bitmap,0.2,{y:-20,scaleX:1,alpha:0.5,ease:LEasing.None})
		    .to(俺.bitmap,0.2,{y:-30,scaleX:0.1,alpha:0.25,ease:LEasing.None})
		    .to(俺.bitmap,0.2,{y:-40,scaleX:1,alpha:0,ease:LEasing.None});
		}
	}
};
项.加 = function(floor){
	var item,i;
	var randNum = Math.random();
	if(randNum > 0.7){
		return;
	}
	var maxnum = floor.getWidth()/32 >>> 0,addnum;
	if(maxnum > 5){
		addnum = 5 + ((maxnum - 5)*Math.random() >>> 0);
	}else{
		addnum = maxnum;
	}
	var sx = floor.x + (floor.getWidth() - addnum*32)*0.5;//路上出来的“心”★
	var specialItem = false;
	for(i=0;i<addnum;i++){
		if(i % 2 == 0)continue;
		randNum = Math.random();
		if(randNum > 0.95 && !specialItem){
			specialItem = true;
			item = new 项("speed");
		}else if(randNum > 0.9 && !specialItem){
			specialItem = true;
			item = new 项("solution");
		}else{
			item = new 项("star");
		}
		item.x = sx + i*32;
		item.y = floor.y - 32;
		苦项目层.addChild(item);
	}
};
function 星(){
	base(this,LSprite,[]);
	this.初始();
}
星.prototype.初始 = function(){
	var 俺 = this;
	var Star_bg = new LBitmap(new LBitmapData(苦数据列表["stage"],32*9,32*4,32*5,32));
	俺.addChild(Star_bg);
	俺.value = 0;
	俺.maxValue = 50;
	俺.Star_value = new LBitmap(new LBitmapData(苦数据列表["stage"],32*9,32*3,32*5,32));
	俺.addChild(俺.Star_value);
	俺.改值(49);
};
星.prototype.改值 = function(value){
	var 俺 = this;
	俺.value += value;
	俺.Star_value.visible = true;
	if(俺.value < 0){
		俺.value = 0;
		俺.Star_value.visible = false;
		return;
	}else if(俺.value > 俺.maxValue){
		俺.value = 俺.maxValue;
	}
	俺.Star_value.bitmapData.setProperties(32*9,32*3,32*5*俺.value/俺.maxValue,32);
	if(俺.value == 俺.maxValue && !苦运行角色.无敌()){
		苦运行角色.spiritCount = 4;
		苦运行角色.hero.stop();
		苦运行角色.心灵开始();
	}
};
///////////////////////////////////////
function 游戏结束(){
	base(this,LSprite,[]);
	this.初始();
}
游戏结束.prototype.初始 = function(){
	var 俺 = this;
	俺.overLayer = new LSprite();
	俺.addChild(俺.overLayer);
	var windowBitmap = new LBitmap(new LBitmapData(苦数据列表["window"]));
	俺.overLayer.addChild(windowBitmap);
	俺.overLayer.x = (LGlobal.width - 俺.overLayer.getWidth())*0.5;
	俺.overLayer.y = (LGlobal.height - 俺.overLayer.getHeight())*0.5;
	var 蚊游戏分 = new LTextField();
	蚊游戏分.text = "勇气 : " + 苦运行角色.distanceObj.value;
	蚊游戏分.color = "#FFFFFF";
	蚊游戏分.size = 45;
	蚊游戏分.weight = "bolder";
	蚊游戏分.x = 210;
	蚊游戏分.y = 120;
	俺.overLayer.addChild(蚊游戏分);
	// updateShare(苦运行角色.distanceObj.value);
	// Play68.setRankingScoreDesc(苦运行角色.distanceObj.value);
	bgmusic.pause();
	var 豹再来 = new LButtonSample1("再来一次");
	豹再来.x = 150;
	豹再来.y = 650;
	豹再来.width = 150;
	豹再来.height = 60;
	俺.overLayer.addChild(豹再来);
	豹再来.addEventListener(LMouseEvent.MOUSE_UP, function(){
		游戏开始();
		bgmusic.replay();
	});
	var more = new LButtonSample1("更多游戏");
	more.x = 350;
	more.y = 650;
	more.width = 150;
	more.height = 60;
	俺.overLayer.addChild(more);
	more.addEventListener(LMouseEvent.MOUSE_UP, function(){
		clickMore();
	});
};