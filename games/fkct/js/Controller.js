var GameCookieKey = "pic2wordkey";
var LevelsCookieKey = "pic2wordlevels";


function Controller() {
	//questions
    this.currentQuestionId;
    this.currentQuestionLevel;
    this.currentQuestionIndex;
    this.nextQuestionLevel;
    this.questions = [];
    this.questionLevels = [];
    this.questionRepo = [];
    this.questionRepoSize = 10;
    this.currentQuestionBatch = 1;
    this.isFinish = false;
    this.difficultyBoundary = 30;

    //cookie related
    this.forceFromCurrent = false;
    this.isAllowCookie = true;
    this.readLevelsFromCookie = false;

    //preload
    this.minPreloadTime = 3500;
    this.isPreloadFinished = false;
    this.isPreloadTimeUp = false;
    this.preloadTimer;
    //data url
    this.dataBaseUrl = "data/";

    this.loadCharactors();

}

Controller.currentQuestionId;
Controller.currentQuestionIndex;
Controller.questionRepo;
Controller.currentQuestionBatch;
Controller.forceFromCurrent;
Controller.charactors;
Controller.needPreload;

Controller.prototype.startGame = function () {
    if (readCookie(GameCookieKey) != null) {
        this.loadFromCookie();
    }
    if (readCookie(LevelsCookieKey) != null) {
	    this.loadLevelsFromCookie();
    }
    this.initBaseOnUrl();
}

Controller.prototype.stopGame = function()
{
}

Controller.prototype.loadCharactors = function () {
    var that = this;
    $.getJSON("data/charactors.json", function (data) {
        that.charactors = data["charactors"];
    });
}

Controller.prototype.loadFromCookie = function () {
    var controllerData = readCookie(GameCookieKey);
    var values = controllerData.split(',');
    this.currentQuestionLevel = parseInt(values[0]);
    this.currentQuestionIndex = parseInt(values[1]);
    this.currentQuestionBatch = parseInt(values[2]);
    this.nextQuestionLevel =  parseInt(values[3]);
    this.forceFromCurrent = true;

    // 每次读取cookie的时候，设定分享内容
    if (!!qike) {


        if(controller && controller.currentQuestionLevel){
            qikeContentPreSet.shareContent.title = qikeContentPreSet.endShareContentTitle;

            // gameLevel指代游戏里面存储玩的关卡或者杀敌数等成绩的一个数值变量
            qikeContentPreSet.shareContent.desc = qikeContentPreSet.endShareContentPreFix + controller.currentQuestionLevel + qikeContentPreSet.endShareContentSuffix;
        }

    }
}
Controller.prototype.saveInCookie = function () {
	if ( this.isAllowCookie ) {
		createCookie( GameCookieKey, this.currentQuestionLevel + "," + this.currentQuestionIndex + "," + this.currentQuestionBatch + "," + this.nextQuestionLevel, 1000);
	}

    // 每次保存cookie的时候，更新分享内容
    if (!!qike) {


        if(controller && controller.currentQuestionLevel){
            qikeContentPreSet.shareContent.title = qikeContentPreSet.endShareContentTitle;

            // gameLevel指代游戏里面存储玩的关卡或者杀敌数等成绩的一个数值变量
            qikeContentPreSet.shareContent.desc = qikeContentPreSet.endShareContentPreFix + controller.currentQuestionLevel + qikeContentPreSet.endShareContentSuffix;
        }

    }

}
Controller.prototype.loadLevelsFromCookie = function() {
	var controllerData = readCookie(LevelsCookieKey);
	this.questionLevels = controllerData.split(',');
	this.readLevelsFromCookie = true;
}
Controller.prototype.saveLevelsInCookie = function() {
	if ( this.isAllowCookie ) {
		createCookie( LevelsCookieKey, this.questionLevels.join(','));
	}
}
Controller.prototype.handlePreloadRequest = function() {
	if ( this.questions.length < 1 ) {
	    this.loadAllQuestions();
    } else {
	    this.loadCurrentQuestions();
    }
}
Controller.prototype.initBaseOnUrl = function() {
	var date = getURLParameter('date');
    if ( date != null && date != "" ) {
	    this.dataBaseUrl = "data/" + date + "/";
	    this.forceFromCurrent = false;
	    this.readLevelsFromCookie = false;
	    this.isAllowCookie = false;
	    this.currentQuestionBatch = 1;
	    this.currentQuestionId = 1;
	    this.currentQuestionIndex = 0;
	    this.currentQuestionLevel = 1;
    }
}
Controller.prototype.loadAllQuestions = function () {
    var that = this;
    $.getJSON( this.dataBaseUrl + "questions.json", function(data) {
    	that.questions = data["questions"];
    	if ( data["questionRepoSize"] ) {
	    	that.questionRepoSize = data["questionRepoSize"];
    	}
    	that.generateLevels();
    	that.loadCurrentQuestions();
    });
}
Controller.prototype.generateLevels = function() {
	if ( this.readLevelsFromCookie && this.questionLevels.length == this.questions.length) {
		return;
	}
	var array = [], length = this.questions.length, difficultyBoundary = this.difficultyBoundary,  i;
	this.questionLevels = [];
	for ( i = 0 ; i < Math.min( difficultyBoundary, length ); i ++ ) {
		array.push(i);
	}
	$.merge(this.questionLevels, shuffleArray(array) );

	if ( length > difficultyBoundary ) {
		for ( i = difficultyBoundary, array = []; i < length; i ++ ) {
			array.push(i);
		}
		$.merge(this.questionLevels, shuffleArray(array) );
	}
	this.saveLevelsInCookie();

}
Controller.prototype.loadCurrentQuestions = function() {
	var start, end, repoLevels=[], that = this;
	start = (this.currentQuestionBatch - 1) * this.questionRepoSize;
	end = Math.min( this.questions.length, start + this.questionRepoSize);
	if ( start > end ) {
		//no more questions
		this.saveInCookie();
		controller.isFinish = true;
		SM.SetStateByName('finish');
		return;
	}
	this.questionRepo = [];
	repoLevels = this.questionLevels.slice(start, end);
	repoLevels.forEach( function(value, index ) {
		that.questionRepo.push(that.questions[value]);
	});
	if (this.forceFromCurrent == false) {
            this.currentQuestionIndex = 0;
            this.currentQuestionLevel = 1;
            this.nextQuestionLevel = this.currentQuestionLevel + 1;
    }
    this.currentQuestionId = this.questionRepo[this.currentQuestionIndex]["ID"];
    this.saveInCookie();


    preloadImages(this.questionRepo);
}


Controller.prototype.isAnswerCorrect = function () {
    var answerText = '';
    $(sprintf("#question-%d .answer-key", this.currentQuestionId)).filter(function () {
        return $(this).attr("data-key") != "";
    }).each(function (index, elem) {
        answerText += elem.getAttribute("data-key");
    });
    return this.isAnswerCorrectByText(answerText);
}

Controller.prototype.isAnswerCorrectByText = function (answerText) {
    if (this.questionRepo[this.currentQuestionIndex]["answer"] == answerText) {
        return true;
    }
    return false;
}

Controller.prototype.processToNextQuestion = function () {

    if (this.questionRepo.length > this.currentQuestionIndex + 1) {
        this.currentQuestionIndex++;
        this.currentQuestionLevel++;
        this.nextQuestionLevel++;
        this.currentQuestionId = this.questionRepo[this.currentQuestionIndex]["ID"];
        this.saveInCookie();
        controller.needPreload = false;
    }
    else {
        this.forceFromCurrent = true;
        this.currentQuestionBatch++;
        this.currentQuestionLevel++;
        this.nextQuestionLevel++;
        this.currentQuestionIndex = 0;
        controller.needPreload = true;
    }

}


Controller.prototype.removeLetters = function () {
}

Controller.prototype.update = function () {

}
