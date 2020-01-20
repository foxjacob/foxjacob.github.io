/* global dojo, require, classes, $I */

require([], function () {

dojo.declare("classes.KGSaveEdit.ExtrasTab", classes.KGSaveEdit.UI.Tab, {
	tabName: "Extras",
	tabNodeClass: "smallCaps hidden",

	extraMetadata: null,

	constructor: function (game) {
		this.game = game;
		this.extraMetadata = [];
	},

	getTabName: function () {
		var title = $I("KGSaveEdit.extras.tabName");
		if (this.extraMetadata.length > 0) {
			title += " (" + this.extraMetadata.length + ")";
		}
		return title;
	},

	renderTabBlock: function () {
		var self = this;
		var game = self.game;

		self.emptyExtraDataBlock = dojo.create("div", {
			innerHTML: "No extra data found",
			class: "bottom-margin ital"
		}, self.tabBlockNode);

		self.extraDataBlock = dojo.create("div", {
			class: "bottom-margin hidden"
		}, self.tabBlockNode);

		var input = game._createCheckbox($I("KGSaveEdit.extras.save.all"), self.extraDataBlock, self);
		self.extraDataEnableAllNode = input.cbox;

		input.cbox.handler =  function () {
			for (var i = self.extraMetadata.length - 1; i >= 0; i--) {
				self.extraMetadata[i].set("enabled", self.extraDataEnableAllNode.checked, true, true);
			}
		};

		self.extraDataInfoBlock = dojo.create("div", null, self.extraDataBlock);

		var helpLink = new classes.KGSaveEdit.ExtraTooltipHelp(game);
		helpLink.render();
		dojo.place(helpLink.domNode, self.tabBlockNode);

		self.renderExtraData();
	},

	clearExtraData: function () {
		this.extraMetadata = [];
	},

	storeExtraData: function (path, meta, index, enabled) {
		var extraData = new classes.KGSaveEdit.ExtraMetaItem(this.game, {
			path: path,
			meta: meta,
			index: index,
			enabled: enabled || typeof index === "number"
		});

		this.extraMetadata.push(extraData);
	},

	//TODO some way to live edit data that doesn't currently have an interface but is saved normally?

	updateEnableAllNode: function () {
		var enabledCount = 0;
		var len = this.extraMetadata.length;
		for (var i = 0; i < len; i++) {
			if (this.extraMetadata[i].enabled) {
				enabledCount++;
			}
		}

		this.extraDataEnableAllNode.checked = enabledCount > 0 && enabledCount === len;
		this.extraDataEnableAllNode.indeterminate = enabledCount > 0 && enabledCount < len;
	},

	renderExtraData: function () {
		dojo.empty(this.extraDataInfoBlock);
		for (var i = 0; i < this.extraMetadata.length; i++) {
			var extraData = this.extraMetadata[i];
			extraData.render();
			dojo.place(extraData.domNode, this.extraDataInfoBlock);
		}

		this.updateEnableAllNode();

		dojo.toggleClass(this.emptyExtraDataBlock, "hidden", this.extraMetadata.length > 0);
		dojo.toggleClass(this.extraDataBlock, "hidden", this.extraMetadata.length === 0);

		if (this.extraMetadata.length > 0) {
			dojo.removeClass(this.tabWrapper, "hidden");
		}
	},

	save: function (saveData) {
		for (var i = this.extraMetadata.length - 1; i >= 0; i--) {
			var extraData = this.extraMetadata[i];
			if (extraData && extraData.enabled) {
				var saveObj = this.game.resolveObjPath(saveData, extraData.path);
				if (saveObj) {
					if (typeof extraData.index === "number") {
						saveObj.push(extraData.meta);
					} else {
						saveObj[extraData.index] = extraData.meta;
					}
				}
			}
		}
	},

	load: function () {
		this.renderExtraData();
	}
});

dojo.declare("classes.KGSaveEdit.ExtraMetaItem", classes.KGSaveEdit.GenericItem, {
	constructor: function () {
		this.stringifyMeta();

		var title = this.index;
		if (typeof this.index === "number" && this.meta.name) {
			title = this.meta.name;
		}
		this.fullPath = this.path + "." + title;
	},

	stringifyMeta: function () {
		this.metaJSON = JSON.stringify(this.meta, null, "    ");
	},

	render: function () {
		var self = this;
		if (self.domNode) {
			return;
		}

		self.domNode = dojo.create("div", {class: "extraDataBlock"});
		dojo.create("div", {innerHTML: self.fullPath}, self.domNode);

		var header = dojo.create("div", {
			class: "indent",
			innerHTML: " &nbsp; "
		}, self.domNode);

		self.game._createCheckbox($I("KGSaveEdit.extras.save"), header, self, "enabled", "first");
		self.enabledNode.handler = function () {
			self.game.extrasTab.updateEnableAllNode();
		};

		self.editButton = self.game._createButton(
			{value: $I("KGSaveEdit.extras.edit")}, header, function () {
				if (dojo.hasClass(self.editBlock, "hidden")) {
					self.jsonField.value = self.metaJSON;
					self.jsonField.defaultValue = self.metaJSON;
					dojo.addClass(self.editErrorSpan, "hidden");
					dojo.removeClass(self.editBlock, "hidden");
				} else {
					self.editCancelButton.click();
				}
			}
		);

		self.editBlock = dojo.create("div", {
			innerHTML: "<br>",
			class: "indent hidden"
		}, self.domNode);

		self.jsonField = dojo.create("textarea", {class: "jsonField"}, self.editBlock, "first");

		self.game._createButton(
			{value: $I("KGSaveEdit.extras.save.data")}, self.editBlock, function () {
				var data = self.jsonField.value.trim();
				if (!data || data == self.metaJSON) {
					return;
				}

				var meta;
				try {
					meta = JSON.parse(data);
				} catch (err) {
					dojo.removeClass(self.editErrorSpan, "hidden");
					throw err;
				}

				self.meta = meta;
				self.metaJSON = self.stringifyMeta();
				self.jsonField.defaultValue = self.metaJSON;
			}
		);

		self.editCancelButton = self.game._createButton(
			{
				value: $I("KGSaveEdit.extras.cancel"),
				class: "leftSpacer"
			}, self.editBlock, function () {
				dojo.addClass(self.editBlock, "hidden");
			}
		);

		self.editErrorSpan = dojo.create("span", {
			innerHTML: "Something went wrong!",
			class: "error leftSpacer hidden"
		}, self.editBlock);
	}
});


dojo.declare("classes.KGSaveEdit.ExtraTooltipHelp", [classes.KGSaveEdit.TooltipItem], {
	constructor: function (game) {
		this.game = game;
	},

	render: function () {
		this.domNode = dojo.create("a", {
			href: "#",
			innerHTML: $I("KGSaveEdit.extras.help"),
			class: "help smallText"
		}, self.tabBlockNode);

		this.registerTooltip(this.domNode);
	},

	getTooltip: function () {
		var tooltipBlock = dojo.byId("tooltipBlock");
		tooltipBlock.className = "help_tooltip";

		tooltipBlock.innerHTML = $I("KGSaveEdit.extras.help.tooltip");
	},

	getTooltipOffset: function (node) {
		var pos = dojo.position(node);
		return {
			left: pos.x + 10,
			top: pos.y + pos.h + 10
		};
	}
});


});
