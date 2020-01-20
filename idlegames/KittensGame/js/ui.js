/**
    class that provides an abstraction layer for UI/model communication
 */
dojo.declare("classes.ui.UISystem", null, {
    game: null,

    setGame: function(game){
        this.game = game;
    },

    render: function(){
    },

    update: function(){
    },

    updateOptions: function(){
    },

    displayAutosave: function(){
    },

    resetConsole: function(){
    },

    renderFilters: function(){
    },

    renderConsoleLog: function() {
    },

    saveExport: function(encodedData) {
    },

    observeCallback: function(){
    },

    observeClear: function(){
    },

    updateLanguage: function() {
    },

    load: function(){

    },

    save: function(){

    },

    isEffectMultiplierEnabled: function(){
        return false;
    }
});

/**
 * Legacy UI renderer
 */
var $r = React.createElement;
dojo.declare("classes.ui.DesktopUI", classes.ui.UISystem, {
    containerId: null,
    toolbar: null,
    calenderDivTooltip: null,
    calendarSignSpanTooltip: null,

    fontSize: null,

    //current selected game tab
    activeTabId: "Bonfire",

    keyStates: {
        shiftKey: false,
        ctrlKey: false,
        altKey: false
    },

    isDisplayOver: false,
    isChatActive: false,
    isChatVisited: false,

    constructor: function(containerId){
        this.containerId = containerId;

        dojo.connect($("html")[0],"onclick", this, function() {
            this.game.stats.getStat("totalClicks").val += 1;
        });

        dojo.connect($("html")[0], "onkeyup", this, function (event) {
            // Allow user extensibility to keybindings in core events
            var keybinds = [
                {
                    name: 'Bonfire',
                    key: 'B',
                    shift: true,
                    alt: false,
                    control: false
                },
                {
                    name: 'Village',
                    key: 'V',
                    shift: true,
                    alt: false,
                    control: false
                },
                {
                    name: "Science",
                    key: 'S',
                    shift: true,
                    alt: false,
                    control: false
                },
                {
                    name: 'Workshop',
                    key: 'W',
                    shift: true,
                    alt: false,
                    control: false
                },
                {
                    name: 'Trade',
                    key: 'T',
                    shift: true,
                    alt: false,
                    control: false
                },
                {
                    name: 'Religion',
                    key: 'R',
                    shift: true,
                    alt: false,
                    control: false
                },
                {
                    name: 'Space',
                    key: 'P',
                    shift: true,
                    alt: false,
                    control: false
                },
                {
                    name: 'Time',
                    key: 'I',
                    shift: true,
                    alt: false,
                    control: false
                },
                {
                    name: 'Achievements',
                    key: 'M',
                    shift: true,
                    alt: false,
                    control: false
                },
                {
                    name: 'Stats',
                    key: 'A',
                    shift: true,
                    alt: false,
                    control: false
                },
                {
                    name: "Close Options",
                    key: "Escape",
                    shift: false,
                    alt: false,
                    control: false,
                    action: function(){ $('div.dialog:visible').last().hide(); }
                }
            ];

            //babel someday

            /*var allKeybinds = typeof userKeybinds != 'undefined' ? userKeybinds.concat(keybinds) : keybinds;
            var keybind = allKeybinds.find(function(x){
                return x.key === event.key &&
                x.shift == event.shiftKey &&
                x.alt == event.altKey &&
                x.control == event.ctrlKey; });*/

            var keybind = null;
            for (var i in keybinds){
                var k = keybinds[i];
                if (k.key === event.key &&
                    k.shift == event.shiftKey &&
                    k.alt == event.altKey &&
                    k.control == event.ctrlKey
                ){
                    keybind = k;
                    break;
                }
            }


            var isTabNumber = ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105));
            //console.log(isTabNumber, event.keyCode);

            if (keybind && keybind.action) {
                // If a keybind is found and has a specific action
                keybind.action();
            } else if (isTabNumber){
                var tabIndex = 9;
                if (event.keyCode >= 97) { //numpad
                    tabIndex = event.keyCode - 97;
                } else if (event.keyCode >= 49 && event.keyCode <= 57) { //number row
                    tabIndex = event.keyCode - 49;
                }
                if (this.game.tabs[tabIndex].visible){
                    this.game.ui.activeTabId = this.game.tabs[tabIndex].tabId;
                    this.game.ui.render();
                }
            } else if (keybind && keybind.name != this.game.ui.activeTabId ) {
                // If a keybound is found and the tab isn't current
                for (var i = 0; i < this.game.tabs.length; i++){
                    if (this.game.tabs[i].tabId === keybind.name && this.game.tabs[i].visible){
                        this.game.ui.activeTabId = keybind.name;
                        this.game.ui.render();
                        break;
                    }
                }
            }
        });
    },

    setGame: function(game){
        this.game = game;

        this.toolbar = new classes.ui.Toolbar(game);
    },

    render: function(){
        var game = this.game;

        var midColumn = dojo.byId("midColumn");
        var scrollPosition = midColumn.scrollTop;

        var container = dojo.byId(this.containerId);
        dojo.empty(container);

        var tabNavigationDiv = dojo.create("div", { className: "tabsContainer"}, container);

        //TODO: remove hardcoded id?
        this.toolbar.render(dojo.byId("headerToolbar"));

        game.calendar.render();

        var visibleTabs = [];

        for (var i = 0; i < game.tabs.length; i++){
            var tab = game.tabs[i];
            tab.domNode = null;
            if (tab.visible){
                visibleTabs.push(tab);
            }
        }

        for (var i = 0; i < visibleTabs.length; i++){
            var tab = visibleTabs[i];

            tab.updateTab();
            var tabLink = dojo.create("a", {
                href:"#",
                innerHTML: tab.tabName,
                className: "tab",
                style : {
                    whiteSpace: "nowrap"
                }
            }, tabNavigationDiv);
            tab.domNode = tabLink;

            if (this.activeTabId == tab.tabId){
                dojo.addClass(tabLink, "activeTab");
            }


            dojo.connect(tabLink, "onclick", this,
                dojo.partial(
                    function(tab){
                        this.activeTabId = tab.tabId;
                        this.render();

                        //this.game.telemetry.logEvent("tab", tab.tabId);
                    }, tab)
            );

            if (i < visibleTabs.length-1){
                dojo.create("span", {innerHTML:" | "}, tabNavigationDiv);
            }
        }


        for (var i = 0; i < game.tabs.length; i++){
            var tab = game.tabs[i];

            if (this.activeTabId == tab.tabId){

                var divContainer = dojo.create("div", {
                    className: "tabInner"
                }, container);

                tab.render(divContainer);

                break;
            }
        }



		if (!this.calenderDivTooltip){
            var calendarDiv = dojo.byId("calendarDiv");
            this.calenderDivTooltip = UIUtils.attachTooltip(game, calendarDiv, 0, 320, dojo.hitch(game.calendar, function() {
                var tooltip = "";
                var displayThreshold = 100000;
                if (this.year > displayThreshold) {
                    tooltip = $I("calendar.year.tooltip") + " " + this.year.toLocaleString();
                }

                if (game.science.get("paradoxalKnowledge").researched) {
                    if (this.year > displayThreshold) {
                        tooltip += "<br>";
                    }

                    var trueYear = Math.trunc(this.trueYear());
                    if (trueYear > displayThreshold) {
                        trueYear = trueYear.toLocaleString();
                    }
                    tooltip += $I("calendar.trueYear") + " " + trueYear;
                }
                return tooltip;
            }));
        }


		if (!this.calendarSignSpanTooltip){
            var calendarSignSpan = dojo.byId("calendarSign");
            // 中间的0，0为提示窗口距鼠标位置偏移
			this.calendarSignSpanTooltip = UIUtils.attachTooltip(game, calendarSignSpan, 0, 0, dojo.hitch(game.calendar, function() {
                var cycle = this.cycles[this.cycle];
                if (!cycle) {
                    return "";
                }

				var tooltip = dojo.create("div", { className: "button_tooltip" }, null);

				var cycleSpan = dojo.create("div", {
					innerHTML: cycle.title + " (" + $I("calendar.year") + " " + this.cycleYear + ")",
					style: { textAlign: "center", clear: "both"}
				}, tooltip );

				// Cycle Effects
				if (game.prestige.getPerk("numerology").researched) {
					dojo.style(cycleSpan, "borderBottom", "1px solid gray");
					dojo.style(cycleSpan, "paddingBottom", "4px");

					var cycleSpan = dojo.create("div", {
						innerHTML: "周期效果:",
						style: { textAlign: "center", paddingTop: "4px"}
					}, tooltip );

					var effects = cycle.effects;

					for (var effect in effects){
						var effectItemNode = dojo.create("div", null, tooltip);

						var effectMeta = game.getEffectMeta(effect);
						var effectTitle = effectMeta.title + ":";

						var nameSpan = dojo.create("span", {
							innerHTML: effectTitle,
							style: {
								float: "left",
								fontSize: "16px"
							}
						}, effectItemNode );

						var effectMod = effects[effect] > 1 ? "+": "";
						effectMod += ((effects[effect] - 1) * 100).toFixed(0) + "%";

						var effectSpan = dojo.create("span", {
							innerHTML: effectMod,
							style: {
								float: "right",
								fontSize: "16px",
								paddingLeft: "6px"
							}
						}, effectItemNode );

						dojo.create("span", {
							innerHTML: "&nbsp;",
							style: {
                                fontSize: "16px",
                                clear: "both" }
						}, effectItemNode );
					}
				}

				if (game.prestige.getPerk("numeromancy").researched && this.festivalDays) {

					// Cycle Festival Effects

					var cycleSpan = dojo.create("div", {
						innerHTML: "周期节日效果:",
						style: { textAlign: "center"}
					}, tooltip );

					var effects = cycle.festivalEffects;

					for (var effect in effects){
						var effectItemNode = dojo.create("div", null, tooltip);

						var effectMeta = game.getEffectMeta(effect);
						var effectTitle = effectMeta.title + ":";

						var nameSpan = dojo.create("span", {
							innerHTML: effectTitle,
							style: {
								float: "left",
								fontSize: "16px"
							}
						}, effectItemNode );

						var effectMod = effects[effect] > 1 ? "+": "";
						effectMod += ((effects[effect] - 1) * 100).toFixed(0) + "%";

						var effectSpan = dojo.create("span", {
							innerHTML: effectMod,
							style: {
								float: "right",
								fontSize: "16px",
								paddingLeft: "6px"
							}
						}, effectItemNode );

						dojo.create("span", {
							innerHTML: "&nbsp;",
							style: {
                                fontSize: "16px",
                                clear: "both" }
						}, effectItemNode );
					}
				}
				return tooltip.outerHTML;

			}));
		}

        midColumn.scrollTop = scrollPosition;
        this.update();

        //-------------------------
        $(".console-intro").html($I("console.intro"));

        React.render($r(WLeftPanel, {
            game: this.game
        }), document.getElementById("leftColumnViewport"));
    },

    //---------------------------------------------------------------
    update: function(){
        //TODO: use ui managers?
		this.updateTabs();
        this.updateFastHunt();
        this.updateFastPraise();
        this.updateCalendar();
        this.updateUndoButton();
        this.updateAdvisors();

        this.toolbar.update();

        if (this.game.ticks % 5 == 0 && this.game.tooltipUpdateFunc) {
            this.game.tooltipUpdateFunc();
        }

        $(".chatLink").css("font-weight", this.isChatVisited ? "normal" : "bold");

        //wat
        /*React.render($r(WLeftPanel, {
            game: this.game
        }), document.getElementById("leftColumnViewport")); */
        this.game._publish("ui/update", this.game);
    },

	updateTabs: function() {
		var tabs = this.game.tabs;
		for (var i = 0; i < tabs.length; i++){
			var tab = tabs[i];

			if (tab.tabId == this.activeTabId){
				tab.update();
			}
		}
	},

    updateFastHunt: function(){
        if (!this.fastHuntContainer){
            this.fastHuntContainer = $("#fastHuntContainer")[0];
        }

        if (!this.fastHuntContainer){
            return;
        }

        var catpower = this.game.resPool.get("manpower");
        var showFastHunt = (catpower.value >= 100);

        //blazing fast vanilla toggle
        if (showFastHunt){
            if (this.fastHuntContainer.style.visibility == "hidden"){
                this.fastHuntContainer.style.visibility = "visible";
            }
            var huntCount = Math.floor(catpower.value / 100);
            $("#fastHuntContainerCount")[0].innerHTML = this.game.getDisplayValueExt(huntCount, false, false, 0)
                + (huntCount === 1 ? " 次" : " 次");
        } else {
            if (this.fastHuntContainer.style.visibility == "visible"){
                this.fastHuntContainer.style.visibility = "hidden";
            }
        }
    },

    updateFastPraise: function(){
        if (!this.fastPraiseContainer){
            this.fastPraiseContainer = dojo.byId("fastPraiseContainer");
        }

        if (!this.fastPraiseContainer){
            return;
        }

        if (this.game.religion.faith > 0){
            if (this.fastPraiseContainer.style.visibility == "hidden"){
                this.fastPraiseContainer.style.visibility = "visible";
            }
        } else {
            if (this.fastPraiseContainer.style.visibility == "visible"){
                this.fastPraiseContainer.style.visibility = "hidden";
            }
        }
    },

    updateCalendar: function(){
        var calendar = this.game.calendar;
        var seasonTitle = calendar.getCurSeasonTitle();
        var hasCalendarTech = this.game.science.get("calendar").researched;

        var calendarDiv = dojo.byId("calendarDiv");
        if (hasCalendarTech){

            var mod = "";
            if (calendar.weather){
                mod = " (" + $I("calendar.weather." + calendar.weather) + ")";
            }

            var year = calendar.year;
            if (year > 100000){
                year = this.game.getDisplayValueExt(year, false, false, 0);
            }

            calendarDiv.innerHTML = $I("calendar.year.full", [year.toLocaleString(), seasonTitle + mod, Math.floor(calendar.day)]);
            document.title = "猫国建设者 - " + $I("calendar.year.full", [calendar.year, seasonTitle, Math.floor(calendar.day)]);

            if (this.game.ironWill && calendar.observeBtn) {
                document.title = "[EVENT!]" + document.title;
            }

            var calendarSignSpan = dojo.byId("calendarSign");
            var cycle = calendar.cycles[calendar.cycle];
            if (cycle && this.game.science.get("astronomy").researched) {
            	calendarSignSpan.style = "color: " + calendar.cycleYearColor();
                calendarSignSpan.innerHTML = cycle.glyph + " ";
            }
        } else {
            calendarDiv.textContent = seasonTitle;
        }
    },
    //--------------------------------------------

    updateUndoButton: function(){
        var isVisible = (this.game.undoChange !== null);
        $("#undoBtn").toggle(isVisible);

        if (isVisible) {
            $("#undoBtn").html("撤销 (" + Math.floor(this.game.undoChange.ttl / this.game.ticksPerSecond) + "秒)");
        }
    },

    updateAdvisors: function(){
        if (this.game.bld.get("field").on == 0){
            return;
        }

        var advDiv = dojo.byId("advisorsContainer");
        if (!advDiv){
            return;
        }
        dojo.empty(advDiv);

        var calendar = this.game.calendar,
            winterDays = calendar.daysPerSeason -
                (calendar.getCurSeason().name === "winter" ? calendar.day : 0);

        var catnipPerTick = this.game.calcResourcePerTick("catnip", { modifiers:{
            "catnip" : 0.25
        }});	//calculate estimate winter per tick for catnip;

        if (this.game.resPool.get("catnip").value + winterDays * catnipPerTick * calendar.ticksPerDay <= 0) {
            advDiv.innerHTML = "<span>" + $I("general.food.advisor.text") + "<span>";
        }
    },

    updateLanguage: function(){
        var languageSelector = $("#languageSelector");
        $("#languageApplyLink").toggle(languageSelector.val() != i18nLang.getLanguage());
    },

    applyLanguage: function() {
        var languageSelector = $("#languageSelector");
        i18nLang.updateLanguage(languageSelector.val());
        this.game.updateOptionsUI();
        window.location.reload();
    },


    updateOptions: function() {
        var game = this.game;

        $("#schemeToggle").val(game.colorScheme);
        $("body").attr("class", "scheme_" + game.colorScheme);

        $("#workersToggle")[0].checked = game.useWorkers;
        $("#forceHighPrecision")[0].checked = game.opts.forceHighPrecision;
        $("#usePerSecondValues")[0].checked = game.opts.usePerSecondValues;
        $("#usePercentageResourceValues")[0].checked = game.opts.usePercentageResourceValues;
        $("#highlightUnavailable")[0].checked = game.opts.highlightUnavailable;
        $("#hideSell")[0].checked = game.opts.hideSell;
        $("#enableRedshift")[0].checked = game.opts.enableRedshift;
        $("#disableTelemetry")[0].checked = game.opts.disableTelemetry;
        $("#noConfirm")[0].checked = game.opts.noConfirm;
        $("#IWSmelter")[0].checked = game.opts.IWSmelter;

        var selectedLang = i18nLang.getLanguage();
        var locales = i18nLang.getAvailableLocales();
        var labels = i18nLang.getAvailableLocaleLabels();
        var $langSelector = $("#languageSelector");
        $langSelector.empty();
        for (var i = 0; i < locales.length; i++) {
            $('<option />', {
                value: locales[i],
                text:labels[locales[i]]
            }).appendTo($langSelector);
        }
        $langSelector.val(selectedLang);
    },

    displayAutosave: function(){
        dojo.style(dojo.byId("autosaveTooltip"), "opacity", "1");
        dojo.animateProperty({
            node:"autosaveTooltip",
            properties: {
                opacity: 0
            },
            duration: 1200,
        }).play();
    },

    getFontSize: function(){
        //account for themes like sleek that set the default font size to something other than 16
        if (this.fontSize == null){
            var computedStyle = getComputedStyle(dojo.byId("leftColumn")).fontSize;
            this.fontSize = parseInt(computedStyle, 10) || 16;
        }
        return this.fontSize;
    },

    zoomUp: function(){
        this.fontSize = this.getFontSize() + 1;
        this.updateFontSize();
    },
    zoomDown: function(){
        this.fontSize = this.getFontSize() - 1;
        if (this.fontSize < 1){
            this.fontSize = 1; //prevent resources text from disappearing altogether
        }
        this.updateFontSize();
    },
    updateFontSize: function(){
        $("#leftColumn").css("font-size", this.fontSize+"px");
    },

    hideChat: function(){
        $("#rightTabLog").show();
        $("#IRCChatInner").css("visibility", "hidden");
        $("#logLink").toggleClass("active", true);
        $("#chatLink").toggleClass("active", false);
    },

    loadChat: function(){
        $("#rightTabChat").show();
        $("#rightTabLog").hide();

        $("#logLink").toggleClass("active", false);
        $("#chatLink").toggleClass("active", true);

        $("#IRCChatInner").css("visibility", "visible");

        if (this.isChatActive) {
            return;
        }

        var height = $(window.top).height() || 850;
        //console.log("IRC WINDOW HEIGHT:", height);

        var $chat = $('#IRCChatInner iframe');
        $chat.css("height", height - 180);

        //swfobject.embedSWF("lib/lightirc/lightIRC.swf", $chat[0], 600, height - 150, 10, "lib/lightirc/expressInstall.swf", params);
        /*<iframe src="https://kiwiirc.com/client/irc.canternet.org/?nick=kitten_?#kittensgame" style="border:0; width:100%; height:450px;"></iframe>*/
        this.isChatActive = true;
        this.isChatVisited = true;
    },

    resetConsole: function(){
        this.game.console.resetState();
    },

    renderFilters: function(){
        var console = this.game.console,
            filtersDiv = dojo.byId("logFilters");

        dojo.empty(filtersDiv);
        var show = false;

        for (var fId in console.filters){
            if (console.filters[fId].unlocked) {
                this._createFilter(console.filters[fId], fId, filtersDiv);
                show = true;
            }
        }
        $("#logFiltersBlock").toggle(show);
    },

    onLoad: function(){
        var self = this;
        $(document).on("keyup keydown keypress", function(e){

            /*if (e.altKey){    //firefox shenenigans
                e.preventDefault();
                e.stopPropagation();
            }*/

            self.keyStates = {
                shiftKey: e.shiftKey,
                ctrlKey: e.ctrlKey,
                altKey: e.altKey
            };
        });
    },

    _createFilter: function(filter, fId, filtersDiv){
        var id = "filter-" + fId;

        var checkbox = dojo.create("input", {
                id: id,
                type: "checkbox",
                checked: filter.enabled
        }, filtersDiv);
        dojo.connect(checkbox, "onclick", this, function(){
            filter.enabled = checkbox.checked;
        });

        dojo.create("label", {
            "for": id,
            innerHTML: filter.title
        }, filtersDiv);
        dojo.create("br", null, filtersDiv);
    },

    logMessagesToFade: 15, //how many messages to fade as they approach message limits

    renderConsoleLog: function() {
        var _console = this.game.console,
            messages = _console.messages;

        var gameLog = dojo.byId("gameLog");
        if (!messages.length) { // micro optimization
            return;
        }

        var msg = messages[messages.length-1];

        if (!msg.span) {
            var span = dojo.create("span", {className: "msg" }, gameLog);

            if (msg.type) {
                dojo.addClass(span, "type_"+msg.type);
            }
            if (msg.noBullet) {
                dojo.addClass(span, "noBullet");
            }
            msg.span = span;
        }
        //Place date headers above actual log events.
        if (msg.type === 'date') {
            dojo.place(msg.span, gameLog, "first");
        } else {
            dojo.place(msg.span, gameLog, 1);
        }
        dojo.attr(msg.span, {innerHTML: msg.text});
        //Destroy child nodes if there are too many.
        var logLength = dojo.byId('gameLog').childNodes.length;
        if (logLength > _console.maxMessages) {dojo.destroy(dojo.byId('gameLog').childNodes[logLength-1])}

        //fade message spans as they get closer to being removed and replaced
        var spans = dojo.query("span", gameLog);
        var fadeCount = this.logMessagesToFade + 1; //add one so the last line is still barely visible
        var fadeStart = _console.maxMessages - fadeCount;
        var fadeInterval = 1 / fadeCount;

        for (i = fadeStart + 1; i < spans.length; i++) {
            dojo.style(spans[i], "opacity", (1 - (i-fadeStart) * fadeInterval));
        }
    },

    notifyLogEvent: function(logmsg) {
        // do nothing
    },

    saveExport: function(encodedData, rawData) {
        var is_chrome = /*window.chrome*/ true;
        if (is_chrome){
            $("#exportDiv").show();
            $("#exportData").val(encodedData);
            $("#exportData").select();
        } else {
            window.prompt($I("general.copy.to.clipboard.prompt"), encodedData);
        }
    },


    confirm: function(title, msg, callback) {
        invokeCallback(callback, [window.confirm(msg)]);
    },

    //TODO: add dialog and close/bind events
    showDialog: function(id){
        var container = $("#"+id);
        container.show();

        $(".close", container).click(function(){
            $(".close", container).unbind();
            container.hide();
        });
    },

    displayAppDialog: function(){
        this.showDialog("appDiv");
    },

    load: function() {
        // swap to bonfire if the current tab is not visible
        var tabs = this.game.tabs;
        for (var i = 0; i < tabs.length; i++){
            var tab = tabs[i];
            if (this.activeTabId == tab.tabId){
                if (!tab.visible){
                    this.activeTabId = tabs[0].tabId;
                }
                break;
            }
        }

        var uiData = LCstorage["com.nuclearunicorn.kittengame.ui"];
        try {
            uiData = JSON.parse(uiData);

            this.fontSize = uiData.fontSize || 16;
            this.isChatVisited = uiData.isChatVisited || false;
        } catch (ex) {
            console.error("unable to load ui data");
        }
        this.updateFontSize();
    },

    save: function(){
        LCstorage["com.nuclearunicorn.kittengame.ui"] = JSON.stringify({
           fontSize: this.fontSize,
           isChatVisited: this.isChatVisited
        });
    },

    toggleCenter: function(){
        $("#game").toggleClass("centered");
        $("#toggleCenter").html($("#game").hasClass("centered") ? "&lt;" : "&gt");
    },

    isEffectMultiplierEnabled: function(){
        //console.log(this.keyStates);
        return this.keyStates.shiftKey;
    }

});