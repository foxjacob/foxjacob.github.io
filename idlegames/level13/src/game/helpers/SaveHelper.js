// Singleton with helper methods for saving and loading and related string manipulation
define([
	'ash',
	'game/components/common/CampComponent',
	'game/components/common/CurrencyComponent',
	'game/components/sector/ReputationComponent',
	'game/components/common/VisitedComponent',
	'game/components/common/RevealedComponent',
	'game/components/sector/LastVisitedCampComponent',
	'game/components/sector/OutgoingCaravansComponent',
	'game/components/sector/events/CampEventTimersComponent',
	'game/components/sector/events/RaidComponent',
	'game/components/sector/events/TraderComponent',
], function (Ash, CampComponent, CurrencyComponent, ReputationComponent, VisitedComponent, RevealedComponent, LastVisitedCampComponent, OutgoingCaravansComponent, CampEventTimersComponent, RaidComponent, TraderComponent) {

	var SaveHelper = Ash.Class.extend({

		saveKeys: {
			player: "player",
			tribe: "tribe",
			sector: "s-",
			level: "level-",
		},

		optionalComponents: [CampComponent, CurrencyComponent, ReputationComponent, VisitedComponent, RevealedComponent, LastVisitedCampComponent, OutgoingCaravansComponent, TraderComponent, CampEventTimersComponent, RaidComponent],

		constructor: function () {},

		// returns null if invalid, a parsed save object if valid
		parseSaveJSON: function (json) {
			if (!json) return null;

			var result = null;
			try {
				result = JSON.parse(json);
			} catch (ex) {
				console.log("WARN: Error parsing save JSON. " + ex);
				return null;
			}

			if (!result.gameState) {
				console.log("WARN: Save JSON is missing a GameState.");
				return null;
			}

			if (!result.entitiesObject) {
				console.log("WARN: Save JSON is missing an entities object.");
				return null;
			}

			return result;
		},

		loadEntity: function (entitiesObject, saveKey, entity) {
			var failedComponents = 0;
			var savedComponents = entitiesObject[saveKey];
			var existingComponents = entity.getAll();
			for (var componentKey in savedComponents) {
				var componentDefinition = componentKey;
				var component = entity.get(componentDefinition);

				// if the component has a shortened save key, compare to existing components to find the instance
				if (!component) {
					for (var i in existingComponents) {
						var existingComponent = existingComponents[i];
						if (existingComponent.getSaveKey) {
							if (existingComponent.getSaveKey() === componentKey) {
								component = existingComponent;
							}
						}
					}
				}

				// if still not found, it could be an optional component
				if (!component) {
					for (var i = 0; i < this.optionalComponents.length; i++) {
						var optionalComponent = this.optionalComponents[i];
						if (componentKey == optionalComponent) {
							component = new optionalComponent();
							entity.add(component);
							break;
						}
					}
				}

				// or an optional component with a shortened save key
				if (!component) {
					for (var i = 0; i < this.optionalComponents.length; i++) {
						var optionalComponent = this.optionalComponents[i];
						if (optionalComponent.prototype.getSaveKey) {
							if (optionalComponent.prototype.getSaveKey() === componentKey) {
								component = new optionalComponent();
								entity.add(component);
								break;
							}
						}
					}
				}

				if (!component) {
					console.log("WARN: Component not found while loading:");
					console.log(componentKey);
					failedComponents++;
					continue;
				}

				var componentValues = savedComponents[componentKey];
				if (component.customLoadFromSave) {
					component.customLoadFromSave(componentValues, saveKey);
				} else {
					this.loadComponent(component, componentValues, saveKey);
				}
			}

			return failedComponents;
		},

		loadComponent: function (component, componentValues, saveKey) {
			// console.log(component);
			for (var valueKey in componentValues) {
				// console.log(valueKey + ": " + componentValues[valueKey]);
				if (typeof componentValues[valueKey] != 'object') {
					component[valueKey] = componentValues[valueKey];
				} else {
					if (typeof component[valueKey] == "undefined") continue;
					for (var valueKey2 in componentValues[valueKey]) {
						var value2 = componentValues[valueKey][valueKey2];
						// console.log(valueKey2 + ": " + value2)
						if (value2 === null) {
							continue;
						} else if (typeof value2 != 'object') {
							if (valueKey2 != "id") {
								component[valueKey][valueKey2] = value2;
							}
						} else if (parseInt(valueKey2) >= 0 && component[valueKey] instanceof Array) {
							var valueKey2Int = parseInt(valueKey2);
							if (!component[valueKey][valueKey2Int]) {
								component[valueKey][valueKey2Int] = {};
							}
							this.loadObject(component[valueKey][valueKey2], componentValues[valueKey][valueKey2Int]);
						} else {
							if (typeof component[valueKey][valueKey2] == "undefined") {
								console.log("WARN: Error loading. Unknown value key " + valueKey2 + " for object " + valueKey + " in " + saveKey);
								continue;
							}
							this.loadObject(component[valueKey][valueKey2], value2);
						}
					}
				}
			}
		},

		loadObject: function (object, attrValues) {
			for (var attr in attrValues) {
				var value = attrValues[attr];

				if (value == null) {
					continue;
				} else if (typeof value != 'object') {
					if (attr == "loadedFromSave") {
						object[attr] = true;
					} else if (attr == "time" && this.isDate(value)) {
						object[attr] = new Date(value);
					} else {
						object[attr] = value;
					}
				} else {
					if (!object[attr]) object[attr] = new Object();
					this.loadObject(object[attr], attrValues[attr]);
				}
			}
		},

		isDate: function (s) {
			return ((new Date(s) !== "Invalid Date" && !isNaN(new Date(s))));
		},

	});

	return SaveHelper;
});
