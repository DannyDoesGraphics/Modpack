// ExtendedAE Recipe Overhaul - High-end 5nm-3nm chips

ServerEvents.recipes(event => {

    // Remove obsolete items (concurrent processor system)

    event.remove({ output: "extendedae:concurrent_processor" });
    event.remove({ output: "extendedae:concurrent_processor_press" });
    event.remove({ output: "extendedae:concurrent_processor_print" });
    event.remove({ input: "extendedae:concurrent_processor" });

    // Remove entro crystal system (we use TFMG instead)
    event.remove({ output: "extendedae:entro_crystal" });
    event.remove({ output: "extendedae:entro_dust" });
    event.remove({ output: "extendedae:entro_ingot" });
    event.remove({ output: "extendedae:entro_block" });
    event.remove({ output: "extendedae:entro_seed" });
    event.remove({ output: "extendedae:entro_shard" });
    event.remove({ output: "extendedae:quartz_blend" });
    event.remove({ output: "extendedae:silicon_block" });
    event.remove({ input: "extendedae:entro_crystal" });
    event.remove({ input: "extendedae:entro_ingot" });
    event.remove({ input: "extendedae:quartz_blend" });

    // Remove entro budding blocks (growth system)
    event.remove({ output: "extendedae:entro_budding_hardly" });
    event.remove({ output: "extendedae:entro_budding_half" });
    event.remove({ output: "extendedae:entro_budding_mostly" });
    event.remove({ output: "extendedae:entro_budding_fully" });
    event.remove({ output: "extendedae:entro_cluster_small" });
    event.remove({ output: "extendedae:entro_cluster_medium" });
    event.remove({ output: "extendedae:entro_cluster_large" });
    event.remove({ output: "extendedae:entro_cluster" });

    // Entro material replacements (TFMG materials)

    // Entro ingot from aluminum + nickel alloy
    event.shaped("extendedae:entro_ingot", [
        "ANA",
        "NON",
        "ANA"
    ], {
        A: "tfmg:aluminum_ingot",
        N: "tfmg:nickel_ingot",
        O: "minecraft:obsidian"
    });

    event.shaped("extendedae:entro_block", [
        "III",
        "III",
        "III"
    ], {
        I: "extendedae:entro_ingot"
    });

    // Machine frame (base component for extended machines)

    event.remove({ output: "extendedae:machine_frame" });
    event.shaped("extendedae:machine_frame", [
        "SES",
        "EHE",
        "SES"
    ], {
        S: "tfmg:steel_casing",
        E: "extendedae:entro_ingot",
        H: "tfmg:heavy_machinery_casing"
    });

    // Extended drives and storage (5nm advanced chips)

    // Ex drive (5nm - advanced) - uses item silo
    event.remove({ output: "extendedae:ex_drive" });
    event.shaped("extendedae:ex_drive", [
        "EFE",
        "SDS",
        "EFE"
    ], {
        E: "extendedae:entro_ingot",
        F: "extendedae:machine_frame",
        S: "create_connected:item_silo",
        D: "ae2:drive"
    });

    // Drive upgrade - uses item vault
    event.remove({ output: "extendedae:drive_upgrade" });
    event.shaped("extendedae:drive_upgrade", [
        "EAE",
        "VCV",
        "EAE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        V: "create:item_vault",
        C: "ae2:cell_component_256k"
    });

    // Extended interfaces and pattern providers (5nm advanced chips)

    // Ex interface (5nm) - uses inventory access port
    event.remove({ output: "extendedae:ex_interface" });
    event.shaped("extendedae:ex_interface", [
        "EFE",
        "PIP",
        "EFE"
    ], {
        E: "extendedae:entro_ingot",
        F: "extendedae:machine_frame",
        P: "create_connected:inventory_access_port",
        I: "ae2:interface"
    });

    // Ex interface part
    event.remove({ output: "extendedae:ex_interface_part" });
    event.shapeless("extendedae:ex_interface_part", [
        "extendedae:ex_interface"
    ]);

    // Interface upgrade
    event.remove({ output: "extendedae:interface_upgrade" });
    event.shaped("extendedae:interface_upgrade", [
        "EAE",
        "AIA",
        "EAE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        I: "ae2:interface"
    });

    // Ex pattern provider (5nm) - uses depot
    event.remove({ output: "extendedae:ex_pattern_provider" });
    event.shaped("extendedae:ex_pattern_provider", [
        "EFE",
        "DPD",
        "EFE"
    ], {
        E: "extendedae:entro_ingot",
        F: "extendedae:machine_frame",
        D: "create:depot",
        P: "ae2:pattern_provider"
    });

    // Ex pattern provider part
    event.remove({ output: "extendedae:ex_pattern_provider_part" });
    event.shapeless("extendedae:ex_pattern_provider_part", [
        "extendedae:ex_pattern_provider"
    ]);

    // Pattern provider upgrade
    event.remove({ output: "extendedae:pattern_provider_upgrade" });
    event.shaped("extendedae:pattern_provider_upgrade", [
        "EAE",
        "APA",
        "EAE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        P: "ae2:pattern_provider"
    });

    // Oversize interface (5nm)
    event.remove({ output: "extendedae:oversize_interface" });
    event.shaped("extendedae:oversize_interface", [
        "EEE",
        "IAI",
        "EEE"
    ], {
        E: "extendedae:entro_ingot",
        I: "extendedae:ex_interface",
        A: "dam:advanced_chip"
    });

    // Oversize interface part
    event.remove({ output: "extendedae:oversize_interface_part" });
    event.shapeless("extendedae:oversize_interface_part", [
        "extendedae:oversize_interface"
    ]);

    // Extended molecular assembler (3nm multi-die package) - uses mechanical arm

    event.remove({ output: "extendedae:ex_molecular_assembler" });
    event.shaped("extendedae:ex_molecular_assembler", [
        "EFE",
        "RAR",
        "EFE"
    ], {
        E: "extendedae:entro_ingot",
        F: "extendedae:machine_frame",
        R: "create:mechanical_arm",
        A: "ae2:molecular_assembler"
    });

    // Extended IO and buses

    // Ex IO port (5nm)
    event.remove({ output: "extendedae:ex_io_port" });
    event.shaped("extendedae:ex_io_port", [
        "EFE",
        "AIA",
        "EFE"
    ], {
        E: "extendedae:entro_ingot",
        F: "extendedae:machine_frame",
        A: "dam:advanced_chip",
        I: "ae2:io_port"
    });

    // IO bus upgrade
    event.remove({ output: "extendedae:io_bus_upgrade" });
    event.shaped("extendedae:io_bus_upgrade", [
        "EAE",
        "ABA",
        "EAE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        B: "ae2:import_bus"
    });

    // Ex import bus - uses smart chute
    event.remove({ output: "extendedae:ex_import_bus_part" });
    event.shaped("extendedae:ex_import_bus_part", [
        "EAE",
        "CIC",
        "EAE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        C: "create:smart_chute",
        I: "ae2:import_bus"
    });

    // Ex export bus - uses smart chute
    event.remove({ output: "extendedae:ex_export_bus_part" });
    event.shaped("extendedae:ex_export_bus_part", [
        "EAE",
        "CIC",
        "EAE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        C: "create:smart_chute",
        I: "ae2:export_bus"
    });

    // Extended charger and inscriber

    // Ex charger (5nm - we're replacing the inscriber system but keeping the block)
    event.remove({ output: "extendedae:ex_charger" });
    event.shaped("extendedae:ex_charger", [
        "EFE",
        "ACA",
        "EFE"
    ], {
        E: "extendedae:entro_ingot",
        F: "extendedae:machine_frame",
        A: "dam:advanced_chip",
        C: "tfmg:capacitor_item"
    });

    // Ex inscriber (repurposed as advanced processor crafter)
    event.remove({ output: "extendedae:ex_inscriber" });
    event.shaped("extendedae:ex_inscriber", [
        "EFE",
        "APA",
        "EFE"
    ], {
        E: "extendedae:entro_ingot",
        F: "extendedae:machine_frame",
        A: "dam:advanced_chip",
        P: "create:precision_mechanism"
    });

    // Assembler matrix (3nm multi-die)

    // Assembler matrix frame
    event.remove({ output: "extendedae:assembler_matrix_frame" });
    event.shaped("extendedae:assembler_matrix_frame", [
        "EHE",
        "HMH",
        "EHE"
    ], {
        E: "extendedae:entro_ingot",
        H: "tfmg:heavy_machinery_casing",
        M: "dam:multi_die_package"
    });

    // Assembler matrix wall
    event.remove({ output: "extendedae:assembler_matrix_wall" });
    event.shaped("extendedae:assembler_matrix_wall", [
        "EEE",
        "EFE",
        "EEE"
    ], {
        E: "extendedae:entro_ingot",
        F: "extendedae:assembler_matrix_frame"
    });

    // Assembler matrix glass
    event.remove({ output: "extendedae:assembler_matrix_glass" });
    event.shaped("extendedae:assembler_matrix_glass", [
        "GGG",
        "GFG",
        "GGG"
    ], {
        G: "#c:glass_blocks",
        F: "extendedae:assembler_matrix_frame"
    });

    // Assembler matrix crafter (3nm) - uses mechanical arm
    event.remove({ output: "extendedae:assembler_matrix_crafter" });
    event.shaped("extendedae:assembler_matrix_crafter", [
        "EFE",
        "RAR",
        "EFE"
    ], {
        E: "extendedae:entro_ingot",
        F: "extendedae:assembler_matrix_frame",
        R: "create:mechanical_arm",
        A: "ae2:molecular_assembler"
    });

    // Assembler matrix speed (3nm)
    event.remove({ output: "extendedae:assembler_matrix_speed" });
    event.shaped("extendedae:assembler_matrix_speed", [
        "EFE",
        "MCM",
        "EFE"
    ], {
        E: "extendedae:entro_ingot",
        F: "extendedae:assembler_matrix_frame",
        M: "dam:multi_die_package",
        C: "ae2:crafting_accelerator"
    });

    // Assembler matrix pattern (3nm)
    event.remove({ output: "extendedae:assembler_matrix_pattern" });
    event.shaped("extendedae:assembler_matrix_pattern", [
        "EFE",
        "MPM",
        "EFE"
    ], {
        E: "extendedae:entro_ingot",
        F: "extendedae:assembler_matrix_frame",
        M: "dam:multi_die_package",
        P: "ae2:pattern_provider"
    });

    // Wireless systems

    // Wireless hub (5nm)
    event.remove({ output: "extendedae:wireless_hub" });
    event.shaped("extendedae:wireless_hub", [
        "EWE",
        "FAF",
        "EWE"
    ], {
        E: "extendedae:entro_ingot",
        W: "ae2:wireless_access_point",
        F: "extendedae:machine_frame",
        A: "dam:advanced_chip"
    });

    // Wireless connect
    event.remove({ output: "extendedae:wireless_connect" });
    event.shaped("extendedae:wireless_connect", [
        "EWE",
        "ACA",
        "EEE"
    ], {
        E: "extendedae:entro_ingot",
        W: "ae2:wireless_receiver",
        A: "dam:advanced_chip",
        C: "ae2:fluix_glass_cable"
    });

    // Wireless connector upgrade
    event.remove({ output: "extendedae:wireless_connector_upgrade" });
    event.shaped("extendedae:wireless_connector_upgrade", [
        "EAE",
        "AWA",
        "EAE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        W: "ae2:wireless_booster"
    });

    // Wireless tool
    event.remove({ output: "extendedae:wireless_tool" });
    event.shaped("extendedae:wireless_tool", [
        " WA",
        " EW",
        "E  "
    ], {
        W: "ae2:wireless_receiver",
        A: "dam:advanced_chip",
        E: "extendedae:entro_ingot"
    });

    // Wireless ex pattern access terminal
    event.remove({ output: "extendedae:wireless_ex_pat" });
    event.shapeless("extendedae:wireless_ex_pat", [
        "ae2:pattern_access_terminal",
        "ae2:wireless_receiver",
        "ae2:dense_energy_cell",
        "dam:advanced_chip"
    ]);

    // Special buses and tools

    // Tag storage bus - uses inventory bridge
    event.remove({ output: "extendedae:tag_storage_bus" });
    event.shaped("extendedae:tag_storage_bus", [
        "EAE",
        "BSB",
        "ENE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        B: "create_connected:inventory_bridge",
        S: "ae2:storage_bus",
        N: "minecraft:name_tag"
    });

    // Tag export bus
    event.remove({ output: "extendedae:tag_export_bus" });
    event.shaped("extendedae:tag_export_bus", [
        "EAE",
        "AXA",
        "ENE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        X: "ae2:export_bus",
        N: "minecraft:name_tag"
    });

    // Mod storage bus - uses inventory bridge
    event.remove({ output: "extendedae:mod_storage_bus" });
    event.shaped("extendedae:mod_storage_bus", [
        "EAE",
        "BSB",
        "ECE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        B: "create_connected:inventory_bridge",
        S: "ae2:storage_bus",
        C: "tfmg:circuit_board"
    });

    // Mod export bus
    event.remove({ output: "extendedae:mod_export_bus" });
    event.shaped("extendedae:mod_export_bus", [
        "EAE",
        "AXA",
        "ECE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        X: "ae2:export_bus",
        C: "tfmg:circuit_board"
    });

    // Precise storage bus
    event.remove({ output: "extendedae:precise_storage_bus" });
    event.shaped("extendedae:precise_storage_bus", [
        "EAE",
        "ASA",
        "EPE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        S: "ae2:storage_bus",
        P: "create:precision_mechanism"
    });

    // Precise export bus
    event.remove({ output: "extendedae:precise_export_bus" });
    event.shaped("extendedae:precise_export_bus", [
        "EAE",
        "AXA",
        "EPE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        X: "ae2:export_bus",
        P: "create:precision_mechanism"
    });

    // Threshold export bus
    event.remove({ output: "extendedae:threshold_export_bus" });
    event.shaped("extendedae:threshold_export_bus", [
        "EAE",
        "AXA",
        "ECE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        X: "ae2:export_bus",
        C: "minecraft:comparator"
    });

    // Threshold level emitter
    event.remove({ output: "extendedae:threshold_level_emitter" });
    event.shaped("extendedae:threshold_level_emitter", [
        "EAE",
        "ALA",
        "ECE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        L: "ae2:level_emitter",
        C: "minecraft:comparator"
    });

    // Smart annihilation plane
    event.remove({ output: "extendedae:smart_annihilation_plane" });
    event.shaped("extendedae:smart_annihilation_plane", [
        "EAE",
        "APA",
        "EBE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        P: "ae2:annihilation_plane",
        B: "tfmg:circuit_board"
    });

    // Active formation plane
    event.remove({ output: "extendedae:active_formation_plane" });
    event.shaped("extendedae:active_formation_plane", [
        "EAE",
        "APA",
        "EBE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        P: "ae2:formation_plane",
        B: "tfmg:circuit_board"
    });

    // Miscellaneous

    // Crystal assembler
    event.remove({ output: "extendedae:crystal_assembler" });
    event.shaped("extendedae:crystal_assembler", [
        "EFE",
        "ACA",
        "EFE"
    ], {
        E: "extendedae:entro_ingot",
        F: "extendedae:machine_frame",
        A: "dam:advanced_chip",
        C: "minecraft:amethyst_block"
    });

    // Crystal fixer
    event.remove({ output: "extendedae:crystal_fixer" });
    event.shaped("extendedae:crystal_fixer", [
        "EFE",
        "AGA",
        "EFE"
    ], {
        E: "extendedae:entro_ingot",
        F: "extendedae:machine_frame",
        A: "dam:advanced_chip",
        G: "minecraft:amethyst_cluster"
    });

    // Ingredient buffer
    event.remove({ output: "extendedae:ingredient_buffer" });
    event.shaped("extendedae:ingredient_buffer", [
        "EFE",
        "ACA",
        "EFE"
    ], {
        E: "extendedae:entro_ingot",
        F: "extendedae:machine_frame",
        A: "dam:standard_chip",
        C: "#c:chests"
    });

    // Caner
    event.remove({ output: "extendedae:caner" });
    event.shaped("extendedae:caner", [
        "EFE",
        "ABA",
        "EFE"
    ], {
        E: "extendedae:entro_ingot",
        F: "extendedae:machine_frame",
        A: "dam:standard_chip",
        B: "minecraft:bucket"
    });

    // Circuit cutter
    event.remove({ output: "extendedae:circuit_cutter" });
    event.shaped("extendedae:circuit_cutter", [
        "EFE",
        "ACA",
        "EFE"
    ], {
        E: "extendedae:entro_ingot",
        F: "extendedae:machine_frame",
        A: "dam:advanced_chip",
        C: "tfmg:circuit_board"
    });

    // Pattern modifier
    event.remove({ output: "extendedae:pattern_modifier" });
    event.shaped("extendedae:pattern_modifier", [
        " PA",
        " EP",
        "E  "
    ], {
        P: "ae2:blank_pattern",
        A: "dam:standard_chip",
        E: "extendedae:entro_ingot"
    });

    // Config modifier (pattern terminal upgrade)
    event.remove({ output: "extendedae:config_modifier" });
    event.shaped("extendedae:config_modifier", [
        " CA",
        " EC",
        "E  "
    ], {
        C: "tfmg:circuit_board",
        A: "dam:standard_chip",
        E: "extendedae:entro_ingot"
    });

    // Pattern terminal upgrade
    event.remove({ output: "extendedae:pattern_terminal_upgrade" });
    event.shaped("extendedae:pattern_terminal_upgrade", [
        "EAE",
        "ATA",
        "EAE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        T: "ae2:pattern_encoding_terminal"
    });

    // Ex pattern access part
    event.remove({ output: "extendedae:ex_pattern_access_part" });
    event.shaped("extendedae:ex_pattern_access_part", [
        "EAE",
        "ATA",
        "EBE"
    ], {
        E: "extendedae:entro_ingot",
        A: "dam:advanced_chip",
        T: "ae2:pattern_access_terminal",
        B: "tfmg:circuit_board"
    });

    // ME packing tape
    event.remove({ output: "extendedae:me_packing_tape" });
    event.shaped("extendedae:me_packing_tape", [
        "PCP",
        "PAP",
        "PCP"
    ], {
        P: "tfmg:plastic_sheet",
        C: "tfmg:circuit_board",
        A: "dam:standard_chip"
    });

    // Void cell
    event.remove({ output: "extendedae:void_cell" });
    event.shaped("extendedae:void_cell", [
        "EOE",
        "OAO",
        "EOE"
    ], {
        E: "extendedae:entro_ingot",
        O: "minecraft:obsidian",
        A: "dam:advanced_chip"
    });

    // Silicon block (from TFMG silicon)
    event.remove({ output: "extendedae:silicon_block" });
    event.shaped("extendedae:silicon_block", [
        "SSS",
        "SSS",
        "SSS"
    ], {
        S: "tfmg:silicon_ingot"
    });

    // Infinity water cell
    event.remove({ output: "extendedae:infinity_water_cell" });
    event.shaped("extendedae:infinity_water_cell", [
        "EWE",
        "WCW",
        "EWE"
    ], {
        E: "extendedae:entro_ingot",
        W: "minecraft:water_bucket",
        C: "dam:multi_die_package"
    });

    // Infinity cobblestone cell
    event.remove({ output: "extendedae:infinity_cobblestone_cell" });
    event.shaped("extendedae:infinity_cobblestone_cell", [
        "ESE",
        "SCS",
        "ESE"
    ], {
        E: "extendedae:entro_ingot",
        S: "minecraft:cobblestone",
        C: "dam:multi_die_package"
    });
});

