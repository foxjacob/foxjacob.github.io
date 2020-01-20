function play68_init() {
	updateShare(0);
}
function play68_submitScore(score) {
	updateShareScore(score);
	Play68.shareFriend();
	//setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(score,a) {
	var descContent = "消消看，挑战1000分";
	score > 1000 ? shareTitle ="挑战1000分成功！我取得了" + score + "分，超过了" + a + "%的网友，据说全球只有0.1%的人能过1500分！":score > 0 ? shareTitle ="据说全球只有0.1%的人能过1500分！我取得了" + score + "分，超过了" + a + "%的网友，挑战1000分确实有困难呀！" : shareTitle ="挑战1000分，据说全球只有0.1%的人能过1500分！";	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
	document.title = shareTitle;
}
function updateShareScore(score) {
	updateShare(score);
}