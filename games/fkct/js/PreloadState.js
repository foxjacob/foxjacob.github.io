var preload;
function OnEnterPreloadState() {
	controller.handlePreloadRequest();
	if ( !controller.isFinish )	{
		ptwUI.showLoadingUI();
		
		controller.isPreloadFinished = false;
		controller.isPreloadTimeUp = false;
		controller.preloadTimer = setTimeout("preloadTimeUp()", controller.minPreloadTime);
	}
}

function OnExitPreloadState()
{
}
function preloadTimeUp() {
	controller.isPreloadTimeUp = true;
	if ( controller.isPreloadFinished ) {	
    	SM.SetStateByName("inGame");
    }
}
function preloadImages(questions) {
    var manifest = [];
    for (var i = 0; i < questions.length; i = i + 1) {
        manifest.push({ src: sprintf("__%05d.png", questions[i]["ID"]), id: "" + i });
    }
    if (preload == null || typeof (preload) == 'undefined') {
        preload = new createjs.LoadQueue(true, "./" + controller.dataBaseUrl + "img/");
        preload.addEventListener("progress", handleProgress);
        preload.addEventListener("complete", handleComplete);
        preload.addEventListener("fileload", handleFileLoad);
    }
    preload.loadManifest(manifest);
}

function handleProgress(event) {
    ptwUI.showLoadingUIProgress(event);
}

function handleFileLoad(event) {
    var question = new Question(controller.questionRepo[event.item.id], event.result.src);
    ptwUI.addQuestion(question);
}

function handleComplete() 
{
	controller.isPreloadFinished = true;
	if ( controller.isPreloadTimeUp ) {	
    	SM.SetStateByName("inGame");
    }
}

var PreloadState = new State( OnEnterPreloadState, OnExitPreloadState );
