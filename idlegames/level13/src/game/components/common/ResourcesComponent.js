// Defines the resources stored by an entity (player / (sector(camp) / tribe)
define(['ash', 'game/vos/ResourcesVO'], function (Ash, ResourcesVO) {
    
    var ResourcesComponent = Ash.Class.extend({
        
        resources: null,
        storageCapacity: 0,
        
        constructor: function (capacity) {
            this.resources = new ResourcesVO();
            this.storageCapacity = capacity;
            this.resetStorage();
        },
        
        resetStorage: function () {
            this.resources.reset();
        },
        
        limitToStorage: function (fixNegatives) {
            var spilledResources = new ResourcesVO();
            if (this.storageCapacity >= 0) {
                for (var key in resourceNames) {
                    var name = resourceNames[key];
                    if (this.resources.getResource(name) > this.storageCapacity) {
                        spilledResources.addResource(name, this.resources.getResource(name) - this.storageCapacity);
                        this.resources.setResource(name, this.storageCapacity);
                    }
                    if (fixNegatives && this.resources.getResource(name) < 0) {
                        spilledResources.addResource(name, -this.resources.getResource(name));
                        this.resources.setResource(name, 0);
                    }
                }
            }
            return spilledResources;
        },
        
        addResources: function (resourceVO) {
            if (resourceVO !== null) {
                for(var key in resourceNames) {
                    var name = resourceNames[key];
                    this.resources.addResource(name, resourceVO[name]);
                }
            }
        },
        
        substractResources: function (resourceVO) {
            if (resourceVO !== null) {
                for(var key in resourceNames) {
                    var name = resourceNames[key];
                    this.resources.addResource(name, -resourceVO[name]);
                }
            }
        },
        
        isStocked: function (gameState) {
            var threshold = this.storageCapacity;
            for (var key in resourceNames) {
                var name = resourceNames[key];
                if (!gameState.unlockedFeatures.resources[name])
                    continue;
                if (this.resources.getResource(name) < threshold)
                    return false;
            }
            return true;
        },
    
        getResourceForLevel: function (lvl) {
            if (lvl < 0) {
                return resourceNames.herbs;
            }
            else {
                return resourceNames.fuel;
            }
        },
        
        getSaveKey: function () {
            return "Res";
        },
        
        // resources component needs to be saved only if there is storage (player/camp), otherwise the resources are defined by the WorldCreator
        getCustomSaveObject: function () {
            if (this.storageCapacity > 0)
                return this;
            else return null;
        },
    });

    return ResourcesComponent;
});
