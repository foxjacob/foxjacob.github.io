define([
	'ash',
	'game/GameGlobals',
	'game/GlobalSignals',
	'game/constants/ItemConstants',
	'game/components/common/CampComponent',
	'game/components/common/PositionComponent',
	'game/components/player/ItemsComponent',
	'game/components/sector/improvements/SectorImprovementsComponent',
	'game/nodes/sector/CampNode',
	'game/nodes/NearestCampNode',
	'game/nodes/PlayerLocationNode',
	'game/nodes/player/PlayerStatsNode',
], function (Ash,
	GameGlobals,
	GlobalSignals,
	ItemConstants,
    CampComponent,
	PositionComponent,
	ItemsComponent,
	SectorImprovementsComponent,
	CampNode,
	NearestCampNode,
	PlayerLocationNode,
	PlayerStatsNode,
) {
	var UIOutTabBarSystem = Ash.System.extend({
        
        campNodes: null,
		nearestCampNodes: null,
        playerStatsNodes: null,
		currentLocationNodes: null,
        
        constructor: function () {},
        
        addToEngine: function (engine) {
            this.engine = engine;
			this.campNodes = engine.getNodeList(CampNode);
			this.campNodes.nodeAdded.add(this.onCampNodeAdded, this);
			this.campNodes.nodeRemoved.add(this.onCampNodeRemoved, this);
			this.nearestCampNodes = engine.getNodeList(NearestCampNode);
			this.playerStatsNodes = engine.getNodeList(PlayerStatsNode);
			this.currentLocationNodes = engine.getNodeList(PlayerLocationNode);
            
            GlobalSignals.add(this, GlobalSignals.gameShownSignal, this.updateTabVisibility);
            GlobalSignals.add(this, GlobalSignals.calloutsGeneratedSignal, this.updateTabVisibility);
            GlobalSignals.add(this, GlobalSignals.improvementBuiltSignal, this.updateTabVisibility);
            GlobalSignals.add(this, GlobalSignals.featureUnlockedSignal, this.updateTabVisibility);
            GlobalSignals.add(this, GlobalSignals.inventoryChangedSignal, this.updateTabVisibility);
            GlobalSignals.add(this, GlobalSignals.playerMovedSignal, this.updateTabVisibility);
            
			this.updateTabVisibility();
        },

		removeFromEngine: function (engine) {
            GlobalSignals.removeAll(this);
			this.engine = null;
			this.campNodes = null;
			this.nearestCampNodes = null;
			this.playerStatsNodes = null;
			this.currentLocationNodes = null;
		},
        
        update: function () {
			if (GameGlobals.gameState.uiStatus.isHidden) return;
            this.updateTabs();
        },
        
		onCampNodeAdded: function (node) {
			this.updateTabVisibility();
		},

		onCampNodeRemoved: function (node) {
			this.updateTabVisibility();
		},
        
        updateTabVisibility: function () {
            if (GameGlobals.gameState.uiStatus.isHidden) return;
            if (!this.playerStatsNodes.head) return;
            var levelCamp = this.nearestCampNodes.head;
            var currentCamp = levelCamp ? levelCamp.entity : null;
            var isInCamp = this.playerStatsNodes.head && this.playerStatsNodes.head.entity.get(PositionComponent).inCamp;
            var hasMap = this.playerStatsNodes.head.entity.get(ItemsComponent).getCountById(ItemConstants.itemDefinitions.uniqueEquipment[0].id, true) > 0;
            var hasProjects = GameGlobals.gameState.unlockedFeatures.projects;
            var hasTradingPost = currentCamp && currentCamp.get(SectorImprovementsComponent).getCount(improvementNames.tradepost) > 0;

            GameGlobals.uiFunctions.tabToggleIf("#switch-tabs #switch-in", null, isInCamp, 200, 0);
            GameGlobals.uiFunctions.tabToggleIf("#switch-tabs #switch-upgrades", null, isInCamp && GameGlobals.gameState.unlockedFeatures.upgrades, 100, 0);
            GameGlobals.uiFunctions.tabToggleIf("#switch-tabs #switch-blueprints", null, GameGlobals.gameState.unlockedFeatures.blueprints, 100, 0);
            GameGlobals.uiFunctions.tabToggleIf("#switch-tabs #switch-world", null, isInCamp && GameGlobals.gameState.numCamps > 1, 100, 0);
            GameGlobals.uiFunctions.tabToggleIf("#switch-tabs #switch-bag", null, GameGlobals.gameState.unlockedFeatures.bag, 100, 0);
            GameGlobals.uiFunctions.tabToggleIf("#switch-tabs #switch-followers", null, GameGlobals.gameState.unlockedFeatures.followers, 100, 0);
            GameGlobals.uiFunctions.tabToggleIf("#switch-tabs #switch-out", null, !isInCamp, 100, 0);
            GameGlobals.uiFunctions.tabToggleIf("#switch-tabs #switch-map", null, hasMap, 100, 0);
            GameGlobals.uiFunctions.tabToggleIf("#switch-tabs #switch-trade", null, isInCamp && hasTradingPost, 100, 0);
            GameGlobals.uiFunctions.tabToggleIf("#switch-tabs #switch-projects", null, isInCamp && hasProjects, 100, 0);
            GameGlobals.uiFunctions.tabToggleIf("#switch-tabs #switch-embark", null, isInCamp, 0);
        },
        
        updateTabs: function () {
            var posHasCamp = this.currentLocationNodes.head && this.currentLocationNodes.head.entity.has(CampComponent);
            var levelCamp = this.nearestCampNodes.head;
            var currentCamp = levelCamp ? levelCamp.entity : null;
            if (currentCamp) {
                var campComponent = currentCamp.get(CampComponent);
                $("#switch-tabs #switch-in .name").text(campComponent.getType());
                $("#switch-tabs #switch-in").toggleClass("disabled", !posHasCamp);
                $("#switch-tabs #switch-world").toggleClass("disabled", !posHasCamp);
            }
        },
    });

    return UIOutTabBarSystem;
});
