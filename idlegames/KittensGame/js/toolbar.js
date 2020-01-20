dojo.declare("classes.ui.Toolbar", null, {

	icons: null,
	game: null,

	constructor: function(game){
		this.game = game;

		this.icons= [];

		this.addIcon(new classes.ui.toolbar.ToolbarMOTD(game));
		this.addIcon(new classes.ui.toolbar.ToolbarHappiness(game));
		this.addIcon(new classes.ui.toolbar.ToolbarEnergy(game));
		this.addIcon(new classes.ui.toolbar.ToolbarDonations(game));
	},

	addIcon: function(icon){
		this.icons.push(icon);
	},

	render: function(container){
		dojo.empty(container);

		for (var i in this.icons){
			var iconContainer = this.icons[i].render(container);
			var icon = this.icons[i];
			if (icon.getOpts().hasTooltip) {
				this.attachToolbarTooltip(iconContainer, this.icons[i]);
			}
		}

		this.update(true /*forceUpdate*/);
	},

	update: function(forceUpdate){
		for (var i in this.icons){
			var icon = this.icons[i];
			if (icon.getOpts().needUpdate || forceUpdate) {
				this.icons[i].update();
			}
		}

		var sorrowRes = this.game.resPool.get("sorrow"),
			sorrow = sorrowRes.value;
		$("#sorrowTooltip").html(sorrow ?
			"悲伤: " + sorrow.toFixed() + "%" :
			""
		);
		var isMax = (sorrowRes.value == sorrowRes.maxValue);
		$("#sorrowTooltip").css("color", isMax ? "red" : "");
	},


	//TODO: move all this stuff to some util class?
	attachToolbarTooltip: function(container, icon){
		var tooltip = dojo.byId("tooltip");
		dojo.empty(tooltip);

		dojo.connect(container, "onmouseover", this, dojo.partial(function(tooltip, event){
			 this.game.tooltipUpdateFunc = function(){
				tooltip.innerHTML = icon.getTooltip();
			 };
			 this.game.tooltipUpdateFunc();

			 var target = event.originalTarget || event.toElement;
			 var pos = $(target).offset();
			 if (!pos){
				 return;
			 }

			 dojo.style(tooltip, "left", pos.left + "px");
			 dojo.style(tooltip, "top",  pos.top + "px");

			 dojo.style(tooltip, "display", "");
			 dojo.style(container, "fontWeight", "bold");

	    }, tooltip));

		dojo.connect(container, "onmouseout", this, dojo.partial(function(tooltip, container){
			 this.game.tooltipUpdateFunc = null;
			 dojo.style(tooltip, "display", "none");
			 dojo.style(container, "fontWeight", "normal");
		},tooltip, container));

	},

	updateTooltip: function(container, tooltip, htmlProvider){
		tooltip.innerHTML = dojo.hitch(this, htmlProvider)();
	}
});

dojo.declare("classes.ui.ToolbarIcon", null, {
	game: null,
	container: null,

	constructor: function(game){
		this.game = game;
	},

	render: function(container){
		this.container = dojo.create("span", {
			className: "toolbarIcon"
		}, container);

		return this.container;
	},

	update: function(){
	},

	getTooltip: function(){
		return "Unimplemented";
	},

	getOpts: function(){
		return {
			needUpdate: true,
			hasTooltip: true
		};
	}
});

dojo.declare("classes.ui.toolbar.ToolbarHappiness", classes.ui.ToolbarIcon, {
	update: function(){
		if (this.game.village.getKittens() <= 5){
			dojo.style(this.container, "display", "none");
		} else {
			dojo.style(this.container, "display", "");
		}

		this.container.innerHTML = "幸福度: " + Math.floor(this.game.village.happiness * 100) + "%";
		$(this.container).css("color", "Coral");
	},

	getTooltip: function(){
		var base = this.game.getEffect("happiness");
		//var population = this.game.village.getKittens() *  2;
		var tooltip = $I("village.happiness.base") + ": 100%<br>" +
			   $I("village.happiness.buildings") + ": +" + (Math.floor(base)) + "%<br>";

		//----------------------
		var resHappiness = 0;
		var resources = this.game.resPool.resources;
		for (var i = resources.length - 1; i >= 0; i--) {
			if (resources[i].type != "common" && resources[i].value > 0){
				resHappiness += 10;
				if(resources[i].name=="elderBox" && this.game.resPool.get("wrappingPaper").value){
					resHappiness -= 10; // Present Boxes and Wrapping Paper do not stack.
				}
			}
		}
		tooltip += $I("village.happiness.rare.resources") + ": +" + this.game.getDisplayValueExt(resHappiness, false, false, 0) + "%<br>";
		//---------------------
		var karma = this.game.resPool.get("karma");
		if (karma.value > 0){
			tooltip += $I("village.happiness.karma") + ": +" + this.game.getDisplayValueExt(karma.value, false, false, 0) + "%<br>";
		}

		if (this.game.calendar.festivalDays > 0){
			tooltip += $I("village.happiness.festival") + ": +30%<br>";
		}

        var unhappiness = ( this.game.village.getKittens()-5 ) * 2;
        var unhappiness = unhappiness;

		var unhappinessReduction = unhappiness * this.game.getEffect("unhappinessRatio", true);
		tooltip += $I("village.happiness.penalty") + ": -" + this.game.getDisplayValueExt(unhappiness+unhappinessReduction, false, false, 0) + "%<br>";

        tooltip += "* " + $I("village.happiness.penalty.base") + ": -" + this.game.getDisplayValueExt(unhappiness, false, false, 0) + "%<br>";
		tooltip += "* " + $I("village.happiness.penalty.mitigated") + ": " + this.game.getDisplayValueExt(-unhappinessReduction, false, false, 0) + "%<br>";

        var overpopulation = this.game.village.getKittens() - this.game.village.maxKittens;
        if (overpopulation > 0){
            tooltip += $I("village.happiness.overpopulation") + ": -" + overpopulation*2 + "%<br>";
        }

        return tooltip;
    }
});

dojo.declare("classes.ui.toolbar.ToolbarEnergy", classes.ui.ToolbarIcon, {
	update: function(){
		if (!this.game.science.get("electricity").researched){
			dojo.style(this.container, "display", "none");
		} else {
			dojo.style(this.container, "display", "");
		}

		var resPool = this.game.resPool;
		var energy = resPool.energyProd - resPool.energyCons;
		this.container.innerHTML = "&#9889;&nbsp;" + this.game.getDisplayValueExt(energy) + "瓦";

		if (energy >= 0){
			$(this.container).css("color", "green");
		} else {
			$(this.container).css("color", "red");
		}
	},
	getTooltip: function(){
		var resPool = this.game.resPool;
		var energy = resPool.energyProd - resPool.energyCons;

        var delta = this.game.resPool.getEnergyDelta();
		var penalty = energy >= 0 ? "" :"<br><br>生产奖励削减: <span style='color:red;'>-" + Math.floor( (1-delta) * 100) + "%</span>";

		return "产出: <span style='color:green;'>" +  this.game.getDisplayValueExt(resPool.energyProd, true, false) + "瓦</span>" +
			   "<br>消耗: <span style='color:#D00000;'>-" +  this.game.getDisplayValueExt(resPool.energyCons) + "瓦</span>" + penalty;
	}
});

dojo.declare("classes.ui.toolbar.ToolbarMOTD", classes.ui.ToolbarIcon, {
	update: function(){
		var server = this.game.server;
		if (server.showMotd && server.motdTitle) {
			this.container.innerHTML = "&nbsp;" + server.motdTitle + "&nbsp;";
		}

		if (server.motdFreshMessage) {
			dojo.addClass(this.container, "freshMessage");
		} else {
			dojo.removeClass(this.container, "freshMessage");
		}
	},

	getTooltip: function(){
		var server = this.game.server;
		if (server.showMotd && server.motdContent) {
			server.motdFreshMessage = false;
			return "每日一语:<br />" + server.motdContent;
		}
	}
});


dojo.declare("classes.ui.toolbar.ToolbarDonations", classes.ui.ToolbarIcon, {
	update: function(){
		var server = this.game.server,
			nextTier = Math.floor((server.donateAmt || 0) / 100) + 1;

		this.container.innerHTML =
		"<a href='https://www.patreon.com/bloodrizer' data-patreon-widget-type='become-patron-button' target='_blank'>作者主页" +
		"</a><script async src='https://c6.patreon.com/becomePatronButton.bundle.js'></script>";
	},
	getOpts: function(){
		return {
			needUpdate: false,
			hasTooltip: false
		};
	}
});