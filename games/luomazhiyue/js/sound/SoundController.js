
SoundController.FX = "fx";
SoundController.MUSIC = "music";
function getHiddenProp(){
    
    var prefixes = ['webkit','moz','ms','o'];
    
    // if 'hidden' is natively supported just return it
    if ('hidden' in document) return 'hidden';
    
    // otherwise loop over all the known prefixes until we find one
    for (var i = 0; i < prefixes.length; i++){
        if ((prefixes[i] + 'Hidden') in document) 
            return prefixes[i] + 'Hidden';
    }

    // otherwise it's not supported
    return null;
}
function isHidden() {
    var prop = getHiddenProp();

    if (!prop) return false;
    
    return document[prop];
}

function visChange() {
    SoundController.getInstance().muteSound(isHidden());
}
//************* SINGLETON ****************//
SoundController.getInstance = function(){
    if(SoundController.prototype.instance == null){
        
        SoundController.prototype.instance = new SoundController();
    }
    return SoundController.prototype.instance;
}
SoundController.pauseBGM = function() {
   
    SoundController.getInstance().muteSound(true);
}
SoundController.resumeBGM = function() {
   
    SoundController.getInstance().muteSound(false);
}
function onVisibilityChange(evt) {
    if(evt.target.webkitHidden) {

        SoundController.getInstance().muteSound(true);
    } else {
        SoundController.getInstance().muteSound(false);
    }
}
function SoundController(){
    
    this.sStatus = {fx:false, music:false};
    this.isMuted = false;
    var visProp = getHiddenProp();
    if (visProp) {
        var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
        window.addEventListener("blur", SoundController.pauseBGM, false);
        window.addEventListener("pagehide", SoundController.pauseBGM, false);
        window.addEventListener("focus", SoundController.resumeBGM, false);
        window.addEventListener("pageshow", SoundController.resumeBGM, false);
        
        document.addEventListener(evtname, visChange);
    }
    

    
    this.soundStatus = {fx:true, music:true};
    var types = {};
    types[SoundController.FX] = {muted:false, sounds:new Array()};
    types[SoundController.MUSIC] = {muted:false, sounds:new Array()};

    this.play = function($id, $props, delay, startPosition, loop){
       
        if(arguments.length < 3) {
            delay = 0;
        }
        if(arguments.length < 4) {
            startPosition = 0;
        }
        if(arguments.length < 5) {
            loop = 0;
        }
        
        
        var stype = queue.getItem($id).stype;
        
        var type = types[stype];
        var snd = createjs.Sound.play($id, $props,delay,startPosition, loop);

        snd.id = $id;
        snd.stype = stype;
        snd.setMute(type.muted);
        type.sounds.push(snd);

        snd.addEventListener("complete", onComplete);

        return snd;
    }
    this.muteSound = function(b) {

        if(b) {
            if(this.isMuted) {
                return;
            }
            this.sStatus = {fx:types.fx.muted, music:types.music.muted};
            this.setMute('fx', true);
            this.setMute('music', true);
            this.isMuted = true;
        } else {
            if(this.isMuted === false) {
                return;
            }
            this.isMuted = false;
            this.setMute('fx', this.sStatus.fx);
            this.setMute('music', this.sStatus.music);
        }
    };
    this.findSoundAndRemove = function($id) {
        var o = this.findSound($id);
        if(o) {
            this.stop(o);
        }
    };
    this.findSound = function($id) {
        
        var stype = queue.getItem($id).stype;
        var type = types[stype];
        var size = type.sounds.length;

        for(var i = 0; i<size; i++){
            if(type.sounds[i].id == $id){
              
                return type.sounds[i];
            }
        }
        
        return null;
    };
    this.stop = function($snd){
        $snd.stop();
        removeSound($snd);
    }

    this.setMute = function($type, $muted){
        var type = types[$type];
        type.muted = $muted;
        this.soundStatus[$type] = !$muted;
       
        var type = types[$type];
        var size = type.sounds.length;
        var snd;

        type.muted = $muted;
        this.soundStatus[$type] = !$muted;
        for(var i = 0; i<size; i++){
            type.sounds[i].setMute($muted);
        }
    }


    function removeSound($snd){
        var type = types[$snd.stype];
        var size = type.sounds.length;
        
        for(var i = 0; i<size; i++){
            if(type.sounds[i].uniqueId == $snd.uniqueId){
                type.sounds.splice(i, 1);
               
                return;
            }
        }
    }

    function onComplete($event){
        var snd = $event.target;
        snd.removeEventListener("complete", onComplete);
        removeSound(snd);
    }

}