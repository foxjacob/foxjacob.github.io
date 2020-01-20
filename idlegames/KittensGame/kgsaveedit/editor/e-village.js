/* global dojo, require, classes, $I, num */

require(["dojo/on"], function (on) {
"use strict";

dojo.declare("classes.KGSaveEdit.VillageManager", [classes.KGSaveEdit.UI.Tab, classes.KGSaveEdit.Manager], {
	jobsData: [
		{
			name: "woodcutter",
			unlocked: true,
			modifiers: {
				"wood": 0.018
			},
			flavor: "village.woodcutter.flavor"
		}, {
			name: "farmer",
			requires: {tech: ["agriculture"]},
			modifiers: {
				"catnip": 1
			}
		}, {
			name: "scholar",
			requires: {buildings: ["library"]},
			modifiers: {},
			calculateEffects: function (self, game) {
				var modifiers = {
					"science": 0.035
				};

				if (game.workshop.get("astrophysicists").owned()) {
					modifiers["starchart"] = 0.0001; //i'm not entirely sure if it is too little or too much
				}

				self.modifiers = modifiers;
			}
		}, {
			name: "hunter",
			requires: {tech: ["archery"]},
			modifiers: {
				"manpower": 0.06
			},
			flavor: true
		}, {
			name: "miner",
			requires: {buildings: ["mine"]},
			modifiers: {
				"minerals": 0.05
			},
			flavor: true
		}, {
			name: "priest",
			requires: function (game) {
				return game.challenges.currentChallenge !== "atheism" && game.science.get("theology").owned();
			},
			modifiers: {
				"faith": 0.0015
			}
		}, {
			name: "geologist",
			requires: {tech: ["archeology"]},
			modifiers: {},
			calculateEffects: function (self, game) {
				var coal = 0.015;
				var gold = 0;

				if (game.workshop.get("miningDrill").owned()) {
					coal += 0.010;
					gold += 0.0005;
				}
				if (game.workshop.get("unobtainiumDrill").owned()) {
					coal += 0.015;
					gold += 0.0005;
				}
				if (game.workshop.get("geodesy").owned()) {
					coal += 0.0075;
					gold += 0.0008;
				} else {
					// Drills don't add gold before geodesy.
					gold = 0;
				}

				var modifiers = {
					"coal": coal
				};
				if (gold > 0) {
					modifiers["gold"] = gold;
				}

				self.modifiers = modifiers;
			}
		}, {
			name: "engineer",
			requires: {tech: ["mechanization"]},
			modifiers: {}
		}
	],

	traits: [
		{name: "scientist"},
		{name: "manager"},
		{name: "engineer"},
		{name: "merchant"},
		{name: "wise"},
		{name: "metallurgist"},
		{name: "chemist"},
		{name: "none"}
	],

	jobs: null,
	jobsByName: null,

	traitsByName: null,

	tabName: "Small village",
	getVisible: function () {
		return this.game.resPool.get("kittens").owned() || this.game.resPool.get("zebras").owned() ||
			this.game.bld.get("hut").owned() || this.game.time.getVSU("usedCryochambers").owned();
	},

	leader: null,

	happiness: 1,
	catnipPerKitten: -0.85,

	kittens: null, //current kittens
	generatedKittens: null, //generated kittens
	censusKittens: null, //subset of kittens, used for census
	censusPage: 1, //current census page
	censusPageMax: 1, //highest census page
	kittensPerPage: 10,

	selectedKittens: null,

	constructor: function (game) {
		this.jobs = [];
		this.jobsByName = {};
		this.jobNames = [];

		this.kittens = [];
		this.generatedKittens = [];
		this.censusKittens = [];
		this.censusPageKittens = [];
		this.traitsByName = {};

		this.selectedKittens = [];

		this.map = new classes.KGSaveEdit.villageMap(game);

		for (var i = 0, len = this.jobsData.length; i < len; i++) {
			var job = new classes.KGSaveEdit.JobMeta(game, this.jobsData[i]);
			job.metaObj = this;

			this.jobs.push(job);
			this.jobNames.push(job.name);
			this.jobsByName[job.name] = job;
		}

		for (i = 0, len = this.traits.length; i < len; i++) {
			var trait = this.traits[i];
			this.traitsByName[trait.name] = trait;
		}
	},

	getJob: function (name) {
		return this.jobsByName[name];
	},

	getJobLimit: function (jobName) {
		if (jobName === "engineer") {
			return this.game.bld.get("factory").val;
		} else {
			return 100000;
		}
	},

	getTrait: function (name) {
		return this.traitsByName[name] || this.traitsByName.none;
	},

	getEffect: function (effectName) {
		return this.map.getEffect(effectName);
	},

	renderTraitSelect: function (parent, pos) {
		var sel = dojo.create("select", null, parent, pos);

		for (var i = 0; i < this.traits.length; i++) {
			var trait = this.traits[i];
			dojo.create("option", {
				value: trait.name,
				innerHTML: trait.title
			}, sel);
		}
		return sel;
	},

	renderTabBlock: function () {
		var self = this;
		var game = self.game;

		var i, len, job, trait;

		for (i = self.traits.length - 1; i >= 0; i--) {
			trait = self.traits[i];
			trait.title = $I("village.trait." + trait.name);
		}

		var div = dojo.create("div", {
			innerHTML: $I("village.general.free.kittens.label") + ' <span id="freeKittensSpan">0 / 0</span>'
		}, self.tabBlockNode);
		self.freeKittensSpan = div.children[0];

		self.jobsBlock = dojo.create("table", {
			id: "jobsBlock",
			class: "bottom-margin"
		}, self.tabBlockNode);

		for (i = 0, len = self.jobs.length; i < len; i++) {
			job = self.jobs[i];
			job.render();
			dojo.place(job.domNode, self.jobsBlock);
		}

		self.censusBlock = dojo.create("div", {
			id: "censusBlock"
		}, self.tabBlockNode);

		self.governmentBlock = dojo.create("div", {
			class: "noAnarchy",
			id: "governmentBlock"
		}, self.censusBlock);

		self.unassignLeaderBlock = dojo.create("div");

		self.unassignLeaderBtn = dojo.create("span", {
			class: "separated",
			innerHTML: '<a href="#">' + $I("village.btn.unassign") + "</a>"
		}, self.unassignLeaderBlock);

		on(self.unassignLeaderBtn.children[0], "click", function () {
			if (self.leader) {
				self.leader.fireLeader();
				game.update();
			}
		});

		self.unassignLeaderJobBtn = dojo.create("span", {
			class: "separated",
			innerHTML: '<a href="#">' + $I("KGSaveEdit.village.leader.unassignJob") + "</a>"
		}, self.unassignLeaderBlock);

		on(self.unassignLeaderJobBtn.children[0], "click", function () {
			if (self.leader) {
				self.leader.quitJob();
				game.update();
			}
		});

		div = dojo.create("div", {
			class: "censusLine"
		}, self.censusBlock);

		self.censusJobFilterNode = dojo.create("select", {
			innerHTML: '<option value="all">' + $I("village.census.filter.all") + "</option>"
		}, div);

		for (i = 0, len = self.jobs.length; i < len; i++) {
			job = self.jobs[i];
			job.filterNode = dojo.create("option", {
				value: job.name,
				innerHTML: job.title
			}, self.censusJobFilterNode);
		}

		self.governmentFilter = dojo.create("option", {
			value: "leader",
			innerHTML: $I("village.census.lbl.leader")
		}, self.censusJobFilterNode);

		self.selectedFilter = dojo.create("option", {
			value: "selected",
			innerHTML: $I("KGSaveEdit.village.census.select.selected")
		}, self.censusJobFilterNode);

		on(self.censusJobFilterNode, "change", function () {
			self.takeCensus();
		});

		self.censusTraitFilterNode = dojo.create("select", {
			innerHTML: '<option value="all">' + $I("village.trait.filter.all") + "</option>"
		}, div);

		for (i = 0, len = self.traits.length; i < len; i++) {
			trait = self.traits[i];
			trait.filterNode = dojo.create("option", {
				value: trait.name,
				innerHTML: trait.title
			}, self.censusTraitFilterNode);
		}

		on(self.censusTraitFilterNode, "change", function () {
			self.takeCensus();
		});

		self.censusPageBlock = dojo.create("span", {
			id: "censusPageBlock",
			class: "floatRight hidden"
		}, div);

		self.censusPageFirst = dojo.create("a", {
			href: "#",
			innerHTML: "&lt;&lt;"
		}, self.censusPageBlock);
		on(self.censusPageFirst, "click", function () {
			game.setInput(self.censusPageNode, 1);
		});

		self.censusPagePrev = dojo.create("a", {
			href: "#",
			innerHTML: "&lt;"
		}, self.censusPageBlock);
		on(self.censusPagePrev, "click", function () {
			game.setInput(self.censusPageNode, self.censusPage - 1);
		});

		var span = dojo.create("span", {innerHTML: $I("KGSaveEdit.village.census.page") + " "}, self.censusPageBlock);

		var input = game._createInput({class: "integerInput"}, span, self, "censusPage");
		input.minValue = 1;
		input.handler = function () { self.renderCensus(); };

		self.censusPageCount = dojo.create("span", null, span);

		self.censusPageNext = dojo.create("a", {
			href: "#",
			innerHTML: "&gt;"
		}, self.censusPageBlock);
		on(self.censusPageNext, "click", function () {
			game.setInput(self.censusPageNode, Math.min(self.censusPage + 1, self.censusPageMax));
		});

		self.censusPageLast = dojo.create("a", {
			href: "#",
			innerHTML: "&gt;&gt;"
		}, self.censusPageBlock);
		on(self.censusPageLast, "click", function () {
			game.setInput(self.censusPageNode, self.censusPageMax);
		});

		self.selectedKittensBlock = dojo.create("div", {
			class: "censusLine",
			innerHTML: "<span>0 kittens selected</span> "
		}, self.censusBlock);

		self.selectedKittensCountSpan = self.selectedKittensBlock.children[0];

		self.massEditStartButton = game._createButton(
			{
				value: $I("KGSaveEdit.village.census.edit"),
				disabled: true
			},
			self.selectedKittensBlock, function () {
				self.showMassEdit();
			}
		);

		self.massEditSelectKittensSpan = dojo.create("span", {
			class: "floatRight",
			innerHTML: $I("KGSaveEdit.village.census.select")
		}, self.selectedKittensBlock);

		self.massEditSelectAllNode = game._createCheckbox($I("KGSaveEdit.village.census.select.all"), self.massEditSelectKittensSpan).cbox;
		on(self.massEditSelectAllNode, "click", function () {
			for (var i = self.kittens.length - 1; i >= 0; i--) {
				self.kittens[i].set("selected", this.checked, false, true);
			}
			self.updateSelectedKittens();
		});

		self.massEditSelectFilterNode = game._createCheckbox($I("KGSaveEdit.village.census.select.filtered"), self.massEditSelectKittensSpan).cbox;
		on(self.massEditSelectFilterNode, "click", function () {
			for (var i = self.censusKittens.length - 1; i >= 0; i--) {
				self.censusKittens[i].set("selected", this.checked, false, true);
			}
			self.updateSelectedKittens();
		});

		self.massEditSelectPageNode = game._createCheckbox($I("KGSaveEdit.village.census.select.page"), self.massEditSelectKittensSpan).cbox;
		on(self.massEditSelectPageNode, "click", function () {
			for (var i = self.censusPageKittens.length - 1; i >= 0; i--) {
				self.censusPageKittens[i].set("selected", this.checked, false, true);
			}
			self.updateSelectedKittens();
		});

		self.censusKittensBlock = dojo.create("div", null, self.censusBlock);

		self.noCensusKittensBlock = dojo.create("div", {
			class: "ital",
			innerHTML: $I("KGSaveEdit.village.census.empty")
		}, self.censusKittensBlock);

		self.takeCensus(true); // re-render kittens
	},

	renderMassEditNode: function () {
		var self = this;
		var game = self.game;

		self.massEditNode = dojo.create("div", {
			id: "massEditKittensBlock",
			class: "hideSiblings hidden"
		}, self.censusKittensBlock, "before");

		var methodKitten = new classes.KGSaveEdit.Kitten(game);

		dojo.empty(self.massEditNode);

		var div = dojo.create("div", {
			class: "censusLine",
			innerHTML: "<span>Editing 0 kittens</span> &nbsp; <span> &nbsp; </span>"
		}, self.massEditNode);
		this.massEditHeaderSpan = div.children[0];

		game._createButton(
			{value: $I("KGSaveEdit.village.edit.save")}, div.children[1], function () {
				if (self.massEditKittens()) {
					dojo.addClass(self.massEditNode, "hidden");
					if (self.censusTraitFilterNode.value !== "all" && self.massEditTraitControl.checked) {
						self.takeCensus();
					}
					game.update();
				}
			}, "first"
		);

		game._createButton(
			{value: $I("KGSaveEdit.village.edit.cancel")}, div.children[1], function () {
				dojo.addClass(self.massEditNode, "hidden");
			}
		);

		var table = dojo.create("table", null, self.massEditNode);

		var tr = dojo.create("tr", {
			innerHTML: "<td></td><td>" + $I("KGSaveEdit.village.edit.name") + '</td><td></td><td><a href="#">' + $I("KGSaveEdit.village.edit.random") + "</a> </td>"
		}, table);

		var cbox = dojo.create("input", {
			type: "checkbox",
			class: "massEditKittensPropControl",
			title: $I("KGSaveEdit.village.massedit.editProperty")
		}, tr.children[0]);
		self.massEditNameControl = cbox;

		self.massEditNameNode = game._createInput({class: "textInput"}, tr.children[2]);
		self.massEditNameAllRandom = game._createCheckbox($I("KGSaveEdit.village.massedit.random.all"), tr.children[3]).cbox;
		on(tr.children[3].children[0], "click", function () {
			self.massEditNameNode.value = methodKitten.getRandomName();
		});

		tr = dojo.create("tr", {
			innerHTML: "<td></td><td>" + $I("KGSaveEdit.village.edit.surname") + '</td><td></td><td><a href="#">' + $I("KGSaveEdit.village.edit.random") + "</a> </td>"
		}, table);

		self.massEditSurnameControl = dojo.place(dojo.clone(cbox), tr.children[0]);
		self.massEditSurnameNode = game._createInput({class: "textInput"}, tr.children[2]);
		self.massEditSurnameAllRandom = game._createCheckbox($I("KGSaveEdit.village.massedit.random.all"), tr.children[3]).cbox;
		on(tr.children[3].children[0], "click", function () {
			self.massEditSurnameNode.value = methodKitten.getRandomSurname();
		});

		tr = dojo.create("tr", {
			innerHTML: "<td></td><td>" + $I("KGSaveEdit.village.edit.age") + '</td><td></td><td><a href="#">' + $I("KGSaveEdit.village.edit.random") + "</a> </td>"
		}, table);

		self.massEditAgeControl = dojo.place(dojo.clone(cbox), tr.children[0]);
		self.massEditAgeNode = game._createInput({class: "integerInput"}, tr.children[2], null, null, null, true);
		self.massEditAgeAllRandom = game._createCheckbox($I("KGSaveEdit.village.massedit.random.all"), tr.children[3]).cbox;
		on(tr.children[3].children[0], "click", function () {
			self.massEditAgeNode.value = methodKitten.getRandomAge();
		});

		tr = dojo.create("tr", {
			innerHTML: "<td></td><td>" + $I("KGSaveEdit.village.edit.trait") + '<td></td><td><a href="#">' + $I("KGSaveEdit.village.edit.random") + "</a> </td>"
		}, table);

		self.massEditTraitControl = dojo.place(dojo.clone(cbox), tr.children[0]);
		self.massEditTraitNode = self.renderTraitSelect(tr.children[2]);
		self.massEditTraitNode.defaultVal = "none";
		self.massEditTraitAllRandom = game._createCheckbox($I("KGSaveEdit.village.massedit.random.all"), tr.children[3]).cbox;
		on(tr.children[3].children[0], "click", function () {
			game.setSelectByValue(self.massEditTraitNode, methodKitten.getRandomTrait().name);
		});

		tr = dojo.create("tr", {
			class: "noAnarchy",
			innerHTML: "<td></td><td>" + $I("KGSaveEdit.village.edit.rank") + "</td><td></td><td></td>"
		}, table);

		self.massEditRankControl = dojo.place(dojo.clone(cbox), tr.children[0]);
		self.massEditRankNode = game._createInput({class: "integerInput expEdit"}, tr.children[2], null, null, null, true);

		tr = dojo.create("tr", {
			class: "noAnarchy",
			innerHTML: "<td></td><td>" + $I("KGSaveEdit.village.edit.exp") + "</td><td></td><td></td>"
		}, table);

		self.massEditExpControl = dojo.place(dojo.clone(cbox), tr.children[0]);
		self.massEditExpNode = game._createInput({class: "expEdit"}, tr.children[2], null, null, null, true);
		self.massEditExpSetExpected = game._createCheckbox($I("KGSaveEdit.village.massedit.exp.setExpected"), tr.children[3]).cbox;

		// dojo.create("div", {
		// 	class: "noAnarchy",
		// 	innerHTML: "Job skills"
		// }, this.massEditNode);

		table = dojo.create("table", {
			class: "noAnarchy"
		}, this.massEditNode);

		var handle = function () {
			var skill = "";
			var exp = this.expNode.parsedValue;
			if (exp > 0) {
				var bonus = "";
				if (this.getBonus) {
					bonus = methodKitten.getSkillBonus(this.name, exp, 0, true);
				}
				skill = bonus + self.getSkillLevel(exp);
			}
			this.skillNode.innerHTML = skill;
		};

		var obj = {getBonus: true};
		tr = dojo.create("tr", {
			innerHTML: '<td></td><td title="' + $I("KGSaveEdit.village.massedit.kittenjob.title") + '">' +
				$I("KGSaveEdit.village.massedit.kittenjob") + '</td><td> <span class="expectedRank"></span></td>'
		}, table);

		obj.controlNode = dojo.place(dojo.clone(cbox), tr.children[0]);
		obj.expNode = this.game._createInput({class: "expEdit"},
			tr.children[2], null, null, "first", true);
		obj.expNode.handler = dojo.hitch(obj, handle);

		obj.skillNode = tr.children[2].children[1];
		self.massEditCurrentJobSkill = obj;

		this.massEditJobs = [];

		for (var i = 0, len = self.jobs.length; i < len; i++) {
			var job = self.jobs[i];
			var massEditJob = {
				name: job.name,
				title: job.title
			};
			tr = dojo.create("tr", {
				innerHTML: "<td></td><td>" + job.title + '</td><td> <span class="expectedRank"></span></td>'
			}, table);

			massEditJob.controlNode = dojo.place(dojo.clone(cbox), tr.children[0]);
			massEditJob.expNode = this.game._createInput({class: "expEdit"},
				tr.children[2], null, null, "first", true);
			massEditJob.expNode.handler = dojo.hitch(massEditJob, handle);

			massEditJob.skillNode = tr.children[2].children[1];

			this.massEditJobs.push(massEditJob);
		}
	},

	showMassEdit: function () {
		var game = this.game;
		var count = this.selectedKittens.length;
		if (!count) {
			return;
		}

		if (!this.massEditNode) {
			this.renderMassEditNode();
		}

		dojo.removeClass(this.massEditNode, "hidden");

		var header = count === 1 ? $I("KGSaveEdit.village.massedit.header.one") : $I("KGSaveEdit.village.massedit.header.many", [count]);
		this.massEditHeaderSpan.innerHTML = header;

		dojo.query("#massEditKittensBlock table input").forEach(function (input) {
			if (input.type === "checkbox") {
				input.checked = false;
			} else {
				game.setInput(input, input.placeholder || "");
			}
		});

		game.setSelectByValue(this.massEditTraitNode, "none");
	},

	massEditKittens: function () {
		var count = this.selectedKittens.length;
		var msg = count === 1 ? $I("KGSaveEdit.village.massedit.confirm.one") : $I("KGSaveEdit.village.massedit.confirm.many", [count]);
		if (
			!this.massEditNode || dojo.hasClass(this.massEditNode, "hidden") ||
			!count || !dojo.query(".massEditKittensPropControl:checked").length ||
			!confirm(msg)
		) {
			return false;
		}

		var setTrait = this.getTrait(this.massEditTraitNode.value);

		for (var i = count - 1; i >= 0; i--) {
			var kitten = this.selectedKittens[i];
			var data = kitten.save(true);

			if (this.massEditNameControl.checked) {
				data.name = this.massEditNameAllRandom.checked ? kitten.getRandomName() : this.massEditNameNode.value;
			}

			if (this.massEditSurnameControl.checked) {
				data.surname = this.massEditSurnameAllRandom.checked ? kitten.getRandomSurname() : this.massEditSurnameNode.value;
			}

			if (this.massEditAgeControl.checked) {
				data.age = this.massEditAgeAllRandom.checked ? kitten.getRandomAge() : this.massEditAgeNode.parsedValue;
			}

			if (this.massEditTraitControl.checked) {
				data.trait = this.massEditTraitAllRandom.checked ? kitten.getRandomTrait() : setTrait;
			}

			if (this.massEditRankControl.checked) {
				data.rank = this.massEditRankNode.parsedValue;
			}

			var setCurrentSkill = this.massEditCurrentJobSkill.controlNode.checked;
			var skillExp = 0;
			var skills = data.skills;

			if (kitten.job && setCurrentSkill) {
				skills[kitten.job] = this.massEditCurrentJobSkill.expNode.parsedValue;
			}

			for (var j = 0; j < this.massEditJobs.length; j++) {
				var massEditJob = this.massEditJobs[j];
				var jobName = massEditJob.name;

				if ((!setCurrentSkill || jobName !== kitten.job) && massEditJob.controlNode.checked) {
					skills[jobName] = massEditJob.expNode.parsedValue;
				}
				skillExp += skills[jobName] || 0;
			}

			if (this.massEditExpControl.checked) {
				var exp = this.massEditExpNode.parsedValue;
				if (this.massEditExpSetExpected.checked) {
					exp = skillExp - this.getRankExpSum(data.rank);
				}
				data.exp = Math.max(exp, 0) || 0;
			}

			kitten.load(data);
		}

		return true;
	},

	addKittens: function (limit) {
		while (this.generatedKittens.length < limit) {
			var kitten = new classes.KGSaveEdit.Kitten(this.game);
			this.generatedKittens.push(kitten);
		}
	},

	getKittens: function () {
		return this.game.resPool.get("kittens").value;
	},

	getFreeKittens: function () {
		var total = 0;
		for (var i = this.jobs.length - 1; i >= 0; i--) {
			total += this.jobs[i].value;
		}

		return this.getKittens() - total;
	},

	getFreeEngineer: function () {
		return this.game.workshop.freeEngineers;
	},

	getTabName: function () {
		var title = $I(this.getVillageTitle());
		var kittens = this.getFreeKittens();
		if (kittens > 0) {
			title += " (" + kittens + ")";
		}
		return title;
	},

	getVillageTitle: function () {
		var kittens = this.getKittens();
		if (kittens > 5000) {      return "village.tab.title.elders"; } //you gotta be kitten me
		else if (kittens > 2000) { return "village.tab.title.union"; }
		else if (kittens > 1500) { return "village.tab.title.council"; }
		else if (kittens > 1200) { return "village.tab.title.consortium"; }
		else if (kittens > 1000) { return "village.tab.title.civilisation"; } //all rights reserved, yada yada.
		else if (kittens > 900) {  return "village.tab.title.society"; }
		else if (kittens > 800) {  return "village.tab.title.reich"; }
		else if (kittens > 700) {  return "village.tab.title.federation"; }
		else if (kittens > 600) {  return "village.tab.title.hegemony"; }
		else if (kittens > 500) {  return "village.tab.title.dominion"; }
		else if (kittens > 400) {  return "village.tab.title.imperium"; }
		else if (kittens > 300) {  return "village.tab.title.empire"; }
		else if (kittens > 250) {  return "village.tab.title.megapolis"; }
		else if (kittens > 200) {  return "village.tab.title.metropolis"; }
		else if (kittens > 150) {  return "village.tab.title.city"; }
		else if (kittens > 100) {  return "village.tab.title.town"; }
		else if (kittens > 50) {   return "village.tab.title.smalltown"; }
		else if (kittens > 30) {   return "village.tab.title.settlement"; }
		else if (kittens > 15) {   return "village.tab.title.village"; }
		else if (kittens > 0) {    return "village.tab.title.smallvillage"; }
		return "village.tab.title.outpost";
	},

	getEffectLeader: function (trait, defaultObject) {
		if (this.game.challenges.currentChallenge !== "anarchy" && this.leader) {
			var leaderTrait = this.leader.trait["name"];
			if (leaderTrait === trait) {
				var burnedParagonRatio = 1 + this.game.prestige.getBurnedParagonRatio();
				// Modify the defautlObject depends on trait
				switch (trait) {
					case "engineer": // Crafting bonus
						defaultObject = 0.05 * burnedParagonRatio;
						break;
					/*case "merchant": // Trading bonus
						defaultObject = 0.030 * burnedParagonRatio;
						break;
					case "manager": // Hunting bonus
						defaultObject = 0.5 * burnedParagonRatio;
						break;*/
					case "scientist": // Science prices bonus
						for (var i = 0; i < defaultObject.length; i++) {
							if (defaultObject[i].name === "science") {
								defaultObject[i].val -= defaultObject[i].val * this.game.getHyperbolicEffect(0.05 * burnedParagonRatio, 1.0); //5% before BP
							}
						}
						break;
					case "wise": // Religion bonus
						for (i = 0; i < defaultObject.length; i++) {
							if (defaultObject[i].name === "faith" || defaultObject[i].name === "gold") {
								defaultObject[i].val -= defaultObject[i].val * this.game.getHyperbolicEffect(0.09 + 0.01 * burnedParagonRatio, 1.0); //10% before BP
							}
						}
						break;
				}

			}
		}
		return defaultObject;
	},

	getLeaderDescription: function (job) {
		switch (job) {
			case "engineer":
				return $I("village.bonus.desc.engineer");
			case "merchant":
				return $I("village.bonus.desc.merchant");
			case "manager":
				return $I("village.bonus.desc.manager");
			case "scientist":
				return $I("village.bonus.desc.scientist");
			case "wise":
				return $I("village.bonus.desc.wise");
			default:
				return "";
		}
	},

	getResConsumption: function () {
		var kittens = this.kittens.length;

		var res = {
			"catnip": this.catnipPerKitten * kittens,
			"furs":  -0.01 * kittens,
			"ivory": -0.007 * kittens,
			"spice": -0.001 * kittens
		};
		return res;
	},

	getResProduction: function () {
		if (!this.resourceProduction) {
			this.updateResourceProduction(); //lazy synch
		}
		var res = dojo.clone(this.resourceProduction);

		//special hack for iron will mode
		var zebras = this.game.resPool.get("zebras").value;
		if (zebras > 0) {
			res["manpower"] = num(res["manpower"]) + 0.15; //zebras are a bit stronger than kittens
		}
		if (zebras > 1) {
			res["manpower"] += this.game.getHyperbolicEffect((zebras - 1) * 0.05, 2);
		}

		return res;
	},

	updateResourceProduction: function () {
		var productionRatio = (1 + this.game.getEffect("skillMultiplier")) / 4;

		var res = {};

		for (var i in this.kittens) {
			var kitten = this.kittens[i];
			if (kitten.job) {
				var job = this.getJob(kitten.job);
				if (job) {
					if (this.game.challenges.currentChallenge === "atheism" && job.name === "priest") {
						continue;
					}

					var mod = this.getValueModifierPerSkill(num(kitten.skills[kitten.job]));
					for (var jobResMod in job.modifiers) {

						var diff = job.modifiers[jobResMod] + job.modifiers[jobResMod] * ((mod - 1) * productionRatio);

						if (diff > 0) {
							if (kitten.isLeader) {
								diff *= this.getLeaderBonus(kitten.rank);
							}
							diff *= this.happiness; //alter positive resource production from jobs
						}

						if (res[jobResMod]) {
							res[jobResMod] += diff;
						} else {
							res[jobResMod] = diff;
						}
					}

					if (job.name === "engineer" && typeof kitten.engineerSpeciality !== "undefined" && kitten.engineerSpeciality != null) {
						jobResMod = "ES" + kitten.engineerSpeciality;

						var automationBonus = this.game.getEffect(kitten.engineerSpeciality + "AutomationBonus") || 0;
						diff = 1 + automationBonus;

						var rankDiff = this.game.workshop.getCraft(kitten.engineerSpeciality).tier - kitten.rank;
						if (rankDiff > 0) {
							diff -= diff * rankDiff * 0.15;
						}

						diff += diff * (mod - 1) * productionRatio;

						if (diff > 0) {
							if (kitten.isLeader) {
								diff *= this.getLeaderBonus(kitten.rank);
							}
							diff *= this.happiness; //alter positive resource production from jobs
						}

						if (res[jobResMod]) {
							res[jobResMod] += diff;
						} else {
							res[jobResMod] = diff;
						}
					}
				}
			}
		}
		this.resourceProduction = res;
	},

	updateHappines: function () {
		var happiness = 100;
		var numKittens = this.getKittens();

		var unhappiness = (numKittens - 5) * 2;
		unhappiness *= 1 + this.game.getEffect("unhappinessRatio"); //limit ratio by 1.0 by 75% hyperbolic falloff

		if (numKittens > 5) {
			happiness -= unhappiness; //every kitten takes 2% of production rate if >5
		}

		var happinessBonus = this.game.getEffect("happiness");
		happiness += happinessBonus;

		//boost happiness/production by 10% for every uncommon/rare resource
		var resources = this.game.resPool.resources;
		for (var i = resources.length - 1; i >= 0; i--) {
			var res = resources[i];
			if (res.type !== "common" && res.owned()) {
				if (res.name !== "elderBox" || !this.game.resPool.get("wrappingPaper").owned()) {
					happiness += 10;
				}
			}
		}

		if (this.game.calendar.festivalDays) {
			happiness += 30;
		}

		happiness += this.game.resPool.get("karma").value; //+1% to the production per karma point

		var overpopulation = numKittens - this.maxKittens;
		if (overpopulation > 0) {
			happiness -= overpopulation * 2; //overpopulation penalty
		}

		if (happiness < 25) {
			happiness = 25;
		}

		this.happiness = happiness / 100;
	},

	updateSelectedKittens: function (skipUpdate) {
		if (this.massEditNode) {
			dojo.addClass(this.massEditNode, "hidden");
		}

		this.selectedKittens = dojo.filter(this.kittens, function (kitten) {
			return kitten.selected;
		});

		var count = this.selectedKittens.length;
		var text = count === 1 ? $I("KGSaveEdit.village.census.selectedKittens.one") : $I("KGSaveEdit.village.census.selectedKittens.many", [count]);
		this.selectedKittensCountSpan.innerHTML = text;
		this.massEditStartButton.disabled = count === 0;

		//census includes a call to updateSelectedKittenControls
		if (this.censusJobFilterNode.value === "selected") {
			this.takeCensus();
		} else if (!skipUpdate) {
			this.updateSelectedKittenControls();
		}
	},

	updateSelectedKittenControls: function () {
		this._updateMassEditSelectCbox(this.massEditSelectAllNode, this.kittens.length, this.selectedKittens.length);

		var censusKittensSelected = 0;
		for (var i = this.censusKittens.length - 1; i >= 0; i--) {
			if (this.censusKittens[i].selected) {
				censusKittensSelected++;
			} else if (censusKittensSelected > 0) {
				break;
			}
		}

		this._updateMassEditSelectCbox(this.massEditSelectFilterNode, this.censusKittens.length, censusKittensSelected);

		var pageKittensSelected = 0;
		if (this.censusPageKittens.length === this.censusKittens.length) {
			pageKittensSelected = censusKittensSelected;
		} else {
			for (i = this.censusPageKittens.length - 1; i >= 0; i--) {
				if (this.censusPageKittens[i].selected) {
					pageKittensSelected++;
				} else if (pageKittensSelected > 0) {
					break;
				}
			}
		}

		this._updateMassEditSelectCbox(this.massEditSelectPageNode, this.censusPageKittens.length, pageKittensSelected);
	},

	_updateMassEditSelectCbox: function (cbox, kittensCount, selected) {
		cbox.checked = kittensCount > 0 && selected === kittensCount;
		cbox.indeterminate = kittensCount > 0 && selected > 0 && selected < kittensCount;

		this.game.toggleDisabled(cbox, !kittensCount, "invisible");
	},

	getRankExp: function (rank) {
		return 500 * Math.pow(1.75, rank);
	},

	getRankExpSum: function (rank) {
		var exp = 0;
		for (var i = rank; i > 0; i--) {
			exp += this.getRankExp(i - 1);
		}
		return exp;
	},

	getLeaderBonus: function (rank) {
		return rank === 0 ? 1.0 : (rank + 1) / 1.4;
	},

	sortKittens: function (kittens) {
		// var getRankExp = this.getRankExp;
		kittens.sort(function (a, b) {
			// return ((b.rank ? getRankExp(b.rank) : 0) + b.exp) -
				// ((a.rank ? getRankExp(a.rank) : 0) + a.exp);
			return (b.rank - a.rank) || (b.exp - a.exp);
		});
	},

	skillToText: function (value) {
		if (value >= 9000) { return $I("village.skill.master"); }
		if (value >= 5000) { return $I("village.skill.proficient"); }
		if (value >= 2500) { return $I("village.skill.skilled"); }
		if (value >= 1200) { return $I("village.skill.competent"); }
		if (value >= 500)  { return $I("village.skill.adequate"); }
		if (value >= 100)  { return $I("village.skill.novice"); }
		return $I("village.skill.dabbling");
	},

	getSkillExpRange: function (value) {
		if (value >= 20000) { return [20000, value]; }
		if (value >= 9000)  { return [9000, 20000]; }
		if (value >= 5000)  { return [5000, 9000]; }
		if (value >= 2500)  { return [2500, 5000]; }
		if (value >= 1200)  { return [1200, 5000]; }
		if (value >= 500)   { return [500, 1200]; }
		if (value >= 100)   { return [100, 500]; }
		return [0, 100];
	},

	getValueModifierPerSkill: function (value) {
		if (this.game.challenges.currentChallenge !== "anarchy") {
			if (value >= 9000) { return 1.75; }
			if (value >= 5000) { return 1.50; }
			if (value >= 2500) { return 1.30; }
			if (value >= 1200) { return 1.18; }
			if (value >= 500)  { return 1.10; }
			if (value >= 100)  { return 1.05; }
		}
		return 1.0;
	},

	getSkillLevel: function (exp) {
		var range = this.getSkillExpRange(exp);
		var prevExp = range[0];
		var nextExp = range[1];

		var expDiff = exp - prevExp;
		var expRequired = nextExp - prevExp;

		var expPercent = exp === nextExp ? 100 : (expDiff / expRequired) * 100;

		return "(" + this.skillToText(exp) + " " + expPercent.toFixed() + "%" + ")";
	},

	assignJobs: function (job, count) {
		var free = this.getFreeKittens();
		var jobObj = this.getJob(job);
		if (!jobObj) {
			return;
		}
		free = Math.min(free, this.getJobLimit(job) - jobObj.value);

		if (count < 0) {
			count = free;
		}
		count = Math.min(Number(count) || 1, free);
		if (count <= 0 /*|| !jobObj.unlocked*/) {
			return;
		}

		var workers = dojo.filter(this.kittens, function (k) {
			return !k.job;
		}).sort(function (a, b) {
			return num(b.skills[job]) - num(a.skills[job]);
		});

		var govern = false;
		for (var i = 0; i < count; i++) {
			var worker = workers[i];
			worker.job = job;
			worker.engineerSpeciality = null;

			jobObj.value++;
			worker.renderInfo();
			if (worker.isLeader) {
				govern = true;
			}
		}

		jobObj.updateCount();

		if (govern) {
			this.renderGovernment();
		}
		if (job === this.censusJobFilterNode.value) {
			this.takeCensus();
		}
	},

	assignCraftJobs: function (craft, amt) {
		var freeKittens = dojo.filter(this.kittens, function (kitten) {
			return kitten.job === "engineer" && !kitten.engineerSpeciality;
		});

		if (this.game.village.leader && this.game.workshop.get("register").owned()) {
			freeKittens.sort(function (a, b) { return b.val - a.val; });
			freeKittens.sort(function (a, b) { return b.rank - a.rank; });
		}

		var end = Math.min(freeKittens.length, amt);
		for (var i = 0; i < end; i++) {
			freeKittens[i].engineerSpeciality = craft.name;
		}

		return end;
	},

	unassignJobs: function (job, amt) {
		var jobObj = this.getJob(job);
		if (!jobObj || !jobObj.value) {
			return;
		}
		if (amt < 0) {
			amt = jobObj.value;
		}
		amt = Math.min(Number(amt) || 1, jobObj.value);

		var workers = dojo.filter(this.kittens, function (k) {
			return k.job === job;
		}).sort(function (a, b) {
			return num(a.skills[job]) - num(b.skills[job] || 0);
		});

		var govern = false;
		for (var i = 0; i < amt; i++) {
			var worker = workers[i];
			worker.job = null;
			jobObj.value--;
			worker.renderInfo();

			this.unassignCraftJobIfEngineer(jobObj, worker);

			if (worker.isLeader) {
				govern = true;
			}
		}

		jobObj.updateCount();

		if (govern) {
			this.renderGovernment();
		}
		if (job === this.censusJobFilterNode.value) {
			this.takeCensus();
		}
	},

	unassignCraftJobIfEngineer: function (job, kitten) {
		if (job.name === "engineer" && kitten.engineerSpeciality) {
			var craft = this.game.workshop.getCraft(kitten.engineerSpeciality);
			if (craft && craft.value > 0) {
				craft.set("value", craft.value--);
			}
		}
		kitten.engineerSpeciality = null; //ah sanity checks
	},

	unassignCraftJobs: function (craft, amt) {
		var count = 0;
		for (var i = this.kittens.length - 1; i >= 0 && count < amt; i--) {
			var kitten = this.kittens[i];
			if (kitten.engineerSpeciality === craft.name) {
				kitten.engineerSpeciality = null;
				count++;
			}
		}

		craft.set("value", Math.max(craft.value - count, 0));
	},

	countJobs: function () {
		for (var i = this.jobs.length - 1; i >= 0; i--) {
			this.jobs[i].value = 0;
		}

		for (i = this.kittens.length - 1; i >= 0; i--) {
			var job = this.jobsByName[this.kittens[i].job];
			if (job) {
				job.value++;
			}
		}

		for (i = this.jobs.length - 1; i >= 0; i--) {
			this.jobs[i].updateCount();
		}

		this.countCraftJobs();
	},

	countCraftJobs: function () {
		var crafts = this.game.workshop.craftsByName;
		var specialties = {};
		var count = 0;

		for (var craft in crafts) {
			specialties[craft] = 0;
		}

		for (var i = this.kittens.length - 1; i >= 0; i--) {
			var kitten = this.kittens[i];
			if (kitten.job === "engineer" && kitten.engineerSpeciality in specialties) {
				specialties[kitten.engineerSpeciality]++;
				count++;
			}
		}

		for (craft in crafts) {
			crafts[craft].set("value", specialties[craft]);
		}

		return count;
	},

	synchKittens: function (force) {
		var kittens = this.getKittens();
		this.addKittens(kittens);

		if (force || this.kittens.length !== kittens) {
			this.kittens = this.generatedKittens.slice(0, kittens);

			//clear properties from voided kittens
			for (var i = kittens; i < this.generatedKittens.length; i++) {
				var genKitten = this.generatedKittens[i];
				genKitten.set("selected", false);
				var rerender = genKitten.isLeader || genKitten.job;
				if (genKitten.isLeader) {
					genKitten.fireLeader(true); //skip render
				}
				if (genKitten.job) {
					genKitten.job = null;
				}
				if (rerender) {
					genKitten.render();
				}
			}

			this.updateSelectedKittens(true); //will update buttons after taking the census
			this.countJobs();
			this.renderGovernment();
			this.takeCensus();
		}
	},

	renderGovernment: function () {
		this.governmentBlock.innerHTML = "";

		var leader = this.leader;

		if (leader && this.kittens.indexOf(leader) > -1) {
			var nextRank = Math.floor(this.getRankExp(leader.rank));

			var name = leader.getGovernName();

			var leaderInfo = "<strong>" + $I("village.census.lbl.leader") + ":</strong> " + name + "<br>exp: " + this.game.getDisplayValueExt(leader.exp);

			if (nextRank > leader.exp) {
				leaderInfo += " (" + Math.floor(leader.exp / nextRank * 100) + "%)";
			}

			if (leader.rank > 0) {
				leaderInfo += "<br><br>" + $I("village.job.bonus") + ": x" + this.getLeaderBonus(leader.rank).toFixed(1) +
				" (" + (leader.job ? this.getJob(leader.job).title : "") + ")";
			}

			var leaderBlock = dojo.create("div", {
				innerHTML: leaderInfo + "<br>"
			}, this.governmentBlock);

			dojo.place(this.unassignLeaderBlock, leaderBlock);
			dojo.toggleClass(this.unassignLeaderJobBtn, "hidden", !this.getJob(leader.job));
		}
	},

	takeCensus: function (refresh) {
		var job = this.censusJobFilterNode.value;
		var trait = this.censusTraitFilterNode.value;

		var censusKittens = [];

		if (job === "leader") { //short-circuit, ignore trait filter
			censusKittens = [this.leader];
		} else {
			censusKittens = this.kittens.filter(function (kitten) {
				if (trait !== "all" && kitten.trait.name !== trait) {
					return false;
				}

				if (job === "all") {
					return true;
				} else if (job === "selected") {
					return kitten.selected;
				} else {
					return kitten.job === job;
				}
			});
		}

		this.sortKittens(censusKittens);

		this.game.setInput(this.censusPageNode, 1, true);
		this.censusKittens = censusKittens;
		this.renderCensus(refresh);
	},

	renderCensus: function (refresh) {
		dojo.empty(this.censusKittensBlock);

		var kittens = this.censusKittens;
		var page = Math.max(num(this.censusPageNode.parsedValue), 1);
		var kittensPerPage = Math.max(Math.floor(this.kittensPerPage), 1) || 10;
		var pageMax = kittensPerPage > 0 ? Math.ceil(kittens.length / kittensPerPage) : 1;
		this.censusPageMax = pageMax;

		if (kittensPerPage > 1) {
			kittens = kittens.slice((page - 1) * kittensPerPage, page * kittensPerPage);
		}
		this.censusPageKittens = kittens;

		if (kittens.length) {
			for (var i = 0, len = kittens.length; i < len; i++) {
				if (!kittens[i].domNode || refresh) {
					kittens[i].render();
				}
				dojo.place(kittens[i].domNode, this.censusKittensBlock);
			}
		} else {
			dojo.place(this.noCensusKittensBlock, this.censusKittensBlock);
		}

		dojo.toggleClass(this.censusPageBlock, "hidden", !this.getKittens() || kittensPerPage < 1);
		dojo.toggleClass(this.censusPageFirst, "invisible", page <= 1);
		dojo.toggleClass(this.censusPagePrev, "invisible", page <= 1);
		dojo.toggleClass(this.censusPageNext, "invisible", page >= pageMax);
		dojo.toggleClass(this.censusPageLast, "invisible", page >= pageMax);

		this.censusPageCount.innerHTML = " " + $I("KGSaveEdit.village.census.page.limit", [pageMax]);

		this.updateSelectedKittenControls();
	},

	update: function () {
		dojo.toggleClass(this.tabBlockNode, "anarchy", this.game.challenges.currentChallenge === "anarchy");

		this.maxKittens = this.game.resPool.get("kittens").maxValue;

		dojo.toggleClass(this.massEditSelectKittensSpan, "hidden", !this.kittens.length);

		this.freeKittensSpan.textContent = this.getFreeKittens() + " / " + this.getKittens();
		this.game.callMethods(this.jobs, "update");

		this.updateHappines();
		this.updateResourceProduction();
	},

	save: function (saveData) {
		saveData.village = {
			kittens: this.game.mapMethods(this.kittens, "save"),
			maxKittens: this.maxKittens,
			jobs: this.game.filterMetadata(this.jobs, ["name", "unlocked", "value"], function (saveJob) {
				if (this.name === "priest" && this.game.challenges.currentChallenge === "atheism") {
					saveJob.value = 0;
				}
			}),
			map: this.map.villageData
		};
	},

	load: function (saveData) {
		if (!saveData.village) {
			return;
		}

		this.loadMetadata(saveData, "jobs", "getJob", function (job, saveJob) {
			job.set("unlocked", saveJob.unlocked);
		});

		var kittens = saveData.village.kittens;
		if (kittens && kittens.length) {
			this.addKittens(kittens.length);
			for (var i = 0, len = kittens.length; i < len; i++) {
				this.generatedKittens[i].load(kittens[i] || {});
			}
		}

		if (saveData.village.map) {
			this.map.villageData = saveData.village.map;
		}
	}
});

dojo.declare("classes.KGSaveEdit.JobMeta", classes.KGSaveEdit.MetaItem, {
	game: null,

	name: "Undefined",
	title: "Undefined",
	unlocked: false,
	modifiers: {},
	value: 0,

	constructor: function () {
		this.i18nKeys = {
			title: "village.job." + this.name,
			description: "village.job." + this.name + ".desc"
		};

		if (this.flavor) {
			this.i18nKeys.flavor = typeof this.flavor === "string" ? this.flavor : "village.job." + this.name + ".flavor";
		}
	},

	render: function () {
		var job = this;
		job.seti18n();

		job.domNode = dojo.create("tr", {
			class: "job",
			innerHTML: '<td class="nameNode">' + (this.title || this.name) + '</td><td></td><td></td>'
		});
		job.nameNode = job.domNode.children[0];

		job.assignedNode = job.game._createInput({
			class: "integerInput"
		}, job.domNode.children[1], job);

		job.assignedNode.parseFn = function (value) {
			return Math.min(value, this.game.village.getFreeKittens() + job.value, this.game.village.getJobLimit(job.name));
		};

		job.assignedNode.handler = function () {
			if (this.value > job.value) {
				job.assignJobs(this.parsedValue - job.value);
			} else {
				job.unassignJobs(job.value - this.parsedValue);
			}
			this.parsedValue = job.value;
		};

		job.game._createLinkList(job, job.domNode.children[2], [
			{html: "[+]", value: 1},
			{html: "[+5]", value: 5},
			{html: "[+25]", value: 25},
			{html: $I("btn.all.assign"), value: 100000} //default job limit
		], function (value) {
			this.assignJobs(value);
		});

		job.game._createLinkList(job, job.domNode.children[2], [
			{html: "[-]", value: 1},
			{html: "[-5]", value: 5},
			{html: "[-25]", value: 25},
			{html: $I("btn.all.unassign"), value: 100000}
		], function (value) {
			this.unassignJobs(value);
		});

		job.registerTooltip(job.domNode);

		job.updateCount(); // for rerender
	},

	assignJobs: function (kittens) {
		this.game.village.assignJobs(this.name, kittens);
		this.game.update();
	},

	unassignJobs: function (kittens) {
		this.game.village.unassignJobs(this.name, kittens);
		this.game.update();
	},

	getName: function () {
		return (this.title || this.name);
	},

	getPrices: function () { },

	getEffects: function () {
		return dojo.clone(this.modifiers || {});
	},

	update: function () {
		if (this.value > this.game.village.getJobLimit(this.name)) {
			this.game.setInput(this.assignedNode, this.value); //refresh
		}

		this.unlocked = this.game.checkRequirements(this);
		dojo.toggleClass(this.nameNode, "spoiler", !this.unlocked);
		dojo.toggleClass(this.nameNode, "btnDisabled", !this.unlocked || !this.game.village.getFreeKittens() ||
			this.value >= this.game.village.getJobLimit(this.name));
	},

	updateCount: function () {
		this.game.setInput(this.assignedNode, this.value, true);
	}
});

dojo.declare("classes.KGSaveEdit.Kitten", classes.KGSaveEdit.core, {
	names: ["Angel", "Charlie", "Mittens", "Oreo", "Lily", "Ellie", "Amber", "Molly", "Jasper",
			"Oscar", "Theo", "Maddie", "Cassie", "Timber", "Meeko", "Micha", "Tami", "Plato" ],
	surnames: ["Smoke", "Dust", "Chalk", "Fur", "Clay", "Paws", "Tails", "Sand", "Scratch", "Berry", "Shadow"],

	game: null,
	village: null,

	selected: false,

	name: "Undefined",
	surname: "Undefined",

	getRandomName: function () {
		return this.names[this.game.rand(this.names.length)];
	},

	getRandomSurname: function () {
		return this.surnames[this.game.rand(this.surnames.length)];
	},

	getRandomAge: function () {
		return 16 + this.game.rand(30);
	},

	getRandomTrait: function () {
		return this.traits[this.game.rand(this.traits.length)];
	},

	job: null,
	trait: null,

	age: 0,

	skills: null,
	exp: 0,
	rank: 0,

	expectedExp: 0,

	isLeader: false,
	isSenator: false,

	constructor: function (game) {
		this.game = game;
		this.village = game.village;
		this.traits = game.village.traits;
		this.traitsByName = game.village.traitsByName;

		this.initialize();

		// this.render();
	},

	initialize: function () {
		this.name = this.getRandomName();
		this.surname = this.getRandomSurname();
		this.trait = this.getRandomTrait();
		this.age = this.getRandomAge();

		this.exp = 0;
		this.rank = 0;

		this.skills = {};
	},

	fireAll: function () {
		if (this.isLeader) {
			this.fireLeader(true);
		}
		if (this.job) {
			this.quitJob();
		}
	},

	reset: function () {
		this.initialize();
		this.fireAll();
	},

	render: function () {
		var self = this;
		self.domNode = dojo.create("div", {class: "kittenBlock"});

		self.editBlock = null;

		var block = dojo.create("div", {class: "blockContainer"}, self.domNode);
		var div = dojo.create("div", {
			class: "kittenSubBlock",
			innerHTML: ", "
		}, block);

		var input = self.game._createCheckbox("[:3] ", div, self, "selected", "first");
		dojo.addClass(self.selectedNode, "kittenSelectCheckbox");
		self.selectedNode.title = "Select kitten";

		self.selectedNode.handler = function () {
			self.game.village.updateSelectedKittens();
		};

		self.nameBlock = dojo.create("span", null, input.text);
		// self.jobBlock = dojo.create("span", null, div);
		// dojo.create("br", null, div);

		self.ageBlock = dojo.create("span", null, div);
		dojo.place(document.createTextNode(" years old, "), div);

		self.traitBlock = dojo.create("span", null, div);
		self.rankBlock = dojo.create("span", null, div);

		self.kittenSkillsBlock = dojo.create("div", {class: "kittenSkillsBlock noAnarchy"}, div);

		div = dojo.create("div", {
			class: "kittenSubBlock rightAlign",
			innerHTML: '<div><a href="#">' + $I("KGSaveEdit.village.census.editKitten") + "</a></div>"
		}, block);

		on(div.children[0].children[0], "click", function () {
			self.setEditMode();
		});

		self.quitJobNode = dojo.create("div", {innerHTML: '<a href="#">' + $I("village.btn.unassign.job") + "</a>"}, div);
		on(self.quitJobNode.children[0], "click", function () {
			self.quitJob();
			self.game.update();
		});
		if (!self.village.getJob(self.job)) {
			dojo.addClass(self.quitJobNode, "hidden");
		}

		self.setLeaderNode = dojo.create("div", {
			class: "noAnarchy",
			innerHTML: '<a href="#" title="Make a leader">&#9734;</a>'
		}, div).children[0];
		on(self.setLeaderNode, "click", function () {
			self.makeLeader();
			self.game.update();
		});
		if (self.isLeader) {
			self.setLeaderNode.innerHTML = "&#9733;";
		}

		self.renderInfo();
	},

	getSkillsSorted: function (withJob) {
		var skills = [];
		var job = this.job;

		for (var skill in this.skills) {
			if (!withJob || skill !== job) {
				skills.push({"name": skill, "val": this.skills[skill]});
			}
		}
		skills.sort(function (a, b) { return b.val - a.val; });

		if (job && withJob) {
			skills.unshift({"name": job, "val": this.skills[job]});
		}
		return skills;
	},

	renderInfo: function () {
		if (!this.domNode) {
			return;
		}
		var kittenJob = this.village.getJob(this.job);

		this.nameBlock.textContent = this.name + " " + this.surname;
		// this.jobBlock.textContent = " - " + this.job;
		// dojo.toggleClass(this.jobBlock, "hidden", !kittenJob);

		dojo.toggleClass(this.quitJobNode, "hidden", !kittenJob);

		this.ageBlock.textContent = this.age;
		this.traitBlock.innerHTML = $I("village.trait." + this.trait.name);

		var rankText = "";
		if (this.rank > 0) {
			rankText = " (rank: " + this.rank + ")";
		}
		this.rankBlock.innerHTML = rankText;

		var skillsText = [];
		var skillsArr = this.getSkillsSorted(true);

		var end = skillsArr.length;
		if (!this.game.editorOptions.showAllKittenSkills) {
			end = Math.min(end, 3);
		}

		for (var i = 0; i < end; i++) {
			var skill = skillsArr[i];
			var exp = num(skill.val);

			if (exp <= 0 && this.job !== skill.name) {
				continue;
			}

			var bonus = this.getSkillBonus(skill.name, exp, this.rank);
			var job = this.village.getJob(skill.name);
			var className = this.job === skill.name ? '" class="bold' : "";
			skillsText.push('<span title="' + exp.toFixed(2) + className + '">' + job.title + " " + bonus +
				this.village.getSkillLevel(exp) + "</span>");
		}

		this.kittenSkillsBlock.innerHTML = skillsText.join("<br>");
		this.updateEditJobSkills();
	},

	renderEditBlock: function () {
		var self = this;
		var game = self.game;
		var village = self.village;

		self.editBlock = dojo.create("div", {class: "kittenEditBlock hideSiblings hidden"}, self.domNode, "first");

		var div = dojo.create("div", {
			class: "censusLine",
			innerHTML: " &nbsp; "
		}, self.editBlock);

		var span = dojo.create("span", {
			innerHTML: " &nbsp; "
		}, div);

		game._createButton(
			{value: $I("KGSaveEdit.village.edit.save")}, span, function () {
				var prevTrait = self.trait.name;
				var traitFilter = village.censusTraitFilterNode.value;
				self.saveEdits();
				if (traitFilter !== "all" && prevTrait === traitFilter || self.trait.name === traitFilter) {
					village.takeCensus();
				}
				game.update();
			}, "first"
		);

		game._createButton(
			{value: $I("KGSaveEdit.village.edit.cancel")}, span, function () {
				dojo.addClass(self.editBlock, "hidden");
			}
		);

		self.editCurrentNameNode = dojo.create("span", null, div, "first");

		var table = dojo.create("table", null, self.editBlock);

		var tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.village.edit.name") + '</td><td></td><td><a href="#">' + $I("KGSaveEdit.village.edit.random") + "</a></td>"
		}, table);
		self.editNameNode = game._createInput({class: "textInput"},
			tr.children[1]);

		on(tr.children[2].children[0], "click", function () {
			self.editNameNode.value = self.getRandomName();
		});

		tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.village.edit.surname") + '</td><td></td><td><a href="#">' + $I("KGSaveEdit.village.edit.random") + "</a></td>"
		}, table);
		self.editSurnameNode = game._createInput({class: "textInput"},
			tr.children[1]);

		on(tr.children[2].children[0], "click", function () {
			self.editSurnameNode.value = self.getRandomSurname();
		});

		tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.village.edit.age") + '</td><td></td><td><a href="#">' + $I("KGSaveEdit.village.edit.random") + "</a></td>"
		}, table);
		self.editAgeNode = game._createInput({class: "integerInput"},
			tr.children[1], null, null, null, true);

		on(tr.children[2].children[0], "click", function () {
			game.setInput(self.editAgeNode, self.getRandomAge(), true);
		});

		tr = dojo.create("tr", {
			innerHTML: "<td>" + $I("KGSaveEdit.village.edit.trait") + '</td><td></td><td><a href="#">' + $I("KGSaveEdit.village.edit.random") + "</a></td>"
		}, table);
		self.editTraitNode = village.renderTraitSelect(tr.children[1], "first");
		self.editTraitNode.defaultVal = "none";

		on(tr.children[2].children[0], "click", function () {
			game.setSelectByValue(self.editTraitNode, self.getRandomTrait().name);
		});

		tr = dojo.create("tr", {
			class: "noAnarchy",
			innerHTML: "<td>" + $I("KGSaveEdit.village.edit.rank") + "</td><td></td><td></td>"
		}, table);
		self.editRankNode = game._createInput({class: "integerInput expEdit"},
			tr.children[1], null, null, null, true);
		self.editRankNode.handler = function () {
			if (self.isLeader && self.job) {
				self.updateEditJobSkills();
			}
		};

		tr = dojo.create("tr", {
			class: "noAnarchy",
			innerHTML: "<td>>" + $I("KGSaveEdit.village.edit.exp") + '</td><td></td><td><a href="#" class="hidden">(Expected: 0)</a></td>'
		}, table);
		self.editExpNode = game._createInput({class: "expEdit"},
			tr.children[1], null, null, null, true);

		self.editExpectedExpNode = tr.children[2].children[0];
		on(self.editExpectedExpNode, "click", function () {
			game.setInput(self.editExpNode, self.expectedExp);
			self.setExpectedExp();
		});

		dojo.create("div", {
			class: "noAnarchy",
			innerHTML: "Job skills"
		}, self.editBlock);

		table = dojo.create("table", {
			class: "noAnarchy"
		}, self.editBlock);
		self.editJobs = [];

		var handle = function () {
			var skill = "";
			var exp = this.expNode.parsedValue;
			if (exp > 0) {
				var bonus = self.getSkillBonus(this.name, exp, self.editRankNode.parsedValue);
				skill = bonus + village.getSkillLevel(exp);
			}
			this.skillNode.innerHTML = skill;
		};

		for (var i = 0, len = village.jobs.length; i < len; i++) {
			var job = village.jobs[i];
			var editJob = {
				name: job.name,
				title: job.title
			};
			tr = dojo.create("tr", {
				innerHTML: "<td>" + job.title + '</td><td></td><td><span class="expectedRank"></span></td>'
			}, table);

			editJob.titleBlock = tr.children[0];
			editJob.expNode = game._createInput({class: "expEdit"},
				tr.children[1], null, null, null, true);
			editJob.expNode.handler = dojo.hitch(editJob, handle);

			editJob.skillNode = tr.children[2].children[0];

			self.editJobs.push(editJob);
		}

		on(self.editBlock, "input.expEdit:input", function () {
			self.setExpectedExp();
		});
	},

	getSkillBonus: function (skillName, exp, rank, override) {
		var bonus = "";
		if (override || this.job === skillName) {
			var productionRatio = (1 + this.game.getEffect("skillMultiplier")) / 4;
			var mod = this.village.getValueModifierPerSkill(exp);
			bonus = (mod - 1) * productionRatio;
			if (!override && bonus > 0 && this.isLeader) {
				bonus = (this.village.getLeaderBonus(rank) * (bonus + 1) - 1);
			}
			bonus *= 100;
			bonus = bonus > 0 ? "+" + bonus.toFixed(0) + "% " : "";
		}
		return bonus;
	},

	getGovernName: function () {
		var trait = this.trait || this.traitsByName.none;
		var title = trait.name == "none" ? $I("village.census.trait.none") : trait.title +
			" (" + this.village.getLeaderDescription(this.trait.name) + ") [" + $I("village.census.rank") + " " + this.rank + "]";
		return this.name + " " + this.surname + " (" + title + ")";
	},

	quitJob: function () {
		var job = this.village.getJob(this.job);
		if (job) {
			this.game.village.unassignCraftJobIfEngineer(job, this);
			job.value--;
			job.updateCount();
		}
		this.job = null;
		this.engineerSpeciality = null;

		this.renderInfo();
		if (this.isLeader) {
			this.village.renderGovernment();
		}
	},

	makeLeader: function (noRender) {
		if (this.isLeader && this.village.leader === this) {
			return;
		}

		var oldLeader = this.village.leader;
		if (oldLeader && oldLeader !== this) {
			oldLeader.isLeader = false;
			if (!noRender) {
				oldLeader.update();
			}
		}

		this.village.leader = this;
		this.isLeader = true;

		if (!noRender) {
			this.renderInfo();
			this.village.renderGovernment();
		}
		if (this.village.governmentFilter.selected) {
			this.village.takeCensus();
		}
		this.update();
	},

	fireLeader: function (noRender) {
		this.isLeader = false;

		if (!noRender) {
			this.update();
		}
		if (this.village.leader === this) {
			this.village.leader = null;
			if (!noRender) {
				this.renderInfo();
				this.village.renderGovernment();
			}
			if (this.village.governmentFilter.selected) {
				this.village.takeCensus();
			}
		}
	},

	setExpectedExp: function () {
		var exp = 0;
		var currExp = this.editExpNode.parsedValue;

		for (var i = this.editJobs.length - 1; i >= 0; i--) {
			exp += this.editJobs[i].expNode.parsedValue;
		}

		exp -= this.village.getRankExpSum(this.editRankNode.parsedValue);
		exp = Math.max(exp, 0) || 0;

		this.expectedExp = exp;
		this.editExpectedExpNode.innerHTML = "(" + $I("KGSaveEdit.village.edit.exp.expected", [exp]) + ")";
		dojo.toggleClass(this.editExpectedExpNode, "hidden", exp <= Math.ceil(currExp));
	},

	setEditMode: function () {
		if (!this.editBlock) {
			this.renderEditBlock();
		}

		this.editCurrentNameNode.innerHTML = "Editing " + this.name + " " + this.surname + " &nbsp;";

		this.editNameNode.value = this.name;
		this.editSurnameNode.value = this.surname;
		this.game.setInput(this.editAgeNode, this.age);
		this.game.setSelectByValue(this.editTraitNode, this.trait.name || this.trait);
		this.game.setInput(this.editRankNode, this.rank, true);
		this.game.setInput(this.editExpNode, this.exp);

		for (var i = this.editJobs.length - 1; i >= 0; i--) {
			var job = this.editJobs[i];
			dojo.toggleClass(job.titleBlock, "bold", job.name === this.job);
			this.game.setInput(job.expNode, num(this.skills[job.name]));
		}

		this.setExpectedExp();
		dojo.removeClass(this.editBlock, "hidden");
	},

	saveEdits: function () {
		var skills = {};
		for (var i = 0, len = this.editJobs.length; i < len; i++) {
			var job = this.editJobs[i];
			var exp = job.expNode.parsedValue;
			if (exp > 0 || job.name === this.job) {
				skills[job.name] = exp;
			}
		}

		this.load({
			name: this.editNameNode.value,
			surname: this.editSurnameNode.value,
			age: this.editAgeNode.parsedValue,
			rank: this.editRankNode.parsedValue,
			exp: this.editExpNode.parsedValue,
			trait: this.editTraitNode.value,
			job: this.job,
			engineerSpeciality: this.engineerSpeciality,
			skills: skills,
			isLeader: this.isLeader
		});

		if (this.isLeader) {
			this.village.renderGovernment();
		}
	},

	update: function () {
		if (this.domNode) {
			this.setLeaderNode.innerHTML = this.isLeader ? "&#9733;" : "&#9734;";
		}
	},

	updateEditJobSkills: function () {
		if (this.editBlock && !dojo.hasClass(this.editBlock, "hidden")) {
			for (var i = this.editJobs.length - 1; i >= 0; i--) {
				var editJob = this.editJobs[i];
				dojo.toggleClass(editJob.titleBlock, "bold", editJob.name === this.job);
				editJob.expNode.handler();
			}
		}
	},

	save: function (forEdit) {
		var isAnarchy = !forEdit && this.game.challenges.currentChallenge === "anarchy";
		var saveKitten = this.game.filterMetaObj(this, ["name", "surname", "trait",
			"age", "skills", "exp", "job", "engineerSpeciality", "rank", "isLeader"]);

		saveKitten.trait = {name: saveKitten.trait.name}; //still in filter above to preserve order

		if (!saveKitten.name && !saveKitten.surname) {
			saveKitten.name = this.getRandomName();
			saveKitten.surname = this.getRandomSurname();
		}

		if (!this.village.getJob(saveKitten.job)) {
			saveKitten.job = null;
		}

		var newSkills = {};

		if (isAnarchy) {
			saveKitten.exp = 0;
			saveKitten.rank = 0;
			saveKitten.isLeader = false;

		} else {
			for (var job in saveKitten.skills) {
				var skill = saveKitten.skills[job];
				if (this.village.getJob(job) && (saveKitten.job === job || skill > 0)) {
					newSkills[job] = Math.max(num(skill), 0);
				}
			}
		}

		if (!forEdit && this.game.challenges.currentChallenge === "atheism") {
			if (saveKitten.job === "priest") {
				saveKitten.job = null;
			}
			delete newSkills["priest"];
		}

		saveKitten.skills = newSkills;

		return saveKitten;
	},

	load: function (data) {
		if (this.editBlock) {
			dojo.addClass(this.editBlock, "hidden");
		}

		var wasLeader = this.isLeader;

		this.name               = typeof data.name === "string" ? data.name : this.village.getRandomName();
		this.surname            = typeof data.surname === "string" ? data.surname : this.village.getRandomSurname();
		this.age                = Math.max(Math.floor(num(data.age)), 0);
		this.exp                = Math.max(num(data.exp), 0);
		this.trait              = data.trait;
		this.job                = this.village.getJob(data.job) ? data.job : undefined;
		this.engineerSpeciality = null;
		this.rank               = Math.max(Math.floor(num(data.rank)), 0);
		this.isLeader           = Boolean(data.isLeader);

		if (data.engineerSpeciality && this.job === "engineer" && this.game.workshop.getCraft(data.engineerSpeciality)) {
			this.engineerSpeciality = data.engineerSpeciality;
		}

		if (this.trait) {
			var trait = this.trait.name ? this.trait.name : this.trait;
			this.trait = this.traitsByName[trait];
		}
		if (!this.trait) {
			this.trait = this.traitsByName.none;
		}

		var newSkills = {};
		if (data.skills) {
			var skills = data.skills;
			for (var job in skills) {
				var skill = Math.max(num(skills[job]), 0);
				if (this.village.getJob(job) && (skill > 0 || this.job === job)) {
					newSkills[job] = skill;
				}
			}
		}
		this.skills = newSkills;

		if (this.isLeader) {
			this.makeLeader(true);
		} else if (wasLeader) {
			this.fireLeader(true);
		}

		this.renderInfo();
		this.update();
	}
});


dojo.declare("classes.KGSaveEdit.villageMap", null, {
	game: null,
	villageData: null,

	villageLevel: 0,
	/*% explored, affects your priceRatio */
	exploredLevel: 0,

	effects: null,

	biomes: [
		{
			id: "forest",
			icon: "^",
			title: "Forest",
			terrainPenalty: 1.2,
			biomeChance: 0.2
		}, {
			id: "boneForest",
			icon: "^.",
			title: "Bone Forest",
			terrainPenalty: 1.9,
			biomeChance: 0.02
		}, {
			id: "rainForest",
			icon: "^`",
			title: "Rain Forest",
			terrainPenalty: 1.4,
			biomeChance: 0.1
		}, {
			id: "mountain",
			icon: "*",
			title: "Mountain",
			terrainPenalty: 1.2,
			biomeChance: 0.05
		}, {
			id: "desert",
			icon: "~",
			title: "Desert",
			terrainPenalty: 1.5,
			biomeChance: 0.08
		}
	],

	constructor: function (game) {
		this.game = game;
		this.effects = {};
		this.resetMap();
	},

	resetMap: function () {
		this.init();
		this.mapgen();
	},

	init: function () {
		this.villageData = {
			"3_2": {
				title: "v",
				type: "village",
				level: 1,
				cp: 0
			}
		};
	},

	generateTile: function (i, j) {
		var key = i + "_" + j;

		for (var _biomeKey in this.biomes) {
			var biome = this.biomes[_biomeKey];
			if (this.game.rand(100) <= (biome.biomeChance * 100)) {
				this.villageData[key] = {
					title: biome.icon,
					type: biome.id,
					level: 0,
					cp: 0,
					unlocked: false,
					biomeInfo: biome
				};
			}
		}
		if (!this.villageData[key]) {
			this.villageData[key] = {
				title: null,
				type: null,
				level: 0,
				cp: 0,
				unlocked: false,
				biomeInfo: null
			};
		}
		return this.villageData[key];
	},

	mapgen: function () {
		for (var i = 0; i < 7; i++) {
			for (var j = 0; j < 7; j++) {
				var key = i + "_" + j;
				if (!this.villageData[key]) {
					this.generateTile(i, j);
				}
			}
		}

		this.unlockTile(3, 2);	//unlock village and 3x3 area around it
	},

	unlockTile: function (x, y) {
		for (var i = x - 1; i <= x + 1; i++) {
			for (var j = y - 1; j <= y + 1; j++) {
				var tile = this.getTile(i, j);
				if (tile) {
					tile.unlocked = true;
				}
			}
		}
	},

	getTile: function (x, y) {
		var key = x + "_" + y,
			data = this.villageData[key];

		if (!data) {
			data = this.generateTile(x, y);
		}
		return data;
	},

	getPriceReduction: function () {
		return Math.sqrt(this.exploredLevel - 1) * 0.00002;
	},

	getEffect: function (effectName) {
		return this.effects[effectName] || 0;
	},

	update: function () {
		var exploredLevel = 0;

		for (var key in this.villageData) {
			var cellData = this.villageData[key];
			exploredLevel += cellData.level;

			if (cellData.type == "village") {
				this.villageLevel = cellData.level;
			}
		}

		this.exploredLevel = exploredLevel;
		this.effects["mapPriceReduction"] = -this.getPriceReduction();
	},

	//TODO render if bloodrizer ever turns on the map
});

});
