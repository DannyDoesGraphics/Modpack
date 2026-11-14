import { $RegistryLayer_ } from "@package/net/minecraft/server";
import { $Codec } from "@package/com/mojang/serialization";
import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEvent } from "@package/net/minecraft/world/level/gameevent";
import { $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $List, $Map_, $Collection_, $List_, $Collection, $Map } from "@package/java/util";
import { $DependencySorter$Entry, $ExtraCodecs$TagOrElementLocation } from "@package/net/minecraft/util";
import { $CatVariant } from "@package/net/minecraft/world/entity/animal";
import { $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Holder_, $Holder, $RegistryAccess, $Registry, $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $ITagBuilderExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryTypes } from "@special/types";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $Record, $Object } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $Item, $Instrument } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $FlatLevelGeneratorPreset } from "@package/net/minecraft/world/level/levelgen/flat";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $TagManagerKJS, $ReloadableServerResourcesKJS, $TagLoaderKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $BannerPattern } from "@package/net/minecraft/world/level/block/entity";
import { $DamageType } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/tags" {
    export class $PaintingVariantTags {
        static PLACEABLE: $TagKey<$PaintingVariant>;
    }
    export class $ItemTags {
        static create(arg0: $ResourceLocation_): $TagKey<$Item>;
        static SHARP_WEAPON_ENCHANTABLE: $TagKey<$Item>;
        static STONE_BRICKS: $TagKey<$Item>;
        static TRIMMABLE_ARMOR: $TagKey<$Item>;
        static HORSE_FOOD: $TagKey<$Item>;
        static FENCES: $TagKey<$Item>;
        static CHEST_ARMOR_ENCHANTABLE: $TagKey<$Item>;
        static LEAVES: $TagKey<$Item>;
        static PIG_FOOD: $TagKey<$Item>;
        static NOTE_BLOCK_TOP_INSTRUMENTS: $TagKey<$Item>;
        static WART_BLOCKS: $TagKey<$Item>;
        static SMELTS_TO_GLASS: $TagKey<$Item>;
        static CAMEL_FOOD: $TagKey<$Item>;
        static WOOL_CARPETS: $TagKey<$Item>;
        static CRIMSON_STEMS: $TagKey<$Item>;
        static BEDS: $TagKey<$Item>;
        static TRIM_MATERIALS: $TagKey<$Item>;
        static BANNERS: $TagKey<$Item>;
        static SHOVELS: $TagKey<$Item>;
        static ANVIL: $TagKey<$Item>;
        static CHEST_ARMOR: $TagKey<$Item>;
        static FOOT_ARMOR: $TagKey<$Item>;
        static FOOT_ARMOR_ENCHANTABLE: $TagKey<$Item>;
        static SWORD_ENCHANTABLE: $TagKey<$Item>;
        static MINING_ENCHANTABLE: $TagKey<$Item>;
        static ARROWS: $TagKey<$Item>;
        static PIGLIN_LOVED: $TagKey<$Item>;
        static WALLS: $TagKey<$Item>;
        static REDSTONE_ORES: $TagKey<$Item>;
        static MACE_ENCHANTABLE: $TagKey<$Item>;
        static TRAPDOORS: $TagKey<$Item>;
        static STAIRS: $TagKey<$Item>;
        static SPRUCE_LOGS: $TagKey<$Item>;
        static AXOLOTL_FOOD: $TagKey<$Item>;
        static MINING_LOOT_ENCHANTABLE: $TagKey<$Item>;
        static BEE_FOOD: $TagKey<$Item>;
        static TURTLE_FOOD: $TagKey<$Item>;
        static BREAKS_DECORATED_POTS: $TagKey<$Item>;
        static VANISHING_ENCHANTABLE: $TagKey<$Item>;
        static LOGS_THAT_BURN: $TagKey<$Item>;
        static CLUSTER_MAX_HARVESTABLES: $TagKey<$Item>;
        static AXES: $TagKey<$Item>;
        static LEG_ARMOR: $TagKey<$Item>;
        static OAK_LOGS: $TagKey<$Item>;
        static EQUIPPABLE_ENCHANTABLE: $TagKey<$Item>;
        static DARK_OAK_LOGS: $TagKey<$Item>;
        static HEAD_ARMOR: $TagKey<$Item>;
        static HEAD_ARMOR_ENCHANTABLE: $TagKey<$Item>;
        static COALS: $TagKey<$Item>;
        static OCELOT_FOOD: $TagKey<$Item>;
        static ARMOR_ENCHANTABLE: $TagKey<$Item>;
        static BUTTONS: $TagKey<$Item>;
        static SHEEP_FOOD: $TagKey<$Item>;
        static CAT_FOOD: $TagKey<$Item>;
        static CHEST_BOATS: $TagKey<$Item>;
        static DIAMOND_ORES: $TagKey<$Item>;
        static PIGLIN_REPELLENTS: $TagKey<$Item>;
        static STRIDER_TEMPT_ITEMS: $TagKey<$Item>;
        static FREEZE_IMMUNE_WEARABLES: $TagKey<$Item>;
        static DYEABLE: $TagKey<$Item>;
        static WOODEN_DOORS: $TagKey<$Item>;
        static SKULLS: $TagKey<$Item>;
        static PICKAXES: $TagKey<$Item>;
        static HOGLIN_FOOD: $TagKey<$Item>;
        static TRIDENT_ENCHANTABLE: $TagKey<$Item>;
        static GOLD_ORES: $TagKey<$Item>;
        static CANDLES: $TagKey<$Item>;
        static FENCE_GATES: $TagKey<$Item>;
        static EMERALD_ORES: $TagKey<$Item>;
        static FLOWERS: $TagKey<$Item>;
        static COW_FOOD: $TagKey<$Item>;
        static FROG_FOOD: $TagKey<$Item>;
        static PLANKS: $TagKey<$Item>;
        static WOODEN_SLABS: $TagKey<$Item>;
        static LLAMA_TEMPT_ITEMS: $TagKey<$Item>;
        static PIGLIN_FOOD: $TagKey<$Item>;
        static CHERRY_LOGS: $TagKey<$Item>;
        static SIGNS: $TagKey<$Item>;
        static DOORS: $TagKey<$Item>;
        static SWORDS: $TagKey<$Item>;
        static CROSSBOW_ENCHANTABLE: $TagKey<$Item>;
        static LOGS: $TagKey<$Item>;
        static HANGING_SIGNS: $TagKey<$Item>;
        static STONE_BUTTONS: $TagKey<$Item>;
        static PARROT_FOOD: $TagKey<$Item>;
        static STRIDER_FOOD: $TagKey<$Item>;
        static RABBIT_FOOD: $TagKey<$Item>;
        static COAL_ORES: $TagKey<$Item>;
        static BEACON_PAYMENT_ITEMS: $TagKey<$Item>;
        static WARPED_STEMS: $TagKey<$Item>;
        static COPPER_ORES: $TagKey<$Item>;
        static FISHES: $TagKey<$Item>;
        static LLAMA_FOOD: $TagKey<$Item>;
        static TRIM_TEMPLATES: $TagKey<$Item>;
        static WOOL: $TagKey<$Item>;
        static GOAT_FOOD: $TagKey<$Item>;
        static STONE_TOOL_MATERIALS: $TagKey<$Item>;
        static PANDA_FOOD: $TagKey<$Item>;
        static WEAPON_ENCHANTABLE: $TagKey<$Item>;
        static SAND: $TagKey<$Item>;
        static RAILS: $TagKey<$Item>;
        static NON_FLAMMABLE_WOOD: $TagKey<$Item>;
        static WOODEN_TRAPDOORS: $TagKey<$Item>;
        static DIRT: $TagKey<$Item>;
        static BAMBOO_BLOCKS: $TagKey<$Item>;
        static JUNGLE_LOGS: $TagKey<$Item>;
        static ARMADILLO_FOOD: $TagKey<$Item>;
        static DAMPENS_VIBRATIONS: $TagKey<$Item>;
        static FIRE_ASPECT_ENCHANTABLE: $TagKey<$Item>;
        static DECORATED_POT_SHERDS: $TagKey<$Item>;
        static SNIFFER_FOOD: $TagKey<$Item>;
        static ACACIA_LOGS: $TagKey<$Item>;
        static VILLAGER_PLANTABLE_SEEDS: $TagKey<$Item>;
        static IRON_ORES: $TagKey<$Item>;
        static COMPASSES: $TagKey<$Item>;
        static LEG_ARMOR_ENCHANTABLE: $TagKey<$Item>;
        static FOX_FOOD: $TagKey<$Item>;
        static STONE_CRAFTING_MATERIALS: $TagKey<$Item>;
        static HORSE_TEMPT_ITEMS: $TagKey<$Item>;
        static WOLF_FOOD: $TagKey<$Item>;
        static SMALL_FLOWERS: $TagKey<$Item>;
        static TERRACOTTA: $TagKey<$Item>;
        static SAPLINGS: $TagKey<$Item>;
        static WOODEN_PRESSURE_PLATES: $TagKey<$Item>;
        static HOES: $TagKey<$Item>;
        static BOATS: $TagKey<$Item>;
        static MANGROVE_LOGS: $TagKey<$Item>;
        static DECORATED_POT_INGREDIENTS: $TagKey<$Item>;
        static CREEPER_DROP_MUSIC_DISCS: $TagKey<$Item>;
        static WOODEN_STAIRS: $TagKey<$Item>;
        static LAPIS_ORES: $TagKey<$Item>;
        static BOOKSHELF_BOOKS: $TagKey<$Item>;
        static PARROT_POISONOUS_FOOD: $TagKey<$Item>;
        static SOUL_FIRE_BASE_BLOCKS: $TagKey<$Item>;
        static CREEPER_IGNITERS: $TagKey<$Item>;
        static SLABS: $TagKey<$Item>;
        static COMPLETES_FIND_TREE_TUTORIAL: $TagKey<$Item>;
        static BIRCH_LOGS: $TagKey<$Item>;
        static CHICKEN_FOOD: $TagKey<$Item>;
        static IGNORED_BY_PIGLIN_BABIES: $TagKey<$Item>;
        static MEAT: $TagKey<$Item>;
        static LECTERN_BOOKS: $TagKey<$Item>;
        static TALL_FLOWERS: $TagKey<$Item>;
        static WOODEN_BUTTONS: $TagKey<$Item>;
        static WOODEN_FENCES: $TagKey<$Item>;
        static BOW_ENCHANTABLE: $TagKey<$Item>;
        static DURABILITY_ENCHANTABLE: $TagKey<$Item>;
        static FISHING_ENCHANTABLE: $TagKey<$Item>;
    }
    export class $FlatLevelGeneratorPresetTags {
        static VISIBLE: $TagKey<$FlatLevelGeneratorPreset>;
    }
    export class $CatVariantTags {
        static DEFAULT_SPAWNS: $TagKey<$CatVariant>;
        static FULL_MOON_SPAWNS: $TagKey<$CatVariant>;
    }
    export class $TagFile extends $Record {
        remove(): $List<$TagEntry>;
        replace(): boolean;
        entries(): $List<$TagEntry>;
        static CODEC: $Codec<$TagFile>;
        /**
         * @deprecated
         */
        constructor(arg0: $List_<$TagEntry>, arg1: boolean);
        constructor(entries: $List_<$TagEntry>, replace: boolean, remove: $List_<$TagEntry>);
    }
    /**
     * Values that may be interpreted as {@link $TagFile}.
     */
    export type $TagFile_ = { replace?: boolean, remove?: $List_<$TagEntry>, entries?: $List_<$TagEntry>,  } | [replace?: boolean, remove?: $List_<$TagEntry>, entries?: $List_<$TagEntry>, ];
    export class $TagLoader<T> implements $TagLoaderKJS<any> {
        kjs$getResources(): $ReloadableServerResourcesKJS;
        loadAndBuild(resourceManager: $ResourceManager): $Map<$ResourceLocation, $Collection<$Object>>;
        kjs$init(resources: $ReloadableServerResourcesKJS, registry: $Registry<any>): void;
        handler$cnn000$owo$injectValues(manager: $ResourceManager, cir: $CallbackInfoReturnable<any>): void;
        handler$dmc000$accessories_compat_layer$attemptTagManipulation(resourceManager: $ResourceManager, cir: $CallbackInfoReturnable<any>): void;
        kjs$getRegistry(): $Registry<any>;
        load(resourceManager: $ResourceManager): $Map<$ResourceLocation, $List<$TagLoader$EntryWithSource>>;
        build(builders: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>): $Map<$ResourceLocation, $Collection<$Object>>;
        kjs$customTags(kjs$resources: $ReloadableServerResourcesKJS, map: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>): void;
        constructor(idToValue: $Function_<$ResourceLocation, (never) | undefined>, directory: string);
    }
    export class $BlockTags {
        static create(arg0: $ResourceLocation_): $TagKey<$Block>;
        static STONE_BRICKS: $TagKey<$Block>;
        static CRYSTAL_SOUND_BLOCKS: $TagKey<$Block>;
        static NYLIUM: $TagKey<$Block>;
        static BAMBOO_PLANTABLE_ON: $TagKey<$Block>;
        static FENCES: $TagKey<$Block>;
        static MINEABLE_WITH_PICKAXE: $TagKey<$Block>;
        static LEAVES: $TagKey<$Block>;
        static BASE_STONE_OVERWORLD: $TagKey<$Block>;
        static WART_BLOCKS: $TagKey<$Block>;
        static LUSH_GROUND_REPLACEABLE: $TagKey<$Block>;
        static SMELTS_TO_GLASS: $TagKey<$Block>;
        static PORTALS: $TagKey<$Block>;
        static WOOL_CARPETS: $TagKey<$Block>;
        static CRIMSON_STEMS: $TagKey<$Block>;
        static BEDS: $TagKey<$Block>;
        static BANNERS: $TagKey<$Block>;
        static INFINIBURN_END: $TagKey<$Block>;
        static REPLACEABLE: $TagKey<$Block>;
        static ANVIL: $TagKey<$Block>;
        static CROPS: $TagKey<$Block>;
        static INCORRECT_FOR_GOLD_TOOL: $TagKey<$Block>;
        static FIRE: $TagKey<$Block>;
        static GOATS_SPAWNABLE_ON: $TagKey<$Block>;
        static COMBINATION_STEP_SOUND_BLOCKS: $TagKey<$Block>;
        static STONE_ORE_REPLACEABLES: $TagKey<$Block>;
        static WALLS: $TagKey<$Block>;
        static REDSTONE_ORES: $TagKey<$Block>;
        static UNDERWATER_BONEMEALS: $TagKey<$Block>;
        static VIBRATION_RESONATORS: $TagKey<$Block>;
        static LAVA_POOL_STONE_CANNOT_REPLACE: $TagKey<$Block>;
        static TRAPDOORS: $TagKey<$Block>;
        static SHULKER_BOXES: $TagKey<$Block>;
        static DOES_NOT_BLOCK_HOPPERS: $TagKey<$Block>;
        static FALL_DAMAGE_RESETTING: $TagKey<$Block>;
        static CAMPFIRES: $TagKey<$Block>;
        static STAIRS: $TagKey<$Block>;
        static SWORD_EFFICIENT: $TagKey<$Block>;
        static AIR: $TagKey<$Block>;
        static SPRUCE_LOGS: $TagKey<$Block>;
        static AZALEA_GROWS_ON: $TagKey<$Block>;
        static BEEHIVES: $TagKey<$Block>;
        static LOGS_THAT_BURN: $TagKey<$Block>;
        static MAINTAINS_FARMLAND: $TagKey<$Block>;
        static CAMEL_SAND_STEP_SOUND_BLOCKS: $TagKey<$Block>;
        static BEACON_BASE_BLOCKS: $TagKey<$Block>;
        static SNOW_LAYER_CAN_SURVIVE_ON: $TagKey<$Block>;
        static OAK_LOGS: $TagKey<$Block>;
        static OVERWORLD_NATURAL_LOGS: $TagKey<$Block>;
        static CORAL_BLOCKS: $TagKey<$Block>;
        static DARK_OAK_LOGS: $TagKey<$Block>;
        static CONCRETE_POWDER: $TagKey<$Block>;
        static CORAL_PLANTS: $TagKey<$Block>;
        static CEILING_HANGING_SIGNS: $TagKey<$Block>;
        static HOGLIN_REPELLENTS: $TagKey<$Block>;
        static GEODE_INVALID_BLOCKS: $TagKey<$Block>;
        static DRIPSTONE_REPLACEABLE: $TagKey<$Block>;
        static NEEDS_DIAMOND_TOOL: $TagKey<$Block>;
        static INFINIBURN_OVERWORLD: $TagKey<$Block>;
        static SCULK_REPLACEABLE: $TagKey<$Block>;
        static BUTTONS: $TagKey<$Block>;
        static ENCHANTMENT_POWER_PROVIDER: $TagKey<$Block>;
        static DIAMOND_ORES: $TagKey<$Block>;
        static PIGLIN_REPELLENTS: $TagKey<$Block>;
        static MOSS_REPLACEABLE: $TagKey<$Block>;
        static SCULK_REPLACEABLE_WORLD_GEN: $TagKey<$Block>;
        static OCCLUDES_VIBRATION_SIGNALS: $TagKey<$Block>;
        static WOODEN_DOORS: $TagKey<$Block>;
        static DEEPSLATE_ORE_REPLACEABLES: $TagKey<$Block>;
        static MANGROVE_ROOTS_CAN_GROW_THROUGH: $TagKey<$Block>;
        static INCORRECT_FOR_DIAMOND_TOOL: $TagKey<$Block>;
        static FROG_PREFER_JUMP_TO: $TagKey<$Block>;
        static GOLD_ORES: $TagKey<$Block>;
        static ICE: $TagKey<$Block>;
        static ANCIENT_CITY_REPLACEABLE: $TagKey<$Block>;
        static INVALID_SPAWN_INSIDE: $TagKey<$Block>;
        static DRAGON_IMMUNE: $TagKey<$Block>;
        static MOB_INTERACTABLE_DOORS: $TagKey<$Block>;
        static TRAIL_RUINS_REPLACEABLE: $TagKey<$Block>;
        static CANDLES: $TagKey<$Block>;
        static FLOWER_POTS: $TagKey<$Block>;
        static FENCE_GATES: $TagKey<$Block>;
        static MANGROVE_LOGS_CAN_GROW_THROUGH: $TagKey<$Block>;
        static SNOW_LAYER_CANNOT_SURVIVE_ON: $TagKey<$Block>;
        static EMERALD_ORES: $TagKey<$Block>;
        static OVERWORLD_CARVER_REPLACEABLES: $TagKey<$Block>;
        static FLOWERS: $TagKey<$Block>;
        static STANDING_SIGNS: $TagKey<$Block>;
        static PLANKS: $TagKey<$Block>;
        static WOODEN_SLABS: $TagKey<$Block>;
        static SOUL_SPEED_BLOCKS: $TagKey<$Block>;
        static CHERRY_LOGS: $TagKey<$Block>;
        static SIGNS: $TagKey<$Block>;
        static DOORS: $TagKey<$Block>;
        static WOLVES_SPAWNABLE_ON: $TagKey<$Block>;
        static LOGS: $TagKey<$Block>;
        static SMALL_DRIPLEAF_PLACEABLE: $TagKey<$Block>;
        static STONE_BUTTONS: $TagKey<$Block>;
        static COAL_ORES: $TagKey<$Block>;
        static GUARDED_BY_PIGLINS: $TagKey<$Block>;
        static FROGS_SPAWNABLE_ON: $TagKey<$Block>;
        static INFINIBURN_NETHER: $TagKey<$Block>;
        static WARPED_STEMS: $TagKey<$Block>;
        static INCORRECT_FOR_NETHERITE_TOOL: $TagKey<$Block>;
        static COPPER_ORES: $TagKey<$Block>;
        static WITHER_IMMUNE: $TagKey<$Block>;
        static POLAR_BEARS_SPAWNABLE_ON_ALTERNATE: $TagKey<$Block>;
        static REPLACEABLE_BY_TREES: $TagKey<$Block>;
        static CANDLE_CAKES: $TagKey<$Block>;
        static ALL_SIGNS: $TagKey<$Block>;
        static FOXES_SPAWNABLE_ON: $TagKey<$Block>;
        static WOOL: $TagKey<$Block>;
        static INCORRECT_FOR_IRON_TOOL: $TagKey<$Block>;
        static SAND: $TagKey<$Block>;
        static RAILS: $TagKey<$Block>;
        static STRIDER_WARM_BLOCKS: $TagKey<$Block>;
        static SNIFFER_DIGGABLE_BLOCK: $TagKey<$Block>;
        static ALL_HANGING_SIGNS: $TagKey<$Block>;
        static SNOW: $TagKey<$Block>;
        static WOODEN_TRAPDOORS: $TagKey<$Block>;
        static DIRT: $TagKey<$Block>;
        static BAMBOO_BLOCKS: $TagKey<$Block>;
        static MUSHROOM_GROW_BLOCK: $TagKey<$Block>;
        static CAULDRONS: $TagKey<$Block>;
        static INCORRECT_FOR_WOODEN_TOOL: $TagKey<$Block>;
        static JUNGLE_LOGS: $TagKey<$Block>;
        static DAMPENS_VIBRATIONS: $TagKey<$Block>;
        static FEATURES_CANNOT_REPLACE: $TagKey<$Block>;
        static CORALS: $TagKey<$Block>;
        static ENCHANTMENT_POWER_TRANSMITTER: $TagKey<$Block>;
        static BEE_GROWABLES: $TagKey<$Block>;
        static RABBITS_SPAWNABLE_ON: $TagKey<$Block>;
        static DEAD_BUSH_MAY_PLACE_ON: $TagKey<$Block>;
        static SNAPS_GOAT_HORN: $TagKey<$Block>;
        static ACACIA_LOGS: $TagKey<$Block>;
        static WALL_CORALS: $TagKey<$Block>;
        static PRESSURE_PLATES: $TagKey<$Block>;
        static BADLANDS_TERRACOTTA: $TagKey<$Block>;
        static UNSTABLE_BOTTOM_CENTER: $TagKey<$Block>;
        static INCORRECT_FOR_STONE_TOOL: $TagKey<$Block>;
        static DRAGON_TRANSPARENT: $TagKey<$Block>;
        static IRON_ORES: $TagKey<$Block>;
        static VALID_SPAWN: $TagKey<$Block>;
        static SNIFFER_EGG_HATCH_BOOST: $TagKey<$Block>;
        static PREVENT_MOB_SPAWNING_INSIDE: $TagKey<$Block>;
        static ANIMALS_SPAWNABLE_ON: $TagKey<$Block>;
        static SMALL_FLOWERS: $TagKey<$Block>;
        static TERRACOTTA: $TagKey<$Block>;
        static WALL_POST_OVERRIDE: $TagKey<$Block>;
        static AXOLOTLS_SPAWNABLE_ON: $TagKey<$Block>;
        static SAPLINGS: $TagKey<$Block>;
        static PARROTS_SPAWNABLE_ON: $TagKey<$Block>;
        static BIG_DRIPLEAF_PLACEABLE: $TagKey<$Block>;
        static WALL_HANGING_SIGNS: $TagKey<$Block>;
        static STONE_PRESSURE_PLATES: $TagKey<$Block>;
        static ENDERMAN_HOLDABLE: $TagKey<$Block>;
        static WOODEN_PRESSURE_PLATES: $TagKey<$Block>;
        static INSIDE_STEP_SOUND_BLOCKS: $TagKey<$Block>;
        static MANGROVE_LOGS: $TagKey<$Block>;
        static MINEABLE_WITH_AXE: $TagKey<$Block>;
        static NEEDS_IRON_TOOL: $TagKey<$Block>;
        static WALL_SIGNS: $TagKey<$Block>;
        static MOOSHROOMS_SPAWNABLE_ON: $TagKey<$Block>;
        static WOODEN_STAIRS: $TagKey<$Block>;
        static LAPIS_ORES: $TagKey<$Block>;
        static CLIMBABLE: $TagKey<$Block>;
        static MINEABLE_WITH_SHOVEL: $TagKey<$Block>;
        static WITHER_SUMMON_BASE_BLOCKS: $TagKey<$Block>;
        static SOUL_FIRE_BASE_BLOCKS: $TagKey<$Block>;
        static MINEABLE_WITH_HOE: $TagKey<$Block>;
        static SLABS: $TagKey<$Block>;
        static COMPLETES_FIND_TREE_TUTORIAL: $TagKey<$Block>;
        static BIRCH_LOGS: $TagKey<$Block>;
        static ARMADILLO_SPAWNABLE_ON: $TagKey<$Block>;
        static CAVE_VINES: $TagKey<$Block>;
        static CONVERTABLE_TO_MUD: $TagKey<$Block>;
        static BASE_STONE_NETHER: $TagKey<$Block>;
        static BLOCKS_WIND_CHARGE_EXPLOSIONS: $TagKey<$Block>;
        static AZALEA_ROOT_REPLACEABLE: $TagKey<$Block>;
        static TALL_FLOWERS: $TagKey<$Block>;
        static WOODEN_BUTTONS: $TagKey<$Block>;
        static WOODEN_FENCES: $TagKey<$Block>;
        static IMPERMEABLE: $TagKey<$Block>;
        static NETHER_CARVER_REPLACEABLES: $TagKey<$Block>;
        static NEEDS_STONE_TOOL: $TagKey<$Block>;
    }
    export class $TagKey<T> extends $Record {
        /**
         * @note_to_llm `TagKey` is a reference to a tag. KubeJS has special type wrapper for `TagKey<T>`
         * that allows you to use string literals as `TagKey`. For example, "forge:ores" can be used as a `TagKey<Item>`.
         * Check available literals for tags using the #tool:prunoideae.probejs/listRegistries and #tool:prunoideae.probejs/queryTagsByRegex tools.
         * `TagKey` is a reference to a tag. KubeJS has special type wrapper for `TagKey<T>`
         * that allows you to use string literals as `TagKey`. For example, "forge:ores" can be used as a `TagKey<Item>`.
         * Check available literals for tags using the #tool:prunoideae.probejs/listRegistries and #tool:prunoideae.probejs/queryTagsByRegex tools.
         * `TagKey` is a reference to a tag. KubeJS has special type wrapper for `TagKey<T>`
         * that allows you to use string literals as `TagKey`. For example, "forge:ores" can be used as a `TagKey<Item>`.
         * Check available literals for tags using the #tool:prunoideae.probejs/listRegistries and #tool:prunoideae.probejs/queryTagsByRegex tools.
         */
        isFor(registry: $ResourceKey_<$Registry<never>>): boolean;
        static hashedCodec<T>(registry: $ResourceKey_<$Registry<T>>): $Codec<$TagKey<T>>;
        cast<E>(registry: $ResourceKey_<$Registry<E>>): ($TagKey<E>) | undefined;
        location(): $ResourceLocation;
        static create<T>(registry: $ResourceKey_<$Registry<T>>, location: $ResourceLocation_): $TagKey<T>;
        registry(): $ResourceKey<$Registry<T>>;
        static codec<T>(registry: $ResourceKey_<$Registry<T>>): $Codec<$TagKey<T>>;
        /**
         * @deprecated
         */
        constructor(registry: $ResourceKey_<$Registry<T>>, location: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $TagKey}.
     */
    export type $TagKey_<T> = RegistryTypes.ResolveTag<T>;
    export class $TagBuilder implements $ITagBuilderExtension {
        getRemoveEntries(): $Stream<$TagEntry>;
        isReplace(): boolean;
        addOptionalElement(elementLocation: $ResourceLocation_): $TagBuilder;
        addOptionalTag(elementLocation: $ResourceLocation_): $TagBuilder;
        remove(entry: $TagEntry): $TagBuilder;
        replace(arg0: boolean): $TagBuilder;
        replace(): $TagBuilder;
        add(entry: $TagEntry): $TagBuilder;
        static create(): $TagBuilder;
        build(): $List<$TagEntry>;
        addTag(elementLocation: $ResourceLocation_): $TagBuilder;
        addElement(elementLocation: $ResourceLocation_): $TagBuilder;
        getRawBuilder(): $TagBuilder;
        /**
         * @deprecated
         * Adds a tag entry to the remove list.
         */
        remove(tagEntry: $TagEntry, source: string): $TagBuilder;
        removeTag(elementLocation: $ResourceLocation_): $TagBuilder;
        /**
         * @deprecated
         * Adds a single-element entry to the remove list.
         */
        removeTag(elementID: $ResourceLocation_, source: string): $TagBuilder;
        /**
         * @deprecated
         * Adds a single-element entry to the remove list.
         */
        removeElement(elementID: $ResourceLocation_, source: string): $TagBuilder;
        removeElement(elementLocation: $ResourceLocation_): $TagBuilder;
        entries: $List<$TagEntry>;
        constructor();
        get removeEntries(): $Stream<$TagEntry>;
        get rawBuilder(): $TagBuilder;
    }
    export class $InstrumentTags {
        static GOAT_HORNS: $TagKey<$Instrument>;
        static SCREAMING_GOAT_HORNS: $TagKey<$Instrument>;
        static REGULAR_GOAT_HORNS: $TagKey<$Instrument>;
    }
    export interface $InstrumentTags {
    }
    export class $StructureTags {
        static ON_TRIAL_CHAMBERS_MAPS: $TagKey<$Structure>;
        static RUINED_PORTAL: $TagKey<$Structure>;
        static CATS_SPAWN_AS_BLACK: $TagKey<$Structure>;
        static MINESHAFT: $TagKey<$Structure>;
        static ON_SWAMP_EXPLORER_MAPS: $TagKey<$Structure>;
        static SHIPWRECK: $TagKey<$Structure>;
        static ON_WOODLAND_EXPLORER_MAPS: $TagKey<$Structure>;
        static ON_JUNGLE_EXPLORER_MAPS: $TagKey<$Structure>;
        static ON_TREASURE_MAPS: $TagKey<$Structure>;
        static ON_DESERT_VILLAGE_MAPS: $TagKey<$Structure>;
        static ON_SAVANNA_VILLAGE_MAPS: $TagKey<$Structure>;
        static VILLAGE: $TagKey<$Structure>;
        static ON_SNOWY_VILLAGE_MAPS: $TagKey<$Structure>;
        static EYE_OF_ENDER_LOCATED: $TagKey<$Structure>;
        static ON_TAIGA_VILLAGE_MAPS: $TagKey<$Structure>;
        static DOLPHIN_LOCATED: $TagKey<$Structure>;
        static CATS_SPAWN_IN: $TagKey<$Structure>;
        static ON_OCEAN_EXPLORER_MAPS: $TagKey<$Structure>;
        static OCEAN_RUIN: $TagKey<$Structure>;
        static ON_PLAINS_VILLAGE_MAPS: $TagKey<$Structure>;
    }
    export interface $StructureTags {
    }
    export class $TagEntry$Lookup<T> {
    }
    export interface $TagEntry$Lookup<T> {
        element(elementLocation: $ResourceLocation_): T;
        tag(tagLocation: $ResourceLocation_): $Collection<T>;
    }
    export class $WorldPresetTags {
        static EXTENDED: $TagKey<$WorldPreset>;
        static NORMAL: $TagKey<$WorldPreset>;
    }
    export class $BannerPatternTags {
        static PATTERN_ITEM_GLOBE: $TagKey<$BannerPattern>;
        static PATTERN_ITEM_FLOWER: $TagKey<$BannerPattern>;
        static PATTERN_ITEM_SKULL: $TagKey<$BannerPattern>;
        static PATTERN_ITEM_MOJANG: $TagKey<$BannerPattern>;
        static PATTERN_ITEM_CREEPER: $TagKey<$BannerPattern>;
        static PATTERN_ITEM_FLOW: $TagKey<$BannerPattern>;
        static PATTERN_ITEM_GUSTER: $TagKey<$BannerPattern>;
        static NO_ITEM_REQUIRED: $TagKey<$BannerPattern>;
        static PATTERN_ITEM_PIGLIN: $TagKey<$BannerPattern>;
    }
    export class $PoiTypeTags {
        static VILLAGE: $TagKey<$PoiType>;
        static ACQUIRABLE_JOB_SITE: $TagKey<$PoiType>;
        static BEE_HOME: $TagKey<$PoiType>;
    }
    export class $DamageTypeTags {
        static IS_LIGHTNING: $TagKey<$DamageType>;
        static PANIC_ENVIRONMENTAL_CAUSES: $TagKey<$DamageType>;
        static BYPASSES_EFFECTS: $TagKey<$DamageType>;
        static ALWAYS_MOST_SIGNIFICANT_FALL: $TagKey<$DamageType>;
        static BURN_FROM_STEPPING: $TagKey<$DamageType>;
        static BYPASSES_ARMOR: $TagKey<$DamageType>;
        static IS_PROJECTILE: $TagKey<$DamageType>;
        static IS_FIRE: $TagKey<$DamageType>;
        static BYPASSES_INVULNERABILITY: $TagKey<$DamageType>;
        static IS_FALL: $TagKey<$DamageType>;
        static NO_ANGER: $TagKey<$DamageType>;
        static CAN_BREAK_ARMOR_STAND: $TagKey<$DamageType>;
        static IS_PLAYER_ATTACK: $TagKey<$DamageType>;
        static BURNS_ARMOR_STANDS: $TagKey<$DamageType>;
        static BYPASSES_RESISTANCE: $TagKey<$DamageType>;
        static BYPASSES_COOLDOWN: $TagKey<$DamageType>;
        static NO_KNOCKBACK: $TagKey<$DamageType>;
        static WITCH_RESISTANT_TO: $TagKey<$DamageType>;
        static AVOIDS_GUARDIAN_THORNS: $TagKey<$DamageType>;
        static ALWAYS_HURTS_ENDER_DRAGONS: $TagKey<$DamageType>;
        static ALWAYS_KILLS_ARMOR_STANDS: $TagKey<$DamageType>;
        static IGNITES_ARMOR_STANDS: $TagKey<$DamageType>;
        static IS_DROWNING: $TagKey<$DamageType>;
        static IS_EXPLOSION: $TagKey<$DamageType>;
        static BYPASSES_ENCHANTMENTS: $TagKey<$DamageType>;
        static ALWAYS_TRIGGERS_SILVERFISH: $TagKey<$DamageType>;
        static BYPASSES_WOLF_ARMOR: $TagKey<$DamageType>;
        static DAMAGES_HELMET: $TagKey<$DamageType>;
        static WITHER_IMMUNE_TO: $TagKey<$DamageType>;
        static IS_FREEZING: $TagKey<$DamageType>;
        static PANIC_CAUSES: $TagKey<$DamageType>;
        static NO_IMPACT: $TagKey<$DamageType>;
        static BYPASSES_SHIELD: $TagKey<$DamageType>;
    }
    export interface $DamageTypeTags {
    }
    export class $EnchantmentTags {
        static TRADES_TAIGA_COMMON: $TagKey<$Enchantment>;
        static ARMOR_EXCLUSIVE: $TagKey<$Enchantment>;
        static TRADES_SNOW_COMMON: $TagKey<$Enchantment>;
        static RIPTIDE_EXCLUSIVE: $TagKey<$Enchantment>;
        static TRADES_SNOW_SPECIAL: $TagKey<$Enchantment>;
        static TRADES_SWAMP_SPECIAL: $TagKey<$Enchantment>;
        static TRADES_TAIGA_SPECIAL: $TagKey<$Enchantment>;
        static PREVENTS_DECORATED_POT_SHATTERING: $TagKey<$Enchantment>;
        static PREVENTS_ICE_MELTING: $TagKey<$Enchantment>;
        static TRADES_SAVANNA_COMMON: $TagKey<$Enchantment>;
        static CROSSBOW_EXCLUSIVE: $TagKey<$Enchantment>;
        static SMELTS_LOOT: $TagKey<$Enchantment>;
        static NON_TREASURE: $TagKey<$Enchantment>;
        static DAMAGE_EXCLUSIVE: $TagKey<$Enchantment>;
        static BOW_EXCLUSIVE: $TagKey<$Enchantment>;
        static TRADES_JUNGLE_SPECIAL: $TagKey<$Enchantment>;
        static MINING_EXCLUSIVE: $TagKey<$Enchantment>;
        static TRADEABLE: $TagKey<$Enchantment>;
        static TRADES_SWAMP_COMMON: $TagKey<$Enchantment>;
        static BOOTS_EXCLUSIVE: $TagKey<$Enchantment>;
        static CURSE: $TagKey<$Enchantment>;
        static IN_ENCHANTING_TABLE: $TagKey<$Enchantment>;
        static ON_RANDOM_LOOT: $TagKey<$Enchantment>;
        static ON_MOB_SPAWN_EQUIPMENT: $TagKey<$Enchantment>;
        static TRADES_DESERT_COMMON: $TagKey<$Enchantment>;
        static PREVENTS_INFESTED_SPAWNS: $TagKey<$Enchantment>;
        static TREASURE: $TagKey<$Enchantment>;
        static TRADES_PLAINS_SPECIAL: $TagKey<$Enchantment>;
        static TRADES_SAVANNA_SPECIAL: $TagKey<$Enchantment>;
        static TRADES_JUNGLE_COMMON: $TagKey<$Enchantment>;
        static DOUBLE_TRADE_PRICE: $TagKey<$Enchantment>;
        static TRADES_PLAINS_COMMON: $TagKey<$Enchantment>;
        static ON_TRADED_EQUIPMENT: $TagKey<$Enchantment>;
        static TOOLTIP_ORDER: $TagKey<$Enchantment>;
        static PREVENTS_BEE_SPAWNS_WHEN_MINING: $TagKey<$Enchantment>;
        static TRADES_DESERT_SPECIAL: $TagKey<$Enchantment>;
    }
    export interface $EnchantmentTags {
    }
    export class $TagNetworkSerialization$NetworkPayload {
        applyToRegistry<T>(registry: $Registry<T>): void;
        size(): number;
        write(buffer: $FriendlyByteBuf): void;
        static read(buffer: $FriendlyByteBuf): $TagNetworkSerialization$NetworkPayload;
    }
    export class $GameEventTags {
        static WARDEN_CAN_LISTEN: $TagKey<$GameEvent>;
        static IGNORE_VIBRATIONS_SNEAKING: $TagKey<$GameEvent>;
        static ALLAY_CAN_LISTEN: $TagKey<$GameEvent>;
        static VIBRATIONS: $TagKey<$GameEvent>;
        static SHRIEKER_CAN_LISTEN: $TagKey<$GameEvent>;
        constructor();
    }
    export class $FluidTags {
        static create(arg0: $ResourceLocation_): $TagKey<$Fluid>;
        static LAVA: $TagKey<$Fluid>;
        static WATER: $TagKey<$Fluid>;
    }
    export class $TagNetworkSerialization {
        static serializeTagsToNetwork(registryAccess: $LayeredRegistryAccess<$RegistryLayer_>): $Map<$ResourceKey<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>;
        constructor();
    }
    export class $TagEntry {
        isTag(): boolean;
        verifyIfPresent(elementPredicate: $Predicate_<$ResourceLocation>, tagPredicate: $Predicate_<$ResourceLocation>): boolean;
        static optionalElement(elementLocation: $ResourceLocation_): $TagEntry;
        elementOrTag(): $ExtraCodecs$TagOrElementLocation;
        static optionalTag(elementLocation: $ResourceLocation_): $TagEntry;
        getId(): $ResourceLocation;
        static element(elementLocation: $ResourceLocation_): $TagEntry;
        build<T>(lookup: $TagEntry$Lookup<T>, consumer: $Consumer_<T>): boolean;
        static tag(elementLocation: $ResourceLocation_): $TagEntry;
        isRequired(): boolean;
        visitRequiredDependencies(visitor: $Consumer_<$ResourceLocation>): void;
        visitOptionalDependencies(visitor: $Consumer_<$ResourceLocation>): void;
        static CODEC: $Codec<$TagEntry>;
        id: $ResourceLocation;
        required: boolean;
    }
    export class $EntityTypeTags {
        static FREEZE_HURTS_EXTRA_TYPES: $TagKey<$EntityType<never>>;
        static POWDER_SNOW_WALKABLE_MOBS: $TagKey<$EntityType<never>>;
        static AQUATIC: $TagKey<$EntityType<never>>;
        static UNDEAD: $TagKey<$EntityType<never>>;
        static CAN_TURN_IN_BOATS: $TagKey<$EntityType<never>>;
        static WITHER_FRIENDS: $TagKey<$EntityType<never>>;
        static DEFLECTS_PROJECTILES: $TagKey<$EntityType<never>>;
        static SENSITIVE_TO_SMITE: $TagKey<$EntityType<never>>;
        static ARTHROPOD: $TagKey<$EntityType<never>>;
        static NOT_SCARY_FOR_PUFFERFISH: $TagKey<$EntityType<never>>;
        static SENSITIVE_TO_IMPALING: $TagKey<$EntityType<never>>;
        static NON_CONTROLLING_RIDER: $TagKey<$EntityType<never>>;
        static IMMUNE_TO_OOZING: $TagKey<$EntityType<never>>;
        static NO_ANGER_FROM_WIND_CHARGE: $TagKey<$EntityType<never>>;
        static IMPACT_PROJECTILES: $TagKey<$EntityType<never>>;
        static ARROWS: $TagKey<$EntityType<never>>;
        static SENSITIVE_TO_BANE_OF_ARTHROPODS: $TagKey<$EntityType<never>>;
        static AXOLOTL_ALWAYS_HOSTILES: $TagKey<$EntityType<never>>;
        static BEEHIVE_INHABITORS: $TagKey<$EntityType<never>>;
        static FALL_DAMAGE_IMMUNE: $TagKey<$EntityType<never>>;
        static CAN_BREATHE_UNDER_WATER: $TagKey<$EntityType<never>>;
        static REDIRECTABLE_PROJECTILE: $TagKey<$EntityType<never>>;
        static FREEZE_IMMUNE_ENTITY_TYPES: $TagKey<$EntityType<never>>;
        static RAIDERS: $TagKey<$EntityType<never>>;
        static IGNORES_POISON_AND_REGEN: $TagKey<$EntityType<never>>;
        static ZOMBIES: $TagKey<$EntityType<never>>;
        static ILLAGER_FRIENDS: $TagKey<$EntityType<never>>;
        static ILLAGER: $TagKey<$EntityType<never>>;
        static AXOLOTL_HUNT_TARGETS: $TagKey<$EntityType<never>>;
        static DISMOUNTS_UNDERWATER: $TagKey<$EntityType<never>>;
        static IMMUNE_TO_INFESTED: $TagKey<$EntityType<never>>;
        static SKELETONS: $TagKey<$EntityType<never>>;
        static INVERTED_HEALING_AND_HARM: $TagKey<$EntityType<never>>;
        static FROG_FOOD: $TagKey<$EntityType<never>>;
    }
    export interface $EntityTypeTags {
    }
    export class $TagNetworkSerialization$TagOutput<T> {
    }
    export interface $TagNetworkSerialization$TagOutput<T> {
        accept(key: $TagKey_<T>, values: $List_<$Holder_<T>>): void;
    }
    /**
     * Values that may be interpreted as {@link $TagNetworkSerialization$TagOutput}.
     */
    export type $TagNetworkSerialization$TagOutput_<T> = ((arg0: $TagKey<T>, arg1: $List<$Holder<T>>) => void);
    export class $TagManager implements $PreparableReloadListener, $TagManagerKJS {
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$setResources(resources: $ReloadableServerResourcesKJS): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getResult(): $List<$TagManager$LoadResult<never>>;
        getName(): string;
        constructor(registryAccess: $RegistryAccess);
        get result(): $List<$TagManager$LoadResult<never>>;
        get name(): string;
    }
    export class $TagManager$LoadResult<T> extends $Record {
        key(): $ResourceKey<$Registry<T>>;
        tags(): $Map<$ResourceLocation, $Collection<$Holder<T>>>;
        constructor(arg0: $ResourceKey_<$Registry<T>>, arg1: $Map_<$ResourceLocation_, $Collection_<$Holder_<T>>>);
    }
    /**
     * Values that may be interpreted as {@link $TagManager$LoadResult}.
     */
    export type $TagManager$LoadResult_<T> = { key?: $ResourceKey_<$Registry<any>>, tags?: $Map_<$ResourceLocation_, $Collection_<$Holder_<any>>>,  } | [key?: $ResourceKey_<$Registry<any>>, tags?: $Map_<$ResourceLocation_, $Collection_<$Holder_<any>>>, ];
    export class $BiomeTags {
        static IS_DEEP_OCEAN: $TagKey<$Biome>;
        static HAS_VILLAGE_TAIGA: $TagKey<$Biome>;
        static WATER_ON_MAP_OUTLINES: $TagKey<$Biome>;
        static MORE_FREQUENT_DROWNED_SPAWNS: $TagKey<$Biome>;
        static HAS_ANCIENT_CITY: $TagKey<$Biome>;
        static SPAWNS_WHITE_RABBITS: $TagKey<$Biome>;
        static SPAWNS_SNOW_FOXES: $TagKey<$Biome>;
        static IS_RIVER: $TagKey<$Biome>;
        static HAS_SHIPWRECK: $TagKey<$Biome>;
        static HAS_STRONGHOLD: $TagKey<$Biome>;
        static IS_NETHER: $TagKey<$Biome>;
        static HAS_VILLAGE_DESERT: $TagKey<$Biome>;
        static HAS_VILLAGE_PLAINS: $TagKey<$Biome>;
        static IS_HILL: $TagKey<$Biome>;
        static SPAWNS_GOLD_RABBITS: $TagKey<$Biome>;
        static HAS_IGLOO: $TagKey<$Biome>;
        static PRODUCES_CORALS_FROM_BONEMEAL: $TagKey<$Biome>;
        static HAS_SWAMP_HUT: $TagKey<$Biome>;
        static HAS_RUINED_PORTAL_NETHER: $TagKey<$Biome>;
        static HAS_TRIAL_CHAMBERS: $TagKey<$Biome>;
        static HAS_OCEAN_RUIN_COLD: $TagKey<$Biome>;
        static INCREASED_FIRE_BURNOUT: $TagKey<$Biome>;
        static HAS_BURIED_TREASURE: $TagKey<$Biome>;
        static REQUIRED_OCEAN_MONUMENT_SURROUNDING: $TagKey<$Biome>;
        static HAS_RUINED_PORTAL_JUNGLE: $TagKey<$Biome>;
        static PLAYS_UNDERWATER_MUSIC: $TagKey<$Biome>;
        static IS_MOUNTAIN: $TagKey<$Biome>;
        static HAS_RUINED_PORTAL_OCEAN: $TagKey<$Biome>;
        static WITHOUT_PATROL_SPAWNS: $TagKey<$Biome>;
        static IS_TAIGA: $TagKey<$Biome>;
        static HAS_RUINED_PORTAL_MOUNTAIN: $TagKey<$Biome>;
        static WITHOUT_ZOMBIE_SIEGES: $TagKey<$Biome>;
        static HAS_NETHER_FOSSIL: $TagKey<$Biome>;
        static IS_FOREST: $TagKey<$Biome>;
        static IS_BADLANDS: $TagKey<$Biome>;
        static HAS_DESERT_PYRAMID: $TagKey<$Biome>;
        static HAS_MINESHAFT_MESA: $TagKey<$Biome>;
        static HAS_WOODLAND_MANSION: $TagKey<$Biome>;
        static HAS_NETHER_FORTRESS: $TagKey<$Biome>;
        static REDUCED_WATER_AMBIENT_SPAWNS: $TagKey<$Biome>;
        static IS_SAVANNA: $TagKey<$Biome>;
        static HAS_OCEAN_RUIN_WARM: $TagKey<$Biome>;
        static SPAWNS_WARM_VARIANT_FROGS: $TagKey<$Biome>;
        static HAS_BASTION_REMNANT: $TagKey<$Biome>;
        static POLAR_BEARS_SPAWN_ON_ALTERNATE_BLOCKS: $TagKey<$Biome>;
        static HAS_CLOSER_WATER_FOG: $TagKey<$Biome>;
        static IS_BEACH: $TagKey<$Biome>;
        static MINESHAFT_BLOCKING: $TagKey<$Biome>;
        static SNOW_GOLEM_MELTS: $TagKey<$Biome>;
        static HAS_MINESHAFT: $TagKey<$Biome>;
        static ALLOWS_SURFACE_SLIME_SPAWNS: $TagKey<$Biome>;
        static HAS_RUINED_PORTAL_DESERT: $TagKey<$Biome>;
        static HAS_END_CITY: $TagKey<$Biome>;
        static HAS_RUINED_PORTAL_STANDARD: $TagKey<$Biome>;
        static STRONGHOLD_BIASED_TO: $TagKey<$Biome>;
        static WITHOUT_WANDERING_TRADER_SPAWNS: $TagKey<$Biome>;
        static IS_END: $TagKey<$Biome>;
        static HAS_JUNGLE_TEMPLE: $TagKey<$Biome>;
        static HAS_OCEAN_MONUMENT: $TagKey<$Biome>;
        static HAS_VILLAGE_SNOWY: $TagKey<$Biome>;
        static HAS_PILLAGER_OUTPOST: $TagKey<$Biome>;
        static HAS_RUINED_PORTAL_SWAMP: $TagKey<$Biome>;
        static HAS_VILLAGE_SAVANNA: $TagKey<$Biome>;
        static SPAWNS_COLD_VARIANT_FROGS: $TagKey<$Biome>;
        static ALLOWS_TROPICAL_FISH_SPAWNS_AT_ANY_HEIGHT: $TagKey<$Biome>;
        static IS_OVERWORLD: $TagKey<$Biome>;
        static HAS_TRAIL_RUINS: $TagKey<$Biome>;
        static IS_OCEAN: $TagKey<$Biome>;
        static IS_JUNGLE: $TagKey<$Biome>;
        static HAS_SHIPWRECK_BEACHED: $TagKey<$Biome>;
    }
    export class $TagLoader$SortingEntry extends $Record implements $DependencySorter$Entry<$ResourceLocation> {
    }
    /**
     * Values that may be interpreted as {@link $TagLoader$SortingEntry}.
     */
    export type $TagLoader$SortingEntry_ = { entries?: $List_<$TagLoader$EntryWithSource_>,  } | [entries?: $List_<$TagLoader$EntryWithSource_>, ];
    export class $TagLoader$EntryWithSource extends $Record {
        remove(): boolean;
        source(): string;
        entry(): $TagEntry;
        constructor(arg0: $TagEntry, arg1: string);
        constructor(entry: $TagEntry, source: string, remove: boolean);
    }
    /**
     * Values that may be interpreted as {@link $TagLoader$EntryWithSource}.
     */
    export type $TagLoader$EntryWithSource_ = { source?: string, entry?: $TagEntry, remove?: boolean,  } | [source?: string, entry?: $TagEntry, remove?: boolean, ];
}
