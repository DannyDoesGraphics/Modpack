/*
* START: scene.idle(10);
* BETWEEN: scene.idle(10);
* END: scene.idle(60);
*/

function fadeInSection(scene, selection, movingOffset, direction, idleTicks) {
    let link = scene.world.showIndependentSection(selection, direction);
    scene.world.moveSection(link, movingOffset, 0); // 0 to instantly move
    scene.idle(idleTicks);
}

Ponder.registry((event) => {
    event.create("bountiful:bounty").scene("Bounties", "How to use", (scene, util) => {

        scene.world.setBlocks([4, 1, 2], "bountiful:bountyboard");
        
        scene.showBasePlate();
        fadeInSection(scene, [4, 1, 2], [-2,0,0], Direction.SOUTH, 15);

        const pos = util.grid.at(2.5,1,2.5);
        scene.idle(10);
        scene
            .text(40, "This is a bounty board. You can get your bounties and recieve rewards from here", pos).placeNearTarget();

        scene.idle(50);
        scene
            .text(40, "After completing a bounty, right-click the original bounty board to claim rewards", pos).placeNearTarget().attachKeyFrame();
        scene.showControls(40, pos.above(1), "down").rightClick().withItem("bountiful:bounty");
        scene.idle(50);
    })
})