/* global dojo, require, classes, $I, num */

require(["dojo/on", "dojo/mouse"], function (on, mouse) {
"use strict";

dojo.declare("classes.KGSaveEdit.AchievementsManager", [classes.KGSaveEdit.UI.Tab, classes.KGSaveEdit.Manager], {
	achievementsData: [
		{
			name: "theElderLegacy",
			condition: function () {
				var date = new Date();
				return (date.getMonth() == 0 && date.getFullYear() == 2017);
			},
			hidden: true
		}, {
			name: "unicornConspiracy",
			condition: function () {
				return this.game.resPool.get("unicorns").owned();
			}
		}, {
			name: "uniception",
			condition: function () {
				return this.game.resPool.get("tears").owned();
			}
		}, {
			name: "sinsOfEmpire",
			condition: function () {
				return this.game.resPool.get("alicorn").owned();
			}
		}, {
			name: "anachronox",
			condition: function () {
				return this.game.resPool.get("timeCrystal").owned();
			}
		}, {
			name: "deadSpace",
			condition: function () {
				return this.game.resPool.get("necrocorn").owned();
			}
		}, {
			name: "ironWill",
			condition: function () {
				return this.game.ironWill && !this.game.resPool.get("kittens").owned() && this.game.bld.get("mine").owned();
			}
		}, {
			name: "uberkatzhen",
			condition: function () {
				return this.game.ironWill && !this.game.resPool.get("kittens").owned() && this.game.bld.get("warehouse").owned();
			}
		}, {
			name: "hundredYearsSolitude",
			condition: function () {
				return this.game.ironWill && !this.game.resPool.get("kittens").owned() && this.game.bld.get("steamworks").owned();
			}
		}, {
			name: "soilUptuned",
			condition: function () {
				return this.game.ironWill && !this.game.resPool.get("kittens").owned() && this.game.bld.get("pasture").val >= 45;
			}
		}, {
			name: "atlasUnmeowed",
			condition: function () {
				return this.game.ironWill && !this.game.resPool.get("kittens").owned() && this.game.bld.get("magneto").owned();
			}
		}, {
			name: "meowMeowRevolution",
			condition: function () {
				return this.game.ironWill && !this.game.resPool.get("kittens").owned() && this.game.bld.get("factory").owned();
			}
		}, {
			name: "spaceOddity",
			condition: function () {
				return this.game.ironWill && this.game.space.getProgram("moonMission").owned();
			},
			hasStar: true,
			starCondition: function () {
				return this.game.ironWill && this.game.space.getProgram("moonMission").owned() && this.game.resPool.get("paragon").value < 10;
			}
		}, {
			name: "jupiterAscending",
			condition: function () {
				return this.game.space.getProgram("orbitalLaunch").owned() && this.game.calendar.year <= 1;
			}
		}, {
			name: "shadowOfTheColossus",
			condition: function () {
				return this.game.bld.get("ziggurat").owned() && this.game.village.maxKittens === 1;
			}
		}, {
			name: "sunGod",
			condition: function () {
				return this.game.religion.faith >= 696342;
			}
		}, {
			name: "heartOfDarkness",
			condition: function () {
				return this.game.resPool.get("zebras").value > 1;
			}
		}, {
			name: "winterIsComing",
			unethical: true,
			condition: function () {
				return this.game.deadKittens >= 10;
			}
		}, {
			name: "youMonster",
			unethical: true,
			condition: function () {
				return this.game.deadKittens >= 100;
			}
		}, {
			name: "superUnethicalClimax",
			unethical: true,
			condition: function () {
				return this.game.cheatMode;
			}
		}, {
			name: "systemShock",
			unethical: true,
			condition: function () {
				return this.game.systemShockMode;
			}
		}, {
			name: "lotusMachine",
			condition: function () {
				return this.game.resPool.get("karma").owned();
			}
		}, {
			name: "serenity",
			condition: function () {
				return this.game.resPool.get("kittens").value >= 50 && this.game.deadKittens === 0;
			}
		}, {
			name: "utopiaProject",
			condition: function () {
				return this.game.village.happiness >= 1.5 && this.game.resPool.get("kittens").value > 35;
			},
			hasStar: true,
			starCondition: function () {
				return this.game.village.happiness >= 5 && this.game.resPool.get("kittens").value > 35;
			}
		}, {
			name: "cathammer",
			condition: function () {
				return this.game.stats.getStat("totalYears").val >= 40000;
			},
			hasStar: true,
			starCondition: function () {
				return this.game.calendar.trueYear() >= 40000;
			}
		}
	],

	hatsData: [
		{
			id: 1,
			name: "simpleHat",
			title: "Simple Hat",
			description: "The hat to rule them all",
			difficulty: "F"
		}, {
			id: 2,
			name: "lotusHat",
			title: "Lotus Hat",
			description: "Hat in the shape of louts",
			difficulty: "A",
			condition: function () {
				return this.game.stats.getStat("totalResets").val >= 50;
			}
		}, {
			id: 3,
			name: "ivoryTowerHat",
			title: "Ivory Tower Hat",
			description: "A tall hat in a form of a tower",
			difficulty: "S+"
		}, {
			id: 4,
			name: "uselessHat",
			title: "Useless Hat",
			description: "This hat is totally useless",
			difficulty: "F",
			condition: function () {
				var leader = this.game.village.leader;
				return leader != null && leader.trait.name == "none";
			}
		}, {
			id: 5,
			name: "voidHat",
			title: "Void Hat",
			description: "Hat is made of void",
			difficulty: ""
		}, {
			id: 6,
			name: "nullHat",
			title: "Null Hat",
			description: "The hat is a lie",
			difficulty: ""
		}, {
			id: 7,
			name: "betaHat",
			title: "Beta Hat",
			description: "The hat is a bit glitchy and rough around the edges",
			difficulty: "B",
			// condition: function () {
			// 	return (this.game.server.donateAmt == 0);
			// }
		}, {
			id: 8,
			name: "silentHat",
			title: "Silent Hat",
			description: "This hat is totally silent",
			difficulty: "S",
			// condition: function () {
			// 	return (this.game.server.motdContent == "");
			// }
		}, {
			id: 9,
			name: "treetrunkHat",
			title: "Treetrunk Hat",
			description: "A hat made of branches and leaves",
			difficulty: "F",
			condition: function () {
				return this.game.workshop.getCraft("wood").value > 0;
			}
		}, {
			id: 10,
			name: "wizardHat",
			title: "Wizard Hat",
			description: "Abracadabra!",
			difficulty: ""
		}, {
			id: 11,
			name: "nekomimiHat",
			title: "Nekomimi Hat",
			description: "*^_^*",
			difficulty: ""
		}, {
			id: 12,
			name: "eldritchHat",
			title: "Eldritch Hat",
			description: "",
			difficulty: ""
		}, {
			id: 13,
			name: "tesseractHat",
			title: "Tesseract Hat",
			description: "",
			difficulty: ""
		}, {
			id: 14,
			name: "crimsonHat",
			title: "Crimson Hat",
			description: "",
			difficulty: ""
		}, {
			id: 15,
			name: "skeletonHat",
			title: "Skeleton Hat",
			description: "",
			difficulty: ""
		}, {
			id: 16,
			name: "gladosHat",
			title: "Glados Hat",
			description: "",
			difficulty: ""
		}, {
			id: 17,
			name: "marioHat",
			title: "Mario Hat",
			description: "",
			difficulty: ""
		}, {
			id: 18,
			name: "fedoraHat",
			title: "Fedora",
			description: "Classy fedora",
			difficulty: ""
		}, {
			id: 19,
			name: "necrocornHat",
			title: "Necrocorn Hat",
			description: "",
			difficulty: "S",
			condition: function () {
				var kittens = this.game.resPool.get("kittens");
				return (kittens.value >= 1000 && kittens.maxValue == 0);
			}
		}, {
			id: 20,
			name: "alicornHat",
			title: "Alicorn Hat",
			description: "",
			difficulty: "S",
			condition: function () {
				return (this.game.resPool.get("kittens").value > 500 && this.game.resPool.get("alicorn").value == 0);
			}
		}, {
			id: 21,
			name: "unicornHat",
			title: "Unicorn Hat",
			description: "",
			difficulty: "A"
		}, {
			id: 22,
			name: "dragonHat",
			title: "Dragon Hat",
			description: "",
			difficulty: ""
		}, {
			id: 23,
			name: "glitchyHat",
			title: "Glitchy Hat",
			description: "♋︎⬧︎⧫︎♏︎❒︎🕯︎⬧︎ ●︎♋︎■︎♑︎◆︎♋︎♑︎♏︎ 🖳︎✆",
			difficulty: "S"
		}, {
			id: 24,
			name: "topHat",
			title: "Tophat",
			description: "",
			difficulty: ""
		}, {
			id: 25,
			name: "jesterHat",
			title: "Jester Hat",
			description: "",
			difficulty: ""
		}, {
			id: 26,
			name: "fezHat",
			title: "Fez Hat",
			description: "A prism-shaped red fez hat.",
			difficulty: "A"
		}
	],

	tabName: "Achievements",

	achievements: null,
	achievementsByName: null,

	councilUnlocked: false,

	constructor: function () {
		this.i18nKeys = {tabName: "tab.name.achievements"};
		this.registerMetaItems(this.achievementsData, classes.KGSaveEdit.AchievementMeta, "achievements", function (ach) {
			ach.starUnlocked = Boolean(ach.starUnlocked);

			ach.i18nKeys = {
				title: "achievements." + ach.name + ".title",
				description: "achievements." + ach.name + ".desc"
			};
			if (ach.hasStar) {
				ach.i18nKeys.starDescription = "achievements." + ach.name + ".starDesc";
			}
		});

		this.registerMetaItems(this.hatsData, classes.KGSaveEdit.AchievementMeta, "hats");
	},

	get: function (name) {
		return this.achievementsByName[name];
	},

	getHat: function (name) {
		return this.hatsByName[name];
	},

	renderTabBlock: function () {
		this.achievementsBlockHeader = dojo.create("div", {class: "bottom-margin"}, this.tabBlockNode);

		this.achievementsBlock = dojo.create("table", {
			id: "achievementsBlock",
			class: "bottom-margin"
		}, this.tabBlockNode);

		this.hatsBlock = dojo.create("table", {
			id: "hatsBlock",
			innerHTML: '<tr><th colspan="2">A Secret Council of Hats</th></tr>'
		}, this.tabBlockNode);
		this.hatsBlockHeader = this.hatsBlock.children[0];
	},

	render: function () {
		this.game.callMethods(this.achievements, "render", this.achievementsBlock, "achievement");
		this.game.callMethods(this.hats, "render", this.hatsBlock, "hat");
	},

	hasUnlocked: function () {
		for (var i = this.achievements.length - 1; i >= 0; i--) {
			if (this.achievements[i].unlocked) {
				return true;
			}
		}
		return false;
	},

	getVisible: function () {
		return this.hasUnlocked();
	},

	update: function () {
		var hasNewMarker = false;

		var completedAchievements = 0;
		var totalAchievements = 0;
		var completedStars = 0;
		var uncompletedStars = 0;

		for (var i = this.achievements.length - 1; i >= 0; i--) {
			var ach = this.achievements[i];
			ach.update();

			if (ach.hidden) {
				continue;
			}

			totalAchievements++;
			if (ach.unlocked) {
				completedAchievements++;
			}
			if (ach.hasStar) {
				if (ach.starUnlocked) {
					completedStars++;
				} else {
					uncompletedStars++;
				}
			}
			hasNewMarker = hasNewMarker || ach.isNewStar || ach.isNew;
		}

		var stars = "";
		for (i = completedStars; i > 0; --i) {
			stars += "&#9733;";
		}
		for (i = uncompletedStars; i > 0; --i) {
			stars += "&#9734;";
		}

		this.achievementsBlockHeader.innerHTML = $I("achievements.header", [completedAchievements, totalAchievements]) + stars;

		var councilUnlocked = this.councilUnlocked;
		for (i = this.hats.length - 1; i >= 0; i--) {
			var hat = this.hats[i];
			hat.update();
			councilUnlocked = councilUnlocked || hat.unlocked;
			hasNewMarker = hasNewMarker || hat.isNew;
		}
		this.councilUnlocked = councilUnlocked;

		dojo.toggleClass(this.hatsBlockHeader, "spoiler", !this.councilUnlocked || !this.game.science.get("metaphysics").owned());

		this.game._toggleNewMarker(this.tabWrapper, hasNewMarker);
	},

	updateTabMarker: function () {
		var hasNewMarker = false;
		for (var i = this.achievements.length - 1; i >= 0; i--) {
			var ach = this.achievements[i];
			if (ach.isNewStar || ach.isNew) {
				hasNewMarker = true;
				break;
			}
		}

		if (!hasNewMarker) {
			for (i = this.hats.length - 1; i >= 0; i--) {
				if (this.hats[i].isNew) {
					hasNewMarker = true;
					break;
				}
			}
		}
		this.game._toggleNewMarker(this.tabWrapper, hasNewMarker);
	},

	save: function (saveData) {
		saveData.achievements = this.game.filterMetadata(this.achievements, ["name", "unlocked", "starUnlocked"]);
		saveData.ach = {
			councilUnlocked: this.councilUnlocked,
			hats: this.game.filterMetadata(this.hats, ["name", "unlocked"])
		};
	},

	load: function (saveData) {
		this.loadMetadata(saveData, "achievements", "get", function (ach, saveAch) {
			ach.set("unlocked", saveAch.unlocked);
			ach.isNew = false;
			if (ach.hasStar) {
				ach.isNewStar = false;
				ach.set("starUnlocked", saveAch.starUnlocked);
			}
		}, true);

		if (saveData.ach) {
			this.councilUnlocked = saveData.ach.councilUnlocked || false;
			this.loadMetadata(saveData, "ach.hats", "getHat", function (hat, saveHat) {
				hat.isNew = false;
				hat.set("unlocked", saveHat.unlocked);
			});
		}
	}
});


dojo.declare("classes.KGSaveEdit.AchievementMeta", [classes.KGSaveEdit.GenericItem], {
	constructor: function () {
		this.unlocked = Boolean(this.unlocked);
		this.isNew = false;
	},

	render: function (parent) {
		this.seti18n();

		// TODO turn the title attributes into proper tooltips?

		this.domNode = dojo.create("tr", {
			class: "achievement",
			innerHTML: '<td title="' + this.description + '">' + (this.title || this.name) + "</td><td></td><td></td>"
		}, parent);
		this.nameNode = this.domNode.children[0];

		var input = this.game._createCheckbox($I("KGSaveEdit.achievements.earned"), this.domNode.children[1], this, "unlocked");
		this.unlockedLabel = input.label;
		on(input.label, mouse.enter, dojo.hitch(this, function () {
			if (this.isNew) {
				this.isNew = false;
				dojo.removeClass(this.unlockedLabel, "newMarker");
				this.metaObj.updateTabMarker();
			}
		}));

		if (this.hasStar) {
			input = this.game._createCheckbox((this.starUnlocked ? "&#9733;" : "&#9734;"),
				this.domNode.children[2], this, "starUnlocked");
			this.starUnlockedLabel = input.label;
			this.starText = input.text;
			if (this.starDescription) {
				input.label.title = this.starDescription;
			}
			on(input.label, mouse.enter, dojo.hitch(this, function () {
				if (this.isNewStar) {
					this.isNewStar = false;
					dojo.removeClass(this.starUnlockedLabel, "newMarker");
					this.metaObj.updateTabMarker();
				}
			}));
		}
	},

	update: function () {
		var wasUnlocked = this.unlocked;
		if (this.condition) {
			var unlocked = this.condition();

			if (unlocked) {
				this.game.setCheckbox(this.unlockedNode, unlocked, true, true);

			} else if (this.unlocked !== this.unlockedNode.prevChecked) {
				this.game.setCheckbox(this.unlockedNode, this.unlockedNode.prevChecked, true, true);
			}
			this.game.toggleDisabled(this.unlockedNode, unlocked);

			if (wasUnlocked !== this.unlocked) {
				this.isNew = this.unlocked;
			}
			this.game._toggleNewMarker(this.unlockedLabel, this.isNew);

			dojo.toggleClass(this.domNode, "hidden", this.hidden && !this.unlocked);
		}

		if (this.hasStar) {
			var starWasUnlocked = this.starUnlocked;

			var starUnlocked = this.starCondition();
			if (starUnlocked) {
				this.game.setCheckbox(this.starUnlockedNode, starUnlocked, true, true);
			} else if (this.starUnlocked !== this.starUnlockedNode.prevChecked) {
				this.game.setCheckbox(this.starUnlockedNode, this.starUnlockedNode.prevChecked, true, true);
			}
			this.game.toggleDisabled(this.starUnlockedNode, starUnlocked);

			if (starWasUnlocked !== this.starUnlocked) {
				this.isNewStar = this.starUnlocked;
			}
			this.game._toggleNewMarker(this.starUnlockedLabel, this.isNewStar);

			this.starText.innerHTML = this.starUnlocked ? "&#9733;" : "&#9734;";
		}
	}
});


dojo.declare("classes.KGSaveEdit.StatsManager", [classes.KGSaveEdit.UI.Tab, classes.KGSaveEdit.Manager], {
	statsData: [
		{
			name: "totalKittens",
			title: "stats.kittens.total",
			val: 0,
			compareVal: function (game) {
				return game.resPool.get("kittens").value;
			},
			unlocked: true
		}, {
			name: "kittensDead",
			title: "stats.kittens.dead",
			val: 0,
			compareVal: function (game) {
				return game.deadKittens;
			},
			unlocked: true
		}, {
			name: "totalYears",
			title: "stats.years.total",
			val: 0,
			compareVal: function (game) {
				return game.calendar.year;
			},
			unlocked: true
		}, {
			name: "totalResets",
			title: "stats.resets.total",
			val: 0
		}, {
			name: "totalParagon",
			title: "stats.paragon.total",
			val: 0,
			compareVal: function (game) {
				var paragon = game.resPool.get("paragon").value;
				if (game.editorOptions.includeSpentParagon) {
					var burnedParagon = game.resPool.get("burnedParagon").value;
					paragon += burnedParagon + game.prestige.getSpentParagon();
				}
				return paragon;
			}
		}, {
			name: "eventsObserved",
			title: "stats.events.total",
			val: 0
		}, {
			name: "unicornsSacrificed",
			title: "stats.unicorns",
			val: 0,
			inputClass: "integerInput abbrInput"
		}, {
			name: "buildingsConstructed",
			title: "stats.buildings",
			val: 0
		}, {
			name: "totalClicks",
			title: "stats.clicks.total",
			val: 0
		}, {
			name: "totalTrades",
			title: "stats.trades.total",
			val: 0
		}, {
			name: "totalCrafts",
			title: "stats.crafts.total",
			val: 0
		}, {
			name: "averageKittens",
			title: "stats.kittens.avg",
			val: 0,
			calculate: function (game) {
				var years = game.stats.getStat("totalYears").val;
				var kittens = game.stats.getStat("totalKittens").val;
				return years != 0 ? kittens / Math.ceil(years / 100) : 0;
			}
		}
	],

	statsCurrentData: [
		{
			name: "totalTrades",
			title: "stats.trades.current",
			val: 0
		}, {
			name: "totalCrafts",
			title: "stats.crafts.current",
			val: 0
		}, {
			name: "averageKittens",
			title: "stats.kittens.current",
			val: 0,
			calculate: function (game) {
				var years = game.calendar.year;
				var kittens = game.resPool.get("kittens").value;
				return years != 0 ? kittens / Math.ceil(years / 100) : 0;
			}
		}, {
			name: "timePlayed",
			title: "stats.time.current",
			val: "",
			calculate: function (game) {
				return game.toDisplaySeconds(game.calendar.trueYear() * game.calendar.seasonsPerYear * game.calendar.daysPerSeason * game.calendar.ticksPerDay / game.ticksPerSecond);
			}
		}
	],

	tabName: "Stats",
	getVisible: function () {
		return this.game.karmaKittens > 0 || this.game.science.get("math").owned();
	},

	stats: null,
	statsByName: null,
	allStats: null,

	statsCurrent: null,
	statsCurrentByName: null,

	constructor: function () {
		this.i18nKeys = {tabName: "tab.name.stats"};
		this.allStats = [];

		var statHandler = function (stat) {
			this.allStats.push(stat);
		};

		this.registerMetaItems(this.statsData, classes.KGSaveEdit.StatsMeta, "stats", statHandler);
		this.registerMetaItems(this.statsCurrentData, classes.KGSaveEdit.StatsMeta, "statsCurrent", statHandler);
	},

	renderTabBlock: function () {
		dojo.create("div", {innerHTML: $I("stats.group.all")}, this.tabBlockNode);
		this.statsBlock = dojo.create("table", {
			id: "statsBlock",
			class: "bottom-margin"
		}, this.tabBlockNode);

		dojo.create("div", {innerHTML: $I("stats.group.current")}, this.tabBlockNode);
		this.statsCurrentBlock = dojo.create("table", {id: "statsCurrentBlock"}, this.tabBlockNode);
	},

	render: function () {
		this.game.callMethods(this.stats, "render", this.statsBlock);
		this.game.callMethods(this.statsCurrent, "render", this.statsCurrentBlock);
	},

	getStat: function (name) {
		return this.statsByName[name];
	},

	getStatCurrent: function (name) {
		return this.statsCurrentByName[name];
	},

	update: function () {
		this.game.callMethods(this.allStats, "update");
	},

	save: function (saveData) {
		saveData.stats = this.game.filterMetadata(this.stats, ["name", "val"]);
		saveData.statsCurrent = this.game.filterMetadata(this.statsCurrent, ["name", "val"]);
	},

	load: function (saveData) {
		this.loadMetadata(saveData, "stats", "getStat", function (stat, saveStat) {
			stat.set("val", num(saveStat.val));
		}, true);
		this.loadMetadata(saveData, "statsCurrent", "getStatCurrent", function (stat, saveStat) {
			var saveVal = saveStat.val;
			if (typeof stat.val === "number") {
				saveVal = num(saveVal);
			}
			stat.set("val", saveVal);
		}, true);
	}
});


dojo.declare("classes.KGSaveEdit.StatsMeta", classes.KGSaveEdit.GenericItem, {
	constructor: function () {
		this.i18nKeys = {title: this.title};
	},

	render: function (parent) {
		this.seti18n();

		this.domNode = dojo.create("tr", {
			class: "statastic",
			innerHTML: "<td>" + this.title + "</td><td></td>"
		}, parent);

		if (this.calculate) {
			this.valText = dojo.create("span", {
				innerHTML: this.val
			}, this.domNode.children[1]);
		} else {
			this.game._createInput({
				class: this.inputClass || "integerInput"
			}, this.domNode.children[1], this, "val");
		}
	},

	update: function () {
		var val = this.val;

		if (this.compareVal && this.game.editorOptions.fixStats) {
			val = Math.max(val, this.compareVal(this.game)) || 0;
		}

		if (val !== this.val) {
			this.set("val", val, true, true);
		}

		if (this.calculate) {
			this.valText.innerHTML = this.val;
		}
	}
});

});
