function GetPlatformAction( isDesktop, lang ){
    if( isDesktop )
        return Lang[lang][0];
    else
        return Lang[lang][1];
}

var Lang = {
    'en':
    [
        "点击屏幕放置楼层！",
        "完美！",
        "很好！",
        "最高分",
        "新记录！",
        "完美开始",
        "金币翻倍",
        "保险",
        "点击选择高度！",
        "提示：道具非常管用，绝对物超所值！",
        "提示：你可以撤销放置得不好的楼层！",   
        "提示：你点的越快，楼层吻合越好！",   
        "提示：完美放置楼层增加10金币！",  
        "提示：建造更高的楼层赚更多金币！",  
        "提示：越高的楼层给的金币越多！",  
        "提示：不完美的方块会加快游戏的速度！",
        "你的钱不够！"     
    ],

    'ru':
    [
        "ЖМИ В ЛЮБОЕ МЕСТО, ЧТОБЫ ПОСТАВИТЬ БЛОК",
        "ИДЕАЛЬНО!",
        "ХОРОШО!",
        "РЕКОРД",
        "НОВЫЙ РЕКОРД",
        "СУПЕРСТАРТ",
        "УДВОИТЕЛЬ МОНЕТ",
        "СТРАХОВКА",
        "ВЫБЕРИ ВЫСОТУ",
        "TIP: USE BOOSTS, THEY ARE VERY USEFUL!",
        "TIP: YOU CAN UNDO BAD CHECKPOINTS",   
        "TIP: FLOORS FIT BETTER WHEN YOU PLAY FAST",   
        "TIP: PERFECT FLOORS GIVE 10X COINS",  
        "TIP: BUILD HIGHER TOWER TO EARN MORE COINS",  
        "TIP: HIGHER FLOORS GIVE MORE COINS",  
        "TIP: EVERY NON-PERFECT BLOCK INCREASES GAME'S SPEED",
        "Не достаточно денег"
    ],

    'de':
    [
        "Tippe irgendwo, um den Block abzusetzen",
        "PERFEKT!",
        "GUT!",
        "Bestwert",
        "Neuer Bestwert",
        "Vorsprung",
        "Münzen verdoppeln",
        "Versicherung",
        "Antippen um ein", 
        "TIPP: Benutze Boosts, sie helfen Dir voran zu kommen!",
        "TIPP: Du kannst schlechte Kontrollpunkte rückgängig machen.",
        "TIPP: Die Stockwerke lassen sich besser platzieren, wenn Du schnell spielst.",
        "TIPP: Perfekt platzierte Stockwerke geben die 10fache Punkte!",
        "TIPP: Errichte höhere Türme, um mehr Münzen zu verdienen.",
        "TIPP: Du erhälst mehr Münzen, je höher Du schon gebaut hast.",
        "TIPP: Jeder nicht perfekt platzierte Block erhöht die Spielgeschwinigkeit.",
        "DU HAST NICHT GENUG MäÜNZEN!"
    ],

    'es':
    [
        "PULSA EN CUALQUIER SITIO PARA COLOCAR EL  BLOQUE",
        "¡PERFECTO!",
        "¡BIEN!",
        "MEJOR",
        "NUEVO Y MEJOR",
        "COMIENZO",
        "DUPLICADOR DE MONEDAS",
        "SEGURO",
        "PULSA PARA SELECCIONAR LA ALTURA",
        "CONSEJO: ¡USA ELEVADORES, SON MUY ÚTILES!",
        "CONSEJO: PUEDES DESHACER LOS ELEMENTOS INCORRECTOS",
        "CONSEJO: LOS PISOS ENCAJAN MEJOR CUANDO JUEGAS RÁPIDO",
        "CONSEJO: OBTIENES 10 X MONEDAS POR CADA PISO PERFECTO",
        "CONSEJO: CONSTRUYE TORRES MÁS ALTAS PARA GANAR MÁS MONEDAS",
        "CONSEJO: OBTIENES MÁS MONEDAS CON PISOS MÁS ALTOS",
        "CONSEJO: CADA BLOQUE IMPERFECTO AUMENTA LA VELOCIDAD DEL JUEGO",
        "SIN DINERO SUFICIENTE",
    ],

    'fr':
    [
        "APPUYEZ N'IMPORTE OÙ POUR PLACER L’IMMEUBLE",
        "PARFAIT !",
        "BIEN !",
        "RECORD",
        "NOUVEAU RECORD",
        "BON DÉPART",
        "DOUBLEUR DE PIÈCES",
        "ASSURANCE",
        "APPUYEZ POUR CHOISIR LA HAUTEUR",
        "ASTUCE : UTILISEZ LES ACCÉLÉRATEURS, ILS SONT TRÈS UTILES !",
        "ASTUCE : VOUS POUVEZ ANNULER LES MAUVAIS POINTS DE CONTRÔLE",
        "ASTUCE : LES PLANCHERS S’INTÈGRENT MIEUX QUAND VOUS JOUEZ VITE",
        "ASTUCE : DES PLANCHERS PARFAITS DONNENT 10 X PLUS DE PIÈCES",
        "ASTUCE : CONSTRUIRE DES TOURS PLUS ELEVÉES POUR GAGNER PLUS DE PIÈCES",
        "ASTUCE : LES ÉTAGES SUPÉRIEURS DONNENT PLUS DE PIÈCES",
        "ASTUCE : CHAQUE IMMEUBLE QUI N’EST PAS PARFAIT AUGMENTE LA VITESSE DE JEU",
        "PAS ASSEZ D’ARGENT"
    ],

    'it':    
    [
        "PREMI UN PUNTO QUALSIASI PER POSIZIONARE IL BLOCCO",
        "PERFETTO!",
        "OTTIMO!",
        "RECORD",
        "NUOVO RECORD",
        "VANTAGGIO INIZIALE",
        "DUPLICATORE DI MONETE",
        "ASSICURAZIONE",
        "PREMI PER RAGGIUNGERE L'ALTEZZA",
        "SUGGERIMENTO: USA I POTENZIAMENTI, SONO MOLTO UTILI!",
        "SUGGERIMENTO: PUOI ANNULLARE I CHECKPOINT CATTIVI",
        "SUGGERIMENTO: I PAVIMENTI SI ADATTANO MEGLIO QUANDO GIOCHI VELOCEMENTE",
        "SUGGERIMENTO: I PAVIMENTI PERFETTI TI DANNO 10X MONETE",
        "SUGGERIMENTO: COSTRUISCI TORRI PIU' ALTE PER GUADAGNARE PIU' MONETE",
        "SUGGERIMENTO: I PIANI PIU' ALTI DANNO PIU' MONETE",
        "SUGGERIMENTO: OGNI BLOCCO NON PERFETTO AUMENTA LA VELOCITA' DI GIOCO",
        "DENARO NON SUFFICIENTE"
    ],

    'pt':    
    [
        "TOQUE EM QUALQUER LUGAR PARA COLOCAR O BLOCO",
        "PERFEITO!",
        "BOM!",
        "MELHOR",
        "NOVO MELHOR",
        "AVANÇO",
        "DUPLICADOR DE MOEDA",
        "SEGURO",
        "TOQUE PARA ESCOLHER A ALTURA",
        "DICA: USE OS BOOSTS, ELES SÃO MUITO ÚTEIS!",
        "DICA: PODE DESFAZER MAUS CHECKPOINTS",
        "DICA: OS PISOS ENCAIXAM MELHOR QUANDO JOGA RÁPIDO",
        "DICA: PISOS PERFEITOS DÃO 10X MOEDAS",
        "DICA: CONSTRUA TORRES MAIS ALTAS PARA GANHAR MAIS MOEDAS",
        "DICA: PISOS MAIS ALTOS DÃO MAIS MOEDAS",
        "DICA: CADA BLOCO NÃO PERFEITO AUMENTA A VELOCIDADE DO JOGO",
        "FALTA DINHEIRO"
    ],

    'tr':
    [
        "BLOK YERLEŞTİRMEK İÇİN HERHANGİ BİR YERE DOKUN",
        "MÜKEMMEL!",
        "İYİ",
        "EN İYİ",
        "YENİ EN İYİ",
        "AVANTAJLI BAŞLANGIÇ",
        "İKİ KAT PARA",
        "SİGORTA",
        "YÜKSEKLİK SEÇMEK İÇİN DOKUN",
        "İP UCU: GÜÇLENDİRME KULLAN, ÇOK FAYDALILAR!",
        "İP UCU: KÖTÜ NOKTALARI GERİ ALABİLİRSİNİZ",
        "İP UCU: HIZLI OYNADIĞINIZDA KATLAR DAHA İYİ UYAR",
        "İP UCU: MÜKEMMEL KATLAR X10 PARA VERİR",
        "İP UCU: DAHA FAZLA PARA KAZANMAK İÇİN DAHA YÜKSEK KULE YAP",
        "İP UCU: YÜKSEK KATLAR FAZLA PARA VERİR",
        "İP UCU: HER MÜKEMMEL OLMAYAN BLOK OYUNUN HIZINI ARTTIRIR",
        "FALTA DINHEIRO"
    ] 
};
