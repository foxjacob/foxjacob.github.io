define([
    'ash',
    'game/GameGlobals',
	'game/constants/GameConstants',
	'game/constants/LogConstants',
    'game/constants/PlayerActionConstants',
    'game/constants/PerkConstants',
    'game/constants/CampConstants',
    'game/nodes/sector/CampNode',
    'game/nodes/PlayerPositionNode',
    'game/nodes/PlayerLocationNode',
    'game/nodes/NearestCampNode',
    'game/components/common/ResourcesComponent',
    'game/components/common/PositionComponent',
    'game/components/common/ResourceAccumulationComponent',
    'game/components/player/PerksComponent',
    'game/components/common/CampComponent',
    'game/components/sector/improvements/SectorImprovementsComponent',
    'game/components/common/LogMessagesComponent',
], function (Ash, GameGlobals, GameConstants, LogConstants, PlayerActionConstants, PerkConstants, CampConstants,
	CampNode, PlayerPositionNode, PlayerLocationNode, NearestCampNode,
	ResourcesComponent,
	PositionComponent,
	ResourceAccumulationComponent,
	PerksComponent,
	CampComponent,
	SectorImprovementsComponent,
	LogMessagesComponent
) {
    var WorkerSystem = Ash.System.extend({
		
        campNodes: null,
		playerNodes: null,
		playerLocationNodes: null,
        nearestCampNodes: null,
	
		lastMsgTimeStamp: 0,
		msgFrequency: 1000 * 120,

        constructor: function () {
        },

        addToEngine: function (engine) {
            this.engine = engine;
            this.campNodes = engine.getNodeList(CampNode);
            this.playerNodes = engine.getNodeList(PlayerPositionNode);
            this.playerLocationNodes = engine.getNodeList(PlayerLocationNode);
            this.nearestCampNodes = engine.getNodeList(NearestCampNode);
        },

        removeFromEngine: function (engine) {
            this.campNodes = null;
            this.playerNodes = null;
			this.playerLocationNodes = null;
            this.nearestCampNodes = null;
            this.engine = null;
        },

        update: function (time) {
            if (GameGlobals.gameState.isPaused) return;
            
            for (var node = this.campNodes.head; node; node = node.next) {
                this.updateNode(node, time + this.engine.extraUpdateTime);
            }
	    
			this.updatePlayer(time + this.engine.extraUpdateTime);
			this.logAmbient();
		},
	
        updateNode: function (node, time) {
			this.updateWorkerHunger(node, time);
			this.updateWorkers(node, time);
			this.updateResourceImprovements(node, time);
		},
		
		updateWorkers: function (node, time) {
			var camp = node.camp;
			var campResources = node.entity.get(ResourcesComponent).resources;
            var availableResources = GameGlobals.resourcesHelper.getCurrentCampStorage(node.entity).resources;
			var resourceAccComponent = node.entity.get(ResourceAccumulationComponent);
			var improvementsComponent = node.entity.get(SectorImprovementsComponent);
			
			// Basic: Scavengers
			var metal = time * GameGlobals.campHelper.getMetalProductionPerSecond(camp.assignedWorkers.scavenger, improvementsComponent);
			campResources.addResource(resourceNames.metal, metal);
			resourceAccComponent.addChange(resourceNames.metal, metal / time, "Scavengers");
			
			// Basic: Trappers
			var food = time * GameGlobals.campHelper.getFoodProductionPerSecond(camp.assignedWorkers.trapper, improvementsComponent);
			campResources.addResource(resourceNames.food, food);
			resourceAccComponent.addChange(resourceNames.food, food / time, "Trappers");
			
			// Basic: Water collectors
			var water = time * GameGlobals.campHelper.getWaterProductionPerSecond(camp.assignedWorkers.water, improvementsComponent);
			campResources.addResource(resourceNames.water, water);
			resourceAccComponent.addChange(resourceNames.water, water / time, "Collectors");
			
			// Basic: Rope-makers
            var rope = time * GameGlobals.campHelper.getRopeProductionPerSecond(camp.assignedWorkers.ropemaker, improvementsComponent);
			campResources.addResource(resourceNames.rope, rope);
			resourceAccComponent.addChange(resourceNames.rope, rope / time, "Rope-makers");
			
			// Workshop: Chemists
            var fuel = time * GameGlobals.campHelper.getFuelProductionPerSecond(camp.assignedWorkers.chemist, improvementsComponent);
			campResources.addResource(resourceNames.fuel, fuel);
			resourceAccComponent.addChange(resourceNames.fuel, fuel / time, "Chemists");
			
			// Advanced: Apothecaries
			var herbsRequired = time * GameGlobals.campHelper.getHerbsConsumptionPerSecond(camp.assignedWorkers.apothecary);
			if (herbsRequired > 0) {
				var herbsUsed = Math.min(availableResources.getResource(resourceNames.herbs), herbsRequired);
				var medicine = time * (herbsUsed / herbsRequired) * GameGlobals.campHelper.getMedicineProductionPerSecond(camp.assignedWorkers.apothecary, improvementsComponent);
				campResources.addResource(resourceNames.medicine, medicine);
				campResources.addResource(resourceNames.herbs, -herbsUsed);
				resourceAccComponent.addChange(resourceNames.medicine, medicine / time, "Apothecaries");
				resourceAccComponent.addChange(resourceNames.herbs, -herbsUsed / time, "Apothecaries");
			}
			
			// Advanced: Toolsmiths
			var metalRequiredTools = time * GameGlobals.campHelper.getMetalConsumptionPerSecondSmith(camp.assignedWorkers.toolsmith);
			if (metalRequiredTools > 0) {
				var metalUsedTools = Math.min(availableResources.getResource(resourceNames.metal), metalRequiredTools);
                var tools = time * (metalUsedTools / metalRequiredTools) * GameGlobals.campHelper.getToolsProductionPerSecond(camp.assignedWorkers.toolsmith, improvementsComponent);
				campResources.addResource(resourceNames.tools, tools);
				campResources.addResource(resourceNames.metal, -metalUsedTools);
				resourceAccComponent.addChange(resourceNames.tools, tools / time, "Toolsmiths");
				resourceAccComponent.addChange(resourceNames.metal, -metalUsedTools / time, "Toolsmiths");
			}
			
			// Advanced: Concrete mixers
			var metalRequiredConcrete = time * GameGlobals.campHelper.getMetalConsumptionPerSecondConcrete(camp.assignedWorkers.concrete);
			if (metalRequiredConcrete > 0) {
				var metalUsedConcrete = Math.min(availableResources.getResource(resourceNames.metal), metalRequiredConcrete);
                var concrete = time * (metalUsedConcrete / metalRequiredConcrete) * GameGlobals.campHelper.getConcreteProductionPerSecond(camp.assignedWorkers.concrete);
				campResources.addResource(resourceNames.concrete, concrete);
				campResources.addResource(resourceNames.metal, -metalUsedConcrete);
				resourceAccComponent.addChange(resourceNames.concrete, concrete / time, "Concrete mixers");
				resourceAccComponent.addChange(resourceNames.metal, -metalUsedConcrete / time, "Concrete mixers");
			}
		},
		
		updateWorkerHunger: function (node, time) {
			var campResources = node.entity.get(ResourcesComponent);
			var campResourceAcc = node.entity.get(ResourceAccumulationComponent);
			this.deductHunger(time, campResources.resources, node.camp.getAssignedPopulation(), false, false);
			this.deductHunger(time, campResourceAcc.resourceChange, node.camp.getAssignedPopulation(), false, true, campResourceAcc, "Workers");
		},
		
		updatePlayer: function (time) {
            var inCamp = this.playerNodes.head.position.inCamp;
			var playerFoodSource = GameGlobals.resourcesHelper.getCurrentStorage();
			var playerFoodSourceAcc = GameGlobals.resourcesHelper.getCurrentStorageAccumulation(true);
			
			// Manage perks
			var isThirsty = playerFoodSource.resources.water <= 0;
			var isHungry = playerFoodSource.resources.food <= 0;
			var perksComponent = this.playerNodes.head.entity.get(PerksComponent);
			
			var hasThirstPerk = perksComponent.hasPerk(PerkConstants.perkIds.thirst);
			var hasHungerPerk = perksComponent.hasPerk(PerkConstants.perkIds.hunger);
            
			if (!isThirsty) {
				if (hasThirstPerk) {
					if (!inCamp) this.log("No longer thirsty.");
					perksComponent.removeItemsById(PerkConstants.perkIds.thirst);
				}
			} else if (!hasThirstPerk) {
				if (!inCamp && (GameGlobals.gameState.unlockedFeatures.resources.water)) this.log("Out of water!");
				perksComponent.addPerk(PerkConstants.getPerk(PerkConstants.perkIds.thirst));
			}
            
			if (!isHungry) {
				if (hasHungerPerk) {
					if (!inCamp) this.log("No longer hungry.");
					perksComponent.removeItemsById(PerkConstants.perkIds.hunger);
				}
			} else if (!hasHungerPerk) {
				if (!inCamp && (GameGlobals.gameState.unlockedFeatures.resources.food)) this.log("Out of food!");
				perksComponent.addPerk(PerkConstants.getPerk(PerkConstants.perkIds.hunger));
			}
		},
		
		updateResourceImprovements: function (node, time) {
			var resources = node.entity.get(ResourcesComponent).resources;
			var resourceAcc = node.entity.get(ResourceAccumulationComponent);
			var improvementsComponent = node.entity.get(SectorImprovementsComponent);
			
			// Darkfarms
			var farmFood = improvementsComponent.getCount(improvementNames.darkfarm) * 0.01 * time * GameConstants.gameSpeedCamp;
			resources.addResource(resourceNames.food, farmFood);
			resourceAcc.addChange(resourceNames.food, farmFood / time, "Snail farms");
		},
		
		deductHunger: function (time, resourceVO, population, isExplorationMode, accumulation, accComponent, sourceName) {
			var timeMod = accumulation ? 1 : time;
			var waterChange = timeMod  * GameGlobals.campHelper.getWaterConsumptionPerSecond(population, isExplorationMode);
			var foodChange = timeMod * GameGlobals.campHelper.getFoodConsumptionPerSecond(population, isExplorationMode);
			if (!accumulation) {
				resourceVO.water -= waterChange;
				resourceVO.food -= foodChange;
			} else {
				accComponent.addChange(resourceNames.water, -waterChange, sourceName);
				accComponent.addChange(resourceNames.food, -foodChange, sourceName);
			}
		},
		
		logAmbient: function () {
            if (GameGlobals.gameState.uiStatus.isHidden) return;
			if (!this.playerLocationNodes.head || !this.playerLocationNodes.head.position) return;
			
			var playerFoodSource = GameGlobals.resourcesHelper.getCurrentStorage().resources;
			
			var playerLevelCamp = this.nearestCampNodes.head !== null ? this.nearestCampNodes.head.entity : null;
			var inCamp = playerLevelCamp !== null;
            var hasPopulation = this.nearestCampNodes.head !== null ? this.nearestCampNodes.head.camp.population >= 1 : false;
			inCamp = inCamp && playerLevelCamp.get(PositionComponent).sector === this.playerLocationNodes.head.position.sector;
			
			var timeStamp = new Date().getTime();
			var log = timeStamp - this.lastMsgTimeStamp > this.msgFrequency;
			if (log) {
				var isThirsty = playerFoodSource.water <= 0;
				var isHungry = playerFoodSource.food <= 0;
				var msg = null;
				
				if (inCamp && hasPopulation && isThirsty && Math.random() < 0.05) {
                    msg = "There is no more water.";
				}
				
				if (inCamp && hasPopulation && msg === null && isHungry && Math.random() < 0.05) {
                    msg = "There is no more food.";
				}
				
				if (!inCamp && isThirsty && Math.random() < 0.05) {
					msg = "Your throat is dry.";
				}
				
				if (!inCamp && msg === null && isHungry && Math.random() < 0.05) {
					msg = "Your stomach is grumbling.";
				}
				
				this.log(msg);
			}
		},
		
		log: function (msg) {
			if (msg) {
				var logComponent = this.playerNodes.head.entity.get(LogMessagesComponent);
				logComponent.addMessage(LogConstants.MSG_ID_WORKER_STATUS, msg);
				this.lastMsgTimeStamp = new Date().getTime();
			}
		}

    });

    return WorkerSystem;
});
