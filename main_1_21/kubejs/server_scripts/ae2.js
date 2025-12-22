// AE2 Recipe Overhaul - Replace magical materials with TFMG-based semiconductor manufacturing

ServerEvents.recipes(event => {

    // Remove obsolete recipes (meteorite, fluix, certus, inscriber)

    // Remove all meteorite-related recipes
    event.remove({ output: "ae2:meteorite_compass" });
    event.remove({ output: "ae2:mysterious_cube" });
    event.remove({ output: "ae2:not_so_mysterious_cube" });

    // Remove all fluix recipes
    event.remove({ output: "ae2:fluix_crystal" });
    event.remove({ output: "ae2:fluix_dust" });
    event.remove({ output: "ae2:fluix_block" });
    event.remove({ output: "ae2:fluix_pearl" });
    event.remove({ output: "ae2:fluix_axe" });
    event.remove({ output: "ae2:fluix_hoe" });
    event.remove({ output: "ae2:fluix_pickaxe" });
    event.remove({ output: "ae2:fluix_shovel" });
    event.remove({ output: "ae2:fluix_sword" });
    event.remove({ output: "ae2:fluix_upgrade_smithing_template" });

    // Remove all certus quartz recipes
    event.remove({ output: "ae2:certus_quartz_crystal" });
    event.remove({ output: "ae2:charged_certus_quartz_crystal" });
    event.remove({ output: "ae2:certus_quartz_dust" });
    event.remove({ output: "ae2:certus_quartz_axe" });
    event.remove({ output: "ae2:certus_quartz_hoe" });
    event.remove({ output: "ae2:certus_quartz_pickaxe" });
    event.remove({ output: "ae2:certus_quartz_shovel" });
    event.remove({ output: "ae2:certus_quartz_sword" });
    event.remove({ output: "ae2:certus_quartz_cutting_knife" });
    event.remove({ output: "ae2:certus_quartz_wrench" });

    // Remove quartz growth system
    event.remove({ output: "ae2:growth_accelerator" });
    event.remove({ output: "ae2:quartz_fixture" });
    event.remove({ output: "ae2:small_quartz_bud" });
    event.remove({ output: "ae2:medium_quartz_bud" });
    event.remove({ output: "ae2:large_quartz_bud" });
    event.remove({ output: "ae2:quartz_cluster" });
    event.remove({ output: "ae2:damaged_budding_quartz" });
    event.remove({ output: "ae2:chipped_budding_quartz" });
    event.remove({ output: "ae2:flawed_budding_quartz" });
    event.remove({ output: "ae2:flawless_budding_quartz" });

    // Remove inscriber system
    event.remove({ output: "ae2:inscriber" });
    event.remove({ output: "ae2:charger" });
    event.remove({ output: "ae2:silicon_press" });
    event.remove({ output: "ae2:logic_processor_press" });
    event.remove({ output: "ae2:calculation_processor_press" });
    event.remove({ output: "ae2:engineering_processor_press" });
    event.remove({ output: "ae2:name_press" });
    event.remove({ output: "ae2:printed_silicon" });
    event.remove({ output: "ae2:printed_logic_processor" });
    event.remove({ output: "ae2:printed_calculation_processor" });
    event.remove({ output: "ae2:printed_engineering_processor" });
    event.remove({ output: "ae2:silicon" });

    // Remove original processors (we replace with our chip system)
    event.remove({ output: "ae2:logic_processor" });
    event.remove({ output: "ae2:calculation_processor" });
    event.remove({ output: "ae2:engineering_processor" });

    // Remove recipes that use removed items
    event.remove({ input: "ae2:fluix_crystal" });
    event.remove({ input: "ae2:fluix_dust" });
    event.remove({ input: "ae2:certus_quartz_crystal" });
    event.remove({ input: "ae2:charged_certus_quartz_crystal" });
    event.remove({ input: "ae2:certus_quartz_dust" });
    event.remove({ input: "ae2:logic_processor" });
    event.remove({ input: "ae2:calculation_processor" });
    event.remove({ input: "ae2:engineering_processor" });
    event.remove({ input: "ae2:silicon" });
    event.remove({ input: "ae2:printed_silicon" });

    // Remove sky stone recipes (we'll replace with TFMG alternatives)
    event.remove({ output: "ae2:sky_stone_block" });
    event.remove({ output: "ae2:smooth_sky_stone_block" });
    event.remove({ output: "ae2:sky_stone_brick" });
    event.remove({ output: "ae2:sky_stone_small_brick" });
    event.remove({ output: "ae2:sky_stone_chest" });
    event.remove({ output: "ae2:smooth_sky_stone_chest" });
    event.remove({ output: "ae2:sky_dust" });

    // Sky stone alternatives (TFMG materials)

    // Sky stone block from rebar concrete
    event.shaped("ae2:sky_stone_block", [
        "RRR",
        "ROR",
        "RRR"
    ], {
        R: "tfmg:rebar_concrete",
        O: "minecraft:obsidian"
    });

    // Smooth sky stone from concrete
    event.shapeless("ae2:smooth_sky_stone_block", [
        "tfmg:concrete",
        "minecraft:obsidian"
    ]);

    // Sky stone chest
    event.shaped("ae2:sky_stone_chest", [
        "SSS",
        "S S",
        "SSS"
    ], {
        S: "ae2:sky_stone_block"
    });

    // Smooth sky stone chest
    event.shaped("ae2:smooth_sky_stone_chest", [
        "SSS",
        "S S",
        "SSS"
    ], {
        S: "ae2:smooth_sky_stone_block"
    });

    // Base infrastructure (cables, terminals - TFMG only)

    // Glass cable (base cable type)
    event.remove({ output: "ae2:fluix_glass_cable" });
    event.shaped("8x ae2:fluix_glass_cable", [
        "PWP",
        "WGW",
        "PWP"
    ], {
        P: "tfmg:plastic_sheet",
        W: "tfmg:copper_wire",
        G: "#c:glass_blocks"
    });

    // Covered cable
    event.remove({ output: "ae2:fluix_covered_cable" });
    event.shapeless("ae2:fluix_covered_cable", [
        "ae2:fluix_glass_cable",
        "tfmg:plastic_sheet"
    ]);

    // Smart cable
    event.remove({ output: "ae2:fluix_smart_cable" });
    event.shapeless("ae2:fluix_smart_cable", [
        "ae2:fluix_covered_cable",
        "tfmg:circuit_board"
    ]);

    // Dense cable
    event.remove({ output: "ae2:fluix_covered_dense_cable" });
    event.shaped("ae2:fluix_covered_dense_cable", [
        "CC",
        "CC"
    ], {
        C: "ae2:fluix_covered_cable"
    });

    // Smart dense cable
    event.remove({ output: "ae2:fluix_smart_dense_cable" });
    event.shapeless("ae2:fluix_smart_dense_cable", [
        "ae2:fluix_covered_dense_cable",
        "tfmg:circuit_board"
    ]);

    // Cable anchor
    event.remove({ output: "ae2:cable_anchor" });
    event.shaped("4x ae2:cable_anchor", [
        " I ",
        "III"
    ], {
        I: "create:iron_sheet"
    });

    // Quartz fiber (for energy transfer)
    event.remove({ output: "ae2:quartz_fiber" });
    event.shaped("4x ae2:quartz_fiber", [
        "GQG"
    ], {
        G: "tfmg:glass_insulator_segment",
        Q: "minecraft:quartz"
    });

    // Terminal (basic display)
    event.remove({ output: "ae2:terminal" });
    event.shaped("ae2:terminal", [
        "IDI",
        "CBC",
        "III"
    ], {
        I: "create:iron_sheet",
        D: "create:display_board",
        C: "tfmg:circuit_board",
        B: "ae2:fluix_glass_cable"
    });

    // Memory card
    event.remove({ output: "ae2:memory_card" });
    event.shaped("ae2:memory_card", [
        "ICI",
        "III"
    ], {
        I: "create:iron_sheet",
        C: "tfmg:circuit_board"
    });

    // Network tool
    event.remove({ output: "ae2:network_tool" });
    event.shaped("ae2:network_tool", [
        " C ",
        "IWI",
        " I "
    ], {
        I: "create:iron_sheet",
        C: "tfmg:circuit_board",
        W: "tfmg:electricians_wrench"
    });

    // View cell
    event.remove({ output: "ae2:view_cell" });
    event.shaped("ae2:view_cell", [
        "IGI",
        "GCG",
        "III"
    ], {
        I: "create:iron_sheet",
        G: "#c:glass_blocks",
        C: "tfmg:circuit_board"
    });

    // Core components (basic_chip - 90nm/45nm)

    // Annihilation core - uses electron tube
    event.remove({ output: "ae2:annihilation_core" });
    event.shaped("ae2:annihilation_core", [
        " E ",
        "NCN",
        " E "
    ], {
        E: "create:electron_tube",
        N: "minecraft:quartz",
        C: "dam:basic_chip"
    });

    // Formation core - uses electron tube
    event.remove({ output: "ae2:formation_core" });
    event.shaped("ae2:formation_core", [
        " E ",
        "GCG",
        " E "
    ], {
        E: "create:electron_tube",
        G: "minecraft:glowstone_dust",
        C: "dam:basic_chip"
    });

    // Basic card - uses copper circuit
    event.remove({ output: "ae2:basic_card" });
    event.shaped("ae2:basic_card", [
        "IR ",
        "CPI",
        "IR "
    ], {
        I: "create:iron_sheet",
        R: "minecraft:redstone",
        C: "create_new_age:copper_circuit",
        P: "dam:basic_chip"
    });

    // Import bus - uses chute for passive intake
    event.remove({ output: "ae2:import_bus" });
    event.shaped("ae2:import_bus", [
        " A ",
        "ICI",
        " U "
    ], {
        A: "ae2:annihilation_core",
        I: "create:iron_sheet",
        C: "dam:basic_chip",
        U: "create:chute"
    });

    // Export bus - uses smart chute for filtered output
    event.remove({ output: "ae2:export_bus" });
    event.shaped("ae2:export_bus", [
        " F ",
        "ICI",
        " U "
    ], {
        F: "ae2:formation_core",
        I: "create:iron_sheet",
        C: "dam:basic_chip",
        U: "create:smart_chute"
    });

    // Level emitter
    event.remove({ output: "ae2:level_emitter" });
    event.shaped("ae2:level_emitter", [
        " T ",
        "RCR",
        " I "
    ], {
        T: "minecraft:redstone_torch",
        R: "minecraft:comparator",
        C: "dam:basic_chip",
        I: "create:iron_sheet"
    });

    // Energy level emitter
    event.remove({ output: "ae2:energy_level_emitter" });
    event.shaped("ae2:energy_level_emitter", [
        " T ",
        "ECE",
        " I "
    ], {
        T: "minecraft:redstone_torch",
        E: "tfmg:capacitor_item",
        C: "dam:basic_chip",
        I: "create:iron_sheet"
    });

    // Toggle bus
    event.remove({ output: "ae2:toggle_bus" });
    event.shapeless("ae2:toggle_bus", [
        "ae2:fluix_covered_cable",
        "minecraft:lever",
        "dam:basic_chip"
    ]);

    // Inverted toggle bus
    event.remove({ output: "ae2:inverted_toggle_bus" });
    event.shapeless("ae2:inverted_toggle_bus", [
        "ae2:toggle_bus",
        "minecraft:redstone_torch"
    ]);

    // Annihilation plane
    event.remove({ output: "ae2:annihilation_plane" });
    event.shaped("ae2:annihilation_plane", [
        "III",
        "AAC"
    ], {
        I: "create:iron_sheet",
        A: "ae2:annihilation_core",
        C: "dam:basic_chip"
    });

    // Formation plane
    event.remove({ output: "ae2:formation_plane" });
    event.shaped("ae2:formation_plane", [
        "III",
        "FFC"
    ], {
        I: "create:iron_sheet",
        F: "ae2:formation_core",
        C: "dam:basic_chip"
    });

    // Light detector
    event.remove({ output: "ae2:light_detector" });
    event.shaped("ae2:light_detector", [
        " G ",
        "ICI"
    ], {
        G: "#c:glass_blocks",
        I: "create:iron_sheet",
        C: "dam:basic_chip"
    });

    // Condenser - uses basin for collection
    event.remove({ output: "ae2:condenser" });
    event.shaped("ae2:condenser", [
        "ISI",
        "SBS",
        "ISI"
    ], {
        I: "create:iron_sheet",
        S: "tfmg:steel_casing",
        B: "create:basin"
    });

    // Standard components (standard_chip - 22nm/14nm)

    // Advanced card
    event.remove({ output: "ae2:advanced_card" });
    event.shaped("ae2:advanced_card", [
        "BR ",
        "BCI",
        "BR "
    ], {
        B: "create:brass_sheet",
        R: "minecraft:redstone",
        C: "dam:standard_chip",
        I: "minecraft:diamond"
    });

    // Storage bus - uses inventory bridge
    event.remove({ output: "ae2:storage_bus" });
    event.shaped("ae2:storage_bus", [
        " P ",
        "ICI",
        " B "
    ], {
        P: "minecraft:piston",
        I: "create:iron_sheet",
        C: "dam:standard_chip",
        B: "create_connected:inventory_bridge"
    });

    // Interface - uses inventory access port
    event.remove({ output: "ae2:interface" });
    event.shaped("ae2:interface", [
        "ISI",
        "APC",
        "IFI"
    ], {
        I: "create:iron_sheet",
        S: "tfmg:steel_casing",
        A: "ae2:annihilation_core",
        P: "create_connected:inventory_access_port",
        C: "dam:standard_chip",
        F: "ae2:formation_core"
    });

    // Cable interface
    event.remove({ output: "ae2:cable_interface" });
    event.shapeless("ae2:cable_interface", [
        "ae2:interface"
    ]);

    // Pattern provider - uses depot for staging
    event.remove({ output: "ae2:pattern_provider" });
    event.shaped("ae2:pattern_provider", [
        "ISI",
        "DCD",
        "ISI"
    ], {
        I: "create:iron_sheet",
        S: "tfmg:steel_casing",
        D: "create:depot",
        C: "dam:standard_chip"
    });

    // Cable pattern provider
    event.remove({ output: "ae2:cable_pattern_provider" });
    event.shapeless("ae2:cable_pattern_provider", [
        "ae2:pattern_provider"
    ]);

    // ME Drive
    event.remove({ output: "ae2:drive" });
    event.shaped("ae2:drive", [
        "ISI",
        "VCV",
        "ISI"
    ], {
        I: "create:iron_sheet",
        S: "tfmg:steel_casing",
        V: "create:item_vault",
        C: "dam:standard_chip"
    });

    // ME Chest
    event.remove({ output: "ae2:chest" });
    event.shaped("ae2:chest", [
        "IGI",
        "VCV",
        "ISI"
    ], {
        I: "create:iron_sheet",
        G: "#c:glass_blocks",
        V: "create:item_vault",
        C: "dam:standard_chip",
        S: "tfmg:steel_casing"
    });

    // IO Port
    event.remove({ output: "ae2:io_port" });
    event.shaped("ae2:io_port", [
        "IPI",
        "DCD",
        "ISI"
    ], {
        I: "create:iron_sheet",
        P: "create:depot",
        D: "ae2:drive",
        C: "dam:standard_chip",
        S: "tfmg:steel_casing"
    });

    // Cell workbench
    event.remove({ output: "ae2:cell_workbench" });
    event.shaped("ae2:cell_workbench", [
        "BCB",
        "ISI",
        "III"
    ], {
        B: "tfmg:circuit_board",
        C: "dam:standard_chip",
        I: "create:iron_sheet",
        S: "tfmg:steel_casing"
    });

    // Storage monitor
    event.remove({ output: "ae2:storage_monitor" });
    event.shaped("ae2:storage_monitor", [
        "IDI",
        "BCB",
        "III"
    ], {
        I: "create:iron_sheet",
        D: "create:display_board",
        B: "ae2:fluix_glass_cable",
        C: "dam:standard_chip"
    });

    // Conversion monitor
    event.remove({ output: "ae2:conversion_monitor" });
    event.shapeless("ae2:conversion_monitor", [
        "ae2:storage_monitor",
        "ae2:annihilation_core",
        "ae2:formation_core"
    ]);

    // Crafting terminal
    event.remove({ output: "ae2:crafting_terminal" });
    event.shapeless("ae2:crafting_terminal", [
        "ae2:terminal",
        "minecraft:crafting_table",
        "dam:standard_chip"
    ]);

    // Pattern encoding terminal
    event.remove({ output: "ae2:pattern_encoding_terminal" });
    event.shapeless("ae2:pattern_encoding_terminal", [
        "ae2:crafting_terminal",
        "ae2:blank_pattern",
        "dam:standard_chip"
    ]);

    // Pattern access terminal
    event.remove({ output: "ae2:pattern_access_terminal" });
    event.shapeless("ae2:pattern_access_terminal", [
        "ae2:terminal",
        "ae2:pattern_provider",
        "dam:standard_chip"
    ]);

    // Blank pattern
    event.remove({ output: "ae2:blank_pattern" });
    event.shaped("ae2:blank_pattern", [
        "IGI",
        "GCG",
        "III"
    ], {
        I: "create:iron_sheet",
        G: "#c:glass_blocks",
        C: "tfmg:circuit_board"
    });

    // Energy cell - uses generator coil
    event.remove({ output: "ae2:energy_cell" });
    event.shaped("ae2:energy_cell", [
        "ICI",
        "GBG",
        "ICI"
    ], {
        I: "create:iron_sheet",
        C: "tfmg:capacitor_item",
        G: "create_new_age:generator_coil",
        B: "dam:standard_chip"
    });

    // Dense energy cell - uses flywheel + kinetic battery
    event.remove({ output: "ae2:dense_energy_cell" });
    event.shaped("ae2:dense_energy_cell", [
        "ECE",
        "KFK",
        "ECE"
    ], {
        E: "ae2:energy_cell",
        C: "tfmg:capacitor_item",
        K: "create_connected:kinetic_battery",
        F: "create:flywheel"
    });

    // Energy acceptor - uses electrical connector
    event.remove({ output: "ae2:energy_acceptor" });
    event.shaped("ae2:energy_acceptor", [
        "ISI",
        "ECE",
        "ISI"
    ], {
        I: "create:iron_sheet",
        S: "tfmg:steel_casing",
        E: "create_new_age:electrical_connector",
        C: "dam:standard_chip"
    });

    // Cable energy acceptor
    event.remove({ output: "ae2:cable_energy_acceptor" });
    event.shapeless("ae2:cable_energy_acceptor", [
        "ae2:energy_acceptor"
    ]);

    // Vibration chamber
    event.remove({ output: "ae2:vibration_chamber" });
    event.shaped("ae2:vibration_chamber", [
        "ISI",
        "FCF",
        "ISI"
    ], {
        I: "create:iron_sheet",
        S: "tfmg:steel_casing",
        F: "minecraft:furnace",
        C: "dam:standard_chip"
    });

    // Storage components (1k-64k = basic, 256k = standard)

    // 1k cell component (90nm basic)
    event.remove({ output: "ae2:cell_component_1k" });
    event.shaped("ae2:cell_component_1k", [
        "ICI",
        "CPC",
        "ICI"
    ], {
        I: "create:iron_sheet",
        C: "tfmg:circuit_board",
        P: "dam:basic_chip"
    });

    // 4k cell component (90nm basic)
    event.remove({ output: "ae2:cell_component_4k" });
    event.shaped("ae2:cell_component_4k", [
        "ICI",
        "PPP",
        "ICI"
    ], {
        I: "create:iron_sheet",
        C: "ae2:cell_component_1k",
        P: "dam:basic_chip"
    });

    // 16k cell component (45nm basic) - mid-tier adds vault
    event.remove({ output: "ae2:cell_component_16k" });
    event.shaped("ae2:cell_component_16k", [
        "ICI",
        "PVP",
        "ICI"
    ], {
        I: "create:iron_sheet",
        C: "ae2:cell_component_4k",
        P: "dam:basic_chip",
        V: "create:item_vault"
    });

    // 64k cell component (45nm basic) - mid-tier with vault
    event.remove({ output: "ae2:cell_component_64k" });
    event.shaped("ae2:cell_component_64k", [
        "ICI",
        "PVP",
        "ICI"
    ], {
        I: "create:iron_sheet",
        C: "ae2:cell_component_16k",
        P: "dam:basic_chip",
        V: "create:item_vault"
    });

    // 256k cell component (22nm standard) - high-tier with silo
    event.remove({ output: "ae2:cell_component_256k" });
    event.shaped("ae2:cell_component_256k", [
        "ICI",
        "PSP",
        "ICI"
    ], {
        I: "create:iron_sheet",
        C: "ae2:cell_component_64k",
        P: "dam:standard_chip",
        S: "create_connected:item_silo"
    });

    // Item cell housing
    event.remove({ output: "ae2:item_cell_housing" });
    event.shaped("ae2:item_cell_housing", [
        "IGI",
        "GVG",
        "III"
    ], {
        I: "create:iron_sheet",
        G: "#c:glass_blocks",
        V: "create:item_vault"
    });

    // Fluid cell housing
    event.remove({ output: "ae2:fluid_cell_housing" });
    event.shaped("ae2:fluid_cell_housing", [
        "IGI",
        "GTG",
        "ICI"
    ], {
        I: "create:iron_sheet",
        G: "#c:glass_blocks",
        T: "create:fluid_tank",
        C: "create:copper_sheet"
    });

    // Crafting components (same tier mapping as storage)

    // Crafting unit
    event.remove({ output: "ae2:crafting_unit" });
    event.shaped("ae2:crafting_unit", [
        "ISI",
        "BCB",
        "ISI"
    ], {
        I: "create:iron_sheet",
        S: "tfmg:steel_casing",
        B: "tfmg:circuit_board",
        C: "dam:standard_chip"
    });

    // 1k crafting storage (90nm)
    event.remove({ output: "ae2:1k_crafting_storage" });
    event.shapeless("ae2:1k_crafting_storage", [
        "ae2:crafting_unit",
        "ae2:cell_component_1k"
    ]);

    // 4k crafting storage (90nm)
    event.remove({ output: "ae2:4k_crafting_storage" });
    event.shapeless("ae2:4k_crafting_storage", [
        "ae2:crafting_unit",
        "ae2:cell_component_4k"
    ]);

    // 16k crafting storage (45nm)
    event.remove({ output: "ae2:16k_crafting_storage" });
    event.shapeless("ae2:16k_crafting_storage", [
        "ae2:crafting_unit",
        "ae2:cell_component_16k"
    ]);

    // 64k crafting storage (45nm)
    event.remove({ output: "ae2:64k_crafting_storage" });
    event.shapeless("ae2:64k_crafting_storage", [
        "ae2:crafting_unit",
        "ae2:cell_component_64k"
    ]);

    // 256k crafting storage (22nm)
    event.remove({ output: "ae2:256k_crafting_storage" });
    event.shapeless("ae2:256k_crafting_storage", [
        "ae2:crafting_unit",
        "ae2:cell_component_256k"
    ]);

    // Advanced components (advanced_chip - 7nm/5nm)

    // Molecular assembler - uses mechanical arm
    event.remove({ output: "ae2:molecular_assembler" });
    event.shaped("ae2:molecular_assembler", [
        "ISI",
        "ACF",
        "IMI"
    ], {
        I: "create:iron_sheet",
        S: "tfmg:steel_casing",
        A: "ae2:annihilation_core",
        C: "dam:advanced_chip",
        F: "ae2:formation_core",
        M: "create:mechanical_arm"
    });

    // Crafting accelerator (co-processor)
    event.remove({ output: "ae2:crafting_accelerator" });
    event.shaped("ae2:crafting_accelerator", [
        "ISI",
        "ACA",
        "ISI"
    ], {
        I: "create:iron_sheet",
        S: "tfmg:steel_casing",
        A: "dam:advanced_chip",
        C: "ae2:crafting_unit"
    });

    // Crafting monitor
    event.remove({ output: "ae2:crafting_monitor" });
    event.shapeless("ae2:crafting_monitor", [
        "ae2:crafting_unit",
        "ae2:storage_monitor"
    ]);

    // Wireless access point
    event.remove({ output: "ae2:wireless_access_point" });
    event.shaped("ae2:wireless_access_point", [
        " E ",
        "ICI",
        " B "
    ], {
        E: "minecraft:ender_pearl",
        I: "create:iron_sheet",
        C: "dam:advanced_chip",
        B: "ae2:fluix_glass_cable"
    });

    // Wireless receiver
    event.remove({ output: "ae2:wireless_receiver" });
    event.shaped("ae2:wireless_receiver", [
        " E ",
        "ICI",
        " I "
    ], {
        E: "minecraft:ender_pearl",
        I: "create:iron_sheet",
        C: "dam:advanced_chip"
    });

    // Wireless booster
    event.remove({ output: "ae2:wireless_booster" });
    event.shaped("ae2:wireless_booster", [
        "EDE",
        "ICI",
        "III"
    ], {
        E: "minecraft:ender_pearl",
        D: "minecraft:ender_eye",
        I: "create:iron_sheet",
        C: "dam:advanced_chip"
    });

    // Wireless terminal
    event.remove({ output: "ae2:wireless_terminal" });
    event.shapeless("ae2:wireless_terminal", [
        "ae2:terminal",
        "ae2:wireless_receiver",
        "ae2:dense_energy_cell"
    ]);

    // Wireless crafting terminal
    event.remove({ output: "ae2:wireless_crafting_terminal" });
    event.shapeless("ae2:wireless_crafting_terminal", [
        "ae2:crafting_terminal",
        "ae2:wireless_receiver",
        "ae2:dense_energy_cell"
    ]);

    // High-end components (multi_die_package - controllers, quantum, spatial)

    // ME Controller
    event.remove({ output: "ae2:controller" });
    event.shaped("ae2:controller", [
        "SHS",
        "MCM",
        "SHS"
    ], {
        S: "tfmg:steel_casing",
        H: "tfmg:heavy_machinery_casing",
        M: "dam:multi_die_package",
        C: "ae2:fluix_glass_cable"
    });

    // Quantum ring
    event.remove({ output: "ae2:quantum_ring" });
    event.shaped("ae2:quantum_ring", [
        "ISI",
        "ECE",
        "ISI"
    ], {
        I: "create:iron_sheet",
        S: "tfmg:steel_casing",
        E: "minecraft:ender_pearl",
        C: "dam:advanced_chip"
    });

    // Quantum link
    event.remove({ output: "ae2:quantum_link" });
    event.shaped("ae2:quantum_link", [
        "EPE",
        "GMG",
        "EPE"
    ], {
        E: "minecraft:ender_eye",
        P: "minecraft:ender_pearl",
        G: "#c:glass_blocks",
        M: "dam:multi_die_package"
    });

    // Quantum entangled singularity (crafting recipe)
    event.remove({ output: "ae2:quantum_entangled_singularity" });
    event.shaped("2x ae2:quantum_entangled_singularity", [
        " E ",
        "PSP",
        " E "
    ], {
        E: "minecraft:ender_eye",
        P: "minecraft:ender_pearl",
        S: "ae2:singularity"
    });

    // Singularity
    event.remove({ output: "ae2:singularity" });
    event.shaped("ae2:singularity", [
        "MMM",
        "MCM",
        "MMM"
    ], {
        M: "dam:multi_die_package",
        C: "ae2:condenser"
    });

    // Spatial IO port
    event.remove({ output: "ae2:spatial_io_port" });
    event.shaped("ae2:spatial_io_port", [
        "ISI",
        "MCM",
        "IEI"
    ], {
        I: "create:iron_sheet",
        S: "tfmg:steel_casing",
        M: "dam:multi_die_package",
        C: "ae2:fluix_glass_cable",
        E: "minecraft:ender_pearl"
    });

    // Spatial pylon
    event.remove({ output: "ae2:spatial_pylon" });
    event.shaped("ae2:spatial_pylon", [
        "IGI",
        "CMC",
        "IGI"
    ], {
        I: "create:iron_sheet",
        G: "#c:glass_blocks",
        C: "ae2:fluix_glass_cable",
        M: "dam:advanced_chip"
    });

    // Spatial anchor
    event.remove({ output: "ae2:spatial_anchor" });
    event.shaped("ae2:spatial_anchor", [
        "ISI",
        "MCM",
        "ISI"
    ], {
        I: "create:iron_sheet",
        S: "tfmg:steel_casing",
        M: "dam:multi_die_package",
        C: "ae2:fluix_glass_cable"
    });

    // Spatial cell components
    event.remove({ output: "ae2:spatial_cell_component_2" });
    event.shaped("ae2:spatial_cell_component_2", [
        "EPE",
        "GMG",
        "EPE"
    ], {
        E: "minecraft:ender_pearl",
        P: "dam:advanced_chip",
        G: "#c:glass_blocks",
        M: "tfmg:circuit_board"
    });

    event.remove({ output: "ae2:spatial_cell_component_16" });
    event.shaped("ae2:spatial_cell_component_16", [
        "ECE",
        "CMC",
        "ECE"
    ], {
        E: "minecraft:ender_pearl",
        C: "ae2:spatial_cell_component_2",
        M: "dam:advanced_chip"
    });

    event.remove({ output: "ae2:spatial_cell_component_128" });
    event.shaped("ae2:spatial_cell_component_128", [
        "ECE",
        "CMC",
        "ECE"
    ], {
        E: "minecraft:ender_eye",
        C: "ae2:spatial_cell_component_16",
        M: "dam:multi_die_package"
    });

    // P2P Tunnels

    // ME P2P tunnel (base)
    event.remove({ output: "ae2:me_p2p_tunnel" });
    event.shaped("ae2:me_p2p_tunnel", [
        " I ",
        "ECE",
        "III"
    ], {
        I: "create:iron_sheet",
        E: "minecraft:ender_pearl",
        C: "dam:standard_chip"
    });

    // Other P2P tunnels are converted from ME P2P in-world, no recipe changes needed

    // Upgrade cards

    // Capacity card
    event.remove({ output: "ae2:capacity_card" });
    event.shapeless("ae2:capacity_card", [
        "ae2:basic_card",
        "ae2:cell_component_1k",
        "ae2:cell_component_1k"
    ]);

    // Crafting card
    event.remove({ output: "ae2:crafting_card" });
    event.shapeless("ae2:crafting_card", [
        "ae2:basic_card",
        "minecraft:crafting_table"
    ]);

    // Redstone card
    event.remove({ output: "ae2:redstone_card" });
    event.shapeless("ae2:redstone_card", [
        "ae2:basic_card",
        "minecraft:redstone_torch"
    ]);

    // Fuzzy card
    event.remove({ output: "ae2:fuzzy_card" });
    event.shapeless("ae2:fuzzy_card", [
        "ae2:advanced_card",
        "minecraft:comparator"
    ]);

    // Inverter card
    event.remove({ output: "ae2:inverter_card" });
    event.shapeless("ae2:inverter_card", [
        "ae2:basic_card",
        "minecraft:redstone_torch"
    ]);

    // Speed card
    event.remove({ output: "ae2:speed_card" });
    event.shapeless("ae2:speed_card", [
        "ae2:advanced_card",
        "dam:advanced_chip"
    ]);

    // Energy card
    event.remove({ output: "ae2:energy_card" });
    event.shapeless("ae2:energy_card", [
        "ae2:advanced_card",
        "tfmg:capacitor_item"
    ]);

    // Void card
    event.remove({ output: "ae2:void_card" });
    event.shapeless("ae2:void_card", [
        "ae2:basic_card",
        "minecraft:obsidian"
    ]);

    // Equal distribution card
    event.remove({ output: "ae2:equal_distribution_card" });
    event.shapeless("ae2:equal_distribution_card", [
        "ae2:advanced_card",
        "minecraft:comparator",
        "minecraft:comparator"
    ]);

    // Tools

    // Nether quartz tools (keep but simplify)
    event.remove({ output: "ae2:nether_quartz_axe" });
    event.remove({ output: "ae2:nether_quartz_hoe" });
    event.remove({ output: "ae2:nether_quartz_pickaxe" });
    event.remove({ output: "ae2:nether_quartz_shovel" });
    event.remove({ output: "ae2:nether_quartz_sword" });
    event.remove({ output: "ae2:nether_quartz_cutting_knife" });
    event.remove({ output: "ae2:nether_quartz_wrench" });

    // Nether quartz wrench
    event.shaped("ae2:nether_quartz_wrench", [
        "Q Q",
        " I ",
        " Q "
    ], {
        Q: "minecraft:quartz",
        I: "create:iron_sheet"
    });

    // Entropy manipulator
    event.remove({ output: "ae2:entropy_manipulator" });
    event.shaped("ae2:entropy_manipulator", [
        " EC",
        " IE",
        "I  "
    ], {
        E: "ae2:energy_cell",
        C: "dam:advanced_chip",
        I: "create:iron_sheet"
    });

    // Charged staff
    event.remove({ output: "ae2:charged_staff" });
    event.shaped("ae2:charged_staff", [
        "  C",
        " I ",
        "E  "
    ], {
        C: "dam:standard_chip",
        I: "create:iron_sheet",
        E: "ae2:energy_cell"
    });

    // Color applicator
    event.remove({ output: "ae2:color_applicator" });
    event.shaped("ae2:color_applicator", [
        " IC",
        " BI",
        "E  "
    ], {
        I: "create:iron_sheet",
        C: "dam:standard_chip",
        B: "tfmg:circuit_board",
        E: "ae2:energy_cell"
    });

    // Matter cannon
    event.remove({ output: "ae2:matter_cannon" });
    event.shaped("ae2:matter_cannon", [
        "ISM",
        " CC",
        "  E"
    ], {
        I: "create:iron_sheet",
        S: "tfmg:steel_casing",
        M: "dam:multi_die_package",
        C: "dam:advanced_chip",
        E: "ae2:dense_energy_cell"
    });
});
