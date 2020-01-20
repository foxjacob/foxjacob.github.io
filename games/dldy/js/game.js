var BrowerObj = function () {
    this.ua = navigator.userAgent.toLowerCase(); //设置UA
    this.isInvaliBrower = !((/chrome/).test(this.ua) || (/safari/).test(this.ua) || (/mqqbrowser/).test(this.ua)); //返回true,false 是否为禁止使用浏览器
    this.isMobile = (/mobile/).test(this.ua); //是否为移动浏览器
    this.isIphone = (/iphone/).test(this.ua); //是否为IPhone手机
    this.isAndroid = (/android/).test(this.ua);
    this.isQQ = (/mqqbrowssser/).test(this.ua);
    this.isPhone = function () {
        if (brower.isPhone == false && brower.isAndroid == false) {
            return false;
        } else {
            return true;
        }
    }; //是否手机浏览
    this.InvaliBrower = function () {
        if (this.isInvaliBrower) {
        }
    };
    this.clickEventName = this.isMobile ? "touchstart" : "click";
    this.downEventName = this.isMobile ? "touchstart" : "mousedown";
    this.upEventName = this.isMobile ? "touchend" : "mouseup";
    this.moveEventName = this.isMobile ? "touchmove" : "mousemove";
    this.clickDownEventName = this.isMobile ? "touchend" : "click";
    this.outEventName = this.isMobile ? "touchcancel" : "mouseout";
}

var brower = new BrowerObj();
var loadedimg;
var imglist = new Array();
var fishList = new Array();  //正在鱼塘运行的鱼集合
var imgfilelist =
	["bg.png",
	"big_f1_l.png",
	"big_f1_r.png",
	"big_f2_l.png",
	"big_f2_r.png",
	"big_f3_l.png",
	"big_f3_r.png",
	"big_f4_l.png",
	"big_f4_r.png",
	"bubble.png",
	"close.png",
	"continue.png",
	"descript.png",
	"down.png",
	"exit.png",
	"exitgame.png",
	"gameover.png",
	"go.png",
	"hand.png",
	"hdbg2.png",
	"hdbg.png",
	"main2.png",
	"main.png",
	"no.png",
	"other_f1_l.png",
	"other_f1_r.png",
	"other_f2_l.png",
	"other_f2_r.png",
	"other_f3_l.png",
	"other_f3_r.png",
	"other_f4_l.png",
	"other_f4_r.png",
	"other_f5_l.png",
	"other_f5_r.png",
	"over.png",
	"pausedgame.png",
	"score.png",
	"shark_move_l.png",
	"shark_move_r.png",
	"shark_up_l.png",
	"shark_up_r.png",
	"small_f1_l.png",
	"small_f1_r.png",
	"small_f2_l.png",
	"small_f2_r.png",
	"small_f3_l.png",
	"small_f3_r.png",
	"small_f4_l.png",
	"small_f4_r.png",
	"small_f5_l.png",
	"small_f5_r.png",
	"small_f6_l.png",
	"small_f6_r.png",
	"startfish.png",
	"timer.png",
	"up.png",
	"victory.png",
	"water.png",
	"yes.png",
	"nums/0.png",
	"nums/1.png",
	"nums/2.png",
	"nums/3.png",
	"nums/4.png",
	"nums/5.png",
	"nums/6.png",
	"nums/7.png",
	"nums/8.png",
	"nums/9.png",
	"main3.png",
	"main4.png",
    "startfish.jpg"];
var context;
var loaded = 0;
var poolright = 300; //池潭右边界
var poolleft = -80;  //池潭左边界
var height = brower.isIphone == true ? 170 : 220;     //池潭深度
var timer = brower.isIphone == true ? 30 : 60;      //刷新频率
var score = 0;       //得分成绩
var isStop = false; //是否游戏结束
var bubbleplaynum = 0; //水泡播放进度
var OneLoad = 1; //是否第一次加载页面

//鱼对象
var fishObj = function (id, imgid, speed, direction, sizeindex, x, y, w, h, status, weight) {
    this.id = id;
    this.imgid = imgid;
    this.speed = speed;
    this.direction = direction;
    this.sizeindex = sizeindex;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.status = status;
    this.weight = weight;
}

//玩家对象
var MainObj = function () {
    this.direction = 2;
    this.status = -1;
    this.x = 130;
    this.y = 80;
    this.defaultY = 80;
    this.speed = brower.isIphone == true ? 100 : 105;
    this.lese = 0;
    this.isShark = 0;
}

//鲨鱼
var SharkObj = function () {
    this.flag = 0;
    this.direction = 1;
    this.speed = 4;
    this.x = 30;
    this.y = 180;
    this.w = 30;
    this.h = 20;
    this.status = 0;
    this.playnum = 10;
}

var mainObj = new MainObj();
var sharkObj = new SharkObj();
brower.InvaliBrower();

$(document).ready(function (e) {
    setInterval(function () { window.scrollTo(0, 2); }, 500);

    context = document.getElementById("mycanvas");
    if (context.getContext) {
        context = context.getContext("2d");
	loadedimg = new Image();
	loadedimg.src = 'img/load.png';
        loadedimg.onload=drawLoaded;        
        loadImages();
    } else {
        alert("is Not");
    }
});

//点击钓鱼事件
function Start(e) {
    e.preventDefault();
    var x = 0;
    var x_2 = 0;
    var y_2 = 0;

    if (window.innerWidth > 320) {
        if (brower.isIphone == false && brower.isMobile == false) {
            x_2 = e.clientX;
            y_2 = parseInt(event.clientY);
        } else {
            x_2 = event.touches[0].clientX;
            y_2 = parseInt(event.touches[0].clientY);
        }
        x = x_2 - parseInt((window.innerWidth - 320) / 2);
    } else {
        if (brower.isIphone == false && brower.isMobile == false) {
            x_2 = parseInt(event.clientX);
            y_2 = parseInt(event.clientY);
        } else {
            x_2 = parseInt(event.touches[0].clientX);
            y_2 = parseInt(event.touches[0].clientY);
        }
        x = x_2;
    }

    var need_y1 = 0;
    var need_y2 = 40;
    var need_x1 = 260;
    var need_x2 = 300;
    if(brower.isQQ==true){
        need_y1 = -30;
        need_y2 = 30;
        need_x1 = 290;
        need_x2 = 340;
    }

    if (x >= need_x1 && x <= need_x2 && y_2 >= need_y1 && y_2 <= need_y2) {
        jQuery("#mycanvas").unbind(brower.clickEventName);
        drawMsg(35);
    } else if (mainObj.status == -1 && mainObj.y == mainObj.defaultY) {
        if (x <= 75) {
            mainObj.direction = 0;
            mainObj.x = 50;
        }
        if (x > 75 && x <= 125) {
            mainObj.direction = 1;
            mainObj.x = 90;
        }
        if (x > 125 && x <= 170) {
            mainObj.direction = 2;
            mainObj.x = 130;
        }
        if (x > 170 && x <= 210) {
            mainObj.direction = 3;
            mainObj.x = 180;
        }
        if (x > 210) {
            mainObj.direction = 4;
            mainObj.x = 200;
        }
        mainObj.status = 0;
    }
}

//加载图片
function loadImages() {
    var imgOnload = function () {
        this.onload = null;
        ld++;
        loaded = ld;
    }

    for (var i = 0, ld = 0; i < imgfilelist.length; i++) {
        var img = new Image();
        img.onload = imgOnload;
        img.src = "img/" + imgfilelist[i];
        if (img.complete) {
            img.onload();
        }
        imglist.push(img);
    }
}

//玩家钓鱼动作
function MainTimer() {
    var sx = mainObj.status > 0 ? mainObj.status * 46 : 0;
    if (mainObj.status == 3) {
        mainObj.y = parseInt(mainObj.y - ((mainObj.speed) * timer) / 100);
        if (mainObj.lese == 1) {
            if (mainObj.direction < 3)
                context.drawImage(imglist[32], 0, 0, 280, 226, mainObj.x - 16, mainObj.y + 15, 50, 50);
            else
                context.drawImage(imglist[33], 0, 0, 280, 226, mainObj.x, mainObj.y + 15, 50, 50);
        }

        if (mainObj.y <= mainObj.defaultY) {
            mainObj.y = mainObj.defaultY;
            mainObj.status = -1;
            if (mainObj.lese == 1) {
                mainObj.lese = 0;
                score - 2 < 0 ? score = 0 : score -= 2;
            }
            else {
                if (fishList.length > 0) {
                    for (var i = 0; i < fishList.length; i++) {
                        if (fishList[i].status == 1) {
                            switch (fishList[i].sizeindex) {
                                case -1: { score += 3; break; }
                                case 0: { score += 1; break; }
                                case 1: { score += 5; break; }
                            }
                            fishList.splice(i, 1); //成功吊到了一只鱼
                        }
                    }
                }
            }
        }
    }
    if (mainObj.status == 0) {
        mainObj.y = parseInt(mainObj.y + ((mainObj.speed - 90) * timer) / 100);
        //钓到鱼了
        if (fishList.length > 0) {
            for (var i = 0; i < fishList.length; i++) {
                if ((mainObj.x + 15 >= fishList[i].x) && (mainObj.x + 15 <= fishList[i].x + fishList[i].w) && (mainObj.y + 10 >= fishList[i].y && mainObj.y + 10 <= fishList[i].y + fishList[i].h)) {
                    fishList[i].status = 1;
                    mainObj.status = mainObj.status + 1;
                    break;
                }
            }
        }
        if (mainObj.y >= height + 260) {
            mainObj.y = height + 260;
            mainObj.status = 3;
            mainObj.lese = 1;
        }


        //钓到鲨鱼
        if (((sharkObj.x >= mainObj.x && sharkObj.x <= mainObj.x + 46) || ((sharkObj.x + sharkObj.w >= mainObj.x) && (sharkObj.x + sharkObj.w <= mainObj.x + 46))) && ((sharkObj.y >= mainObj.y && sharkObj.y <= mainObj.y + 46) || sharkObj.y + sharkObj.h >= mainObj.y) && (sharkObj.y + sharkObj.h <= mainObj.y + 46)) {
            sharkObj.status = 1;
            if (sharkObj.x > 150) {
                sharkObj.flag = 3;
            } else {
                sharkObj.flag = 1;
            }
            mainObj.isShark = 1;
            mainObj.status = 3;
        }

    } else if (mainObj.status > 0 && mainObj.status < 3) {
        mainObj.status = mainObj.status + 1;
    }

    context.beginPath();
    var qx;
    switch (mainObj.direction) {
        case 0: { qx = 65; break; }
        case 1: { qx = 107; break; }
        case 2: { qx = 150; break; }
        case 3: { qx = 195; break; }
        case 4: { qx = 220; break; }
    }
    context.moveTo(qx, 0);
    context.lineTo(mainObj.x + 18, mainObj.y);
    context.globalAlpha = 1;
    context.lineWidth = 1;
    context.stroke();
    context.closePath();
    context.drawImage(imglist[18], sx, 0, 46, 48, mainObj.x, mainObj.y, 35, 35);
}

//总贞定时器
function runTimer() {
    if (isStop == false) {
        context.clearRect(0, 0, 320, 500);
        context.drawImage(imglist[0], 0, 0, 480, 800, 0, 0, 320, 600); //画背景
        context.drawImage(imglist[12], 0, 0, 152, 226, 0, 0, 105, 170); //画说明面板
        context.drawImage(imglist[55], 0, 0, 30, 34, 37, 145, 20, 22); //说明面板收缩箭头
        context.drawImage(imglist[36], 0, 0, 144, 191, 220, -10, 100, 120); //画分数面板
        context.drawImage(imglist[55], 0, 0, 30, 34, 268, 85, 20, 22); //分数面板收缩箭头

        if (mainObj.isShark > 0) {
            context.drawImage(imglist[70], mainObj.isShark == 1 ? 430 : 0, 0, 300, 261, 90, -30, 200, 200);
            mainObj.isShark++;
        } else if (mainObj.lese == 1) {
            context.drawImage(imglist[69], 300 * mainObj.direction, 0, 300, 290, 50, -30, 200, 200); //画玩家人物 钓到臭鞋
        } else {
            context.drawImage(imglist[22], 300 * mainObj.direction, 0, 300, 290, 50, -30, 200, 200); //画玩家人物 钓到鱼
        }

        //如果池潭鱼的数量小于3只  增加新的鱼
        if (fishList.length < 3) {
            newFish();
        }
        var op_x;
        var op_y;
        for (var i = 0; i < fishList.length; i++) {
            //判断是否被抓到了
            if (fishList[i].status == 1) {
                switch (fishList[i].id) {
                    case 1: { fishList[i].y = mainObj.y + 5; break; }
                    case 2: { fishList[i].y = mainObj.y + 4; break; }
                    case 3: { fishList[i].y = mainObj.y; break; }
                    case 4: { fishList[i].y = mainObj.y; break; }
                    case 5: { fishList[i].y = mainObj.y + 12; break; }
                    case 6: { fishList[i].y = mainObj.y + 10; break; }
                    case 7: { fishList[i].y = mainObj.y; break; }
                    case 8: { fishList[i].y = mainObj.y + 10; break; }
                    case 9: { fishList[i].y = mainObj.y + 5; break; }
                    case 10: { fishList[i].y = mainObj.y + 10; break; }
                    case 11: { fishList[i].y = mainObj.y; break; }
                    case 12: { fishList[i].y = mainObj.y + 10; break; }
                }
                fishList[i].x = fishList[i].w > 46 ? mainObj.x - (fishList[i].w - 46) : mainObj.x + 5;
                context.drawImage(imglist[fishList[i].imgid], 0, 0, 280, 226, fishList[i].x, fishList[i].y, fishList[i].w, fishList[i].h);
            } else {
                if (fishList[i].direction == 1) {
                    if (fishList[i].x >= poolright) {
                        context.drawImage(imglist[fishList[i].imgid], 0, 0, 280, 226, fishList[i].x, fishList[i].y, fishList[i].w, fishList[i].h);
                        fishList.splice(i, 1); //游到目标点了
                    } else {
                        fishList[i].x = (fishList[i].x + ((fishList[i].speed * timer) / 100) * 4);
                        context.drawImage(imglist[fishList[i].imgid], 0, 0, 280, 226, fishList[i].x, fishList[i].y, fishList[i].w, fishList[i].h);
                    }
                } else {
                    if (fishList[i].x <= poolleft) {
                        context.drawImage(imglist[fishList[i].imgid], 0, 0, 280, 226, fishList[i].x, fishList[i].y, fishList[i].w, fishList[i].h);
                        fishList.splice(i, 1); //游到目标点了
                    } else {
                        fishList[i].x = (fishList[i].x - ((fishList[i].speed * timer) / 100) * 4);
                        context.drawImage(imglist[fishList[i].imgid], 0, 0, 280, 226, fishList[i].x, fishList[i].y, fishList[i].w, fishList[i].h);
                    }
                }
            }
        }
        if (mainObj.isShark == 0) {
            MainTimer();
        }
        drawBubble();
        if (brower.isIphone == true)
            context.drawImage(imglist[19], 0, 0, 480, 263, 0, 178, 320, 240);
        else
            context.drawImage(imglist[19], 0, 0, 480, 263, 0, 260, 320, 240);
        sharkTimer();
        drawScore(); //画分数
        context.drawImage(imglist[35], 0, 0, 60, 79, 280, 0, 35, 35);
        if (score >= 200) {
            drawMsg(56);
			Gamehub.Score.submitHide(score); //加分
            //Gamehub.Score.submit(score); //加分
        }
    }
    setTimeout("runTimer()", timer);
}

//新出一条鱼
function newFish() {
    var fish; //随机生成的鱼对象
    var direction = parseInt(Math.random() * 2 + 1); //方向10=左  2=右
    var x;
    var y;    //生成鱼在池潭的深处值
    var op_speed;
    var op_height;
    var op_width;
    var op_sizeindex;
    var op_weight;
    var isConDe = false; //重叠 = false, 不重叠 = true;
    var op_imgid;
    var op_id = parseInt(Math.random() * 12 + 1);

    switch (op_id) {
        case 1: { op_imgid = (direction == 2 ? 1 : 2); op_width = 80; op_height = 55; op_speed = 5; op_sizeindex = 1; op_weight = 15; break; }
        case 2: { op_imgid = (direction == 2 ? 3 : 4); op_width = 60; op_height = 50; op_speed = 5; op_sizeindex = 1; op_weight = 16; break; }
        case 3: { op_imgid = (direction == 2 ? 5 : 6); op_width = 80; op_height = 55; op_speed = 4; op_sizeindex = 1; op_weight = 16; break; }
        case 4: { op_imgid = (direction == 2 ? 7 : 8); op_width = 60; op_height = 50; op_speed = 4; op_sizeindex = 1; op_weight = 15; break; }
        case 5: { op_imgid = (direction == 2 ? 41 : 42); op_width = 50; op_height = 35; op_speed = 2; op_sizeindex = -1; op_weight = 10; break; }
        case 6: { op_imgid = (direction == 2 ? 43 : 44); op_width = 50; op_height = 35; op_speed = 1; op_sizeindex = -1; op_weight = 10; break; }
        case 7: { op_imgid = (direction == 2 ? 45 : 46); op_width = 50; op_height = 35; op_speed = 1; op_sizeindex = -1; op_weight = 8; break; }
        case 8: { op_imgid = (direction == 2 ? 47 : 48); op_width = 50; op_height = 35; op_speed = 3; op_sizeindex = -1; op_weight = 9; break; }
        case 9: { op_imgid = (direction == 2 ? 49 : 50); op_width = 50; op_height = 35; op_speed = 5; op_sizeindex = -1; op_weight = 11; break; }
        case 10: { op_imgid = (direction == 2 ? 26 : 27); op_width = 40; op_height = 30; op_speed = 1; op_sizeindex = 0; op_weight = 5; break; }
        case 11: { op_imgid = (direction == 2 ? 28 : 29); op_width = 70; op_height = 60; op_speed = 1; op_sizeindex = 0; op_weight = 6; break; }
        case 12: { op_imgid = (direction == 2 ? 30 : 31); op_width = 40; op_height = 30; op_speed = 1; op_sizeindex = 0; op_weight = 8; break; }
    }
    op_speed = 2;
    while (!isConDe) {
        y = parseInt(Math.random() * height + 220);
        isConDe = true;
        if (fishList.length > 0) {
            for (var i = 0; i < fishList.length; i++) {
                if (((y >= fishList[i].y && y <= (fishList[i].y + fishList[i].h)) ||
				((y + op_height) >= fishList[i].y && (y + op_height) <= (fishList[i].y + fishList[i].h)))
				&&
				((direction == fishList[i].direction && op_speed <= fishList[i].speed) || ((direction != fishList[i].direction) && (op_speed >= fishList[i].speed)))
				) {
                    isConDe = false;
                    break;
                }
            }
        }
    }
    if (direction == 1) {
        x = -80;
    } else {
        x = 300;
    }

    fish = new fishObj(op_id, op_imgid, op_speed, direction, op_sizeindex, x, y, op_width, op_height, 0, op_weight); //鱼对象

    fishList.push(fish);
}

//画鲨鱼
function sharkTimer() {
    if (sharkObj.status == 0) {
        if (sharkObj.direction == 1) {
            sharkObj.x = (sharkObj.x + (sharkObj.speed * timer) / 100);

            if (sharkObj.x >= poolright - 70) {
                sharkObj.direction = 2;
            }
        } else {
            sharkObj.x = (sharkObj.x - (sharkObj.speed * timer) / 100);

            if (sharkObj.x <= poolleft + 110) {
                sharkObj.direction = 1;
            }
        }
        if (sharkObj.flag <= 0)
            sharkObj.flag = 166;
        else
            sharkObj.flag = sharkObj.flag - 83;
        context.drawImage(sharkObj.direction == 1 ? imglist[38] : imglist[37], sharkObj.flag, 0, 80, 41, sharkObj.x, sharkObj.y, 40, 30);
    } else {
        var imgindex;
        var x;
        if (sharkObj.x > 150) {
            x = 100;
            imgindex = 40;
            if (sharkObj.playnum > 0) {
                if (sharkObj.flag == 1) {
                    sharkObj.flag = 3;
                    sharkObj.playnum--;
                } else {
                    sharkObj.flag--;
                }
            } else {
                drawMsg(16);
            }
        } else {
            x = 0;
            imgindex = 39;
            if (sharkObj.playnum > 0) {
                if (sharkObj.flag == 3) {
                    sharkObj.flag = 1;
                    sharkObj.playnum--;
                } else {
                    sharkObj.flag++;
                }
            } else {
                drawMsg(16);
            }
        }
        context.drawImage(imglist[imgindex], 271 * sharkObj.flag, 0, 270, 151, x, 110, 200, 120);
    }
}

//画分数
function drawScore() {
    var bits = score % 10;
    var ten = parseInt((score % 100) * 0.1);
    context.drawImage(imglist[59 + ten], 0, 0, 19, 38, 262, 50, 18, 30); //分数 (十位)
    context.drawImage(imglist[59 + bits], 0, 0, 19, 38, 275, 50, 18, 30); //分数 (个位)
    if (score >= 10) {
        sharkObj.speed = 7;
    }
    if (score >= 20) {
        sharkObj.speed = 10;
    }
    if (score >= 40) {
        sharkObj.speed = 12;
    }
    if (score >= 53) {
        sharkObj.speed = 15;
    }
    if (score >= 69) {
        sharkObj.speed = 17;
    }
    if (score >= 99) {
        sharkObj.speed = 20;
    }
    if (score >= 189) {
        sharkObj.speed = 25;
    }
}

//画水泡
function drawBubble() {
    //context.drawImage(imglist[9],60*17,0,30,221,0,200,30,221);
}

//弹出对话框
function drawMsg(imgindex) {
    isStop = true;
    context.globalAlpha = 0.5;
    context.fillStyle = '#000';
    context.fillRect(0, 0, 320, 500);
    context.globalAlpha = 0.8;
    context.fillStyle = '#FC6';
    context.fillRect(20, 190, 280, 150);
    context.globalAlpha = 1.0;
    context.fillStyle = '#FFC';
    context.fillRect(35, 205, 250, 120);
    context.drawImage(imglist[imgindex], 0, 0, 258, 79, 60, 210, 200, 60); //文字
    if (imgindex == 35) {
        //context.drawImage(imglist[11], 0, 0, 130, 81, 60, 270, 80, 50);  //继续按钮
		context.drawImage(imglist[11], 0, 0, 130, 81, 120, 270, 80, 50);  //继续按钮
    } else {
        //context.drawImage(imglist[34], 0, 0, 130, 81, 60, 270, 80, 50);  //重来按钮
		context.drawImage(imglist[34], 0, 0, 130, 81, 120, 270, 80, 50);  //重来按钮
    }
    //context.drawImage(imglist[14], 0, 0, 130, 81, 170, 270, 80, 50); //退出按钮
    if (imgindex == 35) {
        //jQuery("#mycanvas").bind(brower.downEventName, MsgDownClick_Continue);
        //jQuery("#mycanvas").bind(brower.upEventName, MsgUpClick_Continue);
        jQuery("#mycanvas").bind(brower.clickEventName, MsgClick_Continue);
    } else {
       //jQuery("#mycanvas").bind(brower.downEventName, MsgDownClick);
       // jQuery("#mycanvas").bind(brower.upEventName, MsgUpClick);
        jQuery("#mycanvas").bind(brower.clickEventName, MsgClick);
    }
}

//按下按钮事件 重来
function MsgDownClick(e) {
    e.preventDefault();
    var x = 0;
    var y = 0;
    if (brower.isMobile == false && brower.isIphone == false) {
        x = e.clientX - (window.innerWidth - 320) / 2;
        y = e.clientY;
    } else {
        x = event.touches[0].clientX - (window.innerWidth - 320) / 2;
        y = event.touches[0].clientY;
    }

    var need_y1 = 270;
    var need_y2 = 320;
    if (brower.isQQ==true){
        need_y1 = 230;
        need_y2 = 280;
    }

    if (x >= 60 && x <= 140 && y >= need_y1 && y <= need_y2) {
        context.clearRect(60, 270, 80, 50);
        context.drawImage(imglist[34], 130, 0, 130, 81, 60, 270, 80, 50);
    }
    if (x >= 170 && x <= 250 && y >= need_y1 && y <= need_y2) {
        context.clearRect(170, 270, 80, 50);
        context.drawImage(imglist[14], 130, 0, 130, 81, 170, 270, 80, 50);
    }
}

//按下按钮事件 继续
function MsgDownClick_Continue(e) {
    e.preventDefault();
    var x = 0;
    var y = 0;
    if (brower.isMobile == false && brower.isIphone == false) {
        x = e.clientX - (window.innerWidth - 320) / 2;
        y = e.clientY;
    } else {
        x = event.touches[0].clientX - (window.innerWidth - 320) / 2;
        y = event.touches[0].clientY;
    }

    var need_y1 = 270;
    var need_y2 = 320;
    if (brower.isQQ==true){
        need_y1 = 230;
        need_y2 = 280;
    }

    if (x >= 60 && x <= 140 && y >= need_y1 && y <= need_y2) {
        context.clearRect(60, 270, 80, 50);
        context.drawImage(imglist[11], 130, 0, 130, 81, 60, 270, 80, 50);
    }
    if (x >= 170 && x <= 250 && y >= need_y1 && y <= need_y2) {
        context.clearRect(170, 270, 80, 50);
        context.drawImage(imglist[14], 130, 0, 130, 81, 170, 270, 80, 50);
    }
}

//放开按钮事件 重来
function MsgUpClick(e) {
    e.preventDefault();
    var x = 0;
    var y = 0;
    if (brower.isMobile == false && brower.isIphone == false) {
        x = e.clientX - (window.innerWidth - 320) / 2;
        y = e.clientY;
    } else {
        x = event.touches[0].clientX - (window.innerWidth - 320) / 2;
        y = event.touches[0].clientY;
    }

    var need_y1 = 270;
    var need_y2 = 320;
    if (brower.isQQ==true){
        need_y1 = 230;
        need_y2 = 280;
    }

    if (x >= 60 && x <= 140 && y >= need_y1 && y <= need_y2) {
        context.clearRect(60, 270, 80, 50);
        context.drawImage(imglist[34], 0, 0, 130, 81, 60, 270, 80, 50);
    }
    if (x >= 170 && x <= 250 && y >= need_y1 && y <= need_y2) {
        context.clearRect(170, 270, 80, 50);
        context.drawImage(imglist[14], 0, 0, 130, 81, 170, 270, 80, 50);
    }
}

//放开按钮事件 继续
function MsgUpClick_Continue(e) {
    e.preventDefault();
    var x = 0;
    var y = 0;
    if (brower.isMobile == false && brower.isIphone == false) {
        x = e.clientX - (window.innerWidth - 320) / 2;
        y = e.clientY;
    } else {
        x = event.touches[0].clientX - (window.innerWidth - 320) / 2;
        y = event.touches[0].clientY;
    }

    var need_y1 = 270;
    var need_y2 = 320;
    if (brower.isQQ==true){
        need_y1 = 230;
        need_y2 = 280;
    }

    if (x >= 60 && x <= 140 && y >= need_y1 && y <= need_y2) {
        context.clearRect(60, 270, 80, 50);
        context.drawImage(imglist[11], 0, 0, 130, 81, 60, 270, 80, 50);
    }
    if (x >= 170 && x <= 250 && y >= need_y1 && y <= need_y2) {
        context.clearRect(170, 270, 80, 50);
        context.drawImage(imglist[14], 0, 0, 130, 81, 170, 270, 80, 50);
    }
}

//按钮单击事件 重来
function MsgClick(e) {
    e.preventDefault();
    var x = 0;
    var y = 0;
    if (brower.isMobile == false && brower.isIphone == false) {
        x = e.clientX - (window.innerWidth - 320) / 2;
        y = e.clientY;
    } else {
        x = event.touches[0].clientX - (window.innerWidth - 320) / 2;
        y = event.touches[0].clientY;
    }

    var need_y1 = 270;
    var need_y2 = 320;
    if (brower.isQQ==true){
        need_y1 = 230;
        need_y2 = 280;
    }

//    if (x >= 60 && x <= 140 && y >= need_y1 && y <= need_y2) {
//        score = 0;
//        sharkObj = new SharkObj();
//        mainObj = new MainObj();
//        fishList = [];
//        isStop = false;
//        jQuery("#mycanvas").unbind(brower.downEventName);
//        jQuery("#mycanvas").unbind(brower.upEventName);
//        jQuery("#mycanvas").unbind(brower.clickEventName);
//        jQuery("#mycanvas").bind(brower.clickEventName, Start);
//        //Gamehub.Score.submitHide(score);
//    }
//    if (x >= 170 && x <= 250 && y >= need_y1 && y <= need_y2) {
//        if (score > 0) {
//            Gamehub.Score.submit(score);
//        } else {
//            window.location.href = "http://yx8.com" + getLXT();
//        }
//    }
	if (x >= 120 && x <= 200 && y >= need_y1 && y <= need_y2) {
		if (score > 0) {
			Gamehub.Score.submitHide(score);
		}
		resetGame();
    }
}

function resetGame () {
	score = 0;
	sharkObj = new SharkObj();
	mainObj = new MainObj();
	fishList = [];
	isStop = false;
	jQuery("#mycanvas").unbind(brower.downEventName);
	jQuery("#mycanvas").unbind(brower.upEventName);
	jQuery("#mycanvas").unbind(brower.clickEventName);
	jQuery("#mycanvas").bind(brower.clickEventName, Start);
}

function exitGame () {
	if (score > 0) {
		Gamehub.Score.submitHide(score);
	}
	window.location.href = "http://yx8.com" + getLXT();
}

function exitGame2 () {
	if (score > 0) {
		Gamehub.Score.submitHide(score);
	}
	DrawOneLoad();
}

//按钮单击事件 继续
function MsgClick_Continue(e) {
    e.preventDefault();
    var x = 0;
    var y = 0;
    if (brower.isMobile == false && brower.isIphone == false) {
        x = e.clientX - (window.innerWidth - 320) / 2;
        y = e.clientY;
    } else {
        x = event.touches[0].clientX - (window.innerWidth - 320) / 2;
        y = event.touches[0].clientY;
    }

    var need_y1 = 270;
    var need_y2 = 320;
    if (brower.isQQ==true){
        need_y1 = 230;
        need_y2 = 280;
    }

//    if (x >= 60 && x <= 140 && y >= need_y1 && y<= need_y2) {
//        isStop = false;
//        jQuery("#mycanvas").unbind(brower.downEventName);
//        jQuery("#mycanvas").unbind(brower.upEventName);
//        jQuery("#mycanvas").unbind(brower.clickEventName);
//        jQuery("#mycanvas").bind(brower.clickEventName, Start);
//    }
//    if (x >= 170 && x <= 250 && y >= need_y1 && y <= need_y2) {
//        if (score > 0) {
//            Gamehub.Score.submit(score);
//        } else {
//            window.location.href = "http://yx8.com" + getLXT();
//        }
//    }
	if (x >= 120 && x <= 200 && y >= need_y1 && y <= need_y2) {
        isStop = false;
        jQuery("#mycanvas").unbind(brower.downEventName);
        jQuery("#mycanvas").unbind(brower.upEventName);
        jQuery("#mycanvas").unbind(brower.clickEventName);
        jQuery("#mycanvas").bind(brower.clickEventName, Start);
    }
}

//按钮单击事件 开始游戏
function MsgClick_Start(e) {
    e.preventDefault();
    var x = 0;
    var y = 0;
    if (brower.isMobile == false && brower.isIphone == false) {
        x = e.clientX - (window.innerWidth - 320) / 2;
        y = e.clientY;
    } else {
        x = event.touches[0].clientX - (window.innerWidth - 320) / 2;
        y = event.touches[0].clientY;
    }

    var need_y1 = 200;
    var need_y2 = 240;
    if (brower.isQQ==true){
        need_y1 = 160;
        need_y2 = 200;
    }

//    if (x >= 30 && x <= 150 && y >= need_y1 && y <= need_y2) {
//        jQuery("#mycanvas").unbind(brower.clickEventName);
//        drawDescore();
//    }
    if (x >= 100 && x <= 220 && y >= need_y1 && y <= need_y2) {
        jQuery("#mycanvas").unbind(brower.clickEventName);
        drawDescore();
    }
    if (x >= 170 && x <= 290 && y >= need_y1 && y <= need_y2) {
        //window.location.href = "http://yx8.com" + getLXT();
    }
}

function drawDescore() {
    isStop = true;
    context.globalAlpha = 0.5;
    context.fillStyle = '#000';
    context.fillRect(0, 0, 320, 500);
    context.globalAlpha = 0.8;
    context.fillStyle = '#FC6';
    context.fillRect(20, 90, 280, 250);
    context.globalAlpha = 1.0;
    context.fillStyle = '#FFC';
    context.fillRect(35, 105, 250, 220);
    context.drawImage(imglist[2], 0, 0, 280, 226, 50, 120, 100, 80);
    context.drawImage(imglist[44], 0, 0, 280, 226, 50, 180, 100, 80);
    context.drawImage(imglist[37], 0, 0, 74, 40, 60, 255, 74, 40);
    context.drawImage(imglist[58], 0, 0, 91, 85, 190, 110, 70, 70);
    context.drawImage(imglist[58], 0, 0, 91, 85, 190, 170, 70, 70);
    context.drawImage(imglist[23], 0, 0, 91, 85, 190, 240, 70, 70);
    context.drawImage(imglist[10], 0, 0, 103, 104, 270, 70, 50, 50);
    jQuery("#mycanvas").bind(brower.clickEventName, clickDisplay);
}

function clickDisplay() {
    jQuery("#mycanvas").unbind(brower.clickEventName);
    jQuery("#mycanvas").bind(brower.clickEventName, Start);
    isStop = false;
    runTimer();
}

//画进度条
function drawLoaded() {
    context.clearRect(0, 0, 320, 500);

   //context.drawImage(loadedimg, 0, 0, 250, 85, 40, 150, 250, 85);
try{
   //context.drawImage(loadedimg, 0, 90, 250 * (loaded / imgfilelist.length), 5, 42, 201, 245 * (loaded / imgfilelist.length), 10);
}catch(ex){
}
    context.fillStyle = '#2982BC';
    context.font = '18px 微软雅黑';
    context.fillText(parseInt(loaded / imgfilelist.length * 100) + '%', 150, 255);
	context.fillText('正在努力加载中，请稍候', 80, 205);
    if (loaded < imgfilelist.length) {
        setTimeout("drawLoaded()", 100);
    } else {
        document.body.style.backgroundColor='#000';
        DrawOneLoad();
    }
}

function DrawOneLoad() {
    context.drawImage(imglist[71], 0, 0, 480, 800, 0, 0, 320, 480);
    jQuery("#mycanvas").bind(brower.clickEventName, MsgClick_Start);
}

function getLXT() {
    var url = window.location.href;
    var start = url.indexOf("lxt=");
    var urllxt;
    if (start !== -1)
        urllxt = '?' + url.substring(start);
    else {
        urllxt = "";
    }
    return urllxt;
}
