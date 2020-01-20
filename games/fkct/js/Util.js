function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days *1 ));//24 * 60 * 60 * 1000
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function getNElementFromArray(array, n) {
    var nArray = [], j;
    var originalArray = array;
    if (n > 0) {
        for (var i = 0; i < n; ) {
            j = Math.floor(Math.random() * (array.length));
            if ($.inArray(array[j], nArray) < 0) {
                nArray.push(array[j]);
                i++;
            }
        }
    }
    return nArray;
}
function is_touch_device() {  
  return !!('ontouchstart' in window) // works on most browsers 
      || !!('onmsgesturechange' in window); // works on ie10 
}
function is_ie_mobile() {
	return !!(window.navigator.msPointerEnabled);
}

function detectWeixinApi(callback){
    if(typeof window.WeixinJSBridge == 'undefined' || typeof window.WeixinJSBridge.invoke == 'undefined'){
        setTimeout(function(){
            detectWeixinApi(callback);
        },200);
    }else{
        callback();
    }
}
function stopBubble(e) {
        if ( e && e.stopPropagation ) {
            e.stopPropagation();
         }
        else {
            window.event.cancelBubble = true;
        }
}
function copyToClipboard(txt) {
	//IE 
	if(window.clipboardData)  
	{
		window.clipboardData.clearData();  
		window.clipboardData.setData("Text", txt);  
	}  
	else  
	{  
		window.prompt("您可以复制以下游戏地址", txt);  
	}  
 
} 
function getURLParameter($param) {  
  	var $url = location.search;
    var reg = "/^.*[\\?|\\&]" + $param + "\\=([^\\&]*)/";  
    reg = eval(reg);  
      
    var ret = $url.match(reg);  
    if (ret != null) {  
        return ret[1];  
    } else {  
        return "";  
    }     
} 