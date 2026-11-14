import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $RecipeSerializer_, $AbstractCookingRecipe$Factory_, $Recipe, $AbstractCookingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $TagsProvider$TagAppender, $TagsProvider$TagLookup_, $IntrinsicHolderTagsProvider, $TagsProvider, $TagsProvider$TagLookup } from "@package/net/minecraft/data/tags";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $RecipeOutput, $ShapelessRecipeBuilder, $RecipeProvider, $RecipeCategory_ } from "@package/net/minecraft/data/recipes";
import { $Map, $Map_, $List_ } from "@package/java/util";
import { $MultiPartBlockStateBuilder, $ItemModelBuilder, $BlockStateProvider, $ItemModelProvider, $VariantBlockStateBuilder } from "@package/net/neoforged/neoforge/client/model/generators";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $Builder } from "@package/com/tterrag/registrate/builders";
import { $DataProvider, $PackOutput$PathProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";
import { $AdvancementHolder, $AdvancementHolder_, $Advancement$Builder } from "@package/net/minecraft/advancements";
import { $Supplier_, $Consumer_, $Consumer, $Function_ } from "@package/java/util/function";
import { $Registry, $RegistrySetBuilder$RegistryBootstrap_, $HolderLookup$Provider, $Holder, $Direction } from "@package/net/minecraft/core";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $DataIngredient } from "@package/com/tterrag/registrate/util";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Record } from "@package/java/lang";
import { $ItemLike_, $ItemLike } from "@package/net/minecraft/world/level";
import { $TagBuilder, $TagKey_ } from "@package/net/minecraft/tags";
import { $DatapackBuiltinEntriesProvider, $DataMapProvider, $ExistingFileHelper$ResourceType, $ExistingFileHelper, $LanguageProvider } from "@package/net/neoforged/neoforge/common/data";
import { $Item, $CreativeModeTab_ } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $RegistrateLootTableProvider } from "@package/com/tterrag/registrate/providers/loot";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $NonNullUnaryOperator_, $NonNullFunction_, $NonNullBiFunction, $NonNullSupplier_, $NonNullBiFunction_, $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";
import { $WallSide, $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $GatherDataEvent } from "@package/net/neoforged/neoforge/data/event";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
export * as loot from "@package/com/tterrag/registrate/providers/loot";

declare module "@package/com/tterrag/registrate/providers" {
    export class $RegistrateTagsProvider$IntrinsicImpl<T> extends $IntrinsicHolderTagsProvider<T> implements $RegistrateTagsProvider<T> {
        getFilledProvider(): $CompletableFuture<$HolderLookup$Provider>;
        registry(): $ResourceKey<$Registry<T>>;
        getSide(): $LogicalSide;
        addTag(arg0: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $ProviderType_<$RegistrateTagsProvider$IntrinsicImpl<T>>, arg2: string, arg3: $PackOutput, arg4: $ResourceKey_<$Registry<T>>, arg5: $CompletableFuture<$HolderLookup$Provider>, arg6: $Function_<T, $ResourceKey<T>>, arg7: $ExistingFileHelper);
        get filledProvider(): $CompletableFuture<$HolderLookup$Provider>;
        get side(): $LogicalSide;
    }
    export class $RegistrateGenericProvider implements $RegistrateProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        add(arg0: $RegistrateGenericProvider$Generator_): $RegistrateGenericProvider;
        getSide(): $LogicalSide;
        get name(): string;
        get side(): $LogicalSide;
    }
    export class $RegistrateGenericProvider$Generator {
    }
    export interface $RegistrateGenericProvider$Generator {
        generate(arg0: $RegistrateGenericProvider$GeneratorData_): $DataProvider;
    }
    /**
     * Values that may be interpreted as {@link $RegistrateGenericProvider$Generator}.
     */
    export type $RegistrateGenericProvider$Generator_ = ((arg0: $RegistrateGenericProvider$GeneratorData) => $DataProvider);
    export class $RegistrateDatapackProvider extends $DatapackBuiltinEntriesProvider implements $RegistrateLookupFillerProvider {
        getFilledProvider(): $CompletableFuture<$HolderLookup$Provider>;
        getSide(): $LogicalSide;
        registries: $CompletableFuture<$HolderLookup$Provider>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $PackOutput, arg2: $CompletableFuture<$HolderLookup$Provider>);
        get filledProvider(): $CompletableFuture<$HolderLookup$Provider>;
        get side(): $LogicalSide;
    }
    export class $RegistrateAdvancementProvider implements $RegistrateProvider, $Consumer<$AdvancementHolder> {
        withConditions(arg0: $AdvancementHolder_ | null, arg1: $List_<$ICondition>): void;
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        resolve<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        accept(arg0: $AdvancementHolder_ | null): void;
        desc(arg0: string, arg1: string, arg2: string): $MutableComponent;
        getProvider(): $HolderLookup$Provider;
        title(arg0: string, arg1: string, arg2: string): $MutableComponent;
        getSide(): $LogicalSide;
        andThen(arg0: $Consumer_<$AdvancementHolder>): $Consumer<$AdvancementHolder>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $PackOutput, arg2: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
        get provider(): $HolderLookup$Provider;
        get side(): $LogicalSide;
    }
    export class $RegistrateTagsProvider<T> {
    }
    export interface $RegistrateTagsProvider<T> extends $RegistrateLookupFillerProvider {
        contentsGetter(): $CompletableFuture<$TagsProvider$TagLookup<T>>;
        registry(): $ResourceKey<$Registry<T>>;
        addTag(arg0: $TagKey_<T>): $TagsProvider$TagAppender<T>;
    }
    export class $RegistrateTagsProvider$Impl<T> extends $TagsProvider<T> implements $RegistrateTagsProvider<T> {
        getFilledProvider(): $CompletableFuture<$HolderLookup$Provider>;
        registry(): $ResourceKey<$Registry<T>>;
        getSide(): $LogicalSide;
        addTag(arg0: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $ProviderType_<$RegistrateTagsProvider$Impl<T>>, arg2: string, arg3: $PackOutput, arg4: $ResourceKey_<$Registry<T>>, arg5: $CompletableFuture<$HolderLookup$Provider>, arg6: $ExistingFileHelper);
        get filledProvider(): $CompletableFuture<$HolderLookup$Provider>;
        get side(): $LogicalSide;
    }
    export class $ProviderType$DependencyAwareProviderType<T extends $RegistrateProvider> {
    }
    export interface $ProviderType$DependencyAwareProviderType<T extends $RegistrateProvider> extends $ProviderType<T> {
        create(arg0: $AbstractRegistrate<never>, arg1: $GatherDataEvent, arg2: $Map_<$ProviderType_<never>, $RegistrateProvider>): T;
        create(arg0: $ProviderType$Context_<T>): T;
    }
    /**
     * Values that may be interpreted as {@link $ProviderType$DependencyAwareProviderType}.
     */
    export type $ProviderType$DependencyAwareProviderType_<T> = ((arg0: $ProviderType$Context<T>) => T);
    export class $RegistrateLangProvider extends $LanguageProvider implements $RegistrateProvider {
        addBlock(arg0: $NonNullSupplier_<$Block>): void;
        addTooltip(arg0: $NonNullSupplier_<$ItemLike>, arg1: string): void;
        addTooltip(arg0: $NonNullSupplier_<$ItemLike>, arg1: $List_<string>): void;
        addEntityType(arg0: $NonNullSupplier_<$EntityType<never>>): void;
        addBlockWithTooltip(arg0: $NonNullSupplier_<$Block>, arg1: string, arg2: string): void;
        addBlockWithTooltip(arg0: $NonNullSupplier_<$Block>, arg1: string): void;
        addItemWithTooltip(arg0: $NonNullSupplier_<$Item>, arg1: string, arg2: $List_<string>): void;
        getAutomaticName<T>(arg0: $NonNullSupplier_<T>, arg1: $ResourceKey_<$Registry<T>>): string;
        static toEnglishName(arg0: string): string;
        addItem(arg0: $NonNullSupplier_<$Item>): void;
        add(arg0: $CreativeModeTab_, arg1: string): void;
        getSide(): $LogicalSide;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $PackOutput);
        get side(): $LogicalSide;
    }
    export class $RegistrateLookupFillerProvider {
    }
    export interface $RegistrateLookupFillerProvider extends $RegistrateProvider {
        getFilledProvider(): $CompletableFuture<$HolderLookup$Provider>;
        get filledProvider(): $CompletableFuture<$HolderLookup$Provider>;
    }
    export class $ProviderType$Context<T extends $RegistrateProvider> extends $Record {
        fileHelper(): $ExistingFileHelper;
        parent(): $AbstractRegistrate<never>;
        get<R extends $RegistrateProvider>(arg0: $ProviderType_<R>): R;
        type(): $ProviderType<T>;
        provider(): $CompletableFuture<$HolderLookup$Provider>;
        /**
         * @deprecated
         */
        event(): $GatherDataEvent;
        existing(): $Map<$ProviderType<never>, $RegistrateProvider>;
        output(): $PackOutput;
        constructor(type: $ProviderType_<T>, parent: $AbstractRegistrate<never>, event: $GatherDataEvent, existing: $Map_<$ProviderType_<never>, $RegistrateProvider>, output: $PackOutput, fileHelper: $ExistingFileHelper, provider: $CompletableFuture<$HolderLookup$Provider>);
    }
    /**
     * Values that may be interpreted as {@link $ProviderType$Context}.
     */
    export type $ProviderType$Context_<T> = { provider?: $CompletableFuture<$HolderLookup$Provider>, existing?: $Map_<$ProviderType_<never>, $RegistrateProvider>, event?: $GatherDataEvent, type?: $ProviderType_<$RegistrateProvider>, fileHelper?: $ExistingFileHelper, parent?: $AbstractRegistrate<never>, output?: $PackOutput,  } | [provider?: $CompletableFuture<$HolderLookup$Provider>, existing?: $Map_<$ProviderType_<never>, $RegistrateProvider>, event?: $GatherDataEvent, type?: $ProviderType_<$RegistrateProvider>, fileHelper?: $ExistingFileHelper, parent?: $AbstractRegistrate<never>, output?: $PackOutput, ];
    export class $RegistrateBlockstateProvider extends $BlockStateProvider implements $RegistrateProvider {
        getExistingMultipartBuilder(arg0: $Block_): ($MultiPartBlockStateBuilder) | undefined;
        getExistingVariantBuilder(arg0: $Block_): ($VariantBlockStateBuilder) | undefined;
        getSide(): $LogicalSide;
        static WALL_PROPS: $ImmutableMap<$Direction, $Property<$WallSide>>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $PackOutput, arg2: $ExistingFileHelper);
        get side(): $LogicalSide;
    }
    export class $ProviderType<T extends $RegistrateProvider> {
        /**
         * @deprecated
         */
        static registerDelegate<T extends $RegistrateProvider>(arg0: string, arg1: $NonNullUnaryOperator_<$ProviderType<T>>): $ProviderType<T>;
        static registerTag<T, R extends $RegistrateTagsProvider<T>>(arg0: string, arg1: $ResourceKey_<$Registry<T>>, arg2: $ProviderType$DependencyAwareProviderType_<R>): $ProviderType<R>;
        static registerServerData<T extends $RegistrateProvider>(arg0: string, arg1: $ProviderType$SimpleServerDataFactory_<T>): $ProviderType<T>;
        static registerIntrinsicTag<T>(arg0: string, arg1: string, arg2: $ResourceKey_<$Registry<T>>, arg3: $Function_<T, $ResourceKey<T>>): $ProviderType<$RegistrateTagsProvider$IntrinsicImpl<T>>;
        static registerDynamicTag<T>(arg0: string, arg1: string, arg2: $ResourceKey_<$Registry<T>>): $ProviderType<$RegistrateTagsProvider$Impl<T>>;
        static registerProvider<T extends $RegistrateProvider>(arg0: string, arg1: $ProviderType$DependencyAwareProviderType_<T>): $ProviderType<T>;
        /**
         * @deprecated
         */
        static register<T extends $RegistrateProvider>(arg0: string, arg1: $NonNullFunction_<$ProviderType<T>, $NonNullBiFunction<$AbstractRegistrate<never>, $GatherDataEvent, T>>): $ProviderType<T>;
        /**
         * @deprecated
         */
        static register<T extends $RegistrateProvider>(arg0: string, arg1: $NonNullBiFunction_<$AbstractRegistrate<never>, $GatherDataEvent, T>): $ProviderType<T>;
        /**
         * @deprecated
         */
        static register<T extends $RegistrateProvider>(arg0: string, arg1: $ProviderType_<T>): $ProviderType<T>;
        static create<T extends $RegistrateProvider>(arg0: $ProviderType_<T>, arg1: $AbstractRegistrate<never>, arg2: $GatherDataEvent, arg3: $Map_<$ProviderType_<never>, $RegistrateProvider>, arg4: $CompletableFuture<$HolderLookup$Provider>): T;
        static ADVANCEMENT: $ProviderType<$RegistrateAdvancementProvider>;
        static ITEM_MODEL: $ProviderType<$RegistrateItemModelProvider>;
        static LOOT: $ProviderType<$RegistrateLootTableProvider>;
        static LANG: $ProviderType<$RegistrateLangProvider>;
        static ENTITY_TAGS: $ProviderType<$RegistrateTagsProvider$IntrinsicImpl<$EntityType<never>>>;
        static DYNAMIC: $ProviderType<$RegistrateDatapackProvider>;
        static BLOCK_TAGS: $ProviderType<$RegistrateTagsProvider$IntrinsicImpl<$Block>>;
        static FLUID_TAGS: $ProviderType<$RegistrateTagsProvider$IntrinsicImpl<$Fluid>>;
        static GENERIC_CLIENT: $ProviderType<$RegistrateGenericProvider>;
        static BLOCKSTATE: $ProviderType<$RegistrateBlockstateProvider>;
        static RECIPE: $ProviderType<$RegistrateRecipeProvider>;
        static ENCHANTMENT_TAGS: $ProviderType<$RegistrateTagsProvider$Impl<$Enchantment>>;
        static DATA_MAP: $ProviderType<$RegistrateDataMapProvider>;
        static ITEM_TAGS: $ProviderType<$RegistrateItemTagsProvider>;
        static GENERIC_SERVER: $ProviderType<$RegistrateGenericProvider>;
    }
    export interface $ProviderType<T extends $RegistrateProvider> {
        /**
         * @deprecated
         */
        create(arg0: $AbstractRegistrate<never>, arg1: $GatherDataEvent, arg2: $Map_<$ProviderType_<never>, $RegistrateProvider>): T;
        create(arg0: $ProviderType$Context_<T>): T;
    }
    /**
     * Values that may be interpreted as {@link $ProviderType}.
     */
    export type $ProviderType_<T> = ((arg0: $AbstractRegistrate<never>, arg1: $GatherDataEvent, arg2: $Map<$ProviderType<never>, $RegistrateProvider>) => T);
    export class $RegistrateDataMapProvider extends $DataMapProvider implements $RegistrateProvider {
        getSide(): $LogicalSide;
        get side(): $LogicalSide;
    }
    export class $RegistrateProvider {
    }
    export interface $RegistrateProvider extends $DataProvider {
        getSide(): $LogicalSide;
        get side(): $LogicalSide;
    }
    export class $RegistrateItemTagsProvider extends $RegistrateTagsProvider$IntrinsicImpl<$Item> {
        copy(arg0: $TagKey_<$Block>, arg1: $TagKey_<$Item>): void;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $ProviderType_<$RegistrateItemTagsProvider>, arg2: string, arg3: $PackOutput, arg4: $CompletableFuture<$HolderLookup$Provider>, arg5: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>, arg6: $ExistingFileHelper);
    }
    export class $DataGenContext<R, E extends R> implements $NonNullSupplier<E> {
        getName(): string;
        get(): E;
        static from<R, E extends R>(arg0: $Builder<R, E, never, never>): $DataGenContext<R, E>;
        /**
         * @deprecated
         */
        static from<R, E extends R>(arg0: $Builder<R, E, never, never>, arg1: $ResourceKey_<$Registry<R>>): $DataGenContext<R, E>;
        getId(): $ResourceLocation;
        getEntry(): E;
        lazy(): $NonNullSupplier<E>;
        constructor(arg0: $NonNullSupplier_<E>, arg1: string, arg2: $ResourceLocation_);
        get name(): string;
        get id(): $ResourceLocation;
        get entry(): E;
    }
    export class $ProviderType$SimpleServerDataFactory<T extends $RegistrateProvider> {
    }
    export interface $ProviderType$SimpleServerDataFactory<T extends $RegistrateProvider> extends $ProviderType$DependencyAwareProviderType<T> {
        create(arg0: $AbstractRegistrate<never>, arg1: $PackOutput, arg2: $CompletableFuture<$HolderLookup$Provider>): T;
        create(arg0: $ProviderType$Context_<T>): T;
        asProvider(): $ProviderType<T>;
    }
    /**
     * Values that may be interpreted as {@link $ProviderType$SimpleServerDataFactory}.
     */
    export type $ProviderType$SimpleServerDataFactory_<T> = ((arg0: $AbstractRegistrate<never>, arg1: $PackOutput, arg2: $CompletableFuture<$HolderLookup$Provider>) => T);
    export class $RegistrateItemModelProvider extends $ItemModelProvider implements $RegistrateProvider {
        blockItem(arg0: $NonNullSupplier_<$ItemLike>, arg1: string): $ItemModelBuilder;
        blockItem(arg0: $NonNullSupplier_<$ItemLike>): $ItemModelBuilder;
        blockSprite(arg0: $NonNullSupplier_<$ItemLike>, arg1: $ResourceLocation_): $ItemModelBuilder;
        blockSprite(arg0: $NonNullSupplier_<$ItemLike>): $ItemModelBuilder;
        itemTexture(arg0: $NonNullSupplier_<$ItemLike>): $ResourceLocation;
        handheld(arg0: $NonNullSupplier_<$ItemLike>): $ItemModelBuilder;
        handheld(arg0: $NonNullSupplier_<$ItemLike>, arg1: $ResourceLocation_): $ItemModelBuilder;
        blockWithInventoryModel(arg0: $NonNullSupplier_<$ItemLike>): $ItemModelBuilder;
        name(arg0: $NonNullSupplier_<$ItemLike>): string;
        generated(arg0: $NonNullSupplier_<$ItemLike>, ...arg1: $ResourceLocation_[]): $ItemModelBuilder;
        generated(arg0: $NonNullSupplier_<$ItemLike>): $ItemModelBuilder;
        modid(arg0: $NonNullSupplier_<$ItemLike>): string;
        getSide(): $LogicalSide;
        static TEXTURE: $ExistingFileHelper$ResourceType;
        static ITEM_FOLDER: string;
        generatedModels: $Map<$ResourceLocation, $ItemModelBuilder>;
        existingFileHelper: $ExistingFileHelper;
        static BLOCK_FOLDER: string;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $PackOutput, arg2: $ExistingFileHelper);
        get side(): $LogicalSide;
    }
    export class $DataProviderInitializer {
        add<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $RegistrySetBuilder$RegistryBootstrap_<T>): void;
        addDependency(arg0: $ProviderType_<never>, arg1: $ProviderType_<$RegistrateLookupFillerProvider>): void;
        constructor();
    }
    export class $RegistrateGenericProvider$GeneratorData extends $Record {
        existingFileHelper(): $ExistingFileHelper;
        output(): $PackOutput;
        registries(): $CompletableFuture<$HolderLookup$Provider>;
        constructor(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>, existingFileHelper: $ExistingFileHelper);
    }
    /**
     * Values that may be interpreted as {@link $RegistrateGenericProvider$GeneratorData}.
     */
    export type $RegistrateGenericProvider$GeneratorData_ = { output?: $PackOutput, registries?: $CompletableFuture<$HolderLookup$Provider>, existingFileHelper?: $ExistingFileHelper,  } | [output?: $PackOutput, registries?: $CompletableFuture<$HolderLookup$Provider>, existingFileHelper?: $ExistingFileHelper, ];
    export class $RegistrateRecipeProvider extends $RecipeProvider implements $RegistrateProvider, $RecipeOutput {
        campfire<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: number, arg4: number): void;
        campfire<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: number): void;
        door<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: string | null): void;
        slab<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: string | null, arg4: boolean): void;
        advancement(): $Advancement$Builder;
        safeName(arg0: $ItemLike_): string;
        safeName(arg0: $DataIngredient): string;
        safeName(arg0: $ResourceLocation_): string;
        safeId(arg0: $DataIngredient): $ResourceLocation;
        safeId(arg0: $ResourceLocation_): $ResourceLocation;
        safeId(arg0: $ItemLike_): $ResourceLocation;
        cooking<T extends $ItemLike, S extends $AbstractCookingRecipe>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: number, arg4: number, arg5: string, arg6: $RecipeSerializer_<S>, arg7: $AbstractCookingRecipe$Factory_<S>): void;
        cooking<T extends $ItemLike, S extends $AbstractCookingRecipe>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: number, arg4: number, arg5: $RecipeSerializer_<S>, arg6: $AbstractCookingRecipe$Factory_<S>): void;
        smelting<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: number): void;
        smelting<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: number, arg4: number): void;
        blasting<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: number, arg4: number): void;
        blasting<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: number): void;
        smoking<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: number): void;
        smoking<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: number, arg4: number): void;
        stonecutting<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: number): void;
        stonecutting<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>): void;
        singleItemUnfinished<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: number, arg4: number): $ShapelessRecipeBuilder;
        planks<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>): void;
        buildAdvancement(arg0: $CachedOutput_, arg1: $HolderLookup$Provider, arg2: $AdvancementHolder_, ...arg3: $ICondition[]): $CompletableFuture<never>;
        smeltingAndBlasting<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: number): void;
        singleItem<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: number, arg4: number): void;
        stairs<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: string | null, arg4: boolean): void;
        fenceGate<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: string | null): void;
        trapDoor<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: string | null): void;
        resolve<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        accept(arg0: $ResourceLocation_, arg1: $Recipe<never>, arg2: $AdvancementHolder_, ...arg3: $ICondition[]): void;
        fence<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: string | null): void;
        square<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: boolean): void;
        getProvider(): $HolderLookup$Provider;
        wall<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>): void;
        /**
         * @deprecated
         */
        storage<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $NonNullSupplier_<T>): void;
        storage<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $NonNullSupplier_<T>, arg3: $DataIngredient, arg4: $NonNullSupplier_<T>): void;
        storage<T extends $ItemLike>(arg0: $NonNullSupplier_<T>, arg1: $RecipeCategory_, arg2: $NonNullSupplier_<T>): void;
        getSide(): $LogicalSide;
        food<T extends $ItemLike>(arg0: $DataIngredient, arg1: $RecipeCategory_, arg2: $Supplier_<T>, arg3: number): void;
        accept(arg0: $ResourceLocation_, arg1: $Recipe<never>, arg2: $AdvancementHolder_ | null): void;
        withConditions(...arg0: $ICondition[]): $RecipeOutput;
        advancementPathProvider: $PackOutput$PathProvider;
        static DEFAULT_SMOKE_TIME: number;
        static DEFAULT_CAMPFIRE_TIME: number;
        static DEFAULT_SMELT_TIME: number;
        static DEFAULT_BLAST_TIME: number;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $PackOutput, arg2: $CompletableFuture<$HolderLookup$Provider>);
        get provider(): $HolderLookup$Provider;
        get side(): $LogicalSide;
    }
}
