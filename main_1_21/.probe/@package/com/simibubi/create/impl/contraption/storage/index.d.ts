import { $Holder$Reference } from "@package/net/minecraft/core";
import { $SimpleMountedStorageType, $SimpleMountedStorage } from "@package/com/simibubi/create/api/contraption/storage/item/simple";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $SimpleRegistry$Provider, $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Runnable_, $Enum } from "@package/java/lang";
import { $MountedItemStorageType, $MountedItemStorage } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/impl/contraption/storage" {
    export class $FallbackMountedStorageType extends $SimpleMountedStorageType<$FallbackMountedStorage> {
        codec: $MapCodec<$FallbackMountedStorage>;
        static CODEC: $Codec<$MountedItemStorageType<never>>;
        holder: $Holder$Reference<$MountedItemStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedItemStorageType<never>>;
        constructor();
    }
    export class $MountedItemStorageFallbackProvider extends $Enum<$MountedItemStorageFallbackProvider> implements $SimpleRegistry$Provider<$Block, $MountedItemStorageType<never>> {
        get(arg0: $Block_): $MountedItemStorageType<never>;
        static values(): $MountedItemStorageFallbackProvider[];
        static valueOf(arg0: string): $MountedItemStorageFallbackProvider;
        onRegister(arg0: $Runnable_): void;
        static INSTANCE: $MountedItemStorageFallbackProvider;
    }
    /**
     * Values that may be interpreted as {@link $MountedItemStorageFallbackProvider}.
     */
    export type $MountedItemStorageFallbackProvider_ = "instance";
    export class $FallbackMountedStorage extends $SimpleMountedStorage {
        static isValid(arg0: $IItemHandler): boolean;
        static CODEC: $MapCodec<$FallbackMountedStorage>;
        type: $MountedItemStorageType<$MountedItemStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedItemStorage>;
        constructor(arg0: $IItemHandler);
    }
}
