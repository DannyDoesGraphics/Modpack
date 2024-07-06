LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("dungeonnowloading:spikes")
        .removeLoot("*");
})