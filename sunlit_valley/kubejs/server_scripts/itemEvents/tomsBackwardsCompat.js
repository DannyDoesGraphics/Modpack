console.info("[SOCIETY] tomsBackwardsCompat.js loaded");

ItemEvents.rightClicked("toms_storage:ts.adv_wireless_terminal", (e) => {
  const { item, server, player } = e;
  if (player.isCrouching()) {
    item.shrink(1);
    server.scheduleInTicks(5, () => {
      player.give(Item.of("refinedstorageaddons:wireless_crafting_grid"));
      player.give("rsinfinitybooster:dimension_card");
    });
  }
});
