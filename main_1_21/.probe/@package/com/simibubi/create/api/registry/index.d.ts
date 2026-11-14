import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $BlazeBurnerFuel } from "@package/com/simibubi/create/api/data/datamaps";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $PackagePortTargetType } from "@package/com/simibubi/create/content/logistics/packagePort";
import { $ContraptionType } from "@package/com/simibubi/create/api/contraption";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $ArmInteractionPointType } from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
import { $List, $List_ } from "@package/java/util";
import { $Function_ } from "@package/java/util/function";
import { $Registry, $Holder } from "@package/net/minecraft/core";
import { $MountedFluidStorageType } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $StateHolder } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ItemAttributeType } from "@package/com/simibubi/create/content/logistics/item/filter/attribute";
import { $DisplayTarget, $DisplaySource } from "@package/com/simibubi/create/api/behaviour/display";
import { $Runnable_ } from "@package/java/lang";
import { $FanProcessingType } from "@package/com/simibubi/create/content/kinetics/fan/processing";
import { $PotatoProjectileBlockHitAction, $PotatoCannonProjectileType, $PotatoProjectileEntityHitAction, $PotatoProjectileRenderMode } from "@package/com/simibubi/create/api/equipment/potatoCannon";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $MountedItemStorageType } from "@package/com/simibubi/create/api/contraption/storage/item";
export * as registrate from "@package/com/simibubi/create/api/registry/registrate";

declare module "@package/com/simibubi/create/api/registry" {
    export class $SimpleRegistry$Multi<K, V> {
        static create<K, V>(): $SimpleRegistry$Multi<K, V>;
    }
    export interface $SimpleRegistry$Multi<K, V> extends $SimpleRegistry<K, $List<V>> {
        add(arg0: K, arg1: $List_<V>): void;
        addProvider(arg0: $SimpleRegistry$Provider_<K, $List<V>>): void;
        get(arg0: $StateHolder<K, never>): $List<V>;
        get(arg0: $StateHolder<K, never>): $List<V>;
    }
    export class $CreateDataMaps {
        static REGULAR_BLAZE_BURNER_FUELS: $DataMapType<$Item, $BlazeBurnerFuel>;
        static SUPERHEATED_BLAZE_BURNER_FUELS: $DataMapType<$Item, $BlazeBurnerFuel>;
    }
    export class $SimpleRegistry$Provider<K, V> {
        static forTag<K, V>(arg0: $TagKey_<K>, arg1: $Function_<K, $Holder<K>>, arg2: V): $SimpleRegistry$Provider<K, V>;
        static forBlockTag<V>(arg0: $TagKey_<$Block>, arg1: V): $SimpleRegistry$Provider<$Block, V>;
        static forBlockEntityTag<V>(arg0: $TagKey_<$BlockEntityType<never>>, arg1: V): $SimpleRegistry$Provider<$BlockEntityType<never>, V>;
        static forItemTag<V>(arg0: $TagKey_<$Item>, arg1: V): $SimpleRegistry$Provider<$Item, V>;
        static forEntityTag<V>(arg0: $TagKey_<$EntityType<never>>, arg1: V): $SimpleRegistry$Provider<$EntityType<never>, V>;
        static forFluidTag<V>(arg0: $TagKey_<$Fluid>, arg1: V): $SimpleRegistry$Provider<$Fluid, V>;
    }
    export interface $SimpleRegistry$Provider<K, V> {
        get(arg0: K): V;
        onRegister(arg0: $Runnable_): void;
    }
    /**
     * Values that may be interpreted as {@link $SimpleRegistry$Provider}.
     */
    export type $SimpleRegistry$Provider_<K, V> = ((arg0: K) => V);
    export class $CreateRegistries {
        static DISPLAY_TARGET: $ResourceKey<$Registry<$DisplayTarget>>;
        static ITEM_ATTRIBUTE_TYPE: $ResourceKey<$Registry<$ItemAttributeType>>;
        static CONTRAPTION_TYPE: $ResourceKey<$Registry<$ContraptionType>>;
        static PACKAGE_PORT_TARGET_TYPE: $ResourceKey<$Registry<$PackagePortTargetType>>;
        static POTATO_PROJECTILE_ENTITY_HIT_ACTION: $ResourceKey<$Registry<$MapCodec<$PotatoProjectileEntityHitAction>>>;
        static FAN_PROCESSING_TYPE: $ResourceKey<$Registry<$FanProcessingType>>;
        static MOUNTED_FLUID_STORAGE_TYPE: $ResourceKey<$Registry<$MountedFluidStorageType<never>>>;
        static MOUNTED_ITEM_STORAGE_TYPE: $ResourceKey<$Registry<$MountedItemStorageType<never>>>;
        static POTATO_PROJECTILE_TYPE: $ResourceKey<$Registry<$PotatoCannonProjectileType>>;
        static DISPLAY_SOURCE: $ResourceKey<$Registry<$DisplaySource>>;
        static POTATO_PROJECTILE_BLOCK_HIT_ACTION: $ResourceKey<$Registry<$MapCodec<$PotatoProjectileBlockHitAction>>>;
        static ARM_INTERACTION_POINT_TYPE: $ResourceKey<$Registry<$ArmInteractionPointType>>;
        static POTATO_PROJECTILE_RENDER_MODE: $ResourceKey<$Registry<$MapCodec<$PotatoProjectileRenderMode>>>;
    }
    export class $CreateBuiltInRegistries {
        static init(): void;
        static DISPLAY_TARGET: $Registry<$DisplayTarget>;
        static MOUNTED_ITEM_STORAGE_TYPE: $Registry<$MountedItemStorageType<never>>;
        static ITEM_ATTRIBUTE_TYPE: $Registry<$ItemAttributeType>;
        static CONTRAPTION_TYPE: $Registry<$ContraptionType>;
        static DISPLAY_SOURCE: $Registry<$DisplaySource>;
        static POTATO_PROJECTILE_BLOCK_HIT_ACTION: $Registry<$MapCodec<$PotatoProjectileBlockHitAction>>;
        static ARM_INTERACTION_POINT_TYPE: $Registry<$ArmInteractionPointType>;
        static PACKAGE_PORT_TARGET_TYPE: $Registry<$PackagePortTargetType>;
        static POTATO_PROJECTILE_ENTITY_HIT_ACTION: $Registry<$MapCodec<$PotatoProjectileEntityHitAction>>;
        static FAN_PROCESSING_TYPE: $Registry<$FanProcessingType>;
        static MOUNTED_FLUID_STORAGE_TYPE: $Registry<$MountedFluidStorageType<never>>;
        static POTATO_PROJECTILE_RENDER_MODE: $Registry<$MapCodec<$PotatoProjectileRenderMode>>;
    }
    export class $SimpleRegistry<K, V> {
        static create<K, V>(): $SimpleRegistry<K, V>;
    }
    export interface $SimpleRegistry<K, V> {
        registerProvider(arg0: $SimpleRegistry$Provider_<K, V>): void;
        get(arg0: $StateHolder<K, never>): V;
        get(arg0: K): V;
        register(arg0: K, arg1: V): void;
        invalidate(): void;
    }
}
