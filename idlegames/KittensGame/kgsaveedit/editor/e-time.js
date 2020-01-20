/* global dojo, require, classes, $I, num */

require(["dojo/on"], function (on) {
"use strict";

dojo.declare("classes.KGSaveEdit.TimeManager", [classes.KGSaveEdit.UI.Tab, classes.KGSaveEdit.Manager], {
	game: null,

	flux: 0, /* Amount of years skipped by CF time jumps */
	heat: 0,
	timestamp: null,

	cfu: null,
	cfuByName: null,
	vsu: null,
	vsuByName: null,

	cfuData: [
		{
			name: "temporalBattery",
			prices: [
				{name: "timeCrystal", val: 5}
			],
			effects: {
				"temporalFluxMax": 750
			},
			priceRatio: 1.25,
			unlocked: true
		}, {
			name: "blastFurnace",
			prices: [
				{name: "timeCrystal", val: 25},
				{name: "relic",       val: 5}
			],
			priceRatio: 1.25,
			heat: 0,
			isAutomationEnabled: true,
			effects: {
				"heatMax":      100,
				"heatPerTick": -0.02
			},
			unlocked: true
		}, {
			name: "temporalAccelerator",
			prices: [
				{name: "timeCrystal", val: 10},
				{name: "relic",       val: 1000}
			],
			priceRatio: 1.25,
			upgrades: {chronoforge: ["temporalImpedance"]},
			effects: {
				"timeRatio": 0.05
			},
			unlocked: true
		}, {
			name: "temporalImpedance",
			prices: [
				{name: "timeCrystal", val: 100},
				{name: "relic",       val: 250}
			],
			priceRatio: 1.05,
			requires: function (game) {
				return game.calendar.darkFutureYears() >= 0;
			},
			effects: {
				"timeImpedance": 1000
			},
			calculateEffects: function (self, game) {
				self.effects["timeImpedance"] = Math.round(1000 * (1 + game.getEffect("timeRatio")));
			},
			showUnlocked: true
		}, {
			name: "ressourceRetrieval",
			prices: [
				{name: "timeCrystal", val: 1000}
			],
			priceRatio: 1.25,
			requires: {"tech": ["paradoxalKnowledge"]},
			effects: {
				"shatterTCGain": 0.01
			}
		}
	],

	vsuData: [
		{
			name: "cryochambers",
			prices: [
				{name: "timeCrystal", val: 2},
				{name: "void",        val: 100},
				{name: "karma",       val: 1}
			],
			priceRatio: 1.25,
			// unlocks: {tabs: ["village"]},
			requires: {tech: ["voidSpace"]},
			effects: {
				"maxKittens": 1
			},
			// handled elsewhere
			// calculateEffects: function (self, game) {
			// 	self.on = Math.min(self.val, game.bld.get("chronosphere").val);
			// }
		}, {
			name: "usedCryochambers",
			prices: [],
			priceRatio: 1.25,
			effects: {}
		}, {
			name: "voidHoover",
			prices: [
				{name: "timeCrystal", val: 10},
				{name: "void",        val: 250},
				{name: "antimatter",  val: 1000}
			],
			priceRatio: 1.25,
			requires: {upgrades: ["voidAspiration"]},
			effects: {
				"temporalParadoxVoid": 1
			}
		}, {
			name: "voidRift",
			prices: [
				{name: "void", val: 75}
			],
			priceRatio: 1.25,
			requires: {upgrades: ["voidAspiration"]},
			effects: {
				"globalResourceRatio": 0.02,
				"umbraBoostRatio":     0.1
			},
			upgrades: {spaceBuilding: ["hrHarvester"]}
		}, {
			name: "chronocontrol",
			prices: [
				{name: "timeCrystal",  val: 30},
				{name: "void",         val: 500},
				{name: "temporalFlux", val: 3000}
			],
			priceRatio: 1.25,
			// unlocks: {upgrades: ["turnSmoothly"]},
			requires: {tech: ["paradoxalKnowledge"]},
			effects: {
				"temporalParadoxDay": 1,
				"energyConsumption": 15
			},
			togglable: true,
			calculateEffects: function (self, game) {
				self.effects = {
					"temporalParadoxDay": 1 + game.getEffect("temporalParadoxDayBonus"),
					"energyConsumption": 15
				};
				if (game.challenges.currentChallenge === "energy") {
					self.effects["energyConsumption"] *= 2;
				}
			}
		}, {
			name: "voidResonator",
			prices: [
				{name: "void",        val: 50},
				{name: "timeCrystal", val: 1000},
				{name: "relic",       val: 10000}
			],
			priceRatio: 1.25,
			requires: {tech: ["paradoxalKnowledge"]},
			effects: {
				"voidResonance": 0.1
			}
		}
	],

	tabName: "Time",
	getVisible: function () {
		return this.game.science.get("calendar").owned() || this.getVSU("usedCryochambers").owned();
	},

	effectsBase: {
		"temporalFluxMax": 60 * 10 * 5,  //10 minutes (5 == this.game.ticksPerSecond)
		"heatMax":         100,
		"heatPerTick":    -0.01
	},

	getEffectBase: function (name) {
		return num(this.effectsBase[name]);
	},

	constructor: function (game) {
		this.game = game;
		this.timestamp = Date.now();
		this.i18nKeys = {tabName: "tab.name.time"};

		this.registerMetaItems(this.cfuData, classes.KGSaveEdit.CFUMeta, "cfu", function (cfu) {
			cfu.i18nKeys = {
				label: "time.cfu." + cfu.name + ".label",
				description: "time.cfu." + cfu.name + ".desc"
			};
		});
		this.registerMetaItems(this.vsuData, classes.KGSaveEdit.VSUMeta, "vsu", function (vsu) {
			vsu.i18nKeys = {
				label: "time.vsu." + vsu.name + ".label",
				description: "time.vsu." + vsu.name + ".desc"
			};
		});

		this.meta.push(this.cfu, this.vsu);
	},

	get: function (name) {
		return this.getCFU(name);
	},

	getCFU: function (name) {
		return this.cfuByName[name];
	},

	getVSU: function (name) {
		return this.vsuByName[name];
	},

	renderTabBlock: function () {
		var self = this;
		var game = self.game;

		// Timestamp Node
		var div = dojo.create("div", {
			id: "timestampBlock",
			class: "bottom-margin",
			innerHTML: '<span class="nameNode">' + $I("KGSaveEdit.time.timestamp") + "</span> "
		}, self.tabBlockNode);

		dojo.create("small", {
			title: $I("KGSaveEdit.time.timestamp.help"),
			innerHTML: '<a class="help" href="http://www.epochconverter.com/" target="_blank">[?]</a>'
		}, div);

		dojo.place(document.createTextNode(" "), div);

		game._createInput({
			id: "timestampNode",
			class: "integerInput timeInput",
			title: $I("KGSaveEdit.time.timestamp.title")
		}, div, self, "timestamp");

		dojo.place(document.createTextNode(" "), div);
		var btn = dojo.create("a", {
			href: "#",
			innerHTML: $I("KGSaveEdit.time.timestamp.set")
		}, div);
		on(btn, "click", function () {
			self.set("timestamp", Date.now());
		});

		self.timeBlock = dojo.create("table", {
			id: "timeBlock",
			class: "bottom-margin",
			innerHTML: '<tr><th colspan="3">Time</th></tr>'
		}, self.tabBlockNode);

		// Energy Node
		var temporalFlux = game.resPool.get("temporalFlux");
		var str = "/" + temporalFlux.maxValue;
		if (temporalFlux.value > 0) {
			str +=  " (" + game.toDisplaySeconds(temporalFlux.value / game.ticksPerSecond) + ")";
		}

		var tr = dojo.create("tr", {
			innerHTML: '<td><span class="nameNode">Temporal Flux</span></td><td></td><td>' + str + "</td>"
		}, self.timeBlock);

		// dojo.place(temporalFlux.valueNode, tr.children[1]);

		var input = game._createInput({
			id: "energyNode",
			class: "integerInput"
		}, tr.children[1], self);
		self.temporalFluxNode = input;

		input.handler = function () {
			temporalFlux.set("value", this.parsedValue, true);
		};

		self.energyMaxBlock = tr.children[2];

		// Flux Node
		tr = dojo.create("tr", {
			innerHTML: '<td><span class="nameNode">' + $I("KGSaveEdit.time.flux") + "</span></td><td></td><td></td>",
			title: $I("KGSaveEdit.time.flux.title")
		}, self.timeBlock);

		input = game._createInput({
			id: "fluxNode",
			class: "abbrInput"
		}, tr.children[1], self, "flux");
		input.minValue = -Number.MAX_VALUE;

		// Heat Node
		tr = dojo.create("tr", {
			innerHTML: '<td><span class="nameNode">' + $I("time.heat") + "</span></td><td></td><td></td>"
		}, self.timeBlock);

		self.heatNameNode = tr.children[0].children[0];

		input = game._createInput({id: "heatNode"}, tr.children[1], self, "heat");
		self.heatBlock = tr.children[2];


		self.chronoforgeBlock = dojo.create("table", {
			id: "cfuBlock",
			class: "bottom-margin"
		}, self.tabBlockNode);

		self.chronoforgeHeader = dojo.create("tr", {
			innerHTML: '<th colspan="3">Chronoforge</th>'
		}, self.chronoforgeBlock);

		for (var i = 0; i < self.cfu.length; i++) {
			var item = self.cfu[i];
			item.render();
			dojo.place(item.domNode, self.chronoforgeBlock);
		}

		//hack
		item = self.getCFU("ressourceRetrieval");
		item.valNode.parseFn = function (value) {
			return Math.min(value, 100) || 0;
		};


		self.voidspaceBlock = dojo.create("table", {
			id: "cfuBlock",
			class: "bottom-margin"
		}, self.tabBlockNode);

		self.voidspaceHeader = dojo.create("tr", {
			innerHTML: '<th colspan="3">Void Space</th>'
		}, self.voidspaceBlock);

		for (i = 0; i < self.vsu.length; i++) {
			item = self.vsu[i];
			item.render();
			item.afterRender(); //workaround for strictmode
			dojo.place(item.domNode, self.voidspaceBlock);
		}
	},

	update: function () {
		var hasChronoforge = this.game.workshop.get("chronoforge").owned();
		var temporalFlux = this.game.resPool.get("temporalFlux");
		var str = "/" + temporalFlux.maxValue;

		var seconds = temporalFlux.value / this.game.ticksPerSecond;
		if (seconds > 0) {
			str +=  " (" + this.game.toDisplaySeconds(seconds) + ")";
		}
		this.energyMaxBlock.innerHTML = str;

		this.heatBlock.innerHTML = "/" + this.game.getEffect("heatMax");

		this.game.callMethods(this.cfu, "update");
		this.game.callMethods(this.vsu, "update");

		dojo.toggleClass(this.heatNameNode, "spoiler", !hasChronoforge);
		dojo.toggleClass(this.chronoforgeHeader, "spoiler", !hasChronoforge);
		dojo.toggleClass(this.voidspaceHeader, "spoiler",
			!this.game.science.get("voidSpace").owned() && !this.getVSU("usedCryochambers").owned());
	},

	save: function (saveData) {
		saveData.time = {
			timestamp: this.timestamp,
			flux: this.flux,
			heat: this.heat,
			cfu: this.game.mapMethods(this.cfu, "save"),
			vsu: this.game.mapMethods(this.vsu, "save")
		};
	},

	load: function (saveData) {
		if (!saveData.time) {
			return;
		}

		var data = saveData.time;
		this.game.loadMetaFields(this, data, ["flux", "heat", "timestamp"]);

		this.loadMetadata(data, "cfu", "getCFU", null, true);
		this.loadMetadata(data, "vsu", "getVSU", null, true);

		if (data.usedCryochambers) {
			this.loadMetadata(data, "usedCryochambers", "getVSU", null, true);
		}
	}
});


dojo.declare("classes.KGSaveEdit.CFUMeta", classes.KGSaveEdit.MetaItemStackable, {
	unlocked: false,

	priceRatio: 1.25,

	constructor: function () {
		this.defaultUnlocked = this.unlocked;
	},

	getName: function () {
		var label = this.label;
		if (this.owned()) {
			label += " (" + this.val + ")";
		}
		if (this.heatNode) {
			label += " [" + this.heat.toFixed(0) + "%]";
		}
		return label;
	},

	getPrices: function () {
		var prices = this.prices ? dojo.clone(this.prices) : [];
		var priceRatio = this.priceRatio || 1.25;
		for (var i = prices.length - 1; i >= 0; i--) {
			prices[i].val *= Math.pow(priceRatio, this.val);
			if (prices[i].name === "karma" && this.name === "cryochambers") {
				prices[i].val -= prices[i].val * this.game.getHyperbolicEffect(0.01 * this.game.prestige.getBurnedParagonRatio(), 1.0);
			}
		}
		return prices;
	},

	render: function () {
		this.seti18n();

		var tr = dojo.create("tr", {
			// class: "building",
			innerHTML: "<td></td><td></td><td></td>"
		});
		this.domNode = tr;

		this.nameNode = dojo.create("span", {
			class: "nameNode",
			innerHTML: this.getName()
		}, tr.children[0]);

		if (this.togglable) {
			this.onNodeSpan = dojo.create("span", {innerHTML: " / "}, this.domNode.children[1]);

			this.game._createInput({
				class: "integerInput ownedInput",
				title: $I("KGSaveEdit.buildings.on.title")
			}, this.onNodeSpan, this, "on", "first");
		}

		this.game._createValInput({
			title: $I("KGSaveEdit.buildings.val.title")
		}, tr.children[1], this);

		if (this.hasOwnProperty("heat")) {
			dojo.place(document.createTextNode(" " + $I("time.heat") + " "), tr.children[1]);
			var input = this.game._createInput(null, tr.children[1], this, "heat");
			input.minValue = -Number.MAX_VALUE;
			input.displayFn = function (value) {
				return value.toFixed(0) + "%";
			};
		}

		if (this.hasOwnProperty("isAutomationEnabled")) {
			this.game._createCheckbox("Automation enabled", tr.children[2], this, "isAutomationEnabled");
		}

		if (this.showUnlocked) {
			this.game._createCheckbox($I("KGSaveEdit.label.unlocked"), tr.children[2], this, "unlocked");
		}

		this.registerHighlight(this.domNode); // MetaItem
		this.registerTooltip(this.domNode); // ToolTip
	},

	update: function () { // if researched
		var unlocked = this.game.checkRequirements(this, this.defaultUnlocked);
		if (this.unlockedNode) {
			this.game.toggleDisabled(this.unlockedNode, unlocked);
			unlocked = this.unlockedNode.prevChecked || unlocked;
		}
		this.set("unlocked", unlocked);
		dojo.toggleClass(this.nameNode, "spoiler", !this.unlocked);

		this.updateEnabled();

		if (this.name === "usedCryochambers") {
			dojo.addClass(this.nameNode, "btnDisabled");
		}
	},

	save: function () {
		var saveData = this.game.filterMetaObj(this, ["name", "val", "on", "heat", "isAutomationEnabled", "unlocked"]);
		saveData.on = this.getOn();
		return saveData;
	},

	load: function (saveData) {
		this.set("val", num(saveData.val));
		this.set("on", num(saveData.on));
		this.set("unlocked", Boolean(saveData.unlocked) || this.defaultUnlocked);

		if (this.heatNode) {
			this.set("heat", num(saveData.heat));
		}
		if (this.isAutomationEnabledNode) {
			this.set("isAutomationEnabled", Boolean(saveData.isAutomationEnabled));
		}
	}
});


dojo.declare("classes.KGSaveEdit.VSUMeta", classes.KGSaveEdit.CFUMeta, {
	//workaround for strictmode
	afterRender: function () {
		dojo.addClass(this.domNode.children[1], "rightAlign");
	},

	getOn: function () {
		var on = this.val;
		if (this.togglable) {
			on = Math.min(this.on, this.val) || 0;
		}
		if (this.name === "cryochambers") {
			on = Math.min(this.val, this.game.bld.get("chronosphere").val) || 0;
		}
		return on;
	},

	getName: function () {
		var label = this.get("label");
		if (this.owned()) {
			var on = this.getOn();
			if (this.togglable || (this.name === "cryochambers" && on < this.val)) {
				return label + " (" + on + "/" + this.val + ")";
			}
			return label + " (" + this.val + ")";
		}
		return label;
	},

	save: function () {
		var saveData = this.game.filterMetaObj(this, ["name", "val", "on"]);
		saveData.on = this.getOn();
		return saveData;
	}
});


});
