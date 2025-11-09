ServerEvents.recipes(event => {
    event.remove({ output: "refinedstorage:quartz_enriched_iron" });
    event.remove({ output: "refinedstorage:quartz_enriched_copper" });
    /*
    event.remove({ input: "refinedstorage:raw_basic_processor" });
    event.remove({ input: "refinedstorage:raw_improved_processor" });
    event.remove({ input: "refinedstorage:raw_advanced_processor" });
    event.remove({ input: "refinedstorage:basic_processor" });
    event.remove({ input: "refinedstorage:improved_processor" });
    event.remove({ input: "refinedstorage:advanced_processor" });
    */
    /*
    event.remove({ output: "refinedstorage:importer" });
    event.shapeless(Item.of("refinedstorage:importer", 1), [
        "#refinedstorage:importers",
        "#c:dyes/gray"
    ]);
    event.shaped(Item.of("refinedstorage:importer", 1), [
        "ABC"
    ], {
        A: "#refinedstorage:cables",
        B: "dam:microprocessor",
        C: "create:display_board"
    });

    event.remove({ output: "refinedstorage:exporter" });
    event.shapeless(Item.of("refinedstorage:exporter", 1), [
        "#refinedstorage:exporters",
        "#c:dyes/gray"
    ]);
    event.shaped(Item.of("refinedstorage:exporter", 1), [
        "ACB"
    ], {
        A: "#refinedstorage:cables",
        B: "dam:microprocessor",
        C: "create:display_board"
    });

    event.remove({ output: "refinedstorage:external_storage" });
    event.shapeless(Item.of("refinedstorage:external_storage", 1), [
        "#refinedstorage:external_storages",
        "#c:dyes/gray"
    ]);
    event.shaped(Item.of("refinedstorage:external_storage", 1), [
        "M M",
        "ABC",
        "M M"
    ], {
        A: "#refinedstorage:cables",
        B: "create:display_board",
        C: "dam:microprocessor",
        M: "create:iron_sheet"
    });

    event.remove({ output: "refinedstorage:constructor" });
    event.shapeless(Item.of("refinedstorage:constructor", 1), [
        "#refinedstorage:constructors",
        "#c:dyes/gray"
    ]);
    event.shaped(Item.of("refinedstorage:constructor", 1), [
        "MAM",
        "PBP",
        "M M"
    ], {
        A: "#refinedstorage:cables",
        B: "create:display_board",
        M: "create:iron_sheet",
        P: "dam:processor"
    });

    event.remove({ output: "refinedstorage:destructor" });
    event.shapeless(Item.of("refinedstorage:destructor", 1), [
        "#refinedstorage:destructors",
        "#c:dyes/gray"
    ]);
    event.shaped(Item.of("refinedstorage:destructor", 1), [
        "M M",
        "PBP",
        "MAM"
    ], {
        A: "#refinedstorage:cables",
        B: "create:display_board",
        M: "create:iron_sheet",
        P: "dam:processor"
    });*/

    //event.replaceInput({ input: "refinedstorage:basic_processor" }, "refinedstorage:basic_processor", 'dam:microprocessor');
    //event.replaceInput({ input: "refinedstorage:improved_processor" }, "refinedstorage:improved_processor", 'dam:processor');
    //event.replaceInput({ input: "refinedstorage:advanced_processor" }, "refinedstorage:advanced_processor", 'dam:cpu');
    //event.replaceInput({ input: "refinedstorage:quartz_enriched_iron" }, "refinedstorage:quartz_enriched_iron", 'create:iron_sheet');
    //event.replaceInput({ input: "refinedstorage:quartz_enriched_copper" }, "refinedstorage:quartz_enriched_copper", 'create:copper_sheet');

    event.remove({ output: "refinedstorage:controller" });
    event.shapeless(Item.of("refinedstorage:controller", 1), [
        "#refinedstorage:controllers",
        "#c:dyes/light_blue"
    ]);
    event.shaped(Item.of("refinedstorage:controller", 1), [
        "MCM",
        "BAB",
        "MBM"
    ], {
        A: "refinedstorage:machine_casing",
        B: "dam:processor",
        C: "dam:cpu",
        M: "create:iron_sheet",
    });

    event.remove({ output: "refinedstorage:cable" });
    event.shapeless(Item.of("refinedstorage:cable", 1), [
        "#refinedstorage:cables",
        "#c:dyes/gray"
    ]);
    event.shaped(Item.of("refinedstorage:cable", 16), [
        "A",
        "B",
        "A"
    ], {
        A: "create:copper_sheet",
        B: "dam:microprocessor"
    });

    event.remove({ output: "refinedstorage:importer" });
    event.shapeless(Item.of("refinedstorage:importer", 1), [
        "#refinedstorage:importers",
        "#c:dyes/gray"
    ]);
    event.shaped(Item.of("refinedstorage:importer", 1), [
        "ABC"
    ], {
        A: "#refinedstorage:cables",
        B: "dam:microprocessor",
        C: "create:display_board"
    });

    event.remove({ output: "refinedstorage:exporter" });
    event.shapeless(Item.of("refinedstorage:exporter", 1), [
        "#refinedstorage:exporters",
        "#c:dyes/gray"
    ]);
    event.shaped(Item.of("refinedstorage:exporter", 1), [
        "ACB"
    ], {
        A: "#refinedstorage:cables",
        B: "dam:microprocessor",
        C: "create:display_board"
    });

    event.remove({ output: "refinedstorage:external_storage" });
    event.shapeless(Item.of("refinedstorage:external_storage", 1), [
        "#refinedstorage:external_storages",
        "#c:dyes/gray"
    ]);
    event.shaped(Item.of("refinedstorage:external_storage", 1), [
        "MMM",
        "CAC",
        "MPM"
    ], {
        M: "create:iron_sheet",
        C: "#c:chests",
        P: "dam:processor",
        A: "#refinedstorage:cables"
    });

    event.remove({ output: "refinedstorage:constructor" });
    event.shapeless(Item.of("refinedstorage:constructor", 1), [
        "#refinedstorage:constructors",
        "#c:dyes/gray"
    ]);
    event.shaped(Item.of("refinedstorage:constructor", 1), [
        "MPM",
        "DAD",
        "MPM"
    ], {
        M: "create:iron_sheet",
        D: "minecraft:diamond",
        P: "dam:processor",
        A: "#refinedstorage:cables"
    });

    event.remove({ output: "refinedstorage:destructor" });
    event.shapeless(Item.of("refinedstorage:destructor", 1), [
        "#refinedstorage:destructors",
        "#c:dyes/gray"
    ]);
    event.shaped(Item.of("refinedstorage:destructor", 1), [
        "MDM",
        "PAP",
        "MDM"
    ], {
        M: "create:iron_sheet",
        D: "minecraft:diamond",
        P: "dam:processor",
        A: "#refinedstorage:cables"
    });

    event.remove({ output: "refinedstorage:wireless_transmitter" });
    event.shapeless(Item.of("refinedstorage:wireless_transmitter", 1), [
        "#refinedstorage:wireless_transmitters",
        "#c:dyes/gray"
    ]);
    event.shaped(Item.of("refinedstorage:wireless_transmitter", 1), [
        "MEM",
        "MAM",
        "MPM"
    ], {
        M: "create:iron_sheet",
        E: "minecraft:ender_pearl",
        P: "dam:processor",
        A: "#refinedstorage:cables"
    });

    event.remove({ output: "refinedstorage:disk_drive" });
    event.shaped(Item.of("refinedstorage:disk_drive", 1), [
        "MCM",
        "MAM",
        "MPM"
    ], {
        M: "create:iron_sheet",
        C: "#c:chests",
        P: "dam:processor",
        A: "#refinedstorage:cables"
    });

    event.remove({ output: "refinedstorage:crafting_grid" });
    event.shapeless(Item.of("refinedstorage:crafting_grid", 1), [
        "#refinedstorage:crafting_grids",
        "#c:dyes/light_blue"
    ]);
    event.shaped(Item.of("refinedstorage:crafting_grid", 1), [
        "ABC",
    ], {
        A: "#refinedstorage:grids",
        B: "dam:cpu",
        C: "#c:player_workstations/crafting_tables"
    });

    event.remove({ output: "refinedstorage:pattern_grid" });
    event.shapeless(Item.of("refinedstorage:pattern_grid", 1), [
        "#refinedstorage:pattern_grids",
        "#c:dyes/light_blue"
    ]);
    event.shaped(Item.of("refinedstorage:pattern_grid", 1), [
        "ABC",
    ], {
        A: "#refinedstorage:grids",
        B: "dam:cpu",
        C: "refinedstorage:pattern"
    });

    event.remove({ output: "refinedstorage:portable_grid" });
    event.shaped(Item.of("refinedstorage:portable_grid", 1), [
        "MBM",
        "MAM",
        "MBM"
    ], {
        A: "#refinedstorage:controllers",
        B: "dam:microprocessor",
        M: "create:iron_sheet"
    });

    event.remove({ output: "refinedstorage:detector" });
    event.shaped(Item.of("refinedstorage:detector", 1), [
        "MTM",
        "SAS",
        "MPM"
    ], {
        A: "#refinedstorage:cables",
        P: "dam:processor",
        S: "minecraft:comparator",
        T: "minecraft:redstone_torch",
        M: "create:iron_sheet"
    });

    event.remove({ output: "refinedstorage:interface" });
    event.shaped(Item.of("refinedstorage:interface", 1), [
        "MTM",
        "PAP",
        "MTM"
    ], {
        A: "#refinedstorage:cables",
        P: "dam:microprocessor",
        T: "#refinedstorage:exporters",
        M: "create:iron_sheet"
    });

    // grids
    event.remove({ output: "refinedstorage:grid" });
    event.shapeless(Item.of("refinedstorage:grid", 1), [
        "#refinedstorage:grids",
        "#c:dyes/light_blue"
    ]);
    event.shaped(Item.of("refinedstorage:grid", 1), [
        "BBD",
        "CAD",
        "BBD"
    ], {
        A: "#refinedstorage:cables",
        B: "dam:microprocessor",
        C: "create:iron_sheet",
        D: "createrailwaysnavigator:advanced_display_panel"
    });

    // define base
    event.remove({ output: "refinedstorage:1k_storage_part" });
    event.shaped(Item.of("refinedstorage:1k_storage_part", 1), [
        "MMM",
        "GAG",
        "MGM"
    ], {
        M: "create:iron_sheet",
        A: "dam:processor",
        G: "#c:glass_blocks"
    });

    let storage_units = ["1", "4", "16", "64"];
    for (let i = 0; i < storage_units.length; i++) {
        const unit = storage_units[i];
        event.remove({ output: `refinedstorage:${unit}k_storage_block` });
        if (i > 0) {
            const prev = storage_units[i - 1];
            event.shapeless(Item.of(`refinedstorage:${unit}k_storage_block`, 1), [
                `refinedstorage:${unit}k_storage_part`,
                `refinedstorage:${prev}k_storage_block`
            ]);

            event.remove({ output: `refinedstorage:${unit}k_storage_part` });
            event.shaped(Item.of(`refinedstorage:${unit}k_storage_part`, 1), [
                "MMM",
                "GAG",
                "MGM"
            ], {
                M: "create:iron_sheet",
                A: "dam:processor",
                G: `refinedstorage:${prev}k_storage_part`
            });
            console.log(`Created refinedstorage:${unit}k_storage_part, with prev: ${prev}k_storage_part`);
        }
        event.shaped(Item.of(`refinedstorage:${unit}k_storage_block`, 1), [
            "MAM",
            "MWM",
            "MRM"
        ], {
            M: "create:iron_sheet",
            A: `refinedstorage:${unit}k_storage_part`,
            W: "#refinedstorage:cables",
            R: "minecraft:redstone"
        });
    }
});