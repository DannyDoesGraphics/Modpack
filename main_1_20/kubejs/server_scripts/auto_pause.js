// Pause the server after a while

let inactivityTicks = 0;
const maxInactivityTicks = 0; // Number of ticks before shutdown (e.g., 6000 ticks = 5 minutes)
let paused = true;

ServerEvents.tick(event => {
    const server = event.server;
    const onlinePlayers = server.players.size();

    if (onlinePlayers === 0) {
        paused = true
        inactivityTicks++;
        if (inactivityTicks >= maxInactivityTicks) {

            console.info('No players detected for the specified duration. Shutting down server...');
            //server.runCommand('/stop');
            server.runCommand("/gamerule doDaylightCycle false");
            server.runCommand("/gamerule doWeatherCycle false");
            server.runCommand("/gamerule randomTickSpeed 0");
            server.runCommand("/gamerule doSeasonCycle false");
            server.runCommand("/gamerule doFireTick false");
            server.runCommand("/gamerule doMobSpawning false");
        }
    } else {
        if (paused === true) {
            paused = false;
            server.runCommand("/gamerule doDaylightCycle true");
            server.runCommand("/gamerule doWeatherCycle true");
            server.runCommand("/gamerule randomTickSpeed 3");
            server.runCommand("/gamerule doSeasonCycle true");
            server.runCommand("/gamerule doFireTick true");
            server.runCommand("/gamerule doMobSpawning true");
            server.runCommand("/function vanilla_refresh:other/actions/disable_settings");
            server.runCommand("/function vanilla_refresh:other/actions/other/daycounter_enable2");
        }
        inactivityTicks = 0; // Reset the counter if players are online
    }
});
