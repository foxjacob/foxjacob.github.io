var StatusLayer = cc.Layer.extend({
    labelMeter:null,
    labelTimer:null,

    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();

        var winsize = cc.director.getWinSize();
        var timePanel = new cc.Sprite(res.a_timer);
        timePanel.attr({
            x:42,
            y:winsize.height-12,
            scale:0.5,
            anchorX:0.5,
            anchorY:0.5
        });
        this.addChild(timePanel,5);

        var milePanel = new cc.Sprite(res.a_baoguo);
        milePanel.attr({
            x:winsize.width-42,
            y:winsize.height-12,
            scale:0.5,
            anchorX:0.5,
            anchorY:0.5
        });
        this.addChild(milePanel,5);

        var chancePanel = new cc.Sprite(res.a_yx);
        chancePanel.attr({
            x:winsize.width/2,
            y:winsize.height-12,
            scale:0.6,
            anchorX:0.5,
            anchorY:0.5
        });
        this.addChild(chancePanel,5);

        this.labelTimer = new cc.LabelTTF("", "Arail", 13,cc.TEXT_ALIGNMENT_CENTER);
        this.labelTimer.setPosition(cc.p(66, winsize.height - 14.5));
        this.labelTimer.anchorX = 0.5;
        this.labelTimer.anchorY = 0.5;
        this.labelTimer.setColor(cc.color(255,0,0));
        this.addChild(this.labelTimer,10);
        this.labelTimer.setString(g_time+"\"");

        this.labelMeter = new cc.LabelTTF("0", "Arail", 13,cc.TEXT_ALIGNMENT_CENTER);
        this.labelMeter.setPosition(cc.p(winsize.width-25, winsize.height - 14.5));
        this.labelMeter.anchorX = 0.5;
        this.labelMeter.anchorY = 0.5;
        this.labelMeter.setColor(cc.color(255,0,0));
        this.addChild(this.labelMeter,10);
        //可玩游戏次数
        this.labelNum = new cc.LabelTTF("0", "Arail", 13,cc.TEXT_ALIGNMENT_CENTER);
        this.labelNum.setPosition(cc.p(winsize.width/2+40, winsize.height-14));
        this.labelNum.anchorX = 0.5;
        this.labelNum.anchorY = 0.5;
        this.labelNum.setColor(cc.color(0,0,255));
        this.addChild(this.labelNum,10);
        this.labelNum.setString(g_playNum);
    },

    addCoin:function (num) {
        this.coins += num;
    },

    updateMeter:function (px) {
        this.labelMeter.setString(g_packetNum);
    },

    updateTimer:function (time) {
        if(time<0){
            time = 0;
        }
        this.labelTimer.setString(time + "\"");
        this.labelNum.setString(g_playNum);
    }
});
