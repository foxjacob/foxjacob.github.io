/**
 * 20190311@JAR:
 * 
 * 1.汉化杂项'cnItems:obj',
 * 2.采集新词'cnItem:fun';
 * 
 */

//1.汉化杂项
var cnItems = {     //共（ 2+485 ）项属性

    _STYLE_: [
        '符号', '待归类', '地图', '防具', '武器', '道具', '属性', '敌人'
    ],
    _OTHER_: [],

    //1.0.符号（ 2 ）

    '': '',
    '---': '———',

    //1.1.待归类（ 3 ）

    'respawning':   '等待重生中',
    'resting':      '打坐回元中',
    'travelling':   '跋涉旅行中',

    //1.2.地图（ 24+3+8+8 ）

    'Ardana Marketplace':  '亜达市场', //1.2.1.01
    'Ardana Residential':  '亜达商区', //1.2.1.02
    'Ardana Slums':        '亜达新村', //1.2.1.03
    'Ba\'ryst':            '巴莱斯特', //1.2.1.04
    'Burning Cloudsea':    '火云雾海', //1.2.1.05
    'Cerrak':              '塞尔拉克', //1.2.1.06
    'Crimson Palace':      '奎姆森宫', //1.2.1.07
    'Crystalspire Forest': '尖晶森林', //1.2.1.08
    'Deadmoor Tower':      '死亡泽塔', //1.2.1.09
    'Elcot':               '鄂尔科特', //1.2.1.10
    'Farin\'s Delve':      '法林深坑', //1.2.1.11
    'Forest of Ice':       '蛮荒冰原', //1.2.1.12
    'Madras':              '麦德拉斯', //1.2.1.13
    'Midnight\'s Reach':   '夜行禁区', //1.2.1.14
    'Nomad\'s Guild':      '游牧工会', //1.2.1.15
    'Obsidian Grasslands': '黑曜草原', //1.2.1.16
    'Prismatic Delta':     '三角洲头', //1.2.1.17
    'Rydale Keep':         '瑞代尔堡', //1.2.1.18
    'Sea of Hileo':        '鹤立澳湾', //1.2.1.19
    'Silverpool Tides':    '银汐滇池', //1.2.1.20
    'Siruvan':             '西鲁瓦恩', //1.2.1.21
    'Skyview':             '天景豪苑', //1.2.1.22
    'Undercrypt':          '地下陵园', //1.2.1.23
    'Vieda Port':          '维耶达港', //1.2.1.24

    'Ardana - Marketplace':          '亜达市场', //1.2.2.1
    'Ardana - Residential District': '亜达商区', //1.2.2.2
    'Ardana - Slums':                '亜达新村', //1.2.2.3

    'Map 1':    '古图兑位', //1.2.3.1
    'Map 2':    '古图离位', //1.2.3.2
    'Map 3':    '古图巽位', //1.2.3.3
    'Map 4':    '古图坤位', //1.2.3.4
    'Map 5':    '古图艮位', //1.2.3.5
    'Map 6':    '古图坎位', //1.2.3.6
    'Map 7':    '古图震位', //1.2.3.7
    'Map 8':    '古图乾位', //1.2.3.8

    'mapItem1':    '古图兑位', //1.2.4.1
    'mapItem2':    '古图离位', //1.2.4.2
    'mapItem3':    '古图巽位', //1.2.4.3
    'mapItem4':    '古图坤位', //1.2.4.4
    'mapItem5':    '古图艮位', //1.2.4.5
    'mapItem6':    '古图坎位', //1.2.4.6
    'mapItem7':    '古图震位', //1.2.4.7
    'mapItem8':    '古图乾位', //1.2.4.8

    //1.3.防具（ (7x9+1)x3）

    'Light Armor':          '轻甲',   //1.3.1

    'Mudcloth Boots':       '泥布鞋', //1.3.1.1.1
    'Mudcloth Cap':         '泥布冠', //1.3.1.1.2
    'Mudcloth Garb':        '泥布服', //1.3.1.1.3
    'Mudcloth Gloves':      '泥布掌', //1.3.1.1.4
    'Mudcloth Guard':       '泥布牌', //1.3.1.1.5
    'Mudcloth Pads':        '泥布垫', //1.3.1.1.6
    'Mudcloth Pants':       '泥布衩', //1.3.1.1.7

    'Fur Boots':            '毛织鞋', //1.3.1.2.1
    'Fur Cap':              '毛织冠', //1.3.1.2.2
    'Fur Garb':             '毛织服', //1.3.1.2.3
    'Fur Gloves':           '毛织掌', //1.3.1.2.4
    'Fur Guard':            '毛织牌', //1.3.1.2.5
    'Fur Pads':             '毛织垫', //1.3.1.2.6
    'Fur Pants':            '毛织衩', //1.3.1.2.7

    'Cordweave Boots':      '藤编鞋', //1.3.1.3.1
    'Cordweave Cap':        '藤编冠', //1.3.1.3.2
    'Cordweave Garb':       '藤编服', //1.3.1.3.3
    'Cordweave Gloves':     '藤编掌', //1.3.1.3.4
    'Cordweave Guard':      '藤编牌', //1.3.1.3.5
    'Cordweave Pads':       '藤编垫', //1.3.1.3.6
    'Cordweave Pants':      '藤编衩', //1.3.1.3.7
    
    'Forest Boots':         '树皮鞋', //1.3.1.4.1
    'Forest Cap':           '树皮冠', //1.3.1.4.2
    'Forest Garb':          '树皮服', //1.3.1.4.3
    'Forest Gloves':        '树皮掌', //1.3.1.4.4
    'Forest Guard':         '树皮牌', //1.3.1.4.5
    'Forest Pads':          '树皮垫', //1.3.1.4.6
    'Forest Pants':         '树皮衩', //1.3.1.4.7
    
    'Stealth Boots':        '生铁鞋', //1.3.1.5.1
    'Stealth Cap':          '生铁冠', //1.3.1.5.2
    'Stealth Garb':         '生铁服', //1.3.1.5.3
    'Stealth Gloves':       '生铁掌', //1.3.1.5.4
    'Stealth Guard':        '生铁牌', //1.3.1.5.5
    'Stealth Pads':         '生铁垫', //1.3.1.5.6
    'Stealth Pants':        '生铁衩', //1.3.1.5.7
    
    'Sunstone Boots':       '曜石鞋', //1.3.1.6.1
    'Sunstone Cap':         '曜石冠', //1.3.1.6.2
    'Sunstone Garb':        '曜石服', //1.3.1.6.3
    'Sunstone Gloves':      '曜石掌', //1.3.1.6.4
    'Sunstone Guard':       '曜石牌', //1.3.1.6.5
    'Sunstone Pads':        '曜石垫', //1.3.1.6.6
    'Sunstone Pants':       '曜石衩', //1.3.1.6.7
    
    'Windform Boots':       '风行鞋', //1.3.1.7.1
    'Windform Cap':         '风行冠', //1.3.1.7.2
    'Windform Garb':        '风行服', //1.3.1.7.3
    'Windform Gloves':      '风行掌', //1.3.1.7.4
    'Windform Guard':       '风行牌', //1.3.1.7.5
    'Windform Pads':        '风行垫', //1.3.1.7.6
    'Windform Pants':       '风行衩', //1.3.1.7.7
    
    'Force Boots':          '尚武鞋', //1.3.1.8.1
    'Force Cap':            '尚武冠', //1.3.1.8.2
    'Force Garb':           '尚武服', //1.3.1.8.3
    'Force Gloves':         '尚武掌', //1.3.1.8.4
    'Force Guard':          '尚武牌', //1.3.1.8.5
    'Force Pads':           '尚武垫', //1.3.1.8.6
    'Force Pants':          '尚武衩', //1.3.1.8.7
    
    'Stardust Boots':       '星尘鞋', //1.3.1.9.1
    'Stardust Cap':         '星尘冠', //1.3.1.9.2
    'Stardust Garb':        '星尘服', //1.3.1.9.3
    'Stardust Gloves':      '星尘掌', //1.3.1.9.4
    'Stardust Guard':       '星尘牌', //1.3.1.9.5
    'Stardust Pads':        '星尘垫', //1.3.1.9.6
    'Stardust Pants':       '星尘衩', //1.3.1.9.7
    
    'Medium Armor':         '中甲',   //1.3.2

    'Shale Bracers':        '页岩腕', //1.3.2.1.1
    'Shale Crest':          '页岩帽', //1.3.2.1.2
    'Shale Cuirass':        '页岩装', //1.3.2.1.3
    'Shale Epaulets':       '页岩饰', //1.3.2.1.4
    'Shale Leggings':       '页岩裙', //1.3.2.1.5
    'Shale Shield':         '页岩挡', //1.3.2.1.6
    'Shale Shoes':          '页岩履', //1.3.2.1.7
    
    'Wooden Bracers':       '藤木腕', //1.3.2.2.1
    'Wooden Crest':         '藤木帽', //1.3.2.2.2
    'Wooden Cuirass':       '藤木装', //1.3.2.2.3
    'Wooden Epaulets':      '藤木饰', //1.3.2.2.4
    'Wooden Leggings':      '藤木裙', //1.3.2.2.5
    'Wooden Shield':        '藤木挡', //1.3.2.2.6
    'Wooden Shoes':         '藤木履', //1.3.2.2.7

    'Leather Bracers':      '皮革腕', //1.3.2.3.1
    'Leather Crest':        '皮革帽', //1.3.2.3.2
    'Leather Cuirass':      '皮革装', //1.3.2.3.3
    'Leather Epaulets':     '皮革饰', //1.3.2.3.4
    'Leather Leggings':     '皮革裙', //1.3.2.3.5
    'Leather Shield':       '皮革挡', //1.3.2.3.6
    'Leather Shoes':        '皮革履', //1.3.2.3.7
    
    'Seashell Bracers':     '贝壳腕', //1.3.2.4.1
    'Seashell Crest':       '贝壳帽', //1.3.2.4.2
    'Seashell Cuirass':     '贝壳装', //1.3.2.4.3
    'Seashell Epaulets':    '贝壳饰', //1.3.2.4.4
    'Seashell Leggings':    '贝壳裙', //1.3.2.4.5
    'Seashell Shield':      '贝壳挡', //1.3.2.4.6
    'Seashell Shoes':       '贝壳履', //1.3.2.4.7
    
    'Ceramic Bracers':      '陶瓷碗', //1.3.2.5.1
    'Ceramic Crest':        '陶瓷帽', //1.3.2.5.2
    'Ceramic Cuirass':      '陶瓷装', //1.3.2.5.3
    'Ceramic Epaulets':     '陶瓷饰', //1.3.2.5.4
    'Ceramic Leggings':     '陶瓷裙', //1.3.2.5.5
    'Ceramic Shield':       '陶瓷挡', //1.3.2.5.6
    'Ceramic Shoes':        '陶瓷履', //1.3.2.5.7
    
    'Alloy Bracers':        '合金腕', //1.3.2.6.1
    'Alloy Crest':          '合金帽', //1.3.2.6.2
    'Alloy Cuirass':        '合金装', //1.3.2.6.3
    'Alloy Epaulets':       '合金饰', //1.3.2.6.4
    'Alloy Leggings':       '合金裙', //1.3.2.6.5
    'Alloy Shield':         '合金挡', //1.3.2.6.6
    'Alloy Shoes':          '合金履', //1.3.2.6.7

    'Crystalvine Bracers':  '水晶腕', //1.3.2.7.1
    'Crystalvine Crest':    '水晶帽', //1.3.2.7.2
    'Crystalvine Cuirass':  '水晶装', //1.3.2.7.3
    'Crystalvine Epaulets': '水晶饰', //1.3.2.7.4
    'Crystalvine Leggings': '水晶裙', //1.3.2.7.5
    'Crystalvine Shield':   '水晶挡', //1.3.2.7.6
    'Crystalvine Shoes':    '水晶履', //1.3.2.7.7
    
    'Lightmetal Bracers':   '亮金腕', //1.3.2.8.1
    'Lightmetal Crest':     '亮金帽', //1.3.2.8.2
    'Lightmetal Cuirass':   '亮金装', //1.3.2.8.3
    'Lightmetal Epaulets':  '亮金饰', //1.3.2.8.4
    'Lightmetal Leggings':  '亮金裙', //1.3.2.8.5
    'Lightmetal Shield':    '亮金挡', //1.3.2.8.6
    'Lightmetal Shoes':     '亮金履', //1.3.2.8.7
    
    'Frostwork Bracers':    '霜花腕', //1.3.2.9.1
    'Frostwork Crest':      '霜花帽', //1.3.2.9.2
    'Frostwork Cuirass':    '霜花装', //1.3.2.9.3
    'Frostwork Epaulets':   '霜花饰', //1.3.2.9.4
    'Frostwork Leggings':   '霜花裙', //1.3.2.9.5
    'Frostwork Shield':     '霜花挡', //1.3.2.9.6
    'Frostwork Shoes':      '霜花履', //1.3.2.9.7
    
    'Heavy Armor':          '重甲',   //1.3.3

    'Rusted Aegis':         '熟铁盾', //1.3.3.1.1
    'Rusted Cuisse':        '熟铁腿', //1.3.3.1.2
    'Rusted Gauntlets':     '熟铁手', //1.3.3.1.3
    'Rusted Greaves':       '熟铁胫', //1.3.3.1.4
    'Rusted Helm':          '熟铁盔', //1.3.3.1.5
    'Rusted Pauldrons':     '熟铁肩', //1.3.3.1.6
    'Rusted Plate':         '熟铁甲', //1.3.3.1.7
    
    'Stone Aegis':          '石片盾', //1.3.3.2.1
    'Stone Cuisse':         '石片腿', //1.3.3.2.2
    'Stone Gauntlets':      '石片手', //1.3.3.2.3
    'Stone Greaves':        '石片胫', //1.3.3.2.4
    'Stone Helm':           '石片盔', //1.3.3.2.5
    'Stone Pauldrons':      '石片肩', //1.3.3.2.6
    'Stone Plate':          '石片甲', //1.3.3.2.7

    'Iron Aegis':           '钢铁盾', //1.3.3.3.1
    'Iron Cuisse':          '钢铁腿', //1.3.3.3.2
    'Iron Gauntlets':       '钢铁手', //1.3.3.3.3
    'Iron Greaves':         '钢铁胫', //1.3.3.3.4
    'Iron Helm':            '钢铁盔', //1.3.3.3.5
    'Iron Pauldrons':       '钢铁肩', //1.3.3.3.6
    'Iron Plate':           '钢铁甲', //1.3.3.3.7
    
    'Bronze Aegis':         '青铜盾', //1.3.3.4.1
    'Bronze Cuisse':        '青铜腿', //1.3.3.4.2
    'Bronze Gauntlets':     '青铜手', //1.3.3.4.3
    'Bronze Greaves':       '青铜胫', //1.3.3.4.4
    'Bronze Helm':          '青铜盔', //1.3.3.4.5
    'Bronze Pauldrons':     '青铜肩', //1.3.3.4.6
    'Bronze Plate':         '青铜甲', //1.3.3.4.7
    
    'Crimson Aegis':        '黯红盾', //1.3.3.5.1
    'Crimson Cuisse':       '黯红腿', //1.3.3.5.2
    'Crimson Gauntlets':    '黯红手', //1.3.3.5.3
    'Crimson Greaves':      '黯红胫', //1.3.3.5.4
    'Crimson Helm':         '黯红盔', //1.3.3.5.5
    'Crimson Pauldrons':    '黯红肩', //1.3.3.5.6
    'Crimson Plate':        '黯红甲', //1.3.3.5.7
    
    'Steel Aegis':          '精钢盾', //1.3.3.6.1
    'Steel Cuisse':         '精钢腿', //1.3.3.6.2
    'Steel Gauntlets':      '精钢手', //1.3.3.6.3
    'Steel Greaves':        '精钢胫', //1.3.3.6.4
    'Steel Helm':           '精钢盔', //1.3.3.6.5
    'Steel Pauldrons':      '精钢肩', //1.3.3.6.6
    'Steel Plate':          '精钢甲', //1.3.3.6.7
    
    'Diamond Aegis':        '钻石盾', //1.3.3.7.1
    'Diamond Cuisse':       '钻石腿', //1.3.3.7.2
    'Diamond Gauntlets':    '钻石手', //1.3.3.7.3
    'Diamond Greaves':      '钻石胫', //1.3.3.7.4
    'Diamond Helm':         '钻石盔', //1.3.3.7.5
    'Diamond Pauldrons':    '钻石肩', //1.3.3.7.6
    'Diamond Plate':        '钻石甲', //1.3.3.7.7
    
    'Obsidian Aegis':       '黑曜盾', //1.3.3.8.1
    'Obsidian Cuisse':      '黑曜腿', //1.3.3.8.2
    'Obsidian Gauntlets':   '黑曜手', //1.3.3.8.3
    'Obsidian Greaves':     '黑曜胫', //1.3.3.8.4
    'Obsidian Helm':        '黑曜盔', //1.3.3.8.5
    'Obsidian Pauldrons':   '黑曜肩', //1.3.3.8.6
    'Obsidian Plate':       '黑曜甲', //1.3.3.8.7
    
    'Firestorm Aegis':      '火焰盾', //1.3.3.9.1
    'Firestorm Cuisse':     '火焰腿', //1.3.3.9.2
    'Firestorm Gauntlets':  '火焰手', //1.3.3.9.3
    'Firestorm Greaves':    '火焰胫', //1.3.3.9.4
    'Firestorm Helm':       '火焰盔', //1.3.3.9.5
    'Firestorm Pauldrons':  '火焰肩', //1.3.3.9.6
    'Firestorm Plate':      '火焰甲', //1.3.3.9.7
    
    //1.4.武器（ 4+6x9 ）

    'Dagger':        '忍术', //1.4.1.0
    'Sword':         '剑术', //1.4.3.0
    'Mace':          '棍术', //1.4.4.0
    'Axe':           '斧术', //1.4.6.0

    'Knife':         '匕首', //1.4.1.1
    'Scramasax':     '梅花', //1.4.1.2
    'Dirk':          '羊角', //1.4.1.3
    'Cinquedea':     '清刚', //1.4.1.4
    'Kris':          '含章', //1.4.1.5
    'Khukuri':       '露陌', //1.4.1.6
    'Baselard':      '龙鳞', //1.4.1.7
    'Stiletto':      '虞帝', //1.4.1.8
    'Jamadhar':      '鱼肠', //1.4.1.9

    'Fist':          '拳术', //1.4.2.1
    'Brass Knuckle': '长拳', //1.4.2.2
    'Tekko':         '格斗', //1.4.2.3
    'Yawara':        '柔道', //1.4.2.4
    'Bagh Nakh':     '跆拳', //1.4.2.5
    'Shuko':         '擒拿', //1.4.2.6
    'Maduvu':        '暹拳', //1.4.2.7
    'Kubotan':       '截拳', //1.4.2.8
    'Cestus':        '太极', //1.4.2.9

    'Short Sword':   '长剑', //1.4.3.1
    'Spatha':        '纯钧', //1.4.3.2
    'Scimitar':      '干将', //1.4.3.3
    'Rapier':        '龙渊', //1.4.3.4
    'Pata':          '莫邪', //1.4.3.5
    'Shamshir':      '泰阿', //1.4.3.6
    'Falchion':      '赤霄', //1.4.3.7
    'Khopesh':       '湛卢', //1.4.3.8
    'Rhomphaia':     '承影', //1.4.3.9

    'Club':          '木棍', //1.4.4.1
    'Bulawa':        '铁杵', //1.4.4.2
    'Shillelagh':    '金刚', //1.4.4.3
    'Pernach':       '遁龙', //1.4.4.4
    'Gada':          '博浪', //1.4.4.5
    'Bardoukion':    '韦护', //1.4.4.6
    'Morgenstern':   '囚龙', //1.4.4.7
    'Bec de Corbin': '破天', //1.4.4.8
    'War Maul':      '如意', //1.4.4.9

    'Spear':         '枪术', //1.4.5.1
    'Glaive':        '芦叶', //1.4.5.2
    'Corcesca':      '绿沉', //1.4.5.3
    'Trident':       '断魂', //1.4.5.4
    'Pike':          '裂水', //1.4.5.5
    'Fauchard':      '湛金', //1.4.5.6
    'Voulge':        '沥泉', //1.4.5.7
    'Bardiche':      '霸王', //1.4.5.8
    'Brandestoc':    '龙胆', //1.4.5.9

    'Hand Axe':      '手斧', //1.4.6.1
    'Francisca':     '板斧', //1.4.6.2
    'Parashu':       '宣花', //1.4.6.3
    'Keteriya':      '鱼尾', //1.4.6.4
    'Sagaris':       '旋风', //1.4.6.5
    'Tabarzin':      '开山', //1.4.6.6
    'Labrys':        '辟水', //1.4.6.7
    'Bullova':       '奥金', //1.4.6.8
    'Crescent':      '凤首', //1.4.6.9
    
    //1.5.道具（ 24+8 ）

    'Guild Pass':          '捕神令', //1.5.1.01
    'Whetstone':           '水纹砺', //1.5.1.02
    'Healing Pearl':       '回元珠', //1.5.1.03
    'Aura Fragment':       '聚艺环', //1.5.1.04
    'Shifting Cape':       '逸仙氅', //1.5.1.05

    'Ring of Echoes':      '回音戒', //1.5.1.06
    'Armorer\'s Hammer':   '甲士锤', //1.5.1.07
    'Magearmor Ring':      '魔灵戒', //1.5.1.08
    'Hardening Oil':       '坚护油', //1.5.1.09
    'Frozen Soul':         '冰封灵', //1.5.1.10
    
    'Blessed Shieldcrest': '福持屏', //1.5.1.11
    'Boots of Speed':      '羽行舃', //1.5.1.12
    'Adamantium Pebble':   '回生玉', //1.5.1.13
    'Magnetic Dust':       '天赐尘', //1.5.1.14
    'Amber Signet':        '琥珀徽', //1.5.1.15
    
    'Quicksilver':         '幻影汞', //1.5.1.16
    'Crystal Sphere':      '水晶球', //1.5.1.17
    'Sapphire Tail':       '蓝玉翎', //1.5.1.18
    'Shield Amulet':       '天命圈', //1.5.1.19
    'Snowflake Coin':      '雪花币', //1.5.1.20
    
    'Reinforced Seal':     '援护章', //1.5.1.21
    'Crypt Key':           '密文钥', //1.5.1.22
    'Dimensional Key':     '穿梭钥', //1.5.1.23
    'Trinket':             '谢花瑾', //1.5.1.24

    'Seal 1': '泽之封印', //1.5.2.1
    'Seal 2': '山之封印', //1.5.2.2
    'Seal 3': '火之封印', //1.5.2.3
    'Seal 4': '水之封印', //1.5.2.4
    'Seal 5': '雷之封印', //1.5.2.5
    'Seal 6': '风之封印', //1.5.2.6
    'Seal 7': '地之封印', //1.5.2.7
    'Seal 8': '天之封印', //1.5.2.8
    
    //1.6.属性（ 30 ）

    'AC':       '护甲', //1.6.01
    'AGI':      '敏捷', //1.6.02
    'ATHLETE':  '旅行', //1.6.03
    'AXE':      '斧技', //1.6.04
    'BLOCK':    '格挡', //1.6.05

    'CHA':      '魅力', //1.6.06
    'CLIMB':    '攀爬', //1.6.07
    'CRITICAL': '暴击', //1.6.08
    'DAGGER':   '匕技', //1.6.09
    'DEF':      '防御', //1.6.10
    
    'DMG':      '伤害', //1.6.11
    'DODGE':    '闪避', //1.6.12
    'ENDURE':   '耐力', //1.6.13
    'FIST':     '拳技', //1.6.14
    'HARMOR':   '重甲', //1.6.15
    
    'LARMOR':   '轻甲', //1.6.16
    'Lv':       '等级', //1.6.17
    'LUK':      '幸运', //1.6.18
    'MACE':     '杖技', //1.6.19
    'MARMOR':   '中甲', //1.6.20
    
    'MaxHP':    '健康', //1.6.21
    'MEDIC':    '治疗', //1.6.22
    'SPD':      '速度', //1.6.23
    'SMASH':    '冲撞', //1.6.24
    'SPEAR':    '矛技', //1.6.25
    
    'SPEECH':   '口才', //1.6.26
    'STEALTH':  '隐遁', //1.6.27
    'STR':      '力量', //1.6.28
    'SWORD':    '剑技', //1.6.29
    'UNLOCK':   '开锁', //1.6.30

    //1.7.敌人（ 125 ）

    "Abyss":                    "混沌丸", //1.7.001
    "Airtiger":                 "霸天虎", //1.7.002
    "Alligator":                "短吻鳄", //1.7.003
    "Ancient Shadow":           "混元洞", //1.7.004
    "Assassin":                 "老刺客", //1.7.005

    "Axeman":                   "开山樵", //1.7.006
    "Bent Seraph":              "大天使", //1.7.007
    "Blazing Apparition":       "亮剑者", //1.7.008
    "Bone Colossus":            "骨巨像", //1.7.009
    "Brambleweed":              "刺荆芥", //1.7.010

    "Brawler":                  "好斗者", //1.7.011
    "Breath Stinger":           "嗜血蜂", //1.7.012
    "Bubblesquid":              "鼻涕虫", //1.7.013
    "Cave Beast":               "穴居兽", //1.7.014
    "Cinder Oak":               "煤树精", //1.7.015

    "Cliffleaper":              "攀岩者", //1.7.016
    "Cloud Diver":              "浮云侠", //1.7.017
    "Coral Lurker":             "珊瑚怪", //1.7.018
    "Covetous Goblin":          "丑地精", //1.7.019
    "Covetous Imp":             "贪心鬼", //1.7.020

    "Covetous Jadeslime":       "贪财怪", //1.7.021
    "Covetous Mimic":           "变种人", //1.7.022
    "Covetous Wraith":          "饕餮怪", //1.7.023
    "Crawler":                  "绿鬣蜥", //1.7.024
    "Creeping Vine":            "蔓生藤", //1.7.025

    "Crosspulse Phantom":       "十字魔", //1.7.026
    "Crown Scorpion":           "皇冠蝎", //1.7.027
    "Crystal Halcyon":          "精翠鸟", //1.7.028
    "Cursed Sculpture":         "蛊像傀", //1.7.029
    "Dashing Mare":             "人马座", //1.7.030

    "Demonrift Armor":          "魔盔甲", //1.7.031
    "Drunkard":                 "醉酒汉", //1.7.032
    "Ember Beetle":             "灰蟑螂", //1.7.033
    "Feral Wolf":               "荒原狼", //1.7.034
    "Field Rat":                "田中鼹", //1.7.035

    "Field Spectre":            "野魂灵", //1.7.036
    "Firebat":                  "火蝙蝠", //1.7.037
    "Flamespell Element":       "火精灵", //1.7.038
    "Forest Jell":              "林中菌", //1.7.039
    "Forgotton Treasure Chest": "陷阱箱", //1.7.040

    "Frost Terror":             "霜怖灵", //1.7.041
    "Gemstone Construct":       "精琢玉", //1.7.042
    "Ghost":                    "夜游魂", //1.7.043
    "Ghoul":                    "食尸鬼", //1.7.044
    "Golem":                    "魔像鬼", //1.7.045

    "Grace Element":            "恩赐灵", //1.7.046
    "Greythorn Falcon":         "巡猎鹰", //1.7.047
    "Grim Dreamer":             "噩梦灵", //1.7.048
    "Guildmaster":              "典狱长", //1.7.049
    "Gull":                     "猎蛇鸥", //1.7.050

    "Hook Turtle":              "勾颚鼋", //1.7.051
    "Icebloom":                 "冰结灵", //1.7.052
    "Illusiondust":             "致幻菌", //1.7.053
    "Imprisoned Monster":       "囚中怪", //1.7.054
    "Imprisoned One":           "枷中人", //1.7.055

    "Invisible":                "隐身人", //1.7.056
    "Lance Naga":               "矛尾蛇", //1.7.057
    "Looting Mob":              "劫掠者", //1.7.058
    "Lost Shade":               "落阳屏", //1.7.059
    "Mana Element":             "魔元素", //1.7.060

    "Marauder":                 "拦路贼", //1.7.061
    "Marble Hydrangea":         "宝石花", //1.7.062
    "Meridian Echo":            "回音顶", //1.7.063
    "Mining Automaton":         "挖矿机", //1.7.064
    "Minotaur":                 "牛头怪", //1.7.065

    "Moonbrood Runner":         "夜行人", //1.7.066
    "Mushroom Gem":             "蘑菇怪", //1.7.067
    "Marshraider":              "私掠者", //1.7.068
    "Nailfish":                 "沙丁鱼", //1.7.069
    "Novice Thief":             "落单贼", //1.7.070

    "Ocean Mote":               "毒水母", //1.7.071
    "Oculus":                   "红眼魔", //1.7.072
    "Panther":                  "花斑豹", //1.7.073
    "Pickpocket":               "掏包贼", //1.7.074
    "Plague Behemoth":          "鼠头怪", //1.7.075

    "Polar Drake":              "极性鸭", //1.7.076
    "Prismatic Bear":           "棱柱熊", //1.7.077
    "Prismshade":               "万花筒", //1.7.078
    "Rainstalker":              "祈雨者", //1.7.079
    "Rampaging Beast":          "狂暴兽", //1.7.080

    "Razorwalker":              "剃刀魔", //1.7.081
    "Ring Starfish":            "响铃鱼", //1.7.082
    "Rock Heron":               "斑石鹭", //1.7.083
    "Rose Serpent":             "玫瑰蛇", //1.7.084
    "Scatterflame Mote":        "射焰菌", //1.7.085

    "Scythewater":              "水镰魔", //1.7.086
    "Sea Lion":                 "海狮怪", //1.7.087
    "Shadow Mote":              "影尘菌", //1.7.088
    "Shadowbat":                "暗影蝠", //1.7.089
    "Shatterfang Mammoth":      "茸角象", //1.7.090

    "Sheet Piranha":            "食人鱼", //1.7.091
    "Shining Light":            "闪光灵", //1.7.092
    "Shrieking Bat":            "刺笛蝠", //1.7.093
    "Silverspine":              "银脊蛇", //1.7.094
    "Sin Guardian":             "裁决者", //1.7.095

    "Skullmind":                "骷髅头", //1.7.096
    "Skyfish":                  "飞天鱼", //1.7.097
    "Skypyre Element":          "云精灵", //1.7.098
    "Smoke Tamer":              "驯烟者", //1.7.099
    "Snow Hound":               "哮天犬", //1.7.100

    "Soulstorm Mote":           "灵爆菌", //1.7.101
    "Spindrift Mote":           "射水灵", //1.7.102
    "Spiral Griffon":           "螺旋鹫", //1.7.103
    "Spiritshard":              "碎精魂", //1.7.104
    "Splinterkin":              "裂晶灵", //1.7.105

    "Steelmist":                "罡雾灵", //1.7.106
    "Storm Drake":              "暴风鸭", //1.7.107
    "Sunfalcon":                "太阳隼", //1.7.108
    "Sword Kraken":             "海王妖", //1.7.109
    "Swordsman":                "修剑士", //1.7.110

    "Swordstrider":             "大镖客", //1.7.111
    "Thorngrass":               "荆藤怪", //1.7.112
    "Thresher Tree":            "鲨尾树", //1.7.113
    "Thunder Demon":            "雷电魔", //1.7.114
    "Town Guard":               "伪协警", //1.7.115

    "Townwarden Mauhagr":       "小城管", //1.7.116
    "Twilight Hare":            "暮光兔", //1.7.117
    "Vaporwave":                "蒸汽波", //1.7.118
    "Voidsiren":                "活死人", //1.7.119
    "Watertrap Spider":         "水阱蛛", //1.7.120

    "Wilting Creep":            "谄媚鬼", //1.7.121
    "Wing Breaker":             "破空者", //1.7.122
    "Wisp":                     "游丝精", //1.7.123
    "Withering Doom":           "萎厄魔", //1.7.124
    "Wood Drake":               "槐木鸭", //1.7.125

};

//2.采集新词
var cnItem = function() {
    let text = arguments[0] || '';
    //检验参数是否已译
    if(
        text[0].charCodeAt() > 19968
        && text[0].charCodeAt() < 40869
    ) return text;
    //检验字典是否可存
    if(!cnItems._OTHER_) cnItems._OTHER_=[];

    //遍历尝试匹配
    for ( let i in cnItems ) {
        //字典已有词汇或译文则返回译文
        if(text == i || text == cnItems[i])
        return cnItems[i];
    }

    //遍历生词表是否收录
    for (
        let i = 0;
        i < cnItems._OTHER_.length;
        i++
    ) {
        //已收录则直接返回
        if (text == cnItems._OTHER_[i])
        return text;
    }

    //未收录则保存
    cnItems._OTHER_.push(text);
    cnItems._OTHER_.sort(
      function(a,b){
        return a.localeCompare(b)
      }
    );
        
/*
    //开启生词打印
    //console.log(
        '有需要汉化的英文：', text
    );
*/

    //返回生词字串
    return text;
};
