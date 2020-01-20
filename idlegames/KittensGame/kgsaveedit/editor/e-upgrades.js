/* global dojo, require, classes, $I, num */

require([], function () {
"use strict";

dojo.declare("classes.KGSaveEdit.UpgradeMeta", classes.KGSaveEdit.MetaItem, {
	name: "Undefined",
	unlocked: false,
	researched: false,

	domNode: null,

	constructor: function () { },

	getName: function () {
		var name = this.label || this.name;
		if (this.researched) {
			return name + " " + $I("btn.complete.capital");
		}
		return name;
	},

	getEffect: function (name) {
		if (!this.effects || !this.owned()) {
			return 0;
		}
		return this.effects[name];
	},

	render: function () {
		this.seti18n();

		this.domNode = dojo.create("tr", {
			class: "upgradeMeta",
			innerHTML: "<td>" + (this.label || this.name) + "</td><td></td>"
		});
		this.nameNode = this.domNode.children[0];

		this.game._createCheckbox($I("KGSaveEdit.label.unlocked"), this.domNode.children[1], this, "unlocked");
		this.game._createCheckbox($I("KGSaveEdit.label.researched"), this.domNode.children[1], this, "researched");
		dojo.addClass(this.researchedNode, "ownedInput");

		this.registerHighlight(this.domNode);
		this.registerTooltip(this.domNode);
	},

	owned: function () {
		return this.researched;
	},

	update: function (hideResearched) {
		// dojo.toggleClass(this.domNode, "metaOwned", this.researched);

		var hideme = hideResearched && this.researched;
		if (!hideme && this.hidden) {
			hideme = !this.unlocked && !this.researched;
		}
		dojo.toggleClass(this.domNode, "collapsed", Boolean(hideme));

		var req = this.game.checkRequirements(this);
		if (req) {
			if (!this.unlocked) {
				this.unlockedNode.checked = true;
				this.unlocked = true;
			}
		} else {
			if (this.unlocked !== this.unlockedNode.prevChecked) {
				this.unlockedNode.checked = this.unlockedNode.prevChecked;
				this.unlocked = this.unlockedNode.checked;
			}
		}

		dojo.toggleClass(this.nameNode, "spoiler", !this.unlocked);
		this.game.toggleDisabled(this.unlockedNode, req);
		this.updateEnabled();
	},

	load: function (saveData) {
		this.set("unlocked", Boolean(saveData.unlocked), false, true);
		this.set("researched", Boolean(saveData.researched));
	}
});


dojo.declare("classes.KGSaveEdit.WorkshopManager", [classes.KGSaveEdit.UI.Tab, classes.KGSaveEdit.Manager], {
	upgradeData: [
		{
			name: "mineralHoes",
			prices: [
				{name: "science",  val: 100},
				{name: "minerals", val: 275}
			],
			unlocked: true,
			// unlocks: {upgrades: ["ironHoes"]},
			effects: {
				"catnipJobRatio": 0.5
			}
		}, {
			name: "ironHoes",
			prices: [
				{name: "science", val: 200},
				{name: "iron",    val: 25}
			],
			unlocked: true,
			effects: {
				"catnipJobRatio": 0.3
			}
		}, {
			name: "mineralAxes",
			prices: [
				{name: "science",  val: 100},
				{name: "minerals", val: 500}
			],
			unlocked: true,
			// unlocks: {upgrades: ["ironAxes"]},
			effects: {
				"woodJobRatio": 0.7
			}
		}, {
			name: "ironAxes",
			prices: [
				{name: "science", val: 200},
				{name: "iron",    val: 50}
			],
			unlocked: true,
			effects: {
				"woodJobRatio": 0.5
			}
		}, {
			name: "steelAxe",
			prices: [
				{name: "science", val: 20000},
				{name: "steel",   val: 75}
			],
			requires: {tech: ["steel"]},
			effects: {
				"woodJobRatio": 0.5
			}
		}, {
			name: "reinforcedSaw",
			prices: [
				{name: "science", val: 2500},
				{name: "iron",    val: 1000}
			],
			requires: {tech: ["construction"]},
			effects: {
				"lumberMillRatio": 0.2
			},
			upgrades: {buildings: ["lumberMill"]}
		}, {
			name: "steelSaw",
			prices: [
				{name: "science", val: 52000},
				{name: "steel",   val: 750}
			],
			// unlocks: {upgrades: ["titaniumSaw"]},
			requires: {tech: ["physics"]},
			effects: {
				"lumberMillRatio": 0.2
			},
			upgrades: {buildings: ["lumberMill"]}
		}, {
			name: "titaniumSaw",
			prices: [
				{name: "science",  val: 70000},
				{name: "titanium", val: 500}
			],
			// unlocks: {upgrades: ["alloySaw"]},
			requires: {upgrades: ["steelSaw"]},
			effects: {
				"lumberMillRatio": 0.15
			},
			upgrades: {buildings: ["lumberMill"]}
		}, {
			name: "alloySaw",
			prices: [
				{name: "science", val: 85000},
				{name: "alloy",   val: 75}
			],
			requires: {upgrades: ["titaniumSaw"]},
			effects: {
				"lumberMillRatio": 0.15
			},
			upgrades: {buildings: ["lumberMill"]}
		}, {
			name: "titaniumAxe",
			prices: [
				{name: "science",  val: 38000},
				{name: "titanium", val: 10}
			],
			requires: {tech: ["navigation"]},
			effects: {
				"woodJobRatio": 0.5
			}
		}, {
			name: "alloyAxe",
			prices: [
				{name: "science", val: 70000},
				{name: "alloy",   val: 25}
			],
			requires: {tech: ["chemistry"]},
			effects: {
				"woodJobRatio": 0.5
			}
		}, {
			name: "unobtainiumAxe",
			prices: [
				{name: "science",     val: 125000},
				{name: "unobtainium", val: 75}
			],
			// requires: {program: ["moonMission"]},
			effects: {
				"woodJobRatio": 0.5
			},
			hidden: true
		}, {
			name: "unobtainiumSaw",
			prices: [
				{name: "science",     val: 145000},
				{name: "unobtainium", val: 125}
			],
			// requires: {program: ["moonMission"]},
			effects: {
				"lumberMillRatio": 0.25
			},
			upgrades: {buildings: ["lumberMill"]},
			hidden: true
		}, {
			name: "stoneBarns",
			prices: [
				{name: "science",  val: 500},
				{name: "wood",     val: 1000},
				{name: "minerals", val: 750},
				{name: "iron",     val: 50}
			],
			unlocked: true,
			effects: {
				"barnRatio": 0.75
			},
			upgrades: {buildings: ["barn", "warehouse", "harbor"]}
		}, {
			name: "reinforcedBarns",
			prices: [
				{name: "science", val: 800},
				{name: "beam",    val: 25},
				{name: "slab",    val: 10},
				{name: "iron",    val: 100}
			],
			unlocked: true,
			// unlocks: {upgrades: ["titaniumBarns"]},
			effects: {
				"barnRatio": 0.8
			},
			upgrades: {buildings: ["barn", "warehouse", "harbor"]}
		}, {
			name: "reinforcedWarehouses",
			prices: [
				{name: "science",  val: 15000},
				{name: "plate",    val: 50},
				{name: "steel",    val: 50},
				{name: "scaffold", val: 25}
			],
			// unlocks: {upgrades: ["ironwood"]},
			requires: {tech: ["steel"]},
			effects: {
				"warehouseRatio": 0.25
			},
			upgrades: {buildings: ["barn", "warehouse", "harbor", "mint"]}
		}, {
			name: "titaniumBarns",
			prices: [
				{name: "science",  val: 60000},
				{name: "titanium", val: 25},
				{name: "steel",    val: 200},
				{name: "scaffold", val: 250}
			],
			requires: {upgrades: ["reinforcedBarns"]},
			effects: {
				"barnRatio": 1
			},
			upgrades: {buildings: ["barn", "warehouse", "harbor"]}
		}, {
			name: "alloyBarns",
			prices: [
				{name: "science", val: 75000},
				{name: "alloy",   val: 20},
				{name: "plate",   val: 750}
			],
			requires: {tech: ["chemistry"]},
			effects: {
				"barnRatio": 1
			},
			upgrades: {buildings: ["barn", "warehouse", "harbor"]}
		}, {
			name: "concreteBarns",
			prices: [
				{name: "science",  val: 100000},
				{name: "concrate", val: 45},
				{name: "titanium", val: 2000}
			],
			requires: {upgrades: ["strenghtenBuild"]},
			effects: {
				"barnRatio": 0.75
			},
			upgrades: {buildings: ["barn", "warehouse", "harbor"]}
		}, {
			name: "titaniumWarehouses",
			prices: [
				{name: "science",  val: 70000},
				{name: "titanium", val: 50},
				{name: "steel",    val: 500},
				{name: "scaffold", val: 500}
			],
			requires: {upgrades: ["silos"]},
			effects: {
				"warehouseRatio": 0.5
			},
			upgrades: {buildings: ["barn", "warehouse", "harbor", "mint"]}
		}, {
			name: "alloyWarehouses",
			prices: [
				{name: "science",  val: 90000},
				{name: "titanium", val: 750},
				{name: "alloy",    val: 50}
			],
			requires: {tech: ["chemistry"]},
			effects: {
				"warehouseRatio": 0.45
			},
			upgrades: {buildings: ["barn", "warehouse", "harbor", "mint"]}
		}, {
			name: "concreteWarehouses",
			prices: [
				{name: "science",  val: 100000},
				{name: "titanium", val: 1250},
				{name: "concrate", val: 35}
			],
			requires: {upgrades: ["strenghtenBuild"]},
			effects: {
				"warehouseRatio": 0.35
			},
			upgrades: {buildings: ["barn", "warehouse", "harbor", "mint"]}
		}, {
			name: "storageBunkers",
			prices: [
				{name: "science",     val: 25000},
				{name: "unobtainium", val: 500},
				{name: "concrate",    val: 1250}
			],
			requires: {tech: ["exogeology"]},
			effects: {
				"warehouseRatio": 0.20
			},
			upgrades: {buildings: ["barn", "warehouse", "harbor", "mint"]}
		}, {
			name: "energyRifts",
			prices: [
				{name: "science",  val: 200000},
				{name: "titanium", val: 7500},
				{name: "uranium",  val: 250}
			],
			requires: {tech: ["dimensionalPhysics"]},
			upgrades: {buildings: ["accelerator"]}
		}, {
			name: "stasisChambers",
			prices: [
				{name: "science",     val: 235000},
				{name: "alloy",       val: 200},
				{name: "uranium",     val: 2000},
				{name: "timeCrystal", val: 1}
			],
			// unlocks: {upgrades: ["voidEnergy"]},
			requires: {tech: ["chronophysics"]},
			effects: {
				"acceleratorRatio": 0.95
			},
			upgrades: {buildings: ["accelerator"]}
		}, {
			name: "voidEnergy",
			prices: [
				{name: "science",     val: 275000},
				{name: "alloy",       val: 250},
				{name: "uranium",     val: 2500},
				{name: "timeCrystal", val: 2}
			],
			// unlocks: {upgrades: ["darkEnergy"]},
			requires: {upgrades: ["stasisChambers"]},
			effects: {
				"acceleratorRatio": 0.75
			},
			upgrades: {buildings: ["accelerator"]}
		}, {
			name: "darkEnergy",
			prices: [
				{name: "science",     val: 350000},
				{name: "eludium",     val: 75},
				{name: "timeCrystal", val: 3}
			],
			requires: {upgrades: ["voidEnergy"]},
			effects: {
				"acceleratorRatio": 2.5
			},
			upgrades: {buildings: ["accelerator"]}
		}, {
			name: "chronoforge",
			prices: [
				{name: "science",     val: 500000},
				{name: "relic",       val: 5},
				{name: "timeCrystal", val: 10}
			],
			requires: {tech: ["tachyonTheory"]}
		}, {
			name: "tachyonAccelerators",
			prices: [
				{name: "science",     val: 500000},
				{name: "eludium",     val: 125},
				{name: "timeCrystal", val: 10}
			],
			requires: {tech: ["tachyonTheory"]},
			effects: {
				"acceleratorRatio": 5
			},
			upgrades: {buildings: ["accelerator"]}
		}, {
			name: "fluxCondensator",
			prices: [
				{name: "alloy",       val: 250},
				{name: "unobtainium", val: 5000},
				{name: "timeCrystal", val: 5}
			],
			requires: {tech: ["chronophysics"]}
		}, {
			name: "lhc",
			prices: [
				{name: "science",     val: 250000},
				{name: "unobtainium", val: 100},
				{name: "alloy",       val: 150}
			],
			requires: {tech: ["dimensionalPhysics"]},
			upgrades: {buildings: ["accelerator"]}
		}, {
			name: "photovoltaic",
			prices: [
				{name: "science",  val: 75000},
				{name: "titanium", val: 5000}
			],
			requires: {tech: ["nanotechnology"]},
			effects: {
				"solarFarmRatio": 0.5
			},
			upgrades: {buildings: ["pasture"]}
		}, {
			name: "thinFilm",
			prices: [
				{name: "science",     val: 125000},
				{name: "unobtainium", val: 200},
				{name: "uranium",     val: 1000}
			],
			requires: {tech: ["sattelites"]},
			effects: {
				"solarFarmSeasonRatio": 1
			},
			upgrades: {buildings: ["pasture"]}
		}, {
			name: "qdot",
			prices: [
				{name: "science", val: 175000},
				{name: "eludium", val: 200},
				{name: "thorium", val: 1000}
			],
			requires: {tech: ["thorium"]},
			effects: {
				"solarFarmSeasonRatio": 1
			},
			upgrades: {buildings: ["pasture"]}
		}, {
			name: "solarSatellites",
			prices: [
				{name: "science", val: 225000},
				{name: "alloy",   val: 750}
			],
			requires: {tech: ["orbitalEngineering"]}
		}, {
			name: "cargoShips",
			prices: [
				{name: "science",   val: 55000},
				{name: "blueprint", val: 15}
			],
			requires: {tech: ["navigation"]},
			effects: {
				"harborRatio": 0.01
			},
			upgrades: {buildings: ["harbor"]},
			flavor: true
		}, {
			name: "barges",
			prices: [
				{name: "science",   val: 100000},
				{name: "titanium",  val: 1500},
				{name: "blueprint", val: 30}
			],
			requires: {tech: ["industrialization"]},
			effects: {
				"harborCoalRatio": 0.5
			},
			upgrades: {buildings: ["harbor"]}
		}, {
			name: "reactorVessel",
			prices: [
				{name: "science",  val: 135000},
				{name: "titanium", val: 5000},
				{name: "uranium",  val: 125}
			],
			requires: {tech: ["nuclearFission"]},
			effects: {
				"shipLimit": 0.05
			},
			upgrades: {buildings: ["harbor"]}
		}, {
			name: "ironwood",
			prices: [
				{name: "science", val: 30000},
				{name: "wood",    val: 15000},
				{name: "iron",    val: 3000}
			],
			// unlocks: {upgrades: ["silos"]},
			requires: {upgrades: ["reinforcedWarehouses"]},
			effects: {
				"hutPriceRatio": -0.5
			}
		}, {
			name: "concreteHuts",
			prices: [
				{name: "science",  val: 125000},
				{name: "concrate", val: 45},
				{name: "titanium", val: 3000}
			],
			requires: {upgrades: ["strenghtenBuild"]},
			effects: {
				"hutPriceRatio": -0.3
			}
		}, {
			name: "unobtainiumHuts",
			prices: [
				{name: "science",     val: 200000},
				{name: "unobtainium", val: 350},
				{name: "titanium",    val: 15000}
			],
			requires: {tech: ["exogeology"]},
			effects: {
				"hutPriceRatio": -0.25
			}
		}, {
			name: "eludiumHuts",
			prices: [
				{name: "science", val: 275000},
				{name: "eludium", val: 125}
			],
			requires: {tech: ["advExogeology"]},
			effects: {
				"hutPriceRatio": -0.1
			}
		}, {
			name: "silos",
			prices: [
				{name: "science",   val: 50000},
				{name: "steel",     val: 125},
				{name: "blueprint", val: 5}
			],
			// unlocks: {upgrades: ["titaniumWarehouses"]},
			requires: {upgrades: ["ironwood"]},
			upgrades: {buildings: ["barn", "warehouse", "harbor"]},
			flavor: true
		}, {
			name: "refrigeration",
			prices: [
				{name: "science",   val: 125000},
				{name: "titanium",  val: 2500},
				{name: "blueprint", val: 15}
			],
			requires: {tech: ["electronics"]},
			effects: {
				"catnipMaxRatio": 0.75
			}
		}, {
			name: "compositeBow",
			prices: [
				{name: "science", val: 500},
				{name: "iron",    val: 100},
				{name: "wood",    val: 200}
			],
			requires: {tech: ["construction"]},
			effects: {
				"manpowerJobRatio": 0.5
			}
		}, {
			name: "crossbow",
			prices: [
				{name: "science", val: 12000},
				{name: "iron",    val: 1500}
			],
			requires: {tech: ["machinery"]},
			effects: {
				"manpowerJobRatio": 0.25
			}
		}, {
			name: "railgun",
			prices: [
				{name: "science",   val: 150000},
				{name: "titanium",  val: 5000},
				{name: "blueprint", val: 25}
			],
			requires: {tech: ["particlePhysics"]},
			effects: {
				"manpowerJobRatio": 0.25
			}
		}, {
			name: "bolas",
			prices: [
				{name: "science",  val: 1000},
				{name: "minerals", val: 250},
				{name: "wood",     val: 50}
			],
			requires: {tech: ["mining"]},
			effects: {
				"hunterRatio": 1
			},
			flavor: true
		}, {
			name: "huntingArmor",
			prices: [
				{name: "science", val: 2000},
				{name: "iron",    val: 750}
			],
			requires: {tech: ["metal"]},
			effects: {
				"hunterRatio": 2
			},
			flavor: true
		}, {
			name: "steelArmor",
			prices: [
				{name: "science", val: 10000},
				{name: "steel",   val: 50}
			],
			requires: {tech: ["steel"]},
			effects: {
				"hunterRatio": 0.5
			}
		}, {
			name: "alloyArmor",
			prices: [
				{name: "science", val: 50000},
				{name: "alloy",   val: 25}
			],
			requires: {tech: ["chemistry"]},
			effects: {
				"hunterRatio": 0.5
			}
		}, {
			name: "nanosuits",
			prices: [
				{name: "science", val: 185000},
				{name: "alloy",   val: 250}
			],
			requires: {tech: ["nanotechnology"]},
			effects: {
				"hunterRatio": 0.5
			}
		}, {
			name: "caravanserai",
			prices: [
				{name: "science", val: 25000},
				{name: "ivory",   val: 10000},
				{name: "gold",    val: 250}
			],
			requires: {tech: ["navigation"]},
			effects: {
				"standingRatio": 0.35
			},
			upgrades: {buildings: ["tradepost"]},
			flavor: true
		}, {
			name: "advancedRefinement",
			prices: [
				{name: "science", val: 500},
				{name: "catnip",  val: 5000}
			],
			requires: {tech: ["construction"]},
			handler: function (self) {
				var price = self.owned() ? 50 : 100;
				self.game.workshop.getCraft("wood").prices = [{name: "catnip", val: price}];
			},
			flavor: true
		}, {
			name: "goldOre",
			prices: [
				{name: "minerals", val: 800},
				{name: "iron",     val: 100},
				{name: "science",  val: 1000}
			],
			requires: {tech: ["currency"]},
			upgrades: {buildings: ["smelter"]},
			flavor: true
		}, {
			name: "geodesy",
			prices: [
				{name: "titanium",  val: 250},
				{name: "starchart", val: 500},
				{name: "science",   val: 90000}
			],
			requires: {tech: ["archeology"]},
			upgrades: {jobs: ["geologist"]},
			flavor: true
		}, {
			name: "register",
			prices: [
				{name: "gold",     val: 10},
				{name: "science",  val: 500}
			],
			requires: {tech: ["writing"]}
		}, {
			name: "strenghtenBuild",
			prices: [
				{name: "science",  val: 100000},
				{name: "concrate", val: 50}
			],
			// unlocks: {upgrades: ["concreteWarehouses", "concreteBarns", "concreteHuts"]},
			requires: {tech: ["mechanization"]},
			effects: {
				"barnRatio":      0.05,
				"warehouseRatio": 0.05
			},
			upgrades: {buildings: ["barn", "warehouse", "harbor", "mint"]}
		}, {
			name: "miningDrill",
			prices: [
				{name: "titanium", val: 1750},
				{name: "steel",    val: 750},
				{name: "science",  val: 100000}
			],
			requires: {tech: ["metalurgy"]},
			upgrades: {jobs: ["geologist"]}
		}, {
			name: "unobtainiumDrill",
			prices: [
				{name: "unobtainium", val: 250},
				{name: "alloy",       val: 1250},
				{name: "science",     val: 250000}
			],
			requires: {tech: ["exogeology"]},
			upgrades: {jobs: ["geologist"]}
		}, {
			name: "coalFurnace",
			prices: [
				{name: "minerals", val: 5000},
				{name: "iron",     val: 2000},
				{name: "beam",     val: 35},
				{name: "science",  val: 5000}
			],
			requires: {tech: ["steel"]},
			flavor: true
		}, {
			name: "deepMining",
			prices: [
				{name: "iron",    val: 1200},
				{name: "beam",    val: 50},
				{name: "science", val: 5000}
			],
			requires: {tech: ["steel"]},
			upgrades: {buildings: ["mine"]},
			flavor: true
		}, {
			name: "pyrolysis",
			prices: [
				{name: "compedium", val: 5},
				{name: "science",   val: 35000}
			],
			requires: {tech: ["physics"]},
			effects: {
				"coalSuperRatio": 0.2
			}
		}, {
			name: "electrolyticSmelting",
			prices: [
				{name: "titanium", val: 2000},
				{name: "science",  val: 100000}
			],
			requires: {tech: ["metalurgy"]},
			effects: {
				"smelterRatio": 0.95
			}
		}, {
			name: "oxidation",
			prices: [
				{name: "steel",   val: 5000},
				{name: "science", val: 100000}
			],
			requires: {tech: ["metalurgy"]},
			effects: {
				"calcinerRatio": 0.95
			}
		}, {
			name: "steelPlants",
			prices: [
				{name: "titanium", val: 3500},
				{name: "gear",     val: 750},
				{name: "science",  val: 140000}
			],
			// unlocks: {upgrades: ["automatedPlants"]},
			requires: {tech: ["robotics"]},
			effects: {
				"calcinerSteelRatio": 0.1
			}
		}, {
			name: "automatedPlants",
			prices: [
				{name: "alloy",   val: 750},
				{name: "science", val: 200000}
			],
			// unlocks: {upgrades: ["nuclearPlants"]},
			requires: {upgrades: ["steelPlants"]},
			effects: {
				"calcinerSteelCraftRatio": 0.25
			}
		}, {
			name: "nuclearPlants",
			prices: [
				{name: "uranium", val: 10000},
				{name: "science", val: 250000}
			],
			requires: {upgrades: ["automatedPlants"]},
			effects: {
				"calcinerSteelReactorBonus": 0.02
			}
		}, {
			name: "rotaryKiln",
			prices: [
				{name: "titanium", val: 5000},
				{name: "gear",     val: 500},
				{name: "science",  val: 145000}
			],
			requires: {tech: ["robotics"]},
			effects: {
				"calcinerRatio": 0.75
			}
		}, {
			name: "fluidizedReactors",
			prices: [
				{name: "alloy",   val: 200},
				{name: "science", val: 175000}
			],
			requires: {tech: ["robotics"]},
			effects: {
				"calcinerRatio": 1
			}
		}, {
			name: "nuclearSmelters",
			prices: [
				{name: "uranium", val: 250},
				{name: "science", val: 165000}
			],
			requires: {tech: ["nuclearFission"]}
		}, {
			name: "orbitalGeodesy",
			prices: [
				{name: "alloy",   val: 1000},
				{name: "oil",     val: 35000},
				{name: "science", val: 150000}
			],
			requires: {tech: ["sattelites"]},
			upgrades: {buildings: ["quarry"]}
		}, {
			name: "printingPress",
			prices: [
				{name: "gear",    val: 45},
				{name: "science", val: 7500}
			],
			requires: {tech: ["machinery"]},
			upgrades: {buildings: ["steamworks"]}
		}, {
			name: "offsetPress",
			prices: [
				{name: "gear",    val: 250},
				{name: "oil",     val: 15000},
				{name: "science", val: 100000}
			],
			requires: {tech: ["combustion"]},
			upgrades: {buildings: ["steamworks"]}
		}, {
			name: "photolithography",
			prices: [
				{name: "alloy",   val: 1250},
				{name: "oil",     val: 50000},
				{name: "uranium", val: 250},
				{name: "science", val: 250000}
			],
			requires: {tech: ["sattelites"]},
			upgrades: {buildings: ["steamworks"]}
		}, {
			name: "uplink",
			prices: [
				{name: "alloy",   val: 1750},
				{name: "science", val: 75000}
			],
			effects: {
				"uplinkDCRatio": 0.01,
				"uplinkLabRatio": 0.01
			},
			requires: {tech: ["sattelites"]},
			upgrades: {buildings: ["library", "biolab"]}
		}, {
			name: "starlink",
			prices: [
				{name: "alloy",   val: 5000},
				{name: "oil",     val: 25000},
				{name: "science", val: 175000}
			],
			effects: {
				"uplinkLabRatio": 0.01
			},
			requires: {tech: ["orbitalEngineering"]},
			upgrades: {buildings: ["library", "biolab"]}
		}, {
			name: "cryocomputing",
			prices: [
				{name: "eludium", val: 15},
				{name: "science", val: 125000}
			],
			requires: {tech: ["superconductors"]},
			upgrades: {buildings: ["library"]}
		}, {
			name: "machineLearning",
			prices: [
				{name: "science",    val: 175000},
				{name: "eludium",    val: 25},
				{name: "antimatter", val: 125}
			],
			effects: {
				"dataCenterAIRatio": 0.1
			},
			requires: {tech: ["ai"]},
			upgrades: {buildings: ["library"]}
		}, {
			name: "factoryAutomation",
			prices: [
				{name: "gear",    val: 25},
				{name: "science", val: 10000}
			],
			requires: {tech: ["machinery"]},
			flavor: true
		}, {
			name: "advancedAutomation",
			prices: [
				{name: "gear",      val: 75},
				{name: "blueprint", val: 25},
				{name: "science",   val: 100000}
			],
			requires: {tech: ["industrialization"]}
		}, {
			name: "pneumaticPress",
			prices: [
				{name: "gear",      val: 30},
				{name: "blueprint", val: 5},
				{name: "science",   val: 20000}
			],
			requires: {tech: ["physics"]}
		}, {
			name: "combustionEngine",
			prices: [
				{name: "gear",      val: 25},
				{name: "blueprint", val: 5},
				{name: "science",   val: 20000}
			],
			requires: {tech: ["steel"]},
			effects: {
				"coalRatioGlobalReduction": 0.2
			},
			upgrades: {buildings: ["steamworks"]},
			flavor: true
		}, {
			name: "fuelInjectors",
			prices: [
				{name: "gear",    val: 250},
				{name: "oil",     val: 20000},
				{name: "science", val: 100000}
			],
			requires: {tech: ["combustion"]},
			upgrades: {buildings: ["steamworks"]},
			effects: {
				"coalRatioGlobalReduction": 0.2
			}
		}, {
			name: "factoryLogistics",
			prices: [
				{name: "gear",     val: 250},
				{name: "titanium", val: 2000},
				{name: "science",  val: 100000}
			],
			requires: {tech: ["electronics"]},
			upgrades: {buildings: ["factory"]}
		}, {
			name: "factoryOptimization",
			prices: [
				{name: "gear",     val: 125},
				{name: "titanium", val: 1250},
				{name: "science",  val: 75000}
			],
			effects: {
				"t1CraftRatio": 10,
				"t2CraftRatio": 2
			}
		}, {
			name: "factoryRobotics",
			prices: [
				{name: "gear",     val: 250},
				{name: "titanium", val: 2500},
				{name: "science",  val: 100000}
			],
			requires: {tech: ["robotics"]},
			effects: {
				"t1CraftRatio": 10,
				"t2CraftRatio": 5,
				"t3CraftRatio": 2
			}
		}, {
			name: "spaceEngineers",
			prices: [
				{name: "alloy",   val: 500},
				{name: "science", val: 225000}
			],
			requires: {tech: ["orbitalEngineering"]},
			effects: {
				"t1CraftRatio": 2,
				"t2CraftRatio": 2,
				"t3CraftRatio": 2,
				"t4CraftRatio": 2
			}
		}, {
			name: "aiEngineers",
			prices: [
				{name: "science",     val: 35000},
				{name: "eludium",     val: 50},
				{name: "antimatter",  val: 500}
			],
			requires: {tech: ["ai"]},
			effects: {
				"t1CraftRatio": 10,
				"t2CraftRatio": 5,
				"t3CraftRatio": 5,
				"t4CraftRatio": 2,
				"t5CraftRatio": 2
			}
		}, {
			name: "chronoEngineers",
			prices: [
				{name: "science",     val: 500000},
				{name: "eludium",     val: 100},
				{name: "timeCrystal", val: 5}
			],
			requires: {tech: ["tachyonTheory"]},
			effects: {
				"t1CraftRatio": 2,
				"t2CraftRatio": 2,
				"t3CraftRatio": 2,
				"t4CraftRatio": 2,
				"t5CraftRatio": 2
			}
		}, {
			name: "spaceManufacturing",
			prices: [
				{name: "titanium", val: 125000},
				{name: "science",  val: 250000}
			],
			requires: {tech: ["superconductors"]},
			upgrades: {buildings: ["factory"]}
		}, {
			name: "celestialMechanics",
			prices: [
				{name: "science", val: 250}
			],
			requires: {tech: ["math"]}
		}, {
			name: "astrolabe",
			prices: [
				{name: "titanium",  val: 5},
				{name: "starchart", val: 75},
				{name: "science",   val: 25000}
			],
			requires: {tech: ["navigation"]},
			upgrades: {buildings: ["observatory"]}
		}, {
			name: "titaniumMirrors",
			prices: [
				{name: "titanium",  val: 15},
				{name: "starchart", val: 20},
				{name: "science",   val: 20000}
			],
			requires: {tech: ["navigation"]},
			effects: {
				"libraryRatio": 0.02
			},
			upgrades: {buildings: ["observatory"]},
			flavor: true
		}, {
			name: "unobtainiumReflectors",
			prices: [
				{name: "unobtainium", val: 75},
				{name: "starchart",   val: 750},
				{name: "science",     val: 250000}
			],
			requires: {tech: ["exogeology"]},
			effects: {
				"libraryRatio": 0.02
			},
			upgrades: {buildings: ["observatory"]}
		}, {
			name: "eludiumReflectors",
			prices: [
				{name: "eludium", val: 15},
				{name: "science", val: 250000}
			],
			requires: {tech: ["advExogeology"]},
			effects: {
				"libraryRatio": 0.02
			},
			upgrades: {buildings: ["observatory"]}
		}, {
			name: "hydroPlantTurbines",
			prices: [
				{name: "unobtainium", val: 125},
				{name: "science",     val: 250000}
			],
			requires: {tech: ["exogeology"]},
			effects: {
				"hydroPlantRatio": 0.15
			},
			upgrades: {buildings: ["aqueduct"]}
		}, {
			name: "amBases",
			prices: [
				{name: "eludium",    val: 15},
				{name: "antimatter", val: 250}
			],
			// unlcoks: {upgrades: ["aiBases"]},
			requires: {tech: ["antimatter"]}
		}, {
			name: "aiBases",
			prices: [
				{name: "antimatter", val: 7500},
				{name: "science",    val: 750000}
			],
			requires: {upgrades: ["amBases"]}
		}, {
			name: "amFission",
			prices: [
				{name: "antimatter", val: 175},
				{name: "thorium",    val: 7500},
				{name: "science",    val: 525000}
			],
			requires: {tech: ["antimatter"]},
			effects: {
				"eludiumAutomationBonus": 0.25
			}
		}, {
			name: "amReactors",
			prices: [
				{name: "eludium",    val: 35},
				{name: "antimatter", val: 750}
			],
			// unlocks: {upgrades: ["amReactorsMK2"]},
			requires: {tech: ["antimatter"]},
			effects: {
				"spaceScienceRatio": 0.95
			},
			upgrades: {spaceBuilding: ["researchVessel", "spaceBeacon"]}
		}, {
			name: "amReactorsMK2",
			prices: [
				{name: "eludium",    val: 70},
				{name: "antimatter", val: 1750}
			],
			// unlocks: {upgrades: ["voidReactors"]},
			requires: {upgrades: ["amReactors"]},
			effects: {
				"spaceScienceRatio": 1.5
			},
			upgrades: {spaceBuilding: ["researchVessel", "spaceBeacon"]}
		}, {
			name: "voidReactors",
			prices: [
				{name: "void",       val: 250},
				{name: "antimatter", val: 2500}
			],
			requires: {upgrades: ["amReactorsMK2"]},
			effects: {
				"spaceScienceRatio": 4
			},
			upgrades: {spaceBuilding: ["researchVessel", "spaceBeacon"]}
		}, {
			name: "relicStation",
			prices: [
				{name: "eludium",    val: 100},
				{name: "antimatter", val: 5000}
			],
			requires: {tech: ["cryptotheology"]},
			effects: {
				"beaconRelicsPerDay": 0.01
			}
		}, {
			name: "amDrive",
			prices: [
				{name: "antimatter", val: 125},
				{name: "science",    val: 450000}
			],
			requires: {tech: ["antimatter"]},
			effects: {
				"routeSpeed": 25
			}
		}, {
			name: "pumpjack",
			prices: [
				{name: "titanium", val: 250},
				{name: "gear",     val: 125},
				{name: "science",  val: 100000}
			],
			requires: {tech: ["mechanization"]},
			effects: {
				"oilWellRatio": 0.45
			},
			upgrades: {buildings: ["oilWell"]}
		}, {
			name: "biofuel",
			prices: [
				{name: "titanium", val: 1250},
				{name: "science",  val: 150000}
			],
			requires: {tech: ["biochemistry"]},
			upgrades: {buildings: ["biolab"]}
		}, {
			name: "unicornSelection",
			prices: [
				{name: "titanium", val: 1500},
				{name: "science",  val: 175000}
			],
			requires: {tech: ["genetics"]},
			effects: {
				"unicornsGlobalRatio": 0.25
			}
		}, {
			name: "gmo",
			prices: [
				{name: "titanium", val: 1500},
				{name: "catnip",   val: 1000000},
				{name: "science",  val: 175000}
			],
			requires: {tech: ["genetics"]},
			effects: {
				"biofuelRatio": 0.6
			},
			upgrades: {buildings: ["biolab"]}
		}, {
			name: "cadSystems",
			prices: [
				{name: "titanium", val: 750},
				{name: "science",  val: 125000}
			],
			requires: {tech: ["electronics"]},
			effects: {
				"cadBlueprintCraftRatio": 0.01
			}
		}, {
			name: "seti",
			prices: [
				{name: "titanium", val: 250},
				{name: "science",  val: 125000}
			],
			requires: {tech: ["electronics"]}
		}, {
			name: "logistics",
			prices: [
				{name: "gear",     val: 100},
				{name: "scaffold", val: 1000},
				{name: "science",  val: 100000}
			],
			requires: {tech: ["industrialization"]},
			effects: {
				"skillMultiplier": 0.15
			}
		}, {
			name: "augumentation",
			prices: [
				{name: "titanium", val: 5000},
				{name: "uranium",  val: 50},
				{name: "science",  val: 150000}
			],
			requires: {tech: ["nanotechnology"]},
			effects: {
				"skillMultiplier": 1
			}
		}, {
			name: "internet",
			prices: [
				{name: "titanium", val: 5000},
				{name: "uranium",  val: 50},
				{name: "science",  val: 150000}
			]
		}, {
			name: "neuralNetworks",
			prices: [
				{name: "titanium", val: 7500},
				{name: "science",  val: 200000}
			],
			// unlocks: {upgrades: ["ai"]},
			requires: {tech: ["ai"]},
			upgrades: {buildings: ["factory"]}
		}, {
			name: "assistance",
			prices: [
				{name: "steel",   val: 10000},
				{name: "gear",    val: 250},
				{name: "science", val: 100000}
			],
			requires: {tech: ["robotics"]},
			effects: {
				"catnipDemandWorkerRatioGlobal": -0.25
			}
		}, {
			name: "enrichedUranium",
			prices: [
				{name: "titanium", val: 7500},
				{name: "uranium",  val: 150},
				{name: "science",  val: 175000}
			],
			requires: {tech: ["particlePhysics"]},
			effects: {
				"uraniumRatio": 0.25
			},
			upgrades: {buildings: ["reactor"]}
		}, {
			name: "coldFusion",
			prices: [
				{name: "eludium", val: 25},
				{name: "science", val: 200000}
			],
			requires: {tech: ["superconductors"]},
			effects: {
				"reactorEnergyRatio": 0.25
			},
			upgrades: {buildings: ["reactor"]}
		}, {
			name: "thoriumReactors",
			prices: [
				{name: "thorium",  val: 10000},
				{name: "science",  val: 400000}
			],
			// unlocks: {upgrades: ["enrichedThorium"]},
			requires: {tech: ["thorium"]},
			effects: {
				"reactorEnergyRatio":     0.25,
				"reactorThoriumPerTick": -0.05
			},
			upgrades: {buildings: ["reactor"]}
		}, {
			name: "enrichedThorium",
			prices: [
				{name: "thorium", val: 12500},
				{name: "science", val: 500000}
			],
			requires: {upgrades: ["thoriumReactors"]},
			effects: {
				"reactorThoriumPerTick": 0.0125
			},
			upgrades: {buildings: ["reactor"]}
		}, {
			name: "hubbleTelescope",
			prices: [
				{name: "alloy",   val: 1250},
				{name: "oil",     val: 50000},
				{name: "science", val: 250000}
			],
			// unlocks: {upgrades: ["satnav"]},
			requires: {tech: ["orbitalEngineering"]},
			effects: {
				"starchartGlobalRatio": 0.3
			}
		}, {
			name: "satnav",
			prices: [
				{name: "alloy",   val: 750},
				{name: "science", val: 200000}
			],
			requires: {upgrades: ["hubbleTelescope"]},
			effects: {
				"satnavRatio": 0.0125
			}
		}, {
			name: "satelliteRadio",
			prices: [
				{name: "alloy",   val: 5000},
				{name: "science", val: 225000}
			],
			requires: {tech: ["orbitalEngineering"]},
			effects: {
				"broadcastTowerRatio": 0.005
			}
		}, {
			name: "astrophysicists",
			prices: [
				{name: "unobtainium", val: 350},
				{name: "science",     val: 250000}
			],
			requires: {tech: ["orbitalEngineering"]},
			upgrades: {jobs: ["scholar"]}
		}, {
			name: "mWReactor",
			prices: [
				{name: "eludium", val: 50},
				{name: "science", val: 150000}
			],
			effects: {
				"lunarOutpostRatio": 0.75
			},
			requires: {tech: ["advExogeology"]}
		}, {
			name: "eludiumCracker",
			prices: [
				{name: "eludium", val: 250},
				{name: "science", val: 275000}
			],
			requires: {tech: ["advExogeology"]},
			effects: {
				"crackerRatio": 1
			},
			upgrades: {program: ["planetCracker"]}
		}, {
			name: "thoriumEngine",
			prices: [
				{name: "ship",     val: 10000},
				{name: "gear",     val: 40000},
				{name: "alloy",    val: 2000},
				{name: "thorium",  val: 100000},
				{name: "science",  val: 400000}
			],
			requires: {tech: ["thorium"]},
			effects: {
				"routeSpeed": 50
			}
		}, {
			name: "oilRefinery",
			prices: [
				{name: "titanium", val: 1250},
				{name: "gear",     val: 500},
				{name: "science",  val: 125000}
			],
			requires: {tech: ["combustion"]},
			effects: {
				"oilWellRatio": 0.35
			},
			upgrades: {buildings: ["oilWell"]}
		}, {
			name: "oilDistillation",
			prices: [
				{name: "titanium", val: 5000},
				{name: "science",  val: 175000}
			],
			requires: {tech: ["rocketry"]},
			effects: {
				"oilWellRatio": 0.75
			},
			upgrades: {buildings: ["oilWell"]}
		}, {
			name: "factoryProcessing",
			prices: [
				{name: "titanium", val: 7500},
				{name: "concrate", val: 125},
				{name: "science",  val: 195000}
			],
			requires: {tech: ["oilProcessing"]},
			effects: {
				"factoryRefineRatio": 0.05
			},
			upgrades: {buildings: ["workshop"]}
		}, {
			name: "voidAspiration",
			prices: [
				{name: "timeCrystal", val: 15},
				{name: "antimatter",  val: 2000}
			],
			// unlocks: {voidSpace: ["voidHoover", "voidRift"]},
			requires: {tech: ["voidSpace"]}
		}, {
			name: "distorsion",
			prices: [
				{name: "timeCrystal", val: 25},
				{name: "antimatter",  val: 2000},
				{name: "void",        val: 1000},
				{name: "science",     val: 300000}
			],
			requires: {tech: ["paradoxalKnowledge"]},
			effects: {
				"temporalParadoxDayBonus": 2
			},
			upgrades: {voidSpace: ["chronocontrol"]}
		}, {
			name: "turnSmoothly",
			prices: [
				{name: "unobtainium",  val: 100000},
				{name: "timeCrystal",  val: 25},
				{name: "void",         val: 750},
				{name: "temporalFlux", val: 6500}
			],
			requires: {voidSpace: ["chronocontrol"]},
			effects: {
				"temporalFluxProductionChronosphere": 1
			},
			upgrades: {
				buildings: ["chronosphere"]
			}
		}
	],

	craftData: [
		{
			name: "wood",
			prices: [
				{name: "catnip", val: 100}
			],
			unlocked: true,
			ignoreBonuses: true,
			progressHandicap: 1,
			tier: 1
		}, {
			name: "beam",
			prices: [
				{name: "wood", val: 175}
			],
			unlocked: true,
			progressHandicap: 1,
			tier: 1
		}, {
			name: "slab",
			prices: [
				{name: "minerals", val: 250}
			],
			unlocked: true,
			progressHandicap: 1,
			tier: 1
		}, {
			name: "plate",
			prices: [
				{name: "iron", val: 125}
			],
			unlocked: true,
			progressHandicap: 4,
			tier: 1
		}, {
			name: "steel",
			prices: [
				{name: "iron", val: 100},
				{name: "coal", val: 100}
			],
			unlocked: false,
			requires: {tech: ["steel"]},
			progressHandicap: 4,
			tier: 2
		}, {
			name: "concrate",
			prices: [
				{name: "slab",  val: 2500},
				{name: "steel", val: 25}
			],
			unlocked: false,
			requires: {tech: ["mechanization"]},
			progressHandicap: 9,
			tier: 4
		}, {
			name: "gear",
			prices: [
				{name: "steel", val: 15}
			],
			unlocked: true,
			progressHandicap: 5,
			tier: 3
		}, {
			name: "alloy",
			prices: [
				{name: "steel",    val: 75},
				{name: "titanium", val: 10}
			],
			unlocked: false,
			requires: {tech: ["chemistry"]},
			progressHandicap: 7,
			tier: 4
		}, {
			name: "eludium",
			prices: [
				{name: "alloy",       val: 2500},
				{name: "unobtainium", val: 1000}
			],
			unlocked: false,
			requires: {tech: ["advExogeology"]},
			progressHandicap: 100,
			tier: 5
		}, {
			name: "scaffold",
			prices: [
				{name: "beam", val: 50}
			],
			unlocked: true,
			progressHandicap: 2,
			tier: 2
		}, {
			name: "ship",
			prices: [
				{name: "scaffold",  val: 100},
				{name: "plate",     val: 150},
				{name: "starchart", val: 25}
			],
			unlocked: false,
			requires: {tech: ["navigation"]},
			upgrades: {buildings: ["harbor"]},
			progressHandicap: 20,
			tier: 3
		}, {
			name: "tanker",
			prices: [
				{name: "ship",      val: 200},
				{name: "alloy",     val: 1250},
				{name: "blueprint", val: 5}
			],
			unlocked: false,
			requires: {tech: ["robotics"]},
			upgrades: {buildings: ["harbor"]},
			progressHandicap: 20,
			tier: 5
		}, {
			name: "kerosene",
			prices: [
				{name: "oil", val: 7500}
			],
			unlocked: false,
			requires: {tech: ["oilProcessing"]},
			progressHandicap: 5,
			tier: 2
		}, {
			name: "parchment",
			prices: [
				{name: "furs", val: 175}
			],
			unlocked: false,
			requires: {tech: ["writing"]},
			progressHandicap: 1,
			tier: 1
		}, {
			name: "manuscript",
			prices: [
				{name: "parchment", val: 25},
				{name: "culture",   val: 400}
			],
			unlocked: true,
			progressHandicap: 2,
			tier: 2
		}, {
			name: "compedium",
			prices: [
				{name: "manuscript", val: 50},
				{name: "science",    val: 10000}
			],
			unlocked: false,
			requires: {tech: ["philosophy"]},
			progressHandicap: 5,
			tier: 3
		}, {
			name: "blueprint",
			prices: [
				{name: "compedium", val: 25},
				{name: "science",   val: 25000}
			],
			unlocked: false,
			requires: {tech: ["physics"]},
			progressHandicap: 10,
			tier: 3
		}, {
			name: "thorium",
			prices: [
				{name: "uranium", val: 250}
			],
			unlocked: false,
			requires: {tech: ["thorium"]},
			progressHandicap: 5,
			tier: 3
		}, {
			name: "megalith",
			prices: [
				{name: "slab",  val: 50},
				{name: "beam",  val: 25},
				{name: "plate", val: 5}
			],
			unlocked: true,
			progressHandicap: 5,
			tier: 3
		}, {
			name: "bloodstone",
			prices: [
				{name: "timeCrystal", val: 5000},
				{name: "relic",       val: 10000}
			],
			unlocked: true,
			progressHandicap: 7500,
			tier: 5
		}
	],

	effectsBase: {
		"scienceMax": 0,
		"oilMax":     0,
		"cultureMax": 0
	},

	tabName: "Workshop",
	getVisible: function () {
		return this.game.bld.get("workshop").owned();
	},

	upgrades: null,
	upgradesByName: null,
	crafts: null,
	craftsByName: null,

	hideResearched: false,

	constructor: function () {
		this.i18nKeys = {tabName: "tab.name.workshop"};
		this.registerMetaItems(this.upgradeData, classes.KGSaveEdit.UpgradeMeta, "upgrades", function (upgrade) {
			upgrade.i18nKeys = {
				label: "workshop." + upgrade.name + ".label",
				description: "workshop." + upgrade.name + ".desc"
			};
			if (upgrade.flavor) {
				upgrade.i18nKeys.flavor = "workshop." + upgrade.name + ".flavor";
			}
		});
		this.registerMetaItems(this.craftData, classes.KGSaveEdit.CraftMeta, "crafts");
		this.meta.push(this.upgrades);
	},

	renderTabBlock: function () {
		this.craftEffectivenessNode = dojo.create("div", null, this.tabBlockNode);

		var div = dojo.create("div", {class: "bottom-margin"}, this.tabBlockNode);
		this.game._createCheckbox($I("workshop.toggleResearched.label"), div, this, "hideResearched");

		this.upgradesBlock = dojo.create("table", {
			id: "upgradesBlock",
			class: "bottom-margin",
			innerHTML: '<tr><th colspan="2">' + $I("workshop.upgradePanel.label") +  "</th></tr>"
		}, this.tabBlockNode);

		this.freeEngineersBlock = dojo.create("div", {
			id: "workshopFreeEngineersBlock",
			innerHTML: $I("workshop.craftPanel.header.freeEngineers") + ": <span>0 / 0</span>"
		}, this.tabBlockNode);
		this.freeEngineersNode = this.freeEngineersBlock.children[0];

		this.craftsBlock = dojo.create("table", {
			id: "workshopCraftsBlock"
		}, this.tabBlockNode);
	},

	render: function () {
		for (var i = 0, len = this.upgrades.length; i < len; i++) {
			var upgrade = this.upgrades[i];
			upgrade.render();
			dojo.place(upgrade.domNode, this.upgradesBlock);
		}

		for (i = 0, len = this.crafts.length; i < len; i++) {
			var craft = this.crafts[i];
			craft.render();
			dojo.place(craft.domNode, this.craftsBlock);
		}
	},

	get: function (upgradeName) {
		return this.upgradesByName[upgradeName];
	},

	getCraft: function (craftName) {
		return this.craftsByName[craftName];
	},

	getTabName: function () {
		var name = this.tabName;
		if (this.game.village.getFreeEngineer() > 0) {
			name += $I("common.warning");
		}
		return name;
	},

	getCraftPrice: function (craft) {
		if (craft.name !== "ship") {
			return craft.prices;
		}

		//special ship hack
		var prices = dojo.clone(craft.prices);
		for (var i = prices.length - 1; i >= 0; i--) {
			if (prices[i].name === "starchart") {
				prices[i].val = prices[i].val *
					(1 - this.game.getHyperbolicEffect(this.getEffect("satnavRatio") * this.game.space.getProgram("sattelite").val, 0.75));
				break;
			}
		}
		return prices;
	},

	countWorkers: function () {
		var count = 0;
		for (var i = this.crafts.length - 1; i >= 0; i--) {
			count += this.crafts[i].value;
		}
		return count;
	},

	update: function () {
		this.craftEffectivenessNode.innerHTML = $I("workshop.craft.effectiveness", [this.game.getDisplayValueExt(this.game.getCraftRatio() * 100, false, false, 0)]);

		var count = this.countWorkers();

		var engineers = this.game.village.getJob("engineer").value;
		this.freeEngineers = engineers - count;

		if (count !== engineers || isNaN(this.freeEngineers) || this.freeEngineers < 0) { //safe switch
			count = this.game.village.countCraftJobs();
			this.freeEngineers = engineers - count;
		}

		this.freeEngineersNode.innerHTML = this.freeEngineers + " / " + engineers;

		dojo.toggleClass(this.freeEngineersBlock, "spoiler", !this.game.science.get("mechanization").owned());

		var scienceMaxBuilding = this.game.bld.getEffect("scienceMax", true); // without the default scienceMax, because game adds it in differently
		var scienceMaxCompendiaCap =  this.game.bld.getEffect("scienceMaxCompendia");
		var compendiaScienceMax = Math.floor(this.game.resPool.get("compedium").value * 10);

		//iw compedia cap is set to 1000% instead of 100%
		var iwScienceCapRatio = this.game.ironWill ? 10 : 1;

		if (this.game.prestige.getPerk("codexLeviathanianus").researched) {
			var blackLibrary = this.game.religion.getTU("blackLibrary");
			var ttBoostRatio = (
				0.05 * (
					1 +
					blackLibrary.val * (
						blackLibrary.effects["compendiaTTBoostRatio"] +
						this.game.getEffect("blackLibraryBonus"))
				)
			);
			iwScienceCapRatio *= (1 + ttBoostRatio * this.game.religion.getTranscendenceLevel());
		}

		if (compendiaScienceMax > (scienceMaxBuilding * iwScienceCapRatio + scienceMaxCompendiaCap) && !this.game.opts.ch40krun) {
			compendiaScienceMax = (scienceMaxBuilding * iwScienceCapRatio + scienceMaxCompendiaCap);
		}

		this.effectsBase["scienceMax"] = compendiaScienceMax;
		this.effectsBase["oilMax"] = Math.floor(this.game.resPool.get("tanker").value * 500);
		var cultureBonusRaw = Math.floor(this.game.resPool.get("manuscript").value);
		this.effectsBase["cultureMax"] = this.game.getTriValue(cultureBonusRaw, 0.01);

		this.game.callMethods(this.upgrades, "update", this.hideResearched);
		this.game.callMethods(this.crafts, "update");
	},

	getEffectBase: function (name) {
		return num(this.effectsBase[name]);
	},

	getEffectEngineer: function (resName, afterCraft) {
		var craft = this.getCraft(resName);
		if (!craft) {
			return 0;
		}

		var resMapProduction = this.game.village.getResProduction();
		var kittenResProduction = resMapProduction["ES" + resName] ? resMapProduction["ES" + resName] : 0;

		if (this.game.workshop.get("neuralNetworks").owned()) {
			kittenResProduction *= 2;
		}

		var tierCraftRatio = this.game.getEffect("t" + craft.tier + "CraftRatio") || 0;
		if (tierCraftRatio == 0) {
			tierCraftRatio = 1;
		}

		// (One * bonus / handicap) crafts per engineer per 10 minutes
		var effectPerTick = (1 / (600 * this.game.ticksPerSecond)) * (kittenResProduction * tierCraftRatio) / craft.progressHandicap;

		return afterCraft ? effectPerTick * this.game.getResCraftRatio({name: resName}) : effectPerTick;
	},

	save: function (saveData) {
		var upgrades = this.game.filterMetadata(this.upgrades, ["name", "unlocked", "researched"]);
		var crafts = this.game.filterMetadata(this.crafts, ["name", "unlocked", "value", "progress"]);

		saveData.workshop = {
			upgrades:       upgrades,
			crafts:         crafts,
			hideResearched: Boolean(this.hideResearched)
		};
	},

	load: function (saveData) {
		if (!saveData.workshop) {
			return;
		}

		this.set("hideResearched", saveData.workshop.hideResearched);

		this.loadMetadata(saveData, "workshop.upgrades", "get", null, true);

		this.loadMetadata(saveData, "workshop.crafts", "getCraft", null, true);
	},

	// console-only shortcuts
	unlockAllUpgrades: function () {
		for (var i = this.upgrades.length - 1; i >= 0; i--) {
			var upgrade = this.upgrades[i];
			upgrade.set("unlocked", true);
		}
		this.game.update();
		return true;
	},

	researchAllUpgrades: function () {
		for (var i = this.upgrades.length - 1; i >= 0; i--) {
			var upgrade = this.upgrades[i];
			upgrade.set("unlocked", true);
			upgrade.set("researched", true);
		}
		this.game.update();
		return true;
	}
});


dojo.declare("classes.KGSaveEdit.CraftMeta", classes.KGSaveEdit.MetaItem, {
	unlocked: false,
	value: 0,
	progress: 0,

	hideEffects: true,

	constructor: function () {
		this.i18nKeys = {
			label: "workshop.crafts." + this.name + ".label",
			description: "workshop.crafts." + this.name + ".desc"
		};
	},

	getName: function () {
		var name = this.label;
		if (this.game.science.get("mechanization").owned() && this.value > 0) {
			var progressDisplayed = this.game.toDisplayPercentage(this.progress, 0, true);
			if (progressDisplayed > 99) {
				progressDisplayed = 99;
			}
			// var progressDisplayed = this.game.toDisplayPercentage(Math.min(this.progress, 1), 0, true);
			name += " (" + this.value + ") [" + progressDisplayed + "%]";
		}
		return name;
	},

	getDescription: function () {
		var desc = this.description;

		var craftBonus = this.game.getResCraftRatio(this);
		if (this.name != "wood") {
			craftBonus -= this.game.getCraftRatio();
		}

		if (craftBonus > 0) {
			desc += "<br><br>" + $I("workshop.craftBtn.desc.effectivenessBonus", [this.game.getDisplayValueExt(craftBonus * 100, false, false, 0)]);
		}

		if (this.game.science.get("mechanization").owned()) {
			desc += "<br><br>" + $I("workshop.craftBtn.desc.tier") + ": " + this.tier;

			var tierBonus = this.game.getEffect("t" + this.tier + "CraftRatio") || 1;
			if (tierBonus != 1) {
				desc += "<br>" + $I("workshop.craftBtn.desc.craftRatio") + ": " + this.game.getDisplayValueExt(((tierBonus - 1) * 100).toFixed(), true) + "%";
			}

			if (this.progressHandicap != 1) {
				var difficulty = this.game.getDisplayValueExt(((-(1 - (1 / this.progressHandicap))) * 100).toFixed(2), true);
				desc += "<br>" + $I("workshop.craftBtn.desc.progressHandicap") + ": " + difficulty + "%";
			}

			if (this.value != 0) {
				var countdown = (1 / (this.game.workshop.getEffectEngineer(this.name, false) * 5)).toFixed(0);
				desc += "<br>=> " + $I("workshop.craftBtn.desc.countdown", [countdown]);
			}
		}
		return desc;
	},

	render: function () {
		this.seti18n();

		this.domNode = dojo.create("tr", {
			class: "craft",
			innerHTML: "<td>" + (this.label || this.name) + "</td><td></td><td></td><td> &nbsp;" + $I("KGSaveEdit.workshop.crafts.progress") + " </td>"
		});
		this.nameNode = this.domNode.children[0];

		var input = this.game._createInput({
			class: "integerInput",
			title: $I("KGSaveEdit.workshop.crafts.craftingEngineers")
		}, this.domNode.children[1], this, "value");

		input.parseFn = function (value) {
			return Math.min(value, this.metaObj.value + this.game.village.getFreeEngineer());
		};

		this.game._createLinkList(this, this.domNode.children[2], [
			{html: "[+]", value: 1},
			{html: "[+5]", value: 5},
			{html: "[+25]", value: 25}
		], function (value) {
			this.game.village.assignCraftJobs(this, value);
		});

		this.game._createLinkList(this, this.domNode.children[2], [
			{html: "[-]", value: 1},
			{html: "[-5]", value: 5},
			{html: "[-25]", value: 25}
		], function (value) {
			this.game.village.unassignCraftJobs(this, value);
		});

		this.game._createCheckbox($I("KGSaveEdit.label.unlocked"), this.domNode.children[3], this, "unlocked", "first");

		this.game._createInput(null, this.domNode.children[3], this, "progress");

		this.registerHighlight(this.domNode);
		this.registerTooltip(this.domNode);
	},

	update: function () {
		var req = this.game.checkRequirements(this);
		this.set("unlocked", req || this.unlockedNode.prevChecked, true);
		this.game.toggleDisabled(this.unlockedNode, req);

		//check and cache if you can't craft even once due to storage limits
		this.isLimited = this.game.resPool.isStorageLimited(this.getPrices());

		this.updateEnabled();
	},

	getPrices: function (simple) {
		return dojo.clone(simple ? this.prices : this.game.workshop.getCraftPrice(this));
	},

	load: function (saveCraft) {
		this.set("unlocked", Boolean(saveCraft.unlocked));
		this.set("value", num(saveCraft.value));
		this.set("progress", num(saveCraft.progress));
	}
});

});
