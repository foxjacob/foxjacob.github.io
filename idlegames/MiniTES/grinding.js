function grind (grindSpeed, itemDropChance, itemDropVariableName, skillLevelRequirementToEnter, skillRequiredToEnter, skill, text, lockedText) {
	// Check if the player can enter the grinding zone..
	if (skillRequiredToEnter == "") { var enter = true; }
	if (cow[skillRequiredToEnter] >= skillLevelRequirementToEnter) { var enter = true; }
	
	// If yes, then grind..
	if (enter == true) {
		writeConsole (text);
		if (cow.itemDropRNG < itemDropChance && itemDropVariableName != "") { addItemDropToInventory (itemDropVariableName); }
		cow[skill+'XP'] += grindSpeed;
		cow.currentImprovingSkill = skill;
	} else {
		
	// Otherwise, activate the skillgate lock ..
	writeConsole (lockedText);
	cow.currentImprovingSkill = "invis";
	}
	
	// And then refresh the RNG
	cow.masterGamestateVariable = "refreshRNGNow";
}








function waitForSomethingIngame (turnsToWait, respawnLocation, text, doneText) {
	// initialize
	if (cow.masterGamestateVariable == "startingAnEvent") { 
		// document.getElementById('textCurrentMap').innerHTML = cow.currentMap;					// unnecessary?
		cow.currentImprovingSkill = "invis";
		cow.waitCounter = 0;
		cow.masterGamestateVariable = "waiting"; 
	}

	// wait...
	if (cow.masterGamestateVariable == "waiting") {
		if (cow.waitCounter < turnsToWait) { writeConsole (text + ' (' + Math.floor((cow.waitCounter/turnsToWait)*100) + '%)'); }
		else { writeConsole (doneText); }
		cow.waitCounter++;
		if (cow.currentMap == "resting") {cow.medicXP += 0.8; cow.currentImprovingSkill = "medic"; }
		if (cow.currentMap == "travelling") {cow.athleteXP += 1.2; cow.currentImprovingSkill = "athlete"; }
	}

	// end
	if (cow.waitCounter > turnsToWait) {
		cow.currentMap = respawnLocation;
		cow.hp = cow.maxHP;
		cow.masterGamestateVariable = "refreshRNGNow";
		updateMainTextSpans();
		unlockAllTabsExceptMain();
	}
}