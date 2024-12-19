let inactivityTicks = 0;
const maxInactivityTicks = 100; // Number of ticks before shutdown (e.g., 6000 ticks = 5 minutes)

ServerEvents.tick(event => {
    const server = event.server;
    const onlinePlayers = server.players.size();

    if (onlinePlayers === 0) {
        inactivityTicks++;
        if (inactivityTicks >= maxInactivityTicks) {
            console.info('No players detected for the specified duration. Shutting down server...');
            server.runCommand('/stop');
        }
    } else {
        inactivityTicks = 0; // Reset the counter if players are online
    }
});
