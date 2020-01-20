
/**
 * Weird cat science
 */
dojo.declare("classes.managers.ScienceManager", com.nuclearunicorn.core.TabManager, {

	game: null,

	hideResearched: false,	//hide researched techs

	//list of technologies
	techs:[{
		name: "calendar",
		label: $I("science.calendar.label"),
		description: $I("science.calendar.desc"),
		effectDesc: $I("science.calendar.effectDesc"),
		prices: [{name : "science", val: 30}],
		unlocks: {
			tech: ["agriculture"],
			tabs: ["time"]
		},
        flavor: $I("science.calendar.flavor")

	},{
		name: "agriculture",
		label: $I("science.agriculture.label"),
		description: $I("science.agriculture.desc"),
		effectDesc: $I("science.agriculture.effectDesc"),
		prices: [{name : "science", val: 100}],
		unlocks: {
			buildings: ["barn"],
			tech: ["mining", "archery"],
			jobs: ["farmer"]
		},
        flavor: $I("science.agriculture.flavor")
	},{
		name: "archery",
		label: $I("science.archery.label"),
		description: $I("science.archery.desc"),
		effectDesc: $I("science.archery.effectDesc"),
		prices: [{name : "science", val: 300}],
		unlocks: {
			tech: ["animal"],
			buildings: ["zebraOutpost", "zebraWorkshop", "zebraForge"],
			jobs: ["hunter"]
		},
		flavor: $I("science.archery.flavor")
	},{
		name: "mining",
		label: $I("science.mining.label"),
		description: $I("science.mining.desc"),
		effectDesc: $I("science.mining.effectDesc"),
		prices: [{name : "science", val: 500}],
		unlocks: {
			buildings: ["mine", "workshop"],
			tech: ["metal"],
			upgrades: ["bolas"]
		},
		flavor: $I("science.mining.flavor")
	},{
		name: "metal",
		label: $I("science.metal.label"),
		description: $I("science.metal.desc"),
		effectDesc: $I("science.metal.effectDesc"),
		prices: [{name : "science", val: 900}],
		unlocks: {
			buildings: ["smelter"],
			upgrades: ["huntingArmor"]
		}
	},
	{
		name: "animal",
		label: $I("science.animal.label"),
		description: $I("science.animal.desc"),
		effectDesc: $I("science.animal.effectDesc"),
		prices: [{name : "science", val: 500}],	//mostly does nothing, so price is lower
		unlocks: {
			buildings: ["pasture", "unicornPasture"],
			tech: ["civil", "math", "construction"]
			//crafts: ["leather"]
		}
	},{
		/*==============	NOT USED ANYMORE   ============*/
		name: "brewery",
		label: $I("science.brewery.label"),
		description: $I("science.brewery.desc"),
		effectDesc: $I("science.brewery.effectDesc"),
		prices: [{name : "science", val: 1200 }]
	},
	//--------------------------------------------------
	{
		name: "civil",
		label: $I("science.civil.label"),
		description: $I("science.civil.desc"),
		effectDesc: $I("science.civil.effectDesc"),
		prices: [{name : "science", val: 1500}],
		unlocks: {
			tech: ["currency"]	//currency
		},
		flavor: $I("science.civil.flavor")
	},{
		name: "math",
		label: $I("science.math.label"),
		description: $I("science.math.desc"),
		effectDesc: $I("science.math.effectDesc"),
		prices: [{name : "science", val: 1000}],
		unlocks: {
			buildings: ["academy"],
			upgrades: ["celestialMechanics"],
			tabs: ["stats"]
		},
		flavor: $I("science.math.flavor")
	},{
		name: "construction",
		label: $I("science.construction.label"),
		description: $I("science.construction.desc"),
		effectDesc: $I("science.construction.effectDesc"),
		prices: [{name : "science", val: 1300}],
		unlocks: {
			buildings: ["logHouse", "warehouse", "lumberMill", "ziggurat"],
			tech: ["engineering"],
			upgrades: ["compositeBow", "advancedRefinement", "reinforcedSaw"]
		},
		flavor: $I("science.construction.flavor")
	},{
		name: "engineering",
		label: $I("science.engineering.label"),
		description: $I("science.engineering.desc"),
		effectDesc: $I("science.engineering.effectDesc"),
		prices: [{name : "science", val: 1500}],
		unlocks: {
			buildings: ["aqueduct"],
			tech: ["writing"]
		}
	},{
		name: "currency",
		label: $I("science.currency.label"),
		description: $I("science.currency.desc"),
		effectDesc: $I("science.currency.effectDesc"),
		prices: [{name : "science", val: 2200}],
		unlocks: {
			buildings: ["tradepost"],
			upgrades: ["goldOre"]
		}
	},{
		name: "writing",
		label: $I("science.writing.label"),
		description: $I("science.writing.desc"),
		effectDesc: $I("science.writing.effectDesc"),
		prices: [{name : "science", val: 3600}],
		unlocks: {
			buildings: ["amphitheatre"],
			tech: ["philosophy", "machinery", "steel"],
			upgrades: ["register"],
			crafts: ["parchment"]
		},
		flavor: $I("science.writing.flavor")
	},{
		name: "philosophy",
		label: $I("science.philosophy.label"),
		description: $I("science.philosophy.desc"),
		effectDesc: $I("science.philosophy.effectDesc"),
		prices: [{name : "science", val: 9500}],
		unlocks: {
			buildings: ["temple"],
			tech: ["theology"],
			crafts: ["compedium"]
		},
		flavor: $I("science.philosophy.flavor")
	},{
		name: "machinery",
		label: $I("science.machinery.label"),
		description: $I("science.machinery.desc"),
		effectDesc: $I("science.machinery.effectDesc"),
		prices: [{name : "science", val: 15000}],
		unlocks: {
			buildings: ["steamworks"],
			upgrades: ["printingPress", "factoryAutomation", "crossbow"]
		}
	},{
		name: "steel",
		label: $I("science.steel.label"),
		description: $I("science.steel.desc"),
		effectDesc: $I("science.steel.effectDesc"),
		prices: [{name : "science", val: 12000}],
		unlocks: {
			upgrades: ["deepMining", "coalFurnace", "combustionEngine",
						"reinforcedWarehouses", "steelAxe", "steelArmor"],
			crafts: ["steel"]
		}
	},{
		name: "theology",
		label: $I("science.theology.label"),
		description: $I("science.theology.desc"),
		effectDesc: $I("science.theology.effectDesc"),
		prices: [
			{name : "science", val: 20000},
			{name: 	"manuscript", val: 35}
		],
		unlocks: {
			tech: ["astronomy", "cryptotheology"],
			jobs: ["priest"]
		},
		upgrades: {
			buildings: ["temple"]
		},
        flavor: $I("science.theology.flavor")
	},{
		name: "astronomy",
		label: $I("science.astronomy.label"),
		description: $I("science.astronomy.desc"),
		effectDesc: $I("science.astronomy.effectDesc"),
		prices: [
			{name : "science", val: 28000},
			{name: 	"manuscript", val: 65}
		],
		unlocks: {
			buildings: ["observatory"],
			tech: ["navigation"]
		}
	},{
		name: "navigation",
		label: $I("science.navigation.label"),
		description: $I("science.navigation.desc"),
		effectDesc: $I("science.navigation.effectDesc"),
		prices: [
			{name : "science", val: 35000},
			{name: 	"manuscript", val: 100}
		],
		unlocks: {
			buildings: ["harbor"],
			tech: ["physics", "archeology", "architecture"],
			crafts: ["ship"],
			upgrades: ["caravanserai", "cargoShips", "astrolabe",
						"titaniumMirrors", "titaniumAxe"]
		}
	},{
		name: "architecture",
		label: $I("science.architecture.label"),
		description: $I("science.architecture.desc"),
		effectDesc: $I("science.architecture.effectDesc"),
		prices: [
			{name : "science", val: 42000},
			{name: 	"compedium", val: 10}
		],
		unlocks: {
			buildings: ["mansion", "mint"],
			tech: ["acoustics"]
		},
		flavor: $I("science.architecture.flavor")
	},{
		name: "physics",
		label: $I("science.physics.label"),
		description: $I("science.physics.desc"),
		effectDesc: $I("science.physics.effectDesc"),
		prices: [
			{name : "science", val: 50000},
			{name: 	"compedium", val: 35}
		],
		unlocks: {
			tech: ["chemistry", "electricity", "metaphysics"],
			crafts: ["blueprint"],
			upgrades: ["pneumaticPress", "pyrolysis", "steelSaw"]
		}
	},{
		name: "metaphysics",
		label: $I("science.metaphysics.label"),
		description: $I("science.metaphysics.desc"),
		effectDesc: $I("science.metaphysics.effectDesc"),
		prices: [
			{name : "science", val: 55000},
			{name: 	"unobtainium", val: 5}
		],
	},{
		name: "chemistry",
		label: $I("science.chemistry.label"),
		description: $I("science.chemistry.desc"),
		effectDesc: $I("science.chemistry.effectDesc"),
		prices: [
			{name : "science", val: 60000},
			{name: 	"compedium", val: 50}
		],
		unlocks: {
			buildings: ["calciner", "oilWell"],
			upgrades: ["alloyAxe", "alloyArmor", "alloyWarehouses", "alloyBarns"],
			crafts: ["alloy"]
		}
	},{
		name: "acoustics",
		label: $I("science.acoustics.label"),
		description: $I("science.acoustics.desc"),
		effectDesc: $I("science.acoustics.effectDesc"),
		prices: [
			{name : "science", val: 60000},
			{name: 	"compedium", val: 60}
		],
		unlocks: {
			buildings: ["chapel"],
			tech: ["drama"]
		}
	},{
		name: "drama",
		label: $I("science.drama.label"),
		description: $I("science.drama.desc"),
		effectDesc: $I("science.drama.effectDesc"),
		prices: [
			{name : "science", val: 90000},
			{name: 	"parchment", val: 5000}
		],
	},{
		name: "archeology",
		label: $I("science.archeology.label"),
		description: $I("science.archeology.desc"),
		effectDesc: $I("science.archeology.effectDesc"),
		prices: [
			{name : "science", val: 65000},
			{name: 	"compedium", val: 65}
		],
		unlocks: {
			buildings: ["quarry"],
			tech: ["biology"],
			jobs: ["geologist"],
			upgrades:["geodesy"]
		},
		flavor: $I("science.archeology.flavor")
	},{
		name: "electricity",
		label: $I("science.electricity.label"),
		description: $I("science.electricity.desc"),
		effectDesc: $I("science.electricity.effectDesc"),
		prices: [
			{name : "science", val: 75000},
			{name: 	"compedium", val: 85}
		],
		unlocks: {
			buildings: ["magneto"],
			tech: ["industrialization"]
		},
		flavor: $I("science.electricity.flavor")
	},{
		name: "biology",
		label: $I("science.biology.label"),
		description: $I("science.biology.desc"),
		effectDesc: $I("science.biology.effectDesc"),
		prices: [
			{name : "science", val: 85000},
			{name: 	"compedium", val: 100}
		],
		unlocks: {
			buildings: ["biolab"],
			tech: ["biochemistry"]
		},
		flavor: $I("science.biology.flavor")
	},{
		name: "biochemistry",
		label: $I("science.biochemistry.label"),
		description: $I("science.biochemistry.desc"),
		effectDesc: $I("science.biochemistry.effectDesc"),
		prices: [
			{name : "science", val: 145000},
			{name: 	"compedium", val: 500}
		],
		unlocks: {
			tech: ["genetics"],
			upgrades: ["biofuel"]
		},
		flavor: $I("science.biochemistry.flavor")
	},{
		name: "genetics",
		label: $I("science.genetics.label"),
		description: $I("science.genetics.desc"),
		effectDesc: $I("science.genetics.effectDesc"),
		prices: [
			{name : "science", val: 190000},
			{name: 	"compedium", val: 1500}
		],
		unlocks: {
			upgrades: ["unicornSelection", "gmo"]
		},
		flavor: $I("science.genetics.flavor")
	},{
		name: "industrialization",
		label: $I("science.industrialization.label"),
		description: $I("science.industrialization.desc"),
		effectDesc: $I("science.industrialization.effectDesc"),
		prices: [
			{name : "science", val: 100000},
			{name: 	"blueprint", val: 25}
		],
		unlocks: {
			tech: ["mechanization", "metalurgy", "combustion"],
			upgrades: ["barges", "advancedAutomation", "logistics"]
		}
	},{
		name: "mechanization",
		label: $I("science.mechanization.label"),
		description: $I("science.mechanization.desc"),
		effectDesc: $I("science.mechanization.effectDesc"),
		prices: [
			{name : "science", val: 115000},
			{name: 	"blueprint", val: 45}
		],
		unlocks: {
			buildings: ["factory"],
			tech: ["electronics"],
			crafts: ["concrate"],
			upgrades: ["pumpjack", "strenghtenBuild"],
			jobs: ["engineer"]
		}
	},{
		name: "metalurgy",
		label: $I("science.metalurgy.label"),
		description: $I("science.metalurgy.desc"),
		effectDesc: $I("science.metalurgy.effectDesc"),
		prices: [
			{name : "science", val: 125000},
			{name: 	"blueprint", val: 60}
		],
		unlocks: {
			upgrades: ["electrolyticSmelting", "oxidation", "miningDrill"]
		}
	},{
		name: "combustion",
		label: $I("science.combustion.label"),
		description: $I("science.combustion.desc"),
		effectDesc: $I("science.combustion.effectDesc"),
		prices: [
			{name : "science", val: 115000},
			{name: 	"blueprint", val: 45}
		],
		unlocks: {
			upgrades: ["offsetPress", "fuelInjectors", "oilRefinery"],
			tech: ["ecology"]
		}
	},
	{
		name: "ecology",
		label: $I("science.ecology.label"),
		description: $I("science.ecology.desc"),
		effectDesc: $I("science.ecology.effectDesc"),
		prices: [
			{name : "science", val: 125000},
			{name: 	"blueprint", val: 55}
		],
		unlocks: {
			stages: [{bld:"pasture",stage:1}] 	// Solar Farm
		}
	},
	{
		name: "electronics",
		label: $I("science.electronics.label"),
		description: $I("science.electronics.desc"),
		effectDesc: $I("science.electronics.effectDesc"),
		prices: [
			{name : "science", val: 135000},
			{name: 	"blueprint", val: 70}
		],
		unlocks: {
			stages: [
				{bld:"amphitheatre",stage:1},	// Broadcast Tower
				{bld:"library",stage:1}			// Data Center
			], 
			tech: [
				"nuclearFission", 
				"rocketry", 
				"robotics"
			],
			upgrades: [
				"cadSystems", 
				"refrigeration", 
				"seti", 
				"factoryLogistics", 
				"factoryOptimization", 
				"internet"
			]
		}
	},{
		name: "robotics",
		label: $I("science.robotics.label"),
		description: $I("science.robotics.desc"),
		effectDesc: $I("science.robotics.effectDesc"),
		prices: [
			{name : "science", val: 140000},
			{name: 	"blueprint", val: 80}
		],
		unlocks: {
			stages: [{bld:"aqueduct",stage:1}], // Hydro Plant
			upgrades: ["steelPlants", "rotaryKiln", "assistance", "factoryRobotics"],
			crafts: ["tanker"],
			tech: ["ai"],
		}
	},{
		name: "ai",
		label: $I("science.ai.label"),
		description: $I("science.ai.desc"),
		effectDesc: $I("science.ai.effectDesc"),
		prices: [
			{name : "science", val: 250000},
			{name: 	"blueprint", val: 150}
		],
		unlocks: {
			upgrades: ["neuralNetworks", "aiEngineers", "machineLearning"],
			buildings: ["aiCore"],
			tech: ["quantumCryptography"]
		}
	},{
		name: "quantumCryptography",
		label: $I("science.quantumCryptography.label"),
		description: $I("science.quantumCryptography.desc"),
		effectDesc: $I("science.quantumCryptography.effectDesc"),
		prices: [
			{name : "science", val: 1250000},
			{name: 	"relic", val: 1024}
		],
		unlocks: {
			tech: ["blackchain"]
		}
	},{
		name: "blackchain",
		label: $I("science.blackchain.label"),
		description: $I("science.blackchain.desc"),
		effectDesc: $I("science.blackchain.effectDesc"),
		prices: [
			{name : "science", val: 5000000},
			{name: 	"relic", val: 5000}
		],
		unlocks: {
		}
	},{
		name: "nuclearFission",
		label: $I("science.nuclearFission.label"),
		description: $I("science.nuclearFission.desc"),
		effectDesc: $I("science.nuclearFission.effectDesc"),
		prices: [
			{name : "science", val: 150000},
			{name: 	"blueprint", val: 100}
		],
		unlocks: {
			buildings: ["reactor"],
			tech: ["nanotechnology", "particlePhysics"],
			upgrades: ["reactorVessel", "nuclearSmelters"]
		}
	},{
		name: "rocketry",
		label: $I("science.rocketry.label"),
		description: $I("science.rocketry.desc"),
		effectDesc: $I("science.rocketry.effectDesc"),
		prices: [
			{name : "science", val: 175000},
			{name: 	"blueprint", val: 125}
		],
		unlocks: {
			tech: ["sattelites", "oilProcessing"],
			tabs: ["space"],
            upgrades: ["oilDistillation"]
		}
	}, {
        name: "oilProcessing",
        label: $I("science.oilProcessing.label"),
        description: $I("science.oilProcessing.desc"),
        effectDesc: $I("science.oilProcessing.effectDesc"),
        prices: [
            {name : "science", val: 215000},
            {name: 	"blueprint", val: 150}
        ],
        unlocks: {
            crafts: ["kerosene"],
            upgrades: [ "factoryProcessing" ]
        }
    },{
        name: "sattelites",
        label: $I("science.sattelites.label"),
        description: $I("science.sattelites.desc"),
        effectDesc: $I("science.sattelites.effectDesc"),
        prices: [
            {name : "science", val: 190000},
            {name: 	"blueprint", val: 125}
        ],
        unlocks: {
            tech: ["orbitalEngineering" ],
            upgrades: [ 
				"photolithography", 
				"orbitalGeodesy",
				"uplink",
				"thinFilm"
			]
        },
        flavor: $I("science.sattelites.flavor")
    },{
		name: "orbitalEngineering",
		label: $I("science.orbitalEngineering.label"),
		description: $I("science.orbitalEngineering.desc"),
		effectDesc: $I("science.orbitalEngineering.effectDesc"),
		prices: [
			{name : "science", val: 250000},
			{name: 	"blueprint", val: 250}
		],
		unlocks: {
			tech: ["exogeology", "thorium"],
			upgrades: [
				"hubbleTelescope", 
				"satelliteRadio", 
				"astrophysicists", 
				"solarSatellites", 
				"spaceEngineers", 
				"starlink" 
			]
		}
	},{
		name: "thorium",
		label: $I("science.thorium.label"),
		description: $I("science.thorium.desc"),
		effectDesc: $I("science.thorium.effectDesc"),
		prices: [
			{name : "science", val: 375000},
			{name: 	"blueprint", val: 375}
		],
		unlocks: {
			crafts: ["thorium"],
			upgrades: ["thoriumReactors", "thoriumEngine", "qdot"]
		}
	},{
		name: "exogeology",
		label: $I("science.exogeology.label"),
		description: $I("science.exogeology.desc"),
		effectDesc: $I("science.exogeology.effectDesc"),
		prices: [
			{name : "science", val: 275000},
			{name: 	"blueprint", val: 250}
		],
		unlocks: {
			tech: ["advExogeology"],
			upgrades: ["unobtainiumReflectors", "unobtainiumHuts", "unobtainiumDrill", "hydroPlantTurbines", "storageBunkers"]
		}
	},{
		name: "advExogeology",
		label: $I("science.advExogeology.label"),
		description: $I("science.advExogeology.desc"),
		effectDesc: $I("science.advExogeology.effectDesc"),
		prices: [
			{name : "science", val: 325000},
			{name: 	"blueprint", val: 350}
		],
		unlocks: {
			upgrades: ["eludiumCracker", "eludiumReflectors", "eludiumHuts", "mWReactor" /*, "eludiumDrill"*/],
			crafts: ["eludium"]
		}
	},
	{
		name: "nanotechnology",
		label: $I("science.nanotechnology.label"),
		description: $I("science.nanotechnology.desc"),
		effectDesc: $I("science.nanotechnology.effectDesc"),
		prices: [
			{name : "science", val: 200000},
			{name: 	"blueprint", val: 150}
		],
		unlocks: {
			tech: ["superconductors"],
			upgrades: ["augumentation", "nanosuits", "photovoltaic", "fluidizedReactors"]
		}
	},{
		name: "superconductors",
		label: $I("science.superconductors.label"),
		description: $I("science.superconductors.desc"),
		effectDesc: $I("science.superconductors.effectDesc"),
		prices: [
			{name : "science", val: 225000},
			{name: 	"blueprint", val: 175}
		],
		unlocks: {
            upgrades: ["coldFusion", "spaceManufacturing", "cryocomputing"],
			tech: ["antimatter"]
		}
	},{
		name: "antimatter",
		label: $I("science.antimatter.label"),
		description: $I("science.antimatter.desc"),
		effectDesc: $I("science.antimatter.effectDesc"),
		prices: [
			{name : "science", val: 500000},
			{name : "relic",   val: 1}
		],
		unlocks: {
			upgrades: ["amReactors", "amBases", "amDrive", "amFission"],
			tech: ["terraformation"]
		}
	},{
		name: "terraformation",
		label: $I("science.terraformation.label"),
		description: $I("science.terraformation.desc"),
		effectDesc: $I("science.terraformation.effectDesc"),
		prices: [
			{name : "science", val: 750000},
			{name : "relic",   val: 5}
		],
		unlocks: {
			tech: ["hydroponics"]
		}
	},{
		name: "hydroponics",
		label: $I("science.hydroponics.label"),
		description: $I("science.hydroponics.desc"),
		effectDesc: $I("science.hydroponics.effectDesc"),
		prices: [
			{name : "science", val: 1000000},
			{name : "relic",   val: 25}
		],
		unlocks: {
			tech: ["exogeophysics"]
		}
	},{
		name: "exogeophysics",
		label: $I("science.exogeophysics.label"),
		description: $I("science.exogeophysics.desc"),
		effectDesc: $I("science.exogeophysics.effectDesc"),
		prices: [
			{name : "science", val: 25000000},
			{name : "relic",   val: 500}
		]
	},
	{
		name: "particlePhysics",
		label: $I("science.particlePhysics.label"),
		description: $I("science.particlePhysics.desc"),
		effectDesc: $I("science.particlePhysics.effectDesc"),
		prices: [
			{name : "science", val: 185000},
			{name: 	"blueprint", val: 135}
		],
		unlocks: {
			buildings: ["accelerator"],
			tech: ["chronophysics", "dimensionalPhysics"],
			upgrades: ["enrichedUranium", "railgun"]
		}
	},{
		name: "dimensionalPhysics",
		label: $I("science.dimensionalPhysics.label"),
		description: $I("science.dimensionalPhysics.desc"),
		effectDesc: $I("science.dimensionalPhysics.effectDesc"),
		prices: [
			{name : "science", val: 235000}
		],
		unlocks: {
			upgrades: ["energyRifts", "lhc"]
		}
	},{
		name: "chronophysics",
		label: $I("science.chronophysics.label"),
		description: $I("science.chronophysics.desc"),
		effectDesc: $I("science.chronophysics.effectDesc"),
		prices: [
			{name : "science", val: 250000},
			{name: 	"timeCrystal", val: 5}
		],
		unlocks: {
			buildings: ["chronosphere"],
			tech: ["tachyonTheory"],
			upgrades: ["stasisChambers", "fluxCondensator"]
		}
	},{
		name: "tachyonTheory",
		label: $I("science.tachyonTheory.label"),
		description: $I("science.tachyonTheory.desc"),
		effectDesc: $I("science.tachyonTheory.effectDesc"),
		prices: [
			{name : "science", val: 750000},
			{name: 	"timeCrystal", val: 25},
			{name : "relic",   val: 1}
		],
		unlocks: {
			tech: ["voidSpace"],
			upgrades: ["tachyonAccelerators", "chronoforge", "chronoEngineers"]
		}
	},{
		name: "cryptotheology",
		label: $I("science.cryptotheology.label"),
		description: $I("science.cryptotheology.desc"),
		effectDesc: $I("science.cryptotheology.effectDesc"),
		prices: [
			{name : "science", val: 650000},
			{name : "relic",   val: 5}
		],
		unlocks: {
			upgrades: ["relicStation"]
		}
	},{
		name: "voidSpace",
		label: $I("science.voidSpace.label"),
		description: $I("science.voidSpace.desc"),
		effectDesc: $I("science.voidSpace.effectDesc"),
		prices: [
			{name : "science", val: 800000},
			{name: 	"timeCrystal", val: 30},
			{name : "void",   val: 100}
		],
		unlocks: {
			tech: ["paradoxalKnowledge"],
			upgrades: ["voidAspiration"],
			voidSpace: ["cryochambers"],
			challenges: ["atheism"]
		}
	},{
		name: "paradoxalKnowledge",
		label: $I("science.paradoxalKnowledge.label"),
		description: $I("science.paradoxalKnowledge.desc"),
		effectDesc: $I("science.paradoxalKnowledge.effectDesc"),
		prices: [
			{name : "science", val: 1000000},
			{name: 	"timeCrystal", val: 40},
			{name : "void",   val: 250}
		],
		unlocks: {
			chronoforge: ["ressourceRetrieval"],
			voidSpace: ["chronocontrol", "voidResonator"],
			upgrades: ["distorsion"]
		}
	}],

	metaCache: null,

	constructor: function(game){
		this.game = game;
		this.metaCache = {};
	},

	get: function(techName){
		var tech = this.metaCache[techName];
		if (tech){
			return tech;
		}

		for (var i = this.techs.length - 1; i >= 0; i--) {
			if (this.techs[i].name == techName){
				this.metaCache[techName] = this.techs[i];
				return this.techs[i];
			}
		}
		console.error("Failed to get tech for tech name '"+techName+"'");
		return null;
	},

	getPrices: function(tech) {

		var prices = tech.prices;

		var prices_result = $.extend(true, [], prices); // Create a new array to keep original values
		prices_result = this.game.village.getEffectLeader("scientist", prices_result);

		return prices_result;
	},

	resetState: function(){
		for (var i = 0; i < this.techs.length; i++){
			var tech = this.techs[i];
			if (tech.name == "calendar") {
				tech.unlocked = true;
			} else {
				tech.unlocked = false;
			}
			tech.researched = false;
		}

		this.hideResearched = false;
	},

	save: function(saveData){
		saveData.science = {
			hideResearched: this.hideResearched,
			techs: this.filterMetadata(this.techs, ["name", "unlocked", "researched"])
		};
	},

	load: function(saveData){
		if (saveData.science){
			this.hideResearched = saveData.science.hideResearched;
			this.loadMetadata(this.techs, saveData.science.techs);
		}

		//re-unlock technologies in case we have modified something
		for (var i = this.techs.length - 1; i >= 0; i--) {
			var tech = this.techs[i];
			if (!tech.researched) {
				continue;
			}

			this.game.unlock(tech.unlocks);
		}

	},

	unlockAll: function(){
		for (var i = this.techs.length - 1; i >= 0; i--) {
			var tech = this.techs[i];
			tech.researched = true;
			tech.unlocked = true;
			this.game.unlock(tech.unlocks);
		}
		this.game.msg("所有科技都解锁了！");
	}
});

dojo.declare("com.nuclearunicorn.game.ui.TechButtonController", com.nuclearunicorn.game.ui.BuildingResearchBtnController, {

	defaults: function() {
		var result = this.inherited(arguments);
		result.tooltipName = true;
		result.simplePrices = false;
		return result;
	},

	getMetadata: function(model){
        if (!model.metaCached){
            model.metaCached = this.game.science.get(model.options.id);
        }
        return model.metaCached;
    },

	getPrices: function(model) {
        return this.game.village.getEffectLeader("scientist", this.inherited(arguments));
    },

	updateVisible: function(model){
		var meta = model.metadata;
		if (!meta.unlocked){
			model.visible = false;
		}else{
			model.visible = true;
		}

		if (meta.researched && this.game.science.hideResearched){
			model.visible = false;
		}
	}
});

dojo.declare("com.nuclearunicorn.game.ui.tab.Library", com.nuclearunicorn.game.ui.tab, {

	metaphysicsPanel: null,

	render: function(tabContainer){

		this.buttons = [];

		var hasCivil = this.game.science.get("civil");

		//--------------------------------------------------------------------
		var div = dojo.create("div", { style: { float: "right"}}, tabContainer);
		var groupCheckbox = dojo.create("input", {
			id : "toggleResearched",
			type: "checkbox",
			checked: this.game.science.hideResearched,
			style: {
				display: hasCivil ? "" : "none"
			}
		}, div);

		dojo.connect(groupCheckbox, "onclick", this, function(){
			this.game.science.hideResearched = !this.game.science.hideResearched;

			dojo.empty(tabContainer);
			this.render(tabContainer);
		});

		dojo.create("label", { innerHTML: $I("science.toggleResearched.label"), for: "toggleResearched"}, div);
		//---------------------------------------------------------------------

		var table = dojo.create("table", { className: "table", style:{
			width: "100%"
		}}, tabContainer);

		var tr = dojo.create("tr", null, table);

		var tdTop = dojo.create("td", { colspan: 2 },
			dojo.create("tr", null, table));

		this.tdTop = tdTop;


		var tr = dojo.create("tr", null, table);

		var tdLeft = dojo.create("td", null, tr);
		var tdRight = dojo.create("td", null, tr);


		//this.inherited(arguments);


		for (var i = 0; i < this.game.science.techs.length; i++){
			var tech = this.game.science.techs[i];

			var btn = this.createTechBtn(tech);

			btn.updateVisible();
			btn.updateEnabled();

			this.addButton(btn);
			btn.render(tr);
		}


		//------------ metaphysics ----------------
		this.metaphysicsPanel = null;

		var showMetaphysics = this.game.science.get("metaphysics").researched && this.game.resPool.get("paragon").value > 0;
		if (!showMetaphysics){
			for (var i = this.game.prestige.perks.length - 1; i >= 0; i--){
				var perk = this.game.prestige.perks[i];
				if (perk.researched){
					showMetaphysics = true;
					break;
				}
			}
		}

		if (showMetaphysics){
			var metaphysicsPanel = new classes.ui.PrestigePanel($I("prestige.panel.label"), this.game.prestige);
			metaphysicsPanel.game = this.game;

			var content = metaphysicsPanel.render(tabContainer);

			this.metaphysicsPanel = metaphysicsPanel;
		}

        //---------- challenges ------------
		this.challengesPanel = null;

        //TODO: use better update/render logic like in Time tab
		var showChallenges = this.game.prestige.getPerk("adjustmentBureau").researched;
		if (showChallenges){
			var challengesPanel = new classes.ui.ChallengePanel($I("challendge.panel.label"), this.game.challenges);
			challengesPanel.game = this.game;

			var content = challengesPanel.render(tabContainer);
			this.challengesPanel = challengesPanel;
		}

		this.update();
	},

	update: function(){
		this.inherited(arguments);

		if (this.metaphysicsPanel){
			this.metaphysicsPanel.update();
		}
        if (this.challengesPanel){
			this.challengesPanel.update();
		}
	},

	constructor: function(tabName, game){
		this.game = game;
	},

	createTechBtn: function(tech){
		var controller = new com.nuclearunicorn.game.ui.TechButtonController(this.game);
		var btn = new com.nuclearunicorn.game.ui.BuildingResearchBtn({id: tech.name, controller: controller}, this.game);
		return btn;
	}
});
