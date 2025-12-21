ServerEvents.recipes(event => {

    // Pull wafers from refined silicon ingots (press -> slice -> lap)
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "tfmg:silicon_ingot" },
        transitional_item: { id: "dam:raw_silicon_wafer" },
        loops: 1,
        sequence: [
            {
                type: "create:pressing",
                ingredients: [
                    { item: "tfmg:silicon_ingot" }
                ],
                results: [
                    { id: "dam:raw_silicon_wafer" }
                ]
            },
            {
                type: "create:cutting",
                ingredients: [
                    { item: "dam:raw_silicon_wafer" }
                ],
                results: [
                    { id: "dam:raw_silicon_wafer" }
                ],
                processing_time: 100
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:raw_silicon_wafer" },
                    { tag: "create:sandpaper" },
                ],
                keepHeldItem: true,
                results: [
                    { id: "dam:raw_silicon_wafer" }
                ]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:raw_silicon_wafer" },
                    { type: "fluid_stack", amount: 250, fluid: "minecraft:water" }
                ],
                results: [
                    { id: "dam:raw_silicon_wafer" }
                ]
            }
        ],
        results: [
            { id: "dam:raw_silicon_wafer", count: 2 },
            { id: "minecraft:cobblestone", count: 1 }
        ]
    });

    // Rinse + polish 5x -> Incomplete wafer
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:raw_silicon_wafer" },
        transitional_item: { id: "dam:raw_silicon_wafer" },
        loops: 5,
        sequence: [
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:raw_silicon_wafer" },
                    { type: "fluid_stack", amount: 250, fluid: "minecraft:water" }
                ],
                results: [
                    { id: "dam:raw_silicon_wafer" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:raw_silicon_wafer" },
                    { tag: "create:sandpaper" },
                ],
                keepHeldItem: true,
                results: [
                    { id: "dam:raw_silicon_wafer" }
                ]
            }
        ],
        results: [
            { id: "dam:incomplete_silicon_wafer" }
        ]
    });

    // FEOL Part 1: Photolithography (6 steps, 8 loops) - pattern transistor gates
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:incomplete_silicon_wafer" },
        transitional_item: { id: "dam:incomplete_silicon_wafer" },
        loops: 8,
        sequence: [
            // Clean wafer surface
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:incomplete_silicon_wafer" },
                    { type: "fluid_stack", amount: 100, fluid: "minecraft:water" }
                ],
                results: [
                    { id: "dam:incomplete_silicon_wafer" }
                ]
            },
            // Spin-coat photoresist
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:incomplete_silicon_wafer" },
                    { item: "tfmg:plastic_sheet" }
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:incomplete_silicon_wafer" }
                ]
            },
            // UV exposure through mask
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:incomplete_silicon_wafer" },
                    { item: "tfmg:neon_tube" }
                ],
                keepHeldItem: true,
                results: [
                    { id: "dam:incomplete_silicon_wafer" }
                ]
            },
            // Develop and etch pattern
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:incomplete_silicon_wafer" },
                    { type: "fluid_stack", amount: 50, fluid: "tfmg:sulfuric_acid" }
                ],
                results: [
                    { id: "dam:incomplete_silicon_wafer" }
                ]
            },
            // Deposit gate oxide (SiO2)
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:incomplete_silicon_wafer" },
                    { item: "minecraft:quartz" }
                ],
                keepHeldItem: true,
                results: [
                    { id: "dam:incomplete_silicon_wafer" }
                ]
            },
            // Thermal processing
            {
                type: "create:pressing",
                ingredients: [
                    { item: "dam:incomplete_silicon_wafer" }
                ],
                results: [
                    { id: "dam:incomplete_silicon_wafer" }
                ]
            }
        ],
        results: [
            { id: "dam:patterned_wafer" },
            { id: "dam:defective_wafer", chance: 0.08 }
        ],
    })

    // FEOL Part 2: Ion implantation (5 steps, 4 loops) - dope transistor channels
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:patterned_wafer" },
        transitional_item: { id: "dam:patterned_wafer" },
        loops: 4,
        sequence: [
            // Deposit n-type dopant (phosphorus/arsenic proxy)
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:patterned_wafer" },
                    { item: "tfmg:n_semiconductor" }
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:patterned_wafer" }
                ]
            },
            // Ion implant n-type - high energy bombardment
            {
                type: "create_new_age:energising",
                ingredients: [
                    { item: "dam:patterned_wafer" }
                ],
                energy_needed: 2000,
                results: [
                    { id: "dam:patterned_wafer" }
                ]
            },
            // Deposit p-type dopant (boron proxy)
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:patterned_wafer" },
                    { item: "tfmg:p_semiconductor" }
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:patterned_wafer" }
                ]
            },
            // Ion implant p-type - high energy bombardment
            {
                type: "create_new_age:energising",
                ingredients: [
                    { item: "dam:patterned_wafer" }
                ],
                energy_needed: 2000,
                results: [
                    { id: "dam:patterned_wafer" }
                ]
            },
            // Rapid thermal anneal to activate dopants
            {
                type: "create:pressing",
                ingredients: [
                    { item: "dam:patterned_wafer" }
                ],
                results: [
                    { id: "dam:patterned_wafer" }
                ]
            }
        ],
        results: [
            { id: "dam:doped_wafer" },
            { id: "dam:defective_wafer", chance: 0.04 }
        ],
    })

    // FEOL rework loop for failed wafers
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:defective_wafer" },
        transitional_item: { id: "dam:defective_wafer" },
        loops: 4,
        sequence: [
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:defective_wafer" },
                    { type: "fluid_stack", amount: 250, fluid: "minecraft:water" }
                ],
                results: [
                    { id: "dam:defective_wafer" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:defective_wafer" },
                    { tag: "create:sandpaper" }
                ],
                keepHeldItem: true,
                results: [
                    { id: "dam:defective_wafer" }
                ]
            },
            // Re-apply photoresist
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:defective_wafer" },
                    { item: "tfmg:plastic_sheet" }
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:defective_wafer" }
                ]
            },
            // Strip defective layers
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:defective_wafer" },
                    { type: "fluid_stack", amount: 100, fluid: "tfmg:sulfuric_acid" }
                ],
                results: [
                    { id: "dam:defective_wafer" }
                ]
            }
        ],
        results: [
            { id: "dam:patterned_wafer" }
        ]
    });

    // BEOL Damascene metallization: dielectric -> litho -> etch -> barrier -> copper -> CMP (6 steps, 4 loops)
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:doped_wafer" },
        transitional_item: { id: "dam:doped_wafer" },
        loops: 4,
        sequence: [
            // Deposit interlayer dielectric (ILD)
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:doped_wafer" },
                    { item: "create:sturdy_sheet" }
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:doped_wafer" }
                ]
            },
            // Spin-coat photoresist + UV expose interconnect pattern
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:doped_wafer" },
                    { item: "tfmg:plastic_sheet" }
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:doped_wafer" }
                ]
            },
            // Plasma etch trenches and vias
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:doped_wafer" },
                    { type: "fluid_stack", amount: 50, fluid: "tfmg:sulfuric_acid" }
                ],
                results: [
                    { id: "dam:doped_wafer" }
                ]
            },
            // Deposit TaN/Ta barrier layer (prevents Cu diffusion)
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:doped_wafer" },
                    { item: "tfmg:nickel_sheet" }
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:doped_wafer" }
                ]
            },
            // Electroplate copper fill
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:doped_wafer" },
                    { item: "create:copper_sheet" }
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:doped_wafer" }
                ]
            },
            // CMP to planarize excess copper
            {
                type: "create:pressing",
                ingredients: [
                    { item: "dam:doped_wafer" }
                ],
                results: [
                    { id: "dam:doped_wafer" }
                ]
            }
        ],
        results: [
            { id: "dam:metallized_wafer" },
            { id: "dam:defective_metallized_wafer", chance: 0.05 }
        ]
    });

    // BEOL rework loop for metal defects
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:defective_metallized_wafer" },
        transitional_item: { id: "dam:defective_metallized_wafer" },
        loops: 2,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:defective_metallized_wafer" },
                    { item: "create:copper_sheet" }
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:defective_metallized_wafer" }
                ]
            },
            {
                type: "create:pressing",
                ingredients: [
                    { item: "dam:defective_metallized_wafer" }
                ],
                results: [
                    { id: "dam:defective_metallized_wafer" }
                ]
            }
        ],
        results: [
            { id: "dam:metallized_wafer" },
            { id: "dam:defective_metallized_wafer", chance: 0.08 }
        ]
    });

    // Process node-specific wafer fabrication
    // Each smaller node requires more precision (more loops)
    // All sequences limited to 6 steps max for JEI compatibility

    // 90nm Process Node (Legacy - base difficulty)
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:metallized_wafer" },
        transitional_item: { id: "dam:metallized_wafer" },
        loops: 2,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:plastic_sheet" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:neon_tube" }
                ],
                keepHeldItem: true,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { type: "fluid_stack", amount: 50, fluid: "minecraft:water" }
                ],
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "dam:metallized_wafer" }],
                results: [{ id: "dam:metallized_wafer" }]
            }
        ],
        results: [{ id: "dam:wafer_90nm" }]
    });

    // 45nm Process Node (Mature - +1 loop, acid etch)
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:metallized_wafer" },
        transitional_item: { id: "dam:metallized_wafer" },
        loops: 3,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:plastic_sheet" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:neon_tube" }
                ],
                keepHeldItem: true,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { type: "fluid_stack", amount: 50, fluid: "tfmg:sulfuric_acid" }
                ],
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { tag: "create:sandpaper" }
                ],
                keepHeldItem: true,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "dam:metallized_wafer" }],
                results: [{ id: "dam:metallized_wafer" }]
            }
        ],
        results: [{ id: "dam:wafer_45nm" }]
    });

    // 22nm Process Node (Modern - +precision equipment)
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:metallized_wafer" },
        transitional_item: { id: "dam:metallized_wafer" },
        loops: 4,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:plastic_sheet" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:neon_tube" }
                ],
                keepHeldItem: true,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { type: "fluid_stack", amount: 50, fluid: "tfmg:sulfuric_acid" }
                ],
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "create:precision_mechanism" }
                ],
                keepHeldItem: true,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { tag: "create:sandpaper" }
                ],
                keepHeldItem: true,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "dam:metallized_wafer" }],
                results: [{ id: "dam:metallized_wafer" }]
            }
        ],
        results: [{ id: "dam:wafer_22nm" }]
    });

    // 14nm Process Node (FinFET - +energising for ion implant)
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:metallized_wafer" },
        transitional_item: { id: "dam:metallized_wafer" },
        loops: 3,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:plastic_sheet" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:neon_tube" }
                ],
                keepHeldItem: true,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { type: "fluid_stack", amount: 50, fluid: "tfmg:sulfuric_acid" }
                ],
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create_new_age:energising",
                ingredients: [{ item: "dam:metallized_wafer" }],
                energy_needed: 4000,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "create:precision_mechanism" }
                ],
                keepHeldItem: true,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "dam:metallized_wafer" }],
                results: [{ id: "dam:metallized_wafer" }]
            }
        ],
        results: [{ id: "dam:wafer_14nm" }]
    });

    // 7nm Process Node (EUV - nickel barrier layer, higher energy)
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:metallized_wafer" },
        transitional_item: { id: "dam:metallized_wafer" },
        loops: 4,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:plastic_sheet" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:neon_tube" }
                ],
                keepHeldItem: true,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create_new_age:energising",
                ingredients: [{ item: "dam:metallized_wafer" }],
                energy_needed: 6000,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { type: "fluid_stack", amount: 50, fluid: "tfmg:sulfuric_acid" }
                ],
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:nickel_sheet" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "dam:metallized_wafer" }],
                results: [{ id: "dam:metallized_wafer" }]
            }
        ],
        results: [{ id: "dam:wafer_7nm" }]
    });

    // 5nm Process Node (Cutting-edge - higher energy + more acid)
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:metallized_wafer" },
        transitional_item: { id: "dam:metallized_wafer" },
        loops: 4,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:plastic_sheet" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:neon_tube" }
                ],
                keepHeldItem: true,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create_new_age:energising",
                ingredients: [{ item: "dam:metallized_wafer" }],
                energy_needed: 8000,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { type: "fluid_stack", amount: 100, fluid: "tfmg:sulfuric_acid" }
                ],
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:nickel_sheet" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "dam:metallized_wafer" }],
                results: [{ id: "dam:metallized_wafer" }]
            }
        ],
        results: [{ id: "dam:wafer_5nm" }]
    });

    // 3nm Process Node (Bleeding-edge - maximum energy + materials)
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:metallized_wafer" },
        transitional_item: { id: "dam:metallized_wafer" },
        loops: 5,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:plastic_sheet" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:neon_tube" }
                ],
                keepHeldItem: true,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create_new_age:energising",
                ingredients: [{ item: "dam:metallized_wafer" }],
                energy_needed: 10000,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { type: "fluid_stack", amount: 100, fluid: "tfmg:sulfuric_acid" }
                ],
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "tfmg:nickel_sheet" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:metallized_wafer" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "dam:metallized_wafer" }],
                results: [{ id: "dam:metallized_wafer" }]
            }
        ],
        results: [{ id: "dam:wafer_3nm" }]
    });

    // Wafer dicing - cut node-specific wafers into dies
    // Smaller nodes = fewer dies per wafer (yield decreases)

    event.custom({
        type: "create:cutting",
        ingredients: [{ item: "dam:wafer_90nm" }],
        results: [
            { id: "dam:bare_die_90nm", count: 24 },
            { id: "dam:bare_die_90nm", count: 4, chance: 0.2 }
        ],
        processing_time: 200
    });

    event.custom({
        type: "create:cutting",
        ingredients: [{ item: "dam:wafer_45nm" }],
        results: [
            { id: "dam:bare_die_45nm", count: 20 },
            { id: "dam:bare_die_45nm", count: 4, chance: 0.15 }
        ],
        processing_time: 200
    });

    event.custom({
        type: "create:cutting",
        ingredients: [{ item: "dam:wafer_22nm" }],
        results: [
            { id: "dam:bare_die_22nm", count: 16 },
            { id: "dam:bare_die_22nm", count: 4, chance: 0.1 }
        ],
        processing_time: 200
    });

    event.custom({
        type: "create:cutting",
        ingredients: [{ item: "dam:wafer_14nm" }],
        results: [
            { id: "dam:bare_die_14nm", count: 12 },
            { id: "dam:bare_die_14nm", count: 4, chance: 0.1 }
        ],
        processing_time: 200
    });

    event.custom({
        type: "create:cutting",
        ingredients: [{ item: "dam:wafer_7nm" }],
        results: [
            { id: "dam:bare_die_7nm", count: 10 },
            { id: "dam:bare_die_7nm", count: 2, chance: 0.1 }
        ],
        processing_time: 200
    });

    event.custom({
        type: "create:cutting",
        ingredients: [{ item: "dam:wafer_5nm" }],
        results: [
            { id: "dam:bare_die_5nm", count: 8 },
            { id: "dam:bare_die_5nm", count: 2, chance: 0.1 }
        ],
        processing_time: 200
    });

    event.custom({
        type: "create:cutting",
        ingredients: [{ item: "dam:wafer_3nm" }],
        results: [
            { id: "dam:bare_die_3nm", count: 6 },
            { id: "dam:bare_die_3nm", count: 2, chance: 0.1 }
        ],
        processing_time: 200
    });

    // Packaging tier recipes
    // Combine dies with packaging materials to create chips

    // Basic Chip (90nm dies) - Simple QFP package
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:bare_die_90nm" },
        transitional_item: { id: "dam:bare_die_90nm" },
        loops: 1,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_90nm" },
                    { item: "create:brass_sheet" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:bare_die_90nm" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_90nm" },
                    { item: "tfmg:lead_nugget" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:bare_die_90nm" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "dam:bare_die_90nm" }],
                results: [{ id: "dam:bare_die_90nm" }]
            }
        ],
        results: [{ id: "dam:basic_chip" }]
    });

    // Basic Chip (45nm dies) - alternate recipe
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:bare_die_45nm" },
        transitional_item: { id: "dam:bare_die_45nm" },
        loops: 1,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_45nm" },
                    { item: "create:brass_sheet" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:bare_die_45nm" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_45nm" },
                    { item: "tfmg:lead_nugget" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:bare_die_45nm" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "dam:bare_die_45nm" }],
                results: [{ id: "dam:bare_die_45nm" }]
            }
        ],
        results: [{ id: "dam:basic_chip" }]
    });

    // Standard Chip (22nm dies) - BGA package
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:bare_die_22nm" },
        transitional_item: { id: "dam:bare_die_22nm" },
        loops: 1,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_22nm" },
                    { item: "tfmg:circuit_board" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:bare_die_22nm" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_22nm" },
                    { item: "create:copper_sheet" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:bare_die_22nm" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_22nm" },
                    { item: "tfmg:lead_nugget" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:bare_die_22nm" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "dam:bare_die_22nm" }],
                results: [{ id: "dam:bare_die_22nm" }]
            }
        ],
        results: [{ id: "dam:standard_chip" }]
    });

    // Standard Chip (14nm dies) - alternate recipe
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:bare_die_14nm" },
        transitional_item: { id: "dam:bare_die_14nm" },
        loops: 1,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_14nm" },
                    { item: "tfmg:circuit_board" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:bare_die_14nm" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_14nm" },
                    { item: "create:copper_sheet" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:bare_die_14nm" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_14nm" },
                    { item: "tfmg:lead_nugget" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:bare_die_14nm" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "dam:bare_die_14nm" }],
                results: [{ id: "dam:bare_die_14nm" }]
            }
        ],
        results: [{ id: "dam:standard_chip" }]
    });

    // Advanced Chip (7nm dies) - Flip-chip MCM
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:bare_die_7nm" },
        transitional_item: { id: "dam:bare_die_7nm" },
        loops: 2,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_7nm" },
                    { item: "dam:bare_die_7nm" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:bare_die_7nm" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_7nm" },
                    { item: "create:precision_mechanism" }
                ],
                keepHeldItem: true,
                results: [{ id: "dam:bare_die_7nm" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_7nm" },
                    { item: "tfmg:nickel_sheet" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:bare_die_7nm" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_7nm" },
                    { item: "tfmg:circuit_board" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:bare_die_7nm" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "dam:bare_die_7nm" }],
                results: [{ id: "dam:bare_die_7nm" }]
            }
        ],
        results: [{ id: "dam:advanced_chip" }]
    });

    // Advanced Chip (5nm dies) - alternate recipe
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:bare_die_5nm" },
        transitional_item: { id: "dam:bare_die_5nm" },
        loops: 2,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_5nm" },
                    { item: "dam:bare_die_5nm" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:bare_die_5nm" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_5nm" },
                    { item: "create:precision_mechanism" }
                ],
                keepHeldItem: true,
                results: [{ id: "dam:bare_die_5nm" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_5nm" },
                    { item: "tfmg:nickel_sheet" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:bare_die_5nm" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:bare_die_5nm" },
                    { item: "tfmg:circuit_board" }
                ],
                keepHeldItem: false,
                results: [{ id: "dam:bare_die_5nm" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "dam:bare_die_5nm" }],
                results: [{ id: "dam:bare_die_5nm" }]
            }
        ],
        results: [{ id: "dam:advanced_chip" }]
    });

    // Multi-Die Package (3nm dies) - Full chiplet/interposer package
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "DND",
            "SCS",
            "DND"
        ],
        category: "misc",
        show_notification: false,
        accept_mirrored: false,
        key: {
            D: { item: "dam:bare_die_3nm" },
            N: { item: "tfmg:nickel_sheet" },
            S: { item: "create:sturdy_sheet" },
            C: { item: "tfmg:steel_mechanism" }
        },
        result: { id: "dam:multi_die_package", count: 1 }
    });

    // Multi-Die Package (5nm dies) - alternate recipe, less efficient
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "DNNND",
            "NSCNN",
            "DNNND"
        ],
        category: "misc",
        show_notification: false,
        accept_mirrored: false,
        key: {
            D: { item: "dam:bare_die_5nm" },
            N: { item: "tfmg:nickel_sheet" },
            S: { item: "create:sturdy_sheet" },
            C: { item: "tfmg:steel_mechanism" }
        },
        result: { id: "dam:multi_die_package", count: 1 }
    });
});
