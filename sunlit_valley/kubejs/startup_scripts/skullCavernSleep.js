ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerSleepInBedEvent", (e) => {
  global.handleSkullSleep(e);
});
global.handleSkullSleep = (e) => {
  const { entity } = e;
  if (!entity.isPlayer()) return;
  const level = entity.level;
  level.getServer().players.forEach((p) => {
    if (p.getLevel().dimension === "society:skull_cavern") {
      entity.tell(
        Text.red("Sleeping now would abandon your friend " + p.username + " in the Skull Cavern!")
      );
      e.cancel();
    }
  });
};
