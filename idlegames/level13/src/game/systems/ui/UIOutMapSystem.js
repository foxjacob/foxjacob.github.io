define([
    'ash',
    'game/GameGlobals',
    'game/GlobalSignals',
    'game/constants/GameConstants',
    'game/constants/TextConstants',
    'game/nodes/PlayerLocationNode',
    'game/nodes/PlayerPositionNode',
    'game/components/common/CampComponent',
    'game/components/common/PositionComponent',
    'game/components/common/VisitedComponent',
    'game/components/sector/EnemiesComponent',
    'game/components/sector/PassagesComponent',
    'game/components/sector/SectorControlComponent',
    'game/components/sector/SectorFeaturesComponent',
    'game/components/sector/SectorLocalesComponent',
    'game/components/sector/SectorStatusComponent',
    'game/components/sector/improvements/SectorImprovementsComponent',
    'game/components/sector/improvements/WorkshopComponent',
    'game/systems/CheatSystem'
], function (Ash, GameGlobals, GlobalSignals, GameConstants, TextConstants,
    PlayerLocationNode, PlayerPositionNode,
    CampComponent, PositionComponent, VisitedComponent, EnemiesComponent, PassagesComponent, SectorControlComponent, SectorFeaturesComponent, SectorLocalesComponent, SectorStatusComponent, SectorImprovementsComponent, WorkshopComponent,
    CheatSystem) {

    var UIOutMapSystem = Ash.System.extend({

        playerPositionNodes: null,
		playerLocationNodes: null,

        constructor: function () {
            var sys = this;
            $("#btn-cheat-teleport").click(function () {
                sys.teleport();
            });
            this.updateHeight();
        },

		addToEngine: function (engine) {
            this.engine = engine;
            $("#select-header-level").bind("change", $.proxy(this.onLevelSelectorChanged, this));
            GameGlobals.uiMapHelper.enableScrollingForMap("mainmap");
            this.playerPositionNodes = engine.getNodeList(PlayerPositionNode);
            this.playerLocationNodes = engine.getNodeList(PlayerLocationNode);
            GlobalSignals.add(this, GlobalSignals.tabChangedSignal, this.onTabChanged);
            GlobalSignals.add(this, GlobalSignals.gameStartedSignal, this.onGameStarted);
            GlobalSignals.add(this, GlobalSignals.windowResizedSignal, this.onResize);
            GlobalSignals.add(this, GlobalSignals.clearBubblesSignal, this.clearBubble);
		},

		removeFromEngine: function (engine) {
            this.engine = null;
            GlobalSignals.removeAll(this);
            $("#select-header-level").unbind("change", $.proxy(this.onLevelSelectorChanged, this));
            GameGlobals.uiMapHelper.disableScrollingForMap("mainmap");
            this.playerPositionNodes = null;
            this.playerLocationNodes = null;
		},

		update: function (time) {
            if (GameGlobals.gameState.uiStatus.isHidden) return;
            GameGlobals.uiFunctions.toggle("#switch-map .bubble", !GameGlobals.gameState.uiStatus.mapVisited);
			if (GameGlobals.gameState.uiStatus.currentTab !== GameGlobals.uiFunctions.elementIDs.tabs.map) return;
            GameGlobals.gameState.uiStatus.mapVisited = true;
		},
        
        updateHeight: function () {
            var maxHeight = Math.max(208, $(window).height() - 380);
            $("#mainmap-container").css("maxHeight", maxHeight + "px");
        },

        initLevelSelector: function () {
            $("#select-header-level").empty();
            var html = "";
            var surfaceLevel = GameGlobals.gameState.getSurfaceLevel();
            var groundLevel = GameGlobals.gameState.getGroundLevel();
            for (var i = surfaceLevel; i >= groundLevel; i--) {
                html += "<option value='" + i + "' id='map-level-selector-level-" + i + "'>Level " + i + "</option>"
            }
            $("#select-header-level").append(html);
        },

        updateLevelSelector: function () {
            var surfaceLevel = GameGlobals.gameState.getSurfaceLevel();
            var groundLevel = GameGlobals.gameState.getGroundLevel();
            var countVisible = 0;
            for (var i = surfaceLevel; i >= groundLevel; i--) {
                var isVisible = GameGlobals.uiMapHelper.isMapRevealed || GameGlobals.levelHelper.getLevelEntityForPosition(i).has(VisitedComponent);
                GameGlobals.uiFunctions.toggle($("#map-level-selector-level-" + i), isVisible);
                if (isVisible) countVisible++;
            }
            GameGlobals.uiFunctions.toggle($("#select-header-level"), countVisible > 1);
        },

        selectLevel: function (level) {
            $("#select-header-level").val(level);
            this.selectedLevel = level;
            this.selectedSector = null;
            this.updateMap();
            this.updateSector();
        },

        selectSector: function (level, x, y) {
            this.selectedSector = GameGlobals.levelHelper.getSectorByPosition(level, x, y);
            this.updateSector();
        },

		updateMap: function () {
            var mapPosition = this.playerPositionNodes.head.position.getPosition();
            if (this.selectedLevel) {
                mapPosition.level = this.selectedLevel;
                mapPosition.sectorX = 0;
                mapPosition.sectorY = 0;
            }
            var sys = this;
            GameGlobals.uiMapHelper.rebuildMap("mainmap", "mainmap-overlay", mapPosition, -1, false, function (level, x, y) {
                sys.onSectorSelected(level, x, y)
            });
        },

        updateSector: function () {
            var hasSector = this.selectedSector !== null;
            GameGlobals.uiFunctions.toggle($("#mainmap-sector-details-content-empty"), !hasSector);
            GameGlobals.uiFunctions.toggle($("#mainmap-sector-details-content"), hasSector);
            GameGlobals.uiFunctions.toggle($("#mainmap-sector-details-content-debug"), hasSector && GameConstants.isCheatsEnabled);

            if (hasSector) {
                var position = this.selectedSector.get(PositionComponent).getPosition();
    			var isScouted = this.selectedSector.get(SectorStatusComponent).scouted;
                $("#mainmap-sector-details-pos").text(position.getInGameFormat(false));
                $("#mainmap-sector-details-poi").text(this.getPOIText(this.selectedSector, isScouted));
                $("#mainmap-sector-details-res-sca").text(this.getResScaText(this.selectedSector, isScouted));
                $("#mainmap-sector-details-res-col").text(this.getCollectorsText(this.selectedSector, isScouted));
                $("#mainmap-sector-details-threats").text(this.getThreatsText(this.selectedSector, isScouted));
                $("#mainmap-sector-details-env").text(this.getEnvironmentText(this.selectedSector, isScouted));
                $("#mainmap-sector-details-distance").text(this.getDistanceText(this.selectedSector));
            }
        },

		centerMap: function () {
            var mapPosition = this.playerPositionNodes.head.position.getPosition();
            if (this.selectedLevel) {
                mapPosition.level = this.selectedLevel;
                mapPosition.sectorX = 0;
                mapPosition.sectorY = 0;
            }
            GameGlobals.uiMapHelper.centerMapToPlayer("mainmap", mapPosition, false);
        },

        updateMapCompletionHint: function () {
            var mapStatus = GameGlobals.levelHelper.getLevelStats(this.selectedLevel);
            var mapStatusText = "There are still many unvisited streets on this level.";
            if (mapStatus.percentClearedSectors >= 1)
                mapStatusText = "This level has been thoroughly explored.";
            else if (mapStatus.percentScoutedSectors >= 1)
                mapStatusText = "This level has been mapped, but there are a few unexplored locations left.";
            else if (mapStatus.percentRevealedSectors >= 1)
                mapStatusText = "There are still unscouted streets on this level.";
            else if (mapStatus.percentRevealedSectors >= 0.5)
                mapStatusText = "There are still some unvisited streets on this level.";

            $("#map-completion-hint").text(mapStatusText);
        },
        
        getPOIText: function (sector, isScouted) {
            if (!isScouted) return "?";
            
            var levelEntity = GameGlobals.levelHelper.getLevelEntityForPosition(sector.get(PositionComponent).level);
            var hasCampOnLevel = levelEntity.get(CampComponent) !== null;
			var sectorFeatures = sector.get(SectorFeaturesComponent);
            var sectorPassages = sector.get(PassagesComponent);
            var statusComponent = this.selectedSector.get(SectorStatusComponent);
            var localesComponent = sector.get(SectorLocalesComponent);
            var unScoutedLocales = localesComponent.locales.length - statusComponent.getNumLocalesScouted();
            
            var result = [];
            if (sector.has(CampComponent)) result.push("camp");
            if (sector.has(WorkshopComponent)) result.push("workshop");
            if (!hasCampOnLevel && sectorFeatures.canHaveCamp()) result.push("good place for camp");
            if (sectorPassages.passageUp) result.push("passage up");
            if (sectorPassages.passageDown) result.push("passage down");
            if (unScoutedLocales > 0) result.push("unscouted locales");
            if (sectorFeatures.hasSpring) result.push(TextConstants.getSpringName(sectorFeatures));
            
            if (result.length < 1) return "-";
            else return result.join(", ");
        },
        
        getResScaText: function (sector) {
            var result = GameGlobals.sectorHelper.getLocationDiscoveredResources(sector);
            if (result.length < 1) return "-";
            else return result.join(", ");
        },
        
        getCollectorsText: function (sector) {
            var improvements = sector.get(SectorImprovementsComponent);
			var collectorFood = improvements.getVO(improvementNames.collector_food);
			var collectorWater = improvements.getVO(improvementNames.collector_water);
            
            var result = [];
            if (collectorFood.count === 1) result.push("1 trap");
            if (collectorFood.count > 1) result.push("traps");
            if (collectorWater.count === 1) result.push("1 bucket");
            if (collectorWater.count > 1) result.push("buckets");
            
            if (result.length < 1) return "-";
            else return result.join(", ");
        },
        
        getThreatsText: function (sector, isScouted) {
            if (!isScouted) return "?";
			var sectorControlComponent = sector.get(SectorControlComponent);
			var enemiesComponent = sector.get(EnemiesComponent);
			if (enemiesComponent.hasEnemies) {
				return TextConstants.getEnemyNoun(enemiesComponent.possibleEnemies, true);
			} else {
                return "-"
			}
        },
        
        getEnvironmentText: function (sector, isScouted) {
            var isVisited = sector.has(VisitedComponent);
            if (!isVisited) return "?";
            var result = [];
			var featuresComponent = sector.get(SectorFeaturesComponent);
            if (featuresComponent.sunlit) result.push("sunlit");
            if (featuresComponent.hazards.radiation > 0) result.push("radioactivity (" + featuresComponent.hazards.radiation + ")");
            if (featuresComponent.hazards.poison > 0) result.push("pollution (" + featuresComponent.hazards.poison + ")");
            if (featuresComponent.hazards.cold > 0) result.push("cold (" + featuresComponent.hazards.cold + ")");
            
            if (result.length < 1) return "-";
            else return result.join(", ");
        },
        
        getDistanceText: function (sector) {
            var path = GameGlobals.levelHelper.findPathTo(this.playerLocationNodes.head.entity, sector, { skipBlockers: true, skipUnvisited: false });
            var len = path ? path.length : "?";
            return len + " blocks";
        },

        teleport: function () {
            if (!GameConstants.isCheatsEnabled) return;
            if (!this.selectedSector) return;
            var targetPosition = this.selectedSector.get(PositionComponent).getPosition();
			this.engine.getSystem(CheatSystem).setPlayerPosition(targetPosition.level, targetPosition.sectorX, targetPosition.sectorY, false);
            GameGlobals.uiFunctions.showTab(GameGlobals.uiFunctions.elementIDs.tabs.out);
        },

        onSectorSelected: function (level, x, y) {
            this.selectSector(level, x, y);
        },

        onGameStarted: function () {
            this.initLevelSelector();
            this.updateLevelSelector();
        },
        
        onResize: function () {
            this.updateHeight();
        },

		onTabChanged: function (tabID) {
            if (tabID === GameGlobals.uiFunctions.elementIDs.tabs.map) {
                $("#tab-header h2").text("Map");
                this.updateLevelSelector();
                this.selectLevel(this.playerPositionNodes.head.position.level);
                this.updateMap();
                this.centerMap();
                this.updateMapCompletionHint();
            }
        },

        onLevelSelectorChanged: function () {
            var level = parseInt($("#select-header-level").val());
            if (this.selectedLevel === level) return;
            this.selectLevel(level);
            this.updateMapCompletionHint();
        },

        clearBubble: function () {
            GameGlobals.gameState.uiStatus.mapVisited = true;
        }

	});

    return UIOutMapSystem;
});
