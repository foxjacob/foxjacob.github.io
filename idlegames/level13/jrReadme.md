# 十三层（Level13）

---

### 描述：

网页探险养成游戏，运行于web浏览器。

---

### 测试：

测试版：https://jarol.gitee.io/level13/

汉化版：http://likexia.gitee.io/level13/

英文版：https://nroutasuo.github.io/level13/

代码源：https://github.com/nroutasuo/level13

---

### 架构

>http://likexia.gitee.io/level13/
>
>http://jarol.gitee.io/level13/
>>
>>
>> 说明文档
>>> * README.md
>>> * LICENSE
>>> * changelog.json
>>> docs/
>>
>> 汉化文档
>>> * [zh.js](https://gitee.com/jarol/level13/blob/master/zh.js)
>>
>> 网页入口
>>> * index.html
>>
>> 脚本文件
>>> src/
>>>> * config.js
>>>> * level13-app.js
>>>>
>>>> src/core -
>>>>> * ExceptionHandler.js
>>>>
>>>> src/game -
>>>>> * EntityCreator.js
>>>>> * GameGlobals.js
>>>>> * GameState.js
>>>>> * GlobalSignals.js
>>>>> * OccurrenceFunctions.js
>>>>> * PlayerActionFunctions.js
>>>>> * UIFunctions.js
>>>>> * level13.js
>>>>>
>>>>> src/game/components -
>>>>>>
>>>>>> src/game/components/common -
>>>>>>> * CampComponent.js
>>>>>>> * CurrencyComponent.js
>>>>>>> * CurrentPlayerLocationComponent.js
>>>>>>> * LogMessagesComponent.js
>>>>>>> * PositionComponent.js
>>>>>>> * ResourceAccumulationComponent.js
>>>>>>> * ResourcesComponent.js
>>>>>>> * RevealedComponent.js
>>>>>>> * SaveComponent.js
>>>>>>> * VisitedComponent.js
>>>>>>
>>>>>> src/game/components/level -
>>>>>>> * LevelPassagesComponent.js
>>>>>> 
>>>>>> src/game/components/player -
>>>>>>> * AutoPlayComponent.js
>>>>>>> * BagComponent.js
>>>>>>> * DeityComponent.js
>>>>>>> * EvidenceComponent.js
>>>>>>> * ItemsComponent.js
>>>>>>> * PerksComponent.js
>>>>>>> * PlayerActionComponent.js
>>>>>>> * PlayerActionResultComponent.js
>>>>>>> * RumoursComponent.js
>>>>>>> * StaminaComponent.js
>>>>>>> * VisionComponent.js
>>>>>>
>>>>>> src/game/components/sector -
>>>>>>> * CurrentNearestCampComponent.js
>>>>>>> * EnemiesComponent.js
>>>>>>> * FightComponent.js
>>>>>>> * FightEncounterComponent.js
>>>>>>> * LastVisitedCampComponent.js
>>>>>>> * MovementOptionsComponent.js
>>>>>>> * OutgoingCaravansComponent.js
>>>>>>> * PassagesComponent.js
>>>>>>> * ReputationComponent.js
>>>>>>> * SectorControlComponent.js
>>>>>>> * SectorFeaturesComponent.js
>>>>>>> * SectorLocalesComponent.js
>>>>>>> * SectorStatusComponent.js
>>>>>>>
>>>>>>> src/game/components/sector/events -
>>>>>>>> * CampEventTimersComponent.js
>>>>>>>> * RaidComponent.js
>>>>>>>> * TraderComponent.js
>>>>>>>
>>>>>>> src/game/components/sector/improvements -
>>>>>>>> * SectorCollectorsComponent.js
>>>>>>>> * SectorImprovementsComponent.js
>>>>>>>> * WorkshopComponent.js
>>>>>>
>>>>>> src/game/components/tribe -
>>>>>>> * UpgradesComponent.js
>>>>>>
>>>>>> src/game/components/type -
>>>>>>> * LevelComponent.js
>>>>>>> * PlayerComponent.js
>>>>>>> * SectorComponent.js
>>>>>>> * TribeComponent.js
>>>>>>
>>>>>
>>>>> src/game/constants -
>>>>>> * AutoPlayConstants.js
>>>>>> * BagConstants.js
>>>>>> * CampConstants.js
>>>>>> * CanvasConstants.js
>>>>>> * CheatConstants.js
>>>>>> * EnemyConstants.js
>>>>>> * FightConstants.js
>>>>>> * GameConstants.js
>>>>>> * HazardConstants.js
>>>>>> * ItemConstants.js
>>>>>> * LevelConstants.js
>>>>>> * LocaleConstants.js
>>>>>> * LogConstants.js
>>>>>> * MovementConstants.js
>>>>>> * OccurrenceConstants.js
>>>>>> * PerkConstants.js
>>>>>> * PlayerActionConstants.js
>>>>>> * PlayerActionsHelperConstants.js
>>>>>> * PlayerStatConstants.js
>>>>>> * PositionConstants.js
>>>>>> * SectorConstants.js
>>>>>> * StoryConstants.js
>>>>>> * SystemPriorities.js
>>>>>> * TextConstants.js
>>>>>> * TradeConstants.js
>>>>>> * TribeConstants.js
>>>>>> * UIConstants.js
>>>>>> * UpgradeConstants.js
>>>>>> * WorldCreatorConstants.js
>>>>>
>>>>> src/game/helpers -
>>>>>> * ButtonHelper.js
>>>>>> * CampHelper.js
>>>>>> * EndingHelper.js
>>>>>> * EnemyHelper-bak.js
>>>>>> * FightHelper.js
>>>>>> * ItemsHelper.js
>>>>>> * LevelHelper.js
>>>>>> * MovementHelper.js
>>>>>> * PlayerActionResultsHelper.js
>>>>>> * PlayerActionsHelper.js
>>>>>> * ResourcesHelper.js
>>>>>> * SaveHelper.js
>>>>>> * SectorHelper.js
>>>>>> * UpgradeEffectsHelper.js
>>>>>>
>>>>>> src/game/helpers/ui -
>>>>>>> * ChangeLogHelper.js
>>>>>>> * UIMapHelper.js
>>>>>>> * UIPopupManager.js
>>>>>>> * UITechTreeHelper.js
>>>>>>
>>>>>
>>>>> src/game/nodes -
>>>>>> * FightNode.js
>>>>>> * LastVisitedCampNode.js
>>>>>> * LogNode.js
>>>>>> * NearestCampNode.js
>>>>>> * PlayerActionNode.js
>>>>>> * PlayerLocationNode.js
>>>>>> * PlayerPositionNode.js
>>>>>>
>>>>>> src/game/nodes/common -
>>>>>>> * SaveNode.js
>>>>>>
>>>>>> src/game/nodes/level -
>>>>>>> * LevelNode.js
>>>>>>> * PlayerLevelNode.js
>>>>>>
>>>>>> src/game/nodes/player -
>>>>>>> * AutoPlayNode.js
>>>>>>> * DeityNode.js
>>>>>>> * ItemsNode.js
>>>>>>> * PlayerActionResultNode.js
>>>>>>> * PlayerResourcesNode.js
>>>>>>> * PlayerStatsNode.js
>>>>>>> * StaminaNode.js
>>>>>>> * VisionNode.js
>>>>>>
>>>>>> src/game/nodes/sector -
>>>>>>> * CampNode.js  
>>>>>>> * CampResourcesNode.js  
>>>>>>> * SectorCollectorsNode.js  
>>>>>>> * SectorImprovementsNode.js  
>>>>>>> * SectorNode.js  
>>>>>>> * VisitedSectorNode.js  
>>>>>>
>>>>>> src/game/nodes/tribe -
>>>>>>> * TribeResourcesNode.js  
>>>>>>> * TribeUpgradesNode.js  
>>>>>>
>>>>> src/game/systems -
>>>>>> * AutoPlaySystem.js  
>>>>>> * BagSystem.js  
>>>>>> * CheatSystem.js  
>>>>>> * CollectorSystem.js  
>>>>>> * EndingSystem.js  
>>>>>> * EvidenceSystem.js  
>>>>>> * FaintingSystem.js  
>>>>>> * FightSystem.js  
>>>>>> * GameManager.js  
>>>>>> * GlobalResourcesResetSystem.js  
>>>>>> * GlobalResourcesSystem.js  
>>>>>> * HazardSystem.js  
>>>>>> * LevelPassagesSystem.js  
>>>>>> * PlayerActionSystem.js  
>>>>>> * PlayerPositionSystem.js  
>>>>>> * PopulationSystem.js  
>>>>>> * ReputationSystem.js  
>>>>>> * RumourSystem.js  
>>>>>> * SaveSystem.js  
>>>>>> * SectorStatusSystem.js  
>>>>>> * SlowUpdateSystem.js  
>>>>>> * StaminaSystem.js  
>>>>>> * UnlockedFeaturesSystem.js  
>>>>>> * VisionSystem.js  
>>>>>> * WorkerSystem.js  
>>>>>>
>>>>>> src/game/systems/occurrences -
>>>>>>> * BlueprintVO.js  
>>>>>>> * EnemyVO.js  
>>>>>>> * EnvironmentalHazardsVO.js  
>>>>>>> * FightItemEffectsVO.js  
>>>>>>> * ImprovementVO.js  
>>>>>>> * IncomingCaravanVO.js  
>>>>>>> * ItemBonusVO.js  
>>>>>>> * ItemVO.js  
>>>>>>> * LevelProjectVO.js  
>>>>>>> * LevelVO.js  
>>>>>>> * LocaleVO.js  
>>>>>>> * LogMessageVO.js  
>>>>>>> * MovementBlockerVO.js  
>>>>>>> * OutgoingCaravanVO.js  
>>>>>>> * PassageVO.js  
>>>>>>> * PathConstraintVO.js  
>>>>>>> * PerkVO.js  
>>>>>>> * PlayerActionVO.js  
>>>>>>> * PositionVO.js  
>>>>>>> * RaidVO.js  
>>>>>>> * ResourcesVO.js  
>>>>>>> * ResultVO.js  
>>>>>>> * SectorVO.js  
>>>>>>> * StashVO.js  
>>>>>>> * TabCountsVO.js  
>>>>>>> * TradingPartnerVO.js  
>>>>>>> * UpgradeVO.js  
>>>>>>> * WorldVO.js  
>>>>>>
>>>>>> src/game/systems/ui -
>>>>>>> * UIOutBagSystem.js  
>>>>>>> * UIOutBlueprintsSystem.js  
>>>>>>> * UIOutCampSystem.js  
>>>>>>> * UIOutCampVisSystem.js  
>>>>>>> * UIOutElementsSystem.js  
>>>>>>> * UIOutEmbarkSystem.js  
>>>>>>> * UIOutFightSystem.js  
>>>>>>> * UIOutFollowersSystem.js  
>>>>>>> * UIOutHeaderSystem.js  
>>>>>>> * UIOutLevelSystem.js  
>>>>>>> * UIOutLogSystem.js  
>>>>>>> * UIOutManageSaveSystem.js  
>>>>>>> * UIOutMapSystem.js  
>>>>>>> * UIOutPopupInnSystem.js  
>>>>>>> * UIOutPopupInventorySystem.js  
>>>>>>> * UIOutPopupTradeSystem.js  
>>>>>>> * UIOutProjectsSystem.js  
>>>>>>> * UIOutTradeSystem.js  
>>>>>>> * UIOutTribeSystem.js  
>>>>>>> * UIOutUpgradesSystem.js  
>>>>>>
>>>>> src/game/vos -
>>>>>> * BlueprintVO.js  
>>>>>> * EnemyVO.js  
>>>>>> * EnvironmentalHazardsVO.js  
>>>>>> * FightItemEffectsVO.js  
>>>>>> * ImprovementVO.js  
>>>>>> * IncomingCaravanVO.js  
>>>>>> * ItemBonusVO.js  
>>>>>> * ItemVO.js  
>>>>>> * LevelProjectVO.js  
>>>>>> * LevelVO.js  
>>>>>> * LocaleVO.js  
>>>>>> * LogMessageVO.js  
>>>>>> * MovementBlockerVO.js  
>>>>>> * OutgoingCaravanVO.js  
>>>>>> * PassageVO.js  
>>>>>> * PathConstraintVO.js  
>>>>>> * PerkVO.js  
>>>>>> * PlayerActionVO.js  
>>>>>> * PositionVO.js  
>>>>>> * RaidVO.js  
>>>>>> * ResourcesVO.js  
>>>>>> * ResultVO.js  
>>>>>> * SectorVO.js  
>>>>>> * StashVO.js  
>>>>>> * TabCountsVO.js  
>>>>>> * TradingPartnerVO.js  
>>>>>> * UpgradeVO.js  
>>>>>> * WorldVO.js  
>>>>>
>>>>> src/game/worldcreator -
>>>>>> * EnemyCreator.js  
>>>>>> * WorldCreator.js  
>>>>>> * WorldCreatorDebug.js  
>>>>>> * WorldCreatorHelper.js  
>>>>>> * WorldCreatorRandom.js  
>>>>>
>>>> src/utils -
>>>>> * MathUtils.js  
>>>>> * PathFinding.js  
>>>>> * UIState.js  
>>>>> * VOCache.js  
>>>>
>> 
>> 样式配置
>>
>>> css -
>>>> * color.css    
>>>> colors.less    
>>>> * gridism.css    
>>>> * main.css    
>>>> main.less    
>>>> * normalize.css    
>>>> * scrollbar.css    
>>>> scrollbar.less    
>>>> * vis.css    
>>>> vis.less    
>>
>> 图片文件
>>> favicon-16x16.png    
>>> favicon-32x32.png    
>>> favicon.ico    
>>>
>>> img/（90.png）
>>>> * sources.txt
>>>>
>>>> img/eldorado -
>>>>> * readme.txt
>>>>
>>>> img/open-iconic -
>>>>> * ICON-LICENSE
>>>>
>>>> img/items -
>>>>> * FUGUE-README.txt      
>>>>> img/items/blueprints -    
>>>>> img/items/followers -
>>>>
>>>
>> 
>> 插件类库
>>
>>> lib -
>>>> lib/ash -    
>>>> lib/brejep -     
>>>> lib/jquery -    
>>>> lib/lzstring -     
>>>> lib/requirejs -     
>>>> lib/webtoolkit -     
>>>
>>
>> 远程配置
>>
>>> .gitignore    
>>
>

---

### 贡献

| ![Likexia](https://avatar.gitee.com/uploads/72/646972_likexia.png) | ![Jarodger](https://avatar.gitee.com/uploads/38/2284238_jarodger.png!) | ![Noora Routasuo](https://images.gitee.com/uploads/images/2019/0314/102706_720c4c1e_2284238.jpeg) |
| :-: | :-: | :-: |
| [Likexia](https://gitee.com/likexia/) | [Jarodger](https://gitee.com/jarodger/) | [Noora Routasuo](https://github.com/nroutasuo/) |

---

## Code Overview

The project uses [jQuery](https://jquery.com/), [Require.js](http://requirejs.org/), and [Ash.js](https://github.com/brejep/ash-js) and is structured into entities, components and systems.

### Entities and Components

 There are four types of entities: 

 the player, 
 the tribe, 
 sectors and
 levels.

 The player entity has a position, items, stats and so on. The tribe entity stores general game status such as unlocked upgrades. Sectors and levels represent the structure and status of the game world.

All actual game data is stored in various [Components](https://github.com/nroutasuo/level13/tree/master/src/game/components) of these entities and the game save simply consists of selected components.

### Player Actions

Everything that the player can do in the game - mainly button clicks - are "player actions". Each action has a name, costs, requirements and so on defined in the [PlayerActionConstants](https://github.com/nroutasuo/level13/blob/master/src/game/constants/PlayerActionConstants.js). The [PlayerActionFunctions](https://github.com/nroutasuo/level13/blob/master/src/game/PlayerActionFunctions.js) class contains a function for each action and handles their results. Various helper classes take care of checking those requirements, deducting costs, unifying random encounters etc.

### WorldCreator

At the start of a new game, a seed value is assigned. The world is generated based on this seed and only the seed needs to be saved between sessions.

![samplelevel2](/docs/samplelevel2.PNG)![samplelevel3](/docs/samplelevel3.PNG)

(Sample level structure)

The [WorldCreator](https://github.com/nroutasuo/level13/blob/master/src/game/worldcreator/WorldCreator.js) generates from the seed value

* Basic structure of the world (ground level, surface level, sector locations and passages between levels)
* World texture (sector features like building density and environmental hazards)
* Locales (special locations that the player can visit once)
* Resources (locations where the player can find supplies and workshops)
* Enemies (locations and types of enemies that appear in some sectors)

Two basic units for balancing the WorldCreator are the camp ordinal and the level ordinal. Level 13 where the player always starts has level ordinal 1 and camp ordinal 1.

## Contributing

If you want to report bugs or suggest new features please read the [contributing guidelines](docs/CONTRIBUTING.md) first.

## Links

Level 13 is heavily inspired by [A Dark Room]( http://adarkroom.doublespeakgames.com/). Other great text-based and / or incremental games that the game owes much inspiration to include:

* [Kittens Game](http://bloodrizer.ru/games/kittens/)
* [Shark Game](http://cirri.al/sharks/)
* [Crank](https://faedine.com/games/crank/b39/)
* [Junction Gate](http://www.junctiongate.com/)
* [CivClicker](http://dhmholley.co.uk/civclicker.html)
* [Properity](http://playprosperity.ca/)
