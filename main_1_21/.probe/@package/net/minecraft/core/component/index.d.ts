import { $DataResult, $DynamicOps, $Codec, $Codec_ } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EventStream } from "@package/io/wispforest/owo/util";
import { $UUID_, $Set_, $Map, $Map$Entry, $Set, $Spliterator, $Iterator, $List, $Map_, $List_ } from "@package/java/util";
import { $Unit_, $Unit } from "@package/net/minecraft/util";
import { $LockCode } from "@package/net/minecraft/world";
import { $Consumer_, $Predicate_, $Predicate } from "@package/java/util/function";
import { $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Registry, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $IDataComponentHolderExtension, $IDataComponentMapBuilderExtensions } from "@package/net/neoforged/neoforge/common/extensions";
import { $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { RegistryMarked, RegistryTypes, DataComponentTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ComponentMapImplAccessor } from "@package/io/wispforest/owo/mixin/ext";
import { $MapId } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Iterable, $Record, $Object } from "@package/java/lang";
import { $ArmorTrim } from "@package/net/minecraft/world/item/armortrim";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Rarity, $Rarity_, $DyeColor, $DyeColor_, $ItemStack_, $AdventureModePredicate, $Instrument, $JukeboxPlayable } from "@package/net/minecraft/world/item";
import { $PatchedDataComponentMapExtension } from "@package/io/wispforest/accessories/pond/stack";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ItemLore, $ItemAttributeModifiers, $Fireworks, $CustomData, $Unbreakable, $ItemContainerContents, $MapPostProcessing, $MapItemColor, $BlockItemStateProperties, $DebugStickState, $WritableBookContent, $Tool, $ChargedProjectiles, $SuspiciousStewEffects, $MapDecorations, $CustomModelData, $DyedItemColor, $LodestoneTracker, $SeededContainerLoot, $WrittenBookContent, $BundleContents, $ResolvableProfile, $FireworkExplosion } from "@package/net/minecraft/world/item/component";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $OwoComponentTypeBuilder } from "@package/io/wispforest/owo/serialization";
import { $SerializationContext, $Endec } from "@package/io/wispforest/endec";
import { $Stream } from "@package/java/util/stream";
import { $FoodProperties } from "@package/net/minecraft/world/food";
import { $PotionContents, $PotionContents_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $PotDecorations, $BeehiveBlockEntity$Occupant, $BannerPatternLayers } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $ChangePublisher, $ChangeSubscriber } from "@package/net/caffeinemc/mods/lithium/common/util/change_tracking";

declare module "@package/net/minecraft/core/component" {
    export class $DataComponentPredicate implements $Predicate<$DataComponentMap> {
        asPatch(): $DataComponentPatch;
        alwaysMatches(): boolean;
        test(components: $DataComponentMap_): boolean;
        test(components: $DataComponentHolder_): boolean;
        static builder(): $DataComponentPredicate$Builder;
        static allOf(expectedComponents: $DataComponentMap_): $DataComponentPredicate;
        or(arg0: $Predicate_<$DataComponentMap>): $Predicate<$DataComponentMap>;
        negate(): $Predicate<$DataComponentMap>;
        and(arg0: $Predicate_<$DataComponentMap>): $Predicate<$DataComponentMap>;
        static CODEC: $Codec<$DataComponentPredicate>;
        static EMPTY: $DataComponentPredicate;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DataComponentPredicate>;
    }
    export class $DataComponentPatch {
        size(): number;
        get<T>(component: $DataComponentType_<T>): (T) | undefined;
        isEmpty(): boolean;
        split(): $DataComponentPatch$SplitResult;
        static builder(): $DataComponentPatch$Builder;
        entrySet(): $Set<$Map$Entry<$DataComponentType<never>, (never) | undefined>>;
        forget(predicate: $Predicate_<$DataComponentType<never>>): $DataComponentPatch;
        static CODEC: $Codec<$DataComponentPatch>;
        static EMPTY: $DataComponentPatch;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DataComponentPatch>;
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentPatch}.
     */
    export type $DataComponentPatch_ = Partial<DataComponentTypes.InputMap>;
    export class $DataComponentMap {
        static makeCodecFromMap(codec: $Codec_<$Map_<$DataComponentType_<never>, $Object>>): $Codec<$DataComponentMap>;
        static makeCodec(codec: $Codec_<$DataComponentType_<never>>): $Codec<$DataComponentMap>;
        static builder(): $DataComponentMap$Builder;
        static composite(map1: $DataComponentMap_, map2: $DataComponentMap_): $DataComponentMap;
        static CODEC: $Codec<$DataComponentMap>;
        static EMPTY: $DataComponentMap;
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
    }
    export interface $DataComponentMap extends $Iterable<$TypedDataComponent<never>> {
        size(): number;
        get<T>(component: $DataComponentType_<T>): T;
        isEmpty(): boolean;
        iterator(): $Iterator<$TypedDataComponent<never>>;
        stream(): $Stream<$TypedDataComponent<never>>;
        filter(predicate: $Predicate_<$DataComponentType<never>>): $DataComponentMap;
        keySet(): $Set<$DataComponentType<never>>;
        getOrDefault<T>(component: $DataComponentType_<T>, defaultValue: T): T;
        has(component: $DataComponentType_<never>): boolean;
        getTyped<T>(component: $DataComponentType_<T>): $TypedDataComponent<T>;
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentMap}.
     */
    export type $DataComponentMap_ = Partial<DataComponentTypes.InputMap>;
    export class $DataComponentPredicate$Builder {
        build(): $DataComponentPredicate;
        expect<T>(component: $DataComponentType_<T>, value: T): $DataComponentPredicate$Builder;
    }
    export class $DataComponentPatch$PatchKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DataComponentPatch$PatchKey}.
     */
    export type $DataComponentPatch$PatchKey_ = { removed?: boolean, type?: $DataComponentType_<never>,  } | [removed?: boolean, type?: $DataComponentType_<never>, ];
    export class $TypedDataComponent<T> extends $Record {
        static createUnchecked<T>(type: $DataComponentType_<T>, value: $Object): $TypedDataComponent<T>;
        encodeValue<D>(ops: $DynamicOps<D>): $DataResult<D>;
        type(): $DataComponentType<T>;
        value(): T;
        applyTo(map: $PatchedDataComponentMap): void;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TypedDataComponent<never>>;
        constructor(arg0: $DataComponentType_<T>, arg1: T);
    }
    /**
     * Values that may be interpreted as {@link $TypedDataComponent}.
     */
    export type $TypedDataComponent_<T> = { type?: $DataComponentType_<any>, value?: any,  } | [type?: $DataComponentType_<any>, value?: any, ];
    export class $DataComponentType<T> {
        static builder<T>(): $DataComponentType$Builder<T>;
        static CODEC: $Codec<$DataComponentType<never>>;
        static VALUE_MAP_CODEC: $Codec<$Map<$DataComponentType<never>, $Object>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DataComponentType<never>>;
        static PERSISTENT_CODEC: $Codec<$DataComponentType<never>>;
    }
    export interface $DataComponentType<T> {
        codecOrThrow(): $Codec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        isTransient(): boolean;
        codec(): $Codec<T>;
        get transient(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentType}.
     */
    export type $DataComponentType_<T> = RegistryTypes.DataComponentType | RegistryTypes.EnchantmentEffectComponentType;
    export class $PatchedDataComponentMap implements $DataComponentMap, $PatchedDataComponentMapExtension, $ComponentMapImplAccessor, $ChangePublisher<any> {
        accessories$getMutationEvent(itemStack: $ItemStack_): $EventStream<any>;
        accessories$hasChanged(): boolean;
        lithium$unsubscribe(arg0: $ChangeSubscriber<any>): number;
        asPatch(): $DataComponentPatch;
        isPatchEmpty(): boolean;
        applyPatch(patch: $DataComponentPatch_): void;
        restorePatch(patch: $DataComponentPatch_): void;
        static fromPatch(prototype: $DataComponentMap_, patch: $DataComponentPatch_): $PatchedDataComponentMap;
        remove<T>(component: $DataComponentType_<T>): T;
        size(): number;
        get<T>(component: $DataComponentType_<T>): T;
        iterator(): $Iterator<$TypedDataComponent<never>>;
        set<T>(component: $DataComponentType_<T>, value: T | null): T;
        keySet(): $Set<$DataComponentType<never>>;
        copy(): $PatchedDataComponentMap;
        setAll(prototype: $DataComponentMap_): void;
        lithium$subscribe(arg0: $ChangeSubscriber<any>, arg1: number): void;
        isEmpty(): boolean;
        stream(): $Stream<$TypedDataComponent<never>>;
        filter(predicate: $Predicate_<$DataComponentType<never>>): $DataComponentMap;
        getOrDefault<T>(component: $DataComponentType_<T>, value: T): T;
        has(component: $DataComponentType_<never>): boolean;
        getTyped<T>(component: $DataComponentType_<T>): $TypedDataComponent<T>;
        lithium$isSubscribedWithData(arg0: $ChangeSubscriber<$ItemStack_>, arg1: number): boolean;
        lithium$unsubscribeWithData(arg0: $ChangeSubscriber<$TypedDataComponent_<never>>, arg1: number): void;
        spliterator(): $Spliterator<$TypedDataComponent<never>>;
        forEach(arg0: $Consumer_<$TypedDataComponent<never>>): void;
        owo$setBaseComponents(prototype: $DataComponentMap_): void;
        owo$getBaseComponents(): $DataComponentMap;
        copyOnWrite: boolean;
        constructor(prototype: $DataComponentMap_);
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
        get patchEmpty(): boolean;
        set all(value: $DataComponentMap_);
        get empty(): boolean;
    }
    export class $DataComponentMap$Builder implements $IDataComponentMapBuilderExtensions, $ComponentFunctions {
        kjs$getComponentMap(): $DataComponentMap;
        kjs$remove(type: $DataComponentType_<any>): $ComponentFunctions;
        kjs$get(type: $DataComponentType_<any>): $Object;
        addAll(components: $DataComponentMap_): $DataComponentMap$Builder;
        build(): $DataComponentMap;
        resetComponents(): $ComponentFunctions;
        patch(components: $DataComponentPatch_): $ComponentFunctions;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        getComponentString(): string;
        setCustomData(tag: $CompoundTag_): void;
        getCustomData(): $CompoundTag;
        setRarity(rarity: $Rarity_): void;
        setCustomName(name: $Component_): void;
        getCustomName(): $Component;
        setLore(lines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        setCustomModelData(data: number): void;
        setAdditionalTooltipHidden(): void;
        setTooltipHidden(): void;
        setGlintOverride(override: boolean): void;
        setDyedColor(color: $KubeColor_): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        setPotionContents(contents: $PotionContents_): void;
        setPotionId(potion: $Holder_<$Potion>): void;
        setEntityData(tag: $CompoundTag_): void;
        setProfile(name: string, uuid: $UUID_): void;
        setProfile(profile: $GameProfile): void;
        setBaseColor(color: $DyeColor_): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        setLockCode(lock: string): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        set unit(value: $DataComponentType_<$Unit_>);
        get componentString(): string;
        set rarity(value: $Rarity_);
        set customModelData(value: number);
        set glintOverride(value: boolean);
        set dyedColor(value: $KubeColor_);
        set dyedColorWithTooltip(value: $KubeColor_);
        set potionContents(value: $PotionContents_);
        set potionId(value: $Holder_<$Potion>);
        set entityData(value: $CompoundTag_);
        set baseColor(value: $DyeColor_);
        set blockStateProperties(value: $Map_<string, string>);
        set lockCode(value: string);
    }
    export class $DataComponentPatch$SplitResult extends $Record {
        added(): $DataComponentMap;
        removed(): $Set<$DataComponentType<never>>;
        static EMPTY: $DataComponentPatch$SplitResult;
        constructor(added: $DataComponentMap_, removed: $Set_<$DataComponentType_<never>>);
    }
    /**
     * Values that may be interpreted as {@link $DataComponentPatch$SplitResult}.
     */
    export type $DataComponentPatch$SplitResult_ = { removed?: $Set_<$DataComponentType_<never>>, added?: $DataComponentMap_,  } | [removed?: $Set_<$DataComponentType_<never>>, added?: $DataComponentMap_, ];
    export class $DataComponentPatch$Builder implements $ComponentFunctions {
        kjs$remove(type: $DataComponentType_<any>): $ComponentFunctions;
        kjs$get(type: $DataComponentType_<any>): $Object;
        remove<T>(component: $DataComponentType_<T>): $DataComponentPatch$Builder;
        build(): $DataComponentPatch;
        resetComponents(): $ComponentFunctions;
        patch(components: $DataComponentPatch_): $ComponentFunctions;
        getComponentMap(): $DataComponentMap;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        getComponentString(): string;
        setCustomData(tag: $CompoundTag_): void;
        getCustomData(): $CompoundTag;
        setRarity(rarity: $Rarity_): void;
        setCustomName(name: $Component_): void;
        getCustomName(): $Component;
        setLore(lines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        setCustomModelData(data: number): void;
        setAdditionalTooltipHidden(): void;
        setTooltipHidden(): void;
        setGlintOverride(override: boolean): void;
        setDyedColor(color: $KubeColor_): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        setPotionContents(contents: $PotionContents_): void;
        setPotionId(potion: $Holder_<$Potion>): void;
        setEntityData(tag: $CompoundTag_): void;
        setProfile(name: string, uuid: $UUID_): void;
        setProfile(profile: $GameProfile): void;
        setBaseColor(color: $DyeColor_): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        setLockCode(lock: string): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get componentMap(): $DataComponentMap;
        set unit(value: $DataComponentType_<$Unit_>);
        get componentString(): string;
        set rarity(value: $Rarity_);
        set customModelData(value: number);
        set glintOverride(value: boolean);
        set dyedColor(value: $KubeColor_);
        set dyedColorWithTooltip(value: $KubeColor_);
        set potionContents(value: $PotionContents_);
        set potionId(value: $Holder_<$Potion>);
        set entityData(value: $CompoundTag_);
        set baseColor(value: $DyeColor_);
        set blockStateProperties(value: $Map_<string, string>);
        set lockCode(value: string);
    }
    export class $DataComponentHolder {
    }
    export interface $DataComponentHolder extends $IDataComponentHolderExtension {
        get<T>(component: $DataComponentType_<T>): T;
        getOrDefault<T>(component: $DataComponentType_<T>, defaultValue: T): T;
        has(component: $DataComponentType_<never>): boolean;
        getComponents(): $DataComponentMap;
        get components(): $DataComponentMap;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentHolder}.
     */
    export type $DataComponentHolder_ = (() => $DataComponentMap_);
    export interface $DataComponentType<T> extends RegistryMarked<RegistryTypes.EnchantmentEffectComponentTypeTag, RegistryTypes.EnchantmentEffectComponentType> {}
    export class $DataComponentType$Builder$SimpleType<T> implements $DataComponentType<T> {
        codecOrThrow(): $Codec<T>;
        isTransient(): boolean;
        get transient(): boolean;
    }
    export class $DataComponents {
        static bootstrap(registry: $Registry<$DataComponentType_<never>>): $DataComponentType<never>;
        static CONTAINER_LOOT: $DataComponentType<$SeededContainerLoot>;
        static TRIM: $DataComponentType<$ArmorTrim>;
        static BASE_COLOR: $DataComponentType<$DyeColor>;
        static BLOCK_STATE: $DataComponentType<$BlockItemStateProperties>;
        static LOCK: $DataComponentType<$LockCode>;
        static CUSTOM_MODEL_DATA: $DataComponentType<$CustomModelData>;
        static BUNDLE_CONTENTS: $DataComponentType<$BundleContents>;
        static RARITY: $DataComponentType<$Rarity>;
        static UNBREAKABLE: $DataComponentType<$Unbreakable>;
        static FIRE_RESISTANT: $DataComponentType<$Unit>;
        static WRITTEN_BOOK_CONTENT: $DataComponentType<$WrittenBookContent>;
        static ITEM_NAME: $DataComponentType<$Component>;
        static POTION_CONTENTS: $DataComponentType<$PotionContents>;
        static NOTE_BLOCK_SOUND: $DataComponentType<$ResourceLocation>;
        static ENCHANTMENTS: $DataComponentType<$ItemEnchantments>;
        static ATTRIBUTE_MODIFIERS: $DataComponentType<$ItemAttributeModifiers>;
        static CREATIVE_SLOT_LOCK: $DataComponentType<$Unit>;
        static CUSTOM_DATA: $DataComponentType<$CustomData>;
        static MAP_COLOR: $DataComponentType<$MapItemColor>;
        static MAP_DECORATIONS: $DataComponentType<$MapDecorations>;
        static BLOCK_ENTITY_DATA: $DataComponentType<$CustomData>;
        static MAX_STACK_SIZE: $DataComponentType<number>;
        static DAMAGE: $DataComponentType<number>;
        static CAN_PLACE_ON: $DataComponentType<$AdventureModePredicate>;
        static BEES: $DataComponentType<$List<$BeehiveBlockEntity$Occupant>>;
        static ENCHANTMENT_GLINT_OVERRIDE: $DataComponentType<boolean>;
        static DYED_COLOR: $DataComponentType<$DyedItemColor>;
        static BUCKET_ENTITY_DATA: $DataComponentType<$CustomData>;
        static CAN_BREAK: $DataComponentType<$AdventureModePredicate>;
        static DEBUG_STICK_STATE: $DataComponentType<$DebugStickState>;
        static FIREWORKS: $DataComponentType<$Fireworks>;
        static REPAIR_COST: $DataComponentType<number>;
        static MAP_POST_PROCESSING: $DataComponentType<$MapPostProcessing>;
        static CUSTOM_NAME: $DataComponentType<$Component>;
        static LODESTONE_TRACKER: $DataComponentType<$LodestoneTracker>;
        static TOOL: $DataComponentType<$Tool>;
        static STORED_ENCHANTMENTS: $DataComponentType<$ItemEnchantments>;
        static RECIPES: $DataComponentType<$List<$ResourceLocation>>;
        static POT_DECORATIONS: $DataComponentType<$PotDecorations>;
        static PROFILE: $DataComponentType<$ResolvableProfile>;
        static LORE: $DataComponentType<$ItemLore>;
        static COMMON_ITEM_COMPONENTS: $DataComponentMap;
        static MAX_DAMAGE: $DataComponentType<number>;
        static FIREWORK_EXPLOSION: $DataComponentType<$FireworkExplosion>;
        static MAP_ID: $DataComponentType<$MapId>;
        static HIDE_ADDITIONAL_TOOLTIP: $DataComponentType<$Unit>;
        static SUSPICIOUS_STEW_EFFECTS: $DataComponentType<$SuspiciousStewEffects>;
        static HIDE_TOOLTIP: $DataComponentType<$Unit>;
        static INSTRUMENT: $DataComponentType<$Holder<$Instrument>>;
        static INTANGIBLE_PROJECTILE: $DataComponentType<$Unit>;
        static ENTITY_DATA: $DataComponentType<$CustomData>;
        static CHARGED_PROJECTILES: $DataComponentType<$ChargedProjectiles>;
        static WRITABLE_BOOK_CONTENT: $DataComponentType<$WritableBookContent>;
        static CONTAINER: $DataComponentType<$ItemContainerContents>;
        static OMINOUS_BOTTLE_AMPLIFIER: $DataComponentType<number>;
        static JUKEBOX_PLAYABLE: $DataComponentType<$JukeboxPlayable>;
        static BANNER_PATTERNS: $DataComponentType<$BannerPatternLayers>;
        static FOOD: $DataComponentType<$FoodProperties>;
        constructor();
    }
    export class $DataComponentMap$Builder$SimpleMap extends $Record implements $DataComponentMap {
        size(): number;
        get<T>(arg0: $DataComponentType_<T>): T;
        iterator(): $Iterator<$TypedDataComponent<never>>;
        map(): $Reference2ObjectMap<$DataComponentType<never>, $Object>;
        keySet(): $Set<$DataComponentType<never>>;
        has(arg0: $DataComponentType_<never>): boolean;
        isEmpty(): boolean;
        stream(): $Stream<$TypedDataComponent<never>>;
        filter(arg0: $Predicate_<$DataComponentType<never>>): $DataComponentMap;
        getOrDefault<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        getTyped<T>(arg0: $DataComponentType_<T>): $TypedDataComponent<T>;
        spliterator(): $Spliterator<$TypedDataComponent<never>>;
        forEach(arg0: $Consumer_<$TypedDataComponent<never>>): void;
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentMap$Builder$SimpleMap}.
     */
    export type $DataComponentMap$Builder$SimpleMap_ = { map?: $Reference2ObjectMap<$DataComponentType_<never>, $Object>,  } | [map?: $Reference2ObjectMap<$DataComponentType_<never>, $Object>, ];
    export class $DataComponentType$Builder<T> implements $OwoComponentTypeBuilder<any> {
        networkSynchronized(streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, $Object>): $DataComponentType$Builder<$Object>;
        cacheEncoding(): $DataComponentType$Builder<$Object>;
        build(): $DataComponentType<$Object>;
        persistent(codec: $Codec_<$Object>): $DataComponentType$Builder<$Object>;
        endec(endec: $Endec<$Object>): $DataComponentType$Builder<$Object>;
        endec(endec: $Endec<$Object>, assumedContext: $SerializationContext): $DataComponentType$Builder<$Object>;
        constructor();
    }
}
