import { $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $FluidTankBlockEntity } from "@package/com/simibubi/create/content/fluids/tank";
import { $SyncedMountedStorage } from "@package/com/simibubi/create/api/contraption/storage";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $WrapperMountedFluidStorage, $MountedFluidStorage, $MountedFluidStorageType } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $HolderLookup$Provider, $BlockPos_ } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as creative from "@package/com/simibubi/create/content/fluids/tank/storage/creative";

declare module "@package/com/simibubi/create/content/fluids/tank/storage" {
    export class $FluidTankMountedStorage extends $WrapperMountedFluidStorage<$FluidTankMountedStorage$Handler> implements $SyncedMountedStorage {
        getFluid(): $FluidStack;
        afterSync(arg0: $Contraption, arg1: $BlockPos_): void;
        static fromLegacy(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $FluidTankMountedStorage;
        markClean(): void;
        static fromTank(arg0: $FluidTankBlockEntity): $FluidTankMountedStorage;
        getCapacity(): number;
        isDirty(): boolean;
        static CODEC: $MapCodec<$FluidTankMountedStorage>;
        type: $MountedFluidStorageType<$MountedFluidStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedFluidStorage>;
        get fluid(): $FluidStack;
        get capacity(): number;
        get dirty(): boolean;
    }
    export class $FluidTankMountedStorageType extends $MountedFluidStorageType<$FluidTankMountedStorage> {
        mount(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): $FluidTankMountedStorage;
        codec: $MapCodec<$FluidTankMountedStorage>;
        static CODEC: $Codec<$MountedFluidStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedFluidStorageType<never>>;
        constructor();
    }
    export class $FluidTankMountedStorage$Handler extends $FluidTank {
        constructor(arg0: number, arg1: $FluidStack_);
    }
}
