if( typeof(game9g)=="undefined"){
	game9g={};
}
if(!game9g.utils){
	game9g.utils={};
}
var gstyle = document.createElement("style");
str =".game9gdialog {display:none;color: white;background-color: rgb(0,0,0);text-align: center;-moz-border-radius: 8px;-webkit-border-radius: 8px;border-radius: 8px;font-family: Arial,Helvetica,sans-serif;font-weight: normal;font-size: 14px;width: 280px; z-index: 9991; top: 50%; left: 50%; position: fixed; margin-left: -140px; margin-top: -82.5px;}.game9gdialog header {font-weight: bold;margin-top: 10px;text-align: center;height: auto;width:auto;}.game9gdialog section {padding: 0px 20px 20px 20px;text-align: center;font-family: Arial,Helvetica,sans-serif;font-weight: normal;height:auto;width: auto;box-shadow: rgb(178, 178, 178) 0px -1px 1px -1px inset;}.game9gdialog footer {height: 60px;padding: 0px 0px;width: auto;}.game9gdialog footer a {display: inline-block;color: #007afe;text-align: center;line-height: 36px;font-weight: bold;text-decoration: none;Arial,Helvetica,sans-serif;font-size: 16px;width:43%;margin: 8px;border: solid 1px white;}.game9gmake{display:none;z-index: 9990; background-color: rgb(0, 0, 0); position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0.5}";  
gstyle.type="text/css";  
if(gstyle.styleSheet){         //ie下  
gstyle.styleSheet.cssText = str; 
} else {  
gstyle.innerHTML = str;
}
document.getElementsByTagName("head")[0].appendChild(gstyle);
var game9gmake=document.createElement("div");
game9gmake.id="game9gmake";
game9gmake.className="game9gmake";
document.getElementsByTagName("body")[0].appendChild(game9gmake);
var game9gdialog=document.createElement("div");
game9gdialog.id="game9gdialog";
game9gdialog.className="game9gdialog";
game9gdialog.innerHTML='<header><h2 id="game9gtitle">9G游戏</h2></header><section id="game9gcontent"></section><footer><a href="javascript:void(0)" id="game9gleftbtn">取消</a><a href="javascript:void(0)" id="game9grightbtn">确定</a></footer>';
document.getElementsByTagName("body")[0].appendChild(game9gdialog);
game9g.utils.dialog=function(){
	document.getElementById('game9gtitle').innerHTML=game9g.utils.shareConfirmparam.stitle;
	document.getElementById('game9gcontent').innerHTML=game9g.utils.shareConfirmparam.scontent;
	var game9gleftbtn=document.getElementById('game9gleftbtn');
	var game9grightbtn=document.getElementById('game9grightbtn');
	game9gleftbtn.removeEventListener('click');
	game9grightbtn.removeEventListener('click');
	game9gleftbtn.addEventListener('click',function(){
		game9g.utils.hideDialog();
	})
	game9grightbtn.addEventListener('click',function(){
		try{
			if(game9g.utils.shareConfirmparam.callback&&typeof(game9g.utils.shareConfirmparam.callback)=='function'){
				game9g.utils.shareConfirmparam.callback();
			}
		}catch(e){
			console.err("回调方法错误!");
		}
		game9g.utils.hideDialog();
	})
	game9g.utils.showDialog();
};
game9g.utils.shareConfirmparam={};
game9g.utils.shareConfirm=function(scontent,callback,stitle){
	if(!stitle){
		stitle="9G游戏";
	}
	game9g.utils.shareConfirmparam={
		stitle:stitle,
		scontent:scontent,
		callback:callback
	}
	setTimeout(delayShareConfirm,1000);
}
function delayShareConfirm(){
	game9g.utils.dialog();
}
game9g.utils.hideDialog=function(){
	game9g.utils.hide('game9gmake');
	game9g.utils.hide('game9gdialog');
} 
game9g.utils.showDialog=function(){
	game9g.utils.show('game9gmake');
	game9g.utils.show('game9gdialog');
} 
game9g.utils.show=function(id){
	document.getElementById(id).style.display="block";
}
game9g.utils.hide=function(id){
	document.getElementById(id).style.display="none";
}	
var domains=["bunol.cn", "bunol.cn"];
var domain = domains[parseInt(Math.random() * domains.length)];
    if(window.shareData){
		window.shareData.timeLineLink = "http://foxjacob.wicp.vip:6688/res/plugins/games/GameStation/games/djz/index.html";
		console.dir("分享url:"+window.shareData.timeLineLink);
	}