import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $BlockBuilder } from "@package/com/tterrag/registrate/builders";
import { $Container } from "@package/net/minecraft/world";
import { $RegistryEntry } from "@package/com/tterrag/registrate/util/entry";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos, $BlockPos_, $Holder$Reference } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $IItemHandler, $IItemHandlerModifiable, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $NonNullUnaryOperator } from "@package/com/tterrag/registrate/util/nullness";
import { $CombinedInvWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as menu from "@package/com/simibubi/create/api/contraption/storage/item/menu";
export * as simple from "@package/com/simibubi/create/api/contraption/storage/item/simple";
export * as chest from "@package/com/simibubi/create/api/contraption/storage/item/chest";

declare module "@package/com/simibubi/create/api/contraption/storage/item" {
    export class $MountedItemStorageWrapper extends $CombinedInvWrapper {
        storages: $ImmutableMap<$BlockPos, $MountedItemStorage>;
        constructor(arg0: $ImmutableMap<$BlockPos_, $MountedItemStorage>);
    }
    export class $WrapperMountedItemStorage<T extends $IItemHandlerModifiable> extends $MountedItemStorage {
        static copyToItemStackHandler(arg0: $IItemHandler): $ItemStackHandler;
        static CODEC: $Codec<$MountedItemStorage>;
        type: $MountedItemStorageType<$MountedItemStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedItemStorage>;
    }
    export interface $MountedItemStorageType<T> extends RegistryMarked<RegistryTypes.CreateMountedItemStorageTypeTag, RegistryTypes.CreateMountedItemStorageType> {}
    export class $MountedItemStorage implements $IItemHandlerModifiable {
        wrapMethod$eeg000$offroad$wrapHandler(arg0: $StructureTemplate$StructureBlockInfo_, arg1: $Contraption, arg2: $Operation_<any>): $IItemHandlerModifiable;
        handleInteraction(arg0: $ServerPlayer, arg1: $Contraption, arg2: $StructureTemplate$StructureBlockInfo_): boolean;
        unmount(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): void;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        isEmpty(): boolean;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        static CODEC: $Codec<$MountedItemStorage>;
        type: $MountedItemStorageType<$MountedItemStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedItemStorage>;
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get slots(): number;
    }
    export class $MountedItemStorageType<T extends $MountedItemStorage> {
        static mountedItemStorage<B extends $Block, P>(arg0: $RegistryEntry<$MountedItemStorageType_<never>, $MountedItemStorageType_<never>>): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        mount(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): T;
        is(arg0: $TagKey_<$MountedItemStorageType<never>>): boolean;
        codec: $MapCodec<T>;
        static CODEC: $Codec<$MountedItemStorageType<never>>;
        holder: $Holder$Reference<$MountedItemStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedItemStorageType<never>>;
    }
    /**
     * Values that may be interpreted as {@link $MountedItemStorageType}.
     */
    export type $MountedItemStorageType_<T> = RegistryTypes.CreateMountedItemStorageType;
}
