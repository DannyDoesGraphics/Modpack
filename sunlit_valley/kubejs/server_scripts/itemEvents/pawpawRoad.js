console.info("[SOCIETY] pawpawRoad.js loaded");

const pawpawThrottle = ((temp) => (entity, tick, identifier) => {
  const { age, uuid } = entity;
  const key = `${uuid}${identifier}`;
  const now = temp[key];
  if (!now || age - now >= tick) {
    temp[key] = age;
    return false;
  }
  return true;
})({});

ItemEvents.rightClicked("pamhc2trees:pawpawitem", (e) => {
  if (pawpawThrottle(e.player, 1000, "pawpaw_throttle")) return;
  if (Math.random() < 0.05) {
    e.player.tell("§6Country roads, take me home...");

    e.server.scheduleInTicks(60, () => {
      e.player.tell("§6To the place I belong...");
    });
    e.server.scheduleInTicks(120, () => {
      e.player.tell("§6WEST VIRGINIA");
    });
    e.server.scheduleInTicks(180, () => {
      e.player.tell("§6MOUNTAIN MAMAAAAAA");
    });
    e.server.scheduleInTicks(240, () => {
      e.player.tell("§6§lTAKE ME HOME");
    });
    e.server.scheduleInTicks(300, () => {
      e.player.tell("§6§lCOUNTRY ROADS");
    });
  }
});
