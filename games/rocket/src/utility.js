/**
 * Created by Administrator on 14-12-1.
 */
function GetDate(){
    /*//是否为第一次玩
    g_firstPlay=false;
    //可以玩的次数
    g_playNum=3;
    //是否提交过手机号
    g_IsSub=false;*/

    //用户的最多抽奖次数为99次
    //判断从后台传过来的数据是不是小于99次
    //要不要获取用户可以抽奖的次数
    //g_awardTime=0;
    //判断从后台传过来的数据是否有效
    //第一次玩次数为3,否则应该是大于0
}

//跳转到提交手机号页面
function GetPhone(){
    window.location.href = "get_phone.html";
}

//跳转到提交手机号页面
function GetAward(){
    window.location.href = "getMyGiftInfo.jsp";
}

//分享成功之后，调回到游戏页面
function hrefSU(){
	//alert("g_IsSub的值:"+g_IsSub);
    if(g_IsSub==""){
        window.location.href ="get_phone.html";
    }else{
        window.location.href = "http://m.suning.com/";
    }
}
//调用后台抽奖函数
function Post(){
    $.post("drawAward.action",function(data){
        //alert(data.msg);
        //alert("后台Post传过来的抽奖数据：【1~4】"+data.msg);
        g_awardIndex = data.msg;//4不中奖
        //alert("后台Post传过来的抽奖数据：【1~4】"+g_awardIndex);
    });
}

function ShareText(){
	window.appMessage.tTitle ="我在苏宁双12狂奔送货"+g_packetNum+"件，谁不服，来挑战！";
}

