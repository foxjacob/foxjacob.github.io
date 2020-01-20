/**
 * Created by will on 2014/11/2.
 */
var AnimationLayer = cc.Layer.extend({
    target:null,
    warningLabel:null,
    timeLabel:null,
    flag:false,
    rock:null,
    removeObj:[],
    tempFlag:false,
    moveFlag:false,
    tempCount:0,
    preTouchY:0,

    ctor:function(){
      this._super();
        self=this;
        this.init();
    },

    init:function(){
        this._super();
        this.tempCount = 0;
        self = this;
        if(this.removeObj.length != 0){
            this.removeObj.splice(0,this.removeObj.length);
        }

        var size = cc.winSize;
        var path =null;

        var animFrames = [];
        if(g_roleSex=="man"){
            path="#hjg0.png";
            for(var i=0;i<2;++i){
                var str = "hjg"+i+".png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
        }else{
            path="#hjj0.png";
            for(var i=0;i<2;++i){
                var str = "hjj"+i+".png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
        }

        var animation = new cc.Animation(animFrames,1);
        animation.setDelayPerUnit(1 / 10);
        animation.setRestoreOriginalFrame(true);
        this.animate = cc.animate(animation);

        this.target = new cc.Sprite(path);
        this.target.attr({
            anchorX:0.5,
            anchorY:0.5,
            x:size.width/4,
            y:size.height*3/4+60,
            scale:0.3
        });
        this.addChild(this.target,6,SpriteTag.player);
        self.separate(g_touchMethod);

        this.scheduleUpdate();

        this.warningLabel = new cc.LabelTTF("","Arail",16);
        this.warningLabel.color = cc.color(0,0,0);
        this.warningLabel.attr({
            x:cc.winSize.width/2,
            y:cc.winSize.height-40,
            anchorX:0.5,
            anchorY:0.5
        });
        this.addChild(this.warningLabel,1,30);

        this.timeLabel = new cc.LabelTTF("","Impact",14);
        this.timeLabel.color = cc.color.RED;
        this.timeLabel.attr({
            x:cc.winSize.width/2,
            y:cc.winSize.height/2,
            anchorX:0.5,
            anchorY:0.5
        });
        this.addChild(this.timeLabel,1,30);

        this.schedule(function () {
            if(this.flag){
                this.warningLabel.setString("");
                this.flag = false;
            }
            this.timeLabel.setString("");
        },1.8);
        this.schedule(this.rocks,0.3);
    },
    separate:function(isTouch){
        if(isTouch == true){
            this.downFly();
            this.listener = cc.EventListener.create({
             event: cc.EventListener.TOUCH_ONE_BY_ONE,
             swallowTouches: true,
             onTouchBegan: function (touch, event) {
                 var target = event.getCurrentTarget();
                 var locationInNode = target.convertToNodeSpace(touch.getLocation());
                 var s = target.getContentSize();
                 var rect = cc.rect(0, 0, s.width, s.height);
                 //alert("明天！");
                 var action = cc.moveBy(0.5,cc.p(0,150));
                 target.runAction(cc.spawn(action,self.animate));

                 if(cc.rectContainsPoint(rect, locationInNode)) {
                    return false;
                 }
                 return false;
             },
             onTouchMoved: function (touch, event) {
                     var target = event.getCurrentTarget();
                     var delta = touch.getDelta();
                     target.x += delta.x;
                     target.y += delta.y;
                     if(target.y >= size.height * 0.80) {
                     target.y = size.height * 0.80;
                     }
                 }
             });
             cc.eventManager.addListener(this.listener,this.target);
        }else{
            cc.eventManager.addListener({
                event:cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches:true,
                onTouchBegan:self.onTouchBegan,
                onTouchMoved:self.onTouchMoved
            },this);
        }
    },
    onTouchBegan:function(touch,event){
        //console.log();
        self.setBeginY(touch.getLocationY());
        return true;
    },
    onTouchMoved:function(touch,event){
        self.judge(touch.getLocationY());
    },
    setBeginY:function(posY){
        self.preTouchY = posY;
        //self.target.setPositionY(self.preTouchY);
        //self.target.visible = !(self.target.isVisible());
        //alert("触摸点的坐标:"+self.preTouchY);
    },
    judge:function(posY){
        //判断是向上还是向下滑动
        var step = posY - self.preTouchY;
        self.target.setPositionY(self.target.getPositionY()+step);
        self.target.runAction(this.animate);
        /*if(step>0){//向上滑动

        }*/
        self.preTouchY = posY;
    },
    downFly:function(){

        /*var animFrames = [];
        // num equal to spriteSheet
        for (var i = 0; i < 6; i++) {
            var str = "pilot" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = new cc.Animation(animFrames, 0.03);
        this.flyAction = new cc.Animate(animation);
        this.flyAction.retain();
        this.target.runAction(cc.repeatForever(this.flyAction));*/

        var pos = this.target.getPosition();
        this.downAction = cc.moveTo(2,cc.p(pos.x,0));
        this.target.runAction(cc.repeatForever(this.downAction));
    },
    update:function(){
        if(g_time >= 0) {
            if(this.target.y<cc.winSize.height/4){
                if(this.target.y < 1){//坠落事件
                    cc.eventManager.removeAllListeners();
                     if(!this.tempFlag){
                     g_gameStatus = 1;
                     this.tempFlag = true;
                     }
                 }
                if(!this.flag){//
                    this.warningLabel.setString("亲,再低就变成蜗牛了!");
                    this.warningLabel.color = cc.color.RED;
                    this.warningLabel.y = cc.winSize.height/4;
                    this.flag = true;
                }
                //this.target.y = 1;
                /*if(g_time <= 0){
                 if(!this.moveFlag){
                 this.target.stopAllActions();
                 this.target.runAction(cc.repeatForever(this.flyAction));
                 var controlPoints = [ this.target.getPosition(),
                 cc.p(cc.winSize.width/3, 50),
                 cc.p(cc.winSize.width/2+50,0)];
                 this.target.runAction(cc.bezierTo(3,controlPoints));
                 this.moveFlag = true;
                 }
                 }*/
            }
            if(this.target.y>cc.winSize.height-20){
                if(!this.flag){
                    this.warningLabel.setString("亲,再高就缺氧了!");
                    this.warningLabel.color = cc.color.BLACK;
                    this.warningLabel.y = cc.winSize.height-40;
                    this.flag = true;
                }
                this.target.y = cc.winSize.height-20;
            }
            for(var i=0;i<this.removeObj.length;i++){
                //碰撞检测
                var rect1 = this.target.getBoundingBox();
                var point1 = this.removeObj[i].getPosition();
                if(cc.rectContainsPoint(rect1, point1)){
                    this.timeLabel.x = this.removeObj[i].x;
                    this.timeLabel.y = this.removeObj[i].y;
                    //alert("this.removeObj[i].tag的值："+this.removeObj[i].tag);
                    if(this.removeObj[i].tag == SpriteTag.rock){
                        g_time -= 2;
                        this.timeLabel.setString("-2s");
                        this.timeLabel.color = cc.color.RED;
                    }else if(this.removeObj[i].tag == SpriteTag.packet){
                        g_time += 1;
                        g_packetNum+=1;
                        this.timeLabel.setString("+1s");
                        this.timeLabel.color = cc.color.GREEN;
                    }else if(this.removeObj[i].tag == SpriteTag.qiqiu){
                        continue;
                    }
                    /*if(this.removeObj[i].tag == SpriteTag.bird){
                     g_time -= 2;
                     this.timeLabel.setString("-2s");
                     this.timeLabel.color = cc.color.RED;
                     }else if(this.removeObj[i].tag == SpriteTag.cloud){
                     g_time -= 2;
                     this.timeLabel.setString("-2s");
                     this.timeLabel.color = cc.color.RED;
                     }else if(this.removeObj[i].tag == SpriteTag.oil){
                     g_time -= 4;
                     g_packetNum+=1;
                     this.timeLabel.setString("+4s");
                     this.timeLabel.color = cc.color(0,128,0);
                     }else if(this.removeObj[i].tag == SpriteTag.gift){
                     //礼包
                     //                    this.removeChild(this.removeObj[i],true);
                     if(g_time > 0){
                     g_prizeStatus = 1;
                     g_tempTime = g_time;
                     g_gameStatus = 2;
                     }
                     }*/

                    this.removeChild(this.removeObj[i],true);
                    this.removeObj.splice(i,1);
                }
                //移出数组
                if(this.removeObj.length != 0){
                    if(this.removeObj.length > 0 && this.removeObj[i].x < 0 ){
                        this.removeObj.splice(i,1);
                    }
                }
            }
        }
    },
    rocks: function () {
        if(g_time <= 0){
            g_gameStatus=1;
            return false;
        }

        var i = Math.round(Math.random()*16)+1;  //随机物品

        var path = null;
        var tag = SpriteTag.qiqiu;
        var y = 0;
        if(i<8){//包裹
            path = "#kd"+i+".png";
            tag = SpriteTag.packet;
            y=Math.floor((cc.winSize.height-40)*Math.random())+40;
        }else if(i<14){//障碍物
            path = "#zaw"+(Math.ceil(Math.random(i)*3))+".png";
            tag = SpriteTag.rock;
            y=Math.floor((cc.winSize.height-40)*Math.random())+40;
        }else if(i<17){
            path = "#zs"+(Math.ceil(Math.random(i)*3))+".png";
            tag = SpriteTag.qiqiu;
            y=Math.floor((cc.winSize.height/4+10)*Math.random())+(cc.winSize.height/2+40);
        }
        this.rock = new cc.Sprite(path);
        this.addChild(this.rock,1,tag);

        this.rock.attr({
            x:cc.winSize.width*(1+Math.random()),
            y:y,
            scale:0.5
        });
        var action = cc.moveBy(g_moveTime,cc.p(-this.rock.x-20,0));
        this.removeObj.push(this.rock);
        this.rock.runAction(cc.sequence(action,cc.removeSelf(true)));
    }
});