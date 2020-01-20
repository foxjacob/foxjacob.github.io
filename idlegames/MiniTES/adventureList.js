//////////////////////////////////////////////////////////////////////////////////////////
//
//
//				WARNING - This .js file contains spoilers for the entire game.
//						- Here's an ASCII cow as a consolation prize. Take it and leave :o
//
//
//
//
//
//                                        /|                        /|
//                                        | \           __ _ _     / ;
//                                  ___    \ \   _.-"-" `~"\  `"--' /
//                              _.-'   ""-._\ ""   ._,"  ; "\"--._./
//                          _.-'       \./    "-""", )  ~"  |
//                         / ,- .'          ,     '  `o.  ;  )
//                         \ ;/       '                 ;   /
//                          |/        '      |      \   '   |
//                          /        |             J."\  ,  |
//                         "         :       \   .'  : | ,. _)
//                         |         |     /     f |  |`--"--'
//                          \_        \    \    / _/  |
//                           \ "-._  _.|   (   j/; -'/
//                            \  | "/  (   |   /,    |
//                             | \  |  /\  |\_///   /
//                             \ /   \ | \  \  /   /
//                              ||    \ \|  |  |  |
//                              ||     \ \  |  | /
//                              |\      |_|/   ||
//                              L \       ||   ||
//                              `"'       |\   |\
//                  [nabis]               ( \. \ `.
//                                        |_ _\|_ _\
//                                          "    "
//                                      
//
//
//
//
//
//				Spoilers will commence in 50 lines..
//
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//                         
//
//				Spoilers will commence in 20 lines..
//
//
//
//
//
//
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////


// grind (grindSpeed, itemDropChance, itemDropVariableName, skillLevelRequirementToEnter, skillRequiredToEnter, skill, text, lockedText)
// combat (mobTier(unused in code), itemDropChance, itemDropVariableName, 
//					minDamage, maxDamage, hitRate,			 	AC, HP, 			critChance, evasionChance, blockChance, 			mobName)
//						(no modifiers)						(no modifiers)							(no modifiers)



function selectAdventureTypeBasedOnCurrentArea () {
	if (cow.currentTab == "main") {

	var x = 4.8; // default # of XPs per grind.
	var v = 2.0; // Less XP for grinding a combat skill
	var	y = 35; // default chance of a mob dropping a gear piece
	var z = 9.1; // Extra XPs for grinding in a skill gate, or in a combat zone (non combat only)
	var w = 2.4; // XPs for '寻找怪物……'; it's fucking everywhere 
	if (cow.keyItem15have == true) { y = 40;}

if (cow.currentMap == "Vieda Port") {
	if (cow.worldMapRNG == 0)	{ grind  (0, 0, "", 			0, "",			"stealth", 	"在人群中徘徊……",								""); } else
	if (cow.worldMapRNG < 20)	{ grind  (x, 0, "", 			0, "",			"stealth", 	"在人群中徘徊……",								""); } else
	if (cow.worldMapRNG < 40)	{ grind  (x, 0, "", 			0, "",			"smash", 	"打破一些废弃的陶罐……",							""); } else
	if (cow.worldMapRNG < 60)	{ grind  (x, 0, "", 			0, "",			"climb", 	"从塔顶欣赏风景……",						""); } else
	if (cow.worldMapRNG < 75)	{ grind  (z, 50, "keyItem1",	2, "stealth",	"speech",	"在一个冒险家的酒吧放松……",	"找一个人多的酒吧，但不要鬼鬼祟祟地从门卫身边溜过去……"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L0", y, "T1",  			4,	7,	50,		0,	20,		1,	0,	0,		"Field Rat"); } else 
	if (cow.worldMapRNG < 85)	{ combat ("L0", y, "T1",  			3,	4,	50,		0,	10,		10,	0,	0,		"Thorngrass"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L0", y, "T1",  			4,	6,	50,		0,	20,		1,	0,	0,		"Gull"); } else
	if (cow.worldMapRNG < 97)	{ combat ("L1", y, "T1",  			5,	5,	50,		1,	30,		0,	0,	0,		"Ocean Mote"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L3", y, "T2",  			8,	12,	50,		3,	45,		1,	0,	10,		"Nailfish"); }
}

if (cow.currentMap == "Nomad's Guild" && cow.keyItem1have == true) {
	if (cow.worldMapRNG < 5)	{ grind  (v, 0, "", 			0, "",			"axe", 		"用手斧劈柴……", 													""); } else
	if (cow.worldMapRNG < 20 && cow.keyItem2have == true)
								{ grind  (v, 0, "", 			0, "",			"axe", 		"用手斧劈柴……", 													""); } else
	if (cow.worldMapRNG < 20 && cow.bestdagger != 0 && cow.bestfist != 0 && cow.bestsword != 0 && cow.bestmace != 0 && cow.bestspear != 0 && cow.bestaxe != 0)	
								{ grind  (v, 100, "keyItem2", 	0, "",			"speech", 	"因为你的技能提高而获得奖励……", 									""); } else
	if (cow.worldMapRNG < 20 && cow.keyItem2have == false)
								{ grind  (v, 0, "", 			0, "",			"speech", 	"你学到了如果你拥有每种武器类型中的一种，你就可以获得奖品……",			""); } else
	if (cow.worldMapRNG < 30)	{ grind  (v, 0, "", 			0, "",			"sword",	"练习剑陪练……", 														""); } else
	if (cow.worldMapRNG < 40)	{ grind  (v, 0, "", 			0, "",			"mace", 	"挥舞着沉重的权杖……", 													""); } else
	if (cow.worldMapRNG < 50)	{ grind  (v, 0, "", 			0, "",			"dagger", 	"用匕首精确训练……", 													""); } else
	if (cow.worldMapRNG < 60)	{ grind  (v, 0, "",				0, "",			"fist",		"徒手格斗技术……", 											""); } else
	if (cow.worldMapRNG < 70)	{ grind  (v, 0, "", 			0, "",			"hArmor", 	"使用重型盔甲练习动作技巧……", 										""); } else
	if (cow.worldMapRNG < 80)	{ grind  (v, 0, "", 			0, "",			"mArmor", 	"用一套加重的盔甲训练……", 												""); } else
	if (cow.worldMapRNG < 90)	{ grind  (v, 0, "", 			0, "",			"lArmor",	"学习如何有效地使用轻型装甲……", 										""); } else
	if (cow.worldMapRNG < 97)	{ combat ("L1",  30, "T1", 			5,	7,	50,		2,	30,		3,	0,	5,		"Drunkard"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L10", 50, "T5", 			30,	34,	150,	50,	130,	10,	30,	16,		"Guildmaster"); }
}

if (cow.currentMap == "Nomad's Guild" && cow.keyItem1have == false) 
								{ grind  (0, 0, "", 			0, "",			"speech",	"你需要在维达找到一个公会通行证才能进入这里……", 							""); }
							
if (cow.currentMap == "Crystalspire Forest") {
	if (cow.worldMapRNG < 55)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"寻找怪物……", 											""); } else
	if (cow.worldMapRNG < 60)	{ grind  (z, 100, "keyItem4",	40, "climb",	"climb", 	"攀爬大树……", "树太高了、你爬不到顶……"); } else
	if (cow.worldMapRNG < 63)	{ grind  (z, 0, "", 			0, "",			"endure", 	"迎风而行……", 								""); } else
	if (cow.worldMapRNG < 67)	{ grind  (z, 0, "", 			0, "",			"medic", 	"寻找药草……", 									""); } else
	if (cow.worldMapRNG < 70)	{ grind  (z, 80, "keyItem3",	0, "",			"climb",	"攀爬大树……", 											""); } else
	if (cow.worldMapRNG < 75)	{ combat ("L1", y, "T1",  			1,	8,	50,		1,	30,		1,	0,	0,		"Shadowbat"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L1", y, "T1",  			2,	6,	50,		2,	30,		1,	0,	0,		"Forest Jell"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L1", y, "T1",  			5,	7,	50,		2,	30,		1,	0,	0,		"Wisp"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L1", y, "T1",  			4,	5,	50,		1,	30,		1,	0,	6,		"Creeping Vine"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L1", y, "T1",  			3,	6,	50,		1,	30,		1,	0,	0,		"Mushroom Gem"); }
}
















if (cow.currentMap == "Ardana Residential") {
	if (cow.worldMapRNG < 25)	{ grind  (x, 0, "", 			0,  "", 		"unlock", 	"在一所废弃的房子里搜寻……", 							""); } else
	if (cow.worldMapRNG < 50)	{ grind  (x, 0, "", 			0,  "", 		"speech", 	"和一些随机的市民交谈……", 								""); } else
	if (cow.worldMapRNG < 75)	{ grind  (x, 0, "",				0,  "", 		"endure",	"穿过拥挤的街道……",							""); } else
	if (cow.worldMapRNG < 97)	{ grind  (x, 50, "keyItem5",	5, "fist", 		"fist",		"在喧闹的旅馆里争吵……", "你听到旅馆里有人打架，决定不介入……"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L3", y, "T2",  			10,	12,	50,		3,	40,		3,	0,	0,		"Novice Thief"); }
}

if (cow.currentMap == "Ardana Marketplace") {
	if (cow.worldMapRNG < 20)	{ grind  (v, 0, "", 			0, "",			"block", 	"避免拥挤的混战……", 									""); } else
	if (cow.worldMapRNG < 40)	{ grind  (x, 0, "", 			0, "",			"unlock", 	"窥视商店后门……", 									""); } else
	if (cow.worldMapRNG < 60)	{ grind  (v, 0, "",				0, "",			"dodge",	"躲避一把鸡蛋……", 										""); } else
	if (cow.worldMapRNG < 80)	{ grind  (x, 0, "",				0, "",			"climb",	"抄近路穿过城镇……",									""); } else
	if (cow.worldMapRNG < 90)	{ grind  (x, 5, "",				0, "",			"smash",	"协助拆卸街市货摊……", 							""); } else
	if (cow.worldMapRNG < 95)	{ grind  (z, 100, "keyItem6",	40, "unlock",	"unlock", 	"打开一扇防护过度的可疑门……", "你发现了一扇可疑的上锁的门，但却打不开……"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L3", 100, "keyItem7",	1,	14,	40,		2,	40,		3,	0,	6,		"Pickpocket"); }
}

if (cow.currentMap == "Silverpool Tides") {
	if (cow.worldMapRNG < 55)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"寻找怪物……", 											""); } else
	if (cow.worldMapRNG < 60)	{ grind  (z, 100, "keyItem8",	40, "speech",	"speech", 	"访问贤者……", "你遇到一个老隐士，但你们似乎不能相互理解……"); } else
	if (cow.worldMapRNG < 63)	{ grind  (z, 0, "", 			0, "",			"athlete", 	"陷入激流……", 											""); } else
	if (cow.worldMapRNG < 67)	{ grind  (v, 0, "", 			0, "",			"spear", 	"用矛叉鱼……", 													""); } else
	if (cow.worldMapRNG < 70)	{ grind  (z, 5, "",				0, "",			"climb",	"池边徘徊……", 									""); } else
	if (cow.worldMapRNG < 75)	{ combat ("L3", y, "T2",  			8,	12,	50,		3,	45,		1,	0,	0,		"Skyfish"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L3", y, "T2",  			6,	10,	50,		6,	30,		1,	0,	6,		"Hook Turtle"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L3", y, "T2",  			10,	14,	50,		4,	40,		1,	0,	6,		"Crawler"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L3", y, "T2",  			9,	10,	50,		3,	45,		1,	0,	0,		"Bubblesquid"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L3", y, "T2",  			10,	14,	50,		3,	45,		1,	0,	0,		"Rock Heron"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L4", 100, "mapItem1", 	13,	17,	50,		5,	50,		2,	0,	0,		"Coral Lurker"); }
}

if (cow.currentMap == "Madras") {
	if (cow.worldMapRNG < 5)	{ grind  (z, 50, "mapItem2",	5, "speech",	"speech", 	"议会演讲……", "你请求觐见长老，却被扈从拦住了……"); } else
	if (cow.worldMapRNG < 30)	{ grind  (v, 0, "", 			0, "",			"sword", 	"广场决斗……",					""); } else
	if (cow.worldMapRNG < 50)	{ grind  (v, 0, "",				0, "",			"hArmor",	"板甲特训……",							""); } else
	if (cow.worldMapRNG < 70)	{ grind  (v, 0, "",				0, "",			"mArmor",	"打造中甲……",							""); } else
	if (cow.worldMapRNG < 90)	{ grind  (v, 0, "",				0, "",			"lArmor",	"设计轻甲……",						""); } else
	if (cow.worldMapRNG < 93)	{ combat ("L3", y, "T2", 			1,	12,	50,		3,	45,		1,	0,	0,		"Snow Hound"); } else
	if (cow.worldMapRNG < 96)	{ combat ("L3", y, "T2", 			11,	12,	50,		3,	37,		1,	0,	0,		"Greythorn Falcon"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L4", y, "T2", 			13,	17,	50,		2,	75,		2,	0,	0,		"Airtiger"); }
}

if (cow.currentMap == "Elcot" && cow.mapItem4have == false) {
	if (cow.worldMapRNG < 20)	{ grind  (x, 0, "", 			0, "",			"medic", 	"救治儿童……", 										""); } else
	if (cow.worldMapRNG < 40)	{ grind  (x, 0, "", 			0, "",			"stealth", 	"躲避城管……", 									""); } else
	if (cow.worldMapRNG < 60)	{ grind  (v, 0, "",				0, "",			"axe",		"隐士习斧……", 							""); } else
	if (cow.worldMapRNG < 80)	{ grind  (v, 0, "",				0, "",			"fist",		"英雄习枪……", 								""); } else
	if (cow.worldMapRNG <= 99)	{ grind  (x, 50, "keyItem9",	10, "mArmor",	"mArmor",	"中甲特训……", "你的技能不足以穿着中甲应付这项训练科目……"); }
}

if (cow.currentMap == "Crimson Palace" && cow.mapItem5have == false) {
	if (cow.worldMapRNG < 60)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"寻找怪物……", 											""); } else
	if (cow.worldMapRNG < 63)	{ grind  (z, 0, "", 			0, "",			"smash", 	"砸烂门锁……", 									""); } else
	if (cow.worldMapRNG < 66)	{ grind  (z, 0, "", 			0, "",			"stealth", 	"影中穿梭……", 									""); } else
	if (cow.worldMapRNG < 70)	{ grind  (z, 0, "", 			0, "",			"unlock", 	"撬开门锁……", 										""); } else
	if (cow.worldMapRNG < 75)	{ combat ("L3", y, "T2",  			12,	13,	50,		3,	40,		1,	0,	0,		"Firebat"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L3", y, "T2",  			8,	12,	50,		3,	45,		1,	0,	0,		"Lost Shade"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L3", y, "T2",  			10,	14,	50,		3,	50,		1,	0,	0,		"Ghoul"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L4", y, "T3",  			13,	13,	50,		4,	50,		2,	0,	0,		"Flamespell Element"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L4", y, "T3",  			11,	15,	50,		4,	55,		2,	0,	6,		"Lance Naga"); } else
	if (cow.worldMapRNG < 97)	{ combat ("L2", 50, "T3",  			3,	4,	120,	0,	20,		0,	20,	6,		"Covetous Imp"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L4", 100, "keyItem10",	12,	16,	50,		5,	55,		2,	0,	0,		"Blazing Apparition"); }
}
















if (cow.currentMap == "Ardana Slums") {
	if (cow.worldMapRNG < 5)							{ grind  (v, 5, "",				0, "",			"fist", 	"抓住窃贼……", 																	""); } else
	if (cow.worldMapRNG < 15)							{ grind  (v, 0, "", 			0, "",			"dodge", 	"避开一个颠覆的夜壶……", 														""); } else
	if (cow.worldMapRNG < 25)							{ grind  (v, 0, "",				0, "",			"dagger",	"匕首可以用在暗巷激战……", 													""); } else
	if (cow.worldMapRNG < 40 && cow.mapItem3have == false && cow.keyItem5have == true && cow.keyItem7have == true)
														{ grind  (x, 100, "mapItem3",	0, "",			"speech", 	"古董收藏家给你一张地图解除你的烦恼……", 							""); } else
	if (cow.worldMapRNG < 40 && cow.mapItem3have == false && cow.keyItem5have == false)
														{ grind  (x, 0, "",				0, "",			"speech", 	"一位乡村来的古董商邀你鉴赏一幅披肩……", 				""); } else
	if (cow.worldMapRNG < 40 && cow.mapItem3have == false && cow.keyItem7have == false)
														{ grind  (x, 0, "",				0, "",			"speech", 	"一位市场里的古董商邀你鉴赏一把锤子……", 					""); } else
	if (cow.worldMapRNG < 40 && cow.mapItem3have == true){ grind (x, 0, "",				0, "",			"speech", 	"走访收藏家……", 												""); } else
	if (cow.worldMapRNG < 50)							{ grind  (x, 0, "",				0, "",			"medic",	"医治农民……", 															""); } else
	if (cow.worldMapRNG < 70)							{ grind  (x, 0, "",				0, "",			"athlete",	"和一群当地的孩子一起玩冒险游戏……", 										""); } else
	if (cow.worldMapRNG < 80)							{ combat ("L5", y, "T3", 			11,	17,	55,		6,	50,		2,	5,	8,		"Marauder"); } else
	if (cow.worldMapRNG < 90)							{ combat ("L5", y, "T3", 			1,	16,	55,		4,	50,		2,	5,	0,		"Feral Wolf"); } else
	if (cow.worldMapRNG <= 99)							{ combat ("L5", y, "T3", 			15,	19,	55,		6,	60,		2,	5,	8,		"Swordsman"); }
}

if (cow.currentMap == "Obsidian Grasslands") {
	if (cow.worldMapRNG < 60)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"寻找怪物……", 											""); } else
	if (cow.worldMapRNG < 65)	{ grind  (z, 80, "mapItem4",	10,	"endure",	"endure", 	"玉树临风……", "突然一阵风吹来，你站不稳了……"); } else
	if (cow.worldMapRNG < 70)	{ grind  (z, 0, "", 			0, "",			"climb", 	"攀登尖塔……", 					""); } else
	if (cow.worldMapRNG < 75)	{ combat ("L5", y, "T3",  			14,	18,	55,		6,	60,		2,	5,	0,		"Marble Hydrangea"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L5", y, "T3",  			12,	16,	55,		4,	50,		2,	5,	0,		"Prismshade"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L5", y, "T3",  			5,	20,	55,		6,	60,		2,	5,	0,		"Dashing Mare"); } else
	if (cow.worldMapRNG < 93)	{ combat ("L5", y, "T3",  			11,	17,	30,		8,	80,		0,	5,	8,		"Golem"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L5", y, "T3",  			15,	16,	55,		5,	50,		3,	5,	0,		"Cloud Diver"); }
}

if (cow.currentMap == "Deadmoor Tower") {
	if (cow.worldMapRNG < 5)	{ grind  (z, 100, "mapItem5",	10, "unlock",	"unlock", 	"解锁暗门……",		"你发现了一扇隐藏的门，但是锁得太牢了……"); } else
	if (cow.worldMapRNG < 30)	{ grind  (x, 0, "", 			0, "",			"stealth", 	"藏身黑暗……",											""); } else
	if (cow.worldMapRNG < 60)	{ grind  (x, 0, "",				0, "",			"speech",	"走访土著……",							""); } else
	if (cow.worldMapRNG < 89)	{ grind  (x, 0, "",				0, "",			"athlete",	"樊登阶梯……",								""); } else
	if (cow.worldMapRNG < 90)	{ grind  (x, 0, "",				0, "",			"critical",	"发现古董……",			""); } else
	if (cow.worldMapRNG < 93)	{ combat ("L5", y, "T3", 			14,	18,	55,		6,	60,		2,	5,	0,		"Oculus"); } else
	if (cow.worldMapRNG < 96)	{ combat ("L5", y, "T3", 			15,	15,	55,		7,	60,		2,	5,	0,		"Shadow Mote"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L5", y, "T3", 			10,	14,	55,		6,	50,		2,	5,	0,		"Brambleweed"); }
}

if (cow.currentMap == "Sea of Hileo" && cow.mapItem2have == false) {
	if (cow.worldMapRNG < 55)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"寻找怪物……",											""); } else
	if (cow.worldMapRNG < 60)	{ grind  (z, 100, "keyItem11",	40, "endure",	"endure", 	"潜入海底……", "你发现了踪迹却在冰冷的水里无法深入。"); } else
	if (cow.worldMapRNG < 65)	{ grind  (z, 0, "",				0, "",			"endure", 	"冰水游弋……",								""); } else
	if (cow.worldMapRNG < 70)	{ grind  (z, 0, "", 			0, "",			"climb", 	"攀登冰川……",										""); } else
	if (cow.worldMapRNG < 75)	{ grind  (z, 0, "", 			0, "",			"smash", 	"打琢冰道……",							""); } else
	if (cow.worldMapRNG < 80)	{ combat ("L5", y, "T3",  			13,	16,	55,		0,	80,		2,	5,	0,		"Meridian Echo"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L5", y, "T3",  			12,	14,	55,		5,	50,		2,	5,	8,		"Icebloom"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L5", y, "T3",  			14,	18,	55,		6,	65,		2,	5,	0,		"Sea Lion"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L5", y, "T3",  			1,	16,	55,		6,	60,		2,	5,	0,		"Sheet Piranha"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L10", 100, "keyItem12",	28,	36,	150,	50,	130,	4,	40,	12,		"Frost Terror"); }
}

if (cow.currentMap == "Rydale Keep" && cow.mapItem3have == false) {
	if (cow.worldMapRNG < 20)	{ grind  (v, 0, "", 			0, "",			"mace", 	"棒阵演习……",						""); } else
	if (cow.worldMapRNG < 40)	{ grind  (v, 0, "", 			0, "",			"spear",	"枪阵演习……",							""); } else
	if (cow.worldMapRNG < 55)	{ grind  (v, 0, "",				0, "",			"axe",		"斧阵演习……",							""); } else
	if (cow.worldMapRNG < 75)	{ grind  (x, 0, "",				0, "",			"medic",	"随军医护……",						""); } else
	if (cow.worldMapRNG < 95)	{ grind  (x, 0, "",				0, "",			"endure",	"沙场磨练……",									""); } else
	if (cow.worldMapRNG <= 99)	{ grind  (x, 100, "keyItem13",	0, "",			"speech",	"勾引女兵……",							""); }
}

if (cow.currentMap == "Farin's Delve" && cow.mapItem6have == false) {
	if (cow.worldMapRNG < 60)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"寻找怪物……",											""); } else
	if (cow.worldMapRNG < 63)	{ grind  (z, 0, "",				0, "",			"stealth", 	"在深海里鬼鬼祟祟……",										""); } else
	if (cow.worldMapRNG < 66)	{ grind  (z, 0, "", 			0, "",			"unlock", 	"打开一扇隐藏得很好的门……",									""); } else
	if (cow.worldMapRNG < 70)	{ grind  (v, 0, "", 			0, "",			"dodge", 	"躲避落下的石头……",										""); } else
	if (cow.worldMapRNG < 71)	{ grind  (1, 100, "keyItem14",	0, "",			"luk", 		"有东西在视线的角落里闪闪发光……",						""); } else
	if (cow.worldMapRNG < 78)	{ combat ("L5", y, "T3",  			15,	17,	55,		6,	60,		2,	5,	0,		"Cave Beast"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L5", y, "T3",  			14,	15,	55,		4,	50,		2,	5,	0,		"Shrieking Bat"); } else
	if (cow.worldMapRNG < 92)	{ combat ("L5", y, "T3",  			1,	16,	55,		5,	55,		2,	5,	0,		"Ghost"); } else
	if (cow.worldMapRNG < 97)	{ combat ("L6", y, "T4",  			7,	20,	65,		12,	30,		2,	12,	9,		"Mining Automaton"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L6", y, "T4",			9,	11,	65,		11,	65,		2,	35,	0,		"Shining Light"); }
}
















if (cow.currentMap == "Skyview") {
	if (cow.worldMapRNG < 60)	{ grind  (x, 0, "", 			0, "",			"athlete", 	"寻找怪物……",											""); } else
	if (cow.worldMapRNG < 63)	{ grind  (z, 0, "",				0, "",			"smash", 	"粉碎怪石……",										""); } else
	if (cow.worldMapRNG < 66)	{ grind  (z, 0, "",				0, "",			"climb", 	"攀登绝壁……",									""); } else
	if (cow.worldMapRNG < 69)	{ grind  (v, 50, "mapItem6",	0, "",			"dodge", 	"望眼苍穹……",											""); } else
	if (cow.worldMapRNG < 70)	{ grind  (x, 0, "", 			0, "",			"critical",	"电闪破云……",							""); } else
	if (cow.worldMapRNG < 75)	{ combat ("L8", y, "T4",  			26,	30,	135,	18,	127,	2,	25,	10,		"Thresher Tree"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L8", y, "T4",  			27,	28,	135,	16,	110,	3,	25,	0,		"Sunfalcon"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L8", y, "T4",  			27,	29,	135,	18,	125,	3,	25,	0,		"Breath Stinger"); } else
	if (cow.worldMapRNG < 93)	{ combat ("L8", y, "T4",  			26,	30,	135,	18,	125,	2,	25,	0,		"Ember Beetle"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L8", y, "T4",			24,	31,	135,	16,	125,	2,	25,	0,		"Cliffleaper"); }
}

if (cow.currentMap == "Ba'ryst") {
	if (cow.worldMapRNG < 15)	{ grind  (v, 5, "",				0, "",			"fist", 	"庙中冥想……",								""); } else
	if (cow.worldMapRNG < 30)	{ grind  (v, 0, "", 			0, "",			"block", 	"酒吧乱斗……",										""); } else
	if (cow.worldMapRNG < 40)	{ grind  (x, 0, "",				0, "",			"speech",	"交游广阔……",								""); } else
	if (cow.worldMapRNG < 50)	{ grind  (z, 50, "mapItem7",	17, "medic",	"medic",	"学习偏方……", "你发现药典毫无用处……"); } else
	if (cow.worldMapRNG < 60)	{ combat ("L8", y, "T4", 			25,	29,	135,	16,	120,	2,	25,	0,		"Wilting Creep"); } else
	if (cow.worldMapRNG < 75)	{ combat ("L8", y, "T4", 			1,	37,	135,	18,	130,	3,	25,	10,		"Axeman"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L8", y, "T4", 			18,	31,	135,	17,	125,	2,	25,	0,		"Panther"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L8", y, "T4",			26,	30,	135,	15,	125,	3,	25,	10,		"Brawler"); }
}

if (cow.currentMap == "Prismatic Delta") {
	if (cow.worldMapRNG < 60)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"寻找怪物……",											""); } else
	if (cow.worldMapRNG < 66)	{ grind  (v, 0, "",				0, "",			"sword", 	"闭关练剑……",										""); } else
	if (cow.worldMapRNG < 73)	{ grind  (z, 0, "",				0, "",			"athlete", 	"跋山涉水……",								""); } else
	if (cow.worldMapRNG < 80)	{ grind  (z, 0, "",				0, "",			"endure", 	"逆流而上……",									""); } else
	if (cow.worldMapRNG < 83)	{ combat ("L8", y, "T4",  			28,	28,	135,	19,	120,	2,	25,	0,		"Spindrift Mote"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L8", y, "T4",  			24,	28,	135,	18,	120,	2,	25,	0,		"Ring Starfish"); } else
	if (cow.worldMapRNG < 88)	{ combat ("L8", y, "T4",  			1,	22,	135,	5,	150,	4,	25,	0,		"Scythewater"); } else
	if (cow.worldMapRNG < 93)	{ combat ("L8", y, "T4",  			26,	30,	135,	18,	125,	2,	25,	0,		"Alligator"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L8", y, "T4",  			28,	29,	135,	17,	120,	2,	25,	0,		"Crystal Halcyon"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L10", 90, "mapItem8",	1,	38,	150,	50,	130,	4,	30,	12,		"Sword Kraken"); }
}

if (cow.currentMap == "Cerrak" && cow.mapItem1have == false) {
	if (cow.worldMapRNG < 15)	{ grind  (v, 0, "", 			0, "",			"mace", 	"铁匠帮工……",							""); } else
	if (cow.worldMapRNG < 30)	{ grind  (v, 50, "keyItem15",	0, "",			"axe",	 	"斩木为篱……",										""); } else
	if (cow.worldMapRNG < 45)	{ grind  (v, 0, "",				0, "",			"sword",	"武士练剑……",								""); } else
	if (cow.worldMapRNG < 60)	{ grind  (v, 0, "",				0, "",			"spear",	"湖边叉鱼……",										""); } else
	if (cow.worldMapRNG < 75)	{ grind  (v, 0, "",				0, "",			"dagger",	"学习木雕……",											""); } else
	if (cow.worldMapRNG < 90)	{ grind  (x, 0, "",				0, "",			"endure",	"土著野营……",							""); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L12", y, "T6",			30,	40,	165,	120,140,		8,	45,	15,		"Townwarden Mauhagr"); }
}

if (cow.currentMap == "Burning Cloudsea" && cow.mapItem7have == false) {
	if (cow.worldMapRNG < 60)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"寻找怪物……",											""); } else
	if (cow.worldMapRNG < 63)	{ grind  (z, 70, "keyItem16",	20, "athlete",	"athlete", 	"高空训练……", "空气稀薄；你不得不停下来喘一口气……"); } else
	if (cow.worldMapRNG < 66)	{ grind  (z, 0, "",				0, "",			"medic", 	"深山采药……",							""); } else
	if (cow.worldMapRNG < 70)	{ grind  (z, 0, "",				0, "",			"climb", 	"攀登山峰……",										""); } else
	if (cow.worldMapRNG < 75)	{ combat ("L8", y, "T4",  			29, 29,	135,	20,	120,	2,	25,	0,		"Skypyre Element"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L8", y, "T4",  			1,	32,	135,	6,	160,	2,	25,	0,		"Vaporwave"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L8", y, "T4",  			26,	30,	135,	18,	125,	2,	25,	0,		"Cinder Oak"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L8", y, "T4",  			22,	32,	135,	18,	125,	2,	25,	10,		"Razorwalker"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L8", y, "T4",  			28,	29,	135,	18,	125,	2,	25,	10,		"Wing Breaker"); }
}

if (cow.currentMap == "Siruvan" && cow.mapItem8have == false && cow.keyItem21have == false) {
	if (cow.worldMapRNG < 10)	{ combat ("L0", y, "T1",  			3,	4,	50,		0,	10,		10,	0,	0,		"Thorngrass"); } else
	if (cow.worldMapRNG < 20)	{ combat ("L1", y, "T1",  			1,	8,	50,		1,	30,		1,	0,	0,		"Shadowbat"); } else
	if (cow.worldMapRNG < 30)	{ combat ("L3", y, "T2",  			1,	14,	50,		2,	40,		3,	0,	6,		"Pickpocket"); } else
	if (cow.worldMapRNG < 40)	{ combat ("L3", 50, "keyItem17",	8,	12,	50,		3,	45,		1,	0,	0,		"Lost Shade"); } else
	if (cow.worldMapRNG < 50)	{ combat ("L4", y, "T2",  			13,	13,	50,		4,	50,		2,	0,	0,		"Flamespell Element"); } else
	if (cow.worldMapRNG < 60)	{ combat ("L5", y, "T3",  			15,	19,	55,		6,	60,		2,	5,	7,		"Swordsman"); } else
	if (cow.worldMapRNG < 70)	{ combat ("L6", y, "T3",  			9,	11,	65,		11,	65,		2,	35,	0,		"Shining Light"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L8", y, "T4",  			28,	28,	135,	19,	120,	2,	25,	0,		"Spindrift Mote"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L8", y, "T4",  			26,	30,	135,	18,	125,	2,	25,	0,		"Alligator"); } else
	if (cow.worldMapRNG < 97)	{ combat ("L4", 30, "T4",  			6,	10,	190,	4,	60,		0,	10,	11,		"Covetous Goblin"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L10", y, "T5",  			28,	34,	150,	50,	130,	3,	30,	12,		"Moonbrood Runner"); }
}
















if (cow.currentMap == "Elcot" && cow.mapItem4have == true) {
	if (cow.worldMapRNG < 20)	{ grind  (x, 0, "", 			0, "",			"medic", 	"救治儿童……",										""); } else
	if (cow.worldMapRNG < 35)	{ grind  (x, 0, "", 			0, "",			"stealth",	"躲避城管……",									""); } else
	if (cow.worldMapRNG < 55)	{ grind  (v, 0, "",				0, "",			"axe",		"隐士习斧……",							""); } else
	if (cow.worldMapRNG < 68)	{ grind  (v, 0, "",				0, "",			"fist",		"英雄习枪……",								""); } else
	if (cow.worldMapRNG < 80)	{ grind  (x, 50, "keyItem9",	10, "mArmor",	"mArmor",	"中甲特训……", "你的技能不足以穿着中甲应付这项训练科目……"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L10", y, "T5",  			25,	35,	150,	50,	130,	3,	30,	12,		"Town Guard"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L10", y, "T5",  			1,	37,	150,	35,	150,	3,	30,	0,		"Looting Mob"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L10", y, "T5",  			30,	34,	150,	50,	130,	3,	30,	12,		"Marshraider"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L10", 80, "seal1",  		22,	32,	150,	40,	130,	3,	30,	0,		"Rampaging Beast"); }
}

if (cow.currentMap == "Crimson Palace" && cow.mapItem5have == true) {
	if (cow.worldMapRNG < 40)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"寻找怪物……",											""); } else
	if (cow.worldMapRNG < 46)	{ grind  (z, 80, "seal2", 		25, "smash",	"smash", 	"砸开一扇锁得严严实实的门……", "找到一扇看起来和以前不一样的门，但是你不能把它打破……"); } else
	if (cow.worldMapRNG < 53)	{ grind  (z, 0, "", 			0, "",			"stealth", 	"在阴影中穿梭……",									""); } else
	if (cow.worldMapRNG < 60)	{ grind  (z, 0, "", 			0, "",			"unlock", 	"打开一扇锁着的门……",										""); } else
	if (cow.worldMapRNG < 65)	{ combat ("L3", y, "T2",  			10,	14,	50,		3,	50,		1,	0,	0,		"Ghoul"); } else
	if (cow.worldMapRNG < 70)	{ combat ("L4", y, "T2",  			11,	15,	50,		4,	55,		2,	0,	6,		"Lance Naga"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L10", y, "T5",  			30,	30,	150,	60,	130,	3,	30,	0,		"Scatterflame Mote"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L10", y, "T5",  			1,	36,	150,	50,	130,	3,	30,	12,		"Minotaur"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L10", y, "T5",  			22,	27,	110,	90,	140,	1,	10,	0,		"Cursed Sculpture"); } else
	if (cow.worldMapRNG < 97)	{ combat ("L5", 50, "T5",  			6,	10,	160,	18,	60,		20,	60,	9,		"Covetous Jadeslime"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L4", 100, "keyItem10",	12,	16,	50,		5,	55,		2,	0,	0,		"Blazing Apparition"); }
}

if (cow.currentMap == "Sea of Hileo" && cow.mapItem2have == true) {
	if (cow.worldMapRNG < 35)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"寻找怪物……",											""); } else
	if (cow.worldMapRNG < 40)	{ grind  (z, 100, "keyItem11",	40, "endure",	"endure", 	"潜入海底……", "在海底发现一些东西，但是水太冷了，不能潜入水中……"); } else
	if (cow.worldMapRNG < 45)	{ grind  (z, 0, "",				0, "",			"endure", 	"在冰冷的冰水中游泳……",								""); } else
	if (cow.worldMapRNG < 50)	{ grind  (z, 100, "seal3",		25, "climb",	"climb", 	"攀登部分融化的冰川……",	"现在冰川很滑。你绊了一下，滑倒了……"); } else
	if (cow.worldMapRNG < 55)	{ grind  (z, 0, "", 			0, "",			"smash", 	"在冰柱上开辟一条路……",							""); } else
	if (cow.worldMapRNG < 60)	{ combat ("L5", y, "T3",  			13,	16,	55,		0,	80,		2,	5,	0,		"Meridian Echo"); } else
	if (cow.worldMapRNG < 68)	{ combat ("L5", y, "T3",  			14,	18,	55,		6,	65,		2,	5,	0,		"Sea Lion"); } else
	if (cow.worldMapRNG < 78)	{ combat ("L10", y, "T5",  			30,	34,	150,	50,	130,	3,	30,	12,		"Silverspine"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L10", y, "T5",  			31,	34,	150,	70,	140,	3,	30,	12,		"Polar Drake"); } else
	if (cow.worldMapRNG < 92)	{ combat ("L10", y, "T5",  			31,	32,	165,	40,	110,	6,	30,	0,		"Watertrap Spider"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L10", 100, "keyItem12",	28,	36,	150,	50,	130,	4,	40,	12,		"Frost Terror"); }
}

if (cow.currentMap == "Rydale Keep" && cow.mapItem3have == true) {
	if (cow.worldMapRNG < 20)																{ grind  (v, 0, "", 			0, "",			"mace", 	"杖队演习……",						""); } else
	if (cow.worldMapRNG < 40)																{ grind  (v, 0, "", 			0, "",			"spear",	"枪阵演习……",							""); } else
	if (cow.worldMapRNG < 60)																{ grind  (v, 0, "",				0, "",			"axe",		"斧阵演习……",							""); } else
	if (cow.worldMapRNG < 80)																{ grind  (x, 0, "",				0, "",			"medic",	"随军医护……",						""); } else
	if (cow.worldMapRNG < 90)																{ grind  (x, 0, "",				0, "",			"endure",	"沙场磨练……",									""); } else
	if (cow.worldMapRNG < 95 && cow.seal4have == true)										{ grind  (x, 100, "keyItem13",	0, "",			"speech",	"勾引女兵……",							""); } else
	if (cow.worldMapRNG < 95 && cow.seal4have == false && cow.keyItem18have == true)		{ grind  (x, 100, "seal4",		0, "",			"speech",	"你得到了水之封印！",									""); } else
	if (cow.worldMapRNG < 95 && cow.seal4have == false && cow.keyItem18have == false)		{ grind  (x, 100, "keyItem13",	0, "",			"speech",	"被索要蓝玉翎！",		""); } else
	if (cow.worldMapRNG <= 99)																{ combat ("L11", 10, "T6",  		20,	30,	165,	85,	90,		4,	35,	0,		"Imprisoned Monster"); }
}	// Speech grind gives Seal 4 (with precedence over keyItem13) if keyItem18 is in inventory, 100% chance

if (cow.currentMap == "Midnight's Reach") {
	if (cow.worldMapRNG < 35)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"寻找怪物……",											""); } else
	if (cow.worldMapRNG < 40)	{ grind  (z, 100, "keyItem19",	40, "smash",	"smash", 	"打碎石塔……", "你发现嵌在黑曜石尖顶上的护身符非常精致，但你挖不出来。"); } else
	if (cow.worldMapRNG < 43)	{ grind  (v, 0, "", 			0, "",			"block", 	"石流逃生……",									""); } else
	if (cow.worldMapRNG < 46)	{ grind  (z, 0, "", 			0, "",			"smash", 	"击碎曜石……",						""); } else
	if (cow.worldMapRNG < 50)	{ grind  (v, 0, "", 			0, "",			"mace", 	"琢磨水晶……",									""); } else
	if (cow.worldMapRNG < 60)	{ combat ("L10", y, "T5",  			28,	34,	150,	50,	130,	3,	30,	12,		"Moonbrood Runner"); } else
	if (cow.worldMapRNG < 70)	{ combat ("L10", y, "T5",  			28,	32,	150,	50,	120,	3,	30,	0,		"Spiritshard"); } else
	if (cow.worldMapRNG < 60)	{ combat ("L11", y, "T5",  			27,	33,	165,	80,	135,	4,	35,	12,		"Smoke Tamer"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L11", y, "T5",  			1,	32,	165,	40,	160,	4,	35,	0,		"Field Spectre"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L11", y, "T5",  			34,	35,	165,	100,135,	4,	35,	12,		"Invisible"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L4", 80, "keyItem18",	10,	14,	50,		5,	45,		1,	0,	0,		"Twilight Hare"); }
}
















if (cow.currentMap == "Farin's Delve" && cow.mapItem6have == true) {
	if (cow.worldMapRNG < 40)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"寻找怪物……",											""); } else
	if (cow.worldMapRNG < 45)	{ grind  (z, 0, "",				0, "",			"stealth", 	"深海潜行……",										""); } else
	if (cow.worldMapRNG < 50)	{ grind  (z, 0, "", 			0, "",			"unlock", 	"解开暗门……",									""); } else
	if (cow.worldMapRNG < 55)	{ grind  (v, 0, "", 			0, "",			"dodge", 	"闪避落石……",										""); } else
	if (cow.worldMapRNG < 56)	{ grind  (1, 100, "keyItem14",	0, "",			"luk",		"发现遗迹……",						""); } else
	if (cow.worldMapRNG < 65)	{ combat ("L5", y, "T3",  			1,	16,	55,		5,	55,		2,	5,	0,		"Ghost"); } else
	if (cow.worldMapRNG < 70)	{ combat ("L6", y, "T4",  			7,	20,	65,		12,	30,		2,	12,	9,		"Mining Automaton"); } else
	if (cow.worldMapRNG < 75)	{ combat ("L12", y, "T6",  			34,	38,	165,	120,140,	4,	45,	15,		"Thunder Demon"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L12", y, "T7",  			34,	38,	165,	120,140,	4,	45,	0,		"Crown Scorpion"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L13", y, "T7", 			34,	38,	175,	160,140,	4,	45,	0,		"Splinterkin"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L12", 100, "seal5",		1,	40,	165,	160,160,	4,	45,	0,		"Gemstone Construct"); }
}

if (cow.currentMap == "Cerrak" && cow.mapItem1have == true) {
	if (cow.worldMapRNG < 15)	{ grind  (v, 0, "", 			0, "",			"mace", 	"铁匠帮工……",							""); } else
	if (cow.worldMapRNG < 30)	{ grind  (v, 10, "keyItem15",	0, "",			"axe",	 	"斩木为篱……",										""); } else
	if (cow.worldMapRNG < 45)	{ grind  (v, 0, "",				0, "",			"sword",	"武士练剑……",								""); } else
	if (cow.worldMapRNG < 60)	{ grind  (v, 0, "",				0, "",			"spear",	"湖边叉鱼……",										""); } else
	if (cow.worldMapRNG < 75)	{ grind  (v, 0, "",				0, "",			"dagger",	"学习木雕……",											""); } else
	if (cow.worldMapRNG < 90)	{ grind  (x, 0, "",				0, "",			"speech",	"走访土著……",										""); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L13", 100, "seal6",	 	32,	42,	175,	160,155,	4,	45,	15,		"Townwarden Mauhagr"); }
}

if (cow.currentMap == "Burning Cloudsea" && cow.mapItem7have == true) {
	if (cow.worldMapRNG < 40)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"寻找怪物……",											""); } else
	if (cow.worldMapRNG < 43)	{ grind  (z, 100, "keyItem16",	20, "athlete",	"athlete", 	"高空训练……", "空气稀薄；你不得不停下来喘一口气……"); } else
	if (cow.worldMapRNG < 46)	{ grind  (z, 0, "",				0, "",			"medic", 	"深山采药……",							""); } else
	if (cow.worldMapRNG < 50)	{ grind  (z, 100, "seal7",		30, "stealth",	"climb", 	"攀爬野山……", "大量的野兽涌了过来，你简直无法通过……"); } else
	if (cow.worldMapRNG < 60)	{ combat ("L8", y, "T4",  			29, 29,	135,	20,	70,		2,	25,	0,		"Skypyre Element"); } else
	if (cow.worldMapRNG < 70)	{ combat ("L8", y, "T4",  			26,	30,	135,	18,	75,		2,	25,	0,		"Cinder Oak"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L12", y, "T6",  			35,	37,	165,	120,140,	4,	45,	0,		"Spiral Griffon"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L12", y, "T6",  			30,	34,	165,	120,140,	4,	45,	0,		"Rainstalker"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L12", y, "T6",  			35,	39,	165,	140,150,	4,	45,	15,		"Storm Drake"); }
}

if (cow.currentMap == "Siruvan" && cow.mapItem8have == true && cow.keyItem21have == false) {
	if (cow.worldMapRNG < 6)	{ combat ("L0", y, "T1",  			3,	4,	50,		0,	10,		10,	0,	0,		"Thorngrass"); } else
	if (cow.worldMapRNG < 12)	{ combat ("L1", y, "T1",  			1,	8,	50,		1,	30,		1,	0,	0,		"Shadowbat"); } else
	if (cow.worldMapRNG < 18)	{ combat ("L3", y, "T2",  			1,	14,	50,		2,	40,		3,	0,	6,		"Pickpocket"); } else
	if (cow.worldMapRNG < 24)	{ combat ("L3", 50, "keyItem17",	8,	12,	50,		3,	45,		1,	0,	0,		"Lost Shade"); } else
	if (cow.worldMapRNG < 30)	{ combat ("L4", y, "T2",  			13,	13,	50,		4,	50,		2,	0,	0,		"Flamespell Element"); } else
	if (cow.worldMapRNG < 36)	{ combat ("L5", y, "T3",  			15,	19,	55,		6,	60,		2,	5,	7,		"Swordsman"); } else
	if (cow.worldMapRNG < 42)	{ combat ("L6", y, "T3",  			9,	11,	65,		11,	65,		2,	35,	0,		"Shining Light"); } else
	if (cow.worldMapRNG < 50)	{ combat ("L8", y, "T4",  			28,	28,	135,	19,	120,	2,	25,	0,		"Spindrift Mote"); } else
	if (cow.worldMapRNG < 60)	{ combat ("L8", y, "T4",  			26,	30,	135,	18,	125,	2,	25,	0,		"Alligator"); } else
	if (cow.worldMapRNG < 70)	{ combat ("L10", y, "T5",  			22,	27,	140,	90,	140,	1,	10,	0,		"Cursed Sculpture"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L10", y, "T5",  			28,	34,	150,	50,	130,	3,	30,	13,		"Moonbrood Runner"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L12", y, "T6",  			35,	39,	165,	140,150,	4,	45,	15,		"Storm Drake"); } else
	if (cow.worldMapRNG < 97)	{ combat ("L13", 100, "seal8", 		1,	44,	195,	0,	300,	4,	0,	0,		"Bone Colossus"); } else
	if (cow.worldMapRNG < 99)	{ combat ("L6", 30, "T7",  			12,	14,	250,	210,60,		4,	12,	0,		"Covetous Wraith"); }
}
















if (cow.currentMap == "Forest of Ice") {
	if (cow.worldMapRNG < 60)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"出奇地安静……",											""); } else
	if (cow.worldMapRNG < 70)	{ grind  (z, 0, "",				0, "",			"athlete", 	"漫步在冻土带……",											""); } else
	if (cow.worldMapRNG < 73)	{ combat ("L13", y, "T6",  			39,	43,	195,	160,195,	5,	55,	15,		"Wood Drake"); } else
	if (cow.worldMapRNG < 76)	{ combat ("L13", y, "T7",  			29,	34,	195,	180,190,	20,	55,	0,		"Rose Serpent"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L14", y, "T7",  			24,	42,	195,	180,200,	5,	65,	0,		"Shatterfang Mammoth"); } else
	if (cow.worldMapRNG < 82)	{ combat ("L14", y, "T7",  			41,	41,	195,	190,190,	5,	65,	0,		"Mana Element"); } else
	if (cow.worldMapRNG < 88)	{ combat ("L1", 50, "keyItem20",  	5,	10,	50,		3,	40,		0,	0,	0,		"Forgotton Treasure Chest"); } else
	if (cow.worldMapRNG <=99 && cow.seal1have == true && cow.seal2have == true && cow.seal3have == true && cow.seal4have == true && cow.seal5have == true && cow.seal6have == true && cow.seal7have == true && cow.seal8have == true)
								{ combat ("L16", 100, "keyItem21",	34,	50,	210,	250,310,	10,	75,	20,		"Imprisoned One"); } else
	if (cow.worldMapRNG <=99)	{ grind  (x, 0, "", 			0, "",			"endure", 	"你会发现一个圆形的符号，永久地刻在冰袋上……",	""); }
}
















if (cow.currentMap == "Siruvan" && cow.mapItem8have == true && cow.keyItem21have == true) {
	if (cow.worldMapRNG < 3)	{ combat ("L0", y, "T1",  			3,	4,	50,		0,	10,		10,	0,	0,		"Thorngrass"); } else
	if (cow.worldMapRNG < 6)	{ combat ("L1", y, "T1",  			1,	8,	50,		1,	30,		1,	0,	0,		"Shadowbat"); } else
	if (cow.worldMapRNG < 10)	{ combat ("L3", y, "T2",  			1,	14,	50,		2,	40,		3,	0,	6,		"Pickpocket"); } else
	if (cow.worldMapRNG < 14)	{ combat ("L3", 50, "keyItem17",	8,	12,	50,		3,	45,		1,	0,	0,		"Lost Shade"); } else
	if (cow.worldMapRNG < 18)	{ combat ("L4", y, "T2",  			13,	13,	50,		4,	50,		2,	0,	0,		"Flamespell Element"); } else
	if (cow.worldMapRNG < 22)	{ combat ("L5", y, "T3",  			15,	19,	55,		6,	60,		2,	5,	7,		"Swordsman"); } else
	if (cow.worldMapRNG < 26)	{ combat ("L6", y, "T3",  			9,	11,	65,		11,	65,		2,	35,	0,		"Shining Light"); } else
	if (cow.worldMapRNG < 30)	{ combat ("L8", y, "T4",  			28,	28,	135,	19,	120,	2,	25,	0,		"Spindrift Mote"); } else
	if (cow.worldMapRNG < 34)	{ combat ("L8", y, "T4",  			26,	30,	135,	18,	125,	2,	25,	0,		"Alligator"); } else
	if (cow.worldMapRNG < 38)	{ combat ("L10", y, "T5",  			22,	27,	110,	90,	140,	1,	10,	0,		"Cursed Sculpture"); } else
	if (cow.worldMapRNG < 42)	{ combat ("L10", y, "T5",  			28,	34,	150,	50,	130,	3,	30,	12,		"Moonbrood Runner"); } else
	if (cow.worldMapRNG < 46)	{ combat ("L12", y, "T6",  			35,	39,	165,	140,150,	4,	45,	15,		"Storm Drake"); } else
	if (cow.worldMapRNG < 54)	{ combat ("L13", y, "T7",  			29,	34,	195,	180,190,	20,	55,	0,		"Rose Serpent"); } else
	if (cow.worldMapRNG < 62)	{ combat ("L14", y, "T8",  			41,	41,	195,	190,190,	5,	65,	0,		"Mana Element"); } else
	if (cow.worldMapRNG < 68)	{ combat ("L15", y, "T8",  			41,	42,	205,	210,200,	5,	75,	24,		"Assassin"); } else
	if (cow.worldMapRNG < 74)	{ combat ("L16", y, "T8",  			1,	43,	215,	250,205,	5,	85,	0,		"Illusiondust"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L17", y, "T8",  			40,	45,	215,	300,210,	5,	95,	0,		"Withering Doom"); } else
	if (cow.worldMapRNG < 86)	{ combat ("L18", 1, "T9",  			47,	47,	225,	350,1,		5,	105,30,		"Grace Element"); } else
	if (cow.worldMapRNG < 92)	{ combat ("L19", 1, "T9",  			47,	51,	235,	400,220,	5,	115,26,		"Demonrift Armor"); } else
	if (cow.worldMapRNG < 94)	{ combat ("L10", 5, "T9",  			12,	14,	310,	400,160,	4,	115,30,		"Covetous Mimic"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L24", 100, "keyItem22",	50,	51,	250,	500,400,	5,	115,0,		"Ancient Shadow"); }
}

if (cow.currentMap == "Undercrypt" && cow.keyItem23have == false) {
	if (cow.worldMapRNG < 15)	{ combat ("L22", 1, "T9",  			46,	50,	250,	500,265,	5,	130,0,		"Skullmind"); } else
	if (cow.worldMapRNG < 30)	{ combat ("L22", 1, "T9",  			49,	53,	250,	500,275,	5,	130,30,		"Swordstrider"); } else
	if (cow.worldMapRNG < 50)	{ combat ("L22", 1, "T9",  			26,	56,	250,	500,270,	5,	130,0,		"Grim Dreamer"); } else
	if (cow.worldMapRNG < 70)	{ combat ("L22", 1, "T9",  			50,	54,	250,	500,274,	5,	130,30,		"Bent Seraph"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L22", 1, "T9",  			48,	54,	250,	500,280,	5,	130,0,		"Crosspulse Phantom"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L22", 1, "T9",			36,	56,	250,	500,285,	5,	130,30,		"Plague Behemoth"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L28", 100, "keyItem23",	1,	70,	250,	600,412,	10,	150,30,		"Sin Guardian"); }
}

if (cow.currentMap == "Undercrypt" && cow.keyItem23have == true) {
	if (cow.worldMapRNG < 15)	{ combat ("L22", 1, "T9",  			26,	56,	250,	500,120,	5,	130,0,		"Grim Dreamer"); } else
	if (cow.worldMapRNG < 30)	{ combat ("L22", 1, "T9",  			50,	54,	250,	500,124,	5,	130,30,		"Bent Seraph"); } else
	if (cow.worldMapRNG < 50)	{ combat ("L30", 1, "T9",  			54,	58,	310,	600,140,	5,	200,30,		"Voidsiren"); } else
	if (cow.worldMapRNG < 70)	{ combat ("L30", 1, "T9",  			1,	64,	310,	600,140,	5,	200,0,		"Prismatic Bear"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L30", 1, "T9",  			54,	56,	310,	600,130,	5,	200,0,		"Steelmist"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L30", 1, "T9",			52,	52,	310,	600,145,	5,	200,0,		"Soulstorm Mote"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L45", 100, "keyItem24",	80,	120,310,	1200,500,	15,	200,40,		"Abyss"); }
}


var respawnTime = 11;
if (cow.keyItem13have == true) { respawnTime = 8; }

if (cow.currentMap == "respawning") { waitForSomethingIngame (respawnTime, cow.respawnLocation, 			"等待重生……", "重获新生！") }
if (cow.currentMap == "resting") { waitForSomethingIngame (cow.restingTime, cow.restingMap,				 	"打坐回元……", "满血出发！") }
if (cow.currentMap == "travelling") { waitForSomethingIngame (cow.travellingTime, cow.travelDestination, 	"跋涉旅行……", "开始探索！") }
}
}