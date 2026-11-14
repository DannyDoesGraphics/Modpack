import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $DyeColor_ } from "@package/net/minecraft/world/item";
import { $SceneBuildingUtil, $SceneBuilder } from "@package/net/createmod/ponder/api/scene";
import { $EntityElement, $ElementLink } from "@package/net/createmod/ponder/api/element";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/railwayteam/railways/ponder/scenes" {
    export class $TrainScenes {
        static signaling(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static movePlate(arg0: $SceneBuilder, arg1: $SceneBuildingUtil, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number): void;
        static coupleTrain(arg0: $SceneBuilder, arg1: $BlockPos_, arg2: number, arg3: $Direction_): void;
        static decoupleTrain(arg0: $SceneBuilder, arg1: $BlockPos_): void;
        static trackSwitch(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static coupling(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $DoorScenes {
        static modes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $ConductorScenes {
        static makePlayerStand(arg0: $SceneBuilder, arg1: string, arg2: number, arg3: $Vec3_): $ElementLink<$EntityElement>;
        static constructing(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static redstoning(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static toolboxing(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static makeConductor(arg0: $SceneBuilder, arg1: $DyeColor_, arg2: $Vec3_): $ElementLink<$EntityElement>;
        constructor();
    }
}
