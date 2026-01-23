console.info("[SOCIETY] removeFishingMinigame.js loaded");


ServerEvents.tags("item", (e) => {
  if (!global.enableFishingMinigame) e.removeAll("stardew_fishing:starts_minigame");
});
