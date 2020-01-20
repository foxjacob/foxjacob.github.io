<!DOCTYPE html>
<html lang="en">

<head>
    <title>你能精准地按出一秒吗？</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <script type="text/javascript" src="js/cashj.js"></script>
    <style type="text/css">
    * {
        margin: 0;
        padding: 0;
    }
    
    html,
    body {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    body {
        background: url(images/cashtop_bg01.jpg) repeat;
    }
    
    #box {
        width: 100%;
        height: 100%;
        background: url(images/cashtop_bg01.jpg) repeat;
        overflow: hidden;
        text-align: center;
    }
    
    #top {
        width: 200px;
        height: 110px;
        background: url(images/cashsecond_logo.png);
        background-size: 100% 100%;
        margin: 10% auto 0
    }
    
    #box h1 {
        font-size: 16px;
        font-weight: normal;
        padding: 10px;
        color: #666;
    }
    
    #content {
        width: 280px;
        background: #fff;
        border-radius: 20px;
        margin: 0 auto;
        line-height: 24px;
        padding: 5px 3px;
        color: #666;
        font-size: 18px;
    }
    
    #content h2 {
        font-size: 24px;
        display: inline;
        color: #f5484b;
    }
    
    #btn_bg {
        width: 110px;
        height: 110px;
        border-radius: 55px;
        background: #eee;
        margin: 10px auto;
        position: relative;
        border: 1px solid #f0d0d0;
    }
    
    #btn_bt {
        width: 90px;
        height: 90px;
        border-radius: 45px;
        background: #f5484b;
        line-height: 90px;
        position: absolute;
        top: 10px;
        left: 10px;
        border: 0;
    }
    
    #btn_bt span {
        color: #fff;
        font-size: 24px;
    }
    
    .active {
        -webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.4) inset;
        -ms-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.4) inset;
        box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.4) inset;
    }
    
    #box a {
        border-radius: 5px;
        background-color: rgb(228, 103, 106);
        display: block;
        width: 120px;
        height: 20px;
        padding: 5px;
        text-decoration: none;
        font-size: 16px;
        color: #fff;
        margin: 0 auto;
        margin-top: 10px;
    }
    
    #share {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9) url(images/cashsecond_share.png) no-repeat;
        background-position: top right;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 99;
        display: none;
    }
    
    #logo {
        width: 80px;
        height: 80px;
        background: url(cashFiilogo.png);
        background-size: 100% 100%;
        margin: 10px auto;
    }
    
    .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: block;
    }
    
    .footer img {
        display: block;
    }
    </style>
    <div id='wx_pic' style='margin:0 auto;display:none;'>
        <img src='images/cashbig_icon.jpg' />
    </div>
</head>

<body>
    <div id="box">
        <div id="top"></div>
        <h1>你能精确地按出一秒吗？</h1>
        <p id="content"></p>
        <div id="btn_bg">
            <div id="btn_bt">
                <span>按住</span>
            </div>
        </div>
        <a style="margin-top:20px" id="share_a" href="#">炫耀一下</a>
        <div id="share"></div>
    </div>
    
    <a class="footer" href="https://mp.weixin.qq.com/s/h0derngZtPCxIN2D3ubugw" target="_blank">
        <img src="images/123456.png" width="100%" />
    </a>
      
  <div style="display:none;">
	这里放统计代码
  </div>
</body>

</html>