console.info("[SOCIETY] disableSpawner.js loaded");

BlockEvents.rightClicked("minecraft:spawner", (e) => {
  if (e.item.id.includes("spawn_egg")) e.cancel();
});
