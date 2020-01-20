function play68_init() {
	updateShare(0);
}
function play68_submitScore(score) {
	updateShareScore(score);
	Play68.shareFriend();
	//setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(score) {
	var descContent = "小囧熊跳伞";
	switch(true){
		case score > 6000 :
			shareTitle = "我玩了" + score + "分，请问这里还是地球么？";
			break;
		case score > 3000 :
			shareTitle = "我玩了" + score + "分，跳跳跳，我已经忘记了时间";
			break;
		case score > 1500 :
			shareTitle = "我玩了" + score + "分，这节奏太美妙，其实我想这么一直跳不下去的";
			break;
		case score > 0 :
			shareTitle = "我玩了" + score + "分，这么快就到底了？我都还没反应过来！";
			break;
		default: shareTitle = "小囧熊也疯狂！让你享受飞一般的感觉！#小囧熊跳伞#";
	}
	document.title = shareTitle;
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}
function updateShareScore(score) {
	updateShare(score);
}
function play68_goHome(){
	parent.location.href="http://mp.weixin.qq.com/s?__biz=MzA4MjAwNjQ2Mw==&mid=203181738&idx=1&sn=cf032b8b1e0ac420f65168aac39ecce0"
}