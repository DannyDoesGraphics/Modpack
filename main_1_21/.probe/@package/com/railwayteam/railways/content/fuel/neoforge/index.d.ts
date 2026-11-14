import { $MountedFluidStorageWrapper } from "@package/com/simibubi/create/api/contraption/storage/fluid";

declare module "@package/com/railwayteam/railways/content/fuel/neoforge" {
    export class $LiquidFuelTrainHandlerImpl {
        static handleFuelDraining(arg0: $MountedFluidStorageWrapper): number;
        constructor();
    }
}
