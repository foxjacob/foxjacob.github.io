var GameOverLayer = cc.LayerColor.extend({
    // constructor

    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        this._super(cc.color(0, 0, 0, 180));
        var winSize = cc.director.getWinSize();

        var scoreLabel;
        //设置分享标题
        ShareText();
        if(g_prizeStatus == 1){
           /*var sprite = new cc.Sprite(res.a_overLJ);
            percentLabel = new cc.LabelTTF(g_percent,"Arail",16);
            percentLabel.color = cc.color.RED;
            percentLabel.x = winSize.width*0.573;
            percentLabel.y = winSize.height*0.545;
            this.addChild(percentLabel,2);

            scoreLabel = new cc.LabelTTF(g_packetNum,"Arail",16);
            scoreLabel.color = cc.color.RED;
            scoreLabel.x = winSize.width*0.62;
            scoreLabel.y = winSize.height*0.58;
            this.addChild(scoreLabel,2);

            var menuItemLink = new cc.MenuItemSprite(
                new cc.Sprite(res.a_btnPn),
                new cc.Sprite(res.a_btnPs),
                this.getPrize, this);

            g_share = 1;*/
        }else{
            //TODO：分享按钮。分享到朋友圈 获得游戏机会
            if(g_packetNum >= g_awardlimiting){
                var sprite = new cc.Sprite(res.a_success_png);

                var menuItemLink = new cc.MenuItemSprite(
                    new cc.Sprite(res.a_btnPn),
                    null,
                    this.getPrize, this);
                menuItemLink.setPosition(cc.p(winSize.width/2,winSize.height/2-120));

                g_share = 1;
                g_awardTime+=1;//可抽奖次数加一
            }else{
                var sprite = new cc.Sprite(res.a_fail_png);

                var menuItemLink = new cc.MenuItemSprite(
                    new cc.Sprite(res.a_btnShn),
                    null,
                    this.shareScore, this);
                menuItemLink.setPosition(cc.p(winSize.width*2/3+20,winSize.height/4));
                //再来一次
                var menuItemRestart = new cc.MenuItemSprite(
                    new cc.Sprite(res.a_btnAn),
                    null,
                    this.onRestart, this);
                menuItemRestart.attr({
                    scale:0.6,
                    anchorX:0.5,
                    anchorY:0.5,
                    x:winSize.width/3-20,
                    y:winSize.height/4
                });
                var menu = new cc.Menu(menuItemRestart);
                menu.setPosition(cc.p(0,0));
                this.addChild(menu,2);
            }
        }

        sprite.attr({
            anchorX:0.5,
            anchorY:0.5,
            x:winSize.width/2,
            y:winSize.height/2+40,
            scale:0.5
        });
        this.addChild(sprite,1);
        var str;
        if(g_roleSex=="man"){
            str = "哥";
        }else{
            str = "姐";
        }

        var NumLabel = new cc.LabelTTF(str,"Impact",18);
        NumLabel.color = cc.color(122,52,0);
        NumLabel.x = winSize.width*0.61;
        NumLabel.y = winSize.height*0.584+40;

        this.addChild(NumLabel,2);

//        setShareData();

        //分享按钮
        menuItemLink.scale=0.6;
        var menu1 = new cc.Menu(menuItemLink);
        menu1.setPosition(cc.p(0,0));
        this.addChild(menu1,2);

        //包裹数
        scoreLabel = new cc.LabelTTF(g_packetNum,"Arail",16);
        scoreLabel.color = cc.color.GREEN;
        scoreLabel.x = winSize.width*0.60+10;
        scoreLabel.y = winSize.height*0.54+28;
        this.addChild(scoreLabel,200);
        //游戏完成度
        g_percent =  this.getPrecent();
        var percentLabel = new cc.LabelTTF(g_percent,"Arail",16);
        percentLabel.color = cc.color.RED;
        percentLabel.x = winSize.width*0.48-6;
        percentLabel.y = winSize.height*0.47+33;
        this.addChild(percentLabel,200);
        if(g_packetNum==0){//解决：当数据为0时，不显示
            scoreLabel.setString("0");
            percentLabel.setString("0");
        }

        /*$.post("../sendScore.action",{"score":g_score,"prize":g_prizeStatus,"percent":g_percent},function(data){
        },"json");*/

    },
    onRestart:function (sender) {
        //全局变量初始化
        g_score = 0;
		g_packetNum = 0;
        g_time = 30;
        g_share = 0;
        g_gameStatus = 0;
        g_moveTime = 3;
        g_prizeStatus = 0;
        cc.director.resume();
        cc.director.runScene(new gameScene());
        //cc.director.runScene(new AwardScene());
    },
    shareScore: function () {
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
                    self.setOpacity(0);
                    cc.director.resume();
                    return false;
                }
                return false;
            }
        });
        cc.eventManager.addListener(listener,this.guidePng);
        cc.director.pause();
    },
    getPrecent:function(){
        var precent = 0;
        if(g_packetNum==0){
            precent = 0;
        }else if(g_packetNum<=5){
            precent = 10;
        }else if(g_packetNum<=10){
            precent = 30;
        }else if(g_packetNum<=20){
            precent = 50;
        }else if(g_packetNum<=50){
            precent = 70;
        }else if(g_packetNum<=80){
            precent = 85;
        }else{
            precent = 95;
        }
        return precent;
    },
    getPrize:function(){
        //跳转到抽奖层
        //cc.director.resume();
        g_gameStatus = 0;
        cc.director.resume();
        cc.director.runScene(new AwardScene());
        /*this.guidePng = new cc.Sprite("res/guide1.jpg");
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
        cc.eventManager.addListener(listener,this.guidePng);*/

 /*       if(cc.sys.browserType == cc.sys.BROWSER_TYPE_WECHAT){
//            g_prizeStatus  == 1  酒店
//            g_prizeStatus  == 0  彩票
//            window.location.href = "http://m.jdair.net/detail.jsp?pid=d6e3c5c5-4858-4516-ac56-ec4076b1f084";
            //记录数据
            \$.post("../sendScore.action",{"score":g_score,"prize":g_prizeStatus,"percent":g_percent},function(data){
            },"json");
        }*/
    }
});