function MusicObject(url,flag){
	this.mobj=new Audio();
	this.mobj.src=url;
	this.enabled=true;
	if(flag){
		this.mobj.loop=flag;
		this.mobj.addEventListener("ended",function(){
			this.currentTime=0;
			this.play();
		});
	}
	
}
MusicObject.prototype.setEabled=function(flag){
	this.enabled=flag;
		try{
			if(this.mobj.isplayed){
				this.mobj.pause();
			}
		
		}catch(e){
			console.error("音乐停止播放错误!");
		}
}
MusicObject.prototype.play=function(){
		try{
			this.mobj.play();
		
		}catch(e){
			console.error("音乐播放错误!");
		}
}
MusicObject.prototype.pause=function(){
		try{
			this.mobj.pause();
		}catch(e){
			console.error("音乐停止播放错误!");
		}
}
MusicObject.prototype.replay=function(){
		try{
			if(this.mobj.isplayed){
				this.mobj.currentTime=0;
			}
			this.mobj.play();
		}catch(e){
			console.error("音乐重复播放错误!");
			this.mobj.play();
		}
}