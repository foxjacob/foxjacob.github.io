var GLOBAL_GAME_CONFIG = {
    global: {
        // Framerate
        fps: 60,
        // If true, will use requestAnimationFrame HTML5 function instead of timers
        // _Theoretically_ shall produce smoother animation, but needs testing across browsers
        useRAF: true,
        externalSoundURL: "https://googledrive.com/host/0B9PYxO5Fpny6TzUzVzd4dW1GaDQ/jellyquest/sounds/"
    },
    // *** Gameplay
    // Scoring parameteres
    score: {
        // Base score that we give for chains of 1, 2, 3, 4, 5, etc. 
        scoreForChains: [10, 10, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        cookieScore: 250,
        singleShapeScore: 5
    },
    gameplay: {
        minChain: 2,
        minBonusChain: 10,
        largeBonusChain: 105,
        extraMovesBonus: 10,
        bombExplosionRadius: 2,
        explosionFruitDamage: 5,
        initialPowerupDrop: 0,
        maxMoves: 100
    },
    // Describes purchaseable powerups
    powerups: {
        list: [
            { id: "ExtraMoves1", icon: "ExtraMoves1", type: "ExtraMoves", starCost: 5, extraMoves: 1},
            { id: "ExtraMoves2", icon: "ExtraMoves2", type: "ExtraMoves", starCost: 10, extraMoves: 2},
            { id: "ExtraMoves3", icon: "ExtraMoves3", type: "ExtraMoves", starCost: 15, extraMoves: 3},
            { id: "Shuffle1", icon: "Shuffle1", type: "Shuffle1", starCost: 10, shuffles: 1},
            { id: "BombChain", icon: "BombChain", type: "BombChain", starCost: 25, bonusChainReduction: 1},
            { id: "BonusPack1", icon: "BonusPack1", type: "BonusPack", starCost: 15, extraInitialPowerups: 1}
        ],
        style: {
            starCountStyle: { style: "bold 40px verdana, helvetica, sans-serif", color: "#7D3100" },
            starCostStyle: { style: "bold 30px verdana, helvetica, sans-serif", color: "#7D3100" },
            starCostDisabledStyle: { style: "bold 30px verdana, helvetica, sans-serif", color: "#999999" },
            gameShopButtonStarCount: { style: "bold 30px verdana, helvetica, sans-serif", color: "#7D3100" },
            powerupDescription: { style: "bold 20px verdana, helvetica, sans-serif", color: "#81432E" }
        }
    },
    // Field size and visual position
    defaultField: {
        // Number of columns on a game field
        columnCount: 10,
        // Number of rows on a game field
        rowCount: 10,
        // Size and top/left pixel coordinates of the field
        visualRectangle: { x: 5, y: 82, width: 640 - 5 * 2, height: 640 - 5 * 2 }
    },
    // *** Visual attributes
    // Describes backgrounds for our level zones. Expects image files as "forest_clean"/"forest_dirty"
    backgrounds: [
        { fromLevel: 1, name: "land" },
        { fromLevel: 11, name: "ice" },
        { fromLevel: 21, name: "volcano" },
        { fromLevel: 30, name: "boss" }
    ],
    transitions: {
        standard: {
            out: {
                type: "fadeOut",
                duration: 300
            },
            in: {
                type: "fadeIn",
                duration: 400
            }
        }
    },
    // Tweakable animation parameters
    animation: {
        tutorialDelay: 500,

        // *** Delays between game states
        // Delay after line removal is started AND collapse kicks-in. The larger it is, the large is cartoon effect of "no earth under the feet".
        afterMatchCompleteDelay: 50,
        // Delay after collapse of shapes is complete and combo matching/line clearing/powerups kicks-in
        // Negative values are allowed and mean that we will in fact start match3 BEFORE collapse is fully complete.
        afterCollapseCompleteDelay: -300,

        // *** Physics, collapse and gravity
        // Collapse of existing shapes AND drop of new shapes will happen in parallel? 
        // If false, collapse of existing shapes will complete first, then new ones will drop.
        parallelCollapseAndDrop: true,
        // Tiny delay between each new row for refilled/collapsed shapes. Creates effect of bottom-up "wave" fill.
        // Note: if you make it smaller than individualShapeCollapseDelay, shapeDef may overlap as they fall :)
        rowCollapseDelay: 65,
        // Random delay between individual shapeDef collapse in a single row (between 0 and this value)
        individualShapeCollapseDelay: 0,
        // Gravity (in pixels per seconds^2). Gravity of 7000 corresponds to 1 meter-high game field on Earth. :)
        shapeFreeFallGravityConstant: 9000,
        // Each shapeDef jumps up for this period of time before falling down.
        jumpUpTime: 100,
        // Each shapeDef jumps up by this amount of pixels
        jumpUpDistance: 20,
        // Fall down penetration time
        fallDownPenetrationTime: 150,
        // Fall down penetration in pixels
        fallDownPenetrationDistance: 10,
        // Fall down time (in millis)
        fallDownBounceBackTime: 300,

        // *** Player moves
        // Time (milliseconds) for a successful swap
        successfulSwapTime: 250,
        // Time (milliseconds) for rejected swap (one direction, actual time is twice as big)
        rejectedSwapTime: 250,
        blockSwapTime: 200,
        blockSwapRatio: 0.2,

        swapShapeScaleUp: 0.2,
        swapShapeScaleDown: -0.05,

        // *** Combo message
        // Amount of time (millis) to pause the game when the combo message is shown
        comboMessageDelay: 350
    },
    // Animation and display of HUD
    hud: {
        // Count speed of game score (score points per second)
        gameScoreFillSpeed: 700,
        collectiblessProgressFillSpeed: 0.5,
        // Fill speed of game score progress (score points per second)
        gameScoreProgressFillSpeed: 1000,
        minMovesBlink: 5
    },
    // Style of visual and text elements
    style: {
        tutorialText: { style: "bold 22px verdana, helvetica, sans-serif", color: "#404040" },
        fruitCounterText: { style: "bold 20px verdana, helvetica, sans-serif", color: "#5B3A49" }
    },
    info: {
        text: { style: "30px verdana, helvetica, sans-serif", color: "#715139" }
    },
    goal: {
        style: {
            goalLabel: { style: "30px verdana, helvetica, sans-serif", color: "#715139" },
            goalText: { style: "30px verdana, helvetica, sans-serif", color: "#715139" }
        }
    },
    levelComplete: {
        style: {
            label: { style: "30px verdana, helvetica, sans-serif", color: "#715139" },
            level: { style: "30px verdana, helvetica, sans-serif", color: "#715139" },
            levelScore: { style: "30px verdana, helvetica, sans-serif", color: "#715139" },
            hint: { style: "italic  25px verdana, helvetica, sans-serif", color: "#715139" },
            totalScore: { style: "30px verdana, helvetica, sans-serif", color: "#715139" }
        }
    },
    // *** Game sound
    sound: {
        blockVoices: [
            { file: "block_voice1", deferred: true },
            { file: "block_voice2", deferred: true },
            { file: "block_voice3", deferred: true },
            { file: "block_voice4", deferred: true },
            { file: "block_voice5", deferred: true }
        ],
        musicMenu: { file: "musicMenu" }, // Main menu music
        musicGame: { file: "musicGame" }, // Music playing during the game
        moveAccepted: [
            { file: "chainremoved1" }, // Player successfully taped the chain and remove jellies
            { file: "chainremoved2" }, // Player successfully taped the chain and remove jellies
            { file: "chainremoved3" }  // Player successfully taped the chain and remove jellies
        ],
        moveAcceptedLarge: { file: "hugechain" }, // Player successfully taped the chain and remove jellies
        moveRejected: [
            { file: "moverejected1"}, // Player taped the chain, but it cannot be removed (only single element is there)
            { file: "moverejected2"}, // Player taped the chain, but it cannot be removed (only single element is there)
            { file: "moverejected3"} // Player taped the chain, but it cannot be removed (only single element is there)
        ],
        levelComplete: { file: "levelcomplete" }, // Level won!
        gameOver: { file: "gameover" }, // Level lost, out of moves
        buttonPressed: { file: "buttonpressed" }, // Tap the button
        purchaseComplete: { file: "purchasecomplete" }, // Purchased thing in game store
        purchaseFailed: { file: "purchasefailed" }, // Cannot purchase thing in game store, can be the same as moverejected
        powerupgranted: { file: "powerupgranted" }, // Player earned powerup (by removing HUGE chain)
        bonusmoves: { file: "powerupgranted" }, // Bonus moves granted (powerup collected)
        cookieRemoved: { file: "cookieremoved" }, // Bonus moves granted (powerup collected)

        starEarned: [
            { file: "starearned" }, // Player earned star (played on level complete screen AND in the game screen, but we can make it separate sound if needed or mute it in game itself)
            { file: "starearned2" }, // Player earned star (played on level complete screen AND in the game screen, but we can make it separate sound if needed or mute it in game itself)
            { file: "starearned3" } // Player earned star (played on level complete screen AND in the game screen, but we can make it separate sound if needed or mute it in game itself)
        ],

        explosion: { file: "bombexplosion" }, // Explosion!

        shuffle: { file: "shuffle" } // Player activated shuffle powerup
    },
    // SHORTCUT: Duplicate unlocks here (for display) and in powerups (for actual unlock)
    treasures: [
        { name: "BonusBubbles", level: 2, icon: "ExtraBubbleThumb", hintKey: "treasure.ExtraBubbleThumb" },
        { name: "BonusCoins", level: 3, icon: "BonusCoinsThumb", hintKey: "treasure.BonusCoins" },
        { name: "BonusRowColumnClear", level: 5, icon: "WiperPowerupThumb", hintKey: "treasure.BonusRowColumnClear" },
        { name: "BonusBomb", level: 10, icon: "BonusBombThumb", hintKey: "treasure.BonusBomb" }
    ],
    nextMove: {
        firstTimeout: 5000,
        nextTimeout: 1000
    },
    highlight: {
        firstTimeout: 1,
        nextTimeout: 3000
    },
    bonusesForExtraMoves: {
        timeout: 150
    },
    comixes: {
        backgroundColor: "#000000",
        firstFrameDelay: 100,
        fadeInTime: 400,
        frameDelay: 3000,
        entries: {
            intro1: {
                pages: [
                    ["ComixFrame_1_1", "ComixFrame_1_2", "ComixFrame_1_3", "ComixContinue"],
                    ["ComixFrame_2_1", "ComixFrame_2_2", "ComixContinue"]
                ]
            },
            intro3: {
                pages: [
                    ["ComixFrame_3_1", "ComixFrame_3_3", "ComixContinue"]
                ]
            },
            outro: {
                pages: [
                    ["ComixFrame_4_1", "ComixContinue"],
                    ["ComixFrame_4_2", "ComixFrame_4_3", "ComixContinue"]
                ]
            }
        }
    }
}