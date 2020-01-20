// describes a past raid on a camp
define(['ash', 'game/vos/ResourcesVO'], function (Ash, ResourcesVO) {
    
    var RaidVO = Ash.Class.extend({
	
        wasVictory: false,
        resourcesLost: null,
        timestamp: null, // end time
	
        constructor: function (raidComponent) {
            this.wasVictory = raidComponent ? raidComponent.victory : false;
            this.resourcesLost = raidComponent ? raidComponent.resourcesLost : new ResourcesVO();
            this.timestamp = raidComponent ? new Date().getTime() : -1;
        },
        
        isValid: function() {
            return this.timestamp != null && this.timestamp > 0;
        }
        
    });

    return RaidVO;
});
