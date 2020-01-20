function PicData(){

	var cbFunc_allCom=function(){};
	var cbFunc_oneCom=function(){};
	var curInd=0;
	var picUrlArr = new Array();

	

	this.loadPicArr = function(arr,allCom,oneCom){
	
	
		picUrlArr = arr;
		if(allCom){
			cbFunc_allCom = allCom;
		}
		if(oneCom){
			cbFunc_oneCom = oneCom;
		}

		loadPicOne(picUrlArr[curInd]);
		



	}
	function loadPicOne(url){
		
		var img = new Image();
		img.onload = loadHandler;
		//img.src = "imgs/"+url+"?r"+Math.random();	
		img.src = "./img/MAIN/2015/05/115577/images/"+url;
		
		
	}

	function loadHandler(){
		cbFunc_oneCom(curInd);
		curInd++;
		
		if(curInd<picUrlArr.length)
		{			
			loadPicOne(picUrlArr[curInd])
		}
		else
		{			
			cbFunc_allCom();
		}
	}		
}