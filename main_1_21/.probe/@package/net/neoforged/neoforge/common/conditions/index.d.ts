import { $JsonObject_, $JsonElement_ } from "@package/com/google/gson";
import { $TagManager, $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $Holder_, $Holder, $Registry } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $Decoder, $Decoder$Simple, $DataResult, $MapEncoder, $DynamicOps, $Codec, $Decoder$Boxed, $Lifecycle, $Dynamic, $MapCodec, $Encoder, $Codec_, $Decoder$Terminal, $MapDecoder } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $RegistryOps$RegistryInfoLookup_, $RegistryOps, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List, $Map_, $Collection_, $List_, $Collection, $Map } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/common/conditions" {
    export class $OrCondition extends $Record implements $ICondition {
        values(): $List<$ICondition>;
        test(arg0: $ICondition$IContext_): boolean;
        codec(): $MapCodec<$ICondition>;
        static CODEC: $MapCodec<$OrCondition>;
        constructor(values: $List_<$ICondition>);
    }
    /**
     * Values that may be interpreted as {@link $OrCondition}.
     */
    export type $OrCondition_ = { values?: $List_<$ICondition>,  } | [values?: $List_<$ICondition>, ];
    export class $WithConditions$Builder<T> {
        addCondition(arg0: $Collection_<$ICondition>): $WithConditions$Builder<T>;
        addCondition(...arg0: $ICondition[]): $WithConditions$Builder<T>;
        build(): $WithConditions<T>;
        withCarrier(arg0: T): $WithConditions$Builder<T>;
        constructor();
    }
    export class $TagEmptyCondition extends $Record implements $ICondition {
        test(arg0: $ICondition$IContext_): boolean;
        tag(): $TagKey<$Item>;
        codec(): $MapCodec<$ICondition>;
        static CODEC: $MapCodec<$TagEmptyCondition>;
        constructor(arg0: string);
        constructor(tag: $TagKey_<$Item>);
        constructor(arg0: string, arg1: string);
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $TagEmptyCondition}.
     */
    export type $TagEmptyCondition_ = { tag?: $TagKey_<$Item>,  } | [tag?: $TagKey_<$Item>, ];
    export class $ConditionalOps$ConditionalEncoder<A> implements $Encoder<($WithConditions<A>) | undefined> {
        withLifecycle(arg0: $Lifecycle): $Encoder<($WithConditions<A>) | undefined>;
        comap<B>(arg0: $Function_<B, ($WithConditions<A>) | undefined>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<($WithConditions<A>) | undefined>>): $Encoder<B>;
        fieldOf(arg0: string): $MapEncoder<($WithConditions<A>) | undefined>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: ($WithConditions_<A>) | undefined): $DataResult<T>;
    }
    export class $FalseCondition implements $ICondition {
        test(arg0: $ICondition$IContext_): boolean;
        codec(): $MapCodec<$ICondition>;
        static CODEC: $MapCodec<$FalseCondition>;
        static INSTANCE: $FalseCondition;
    }
    /**
     * Extension of `RegistryOps` that also encapsulates a `IContext`.
     * This allows getting the `IContext` while decoding an entry from within a codec.
     */
    export class $ConditionalOps<T> extends $RegistryOps<T> {
        static createConditionalCodec<T>(ownerCodec: $Codec_<T>): $Codec<(T) | undefined>;
        /**
         * Creates a conditional codec.
         * 
         * The conditional codec is generally not suitable for use as a dispatch target because it is never a `MapCodecCodec`.
         */
        static createConditionalCodec<T>(ownerCodec: $Codec_<T>, conditionalsKey: string): $Codec<(T) | undefined>;
        static createConditionalCodecWithConditions<T>(ownerCodec: $Codec_<T>): $Codec<($WithConditions<T>) | undefined>;
        /**
         * Creates a conditional codec.
         * 
         * The conditional codec is generally not suitable for use as a dispatch target because it is never a `MapCodecCodec`.
         */
        static createConditionalCodecWithConditions<T>(ownerCodec: $Codec_<T>, conditionalsKey: string): $Codec<($WithConditions<T>) | undefined>;
        static decodeListWithElementConditions<T>(ownerCodec: $Codec_<T>): $Codec<$List<T>>;
        withParent<U>(arg0: $DynamicOps<U>): $ConditionalOps<U>;
        /**
         * Returns a codec that can retrieve a `IContext` from a registry ops,
         * for example with `retrieveContext().decode(ops, ops.emptyMap())`.
         */
        static retrieveContext(): $MapCodec<$ICondition$IContext>;
        static DEFAULT_CONDITIONS_KEY: string;
        static CONDITIONAL_VALUE_KEY: string;
        constructor(ops: $RegistryOps<T>, context: $ICondition$IContext_);
        constructor(arg0: $DynamicOps<T>, arg1: $RegistryOps$RegistryInfoLookup_, arg2: $ICondition$IContext_);
    }
    export class $WithConditions<A> extends $Record {
        static builder<A>(arg0: A): $WithConditions$Builder<A>;
        carrier(): A;
        conditions(): $List<$ICondition>;
        constructor(conditions: $List_<$ICondition>, carrier: A);
        constructor(arg0: A);
        constructor(arg0: A, ...arg1: $ICondition[]);
    }
    /**
     * Values that may be interpreted as {@link $WithConditions}.
     */
    export type $WithConditions_<A> = { carrier?: any, conditions?: $List_<$ICondition>,  } | [carrier?: any, conditions?: $List_<$ICondition>, ];
    export class $ConditionalOps$ConditionalDecoder<A> implements $Decoder<($WithConditions<A>) | undefined> {
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<($WithConditions<A>) | undefined, T>>;
        map<B>(arg0: $Function_<($WithConditions<A>) | undefined, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<($WithConditions<A>) | undefined, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<($WithConditions<A>) | undefined>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<($WithConditions<A>) | undefined>;
        boxed(): $Decoder$Boxed<($WithConditions<A>) | undefined>;
        terminal(): $Decoder$Terminal<($WithConditions<A>) | undefined>;
        withLifecycle(arg0: $Lifecycle): $Decoder<($WithConditions<A>) | undefined>;
        fieldOf(arg0: string): $MapDecoder<($WithConditions<A>) | undefined>;
        promotePartial(arg0: $Consumer_<string>): $Decoder<($WithConditions<A>) | undefined>;
        simple(): $Decoder$Simple<($WithConditions<A>) | undefined>;
    }
    export class $NotCondition extends $Record implements $ICondition {
        value(): $ICondition;
        test(arg0: $ICondition$IContext_): boolean;
        codec(): $MapCodec<$ICondition>;
        static CODEC: $MapCodec<$NotCondition>;
        constructor(value: $ICondition);
    }
    /**
     * Values that may be interpreted as {@link $NotCondition}.
     */
    export type $NotCondition_ = { value?: $ICondition,  } | [value?: $ICondition, ];
    export class $ICondition {
        static getConditionally<V, T>(arg0: $Codec_<T>, arg1: $DynamicOps<V>, arg2: V): (T) | undefined;
        static writeConditions(arg0: $HolderLookup$Provider, arg1: $JsonObject_, ...arg2: $ICondition[]): void;
        /**
         * Writes a list of conditions to a JSON object.
         */
        static writeConditions(registries: $HolderLookup$Provider, jsonObject: $JsonObject_, conditions: $List_<$ICondition>): void;
        /**
         * Writes a list of conditions to a JSON object.
         */
        static writeConditions(jsonOps: $DynamicOps<$JsonElement_>, jsonObject: $JsonObject_, conditions: $List_<$ICondition>): void;
        static getWithWithConditionsCodec<V, T>(arg0: $Codec_<($WithConditions_<T>) | undefined>, arg1: $DynamicOps<V>, arg2: V): (T) | undefined;
        static conditionsMatched<V>(arg0: $DynamicOps<V>, arg1: V): boolean;
        static getWithConditionalCodec<V, T>(arg0: $Codec_<(T) | undefined>, arg1: $DynamicOps<V>, arg2: V): (T) | undefined;
        static CODEC: $Codec<$ICondition>;
        static LIST_CODEC: $Codec<$List<$ICondition>>;
    }
    export interface $ICondition {
        test(arg0: $ICondition$IContext_): boolean;
        codec(): $MapCodec<$ICondition>;
    }
    export class $ConditionContext implements $ICondition$IContext {
        getAllTags<T>(registry: $ResourceKey_<$Registry<T>>): $Map<$ResourceLocation, $Collection<$Holder<T>>>;
        getTag<T>(arg0: $TagKey_<T>): $Collection<$Holder<T>>;
        constructor(tagManager: $TagManager);
    }
    export class $ItemExistsCondition implements $ICondition {
        test(arg0: $ICondition$IContext_): boolean;
        getItem(): $ResourceLocation;
        codec(): $MapCodec<$ICondition>;
        static CODEC: $MapCodec<$ItemExistsCondition>;
        constructor(item: $ResourceLocation_);
        constructor(namespace: string, path: string);
        constructor(location: string);
        get item(): $ResourceLocation;
    }
    export class $ICondition$IContext {
        static TAGS_INVALID: $ICondition$IContext;
        static EMPTY: $ICondition$IContext;
    }
    export interface $ICondition$IContext {
        getTag<T>(arg0: $TagKey_<T>): $Collection<$Holder<T>>;
        getAllTags<T>(arg0: $ResourceKey_<$Registry<T>>): $Map<$ResourceLocation, $Collection<$Holder<T>>>;
    }
    /**
     * Values that may be interpreted as {@link $ICondition$IContext}.
     */
    export type $ICondition$IContext_ = ((arg0: $ResourceKey<$Registry<any>>) => $Map_<$ResourceLocation_, $Collection_<$Holder_<any>>>);
    export class $ModLoadedCondition extends $Record implements $ICondition {
        test(arg0: $ICondition$IContext_): boolean;
        modid(): string;
        codec(): $MapCodec<$ICondition>;
        static CODEC: $MapCodec<$ModLoadedCondition>;
        constructor(modid: string);
    }
    /**
     * Values that may be interpreted as {@link $ModLoadedCondition}.
     */
    export type $ModLoadedCondition_ = { modid?: string,  } | [modid?: string, ];
    export class $TrueCondition implements $ICondition {
        test(arg0: $ICondition$IContext_): boolean;
        codec(): $MapCodec<$ICondition>;
        static CODEC: $MapCodec<$TrueCondition>;
        static INSTANCE: $TrueCondition;
    }
    export class $AndCondition extends $Record implements $ICondition {
        test(arg0: $ICondition$IContext_): boolean;
        children(): $List<$ICondition>;
        codec(): $MapCodec<$ICondition>;
        static CODEC: $MapCodec<$AndCondition>;
        constructor(children: $List_<$ICondition>);
    }
    /**
     * Values that may be interpreted as {@link $AndCondition}.
     */
    export type $AndCondition_ = { children?: $List_<$ICondition>,  } | [children?: $List_<$ICondition>, ];
    export class $IConditionBuilder {
    }
    export interface $IConditionBuilder {
        modLoaded(modid: string): $ICondition;
        itemExists(namespace: string, path: string): $ICondition;
        tagEmpty(tag: $TagKey_<$Item>): $ICondition;
        TRUE(): $ICondition;
        FALSE(): $ICondition;
        or(...arg0: $ICondition[]): $ICondition;
        and(...arg0: $ICondition[]): $ICondition;
        not(values: $ICondition): $ICondition;
    }
}
