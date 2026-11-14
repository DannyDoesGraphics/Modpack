import { $JsonObject_ } from "@package/com/google/gson";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Supplier } from "@package/java/util/function";
import { $MountedFluidStorageWrapper } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $List } from "@package/java/util";
import { $Object } from "@package/java/lang";
export * as neoforge from "@package/com/railwayteam/railways/content/fuel/neoforge";
export * as tank from "@package/com/railwayteam/railways/content/fuel/tank";
export * as psi from "@package/com/railwayteam/railways/content/fuel/psi";

declare module "@package/com/railwayteam/railways/content/fuel" {
    export class $LiquidFuelManager$ReloadListener extends $SimpleJsonResourceReloadListener {
        static INSTANCE: $LiquidFuelManager$ReloadListener;
        static ID: string;
    }
    export class $LiquidFuelTrainHandler {
        static isFuel(arg0: $Fluid_): boolean;
        static handleFuelDraining(arg0: $MountedFluidStorageWrapper): number;
        static isFuelForTanks(arg0: $Fluid_): boolean;
        static handleFuelChecking(arg0: $Object): number;
        static getType(arg0: $Fluid_): $LiquidFuelType;
        constructor();
    }
    export class $LiquidFuelManager {
        static fillFluidMap(): void;
        static isInTag(arg0: $Fluid_): $LiquidFuelType;
        static getTypeForFluid(arg0: $Fluid_): $LiquidFuelType;
        static clear(): void;
        constructor();
    }
    export class $LiquidFuelType {
        getFluidTags(): $List<$Supplier<$TagKey<$Fluid>>>;
        getFuelTicks(): number;
        getInvalid(): boolean;
        getFluids(): $List<$Supplier<$Fluid>>;
        static fromJson(arg0: $JsonObject_): $LiquidFuelType;
        constructor();
        get fluidTags(): $List<$Supplier<$TagKey<$Fluid>>>;
        get fuelTicks(): number;
        get invalid(): boolean;
        get fluids(): $List<$Supplier<$Fluid>>;
    }
}
