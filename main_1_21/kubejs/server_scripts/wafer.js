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

    // FEOL loop: Clean -> Oxidize -> Photoresist -> UV Expose -> Etch -> N-Dope -> P-Dope -> Anneal (8x)
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
            // Thermal oxidation - grow SiO2 gate oxide
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
            // Align photomask
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:incomplete_silicon_wafer" },
                    { item: "minecraft:glass_pane" }
                ],
                keepHeldItem: true,
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
            // Develop and etch exposed oxide (HF proxy)
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:incomplete_silicon_wafer" },
                    { type: "fluid_stack", amount: 50, fluid: "tfmg:hydrogen" }
                ],
                results: [
                    { id: "dam:incomplete_silicon_wafer" }
                ]
            },
            // Strip photoresist with acid
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
            // Ion implant n-type dopant (phosphorus/arsenic proxy)
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:incomplete_silicon_wafer" },
                    { item: "tfmg:n_semiconductor" }
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:incomplete_silicon_wafer" }
                ]
            },
            // Ion implant p-type dopant (boron proxy)
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:incomplete_silicon_wafer" },
                    { item: "tfmg:p_semiconductor" }
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:incomplete_silicon_wafer" }
                ]
            },
            // Rapid thermal anneal to activate dopants
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
            { id: "dam:defective_wafer", chance: 0.12 }
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

    // BEOL Damascene metallization: dielectric -> litho -> etch -> barrier -> copper -> CMP (4x for 4 metal layers)
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:patterned_wafer" },
        transitional_item: { id: "dam:patterned_wafer" },
        loops: 4,
        sequence: [
            // Deposit interlayer dielectric (ILD)
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:patterned_wafer" },
                    { item: "create:sturdy_sheet" }
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:patterned_wafer" }
                ]
            },
            // Spin-coat photoresist for via/trench patterning
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:patterned_wafer" },
                    { item: "tfmg:plastic_sheet" }
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:patterned_wafer" }
                ]
            },
            // UV expose interconnect pattern
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:patterned_wafer" },
                    { item: "tfmg:neon_tube" }
                ],
                keepHeldItem: true,
                results: [
                    { id: "dam:patterned_wafer" }
                ]
            },
            // Plasma etch trenches and vias
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:patterned_wafer" },
                    { type: "fluid_stack", amount: 50, fluid: "tfmg:sulfuric_acid" }
                ],
                results: [
                    { id: "dam:patterned_wafer" }
                ]
            },
            // Deposit TaN/Ta barrier layer (prevents Cu diffusion)
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:patterned_wafer" },
                    { item: "tfmg:nickel_sheet" }
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:patterned_wafer" }
                ]
            },
            // Electroplate copper fill
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:patterned_wafer" },
                    { item: "create:copper_sheet" }
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:patterned_wafer" }
                ]
            },
            // CMP to planarize excess copper
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
            { id: "dam:metallized_wafer" },
            { id: "dam:defective_metallized_wafer" }
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

    // Passivation + electrical test -> finished wafer
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:metallized_wafer" },
        transitional_item: { id: "dam:metallized_wafer" },
        loops: 2,
        sequence: [
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { type: "fluid_stack", amount: 50, fluid: "minecraft:water" }
                ],
                results: [
                    { id: "dam:metallized_wafer" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:metallized_wafer" },
                    { item: "create:precision_mechanism" }
                ],
                keepHeldItem: true,
                results: [
                    { id: "dam:metallized_wafer" }
                ]
            }
        ],
        results: [
            { id: "dam:silicon_wafer" }
        ]
    });

    // Cut the completed wafer
    event.custom({
        type: "create:cutting",
        ingredients: [
            {
                item: "dam:silicon_wafer",
            }
        ],
        results: [
            { id: "dam:bare_die", count: 16 },
            { id: "dam:bare_die", count: 4, chance: 0.1 },
        ],
        processing_time: 200
    });

    // Create microprocessor
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "BEB",
            "PRP",
            "BMB",
        ],
        category: "misc",
        show_notification: false,
        accept_mirrored: false,
        key: {
            B: { item: "create:brass_sheet" },
            E: { item: "tfmg:resistor" },
            R: { item: "tfmg:transistor_item" },
            P: { item: "dam:bare_die" },
            M: { item: "tfmg:circuit_board" },
        },
        result: {
            count: 1,
            id: "dam:microprocessor"
        }
    });

    // Regular processor
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "dam:microprocessor" },
        transitional_item: { id: "dam:microprocessor" },
        loops: 2,
        sequence: [
            {
                type: "create:filling",
                ingredients: [
                    { item: "dam:microprocessor" },
                    { type: "fluid_stack", amount: 50, fluid: "minecraft:water" }
                ],
                results: [
                    { id: "dam:microprocessor" }
                ]
            },
            // add chiplet
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:microprocessor" },
                    { item: "dam:bare_die" },
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:microprocessor" }
                ]
            },
            // solder bump interconnect (flip-chip)
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:microprocessor" },
                    { item: "tfmg:lead_nugget" },
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:microprocessor" }
                ]
            },
            // copper interconnect
            {
                type: "create:deploying",
                ingredients: [
                    { item: "dam:microprocessor" },
                    { item: "create:copper_sheet" },
                ],
                keepHeldItem: false,
                results: [
                    { id: "dam:microprocessor" }
                ]
            },
            {
                type: "create:pressing",
                ingredients: [
                    { item: "dam:microprocessor" }
                ],
                results: [{
                    id: "dam:microprocessor"
                }]
            }
        ],
        results: [
            { id: "dam:processor" }
        ]
    });

    event.custom({
        type: "create:mechanical_crafting",
        accept_mirrored: false,
        category: "misc",
        show_notification: false,
        pattern: [
            "SS SS",
            "SPMPS",
            "SBXBS",
            "SPXPS",
            "SHCHS"
        ],
        key: {
            S: { item: "create:sturdy_sheet" },        // rigid substrate (Create item)
            P: { item: "tfmg:circuit_board" },         // multilayer PCB proxy
            M: { item: "tfmg:transistor_item" },       // extra logic
            B: { item: "create:brass_sheet" },         // package frame / IHS frame
            X: { item: "dam:processor" },              // T2 core
            H: { item: "minecraft:iron_block" },       // heat spreader proxy
            C: { item: "create:precision_mechanism" }  // fine assembly / controller
        },
        result: { id: "dam:cpu", count: 1 }
    });
});
