/* global dojo, require, classes, $I, num */

require(["dojo/on"], function (on) {
"use strict";

dojo.declare("classes.KGSaveEdit.BuildingsManager", [classes.KGSaveEdit.UI.Tab, classes.KGSaveEdit.Manager], {
	buildingsData: [
		{
			name: "field",
			prices: [
				{name: "catnip", val: 10}
			],
			priceRatio: 1.12,
			unlockable: true,
			unlockRatio: 0.3,
			effects: {
				"catnipPerTickBase": 0.125
			},
			flavor: true
		}, {
			name: "pasture",
			unlockRatio: 0.3,
			stage: 0,
			stages: [
				{
					stageName: "pasture",
					prices: [
						{name: "catnip", val: 100},
						{name: "wood",   val: 10}
					],
					priceRatio: 1.15,
					stageUnlocked: true,
					// stageRequires: {tech: ["animal"]},
					effects: {
						"catnipDemandRatio": -0.005
					},
					flavor: true
				}, {
					stageName: "solarfarm",
					prices: [
						{name: "titanium", val: 250}
					],
					priceRatio: 1.15,
					stageUnlocked: false,
					stageRequires: {tech: ["ecology"]},
					effects: {
						"energyProduction": 2
					}
				}
			],
			requires: {tech: ["animal"]},
			calculateEffects: function (self, game) {
				var stageMeta = self.stages[self.stage];
				if (self.stage === 0) {
					//do nothing

				} else if (self.stage === 1) {
					var effects = {
						"energyProduction": 2
					};
					effects["energyProduction"] *= 1 + game.getEffect("solarFarmRatio");
					if (game.calendar.season === 3) {
						effects["energyProduction"] *= 0.75;
					} else if (game.calendar.season === 1) {
						effects["energyProduction"] /= 0.75;
					}

					var seasonRatio = game.getEffect("solarFarmSeasonRatio");
					if ((game.calendar.season == 3 && seasonRatio == 1) || (game.calendar.season != 1 && seasonRatio == 2)) {
						effects["energyProduction"] *= (1 + 0.15 * seasonRatio);
					}

					stageMeta.effects = effects;
				}
			}
		}, {
			name: "aqueduct",
			unlockRatio: 0.3,
			stage: 0,
			stages: [
				{
					stageName: "aqueduct",
					prices: [
						{name: "minerals", val: 75}
					],
					priceRatio: 1.12,
					stageUnlocked: true,
					// stageRequires: {tech: ["engineering"]},
					effects: {
						"catnipRatio": 0.03
					},
					flavor: true
				}, {
					stageName: "hydroplant",
					prices: [
						{name: "concrate", val: 100},
						{name: "titanium", val: 2500}
					],
					priceRatio: 1.15,
					stageUnlocked: false,
					stageRequires: {tech: ["robotics"]},
					effects: {
						"energyProduction": 5
					}
				}
			],
			requires: {tech: ["engineering"]},
			action: function (self, game) {
				var stageMeta = self.stages[self.stage];
				if (self.stage === 0) {
					//do nothing
				} else if (self.stage === 1) {
					var effects = {
						"energyProduction": 5
					};
					effects["energyProduction"] *= 1 + game.getEffect("hydroPlantRatio");
					stageMeta.effects = effects;
				}
			}
		}, {
			name: "hut",
			prices: [
				{name: "wood", val: 5}
			],
			priceRatio: 2.5,
			unlockRatio: 0.3,
			unlockable: true,
			// unlocks: {tabs: ["village"]},
			effects: {
				"maxKittens":  2,
				"manpowerMax": 75
			},
			flavor: true
		}, {
			name: "logHouse",
			prices: [
				{name: "wood",     val: 200},
				{name: "minerals", val: 250}
			],
			priceRatio: 1.15,
			unlockRatio: 0.3,
			// unlocks: {tabs: ["village"]},
			requires: {tech: ["construction"]},
			effects: {
				"maxKittens":  1,
				"manpowerMax": 50
			},
			flavor: true
		}, {
			name: "mansion",
			prices: [
				{name: "slab",     val: 185},
				{name: "steel",    val: 75},
				{name: "titanium", val: 25}
			],
			priceRatio: 1.15,
			// unlocks: {tabs: ["village"]},
			requires: {tech: ["architecture"]},
			effects: {
				"maxKittens":  1,
				"manpowerMax": 50
			},
			flavor: true
		}, {
			name: "library",
			stage: 0,
			stages: [
				{
					stageName: "library",
					unlockRatio: 0.3,
					prices: [
						{name: "wood", val: 25}
					],
					stageUnlocked: true,
					effects: {
						"scienceRatio": 0,
						"scienceMax":   0,
						"cultureMax":   0
					},
					flavor: true
				}, {
					stageName: "dataCenter",
					prices: [
						{name: "concrate", val: 10},
						{name: "steel",    val: 100}
					],
					stageUnlocked: false,
					stageRequires: {tech: ["electronics"]},
					effects: {
						"scienceMaxCompendia": 1000,
						"cultureMax":          25,
						"energyConsumption":   2
					}
				}
			],
			priceRatio: 1.15,
			// unlocks: {tabs: ["science"], jobs: ["scholar"]},
			upgrades: {buildings: ["biolab"]},
			calculateEffects: function (self, game) {
				var stageMeta = self.stages[self.stage];
				var effects = {
					"scienceRatio": 0.1,
					"scienceMax":   250,
					"cultureMax":   10,
				};

				var libraryRatio = game.getEffect("libraryRatio");
				effects["scienceMax"] *= (1 + game.bld.get("observatory").on * libraryRatio);

				if (self.stage === 1) {
					effects["scienceMax"] *= 3;	//250->750 base science boos for data centers
					effects["cultureMax"] = 250;
					effects["scienceMaxCompendia"] = 1000;

					if (game.workshop.get("uplink").owned()) {
						var biolabBonus = game.bld.get("biolab").on * game.getEffect("uplinkDCRatio");
						effects["scienceMaxCompendia"] *= (1 + biolabBonus);
						effects["scienceMax"] *= (1 + biolabBonus);
						effects["cultureMax"] *= (1 + biolabBonus);
					}

					var energyCons = 2;
					energyCons = 2;
					if (game.workshop.get("cryocomputing").owned()) {
						energyCons = 1;
					}
					if (game.challenges.currentChallenge == "energy") {
						energyCons *= 2;
					}
					effects["energyConsumption"] = energyCons;

					if (game.workshop.get("machineLearning").owned()) {
						var dataCenterAIRatio = game.getEffect("dataCenterAIRatio");

						var aiCores = game.bld.get("aiCore").on;
						effects["scienceMax"] *= (1 + aiCores * dataCenterAIRatio);
						effects["cultureMax"] *= (1 + aiCores * dataCenterAIRatio);
						effects["scienceMaxCompendia"] *= (1 + aiCores * dataCenterAIRatio);
					}
				}

				stageMeta.effects = effects;
			},
			flavor: true
		}, {
			name: "academy",
			prices: [
				{name: "wood",     val: 50},
				{name: "minerals", val: 70},
				{name: "science",  val: 100}
			],
			priceRatio: 1.15,
			unlockRatio: 0.3,
			requires: {tech: ["math"]},
			effects: {
				"scienceRatio": 0.2,
				"learnRatio":   0.05,
				"cultureMax":   25,
				"scienceMax":   500
			},
			flavor: true
		}, {
			name: "observatory",
			prices: [
				{name: "scaffold", val: 50},
				{name: "slab",     val: 35},
				{name: "iron",     val: 750},
				{name: "science",  val: 1000}
			],
			priceRatio: 1.10,
			requires: {tech: ["astronomy"]},
			effects: {
				"scienceRatio":          0,
				"starEventChance":       0,
				"starAutoSuccessChance": 0,
				"scienceMax":            0
			},
			upgrades: {buildings: ["library"]},
			action: function (self, game) {
				var effects = {
					"scienceRatio":          0.25,
					"starEventChance":       0.002,
					"starAutoSuccessChance": 0.01,
					"scienceMax":            1000
				};

				if (game.workshop.get("astrolabe").owned()) {
					effects["scienceMax"] = 1500;
				}

				var ratio = 1 + game.getEffect("observatoryRatio");
				effects["scienceMax"] *= ratio;
				effects["scienceRatio"] *= ratio;

				self.effects = effects;
			},
			flavor: true
		}, {
			name: "biolab",
			prices: [
				{name: "slab",    val: 100},
				{name: "alloy",   val: 25},
				{name: "science", val: 1500}
			],
			priceRatio: 1.10,
			requires: {tech: ["biology"]},
			effects: {
				"scienceRatio": 0.35,
				"refineRatio": 0.1,
				"catnipPerTickCon": 0,
				"oilPerTickProd": 0,
				"scienceMax": 1500,
				"energyConsumption": 0
			},
			calculateEffects: function (self, game) {
				self.effects["scienceMax"] = 1500;

				self.togglable = false;
				var energyCons = 0;

				if (game.workshop.get("biofuel").owned()) {
					self.togglable = true;
					energyCons = 1;

					if (game.challenges.currentChallenge === "energy") {
						energyCons *= 2;
					}
				}

				self.effects["energyConsumption"] = energyCons;

				if (game.workshop.get("uplink").owned() && game.bld.get("library").stage === 1) {
					var datacenterBonus = game.bld.get("library").on * game.getEffect("uplinkLabRatio");
					self.effects["scienceMax"] *= (1 + datacenterBonus);
				}
			},
			action: function (self, game) {
				var on = self.getOn();
				if (game.workshop.get("biofuel").owned()) {

					self.effects["catnipPerTickCon"] = -1;
					self.effects["oilPerTickProd"] = 0.02 * (1 + game.getEffect("biofuelRatio"));

					var amt = game.resPool.getAmtDependsOnStock(
						[{res: "catnip", amt: -self.effects["catnipPerTickCon"]}],
						on
					);
					self.effects["catnipPerTickCon"] *= amt;
					self.effects["oilPerTickProd"] *= amt;

					if (self.val) {
						self.effects["scienceRatio"] = 0.35 * (1 + on / self.val);
					}

					return amt;
				}
			},
			forceAction: true,
			flavor: true
		}, {
			name: "barn",
			prices: [
				{name: "wood", val: 50}
			],
			priceRatio: 1.75,
			unlockRatio: 0.3,
			requires: {tech: ["agriculture"]},
			effects: {
				"catnipMax":   0,
				"woodMax":     0,
				"mineralsMax": 0,
				"ironMax":     0,
				"coalMax":     0,
				"goldMax":     0,
				"titaniumMax": 0
			},
			calculateEffects: function (self, game) {
				var effects = {
					"catnipMax":   5000,
					"woodMax":     200,
					"mineralsMax": 250,
					"ironMax":     50,
					"coalMax":     60,
					"goldMax":     10,
					"titaniumMax": 2
				};

				self.effects = game.resPool.addBarnWarehouseRatio(effects);
			},
			flavor: true
		}, {
			name: "warehouse",
			prices: [
				{name: "beam", val: 1.5},
				{name: "slab", val: 2}
			],
			priceRatio: 1.15,
			requires: {tech: ["construction"]},
			effects: {
				"catnipMax":   0,
				"woodMax":     0,
				"mineralsMax": 0,
				"ironMax":     0,
				"coalMax":     0,
				"goldMax":     0,
				"titaniumMax": 0
			},
			calculateEffects: function (self, game) {
				var effects = {
					"catnipMax":   0, //for tooltip order
					"woodMax":     150,
					"mineralsMax": 200,
					"ironMax":     25,
					"coalMax":     30,
					"goldMax":     5,
					"titaniumMax": 10
				};

				if (game.workshop.get("silos").owned()) {
					effects["catnipMax"] = 750;
				}

				self.effects = game.resPool.addBarnWarehouseRatio(effects);
			},
			flavor: true
		}, {
			name: "harbor",
			prices: [
				{name: "scaffold", val: 5},
				{name: "slab",     val: 50},
				{name: "plate",    val: 75}
			],
			priceRatio: 1.15,
			requires: {tech: ["navigation"]},
			effects: {
				"catnipMax":   0,
				"woodMax":     0,
				"mineralsMax": 0,
				"ironMax":     0,
				"coalMax":     0,
				"goldMax":     0,
				"titaniumMax": 0
			},
			calculateEffects: function (self, game) {
				var effects = {
					"catnipMax":   2500,
					"woodMax":     700,
					"mineralsMax": 950,
					"ironMax":     150,
					"coalMax":     100,
					"goldMax":     25,
					"titaniumMax": 50
				};

				effects["coalMax"] *= 1 + game.getEffect("harborCoalRatio");

				var cargoShips = game.workshop.get("cargoShips");
				if (cargoShips.owned()) {
					var shipVal = game.resPool.get("ship").value;

					//100% to 225% with slow falldown on the 75%
					var limit = 2.25 + game.getEffect("shipLimit") * game.bld.get("reactor").val;
					var ratio = 1 + game.getHyperbolicEffect(cargoShips.effects["harborRatio"] * shipVal, limit);

					effects["catnipMax"] *=   ratio;
					effects["woodMax"] *=     ratio;
					effects["mineralsMax"] *= ratio;
					effects["ironMax"] *=     ratio;
					effects["coalMax"] *=     ratio;
					effects["goldMax"] *=     ratio;
					effects["titaniumMax"] *= ratio;
				}

				self.effects = game.resPool.addBarnWarehouseRatio(effects);
			},
			flavor: true
		}, {
			name: "mine",
			prices: [
				{name: "wood", val: 100}
			],
			priceRatio: 1.15,
			unlockRatio: 0.15,
			// unlocks: {jobs: ["miner"]},
			requires: {tech: ["mining"]},
			effects: {
				"mineralsRatio":   0,
				"coalPerTickBase": 0
			},
			calculateEffects: function (self, game) {
				var effects = {
					"mineralsRatio":   0.2,
					"coalPerTickBase": 0
				};

				if (game.workshop.get("deepMining").owned()) {
					//fun but ugly hack
					effects["coalPerTickBase"] = 0.003;
				}

				self.effects = effects;
			},
			flavor: true
		}, {
			name: "quarry",
			prices: [
				{name: "scaffold", val: 50},
				{name: "steel",    val: 125},
				{name: "slab",     val: 1000}
			],
			priceRatio: 1.15,
			unlockRatio: 0.3,
			requires: {tech: ["archeology"]},
			effects: {
				"mineralsRatio":   0.35,
				"coalPerTickBase": 0.015
			},
			calculateEffects: function (self, game) {
				var effects = {
					"mineralsRatio": 0.35,
					"coalPerTickBase": 0.015
				};
				if (game.workshop.get("orbitalGeodesy").researched) {
					effects["uraniumPerTickBase"] = 0.0005; //4% of accelerator output
				}
				self.effects = effects;
			},
			flavor: true
		}, {
			name: "smelter",
			prices: [
				{name: "minerals", val: 200}
			],
			priceRatio: 1.15,
			unlockRatio: 0.3,
			requires: {tech: ["metal"]},
			togglable: true,
			effects: {
				"woodPerTickCon":         -0.05,
				"mineralsPerTickCon":     -0.1,
				"ironPerTickAutoprod":     0.02,
				"coalPerTickAutoprod":     0,
				"goldPerTickAutoprod":     0,
				"titaniumPerTickAutoprod": 0
			},
			action: function (self, game) {
				var on = this.getOn();
				if (on < 1) {
					return;
				}

				self.effects = {
					"woodPerTickCon":          0,
					"mineralsPerTickCon":      0,
					"ironPerTickAutoprod":     0.02,
					"coalPerTickAutoprod":     0,
					"goldPerTickAutoprod":     0,
					"titaniumPerTickAutoprod": 0
				};


				var smelterRatio = 1 + game.getEffect("smelterRatio");
				self.effects["ironPerTickAutoprod"] = 0.02 * smelterRatio;

				if (game.workshop.get("goldOre").owned()) {
					self.effects["goldPerTickAutoprod"] = 0.001;
				}

				if (game.workshop.get("coalFurnace").owned()) {
					self.effects["coalPerTickAutoprod"] = 0.005 * smelterRatio;
				}

				if (game.workshop.get("nuclearSmelters").owned()) {
					self.effects["titaniumPerTickAutoprod"] = 0.0015;
				}

				self.effects["woodPerTickCon"] = -0.05;
				self.effects["mineralsPerTickCon"] = -0.1;

				var amt = game.resPool.getAmtDependsOnStock(
					[{res: "wood",    amt: -self.effects["woodPerTickCon"]},
					{res: "minerals", amt: -self.effects["mineralsPerTickCon"]}],
					on
				);
				self.effects["woodPerTickCon"] *= amt;
				self.effects["mineralsPerTickCon"] *= amt;
				self.effects["ironPerTickAutoprod"] *= amt;
				self.effects["goldPerTickAutoprod"] *= amt;
				self.effects["coalPerTickAutoprod"] *= amt;
				self.effects["titaniumPerTickAutoprod"] *= amt;

				return amt;
			},
			flavor: true
		}, {
			name: "calciner",
			prices: [
				{name: "steel",     val: 100},
				{name: "titanium",  val: 15},
				{name: "blueprint", val: 1},
				{name: "oil",       val: 500}
			],
			priceRatio: 1.15,
			requires: {tech: ["chemistry"]},
			togglable: true,
			effects: {
				"mineralsPerTickCon":     -1.5,
				"oilPerTickCon":          -0.024,
				"ironPerTickAutoprod":     0.15,
				"titaniumPerTickAutoprod": 0.0005,
				"energyConsumption":       0,
				"ironPerTickCon":          0,
				"coalPerTickCon":          0,
				"steelPerTickProd":        0
			},
			isAutomationEnabled: true,
			calculateEffects: function (self, game) {
				self.effects["energyConsumption"] = 1;
				if (game.challenges.currentChallenge === "energy") {
					self.effects["energyConsumption"] *= 2;
				}
				self.showAutomation = Boolean(game.getEffect("calcinerSteelRatio"));
			},
			action: function (self, game) {
				var on = self.getOn();
				if (on < 1) {
					return;
				}

				self.effects["oilPerTickCon"] = -0.024; //base + 0.01
				self.effects["mineralsPerTickCon"] = -1.5;
				var calcinerRatio = game.getEffect("calcinerRatio");
				self.effects["titaniumPerTickAutoprod"] = 0.0005 * (1 + calcinerRatio * 3);
				self.effects["ironPerTickAutoprod"] = 0.15 * (1 + calcinerRatio);

				var amt = game.resPool.getAmtDependsOnStock(
					[{res: "oil",     amt: -self.effects["oilPerTickCon"]},
					{res: "minerals", amt: -self.effects["mineralsPerTickCon"]}],
					on
				);
				self.effects["oilPerTickCon"] *= amt;
				self.effects["mineralsPerTickCon"] *= amt;
				self.effects["ironPerTickAutoprod"] *= amt;
				self.effects["titaniumPerTickAutoprod"] *= amt;

				var amtFinal = amt;

				self.effects["ironPerTickCon"] = 0;
				self.effects["coalPerTickCon"] = 0;
				self.effects["steelPerTickProd"] = 0;

				var steelRatio = game.getEffect("calcinerSteelRatio");

				if (steelRatio) {
					// if (typeof self.isAutomationEnabled === "undefined") {
					// 	self.isAutomationEnabled = true;
					// }

					if (self.isAutomationEnabled) {
						// Second conversion of some of the iron that was just created, to steel
						var difference = self.effects["ironPerTickAutoprod"] * steelRatio * game.bld.getAutoProductionRatio(); //HACK
						// Cycle Effect
						var effectsTemp = {};
						effectsTemp["iron"] = difference;
						game.calendar.cycleEffectsFestival(effectsTemp);
						difference = effectsTemp["iron"];

						self.effects["ironPerTickCon"] = -difference;
						self.effects["coalPerTickCon"] = -difference;
						self.effects["steelPerTickProd"] = difference / 100;

						amt = game.resPool.getAmtDependsOnStock(
							[{res: "iron", amt: -self.effects["ironPerTickCon"]},
							{res: "coal",  amt: -self.effects["coalPerTickCon"]}],
							on
						);
						self.effects["ironPerTickCon"] *= amt;
						self.effects["coalPerTickCon"] *= amt;
						self.effects["steelPerTickProd"] *= (amt *
							(1 + game.getCraftRatio() * game.getEffect("calcinerSteelCraftRatio") +
								game.bld.get("reactor").getOn() * game.getEffect("calcinerSteelReactorBonus")));

						amtFinal = (amtFinal + amt) / 2;
					}
				}

				return amtFinal;
			}
		}, {
			name: "steamworks",
			prices: [
				{name: "steel",     val: 65},
				{name: "gear",      val: 20},
				{name: "blueprint", val: 1}
			],
			priceRatio: 1.25,
			requires: {tech: ["machinery"]},
			togglable: true,
			togglableOnOff: true,
			effects: {
				"magnetoBoostRatio":     0.15,
				"coalRatioGlobal":      -0.8,
				"energyProduction":      1,
				"manuscriptPerTickProd": 0
			},
			jammed: false,
			isAutomationEnabled: true,
			calculateEffects: function (self, game) {
				self.effects["coalRatioGlobal"] = -0.8 + game.getEffect("coalRatioGlobalReduction");
				self.showAutomation = game.workshop.get("factoryAutomation").owned();

				var amt = 0;
				if (game.workshop.get("printingPress").owned()) {
					amt = 0.0005; // 2 per year per SW

					if (game.workshop.get("offsetPress").owned()) {
						amt *= 4;
					}
					if (game.workshop.get("photolithography").owned()) {
						amt *= 4;
					}
				}
				self.effects["manuscriptPerTickProd"] = amt;
			}, //no factory automation stuff
			flavor: true
		}, {
			name: "magneto",
			prices: [
				{name: "alloy",     val: 10},
				{name: "gear",      val: 5},
				{name: "blueprint", val: 1}
			],
			priceRatio: 1.25,
			requires: {tech: ["electricity"]},
			togglable: true,
			effects: {
				"oilPerTick":      -0.05,
				"magnetoRatio":     0.02,
				"energyProduction": 5
			}
		}, {
			name: "lumberMill",
			prices: [
				{name: "wood",     val: 100},
				{name: "iron",     val: 50},
				{name: "minerals", val: 250}
			],
			priceRatio: 1.15,
			unlockRatio: 0.3,
			requires: {tech: ["construction"]},
			effects: {
				"woodRatio": 0
			},
			calculateEffects: function (self, game) {
				self.effects["woodRatio"] = 0.1 + game.getEffect("lumberMillRatio") * 0.1;
			},
			flavor: true
		}, {
			name: "oilWell",
			prices: [
				{name: "steel",    val: 50},
				{name: "gear",     val: 25},
				{name: "scaffold", val: 25}
			],
			priceRatio: 1.15,
			requires: {tech: ["chemistry"]},
			effects: {
				"oilPerTickBase":    0,
				"oilMax":            0,
				"energyConsumption": 0
			},
			isAutomationEnabled: true,
			calculateEffects: function (self, game) {
				var effects = {
					"oilPerTickBase":    0.02,
					"oilMax":            1500,
					"energyConsumption": 0
				};

				self.togglable = false;
				self.showAutomation = false;

				var oilRatio = 1 + game.getEffect("oilWellRatio");
				var energyCons = 0;
				var pumpjack = game.workshop.get("pumpjack");

				if (pumpjack.owned()) {
					self.showAutomation = true;
					self.togglable = true;

					if (self.isAutomationEnabled) {
						energyCons = 1;
						if (game.challenges.currentChallenge === "energy") {
							energyCons *= 2;
						}

					} else {
						oilRatio -= pumpjack.effects["oilWellRatio"];
					}
				}
				effects["oilPerTickBase"] *= oilRatio;
				effects["energyConsumption"] = energyCons;

				self.effects = effects;
			},
			flavor: true
		}, {
			name: "workshop",
			prices: [
				{name: "wood",     val: 100},
				{name: "minerals", val: 400}
			],
			priceRatio: 1.15,
			unlockable: true,
			unlockRatio: 0.0025,
			// unlocks: {tabs: ["workshop"]},
			effects: {
				"craftRatio": 0.06 //6% for craft output
			},
			flavor: true
		}, {
			name: "factory",
			prices: [
				{name: "titanium", val: 2000},
				{name: "plate",    val: 2500},
				{name: "concrate", val: 15}
			],
			priceRatio: 1.15,
			requires: {tech: ["mechanization"]},
			togglable: true,
			effects: {
				"craftRatio":        0,
				"energyConsumption": 0
			},
			calculateEffects: function (self, game) {
				var effects = {
					"craftRatio": 0.05,
					"energyConsumption": 2
				};

				if (game.workshop.get("factoryLogistics").owned()) {
					effects["craftRatio"] = 0.06;
				}

				if (game.challenges.currentChallenge === "energy") {
					effects["energyConsumption"] *= 2;
				}
				// if (game.workshop.get("neuralNetworks").owned()) {
				// 	effects["energyConsumption"] *= 2;
				// }
				self.effects = effects;
			}
		}, {
			name: "reactor",
			prices: [
				{name: "titanium",  val: 3500},
				{name: "plate",     val: 5000},
				{name: "concrate",  val: 50},
				{name: "blueprint", val: 25}
			],
			priceRatio: 1.15,
			requires: {tech: ["nuclearFission"]},
			togglable: true,
			effects: {
				"uraniumPerTick":   0,
				"thoriumPerTick":   0,
				"productionRatio":  0.05,
				"uraniumMax":       250,
				"energyProduction": 0
			},
			upgrades: {buildings: ["harbor"]},
			isAutomationEnabled: true,
			calculateEffects: function (self, game) {
				self.effects["uraniumPerTick"] = -0.001 * (1 - game.getEffect("uraniumRatio"));
				self.showAutomation = game.workshop.get("thoriumReactors").owned();
			},
			action: function (self, game) {
				self.effects["thoriumPerTick"] = game.getEffect("reactorThoriumPerTick");
				self.effects["energyProduction"] = 10 * (1 + game.getEffect("reactorEnergyRatio"));

				if (
					game.workshop.get("thoriumReactors").owned() &&
					(game.resPool.get("thorium").value === 0 || !self.isAutomationEnabled)
				) {
					self.effects["thoriumPerTick"] = 0;
					self.effects["energyProduction"] -= 2.5;
				}
			}
		}, {
			name: "accelerator",
			prices: [
				{name: "titanium", val: 7500},
				{name: "concrate", val: 125},
				{name: "uranium",  val: 25}
			],
			priceRatio: 1.15,
			requires: {tech: ["particlePhysics"]},
			togglable: true,
			effects: {
				"titaniumPerTickCon":     0,
				"uraniumPerTickAutoprod": 0,
				"scienceMax":             0,
				"catnipMax":              0,
				"woodMax":                0,
				"mineralsMax":            0,
				"ironMax":                0,
				"coalMax":                0,
				"goldMax":                0,
				"titaniumMax":            0,
				"energyConsumption":      0
			},
			calculateEffects: function (self, game) {
				self.effects["energyConsumption"] = 2;
				if (game.challenges.currentChallenge === "energy") {
					self.effects["energyConsumption"] *= 2;
				}

				self.effects["scienceMax"] = 0;
				if (game.workshop.get("lhc").owned()) {
					self.effects["scienceMax"] = 2500;
				}

				//------------- limit upgrades ------------
				var capRatio = 0;
				if (game.workshop.get("energyRifts").owned()) {
					capRatio = (1 + game.getEffect("acceleratorRatio"));
				}

				self.effects["catnipMax"]   = 30000 * capRatio;
				self.effects["woodMax"]     = 20000 * capRatio;
				self.effects["mineralsMax"] = 25000 * capRatio;
				self.effects["ironMax"]     =  7500 * capRatio;
				self.effects["coalMax"]     =  2500 * capRatio;
				self.effects["goldMax"]     =   250 * capRatio;
				self.effects["titaniumMax"] =   750 * capRatio;
			},
			action: function (self, game) {
				self.effects["titaniumPerTickCon"] =    -0.015;
				self.effects["uraniumPerTickAutoprod"] = 0.0025;

				var amt = game.resPool.getAmtDependsOnStock(
					[{res: "titanium", amt: -self.effects["titaniumPerTickCon"]}],
					self.getOn()
				);
				self.effects["titaniumPerTickCon"] *= amt;
				self.effects["uraniumPerTickAutoprod"] *= amt;

				return amt;
			},
			flavor: true
		}, {
			name: "tradepost",
			prices: [
				{name: "wood",     val: 500},
				{name: "minerals", val: 200},
				{name: "gold",     val: 10}
			],
			priceRatio: 1.15,
			unlockRatio: 0.3,
			requires: {tech: ["currency"]},
			effects: {
				"fursDemandRatio":  -0.04,
				"ivoryDemandRatio": -0.04,
				"spiceDemandRatio": -0.04,
				"tradeRatio":        0.015,
				"standingRatio":     0
			},
			calculateEffects: function (self, game) {
				var effects = {
					"fursDemandRatio":  -0.04,
					"ivoryDemandRatio": -0.04,
					"spiceDemandRatio": -0.04,
					"tradeRatio":        0.015,
					"standingRatio":     0
				};

				var seri = game.workshop.get("caravanserai");
				if (seri.owned()) {
					effects["standingRatio"] = seri.effects["standingRatio"];
				}

				self.effects = effects;
			},
			flavor: true
		}, {
			name: "mint",
			prices: [
				{name: "minerals", val: 5000},
				{name: "plate",    val: 200},
				{name: "gold",     val: 500}
			],
			priceRatio: 1.15,
			requires: {tech: ["architecture"]},
			togglable: true,
			effects: {
				"manpowerPerTickCon": 0,
				"goldPerTickCon":     0,
				"fursPerTickProd":    0,
				"ivoryPerTickProd":   0,
				"goldMax":            0
			},
			calculateEffects: function (self, game) {
				self.effects = {
					"manpowerPerTickCon": 0,
					"goldPerTickCon":     0,
					"fursPerTickProd":    0,
					"ivoryPerTickProd":   0,
					"goldMax":            100 * (1 + game.getEffect("warehouseRatio"))
				};
			},
			action: function (self, game) {
				var on = self.getOn();
				if (on < 1) {
					return;
				}
				self.effects["manpowerPerTickCon"] = -0.75;
				self.effects["goldPerTickCon"] =     -0.005; //~5 smelters

				var manpower = game.resPool.get("manpower");
				var mpratio = (manpower.maxValue * 0.007) / 100;

				//hidden 1% boost to mints from village level
				mpratio *= (1 + game.village.map.villageLevel * 0.005);

				self.effects["fursPerTickProd"]  = mpratio * 1.25; //2
				self.effects["ivoryPerTickProd"] = mpratio * 0.3;  //1.5

				var amt = game.resPool.getAmtDependsOnStock(
					[{res: "manpower", amt: -self.effects["manpowerPerTickCon"]},
					{res: "gold",      amt: -self.effects["goldPerTickCon"]}],
					on
				);
				self.effects["manpowerPerTickCon"] *= amt;
				self.effects["goldPerTickCon"] *= amt;
				self.effects["fursPerTickProd"] *= amt;
				self.effects["ivoryPerTickProd"] *= amt;

				return amt;
			}
		}, {
			name: "amphitheatre",
			stage: 0,
			stages: [
				{
					stageName: "amphitheatre",
					prices: [
						{name: "wood",      val: 200},
						{name: "minerals",  val: 1200},
						{name: "parchment", val: 3}
					],
					priceRatio: 1.15,
					stageUnlocked: true,
					// stageRequires: {tech: ["writing"]},
					effects: {
						"unhappinessRatio":  -0.048,
						"culturePerTickBase": 0.005,
						"cultureMax":         50
					},
					flavor: true
				}, {
					stageName: "broadcasttower",
					prices: [
						{name: "iron",     val: 1250},
						{name: "titanium", val: 75}
					],
					priceRatio: 1.18,
					stageUnlocked: false,
					stageRequires: {tech: ["electronics"]},
					effects: {
						"culturePerTickBase": 1,
						"unhappinessRatio":  -0.75,
						"cultureMax":         300
					}
				}
			],
			requires: {tech: ["writing"]},
			action: function (self, game) {
				//very ugly and crappy stuff
				var btower = self.stages[1];

				btower.effects["cultureMax"] =         300;
				btower.effects["culturePerTickBase"] = 1;

				var energyRatio = (game.resPool.energyProd / game.resPool.energyCons);
				if (energyRatio > 1) {
					if (energyRatio > 1.75) {
						energyRatio = 1.75;
					}
					btower.effects["cultureMax"] = Math.floor((300 * energyRatio) * 1000) / 1000;
					btower.effects["culturePerTickBase"] = Math.floor((1 * energyRatio) * 1000) / 1000;
				}

				var broadcastTowerRatio = game.getEffect("broadcastTowerRatio");
				var totalRatio = game.space.getProgram("sattelite").getOn() * broadcastTowerRatio;

				btower.effects["cultureMax"] *= (1 + totalRatio);
				btower.effects["culturePerTickBase"] *= (1 + totalRatio);
			}
		}, {
			name: "chapel",
			prices: [
				{name: "minerals",  val: 2000},
				{name: "culture",   val: 250},
				{name: "parchment", val: 250}
			],
			priceRatio: 1.15,
			requires: {tech: ["acoustics"]},
			effects: {
				"culturePerTickBase": 0,
				"faithPerTickBase":   0,
				"cultureMax":         0
			},
			calculateEffects: function (self, game) {
				var effects = {
					"culturePerTickBase": 0.05,
					"faithPerTickBase":   0,
					"cultureMax":         200
				};
				if (game.challenges.currentChallenge !== "atheism") {
					effects["faithPerTickBase"] = 0.005;
				}
				self.effects = effects;
			}
		}, {
			name: "temple",
			prices: [
				{name: "slab",       val: 25},
				{name: "plate",      val: 15},
				{name: "gold",       val: 50},
				{name: "manuscript", val: 10}
			],
			priceRatio: 1.15,
			requires: {tech: ["philosophy"]},
			effects: {
				"culturePerTickBase": 0,
				"faithPerTickBase":   0,
				"happiness":          0,
				"manpowerMax":        0,
				"scienceMax":         0,
				"cultureMax":         0,
				"faithMax":           0
			},
			calculateEffects: function (self, game) {
				var effects = {
					"culturePerTickBase": 0.1,
					"faithPerTickBase":   0,
					"happiness":          0,
					"manpowerMax":        0,
					"scienceMax":         0,
					"cultureMax":         0,
					"faithMax":           0
				};

				if (game.challenges.currentChallenge !== "atheism") {
					effects["faithMax"] = 100;

					var theology = game.science.get("theology");
					if (theology.owned()) {
						effects["faithPerTickBase"] = 0.0015;
					}

					var stainedGlass = game.religion.getRU("stainedGlass");
					if (stainedGlass.owned()) {
						effects["culturePerTickBase"] += 0.05 * stainedGlass.val;
					}

					var scholastics = game.religion.getRU("scholasticism");
					if (scholastics.owned()) {
						effects["scienceMax"] = 400 + 100 * scholastics.val;
					}

					var sunAltar = game.religion.getRU("sunAltar");
					if (sunAltar.owned()) {
						effects["faithMax"] += 50 * sunAltar.val;
						effects["happiness"] = 0.4 + 0.1 * sunAltar.val;
					}

					var goldenSpire = game.religion.getRU("goldenSpire");
					if (goldenSpire.owned()) {
						effects["faithMax"] *= (1 + (0.4 + 0.1 * goldenSpire.val));
					}

					var basilica = game.religion.getRU("basilica");
					if (basilica.owned()) {
						effects["cultureMax"] = 75 + 50 * basilica.val;
						effects["culturePerTickBase"] += 0.2 + 0.05 * (basilica.val - 1);
					}

					var templars = game.religion.getRU("templars");
					if (templars.owned()) {
						effects["manpowerMax"] = 50 + 25 * templars.val;
					}
				}

				self.effects = effects;
			},
			flavor: true
		}, {
			name: "unicornPasture",
			prices: [
				{name: "unicorns", val: 2}
			],
			priceRatio: 1.75,
			unlockRatio: 0.3,
			requires: {tech: ["animal"]},
			effects: {
				"catnipDemandRatio":  -0.0015,
				"unicornsPerTickBase": 0.001
			},
			flavor: true
		}, {
			name: "ziggurat",
			prices: [
				{name: "megalith",  val: 50},
				{name: "scaffold",  val: 50},
				{name: "blueprint", val: 1}
			],
			priceRatio: 1.25,
			unlockRatio: 0.01,
			requires: {tech: ["construction"]},
			effects: {
				"cultureMaxRatio": 0.08
			},
			calculateEffects: function (self, game) {
				self.effects = {
					cultureMaxRatio: 0.08 + game.getEffect("cultureMaxRatioBonus")
				};
			}
		}, {
			name: "chronosphere",
			prices: [
				{name: "unobtainium", val: 2500},
				{name: "timeCrystal", val: 1},
				{name: "blueprint",   val: 100},
				{name: "science",     val: 250000}
			],
			priceRatio: 1.25,
			requires: {tech: ["chronophysics"]},
			effects: {
				"resStasisRatio":         0.015, //1.5% of resources will be preserved
				"energyConsumption":      20,
				"temporalFluxProduction": 0
			},
			upgrades: {voidSpace: ["cryochambers"]},
			calculateEffects: function (self, game) {
				self.effects["energyConsumption"] = 20;
				if (game.challenges.currentChallenge === "energy") {
					self.effects["energyConsumption"] *= 2;
				}
				self.effects["temporalFluxProduction"] = game.getEffect("temporalFluxProductionChronosphere");
			}
		}, {
			name: "aiCore",
			label: "buildings.aicore.label",
			description: "buildings.aicore.desc",
			prices: [
				{name: "antimatter", val: 125},
				{name: "science", 	val: 500000}
			],
			priceRatio: 1.15,
			unlockRatio: 0.01,
			requires: {tech: ["ai"]},
			effects: {
				"energyConsumption": 2,
				"gflopsPerTickBase": 0.02
			},
			upgrades: {spaceBuilding: ["moonBase"], buildings: ["library"]},
			// TODO Actually "action" is almost always just updating effects (unclear from the name), better separate the 2 concerns: update effects (can be done several times per tick) and perform specific action (only once per tick!)
			// TODO Separation of concerns currently done only for AI Core, will be systematized later
			updateEffects: function (self, game) {
				// Core #1: 2   ; Total:  2  ; Average: 2    =  8/4 = (3*1+5)/4
				// Core #2: 3.5 ; Total:  5.5; Average: 2.75 = 11/4 = (3*2+5)/4
				// Core #3: 5   ; Total: 10.5; Average: 3.5  = 14/4 = (3*3+5)/4
				// Core #4: 6.5 ; Total: 17  ; Average: 4.25 = 17/4 = (3*4+5)/4
				// etc.
				self.effects["energyConsumption"] = (3 * self.on + 5) / 4;
				if (game.challenges.currentChallenge == "energy") {
					self.effects["energyConsumption"] *= 2;
				}

				self.effects["aiLevel"] = Math.round(Math.log(Math.max(game.resPool.get("gflops").value, 1)));
			},
			action: function (self, game) {
				game.resPool.addResEvent("gflops", self.effects["gflopsPerTickBase"] * self.on);
				self.updateEffects(self, game);
			},
			forceAction: true,
			flavor: "buildings.aicore.flavor" // different capitalization in key
		}, {
			name: "zebraOutpost",
			prices: [
				{name: "bloodstone", val: 1}
			],
			priceRatio: 1.35,
			unlockRatio: 0.01,
			requires: {tech: ["animal"]},
			zebraRequired: 5,
			effects: {}
		}, {
			name: "zebraWorkshop",
			prices: [
				{name: "bloodstone", val: 5}
			],
			priceRatio: 1.15,
			unlockRatio: 0.01,
			requires: {tech: ["animal"]},
			zebraRequired: 10,
			effects: {}
		}, {
			name: "zebraForge",
			prices: [
				{name: "bloodstone", val: 50}
			],
			priceRatio: 1.15,
			unlockRatio: 0.01,
			requires: {tech: ["animal"]},
			zebraRequired: 50,
			effects: {}
		}
	],

	buildingGroupsData: {
		all: {
			name: "all",
			titleKey: "ui.filter.all",
			buildings: [],
			alwaysVisible: true
		},
		allEnabled: {
			name: "allEnabled",
			titleKey: "ui.filter.enabled",
			filterFn: function (bld) {
				return bld.unlocked && !dojo.hasClass(bld.nameNode, "btnDisabled");
			},
			alwaysVisible: true
		},
		togglable: {
			name: "togglable",
			title: "Togglable",
			filterFn: function (bld) {
				return bld.togglable;
			},
			alwaysVisible: true
		},
		iw: {
			name: "iw",
			title: "IW",
			buildings: []
		},
		food: {
			name: "food",
			buildings: ["field", "pasture", "aqueduct"]
		},
		population: {
			name: "population",
			buildings: ["hut", "logHouse", "mansion"]
		},
		science: {
			name: "science",
			buildings: ["library", "academy", "observatory", "biolab"]
		},
		storage: {
			name: "storage",
			buildings: ["barn", "warehouse", "harbor"]
		},
		resource: {
			name: "resource",
			buildings: ["mine", "quarry", "lumberMill", "oilWell", "accelerator"]
		},
		industry: {
			name: "industry",
			buildings: ["steamworks", "magneto", "smelter", "calciner", "factory", "reactor"]
		},
		culture: {
			name: "culture",
			buildings: ["amphitheatre", "chapel", "temple"]
		},
		other: {
			name: "other",
			buildings: ["workshop", "tradepost", "mint", "unicornPasture"]
		},
		megastructures: {
			name: "megastructures",
			buildings: ["ziggurat", "chronosphere", "aiCore"]
		},
		zebraBuildings: {
			name: "zebraBuildings",
			buildings: ["zebraOutpost", "zebraWorkshop", "zebraForge"]
		}
	},

	activeGroup: null,

	groupBuildings: false,
	twoRows: false,

	effectsBase: {
		"manpowerMax":    100,
		"catnipMax":      5000,
		"woodMax":        200,
		"mineralsMax":    250,
		"coalMax":        60,
		"ironMax":        50,
		"titaniumMax":    2,
		"goldMax":        10,
		"oilMax":         1500,
		"scienceMax":     250,
		"faithMax":       100,
		"cultureMax":     100,
		"uraniumMax":     250,
		"unobtainiumMax": 150,
		"antimatterMax":  100
	},

	buildings: null,
	buildingsByName: null,
	buildingGroups: null,

	tabName: "Bonfire",
	tabBlockClass: "shortInt",

	constructor: function (game) {
		this.i18nKeys = {tabName: "buildings.tabName"};

		this.buildingsNames = [];
		this.buildingGroups = {};

		for (var name in this.buildingGroupsData) {
			var group = dojo.clone(this.buildingGroupsData[name]);
			group.game = game;
			group.alwaysVisible = Boolean(group.alwaysVisible);
			this.buildingGroups[name] = group;
		}
		this.activeGroup = this.buildingGroups.all;

		this.registerMetaItems(this.buildingsData, classes.KGSaveEdit.BuildingMeta, "buildings", function (bld) {
			this.buildingsNames.push(bld.name);
			this.buildingGroups.all.buildings.push(bld.name);

			var effects = bld.get("effects") || {};

			if (!("maxKittens" in effects)) {
				this.buildingGroups.iw.buildings.push(bld.name);
			}
		});
		this.meta.push(this.buildings);
	},

	renderTabBlock: function () {
		this.buildingGroupsBlock = dojo.create("div", {
			id: "buildingGroupsBlock",
			class: "bottom-margin"
		}, this.tabBlockNode);

		this.buildingsBlock = dojo.create("table", {id: "buildingsBlock"}, this.tabBlockNode);
	},

	render: function () {
		var onclick = function () {
			dojo.query(".activeGroup", "buildingGroupsBlock").removeClass("activeGroup");
			dojo.addClass(this.domNode, "activeGroup");
			this.game.bld.activeGroup = this;
			this.game.update();
		};

		for (var name in this.buildingGroups) {
			var group = this.buildingGroups[name];

			//wrap tab link for css
			group.nodeWrapper = dojo.create("span", {class: "separated dotSeparator"}, this.buildingGroupsBlock);

			group.domNode = dojo.create("a", {
				class: "buildGroup",
				href: "#",
				innerHTML: group.title || $I(group.titleKey || "buildings.group." + group.name)
			}, group.nodeWrapper);

			on(group.domNode, "click", dojo.hitch(group, onclick));

			if (this.activeGroup === group) {
				dojo.addClass(group.domNode, "activeGroup");
			}
		}

		for (var i = 0, len = this.buildings.length; i < len; i++) {
			var bld = this.buildings[i];
			bld.render();
			dojo.place(bld.domNode, this.buildingsBlock);
		}
	},

	update: function () {
		this.calculateEffectsBase();
		this.game.callMethods(this.buildings, "updateUnlocked");

		var group;
		for (var name in this.buildingGroups) {
			group = this.buildingGroups[name];
			group.hasVisibleBuildings = group.alwaysVisible;

			var i, bld;
			if (group.name === "iw") {
				group.hasVisibleBuildings = this.game.ironWill && this.get("library").owned();
			} else if (group.filterFn) {
				group.buildings = [];
				for (i = this.buildings.length - 1; i >= 0; i--) {
					bld = this.buildings[i];
					if (group.filterFn(bld)) {
						group.buildings.push(bld.name);
						group.hasVisibleBuildings = true;
					}
				}
			} else if (!group.alwaysVisible) {
				for (i = group.buildings.length - 1; i >= 0; i--) {
					bld = this.get(group.buildings[i]);
					if (bld.unlocked) {
						group.hasVisibleBuildings = true;
						break;
					}
				}
			}

			dojo.toggleClass(group.nodeWrapper, "hidden", !group.hasVisibleBuildings);
		}

		if (!this.activeGroup || !this.activeGroup.hasVisibleBuildings) {
			group = this.buildingGroups.all;
			dojo.query(".activeGroup", "buildingGroupsBlock").removeClass("activeGroup");
			dojo.addClass(group.domNode, "activeGroup");
			this.game.bld.activeGroup = group;
		}

		this.game.callMethods(this.buildings, "update");
	},

	calculateEffectsBase: function () {
		var effects = {
			"manpowerMax":    100,
			"catnipMax":      5000,
			"woodMax":        200,
			"mineralsMax":    250,
			"coalMax":        60,
			"ironMax":        50,
			"titaniumMax":    2,
			"goldMax":        10,
			"oilMax":         1500,
			"scienceMax":     250,
			"faithMax":       100,
			"cultureMax":     100,
			"uraniumMax":     250,
			"unobtainiumMax": 150,
			"antimatterMax":  100
		};

		if (this.game.ironWill) {
			if (this.game.workshop.get("huntingArmor").owned()) {
				effects["manpowerMax"] = 1000;
			} else if (this.game.workshop.get("bolas").owned()) {
				effects["manpowerMax"] = 400;
			} else if (this.game.workshop.get("compositeBow").owned()) {
				effects["manpowerMax"] = 200;
			}
		}

		this.effectsBase = this.game.resPool.addBarnWarehouseRatio(effects);
	},

	getEffect: function (name, withoutBase) {
		var totalEffect = 0;
		if (!withoutBase) { // because the game adds in effectsBase in another place, and that effects compendium scienceMax calculations
			totalEffect = this.getEffectBase(name);
		}

		totalEffect = num(totalEffect + this.getEffectCached(name));

		// Previously, catnip demand (or other buildings that both effected the same resource)
		// could have theoretically had more than 100% reduction because they diminished separately,
		// this takes the total effect and diminishes it as a whole.
		if (this.game.isHyperbolic(name) && totalEffect < 0) {
			totalEffect = this.game.getHyperbolicEffect(totalEffect, 1.0);
		}

		//probably not the best place to handle this mechanics
		//----------- move to separate part? -----------
		if ((name === "productionRatio" || name === "magnetoRatio") &&
		this.game.resPool.energyCons > this.game.resPool.energyProd) {
			var delta = this.game.resPool.getEnergyDelta();
			totalEffect *= delta;
		}

		return num(totalEffect);
	},

	getEffectBase: function (name) {
		return num(this.effectsBase[name]);
	},

	get: function (name) {
		return this.getBuilding(name);
	},

	getBuilding: function (name) {
		return this.buildingsByName[name];
	},

	getAutoProductionRatio: function () {
		var autoProdRatio = 1;

		// faith
		autoProdRatio *= 1 + (this.game.religion.getProductionBonus() / 100);
		// SW
		var steamworks = this.get("steamworks");
		var steamworksOn = steamworks.getOn();
		var swRatio = steamworksOn > 0 ? 1 + steamworks.effects["magnetoBoostRatio"] * steamworksOn : 1;
		autoProdRatio *= 1 + this.getEffect("magnetoRatio") * swRatio;

		// paragon (25%)
		autoProdRatio *= 1 + this.game.prestige.getParagonProductionRatio() * 0.25;

		// reactors
		autoProdRatio *= 1 + this.getEffect("productionRatio");

		return autoProdRatio;
	},

	getPriceRatio: function (bldName) {
		var bld = this.getBuilding(bldName);
		var ratio = bld.get("priceRatio");

		var ratioBase = ratio - 1;

		var ratioDiff = this.game.getEffect(bldName + "PriceRatio") +
			this.game.getEffect("priceRatio") +
			this.game.getEffect("mapPriceReduction");

		ratioDiff = this.game.getHyperbolicEffect(ratioDiff, ratioBase);

		return ratio + ratioDiff;
	},

	getPrices: function (bldName, base) {
		return this.getBuilding(bldName).getPrices(base);
	},

	save: function (saveData) {
		saveData.buildings = this.game.mapMethods(this.buildings, "save");

		if (!saveData.bldData) {
			saveData.bldData = {};
		}
		saveData.bldData.groupBuildings = this.groupBuildings;
		saveData.bldData.twoRows = this.twoRows;
	},

	load: function (saveData) {
		this.loadMetadata(saveData, "buildings", "get", null, true);

		if (saveData.bldData) {
			this.groupBuildings = saveData.bldData.groupBuildings;
			this.twoRows = saveData.bldData.twoRows;
		}
	}
});


dojo.declare("classes.KGSaveEdit.BuildingMeta", classes.KGSaveEdit.MetaItemStackable, {
	domNode: null,

	unlockable: false,

	showAutomation: false,

	constructor: function () {
		var setKeys = function (obj, name) {
			obj.i18nKeys = {
				label: obj.label || "buildings." + name + ".label",
				description: obj.description || "buildings." + name + ".desc"
			};

			if (obj.flavor) {
				obj.i18nKeys.flavor = typeof obj.flavor === "string" ? obj.flavor : "buildings." + name + ".flavor";
			}
		};

		if (this.stages) {
			for (var i = this.stages.length - 1; i >= 0; i--) {
				setKeys(this.stages[i], this.stages[i].stageName);
			}
		} else {
			setKeys(this, this.name);
		}
	},

	seti18n: function () {
		var setKeys = function (obj, keys) {
			if (keys) {
				for (var key in keys) {
					obj[key] = $I(keys[key]);
				}
			}
		};

		if (this.stages) {
			for (var i = this.stages.length - 1; i >= 0; i--) {
				setKeys(this.stages[i], this.stages[i].i18nKeys);
			}
		} else {
			setKeys(this, this.i18nKeys);
		}
	},

	render: function () {
		var self = this;

		self.seti18n();

		self.domNode = dojo.create("tr", {
			class: "building",
			innerHTML: '<td></td><td class="rightAlign"></td><td></td><td></td>'
		});

		var td = self.domNode.children[0];
		self.nameNode = dojo.create("span", {
			class: "nameNode",
			innerHTML: self.get("label") || self.get("name")
		}, td);

		if (self.stages) {
			self.stageUpNode = self.game._createButton(
				{
					value: "^",
					class: "stageBtn hidden",
					title: "Upgrade building"
				}, td, function () {
					if (self.stage < self.stages.length - 1 && self.stages[self.stage + 1].stageUnlocked) {
						self.stage++;
						self.game.upgradeItems({buildings: [self.name]});
					}
					self.game.update();
				}
			);

			self.stageDownNode = self.game._createButton(
				{
					value: "V",
					class: "stageBtn hidden",
					title: "Downgrade building"
				}, td, function () {
					if (self.stage > 0) {
						self.stage--;
						self.game.upgradeItems({buildings: [self.name]});
					}
					self.game.update();
				}
			);
		}

		self.onNodeSpan = dojo.create("span", {innerHTML: " / "}, self.domNode.children[1]);

		self.game._createInput({
			class: "integerInput ownedInput",
			title: $I("KGSaveEdit.buildings.on.title")
		}, self.onNodeSpan, self, "on", "first");

		self.game._createValInput({
			title: $I("KGSaveEdit.buildings.val.title")
		}, self.domNode.children[1], self);

		self.toggleNode = self.game._createButton(
			{
				value: $I("btn.off.minor"),
				title: $I("btn.off.tooltip")
			}, self.domNode.children[2], function () {
				self.set("on", self.on > 0 ? 0 : self.val);
				self.game.update();
			}
		);

		var input = self.game._createCheckbox($I("KGSaveEdit.label.unlocked"), self.domNode.children[3], self, "unlocked");
		dojo.toggleClass(input.label, "hidden", !self.get("unlockRatio"));

		if (self.hasOwnProperty("isAutomationEnabled")) {
			input = self.game._createCheckbox($I("btn.aon.tooltip"), self.domNode.children[3], self, "isAutomationEnabled");
			self.isAutomationEnabledLabel = input.label;
			input.cbox.handler = function () {
				self.game.upgradeItems({buildings: [self.name]}); // sighs in oilWell
			};
		}

		if ("jammed" in self) {
			self.game._createCheckbox($I("KGSaveEdit.buildings.steamworks.jammed"), self.domNode.children[3], self, "jammed");
		}

		self.registerHighlight(self.domNode);
		self.registerTooltip(self.domNode);
	},

	//special consideration for staged buildings
	get: function (key) {
		if (this.stages && key in this.stages[this.stage]) {
			return this.stages[this.stage][key];
		}
		return this[key];
	},

	//special consideration for staged buildings
	set: function (key, value) {
		if (this[key + "Node"] && this[key + "Node"].dataProp === key) {
			var args = [].slice.call(arguments, 2);
			args = [this[key + "Node"], value].concat(args);
			value = this.game.setEle.apply(this.game, args);
		}

		if (this.stages && key in this.stages[this.stage]) {
			this.stages[this.stage][key] = value;
		} else {
			this[key] = value;
		}
		return value;
	},

	getDescription: function () {
		var desc = this.get("description");
		if (this.jammed) {
			return desc + "<br>" + "***Maintenance***";
		}
		return desc;
	},

	getPrices: function (simple) {
		var prices = dojo.clone(this.get("prices")) || [];

		if (!simple) {
			var ratio = this.game.bld.getPriceRatio(this.name);
			for (var i = 0, len = prices.length; i < len; i++) {
				prices[i].val *= Math.pow(ratio, this.val);
			}
		}
		return prices;
	},

	getEffect: function (effectName) {
		var effects = this.getEffects();
		var effect;

		if (effectName === "coalRatioGlobal") {
			effect = effects[effectName];
		// Max effects and Ratio effects depends on constructed buildings
		} else if (
			effectName.indexOf("Max", effectName.length - 3) > -1 ||
			(this.name === "biolab" && effectName.indexOf("Ratio", effectName.length - 5) !== -1)
		) {
			effect = effects[effectName] * this.val;
		} else {
			effect = effects[effectName] * this.getOn();
		}

		return num(effect);
	},

	update: function () {
		if (!this.togglable) {
			this.set("on", this.val);
		}
		var on = this.getOn();

		dojo.toggleClass(this.nameNode, "btnEnabled", this.togglable && on > 0);

		dojo.toggleClass(this.onNodeSpan, "hidden", !this.togglable || this.togglableOnOff);
		dojo.toggleClass(this.toggleNode, "hidden", !this.togglableOnOff);
		this.toggleNode.value = on > 0 ? $I("btn.on.minor") : $I("btn.off.minor");
		this.toggleNode.title = on > 0 ? $I("btn.on.tooltip") : $I("btn.off.tooltip");

		if (this.stages) {
			var len = this.stages.length - 1;
			//no safety like overkill
			this.stage = Math.min(Math.max(this.stage, 0), len) || 0;

			for (var i = len; i >= 1; i--) {
				var stage = this.stages[i];
				stage.stageUnlocked = this.game.checkRequirements(stage, false, true);
			}

			dojo.toggleClass(this.stageDownNode, "hidden", !this.stage);
			dojo.toggleClass(this.stageUpNode, "hidden",
				this.stage === len || !this.stages[this.stage + 1].stageUnlocked);
		}

		this.nameNode.innerHTML = this.get("label") || this.get("name");
		this.updateEnabled();

		var activeGroup = this.game.bld.activeGroup;
		dojo.toggleClass(this.domNode, "collapsed", activeGroup.buildings.indexOf(this.name) < 0);

		this.lackResConvert = false;
		if (this.action && (on > 0 || this.forceAction)) {
			var amt = this.action(this, this.game);
			if (amt !== undefined) {
				this.lackResConvert = amt !== 1;
			}
		}

		if (this.isAutomationEnabledLabel) {
			dojo.toggleClass(this.isAutomationEnabledLabel, "hidden", !this.showAutomation);
		}
		dojo.toggleClass(this.nameNode, "btnLackResConvert", Boolean(this.lackResConvert));
	},

	updateUnlocked: function () {
		this.unlockable = this.game.checkRequirements(this, true);

		var unlocked = this.unlockable;
		var unlockRatio = this.get("unlockRatio");

		var prices = this.getPrices(true);
		if (this.unlockable && prices.length && unlockRatio) {
			unlocked = this.game.resPool.hasRes(prices, unlockRatio);
		}
		var disable = !this.unlockable || unlocked;

		this.set("unlocked", unlocked || this.unlockedNode.prevChecked, true);

		dojo.toggleClass(this.nameNode, "spoiler", !this.unlocked);
		this.game.toggleDisabled(this.unlockedNode, disable);
	},

	save: function () {
		var saveData = this.game.filterMetaObj(this, ["name", "unlocked", "val", "on", "stage", "jammed"]);
		saveData.on = this.getOn();

		if (this.isAutomationEnabledNode && this.showAutomation) {
			saveData.isAutomationEnabled = this.isAutomationEnabled;
		}

		return saveData;
	},

	load: function (saveBld) {
		this.set("val", num(saveBld.val));
		this.set("unlocked", saveBld.unlocked);
		this.set("on", num(saveBld.on));

		if (this.isAutomationEnabledNode) {
			this.set("isAutomationEnabled", Boolean(saveBld.isAutomationEnabled));
		}
		if (this.jammedNode) {
			this.set("jammed", saveBld.jammed);
		}
		if (this.stages) {
			this.set("stage", num(saveBld.stage));
		}
	}
});


});
