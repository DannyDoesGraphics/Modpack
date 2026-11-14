import { $Function_ } from "@package/java/util/function";
import { $Holder$Reference } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $IItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $WrapperMountedItemStorage, $MountedItemStorageType, $MountedItemStorage, $MountedItemStorageType_ } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/api/contraption/storage/item/simple" {
    export class $SimpleMountedStorage extends $WrapperMountedItemStorage<$ItemStackHandler> {
        static codec<T extends $SimpleMountedStorage>(arg0: $Function_<$IItemHandler, T>): $MapCodec<T>;
        static CODEC: $MapCodec<$SimpleMountedStorage>;
        type: $MountedItemStorageType<$MountedItemStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedItemStorage>;
        constructor(arg0: $MountedItemStorageType_<never>, arg1: $IItemHandler);
        constructor(arg0: $IItemHandler);
    }
    export class $SimpleMountedStorageType<T extends $SimpleMountedStorage> extends $MountedItemStorageType<$SimpleMountedStorage> {
        codec: $MapCodec<$SimpleMountedStorage>;
        static CODEC: $Codec<$MountedItemStorageType<never>>;
        holder: $Holder$Reference<$MountedItemStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedItemStorageType<never>>;
    }
    export class $SimpleMountedStorageType$Impl extends $SimpleMountedStorageType<$SimpleMountedStorage> {
        codec: $MapCodec<$SimpleMountedStorage>;
        static CODEC: $Codec<$MountedItemStorageType<never>>;
        holder: $Holder$Reference<$MountedItemStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedItemStorageType<never>>;
        constructor();
    }
}
