/**
 * Created by Administrator on 14-12-3.
 */
var AwardResultLayer = cc.LayerColor.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        self = this;
        self._super();
        self.setOpacity(180);
        //cc.spriteFrameCache.addSpriteFrames(res.a_awardList);
        var popup = null;

        //缩放动作[0.5秒的时间，扩大到0.5大小]
        var action = new cc.ScaleTo(0.5,0.5);

        if(g_isAward==true){
            //显示中奖弹窗、马上领取按钮
            popup = cc.Sprite.create("#success.png");
            this.createSuccessMenu(action.clone());
        }else{
            //显示未中奖弹窗、再玩一次、分享到朋友圈
            popup = cc.Sprite.create("#fail.png");
            this.createFailMenu(action.clone());
        }
        popup.attr({
            anchorX:0.5,
            anchorY:0.5,
            x:cc.winSize.width/2,
            y:cc.winSize.height/2,
            scale:0//避免执行缩放动作时，先缩放
        });
        self.addChild(popup,0);
        popup.runAction(action);
    },
    createSuccessMenu:function(action){
        var acceptItem = new cc.MenuItemImage(
            "#btn_wdjp.png",
            null,
            this.OnAccept,this
        );
        acceptItem.attr({
            anchorX:0.5,
            anchorY:0.5,
            x:cc.winSize.width/2,
            y:cc.winSize.height/2-130,
            scale:0
        });
        var menu = new cc.Menu(acceptItem);
        menu.setPosition(0,0);
        self.addChild(menu,1);
        //创建奖品
        //alert("g_awardIndex的值为："+g_awardIndex);
        var path = "#jp"+g_awardIndex+".png";
        var award = cc.Sprite.create(path);
        award.attr({
            anchorX:0.5,
            anchorY:0.5,
            x:cc.winSize.width/2,
            y:cc.winSize.height/2-70,
            scale:0.5
        });
        self.addChild(award,1);
        //实行相同的动作
        //var action = new cc.ScaleTo(0.5,0.5);
        acceptItem.runAction(action);
    },
    createFailMenu:function(action){
        var str = g_playNum;
        if(g_playNum==0){
            str="0";
        }
        var NumLabel = new cc.LabelTTF(str,"Impact",18);
        NumLabel.color = cc.color(122,52,0);
        NumLabel.x = cc.winSize.width*0.61-60;
        NumLabel.y = cc.winSize.height*0.584-40;

        this.addChild(NumLabel,2);

        var resartItem = new cc.MenuItemImage(
            "#btn_replay.png",
            null,
            this.OnRestart,this
        );
        resartItem.attr({
            anchorX:0.5,
            anchorY:0.5,
            x:cc.winSize.width/2-60,
            y:cc.winSize.height/2-140,
            scale:0
        });
        var shareItem = new cc.MenuItemImage(
            "#btn_share.png",
            null,
            this.OnShare,this
        );
        shareItem.attr({
            x:cc.winSize.width/2+60,
            y:cc.winSize.height/2-140,
            anchorX:0.5,
            anchorY:0.5,
            scale:0
        });
        var menu = new cc.Menu(resartItem,shareItem);
        menu.setPosition(0,0);
        self.addChild(menu,1);
        //var action = new cc.ScaleTo(0.5,0.5);
        resartItem.runAction(action);
        shareItem.runAction(action.clone());
    },
    OnAccept:function(){
        if(g_IsSub!=""){//提交过手机号，转到查看我的奖品页面
            GetAward();
        }else{//未提交过手机号，转到提交手机号页面
            GetPhone();
        }
    },
    OnRestart:function(){
		g_packetNum = 0;
        g_time = 30;
        g_moveTime = 3;
        g_gameStatus = 0;
		g_packetNum = 0;
        cc.director.runScene(new MyScene());
    },
    OnShare:function(){
        var guide = cc.Sprite.create(res.a_guide_jpg);
        guide.attr({
            anchorX:0.5,
            anchorY:0.5,
            x:cc.winSize.width/2,
            y:cc.winSize.height/2,
            scale:0.5
        });
        self.addChild(guide,2);
        //添加监听事件
        var listener = cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan:self.onTouchBegan
        });
        cc.eventManager.addListener(listener,guide);
    },
    onTouchBegan:function(touch,event){
        //获取要操作的对象
        var target = event.getCurrentTarget();
        //转换坐标系
        var locationInNode = target.convertToNodeSpace(touch.getLocation());
        //获取对象的尺寸
        var size = target.getContentSize();
        //对象的举行范围
        var rect = cc.rect(0,0,size.width,size.height);
        if(cc.rectContainsPoint(rect,locationInNode)){
            cc.director.resume();
            self.removeChild(target,true);
        }
        return false;
    }
});