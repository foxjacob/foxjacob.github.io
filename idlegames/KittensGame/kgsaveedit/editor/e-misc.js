/* global require, dojo, classes, $I */

require(["dojo/on", "dojo/mouse"], function (on, mouse) {
"use strict";


dojo.declare("classes.KGSaveEdit.OptionsTab", classes.KGSaveEdit.UI.Tab, {
	options: [
		{
			name: "useWorkers",
			desc: "Use web worker (game works correctly in background tab, may cause performance issues)"
		}, {
			name: "forceHighPrecision",
			desc: "Use high precision for resource values",
			src: "game.opts"
		}, {
			name: "usePerSecondValues",
			desc: "Use per second values <i>(per tick otherwise)</i>",
			src: "game.opts"
		}, {
			name: "usePercentageResourceValues",
			desc: "Use percentage resource production values",
			src: "game.opts"
		}, {
			name: "highlightUnavailable",
			desc: "Highlight buildings limited by storage space",
			src: "game.opts"
		}, {
			name: "hideSell",
			desc: 'Hide "sell" buttons',
			src: "game.opts"
		}, {
			name: "enableRedshift",
			desc: "Enable offline progression (Experimental)",
			src: "game.opts"
		}, {
			name: "forceLZ",
			desc: "Always compress save files (Experimental)",
			src: "game.opts"
		}, {
			name: "noConfirm",
			desc: "Do not confirm when clearing all jobs",
			src: "game.opts"
		}, {
			name: "IWSmelter",
			desc: "Smelters turn off at 95% max Iron in Iron Will mode",
			src: "game.opts"
		}, {
			name: "disableTelemetry",
			desc: "Disable game statistics.",
			class: "bottom-margin"
		}, {
			name: "isCMBREnabled",
			desc: "Global donate bonus enabled",
			class: "hidden"
		}, {
			name: "ironWill",
			desc: $I("challendge.ironWill.label")
		}, {
			name: "cheatMode",
			desc: $I("KGSaveEdit.opts.cheatMode"),
			class: "bottom-margin"
		}
	],
	scheme: null,

	tabName: "Options &amp; Settings",

	constructor: function () {
		this.i18nKeys = {tabName: "KGSaveEdit.opts.tab"};
	},

	renderTabBlock: function () {
		var game = this.game;

		dojo.place(game.calendar.domNode, this.tabBlockNode);

		dojo.place(document.createTextNode("Color scheme: "), this.tabBlockNode);
		var scheme = dojo.create("select", {
			id: "setColorScheme",
			innerHTML: '<option value="">Classic</option><option value="dark">Inverted</option><option value="grassy">Grassy</option><option value="sleek">Sleek (By Kida)</option>'
		}, this.tabBlockNode);
		scheme.game = game;
		this.scheme = scheme;
		scheme.defaultVal = this.game.colorScheme || "";

		on(scheme, "change", function () {
			this.game.colorScheme = this.value;
			this.game.update();
		});

		dojo.place("<br><br>", scheme, "after");

		for (var i = 0; i < this.options.length; i++) {
			var option = this.options[i];
			var ref = option.src === "game.opts" ? game.opts : game;

			var div = dojo.create("div", {
				"data-option-name": option.name
			}, this.tabBlockNode);
			game._createCheckbox(option.desc, div, ref, option.name);

			if (option.class) {
				div.className = option.class;
			}
		}

		// Dead Kittens & Karma
		var table = dojo.create("table", {class: "bottom-margin"}, this.tabBlockNode);

		var tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.opts.deadKittens") + "</td><td></td>"
		}, table);
		game._createInput({class: "integerInput"}, tr.children[1], game, "deadKittens");

		tr = dojo.create("tr", {
			innerHTML: "<td>karmaKittens</td><td>&nbsp; &harr; &nbsp;</td>"
		}, table);
		var td = tr.children[1];

		game._createInput({id: "karmaKittensNode", class: "integerInput"},
			td, game, "karmaKittens", "first");
		game.karmaKittensKarma = game._createInput({class: "abbrInput"}, td);
		dojo.place(document.createTextNode(" " + $I("resources.karma.title")), td);

		game.karmaKittensNode.handler = function () {
			var value = this.game.getTriValue(this.parsedValue, 5);
			this.game.setInput(this.game.karmaKittensKarma, value, true);
			this.game.resPool.get("karma").set("value", value, true);
		};

		game.karmaKittensKarma.parseFn = function (value) {
			return this.game.getTriValue(Math.round(this.game.getTriValueOrigin(value, 5)), 5);
		};
		game.karmaKittensKarma.handler = function () {
			this.game.resPool.get("karma").set("value", this.parsedValue, true);
			this.game.setInput(this.game.karmaKittensNode, Math.round(this.game.getTriValueOrigin(this.parsedValue, 5)), true);
		};

		tr = dojo.create("tr", {innerHTML: "<td>karmaZebras</td><td><td>"}, table);
		game._createInput({class: "integerInput"}, tr.children[1], game, "karmaZebras");

		dojo.place(game.console.domNode, this.tabBlockNode);

		// dojo.place(game.telemetry.domNode, this.tabBlockNode);
	}
});


dojo.declare("classes.KGSaveEdit.Calendar", classes.KGSaveEdit.TooltipItem, {
	game: null,

	seasons: [
		{
			name: "spring",
			modifiers: {"catnip": 1.5}
		}, {
			name: "summer",
			modifiers: {"catnip": 1.0}
		}, {
			name: "autumn",
			modifiers: {"catnip": 1.0}
		}, {
			name: "winter",
			modifiers: {"catnip": 0.25}
		}
	],

	cycleYearColors: [
		"#A00000",
		"#DBA901",
		"#14CD61",
		"#01A9DB",
		"#9A2EFE"
	],

	cycles: [
		{
			name: "charon",
			title: "Charon",
			glyph: "&#9049;",
			effects: {
				"entangler-gflopsConsumption":         2,
				"moonOutpost-unobtainiumPerTickSpace": 0.9
			},
			festivalEffects: {
				"catnip":   1.5,
				"wood":     1.5,
				"minerals": 1.5
			}
		}, {
			name: "umbra",
			title: "Umbra",
			glyph: "&#9062;",
			effects: {
				"hrHarvester-energyProduction":           1.5,
				"planetCracker-uraniumPerTickSpace":      0.9,
				"hydrofracturer-oilPerTickAutoprodSpace": 0.75
			},
			festivalEffects: {
				"coal":     1.5,
				"iron":     1.5,
				"titanium": 1.5,
				"gold":     1.5
			}
		}, {
			name: "yarn",
			title: "Yarn",
			glyph: "&#9063;",
			effects: {
				"hydroponics-catnipRatio":                  2,
				"researchVessel-starchartPerTickBaseSpace": 0.5
			},
			festivalEffects: {
				"culture": 2
			}
		}, {
			name: "helios",
			title: "Helios",
			glyph: "&#8978;",
			effects: {
				"sunlifter-energyProduction": 1.5,
				"cryostation-woodMax":        0.9,
				"cryostation-mineralsMax":    0.9,
				"cryostation-ironMax":        0.9,
				"cryostation-coalMax":        0.9,
				"cryostation-uraniumMax":     0.9,
				"cryostation-titaniumMax":    0.9,
				"cryostation-oilMax":         0.9,
				"cryostation-unobtainiumMax": 0.9
			},
			festivalEffects: {
				"faith":    2,
				"unicorns": 1.25
			}
		}, {
			name: "cath",
			title: "Cath",
			glyph: "&#9022;",
			effects: {
				"spaceElevator-prodTransferBonus":       2,
				"sattelite-starchartPerTickBaseSpace":   2,
				"sattelite-observatoryRatio":            2,
				"spaceStation-scienceRatio":             1.5,
				"spaceBeacon-starchartPerTickBaseSpace": 0.1
			},
			festivalEffects: {
				"manpower": 2
			}
		}, {
			name: "redmoon",
			title: "Redmoon",
			glyph: "&#9052;",
			effects: {
				"moonOutpost-unobtainiumPerTickSpace": 1.2,
				"entangler-gflopsConsumption":         0.5
			},
			festivalEffects: {
				"unobtainium": 2
			}
		}, {
			name: "dune",
			title: "Dune",
			glyph: "&#9067;",
			effects: {
				"planetCracker-uraniumPerTickSpace":      1.1,
				"hydrofracturer-oilPerTickAutoprodSpace": 1.5,
				"hrHarvester-energyProduction":           0.75
			},
			festivalEffects: {
				"uranium": 2
			}
		}, {
			name: "piscine",
			title: "Piscine",
			glyph: "&#9096;",
			effects: {
				"researchVessel-starchartPerTickBaseSpace": 1.5,
				"hydroponics-catnipRatio":                  0.5
			},
			festivalEffects: {
				"science": 2
			}
		}, {
			name: "terminus",
			title: "Terminus",
			glyph: "&#9053;",
			effects: {
				"cryostation-woodMax":        1.2,
				"cryostation-mineralsMax":    1.2,
				"cryostation-ironMax":        1.2,
				"cryostation-coalMax":        1.2,
				"cryostation-uraniumMax":     1.2,
				"cryostation-titaniumMax":    1.2,
				"cryostation-oilMax":         1.2,
				"cryostation-unobtainiumMax": 1.2,
				"sunlifter-energyProduction": 0.5
			},
			festivalEffects: {
				"oil": 2
			}
		}, {
			name: "kairo",
			title: "Kairo",
			glyph: "&#8483;",
			effects: {
				"spaceBeacon-starchartPerTickBaseSpace": 5,
				"spaceElevator-prodTransferBonus":       0.5,
				"sattelite-starchartPerTickBaseSpace":   0.75,
				"sattelite-observatoryRatio":            0.75,
				"spaceStation-scienceRatio":             0.75
			},
			festivalEffects: {
				"starchart": 5
			}
		}
	],

	ticksPerDay: 10,
	daysPerSeason: 100,
	seasonsPerYear: null,
	yearsPerCycle: null,

	refYear: 0, //to be used to calculate millenium paragon

	season: 0,
	cycle: 0,
	cycleYear: 0,

	day: 0,
	year: 0,

	weather: null, //warm / cold

	festivalDays: 0,
	futureSeasonTemporalParadox: -1,

	domNode: null,
	cycleEffectsNode: null,

	cryptoPrice: 1000,

	getCurSeason: function () {
		if (this.game.challenges.currentChallenge === "winterIsComing") {
			return this.seasons[3]; //eternal winter
		}
		return this.seasons[this.season];
	},

	getWeatherMod: function () {
		var mod = 0;
		if (this.weather === "warm") {
			mod =  0.15;
		} else if (this.weather === "cold") {
			mod = -0.15;
		}
		return mod;
	},

	constructor: function (game) {
		this.game = game;

		this.seasonsPerYear = this.seasons.length;
		this.yearsPerCycle = this.cycleYearColors.length;
	},

	getSeasonTitle: function (season) {
		var hasCome = this.game.challenges.currentChallenge === "winterIsComing";
		var titleSeason = this.seasons[hasCome ? 3 : season];
		var title = $I("calendar.season." + titleSeason.name);
		if (hasCome) {
			if (season == 0) {      title += " I"; }
			else if (season == 1) { title += " II"; }
			else if (season == 2) { title += " III"; }
			else if (season == 3) { title += " IV"; }
		}

		return title;
	},

	render: function () {
		var self = this;
		var game = self.game;

		var i, len;
		var table = dojo.create("table", {
			id: "calendarBlock",
			class: "bottom-margin",
			innerHTML: '<tr><th colspan="2">' + $I("KGSaveEdit.opts.calendar.header") + "</th></tr>"
		});
		self.domNode = table;

		var tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.opts.calendar.year") + "</td><td></td>"
		}, table);
		var td = tr.children[1];
		game._createInput({id: "yearNode", class: "integerInput"},
			td, self, "year");

		dojo.place(document.createTextNode(" \u00A0"), td); //insert &nbsp; equivalent

		self.milleniumParagonSpan = dojo.create("a", {
			id: "milleniumParagonSpan",
			href: "#",
			class: "hidden",
			innerHTML: "(+0 paragon)"
		}, td);

		on(self.milleniumParagonSpan, "click", function () {
			var paragon = game.resPool.get("paragon");
			paragon.set("value", paragon.value + Math.floor(Math.max(self.year - self.refYear, 0) / 1000));
			self.refYear = self.year;
			game.update();
		});

		tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.opts.calendar.cycle") + "</td><td> &nbsp;" + $I("KGSaveEdit.opts.calendar.year") + " </td>"
		}, table);

		self.cycleNode = dojo.create("select", {id: "cycleNode"}, tr.children[1], "first");
		self.cycleNode.defaultVal = 0;

		for (i = 0, len = self.cycles.length; i < len; i++) {
			var cycle = self.cycles[i];
			dojo.create("option", {
				value: i,
				innerHTML: cycle.glyph + " " + cycle.title
			}, self.cycleNode);
		}

		on(self.cycleNode, "change", function () {
			self.cycle = self.cycleNode.selectedIndex;
			game.calculateAllEffects();
			game.update();
		});

		game._createInput({id: "cycleYearNode", class: "integerInput shortInt"},
			tr.children[1], self, "cycleYear");

		self.cycleEffectsNode = tr;
		self.registerTooltip(self.cycleEffectsNode);

		tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.opts.calendar.season") + "</td><td></td>"
		}, table);
		self.seasonNode = dojo.create("select", {id: "seasonNode"}, tr.children[1]);
		self.seasonNode.defaultVal = 0;

		for (i = 0, len = self.seasons.length; i < len; i++) {
			var season = self.seasons[i];
			season.optionNode = dojo.create("option", {
				value: i,
				innerHTML: self.getSeasonTitle(i)
			}, self.seasonNode);
		}

		on(self.seasonNode, "change", function () {
			self.season = self.seasonNode.selectedIndex;
			game.update();
		});

		tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.opts.calendar.weather") + "</td><td></td>"
		}, table);
		self.weatherSel = dojo.create("select", {
			id: "weatherSel",
			innerHTML: '<option value="">---</option><option value="warm">' + $I("calendar.weather.warm") + '</option><option value="cold">' + $I("calendar.weather.cold") + '</option>'
		}, tr.children[1]);
		self.weatherSel.defaultVal = "";

		on(self.weatherSel, "change", function () {
			self.weather = self.weatherSel.value || null;
			game.update();
		});

		tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.opts.calendar.day") + "</td><td></td>"
		}, table);
		var input = game._createInput({id: "dayNode"}, tr.children[1], self, "day");

		tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.opts.calendar.festivalDays") + "</td><td></td>"
		}, table);
		game._createInput({id: "festivalDaysNode", class: "integerInput abbrInput"},
			tr.children[1], self, "festivalDays");

		tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.opts.calendar.paradoxTimer") + "</td><td></td>",
			title: $I("KGSaveEdit.opts.calendar.paradoxTimer.title")
		}, table);

		input = game._createInput({id: "futureSeasonTemporalParadoxNode", class: "integerInput"},
			tr.children[1], self, "futureSeasonTemporalParadox");
		input.minValue = -1;

		tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.opts.cryptoPrice") + "</td><td></td>"
		}, table);

		input = game._createInput({id: "cryptoPriceNode"}, tr.children[1], self, "cryptoPrice");
		input.minValue = Number.MIN_VALUE;
	},

	cycleEffectsBasics: function (effects, building_name) {
		if (this.game.prestige.getPerk("numerology").owned()) {
			var list_effects_cycle = this.cycles[this.cycle].effects;

			for (var effect in effects) {
				var effect_cycle = building_name + "-" + effect;
				if (typeof list_effects_cycle[effect_cycle] !== "undefined") {
					effects[effect] *= list_effects_cycle[effect_cycle];
				}
			}
		}

		return effects;
	},

	cycleEffectsFestival: function (effects) {
		if (this.game.prestige.getPerk("numeromancy").owned() && this.game.calendar.festivalDays) {
			var list_festivalEffects_cycle = this.cycles[this.cycle].festivalEffects;

			for (var effect in effects) {
				var effect_cycle = effect;
				if (typeof list_festivalEffects_cycle[effect_cycle] !== "undefined") {
					effects[effect] *= list_festivalEffects_cycle[effect_cycle];
				}
			}
		}

		return effects;
	},

	listCycleEffects: function (tooltip, effects) {
		var game = this.game;

		for (var effect in effects) {
			var effectItemNode = dojo.create("div", null, tooltip);

			var effectMeta = game.getEffectMeta(effect);
			var effectTitle = effectMeta.title + ":";

			dojo.create("span", {
				innerHTML: effectTitle,
				class: "tooltipCycleEffectTitle"
			}, effectItemNode);

			var effectMod = effects[effect] > 1 ? "+" : "";
			effectMod += ((effects[effect] - 1) * 100).toFixed(0) + "%";

			dojo.create("span", {
				innerHTML: effectMod,
				class: "tooltipCycleEffectMod"
			}, effectItemNode);

			dojo.create("span", {
				innerHTML: "&nbsp;",
				class: "clear"
			}, effectItemNode);
		}
	},

	trueYear: function () {
		return (this.day / this.daysPerSeason + this.season) / this.seasonsPerYear + this.year - this.game.time.flux;
	},

	darkFutureYears: function (withImpedance) {
		var impedance = 0;
		if (withImpedance) {
			impedance = this.game.getEffect("timeImpedance");
		}
		return this.year - (40000 + impedance);
	},

	getTooltip: function (node) {
		var haveNumerology = this.game.prestige.getPerk("numerology").owned();
		if (node !== this.cycleEffectsNode || !haveNumerology) {
			return;
		}

		var cycle = this.cycles[this.cycle];

		var tooltip = dojo.byId("tooltipBlock");
		tooltip.className = "";

		var cycleSpan = dojo.create("div", {
			innerHTML: cycle.title + " (Year " + this.cycleYear + ")",
			class: "center clear"
		}, tooltip);

		// Cycle Effects
		if (haveNumerology) {
			dojo.addClass(cycleSpan, "tooltipCycleTitle");

			cycleSpan = dojo.create("div", {
				innerHTML: "Cycle Effects:",
				class: "center tooltipCycleSpacer"
			}, tooltip);

			this.listCycleEffects(tooltip, cycle.effects);
		}

		if (this.game.prestige.getPerk("numeromancy").owned() && this.festivalDays > 0) {
			// Cycle Festival Effects
			cycleSpan = dojo.create("div", {
				innerHTML: "Cycle Festival Effects:",
				class: "center"
			}, tooltip);

			this.listCycleEffects(tooltip, cycle.festivalEffects);
		}
	},

	update: function () {
		var paragon = Math.floor(Math.max(this.year - this.refYear, 0) / 1000);
		this.milleniumParagonSpan.innerHTML = "(" + $I("KGSaveEdit.opts.calendar.milleniumParagon", [paragon]) + ")";
		dojo.toggleClass(this.milleniumParagonSpan, "hidden", !paragon);

		this.dayNode.minValue = -10 - this.game.getEffect("temporalParadoxDay");
		this.set("day", this.day); //refresh value

		for (var i = this.seasons.length - 1; i >= 0; i--) {
			this.seasons[i].optionNode.innerHTML = this.getSeasonTitle(i);
		}
	},

	save: function (saveData) {
		saveData.calendar = this.game.filterMetaObj(this, ["year", "day", "season", "weather",
			"festivalDays", "cycle", "cycleYear", "futureSeasonTemporalParadox", "cryptoPrice"]);
	},

	load: function (saveData) {
		if (!saveData.calendar) {
			return;
		}
		var data = saveData.calendar;

		this.game.loadMetaFields(this, data, ["year", "day", "weather", "festivalDays"]);
		this.game.setSelectByValue(this.seasonNode, data.season);
		this.season = this.seasonNode.selectedIndex;
		this.game.setSelectByValue(this.cycleNode, data.cycle);
		this.cycle = this.cycleNode.selectedIndex;
		this.set("cycleYear", data.cycleYear || 0);
		this.set("futureSeasonTemporalParadox", data.futureSeasonTemporalParadox || -1);
		this.set("cryptoPrice", data.cryptoPrice || 1000);

		this.refYear = this.year;
	}
});

dojo.declare("classes.KGSaveEdit.Console", classes.KGSaveEdit.core, {
	game: null,
	domNode: null,

	filtersData: {
		"astronomicalEvent":  {title: "Astronomical Events", enabled: true, unlocked: false},
		"hunt":               {title: "Hunts",               enabled: true, unlocked: false},
		"trade":              {title: "Trade",               enabled: true, unlocked: false},
		"craft":              {title: "Craft",               enabled: true, unlocked: false},
		"workshopAutomation": {title: "Workshop Automation", enabled: true, unlocked: false},
		"meteor":             {title: "Meteors",             enabled: true, unlocked: false},
		"ivoryMeteor":        {title: "Ivory Meteors",       enabled: true, unlocked: false},
		"unicornRift":        {title: "Unicorn Rifts",       enabled: true, unlocked: false},
		"alicornRift":        {title: "Alicorn Rifts",       enabled: true, unlocked: false},
		"tc":                 {title: "Time Crystals",       enabled: true, unlocked: false},
		"faith":              {title: "Faith",               enabled: true, unlocked: false}
	},

	filters: null,

	constructor: function (game) {
		this.game = game;

		this.filters = {};
		for (var tag in this.filtersData) {
			this.filters[tag] = new classes.KGSaveEdit.GenericItem(game, this.filtersData[tag]);
		}
	},

	render: function () {
		var game = this.game;

		this.domNode = dojo.create("table", {
			id: "logFiltersBlock",
			class: "bottom-margin",
			innerHTML: '<tr><th colspan="2">Log filters</th></tr>'
		});
		for (var tag in this.filters) {
			var filter = this.filters[tag];

			var tr = dojo.create("tr", {
				class: "logFilter",
				innerHTML: "<td>" + filter.title + "</td><td></td>"
			}, this.domNode);
			game._createCheckbox($I("KGSaveEdit.label.unlocked"), tr.children[1], filter, "unlocked");
			game._createCheckbox($I("KGSaveEdit.opts.msgfilter.enabled"), tr.children[1], filter, "enabled");
		}
	},

	save: function (saveData) {
		var saveFilters = {};
		for (var tag in this.filters) {
			saveFilters[tag] = this.game.filterMetaObj(this.filters[tag], ["title", "enabled", "unlocked"]);
		}

		saveData.console = {
			filters: saveFilters
		};
	},

	load: function (saveData) {
		var saveFilters = saveData && saveData.console && saveData.console.filters ? saveData.console.filters : {};
		for (var tag in saveFilters) {
			var filter = this.filters[tag];
			if (filter) {
				var saveFilter = saveFilters[tag];
				filter.set("unlocked", Boolean(saveFilter.unlocked));
				filter.set("enabled", Boolean(saveFilter.enabled));
			} else {
				this.game.extrasTab.storeExtraData("console.filters", saveFilters[tag], tag, true);
			}
		}
	}
});


dojo.declare("classes.KGSaveEdit.DiplomacyManager", [classes.KGSaveEdit.UI.Tab, classes.KGSaveEdit.Manager], {
	raceData: [
		{name: "lizards"},
		{name: "sharks"},
		{name: "griffins"},
		{name: "nagas",      hidden: true},
		{name: "zebras",     hidden: true},
		{name: "spiders",    hidden: true},
		{name: "dragons",    hidden: true},
		{name: "leviathans", hidden: true, energy: 0, duration: 0}
	],

	tabName: "Trade",
	races: null,
	racesByName: null,

	constructor: function () {
		this.i18nKeys = {tabName: "tab.name.trade"};
		this.registerMetaItems(this.raceData, classes.KGSaveEdit.GenericItem, "races", function (race) {
			race.unlocked = Boolean(race.unlocked);
			race.collapsed = Boolean(race.collapsed);
			race.duration = 0;
			race.energy = 0;
		});
	},

	renderTabBlock: function () {
		this.diplomacyBlock = dojo.create("table", {id: "diplomacyBlock"}, this.tabBlockNode);

		for (var i = 0, len = this.races.length; i < len; i++) {
			var race = this.races[i];

			race.domNode = dojo.create("tr", {
				class: "tradeRace",
				innerHTML: "<td>" + $I("trade.race." + race.name) + "</td><td></td><td></td>"
			}, this.diplomacyBlock);
			race.nameNode = race.domNode.children[0];

			this.game._createCheckbox($I("KGSaveEdit.label.unlocked"), race.domNode.children[1], race, "unlocked");
			this.game._createCheckbox($I("KGSaveEdit.trade.collapsed"), race.domNode.children[1], race, "collapsed");
		}

		race = this.get("leviathans");
		var node = race.domNode.children[2];
		node.textContent = $I("KGSaveEdit.trade.elders.daysRemaining") + " ";
		this.game._createInput({class: "integerInput"}, node, race, "duration");
		dojo.place(document.createTextNode(" " + $I("KGSaveEdit.trade.elders.energy") + " "), node);
		this.game._createInput({class: "integerInput"}, node, race, "energy");
		dojo.place(document.createTextNode(" / "), node);
		race.energyMaxSpan = dojo.create("span", {innerHTML: "5"}, node);
	},

	get: function (name) {
		return this.racesByName[name];
	},

	getTabName: function () {
		var name = this.tabName;
		if (this.get("leviathans").unlocked) {
			name += $I("common.warning");
		}
		return name;
	},

	hasUnlockedRaces: function () {
		for (var i = this.races.length - 1; i >= 0; i--) {
			if (this.races[i].unlocked) {
				return true;
			}
		}
		return false;
	},

	getVisible: function () {
		return this.hasUnlockedRaces();
	},

	update: function () {
		for (var i = this.races.length - 1; i >= 0; i--) {
			var race = this.races[i];
			dojo.toggleClass(race.nameNode, "spoiler", !race.unlocked);
		}

		race = this.get("leviathans");
		var markerCap = this.game.religion.getZU("marker").val * 5 + 5;
		race.energyMaxSpan.textContent = markerCap;

		if (race.energy > markerCap) {
			race.set("energy", markerCap);
		}
	},

	save: function (saveData) {
		saveData.diplomacy = {
			races: this.game.filterMetadata(this.races, ["name", "unlocked", "energy", "duration", "collapsed"], function (saveRace) {
				saveRace.energy = saveRace.energy || 0;
				saveRace.duration = saveRace.duration || 0;
			})
		};
	},

	load: function (saveData) {
		if (saveData.diplomacy) {
			this.loadMetadata(saveData, "diplomacy.races", "get", function (race, saveRace) {
				race.set("unlocked", Boolean(saveRace.unlocked));
				race.set("collapsed", Boolean(saveRace.collapsed));
				race.set("duration", saveRace.duration || 0);
				race.set("energy", saveRace.energy || 0);
			}, true);
		}
	}
});


dojo.declare("classes.KGSaveEdit.ChallengesManager", classes.KGSaveEdit.Manager, {
	game: null,

	currentChallenge: null,

	challengesData: [
		{
			name: "ironWill",
			unlocked: true,
			invisible: true
		}, {
			name: "winterIsComing",
			condition: function () {
				return this.game.space.getPlanet("helios").reached;
			},
			unlocked: true
		}, {
			name: "anarchy",
			condition: function () {
				return this.game.bld.get("aiCore").owned();
			},
			unlocked: true
		}, {
			name: "energy",
			requires: function (game) {
				return game.resPool.energyCons !== 0 || game.resPool.energyProd !== 0;
			},
			condition: function () {
				return (
					(this.game.bld.get("pasture").owned() && this.game.bld.get("pasture").stage === 1) &&
					(this.game.bld.get("aqueduct").owned() && this.game.bld.get("aqueduct").stage === 1) &&
					this.game.bld.get("steamworks").owned() &&
					this.game.bld.get("magneto").owned() &&
					this.game.bld.get("reactor").owned() &&
					(this.game.space.getBuilding("sattelite").owned() && this.game.workshop.get("solarSatellites").owned()) &&
					this.game.space.getBuilding("sunlifter").owned() &&
					this.game.space.getBuilding("tectonic").owned() &&
					this.game.space.getBuilding("hrHarvester").owned()
				);
			}
		}, {
			name: "atheism",
			requires: {tech: ["voidSpace"]}
		}, {
			name: "1000Years",
			condition: function () {
				return this.game.calendar.year >= 1000;
			}
		}
	],

	constructor: function (game) {
		this.game = game;
		this.challenges = [];

		this.registerMetaItems(this.challengesData, classes.KGSaveEdit.ChallengeMeta, "challenges");
	},

	getChallenge: function (name) {
		return this.getMeta(name, this.challenges);
	},

	setCurrentChallenge: function (name, soft) {
		var setChallenge = this.getChallenge(name);
		if (setChallenge && setChallenge.researched) {
			setChallenge = null;
		}

		for (var i = this.challenges.length - 1; i >= 0; i--) {
			var challenge = this.challenges[i];
			challenge.activeChallengeNode.checked = challenge === setChallenge;
			if (!soft) {
				challenge.activeChallengeNode.prevChecked = challenge === setChallenge;
			}
		}
		this.currentChallenge = setChallenge ? setChallenge.name : null;
	},

	render: function () {
		this.domNode = dojo.create("table", {
			id: "challengesBlock",
			innerHTML: '<tr><th colspan="2">' + $I("challendge.panel.label") + "</th></tr>"
		}, this.game.science.tabBlockNode);
		this.domNodeHeader = this.domNode.children[0];

		for (var i = 0, len = this.challenges.length; i < len; i++) {
			var challenge = this.challenges[i];
			challenge.render();
			dojo.place(challenge.domNode, this.domNode);
		}
	},

	update: function () {
		var currentChallenge = this.getChallenge(this.currentChallenge);
		if (currentChallenge && currentChallenge.researched) {
			this.setCurrentChallenge(null, true);
		}

		this.game.callMethods(this.challenges, "update");
		dojo.toggleClass(this.domNodeHeader, "spoiler", !this.game.prestige.getPerk("adjustmentBureau").owned());

		this.updateTabMarker();
	},

	updateTabMarker: function () {
		var hasNew = false;
		for (var i = this.challenges.length - 1; i >= 0; i--) {
			if (this.challenges[i].isNew) {
				hasNew = true;
				break;
			}
		}
		this.game._toggleNewMarker(this.game.science.tabWrapper, hasNew);
	},

	save: function (saveData) {
		saveData.challenges = {
			challenges: this.game.filterMetadata(this.challenges, ["name", "researched", "unlocked"]),
			currentChallenge: this.currentChallenge
		};
	},

	load: function (saveData) {
		if (saveData.challenges) {
			this.loadMetadata(saveData, "challenges.challenges", "getChallenge", function (challenge, saveChallenge) {
				challenge.set("researched", Boolean(saveChallenge.researched));
				challenge.set("unlocked", Boolean(saveChallenge.unlocked));
				challenge.isNew = false;
			}, true);
			this.setCurrentChallenge(saveData.challenges.currentChallenge);
		}
	}
});


dojo.declare("classes.KGSaveEdit.ChallengeMeta", classes.KGSaveEdit.MetaItem, {
	unlocked: false,
	researched: false,

	isNew: false,

	constructor: function () {
		this.defaultUnlocked = this.unlocked;
		this.i18nKeys = {
			label: "challendge." + this.name + ".label",
			description: "challendge." + this.name + ".desc",
			effectDesc: "challendge." + this.name + ".effect.desc"
		};
	},

	getName: function () {
		var name = this.label || this.name;
		if (this.name === this.game.challenges.currentChallenge) {
			name += " (Current)";
		} else if (this.researched) {
			name += " (Complete)";
		}
		return name;
	},

	getDescription: function () {
		var start = this.description || "";
		if (this.researched) {
			start += "<br><br>Gain: " + this.effectDesc;
		} else {
			// var msgChronosphere = this.game.bld.get("chronosphere").val > 0 ? "<br />You won't gain reset bonus from chronospheres." : "";
			// start += "<br><br>Your game will be reset in order to enable this challenge." + msgChronosphere;
		}
		return start;
	},

	getTooltip: function () {
		var tooltip = dojo.byId("tooltipBlock");
		tooltip.className = "challenge_tooltip";

		tooltip.innerHTML = this.getDescription();
	},

	render: function () {
		var self = this;
		self.seti18n();

		var tr = dojo.create("tr", {
			class: "challengeNode",
			innerHTML: '<td class="nameNode">' + (self.label || self.name) + "</td><td></td>"
		});
		self.domNode = tr;

		if (self.invisible) {
			dojo.addClass(tr, "hidden");
		}

		self.nameNode = tr.children[0];

		on(self.nameNode, mouse.enter, function () {
			if (self.isNew) {
				self.isNew = false;
				dojo.removeClass(self.nameNode, "newMarker");
				self.metaObj.updateTabMarker();
			}
		});

		self.game._createCheckbox($I("KGSaveEdit.label.unlocked"), tr.children[1], self, "unlocked");
		self.game._createCheckbox($I("KGSaveEdit.challenge.complete"), tr.children[1], self, "researched");

		var input = self.game._createCheckbox($I("KGSaveEdit.challenge.active"), tr.children[1], self);
		self.activeChallengeNode = input.cbox;
		input.cbox.handler = function () {
			self.game.challenges.setCurrentChallenge(this.checked ? self.name : null);
			self.game.calculateAllEffects();
		};

		self.registerTooltip(self.domNode);
	},

	update: function () {
		var req = this.game.checkRequirements(this, this.defaultUnlocked);
		this.unlocked = req || this.unlockedNode.prevChecked;
		this.unlockedNode.checked = this.unlocked;
		this.game.toggleDisabled(this.unlockedNode, req);
		dojo.toggleClass(this.nameNode, "spoiler", !this.unlocked);

		var challenges = this.game.challenges;

		if (dojo.isFunction(this.condition)) {
			var won = this.condition();

			if (won && this.activeChallengeNode.checked && !this.researched) {
				this.researched = true;
				this.researchedNode.checked = true;

				challenges.setCurrentChallenge(null, true);
				this.isNew = true;

			} else if (!won && this.researched && !this.researchedNode.prevChecked && this.activeChallengeNode.prevChecked) { //fluh
				this.researched = false;
				this.researchedNode.checked = false;

				challenges.setCurrentChallenge(this.name);
				this.isNew = false;
			}
		}

		this.game.toggleDisabled(this.activeChallengeNode, this.researched);
		this.game._toggleNewMarker(this.nameNode, this.isNew);
	}
});


dojo.declare("classes.KGSaveEdit.ui.Toolbar", null, {
	icons: null,
	game: null,

	constructor: function (game) {
		this.game = game;
		this.icons = [];

		this.addIcon(new classes.KGSaveEdit.ui.toolbar.ToolbarHappiness(game));
		this.addIcon(new classes.KGSaveEdit.ui.toolbar.ToolbarEnergy(game));
	},

	addIcon: function (icon) {
		this.icons.push(icon);
	},

	render: function (container) {
		dojo.empty(container);
		this.game.callMethods(this.icons, "render", container);
	},

	update: function () {
		this.game.callMethods(this.icons, "update");
	}
});


dojo.declare("classes.KGSaveEdit.ui.ToolbarIcon", classes.KGSaveEdit.TooltipItem, {
	game: null,
	container: null,

	constructor: function (game) {
		this.game = game;
	},

	render: function (container) {
		this.container = dojo.create("span", {
			className: "toolbarIcon"
		}, container);

		this.registerTooltip(this.container);
		return this.container;
	},

	update: function () { },

	getTooltipOffset: function (node) {
		var pos = dojo.position(node);
		return {
			left: pos.x,
			top: 5
		};
	}
});


dojo.declare("classes.KGSaveEdit.ui.toolbar.ToolbarHappiness", classes.KGSaveEdit.ui.ToolbarIcon, {
	update: function () {
		dojo.toggleClass(this.container, "hidden", this.game.village.getKittens() <= 5);
		this.container.innerHTML = "(:3)&nbsp;" + Math.floor(this.game.village.happiness * 100) + "%";
		dojo.addClass(this.container, "coral");
	},

	getTooltip: function () {
		var tooltip = dojo.byId("tooltipBlock");
		tooltip.className = "";

		var base = this.game.getEffect("happiness");
		//var population = this.game.village.getKittens() *  2;
		var html = $I("village.happiness.base") + ": 100%<br>" +
			$I("village.happiness.buildings") + ": +" + (Math.floor(base)) + "%<br>";

		//----------------------
		var resHappiness = 0;
		var resources = this.game.resPool.resources;
		for (var i = resources.length - 1; i >= 0; i--) {
			var res = resources[i];
			if (res.type !== "common" && res.owned()) {
				if (res.name !== "elderBox" || !this.game.resPool.get("wrappingPaper").owned()) {
					resHappiness += 10;
				}
			}
		}
		html += $I("village.happiness.rare.resources") + ": +" + this.game.getDisplayValueExt(resHappiness, false, false, 0) + "%<br>";
		//---------------------
		var karma = this.game.resPool.get("karma");
		if (karma.value > 0) {
			html += $I("village.happiness.karma") + ": +" + this.game.getDisplayValueExt(karma.value, false, false, 0) + "%<br>";
		}

		if (this.game.calendar.festivalDays > 0) {
			html += $I("village.happiness.festival") + ": +30%<br>";
		}

		var unhappiness = (this.game.village.getKittens() - 5) * 2;

		var unhappinessReduction = unhappiness * this.game.getEffect("unhappinessRatio", true);
		html += $I("village.happiness.penalty") + ": -" + this.game.getDisplayValueExt(unhappiness + unhappinessReduction, false, false, 0) + "%<br>";

		html += "* " + $I("village.happiness.penalty.base") + ": -" + this.game.getDisplayValueExt(unhappiness, false, false, 0) + "%<br>";
		html += "* " + $I("village.happiness.penalty.mitigated") + ": " + this.game.getDisplayValueExt(-unhappinessReduction, false, false, 0) + "%<br>";

		var overpopulation = this.game.village.getKittens() - this.game.village.maxKittens;
		if (overpopulation > 0) {
			html += $I("village.happiness.overpopulation") + ": -" + overpopulation * 2 + "%<br>";
		}

		tooltip.innerHTML = html;
	}
});


dojo.declare("classes.KGSaveEdit.ui.toolbar.ToolbarEnergy", classes.KGSaveEdit.ui.ToolbarIcon, {
	update: function () {
		dojo.toggleClass(this.container, "hidden", !this.game.science.get("electricity").owned());

		var resPool = this.game.resPool;
		var energy = resPool.energyProd - resPool.energyCons;
		this.container.innerHTML = "&#9889;&nbsp;" + this.game.getDisplayValueExt(energy) + "Wt";

		dojo.toggleClass(this.container, "green", energy >= 0);
		dojo.toggleClass(this.container, "red", energy < 0);
	},

	getTooltip: function () {
		var tooltip = dojo.byId("tooltipBlock");
		tooltip.className = "";

		var resPool = this.game.resPool;
		var energy = resPool.energyProd - resPool.energyCons;

		var penalty = "";
		if (energy < 0) {
			var delta = this.game.resPool.getEnergyDelta();
			penalty = "<br><br>Production modifier: <span style='color:red;'>-" + Math.floor((1 - delta) * 100) + "%</span>";
		}

		tooltip.innerHTML = "Production: <span style='color:green;'>" +
			this.game.getDisplayValueExt(resPool.energyProd, true, false) +
			"Wt</span>" + "<br>Consumption: <span style='color:#D00000;'>-" +
			this.game.getDisplayValueExt(resPool.energyCons) +
			"Wt</span>" + penalty;
	}
});


dojo.declare("classes.KGSaveEdit.Telemetry", null, {
	game: null,
	guid: null,
	warnOnNewGuid: false,

	domNode: null,

	constructor: function (game) {
		this.game = game;
		this.guid = this.generateGuid();
	},

	render: function () {
		var self = this;

		self.domNode = dojo.create("div", {
			"id": "telemetryNode",
			class: "bottom-margin",
			innerHTML: $I("KGSaveEdit.opts.saveID") + ': <span class="monospace">' + self.guid + '</span> &nbsp;'
		});

		self.guidNode = self.domNode.children[0];

		this.game._createButton(
			{value: $I("KGSaveEdit.opts.saveID.new")}, self.domNode, function () {
				if (!self.warnOnNewGuid || confirm($I("KGSaveEdit.opts.saveID.new.confirm"))) {
					self.setGuid();
				}
			}
		);
	},

	setGuid: function (guid) {
		this.warnOnNewGuid = Boolean(guid);
		this.guid = guid || this.generateGuid();
		if (this.domNode) {
			this.guidNode.innerHTML = this.guid;
		}
	},

	generateGuid: function () {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c === "x" ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	},

	save: function (data) {
		data["telemetry"] = {
			guid: this.guid
		};
	},

	load: function (data) {
		var guid;
		if (data["telemetry"]) {
			guid = data["telemetry"].guid;
		}
		this.setGuid(guid);
	}
});


dojo.declare("classes.KGSaveEdit.Server", classes.KGSaveEdit.core, {
	game: null,

	motdContentPrevious: null,

	constructor: function (game) {
		this.game = game;
	},

	save: function (saveData) {
		saveData.server = {
			motdContent: this.motdContentPrevious
		};
	}
});


dojo.declare("classes.KGSaveEdit.VoidManager", classes.KGSaveEdit.Manager, {
	game: null,

	voidUpgradesData: [
		{
		name: "spaceCathedral",
		label: "Space Cathedral",
		description: "TBD.",
		prices: [
			{name: "relic", val: 1}
		],
		researched: false
		}
	],

	voidUpgrades: null,
	voidUpgradesByName: null,

	faction: null,

	constructor: function (game) {
		this.game = game;

		this.registerMetaItems(this.voidUpgradesData, classes.KGSaveEdit.GenericItem, "voidUpgrades");
	},

	getVU: function (name) {
		return this.voidUpgradesByName[name];
	},

	save: function (saveData) {
		saveData.void = {
			vu: this.game.filterMetadata(this.voidUpgrades, ["name", "val", "on", "unlocked"]),
			faction: this.faction
		};
	},

	load: function (saveData) {
		if (!saveData.void) {
			return;
		}

		this.faction = saveData.void.faction || null;
	}
});


});
