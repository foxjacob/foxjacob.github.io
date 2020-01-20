function combat (mobTier, itemDropChance, itemDropVariableName, minDamage, maxDamage, hitRate, AC, mobHP, critChance, evasionChance, blockChance, mobName) {

	if (cow.combatState == "mobIntroductionDelay") {					// extra turn for mob introduction text
		cow.combatState = "player";
	}
	
	if (cow.masterGamestateVariable == "startingAnEvent") { 			// main code blob for initializing combat
		cow.mobCurrentHP = mobHP;
		cow.combatState = "mobIntroductionDelay";
		cow.masterGamestateVariable = "inCombat";
		cow.endTurn = false;
		writeConsole (cnItem(mobName) + ' 靠近!');
		cow.currentImprovingSkill = "invis";
	}




	// Check which armor piece the monster attacks..
	var RNG = Math.floor(Math.random()*99);
	var RNG2 = Math.floor(Math.random()*99);
	var RNG3 = Math.floor(Math.random()*99);
	var RNG4 = Math.floor(Math.random()*99);
	var RNG5 = Math.floor(Math.random()*99);
	var RNG6 = Math.floor(Math.random()*99);
	var RNG7 = Math.floor(Math.random()*99);
	if (RNG < 15) { var r = "HeadArmor"; } else
	if (RNG < 30) { var r = "ShoulderArmor"; } else
	if (RNG < 45) { var r = "Gloves"; } else
	if (RNG < 70) { var r = "BodyArmor"; } else
	if (RNG < 85) { var r = "Pants"; } else
	if (RNG <= 99) { var r = "Shoes"; }
	// Get the skill that the armor piece uses..
	var t = cow['equipped'+r].substring(0, 5);
	// Alter the string a bit so that it's usable with the EXP variables
	switch (t) {
		case "light": var s = "lArmor"; break;
		case "mediu": var s = "mArmor"; break;
		case "heavy": var s = "hArmor"; break;
		case "":  	  var s = "endure"; break;	}
	// init critMessage, block, and dodge each turn
	var critMessage = false;
	var critMessageMob = false;
	var chanceToCrit = 0;
		var playerBlockChance = 0;
		var playerBlocksAttack = false;
	var playerEvasionRate = 0;
	var playerDodgesAttack = false;
		var mobBlockChance = 0;
		var mobBlocksAttack = false;
	var mobEvasionRate = 0;
	var mobDodgesAttack = false;
	var playerHitRate = 0;


	// calculate damage to monster
	var v = rngWithinRange (cow.minDMG, cow.maxDMG);					// grab damage randomly from weapon range
	var armorClassReduction = ((AC/2/v)+1);								// calculate acr
	if (armorClassReduction > 4) {armorClassReduction = 4}				// caps armorClassReduction at 4
	v = (v/armorClassReduction);										// apply acr
	v = Math.max(Math.round(v), 0); 									// remove decimal places
	
	
	// calculate chance for player to crit
	chanceToCrit += cow.critical;
	chanceToCrit += cow.luk;
	if (chanceToCrit > 30) { chanceToCrit = 30; }
	if (cow.keyItem14have == true) { chanceToCrit += (cow.luk* 0.5) }
	if (RNG2 <= chanceToCrit) { v *= 1.5; critMessage = true; };		// roll for CRITICAL!!!
	if (cow.keyItem6have == true && critMessage == false) {				// second chance to CRITICAL!!!
		var RNG2 = Math.floor(Math.random()*99);
		if (RNG2 <= chanceToCrit) { v *= 1.5; critMessage = true; }; }
	if (cow.keyItem16have == true) { v *= 1.06; }
	
	// calculate damage to player
	var w = rngWithinRange (minDamage, maxDamage);						// grab damage randomly from weapon range
	var armorClassReductionMob = ((((cow.ac/2) + cow.endure) /w) +1);	// calculate acr
	if (armorClassReductionMob > 4) {armorClassReductionMob = 4}		// caps armorClassReduction at 4
	if (blockChance != 0) { w *= 1.1 } 									// no shield boost if mob blockRate is 0
	if (RNG3 <= critChance) { w *= 1.5; critMessageMob = true; };		// roll for CRITICAL!!!
	w = (w/armorClassReductionMob);										// apply acr
	if (cow.keyItem18have == true) { w -= 2;}
	w = Math.max(Math.round(w), 0);										// remove decimal places
	
	
	// Calculate player blocking chance
	playerBlockChance += (cow.block / 5);
	if (cow.equippedShield.substring(0, 5) == "light") { playerBlockChance += (cow.bestlightShield * 2); }
	if (cow.equippedShield.substring(0, 6) == "medium") { playerBlockChance += (cow.bestmediumShield * 2); }
	if (cow.equippedShield.substring(0, 5) == "heavy") { playerBlockChance += (cow.bestheavyShield * 2); }
	if (playerBlockChance < 5) { playerBlockChance = 5;}
	if (playerBlockChance > 30 && cow.keyItem11have == false) { playerBlockChance = 30;}
	if (playerBlockChance > 30 && cow.keyItem11have == true) { playerBlockChance = 40;}
	if (cow.keyItem19have == true && cow.equippedShield == "") { playerBlockChance += 10 }
	if (RNG4 <= playerBlockChance) { playerBlocksAttack = true; }
	if (cow.equippedShield == "") { playerBlocksAttack = false; }
	
	
	// Calculate player dodging chance
	playerEvasionRate += (cow.dodge / 1.5);
	playerEvasionRate += (cow[cow.equippedWeapon.slice(0, -1).toLowerCase()] * 2);
	playerEvasionRate += (cow.stealth / 2);
	playerEvasionRate += (cow.spd / 3);
	if (cow.keyItem14have == true) { playerEvasionRate += (cow.luk / 1.5); } else { playerEvasionRate += (cow.luk / 2); }
	if (cow.keyItem5have == true) { playerEvasionRate -= 5; } else { playerEvasionRate -= 15; }
	if (playerEvasionRate < 0) {playerEvasionRate = 0;}
	playerEvasionRate = (hitRate - playerEvasionRate);
	if (RNG5 >= playerEvasionRate) { playerDodgesAttack = true; }
	
	
	// Calculate mob blocking chance
	if (RNG6 <= blockChance) { mobBlocksAttack = true; }
	
	
	// Calculate mob dodging chance
	playerHitRate += (cow[cow.equippedWeapon.slice(0, -1).toLowerCase()] * 2);			// weapon skill; substring cluster**** code
	playerHitRate += (cow.spd / 3);
	if (cow.keyItem14have == true) { playerEvasionRate += (cow.luk / 1.5); } else { playerEvasionRate += (cow.luk / 2); }
	playerHitRate += 25;
	if (cow.keyItem20have == true) { playerHitRate += 10; }
	if (playerHitRate < 50) { playerHitRate = 50}
	playerHitRate = (playerHitRate - evasionChance);
	if (RNG5 >= playerHitRate) { mobDodgesAttack = true; }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// player turn..
	if (cow.combatState == "player") {
		
		var q = cow.equippedWeapon.slice(0, -1).toLowerCase();
		

		// Monster dodges..
		if (mobDodgesAttack == true) {
			writeConsole ('未命中');
			cow.endTurn = true;
			cow.currentImprovingSkill = "invis";
		}
		// Monster blocks..
		if (cow.endTurn == false && mobBlocksAttack == true) {
			writeConsole (cnItem(mobName) + ' 格挡了你的攻击!');
			cow.endTurn = true;
			cow[q+'XP'] += 1.2;
			cow.currentImprovingSkill = q;
		}
		// Otherwise, deal damage to monster
		if (cow.endTurn == false) {
			cow.mobCurrentHP -= v;

			if (critMessage == false && cow.mobCurrentHP > 0) { 
				writeConsole ("你对 "+cnItem(mobName) + " 造成了 " + v.toFixed(0) + " 伤害" + " (敌人还有 " + (Math.ceil((cow.mobCurrentHP/mobHP)*100)) + "% 生命剩余)");
				cow[q+'XP'] += 1.8;
				cow.currentImprovingSkill = q;
			}
			if (critMessage == true && cow.mobCurrentHP > 0) { 
				writeConsole ("你对 "+cnItem(mobName) + " 造成了 " + v.toFixed(0) + " 暴击！伤害" + " (敌人还有 " + (Math.ceil((cow.mobCurrentHP/mobHP)*100)) + "% 生命剩余)");
				critMessage = false;
				cow.criticalXP += 3.3;
				cow[q+'XP'] += 1.8;
				cow.currentImprovingSkill = "critical";
			}
		}
		cow.combatState = "mob";
		cow.endTurn = false;
	} else
		
		
		
		
	// .. or enemy turn
	if (cow.combatState == "mob") {
		// Player dodges..
		if (playerDodgesAttack == true) {
			writeConsole ('&nbsp;&nbsp;&nbsp;&nbsp; 未命中');
			cow.dodgeXP += 1.1;
			cow[s+'XP'] += 2.4;
			cow.currentImprovingSkill = "dodge";
			cow.endTurn = true;
		}
		// Player blocks..
		if (cow.endTurn == false && playerBlocksAttack == true) {
			writeConsole ('你格挡了对方攻击!');
			cow.blockXP += 17.3;
			cow.currentImprovingSkill = "block";
			cow.endTurn = true;
		}
		
		// Otherwise, deal damage to player
		if (cow.endTurn == false) {
			cow.hp -= w;
			
			cow[s+'XP'] += 1.9;
			cow.currentImprovingSkill = s;
			
			if (critMessageMob == false && cow.hp > 0) { writeConsole ("敌人对你你造成了 " + w.toFixed(0) + " 伤害" + " (你还有" + (Math.ceil((cow.hp/cow.maxHP)*100)) + "% 生命剩余)"); }	
			if (critMessageMob == true && cow.hp > 0) {
				writeConsole ("敌人对你你造成了 " + w.toFixed(0) + " 暴击! 伤害" + " (你还有" + (Math.ceil((cow.hp/cow.maxHP)*100)) + "% 生命剩余)");
				critMessage = false;
			}
		}
		cow.combatState = "player";
		cow.endTurn = false;
	}
















	// end combat
	if (cow.combatState == "exitingWin") {
		cow.masterGamestateVariable = "startingAnEvent";
		cow.restingMap = cow.currentMap;
			cow.restingTime = (((1-(cow.hp/cow.maxHP))*10) / (cow.medic/10));						// FORMULA FOR CALCULATING RECOVERY TIME!!!!!
			if (cow.keyItem3have == true) { cow.restingTime *= 0.666; }								///
			if (cow.restingTime > 10) { cow.restingTime = 10; }										//////
			if (cow.restingTime < 1) { cow.restingTime = 1; }										////////////
			if (cow.hp == cow.maxHP) { cow.restingTime = 1; }										///////////////////
		cow.overrideCurrentMapDisplay = cow.currentMap;
		cow.currentMap = "resting";
	}
	if (cow.combatState == "exitingDead") {
		cow.masterGamestateVariable = "startingAnEvent";
		if (cow.respawnAtVieda == false) { cow.respawnLocation = cow.currentMap; cow.overrideCurrentMapDisplay = cow.currentMap;}
			 else { cow.respawnLocation = "Vieda Port"; 
			 	cow.overrideCurrentMapDisplay = "Vieda Port"; 
				document.getElementById('locationReadoutEmptySpace').innerHTML = Array(14).join("&nbsp;"); }
		cow.currentMap = "respawning";
	}
	if (cow.combatState == "takingLoot") {
		addItemDropToInventory(itemDropVariableName);
		cow.combatState = "exitingWin";
	}
	if (cow.mobCurrentHP <= 0 && cow.combatState == "mob") {		
		if (critMessage == true) {										// stat growth if you oneshot the monster					
			cow.criticalXP += 3.3;										//
			cow[q+'XP'] += 1.8;											//		
			cow.currentImprovingSkill = "critical";						//
			critMessage = false											//		
		}                                                               //
		if (critMessage == false) {                                     ///
			cow[q+'XP'] += 1.8;											/////
			cow.currentImprovingSkill = q;								///////////
		}																////////////////////
		writeConsole (cnItem(mobName) + ' 被你杀死了!');
		cow.combatState = "exitingWin";
		lockAllTabs();
		if (cow.itemDropRNG < itemDropChance  && itemDropVariableName != "") { cow.combatState = "takingLoot"; }
	}
	if (cow.hp <= 0 && cow.combatState == "player") {
		cow.combatState = "exitingDead"
		writeConsole ("You have died in battle..");
		lockAllTabs();
	}	
}