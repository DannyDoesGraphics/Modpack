import { $SceneBuildingUtil, $SceneBuilder } from "@package/net/createmod/ponder/api/scene";

declare module "@package/com/simibubi/create/infrastructure/ponder/scenes/fluid" {
    export class $FluidMovementActorScenes {
        static transfer(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $PumpScenes {
        static flow(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static speed(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $FluidTankScenes {
        static sizes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static storage(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static creative(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $SpoutScenes {
        static filling(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $PipeScenes {
        static encasing(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static interaction(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static smart(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static valve(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static flow(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $HosePulleyScenes {
        static intro(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static infinite(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static level(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $DrainScenes {
        static emptying(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
}
