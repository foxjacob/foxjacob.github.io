$(function(){
window.Util = {};
;~function(Util){

	;~function(){
		var lastTime = 0;
		var prefixes = 'webkit moz ms o'.split(' '); //各浏览器前缀

		var requestAnimationFrame = window.requestAnimationFrame;
		var cancelAnimationFrame = window.cancelAnimationFrame;

		var prefix;
		//通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
		for( var i = 0; i < prefixes.length; i++ ) {
		    if ( requestAnimationFrame && cancelAnimationFrame ) {
		      break;
		    }
		    prefix = prefixes[i];
		    requestAnimationFrame = requestAnimationFrame || window[ prefix + 'RequestAnimationFrame' ];
		    cancelAnimationFrame  = cancelAnimationFrame  || window[ prefix + 'CancelAnimationFrame' ] || window[ prefix + 'CancelRequestAnimationFrame' ];
		}

		//如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
		if ( !requestAnimationFrame || !cancelAnimationFrame ) {
		    requestAnimationFrame = function( callback, element ) {
		      var currTime = new Date().getTime();
		      //为了使setTimteout的尽可能的接近每秒60帧的效果
		      // var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) ); 
		      var timeToCall = 30; 
		      var id = window.setTimeout( function() {
		        callback( currTime + timeToCall );
		      }, timeToCall );
		      lastTime = currTime + timeToCall;
		      return id;
		    };
		    
		    cancelAnimationFrame = function( id ) {
		      window.clearTimeout( id );
		    };
		}

		//得到兼容各浏览器的API
		window.requestAnimationFrame = requestAnimationFrame; 
		window.cancelAnimationFrame = cancelAnimationFrame;
	}();



	var intervals = [];
	var intervalIds = 0;
	Util.setIntervalWithTimeout = function(callback, interval, needImmediately) {
		var id = intervalIds++;
		var loop = function() {
			intervals[id] = setTimeout(loop, interval);
			callback();
		}
		if (needImmediately) {
			loop();
		} else {
			intervals[id] = setTimeout(loop, interval);
		}
		return id;
	}
	Util.clearIntervalWithTimeout = function(intervalId) {
		clearTimeout(intervals[intervalId]);
	}




	var fr = 1000/30;
	Util.animation = function($object, duration, options){
		var step = {}
			,start = {}
			,end = {}
		var totalStep = duration*60;
		for(var i in options){
			if(typeof options[i] == "number"){
				step[i] = 0;
				end[i] = options[i];
				start[i] = parseInt($object.css(i));
				(function(key){
					var interval = Util.setIntervalWithTimeout(function(){
						step[key]++;
						$object.css(key, ((step[key]/totalStep)*(end[key]-start[key])+start[key])+"px");
						if(step[key] == totalStep){
							$object.css(key, (end[key])+"px");
							Util.clearIntervalWithTimeout(interval);
							if(typeof options["onComplete"] == "function"){
								options["onComplete"]();
							}
						}
					}, 1000/30, false);
				})(i);
			}
		}
	}


	var hasTouch =  (/mobile|Mobile/g).test(navigator.userAgent) && (("createTouch" in document) || ("ontouchstart" in window)),
		startEvent = hasTouch ? "touchstart" : "mousedown",
		moveEvent = hasTouch ? "touchmove" : "mousemove",
		endEvent = hasTouch ? "touchend touchcancel" : "mouseup";
	Util.eventTouchStart = startEvent;
	Util.eventTouchMove = moveEvent;
	Util.eventTouchEnd = endEvent;

	Util.preloadImg = (function(){
		var imgList = [];
		return function(imgs){
			for(var i = 0; i < imgs.length; i++){
				var img = new Image();
				img.src = imgs[i];
				imgList.push(img);
			}
		}

	})();

	Util.randomN = function(n) {
		return Math.floor(Math.random()*n);
	}

	Util.rotateOut = function($target){
		$target.addClass("rotateout");
		setTimeout(function(){
			$target.hide();
			$target.removeClass("rotateout");
		}, 1000);
	}
	Util.rotateIn = function($target, delay){
		$target.addClass("rotatein");
		$target.show();
		setTimeout(function(){
			$target.addClass("rotatein1");
			setTimeout(function(){
				$target.removeClass("rotatein");
				$target.removeClass("rotatein1");
			}, 1000);
		}, delay);
	}

	Util.isIphone = !!(navigator.userAgent.toLowerCase().indexOf("iphone") > -1);
	Util.isSafari = !!(navigator.userAgent.toLowerCase().indexOf("safari") > -1);
	Util.LSound = (function() {
		var LSound = {}
		if(!!Audio){
		var UNDEFINED="undefined";
		function base(d,b,a){var p=null,o=d.constructor.prototype,h={};if(d.constructor.name=="Object"){console.warn("When you use the extends. You must make a method like 'XX.prototype.xxx=function(){}'. but not 'XX.prototype={xxx:function(){}}'.");}d.__ll__parent__=d.__ll__parent__||[];d.__ll__parent__.push(b.prototype);for(p in o){h[p]=1;}for(p in b.prototype){if(!h[p]){o[p]=b.prototype[p];}}if(o.toString==Object.prototype.toString){o.toString=LObject.prototype.toString;}b.apply(d,a);}var LExtends=base;
		function LEvent(type){this.eventType=type;this._ll_preventDefault=false;}LEvent.prototype.preventDefault=function(){this._ll_preventDefault=true;};LEvent.INIT="init";LEvent.COMPLETE="complete";LEvent.ENTER_FRAME="enter_frame";LEvent.WINDOW_RESIZE="resize";LEvent.SOUND_COMPLETE="sound_complete";LEvent.END_CONTACT="endContact";LEvent.PRE_SOLVE="preSolve";LEvent.POST_SOLVE="postSolve";LEvent.BEGIN_CONTACT="beginContact";LEvent.addEventListener=function(n,t,f,b){if(b==null){b=false;}if(n.addEventListener){n.addEventListener(t,f,b);}else if(n.attachEvent){n["e"+t+f]=f;n[t+f]=function(){n["e"+t+f]();};n.attachEvent("on"+t,n[t+f]);}};LEvent.removeEventListener=function(n,t,f,b){if(b==null){b=false;}if(n.removeEventListener){n.removeEventListener(t,f,b);}else if(n.detachEvent){n["e"+t+f]=f;n[t+f]=function(){n["e"+t+f]();};n.detachEvent("on"+t,n[t+f]);}};
		var LObject=(function(){function LObject(){this.type="LObject";this.objectIndex=++LGlobal.objectIndex;this.objectindex=this.objectIndex;}LObject.prototype={callParent:function(f_n,args){if(!f_n||!args){return;}var s=this,init=false,r;if(typeof s.__ll__parent_call=="undefined"){init=true;s.__ll__parent_call=0;}else{s.__ll__parent_call++;}if(s.__ll__parent_call>=s.__ll__parent__.length){return false;}if(!s.__ll__parent__[s.__ll__parent_call][f_n]){r=s.callParent(f_n,args);}else{r=s.__ll__parent__[s.__ll__parent_call][f_n].apply(s,args);}if(init){delete s.__ll__parent_call;}return r;},toString:function(){return "[object "+this.type+"]";}};return LObject;})();
		var LAjax=(function(){function LAjax(){this.responseType=null;}LAjax.prototype={TEXT:"text",ARRAY_BUFFER:"arraybuffer",BLOB:"blob",get:function(url,data,oncomplete,onerror){this.getRequest("GET",url,data,oncomplete,onerror);},post:function(url,data,oncomplete,onerror){this.getRequest("POST",url,data,oncomplete,onerror);},getRequest:function(t,url,d,oncomplete,err){var s=this,k,data="",a="";s.err=err;var ajax=s.getHttp();if(!ajax){return;}if(d){for(k in d){data+=(a+k+"="+d[k]);a="&";}}if(t.toLowerCase()=="get"){url+=((url.indexOf('?')>=0?'&':'?')+data);data=null;}ajax.open(t,url,true);if(s.responseType){ajax.responseType=s.responseType;s.responseType=s.TEXT;}ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");ajax.onreadystatechange=function(){if(ajax.readyState==4){if(ajax.status>=200&&ajax.status<300||ajax.status===304){if(oncomplete){if(ajax.responseType==s.ARRAY_BUFFER||ajax.responseType==s.BLOB){oncomplete(ajax.response);}else if(ajax.responseText.length>0){oncomplete(ajax.responseText);}else{oncomplete(null);}}}else{if(err){err(ajax);}}}};ajax.send(data);},getHttp:function(){if(typeof XMLHttpRequest!=UNDEFINED){return new XMLHttpRequest();}try{return new ActiveXObject("Msxml2.XMLHTTP");}catch(e){try{return new ActiveXObject("Microsoft.XMLHTTP");}catch(e){if(!this.err){this.err(e);}}}return false;}};return new LAjax();})();
		var LEventDispatcher=(function(){function LEventDispatcher(){var s=this;LExtends(s,LObject,[]);s._eventList=new Array();}var p={addEventListener:function(type,listener){this._eventList.push({listener:listener,type:type});},removeEventListener:function(type,listener){var s=this,i,length;length=s._eventList.length;for(i=0; i<length; i++){if(!s._eventList[i]){continue;}if(type==s._eventList[i].type&&s._eventList[i].listener==listener){s._eventList.splice(i,1);return;}}},removeAllEventListener:function(){this._eventList=[];},dispatchEvent:function(event){var s=this,i,length=s._eventList.length,ctype=(typeof event=="string")?event:event.eventType;for(i=0; i<length; i++){if(!s._eventList[i]){continue;}if(ctype==s._eventList[i].type){if(typeof event=="string"){s.currentTarget=s.target=s;s.eventType=s.event_type=ctype;s._eventList[i].listener(s);}else{if(!event.target){event.target=s;}if(!event.currentTarget){event.currentTarget=event.target;}event._ll_preventDefault=false;s._eventList[i].listener(event);if(event._ll_preventDefault){return false;}}return true;}}return false;},hasEventListener:function(type,listener){var s=this,i,length=s._eventList.length;for(i=0; i<length; i++){if(!s._eventList[i]){continue;}if(type==s._eventList[i].type){if(typeof listener==UNDEFINED||listener==s._eventList[i].listener){return true;}}}return false;}};for(var k in p){LEventDispatcher.prototype[k]=p[k];}return LEventDispatcher;})();
		var LWebAudio=(function(){function LWebAudio(){var s=this;LExtends(s,LEventDispatcher,[]);s.currentTime=0;s.currentStart=0;s.currentSave=0;s.length=0;s.loopStart=0;s.loopEnd=0;s.loopIndex=0;s.loopLength=1;s.playing=false;s.volume=1;}LWebAudio.container=[];LWebAudio.containerCount=0;LWebAudio.audioTag=new Audio();LWebAudio._context=null;var p={getWebAudio:function(){var data;if(LWebAudio.containerCount>0){data=LWebAudio.container.shift();}else{if(typeof webkitAudioContext!==UNDEFINED){try{data=new webkitAudioContext();}catch(e){LWebAudio.containerCount=LWebAudio.container.length;data=LWebAudio.container.shift();}}else if(typeof AudioContext!==UNDEFINED){try{data=new AudioContext();}catch(e){LWebAudio.containerCount=LWebAudio.container.length;data=LWebAudio.container.shift();}}else{throw "AudioContext not supported.:(";}}if(!data.createGainNode){data.createGainNode=data.createGain;}LWebAudio.container.push(data);return data;},onload:function(data){var s=this;if(Object.prototype.toString.apply(data)!=='[object AudioBuffer]'){s.load(data);return;};if(!s.data){s.data=s.getWebAudio();}s.buffer=data;s.length=s.buffer.duration;var e=new LEvent(LEvent.COMPLETE);e.currentTarget=s;e.target=s.buffer;s.dispatchEvent(e);},_onended:function(){var s=this;s.dispatchEvent(LEvent.SOUND_COMPLETE);if(++s.loopIndex<s.loopLength){s.play(s.currentStart,undefined,s.currentTimeTo);}else{s.close();}},load:function(u){var s=this;if(typeof u!=="string"){if(Object.prototype.toString.apply(u)=='[object AudioBuffer]'){s.onload(u);}else if(Object.prototype.toString.apply(u)=='[object ArrayBuffer]'){if(!s.data){s.data=s.getWebAudio();}s.data.decodeAudioData(u,s.onload.bind(s),function(error){throw "AudioContext decodeAudioData error:"+error.toString();});}return;}var a,b,k,d,q={"mov":"quicktime","3gp":"3gpp","ogv":"ogg","m4a":"mpeg","mp3":"mpeg","wave":"wav","aac":"mp4"};a=u.split(',');for(k in a){b=a[k].split('.');d=b[b.length-1];if(q[d]){d=q[d];}if(LWebAudio.audioTag.canPlayType(s._type+"/"+d)){LAjax.responseType=LAjax.ARRAY_BUFFER;LAjax.get(a[k],{},s.onload.bind(s));return;}}},getCurrentTime:function(){var s=this;if(s.playing){return s.data.currentTime-s.currentSave+s.currentTime;}else{return s.currentSave;}},setVolume:function(v){var s=this;s.volume=v;if(s.playing){s.volumeNode.gain.value=v;}},getVolume:function(){return this.volume;},play:function(c,l,to){var s=this;if(s.length==0){return;}if(typeof l!==UNDEFINED){s.loopIndex=0;s.loopLength=l;}if(typeof c!==UNDEFINED){s.currentTime=c;s.currentStart=c;}if(typeof to!==UNDEFINED){s.currentTimeTo=to>s.length?s.length:to;}else{s.currentTimeTo=s.length;}s.data.loop=false;s.playing=true;if(s.timeout){clearTimeout(s.timeout);delete s.timeout;}s.timeout=setTimeout(s._onended.bind(s),(s.currentTimeTo-s.currentTime)*1000);s.bufferSource=s.data.createBufferSource();s.bufferSource.buffer=s.buffer;s.volumeNode=s.data.createGainNode();s.volumeNode.gain.value=s.volume;s.volumeNode.connect(s.data.destination);s.bufferSource.connect(s.volumeNode);s.currentSave=s.data.currentTime;if(s.bufferSource.start){s.bufferSource.start(0,s.currentTime,s.length-s.currentTime);}else{s.bufferSource.noteGrainOn(0,s.currentTime,s.length-s.currentTime);}},playSegment:function(c,seg,l){this.playTo(c,c+seg,l);},playTo:function(c,to,l){this.play(c,l,to);},stop:function(){var s=this;if(!s.playing){return;}clearTimeout(s.timeout);delete s.timeout;if(s.bufferSource.stop){s.bufferSource.stop(0);}else{s.bufferSource.noteOff(0);}s.currentSave=s.getCurrentTime();s.currentTime=s.currentSave;s.playing=false;},close:function(){var s=this;if(!s.playing){return;}clearTimeout(s.timeout);delete s.timeout;if(s.bufferSource.stop){s.bufferSource.stop(0);}else{s.bufferSource.noteOff(0);}s.playing=false;s.currentTime=0;s.currentSave=0;}};for(var k in p){LWebAudio.prototype[k]=p[k];}return LWebAudio;})();
		var LDisplayObject=(function(){function LDisplayObject(){var s=this;LExtends(s,LEventDispatcher,[]);s.name="instance"+s.objectIndex;s.x=0;s.y=0;s.width=0;s.height=0;s.scaleX=1;s.scaleY=1;s.alpha=1;s.visible=true;s.rotate=0;s.mask=null;s.blendMode=null;s.filters=null;}var p={_createCanvas:function(){var s=this;if(!s._canvas){s._canvas=document.createElement("canvas");s._context=s._canvas.getContext("2d");}},ll_show:function(){var s=this,c=LGlobal.canvas;if(!s._canShow()){return;}if(!LGlobal.box2d&&typeof s._ll_loopframe=="function"){s._ll_loopframe();}c.save();s._showReady(c);if(s.blendMode){c.globalCompositeOperation=s.blendMode;}if(s.filters){s._ll_setShadow();}s._rotateReady();if(s.mask!=null&&s.mask.ll_show){s.mask.ll_show();c.clip();}s._transformRotate();s._transformScale();s._coordinate(c);if(s.alpha<1){c.globalAlpha=s.alpha;}s._ll_show(c);c.restore();if(LGlobal.box2d!=null&&typeof s._ll_loopframe=="function"){s._ll_loopframe();}},_canShow:function(){return this.visible;},_coordinate:function(c){var s=this;if(s.x!=0||s.y!=0){c.transform(1,0,0,1,s.x,s.y);}},_rotateReady:function(){},_showReady:function(c){},_ll_show:function(c){},_ll_setShadow:function(){var s=this,f=s.filters,i,l;if(!f){return;}for(i=0,l=f.length; i<l; i++){f[i].ll_show();}},_transformRotate:function(){var s=this,c;if(s.rotate==0){return;}c=LGlobal.canvas,rotateFlag=Math.PI/180,rotateObj=new LMatrix();if((typeof s.rotatex)==UNDEFINED){s.rotatex=0;s.rotatey=0;}if(s.box2dBody){rotateFlag=1;}rotateObj.a=Math.cos(s.rotate*rotateFlag);rotateObj.b=Math.sin(s.rotate*rotateFlag);rotateObj.c=-rotateObj.b;rotateObj.d=rotateObj.a;rotateObj.tx=s.x+s.rotatex;rotateObj.ty=s.y+s.rotatey;rotateObj.transform(c).setTo(1,0,0,1,-rotateObj.tx,-rotateObj.ty).transform(c);},_transformScale:function(){var s=this,c=LGlobal.canvas,scaleObj;if(s.scaleX==1&&s.scaleY==1){return;}scaleObj=new LMatrix();if(s.scaleX!=1){scaleObj.tx=s.x;}if(s.scaleY!=1){scaleObj.ty=s.y;}scaleObj.a=s.scaleX;scaleObj.d=s.scaleY;scaleObj.transform(c).setTo(1,0,0,1,-scaleObj.tx,-scaleObj.ty).transform(c);},copyProperty:function(a){var s=this,k;for(k in a){if(typeof a[k]=="number"||typeof a[k]=="string"||typeof a[k]=="boolean"){if(k=="objectindex"||k=="objectIndex"){continue;}s[k]=a[k];}else if(Array.isArray(a[k])){s[k]=a[k].slice();}}if(a.mask){s.mask=a.mask.clone();}},getAbsoluteScale:function(){var s=this,sX,sY,p;sX=s.scaleX;sY=s.scaleY;p=s.parent;while(p&&p!="root"){sX*=p.scaleX;sY*=p.scaleY;p=p.parent;}return{scaleX:sX,scaleY:sY};},getRootCoordinate:function(){var s=this,sx,sy,p;sx=s.x;sy=s.y;p=s.parent;while(p&&p!="root"){sx*=p.scaleX;sy*=p.scaleY;sx+=p.x;sy+=p.y;p=p.parent;}return new LPoint(sx,sy);},getBounds:function(d){if(typeof d==UNDEFINED){return new LRectangle(0,0,0,0);}var s=this,x=0,y=0,w=0,h=0,sp,dp;if(s.objectIndex!=d.objectIndex){sp=s.getRootCoordinate();dp=d.getRootCoordinate();x=sp.x-dp.x;y=sp.y-dp.y;}if(d.getWidth){w=d.getWidth();}if(d.getHeight){h=d.getHeight();}return new LRectangle(x,y,w,h);},getDataCanvas:function(){var s=this,_o,o,_c,c;s._createCanvas();o=LGlobal.canvasObj;c=LGlobal.canvas;_o=s._canvas;_c=s._context;s.width=s.getWidth();s.height=s.getHeight();_o.width=s.width;_o.height=s.height;_c.clearRect(0,0,s.width,s.height);LGlobal.canvasObj=s._canvas;LGlobal.canvas=s._context;s.ll_show();s._canvas=_o;s._context=_c;LGlobal.canvasObj=o;LGlobal.canvas=c;return s._canvas;},getDataURL:function(){var s=this,r=s.getDataCanvas();return r.toDataURL();},ismouseonShapes:function(shapes,mx,my){var s=this,parent=s,m,child,j,v,arg;if(typeof shapes==UNDEFINED){shapes=s.shapes;}m=s.getRootMatrix();for(j=shapes.length-1; j>=0; j--){child=shapes[j];arg=child.arg;v=s._changeShape(child.type,arg,m);if(child.type==LShape.VERTICES){if(LGlobal.hitPolygon(v,mx,my)){return true;}}else if(child.type==LShape.RECT){if(LGlobal.hitPolygon(v,mx,my)){return true;}}else if(child.type==LShape.ARC){if((v[0]-mx)*(v[0]-mx)+(v[1]-my)*(v[1]-my)<v[3]){return true;}}}return false;},_changeShape:function(type,arg,m){var v,arg=arg,r2,i,l,v1,v2;if(type==LShape.VERTICES){v=[];for(i=0,l=arg.length; i<l; i++){v[i]=m.toArray([arg[i][0],arg[i][1],1]);}}else if(type==LShape.RECT){v=[[arg[0],arg[1]],[arg[0]+arg[2],arg[1]],[arg[0]+arg[2],arg[1]+arg[3]],[arg[0],arg[1]+arg[3]]];for(i=0,l=v.length; i<l; i++){v[i]=m.toArray([v[i][0],v[i][1],1]);}}else if(type==LShape.ARC){v1=m.toArray([arg[0],arg[1],1]);v2=m.toArray([arg[0]+arg[2],arg[1],1]);r2=(v1[0]-v2[0])*(v1[0]-v2[0])+(v1[1]-v2[1])*(v1[1]-v2[1]);v=[v1[0],v1[1],Math.sqrt(r2),r2];}return v;},getRootMatrix:function(){var parent=this,m=new LMatrix();while(parent&&parent!="root"){if(parent.scaleX!=1||parent.scaleY!=1){m.scale(parent.scaleX,parent.scaleY);}if(parent.rotate!=0){m.rotate(parent.rotate);}if(parent.x!=0||parent.y!=0){m.translate(parent.x,parent.y);}parent=parent.parent;}return m;},remove:function(){var s=this,p=s.parent;if(!p||p=="root"){return;}p.removeChild(s);}};for(var k in p){LDisplayObject.prototype[k]=p[k];}return LDisplayObject;})();
		var LMedia=(function(){function LMedia(){var s=this;LExtends(s,LDisplayObject,[]);s.length=0;s.loopIndex=0;s.loopLength=1;s.playing=false;s.oncomplete=null;s.onsoundcomplete=null;s.currentStart=0;}var p={onload:function(){var s=this;if(s.data.readyState){s.length=s.data.duration;var e=new LEvent(LEvent.COMPLETE);e.currentTarget=s;e.target=s.data;s.dispatchEvent(e);return;}s.data.addEventListener("canplaythrough",function(){s.onload();},false);},_onended:function(){var s=this;if(s.data.ended){s.dispatchEvent(LEvent.SOUND_COMPLETE);}if(++s.loopIndex<s.loopLength){s.data.currentTime=s.currentStart;if(s.timeout){clearTimeout(s.timeout);s.timeout=setTimeout(s._onended.bind(s),(s.currentTimeTo-s.data.currentTime)*1000);}s.data.play();}else{s.close();}},load:function(u){var s=this;if(Object.prototype.toString.apply(u)=="[object HTMLAudioElement]"){s.data=u;s.onload();return;}var a,b,k,d,q={"mov":"quicktime","3gp":"3gpp","ogv":"ogg","m4a":"mpeg","mp3":"mpeg","wave":"wav","aac":"mp4"};a=u.split(',');for(k in a){b=a[k].split('.');d=b[b.length-1];if(q[d]){d=q[d];}if(s.data.canPlayType(s._type+"/"+d)){s.data.src=a[k];s.onload();s.data.addEventListener("ended",function(){s._onended();},false);s.data.load();return;}}if(s.oncomplete){s.oncomplete({});}},getCurrentTime:function(){return this.data.currentTime;},setVolume:function(v){this.data.volume=v;},getVolume:function(){return this.data.volume;},play:function(c,l,to){var s=this;if(s.length==0){return;}if(typeof l==UNDEFINED){l=1;}if(typeof c==UNDEFINED){c=0;}if(c>0){s.data.currentTime=c;s.currentStart=c;}if(typeof to!==UNDEFINED){s.currentTimeTo=to>s.length?s.length:to;if(s.timeout){clearTimeout(s.timeout);delete s.timeout;}s.timeout=setTimeout(s._onended.bind(s),(s.currentTimeTo-s.data.currentTime)*1000);}s.data.loop=false;s.loopIndex=0;s.loopLength=l;s.playing=true;s.data.play();},playSegment:function(c,seg,l){this.playTo(c,c+seg,l);},playTo:function(c,to,l){this.play(c,l,to);},stop:function(){var s=this;if(!s.playing){return;}if(s.timeout){clearTimeout(s.timeout);delete s.timeout;}s.playing=false;s.data.pause();},close:function(){var s=this;if(!s.playing){return;}if(s.timeout){clearTimeout(s.timeout);delete s.timeout;}s.playing=false;s.data.pause();s.data.currentTime=0;s.currentSave=0;}};for(var k in p){LMedia.prototype[k]=p[k];}return LMedia;})();

		LSound = function(u) {
			var s = this;
			s.type = "LSound";
			s._type = "audio";
			LGlobal = {};
			LGlobal.webAudio=true;

			if (LSound.webAudioEnabled && LGlobal.webAudio) {
				LExtends(s, LWebAudio, []);
			} else {
				LExtends(s, LMedia, []);
				s.data = new Audio();
				s.data.loop = false;
				s.data.autoplay = false;
			} if (u) {
				s.load(u);
			}
		}
		LSound.TYPE_SOUND = "sound";
		LSound.webAudioEnabled = false;
		LSound.LEvent = LEvent;
		var protocol = location.protocol;
		if (protocol == "http:" || protocol == "https:") {
			if (typeof webkitAudioContext !== UNDEFINED) {
				try {
					LWebAudio._context = new webkitAudioContext();
				} catch (e) {}
			} else if (typeof AudioContext !== UNDEFINED) {
				try {
					LWebAudio._context = new AudioContext();
				} catch (e) {}
			}
			if (LWebAudio._context) {
				LWebAudio.container.push(LWebAudio._context);
				LSound.webAudioEnabled = true;
			}
		}

		}
		return LSound;
	})();


	Util.sound = {
		effect: {}
		,createAudio: function(src, loop, map){
			var audio = document.createElement("audio");
			audio.src = src;
			audio.loop = loop;
			map && (map[src] = audio);
			return audio;
		}
		,playEffect: function(src, loop){
			var self = this;
			if(Util.isIphone){
				if(!this.effect[src]){
					var au = this.createAudio(src, loop);
					self.effect[src] = {
						node: au,
						duration: au.duration || 2,
						list: [au],
						playCount: 0,
						current: 0,
						hasLoaded: false,
						playCountBeforeLoaded: 1
					};

					au.onloadeddata = function(){
						self.effect[src].hasLoaded = true;
						for(var i = 0; i < self.effect[src].playCountBeforeLoaded; i++){
							Util.sound.playEffect(src, 0);
						}
					}
				}else if(!this.effect[src].hasLoaded){
					this.effect[src].playCountBeforeLoaded++;
				}else{
					try{
						var effect = this.effect[src];
						// 缓存不足，就增加呗~
						if(effect.playCount >= effect.list.length){
							var max = effect.playCount - effect.list.length + 1;
							for(var i = 0; i < max; i++){
								var au = effect.node.cloneNode();
								effect.list.push(au);
							}
							effect.current = effect.list.length-1;
						}
						
						var sound = effect.list[effect.current];
						sound.play();

						effect.current++;
						if(effect.current >= effect.list.length){
							effect.current = 0;
						}
						effect.playCount++;
						setTimeout(function(){
							effect.playCount--;
						}, effect.duration * 1000);
					}catch(e){
						alert(e);
					}
				}
			}else{
				// var self = this;
				if(!this.effect[src]){
					this.effect[src] = new Util.LSound();
					self.effect[src].addEventListener(Util.LSound.LEvent.COMPLETE,function(){
						self.effect[src].play(0, 1);
					});
					this.effect[src].load(src);
				}else{
					this.effect[src].play(0, 1);
				}

			}
		}
	}
	Util.soundPreload = function(src){
		var hasLoaded = true;
		var audio = null;
		try{
			audio = document.createElement("audio");
			audio.addEventListener('onended', function(){
				// audio.play();
				hasLoaded = true;
			}, false);
			audio.src = src;
		}catch(e){}
		return {
			play: function(){
				try{
					if(hasLoaded){
						audio.currentTime = 0;
						audio.play();
					}
				}catch(e){}
			}
		}
	}



}(Util);

var DEGREE = {
	EASY: "easy"
	,NORMAL: "normal"
	,CRAZY: "crazy"
}
var MODE = {
	ODD: "odd"
	,EVEN: "even"
}

var Frame = {
	$object: null
	,start: function(){}
	,end: function(){}
}
var PrefaceFrame = $.extend({}, Frame, {
	$object: $("#preface")
	,start: function(){
		var self = this;
		var $tip0 = self.$object.find(".ptips0");
		var $tip1 = self.$object.find(".ptips1");
		$tip0.css("top", Game.height+"px");
		$tip1.css("top", Game.height+"px");
		Util.animation($tip0, 1, {top: Game.height/2-$tip0.height()*2, onComplete:function(){
			Util.animation($tip1, 1, {top: Game.height/2, onComplete:function(){
				setTimeout(function(){
					Game.switchTo(self, Start0Frame);
				}, 1000);
			}});
		}});
		// setTimeout(function(){
		// Game.switchTo(self, Start0Frame);
		// });
	}
});
var Start0Frame = $.extend({}, Frame, {
	$object: $("#start-0")
	,isFirst: true
	,start: function(){
		var self = this;
		self._bindUI();
		if(self.isFirst){
			self.isFirst = false;
			self._setDefault();
			self._bindEvent();
		}
	}
	,_bindUI: function(){
		// $("html").css("background", "#49caae");
	}
	,_setDefault: function(){
		this.$object.find(".seasy a").addClass("active");
		Game.degree = DEGREE.EASY;
	}
	,_bindEvent: function(){
		var self = this;
		self.$object.on(Util.eventTouchStart, ".sdegree a", function(){
			var $aself = $(this);
			var $parent = $aself.closest(".degree");
			if($parent.hasClass("seasy")){
				Game.degree = DEGREE.EASY;
			}else if($parent.hasClass("snormal")){
				Game.degree = DEGREE.NORMAL;
			}else if($parent.hasClass("scrazy")){
				Game.degree = DEGREE.CRAZY;
			}
			self.$object.find("a").removeClass("active");
			$aself.addClass("active");
		}).on(Util.eventTouchStart, "#startgame", function(){
			Game.switchTo(self, Start1Frame);
			Game.initSound();
		}).on(Util.eventTouchStart, "#moregame", function(){
			//location.href = btGame.URL.getMoreGame();
			// Play68.goHome();
		});
	}
});
var Start1Frame = $.extend({}, Frame, {
	$object: $("#start-1")
	,isFirst: true
	,start: function(){
		var self = this;
		try{
			Game.bestScore[Game.degree] = localStorage["kdosBestScore_"+Game.degree] || 0;
		}catch(e){}
		self._bindUI();
		if(self.isFirst){
			self.isFirst = false;
			self._setDefault();
			self._bindEvent();
		}
	}
	,_bindUI: function(){
		// $("html").css("background", "#636363");
	}
	,_setDefault: function(){
		this.$object.find(".seven a").addClass("active");
		Game.mode = MODE.EVEN;
	}
	,_bindEvent: function(){
		var self = this;
		self.$object.on(Util.eventTouchStart, ".smode a", function(){
			var $aself = $(this);
			var $parent = $aself.closest(".mode");
			if($parent.hasClass("seven")){
				Game.mode = MODE.EVEN;
				self.$object.find(".stips").removeClass("invert");
			}else if($parent.hasClass("sodd")){
				Game.mode = MODE.ODD;
				self.$object.find(".stips").addClass("invert");
			}
			self.$object.find("a").removeClass("active");
			$aself.addClass("active");
		}).on(Util.eventTouchStart, "#start", function(){
			Game.switchTo(self, MainFrame);
		});
	}
});
var MainFrame = $.extend({}, Frame, {
	$object: $("#main")
	,$score: $("#main .score")
	,isFirst: true
	,startTime: null
	,blocks:{
		width: 0
		,height: 0
		,speed: 1
		,list: []
		,createRow: function(top){
			var self = this;
			for(var i = 0; i < 3; i++){
				var block = {};
				block.number = Util.randomN(10)+1;
				block.top = top;
				var content = '<div class="block" onselectstart="return false;" ontouchstart="return false;" data-number="'+block.number+'"> </div>'
				block.$dom = $(content).appendTo(MainFrame.$object.find(".blocks"));
				block.$dom.css({"top": block.top+"px"
								,"left": (i*self.width)+"px"
								,"width": self.width+"px"
								,"height": self.height+"px"
								,"line-height": self.height+"px"
								,"background-size": (self.width*5)+"px "+(self.height*2)+"px"
								,"background-position": ((-(block.number-1)%5)*self.width)+"px "+(parseInt((block.number-1)/5)*(-self.height))+"px"
							});
				self.list.push(block);
				block.$dom.blockObject = block;
			}
		}
		,moveDown: function(){
			var self = this;
			for(var i = 0; i < self.list.length; i++){
				self.list[i].top+=3*self.speed;
				if(self.list[i].top > Game.height+10){
					setTimeout(function(){
						self.list.shift();
					},0);
				}else{
					self.list[i].$dom.css("top", self.list[i].top+"px");
				}
			}
			var lastBlock = self.list[self.list.length-1];
			if(lastBlock.top > -2){
				self.createRow(lastBlock.top-self.height);
			}
			self._checkGameOver();
		}
		,reset: function(){
			var self = this;
			self.list = [];
			MainFrame.$object.find(".blocks").html("");
		}
		,_checkGameOver: function(){
			var self = this;
			var isGameOver = false;
			for(var i = 0; i < Math.min(3, self.list.length); i++){
				if(self.list[i].top+self.height>Game.height 
					&& ((self.list[i].number%2==0 && Game.mode==MODE.EVEN) || (self.list[i].number%2==1 && Game.mode==MODE.ODD))
					&& !self.list[i].$dom.hasClass("right")){
					self.list[i].$dom.addClass("wrong");
					isGameOver = true;
				}
			}
			if(isGameOver){
				MainFrame.gameOver();
			}
		}
	}
	,start: function(){
		var self = this;
		// if()
		// console.log("haha");
		self.blocks.height = self.blocks.width = Game.width/3;
		self.blocks.createRow(-self.blocks.height);
		self.blocks.speed = (Game.degree==DEGREE.EASY)?1:((Game.degree==DEGREE.NORMAL)?1.5:2);
		self._bindEvent();
		if(self.isFirst){
			self.isFirst = false;
		}
		self.startTime = new Date;
		// self.interval = Util.setIntervalWithTimeout(function(){
		// 	self._update();
		// }, 1000/30);
		// requestAnimationFrame($.proxy(self, self._update));
		function _update(){
			self._update = requestAnimationFrame(_update);
			self.blocks.moveDown();
			Game.currentScore = ((new Date()-self.startTime)/1000).toFixed(2);
			self.$score.html(Game.currentScore+"s");
		}
		_update();
	}
	,end: function(){
		var self = this;
		self.blocks.reset();
	}
	,gameOver: function(){
		var self = this;
		// Util.clearIntervalWithTimeout(self.interval);
		cancelAnimationFrame(self._update);
		setTimeout(function(){
			Game.switchTo(self, OverFrame);
		}, 500);
		self.$object.off(Util.eventTouchStart);
		Util.sound.playEffect("sound/gameover_sound.mp3", 0);
	}
	
	,_bindEvent: function(){
		var self = this;
		self.$object.on(Util.eventTouchStart, ".block", function(){
			var $self = $(this);
			var val = parseInt($self.data("number"));
			if((val%2==0 && Game.mode==MODE.EVEN) || (val%2==1 && Game.mode==MODE.ODD)){
				$self.addClass("right");
				Util.sound.playEffect("sound/click_sound.mp3", 0);
			}else{
				$self.addClass("wrong");
				self.gameOver();
			}
			return false;
		});
	}
});
var OverFrame = $.extend({}, Frame, {
	$object: $("#over")
	,isFirst: true
	,start: function(){
		var self = this;

		if(parseFloat(Game.currentScore) > parseFloat(Game.bestScore[Game.degree])){
			Game.bestScore[Game.degree] = Game.currentScore;
			// Game.sounds["congradute"].play();
			Util.sound.playEffect("sound/congraduate_sound.mp3", 0);
			try{
				localStorage["kdosBestScore_"+Game.degree] = Game.bestScore[Game.degree];
			}catch(e){}
		}
		self._bindUI();
		if(self.isFirst){
			self._bindEvent();
			self.isFirst = false;
		}
		self._share();
	}
	,_bindUI: function(){
		var self = this;
		// $("html").css("background", "#f46564");
		self.$object.find(".otitle").removeClass("degree-easy").removeClass("degree-normal").removeClass("degree-crazy").addClass("degree-"+Game.degree);
		self.$object.find(".oscore").html(Game.currentScore+"s");
		self.$object.find(".obestscore").html(Game.bestScore[Game.degree]+"s");
	}
	,_bindEvent: function(){
		var self = this;
		self.$object.on(Util.eventTouchStart, ".btn", function(){
			var $self = $(this);
			if($self.hasClass("oback")){
				Game.switchTo(self, Start0Frame);
			}else if($self.hasClass("oretry")){
				Game.switchTo(self, MainFrame);
			}else if($self.hasClass("omore")){
				// Play68.goHome();
			}
		});
	}
	,_share: function(){
		var self = this;
		var degree = (Game.degree==DEGREE.EASY)?"低能儿":((Game.degree==DEGREE.NORMAL)?"正常":"高智商");
		var myHead = "";
		if (Game.degree==DEGREE.EASY) {
			myHead =1;
		}
		else if (Game.degree==DEGREE.NORMAL) {
			myHead =2;
		}
		else{
			myHead =3;
		}
		// Play68.setRankingLevelScoreDesc(myHead,Game.currentScore);
		// updateShare(Game.currentScore,degree);
	}
});
window.Game = {
	currentScore: 0
	,bestScore: {}
	,degree: DEGREE.EASY
	,mode: MODE.ODD
	,width: $(window).width()
	,height: $(window).height()
	,baseFontSize: 1
	,sounds: {}
	,switchTo: function(sourceFrame, targetFrame, style){
		var self = this;
		setTimeout(function(){
			if(targetFrame == undefined){
				targetFrame = sourceFrame;
			}else{
				sourceFrame.$object.fadeOut(500);
				// Util.rotateOut(sourceFrame.$object);
				sourceFrame.end();
			}
			targetFrame.start();
			// targetFrame.$object.show();
			setTimeout(function(){
				targetFrame.$object.fadeIn(500);
			}, 500);
			// Util.rotateIn(targetFrame.$object, 1000);
		}, 0);
	}
	,start: function(){
		var self = this;
		self._preload();
		$(".frame").hide();
		;(function setSize(){
			$h = $("html");
			$f = $("#frames");
			$(window).resize(function(){
				(function setBaseFontSize(){
					var winW = $h.width();
					var isPC = navigator.userAgent.match(/(ipad|iphone|ipod|android|windows phone)/i) ? false : true;
					// winW = isPC ? 480 : winW;
					var fontSize = self.baseFontSize = ~~winW * 12 / 320;
					$h.css("font-size", fontSize);
				})();

				self.width = $(window).width();
				self.height = $(window).height();

				$f.css("width", self.width+"px");
				$f.css("height", self.height+"px");
			});
			$(window).resize();
		})();
		this.switchTo(PrefaceFrame);
		// this.switchTo(OverFrame);
	}
	,initSound: function(){
		var self = this;
		if(!self._hasInitSound){
			self.sounds["click"] = Util.soundPreload("sound/click_sound.mp3");
			self.sounds["congradute"] = Util.soundPreload("sound/congraduate_sound.mp3");
			self.sounds["gameover"] = Util.soundPreload("sound/gameover_sound.mp3");
			self._hasInitSound = true;
		}
	}
	,_preload: function(){
		var self = this;
		Util.preloadImg(["style/img_d/break_phone.png"
						,"style/img_d/difficult_mode_checked.png"
						,"style/img_d/difficult_mode_unchecked.png"
						,"style/img_d/easy_mode_checked.png"
						,"style/img_d/easy_mode_unchecked.png"
						,"style/img_d/friendly_tip.png"
						,"style/img_d/more_game_normal.png"
						,"style/img_d/normal_mode_checked.png"
						,"style/img_d/normal_mode_unchecked.png"
						,"style/img_d/start_game_normal.png"
						,"style/img_d/title.png"
						,"style/img_d/introduce.png"
						,"style/img_d/introduce_invert.png"
						,"style/img_d/even_mode_unchecked.png"
						,"style/img_d/odd_mode_unchecked.png"
						,"style/img_d/even_mode_checked.png"
						,"style/img_d/odd_mode_checked.png"
						,"style/img_d/start_normal.png"
						,"style/img_d/ending_moregame_normal.png"
						,"style/img_d/normal_mode.png"
						,"style/img_d/difficult_mode.png"
						,"style/img_d/easy_mode.png"
						,"style/img_d/restart_btn_normal.png"
						,"style/img_d/share_text_normal.png"
						,"style/img_d/logo.png"
						,"style/img_d/back_btn_normal.png"
						]);
	}
}
Game.start();
});
// window.onerror = function(e){
// 	alert(e);
// }
