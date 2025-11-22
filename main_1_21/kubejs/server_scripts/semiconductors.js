ServerEvents.recipes(event => {
    // Only create semiconductor recipes if TFMG items don't exist
    if (!Item.exists('tfmg:p_semiconductor')) {
        
        // Sulfuric Acid - create from sulfur (gunpowder) and water
        event.custom({
            type: "create:mixing",
            ingredients: [
                { item: "minecraft:gunpowder", count: 2 },
                { type: "fluid_stack", amount: 250, fluid: "minecraft:water" }
            ],
            results: [
                { type: "fluid_stack", amount: 250, fluid: "dam:sulfuric_acid" }
            ],
            heat_requirement: "heated"
        });
        
        // P-Type Semiconductor (doped with boron/acceptor atoms)
        // Using redstone as a doping agent proxy
        event.custom({
            type: "create:mixing",
            ingredients: [
                { item: "minecraft:quartz" },
                { item: "minecraft:redstone" },
                { type: "fluid_stack", amount: 100, fluid: "minecraft:lava" }
            ],
            results: [
                { id: "dam:p_semiconductor", count: 2 }
            ],
            heat_requirement: "heated"
        });

        // N-Type Semiconductor (doped with phosphorus/donor atoms)
        // Using glowstone as a doping agent proxy
        event.custom({
            type: "create:mixing",
            ingredients: [
                { item: "minecraft:quartz" },
                { item: "minecraft:glowstone_dust" },
                { type: "fluid_stack", amount: 100, fluid: "minecraft:lava" }
            ],
            results: [
                { id: "dam:n_semiconductor", count: 2 }
            ],
            heat_requirement: "heated"
        });

        // Alternative recipe using crafting (simpler, less efficient)
        event.shaped('dam:p_semiconductor', [
            ' R ',
            'RQR',
            ' R '
        ], {
            Q: 'minecraft:quartz',
            R: 'minecraft:redstone'
        });

        event.shaped('dam:n_semiconductor', [
            ' G ',
            'GQG',
            ' G '
        ], {
            Q: 'minecraft:quartz',
            G: 'minecraft:glowstone_dust'
        });

        // Resistor - made from carbon (coal) and copper
        event.shaped('dam:resistor', [
            'CNC',
            'C C',
            'CNC'
        ], {
            C: 'minecraft:coal',
            N: 'create:copper_nugget'
        });

        // Transistor - requires semiconductors
        event.custom({
            type: "create:sequenced_assembly",
            ingredient: { item: "dam:p_semiconductor" },
            transitional_item: { id: "dam:p_semiconductor" },
            loops: 1,
            sequence: [
                {
                    type: "create:deploying",
                    ingredients: [
                        { item: "dam:p_semiconductor" },
                        { item: "dam:n_semiconductor" }
                    ],
                    results: [
                        { id: "dam:p_semiconductor" }
                    ]
                },
                {
                    type: "create:deploying",
                    ingredients: [
                        { item: "dam:p_semiconductor" },
                        { item: "create:copper_nugget" }
                    ],
                    results: [
                        { id: "dam:p_semiconductor" }
                    ]
                }
            ],
            results: [
                { id: "dam:transistor" }
            ]
        });

        // Circuit Board - basic PCB made from copper sheets and plastic proxy
        event.custom({
            type: "create:sequenced_assembly",
            ingredient: { item: "create:copper_sheet" },
            transitional_item: { id: "create:copper_sheet" },
            loops: 2,
            sequence: [
                {
                    type: "create:deploying",
                    ingredients: [
                        { item: "create:copper_sheet" },
                        { item: "minecraft:green_dye" }
                    ],
                    results: [
                        { id: "create:copper_sheet" }
                    ]
                },
                {
                    type: "create:pressing",
                    ingredients: [
                        { item: "create:copper_sheet" }
                    ],
                    results: [
                        { id: "create:copper_sheet" }
                    ]
                }
            ],
            results: [
                { id: "dam:circuit_board" }
            ]
        });
    }
});
