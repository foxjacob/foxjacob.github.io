define(['ash', 'game/constants/MovementConstants'], function (Ash, MovementConstants) {
    
    var MovementBlockerVO = Ash.Class.extend({
	
        constructor: function (type) {
			this.type = type;
			this.name = this.getName();
			this.bridgeable = type === MovementConstants.BLOCKER_TYPE_GAP;
			this.cleanable = type === MovementConstants.BLOCKER_TYPE_WASTE;
			this.defeatable = type === MovementConstants.BLOCKER_TYPE_GANG;
			this.flyable = type === MovementConstants.BLOCKER_TYPE_GAP || type === MovementConstants.BLOCKER_TYPE_WASTE;
			
			this.actionBaseID = this.getActionBaseId();
        },
		
		getName: function () {
			switch (this.type) {
				case MovementConstants.BLOCKER_TYPE_GAP: return "Gap";
				case MovementConstants.BLOCKER_TYPE_WASTE: return "Toxic waste";
				case MovementConstants.BLOCKER_TYPE_GANG: return "Gang";
	 	 	}
		},
		
		getActionBaseId: function () {
			switch (this.type) {
				case MovementConstants.BLOCKER_TYPE_GAP: return "build_out_bridge";
				case MovementConstants.BLOCKER_TYPE_WASTE: return "clear_waste";
				case MovementConstants.BLOCKER_TYPE_GANG: return "fight_gang";
	 	 	}
		},
		
    });

    return MovementBlockerVO;
});
