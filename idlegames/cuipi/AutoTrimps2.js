// ==UserScript==
// @name         AutoTrimpsV2+unimod
// @namespace    https://github.com/unihedro/AutoTrimps
// @version      2.1.5.5u3-unimod-4-17-2017+Modular
// @description  try to take over the world!
// @author       zininzinin, spindrjr, belaith, ishakaru, genBTC, Unihedron
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @grant        none
// ==/UserScript==
var ATversion = '2.1.5.5u3-unimod-4-17-2017+模块';

////////////////////////////////////////////////////////////////////////////////
//Main Loader Initialize Function (loads first, load everything else)///////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////
var atscript = document.getElementById('AutoTrimps-script')
  , base = 'https://unihedro.github.io/AutoTrimps/'
  , module = 'modules/'
  ;
if (atscript !== null) {
    base = atscript.getAttribute('src').replace(/AutoTrimps2\.js$/, '');
}
//Load stuff needed to load other stuff:
document.head.appendChild(document.createElement('script')).src = base + module + 'utils.js';

function initializeAutoTrimps() {
    loadPageVariables();
    document.head.appendChild(document.createElement('script')).src = base + 'NewUI2.js';
    document.head.appendChild(document.createElement('script')).src = base + 'Graphs.js';
    //Load modules:
    var modules = ['query', 'upgrades', 'heirlooms', 'buildings', 'jobs', 'equipment', 'gather', 'autostance', 'battlecalc', 'automaps', 'autobreedtimer', 'dynprestige', 'autofight', 'scryer', 'magma', 'portal', 'other'];
    for (var i=0,len=modules.length; i<len; i++) {
        document.head.appendChild(document.createElement('script')).src = base + module + modules[i] + '.js';
    }
    //Autoperks
    if (typeof(AutoPerks) === 'undefined')
        document.head.appendChild(document.createElement('script')).src = base + module + 'autoperks.js';
    else
        debug('AutoPerks现在包含在Autotrimps中，请禁用AutoPerks的tampermonkey脚本来删除此消息！', '*spinner3');
    toggleSettingsMenu();
    toggleSettingsMenu();
    // dank dark graphs by Unihedron
    if (game.options.menu.darkTheme.enabled == 2) {
        const $link = document.createElement('link');
        $link.rel = "stylesheet";
        $link.type = "text/css";
        $link.href = base + 'dark-graph.css';
        document.head.appendChild($link);
    }
    //
    debug('AutoTrimps v' + ATversion + ' 已加载!', '*spinner3');    
}

function printChangelog() {
    tooltip('confirm', null, 'update', '\
<br><b style="background-color:#002b3b">4/17 v2.1.5.5u3</b> - 修复改进自动存储\
<br>修复了一个特定的愚蠢的错误，这是如何通过图形重写一些不必要的功能引起的\
<br><b style="background-color:#b93e00">4/16 v2.1.5.5u2</b> - 做更多的地图堆栈，如果不够健康\
<br><span style="opacity:.8">不再强制购买存储空间关闭</span>\
<br><b style="background-color:#840036">4/15 v2.1.5.5u1</b> - 新设置购买超频\
<br><span style="opacity:.75"><b style="background-color:#2c3c8a">4/14 v2.1.5.4u6</b> - 改进的托儿所地图和更好的自动存储 <b class="AutoEggs">4/14 v2.1.5.4u5 - 自动繁殖</b>, 更多的4.3支持<b style="background-color:#D8000B">4/12 v2.1.5.4u4</b> AutoTrimps生命周期更改 <b style="background-color:#105E28">4/11 v2.1.5.4u3</b> 固定尖塔养殖，自动供应区 <b style="background-color:#611047">4/10 v2.1.5.4u2</b> 声望跳过2 <b style="background-color:#50000D">4/09 v2.1.5.4u1</b> Magma: AutoGen, AutoGen2\
<br><b style="background-color:#162955">4/08 v2.1.5.3u6</b> ForcePresZ <b style="background-color:#294D00">4/07 u5</b> FinishC2, PowerSaving <b style="background-color:#294D00">u4</b> 喜欢金属，预尖端苗圃 <b style="background-color:#6E1236">u3</b> LinearZ, SupplyWall, OneTimeOnly <b style="background-color:#552700">u2</b> TrimpleZ, ScryerDieZ, IgnoreCrits <b style="background-color:#277552;">4/06 u1</b> Don\'t buy Coords / Skip challenge maps</span>\
<br><u>如果你有任何错误/问题，请上报给我！ 你可以在Discord找到我：<span style="background-color:#ddd;color:#222">Uni#8610</span></u>\
<br><a href="https://github.com/Unihedro/AutoTrimps/commits/gh-pages" target="#">查看提交历史记录</a> (if you care)\
', 'cancelTooltip()', '脚本更新日志 ' + ATversion);
}
////////////////////////////////////////
//Main DELAY Loop///////////////////////
////////////////////////////////////////

//Magic Numbers/////////////////////////
var runInterval = 100;      //How often to loop through logic
var startupDelay = 2000;    //How long to wait for everything to load

setTimeout(delayStart, startupDelay);
function delayStart() {
    initializeAutoTrimps();
    printChangelog();
    setTimeout(delayStartAgain, startupDelay);
}
function delayStartAgain(){
    setInterval(mainLoop, runInterval);
    setInterval(guiLoop, runInterval*10);
    updateCustomButtons();
    document.getElementById('Prestige').value = autoTrimpSettings.PrestigeBackup.selected;
    //MODULESdefault = MODULES;
    //MODULESdefault = Object.assign({}, MODULES);
    MODULESdefault = JSON.parse(JSON.stringify(MODULES));
}

////////////////////////////////////////
//Global Main vars /////////////////////
////////////////////////////////////////
////////////////////////////////////////

var AutoTrimpsDebugTabVisible = true;
var enableDebug = true; //Spam console
var autoTrimpSettings = {};

var MODULES = {};
var MODULESdefault = {};
var autoTrimpVariables = {};
var bestBuilding;
var scienceNeeded;
var breedFire = false;

var shouldFarm = false;
var enoughDamage = true;
var enoughHealth = true;

var baseDamage = 0;
var baseBlock = 0;
var baseHealth = 0;

var preBuyAmt;
var preBuyFiring;
var preBuyTooltip;
var preBuymaxSplit;

var ATrunning = true;
var magmiteSpenderChanged = false;
var BAFsetting, oldBAFsetting;

var currentworld = 0;
var lastrunworld = 0;
var aWholeNewWorld = false;
var needGymystic = true;
var heirloomFlag = false;
var heirloomCache = game.global.heirloomsExtra.length;

//reset stuff that may not have gotten cleaned up on portal
function mainCleanup() {
    lastrunworld = currentworld;
    currentworld = game.global.world;
    aWholeNewWorld = lastrunworld != currentworld;
    //run once per portal:
    if (currentworld == 1 && aWholeNewWorld) {
        lastHeliumZone = 0;
        zonePostpone = 0;
        //for the dummies like me who always forget to turn automaps back on after portaling
        if(getPageSetting('RunUniqueMaps') && !game.upgrades.Battle.done && autoTrimpSettings.AutoMaps.enabled == false)
            settingChanged("AutoMaps");
        return true; // Do other things
    }
}

////////////////////////////////////////
//Main LOGIC Loop///////////////////////
////////////////////////////////////////
////////////////////////////////////////
function mainLoop() {
    if (ATrunning == false) return;
    ATrunning = true;
    if(game.options.menu.showFullBreed.enabled != 1) toggleSetting("showFullBreed");    //more detail
    addbreedTimerInsideText.innerHTML = parseFloat(game.global.lastBreedTime/1000).toFixed(1) + 's'; //add hidden next group breed timer;
    if (armycount.className != "tooltipadded") addToolTipToArmyCount();
    const newZone = currentworld != game.global.world;
    if ((newZone && mainCleanup()) // Z1 new world
            || portalWindowOpen // in the portal screen (for manual portallers)
            || (!heirloomsShown && heirloomFlag) // closed heirlooms screen
            || (heirloomCache != game.global.heirloomsExtra.length)) { // inventory size changed (a drop appeared)
            // also pre-portal: portal.js:111
        if (getPageSetting('AutoHeirlooms2')) autoHeirlooms2(); //"Auto Heirlooms 2" (heirlooms.js)
        else if (getPageSetting('AutoHeirlooms')) autoHeirlooms();//"Auto Heirlooms"      (")
        if (getPageSetting('AutoUpgradeHeirlooms') && !heirloomsShown) autoNull();  //"Auto Upgrade Heirlooms" (heirlooms.js)
            
        heirloomCache = game.global.heirloomsExtra.length;
    }
    heirloomFlag = heirloomsShown;

    if(getPageSetting('PauseScript') || game.options.menu.pauseGame.enabled || game.global.viewingUpgrades) return;
    game.global.addonUser = true;
    game.global.autotrimps = {
        firstgiga: getPageSetting('FirstGigastation'),
        deltagiga: getPageSetting('DeltaGigastation')
    }
    if (newZone) {
        // Auto-close dialogues.
        switch (document.getElementById('tipTitle').innerHTML) {
            case 'The Improbability':   // Breaking the Planet
            case 'Corruption':          // Corruption / True Corruption
            case 'Spire':               // Spire
            case 'The Magma':           // Magma
                cancelTooltip();
        }
        setTitle(); // Set the browser title

        if (getPageSetting('AutoEggs'))
            easterEggClicked();
    }
    setScienceNeeded();  //determine how much science is needed

    //EXECUTE CORE LOGIC
    if (getPageSetting('ExitSpireCell') >0) exitSpireCell(); //"Exit Spire After Cell" (other.js)
    if (getPageSetting('WorkerRatios')) workerRatios(); //"Auto Worker Ratios"  (jobs.js)
    if (getPageSetting('BuyUpgrades')) buyUpgrades();   //"Buy Upgrades"       (upgrades.js)
    autoGoldenUpgradesAT();    
    if (getPageSetting('BuyStorage'))
        buyStorage();     //"Buy Storage"     (buildings.js)
    if (getPageSetting('BuyBuildings')) buyBuildings(); //"Buy Buildings"   (buildings.js)
    needGymystic = false;   //reset this after buyBuildings
    if (getPageSetting('BuyJobs')) buyJobs();           //"Buy Jobs"    (jobs.js)
    if (getPageSetting('ManualGather2')<=2) manualLabor();  //"Auto Gather/Build"           (gather.js)
    else if (getPageSetting('ManualGather2')==3) manualLabor2();  //"Auto Gather/Build #2"     (")
    if (getPageSetting('AutoMaps')) autoMap();          //"Auto Maps"   (automaps.js)
    if (getPageSetting('GeneticistTimer') >= 0) autoBreedTimer(); //"Geneticist Timer" / "Auto Breed Timer"     (autobreedtimer.js)
    if (autoTrimpSettings.AutoPortal.selected != "Off") autoPortal();   //"Auto Portal" (hidden until level 40) (portal.js)
    
    if (getPageSetting('TrapTrimps') && game.global.trapBuildAllowed && game.global.trapBuildToggled == false) toggleAutoTrap(); //"Trap Trimps"
    if (newZone && getPageSetting('AutoRoboTrimp')) autoRoboTrimp();   //"AutoRoboTrimp" (other.js)
    if (newZone && getPageSetting('FinishC2')>0 && game.global.runningChallengeSquared) finishChallengeSquared(); // "Finish Challenge2" (other.js)
    autoLevelEquipment();           //"Buy Armor", "Buy Armor Upgrades", "Buy Weapons", "Buy Weapons Upgrades"  (equipment.js)

    if (getPageSetting('UseScryerStance'))  useScryerStance();  //"Use Scryer Stance"   (scryer.js)
    else if (getPageSetting('AutoStance')<=1) autoStance();    //"Auto Stance"      (autostance.js)
    else if (getPageSetting('AutoStance')==2) autoStance2();   //"Auto Stance #2"       (")
    if (getPageSetting('UseAutoGen')) autoGenerator(); // "Auto Generator ON" (magma.js)

    BAFsetting = getPageSetting('BetterAutoFight');
    if (BAFsetting==1) betterAutoFight();        //"Better Auto Fight"  (autofight.js)
    else if (BAFsetting==2) betterAutoFight2();     //"Better Auto Fight2"  (")
    else if (BAFsetting==0 && BAFsetting!=oldBAFsetting && game.global.autoBattle && game.global.pauseFight)  pauseFight(); //turn on autofight on once when BAF is toggled off.
    else if (BAFsetting==0 && game.global.world == 1 && game.global.autoBattle && game.global.pauseFight) pauseFight();     //turn on autofight on lvl 1 if its off.
    else if (BAFsetting==0 && !game.global.autoBattle && game.global.soldierHealth == 0) betterAutoFight();   //use BAF as a backup for pre-Battle situations
    oldBAFsetting = BAFsetting;                                            //enables built-in autofight once when disabled

    if (getPageSetting('DynamicPrestige2')>0&&((getPageSetting('ForcePresZ')<0)||(game.global.world<getPageSetting('ForcePresZ')))) prestigeChanging2(); //"Dynamic Prestige" (dynprestige.js)
    else autoTrimpSettings.Prestige.selected = document.getElementById('Prestige').value; //if we dont want to, just make sure the UI setting and the internal setting are aligned.

    //Auto Magmite Spender
    try {
        if (getPageSetting('AutoMagmiteSpender2')==2 && !magmiteSpenderChanged)
            autoMagmiteSpender(); // magma.js
    } catch (err) {
        debug("Error encountered in AutoMagmiteSpender(Always): " + err.message,"general");
    }

    //Runs any user provided scripts - by copying and pasting a function named userscripts() into the Chrome Dev console. (F12)
    if (userscriptOn) userscripts();
    //rinse, repeat
    return;
}

//GUI Updates happen on this thread, every 1000ms, concurrently
function guiLoop() {
    updateCustomButtons();
}

// Userscript loader. write your own!
var userscriptOn = true;    //controls the looping of userscripts and can be self-disabled
var globalvar0,globalvar1,globalvar2,globalvar3,globalvar4,globalvar5,globalvar6,globalvar7,globalvar8,globalvar9;
//left blank intentionally. the user will provide this. blank global vars are included as an example
function userscripts()
{
    //insert code here:
}