import { $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $NonNullUnaryOperator } from "@package/com/tterrag/registrate/util/nullness";
import { $BlockBuilder } from "@package/com/tterrag/registrate/builders";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $RegistryEntry } from "@package/com/tterrag/registrate/util/entry";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $CombinedTankWrapper } from "@package/com/simibubi/create/foundation/fluid";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/api/contraption/storage/fluid" {
    export interface $MountedFluidStorageType<T> extends RegistryMarked<RegistryTypes.CreateMountedFluidStorageTypeTag, RegistryTypes.CreateMountedFluidStorageType> {}
    export class $MountedFluidStorageType<T extends $MountedFluidStorage> {
        static mountedFluidStorage<B extends $Block, P>(arg0: $RegistryEntry<$MountedFluidStorageType_<never>, $MountedFluidStorageType_<never>>): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        mount(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): T;
        codec: $MapCodec<T>;
        static CODEC: $Codec<$MountedFluidStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedFluidStorageType<never>>;
    }
    /**
     * Values that may be interpreted as {@link $MountedFluidStorageType}.
     */
    export type $MountedFluidStorageType_<T> = RegistryTypes.CreateMountedFluidStorageType;
    export class $WrapperMountedFluidStorage<T extends $IFluidHandler> extends $MountedFluidStorage {
        static CODEC: $Codec<$MountedFluidStorage>;
        type: $MountedFluidStorageType<$MountedFluidStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedFluidStorage>;
    }
    export class $MountedFluidStorage implements $IFluidHandler {
        unmount(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): void;
        static CODEC: $Codec<$MountedFluidStorage>;
        type: $MountedFluidStorageType<$MountedFluidStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedFluidStorage>;
    }
    export class $MountedFluidStorageWrapper extends $CombinedTankWrapper {
        storages: $ImmutableMap<$BlockPos, $MountedFluidStorage>;
        constructor(arg0: $ImmutableMap<$BlockPos_, $MountedFluidStorage>);
    }
}
