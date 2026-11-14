import { $Level } from "@package/net/minecraft/world/level";
import { $FluidApi$BlockProvider, $FluidApi$FluidStorage } from "@package/rearth/oritech/api/fluid";
import { $MultiblockMachineController } from "@package/rearth/oritech/util";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ItemApi$BlockProvider, $ItemApi$InventoryStorage } from "@package/rearth/oritech/api/item";
import { $EnergyApi$EnergyStorage, $EnergyApi$BlockProvider } from "@package/rearth/oritech/api/energy";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as pipes from "@package/rearth/oritech/block/entity/pipes";
export * as reactor from "@package/rearth/oritech/block/entity/reactor";
export * as processing from "@package/rearth/oritech/block/entity/processing";
export * as augmenter from "@package/rearth/oritech/block/entity/augmenter";
export * as interaction from "@package/rearth/oritech/block/entity/interaction";
export * as arcane from "@package/rearth/oritech/block/entity/arcane";
export * as accelerator from "@package/rearth/oritech/block/entity/accelerator";
export * as addons from "@package/rearth/oritech/block/entity/addons";
export * as storage from "@package/rearth/oritech/block/entity/storage";
export * as generators from "@package/rearth/oritech/block/entity/generators";
export * as decorative from "@package/rearth/oritech/block/entity/decorative";

declare module "@package/rearth/oritech/block/entity" {
    export class $MachineCoreEntity extends $BlockEntity implements $ItemApi$BlockProvider, $EnergyApi$BlockProvider, $FluidApi$BlockProvider {
        getControllerPos(): $BlockPos;
        setControllerPos(arg0: $BlockPos_): void;
        getCachedController(): $MultiblockMachineController;
        getFluidStorage(arg0: $Direction_): $FluidApi$FluidStorage;
        getEnergyStorage(arg0: $Direction_): $EnergyApi$EnergyStorage;
        getInventoryStorage(arg0: $Direction_): $ItemApi$InventoryStorage;
        isEnabled(): boolean;
        resetCaches(): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get cachedController(): $MultiblockMachineController;
        get enabled(): boolean;
    }
}
