import { $JsonObject_ } from "@package/com/google/gson";
import { $MapCodec_, $Codec, $MapCodec, $Codec_ } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Pattern } from "@package/java/util/regex";
import { $List, $List_, $Map$Entry, $Set } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Function_, $Predicate_ } from "@package/java/util/function";
import { $KubeRecipeContext, $RecipeScriptContext, $KubeRecipe, $RecipeKey, $RecipeTypeRegistryContext, $RecipeTypeRegistryContext_ } from "@package/dev/latvian/mods/kubejs/recipe";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Reference2ObjectOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $OpsContainer, $WrappedJS, $ErrorStack, $IntBounds_, $IntBounds, $TinyMap } from "@package/dev/latvian/mods/kubejs/util";
import { $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $Enum, $Record, $StringBuilder, $Comparable, $Object } from "@package/java/lang";
import { $SourceLine_ } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/dev/latvian/mods/kubejs/recipe/component" {
    export class $UniqueIdBuilder extends $Record {
        append(string: string): void;
        append(id: $ResourceLocation_): void;
        append(key: $ResourceKey_<never>): void;
        builder(): $StringBuilder;
        build(): string;
        appendSeparator(): void;
        static MULTIPLE_UNDERSCORES_PATTERN: $Pattern;
        static NON_W_PATTERN: $Pattern;
        constructor(builder: $StringBuilder);
    }
    /**
     * Values that may be interpreted as {@link $UniqueIdBuilder}.
     */
    export type $UniqueIdBuilder_ = { builder?: $StringBuilder,  } | [builder?: $StringBuilder, ];
    export class $CustomObjectRecipeComponent implements $RecipeComponent<$List<$CustomObjectRecipeComponent$Value>> {
        buildUniqueId(builder: $UniqueIdBuilder_, list: $List_<$CustomObjectRecipeComponent$Value_>): void;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        hasPriority(hasPriority: $Predicate_<$Set<string>>): $CustomObjectRecipeComponent;
        createCopy(): $CustomObjectRecipeComponent;
        type(): $RecipeComponentType<never>;
        isEmpty(value: $List_<$CustomObjectRecipeComponent$Value_>): boolean;
        replace(cx: $RecipeScriptContext, original: $List_<$CustomObjectRecipeComponent$Value_>, match: $ReplacementMatchInfo_, arg3: $Object): $List<$CustomObjectRecipeComponent$Value>;
        matches(cx: $RecipeMatchContext, value: $List_<$CustomObjectRecipeComponent$Value_>, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $List_<$CustomObjectRecipeComponent$Value_>): void;
        typeInfo(): $TypeInfo;
        keys(): $List<$CustomObjectRecipeComponent$Key>;
        codec(): $Codec<$List<$CustomObjectRecipeComponent$Value>>;
        mapCodec(): $MapCodec<$List<$CustomObjectRecipeComponent$Value>>;
        outputKey(name: string): $RecipeKey<$List<$CustomObjectRecipeComponent$Value>>;
        withCodec(codec: $Codec_<$List_<$CustomObjectRecipeComponent$Value_>>): $RecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$List_<$CustomObjectRecipeComponent$Value_>>, json: $JsonObject_): void;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$List_<$CustomObjectRecipeComponent$Value_>>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        asConditionalList(): $ListRecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $List<$CustomObjectRecipeComponent$Value>>>;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        otherKey(name: string): $RecipeKey<$List<$CustomObjectRecipeComponent$Value>>;
        inputKey(name: string): $RecipeKey<$List<$CustomObjectRecipeComponent$Value>>;
        toString(ops: $OpsContainer, value: $List_<$CustomObjectRecipeComponent$Value_>): string;
        key(name: string, role: $ComponentRole_): $RecipeKey<$List<$CustomObjectRecipeComponent$Value>>;
        asList(): $ListRecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        spread(value: $List_<$CustomObjectRecipeComponent$Value_>): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$List<$CustomObjectRecipeComponent$Value>, O>;
        isIgnored(): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $List<$CustomObjectRecipeComponent$Value>>>;
        createBuilder(): $RecipeComponentBuilder;
        wrap(cx: $RecipeScriptContext, from: $Object): $List<$CustomObjectRecipeComponent$Value>;
        static TYPE: $RecipeComponentType<never>;
        constructor(keys: $List_<$CustomObjectRecipeComponent$Key_>);
        get ignored(): boolean;
    }
    export class $EitherRecipeComponent<H, L> extends $Record implements $RecipeComponent<$Either<H, L>> {
        buildUniqueId(builder: $UniqueIdBuilder_, value: $Either<H, L>): void;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: $Either<H, L>): string;
        replace(cx: $RecipeScriptContext, original: $Either<H, L>, match: $ReplacementMatchInfo_, arg3: $Object): $Either<H, L>;
        matches(cx: $RecipeMatchContext, value: $Either<H, L>, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $Either<H, L>): void;
        typeInfo(): $TypeInfo;
        spread(value: $Either<H, L>): $List<never>;
        left(): $RecipeComponent<H>;
        right(): $RecipeComponent<L>;
        codec(): $Codec<$Either<H, L>>;
        outputKey(name: string): $RecipeKey<$Either<H, L>>;
        withCodec(codec: $Codec_<$Either<H, L>>): $RecipeComponent<$Either<H, L>>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Either<H, L>>, json: $JsonObject_): void;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Either<H, L>>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$Either<H, L>>;
        asConditionalList(): $ListRecipeComponent<$Either<H, L>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$Either<H, L>>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $Either<H, L>>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<$Either<H, L>>;
        otherKey(name: string): $RecipeKey<$Either<H, L>>;
        inputKey(name: string): $RecipeKey<$Either<H, L>>;
        isEmpty(value: $Either<H, L>): boolean;
        key(name: string, role: $ComponentRole_): $RecipeKey<$Either<H, L>>;
        asList(): $ListRecipeComponent<$Either<H, L>>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$Either<H, L>, O>;
        isIgnored(): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $Either<H, L>>>;
        createBuilder(): $RecipeComponentBuilder;
        wrap(cx: $RecipeScriptContext, from: $Object): $Either<H, L>;
        static TYPE: $RecipeComponentType<never>;
        constructor(left: $RecipeComponent<H>, right: $RecipeComponent<L>);
        constructor(left: $RecipeComponent<H>, right: $RecipeComponent<L>, codec: $Codec_<$Either<H, L>>, typeInfo: $TypeInfo_);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EitherRecipeComponent}.
     */
    export type $EitherRecipeComponent_<H, L> = { typeInfo?: $TypeInfo_, left?: $RecipeComponent<any>, codec?: $Codec_<$Either<any, any>>, right?: $RecipeComponent<any>,  } | [typeInfo?: $TypeInfo_, left?: $RecipeComponent<any>, codec?: $Codec_<$Either<any, any>>, right?: $RecipeComponent<any>, ];
    export class $CustomObjectRecipeComponent$Value extends $Record implements $Map$Entry<$CustomObjectRecipeComponent$Key, $Object>, $Comparable<$CustomObjectRecipeComponent$Value> {
        index(): number;
        value(): $Object;
        compareTo(value: $CustomObjectRecipeComponent$Value_): number;
        getValue(): $Object;
        key(): $CustomObjectRecipeComponent$Key;
        setValue(object: $Object): $Object;
        getKey(): $CustomObjectRecipeComponent$Key;
        constructor(key: $CustomObjectRecipeComponent$Key_, index: number, value: $Object);
    }
    /**
     * Values that may be interpreted as {@link $CustomObjectRecipeComponent$Value}.
     */
    export type $CustomObjectRecipeComponent$Value_ = { value?: $Object, key?: $CustomObjectRecipeComponent$Key_, index?: number,  } | [value?: $Object, key?: $CustomObjectRecipeComponent$Key_, index?: number, ];
    export class $RecipeComponentCodecFactory<CT extends $RecipeComponent<never>> {
    }
    export interface $RecipeComponentCodecFactory<CT extends $RecipeComponent<never>> {
        create(type: $RecipeComponentType<never>, ctx: $RecipeTypeRegistryContext_): $MapCodec<CT>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeComponentCodecFactory}.
     */
    export type $RecipeComponentCodecFactory_<CT> = ((type: $RecipeComponentType<never>, ctx: $RecipeTypeRegistryContext) => $MapCodec_<CT>);
    export class $ComponentValueMap extends $Reference2ObjectOpenHashMap<$RecipeKey<never>, $Object> {
        getValue<T>(cx: $RecipeScriptContext, key: $RecipeKey<T>): T;
        constructor(init: number);
    }
    export class $RecipeComponentType$Unit<T> extends $RecipeComponentType<T> {
    }
    export class $RecipeComponentValue<T> implements $WrappedJS, $Map$Entry<$RecipeKey<T>, T> {
        shouldWrite(): boolean;
        getValue(): T;
        replace(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        matches(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, sourceLine: $SourceLine_): void;
        getKey(): $RecipeKey<T>;
        write(): void;
        setValue(newValue: T): T;
        copy(): $RecipeComponentValue<T>;
        getIndex(): number;
        static EMPTY_ARRAY: $RecipeComponentValue<never>[];
        index: number;
        value: T;
        key: $RecipeKey<T>;
        constructor(key: $RecipeKey<T>, index: number);
    }
    export class $RecipeComponent<T> {
        static builder(keys: $List_<$CustomObjectRecipeComponent$Key_>): $CustomObjectRecipeComponent;
        static builder(...keys: $CustomObjectRecipeComponent$Key_[]): $CustomObjectRecipeComponent;
    }
    export interface $RecipeComponent<T> {
        outputKey(name: string): $RecipeKey<T>;
        withCodec(codec: $Codec_<T>): $RecipeComponent<T>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: T): void;
        asListOrSelf(): $ListRecipeComponent<T>;
        asConditionalList(): $ListRecipeComponent<T>;
        asConditionalListOrSelf(): $ListRecipeComponent<T>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, T>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<T>;
        otherKey(name: string): $RecipeKey<T>;
        inputKey(name: string): $RecipeKey<T>;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: T): string;
        wrap(cx: $RecipeScriptContext, from: $Object): T;
        isEmpty(value: T): boolean;
        replace(cx: $RecipeScriptContext, original: T, match: $ReplacementMatchInfo_, arg3: $Object): T;
        matches(cx: $RecipeMatchContext, value: T, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: T): void;
        typeInfo(): $TypeInfo;
        key(name: string, role: $ComponentRole_): $RecipeKey<T>;
        asList(): $ListRecipeComponent<T>;
        spread(value: T): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<T, O>;
        isIgnored(): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, T>>;
        createBuilder(): $RecipeComponentBuilder;
        codec(): $Codec<T>;
        get ignored(): boolean;
    }
    export class $RecipeValidationContext {
    }
    export interface $RecipeValidationContext extends $KubeRecipeContext, $RecipeMatchContext {
        errors(): $ErrorStack;
    }
    export class $RecipeComponentBuilder {
    }
    export interface $RecipeComponentBuilder {
    }
    export class $ComponentRole extends $Enum<$ComponentRole> implements $StringRepresentable {
        isInput(): boolean;
        isOutput(): boolean;
        static values(): $ComponentRole[];
        static valueOf(name: string): $ComponentRole;
        isOther(): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static OTHER: $ComponentRole;
        static INPUT: $ComponentRole;
        static CODEC: $Codec<$ComponentRole>;
        static OUTPUT: $ComponentRole;
        get input(): boolean;
        get output(): boolean;
        get other(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ComponentRole}.
     */
    export type $ComponentRole_ = "input" | "output" | "other";
    export class $CustomObjectRecipeComponent$Key extends $Record {
        alwaysWrite(): boolean;
        name(): string;
        component(): $RecipeComponent<never>;
        optional(): boolean;
        static createCodec(ctx: $RecipeTypeRegistryContext_): $Codec<$CustomObjectRecipeComponent$Key>;
        constructor(name: string, component: $RecipeComponent<never>, optional: boolean);
        constructor(name: string, component: $RecipeComponent<never>, optional: boolean, alwaysWrite: boolean);
        constructor(name: string, component: $RecipeComponent<never>);
    }
    /**
     * Values that may be interpreted as {@link $CustomObjectRecipeComponent$Key}.
     */
    export type $CustomObjectRecipeComponent$Key_ = { optional?: boolean, alwaysWrite?: boolean, component?: $RecipeComponent<never>, name?: string,  } | [optional?: boolean, alwaysWrite?: boolean, component?: $RecipeComponent<never>, name?: string, ];
    export class $ListRecipeComponent<T> extends $Record implements $RecipeComponent<$List<T>> {
        buildUniqueId(builder: $UniqueIdBuilder_, value: $List_<$List_<T>>): void;
        canWriteSelf(): boolean;
        listTypeInfo(): $TypeInfo;
        spreadWrap(): ($RecipeComponent<never>) | undefined;
        static wrap0<T>(cx: $RecipeScriptContext, component: $RecipeComponent<T>, from: $Object): $List<T>;
        asConditional(): $ListRecipeComponent<$List<T>>;
        withSpread(spread: ($RecipeComponent<never>) | undefined): $ListRecipeComponent<$List<T>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        listCodec(): $Codec<$List<$List<T>>>;
        allowEmpty(): boolean;
        withBounds(bounds: $IntBounds_): $ListRecipeComponent<$List<T>>;
        type(): $RecipeComponentType<never>;
        wrap(cx: $RecipeScriptContext, from: $Object): $List<$List<T>>;
        isEmpty(value: $List_<$List_<T>>): boolean;
        replace(cx: $RecipeScriptContext, original: $List_<$List_<T>>, match: $ReplacementMatchInfo_, arg3: $Object): $List<$List<T>>;
        matches(cx: $RecipeMatchContext, value: $List_<$List_<T>>, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $List_<$List_<T>>): void;
        component(): $RecipeComponent<$List<T>>;
        bounds(): $IntBounds;
        typeInfo(): $TypeInfo;
        static create<L>(component: $RecipeComponent<L>, canWriteSelf: boolean, conditional: boolean): $ListRecipeComponent<L>;
        static create<L>(component: $RecipeComponent<L>, canWriteSelf: boolean, conditional: boolean, bounds: $IntBounds_, spread: ($RecipeComponent<never>) | undefined): $ListRecipeComponent<L>;
        spread(): ($RecipeComponent<never>) | undefined;
        spread(value: $List_<$List_<T>>): $List<never>;
        codec(): $Codec<$List<$List<T>>>;
        conditional(): boolean;
        outputKey(name: string): $RecipeKey<$List<T>>;
        withCodec(codec: $Codec_<$List_<T>>): $RecipeComponent<$List<T>>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$List_<T>>, json: $JsonObject_): void;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$List_<T>>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$List<T>>;
        asConditionalList(): $ListRecipeComponent<$List<T>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$List<T>>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $List<T>>>;
        otherKey(name: string): $RecipeKey<$List<T>>;
        inputKey(name: string): $RecipeKey<$List<T>>;
        toString(ops: $OpsContainer, value: $List_<T>): string;
        key(name: string, role: $ComponentRole_): $RecipeKey<$List<T>>;
        asList(): $ListRecipeComponent<$List<T>>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$List<T>, O>;
        isIgnored(): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $List<T>>>;
        createBuilder(): $RecipeComponentBuilder;
        orSelf(): $RecipeComponent<$List<T>>;
        static TYPE: $RecipeComponentType<never>;
        constructor(component: $RecipeComponent<$List_<T>>, canWriteSelf: boolean, listTypeInfo: $TypeInfo_, listCodec: $Codec_<$List_<$List_<T>>>, conditional: boolean, bounds: $IntBounds_, spread: ($RecipeComponent<never>) | undefined, spreadWrap: ($RecipeComponent<never>) | undefined);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ListRecipeComponent}.
     */
    export type $ListRecipeComponent_<T> = { bounds?: $IntBounds_, spread?: ($RecipeComponent<never>) | undefined, spreadWrap?: ($RecipeComponent<never>) | undefined, component?: $RecipeComponent<any>, canWriteSelf?: boolean, listCodec?: $Codec_<$List_<any>>, conditional?: boolean, listTypeInfo?: $TypeInfo_,  } | [bounds?: $IntBounds_, spread?: ($RecipeComponent<never>) | undefined, spreadWrap?: ($RecipeComponent<never>) | undefined, component?: $RecipeComponent<any>, canWriteSelf?: boolean, listCodec?: $Codec_<$List_<any>>, conditional?: boolean, listTypeInfo?: $TypeInfo_, ];
    export class $RecipeComponentType<T> {
        isUnit(): boolean;
        outputKey(name: string): $RecipeKey<T>;
        otherKey(name: string): $RecipeKey<T>;
        inputKey(name: string): $RecipeKey<T>;
        id(): $ResourceLocation;
        key(name: string, role: $ComponentRole_): $RecipeKey<T>;
        static dynamic<CT extends $RecipeComponent<never>>(id: $ResourceLocation_, codecFactory: $RecipeComponentCodecFactory_<CT>): $RecipeComponentType<never>;
        static dynamic<CT extends $RecipeComponent<never>>(id: $ResourceLocation_, mapCodec: $MapCodec_<CT>): $RecipeComponentType<never>;
        instance(): $RecipeComponent<T>;
        static unit<T>(id: $ResourceLocation_, instance: $RecipeComponent<T>): $RecipeComponentType$Unit<T>;
        static unit<T>(id: $ResourceLocation_, instanceGetter: $Function_<$RecipeComponentType<T>, $RecipeComponent<T>>): $RecipeComponentType$Unit<T>;
        mapCodec(ctx: $RecipeTypeRegistryContext_): $MapCodec<$RecipeComponent<never>>;
        constructor(id: $ResourceLocation_);
    }
}
