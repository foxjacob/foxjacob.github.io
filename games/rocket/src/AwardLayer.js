/**
 * Created by Administrator on 14-12-2.
 */
var AwardScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
		ShareText();
        cc.spriteFrameCache.addSpriteFrames(res.a_awardList);
        //cc.director.resume();
        this.addChild(new AwardLayer());
    }
});

var AwardLayer = cc.Layer.extend({
    playing:false,//是否处在抽奖中
    awardIndex:4,//中奖索引的下标值为0【0~11】
    awardArray:[],//12个奖品数组
    OneAwardIndex:[],//一等奖索引下标
    TwoAwardIndex:[],//二等奖索引下标
    ThreeAwardIndex:[],//三等奖索引下标
    NoAwardIndex:[],//不中奖的索引值
    frequece:0,//跑马灯的圈数
    IsAward:false,//记录是否中奖

    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        this._super();
        //cc.director.resume();
        this.initAwardArray();
        this.initAwardSprite();
        this.getAwardIndex();//获取奖品的索引值

        g_awardTime = 1;
    },
    initAwardArray:function(){
        //
        //alert("initAwardArray");
        //create bg
        var bg = cc.Sprite.create(res.a_awardBg_png);
        bg.attr({
            x:cc.winSize.width/2,
            y:cc.winSize.height/2,
            scale:0.5
        });
        this.addChild(bg,0);
        //围绕圆形旋转
        var AwardSpriteArray = [];
        for(var i=0;i<16;++i){
            if(g_AwardIndex[i]==0){
                continue;
            }
            //award1.png
            var path = "#jp"+g_AwardIndex[i]+".png";
            var sprite = new cc.MenuItemToggle(
                new cc.MenuItemImage(path),
                new cc.MenuItemImage("#center.png"),
                null,this
            );
            sprite.attr({
                anchorX:0.5,
                anchorY:0.5,
                x:(i%4)*56+cc.winSize.width/2-86,
                y:-Math.floor(i/4)*60+cc.winSize.height/2+50,
                scale:0.5
            });
            //this.awardSpriteArray.push(sprite);
            sprite.setEnabled(false);
            AwardSpriteArray[i] = cc.Menu.create(sprite);
            AwardSpriteArray[i].setPosition(cc.p(0,0));
            AwardSpriteArray[i].tag = g_AwardIndex[i];
        }
        //清理空白的4个元素
        AwardSpriteArray.splice(5,2);
        AwardSpriteArray.splice(7,2);
        this.awardArray.push(AwardSpriteArray[0]);
        this.awardArray.push(AwardSpriteArray[1]);
        this.awardArray.push(AwardSpriteArray[2]);
        this.awardArray.push(AwardSpriteArray[3]);
        this.awardArray.push(AwardSpriteArray[5]);
        this.awardArray.push(AwardSpriteArray[7]);
        this.awardArray.push(AwardSpriteArray[11]);
        this.awardArray.push(AwardSpriteArray[10]);
        this.awardArray.push(AwardSpriteArray[9]);
        this.awardArray.push(AwardSpriteArray[8]);
        this.awardArray.push(AwardSpriteArray[6]);
        this.awardArray.push(AwardSpriteArray[4]);
        for(var j=0;j<12;++j){
            this.addChild(this.awardArray[j],0);
            //避免再次进入时，上次抽奖的框 没有覆盖
            this.awardArray[j].children[0].setSelectedIndex(0);
        }
    },
    initAwardSprite:function(){
        var awardSprite = cc.MenuItemImage.create(
            "#btn_cj.png",
            "#btn_cj_big.png",
            this.OnAward,this
        );
        awardSprite.attr({
            anchorX:0.5,
            anchorY:0.5,
            x:cc.winSize.width/2,
            y:cc.winSize.height/2-50,
            scale:0.5
        });
        var menu = new cc.Menu(awardSprite);
        menu.setPosition(0,0);
        this.addChild(menu);
    },
    OnAward:function(sender){
        //alert("我要抽奖！");
        if((g_awardTime>0)&&(this.playing==false)){
            //获取抽中的索引
            Post();
            //alert("OnAward抽中的索引值:"+g_awardIndex);
            //this.getawardIndex();
            //抽奖次数减一
            g_awardTime--;
            //再次点击抽奖时，必须要先将原本选中的图标复原
            //this.awardArray[this.awardIndex].children[0].setSelectedIndex(1);
            //先判断能否抽奖【此时的this.times必须从后台获取】
            this.schedule(this.OnSchedule,0.05);
            this.index=0;
            this.frequece=0;
            //设置抽奖的状态
            this.playing=true;
            //this.randAwardIndex();
            this.randFrequece();
        }
    },
    OnSchedule:function(){
        if(this.index==0){
            this.awardArray[this.index].children[0].setSelectedIndex(1);
        }else if(this.index==12){
            this.awardArray[this.index-1].children[0].setSelectedIndex(0);
            this.awardArray[0].children[0].setSelectedIndex(1);
            this.index=(this.index%12);
            this.frequece--;
        }else{
            this.awardArray[this.index].children[0].setSelectedIndex(1);
            this.awardArray[this.index-1].children[0].setSelectedIndex(0);
        }
        this.judge();
        this.index++;
    },
    judge:function(){
        if(this.frequece==1){
            this.getawardIndex();
        }
        //结束判断
        if((this.awardIndex == this.index)&&(this.frequece==0)){
            //alert("judge抽中的this.awardIndex下标值："+this.awardIndex+"\r\n"+"judge抽中的g_awardIndex索引值："+g_awardIndex);
            //alert("judge抽中的索引值:"+g_awardIndex);
            g_isAward = false;
            this.unschedule(this.OnSchedule);
            this.playing=false;
            if(g_awardIndex <=3){
                g_isAward=true;
            }
            this.gameOver();
        }
    },
    getAwardIndex:function(){
        var i=0;
        for(i=0;i<12;i++){
            if(this.awardArray[i].tag==1){//一等奖索引下标
                this.OneAwardIndex.push(i);
            }
        }
        for(i=0;i<12;i++){
            if(this.awardArray[i].tag==2){//二等奖索引下标
                this.TwoAwardIndex.push(i);
            }
        }
        for(i=0;i<12;i++){
            if(this.awardArray[i].tag==3){//三等奖索引下标
                this.ThreeAwardIndex.push(i);
            }
        }
        for(i=0;i<12;i++){
            if((this.awardArray[i].tag==4)||(this.awardArray[i].tag==5)){//一等奖索引下标
                this.NoAwardIndex.push(i);
            }
        }
    },
    randFrequece:function(){//跑马灯效果,执行3-5圈
        this.frequece = 3+Math.floor(Math.random()*3);
    },
    /*randAwardIndex:function(){
        //alert("randFrequece我要抽奖！");
        //alert("randAwardIndex我要抽奖！");
        //获取
        var Index = Math.ceil(Math.random()*10000);//默认值为4不中奖
        //Index=1009;
        //alert("抽中的索引值："+Index);
        if(Index==1){//一等奖 1/10000
            //中奖索引
            this.awardIndex = this.OneAwardIndex[0];//一等奖只有一个
        }else if(Index<4){//二等奖 1/5000
            this.awardIndex = this.TwoAwardIndex[Math.floor(Math.random()*2)];//二等奖有两个
        }else if(Index<1004){//三等奖 1/10
            this.awardIndex = this.ThreeAwardIndex[Math.floor(Math.random()*3)];
        }else{//不中奖
            this.awardIndex = this.NoAwardIndex[Math.floor(Math.random()*6)];
        }
    },*/
    getawardIndex:function(){
        //alert("getawardIndex函数中的g_awardIndex的值："+g_awardIndex);
        if(g_awardIndex==1){//一等奖 1/10000
            //中奖索引
            this.awardIndex = this.OneAwardIndex[0];//一等奖只有一个
        }else if(g_awardIndex==2){//二等奖 1/5000
            this.awardIndex = this.TwoAwardIndex[Math.floor(Math.random()*2)];//二等奖有两个
        }else if(g_awardIndex==3){//三等奖 1/10
            this.awardIndex = this.ThreeAwardIndex[Math.floor(Math.random()*3)];
        }else{//不中奖
            this.awardIndex = this.NoAwardIndex[Math.floor(Math.random()*6)];
        }
        //alert("getawardIndex函数中的this.awardIndex的值："+this.awardIndex);
    },
    gameOver:function(){
        //TODO：显示时的切换
        this.addChild(new AwardResultLayer());
    }
});