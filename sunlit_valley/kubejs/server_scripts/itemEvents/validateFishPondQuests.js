console.info("[SOCIETY] validateFishPondQuests.js loaded");

// Tests if quest items are valid items. Dev use only.
ItemEvents.rightClicked("functionalstorage:creative_vending_upgrade", (e) => {
  player.server.persistentData.pigraceInProgress = false;
  global.fishPondDefinitions.forEach((fish) => {
    fish.quests.forEach((quest) => {
      quest.requestedItems.forEach((req) => {
        if (Item.of(req.item).id === "minecraft:air") e.player.tell(req.item);
      });
    });
  });
  e.player.tell("Quests validated.");
});
