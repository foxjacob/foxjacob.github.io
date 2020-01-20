

var maxError=100;

var errorCount=0;

window.onerror=function(sMsg,sUrl,sLine){
	//alert(sLine);
	return;
}


function callAjax(values){
	//type:提交方式(post/get)
	//url:提交地址
	//callBackAjaxSuccess:成功返回回调方法
	//callBackSuccess:返回success回调方法
	//callBackError:返回error回调方法
	//callBackNothing:返回nothing回调方法
	//callBackOff:返回off回调方法
	//callBackNull:返回null调方法
	//data:提交参数,dataType:定义返回数据格式
	
	if(values=='' || !values){
		return false;
	}
	
	if(values.type==''){
		return false;
	}
	
	if(values.url==''){
		return false;
	}
	
	if(!values.callBackAjaxSuccess){
		values.callBackAjaxSuccess=function(){};
	}
	
	if(!values.callBackSuccess){
		values.callBackSuccess=function(){};
	}
	
	if(!values.callBackNull){
		values.callBackNull=function(){};
	}
	
	if(!values.callBackError){
		values.callBackError=function(){};
	}
	
	if(!values.callBackNothing){
		values.callOff=function(){
			pageError();
		};
	}
	
	if(!values.callOff){
		values.callOff=function(){
			pageError();
		};
	}
	
	if(!values.dataType){
		values.dataType='';
	}

	if(!values.data){
		values.data=null;
	}
	
	var callBackFail=function(){
		try{
			if(timeOutState){
				pageError();
			}else{
				pageError();
			}
		}catch(e){}
	};
	
	
	var bodyObj = document.body;//页面body节点对象
	var loadingBox = document.createElement("div");//Loading对象
	
	if(values.loadingBox!='no'){
	
		bodyObj.appendChild(loadingBox);//新建的对象加入页面
		//loadingBox.innerHTML='<div class="loader" id="loadingId"><div class="loading"><div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div></div></div>';
		loadingBox.innerHTML='<div class="loader" id="loadingId"><div class="loading" style="background:rgba(0,0,0,0.5); color:#fff; line-height:68px;">加载中...</div></div>';
		loadingBox.id="loadingBox_by_gzy_Ajax";
		loadingBox.className="loadingBox";
		loadingBox.style.height=document.documentElement.clientHeight+'px';
	}
	
	var serverUrl='http://'+location.hostname;//获取服务器域名
	if(location.port!=''){
		serverUrl+=":"+location.port;
	}
	
	var xmlhttp;
	var sendDate=function(){//格式化提交参数
		var data='';
		for(var item in values.data){
			data+=item+'='+encodeURIComponent(values.data[item])+'&';
		}
		data=data.substr(0,data.length-1);
		return data;
	}
	
	var timeOut=30000;//超时时间
	var ajaxTimeOut;//定义超时计时器
	var timeOutState=false;//超时状态
	
	loadXMLAjax();//ajax请求

	function loadXMLAjax(){
		xmlhttp=null;
		
		if (window.XMLHttpRequest){// code for Firefox, Mozilla, IE7, etc.
			xmlhttp=new XMLHttpRequest();
		}else if (window.ActiveXObject){// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		values.url+='?rndNum='+Math.ceil(Math.random()*1000000);
		if (xmlhttp!=null){
			xmlhttp.onreadystatechange=state_Change;
			
			if(values.type=='post' || values.type=='POST'){//post请求
				xmlhttp.open("POST",values.url,true);
				xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				xmlhttp.send(sendDate());
			}else{//get请求
				xmlhttp.open("GET",values.url+'&'+sendDate(),true);
				xmlhttp.send(null);
			}
			
			ajaxTimeOut=setTimeout(function(){
				timeOutState=true;
				callBackFail();
				try{
					bodyObj.removeChild(loadingBox);
				}catch(e){}
			},timeOut);
		}else{
			//callBackFail();
			
			try{
				bodyObj.removeChild(loadingBox);
			}catch(e){}
		}
	}
	
	function state_Change(){//监听请求状态
		if (xmlhttp.readyState==4){// 4 = "loaded"
			
			if (xmlhttp.status==200){// 200 = "OK"
				try{
					bodyObj.removeChild(loadingBox);
				}catch(e){}
			
				if(timeOutState){//如果已经超时就跳出方法
					return false;
				}
									

				clearTimeout(ajaxTimeOut);
				
				var header=xmlhttp.getAllResponseHeaders();
				
				if(header.search(/json/i)){//返回的是json则格式化json
					e=eval('(' +xmlhttp.responseText+ ')');
				}else{
					try{
						e=eval('(' +xmlhttp.responseText+ ')');
					}catch(e){}
				}
				
				if(e.code=='error'){
					values.callBackError(e);
					return;
				}
				
				if(e.code=='off'){
					values.callBackOff(e);
					return;
				}
				
				if(e.code=='nothing'){
					values.callBackNothing(e);
					return;
				}
				
				if(e.code=='success'){
					values.callBackSuccess(e);
					return;
				}
				
				
				values.callBackAjaxSuccess(e);
				
			}else{
				callBackFail();
				try{
					bodyObj.removeChild(loadingBox);
				}catch(e){}
			}
		}
	}
}

function addScriptTag(src){
	var script = document.createElement('script');
	script.setAttribute("type","text/javascript");
	if(src.indexOf('?')){
		src+='&rndNum='+Math.ceil(Math.random()*1000000);
	}else{
		src+='?rndNum='+Math.ceil(Math.random()*1000000);
	}
	script.src =encodeURI(src);
	document.body.appendChild(script);
	
}

function GetParam(e){//通过名称获取url传值方法
	/*
	 *e:key名字
	*/
	var url = document.location.href;
	var name="";
	e+='=';

	if (url.indexOf(e)>0){
		 name = url.substring(url.indexOf(e)+e.length,url.length);
	}
	
	if(name.indexOf('&')>0){
		name = name.substring(0,name.indexOf('&'));
	}
	return name;
}

function getNow(){//获取当前时间
	var myDate = new Date();
	var h=myDate.getHours();       //获取当前小时数(0-23)
	var m=myDate.getMinutes();     //获取当前分钟数(0-59)
	var s=myDate.getSeconds();     //获取当前秒数(0-59)
	return h+':'+m+':'+s;
}

function getUrl(){//获取主机地址
	var serverUrl='http://'+location.hostname;//获取服务器域名
	if(location.port!=''){
		serverUrl+=":"+location.port;
	}
	return serverUrl;
}

function setCookie(c_name,value,expiredays){//设置cookie
	/*
	 *c_name:cookie key名字
	 *value:cookie 值
	 *expiredays:过期时间(天)
	*/
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

function getCookie(c_name){//读取cookie
	/*
	 *c_name:cookie key名称
	*/
	if(document.cookie.length>0){
		c_start=document.cookie.indexOf(c_name + "=");
		if (c_start!=-1){ 
			c_start=c_start + c_name.length+1;
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1){
				c_end=document.cookie.length;
			}
			return unescape(document.cookie.substring(c_start,c_end));
		} 
	}
	return "";
}

function setSessionStronge(s_name,value){
	if(window.sessionStorage){//支持本地缓存
		sessionStorage[s_name]=value;
	}else{//不支持本地缓存
		setCookie(s_name,value,3600000);
	}
}

function getSessionStronge(s_name){
	var value;
	if(window.sessionStorage){//支持本地缓存
		value=sessionStorage[s_name];
	}else{//不支持本地缓存
		value=getCookie(s_name);
	}
	return value;
}

function isChn(str){//验证中文名字
	/*
	 *str:用户姓名
	*/
	var reg = /^[\u4E00-\u9FA5]{2,8}$/; 
	if(!reg.test(str)){ 
		return false; 
	} 
	return true; 
}

function isIntNumber(str){//是否为整数
	/*
	 *str:数字字符
	*/
	var myreg = /^([0-9]+)*[0-9]$/;
	if(!myreg.test(str)){
		return false;
	}
	return true;  
}

function isMobileNumber(str){//验证手机号码格式
	/*
	 *str:手机号码
	*/
	if(!isIntNumber(str)){
		return false;
	}
	
	if(str.length!=11){
		return false;
	}
	
	var regMobileStr=new Array('13','14','15','170','18');
	var mobileState=0;
	for(var i=0;i<regMobileStr.length;i++){
		if(str.indexOf(regMobileStr[i])==0){
			mobileState=1;
			break;
		}
	}
	
	if(mobileState==0){
		return false;
	}
	
	return true;
}

function isEmail(str){//验证email格式
	/*
	 *str:email地址
	*/
	var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if(!myreg.test(str)){
		return false;
	}
	return true;
}

function isUserName(str){//用户名不能存在特殊字符
	/*
	 *str:用户姓名
	*/
	var myreg = /^([a-zA-Z\u4E00-\u9FA5]+)*[a-zA-Z\u4E00-\u9FA5]{2,11}$/;
	if(!myreg.test(str)){
		return false;
	}
	return true;  
}

function checkIdcard(num){   
        num = num.toUpperCase();  
        //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。   
        if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num)))   
        { 
            //alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。'); 
            return false; 
        } 
        //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。 
        //下面分别分析出生日期和校验位 
        var len, re; 
        len = num.length; 
        if (len == 15) 
        { 
            re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/); 
            var arrSplit = num.match(re);

            //检查生日日期是否正确 
            var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]); 
            var bGoodDay; 
            bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4])); 
            if (!bGoodDay) 
            { 
                //alert('输入的身份证号里出生日期不对！');   
                return false; 
            } 
            else 
            { 
                    //将15位身份证转成18位 
                    //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。 
                    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); 
                    var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'); 
                    var nTemp = 0, i;   
                    num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6); 
                    for(i = 0; i < 17; i ++) 
                    { 
                        nTemp += num.substr(i, 1) * arrInt[i]; 
                    } 
                    num += arrCh[nTemp % 11];   
                    return true;   
            }   
        } 
        if (len == 18) 
        { 
            re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/); 
            var arrSplit = num.match(re);

            //检查生日日期是否正确 
            var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]); 
            var bGoodDay; 
            bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4])); 
            if (!bGoodDay) 
            { 
                //alert(dtmBirth.getYear()); 
                //alert(arrSplit[2]); 
                //alert('输入的身份证号里出生日期不对！'); 
                return false; 
            } 
        else 
        { 
            //检验18位身份证的校验码是否正确。 
            //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。 
            var valnum; 
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); 
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'); 
            var nTemp = 0, i; 
            for(i = 0; i < 17; i ++) 
            { 
                nTemp += num.substr(i, 1) * arrInt[i]; 
            } 
            valnum = arrCh[nTemp % 11]; 
            if (valnum != num.substr(17, 1)) 
            { 
                //alert('18位身份证的校验码不正确！应该为：' + valnum); 
                return false; 
            } 
            return true; 
        } 
        } 
        return false; 
}  

function isUrl(str){
	var RegUrl = new RegExp(); 
	RegUrl.compile("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$");
	if (!RegUrl.test(str)) { 
	return false; 
	} 
	return true; 	
}

function getDomNode(nodeData){//获取节点对象列表
	/*
	 *nodeData:节点对象
	*/
	var html='';
	for(var item in nodeData){
		html+=item+'<br>';
	}
	return html;
}

function shareWeibo(type, title, url, pic){//分享微博
	/*
	 *type:选择平台
	 *title:分享标题
	 *url:分享url
	 *pic:分享图片地址
	*/
	switch (type) {
		case 'sina' :
			var linkstr = "http://v.t.sina.com.cn/share/share.php?"
			if (title) linkstr += "title=" + title + "&";
			if (url) linkstr += "url=" + url + "&";
			if (pic) linkstr += "pic=" + pic;
			//window.location = linkstr;
			window.open(linkstr);
			break;
		case "tencent" :
			
			break;
		case "renren" :
			
			break;
	}
}

function getPass(len){//获取随机字母字符串
	/*
	 *len:生成字符串长度
	*/
	var tmpCh = "";
	for(var i = 0; i < len; i++){
		if(Math.floor( Math.random() * 2)==0){
			tmpCh += String.fromCharCode(Math.floor( Math.random() * 26) + "a".charCodeAt(0));
		}else if(Math.floor( Math.random() * 2)==0){
			tmpCh += String.fromCharCode(Math.floor( Math.random() * 26) + "A".charCodeAt(0));
		}else{
			tmpCh += String.fromCharCode(Math.floor( Math.random() * 10) + "0".charCodeAt(0));
		}
	}
	return tmpCh;
}

function removeEventHandlers(e){
	touchBox=document.getElementById(e);
	try{
		touchBox.removeEventListener("touchstart", function(){}, false);
		touchBox.removeEventListener("touchmove", function(){}, false);
		touchBox.removeEventListener("touchend", function(){}, false);
		touchBox.removeEventListener("onmousedown", function(){}, false);
		touchBox.removeEventListener("onmousemove", function(){}, false);
		touchBox.removeEventListener("onmouseup", function(){}, false);
	}catch(e){}
	
}

function AddEventHandlers(values){//节点加载touch方法
	/*
	 *node:对象ID
	 *tyle:0(输出屏幕坐标),1(相对节点坐标)
	 *clickEvent:on/off,是否支持click事件
	 *eventStart:touchstart时执行方法,参数返回回调触摸缓存坐标
	 *eventMove:touchmove时执行方法,参数返回回调触摸缓存坐标
	 *eventEnd:touchend时执行方法,参数返回触摸缓存坐标
	 *lockEvent:是否锁定事件on/off默认锁定
	*/
	
	if(!values.node){
		return false;
	}
	
	if(!values.type){
		values.type=0;
	}
	
	if(!values.clickEvent){
		values.clickEvent=='off';
	}
	if(navigator.platform.indexOf('Win32')!=-1 || navigator.platform.indexOf('Win64')!=-1 || navigator.platform.indexOf('Mac')!=-1){ 
		//go to pc 
		values.clickEvent='on';
	}else{ 
		// go to 手机
		values.clickEvent='off';
	} 
	
	if(!values.eventStart){
		values.eventStart=void(0);
	}
	
	if(!values.eventMove){
		values.eventMove=void(0);
	}
	
	if(!values.eventEnd){
		values.eventEnd=void(0);
	}
	
	if(!values.lockEvent){
		values.lockEvent='on';
	}
	
	touchBox=document.getElementById(values.node);
	var ctxOffsetTop=0;
	var ctxOffsetLeft=0;
	
	if(values.type==1){
		ctxOffsetLeft=touchBox.offsetLeft;
		ctxOffsetTop=touchBox.offsetTop;
	}
	
	
	
	function getX(obj){  
        var parObj=obj;    
        var left=obj.offsetLeft;    
        while(parObj=parObj.offsetParent){    
            left+=parObj.offsetLeft;    
        }    
        return left;    
    }    
    
    function getY(obj){    
        var parObj=obj;    
        var top=obj.offsetTop;    
        while(parObj = parObj.offsetParent){    
            top+=parObj.offsetTop;    
        }    
    	return top;    
    }   
	
	function getScrollTop(){
		var scrollTop=0;
		if(document.documentElement&&document.documentElement.scrollTop)
		{
			scrollTop=document.documentElement.scrollTop;
		}
		else if(document.body)
		{
			scrollTop=document.body.scrollTop;
		}
		return scrollTop;
	} 
	
	function getScrollLeft(){
		var scrollLeft=0;
		if(document.documentElement&&document.documentElement.scrollLeft)
		{
			scrollLeft=document.documentElement.scrollLeft;
		}
		else if(document.body)
		{
			scrollLeft=document.body.scrollLeft;
		}
		return scrollLeft;
	} 
	
	//坐标动作缓存返回给回调函数
	var touchCoordinate={
		mouseDownX:-1,//开始X坐标
		mouseDownY:-1,//开始Y坐标
		mouseHisX:-1,//touchmove上一次历史X坐标
		mouseHisY:-1,//touchmove上一次历史Y坐标
		mouseUpX:-1,//touchmove X坐标
		mouseUpY:-1,//touchmove Y坐标
		mouseState:0,//0up,1:down
		id:values.node//返回节点id
	}
	
	//加载触摸事件
	
	try{
		touchBox.addEventListener("touchstart", touchStart, false);
		touchBox.addEventListener("touchmove", touchMove, false);
		touchBox.addEventListener("touchend", touchEnd, false);
	}catch(e){}
	
	function touchStart(event){
		
		try{
			touchCoordinate.mouseDownX = event.targetTouches[0].pageX-ctxOffsetLeft;
			touchCoordinate.mouseDownY = event.targetTouches[0].pageY-ctxOffsetTop;
			touchCoordinate.mouseHisX=touchCoordinate.mouseDownX;
			touchCoordinate.mouseHisY=touchCoordinate.mouseDownY;
			touchCoordinate.mouseUpX=touchCoordinate.mouseDownX;
			touchCoordinate.mouseUpY=touchCoordinate.mouseDownY;
			values.eventStart(touchCoordinate);
			if(values.lockEvent=='on'){
				event.preventDefault();
				event.stopPropagation();
			}
		}catch(e){}
	}
	
	function touchMove(event){
		try{
			touchCoordinate.mouseHisX=touchCoordinate.mouseUpX;
			touchCoordinate.mouseHisY=touchCoordinate.mouseUpY;
			touchCoordinate.mouseUpX=event.targetTouches[0].pageX-ctxOffsetLeft;
			touchCoordinate.mouseUpY=event.targetTouches[0].pageY-ctxOffsetTop;
			touchCoordinate.mouseState=1;
			values.eventMove(touchCoordinate);
			if(values.lockEvent=='on'){
				event.preventDefault();
				event.stopPropagation();
			}
		}catch(e){}
	} 
	
	function touchEnd(event){
		try{
			touchCoordinate.mouseState=0;
			values.eventEnd(touchCoordinate);
			if(values.lockEvent=='on'){
				event.preventDefault();
				event.stopPropagation();
			}
		}catch(e){}
	}
	
	//加载点击事件
	if(navigator.userAgent.indexOf("MSIE")>0 && values.clickEvent=='on'){
		touchBox.onmousedown=function(e){
			try{
				touchCoordinate.mouseDownX = event.clientX-getX(touchBox)+getScrollLeft();
				touchCoordinate.mouseDownY = event.clientY-(getX(touchBox)-getScrollTop());
				touchCoordinate.mouseHisX=touchCoordinate.mouseDownX;
				touchCoordinate.mouseHisY=touchCoordinate.mouseDownY;
				touchCoordinate.mouseUpX=touchCoordinate.mouseDownX;
				touchCoordinate.mouseUpY=touchCoordinate.mouseDownY;
				touchCoordinate.mouseState=1;
				values.eventStart(touchCoordinate);
			}catch(e){}
		}
		
		
		
		touchBox.onmousemove=function(e){
			try{
				
				if(touchCoordinate.mouseState==1){
					touchCoordinate.mouseHisX=touchCoordinate.mouseUpX;
					touchCoordinate.mouseHisY=touchCoordinate.mouseUpY;
					touchCoordinate.mouseUpX=event.clientX-getX(touchBox)+getScrollLeft();
					touchCoordinate.mouseUpY=event.clientY-(getY(touchBox)-getScrollTop());
					values.eventMove(touchCoordinate);
				}
			}catch(e){}
		}
	}else if(values.clickEvent=='on'){
		touchBox.onmousedown=function(event){
			try{
				
				touchCoordinate.mouseDownX = event.clientX-getX(touchBox)+getScrollLeft();
				touchCoordinate.mouseDownY = event.clientY-(getY(touchBox)-getScrollTop());
				touchCoordinate.mouseHisX=touchCoordinate.mouseDownX;
				touchCoordinate.mouseHisY=touchCoordinate.mouseDownY;
				touchCoordinate.mouseUpX=touchCoordinate.mouseDownX;
				touchCoordinate.mouseUpY=touchCoordinate.mouseDownY;
				touchCoordinate.mouseState=1;
				values.eventStart(touchCoordinate);
			}catch(e){}
		}
		
		
		
		touchBox.onmousemove=function(event){
			try{
				if(touchCoordinate.mouseState==1){
					touchCoordinate.mouseHisX=touchCoordinate.mouseUpX;
					touchCoordinate.mouseHisY=touchCoordinate.mouseUpY;
					touchCoordinate.mouseUpX=event.clientX-(getX(touchBox)-getScrollLeft());
					touchCoordinate.mouseUpY=event.clientY-(getY(touchBox)-getScrollTop());
					values.eventMove(touchCoordinate);
				}
			}catch(e){}
		}
	}
	
	if(values.clickEvent=='on'){
		touchBox.onmouseup=function(){
			try{
				touchCoordinate.mouseState=0;
				values.eventEnd(touchCoordinate);
			}catch(e){}
		}
		
		touchBox.onmouseout=function(){
			touchCoordinate.mouseState=0;
			values.eventEnd(touchCoordinate);
		}
	}
		
}

function initScreen(){//设置屏幕分辨率

	var contentValue='width=device-width, initial-scale=1.0,  minimum-scale=1.0, maximum-scale=1.0, user-scalable=no';
	document.getElementsByName('viewport')[0].content=contentValue;

	var scale='1.0';
	var uiWidth=320;
	var deviceWidth=document.body.clientWidth;
	var deviceHeight=document.body.clientHeight;
	
	
	if(deviceWidth>deviceHeight){
		deviceWidth=deviceHeight;
	}
	
	//alert(uiWidth+":"+deviceWidth);
	
	try{
		if(uiWidth<deviceWidth){
			targetDensitydpi=142;
		}else{
			targetDensitydpi=160;
		}
	}catch(e){}
	
	//alert(targetDensitydpi);
	
		
	//var contentValue='width=device-width, target-densitydpi='+targetDensitydpi+' , initial-scale='+scale+',  minimum-scale='+scale+', maximum-scale='+scale+', user-scalable=no';
	//document.getElementsByName('viewport')[0].content=contentValue;
	
}

function getDomNode(nodeData){//获取节点对象列表
	/*
	 *nodeData:节点对象
	*/
	var html='';
	for(var item in nodeData){
		html+=item+'<br>';
	}
	return html;
}

function msgBox(e){
	closeMsgBox();//清除原来的msgbox
	
	var bodyObj = document.body;//页面body节点对象
	
	var htmlObj = document.getElementsByTagName("html");//页面html节点对象
		
	var msgBox = document.createElement("div");//弹出框div对象
			
	var rnd=Math.ceil(Math.random()*1000);
	
	var htmlText='<div class="msgBox" ><span>'+e+'</span></div>';//弹出框html
	
	bodyObj.appendChild(msgBox);//新建的对象加入页面
	
	msgBox.innerHTML=htmlText;
	
	msgBox.id="msg_box_by_gzy";
	
	try{
		msgBox.style.opacity=1;
	}catch(e){}
	
	setTimeout(function(){
		closeMsgBox();
	},2000);
	
}

function closeMsgBox(){
	try{
		var myObj=document.getElementById('msg_box_by_gzy');
		var bodyObj = document.body;//页面body节点对象
		bodyObj.removeChild(myObj);//删除弹出框节点
	}catch(e){}
}

function webBox(e,callBack){//弹出框
	/*
	 *e:显示的html
	 */
	 
	if(!callBack){
		callBack=function(){} 
	}
	
	closeWebBox();//清除原来的webBox
	
	changeCityState=0;//锁定更换城池
	
	var bodyObj = document.body;//页面body节点对象
	
	var htmlObj = document.getElementsByTagName("html");//页面html节点对象
	
	bodyObj.style.overflow='visible';
	
	var alertBox = document.createElement("div");//弹出框div对象
			
	var rnd=Math.ceil(Math.random()*1000);
	
	var bodyShadeById="body_shade_by_gzy"+rnd;
	
	var alertBoxInfoById="alert_box_info_by_gzy"+rnd;
	
	var closeAlertById="closeAlert_by_gzy"+rnd;
		
	//var htmlText='<div border="0" class="body_shade body_shade_bg" id="'+bodyShadeById+'" style="height:'+document.documentElement.clientHeight+'px;"></div><div class="webBox"><div class="alert_box" id="'+alertBoxInfoById+'">'+e+'</div><div class="close_alert" id="'+closeAlertById+'">×</div></div></div>';//弹出框html

	var htmlText='<div border="0" class="body_shade body_shade_bg" id="'+bodyShadeById+'" style="height:'+document.documentElement.clientHeight+'px;"></div><div class="webBox"><div class="alert_box"  id="'+alertBoxInfoById+'"><div class="text">'+e+'</div></div><div class="close_alert"  id="'+closeAlertById+'"></div></div></div>';//弹出框html
	
	if(!isIE6()){
		htmlText='<iframe border="0" class="body_shade" style="height:'+document.body.clientHeight+'px;"></iframe>'+htmlText;
	}
	
	bodyObj.appendChild(alertBox);//新建的对象加入页面
	
	alertBox.innerHTML=htmlText;
	
	//alertBox.id="alert_box_by_gzy"+rnd;
	
	alertBox.id="alert_box_by_gzy";
	
	alertBox.className="alert_box_by_gzy aleft";
	
	var alertBoxObj=document.getElementById(alertBox.id);
	
	var alertBoxInfoObj=document.getElementById(alertBoxInfoById);
	
	var closeAlertObj=document.getElementById(closeAlertById);
	
	alertBoxInfoObj.style.opacity='0';
	
	//alertBoxInfoObj.style.width='280px';
	//alertBoxInfoObj.style.marginTop=setAlertBoxTop()+"px";
	alertBoxInfoObj.style.marginTop='0';
	//alertBoxInfoObj.style.height=(getWindowHeight()*0.9)+'px';
	//alertBoxInfoObj.style.left=setAlertBoxLeft()+"px";
	//closeAlertObj.style.left=(setAlertBoxLeft()+300+12)+"px";
	//closeAlertObj.style.top=(setAlertBoxTop()+10)+"px";
	
	showOpacityBox(0,alertBoxInfoObj);
	
	//window.scrollTo(0,0);
	
	closeAlertObj.onclick=function(){
		bodyObj.removeChild(alertBoxObj);//删除弹出框节点
		callBack();
	}
	
	document.getElementById(bodyShadeById).onclick=function(){
		bodyObj.removeChild(alertBoxObj);//删除弹出框节点
		callBack();
	}
	
	function setStart(coord){
		
	}
	
	function setMove(coord){
		
	}
	
	function setEnd(coord){
		try{
			bodyObj.removeChild(alertBoxObj);//删除弹出框节点
		}catch(e){}
		callBack();
	}
	
	var values={
		node:bodyShadeById,
		type:1,
		eventStart:setStart,
		eventMove:setMove,
		eventEnd:setEnd
	}
	
	AddEventHandlers(values);
	
	function setAlertBoxTop(){
		if(alertBoxInfoObj.clientHeight>document.documentElement.clientHeight){
			setTop=30;
		}else if(isIE6()){
			if(document.body.scrollTop==0){
				sTop=document.documentElement.scrollTop;
			}else{
				sTop=document.body.scrollTop;
			}
			setTop=(document.documentElement.clientHeight-alertBoxInfoObj.clientHeight)/2*0.6+sTop;
		}else{
			setTop=(document.documentElement.clientHeight-alertBoxInfoObj.clientHeight)/2*0.6;
		}
		
		return setTop;
	}

	function setAlertBoxLeft(){
		if(320>bodyObj.clientWidth){
			setLeft=0;
		}else{
			setLeft=((bodyObj.clientWidth-320)/2)-6;
		}
		return setLeft;
	}
	
	function isIE6(){
		if(typeof document.body.style.maxHeight === "undefined") {
			return true;
		}else{
			return false;
		}
	}
	
};

function showOpacityBox(opc,boxObj){
	var myObj=boxObj;
	myObj.style.display='block';
	myObj.style.opacity=1;
	/*
	var op=opc;
	
	if(op>=1){
		return;
	}
	op+=0.05;
	
	myObj.style.opacity=op;
	
	setTimeout(function(){
		showOpacityBox(op,boxObj);
	},24);
	*/
}

function hideOpacityBox(opc,boxObj){
	var op=opc;
	var myObj=boxObj;
	if(op<=0){
		return;
	}
	op-=0.05;
	
	myObj.style.opacity=op;
	
	setTimeout(function(){
		hideOpacityBox(op,boxObj);
	},24);
}

function closeWebBox(){
	try{
		var myObj=document.getElementById('alert_box_by_gzy');
		var bodyObj = document.body;//页面body节点对象
		bodyObj.style.overflow='auto';
		bodyObj.removeChild(myObj);//删除弹出框节点
	}catch(e){}
}

function fromErrorAmi(objId){//表单震动效果
	/*
	 *objId:输入框id
	 */
	
	var myObj=document.getElementById(objId);
	
	playAnimation(0);
	
	window.location.hash=objId;
	
	function playAnimation(times){
		/*
		 *times:执行到第几次次数
		 */
		 
		if(times%2==0){
			myObj.style.marginLeft='0';
		}else{
			myObj.style.marginLeft='8px';
		}
		
		times++;
		
		if(times<=20){
			setTimeout(function(){
				playAnimation(times);
			},24);
		}
	}
}

function setSelectBox(values){//选择框
	/*
	 *selId:下拉框id
	 *showId:显示框id
	 *callBack:选择后回调程序，传递参数为选中的option对象
	 */
	
	if(!values.callBack){
		values.callBack=function(){};
	}
	 
	var selObj=document.getElementById(values.selId);
	var showObj=document.getElementById(values.showId);
	
	showObj.innerHTML=selObj.options[selObj.selectedIndex].text;
	
	selObj.onchange=function(){
		showObj.innerHTML=selObj.options[selObj.selectedIndex].text;
		values.callBack(selObj.options[selObj.selectedIndex]);
	}
	
}

function loadImg(url,callBack){//此方法现在用来加载监控代码
	/*
	 *url:图片地址
	 *callBack请求完成后回调方法
	*/
	if(!url){
		return;
	}
	
	var t;
	
	if(!callBack){
		callBack=function(){};
	}
	
	var imgObj=new Image();
	imgObj.src=url;
	
	imgObj.onload=function(){
		callBack(true,url);
	}
	
	t=setTimeout(function(){//20秒超时处理，防止图片加载失败导致没有响应
		callBack(false,url);
		imgObj.onload=null;
	},30000);
	
}

function loadImgCallBack(state,imgObj){
	if(!state){
		console.log(imgObj+'加载失败');
	}else{
		console.log(imgObj+'加载成功 ');
	}
}

function getWindowWidth(){
	// 获取窗口宽度
	var winWidth;
	if (window.innerWidth){
		winWidth = window.innerWidth;
	}else if ((document.body) && (document.body.clientWidth)){
		winWidth = document.body.clientWidth;
	}
	return winWidth;
}

function getWindowHeight(){
	// 获取窗口高度
	var winHeight;
	if (window.innerHeight){
		winHeight = window.innerHeight;
	}else if ((document.body) && (document.body.clientHeight)){
		winHeight = document.body.clientHeight;
	}
	return winHeight;
}


function focusImgChange(values){//焦点图切换
/*
 *必须加载command.js
 *boxId:焦点图容器id
 *imgList:焦点图地址数组列表
 *pageLink:点击焦点图后的链接地址数组
 *timer:切换时间
 *btn:on/off,是否显示切换按钮
 *focusBtnClass:当前图片按钮样式名
 *btnClass:按钮样式名
 *width:设置焦点图宽度，为空则设置其宽度为适应屏幕宽度
 *height:设置焦点图高度，为空则设置其宽度为适应屏幕高度
 *btnBoxClass:设置按钮容器样式
*/
	var t;//切换时间计时
	var focusPic=0;//当前图片
	var focusId='focus'+values.boxId;
	var focusImgId='focus_img'+values.boxId;
	var focusBtnId='focus_btn'+values.boxId;
	var focusImgObj;
	var focusBtnObj;
	
	var winWidth=getWindowWidth();
	var winHeight=getWindowHeight();
	
	function init(){//初始化
		if(!values.width){
			values.width=winWidth;
		}

		if(!values.height){
			values.height=winHeight;
		}
		
		if(!values.timer){
			values.timer=5000;
		}
		
		if(!values.btnBoxClass){
			values.btnBoxClass='style="position:absolute;z-index:10; bottom:0; left:0; width:'+values.width+'px;"';
		}else{
			values.btnBoxClass='class="'+values.btnBoxClass+'"';
		}
	
		var html='<div style="width:'+values.width+'px;height:'+values.height+'px;margin:auto;position:relative;overflow:hidden;" id="'+focusId+'"><ul id="'+focusImgId+'" style="width:'+(values.width*values.imgList.length)+'px;height='+values.height+'px;position:absolute;left:0;top:0;">';
		
		for(var i=0;i<values.imgList.length;i++){
			//html+='<li style="z-index:1; float:left;width:'+values.width+'px;"><a href="'+values.pageLink[i]+'"><img src="'+values.imgList[i]+'" width="'+values.width+'px" height="'+values.height+'px"  /></a></li>';
			html+='<li style="z-index:1; float:left;width:'+values.width+'px;"><img src="'+values.imgList[i]+'" width="'+values.width+'px" height="'+values.height+'px"  /></li>';
		}
		
		html+='</ul>';
		
		
		
		html+='</div>';
		
		if(values.btn=='on'){
			html+='<ul id="'+focusBtnId+'" '+values.btnBoxClass+'>';
			var btnW=values.width/values.imgList.length;
			for(var i=0;i<values.imgList.length;i++){
				if(i==0){
					html+='<li style="float:left;" value="'+i+'" class="'+values.focusBtnClass+'"></li>';
				}else{
					html+='<li style="float:left;" value="'+i+'" class="'+values.btnClass+'"></li>';
				}
			}
			html+='</ul>';
		}
		
		document.getElementById(values.boxId).innerHTML=html;
		
		focusImgObj=document.getElementById(focusImgId);
		
		
		if(values.btn=='on'){
			focusBtnObj=document.getElementById(focusBtnId);
			for(i=0;i<values.imgList.length;i++){
				focusBtnObj.getElementsByTagName("li")[i].onclick=function(){
					focusClick(this.value);
				}
			}
		}
		
		var touchValue={
			node:focusImgId,
			type:1,
			clickEvent:'off',
			eventStart:setStart,
			eventMove:setMove,
			eventEnd:setEnd,
			lockEvent:'on'
		}
	
		AddEventHandlers(touchValue);
		
		focusGo();
		
	}
	
	function focusGo(){
		clearTimeout(t);
		if(focusPic>(values.imgList.length-1)){
			focusPic=0;
		}
		if(focusPic<0){
			focusPic=values.imgList.length-1;
		}
		
		if(values.btn=='on'){
			for(i=0;i<values.imgList.length;i++){
				focusBtnObj.getElementsByTagName("li")[i].className=values.btnClass;
			}
			
			focusBtnObj.getElementsByTagName("li")[focusPic].className=values.focusBtnClass;
		}
		
		focusImgObj.style.webkitTransition='all 500ms ease-in-out';
		focusImgObj.style.transition='all 500ms ease-in-out';
		focusImgObj.style.left=(focusPic*(-values.width))+'px';
		
		focusPic++;
		
		t=setTimeout(function(){
			focusGo();
		},values.timer);
		
	}
	
	function focusClick(clickPic){
		clearTimeout(t);
		focusPic=clickPic;
		focusGo();
	}
	
	/*手机touch事件处理*/
	function setStart(e){
		clearTimeout(t);
	}
	
	function setMove(e){
		focusImgObj.style.webkitTransition='';
		focusImgObj.style.transition='';
		focusImgObj.style.left=((focusPic-1)*(-values.width)-(e.mouseDownX-e.mouseUpX))+'px';
		
	}
	
	function setEnd(e){
		
		if(e.mouseDownX-e.mouseUpX>-10 && e.mouseDownX-e.mouseUpX<10){
			try{
				values.pageLink[focusPic-1](values.imgList[focusPic-1]);
			}catch(e){}
		}
		
		if(e.mouseDownX-e.mouseUpX>100){
			if(focusPic>(values.imgList.length-1)){
				focusPic--;
			}
			focusGo();
		}else if(e.mouseDownX-e.mouseUpX<-100){
			
			if(focusPic>1){
				focusPic-=2;
			}else{
				focusPic=0;
			}
			focusGo();
		}else{
			if(focusPic>0){
				focusPic--;
			}
			focusGo();
		}
	}

	
	init();
	
}

function html5Reader(file){
     var file = file.files[0];
     var reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onload = function(e){
         var pic = document.getElementById("preview");
         pic.src=this.result;
     }
}
 

function addFavorite(sURL, sTitle){
	try{ window.external.addFavorite(sURL, sTitle);}
		catch (e){
			try{window.sidebar.addPanel(sTitle, sURL, "");}
			catch (e)
				{alert("加入收藏失败，请使用Ctrl+D进行添加");}
		}
}

function shareWeixin(){
	var shareImg='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAAByCAYAAADEWZTVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE0QTk2MzgzRTU2RjExRTM5RTQ1QjgxOUEyRTU2NjdGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE0QTk2Mzg0RTU2RjExRTM5RTQ1QjgxOUEyRTU2NjdGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTRBOTYzODFFNTZGMTFFMzlFNDVCODE5QTJFNTY2N0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTRBOTYzODJFNTZGMTFFMzlFNDVCODE5QTJFNTY2N0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz530a++AAAUA0lEQVR42uxda4g8y1Wv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';
	
	var bodyObj = document.body;//页面body节点对象
	var loadingBox = document.createElement("div");//Loading对象
	bodyObj.appendChild(loadingBox);//新建的对象加入页面
	loadingBox.innerHTML='<div style="position: fixed;top:5px;right:10px; "><img src="'+shareImg+'" /></div>';
	loadingBox.id="loadingBox_by_gzy_weixin";
	loadingBox.style.zIndex='9999999';
	loadingBox.className="loadingBox";
	loadingBox.style.height=document.documentElement.clientHeight+'px';
	
	loadingBox.onclick=function(){
		closeShareWeixinBox();
	}

	function closeShareWeixinBox(){
		bodyObj.removeChild(loadingBox);
	}
	
}



function pageError(){
	
}
