(function(window){
	var jqMethod = function(){

	};
	/**
	 * [reward_id_3 description] 掌上大学四个碎片
	 * [reward_id_4 description] 圣诞快乐四个碎片
	 * @type {Array}
	 */
	window.reward_id_3=[],window.reward_id_4=[];
	window.sum_num;
	jqMethod.fn = jqMethod.prototype = {
		game_Strategy:game_Strategy,
		game_Prize:game_Prize,
		messageBox_show:messageBox_show,
		game_exChange:game_exChange,		
		bg_color_yellow:bg_color_yellow,
		bg_color_green:bg_color_green,
		bg_color_orange:bg_color_orange,
		messageBox_close:messageBox_close,
		toSpace:toSpace
		// unBindClick:unBindClick,
		// click_share:click_share
	}

	/**
	 * [game_Strategy description] 游戏攻略
	 * @return {[type]} [description]
	 */
	function game_Strategy () {
		// $("body").css('background',"#cce099");
		bg_color_yellow ();
		$("#gl-con").addClass('gl-con-show');
		$("#btn_close").unbind('click').bind('click', function(event) {
			/* Act on the event */
	    	$("#gl-con").removeClass('gl-con-show');
	    	$("body").css('background',"#fff71a");
	    	 event.stopPropagation();
		});
	}

	/**
	 * [game_Prize description] 奖品兑换
	 * @return {[type]} [description]
	 */
	function game_Prize () {
		// window.reward_id_3=[],window.reward_id_4=[];
		bg_color_green ();
		$("#prize-con").addClass('gl-con-show');
		$("#close").unbind('click').bind('click', function(event) {
			window.reward_id_3=[],window.reward_id_4=[];
			$("#prize-con").removeClass('gl-con-show');
			bg_color_yellow ();
			// $("body").css('background',"#fff71a");
			event.stopPropagation();
		});

		user_reward ();

		$(".film").unbind('click').bind('click', function(event) {
			/* Act on the event */
			if(window.reward_id_3.length==4 && window.reward_id_4.length==4){
				game_exChange (3);
			}else if (window.reward_id_3.length<4 && window.reward_id_4.length<4) {
				messageBox_show(1);
				window.reward_id_3=[],window.reward_id_4=[];
			}else if(window.reward_id_3.length==4){
				game_exChange (3);
			}else if(window.reward_id_4.length==4){
				game_exChange (4);
			}else if (window.reward_id_3.length<4){
				messageBox_show(1);
			}else if (window.reward_id_4.length<4){
				messageBox_show(1);
			} 
			event.stopPropagation();
		});

		$(".other").unbind('click').bind('click', function(event) {
		    /* Act on the event */
		  	window.location.href="prizeList.html" + window.location.search;
		  	event.stopPropagation();
		});

		/**
		 * [description] 关闭弹出层 --提示
		 * @param  {[type]} event [description]
		 * @return {[type]}       [description]
		 */
		$("#a_btn_ok").unbind('click').bind('click', function(event) {
			/* Act on the event */
			messageBox_close ();
			event.stopPropagation();
		});

		/**
		 * [description] 微信 奖品兑换提交
		 * @param  {[type]} event [description]
		 * @return {[type]}       [description]
		 */
		$("#a_btn_prize").unbind('click').bind('click', function(event) {
			/* Act on the event */
			//TODO 微信 输入姓名和手机号
			var name = $("#names").val();
			var mobile = $("#phones").val();
			var phones_1 =$("#phones_1").val();
			if (name =="") {
				messageBox_close ();
				messageBox_show(9);
				return ;
			}
			if (mobile == "") {
				messageBox_close ();
				messageBox_show(9);
				return ;
			}
			if (phones_1=="") {
				messageBox_close ();
				messageBox_show(9);
				return ;
			}
			else if (phones_1!=mobile){
				messageBox_close ();
				L.alert('手机号码与确认号码不一致');
				return;
			}

			var url = WXDOMAIN + 'wxgame/ex';
			gamef.requestServerData(url, "GET", callback, "open_id="+gamef.open_id+"&type=" + gamef.gameid+"&reward_id="+window.sum_num+"&mobile="+mobile+"&name="+name);

			event.stopPropagation()
			function  callback(method, url, data){
				var list = data;
				if (typeof data === "string") {
				    list = JSON.parse(data);
				}
				if (list.status == 0) {
					user_reward ();
					Main.loadTime();
					if (list.response>0) {
						messageBox_close ();
						messageBox_show(5);
					}else if (list.response == 0){
						messageBox_close ();
						messageBox_show(4);
					}
				}else if (list.status == 6) {
					messageBox_close ();
					messageBox_show(9);
				}else if (list.status==2018){
					messageBox_close ();
					messageBox_show(1);
				}else if (list.status==2019){
					L.alert('本次输入号码和上次领奖号码不一致，请输入上次领奖号码');
				}
			}
			 // e.stopPropagation();
		});

		/**
		 * [description] 没有碎片
		 * @param  {[type]} event [description]
		 * @return {[type]}       [description]
		 */
		$("#a_btn_null").unbind('click').bind('click', function(event) {
			messageBox_close ();
			event.stopPropagation();
		});

		/**
		 * [description] 关闭弹出层
		 * @param  {[type]} event [description]
		 * @return {[type]}       [description]
		 */
		$(".btn_a_close,.btn_a_close_1").unbind('click').bind('click',function(event) {
		  	messageBox_close () ;
		  	event.stopPropagation();
		});
	}

    //这里处理点击用户头像
    function toSpace(option){
        //alert(user_name + "," + user_id);
		L.loadSpace(option.user_id, option.user_name);
    }

	/**
	 * [messageBox_show description] 弹出框
	 * @param  {[type]} num [description] 1.没有集齐 2.已经兑换了
	 * @return {[type]}     [description]
	 */
	function messageBox_show (num) {
		var s_div=$(".s_div"),prize_div = $(".prize_div"),share_div=$(".share_div"),null_div=$(".null_div");
		var img_50 = $(".img_50"),img_52 = $(".img_52"),img_51= $(".img_51"),img_55= $(".img_55"),img_56= $(".img_56"),img_54= $(".img_54"),img_53= $(".img_53"),img_57= $(".img_57"),img_58= $(".img_58");
		// body...
		switch(num){
			case 1:
				//缺少碎片
				if (img_50.attr('num')==0) {
					img_50.attr('src',img_50.attr('alt')).show();
					img_50.attr('num','1');
				}else{
					img_50.show();
				}
			break;
			case 2:
				//已经领取
				if (img_52.attr('num')==0) {
					img_52.attr('src',img_52.attr('alt')).show();
					img_52.attr('num','1');
				}else{
					img_52.show();
				}
			break;
			case 3:
				//代金券编号
				$("#img_51").show();
				$("#span_51").show();
				if (img_51.attr('num')==0) {
					img_51.attr('src',img_51.attr('alt')).show();
					img_51.attr('num','1');
				}else{
					img_51.show();
				}
			break;
			case 4:
				//已注册班级云账号
				$("#down_href").show();
				if (img_56.attr('num')==0) {
					img_56.attr('src',img_56.attr('alt')).show();
					img_56.attr('num','1');				
				}else{
					img_56.show();
				}
			break;
			case 5:
				//未注册班级云账号
				$("#down_href").show();
				if (img_55.attr('num')==0) {
					img_55.attr('src',img_55.attr('alt')).show();
					img_55.attr('num','1');	
				}else{
					img_55.show();
				}
			break;
			case 6:
				//微信领奖
				if (img_54.attr('num')==0) {
					img_54.attr('src',img_54.attr('alt')).show();
					img_54.attr('num','1');	
				}else{
					img_54.show();
				}
			break;
			case 7:
				//微信领奖
				if (img_53.attr('num')==0) {
					img_53.attr('src',img_53.attr('alt')).show();
					img_53.attr('num','1');	
				}else{
					img_53.show();
				}
			break;
			case 8:
				//微信领奖
				// $("#a_btn_share").live
				if (img_57.attr('num')==0) {
					img_57.attr('src',img_57.attr('alt')).show();
					img_57.attr('num','1');	
				}else{
					img_57.show();
				}
			break;
			case 9:
				//数据为空
				if (img_58.attr('num')==0) {
					img_58.attr('src',img_58.attr('alt')).show();
					img_58.attr('num','1');	
				}else{
					img_58.show();
				}
			break;
		}
		if (num<=5) {
			s_div.show();	
		}else if(num==6){
			prize_div.show();
		}else if(num>6&&num<9){
			share_div.show();
		}else{
			null_div.show();
		}
		$("#main-mask").show();
	}
	/**
	 * [messageBox_close description] 关闭弹出框
	 * @return {[type]} [description]
	 */
	function messageBox_close () {
		// body...
		$("#main-mask,.img_50,.img_52,.img_56,.img_55,.img_51,#img_51,#span_51,.s_div,#down_href,.prize_div,.share_div,.img_53,.img_54,.img_57,.img_58,.share_div").hide();
	}

	/**
	 * [bg_color_yellow description] 首页背景色
	 * @return {[type]} [description]
	 */
	function bg_color_yellow () {
		$("body").css('background',"#fff71a");
	}

	/**
	 * [bg_color_green description] 攻略色
	 * @return {[type]} [description]
	 */
	function bg_color_green () {
		$("body").css('background',"#cce099");
	}
	/**
	 * [bg_color_orange description] 游戏背景色
	 * @return {[type]} [description]
	 */
	function bg_color_orange (){
		$("body").css('background',"#E19825");
	}


	/**
	 * [JQMethod description] 全局变量
	 * @type {jqMethod}
	 */
	var JQMethod  = new jqMethod();
	jqMethod.prototype = JQMethod;
	window.JQMethod = JQMethod;

	/**
	 * [user_reward description] 微信用户/用户获得的奖励字
	 * @return {[type]} [description]
	 */
	function user_reward () {
		$(".a_1,.a_2,.a_3,.a_4,.a_5,.a_6,.a_7,.a_8").removeClass('a_cloud').html('');
		function  callback(method, url, data){
        	var list = data;
        	if (typeof data === "string") {
        	    list = JSON.parse(data);
        	}
        	if (list.status == 0) {
        		var rewards = list.gameUserReward.rewards;
        		if (!jQuery.isEmptyObject(rewards)) {
        			window.reward_id_3=[],window.reward_id_4=[];
        			for(var i in rewards){
        				gameDebris(parseInt(i),parseInt(rewards[i]));
        			}
        		}else{
        			$(".a_1,.a_2,.a_3,.a_4,.a_5,.a_6,.a_7,.a_8").removeClass('a_cloud').html('');
        		}

        	}else {
        		L.alert('无法连接到网络，请检查网络设置后再试');
        	}
        }
		if (gamef.platType == PLAT_BJY) {
	        var url = "webgame/reward";
	        gamef.requestServerData(url, "GET", callback, "type=" + gamef.gameid);
	    }
	    else if (gamef.platType == PLAT_WX) {
	        var url = WXDOMAIN+"wxgame/wxreward";
	        gamef.requestServerData(url, "GET", callback, "type=" + gamef.gameid + "&open_id=" + gamef.open_id);
	    }
	}

	function gameDebris(num,count){
		switch(num){
			case 1:
				$(".a_1").addClass('a_cloud').html(count);
				window.reward_id_3.push(count);
				break;
			case 2:
				$(".a_2").addClass('a_cloud').html(count);
				window.reward_id_3.push(count);
				break;
			case 3:
				$(".a_3").addClass('a_cloud').html(count);
				window.reward_id_3.push(count);
				break;
			case 4:
				$(".a_4").addClass('a_cloud').html(count);
				window.reward_id_3.push(count);
				break;
			case 5:
				$(".a_5").addClass('a_cloud').html(count);
				window.reward_id_4.push(count);
				break;
			case 6:
				$(".a_6").addClass('a_cloud').html(count);
				window.reward_id_4.push(count);
				break;
			case 7:
				$(".a_7").addClass('a_cloud').html(count);
				window.reward_id_4.push(count);
				break;
			case 8:
				$(".a_8").addClass('a_cloud').html(count);
				window.reward_id_4.push(count);
				break;
		}
	}

	/**
	 * [game_exChange description] 用户申请兑换奖品
	 * @param  {[type]} num [description] 
	 * 3：掌上大学
	 * 4：圣诞快乐
	 * @return {[type]}     [description]
	 */
	function game_exChange (num) {
		if (gamef.platType == PLAT_BJY) {
			var url = 'webgame/exchange';
			// alert(url);
			function  callback(method, url, data){
				// alert(data+"==="+JSON.stringify(data));
				if (data == '401') {
					L.alert('先登陆在兑换！');
					return;
				}else if (data == '403') {
					L.alert('先绑定手机账号在领奖！');
					return;
				}else if (data == '-1'){
					L.alert('操作失败请重新操作！');
					return;
				}
				var list = data;
				if (typeof data === "string") {
				    list = JSON.parse(data);
				}
				if (list.status == 0) {
					var gameTicketInfo = list.gameTicketInfo;
					$("#img_51").html(gameTicketInfo.text1);
					var time = new Date(gameTicketInfo.valid);
					var FullYear = time.getFullYear();
					var Month = time.getMonth()+1;
					var day = time.getDate();
					$("#span_51").html(FullYear+"-"+Month+"-"+day);
					//重新请求
					user_reward ();
					messageBox_show(3);
				}else if(list.status == 2021){
					messageBox_show(2);
				}else if(list.status == 2022){
					messageBox_show(2);
				}else if (list.status == 403){
					L.alert('先绑定手机账号在领奖！');
				}else {
					L.alert('无法连接到网络，请检查网络设置后再试');
				}
			}
			gamef.requestServerData(url, "POST", callback, "type=" + gamef.gameid+"&reward_id="+num);
		}else if (gamef.platType == PLAT_WX) {
			messageBox_show(6);
			window.sum_num = num;
		};
	}
	
	/**
	 * [unBindClick description] 取消分享click事件
	 * @return {[type]} [description]
	 */
	function unBindClick () {
		 $(".btn_a_share").unbind('click');
	}

	/**
	 * [click_share description]分享click事件
	 * @return {[type]} [description]
	 */
	function  click_share(){
		$(".btn_a_share").unbind('click').bind('click', function(event) {
		    JQMethod.messageBox_close();
		    gamef.share();
		    event.stopPropagation();
		});
	}

})(window);
