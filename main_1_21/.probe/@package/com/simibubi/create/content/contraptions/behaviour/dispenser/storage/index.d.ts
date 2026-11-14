import { $Holder$Reference } from "@package/net/minecraft/core";
import { $SimpleMountedStorageType, $SimpleMountedStorage } from "@package/com/simibubi/create/api/contraption/storage/item/simple";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MountedItemStorageType, $MountedItemStorage } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/contraptions/behaviour/dispenser/storage" {
    export class $DispenserMountedStorage extends $SimpleMountedStorage {
        static CODEC: $MapCodec<$DispenserMountedStorage>;
        type: $MountedItemStorageType<$MountedItemStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedItemStorage>;
        constructor(arg0: $IItemHandler);
    }
    export class $DispenserMountedStorageType extends $SimpleMountedStorageType<$DispenserMountedStorage> {
        codec: $MapCodec<$DispenserMountedStorage>;
        static CODEC: $Codec<$MountedItemStorageType<never>>;
        holder: $Holder$Reference<$MountedItemStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedItemStorageType<never>>;
        constructor();
    }
}
