let lastActivityTime = Date.now(); // Track the last time players were online
const maxInactivityMillis = 10; // Maximum inactivity duration in milliseconds (e.g., 5 minutes)

function checkInactivity(server) {
    const onlinePlayers = server.players.size();

    if (onlinePlayers === 0) {
        const currentTime = Date.now();
        const elapsedMillis = currentTime - lastActivityTime;

        if (elapsedMillis >= maxInactivityMillis) {
            console.info('No players detected for the specified duration. Shutting down server...');
            server.runCommand('/stop');
        }
    } else {
        lastActivityTime = Date.now(); // Reset the timer when players are online
    }
}

ServerEvents.loaded(event => {
    // Schedule a background task to check inactivity every second
    setInterval(() => {
        checkInactivity(event.server);
    }, 1000); // Check every 1 second
});
