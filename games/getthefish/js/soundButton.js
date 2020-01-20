function SoundButton() {
    var switchFunction = function() {
        var button = arguments.callee.button;
        Global.prototype.mute = !Global.prototype.mute;
        TrinStorage.prototype.save("sound.mute", Global.prototype.mute);
        if (Global.prototype.mute) {
            button.switchAnimation("bSoundOff");
            TrinSound.prototype.muteAll();
        } else {
            button.switchAnimation("bSoundOn");
            TrinSound.prototype.unMuteAll();
        }
    };
    switchFunction.button = this;
    SoundButton.superclass.constructor.apply(this, [function(){}, "bCredits"]);
    if (!Global.prototype.mute) {
    }
    this.active = this.visible = TrinSound.prototype.soundsLoaded;
}

extend(SoundButton, TrinButton);

SoundButton.prototype.update = function(){
 
};