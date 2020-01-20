window.onload=function(){
	try{
		//bodyObj.removeChild(loadingBox);
	}catch(e){}
	try{
		initEvent();//固定加载事件防范
	}catch(e){}
	try{
		doAction();//每个页面都必须存在，用来执行该页面的方法
	}catch(e){}
	
}

var weixinState=0;//0未就绪，1就绪



function doAction(){
	if(!GetParam('restart')){
		window.clearTimeout(loadTimer);
		document.getElementById('progressingId').style.width='100%';
		setTimeout(function(){
			initGame();
		},1000);
	}else{
		initGame();
	}
	
	
}

function initEvent(){
	restart();
	getShare();
	initScreen();
	paihang();
	//guanzhu();
	setWeixinEvent();
	window.onresize=function(){
		console.log('屏幕尺寸有变更');
		initScreen();
	}
}

function initScreen(){
	var w=getWindowWidth();
	var h=getWindowHeight();
	
	var baseW=w;
	var baseH=1008*(baseW/640);
	
	document.getElementById('mainId').style.height=baseH+'px';
	
	document.getElementById('jumpLineCtxBoxId').style.width=w+'px';
	document.getElementById('jumpLineCtxBoxId').style.height=baseH+'px';
	
	if(baseH>h){
		var mainScale=h/baseH;
		document.getElementById('mainId').style.webkitTransform='scale('+mainScale+','+mainScale+')';
		document.getElementById('mainId').style.transform='scale('+mainScale+','+mainScale+')';
	}
	
	/*
	if(w>640){//屏幕宽度大于640时居中
		document.getElementById('mainId').style.left=((w-640)/2)+'px';
		document.getElementById('loadingId').style.left=((w-640)/2)+'px';
	}
	*/
	
}

var gameInfo=function(){
	this.score=0;//游戏得分
	this.timer=0;//游戏计时
	this.state=0;//0就绪，1进行中，2结束
	this.hp=0;//允许被绊倒的次数
	this.tortoiseInfo=-1;//-1未就绪，0乌龟就绪，1乌龟进入跳绳，2乌龟准备跳绳，3乌龟通过了，4乌龟被绊倒了
	this.nowTortoise=0;//当前乌龟
	this.waitTortoise=0;//下一只乌龟
	this.outTortoise=0;//离开的乌龟
	this.walkState=0;//0停止走路,1走路中
}


var gameInfoTemp;

var tortoiseInfoRightPositon={
	1:['-24%','-10%','40%'],
	2:['-21%','-11.2%','38.8%'],
	3:['-27.3%','-15.3%','33.7%'],
	4:['-21%','-11.2%','38.8%']
};


function initGame(){
	
	resetTortoise();
	
	document.getElementById('sence2Id').style.opacity='0';
	
	document.getElementById('sence0Id').style.display='block';
	document.getElementById('sence0Id').style.opacity='1';
	document.getElementById('sence0Id').style.zIndex=1;
	
	if(!GetParam('restart')){
		loadingBox.style.opacity='0';
	}
	
	document.getElementById('sence0Id').style.opacity='1';
	
	setTimeout(function(){
		if(!GetParam('restart')){
			loadingBox.style.display='none';
		}
		document.getElementById('sence2Id').style.display='none';
		document.getElementById('sence2Id').style.zIndex=-1;
	},500);
	
	gameInfoTemp=new gameInfo;
	
	gameInfoTemp.score=0;//游戏得分
	gameInfoTemp.timer=0;//游戏计时
	gameInfoTemp.state=0;//0就绪，1进行中，2结束
	gameInfoTemp.hp=0;//允许被绊倒的次数
	gameInfoTemp.tortoiseInfo=-1;//-1未就绪，0乌龟就绪，1乌龟进入跳绳，2乌龟准备跳绳，3乌龟通过了，4乌龟被绊倒了
	gameInfoTemp.nowTortoise=0;//当前乌龟
	gameInfoTemp.waitTortoise=0;//下一只乌龟
	gameInfoTemp.outTortoise=0;//离开的乌龟
	gameInfoTemp.walkState=0;//0停止走路,1走路中

	
	document.getElementById('sence0Id').onclick=function(){
		
		gotoSence1();//进入场景1，游戏开始
	}
	
}

function resetTortoise(){
	for(var i=1;i<=4;i++){
		document.getElementById('tortoise'+i+'Id').style.right=tortoiseInfoRightPositon[i-1];
		document.getElementById('tortoise'+i+'Id').style.display='none';
	}
}

function gotoSence1(){
	setScore(gameInfoTemp.score);
	
	document.getElementById('sence0Id').style.opacity='0';
	
	document.getElementById('sence1Id').style.display='block';
	document.getElementById('sence1Id').style.opacity='1';
	document.getElementById('sence1Id').style.zIndex=9;
	
	setTimeout(function(){
		document.getElementById('sence0Id').style.display='none';
		document.getElementById('sence0Id').style.zIndex=1;
	},500);
	
	setJumpLineAni();
	
}

function setJumpLineAni(){
	
	
	var lineInfo=function(){
		this.nowPosition=0;//偏移位置f
		this.speed=1;//跳绳速度速度
		this.timeSpeed=80;//动画速度
		this.timeer=0;
		this.state=0;
		this.jumpJudgeState=0;//0还未点击跳跃,1跳跃按钮成功
		this.jumpState=-1;//0lose,1win
		this.jumpStep=0;
	}
	
	var jumpInfoTemp;
	
	
	
	document.getElementById('ctrlBoxId').onclick=function(){
		
	}
	
	var valuesLeft={
		node:'ctrlBoxId',
		clickEvent:'on',
		eventStart:function(e){
			
		},
		eventMove:function(e){},
		eventEnd:function(e){
			jumpJudge();//点击跳跃，判断是否跳成功
		}
		
	}
	AddEventHandlers(valuesLeft);
	jumpInfoTemp=new lineInfo;
	
	runJumpLine();
	
	
	function runJumpLine(){//执行一次跳绳动画
		
		
		jumpInfoTemp.nowPosition=0;//偏移位置
		//jumpInfoTemp.speed=jumpInfoTemp.speed+0.1;//跳绳速度速度
		jumpInfoTemp.timeer=0;
		jumpInfoTemp.state=0;//跳绳圈位置
		jumpInfoTemp.jumpJudgeState=0;//0还未点击跳跃,1跳跃按钮开始成功
		jumpInfoTemp.jumpState=-1;//0lose,1win
		jumpInfoTemp.jumpStep=0;
		
		//设置跳绳速度
		/*
		jumpInfoTemp.speed=1+Math.floor(gameInfoTemp.score/2)*5/100;
		*/
		
		
		
		console.log('当前跳绳速度'+jumpInfoTemp.speed);
		
				
		//console.log(jumpInfoTemp);
		
		jumpInfoTemp.timer=window.setInterval(function(){
			
			if(jumpInfoTemp.state==5){
				window.clearInterval(jumpInfoTemp.timer);
				return;
			}
			
			if(jumpInfoTemp.state==4){
				window.clearInterval(jumpInfoTemp.timer);
				runJumpLine();
				return;
			}
			
			
			
			getJumpPosition();
			
			
			

		},jumpInfoTemp.timeSpeed);
		
		function getJumpPosition(){//计算二次赛贝尔曲线坐标
		
			switch(jumpInfoTemp.jumpStep){
				case 0:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line19Id').style.display='none';
					document.getElementById('line0Id').style.display='block';
					if(gameInfoTemp.tortoiseInfo==0){
						setTortoiseGo();
					}
					jumpInfoTemp.jumpJudgeState=0;
				break;
				case 1:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line0Id').style.display='none';
					document.getElementById('line1Id').style.display='block';
					jumpInfoTemp.jumpJudgeState=0;
				break;
				case 2:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line1Id').style.display='none';
					document.getElementById('line2Id').style.display='block';
					jumpInfoTemp.jumpJudgeState=0;
				break;
				case 3:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line2Id').style.display='none';
					document.getElementById('line3Id').style.display='block';
					jumpInfoTemp.jumpJudgeState=0;
				break;
				case 4:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line3Id').style.display='none';
					document.getElementById('line4Id').style.display='block';
					jumpInfoTemp.jumpJudgeState=0;
					
				break;
				case 5:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line4Id').style.display='none';
					document.getElementById('line5Id').style.display='block';
					jumpInfoTemp.jumpJudgeState=0;
				break;
				case 6:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line5Id').style.display='none';
					document.getElementById('line6Id').style.display='block';
					if(gameInfoTemp.waitTortoise==0){
						setTortoiseReady();
						gameInfoTemp.tortoiseInfo=0;
					}
					jumpInfoTemp.jumpJudgeState=0;
				break;
				case 7:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line6Id').style.display='none';
					document.getElementById('line7Id').style.display='block';
					
				break;
				case 8:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line7Id').style.display='none';
					document.getElementById('line8Id').style.display='block';
					jumpInfoTemp.jumpJudgeState=0;
				break;
				case 9:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line8Id').style.display='none';
					document.getElementById('line9Id').style.display='block';
					jumpInfoTemp.jumpJudgeState=0;
				break;
				case 10:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line9Id').style.display='none';
					document.getElementById('line10Id').style.display='block';
					jumpInfoTemp.jumpJudgeState=0;
				break;
				case 11:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line10Id').style.display='none';
					document.getElementById('line11Id').style.display='block';
					jumpInfoTemp.jumpJudgeState=0;
				break;
				case 12:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line11Id').style.display='none';
					document.getElementById('line12Id').style.display='block';
					for(var i=1;i<=4;i++){
						var tr=document.getElementById('tortoise'+i+'Id').style.right;
						if(tortoiseInfoRightPositon[i][2]==tr){
							gameInfoTemp.tortoiseInfo=2;
						}
						
					}
					jumpInfoTemp.jumpJudgeState=1;
				break;
				case 13:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line12Id').style.display='none';
					document.getElementById('line13Id').style.display='block';
				break;
				case 14:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line13Id').style.display='none';
					document.getElementById('line14Id').style.display='block';
					
				break;
				case 15:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line14Id').style.display='none';
					document.getElementById('line15Id').style.display='block';
				break;
				case 16:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line15Id').style.display='none';
					document.getElementById('line16Id').style.display='block';
					if(jumpInfoTemp.nowPosition<=jumpInfoTemp.maxMove/4){
						jumpInfoTemp.jumpJudgeState=0;
						console.log('进行跳跃判断结束');
					}
				break;
				case 17:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line16Id').style.display='none';
					document.getElementById('line17Id').style.display='block';
					
				break;
				case 18:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line17Id').style.display='none';
					document.getElementById('line18Id').style.display='block';
				break;
				case 19:
					jumpInfoTemp.jumpStep++;
					document.getElementById('line18Id').style.display='none';
					document.getElementById('line19Id').style.display='block';
					if(jumpInfoTemp.nowPosition<=0){
						if(gameInfoTemp.tortoiseInfo>1){
							console.log('当前乌龟状态：'+gameInfoTemp.tortoiseInfo);
							if(jumpInfoTemp.jumpState==1 || gameInfoTemp.tortoiseInfo==3){
								jumpInfoTemp.state=4;
								gameInfoTemp.score++;
								console.log('得分：'+gameInfoTemp.score);
								setTimeout(function(){
									setScore(gameInfoTemp.score);
									setTortoiseOut();
								},500);
							}else{
								jumpInfoTemp.state=5;
								jumpInfoTemp.jumpState=2;
								gameInfoTemp.tortoiseInfo=4;
								gameInfoTemp.walkState=0;
								//document.getElementById('linel0Id').src='images/endLine.png';
								
								gameOver();
								
							}
						}else{
							jumpInfoTemp.state=4;
						}
						jumpInfoTemp.jumpJudgeState=0;
						
					}
				break;
				default:
					
  
					
			
			}
			
			
			
		}
		
		
	}
	
	
	function hideTortoiseImg(tortoiseNumber){//隐藏乌龟图片
		var tortoiseObj=document.getElementById('tortoise'+tortoiseNumber+'Id').getElementsByTagName('img');
		
		for(var i=0;i<tortoiseObj.length;i++){
			tortoiseObj[i].style.display='none';
		}
		
	}
	
	function setTortoiseReady(){//设置乌龟准备
	
		if (gameInfoTemp.waitTortoise>0){
			return;
		}
		
		if(gameInfoTemp.nowTortoise<4){
			var torroiseRndNumber=gameInfoTemp.nowTortoise+1;
		}else{
			gameInfoTemp.waitTortoise=0;
			return;
		}
		
		
		hideTortoiseImg(torroiseRndNumber);
		
		gameInfoTemp.waitTortoise=torroiseRndNumber;
		
		console.log(gameInfoTemp.waitTortoise+'号乌龟进入准备');
		
		//初始化乌龟位置
		document.getElementById('tortoise'+gameInfoTemp.waitTortoise+'Id').style.webkitTransition='all 0s linear';
		document.getElementById('tortoise'+gameInfoTemp.waitTortoise+'Id').style.transition='all 0s linear';
		document.getElementById('tortoise'+gameInfoTemp.waitTortoise+'Id').style.display='none';
		//document.getElementById('tortoise'+gameInfoTemp.waitTortoise+'Id').style.webkitAnimation='tortoiseA 0.8s linear 1';
		//document.getElementById('tortoise'+gameInfoTemp.waitTortoise+'Id').style.animation='tortoiseA 0.8s linear 1';
		document.getElementById('tortoise'+gameInfoTemp.waitTortoise+'Id').style.webkitAnimation='';
		document.getElementById('tortoise'+gameInfoTemp.waitTortoise+'Id').style.animation='';
		document.getElementById('tortoise'+gameInfoTemp.waitTortoise+'Id').style.right=tortoiseInfoRightPositon[torroiseRndNumber][0];

		//设置乌龟岛准备位置
		setTimeout(function(){
			document.getElementById('tortoise'+gameInfoTemp.waitTortoise+'Id').style.display='block';
			document.getElementById('torroise'+gameInfoTemp.waitTortoise+'_walk1Id').style.display='block';
									
			document.getElementById('tortoise'+gameInfoTemp.waitTortoise+'Id').style.webkitTransition='all 0.3s linear';
			document.getElementById('tortoise'+gameInfoTemp.waitTortoise+'Id').style.transition='all 0.3s linear';
			
			document.getElementById('tortoise'+gameInfoTemp.waitTortoise+'Id').style.right=tortoiseInfoRightPositon[gameInfoTemp.waitTortoise][1];
		},400);
		
		
	}
	
	function setTortoiseGo(){//乌龟进入跳绳范围
		
		if(gameInfoTemp.waitTortoise==0){
			return;
		}
		
		
		
		gameInfoTemp.nowTortoise=gameInfoTemp.waitTortoise;
		gameInfoTemp.waitTortoise=0;
		
		console.log(gameInfoTemp.nowTortoise+'号乌龟进入跳绳范围');
		
		gameInfoTemp.tortoiseInfo=1;
		gameInfoTemp.walkState=1;
		setTortoiseWalk(gameInfoTemp.nowTortoise);
		
		document.getElementById('tortoise'+gameInfoTemp.nowTortoise+'Id').style.webkitTransition='all 0.3s linear';
		document.getElementById('tortoise'+gameInfoTemp.nowTortoise+'Id').style.transition='all 0.3s linear';
		setTimeout(function(){
			document.getElementById('tortoise'+gameInfoTemp.nowTortoise+'Id').style.right=tortoiseInfoRightPositon[gameInfoTemp.nowTortoise][2];
		},24);
		
		setTimeout(function(){
			gameInfoTemp.tortoiseInfo=2;
		},200);
		
		
		setTimeout(function(){
			setTortoiseReady();
			console.log('进入了吗');
			gameInfoTemp.walkState=0;
		},400);
		
	}
	
	function setTortoiseOut(){//乌龟离开跳绳范围
		gameInfoTemp.walkState=1;
		gameInfoTemp.outTortoise=gameInfoTemp.nowTortoise
		setTortoiseWalk(gameInfoTemp.outTortoise);
		document.getElementById('tortoise'+gameInfoTemp.outTortoise+'Id').style.webkitTransition='all 0.3s linear';
		document.getElementById('tortoise'+gameInfoTemp.outTortoise+'Id').style.transition='all 0.3s linear';
		
		document.getElementById('tortoise'+gameInfoTemp.outTortoise+'Id').style.right='100%';
		
		gameInfoTemp.tortoiseInfo=0;
		jumpInfoTemp.jumpState=-1;
		gameInfoTemp.nowTortoise=0;
		setTortoiseGo();
		
		setTimeout(function(){
			hideTortoiseImg(gameInfoTemp.outTortoise);
			document.getElementById('tortoise'+gameInfoTemp.outTortoise+'Id').style.display='none';
			document.getElementById('tortoise'+gameInfoTemp.outTortoise+'Id').style.right=tortoiseInfoRightPositon[gameInfoTemp.outTortoise][0];
			
			console.log('移出屏幕，回到最右边');
			
			gameInfoTemp.walkState=0;
		},400);
		
	}
	
	function setTortoiseWalk(tortoiseNumber){//设置乌龟走路
	
		hideTortoiseImg(tortoiseNumber);
		w1();
		function w1(){
			
			if(gameInfoTemp.walkState==0){
				console.log('停止走路动作：'+gameInfoTemp.tortoiseInfo);
				setTortoiseStand(tortoiseNumber);
				return;
			}
			
			hideTortoiseImg(tortoiseNumber);
			
			document.getElementById('torroise'+tortoiseNumber+'_walk1Id').style.display='block';
			
			setTimeout(function(){
				w2();
			},40);
			
		}
		
		function w2(){
			
			if(gameInfoTemp.walkState==0){
				console.log('停止走路动作：'+gameInfoTemp.tortoiseInfo);
				setTortoiseStand(tortoiseNumber);
				return;
			}
			
			hideTortoiseImg(tortoiseNumber);

			document.getElementById('torroise'+tortoiseNumber+'_walk2Id').style.display='block';
			
			setTimeout(function(){
				w1();
			},40);
			
		}
		
		
	}
	
	function setTortoiseStand(tortoiseNumber){//设置乌龟站立
		hideTortoiseImg(tortoiseNumber);
			
		document.getElementById('torroise'+tortoiseNumber+'_waitId').style.display='block';
	}
	
	function jumpJudge(){//处理判断乌龟跳
		console.log('判断跳绳状态：'+jumpInfoTemp.jumpState);
		if(jumpInfoTemp.jumpState!=-1){
			return;
		}
		
		if(gameInfoTemp.tortoiseInfo!=2){
			return;
		}
	
		if(jumpInfoTemp.jumpJudgeState==1){
			jumpInfoTemp.jumpState=1;
			gameInfoTemp.tortoiseInfo=3;
		}else{
			jumpInfoTemp.jumpState=0;
			gameInfoTemp.tortoiseInfo=4;
		
		}
		console.log(gameInfoTemp.nowTortoise+'号乌龟跳起');
		
		console.log('挑起状态:'+jumpInfoTemp.jumpState);
		
		document.getElementById('tortoise'+gameInfoTemp.nowTortoise+'Id').style.webkitAnimation='tortoiseA'+gameInfoTemp.nowTortoise+' 0.6s linear 1';
		document.getElementById('tortoise'+gameInfoTemp.nowTortoise+'Id').style.animation='tortoiseA'+gameInfoTemp.nowTortoise+' 0.6s linear 1';
		
		
	}
	
	function gameOver(){//游戏结束
		console.log('游戏结束'+gameInfoTemp.tortoiseInfo);
		hideTortoiseImg(gameInfoTemp.nowTortoise);
		document.getElementById('tortoise'+gameInfoTemp.nowTortoise+'Id').style.display='block';
		document.getElementById('tortoise'+gameInfoTemp.nowTortoise+'_loseId').style.display='block';
		//hideTortoiseImg(gameInfoTemp.nowTortoise);
		//setWeixin();
		// Play68.setRankingScoreDesc(gameInfoTemp.score);
		// updateShare(gameInfoTemp.score);
		setTimeout(function(){
			gotoSence2();
			// dp_submitScore(gameInfoTemp.score);
		},1000);
		
	}
	
	
}

function setScore(score){//显示分数
	var html=setNumber(score);
	console.log(html);
	document.getElementById('scoreBoxId').innerHTML=html;
}

function setNumber(score){
	var scoreArr=score.toString().split('');
		
	var html='';
	
	for(var i=0;i<scoreArr.length;i++){
		html=html+'<img src="images/'+scoreArr[i]+'.png" />';
	}
	
	return html;
}

function gotoSence2(){
	
	var html=setNumber(gameInfoTemp.score);
	document.getElementById('markId').innerHTML=html;
	
	document.getElementById('sence1Id').style.zIndex=1;
	document.getElementById('sence1Id').style.display='none';
	
	document.getElementById('sence2Id').style.zIndex=1;
	document.getElementById('sence2Id').style.display='block';
	document.getElementById('sence2Id').style.opacity='1';
	
	
	
	setTimeout(function(){
		document.getElementById('sence1Id').style.display='none';
	},500);
	
}


function getShare(){
	document.getElementById('shareBtnId').onclick=function(){
		// play68_submitScore (gameInfoTemp.score);
	}
}						//排行榜链接
function paihang(){
	document.getElementById('paihangBtnId').onclick=function(){
		// Play68.goHome();
	}
}
	//关注我们公众号
	function guanzhu(){
		
		}
function restart(){
	document.getElementById('restartBtnId').onclick=function(){
		var strUrl=window.location.href;
		var arrUrl=strUrl.split('/');
		var strPage=arrUrl[arrUrl.length-1].split('?')[0];
		
		
		
		window.location=strPage;
		//initGame();
	}
}

