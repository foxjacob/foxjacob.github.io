/**
 * Created by Will on 2014/10/8.
 */
var gameScene = cc.Scene.extend({
    gameLayer:null,
    timerID:null,
    px:0,

    onEnter:function () {
        this._super();
        cc.spriteFrameCache.addSpriteFrames(res.a_spriteList);
        this.gameLayer = new cc.Layer();
        this.gameLayer.addChild(new BackgroundLayer(), 0, TagOfLayer.background);
        this.gameLayer.addChild(new AnimationLayer(), 0, TagOfLayer.Animation);
        this.addChild(this.gameLayer);
        this.addChild(new StatusLayer(),0,TagOfLayer.Status);

//        var self = this;
//        this.timerID = setInterval(
//            function(){
//                if(g_time <= 0){
//                    cc.eventManager.removeAllListeners();
//                    this.overLabel = new cc.LabelTTF("没油啦！紧急迫降！","Arail",30);
//                    this.overLabel.color = cc.color.RED;
//                    this.overLabel.attr({
//                        x:cc.winSize.width/2,
//                        y:cc.winSize.height/2,
//                        anchorX:0.5,
//                        anchorY:0.5
//                    });
//                    self.addChild(this.overLabel);
//                }
//                g_time --;
//            },1000
//        );
        this.schedule(function () {
                /*if(g_time <= 0){
                    cc.eventManager.removeAllListeners();
                    this.overLabel = new cc.LabelTTF("没油啦！紧急迫降！","Arail",30);
                    this.overLabel.color = cc.color.RED;
                    this.overLabel.attr({
                        x:cc.winSize.width/2,
                        y:cc.winSize.height/2,
                        anchorX:0.5,
                        anchorY:0.5
                    });
                    this.addChild(this.overLabel);
                }*/
                g_time --;
            /*moveTime -= 0.1;
            if(g_moveTime <= 0.5){
                g_moveTime = 0.5;
            }*/
        },1);
        this.scheduleUpdate();
        this.initIntroduce();
    },


    update:function(){
        var statusLayer = this.getChildByTag(TagOfLayer.Status);
        statusLayer.updateTimer(g_time);

        if(g_time > 0){
            statusLayer.updateMeter();
        }

        if(g_gameStatus != 0){
            cc.director.pause();
            if(g_gameStatus == 2){
                /*var prizePanel = new cc.Sprite(res.a_prizePanel);
                prizePanel.attr({
                    x:cc.winSize.width/2,
                    y:cc.winSize.height/2,
                    anchorX:0.5,
                    anchorY:0.5,
                    scale:0.5
                });
                this.addChild(prizePanel,20);

                var goonMenu = new cc.MenuItemImage(
                    res.a_btnGn,
                    res.a_btnGs,
                    function(){
                        g_gameStatus = 0;
                        g_time = g_tempTime;
                        this.removeChild(prizePanel,true);
                        this.removeChild(menu,true);
                        cc.director.resume();
                    },this
                );
                goonMenu.attr({
                    scale:0.5,
                    anchorX:0.5,
                    anchorY:0.5
                });
                var menu = new cc.Menu(goonMenu);
                menu.x = cc.winSize.width/2;
                menu.y = cc.winSize.height/3+10;
                this.addChild(menu,20);*/
            }else{
                //stop bg music
                //cc.audioEngine.stopMusic();

                //clearInterval(this.timerID);
                cc.eventManager.removeAllListeners();
                this.addChild(new GameOverLayer(),20);
            }
        }
    },
    initIntroduce:function(){
        var introduce = new cc.Sprite(res.a_introduce);
        introduce.attr({
            anchorX:0.5,
            anchorY:0.5,
            x:cc.winSize.width/2,
            y:cc.winSize.height/2+20,
            scale:cc.winSize.width/640
        });
        this.addChild(introduce,10);
        var self = this;
        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var target = event.getCurrentTarget();
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                if(cc.rectContainsPoint(rect, locationInNode)) {
                    self.removeChild(introduce,true);
                    //alert("g_playNum的值:"+g_playNum+"g_IsSub的值："+g_IsSub);
                    self.judge();
                    return false;
                }
                return false;
            }
        });
        cc.eventManager.addListener(listener,introduce);
        cc.director.pause();
    },
    judge:function(){
        if(g_playNum<=0){
            //TODO:显示分享到朋友圈可获得抽奖机会
			cc.eventManager.removeAllListeners();
            this.createShare();
            //TODO:图片的切换效果
        }else{
            g_playNum--;
            cc.director.resume();
        }
    },
    createShare:function(){
		cc.director.pause();
        //显示该精灵时，不响应点击
        this.IsShow=true;
        var sharePopup = cc.Sprite.create(res.a_wanle_png);
        sharePopup.attr({
            x:cc.winSize.width/2,
            y:cc.winSize.height/2,
            scale:0.5
        });
        this.addChild(sharePopup,4);

        //create button
        var shareItem= new cc.MenuItemImage(
            res.a_btnShn,
            null,
            this.OnShare,this
        );
        shareItem.attr({
            x:cc.winSize.width/2,
            y:cc.winSize.height/2-130,
            anchorX:0.5,
            anchorY:0.5,
            scale:0.5
        });
        //create menu
        var menu = new cc.Menu(shareItem);
        menu.setPosition(cc.p(0,0));
        this.addChild(menu,4);
    },
    OnShare:function(){
        this.guidePng = new cc.Sprite(res.a_guide_jpg);
        this.guidePng.attr({
            anchorX:0.5,
            anchorY:0.5,
            x:cc.winSize.width/2,
            y:cc.winSize.height/2,
            scale:cc.winSize.height/960
        });
        this.addChild(this.guidePng,100);

        var self = this;
        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var target = event.getCurrentTarget();
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                if(cc.rectContainsPoint(rect, locationInNode)) {
                    self.removeChild(target,true);
                    return false;
                }
                return false;
            }
        });
        cc.eventManager.addListener(listener,this.guidePng);
    }
});
