// AppEx (Applied Experienced) Recipe Overhaul
// Experience storage using same tier mapping as AE2 equivalents

ServerEvents.recipes(event => {

    // Experience acceptor (22nm standard chip) - uses generator coil

    event.remove({ output: "appex:experience_acceptor" });
    event.shaped("appex:experience_acceptor", [
        "ISI",
        "GCG",
        "ISI"
    ], {
        I: "create:iron_sheet",
        S: "tfmg:steel_casing",
        G: "create_new_age:generator_coil",
        C: "dam:standard_chip"
    });

    // Cable experience acceptor
    event.remove({ output: "appex:cable_experience_acceptor" });
    event.shapeless("appex:cable_experience_acceptor", [
        "appex:experience_acceptor"
    ]);

    // Experience converter

    event.remove({ output: "appex:experience_converter" });
    event.shaped("appex:experience_converter", [
        "ISI",
        "ACA",
        "ISI"
    ], {
        I: "create:iron_sheet",
        S: "tfmg:steel_casing",
        A: "appex:experience_acceptor",
        C: "dam:standard_chip"
    });

    // Experience cell housing - uses fluid tank (XP is fluid-like)

    event.remove({ output: "appex:experience_cell_housing" });
    event.shaped("appex:experience_cell_housing", [
        "IGI",
        "GTG",
        "IEI"
    ], {
        I: "create:iron_sheet",
        G: "#c:glass_blocks",
        T: "create:fluid_tank",
        E: "minecraft:experience_bottle"
    });

    // Experience storage cells (1k-64k=basic, 256k=standard)

    // Experience storage cells use the same cell components as AE2
    // The recipes combine the experience housing with the cell component

    event.remove({ output: "appex:experience_storage_cell_1k" });
    event.shapeless("appex:experience_storage_cell_1k", [
        "appex:experience_cell_housing",
        "ae2:cell_component_1k"
    ]);

    event.remove({ output: "appex:experience_storage_cell_4k" });
    event.shapeless("appex:experience_storage_cell_4k", [
        "appex:experience_cell_housing",
        "ae2:cell_component_4k"
    ]);

    event.remove({ output: "appex:experience_storage_cell_16k" });
    event.shapeless("appex:experience_storage_cell_16k", [
        "appex:experience_cell_housing",
        "ae2:cell_component_16k"
    ]);

    event.remove({ output: "appex:experience_storage_cell_64k" });
    event.shapeless("appex:experience_storage_cell_64k", [
        "appex:experience_cell_housing",
        "ae2:cell_component_64k"
    ]);

    event.remove({ output: "appex:experience_storage_cell_256k" });
    event.shapeless("appex:experience_storage_cell_256k", [
        "appex:experience_cell_housing",
        "ae2:cell_component_256k"
    ]);

    // Portable experience cells

    event.remove({ output: "appex:portable_experience_cell_1k" });
    event.shapeless("appex:portable_experience_cell_1k", [
        "appex:experience_cell_housing",
        "ae2:cell_component_1k",
        "ae2:energy_cell",
        "ae2:terminal"
    ]);

    event.remove({ output: "appex:portable_experience_cell_4k" });
    event.shapeless("appex:portable_experience_cell_4k", [
        "appex:experience_cell_housing",
        "ae2:cell_component_4k",
        "ae2:energy_cell",
        "ae2:terminal"
    ]);

    event.remove({ output: "appex:portable_experience_cell_16k" });
    event.shapeless("appex:portable_experience_cell_16k", [
        "appex:experience_cell_housing",
        "ae2:cell_component_16k",
        "ae2:energy_cell",
        "ae2:terminal"
    ]);

    event.remove({ output: "appex:portable_experience_cell_64k" });
    event.shapeless("appex:portable_experience_cell_64k", [
        "appex:experience_cell_housing",
        "ae2:cell_component_64k",
        "ae2:energy_cell",
        "ae2:terminal"
    ]);

    event.remove({ output: "appex:portable_experience_cell_256k" });
    event.shapeless("appex:portable_experience_cell_256k", [
        "appex:experience_cell_housing",
        "ae2:cell_component_256k",
        "ae2:energy_cell",
        "ae2:terminal"
    ]);
});

