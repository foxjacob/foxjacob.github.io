var Layers, btnImg, btnTapImg, goBtn, goBtnTap, header, kidney, subtitle, title;

Layers = Framer.Importer.load("imported/suprise-framer");

Layers.State_2.visible = false;

Layers.State_3.visible = false;

Layers.State_4.visible = false;

goBtn = Layers.Go_Btn;

goBtnTap = Layers.Go_Btn_Tapped;

header = Layers.Header;

subtitle = Layers.Subtitle;

title = Layers.Title;

kidney = Layers.Kidney;

goBtnTap.visible = false;

btnImg = goBtn.style.backgroundImage;

btnTapImg = goBtnTap.style.backgroundImage;

header.visible = false;

title.scale = .8;
var iID;
var iID2;
var correctImg;
var normalImg;
var wrongImg;
var dataIndex = 0;
var resultStatus = -1;
var correctCount = 0;
var errorCount = 0;
var totalCount = 0;
var totalTime = 0;
var exercises = [];
var cantocach = true;
var currentIndex = 0;

//超时后触发
function timeoutFun() {
	if (resultStatus != -1)
		return;
	var stopWatch, stopWatchY, mask, over, thunder;
	timeup = Layers.Time_Up;
	over = Layers.Game_Over;
	thunder = Layers.Thunder;
	mask = Layers.Mask;
	timeupTitle = Layers.Time_Up_Title;
	stopWatch = Layers.Icon_Stopwatch_2;
	newHighScore = Layers.New_High_Score;
	stopWatchY = stopWatch.y;
	timeupy = timeupTitle.y;
	Layers.State_3.visible = false;
	Layers.State_4.visible = true;
	
	var shareBtn = Layers.Share_Btn;
	var aginBtn_mask = Layers.Again_Btn_On_Mask;
	var againBtn = Layers.Again_Btn;
	var shareBtnTap = Layers.Share_Btn_Tapped;
	var mask = Layers.Mask;
	var fun = Layers.Fun;
	fun.html = getEndGameTips();
	fun.style = {
		textAlign : 'center',
		color : '#312118',
		fontSize : 22,
		lineHeight : 1.2
	};
	var shareBtnImg = shareBtn.style.backgroundImage;
	var shareBtnTapImg = shareBtnTap.style.backgroundImage;
	shareBtn.on(Events.TouchStart, function() {
		return this.style.backgroundImage = shareBtnTapImg;
	});
	aginBtn_mask.on(Events.TouchEnd, function() {
		realyStart();
	});
	againBtn.on(Events.TouchEnd, function() {
		realyStart();
	});
	shareBtn.on(Events.TouchEnd, function() {
		this.style.backgroundImage = shareBtnImg;
		mask.visible = true;
		mask.animate({
			properties : {
				opacity : 1
			},
			time : 0.1
		});
		fun.style.color = '#4A4A4A';
		//realyStart();
	});
	
	//超时动画
	timeupTitle.y = -200;
	stopWatch.y = -200;
	timeup.visible = true;
	mask.visible = false;
	over.visible = false;
	thunder.visible = false;
	timeupTitle.animate({
		properties : {
			y : timeupy
		},
		time : 0.1
	});
	stopWatch.animate({
		properties : {
			y : stopWatchY,
			rotationZ : 720
		},
		time : 1
	});
	
	setScores();//统计
	//againBtn.visible=false;
	//aginBtn_mask.visible=false;
	resetBottomComps();
}

function setScores(){
	Layers.Mask.style={
			backgroundColor:"#000",
			backgroundImage:""
	};
	var score1,score2,score3,newHighScore;
	score1 = Layers.Score_1;
	score2 = Layers.Score_2;
	score3 = Layers.Score_3;
	scores = [score1, score2, score3];
	newHighScore = Layers.New_High_Score_Title;
	score1.html = correctCount + '题';
	var perTime = 0;
	errorCount++;
	perTime = parseInt(totalTime/(correctCount+errorCount) / 100) /10;
	score2.html = perTime+'秒';
	score3.html = getWinPercent(correctCount)+'％的人';
	newHighScore.style = {
			fontSize : 34,
			color : '#ED6917',
	};
	newHighScore.html = getMartalName(correctCount);
	newHighScore.rotationZ = -28;
	for ( i = _l = 0, _len3 = scores.length; _l < _len3; i = ++_l) {
		score = scores[i];
		score.style = {
			textAlign : 'center',
			color : '#0DACAC',
			fontSize : 48,
			fontWeight : 'bold',
			padding : '55px 0 0'
		};
	}
	resetShareContent();
}
header.on(Events.Click, function() {
	return this.style.display = 'none';
});

subtitle.animate({
	properties : {
		scale : 1
	},
	curve : 'spring',
	curveOptions : {
		friction : 20
	}
});

$(function(e) {
	var getDatas = function() {

		$.ajax({
			url : "getExercises.json",
			type : 'GET',
			cache : false,
			dataType : 'json',
			success : function(rsp) {
				if (rsp.result == true) {
					exercises = rsp.data;
					totalCount = exercises.length;
					goBtn.on(Events.TouchStart, function() {
						return goBtn.style.backgroundImage = btnTapImg;
					});
				} else {
				}
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {
			}
		});
	};
	getDatas();
});
function resetBottomComps(){
	var upheight = "-50px";
	$("div[name='Share_Btn']").css("margin-top",upheight);
	//$("div[name='Share_Btn']").css("margin-left","-120px");
	$("div[name='Share_Btn_Tapped']").css("margin-top",upheight);
	//$("div[name='Share_Btn_Tapped']").css("margin-left","-120px");
	$("div[name='Again_Btn']").css("margin-top",upheight);
	$("div[name='Fun']").css("margin-top",upheight);
	$("div[name='Again_Btn_On_Mask']").css("margin-top",upheight);
	$("div[name='Progressbar']").css("margin-top",upheight);
	$("div[name='Icon_Stopwatch']").css("margin-top",upheight);
}
goBtn.on(Events.TouchEnd, function() {
	var hingeAnimation, startAnimation;
	subtitle.originX = 0;
	subtitle.originY = 0;
	goBtn.style.backgroundImage = btnImg;
	title.animate({
		properties : {
			y : -80
		},
		time : 0.4
	});
	kidney.animate({
		properties : {
			opacity : 0
		},
		time : 0.3
	});
	goBtn.animate({
		properties : {
			y : 2000
		},
		time : 0.6
	});
	hingeAnimation = subtitle.animate({
		properties : {
			rotationZ : 45
		},
		curve : 'spring',
		curveOptions : {
			tension : 900,
			friction : 25,
			velocity : 30
		}
	});
	hingeAnimation.on('end', function() {
		var gl1, gl2, gl3, lights, one, start, three, two;
		subtitle.animate({
			properties : {
				y : 2000
			},
			curve : 'cubic-bezier',
			time : 0.6
		});
		lights = Layers.Lights;
		one = Layers.One;
		two = Layers.Two;
		three = Layers.Three;
		start = Layers.Start;
		gl1 = Layers.Green_Light;
		gl2 = Layers.Green_Light_2;
		gl3 = Layers.Green_Light_3;
		Layers.State_2.visible = true;
		one.visible = false;
		two.visible = false;
		start.visible = false;
		gl2.visible = false;
		gl3.visible = false;
		start.scale = 0;
		setTimeout((function() {
			three.visible = false;
			two.visible = true;
			return gl2.visible = true;
		}), 1000);
		setTimeout((function() {
			gl3.visible = true;
			two.visible = false;
			return one.visible = true;
		}), 2000);
		return setTimeout((function() {
			one.visible = false;
			realyStart();
			
			
		}), 3000);
	});
	
	function realyStart() {
		// 重新设置页面背景
		$("body").css("background-color","#6C4B3A");
		// 开始了就把灯去掉
		/*for(var i = 0; i < Layers.Lights.length;i++){
			var light = Layers.Lights[i];
			light.visible = false;
		}
		Layers.Green_Light.visible = false;
		Layers.Green_Light_2.visible = false;
		Layers.Green_Light_3.visible = false;*/
		$("div[name='Lights']").hide();
		
		cantocach = true;
		errorCount = 0;
		totalCount = 0;
		resultStatus = -1;
		correctCount = 0;
		totalTime = 0;
		currentIndex = 0;
		var bar, correct, correctAnimation, correctOpt, delay, hand, i, num, op2ox, op3ox, op4ox, opox, opt, opt2, opt3, opt4, option, optoins, progress, qox, question, quizOptions, timeLtd, wrong, wrongOpts, xvar, _i, _j, _len, _len1;
		
		var shareBtn = Layers.Share_Btn;
		var aginBtn_mask = Layers.Again_Btn_On_Mask;
		var againBtn = Layers.Again_Btn;
		shareBtn.removeAllListeners(Events.TouchEnd);
		againBtn.removeAllListeners(Events.TouchEnd);
		aginBtn_mask.removeAllListeners(Events.TouchEnd);
		Layers.State_2.visible = true;
		Layers.State_1.visible = false;
		Layers.State_4.visible = false;
		Layers.State_3.visible = true;
		timeLtd = 60;
		progress = Layers.Progress;
		bar = Layers.ProgressNum;
		hand = Layers.Hand_Rotate;
		bar.html = timeLtd+'s';
		resetBottomComps();
		//开始计时
		var theTime = timeLtd * 1000;
		clearInterval(iID);
		iID = setInterval(setTime, 1000);
		function setTime() {
			theTime = theTime - 1000;
			bar.html = (theTime / 1000) + 's';
			if (theTime <= 0) {
				timeoutFun();
				clearInterval(iID);
			}
		}


		bar.style = {
			fontSize : 36,
			fontWeight : 'bold',
			color : '#fff',
			textAlign : 'right',
			lineHeight : '48px',
			padding : '0 20px 0 0'
		};
		progress.style.backgroundPosition = 'right';
		progress.width = 511;
		progress.animate({
			properties : {
				width : 0
			},
			time : timeLtd
		});
		hand.animate({
			properties : {
				rotationZ : 360
			},
			time : timeLtd
		});
		question = Layers.Question;
		num = Layers.Question_Number;
		opt = Layers.Option;
		opt2 = Layers.Option_2;
		opt3 = Layers.Option_3;
		opt4 = Layers.Option_4;
		correct = Layers.Correct_Bubble;
		wrong = Layers.Wrong_Bubble;
		correct.visible = false;
		wrong.visible = false;
		if(!correctImg)
			correctImg = correct.style.backgroundImage;
		if(!normalImg)
			normalImg = opt.style.backgroundImage;
		if(!wrongImg)
			wrongImg = wrong.style.backgroundImage;
		qox = question.x;
		opox = opt.x;
		op2ox = opt2.x;
		op3ox = opt3.x;
		op4ox = opt4.x;
		question.x = 2000;
		opt.x = 2000;
		opt2.x = 2000;
		opt3.x = 2000;
		opt4.x = 2000;
	
		num.style = {
			textAlign : 'center',
			lineHeight : '67px',
			fontSize : 36,
			fontWeight : 'bold',
			color : '#855A43'
		};

		var initQuestions = function(){
			var exercise = exercises[dataIndex];
			currentIndex++;
			dataIndex++;
			if(dataIndex>exercises.length) dataIndex = 0;
			num.html = currentIndex;
			question.html = exercise.content;
			var opts = {};
			opt.html = exercise.options[0];
			opt2.html = exercise.options[1];
			opt3.html = exercise.options[2];
			opt4.html = exercise.options[3];
			opts["opt0"] = opt;
			opts["opt1"] = opt2;
			opts["opt2"] = opt3;
			opts["opt3"] = opt4;
			wrongOpts = [];
			quizOptions = [];
			for (var i = 0; i < exercise.options.length; i++) {
				var indexStr = "opt" + i;
				if (opts[indexStr].html == exercise.answer) {
					correctOpt = opts[indexStr];
				} else {
					wrongOpts.push(opts[indexStr]);
				}
				quizOptions.push(opts[indexStr]);
			}
			
	
			for ( i = _i = 0, _len = quizOptions.length; _i < _len; i = ++_i) {
				option = quizOptions[i];
				option.style = {
					fontSize : 30,
					color : '#604333',
					padding : '42px 0 0 36px',
					backgroundImage: normalImg
				};
				option.scale = 1;
				option.removeAllListeners(Events.TouchEnd);
			}
			
				//答对触发
			correctAnimation = correctOpt.on(Events.TouchEnd, function() {
				if(!cantocach)return;
				if(currentIndex>=exercises.length)
				{	
					realyStart();
					return;
				}
				
				resultStatus = -1;
			
				this.style = {
					 backgroundImage: correctImg,
					 color: '#000'
				 };
				cantocach = false;
				setTimeout(function(){
					cantocach = true;
					initQuestions();
				},500);
				correctCount++;
	
			});
			initWrongOpts();
				
		}
		clearInterval(iID2);
		iID2 = setInterval(countTime, 1000);
		function countTime() {
			totalTime+=1000;
		}
		question.style = {
			color : '#FFF5D4',
			fontSize : 28,
			lineHeight : '43px',
			padding : '22px 20px 22px 56px'
		};
		question.animate({
			properties : {
				x : qox
			},
			curve : 'cubic-bezier',
			curveOptions : {
				friction : 20
			}
		});
		initQuestions();
		delay = 0.05;
		for ( i = _j = 0, _len1 = quizOptions.length; _j < _len1; i = ++_j) {
			option = quizOptions[i];
			xvar = [opox, op2ox, op3ox, op4ox];
			option.animate({
				properties : {
					x : xvar[i]
				},
				curveOptions : {
					friction : 20
				},
				delay : delay * (i + 1)
			});
			option.on(Events.TouchStart, function() {
				return this.animate({
					properties : {
						scale : 0.9
					},
					curveOptions : {
						friction : 20,
						tension : 800
					},
					time : 0.1
				});
			});
			option.on(Events.TouchEnd, function() {
				return this.animate({
					properties : {
						scale : 1
					},
					curveOptions : {
						friction : 20,
						tensino : 800
					},
					time : 0.1,
					delay : 0.1
				});
			});
		}
		
		
		
		//答错触发
		function initWrongOpts() {
			var _k, _len2, _results;
			_results = [];
			for ( i = _k = 0, _len2 = wrongOpts.length; _k < _len2; i = ++_k) {
				option = wrongOpts[i];
				_results.push(option.on(Events.TouchEnd, function() {
					
					if(!cantocach)return;
					var abox, againBtn, dots, fun, highScore, mask, ooy, over, sbox, score, score1, score2, score3, scores, shareBtn, shareBtnImg, shareBtnTap, shareBtnTapImg, thunder, timeup, timeupTitle, toy, _l, _len3, timeupy;
					var stopWatch, stopWatchY;
					var aginBtn_mask,newHighScore;
					this.style = {
						backgroundImage : wrongImg,
						color : '#fff'
					};
					newHighScore = Layers.New_High_Score;
					mask = Layers.Mask;
					score = Layers.Scores;
					shareBtn = Layers.Share_Btn;
					aginBtn_mask = Layers.Again_Btn_On_Mask;
					shareBtnTap = Layers.Share_Btn_Tapped;
					againBtn = Layers.Again_Btn;
					over = Layers.Game_Over;
					timeup = Layers.Time_Up;
					timeupTitle = Layers.Time_Up_Title;
					stopWatch = Layers.Icon_Stopwatch_2;
					thunder = Layers.Thunder;
					dots = Layers.Bg_Dots;
					fun = Layers.Fun;
					shareBtnImg = shareBtn.style.backgroundImage;
					shareBtnTapImg = shareBtnTap.style.backgroundImage;
					sbox = shareBtn.x;
					abox = againBtn.x;
					ooy = over.y;
					stopWatchY = stopWatch.y;
					timeupy = timeupTitle.y;
					toy = thunder.y;
					mask.opacity = 0;
					//score.scale = 0;
		
					timeupTitle.y = -200;
					stopWatch.y = -200;
					over.y = -200;
					thunder.y = -200;
					shareBtn.x = -800;
					againBtn.x = 800;
					dots.scale = 0.3;
					mask.visible = false;
					resultStatus = 0;
					setScores();
					errorCount++;//答错+1
					if (resultStatus == 0) {
						timeup.visible = false;
						over.visible = true;
					}
					shareBtnTap.visible = false;
					cantocach = false;
					setTimeout((function() {
						cantocach = true;
						Layers.State_3.visible = false;
						Layers.State_4.visible = true;

						//答错 界面变化
						if (resultStatus == 0) {
							over.animate({
								properties : {
									y : ooy
								},
								time : 0.1
							});
							thunder.animate({
								properties : {
									y : toy,
									rotationZ : 720
								},
								time : 1
							});

						}

						/*score.animate({
							properties : {
								scale : 1
							},
							time : 0.2
						});*/
						dots.animate({
							properties : {
								scale : 1
							},
							delay : 0.15,
							time : 0.2
						});
						shareBtn.animate({
							properties : {
								x : sbox
							},
							delay : 0.3,
							time : 0.4
						});
						againBtn.animate({
							properties : {
								x : abox
							},
							delay : 0.3,
							time : 0.4
						});
						newHighScore.animate({
							properties : {
								scale : 1
							},
							delay : 0.8,
							time : 0.2
						});
					}), 500);
					fun.html = getEndGameTips();
					fun.style = {
						textAlign : 'center',
						color : '#312118',
						fontSize : 22,
						lineHeight : 1.2
					};
					shareBtn.on(Events.TouchStart, function() {
						clickMore();
					});
					aginBtn_mask.on(Events.TouchEnd, function() {
						
							realyStart();
					});
					againBtn.on(Events.TouchEnd, function() {
							realyStart();
					});
					//againBtn.visible=false;
					//aginBtn_mask.visible=false;
					resetBottomComps();
					return shareBtn.on(Events.TouchEnd, function() {
						this.style.backgroundImage = shareBtnImg;
						mask.visible = true;
						mask.animate({
							properties : {
								opacity : 1
							},
							time : 0.1
						});
						$("body").css("background-color","#000");
						return fun.style.color = '#4A4A4A';
						//realyStart();
					});
				}));
			}
			return _results;
		};
		return optoins = initWrongOpts();
	};
	window.realyStart=realyStart;
}); 
