$("span").append("<div></div>")
var count_max = 0;
$(".btn1").click(function() {
	$(".fm").hide();
	test_show();
});
$(".return").click(function() {
	test_show();
});

function test_show() {



	playMusic("./img/MAIN/2015/05/115577/1792.mp3");
	var num = [];
	var count = 0;
	var time = 1500;

	var test_num = 0;

	function test(id) {
		clearTimeout(timeOut);
		var Did = $(id);
		var list = [];
		$(".js").animate({
			"left": "0"
		});
		$(".fd_con").animate({
			"left": "640px"
		});

		var arr = [];
		var arr_a = [];
		for (var i = 0; i < Did.length; i++) {
			arr[i] = i;
		};
		arr_a = arr.sort(function() {
			return Math.random() > 0.5 ? -1 : 1;
		})

		for (var j = 0; j < 5; j++) {
			//var Ntime=j*2;

			list += "<li><p class='p_a'>" + Number((j + 1) + 5 * test_num) + "/20</p>" + Did.eq(arr_a[j]).html() + "" + "</li>";
		};
		test_num++;
		return list;
	}

	$(".js_a").html(test(".list1 li") + test(".list2 li") + test(".list3 li") + test(".list4 li"));
	$(".js_a li").hide();
	var c = 0;
	$(".js_a li").eq(0).show();
	var t = setTimeout(timedCount(c), 1000);

	function timedCount(c) {
		$(".p_b").html(c + "秒");
		c = c + 1;
	}
	var timeOut = setTimeout(function() {
		stoppage()
	}, 2000);
	$(".js_a li").eq(0).find('span div').animate({
			"width": 0,
			"margin-left": 0
		},
		2000);

	function stoppage() {

		clearTimeout(timeOut);
		clearTimeout(t);
		$(".js").animate({
			"left": -640
		});
		$(".fd_con").animate({
			"left": 0
		});
		$(".p_b").html("0秒");
		mySound.stop();
		var score = count * 2;
		//updateShare(shareDesc);
		//Play68.setRankingScoreDesc(score);
		console.log(score);
	}
	$(".js_a li span em").click(function(event) {

		var result = eval($(this).parent().parent().find('i').html());
		if ($(this).html() == result) {
			clearTimeout(timeOut);
			var n = ($(this).parent().parent().index() + 1) * 2;
			var t1 = setInterval(timedCount(n), 1000);
			$(this).parent().parent().next().show();

			if (count > 15) {
				timeOut = setTimeout(function() {
					stoppage()
				}, 1500);
				$(this).parent().parent().next().find('span div').animate({
					"width": 0,
					"margin-left": 0
				}, 1500);
			} else {
				timeOut = setTimeout(function() {
					stoppage()
				}, 2000);
				$(this).parent().parent().next().find('span div').animate({
					"width": 0,
					"margin-left": 0
				}, 2000);
			}
			count++;


		} else {
			$(".js").animate({
				"left": -640
			});
			$(".fd_con").animate({
				"left": 0
			});
			mySound.stop();
			$(".p_b").html("0秒");
			clearTimeout(timeOut);
			clearTimeout(t);
			stoppage();
		}

		countAnd(count);
	});
}

function countAnd(count) {
	if (count >= 0 && count <= 5) {
		$(".fd_con .pl").html("<p>我答对了<i>" + count + "</i>题&nbsp;坚持了<i>" + count * 2 + "</i>秒</p><h1><img src='./img/MAIN/2015/05/115577/images/t1.png' /></h1>");
		$(".plb").addClass('bad');
		shareDesc = "我撑过了" + count * 2 + "秒，我的数学是体育老师教的……";
	}
	if (count > 5 && count <= 10) {
		$(".fd_con .pl").html("<p>我答对了<i>" + count + "</i>题&nbsp;坚持了<i>" + count * 2 + "</i>秒</p><h1><img src='./img/MAIN/2015/05/115577/images/t2.png' /></h1>");
		$(".plb").addClass('bad');
		shareDesc = "我撑过了" + count * 2 + "秒，老师我对不起你……跪！！";

	}
	if (count > 10 && count <= 15) {
		$(".fd_con .pl").html("<p>我答对了<i>" + count + "</i>题&nbsp;坚持了<i>" + count * 2 + "</i>秒</p><h1><img src='./img/MAIN/2015/05/115577/images/t3.png' /></h1>");
		$(".plb").removeClass('bad');
		shareDesc = "我撑过了" + count * 2 + "秒，妈妈再也不用担心我的学习啦！";
	}
	if (count > 15 && count <= 20) {
		$(".fd_con .pl").html("<p>我答对了<i>" + count + "</i>题&nbsp;坚持了<i>" + count * 2 + "</i>秒</p><h1 stlye='font-size:52px;line-height:100px;'><img src='./img/MAIN/2015/05/115577/images/t4.png' /></h1>");
		$(".plb").removeClass('bad');
		shareDesc = "我撑过了" + count * 2 + "秒，so easy！！！";
	}
}