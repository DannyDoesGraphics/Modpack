import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $DepotBlockEntity } from "@package/com/simibubi/create/content/logistics/depot";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $SyncedMountedStorage } from "@package/com/simibubi/create/api/contraption/storage";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $HolderLookup$Provider, $BlockPos_, $Holder$Reference } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $WrapperMountedItemStorage, $MountedItemStorageType, $MountedItemStorage } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/depot/storage" {
    export class $DepotMountedStorage extends $WrapperMountedItemStorage<$DepotMountedStorage$Handler> implements $SyncedMountedStorage {
        static fromDepot(arg0: $DepotBlockEntity): $DepotMountedStorage;
        setItem(arg0: $ItemStack_): void;
        afterSync(arg0: $Contraption, arg1: $BlockPos_): void;
        static fromLegacy(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $DepotMountedStorage;
        markClean(): void;
        isDirty(): boolean;
        getItem(): $ItemStack;
        static CODEC: $MapCodec<$DepotMountedStorage>;
        type: $MountedItemStorageType<$MountedItemStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedItemStorage>;
        get dirty(): boolean;
    }
    export class $DepotMountedStorage$Handler extends $ItemStackHandler {
    }
    export class $DepotMountedStorageType extends $MountedItemStorageType<$DepotMountedStorage> {
        mount(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): $DepotMountedStorage;
        codec: $MapCodec<$DepotMountedStorage>;
        static CODEC: $Codec<$MountedItemStorageType<never>>;
        holder: $Holder$Reference<$MountedItemStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedItemStorageType<never>>;
        constructor();
    }
}
