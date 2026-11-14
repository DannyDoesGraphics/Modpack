import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $TagsProvider } from "@package/net/minecraft/data/tags";
import { $ItemColor } from "@package/net/minecraft/client/color/item";
import { $MobCategory_, $EntityType, $SpawnPlacements$SpawnPredicate_, $SpawnPlacementType_, $Entity, $EntityType$EntityFactory_, $EntityType$Builder } from "@package/net/minecraft/world/entity";
import { $FluidType_, $BaseFlowingFluid, $FluidType, $BaseFlowingFluid$Flowing, $BaseFlowingFluid$Properties, $FluidType$Properties } from "@package/net/neoforged/neoforge/fluids";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $IClientBlockExtensions, $IClientItemExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $Supplier_, $Consumer_, $Function_, $Supplier } from "@package/java/util/function";
import { $BlockEntry, $FluidEntry, $EntityEntry, $RegistryEntry, $MenuEntry } from "@package/com/tterrag/registrate/util/entry";
import { $BlockPos, $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockColor } from "@package/net/minecraft/client/color/block";
import { $CreativeModeTabModifier } from "@package/com/tterrag/registrate/util";
import { $BlockEntityRendererProvider$Context, $BlockEntityRenderer } from "@package/net/minecraft/client/renderer/blockentity";
import { $RegistrateBlockstateProvider, $RegistrateProvider, $RegistrateItemModelProvider, $RegistrateRecipeProvider, $DataGenContext, $ProviderType_ } from "@package/com/tterrag/registrate/providers";
import { $MenuType, $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $EntityRendererProvider$Context, $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $CreativeModeTab, $Item, $Item$Properties, $BucketItem, $BlockItem, $SpawnEggItem } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $RegistrateEntityLootTables, $RegistrateBlockLootTables } from "@package/com/tterrag/registrate/providers/loot";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $NonNullUnaryOperator_, $NonNullFunction_, $NonNullBiConsumer_, $NonNullFunction, $NonNullSupplier_, $NonNullConsumer_, $NonNullBiFunction_, $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $RegisterSpawnPlacementsEvent$Operation_ } from "@package/net/neoforged/neoforge/event/entity";
import { $LiquidBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntityType_, $BlockEntity, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/tterrag/registrate/builders" {
    export class $FluidBuilder$FluidTypeFactory {
    }
    export interface $FluidBuilder$FluidTypeFactory {
        create(arg0: $FluidType$Properties, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $FluidType;
    }
    /**
     * Values that may be interpreted as {@link $FluidBuilder$FluidTypeFactory}.
     */
    export type $FluidBuilder$FluidTypeFactory_ = ((arg0: $FluidType$Properties, arg1: $ResourceLocation, arg2: $ResourceLocation) => $FluidType_);
    export class $ItemBuilder<T extends $Item, P> extends $AbstractBuilder<$Item, T, P, $ItemBuilder<T, P>> {
        burnTime(arg0: number): $ItemBuilder<T, P>;
        initialProperties(arg0: $NonNullSupplier_<$Item$Properties>): $ItemBuilder<T, P>;
        defaultLang(): $ItemBuilder<T, P>;
        defaultModel(): $ItemBuilder<T, P>;
        removeTab(arg0: $ResourceKey_<$CreativeModeTab>): $ItemBuilder<T, P>;
        compostable(arg0: number): $ItemBuilder<T, P>;
        /**
         * @deprecated
         */
        clientExtension(arg0: $Function_<T, $NonNullSupplier<$Supplier<$IClientItemExtensions>>>): $ItemBuilder<T, P>;
        clientExtension(arg0: $NonNullSupplier_<$Supplier<$IClientItemExtensions>>): $ItemBuilder<T, P>;
        model(arg0: $NonNullBiConsumer_<$DataGenContext<$Item, T>, $RegistrateItemModelProvider>): $ItemBuilder<T, P>;
        properties(arg0: $NonNullUnaryOperator_<$Item$Properties>): $ItemBuilder<T, P>;
        /**
         * @deprecated
         */
        tab(arg0: $ResourceKey_<$CreativeModeTab>, arg1: $Consumer_<$CreativeModeTabModifier>): $ItemBuilder<T, P>;
        tab(arg0: $ResourceKey_<$CreativeModeTab>, arg1: $NonNullBiConsumer_<$DataGenContext<$Item, T>, $CreativeModeTabModifier>): $ItemBuilder<T, P>;
        tab(arg0: $ResourceKey_<$CreativeModeTab>): $ItemBuilder<T, P>;
        static create<T extends $Item, P>(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $NonNullFunction_<$Item$Properties, T>): $ItemBuilder<T, P>;
        color(arg0: $NonNullSupplier_<$Supplier<$ItemColor>>): $ItemBuilder<T, P>;
        lang(arg0: string): $ItemBuilder<T, P>;
        recipe(arg0: $NonNullBiConsumer_<$DataGenContext<$Item, T>, $RegistrateRecipeProvider>): $ItemBuilder<T, P>;
        tag(...arg0: $TagKey_<$Item>[]): $ItemBuilder<T, P>;
    }
    export class $MenuBuilder<T extends $AbstractContainerMenu, S extends $Screen, P> extends $AbstractBuilder<$MenuType<never>, $MenuType<T>, P, $MenuBuilder<T, S, P>> {
        register(): $MenuEntry<$MenuType<T>>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $MenuBuilder$ForgeMenuFactory_<$MenuType<T>>, arg5: $NonNullSupplier_<$MenuBuilder$ScreenFactory<$MenuType<T>, $MenuBuilder<T, S, P>>>);
        constructor(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $MenuBuilder$MenuFactory_<$MenuType<T>>, arg5: $NonNullSupplier_<$MenuBuilder$ScreenFactory<$MenuType<T>, $MenuBuilder<T, S, P>>>);
    }
    export class $FluidBuilder<T extends $BaseFlowingFluid, P> extends $AbstractBuilder<$Fluid, T, P, $FluidBuilder<T, P>> {
        renderType(arg0: $Supplier_<$Supplier<$RenderType>>): $FluidBuilder<T, P>;
        defaultLang(): $FluidBuilder<T, P>;
        defaultSource(): $FluidBuilder<T, P>;
        defaultBlock(): $FluidBuilder<T, P>;
        defaultBucket(): $FluidBuilder<T, P>;
        fluidProperties(arg0: $NonNullConsumer_<$BaseFlowingFluid$Properties>): $FluidBuilder<T, P>;
        noBlock(): $FluidBuilder<T, P>;
        noBucket(): $FluidBuilder<T, P>;
        bucket<I extends $BucketItem>(arg0: $NonNullBiFunction_<$BaseFlowingFluid, $Item$Properties, I>): $ItemBuilder<I, $FluidBuilder<T, P>>;
        bucket(): $ItemBuilder<$BucketItem, $FluidBuilder<T, P>>;
        register(): $FluidEntry<T>;
        source(arg0: $NonNullFunction_<$BaseFlowingFluid$Properties, $BaseFlowingFluid>): $FluidBuilder<T, P>;
        properties(arg0: $NonNullConsumer_<$FluidType$Properties>): $FluidBuilder<T, P>;
        static create<T extends $BaseFlowingFluid, P>(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $ResourceLocation_, arg5: $ResourceLocation_, arg6: $NonNullSupplier_<$FluidType>, arg7: $NonNullFunction_<$BaseFlowingFluid$Properties, T>): $FluidBuilder<T, P>;
        static create<T extends $BaseFlowingFluid, P>(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $ResourceLocation_, arg5: $ResourceLocation_, arg6: $FluidBuilder$FluidTypeFactory_, arg7: $NonNullFunction_<$BaseFlowingFluid$Properties, T>): $FluidBuilder<T, P>;
        static create<P>(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $ResourceLocation_, arg5: $ResourceLocation_, arg6: $NonNullSupplier_<$FluidType>): $FluidBuilder<$BaseFlowingFluid$Flowing, P>;
        static create<T extends $BaseFlowingFluid, P>(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $ResourceLocation_, arg5: $ResourceLocation_, arg6: $NonNullFunction_<$BaseFlowingFluid$Properties, T>): $FluidBuilder<T, P>;
        static create<P>(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $ResourceLocation_, arg5: $ResourceLocation_): $FluidBuilder<$BaseFlowingFluid$Flowing, P>;
        static create<P>(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $ResourceLocation_, arg5: $ResourceLocation_, arg6: $FluidBuilder$FluidTypeFactory_): $FluidBuilder<$BaseFlowingFluid$Flowing, P>;
        block<B extends $LiquidBlock>(arg0: $NonNullBiFunction_<T, $BlockBehaviour$Properties, B>): $BlockBuilder<B, $FluidBuilder<T, P>>;
        block(): $BlockBuilder<$LiquidBlock, $FluidBuilder<T, P>>;
        lang(arg0: string): $FluidBuilder<T, P>;
        tag(...arg0: $TagKey_<$Fluid>[]): $FluidBuilder<T, P>;
        removeTag(...arg0: $TagKey_<$Fluid>[]): $FluidBuilder<T, P>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $ResourceLocation_, arg5: $ResourceLocation_, arg6: $FluidBuilder$FluidTypeFactory_, arg7: $NonNullFunction_<$BaseFlowingFluid$Properties, T>);
        constructor(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $ResourceLocation_, arg5: $ResourceLocation_, arg6: $NonNullSupplier_<$FluidType>, arg7: $NonNullFunction_<$BaseFlowingFluid$Properties, T>);
    }
    export class $AbstractBuilder<R, T extends R, P, S extends $AbstractBuilder<R, T, P, S>> implements $Builder<R, T, P, S> {
        asSupplier(): $NonNullSupplier<T>;
        asOptional(): S;
        getRegistryKey(): $ResourceKey<$Registry<R>>;
        getName(): string;
        register(): $RegistryEntry<R, T>;
        getParent(): P;
        lang(arg0: $NonNullFunction_<T, string>): S;
        lang(arg0: $NonNullFunction_<T, string>, arg1: string): S;
        getOwner(): $AbstractRegistrate<never>;
        tag<TP extends $TagsProvider<R>>(arg0: $ProviderType_<TP>, ...arg1: $TagKey_<R>[]): S;
        removeTag<TP extends $TagsProvider<R>>(arg0: $ProviderType_<TP>, ...arg1: $TagKey_<R>[]): S;
        addMiscData<D extends $RegistrateProvider>(arg0: $ProviderType_<D>, arg1: $NonNullConsumer_<D>): S;
        dataMap<D>(arg0: $DataMapType<R, D>, arg1: D): S;
        dataMap<D>(arg0: $DataMapType<R, D>, arg1: $NonNullFunction_<$DataGenContext<R, T>, D>): S;
        onRegisterAfter<OR>(arg0: $ResourceKey_<$Registry<OR>>, arg1: $NonNullConsumer_<T>): S;
        get(): $RegistryEntry<R, T>;
        transform<R2, T2 extends R2, P2, S2 extends $Builder<R2, T2, P2, S2>>(arg0: $NonNullFunction_<S, S2>): S2;
        build(): P;
        getEntry(): T;
        onRegister(arg0: $NonNullConsumer_<T>): S;
        setData<D extends $RegistrateProvider>(arg0: $ProviderType_<D>, arg1: $NonNullBiConsumer_<$DataGenContext<R, T>, D>): S;
        lazy(): $NonNullSupplier<T>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $ResourceKey_<$Registry<R>>);
        get registryKey(): $ResourceKey<$Registry<R>>;
        get name(): string;
        get parent(): P;
        get owner(): $AbstractRegistrate<never>;
        get entry(): T;
    }
    export class $MenuBuilder$MenuFactory<T extends $AbstractContainerMenu> {
    }
    export interface $MenuBuilder$MenuFactory<T extends $AbstractContainerMenu> {
        create(arg0: $MenuType_<T>, arg1: number, arg2: $Inventory): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuBuilder$MenuFactory}.
     */
    export type $MenuBuilder$MenuFactory_<T> = ((arg0: $MenuType<T>, arg1: number, arg2: $Inventory) => T);
    export class $BuilderCallback {
    }
    export interface $BuilderCallback {
        accept<R, T extends R>(arg0: string, arg1: $ResourceKey_<$Registry<R>>, arg2: $Builder<R, T, never, never>, arg3: $NonNullSupplier_<T>, arg4: $NonNullFunction_<$DeferredHolder<R, T>, $RegistryEntry<R, T>>): $RegistryEntry<R, T>;
        accept<R, T extends R>(arg0: string, arg1: $ResourceKey_<$Registry<R>>, arg2: $Builder<R, T, never, never>, arg3: $NonNullSupplier_<T>): $RegistryEntry<R, T>;
    }
    /**
     * Values that may be interpreted as {@link $BuilderCallback}.
     */
    export type $BuilderCallback_ = ((arg0: string, arg1: $ResourceKey<$Registry<any>>, arg2: $Builder<any, any, never, never>, arg3: $NonNullSupplier<any>, arg4: $NonNullFunction<$DeferredHolder<any, any>, $RegistryEntry<any, any>>) => $RegistryEntry<any, any>);
    export class $EntityBuilder<T extends $Entity, P> extends $AbstractBuilder<$EntityType<never>, $EntityType<T>, P, $EntityBuilder<T, P>> {
        defaultLang(): $EntityBuilder<$EntityType<T>, P>;
        spawnPlacement(arg0: $SpawnPlacementType_, arg1: $Heightmap$Types_, arg2: $SpawnPlacements$SpawnPredicate_<$EntityType<T>>, arg3: $RegisterSpawnPlacementsEvent$Operation_): $EntityBuilder<$EntityType<T>, P>;
        /**
         * @deprecated
         */
        defaultSpawnEgg(arg0: number, arg1: number): $EntityBuilder<$EntityType<T>, P>;
        loot(arg0: $NonNullBiConsumer_<$RegistrateEntityLootTables, $EntityType<$EntityType<T>>>): $EntityBuilder<$EntityType<T>, P>;
        /**
         * @deprecated
         */
        spawnEgg(arg0: number, arg1: number): $ItemBuilder<$SpawnEggItem, $EntityBuilder<$EntityType<T>, P>>;
        renderer(arg0: $NonNullSupplier_<$NonNullFunction<$EntityRendererProvider$Context, $EntityRenderer<$EntityType<T>>>>): $EntityBuilder<$EntityType<T>, P>;
        register(): $EntityEntry<$EntityType<T>>;
        properties(arg0: $NonNullConsumer_<$EntityType$Builder<$EntityType<T>>>): $EntityBuilder<$EntityType<T>, P>;
        static create<T extends $Entity, P>(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $EntityType$EntityFactory_<T>, arg5: $MobCategory_): $EntityBuilder<T, P>;
        lang(arg0: string): $EntityBuilder<$EntityType<T>, P>;
        attributes(arg0: $Supplier_<$AttributeSupplier$Builder>): $EntityBuilder<$EntityType<T>, P>;
        tag(...arg0: $TagKey_<$EntityType<never>>[]): $EntityBuilder<$EntityType<T>, P>;
    }
    export class $Builder<R, T extends R, P, S extends $Builder<R, T, P, S>> {
    }
    export interface $Builder<R, T extends R, P, S extends $Builder<R, T, P, S>> extends $NonNullSupplier<$RegistryEntry<R, T>> {
        asSupplier(): $NonNullSupplier<$RegistryEntry<R, T>>;
        addMiscData<D extends $RegistrateProvider>(arg0: $ProviderType_<D>, arg1: $NonNullConsumer_<D>): S;
        dataMap<D>(arg0: $DataMapType<R, D>, arg1: D): S;
        dataMap<D>(arg0: $DataMapType<R, D>, arg1: $NonNullFunction_<$DataGenContext<R, $RegistryEntry<R, T>>, D>): S;
        onRegisterAfter<OR>(arg0: $ResourceKey_<$Registry<OR>>, arg1: $NonNullConsumer_<$RegistryEntry<R, T>>): S;
        getRegistryKey(): $ResourceKey<$Registry<R>>;
        getName(): string;
        get(): $RegistryEntry<R, $RegistryEntry<R, T>>;
        transform<R2, T2 extends R2, P2, S2 extends $Builder<R2, T2, P2, S2>>(arg0: $NonNullFunction_<S, S2>): S2;
        register(): $RegistryEntry<R, $RegistryEntry<R, T>>;
        getParent(): P;
        build(): P;
        getOwner(): $AbstractRegistrate<never>;
        getEntry(): $RegistryEntry<R, T>;
        onRegister(arg0: $NonNullConsumer_<$RegistryEntry<R, T>>): S;
        setData<D extends $RegistrateProvider>(arg0: $ProviderType_<D>, arg1: $NonNullBiConsumer_<$DataGenContext<R, $RegistryEntry<R, T>>, D>): S;
        get registryKey(): $ResourceKey<$Registry<R>>;
        get name(): string;
        get parent(): P;
        get owner(): $AbstractRegistrate<never>;
        get entry(): $RegistryEntry<R, T>;
    }
    export class $BlockBuilder<T extends $Block, P> extends $AbstractBuilder<$Block, T, P, $BlockBuilder<T, P>> {
        blockEntity<BE extends $BlockEntity>(arg0: $BlockEntityBuilder$BlockEntityFactory_<BE>): $BlockEntityBuilder<BE, $BlockBuilder<T, P>>;
        initialProperties(arg0: $NonNullSupplier_<$Block>): $BlockBuilder<T, P>;
        defaultLang(): $BlockBuilder<T, P>;
        loot(arg0: $NonNullBiConsumer_<$RegistrateBlockLootTables, T>): $BlockBuilder<T, P>;
        defaultBlockstate(): $BlockBuilder<T, P>;
        defaultLoot(): $BlockBuilder<T, P>;
        simpleBlockEntity<BE extends $BlockEntity>(arg0: $BlockEntityBuilder$BlockEntityFactory_<BE>): $BlockBuilder<T, P>;
        simpleItem(): $BlockBuilder<T, P>;
        clientExtension(arg0: $NonNullSupplier_<$Supplier<$IClientBlockExtensions>>): $BlockBuilder<T, P>;
        /**
         * @deprecated
         */
        clientExtension(arg0: $Function_<T, $NonNullSupplier<$Supplier<$IClientBlockExtensions>>>): $BlockBuilder<T, P>;
        register(): $BlockEntry<T>;
        properties(arg0: $NonNullUnaryOperator_<$BlockBehaviour$Properties>): $BlockBuilder<T, P>;
        static create<T extends $Block, P>(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $NonNullFunction_<$BlockBehaviour$Properties, T>): $BlockBuilder<T, P>;
        color(arg0: $NonNullSupplier_<$Supplier<$BlockColor>>): $BlockBuilder<T, P>;
        lang(arg0: string): $BlockBuilder<T, P>;
        recipe(arg0: $NonNullBiConsumer_<$DataGenContext<$Block, T>, $RegistrateRecipeProvider>): $BlockBuilder<T, P>;
        tag(...arg0: $TagKey_<$Block>[]): $BlockBuilder<T, P>;
        item<I extends $Item>(arg0: $NonNullBiFunction_<T, $Item$Properties, I>): $ItemBuilder<I, $BlockBuilder<T, P>>;
        item(): $ItemBuilder<$BlockItem, $BlockBuilder<T, P>>;
        blockstate(arg0: $NonNullBiConsumer_<$DataGenContext<$Block, T>, $RegistrateBlockstateProvider>): $BlockBuilder<T, P>;
        /**
         * @deprecated
         */
        addLayer(arg0: $Supplier_<$Supplier<$RenderType>>): $BlockBuilder<T, P>;
    }
    export class $MenuBuilder$ForgeMenuFactory<T extends $AbstractContainerMenu> {
    }
    export interface $MenuBuilder$ForgeMenuFactory<T extends $AbstractContainerMenu> {
        create(arg0: $MenuType_<T>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf | null): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuBuilder$ForgeMenuFactory}.
     */
    export type $MenuBuilder$ForgeMenuFactory_<T> = ((arg0: $MenuType<T>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf) => T);
    export class $MenuBuilder$ScreenFactory<M extends $AbstractContainerMenu, T extends $Screen> {
    }
    export interface $MenuBuilder$ScreenFactory<M extends $AbstractContainerMenu, T extends $Screen> {
        create(arg0: M, arg1: $Inventory, arg2: $Component_): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuBuilder$ScreenFactory}.
     */
    export type $MenuBuilder$ScreenFactory_<M, T> = ((arg0: M, arg1: $Inventory, arg2: $Component) => T);
    export class $BlockEntityBuilder<T extends $BlockEntity, P> extends $AbstractBuilder<$BlockEntityType<never>, $BlockEntityType<T>, P, $BlockEntityBuilder<T, P>> {
        validBlocks(...arg0: $NonNullSupplier_<$Block>[]): $BlockEntityBuilder<$BlockEntityType<T>, P>;
        validBlock(arg0: $NonNullSupplier_<$Block>): $BlockEntityBuilder<$BlockEntityType<T>, P>;
        registerCapability(arg0: $Consumer_<$RegisterCapabilitiesEvent>): $BlockEntityBuilder<$BlockEntityType<T>, P>;
        renderer(arg0: $NonNullSupplier_<$NonNullFunction<$BlockEntityRendererProvider$Context, $BlockEntityRenderer<$BlockEntityType<T>>>>): $BlockEntityBuilder<$BlockEntityType<T>, P>;
        static create<T extends $BlockEntity, P>(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $BlockEntityBuilder$BlockEntityFactory_<T>): $BlockEntityBuilder<T, P>;
    }
    export class $NoConfigBuilder<R, T extends R, P> extends $AbstractBuilder<R, T, P, $NoConfigBuilder<R, T, P>> {
        constructor(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $ResourceKey_<$Registry<R>>, arg5: $NonNullSupplier_<T>);
    }
    export class $BlockEntityBuilder$BlockEntityFactory<T extends $BlockEntity> {
    }
    export interface $BlockEntityBuilder$BlockEntityFactory<T extends $BlockEntity> {
        create(arg0: $BlockEntityType_<T>, arg1: $BlockPos_, arg2: $BlockState_): T;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityBuilder$BlockEntityFactory}.
     */
    export type $BlockEntityBuilder$BlockEntityFactory_<T> = ((arg0: $BlockEntityType<T>, arg1: $BlockPos, arg2: $BlockState) => T);
}
