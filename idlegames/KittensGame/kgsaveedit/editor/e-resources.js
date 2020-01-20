/* global dojo, require, classes, $I, num */

require(["dojo/on"], function (on) {
"use strict";

dojo.declare("classes.KGSaveEdit.Resources", classes.KGSaveEdit.Manager, {
	game: null,

	resources: null,
	resourcesByName: null,

	energyProd: 0,
	energyCons: 0,

	isLocked: false,

	resourceData: [
		{
			name: "catnip",
			calculatePerTick: true
		}, {
			name: "wood",
			craftable: true,
			tableID: "resourceBlock",
			calculatePerTick: true
		}, {
			name: "minerals",
			calculatePerTick: true
		}, {
			name: "coal",
			calculatePerTick: true
		}, {
			name: "iron",
			tags: {
				baseMetal: true
			},
			calculatePerTick: true
		}, {
			name: "titanium",
			tags: {
				baseMetal: true
			},
			calculatePerTick: true
		}, {
			name: "gold",
			tags: {
				baseMetal: true
			},
			calculatePerTick: true
		}, {
			name: "oil",
			calculatePerTick: true
		}, {
			name: "uranium",
			color: "#4EA24E",
			tags: {
				baseMetal: true
			},
			calculatePerTick: true
		}, {
			name: "unobtainium",
			color: "#A00000",
			tags: {
				baseMetal: true
			},
			calculatePerTick: true
		}, {
			name: "antimatter",
			transient: true,
			color: "#5A0EDE"
		}, {
			name: "manpower",
			transient: true,
			color: "#DBA901",
			calculatePerTick: true
		}, {
			name: "science",
			transient: true,
			color: "#01A9DB",
			calculatePerTick: true
		}, {
			name: "culture",
			transient: true,
			color: "#DF01D7",
			calculatePerTick: true
		}, {
			name: "faith",
			transient: true,
			color: "gray",
			calculatePerTick: true
		}, {
			name: "kittens",
			transient: true,
			inputClass: "integerInput",
			showMax: true,
			inputHandler: function () {
				this.game.village.synchKittens();
			},
			getMaxValue: function () {
				return this.game.getEffect("maxKittens");
			}
		}, {
			name: "zebras",
			transient: true,
			relockIfZero: true,
			inputClass: "integerInput",
			getMaxValue: function () {
				var zMax = 0;
				if (this.game.ironWill) {
					zMax = num(Math.max(this.game.karmaZebrasNode.parsedValue, this.game.science.get("archery").owned()));
				} else {
					if (this.game.prestige.getPerk("zebraDiplomacy").owned()) {
						zMax = Math.floor(0.10 * (this.game.karmaZebrasNode.parsedValue + 1));
					}
					if (this.game.prestige.getPerk("zebraCovenant").owned()) {
						zMax = Math.floor(0.50 * (this.game.karmaZebrasNode.parsedValue + 1));
					}
				}
				return zMax;
			}
		}, {
			name: "starchart",
			transient: true,
			color: "#9A2EFE",
			calculatePerTick: true
		}, {
			name: "temporalFlux",
			getMaxValue: function () { //bit of a hack to prevent paragon bonus
				return Math.round(this.game.getEffect(this.name + "Max"));
			},
			inputHandler: function () {
				this.game.setInput(this.game.time.temporalFluxNode, this.parsedValue, true);
			},
			// hardMaxLimit: true,
			invisible: true
		}, {
			name: "gflops",
			title: "gigaflops",
			transient: true
		}, {
			name: "hashrates",
			title: "hashrates",
			transient: true
		}, {
			name: "furs",
			type: "uncommon",
			transient: true,
			calculatePerTick: true
		}, {
			name: "ivory",
			type: "uncommon",
			transient: true,
			calculatePerTick: true
		}, {
			name: "spice",
			type: "uncommon",
			transient: true,
			calculatePerTick: true
		}, {
			name: "unicorns",
			type: "rare",
			transient: true,
			calculatePerTick: true
		}, {
			name: "alicorn",
			type: "rare",
			calculatePerTick: true,
			inputHandler: function () {
				this.game.upgradeItems({zigguratUpgrades: ["skyPalace", "unicornUtopia", "sunspire"]});
			}
		}, {
			name: "necrocorn",
			type: "rare",
			color: "#E00000"
		}, {
			name: "tears",
			type: "rare"
		}, {
			name: "karma",
			type: "rare",
			inputParseFn: function (value) {
				return this.game.getTriValue(Math.round(this.game.getTriValueOrigin(value, 5)), 5);
			},
			inputHandler: function () {
				this.game.setInput(this.game.karmaKittensNode, Math.round(this.game.getTriValueOrigin(this.parsedValue, 5)), true);
				this.game.setInput(this.game.karmaKittensKarma, this.parsedValue, true);
			}
		}, {
			name: "paragon",
			color: "#6141CD",
			relockIfZero: true,
			inputClass: "integerInput abbrInput"
		}, {
			name: "burnedParagon",
			color: "#493099",
			inputClass: "integerInput abbrInput"
		}, {
			name: "timeCrystal",
			color: "#14CD61"
		}, {
			name: "sorrow",
			visible: false,
			color: "black",
			getMaxValue: function () {
				return 12 + this.game.getEffect("blsLimit");
			},
			hardMaxLimit: true
		}, {
			name: "relic",
			type: "exotic",
			color: "#5A0EDE",
			style: {
				"textShadow": "1px 0px 10px #9A2EFE",
				"animation": "neon1 1.5s ease-in-out infinite alternate"
			}
		}, {
			name: "void",
			type: "exotic",
			color: "#5A0EDE",
			style: {
				"textShadow": "1px 0px 10px #9A2EFE",
				"animation": "neon1 1.5s ease-in-out infinite alternate"
			},
			inputClass: "integerInput abbrInput"
		}, {
			name: "elderBox",
			description: true,
			type: "exotic",
			color: "#FA0EDE",
			style: {
				"textShadow": "1px 0px 10px #FA2E9E",
				"animation": "neon1 1.5s ease-in-out infinite alternate"
			},
			relockIfZero: true
		}, {
			name: "wrappingPaper",
			type: "exotic",
			color: "#FA0EDE",
			style: {
				"textShadow": "1px 0px 10px #FA2E9E",
				"animation": "neon1 1.5s ease-in-out infinite alternate"
			}
		}, {
			name: "blackcoin",
			type: "exotic",
			color: "gold"
		}, {
			name: "bloodstone",
			type: "exotic",
			craftable: true,
			color: "red",
			style: {
				textShadow: "1px 0px 10px red",
				animation: "neon1 1.5s ease-in-out infinite alternate"
			}
		}, {
			name: "beam",
			craftable: true
		}, {
			name: "slab",
			craftable: true
		}, {
			name: "plate",
			craftable: true
		}, {
			name: "steel",
			craftable: true,
			color: "gray",
			calculatePerTick: true
		}, {
			name: "concrate",
			craftable: true
		}, {
			name: "gear",
			craftable: true,
			color: "gray"
		}, {
			name: "alloy",
			craftable: true,
			color: "gray"
		}, {
			name: "eludium",
			craftable: true,
			color: "darkViolet"
		}, {
			name: "scaffold",
			craftable: true,
			color: "#FF7F50"
		}, {
			name: "ship",
			craftable: true,
			color: "#FF571A",
			upgrades: {buildings: ["harbor"]}
		}, {
			name: "tanker",
			craftable: true,
			color: "#CF4F20",
			upgrades: {buildings: ["harbor"]}
		}, {
			name: "kerosene",
			craftable: true,
			color: "darkYellow"
		}, {
			name: "parchment",
			craftable: true,
			color: "#DF01D7"
		}, {
			name: "manuscript",
			craftable: true,
			color: "#01A9DB",
			calculatePerTick: true
		}, {
			name: "compedium",
			craftable: true,
			color: "#01A9DB"
		}, {
			name: "blueprint",
			transient: true,
			craftable: true,
			color: "#01A9DB"
		}, {
			name: "thorium", //divinite
			craftable: true,
			color: "#4EA24E",
			calculatePerTick: true
		}, {
			name: "megalith",
			craftable: true,
			color: "gray"
		}
	],

	constructor: function () {
		this.registerMetaItems(this.resourceData, classes.KGSaveEdit.ResourceMeta, "resources",
		function (res) {
			var keys = {};
			if (!res.title) {
				keys.title = "resources." + res.name + ".title";
			}
			if (res.description) {
				keys.description = "resources." + res.name + ".desc";
			}
			res.i18nKeys = keys;
		});
	},

	render: function () {
		dojo.empty("resourceHeader");
		dojo.empty("resourceBlock");
		dojo.empty("craftableBlock");

		var input = this.game._createCheckbox("Resources locked", "resourceHeader", this, "isLocked");
		input.label.title = "Show hidden resources on mouseover (ingame only)";

		var div = dojo.create("div", {
			id: "ResourceToggleShowNode",
			innerHTML: "Show "
		}, "resourceHeader");

		on(div, "click", function () {
			dojo.toggleClass("resourceColumn", "showResourceProps", dojo.byId("resourceToggleShowProps").checked);
		});

		var label = dojo.create("label", {
			innerHTML: " <span>Per tick</span>"
		}, div);
		input = dojo.create("input", {
			id: "resourceToggleShowPertick",
			name: "resourceToggleShow",
			type: "radio"
		}, label, "first");
		input.checked = true;

		label = dojo.create("label", {
			innerHTML: " <span>Properties</span>"
		}, div);
		dojo.create("input", {
			id: "resourceToggleShowProps",
			name: "resourceToggleShow",
			type: "radio"
		}, label, "first");

		for (var i = 0, len = this.resources.length; i < len; i++) {
			var res = this.resources[i];
			var block = res.craftable ? "craftableBlock" : "resourceBlock";
			res.render();
			dojo.place(res.domNode, res.tableID || block);
		}

		var sorrow = this.get("sorrow"); //ugh hacks
		dojo.addClass(sorrow.unlockedNode.parentNode, "hidden");
		dojo.addClass(sorrow.isHiddenNode.parentNode, "hidden");
	},

	get: function (name) {
		return this.resourcesByName[name];
	},

	update: function () {
		this.game.callMethods(this.resources, "update");

		// this.energyProd = this.game.getEffect("energyProduction") * (1 + game.getEffect("energyProductionRatio"));
		// this.energyCons = this.game.getEffect("energyConsumption");
	},

	updateMax: function () {
		var game = this.game;
		for (var i = this.resources.length - 1; i >= 0; i--) {
			var res = this.resources[i];

			res.valueVirtual = res.value;

			if (dojo.isFunction(res.getMaxValue)) {
				res.maxValue = res.getMaxValue();
				continue;
			}

			// fixed bonus
			var maxValue = game.getEffect(res.name + "Max");

			maxValue = this.addResMaxRatios(res, maxValue);

			if (maxValue < 0) {
				maxValue = 0;
			}

			res.maxValue = maxValue;
		}
	},

	addBarnWarehouseRatio: function (effects) {
		var newEffects = {};
		var barnRatio = this.game.getEffect("barnRatio");
		var warehouseRatio = 1 + this.game.getEffect("warehouseRatio");

		for (var name in effects) {
			var effect = effects[name];

			if (name === "catnipMax" && this.game.workshop.get("silos").owned()) {
				effect *= 1 + barnRatio * 0.25;
			}

			if (name === "woodMax" || name === "mineralsMax" || name === "ironMax") { //that starts to look awful
				effect *= 1 + barnRatio;
				effect *= warehouseRatio;
			}

			if (name === "coalMax" || name === "goldMax" || name === "titaniumMax") {
				effect *= warehouseRatio;
			}
			newEffects[name] = effect;
		}
		return newEffects;
	},

	addResMaxRatios: function (res, maxValue) {
		if (res && res.getMaxValue) {
			return maxValue;
		}

		maxValue *= 1 + this.game.prestige.getParagonStorageRatio();

		//+COSMIC RADIATION
		if (!this.game.opts.disableCMBR) {
			maxValue *= 1 + (this.game.getCMBRBonus());
		}

		if (res) {
			//Stuff for Refrigiration and (potentially) similar effects
			maxValue *= 1 + this.game.getEffect(res.name + "MaxRatio");

			if (!this.isNormalCraftableResource(res) && !res.transient) {
				maxValue *= 1 + this.game.getEffect("globalResourceRatio");
			}
		}

		if (res.tags && res.tags.baseMetal) {
			maxValue *= (1 + this.game.getEffect("baseMetalMaxRatio"));
		}

		return maxValue;
	},

	hasRes: function (prices, amt) {
		if (!amt) {
			amt = 1;
		}

		if (prices.length) {
			for (var i = 0; i < prices.length; i++) {
				var price = prices[i];

				var res = this.get(price.name);
				if (res.getValue() < (price.val * amt)) {
					return false;
				}
			}
		}
		return true;
	},

	isStorageLimited: function (prices) {
		if (prices && prices.length) {
			for (var i = 0, len = prices.length; i < len; i++) {
				var price = prices[i];

				var res = this.get(price.name);
				if (res.maxValue > 0 && price.val > res.maxValue && price.val > res.value) {
					return true;
				}
				if (res.craftable && price.val > res.value) { //account for chronosphere resets etc
					var craft = this.game.workshop.getCraft(res.name);
					if (craft.unlocked && craft.isLimited) {
						return true;
					}
				}
			}
		}
		return false;
	},

	getEnergyDelta: function () {
		if (this.energyCons === 0) {
			return 0;
		} else {
			var delta = this.energyProd / this.energyCons;
			if (delta < 0.25) {
				delta = 0.25;
			}
			if (this.game.challenges.getChallenge("energy").researched === true) {
				delta = 1 - (1 - delta) / 2;
			}
			return delta;
		}
	},

	isNormalCraftableResource: function (res) {
		return res.craftable && res.name !== "wood";
	},

	/**
	 * Note: this function is just a placeholder to try to calculate resource conversions correctly
	 * It affects .valueVirtual as it would affect .value ingame
	 */
	addRes: function (res, addedValue, ev) {
		if (this.game.calendar.day < 0 && !ev || !addedValue) {
			return 0;
		}

		var prevValue = res.value || 0;

		if (res.maxValue) {
			//if already overcap, allow to remain that way unless removing resources.
			if (res.valueVirtual > res.maxValue) {
				if (addedValue < 0) {
					res.valueVirtual += addedValue;
				}
			} else {
				res.valueVirtual += addedValue;
				if (res.valueVirtual > res.maxValue) {
					res.valueVirtual = res.maxValue;
				}
			}
		} else {
			res.valueVirtual += addedValue;
		}

		if (res.name === "void") { // Always an integer
			res.valueVirtual = Math.floor(res.value);
		}

		if (isNaN(res.valueVirtual) || res.valueVirtual < 0) {
			res.valueVirtual = 0; //safe switch
		}

		if (res.name === "karma") {
			var karmaKittens = Math.round(this.game.getTriValueOrigin(res.value, 5));
			res.valueVirtual = this.game.getTriValue(karmaKittens, 5);
		}

		return res.valueVirtual - prevValue;
	},

	addResEvent: function (name, value) {
		return this.addRes(this.get(name), value, false);
	},

	addResPerTick: function (name, value) {
		return this.addRes(this.get(name), value, true);
	},

	/**
	 * Format of from:
	 * [ {res: "res1", amt: x1}, {res: "res2", amt: x2} ]
	 * amt in the from array sets ratios between resources
	 * The second amt parameter is the maximum number of times to convert
	 */
	getAmtDependsOnStock: function (from, amt) {
		if (!amt) {
			return 0;
		}

		var amtBeginni = amt;

		// Cap amt based on available resources
		// amt can decrease for each resource
		for (var i = 0, length = from.length; i < length; i++) {
			var resAvailable = this.get(from[i].res).value;
			var resNeeded = from[i].amt * amt;

			if (resAvailable < resNeeded) {
				var amtAvailable = resAvailable / from[i].amt;
				amt = Math.min(amt, amtAvailable);
			} else {
				// amtAvailable is amt
			}
		}

		// Remove from resources
		for (i in from) {
			this.addResPerTick(from[i].res, -from[i].amt * amt);
		}

		// Return the percentage to decrease the productivity
		return amt / amtBeginni;
	},

	save: function (saveData) {
		saveData.res = {
			isLocked: Boolean(this.isLocked)
		};
		saveData.resources = this.game.mapMethods(this.resources, "save");
	},

	load: function (saveData) {
		if (saveData.res) {
			this.set("isLocked", Boolean(saveData.res.isLocked));
		}
		this.loadMetadata(saveData, "resources", "get", function (res, saveRes) {
			res.set("value", num(saveRes.value));
			res.set("unlocked", Boolean(saveRes.unlocked));
			res.set("isHidden", Boolean(saveRes.isHidden));
		}, true);
	}
});


dojo.declare("classes.KGSaveEdit.ResourceMeta", [classes.KGSaveEdit.GenericItem, classes.KGSaveEdit.TooltipItem], {
	game: null,
	domNode: null,
	valueIn: null,

	name: "Undefined",

	value: 0,
	maxValue: 0,
	valueVirtual: 0, //cache value for calculating conversions

	unlocked: false,
	isHidden: false,
	relockIfZero: false,
	type: "common",

	perTickCached: 0,

	render: function () {
		this.seti18n();

		var tr = dojo.create("tr", {class: "resource"});
		this.domNode = tr;

		if (this.invisible) {
			dojo.addClass(tr, "hidden");
		}
		if (this.type) {
			dojo.addClass(tr, this.type);
		}

		this.nameNode = dojo.create("td", {
			class: "nameNode",
			innerHTML: this.title || this.name
		}, tr);
		this.registerTooltip(this.nameNode);

		if (this.color) {
			dojo.setStyle(this.nameNode, "color", this.color);
		}
		if (this.style) {
			for (var styleKey in this.style) {
				dojo.setStyle(this.nameNode, styleKey, this.style[styleKey]);
			}
		}

		td = dojo.create("td", null, tr);
		this.game._createInput({class: this.inputClass || "abbrInput"},
			td, this, "value");
		if (this.inputParseFn) {
			this.valueNode.parseFn = this.inputParseFn;
		}
		if (this.inputHandler) {
			this.valueNode.handler = this.inputHandler;
		}

		var td = dojo.create("td", {class: "resourceProps"}, tr);
		this.game._createCheckbox($I("KGSaveEdit.label.unlocked"), td, this, "unlocked");
		this.game._createCheckbox("Hidden", td, this, "isHidden");

		this.maxValueNode = dojo.create("td", null, tr);
		this.perTickNode = dojo.create("td", {class: "perTickNode"}, tr);
		this.registerTooltip(this.perTickNode);

		if (this.name === "catnip") {
			this.weatherModNode = dojo.create("td", null, tr);
		}
	},

	owned: function () {
		return this.getValue() > 0;
	},

	getValue: function () {
		var value = this.value;
		if (this.hardMaxLimit && this.maxValue > 0) {
			value = Math.min(this.value, this.maxValue);
		}
		return num(value);
	},

	getTooltip: function (node) {
		var tooltipBlock = dojo.byId("tooltipBlock");

		if (node === this.nameNode) {
			tooltipBlock.innerHTML = this.description || "";
			tooltipBlock.className = this.description ? "res_desc_tooltip" : "hidden";
			return;
		}

		if (!this.perTickCached) {
			tooltipBlock.className = "hidden";
			return;
		}

		tooltipBlock.className = "pertick_tooltip";
		tooltipBlock.innerHTML = this.game.getDetailedResMap(this);
	},

	getTooltipOffset: function (node) {
		var pos = dojo.position(node);
		return {
			left: pos.x + pos.w + 60,
			top: pos.y
		};
	},

	update: function () {
		var value = this.value;
		var maxValue = this.maxValue;

		this.unlocked = value > 0 || this.unlockedNode.prevChecked;
		if (this.name === "sorrow" || (this.relockIfZero && !value)) { //sigh
			this.unlocked = false;
		}
		this.unlockedNode.checked = this.unlocked;
		this.game.toggleDisabled(this.unlockedNode, this.name === "sorrow" || value > 0 || this.relockIfZero); //sigh

		dojo.toggleClass(this.valueNode, "resLimitNotice", maxValue > 0 && value > maxValue * 0.95);
		dojo.toggleClass(this.valueNode, "resLimitWarn", maxValue > 0 && value > maxValue * 0.75 && value <= maxValue * 0.95);

		dojo.toggleClass(this.valueNode, "blaze", value === 420);
		dojo.toggleClass(this.valueNode, "hail", value === 666);

		this.perTickCached = 0;
		if (this.calculatePerTick) {
			this.perTickCached = this.game.fixFloatPointNumber(this.game.calcResourcePerTick(this.name));
		}

		this.maxValueNode.textContent = maxValue || this.showMax ? "/" + this.game.getDisplayValueExt(maxValue) : "";

		var perTick = this.game.opts.usePerSecondValues ? this.perTickCached * this.game.ticksPerSecond : this.perTickCached;
		var postfix = this.game.opts.usePerSecondValues ? "/sec" : "";
		if (this.game.opts.usePercentageResourceValues && maxValue) {
			perTick = perTick / maxValue * 100;
			postfix = "%" + postfix;
		}

		var perTickValue = perTick ? "(" + this.game.getDisplayValueExt(perTick, true, false) + postfix + ")" : "";
		this.perTickNode.textContent = perTickValue;
		dojo.toggleClass(this.perTickNode, "tooltipped", Boolean(perTick));

		//weather mod
		if (this.name === "catnip") {
			var season = this.game.calendar.getCurSeason();
			var modifier = 0;
			var modText = "";

			if (season.modifiers[this.name] && this.perTickCached !== 0) {
				modifier = (season.modifiers[this.name] + this.game.calendar.getWeatherMod() - 1) * 100;
				if (modifier) {
					modText = "[" + (modifier > 0 ? "+" : "") + modifier.toFixed() + "%]";
				}
			}

			this.weatherModNode.textContent = modText;
			dojo.toggleClass(this.weatherModNode, "green", modifier > 0);
			dojo.toggleClass(this.weatherModNode, "red", modifier < 0);
		}
	},

	save: function () {
		var value = this.getValue();
		return {
			name: this.name,
			value: value,
			unlocked: this.unlocked,
			isHidden: this.isHidden
		};
	}
});

});
