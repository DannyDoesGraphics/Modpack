import { $File_ } from "@package/java/io";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $RecipeManager, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Item } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $ObjectiveCriteria } from "@package/net/minecraft/world/scores/criteria";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Spliterator, $Iterator, $Collection_ } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $Consumer_ } from "@package/java/util/function";
import { $DecimalFormat } from "@package/java/text";
import { $Registry } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $RecipeBookType_, $RecipeBookMenu } from "@package/net/minecraft/world/inventory";
import { $Iterable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/stats" {
    export class $ServerRecipeBook extends $RecipeBook {
        fromNbt(tag: $CompoundTag_, recipeManager: $RecipeManager): void;
        toNbt(): $CompoundTag;
        addRecipes(recipes: $Collection_<$RecipeHolder_<never>>, player: $ServerPlayer): number;
        removeRecipes(recipes: $Collection_<$RecipeHolder_<never>>, player: $ServerPlayer): number;
        sendInitialRecipeBook(player: $ServerPlayer): void;
        static RECIPE_BOOK_TAG: string;
        constructor();
    }
    export class $RecipeBookSettings$TypeSettings {
    }
    export class $Stats {
        static INTERACT_WITH_LOOM: $ResourceLocation;
        static ANIMALS_BRED: $ResourceLocation;
        static INTERACT_WITH_BLAST_FURNACE: $ResourceLocation;
        static TUNE_NOTEBLOCK: $ResourceLocation;
        static PLAY_NOTEBLOCK: $ResourceLocation;
        static PLAY_TIME: $ResourceLocation;
        static DEATHS: $ResourceLocation;
        static INTERACT_WITH_BREWINGSTAND: $ResourceLocation;
        static PLAY_RECORD: $ResourceLocation;
        static JUMP: $ResourceLocation;
        static POT_FLOWER: $ResourceLocation;
        static INTERACT_WITH_ANVIL: $ResourceLocation;
        static WALK_ON_WATER_ONE_CM: $ResourceLocation;
        static INTERACT_WITH_STONECUTTER: $ResourceLocation;
        static RAID_WIN: $ResourceLocation;
        static SWIM_ONE_CM: $ResourceLocation;
        static INTERACT_WITH_LECTERN: $ResourceLocation;
        static RAID_TRIGGER: $ResourceLocation;
        static CROUCH_ONE_CM: $ResourceLocation;
        static STRIDER_ONE_CM: $ResourceLocation;
        static USE_CAULDRON: $ResourceLocation;
        static DAMAGE_DEALT: $ResourceLocation;
        static BELL_RING: $ResourceLocation;
        static CLEAN_SHULKER_BOX: $ResourceLocation;
        static TIME_SINCE_DEATH: $ResourceLocation;
        static TRIGGER_TRAPPED_CHEST: $ResourceLocation;
        static ITEM_BROKEN: $StatType<$Item>;
        static FLY_ONE_CM: $ResourceLocation;
        static EAT_CAKE_SLICE: $ResourceLocation;
        static DAMAGE_ABSORBED: $ResourceLocation;
        static INTERACT_WITH_FURNACE: $ResourceLocation;
        static AVIATE_ONE_CM: $ResourceLocation;
        static INTERACT_WITH_GRINDSTONE: $ResourceLocation;
        static TARGET_HIT: $ResourceLocation;
        static FISH_CAUGHT: $ResourceLocation;
        static TIME_SINCE_REST: $ResourceLocation;
        static INTERACT_WITH_CRAFTING_TABLE: $ResourceLocation;
        static BLOCK_MINED: $StatType<$Block>;
        static DAMAGE_DEALT_RESISTED: $ResourceLocation;
        static INSPECT_HOPPER: $ResourceLocation;
        static ITEM_DROPPED: $StatType<$Item>;
        static DAMAGE_TAKEN: $ResourceLocation;
        static LEAVE_GAME: $ResourceLocation;
        static FALL_ONE_CM: $ResourceLocation;
        static INTERACT_WITH_CARTOGRAPHY_TABLE: $ResourceLocation;
        static TOTAL_WORLD_TIME: $ResourceLocation;
        static WALK_UNDER_WATER_ONE_CM: $ResourceLocation;
        static CLEAN_ARMOR: $ResourceLocation;
        static MINECART_ONE_CM: $ResourceLocation;
        static FILL_CAULDRON: $ResourceLocation;
        static CLIMB_ONE_CM: $ResourceLocation;
        static DROP: $ResourceLocation;
        static SPRINT_ONE_CM: $ResourceLocation;
        static ITEM_USED: $StatType<$Item>;
        static ENCHANT_ITEM: $ResourceLocation;
        static INTERACT_WITH_SMITHING_TABLE: $ResourceLocation;
        static CUSTOM: $StatType<$ResourceLocation>;
        static OPEN_ENDERCHEST: $ResourceLocation;
        static MOB_KILLS: $ResourceLocation;
        static SLEEP_IN_BED: $ResourceLocation;
        static HORSE_ONE_CM: $ResourceLocation;
        static INTERACT_WITH_BEACON: $ResourceLocation;
        static PIG_ONE_CM: $ResourceLocation;
        static ENTITY_KILLED: $StatType<$EntityType<never>>;
        static ITEM_PICKED_UP: $StatType<$Item>;
        static OPEN_BARREL: $ResourceLocation;
        static INSPECT_DISPENSER: $ResourceLocation;
        static ENTITY_KILLED_BY: $StatType<$EntityType<never>>;
        static WALK_ONE_CM: $ResourceLocation;
        static TALKED_TO_VILLAGER: $ResourceLocation;
        static DAMAGE_DEALT_ABSORBED: $ResourceLocation;
        static TRADED_WITH_VILLAGER: $ResourceLocation;
        static BOAT_ONE_CM: $ResourceLocation;
        static DAMAGE_RESISTED: $ResourceLocation;
        static INTERACT_WITH_SMOKER: $ResourceLocation;
        static CROUCH_TIME: $ResourceLocation;
        static CLEAN_BANNER: $ResourceLocation;
        static ITEM_CRAFTED: $StatType<$Item>;
        static DAMAGE_BLOCKED_BY_SHIELD: $ResourceLocation;
        static OPEN_SHULKER_BOX: $ResourceLocation;
        static INTERACT_WITH_CAMPFIRE: $ResourceLocation;
        static INSPECT_DROPPER: $ResourceLocation;
        static OPEN_CHEST: $ResourceLocation;
        static PLAYER_KILLS: $ResourceLocation;
        constructor();
    }
    export class $RecipeBookSettings {
        setOpen(bookType: $RecipeBookType_, filtering: boolean): void;
        isFiltering(bookType: $RecipeBookType_): boolean;
        setFiltering(bookType: $RecipeBookType_, filtering: boolean): void;
        isOpen(bookType: $RecipeBookType_): boolean;
        write(tag: $CompoundTag_): void;
        write(buffer: $FriendlyByteBuf): void;
        static read(buffer: $FriendlyByteBuf): $RecipeBookSettings;
        static read(tag: $CompoundTag_): $RecipeBookSettings;
        copy(): $RecipeBookSettings;
        replaceFrom(other: $RecipeBookSettings): void;
        constructor();
    }
    export class $RecipeBook {
        copyOverData(other: $RecipeBook): void;
        setOpen(bookType: $RecipeBookType_, filtering: boolean): void;
        willHighlight(recipe: $RecipeHolder_<never>): boolean;
        removeHighlight(recipe: $RecipeHolder_<never>): void;
        addHighlight(recipe: $RecipeHolder_<never>): void;
        isFiltering(bookType: $RecipeBookType_): boolean;
        isFiltering(bookMenu: $RecipeBookMenu<never, never>): boolean;
        setFiltering(bookType: $RecipeBookType_, filtering: boolean): void;
        setBookSettings(settings: $RecipeBookSettings): void;
        getBookSettings(): $RecipeBookSettings;
        setBookSetting(bookType: $RecipeBookType_, open: boolean, filtering: boolean): void;
        remove(recipe: $RecipeHolder_<never>): void;
        add(recipe: $RecipeHolder_<never>): void;
        contains(recipeId: $ResourceLocation_): boolean;
        contains(recipe: $RecipeHolder_<never> | null): boolean;
        isOpen(bookType: $RecipeBookType_): boolean;
        constructor();
    }
    /**
     * Manages counting a set of `Stat` objects, stored by a map of statistics to their count.
     * 
     * This base `StatsCounter` is only used client-side for keeping track of and reading counts sent from the server.
     * 
     * @see net.minecraft.stats.ServerStatsCounter
     */
    export class $StatsCounter {
        getValue<T>(type: $StatType_<T>, value: T): number;
        getValue(stat: $Stat_<never>): number;
        increment(player: $Player, stat: $Stat_<never>, amount: number): void;
        setValue(player: $Player, stat: $Stat_<never>, amount: number): void;
        constructor();
    }
    /**
     * An immutable statistic to be counted for a particular entry in the #type's registry. This is used as a key in a `StatsCounter` for a corresponding count.
     * 
     * By default, the statistic's name is formatted `.:.`, as created by `#buildName(StatType, Object)`.
     * 
     * @param  the type of the registry entry for this statistic
     * @see net.minecraft.stats.StatType
     * @see net.minecraft.stats.Stats
     */
    export class $Stat<T> extends $ObjectiveCriteria {
        getValue(): T;
        format(value: number): string;
        getType(): $StatType<T>;
        /**
         * @return the name for the specified `type` and `value` in the form `.:.`
         */
        static buildName<T>(type: $StatType_<T>, value: T): string;
        static DEATH_COUNT: $ObjectiveCriteria;
        static ARMOR: $ObjectiveCriteria;
        static TRIGGER: $ObjectiveCriteria;
        static KILL_COUNT_ALL: $ObjectiveCriteria;
        static AIR: $ObjectiveCriteria;
        static LEVEL: $ObjectiveCriteria;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Stat<never>>;
        static DUMMY: $ObjectiveCriteria;
        static EXPERIENCE: $ObjectiveCriteria;
        static HEALTH: $ObjectiveCriteria;
        static KILL_COUNT_PLAYERS: $ObjectiveCriteria;
        static TEAM_KILL: $ObjectiveCriteria[];
        static KILLED_BY_TEAM: $ObjectiveCriteria[];
        static FOOD: $ObjectiveCriteria;
        get value(): T;
        get type(): $StatType<T>;
    }
    /**
     * Values that may be interpreted as {@link $Stat}.
     */
    export type $Stat_<T> = string;
    export interface $StatType<T> extends RegistryMarked<RegistryTypes.StatTypeTag, RegistryTypes.StatType> {}
    /**
     * Server-side implementation of `StatsCounter`; handles counting, serialising, and de-serialising statistics, as well as sending them to connected clients via the award stats packet.
     */
    export class $ServerStatsCounter extends $StatsCounter {
        parseLocal(fixerUpper: $DataFixer, json: string): void;
        markAllDirty(): void;
        sendStats(player: $ServerPlayer): void;
        save(): void;
        constructor(server: $MinecraftServer, file: $File_);
    }
    /**
     * A formatter for a statistic's corresponding count.
     */
    export class $StatFormatter {
        static DISTANCE: $StatFormatter;
        static DECIMAL_FORMAT: $DecimalFormat;
        static DIVIDE_BY_TEN: $StatFormatter;
        static TIME: $StatFormatter;
        static DEFAULT: $StatFormatter;
    }
    export interface $StatFormatter {
        /**
         * Formats the specified `value` of a statistic.
         * 
         * @return the formatted `value`
         */
        format(value: number): string;
    }
    /**
     * Values that may be interpreted as {@link $StatFormatter}.
     */
    export type $StatFormatter_ = ((arg0: number) => string);
    /**
     * Holds a map of statistics with type `T` for a corresponding `#registry`.
     * 
     * A single type usually defines a particular thing to be counted, such as the number of items used or the number of blocks mined. However, there is also a custom type which uses entries from the custom stat registry. This is keyed by a `ResourceLocation` and can be used to count any statistic that doesn't require an associated `Registry` entry.
     * 
     * @param  the type of the associated registry's entry values
     * @see net.minecraft.stats.Stat
     * @see net.minecraft.stats.Stats
     * @see net.minecraft.core.Registry#STAT_TYPE
     * @see net.minecraft.core.Registry#CUSTOM_STAT
     */
    export class $StatType<T> implements $Iterable<$Stat<T>> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $Stat<$Stat<T>>>;
        get(value: $Stat_<T>, formatter: $StatFormatter_): $Stat<$Stat<T>>;
        get(value: $Stat_<T>): $Stat<$Stat<T>>;
        iterator(): $Iterator<$Stat<$Stat<T>>>;
        contains(value: $Stat_<T>): boolean;
        getDisplayName(): $Component;
        getRegistry(): $Registry<$Stat<T>>;
        spliterator(): $Spliterator<$Stat<T>>;
        forEach(arg0: $Consumer_<$Stat<T>>): void;
        constructor(registry: $Registry<$Stat_<T>>, displayName: $Component_);
        [Symbol.iterator](): Iterator<$Stat<$Stat<T>>>
        get displayName(): $Component;
        get registry(): $Registry<$Stat<T>>;
    }
    /**
     * Values that may be interpreted as {@link $StatType}.
     */
    export type $StatType_<T> = RegistryTypes.StatType;
}
