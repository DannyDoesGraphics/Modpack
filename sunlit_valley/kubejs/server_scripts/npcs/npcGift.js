// console.info("[SOCIETY] npcGift.js loaded");

// const npcIds = ["easy_npc:humanoid", "easy_npc:humanoid_slim"];
// ItemEvents.entityInteracted((e) => {
//   const { hand, player, item, target, server } = e;
//   if (hand == "OFF_HAND") return;
//   if (!npcIds.includes(target.type)) return;
//   if (hand == "MAIN_HAND" && item !== "minecraft:air") {
//     server.runCommandSilent(
//       `easy_npc dialog open ${target.getUuid()} ${player.username} hated_gift`
//     );
//     e.cancel()
//   }
// });
