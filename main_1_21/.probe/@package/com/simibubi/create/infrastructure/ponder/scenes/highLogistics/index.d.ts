import { $Supplier_ } from "@package/java/util/function";
import { $ParrotElementImpl } from "@package/net/createmod/ponder/foundation/element";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ParrotPose, $EntityElement, $ElementLink } from "@package/net/createmod/ponder/api/element";
import { $SceneBuildingUtil, $SceneBuilder } from "@package/net/createmod/ponder/api/scene";
import { $ChainConveyorBlockEntity } from "@package/com/simibubi/create/content/kinetics/chainConveyor";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $CreateSceneBuilder } from "@package/com/simibubi/create/foundation/ponder";

declare module "@package/com/simibubi/create/infrastructure/ponder/scenes/highLogistics" {
    export class $StockTickerScenes {
        static stockTickerAddress(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static stockTicker(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $StockLinkScenes {
        static stockLink(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $PostboxScenes {
        static postbox(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static animatePostbox(arg0: $CreateSceneBuilder, arg1: $BlockPos_, arg2: boolean): void;
        constructor();
    }
    export class $FrogAndConveyorScenes {
        static conveyor(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static frogPort(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static boxTransfer(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $ChainConveyorBlockEntity): void;
        constructor();
    }
    export class $TableClothScenes {
        static tableCloth(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $PackagerScenes {
        static packagerAddress(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static packager(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $FactoryGaugeScenes {
        static restocker(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static recipe(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static links(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static crafting(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $RepackagerScenes {
        static repackager(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $RequesterAndShopScenes {
        static requester(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $PonderHilo {
        static packagerCreate(arg0: $CreateSceneBuilder, arg1: $BlockPos_, arg2: $ItemStack_): void;
        static packagerUnpack(arg0: $CreateSceneBuilder, arg1: $BlockPos_, arg2: $ItemStack_): void;
        static packagerClear(arg0: $CreateSceneBuilder, arg1: $BlockPos_): void;
        static packageHopsOffBelt(arg0: $CreateSceneBuilder, arg1: $BlockPos_, arg2: $Direction_, arg3: $ItemStack_): $ElementLink<$EntityElement>;
        static linkEffect(arg0: $CreateSceneBuilder, arg1: $BlockPos_): void;
        static requesterEffect(arg0: $CreateSceneBuilder, arg1: $BlockPos_): void;
        constructor();
    }
    export class $FrogAndConveyorScenes$ChainConveyorParrotElement extends $ParrotElementImpl {
        constructor(arg0: $Vec3_, arg1: $Supplier_<$ParrotPose>);
    }
}
