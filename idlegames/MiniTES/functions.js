// Tab functions
function showMain () { 
	unlockAllTabs();																// Enable all tabs..
	document.getElementById('mainButton').disabled = true;							// except this one.
	document.getElementById('mapTab').className = 'invisible';						// Make all the other tab divs nonexistant
	document.getElementById('keyItemsTab').className = 'invisible';
	document.getElementById('equipsTab').className = 'invisible';
	document.getElementById('optionsTab').className = 'invisible';  
	document.getElementById('faqTab').className = 'invisible';  
	document.getElementById('aboutTab').className = 'invisible';
	document.getElementById('statsTab').className = 'visible extraChromeTextWidth2';// Make this tab div exist
	cow.currentTab = "main";														// Triggers the main game loop
	cow.masterGamestateVariable = "refreshRNGNow";									// Rolls a new event when you click
	writeConsole("");																// Erases console
	writeConsole("");
	writeConsole("");
	writeConsole("");
		rerollWorldMapRNGifMasterGameTimerIsUp();
		selectAdventureTypeBasedOnCurrentArea();
		statGrowth();
		updateMainTextSpans();
		updateEXPProgressBars();
}
function showEquips () { 
	unlockAllTabs();
	document.getElementById('equipsButton').disabled = true;
	document.getElementById('statsTab').className = 'invisible';
	document.getElementById('mapTab').className = 'invisible';
	document.getElementById('keyItemsTab').className = 'invisible'; 
	document.getElementById('aboutTab').className = 'invisible'; 
	document.getElementById('faqTab').className = 'invisible';  
	document.getElementById('optionsTab').className = 'invisible'; 
	document.getElementById('equipsTab').className = 'visible';
	document.getElementById('equipsButton').innerHTML = "<span id='IEhack'>装备</span>";					// Clears the 'NEW!' readout
	populateEquipsTab();
	recalculateWeaponDMG();
	recalculatePlayerDMG();
	recalculateArmorPieceAC();
	recalculatePlayerAC();
	colorCurrentEquipsFaded();
	cow.currentTab = "equips";
}
function showKeyItems () { 
	unlockAllTabs(); 
	document.getElementById('keyItemsButton').disabled = true;
	document.getElementById('statsTab').className = 'invisible';
	document.getElementById('mapTab').className = 'invisible';
	document.getElementById('equipsTab').className = 'invisible';
	document.getElementById('aboutTab').className = 'invisible';
	document.getElementById('faqTab').className = 'invisible';  
	document.getElementById('optionsTab').className = 'invisible';
	document.getElementById('keyItemsTab').className = 'visible';
	document.getElementById('keyItemsButton').innerHTML = "<span id='IEhack'>道具</span>";				// Clears the 'NEW!' readout
	populateKeyItemsTab();
	cow.currentTab = "keyItems";
}
function showMap () { 
	unlockAllTabs();
	document.getElementById('worldMapButton').disabled = true; 
	document.getElementById('statsTab').className = 'invisible';
	document.getElementById('keyItemsTab').className = 'invisible';
	document.getElementById('equipsTab').className = 'invisible';
	document.getElementById('aboutTab').className = 'invisible';
	document.getElementById('faqTab').className = 'invisible';  
	document.getElementById('optionsTab').className = 'invisible'; 
	document.getElementById('mapTab').className = 'visible'; 
	document.getElementById('mapText').innerHTML = '';
	cow.currentTab = "map";
	highlightKeyItemLocations();
	if (cow.keyItem22have == true)	{ document.getElementById('map24').className = 'fullBrightText clickable'; }	// Reveals Undercrypt if it's unlocked 
}
function showOptions () { 
	unlockAllTabs(); 
	document.getElementById('optionsButton').disabled = true;
	document.getElementById('statsTab').className = 'invisible';
	document.getElementById('keyItemsTab').className = 'invisible';
	document.getElementById('equipsTab').className = 'invisible';
	document.getElementById('mapTab').className = 'invisible';
	document.getElementById('aboutTab').className = 'invisible'; 
	document.getElementById('faqTab').className = 'invisible';  
	document.getElementById('optionsTab').className = 'visible';
	updateGameplayClock();
	cow.currentTab = "options";
}
function showFAQ () { 
	unlockAllTabs();
	document.getElementById('faqButton').disabled = true;  
	document.getElementById('statsTab').className = 'invisible';
	document.getElementById('keyItemsTab').className = 'invisible';
	document.getElementById('equipsTab').className = 'invisible';
	document.getElementById('mapTab').className = 'invisible';
	document.getElementById('optionsTab').className = 'invisible';
	document.getElementById('aboutTab').className = 'invisible';  
	document.getElementById('faqTab').className = 'visible';  
	cow.currentTab = "faq";
}
function showAbout () { 
	unlockAllTabs();
	document.getElementById('aboutButton').disabled = true;  
	document.getElementById('statsTab').className = 'invisible';
	document.getElementById('keyItemsTab').className = 'invisible';
	document.getElementById('equipsTab').className = 'invisible';
	document.getElementById('mapTab').className = 'invisible';
	document.getElementById('optionsTab').className = 'invisible';
	document.getElementById('faqTab').className = 'invisible';  
	document.getElementById('aboutTab').className = 'visible';  
	cow.currentTab = "about";
}








function preloader() {
	kongregateStuff();
	preloadStuff();
	
	function waitForLogin() {													
		if (cow.kongUsername) {								// NOTE - This username login part doubles as a sitelock
			loadGame();
			autoSave();
			loadDefaultOptions();
			showMain();
			recalculateWeaponDMG();
			recalculatePlayerDMG();
			recalculateArmorPieceAC();
			recalculatePlayerAC();
			updateMainTextSpans();
			updateEXPProgressBars();
		}
		else {
			setTimeout(waitForLogin, 500);					// Ghetto animation engine variation because we don't need 60FPS. 2FPS is fine.
		}
	}
	waitForLogin();
}

function kongregateStuff() {
	kongregateAPI.loadAPI(function(){												// Initialize
		window.kongregate = kongregateAPI.getAPI();									//
		
		cow.kongUsername = kongregate.services.getUsername();						// Get username for the savefile
		// if (kongregate.services.isGuest()) { cow.kongUsername = 'guest'; }		// Already covered by the API
		
		kongregate.services.addEventListener('login', kongLiveLogin);				// Recognize live page logins, and execute this function
		
		function kongLiveLogin() {
			var x = kongregate.services.getUsername();
			console.log('Kong username changed to: ' + x);
			cow.kongUsername = x;													// This is OK because the new username isn't saved
			loadGame();
			loadDefaultOptions();
			showMain();
			recalculateWeaponDMG();
			recalculatePlayerDMG();
			recalculateArmorPieceAC();
			recalculatePlayerAC();
			updateMainTextSpans();
			updateEXPProgressBars();
		}
		
		function submitScores() {													// High Scores and future badges
			var q = cow.axe + cow.sword + cow.dagger + cow.fist + cow.speech + cow.critical + cow.spear + cow.mace + cow.dodge + cow.block + cow.unlock + cow.hArmor + cow.mArmor +	cow.lArmor + cow.athlete + cow.medic +	cow.endure + cow.smash + cow.climb + cow.stealth;
			
			kongregate.stats.submit("Player Level", cow.level);
			kongregate.stats.submit("Combined Skill Level", q);
			kongregate.stats.submit("Max HP", cow.maxHP);
 			if (cow.keyItem1have == true) { kongregate.stats.submit("Apprentice", 1); }							 // Easy		Apprentice			Find the Guild Pass
 			if (cow.mapItem1have == true &&	cow.mapItem2have == true && cow.mapItem3have == true && cow.mapItem4have == true && cow.mapItem5have == true && cow.mapItem6have == true && cow.mapItem7have == true && cow.mapItem8have == true)
					 					   { kongregate.stats.submit("Protector", 1); }							 // Medium		Protector			Collect all eight maps
 			if (cow.keyItem21have == true) { kongregate.stats.submit("Guardian", 1); }							 // Hard		Guardian			Complete the Game
 			if (cow.keyItem24have == true) { kongregate.stats.submit("Champion", 1); }							 // Impossible	Champion			Complete the Postgame
			setTimeout(submitScores, 30000);
		}
		
		submitScores();
	});
}








function autoSave() {
	var zzz = 'minitesSAVEFILE' + cow.kongUsername;
	localStorage.removeItem(zzz);
	localStorage.setItem(zzz, JSON.stringify(cow));
}

function loadGame() {
	var zzz = 'minitesSAVEFILE' + cow.kongUsername;
	var q = localStorage.getItem(zzz);
	console.log('Attempting login with Kong username: ' + cow.kongUsername);
	if (q != null) {
		window.cow = JSON.parse(q);
		cow.hp = cow.maxHP;
		cow.currentMap = "Vieda Port";
		cow.currentTab = "main";
		cow.worldMapRNG = 0;
		cow.itemDropRNG = 0;
		cow.itemClassRNG = 0;
		cow.masterGamestateVariable = "startingAnEvent";
		cow.waitCounter = 0,
		cow.travelDestination = "";
		cow.travellingTime = 0;
		cow.restingMap = "";
		cow.restingTime = 0;
		cow.currentImprovingSkill = "";
		cow.gameplayClock = 0;
		cow.overrideCurrentMapDisplay = "";
		cow.combatState = "off";
		cow.mobCurrentHP = "9999";
		cow.endTurn = false;
	}
}



function exportSave () {
	var q = JSON.stringify(window.opener.cow);
	console.log (JSON.stringify(window.opener.cow));
	document.getElementById('exportSaveTextField').value = q;
}
  
  
  
function exportEncryptedSave() {
	var q = JSON.stringify(window.opener.cow);
	q = CryptoJS.AES.encrypt(q, 'notVerySecretHash');
	exportSaveTextField.value = q;
}



function importSave () {
	var q = prompt('在这里粘贴你的存档代码');
	if (q != null) {
		window.cow = JSON.parse(q);
		cow.hp = cow.maxHP;
		cow.currentMap = "Vieda Port";
		cow.currentTab = "main";
		cow.worldMapRNG = 0;
		cow.itemDropRNG = 0;
		cow.itemClassRNG = 0;
		cow.masterGamestateVariable = "startingAnEvent";
		cow.waitCounter = 0,
		cow.travelDestination = "";
		cow.travellingTime = 0;
		cow.restingMap = "";
		cow.restingTime = 0;
		cow.currentImprovingSkill = "";
		cow.gameplayClock = 0;
		cow.overrideCurrentMapDisplay = "";
		cow.combatState = "off";
		cow.mobCurrentHP = "9999";
		cow.endTurn = false;
		showMain();
		autoSave();
	} else alert("导入存档已取消");
}



function importEncryptedSave() {
	var q = prompt('在这里粘贴你的存档代码');
	if (q != null) {
		q = CryptoJS.AES.decrypt(q, 'notVerySecretHash');		// Decrypt save file
		q = q.toString(CryptoJS.enc.Utf8);						// Required because the decrypter outputs hex instead of ascii by default. This reconverts it
		window.cow = JSON.parse(q);
		cow.hp = cow.maxHP;
		cow.currentMap = "Vieda Port";
		cow.currentTab = "main";
		cow.worldMapRNG = 0;
		cow.itemDropRNG = 0;
		cow.itemClassRNG = 0;
		cow.masterGamestateVariable = "startingAnEvent";
		cow.waitCounter = 0,
		cow.travelDestination = "";
		cow.travellingTime = 0;
		cow.restingMap = "";
		cow.restingTime = 0;
		cow.currentImprovingSkill = "";
		cow.gameplayClock = 0;
		cow.overrideCurrentMapDisplay = "";
		cow.combatState = "off";
		cow.mobCurrentHP = "9999";
		cow.endTurn = false;
		showMain();
		autoSave();
	} else alert("导入存档已取消");
}



function eraseSave () {
	if (confirm("重置游戏存档？") ) {
	    if (confirm("最后一次警告-您的存档将被永久重置!!(游戏中也没有声望系统，仅供参考。)") ) {
			window.cow = {"level":1,"levelXP":0,"hp":30,"maxHP":30,"minDMG":3,"maxDMG":5,"ac":0,"kongUsername":'',"str":5,"def":5,"agi":5,"spd":5,"cha":5,"luk":5,"axe":1,"sword":1,"dagger":1,"fist":1,"speech":1,"critical":1,"spear":1,"mace":1,"dodge":1,"block":1,"unlock":1,"hArmor":1,"mArmor":1,"lArmor":1,"athlete":1,"medic":1,"endure":1,"smash":1,"climb":1,"stealth":1,"strXP":0,"defXP":0,"agiXP":0,"spdXP":0,"chaXP":0,"lukXP":0,"axeXP":0,"swordXP":0,"daggerXP":0,"fistXP":0,"speechXP":0,"criticalXP":0,"spearXP":0,"maceXP":0,"dodgeXP":0,"blockXP":0,"unlockXP":0,"hArmorXP":0,"mArmorXP":0,"lArmorXP":0,"athleteXP":0,"medicXP":0,"endureXP":0,"smashXP":0,"climbXP":0,"stealthXP":0,"equippedHeadArmor":"","equippedShoulderArmor":"","equippedGloves":"","equippedBodyArmor":"","equippedPants":"","equippedShoes":"","equippedShield":"","equippedWeapon":"Fist1","currentMap":"Vieda Port","currentTab":"options","worldMapRNG":0,"itemDropRNG":0,"itemClassRNG":0,"masterGamestateVariable":"startingAnEvent","waitCounter":0,"travelDestination":"","travellingTime":0,"restingMap":"","restingTime":0,"currentImprovingSkill":"smash","cssDefaultTheme":"Black","gameplayClock":1,"minutesPlayed":0,"hoursPlayed":0,"respawnAtVieda":true,"overrideCurrentMapDisplay":"","combatState":"off","mobCurrentHP":"9999","endTurn":false,"keyItem1have":false,"keyItem2have":false,"keyItem3have":false,"keyItem4have":false,"keyItem5have":false,"keyItem6have":false,"keyItem7have":false,"keyItem8have":false,"keyItem9have":false,"keyItem10have":false,"keyItem11have":false,"keyItem12have":false,"keyItem13have":false,"keyItem14have":false,"keyItem15have":false,"keyItem16have":false,"keyItem17have":false,"keyItem18have":false,"keyItem19have":false,"keyItem20have":false,"keyItem21have":false,"keyItem22have":false,"keyItem23have":false,"keyItem24have":false,"mapItem1have":false,"mapItem2have":false,"mapItem3have":false,"mapItem4have":false,"mapItem5have":false,"mapItem6have":false,"mapItem7have":false,"mapItem8have":false,"seal1have":false,"seal2have":false,"seal3have":false,"seal4have":false,"seal5have":false,"seal6have":false,"seal7have":false,"seal8have":false,"bestlightHeadArmor":0,"bestlightShoulderArmor":0,"bestlightGloves":0,"bestlightBodyArmor":0,"bestlightPants":0,"bestlightShoes":0,"bestlightShield":0,"bestmediumHeadArmor":0,"bestmediumShoulderArmor":0,"bestmediumGloves":0,"bestmediumBodyArmor":0,"bestmediumPants":0,"bestmediumShoes":0,"bestmediumShield":0,"bestheavyHeadArmor":0,"bestheavyShoulderArmor":0,"bestheavyGloves":0,"bestheavyBodyArmor":0,"bestheavyPants":0,"bestheavyShoes":0,"bestheavyShield":0,"bestdagger":0,"bestfist":1,"bestsword":0,"bestmace":0,"bestspear":0,"bestaxe":0}	   	 
			alert('Save file has been reset.');
			autoSave();
			showMain();
	    } else {
	        //code here for no save but leave (No)
	    }
	} else {
	    //code here for don't leave (Cancel)
	}
}




function highlightKeyItemLocations() {
	// initialize icons
	document.getElementById('map1').innerHTML = "O";
	document.getElementById('map2').innerHTML = ".";
	document.getElementById('map3').innerHTML = ";";
	document.getElementById('map4').innerHTML = "O";
	document.getElementById('map5').innerHTML = "O";
	document.getElementById('map6').innerHTML = "~";
	document.getElementById('map7').innerHTML = "o";
	document.getElementById('map8').innerHTML = "o";
	document.getElementById('map9').innerHTML = "п";
	document.getElementById('map10').innerHTML = "O";
	document.getElementById('map11').innerHTML = ".";
	document.getElementById('map12').innerHTML = "#";
	document.getElementById('map13').innerHTML = "%";
	document.getElementById('map14').innerHTML = "o";
	document.getElementById('map15').innerHTML = "ᴒ";
	document.getElementById('map16').innerHTML = "⁔";
	document.getElementById('map17').innerHTML = "O";
	document.getElementById('map18').innerHTML = "~";
	document.getElementById('map19').innerHTML = "o";
	document.getElementById('map20').innerHTML = "ᴧ";
	document.getElementById('map21').innerHTML = "п";
	document.getElementById('map22').innerHTML = ".";
	document.getElementById('map23').innerHTML = ";";
	document.getElementById('map24').innerHTML = ",";

	// highlight
	if (cow.keyItem17have == true) {
		var q = '⁕';
		if (cow.keyItem1have == false) {document.getElementById('map1').innerHTML = q;}
		if (cow.keyItem2have == false) {document.getElementById('map2').innerHTML = q;}
		if (cow.keyItem3have == false) {document.getElementById('map3').innerHTML = q;}
		if (cow.keyItem4have == false) {document.getElementById('map3').innerHTML = q;}
		if (cow.keyItem5have == false) {document.getElementById('map4').innerHTML = q;}
		if (cow.keyItem6have == false) {document.getElementById('map5').innerHTML = q;}
		if (cow.keyItem7have == false) {document.getElementById('map5').innerHTML = q;}
		if (cow.keyItem8have == false) {document.getElementById('map6').innerHTML = q;}
		if (cow.keyItem9have == false) {document.getElementById('map8').innerHTML = q;}
		if (cow.keyItem10have == false) {document.getElementById('map9').innerHTML = q;}
		if (cow.keyItem11have == false) {document.getElementById('map13').innerHTML = q;}
		if (cow.keyItem12have == false) {document.getElementById('map13').innerHTML = q;}
		if (cow.keyItem13have == false) {document.getElementById('map14').innerHTML = q;}
		if (cow.keyItem14have == false) {document.getElementById('map15').innerHTML = q;}
		if (cow.keyItem15have == false) {document.getElementById('map19').innerHTML = q;}
		if (cow.keyItem16have == false) {document.getElementById('map20').innerHTML = q;}
		if (cow.keyItem17have == false) {document.getElementById('map21').innerHTML = q;}
		if (cow.keyItem18have == false) {document.getElementById('map22').innerHTML = q;}
		if (cow.keyItem19have == false) {document.getElementById('map22').innerHTML = q;}
		if (cow.keyItem20have == false) {document.getElementById('map23').innerHTML = q;}
	
		if (cow.mapItem1have == false) {document.getElementById('map6').innerHTML = q;}
		if (cow.mapItem2have == false) {document.getElementById('map7').innerHTML = q;}
		if (cow.mapItem3have == false) {document.getElementById('map10').innerHTML = q;}
		if (cow.mapItem4have == false) {document.getElementById('map11').innerHTML = q;}
		if (cow.mapItem5have == false) {document.getElementById('map12').innerHTML = q;}
		if (cow.mapItem6have == false) {document.getElementById('map16').innerHTML = q;}
		if (cow.mapItem7have == false) {document.getElementById('map17').innerHTML = q;}
		if (cow.mapItem8have == false) {document.getElementById('map18').innerHTML = q;}
	
		// if (cow.seal1have == false) {document.getElementById('map8').innerHTML = q;}
		// if (cow.seal2have == false) {document.getElementById('map9').innerHTML = q;}
		// if (cow.seal3have == false) {document.getElementById('map13').innerHTML = q;}
		// if (cow.seal4have == false) {document.getElementById('map14').innerHTML = q;}
		// if (cow.seal5have == false) {document.getElementById('map15').innerHTML = q;}
		// if (cow.seal6have == false) {document.getElementById('map19').innerHTML = q;}
		// if (cow.seal7have == false) {document.getElementById('map20').innerHTML = q;}
		// if (cow.seal8have == false) {document.getElementById('map21').innerHTML = q;}
	}
		var r = "X";
		if (cow.currentMap == "Vieda Port") { document.getElementById('map1').innerHTML = r; }
		if (cow.currentMap == "Nomad's Guild") { document.getElementById('map2').innerHTML = r; }
		if (cow.currentMap == "Crystalspire Forest") { document.getElementById('map3').innerHTML = r; }
		if (cow.currentMap == "Ardana Residential") { document.getElementById('map4').innerHTML = r; }
		if (cow.currentMap == "Ardana Markenplace") { document.getElementById('map5').innerHTML = r; }
		if (cow.currentMap == "Silverpool Tides") { document.getElementById('map6').innerHTML = r; }
		if (cow.currentMap == "Madras") { document.getElementById('map7').innerHTML = r; }
		if (cow.currentMap == "Elcot") { document.getElementById('map8').innerHTML = r; }
		if (cow.currentMap == "Crimson Palace") { document.getElementById('map9').innerHTML = r; }
		if (cow.currentMap == "Ardana Slums") { document.getElementById('map10').innerHTML = r; }
		if (cow.currentMap == "Obsidian Grasslands") { document.getElementById('map11').innerHTML = r; }
		if (cow.currentMap == "Deadmoor Tower") { document.getElementById('map12').innerHTML = r; }
		if (cow.currentMap == "Sea of Hileo") { document.getElementById('map13').innerHTML = r; }
		if (cow.currentMap == "Rydale Keep") { document.getElementById('map14').innerHTML = r; }
		if (cow.currentMap == "Farin's Delve") { document.getElementById('map15').innerHTML = r; }
		if (cow.currentMap == "Skyview") { document.getElementById('map16').innerHTML = r; }
		if (cow.currentMap == "Ba'ryst") { document.getElementById('map17').innerHTML = r; }
		if (cow.currentMap == "Prismatic Delta") { document.getElementById('map18').innerHTML = r; }
		if (cow.currentMap == "Cerrak") { document.getElementById('map19').innerHTML = r; }
		if (cow.currentMap == "Burning Cloudsea") { document.getElementById('map20').innerHTML = r; }
		if (cow.currentMap == "Siruvan") { document.getElementById('map21').innerHTML = r; }
		if (cow.currentMap == "Midnight's Reach") { document.getElementById('map22').innerHTML = r; }
		if (cow.currentMap == "Forest of Ice") { document.getElementById('map23').innerHTML = r; }
		if (cow.currentMap == "Undercrypt") { document.getElementById('map24').innerHTML = r; }
}




function updateGameplayClock () {
	var q = ( cow.minutesPlayed < 10 ? "0" : "" ) + cow.minutesPlayed;							// adds extra zeroes via brainfuck
	document.getElementById('textGameplayClock').innerHTML = cow.hoursPlayed + ':' + q;
}




// Switch Themes
function changeTheme (q) {
	cow.cssDefaultTheme = q;
	document.getElementById('loadCSSThemeHere').innerHTML = '<link rel="stylesheet" href="theme' + q + '.css">';
	// Make the selected theme fullBrightText
	document.getElementById('BlackThemeText').className = 'fadedText3 clickable';
	document.getElementById('WhiteThemeText').className = 'fadedText3 clickable';
	document.getElementById('PurpleThemeText').className = 'fadedText3 clickable';
	document.getElementById('BlueThemeText').className = 'fadedText3 clickable';
	document.getElementById('MatrixThemeText').className = 'fadedText3 clickable';
	document.getElementById('AmberThemeText').className = 'fadedText3 clickable';
	document.getElementById('BiosThemeText').className = 'fadedText3 clickable';
	document.getElementById(q+'ThemeText').className = 'fullBrightText';
}




// Load Default theme onLoad
function loadDefaultOptions () {
	// Themes
	document.getElementById('loadCSSThemeHere').innerHTML = '<link rel="stylesheet" href="theme' + cow.cssDefaultTheme + '.css">';
	document.getElementById(cow.cssDefaultTheme+'ThemeText').className = 'fullBrightText';
	// Respawn location
	if (cow.respawnAtVieda == true) { document.getElementById('textRespawnAtVieda').className = 'fullBrightText'; }
	if (cow.respawnAtVieda == false) { document.getElementById('textRespawnWhereYouDied').className = 'fullBrightText'; }
}




function changeRespawnLocation (q) {
	if (q == "Vieda") { cow.respawnAtVieda = true }
	if (q == "whereYouDied") { cow.respawnAtVieda = false }
	document.getElementById('textRespawnAtVieda').className = 'fadedText3 clickable';
	document.getElementById('textRespawnWhereYouDied').className = 'fadedText3 clickable';
	loadDefaultOptions();
}




// World map button functions
function gotoArea (q) {
	if (cow.currentMap == window['map'+q].name) {			// if clicked map location is same as current, go back instantly
		cow.masterGamestateVariable = "refreshRNGNow";	
		updateMainTextSpans();
		showMain();
	} else if (q == 24 && cow.keyItem22have == false) {		// if undercrypt is locked and clicked, do nothing
	} else {												// otherwise activate travelling mode
		cow.masterGamestateVariable = "startingAnEvent";
		cow.travelDestination = window['map'+q].name; 
		cow.currentMap = "travelling";
			cow.travellingTime = (3 / (cow.athlete/75));					// TRAVELLING TIME / ATHLETE FORMULA!!!!!
			if (cow.keyItem12have == true) {cow.travellingTime *= 0.66}		//
			if (cow.travellingTime > 15) { cow.travellingTime = 15}			/////
			if (cow.travellingTime < 3) { cow.travellingTime = 3}			///////////////
		
		updateMainTextSpans();
		showMain();
		lockAllTabs();
	}
}




// Update map text descriptions functions
function mapText (q) { 	document.getElementById('mapText').innerHTML = cnItem(window['map'+q].text); 
						if (q == 24 && cow.keyItem22have == false) document.getElementById('mapText').innerHTML = ''; }		// undercrypt hack
function mapTextClear () { document.getElementById('mapText').innerHTML = ''; }




// Update equips text descriptions functions
function equipsArmorText (q) { 
	var r = cow['best'+q];
	if (q.substring(0, 5) == "light") { var s = "Light Armor"}
	if (q.substring(0, 6) == "medium") { var s = "Medium Armor"}
	if (q.substring(0, 5) == "heavy") { var s = "Heavy Armor"}
	if (r >= 1) document.getElementById('equipsStatText').innerHTML = cnItem(s) + ': ' + window[q+r].armorClass + ' 护甲';
	if (r >= 1 && q.slice(-6) == "Shield") document.getElementById('equipsStatText').innerHTML = cnItem(s) + ': +' + r*2 + '% 几率格挡'; 
	}
function equipsWeaponText (q) { 
	var r = cow['best'+q];
	var s = capitalizeFirstLetter(q);
	if (r >= 1) document.getElementById('equipsStatText').innerHTML = cnItem(s) + ': ' + window[q+r].minDamage + ' - ' + window[q+r].maxDamage + ' 伤害'; 
	}
function equipsTextClear () { document.getElementById('equipsStatText').innerHTML = '<br>' }




// Update key items text descriptions functions
function keyItemText (q) { if (cow['keyItem'+q+'have'] == true) { document.getElementById('keyItemDescriptionText').innerHTML = window['keyItem'+q].text; } }
function mapItemText (q) { if (cow['mapItem'+q+'have'] == true) { document.getElementById('keyItemDescriptionText').innerHTML = window['mapItem'+q].text; } }
function sealItemText (q) { if (cow['seal'+q+'have'] == true) { document.getElementById('keyItemDescriptionText').innerHTML = window['seal'+q].text; } }
function keyItemTextClear () { document.getElementById('keyItemDescriptionText').innerHTML = ''; }




// Free diablo 3 battle.net redeem code
function cubeCat () {
	var surfaceArea = '86YCYZ-7CMW-8ETXD2-D727-RGMNZV';								// Placed here on 1-17-2017. Claimed on 7-1-2017.
}




// Populate Equips Tab when it's loaded
function populateEquipsTab() {
	document.getElementById('textEquips1').innerHTML = cnItem(window['lightHeadArmor'+cow.bestlightHeadArmor].name);
	document.getElementById('textEquips2').innerHTML = cnItem(window['lightShoulderArmor'+cow.bestlightShoulderArmor].name);
	document.getElementById('textEquips3').innerHTML = cnItem(window['lightGloves'+cow.bestlightGloves].name);
	document.getElementById('textEquips4').innerHTML = cnItem(window['lightBodyArmor'+cow.bestlightBodyArmor].name);
	document.getElementById('textEquips5').innerHTML = cnItem(window['lightPants'+cow.bestlightPants].name);
	document.getElementById('textEquips6').innerHTML = cnItem(window['lightShoes'+cow.bestlightShoes].name);
	document.getElementById('textEquips7').innerHTML = cnItem(window['lightShield'+cow.bestlightShield].name);
	document.getElementById('textEquips8').innerHTML = cnItem(window['dagger'+cow.bestdagger].name);
	document.getElementById('textEquips9').innerHTML = cnItem(window['fist'+cow.bestfist].name);		
		
	document.getElementById('textEquips10').innerHTML = cnItem(window['mediumHeadArmor'+cow.bestmediumHeadArmor].name);
	document.getElementById('textEquips11').innerHTML = cnItem(window['mediumShoulderArmor'+cow.bestmediumShoulderArmor].name);
	document.getElementById('textEquips12').innerHTML = cnItem(window['mediumGloves'+cow.bestmediumGloves].name);
	document.getElementById('textEquips13').innerHTML = cnItem(window['mediumBodyArmor'+cow.bestmediumBodyArmor].name);
	document.getElementById('textEquips14').innerHTML = cnItem(window['mediumPants'+cow.bestmediumPants].name);
	document.getElementById('textEquips15').innerHTML = cnItem(window['mediumShoes'+cow.bestmediumShoes].name);
	document.getElementById('textEquips16').innerHTML = cnItem(window['mediumShield'+cow.bestmediumShield].name);
	document.getElementById('textEquips17').innerHTML = cnItem(window['sword'+cow.bestsword].name);
	document.getElementById('textEquips18').innerHTML = cnItem(window['axe'+cow.bestaxe].name);
		
	document.getElementById('textEquips19').innerHTML = cnItem(window['heavyHeadArmor'+cow.bestheavyHeadArmor].name);
	document.getElementById('textEquips20').innerHTML = cnItem(window['heavyShoulderArmor'+cow.bestheavyShoulderArmor].name);
	document.getElementById('textEquips21').innerHTML = cnItem(window['heavyGloves'+cow.bestheavyGloves].name);
	document.getElementById('textEquips22').innerHTML = cnItem(window['heavyBodyArmor'+cow.bestheavyBodyArmor].name);
	document.getElementById('textEquips23').innerHTML = cnItem(window['heavyPants'+cow.bestheavyPants].name);
	document.getElementById('textEquips24').innerHTML = cnItem(window['heavyShoes'+cow.bestheavyShoes].name);
	document.getElementById('textEquips25').innerHTML = cnItem(window['heavyShield'+cow.bestheavyShield].name);
	document.getElementById('textEquips26').innerHTML = cnItem(window['mace'+cow.bestmace].name);
	document.getElementById('textEquips27').innerHTML = cnItem(window['spear'+cow.bestspear].name);

	document.getElementById('textEquipTabAC').innerHTML = cow.ac;
	document.getElementById('textEquipTabMinDMG').innerHTML = cow.minDMG;
	document.getElementById('textEquipTabMaxDMG').innerHTML = cow.maxDMG;
}




// Color current equips white when the equip tab is loaded
function colorCurrentEquipsFaded() {
	// initializes all slots, unless it's a ---
	for (var i = 1; i<28; i++) { document.getElementById('textEquips'+i).className = 'fadedText3 clickable'; 
		 if (document.getElementById('textEquips'+i).innerHTML == "---") document.getElementById('textEquips'+i).className = 'fadedText3';}
	
	if (cow.equippedHeadArmor.substring(0,5) == 'light') { document.getElementById('textEquips1').className = 'fullBrightText'; }
	if (cow.equippedShoulderArmor.substring(0,5) == 'light') { document.getElementById('textEquips2').className = 'fullBrightText'; }
	if (cow.equippedGloves.substring(0,5) == 'light') { document.getElementById('textEquips3').className = 'fullBrightText'; }
	if (cow.equippedBodyArmor.substring(0,5) == 'light') { document.getElementById('textEquips4').className = 'fullBrightText'; }
	if (cow.equippedPants.substring(0,5) == 'light') { document.getElementById('textEquips5').className = 'fullBrightText'; }
	if (cow.equippedShoes.substring(0,5) == 'light') { document.getElementById('textEquips6').className = 'fullBrightText'; }
	if (cow.equippedShield.substring(0,5) == 'light') { document.getElementById('textEquips7').className = 'fullBrightText'; }
	if (cow.equippedWeapon.substring(0,5) == 'Dagge') { document.getElementById('textEquips8').className = 'fullBrightText'; }
	if (cow.equippedWeapon.substring(0,4) == 'Fist') { document.getElementById('textEquips9').className = 'fullBrightText'; }

	if (cow.equippedHeadArmor.substring(0,6) == 'medium') { document.getElementById('textEquips10').className = 'fullBrightText'; }
	if (cow.equippedShoulderArmor.substring(0,6) == 'medium') { document.getElementById('textEquips11').className = 'fullBrightText'; }
	if (cow.equippedGloves.substring(0,6) == 'medium') { document.getElementById('textEquips12').className = 'fullBrightText'; }
	if (cow.equippedBodyArmor.substring(0,6) == 'medium') { document.getElementById('textEquips13').className = 'fullBrightText'; }
	if (cow.equippedPants.substring(0,6) == 'medium') { document.getElementById('textEquips14').className = 'fullBrightText'; }
	if (cow.equippedShoes.substring(0,6) == 'medium') { document.getElementById('textEquips15').className = 'fullBrightText'; }
	if (cow.equippedShield.substring(0,6) == 'medium') { document.getElementById('textEquips16').className = 'fullBrightText'; }
	if (cow.equippedWeapon.substring(0,5) == 'Sword') { document.getElementById('textEquips17').className = 'fullBrightText'; }
	if (cow.equippedWeapon.substring(0,3) == 'Axe') { document.getElementById('textEquips18').className = 'fullBrightText'; }
	
	if (cow.equippedHeadArmor.substring(0,5) == 'heavy') { document.getElementById('textEquips19').className = 'fullBrightText'; }
	if (cow.equippedShoulderArmor.substring(0,5) == 'heavy') { document.getElementById('textEquips20').className = 'fullBrightText'; }
	if (cow.equippedGloves.substring(0,5) == 'heavy') { document.getElementById('textEquips21').className = 'fullBrightText'; }
	if (cow.equippedBodyArmor.substring(0,5) == 'heavy') { document.getElementById('textEquips22').className = 'fullBrightText'; }
	if (cow.equippedPants.substring(0,5) == 'heavy') { document.getElementById('textEquips23').className = 'fullBrightText'; }
	if (cow.equippedShoes.substring(0,5) == 'heavy') { document.getElementById('textEquips24').className = 'fullBrightText'; }
	if (cow.equippedShield.substring(0,5) == 'heavy') { document.getElementById('textEquips25').className = 'fullBrightText'; }
	if (cow.equippedWeapon.substring(0,4) == 'Mace') { document.getElementById('textEquips26').className = 'fullBrightText'; }
	if (cow.equippedWeapon.substring(0,5) == 'Spear') { document.getElementById('textEquips27').className = 'fullBrightText'; }
}




// Populate Key Items Tab when it's loaded
function populateKeyItemsTab() {
	for (var q = 1; q<25; q++) {
	//initialize
	document.getElementById('textKeyItem'+q).innerHTML = "---";
	document.getElementById('textKeyItem'+q).className = "fadedText3";
		if (cow['keyItem'+q+'have'] == true) { 
			document.getElementById('textKeyItem'+q).innerHTML = cnItem(window['keyItem'+q].name);
			document.getElementById('textKeyItem'+q).className = "fullBrightText";
		}			
	}
	for (var q = 1; q<9; q++) {
		if (cow['mapItem'+q+'have'] == true) { 
			document.getElementById('textMapItem'+q).innerHTML = "✸";
			document.getElementById('textMapItem'+q).className = "fullBrightText";
		}			
	}
	for (var q = 1; q<9; q++) {
		if (cow['seal'+q+'have'] == true) { 
			document.getElementById('textSeal'+q).innerHTML = "✸";
			document.getElementById('textSeal'+q).className = "fullBrightText";
		}			
	}
}




function rngWithinRange (min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}




function recalculateWeaponDMG () {
	var d = ((cow.agi/75) + 0.5);													// calculate skill modifiers
	var f = ((cow.spd/75) + 0.5);
	var sw = ((cow.str/75) + 0.5);
	var m = ((cow.str/75) + 0.5);
	var sp = ((cow.def/75) + 0.5);
	var a = ((cow.def/75) + 0.5);
	if (cow.equippedShield == "") {	var nsb = 1.1; } else var nsb = 1;				// No shield boost
	if (cow.keyItem2have == true) { var whet = 1.05;} else var whet = 1;				// Key Item 2
	
	for (var q = 1; q<10; q++) {
		window['dagger'+q].minDamage = daggerMin[q];								// reset all weapons damage values
		window['fist'+q].minDamage = fistMin[q];
		window['sword'+q].minDamage	= swordMin[q];
		window['mace'+q].minDamage = maceMin[q];
		window['spear'+q].minDamage	= spearMin[q];
		window['dagger'+q].maxDamage = daggerMax[q];
		window['fist'+q].maxDamage = fistMax[q];
		window['sword'+q].maxDamage	= swordMax[q];
		window['mace'+q].maxDamage = maceMax[q];
		window['spear'+q].maxDamage	= spearMax[q];
		window['axe'+q].maxDamage = axeMax[q];
		
		window['dagger'+q].minDamage 	+= (cow.smash / 10);						// apply smash modifier
		window['fist'+q].minDamage 		+= (cow.smash / 10);
		window['sword'+q].minDamage		+= (cow.smash / 10);
		window['mace'+q].minDamage 		+= (cow.smash / 10);
		window['spear'+q].minDamage		+= (cow.smash / 10);
		window['dagger'+q].maxDamage	+= (cow.smash / 10);
		window['fist'+q].maxDamage 		+= (cow.smash / 10);
		window['sword'+q].maxDamage		+= (cow.smash / 10);
		window['mace'+q].maxDamage 		+= (cow.smash / 10);
		window['spear'+q].maxDamage		+= (cow.smash / 10);
		window['axe'+q].maxDamage 		+= (cow.smash / 10);
		
		window['dagger'+q].minDamage 	*= (d * nsb * whet);						// apply more modifiers
		window['fist'+q].minDamage 		*= (f * nsb * whet);
		window['sword'+q].minDamage		*= (sw * nsb * whet);
		window['mace'+q].minDamage 		*= (m * nsb * whet);
		window['spear'+q].minDamage		*= (sp * nsb * whet);
		window['dagger'+q].maxDamage	*= (d * nsb * whet);
		window['fist'+q].maxDamage 		*= (f * nsb * whet);
		window['sword'+q].maxDamage		*= (sw * nsb * whet);
		window['mace'+q].maxDamage 		*= (m * nsb * whet);
		window['spear'+q].maxDamage		*= (sp * nsb * whet);
		window['axe'+q].maxDamage 		*= (a * nsb * whet);
		
		if (cow.keyItem4have == true) {
			window['dagger'+q].minDamage 	*= ((f + sw + m + sp + a ) / 20) + 1;		// apply postgame weapon synergy mod
			window['fist'+q].minDamage 		*= ((d + sw + m + sp + a ) / 20) + 1;
			window['sword'+q].minDamage		*= ((d + f + m + sp + a  ) / 20) + 1;
			window['mace'+q].minDamage 		*= ((d + f + sw + sp + a ) / 20) + 1;
			window['spear'+q].minDamage		*= ((d + f + sw + m + a  ) / 20) + 1;
			window['dagger'+q].maxDamage	*= ((f + sw + m + sp + a ) / 20) + 1;
			window['fist'+q].maxDamage 		*= ((d + sw + m + sp + a ) / 20) + 1;
			window['sword'+q].maxDamage		*= ((d + f + m + sp + a  ) / 20) + 1;
			window['mace'+q].maxDamage 		*= ((d + f + sw + sp + a ) / 20) + 1;
			window['spear'+q].maxDamage		*= ((d + f + sw + m + a  ) / 20) + 1;
			window['axe'+q].maxDamage 		*= ((d + f + sw + m + sp ) / 20) + 1;	}
		
		if (cow.keyItem10have == true) {
		window['dagger'+q].maxDamage	+= 3;											// apply Frozen Soul boost
		window['fist'+q].maxDamage 		+= 3;
		window['sword'+q].maxDamage		+= 3;
		window['mace'+q].maxDamage 		+= 3;
		window['spear'+q].maxDamage		+= 3;
		window['axe'+q].maxDamage 		+= 3; }
		
		window['dagger'+q].minDamage 	= Math.round (window['dagger'+q].minDamage);		// Trim decimal places
		window['fist'+q].minDamage 		= Math.round (window['fist'+q].minDamage); 	
		window['sword'+q].minDamage		= Math.round (window['sword'+q].minDamage);	
		window['mace'+q].minDamage 		= Math.round (window['mace'+q].minDamage); 	
		window['spear'+q].minDamage		= Math.round (window['spear'+q].minDamage);	
		window['dagger'+q].maxDamage	= Math.round (window['dagger'+q].maxDamage);
		window['fist'+q].maxDamage 		= Math.round (window['fist'+q].maxDamage); 	
		window['sword'+q].maxDamage		= Math.round (window['sword'+q].maxDamage);	
		window['mace'+q].maxDamage 		= Math.round (window['mace'+q].maxDamage); 	
		window['spear'+q].maxDamage		= Math.round (window['spear'+q].maxDamage);	
		window['axe'+q].maxDamage 		= Math.round (window['axe'+q].maxDamage); 	
	}
}




function recalculatePlayerDMG () {
	cow.minDMG = window[cow.equippedWeapon.toLowerCase()].minDamage;
	cow.maxDMG = window[cow.equippedWeapon.toLowerCase()].maxDamage;
}




function recalculateArmorPieceAC () {
	var l = ((cow.lArmor/75) + 0.5);											// grab skill modifiers
	var m = ((cow.mArmor/75) + 0.5);
	var h = ((cow.hArmor/75) + 0.5);
	var ll = (cow.lArmor/12);	
	var mm = (cow.mArmor/12);
	var hh = (cow.hArmor/12);
	
	for (var q = 1; q<10; q++) {
		window['lightHeadArmor'+q].armorClass 		= acLight[q];				// reset all armor values
		window['lightShoulderArmor'+q].armorClass 	= acLight[q];
		window['lightGloves'+q].armorClass 			= acLight[q];
		window['lightBodyArmor'+q].armorClass 		= acLight[q];
		window['lightPants'+q].armorClass 			= acLight[q];
		window['lightShoes'+q].armorClass 			= acLight[q];
		window['mediumHeadArmor'+q].armorClass		= acMedium[q];
		window['mediumShoulderArmor'+q].armorClass	= acMedium[q];
		window['mediumGloves'+q].armorClass 		= acMedium[q];
		window['mediumBodyArmor'+q].armorClass 		= acMedium[q];
		window['mediumPants'+q].armorClass 			= acMedium[q];
		window['mediumShoes'+q].armorClass 			= acMedium[q];
		window['heavyHeadArmor'+q].armorClass 		= acHeavy[q];
		window['heavyShoulderArmor'+q].armorClass 	= acHeavy[q];
		window['heavyGloves'+q].armorClass 			= acHeavy[q];
		window['heavyBodyArmor'+q].armorClass 		= acHeavy[q];
		window['heavyPants'+q].armorClass 			= acHeavy[q];
		window['heavyShoes'+q].armorClass 			= acHeavy[q];
		
		window['lightHeadArmor'+q].armorClass 		*= l * 2;					// apply all skill modifiers
		window['lightShoulderArmor'+q].armorClass 	*= l * 2;
		window['lightGloves'+q].armorClass 			*= l * 2;
		window['lightBodyArmor'+q].armorClass 		*= l * 2;
		window['lightPants'+q].armorClass 			*= l * 2;
		window['lightShoes'+q].armorClass 			*= l * 2;
		window['mediumHeadArmor'+q].armorClass		*= m * 2;
		window['mediumShoulderArmor'+q].armorClass	*= m * 2;
		window['mediumGloves'+q].armorClass 		*= m * 2;
		window['mediumBodyArmor'+q].armorClass 		*= m * 2;
		window['mediumPants'+q].armorClass 			*= m * 2;
		window['mediumShoes'+q].armorClass 			*= m * 2;
		window['heavyHeadArmor'+q].armorClass 		*= h * 2;
		window['heavyShoulderArmor'+q].armorClass 	*= h * 2;
		window['heavyGloves'+q].armorClass 			*= h * 2;
		window['heavyBodyArmor'+q].armorClass 		*= h * 2;
		window['heavyPants'+q].armorClass 			*= h * 2;
		window['heavyShoes'+q].armorClass 			*= h * 2;
		
		if (cow.keyItem7have == true) {
		window['lightHeadArmor'+q].armorClass 		+= 1;						// apply Armorer's Hammer boost
		window['lightShoulderArmor'+q].armorClass 	+= 1;
		window['lightGloves'+q].armorClass 			+= 1;
		window['lightBodyArmor'+q].armorClass 		+= 1;
		window['lightPants'+q].armorClass 			+= 1;
		window['lightShoes'+q].armorClass 			+= 1;
		window['mediumHeadArmor'+q].armorClass		+= 1;
		window['mediumShoulderArmor'+q].armorClass	+= 1;
		window['mediumGloves'+q].armorClass 		+= 1;
		window['mediumBodyArmor'+q].armorClass 		+= 1;
		window['mediumPants'+q].armorClass 			+= 1;
		window['mediumShoes'+q].armorClass 			+= 1;
		window['heavyHeadArmor'+q].armorClass 		+= 1;
		window['heavyShoulderArmor'+q].armorClass 	+= 1;
		window['heavyGloves'+q].armorClass 			+= 1;
		window['heavyBodyArmor'+q].armorClass 		+= 1;
		window['heavyPants'+q].armorClass 			+= 1;
		window['heavyShoes'+q].armorClass 			+= 1; }
		
		if (cow.keyItem9have == true) {
		window['lightHeadArmor'+q].armorClass 		+= 1;						// apply hardening oil boost
		window['lightShoulderArmor'+q].armorClass 	+= 1;
		window['lightGloves'+q].armorClass 			+= 1;
		window['lightBodyArmor'+q].armorClass 		+= 1;
		window['lightPants'+q].armorClass 			+= 1;
		window['lightShoes'+q].armorClass 			+= 1;
		window['mediumHeadArmor'+q].armorClass		+= 1;
		window['mediumShoulderArmor'+q].armorClass	+= 1;
		window['mediumGloves'+q].armorClass 		+= 1;
		window['mediumBodyArmor'+q].armorClass 		+= 1;
		window['mediumPants'+q].armorClass 			+= 1;
		window['mediumShoes'+q].armorClass 			+= 1;
		window['heavyHeadArmor'+q].armorClass 		+= 1;
		window['heavyShoulderArmor'+q].armorClass 	+= 1;
		window['heavyGloves'+q].armorClass 			+= 1;
		window['heavyBodyArmor'+q].armorClass 		+= 1;
		window['heavyPants'+q].armorClass 			+= 1;
		window['heavyShoes'+q].armorClass 			+= 1; }
		
		if (cow.keyItem8have == true) {
		window['lightHeadArmor'+q].armorClass 		+= (mm + hh);					// apply Magearmor Ring boost
		window['lightShoulderArmor'+q].armorClass 	+= (mm + hh);
		window['lightGloves'+q].armorClass 			+= (mm + hh);
		window['lightBodyArmor'+q].armorClass 		+= (mm + hh);
		window['lightPants'+q].armorClass 			+= (mm + hh);
		window['lightShoes'+q].armorClass 			+= (mm + hh);
		window['mediumHeadArmor'+q].armorClass		+= (ll + hh);
		window['mediumShoulderArmor'+q].armorClass	+= (ll + hh);
		window['mediumGloves'+q].armorClass 		+= (ll + hh);
		window['mediumBodyArmor'+q].armorClass 		+= (ll + hh);
		window['mediumPants'+q].armorClass 			+= (ll + hh);
		window['mediumShoes'+q].armorClass 			+= (ll + hh);
		window['heavyHeadArmor'+q].armorClass 		+= (ll + mm);
		window['heavyShoulderArmor'+q].armorClass 	+= (ll + mm);
		window['heavyGloves'+q].armorClass 			+= (ll + mm);
		window['heavyBodyArmor'+q].armorClass 		+= (ll + mm);
		window['heavyPants'+q].armorClass 			+= (ll + mm);
		window['heavyShoes'+q].armorClass 			+= (ll + mm); }
		
		window['lightHeadArmor'+q].armorClass 		= Math.round (window['lightHeadArmor'+q].armorClass *10)/10; 							// remove decimal places
		window['lightShoulderArmor'+q].armorClass 	= Math.round (window['lightShoulderArmor'+q].armorClass *10)/10; 
		window['lightGloves'+q].armorClass 			= Math.round (window['lightGloves'+q].armorClass *10)/10; 		
		window['lightBodyArmor'+q].armorClass 		= Math.round (window['lightBodyArmor'+q].armorClass *10)/10; 	
		window['lightPants'+q].armorClass 			= Math.round (window['lightPants'+q].armorClass *10)/10; 		
		window['lightShoes'+q].armorClass 			= Math.round (window['lightShoes'+q].armorClass *10)/10; 		
		window['mediumHeadArmor'+q].armorClass		= Math.round (window['mediumHeadArmor'+q].armorClass *10)/10;	
		window['mediumShoulderArmor'+q].armorClass	= Math.round (window['mediumShoulderArmor'+q].armorClass *10)/10;
		window['mediumGloves'+q].armorClass 		= Math.round (window['mediumGloves'+q].armorClass *10)/10; 		
		window['mediumBodyArmor'+q].armorClass 		= Math.round (window['mediumBodyArmor'+q].armorClass *10)/10; 	
		window['mediumPants'+q].armorClass 			= Math.round (window['mediumPants'+q].armorClass *10)/10; 		
		window['mediumShoes'+q].armorClass 			= Math.round (window['mediumShoes'+q].armorClass *10)/10; 		
		window['heavyHeadArmor'+q].armorClass 		= Math.round (window['heavyHeadArmor'+q].armorClass *10)/10; 	
		window['heavyShoulderArmor'+q].armorClass 	= Math.round (window['heavyShoulderArmor'+q].armorClass *10)/10; 
		window['heavyGloves'+q].armorClass 			= Math.round (window['heavyGloves'+q].armorClass *10)/10; 		
		window['heavyBodyArmor'+q].armorClass 		= Math.round (window['heavyBodyArmor'+q].armorClass *10)/10; 	
		window['heavyPants'+q].armorClass 			= Math.round (window['heavyPants'+q].armorClass *10)/10; 		
		window['heavyShoes'+q].armorClass 			= Math.round (window['heavyShoes'+q].armorClass *10)/10; 		
	}
}




function recalculatePlayerAC () {
	cow.ac = 0;
	if (cow.equippedHeadArmor != "")	 cow.ac += window[cow.equippedHeadArmor].armorClass;			// add up ac of the 6 gear pieces
	if (cow.equippedShoulderArmor != "") cow.ac += window[cow.equippedShoulderArmor].armorClass;
	if (cow.equippedGloves != "") 		 cow.ac += window[cow.equippedGloves].armorClass;
	if (cow.equippedBodyArmor != "")	 cow.ac += window[cow.equippedBodyArmor].armorClass;
	if (cow.equippedPants != "") 		 cow.ac += window[cow.equippedPants].armorClass;
	if (cow.equippedShoes != "") 		 cow.ac += window[cow.equippedShoes].armorClass;
	cow.ac = Math.round(cow.ac*10)/10;
	cow.ac *= 1;																						// fixes 00.4 to 0.4
}




// Equip an armor piece when you click it
function equipArmor (q, r) {
	// De-equipping your current shield
	if (r == "Shield" && cow.equippedShield.substring(0, 5) == q.substring(0, 5)) {
		cow.equippedShield = "";
		colorCurrentEquipsFaded();
		recalculateWeaponDMG();
		recalculatePlayerDMG();
		recalculateArmorPieceAC();
		recalculatePlayerAC();
		populateEquipsTab();
	} else
	// equipping armor pieces
	if (cow['best'+q+r] != 0) {
		var t = q.toLowerCase();
		var s = cow['best'+t+r];
		cow['equipped'+r] = t+r+s;
		colorCurrentEquipsFaded();
		recalculateWeaponDMG();
		recalculatePlayerDMG();
		recalculateArmorPieceAC();
		recalculatePlayerAC();
		populateEquipsTab();
	}
}




// Equip a weapon when you click it
function equipWeapon (q) {
	var r = q.toLowerCase();
	if (cow['best'+r] != 0) {
		var s = cow['best'+r];
		cow.equippedWeapon = q+s;
		colorCurrentEquipsFaded();
		recalculateWeaponDMG();
		recalculatePlayerDMG();
		recalculateArmorPieceAC();
		recalculatePlayerAC();
		populateEquipsTab();
	}
}




function addItemDropToInventory (q) {
	// if the found item is isn't a Key Item, select a random loot drop
	if (q.substring(0,1) == "T") {
		var s;
		if (cow.itemClassRNG < 3)	{ s = 'lightHeadArmor'} else
		if (cow.itemClassRNG < 6)	{ s = 'lightShoulderArmor'} else
		if (cow.itemClassRNG < 9)	{ s = 'lightGloves'} else
		if (cow.itemClassRNG < 12)	{ s = 'lightBodyArmor'} else
		if (cow.itemClassRNG < 15)	{ s = 'lightPants'} else
		if (cow.itemClassRNG < 18)	{ s = 'lightShoes'} else
		if (cow.itemClassRNG < 21)	{ s = 'lightShield'} else
		if (cow.itemClassRNG < 24)	{ s = 'mediumHeadArmor'} else
		if (cow.itemClassRNG < 27)	{ s = 'mediumShoulderArmor'} else
		if (cow.itemClassRNG < 30)	{ s = 'mediumGloves'} else
		if (cow.itemClassRNG < 33)	{ s = 'mediumBodyArmor'} else
		if (cow.itemClassRNG < 36)	{ s = 'mediumPants'} else
		if (cow.itemClassRNG < 39)	{ s = 'mediumShoes'} else
		if (cow.itemClassRNG < 42)	{ s = 'mediumShield'} else
		if (cow.itemClassRNG < 45)	{ s = 'heavyHeadArmor'} else
		if (cow.itemClassRNG < 48)	{ s = 'heavyShoulderArmor'} else
		if (cow.itemClassRNG < 51)	{ s = 'heavyGloves'} else
		if (cow.itemClassRNG < 54)	{ s = 'heavyBodyArmor'} else
		if (cow.itemClassRNG < 57)	{ s = 'heavyPants'} else
		if (cow.itemClassRNG < 60)	{ s = 'heavyShoes'} else
		if (cow.itemClassRNG < 63)	{ s = 'heavyShield'} else
		if (cow.itemClassRNG < 69)	{ s = 'dagger'} else
		if (cow.itemClassRNG < 75)	{ s = 'sword'} else
		if (cow.itemClassRNG < 81)	{ s = 'axe'} else
		if (cow.itemClassRNG < 87)	{ s = 'fist'} else
		if (cow.itemClassRNG < 93)	{ s = 'mace'} else
		if (cow.itemClassRNG <= 99)	{ s = 'spear'}
		r = s + q.substring(1,2)
		// if the loot is better than your current gear, take it
		if (r.slice(-1) > cow['best'+r.slice(0, -1)]) {
			writeConsole ("Equipment found: " + window[r].name);
			// cow[r+'have'] = true;
			cow['best'+r.slice(0, -1)] = r.slice(-1);													// recalculate best armor/weapon
			document.getElementById('equipsButton').innerHTML = "<span id='IEhack'>新!</span>";									// Puts NEW! text on the equips button
		// reEquip the best of all your currently equipped items
			if (cow.equippedHeadArmor.substring(0, 1) == "l") 									{equipArmor('light', 'HeadArmor')}
			if (cow.equippedShoulderArmor.substring(0, 1) == "l")								{equipArmor('light', 'ShoulderArmor')}
			if (cow.equippedGloves.substring(0, 1) == "l")										{equipArmor('light', 'Gloves')}
			if (cow.equippedBodyArmor.substring(0, 1) == "l")									{equipArmor('light', 'BodyArmor')}
			if (cow.equippedPants.substring(0, 1) == "l")										{equipArmor('light', 'Pants')}
			if (cow.equippedShoes.substring(0, 1) == "l")										{equipArmor('light', 'Shoes')}
			if (cow.equippedShield != "" && cow.equippedShield.substring(0, 1) == "l")			{equipArmor('light', 'Shield'); equipArmor('light', 'Shield')}
			
			if (cow.equippedHeadArmor.substring(0, 1) == "m") 									{equipArmor('medium', 'HeadArmor')}
			if (cow.equippedShoulderArmor.substring(0, 1) == "m")								{equipArmor('medium', 'ShoulderArmor')}
			if (cow.equippedGloves.substring(0, 1) == "m")										{equipArmor('medium', 'Gloves')}
			if (cow.equippedBodyArmor.substring(0, 1) == "m")									{equipArmor('medium', 'BodyArmor')}
			if (cow.equippedPants.substring(0, 1) == "m")										{equipArmor('medium', 'Pants')}
			if (cow.equippedShoes.substring(0, 1) == "m")										{equipArmor('medium', 'Shoes')}
			if (cow.equippedShield != "" && cow.equippedShield.substring(0, 1) == "m")			{equipArmor('medium', 'Shield'); equipArmor('medium', 'Shield')}
			
			if (cow.equippedHeadArmor.substring(0, 1) == "h") 									{equipArmor('heavy', 'HeadArmor')}
			if (cow.equippedShoulderArmor.substring(0, 1) == "h")								{equipArmor('heavy', 'ShoulderArmor')}
			if (cow.equippedGloves.substring(0, 1) == "h")										{equipArmor('heavy', 'Gloves')}
			if (cow.equippedBodyArmor.substring(0, 1) == "h")									{equipArmor('heavy', 'BodyArmor')}
			if (cow.equippedPants.substring(0, 1) == "h")										{equipArmor('heavy', 'Pants')}
			if (cow.equippedShoes.substring(0, 1) == "h")										{equipArmor('heavy', 'Shoes')}
			if (cow.equippedShield != "" && cow.equippedShield.substring(0, 1) == "h")			{equipArmor('heavy', 'Shield'); equipArmor('heavy', 'Shield')}
			
			if (cow.equippedWeapon.substring(0, 1) == "D")										{equipWeapon('Dagger')}
			if (cow.equippedWeapon.substring(0, 1) == "F")										{equipWeapon('Fist')}
			if (cow.equippedWeapon.substring(0, 2) == "Sw")										{equipWeapon('Sword')}
			if (cow.equippedWeapon.substring(0, 1) == "M")										{equipWeapon('Mace')}
			if (cow.equippedWeapon.substring(0, 2) == "Sp")										{equipWeapon('Spear')}
			if (cow.equippedWeapon.substring(0, 1) == "A")										{equipWeapon('Axe')}
			
			recalculateWeaponDMG();
			recalculatePlayerDMG();
			recalculateArmorPieceAC();
			recalculatePlayerAC();
			updateMainTextSpans();
		}
	}
	// if you find a Key Item, and the player doesn't already have it..
	if (q.substring(0,3) == "key" && cow[q+'have'] == false) {
		writeConsole ("发现稀有物品: " + cnItem(window[q].name));
		cow[q+'have'] = true;
		document.getElementById('keyItemsButton').innerHTML = "<span id='IEhack'>新!</span>";								// Puts NEW! text on the key items button
		recalculateWeaponDMG();
		recalculatePlayerDMG();
		recalculateArmorPieceAC();
		recalculatePlayerAC();
	}
	if (q.substring(0,3) == "map" && cow[q+'have'] == false) {
		writeConsole ("发现稀有物品: " +  cnItem(window[q].name));
		cow[q+'have'] = true;
		document.getElementById('keyItemsButton').innerHTML = "<span id='IEhack'>新!</span>";								// Puts NEW! text on the key items button
	}
	if (q.substring(0,4) == "seal" && cow[q+'have'] == false) {
		writeConsole ("发现稀有物品: " +  cnItem(window[q].name));
		cow[q+'have'] = true;
		document.getElementById('keyItemsButton').innerHTML = "<span id='IEhack'>新!</span>";								// Puts NEW! text on the key items button
		
	}
}




function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}




function lockAllTabs() {
	document.getElementById('mainButton').disabled = true;
	document.getElementById('equipsButton').disabled = true;
	document.getElementById('keyItemsButton').disabled = true;
	document.getElementById('worldMapButton').disabled = true;
	document.getElementById('optionsButton').disabled = true;
	document.getElementById('faqButton').disabled = true;
	document.getElementById('aboutButton').disabled = true;
	
}




function unlockAllTabs() {
	document.getElementById('mainButton').disabled = false;
	document.getElementById('equipsButton').disabled = false;
	document.getElementById('keyItemsButton').disabled = false;
	document.getElementById('worldMapButton').disabled = false;
	document.getElementById('optionsButton').disabled = false;
	document.getElementById('faqButton').disabled = false;
	document.getElementById('aboutButton').disabled = false;
}




function unlockAllTabsExceptMain() {
	document.getElementById('equipsButton').disabled = false;
	document.getElementById('keyItemsButton').disabled = false;
	document.getElementById('worldMapButton').disabled = false;
	document.getElementById('optionsButton').disabled = false;
	document.getElementById('faqButton').disabled = false;
	document.getElementById('aboutButton').disabled = false;
}




// Write to Console function
function writeConsole (q) {
	document.getElementById('console4').innerHTML = document.getElementById('console3').innerHTML;
	document.getElementById('console3').innerHTML = document.getElementById('console2').innerHTML;
	document.getElementById('console2').innerHTML = document.getElementById('console1').innerHTML;
	document.getElementById('console1').innerHTML = q;
}




// Write to Console without scrolling
function updateConsole (q) {
	document.getElementById('console1').innerHTML = q;
}




function updateMainTextSpans() {
	document.getElementById('textLevel').innerHTML = cow.level;
	document.getElementById('textMaxHP').innerHTML = cow.maxHP;

	document.getElementById('textMainTabMinDMG').innerHTML = cow.minDMG; 
	document.getElementById('textMainTabMaxDMG').innerHTML = cow.maxDMG;
	document.getElementById('textMainTabAC').innerHTML = cow.ac;
	
	// currentMap display, and all the various hacks for it
	document.getElementById('textCurrentMap').innerHTML = cnItem(cow.currentMap);
	if (cow.currentMap == "resting") { document.getElementById('textCurrentMap').innerHTML = cow.overrideCurrentMapDisplay; }
	if (cow.currentMap == "respawning") { document.getElementById('textCurrentMap').innerHTML = cow.overrideCurrentMapDisplay; }
	if (cow.currentMap == "travelling") { document.getElementById('textCurrentMap').innerHTML = "..." }
	if (document.getElementById('textCurrentMap').innerHTML == "Ardana Residential") { document.getElementById('textCurrentMap').innerHTML = "Ardana - Residential"; }
	if (document.getElementById('textCurrentMap').innerHTML == "Ardana Marketplace") { document.getElementById('textCurrentMap').innerHTML = "Ardana - Marketplace"; }
	if (document.getElementById('textCurrentMap').innerHTML == "Ardana Slums") { document.getElementById('textCurrentMap').innerHTML = "Ardana - Slums"; }
	
//  document.getElementById('textDebug1').innerHTML = cow.masterGamestateVariable;
// 	document.getElementById('textDebug2').innerHTML = cow.hp;

	document.getElementById('textDEF').innerHTML = cow.def;
	document.getElementById('textSTR').innerHTML = cow.str;
	document.getElementById('textAGI').innerHTML = cow.agi;
	document.getElementById('textSPD').innerHTML = cow.spd;
	document.getElementById('textCHA').innerHTML = cow.cha;
	document.getElementById('textLUK').innerHTML = cow.luk;

	document.getElementById('textAxe').innerHTML = cow.axe;
	document.getElementById('textSword').innerHTML = cow.sword;
	document.getElementById('textDagger').innerHTML = cow.dagger;
	document.getElementById('textFist').innerHTML = cow.fist;
	document.getElementById('textSpeech').innerHTML = cow.speech;
	document.getElementById('textCritical').innerHTML = cow.critical;
	document.getElementById('textSpear').innerHTML = cow.spear;
	document.getElementById('textMace').innerHTML = cow.mace;
	document.getElementById('textDodge').innerHTML = cow.dodge;
	document.getElementById('textBlock').innerHTML = cow.block;
	document.getElementById('textUnlock').innerHTML = cow.unlock;
	document.getElementById('textHArmor').innerHTML = cow.hArmor;
	document.getElementById('textMArmor').innerHTML = cow.mArmor;
	document.getElementById('textLArmor').innerHTML = cow.lArmor;
	document.getElementById('textAthlete').innerHTML = cow.athlete;
	document.getElementById('textMedic').innerHTML = cow.medic;
	document.getElementById('textEndure').innerHTML = cow.endure;
	document.getElementById('textSmash').innerHTML = cow.smash;
	document.getElementById('textClimb').innerHTML = cow.climb;
	document.getElementById('textStealth').innerHTML = cow.stealth;
}




function rerollWorldMapRNGifMasterGameTimerIsUp() {
	if (cow.masterGamestateVariable == "refreshRNGNow") { 
		cow.worldMapRNG = Math.floor(Math.random()*99);
		cow.itemDropRNG = Math.floor(Math.random()*99);
		cow.itemClassRNG = Math.floor(Math.random()*99);
		cow.masterGamestateVariable = "startingAnEvent";
	}
}








function statGrowth() {
// Cap all skills at stat level
	if (cow.axe >= cow.def)		{ cow.axeXP = 0 }
	if (cow.spear >= cow.def)	{ cow.spearXP = 0 }
	if (cow.hArmor >= cow.def)	{ cow.hArmorXP = 0 }
	if (cow.endure >= cow.def)	{ cow.endureXP = 0 }
	if (cow.sword >= cow.str)	{ cow.swordXP = 0 }
	if (cow.mace >= cow.str)	{ cow.maceXP = 0 }
	if (cow.mArmor >= cow.str)	{ cow.mArmorXP = 0 }
	if (cow.smash >= cow.str)	{ cow.smashXP = 0 }
	if (cow.dagger >= cow.agi)	{ cow.daggerXP = 0 }
	if (cow.dodge >= cow.agi)	{ cow.dodgeXP = 0 }
	if (cow.lArmor >= cow.agi)	{ cow.lArmorXP = 0 }
	if (cow.climb >= cow.agi)	{ cow.climbXP = 0 }
	if (cow.fist >= cow.spd)	{ cow.fistXP = 0 }
	if (cow.block >= cow.spd)   { cow.blockXP = 0 }
	if (cow.athlete >= cow.spd) { cow.athleteXP = 0 }
	if (cow.stealth >= cow.spd) { cow.stealthXP = 0 }
	if (cow.speech >= cow.cha)	{ cow.speechXP = 0 }
	if (cow.unlock >= cow.cha)	{ cow.unlockXP = 0 }
	if (cow.medic >= cow.cha)   { cow.medicXP = 0 }
	// if (cow.critical >= cow.luk){ cow.criticalXP = 0 }

// Level up skills
	if (cow.axeXP >= 100)		{ cow.axeXP = 0; 		cow.axe++; 		cow.defXP++;	 cow.levelXP++; 	updateConsole("斧子 技能现在等级 " + cow.axe); recalculateWeaponDMG(); recalculatePlayerDMG();}
	if (cow.spearXP >= 100)		{ cow.spearXP = 0;		cow.spear++; 	cow.defXP++;	 cow.levelXP++; 	updateConsole("矛 技能现在等级 " + cow.spear); recalculateWeaponDMG(); recalculatePlayerDMG();}
	if (cow.hArmorXP >= 100)	{ cow.hArmorXP = 0; 	cow.hArmor++; 	cow.defXP++;	 cow.levelXP++; 	updateConsole("重型护甲 技能现在等级 " + cow.hArmor); recalculateArmorPieceAC(); recalculatePlayerAC();}
	if (cow.endureXP >= 100) 	{ cow.endureXP = 0; 	cow.endure++; 	cow.defXP++;	 cow.levelXP+= .25;	updateConsole("耐力 技能现在等级 " + cow.endure)}
	if (cow.swordXP >= 100)		{ cow.swordXP = 0; 		cow.sword++; 	cow.strXP++;	 cow.levelXP++; 	updateConsole("剑 技能现在等级 " + cow.sword); recalculateWeaponDMG(); recalculatePlayerDMG();}
	if (cow.maceXP >= 100)		{ cow.maceXP = 0; 		cow.mace++; 	cow.strXP++;	 cow.levelXP++; 	updateConsole("权杖 技能现在等级 " + cow.mace); recalculateWeaponDMG(); recalculatePlayerDMG();}
	if (cow.mArmorXP >= 100)	{ cow.mArmorXP = 0; 	cow.mArmor++; 	cow.strXP++;	 cow.levelXP++; 	updateConsole("中级护甲 技能现在等级 " + cow.mArmor); recalculateArmorPieceAC(); recalculatePlayerAC();}
	if (cow.smashXP >= 100)		{ cow.smashXP = 0; 		cow.smash++; 	cow.strXP++;	 cow.levelXP+= .25;	updateConsole("粉碎 技能现在等级 " + cow.smash); recalculateWeaponDMG(); recalculatePlayerDMG();}
	if (cow.daggerXP >= 100) 	{ cow.daggerXP = 0; 	cow.dagger++; 	cow.agiXP++;	 cow.levelXP++; 	updateConsole("匕首 技能现在等级 " + cow.dagger); recalculateWeaponDMG(); recalculatePlayerDMG();}
	if (cow.dodgeXP >= 100)		{ cow.dodgeXP = 0; 		cow.dodge++; 	cow.agiXP++;	 cow.levelXP++; 	updateConsole("闪避 技能现在等级 " + cow.dodge)}
	if (cow.lArmorXP >= 100)	{ cow.lArmorXP = 0; 	cow.lArmor++; 	cow.agiXP++;	 cow.levelXP++; 	updateConsole("轻型护甲 技能现在等级 " + cow.lArmor); recalculateArmorPieceAC(); recalculatePlayerAC();}
	if (cow.climbXP >= 100)		{ cow.climbXP = 0; 		cow.climb++; 	cow.agiXP++;	 cow.levelXP+= .25;	updateConsole("攀爬 技能现在等级 " + cow.climb)}
	if (cow.fistXP >= 100)		{ cow.fistXP = 0; 		cow.fist++; 	cow.spdXP++;	 cow.levelXP++; 	updateConsole("拳头 技能现在等级 " + cow.fist); recalculateWeaponDMG(); recalculatePlayerDMG();}
	if (cow.blockXP >= 100)		{ cow.blockXP = 0; 		cow.block++; 	cow.spdXP++;	 cow.levelXP++; 	updateConsole("格挡 技能现在等级 " + cow.block)}
	if (cow.athleteXP >= 100)	{ cow.athleteXP = 0;	cow.athlete++; 	cow.spdXP++;	 cow.levelXP+= .25;	updateConsole("移动 技能现在等级 " + cow.athlete)}
	if (cow.stealthXP >= 100)	{ cow.stealthXP = 0;	cow.stealth++; 	cow.spdXP++;	 cow.levelXP+= .25;	updateConsole("隐形 技能现在等级 " + cow.stealth)}
	if (cow.speechXP >= 100)	{ cow.speechXP = 0; 	cow.speech++;	cow.chaXP++;	 cow.levelXP+= .25;	updateConsole("口才 技能现在等级 " + cow.speech)}
	if (cow.unlockXP >= 100)	{ cow.unlockXP = 0; 	cow.unlock++;	cow.chaXP++;	 cow.levelXP+= .25;	updateConsole("解锁 技能现在等级 " + cow.unlock)}
	if (cow.medicXP >= 100)		{ cow.medicXP = 0; 		cow.medic++; 	cow.chaXP++;	 cow.levelXP+= .25;	updateConsole("治疗 技能现在等级 " + cow.medic)}
	if (cow.criticalXP >= 100)	{ cow.criticalXP = 0;	cow.critical++; cow.lukXP++;	 cow.levelXP+= .25;	updateConsole("暴击 技能现在等级 " + cow.critical)}

// Cap skills at 99, and prevent any further XP gain
	if (cow.axe >= 99)			{cow.axe = 99;	   	cow.axeXP = 0; }
	if (cow.spear >= 99)		{cow.spear = 99;   	cow.spearXP = 0; }
	if (cow.hArmor >= 99)		{cow.hArmor = 99;  	cow.hArmorXP = 0; }
	if (cow.endure >= 99)		{cow.endure = 99;  	cow.endureXP = 0; }
	if (cow.sword >= 99)		{cow.sword = 99;   	cow.swordXP = 0; }
	if (cow.mace >= 99)			{cow.mace = 99;    	cow.maceXP = 0; }
	if (cow.mArmor >= 99)		{cow.mArmor = 99;  	cow.mArmorXP = 0; }
	if (cow.smash >= 99)		{cow.smash = 99;   	cow.smashXP = 0; }	
	if (cow.dagger >= 99)		{cow.dagger = 99;  	cow.daggerXP = 0; }
	if (cow.dodge >= 99)		{cow.dodge = 99;   	cow.dodgeXP = 0; }	
	if (cow.lArmor >= 99)		{cow.lArmor = 99;  	cow.lArmorXP = 0; }
	if (cow.climb >= 99)		{cow.climb = 99;   	cow.climbXP = 0; }
	if (cow.fist >= 99)			{cow.fist = 99;    	cow.fistXP = 0; }
	if (cow.block >= 99)		{cow.block = 99;   	cow.blockXP = 0; }
	if (cow.athlete >= 99)		{cow.athlete = 99; 	cow.athleteXP = 0; }
	if (cow.stealth >= 99)		{cow.stealth = 99; 	cow.stealthXP = 0; }
	if (cow.speech >= 99)		{cow.speech = 99;  	cow.speechXP = 0; }
	if (cow.unlock >= 99)		{cow.unlock = 99;  	cow.unlockXP = 0; }
	if (cow.medic >= 99)		{cow.medic = 99;   	cow.medicXP = 0; }
	if (cow.critical >= 99)		{cow.critical = 99;	cow.criticalXP = 0; }
	
// Cap statXPs at 3
	if (cow.defXP > 3) { cow.defXP = 3; }
	if (cow.strXP > 3) { cow.strXP = 3; }
	if (cow.agiXP > 3) { cow.agiXP = 3; }
	if (cow.spdXP > 3) { cow.spdXP = 3; }
	if (cow.chaXP > 3) { cow.chaXP = 3; }
	if (cow.lukXP > 3) { cow.lukXP = 3; }

// Level up, and boost stats
	if (cow.levelXP >= 10) {
		cow.def += cow.defXP; cow.str += cow.strXP; cow.agi += cow.agiXP; cow.spd += cow.spdXP; cow.cha += cow.chaXP; cow.luk += cow.lukXP;
		cow.defXP = 0; cow.strXP = 0; cow.agiXP = 0; cow.spdXP = 0; cow.chaXP = 0; cow.lukXP = 0;
		cow.levelXP = 0;
		cow.level++;
			var q = (((cow.def + cow.str + cow.agi) + 10) / cow.level * .66666);
			if (q<3) { q = 3 };
			cow.maxHP += q;
			cow.maxHP = Math.round (cow.maxHP);
		recalculateWeaponDMG(); 
		recalculatePlayerDMG();
		recalculateArmorPieceAC();
		recalculatePlayerAC();
		updateConsole ("You are now Lv. " + cow.level);
	}
}




function updateEXPProgressBars() {
	// Update EXP Bar
		var q = Math.round (cow.levelXP * 2);
		document.getElementById('expBar').innerHTML = Array(q+1).join("*");
		document.getElementById('expBarEmptySpace').innerHTML = Array(21-q).join(".");
		
	// Update Skill XP Display
	if (cow.currentImprovingSkill == "invis") {
		document.getElementById('textCurrentlyGrindingSkill').innerHTML = "";
		document.getElementById('textCurrentlyGrindingSkillXP').innerHTML = "";
	} else {
		document.getElementById('textCurrentlyGrindingSkill').innerHTML = cnItem(cow.currentImprovingSkill.toUpperCase()) +" 升级进度";
		document.getElementById('textCurrentlyGrindingSkillXP').innerHTML = '[' + cow[cow.currentImprovingSkill+'XP'].toFixed(1) + '%]';
		if ( document.getElementById('textCurrentlyGrindingSkillXP').innerHTML >= 100) { document.getElementById('textCurrentlyGrindingSkillXP').innerHTML = 0; }
		// proper spacing for skillXP. Windows treats &nbsp weird so this is an intentional hack
		document.getElementById('skillXPEmptySpace').innerHTML = "<span style='opacity:0.001;'>" + Array(26-document.getElementById('textCurrentlyGrindingSkillXP').innerHTML.length).join(".") + '</span>';
		// proper spacing for Location
		document.getElementById('locationReadoutEmptySpace').innerHTML = "<span style='opacity:0.001;'>" + Array(24-document.getElementById('textCurrentMap').innerHTML.length).join(".") + '</span>';
	}
}




function preloadStuff() {
	function load(filename) {
	    var xmlhttp;
	    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
	        xmlhttp = new XMLHttpRequest();
	    } else { // code for IE6, IE5
	        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	    }
	    xmlhttp.onreadystatechange = function() {
	        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var q = document.createElement('span');	// Extra stuff to make IE happy. Fuck IE
				q.setAttribute('id', 'loadSound');		//
				q.setAttribute('class', 'invisible');	//
				document.body.appendChild(q);			//
	            document.getElementById("loadSound").innerHTML = '<embed src="' + filename + '" controller="1" autoplay="0" autostart="0" />';
	        }
	    }
	    xmlhttp.open("GET", filename, true);
	    xmlhttp.send();
	}
	
	// Fonts
	load('Courier.ttf');
	load('Monaco.ttf');
	// Themes
	load('themeBlack.css');
	load('themeAmber.css');
	load('themeBios.css');
	load('themeBlue.css');
	load('themeMatrix.css');
	load('themePurple.css');
	load('themeWhite.css');	
}




function incrementGame() {
	cow.gameplayClock++;
	if (cow.gameplayClock % 20) 								{} else { autoSave(); cow.minutesPlayed++; cow.gameplayClock = 0 }		// If remainder is 0, do this
	if (cow.minutesPlayed % 5 == 0 && cow.gameplayClock == 1)	{ updateConsole ("游戏已保存.."); }
	if (cow.minutesPlayed >= 60) 								{ cow.hoursPlayed++; cow.minutesPlayed = 0 }
	setTimeout('game()', 3000)
}