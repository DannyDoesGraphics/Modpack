import { $Codec_ } from "@package/com/mojang/serialization";
import { $IntrinsicHolderTagsProvider } from "@package/net/minecraft/data/tags";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $EntityType_, $EntityType } from "@package/net/minecraft/world/entity";
import { $Resource } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $Set_, $Collection_, $List_, $Map } from "@package/java/util";
import { $SpriteSource } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $DataProvider, $PackOutput, $PackOutput$Target_, $CachedOutput_ } from "@package/net/minecraft/data";
import { $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $AdvancementHolder } from "@package/net/minecraft/advancements";
import { $BiConsumer, $Consumer, $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $Holder_, $RegistrySetBuilder$PatchedRegistries_, $RegistrySetBuilder } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $OverlayMetadataSection$OverlayEntry, $OverlayMetadataSection$OverlayEntry_, $PackType_, $PackType } from "@package/net/minecraft/server/packs";
import { $WithConditions$Builder, $WithConditions_, $ICondition, $WithConditions } from "@package/net/neoforged/neoforge/common/conditions";
import { $Enum, $Record } from "@package/java/lang";
import { $File_ } from "@package/java/io";
import { $Level } from "@package/net/minecraft/world/level";
import { $DataMapValueRemover, $DataMapFile, $AdvancedDataMapType, $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $TagBuilder, $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RegistriesDatapackGenerator } from "@package/net/minecraft/data/registries";
import { $MobEffect_, $MobEffect } from "@package/net/minecraft/world/effect";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IGlobalLootModifier } from "@package/net/neoforged/neoforge/common/loot";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $AdvancementSubProvider, $AdvancementProvider as $AdvancementProvider$1 } from "@package/net/minecraft/data/advancements";
export * as internal from "@package/net/neoforged/neoforge/common/data/internal";
export * as fixes from "@package/net/neoforged/neoforge/common/data/fixes";

declare module "@package/net/neoforged/neoforge/common/data" {
    /**
     * Identifies a specific sound that has to be played in a sound event, along with
     * all the necessary parameters.
     * 
     * If any of the optional parameters (i.e. the ones that aren't required to
     * obtain an instance of this class) are unset, their default values will be
     * used instead. The list of defaults is available in the text that follows:
     * 
     * - Volume: 1.0F
     * - Pitch: 1.0F
     * - Weight: 1
     * - Stream: false
     * - Attenuation Distance: 16
     * - Preload: false
     */
    export class $SoundDefinition$Sound {
        attenuationDistance(arg0: number): $SoundDefinition$Sound;
        stream(arg0: boolean): $SoundDefinition$Sound;
        stream(): $SoundDefinition$Sound;
        weight(arg0: number): $SoundDefinition$Sound;
        static sound(arg0: $ResourceLocation_, arg1: $SoundDefinition$SoundType_): $SoundDefinition$Sound;
        preload(arg0: boolean): $SoundDefinition$Sound;
        preload(): $SoundDefinition$Sound;
        volume(arg0: number): $SoundDefinition$Sound;
        volume(arg0: number): $SoundDefinition$Sound;
        pitch(arg0: number): $SoundDefinition$Sound;
        pitch(arg0: number): $SoundDefinition$Sound;
    }
    /**
     * Provider for forge's GlobalLootModifier system. See `LootModifier`
     * 
     * This provider only requires implementing `#start()` and calling `#add` from it.
     */
    export class $GlobalLootModifierProvider implements $DataProvider {
        getName(): string;
        run(cache: $CachedOutput_): $CompletableFuture<never>;
        add<T extends $IGlobalLootModifier>(arg0: string, arg1: T, arg2: $List_<$ICondition>): void;
        add<T extends $IGlobalLootModifier>(arg0: string, arg1: T, ...arg2: $ICondition[]): void;
        constructor(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>, modid: string);
        get name(): string;
    }
    /**
     * Data provider for the `sounds.json` file, which identifies sound definitions
     * for the various sound events in Minecraft.
     */
    export class $SoundDefinitionsProvider implements $DataProvider {
        getName(): string;
        run(cache: $CachedOutput_): $CompletableFuture<never>;
        /**
         * Registers the sound definitions that should be generated via one of the `add` methods.
         */
        registerSounds(): void;
        get name(): string;
    }
    export class $DataMapProvider$Builder<T, R> {
        remove(arg0: $ResourceLocation_): $DataMapProvider$Builder<T, R>;
        remove(arg0: $TagKey_<R>): $DataMapProvider$Builder<T, R>;
        remove(arg0: $Holder_<R>): $DataMapProvider$Builder<T, R>;
        replace(arg0: boolean): $DataMapProvider$Builder<T, R>;
        add(arg0: $ResourceKey_<R>, arg1: T, arg2: boolean, ...arg3: $ICondition[]): $DataMapProvider$Builder<T, R>;
        add(arg0: $ResourceLocation_, arg1: T, arg2: boolean, ...arg3: $ICondition[]): $DataMapProvider$Builder<T, R>;
        add(arg0: $Holder_<R>, arg1: T, arg2: boolean, ...arg3: $ICondition[]): $DataMapProvider$Builder<T, R>;
        add(arg0: $TagKey_<R>, arg1: T, arg2: boolean, ...arg3: $ICondition[]): $DataMapProvider$Builder<T, R>;
        build(): $WithConditions<$DataMapFile<T, R>>;
        conditions(...arg0: $ICondition[]): $DataMapProvider$Builder<T, R>;
        constructor(type: $DataMapType<R, T>);
    }
    /**
     * Data provider for atlas configuration files.
     * 
     * An atlas configuration is bound to a specific texture atlas such as the `minecraft:blocks` atlas and
     * allows adding additional textures to the atlas by adding `SpriteSource`s to the configuration.
     * See `SpriteSources` for the available sources and the constants in this class for the
     * atlases used in vanilla Minecraft
     */
    export class $SpriteSourceProvider extends $JsonCodecProvider<$List<$SpriteSource>> {
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, modId: string, existingFileHelper: $ExistingFileHelper);
    }
    export class $ExistingFileHelper$IResourceType {
    }
    export interface $ExistingFileHelper$IResourceType {
        getPrefix(): string;
        getSuffix(): string;
        getPackType(): $PackType;
        get prefix(): string;
        get suffix(): string;
        get packType(): $PackType;
    }
    /**
     * A data provider for `ParticleDescription`s.
     * 
     * To use this provider, extend this class and implement `#addDescriptions()`.
     * Then, register an instance using `DataGenerator#addProvider(boolean, Factory)`
     * via the `GatherDataEvent` on the mod event bus.
     * 
     * A description can be added to a `ParticleType` which uses a sprite
     * or sprite set.
     * 
     * {@code
     */
    export class $ParticleDescriptionProvider implements $DataProvider {
        getName(): string;
        run(cache: $CachedOutput_): $CompletableFuture<never>;
        get name(): string;
    }
    /**
     * Dataprovider for using a Codec to generate jsons.
     * Path names for jsons are derived from the given registry folder and each entry's namespaced id, in the format:
     * 
     * `/entryid/registryfolder/entrypath.json `
     */
    export class $JsonCodecProvider<T> implements $DataProvider {
        unconditional(arg0: $ResourceLocation_, arg1: T): void;
        conditionally(id: $ResourceLocation_, configurator: $Consumer_<$WithConditions$Builder<T>>): void;
        getName(): string;
        run(cache: $CachedOutput_): $CompletableFuture<never>;
        constructor(output: $PackOutput, target: $PackOutput$Target_, directory: string, packType: $PackType_, codec: $Codec_<T>, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, modId: string, existingFileHelper: $ExistingFileHelper);
        get name(): string;
    }
    /**
     * A provider for data map generation.
     */
    export class $DataMapProvider implements $DataProvider {
        getName(): string;
        run(cache: $CachedOutput_): $CompletableFuture<never>;
        builder<T, R, VR extends $DataMapValueRemover<R, T>>(arg0: $AdvancedDataMapType<R, T, VR>): $DataMapProvider$AdvancedBuilder<T, R, VR>;
        builder<T, R>(arg0: $DataMapType<R, T>): $DataMapProvider$Builder<T, R>;
        get name(): string;
    }
    export class $DataMapProvider$AdvancedBuilder<T, R, VR extends $DataMapValueRemover<R, T>> extends $DataMapProvider$Builder<T, R> {
        remove(arg0: $ResourceLocation_, arg1: VR): $DataMapProvider$AdvancedBuilder<T, R, VR>;
        remove(arg0: $Holder_<R>, arg1: VR): $DataMapProvider$AdvancedBuilder<T, R, VR>;
        remove(arg0: $TagKey_<R>, arg1: VR): $DataMapProvider$AdvancedBuilder<T, R, VR>;
        constructor(type: $AdvancedDataMapType<R, T, VR>);
    }
    export class $SoundDefinition$SoundType extends $Enum<$SoundDefinition$SoundType> {
        static values(): $SoundDefinition$SoundType[];
        static valueOf(arg0: string): $SoundDefinition$SoundType;
        static SOUND: $SoundDefinition$SoundType;
        static EVENT: $SoundDefinition$SoundType;
    }
    /**
     * Values that may be interpreted as {@link $SoundDefinition$SoundType}.
     */
    export type $SoundDefinition$SoundType_ = "sound" | "event";
    export class $ExistingFileHelper$ResourceType implements $ExistingFileHelper$IResourceType {
        getPrefix(): string;
        getSuffix(): string;
        getPackType(): $PackType;
        constructor(type: $PackType_, suffix: string, prefix: string);
        get prefix(): string;
        get suffix(): string;
        get packType(): $PackType;
    }
    /**
     * An extension of the `RegistriesDatapackGenerator` which properly handles
     * referencing existing dynamic registry objects within another dynamic registry
     * object.
     */
    export class $DatapackBuiltinEntriesProvider extends $RegistriesDatapackGenerator {
        /**
         * Get the registry holder lookup provider that includes elements added from the `RegistrySetBuilder`
         */
        getRegistryProvider(): $CompletableFuture<$HolderLookup$Provider>;
        registries: $CompletableFuture<$HolderLookup$Provider>;
        /**
         * Constructs a new datapack provider which generates all registry objects
         * from the provided mods using the holder. All entries that need to be
         * bootstrapped are provided within the `RegistrySetBuilder`.
         */
        constructor(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>, datapackEntriesBuilder: $RegistrySetBuilder, conditionsBuilder: $Consumer_<$BiConsumer<$ResourceKey<never>, $ICondition>>, modIds: $Set_<string>);
        /**
         * Constructs a new datapack provider which generates all registry objects
         * from the provided mods using the holder.
         */
        constructor(output: $PackOutput, registries: $CompletableFuture<$RegistrySetBuilder$PatchedRegistries_>, modIds: $Set_<string>);
        /**
         * Constructs a new datapack provider which generates all registry objects
         * from the provided mods using the holder.
         */
        constructor(output: $PackOutput, registries: $CompletableFuture<$RegistrySetBuilder$PatchedRegistries_>, conditionsBuilder: $Consumer_<$BiConsumer<$ResourceKey<never>, $ICondition>>, modIds: $Set_<string>);
        /**
         * Constructs a new datapack provider which generates all registry objects
         * from the provided mods using the holder.
         */
        constructor(output: $PackOutput, registries: $CompletableFuture<$RegistrySetBuilder$PatchedRegistries_>, conditions: $Map_<$ResourceKey_<never>, $List_<$ICondition>>, modIds: $Set_<string>);
        /**
         * Constructs a new datapack provider which generates all registry objects
         * from the provided mods using the holder. All entries that need to be
         * bootstrapped are provided within the `RegistrySetBuilder`.
         */
        constructor(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>, datapackEntriesBuilder: $RegistrySetBuilder, modIds: $Set_<string>);
        /**
         * Constructs a new datapack provider which generates all registry objects
         * from the provided mods using the holder. All entries that need to be
         * bootstrapped are provided within the `RegistrySetBuilder`.
         */
        constructor(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>, datapackEntriesBuilder: $RegistrySetBuilder, conditions: $Map_<$ResourceKey_<never>, $List_<$ICondition>>, modIds: $Set_<string>);
        get registryProvider(): $CompletableFuture<$HolderLookup$Provider>;
    }
    /**
     * An extension of the vanilla `AdvancementProvider` to provide a feature-complete
     * experience to generate modded advancements.
     */
    export class $AdvancementProvider extends $AdvancementProvider$1 {
        /**
         * Constructs an advancement provider using the generators to write the
         * advancements to a file.
         */
        constructor(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>, existingFileHelper: $ExistingFileHelper, subProviders: $List_<$AdvancementProvider$AdvancementGenerator_>);
    }
    export class $SpriteSourceProvider$SourceList extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpriteSourceProvider$SourceList}.
     */
    export type $SpriteSourceProvider$SourceList_ = { sources?: $List_<$SpriteSource>,  } | [sources?: $List_<$SpriteSource>, ];
    /**
     * Enables data providers to check if other data files currently exist. The
     * instance provided in the `GatherDataEvent` utilizes the standard
     * resources (via `VanillaPackResources`), forge's resources, as well as any
     * extra resource packs passed in via the `--existing` argument,
     * or mod resources via the `--existing-mod` argument.
     */
    export class $ExistingFileHelper {
        trackGenerated(arg0: $ResourceLocation_, arg1: $ExistingFileHelper$IResourceType): void;
        /**
         * Track the existence of a generated file.
         * 
         * This should be called by data providers immediately when a new data object is
         * created, i.e. not during
         * run but instead
         * when the "builder" (or whatever intermediate object) is created, such as a
         * `ModelBuilder`.
         * 
         * This represents a *promise* to generate the file later, since other
         * datagen may rely on this file existing.
         */
        trackGenerated(loc: $ResourceLocation_, packType: $PackType_, pathSuffix: string, pathPrefix: string): void;
        isEnabled(): boolean;
        getResource(loc: $ResourceLocation_, packType: $PackType_, pathSuffix: string, pathPrefix: string): $Resource;
        getResource(loc: $ResourceLocation_, packType: $PackType_): $Resource;
        /**
         * Check if a given resource exists in the known resource packs.
         */
        exists(loc: $ResourceLocation_, packType: $PackType_): boolean;
        /**
         * Check if a given resource exists in the known resource packs.
         */
        exists(loc: $ResourceLocation_, packType: $PackType_, pathSuffix: string, pathPrefix: string): boolean;
        exists(arg0: $ResourceLocation_, arg1: $ExistingFileHelper$IResourceType): boolean;
        getResourceStack(loc: $ResourceLocation_, packType: $PackType_): $List<$Resource>;
        /**
         * Create a new helper. This should probably *NOT* be used by mods, as
         * the instance provided by forge is designed to be a central instance that
         * tracks existence of generated data.
         * 
         * Only create a new helper if you intentionally want to ignore the existence of
         * other generated files.
         */
        constructor(existingPacks: $Collection_<$Path_>, existingMods: $Set_<string>, enable: boolean, assetIndex: string, assetsDir: $File_);
        get enabled(): boolean;
    }
    export class $BlockTagsProvider extends $IntrinsicHolderTagsProvider<$Block> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, modId: string, existingFileHelper: $ExistingFileHelper);
    }
    /**
     * An interface used to generated modded advancements. This is parallel to
     * vanilla's `AdvancementSubProvider` with access to the `ExistingFileHelper`.
     */
    export class $AdvancementProvider$AdvancementGenerator {
    }
    export interface $AdvancementProvider$AdvancementGenerator {
        /**
         * Creates an `AdvancementSubProvider` from this generator.
         */
        toSubProvider(existingFileHelper: $ExistingFileHelper): $AdvancementSubProvider;
        /**
         * A method used to generate advancements for a mod. Advancements should be
         * built via `IAdvancementBuilderExtension#save(Consumer, ResourceLocation, ExistingFileHelper)`.
         */
        generate(registries: $HolderLookup$Provider, saver: $Consumer_<$AdvancementHolder>, existingFileHelper: $ExistingFileHelper): void;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementProvider$AdvancementGenerator}.
     */
    export type $AdvancementProvider$AdvancementGenerator_ = ((arg0: $HolderLookup$Provider, arg1: $Consumer<$AdvancementHolder>, arg2: $ExistingFileHelper) => void);
    /**
     * Contains all the data to completely define a sound event.
     */
    export class $SoundDefinition {
        /**
         * Creates a new `SoundDefinition`, which will host a set of
         * `Sound`s and the necessary parameters.
         */
        static definition(): $SoundDefinition;
        /**
         * Sets the language key for the subtitle that will be displayed whenever this
         * sound is being played.
         * 
         * The subtitle is optional and the game will skip displaying it if it
         * isn't present.
         */
        subtitle(subtitle: string): $SoundDefinition;
        /**
         * Sets whether this definition should replace any other definition for the
         * same sound event previously applied, rather than overwriting it.
         */
        replace(replace: boolean): $SoundDefinition;
        "with"(...arg0: $SoundDefinition$Sound[]): $SoundDefinition;
        "with"(arg0: $SoundDefinition$Sound): $SoundDefinition;
    }
    export class $LanguageProvider implements $DataProvider {
        addBlock(key: $Supplier_<$Block>, name: string): void;
        addEntityType(key: $Supplier_<$EntityType<never>>, name: string): void;
        addDimension(dimension: $ResourceKey_<$Level>, value: string): void;
        addItemStack(key: $Supplier_<$ItemStack>, name: string): void;
        addItem(key: $Supplier_<$Item>, name: string): void;
        getName(): string;
        run(cache: $CachedOutput_): $CompletableFuture<never>;
        add(key: $MobEffect_, name: string): void;
        add(key: $EntityType_<never>, name: string): void;
        add(key: string, value: string): void;
        add(tagKey: $TagKey_<never>, name: string): void;
        add(key: $Block_, name: string): void;
        add(key: $ItemStack_, name: string): void;
        add(key: $Item_, name: string): void;
        addEffect(key: $Supplier_<$MobEffect>, name: string): void;
        addTag(key: $Supplier_<$TagKey<never>>, name: string): void;
        constructor(output: $PackOutput, modid: string, locale: string);
        get name(): string;
    }
    export class $GeneratingOverlayMetadataSection extends $Record {
        overlays(): $List<$WithConditions<$OverlayMetadataSection$OverlayEntry>>;
        static NEOFORGE_TYPE: $MetadataSectionType<$GeneratingOverlayMetadataSection>;
        static TYPE: $MetadataSectionType<$GeneratingOverlayMetadataSection>;
        constructor(overlays: $List_<$WithConditions_<$OverlayMetadataSection$OverlayEntry_>>);
    }
    /**
     * Values that may be interpreted as {@link $GeneratingOverlayMetadataSection}.
     */
    export type $GeneratingOverlayMetadataSection_ = { overlays?: $List_<$WithConditions_<$OverlayMetadataSection$OverlayEntry_>>,  } | [overlays?: $List_<$WithConditions_<$OverlayMetadataSection$OverlayEntry_>>, ];
}
