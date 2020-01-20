function play68_init() {
	// updateShare(0);
}
function play68_submitScore(shareText) {
	// updateShareScore(shareText);
	Play68.shareFriend();
	//setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(shareText) {
	var descContent = "[六一]123算术题，是学霸就撑过30秒！别放弃做一个高智商的人！";
	if(shareText){
		shareTitle = shareText;
	}else{
		shareTitle = '[六一]123算术题，是学霸就撑过30秒！';
	}
	
	console.log(shareTitle);
	appid = '';
	// Play68.setShareInfo(shareTitle,descContent);
}
function updateShareScore(shareText) {
	updateShare(shareText);
}