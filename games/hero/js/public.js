var checkStickLong = {
	check:function(){
		var stickLong = this.getWidthNumber($(".stick").css('width'));
		var maxLong = this.getWidthNumber($(".wall").eq(1).css('left'))+this.getWidthNumber($(".wall").eq(1).css('width'))-screenWidth*0.2;
		var minLong = this.getWidthNumber($(".wall").eq(1).css('left'))-screenWidth*0.2;
		//alert(minLong);
		if (stickLong<maxLong&&stickLong>minLong) {
			var me=this;
			me.run();
			setTimeout(function(){
		        me.getPoint();
		        me.getNewWall();
			},1100);
		} else if(stickLong>maxLong){
			clearBind();
			this.getDown();
		} else {
			clearBind();
			this.getDown();
		}
	},
	run:function(){
		$(".stickMan img").attr({'src':'images/stick.gif'});
		var moveNumber = this.getWidthNumber($(".wall").eq(1).css('left'))+this.getWidthNumber($(".wall").eq(1).css('width'))-screenWidth*0.2;
		$(".stickMan").animate({left:'+='+moveNumber+'px'},1000);
		$("body").css('background-position-x', '-'+(point+1)*20+'px');
		setTimeout(function(){
			$(".stickMan img").attr({'src':'images/stick_stand.png'});
		},1000);
	},
	getDown:function(){
		$(".stickMan img").attr({'src':'images/stick.gif'});
		var me = this;
		$(".stickMan").animate({left:'+='+$(".stick").css('width')},1000);
		$("body").css('background-position-x', '-'+(point+1)*30+'px');
		setTimeout(function(){
			$('.stick').css('transform','rotate(90deg)');
		    $(".stickMan").animate({bottom:'-'+$(".stickMan").css('height')},300);
		},1000);
		setTimeout(function(){
			me.showResult();
		},1300);
	},
	getPoint:function(){
		point++;
		$(".point").html(point);
		var len=$(".shouji").css("left");
		var len1=$("#main").width();
		var kk=parseInt(len)-parseInt(len1)/6;
		
		$(".shouji").animate({"left":kk+"px"},1000);
		//parseInt(len)-4
		//$(")
	},
	getNewWall:function(){
		this.setNewWall();
		//$('.stick').css('transition','0');
		//$(".wall").animate({left:'-='+$(".new").eq(0).css('left')},500);
		//$(".stick").animate({left:'-='+$(".new").eq(0).css('left')},500);
		//$(".stick").css('transform','translateX(-'+$(".new").eq(0).css('left')+')');
		setTimeout(this.resetWall,550);
		
	},
	resetWall:function(){
		addBind();
		$('.wall').eq(0).remove();
		$('.new').eq(0).removeClass('new');
		$('.init').eq(0).removeClass('init');
	},
	getWidthNumber:function(ele){
   		if (ele) {
   			var WidthNumber = ele.substr(0,ele.length-2);
   			WidthNumber = Number(WidthNumber);
   			return WidthNumber;
   		}
    },
    setNewWall:function(){
    	//新墙设置
    	var newWallSpacing =Math.random()*55+5+20;
   		var newWallWidth = Math.random()*Math.min(90-newWallSpacing,15)+5;
        var tpl = '<div class="wall new init" style="width:'+newWallWidth+'%;left:100%"></div>';
		$("#main").append(tpl);
		
		//移动设置
		var moveNumber = this.getWidthNumber($(".wall").eq(1).css('left'))+this.getWidthNumber($(".wall").eq(1).css('width'))-screenWidth*0.2;
		$(".wall").eq(0).animate({left:'-='+moveNumber+'px'},500);
		$(".wall").eq(1).animate({left:'-='+moveNumber+'px'},500);
		$(".wall").eq(2).animate({left:newWallSpacing+'%'},500);
		$('.stick').css('transition','0');
		$(".stick").animate({left:'-='+moveNumber+'px'},500);
		$(".stickMan").animate({left:'-='+moveNumber+'px'},500);
		
		
    },
    showResult: function() {
    	$(".point,.tips").css('display','none');
    	$(".newPoint").html(point);
    	$(".gameOver").css('display','block');
    	this.setBestPoint();
    },
    
    setBestPoint: function() {
    	var bestPoint = window.sessionStorage.getItem('stickManPoint');
        if(!bestPoint){
        	bestPoint = point;
        	window.sessionStorage.setItem('stickManPoint',point);
        } else if(bestPoint<point){
        	bestPoint = point;
        	window.sessionStorage.setItem('stickManPoint',point);
        }
        $(".bestPoint").html(bestPoint);
        shareToWeixin();
    }
};


function shareToWeixin(){
WeixinApi.ready(function(Api) {

                // 微信分享的数据
                var desc = '智商超过130的人才能玩到第40关！！！！';
                var bestPoint = window.sessionStorage.getItem('stickManPoint');
                if(!bestPoint||bestPoint==0){
                	desc ='智商超过130的人才能玩到第40关！！！！';
                } else {
					if(bestPoint>=40){
						desc ='我居然获得了'+bestPoint+'分！去和和商城分享比拼喽！';
					}else if(bestPoint<40){
						desc ='我才得了'+bestPoint+'分！还需要继续努力哦！';
					}
                }
                var wxData = {
                    "appId": wxcfdc424062594fbe, // 服务号可以填写appId
                    "imgUrl" : 'http://smartmercado.com/wxsc/puzzle/paolu/images/paolu.jpg',
                    "link" : 'http://smartmercado.com/wxsc/puzzle/paolu/index.html',
                    "desc" : desc,
                    "title" : desc
                };

                // 分享的回调
                var wxCallbacks = {
                    // 收藏操作是否触发回调，默认是开启的
                    favorite : false,

                    // 分享操作开始之前
                    ready : function() {
                        // 你可以在这里对分享的数据进行重组
                        //alert("准备分享");
                    },
                    // 分享被用户自动取消
                    cancel : function(resp) {
                        // 你可以在你的页面上给用户一个小Tip，为什么要取消呢？
                        //alert("分享被取消，msg=" + resp.err_msg);
                    },
                    // 分享失败了
                    fail : function(resp) {
                        // 分享失败了，是不是可以告诉用户：不要紧，可能是网络问题，一会儿再试试？
                        //alert("分享失败，msg=" + resp.err_msg);
                    },
                    // 分享成功
                    confirm : function(resp) {
                        // 分享成功了，我们是不是可以做一些分享统计呢？
                        //alert("分享成功，msg=" + resp.err_msg);
                        $("#mask").css('display','none');
                    },
                    // 整个分享过程结束
                    all : function(resp,shareTo) {
                        // 如果你做的是一个鼓励用户进行分享的产品，在这里是不是可以给用户一些反馈了？
                        //alert("分享" + (shareTo ? "到" + shareTo : "") + "结束，msg=" + resp.err_msg);
                    }
                };

                // 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
                Api.shareToFriend(wxData, wxCallbacks);

                // 点击分享到朋友圈，会执行下面这个代码
                Api.shareToTimeline(wxData, wxCallbacks);

                // 点击分享到腾讯微博，会执行下面这个代码
                Api.shareToWeibo(wxData, wxCallbacks);

                // iOS上，可以直接调用这个API进行分享，一句话搞定
                Api.generalShare(wxData,wxCallbacks);

                // 有可能用户是直接用微信“扫一扫”打开的，这个情况下，optionMenu是off状态
                // 为了方便用户测试，我先来trigger show一下
                //var elOptionMenu = document.getElementById('optionMenu');
                //elOptionMenu.click(); // 先隐藏
                //elOptionMenu.click(); // 再显示
            });
} 