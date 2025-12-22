// MEGA Cells Recipe Overhaul - Full node progression for 1M-256M storage

ServerEvents.recipes(event => {

    // Remove obsolete items (accumulation processor, sky alloys)

    // Remove accumulation processor system
    event.remove({ output: "megacells:accumulation_processor" });
    event.remove({ output: "megacells:accumulation_processor_press" });
    event.remove({ output: "megacells:printed_accumulation_processor" });
    event.remove({ input: "megacells:accumulation_processor" });

    // Remove sky alloy recipes (we replace with TFMG)
    event.remove({ output: "megacells:sky_bronze_ingot" });
    event.remove({ output: "megacells:sky_bronze_block" });
    event.remove({ output: "megacells:sky_steel_ingot" });
    event.remove({ output: "megacells:sky_steel_block" });
    event.remove({ output: "megacells:sky_osmium_ingot" });
    event.remove({ output: "megacells:sky_osmium_block" });
    event.remove({ input: "megacells:sky_bronze_ingot" });
    event.remove({ input: "megacells:sky_steel_ingot" });
    event.remove({ input: "megacells:sky_osmium_ingot" });

    // Sky alloy replacements (TFMG materials)

    // Sky bronze -> Constantan (copper-nickel alloy)
    event.shaped("megacells:sky_bronze_ingot", [
        "CCC",
        "COC",
        "CCC"
    ], {
        C: "tfmg:constantan_ingot",
        O: "minecraft:obsidian"
    });

    event.shaped("megacells:sky_bronze_block", [
        "III",
        "III",
        "III"
    ], {
        I: "megacells:sky_bronze_ingot"
    });

    // Sky steel -> Steel
    event.shaped("megacells:sky_steel_ingot", [
        "SSS",
        "SOS",
        "SSS"
    ], {
        S: "tfmg:steel_ingot",
        O: "minecraft:obsidian"
    });

    event.shaped("megacells:sky_steel_block", [
        "III",
        "III",
        "III"
    ], {
        I: "megacells:sky_steel_ingot"
    });

    // Sky osmium -> Nickel
    event.shaped("megacells:sky_osmium_ingot", [
        "NNN",
        "NON",
        "NNN"
    ], {
        N: "tfmg:nickel_ingot",
        O: "minecraft:obsidian"
    });

    event.shaped("megacells:sky_osmium_block", [
        "III",
        "III",
        "III"
    ], {
        I: "megacells:sky_osmium_ingot"
    });

    // Mega cell components (1M=14nm, 4M=7nm, 16M=5nm, 64M/256M=3nm)

    // 1M cell component (14nm - Standard chip) - uses item silo
    event.remove({ output: "megacells:cell_component_1m" });
    event.shaped("megacells:cell_component_1m", [
        "ICI",
        "PSP",
        "ICI"
    ], {
        I: "megacells:sky_bronze_ingot",
        C: "ae2:cell_component_256k",
        P: "dam:standard_chip",
        S: "create_connected:item_silo"
    });

    // 4M cell component (7nm - Standard chip) - uses item silo
    event.remove({ output: "megacells:cell_component_4m" });
    event.shaped("megacells:cell_component_4m", [
        "SCS",
        "PIP",
        "SCS"
    ], {
        S: "megacells:sky_steel_ingot",
        C: "megacells:cell_component_1m",
        P: "dam:standard_chip",
        I: "create_connected:item_silo"
    });

    // 16M cell component (5nm - Advanced chip)
    event.remove({ output: "megacells:cell_component_16m" });
    event.shaped("megacells:cell_component_16m", [
        "SCS",
        "PAP",
        "SCS"
    ], {
        S: "megacells:sky_steel_ingot",
        C: "megacells:cell_component_4m",
        P: "dam:standard_chip",
        A: "dam:advanced_chip"
    });

    // 64M cell component (3nm - Advanced chip)
    event.remove({ output: "megacells:cell_component_64m" });
    event.shaped("megacells:cell_component_64m", [
        "OCO",
        "AAA",
        "OCO"
    ], {
        O: "megacells:sky_osmium_ingot",
        C: "megacells:cell_component_16m",
        A: "dam:advanced_chip"
    });

    // 256M cell component (3nm - Multi-die package)
    event.remove({ output: "megacells:cell_component_256m" });
    event.shaped("megacells:cell_component_256m", [
        "OCO",
        "AMA",
        "OCO"
    ], {
        O: "megacells:sky_osmium_ingot",
        C: "megacells:cell_component_64m",
        A: "dam:advanced_chip",
        M: "dam:multi_die_package"
    });

    // Mega cell housings

    // Mega item cell housing - uses item silo
    event.remove({ output: "megacells:mega_item_cell_housing" });
    event.shaped("megacells:mega_item_cell_housing", [
        "SGS",
        "GIG",
        "SSS"
    ], {
        S: "megacells:sky_steel_ingot",
        G: "#c:glass_blocks",
        I: "create_connected:item_silo"
    });

    // Mega fluid cell housing - uses fluid vessel
    event.remove({ output: "megacells:mega_fluid_cell_housing" });
    event.shaped("megacells:mega_fluid_cell_housing", [
        "SGS",
        "GVG",
        "SCS"
    ], {
        S: "megacells:sky_steel_ingot",
        G: "#c:glass_blocks",
        V: "create_connected:fluid_vessel",
        C: "create:copper_sheet"
    });

    // Mega chemical cell housing (if Mekanism is present)
    event.remove({ output: "megacells:mega_chemical_cell_housing" });
    event.shaped("megacells:mega_chemical_cell_housing", [
        "OGO",
        "G G",
        "OOO"
    ], {
        O: "megacells:sky_osmium_ingot",
        G: "#c:glass_blocks"
    });

    // Mega experience cell housing
    event.remove({ output: "megacells:mega_experience_cell_housing" });
    event.shaped("megacells:mega_experience_cell_housing", [
        "SGS",
        "GEG",
        "SSS"
    ], {
        S: "megacells:sky_steel_ingot",
        G: "#c:glass_blocks",
        E: "minecraft:experience_bottle"
    });

    // Mega mana cell housing (if Botania is present)
    event.remove({ output: "megacells:mega_mana_cell_housing" });
    event.shaped("megacells:mega_mana_cell_housing", [
        "BGS",
        "G G",
        "SGB"
    ], {
        B: "megacells:sky_bronze_ingot",
        S: "megacells:sky_steel_ingot",
        G: "#c:glass_blocks"
    });

    // Mega source cell housing (if Ars Nouveau is present)
    event.remove({ output: "megacells:mega_source_cell_housing" });
    event.shaped("megacells:mega_source_cell_housing", [
        "BGS",
        "GAG",
        "SGB"
    ], {
        B: "megacells:sky_bronze_ingot",
        S: "megacells:sky_steel_ingot",
        G: "#c:glass_blocks",
        A: "minecraft:amethyst_shard"
    });

    // Mega crafting components (same tier as storage)

    // Mega crafting unit
    event.remove({ output: "megacells:mega_crafting_unit" });
    event.shaped("megacells:mega_crafting_unit", [
        "SHS",
        "BCB",
        "SHS"
    ], {
        S: "megacells:sky_steel_ingot",
        H: "tfmg:heavy_machinery_casing",
        B: "tfmg:circuit_board",
        C: "dam:advanced_chip"
    });

    // 1M crafting storage
    event.remove({ output: "megacells:1m_crafting_storage" });
    event.shapeless("megacells:1m_crafting_storage", [
        "megacells:mega_crafting_unit",
        "megacells:cell_component_1m"
    ]);

    // 4M crafting storage
    event.remove({ output: "megacells:4m_crafting_storage" });
    event.shapeless("megacells:4m_crafting_storage", [
        "megacells:mega_crafting_unit",
        "megacells:cell_component_4m"
    ]);

    // 16M crafting storage
    event.remove({ output: "megacells:16m_crafting_storage" });
    event.shapeless("megacells:16m_crafting_storage", [
        "megacells:mega_crafting_unit",
        "megacells:cell_component_16m"
    ]);

    // 64M crafting storage
    event.remove({ output: "megacells:64m_crafting_storage" });
    event.shapeless("megacells:64m_crafting_storage", [
        "megacells:mega_crafting_unit",
        "megacells:cell_component_64m"
    ]);

    // 256M crafting storage
    event.remove({ output: "megacells:256m_crafting_storage" });
    event.shapeless("megacells:256m_crafting_storage", [
        "megacells:mega_crafting_unit",
        "megacells:cell_component_256m"
    ]);

    // Mega crafting accelerator (requires multi-die)
    event.remove({ output: "megacells:mega_crafting_accelerator" });
    event.shaped("megacells:mega_crafting_accelerator", [
        "SHS",
        "MCM",
        "SHS"
    ], {
        S: "megacells:sky_steel_ingot",
        H: "tfmg:heavy_machinery_casing",
        M: "dam:multi_die_package",
        C: "megacells:mega_crafting_unit"
    });

    // Mega crafting monitor
    event.remove({ output: "megacells:mega_crafting_monitor" });
    event.shapeless("megacells:mega_crafting_monitor", [
        "megacells:mega_crafting_unit",
        "ae2:storage_monitor"
    ]);

    // Mega interfaces and pattern providers

    // Mega interface (7nm advanced) - uses inventory access port
    event.remove({ output: "megacells:mega_interface" });
    event.shaped("megacells:mega_interface", [
        "SHS",
        "API",
        "SBS"
    ], {
        S: "megacells:sky_steel_ingot",
        H: "tfmg:heavy_machinery_casing",
        A: "ae2:annihilation_core",
        P: "create_connected:inventory_access_port",
        I: "ae2:interface",
        B: "dam:advanced_chip"
    });

    // Cable mega interface
    event.remove({ output: "megacells:cable_mega_interface" });
    event.shapeless("megacells:cable_mega_interface", [
        "megacells:mega_interface"
    ]);

    // Mega pattern provider (7nm advanced) - uses depot
    event.remove({ output: "megacells:mega_pattern_provider" });
    event.shaped("megacells:mega_pattern_provider", [
        "SHS",
        "DPD",
        "SAS"
    ], {
        S: "megacells:sky_steel_ingot",
        H: "tfmg:heavy_machinery_casing",
        D: "create:depot",
        P: "ae2:pattern_provider",
        A: "dam:advanced_chip"
    });

    // Cable mega pattern provider
    event.remove({ output: "megacells:cable_mega_pattern_provider" });
    event.shapeless("megacells:cable_mega_pattern_provider", [
        "megacells:mega_pattern_provider"
    ]);

    // Mega energy cell - uses flywheel + kinetic battery

    event.remove({ output: "megacells:mega_energy_cell" });
    event.shaped("megacells:mega_energy_cell", [
        "SKS",
        "EFE",
        "SKS"
    ], {
        S: "megacells:sky_steel_ingot",
        K: "create_connected:kinetic_battery",
        E: "ae2:dense_energy_cell",
        F: "create:flywheel"
    });

    // Special components

    // Cell dock (14nm - standard chip)
    event.remove({ output: "megacells:cell_dock" });
    event.shaped("megacells:cell_dock", [
        "SIS",
        "BCB",
        "SSS"
    ], {
        S: "megacells:sky_steel_ingot",
        I: "create:iron_sheet",
        B: "ae2:fluix_glass_cable",
        C: "dam:standard_chip"
    });

    // Bulk cell component (5nm - advanced chip for compression logic)
    event.remove({ output: "megacells:bulk_cell_component" });
    event.shaped("megacells:bulk_cell_component", [
        "OAO",
        "ACA",
        "OAO"
    ], {
        O: "megacells:sky_osmium_ingot",
        A: "dam:advanced_chip",
        C: "ae2:condenser"
    });

    // Compression card (7nm - advanced chip)
    event.remove({ output: "megacells:compression_card" });
    event.shaped("megacells:compression_card", [
        "SAR",
        "SCI",
        "SAR"
    ], {
        S: "megacells:sky_steel_ingot",
        A: "dam:advanced_chip",
        R: "minecraft:redstone",
        C: "ae2:advanced_card",
        I: "minecraft:piston"
    });

    // Decompression module (5nm - multi-die) - uses mechanical pump
    event.remove({ output: "megacells:decompression_module" });
    event.shaped("megacells:decompression_module", [
        "SPS",
        "MCM",
        "SPS"
    ], {
        S: "megacells:sky_steel_ingot",
        P: "create:mechanical_pump",
        M: "dam:multi_die_package",
        C: "megacells:compression_card"
    });

    // Greater energy card
    event.remove({ output: "megacells:greater_energy_card" });
    event.shapeless("megacells:greater_energy_card", [
        "ae2:energy_card",
        "megacells:mega_energy_cell",
        "dam:advanced_chip"
    ]);

    // Portable cell workbench
    event.remove({ output: "megacells:portable_cell_workbench" });
    event.shaped("megacells:portable_cell_workbench", [
        "SCS",
        "BWB",
        "SSS"
    ], {
        S: "megacells:sky_steel_ingot",
        C: "dam:standard_chip",
        B: "tfmg:circuit_board",
        W: "ae2:cell_workbench"
    });

    // Radioactive components

    // Radioactive cell component
    event.remove({ output: "megacells:radioactive_cell_component" });
    event.shaped("megacells:radioactive_cell_component", [
        "NLN",
        "AMA",
        "NLN"
    ], {
        N: "tfmg:nickel_ingot",
        L: "tfmg:lead_ingot",
        A: "dam:advanced_chip",
        M: "dam:multi_die_package"
    });
});

