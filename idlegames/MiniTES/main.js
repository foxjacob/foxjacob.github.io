// master game loop
function game() {

	if (cow.currentTab == "main") {
		rerollWorldMapRNGifMasterGameTimerIsUp();

		selectAdventureTypeBasedOnCurrentArea();

		statGrowth();

		updateMainTextSpans();

		updateEXPProgressBars();
	}
	
	incrementGame();

}

game();