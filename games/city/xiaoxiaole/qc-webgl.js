/**
 * @author weism
 * 支持WebGL的手机白名单，不在此文件中指定的android手机将认为不支持webgl渲染
 */
qc.isSupportWebGL = function(game) {
    if (game.device.browser === qc.Device.CHROME ||
        game.device.browser === qc.Device.SAFARI) {
        // 相信Chrome和Safari浏览器的判断
        return true;
    }
    
    // 其他浏览器在android下就不要相信了，挂羊头卖狗肉的太多
    // TODO: 测试通过的才能加进来，这需要逐步丰富起来
    return false;
};
