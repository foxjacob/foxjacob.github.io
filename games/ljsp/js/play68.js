function play68_init() {
	updateShare(0);
}
function play68_submitScore(score) {
	updateShareScore(score);
	Play68.shareFriend();
	//setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(score) {
	var descContent = "六角碎片";
	if(score > 0)
		shareTitle = "我玩了" + score + "分，没错，盆友圈游戏大神说的就是我！";
	else
		shareTitle = "六角碎片";
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
	document.title = shareTitle;
}
function updateShareScore(score) {
	updateShare(score);
}