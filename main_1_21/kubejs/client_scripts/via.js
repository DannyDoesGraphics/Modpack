// Via Romana
Ponder.tags((event) => {
    event.createTag("dam:via_romana", "viaromana:charting_map", "Via Romana", "Balanced infrastructure-based fast travel", [
        "viaromana:charting_map"
    ]);
});

Ponder.registry((event) => {
    event
        .create("viaromana:charting_map")
        .tag("dam:via_romana")
        .scene("via_romana_intro", "Infrastructure-Based Fast Travel", (scene, util) => {
            scene.showStructure();
            scene.idle(10);

            const originPos = util.grid.at(1, 1, 1);
            
            scene.world.showSection(util.select.position(originPos), "DOWN");
            scene.idle(10);

            scene.text(60, "Via Romana requires infrastructure for fast travel", originPos.above())
                .placeNearTarget()
                .colored(0x9B59B6);
            scene.idle(70);

            scene.addKeyframe();
            scene.text(50, "Unlike other fast travel mods, you must build roads and paths", originPos.above())
                .placeNearTarget();
            scene.idle(60);
        })
        .scene("via_romana_path_building", "Building Infrastructure", (scene, util) => {
            scene.showStructure();
            scene.idle(10);

            const pathStart = util.grid.at(1, 1, 1);
            const pathExample = util.grid.at(2, 1, 1);
            
            scene.text(60, "Start by placing path blocks to create your road network", pathStart.above())
                .placeNearTarget()
                .colored(0xE67E22);
            scene.idle(70);

            scene.addKeyframe();
            scene.world.showSection(util.select.position(pathExample), "DOWN");
            scene.idle(10);

            scene.showControls(80, pathExample.above(), "down")
                .rightClick()
                .withItem("minecraft:dirt_path");
            scene.idle(20);

            scene.text(50, "Path blocks form the foundation of your travel network", pathExample.above())
                .placeNearTarget();
            scene.idle(60);
        })
        .scene("via_romana_signs", "Placing Signs", (scene, util) => {
            scene.showStructure();
            scene.idle(10);

            const originSign = util.grid.at(1, 1, 1);
            const destSign = util.grid.at(4, 1, 4);
            
            scene.world.showSection(util.select.position(originSign), "DOWN");
            scene.idle(10);

            scene.text(60, "Place signs at your origin point...", originSign.above())
                .placeNearTarget()
                .colored(0x3498DB);
            scene.idle(50);

            scene.showControls(60, originSign.above(), "down")
                .rightClick()
                .withItem("minecraft:oak_sign");
            scene.idle(70);

            scene.addKeyframe();
            
            // Show path being built across the map
            for (let i = 1; i <= 4; i++) {
                scene.world.showSection(util.select.position(util.grid.at(i, 1, i)), "DOWN");
                scene.idle(5);
            }

            scene.idle(20);

            scene.world.showSection(util.select.position(destSign), "DOWN");
            scene.idle(10);

            scene.text(60, "...and at your destination", destSign.above())
                .placeNearTarget()
                .colored(0x2ECC71);
            scene.idle(70);
        })
        .scene("via_romana_charting", "Charting the Route", (scene, util) => {
            scene.showStructure();
            scene.idle(10);

            const origin = util.grid.at(1, 1, 1);
            const destination = util.grid.at(4, 1, 4);
            
            scene.world.showSection(util.select.position(origin), "DOWN");
            scene.idle(10);

            scene.text(60, "To create a path between two signs, use a Charting Map", origin.above())
                .placeNearTarget()
                .colored(0xF39C12);
            scene.idle(70);

            scene.addKeyframe();
            scene.showControls(80, origin.above(), "down")
                .rightClick()
                .withItem("viaromana:charting_map");
            scene.idle(30);

            scene.text(70, "You must traverse and stay on infrastructure blocks throughout your journey", [2.5, 2, 2.5])
                .independent()
                .colored(0xE74C3C);
            scene.idle(80);

            // Show path highlighting
            for (let i = 1; i <= 4; i++) {
                scene.world.showSection(util.select.position(util.grid.at(i, 1, i)), "DOWN");
                scene.idle(5);
            }

            scene.idle(20);
            scene.text(50, "The Charting Map records your journey along the infrastructure", [2.5, 2.5, 2.5])
                .independent();
            scene.idle(60);
        })
        .scene("via_romana_arrival", "Completing the Route", (scene, util) => {
            scene.showStructure();
            scene.idle(10);

            const destination = util.grid.at(2, 1, 2);
            const signPos = util.grid.at(2, 2, 2);
            
            scene.world.showSection(util.select.position(destination), "DOWN");
            scene.world.showSection(util.select.position(signPos), "DOWN");
            scene.idle(20);

            scene.text(60, "Once you arrive at the destination sign...", signPos.above())
                .placeNearTarget()
                .colored(0x2ECC71);
            scene.idle(70);

            scene.addKeyframe();
            scene.showControls(60, signPos.above(), "down")
                .rightClick()
                .withItem("viaromana:charting_map");
            scene.idle(70);

            scene.text(50, "The route is now charted and unlocked for faster travel!", signPos.above())
                .placeNearTarget()
                .colored(0xF39C12);
            scene.idle(60);

            scene.text(50, "This balanced system encourages exploration and infrastructure building", [2.5, 2.5, 2.5])
                .independent();
            scene.idle(60);
        });
});