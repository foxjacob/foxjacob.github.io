

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>疯狂火箭哥</title>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="full-screen" content="yes"/>
    <meta name="screen-orientation" content="portrait"/>
    <meta name="viewport" content="target-densitydpi=high-dpi,width=device-width"/>
    <meta name="x5-fullscreen" content="true"/>
    <meta http-equiv="Access-Control-Allow-Origin" content="*"/>
    <meta name="360-fullscreen" content="true"/>
    <script type="text/javascript" src="src/cocos2d-js-v3.1-lite.js" charset="UTF-8"></script>
    <script type="text/javascript" src="jquery-1.8.2.min.js" charset="UTF-8"></script>
    <script>
        var img = 'http://219.234.5.130/gameMS/games/suning/rocket/images/share.jpg';
        var link = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6b188f507885bddc&redirect_uri=http%3A%2F%2F219.234.5.130%2FgameMS%2Fgames%2Fsuning%2Frocket%2Fenter.action&response_type=code&scope=snsapi_base&state=oyWmst7402v9WxKbn0ZVCYbWYWSk#wechat_redirect";
        var title = '快来加入火箭送货团队，送货有好礼，就是这么任性！';
        var desc = '苏宁火箭哥';
        g_firstPlay = "0";
        g_playNum = "1";
		g_IsSub = "";
    </script>
    <script type="text/javascript" src="wechatAPI.js" charset="UTF-8"></script>
    <!-- 
    <script>
		alert(window.appMessage.timeLineLink);
	</script>
	 -->
    <style>
        body, canvas, div {
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            -khtml-user-select: none;
            /*-webkit-tap-highlight-color: rgba(0, 0, 0, 0);*/
        }
    </style>
</head>
<body style="padding:0; margin: 0;">
    <canvas id="gameCanvas" width="320" height="480"></canvas>
    <script type="text/javascript">
          window.onload = function(){
              cc.game.onStart = function(){
                  var mode = cc.sys.isMobile && window.navigator.userAgent.indexOf("MicroMessenger") != -1 ? cc.ResolutionPolicy.EXACT_FIT : cc.sys.isMobile ? cc.ResolutionPolicy.EXACT_FIT : cc.ResolutionPolicy.SHOW_ALL;

                  cc.view.setDesignResolutionSize(320,480,mode);
                  cc.view.resizeWithBrowserSize(true);
                  //load resources
                  MyLoaderScene.preload(g_resources, function () {
                      cc.director.runScene(new MyScene());
                  }, this);
              };
              cc.game.run("gameCanvas");
          };
    </script>
</body>
</html>