let inactivityTicks = 0;
const maxInactivityTicks = 6000; // Number of ticks before shutdown (e.g., 6000 ticks = 5 minutes)

ServerEvents.tick(event => {
    const server = event.server;
    const onlinePlayers = server.players.size();

    if (onlinePlayers === 0) {
        inactivityTicks++;
        if (inactivityTicks >= maxInactivityTicks) {
            console.info('No players detected for the specified duration. Shutting down server...');
            server.runCommand('/stop');
        } else if (inactivityTicks % 100 == 0) {
            console.info(`Inactivity tick: ${inactivityTicks}/${maxInactivityTicks}`);
        }
    } else {
        inactivityTicks = 0; // Reset the counter if players are online
    }
});
