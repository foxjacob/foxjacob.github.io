// JavaScript Document
$(function(){
	var radio=$(".input");
	var text=$(".shiti li[class!=buyao]");
	for(var i=0; i<radio.length-6; i++){
		radio.eq(i).attr("id","r_"+i+"");
		var val=text.eq(i);
		var cc="<label for='r_"+i+"'>"+val.text()+"</label>";
		var dd=val.html();
		var ee=val.text();
		var dd=dd.replace(ee,cc);
		val.html(dd);
	};
	$("label").click(function(){
		$(this).siblings(".input").addClass("select").parent().siblings("li").children(".input").removeClass("select");
		next();
		//$(this).siblings(".input").addClass("asel").parent().siblings("li").children(".input").removeClass("asel");
	});
	$(".input").click(function(){
		$(this).addClass("select").parent().siblings("li").children(".input").removeClass("select");
		next();
		//$(this).addClass("asel").parent().siblings("li").children(".input").removeClass("asel");
		
	});
	$(".right_btn").click(function(){
		next();
	})
		function next(){
			var cc=$(".ul").css("left");
			var ww=$(".shiti_con").css("width");
			var right=parseInt(cc)-parseInt(ww);
			var dd=parseInt($(".ul").css("width"))-parseInt(ww);
			if(dd>=-right){
				$(".ul").animate({"left":right+"px"},200);
			}
			else{
				var x=yz();
				
				if(x>=16 && x<24){
					var html='<p class="scroll_tit">Lv.1&nbsp;你丫的居然没有手机强迫症</p><p class="scroll_con1">你真的是人类吗？居然没有强迫症！胡闹！你是不是乱答题了！</p>';
					dataForWeixin.desc="我的手机强迫症等级达到了LV1，目测没有手机强迫症哦！你是什么级别？快来测一测";
					$(".scroll").fadeIn().html(html);
					$(".no_click").click(function(){
						//html='<p class="scroll_tit">解救方法</p><p class="scroll_con">无！药！可！治！但你还是可以考虑一下买部荣耀6<img src="images/xiu.gif" /></p><div class="show_tu"><img class="img" src="images/lv.1.png" /></div>';
//						$(".scroll").fadeIn().html(html);
//						$(this).fadeOut(1000);
//						$(".again,.result").fadeIn(1000);
						//$(this).fadeOut(500);
						window.location = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/";
					})
				}
				if(x>=24 && x<32){
					var html='<p class="scroll_tit">LV2&nbsp;轻度手机强迫症</p><p class="scroll_con1">哎哟，你好像有点轻微手机强迫症哦，可能在你看来手机是指个通讯工具，它在的时候需要表现相对优异，有信号，有网速，有电量，满足你一般日常使用，但是不在的时候似乎忍一忍也就过去了。</p>';
					dataForWeixin.desc="我的手机强迫症等级达到了LV2.轻度手机强迫症！你是什么级别？快来测一测";			
					$(".scroll").fadeIn().html(html);
					$(".no_click").click(function(){
						//html='<p class="scroll_tit">解救方法</p><p class="scroll_con">你对手机的依赖性虽然不强，但是你需要的手机必须稳定靠谱，既然如此，为了防止你进一步发展成更严重的症状，不如推荐你一款非常流畅，信号杠杠，速度凶猛的手机，在日常生活绝对够用，关键时刻不掉队，那就是华为荣耀6！！！</p><div class="show_tu"><img class="img" src="images/lv.2.png" /></div>';
//						$(".scroll").fadeIn().html(html);
//						$(this).fadeOut(1000);
//						$(".again,.result").fadeIn(1000);
						//$(this).fadeOut(500);
						window.location = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/";
					})
				}	
				if(x>=32 && x<40){
					var html='<p class="scroll_tit">LV3&nbsp;中度手机强迫症</p><p class="scroll_con1">哈哈哈，骚年，恭喜你成为中度手机强迫症患者，也许你没有像重度手机强迫症患者那样病入膏肓，但是你也病得不轻哈。手机要是离开个半天你就魂不守舍，时常动不动就看下手机，网络一断感觉整个手机就废了，手机离手整个人都感觉不那么好了。</p>';
					dataForWeixin.desc="我的手机强迫症等级达到了LV3.中度手机强迫症！你是什么级别？快来测一测";
					$(".scroll").fadeIn().html(html);
					$(".no_click").click(function(){
						//html='<p class="scroll_tit">解救方法</p><p class="scroll_con"> 根据你症状的需求，你的手机一定要经受得住你的强势掌控欲，满足得了你的各种功能需求，最重要的是要让你在网速方面充分找到优越感，华为荣耀6的4G网速以及八核CPU处理速度一定不会让你失望！</p><div class="show_tu"><img class="img" src="images/lv.3.png" /></div>';
//						$(".scroll").fadeIn().html(html);
//						$(this).fadeOut(1000);
//						$(".again,.result").fadeIn(1000);
						//$(this).fadeOut(500);
						window.location = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/";
					})
				}
				if(x>=40 && x<=48){
					var html='<p class="scroll_tit">LV4&nbsp;重度手机强迫症</p><p class="scroll_con1">很不幸，你已被评为本年度最佳手机强迫症患者，对你来说手机就是你的灵魂伴侣，它必须是干干净净、图标必须整整齐齐、电量必须时刻充足、信号必须绝对满格、离身不能超过半臂距离、无法容忍缓慢的网速……,这也就意味着如果选择了不合适的手机会，你就会很容易被逼死</p>';
					dataForWeixin.desc="我的手机强迫症等级居然达到了Lv4.重度手机强迫症患者！你是什么级别？快来测一测";
					$(".scroll").fadeIn().html(html);
					$(".no_click").click(function(){
						//html='<p class="scroll_tit">解救方法</p><p class="scroll_con">根据你症状的需求，你需要一个上网速度超快、信号强劲、超级省电、能为你自动排列桌面图标的手机，自动为你更新应用软件，杀死提示圈，适用机型：华为荣耀6</p><div class="show_tu"><img class="img" src="images/lv.4.png" /></div>';
//						$(".scroll").fadeIn().html(html);
//						$(this).fadeOut(1000);
//						$(".again,.result").fadeIn(1000);
						window.location = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/";
						//$(this).fadeOut(500);
					})
				}
			}
		}
	$(".left_btn").click(function(){
		var cc=$(".ul").css("left");
		var ww=$(".shiti_con").css("width");
		var left=parseInt(cc)+parseInt(ww);
		if(cc<"0px"){
			$(".ul").animate({"left":left+"px"},200);
		}
	})
	$(".share").click(function(){
		$("#weixin-shade").css("display","block").click(function(){
			$(this).css("display","none");
		})
	});
	$(".result").click(function(){
		next();
		$(".result,.again").hide();
	})
	$(".again").click(function(){
		window.location.href="index.html";
	})
})
function jiazai(){
	var ul=$(".ul");
	var shiti=$(".shiti");
	var shiti_con=$(".shiti_con");
	var width=parseInt(shiti_con.css("width"))*16;
	ul.css("width",width+"px");
	shiti.css("width",shiti_con.css("width"));
	$(".btn").click(function(){
		$(this).parent().fadeOut(500);
		$(this).parent().next().fadeIn(1000);
		setTimeout(function(){
			$(".pg1").fadeOut(1000);
			$(".pg2").fadeIn(1000);
		},1000)
	})
}
function yz(){
		var che=$(".input");
		var m=0;
		var i;
		var cc=0;
 		for(i=0;i<che.length;i++){
 	  		if(che.eq(i).hasClass("select")){
				m++;
				var kk=parseInt(che.eq(i).attr("value"));
				cc=cc+kk;
			}
   		}
		if(m!=16){
			alert("还有没有选的题目");	
		}
		else{
			$(".ul").fadeOut();
			$(".left_btn").fadeOut();
			$(".right_btn").fadeOut();
			$(".no_click").fadeIn();
			$(".share").show();
			return cc;
			
		}
		
}
