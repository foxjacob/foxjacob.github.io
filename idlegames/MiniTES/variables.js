var cow = {
	level: 1,
	levelXP: 0,
	hp: 30,
	maxHP: 30,
	minDMG: 4,
	maxDMG: 8,
	ac: 0,

	kongUsername: '',

	str: 5,
	def: 5,
	agi: 5,
	spd: 5,
	cha: 5,
	luk: 5,

	axe: 1,
	sword: 1,
	dagger: 1,
	fist: 1,
	speech: 1,
	critical: 1,
	spear: 1,
	mace: 1,
	dodge: 1,
	block: 1,
	unlock: 1,
	hArmor: 1,
	mArmor: 1,
	lArmor: 1,
	athlete: 1,
	medic: 1,
	endure: 1,
	smash: 1,
	climb: 1,
	stealth: 1,

	strXP: 0,
	defXP: 0,
	agiXP: 0,
	spdXP: 0,
	chaXP: 0,
	lukXP: 0,

	axeXP: 0,
	swordXP: 0,
	daggerXP: 0,
	fistXP: 0,
	speechXP: 0,
	criticalXP: 0,
	spearXP: 0,
	maceXP: 0,
	dodgeXP: 0,
	blockXP: 0,
	unlockXP: 0,
	hArmorXP: 0,
	mArmorXP: 0,
	lArmorXP: 0,
	athleteXP: 0,
	medicXP: 0,
	endureXP: 0,
	smashXP: 0,
	climbXP: 0,
	stealthXP: 0,

	equippedHeadArmor: "",
	equippedShoulderArmor: "",
	equippedGloves: "",
	equippedBodyArmor: "",
	equippedPants: "",
	equippedShoes: "",
	equippedShield: "",
	equippedWeapon: "Fist1",

	currentMap: "Vieda Port",
	currentTab: "main",
	worldMapRNG: 0,
	itemDropRNG: 0,
	itemClassRNG: 0,
	masterGamestateVariable: "startingAnEvent",
	waitCounter: 0,
	travelDestination: "",
	travellingTime: 0,
	restingMap: "",
	restingTime: 0,
	currentImprovingSkill: "",
	cssDefaultTheme: "Black",
	gameplayClock: 0,
	minutesPlayed: 0,
	hoursPlayed: 0,
	respawnAtVieda: true,
	overrideCurrentMapDisplay: "",

	combatState: "off",
	mobCurrentHP: "9999",
	endTurn: false,
	
	keyItem1have: false,
	keyItem2have: false,
	keyItem3have: false,
	keyItem4have: false,
	keyItem5have: false,
	keyItem6have: false,
	keyItem7have: false,
	keyItem8have: false,
	keyItem9have: false,
	keyItem10have: false,
	keyItem11have: false,
	keyItem12have: false,
	keyItem13have: false,
	keyItem14have: false,
	keyItem15have: false,
	keyItem16have: false,
	keyItem17have: false,
	keyItem18have: false,
	keyItem19have: false,
	keyItem20have: false,
	keyItem21have: false,
	keyItem22have: false,
	keyItem23have: false,
	keyItem24have: false,
	
	mapItem1have: false,
	mapItem2have: false,
    mapItem3have: false,
    mapItem4have: false,
    mapItem5have: false,
    mapItem6have: false,
    mapItem7have: false,
    mapItem8have: false,
	
	seal1have: false,
	seal2have: false,
    seal3have: false,
    seal4have: false,
    seal5have: false,
    seal6have: false,
    seal7have: false,
    seal8have: false,
}	


var map1 = { name: "Vieda Port", 			text: "维耶达港"}
var map2 = { name: "Nomad's Guild",			text: "游牧工会"}
var map3 = { name: "Crystalspire Forest", 	text: "尖晶森林"}
var map4 = { name: "Ardana Residential",	text: "亜达商区" }
var map5 = { name: "Ardana Marketplace",	text: "亜达市场" }
var map6 = { name: "Silverpool Tides",		text: "银汐滇池" }
var map7 = { name: "Madras", 				text: "麦德拉斯" }
var map8 = { name: "Elcot",					text: "鄂尔科特" }
var map9 = { name: "Crimson Palace",		text: "奎姆森宫" }
var map10 = { name: "Ardana Slums",			text: "亜达新村" }
var map11 = { name: "Obsidian Grasslands",	text: "黑曜草原" }
var map12 = { name: "Deadmoor Tower",		text: "死亡泽塔" }
var map13 = { name: "Sea of Hileo",			text: "鹤立澳湾" }
var map14 = { name: "Rydale Keep",			text: "瑞代尔堡" }
var map15 = { name: "Farin's Delve",		text: "法林深坑" }
var map16 = { name: "Skyview",				text: "天景豪苑" }
var map17 = { name: "Ba'ryst", 				text: "巴莱斯特" }
var map18 = { name: "Prismatic Delta",		text: "三角洲头" }
var map19 = { name: "Cerrak",				text: "塞尔拉克" }
var map20 = { name: "Burning Cloudsea",		text: "火云雾海" }
var map21 = { name: "Siruvan", 				text: "西鲁瓦恩"}
var map22 = { name: "Midnight's Reach",		text: "夜行禁区" }
var map23 = { name: "Forest of Ice",		text: "蛮荒冰原" }
var map24 = { name: "Undercrypt", 			text: "地下陵园" }







var acLight =  [0, 0.8, 1.5, 4, 9,  16, 21, 26, 42, 56];
var acMedium = [0, 1,   2,   5, 11, 20, 26, 32, 53, 70];
var acHeavy =  [0, 1.2, 2.5, 6, 13, 24, 31, 38, 64, 84];

var lightHeadArmor0 = { have: true, armorClass: acLight[0], name: "———" }
var lightHeadArmor1 = { have: false, armorClass: acLight[1], name: "泥布冠" }
var lightHeadArmor2 = { have: false, armorClass: acLight[2], name: "毛织冠" }
var lightHeadArmor3 = { have: false, armorClass: acLight[3], name: "藤编冠" }
var lightHeadArmor4 = { have: false, armorClass: acLight[4], name: "树皮冠" }
var lightHeadArmor5 = { have: false, armorClass: acLight[5], name: "生铁冠" }
var lightHeadArmor6 = { have: false, armorClass: acLight[6], name: "曜石冠" }
var lightHeadArmor7 = { have: false, armorClass: acLight[7], name: "风行冠" }
var lightHeadArmor8 = { have: false, armorClass: acLight[8], name: "尚武冠" }
var lightHeadArmor9 = { have: false, armorClass: acLight[9], name: "星尘冠" }
cow.bestlightHeadArmor = 0;

var lightShoulderArmor0 = { have: true, armorClass: acLight[0], name: "———" }
var lightShoulderArmor1 = { have: false, armorClass: acLight[1], name: "泥布垫" }
var lightShoulderArmor2 = { have: false, armorClass: acLight[2], name: "毛织垫" }
var lightShoulderArmor3 = { have: false, armorClass: acLight[3], name: "藤编垫" }
var lightShoulderArmor4 = { have: false, armorClass: acLight[4], name: "树皮垫" }
var lightShoulderArmor5 = { have: false, armorClass: acLight[5], name: "生铁垫" }
var lightShoulderArmor6 = { have: false, armorClass: acLight[6], name: "曜石垫" }
var lightShoulderArmor7 = { have: false, armorClass: acLight[7], name: "风行垫" }
var lightShoulderArmor8 = { have: false, armorClass: acLight[8], name: "尚武垫" }
var lightShoulderArmor9 = { have: false, armorClass: acLight[9], name: "星尘垫" }
cow.bestlightShoulderArmor = 0;

var lightGloves0 = { have: true, armorClass: acLight[0], name: "———" }
var lightGloves1 = { have: false, armorClass: acLight[1], name: "泥布掌" }
var lightGloves2 = { have: false, armorClass: acLight[2], name: "毛织掌" }
var lightGloves3 = { have: false, armorClass: acLight[3], name: "藤编掌" }
var lightGloves4 = { have: false, armorClass: acLight[4], name: "树皮掌" }
var lightGloves5 = { have: false, armorClass: acLight[5], name: "生铁掌" }
var lightGloves6 = { have: false, armorClass: acLight[6], name: "曜石掌" }
var lightGloves7 = { have: false, armorClass: acLight[7], name: "风行掌" }
var lightGloves8 = { have: false, armorClass: acLight[8], name: "尚武掌" }
var lightGloves9 = { have: false, armorClass: acLight[9], name: "星尘掌" }
cow.bestlightGloves = 0;

var lightBodyArmor0 = { have: true, armorClass: acLight[0], name: "———" }
var lightBodyArmor1 = { have: false, armorClass: acLight[1], name: "泥布服" }
var lightBodyArmor2 = { have: false, armorClass: acLight[2], name: "毛织服" }
var lightBodyArmor3 = { have: false, armorClass: acLight[3], name: "藤编服" }
var lightBodyArmor4 = { have: false, armorClass: acLight[4], name: "树皮服" }
var lightBodyArmor5 = { have: false, armorClass: acLight[5], name: "生铁服" }
var lightBodyArmor6 = { have: false, armorClass: acLight[6], name: "曜石服" }
var lightBodyArmor7 = { have: false, armorClass: acLight[7], name: "风行服" }
var lightBodyArmor8 = { have: false, armorClass: acLight[8], name: "尚武服" }
var lightBodyArmor9 = { have: false, armorClass: acLight[9], name: "星尘服" }
cow.bestlightBodyArmor = 0;

var lightPants0 = { have: true, armorClass: acLight[0], name: "———" }
var lightPants1 = { have: false, armorClass: acLight[1], name: "泥布衩" }
var lightPants2 = { have: false, armorClass: acLight[2], name: "毛织衩" }
var lightPants3 = { have: false, armorClass: acLight[3], name: "藤编衩" }
var lightPants4 = { have: false, armorClass: acLight[4], name: "树皮衩" }
var lightPants5 = { have: false, armorClass: acLight[5], name: "生铁衩" }
var lightPants6 = { have: false, armorClass: acLight[6], name: "曜石衩" }
var lightPants7 = { have: false, armorClass: acLight[7], name: "风行衩" }
var lightPants8 = { have: false, armorClass: acLight[8], name: "尚武衩" }
var lightPants9 = { have: false, armorClass: acLight[9], name: "星尘衩" }
cow.bestlightPants = 0;

var lightShoes0 = { have: true, armorClass: acLight[0], name: "———" }
var lightShoes1 = { have: false, armorClass: acLight[1], name: "泥布鞋" }
var lightShoes2 = { have: false, armorClass: acLight[2], name: "毛织鞋" }
var lightShoes3 = { have: false, armorClass: acLight[3], name: "藤编鞋" }
var lightShoes4 = { have: false, armorClass: acLight[4], name: "树皮鞋" }
var lightShoes5 = { have: false, armorClass: acLight[5], name: "生铁鞋" }
var lightShoes6 = { have: false, armorClass: acLight[6], name: "曜石鞋" }
var lightShoes7 = { have: false, armorClass: acLight[7], name: "风行鞋" }
var lightShoes8 = { have: false, armorClass: acLight[8], name: "尚武鞋" }
var lightShoes9 = { have: false, armorClass: acLight[9], name: "星尘鞋" }
cow.bestlightShoes = 0;

var lightShield0 = { have: true, armorClass: 0, name: "———" }
var lightShield1 = { have: false, armorClass: 0, name: "泥布牌" }
var lightShield2 = { have: false, armorClass: 0, name: "毛织牌" }
var lightShield3 = { have: false, armorClass: 0, name: "藤编牌" }
var lightShield4 = { have: false, armorClass: 0, name: "树皮牌" }
var lightShield5 = { have: false, armorClass: 0, name: "生铁牌" }
var lightShield6 = { have: false, armorClass: 0, name: "曜石牌" }
var lightShield7 = { have: false, armorClass: 0, name: "风行牌" }
var lightShield8 = { have: false, armorClass: 0, name: "尚武牌" }
var lightShield9 = { have: false, armorClass: 0, name: "星尘牌" }
cow.bestlightShield = 0;

var mediumHeadArmor0 = { have: true, armorClass: acMedium[0], name: "———" }
var mediumHeadArmor1 = { have: false, armorClass: acMedium[1], name: "页岩帽" }
var mediumHeadArmor2 = { have: false, armorClass: acMedium[2], name: "藤木帽" }
var mediumHeadArmor3 = { have: false, armorClass: acMedium[3], name: "皮革帽" }
var mediumHeadArmor4 = { have: false, armorClass: acMedium[4], name: "贝壳帽" }
var mediumHeadArmor5 = { have: false, armorClass: acMedium[5], name: "陶瓷帽" }
var mediumHeadArmor6 = { have: false, armorClass: acMedium[6], name: "合金帽" }
var mediumHeadArmor7 = { have: false, armorClass: acMedium[7], name: "水晶帽" }
var mediumHeadArmor8 = { have: false, armorClass: acMedium[8], name: "亮金帽" }
var mediumHeadArmor9 = { have: false, armorClass: acMedium[9], name: "霜花帽" }
cow.bestmediumHeadArmor = 0;

var mediumShoulderArmor0 = { have: true, armorClass: acMedium[0], name: "———" }
var mediumShoulderArmor1 = { have: false, armorClass: acMedium[1], name: "页岩饰" }
var mediumShoulderArmor2 = { have: false, armorClass: acMedium[2], name: "藤木饰" }
var mediumShoulderArmor3 = { have: false, armorClass: acMedium[3], name: "皮革饰" }
var mediumShoulderArmor4 = { have: false, armorClass: acMedium[4], name: "贝壳饰" }
var mediumShoulderArmor5 = { have: false, armorClass: acMedium[5], name: "陶瓷饰" }
var mediumShoulderArmor6 = { have: false, armorClass: acMedium[6], name: "合金饰" }
var mediumShoulderArmor7 = { have: false, armorClass: acMedium[7], name: "水晶饰" }
var mediumShoulderArmor8 = { have: false, armorClass: acMedium[8], name: "亮金饰" }
var mediumShoulderArmor9 = { have: false, armorClass: acMedium[9], name: "霜花饰" }
cow.bestmediumShoulderArmor = 0;

var mediumGloves0 = { have: true, armorClass: acMedium[0], name: "———" }
var mediumGloves1 = { have: false, armorClass: acMedium[1], name: "页岩腕" }
var mediumGloves2 = { have: false, armorClass: acMedium[2], name: "藤木腕" }
var mediumGloves3 = { have: false, armorClass: acMedium[3], name: "皮革腕" }
var mediumGloves4 = { have: false, armorClass: acMedium[4], name: "贝壳腕" }
var mediumGloves5 = { have: false, armorClass: acMedium[5], name: "陶瓷碗" }
var mediumGloves6 = { have: false, armorClass: acMedium[6], name: "合金腕" }
var mediumGloves7 = { have: false, armorClass: acMedium[7], name: "水晶腕" }
var mediumGloves8 = { have: false, armorClass: acMedium[8], name: "亮金腕" }
var mediumGloves9 = { have: false, armorClass: acMedium[9], name: "霜花腕" }
cow.bestmediumGloves = 0;

var mediumBodyArmor0 = { have: true, armorClass: acMedium[0], name: "———" }
var mediumBodyArmor1 = { have: false, armorClass: acMedium[1], name: "页岩装" }
var mediumBodyArmor2 = { have: false, armorClass: acMedium[2], name: "藤木装" }
var mediumBodyArmor3 = { have: false, armorClass: acMedium[3], name: "皮革装" }
var mediumBodyArmor4 = { have: false, armorClass: acMedium[4], name: "贝壳装" }
var mediumBodyArmor5 = { have: false, armorClass: acMedium[5], name: "陶瓷装" }
var mediumBodyArmor6 = { have: false, armorClass: acMedium[6], name: "合金装" }
var mediumBodyArmor7 = { have: false, armorClass: acMedium[7], name: "水晶装" }
var mediumBodyArmor8 = { have: false, armorClass: acMedium[8], name: "亮金装" }
var mediumBodyArmor9 = { have: false, armorClass: acMedium[9], name: "霜花装" }
cow.bestmediumBodyArmor = 0;

var mediumPants0 = { have: true, armorClass: acMedium[0], name: "———" }
var mediumPants1 = { have: false, armorClass: acMedium[1], name: "页岩裙" }
var mediumPants2 = { have: false, armorClass: acMedium[2], name: "藤木裙" }
var mediumPants3 = { have: false, armorClass: acMedium[3], name: "皮革裙" }
var mediumPants4 = { have: false, armorClass: acMedium[4], name: "贝壳裙" }
var mediumPants5 = { have: false, armorClass: acMedium[5], name: "陶瓷裙" }
var mediumPants6 = { have: false, armorClass: acMedium[6], name: "合金裙" }
var mediumPants7 = { have: false, armorClass: acMedium[7], name: "水晶裙" }
var mediumPants8 = { have: false, armorClass: acMedium[8], name: "亮金裙" }
var mediumPants9 = { have: false, armorClass: acMedium[9], name: "霜花裙" }
cow.bestmediumPants = 0;

var mediumShoes0 = { have: true, armorClass: acMedium[0], name: "———" }
var mediumShoes1 = { have: false, armorClass: acMedium[1], name: "页岩履" }
var mediumShoes2 = { have: false, armorClass: acMedium[2], name: "藤木履" }
var mediumShoes3 = { have: false, armorClass: acMedium[3], name: "皮革履" }
var mediumShoes4 = { have: false, armorClass: acMedium[4], name: "贝壳履" }
var mediumShoes5 = { have: false, armorClass: acMedium[5], name: "陶瓷履" }
var mediumShoes6 = { have: false, armorClass: acMedium[6], name: "合金履" }
var mediumShoes7 = { have: false, armorClass: acMedium[7], name: "水晶履" }
var mediumShoes8 = { have: false, armorClass: acMedium[8], name: "亮金履" }
var mediumShoes9 = { have: false, armorClass: acMedium[9], name: "霜花履" }
cow.bestmediumShoes = 0;

var mediumShield0 = { have: true, armorClass: 0, name: "———" }
var mediumShield1 = { have: false, armorClass: 0, name: "页岩挡" }
var mediumShield2 = { have: false, armorClass: 0, name: "藤木挡" }
var mediumShield3 = { have: false, armorClass: 0, name: "皮革挡" }
var mediumShield4 = { have: false, armorClass: 0, name: "贝壳挡" }
var mediumShield5 = { have: false, armorClass: 0, name: "陶瓷挡" }
var mediumShield6 = { have: false, armorClass: 0, name: "合金挡" }
var mediumShield7 = { have: false, armorClass: 0, name: "水晶挡" }
var mediumShield8 = { have: false, armorClass: 0, name: "亮金挡" }
var mediumShield9 = { have: false, armorClass: 0, name: "霜花挡" }
cow.bestmediumShield = 0;

var heavyHeadArmor0 = { have: true, armorClass: acHeavy[0], name: "———" }
var heavyHeadArmor1 = { have: false, armorClass: acHeavy[1], name: "熟铁盔" }
var heavyHeadArmor2 = { have: false, armorClass: acHeavy[2], name: "石片盔" }
var heavyHeadArmor3 = { have: false, armorClass: acHeavy[3], name: "钢铁盔" }
var heavyHeadArmor4 = { have: false, armorClass: acHeavy[4], name: "青铜盔" }
var heavyHeadArmor5 = { have: false, armorClass: acHeavy[5], name: "黯红盔" }
var heavyHeadArmor6 = { have: false, armorClass: acHeavy[6], name: "精钢盔" }
var heavyHeadArmor7 = { have: false, armorClass: acHeavy[7], name: "钻石盔" }
var heavyHeadArmor8 = { have: false, armorClass: acHeavy[8], name: "黑曜盔" }
var heavyHeadArmor9 = { have: false, armorClass: acHeavy[9], name: "火焰盔" }
cow.bestheavyHeadArmor = 0;

var heavyShoulderArmor0 = { have: true, armorClass: acHeavy[0], name: "———" }
var heavyShoulderArmor1 = { have: false, armorClass: acHeavy[1], name: "熟铁肩" }
var heavyShoulderArmor2 = { have: false, armorClass: acHeavy[2], name: "石片肩" }
var heavyShoulderArmor3 = { have: false, armorClass: acHeavy[3], name: "钢铁肩" }
var heavyShoulderArmor4 = { have: false, armorClass: acHeavy[4], name: "青铜肩" }
var heavyShoulderArmor5 = { have: false, armorClass: acHeavy[5], name: "黯红肩" }
var heavyShoulderArmor6 = { have: false, armorClass: acHeavy[6], name: "精钢肩" }
var heavyShoulderArmor7 = { have: false, armorClass: acHeavy[7], name: "钻石肩" }
var heavyShoulderArmor8 = { have: false, armorClass: acHeavy[8], name: "黑曜肩" }
var heavyShoulderArmor9 = { have: false, armorClass: acHeavy[9], name: "火焰肩" }
cow.bestheavyShoulderArmor = 0;

var heavyGloves0 = { have: true, armorClass: acHeavy[0], name: "———" }
var heavyGloves1 = { have: false, armorClass: acHeavy[1], name: "熟铁手" }
var heavyGloves2 = { have: false, armorClass: acHeavy[2], name: "石片手" }
var heavyGloves3 = { have: false, armorClass: acHeavy[3], name: "钢铁手" }
var heavyGloves4 = { have: false, armorClass: acHeavy[4], name: "青铜手" }
var heavyGloves5 = { have: false, armorClass: acHeavy[5], name: "黯红手" }
var heavyGloves6 = { have: false, armorClass: acHeavy[6], name: "精钢手" }
var heavyGloves7 = { have: false, armorClass: acHeavy[7], name: "钻石手" }
var heavyGloves8 = { have: false, armorClass: acHeavy[8], name: "黑曜手" }
var heavyGloves9 = { have: false, armorClass: acHeavy[9], name: "火焰手" }
cow.bestheavyGloves = 0;

var heavyBodyArmor0 = { have: true, armorClass: acHeavy[0], name: "———" }
var heavyBodyArmor1 = { have: false, armorClass: acHeavy[1], name: "熟铁甲" }
var heavyBodyArmor2 = { have: false, armorClass: acHeavy[2], name: "石片甲" }
var heavyBodyArmor3 = { have: false, armorClass: acHeavy[3], name: "钢铁甲" }
var heavyBodyArmor4 = { have: false, armorClass: acHeavy[4], name: "青铜甲" }
var heavyBodyArmor5 = { have: false, armorClass: acHeavy[5], name: "黯红甲" }
var heavyBodyArmor6 = { have: false, armorClass: acHeavy[6], name: "精钢甲" }
var heavyBodyArmor7 = { have: false, armorClass: acHeavy[7], name: "钻石甲" }
var heavyBodyArmor8 = { have: false, armorClass: acHeavy[8], name: "黑曜甲" }
var heavyBodyArmor9 = { have: false, armorClass: acHeavy[9], name: "火焰甲" }
cow.bestheavyBodyArmor = 0;

var heavyPants0 = { have: true, armorClass: acHeavy[0], name: "———" }
var heavyPants1 = { have: false, armorClass: acHeavy[1], name: "熟铁腿" }
var heavyPants2 = { have: false, armorClass: acHeavy[2], name: "石片腿" }
var heavyPants3 = { have: false, armorClass: acHeavy[3], name: "钢铁腿" }
var heavyPants4 = { have: false, armorClass: acHeavy[4], name: "青铜腿" }
var heavyPants5 = { have: false, armorClass: acHeavy[5], name: "黯红腿" }
var heavyPants6 = { have: false, armorClass: acHeavy[6], name: "精钢腿" }
var heavyPants7 = { have: false, armorClass: acHeavy[7], name: "钻石腿" }
var heavyPants8 = { have: false, armorClass: acHeavy[8], name: "黑曜腿" }
var heavyPants9 = { have: false, armorClass: acHeavy[9], name: "火焰腿" }
cow.bestheavyPants = 0;

var heavyShoes0 = { have: true, armorClass: acHeavy[0], name: "———" }
var heavyShoes1 = { have: false, armorClass: acHeavy[1], name: "熟铁胫" }
var heavyShoes2 = { have: false, armorClass: acHeavy[2], name: "石片胫" }
var heavyShoes3 = { have: false, armorClass: acHeavy[3], name: "钢铁胫" }
var heavyShoes4 = { have: false, armorClass: acHeavy[4], name: "青铜胫" }
var heavyShoes5 = { have: false, armorClass: acHeavy[5], name: "黯红胫" }
var heavyShoes6 = { have: false, armorClass: acHeavy[6], name: "精钢胫" }
var heavyShoes7 = { have: false, armorClass: acHeavy[7], name: "钻石胫" }
var heavyShoes8 = { have: false, armorClass: acHeavy[8], name: "黑曜胫" }
var heavyShoes9 = { have: false, armorClass: acHeavy[9], name: "火焰胫" }
cow.bestheavyShoes = 0;

var heavyShield0 = { have: true, armorClass: 0, name: "———" }
var heavyShield1 = { have: false, armorClass: 0, name: "熟铁盾" }
var heavyShield2 = { have: false, armorClass: 0, name: "石片盾" }
var heavyShield3 = { have: false, armorClass: 0, name: "钢铁盾" }
var heavyShield4 = { have: false, armorClass: 0, name: "青铜盾" }
var heavyShield5 = { have: false, armorClass: 0, name: "黯红盾" }
var heavyShield6 = { have: false, armorClass: 0, name: "精钢盾" }
var heavyShield7 = { have: false, armorClass: 0, name: "钻石盾" }
var heavyShield8 = { have: false, armorClass: 0, name: "黑曜盾" }
var heavyShield9 = { have: false, armorClass: 0, name: "火焰盾" }
cow.bestheavyShield = 0;






var daggerMin = [0, 11, 15, 17, 21, 25, 27, 31, 39, 45];
var daggerMax = [0, 12, 16, 19, 22, 26, 28, 32, 40, 46];
var dagger0 = { have: true,  minDamage: daggerMin[0], maxDamage: daggerMax[0], name: "———" }
var dagger1 = { have: false, minDamage: daggerMin[1], maxDamage: daggerMax[1], name: "匕首" }
var dagger2 = { have: false, minDamage: daggerMin[2], maxDamage: daggerMax[2], name: "梅花" }
var dagger3 = { have: false, minDamage: daggerMin[3], maxDamage: daggerMax[3], name: "羊角" }
var dagger4 = { have: false, minDamage: daggerMin[4], maxDamage: daggerMax[4], name: "清刚" }
var dagger5 = { have: false, minDamage: daggerMin[5], maxDamage: daggerMax[5], name: "含章" }
var dagger6 = { have: false, minDamage: daggerMin[6], maxDamage: daggerMax[6], name: "露陌" }
var dagger7 = { have: false, minDamage: daggerMin[7], maxDamage: daggerMax[7], name: "龙鳞" }
var dagger8 = { have: false, minDamage: daggerMin[8], maxDamage: daggerMax[8], name: "虞帝" }
var dagger9 = { have: false, minDamage: daggerMin[9], maxDamage: daggerMax[9], name: "鱼肠" }
cow.bestdagger = 0;

var fistMin = [0, 4, 14, 16, 20, 24, 26, 30, 38, 44];
var fistMax = [0, 8, 18, 20, 24, 28, 30, 34, 42, 48];
var fist0 = { have: true,  minDamage: fistMin[0], maxDamage: fistMax[0], name: "———" }
var fist1 = { have: true,  minDamage: fistMin[1], maxDamage: fistMax[1], name: "拳击" }
var fist2 = { have: false, minDamage: fistMin[2], maxDamage: fistMax[2], name: "长拳" }
var fist3 = { have: false, minDamage: fistMin[3], maxDamage: fistMax[3], name: "格斗" }
var fist4 = { have: false, minDamage: fistMin[4], maxDamage: fistMax[4], name: "柔道" }
var fist5 = { have: false, minDamage: fistMin[5], maxDamage: fistMax[5], name: "跆拳" }
var fist6 = { have: false, minDamage: fistMin[6], maxDamage: fistMax[6], name: "擒拿" }
var fist7 = { have: false, minDamage: fistMin[7], maxDamage: fistMax[7], name: "暹拳" }
var fist8 = { have: false, minDamage: fistMin[8], maxDamage: fistMax[8], name: "截拳" }
var fist9 = { have: false, minDamage: fistMin[9], maxDamage: fistMax[9], name: "太极" }
cow.bestfist = 1;

var swordMin = [0, 13, 17, 19, 23, 27, 29, 33, 41, 47];
var swordMax = [0, 17, 21, 23, 27, 31, 33, 37, 45, 51];
var sword0 = { have: true,  minDamage: swordMin[0], maxDamage: swordMax[0], name: "———" }
var sword1 = { have: false, minDamage: swordMin[1], maxDamage: swordMax[1], name: "长剑" }
var sword2 = { have: false, minDamage: swordMin[2], maxDamage: swordMax[2], name: "纯钧" }
var sword3 = { have: false, minDamage: swordMin[3], maxDamage: swordMax[3], name: "干将" }
var sword4 = { have: false, minDamage: swordMin[4], maxDamage: swordMax[4], name: "龙渊" }
var sword5 = { have: false, minDamage: swordMin[5], maxDamage: swordMax[5], name: "莫邪" }
var sword6 = { have: false, minDamage: swordMin[6], maxDamage: swordMax[6], name: "泰阿" }
var sword7 = { have: false, minDamage: swordMin[7], maxDamage: swordMax[7], name: "赤霄" }
var sword8 = { have: false, minDamage: swordMin[8], maxDamage: swordMax[8], name: "湛卢" }
var sword9 = { have: false, minDamage: swordMin[9], maxDamage: swordMax[9], name: "承影" }
cow.bestsword = 0;

var maceMin = [0, 9, 13, 15, 19, 23, 25, 29, 37, 43];
var maceMax = [0, 19, 23, 25, 29, 34, 35, 39, 47, 53];
var mace0 = { have: true,  minDamage: maceMin[0], maxDamage: maceMax[0], name: "———" }
var mace1 = { have: false, minDamage: maceMin[1], maxDamage: maceMax[1], name: "木棍" }
var mace2 = { have: false, minDamage: maceMin[2], maxDamage: maceMax[2], name: "铁杵" }
var mace3 = { have: false, minDamage: maceMin[3], maxDamage: maceMax[3], name: "金刚" }
var mace4 = { have: false, minDamage: maceMin[4], maxDamage: maceMax[4], name: "遁龙" }
var mace5 = { have: false, minDamage: maceMin[5], maxDamage: maceMax[5], name: "博浪" }
var mace6 = { have: false, minDamage: maceMin[6], maxDamage: maceMax[6], name: "韦护" }
var mace7 = { have: false, minDamage: maceMin[7], maxDamage: maceMax[7], name: "囚龙" }
var mace8 = { have: false, minDamage: maceMin[8], maxDamage: maceMax[8], name: "破天" }
var mace9 = { have: false, minDamage: maceMin[9], maxDamage: maceMax[9], name: "如意" }
cow.bestmace = 0;

var spearMin = [0, 10, 14, 16, 20, 24, 26, 30, 38, 44];
var spearMax = [0, 14, 18, 20, 24, 28, 30, 34, 42, 48];
var spear0 = { have: true,  minDamage: spearMin[0], maxDamage: spearMax[0], name: "———" }
var spear1 = { have: false, minDamage: spearMin[1], maxDamage: spearMax[1], name: "长枪" }
var spear2 = { have: false, minDamage: spearMin[2], maxDamage: spearMax[2], name: "芦叶" }
var spear3 = { have: false, minDamage: spearMin[3], maxDamage: spearMax[3], name: "绿沉" }
var spear4 = { have: false, minDamage: spearMin[4], maxDamage: spearMax[4], name: "断魂" }
var spear5 = { have: false, minDamage: spearMin[5], maxDamage: spearMax[5], name: "裂水" }
var spear6 = { have: false, minDamage: spearMin[6], maxDamage: spearMax[6], name: "湛金" }
var spear7 = { have: false, minDamage: spearMin[7], maxDamage: spearMax[7], name: "沥泉" }
var spear8 = { have: false, minDamage: spearMin[8], maxDamage: spearMax[8], name: "霸王" }
var spear9 = { have: false, minDamage: spearMin[9], maxDamage: spearMax[9], name: "龙胆" }
cow.bestspear = 0;

var axeMin = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var axeMax = [0, 25, 30, 33, 38, 43, 46, 51, 60, 67];
var axe0 = { have: true,  minDamage: axeMin[0], maxDamage: axeMax[0], name: "———" }
var axe1 = { have: false, minDamage: axeMin[1], maxDamage: axeMax[1], name: "手斧" }
var axe2 = { have: false, minDamage: axeMin[2], maxDamage: axeMax[2], name: "板斧" }
var axe3 = { have: false, minDamage: axeMin[3], maxDamage: axeMax[3], name: "宣花" }
var axe4 = { have: false, minDamage: axeMin[4], maxDamage: axeMax[4], name: "鱼尾" }
var axe5 = { have: false, minDamage: axeMin[5], maxDamage: axeMax[5], name: "旋风" }
var axe6 = { have: false, minDamage: axeMin[6], maxDamage: axeMax[6], name: "开山" }
var axe7 = { have: false, minDamage: axeMin[7], maxDamage: axeMax[7], name: "辟水" }
var axe8 = { have: false, minDamage: axeMin[8], maxDamage: axeMax[8], name: "奥金" }
var axe9 = { have: false, minDamage: axeMin[9], maxDamage: axeMax[9], name: "凤首" }
cow.bestaxe = 0;









var keyItem1 = {  name: "Guild Pass", 			text: "允许进入游牧行会维耶达港以外的港口" }
var keyItem2 = {  name: "Whetstone", 			text: "所有武器都有一个小的伤害提升" }
var keyItem3 = {  name: "Healing Pearl", 		text: "战斗后的恢复时间减少 33% " }
var keyItem4 = {  name: "Aura Fragment", 		text: "所有武器都能在其他五种武器技能的基础上得到伤害提升" }
var keyItem5 = {  name: "Shifting Cape", 		text: "闪避攻击的几率 +10% " }
var keyItem6 = {  name: "Ring of Echoes", 		text: "每次攻击两次致命一击" }
var keyItem7 = {  name: "Armorer's Hammer", 	text: "所有防具基础护甲值增加 +1 " }
var keyItem8 = {  name: "Magearmor Ring", 		text: "所有的护甲都能在其他两种护甲技能的基础上得到护甲加成" }
var keyItem9 = {  name: "Hardening Oil", 		text: "所有防具基础护甲值增加 +1 " }
var keyItem10 = { name: "Frozen Soul", 			text: "所有武器最大伤害 +3 " }
var keyItem11 = { name: "Blessed Shieldcrest",	text: "提升格挡机会 10% " }
var keyItem12 = { name: "Boots of Speed", 		text: "减少世界旅行时间 33% " }
var keyItem13 = { name: "Adamantium Pebble", 	text: "重生时减少等待时间" }
var keyItem14 = { name: "Magnetic Dust", 		text: "幸运效果略微增加" }
var keyItem15 = { name: "Amber Signet", 		text: "所有装备掉落几率增加 5% " }
var keyItem16 = { name: "Quicksilver", 			text: "暴击伤害增加" }
var keyItem17 = { name: "Crystal Sphere",		text: "在地图上显现出藏宝地" }
var keyItem18 = { name: "Sapphire Tail", 		text: "减少受到的伤害 2 " }
var keyItem19 = { name: "Shield Amulet", 		text: "不带盾时增加格挡机会 10% " }
var keyItem20 = { name: "Snowflake Coin", 		text: "命中率 +10% " }
var keyItem21 = { name: "Reinforced Seal", 		text: "世界安全了，而新的奇遇正在西鲁瓦恩深处静候着冒险者……" }
var keyItem22 = { name: "Crypt Key",			text: "在世界地图上显示地下陵园" }
var keyItem23 = { name: "Dimensional Key", 		text: "路径开启……" }
var keyItem24 = { name: "Trinket", 				text: "感谢体验游戏！<3 " }
var mapItem1 = { name: "Map 1", text: "发现于银汐滇池。讲述了一个 塞尔拉克 传说。" }
var mapItem2 = { name: "Map 2", text: "发现于麦德拉斯。讲述了一个 鹤立澳湾 传说。" }
var mapItem3 = { name: "Map 3", text: "发现于亜达新村。讲述了一个 瑞代尔堡 传说。" }
var mapItem4 = { name: "Map 4", text: "发现于黑曜草原。讲述了一个 鄂尔科特 传说。" }
var mapItem5 = { name: "Map 5", text: "发现于死亡泽塔。讲述了一个 奎姆森宫 传说。" }
var mapItem6 = { name: "Map 6", text: "发现于天景豪苑。讲述了一个 法林深坑 传说。" }
var mapItem7 = { name: "Map 7", text: "发现于巴雷斯特。讲述了一个 火云雾海 传说。" }
var mapItem8 = { name: "Map 8", text: "发现于三角洲头。讲述了一个 西鲁瓦恩 传说。" }

var seal1 = { name: "Seal 1", text: "发现于鄂尔科特。" }
var seal2 = { name: "Seal 2", text: "发现于奎姆森宫。" }
var seal3 = { name: "Seal 3", text: "发现于鹤立澳湾。它看上去离发源地并不远……" }
var seal4 = { name: "Seal 4", text: "发现于瑞代尔堡。" }
var seal5 = { name: "Seal 5", text: "发现于法林深坑。" }
var seal6 = { name: "Seal 6", text: "发现于塞尔拉克。" }
var seal7 = { name: "Seal 7", text: "发现于火云雾海。" }
var seal8 = { name: "Seal 8", text: "发现于西鲁瓦恩。" }