ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'bosses_of_mass_destruction:blazing_eye' }, // Arg 1: the filter
        'bosses_of_mass_destruction:blazing_eye',            // Arg 2: the item to replace
        'endrem:nether_eye'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    );
})