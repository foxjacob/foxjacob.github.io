var play_loading = (function () {
    function play_loading() {
        this.msg = '游戏载入中…';
        this.onCreate();
    }

    play_loading.prototype.onCreate = function () {
        var content;
        content = document.createElement('div');
        content.setAttribute('id', 'play_loading');
        content.style.position = 'absolute';
        content.style.width = '100%';
        content.style.height = '100%';
        content.style.top = '0';
        content.style.textAlign = "center";
        content.style.bottom = '0';
        content.style.left = '0';
        content.style.right = '0';
        content.style.zIndex = 9999;
        content.style.backgroundColor = '#ffffff';
        content.innerHTML = '<img id="meiriq-loading-img" src="./68_logo1.png" style="position:relative;margin-top:' + (window.innerHeight / 2 - 150 - window.innerHeight / 7) + 'px;" />' +
        '<p id="loading-msg" style="font-weight:bold;color:#555555;position:absolute;bottom: 15%;width: 100%;text-align: center;"></p>' +
        '<p id="loading-title" style="font-weight:bold;color:#555555;position:absolute;bottom: 35%;width: 100%;text-align: center;font-family:微软雅黑;"><strong style="font-size: 24px;color:#000000;font-weight: bold;"></strong>加载中。。。</p>' +
        '<p id="loading-copyRight" style="font-weight:bold;color:#555555;position:absolute;bottom: 30%;width: 100%;text-align: center;font-family:微软雅黑;">请稍等</p>' +
        '<div style="width:100%;"><img src="./meiriq.png" style="position:relative;margin-top:10%;"/></div>';
        document.body.appendChild(content);

    };
    play_loading.prototype.changeMsg = function () {
        var mp = document.getElementById('meiriq-loading-msg');
        if (mp) {
            mp.innerHTML = this.msg;
        }
    };
    play_loading.prototype.setProgress = function (current, total) {

    };
    play_loading.prototype.finish = function () {
        var elem;
        return (elem = document.getElementById('play_loading')).parentNode.removeChild(elem);
    };
    return play_loading;
})();

var play_load = new play_loading();
play_load.changeMsg();
