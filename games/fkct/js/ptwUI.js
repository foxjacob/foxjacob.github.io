function PtwUI () {
}

PtwUI.stage;
PtwUI.menuUI;
PtwUI.inGameUI;
PtwUI.loadingUI;
PtwUI.helpUI;
PtwUI.questionUIs;
PtwUI.currentQuestionUI;
PtwUI.currentLevel;
PtwUI.answer;
PtwUI.animationList;
PtwUI.timeout;
PtwUI.controller;
PtwUI.touchStart;
PtwUI.touchEnd;

PtwUI.prototype.init = function() {
	this.stage = $('body');
	this.menuUI = this.stage.find('#page-start');
	this.loadingUI = this.stage.find('#page-preload');
	this.inGameUI = this.stage.find('#page-play');
	this.questionUIs = this.inGameUI.find('.question');
	this.successUI = this.inGameUI.find('#play-success');
	this.morePannel = this.stage.find('#pannel-overlay');
	this.finishUI = this.stage.find("#page-finish");
	this.answer = '';
	this.animationList = [];

	var that = this;

	$('body').on('selectstart,drag',function(e){
		e.preventDefault();
	});
	$('body').on('touchmove', function(e) {
		//e.preventDefault();
	});

	if ( is_touch_device() ) {
		if ( is_ie_mobile() ) {
			this.touchStart = 'MSPointerDown';
			this.touchEnd = 'MSPointerUp';
		} else {
			this.touchStart = 'touchstart';
			this.touchEnd = 'touchend';
		}

	} else {
		this.touchStart = 'click';
		this.touchEnd = 'click';
	}


	detectWeixinApi(function(){
		$('.weixin').show();
	});


	this.stage.find('.btn-openHelpPannel').on(this.touchEnd, function(){
//		that.morePannel.show();
//		that.morePannel.find('.pannel').animate({left:'20%'});
//alert(qikeContentPreSet.endShareContentPreFix + controller.currentQuestionLevel + qikeContentPreSet.endShareContentSuffix)
var str = qikeContentPreSet.endShareContentPreFix + controller.currentQuestionLevel + qikeContentPreSet.endShareContentSuffix;
try{parent.__4399finishgame(str);}catch(e){}
	});

	this.morePannel.on(this.touchStart, function() {
		that.morePannel.find('.pannel').animate({left:'100%'},'fast','swing',function(){
			that.morePannel.hide();
		});
		
	});
	this.morePannel.find('.pannel').on(this.touchStart, function(e) {
		stopBubble(e);
	});
	this.stage.find('.btnCopyUrl').on('click', function(e) {
		


        if (!!qike) {

            qikeContentPreSet.shareContent.title = qikeContentPreSet.endShareContentTitle;

            // gameLevel指代游戏里面存储玩的关卡或者杀敌数等成绩的一个数值变量
            qikeContentPreSet.shareContent.desc = qikeContentPreSet.endShareContentPreFix + controller.currentQuestionLevel + qikeContentPreSet.endShareContentSuffix;

            // 发布分享触发的消息
            qike.util.subscribeModel.fire('share-popup-action-show');

        }else{
            copyToClipboard('http://play68.com');
        }


	});

	this.successUI.find('#play-success-next').on(this.touchEnd, function(){
        if ( that.controller.needPreload == true ) {
			SM.SetStateByName("preload");
		} else {
			that.showCurrentQuestion();
		}

	});
}
PtwUI.prototype.switchPageTo = function( $targetPage ) {
	var $currentPage = $('.current-page');
	//hide all other pages and clear class
	$('.page').not('current-page').attr('class','page none');
	$currentPage.attr('class','page').addClass('animated bounceOutLeft');
	setTimeout(function(){
		$currentPage.attr('class','page none');
	}, 1000);

	$targetPage.attr('class','page none current-page').addClass('animated bounceInRight').removeClass('none');

	setTimeout(function(){
		$targetPage.attr('class','page current-page');
	}, 1000);
}
PtwUI.prototype.showMenuUI = function () {
    if (window.location.href.indexOf("openid") > -1 && window.location.href.indexOf("openkey") > -1) {
        this.menuUI.find(".btn-hide").removeClass("btn-hide");
        this.inGameUI.find(".btn-hide").removeClass("btn-hide");
        this.finishUI.find(".btn-hide").removeClass("btn-hide");
        this.inGameUI.find("#play-success-share").css("display","none");
    }
    this.menuUI.find('.loading').removeClass('loading');
    $('#start-level').html(this.controller.currentQuestionLevel);
    this.addAnimation('#start-btnPlay', 'bounceInUp', 500, null);
    this.addAnimation('#start-level', 'bounceIn', 500, null);
    this.playAnimationsFrom(0);

}
PtwUI.prototype.showInGameUI= function(){
	this.switchPageTo(this.inGameUI);
}
PtwUI.prototype.showFinishUI = function() {
	this.switchPageTo(this.finishUI);
}
PtwUI.prototype.onFailed = function () {

    this.currentQuestionUI.find('.answer-key').addClass('error animated shake');
}

PtwUI.prototype.setQuestionLevelText = function() {
	this.inGameUI.find('#play-level').html(this.controller.currentQuestionLevel);
}
PtwUI.prototype.updateAnswerText = function() {
	var answerText = '';
    this.currentQuestionUI.find('.answer-key').filter(function () {
        return $(this).attr("data-key") != "";
    }).each(function (index, elem) {
        answerText += elem.getAttribute("data-key");
    });
    this.answer = answerText;
}
PtwUI.prototype.showSuccessUI= function(){
	myFlag=0;
	this.successUI.find('#play-success-level').html(this.controller.currentQuestionLevel - 1);
	this.successUI.find('#play-success-answer').html(this.answer);

	this.successUI.show();
	window.level=this.controller.currentQuestionLevel - 1;
	
	if(window.level==40){
		setTimeout(function(){
		$('#page-play').css('display','none');
		$('#page-finish').css('display','block');
		
		 
		},2000);
		//updateShare(window.level);
		//Play68.setRankingScoreDesc(window.level);
	}else{
		//updateShare(window.level);
		//Play68.setRankingScoreDesc(window.level,Play68.rankingShowType.RANKING_SHOW_NO);
	}
	

	this.addAnimation('#play-success-title', 'bounceIn', 500, null);
    this.addAnimation('#play-success-level', 'bounceIn', 500, null);
    this.addAnimation('#play-success-answer', 'bounceIn', 500, null);
    this.addAnimation('#play-success-action', 'bounceIn', 500, null);
    this.playAnimationsFrom(0);
}
PtwUI.prototype.hideSuccessUI = function() {
	this.successUI.hide();
	this.successUI.find('#play-success-title,#play-success-level,#play-success-answer,#play-success-action').css('visibility','hidden').attr('class','');
}
PtwUI.prototype.showCurrentQuestion = function () {
	myFlag=1;
	this.answer = '';
	var currentId = this.controller.currentQuestionId;
	for(var i=0;i<this.controller.questions.length;i++)
		if(this.controller.questions[i].ID==this.controller.currentQuestionId)
		{
			myAnswer=this.controller.questions[i].answer;
		}
	this.hideSuccessUI();
    $('.question').attr('class','question').hide();
    this.setQuestionLevelText();

    if ( this.currentQuestionUI ) {
	    this.currentQuestionUI = $('#question-' + currentId).addClass('animated bounceInRight').show();
    } else {
	    this.currentQuestionUI = $('#question-' + currentId).show();
    }
    this.setAnswerBoxPosition(this.currentQuestionUI);
}
PtwUI.prototype.setAnswerBoxPosition = function(currentQuestion) {

   		var width = 0, answerBox = currentQuestion.find('.question-answer');
   		answerBox.find('li').each(function(){
   			width += parseInt($(this).outerWidth());
   		});
   		answerBox.css('width',(width+30) + 'px')
   		.css('margin-left', '-' + (width/2) + 'px');

}
PtwUI.prototype.showLoadingUI= function(){
	this.hideSuccessUI();
    this.switchPageTo(this.loadingUI);
    $(".ui-progress").css("width", "0%").css("display", "block").find(".ui-label").css("display", "block");

}
PtwUI.prototype.showLoadingUIProgress = function (event) {
    $(".ui-progress").css("width", event.loaded * 100 + "%").find(".value").html(parseInt(event.loaded * 100) + "%");
}

PtwUI.prototype.showHelpUI= function(){

}
PtwUI.prototype.appendCharactor= function(answer_spot, question_spot){
    answer_spot.attr("data-key", question_spot.attr("data-key")).html(question_spot.attr("data-key"));
    question_spot.css('visibility','hidden');
    answer_spot.attr('data-index', question_spot.attr('data-index'));
    this.updateAnswerText();
}
PtwUI.prototype.removeCharactor = function (remove_spot) {
    remove_spot.attr("data-key", '').html('');
    $('.question-key[data-index="'+remove_spot.attr("data-index") +'"]').css('visibility','visible');
    this.updateAnswerText();
}
PtwUI.prototype.addQuestion = function (question) {
    question.update();
    $("#questions").append(question.questionUI);
}
PtwUI.prototype.addAnimation = function(id, animationType, duration, callback) {
	this.animationList.push({'id':id, 'animationType':animationType, 'duration':duration, 'callback':callback });
}

PtwUI.prototype.playAnimationsFrom = function(startIndex) {
	var animation, target, that, length = this.animationList.length;
	if ( length > 0 ) {

		animation = this.animationList[startIndex];
		target = $(animation.id);

		if (target.css('visibility') == 'hidden') {
			target.css('visibility', 'visible');
		}

		target.addClass('animated ' + animation.animationType);
		clearTimeout(this.timeout);
		startIndex++;

		that = this;
		if ( startIndex < length ) {
			that.timeout = setTimeout(function(){
				that.playAnimationsFrom(startIndex);
				if (animation.callback) {
					animation.callback.apply(this);
				}
			}, animation.duration);

		} else {
			this.animationList = [];
		}
	}

}
var ptwUI = new PtwUI();
