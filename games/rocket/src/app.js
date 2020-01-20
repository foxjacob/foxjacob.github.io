var StartLayer = cc.LayerColor.extend({
    sprite:null,
    IsShow:false,//是否显示提示框？
    ctor:function () {
        this._super();
        //this.getDate();
        cc.spriteFrameCache.addSpriteFrames(res.a_menuList);
        /*var size = cc.winSize;

        var start = new cc.MenuItemImage(
            res.a_btnSn,
            res.a_btnSs,
            this.onPlay, this);
        start.attr({
            x: size.width/2,
            y: size.height/8,
            anchorX: 0.5,
            anchorY: 0.5,
            scale:0.5
        });

        this.menu = new cc.Menu(start);
        this.menu.x = 0;
        this.menu.y = 0;
        this.addChild(this.menu, 10);

        this.sprite = new cc.Sprite(res.a_bg);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale:size.height / 960
        });
        this.addChild(this.sprite, 0);

        this.sprite1 = new cc.Sprite(res.a_bgContent);
        this.sprite1.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale:size.height / 980
        });
        this.addChild(this.sprite1, 0);*/
        //create bg
        var bg = cc.Sprite.create(res.a_bg_index);
        bg.attr({
            anchorX:0.5,
            anchorY:0.5,
            x:cc.winSize.width/2,
            y:cc.winSize.height/2,
            scale:0.5
        });
        this.addChild(bg,0);
        //显示“请选择游戏角色”
        // font definition【自定义字体名fontDefBlueStroke】
        /*var fontDefBlueStroke = new cc.FontDefinition();
        fontDefBlueStroke.fontName = "Impact";//系统
        fontDefBlueStroke.fontSize = 20;//字体大小
        fontDefBlueStroke.textAlign = cc.TEXT_ALIGNMENT_CENTER;//居中显示
        fontDefBlueStroke.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        fontDefBlueStroke.fillStyle = cc.color(0,255,0);//主体颜色

        // stroke描边
        fontDefBlueStroke.strokeEnabled = true;//显示描边
        fontDefBlueStroke.strokeStyle = cc.color(0,0,0);//描边颜色

        var label = cc.LabelTTF.create("请选择游戏角色",fontDefBlueStroke);
        label.attr({
            x:cc.winSize.width/2,
            y:cc.winSize.height/2+100
        });
        this.addChild(label,1);*/

        //TODO：点击菜单时，菜单最好有特效
        //创建游戏角色选择菜单
        var manSprite = new cc.MenuItemImage(
            "#hjg0.png",
            "#hjg1.png",
            this.OnSelectMan,this
        );
        manSprite.attr({
            x:cc.winSize.width/2-70,
            y:cc.winSize.height/2+20,
            scale:0.3
        });

        var womanSprite = new cc.MenuItemImage(
            "#hjj0.png",
            "#hjj1.png",
            this.OnSelectWoman,this
        );
        womanSprite.attr({
            x:cc.winSize.width/2+70,
            y:cc.winSize.height/2+20,
            scale:0.3
    });

        var menu = new cc.Menu(manSprite,womanSprite);
        menu.setPosition(cc.p(0,0));
        this.addChild(menu,1);
		//alert("g_firstPlay = "+g_firstPlay+"  g_playNum = "+g_playNum+"  g_IsSub = " +g_IsSub);

        if(g_firstPlay==1){
            //第一次玩，显示“欢迎加入火箭送货团队，初次见面，奉上5元苏宁易购优惠券一张。立刻开始疯狂送货吧！”
            this.createMessage();
            this.IsShow=true;
        }

        return true;
    },/*,

    onPlay: function () {
        this.removeChild(this.menu,true);
        cc.director.runScene(new gameScene());
    }*/
    OnSelectMan:function(){
        //显示提示框时，不响应
        if(this.IsShow==true) return;
        g_roleSex="man";
        this.judge();
    },
    OnSelectWoman:function(){
        if(this.IsShow==true) return;
        g_roleSex="woman";
        this.judge();
    },
    /*getDate:function(){
        GetDate();
    },*/
    createMessage:function(){
      //create popup
      this.popup = cc.Sprite.create("#tk_5yuan.png");
      this.popup.attr({
         x:cc.winSize.width/2,
         y:cc.winSize.height/2,
         scale:0.5
      });
      this.addChild(this.popup,2);
      //设置层的透明度
      //this.setOpacity(100);
      //create button
      this.start = new cc.MenuItemImage(
          "#btn_5yuan.png",
          null,
          this.OnStart,this
      );
      this.start.attr({
          x:cc.winSize.width/2,
          y:cc.winSize.height/2-105,
          anchorX:0.5,
          anchorY:0.5,
          scale:0.5
      });
      //create menu
      var menu = new cc.Menu(this.start);
      menu.setPosition(cc.p(0,0));
      this.addChild(menu,3);
    },
    OnStart:function(){
        this.IsShow=false;
        this.setOpacity(0);
        //TODO：先执行一系列的动作，再隐藏
        this.popup.visible=false;
        this.start.visible=false;
    },
    judge:function(){
        /*if(g_playNum<=0){
            //TODO:显示分享到朋友圈可获得抽奖机会
            this.createShare();
            //TODO:图片的切换效果
        }else{
            //切换场景
            cc.director.runScene(new gameScene());
        }*/
        //切换场景
        cc.director.runScene(new gameScene());
    }/*,
    createShare:function(){
        //显示该精灵时，不响应点击
        this.IsShow=true;
        var sharePopup = cc.Sprite.create(res.a_guide_jpg);
        sharePopup.attr({
            x:cc.winSize.width/2,
            y:cc.winSize.height/2,
            scale:0.5
        });
        this.addChild(sharePopup,4);

        //create button
        var shareItem= new cc.MenuItemImage(
            res.a_btnAn,
            res.a_btnAs,
            this.OnShare,this
        );
        shareItem.attr({
            x:cc.winSize.width/2,
            y:cc.winSize.height/2,
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
    }*/
});

var MyScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
		cc.audioEngine.playMusic(res.a_bgMusic_mp3,true);
        var layer = new StartLayer();
        this.addChild(layer);
    }
});