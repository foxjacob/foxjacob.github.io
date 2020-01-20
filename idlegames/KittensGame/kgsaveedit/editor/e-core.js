/* global dojo, require, classes, $I */

function num(value) {
	if (!isFinite(value)) {
		return 0;
	}
	return Number(value) || 0;
}


require(["dojo/on", "dojo/mouse"], function (on, mouse) {
"use strict";


/**
 * Super class. Contains a method to set any property and also update the associated form element, if any
**/
dojo.declare("classes.KGSaveEdit.core", null, {
	set: function (key, value) {
		if (this[key + "Node"] && this[key + "Node"].dataProp === key) {
			var args = [].slice.call(arguments, 2);
			args = [this[key + "Node"], value].concat(args);
			value = this.game.setEle.apply(this.game, args);
		}
		this[key] = value;
		return value;
	},

	seti18n: function () {
		if (this.i18nKeys) {
			for (var key in this.i18nKeys) {
				this[key] = $I(this.i18nKeys[key]);
			}
		}
	}
});

dojo.declare("classes.KGSaveEdit.UI.Tab", classes.KGSaveEdit.core, {
	game: null,

	tabNode: null,
	tabBlockNode: null,
	tabWrapper: null,
	isVisible: true,

	tabName: "Undefined",

	constructor: function (game) {
		this.game = game;
	},

	getVisible: function () {
		return true;
	},

	renderTab: function () {
		var self = this;
		self.seti18n();

		//wrap tab link for css
		self.tabWrapper = dojo.create("span", {
			class: "wrapper separated" + (self.isVisible ? "" : " spoiler") + (self.tabNodeClass ? " " + self.tabNodeClass : "")
		});

		self.tabNode = dojo.create("a", {
			class: "tab",
			href: "#",
			innerHTML: self.tabName
		}, self.tabWrapper);

		self.tabBlockNode = dojo.create("div", {
			class: "tabBlock hidden" + (self.tabBlockClass ? " " + self.tabBlockClass : "")
		});

		on(self.tabNode, "click", function (ev) {
			ev.preventDefault();
			self.game.openTab(self);
		});

		if (self.game.activeTab === self) {
			dojo.addClass(self.tabNode, "activeTab");
			dojo.removeClass(self.tabBlockNode, "hidden");
		}
	},

	renderTabBlock: function () { },

	updateTab: function () {
		if (this.getTabName) {
			this.tabNode.innerHTML = this.getTabName();
		}

		this.isVisible = this.getVisible();
		dojo.toggleClass(this.tabWrapper, "spoiler", !this.isVisible);
	}
});

dojo.declare("classes.KGSaveEdit.Manager", classes.KGSaveEdit.core, {
	game: null,
	effectsCached: null,
	meta: null,

	constructor: function (game) {
		this.game = game;

		this.effectsCached = {};
		this.meta = [];
	},

	render: function () {
		this.seti18n();
	},

	/* registerMeta: function (meta) {
		this.meta.push(meta);
	}, */

	/**
	 * Loops through dataArray, and creates new ClassObjs out of its data
	 * Creates array/itemByName objects for storing the new items if necessary
	 * If a function is passed as fn, calls it with this set to the manager
	 */
	registerMetaItems: function (dataArray, ClassObj, key, fn) {
		var arr = this[key] || [];
		var byName = this[key + "ByName"] || {};
		this[key] = arr;
		this[key + "ByName"] = byName;

		for (var i = 0; i < dataArray.length; i++) {
			var item = new ClassObj(this.game, dataArray[i]);
			item.metaObj = this;
			arr.push(item);
			byName[item.name] = item;

			if (fn) {
				fn.call(this, item);
			}
		}
	},

	getMeta: function (name, metadata) {
		for (var i = metadata.length - 1; i >= 0; i--) {
			var meta = metadata[i];

			if (meta.name === name) {
				return meta;
			}
		}
		return null;
	},

	invalidateCachedEffects: function () {
		this.effectsCached = {};
		this.calculateEffectsBase();
	},

	calculateEffectsBase: function () { },

	getEffect: function (name) {
		return num(this.getEffectBase(name)) + num(this.getEffectCached(name));
	},

	getEffectBase: function () {
		return 0;
	},

	getEffectCached: function (name) {
		var cached = this.effectsCached[name];
		if (!isNaN(cached)) {
			return cached;
		}

		var effect = 0;
		for (var i = this.meta.length - 1; i >= 0; i--) {
			var effectMeta = this.getMetaEffect(name, this.meta[i]);
			effect += effectMeta;
		}

		this.effectsCached[name] = effect;
		return effect;
	},

	getMetaEffect: function (name, metadata) {
		var totalEffect = 0;
		if (!metadata.length) {
			return 0;
		}

		for (var i = metadata.length - 1; i >= 0; i--) {
			totalEffect += num(metadata[i].getEffect(name));
		}

		return totalEffect || 0;
	},

	loadMetadata: function (saveData, path, getFn, loadFn, storeExtra) {
		var saveArr = this.game.resolveObjPath(saveData, path);
		if (!saveArr || !saveArr.length) {
			return;
		}

		if (!dojo.isFunction(loadFn)) {
			loadFn = null;
		}

		for (var i = 0; i < saveArr.length; i++) {
			var saveMeta = saveArr[i];
			if (saveMeta && saveMeta.name) {
				var meta = this[getFn](saveMeta.name);
				if (meta) {
					if (loadFn) {
						loadFn.call(this, meta, saveMeta);
					} else if ("load" in meta) {
						meta.load(saveMeta);
					}
				} else if (storeExtra) {
					this.game.extrasTab.storeExtraData(path, saveMeta, i);
				}
			}
		}
	}
});


dojo.declare("classes.KGSaveEdit.GenericItem", classes.KGSaveEdit.core, {
	game: null,

	name: "Undefined",

	constructor: function (game, data) {
		this.game = game;
		dojo.mixin(this, data);
		this.metaData = data;
	}
});


dojo.declare("classes.KGSaveEdit.TooltipItem", classes.KGSaveEdit.core, {
	getTooltip: function () {
		return "Unimplemented";
	},

	getTooltipOffset: function (node) {
		var pos = dojo.position(node);
		return {
			left: pos.x + pos.w + 20,
			top: pos.y
		};
	},

	registerTooltip: function (node) {
		if (!node) {
			return;
		}

		var self = this;
		var tooltip = dojo.byId("tooltipBlock");

		var updateTooltip = function () {
			tooltip.removeAttribute("style");
			tooltip.innerHTML = "";

			var viewPos = dojo.position(tooltip.parentNode);
			self.getTooltip(node);

			if (dojo.hasClass(tooltip, "hidden")) {
				return;
			}

			var pos = self.getTooltipOffset(node);
			pos.top = Math.abs(pos.top - viewPos.y);

			//keep tooltip from moving outside viewing area
			var tooltipPos = dojo.position(tooltip);
			pos.top = Math.min(pos.top, viewPos.h - 25 - tooltipPos.h);

			pos.left = Math.min(pos.left, viewPos.w - 25 - tooltipPos.w);

			tooltip.style.top = pos.top + "px";
			tooltip.style.left = pos.left + "px";
		};

		on(node, mouse.enter, function () {
			self.game.tooltipUpdateFunc = updateTooltip;
			updateTooltip();
		});

		on(node, mouse.leave, function () {
			tooltip.removeAttribute("style");
			tooltip.innerHTML = "";
			dojo.addClass(tooltip, "hidden");
			self.game.tooltipUpdateFunc = null;
		});
	}
});


dojo.declare("classes.KGSaveEdit.MetaItem", [classes.KGSaveEdit.GenericItem, classes.KGSaveEdit.TooltipItem], {
	get: function (key) {
		return this[key];
	},

	render: function () {
		this.seti18n();
	},

	owned: function () {
		return false;
	},

	getDescription: function () {
		return this.description;
	},

	getEffect: function () {
		return 0;
	},

	getEffects: function () {
		return this.get("effects") || {};
	},

	getNextEffectValue: function (effectName) {
		if (!this.updateEffects) {
			return undefined;
		}

		this.on++;
		this.updateEffects(this, this.game);
		var nextEffectValue = this.effects[effectName];
		this.on--;
		this.updateEffects(this, this.game);
		return nextEffectValue;
	},

	getPrices: function () {
		return this.prices ? dojo.clone(this.prices) : [];
	},

	update: function () { },

	updateEnabled: function () {
		var prices = this.getPrices() || [];
		var limited = this.game.resPool.isStorageLimited(prices);
		dojo.toggleClass(this.nameNode, "limited", this.game.opts.highlightUnavailable && limited);
		dojo.toggleClass(this.nameNode, "btnDisabled", limited || !this.game.resPool.hasRes(prices));
	},

	registerHighlight: function (node) {
		var self = this;
		on(node, mouse.enter, function () {
			dojo.query(".highlited").removeClass("highlited");

			var prices = self.getPrices(true);
			var resPool = self.game.resPool;
			if (prices) {
				for (var i = prices.length - 1; i >= 0; i--) {
					var res = resPool.get(prices[i].name);
					if (res) {
						dojo.addClass(res.domNode, "highlited");
					}
				}
			}
		});

		on(node, mouse.leave, function () {
			dojo.query(".highlited").removeClass("highlited");
		});
	},

	getTooltip: function () {
		var tooltip = dojo.byId("tooltipBlock");
		tooltip.className = "button_tooltip";

		if (this.getName) {
			dojo.create("div", {
				class: "tooltipName",
				innerHTML: this.getName()
			}, tooltip);
		}

		var descBlock;
		if (this.description || this.getDescription) {
			descBlock = dojo.create("div", {
				class: "tooltipDesc",
				innerHTML: this.getDescription ? this.getDescription() : this.description
			}, tooltip);
		}

		var prices = this.getPrices ? this.getPrices() : this.prices;
		if (prices) {
			if (descBlock) {
				dojo.addClass(descBlock, "tooltipDescBottom");
			}
			this.game.renderPrices(tooltip, prices);
		}

		if (!this.hideEffects) {
			this.game.renderEffects(tooltip, this);
		}

		if (this.flavor) {
			dojo.create("div", {
				class: "tooltipFlavor",
				innerHTML: this.flavor
			}, tooltip);
		}
	}
});


dojo.declare("classes.KGSaveEdit.MetaItemStackable", classes.KGSaveEdit.MetaItem, {
	val: 0,
	on: 0,
	togglable: false,
	togglableOnOff: false,

	owned: function () {
		return this.val > 0;
	},

	getOn: function () {
		if (!this.togglable) {
			return this.val;
		} else if (this.togglableOnOff) {
			return this.on > 0 ? this.val : 0;
		}
		return Math.min(this.on, this.val) || 0;
	},

	getName: function () {
		var label = this.get("label");
		if (this.owned()) {
			if (this.togglable && !this.togglableOnOff) {
				return label + " (" + this.getOn() + "/" + this.val + ")";
			}
			return label + " (" + this.val + ")";
		}
		return label;
	},

	getEffect: function (name) {
		var effects = this.getEffects();
		return num(effects[name] * this.getOn());
	},

	getPrices: function () {
		var prices = dojo.clone(this.prices) || [];
		var ratio = this.priceRatio || 1;
		for (var i = prices.length - 1; i >= 0; i--) {
			prices[i].val *= Math.pow(ratio, this.val);
		}
		return prices;
	}
});


});
