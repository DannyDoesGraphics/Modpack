// This script runs on the server side in KubeJS 1.20.1
const notifiedPlayers = {};

function getCurrentDay(server) {
    // Run the Minecraft command `/time query day` and get the result
    const result = server.runCommandSilent("time query day");
    return parseInt(result); // Parse the day number from the result
}

// Event triggered on every server tick
ServerEvents.tick(event => {
    // Access the server instance
    const server = event.server;

    // Iterate over all players currently online
    server.players.forEach(player => {

        // Define the target time for morning (e.g., 1000 ticks)
        const morningTime = 1000;
        const day = getCurrentDay(server);
        const timeOfDay = player.level.dayTime() % 24000;
        // Display the message using the typewriter effect
        if (timeOfDay >= 1000 && notifiedPlayers[player.uuid] !== day) {
            notifiedPlayers[player.uuid] = day;
            showTypewriterActionBar(server, player, [`Day ${day}.`], 5, 2, 10, 15, 30, 'yellow');
        }
    });
});




/**
 * Displays multiple lines as a "typewriter" effect in the action bar,
 * playing a sound with each character displayed, with variability in typing speed and sound characteristics.
 *
 * @param {Server} server - The server instance.
 * @param {PlayerJS} player - The player to show the action bar messages to.
 * @param {string[]} lines - Array of lines to display in sequence.
 * @param {number} baseDelay - Base delay in ticks between each character.
 * @param {number} delayVariance - Maximum variance in delay between characters.
 * @param {number} spacePause - Additional ticks to wait after typing a space.
 * @param {number} punctuationPause - Additional ticks to wait after punctuation.
 * @param {number} linePause - Ticks to wait after a line finishes.
 * @param {string} color - The color of the text, specified as a predefined color name or a hexadecimal color code.
 */
function showTypewriterActionBar(server, player, lines, baseDelay, delayVariance, spacePause, punctuationPause, linePause, color) {
    // Set default values if parameters are undefined
    baseDelay = baseDelay || 5;
    delayVariance = delayVariance || 2;
    spacePause = spacePause || 10;
    punctuationPause = punctuationPause || 15;
    linePause = linePause || 20;
    color = color || 'white';

    var totalDelay = 0;

    for (var lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        var line = lines[lineIndex];

        for (var i = 1; i <= line.length; i++) {
            if (i >= 2) {
                // Calculate delay for next character with variability
                var currentChar = line.charAt(i - 1);
                var charDelay = baseDelay + Math.floor(Math.random() * (delayVariance + 1));
                if (currentChar === ' ') {
                    charDelay += spacePause;
                } else if (/[.,;:!?]/.test(currentChar)) {
                    charDelay += punctuationPause;
                }
                totalDelay += Math.min(charDelay, 15);
            }
            (function(currentText, displayDelay) {
                server.scheduleInTicks(displayDelay, function() {
                    // Check for player
                    if (!player) {
                        return;
                    }
                    displayActionBar(server, player, currentText, color);
                    playTypingSound(server, player);
                });
            })(line.slice(0, i), totalDelay);

        }

        totalDelay += linePause;

        (function(clearDelay) {
            server.scheduleInTicks(clearDelay, function() {
                // Check for player
                if (!player) {
                    return;
                }
                clearActionBar(server, player);
                playEndOfLineSound(server, player);
            });
        })(totalDelay);
    }
}

/**
 * Displays text in the action bar with the specified color.
 *
 * @param {Server} server - The server instance.
 * @param {PlayerJS} player - The player to show the action bar message to.
 * @param {string} text - The text to display.
 * @param {string} color - The color of the text.
 */
function displayActionBar(server, player, text, color) {
    var jsonText = JSON.stringify({ text: text, color: color });
    server.runCommandSilent('title ' + player.name.string + ' actionbar ' + jsonText);
}

/**
 * Clears the action bar by sending an empty message.
 *
 * @param {Server} server - The server instance.
 * @param {PlayerJS} player - The player whose action bar should be cleared.
 */
function clearActionBar(server, player) {
    server.runCommandSilent('title ' + player.name.string + ' actionbar {"text":""}');
}

/**
 * Plays a typing sound with random pitch and volume to simulate typing.
 *
 * @param {Server} server - The server instance.
 * @param {PlayerJS} player - The player to play the sound for.
 */
function playTypingSound(server, player) {
    var pitch = (1.8 + Math.random() * 0.2).toFixed(2); // Random pitch between 1.8 and 2.0
    var volume = (0.5 + Math.random() * 0.1).toFixed(2); // Random volume between 0.5 and 0.6
    server.runCommandSilent('execute at ' + player.name.string + ' run playsound minecraft:ui.button.click ambient ' + player.name.string + ' ~ ~ ~ ' + volume + ' ' + pitch);
}

/**
 * Plays a sound to indicate the end of a line.
 *
 * @param {Server} server - The server instance.
 * @param {PlayerJS} player - The player to play the sound for.
 */
function playEndOfLineSound(server, player) {
    var pitch = 1.5; // Standard pitch for end-of-line sound
    var volume = 0.75; // Consistent volume
    server.runCommandSilent('execute at ' + player.name.string + ' run playsound minecraft:ui.button.click ambient ' + player.name.string + ' ~ ~ ~ ' + volume + ' ' + pitch);
}
