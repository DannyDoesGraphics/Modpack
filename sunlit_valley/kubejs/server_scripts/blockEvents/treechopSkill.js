console.info("[SOCIETY] treechopSkill.js loaded");

BlockEvents.broken("treechop:chopped_log", (e) => {
  const { player, block } = e;
  if (Math.random() <= 0.005 && !player.stages.has("wuthering_logs")) {
    block.popItem("society:wuthering_logs");
  }
  if (
    Math.random() <= 0.15 &&
    player.stages.has("wuthering_logs") &&
    block.id === "treechop:chopped_log"
  ) {
    block.popItem("meadow:fire_log");
  }
});
