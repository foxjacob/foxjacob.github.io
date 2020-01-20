function play68_init() {
	updateShare(0);
}
function play68_submitScore(score) {
	updateShareScore(score);
	Play68.shareFriend();
	// setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(bestScore) {
	var descContent = "正月十五放花灯了，我的祝福满人间！";
   if(bestScore > 0) {
	    Play68.setRankingScoreDesc(bestScore);
		shareTitle = "正月十五放花灯，我一共放飞了" + bestScore + "个祝福灯，天都亮了，你放了吗？";
	}
	else{
		shareTitle = "正月十五放花灯了，我的祝福满人间！";
	}
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}
function updateShareScore(bestScore) {
	updateShare(bestScore);
}