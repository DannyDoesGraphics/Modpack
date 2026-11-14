import { $Holder$Reference } from "@package/net/minecraft/core";
import { $SimpleMountedStorageType, $SimpleMountedStorage } from "@package/com/simibubi/create/api/contraption/storage/item/simple";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MountedItemStorageType, $MountedItemStorage } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/api/contraption/storage/item/chest" {
    export class $ChestMountedStorageType extends $SimpleMountedStorageType<$ChestMountedStorage> {
        codec: $MapCodec<$ChestMountedStorage>;
        static CODEC: $Codec<$MountedItemStorageType<never>>;
        holder: $Holder$Reference<$MountedItemStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedItemStorageType<never>>;
        constructor();
    }
    export class $ChestMountedStorage extends $SimpleMountedStorage {
        static CODEC: $MapCodec<$ChestMountedStorage>;
        type: $MountedItemStorageType<$MountedItemStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedItemStorage>;
        constructor(arg0: $IItemHandler);
    }
}
