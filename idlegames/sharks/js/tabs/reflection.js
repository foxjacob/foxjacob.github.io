SharkGame.Reflection = {

    tabId: "reflection",
    tabDiscovered: false,
    tabName: "反射",
    tabBg: "img/bg/bg-gate.png",

    sceneImage: "img/events/misc/scene-reflection.png",

    discoverReq: {
        resource: {
            essence: 1
        }
    },

    message: "你可能不记得所有的事情，但你现在已经不仅仅是一只鲨鱼了。" +
    "</br><span='medDesc'>反思你自己和你在这里所做的改变。</span>",

    init: function() {
        var r = SharkGame.Reflection;
        // register tab
        SharkGame.Tabs[r.tabId] = {
            id: r.tabId,
            name: r.tabName,
            discovered: r.tabDiscovered,
            discoverReq: r.discoverReq,
            code: r
        };
    },

    switchTo: function() {
        var r = SharkGame.Reflection;
        var content = $('#content');
        content.append($('<div>').attr("id", "tabMessage"));
        content.append($('<div>').attr("id", "artifactList"));
        var message = r.message;
        var tabMessageSel = $('#tabMessage');
        if(SharkGame.Settings.current.showTabImages) {
            message = "<img width=400 height=200 src='" + r.sceneImage + "' id='tabSceneImageEssence'>" + message;
            tabMessageSel.css("background-image", "url('" + r.tabBg + "')");
        }
        tabMessageSel.html(message);

        r.updateArtifactList();
    },

    update: function() {

    },

    updateArtifactList: function() {
        var m = SharkGame.Main;
        var listSel = $('#artifactList');
        $.each(SharkGame.Artifacts, function(artifactKey, artifactData) {
            if(artifactData.level > 0) {
                var maxedOut = artifactData.level >= artifactData.max;
                var item = $('<div>').addClass("artifactDiv");
                var artifactLabel = artifactData.name +
                    "<br><span class='medDesc'>";
                if(maxedOut) {
                    artifactLabel += "(Maximum Power)";
                } else {
                    artifactLabel += "(Power: " + m.beautify(artifactData.level) + ")";
                }
                artifactLabel += "</span><br><em>" + artifactData.flavour + "</em>";

                item.append(artifactLabel);
                listSel.append(item);

                var spritename = "artifacts/" + artifactKey;
                if(SharkGame.Settings.current.iconPositions !== "off") {
                    var iconDiv = SharkGame.changeSprite(SharkGame.spriteIconPath, spritename, null, "general/missing-artifact");
                    if(iconDiv) {
                        iconDiv.addClass("button-icon-" + SharkGame.Settings.current.iconPositions);
                        iconDiv.addClass("gatewayButton");
                        item.prepend(iconDiv);
                    }
                }
            }
        });
        if($('#artifactList > div').length === 0) {
            listSel.append("<p><em>You have no artifacts to show.</em></p>");
        }
    }
};