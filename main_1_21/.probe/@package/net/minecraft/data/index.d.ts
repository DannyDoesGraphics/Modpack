import { $JsonElement_ } from "@package/com/google/gson";
import { $Codec_ } from "@package/com/mojang/serialization";
import { $Logger } from "@package/org/slf4j";
import { $HashCode } from "@package/com/google/common/hash";
import { $ConcurrentMap, $CompletableFuture } from "@package/java/util/concurrent";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $Comparator, $Map, $Collection_ } from "@package/java/util";
import { $ToIntFunction } from "@package/java/util/function";
import { $WorldVersion } from "@package/net/minecraft";
import { $HolderLookup$Provider, $Registry } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Path_, $Path } from "@package/java/nio/file";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";
export * as advancements from "@package/net/minecraft/data/advancements";
export * as worldgen from "@package/net/minecraft/data/worldgen";
export * as models from "@package/net/minecraft/data/models";
export * as tags from "@package/net/minecraft/data/tags";
export * as loot from "@package/net/minecraft/data/loot";
export * as registries from "@package/net/minecraft/data/registries";
export * as recipes from "@package/net/minecraft/data/recipes";
export * as structures from "@package/net/minecraft/data/structures";
export * as info from "@package/net/minecraft/data/info";
export * as metadata from "@package/net/minecraft/data/metadata";

declare module "@package/net/minecraft/data" {
    export class $BlockFamily {
        getBaseBlock(): $Block;
        getRecipeGroupPrefix(): (string) | undefined;
        getRecipeUnlockedBy(): (string) | undefined;
        shouldGenerateRecipe(): boolean;
        shouldGenerateModel(): boolean;
        get(variant: $BlockFamily$Variant_): $Block;
        getVariants(): $Map<$BlockFamily$Variant, $Block>;
        get baseBlock(): $Block;
        get recipeGroupPrefix(): (string) | undefined;
        get recipeUnlockedBy(): (string) | undefined;
        get variants(): $Map<$BlockFamily$Variant, $Block>;
    }
    export class $HashCache$ProviderCacheBuilder extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $HashCache$ProviderCacheBuilder}.
     */
    export type $HashCache$ProviderCacheBuilder_ = { version?: string, data?: $ConcurrentMap<$Path_, $HashCode>,  } | [version?: string, data?: $ConcurrentMap<$Path_, $HashCode>, ];
    export class $HashCache$UpdateFunction {
    }
    export interface $HashCache$UpdateFunction {
        update(output: $CachedOutput_): $CompletableFuture<never>;
    }
    /**
     * Values that may be interpreted as {@link $HashCache$UpdateFunction}.
     */
    export type $HashCache$UpdateFunction_ = ((arg0: $CachedOutput) => $CompletableFuture<never>);
    export class $PackOutput$PathProvider {
        file(location: $ResourceLocation_, extension: string): $Path;
        json(location: $ResourceLocation_): $Path;
    }
    export class $PackOutput$Target extends $Enum<$PackOutput$Target> {
        static values(): $PackOutput$Target[];
        static valueOf(arg0: string): $PackOutput$Target;
        static REPORTS: $PackOutput$Target;
        static RESOURCE_PACK: $PackOutput$Target;
        static DATA_PACK: $PackOutput$Target;
    }
    /**
     * Values that may be interpreted as {@link $PackOutput$Target}.
     */
    export type $PackOutput$Target_ = "data_pack" | "resource_pack" | "reports";
    export class $DataProvider$Factory<T extends $DataProvider> {
    }
    export interface $DataProvider$Factory<T extends $DataProvider> {
        create(output: $PackOutput): T;
    }
    /**
     * Values that may be interpreted as {@link $DataProvider$Factory}.
     */
    export type $DataProvider$Factory_<T> = ((arg0: $PackOutput) => T);
    export class $BlockFamily$Variant extends $Enum<$BlockFamily$Variant> {
        getRecipeGroup(): string;
        static values(): $BlockFamily$Variant[];
        static valueOf(arg0: string): $BlockFamily$Variant;
        static CUSTOM_FENCE_GATE: $BlockFamily$Variant;
        static WALL: $BlockFamily$Variant;
        static CUT: $BlockFamily$Variant;
        static CHISELED: $BlockFamily$Variant;
        static CUSTOM_FENCE: $BlockFamily$Variant;
        static BUTTON: $BlockFamily$Variant;
        static FENCE_GATE: $BlockFamily$Variant;
        static STAIRS: $BlockFamily$Variant;
        static FENCE: $BlockFamily$Variant;
        static WALL_SIGN: $BlockFamily$Variant;
        static DOOR: $BlockFamily$Variant;
        static MOSAIC: $BlockFamily$Variant;
        static TRAPDOOR: $BlockFamily$Variant;
        static PRESSURE_PLATE: $BlockFamily$Variant;
        static POLISHED: $BlockFamily$Variant;
        static CRACKED: $BlockFamily$Variant;
        static SIGN: $BlockFamily$Variant;
        static SLAB: $BlockFamily$Variant;
        get recipeGroup(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlockFamily$Variant}.
     */
    export type $BlockFamily$Variant_ = "button" | "chiseled" | "cracked" | "cut" | "door" | "custom_fence" | "fence" | "custom_fence_gate" | "fence_gate" | "mosaic" | "sign" | "slab" | "stairs" | "pressure_plate" | "polished" | "trapdoor" | "wall" | "wall_sign";
    export class $DataGenerator {
        getPackOutput(): $PackOutput;
        getPackOutput(arg0: string): $PackOutput;
        getPackGenerator(arg0: boolean, arg1: string, arg2: string): $DataGenerator$PackGenerator;
        getBuiltinDatapack(toRun: boolean, providerPrefix: string): $DataGenerator$PackGenerator;
        getBuiltinDatapack(arg0: boolean, arg1: string, arg2: string): $DataGenerator$PackGenerator;
        getProvidersView(): $Map<string, $DataProvider>;
        /**
         * Runs all the previously registered data providers.
         */
        run(): void;
        merge(arg0: $DataGenerator): void;
        addProvider<T extends $DataProvider>(arg0: boolean, arg1: T): T;
        addProvider<T extends $DataProvider>(arg0: boolean, arg1: $DataProvider$Factory_<T>): T;
        getVanillaPack(toRun: boolean): $DataGenerator$PackGenerator;
        constructor(rootOutputFolder: $Path_, version: $WorldVersion, alwaysGenerate: boolean);
        get providersView(): $Map<string, $DataProvider>;
    }
    export class $HashCache$ProviderCache extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $HashCache$ProviderCache}.
     */
    export type $HashCache$ProviderCache_ = { version?: string, data?: $ImmutableMap<$Path_, $HashCode>,  } | [version?: string, data?: $ImmutableMap<$Path_, $HashCode>, ];
    export class $HashCache$UpdateResult extends $Record {
        providerId(): string;
        writes(): number;
        cache(): $HashCache$ProviderCache;
        constructor(providerId: string, cache: $HashCache$ProviderCache_, writes: number);
    }
    /**
     * Values that may be interpreted as {@link $HashCache$UpdateResult}.
     */
    export type $HashCache$UpdateResult_ = { writes?: number, providerId?: string, cache?: $HashCache$ProviderCache_,  } | [writes?: number, providerId?: string, cache?: $HashCache$ProviderCache_, ];
    export class $DataGenerator$PackGenerator {
        addProvider<T extends $DataProvider>(factory: $DataProvider$Factory_<T>): T;
        constructor(toRun: $DataGenerator, providerPrefix: boolean, output: string, arg3: $PackOutput);
    }
    export class $Main {
        static createStandardGenerator(outputFolder: $Path_, inputFolders: $Collection_<$Path_>, client: boolean, server: boolean, dev: boolean, reports: boolean, validate: boolean, version: $WorldVersion, alwaysGenerate: boolean): $DataGenerator;
        static main(args: string[]): void;
        constructor();
    }
    export class $CachedOutput {
        static NO_CACHE: $CachedOutput;
    }
    export interface $CachedOutput {
        writeIfNeeded(filePath: $Path_, data: number[], hashCode: $HashCode): void;
    }
    /**
     * Values that may be interpreted as {@link $CachedOutput}.
     */
    export type $CachedOutput_ = ((arg0: $Path, arg1: number[], arg2: $HashCode) => void);
    export class $HashCache {
        applyUpdate(updateResult: $HashCache$UpdateResult_): void;
        /**
         * Writes the cache file containing the hashes of newly created files to the disk, and deletes any stale files.
         */
        purgeStaleAndWrite(): void;
        shouldRunInThisVersion(provider: string): boolean;
        generateUpdate(provider: string, updateFunction: $HashCache$UpdateFunction_): $CompletableFuture<$HashCache$UpdateResult>;
        constructor(rootDir: $Path_, providers: $Collection_<string>, version: $WorldVersion);
    }
    export class $BlockFamily$Builder {
        door(buttonBlock: $Block_): $BlockFamily$Builder;
        slab(buttonBlock: $Block_): $BlockFamily$Builder;
        trapdoor(buttonBlock: $Block_): $BlockFamily$Builder;
        pressurePlate(buttonBlock: $Block_): $BlockFamily$Builder;
        polished(buttonBlock: $Block_): $BlockFamily$Builder;
        cut(buttonBlock: $Block_): $BlockFamily$Builder;
        chiseled(buttonBlock: $Block_): $BlockFamily$Builder;
        stairs(buttonBlock: $Block_): $BlockFamily$Builder;
        fenceGate(buttonBlock: $Block_): $BlockFamily$Builder;
        dontGenerateRecipe(): $BlockFamily$Builder;
        recipeGroupPrefix(recipeGroupPrefix: string): $BlockFamily$Builder;
        recipeUnlockedBy(recipeGroupPrefix: string): $BlockFamily$Builder;
        mosaic(buttonBlock: $Block_): $BlockFamily$Builder;
        customFence(buttonBlock: $Block_): $BlockFamily$Builder;
        customFenceGate(buttonBlock: $Block_): $BlockFamily$Builder;
        dontGenerateModel(): $BlockFamily$Builder;
        fence(buttonBlock: $Block_): $BlockFamily$Builder;
        sign(signBlock: $Block_, wallSignBlock: $Block_): $BlockFamily$Builder;
        getFamily(): $BlockFamily;
        wall(buttonBlock: $Block_): $BlockFamily$Builder;
        button(buttonBlock: $Block_): $BlockFamily$Builder;
        cracked(buttonBlock: $Block_): $BlockFamily$Builder;
        constructor(baseBlock: $Block_);
        get family(): $BlockFamily;
    }
    export class $DataProvider {
        static saveStable<T>(output: $CachedOutput_, registries: $HolderLookup$Provider, codec: $Codec_<T>, value: T, path: $Path_): $CompletableFuture<never>;
        static saveStable(output: $CachedOutput_, json: $JsonElement_, path: $Path_): $CompletableFuture<never>;
        static FIXED_ORDER_FIELDS: $ToIntFunction<string>;
        static INDENT_WIDTH: $AtomicInteger;
        static KEY_COMPARATOR: $Comparator<string>;
        static LOGGER: $Logger;
    }
    export interface $DataProvider {
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        get name(): string;
    }
    export class $PackOutput {
        getOutputFolder(target: $PackOutput$Target_): $Path;
        getOutputFolder(): $Path;
        createPathProvider(target: $PackOutput$Target_, kind: string): $PackOutput$PathProvider;
        createRegistryTagsPathProvider(registryKey: $ResourceKey_<$Registry<never>>): $PackOutput$PathProvider;
        createRegistryElementsPathProvider(registryKey: $ResourceKey_<$Registry<never>>): $PackOutput$PathProvider;
        constructor(outputFolder: $Path_);
    }
    export class $HashCache$CacheUpdater implements $CachedOutput {
    }
    export class $BlockFamilies {
        static getAllFamilies(): $Stream<$BlockFamily>;
        static familyBuilder(baseBlock: $Block_): $BlockFamily$Builder;
        static MUD_BRICKS: $BlockFamily;
        static BAMBOO_PLANKS: $BlockFamily;
        static DARK_PRISMARINE: $BlockFamily;
        static EXPOSED_COPPER: $BlockFamily;
        static SANDSTONE: $BlockFamily;
        static SMOOTH_RED_SANDSTONE: $BlockFamily;
        static MANGROVE_PLANKS: $BlockFamily;
        static SPRUCE_PLANKS: $BlockFamily;
        static CRIMSON_PLANKS: $BlockFamily;
        static WAXED_CUT_COPPER: $BlockFamily;
        static EXPOSED_CUT_COPPER: $BlockFamily;
        static BRICKS: $BlockFamily;
        static WAXED_WEATHERED_CUT_COPPER: $BlockFamily;
        static QUARTZ: $BlockFamily;
        static POLISHED_GRANITE: $BlockFamily;
        static GRANITE: $BlockFamily;
        static BLACKSTONE: $BlockFamily;
        static TUFF: $BlockFamily;
        static DEEPSLATE: $BlockFamily;
        static COBBLED_DEEPSLATE: $BlockFamily;
        static SMOOTH_QUARTZ: $BlockFamily;
        static POLISHED_DIORITE: $BlockFamily;
        static MOSSY_COBBLESTONE: $BlockFamily;
        static WARPED_PLANKS: $BlockFamily;
        static CUT_SANDSTONE: $BlockFamily;
        static DEEPSLATE_TILES: $BlockFamily;
        static MOSSY_STONE_BRICKS: $BlockFamily;
        static PRISMARINE: $BlockFamily;
        static PURPUR: $BlockFamily;
        static TUFF_BRICKS: $BlockFamily;
        static SMOOTH_SANDSTONE: $BlockFamily;
        static DARK_OAK_PLANKS: $BlockFamily;
        static WAXED_WEATHERED_COPPER: $BlockFamily;
        static BAMBOO_MOSAIC: $BlockFamily;
        static JUNGLE_PLANKS: $BlockFamily;
        static POLISHED_BLACKSTONE_BRICKS: $BlockFamily;
        static CUT_COPPER: $BlockFamily;
        static COBBLESTONE: $BlockFamily;
        static OXIDIZED_CUT_COPPER: $BlockFamily;
        static STONE_BRICK: $BlockFamily;
        static WAXED_OXIDIZED_CUT_COPPER: $BlockFamily;
        static WEATHERED_COPPER: $BlockFamily;
        static WAXED_EXPOSED_COPPER: $BlockFamily;
        static END_STONE_BRICKS: $BlockFamily;
        static OAK_PLANKS: $BlockFamily;
        static POLISHED_DEEPSLATE: $BlockFamily;
        static CHERRY_PLANKS: $BlockFamily;
        static WAXED_OXIDIZED_COPPER: $BlockFamily;
        static CUT_RED_SANDSTONE: $BlockFamily;
        static RED_NETHER_BRICKS: $BlockFamily;
        static NETHER_BRICKS: $BlockFamily;
        static DEEPSLATE_BRICKS: $BlockFamily;
        static POLISHED_ANDESITE: $BlockFamily;
        static WAXED_COPPER_BLOCK: $BlockFamily;
        static BIRCH_PLANKS: $BlockFamily;
        static POLISHED_TUFF: $BlockFamily;
        static OXIDIZED_COPPER: $BlockFamily;
        static ACACIA_PLANKS: $BlockFamily;
        static DIORITE: $BlockFamily;
        static RED_SANDSTONE: $BlockFamily;
        static WAXED_EXPOSED_CUT_COPPER: $BlockFamily;
        static ANDESITE: $BlockFamily;
        static POLISHED_BLACKSTONE: $BlockFamily;
        static WEATHERED_CUT_COPPER: $BlockFamily;
        static PRISMARINE_BRICKS: $BlockFamily;
        static STONE: $BlockFamily;
        static COPPER_BLOCK: $BlockFamily;
        constructor();
        static get allFamilies(): $Stream<$BlockFamily>;
    }
}
