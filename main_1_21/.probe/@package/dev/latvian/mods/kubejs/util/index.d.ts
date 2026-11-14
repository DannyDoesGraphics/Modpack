import { $JsonObject, $JsonElement_, $JsonArray, $JsonElement, $JsonPrimitive } from "@package/com/google/gson";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec_, $DataResult, $DynamicOps, $Codec, $MapCodec, $MapLike, $Codec_ } from "@package/com/mojang/serialization";
import { $Tag_, $Tag, $TagType, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $KubeIcon_, $KubeIcon } from "@package/dev/latvian/mods/kubejs/client/icon";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $HashMap, $Map, $Map$Entry, $Set, $List, $Map_, $LinkedList, $Collection_, $List_, $Collection } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Supplier_, $Consumer_, $UnaryOperator, $BiConsumer, $BiConsumer_, $Function_, $UnaryOperator_, $BiFunction_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $Object2LongMap$Entry } from "@package/it/unimi/dsi/fastutil/objects";
import { $Registry, $Holder_, $RegistryAccess$Frozen, $Holder } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $CustomJavaToJsWrapper } from "@package/dev/latvian/mods/rhino/util";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $Enum, $Comparable, $Record, $Class, $Object } from "@package/java/lang";
import { $DataOutputStream } from "@package/java/io";
import { $TagLoader$EntryWithSource_, $TagKey_ } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $KubeColor, $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $RegistryWrapper } from "@package/dev/latvian/mods/kubejs/plugin/builtin/wrapper";
import { $TemporalAmount, $TemporalAmount_, $Temporal, $TemporalUnit } from "@package/java/time/temporal";
import { $Duration_, $Duration } from "@package/java/time";
import { $CachedTagLookup, $CachedItemTagLookup, $CachedTagLookup$Entry } from "@package/dev/latvian/mods/kubejs/recipe";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceKey_, $ResourceKey, $RegistryOps, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Scriptable } from "@package/dev/latvian/mods/rhino";
import { $DamageSources } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $Vector3f, $Quaternionf } from "@package/org/joml";

declare module "@package/dev/latvian/mods/kubejs/util" {
    export class $RegistryOpsContainer extends $OpsContainer {
        nbt(): $RegistryOps<$Tag>;
        static DEFAULT: $OpsContainer;
        constructor(nbt: $RegistryOps<$Tag_>, json: $RegistryOps<$JsonElement_>, java: $RegistryOps<$Object>);
    }
    export class $TinyMap<K, V> extends $Record {
        static ofMap<K, V>(map: $Map_<K, V>): $TinyMap<K, V>;
        isEmpty(): boolean;
        toMap(): $Map<K, V>;
        entries(): $TinyMap$Entry<K, V>[];
        constructor(collection: $Collection_<$TinyMap$Entry_<K, V>>);
        constructor(entries: $TinyMap$Entry_<K, V>[]);
        constructor(map: $TinyMap_<K, V>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TinyMap}.
     */
    export type $TinyMap_<K, V> = { entries?: $TinyMap$Entry_<any, any>[],  } | [entries?: $TinyMap$Entry_<any, any>[], ];
    export class $ClassWrapper<T> extends $Record implements $CustomJavaToJsWrapper {
        wrappedClass(): $Class<T>;
        convertJavaToJs(scope: $Scriptable, staticType: $TypeInfo_): $Scriptable;
        constructor(wrappedClass: $Class<T>);
    }
    /**
     * Values that may be interpreted as {@link $ClassWrapper}.
     */
    export type $ClassWrapper_<T> = { wrappedClass?: $Class<any>,  } | [wrappedClass?: $Class<any>, ];
    export class $TickDuration extends $Record implements $TemporalAmount {
        intTicks(): number;
        get(unit: $TemporalUnit): number;
        static wrap(from: $Object): $TickDuration;
        static of(ticks: number): $TickDuration;
        getUnits(): $List<$TemporalUnit>;
        addTo(temporal: $Temporal): $Temporal;
        subtractFrom(temporal: $Temporal): $Temporal;
        ticks(): number;
        static ZERO: $TickDuration;
        static CODEC: $Codec<$TickDuration>;
        static SECONDS_CODEC: $Codec<$TickDuration>;
        static MINUTES_CODEC: $Codec<$TickDuration>;
        static TYPE_INFO: $TypeInfo;
        static HOURS_CODEC: $Codec<$TickDuration>;
        constructor(ticks: number);
        get units(): $List<$TemporalUnit>;
    }
    /**
     * Values that may be interpreted as {@link $TickDuration}.
     */
    export type $TickDuration_ = number | { ticks?: number,  } | [ticks?: number, ];
    export class $JsonIO {
        static getJsonHashString(json: $JsonElement_): string;
        static toPrettyString(json: $JsonElement_): string;
        static writeJsonHash(stream: $DataOutputStream, element: $JsonElement_): void;
        static getJsonHashBytes(json: $JsonElement_): number[];
        static parseRaw(string: string): $JsonElement;
        static toString(json: $JsonElement_): string;
        static toArray(element: $JsonElement_): $JsonArray;
        static write(path: $Path_, json: $JsonElement_): void;
        static read(path: $Path_): $Map<never, never>;
        static parse(string: string): $Object;
        static readString(path: $Path_): string;
        static readJson(path: $Path_): $JsonElement;
        static toObject(json: $JsonElement_): $Object;
        static toPrimitive(element: $JsonElement_): $Object;
        constructor();
    }
    export class $WrappedJS {
    }
    export interface $WrappedJS {
    }
    export class $GlobalUnmodifiableMap<K, V> implements $Map<K, V>, $CustomJavaToJsWrapper {
        remove(key: $Object): V;
        remove(key: $Object): V;
        size(): number;
        get(key: $Object): V;
        put(key: K, value: V): V;
        put(key: K, value: V): V;
        values(): $Collection<V>;
        clear(): void;
        clear(): void;
        isEmpty(): boolean;
        entrySet(): $Set<$Map$Entry<K, V>>;
        putAll(m: $Map_<K, V>): void;
        putAll(m: $Map_<K, V>): void;
        containsKey(key: $Object): boolean;
        keySet(): $Set<K>;
        containsValue(value: $Object): boolean;
        convertJavaToJs(scope: $Scriptable, staticType: $TypeInfo_): $Scriptable;
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replace(arg0: K, arg1: V): V;
        replaceAll(arg0: $BiFunction_<K, V, V>): void;
        merge(arg0: K, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        putIfAbsent(arg0: K, arg1: V): V;
        compute(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        forEach(arg0: $BiConsumer_<K, V>): void;
        computeIfAbsent(arg0: K, arg1: $Function_<K, V>): V;
        getOrDefault(arg0: $Object, arg1: V): V;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        constructor(map: $Map_<K, V>);
        get empty(): boolean;
    }
    export class $LogType extends $Enum<$LogType> {
        static values(): $LogType[];
        static valueOf(name: string): $LogType;
        static INIT: $LogType;
        callback: $BiConsumer<$Logger, string>;
        static ERROR: $LogType;
        static VALUES: $LogType[];
        id: string;
        static INFO: $LogType;
        static DEBUG: $LogType;
        static WARN: $LogType;
    }
    /**
     * Values that may be interpreted as {@link $LogType}.
     */
    export type $LogType_ = "init" | "debug" | "info" | "warn" | "error";
    export class $RegistryAccessContainer extends $RegistryOpsContainer implements $ICondition$IContext {
        static of(): $RegistryAccessContainer;
        access(): $RegistryAccess$Frozen;
        damageSources(): $DamageSources;
        getAllTags<T>(key: $ResourceKey_<$Registry<T>>): $Map<$ResourceLocation, $Collection<$Holder<T>>>;
        cacheTags<T>(registry: $Registry<T>, map: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>): void;
        wrapRegistry(id: $ResourceLocation_): $RegistryWrapper<never>;
        itemStackParseCache(): $Map<string, $ItemStack>;
        getTag<T>(arg0: $TagKey_<T>): $Collection<$Holder<T>>;
        static current: $RegistryAccessContainer;
        cachedBlockTags: $CachedTagLookup<$Block>;
        cachedFluidTags: $CachedTagLookup<$Fluid>;
        cachedItemTags: $CachedItemTagLookup;
        static BUILTIN: $RegistryAccessContainer;
        cachedRegistryTags: $Map<$ResourceKey<never>, $CachedTagLookup$Entry<never>>;
        static DEFAULT: $OpsContainer;
        constructor(access: $RegistryAccess$Frozen);
    }
    export class $NBTIOWrapper {
        static write(path: $Path_, nbt: $CompoundTag_): void;
        static read(path: $Path_): $CompoundTag;
    }
    export interface $NBTIOWrapper {
    }
    export class $OrderedCompoundTag extends $CompoundTag {
        static CODEC: $Codec<$CompoundTag>;
        tagMap: $Map<string, $Tag>;
        static TYPE: $TagType<$CompoundTag>;
        tags: $Map<string, $Tag>;
        constructor(map: $Map_<string, $Tag_>);
        constructor();
    }
    export class $NBTSerializable {
    }
    export interface $NBTSerializable {
        toNBT(): $Tag;
    }
    /**
     * Values that may be interpreted as {@link $NBTSerializable}.
     */
    export type $NBTSerializable_ = (() => $Tag_);
    export class $NotificationToastData extends $Record {
        backgroundColor(): ($KubeColor) | undefined;
        outlineColor(): ($KubeColor) | undefined;
        borderColor(): ($KubeColor) | undefined;
        textShadow(): boolean;
        static ofText(text: $Component_): $NotificationToastData;
        iconSize(): number;
        duration(): $Duration;
        text(): $Component;
        icon(): ($KubeIcon) | undefined;
        static ofTitle(title: $Component_, text: $Component_): $NotificationToastData;
        static CODEC: $MapCodec<$NotificationToastData>;
        static DEFAULT_BORDER_COLOR: $KubeColor;
        static DEFAULT_BACKGROUND_COLOR: $KubeColor;
        static DEFAULT_DURATION: $Duration;
        static DEFAULT_OUTLINE_COLOR: $KubeColor;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $NotificationToastData>;
        constructor(duration: $Duration_, text: $Component_, icon: ($KubeIcon_) | undefined, iconSize: number, outlineColor: ($KubeColor_) | undefined, borderColor: ($KubeColor_) | undefined, backgroundColor: ($KubeColor_) | undefined, textShadow: boolean);
    }
    /**
     * Values that may be interpreted as {@link $NotificationToastData}.
     */
    export type $NotificationToastData_ = { backgroundColor?: ($KubeColor_) | undefined, duration?: $Duration_, outlineColor?: ($KubeColor_) | undefined, textShadow?: boolean, text?: $Component_, iconSize?: number, icon?: ($KubeIcon_) | undefined, borderColor?: ($KubeColor_) | undefined,  } | [backgroundColor?: ($KubeColor_) | undefined, duration?: $Duration_, outlineColor?: ($KubeColor_) | undefined, textShadow?: boolean, text?: $Component_, iconSize?: number, icon?: ($KubeIcon_) | undefined, borderColor?: ($KubeColor_) | undefined, ];
    export class $RotationAxis extends $Enum<$RotationAxis> {
        rad(f: number): $Quaternionf;
        deg(f: number): $Quaternionf;
        static values(): $RotationAxis[];
        static valueOf(name: string): $RotationAxis;
        static ZN: $RotationAxis;
        static YN: $RotationAxis;
        vec: $Vector3f;
        static XN: $RotationAxis;
        static ZP: $RotationAxis;
        static YP: $RotationAxis;
        static XP: $RotationAxis;
    }
    /**
     * Values that may be interpreted as {@link $RotationAxis}.
     */
    export type $RotationAxis_ = "xn" | "xp" | "yn" | "yp" | "zn" | "zp";
    export class $Lazy<T> implements $Supplier<T> {
        get(): T;
        static map<K, V>(supplier: $Consumer_<$Map<K, V>>): $Lazy<$Map<K, V>>;
        static of<T>(supplier: $Supplier_<T>): $Lazy<T>;
        static of<T>(supplier: $Supplier_<T>, expires: $Duration_): $Lazy<T>;
        static serviceLoader<T>(type: $Class<T>): $Lazy<T>;
        static identityMap<K, V>(supplier: $Consumer_<$Map<K, V>>): $Lazy<$Map<K, V>>;
        forget(): void;
    }
    export class $KubeResourceLocation extends $Record {
        static wrap(from: $Object): $ResourceLocation_;
        wrapped(): $ResourceLocation;
        withPath(path: string): $ResourceLocation_;
        withPath(path: $UnaryOperator_<string>): $ResourceLocation_;
        static CODEC: $Codec<$ResourceLocation_>;
        constructor(wrapped: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $KubeResourceLocation}.
     */
    export type $KubeResourceLocation_ = { wrapped?: $ResourceLocation_,  } | [wrapped?: $ResourceLocation_, ];
    export class $ErrorStack {
        atString(): string;
        stringAt(): string;
        push(parent: $Object): void;
        pop(): void;
        setKey(index: number): void;
        setKey(key: $Object): void;
        static NONE: $ErrorStack;
        constructor();
    }
    export class $IntBounds extends $Record {
        min(): number;
        max(): number;
        static of(min: number, max: number): $IntBounds;
        static OPTIONAL: $IntBounds;
        static CODEC: $Codec<$IntBounds>;
        static MAP_CODEC: $MapCodec<$IntBounds>;
        static DEFAULT: $IntBounds;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $IntBounds>;
        constructor(min: number, max: number);
    }
    /**
     * Values that may be interpreted as {@link $IntBounds}.
     */
    export type $IntBounds_ = { max?: number, min?: number,  } | [max?: number, min?: number, ];
    export class $JsonSerializable {
    }
    export interface $JsonSerializable {
        toJson(): $JsonElement;
    }
    /**
     * Values that may be interpreted as {@link $JsonSerializable}.
     */
    export type $JsonSerializable_ = (() => $JsonElement_);
    export class $FluidAmounts {
        static B: number;
        static METAL_BLOCK: number;
        static MB: number;
        static BOTTLE: number;
        static BUCKET: number;
        static MILLIBUCKET: number;
        static INGOT: number;
        static NUGGET: number;
    }
    export interface $FluidAmounts {
    }
    export class $ScheduledEvents$ScheduledEvent {
        clear(): void;
        reschedule(): $ScheduledEvents$ScheduledEvent;
        reschedule(timer: number): $ScheduledEvents$ScheduledEvent;
        timer: number;
        repeating: boolean;
        scheduledEvents: $ScheduledEvents;
        id: number;
        endTime: number;
        ofTicks: boolean;
        constructor();
    }
    export class $Object2LongEntry implements $Comparable<$Object2LongEntry> {
        compareTo(o: $Object2LongEntry): number;
        value: number;
        key: $Object;
        constructor(k: $Object, v: number);
        constructor(entry: $Object2LongMap$Entry<$Object>);
    }
    export class $JsonUtils {
        static objectOf(map: $Object): $JsonObject;
        static primitiveOf(o: $Object): $JsonPrimitive;
        static toPrettyString(json: $JsonElement_): string;
        static toString(json: $JsonElement_): string;
        static of(o: $Object): $JsonElement;
        static copy(element: $JsonElement_): $JsonElement;
        static arrayOf(array: $Object): $JsonArray;
        static fromString(string: string): $JsonElement;
        static toObject(json: $JsonElement_): $Object;
        static toPrimitive(element: $JsonElement_): $Object;
        static MAP_LIKE: $MapLike<$JsonElement>;
    }
    export interface $JsonUtils {
    }
    export class $TinyMap$Entry<K, V> extends $Record {
        value(): V;
        key(): K;
        constructor(key: K, value: V);
    }
    /**
     * Values that may be interpreted as {@link $TinyMap$Entry}.
     */
    export type $TinyMap$Entry_<K, V> = { key?: any, value?: any,  } | [key?: any, value?: any, ];
    export class $SlotFilter extends $Record {
        checkFilter(index: number, stack: $ItemStack_): boolean;
        index(): number;
        static wrap(o: $Object, target: $TypeInfo_): $SlotFilter;
        static of(ingredient: $Ingredient_, index: number): $SlotFilter;
        item(): $Ingredient;
        static CODEC: $Codec<$SlotFilter>;
        static TYPE_INFO: $TypeInfo;
        static EMPTY: $SlotFilter;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SlotFilter>;
        constructor(item: $Ingredient_, index: number);
    }
    /**
     * Values that may be interpreted as {@link $SlotFilter}.
     */
    export type $SlotFilter_ = { item?: $Ingredient_, index?: number,  } | [item?: $Ingredient_, index?: number, ];
    export class $AttachedData<T> extends $HashMap<string, $Object> {
        add(key: string, data: $Object): void;
        getParent(): T;
        constructor(p: T);
        get parent(): T;
    }
    export class $ScheduledEvents {
        clear(id: number): void;
        schedule(timer: $TemporalAmount_, repeating: boolean, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: number, ofTicks: boolean, repeating: boolean, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        tickAll(nowTicks: number): void;
        currentTick: number;
        factory: $Supplier<$ScheduledEvents$ScheduledEvent>;
        nextId: $AtomicInteger;
        currentMillis: number;
        events: $LinkedList<$ScheduledEvents$ScheduledEvent>;
        futureEvents: $LinkedList<$ScheduledEvents$ScheduledEvent>;
        constructor(factory: $Supplier_<$ScheduledEvents$ScheduledEvent>);
    }
    export class $ID {
        static kjsString(id: string): string;
        static kjs(o: $Object): $ResourceLocation;
        static reduceKjs(id: $ResourceLocation_): string;
        static namespace(s: string): string;
        static of(o: $Object, preferKJS: boolean): $ResourceLocation;
        static url(id: $ResourceLocation_): string;
        static read(reader: $StringReader): $DataResult<$ResourceLocation>;
        static mc(o: $Object): $ResourceLocation;
        static path(s: string): string;
        static reduce(id: $ResourceLocation_): string;
        static string(id: string): string;
        static isKey(from: $Object): boolean;
        static resourcePath(id: $ResourceLocation_): string;
        static ITEM: $UnaryOperator<string>;
        static PNG_TEXTURE_MCMETA: $UnaryOperator<string>;
        static PARTICLE: $UnaryOperator<string>;
        static BLOCK_MODEL: $UnaryOperator<string>;
        static BLOCKSTATE: $UnaryOperator<string>;
        static BLOCK: $UnaryOperator<string>;
        static ITEM_MODEL: $UnaryOperator<string>;
        static PNG_TEXTURE: $UnaryOperator<string>;
        static AIR: $ResourceLocation;
        static BLOCK_LOOT_TABLE: $UnaryOperator<string>;
        static UNKNOWN: $ResourceLocation;
        static MODEL: $UnaryOperator<string>;
    }
    export interface $ID {
    }
    export class $MobEffectUtil {
        /**
         * Creates an instance for the given effect, duration and amplifier
         */
        static of(effect: $Holder_<$MobEffect>, duration: $TickDuration_, amplifier: number): $MobEffectInstance;
        /**
         * Creates an instance for the given effect, duration, amplifier, ambient, and visible to the HUD
         */
        static of(effect: $Holder_<$MobEffect>, duration: $TickDuration_, amplifier: number, ambient: boolean, visible: boolean): $MobEffectInstance;
        /**
         * Creates an instance for the given effect, duration, amplifier, ambient, visible to the HUD, and to show the icon on the sceen
         */
        static of(effect: $Holder_<$MobEffect>, duration: $TickDuration_, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean): $MobEffectInstance;
        /**
         * Creates an instance for the given effect and duration (in ticks)
         */
        static of(effect: $Holder_<$MobEffect>, duration: $TickDuration_): $MobEffectInstance;
        /**
         * Creates an instance for the given effect. Default duration and amplifier is 0
         */
        static of(effect: $Holder_<$MobEffect>): $MobEffectInstance;
        /**
         * Copies an existing MobEffectInstance
         */
        static of(oldInstance: $MobEffectInstance): $MobEffectInstance;
        constructor();
    }
    export class $CountingMap {
        getValues(): $Collection<number>;
        get(key: $Object): number;
        clear(): void;
        add(key: $Object, value: number): number;
        set(key: $Object, value: number): number;
        forEach(forEach: $Consumer_<$Object2LongEntry>): void;
        getSize(): number;
        getEntries(): $List<$Object2LongEntry>;
        getKeys(): $Set<$Object>;
        getTotalCount(): number;
        constructor();
        get values(): $Collection<number>;
        get size(): number;
        get entries(): $List<$Object2LongEntry>;
        get keys(): $Set<$Object>;
        get totalCount(): number;
    }
    export class $WithCodec {
    }
    export interface $WithCodec extends $NBTSerializable, $JsonSerializable {
        toJson(): $JsonElement;
        getCodec(): $Codec<never>;
        toNBT(): $Tag;
        get codec(): $Codec<never>;
    }
    /**
     * Values that may be interpreted as {@link $WithCodec}.
     */
    export type $WithCodec_ = (() => $Codec_<never>);
    export class $Tristate extends $Enum<$Tristate> implements $StringRepresentable {
        static values(): $Tristate[];
        test(enabled: boolean): boolean;
        test(enabled: $BooleanSupplier_): boolean;
        static valueOf(name: string): $Tristate;
        static wrap(from: $Object): $Tristate;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$Tristate>;
        static TRUE: $Tristate;
        static FALSE: $Tristate;
        static VALUES: $Tristate[];
        static DEFAULT: $Tristate;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Tristate>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Tristate}.
     */
    export type $Tristate_ = "false" | "true" | "default";
    export class $OpsContainer {
        decode<T>(codec: $Codec_<T>, o: $Object): T;
        java(): $DynamicOps<$Object>;
        json(): $DynamicOps<$JsonElement>;
        nbt(): $DynamicOps<$Tag>;
        decodeMap<T>(codec: $MapCodec_<T>, o: $Object): T;
        static DEFAULT: $OpsContainer;
        constructor(nbt: $DynamicOps<$Tag_>, json: $DynamicOps<$JsonElement_>, java: $DynamicOps<$Object>);
    }
    export class $ScheduledEvents$Callback {
        static TYPE_INFO: $TypeInfo;
    }
    export interface $ScheduledEvents$Callback {
        onCallback(event: $ScheduledEvents$ScheduledEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $ScheduledEvents$Callback}.
     */
    export type $ScheduledEvents$Callback_ = ((event: $ScheduledEvents$ScheduledEvent) => void);
}
