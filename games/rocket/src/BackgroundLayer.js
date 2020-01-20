/**
 * Created by will on 2014/11/2.
 */
var BackgroundLayer = cc.Layer.extend({
    removeObj:[],
    flag:true,

    ctor: function(){
        this._super();
        this.init();
    },
    init:function(){
        this._super();
//        cc.spriteFrameCache.addSpriteFrame(res.a_spriteList);
        var size = cc.winSize;

        //静态背景
        this.sprite = new cc.Sprite(res.a_bgc);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale:size.height/960
        });
        this.addChild(this.sprite, 0);

        var bgm = new cc.Sprite(res.a_bgm);
        bgm.attr({
            anchorX:0,
            anchorY:0,
            x:0,
            y:-30,
            scale:0.8
        });
        this.addChild(bgm);
        this.removeObj.push(bgm);
        var action = cc.moveTo(4,cc.p(-500,-10));
        bgm.runAction(cc.sequence(action,cc.removeSelf(true)));

        //动态背景
        this.schedule(function(){
            if(g_time >0){
                var bgm = new cc.Sprite(res.a_bgm);
                bgm.attr({
                    anchorX:0,
                    anchorY:0,
                    x:size.width*2+size.width*Math.random(),
                    y:0,
                    scaleX:0.6,
                    scaleY:0.8
                });
                this.addChild(bgm);
                this.removeObj.push(bgm);
                var action = cc.moveTo(6,cc.p(-500,-10));
                bgm.runAction(cc.sequence(action,cc.removeSelf(true)));
            }

            /*var bgmc1 = new cc.Sprite(res.a_bgc1);
            bgmc1.attr({
                anchorX:0,
                anchorY:0,
                x:size.width+size.width*Math.random(),
                y:size.height/3+size.height/2*Math.random()
            });
            this.addChild(bgmc1);
            var action1 = cc.moveTo(g_moveTime,cc.p(-200,bgmc1.getPosition().y));
            bgmc1.runAction(cc.sequence(action1,cc.removeSelf(true)));

            var bgmc2 = new cc.Sprite(res.a_bgc2);
            bgmc2.attr({
                anchorX:0,
                anchorY:0,
                x:size.width+size.width*Math.random(),
                y:size.height/2+size.height/2*Math.random()
            });
            this.addChild(bgmc2);
            var action2 = cc.moveTo(g_moveTime,cc.p(-200,bgmc2.getPosition().y));
            bgmc2.runAction(cc.sequence(action2,cc.removeSelf(true)));

            var bgmc3 = new cc.Sprite(res.a_bgc2);
            bgmc3.attr({
                anchorX:0,
                anchorY:0,
                x:size.width,
                y:size.height/2+size.height/2*Math.random()
            });
            this.addChild(bgmc3);
            var action3 = cc.moveTo(g_moveTime,cc.p(-100,bgmc3.getPosition().y));
            bgmc3.runAction(cc.sequence(action2,cc.removeSelf(true)));*/
        },2.7);

        this.scheduleUpdate();
    },

    update:function(){
        /*if(g_time <= 0){
            if(this.flag){
                this.flag = false;
                var bg = new cc.Sprite(res.a_overBg);
                bg.x = cc.winSize.width;
                bg.y = 0;
                bg.anchorX=0;
                bg.anchorY=0;
                bg.scale = cc.winSize.height/960;
                this.addChild(bg,20);
                var action = cc.moveTo(2,cc.p(0,0));
                bg.runAction(action);
            }
        }*/
    }
});