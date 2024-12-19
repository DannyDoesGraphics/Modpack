// Remove all loot tables made by the mod

const REMOVE_MODS = [
    ""
];

LootJS.lootTables(event => {
    // Iterate over each mod ID
    REMOVE_MODS.forEach(modId => {
        // Retrieve all loot table IDs associated with the current mod
        const lootTableIds = event.getLootTableIds().filter(id => id.startsWith(`${modId}:`));

        // Clear each loot table
        lootTableIds.forEach(id => {
            event.getLootTable(id).clear();
        });
    });
});
