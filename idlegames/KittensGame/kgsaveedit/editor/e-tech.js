/* global dojo, require, classes, $I */

require([], function () {
"use strict";

dojo.declare("classes.KGSaveEdit.ScienceManager", [classes.KGSaveEdit.UI.Tab, classes.KGSaveEdit.Manager], {
	techData: [
		{
			name: "calendar",
			prices: [
				{name: "science", val: 30}
			],
			unlocked: true,
			// unlocks: {tech: ["agriculture"]},
			flavor: true
		}, {
			name: "agriculture",
			prices: [
				{name: "science", val: 100}
			],
			// unlocks: {tech: ["mining", "archery"], jobs: ["farmer"]},
			requires: {tech: ["calendar"]},
			flavor: true
		}, {
			name: "archery",
			prices: [
				{name: "science", val: 300}
			],
			// unlocks: {tech: ["animal"], buildings: ["zebraOutpost", "zebraWorkshop", "zebraForge"], jobs: ["hunter"]},
			requires: {tech: ["agriculture"]},
			flavor: true
		}, {
			name: "mining",
			prices: [
				{name: "science", val: 500}
			],
			// unlocks: {tech: ["metal"], upgrades: ["bolas"]},
			requires: {tech: ["agriculture"]},
			flavor: true
		}, {
			name: "metal",
			prices: [
				{name: "science", val: 900}
			],
			// unlocks: {upgrades: ["huntingArmor"]},
			requires: {tech: ["mining"]}
		}, {
			name: "animal",
			prices: [
				{name: "science", val: 500}
			],
			// unlocks: {tech: ["civil", "math", "construction"]},
			requires: {tech: ["archery"]}
		}, {
			name: "brewery",
			prices: [
				{name: "science", val: 1200}
			],
			hidden: true // not used anymore
		}, {
			name: "civil",
			prices: [
				{name: "science", val: 1500}
			],
			// unlocks: {tech: ["currency"]},
			requires: {tech: ["animal"]},
			flavor: true
		}, {
			name: "math",
			prices: [
				{name: "science", val: 1000}
			],
			// unlocks: {upgrades: ["celestialMechanics"], tabs: ["stats"]},
			requires: {tech: ["animal"]},
			flavor: true
		}, {
			name: "construction",
			prices: [
				{name: "science", val: 1300}
			],
			// unlocks: {tech: ["engineering"], upgrades: ["compositeBow", "advancedRefinement", "reinforcedSaw"]},
			requires: {tech: ["animal"]},
			flavor: true
		}, {
			name: "engineering",
			prices: [
				{name: "science", val: 1500}
			],
			// unlocks: {tech: ["writing"]},
			requires: {tech: ["construction"]}
		}, {
			name: "currency",
			prices: [
				{name: "science", val: 2200}
			],
			// unlocks: {upgrades: ["goldOre"]},
			requires: {tech: ["civil"]}
		}, {
			name: "writing",
			prices: [
				{name: "science", val: 3600}
			],
			// unlocks: {tech: ["philosophy", "machinery", "steel"], upgrades: ["register"], crafts: ["parchment"]},
			requires: {tech: ["engineering"]},
			flavor: true
		}, {
			name: "philosophy",
			prices: [
				{name: "science", val: 9500}
			],
			// unlocks: {tech: ["theology"], crafts: ["compedium"]},
			requires: {tech: ["writing"]},
			flavor: true
		}, {
			name: "machinery",
			prices: [
				{name: "science", val: 15000}
			],
			// unlocks: {upgrades: ["printingPress", "factoryAutomation", "crossbow"]}
			requires: {tech: ["writing"]}
		}, {
			name: "steel",
			prices: [
				{name: "science", val: 12000}
			],
			// unlocks: {upgrades: ["deepMining", "coalFurnace", "combustionEngine", "reinforcedWarehouses", "steelAxe", "steelArmor"], crafts: ["steel"]},
			requires: {tech: ["writing"]}
		}, {
			name: "theology",
			prices: [
				{name: "science",    val: 20000},
				{name: "manuscript", val: 35}
			],
			// unlocks: {tech: ["astronomy", "cryptotheology"], jobs: ["priest"]},
			requires: {tech: ["philosophy"]},
			upgrades: {buildings: ["temple"]},
			flavor: true
		}, {
			name: "astronomy",
			prices: [
				{name: "science",    val: 28000},
				{name: "manuscript", val: 65}
			],
			// unlocks: {tech: ["navigation"]},
			requires: {tech: ["theology"]}
		}, {
			name: "navigation",
			prices: [
				{name: "science",    val: 35000},
				{name: "manuscript", val: 100}
			],
			// unlocks: {tech: ["physics", "archeology", "architecture"], crafts: ["ship"], upgrades: ["caravanserai", "cargoShips", "astrolabe", "titaniumMirrors", "titaniumAxe"]},
			requires: {tech: ["astronomy"]}
		}, {
			name: "architecture",
			prices: [
				{name: "science",   val: 42000},
				{name: "compedium", val: 10}
			],
			// unlocks: {tech: ["acoustics"]},
			requires: {tech: ["navigation"]},
			flavor: true
		}, {
			name: "physics",
			prices: [
				{name: "science",   val: 50000},
				{name: "compedium", val: 35}
			],
			// unlocks: {tech: ["chemistry", "electricity", "metaphysics"], crafts: ["blueprint"], upgrades: ["pneumaticPress", "pyrolysis", "steelSaw"]},
			requires: {tech: ["navigation"]}
		}, {
			name: "metaphysics",
			prices: [
				{name: "science",     val: 55000},
				{name: "unobtainium", val: 5}
			],
			requires: {tech: ["physics"]}
		}, {
			name: "chemistry",
			prices: [
				{name: "science",   val: 60000},
				{name: "compedium", val: 50}
			],
			// unlocks: {buildings: ["calciner", "oilWell"], upgrades: ["alloyAxe", "alloyArmor", "alloyWarehouses", "alloyBarns"], crafts: ["alloy"]},
			requires: {tech: ["physics"]}
		}, {
			name: "acoustics",
			prices: [
				{name: "science",   val: 60000},
				{name: "compedium", val: 60}
			],
			// unlocks: {buildings: ["chapel"], tech: ["drama"]},
			requires: {tech: ["architecture"]}
		}, {
			name: "drama",
			prices: [
				{name: "science",   val: 90000},
				{name: "parchment", val: 5000}
			],
			requires: {tech: ["acoustics"]}
		}, {
			name: "archeology",
			prices: [
				{name: "science",   val: 65000},
				{name: "compedium", val: 65}
			],
			// unlocks: {tech: ["biology"], jobs: ["geologist"], upgrades:["geodesy"]},
			requires: {tech: ["navigation"]},
			flavor: true
		}, {
			name: "electricity",
			prices: [
				{name: "science",   val: 75000},
				{name: "compedium", val: 85}
			],
			// unlocks: {tech: ["industrialization"]},
			requires: {tech: ["physics"]},
			flavor: true
		}, {
			name: "biology",
			prices: [
				{name: "science",   val: 85000},
				{name: "compedium", val: 100}
			],
			// unlocks: {tech: ["biochemistry"]},
			requires: {tech: ["archeology"]},
			flavor: true
		}, {
			name: "biochemistry",
			prices: [
				{name: "science",   val: 145000},
				{name: "compedium", val: 500}
			],
			// unlocks: {tech: ["genetics"], upgrades: ["biofuel"]},
			requires: {tech: ["biology"]},
			flavor: true
		}, {
			name: "genetics",
			prices: [
				{name: "science",   val: 190000},
				{name: "compedium", val: 1500}
			],
			// unlocks: {upgrades: ["unicornSelection", "gmo"]},
			requires: {tech: ["biochemistry"]},
			flavor: true
		}, {
			name: "industrialization",
			prices: [
				{name: "science",   val: 100000},
				{name: "blueprint", val: 25}
			],
			// unlocks: {tech: ["mechanization", "metalurgy", "combustion"], upgrades: ["barges", "advancedAutomation", "logistics"]},
			requires: {tech: ["electricity"]}
		}, {
			name: "mechanization",
			prices: [
				{name: "science",   val: 115000},
				{name: "blueprint", val: 45}
			],
			// unlocks: {tech: ["electronics"], crafts: ["concrate"], upgrades: ["pumpjack", "strenghtenBuild"], jobs: ["engineer"]},
			requires: {tech: ["industrialization"]}
		}, {
			name: "metalurgy",
			prices: [
				{name: "science",   val: 125000},
				{name: "blueprint", val: 60}
			],
			// unlocks: {upgrades: ["electrolyticSmelting", "oxidation", "miningDrill"]},
			requires: {tech: ["industrialization"]}
		}, {
			name: "combustion",
			prices: [
				{name: "science",   val: 115000},
				{name: "blueprint", val: 45}
			],
			// unlocks: {upgrades: ["offsetPress", "fuelInjectors", "oilRefinery"], tech: ["ecology"]},
			requires: {tech: ["industrialization"]}
		}, {
			name: "ecology",
			prices: [
				{name: "science",   val: 125000},
				{name: "blueprint", val: 55}
			],
			// unlocks: {stages: [{bld:"pasture", stage:1}]},
			requires: {tech: ["combustion"]}
		}, {
			name: "electronics",
			prices: [
				{name: "science",   val: 135000},
				{name: "blueprint", val: 70}
			],
			// unlocks: {
			// 	tech: ["nuclearFission", "rocketry", "robotics"],
			// 	upgrades: ["cadSystems", "refrigeration", "seti", "factoryLogistics", "factoryOptimization", "internet"],]
			// 	stages: [{bld: "library", stage: 1}, {bld: "amphitheatre", stage: 1}]
			// },
			requires: {tech: ["mechanization"]}
		}, {
			name: "robotics",
			prices: [
				{name: "science",   val: 140000},
				{name: "blueprint", val: 80}
			],
			// unlocks: {
			// 	tech: ["ai"],
			// 	upgrades: ["steelPlants", "rotaryKiln", "assistance", "factoryRobotics"],
			// 	crafts: ["tanker"],
			// 	stages: [{bld: "aqueduct", stage: 1}]
			// },
			requires: {tech: ["electronics"]}
		}, {
			name: "ai",
			prices: [
				{name: "science",   val: 250000},
				{name: "blueprint", val: 150}
			],
			// unlocks: {upgrades: ["neuralNetworks", "aiEngineers", "machineLearning"], buildings: ["aiCore"], tech: ["quantumCryptography"]},
			requires: {tech: ["robotics"]}
		}, {
			name: "quantumCryptography",
			prices: [
				{name: "science", val: 1250000},
				{name: "relic",   val: 1024}
			],
			// unlocks: {tech: ["blackchain"]},
			requires: {tech: ["ai"]}
		}, {
			name: "blackchain",
			prices: [
				{name: "science", val: 5000000},
				{name: "relic",   val: 5000}
			],
			// unlocks: {},
			requires: {tech: ["quantumCryptography"]}
		}, {
			name: "nuclearFission",
			prices: [
				{name: "science",   val: 150000},
				{name: "blueprint", val: 100}
			],
			// unlocks: {tech: ["nanotechnology", "particlePhysics"], upgrades: ["reactorVessel", "nuclearSmelters"]},
			requires: {tech: ["electronics"]}
		}, {
			name: "rocketry",
			prices: [
				{name: "science",   val: 175000},
				{name: "blueprint", val: 125}
			],
			// unlocks: {tech: ["sattelites", "oilProcessing"], tabs: ["space"], upgrades: ["oilDistillation"]},
			requires: {tech: ["electronics"]}
		}, {
			name: "oilProcessing",
			prices: [
				{name: "science",   val: 215000},
				{name: "blueprint", val: 150}
			],
			// unlocks: {crafts: ["kerosene"], upgrades: ["factoryProcessing"]},
			requires: {tech: ["rocketry"]}
		}, {
			name: "sattelites",
			prices: [
				{name: "science",   val: 190000},
				{name: "blueprint", val: 125}
			],
			// unlocks: {tech: ["orbitalEngineering" ], upgrades: ["photolithography", "orbitalGeodesy", "uplink", "thinFilm"]},
			requires: {tech: ["rocketry"]},
			flavor: true
		}, {
			name: "orbitalEngineering",
			prices: [
				{name: "science",   val: 250000},
				{name: "blueprint", val: 250}
			],
			// unlocks: {
			// 	tech: ["exogeology", "thorium"],
			// 	upgrades: ["hubbleTelescope", "satelliteRadio", "astrophysicists", "solarSatellites", "spaceEngineers", "starlink"]
			// },
			requires: {tech: ["sattelites"]}
		}, {
			name: "thorium",
			prices: [
				{name: "science",   val: 375000},
				{name: "blueprint", val: 375}
			],
			// unlocks: {crafts: ["thorium"], upgrades: ["thoriumReactors", "thoriumEngine", "qdot"]},
			requires: {tech: ["orbitalEngineering"]}
		}, {
			name: "exogeology",
			prices: [
				{name: "science",   val: 275000},
				{name: "blueprint", val: 250}
			],
			// unlocks: {tech: ["advExogeology"], upgrades: ["unobtainiumReflectors", "unobtainiumHuts", "unobtainiumDrill", "hydroPlantTurbines", "storageBunkers"]},
			requires: {tech: ["orbitalEngineering"]}
		}, {
			name: "advExogeology",
			prices: [
				{name: "science",   val: 325000},
				{name: "blueprint", val: 350}
			],
			// unlocks: {upgrades: ["eludiumCracker", "eludiumReflectors", "eludiumHuts", "mWReactor" /*, "eludiumDrill"*/], crafts: ["eludium"]},
			requires: {tech: ["exogeology"]}
		}, {
			name: "nanotechnology",
			prices: [
				{name: "science",   val: 200000},
				{name: "blueprint", val: 150}
			],
			// unlocks: {tech: ["superconductors"], upgrades: ["augumentation", "nanosuits", "photovoltaic", "fluidizedReactors"]},
			requires: {tech: ["nuclearFission"]}
		}, {
			name: "superconductors",
			prices: [
				{name: "science",   val: 225000},
				{name: "blueprint", val: 175}
			],
			// unlocks: {upgrades: ["coldFusion", "spaceManufacturing", "cryocomputing"], tech: ["antimatter"]},
			requires: {tech: ["nanotechnology"]}
		}, {
			name: "antimatter",
			prices: [
				{name: "science", val: 500000},
				{name: "relic",   val: 1}
			],
			// unlocks: {upgrades: ["amReactors", "amBases", "amDrive", "amFission"], tech: ["terraformation"]},
			requires: {tech: ["superconductors"]}
		}, {
			name: "terraformation",
			prices: [
				{name: "science", val: 750000},
				{name: "relic",   val: 5}
			],
			// unlocks: {tech: ["hydroponics"], space: [{planet: "yarn", bld: "terraformingStation"}]},
			requires: {tech: ["antimatter"]}
		}, {
			name: "hydroponics",
			prices: [
				{name: "science", val: 1000000},
				{name: "relic",   val: 25}
			],
			// unlocks: {tech: "exogeophysics", space: [{planet: "yarn", bld: "hydroponics"}]},
			requires: {tech: ["terraformation"]}
		}, {
			name: "exogeophysics",
			prices: [
				{name: "science", val: 25000000},
				{name: "relic",   val: 500}
			],
			requires: {tech: ["hydroponics"]}
		}, {
			name: "particlePhysics",
			prices: [
				{name: "science",   val: 185000},
				{name: "blueprint", val: 135}
			],
			// unlocks: {tech: ["chronophysics", "dimensionalPhysics"], upgrades: ["enrichedUranium", "railgun"]},
			requires: {tech: ["nuclearFission"]}
		}, {
			name: "dimensionalPhysics",
			prices: [
				{name: "science", val: 235000}
			],
			// unlocks: {upgrades: ["energyRifts", "lhc"]},
			requires: {tech: ["particlePhysics"]}
		}, {
			name: "chronophysics",
			prices: [
				{name: "science",     val: 250000},
				{name: "timeCrystal", val: 5}
			],
			// unlocks: {tech: ["tachyonTheory"], upgrades: ["stasisChambers", "fluxCondensator"]},
			requires: {tech: ["particlePhysics"]}
		}, {
			name: "tachyonTheory",
			prices: [
				{name: "science",     val: 750000},
				{name: "timeCrystal", val: 25},
				{name: "relic",       val: 1}
			],
			// unlocks: {tech: ["voidSpace"], upgrades: ["tachyonAccelerators", "chronoforge", "chronoEngineers"]},
			requires: {tech: ["chronophysics"]}
		}, {
			name: "cryptotheology",
			prices: [
				{name: "science", val: 650000},
				{name: "relic",   val: 5}
			],
			// unlocks: {upgrades: ["relicStation"]},
			requires: {tech: ["theology"]}
		}, {
			name: "voidSpace",
			prices: [
				{name: "science",     val: 800000},
				{name: "timeCrystal", val: 30},
				{name: "void",        val: 100}
			],
			// unlocks: {tech: ["paradoxalKnowledge"], upgrades: ["voidAspiration"], voidSpace: ["cryochambers"], challenges: ["atheism"]},
			requires: {tech: ["tachyonTheory"]}
		}, {
			name: "paradoxalKnowledge",
			prices: [
				{name: "science",     val: 1000000},
				{name: "timeCrystal", val: 40},
				{name: "void",        val: 250}
			],
			// unlocks: {chronoforge: ["ressourceRetrieval"], voidSpace: ["chronocontrol", "voidResonator"], upgrades: ["distorsion"]},
			requires: {tech: ["voidSpace"]}
		}
	],

	tabName: "Science",
	getVisible: function () {
		return this.game.bld.get("library").owned();
	},

	techs: null,
	techsByName: null,

	hideResearched: false,

	constructor: function () {
		this.i18nKeys = {tabName: "tab.name.science"};
		this.registerMetaItems(this.techData, classes.KGSaveEdit.ScienceMeta, "techs");
		this.meta.push(this.techs);
	},

	renderTabBlock: function () {
		var div = dojo.create("div", {class: "bottom-margin"}, this.tabBlockNode);
		this.game._createCheckbox($I("science.toggleResearched.label"), div, this, "hideResearched");

		this.techsBlock = dojo.create("table", {
			id: "techsBlock",
			class: "bottom-margin",
			innerHTML: '<tr><th colspan="2">' + $I("techs.panel.label") + "</th></tr>"
		}, this.tabBlockNode);
	},

	render: function () {
		for (var i = 0, len = this.techs.length; i < len; i++) {
			var tech = this.techs[i];
			tech.render();
			dojo.place(tech.domNode, this.techsBlock);
		}
	},

	update: function () {
		this.game.callMethods(this.techs, "update", this.hideResearched);
	},

	get: function (name) {
		return this.techsByName[name];
	},

	save: function (saveData) {
		saveData.science = {
			techs: this.game.filterMetadata(this.techs, ["name", "unlocked", "researched"]),
			hideResearched: this.hideResearched
		};
	},

	load: function (saveData) {
		if (saveData.science) {
			this.game.setCheckbox(this.hideResearchedNode, saveData.science.hideResearched);
			this.loadMetadata(saveData, "science.techs", "get", null, true);
		}
	},

	// console-only shortcut
	unlockAllTechs: function () {
		for (var i = this.techs.length - 1; i >= 0; i--) {
			var tech = this.techs[i];
			tech.set("unlocked", true);
		}
		this.game.update();
		return true;
	},

	researchAllTechs: function () {
		for (var i = this.techs.length - 1; i >= 0; i--) {
			var tech = this.techs[i];
			tech.set("unlocked", true);
			tech.set("researched", true);
		}
		this.game.update();
		return true;
	}
});


dojo.declare("classes.KGSaveEdit.ScienceMeta", classes.KGSaveEdit.UpgradeMeta, {
	constructor: function () {
		this.i18nKeys = {
			label: "science." + this.name + ".label",
			description: "science." + this.name + ".desc",
			effectDesc: "science." + this.name + ".effectDesc"
		};
		if (this.flavor) {
			this.i18nKeys.flavor = "science." + this.name + ".flavor";
		}
	},

	getDescription: function () {
		if (this.researched) {
			return this.description + "<br>Effect: " + this.effectDesc;
		}
		return this.description;
	},

	getPrices: function () {
		var prices = this.prices ? dojo.clone(this.prices) : [];
		return this.game.village.getEffectLeader("scientist", prices);
	}
});

});
