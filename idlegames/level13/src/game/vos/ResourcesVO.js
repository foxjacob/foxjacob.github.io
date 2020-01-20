// Defines the resources used in the game
define(['ash'], function (Ash) {

    // Global static definitions
    resourceNames = {
		water: "water",
		food: "food",
		metal: "metal",
		rope: "rope",
		
		herbs: "herbs",
		fuel: "fuel",
		
		medicine: "medicine",
		tools: "tools",
		concrete: "concrete",
    };
    
    isResource = function (name) {
		return typeof resourceNames[name] != "undefined";
    };
    
    var ResourcesVO = Ash.Class.extend({
	
		// Basic
        water: 0,
        food: 0,
        metal: 0,
		rope: 0,
            
        // Level-dependent
		herbs: 0,
		fuel: 0,
	
		// Advanced
		tools: 0,
		medicine: 0,
		concrete: 0,
    
        constructor: function () {
			this.reset();
        },
            
        reset: function () {
			// Basic
            this.water = 0;
            this.food = 0;
            this.metal = 0;
			this.rope = 0;
            
            // Level-dependent
            this.herbs = 0;
            this.fuel = 0;
            
            // Advanced
            this.tools = 0;
            this.medicine = 0;
			this.concrete = 0;
		},
        
        addResource: function (res, amount) {
			this.cleanUp();
            switch(res) {
                case resourceNames.water: this.water += amount; break;
                case resourceNames.food: this.food += amount; break;
                case resourceNames.metal: this.metal += amount; break;
                case resourceNames.rope: this.rope += amount; break;
                case resourceNames.herbs: this.herbs += amount; break;
                case resourceNames.fuel: this.fuel += amount; break;
                case resourceNames.tools: this.tools += amount; break;
                case resourceNames.medicine: this.medicine += amount; break;
                case resourceNames.concrete: this.concrete += amount; break;
                default:
                    console.log("WARN: Unknown resource name: " + res);
            }
        },
        
        setResource: function(res, amount) {
            switch(res) {
                case resourceNames.water: this.water = amount; break;
                case resourceNames.food: this.food = amount; break;
                case resourceNames.metal: this.metal = amount; break;
                case resourceNames.rope: this.rope = amount; break;
                case resourceNames.herbs: this.herbs = amount; break;
                case resourceNames.fuel: this.fuel = amount; break;
                case resourceNames.tools: this.tools = amount; break;
                case resourceNames.medicine: this.medicine = amount; break;
                case resourceNames.concrete: this.concrete = amount; break;
                default:
                    console.log("WARN: Unknown resource name: " + res);
            }
        },
	
		getResource: function(res) {
            switch(res) {
                case resourceNames.water: return this.water;
                case resourceNames.food: return this.food;
                case resourceNames.metal: return this.metal;
                case resourceNames.rope: return this.rope;
                    
                case resourceNames.herbs: return this.herbs;
                case resourceNames.fuel: return this.fuel;
		    
                case resourceNames.medicine: return this.medicine;
                case resourceNames.tools: return this.tools;
                case resourceNames.concrete: return this.concrete;
                
                default:
                    console.log("WARN: Unknown resource name: " + res);
            }
			return 0;
		},
		
		addAll: function (resourceVO) {
			for(var key in resourceNames) {
				var name = resourceNames[key];
				this.addResource(name, resourceVO.getResource(name));
			}
		},
        
        limitAll: function (min, max) {
			for(var key in resourceNames) {
				var name = resourceNames[key];
                this.limit(name, min, max);
			}
        },
        
        limit: function (name, min, max) {
            var amount = this.getResource(name);
            if (amount < min)
                this.setResource(name, min);
            if (amount > max)
                this.setResource(name, max);
        },
	
		cleanUp: function() {
			for(var key in resourceNames) {
				var name = resourceNames[key];
				var amount = this.getResource(name);
				if (isNaN(amount)) {
					this.setResource(name, 0);
				}
			}
		},
		
		getTotal: function() {
			var total = 0;
			 for(var key in resourceNames) {
				var name = resourceNames[key];
				var amount = this.getResource(name);
				total += amount;
			}
			return total;
		},
        
        getNames: function () {
            var result = [];
			 for(var key in resourceNames) {
				var name = resourceNames[key];
				var amount = this.getResource(name);
				if (amount > 0)
                    result.push(name);
			}
            return result;
        },
		
		clone: function() {
			var c = new ResourcesVO();
			for(var key in resourceNames) {
				var name = resourceNames[key];
				c.setResource(name, this.getResource(name));
			}
			return c;
		}
    });

    return ResourcesVO;
});
