var g_percent = 100;
var g_score = 0;
var g_share = 0;
var g_moveTime = 3;

var g_gameStatus = 0;
var g_prizeStatus = 0;


//剩余时间
var g_time = 30;
//可以玩的次数
/*var g_playNum=30;
//是否为第一次游戏
var g_firstPlay=1;//1:是第一次玩 0:不是第一次玩
//用户是否已经提交过手机号
var g_IsSub=null;//如果为空，没有提交过手机号，否则，会传过来提交的手机号*/
//玩家选择的角色性别
var g_roleSex = "man";
var g_packetNum = 0;

//可以抽奖的次数
var g_awardTime = 0;
//是否中奖
var g_isAward = false;
//抽中索引的下标值为0【1~4】
var g_awardIndex=4;
//参与抽奖的限制
var g_awardlimiting = 15;
//触摸方式
var g_touchMethod = false;//false:按住上下移动 true:时刻坠落

var self=null;


if(typeof TagOfLayer == "undefined") {
    var TagOfLayer = {};
    TagOfLayer.background = 0;
    TagOfLayer.Animation = 1;
    TagOfLayer.GameLayer = 2;
    TagOfLayer.Status = 3;
};

// collision type for chipmunk
/*if(typeof SpriteTag == "undefined") {
    var SpriteTag = {};
    SpriteTag.player = 0;
    SpriteTag.rock = 1;
    SpriteTag.packet = 2;
    SpriteTag.qiqiu = 3;
};*/
SpriteTag = {
    player:0,
    rock:1,
    packet:2,
    qiqiu:3
};

var g_AwardIndex = [
    4,1,5,3,
    3,0,0,4,
    5,0,0,2,
    2,4,3,5
];