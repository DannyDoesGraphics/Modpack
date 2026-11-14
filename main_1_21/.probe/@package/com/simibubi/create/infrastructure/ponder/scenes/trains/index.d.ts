import { $SceneBuildingUtil, $SceneBuilder } from "@package/net/createmod/ponder/api/scene";

declare module "@package/com/simibubi/create/infrastructure/ponder/scenes/trains" {
    export class $TrackScenes {
        static chunks(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static placement(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static portal(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $TrainScenes {
        static schedule(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static controls(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $TrackObserverScenes {
        static observe(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $TrainSignalScenes {
        static signaling(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static redstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static placement(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $TrainStationScenes {
        static autoSchedule(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static assembly(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
}
