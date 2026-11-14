import { $Level_ } from "@package/net/minecraft/world/level";
import { $WrapperMountedFluidStorage, $MountedFluidStorage, $MountedFluidStorageType } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $HolderLookup$Provider, $BlockPos_ } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $CreativeFluidTankBlockEntity$CreativeSmartFluidTank, $CreativeFluidTankBlockEntity } from "@package/com/simibubi/create/content/fluids/tank";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/fluids/tank/storage/creative" {
    export class $CreativeFluidTankMountedStorageType extends $MountedFluidStorageType<$CreativeFluidTankMountedStorage> {
        mount(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): $CreativeFluidTankMountedStorage;
        codec: $MapCodec<$CreativeFluidTankMountedStorage>;
        static CODEC: $Codec<$MountedFluidStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedFluidStorageType<never>>;
        constructor();
    }
    export class $CreativeFluidTankMountedStorage extends $WrapperMountedFluidStorage<$CreativeFluidTankBlockEntity$CreativeSmartFluidTank> {
        static fromLegacy(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $CreativeFluidTankMountedStorage;
        static fromTank(arg0: $CreativeFluidTankBlockEntity): $CreativeFluidTankMountedStorage;
        static CODEC: $MapCodec<$CreativeFluidTankMountedStorage>;
        type: $MountedFluidStorageType<$MountedFluidStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedFluidStorage>;
    }
}
