function Global() {
}

Global.prototype.levels = [];
Global.prototype.mute = true;

Global.prototype.graphicPacks = [];
Global.prototype.levelpacks =   null;
Global.prototype.fieldOffset    =   {x: 74, y: 272};
Global.prototype.cellSize       =   {x: 81, y: 81};
Global.prototype.fieldSize       =   {width: 6, height: 6};

Global.prototype.init = function()  {
    var levelpacks = Global.prototype.levelpacks;
    var storage = new TrinStorage();
    for (var i = 0; i < levelpacks.length; i++) {        
        var levels = [];
        var levelpack = levelpacks[i];
        for (var j = 0; j < levelpack.levels.length; j++)   {
            levels[j] = storage.load("level." + levelpack.name + "." + j);
            if (levels[j] === null) {
                levels[j] = -1;
            }   else    {
                levels[j] = parseInt(levels[j]);
            }

        }
        if (levels[0] === -1)   {
            levels[0] = 0;
        }
        Global.prototype.levels[levelpack.name] = levels;
    }
};

Global.prototype.save   = function()    {
    var storage = new TrinStorage();
    for(var key in Global.prototype.levels)     { 
        var levels = Global.prototype.levels[key];
        for (var i = 0; i < levels.length; i++) {
            storage.save("level." + key + "." + i, levels[i]);
        }
    }
}