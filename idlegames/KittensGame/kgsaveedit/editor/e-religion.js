/* global dojo, require, classes, $I, num */

require([], function () {
"use strict";

dojo.declare("classes.KGSaveEdit.ReligionManager", [classes.KGSaveEdit.UI.Tab, classes.KGSaveEdit.Manager], {
	zigguratUpgradesData: [
		{
			name: "unicornTomb",
			prices: [
				{name: "ivory", val: 500},
				{name: "tears", val: 5}
			],
			priceRatio: 1.15,
			// unlocks: {"zigguratUpgrades": ["ivoryTower"]},
			unlocked: true,
			effects: {
				"unicornsRatioReligion": 0.05
			}
		}, {
			name: "ivoryTower",
			prices: [
				{name: "ivory", val: 25000},
				{name: "tears", val: 25}
			],
			priceRatio: 1.15,
			// unlocks: {"zigguratUpgrades": ["ivoryCitadel"]},
			requires: {zigguratUpgrades: ["unicornTomb"]},
			effects: {
				"unicornsRatioReligion": 0.1,
				"riftChance":            5
			}
		}, {
			name: "ivoryCitadel",
			prices: [
				{name: "ivory", val: 50000},
				{name: "tears", val: 50}
			],
			priceRatio: 1.15,
			// unlocks: {"zigguratUpgrades": ["skyPalace"]},
			requires: {zigguratUpgrades: ["ivoryTower"]},
			effects: {
				"unicornsRatioReligion": 0.25,
				"ivoryMeteorChance":     5
			}
		}, {
			name: "skyPalace",
			prices: [
				{name: "ivory",    val: 125000},
				{name: "megalith", val: 5},
				{name: "tears",    val: 500}
			],
			priceRatio: 1.15,
			// unlocks: {"zigguratUpgrades": ["unicornUtopia"]},
			requires: {zigguratUpgrades: ["ivoryCitadel"]},
			effects: {
				"unicornsRatioReligion": 0.5,
				"ivoryMeteorRatio":      0.05,
				"goldMaxRatio":          0.01,
				"alicornChance":         10,
				"alicornPerTick":        0
			},
			calculateEffects: function (self, game) {
				var alicorns = 0;
				if (game.resPool.get("alicorn").value > 0) {
					alicorns = 0.00002;
				}
				self.effects["alicornPerTick"] = alicorns;
			}
		}, {
			name: "unicornUtopia",
			prices: [
				{name: "ivory", val: 1000000},
				{name: "gold",  val: 500},
				{name: "tears", val: 5000}
			],
			priceRatio: 1.15,
			// unlocks: {"zigguratUpgrades": ["sunspire"]},
			requires: {zigguratUpgrades: ["skyPalace"]},
			effects: {
				"unicornsRatioReligion": 2.5,
				"ivoryMeteorRatio":      0.15,
				"alicornChance":         15,
				"alicornPerTick":        0,
				"tcRefineRatio":         0.05
			},
			calculateEffects: function (self, game) {
				var alicorns = 0;
				if (game.resPool.get("alicorn").value > 0) {
					alicorns = 0.000025;
				}
				self.effects["alicornPerTick"] = alicorns;
			}
		}, {
			name: "sunspire",
			prices: [
				{name: "ivory", val: 750000},
				{name: "gold",  val: 1250},
				{name: "tears", val: 25000}
			],
			priceRatio: 1.15,
			requires: {zigguratUpgrades: ["unicornUtopia"]},
			effects: {
				"unicornsRatioReligion": 5,
				"ivoryMeteorRatio":      0.5,
				"alicornChance":         30,
				"alicornPerTick":        0,
				"tcRefineRatio":         0.1
			},
			calculateEffects: function (self, game) {
				var alicorns = 0;
				if (game.resPool.get("alicorn").value > 0) {
					alicorns = 0.00005;
				}
				self.effects["alicornPerTick"] = alicorns;
			}
		}, {
			name: "marker",
			prices: [
				{name: "spice",       val: 50000},
				{name: "tears",       val: 5000},
				{name: "unobtainium", val: 2500},
				{name: "megalith",    val: 750}
			],
			priceRatio: 1.15,
			requires: {perks: ["megalomania"]},
			effects: {
				"corruptionRatio": 0.000001
			}
		}, {
			name: "unicornGraveyard",
			prices: [
				{name: "necrocorn", val: 5},
				{name: "megalith",  val: 1000}
			],
			priceRatio: 1.15,
			requires: {perks: ["blackCodex"]},
			effects: {
				"cultureMaxRatioBonus": 0.01,
				"blackLibraryBonus":    0.02
			},
			upgrades: {buildings: ["ziggurat"]}
		}, {
			name: "unicornNecropolis",
			prices: [
				{name: "void",      val: 5},
				{name: "necrocorn", val: 15},
				{name: "alicorn",   val: 100},
				{name: "megalith",  val: 2500}
			],
			priceRatio: 1.15,
			requires: {zigguratUpgrades: ["unicornGraveyard"]},
			effects: {
				"corruptionBoostRatio": 0.10
			}
		}, {
			name: "blackPyramid",
			prices: [
				{name: "spice",       val: 150000},
				{name: "sorrow",      val: 5},
				{name: "unobtainium", val: 5000},
				{name: "megalith",    val: 2500}
			],
			priceRatio: 1.15,
			requires: {perks: ["megalomania"]},
			effects: {}
		}
	],

	religionUpgradesData: [
		{
			name: "solarchant",
			prices: [
				{name: "faith", val: 100}
			],
			priceRatio: 2.5,
			upgradable: true,
			faith: 150,
			effects: {
				"faithRatioReligion": 0.1
			}
		}, {
			name: "scholasticism",
			prices: [
				{name: "faith", val: 250}
			],
			priceRatio: 2.5,
			upgradable: true,
			faith: 300,
			upgrades: {buildings: ["temple"]}
		}, {
			name: "goldenSpire",
			prices: [
				{name: "faith", val: 350},
				{name: "gold",  val: 150}
			],
			priceRatio: 2.5,
			upgradable: true,
			faith: 500,
			upgrades: {buildings: ["temple"]}
		}, {
			name: "sunAltar",
			prices: [
				{name: "faith", val: 500},
				{name: "gold",  val: 250}
			],
			priceRatio: 2.5,
			upgradable: true,
			faith: 750,
			upgrades: {buildings: ["temple"]}
		}, {
			name: "stainedGlass",
			prices: [
				{name: "faith", val: 500},
				{name: "gold",  val: 250}
			],
			priceRatio: 2.5,
			upgradable: true,
			faith: 750,
			upgrades: {buildings: ["temple"]}
		}, {
			name: "solarRevolution",
			prices: [
				{name: "faith", val: 750},
				{name: "gold",  val: 500}
			],
			faith: 1000
		}, {
			name: "basilica",
			prices: [
				{name: "faith", val: 1250},
				{name: "gold",  val: 750}
			],
			priceRatio: 2.5,
			upgradable: true,
			faith: 10000,
			upgrades: {buildings: ["temple"]}
		}, {
			name: "templars",
			prices: [
				{name: "faith", val: 3500},
				{name: "gold",  val: 3000}
			],
			priceRatio: 2.5,
			upgradable: true,
			faith: 75000,
			upgrades: {buildings: ["temple"]}
		}, {
			name: "apocripha",
			prices: [
				{name: "faith", val: 5000},
				{name: "gold",  val: 5000}
			],
			faith: 100000
		}, {
			name: "transcendence",
			prices: [
				{name: "faith", val: 7500},
				{name: "gold",  val: 7500}
			],
			// unlocks: {challenges: ["atheism"]},
			faith: 125000
		}
	],

	transcendenceUpgradesData: [
		{
			name: "blackObelisk",
			prices: [
				{name: "relic", val: 100}
			],
			tier: 1,
			priceRatio: 1.15,
			effects: {},
			flavor: true
		}, {
			name: "blackNexus",
			prices: [
				{name: "relic", val: 5000}
			],
			tier: 3,
			priceRatio: 1.15,
			effects: {
				"relicRefineRatio": 1.0
			},
			flavor: true
		}, {
			name: "blackCore",
			prices: [
				{name: "relic", val: 10000}
			],
			tier: 5,
			priceRatio: 1.15,
			effects: {
				"blsLimit": 1
			},
			flavor: true
		}, {
			name: "singularity",
			prices: [
				{name: "relic", val: 25000}
			],
			tier: 7,
			priceRatio: 1.15,
			effects: {
				"globalResourceRatio": 0.10
			},
			flavor: true
		}, {
			name: "blackLibrary",
			prices: [
				{name: "relic", val: 30000}
			],
			tier: 9,
			priceRatio: 1.15,
			effects: {
				"compendiaTTBoostRatio": 0.02
			},
			// flavor: true
		}, {
			name: "blackRadiance",
			prices: [
				{name: "relic", val: 37500}
			],
			tier: 12,
			priceRatio: 1.15,
			effects: {
				"blsCorruptionRatio": 0.0012
			},
			flavor: true
		}, {
			name: "blazar",
			prices: [
				{name: "relic", val: 50000}
			],
			tier: 15,
			priceRatio: 1.15,
			effects: {
				//Should at least improve impedance scaling by some value (5%? 10%). Probably something else
				"timeRatio": 0.10,
				"rrRatio": 0.02
			},
			unlocked: false,
			upgrades: {chronoforge: ["temporalImpedance"]},
			flavor: true
		}, {
			name: "darkNova",
			prices: [
				{name: "relic", val: 75000},
				{name: "void",  val: 7500}
			],
			tier: 20,
			priceRatio: 1.15,
			effects: {
				"energyProductionRatio": 0.02
			},
			unlocked: false,
			flavor: true
		}, {
			name: "holyGenocide",
			description: "And tear will not fall down",
			prices: [
				{name: "relic", val: 100000},
				{name: "void",  val: 25000}
			],
			tier: 25,
			priceRatio: 1.15,
			effects: {},
			flavor: true
		}
	],

	zigguratUpgrades: null,
	zigguratUpgradesByName: null,
	religionUpgrades: null,
	religionUpgradesByName: null,
	transcendenceUpgrades: null,
	transcendenceUpgradesByName: null,

	faith: 0,
	faithRatio: 0,
	corruption: 0,
	tcratio: 0,

	hasTranscendeceUpgrade: false, //cache for getRU("transcendence").owned()

	tabName: "Religion",
	getVisible: function () {
		return this.game.resPool.get("faith").unlocked || (this.game.challenges.currentChallenge === "atheism" && this.game.bld.get("ziggurat").owned());
	},

	constructor: function () {
		this.i18nKeys = {tabName: "tab.name.religion"};
		this.registerMetaItems(this.zigguratUpgradesData, classes.KGSaveEdit.ZigguratMeta, "zigguratUpgrades");
		this.registerMetaItems(this.religionUpgradesData, classes.KGSaveEdit.ReligionMeta, "religionUpgrades");
		this.registerMetaItems(this.transcendenceUpgradesData, classes.KGSaveEdit.TranscendenceMeta, "transcendenceUpgrades");

		this.meta.push(this.zigguratUpgrades, this.religionUpgrades, this.transcendenceUpgrades);
	},

	getZU: function (name) {
		return this.zigguratUpgradesByName[name];
	},

	getRU: function (name) {
		return this.religionUpgradesByName[name];
	},

	getTU: function (name) {
		return this.transcendenceUpgradesByName[name];
	},

	getFaithBonus: function () {
		return this.getTriValueReligion(this.faithRatio);
	},

	getTriValueReligion: function (ratio) {
		return this.game.getTriValue(ratio, 0.1) * 0.1;
	},

	getTranscendenceLevel: function () {
		var bonus = this.getTriValueReligion(this.tcratio) * 100;
		return Math.max(Math.round(Math.log(bonus)), 0);
	},

	getTranscendenceRatio: function (level) {
		var bonus = Math.exp(level);
		return (Math.pow(bonus / 5 + 1, 2) - 1) / 80;
	},

	getProductionBonus: function () {
		var rate = this.getRU("solarRevolution").owned() ? this.game.getTriValue(this.faith, 1000) : 0;
		//Solar Revolution capped to 1000% so it doesn't become game-breaking
		var atheismBonus = this.game.challenges.getChallenge("atheism").researched ? this.getTranscendenceLevel() * 0.1 : 0;
		var blackObeliskBonus = this.getTranscendenceLevel() * this.getTU("blackObelisk").val * 0.005;
		rate = this.game.getHyperbolicEffect(rate, 1000) * (1 + atheismBonus + blackObeliskBonus);
		return rate;
	},

	getEffect: function (name) {
		var cached = this.effectsCached[name];
		if (!isNaN(cached)) {
			return cached;
		}

		var effect = 0;
		var effectMeta;

		for (var i = this.zigguratUpgrades.length - 1; i >= 0; i--) {
			effectMeta = this.zigguratUpgrades[i].getEffect(name);
			effect += effectMeta;
		}

		for (i = this.religionUpgrades.length - 1; i >= 0; i--) {
			effectMeta = this.religionUpgrades[i].getEffect(name);
			effect += effectMeta;
		}

		for (i = this.transcendenceUpgrades.length - 1; i >= 0; i--) {
			effectMeta = this.transcendenceUpgrades[i].getEffect(name);
			effect += effectMeta;
		}

		this.effectsCached[name] = effect;
		return effect;
	},

	renderTabBlock: function () {
		this.zigguratBlock = dojo.create("table", {
			id: "zigguratBlock",
			class: "bottom-margin",
			innerHTML: '<tr><th colspan="2">' + $I("religion.panel.ziggurat.label") + "</th></tr>"
		}, this.tabBlockNode);
		this.zigguratBlockHeader = this.zigguratBlock.children[0];

		var table = dojo.create("table", {class: "bottom-margin"}, this.tabBlockNode);

		var tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.religion.totalFaith") + '</td><td></td>'
		}, table);
		this.game._createInput({class: "abbrInput"}, tr.children[1], this, "faith");
		this.solarBonusSpan = dojo.create("span", {id: "solarBonusSpan", class: "leftSpacer"}, tr.children[1]);

		tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.religion.apocryphaBonus") + '</td><td></td>'
		}, table);
		this.game._createInput({class: "abbrInput"}, tr.children[1], this, "faithRatio");
		this.apocryphaBonusSpan = dojo.create("span", {id: "apocryphaBonusSpan", class: "leftSpacer"}, tr.children[1]);

		tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.religion.corruptionTimer") + "</td><td></td>"
		}, table);
		this.game._createInput({class: "abbrInput"}, tr.children[1], this, "corruption");

		tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.religion.transcendenceRatio") + "</td>" +
				'<td colspan="2">&nbsp; &harr; &nbsp;</td>'
		}, table);
		this.game._createInput({class: "abbrInput"}, tr.children[1], this, "tcratio", "first");
		this.transcendenceLevelNode = this.game._createInput({class: "integerInput"}, tr.children[1]);
		dojo.place(document.createTextNode(" " + $I("KGSaveEdit.religion.transcendenceLevel")), tr.children[1]);

		this.tcratioNode.handler = function () {
			var transcendenceLevel = this.game.religion.getTranscendenceLevel(this.game.religion.tcratio);
			this.game.setInput(this.game.religion.transcendenceLevelNode, transcendenceLevel, true);
		};

		this.transcendenceLevelNode.handler = function () {
			var transcendenceRatio = this.game.religion.getTranscendenceRatio(this.parsedValue);
			this.game.setInput(this.game.religion.tcratioNode, transcendenceRatio, true);
		};

		this.religionBlock = dojo.create("table", {
			id: "religionBlock",
			class: "bottom-margin",
			innerHTML: '<tr><th colspan="2">' + $I("religion.panel.orderOfTheSun.label") + "</th></tr>"
		}, this.tabBlockNode);
		this.religionBlockHeader = this.religionBlock.children[0];

		this.transcendenceBlock = dojo.create("table", {
			id: "transcendenceBlock",
			innerHTML: '<tr><th colspan="2">' + $I("religion.panel.cryptotheology.label") + "</th></tr>"
		}, this.tabBlockNode);
		this.transcendenceBlockHeader = this.transcendenceBlock.children[0];
	},

	render: function () {
		for (var i = 0, len = this.zigguratUpgrades.length; i < len; i++) {
			var zu = this.zigguratUpgrades[i];
			zu.render();
			dojo.place(zu.domNode, this.zigguratBlock);
		}

		for (i = 0, len = this.religionUpgrades.length; i < len; i++) {
			var ru = this.religionUpgrades[i];
			ru.render();
			dojo.place(ru.domNode, this.religionBlock);
		}

		for (i = 0, len = this.transcendenceUpgrades.length; i < len; i++) {
			var tu = this.transcendenceUpgrades[i];
			tu.render();
			dojo.place(tu.domNode, this.transcendenceBlock);
		}
	},

	update: function () {
		this.hasTranscendeceUpgrade = this.getRU("transcendence").owned(true);
		this.game.callMethods(this.zigguratUpgrades, "update");
		this.game.callMethods(this.religionUpgrades, "update");
		this.game.callMethods(this.transcendenceUpgrades, "update");

		var isAtheism = this.game.challenges.currentChallenge === "atheism";

		dojo.toggleClass(this.zigguratBlockHeader, "spoiler", !this.game.bld.get("ziggurat").owned());
		dojo.toggleClass(this.religionBlockHeader, "spoiler", isAtheism);
		dojo.toggleClass(this.transcendenceBlockHeader, "spoiler", isAtheism || !this.game.science.get("cryptotheology").owned());

		var text = "";

		if (this.getRU("solarRevolution").owned()) {
			var bonus = this.getProductionBonus();
			text = " (" + this.game.getDisplayValueExt(bonus, true, false, 3) + "% " + $I("religion.faithCount.bonus") + ")";
		}
		this.solarBonusSpan.textContent = text;

		var ratio = this.getFaithBonus();
		this.apocryphaBonusSpan.textContent = " [" + this.game.getDisplayValueExt(ratio * 100, true, false, 1) + "%]";
	},

	save: function (saveData) {
		var isAtheism = this.game.challenges.currentChallenge === "atheism";

		saveData.religion = {
			faith: isAtheism ? 0 : this.faith,
			corruption: this.corruption,
			faithRatio: this.faithRatio,
			tcratio: this.tcratio,
			zu: this.game.filterMetadata(this.zigguratUpgrades, ["name", "val", "on", "unlocked"]),
			ru: this.game.filterMetadata(this.religionUpgrades, ["name", "val", "on"], function (saveRU) {
				if (isAtheism) {
					saveRU.val = 0;
					saveRU.on = 0;
				}
			}),
			tu: this.game.filterMetadata(this.transcendenceUpgrades, ["name", "val", "on", "unlocked"])
		};
	},

	load: function (saveData) {
		if (!saveData.religion) {
			return;
		}

		this.set("faith", num(saveData.religion.faith));
		this.set("corruption", num(saveData.religion.corruption));
		this.set("faithRatio", num(saveData.religion.faithRatio));
		this.set("tcratio", num(saveData.religion.tcratio));

		this.loadMetadata(saveData, "religion.zu", "getZU", null, true);
		this.loadMetadata(saveData, "religion.ru", "getRU", null, true);
		this.loadMetadata(saveData, "religion.tu", "getTU", null, true);
	}
});


dojo.declare("classes.KGSaveEdit.ZigguratMeta", classes.KGSaveEdit.MetaItemStackable, {
	unlocked: false,

	constructor: function () {
		this.i18nKeys = {
			label: "religion.zu." + this.name + ".label",
			description: "religion.zu." + this.name + ".desc"
		};
		if (this.flavor) {
			this.i18nKeys.flavor = "religion.zu." + this.name + ".flavor";
		}
	},

	render: function () {
		this.seti18n();

		this.domNode = dojo.create("tr", {
			class: "zigguratUpgrade",
			innerHTML: "<td>" + (this.label || this.name) + "</td><td></td>"
		});
		this.nameNode = this.domNode.children[0];
		this.game._createValInput(null, this.domNode.children[1], this);

		this.registerHighlight(this.domNode);
		this.registerTooltip(this.domNode);
	},

	update: function () {
		this.updateEnabled();
		this.unlocked = this.game.checkRequirements(this);
		dojo.toggleClass(this.nameNode, "spoiler", !this.unlocked);
	},

	load: function (saveData) {
		this.set("val", num(saveData.val));
		this.set("unlocked", Boolean(saveData.unlocked));
	}
});


dojo.declare("classes.KGSaveEdit.ReligionMeta", classes.KGSaveEdit.MetaItemStackable, {
	upgradable: false,

	constructor: function () {
		this.i18nKeys = {
			label: "religion.ru." + this.name + ".label",
			description: "religion.ru." + this.name + ".desc"
		};
		if (this.flavor) {
			this.i18nKeys.flavor = "religion.ru." + this.name + ".flavor";
		}
	},

	owned: function (override) {
		if (!override && this.game.challenges.currentChallenge === "atheism") {
			return false;
		}
		return this.val > 0;
	},

	getName: function () {
		var name = this.label || this.name;
		if (this.owned()) {
			if (this.upgradable && this.game.religion.hasTranscendeceUpgrade) {
				name += " (" + this.val + ")";
			} else {
				name += " " + $I("btn.complete");
			}
		}
		return name;
	},

	getPrices: function () {
		var prices = dojo.clone(this.prices) || [];
		var priceRatio = this.priceRatio || 2.5;
		if (!this.upgradable) {
			priceRatio = 1;
		}

		for (var i = prices.length - 1; i >= 0; i--) {
			prices[i].val *= Math.pow(priceRatio, this.val);
		}
		return this.game.village.getEffectLeader("wise", prices);
	},

	render: function () {
		this.seti18n();

		this.domNode = dojo.create("tr", {
			class: "religionUpgrade",
			innerHTML: "<td>" + (this.label || this.name) + "</td><td></td>"
		});
		this.nameNode = this.domNode.children[0];

		var input = this.game._createCheckbox($I("KGSaveEdit.religion.complete"), this.domNode.children[1], this);
		this.ownedCheckbox = input.cbox;
		dojo.addClass(input.cbox, "ownedInput");
		input.cbox.handler = function () {
			var ru = this.metaObj;
			if (this.checked !== Boolean(ru.val)) {
				var value = this.checked ? Math.max(ru.valNode.prevValue, 1) : 0;
				ru.val = this.game.setInput(ru.valNode, num(value), true, true);
				ru.on = value;
			}
		};

		this.game._createValInput(null, this.domNode.children[1], this);
		this.valNode.handler = function () {
			this.game.setCheckbox(this.metaObj.ownedCheckbox, this.parsedValue, true, true);
			this.metaObj.on = this.parsedValue;
		};

		this.registerHighlight(this.domNode);
		this.registerTooltip(this.domNode);
	},

	update: function () {
		this.updateEnabled();
		dojo.toggleClass(this.nameNode, "spoiler", this.game.religion.faith < this.faith);

		var t = Boolean(this.upgradable && this.game.religion.hasTranscendeceUpgrade);
		dojo.toggleClass(this.ownedCheckbox.parentNode, "hidden", t);
		dojo.toggleClass(this.valNode, "invisible", !t);
	},

	load: function (saveData) {
		this.set("val", num(saveData.val));
	}
});


dojo.declare("classes.KGSaveEdit.TranscendenceMeta", classes.KGSaveEdit.MetaItemStackable, {
	unlocked: false,

	constructor: function () {
		this.i18nKeys = {
			label: "religion.tu." + this.name + ".label",
			description: "religion.tu." + this.name + ".desc"
		};
		if (this.flavor) {
			this.i18nKeys.flavor = "religion.tu." + this.name + ".flavor";
		}
	},

	render: function () {
		this.seti18n();

		this.domNode = dojo.create("tr", {
			class: "transcendenceUpgrade",
			innerHTML: "<td>" + (this.label || this.name) + "</td><td></td>"
		});
		this.nameNode = this.domNode.children[0];
		this.game._createValInput(null, this.domNode.children[1], this);

		this.registerHighlight(this.domNode);
		this.registerTooltip(this.domNode);
	},

	update: function () {
		this.updateEnabled();
		this.unlocked = this.game.religion.getTranscendenceLevel() >= this.tier;
		dojo.toggleClass(this.nameNode, "spoiler", !this.unlocked);
	},

	load: function (saveData) {
		this.set("val", num(saveData.val));
		this.set("unlocked", Boolean(saveData.unlocked));
	}
});


});
