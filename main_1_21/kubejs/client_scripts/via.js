// Via Romana

// Calculate optimal text display duration based on reading research
// Research shows ~200 words/minute comfortable reading for on-screen text
// Formula: 300ms per word + 2s minimum + comprehension buffer
function calculateTextDuration(text, isKeyframe) {
    const wordCount = text.split(/\s+/).length;
    const baseTime = 40; // 2 seconds minimum (40 ticks)
    const timePerWord = 6; // 300ms per word (6 ticks)
    const keyframeBuffer = isKeyframe ? 20 : 0; // Extra time for important text
    const maxTime = 140; // 7 seconds maximum (140 ticks)
    
    const calculatedTime = baseTime + (wordCount * timePerWord) + keyframeBuffer;
    return Math.min(calculatedTime, maxTime);
}

Ponder.registry((event) => {
    event
        .create("via_romana:charting_map")
        .scene("via_romana_intro", "Infrastructure-Based Fast Travel", (scene, util) => {
            scene.showBasePlate();
            scene.idle(10);

            // Show a variety of infrastructure blocks appearing in a line (spaced properly)
            const blocks = [
                { pos: [0, 1, 2], block: "minecraft:dirt_path" },
                { pos: [1, 1, 2], block: "minecraft:cobblestone" },
                { pos: [2, 1, 2], block: "minecraft:stone_bricks" },
                { pos: [3, 1, 2], block: "minecraft:oak_planks" },
                { pos: [4, 1, 2], block: "minecraft:bricks" }
            ];
            
            for (let b of blocks) {
                let pos = util.grid.at(b.pos[0], b.pos[1], b.pos[2]);
                scene.world.setBlock(pos, b.block, false);
                scene.world.showSection(util.select.position(pos), "DOWN");
                scene.idle(1); // Start next block while previous is still animating
            }
            
            scene.idle(5);

            const text1 = "Via Romana requires infrastructure for fast travel";
            scene.text(calculateTextDuration(text1, false), text1);
            scene.idle(calculateTextDuration(text1, false));

            scene.addKeyframe();
            
            // Add some decorative elements above (properly positioned)
            scene.world.setBlock(util.grid.at(1, 2, 2), "minecraft:oak_sign", false);
            scene.world.setBlock(util.grid.at(3, 1, 3), "minecraft:torch", false);
            scene.world.showSection(util.select.fromTo(1, 2, 2, 3, 2, 3), "DOWN");
            
            const text2 = "Unlike other fast travel mods, you must build roads and paths";
            scene.text(calculateTextDuration(text2, true), text2);
            scene.idle(calculateTextDuration(text2, true));
        })
        .scene("via_romana_path_building", "Building Infrastructure", (scene, util) => {
            scene.showBasePlate();
            scene.idle(10);

            const text1 = "Start by placing path blocks to create your road network";
            scene.text(calculateTextDuration(text1, false), text1);
            scene.idle(calculateTextDuration(text1, false));
            
            // Show multiple path blocks being placed in sequence
            const pathBlocks = [
                [1, 1, 2], [2, 1, 2], [3, 1, 2], [4, 1, 2]
            ];
            
            for (let pos of pathBlocks) {
                let blockPos = util.grid.at(pos[0], pos[1], pos[2]);
                scene.world.setBlock(blockPos, "minecraft:dirt_path", false);
                scene.world.showSection(util.select.position(blockPos), "DOWN");
                scene.particles.simple(1, "minecraft:poof", [pos[0] + 0.5, pos[1] + 0.1, pos[2] + 0.5])
                    .density(2)
                    .delta([0.15, 0.05, 0.15]);
                scene.idle(1); // 1 tick per guideline
            }

            scene.idle(3);

            scene.addKeyframe();
            
            const pathExample = util.grid.at(2, 1, 3);
            scene.world.setBlock(pathExample, "minecraft:grass_block", false);
            scene.world.showSection(util.select.position(pathExample), "DOWN");
            scene.idle(5);

            scene.showControls(30, pathExample.above(), "down")
                .rightClick()
                .withItem("minecraft:dirt_path");
            scene.idle(5);
            
            scene.world.modifyBlock(pathExample, () => Block.id("minecraft:dirt_path"), false);
            scene.particles.simple(2, "minecraft:poof", [2.5, 1.1, 3.5])
                .density(3)
                .delta([0.2, 0.05, 0.2]);
            scene.idle(10);

            const text2 = "Path blocks form the foundation of your travel network";
            scene.text(calculateTextDuration(text2, false), text2);
            scene.idle(calculateTextDuration(text2, false));
        })
        .scene("via_romana_signs", "Creating Waypoints", (scene, util) => {
            scene.showBasePlate();
            scene.idle(10);

            // Build a path first (continuous path)
            const pathPositions = [
                [1, 1, 2], [2, 1, 2], [3, 1, 2], [4, 1, 2]
            ];
            
            for (let pos of pathPositions) {
                let buildPos = util.grid.at(pos[0], pos[1], pos[2]);
                scene.world.setBlock(buildPos, "minecraft:dirt_path", false);
                scene.world.showSection(util.select.position(buildPos), "DOWN");
                scene.idle(1); // Quick succession with overlap
            }

            scene.idle(3);

            const text1 = "Place signs near your paths to create waypoint markers";
            scene.text(calculateTextDuration(text1, false), text1);
            scene.idle(calculateTextDuration(text1, false));

            // Place a stone block for the sign to sit on (next to path, not on it)
            const signBasePos = util.grid.at(2, 1, 3);
            scene.world.setBlock(signBasePos, "minecraft:cobblestone", false);
            scene.world.showSection(util.select.position(signBasePos), "DOWN");
            scene.idle(5);
            
            const signPos = util.grid.at(2, 2, 3);
            scene.showControls(30, signPos, "down")
                .rightClick()
                .withItem("minecraft:oak_sign");
            scene.idle(10);
            
            scene.world.setBlock(signPos, "minecraft:oak_sign", false);
            scene.world.showSection(util.select.position(signPos), "DOWN");
            scene.idle(10);

            scene.addKeyframe();
            
            const text2 = "You must register each waypoint by right-clicking the sign";
            scene.text(calculateTextDuration(text2, true), text2);
            scene.idle(calculateTextDuration(text2, true));
            
            scene.showControls(30, signPos.above(), "down")
                .rightClick()
                .withItem("minecraft:air");
            scene.particles.simple(3, "minecraft:happy_villager", [2.5, 2.5, 3.5])
                .density(2);
            scene.idle(15);

            const text3 = "Waypoints are personal - other players must also traverse and register them";
            scene.text(calculateTextDuration(text3, false), text3);
            scene.idle(calculateTextDuration(text3, false));
        })
        .scene("via_romana_charting", "Charting a Path", (scene, util) => {
            scene.showBasePlate();
            scene.idle(10);

            const origin = util.grid.at(1, 1, 1);
            const destination = util.grid.at(4, 1, 4);
            
            // Build the full path first
            const pathPositions = [
                [1, 1, 1], [2, 1, 1], [2, 1, 2], [3, 1, 2], 
                [3, 1, 3], [4, 1, 3], [4, 1, 4]
            ];
            
            for (let pos of pathPositions) {
                let setupPos = util.grid.at(pos[0], pos[1], pos[2]);
                scene.world.setBlock(setupPos, "minecraft:dirt_path", false);
            }
            
            // Show everything
            scene.world.showSection(util.select.fromTo(0, 1, 0, 5, 1, 5), "DOWN");
            scene.idle(10);

            const text1 = "Right-click with the Charting Map to start charting a path";
            scene.text(calculateTextDuration(text1, false), text1);
            scene.idle(calculateTextDuration(text1, false));

            scene.addKeyframe();
            scene.showControls(30, [1.5, 2, 1.5], "down")
                .rightClick()
                .withItem("via_romana:charting_map");
            scene.idle(10);

            const text2 = "You must traverse and stay on infrastructure blocks throughout your journey";
            scene.text(calculateTextDuration(text2, true), text2);
            scene.idle(calculateTextDuration(text2, true));

            // Simulate player walking along the path with particles
            for (let pos of pathPositions) {
                let walkPos = util.grid.at(pos[0], pos[1], pos[2]);
                scene.particles.simple(2, "minecraft:happy_villager", [pos[0] + 0.5, pos[1] + 1.2, pos[2] + 0.5])
                    .density(1);
                scene.idle(5);
            }

            scene.idle(5);
            
            const text3 = "Right-click again at your destination to complete the path";
            scene.text(calculateTextDuration(text3, false), text3);
            scene.idle(calculateTextDuration(text3, false));
            
            scene.showControls(30, [4.5, 2, 4.5], "down")
                .rightClick()
                .withItem("via_romana:charting_map");
            scene.idle(15);
        })
        .scene("via_romana_arrival", "Using Fast Travel", (scene, util) => {
            scene.showBasePlate();
            scene.idle(10);

            // Build path (skip where sign base will be)
            const pathPositions = [
                [1, 1, 2], [2, 1, 2], [3, 1, 2], [4, 1, 2]
            ];
            
            for (let pos of pathPositions) {
                let pathPos = util.grid.at(pos[0], pos[1], pos[2]);
                scene.world.setBlock(pathPos, "minecraft:dirt_path", false);
            }
            
            // Place stone block for sign base
            const signBasePos = util.grid.at(2, 1, 3);
            scene.world.setBlock(signBasePos, "minecraft:cobblestone", false);
            
            const signPos = util.grid.at(2, 2, 3);
            scene.world.setBlock(signPos, "minecraft:oak_sign", false);
            
            scene.world.showSection(util.select.fromTo(0, 1, 1, 5, 2, 4), "DOWN");
            scene.idle(10);

            const text1 = "Once you have charted paths and registered waypoints";
            scene.text(calculateTextDuration(text1, false), text1);
            scene.idle(calculateTextDuration(text1, false));

            scene.addKeyframe();
            
            const text2 = "You can use them for faster travel along your infrastructure network";
            scene.text(calculateTextDuration(text2, true), text2);
            scene.idle(calculateTextDuration(text2, true));
            
            const text3 = "Left-click on a waypoint sign to open the fast travel menu";
            scene.text(calculateTextDuration(text3, false), text3);
            scene.idle(calculateTextDuration(text3, false));
            
            scene.showControls(30, signPos.above(), "down")
                .leftClick()
                .withItem("minecraft:air");
            scene.particles.simple(5, "minecraft:end_rod", [2.5, 2.5, 3.5])
                .density(3);
            scene.idle(15);

            const text4 = "This balanced system encourages exploration and infrastructure building";
            scene.text(calculateTextDuration(text4, false), text4);
            scene.idle(calculateTextDuration(text4, false));
        });
});