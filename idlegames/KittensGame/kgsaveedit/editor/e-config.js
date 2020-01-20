/* global dojo, require, classes, LCstorage:true, editorVersion */

require([], function () {

dojo.declare("classes.KGSaveEdit.KGConfig", null, {
	statics: {
		locales: ["br", "cz", "es", "fr", "ja", "pl", "ru", "zh"]
	}
});


window.LCstorage = window.localStorage;
if (document.all && !window.localStorage) {
	window.LCstorage = {};
	window.LCstorage.removeItem = function () { };
}

//Localization support
dojo.declare("classes.KGSaveEdit.i18n.Lang", null, {
	fallbackLocale: "en",
	availableLocales: null,
	availableLocaleLabels: null,
	language: null,
	messages: null,
	_deffered: null,
	platformLocale: null,
	loadedLocales: null,

	constructor: function () {
		var config = new classes.KGSaveEdit.KGConfig();
		this.availableLocales = [this.fallbackLocale];

		this.localeCodes = {
			"br": "pt-BR"
		};

		var localeLabels = {
			"en": "English",
			"ru": "Русский",
			"zh": "中文",
			"ja": "日本語",
			"br": "Portuguese",
			"es": "Española",
			"fr": "French",
			"cz": "Česky",
			"pl": "Polskie"
		};

		this.availableLocaleLabels = {};
		this.loadedLocales = {};

		for (var i = 0, len = config.statics.locales.length; i < len; i++) {
			this.availableLocales.push(config.statics.locales[i]);
		}

		var sel = dojo.byId("languageSel");

		for (i = 0, len = this.availableLocales.length; i < len; i++) {
			var locale = this.availableLocales[i];
			var label = localeLabels[locale] || locale;

			this.availableLocaleLabels[locale] = label;
			this.loadedLocales[locale] = false;

			dojo.create("option", {
				value: locale,
				lang: locale,
				innerHTML: label
			}, sel);
		}
	},

	init: function () {
		var self = this;
		if (navigator.globalization  !== undefined) {
			var def = $.Deferred();

			navigator.globalization.getPreferredLanguage(
				function (language) {
					self.platformLocale = language.value;

					def.resolve();
				},
				function (err) {
					console.error("Unable to get platform locale", err);
					def.resolve();
				}
			);
			return def.promise().then(function () { return self._init(); });
		} else {
			return this._init();
		}
	},

	_init: function () {
		var self = this;

		if (self._deffered) {
			return self._deffered.promise();
		}
		// check if user already selected the locale
		var lang = LCstorage["KGCalc.Language"];
		if (!lang || !self.isAvailable(lang)) {

			var defaultLocale = self.platformLocale || navigator.language || navigator.userLanguage;
			// find closest match
			var parts = defaultLocale.split("[-_]");
			lang = self.fallbackLocale;

			for (var j = 0; j < self.availableLocales.length; j++) {
				if (self.availableLocales[j] == parts[0].toLowerCase()) {
					lang = self.availableLocales[j];
					break;
				}
			}
			LCstorage["KGCalc.Language"] = lang;
		}
		// at this point we always have correct lang selected
		self.language = lang;
		self._deffered = $.Deferred();

		// now we can try to load it

		self._loadLanguage(self.fallbackLocale).done(function () {
			if (lang !== self.fallbackLocale) {
				self._loadLanguage(lang).done(function () {
					self._deffered.resolve();
				});
			} else {
				self._deffered.resolve();
			}
		});

		return self._deffered.promise();
	},

	getAvailableLocales: function () {
		return this.availableLocales;
	},

	getAvailableLocaleLabels: function () {
		return this.availableLocaleLabels;
	},

	getLanguage: function () {
		return this.language;
	},

	updateLanguage: function (lang) {
		var self = this;
		self.language = lang;
		LCstorage["KGCalc.Language"] = lang;
		dojo.byId("languageSel").value = lang;
		document.body.setAttribute("lang", this.localeCodes[lang] || lang);

		if (self.isLoaded(lang)) {
			self.messages = self.loadedLocales[lang];
			if (typeof window.gamePage !== "undefined") {
				window.gamePage.render();
			}
		} else {
			self._loadLanguage(lang).done(function () {
				self.updateLanguage(lang);
			});
		}
	},

	// updateLanguage: function (lang) {
	// 	this.language = lang;
	// 	LCstorage["KGCalc.Language"] = lang;
	// 	dojo.byId("languageSel").value = lang;
	// },

	isAvailable: function (lang) {
		for (var i = 0; i < this.availableLocales.length; i++) {
			if (this.availableLocales[i] == lang) {
				return true;
			}
		}
		return false;
	},

	isLoaded: function (lang) {
		return Boolean(this.loadedLocales[lang]);
	},

	_loadLanguage: function (lang) {
		var self = this;

		if (!self.isAvailable(lang)) {
			throw 'Language "' + lang + '" not available';
		}

		var fetchGamei18n = $.getJSON("res/i18n/" + lang + ".json?v=" + editorVersion).fail(function (e) {
			console.error("Couldn't load user locale '" + lang + "'", e);
			throw "Couldn't load user locale '" + lang + "'";
		});

		var fetchEditori189 = $.Deferred();
		$.getJSON("editor/i18n/" + lang + ".json?v=" + editorVersion).always(function (data) {
			fetchEditori189.resolve(data);
		});

		return $.when(fetchGamei18n, fetchEditori189).done(function (gameData, editorData) {
			gameData = gameData[0];
			if (editorData) {
				gameData = $.extend(gameData, editorData);
			}

			var defaultLocale = self.loadedLocales[self.fallbackLocale];
			if (defaultLocale) {
				gameData = $.extend({}, defaultLocale, gameData);
			}
			self.loadedLocales[lang] = gameData;
			if (lang === self.language) {
				self.updateLanguage(lang);
			}
		});
	},

	msg: function (key, args) {
		var msg = this.messages[key];
		if (msg) {
			if (args) {
				for (var i = 0; i < args.length; i++) {
					msg = msg.replace("{" + i + "}", args[i]);
				}
			}
		} else {
			console.error("Key '" + key + "' wasn't found");
			msg = "$" + key;
		}
		return msg;
	},

});

window.i18nLang = new classes.KGSaveEdit.i18n.Lang();

window.$I = function (key, args) {
	return window.i18nLang.msg(key, args);
};

});
