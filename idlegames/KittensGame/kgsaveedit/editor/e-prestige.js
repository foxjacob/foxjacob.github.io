/* global dojo, require, classes, $I */

require([], function () {
"use strict";

dojo.declare("classes.KGSaveEdit.PrestigeManager", classes.KGSaveEdit.Manager, {
	perksData: [
		{
			name: "engeneering",
			prices: [
				{name: "paragon", val: 5}
			],
			unlocked: true,
			// unlocks: {"perks": ["megalomania", "goldenRatio", "codexVox"]},
			effects: {
				"priceRatio": -0.01
			}
		}, {
			name: "codexVox",
			prices: [
				{name: "paragon", val: 25}
			],
			// unlocks: {"perks": ["codexLogos"]},
			requires: {perks: ["engeneering"]},
			effects: {
				"manuscriptCraftRatio":       0.25,
				"manuscriptGlobalCraftRatio": 0.05
			}
		}, {
			name: "codexLogos",
			prices: [
				{name: "paragon", val: 50}
			],
			// unlocks: {"perks": ["codexAgrum", "codexLeviathanianus"]},
			requires: {perks: ["codexVox"]},
			effects: {
				"compediumCraftRatio":        0.25,
				"manuscriptGlobalCraftRatio": 0.05,
				"compediumGlobalCraftRatio":  0.05
			}
		}, {
			name: "codexAgrum",
			prices: [
				{name: "paragon", val: 75}
			],
			requires: {perks: ["codexLogos"]},
			effects: {
				"blueprintCraftRatio":        0.25,
				"manuscriptGlobalCraftRatio": 0.05,
				"compediumGlobalCraftRatio":  0.05,
				"blueprintGlobalCraftRatio":  0.05
			}
		}, {
			name: "megalomania",
			prices: [
				{name: "paragon", val: 10}
			],
			// unlocks: {"perks": ["blackCodex"], "zigguratUpgrades": ["marker", "blackPyramid"]},
			requires: {perks: ["engeneering"]}
		}, {
			name: "blackCodex",
			prices: [
				{name: "paragon", val: 25}
			],
			// unlocks: {"zigguratUpgrades": ["unicornGraveyard"]},
			requires: {perks: ["megalomania"]}
		}, {
			name: "codexLeviathanianus",
			prices: [
				{name: "paragon", val: 75}
			],
			requires: {perks: ["codexLogos"]}
		}, {
			name: "goldenRatio",
			prices: [
				{name: "paragon", val: 50}
			],
			// unlocks: {"perks": ["divineProportion"]},
			requires: {perks: ["engeneering"]},
			effects: {
				"priceRatio": -(1 + Math.sqrt(5)) / 200 //Calculates the Golden Ratio
			}
		}, {
			name: "divineProportion",
			prices: [
				{name: "paragon", val: 100}
			],
			// unlocks: {"perks": ["vitruvianFeline"]},
			requires: {perks: ["goldenRatio"]},
			effects: {
				"priceRatio": -0.017
			}
		}, {
			name: "vitruvianFeline",
			prices: [
				{name: "paragon", val: 250}
			],
			// unlocks: {"perks": ["renaissance"]},
			requires: {perks: ["divineProportion"]},
			effects: {
				"priceRatio": -0.02
			}
		}, {
			name: "renaissance",
			prices: [
				{name: "paragon", val: 750}
			],
			requires: {perks: ["vitruvianFeline"]},
			effects: {
				"priceRatio": -0.0225
			}
		}, {
			name: "diplomacy",
			prices: [
				{name: "paragon", val: 5}
			],
			// unlocks: {"perks": ["zebraDiplomacy"]},
			unlocked: true
		}, {
			name: "zebraDiplomacy",
			prices: [
				{name: "paragon", val: 35}
			],
			// unlocks: {"perks": ["zebraCovenant"]},
			requires: {perks: ["diplomacy"]}
		}, {
			name: "zebraCovenant",
			prices: [
				{name: "paragon", val: 75}
			],
			requires: {perks: ["zebraDiplomacy"]}
		}, {
			name: "chronomancy",
			prices: [
				{name: "paragon", val: 25}
			],
			// unlocks: {"perks": ["astromancy", "anachronomancy", "unicornmancy"]},
			unlocked: true
		}, {
			name: "astromancy",
			prices: [
				{name: "paragon", val: 50}
			],
			requires: {perks: ["chronomancy"]}
		}, {
			name: "unicornmancy",
			prices: [
				{name: "paragon", val: 125}
			],
			unlocked: true
		}, {
			name: "anachronomancy",
			prices: [
				{name: "paragon", val: 125}
			],
			requires: {perks: ["chronomancy"]}
		}, {
			name: "carnivals",
			prices: [
				{name: "paragon", val: 25}
			],
			// unlocks: {"perks": ["numerology"]},
			unlocked: true
		}, {
			name: "willenfluff",
			prices: [
				{name: "paragon", val: 150}
			],
			// unlocks: {"perks": ["pawgan"]},
			requires: {perks: ["numerology"]},
			effects: {
				"kittenGrowthRatio": 0.75
			}
		}, {
			name: "pawgan",
			prices: [
				{name: "paragon", val: 400}
			],
			requires: {perks: ["willenfluff"]},
			effects: {
				"kittenGrowthRatio": 1.50
			}
		}, {
			name: "numerology",
			prices: [
				{name: "paragon", val: 50}
			],
			// unlocks: {"perks": ["numeromancy", "willenfluff", "voidOrder"]},
			requires: {perks: ["carnivals"]}
		}, {
			name: "numeromancy",
			prices: [
				{name: "paragon", val: 250}
			],
			// unlocks: {"perks": ["malkuth"]},
			requires: {perks: ["numerology"]}
		}, {
			name: "malkuth",
			prices: [
				{name: "paragon", val: 500}
			],
			// unlocks: {"perks": ["yesod"]},
			requires: {perks: ["numeromancy"]},
			effects: {
				"paragonRatio": 0.05
			}
		}, {
			name: "yesod",
			prices: [
				{name: "paragon", val: 750}
			],
			// unlocks: {"perks": ["hod"]},
			requires: {perks: ["malkuth"]},
			effects: {
				"paragonRatio": 0.05
			}
		}, {
			name: "hod",
			prices: [
				{name: "paragon", val: 1250}
			],
			// unlocks: {"perks": ["netzach"]},
			requires: {perks: ["yesod"]},
			effects: {
				"paragonRatio": 0.05
			}
		}, {
			name: "netzach",
			prices: [
				{name: "paragon", val: 1750}
			],
			// unlocks: {"perks": ["tiferet"]},
			requires: {perks: ["hod"]},
			effects: {
				"paragonRatio": 0.05
			}
		}, {
			name: "tiferet",
			prices: [
				{name: "paragon", val: 2500}
			],
			// unlocks: {"perks": ["gevurah"]},
			requires: {perks: ["netzach"]},
			effects: {
				"paragonRatio": 0.05
			}
		}, {
			name: "gevurah",
			prices: [
				{name: "paragon", val: 5000}
			],
			// unlocks: {"perks": ["chesed"]},
			requires: {perks: ["tiferet"]},
			effects: {
				"paragonRatio": 0.05
			}
		}, {
			name: "chesed",
			prices: [
				{name: "paragon", val: 7500}
			],
			// unlocks: {"perks": ["binah"]},
			requires: {perks: ["gevurah"]},
			effects: {
				"paragonRatio": 0.05
			}
		}, {
			name: "binah",
			prices: [
				{name: "paragon", val: 15000}
			],
			// unlocks: {"perks": ["chokhmah"]},
			requires: {perks: ["chesed"]},
			effects: {
				"paragonRatio": 0.05
			}
		}, {
			name: "chokhmah",
			prices: [
				{name: "paragon", val: 30000}
			],
			// unlocks: {"perks": ["keter"]},
			requires: {perks: ["binah"]},
			effects: {
				"paragonRatio": 0.05
			}
		}, {
			name: "keter",
			prices: [
				{name: "paragon", val: 60000}
			],
			requires: {perks: ["chokhmah"]},
			effects: {
				"paragonRatio": 0.05
			}
		}, {
			name: "voidOrder",
			prices: [
				{name: "paragon", val: 75}
			],
			requires: {perks: ["numerology"]}
		}, {
			name: "adjustmentBureau",
			prices: [
				{name: "paragon", val: 5}
			],
			// unlocks: {"perks": ["ascoh"]},
			unlocked: true
		}, {
			name: "ascoh",
			prices: [
				{name: "paragon", val: 5}
			],
			requires: {perks: ["adjustmentBureau"]}
		}
	],

	domNode: null,

	perks: null,
	perksByName: null,

	constructor: function () {
		this.registerMetaItems(this.perksData, classes.KGSaveEdit.UpgradeMeta, "perks", function (prestige) {
			prestige.i18nKeys = {
				label: "prestige." + prestige.name + ".label",
				description: "prestige." + prestige.name + ".desc"
			};
			if (prestige.flavor) {
				prestige.i18nKeys.flavor = "prestige." + prestige.name + ".flavor";
			}
		});
		this.meta.push(this.perks);
	},

	getPerk: function (name) {
		return this.perksByName[name];
	},

	getSpentParagon: function () {
		var paragon = 0;
		for (var i = this.perks.length - 1; i >= 0; i--) {
			var perk = this.perks[i];
			if (perk.researched) {
				if (perk.prices) {
					for (var j = perk.prices.length - 1; j >= 0; j--) {
						var price = perk.prices[j];
						if (price && price.name === "paragon") {
							paragon += price.val || 0;
						}
					}
				} else {
					paragon += perk.paragon || 0;
				}
			}
		}
		return paragon;
	},

	getParagonRatio: function () {
		return 1.0 + this.getEffect("paragonRatio");
	},

	getBurnedParagonRatio: function () {
		return this.game.getTriValue(this.game.resPool.get("burnedParagon").value, 500);
	},

	getParagonProductionRatio: function () {
		var paragonRatio = this.getParagonRatio();

		var productionRatioParagon = (this.game.resPool.get("paragon").value * 0.010) * paragonRatio;
		productionRatioParagon = this.game.getHyperbolicEffect(productionRatioParagon, 2 * paragonRatio);

		var ratio = this.game.calendar.darkFutureYears() >= 0 ? 4 : 1;
		var productionRatioBurnedParagon = this.game.resPool.get("burnedParagon").value * 0.010 * paragonRatio;
		productionRatioBurnedParagon = this.game.getHyperbolicEffect(productionRatioBurnedParagon, ratio * paragonRatio);

		return productionRatioParagon + productionRatioBurnedParagon;
	},

	getParagonStorageRatio: function () {
		var paragonRatio = this.getParagonRatio();
		var storageRatio = (this.game.resPool.get("paragon").value / 1000) * paragonRatio; //every 100 paragon will give a 10% bonus to the storage capacity
		if (this.game.calendar.darkFutureYears() >= 0) {
			storageRatio += (this.game.resPool.get("burnedParagon").value / 500) * paragonRatio;
		} else {
			storageRatio += (this.game.resPool.get("burnedParagon").value / 2000) * paragonRatio;
		}
		return storageRatio;
	},

	render: function () {
		this.domNode = dojo.create("table", {
			id: "metaphysicsBlock",
			class: "bottom-margin",
			innerHTML: '<tr><th colspan="2">' + $I("prestige.panel.label") + "</th></tr>"
		}, this.game.science.tabBlockNode);
		this.domNodeHeader = this.domNode.children[0];

		for (var i = 0, len = this.perks.length; i < len; i++) {
			var perk = this.perks[i];
			perk.render();
			dojo.place(perk.domNode, this.domNode);
		}
	},

	update: function () {
		this.game.callMethods(this.perks, "update", this.game.science.hideResearched);
		dojo.toggleClass(this.domNodeHeader, "spoiler", !this.game.science.get("metaphysics").owned());
	},

	save: function (saveData) {
		saveData.prestige = {
			perks: this.game.filterMetadata(this.perks, ["name", "unlocked", "researched"])
		};
	},

	load: function (saveData) {
		this.loadMetadata(saveData, "prestige.perks", "getPerk", null, true);
	},

	// console-only shortcuts
	researchAllPerks: function () {
		for (var i = this.perks.length - 1; i >= 0; i--) {
			var perk = this.perks[i];
			perk.set("unlocked", true);
			perk.set("researched", true);
		}
		this.game.update();
		return true;
	}
});

});
