/**
 * Created by can on 15/6/24.
 */

var imageData = [
    {name: "about_bg", path: basePath + "about_bg.jpg"},
    {name: "again", path: basePath + "again.png"},
    {name: "bg", path: basePath + "bg.jpg"},
    {name: "bucket", path: basePath + "bucket.png"},
    {name: "guize_button", path: basePath + "guize_button.png"},
    {name: "over_bg", path: basePath + "over_bg.jpg"},
    {name: "person-fs-wet", path: basePath + "person-fs-wet.png"},
    {name: "person-fs", path: basePath + "person-fs.png"},
    {name: "person-ldh-wet", path: basePath + "person-ldh-wet.png"},
    {name: "person-ldh", path: basePath + "person-ldh.png"},
    {name: "person-lj-wet", path: basePath + "person-lj-wet.png"},
    {name: "person-b-wet", path: basePath + "person-b-wet.png"},
    {name: "person-lj", path: basePath + "person-lj.png"},
    {name: "result", path: basePath + "result.png"},
    {name: "share", path: basePath + "share.png"},
    {name: "share_tip", path: basePath + "share_tip.png?t=2"},
    {name: "start", path: basePath + "start.jpg"},
    {name: "start_button", path: basePath + "start_button.png"},
    {name: "water-full", path: basePath + "water-full.png"},
    {name: "back", path: basePath + "back.png"}
];
var dataList, loadingLayer, bg_sound = new LSound(), mainLayer = new LSprite(), stageLayer = new LSprite();
var bgLayer = new LSprite();
var is_play = false;



function welcome() {
    reset();
    addElements([
        {src: 'start'},
        {src: 'start_button',type:'button',center:true,Y:630,click_up:start},
        {src: 'guize_button',type:'button',center:true,Y:742,click_up:about}
    ], bgLayer);

}
function about(){
    reset();
    addElements([
        {src:'about_bg'},
        {src:'back',X:478,Y:46,click_up:welcome},
        {src:'start_button',type:'button',center:true,Y:735,click_up:start}
    ],bgLayer);
}

var headerLocation = [
        [80, 365],
        [418, 362],
        [226, 510],
        [432, 564],
        [80, 625],
        [329, 703]
    ];
var locations=[];
var emptyLocation=[];
var step=50,index=40;
var is_over=false;
var score=0;
var scoreView,timer;
function start(){
    reset();
    is_over=false;
    score=0;
    step=30,index=40;
    locations=[], emptyLocation=[];
    addElements([
        {src:'bg'}
    ],bgLayer);
    bgLayer.addChild(stageLayer);
    headerLocation.forEach(function(item){
        var l=new LSprite();
        l.x=item[0];
        l.y=item[1];
        l.graphics.drawRect(0,"#ff0000",[0,0,124,150]);
        locations.push(l);
        emptyLocation.push(l);
        stageLayer.addChild(l);
    });
    timer=new Timer();
    timer.x=544;
    timer.y=48;
    timer.run();
    timer.callback=over;
    scoreView=new LTextField();
    scoreView.color="#ffffff";
    scoreView.size=22;
    scoreView.text="0";
    scoreView.x=554;
    scoreView.y=78;
    bgLayer.addChild(timer);
    bgLayer.addChild(scoreView);


    bgLayer.addEventListener(LEvent.ENTER_FRAME,onframe);
}
function onframe() {
    if (!is_over) {
        if (++index >= step) {
            if (step > 10)step -= 3;
            index = 0;
            if (emptyLocation.length > 0) {
                var r = rangeRandom(0, emptyLocation.length - 1);
                var empty = emptyLocation.splice(r, 1);
                empty[0].removeAllChild();
                var type = rangeRandom(1,2);
                var heard = new Header(type, empty[0], appendEmpty);
                if(step>=40){
                    heard.time=.8;
                }else if(step>=20){
                    heard.time=0.5;
                }else{
                    heard.time=0.4;
                }
                heard.show();
                empty[0].addChild(heard);
            }
        }
    }
}
function over(){
    reset();
    is_over=true;
    timer.enable=false;
    addElements([
        {src:'over_bg'},
        {src:'again',type:'button',X:130,Y:778,click_up:start},
        {src:'share',type:'button',X:340,Y:778,click_up:function(){
            addElements({src:'share_tip',click_up:function(e){
                bgLayer.removeChild(e.currentTarget);
            }},bgLayer);
        }},
        {src:'result',X:150,Y:414},
        {type:LTextField,X:349,Y:462,init:function(obj){
            obj.text=score;
            obj.color="#FF0000";
            obj.size=20;
        }}
    ],bgLayer);
}

function appendEmpty(emptyBox,header){
    emptyLocation.push(emptyBox);
    if(header.is_clicked){
        switch (header.type) {
            case 1:
                score++;
                scoreView.text=score;
                break;
            case 2:
                over();
                break
        }
    }
}
var HeaderImages=["person-fs","person-ldh","person-lj"];
/**
 *
 * @param type 1:正常，2:陷阱
 * @constructor
 */
function Header(type,parent,on_hidden){
    LExtends(this,LSprite,[]);
    var self=this;
    self.type=type;
    self.is_show=false;
    var img=HeaderImages[rangeRandom(0,2)];
    if(type==1){
        self.img=getBitmap(img);
    }else{
        img="person-b";
        self.img=getBitmap(img+"-wet");
    }
    self.img2=getBitmapData(img+"-wet");
    self.addChild(self.img);
    var mask =new LSprite();
    mask.graphics.drawRect(0,"#00ff00",[0,0,120,130]);
    self.img.mask=mask;
    self.time=0.4;
    self.img.y=125;
    self.is_clicked=false;
    self.bucket=getBitmap('bucket',0,50);
    self.water=getBitmap('water-full');
    self.water.y=-50;
    self.bucket.y=-60;
    self.addChild(self.bucket);
    self.addChild(self.water);

    self.bucket.visible=false;
    self.water.visible=false;
    self.show=function(){
        self.is_show=true;
        LTweenLite.to(self.img,self.time,{y:0,onComplete:self.hide});
    }
    self.tween = function (img) {
        LTweenLite.to(img,.3, {
            y: 125, onComplete: function () {
                self.is_show = false;
                if (on_hidden) {
                    on_hidden(parent, self);
                    self.bucket.visible = false;
                    self.water.visible=false;
                }
            }
        });
    };
    self.hide = function () {
        setTimeout(function(){
            self.tween(self.img);
        },self.time);

    }
    self.addEventListener(LMouseEvent.MOUSE_UP, function (e) {
        var obj = e.currentTarget;
        if (obj.is_show) {
            //obj.img.visible = false;
            //obj.img2.visible = true;
            obj.img.bitmapData=obj.img2;
            obj.bucket.visible = true;
            obj.water.visible=true;
            obj.is_clicked = true;
        }
    });

}


function Timer() {
    var self = this;
    base(self, LSprite, []);
    self.value = 30;
    self.running = false;
    self.enable = true;
    self.view = new LTextField();
    self.view.setType(LTextFieldType.TEXT);
    self.view.size = 22;
    self.view.weight = "bolder";
    self.view.color = "#FFFFFF";
    self.view.font = "微软雅黑";
    self.view.text = "";
    self.addChild(self.view);

    self.callback = function () {
    };
    self.run = function () {
        if (self.enable) {
            self.view.text =self.value;
            if (self.value == 0 && self.callback) {
                self.running = false;
                self.callback();
                self.callback = null;
                return;
            }
            self.value--;
            setTimeout(self.run, 1000);
        }
    }
}

function main() {
    if (LGlobal.canTouch) {
        LGlobal.stageScale = LStageScaleMode.EXACT_FIT;
        LSystem.screen(LStage.FULL_SCREEN);
    } else {
        LGlobal.resize(380, 650);
    }
    loadingLayer = new LoadingSample1();
    addChild(loadingLayer);
    LLoadManage.load(imageData, function (progress) {
        loadingLayer.setProgress(progress);

    }, gameInit);
    addChild(loadingLayer);

}


function gameInit(result) {
    dataList = result;
    removeChild(loadingLayer);
    addChild(mainLayer);
    welcome();
}

function reset() {
    bgLayer.die();
    bgLayer.removeAllChild();
    stageLayer.die();
    stageLayer.removeAllChild();
    mainLayer.removeAllChild();
    stageLayer = new LSprite();
    bgLayer = new LSprite();
    mainLayer.addChild(bgLayer);
    is_play = false;
    LTweenLite.removeAll();
}
init(1000 / 30, "game", 640, 960, main);
