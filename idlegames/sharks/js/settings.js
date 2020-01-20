SharkGame.Settings = {

    current: {},

    buyAmount: {
        defaultSetting: 1,
        show: false,
        options: [
            1,
            10,
            100,
            -3,
            -2,
            -1
        ]
    },

    showTabHelp: {
        defaultSetting: false,
        show: false,
        options: [
            true,
            false
        ]
    },

    groupResources: {
        defaultSetting: false,
        name: "Group Resources",
        desc: "将表中的资源分组到可读性的类别中。",
        show: true,
        options: [
            true,
            false
        ],
        onChange: function() {
            SharkGame.Resources.rebuildTable = true;
        }
    },

    buttonDisplayType: {
        defaultSetting: "list",
        name: "Home Sea Button Display",
        desc: "你想要一个垂直的按钮列表，还是一个更节省空间的配置?",
        show: true,
        options: [
            "list",
            "pile"
        ],
        onChange: function() {
            SharkGame.Main.changeTab(SharkGame.Tabs.current);
        }
    },

    offlineModeActive: {
        defaultSetting: true,
        name: "离线模式",
        desc: "游戏关闭时，你的数据仍然会增加!",
        show: true,
        options: [
            true,
            false
        ]
    },

    autosaveFrequency: {
        // times given in minutes
        defaultSetting: 5,
        name: "Autosave Frequency",
        desc: "Number of minutes between autosaves.",
        show: true,
        options: [
            1,
            2,
            5,
            10,
            30
        ],
        onChange: function() {
            clearInterval(SharkGame.Main.autosaveHandler);
            SharkGame.Main.autosaveHandler = setInterval(SharkGame.Main.autosave, SharkGame.Settings.current.autosaveFrequency * 60000);
            SharkGame.Log.addMessage("每 " + SharkGame.Settings.current.autosaveFrequency + " 分钟会自动保存" + SharkGame.plural(SharkGame.Settings.current.autosaveFrequency) + ".");
        }
    },

    logMessageMax: {
        defaultSetting: 20,
        name: "Max Log Messages",
        desc: "在删除旧的消息之前要显示多少条消息。",
        show: true,
        options: [
            5,
            10,
            15,
            20,
            25,
            30,
            50
        ],
        onChange: function() {
            SharkGame.Log.correctLogLength();
        }
    },

    sidebarWidth: {
        defaultSetting: "25%",
        name: "Sidebar Width",
        desc: "侧边栏应该占用多少屏幕空间。",
        show: true,
        options: [
            "20%",
            "25%",
            "30%",
            "35%",
            "40%",
            "45%",
            "50%"
        ],
        onChange: function() {
            var sidebar = $('#sidebar');
            if(SharkGame.Settings.current.showAnimations) {
                sidebar.animate({width: SharkGame.Settings.current.sidebarWidth}, "100");
            } else {
                sidebar.width(SharkGame.Settings.current.sidebarWidth);
            }
        }
    },

    showAnimations: {
        defaultSetting: true,
        name: "Show Animations",
        desc: "显示动画或不显示。你决定。",
        show: true,
        options: [
            true,
            false
        ]
    },

    colorCosts: {
        defaultSetting: true,
        name: "Color Resource Names",
        desc: "当显示成本时，使用高亮颜色来区别。",
        show: true,
        options: [
            true,
            false
        ],
        onChange: function() {
            SharkGame.Resources.rebuildTable = true;
            SharkGame.Stats.recreateIncomeTable = true;
        }
    },

    iconPositions: {
        defaultSetting: "top",
        name: "Icon Positions",
        desc: "图标应该放在哪里?",
        show: true,
        options: [
            "top",
            "side",
            "off"
        ]
    },

    showTabImages: {
        defaultSetting: true,
        name: "Show Tab Header Images",
        desc: "你想要新的标题图片还是他们占用了宝贵的屏幕空间?",
        show: true,
        options: [
            true,
            false
        ],
        onChange: function() {
            SharkGame.Main.changeTab(SharkGame.Tabs.current);
        }
    }


};