/*		Trimps
		Copyright (C) 2019 Zach Hood

		This program is free software: you can redistribute it and/or modify
		it under the terms of the GNU General Public License as published by
		the Free Software Foundation, either version 3 of the License, or
		(at your option) any later version.

		This program is distributed in the hope that it will be useful,
		but WITHOUT ANY WARRANTY; without even the implied warranty of
		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
		GNU General Public License for more details.

		You should have received a copy of the GNU General Public License
		along with this program (if you are reading this on the original
		author's website, you can find a copy at
		<trimps.github.io/license.txt>). If not, see
		<http://www.gnu.org/licenses/>. */

//Spoilers ahead, proceed with caution
function newGame () {
var toReturn = {
	global: {
		//New and accurate version
		stringVersion: '5.1.3',
		//Leave 'version' at 4.914 forever, for compatability with old saves
		version: 4.914,
		isBeta: false,
		betaV: 0,
		killSavesBelow: 0.13,
		uniqueId: new Date().getTime() + "" + Math.floor(Math.random() * 1e10),
		playerGathering: "",
		playerModifier: 1,
		buildingsQueue: [],
		timeLeftOnCraft: 0,
		crafting: "",
		timeLeftOnTrap: -1,
		world: 1,
		universe: 1,
		gridArray: [],
		mapGridArray: [],
		mapsOwnedArray: [],
		currentMapId: "",
		lastClearedCell: -1,
		lastClearedMapCell: -1,
		pauseFight: true,
		soldierHealth: 0,
		soldierHealthMax: 0,
		soldierHealthRemaining: 0,
		soldierCurrentAttack: 0,
		soldierCurrentBlock: 0,
		soldierEnergyShield: 0,
		soldierEnergyShieldMax: 0,
		fighting: false,
		health: 50,
		attack: 6,
		block: 0,
		autoBattle: false,
		autoCraftModifier: 0,
		start: new Date().getTime(),
		time: 0,
		portalTime: new Date().getTime(),
		lastFightUpdate: "",
		battleCounter: 0,
		firing: false,
		mapsActive: false,
		preMapsActive: false,
		switchToMaps: false,
		switchToWorld: false,
		lookingAtMap: "",
		mapsOwned: 0,
		totalMapsEarned: 0,
		freshFight: false,
		tab: "All",
		repeatMap: false,
		buyAmt: 1,
		numTab: 1,
		spreadsheetMode: false,
		lockTooltip: false,
		portalActive: false,
		mapsUnlocked: false,
		lastOnline: 0,
		buyTab: "all",
		nextQueueId: 0,
		kongBonusMode: false,
		canRespecPerks: true,
		respecActive: false,
		heliumLeftover: 0,
		viewingUpgrades: false,
		totalPortals: 0,
		totalRadPortals: 0,
		lastCustomAmt: 1,
		trapBuildAllowed: false,
		trapBuildToggled: false,
		lastSkeletimp: 0,
		pp: [],
		highestLevelCleared: 0,
		highestRadonLevelCleared: 0,
		b: 0,
		challengeActive: "",
		selectedChallenge: "",
		lastOfflineProgress: "",
		sLevel: 0,
		totalGifts: 0,
		brokenPlanet: false,
		formation: 0,
		bestHelium: 0,
		tempHighHelium: 0,
		totalHeliumEarned: 0,
		bestRadon: 0,
		tempHighRadon: 0,
		totalRadonEarned: 0,
		radonLeftover: 0,
		newUniverse: 1,
		removingPerks: false,
		lastBreedTime: 0,
		antiStacks: 0,
		prisonClear: 0,
		frugalDone: false,
		lastUnlock: 0,
		lowestGen: -1,
		breedBack: -1,
		titimpLeft: 0,
		mapBonus: 0,
		slowDone: false,
		turkimpTimer: 0,
		statsMode: "current",
		achievementBonus: 0,
		lastLowGen: 0,
		presimptStore: "food",
		lastWarp: 0,
		zoneStarted: new Date().getTime(),
		mapStarted: new Date().getTime(),
		bionicOwned: 0,
		roboTrimpLevel: 0,
		roboTrimpCooldown: 0,
		useShriek: false,
		usingShriek: false,
		autoUpgrades: false,
		autoUpgradesAvailable: false,
		autoPrestiges: 0,
		autoStorage: false,
		autoStorageAvailable: false,
		totalVoidMaps: 0,
		voidMapsToggled: false,
		voidBuff: "",
		lastVoidMap: 0,
		voidSeed: Math.floor(Math.random() * 1000000),
		scrySeed: Math.floor(Math.random() * 1000000),
		heirloomSeed: Math.floor(Math.random() * 1000000),
		heirloomBoneSeed: Math.floor(Math.random() * 1000000),
		eggSeed: Math.floor(Math.random() * 1000000),
		mutationSeed: Math.floor(Math.random() * 1000000),
		enemySeed: Math.floor(Math.random() * 1000000),
		u2WorldSeed: Math.floor(Math.random() * 1000000),
		reincarnateSeed: Math.floor(Math.random() * 1000000),
		heirloomsExtra: [],
		heirloomsCarried: [],
		StaffEquipped: {},
		ShieldEquipped: {},
		CoreEquipped: {},
		nullifium: 0,
		maxCarriedHeirlooms: 1,
		selectedHeirloom: [],
		lastPortal: -1,
		lastRadonPortal: 0,
		addonUser: false,
		eggLoc: -1,
		researched: false,
		bonePortalThisRun: false,
		maxSplit: 1,
		maxSoldiersAtStart: -1,
		playFabLoginType: -1,
		lastCustomExact: 1,
		voidMaxLevel: -1,
		voidMaxLevel2: -1,
		rememberInfo: false,
		spireActive: false,
		spireDeaths: 0,
		Geneticistassist: false,
		GeneticistassistSetting: -1,
		GeneticistassistSteps: [-1, 1, 10, 30],
		spireRows: 0,
		goldenUpgrades: 0,
		voidDeaths: 0,
		essence: 0,
		spentEssence: 0,
		skeleSeed: Math.floor(Math.random() * 1000000),
		decayDone: false,
		dailyChallenge: {},
		recentDailies: [],
		dailyHelium: 0,
		breedTime: 1,
		magmite: 0,
		magmaFuel: 0,
		generatorMode: 1, //0 passive, 1 active, 2 hybrid
		trimpsGenerated: 0,
		timeSinceLastGeneratorTick: -1,
		canMagma: true,
		lastBonePresimpt: 0,
		runningChallengeSquared: false,
		totalSquaredReward: 0,
		perkPresetU1: {
			perkPreset1: {},
			perkPreset2: {},
			perkPreset3: {}
		},
		perkPresetU2: {
			perkPreset1: {},
			perkPreset2: {},
			perkPreset3: {}
		},
		improvedAutoStorage: false,
		firstCustomAmt: -1,
		firstCustomExact: -1,
		autoGolden: -1,
		autoStructureSetting: {enabled: false},
		autoStructureSettingU2: {enabled: false},
		autoJobsSetting: {enabled: false},
		autoJobsSettingU2: {enabled: false},
		autoEquipSetting: {enabled: false},
		autoEquipSettingU2: {enabled: false},
		autoEquipUnlocked: false,
		passive: true,
		spiresCompleted: 0,
		lastSpireCleared: 0,
		sugarRush: 0,
		holidaySeed: Math.floor(Math.random() * 100000),
		hideMapRow: false,
		mapExtraBonus: "",
		realBreedTime: 0,
		fluffyExp: 0,
		fluffyExp2: 0,
		fluffyPrestige: 0,
		fluffyPrestige2: 0,
		selectedMapPreset: 1,
		runFluffyExp: 0,
		runTokens: 0,
		bestTokens: 0,
		genPaused: false,
		canMapAtZone: false,
		capTrimp: false,
		lastSoldierSentAt: new Date().getTime(),
		supervisionSetting: 100,
		canScryCache: false,
		waitToScry: false,
		waitToScryMaps: false,
		freeTalentRespecs: 3,
		genStateConfig: [],
		uberNature: "",
		//For the log notation base 
		logNotBase: 10,
		lowestShield: 100,
		hemmTimer: 150,
		armyAttackCount: 0,
		mapHealthActive: false,
		voidPowerActive: false,
		lastHeirlooms: {
			u1: {
				Shield: -1,
				Staff: -1
			},
			u2: {
				Shield: -1,
				Staff: -1
			}
		},
		mapPresets: {
			p1: {
				loot: 0,
				difficulty: 0,
				size: 0,
				biome: "Random",
				specMod: "0",
				perf: false,
				extra: 0,
				offset: 'd'
			},
			p2: {
				loot: 0,
				difficulty: 0,
				size: 0,
				biome: "Random",
				specMod: "0",
				perf: false,
				extra: 0,
				offset: 'd'	
			},
			p3: {
				loot: 0,
				difficulty: 0,
				size: 0,
				biome: "Random",
				specMod: "0",
				perf: false,
				extra: 0,
				offset: 'd'
			}
		},
		mapPresets2: {
			p1: {
				loot: 0,
				difficulty: 0,
				size: 0,
				biome: "Random",
				specMod: "0",
				perf: false,
				extra: 0,
				offset: 'd'
			},
			p2: {
				loot: 0,
				difficulty: 0,
				size: 0,
				biome: "Random",
				specMod: "0",
				perf: false,
				extra: 0,
				offset: 'd'	
			},
			p3: {
				loot: 0,
				difficulty: 0,
				size: 0,
				biome: "Random",
				specMod: "0",
				perf: false,
				extra: 0,
				offset: 'd'
			}
		},
		lootAvgs: {
			food: {average:0, accumulator: 0},
			wood: {average:0, accumulator: 0},
			metal: {average:0, accumulator: 0},
			gems: {average:0, accumulator: 0},
			fragments: {average:0, accumulator: 0},
		},
		menu: {
			buildings: true,
			jobs: false,
			upgrades: false
		},
		messages: {
			Story: {
				enabled: true
			},
			Loot: {
				enabled: true,
				primary: true,
				secondary: true,
				bone: true,
				exotic: true,
				helium: true,
				essence: true,
				token: true,
				magma: true,
				events: true,
				cache: true
			},
			Unlocks: {
				enabled: true,
				repeated: true,
				unique: true
			},
			Combat: {
				enabled: true,
				trimp: true,
				enemy: true
			},
			Notices: {
				enabled: true
			}
		},
		prestige: {
			attack: 13,
			health: 14,
			cost: 57,
			block: 10
		},
		difs: {
			attack: 0,
			health: 0,
			block: 0,
			trainers: 0
		},
		getEnemyAttack: function (level, name, ignoreImpStat) {
			var world = getCurrentMapObject();
			var amt = 0;
			world = (game.global.mapsActive) ? world.level : game.global.world;
			var attackBase = (game.global.universe == 2) ? 750 : 50;
			amt += attackBase * Math.sqrt(world) * Math.pow(3.27, world / 2);
			amt -= 10;
			if (world == 1){
				amt *= 0.35;
				amt = (amt * 0.20) + ((amt * 0.75) * (level / 100));
			}
			else if (world == 2){
				amt *= 0.5;
				amt = (amt * 0.32) + ((amt * 0.68) * (level / 100));
			}
			else if (world < 60)
				amt = (amt * 0.375) + ((amt * 0.7) * (level / 100));
			else{
				amt = (amt * 0.4) + ((amt * 0.9) * (level / 100));
				amt *= Math.pow(1.15, world - 59);
			}
			if (world < 60) amt *= 0.85;
			if (world > 6 && game.global.mapsActive) amt *= 1.1;
			if (!ignoreImpStat)
				amt *= game.badGuys[name].attack;
			if (game.global.universe == 2){
				var part1 = (world > 40) ? 40 : world;
				var part2 = (world > 60) ? 20 : world - 40;
				var part3 = (world - 60);
				if (part2 < 0) part2 = 0;
				if (part3 < 0) part3 = 0;
				amt *= Math.pow(1.5, part1);
				amt *= Math.pow(1.4, part2);
				amt *= Math.pow(1.32, part3);
			}
			return Math.floor(amt);
		},
		getEnemyHealth: function (level, name, ignoreImpStat) {
			var world = getCurrentMapObject();
			world = (game.global.mapsActive) ? world.level : game.global.world;
			var amt = 0;
			var healthBase = (game.global.universe == 2) ? 10e7 : 130;
			amt += healthBase * Math.sqrt(world) * Math.pow(3.265, world / 2);
			amt -= 110;
			if (world == 1 || world == 2 && level < 10){
				amt *= 0.6;
			amt = (amt * 0.25) + ((amt * 0.72) * (level / 100));
			}
			else if (world < 60)
				amt = (amt * 0.4) + ((amt * 0.4) * (level / 110));
			else{
				amt = (amt * 0.5) + ((amt * 0.8) * (level / 100));
				amt *= Math.pow(1.1, world - 59);
			}
			if (world < 60) amt *= 0.75;
			if (world > 5 && game.global.mapsActive) amt *= 1.1;
			if (!ignoreImpStat)
				amt *= game.badGuys[name].health;
			if (game.global.universe == 2){
				var part1 = (world > 60) ? 60 : world;
				var part2 = (world - 60);
				if (part2 < 0) part2 = 0;
				amt *= Math.pow(1.4, part1);
				amt *= Math.pow(1.32, part2);
			}
			return Math.floor(amt);
		}
	},
	empowerments: {
		Poison: {
			description: function () {
				return "当这个赋权激活时，你的脆皮的每次成功攻击会给敌人叠加一个毒药负面效果,使你伤害的<b>" + this.formatModifier(this.getModifier()) + "%</b>叠入毒药效果中。每个回合毒药效果都会扣除敌人相应的生命，直到它死亡。你的脆皮每次攻击都会进一步叠加毒药效果。";
			},
			upgradeDescription: function () {
				return "毒药赋权期间，你每次攻击对敌人叠加的毒药效果增加<b>" + this.formatModifier(this.baseModifier) + "%</b>，现在你的毒药伤害系数是<b>" + this.formatModifier(this.getModifier()) +"%</b>, 下一级毒药伤害系数是<b>" + this.formatModifier(this.getModifier(1)) + "%</b>。";
			},
			baseModifier: 0.01,
			getModifier: function (change) {
				if (!change) change = 0;
				return ((this.getLevel() + change) * this.baseModifier);
			},
			formatModifier: function (number){
				return prettify(number * 100);
			},
			getDamage: function(){
				if (getEmpowerment() == "Poison" && getUberEmpowerment() == "Poison") return (this.currentDebuffPower * 2);
				return this.currentDebuffPower;
			},
			getLevel: function(){
				var level = this.level;
				if (game.talents.nature2.purchased) level += 5;
				return level;
			},
			getRetainBonus: function(){
				var extra = 0;
				if (game.talents.nature2.purchased){
					extra += 5;
				}
				if (Fluffy.isRewardActive('naturesWrath')){
					extra += 10;
				}
				return extra;
			},
			color: "#33bb33",
			currentDebuffPower: 0,
			level: 1,
			retainLevel: 0,
			tokens: 0,
			nextUberCost: 0,
			enlightenDesc: "your Trimps deal 3x damage, and Poison Nature stacks deal 2x damage"
		},
		Wind: {
			description: function () {
				return "When this Empowerment is active, each successful attack by your Trimps stacks a debuff on the enemy, causing winds to swell and knock extra resources into your reach. Each stack increases Helium gained from the World by <b>" + this.formatModifier(this.getModifier(0, true)) + "%</b> and increases all other basic resources gained from all sources by <b>" + this.formatModifier(this.getModifier()) + "%</b> until that enemy dies (maximum of " + this.stackMax() + " stacks). This bonus does not apply to Fragments, and the helium bonus does not apply to maps.";
			},
			upgradeDescription: function () {
				return "Increases the amount of extra Helium you find in the World by <b>" + this.formatModifier(this.baseModifier) + "%</b> and non-Helium basic resources from all sources by <b>" + this.formatModifier(this.baseModifier * 10) + "%</b> per stack when the Empowerment of Wind is active. Your current bonus is <b>" + this.formatModifier(this.getModifier(0, true)) + "%</b> Helium, and next level will bring your bonus to <b>" + this.formatModifier(this.getModifier(1, true)) + "%</b> extra helium. Non-Helium resource gain is always " + ((Fluffy.isRewardActive('naturesWrath')) ? "double" : "10x") + " that of Helium, and the Helium bonus does not apply in maps.";
			},
			baseModifier: 0.001,
			getModifier: function (change, forHelium) {
				if (!change) change = 0;
				var mod = ((this.getLevel() + change) * this.baseModifier);
				if (!forHelium) mod *= 10;
				if (forHelium && Fluffy.isRewardActive("naturesWrath")){
					mod *= 5;
				}
				return mod;
			},
			formatModifier: function (number) {
				return prettify(number * 100);
			},
			getCombatModifier: function (forHelium) {
				var mod = this.currentDebuffPower * this.getModifier(0, forHelium);
				return mod;
			},
			getLevel: function(){
				var level = this.level;
				if (game.talents.nature2.purchased) level += 5;
				return level;
			},
			getRetainBonus: function(){
				var extra = 0;
				if (game.talents.nature2.purchased){
					extra += 5;
				}
				if (getUberEmpowerment() == "Wind"){
					extra += 5;
				}
				return extra;
			},
			currentDebuffPower: 0,
			color: "#337733",
			level: 1,
			retainLevel: 0,
			stackMax: function(){
				return (getUberEmpowerment() == "Wind") ? 300 : 200;
			},
			tokens: 0,
			nextUberCost: 0,
			enlightenDesc: "you gain a 10x increase in all non-Helium loot, Wind stacks accumulate twice as fast, Wind can stack to 300, Wind gains an additional 5% stack transfer rate, and your Trimps gain access to the Wind Formation. This new Formation prevents any enemies in Wind Zones from falling below 1HP before they have 300 stacks of Wind. Wind Formation also grants all bonuses of Scrying Formation and allows collection of Dark Essence with no Trimp stat penalty",
			formationDesc: "You have been Enlightened by Wind! While in this Formation in a Wind Zone, enemies will never fall below 1HP before they have 300 stacks of Wind.<br/><br/>This Formation also allows collection of Dark Essence, and grants all bonuses of the Scryer Formation."
		},
		Ice: {
			description: function () {
				return "When this Empowerment is active, enemies will be Chilled each time your Trimps attack. The Chill debuff stacks, reduces the damage that enemy deals by <b>" + this.formatModifier(this.getModifier()) + "%</b> (compounding) per stack, and increases the damage your Trimps deal to that enemy by " + ((Fluffy.isRewardActive('naturesWrath')) ? " twice that amount (with diminishing returns, max of +200% attack)" : "the same amount (with diminishing returns, max of 100%)") + " until it dies." + this.overkillDesc();
			},
			upgradeDescription: function () {
				return "Reduces the enemy's damage dealt from each stack of Chilled when the Empowerment of Ice is active by <b>" + this.formatModifier(1 - this.baseModifier) + "%</b> (compounding), and increases the damage your Trimps deal to that enemy by " + ((Fluffy.isRewardActive('naturesWrath')) ? " twice that amount (with diminishing returns, max of +200% attack)" : "the same amount (with diminishing returns, max of 100%)") + ". Your current bonus is <b>" + this.formatModifier(this.getModifier()) + "%</b>, and next level will bring your bonus to <b>" + this.formatModifier(this.getModifier(1)) + "%</b>." + this.overkillDesc();
			},
			overkillDesc: function(){
				var level = this.getLevel();
				if (level < 50) return "<div style='margin-top: 10px'><b>You will earn +1 Overkill during Ice Zones once you reach Level 50, and a second Overkill cell at Level 100!</b></div>";
				else if (level < 100) return "<div style='margin-top: 10px'><b>You are earning +1 Overkill during Ice Zones! Earn another at Level 100!</b></div>";
				else return "<div style='margin-top: 10px'><b>Your Ice level is" + ((level > 100) ? " over" : "") + " 100, and you are gaining an additional 2 cells of Overkill during Ice Zones!</b></div>";
			},
			baseModifier: 0.01,
			getModifier: function (change) {
				if (!change) change = 0;
				return Math.pow(1 - this.baseModifier, (this.getLevel() + change));
			},
			getCombatModifier: function () {
				return Math.pow(this.getModifier(), this.currentDebuffPower);
			},
			getDamageModifier: function() {
				var mod = 1 - this.getCombatModifier();
				if (Fluffy.isRewardActive('naturesWrath')) mod *= 2;
				return mod;
			},
			formatModifier: function (number){
				return prettify((1 - number) * 100);
			},
			getLevel: function(){
				var level = this.level;
				if (game.talents.nature2.purchased) level += 5;
				return level;
			},
			getRetainBonus: function(){
				var extra = 0;
				if (game.talents.nature2.purchased){
					extra += 5;
				}
				return extra;
			},
			color: "#3333bb",
			currentDebuffPower: 0,
			level: 1,
			retainLevel: 0,
			tokens: 0,
			nextUberCost: 0,
			get enlightenDesc(){
				return "your Trimps gain +2 maximum Overkill cells " + ((game.global.spiresCompleted >= 2) ? " and +0.25% increased Fluffy Exp per Ice level <b>(currently " + prettify(game.empowerments.Ice.getLevel() * 0.25) + "%)</b>" : "") + " for your entire run. In Ice Zones, Ice stacks accumulate twice as fast, and if an enemy is hit by your Trimps while it has 20 or more stacks of Ice and is below 50% health, it will instantly shatter! The shards of Ice from the shattered enemy destroy everything in their path, triggering your maximum Overkill regardless of your damage";
			}
		}
	},
	singleRunBonuses: {
		goldMaps: {
			name: "黄金地图",
			text: "+100%地图战利品",
			cost: 20,
			confirmation: "你正在花费20骨头购买黄金地图。<b>在你的下一轮前</b>，你现在的和未来的所有地图战利品获得增加100%。这是你想要的吗？", 
			owned: false,
			fire: function () {
				game.unlocks.goldMaps = true;
				refreshMaps();
			}
		},
		quickTrimps: {
			name: "快速脆皮",
			text: "+100%繁殖速度",
			cost: 20,
			confirmation: "你正在花费20骨头购买快速脆皮。这个将会<b>在你的下一轮前</b>使你的脆皮繁殖速度翻倍。这是你想要的吗？",
			owned: false,
			fire: function () {
				swapClass("psColor", "psColorOrange", document.getElementById("trimpsPs"));
			},
			reset: function () {
				swapClass("psColor", "psColorWhite", document.getElementById("trimpsPs"));
			},
			load: function () {
				this.fire();
			}
		},
		sharpTrimps: {
			name: "锋利脆皮",
			text: "+50%脆皮伤害",
			cost: 25,
			confirmation: "你正在花费25骨头购买锋利脆皮。这个将会<b>在你的下一轮前</b>使你的脆皮增加50%的伤害。这是你想要的吗？",
			owned: false,
			fire: function () {
				swapClass("attackColor", "attackColorOrange", document.getElementById("goodGuyAttack"));
			},
			reset: function () {
				swapClass("attackColor", "attackColorNormal", document.getElementById("goodGuyAttack"));
			},
			load: function () {
				this.fire();
			}

		},
		heliumy: {
			get name(){ 
				return (game.global.universe == 2) ? "Radonculous" : "Heliumy";
			},
			get text(){
				return "+25% " + heliumOrRadon();
			},
			cost: 100,
			get confirmation(){
				return "You are about to purchase " + this.name + " for 100 bones. This will cause you to earn 25% more " + heliumOrRadon() + " from all sources <b>until your next Portal</b>. Is this what you wanted to do?"
			},
			owned: false,
			fire: function () {
				swapClass("hePhColor", "hePhColorOrange", document.getElementById("heliumPh"));
			},
			reset: function () {
				swapClass("hePhColor", "hePhColorNormal", document.getElementById("heliumPh"));
			},
			load: function () {
				this.fire();
			}
		}
	},
	options: {
		displayed: false,
		menu: {
			autoSave: {
				enabled: 1,
				extraTags: "popular general",
				description: "每分钟自动保存游戏一次",
				titles: ["不自动保存", "自动保存"],
				onToggle: function () {
					var elem = document.getElementById("saveIndicator");
					if (this.enabled) elem.innerHTML = "<span class='autosaving'>(自动保存)</span>";
					else elem.innerHTML = "<span class='notAutosaving'>(不自动保存)</span>";
				}
			},
			usePlayFab: {
				enabled: 0,
				extraTags: "popular general cloud",
				description: "当游戏保存时，每30分钟也可以使用PlayFab在线备份副本。 在使用此设置时，如果您的计算机上的版本超前，您将被询问是否要下载在线保存。 您还可以通过导入菜单从PlayFab手动导入保存。",
				titles: ["不在线保存", "使用PlayFab在线保存"],
				onToggle: function () {
					var indicatorElem = document.getElementById("playFabIndicator");
					if (this.enabled == 1) indicatorElem.className = "icomoon icon-wifi iconStateGood";
					else indicatorElem.className = "";
				},
				//lockUnless: function (){return false}
			},
			standardNotation: {
				enabled: 1,
				extraTags: "layout",
				description: "标准格式之间进行切换 (12.7M, 540B), 工程表示法 (12.7e6, 540e9), 科学计数法 (1.27e7, 5.40e11), 字母符号 (12.7b, 540c), 和混合符号（标准高达e96，然后工程。摹拟标准前4.6）,和对数表示法（10 ^ 7.10,10 ^ 8.73）。 单击“对数表示法”时按住Ctrl可更改基数。",
				titles: ["科学计数法", "标准格式", "工程符号", "字母符号", "混合符号", "对数符号"],
				onToggle: function () {
					document.getElementById("tab5Text").innerHTML = "+" + prettify(game.global.lastCustomAmt);
				}
			},
			tooltips: {
				enabled: 1,
				extraTags: "alerts",
				description: "<p><b>显示工具提示<b> 将确保所有的工具提示都在鼠标经过它们的时候显示。</p><p><b>按住Shift键的工具提示</b> 默认会隐藏大部分提示，直到你按下Shift键。在解锁新事物时，请牢记这一设置，因为游戏的大部分内容都在工具提示中解释！</p>",
				titles: ["隐藏工具提示", "显示工具提示"]
			},
			tooltipPosition: {
				enabled: 0,
				extraTags: "alerts",
				description: "切换您的工具提示位置，位于右上方，居中或位于鼠标下方。",
				titles: ["右上角提示", "底部中心提示", "顶部中心提示"]
			},
			queueAnimation: {
				enabled: 1,
				extraTags: "layout animation performance",
				description: "打开或关闭建筑队列蓝色动画。",
				titles: ["不用排队动画", "排队动画"]
			},
			barOutlines: {
				enabled: 1,
				extraTags: "layout",
				description: "在所有进度条的末尾打开或关闭黑色条。 可以帮助辨别进度条结束的地方。",
				titles: ["没有轮廓", "轮廓"],
				onToggle: function () {
					var outlineStyle = (this.enabled) ? "2px solid black" : "none";
					var bars = document.getElementsByClassName("progress-bar");
					for (var x = 0; x < bars.length; x++){
						bars[x].style.borderRight = outlineStyle;
					}
				}
			},
			menuFormatting: {
				enabled: 1,
				extraTags: "layout",
				description: "在左侧菜单上打开或关闭大量格式的作业和建筑物。",
				titles: ["无菜单格式", "格式菜单"]
			},
			formatPerkLevels: {
				enabled: 1,
				extraTags: "layout",
				description: "打开或关闭津贴级别的大数字格式。",
				titles: ["不格式化Perk", "格式化Perk级别"]
			},
			smallPerks: {
				extraTags: "layout",
				enabled: 0,
				description: "缩小传送门和View Perks窗口中perk按钮的大小。 <b>Large Perk Buttons</b> is default and fits 5 buttons per row. <b>Small Perk Buttons</b> shrinks the size to fit 6 per row, and <b>Tiny Perk Buttons</b> fits 7 per row.",
				titles: ["Large Perk Buttons", "Small Perk Buttons", "Tiny Perk Buttons"]
			},
			progressBars: {
				enabled: 1,
				extraTags: "performance",
				description: "将进度条切换到打开，关闭或显示。 性能和关闭将降低CPU使用率。",
				titles: ["没有进度条", "显示进度条", "性能条"],
				onToggle: function () {
				var bars = document.getElementsByClassName("progress-bar");
					for (var x = 0; x < bars.length; x++){
						if (this.enabled == 2) bars[x].className += " noTransition";
						else {
							bars[x].className = bars[x].className.replace(" noTransition", "");
							if (this.enabled == 0) bars[x].style.width = "0%";
						}
					}
				}
			},
			confirmhole: {
				enabled: 1,
				extraTags: "alerts",
				description: "打开或关闭确认框，像购买虫洞时弹出确认框。",
				titles: ["不确认", "需确认"],
			},
			lockOnUnlock: {
				enabled: 0,
				extraTags: "qol",
				description: "启用/禁用建筑，就业，升级的锁定，以及设备解锁新的东西后1秒。 有助于防止意外购买。",
				titles: ["不锁定", "锁定"],
			},
			achievementPopups: {
				enabled: 1,
				extraTags: "alerts",
				description: "决定你是否希望在完成一个成就后弹出提示窗口。",
				titles: ["不弹出", "弹出成就"]
			},
			mapLoot: {
				enabled: 0,
				extraTags: "qol",
				description: "<p>如果自上次运行地图以来一段时间，请选择您的首要升级。</p><p><b>升级优先</b> 会导致地图在移到下一层之前删除最低层的所有项目。 （巨剑II - >胸甲II - >盾III）</p><p><b>装备优先</b> 将从盾牌开始，并在继续匕首之前放下所有可用的盾牌声望，等等。 （盾III - >盾IV - >匕首III）</p>",
				titles: ["升级优先", "装备优先"],
				secondLocation: ["togglemapLoot2", "togglemapLootCM"]
			},
			repeatUntil: {
				enabled: 0,
				description: "<p><b>永远重复</b> 如果启用了重复地图，将导致地图不断重复。</p><p><b>重复10次</b> 会重复，除非你有10个地图奖励叠加。</p><p><b>重复项目</b> 将重复，除非没有更多特殊项目留给该级别的地图。</p><p><b>重复任何</b> 将重复，除非没有可用的特殊项目，你不能获得更多地图奖励叠加。</p><p><b>此设置仅在重复打开时才有意义。 切换重复关闭仍然会在完成后离开地图，无论如何。</b></p>",
				titles: ["永远重复", "重复10次", "重复项", "重复所有"],
				locked: true,
				secondLocation: ['togglerepeatUntilCM']
			},
			exitTo: {
				enabled: 0,
				description: "选择完成地图后是否转到地图屏幕或世界。",
				titles: ["退出地图", "退出世界"],
				locked: true,
				secondLocation: ['toggleexitToCM']
			},
			repeatVoids: {
				enabled: 0,
				description: "Decide if you want to continue running the rest of your Void Maps after finishing one.",
				titles: ["一个虚空地图", "完成全部虚空地图"],
				locked: true,
				secondLocation: ['togglerepeatVoidsCM']
			},
			boneAlerts: {
				enabled: 1,
				extraTags: "alerts",
				description: "Hide popup confirmation messages when spending rare resources in the Bone Trader or Heirlooms menus.",
				titles: ["Not Confirming Rare", "Confirming Rare Stuff"]
			},
			showAlerts: {
				enabled: 1,
				extraTags: "alerts",
				description: "当解锁新的东西时，打开或关闭黄色提醒图标的显示。",
				titles: ["不提醒", "提醒"]
			},
			showFullBreed: {
				enabled: 0,
				extraTags: "popular general",
				description: "显示时间培育当前品种计时器旁边的一整队士兵。",
				titles: ["更少的品种定时器", "更多的繁殖计时器"]
			},
			darkTheme: {
				extraTags: "general",
				enabled: 1,
				description: "在默认脆皮主题，由u / Grabarz19制作的自定义黑色主题，由u / k1d_5h31d0n制作的渐变主题以及黑色背景的默认主题之间切换。",
				titles: ["黑底主题", "默认主题", "黑色主题", "渐变主题"],
				//styleName index should always be equal to title index minus 2, and should match the css file name
				styleNames: ["dark", "gradient"],
				removeStyles: function () {
					for (var x = 0; x < this.styleNames.length; x++){
						var link = document.getElementById(this.styleNames[x] + "Theme");
						if (!link) continue;
						document.head.removeChild(link);
					}
					document.getElementById("innerWrapper").style.backgroundColor = "initial";
				},
				applyStyle: function (titleIndex){
					var styleName = this.styleNames[titleIndex - 2];
					var link = document.createElement('link');
					link.type = 'text/css';
					link.rel = 'stylesheet';
					link.href = 'css/' + styleName + '.css';
					link.id = styleName + 'Theme';
					document.head.appendChild(link);
				},
				onToggle: function () {
					this.removeStyles();
					if (this.enabled == 1) return;
					if (this.enabled == 0){
						document.getElementById("innerWrapper").style.backgroundColor = "black";
						return;
					}
					this.applyStyle(this.enabled);
				}
			},
			fadeIns: {
				enabled: 1,
				extraTags: "layout performance animation",
				description: "打开或关闭对元素的淡入效果。",
				titles: ["不衰退", "衰退"]
			},
			extraStats: {
				enabled: 1,
				extraTags: "layout",
				description: "打开或关闭添加额外的信息，以映射项目。",
				titles: ["极简地图", "额外的地图信息"],
				onToggle: function () {
					refreshMaps();
				}
			},
			useAverages: {
				extraTags: "popular general",
				enabled: 0,
				description: "切换是否从地图和世界的战利品应计入战利品分解和工具提示计算。 计算战利品最后两分钟的平均值。 如果您想清除最后2分钟，请尝试将其关闭并重新打开。",
				titles: ["不平均", "平均"],
				onToggle: function () {
					for (var item in game.global.lootAvgs){
						game.global.lootAvgs[item] = {
							average: 0,
							accumulator: 0
						};
					}
					document.getElementById('gemsPs').style.display = 'block';
				}
			},
			voidPopups: {
				extraTags: "alerts",
				enabled: 1,
				description: "决定是否要弹出掠夺传家宝。",
				titles: ["没有传家宝流行", "流行的传家宝"]
			},
			detailedPerks: {
				extraTags: "qol",
				enabled: 0,
				description: "决定是否在天赋按钮上显示额外的信息",
				titles: ["最小化天赋信息", "额外的信息"]
			},
			alwaysAbandon: {
				extraTags: "general",
				enabled: 0,
				description: "决定是否要等待士兵在地图上和世界之间切换死亡。 切换这个将自动放弃你的士兵。",
				titles: ["等待旅行", "自动放弃"]
			},
			extraMapBtns: {
				extraTags: "layout",
				enabled: 0,
				description: "将按钮菜单切换到地图网格的右侧",
				titles: ["较少的地图按钮", "额外的地图按钮"],
				onToggle: function () {
					if (!game.global.mapsActive) return;
					var setTo = (this.enabled) ? ["8", "2"] : ["10", "off"];
					swapClass("col-xs", "col-xs-" + setTo[0], document.getElementById("gridContainer"));
					swapClass("col-xs", "col-xs-" + setTo[1], document.getElementById("extraMapBtns"));
				},
				lockUnless: function () {
					return (game.global.totalPortals > 0)
				},
			},
			GeneticistassistTarget: {
				enabled: 0,
				disableOnUnlock: false,
				extraTags: "popular general",
				description: "自定义您的三个可用的遗传学家目标，选择发射和发送选项，并决定每次运行解锁时遗传学家是否应该自动启动。",
				titles: ["遗传学家帮助设置"],
				lockUnless: function () {
					return (game.global.Geneticistassist);
				}
			},
			liquification: {
				enabled: 1,
				extraTags: "general",
				description: "启用或禁用液化。 游戏中的任何事情都不应该在启用液化的情况下完成，但如果你只是想放慢速度，那么你完全有权这样做。",
				titles: ["液化关闭", "液化开启"],
				lockUnless: function () {
					return (game.global.spiresCompleted > 0);
				}

			},
			overkillColor: {
				enabled: 1,
				extraTags: "layout",
				description: "选择你是否想要一个不同的细胞来处理你过度使用的细胞。<b>没有过度的颜色</b> 将不会改变任何颜色基于过度杀伤。 <b>1过度杀伤细胞</b> 是默认设置，并用特殊颜色显示被过度杀死的单元格。 <b>2过度杀伤细胞</b> 将显示为所有细胞过度杀灭的细胞颜色。",
				titles: ["没有过度的颜色", "1过度杀伤细胞", "2过度杀伤细胞"],
				lockUnless: function () {
					return (!game.portal.Overkill.locked)
				},
			},
			forceQueue: {
				enabled: 0,
				extraTags: "qol",
				get description() {
					var appliesTo = " 只有经纱站";
					if (game.global.improvedAutoStorage) appliesTo = " 去经纱站和自动存储";
					return "选择是否强制即时工艺建筑物使用队列。 目前适用 " + appliesTo + ". 可能是双重检查价格有用建设之前！";
				},
				titles: ["不强制队列", "强制队列"],
				lockUnless: function () {
					return (game.global.sLevel >= 4);
				}
			},
			mapsOnSpire: {
				enabled: 1,
				extraTags: "other",
				description: "选择是否希望游戏在到达尖塔时通过发送地图来暂停战斗。<b>继续在尖塔战斗</b> 到达尖塔时不会中断你， <b>尖塔地图</b> 将发送给你每个尖塔的地图， <b>地图在尖塔顶部2层</b> 会送你到地图在最高和第二高的你达到的尖塔, 以及 <b>地图在尖塔顶层</b> 只会在达到的最高尖塔上切换到地图。",
				titles: ["继续在尖塔战斗", "尖塔地图", "地图在尖塔顶部2层", "地图在尖塔顶层"],

				lockUnless: function () {
					return (game.global.highestLevelCleared >= 199);
				},
				secondLocation: ["togglemapsOnSpireCM"]
			},
			mapAtZone: {
				enabled: 0,
				extraTags: "other",
				description: "启用后，您将自动放弃世界中的脆皮，并在达到指定的区域编号后立即进入地图室。",
				get titles(){
					var nextZone = "";
					var setZone = this.getSetZone();
					if (setZone.length == 1) nextZone = setZone[0].world;
					else {
						for (var x = 0; x < setZone.length; x++){
							if (game.global.world < setZone[x].world){
								nextZone = setZone[x].world;
								if (x < setZone.length - 1) nextZone += "+";
								break;
							}
						}
						if (nextZone == "") 
							nextZone = (setZone.length) ? setZone[0].world : "one";
					}
				return ["区域内无地图", "地图在Z" + nextZone];

				},
				setZone: [200],
				setZoneU2: [10],
				getSetZone: function(){
					return (game.global.universe == 2) ? this.setZoneU2 : this.setZone;
				},
				addRow: function(){
					for (var x = 0; x < 5; x++){
						var elem = document.getElementById('mazWorld' + x);
						if (!elem) continue;
						if (elem.value == -1) {
							var parent = document.getElementById('mazRow' + x);
							if (parent){
								parent.style.display = 'block';
								elem.value = game.global.world + 1;
								updateMazPreset(x);
								break;
							}
						}
					}
					var btnElem = document.getElementById('mazAddRowBtn');
					for (var y = 0; y < 5; y++){
						var elem = document.getElementById('mazWorld' + y);
						if (elem && elem.value == "-1"){			
							btnElem.style.display = 'inline-block';
							return;
						}
					}
					btnElem.style.display = 'none';
				},
				removeRow: function(index){
					var elem = document.getElementById('mazRow' + index);
					if (!elem) return;
					document.getElementById('mazWorld' + index).value = -1;
					var checkBox = document.getElementById('mazCheckbox' + index);
					swapClass("icon-", "icon-checkbox-unchecked", checkBox);
					checkBox.setAttribute('data-checked', false);
					document.getElementById('mazPreset' + index).value = 0;
					document.getElementById('mazRepeat' + index).value = 0;
					document.getElementById('mazRepeatUntil' + index).value = 0;
					elem.style.display = 'none';
					var btnElem = document.getElementById('mazAddRowBtn');
					btnElem.style.display = 'inline-block';
				},
				save: function(){
					var setting = [];
					loop1: 
					for (var x = 0; x < 5; x++){
						var world = document.getElementById('mazWorld' + x);
						if (!world || world.value == "-1") continue;
						world = parseInt(world.value, 10);
						var check = readNiceCheckbox(document.getElementById('mazCheckbox' + x));
						var preset = parseInt(document.getElementById('mazPreset' + x).value, 10);
						var repeat = parseInt(document.getElementById('mazRepeat' + x).value, 10);
						var until = parseInt(document.getElementById('mazRepeatUntil' + x).value, 10);
						var exit = parseInt(document.getElementById('mazExit' + x).value, 10);
						var bwWorld = parseInt(document.getElementById('mazBwWorld' + x).value, 10);
						if (isNaN(world) || world < 10){
							world = 10;
						}
						else if (world > 1000) world = game.global.world;
						for (var y = 0; y < setting.length; y++){
							if (setting[y].world == world) {
								continue loop1;
							}
						}
						if (preset < 0 || preset > 3) preset = 0;
						if (repeat < 0 || repeat > 2) repeat = 0;
						if (until < 0 || until > 5) until = 0;
						if (until == 5 && preset != 3) until = 0;
						if (exit < 0 || exit > 2) exit = 0;
						if (!bwWorld || preset < 3 || isNaN(bwWorld) || bwWorld < 125 || bwWorld > 1000) bwWorld = 125;
						if (bwWorld > 125){
							var adj = bwWorld - 125;
							if (bwWorld % 15 != 0) bwWorld = 125 + (Math.floor(adj / 15) * 15);
						}
						setting.push({
							world: world,
							check: check,
							preset: preset,
							repeat: repeat,
							until: until,
							exit: exit,
							bwWorld: bwWorld
						})
					}
					setting.sort(function(a, b){return (a.world > b.world) ? 1 : -1});
					if (game.global.universe == 2) this.setZoneU2 = setting;
					else this.setZone = setting;
					this.enabled = 1;
					toggleSetting('mapAtZone', null, false, true);
					cancelTooltip(true);
				},
				secondLocation: ["togglemapAtZone2", "togglemapAtZoneCM"],
				lockUnless: function () {
					return game.global.canMapAtZone;
				}
			},
			timestamps: {
				enabled: 0,
				extraTags: "qol",
				description: "选择是否在消息日志中显示时间戳。 <b>本地时间戳</b> 将根据您的电脑记录当前时间， <b>运行时间戳</b> 将记录自运行开始以来的时间。 请注意，切换此设置不会添加或删除以前的邮件的时间戳，但将添加或删除任何新的邮件。",
				titles: ["没有时间戳", "本地时间戳", "运行时间戳"]
			},
			gaFire: {
				enabled: 1,
				locked: true,
				extraTags: "qol",
				description: "<p>Toggle between <b>Limited GA Firing</b>, <b>Geneticistassist Fire</b> and <b>No GA Firing</b>.</p><p><b>Limited GA Firing</b> will prevent Geneticistassist from firing Farmers, Lumberjacks, or Miners.</p><p><b>Geneticistassist Fire</b> is the default value, and allows Geneticistassist to fire anything.</p><p><b>No GA Firing</b> prevents your Geneticistassist from being able to fire anything at all, including other Geneticists.</p>",
				titles: ["Limited GA Firing", "Geneticistassist Fire", "No GA Firing"],
				lockUnless: function () {
					return game.global.Geneticistassist
				}
			},
			tinyButtons: {
				enabled: 0,
				extraTags: "layout",
				description: "收缩的菜单，您购买的建筑物，升级，工作，和装备的按钮。 <b>大按钮</b> 是默认的，适合每行4个按钮。 <b>小按钮</b> 收缩以适应5每行的大小，和 <b>小按钮</b> 适合每行6个。 小按钮和超小按钮可能不适合在小屏幕上阅读。",
				titles: ["大按钮", "小按钮", "超小按钮"],
				onToggle: function () {
					var classNames = ["buttonSizeLarge", "buttonSizeSmall", "buttonSizeTiny"];
					swapClass("buttonSize", classNames[this.enabled], document.getElementById('buyHere'));
				}
			},
			masteryTab: {
				enabled: 1,
				extraTags: "alerts",
				description: "Choose what you would like to see on your Mastery Tab! <b>No Mastery Info</b> will keep the tab clean and static. <b>Alert Mastery</b> will show an alert on the tab as soon as a new Mastery becomes affordable. <b>Show Essence</b> will always show your total amount of unspent essence on the tab. <b>Hybrid Essence</b> will show your total amount of unspent essence on the tab, but will switch to the alert icon once you have enough essence for a new Mastery.",
				titles: ["No Mastery Info", "Alert Mastery", "Show Essence", "Hybrid Alerts"],
				lockUnless: function () {
					return (game.global.highestLevelCleared >= 180)
				},
				onToggle: function () {
					updateTalentNumbers();
				}
			},
			bigPopups: {
				enabled: 1,
				lockUnless: function () {
					return (game.global.highestLevelCleared >= 79);
				},
				get description(){
					var text = "<p>此设置适用于在每个传送门达到某些里程碑后发生的大弹出窗口。 此设置目前将阻止：Improbability弹出窗口";
					if (game.global.highestLevelCleared >= 199) text += ", the popup at Corruption";
					if (game.global.highestLevelCleared >= 219) text += ", the popup at The Spire";
					if (game.global.highestLevelCleared >= 249) text += ", and the popup on reaching Magma.";
					text += "</p><p>Note that this setting only blocks large popups once your Highest Zone Reached is 20 Zones past the location of the popup</p>";
					return text;
				},
				extraTags: "alerts popups",
				titles: ["Block Big Popups", "Allow Big Popups"]

			},
			generatorStart: {
				enabled: 0,
				extraTags: "general",
				get description(){
					var text = "<p>Choose what mode the Dimensional Generator should start each run on. <b>Default Generator</b> will continue with whatever setting you were using at the end of your last run. <b>The Rest of The Settings<b> are named by what mode will be set to active at the start of each run.</p>";
					if (game.permanentGeneratorUpgrades.Supervision.owned) text += "<p><b>Hold Ctrl while clicking to open the Generator State Configuration menu</b></p>";
					return text;
				},
				get titles () {
					var arr = ["Default Generator", "Gain Fuel", "Gain Mi"];
					if (game.permanentGeneratorUpgrades.Hybridization.owned) arr.push("Hybrid");
					return arr;
				},
				lockUnless: function () {
					return (game.global.highestLevelCleared >= 229);
				},
				secondLocation: ["togglegeneratorStartPopup"]
			},
			// showSnow: {
			// 	enabled: 1,
			// 	extraTags: "general",
			// 	description: "Disable the snow effect in the world. <b>This will take effect on the next Zone after this setting is changed</b>. This setting is temporary, and will melt when the snow does.",
			// 	titles: ["No Snow", "Show Snow"]
			// },
			showHoliday: {
				enabled: 1,
				extraTags: "general",
				description: "<p>Choose between <b>Show Pumpkimps</b>, <b>Bordered Pumpkimps</b>, and <b>No Pumpkimps</b>. This setting applies only to the visual effect of Pumpkimp Zones in the world, does not apply to maps, and has no impact on how many Pumpkimps or Pumpkimp Zones actually spawn. This setting is temporary and will rot away after the Pumpkimp season!</p><p><b>Show Pumpkimps</b> is the default, and displays Pumpkimp Zones as normal.</p><p><b>Bordered Pumpkimps</b> displays Pumpkimp cells by changing the border color instead of the background color.</p><p><b>No Pumpkimps</b> will not show any indicator at all that a world Zone is a Pumpkimp Zone. Pumpkimps will still spawn at the same rate.</p>",
				titles: ["No Pumpkimps", "Show Pumpkimps", "Bordered Pumpkimps"],
				locked: false
			},
			geneSend: {
				enabled: 0,
				locked: true,
				extraTags: "other",
				description: "<p>当 <b>使用基因发送</b> 启用时, 只要你有一个遗传学家，自动战斗会自动派遣战士，如果他们的繁殖时间超过了你的遗传学家的设定。</p><p>当 <b>强制基因发送</b> 启用时, 只要你有一个遗传学家，自动战斗将永远不会派出一组脆皮战斗，除非你是最大的人口，或者你已经达到了你的设置基因学计时器。</p><p>最后, 如果你选择了 <b>等待基因发送</b> 只要你有一个遗传学家，自动战斗只会派遣战士当它们已经繁殖了足够长的时间，可以到达你的遗传基因辅助定时器。这保证了预期和遗传学家的水平，只要你的设置计时器，但可能导致没有士兵被发送一段时间，而你坐的完全人口。</p>",
				titles: ["不基因发送", "使用基因发送", "强制基因发送", "等待基因发送"]
			},
			fireForJobs: {
				enabled: 0,
				extraTags: "other",
				description: "启用后，雇用脆皮与缩放提价（培训师，探险者等）的工作，而你没有工作区将尝试火灾农民，伐木工人和矿工，直到你有足够的空间。",
				titles: ["不招聘工作", "招聘工作"]
			},
			ctrlGigas: {
				enabled: 0,
				extraTags: "other",
				description: "启用后，所有千兆站购买行为都将按住Ctrl键，无论是否实际持有。 禁用时，您必须按住Ctrl键才能让千兆站自动购买变形站（请参阅千兆站工具提示获取更多信息）。",
				lockUnless: function () {
					return (game.global.highestLevelCleared >= 60);
				},
				titles: ["动态按Ctrl键", "始终按Ctrl键"]
			},
			showHeirloomAnimations: {
				enabled: 1,
				extraTags: "performance",
				description: "Enable/Disable animations on Heirlooms.",
				lockUnless: function () {
					return (game.global.highestLevelCleared >= 499);
				},
				titles: ["No Heirloom Animations", "Heirloom Animations"]
			},
			hotkeys: {
				enabled: 1,
				extraTags: "other",
				description: "启用或禁用热键",
				titles: ["禁用热键", "启用热键"]
			},
			climbBw: {
				enabled: 0,
				extraTags: "qol",
				description: "Decide whether or not you want your Trimps to automatically run the next Bionic Wonderland once they&apos;ve gotten all of the items from their current one. Repeat Maps must be toggled on for Climb BW to work.",
				titles: ["Don&apos;t Climb BW", "Climb BW"],
				secondLocation: ["toggleclimbBwCM", "toggleclimbBw2"],
				lockUnless: function(){
					game.global.highestLevelCleared >= 124;
				}
			},
			offlineProgress: {
				enabled: 1,
				extraTags: "other",
				description: "<p><b>禁止离线进度</b> will cause no extra resources to be earned and no time to be warped when you return to the game. The Portal and Zone timers will not advance while offline, and the game will be in the same state you left it when you come back. This can be useful for speedrun achievements or if you just really really don&apos;t trust your Trimps when you&apos;re gone.</p><p><b>Hybrid Offline</b> combines Time Warp and Trustworthy Trimps into the best offline experience that Science can buy. Time Warp caps at 24 hours, so using Hybrid Offline will grant Trustworthy Trimps at the beginning of your Time Warp for all offline time over 24 hours, and will also grant Trustworthy Trimps for any extra time should you choose to end Time Warp early. Note that the Portal Time and Time in Zone clocks will advance for all time granted by Trustworthy Trimps and by Time Warp.</p><p><b>Time Warp Only</b> will grant up to 24 hours of your offline progress as Time Warp without granting any extra resources from Trustworthy Trimps at the beginning (for time over 24 hours), or at the end (for canceled Time Warp time). This can also be useful for timed runs or tracking stats, as the time added will be capped to however much time you spend in Time Warp.</p><p><b>Trustworthy Trimps Only</b> will skip Time Warp when you come back and grant resources for all time offline from Trustworthy Trimps. For when you want to get back in the game as soon as possible!</p><p style=&apos;text-align: center&apos;><b>This setting can be changed from the Time Warp screen<br/>or in Settings -> Other</b></p>",
				//description: "Disables or enables earning resources while offline. <b>Warning: If this is toggled off, no resources will be earned from Trustworthy Trimps when coming back to the game after being offline.</b> This also stops the current run timer when offline and can be helpful if you are analysing stats and do not want resources counted when there is no timer running",
				titles: ["禁止离线进度", "离线进度", "只时间扭曲", "Trustworthy Trimps Only"],
				secondLocation: ["toggleofflineProgresstimewarp"]
			},
			pauseGame: {
				enabled: 0,
				extraTags: "other",
				description: "暂停你的游戏。 这将暂停所有资源收集，离线进度和计时器。 （热键：空格键）",
				titles: ["不暂停", "暂停"],
				timeAtPause: 0,
				onToggle: function () {
					if (this.enabled) {
						this.timeAtPause = new Date().getTime();
						if (game.options.menu.autoSave.enabled == 1) save(false, true);
						swapClass("timer", "timerPaused", document.getElementById("portalTimer"));
						handlePauseMessage(true);
					}
					else if (this.timeAtPause) {
						var now = new Date().getTime();
						var dif = now - this.timeAtPause;
						game.global.portalTime += dif;
						game.global.lastSkeletimp += dif;
						game.global.zoneStarted += dif;
						game.global.mapStarted += dif;
						game.global.lastGeneratorTick += dif;
						game.global.lastSoldierSentAt += dif;
						this.timeAtPause = 0;
						game.global.time = 0;
						game.global.lastOnline = now;
						game.global.start = now;
						swapClass("timer", "timerNotPaused", document.getElementById("portalTimer"));
						handlePauseMessage(false);
					}
				},
				locked: true
			},
			disablePause: {
				enabled: 1,
				extraTags: "other",
				description: "您可以通过单击屏幕右下角的运行计时器来暂停游戏。 此设置允许您删除该功能!",
				titles: ["禁用暂停", "启用暂停"]
			},
			deleteSave: {
				enabled: 0,
				extraTags: "reset hard wipe clear other",
				description: "删除您的存档并重新开始，你的脆皮会不开心.",
				titles: ["删除存档"],
				onToggle: function () {
					cancelTooltip();
					tooltip('Reset', null, 'update');
					game.global.lockTooltip = true;
					tooltipUpdateFunction = "";
					this.enabled = 0;
				}
			}
		}
	},
	talents: {
		portal: {
			description: "在通过区域20后立即开启传送门。",
			name: "Portal Generator",
			tier: 1,
			purchased: false,
			icon: "eye-open",
		},
		bionic: {
			description: "<p>自动获取每一层仿生仙境(BW)地图当你超过BW的层数。如果您已经错过了本次运行的任何一个BW，或者您到达一个比您以前清除的任何BW都高的区域，则将无效。</p><p>另外,给所有当前和未来的副本仿生仙境的快速攻击的特殊的修饰符。</p>",
			name: "Bionic Magnet I",
			onPurchase: function (clear) {
				addMapModifier('Bionic', 'fa');
			},
			onRespec: function () {
				addMapModifier('Bionic', null, true);
			},
			tier: 1,
			purchased: false,
			icon: "magnet"
		},
		turkimp: {
			description: "Increases the chance of finding a Turkimp by 33%, the bonus time from each Turkimp by 5 minutes, and increases the time cap by 10 minutes.",
			name: "Turkimp Tamer I",
			tier: 1,
			purchased: false,
			icon: "*spoon-knife"
		},
		housing: {
			description: "自动解锁房子、大厦、旅馆、娱乐场、出入口、虫洞和集电极，当通过他们降落的区域时。",
			name: "Home Detector",
			tier: 1,
			purchased: false,
			icon: "home"
		},
		bounty: {
			description: "Unlock Bounty immediately after clearing Z15.",
			name: "Bounty Hunter",
			tier: 1,
			purchased: false,
			icon: "th-large",
		},
		explorers: {
			description: "当你通过相应区域时自动获取速度探索书。",
			name: "Explorer Aura I",
			tier: 1,
			purchased: false,
			icon: "*map-signs"
		},
		voidPower: {
			description: "你的脆皮在虚空地图中会获得15%的额外攻击力和血量。",
			name: "Void Power I",
			tier: 2,
			purchased: false,
			icon: "*heart5",
			getTotalVP: function(){
				return (game.talents.voidPower2.purchased) ? ((game.talents.voidPower3.purchased) ? 65 : 35) : 15;
			}
		},
		pierce: {
			description: "减少敌人25%的穿刺伤害。",
			name: "Metallic Coat",
			tier: 2,
			purchased: false,
			icon: "tint"
		},
		heirloom: {
			description: "You can spend an extra 10% of your Nu on your Heirlooms, bringing the total to 60%.",
			name: "Heirnuum I",
			tier: 2,
			purchased: false,
			icon: "grain"
		},
		foreman: {
			description: "召集50000名工头帮助施工。",
			name: "Foremany",
			tier: 2,
			purchased: false,
			onPurchase: function () {
				game.global.autoCraftModifier += 12500;
				updateForemenCount();
			},
			onRespec: function () {
				game.global.autoCraftModifier -= 12500;
				updateForemenCount();
			},
			icon: "user",
		},
		headstart: {
			description: "Corruption begins 5 levels earlier, at Zone 176.",
			name: "Headstart I",
			tier: 2,
			purchased: false,
			icon: "road"
		},
		scry: {
			get description(){
				return "当以占卜者阵型和腐化" + ((game.global.spiresCompleted >= 2) ? "或者健康 " : "") + "敌人作战时，获取的黑暗精华增加50%，并且伤害翻倍。";
			},
			name: "Scryhard I",
			tier: 2,
			purchased: false,
			icon: "*spinner9"
		},
		voidPower2: {
			description: "你的脆皮在虚空地图中会再获得20%的额外攻击力和血量。",
			name: "Void Power II",
			tier: 3,
			purchased: false,
			icon: "*heart5",
			requires: "voidPower"
		},
		mapLoot: {
			description: "降低低地图掠夺惩罚1级，这允许你在当前区域层数的地图或当前区域层数-1的地图中获得相同数量的战利品。",
			name: "Map Reducer I",
			tier: 3,
			purchased: false,
			icon: "*gift2"
		},
		skeletimp: {
			description: "Double the chance for a Megaskeletimp to appear instead of a Skeletimp.",
			name: "King of Bones I",
			tier: 3,
			purchased: false,
			icon: "italic",
		},
		doubleBuild: {
			description: "在建筑队列中的多个建筑将被一次构造两个。",
			name: "Double Build",
			tier: 3,
			purchased: false,
			icon: "*hammer"
		},
		headstart2: {
			description: "Corruption begins an additional 10 levels earlier, at Zone 166.",
			name: "Headstart II",
			tier: 3,
			purchased: false,
			icon: "road",
			requires: "headstart"
		},
		daily: {
			description: "当运行日常挑战时伤害+50%。",
			name: "Legs for Days",
			tier: 3,
			purchased: false,
			icon: "*calendar4"
		},
		hyperspeed: {
			description: "减少攻击间隔100ms。",
			name: "Hyperspeed I",
			tier: 4,
			purchased: false,
			icon: "fast-forward"
		},
		blacksmith: {
			get description () {
				return "Each cleared Zone through Z" + Math.floor((getHighestLevelCleared(false, true) + 1) / 2) + " (half of your highest Zone reached) will drop all available equipment prestiges from maps.";
			},
			name: "Blacksmithery I",
			tier: 4,
			purchased: false,
			icon: "*hammer2"
		},
		turkimp2: {
			description: "Learn to grow your own Turkimp, increasing the bonus from +50% to +100%, and making the Turkimp bonus available permanently.",
			name: "Turkimp Tamer II",
			tier: 4,
			purchased: false,
			requires: "turkimp",
			icon: "*spoon-knife",
			onPurchase: function(){
				document.getElementById("turkimpBuff").style.display = "block";
				if (game.global.playerGathering) setGather(game.global.playerGathering);
			},
			onRespec: function(){
				if (game.global.turkimpTimer <= 0)
					document.getElementById("turkimpBuff").style.display = "none";
				if (game.global.playerGathering) setGather(game.global.playerGathering);

			}
		},
		autoStructure: {
			get description(){
				 var text = "Unlock the AutoStructure tool, allowing you to automatically purchase structures. In addition, all housing and battle territory bonuses will come with ready-to-fight Trimps inside";
				 if (getHighestLevelCleared() >= 229) text += " (Not including the Dimensional Generator)";
				 text += "!";
				 return text;
			},
			name: "AutoStructure",
			tier: 4,
			purchased: false,
			icon: "home",
			requires: "doubleBuild",
			onPurchase: function () {
				toggleAutoStructure(true);
			},
			onRespec: function () {
				toggleAutoStructure(true, true);
			}
		},
		headstart3: {
			description: "Corruption begins an additional 15 levels earlier, at Zone 151.",
			name: "Headstart III",
			tier: 4,
			purchased: false,
			icon: "road",
			requires: "headstart2"
		},
		autoJobs: {
			description: "解锁自动工作，它使全宇宙的人力资源部门感到羡慕。",
			name: "AutoJobs",
			tier: 4,
			purchased: false,
			icon: "*group",
			onPurchase: function () {
				toggleAutoJobs(true);
			},
			onRespec: function () {
				toggleAutoJobs(true, true);
			}
		},
		hyperspeed2: {
			get description(){
				var percent = 50;
				if (game.talents.liquification3.purchased) percent = 75;
				return "Reduce the time in between fights and attacks by an additional 100ms through Z" + Math.floor((getHighestLevelCleared(false, true) + 1) * (percent / 100)) + " (" + percent + "% of your highest Zone reached).";
			},
			name: "Hyperspeed II",
			tier: 5,
			purchased: false,
			requires: "hyperspeed",
			icon: "fast-forward"
		},
		blacksmith2: {
			get description () {
				return "Each cleared Zone through Z" + Math.floor((getHighestLevelCleared(false, true) + 1) * 0.75) + " (75% of your highest Zone reached) will drop all available equipment prestiges from maps.";
			},
			name: "Blacksmithery II",
			requires: "blacksmith",
			tier: 5,
			purchased: false,
			icon: "*hammer2"
		},
		skeletimp2: {
			description: "Reduce the minimum time between Skeletimp spawns by 10 minutes.",
			name: "King of Bones II",
			tier: 5,
			purchased: false,
			icon: "italic",
			requires: "skeletimp"
		},
		quickGen: {
			description: "维度发生器生产房子的速度增加50%.",
			name: "Quick Gen",
			tier: 5,
			purchased: false,
			icon: "*diamonds"
		},
		magmaFlow: {
			description: "Cause two extra Magma cells to appear on any Zone that already has Magma.",
			name: "Magma Flow",
			tier: 5,
			purchased: false,
			icon: "*fire",
		},
		explorers2: {
			description: "每次通过传送门后直接获取一本额外的速度探索书。",
			name: "Explorer Aura II",
			tier: 5,
			purchased: false,
			requires: "explorers",
			icon: "*map-signs"
		},
		voidPower3: {
			description: "你的脆皮在虚空地图内获得额外的30％攻击力和生命，所有当前和未来的虚空地图都会获得“快速攻击”特效修正。",
			name: "Void Power III",
			onPurchase: function (clear) {
				if(game.global.world > 1)
				addMapModifier('Void', 'fa');
			},
			onRespec: function () {
				addMapModifier('Void', null, true);
			},
			tier: 6,
			purchased: false,
			icon: "*heart5",
			requires: "voidPower2"
		},
		blacksmith3: {
			get description () {
				return "Each cleared Zone through Z" + Math.floor((getHighestLevelCleared(false, true) + 1) * 0.9) + " (90% of your highest Zone reached) will drop all available equipment prestiges from maps.";
			},
			name: "Blacksmithery III",
			requires: "blacksmith2",
			tier: 6,
			purchased: false,
			icon: "*hammer2"
		},
		heirloom2: {
			description: "You can spend another extra 10% of your Nu on your Heirlooms, bringing the total to 70%.",
			name: "Heirnuum II",
			tier: 6,
			purchased: false,
			requires: "heirloom",
			icon: "grain"
		},
		liquification: {
			get description () {
				if (game.global.universe == 2) return "This Mastery is currently disabled in Universe 2";
				var text = (this.purchased) ? "This mastery is increasing " : "This mastery would increase ";
				var totalSpires = game.global.spiresCompleted;
				var fluffyCount = Fluffy.isRewardActive("liquid");
				var fluffyText = "Y";
				if (fluffyCount > 0){
					if (fluffyCount == 1) fluffyText = "将你的Fluffy的特殊能力视为完成了半个尖塔。";
					else fluffyText = "将你的Fluffy的两个特殊能力视为完成了一个尖塔。"
					totalSpires += (fluffyCount * 0.5);
				}
				return "Increase your Liquification bonus by 5%, as if you had completed 1 extra Spire. " + fluffyText + "ou have completed " + totalSpires + " unique Spire" + ((totalSpires == 1) ? "" : "s") + ", giving you " + (totalSpires * 5) + "% of your highest Zone reached (through Z" + Math.floor((totalSpires / 20) * (getHighestLevelCleared(false, true) + 1)) + "). " + text + " your bonus to " + ((totalSpires + 1) * 5) + "% of your highest Zone reached (through Z" + Math.floor(((totalSpires + 1) / 20) * (getHighestLevelCleared(false, true) + 1)) + ").";
			},
			name: "Liquification I",
			tier: 6,
			purchased: false,
			icon: "*water"
		},
		mapHealth: {
			description: "Your Trimps gain +100% health in maps.",
			name: "Safe Mapping",
			tier: 6,
			purchased: false,
			icon: "*map-signs"
		},
		scry2: {
			description: "以占卜者阵型完成整个虚空地图，可以额外获得50%的氦。",
			name: "Scryhard II",
			tier: 6,
			purchased: false,
			icon: "*spinner9",
			requires: "scry"
		},
		magmamancer: {
			description: "现在，巫师将会增加同样数量的攻击。 此外，开始每个区域后视为你已在本区域停留5分钟。",
			name: "Magmamancermancy",
			tier: 7,
			purchased: false,
			icon: "*fire2"
		},
		mapLoot2: {
			description: "创建地图时，将最小和最大单元数减少5。",
			name: "Map Reducer II",
			tier: 7,
			purchased: false,
			requires: "mapLoot",
			icon: "*gift2"
		},
		nature: {
			description: "Increase your token trading ratio from 10:5 to 10:8.",
			name: "Natural Diplomacy I",
			tier: 7,
			purchased: false,
			icon: "*tree3"
		},
		deciBuild: {
			description: "建筑队列构造10。此外，如果需要的话，通过自动jian'zao添加到队列中的建筑物每次增加10个。",
			name: "Deca Build",
			tier: 7,
			purchased: false,
			icon: "*hammer",
			requires: "doubleBuild"
		},
		stillRowing: {
			description: "连续完成一个完整的尖塔增加50%掠夺奖励,从2％每行的额外奖励增加到3％。",
			name: "Still Rowing I",
			tier: 7,
			purchased: false,
			icon: "align-justify"
		},
		patience: {
			description: "预期能力现在可以叠45层。",
			name: "Patience",
			tier: 7,
			purchased: false,
			icon: "*clock2"
		},
		voidSpecial: {
			get description() {
				var text = "<p>Receive 1 free Void Map after using your Portal for each 100 Zones cleared last run. " + heliumOrRadon() + " from Void Maps is also increased by 0.25% for each Zone cleared last run.</p>";
				var amt = (getLastPortal() * 0.0025);
				text += "<p>You reached <b>Z" + getLastPortal() + "</b> last Portal, ";
				if (this.purchased) text += " earning you a bonus of ";
				else text += " which would earn you a bonus of ";
				text +=  prettify(amt * 100) + "% extra " + heliumOrRadon() + " and " + Math.floor(getLastPortal() / 100) + " Void Maps.</p>";
				text += "<p>Your value for \"Last Portal Zone\" only changes if you Portal after Z99 or collect an Heirloom, meaning it won't be reset by early restarts.</p>"
				return text;
			},
			name: "Void Specialization I",
			tier: 8,
			purchased: false,
			icon: "*feed"
		},
		healthStrength: {
			description: "Your Trimps gain 15% additive damage per Healthy cell in your current Zone.",
			name: "Strength in Health I",
			tier: 8,
			purchased: false,
			icon: "*aid-kit"
		},
		nature2: {
			description: "Add 5 levels to the Upgrade and Stack Transfer of all 3 Empowerments of Nature, without increasing the costs.",
			name: "Natural Diplomacy II",
			tier: 8,
			purchased: false,
			requires: "nature",
			icon: "*tree3"
		},
		liquification2: {
			get description () {
				if (game.global.universe == 2) return "This Mastery is currently disabled in Universe 2";
				var text = (this.purchased) ? "This mastery is increasing " : "This mastery would increase ";
				var totalSpires = game.global.spiresCompleted;
				if (game.talents.liquification.purchased) totalSpires++;
				var fluffyCount = Fluffy.isRewardActive("liquid");
				var fluffyText = "";
				if (fluffyCount > 0){
					if (fluffyCount == 1) fluffyText = "将你的Fluffy的特殊能力视为完成了半个尖塔。";
					else fluffyText += " 将你的Fluffy的两个特殊能力视为完成了一个尖塔。"
					totalSpires += (fluffyCount * 0.5);
				}
				return "Increase your Liquification bonus by another 5%, as if you had completed 1 extra Spire. Counting Liquification I as one Spire" + fluffyText + ", you have completed the equivalent of " + totalSpires + " unique Spire" + ((totalSpires == 1) ? "" : "s") + ", giving you " + (totalSpires * 5) + "% of your highest Zone reached (through Z" + Math.floor((totalSpires / 20) * (getHighestLevelCleared(false, true) + 1)) + "). " + text + " your bonus to " + ((totalSpires + 1) * 5) + "% of your highest Zone reached (through Z" + Math.floor(((totalSpires + 1) / 20) * (getHighestLevelCleared(false, true) + 1)) + ").";
			},
			name: "Liquification II",
			tier: 8,
			requires: "liquification",
			purchased: false,
			icon: "*water"
		},
		stillRowing2: {
			description: "你的脆皮现在将获得等同于尖塔额外掉落奖励2倍的攻击加成。",
			name: "Still Rowing II",
			tier: 8,
			purchased: false,
			requires: "stillRowing",
			icon: "align-justify"
		},
		amalg: {
			description: "每个合并者给予50%的伤害加成，多个合并者的加成是相乘的，并非叠加。",
			name: "Amalgagreater",
			tier: 8,
			purchased: false,
			icon: "scale"
		},
		voidSpecial2: {
			get description(){
				 var text = "<p>Gain a second Void Map per 100 Zones cleared last run, but the first one is earned at Z50 (then 150, 250 etc). In addition, if Fluffy's level 6 bonus is active, this allows Fluffy to stack 1 additional Void Map, adding another 50% Helium bonus to the stack.</p>";
				 text += "<p>You reached <b>Z" + getLastPortal() + "</b> last Portal,";
				 if (this.purchased) text += " earning you a bonus of ";
				 else text += " which would earn you a bonus of ";
				 var maps = Math.floor((getLastPortal() + 50) / 100);
				 text += maps + " more Void Maps (" + (maps + Math.floor((getLastPortal()) / 100)) + " including Void Specialization I).</p>";
				 text += "<p>Your value for \"Last Portal Zone\" only changes if you Portal after Z99 or collect an Heirloom, meaning it won't be reset by early restarts.</p>"
				 return text;
			},
			name: "Void Specialization II",
			tier: 9,
			purchased: false,
			icon: "*feed",
			requires: "voidSpecial"
		},
		bionic2: {
			description: "在仿生仙境地图中再加一个锻造书。本专精将使每个仿生仙境地图中都有两个锻造书升级，包括你第一次打，本来只有一个机械脆皮的仿生仙境。此外，当你所处的地图比你当前区域高时，获取50%的伤害加成。",
			name: "Bionic Magnet II",
			tier: 9,
			purchased: false,
			onPurchase: function () {
				refreshMaps();
			},
			afterRespec: function () {
				refreshMaps();
			},
			icon: "magnet"
		},
		fluffyExp: {
			get description(){
				var prestige = Fluffy.getCurrentPrestige();
				return "" + Fluffy.getName() + " gains +25% more Exp per Zone for each completed Evolution. " + Fluffy.getName() + " has Evolved " + prestige + " time" + needAnS(prestige) + ", " + ((this.purchased) ? "earning" : "which would earn") + " you a bonus of +" + prettify(prestige * 25) + "% Exp.";
			},
			get name(){
				var name = Fluffy.getName();
				return name.substring(0, name.length - 1) + "focus";
			},
			tier: 9,
			purchased: false,
			icon: "*library"
		},
		fluffyAbility: {
			get description(){
				return "Gain one extra " + Fluffy.getName() + " ability. This works as if " + Fluffy.getName() + " Evolved, but doesn't increase " + Fluffy.getName() + "'s damage bonus.";
			},
			get name(){
				var name = Fluffy.getName();
				return name.substring(0, name.length - 1) + "finity";
			},
			tier: 9,
			purchased: false,
			icon: "*infinity"
		},
		overkill: {
			description: "允许你超杀再额外杀伤一个敌人。",
			name: "Excessive",
			tier: 9,
			purchased: false,
			icon: "*fighter-jet"
		},
		crit: {
			get description(){
				var text = "<p>Adds +1 to your MegaCrit modifier, and adds 50% of your Shield Heirloom's Crit Chance to your Crit Chance again.</p>";
				if (getHeirloomBonus("Shield", "critChance") > 0) text += "<p>Your Shield currently has a bonus of " + getHeirloomBonus("Shield", "critChance") + "%, so this Mastery " + ((this.purchased) ? "is giving you" : "would give you") + " +" + (getHeirloomBonus("Shield", "critChance") / 2) + "% additional Crit Chance.</p>";
				else text += "<p>However, you do not currently have Crit Chance on your Shield.</p>";
				return text;
			},
			name: "Charged Crits",
			tier: 9,
			purchased: false,
			icon: "*power"
		},
		voidMastery: {
			get description(){
				var voidStackCount = Fluffy.getVoidStackCount();
				var text = "<p>Grants 3 spectacular bonuses to your Void Maps";
				if (game.global.universe == 2) text += ", though the first two are incompatible with Scruffy. Scruffy tries but seriously just can't figure out the whole stacking thing yet.";
				else text += "!";
				text += "</p><p>1. The Fluffy bonus for stacked Void Maps calculates with compounding gains, rather than additive. Each Void Map in the stack increases the Helium gain from the stack by x1.5 rather than +50%.</p>";
				text += "<p>2. If Fluffy's level 6 bonus is active, allows Void Maps to infinitely stack. HOWEVER, this requires  the bonus " + heliumOrRadon() + " does not increase past the amount that Fluffy can normally stack, which for you would cap the bonus to a " + voidStackCount + " stack. To clarify, a 100 stack or a " + voidStackCount + " stack map would both grant " + prettify((Math.pow(1.5, voidStackCount - 1) - 1) * 100) + "% bonus " + heliumOrRadon() + " to each map in the stack, but the entire stack will still be completed instantly and each map in the stack will receive the maximum bonus.</p>";
				text += "<p>3. Your Trimps gain 5x damage inside Void Maps</p>";
				return text;
			},
			name: "Master of the Void",
			tier: 10,
			purchased: false,
			requires: "voidSpecial2",
			icon: "*podcast"
		},
		healthStrength2: {
			get description(){
				var text = "<p>Adds 1 extra Healthy cell for every Spire completed this run. Healthy cells will also drop an additional 20% of the Zone's value in Helium, bringing the total up to 65%. Spire I will count for 1 Healthy cell once Healthy cells begin to appear in the World, but does not cause them to start spawning earlier.</p>";
				text += "<p>On your current run, you have cleared " + ((game.global.lastSpireCleared == 0) ? "no Spires" : "through Spire " + romanNumeral(game.global.lastSpireCleared)) + ", so this Mastery is granting " + game.global.lastSpireCleared + " extra Healthy cell" + needAnS(game.global.lastSpireCleared) + ". On your current Zone, you're finding " + mutations.Healthy.cellCount() + " Healthy cells.</p>";
				return text;
			},
			name: "Strength in Health II",
			tier: 10,
			purchased: false,
			requires: "healthStrength",
			icon: "*aid-kit"
		},
		stillMagmamancer: {
			description: "Start every post-magma Zone with an additional 60 seconds of credit already applied to your Magmamancers per Spire row completed this run. In addition, every 2 Spires you complete this run increases the maximum time that Magmamancers can stack by 10 minutes!",
			name: "Still Magmamancing",
			tier: 10,
			purchased: false,
			requires: ["stillRowing2", "magmamancer"],
			icon: "*equalizer"
		},
		liquification3: {
			get description () {
				if (game.global.universe == 2) return "Liquification is disabled in Universe 2, but <b>Hyperspeed II's bonus will now function up to 75% of your Highest Zone Reached rather than a measly 50%</b>"
				var text = (this.purchased) ? "This mastery is increasing " : "This mastery would increase ";
				var totalSpires = game.global.spiresCompleted;
				if (game.talents.liquification.purchased) totalSpires++;
				if (game.talents.liquification2.purchased) totalSpires++;
				var fluffyCount = Fluffy.isRewardActive("liquid");
				var fluffyText = "";
				if (fluffyCount > 0){
					if (fluffyCount == 1) fluffyText = " and your Fluffy bonus as half of a Spire";
					else fluffyText += " and your two Fluffy bonuses as another"
					totalSpires += (fluffyCount * 0.5);
				}
				return "Increase your Liquification bonus by <b>10%</b>, as if you had completed <b>2 extra Spires</b>. In addition, <b>Hyperspeed II's bonus will also now function up to 75% of your Highest Zone Reached rather than a measly 50%</b>.<br/><br/>Counting Liquification I and II as two Spires" + fluffyText + ", you have completed the equivalent of " + totalSpires + " unique Spire" + ((totalSpires == 1) ? "" : "s") + ", giving you " + (totalSpires * 5) + "% of your highest Zone reached (through Z" + Math.floor((totalSpires / 20) * (getHighestLevelCleared(false, true) + 1)) + "). " + text + " your bonus to " + ((totalSpires + 2) * 5) + "% of your highest Zone reached (through Z" + Math.floor(((totalSpires + 2) / 20) * (getHighestLevelCleared(false, true) + 1)) + ").";
			},
			name: "Liquification III",
			tier: 10,
			purchased: false,
			requires: "liquification2",
			icon: "*water"
		},
		mesmer: {
			get description(){
				var number = (game.global.highestRadonLevelCleared >= 64) ? "2/3" : "2";
				var totalDesc = (game.global.highestRadonLevelCleared >= 64) ? "<span class='icomoon icon-infinity'></span>" : "2";
				var challengeList = (game.global.highestRadonLevelCleared >= 64) ? "Trappapalooza, " : "";
				challengeList += "Trapper, Coordinate, Trimp, Obliterated or Eradicated"
				var text = "<p>Triples the Challenge<sup>" + number + "</sup> bonus for all Challenge<sup>" + number + "</sup>s that have normal reward scaling (Does not include " + challengeList + ").</p>";
				var currentC2 = countChallengeSquaredReward(true);
				text += "<p>You currently have a C<sup>" + totalDesc + "</sup> bonus of " + prettify(currentC2) + "%.";
				totalDesc = "Challenge<sup>" + totalDesc + "</sup> bonus "
				if (this.purchased){
					var newVal = countChallengeSquaredReward(true, "noMesmer");
					text += " Removing this Mastery would reduce your bonus by " + prettify(currentC2 - newVal) + "%, bringing your total " + totalDesc + "down to " + prettify(newVal) + "%.</p>";
				}
				else{
					var newVal = countChallengeSquaredReward(true, "mesmer");
					text += " Purchasing this Mastery would increase your bonus by " + prettify(newVal - currentC2) + "%, bringing your total " + totalDesc + "up to " + prettify(newVal) + "%.</p>";
				}
				return text;
			},
			name: "Mesmer",
			tier: 10,
			purchased: false,
			icon: "*shrink",
			onPurchase: function(){
				countChallengeSquaredReward();
			},
			afterRespec: function(){
				countChallengeSquaredReward();
			}
		},
		angelic: {
			description: "Your Trimps heal for 50% of their remaining health immediately before each attack. Due to the intense amount of evil present, Trimps cannot heal in never-before-cleared Spires.",
			name: "Angelic",
			tier: 10,
			purchased: false,
			icon: "*star-half-empty"
		}
		//don't forget to add new talent tier to getHighestTalentTier()
	},
	//portal
	portal: {
		Looting_II: {
			level: 0,
			locked: true,
			priceBase: 100000,
			heliumSpent: 0,
			tooltip: "运用你的技能从尖塔打捞物品，每级增加0.25%的战利品。这种额外福利的价格会增加，每一级的价格将比上一等级高出10000氦。",
			additive: true,
			additiveInc: 10000,
			modifier: 0.0025
		},
		Carpentry_II: {
			level: 0,
			locked: true,
			priceBase: 100000,
			heliumSpent: 0,
			tooltip: "你已经学会了更加客观地看待不再神秘的建筑设计，每级增加0.25%的居住空间。这将在木工I的基础上面成倍增加，这种额外福利的价格会增加，每一级的价格将比上一等级高出10000氦。",
			additive: true,
			additiveInc: 10000,
			modifier: 0.0025
		},
		Motivation_II: {
			level: 0,
			locked: true,
			priceBase: 50000,
			heliumSpent: 0,
			tooltip: "腐败和即将到来的厄运是让你更加努力工作的巨大动力!每升一级增加脆皮的收集速度1%。这种额外福利的价格会增加，每一级的价格将比上一等级高出1000氦。",
			additive: true,
			additiveInc: 1000,
			modifier: 0.01
		},
		Power_II: {
			level: 0,
			locked: true,
			priceBase: 20000,
			heliumSpent: 0,
			tooltip: "你在渴望回家的欲望中找到了力量。让你的脆皮们一直听你谈论它，激怒他们，使他们的伤害每等级增加1%。这种额外福利的价格会增加，每一级的价格将比上一等级高出500氦。",
			additive: true,
			additiveInc: 500,
			modifier: 0.01
		},
		Toughness_II: {
			level: 0,
			locked: true,
			priceBase: 20000,
			heliumSpent: 0,
			tooltip: "当你记得你从哪里来的时候，你会感到更加踏实。将你的韧性扩展给你的脆皮，每级增加1%的生命。这种额外福利的价格会增加，每一级的价格将比上一等级高出500氦。",
			additive: true,
			additiveInc: 500,
			modifier: 0.01
		},
		Capable: {
			level: 0,
			locked: true,
			priceBase: 1e8,
			heliumSpent: 0,
			tooltip: "你可以在Fluffy中感受到巨大的力量，但他需要一些训练。 能力的每个级别都允许Fluffy获得1级的经验。 降低能力等级将暂时移除Fluffy的等级和经验以及相关的任何奖励，但所有的经验都将被保存，直到重新提升能力等级为止。 能力的每个级别比上一级贵10倍，购买第一级将允许Fluffy陪你一起传过传送门。",
			max: 10,
			specialGrowth: 10,
			onChange: function(){
				Fluffy.handleBox();
			}
		},
		Cunning: {
			level: 0,
			locked: true,
			modifier: 0.25,
			priceBase: 1e11,
			heliumSpent: 0,
			get tooltip(){
				return "蓬松需要更多的氦气！ 每个级别的狡猾将增加 " + Math.round(this.modifier * 100) + "%经验(线性)。"
			}
		},
		Curious: {
			level: 0,
			locked: true,
			modifier: 60,
			priceBase: 1e14,
			heliumSpent: 0,
			get tooltip() {
				return "Fluffy 进步中, 但他进步的有点慢。 每一级的好奇都将加速Fluffy的发展。每级增加" + this.modifier + " 点每个区域的基础经验。"
			}
		},
		Classy: {
			level: 0,
			locked: true,
			modifier: 3,
			priceBase: 1e17,
			heliumSpent: 0,
			get tooltip() {
				var level = (this.levelTemp) ? this.level + this.levelTemp : this.level;
				return "Reduce the Zone that Fluffy can start earning Experience at by " + this.modifier + "." + " With " + level + " level" + needAnS(level) + " in Classy, Fluffy will start earning Experience at Z" + (301 - (level * this.modifier)) + ".";
			},
			max: 75
		},
		Overkill: {
			level: 0,
			locked: true,
			radLocked: true,
			priceBase: 1000000,
			heliumSpent: 0,
			radLevel: 0,
			radSpent: 0,
			tooltip: "你已经完成了一个超凡脱俗的目标，那就是获得超额伤害(超出敌人生命值的伤害)，出类拔萃！每个等级的能力将会允许你的超额伤害的0.5%去伤害下一个敌人。如果这个伤害杀死了下一个敌人，你就不用再经过那个方块了。最高30层。",
			max: 30
		},
		Resourceful: {
			level: 0,
			locked: true,
			modifier: 0.05,
			priceBase: 50000,
			heliumSpent: 0,
			tooltip: "经历了对地图的限制教会了你如何变得更足智多谋。每级都能让你在购买所有建筑物时 <b>比当前的成本</b> 少花5%的资源。"
		},
		Coordinated: {
			level: 0,
			locked: true,
			priceBase: 150000,
			modifier: 0.98,
			heliumSpent: 0,
			currentSend: 1,
			onChange: function (overrideLevel) {
				var newValue = 1;
				var level = (overrideLevel) ? this.level + this.levelTemp : this.level;
				var currentMod = 0.25 * Math.pow(this.modifier, level);
				currentMod += 1;
				for (var x = 0; x < game.upgrades.Coordination.done; x++){
					newValue = Math.ceil(newValue * currentMod);
				}
				if (overrideLevel) return newValue;
				this.currentSend = newValue;
			},
			tooltip: "通过利用研究协同作战的敌人时所获得的知识，每级协作升级所需的脆皮数量减少<b>当前数量的</b>2%(每级叠乘0.98),同时保持协作的奖励效果不变。"
		},
		Siphonology: {
			level: 0,
			locked: true,
			max: 3,
			priceBase: 100000,
			heliumSpent: 0,
			tooltip: "使用替代维度中发现的策略从较低级别的地图虹吸地图伤害加成。 对于虹吸学的每个级别，您将可以从比当前区域低一级的地图获得伤害加成。 最多3个级别。",
		},
		Anticipation: {
			level: 0,
			locked: true,
			max: 10,
			modifier: 0.02,
			priceBase: 1000,
			heliumSpent: 0,
			onChange: function () {
				if (this.level <= 0) {
					game.global.antiStacks = 0;
					updateAntiStacks();
				}
			},
			get tooltip(){
				var time = game.talents.patience.purchased ? 45 : 30;
				return "运用你对脆皮了解的经验，基于一支战斗队生产需要的时间来增加脆皮的伤害。每升一级，每秒繁殖时间增加2%伤害，上限为" + time + "秒。最高10级。"
			}
		},
		Resilience: {
			level: 0,
			locked: true,
			radLocked: true,
			radLevel: 0,
			radSpent: 0,
			modifier: 0.1,
			priceBase: 100,
			heliumSpent: 0,
			tooltip: "使用你在脆皮挑战中所获取的技能，每级脆皮总生命增长10%（<b>复合</b>）。"
		},
		Meditation: {
			level: 0,
			locked: true,
			modifier: 1,
			priceBase: 75,
			heliumSpent: 0,
			max: 7,
			tooltip: "你在挑战中的经历教会了你从容不迫。每级冥想将让你在当前区域内每过10分钟，脆皮的收集速度增加1%，最多叠1小时，离线时仍然生效。这个加成将会在打通当前区域后重置。最高7级。",
			getBonusPercent: function (justStacks) {
				var timeOnZone = getGameTime() - game.global.zoneStarted;
				timeOnZone = Math.floor(timeOnZone / 600000);
				if (timeOnZone > 6) timeOnZone = 6;
				else if (timeOnZone <= 0) return 0;
				if (justStacks) return timeOnZone;
				return (timeOnZone * this.modifier * getPerkLevel("Meditation"));
			}
		},
		Relentlessness:{
			level: 0,
			locked: true,
			modifier: 0.05,
			otherModifier: 0.3,
			priceBase: 75,
			heliumSpent: 0,
			tooltip: "你已经看到太多的失败了，是时候进行更积极的训练了。 带回这些记忆会使你的脆皮在1级时获得5％的几率造成+ 130％的伤害，并且每级将获得额外的5％暴击几率和30％的爆击伤害。 最多10个级别。",
			max: 10
		},
		Tenacity: {
			priceBase: 50e6,
			radLocked: true,
			radLevel: 0,
			radSpent: 0,
			getMult: function(){
				return Math.pow(this.getBonusAmt(), getPerkLevel("Tenacity"));
			},
			getBonusAmt: function(){
				var minutes = getZoneMinutes();
				if (minutes > 120) minutes = 120;
				return (1.1 + (Math.floor(minutes / 4) * 0.01));
			},
			tooltip: "If things seem tough, just try hitting them harder. Each level increases your Trimps' Attack by 10% (compounding). For every 4 minutes you spend on one Zone, 1% is <b>added</b> to the compounding bonus, with a max of 2 hours and resetting back to 10% at the start of each new Zone. For example: If you have spent an hour on one Zone, you'll earn a 25% compounding Attack bonus for each level of Tenacity.",
			max: 40
		},
		Criticality: {
			modifier: 0.1,
			priceBase: 100,
			radLocked: true,
			radLevel: 0,
			radSpent: 0,
			tooltip: "When your Critical Strikes just aren't doing enough, try Criticality! Each level increases your Trimps' Critical Strike Damage by 10% (additive).",
		},
		Equality: {
			modifier: 0.9,
			priceBase: 1,
			radLocked: true,
			radLevel: 0,
			radSpent: 0,
			tooltip: "Produce a Calming Aura from your Portal Device, reducing the Attack of Bad Guys AND Trimps by 10% (compounding). You can enable Equality Scaling, which causes Equality to start inactive and gain one level each time your Trimps die up to your purchased Perk level.",
			getMult: function(){
				return Math.pow(this.modifier, this.getActiveLevels());
			},
			getActiveLevels: function(){
				var perkLevel = getPerkLevel("Equality");
				if (this.scalingActive && this.scalingCount < perkLevel) return this.scalingCount;
				return perkLevel;
			},
			specialGrowth: 1.5,
			scalingActive: false,
			scalingSetting: 5,
			scalingCount: 0
		},
		Carpentry: {
			level: 0,
			locked: true,
			radLocked: true,
			radLevel: 0,
			radSpent: 0,
			modifier: 0.1,
			priceBase: 25,
			heliumSpent: 0,
			tooltip: "你已经建了很多房子，而且你已经做得很好了。 通过传送门将您在建筑方面的专业知识带回来，将使您能够在每个级别上存放比当前数量多10％的脆皮（复合）。"
		},
		Artisanistry: {
			level: 0,
			locked: true,
			modifier: 0.05,
			priceBase: 15,
			radLevel: 0,
			radSpent: 0,
			radLocked: true,
			heliumSpent: 0,
			tooltip: "你已经开始注意到用相当少的资源制造同样强大的设备的方法。 带回这些新想法将使您可以在所有设备上花费比现有成本低5％的资源。"
		},
		Range: {
			level: 0,
			locked: true,
			modifier: 2,
			max: 10,
			priceBase: 1,
			radLevel: 0,
			radSpent: 0,
			radLocked: true,
			heliumSpent: 0,
			tooltip: "使用你的新发现的领导技能，使你的脆皮最低伤害提高2％。 叠加10次，不会影响最大伤害。 在10级时，每次攻击造成至少100％的伤害。",
		},
		Agility: {
			level: 0,
			modifier: 0.05,
			priceBase: 4,
			heliumSpent: 0,
			tooltip: "Crank your portal into overdrive, increasing the clock speed of the Universe. Each level reduces the time between Trimp and Bad Guy attacks by 5% <b>of the current time (compounds)</b>. Maximum of 20 levels.",
			max: 20,
			radLevel: 0,
			radSpent: 0,
			locked: false,
			radLocked: false
		},
		Bait: {
			level: 0,
			modifier: 1,
			priceBase: 4,
			heliumSpent: 0,
			tooltip: "A few of these in your traps are sure to bring in extra Trimps. Each level allows traps to catch $modifier$ extra Trimp.",
			radLevel: 0,
			radSpent: 0,
			locked: false,
			radLocked: false
		},
		Trumps: {
		//fiveTrimpMax worldUnlock
			level: 0,
			modifier: 1,
			priceBase: 3,
			heliumSpent: 0,
			tooltip: "Practicing aggressive strategizing allows you to earn $modifier$ extra max population from each battle territory bonus.",
			radLevel: 0,
			radSpent: 0,
			locked: false,
			radLocked: false
		},
		//breed main
		Pheromones: {
			level: 0,
			modifier: 0.1,
			priceBase: 3,
			heliumSpent: 0,
			tooltip: "Bring some pheromones with you to ensure that your Trimps will permanently breed 10% faster.",
			radLevel: 0,
			radSpent: 0,
			locked: false,
			radLocked: false
		},
		//trapThings main
		Packrat: {
			modifier: 0.2,
			heliumSpent: 0,
			tooltip: "研究古代、秘密的贮藏方法。每一级都增加了你可以在每个谷仓里塞进的东西数量，存储上限增加20%。",
			priceBase: 3,
			level: 0,
			radLevel: 0,
			radSpent: 0,
			locked: false,
			radLocked: false
		},
		//updatePs updates
		//gather main
		Motivation: {
			modifier: 0.05,
			heliumSpent: 0,
			tooltip: "给你的脆皮们进行一些演讲吧。 每一级能增加5%工人生产的资源。",
			priceBase: 2,
			level: 0,
			radLevel: 0,
			radSpent: 0,
			locked: false,
			radLocked: false
		},
		//startFight main
		Power: {
			level: 0,
			modifier: 0.05,
			priceBase: 1,
			heliumSpent: 0,
			tooltip: "脆皮们通过例子来学习。 花一些时间去卧推死掉的大象来使今后的脆皮们变得更加强大。 永久性增加脆皮5%攻击力。",
			radLevel: 0,
			radSpent: 0,
			locked: false,
			radLocked: false
		},
		//startFight main
		Toughness: {
			modifier: 0.05,
			priceBase: 1,
			heliumSpent: 0,
			tooltip: "Pay your Trimps to knock you around a little bit. By learning to not be such a wuss, your Trimps will be less wussy as well. Adds 5% health permanently to your Trimps.",
			level: 0,
			radLevel: 0,
			radSpent: 0,
			locked: false,
			radLocked: false
		},
		//rewardResources main
		Looting: {
			modifier: 0.05,
			priceBase: 1,
			heliumSpent: 0,
			tooltip: "Walk back through the empty Zones, learning how to milk them for every last drop. Each level permanently increases the amount of resources gained from battle by 5%.",
			level: 0,
			radLevel: 0,
			radSpent: 0,
			locked: false,
			radLocked: false
		},
		Prismal: {
			modifier: 0.01,
			priceBase: 1,
			radLocked: false,
			radLevel: 0,
			radSpent: 0,
			tooltip: "Crystallize some Radon, creating an interdimensional Prism that you can carry back through Portals. Each level adds 1% to your Trimps' Prismatic Shield and makes your Trimps feel 5% more comfortable in battle.",
			max: 100,
			onChange: function(){
				if (!game.upgrades.Prismatic.done) document.getElementById("blockDiv").style.visibility = "visible";
			}
		},
	},
	c2: {
		Discipline: 0,
		Metal: 0,
		Size: 0,
		Balance: 0,
		Meditate: 0,
		Trimp: 0,
		Trapper: 0,
		Electricity: 0,
		Coordinate: 0,
		Slow: 0,
		Nom: 0,
		Mapology: 0,
		Toxicity: 0,
		Watch: 0,
		Lead: 0,
		Obliterated: 0,
		Eradicated: 0,
		//U2
		Unlucky: 0,
		Downsize: 0,
		Transmute: 0,
		Unbalance: 0,
		Duel: 0,
		Trappapalooza: 0,
		Wither: 0,
		Quest: 0
	},
	challenges: {
		Daily: {
			get description(){
				return (isSaving) ? "" : getDailyChallenge(0);
			},
			filter: function () {
				if (portalUniverse == 2){
					return (game.global.highestRadonLevelCleared >= 29);
				}
				return (game.global.highestLevelCleared >= 99);
			},
			allowU2: true,
			start: function () {
				startDaily();
			},
			abandon: function () {
				abandonDaily();
			},
			getCurrentReward: function(){
				var res = (game.global.universe == 2) ? game.resources.radon.owned : game.resources.helium.owned + game.stats.spentOnWorms.value;
				var value = getDailyHeliumValue(countDailyWeight()) / 100;
				if (res > 0) res = Math.floor(res * value);
				return res;
			},
			fireAbandon: true,
			get unlockString(){
				return (portalUniverse == 2) ? "reach Zone 30" : "reach Zone 100";
			}
		},
		Discipline: {
			description: "调整传送门，让你回到脆皮不那么被训练的世界，以教你如何做一个更好的脆皮教练。 你的脆皮的最小伤害将大大降低，但是他们的极限伤害会更高。 完成愤怒维度将导致脆皮伤害恢复正常。",
			filter: function () {
				return (getTotalPerkResource(true) >= 30);
			},
			onComplete: function(){
				game.global.challengeActive = "";
				game.challenges.Discipline.completed = true;
				unlockPerk("Range");
				message("You have completed the <b>Discipline Challenge!</b> You have unlocked a new perk, and your Trimps have regained their Discipline.", "Notices");
			},
			allowSquared: true,
			squaredDescription: "调整传送门，让你回到脆皮不那么被训练的世界，以教你如何做一个更好的脆皮教练。 你的脆皮的最小伤害将大大降低，但是他们的极限伤害会更高。",
			unlocks: "Range",
			unlockString: "have 30 total Helium"
		},
		Metal: {
			description: "调整传送门把你带到另一个现实，那里的矿工的概念不存在，迫使自己变得节俭与设备各具特色的战略。如果你在没有削弱挑战的情况下完成了愤怒维度，矿工将重新解锁。",
			completed: false,
			filter: function () {
				return (getHighestLevelCleared(true) >= 24);
			},
			abandon: function () {
				game.worldUnlocks.Miner.fire();
				if (this.heldBooks >= 1){
					game.upgrades.Speedminer.locked = 0;
					if (this.heldBooks > 1){
						game.upgrades.Speedminer.allowed += this.heldBooks - 1;
					}
					unlockUpgrade("Speedminer");
				}
				if (this.heldMegaBooks >= 1){
					game.upgrades.Megaminer.locked = 0;
					if (this.heldMegaBooks > 1){
						game.upgrades.Megaminer.allowed += this.heldMegaBooks - 1;
					}
					unlockUpgrade("Megaminer");
				}
				if (this.holdMagma)
					unlockUpgrade("Magmamancers");
			},
			onComplete: function(){
				game.global.challengeActive = "";
				game.challenges.Metal.abandon();
				unlockPerk("Artisanistry");
				game.challenges.Metal.completed = true;
				message("You have completed the <b>Metal Challenge!</b> You have unlocked a new perk, and Miners have returned to your game.", "Notices");
			},

			allowSquared: true,
			squaredDescription: "调整传送门把你带到另一个现实，那里的矿工的概念不存在，迫使自己变得节俭与设备各具特色的战略。",
			fireAbandon: false,
			heldBooks: 0,
			heldMegaBooks: 0,
			holdMagma: false,
			unlocks: "Artisanistry",
			unlockString: "到达区域 25"
		},
		Size: {
			description: "调整传送门，让你进入另一个现实，在那里脆皮越来越强大，迫使自己想出一个方法来建造更大的房屋。 你的脆皮会多收集50％的资源，但你的住房将少50％的脆皮。 如果您完成“愤怒维度”，你的数据将恢复正常。",
			completed: false,
			filter: function () {
				return (getHighestLevelCleared(true) >= 34);
			},
			abandon: function () {
				game.jobs.Farmer.modifier *= (2/3);
				game.jobs.Lumberjack.modifier *= (2/3);
				game.jobs.Miner.modifier *= (2/3);
				game.resources.trimps.maxMod = 1;
			},
			start: function () {
				game.jobs.Farmer.modifier *= 1.5;
				game.jobs.Lumberjack.modifier *= 1.5;
				game.jobs.Miner.modifier *= 1.5;
				game.resources.trimps.maxMod = 0.5;
			},
			onComplete: function (){
				game.global.challengeActive = "";
				game.challenges.Size.abandon();
				game.challenges.Size.completed = true;
				unlockPerk("Carpentry");
				message("You have completed the <b>Size Challenge!</b> You have unlocked a new perk, and your Trimps have been reduced down to their normal size.", "Notices");
			},
			allowSquared: true,
			squaredDescription: "调整传送门，让你进入另一个现实，在那里脆皮越来越强大，迫使自己想出一个方法来建造更大的房屋。 你的脆皮会多收集50％的资源，但你的住房将少50％的脆皮。",
			fireAbandon: true,
			unlocks: "Carpentry",
			unlockString: "到达区域 35"
		},
		Balance: {
			description: "你的科学家发现了一个充满氦气的混沌空间。 所有敌人的生命值提高100％，世界上的敌人造成的伤害提高17％，地图上的敌人造成135％的伤害。 从6区开始，每当世界上的一个敌人被击毙时，你将获得一层“不平衡”。 每当地图上的敌人被杀时，你将失去一层不平衡。 每次不平衡叠加可以使你的生命值降低1％，但你的脆皮的收集速度提高1％。 不平衡只能叠加到250。在这个挑战激活的情况下，完成 <b>40区</b> 将额外获得100％的氦气。 这个挑战是可重复的！",
			completed: false,
			filter: function () {
				return (getHighestLevelCleared(true) >= 39);
			},
			balanceStacks: 0,
			addStack: function () {
				this.balanceStacks++;
				if (this.balanceStacks > 250) this.balanceStacks = 250;
				else {
					game.global.soldierHealthMax *= 0.99;
					if (game.global.soldierHealth > game.global.soldierHealthMax) game.global.soldierHealth = game.global.soldierHealthMax;
				}
				if (this.balanceStacks > this.highestStacks) this.highestStacks = this.balanceStacks;
			},
			removeStack: function () {
				this.balanceStacks--;
				if (this.balanceStacks < 0) this.balanceStacks = 0;
				else {
					game.global.soldierHealthMax /= 0.99;
				}
			},
			abandon: function () {
				this.balanceStacks = 0;
				updateBalanceStacks();
			},
			getHealthMult: function (formatText) {
				var num = Math.pow(0.99, this.balanceStacks);
				if (formatText) return Math.floor((1 - num) * 100) + "%";
				return num;
			},
			getGatherMult: function (formatText) {
				if (formatText) return this.balanceStacks + "%";
				return ((this.balanceStacks * 0.01) + 1);
			},
			onComplete: function(){
				if (game.challenges.Balance.highestStacks <= 100) giveSingleAchieve("Underbalanced");
				var reward = game.challenges.Balance.heldHelium;
				message("You have completed the Balance challenge! You have been rewarded with " + prettify(reward) + " Helium, and you may repeat the challenge.", "Notices");
				game.challenges.Balance.abandon();
				game.global.challengeActive = "";
				addHelium(reward);
			},
			allowSquared: true,
			squaredDescription: "你的科学家发现了一个充满氦气的混沌空间。 所有敌人的生命值提高100％，世界上的敌人造成的伤害提高17％，地图上的敌人造成135％的伤害。 从6区开始，每当世界上的一个敌人被击毙时，你将获得一层“不平衡”。 每当地图上的敌人被杀时，你将失去一层不平衡。 每次不平衡叠加可以使你的生命值降低1％，但你的脆皮的收集速度提高1％。 不平衡只能叠加到250。",
			highestStacks: 0,
			fireAbandon: true,
			heldHelium: 0,
			heliumThrough: 40,
			unlockString: "到达区域 40"
		},
		Scientist: {
			get description (){
				var is5 = (game.global.highestLevelCleared >= 129 && game.global.sLevel >= 4);
				return "尝试调整传送门来 " + ((is5) ? "从之前的维度中保留一些好处" : "保留一些资源") + "。在你完成这个挑战前，你开局便有<b>_</b>科学，但是不能研究或是雇佣科学家" + ((is5) ? " 并且<b style='color: maroon'>所有敌人的伤害都会提高10倍</b>" : "") + "。 明智地选择你的升级吧！ 在挑战中清除 <b>'障碍区' (11)</b> 能让你每次传送 * 。"
			},
			mustRestart: true,
			completed: false,
			heldBooks: 0,
			filter: function (fromCheck) {
				if (portalUniverse == 2) return false;
				if (game.global.sLevel == 0) return (game.global.highestLevelCleared >= 39);
				else if (game.global.sLevel == 1) return (game.global.highestLevelCleared >= 49);
				else if (game.global.sLevel == 2) {
					return (game.global.highestLevelCleared >= 89);
				}
				else if (game.global.sLevel == 3){
					 return (game.global.highestLevelCleared >= 109);
				}
				else if (game.global.sLevel >= 4){
					return (game.global.highestLevelCleared >= 129);
				}
				else return true;
			},
			onComplete: function(){
				game.global.challengeActive = "";
				game.global.sLevel = getScientistLevel();
				game.challenges.Scientist.abandon();
				message("You have completed the <b>Scientist Challenge!</b> From now on, you'll " + getScientistInfo(game.global.sLevel, true) + " every time you portal. You've unlocked Scientists, and <b>Don't forget that you can click Research on your Science again!</b>", "Notices");
			},
			abandon: function () {
				game.worldUnlocks.Scientist.fire();
				document.getElementById("scienceCollectBtn").style.display = "block";
				for (var x = 0; x < this.heldBooks; x++){
					unlockUpgrade("Speedscience");
				}
				message("你可以再次研究科学!", "Notices");
				if (game.global.sLevel >= 4) {
					if (game.buildings.Warpstation.craftTime > 0){
						game.buildings.Warpstation.craftTime = 0;
						addNewSetting('forceQueue');
					}
					document.getElementById("autoPrestigeBtn").style.display = "block";
				}
			},
			start: function () {
				document.getElementById("scienceCollectBtn").style.display = "none";
				game.resources.science.owned = getScientistInfo(getScientistLevel());
				game.global.autoUpgrades = false;
				game.global.autoPrestiges = 0;
				toggleAutoPrestiges(true);
				toggleAutoUpgrades(true);
			},
			onLoad: function () {
				document.getElementById("scienceCollectBtn").style.display = "none";
			},
			fireAbandon: false,
			unlockString: function () {
				if (game.global.sLevel == 0) return "到达区域 40";
				else if (game.global.sLevel == 1) return "到达区域 50";
				else if (game.global.sLevel == 2) return "到达区域 90";
				else if (game.global.sLevel == 3) return "到达区域 110";
				else if (game.global.sLevel >= 4) return "到达区域 130";
			}
		},
		Meditate: {
			description: "访问一个更强大的维度，试图学习如何更好地训练你的脆皮。 所有的敌人将拥有+100%的生命和+50%的攻击，但是你的脆皮收集速度将会提高25%。 完成 <b>'末日之神殿' (33)</b> 后将返回正常的世界。",
			completed: false,
			filter: function () {
				return (getHighestLevelCleared(true) >= 44);
			},
			onComplete: function(){
				game.global.challengeActive = "";
				unlockPerk("Meditation");
				message("You have completed the 'Meditate' challenge! The dimension has returned to normal, and you have unlocked a new perk!", "Notices");
			},
			allowSquared: true,
			squaredDescription: "访问一个更强大的维度，尝试学习如何更好地训练你的脆皮。 所有的敌人将拥有+100%的生命和+50%的攻击，但是你的脆皮收集速度将会提高25%。",
			unlocks: "Meditation",
			unlockString: "到达区域 45"
		},
		Decay: {
			description: "调整传送门，来把你带到另一个现实当中，在那里有更多的混乱，将帮助你学会创造一个和平的地方。你将获得10x的战利品(不包括氦)，10x的收集和5x的脆皮攻击，但是每一秒都会积累一层衰变。每层的衰变都会减少战利品、收集以及脆皮攻击当前值的0.5%。当你杀死Blimp(区域boss)时积累的衰变会重置，并且衰变最高叠999层。进行本挑战完成 <b>区域55</b>能让你在创造地图时选择花园地图，未来创建的所有花园地图将获得+25%的战利品。",
			completed: false,
			decayValue: 0.995,
			abandon: function () {
				updateDecayStacks();
			},
			maxStacks: 999,
			fireAbandon: true,
			stacks: 0,
			filter: function () {
				return (getHighestLevelCleared(true) >= 54);
			},
			onComplete: function(){
				game.challenges.Decay.completed = true;
				game.global.decayDone = true;
				game.global.challengeActive = "";
				game.challenges.Decay.abandon();
				message("You have completed the Decay challenge! All stats have been returned to normal, and you can now create more powerful Gardens maps at will!", "Notices")	
			},
			completeAfterZone: 55,
			unlockString: "reach Zone 55",
		},
		Trimp: {
			description: "调整传送门，让你进入一个维度，如果有超过1只脆皮在同时战斗，他们会爆炸。 你将不能学习协作， 但是完成 <b>'障碍区' (11)</b> 将教会你如何让你的脆皮存活更长时间。",
			completed: false,
			heldBooks: 0,
			fireAbandon: true,
			allowSquared: true,
			squaredDescription: "调整传送门，让你进入一个维度，如果有超过1只脆皮在同时战斗，他们会爆炸。你将无法学会协作。",
			replaceSquareThresh: 40,
			replaceSquareReward: 3,
			replaceSquareGrowth: 3,
			unlocks: "Resilience",
			filter: function () {
				return (getHighestLevelCleared(true) >= 59);
			},
			abandon: function () {
				if (game.challenges.Trimp.heldBooks > 1)
					game.upgrades.Coordination.allowed += game.challenges.Trimp.heldBooks - 1;
				if (game.challenges.Trimp.heldBooks > 0)
					unlockUpgrade("Coordination");
				document.getElementById("realTrimpName").innerHTML = "Trimps";
			},
			start: function () {
				document.getElementById("realTrimpName").innerHTML = "Trimp";
			},
			onLoad: function () {
				this.start();
			},
			onComplete: function(){
				game.global.challengeActive = "";
				game.challenges.Trimp.abandon();
				unlockPerk("Resilience");
				message("You have completed the <b>Trimp Challenge!</b> You have unlocked the 'Resilience' perk, and your Trimps can fight together again.", "Notices");
			},
			unlockString: "reach Zone 60"
		},
		Trapper: {
			description: "旅行到一个地方，在那里，脆皮拒绝在人工饲养的环境中繁殖，为你自己学习如何利用繁殖率较低的新环境。 清理 <b>'末日之神殿' (33)</b> 有了这个挑战，你的繁殖率就会恢复到正常水平。",
			completed: false,
			heldBooks: 0,
			fireAbandon: true,
			allowSquared: true,
			squaredDescription: "旅行到一个地方，在那里，脆皮拒绝在囚禁中繁殖，祝你好运!",
			replaceSquareThresh: 50,
			replaceSquareGrowth: 2,
			unlocks: "Anticipation",
			filter: function () {
				return (getHighestLevelCleared(true) >= 69);
			},
			start: function () {
				document.getElementById('trimpsBreedingTitle').innerHTML = "bored";
			},
			onLoad: function () {
				this.start();
			},
			abandon: function () {
				document.getElementById('trimpsBreedingTitle').innerHTML = "breeding";
				for (var x = 0; x < game.challenges.Trapper.heldBooks; x++){
					unlockUpgrade("Potency");
				}
			},
			onComplete: function(){
				game.global.challengeActive = "";
				game.challenges.Trapper.abandon();
				unlockPerk("Anticipation");
				message("You have completed the 'Trapper' challenge! Your Trimps now remember how to breed, and you have unlocked a new perk!", "Notices");
			},
			unlockString: "reach Zone 70"
		},
		Electricity: {
			description: "使用你在监狱中找到的钥匙，将你传送至一个极其危险的维度。在这个维度中，敌人会电击你的脆皮，敌人对脆皮的每次攻击会叠加一个减益效果，每层效果会在每个回合对脆皮造成10%最大血量的伤害，并减少脆皮10%的伤害(死亡后效果重置)。清除 <b>'监狱' (80)</b>将会奖励你200%的你所获得的氦(不包括区域80及以上所获得)。这个挑战是可重复的！",
			completed: false,
			hasKey: false,
			filter: function () {
				return (portalUniverse == 1 && game.global.prisonClear > 0);
			},
			fireAbandon: true,
			abandon: function () {
				game.challenges.Electricity.stacks = 0;
				updateElectricityStacks();
			},
			onComplete: function(){
				var reward = Math.floor(game.challenges.Electricity.heldHelium * 2);
				if (game.global.challengeActive == "Electricity") message("You have completed the Electricity challenge! You have been rewarded with " + prettify(reward) + " Helium, and you may repeat the challenge.", "Notices");
				game.challenges.Electricity.heldHelium = 0;
				game.global.challengeActive = "";
				addHelium(reward);
				game.challenges.Electricity.stacks = 0;
				updateElectricityStacks();
				refreshMaps();
			},
			heldHelium: 0,
			heliumThrough: 79,
			allowSquared: true,
			attacksInARow: 0,
			squaredDescription: "使用你在监狱中找到的钥匙，将你传送至一个极其危险的维度。在这个维度中，敌人会电击你的脆皮，敌人对脆皮的每次攻击会叠加一个减益效果，每层效果会在每个回合对脆皮造成10%最大血量的伤害，并减少脆皮10%的伤害(死亡后效果重置)。",
			stacks: 0,
			unlockString: "在区域80清除'监狱'"
		},
		Frugal: {
			description: "为了更好地掌握资源及装备管理，将你自己带入一个装备很便宜，但不能进阶的维度。在本挑战中完成<b>'愤怒维度' (20)</b>将在地图中返还锻造书，并且获得新技能节俭，将永久使50%加成的书变为60%加成的巨型书。",
			completed: false,
			filter: function () {
				return (getHighestLevelCleared(true) >= 99);
			},
			start: function (reset) {
				var mod = (reset) ? 1.2 : 1.1;
				for (var item in game.equipment){
					var cost = (item == "Shield") ? "wood" : "metal";
					game.equipment[item].cost[cost][1] = mod;
				}
			},
			onLoad: function () {
				this.start();
			},
			onComplete: function(){
				game.global.challengeActive = "";
				game.global.frugalDone = true;
				game.challenges.Frugal.abandon();
				message("You have completed the 'Frugal' challenge! You can once again find equipment upgrades in maps, and Megabooks now increase gather rates by an extra 10%!", "Notices");
			},
			fireAbandon: true,
			abandon: function () {
				this.start(true);
			},
			unlockString: "到达区域 100"
		},
		Life: {
			description: "探索一个通常充满亡灵生物的维度，但这个维度目前正被一种快速移动的病毒所干扰，这种病毒可以使亡灵生物复活。这个维度中所有敌人都有500%的额外攻击，1000%的额外生命值。攻击一个普通的亡灵敌人将使脆皮获得1层亡灵化，每层亡灵化将提高脆皮10%(叠加)的攻击和生命值。最高叠150层，且攻击一个复活敌人将移除5层的亡灵化。完成<b>区域110</b>将奖励你400%的你所获得的氦。这个挑战是可重复的！",
			completed: false,
			filter: function () {
				return (getHighestLevelCleared(true) >= 109)
			},
			heliumMultiplier: 4,
			heldHelium: 0,
			heliumThrough: 110,
			unlockString: "到达区域 110",
			stacks: 150,
			maxStacks: 150,
			fireAbandon: true,
			lowestStacks: 150,
			getHealthMult: function(forDisplay){
				var mult = (this.stacks / 10);
				if (forDisplay) return (prettify(mult * 100) + "%");
				return 1 + mult;
			},
			arrayHolder: [[]],
			start: function () {
				updateLivingStacks();
			},
			abandon: function () {
				if (document.getElementById('livingBuff')) document.getElementById('goodGuyName').removeChild(document.getElementById('livingBuff'));
			}
		},
		Mapocalypse: {
			description: "为了了解地图和世界之间的关系，去体验一个基于“电流”维度，但有轻微改动的维度。一切规则都与电流挑战相同，但是所有地图的难度额外增加300%清除<b>'监狱' (80)</b>将使世界复原。你<b>将会</b>获得电流挑战中的氦奖励。",
			completed: false,
			filter: function () {
				return (getHighestLevelCleared(true) >= 114);
			},
			fireAbandon: true,
			abandon: function () {
				for (var x = 0; x < game.global.mapsOwnedArray.length; x++){
					game.global.mapsOwnedArray[x].difficulty = parseFloat(game.global.mapsOwnedArray[x].difficulty) - this.difficultyIncrease;
				}
			},
			onComplete: function(){
				var reward = Math.floor(game.challenges.Electricity.heldHelium * 2);
				message("You have completed the Mapocalypse challenge! You have unlocked the 'Siphonology' Perk, and have been rewarded with " + prettify(reward) + " Helium.", "Notices");
				unlockPerk("Siphonology");
				game.challenges.Mapocalypse.abandon();
				game.challenges.Electricity.heldHelium = 0;
				game.global.challengeActive = "";
				addHelium(reward);
				game.challenges.Electricity.stacks = 0;
				updateElectricityStacks();
				refreshMaps();
			},
			unlocks: "Siphonology",
			unlockString: "到达区域 115",
			difficultyIncrease: 3
		},
		Coordinate: {
			description: "为了学习从自然中进化而来的协作模式，造访一个敌人会协作作战，但永不先攻的维度。带有本挑战完成<b>'愤怒维度' (20)</b>将使敌人失去协作效果。",
			completed: false,
			allowSquared: true,
			squaredDescription: "造访一个敌人会协作作战，但永不先攻的维度, 打败他们!",
			replaceSquareFreq: 3,
			replaceSquareThresh: 30,
			filter: function () {
				return (getHighestLevelCleared(true) >= 119);
			},
			onComplete: function(){
				game.global.challengeActive = "";
				unlockPerk("Coordinated");
				message("You have completed the 'Coordinate' challenge! The Bad Guys on this world no longer fight together, and have regained their speed. You have unlocked the 'Coordinated' perk!", "Notices");
			},
			unlocks: "Coordinated",
			unlockString: "到达区域 120"
		},
		Crushed: {
			description: "到一个大气中氦含量丰富的维度，但是敌人有50%的几率产生+400%伤害的暴击，除非你的防御超过最大生命值。清理 <b>仿生仙境 (Z125)</b> 将会给你额外的400%的氦，但不包括Z125。这个挑战是可重复的。",
			completed: false,
			filter: function () {
				return (getHighestLevelCleared(true) >= 124);
			},
			critsTaken: 0,
			fireAbandon: true,
			abandon: function () {
				document.getElementById("badCrit").innerHTML = "";
				document.getElementById("badCanCrit").style.display = "none";
			},
			onComplete: function(){
				var heliumAdded = (game.challenges.Crushed.heldHelium * 4);
				message("You have completed the Crushed challenge! You have been rewarded with " + prettify(heliumAdded) + " Helium.", "Notices");
				game.challenges.Crushed.heldHelium = 0;
				game.global.challengeActive = "";
				addHelium(heliumAdded);
				if (game.challenges.Crushed.critsTaken == 0) giveSingleAchieve("Thick Skinned");
				game.challenges.Crushed.abandon();
			},
			heldHelium: 0,
			heliumThrough: 124,
			unlockString: "到达区域 125"
		},
		Slow: {
			description: "传说中这个维度里居住着极其迅速的敌人，这里还有着一个强大而被遗忘的武器及护甲蓝图。在这个维度中所有敌人都先攻，但是带有本挑战清除<b>区域120</b> 将永久能够制造这些新装备。",
			completed: false,
			allowSquared: true,
			squaredDescription: "传说中这个维度里居住着极其迅速的敌人，你似乎想来这里证明些什么。这个维度中所有敌人都先攻，注意你的生命值！",
			filter: function () {
				return (getHighestLevelCleared(true) >= 129);
			},
			onComplete: function(){
				message("You have completed the Slow challenge! You have found the patterns for the Gambeson and the Arbalest!", "Notices");
				game.global.challengeActive = "";
				if (!game.global.slowDone){
					unlockEquipment("Arbalest");
					unlockEquipment("Gambeson");
				}
				game.global.slowDone = true;
			},
			unlockString: "到达区域 130"
		},
		Nom: {
			description: "传送到一个敌人喜欢吃脆皮的维度。每当一队脆皮死亡，敌人将会吃掉他们，增加25%(叠乘)的伤害，并恢复最大生命值5%的血量。富含甲烷的大气使你的脆皮每次攻击后血量都会减少最大生命值的5%。但是敌人由于体型过大，行动迟缓，无法先攻。清除<b>区域145</b>将奖励你350%的你所获得的氦。这个挑战是可重复的！",
			completed: false,
			allowSquared: true,
			squaredDescription: "传送到一个敌人觉得脆皮美味，喜欢吃脆皮的维度。每当一队脆皮死亡，敌人将会吃掉他们，并增加25%(叠乘)的伤害以及血量恢复最大生命值的5%。富含甲烷的大气使你的脆皮每次攻击后血量都会减少最大生命值的5%。但是敌人由于体型过大，行动迟缓，无法先攻。",
			heliumMultiplier: 3.5,
			filter: function () {
				return (getHighestLevelCleared(true) >= 144);
			},
			heldHelium: 0,
			heliumThrough: 145,
			unlockString: "到达区域 145"
		},
		Mapology: {
			description: "为了学习如何变得更足智多谋，传送至一个地图稀缺的维度。每清除一个世界区域你将会获得一个地图点数，并且每运行一次地图都会失去一个地图点数。带有这个挑战完成<b>区域100</b>将带你返回原来的维度。科学家IV的二倍锻造书奖励在本挑战中无效。",
			completed: false,
			filter: function () {
				return (getHighestLevelCleared(true) >= 149);
			},
			fireAbandon: true,
			allowSquared: true,
			squaredDescription: "为了学习如何变得更足智多谋，传送至一个地图稀缺的维度。每清除一个世界区域你将会获得一个地图点数，并且每运行一次地图都会失去一个地图点数。<b>当这一挑战激活时，来自科学家IV和黑锻炼专精无法使用。</b>",
			abandon: function (){
				document.getElementById("mapCreditsLeft").innerHTML = "";
			},
			onLoad: function () {
				updateMapCredits();
			},
			onComplete: function(){
				message("You have completed the Mapology challenge! You have unlocked the 'Resourceful' Perk! Cheaper stuff!", "Notices");
				game.global.challengeActive = "";
				unlockPerk("Resourceful");
				game.challenges.Mapology.abandon();
			},
			unlocks: "Resourceful",
			credits: 0,
			unlockString: "到达区域 150"
		},
		Toxicity: {
			description: "传送至一个富含氦，同时也有大量毒性敌人的维度。所有的敌人都有5倍攻击和2倍生命值。每次你攻击敌人，你的脆皮都会损失最大生命值5%的血量，而且使毒素释放到大气中，减少你脆皮0.3%(当前的)的繁殖速度，但也会增加所有资源获取0.15%，最多叠1500层。当你清除一个区域后效果重置。带有本挑战完成<b>区域165</b>将奖励你200%的你所获得的氦(不包括区域165及以上所获得)。这个挑战是可重复的！",
			completed: false,
			filter: function () {
				return (getHighestLevelCleared(true) >= 164);
			},
			highestStacks: 0,
			heldHelium: 0,
			heliumThrough: 165,
			heliumMultiplier: 2,
			stacks: 0,
			maxStacks: 1500, //Changing this breaks the feat spaghetti
			stackMult: 0.997,
			lootMult: 0.15,
			allowSquared: true,
			squaredDescription: "传送至一个富含氦，同时也有大量毒性敌人的维度。所有的敌人都有5倍攻击和2倍生命值。每次你攻击敌人，你的脆皮都会损失最大生命值5%的血量，而且使毒素释放到大气中，减少你脆皮0.3%(当前的)的繁殖速度，但也会增加所有资源获取0.15%，最多叠1500层。当你清除一个区域后效果重置。",
			unlockString: "到达区域 165"
		},
		Devastation: {
			description: "传送至一个严酷的维度，在这里脆皮会因为前一组人的失误而受到惩罚。如果你的队伍在任何时候被杀，其超额的伤害将会对下一个脆皮队伍产生750%的伤害效果。完成<b>爆炸之心(区域170)</b>将会返回正常的世界。",
			completed: false,
			filter: function () {
				return (getHighestLevelCleared(true) >= 169);
			},
			onComplete: function(){
				message("You have completed the Devastation challenge! Your world has been returned to normal, and you have unlocked the Overkill perk!", "Notices");
				game.global.challengeActive = "";
				unlockPerk("Overkill");
				addNewSetting('overkillColor');
				refreshMaps();
			},
			lastOverkill: -1,
			unlocks: "Overkill",
			unlockString: "到达区域 170"
		},
		Watch: {
			description: "传送至一个奇怪的维度，在这里既有好事也有坏事。在打通每个世界区域时，都会掉落任何可用的装备升级，同时所有未分配的脆皮都将平均分配给农民、伐木工以及矿工。但是，资源的生产以及从任何来源的掉落都会减半，所有敌人都会增加25%伤害。带有本挑战完成<b>区域180</b>将奖励你200%的你所获得的氦。",
			filter: function () {
				return (getHighestLevelCleared(true) >= 179);
			},
			allowSquared: true,
			squaredDescription: "传送至一个奇怪的维度，在这里既有好事也有坏事。在打通每个世界区域时，都会掉落任何可用的装备升级，同时所有未分配的脆皮都将平均分配给农民、伐木工以及矿工。但是，资源的生产以及从任何来源的掉落都会减半，所有敌人都会增加25%伤害。休息一下让脆皮自己解决问题吧，你知道你也想这样做。",
			heliumMultiplier: 2,
			heldHelium: 0,
			heliumThrough: 180,
			unlockString: "到达区域 180",
			enteredMap: false
		},
		Lead: {
			description: "传送至一个由时间决定难度的维度。在奇数区域将使各种来源的资源加倍，并给脆皮50%的额外攻击。开始一个偶数区域的时候将使敌人获得200层的<b>动量</b>效果。在世界中清除一个房间将会移除一层动量效果，每层效果使敌人伤害和生命值增加4%，穿刺增加0.1%。如果你的脆皮攻击但没有杀死敌人，每层动量效果将会使脆皮将会损失最大生命值0.03%的血量。带有本挑战完成<b>区域180</b>将奖励你300%的你所获得的氦。",
			filter: function () {
				return (getHighestLevelCleared(true) >= 179);
			},
			heliumMultiplier: 3,
			stacks: 0,
			heldHelium: 0,
			allowSquared: true,
			squaredDescription: "传送至一个由时间决定难度的维度。在奇数区域将使各种来源的资源加倍，并给脆皮50%的额外攻击。开始一个奇数区域的时候将使敌人获得200层的<b>动量</b>效果。在世界中清除一个房间将会移除一层动量效果，每层效果使敌人伤害和生命值增加4%，穿刺增加0.1%。如果你的脆皮攻击但没有杀死敌人，每层动量效果将会使脆皮将会损失最大生命值0.03%的血量。",
			heliumThrough: 180,
			unlockString: "到达区域 180",
			fireAbandon: true,
			abandon: function () {
				if (document.getElementById('determinedBuff')) document.getElementById('determinedBuff').style.display = "none";
			}
		},
		Corrupted: {
			get description(){ return "传送至一个敌人有3x攻击，并腐化猖獗的维度，腐化从60区域开始。在这个维度中腐化给予氦，但比正常世界少50%。在区域" + mutations.Corruption.start(true) + "前无序及虚空地图不会因腐化而变得更强，也不会因此有双倍奖励。带有本挑战完成<b>区域190</b>将奖励你200%的你所获得的氦，也会让你立刻回到原来的维度。"},
			filter: function () {
				return (getHighestLevelCleared(true) >= 189);
			},
			heliumMultiplier: 2,
			heldHelium: 0,
			heliumThrough: 190,
			hiredGenes: false,
			unlockString: "到达区域 190"
		},
		Domination: {
			description: "Travel to a dimension where the strongest Bad Guys gain strength from those weaker than them. Most Bad Guys have 90% less health and attack, but the final Bad Guy in every World Zone and Map has 2.5x more damage, 7.5x more health, and heals for 5% every time they attack your Trimps. But they also drop three times as much Helium! Clearing <b>Zone 215</b> will also reward you with an extra 100% of helium earned from any source up to that point, and will instantly teleport you back to your normal dimension!",
			filter: function () {
				return (getHighestLevelCleared(true) >= 214);
			},
			heliumMultiplier: 1,
			heldHelium: 0,
			heliumThrough: 215,
			unlockString: "reach Zone 215",
			fireAbandon: true,
			abandon: function(){
				var elem = document.getElementById('dominationDebuffContainer');
				if (elem) elem.style.display = 'none';
			}
		},
		Obliterated: {
			get squaredDescription() {
				var num = prettify(1e12);
				return "与你最好的判断相反，传送至一个对你非常不友好的维度。Liquimps将无法液化, 敌人有" + num + "x倍的攻击和生命，装备的的价格变为" + num + "倍。每10个区域，敌人的攻击和生命都会再增加10倍。"
			},
			filter: function () {
				return (getHighestLevelCleared(true) >= 424);
			},
			replaceSquareFreq: 1,
			replaceSquareThresh: 10,
			onlySquared: true,
			allowSquared: true,
			fireAbandon: true,
			unlockString: "到达区域 425",
			mustRestart: true,
			zoneScaling: 10,
			zoneScaleFreq: 10
		},
		Eradicated: {
			get squaredDescription() {
				var num = prettify(game.challenges.Eradicated.scaleModifier);
				return "If you thought Obliterated was not very friendly, wait until you see this dimension! Liquimps are unable to liquify, enemies have " + num + "x attack and health, and equipment is " + num + "x more expensive. Every 2 Zones, enemy attack and health will increase by another " + game.challenges.Eradicated.zoneScaling + "x. <b>However, you'll earn 1 extra Coordination per Zone you clear! Oh and Magma, Corruption, and Nature start at Z1.</b>"
			},
			filter: function () {
				return (game.global.totalSquaredReward >= 4500);
			},
			replaceSquareFreq: 1,
			replaceSquareThresh: 2,
			replaceSquareReward: 10,
			replaceSquareGrowth: 2,
			scaleModifier: 1e20,
			onlySquared: true,
			allowSquared: true,
			fireAbandon: true,
			unlockString: "reach 4500% Challenge<sup>2</sup> bonus",
			mustRestart: true,
			zoneScaling: 3,
			zoneScaleFreq: 2,
			start: function(){
				startTheMagma();
			}
		},
		//U2 Challenges
		Unlucky: {
			description: "Your Trimps will never get far in this harsh Universe without learning how to control their luck. Tweak your Portal to bring you to a an alternate reality where your Trimps' minimum damage will be drastically lower, but their high end damage will be considerably higher. Each time your Trimps attack, 5 alternate timelines will open up. If the first digit of your Trimps' minimum attack is even, the timeline where your Trimps did the most damage will become reality. If the first digit is odd, the timeline where your Trimps did the least amount of damage will instead become reality. Clearing the <b>Dimension of Rage (Zone 15)</b> will complete this Challenge!",
			squaredDescription: "Tweak your Portal to bring you to a an alternate reality where your Trimps' minimum damage will be drastically lower, but their high end damage will be considerably higher. Each time your Trimps attack, 5 alternate timelines will open up. If the first digit of your Trimps' minimum attack is even, the timeline where your Trimps did the most damage will become reality. If the first digit is odd, the timeline where your Trimps did the least amount of damage will instead become reality.",
			filter: function () {
				return (getHighestLevelCleared(true) >= 14);
			},
			completeAfterMap: "Dimension of Rage",
			onComplete: function(){
				game.global.challengeActive = "";
				game.challenges.Unlucky.completed = true;
				unlockPerk("Range");
				message("You have completed the <b>Unlucky Challenge!</b> You have unlocked a new perk, and your Trimps' damage has normalized.", "Notices");
			},
			allowU2: true,
			blockU1: true,
			allowSquared: true,
			unlocks: "Range",
			unlockString: "reach Zone 15",
			lastHitLucky: false
		},
		Downsize: {
			description: "Tweak the portal to bring you to an alternate reality, where Trimps are incredibly antisocial and refuse to share a house with any other Trimps. Each housing building will only provide 1 Trimp, but the morale boost and smaller society causes all Trimps to gather 5x as many resources per second. Clearing <b>Prismatic Palace (Zone 20)</b> will complete this Challenge!",
			squaredDescription: "Tweak the portal to bring you to an alternate reality, where Trimps are incredibly antisocial and refuse to share a house with any other Trimps. Each housing building will only provide 1 Trimp, but the morale boost and smaller society causes all Trimps to gather 5x as many resources per second.",
			completed: false,
			filter: function () {
				return (getHighestLevelCleared(true) >= 19);
			},
			completeAfterMap: "Prismatic Palace",
			onComplete: function (){
				var buildings = game.buildings;
				var hutCount = buildings.Hut.owned;
				if (buildings.House.owned == hutCount && buildings.Mansion.owned == hutCount && buildings.Hotel.owned == hutCount && buildings.Resort.owned == hutCount)
					giveSingleAchieve("Perfectly Balanced");
				game.global.challengeActive = "";
				game.challenges.Downsize.completed = true;
				unlockPerk("Carpentry");
				message("You have completed the <b>Downsize Challenge!</b> You have unlocked a new perk, and your Trimps are once again willing to share houses.", "Notices");
			},
			allowU2: true,
			blockU1: true,
			allowSquared: true,
			unlocks: "Carpentry",
			unlockString: "reach Zone 20"
		},
		Transmute: {
			description: "Tweak the portal to bring you to an alternate reality where Metal cannot drop or be gathered at all. At the end of each Zone, your Food, Wood, and Science are completely consumed and 75% of the net amount of consumed resources become Metal. Clearing <b>Zone 25</b> will complete this Challenge!",
			squaredDescription: "Tweak the portal to bring you to an alternate reality where Metal cannot drop or be gathered at all. At the end of each Zone, your Food, Wood, and Science are completely consumed and 75% of the net amount of consumed resources become Metal.",
			completed: false,
			filter: function () {
				return (getHighestLevelCleared(true) >= 24);
			},
			abandon: function () {
				game.worldUnlocks.Miner.fire();
				if (this.heldBooks >= 1){
					game.upgrades.Speedminer.locked = 0;
					if (this.heldBooks > 1){
						game.upgrades.Speedminer.allowed += this.heldBooks - 1;
					}
					unlockUpgrade("Speedminer");
				}
				if (this.holdMagma)
					unlockUpgrade("Magmamancers");
			},
			onComplete: function(){
				game.global.challengeActive = "";
				game.challenges.Transmute.abandon();
				unlockPerk("Artisanistry");
				game.challenges.Transmute.completed = true;
				message("You have completed the <b>Transmute Challenge!</b> You have unlocked a new perk, and Miners have returned to your game.", "Notices");
				var jobCount = 0;
				for (var job in game.jobs) jobCount += game.jobs[job].owned; //Dragimp adds 1
				if (jobCount - game.jobs.Dragimp.owned - game.jobs.Amalgamator.owned == 0 && game.stats.trimpsFired.value == 0) giveSingleAchieve("Resourceyphobe");
			},
			onNextWorld: function(){
				var resCount = game.resources.food.owned + game.resources.wood.owned + game.resources.science.owned;
				game.resources.food.owned = 0;
				game.resources.wood.owned = 0;
				game.resources.science.owned = 0;
				resCount *= 0.75;
				addResCheckMax("metal", resCount, false, false, false, true);
			},
			completeAfterZone: 25,
			allowU2: true,
			blockU1: true,
			allowSquared: true,
			fireAbandon: false,
			heldBooks: 0,
			holdMagma: false,
			unlocks: "Artisanistry",
			unlockString: "reach Zone 25"
		},
		Unbalance: {
			description: "Your scientists have discovered a new chaotic dimension! All enemies have 50% more attack, enemies in world have 100% more health, and enemies in maps have 200% more health. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of 'Unbalance'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your attack by 1%, but increases your Trimps' gathering speed by 1%. Unbalance can stack to 500. Clearing <b>Zone 35</b> will complete this Challenge!",
			squaredDescription: "Travel to a fun chaotic dimension! All enemies have 50% more attack, enemies in world have 100% more health, and enemies in maps have 200% more health. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of 'Unbalance'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your attack by 1%, but increases your Trimps' gathering speed by 1%.",
			completed: false,
			blockU1: true,
			allowU2: true,
			allowSquared: true,
			filter: function () {
				return (getHighestLevelCleared(true) >= 34);
			},
			balanceStacks: 0,
			addStack: function () {
				this.balanceStacks++;
				if (this.balanceStacks > 500) this.balanceStacks = 500;
				if (this.balanceStacks > this.highestStacks) this.highestStacks = this.balanceStacks;
			},
			removeStack: function () {
				this.balanceStacks--;
				if (this.balanceStacks < 0) this.balanceStacks = 0;
			},
			abandon: function () {
				this.balanceStacks = 0;
				updateBalanceStacks();
			},
			getAttackMult: function (formatText) {
				var num = Math.pow(0.99, this.balanceStacks);
				if (formatText) return Math.floor((1 - num) * 100) + "%";
				return num;
			},
			getGatherMult: function (formatText) {
				if (formatText) return this.balanceStacks + "%";
				return ((this.balanceStacks * 0.01) + 1);
			},
			onComplete: function(){
				if (this.balanceStacks >= 500) giveSingleAchieve("Upsized");
				message("You have completed the Unbalance challenge! You have unlocked the Equality Perk!", "Notices");
				game.challenges.Unbalance.abandon();
				game.global.challengeActive = "";
				unlockPerk("Equality");
			},
			highestStacks: 0,
			fireAbandon: true,
			unlockString: "reach Zone 35",
			completeAfterZone: 35,
			unlocks: "Equality"
		},
		Bublé: {
			description: "Tweak the portal to bring you to an alternate reality where Trimps really really don't like taking damage. Your Trimps start in this reality with an extra 100% Prismatic Shield, but as soon as they take any damage to health at all, they will refuse to fight again and the challenge will end. Clearing <b>Zone 40</b> without failing will complete this Challenge - granting an additional 300% of all Radon earned up to that point. Failing this Challenge will grant an additional 100% of all Radon earned up to the spot where you failed.",
			completed: false,
			allowU2: true,
			blockU1: true,
			heldHelium: 0,
			heliumThrough: 40,
			fireAbandon: true,
			abandon: function(){
				this.onFail();
			},
			filter: function () {
				return (getHighestLevelCleared(true) >= 39);
			},
			onFail: function(){
				var reward = game.challenges.Bublé.heldHelium;
				message("Oh no, you failed the Bublé challenge! You have been rewarded with " + prettify(reward) + " extra Radon, and you may try again.", "Notices");
				game.global.challengeActive = "";
				addHelium(reward);
			},
			onComplete: function(){
				if (game.global.canRespecPerks && !game.global.bonePortalThisRun && game.portal.Prismal.radLevel == 0) giveSingleAchieve("Unpoppable");
				var reward = game.challenges.Bublé.heldHelium;
				reward *= 3;
				message("You have completed the Bublé challenge! You're a hero among Trimps! You have been rewarded with " + prettify(reward) + " extra Radon, and you may repeat the challenge.", "Notices");
				game.global.challengeActive = "";
				addHelium(reward);			
			},
			unlockString: "reach Zone 40",
			completeAfterZone: 40
		},
		Duel: {
			description: "It's your Trimps vs the Bad Guys! Both teams start with 50 points, and both teams' Crit Chance is locked to the amount of points the OTHER team has. Getting a Critical Strike steals 1 point from the other team, winning a battle steals 2 points, and winning a battle in one hit steals 5 points. Any team below 20 points gains 10x health, any team below 10 points always attacks first, and any team above 50 points gains 3x damage. Clearing <b>Zone 45</b> will complete this Challenge!",
			squaredDescription: "It's your Trimps vs the Bad Guys! Both teams start with 50 points, and both teams' Crit Chance is locked to the amount of points the OTHER team has. Getting a Critical Strike steals 1 point from the other team, winning a battle steals 2 points, and winning a battle in one hit steals 5 points. Any team below 20 points gains 10x health, Enemies attack first when less than 10 points (<b>Trimps cannot become Fast on this Challenge in Challenge<sup>3</sup> mode!</b>), and any team above 50 points gains 3x damage.",
			completed: false,
			allowU2: true,
			blockU1: true,
			fireAbandon: true,
			trimpStacks: 50,
			enemyStacks: 50,
			lowestTrimpStacks: 50,
			healthMult: 10,
			allowSquared: true,
			abandon: function(){
				manageStacks(null, null, true, 'trimpDuelPoints', null, null, true);
				manageStacks(null, null, false, 'enemyDuelPoints', null, null, true);
			},
			drawStacks: function(){
				if (this.trimpStacks < this.lowestTrimpStacks) this.lowestTrimpStacks = this.trimpStacks;
				manageStacks('Duel Points', this.trimpStacks, true, 'trimpDuelPoints', 'icomoon icon-abacus', this.stackTooltip(true), false);
				manageStacks('Duel Points', this.enemyStacks, false, 'enemyDuelPoints', 'icomoon icon-abacus', this.stackTooltip(false), false);
			},
			stackTooltip: function(isTrimp){
				var name = (isTrimp) ? "Your Trimps" : "The Bad Guys";
				var stacks = (isTrimp) ? this.trimpStacks : this.enemyStacks;
				var text = name + " have " + stacks + " Duel Points.";
				if (stacks > 50) text += " " + name + " have 3x attack for being over 50 points.";
				else if (stacks < 10) text += " " + name + " always attack first and have 10x health for being below 10 points.";
				else if (stacks < 20) text += " " + name + " have 10x health for being below 20 points.";
				text += "<br/><br/>" + name + " have " + ((isTrimp) ? this.enemyStacks : this.trimpStacks) + "% Crit Chance based on " + ((isTrimp) ? "enemy" : "your") + " stacks.";
				return text;
			},
			onComplete: function(){
				if (this.lowestTrimpStacks >= 20) giveSingleAchieve("Pwnd");
				message("You have completed the Duel challenge! You have unlocked the Criticality Perk!", "Notices");
				game.challenges.Duel.abandon();
				game.global.challengeActive = "";
				unlockPerk("Criticality");
			},
			filter: function() {
				return (getHighestLevelCleared(true) >= 44);
			},
			unlocks: "Criticality",
			unlockString: "reach Zone 45",
			completeAfterZone: 45
		},
		Melt: {
			description: "Tweak the portal to bring you to an alternate reality, where there's plenty of risk and Radon. You will gain 10x loot (excluding Radon), 10x gathering, and 5x Trimp attack, but a stack of Melt will accumulate every second. Each stack of Melt reduces loot, gathering, and Trimp attack by 1% of the current amount. These stacks reset each time a Zone is cleared and cap at 500. Clearing <b>Melting Point (Zone 50) <i>or</i> Zone 55</b> will complete this Challenge - granting an additional 200% of all Radon collected through Z50. This Challenge is repeatable!",
			completed: false,
			abandon: function () {
				this.stacks = 0;
				updateDecayStacks();
			},
			decayValue: 0.99,
			fireAbandon: true,
			allowU2: true,
			blockU1: true,
			stacks: 0,
			heldHelium: 0,
			heliumThrough: 50,
			maxStacks: 500,
			largestStacks: 0,
			filter: function () {
				return (getHighestLevelCleared(true) >= 49);
			},
			onComplete: function(){
				if (this.largestStacks <= 150) giveSingleAchieve("Solid");
				var reward = game.challenges.Melt.heldHelium;
				reward *= 2;
				message("You have completed the Melt challenge! You have been rewarded with " + prettify(reward) + " Radon, and you may repeat the challenge.", "Notices");
				game.global.challengeActive = "";
				game.challenges.Melt.abandon();
				addHelium(reward);			
			},
			unlockString: "reach Zone 50",
			completeAfterMap: "Melting Point",
			completeAfterZone: 55
		},
		Trappapalooza: {
			description: "Travel to a dimension where Trimps refuse to breed in captivity, teaching you to stop breeding such weak Trimps. Trimps also seem to release an unfortunate burst of radiation when Trapped in this reality, instantly destroying 10% of your stored Food, Wood, Metal, and Science. So like, be careful of that. Clearing <b>Melting Point (Zone 50)</b> will complete this Challenge!",
			squaredDescription: "Travel to a dimension where Trimps refuse to breed in captivity, teaching you to stop breeding such weak Trimps. Trimps also release an unfortunate burst of radiation when Trapped in this reality, instantly destroying 10% of your stored Food, Wood, Metal, and Science. But you know to be careful of that.",
			completed: false,
			heldBooks: 0,
			fireAbandon: true,
			allowU2: true,
			blockU1: true,
			allowSquared: true,
			replaceSquareThresh: 50,
			replaceSquareGrowth: 2,
			replaceSquareReward: 3,
			unlocks: "Resilience",
			completeAfterMap: "Melting Point",
			trappedAt50: false,
			filter: function () {
				return (getHighestLevelCleared(true) >= 59);
			},
			start: function () {
				document.getElementById('trimpsBreedingTitle').innerHTML = "bored";
			},
			onLoad: function () {
				this.start();
			},
			abandon: function () {
				document.getElementById('trimpsBreedingTitle').innerHTML = "breeding";
				for (var x = 0; x < game.challenges.Trappapalooza.heldBooks; x++){
					unlockUpgrade("Potency");
				}
			},
			onComplete: function(){
				if (!this.trappedAt50) giveSingleAchieve("Coastapalooza");
				game.global.challengeActive = "";
				game.challenges.Trappapalooza.abandon();
				unlockPerk("Resilience");
				message("You have completed the 'Trappapalooza' challenge! Your Trimps now remember how to breed, and you have unlocked a new perk!", "Notices");
			},
			unlockString: "reach Zone 60"
		},
		Wither: {
			description: "Travel to an ultra scary alternate reality with horrific Bad Guys. Enemies heal for 25% of their maximum health before each attack. If an enemy ever heals itself back to 100% health, your army will fall to despair and instantly wither away. Every enemy slain by your Trimps in the World or World-level Maps grants 1 stack of Hardness to your Trimps (stacking up to 10,000 and increasing Health by 0.1% per stack) and 1 stack of Horror to all enemies (increasing Attack by 0.05% per stack). Whenever a group of Trimps is killed by Wither, Trimps lose half of their stacks of Hardness and block the enemy's ability to heal and Wither for an amount of cells equal to 10% of the Hardness stacks lost. Clearing <b>Zone 70</b> will complete this Challenge.",
			squaredDescription: "Travel to an ultra scary alternate reality with horrific Bad Guys. Enemies heal for 25% of their maximum health before each attack. If an enemy ever heals itself back to 100% health, your army will fall to despair and instantly wither away. Every enemy slain by your Trimps in the World or World-level Maps grants 1 stack of Hardness to your Trimps (stacking up to 10,000 and increasing Health by 0.1% per stack) and 1 stack of Horror to all enemies (increasing Attack by 0.05% per stack). Whenever a group of Trimps is killed by Wither, Trimps lose half of their stacks of Hardness and block the enemy's ability to heal and Wither for an amount of cells equal to 10% of the Hardness stacks lost.",
			completed: false,
			blockU1: true,
			allowU2: true,
			allowSquared: true,
			unlocks: "Tenacity",
			completeAfterZone: 70,
			unlockString: " reach Zone 70",
			fireAbandon: true,
			trimpStacks: 0,
			enemyStacks: 0,
			healImmunity: 0,
			onComplete: function(){
				if (this.trimpStacks >= 10000) giveSingleAchieve("Witherproof");
				message("You have completed the Wither challenge! Your world has been returned to normal, and you have unlocked the Tenacity perk!", "Notices");
				game.global.challengeActive = "";
				unlockPerk("Tenacity");
				game.challenges.Wither.abandon();
			},
			filter: function() {
				return (getHighestLevelCleared(true) >= 69);
			},
			addStacks: function(){
				if (!game.global.mapsActive || getCurrentMapObject().level >= game.global.world){
					if (this.trimpStacks < 10000){
						if (game.global.soldierHealth > 0){
							var increase = this.getTrimpHealthMult();
							this.trimpStacks++;
							increase = ((this.getTrimpHealthMult() / increase) - 1);
							addSoldierHealth(increase);
						}
						else{
							this.trimpStacks++;
						}
					}
					this.enemyStacks++;
				}
				if (this.healImmunity > 0) this.healImmunity--;
				this.drawStacks();
			},
			witherTrimps: function(){
				var lostStacks = Math.ceil(this.trimpStacks * 0.5);
				this.healImmunity = Math.floor(lostStacks * 0.1);
				this.trimpStacks -= lostStacks;
				this.drawStacks();
			},
			abandon: function(){
				var healthReduce = (1 / this.getTrimpHealthMult()) - 1;
				if (healthReduce < 0)
					addSoldierHealth(healthReduce);
				this.trimpStacks = 0;
				this.enemyStacks = 0;
				this.healImmunity = 0;
				manageStacks(null, null, true, 'witherHardenedStacks', null, null, true);
				manageStacks(null, null, false, 'witherHorrorStacks', null, null, true);
				manageStacks(null, null, true, 'witherImmunityStacks', null, null, true);
			},
			drawStacks: function(){
				manageStacks('Hardened', this.trimpStacks, true, 'witherHardenedStacks', 'glyphicon glyphicon-heart', this.stackTooltip(true), false);
				manageStacks('Horror', this.enemyStacks, false, 'witherHorrorStacks', 'glyphicon glyphicon-screenshot', this.stackTooltip(false), false);
				if (this.healImmunity > 0)
					manageStacks('Wither Immunity', this.healImmunity, true, 'witherImmunityStacks', 'icomoon icon-plus', 'Enemies cannot heal or inflict Wither while your Trimps have Wither Immunity.')
				else
					manageStacks(null, null, true, 'witherImmunityStacks', null, null, true);
			},
			onLoad: function() {
				this.drawStacks();
			},
			stackTooltip: function(isTrimp){
				var name = (isTrimp) ? "Your Trimps" : "The Bad Guys";
				var buffName = (isTrimp) ? "Hardened" : "Horror";
				var stat = (isTrimp) ? "Health" : "Attack";
				var stacks = (isTrimp) ? this.trimpStacks : this.enemyStacks;
				var mult = (isTrimp) ? this.getTrimpHealthMult() : this.getEnemyAttackMult();
				mult = prettify((mult - 1) * 100);
				var text = name + " have " + stacks + " stack" + needAnS(stacks) + " of " + buffName + ", increasing their " + stat + " by " + mult + "%.";
				return text;
			},
			getEnemyAttackMult: function(){
				return (1 + (0.0005 * this.enemyStacks)); 
			},
			getTrimpHealthMult: function(){
				return (1 + (0.001 * this.trimpStacks));
			}
		},
		Revenge: {
			description: "Travel to an exceptionally harsh dimension filled with vengeful creatures, including the Trimps. Enemies have 10x health on even zone numbers. If your army is killed at any point, any overkill damage will be applied 750% to the next group of Trimps to fight. Any time a group of Trimps is killed by this Overkill damage, your Trimps gain a stack of 'Revenge', increasing their Attack and Health by 20% (additive). However if your Trimps ever reach 20 stacks of Revenge, you will instantly fail the Challenge. Clearing <b>Zone 80</b> with less than 20 stacks of Revenge will complete this Challenge.",
			completed: false,
			blockU1: true,
			allowU2: true,
			filter: function () {
				return (getHighestLevelCleared(true) >= 79);
			},
			onComplete: function(){
				if (this.stacks == 19) giveSingleAchieve("Close Call");
				message("You have completed the Revenge challenge! Your world has been returned to normal, and you have unlocked the Overkill perk!", "Notices");
				game.global.challengeActive = "";
				unlockPerk("Overkill");
			},
			onFail: function(){
				message("You have failed the Revenge Challenge! Better luck next time!", "Notices");
				this.stacks = 0;
				game.global.challengeActive = "";
				this.abandon();
			},
			addStack: function(){
				this.stacks++;
				if (this.stacks >= 20) this.onFail();
				else this.drawStacks();
			},
			fireAbandon: true,
			abandon: function(){
				manageStacks(null, null, true, 'revengeChallengeStacks', null, null, true);
			},
			drawStacks: function(){
				manageStacks('Revenge', this.stacks, true, 'revengeChallengeStacks', 'icomoon icon-bomb', this.stackTooltip(true), false);
			},
			onLoad: function(){
				this.drawStacks();
			},
			stackTooltip: function(){
				var text = "Your Trimps have been killed by enemy overkill damage " + this.stacks + " time" + needAnS(this.stacks);
				text += "<br/><br/>Your Trimps have " + prettify(this.getMult()) + "x Attack and Health, but you will fail the challenge if they get " + (20 - this.stacks) + " more stack" + needAnS(20 - this.stacks) + "!";
				return text;
			},
			getMult: function(){
				return 1 + (this.stacks * .2);
			},
			stacks: 0,
			lastOverkill: -1,
			completeAfterZone: 80,
			unlocks: "Overkill",
			unlockString: "reach Zone 80"
		},
		Quest: {
			description: "Travel to an alternate reality with lots of extra Radon... if you're willing to complete some quests for it. Enemies in this reality gain 10% extra health each zone starting at Z6 (compounding). However, you'll also get a random Quest each Zone starting at 6. Completing this quest will grant a 2x Radon multiplier for the rest of the Zone (does not stack), and will increase your Trimps' attack by 10% for the rest of the Challenge (compounding). Check messages or the Zone info tooltip for quest progress. Clearing <b>Zone 85</b> will complete this Challenge - granting an extra 200% of all Radon earned, and returning Trimp Attack and Enemy Health to normal. This Challenge is repeatable!",
			squaredDescription: "Travel to an alternate reality where Trimps really love questing. Enemies in this reality gain 10% extra health each zone starting at Z6 (compounding). However, you'll also get a random Quest each Zone starting at 6. Completing this quest will grant a 2x Radon multiplier for the rest of the Zone (does not stack), and will increase your Trimps' attack by 10% for the rest of the Challenge (compounding). Check messages or the Zone info tooltip for quest prorgress.",
			completed: false,
			allowU2: true,
			blockU1: true,
			heliumThrough: 85,
			heldHelium: 0,
			completeAfterZone: 85,
			questId: -1,
			questComplete: false,
			questProgress: 0,
			resource: "",
			finishedQuests: 0,
			questsMade: 0,
			allowSquared: true,
			questDescriptions: ["Quintuple (x5) your {resource}", "Double your {resource}", "Complete 5 Maps at Zone level", "One-shot 5 world enemies", "Don't let your shield break before Cell 100", "Don't run a map before Cell 100", "Buy a Smithy"],
			filter: function(){
				return (getHighestLevelCleared(true) >= 84);
			},
			getAttackMult: function(){
				return Math.pow(1.1, this.finishedQuests);
			},
			getHealthMult: function(){
				if (game.global.world < 6) return 1;
				return Math.pow(1.1, game.global.world - 5);
			},
			checkQuest: function(){
				if (this.questId == -1) return;
				if (this.questComplete) return;
				if (this.questId <= 1){ //resource gain quests
					var owned = game.resources[this.resource].owned;
					if (owned >= this.questProgress) this.completeQuest();
				}
				else if (this.questId <= 3){ //Check if quest progress >= 5
					if (this.questProgress >= 5) this.completeQuest();
				}
				else if (this.questId <= 5){ //Complete 99th cell with 0 questProgress
					if (this.questProgress == 0) this.completeQuest();
				}
				else if (this.questId == 6){ //Only called when buying smithy, complete the quest
					this.completeQuest();
				}
			},
			onStartFight: function(){
				if (this.questId == -1) return;
				if (this.questComplete) return;
				if (this.questId <= 3) this.checkQuest();
				else if (this.questId <= 5 && game.global.lastClearedCell == 98) this.checkQuest();
				//Do nothing for 6, checkQuest called from smithy purchase
			},
			getQuestProgress: function(){
				if (this.questId == -1) return "";
				if (this.questComplete) return "Quest Complete!";
				if (this.questId <= 1){
					return prettify(game.resources[this.resource].owned) + " / " + prettify(this.questProgress) + " " + this.resource;
				}
				if (this.questId <= 3){
					return this.questProgress + " / 5";
				}
				if (this.questId <= 5){
					if (this.questProgress > 0) return "Failed!";
					return "Still Earnable!";
				}
				if (this.questId == 6){
					return "0 / 1";
				}
			},
			completeQuest: function(){			
				this.questComplete = true;
				this.finishedQuests++;
				if (this.finishedQuests == 80 && this.questsMade == 80) giveSingleAchieve("Level Up");
				message("You have completed your quest! You've completed " + this.finishedQuests + " / " + this.questsMade + " quests.", "Notices", "*question2", "questMessage questSuccess")
			},
			failQuest: function(){
				message("Oh no, you failed your quest! You've completed " + this.finishedQuests + " / " + this.questsMade + " quests.", "Notices", "*exclamation", "questMessage questFail")
			},
			getNextQuest: function(){
				if (this.questId != -1 && !this.questComplete) this.failQuest();
				var roll = Math.floor(seededRandom(game.global.u2WorldSeed++) * this.questDescriptions.length);
				this.questId = roll;
				this.questComplete = false;
				this.questsMade++;
				if (roll <= 1){
					var res = ["food", "wood", "metal", "gems", "science"];
					var resRoll = Math.floor(seededRandom(game.global.u2WorldSeed++) * res.length);
					this.resource = res[resRoll];
					var mult = (roll == 0) ? 5 : 2;
					this.questProgress = game.resources[res[resRoll]].owned * mult;
				}
				else{
					this.questProgress = 0;
					this.res = "";
				}
				message("You have a new quest! <b>" + this.getQuestDescription() + "</b>. Good luck!", "Notices", "*exclamation", "questMessage questNew")
			},
			getQuestDescription: function(addProgress){
				if (this.questId == -1) "No active quest";
				var desc = this.questDescriptions[this.questId];
				if (this.questId <= 1) desc = desc.replace("{resource}", this.resource);
				if (addProgress) desc += ". Progress: " + this.getQuestProgress();
				return desc;
			},
			onNextWorld: function(){
				if (game.global.world >= 6){
					this.getNextQuest();
				}
			},
			onComplete: function(){
				var reward = game.challenges.Quest.heldHelium;
				reward *= 2;
				message("You have completed the Quest challenge! You have been rewarded with " + prettify(reward) + " Radon, and you may repeat the challenge.", "Notices");
				game.global.challengeActive = "";
				addHelium(reward);
			},
			unlockString: "reach Zone 85",
		},
	},
	stats:{
		trimpsKilled: {
			title: "Dead Trimps",
			value: 0,
			valueTotal: 0
		},
		battlesWon: {
			title: "Battles Won",
			value: 0,
			valueTotal: 0
		},
		battlesLost: {
			title: "Battles Lost",
			value: 0,
			valueTotal: 0
		},
		gemsCollected: {
			title: "Gems Collected",
			value: 0,
			valueTotal: 0,
			display: function () {
				return ((this.value + this.valueTotal) > 0)
			}
		},
		mapsCleared: {
			title: "Maps Cleared",
			value: 0,
			valueTotal: 0
		},
		zonesCleared: {
			title: "Zones Cleared",
			value: 0,
			valueTotal: 0
		},
		trimpsFired: {
			title: "Trimps Fired",
			value: 0,
			valueTotal: 0,
			//This stat was added in 3.6 and the numbers will look bad for a few months.
			//Open maybe 10/21/16ish
			display: function () {return false;}
		},
		spentOnWorms: {
			title: "Wormholed Helium",
			display: function () {
				return ((this.value + this.valueTotal) > 0)
			},
			displayCurrent: function(){
				return (game.global.universe == 1);
			},
			value: 0,
			valueTotal: 0
		},
		goldenUpgrades: {
			title: "Golden Upgrades",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
			},
			value: 0,
			valueTotal: 0
		},
		heliumHour: {
			get title(){ 
				var abv = (game.global.universe == 2) ? "Rn" : "He";
				return abv + "/Hour this Run"
			},
			display: function () {
				var resOwned = (game.global.universe == 2) ? game.resources.radon.owned : game.resources.helium.owned;
				return (resOwned > 0);
			},
			value: function (useTemp) {
				var timeThisPortal = new Date().getTime() - game.global.portalTime;
				if (timeThisPortal < 1) return 0;
				timeThisPortal /= 3600000;
				var resToUse;
				if (game.global.universe == 2){
					resToUse = (useTemp) ? game.global.tempHighRadon : game.resources.radon.owned;
				}
				else{
					resToUse = (useTemp) ? game.global.tempHighHelium : game.resources.helium.owned;
				}
				return Math.floor(resToUse / timeThisPortal);
			}
		},
		bestHeliumHourThisRun: {
			get title(){ 
				var abv = (game.global.universe == 2) ? "Rn" : "He";
				return "Best " + abv + "/Hour this Run"
			},
			display: function () {
				return (this.storedValue > 0);
			},
			storedValue: 0,
			atZone: 0,
			value: function () {
				return prettify(game.stats.bestHeliumHourThisRun.storedValue) + ", Z:" + game.stats.bestHeliumHourThisRun.atZone;
			},
			evaluate: function () { //called from portalTime
				var heHr = game.stats.heliumHour.value();
				if (heHr > this.storedValue){
					this.storedValue = heHr;
					this.atZone = game.global.world;
				}
			},
			onPortal: function () {
				this.storedValue = 0;
				this.atZone = 0;
			},
			noFormat: true
		},
		totalHelium: {
			title: "Total Helium Earned",
			display: function () {
				return (game.global.totalHeliumEarned > 0);
			},
			valueTotal: function () {
				return game.global.totalHeliumEarned;
			}
		},
		bestHeliumHour: {
			title: "Best He/Hour all Runs",
			display: function () {
				return (this.valueTotal > 0);
			},
			valueTotal: 0
		},
		dailyBonusHelium: {
			title: "Daily Challenge Helium",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
			},
			displayCurrent: function(){
				return (game.global.universe == 1);
			},
			value: 0,
			valueTotal: 0
		},
		totalRadon: {
			title: "Total Radon Earned",
			display: function () {
				return (game.global.totalRadonEarned > 0);
			},
			valueTotal: function () {
				return game.global.totalRadonEarned;
			}
		},
		bestRadonHour: {
			title: "Best Rn/Hour all Runs",
			display: function () {
				return (this.valueTotal > 0);
			},
			valueTotal: 0
		},
		dailyBonusRadon: {
			title: "Daily Challenge Radon",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
			},
			displayCurrent: function(){
				return (game.global.universe == 2);
			},
			value: 0,
			valueTotal: 0
		},
		zonesLiquified: {
			title: "Zones Liquified",
			display: function() {
				return (this.value > 0 || this.valueTotal > 0)
			},
			value: 0,
			valueTotal: 0
		},
		highestVoidMap: {
			title: "Highest Void Map Clear",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
			},
			displayCurrent: function(){
				return (game.global.universe == 1);
			},
			value: 0,
			valueTotal: 0,
			noAdd: true,
			evaluate: function() { //called on completion of void map
				if (game.global.universe == 2){
					game.stats.highestVoidMap2.evaluate();
					return;
				}
				if (game.global.world > this.value) this.value = game.global.world;
				if (game.global.world > this.valueTotal) this.valueTotal = game.global.world;
			}
		},
		highestVoidMap2: {
			title: "Highest U2 Void Map",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
			},
			displayCurrent: function(){
				return (game.global.universe == 2);
			},
			value: 0,
			valueTotal: 0,
			noAdd: true,
			evaluate: function() { //called on completion of void map
				if (game.global.world > this.value) this.value = game.global.world;
				if (game.global.world > this.valueTotal) this.valueTotal = game.global.world;
			}
		},
		totalVoidMaps: {
			title: "Total Void Maps Cleared",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
			},
			value: 0,
			valueTotal: 0,
		},
		totalHeirlooms: { //added from createHeirloom to value
			title: "Heirlooms Found",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
			},
			value: 0,
			valueTotal: 0
		},
		coresFound: {
			title: "Cores Found",
			display: function (){
				return (this.value > 0 || this.valueTotal > 0);
			},
			displayCurrent: function(){
				return (game.global.universe == 1);
			},
			value: 0,
			valueTotal: 0
		},
		cellsOverkilled: {
			title: "World Cells Overkilled",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0);
			},
			displayCurrent: function(){
				return (game.global.universe == 1);
			},
			value: 0,
			valueTotal: 0
		},
		trimpsGenerated: {
			title: "Trimps from Generator",
			display: function() {
				return (this.value > 0 || this.valueTotal > 0);
			},
			displayCurrent: function(){
				return (game.global.universe == 1);
			},
			value: 0,
			valueTotal: 0
		},
		decayedNurseries: {
			title: "Burned Nurseries",
			display: function() {
				return (this.value > 0 || this.valueTotal > 0);
			},
			displayCurrent: function(){
				return (game.global.universe == 1);
			},
			value: 0,
			valueTotal: 0
		},
		bestTokens: {
			get title () {
				if (game.global.statsMode == "current") return "Tokens This Run"
				return "Most Tokens";
			},
			display: function () {
				return (this.value > 0 || this.valueTotal > 0)
			},
			displayCurrent: function(){
				return (game.global.universe == 1);
			},
			value: 0,
			valueTotal: 0,
			noAdd: true,
			keepHighest: true
		},
		amalgamators: {
			title: "Amalgamators Befriended",
			display: function () {
				return (this.value > 0 || this.valueTotal > 0)
			},
			displayCurrent: function(){
				return (game.global.universe == 1);
			},
			value: 0,
			valueTotal: 0
		},
		bestFluffyExp: {
			get title () {
				 if (game.global.statsMode == "current") return "Fluffy Exp This Run"
				 return "Best Fluffy Exp"
			},
			display: function () {
				return (this.value > 0 || this.valueTotal > 0)
			},
			displayCurrent: function(){
				return (game.global.universe == 1);
			},
			value: 0,
			valueTotal: 0,
			noAdd: true,
			keepHighest: true
		},
		bestFluffyExp2: {
			get title () {
				 if (game.global.statsMode == "current") return "Scruffy Exp This Run"
				 return "Best U2 Scruffy Exp"
			},
			display: function () {
				return (this.value > 0 || this.valueTotal > 0)
			},
			displayCurrent: function(){
				return (game.global.universe == 2);
			},
			value: 0,
			valueTotal: 0,
			noAdd: true,
			keepHighest: true
		},
		fluffyExpHour: {
			get title() { 
				return Fluffy.getName() + " Exp/Hr this Run"
			},
			display: function () {
				return (Fluffy.getBestExpStat().value > 0);
			},
			value: function () {
				var timeThisPortal = new Date().getTime() - game.global.portalTime;
				if (timeThisPortal < 1) return 0;
				timeThisPortal /= 3600000;
				return Math.floor(Fluffy.getBestExpStat().value / timeThisPortal);
			}
		},
		bestFluffyExpHourThisRun: {
			get title(){
				return "Best " + Fluffy.getName() + " Exp/Hr this Run"
			},
			display: function () {
				return (this.storedValue > 0);
			},
			storedValue: 0,
			atZone: 0,
			value: function () {
				return prettify(game.stats.bestFluffyExpHourThisRun.storedValue) + ", Z:" + game.stats.bestFluffyExpHourThisRun.atZone;
			},
			evaluate: function () { //called from portalTime
				var xpHr = game.stats.fluffyExpHour.value();
				if (xpHr > this.storedValue){
					this.storedValue = xpHr;
					this.atZone = game.global.world;
				}
			},
			onPortal: function () {
				this.storedValue = 0;
				this.atZone = 0;
			},
			noFormat: true
		},
		bestFluffyExpHour: {
			title: "Best Fluffy Exp/Hr",
			display: function () {
				return (this.valueTotal > 0);
			},
			valueTotal: 0
		},
		bestFluffyExpHour2: {
			title: "Best Scruffy Exp/Hr",
			display: function () {
				return (this.valueTotal > 0);
			},
			valueTotal: 0
		},
		totalPortals: {
			title: "Total Portals Used",
			displayCurrent: function(){
				return game.global.universe == 1;
			},
			display: function () {
				return (game.global.totalPortals > 0);
			},
			valueTotal: function () {
				return game.global.totalPortals;
			}
		},
		totalRadPortals: {
			title: "Total Radon Portals",
			displayCurrent: function(){
				return game.global.universe == 2;
			},
			display: function () {
				return (game.global.totalRadPortals > 0);
			},
			valueTotal: function () {
				return game.global.totalRadPortals;
			}
		},
		planetsBroken: {
			title: "Planets Broken",
			display: function () {
				return (this.valueTotal > 0);
			},
			valueTotal: 0
		},
		highestLevel: {
			title: "Highest Zone",
			valueTotal: function () {
				return game.global.highestLevelCleared + 1;
			}
		},
		highestRadLevel: {
			title: "Highest Zone U2",
			valueTotal: function () {
				return game.global.highestRadonLevelCleared + 1;
			},
			display: function(){
				return (game.global.highestRadonLevelCleared > 0);
			}
		},
		tdKills: {
			title: "Trap/Tower Kills",
			value: 0,
			valueTotal: 0,
			display: function(){
				return (playerSpire.initialized);
			}
		}
	},
	generatorUpgrades: {
		Efficiency: {
			base: 5e8,
			baseCost: 8,
			upgrades: 0,
			modifier: 1,
			tickAtFuel: function(fuel){
				return Math.floor(Math.sqrt(fuel) * ((this.base * 0.1 * this.upgrades) + this.base));
			},
			cost: function(){
				return this.baseCost + (8 * this.upgrades);
			},
			description: function(){
				var burnRate = getFuelBurnRate();
				return "你的维度发生器现在会每个周期产生 " + prettify(scaleNumberForBonusHousing(this.tickAtFuel(burnRate))) + " 最大脆皮数并消耗 " + burnRate + " 燃料 (燃料消耗量)。 购买这个升级会提高维度发生器10%的效率（线性）";
			}
		},
		Capacity: {
			base: 3,
			baseCost: 32,
			upgrades: 0,
			modifier: 3,
			baseIncrease: 0.4,
			cost: function(){
				return this.baseCost + (32 * this.upgrades);
			},
			nextModifier: function(){
				return this.baseIncrease + this.modifier;
			},
			description: function(){
				return "你的维度发生器现在可以储存最多 " + prettify(this.modifier) + "点燃料。每次升级会增加 " + prettify(this.baseIncrease) + "点燃料最大库存. 你储存的燃料越多，你一次生产的最大人口越多！";
			}
		},
		Supply: {
			base: 0.2,
			baseCost: 64,
			baseIncrease: 0.02,
			upgrades: 0,
			modifier: 0.2,
			cost: function(){
				return this.baseCost + (64 * this.upgrades);
			},
			nextModifier: function(){
				return this.baseIncrease + this.modifier;
			},
			description: function(){
				var currentAmt = this.modifier;
				var maxZone = ((currentAmt - 0.2) / 0.01) + mutations.Magma.start();
				return "从区域 " + mutations.Magma.start() + "开始，每个岩浆单元格掉落0.2燃料, 之后每个区域可以多掉落0.01燃料. 您的维度发生器目前每个单元格最多能获得" + prettify(this.modifier) + "点燃料, 这意味着在区域 Z" + prettify(maxZone) + "后每单元格掉落不再增加。 购买这个升级会增加每个单元格的燃料掉落上限<b>0.02</b>，达到最大掉落的区域+<b>2</b>。";
			}
		},
		Overclocker: {
			base: 0.5,
			baseCost: 512,
			baseIncrease: 0.01,
			upgrades: 0,
			modifier: 0.5,
			cost: function () {
				return this.baseCost + (32 * this.upgrades);
			},
			nextModifier: function () {
				if (this.upgrades == 0) return this.modifier;
				return this.modifier * (1 - this.baseIncrease);
			},
			description: function () {
				var requires = "<p class='" + ((game.permanentGeneratorUpgrades.Hybridization.owned && game.permanentGeneratorUpgrades.Storage.owned) ? "green" : "red") + "'>需要先解锁混合与存储。</p>";
				var text = requires + "<p>超频的第一次升级会解锁解锁维度发生器的超频功能，从而减少燃料浪费，只要你找到的燃料多于可存储的燃料。超频会消耗超出部分的燃料，并产生50%的正常产量的脆皮空间。</p><p>每次升级会降低1％的超频产量惩罚（指数）。</p>";
				if (this.upgrades > 0)
					text += "<p>你现在的超频效率是 " + ((1 - this.modifier) * 100).toFixed(2) + "%。下一等级, 你的超频效率会提高到 " + ((1 - (this.modifier * (1 - this.baseIncrease))) * 100).toFixed(2) + "%。</p>";
				return text;
			}
		}
	},
	permanentGeneratorUpgrades: {
		Hybridization: {
			description: "这个升级解锁将您的维度发生器的混合模式。当燃料低于最大值时，混合模式将自动切换到获取燃料模式，当燃油充满时自动切换到获取岩浆岩模式。",
			cost: 300,
			owned: false
		},
		Storage: {
			description: "解锁额外的燃料库存。 这个存储的大小等于你的普通燃料最大库存，原始最大库存存满后才会存入这个额外库存。这种额外储存的燃油不会增加维度发生器的每周期的脆皮上限产量，但是可以起到很好的填充作用，有效防止燃料的浪费。混合模式将尝试填充一半的额外存储空间。",
			cost: 600,
			owned: false
		},
		Shielding: {
			description: "每次通过传送门以后的岩浆岩损失减少10%（从30%降低到20%）",
			cost: 1050,
			owned: false
		},
		Slowburn: {
			description: "将每轮的燃料消耗降低0.1（从0.5降低到0.4）",
			cost: 1875,
			owned: false
		},
		Supervision: {
			description: "<p>为您的发生器获得3个自动化/微管理工具！</p><ul><li>通过单击时钟获得暂停维度生成器的功能。</li><li>获取一个甜蜜按钮来配置特定区域以切换发生器状态。 您还可以在“设置”菜单中按Ctrl +单击“发生器启动”设置以打开相同的界面。</li><li>在您的发生器窗口添加滑块，可以降低最大燃油容量并获得对超频者的更大控制。 将容量降低到低于存储的燃料量不会浪费任何燃料，但是第一次触发超频时，所有额外的燃料都将被消耗掉。</li></ul>",
			cost: 2000,
			owned: false,
			onPurchase: function() {
				var elem = document.getElementById('generatorWindow');
				if (elem != null)
					elem.innerHTML = getGeneratorHtml();
				updateGeneratorInfo();
			}
		},
		Simulacrum: {
			description: "现在，所有新生成的维度（最大脆皮数量）都会附带相同数量的脆皮。 慢慢生产脆皮来填充新增加上限的日子已经过去了！",
			cost: 2500,
			owned: false
		}
	},
	//Total 4448% after 4.6
	tierValues: [0, 0.3, 1, 2.5, 5, 10, 20, 40, 80, 160, 250, 400, 750],
	//rip colorsList, 11/28/15 - 11/28/17. He served us well until it became obvious that CSS was better.
	//colorsList: ["white", "#155515", "#151565", "#551555", "#954515", "#651515", "#951545", "#35a5a5", "#d58565", "#d53535"],
	achievements: {
		zones: {
			finished: 0,
			title: "Zone Progress",
			description: function (number) {
				return "完成区域 " + this.breakpoints[number];
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return game.global.highestLevelCleared + " / " + this.breakpoints[this.finished];
				return "最高是 " + game.global.highestLevelCleared;
			},
			evaluate: function () { return game.global.highestLevelCleared},
			breakpoints: [2, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 350, 400, 450, 500],
			tiers: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8],
            names: ["This is Easy", "Blimp Slayer", "Groundbreaker", "The Beginning", "Determined", "Professor", "Trimp Aficionado", "Slayer of Planets", "Motivated", "Electric", "Stronk", "Endurance", "Unwavering", "Coordinated", "Resolved", "Steadfast", "Grit", "Perseverance", "Persistence", "Tenacity", "The Instigator", "The Destroyer", "The Eradicator", "The Exterminator", "Heat Maker", "Heat Hater", "Heat Breaker", "Heat Slayer", "Heat Expert", "Heat Bender", "Volcanic", "Magma Master", "Acre of Nature", "Aspirer", "Insane", "Spire Master"],
			icon: "icomoon icon-compass2",
			newStuff: []
		},
		zones2: {
			finished: 0,
			title: "Zone Progress: U2",
			description: function (number) {
				return "Complete Zone " + this.breakpoints[number] + " in Universe 2";
			},
			display: function () {
				return (this.finished > 0 || game.global.universe == 2);
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return game.global.highestRadonLevelCleared + " / " + this.breakpoints[this.finished];
				return "Highest is " + game.global.highestRadonLevelCleared;
			},
			evaluate: function() {return game.global.highestRadonLevelCleared;},
			breakpoints: [2, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
			tiers: [9, 9, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11],
			names: ["This is Harder", "Second Coming", "Blimp Destroyer", "Improbable Again", "Unstoppable", "Progresser", "Fifty Fifty", "Actually Unbroken", "Lucky 7D", "Apt", "The Unshocked", "Universalist"],
			icon: "icomoon icon-navigation",
			newStuff: []
		},
		damage: {
			finished: 0,
			title: "Trimp Damage",
			description: function (number) {
				return "达到 " + prettify(this.breakpoints[number]) + " 显示伤害";
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(this.highest) + " / " + prettify(this.breakpoints[this.finished]);
				return "最高的是 " + prettify(this.highest);
			},
			highest: 0,
			breakpoints: [100, 100000, 1e+11, 1e+17, 1e+23, 1e+29, 1e+35, 1e+41, 1e+47, 1e+53, 1e+60, 1e+67],
			tiers: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
			names: ["Lead Trimps", "Silver Trimps", "Golden Trimps", "Copper Trimps", "Platinum Trimps", "Iron Trimps", "Steel Trimps", "Obsidian Trimps", "Cobalt Trimps", "Topaz Trimps", "Diamond Trimps", "Transcendental Trimps"],
			icon: "icomoon icon-bomb",
			newStuff: []
		},
		trimps: {
			finished: 0,
			highest: 0,
			title: "Trimps Owned",
			description: function (number) {
				return "累计拥有  " + prettify(this.breakpoints[number]) + " 脆皮";
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(Math.floor(this.highest)) + " / " + prettify(this.breakpoints[this.finished]);
				return "最高是 " + prettify(Math.floor(this.highest));
			},
			breakpoints: [50, 150, 300, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000],
			tiers: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
			names: ["Too Many Trimps", "Overcrowding", "This Is Trimp", "It Takes a Tribe", "It Takes a Town", "It Takes a City", "A Milli Trimpi", "Trimpsponential Growth", "MMMEGATRIMPS", "It Takes a Nation", "It Takes a Planet", "It Takes a Universe"],
			icon: "icomoon icon-group",
			newStuff: []
		},
		housing: {
			finished: 0,
			title: "Real Estate",
			description: function (number) {
				if (number == 9) return "使用维度生成器";
				return "建造你的第一个  " + cnItem(this.breakpoints[number]);
			},
//			breakpoints: ["窝棚", "房子", "大厦", "旅馆", "娱乐场", "出入口", "虫洞", "集电极", "经线站", "发电机"],
            breakpoints: ["Hut", "House", "Mansion", "Hotel", "Resort", "Gateway", "Wormhole", "Collector", "Warpstation", "Generator"],
			tiers: [1, 1, 1, 1, 2, 2, 2, 2, 3, 5],
			names: ["Tiny Homes", "Residential Development", "Taste for Luxury", "Fancy", "The Skyline", "Dimensional Drift", "Too Cool For Helium", "Space From Stars", "To Infinity and Beyond", "Mass Generation"],
			icon: "icomoon icon-building-o",
			newStuff: []
		},
		portals: {
			finished: 0,
			title: "Total Portals",
			description: function (number) {
				var s = (number > 0) ? "" : "";
				return "使用传送门 " + prettify(this.breakpoints[number]) + " 次" + s;
			},
			display: function () {
				return (game.global.totalPortals > 0);
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return this.evaluate() + " / " + this.breakpoints[this.finished];
				return this.evaluate() + " total";
			},
			evaluate: function () { return game.global.totalPortals},
			breakpoints: [1, 3, 10, 20, 50, 100, 200, 500],
			tiers: [1, 2, 2, 2, 3, 3, 4, 4],
			names: ["A Trimp Through Time", "When The Wild Things Are", "A Time Like No Other", "Venti Timeachino", "Time of Your Life", "Centennial Trimper", "Amnesia", "Dedicated Traveller"],
			icon: "icomoon icon-history",
			newStuff: []
		},
		totalZones: {
			finished: 0,
			title: "Total Zone Clears",
			description: function (number) {
				return "清理了  " + prettify(this.breakpoints[number]) + " 总区域";
			},
			evaluate: function () {
				return game.stats.zonesCleared.value + game.stats.zonesCleared.valueTotal;
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return this.evaluate() + " / " + this.breakpoints[this.finished];
				return prettify(this.evaluate()) + " 总共";
			},
			breakpoints: [30, 70, 130, 200, 400, 777, 1000, 1500, 10000, 50000],//total Zones according to stats
			tiers: [2, 2, 3, 3, 3, 4, 4, 5, 7, 7],
			names: ["Pathfinder", "Bushwhacker", "Pioneer", "Seeker", "Adventurer", "Lucky Resolve", "GigaClearer", "Globetrotter", "Vanquisher", "Conquistador"],
			icon: "icomoon icon-globe3",
			newStuff: []
		},
		totalMaps: {
			finished: 0,
			title: "Total Map Clears",
			description: function (number) {
				return "总共清理了  " + prettify(this.breakpoints[number]) + " 地图";
			},
			display: function () {
				return (this.evaluate() > 0);
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(this.evaluate()) + " / " + prettify(this.breakpoints[this.finished]);
				return prettify(this.evaluate()) + " 总共";
			},
			evaluate: function () {
				return game.stats.mapsCleared.value + game.stats.mapsCleared.valueTotal;
			},
			breakpoints: [50, 100, 2000, 5000, 10000, 20000, 50000, 100000],//total maps according to stats
			tiers: [1, 2, 2, 3, 3, 4, 4, 5],
			names: ["Map Maker", "Map Runner", "Map Destroyer", "Map Annihilator", "Map Slaughterer", "Map Commander", "Maptain", "Cartographer"],
			icon: "icomoon icon-map4",
			newStuff: []
		},
		totalHelium: {
			finished: 0,
			title: "Helium Collection",
			description: function (number) {
				return "Gather " + prettify(this.breakpoints[number]) + " total Helium";
			},
			progress: function (){
				if (this.breakpoints.length > this.finished) return prettify(Math.floor(this.evaluate() * 10000) / 10000) + " / " + prettify(this.breakpoints[this.finished]);
				return prettify(this.evaluate()) + " total";
			},
			evaluate: function () {
				return game.global.totalHeliumEarned;
			},
			display: function () {
				return (game.global.totalHeliumEarned > 0);
			},
			breakpoints: [100, 10e2, 10e3, 10e4, 10e5, 10e6, 10e7, 10e8, 10e10, 10e11, 10e13, 10e15],
			tiers: [1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 8, 8],
			names: ["Cool", "Crisp", "Brisk", "Chilly", "Frosty", "Frigid", "Frozen", "Gelid", "Glacial", "Freaking Cold", "Arctic", "Absolute Zero"],
			icon: "glyphicon glyphicon-oil",
			newStuff: []
		},
		totalRadon: {
			finished: 0,
			title: "Radon Collection",
			description: function (number) {
				return "Gather " + prettify(this.breakpoints[number]) + " total Radon";
			},
			progress: function (){
				if (this.breakpoints.length > this.finished) return prettify(Math.floor(this.evaluate() * 10000) / 10000) + " / " + prettify(this.breakpoints[this.finished]);
				return prettify(this.evaluate()) + " total";
			},
			evaluate: function () {
				return game.global.totalRadonEarned;
			},
			display: function () {
				return (game.global.totalRadonEarned > 0 || game.global.universe == 2);
			},
			breakpoints: [100, 1e4, 5e5, 1e7, 1e9, 1e11, 1e13],
			tiers: [9, 9, 10, 10, 10, 11, 12],
			names: ["Radon Runner", "The Irradiated", "Radonlicious", "Radon Quixote", "Radon Racer", "Raging Radon", "Radon Wrangler"],
			icon: "icomoon icon-battery",
			newStuff: []
		},
		heliumHour: {
			finished: 0,
			title: "Helium Per Hour",
			description: function (number) {
				return "达到 " + prettify(this.breakpoints[number]) + " 氦每小时";
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(Math.floor(this.evaluate() * 10000) / 10000) + " / " + prettify(this.breakpoints[this.finished]);
				return "Currently at " + prettify(this.evaluate());
			},
			evaluate: function () {
				return game.stats.heliumHour.value();
			},
			display: function () {
				return (game.global.totalHeliumEarned > 0);
			},
			breakpoints: [10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e9, 1e11, 1e13, 1e15, 5e17],
			tiers: [2, 3, 3, 4, 4, 5, 6, 7, 7, 8, 8, 9],
			names: ["Coldlector", "Centelium", "Frosty Tanker", "Blimp Snatcher", "Squeaky Dasher", "Quick N Cool", "Hour Bender", "Acquired Frost", "Vacuum", "Levitator", "Soarer", "Cool Runnings"],
			icon: "icomoon icon-cloudy2",
			newStuff: []
		},
		totalHeirlooms: {
			finished: 0,
			title: "Heirloom Collection",
			description: function (number) {
				var number = this.breakpoints[number];
				var s = (number > 1) ? "" : "";
				return "收集了 " + prettify(number) + " 传家宝" + s;
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return this.evaluate() + " / " + this.breakpoints[this.finished];
				return prettify(this.evaluate()) + " 总计";
			},
			evaluate: function () {
				return game.stats.totalHeirlooms.value + game.stats.totalHeirlooms.valueTotal;
			},
			display: function () {
				return (game.global.totalPortals >= 5);
			},
			breakpoints: [1, 10, 40, 100, 500, 1111, 2000, 5000, 10000],
			tiers: [2, 2, 3, 3, 4, 5, 6, 7, 8],
			names: ["Finder", "Gatherer", "Accumulator", "Fancier", "Aficionado", "Devotee", "Connoisseur", "Expert", "Curator"],
			icon: "icomoon icon-archive",
			newStuff: []
		},
		totalGems: {
			finished: 0,
			title: "Gem Collection",
			description: function (number) {
				var number = this.breakpoints[number];
				var s = (number > 1) ? "" : "";
				return "收集  " + prettify(number) + " 宝石" + s;
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(this.evaluate()) + " / " + prettify(this.breakpoints[this.finished]);
				return prettify(this.evaluate()) + " 总共";
			},
			evaluate: function () {
				return game.stats.gemsCollected.value + game.stats.gemsCollected.valueTotal;
			},
			breakpoints: [1, 1e+9, 1e+21, 1e+30, 1e+39, 1e+48],//total gems according to statistics
			tiers: [1, 2, 3, 4, 5, 6],
            names: ["What's This For?", "Collector of Shinies", "Dragimp Lover", "Expert of Shinies", "Jeweller", "Gemaster"],
			icon: "icomoon icon-diamond",
			newStuff: []
		},
		dailyHelium: {
			finished: 0,
			title: "Daily Bonus",
			description: function (number) {
				var number = this.breakpoints[number];
				return "获取 " + prettify(number) + " 氦气从每日挑战";
			},
			evaluate: function () {
				return game.stats.dailyBonusHelium.value + game.stats.dailyBonusHelium.valueTotal;
			},
			progress: function () {
				if (this.breakpoints.length > this.finished) return prettify(this.evaluate()) + " / " + prettify(this.breakpoints[this.finished]);
				return prettify(this.evaluate()) + " total";
			},
			breakpoints: [5e5, 1e6, 5e6, 2.5e7, 2e9, 1e12, 1e15, 1e21],
			display: function () {
				return (game.global.highestLevelCleared >= 99);
			},
			tiers: [3, 4, 5, 6, 7, 8, 8, 9],
			names: ["Daytermined", "Daydicated", "Daystiny", "Daylighted", "Daystroyer", "Daylusional", "Dayrailed", "Daypocalyptic"],
			icon: "icomoon icon-sun",
			newStuff: []
		},
		humaneRun: {
			finished: 0,
			title: "Humane Run",
			description: function (number){
				var number = this.breakpoints[number];
				return "<span style='font-size: .8em'>关爱区域" + number + " 每个区域失去不超过一个战士。</span>";
			},
			evaluate: function () {
				if (!this.earnable || game.stats.battlesLost.value > this.lastZone + 1) return 0;
				return game.global.world;
			},
			progress: function () {
				if (!this.earnable && this.lastZone == -1) return "您需要传送门才能符合条件";
				if (!this.earnable) return "你失去了不止一次区域" + this.lastZone;
				if (game.stats.battlesLost.value > this.lastZone + 1) return "你失去了太多战士!";
				if (game.stats.battlesLost.value == this.lastZone + 1) return "你在该区域已经失败了一次，要小心!";
				return "Still Earnable!";
			},
			earnable: true,
			lastZone: 0,
			breakpoints: [5, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 600],
			tiers: [1, 4, 5, 6, 7, 7, 7, 7, 8, 8, 8, 9],
			names: ["Sitter", "Watchdog", "Nanny", "Caretaker", "Supervisor", "Advocate", "Guardian", "Coddler", "Savior", "Defender", "Trimp Lover", "Righteous"],
			icon: "glyphicon glyphicon-eye-open",
			newStuff: []
		},
		mapless: {
			finished: 0,
			title: "Mapless Drifter",
			description: function (number){
				var number = this.breakpoints[number];
				return "<span style='font-size: .8em'>Reach U2 Z" + number + " without ever entering a Map.</span>";
			},
			evaluate: function () {
				if (!this.earnable || this.universe == 1) return 0;
				return game.global.world;
			},
			progress: function () {
				if (this.universe == 1) return "You must be in Universe 2!"
				if (!this.earnable && this.lastZone == -1) return "You need to portal to become eligible";
				if (!this.earnable) return "You ran a Map on Z" + this.lastZone;
				return "Still Earnable!";
			},
			display: function(){
				return (game.global.highestRadonLevelCleared > 1 || game.global.universe == 2);
			},
			earnable: true,
			lastZone: 0,
			breakpoints: [20, 30, 40, 50, 60, 70, 80, 90, 100],
			tiers: [10, 10, 11, 11, 11, 11, 11, 12, 12],
			names: ["Map Misser", "Map Lacker", "Mapophobia", "GPS", "Undisoriented", "Need No Map", "The Efficient", "Bulldozer", "Worldly"],
			icon: "icomoon icon-map-signs",
			newStuff: []
		},
		shielded: {
			finished: 0,
			title: "Shielded",
			description: function (number){
				var number1 = this.breakpoints[number];
				var number2 = this.breakpoints2[number];
				return "<span style='font-size: .8em'>Reach U2 Z" + number1 + " without your Shield falling below " + number2 + "%.</span>";
			},
			evaluate: function (number) {
				if (this.universe == 1) return 0;
				var nextBreakpoint = (number) ? this.breakpoints2[number] : this.breakpoints2[this.finished];
				if (game.global.lowestShield < nextBreakpoint) return 0;
				return game.global.world;
			},
			progress: function (index) {
				if (index < this.finished) return "Already earned!";
				if (this.universe == 1) return "You must be in Universe 2!";
				var breakpoint2 = this.breakpoints2[index];
				if (game.global.lowestShield < breakpoint2) return "Your Shield has already hit " + game.global.lowestShield + "% this run.";
				return "Still Earnable! Lowest is " + game.global.lowestShield + "%";
			},
			display: function(){
				return (game.global.highestRadonLevelCleared >= 1);
			},
			breakpoints: [40, 50, 60, 70, 80, 90, 100],
			breakpoints2: [25, 35, 45, 50, 50, 50, 60],
			tiers: [11, 11, 11, 11, 12, 12, 12],
			names: ["Crumb of Comfort", "Common Comfort", "Controlled Comfort", "Certain Comfort", "Copious Comfort", "Critical Comfort", "Cosmic Comfort"],
			icon: "icomoon icon-shield2",
			newStuff: []
		},
		blockTimed: {
			finished: 0,
			title: "Speed: The Block",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "清除障碍区地图用时少于" + number + "，从使用传送门开始计时。";
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
			},
			display: function () {
				return (game.global.totalPortals >= 1 || this.finished >= 1);
			},
			highest: 0,
			reverse: true,
			timed: true,
			showAll: true,
			breakpoints: [480, 240, 120, 60],//In minutes
			tiers: [1, 1, 2, 2],
			names: ["Block Hobbyist", "Block Apprentice", "Block Professional", "Block Rockstar"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		wallTimed: {
			finished: 0,
			title: "Speed: The Wall",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "清除高墙地图用时少于" + number + "，从使用传送门开始计时。";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 10 && (game.global.totalPortals >= 1 || this.finished >= 1));
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			timed: true,
			showAll: true,
			breakpoints: [480, 240, 120, 60],//In minutes
			tiers: [2, 2, 2, 3],
			names: ["Wall Novice", "Wall Student", "Wall Contender", "Wall Scaler"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		angerTimed: {
			finished: 0,
			title: "Speed: Anger",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "清除愤怒维度地图用时少于" + number + "，从使用传送门开始计时。";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 14 && (game.global.totalPortals >= 1 || this.finished >= 1));
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			timed: true,
			showAll: true,
			breakpoints: [480, 240, 120, 60, 1],//In minutes
			tiers: [2, 2, 3, 3, 8],
			names: ["Angry Jogger", "Angry Runner", "Angry Sprinter", "Angry Racer", "Angry Teleporter"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		doomTimed: {
			finished: 0,
			title: "Speed: Doom",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "清除末日神殿地图用时少于" + number + "，从使用传送门开始计时。";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 19 && (game.global.totalPortals >= 1 || this.finished >= 1));
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			timed: true,
			showAll: true,
			breakpoints: [480, 240, 120, 60],//In minutes
			tiers: [2, 3, 3, 4],
			names: ["Walk to Doom", "Trot to Doom", "Canter to Doom", "Gallop to Doom"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		prisonTimed: {
			finished: 0,
			title: "Speed: The Prison",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "清除监狱地图用时少于" + number + "，从使用传送门开始计时。";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 32 && (game.global.totalPortals >= 1 || this.finished >= 1));
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			timed: true,
			showAll: true,
			breakpoints: [480, 360, 240, 180, 150, 120, 105, 90, 10], //In minutes
			tiers: [3, 4, 4, 5, 5, 5, 6, 6, 8],
			names: ["Prison Odyssey", "Prison Expedition", "Prison Adventure", "Prison Trek", "Prison Tour", "Prison Road Trip", "Prison Hike", "Prison Jog", "Prison Sprint"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		bionicTimed: {
			finished: 0,
			title: "Speed: Bionic",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>清除仿生仙境地图用时少于" + number + "，从使用传送门开始计时。</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 79);
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			timed: true,
			showAll: true,
			breakpoints: [1440, 1200, 720, 480, 210, 150], //In minutes
			tiers: [4, 4, 5, 5, 6, 6],
			names: ["Lover of Bots", "Friend of Bots", "Acquaintance of Bots", "Bot Disliker", "Bot Hater", "Bot Slayer"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		starTimed: {
			finished: 0,
			title: "Speed: Star",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>清除爆炸之星地图用时少于" + number + "，从使用传送门开始计时。</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 124);
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			timed: true,
			showAll: true,
			breakpoints: [1680, 1080, 390, 180, 150, 50, 5], //In minutes
			tiers: [5, 5, 5, 6, 6, 7, 8],
			names: ["Cosmic Curiosity", "Star Struck", "Space Speeder", "Intense Inertia", "Stellar Striker", "Insane Imploder", "Born Imploded"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		spireTimed: {
			finished: 0,
			title: "Speed: Spire",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>清除尖塔用时少于" + number + "，从使用传送门开始计时。</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 169);
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			timed: true,
			showAll: true,
			breakpoints: [1300, 900, 500, 200, 175, 60, 2],
			tiers: [6, 6, 6, 7, 7, 7, 8],
			names: ["Spire Trialer", "Spire Rider", "Spire Strider", "Spire Glider", "Spire Flier", "Inspired", "Spire Spirer"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		spire2Timed: {
			finished: 0,
			title: "Speed: Spire II",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>清除尖塔II用时少于" + number + "，从使用传送门开始计时。</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 269);
			}, 
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			timed: true,
			showAll: true,
			breakpoints: [500, 200, 120, 60, 10],
			tiers: [6, 7, 8, 8, 9],
			names: ["Toxic Treader", "Toxic Trotter", "Toxic Traveller", "Toxic Tempo", "Toxic Teleporter"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		spire3Timed: {
			finished: 0,
			title: "Speed: Spire III",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>清除尖塔III用时少于" + number + "，从使用传送门开始计时。</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 369);
			}, 
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			timed: true,
			showAll: true,
			breakpoints: [480, 240, 120, 80, 20],
			tiers: [6, 7, 8, 8, 9],
			names: ["Chillin", "Arctic Accelerator", "Rimy Runner", "Subzero Sprinter", "Frigid and Furious"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		spire4Timed: {
			finished: 0,
			title: "Speed: Spire IV",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>清除尖塔IV用时少于" + number + "，从使用传送门开始计时。</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 469);
			}, 
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "最好成绩是 " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			timed: true,
			showAll: true,
			breakpoints: [4320, 2880, 1440, 300, 60, 30, 11],
			tiers: [8, 8, 8, 8, 9, 9, 10],
			names: ["Windy Walker", "Gusty Gait", "Breeze Breaker", "Zippy Zephyr", "Temporal Tempest", "Stratus Screamer", "Tearin\' Tornado"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		spire5Timed: {
			finished: 0,
			title: "Speed: Spire V",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>Clear Spire V in less than " + number + " from start of run</span>";
			},
			display: function () {
				return (game.global.highestLevelCleared >= 569);
			}, 
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "Best run is " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			timed: true,
			showAll: true,
			breakpoints: [1440, 360, 120, 40, 20],
			tiers: [8, 9, 9, 10, 10],
			names: ["actiVe", "resolVed", "traVeler", "driVen", "triVialized"],
			icon: "icomoon icon-alarmclock",
			newStuff: []
		},
		bigWallTimed: {
			finished: 0,
			title: "U2 Speed: Big Wall",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>Clear Big Wall in less than " + number + " from start of run</span>";
			},
			display: function () {
				return (game.global.universe == 2 || game.global.highestRadonLevelCleared >= 6);
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "Best run is " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			timed: true,
			showAll: true,
			breakpoints: [100, 50, 10, 2],//In minutes
			tiers: [9, 9, 10, 11],
			names: ["Big Wall Crawler", "Big Wall Scholar", "Big Wall Mauler", "Big Wall Baller"],
			icon: "icomoon icon-clock2",
			newStuff: []
		},
		palaceTimed: {
			finished: 0,
			title: "U2 Speed: Palace",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>Clear Prismatic Palace in less than " + number + " from start of run</span>";
			},
			display: function () {
				return (game.global.highestRadonLevelCleared >= 20);
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "Best run is " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			timed: true,
			showAll: true,
			breakpoints: [180, 90, 40, 6],//In minutes
			tiers: [10, 10, 11, 12],
			names: ["Peasant", "Jester", "Advisor", "Ruler"],
			icon: "icomoon icon-clock2",
			newStuff: []
		},
		meltingTimed: {
			finished: 0,
			title: "U2 Speed: Melting",
			description: function (number) {
				number = formatMinutesForDescriptions(this.breakpoints[number]);
				return "<span style='font-size: .8em'>Clear Melting Point in less than " + number + " from start of run</span>";
			},
			display: function () {
				return (game.global.highestRadonLevelCleared >= 49);
			},
			evaluate: function () {
				return getMinutesThisPortal();
			},
			progress: function () {
				return "Best run is " + formatMinutesForDescriptions(this.highest);
			},
			highest: 0,
			reverse: true,
			timed: true,
			showAll: true,
			breakpoints: [360, 100, 35, 20],//In minutes
			tiers: [11, 12, 12, 12],
			names: ["Thawed", "Tempered", "Melty", "Molten"],
			icon: "icomoon icon-clock2",
			newStuff: []
		},
		oneOffs: {
			//Turns out this method of handling the feats does NOT scale well... adding stuff to the middle is a nightmare
			finished: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			title: "Feats",
			get descriptions () {
				return ["Complete the Dimension of Anger before buying Bounty", "Reach Z30 with no respec and 60 or less He spent", "Have over " + prettify(1e6) + " traps at once", "Die 50 times to a single Voidsnimp", "Beat Balance, never having more than 100 stacks", "Reach Zone 10 with 5 or fewer dead Trimps", "Reach exactly 1337 He/Hr", "Attack 20 times without dying in Electricity", "Create a perfect Map", "Use up all 7 Daily Challenges", "Equip a magnificent or better Staff and Shield", "Reach Z60 with 1000 or fewer dead Trimps", "Reach Z120 without using manual research", "Reach Z75 without buying any housing", "Find an uncommon heirloom at Z146 or higher", "Spend over " + prettify(250e3) + " total He on Wormholes", "Reach Z60 with rank III or lower equipment", "Kill an Improbability in one hit", "Beat a Lv 60+ Destructive Void Map with no deaths", "Beat Crushed without being crit past Z5", "Kill an enemy with 100 stacks of Nom", "Break the Planet with 5 or fewer lost battles", "Reach Z60 without hiring a single Trimp", "Complete a Zone above 99 without falling below 150 stacks on Life", "Spend at least 10 minutes breeding an army with Geneticists", "Beat Toxicity, never having more than 400 stacks", "Own 100 of all housing buildings", "Overkill every possible world cell before Z60", "Complete Watch without entering maps or buying Nurseries", "Complete Lead with 100 or fewer lost battles", "Build your 10th Spire Floor", "Kill " + prettify(1e6) + " enemies in your Spire", "Equip a Magmatic Staff and Shield", "Bring a world enemy's attack below 1", "Complete Lead with 1 or fewer Gigastations", "Complete Corrupted without Geneticists", "Complete a Void Map at Z215 on Domination", "Complete The Spire with 0 deaths", "Overkill an Omnipotrimp", "Defeat a Healthy enemy with 200 stacks of wind", "Build up a Poison debuff that's 1000x higher than your attack", "Earn a Challenge<sup>2</sup> bonus of 2000%", "Complete a Bionic Wonderland map 45 levels higher than your Zone number", "Beat the Spire with no respec and " + prettify(100e6) + " or less He Spent", "Defeat an enemy on Obliterated", "Find an Amalgamator on Z1", "Get 10 Red Crits in a row", "Beat Z75 on the Scientist V challenge", "Gain at least 01189998819991197253 He from one Bone Portal", "Kill an Enemy on Eradicated", "Complete Spire V with no deaths", "Build your 20th Spire Floor", "Complete a Bionic Wonderland map 200 levels higher than your Zone number", "Complete Spire II on the Coordinate challenge", "Beat Spire II with no respec and " + prettify(1e9) + " or less He spent", "Beat Imploding Star on Obliterated", "Close 750 Nurseries at the same time", "Earn Dark Essence with no respec and 0 He spent", "Reach Magma on Obliterated", "Break the Planet on Eradicated"];
			},
			tiers: [2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9],
			description: function (number) {
				return this.descriptions[number];
			},
			filters: [19, 29, 29, -1, 39, 59, -1, 79, -1, 99, 124, 59, 119, 74, -1, -1, 59, 59, 59, 124, 144, 59, 59, 109, -1, 164, 59, -1, 179, 179, 199, 199, 229, 245, 179, 189, 214, 199, 229, 299, 235, 65, 169, 199, 424, 349, -1, 129, 399, 549, 599, 199, 324, 299, 299, 424, 229, 179, 424, 549],
			filterLevel: function(){
				return game.global.highestLevelCleared;
			},
			icon: "icomoon icon-flag",
			names: ["Forgot Something", "Underachiever", "Hoarder", "Needs Block", "Underbalanced", "Peacekeeper", "Elite Feat", "Grounded", "Maptastic", "Now What", "Swag", "Workplace Safety", "No Time for That", "Tent City", "Consolation Prize", "Holey", "Shaggy", "One-Hit Wonder", "Survivor", "Thick Skinned", "Great Host", "Unbroken", "Unemployment", "Very Sneaky", "Extra Crispy", "Trimp is Poison", "Realtor", "Gotta Go Fast", "Grindless", "Leadership", "Defender", "Stoned", "Swagmatic", "Brr", "Unsatisfied Customer", "Organic Trimps", "Fhtagn", "Invincible", "Mighty", "Mother Lode", "Infected", "Challenged", "Bionic Sniper", "Nerfed", "Obliterate", "M'Algamator", "Critical Luck", "AntiScience", "HeMergency", "Eradicate", "Invisible", "Power Tower", "Bionic Nuker", "Hypercoordinated", "Nerfeder", "Imploderated", "Wildfire", "Unessenceted", "Melted", "Screwed"],
			newStuff: []
		},
		oneOffs2: {
			//Turns out this method of handling the feats does NOT scale well... adding stuff to the middle is a nightmare. Yet I copy/pasted it again for Universe 2 and probably will do the same for U3. Oh well.
			finished: [false, false, false, false, false, false, false, false, false, false, false, false],
			title: "Feats",
			display: function(){
				return (Fluffy.checkU2Allowed());
			},
			get descriptions () {
				return ["Reach exactly 1337 Rn/Hr", "One-shot a Dimension of Rage enemy on Unlucky while Unlucky", "Complete Downsize with an equal amount of Huts, Houses, Mansions, Hotels and Resorts", "Complete Transmute without hiring a single Trimp", "Complete Unbalance with 500 stacks of Unbalance", "Complete Bublé without using Prismal or respeccing Perks", "Complete Duel without ever falling below 20 points", "Complete Melt without ever having more than 150 stacks", "Complete Trappapalooza without Trapping on or above Z50", "Complete Wither with " + prettify(10000) + " stacks of Hardened", "Complete Revenge with exactly 19 stacks", "Complete 80/80 quests on Quest"];
			},
			tiers: [10,10,10,11,11,11,11,11,12,12,12,12],
			description: function (number) {
				return this.descriptions[number];
			},
			filters: [-1,14,19,24,34,39,44,49,59,69,79,84],
			filterLevel: function(){
				return game.global.highestRadonLevelCleared;
			},
			icon: "glyphicon glyphicon-flag",
			names: ["Eliter Feat", "Don't Need Luck", "Perfectly Balanced", "Resourceyphobe", "Upsized", "Unpoppable", "Pwnd", "Solid", "Coastapalooza", "Witherproof", "Close Call", "Level Up"],
			newStuff: []
		},
	},

	heirlooms: { //Basic layout for modifiers. Steps can be set specifically for each modifier, or else default steps will be used
		//NOTE: currentBonus is the only thing that will persist!
		values: [10, 20, 30, 50, 150, 300, 800, 2000, 5000, 15000],
		recycleOverride: [-1,-1,-1,-1,-1,-1,-1,-1,-1,25e4],
		coreValues: function(tier){
			return Math.floor(Math.pow(10, tier) * 20) * 2;
		},
		slots: [1,2,3,3,3,4,4,5,5,6],
		defaultSteps: [[3, 6, 1], [3, 6, 1], [3, 6, 1], [6, 12, 1], [16, 40, 2], [32, 80, 4], [64, 160, 8], [128, 320, 16], [256, 640, 32], [512, 1280, 64]],
		rarityNames: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Magnificent', 'Ethereal', 'Magmatic', 'Plagued', 'Radiating'],
		rarities:[[5000,3500,1500,-1,-1,-1,-1,-1,-1,-1],[1000,5000,4000,-1,-1,-1,-1,-1,-1,-1],[-1,3500,5000,1500,-1,-1,-1,-1,-1,-1],[-1,2000,4000,4000,-1,-1,-1,-1,-1,-1],[-1,1500,3000,5000,500,-1,-1,-1,-1,-1],[-1,800,2000,6000,1000,200,-1,-1,-1,-1],[-1,400,1000,7000,1000,500,100,-1,-1,-1],[-1,200,500,6000,2200,800,300,-1,-1,-1],[-1,-1,-1,5000,3000,1700,300,-1,-1,-1],[-1,-1,-1,2500,5000,2000,500,-1,-1,-1],[-1,-1,-1,-1,7000,2400,500,100,-1,-1],[-1,-1,-1,-1,6000,3170,680,150,-1,-1],[-1,-1,-1,-1,3000,5000,1650,350,-1,-1],[-1,-1,-1,-1,-1,4500,3000,2000,500,-1],[-1,-1,-1,-1,-1,1500,2000,5000,1500,-1],[-1,-1,-1,-1,-1,-1,1000,6000,3000,-1],[-1,-1,-1,-1,-1,-1,-1,-1,7500,2500],[-1,-1,-1,-1,-1,-1,-1,-1,5000,5000],[-1,-1,-1,-1,-1,-1,-1,-1,-1,10000]],
		rarityBreakpoints:[41,60,80,100,125,146,166,181,201,230,300,400,500,600,700,1,40,80],
		universeBreakpoints: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2],
		priceIncrease: [1.5, 1.5, 1.25, 1.19, 1.15, 1.12, 1.1, 1.06, 1.04, 1.03],
		canReplaceMods: [true, true, true, true, true, true, true, true, false, false],
		Core: {
			fireTrap: {
				name: "Fire Trap Damage",
				currentBonus: 0,
				steps: [[10,25,1],[10,25,1],[10,25,1],[25,50,1],[50,100,2],[100,199,3],[200,400,4]]
			},
			poisonTrap: {
				name: "Poison Trap Damage",
				currentBonus: 0,
				steps: [-1,[10,25,1],[10,25,1],[25,50,1],[50,100,2],[100,199,3],[200,400,4]]
			},
			lightningTrap: {
				name: "Lightning Trap Damage",
				currentBonus: 0,
				steps: [-1,-1,[1,10,1],[10,20,1],[20,50,2],[50,100,2],[100,199,3]],
				specialDescription: function (modifier) {
					return "Increases the damage dealt by Lightning Trap" + ((playerSpireTraps.Lightning.level >= 4) ? ", Shocked, and its column boost to Fire and Poison Traps " : " and Shocked ") + "by " + prettify(modifier) + "%.";
				},
			},
			runestones: {
				name: "Runestone Drop Rate",
				currentBonus: 0,
				steps: [[10,25,1],[10,25,1],[10,25,1],[25,50,1],[50,100,2],[100,199,3],[200,400,4]]
			},
			strengthEffect: {
				name: "Strength Tower Effect",
				currentBonus: 0,
				steps: [[1,10,1],[1,10,1],[1,10,1],[10,20,1],[20,50,2],[50,100,2],[100,199,3]],
				specialDescription: function (modifier) {
					return "Increases the damage dealt by Fire Traps on the same Floor as a Strength Tower by " + prettify(modifier) + "%. Does not increase the world bonus to Trimps.";
				},
			},
			condenserEffect: {
				name: "Condenser Effect",
				currentBonus: 0,
				steps: [-1,[1,5,0.25],[1,5,0.25],[5,10,0.25],[5,15,0.5],[10,20,0.5],[20,30,0.5]],
				max: [-1,10,10,15,25,35,50],
				specialDescription: function(modifier) {
					return "Increases the amount of Poison damage compounded by the Condenser Tower by " + prettify(modifier) + "%. Does not increase the world bonus to Trimps.";
				}
			},


		},
		Staff: {
			metalDrop: {
				name: "金属掉落加成",
				currentBonus: 0,
			},
			foodDrop: {
				name: "食物掉落加成",
				currentBonus: 0,
			},
			woodDrop: {
				name: "木头掉落加成",
				currentBonus: 0,
			},
			gemsDrop: {
				name: "宝石掉落加成",
				currentBonus: 0,
			},
			fragmentsDrop: {
				name: "碎片掉落加成",
				currentBonus: 0,
			},
			FarmerSpeed: {
				name: "农民效率",
				currentBonus: 0,
			},
			LumberjackSpeed: {
				name: "伐木工的效率",
				currentBonus: 0,
			},
			MinerSpeed: {
				name: "矿工效率",
				currentBonus: 0,
			},
			DragimpSpeed: {
				name: "宝石效率",
				currentBonus: 0,
			},
			ExplorerSpeed: {
				name: "探险家效率",
				currentBonus: 0,
			},
			ScientistSpeed: {
				name: "科学家效率",
				currentBonus: 0,
			},
			FluffyExp: {
				heirloopy: true,
				get name(){
					return "Pet (" + Fluffy.getName() + ") Exp";
				},
				currentBonus: 0,
				steps: [-1, -1, -1, -1, -1, -1, -1, -1, [25, 50, 1],[50,100,1]]
			},
			empty: {
				name: "Empty",
				currentBonus: 0,
			}
		},
		Shield: {
			playerEfficiency: {
				name: "玩家效率",
				currentBonus: 0,
				steps: [[8,16,1],[8,16,1],[8,16,1],[16,32,2],[32,64,4],[64,128,8],[128,256,16],[256,512,32],[512,1024,64],[1024,2048,128]]
			},
			trainerEfficiency: {
				name: "培训师效率",
				currentBonus: 0,
				steps: [[10,20,1],[10,20,1],[10,20,1],[20,40,2],[40,60,2],[60,80,2],[80,100,2],[100,120,2],[120,140,2],-1]
			},
			storageSize: {
				name: "存储上限",
				currentBonus: 0,
				steps: [[32,64,4],[32,64,4],[32,64,4],[64,128,4],[128,256,8],[256,512,16],[512,768,16],[768,1024,16],[1024,1280,16],-1]
			},
			breedSpeed: {
				name: "繁殖速度",
				currentBonus: 0,
				steps: [[5,10,1],[5,10,1],[5,10,1],[10,20,1],[70,100,3],[100,130,3],[130,160,3],[160,190,3],[190,220,3],[220,280,5]]
			},
			trimpHealth: {
				name: "脆皮生命",
				currentBonus: 0,
				steps: [[6,20,2],[6,20,2],[6,20,2],[20,40,2],[50,100,5],[100,150,5],[150,200,5],[200,260,6],[260,356,8],[360,460,10]]
			},
			trimpAttack: {
				name: "脆皮攻击",
				currentBonus: 0,
				steps: [[6,20,2],[6,20,2],[6,20,2],[20,40,2],[50,100,5],[100,150,5],[150,200,5],[200,260,6],[260,356,8],[360,460,10]]
			},
			trimpBlock: {
				name: "脆皮防御",
				currentBonus: 0,
				steps: [[4,7,1],[4,7,1],[4,7,1],[7,10,1],[28,40,1],[48,60,1],[68,80,1],[88,100,1],[108,120,1],-1]
			},
			critDamage: {
				name: "暴击伤害, 附加的",
				currentBonus: 0,
				steps: [[40,60,5],[40,60,5],[40,60,5],[60,100,5],[100,200,10],[200,300,10],[300,400,10],[400,500,10],[500,650,15],[650,850,20]],
				filter: function () {
					return (!game.portal.Relentlessness.locked);
				}
			},
			critChance: {
				name: "暴击几率, 附加的",
				currentBonus: 0,
				heirloopy: true,
				steps: [[1.4,2.6,0.2],[1.4,2.6,0.2],[1.4,2.6,0.2],[2.6,5,0.2],[5,7.4,0.2],[7.4,9.8,0.2],[9.8,12.2,0.2],[12.3,15.9,0.3],[20,30,0.5],[30,50,0.5]],
				filter: function () {
					return (!game.portal.Relentlessness.locked);
				},
				max: [30,30,30,30,30,30,30,30,100,125]
			},
			voidMaps: {
				name: "虚空地图掉落几率",
				currentBonus: 0,
				heirloopy: true,
				steps: [[5,7,0.5],[5,7,0.5],[5,7,0.5],[8,11,0.5],[12,16,0.5],[17,22,0.5],[24,30,0.5],[32,38,0.5],[40,50,0.25],[50,60,0.25]],
				max: [50,50,50,50,50,50,50,50,80,99]
			},
			plaguebringer: {
				name: "Plaguebringer",
				currentBonus: 0,
				heirloopy: true,
				specialDescription: function (modifier) {
					return modifier + "% of all non-lethal damage and nature stacks you afflict on your current enemy are copied onto the next enemy. Plaguebringer damage cannot bring an enemy below 5% health, but nature stacks will continue to accumulate."
				},
				steps: [-1, -1, -1, -1, -1, -1, -1, -1, [1, 15, 0.5],[15,30,0.5]],
				max: [0,0,0,0,0,0,0,0,75,100]
			},
			prismatic: {
				name: "Prismatic Shield",
				currentBonus: 0,
				noScaleU2: true,
				specialDescription: function(){
					return "ADDS this amount on to your total Prismatic Shield. This modifier can only function in the Radon Universe."
				},
				steps: [-1,-1,-1,-1,-1,-1, -1,-1,-1,[10,50,1]],
				max:[0,0,0,0,0,0,0,0,0,250]
			},
			gammaBurst: {
				name: "Gamma Burst",
				currentBonus: 0,
				stacks: 0,
				specialDescription: function(modifier){
					return "Each attack by your Trimps adds 1 stack of Charging. When Charging reaches 5 stacks, your Trimps will release a burst of energy, dealing " + prettify(modifier) + "% of their attack damage. Stacks reset after releasing a Burst or when your Trimps die.";
				},
				steps: [-1,-1,-1,-1,-1,-1, -1,-1,-1,[1000,2000,100]],
			},
			empty: {
				name: "Empty",
				currentBonus: 0,
				rarity: 1
			}
		}

	},
	trimpDeathTexts: ["ceased to be", "bit the dust", "took a dirt nap", "expired", "kicked the bucket", "evaporated", "needed more armor", "exploded", "melted", "fell over", "swam the river Styx", "turned into jerky", "forgot to put armor on", "croaked", "flatlined", "won't follow you to battle again", "died. Lame", "lagged out", "imp-loded"],
	badGuyDeathTexts: ["slew", "killed", "destroyed", "extinguished", "liquidated", "vaporized", "demolished", "ruined", "wrecked", "obliterated"],

	settings: {
		speed: 10,
		speedTemp: 0,
		slowdown: false,
                ewma_alpha: 0.05,
                ewma_ticks: 10, // 1 second
	},

	resources: {
		food: {
			owned: 0,
			max: 500
		},
		wood: {
			owned: 0,
			max: 500
		},
		metal: {
			owned: 0,
			max: 500
		},
		trimps: {
			owned: 0,
			max: 10,
			maxMod: 1,
			realMax: function () {
				var num = this.max;
				if (game.global.challengeActive == "Downsize"){
					num = game.global.totalGifts + game.unlocks.impCount.TauntimpAdded + 10;
					num += countTotalHousingBuildings();
				}
				num *= this.maxMod;
				if (getPerkLevel("Carpentry") > 0) num = Math.floor(num * (Math.pow(1 + game.portal.Carpentry.modifier, getPerkLevel("Carpentry"))));
				if (getPerkLevel("Carpentry_II") > 0) num = Math.floor(num * (1 + (game.portal.Carpentry_II.modifier * getPerkLevel("Carpentry_II"))));
				return num;
			},
			working: 0,
			speed: 5,
			get employed () {
				var total = 0;
				for (var job in game.jobs) {
					total += game.jobs[job].owned;
				}
				total -= game.jobs.Dragimp.owned;
				return total;
			},
			set employed (value) {
				console.warn('就业现在是一个吸气剂，不需要设定');
				return;
			},
			soldiers: 0,
			maxSoldiers: 1,
			getCurrentSend: function (checkLevelTemp) {
				var amt = (getPerkLevel("Coordinated")) ? ((checkLevelTemp) ? game.portal.Coordinated.onChange(true) : game.portal.Coordinated.currentSend) : game.resources.trimps.maxSoldiers;
				if (game.jobs.Amalgamator.owned > 0) {
					amt *= game.jobs.Amalgamator.getPopulationMult();
				}
				return amt;
			},
			potency: 0.0085
		},
		science: {
			owned: 0,
			max: -1
		},
		gems: {
			owned: 0,
			max: -1
		},
		fragments: {
			owned: 0,
			max: -1
		},
		helium: {
			owned: 0,
			max: -1
		},
		radon: {
			owned: 0,
			max: -1
		}
	},
	equipment: {
		Shield: {
			locked: 1,
			tooltip: "一个巨大的木制的盾牌。 每级给每个战士增加 $healthCalculated$ 生命。",
			blocktip: "一个巨大的木制的盾牌。 每级给每个战士增加 $blockCalculated$ 防御。",
			modifier: 1,
			level: 0,
			cost: {
				wood: [40, 1.2]
			},
			oc: 40,
			health: 4,
			healthCalculated: 4,
			blockNow: false,
			block: 1.5,
			blockCalculated: 1.5,
			prestige: 1
		},
		Dagger: {
			locked: 1,
			tooltip: "聊胜于无。 每级给每个战士增加 $attackCalculated$ 攻击。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [40, 1.2]
			},
			oc: 40,
			attack: 2,
			attackCalculated: 2,
			prestige: 1
		},
		Boots: {
			locked: 1,
			tooltip: "至少能保住他们的脚。每级给每个战士增加 $healthCalculated$ 生命。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [55, 1.2]
			},
			oc: 55,
			health: 6,
			healthCalculated: 6,
			prestige: 1
		},
		//2
		Mace: {
			locked: 1,
			tooltip: "对你的脆皮来说有点重，但他们能搞定。 每级给每个战士增加 $attackCalculated$ 攻击。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [80, 1.2]
			},
			oc: 80,
			attack: 3,
			attackCalculated: 3,
			prestige: 1
		},
		Helmet: {
			locked: 1,
			tooltip: "给你的脆皮们的头部提供相当程度的保护，每级给每个战士增加 $healthCalculated$ 生命。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [100, 1.2]
			},
			oc: 100,
			health: 10,
			healthCalculated: 10,
			prestige: 1
		},
		//3
		Polearm: {
			locked: 1,
			tooltip: "这玩意儿又大又尖！ 每级给每个战士增加 $attackCalculated$ 攻击力。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [140, 1.2]
			},
			oc: 140,
			attack: 4,
			attackCalculated: 4,
			prestige: 1
		},
		Pants: {
			locked: 1,
			tooltip: "给小脆皮们特制的裤衩！每级给每个战士增加 $healthCalculated$ 生命。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [160, 1.2]
			},
			oc: 160,
			health: 14,
			healthCalculated: 14,
			prestige: 1
		},
		//4
		Battleaxe: {
			locked: 1,
			tooltip: "这武器看起来十分吓人，但你的脆皮们能够搞定。 每级给每个战士增加 $attackCalculated$ 攻击。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [230, 1.2]
			},
			oc: 230,
			attack: 7,
			attackCalculated: 7,
			prestige: 1
		},
		Shoulderguards: {
			locked: 1,
			tooltip: "这些护肩能够保护你的脆皮们的脖子和肩膀，而且它们看起来很酷！每级给每个战士增加 $healthCalculated$ 生命。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [275, 1.2]
			},
			oc: 275,
			health: 23,
			healthCalculated: 23,
			prestige: 1
		},
		//5
		Greatsword: {
			locked: 1,
			tooltip: "这些大剑看起来甜美。说真的,如果你能看到它，你也会认为它看起来甜。相信我。 每级给每个战士增加 $attackCalculated$ 攻击。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [375, 1.2]
			},
			oc: 375,
			attack: 9,
			attackCalculated: 9,
			prestige: 1
		},
		Breastplate: {
			locked: 1,
			tooltip: "一些真正的重型装甲。每一个穿着重型护甲的人看起来都很痞气。 每级给每个战士增加 $healthCalculated$ 生命。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [415, 1.2]
			},
			oc: 415,
			health: 35,
			healthCalculated: 35,
			prestige: 1
		},
		Arbalest: {
			locked: 1,
			tooltip: "一件强大的远程武器。你的脆皮可以用劲弩对敌人造成伤害。 每级给每个战士增加 $attackCalculated$ 攻击。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [450, 1.2]
			},
			oc: 450,
			attack: 15,
			attackCalculated: 15,
			prestige: 1
		},
		Gambeson: {
			locked: 1,
			tooltip: "在胸甲下穿着一件舒适厚实的棉服夹克。 你的脆皮认为他们太棒了！ 每级给每个战士增加$healthCalculated$生命。",
			modifier: 1,
			level: 0,
			cost: {
				metal: [500, 1.2]
			},
			oc: 500,
			health: 60,
			healthCalculated: 60,
			prestige: 1
		}
	},

	badGuys: {
		Liquimp: {
			location: "None",
			locked: 1,
			attack: 3,
			health: 200,
			fast: true,
			loot: function () {
				rewardLiquidZone();
			}
		},
		Presimpt: {
			location: "World",
			locked: 1,
			attack: 1.1,
			health: 1.5,
			fast: false,
			loot: function () {
				//Happy Politically Correct Holidays, everyone!
				givePresimptLoot();
			}
		},
		Turkimp: {
			location: "World",
			locked: 1,
			attack: 1,
			health: 1.6,
			fast: false,
			loot: function () {
				//Happy Thanksgiving and stuff.
				//Also, happy post thanksgiving and stuff.
				//Also, happy normal days now I guess
				activateTurkimpPowers();
			}
		},
		Pumpkimp: {
			location: "Maps",
			attack: 0.9,
			health: 1.5,
			fast: false,
			loot: function () {
				//Happy Halloween and stuff.
				givePumpkimpLoot();
			}
		},
		Squimp: {
			location: "All",
			attack: 0.8,
			health: 0.7,
			fast: true
		},
		Elephimp: {
			location: "All",
			attack: 0.9,
			health: 1.3,
			fast: false
		},
		Turtlimp: {
			location: "All",
			attack: 0.9,
			health: 1.3,
			fast: false
		},
		Chimp: {
			location: "All",
			attack: 1,
			health: 1,
			fast: false
		},
		Penguimp: {
			location: "All",
			attack: 1.1,
			health: 0.7,
			fast: false
		},
		Snimp: {
			location: "All",
			attack: 1.05,
			health: 0.8,
			fast: true
		},
		Gorillimp: {
			location: "All",
			attack: 0.9,
			health: 1.1,
			fast: true
		},
		Shrimp: {
			location: "Sea",
			attack: 0.8,
			health: 0.9,
			fast: true
		},
		Mountimp: {
			location: "Mountain",
			attack: 0.5,
			health: 2,
			fast: false
		},
		Frimp: {
			location: "Forest",
			attack: 0.75,
			health: 1.2,
			fast: true
		},
		Chickimp: {
			location: "Sea",
			attack: 0.8,
			health: 1.1,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("food", 0.5, level, true);
				message("那个小鸡怪掉落了 " + prettify(amt) + " 食物!", "Loot", "apple", null, 'primary');
			}
		},
		Hippopotamimp: {
		   location: "Sea",
		   attack: 1.4,
		   health: 1.1,
		   fast: false
		},
		Onoudidimp: {
			location: "Mountain",
			attack: 0.8,
			health: 1.4,
			fast: false
		},
		//Honorary Imps
		Kittimp: {
			//Designed by K1d_5h31d0n
			location: "Forest",
			location2: "Mountain",
			attack: 1,
			health: 0.85,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("food", 0.5, level, true);
				message("You hear nearby Kittimps running away in fear and decide to check out their former home. There, you find a prey pile with " + prettify(amt) + " food!", "Loot", "apple", null, 'primary');
			}
		},
		Grimp: {
			//Designed by Grabarz
			location: "Forest",
			attack: 1.1,
			health: 1.5,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("wood", 0.5, level, true);
				message("那个Grimp掉落了" + prettify(amt) + " 木头!", "Loot", "tree-deciduous", null, 'primary');
			}
		},
		Golimp: {
			//Designed by Syc_Golem
			location: "Depths",
			attack: 1.2,
			health: 1.4,
			fast: false,
			loot: function (level) {
				var random = Math.floor(Math.random() * 5);
				var amt;
				var res;
				var icon;
				var tag;
				if (random === 0) {
					amt = rewardResource("fragments", 1, level, true);
					res = "fragments";
					icon = "th";
					tag = "secondary";
				}
				else {
					amt = rewardResource("metal", 0.3, level, true);
					res = "bars of metal";
					icon = "*cubes";
					tag = "primary";
				}
				message("The Golimp fell to pieces! You manage to grab " + prettify(amt) + " " + res + " before it begins pulling itself together.", "Loot", icon, null, tag);
			}
		},
		Seirimp: {
			//Designed by Seiyria
			location: "Mountain",
			attack: 1.15,
			health: 1.4,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", 0.5, level, true);
				message("那Seirimp掉落了 " + prettify(amt) + " 金属! Neat-O.", "Loot", "*cubes", null, 'primary');
			}
		},
		Slagimp: {
			location: "Depths",
			attack: 0.9,
			health: 1,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("gems", 0.3, level, true);
				message("那个Slagimp倒下了， " + prettify(amt) + "宝石弹出来！ 怎么样？", "Loot", "*diamond", null, 'secondary');
			}
		},
		Moltimp: {
			location: "Depths",
			attack: 1.2,
			health: 0.7,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", 0.2, level, true);
				message("Moltimp为了感谢你的战斗，给了你 " + prettify(amt) + " 金属条! 然后就死了。", "Loot", "*cubes", null, 'primary');
			}
		},
		Lavimp: {
			location: "Depths",
			attack: 1,
			health: 0.8,
			fast: true
		},
		Flowimp: {
			location: "Plentiful",
			attack: 1.3,
			health: 0.95,
			fast: false
		},
		Kangarimp: {
			location: "Plentiful",
			attack: 0.95,
			health: 0.95,
			fast: true
		},
		Gnomimp: {
			location: "Plentiful",
			attack: 0.8,
			health: 1,
			fast: false
		},
		Slosnimp: {
			location: "Plentiful",
			attack: 1.05,
			health: 0.8,
			fast: false
		},
		Entimp: {
			location: "Plentiful",
			attack: 0.6,
			health: 1.3,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("wood", 0.35, level, true);
				message("Entimp已经不复存在了。你从他的行李箱得到了 " + prettify(amt) + " 木材原木!", "Loot", "tree-deciduous", null, 'primary');
			}
		},
		Squirrimp: {
			location: "Plentiful",
			attack: 1,
			health: 1.1,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("food", 0.35, level, true);
				message("该吃点炖菜了! 你得到了 " + prettify(amt) + " 来自那个地方的食物。!", "Loot", "apple", null, 'primary');
			}
		},
		Gravelimp: {
			location: "Plentiful",
			attack: 0.8,
			health: 1.4,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", 0.35, level, true);
				message("你在坟墓里摸索着，设法找到了 " + prettify(amt) + " 金属条! 祝贺你!", "Loot", "*cubes", null, 'primary');
			}
		},
		Blimp: {
			location: "World",
			last: true,
			world: 5,
			attack: 1.2,
			health: 2,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("food", 2, level);
				rewardResource("wood", 2, level);
				rewardResource("metal", 2, level);
				message("那个守卫掉落了 " + prettify(amt) + " 食品、木头和金属!这些应该是有用的。", "Loot", "piggy-bank", null, 'primary');
				if (game.global.runningChallengeSquared) return;
				var minLevel = (game.global.universe == 2) ? 16 : 21;
				if (game.global.world >= minLevel && (getTotalPortals() >= 1 || game.global.portalActive)){
					if (game.resources.helium.owned == 0) fadeIn("helium", 10);
					amt = 1;
					if (game.global.challengeActive == "Domination") amt *= 3;
					amt = rewardResource("helium", amt, level);
					message("You were able to extract " + prettify(amt) + " " + heliumOrRadon(true) + "s from that Blimp!", "Loot", heliumIcon(true), "helium", "helium");
					if (game.global.world >= 40 && game.global.challengeActive == "Balance") {
						game.challenges.Balance.onComplete();
					}
				}
			}
		},
		Cthulimp: {
			location: "Void",
			last: true,
			world: 6,
			attack: 2,
			health: 5,
			fast: true,
			loot: function (level, fromFluffy, fluffyCount) {
				if (game.resources.helium.owned == 0) fadeIn("helium", 10);
				var amt = (game.global.world >= 60 && game.global.universe == 1) ? 10 : 2;
				if (mutations.Magma.active()) amt *= 3;
				if (game.global.challengeActive == "Domination"){
					amt *= 3;
					if (game.global.world == 215) giveSingleAchieve("Fhtagn");
				}
				var percentage = 1;
				var rewardPercent = 1;
				if (game.global.world >= mutations.Corruption.start(true)){
					rewardPercent = 2;
					percentage = (game.global.challengeActive == "Corrupted") ? 0.075 : 0.15;
					var corrCount = mutations.Corruption.cellCount();
					if (mutations.Healthy.active()) corrCount -= mutations.Healthy.cellCount();
					percentage *= corrCount;
					if (mutations.Healthy.active()){
						var healthyValue = (game.talents.healthStrength2.purchased) ? 0.65 : 0.45;
						amt *= ((mutations.Healthy.cellCount() * healthyValue) + percentage + 1);
					}
					else {
						amt *= (percentage + 1);
					}
				}
				if (game.talents.voidSpecial.purchased){
					amt *= ((getLastPortal() * 0.0025) + 1);
				}

				var fluffyBonus = 1;
				if (fromFluffy){
					var maxFloof = Fluffy.getVoidStackCount() - 1;
					var countFloof = (fluffyCount > maxFloof) ? maxFloof : fluffyCount;
					if (game.talents.voidMastery.purchased){
						fluffyBonus = Math.pow(1.5, countFloof);
					}
					else{
						fluffyBonus = (1 + (0.5 * countFloof));
					}
					amt *= fluffyBonus;
					amt *= fluffyCount;
				}

				if (game.talents.scry2.purchased && game.global.canScryCache) amt *= 1.5;

				//Void map helium modifiers above here
				
				if (game.global.runningChallengeSquared)
					amt = 0;
				else
					amt = rewardResource("helium", amt, level, false, rewardPercent);
				
				game.stats.highestVoidMap.evaluate();
				game.stats.totalVoidMaps.value += (fromFluffy && fluffyCount) ? fluffyCount : 1;
				var msg = "Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to ";				
				if (fromFluffy && fluffyCount == 1){
					msg = "Before you even realized you were in a new Void Map, Fluffy snuck to the end and quickly stole all the loot.";
					if (!game.global.runningChallengeSquared) msg += " You gained another " + prettify(amt) + " " + heliumOrRadon() + "!";
					message(msg, "Loot", heliumIcon(true), "helium", "helium");
					return;
				}
				else if (fromFluffy){
					msg = "Before you even realize what's happening, " + Fluffy.getName() + " has entered and cleared the remaining " + fluffyCount + " Void Maps and quickly stole all the loot!";
					if (!game.global.runningChallengeSquared) msg += " After earning a bonus on each of +" + prettify((fluffyBonus - 1) * 100) + "% " + heliumOrRadon() + ", you've earned an additional " + prettify(amt) + " " + heliumOrRadon() + "!";
					message(msg, "Loot", heliumIcon(true), "helium", "helium");
					return;
				}
				if (game.options.menu.repeatVoids.enabled && game.global.totalVoidMaps > 1){
					msg += "下一个虚空地图";
				}
				else {
					msg += ((game.options.menu.exitTo.enabled) ? "the world " : "your map chamber");
				}
				if (game.global.runningChallengeSquared) msg += ".";
				else msg += " with an extra " + prettify(amt) + " " + heliumOrRadon() + "!";
				message(msg, "Loot", heliumIcon(true), "helium", "helium");
				
			}
		},
		Shadimp: {
			location: "Void",
			world: 6,
			attack: 1.2,
			health: 1.3,
			fast: true
		},
		Voidsnimp: {
			location: "Void",
			world: 6,
			attack: 2.1,
			health: 0.5,
			fast: true
		},
		Megablimp: {
			location: "Hell",
			last: true,
			world: 15,
			attack: 1.1,
			health: 4,
			fast: false,
			loot: function (level) {
				checkAchieve("angerTimed");
				if (game.upgrades.Bounty.done == 0) giveSingleAchieve("Forgot Something");
			}
		},
		Dragimp: {
			location: "World",
			world: 17,
			attack: 1,
			health: 1.5,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("gems", 0.35, level, false);
				message("那条龙掉落了 " + prettify(amt) + " 宝石!", "Loot", "*diamond", null, 'secondary');
			}
		},
		Mitschimp: {
			location: "Block",
			last: true,
			world: 10,
			attack: 1.2,
			health: 2.5,
			fast: false,
			loot: function (level) {
				checkAchieve("blockTimed");
				var amt = rewardResource("wood", 2, level, true);
				message("那只鼹鼠掉落了 " + prettify(amt) + " 木头!", "Loot", "tree-deciduous", null, 'primary');
			}
		},
		Brickimp: {
			location: "Wall",
			last: true,
			world: 7,
			attack: 1.2,
			health: 2.5,
			fast: false,
			loot: function (level) {
				if (game.global.universe == 1)
					checkAchieve("wallTimed")
				else if (game.global.universe == 2)
					checkAchieve("bigWallTimed");
			}
		},
		Prismimp: {
			location: "Prismatic",
			world: 20,
			attack: 1.3,
			health: 2,
			fast: true,
			loot: function(level){
				var amt = rewardResource("gems", 1, level, true);
				message("That Prismimp dropped " + prettify(amt) + " gems, how sweet of it!", "Loot", "*diamond", null, 'secondary');
			}
		},
		Rainbimp: {
			location: "Prismatic",
			world: 20,
			attack: 2,
			health: 4,
			fast: false,
			loot: function(level){
				var amt = rewardResource("gems", 4, level, true);
				message("You feel bad about slaying an incredibly rare Rainbimp, but at least he dropped " + prettify(amt) + " gems! Totally worth.", "Loot", "*diamond", null, 'secondary');	
			}
		},
		Lightimp: {
			location: "Prismatic",
			world: 20,
			attack: 3,
			health: 6,
			fast: false,
			last: true,
			loot: function(level){
				var amt = rewardResource("gems", 6, level, true);
				message("The Lightimp's light floats up and away, unbothered by the fact that you just killed its body. Since it doesn't want the body anymore, you break it down in to " + prettify(amt) + " gems!", "Loot", "*diamond", null, 'secondary');
				checkAchieve("palaceTimed");
			}
		},
		Meltimp: {
			location: "Melting",
			world: 50,
			attack: 3,
			health: 6,
			fast: false,
			last: true,
			loot: function(level){
				var amt = rewardResource("metal", 5, level, true);
				message("What a surprise, the Meltimp is melting! You find a healthy stack of " + prettify(amt) + " metal where it used to be!", "Loot", "*cubes", null, 'primary');
				checkAchieve("meltingTimed");
			}
		},
		Sweltimp: {
			location: "Melting",
			world: 50,
			attack: 1.3,
			health: 2,
			fast: true,
			loot: function(level){
				var amt = rewardResource("metal", 2, level, true);
				message("That Sweltimp chucked " + prettify(amt) + " bars of metal right at your head! You'll take it though, thanks guy!", "Loot", "*cubes", null, 'primary');
			}
		},
		Indianimp: {
			location: "Doom",
			last: true,
			world: 33,
			attack: 1.07,
			health: 0.9,
			fast: true,
			loot: function (level) {
				checkAchieve("doomTimed");
				var amt = rewardResource("metal", 2, level, true);
				message("Indianimp 掉落了 " + prettify(amt) + " 金属!", "Loot", "*cubes", null, 'primary');
				if (game.global.runningChallengeSquared) return;
				if (game.global.challengeActive == "Trapper"){
					game.challenges.Trapper.onComplete();
				}
				if (game.global.challengeActive == "Meditate"){
					game.challenges.Meditate.onComplete();
				}
			}
		},
		Warden: {
			location: "Prison",
			last: true,
			world: 80,
			attack: 2,
			health: 3,
			fast: false,
			loot: function (level) {
				checkAchieve("prisonTimed");
				if (game.global.runningChallengeSquared) return;
				if (game.global.challengeActive == "Electricity" || game.global.challengeActive == "Mapocalypse") {
					game.challenges[game.global.challengeActive].onComplete();
				}
			}
		},
		//Putting Bionic Wonderland stuff right.... here cause why not
		Robotrimp: {
			location: "Bionic",
			last: true,
			world: 125,
			attack: 2.1,
			health: 2.9,
			fast: false,
			loot: function (level) {
				var mapLevel = game.global.mapsOwnedArray[getMapIndex(game.global.currentMapId)].level;
				if (mapLevel >= game.global.world + 45) giveSingleAchieve("Bionic Sniper");
				if (mapLevel >= game.global.world + 200) giveSingleAchieve("Bionic Nuker");
				checkAchieve("bionicTimed");
				var amt1 = rewardResource("wood", 1, level, true);
				var amt2 = rewardResource("food", 1, level, true);
				message("Robotrimp惊慌失措。战利品检查显示: " + prettify(amt1) + " 木头和 " + prettify(amt2) + " 食物。极好的。", "Loot", "*cogs", null, 'primary');
				if (game.global.challengeActive == "Crushed") {
					game.challenges.Crushed.onComplete();
				}
			}
		},
		Mechimp: {
			location: "Bionic",
			world: 125,
			attack: 1,
			health: 1.5,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", .25, level, true);
				message("Mechimp逃离了。 你获得奖励: " + prettify(amt) + " 金属条。 好哇。", "Loot", "*cubes", null, 'primary');
			}
		},
		Destructimp: {
			location: "Bionic",
			world: 125,
			attack: 1.4,
			health: 0.8,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", .25, level, true);
				message("破坏程序短路了。打捞结果: " + prettify(amt) + " 金属条。 还可以接受。", "Loot", "*cubes", null, 'primary');
			}
		},
		Terminatimp: {
			location: "Bionic",
			world: 125,
			attack: 1.2,
			health: 1.2,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", .25, level, true);
				message("终端mp已终止。发现了: " + prettify(amt) + " 金属条。再见。", "Loot", "*cubes", null, 'primary');
			}
		},
		Autoimp: {
			location: "Bionic",
			world: 125,
			attack: 1.4,
			health: 1.3,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", .5, level, true);
				message("Autoimp 强制退出。内存转储提供 " + prettify(amt) + " 金属条，没有线索。这是一个功能!", "Loot", "*cubes", null, 'primary');
			}
		},
		Artimp: {
			location: "Bionic",
			world: 125,
			attack: 1.3,
			health: 1.5,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("metal", 0.3, level, true);
				message("阿提姆飞船无声地溅射、呼呼、哔哔，然后掉落 " + prettify(amt) + " 完美的金属立方体在地上。立体派艺术是你最喜欢的!", "Loot", "*cubes", null, 'primary');
			}
		},
		//End Bionic Wonderland stuff
		//Start Imploding Star stuff
		Neutrimp: {
			location: "Star",
			last: true,
			world: 170,
			attack: 1.3,
			health: 2.5,
			fast: true,
			loot: function (level) {
				checkAchieve("starTimed");
				var amt1 = rewardResource("wood", 1.5, level, true);
				var amt2 = rewardResource("metal", 1.5, level, true);
				message("Neutrimp发出喘息、闪烁、尖叫，然后噗的一声变成了迅速消散的紫色云。你花了一些时间试图弄懂你刚刚看到的，但环顾四周，你发现了 " + prettify(amt1) + " 木头和 " + prettify(amt2) + " 金属!", "Loot", "*cogs", null, 'primary');
				if (game.global.challengeActive == "Devastation") {
					game.challenges.Devastation.onComplete();
				}
				if (game.global.challengeActive == "Obliterated"){
					giveSingleAchieve("Imploderated")
				}
			}
		},
		Fusimp: {
			location: "Star",
			world: 170,
			attack: 1.4,
			health: 1.8,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("metal", .5, level, true);
				message("火球爆炸了，在后面掉落了 " + prettify(amt) + " 金属棒和相当剂量的辐射。", "Loot", "*cubes", null, 'primary');
			}
		},
		Hydrogimp: {
			location: "Star",
			world: 170,
			attack: 1.8,
			health: 2.2,
			fast: false,
			loot: function (level) {
				var amt = rewardResource("food", 1, level, true);
				message("Before you can blink, the Hydrogimp vaporizes. That's fine though, it left " + prettify(amt) + " food for you!", "Loot", "apple", null, 'primary');
			}
		},
		Carbimp: {
			location: "Star",
			world: 170,
			attack: 1,
			health: 4,
			fast: true,
			loot: function (level) {
				var amt = rewardResource("wood", 1, level, true);
				message("The Carbimp begins to crackle and shrink. Within a few seconds, all that's left is " + prettify(amt) + " wood.", "Loot", "tree-deciduous", null, 'primary');
			}
		},
		//End Imploding Star stuff
		Improbability: {
			locked: 1,
			location: "World",
			last: true,
			world: 59,
			attack: 1.2,
			health: 6,
			fast: true,
			loot: function (level) {
				if (game.global.spireActive) return;
				if (!game.global.brokenPlanet && game.global.universe == 1) planetBreaker();
				if (game.global.runningChallengeSquared) return;
				var amt = (game.global.world >= mutations.Corruption.start(true)) ? 10 : 5;
				if (game.global.universe == 2) amt = 1;
				if (game.global.challengeActive == "Domination") amt *= 3;
				if (getTotalPortals() > 0 || game.global.portalActive){
					amt = rewardResource("helium", amt, level);
					message("You managed to steal " + prettify(amt) + " " + heliumOrRadon(true) + "s from that Improbability. That'll teach it.", "Loot", heliumIcon(true), 'helium', 'helium');
				}
				if (game.global.challengeActive == "Slow" && game.global.world == 120){
					game.challenges.Slow.onComplete();
				}
				else if ((game.global.challengeActive == "Life" && game.global.world == 110) || (game.global.challengeActive == "Nom" && game.global.world == 145) || (game.global.challengeActive == "Toxicity" && game.global.world == 165) || ((game.global.challengeActive == "Watch" || game.global.challengeActive == "Lead") && game.global.world >= 180) || (game.global.challengeActive == "Corrupted" && game.global.world >= 190) || (game.global.challengeActive == "Domination" && game.global.world >= 215)){
					var challenge = game.global.challengeActive;
					if (game.global.challengeActive == "Watch" && !game.challenges.Watch.enteredMap && game.buildings.Nursery.purchased == 0) giveSingleAchieve("Grindless");
					if (game.global.challengeActive == "Lead" && game.upgrades.Gigastation.done <= 1) giveSingleAchieve("Unsatisfied Customer");
					if (game.global.challengeActive == "Lead" && game.stats.battlesLost.value <= 100) giveSingleAchieve("Leadership");
					if (game.global.challengeActive == "Corrupted" && !game.challenges.Corrupted.hiredGenes && game.jobs.Geneticist.owned == 0) giveSingleAchieve("Organic Trimps");
					if (game.global.challengeActive == "Toxicity" && game.challenges.Toxicity.highestStacks <= 400) giveSingleAchieve("Trimp is Poison");
					if (game.global.challengeActive == "Life"){
						if (game.challenges.Life.lowestStacks == 150) giveSingleAchieve("Very Sneaky");
						game.challenges.Life.abandon();
					}
					var reward = (game.challenges[challenge].heliumMultiplier) ? game.challenges[challenge].heliumMultiplier : 2;
					reward = game.challenges[challenge].heldHelium * reward;
					message("You have completed the " + challenge + " challenge! You have been rewarded with " + prettify(reward) + " Helium, and you may repeat the challenge.", "Notices");
					game.challenges[challenge].heldHelium = 0;
					game.global.challengeActive = "";
					addHelium(reward);
					if (challenge == "Domination") game.challenges.Domination.abandon();
				}
				else if (game.global.challengeActive == "Mapology" && game.global.world == 100){
					game.challenges.Mapology.onComplete();
				}
			}
		},
		Omnipotrimp: {
			locked: 1,
			location: "World",
			last: true,
			world: 59,
			attack: 1.2,
			health: 6,
			fast: true,
			loot: function (level) {
				if (game.global.spireActive){
					return;
				}
				if (game.global.challengeActive == "Eradicated" && game.global.world >= 59 && !game.global.brokenPlanet) planetBreaker();
				if (!game.global.runningChallengeSquared){
					var amt = 30;
					amt = rewardResource("helium", amt, level);
					message("You managed to steal " + prettify(amt) + " " + heliumOrRadon(true) + " from that Omnipotrimp. That'll teach it.", "Loot", heliumIcon(true), 'helium', 'helium');
				}
				if (game.global.world % 5 == 0){
					message("The Omnipotrimp explodes, killing all of your soldiers!", "Combat", null, null, 'trimp');
					game.stats.trimpsKilled.value += game.resources.trimps.soldiers;
					game.global.soldierHealth = 0;
					game.global.fighting = false;
					game.resources.trimps.soldiers = 0;
					updateGoodBar();
				}
			}
		},
		Mutimp: {
			location: "World",
			locked: 1,
			attack: 3,
			health: 6,
			fast: true,
			loot: function (level) {
				amt = rewardResource("metal", 5, level);
				message("Radioactive waste spills to the ground as the Mutimp falls. You send a few Trimps to grab the shiny stuff in the toxic sludge, which ends up being " + prettify(amt) + " bars of metal!", "Loot", "*cubes", null, 'primary');
			}
		},
		Hulking_Mutimp: {
			location: "World",
			locked: 1,
			attack: 5,
			health: 12,
			fast: true,
			loot: function (level) {
				amt = rewardResource("metal", 8, level);
				message("Radioactive waste spills to the ground as the Hulking Mutimp falls. You send a few Trimps to grab the shiny stuff in the toxic sludge, which ends up being " + prettify(amt) + " bars of metal!", "Loot", "*cubes", null, 'primary');
			}
		},
		//Exotics
		Goblimp: {
			location: "Maps",
			locked: 1,
			world: 6,
			attack: 1,
			health: 1,
			dropDesc: "掉落 6x 宝石",
			fast: false,
			loot: function (level) {
				var amt = rewardResource("gems", 3, level, true);
				message("那个Goblimp掉落了 " + prettify(amt) + " 宝石! 多好的兄弟!", "Loot", "*diamond", "exotic", 'exotic');
				game.unlocks.impCount.Goblimp++;
			}
		},
		Feyimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			dropDesc: "掉落 15x 宝石",
			fast: false,
			loot: function (level) {
				if (game.resources.gems.owned == 0) 	fadeIn("gems", 10);
				var amt = rewardResource("gems", 7.5, level);
				message("那个Feyimp给了你 " + prettify(amt) + " 宝石! 谢谢，Feyimp!", "Loot", "*diamond", "exotic", "exotic");
				game.unlocks.impCount.Feyimp++;
			}
		},
		Flutimp: {
			location: "Maps",
			locked: 1,
			world: 6,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "掉落碎片",
			loot: function (level) {
				var amt = rewardResource("fragments", 1, level, true);
				message("你偷了 " + prettify(amt) + " 碎片从那个小恶魔那里 !虽然看起来她并不需要他们，但也不要觉得不好。", "Loot", "th", "exotic", "exotic");
				game.unlocks.impCount.Flutimp++;
			}
		},
		Tauntimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "现有的脆皮最大值增加0.3%",
			loot: function () {
				var amt = Math.ceil(game.resources.trimps.max * 0.003);
				if (game.global.challengeActive == "Downsize"){
					amt = game.global.totalGifts + game.unlocks.impCount.TauntimpAdded + 10;
					amt += countTotalHousingBuildings();
					amt = Math.ceil(amt * 0.003);
				}
				game.unlocks.impCount.Tauntimp++;
				game.unlocks.impCount.TauntimpAdded += amt;
				amt = (game.global.challengeActive == "Trapper" || game.global.challengeActive == "Trappapalooza") ? addMaxHousing(amt, false) : addMaxHousing(amt, true);
				var msg = "It's nice, warm, and roomy in that dead Tauntimp. ";
				if (game.global.challengeActive != "Trapper" && game.global.challengeActive != "Trappapalooza"){
					msg += "You found ";
					if (amt == 1) msg += prettify(amt) + " Trimp inside, and it looks hella bored.";
					else msg += prettify(amt) + " Trimps inside, and they all seem content to stay living there!";
					message(msg, "Loot", "gift", "exotic", "exotic");
				}
				else {
					message(msg + " 这个房间大得足够容纳 " + prettify(amt) + " 脆皮" + ((amt == 1) ? "" : "") + " 在里面生活" + ((amt == 1) ? ", 虽然它会很孤独。" : "!"), "Loot", "gift", "exotic", "exotic");
				}
			}
		},
		Whipimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "脆皮资源生产速度增加0.3%",
			loot: function () {
				game.unlocks.impCount.Whipimp++;
				game.jobs.Farmer.modifier *= 1.003;
				game.jobs.Lumberjack.modifier *= 1.003;
				game.jobs.Miner.modifier *= 1.003;
				game.jobs.Scientist.modifier *= 1.003;
				game.jobs.Dragimp.modifier *= 1.003;
				game.jobs.Explorer.modifier *= 1.003;
				var amt = Math.pow(1.003, game.unlocks.impCount.Whipimp);
				amt = (amt - 1) * 100;
				var s = (game.unlocks.impCount.Whipimp == 1) ? "" : "";
				message("看见惠皮普" + s + " 坠落，会让你的所有脆皮工作效率提升 " + amt.toFixed(2) + "% !", "Loot", "star", "exotic", "exotic");
			}
		},
		Venimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "脆皮繁殖速度增加0.3%",
			loot: function () {
				game.unlocks.impCount.Venimp++;
				var amt = Math.pow(1.003, game.unlocks.impCount.Venimp);
				amt = (amt - 1) * 100;
				message("The ground up Venimp now increases your Trimps' breed speed by " + amt.toFixed(2) + "%!", "Loot", "glass", "exotic", "exotic");
			}
		},
		Jestimp: {
			location: "Maps",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "45秒生产1个随机资源",
			loot: function () {
				var eligible = ["food", "wood", "metal", "science"];
				if (game.jobs.Dragimp.owned > 0) eligible.push("gems");
				var roll = Math.floor(Math.random() * eligible.length);
				var item = eligible[roll];
				var amt = simpleSeconds(item, 45);
				amt = scaleToCurrentMap(amt);
				addResCheckMax(item, amt, null, null, true);
				message("那个Jestimp给了你 " + prettify(amt) + " " + item + "!", "Loot", "*dice", "exotic", "exotic");
				game.unlocks.impCount.Jestimp++;
			}
		},
		Titimp: {
			location: "Maps",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "+100% 攻击在本地图中",
			loot: function () {
				var timeRemaining = parseInt(game.global.titimpLeft, 10);
				if (timeRemaining > 0) {
					timeRemaining += 30;
					if (timeRemaining > 45) timeRemaining = 45;
				}
				else timeRemaining = 30;
				game.global.titimpLeft = timeRemaining;
				message("那个Titimp使你的脆皮非常强壮!", "Loot", "*hammer", "exotic", "exotic");
			}
		},
		Chronoimp: {
			location: "Maps",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "所有基本资源5秒的产量",
			loot: function () {
				var eligible = ["food", "wood", "metal", "science"];
				if (game.jobs.Dragimp.owned > 0) eligible.push("gems");
				var cMessage = "那个Chronoimp掉落了 ";
				for (var x = 0; x < eligible.length; x++){
					var item = eligible[x];
					var amt = simpleSeconds(item, 5);
					amt = scaleToCurrentMap(amt);
					addResCheckMax(item, amt, null, null, true);
					cMessage += prettify(amt) + " " + cnItem(item);
					if (x == (eligible.length - 1)) cMessage += "!";
					else if (x == (eligible.length - 2)) cMessage += ", 和 ";
					else cMessage += ", ";
				}
				message(cMessage, "Loot", "hourglass", "exotic", "exotic");
				game.unlocks.impCount.Chronoimp++;
			}
		},
		Magnimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 1,
			health: 1,
			fast: false,
			dropDesc: "0.3%额外的战利品从地图和区域（除了氦）",
			loot: function () {
				game.unlocks.impCount.Magnimp++;
				var amt = Math.pow(1.003, game.unlocks.impCount.Magnimp);
				amt = (amt - 1) * 100;
				message("你杀死了一个Magnimp! 强大的磁力现在会增加你的战利品 " + amt.toFixed(2) + "%!", "Loot", "magnet", "exotic", "exotic");
			}
		},
		Skeletimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 0.77,
			health: 2,
			fast: false,
			loot: function () {
				message("你的Trimps设法从Skeletimp中取出一块保存完好的骨头！", "Loot", "italic", null, "bone");
				game.global.b++;
				game.global.lastSkeletimp = new Date().getTime();
				updateSkeleBtn();
			}
		},
		Megaskeletimp: {
			location: "World",
			locked: 1,
			world: 1,
			attack: 0.99,
			health: 2.5,
			fast: false,
			loot: function () {
				message("That was a pretty big Skeletimp. Your Trimps scavenged the remains and found 2 perfectly preserved bones!", "Loot", "italic", null, "bone");
				game.global.b += 2;
				game.global.lastSkeletimp  = new Date().getTime();
				updateSkeleBtn();
			}
		}

	},

	mapConfig: {
		names: {
			prefix: ["静悄悄的", "沙地的", "小的", "大的", "腐臭的", "疲倦的", "搞笑的", "哭泣的", "多风的", "可怕的", "肮脏的", "恶劣的",
			"红的", "黑的", "歌唱", "炽烈的", "岩石", "闹鬼的", "被遗忘的", "悲惨的", "被诅咒的", "污染的", "神佑的", "神圣的",
			"被遗弃的", "自然的", "被施魔法的", "有魔力的", "平静的", "崎岖的", "暴力的", "不可思议的", "秘密的", "被禁止的", "被施巫术的", 
			"黑暗的", "光明的", "宏伟的", "邪恶的", "圣洁的", "圣光的", "亵渎的", "寂静的", "不朽的", "地下的", "温和的", "寒冷的", 
			"泥泞的", "潮湿的", "多雾的", "湿润的", "干燥的", "腐败的", "污秽的", "危险的", "被损毁的", "枯萎的", "清澈的", "冻结的", "简单的", "永恒的"],
			suffix: ["Creek.Sea", "Coast.Sea", "Swamp.Sea", "Forest.Forest", "Mountain.Mountain", "Beach.Sea", "Hill.Mountain", "Butte.Mountain",
			"Ridge.Mountain", "Mesa.Mountain", "Valley.Depths", "Peak.Mountain", "Canyon.Depths", "Plateau.Mountain", "Crag.Depths",
			"Crater.Depths", "Oaks.Forest",  "Volcano.Mountain", "Glacier.Sea",  "Brook.Sea", "Cave.Depths",  "Sea.Sea", "Ocean.Sea",
			"Lake.Sea", "Jungle.Forest", "Island.Sea", "Ruins.Depths", "Temple.Depths", "Bog.Sea", "Grove.Forest", "Jungle.Forest",
			"Thicket.Forest", "Woods.Forest", "Oasis.Forest", "Mineshaft.Depths", "Tunnel.Depths", "Depths.Depths", "Cavern.Depths",
			"Gardens.Plentiful", "Gardens.Plentiful", "Gardens.Plentiful", "Gardens.Plentiful", "Gardens.Plentiful", "Gardens.Plentiful",
			"Gardens.Plentiful", "Gardens.Plentiful", "Gardens.Plentiful", "Gardens.Plentiful"]
		},
		locations: {
		//Add new resources to function getMapIcon in updates.js to get icons on maps
			Sea: {
				resourceType: "Food"
			},
			Mountain: {
				resourceType: "Metal"
			},
			Forest: {
				resourceType: "Wood"
			},
			Depths: {
				resourceType: "Gems"
			},
			Plentiful: {
				resourceType: "Any"
			},
			Hell: {
				resourceType: "Metal",
				upgrade: "Portal"
			},
			Prismatic: {
				resourceType: "Any",
				upgrade: "Prismalicious"
			},
			Block: {
				resourceType: "Wood",
				upgrade: "Shieldblock"
			},
			Wall: {
				resourceType: "Food",
				upgrade: "Bounty"
			},
			Melting: {
				resourceType: "Metal",
				upgrade: "SmithFree"
			},
			Doom: {
				resourceType: "Metal",
				upgrade: [ "AncientTreasure", "Relentlessness"]
			},
			Prison: {
				resourceType: "Food",
				upgrade: "Keys"
			},
			Bionic: {
				resourceType: "Any",
				upgrade: ["roboTrimp", "Geneticistassist"]
			},
			Void: {
				resourceType: "Any",
				upgrade: ["AutoStorage", "Heirloom", "ImprovedAutoStorage", "MapAtZone", "AutoEquip"]
			},
			Star: {
				resourceType: "Metal"
			},
			All: {
				resourceType: "Metal"
			}
		},
		sizeBase: 50,
		sizeRange: 25,
		difficultyBase: 1.2,
		difficultyRange: 0.45,
		lootBase: 1.3,
		lootRange: 0.3
	},

	mapUnlocks: {
		roboTrimp: {
			world: 125,
			level: "last",
			icon: "*chain",
			title: "机械脆皮",
			canRunWhenever: true,
			filterUpgrade: true,
			specialFilter: function (world) {
				var tier = Math.floor((world - 125) / 15);
				return ((game.global.bionicOwned == tier + 1) || (game.global.roboTrimpLevel == tier));
			},
			getShriekValue: function () {
				var level = game.global.roboTrimpLevel;
				if (level == 0) return 1;
				if (level == 1) return 0.85;
				return (0.85 * Math.pow(0.90, level - 1));
			},
			createMap: function(tier) {
				game.global.bionicOwned++;
				if (game.global.bionicOwned == 1)
					message("你发现了一个通往仿生仙境的地图。听起来很有趣!", "Story");
				else
					message("你找到了一个更高级版本的仿生仙境的地图!看起来很吓人……你的科学家提醒你，你一次只能携带3个非常重的金属地图。", "Story");
				var roman = romanNumeral(tier + 1);
				createMap(((tier * 15) + 125), "仿生仙境 " + roman, "Bionic", 3, 100, 2.6, true);
				purgeBionics();
			},
			fire: function (fromTalent) {
				var level = game.global.mapsOwnedArray[getMapIndex(game.global.currentMapId)].level;
				var bionicTier = parseInt(((level - 125) / 15), 10) + 1;
				if (bionicTier == game.global.bionicOwned) {
					this.createMap(bionicTier);
				}
				if (fromTalent === true) return;
				if (bionicTier - 1 == game.global.roboTrimpLevel) {
					if (game.global.roboTrimpLevel == 0){
						cancelTooltip();
						var text = "你接近了一个孤立着的小机械脆皮。因为你很擅长训练别人，所以你决定带着他一起走。他增加你<b>20%</b>的额外伤害，而且有特殊的能力。你可以通过鼠标悬停在新的<span class='icomoon icon-chain'></span>图标上来了解更多有关特殊能力的信息。<br/><br/>你同时发现了一张加强版的仿生仙境地图。你相信那里有另一只机械脆皮正需要'拯救'。";
						if (game.options.menu.tooltips.enabled == 0) text += '<br/><br/><b>Just a heads up</b>: You have tooltips disabled, so you will need to hold shift when you mouse over the <span class="icomoon icon-chain"></span> to read about it.';
						tooltip('confirm', null, 'update', text, null, 'RoboTrimp');
						game.global.roboTrimpLevel = 1;
						document.getElementById("chainHolder").style.visibility = 'visible';
					}
					else {
						game.global.roboTrimpLevel++;
						var values = game.global.roboTrimpLevel;
						values = [(values) * 20, ((1 - this.getShriekValue()) * 100).toFixed(1)];
						message("<span class='icomoon icon-chain'></span> Hey look, another baby RoboTrimp! You decide to add him to your collection. You now deal " + Math.floor(values[0]) + "% extra damage thanks to your pets, and MagnetoShriek now removes " + Math.floor(values[1]) + "% of an Improbability's attack", "Notices");
					}
				}
			}
		},
		Geneticistassist: {
			world: 170,
			level: 79,
			icon: "*clipboard",
			title: "Geneticistassist",
			canRunOnce: true,
			filterUpgrade: true,
			specialFilter: function (){
				return (!game.global.Geneticistassist);
			},
			fire: function () {
				tooltip('The Geneticistassist', null, 'update');
				game.global.Geneticistassist = true;
				unlockJob("Geneticist");
				addNewSetting("GeneticistassistTarget");
				addNewSetting("geneSend");
			}
		},
		AutoStorage: {
			world: 75,
			level: "last",
			icon: "*eye4",
			title: "吉祥的存在",
			canRunOnce: true,
			filterUpgrade: true,
			specialFilter: function(world) {
				return !game.global.autoStorageAvailable;
			},
			fire: function(){
				var text = "在虚空中，一个吉祥的存在延伸出来并充满你的脑海。你感觉整个世界都非常和平。它询问你你最渴望的是什么，然后瞬间读取到了你的思想，说你想要脆皮足够聪明来自我管理仓库。这个存在告诉你愿望已经完成了，然后就消失了。你突然后悔没有要求回家。";
				tooltip('confirm', null, 'update', text, null, 'Auspicious Presence');
				game.global.autoStorageAvailable = true;
				document.getElementById("autoStorageBtn").style.display = "block";
				createHeirloom();
				message("You found an Heirloom!", "Loot", "*archive", null, "secondary", null, null, true);
			}
		},
		ImprovedAutoStorage: {
			world: 150,
			level: "last",
			icon: "*eye4",
			title: "Auspicious Presence Part II",
			canRunOnce: true,
			filterUpgrade: true,
			specialFilter: function(world) {
				return !game.global.improvedAutoStorage;
			},
			fire: function(){
				var text = "<p>From the void, an auspicious presence reaches out and fills your mind. You feel at peace with the world. It asks you what you desire most. Wait... hasn't this happened before? Last time you asked for your Trimps to be smart enough to manage storage structures on their own. You can make it better this time! You excitedly ask for your Trimps to waste less resources when managing resources on their own. The presence lets you know that it is done, then dissipates. You get serious déjà-vu while regretting not asking to go home.</p><p style='font-weight: bold'>From now on, storage facilities will be constructed instantly. If you collect more resources from one source than you can hold, the extra resources will be used to build new storage facilities without wasting any resources. You may not be home, but your Trimps are now quite talented!</p>";
				tooltip('confirm', null, 'update', text, null, 'Auspicious Presence Part II', null, null, true);
				enableImprovedAutoStorage();
				createHeirloom();
				message("You found an Heirloom!", "Loot", "*archive", null, "secondary");
			}
		},
		MapAtZone: {
			world: 225,
			level: "last",
			icon: "*eye4",
			title: "Auspicious Presence Part III",
			canRunOnce: true,
			filterUpgrade: true,
			specialFilter: function(world) {
				return !game.global.canMapAtZone;
			},
			fire: function(){
				var text = "<p>From the void, an auspicious presence reaches out and fills your mind. You feel at peace with the world. It asks you what you desire most. Wait... how many times has this happened now? You're fairly positive that there was something you regretted not asking last time, but you can't quite remember. You've asked for Trimps to be able to manage storage structures, and you've asked for them to be better at managing those structures. Even though you're content with your storage solutions, you suddenly realize the perfect request! You wish the Trimps would stop pushing so far through the Zones while you're sleeping, so you ask for a way to tell the Trimps to stop fighting at a Zone of your choosing. The presence lets you know that it is done, then dissipates. You realize as soon as it leaves that you could have asked to go home, but you don't really want to anymore. Next time you'll make sure to ask for invincible Trimps though, that may have been a better choice.</p><p style='font-weight: bold'>From now on, you have access to the Map At Zone setting. This setting can be accessed through the Map Sidebar, Settings, or the 'Configure Maps' popup!</p>";
				tooltip('confirm', null, 'update', text, null, 'Auspicious Presence Part III', null, null, true);
				game.global.canMapAtZone = true;
				addNewSetting("mapAtZone");
				createHeirloom();
				message("You found an Heirloom!", "Loot", "*archive", null, "secondary");
			}
		},
		AutoEquip: {
			world: 350,
			level: "last",
			icon: "*eye4",
			title: "Auspicious Presence Part IV",
			canRunOnce: true,
			filterUpgrade: true,
			specialFilter: function(world){
				return !game.global.autoEquipUnlocked;
			},
			fire: function(){
				var text = "<p>From the void, an auspicious presence reaches out and fills your mind. You feel at peace with the world. It asks you what you desire most. Wait... This has DEFINITELY happened before... hasn't it? You're pretty sure it has, but you have no actual memory of it. But you do... but also you don't. Wait, who even are you? Where are you? What are you?</p><p>You sit on the ground and contemplate things for a few hours while the Auspicious Presence waits patiently. You finally stand up and demand that the Trimps become smart enough to level up their own equipment! You can't see how this could go badly. The presence lets you know that it is done, then it dissipates. As soon as it is gone, you realize you could have just asked for invincible Trimps, but you're pretty sure you'll remember next time.</p><p style='font-weight: bold'>From now on, you have access to AutoEquip!</p>";
				tooltip('confirm', null, 'update', text, null, 'Auspicious Presence Part IV', null, null, true);
				game.global.autoEquipUnlocked = true;
				toggleAutoEquip(true);
				createHeirloom();
				message("You found an Heirloom!", "Loot", "*archive", null, "secondary");
			}
		},
		AncientTreasure: {
			world: 33,
			level: "last",
			icon: "piggy-bank",
			title: "Ancient Treasure",
			canRunOnce: true,
			filterUpgrade: true,
			specialFilter: function(world) {
				return !game.portal.Relentlessness.locked;
			},
			fire: function(){
				addResCheckMax("food", game.resources.food.owned);
				addResCheckMax("wood", game.resources.wood.owned);
				addResCheckMax("metal", game.resources.metal.owned);
				message("After barely escaping a fierce boulder, you check out the relic you found in there. It glows extremely bright for a few seconds before disappearing, and you look at your storages to see that your Food, Wood, and Metal have been doubled!", "Story", "piggy-bank", "highlightStoryMessage");
			}
		},
		SmithFree: {
			world: 50,
			level: "last",
			icon: "*home5",
			title: "SmithFree",
			filterUpgrade: true,
			canRunOnce: true,
			fire: function(){
				game.buildings.Smithy.owned++;
				game.buildings.Smithy.purchased++;
				if (game.global.challengeActive == "Quest" && game.challenges.Quest.questId == 6) game.challenges.Quest.checkQuest();
				message("At the end of that very hot map, you find a tiny, dehydrated Smithy building. You bring it back to your town and drop it in a glass of water, and a full-sized Smithy instantly appears!", "Story", "*home5", "highlightStoryMessage");
			}
		},
		Heirloom: {
			world: 6,
			level: "last",
			icon: "*archive",
			title: "Heirloom",
			filterUpgrade: true,
			canRunWhenever: true,
			fire: function () {
				createHeirloom();
				if (game.global.world >= 60 && game.global.voidDeaths == 0 && game.global.voidBuff == "bleed") giveSingleAchieve("Survivor");
				message("You found an Heirloom!", "Loot", "*archive", null, "secondary");
			}
		},
		Keys: {
			world: 80,
			level: "last",
			icon: "*key4",
			title: "The Warden's Keys",
			filterUpgrade: true,
			canRunOnce: true,
			specialFilter: function () {
				return (game.global.prisonClear == 0);
			},
			fire: function () {
				message("You have slain the Warden and taken his keys. How weird would it be if they fit in that key hole on the portal?", "Story");
				game.challenges.Electricity.hasKey = true;
				game.global.prisonClear++;
			}
		},
		Relentlessness: {
			world: 33,
			level: "last",
			icon: "compressed",
			title: "Unleash the Crit",
			filterUpgrade: true,
			canRunOnce: true,
			specialFilter: function () {
				return game.portal.Relentlessness.locked;
			},
			fire: function () {
				message("You've never been here before. Like, ever. This entire place felt cold and unfamiliar. Where are you? Why have so many Trimps had to fall to get here? You're suddenly angry, it's time to take a stand.", "Story");
				message("You have permanantly unlocked a new Perk, Relentlessness, which will remain unlocked through portals.", "Notices");
				game.portal.Relentlessness.locked = false;
			}
		},
		Portal: {
			world: -1,
			level: "last",
			icon: "repeat",
			title: "Portal",
			filterUpgrade: true,
			canRunOnce: true,
			fire: function (level, fromGenerator) {
				if (!this.canRunOnce) return;
				var color = (game.global.universe == 2) ? "blue" : "green";
				var resource = heliumOrRadon();
				var messageText = (fromGenerator) ? "The world feels a little bit less angry as you fire off your handy Portal Generator. You can tell that somewhere in some dimension, a Megablimp is no more. In front of you, " + ((game.global.runningChallengeSquared) ? "a " + color + ", shining box appears" : "45 " + resource + " and a " + color + ", shining box appear") + " on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'." : "Don't ever let anyone tell you that you didn't just kill that Megablimp. Because you did. As he melts away into nothingness, you notice a " + color + ", shining box on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'.";
				message(messageText, "Story");
				game.global.portalActive = true;
				fadeIn("portalBtn", 10);
				if (game.global.runningChallengeSquared) return;
				fadeIn("helium", 10);
				addHelium(45);
				if (!fromGenerator){
					message("<span class='" + heliumIcon() + "'></span> 你从那个Blimp上提取到了 45 " + heliumOrRadon(true) + "! 既然你知道了该如何得到氦，你现在就能从普通的Blimp身上提取出 " + resource + " 。", "Story");
				}
				if (game.global.challengeActive == "Metal"){
					game.challenges.Metal.onComplete();
				}
				if (game.global.challengeActive == "Size"){
					game.challenges.Size.onComplete();
				}
				if (game.global.challengeActive == "Discipline"){
					game.challenges.Discipline.onComplete();
				}
				if (game.global.challengeActive == "Frugal"){
					game.challenges.Frugal.onComplete();
				}
				if (game.global.challengeActive == "Coordinate"){
					game.challenges.Coordinate.onComplete();
				}
			}
		},
		Prismalicious: {
			world: -1,
			level: "last",
			icon: "*shield2",
			title: "Prismalicious",
			filterUpgrade: true,
			canRunOnce: true,
			message: "Oh goodness, another Prism to polish!",
			fire: function(){
				unlockUpgrade("Prismalicious");
			}
		},
		Shieldblock: {
			world: 10,
			message: "那玩意儿掉了一本书。看起来不像一个普通的书。看起来...是块盾牌...",
			level: "last",
			icon: "book",
			title: "Shieldblock",
			filterUpgrade: true,
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("Shieldblock");
				if (game.global.runningChallengeSquared) return;
				if (game.global.challengeActive == "Scientist"){
					game.challenges.Scientist.onComplete();
				}
				if (game.global.challengeActive == "Trimp"){
					game.challenges.Trimp.onComplete();
				}
			}
		},
		Bounty: {
			world: -1,
			message: "It's all shiny and stuff. You're pretty sure you've never seen a book this shiny.",
			level: "last",
			icon: "book",
			title: "Bounty",
			filterUpgrade: true,
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockUpgrade("Bounty");
			}
		},
		Supershield: {
			world: -1,
			message: "你发现这本书会教你如何升级你的盾牌！",
			level: "last",
			icon: "book",
			title: "Supershield",
			prestige: true,
			last: 1,
			fire: function () {
				unlockUpgrade("Supershield");
			}
		},
		Dagadder: {
			world: -1,
			message: "你发现这本书会教你如何升级你的匕首!",
			level: "last",
			icon: "book",
			title: "Dagadder",
			prestige: true,
			last: 1,
			fire: function () {
				unlockUpgrade("Dagadder");
			}
		},
		Bootboost: {
			world: -1,
			message: "你发现这本书会教你如何升级你的靴子!",
			level: "last",
			icon: "book",
			title: "Bootboost",
			prestige: true,
			last: 1,
			fire: function () {
				unlockUpgrade("Bootboost");
			}
		},
		Megamace: {
			world: -1,
			message: "你发现这本书会教你如何升级你的狼牙棒!",
			level: "last",
			icon: "book",
			title: "Megamace",
			prestige: true,
			last: 2,
			fire: function () {
				unlockUpgrade("Megamace");
			}
		},
		Hellishmet: {
			world: -1,
			message: "你发现这本书会教你如何升级你的头盔!",
			level: "last",
			icon: "book",
			title: "Hellishmet",
			prestige: true,
			last: 2,
			fire: function () {
				unlockUpgrade("Hellishmet");
			}
		},
		Polierarm: {
			world: -1,
			message: "你发现这本书会教你如何升级你的长柄武器!",
			level: "last",
			icon: "book",
			title: "Polierarm",
			prestige: true,
			last: 3,
			fire: function () {
				unlockUpgrade("Polierarm");
			}
		},
		Pantastic: {
			world: -1,
			message: "你发现这本书会教你如何升级你的裤子!",
			level: "last",
			icon: "book",
			title: "Pantastic",
			prestige: true,
			last: 3,
			fire: function () {
				unlockUpgrade("Pantastic");
			}
		},
		Axeidic: {
			world: -1,
			message: "你发现这本书会教你如何升级你的战斧!",
			level: "last",
			icon: "book",
			title: "Axeidic",
			prestige: true,
			last: 4,
			fire: function () {
				unlockUpgrade("Axeidic");
			}
		},
		Smoldershoulder: {
			world: -1,
			message: "你发现这本书会教你如何升级你的护肩!",
			level: "last",
			icon: "book",
			title: "Smoldershoulder",
			prestige: true,
			last: 4,
			fire: function () {
				unlockUpgrade("Smoldershoulder");
			}
		},
		Greatersword: {
			world: -1,
			message: "你发现这本书会教你如何升级你的大剑!",
			level: "last",
			icon: "book",
			title: "Greatersword",
			prestige: true,
			last: 5,
			fire: function () {
				unlockUpgrade("Greatersword");
			}
		},
		Bestplate: {
			world: -1,
			message: "你发现这本书会教你如何升级你的胸甲!",
			title: "Bestplate",
			level: "last",
			icon: "book",
			prestige: true,
			last: 5,
			fire: function () {
				unlockUpgrade("Bestplate");
			}
		},
		Harmbalest: {
			world: -1,
			message: "You found a book that will teach you how to upgrade your Arbalest!",
			title: "Harmbalest",
			level: "last",
			specialFilter: function () {
				return (game.equipment.Arbalest.locked == 0);
			},
			icon: "book",
			prestige: true,
			last: 5,
			fire: function () {
				unlockUpgrade("Harmbalest");
			}
		},
		GambesOP: {
			world: -1,
			message: "You found a book that will teach you how to upgrade your Gambeson!",
			title: "GambesOP",
			level: "last",
			specialFilter: function () {
				return (game.equipment.Gambeson.locked == 0);
			},
			icon: "book",
			prestige: true,
			last: 5,
			fire: function () {
				unlockUpgrade("GambesOP");
			}
		},
		Speedexplorer: {
			world: -1,
			specialFilter: function (mapLevel) {
				var booksNeeded = Math.floor((mapLevel - this.next) / 10);
				return (booksNeeded > 0);
			},
			addToCount: true,
			level: [10, 20],
			icon: "book",
			title: "A well-hidden book",
			next: 10,
			fire: function (unused, fromAuto) {
				var mapLevel;
				if (!fromAuto){
					if (!getCurrentMapObject() || !getCurrentMapObject().level) return;
					var mapLevel = getCurrentMapObject().level;
				}
				else{
					mapLevel = game.global.world;
				}
				var booksNeeded = Math.floor((mapLevel - this.next) / 10);
				if (booksNeeded > 0){
					for (var x = 0; x < booksNeeded; x++) {
						unlockUpgrade("Speedexplorer");
						this.next += 10;
					}
					var copy = (booksNeeded == 1) ? "copy" : booksNeeded + " copies";
					message("The " + copy + " of 'Speedexplorer' under these bushes will certainly be useful!", "Unlocks", null, null, 'repeated', convertUnlockIconToSpan(this));
				}
			}
		},
		TheBlock: {
			world: -1,
			message: "神圣的奶牛！一个独特的地图！",
			level: [10, 20],
			icon: "th-large",
			title: "The Block",
			startAt: 11,
			blockU2: true,
			canRunOnce: true,
			fire: function () {
				message("你制作了一张地图！", "Story");
				createMap(11, "The Block", "Block", 2, 100, 1.3, true, true);
			}
		},
		TheWall: {
			world: -1,
			message: "Oh snap! Another unique map!",
			level: [10, 20],
			icon: "th-large",
			title: "The Wall",
			blockU2: true,
			startAt: 15,
			canRunOnce: true,
			fire: function () {
				message("你刚刚做了一张墙垣地图！", "Story");
				createMap(15, "The Wall", "Wall", 2, 100, 1.5, true, true);
			}
		},
		BigWall: {
			world: -1,
			message: "Oh snap! Another unique map!",
			level: [10, 20],
			icon: "th-large",
			title: "Big Wall",
			blockU1: true,
			startAt: 7,
			canRunOnce: true,
			fire: function () {
				message("You just made a map to Big Wall!", "Story");
				createMap(7, "Big Wall", "Wall", 4, 150, 3.5, true, true);
			}
		},
		ThePrison: {
			startAt: 80,
			level: [1, 10],
			icon: "th-large",
			canRunOnce: true,
			blockU2: true,
			title: "The Prison",
			fire: function () {
				game.global.mapsUnlocked = true;
				createMap(80, "The Prison", "Prison", 2.6, 100, 2.6, true);
				message("你找到了监狱！ 你对进去有一个不好的感觉...", "Story");
			}
		},
		BionicWonderland: {
			startAt: 125,
			level: [1, 15],
			icon: "th-large",
			canRunOnce: true,
			title: "Bionic Wonderland",
			fire: function () {
				message("你找到了一个地图通往映射到仿生仙境。 听起来很有趣！", "Story");
				game.global.bionicOwned++;
				createMap(125, "Bionic Wonderland", "Bionic", 3, 100, 2.6, true);
			}
		},
		ImplodingStar: {
			startAt: 170,
			level: [1, 15],
			icon: 'th-large',
			canRunOnce: true,
			title: 'Imploding Star',
			fire: function () {
				message("你发现了一个地图的星爆过冷的尺寸内。 温度是完美的！", "Story");
				createMap(170, "Imploding Star", "Star", 3, 100, 3.2, true);
			}
		},
		Mansion: {
			world: -1,
			startAt: 8,
			message: "你找到了建造一个大厦的蓝图! 你的脆皮会感到十分振奋！",
			level: [10, 20],
			icon: "*home4",
			title: "Mansion",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Mansion");
			}
		},
		Hotel: {
			world: -1,
			startAt: 14,
			message: "你找到了建造一个旅馆的蓝图! （一家体面的旅馆，当然！）",
			level: [10, 20],
			icon: "*office",
			title: "The Trimps' Guide to Cheap Hotel Construction",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Hotel");
			}
		},
		UberHut: {
			world: -1,
			startAt: 18,
			message: "This extremely technical book will teach anyone who can understand the big words how to make bigger huts.",
			level: [10, 20],
			icon: "book",
			title: "Hut hut hut",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("UberHut");
			}
		},
		UberHouse: {
			world: -1,
			startAt: 29,
			message: "This book talks about adding a second floor to your homes! Mind... blown...",
			level: [10, 20],
			icon: "book",
			title: "A Tale of Two Stories",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("UberHouse");
			}
		},
		UberMansion: {
			world: -1,
			startAt: 34,
			message: "This book will teach you how to make your Trimps share their mansions!",
			level: [10, 20],
			icon: "book",
			title: "Sharing is Caring",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("UberMansion");
			}
		},
		UberHotel: {
			world: -1,
			startAt: 40,
			message: "This book will teach you how to build smaller hotel rooms!",
			level: [5, 10],
			icon: "book",
			title: "The Art of Tiny Hotel Rooms",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("UberHotel");
			}
		},
		UberResort: {
			world: -1,
			startAt: 47,
			level: [5, 10],
			message: "Wow! This book! It's so Resortsfull!",
			icon: "book",
			title: "Time for a better vacation",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("UberResort");
			}
		},
		Resort: {
			world: -1,
			startAt: 25,
			message: "You found plans for a huge resort!",
			level: [10, 20],
			icon: "*building",
			title: "Time for a vacation",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Resort");
			}
		},
		Gateway: {
			world: -1,
			startAt: 30,
			message: "You found a key to Dimension ZZZ!",
			level: [10, 20],
			icon: "cog",
			title: "Transgalactic Gateway",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Gateway");
			}
		},
		Wormhole: {
			world: -1,
			startAt: 37,
			blockU2: true,
			message: "You found a crystal powerful enough to create wormholes!",
			level: [10, 20],
			icon: "link",
			title: "Inter-Dimensional Hole-Maker",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Wormhole");
			}
		},
		Collector: {
			world: -1,
			startAt: 50,
			message: "你发现了一些设计过于复杂的太阳能电池板的图纸。",
			level: [3, 19],
			icon: "dashboard",
			title: "Collector",
			canRunOnce: true,
			fire: function () {
				if (!this.canRunOnce) return;
				unlockBuilding("Collector");
			}
		},
		Trapstorm: {
			world: -1,
			startAt: 10,
			message: "A book that teaches your Foremen a new skill. Riveting.",
			level: [5, 15],
			icon: "book",
			title: "Trapstorm",
			canRunOnce: true,
			fire: function () {
				unlockUpgrade("Trapstorm");
			}
		},

		Nursery: {
			world: -1,
			startAt: 23,
			blockU2: true,
			message: "You found blueprints for some sort of nursery that can harness more power from gems.",
			level: [5, 20],
			icon: "home",
			title: "Nursery",
			canRunOnce: true,
			fire: function () {
				unlockBuilding("Nursery");
			}
		},
		//This one is for all maps
		gems: {
			world: -1,
			level: [0, 7],
			icon: "*diamond",
			title: "Gems",
			repeat: 5,
			fire: function (level) {
				var amt = rewardResource("gems", 0.5, level, true);
				message("你找到了 " + prettify(amt) + " 宝石! 好极了!", "Loot", "*diamond", null, "secondary");
			}
		},
		//This one is for depths maps
		Gems: {
			world: -1,
			level: [0, 4],
			repeat: 3,
			icon: "*diamond",
			title: "Gems",
			filter: true,
			fire: function (level) {
				var amt = rewardResource("gems", 0.5, level, true);
				message("你找到了 " + prettify(amt) + " 宝石! 好极了!", "Loot", "*diamond", null, "secondary");
			}
		},
		Any: {
			world: -1,
			level: [0, 2],
			icon: "*leaf2",
			title: "Food/Wood/Metal",
			repeat: 2,
			filter: true,
			fire: function (level) {
				var rand = Math.floor(Math.random() * 3);
				switch(rand) {
					case 0:
						game.mapUnlocks.Food.fire(level);
						break;
					case 1:
						game.mapUnlocks.Wood.fire(level);
						break;
					case 2:
						game.mapUnlocks.Metal.fire(level);
						break;
				}
			}
		},
		Metal: {
			world: -1,
			level: [0, 2],
			icon: "*cubes",
			title: "Metal",
			repeat: 2,
			filter: true,
			fire: function (level) {
				if (game.global.challengeActive == "Transmute"){
					message("As expected, there was no Metal here.", "Loot", "*cubes", null, "primary");
					return;
				}
				var amt = rewardResource("metal", 0.5, level, true);
				message("你发现了 " + prettify(amt) + " 金属条！ 不错！", "Loot", "*cubes", null, "primary");
			}
		},
		Food: {
			world: -1,
			level: [0, 2],
			icon: "apple",
			title: "Food",
			repeat: 2,
			filter: true,
			fire: function (level) {
				var amt = rewardResource("food", 0.5, level, true);
				message("那家伙在地上留下了 " + prettify(amt) + " 食物! 爽!", "Loot", "apple", null, "primary");
			}
		},
		Wood: {
			world: -1,
			level: [0, 2],
			icon: "tree-deciduous",
			title: "Wood",
			repeat: 2,
			filter: true,
			fire: function (level) {
				var amt = rewardResource("wood", 0.5, level, true);
				message("你发现了 " + prettify(amt) + "木头！ 干得相当漂亮！", "Loot", "tree-deciduous", null, "primary");
			}
		}
	},

	//if you put a function in here as fire, you won't have anything unlocked, the name is just for funsies
	//-1 is all worlds, -2 is even world numbers, -3 is odd world numbers, -5 is every 5th world
	//min is inclusive, max is exclusive. too lazy to fix
	//More important stuff should be towards the top in case of bailouts
	worldUnlocks: {
		Shield: {
			message: "你找到盾牌的图纸！ 它甚至会告诉你如何升级它，如果你有足够的木材。 对于坏家伙来说，这是很好的。",
			world: 1,
			title: "新装甲",
			level: 4,
			icon: "question-sign"
		},
		Boots: {
			message: "你找到了靴子的图纸！ 膨胀！",
			world: 1,
			level: 49,
			title: "新装甲",
			icon: "question-sign"
		},
		Dagger: {
			message: "你找到了匕首的图纸!真想不到!",
			world: 1,
			level: 19,
			title: "新武器",
			icon: "question-sign"
		},
		Mace: {
			message: "你找到了一个狼牙棒的图纸!",
			world: 2,
			level: 19,
			title: "新武器",
			icon: "question-sign"
		},
		Helmet: {
			message: "你找到了一个头盔的图纸！",
			world: 2,
			level: 49,
			title: "新装甲",
			icon: "question-sign"
		},
		Polearm: {
			message: "你发现了一个长柄武器设计图!",
			world: 3,
			level: 19,
			title: "新武器",
			icon: "question-sign"
		},
		Pants: {
			message: "你找到裤子的图纸！",
			world: 3,
			level: 49,
			title: "新装甲",
			icon: "question-sign"
		},
		Battleaxe: {
			message: "你找到了一个战斧的图纸！",
			world: 4,
			level: 19,
			title: "新武器",
			icon: "question-sign"
		},
		Shoulderguards: {
			message: "你找到了护肩的图纸！",
			world: 4,
			level: 49,
			title: "新装甲",
			icon: "question-sign"
		},
		Greatsword: {
			message: "你找到了巨剑的图纸！",
			world: 5,
			level: 19,
			title: "新武器",
			icon: "question-sign"
		},
		Breastplate: {
			message: "你找到了护胸甲的图纸！",
			world: 5,
			level: 49,
			title: "新装甲",
			icon: "question-sign"
		},
		//Non Equipment
		Bloodlust: {
			message: "你找到一本名为《嗜血》的古书。你应该看看它或别的什么。",
			world: 1,
			level: 9,
			icon: "book",
			title: "Bloodlust",
			fire: function() {
				unlockUpgrade("Bloodlust");
			}
		},
		Efficiency: {
			message: "嘿，这本书可能适合你!",
			world: -2,
			level: 9,
			icon: "book",
			title: "Efficiency",
			fire: function() {
				unlockUpgrade("Efficiency");
			}
		},
		Gym: {
			message: "嗨，瞧，一个新的健身房设计图!",
			world: 2,
			level: 4,
			blockU2: true,
			icon: "home",
			title: "新建筑",
			fire: function() {
				unlockBuilding("Gym");
				document.getElementById("blockDiv").style.visibility = "visible";
			}
		},
		Prism1: {
			message: "You find a small handcut gem that seems to coat you in a bubble of light when you hold it! You should have your Scientists research some way to polish it.",
			world: 2,
			level: 4,
			blockU1: true,
			icon: "*shield2",
			title: "Better than block",
			fire: function() {
				unlockUpgrade("Prismatic");
			}
		},
		TrainTacular: {
			message: "这本书是给您的培训师的！",
			world: -5,
			blockU2: true,
			level: 9,
			icon: "book",
			title: "TrainTacular",
			fire: function () {
				unlockUpgrade("TrainTacular");
			}
		},
		Smithy: {
			message: "Your equipment isn't going to cut it in this Universe. Better get someone to ugprade it for you!",
			world: 5,
			level: 9,
			blockU1: true,
			icon: "book",
			title: "Smithy",
			fire: function(){
				unlockBuilding("Smithy");
			}
		},
		Warpstation: {
			message: "是时候殖民星系了。",
			world: 60,
			level: 19,
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			title: "银河将是你的海洋",
			icon: "*rocket4",
			fire: function () {
				unlockBuilding("Warpstation");
			}
		},
		Gymystic: {
			world: -5,
			blockU2: true,
			startAt: 25,
			lastAt: 55,
			level: 44,
			icon: "book",
			message: "脆皮洞穴壁画预言了这本书的存在，你根本不知道它的存在。它有灰尘气味。",
			title: "一些旧的、布满灰尘的书",
			fire: function () {
				unlockUpgrade("Gymystic");
			}
		},
		Gymystic2: {
			world: -25,
			blockU2: true,
			startAt: 75,
			lastAt: 150,
			level: 54,
			icon: "book",
			displayAs: "Gymystic",
			message: "脆皮洞穴壁画预言了这本书的存在，你根本不知道它的存在。它有灰尘气味。",
			title: "一些旧的、布满灰尘的书",
			fire: function () {
				unlockUpgrade("Gymystic");
			}
		},
		Meteorologists: {
			world: 30,
			blockU1: true,
			level: 19,
			icon: "*radio2",
			canRunOnce: true,
			displayAs: "Meteorologists",
			message: "You've found an ancient relic that looks like some sort of mechanical dish. Perhaps you could train your Trimps to use this to your advantage!",
			title: "Mechanical Dish",
			fire: function(){
				this.canRunOnce = false;
				if (!game.global.runningChallengeSquared)
					unlockJob("Meteorologist");
			}
		},
		Dominance: {
			world: 70,
			level: 44,
			icon: "book",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			title: "Formation",
			fire: function () {
				unlockUpgrade("Dominance");
			}
		},
		  Barrier: {
			world: 80,
			level: 44,
			icon: "book",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			title: "队形",
			fire: function () {
				unlockUpgrade("Barrier");
			}
		},
		Potency: {
			message: "这本书将帮助你的脆皮产生更多的脆皮！",
			world: -5,
			level: 29,
			icon: "book",
			title: "",
			fire: function () {
				if (game.global.challengeActive == "Trapper" || game.global.challengeActive == "Trappapalooza"){
					message("Your Scientists let you know that your Trimps won't understand the book, but they offer to hold on to it for you for later. How nice of them!", "Notices");
					game.challenges[game.global.challengeActive].heldBooks++;
					return;
				}
				unlockUpgrade("Potency");
			}
		},
/* 		SuperShriek: {
			message: "This book will help your RoboTrimp shriek louder!",
			world: 183,
			level: 5,
			icon: "book",
			title: "MagnetoShriek is love, MagnetoShriek is life",
			fire: function () {
				unlockUpgrade("SuperShriek");
			}
		}, */
		//19 is for Armor
		Miner: {
			message: "你找到一本关于采矿的古书。通过一些研究，你应该能够教会我的脆皮们！",
			world: 1,
			level: 29,
			icon: "book",
			title: "矿工",
			fire: function () {
				if (game.global.challengeActive == "Metal" || game.global.challengeActive == "Transmute"){
					var challenge = game.challenges[game.global.challengeActive];
					message("Your Trimps simply do not understand what this book is talking about. It's blowing their minds. What is a 'Miner'?!", "Notices");
					challenge.fireAbandon = true;
					return;
				}
				unlockUpgrade("Miners");
			}
		},
		Trainer: {
			message: "You found a book about proper physical training!",
			blockU2: true,
			world: 3,
			level: 3,
			icon: "book",
			title: "加强你的方块游戏!",
			fire: function () {
				unlockUpgrade("Trainers");
			}
		},
		Scientist: {
			message: "你找到一本关于爱因斯坦脆皮的书。!",
			world: 1,
			level: 39,
			icon: "book",
			title: "科学家",
			fire: function () {
				if (game.global.challengeActive == "Scientist"){
					message("你的脆皮认为他们在科学上太擅长阅读你的愚蠢的书。。他们已经在研究传送门技术了!", "Notices");
					game.challenges.Scientist.fireAbandon = true;
					return;
				}
				unlockUpgrade("Scientists");
			}
		},
		Explorer: {
			message: "你找到了一本书，详细描述了独自探索的错综复杂之处!",
			world: 15,
			level: 39,
			icon: "book",
			title: "Explorer",
			fire: function () {
				if (game.upgrades.Explorers.allowed === 0) unlockUpgrade("Explorers");
			}
		},
		Speedscience: {
			message: "你找到了一本叫做《速度科学》的书!你认为它能做什么?!",
			brokenPlanet: -1,
			world: -2,
			level: 39,
			icon: "book",
			title: "Speedscience",
			fire: function () {
			if (game.global.challengeActive == "Scientist"){
				message("你找到一本叫《速度科学》的书，但你还没找到读它的人。真遗憾。", "Notices");
				game.challenges.Scientist.heldBooks++;
				return;
			}
				unlockUpgrade("Speedscience");
			}
		},
		Megascience: {
			message: "你找到了一本书叫《超级科学》!它似乎在现实中逐渐消失。",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -2,
			level: 39,
			icon: "book",
			title: "Megascience",
			hideU2: true,
			fire: function () {
				unlockUpgrade("Megascience");
			}
		},
		Gigastation: {
			message: "你找到了蓝图，详细说明如何升级你的作战计划。啊呀!",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -1,
			startAt: 61,
			lastAt: 69,
			level: 19,
			icon: "*make-group",
			title: "千兆站",
			fire: function () {
				unlockUpgrade("Gigastation");
			}
		},
		Gigastation2: {
			message: "你找到了蓝图，详细说明如何升级你的作战计划。啊呀!",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -2,
			startAt: 70,
			lastAt: 78,
			level: 19,
			icon: "*make-group",
			displayAs: "Gigastation",
			title: "千兆站",
			fire: function () {
				unlockUpgrade("Gigastation");
			}
		},
		Gigastation3: {
			message: "你找到了蓝图，详细说明如何升级你的作战计划。啊呀!!",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -33,
			startAt: 81,
			lastAt: 90,
			level: 19,
			icon: "*make-group",
			title: "Gigastation",
			displayAs: "Gigastation",
			fire: function () {
				unlockUpgrade("Gigastation");
			}
		},
		Gigastation4: {
			message: "你找到了蓝图，详细说明如何升级你的作战计划。啊呀!!",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -5,
			startAt: 95,
			lastAt: 170,
			level: 19,
			icon: "*make-group",
			title: "Gigastation",
			displayAs: "Gigastation",
			fire: function () {
				unlockUpgrade("Gigastation");
			}
		},
		Gigastation5: {
			message: "你找到了蓝图，详细说明如何升级你的作战计划。啊呀!",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -10,
			startAt: 180,
			lastAt: 229,
			level: 19,
			icon: "*make-group",
			displayAs: "Gigastation",
			title: "Gigastation",
			fire: function () {
				unlockUpgrade("Gigastation");
			}
		},
		Magmamancer: {
			message: "你会发现一本闷烧的书，看起来像是从这个星球的核心被推了出来。里面是用宝石和岩浆进行仪式的脆皮的画。摸起来很热，但是你随身携带，因为你已经有一段时间没有新的阅读材料了。",
			world: 230,
			level: 90,
			icon: "book",
			title: "Magmamancers",
			fire: function () {
				if (game.global.challengeActive == "Metal" || game.global.challengeActive == "Transmute"){
					var challenge = game.challenges[game.global.challengeActive];
					challenge.holdMagma = true;
					message("This book really doesn't help too much while you're dealing with the minerlessness of this dimension. Better let your scientists hold this one for you for a bit.", "Notices");
					return;
				}
				unlockUpgrade("Magmamancers");
			}
		},
		//49 is for weapon
		Speedfarming:{
			message: "你找到了一本叫做“速度农场”的书!它看起来美味!",
			brokenPlanet: -1,
			world: -1,
			level: 79,
			icon: "book",
			title: "Speedfarming",
			fire: function () {
				unlockUpgrade("Speedfarming");
			}
		},
		Megafarming:{
			message: "你发现了一本书叫《大型农场》它表明你实际上应该给你的庄稼浇水。太棒了!",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -1,
			level: 79,
			icon: "book",
			title: "Megafarming",
			hideU2: true,
			fire: function () {
				unlockUpgrade("Megafarming");
			}
		},

		Speedlumber: {
			message: "你找到了一本书叫《速度木材》!它看起来长。",
			brokenPlanet: -1,
			world: -1,
			level: 69,
			icon: "book",
			title: "Speedlumber",
			fire: function () {
				unlockUpgrade("Speedlumber");
			}
		},
		Megalumber: {
			message: "你找到了一本书叫《超级木材》!背面的引用上写着:“如果一个木三轮车能劈木头，木头能砍多少木头?”",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -1,
			level: 69,
			icon: "book",
			title: "Megalumber",
			hideU2: true,
			fire: function () {
				unlockUpgrade("Megalumber");
			}
		},
		Speedminer: {
			message: "你找到了一本叫《速度矿工》的书!",
			brokenPlanet: -1,
			world: -1,
			level: 59,
			icon: "book",
			title: "Speedminer",
			fire: function() {
				if (game.global.challengeActive == "Metal" || game.global.challengeActive == "Transmute"){
					var challenge = game.challenges[game.global.challengeActive];
					if (game.jobs.Scientist.owned > 0){
						var notS = (game.jobs.Scientist.owned == 1) ? "s" : "";
						message("Your Scientist" + needAnS(game.jobs.Scientist.owned) + " stare" + notS + " blankly at you for a moment, then slowly and quietly place" + notS + " the new book on the shelves.", "Notices");
					}
					else{
						message("You don't have any Scientists to not know how to handle this book, so everything's chill.", "Notices");
					}
					challenge.heldBooks++;
					return;
				}
				unlockUpgrade("Speedminer");
			}
		},
		Megaminer: {
			message: "You found a book called Megaminer! The front is really shiny and has a Trimp on it. Creepy, it seems to follow your eyes.",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: -1,
			level: 59,
			icon: "book",
			title: "Megaminer",
			hideU2: true,
			fire: function() {
				if (game.global.challengeActive == "Metal"){
					message("Your scientists appreciate the fact that you've managed to find another useless book, but they make sure to let you know it's still useless.", "Notices");
					game.challenges.Metal.heldMegaBooks++;
					return;
				}
				unlockUpgrade("Megaminer");
			}
		},
		Geneticist: {
			message: "Your Trimps report a strange bronze object on the floor, and you decide to come look at it. It looks freaky, so you ask one of your Trimps to pick it up first. He instantly starts itching his face and babbling off a bunch of science stuff, so you let another Trimp touch it and he does the same. This seems to make your Trimps smarter than Scientists, but may cause side effects.",
			brokenPlanet: 1,
			addClass: "brokenUpgrade",
			world: 70,
			level: 49,
			title: "The Great Bell of Trimp",
			icon: "bell",
			fire: function () {
				unlockJob("Geneticist");
			}
		},
		Foreman: {
			message: "You found a crafting foreman! He will build buildings automatically for you!",
			world: -1,
			level: 89,
			icon: "user",
			title: "Foreman",
			fire: function () {
				game.global.autoCraftModifier += 0.25;
				updateForemenCount();
			}
		},
		Anger: {
			world: 20,
			level: 99,
			blockU2: true,
			icon: "eye-open",
			title: "路的尽头",
			fire: function () {
				message(	"你往下看去，看到一个绿色的宝石似乎在回瞪你。你把它捡起来,感觉你身体内的肾上腺素激增。 也许最好把这个带回实验室进行一些研究。", "Story");
				unlockUpgrade("Anger");
			}
		},
		Rage: {
			world: 15,
			level: 99,
			blockU1: true,
			icon: "eye-open",
			title: "The Start Of A Journey",
			fire: function(){
				message("You look down and see a blue gem that seems to stare back. You pick it up and are immediately overwhelmed by feelings of intense power. You figure this could be used to focus your Portal Generator in this Universe.", "Story");
				unlockUpgrade("Rage");
			}
		},
		PrismaticPalace: {
			world: 20,
			level: 99,
			blockU1: true,
			icon: "certificate",
			title: "The Prismatic Palace Awaits...",
			fire: function () {
				message("You found a map to a strange place. Better go kill stuff in it!", "Story");
				createMap(20, "Prismatic Palace", "Prismatic", 4, 100, 4, true, true);
			}
		},
		MeltingPoint: {
			world: 50,
			level: 55,
			blockU1: true,
			icon: "*map",
			title: "Not a place to get fondue",
			fire: function () {
				message("This map is hot to the touch. Better go inside!", "Story");
				createMap(50, "Melting Point", "Melting", 4, 100, 3.5, true, true);
			}
		},
		Coordination: {
			message: "你会发现一本名为“协作”的古书。令人兴奋的。",
			world: -1,
			level: 99,
			get icon (){
				return (game.global.world == mutations.Magma.start() - 1) ?  "*archive2" : "book";
			},
			title: "Coordination",
			fire: function() {
				if (game.global.challengeActive == "Trimp"){
					if (!checkIfLiquidZone())
						message("你的科学家不认为尝试本书中的任何建议是一个非常聪明的想法", "Notices");
					game.challenges.Trimp.heldBooks ++;
					return;
				}
				unlockUpgrade("Coordination");
			}
		},
		Blockmaster: {
			message: "You found a book discussing tactics for better blocking!",
			blockU2: true,
			world: 4,
			level: 29,
			icon: "book",
			title: "Blockmaster",
			fire: function () {
				unlockUpgrade("Blockmaster");
			}
		},
		Egg: {
			message: "This egg looks crazy. Seriously, guys, come look at this crazy egg!",
			world: 17,
			level: 55,
			icon: "record",
			title: "Egg",
			fire: function () {
				if (game.upgrades.Egg.allowed === 0) unlockUpgrade("Egg");
			}
		},
		Doom: {
			world: 33,
			level: [15, 50],
			icon: "th-large",
			title: "Too dark to see",
			fire: function () {
				createMap(33, "Trimple Of Doom", "Doom", 3, 100, 1.8, true);
				message("这张地图有些奇怪。它似乎没有反射任何光线，只是纯粹的黑暗。", "Story");
			}
		},
		FirstMap: {
			world: 6,
			level: [1, 5],
			icon: "th-large",
			title: "Tricky Paradise",
			fire: function () {
				game.global.mapsUnlocked = true;
				unlockMapStuff();
				createMap(6, "Tricky Paradise", "Plentiful", 1.2, 45, 0.85);
				message("你找到了你的第一个地图! 前往你的地图室看看吧。", "Story");
			}
		},
		easterEgg: {
			world: -1,
			locked: true,
			level: [0, 99],
			title: "Colored Egg",
			icon: "*droplet",
			addClass: function () {
				return "easterEgg easterEgg" + getRandomIntSeeded(game.global.eggSeed + 1, 0, 4);
			},
			chance: 0.15,
			fire: function (){}
		},
		//Multiples
		Map: {
			world: -1,
			startAt: 6,
			level: [0, 20],
			repeat: 10,
			icon: "th",
			title: "地图碎片",
			fire: function() {
				var amt = rewardResource("fragments");
				message("你找到了 " + prettify(amt) + " 地图碎片!", "Loot", "th", null, "secondary");
			}
		},
		//portal Trumps
		fiveTrimpMax: {
			world: -1,
			level: [10, 20],
			icon: "gift",
			title: "战场上的奖励!",
			repeat: 45,
			fire: function () {
				var amt = 5 + (game.portal.Trumps.modifier * getPerkLevel("Trumps"));
				game.global.totalGifts += amt;
				amt = addMaxHousing(amt, game.talents.autoStructure.purchased);
				message("你已经清除了足够的土地来容纳更多 " + prettify(amt) + " 的脆皮!", "Loot", "gift", null, "secondary");
			}
		},
		fruit: {
			world: -1,
			level: [0, 4],
			icon: "apple",
			title: "Food",
			repeat: 9,
			fire: function (level) {
				var amt = rewardResource("food", 0.5, level);
				message("那个家伙还在地上留下了 " + prettify(amt) + " 食物! 美味!", "Loot", "apple", null, 'primary');
			}
		},
		groundLumber: {
			world: -1,
			level: [0, 2],
			icon: "tree-deciduous",
			title: "Wood",
			repeat: 8,
			fire: function (level) {
				var amt = rewardResource("wood", 0.5, level);
				message("你发现了 " + prettify(amt) + " 木头！ 干得相当漂亮！", "Loot", "tree-deciduous", null, 'primary');
			}
		},
		freeMetals: {
			world: -1,
			level: [3, 5],
			title: "Metal",
			icon: "*cubes",
			repeat: 6,
			fire: function (level) {
				if (game.global.challengeActive == "Transmute"){
					message("As expected, there was no Metal here.", "Loot", "*cubes", null, "primary");
					return;
				}
				var amt = rewardResource("metal", 0.5, level);
				message("你发现了 " + prettify(amt) + " 金属条！ 不错！", "Loot", "*cubes", null, 'primary');
			}
		},
		spireMetals: {
			world: -1,
			start: 200,
			level: [1,4],
			repeat: 4,
			fire: function (level) {
				if (game.global.challengeActive == "Transmute"){
					message("As expected, there was no Metal here.", "Loot", "*cubes", null, "primary");
					return;
				}
				if (!game.global.spireActive) return;
				var amt = rewardResource("metal", 25, level);
				message("肯定有很多金属在这个尖塔周围！ 你发现了 " + prettify(amt) + " 更多!", "Loot", "*safe", "spireMetalsMsg", "primary");
			},
			specialFilter: function (){
				return checkIfSpireWorld();
			},
			title: "Spire Metal",
			icon: "*safe",
			addClass: "spireMetals"
		}
	},
	//buildings with percent = true cannot have multiple purchases at a time
	buildings: {
		Trap: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 5,
			tooltip: function () {
				var catchAmt = (getPerkLevel("Bait") + 1);
				var s = (catchAmt > 1) ? "s" : "";
				return "Each Trap allows you to catch " + prettify(catchAmt) + " thing" + s + ".";
			},
			cost: {
				food: 10,
				wood: 10
			},
			first: function () {
				if (document.getElementById("trimps").style.visibility == "hidden") fadeIn("trimps", 10);
			}
		},
		Barn: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 10,
			tooltip: "增加100%食物储量上限.",
			percent: true,
			cost: {
				food: function () {
					return calculatePercentageBuildingCost("Barn", "food", 0.25);
				}
			},
			increase: {
				what: "food.max.mult",
				by: 2
			}
		},
		Shed: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 10,
			percent: true,
			tooltip: "增加100%木头储量上限.",
			cost: {
				wood: function () {
					return calculatePercentageBuildingCost("Shed", "wood", 0.25);
				}
			},
			increase: {
				what: "wood.max.mult",
				by: 2
			}
		},
		Forge: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 10,
			percent: true,
			tooltip: "增加100%金属储量上限.",
			cost: {
				metal: function () {
					return calculatePercentageBuildingCost("Forge", "metal", 0.25);
				}
			},
			increase: {
				what: "metal.max.mult",
				by: 2
			}
		},
		Hut: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 10,
			AP: true,
			tooltip: "Has room for $incby$ more lovely Trimp{s}. All Trimp housing has enough workspaces for only half of the Trimps that can live there.",
			cost: {
				food: [125, 1.24],
				wood: [75, 1.24]
			},
			increase: {
				what: "trimps.max",
				by: 3
			}
		},
		House: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 20,
			AP: true,
			tooltip: "A better house for your Trimps! Each house supports up to $incby$ more Trimp{s}.",
			cost: {
				food: [1500, 1.22],
				wood: [750, 1.22],
				metal: [150, 1.22]
			},
			increase: {
				what: "trimps.max",
				by: 5
			}
		},
		Mansion: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 60,
			AP: true,
			tooltip: "A pretty sick mansion for your Trimps to live in. Each Mansion supports $incby$ more Trimp{s}.",
			cost: {
				gems: [100, 1.2],
				food: [3000, 1.2],
				wood: [2000, 1.2],
				metal: [500, 1.2]

			},
			increase: {
				what: "trimps.max",
				by: 10
			}
		},
		Hotel: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 120,
			AP: true,
			tooltip: "A fancy hotel for many Trimps to live in. Complete with room service and a mini bar. Supports $incby$ Trimp{s}.",
			cost: {
				gems: [2000, 1.18],
				food: [10000, 1.18],
				wood: [12000, 1.18],
				metal: [5000, 1.18]

			},
			increase: {
				what: "trimps.max",
				by: 20
			}
		},
		Resort: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 240,
			AP: true,
			tooltip: "A huge resort for your Trimps to live in. Sucks for the ones still stuck in huts. Supports $incby$ Trimp{s}.",
			cost: {
				gems: [20000, 1.16],
				food: [100000, 1.16],
				wood: [120000, 1.16],
				metal: [50000, 1.16]

			},
			increase: {
				what: "trimps.max",
				by: 40
			}
		},
		Gateway: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 480,
			AP: true,
			tooltip: "A Gateway to another dimension, where your Trimps can sleep and work. Supports $incby$ Trimp{s}.",
			cost: {
				fragments: [3000, 1.14],
				gems: [20000, 1.14],
				metal: [75000, 1.14]
			},
			increase: {
				what: "trimps.max",
				by: 100
			}
		},
		Wormhole: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 600,
			blockU2: true,
			AP: true,
			tooltip: "使用你疯狂的，氦冷却，容易瞄准的虫洞发生器创建易于旅行的链接到其他可定居的行星，在那里你的脆皮可以睡觉和工作。 每个可以住 $incby$ 脆皮. <b>这座建筑需要耗费氦气来创造。</b>",
			cost: {
				helium: [10, 1.075],
				metal: [100000, 1.1]
			},
			increase:{
				what: "trimps.max",
				by: 1500
			}
		},
		Collector: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 1200,
			AP: true,
			tooltip: "Each collector allows you to harvest more of the power of your home star, allowing your Trimps to colonize a larger chunk of your solar system. Each supports $incby$ Trimp{s}.",
			cost: {
				gems: [500000000000, 1.12]
			},
			increase: {
				what: "trimps.max",
				by: 5000
			}
		},
		Warpstation: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 1200,
			origTime: 1200,
			AP: true,
			blockU2: true,
			tooltip: "Create a gigantic Warpstation, capable of housing tons of Trimps and instantly transporting them back to the home planet when needed. Supports $incby$ Trimps.",
			cost: {
				gems: [100000000000000, 1.4],
				metal: [1000000000000000, 1.4]
			},
			increase: {
				what: "trimps.max",
				by: 10000
			}

		},
		Gym: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 20,
			AP: true,
			blockU2: true,
			tooltip: "A building where your Trimps can work out. Each Gym increases the amount of damage each trimp can block by $incby$~",
			cost: {
				wood: [400, 1.185]
			},
			increase: {
			what: "global.block",
			by: 4
			},
			fire: function () {
				if (game.upgrades.Gymystic.done === 0) return;
				var oldBlock = game.buildings.Gym.increase.by;
				game.buildings.Gym.increase.by *= (game.upgrades.Gymystic.modifier + (0.01 * (game.upgrades.Gymystic.done - 1)));
				game.global.block += ((game.buildings.Gym.increase.by - oldBlock) * (game.buildings.Gym.owned));
			}
		},
		Smithy: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 120,
			AP: true,
			blockU1: true,
			tooltip: "Build a Smithy to help produce better Equipment for your Trimps. Each Smithy in your village increases Trimp Attack and Health by 25% (compounding).",
			cost: {
				gems: [500, 50],
				metal: [10000, 50],
				wood: [5000, 50]
			},
			getMult: function(){
				return Math.pow(1.25, this.owned);
			},
			fire: function(){
				addSoldierHealth(0.25);
				if (game.global.challengeActive == "Quest" && game.challenges.Quest.questId == 6) game.challenges.Quest.checkQuest();
			}
		},
		Tribute: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 120,
			AP: true,
			tooltip: "向您的Dragimp捐款，增加他的胃口和速度。 他将更快地收集宝石5%（复合）。",
			cost: {
				food: [10000, 1.05]
			},
			increase: {
				what: "Dragimp.modifier.mult",
				by: 1.05
			}
		},
		Nursery: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 120,
			AP: true,
			blockU2: true,
			get tooltip () {
				if (mutations.Magma.active())
					return "<p>岩浆一般是不利于健康的托儿所环境。 每个托儿所仍会增加脆皮每秒1％（叠乘）繁殖速度，但你每通过一个区域，由于距离岩浆更近，都会关闭你10%的托儿所。 安全第一！</p><p>你总共已经购买托儿所" + prettify(this.purchased) + "个</p>";
				return "构建一个宝石托儿所，脆皮宝宝可以更快地成长。 繁殖率每秒增加1％（复合）。";

			},
			cost: {
				gems: [400000, 1.06],
				wood: [1000000, 1.06],
				metal: [500000, 1.06]
			}
		},
		Microchip: {
			locked: 1,
			owned: 0,
			purchased: 0,
			craftTime: 1000,
			blockU1: true,
			tooltip: function () {
				var text = "Unlocks a" + ((game.buildings.Microchip.owned == 0) ? "" : "nother") + " Scientist level, upgrading your portal and <b>allowing you to " + getScientistInfo(game.buildings.Microchip.purchased + 1, true) + " every time you Portal to this Universe</b>.<br/><br/>Microchips attach directly to your Portal Device, and only ever have to be purchased once. Your Portal Device has room for 5 total Microchips."
				return text;
			},
			cost: {
				science: [1000000, 1000]
			},
			fire: function(){
				if (this.owned == 5) {
					this.locked = 1;
					var elem = document.getElementById('Microchip');
					if (elem) document.getElementById('buildingsHere').removeChild(elem);
				}
				if (this.owned > 5) this.owned = 5;
			}
		},
	},
//jobs
	jobs: {
		Farmer: {
			locked: 1,
			owned: 0,
			tooltip: "训练你的脆皮们学会耕作的技术。 每个农民每秒生产 $modifier$ 食物。",
			cost: {
				food: 5
			},
			increase: "food",
			modifier: 0.5
		},
		Lumberjack: {
			locked: 1,
			owned: 0,
			tooltip: "训练你的脆皮们学会砍伐的技术。 每个木工每秒生产 $modifier$ 木头。",
			cost: {
				food: 5
			},
			increase: "wood",
			modifier: 0.5
		},
		Miner: {
			locked: 1,
			owned: 0,
			tooltip: "训练你的脆皮们学会采矿的技术。 每个矿工每秒生产 $modifier$ 金属。",
			cost: {
				food: 20
			},
			increase: "metal",
			modifier: 0.5
		},
		Scientist: {
			locked: 1,
			owned: 0,
			tooltip: "训练你的脆皮们学会如何研究。 每个科学家每秒生产 $modifier$ 科学点。",
			cost: {
				food: 100
			},
			increase: "science",
			modifier: 0.5
		},
		Trainer: {
			locked: 1,
			allowAutoFire: true,
			owned: 0,
			blockU2: true,
			tooltip: function () {
				var text = "Each trainer will increase the base amount your soldiers can block by ";
				var heirloomBonus = getHeirloomBonus("Shield", "trainerEfficiency");
				var modifier = game.jobs.Trainer.modifier;
				if (heirloomBonus > 0){
					modifier = calcHeirloomBonus("Shield", "trainerEfficiency", modifier).toFixed(1);
					return text + modifier + "%. (" + game.jobs.Trainer.modifier + "% increased by " + heirloomBonus + "% thanks to " + game.global.ShieldEquipped.name + ")";
				}
				return text + modifier + "%.";
			},
			cost: {
				food: [750, 1.1]
			},
			increase: "custom",
			modifier: 20
		},
		Explorer: {
			locked: 1,
			allowAutoFire: true,
			owned: 0,
			tooltip: "每个探险家平均每秒会找到 $modifier$ 碎片。",
			cost: {
				food: [15000, 1.1]
			},
			increase: "fragments",
			modifier: 0.4
		},
		Dragimp: {
			locked: 1,
			owned: 0,
			increase: "gems",
			modifier: 0.5
		},
		Geneticist: {
			locked: 1,
			allowAutoFire: true,
			owned: 0,
			blockU2: true,
			get tooltip (){
				var text = "<p>每个遗传学家都会将每个脆皮的血量提高1％（复合），但会降低2％（复合）的脆皮繁殖速度。</p>"
				if (this.owned > 0) {
					var breedMult = Math.pow(.98, game.jobs.Geneticist.owned);
					var breedDisplay = (breedMult > 0.0001) ? breedMult.toFixed(4) : breedMult.toExponential(3);
					var healthMult = Math.pow(1.01, this.owned);
					var healthDisplay = prettify((healthMult * 100) - 100) + "%";
					text += "<p>拥有" + prettify(this.owned) + " 遗传学家" + ((this.owned == 1) ? "" : "") + "使你的繁殖速度变为" + breedDisplay + "倍,并且增加" + healthDisplay + "的生命。</p>";
				}
				return text;
			},
			cost: {
				food: [1000000000000000, 1.03],
			},
			increase: "custom",
			modifier: 1
		},
		Magmamancer: {
			locked: 1,
			owned: 0,
			blockU2: true,
			allowAutoFire: true,
			get tooltip(){
				var timeStr;
				var max = 120;
				var timeOnZone = Math.floor((getGameTime() - game.global.zoneStarted) / 60000);
				if (game.talents.magmamancer.purchased) timeOnZone += 5;
				if (game.talents.stillMagmamancer.purchased){
					timeOnZone = Math.floor(timeOnZone + game.global.spireRows);
					var extraMax = game.global.spireRows * 0.5;
					max = Math.floor((extraMax + max) / 10) * 10;
				}
				var bonus = (this.getBonusPercent() - 1) * 100;

				if (timeOnZone >= max)
					timeStr = "over " + max + " minutes (Max)";
				else{
					var remaining = 10 - (timeOnZone % 10);
					var nextBonus = ((this.getBonusPercent(false, Math.floor(timeOnZone / 10) + 1) - 1) * 100);
					timeStr = prettify(timeOnZone) + " 分钟" + ((timeOnZone == 1) ? "" : "") + "。 在 " + prettify(remaining) + " 分钟后" + ((remaining == 1) ? "" : "") + ", 这个奖金将增加到 " + prettify(nextBonus) + "%";
					if (timeOnZone < 10) bonus = 0;
				}
				var currentMag = (((1 - Math.pow(0.9999, this.owned)) * 3));
				var nextMag = (((1 - Math.pow(0.9999, this.owned + 1)) * 3));
				var nextBonus = (1 - (currentMag / nextMag)) * 100;
				var textString = "<p>训练一名巫师，将镐头和宝石还有岩浆混合在一起，形成每个区域独特的岩石。你有越多的巫师，你在一个区域花的时间越长，你的脆皮就能收集到的金属就越多!</p><p>你在这个区域中每花费十分钟,最多" + max + " 分钟,  你的巫师的增益就会提高20% (指数增长). 你现在的增益是 <b>" + prettify(bonus) + "%</b>, and " + ((game.talents.magmamancer.purchased) ? "counting your Magmamancermancy " + ((game.talents.stillMagmamancer.purchased) ? " Masteries" : " Mastery") + " " : "") + "你已经在该区域中停留了 " + timeStr + ".</p>";
				if (this.owned > 0) textString += "<p>你的下一个岩浆法师将增加总奖励 " + prettify(nextBonus) + "% (复利, 按住Ctrl键查看公式)</p>";
				else textString += "<p>培训了你的第一个岩浆法师之后，你的金属奖励将会是 " + prettify((nextMag * (Math.pow(1.2, this.getBonusPercent(true)) - 1)) * 100) + "%. (按住Ctrl键查看公式)</p>";
				if (ctrlPressed) textString += "<b><p>M = 巫师数量. T = 在这个区域中的时间（每10分钟为1个单位，向下取整）</p><p>金属/秒 *= 1 + (((1 - (0.9999 ^ M)) * 3) * ((1.2 ^ T) - 1))</p><b>";
				return textString;
			},
			cost: {
				gems: [1e60, 1.01]
			},
			increase: "custom",
			modifier: 1,
			getBonusPercent: function (justStacks, forceTime) {
				var boostMult = 0.9999;
				var boostMax = 3;
				var expInc = 1.2;
				var timeMax = 12;
				var timeOnZone;
				if (typeof forceTime === 'undefined'){
					var timeOnZone = getGameTime() - game.global.zoneStarted;
					if (game.talents.magmamancer.purchased) timeOnZone += 300000;
					if (game.talents.stillMagmamancer.purchased){
						timeOnZone = Math.floor(timeOnZone + (60000 * game.global.spireRows));
						var extraMax = game.global.spireRows * 0.05;
						timeMax = Math.floor(extraMax + timeMax);
					}
					timeOnZone = Math.floor(timeOnZone / 600000);
					
					if (timeOnZone > timeMax) timeOnZone = timeMax;
					else if (timeOnZone <= 0) return 1;
				}
				else timeOnZone = forceTime;
				if (justStacks) return timeOnZone;
				return 1 + ((((1 - Math.pow(boostMult, this.owned)) * boostMax)) * (Math.pow(expInc, timeOnZone) - 1));
			}
		},
		Amalgamator: {
			locked: 1,
			owned: 0,
			allowAutoFire: true,
			get tooltip(){
				var ratio = this.getTriggerThresh();
				var currentRatio = (game.resources.trimps.realMax() / game.resources.trimps.getCurrentSend());
				var text = "<p>合并者不能手动雇佣或解雇合并者。他们是不可思议的生物，几乎不能再被认为是脆皮了。当你的军队规模占总人口的比例低于 <b>" + prettify(ratio) + ":1</b>。他们会自动出现在你的城镇。完成尖塔 II到V时，每一个尖塔都将使这个比例增大到原来的10倍。 如果现在这一比率大于 <b>" + prettify(ratio) + ":1</b>. 通过V完成塔尖II，每一个都将这个比例除以10。如果你的比率低于 " + prettify(1e3) + ":1, 一个合并者将离开。你目前的比率是 <b>" + prettify(currentRatio) + ":1</b>. 在你目前的军队规模,你所需要的 <b>" + prettify(ratio * game.resources.trimps.getCurrentSend()) + "</b> 总脆皮触发下一个合并者。</p></p><p>合并者会融合一些空闲的脆皮到其他士兵中,大大加强他们的战斗力。每个合并者会增加出战脆皮的数量1000倍(指数),增加血量40倍(指数),增加伤害50% " + ((game.talents.amalg.purchased) ? "(复利)" : "(增加)") + ".</p><p>另外，当至少有一个合并者时，预期的增益将基于最后一支部队被派遣，而不是基于实际繁殖的时间。</p>";
				if (game.global.challengeActive == "Trimp"){
					text += "<p><i>" + toZalgo("这个特殊的宇宙似乎与合并者有直接的冲突，但他们在这里，他们合并的三分体似乎对空间限制免疫。事情变得越来越奇怪了。", 1, Math.ceil(game.global.world / 100)) + "</i></p>";
				}
				else
					text += "<p><i>有人说合并者是诅咒，有人说他们是祝福，合并者他们自己大多只是说：“Blerghhhh”。</i></p>";
				return text;
			},
			cost: {
			},
			increase: "custom",
			populationModifier: 1000,
			healthModifier: 40,
			damageModifier: 0.5,
			fireThresh: 1e3,
			getTriggerThresh: function () {
				var startPoint = 1e10;
				var creditedSpires = game.global.lastSpireCleared;
				if (creditedSpires < 2) return startPoint;
				if (creditedSpires > 5) creditedSpires = 5;
				var reduction = Math.pow(10, (creditedSpires - 1));
				return (startPoint / reduction);
			},
			getFireThresh: function () {
				return this.fireThresh;
			},
			getHealthMult: function () {
				return Math.pow(this.healthModifier, this.owned);
			},
			getPopulationMult: function () {
				return Math.pow(this.populationModifier, this.owned);
			},
			getDamageMult: function () {
				if (game.talents.amalg.purchased) return Math.pow((1 + this.damageModifier), this.owned);
				return (this.owned * this.damageModifier) + 1;
			}
		},
		Meteorologist: {
			locked: 1,
			owned: 0,
			vestedHires: 0,
			blockU1: true,
			allowAutoFire: true,
			get tooltip(){
				var text = "<p>Increase the amount of Radon gained from all sources by 1% per Meteorologist hired. Meteorologists require some time to get situated after being hired, and must be active for an entire Zone before they can start collecting any extra Radon.</p>";
				if (this.owned != this.vestedHires){
					var notVested = this.owned - this.vestedHires;
					text += "<p>You have " + this.owned + " Meteorologist" + needAnS(this.owned) + ", but " + notVested + " " + ((notVested == 1) ? "was" : "were") + " hired on this Zone and " + ((notVested == 1) ? "is" : "are") + " not yet available.</p>";
				}
				text += "<p>" + this.vestedHires + " Meteorologist" + needAnS(this.vestedHires) + " " + ((this.vestedHires == 1) ? "is" : "are") + " currently collecting, granting " + this.vestedHires + "% extra Radon.</p>";
				return text;
			},
			increase: "custom",
			cost: {
				food: [1e6, 5]
			},
			getMult: function(){
				return 1 + (this.vestedHires * 0.01);
			},
			afterFire: function(){
				if (this.vestedHires > this.owned) this.vestedHires = this.owned;
			},
			onNextWorld: function(){
				this.vestedHires = this.owned;
			}
		}
	},

	goldenUpgrades: {
		Helium: {
			tooltip: function() {
				return "Increase " + heliumOrRadon() + " gain by " + prettify(game.goldenUpgrades.Helium.nextAmt() * 100) + "%.";
			},
			nextAmt: function() {
				return 0.01 * (game.global.goldenUpgrades + 1);
			},
			currentBonus: 0,
			purchasedAt: []
		},
		Battle: {
			tooltip: function() {
				return "增加脆皮的攻击和生命 " + prettify(game.goldenUpgrades.Battle.nextAmt() * 100) + "%.";
			},
			nextAmt: function() {
				return 0.03 * (game.global.goldenUpgrades + 1);
			},
			currentBonus: 0,
			purchasedAt: []
		},
		Void: {
			tooltip: function() {
				return "减少两个虚空地图掉落之间所需的最小敌人数量" + prettify(game.goldenUpgrades.Void.nextAmt() * 100) + "%。";
			},
			nextAmt: function() {
				return 0.02 * (game.global.goldenUpgrades + 1);
			},
			currentBonus: 0,
			purchasedAt: []
		}
	},

	upgrades: {
	//Important Upgrades
		Coordination: {
			locked: 1,
			tooltip: "这本书能教会你的战士们如何多人协同作战。 战斗需要 <coord>%更多的脆皮（集合），但攻击和生命也同样的提升了。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: [250, 1.3],
					food: [600, 1.3],
					wood: [600, 1.3],
					metal: [300, 1.3]
				}
			},
			fire: function () {
				game.resources.trimps.maxSoldiers = Math.ceil(1.25 * game.resources.trimps.maxSoldiers);
				if (getPerkLevel("Coordinated")) game.portal.Coordinated.currentSend = Math.ceil(game.portal.Coordinated.currentSend * ((0.25 * Math.pow(game.portal.Coordinated.modifier, getPerkLevel("Coordinated"))) + 1));
			}
		},
		Gigastation: {
			locked: 1,
			allowed: 0,
			tooltip: "使你的经纱站进阶，增加20%可居住的脆皮，基础价格增加75%。这是无法撤回的升级。升级后会废弃之前购买的经纱站，但它们仍然生效，所以你的脆皮仍然能住在那里。升级后会直接建造一个新的经纱站。<b>如果你买得起的话，按住Ctrl升级，将会在升级后购买与你现在数量等同的经纱站。</b>",
			done: 0,
			cost: {
				resources: {
					gems: [100000000000000, 1.75],
					metal: [1000000000000000, 1.75],
					science: [100000000000, 1.4]
				}
			},
			fire: function (heldCtrl, noTip) {
				if (game.buildings.Warpstation.purchased > game.buildings.Warpstation.owned){
					clearQueue('Warpstation');
				}
				var oldAmt = game.buildings.Warpstation.owned;
				game.global.lastWarp = game.buildings.Warpstation.owned;
				game.buildings.Warpstation.increase.by *= 1.20;
				game.buildings.Warpstation.cost.gems[0] *= 1.75;
				game.buildings.Warpstation.cost.metal[0] *= 1.75;
				game.buildings.Warpstation.purchased = 1;
				game.buildings.Warpstation.owned = 1;
				addMaxHousing(game.buildings.Warpstation.increase.by, game.talents.autoStructure.purchased);
				if (!noTip) noTip = false;
				if ((ctrlPressed || heldCtrl) && oldAmt > 1) buyBuilding("Warpstation", false, noTip, oldAmt - 1);
			}
		},

	//One Time Use Upgrades, in order of common unlock order
		Battle: { //0
			locked: 1,
			tooltip: "弄清楚如何教这些脆皮们去战斗并杀死那些坏家伙",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 10
				}
			},
			fire: function () {
				fadeIn("equipmentTitleDiv", 10);
				fadeIn("equipmentTab", 10);
				fadeIn("battleContainer", 10);
				buildGrid();
				liquifyZone();
				drawGrid();
				game.global.BattleClock = -1;
				fadeIn("metal", 10);
				if (game.global.slowDone) {
					unlockEquipment("Gambeson");
					unlockEquipment("Arbalest");
				}
				if (game.talents.autoJobs.purchased){
					unlockJob("Lumberjack");
					buyAutoJobs(true);
				}
				if (getEnergyShieldMult() > 0) document.getElementById("blockDiv").style.visibility = "visible"
			}
		},
		Bloodlust: { //1
			locked: 1,
			tooltip: "这本书能教会脆皮们如何进行持久战。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 60,
					food: 150
				}
			},
			fire: function () {
				game.global.autoBattle = true;
				pauseFight(true);
				fadeIn("pauseFight", 1);
			}
		},
		Prismatic: { //U2 W2
			locked: 1,
			allowed: 0,
			tooltip: "Polish the strange Prism you found. When your Trimps bring the polished Prism to Battle, they gain <b>50%</b> of their maximum Health as <b>Prismatic Shield</b>!. All enemy damage hits your Prismatic Shield before Health, and Prismatic Shield always regenerates to full after an enemy is killed.",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 3500,
					wood: 2500,
					metal: 1500
				}
			},
			fire: function(){
				updateAllBattleNumbers();
				document.getElementById("blockDiv").style.visibility = "visible";
			}
		},
		Blockmaster: { //4
			locked: 1,
			allowed: 0,
			tooltip: "这本书能增加50%每个健身馆所提供的防御。",
			done: 0,
			cost: {
				resources: {
					science: [750, 1.17],
					food: [2000, 1.17],
					metal: [1000, 1.17]
				}
			},
			fire: function () {
				game.global.block = Math.ceil(1.5 * game.global.block);
				game.buildings.Gym.increase.by = Math.ceil(1.5 * game.buildings.Gym.increase.by);
			}
		},
		Trapstorm: { //10
			locked: 1,
			allowed: 0,
			tooltip: "这本书详细介绍了教你的工头们实际做事情而不是无所事事的艺术。当被问到，如果队列是空的，你的工头将会开始建造一个新的陷阱。",
			done: 0,
			cost: {
				resources: {
					science: 10000,
					food: 100000,
					wood: 100000

				}
			},
			fire: function () {
				game.global.trapBuildAllowed = true;
				fadeIn("autoTrapBtn", 10);
				toggleAutoTrap(true);
			}
		},
		Shieldblock: { //11
			locked: 1,
			allowed: 0,
			tooltip: "这本书解释了使用盾牌实际上阻止伤害的方法。当前的盾牌需要完全摧毁和重建,但它将带来防御而不是生命。 <b>效果是永久的。</b> $你的盾牌必须在III阶或更高$",
			done: 0,
			specialFilter: function () {
				return (game.equipment.Shield.prestige >= 3) ? true : false;
			},
			cost: {
				resources: {
					science: 3000,
					wood: 10000
				}
			},
			fire: function () {
			var equipment = game.equipment.Shield;
				prestigeEquipment("Shield", false, true);
				equipment.blockNow = true;
				equipment.tooltip = game.equipment.Shield.blocktip;
				equipment.blockCalculated = Math.round(equipment.block * Math.pow(1.19, ((equipment.prestige - 1) * game.global.prestige.block) + 1));
				levelEquipment("Shield", 1);
			}
		},
		Bounty: { //15
			locked: 1,
			tooltip: "这本书将教给你的农民、伐木工、矿工、科学家和探险家，提高两倍生产力",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: [40000, 2],
					food: [100000, 2],
					wood: [100000, 2],
					metal: [100000, 2]
				}
			},
			fire: function () {
				game.jobs.Farmer.modifier *= 2;
				game.jobs.Lumberjack.modifier *= 2;
				game.jobs.Miner.modifier *= 2;
				game.jobs.Scientist.modifier *= 2;
				game.jobs.Explorer.modifier *= 2;

			}
		},
		Egg: { //17
			locked: 1,
			allowed: 0,
			tooltip: "你的顶尖科学家都确信这是一个龙蛋。他们知道龙喜欢闪亮的东西,也许它会找到一些宝石",
			done: 0,
			cost: {
				resources: {
					gems: 10000
				}
			},
			fire: function () {
				game.jobs.Dragimp.owned = 1;
				fadeIn("gemsPs", 10);
				unlockBuilding("Tribute");
			}
		},
		Prismalicious: { //U2 Z20 Prismatic Palace
			locked: 1,
			allowed: 0,
			tooltip: "Once again, this Prism will need to be polished before it can offer your Trimps any protection. After it's polished, this Prism will grant an additional 50% Prismatic Shield to your Trimps!",
			done: 0,
			cost: {
				resources: {
					science: 10000,
					gems: 10000,
					wood: 15000
				}
			},
			fire: function(){

			}
		},
		Anger: { //20
			locked: 1,
			allowed: 0,
			tooltip: "你的科学家们很生气。不是因为你做的任何事情,而是这宝石似乎让他们疯了。虽然需要一些研究,但你认为你可以创建一张地图去到这些宝石的原产地。",
			done: 0,
			cost: {
				resources: {
					science: 100000,
					fragments: 15
				}
			},
			fire: function () {
				message("你制作了一张通往愤怒次元的地图！应该会很有趣！", "Notices");
				createMap(20, "Dimension of Anger", "Hell", 3, 100, 2.5, true, true);
			}
		},
		Rage: {
			locked: 1,
			allowed: 0,
			tooltip: "Unsurprisingly, that Rage Gem you brought back has everyone up the walls. You should probably hurry up and figure out a way to extract the map from inside before your Scientists end up killing eachother.",
			done: 0,
			cost: {
				resources: {
					science: 100000,
					fragments: 15
				}
			},
			fire: function () {
				message("You just made a map to the Dimension of Rage! Sounds like a great time!", "Notices");
				createMap(15, "Dimension of Rage", "Hell", 3, 100, 6, true, true);
			}
		},
		Gymystic: { //25
			locked: 1,
			allowed: 0,
			tooltip: "本书将使您购买的每个健身房增加5％所有健身房提供的防御。 这个升级的每个连续级别都会增加一个额外的1％. <b>每个健身房提供额外的防御。</b>",
			done: 0,
			cost: {
				resources: {
					wood: 1000000000,
					science: 5000000
				}
			},
			modifier: 1.05,
			fire: function () {
				var oldBlock = game.buildings.Gym.increase.by;
				var base = (game.upgrades.Blockmaster.done) ? 6 : 4;
				game.buildings.Gym.increase.by = base * Math.pow(game.upgrades.Gymystic.modifier + (0.01 * (game.upgrades.Gymystic.done)), game.buildings.Gym.owned);
				game.global.block += ((game.buildings.Gym.increase.by - oldBlock) * game.buildings.Gym.owned);
			}
		},
		SuperShriek: {
			locked: 1,
			allowed: 0,
			get tooltip (){
				var text = "This book will teach your Robotrimp how to do a much better job of shrieking, allowing MagnetoShriek to be used on multiple Corrupted cells in addition to Improbabilities. Upgraded MagnetoShriek starts off only being able to affect 1 cell at a time, but each use after purchasing this upgrade will extend the bonus by one additional cell, up to a max of 5 cells (resets on portal). <br/><br/> 每个新的仿生仙境 clear starting at Z185 will permanently increase the cell count cap by 1.";
				var cap = 5;
				if (game.global.roboTrimpLevel >= 5)
					cap += game.global.roboTrimpLevel - 4;
				var cleared = (game.global.roboTrimpLevel - 4);
				text += " <b>你已清理了 " + cleared + " 仿生仙境" + ((cleared == 1) ? "" : "") + " at 185 or higher, and your MagnetoShriek cell count cap will be " + cap + "</b>";
				return text;
			}
		},
	//Formations
		Formations: {
			locked: 1,
			allowed: 0,
			tooltip: "The air may be filled with pollution, but your Trimps seem to be getting smarter and a battle technique from what could only be a past life has crept into your memory. This would probably be a good opportunity to teach it to your Trimps. Once researched, you will be able to enter the '堆叠阵型'. This can be toggled to increase your Trimps' health by 4x, but reduce block and attack by half.",
			done: 0,
			cost: {
				resources: {
					science: 10000000000,
					food: 100000000000
				}
			},
			fire: function () {
				unlockFormation("start");
			}
		},
		Dominance: {
			locked: 1,
			allowed: 0,
			tooltip: "Another formation has crept back into your memory. Where are these coming from? Who are you? Who cares, this one will allow your Trimps to deal 4x damage at the cost of half health and block.",
			done: 0,
			cost: {
				resources: {
					science: 20000000000,
					food: 200000000000
				}
			},
			fire: function () {
				unlockFormation(2);
			}
		},
		Barrier: {
			locked: 1,
			allowed: 0,
			tooltip: "Woah, you just remembered that all Trimps lifting their shields in the same direction at the same time can produce a nice protecting wall. Seems like common sense now that you thought of it. This formation increases block by 4x and cuts the amount of block that enemies can pierce by 50%, at the cost of half attack and health.",
			done: 0,
			cost: {
				resources: {
					science: 40000000000,
					food: 400000000000
				}
			},
			fire: function () {
				unlockFormation(3);
			}
		},
	//Jobs, in order of unlock
		Miners: {
			locked: 1,
			tooltip: "你真的不喜欢读书,但这似乎比起自己挖掘要好。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 60,
					wood: 300,
					metal: 100
				}
			},
			fire: function () {
				unlockJob("Miner");
			}
		},
		Scientists: {
			locked: 1,
			tooltip: "你真的不相信,但这本书表明脆皮们可以更聪明。好好读一下去了解了解吧。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 100,
					food: 350
				}
			},
			fire: function () {
				unlockJob("Scientist");
			}
		},
		Trainers: {
			locked: 1,
			tooltip: "这本书是所有的高层管理的秘密。 训练你的脆皮去训练其他脆皮。",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 500,
					food: 1000
				}
			},
			fire: function () {
				unlockJob("Trainer");
			}
		},
		Explorers: {
			locked: 1,
			tooltip: "这本书能让你雇佣一些脆皮去为你找到地图碎片！",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 50000,
					fragments: 5
				}
			},
			fire: function () {
				unlockJob("Explorer");
				fadeIn("fragmentsPs", 10);
			}
		},
		Magmamancers: {
			locked: 1,
			tooltip: "Your scientists think they can study this book to figure out how to train Trimps as Magmamancers. According to your scientists, according to legend, Magmamancers require gems instead of food as sustainance and can increase the rate of Metal gathering more and more as they stay on the same Zone.",
			done: 0,
			allowed: 0,
			cost: {
				resources: {
					science: 50e15,
					gems: 1e60
				}
			},
			fire: function () {
				unlockJob("Magmamancer");
			}
		},
	//Housing upgrades, in order of unlock
		UberHut: {
				locked: 1,
				allowed: 0,
				tooltip: "这本书将使每个小屋的空间增加100%。",
				done: 0,
				cost: {
					resources: {
						science: 30000,
						food: 200000,
						metal: 100000
					}
				},
				fire: function () {
					addMaxHousing(game.buildings.Hut.owned * game.buildings.Hut.increase.by, game.talents.autoStructure.purchased);
					game.buildings.Hut.increase.by *= 2;
				}
			},
		UberHouse: {
				locked: 1,
				allowed: 0,
				tooltip: "这本书将使每个房子的空间增加100%。",
				done: 0,
				cost: {
					resources: {
						science: 300000,
						food: 2000000,
						metal: 1000000
					}
				},
				fire: function () {
					addMaxHousing(game.buildings.House.owned * game.buildings.House.increase.by, game.talents.autoStructure.purchased);
					game.buildings.House.increase.by *= 2;
				}
			},
		UberMansion: {
				locked: 1,
				allowed: 0,
				tooltip: "这本书将使每个大厦的空间增加100%。",
				done: 0,
				cost: {
					resources: {
						science: 3000000,
						food: 20000000,
						metal: 10000000
					}
				},
				fire: function () {
					addMaxHousing(game.buildings.Mansion.owned * game.buildings.Mansion.increase.by, game.talents.autoStructure.purchased);
					game.buildings.Mansion.increase.by *= 2;
				}
			},
		UberHotel: {
				locked: 1,
				allowed: 0,
				tooltip: "这本书将使每个旅馆的空间增加100%。",
				done: 0,
				cost: {
					resources: {
						science: 30000000,
						food: 200000000,
						metal: 100000000
					}
				},
				fire: function () {
					addMaxHousing(game.buildings.Hotel.owned * game.buildings.Hotel.increase.by, game.talents.autoStructure.purchased);
					game.buildings.Hotel.increase.by *= 2;
				}
			},
		UberResort: {
				locked: 1,
				allowed: 0,
				tooltip: "这本书将使每个娱乐场的空间增加100%。",
				done: 0,
				cost: {
					resources: {
						science: 300000000,
						food: 2000000000,
						metal: 1000000000
					}
				},
				fire: function () {
					addMaxHousing(game.buildings.Resort.owned * game.buildings.Resort.increase.by, game.talents.autoStructure.purchased);
					game.buildings.Resort.increase.by *= 2;
				}
			},
	//Equipment Prestiges
		Supershield: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的盾牌。 这将使您的盾牌达到1级，并大大增加进一步升级的成本，但会大大增加统计数据。@",
			done: 0,
			cost: {
				resources: {
					science: [1200, 1.7],
					gems: [40, 3]
				}
			},
			prestiges: "Shield",
			fire: function () {
				prestigeEquipment("Shield");
			}
		},
		Dagadder: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的匕首。这将使你的匕首达到1级，并大大增加进一步升级的成本，但会大大增加攻击的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1250, 1.7],
					gems: [60, 3]
				}
			},
			prestiges: "Dagger",
			fire: function () {
				prestigeEquipment("Dagger");
			}
		},
		Bootboost: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的靴子。这将使您的靴子达到1级，并大大增加进一步升级的成本，但会大大增加生命的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1300, 1.7],
					gems: [70, 3]
				}
			},
			prestiges: "Boots",
			fire: function () {
				prestigeEquipment("Boots");
			}
		},
		Megamace: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的狼牙棒。这将使你的狼牙棒达到1级，并大大增加进一步升级的成本，但会大大增加攻击的伤害。@",
			done: 0,
			cost: {
				resources: {
					science: [1400, 1.7],
					gems: [100, 3]
				}
			},
			prestiges: "Mace",
			fire: function () {
				prestigeEquipment("Mace");
			}
		},
		Hellishmet: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的头盔。这将使您的头盔达到1级，并大大增加进一步升级的成本，但会大大增加生命的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1450, 1.7],
					gems: [150, 3]
				}
			},
			prestiges: "Helmet",
			fire: function () {
				prestigeEquipment("Helmet");
			}
		},
		Polierarm: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的长柄武器。这将使你的长柄武器达到1级，并大大增加进一步升级的成本，但会大大增加攻击的伤害。@",
			done: 0,
			cost: {
				resources: {
					science: [1550, 1.7],
					gems: [225, 3]
				}
			},
			prestiges: "Polearm",
			fire: function () {
				prestigeEquipment("Polearm");
			}
		},
		Pantastic: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的裤子。这将使您的裤子达到1级，并大大增加进一步升级的成本，但会大大增加生命的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1600, 1.7],
					gems: [275, 3]
				}
			},
			prestiges: "Pants",
			fire: function () {
				prestigeEquipment("Pants");
			}
		},
		Axeidic: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的战斧。这将使你的斧头达到1级，并大大增加进一步升级的成本，但会大大增加攻击的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1700, 1.7],
					gems: [400, 3]
				}
			},
			prestiges: "Battleaxe",
			fire: function () {
				prestigeEquipment("Battleaxe");
			}
		},
		Smoldershoulder: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的护肩。这将使您的护肩达到1级，并大大增加进一步升级的成本，但会大大增加生命的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1750, 1.7],
					gems: [525, 3]
				}
			},
			prestiges: "Shoulderguards",
			fire: function () {
				prestigeEquipment("Shoulderguards");
			}
		},
		Greatersword: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的大剑。这将使你的大剑成为第一级，大大增加进一步升级的成本，但会大大增加攻击的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1850, 1.7],
					gems: [650, 3]
				}
			},
			prestiges: "Greatsword",
			fire: function () {
				prestigeEquipment("Greatsword");
			}
		},
		Bestplate: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的胸甲。这将使您的胸甲达到1级，并大大增加进一步升级的成本，但会大大增加生命的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1900, 1.7],
					gems: [800, 3]
				}
			},
			prestiges: "Breastplate",
			fire: function () {
				prestigeEquipment("Breastplate");
			}
		},
		Harmbalest: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的劲弩。 这将使你的劲弩达到1级，并大大增加进一步升级的成本，但会大大增加攻击的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [1950, 1.7],
					gems: [810, 3]
				}
			},
			prestiges: "Arbalest",
			fire: function () {
				prestigeEquipment("Arbalest");
			}
		},
		GambesOP: {
			locked: 1,
			allowed: 0,
			tooltip: "研究这个将重铸你的gambeson。 这将使您的gambeson进入1级，并大大增加进一步升级的成本，但会大大增加生命的数量。@",
			done: 0,
			cost: {
				resources: {
					science: [2000, 1.7],
					gems: [820, 3]
				}
			},
			prestiges: "Gambeson",
			fire: function () {
				prestigeEquipment("Gambeson");
			}
		},
	//Repeatable upgrades, in order of frequency (rarest first)
		Potency: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书能教会你如何提升10%的繁殖脆皮的效率。",
			done: 0,
			cost: {
				resources: {
					science: [1000, 1.4],
					wood: [4000, 1.4]
				}
			},
			fire: function () {
				//psh
			}
		},
		TrainTacular: { //5
			locked: 1,
			allowed: 0,
			tooltip: "这本书将教会你的训练员们增加5%的防御。",
			done: 0,
			cost: {
				resources: {
					science: [1000, 1.7],
					food: [2000, 1.7],
					wood: [3000, 1.7],
					metal: [2000, 1.7]
				}
			},
			fire: function () {
				game.jobs.Trainer.modifier = Math.ceil(game.jobs.Trainer.modifier += 5);
			}
		},
		Efficiency: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书教你如何将全部的生产效率变为两倍！万岁！ <b>注意：这只作用于生产率，而不是工人。</b>",
			done: 0,
			cost: {
				resources: {
					science: [400, 1.25],
					food: [400, 1.2],
					wood: [400, 1.2],
					metal: [400, 1.2]
				}
			},
			fire: function () {
				game.global.playerModifier *= 2;
			}
		},
		Speedminer: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书能教你的脆皮如何提升25%的采矿速度！",
			done: 0,
			cost: {
				resources: {
					science: [200, 1.4],
					metal: [500, 1.4]
				}
			},
			fire: function () {
				game.jobs.Miner.modifier *= 1.25;
			}
		},
		Speedlumber: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书能教你的脆皮如何提升25%的砍伐速度！",
			done: 0,
			cost: {
				resources: {
					science: [200, 1.4],
					wood: [500, 1.4]
				}
			},
			fire: function () {
				game.jobs.Lumberjack.modifier *= 1.25;
			}
		},
		Speedfarming: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书能教你的脆皮如何提升25%的耕作速度！",
			done: 0,
			cost: {
				resources: {
					science: [200, 1.4],
					food: [500, 1.4]
				}
			},
			fire: function () {
				game.jobs.Farmer.modifier *= 1.25;
			}
		},
		Speedscience: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书能教你的脆皮如何提升25%的研究速度！",
			done: 0,
			cost: {
				resources: {
					science: [400, 1.4]
				}
			},
			fire: function () {
				game.jobs.Scientist.modifier *= 1.25;
			}
		},
		Speedexplorer: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书将教你如何更有效地探索,  碎片生产加速300%！",
			done: 0,
			cost: {
				resources: {
					science: [200, 28.9],
					fragments: [500, 4]
				}
			},
			fire: function () {
				game.jobs.Explorer.modifier *= 4;
			}
		},
		Megaminer: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书将教你如何挖矿加速 ?% !",
			done: 0,
			cost: {
				resources: {
					science: [10000000000, 1.4],
					metal: [100000000000, 1.4]
				}
			},
			fire: function () {
				var amt = (game.global.frugalDone) ? 1.6 : 1.5;
				game.jobs.Miner.modifier *= amt;
			}
		},
		Megalumber: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书将教你如何让脆皮伐木加速 ?% !",
			done: 0,
			cost: {
				resources: {
					science: [10000000000, 1.4],
					wood: [100000000000, 1.4]
				}
			},
			fire: function () {
				var amt = (game.global.frugalDone) ? 1.6 : 1.5;
				game.jobs.Lumberjack.modifier *= amt;
			}
		},
		Megafarming: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书将教你如何让脆皮种植加速 ?% !",
			done: 0,
			cost: {
				resources: {
					science: [10000000000, 1.4],
					food: [100000000000, 1.4]
				}
			},
			fire: function () {
				var amt = (game.global.frugalDone) ? 1.6 : 1.5;
				game.jobs.Farmer.modifier *= amt;
			}
		},
		Megascience: {
			locked: 1,
			allowed: 0,
			tooltip: "这本书会教你的脆皮如何更快的研究科学的  ?%  东西！",
			done: 0,
			cost: {
				resources: {
					science: [100000000000, 1.6]
				}
			},
			fire: function () {
				var amt = (game.global.frugalDone) ? 1.6 : 1.5;
				game.jobs.Scientist.modifier *= amt;
			}
		},
	},

	triggers: {
		Trap: {
			done: 0,
			message: function(){
				if (game.global.universe == 2) return "It's time to get some Trimps up in here.";
				return "Maybe there's something meaty and delicious here to Trap."
			},
			cost: {
				resources: {
					food: 5,
					wood: 5
				}
			},
			fire: function () {
				fadeIn("buyCol", 10);
				unlockBuilding("Trap");
				if (game.global.universe == 2){
					game.triggers.upgrades.done = 1;
					game.triggers.upgrades.fire();
				}
			}
		},
		wood: {
			done: 0,
			message: function(){
				if (game.global.universe == 2) return "Ah wood, the building material of kings. The building material of everyone else too, but still.";
				return "You'll need some wood to build stuff..."
			},
			cost: {
				resources: {
					food: 5
				}
			},
			fire: function () {
				fadeIn("wood", 10);

			}
		},
		Barn: {
			done: 0,
			message: function(){
				if (game.global.universe == 2) return "You almost forgot how to build a Barn, but now you remember. Proud of you!";
				return "The food stores are getting pretty full, maybe you should start thinking about a Barn."
			},
			cost: {
				resources: {
					food: 350
				}
			},
			fire: function () {
				unlockBuilding("Barn");
			}
		},
		Shed: {
			done: 0,
			message: function(){
				if (game.global.universe == 2) return "Wet wood won't work! Better get a Shed going.";
				return "A nice Shed would allow you to keep more wood on hand."
			},
			cost: {
				resources: {
					wood: 350
				}
			},
			fire: function () {
				unlockBuilding("Shed");
			}
		},
		Forge: {
			done: 0,
			message: function(){
				if (game.global.universe == 2) return "What better place to store metal than a building that can smelt it?";
				return "A nice Forge would allow you to store more metal."
			},
			cost: {
				resources: {
					metal: 350
				}
			},
			fire: function () {
				unlockBuilding("Forge");
			}
		},
		jobs: {
			done: 0,
			message: function(){
				if (game.global.universe == 2) return "You caught your very first Trimp in this new dimension! It can smell other Trimps on you and looks confused. You promptly send him off to work!";
				return "There's a weird impish little creature in the trap. A Trimp, you decide to call it. Since you're so creative, you could probably train this Trimp to help out."
			},
			cost: {
				resources: {
					trimps: 1
				}
			},
			fire: function () {
				fadeIn("jobsTab", 10);
				document.getElementById("trimpTitle").innerHTML = "脆皮";
				document.getElementById("empHide").style.visibility = "visible";
				unlockJob("Farmer");
				document.getElementById("jobsTitleDiv").style.display = "block";
				game.global.menu.jobs = true;
			}
		},
		Lumberjack: {
			done: 0,
			cost: {
				jobs: {
					Farmer: 1
				}
			},
			fire: function () {
				unlockJob("Lumberjack");
			}
		},
		upgrades: {
			done: 0,
			message: function(){
				if (game.global.universe == 2) return "Where would you be in life without Science? Not this dimension, that's for sure.";
				return "This planet feels so familiar, yet so foreign. Maybe it's time to start sciencing things."
			},
			cost: {
				resources: {
					trimps: 2,
					food: 15
				}
			},
			fire: function () {
				fadeIn("upgradesTab", 10);
				fadeIn("science", 10);
				document.getElementById("upgradesTitleDiv").style.display = "block";
				game.global.menu.upgrades = true;
			}
		},
		Battle: {
			done: 0,
			once: function() {document.getElementById("upgradesTitleSpan").innerHTML = "Upgrades";},
			message: function(){
				if (game.global.universe == 2) return "As you finally step out into the Battle Zones, the first thing you notice is that your Heirlooms feel weaker here. Oh well, 1000 more times into the fray... ";
				return "War... what is it good for? Exploration, or something."
			},
			cost: {
				special: function () {
					return (game.triggers.upgrades.done > 0 && game.resources.science.owned > 0 && game.triggers.jobs.done > 0);
				}
			},
			fire: function () {
				unlockUpgrade('Battle');
				document.getElementById("upgradesTitleSpan").innerHTML = "升级";
			}
		},
		Hut: {
			done: 0,
			message: function(){
				if (game.global.universe == 2) return "The newly established Trimp zoning committee is too busy drooling to approve anything, so you take it on yourself to start building some Huts.";
				return "Doesn't seem like all of these little guys will fit in your ship. Luckily, you remember how to make small huts for shelter."
			},
			cost: {
				resources: {
					trimps: 8
				}
			},
			fire: function () {
				unlockBuilding('Hut');
			}
		},
		House: {
			done: 0,
			message: function(){
				if (game.global.universe == 2) return "The TZC has finally approved a House blueprint. To your surprise, it looks fairly decent! You decide to immediately build some.";
				return "Doesn't seem like all of these little guys will fit in your ship. Luckily, you remember how to make small huts for shelter."
			},
			cost: {
				resources: {
					trimps: 65
				}
			},
			fire: function () {
				unlockBuilding('House');
			}
		},
		breeding: {
			done: 0,
			message: function () {
				if (game.global.challengeActive == "Trapper" || game.global.challengeActive == "Trappapalooza") return "Your Trimps look really bored.";
				else if (game.global.universe == 2) return "Better hurry up to the fighting Zones so you don't have to sit around here all day watching Trimps breed.";
				else return "Apparently the Trimps breed if they're not working. Doesn't look pleasant.";
			},
			cost: {
				special: function () {
					return (game.resources.trimps.owned - game.resources.trimps.employed >= 2) ? true : false;
				}
			},
			fire: function () {
				document.getElementById("unempHide").style.visibility = "visible";
			}
		}
	},
	unlocks: {
		imps: {
			Goblimp: false,
			Feyimp: false,
			Flutimp: false,
			Tauntimp: false,
			Venimp: false,
			Whipimp: false,
			Jestimp: false,
			Titimp: false,
			Chronoimp: false,
			Magnimp: false,
		},
		impCount: {
			Goblimp: 0,
			Feyimp: 0,
			Flutimp: 0,
			Tauntimp: 0,
			TauntimpAdded: 0,
			Venimp: 0,
			Whipimp: 0,
			Jestimp: 0,
			Titimp: 0,
			Chronoimp: 0,
			Magnimp: 0
		}
	},
	get workspaces () {
		return Math.ceil(this.resources.trimps.realMax() / 2) - this.resources.trimps.employed;
	},
	set workspaces (value) {
		console.warn('工作区现在是一个吸气剂，不需要设置');
		return;
	},
};
return toReturn;
}
var game = newGame();
