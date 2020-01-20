// JavaScript Document
var isover=false;
$(function (){
	var starx;
	var stary;
	var rw=document.getElementById("rw");
	var movex;
	var movey;
	var time=1540;//计时器重置
	var times=1600;	
	var time1;
	var time2;
	var width=$(document).width();
	var height=$(document).height();
	var wheight=$(window).height();//获取浏览器高度
	var iheight=$("#img p img").height();//获取图片高度
	var top=$("#img p").css("top");//p的top值
	var rheight=$("#gamesstart .rw").height();//获取人物高度
	var rwidth=$("#gamesstart .rw").width()/2;///获取人物宽度的一半
	var fenshu=0;
	var shijian=90;
	var topyy=wheight-rheight-20;//人物跳跃
	var texta=[
	'您被<span class="red">90%</span>的挑战者击败，亲，您动了吗，您真的动了吗!',
	'您击败了<span class="red">40%</span>的挑战者，差一点就杯具了!',
	'您击败了<span class="red">60%</span>的挑战者，再不努力您就要老了！',
	'您击败了<span class="red">80%</span>的挑战者，无影手已经到了炉火纯青的境界',
	'您击败了<span class="red">99%</span>的挑战者，如此深厚的功力看起来萌萌哒！',
	];
	var textb=[
	'懒人<br>症患者',
	'危险人物',
	'淡定君',
	'梅超风<br>接班人',
	'超级无敌<br>无影手',
	];
	$(".jiafen").css("top",wheight-80);//设置加分top属性
	//$(".jiafen").animate({top:wheight-160,opacity:0},500)
	//游戏核心,游戏开始
	function start(){
	$("#rw").css("display","block");
	function run(){
	var panduan=false;
	var image=Math.floor(Math.random() * 7);//图片随机数
	var left=Math.floor(Math.random()*(width-30));//随机left
	var i=Math.floor(Math.random()*5);//标签的随机数
	var imgw=$("#img p").eq(i).children("img").width()/2; ///获取当前动画图片的宽度的一半
	var imgl=parseInt($("#img p").eq(i).css("left"));
	$("#img p").eq(i).children("img").attr("src","img/"+image+".png");
	var topy;
	if(topy==wheight-rheight-20){}
	$("#img p").eq(i).animate({top:wheight},time,function(){
		if(movex-rwidth>imgl-rwidth&&movex-rwidth<imgl+imgw*2)
		{
			//分数判断
			 if(image==6)
			{
				$("#img p").eq(i).children("img").attr("src","img/baozha.png");
				$("#img p").eq(i).css("top",wheight-rheight-80);
				$("#img p").eq(i).children("img").css({"width":"80px","height":"auto"});
				setTimeout(function(){$("#img p").eq(i).children("img").attr("src","img/"+image+".png").css({"width":"36px","height":"auto"});//此处更改了图片的属性
				$("#img p").eq(i).css({top:top,left:-120});$("#img p").eq(i).animate({left:left},100);},100)
				
				
				$("#fenshu").text(fenshu-=30);
				if(fenshu<0){$("#fenshu").text("0");};
				$(".jiafen").css({"display":"block"});
				$(".jiafen img").attr("src","img/kl.png");
				$(".jiafen span").text("-30");
				$(".jiafen").animate({top:wheight-160,opacity:0},500,function(){
				$(".jiafen").css({"top":wheight-80,"display":"none","opacity":1});
				})
				}
			else if(image==4)
			{
				$("#fenshu").text(fenshu+=40);
				$(".jiafen img").attr("src","img/xl.png");
				$(".jiafen").css({"display":"block"});
				$(".jiafen span").text("+40");
				$(".jiafen").animate({top:wheight-160,opacity:0},500,function(){
				$(".jiafen").css({"top":wheight-80,"display":"none","opacity":1});
				});
				$("#img p").eq(i).css({top:top,left:-120});$("#img p").eq(i).animate({left:left},100);
				}
			else 
			{
				$("#fenshu").text(fenshu+=20);
				$(".jiafen").css({"display":"block"});
				$(".jiafen img").attr("src","img/xl.png");
				$(".jiafen span").text("+20");
				$(".jiafen").animate({top:wheight-160,opacity:0},500,function(){
				$(".jiafen").css({"top":wheight-80,"display":"none","opacity":1});
				})
				$("#img p").eq(i).css({top:top,left:-120});$("#img p").eq(i).animate({left:left},100);
				}
			
			
			
			}
		else
		{
			$("#img p").eq(i).animate({top:wheight},100,function(){
			$("#img p").eq(i).css({top:top,left:"-100%"});
			$("#img p").eq(i).animate({left:left},100);
			});
			}
		if(shijian<10&&shijian>0)
		{
			$("#img p").eq(i).css({top:top,left:"-100%"});
			$("#img p").eq(i).animate({left:left},100);
			topyy=wheight-rheight/2;
			}
		
		
		});
		
		}
	time1=setInterval(run,times);
	//倒计时
	function djs(){
		$("#shijian").text(shijian-=1);
		/*setTimeout(run,times+300);
		if(shijian<10&&shijian>0)
		{time=450;times=700;setTimeout(run,times-100);}
		else if(shijian%6==0)
		{time-=90;times-=100;}
		*/
		if(shijian<=0)
		{	if(isover){
				return;
			}
			isover=true;
			clearInterval(time1);
			clearInterval(time2);
			//判断分数
			
			setTimeout(function(){
			window.score=$("#fenshu").text();
			
			if(window.score<400)
			{
				$("#erwema").attr("src","img/canyujiang.png");
				//$("#yhimg img").attr("src","img/yyhj10.png");
				$("#textb").html(texta[0]);
				$("#texta").html(textb[0]);
				}
			else if(window.score>=400&&window.score<600)
			{
				
				$("#erwema").attr("src","img/sandengjiang.png");
				//$("#yhimg img").attr("src","img/yyhj20.png");
				$("#textb").html(texta[1]);
				$("#texta").html(textb[1]);
				}
			else if(window.score>=600&&window.score<800)
			{
				$("#erwema").attr("src","img/sidengjiang.png");
				//$("#yhimg img").attr("src","img/yhj10.png");
				$("#textb").html(texta[2]);
				$("#texta").html(textb[2]);
				}
			else if(window.score>=800&&window.score<900)
			{
				$("#erwema").attr("src","img/erdengjiang.png");
			//	$("#yhimg img").attr("src","img/yhj30.png");
				$("#textb").html(texta[3]);
				$("#texta").html(textb[3]);
				}
			else
			{
				$("#erwema").attr("src","img/yidengjiang.png");
				//$("#yhimg img").attr("src","img/yhj50.png");
				$("#textb").html(texta[4]);
				$("#texta").html(textb[4]);
				};
			
			$(".gamesjs").css("display","block");
			$("#rw").css("display","none");
			//提交分数z
			var uid=parseInt($("#uid").val());
		   
		    //分享开始

			allscore=fenshu;
			if(allscore<400)
			{
				title='挑战无影手，快来试试身手吧。';
				msg='我在挑战无影90%的被挑战者击败，小伙伴们，快来帮帮我吧。';
			}
			if(allscore>=400&&allscore<600){
				title='挑战无影手，快来试试身手吧。';
				msg='我在挑战无影手中击败了40%的挑战者，差一点就杯具了！';
			}
			if(allscore>=600&&allscore<800){
				title='挑战无影手，快来试试身手吧。';
				msg='我在挑战无影手中击败了60%的挑战者，再不努力您就要老了！';
			}
			if(allscore>=800&&allscore<900){
				title='挑战无影手，快来试试身手吧。';
				msg='我在挑战无影手中击败了80%的挑战者，无影手已经到了炉火纯青的境界！';
			}
			if(allscore>900){
				title='挑战无影手，快来试试身手吧。';
				msg='我在挑战无影手中击败了90%的挑战者，如此深厚的功力看起来萌萌哒！';
			}
			$("#title").val(title);
			$("#msg").val(msg);
           
		
		   
			
			console.log(window.score);
			//updateShare(window.score);
			//Play68.setRankingScoreDesc(window.score);
		   },2000);
		
			
		}
	}
	time2=setInterval(djs,1000);
	//触摸开始
	rw.addEventListener("touchstart",function(e){
		if($(".index").css("display")=="none"){
		e.preventDefault();//禁止滚屏;
		};
		 var touch=e.touches[0];
		 var x=touch.pageX;
		 var y=touch.pageY;
		 starx=x;
		 stary=y;
		})
	document.addEventListener("touchmove",function(e){
		if($(".index").css("display")=="none"){
		e.preventDefault();//禁止滚屏;
		};
		topy=parseInt($("#rw").css("top"));
		var touch=e.touches[0];
		movex=touch.pageX;
		movey=touch.pageY;
		$("#rw").css("left",movex-rwidth);
		$(".jiafen").css("left",movex+rwidth*1	)
		//设置人物跳跃
		//if(movey-stary<15){
//		topy=wheight-rheight-30;
//		$("#rw").css("top",topy);
//		}
//		if(movey-stary>15)
//		{
//		topy=wheight-rheight;
//		$("#rw").css("top",topy);
//			}
		})
	}
	//游戏开始事件
	$(".start").click(function(){
		$(".index").animate({left:"-100%"},800,function(){$(".index").css("display","none");})
		$("#play").css("display","none");
		start();
		})
	//游戏规则弹出与关闭
	$("#gamegz").click(function(){
		clickMore();
		
	});
	$("#fh").click(function(){
		$("#gamesgztc").addClass("my02").removeClass("my01");
		setTimeout(function(){$("#gamesgztc").css("display","none")},500)
		});
	//游戏暂停
	$("#startzt").click(function(){$("#gameszt").css("display","block")});
	$("#fhgames").click(function(){$("#gameszt").css("display","none")});
	//返回首页和返回游戏
	$(".fhsy").click(function(){
		//执行初始化
		res();
		//回到首页
		$(".index").css("display","block").animate({left:0},800);
		$(".gamesjs").css("display","none");
		$("#play").css("display","block");
		});
	$(".zlyc,#fenxiang").click(function(){
		//初始化
		res();
		$(".gamesjs").css("display","none");
		start();
		
		});
	//游戏暂停
	/*$("#startzt").click(function(){
		clearInterval(time1);
		clearInterval(time2);
		$("#gameszt").css("display","block").addClass("suoxiao").removeClass("fd");
		$("#audio")[0].pause();
		});*/
	//游戏暂停菜单

	//初始化方法
	function res(){
		//数据初始化
		isover=false;
		starx=null;
		stary=null;
		movex=null;
		movey=null;
		time=1500;//计时器重置
		times=2000;
		clearInterval(time1);
		clearInterval(time2);
		fenshu=0;
		shijian=90;
		$("#fenshu").text(fenshu);
		$("#shijian").text(shijian);
		$("#img p").css({"top":"50px"});
		$(".gamesjs ul").css("display","none");
		$(".gamesjs .u1").css("display","block");	
		$("#audio")[0].play();
		$("#play").addClass("xuan");
		topyy=wheight-rheight-20;//人物跳跃
		}
	//音乐控件
	$("#play").toggle(function(){$("#audio")[0].pause();
	$("#play").removeClass("xuan");
	},function(){$("#audio")[0].play();
	$("#play").addClass("xuan");
	})



	$("#lingqu").click(function(){
		dp_share();
	});
	$("#more").click(function(){
		clickMore();
	});
	}
	)