			   $(function(){
				   var picdata = new PicData();
				   var picUrlArr=['btn1.png', 'btn2.png', 'cat1.png', 'cat2.png',  'fd.jpg', 't1.gif', 't1.png', 't2.gif', 't2.png', 't3.gif', 't3.png', 't4.png'];

           var curInd = 0;
            function allCom() {
                //console.log('鍔犺浇瀹屽叏閮ㄤ簡');
				//$('.abcdef').append($('#OtherDOM').html());
              	$('#mydiv').hide();  
				$(".fm").show();
               	//an_page();
            }

            function oneCom(curInd) {        
                var bl = Math.ceil((curInd + 1) / picUrlArr.length * 100) + "%";
                //console.log('鍔犺浇瀹�' + curInd + '寮犱簡', curInd, bl)
                $(".loading-num").html(bl);
                $(".loading-progress").animate({
                    width: bl
                }, 5);

            }
           picdata.loadPicArr(picUrlArr, allCom, oneCom);


        
    
    })
