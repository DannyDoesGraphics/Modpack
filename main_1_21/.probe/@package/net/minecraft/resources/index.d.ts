import { $RegistryBuilder } from "@package/net/neoforged/neoforge/registries";
import { $JsonDeserializer, $JsonElement_, $JsonSerializer, $JsonDeserializationContext_, $JsonSerializationContext, $JsonElement } from "@package/com/google/gson";
import { $RegistryDataAccessor } from "@package/foundry/veil/mixin/registry/accessor";
import { $Decoder$Simple, $DataResult, $MapEncoder, $DynamicOps, $Codec, $Dynamic, $MapCodec, $Decoder, $Codec$ResultFunction, $Encoder_, $MapLike, $ListBuilder, $Decoder$Boxed, $Lifecycle, $RecordBuilder, $Encoder, $Codec_, $Decoder$Terminal, $Decoder_ } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $ResourceManager, $Resource, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $Map, $List, $Map_, $List_ } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $RegistryOpsAccessor, $ForwardingDynamicOpsAccessor, $CachedRegistryInfoGetterAccessor } from "@package/io/wispforest/owo/mixin";
import { $HolderLookupAdapterAccessor, $RegistryOpsAccessor as $RegistryOpsAccessor$1, $DelegatingOpsAccessor } from "@package/io/wispforest/accessories/mixin";
import { $Supplier_, $Consumer_, $Function, $BiConsumer, $Consumer, $BiConsumer_, $Function_, $UnaryOperator_ } from "@package/java/util/function";
import { $HolderSet_, $HolderLookup$RegistryLookup, $RegistryAccess, $Registry, $Holder$Reference, $HolderOwner, $HolderGetter, $HolderLookup$Provider, $Holder_, $RegistryAccess$Frozen, $HolderSet, $Holder, $RegistrySynchronization$PackedRegistryEntry_, $WritableRegistry } from "@package/net/minecraft/core";
import { $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $LongStream, $Stream, $IntStream } from "@package/java/util/stream";
import { RegistryTypes } from "@special/types";
import { $Type } from "@package/java/lang/reflect";
import { $SpecialEquality } from "@package/dev/latvian/mods/rhino/util";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Number, $Exception, $Comparable, $Record, $Object } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/resources" {
    /**
     * An immutable location of a resource, in terms of a path and namespace.
     * 
     * This is used as an identifier for a resource, usually for those housed in a `Registry`, such as blocks and items.
     * 
     * `minecraft` is always taken as the default namespace for a resource location when none is explicitly stated. When using this for registering objects, this namespace **should** only be used for resources added by Minecraft itself.
     * 
     * Generally, and by the implementation of `#toString()`, the string representation of this class is expressed in the form `namespace:path`. The colon is also used as the default separator for parsing strings as a `ResourceLocation`.
     * @see net.minecraft.resources.ResourceKey
     */
    export class $ResourceLocation implements $Comparable<$ResourceLocation>, $SpecialEquality {
        getNamespace(): string;
        compareTo(other: $ResourceLocation_): number;
        static read(reader: $StringReader): $ResourceLocation;
        static read(location: string): $DataResult<$ResourceLocation>;
        static parse(location: string): $ResourceLocation;
        getPath(): string;
        withPrefix(location: string): $ResourceLocation;
        withSuffix(location: string): $ResourceLocation;
        static tryParse(location: string): $ResourceLocation;
        static fromNamespaceAndPath(namespace: string, path: string): $ResourceLocation;
        static withDefaultNamespace(location: string): $ResourceLocation;
        /**
         * @return `true` if the specified `namespace` is valid: consists only of `[a-z0-9_.-]` characters
         */
        static isValidPath(namespace: string): boolean;
        /**
         * @return `true` if the specified `namespace` is valid: consists only of `[a-z0-9_.-]` characters
         */
        static isValidNamespace(namespace: string): boolean;
        static bySeparator(location: string, seperator: string): $ResourceLocation;
        static tryBySeparator(location: string, seperator: string): $ResourceLocation;
        static tryBuild(namespace: string, path: string): $ResourceLocation;
        withPath(location: string): $ResourceLocation;
        withPath(pathOperator: $UnaryOperator_<string>): $ResourceLocation;
        compareNamespaced(other: $ResourceLocation_): number;
        toDebugFileName(): string;
        toLanguageKey(type: string): string;
        toLanguageKey(): string;
        toLanguageKey(namespace: string, path: string): string;
        toShortLanguageKey(): string;
        static readNonEmpty(reader: $StringReader): $ResourceLocation;
        static validPathChar(character: string): boolean;
        static validNamespaceChar(character: string): boolean;
        static isAllowedInResourceLocation(character: string): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        static CODEC: $Codec<$ResourceLocation>;
        static REALMS_NAMESPACE: string;
        static ERROR_INVALID: $SimpleCommandExceptionType;
        static NAMESPACE_SEPARATOR: string;
        static DEFAULT_NAMESPACE: string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ResourceLocation>;
        constructor(namespace: string, path: string);
        get namespace(): string;
        get path(): string;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLocation}.
     */
    export type $ResourceLocation_ = string;
    export class $RegistryDataLoader$LoadingFunction {
    }
    export interface $RegistryDataLoader$LoadingFunction {
        apply(loader: $RegistryDataLoader$Loader_<never>, registryInfoLookup: $RegistryOps$RegistryInfoLookup_): void;
    }
    /**
     * Values that may be interpreted as {@link $RegistryDataLoader$LoadingFunction}.
     */
    export type $RegistryDataLoader$LoadingFunction_ = ((arg0: $RegistryDataLoader$Loader<never>, arg1: $RegistryOps$RegistryInfoLookup) => void);
    export class $RegistryDataLoader$RegistryData<T> extends $Record implements $RegistryDataAccessor {
        requiredNonEmpty(): boolean;
        registryBuilderConsumer(): $Consumer<$RegistryBuilder<T>>;
        runWithArguments(runner: $BiConsumer_<$ResourceKey<$Registry<T>>, $Codec<T>>): void;
        key(): $ResourceKey<$Registry<T>>;
        elementCodec(): $Codec<T>;
        invokeCreate(registryLifecycle: $Lifecycle, loadingErrors: $Map_<$ResourceKey_<never>, $Exception>): $RegistryDataLoader$Loader<never>;
        constructor(arg0: $ResourceKey_<$Registry<T>>, arg1: $Codec_<T>, arg2: boolean);
        constructor(key: $ResourceKey_<$Registry<T>>, elementCodec: $Codec_<T>, requiredNonEmpty: boolean, registryBuilderConsumer: $Consumer_<$RegistryBuilder<T>>);
    }
    /**
     * Values that may be interpreted as {@link $RegistryDataLoader$RegistryData}.
     */
    export type $RegistryDataLoader$RegistryData_<T> = { elementCodec?: $Codec_<any>, key?: $ResourceKey_<$Registry<any>>, requiredNonEmpty?: boolean, registryBuilderConsumer?: $Consumer_<$RegistryBuilder<any>>,  } | [elementCodec?: $Codec_<any>, key?: $ResourceKey_<$Registry<any>>, requiredNonEmpty?: boolean, registryBuilderConsumer?: $Consumer_<$RegistryBuilder<any>>, ];
    export class $HolderSetCodec<E> implements $Codec<$HolderSet<E>> {
        decode<T>(ops: $DynamicOps<T>, input: T): $DataResult<$Pair<$HolderSet<E>, T>>;
        encode<T>(input: $HolderSet_<E>, ops: $DynamicOps<T>, prefix: T): $DataResult<T>;
        static create<E>(registryKey: $ResourceKey_<$Registry<E>>, holderCodec: $Codec_<$Holder_<E>>, disallowInline: boolean): $Codec<$HolderSet<E>>;
        dispatch<E>(arg0: string, arg1: $Function_<E, $HolderSet<E>>, arg2: $Function_<$HolderSet<E>, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: $Function_<E, $HolderSet<E>>, arg1: $Function_<$HolderSet<E>, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<$HolderSet<E>, $DataResult<$HolderSet<E>>>): $Codec<$HolderSet<E>>;
        orElse(arg0: $UnaryOperator_<string>, arg1: $HolderSet_<E>): $Codec<$HolderSet<E>>;
        orElse(arg0: $HolderSet_<E>): $Codec<$HolderSet<E>>;
        orElse(arg0: $Consumer_<string>, arg1: $HolderSet_<E>): $Codec<$HolderSet<E>>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<$HolderSet<E>>): $Codec<$HolderSet<E>>;
        orElseGet(arg0: $Supplier_<$HolderSet<E>>): $Codec<$HolderSet<E>>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<$HolderSet<E>>): $Codec<$HolderSet<E>>;
        deprecated(arg0: number): $Codec<$HolderSet<E>>;
        stable(): $Codec<$HolderSet<E>>;
        listOf(arg0: number, arg1: number): $Codec<$List<$HolderSet<E>>>;
        listOf(): $Codec<$List<$HolderSet<E>>>;
        flatXmap<S>(arg0: $Function_<$HolderSet<E>, $DataResult<S>>, arg1: $Function_<S, $DataResult<$HolderSet<E>>>): $Codec<S>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $HolderSet_<E>, arg3: $Lifecycle): $MapCodec<$HolderSet<E>>;
        optionalFieldOf(arg0: string, arg1: $HolderSet_<E>, arg2: $Lifecycle): $MapCodec<$HolderSet<E>>;
        optionalFieldOf(arg0: string, arg1: $HolderSet_<E>): $MapCodec<$HolderSet<E>>;
        optionalFieldOf(arg0: string): $MapCodec<($HolderSet<E>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $HolderSet_<E>, arg3: $Lifecycle): $MapCodec<$HolderSet<E>>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<($HolderSet<E>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $HolderSet_<E>): $MapCodec<$HolderSet<E>>;
        lenientOptionalFieldOf(arg0: string, arg1: $HolderSet_<E>, arg2: $Lifecycle): $MapCodec<$HolderSet<E>>;
        mapResult(arg0: $Codec$ResultFunction<$HolderSet_<E>>): $Codec<$HolderSet<E>>;
        promotePartial(arg0: $Consumer_<string>): $Codec<$HolderSet<E>>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<$HolderSet<E>>>, arg2: $Function_<$HolderSet<E>, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, $HolderSet<E>>, arg2: $Function_<$HolderSet<E>, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, $HolderSet<E>>, arg1: $Function_<$HolderSet<E>, $MapCodec<E>>): $MapCodec<E>;
        xmap<S>(arg0: $Function_<$HolderSet<E>, S>, arg1: $Function_<S, $HolderSet<E>>): $Codec<S>;
        sizeLimitedListOf(arg0: number): $Codec<$List<$HolderSet<E>>>;
        comapFlatMap<S>(arg0: $Function_<$HolderSet<E>, $DataResult<S>>, arg1: $Function_<S, $HolderSet<E>>): $Codec<S>;
        flatComapMap<S>(arg0: $Function_<$HolderSet<E>, S>, arg1: $Function_<S, $DataResult<$HolderSet<E>>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, $HolderSet<E>>, arg1: $Function_<$HolderSet<E>, $MapCodec<E>>): $Codec<E>;
        comap<B>(arg0: $Function_<B, $HolderSet<E>>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<$HolderSet<E>>>): $Encoder<B>;
        encodeStart<T>(ops: $DynamicOps<T>, input: $HolderSet_<E>): $DataResult<T>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<$HolderSet<E>, T>>;
        map<B>(arg0: $Function_<$HolderSet<E>, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<$HolderSet<E>, $DataResult<B>>): $Decoder<B>;
        parse<T>(ops: $DynamicOps<T>, input: T): $DataResult<$HolderSet<E>>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<$HolderSet<E>>;
        boxed(): $Decoder$Boxed<$HolderSet<E>>;
        terminal(): $Decoder$Terminal<$HolderSet<E>>;
        simple(): $Decoder$Simple<$HolderSet<E>>;
        withLifecycle(arg0: $Lifecycle): $Encoder<$HolderSet<E>>;
        fieldOf(arg0: string): $MapEncoder<$HolderSet<E>>;
        elementCodec: $Codec<$Holder<E>>;
    }
    export class $RegistryOps<T> extends $DelegatingOps<T> implements $RegistryOpsAccessor$1, $RegistryOpsAccessor {
        static injectRegistryContext<T>(dynamic: $Dynamic<T>, registries: $HolderLookup$Provider): $Dynamic<T>;
        static retrieveGetter<E, O>(key: $ResourceKey_<$Registry<E>>): $RecordCodecBuilder<O, $HolderGetter<E>>;
        static retrieveRegistryLookup<E>(arg0: $ResourceKey_<$Registry<E>>): $MapCodec<$HolderLookup$RegistryLookup<E>>;
        static retrieveElement<E, O>(key: $ResourceKey_<E>): $RecordCodecBuilder<O, $Holder$Reference<E>>;
        owner<E>(registryKey: $ResourceKey_<$Registry<E>>): ($HolderOwner<E>) | undefined;
        static create<T>(delegate: $DynamicOps<T>, lookupProvider: $RegistryOps$RegistryInfoLookup_): $RegistryOps<T>;
        static create<T>(delegate: $DynamicOps<T>, registries: $HolderLookup$Provider): $RegistryOps<T>;
        getter<E>(registryKey: $ResourceKey_<$Registry<E>>): ($HolderGetter<E>) | undefined;
        withParent<U>(ops: $DynamicOps<U>): $RegistryOps<U>;
        lookupProvider(): $RegistryOps$RegistryInfoLookup;
        owo$infoGetter(): $RegistryOps$RegistryInfoLookup;
    }
    export class $RegistryOps$RegistryInfo<T> extends $Record {
        static fromRegistryLookup<T>(registryLookup: $HolderLookup$RegistryLookup<T>): $RegistryOps$RegistryInfo<T>;
        elementsLifecycle(): $Lifecycle;
        owner(): $HolderOwner<T>;
        getter(): $HolderGetter<T>;
        constructor(owner: $HolderOwner<T>, getter: $HolderGetter<T>, elementsLifecycle: $Lifecycle);
        get ter(): $HolderGetter<T>;
    }
    /**
     * Values that may be interpreted as {@link $RegistryOps$RegistryInfo}.
     */
    export type $RegistryOps$RegistryInfo_<T> = { elementsLifecycle?: $Lifecycle, getter?: $HolderGetter<any>, owner?: $HolderOwner<any>,  } | [elementsLifecycle?: $Lifecycle, getter?: $HolderGetter<any>, owner?: $HolderOwner<any>, ];
    export class $RegistryOps$RegistryInfoLookup {
    }
    export interface $RegistryOps$RegistryInfoLookup {
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($RegistryOps$RegistryInfo<T>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $RegistryOps$RegistryInfoLookup}.
     */
    export type $RegistryOps$RegistryInfoLookup_ = ((arg0: $ResourceKey<$Registry<any>>) => ($RegistryOps$RegistryInfo_<T>) | undefined);
    /**
     * A `DynamicOps` that delegates all functionality to an internal delegate. Comments and parameters here are copied from `DynamicOps` in DataFixerUpper.
     */
    export class $DelegatingOps<T> implements $DynamicOps<T>, $DelegatingOpsAccessor<any>, $ForwardingDynamicOpsAccessor<any> {
        getStringValue(input: T): $DataResult<string>;
        getStream(input: T): $DataResult<$Stream<T>>;
        remove(input: T, key: string): T;
        empty(): T;
        emptyList(): T;
        getByteBuffer(input: T): $DataResult<$ByteBuffer>;
        emptyMap(): T;
        getMap(input: T): $DataResult<$MapLike<T>>;
        createMap(map: $Map_<T, T>): T;
        createMap(input: $Stream<$Pair<T, T>>): T;
        createLong(value: number): T;
        createString(value: string): T;
        getList(input: T): $DataResult<$Consumer<$Consumer<T>>>;
        createFloat(value: number): T;
        createList(input: $Stream<T>): T;
        createDouble(value: number): T;
        getBooleanValue(input: T): $DataResult<boolean>;
        /**
         * Only successful if first argument is a list/array or empty.
         */
        mergeToPrimitive(list: T, value: T): $DataResult<T>;
        compressMaps(): boolean;
        mapBuilder(): $RecordBuilder<any>;
        getNumberValue(input: T): $DataResult<$Number>;
        createByte(value: number): T;
        createShort(value: number): T;
        createBoolean(value: boolean): T;
        createByteList(input: $ByteBuffer): T;
        getIntStream(input: T): $DataResult<$IntStream>;
        createIntList(input: $IntStream): T;
        createInt(value: number): T;
        mergeToList(list: T, values: $List_<T>): $DataResult<T>;
        /**
         * Only successful if first argument is a list/array or empty.
         */
        mergeToList(list: T, value: T): $DataResult<T>;
        /**
         * Only successful if first argument is a map or empty.
         */
        mergeToMap(map: T, key: T, value: T): $DataResult<T>;
        mergeToMap(map: T, values: $MapLike<T>): $DataResult<T>;
        mergeToMap(map: T, values: $Map_<T, T>): $DataResult<T>;
        getLongStream(input: T): $DataResult<$LongStream>;
        createLongList(input: $LongStream): T;
        listBuilder(): $ListBuilder<any>;
        createNumeric(i: $Number): T;
        getMapValues(input: T): $DataResult<$Stream<$Pair<T, T>>>;
        convertTo<U>(outOps: $DynamicOps<U>, input: T): U;
        getMapEntries(input: T): $DataResult<$Consumer<$BiConsumer<T, T>>>;
        get(arg0: T, arg1: string): $DataResult<T>;
        update(arg0: T, arg1: string, arg2: $Function_<T, T>): T;
        set(arg0: T, arg1: string, arg2: T): T;
        getNumberValue(arg0: T, arg1: $Number): $Number;
        /**
         * Only successful if first argument is a list/array or empty.
         */
        getGeneric(list: T, value: T): $DataResult<T>;
        updateGeneric(arg0: T, arg1: T, arg2: $Function_<T, T>): T;
        withEncoder<E>(arg0: $Encoder_<E>): $Function<E, $DataResult<T>>;
        withDecoder<E>(arg0: $Decoder_<E>): $Function<T, $DataResult<$Pair<E, T>>>;
        withParser<E>(arg0: $Decoder_<E>): $Function<T, $DataResult<E>>;
        convertList<U>(outOps: $DynamicOps<U>, input: T): U;
        convertMap<U>(outOps: $DynamicOps<U>, input: T): U;
        owo$delegate(): $DynamicOps<T>;
        delegate(): $DynamicOps<T>;
    }
    /**
     * A codec that wraps a single element, or "file", within a registry. Possibly allows inline definitions, and always falls back to the element codec (and thus writing the registry element inline) if it fails to decode from the registry.
     */
    export class $RegistryFileCodec<E> implements $Codec<$Holder<E>> {
        decode<T>(ops: $DynamicOps<T>, input: T): $DataResult<$Pair<$Holder<E>, T>>;
        encode<T>(input: $Holder_<E>, ops: $DynamicOps<T>, prefix: T): $DataResult<T>;
        /**
         * Creates a codec for a single registry element, which is held as an un-resolved `Supplier`. Both inline definitions of the object, and references to an existing registry element id are allowed.
         */
        static create<E>(registryKey: $ResourceKey_<$Registry<E>>, elementCodec: $Codec_<E>): $RegistryFileCodec<E>;
        static create<E>(registryKey: $ResourceKey_<$Registry<E>>, elementCodec: $Codec_<E>, allowInline: boolean): $RegistryFileCodec<E>;
        dispatch<E>(arg0: string, arg1: $Function_<E, $Holder<E>>, arg2: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<$Holder<E>, $DataResult<$Holder<E>>>): $Codec<$Holder<E>>;
        orElse(arg0: $UnaryOperator_<string>, arg1: $Holder_<E>): $Codec<$Holder<E>>;
        orElse(arg0: $Holder_<E>): $Codec<$Holder<E>>;
        orElse(arg0: $Consumer_<string>, arg1: $Holder_<E>): $Codec<$Holder<E>>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        orElseGet(arg0: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        deprecated(arg0: number): $Codec<$Holder<E>>;
        stable(): $Codec<$Holder<E>>;
        listOf(arg0: number, arg1: number): $Codec<$List<$Holder<E>>>;
        listOf(): $Codec<$List<$Holder<E>>>;
        flatXmap<S>(arg0: $Function_<$Holder<E>, $DataResult<S>>, arg1: $Function_<S, $DataResult<$Holder<E>>>): $Codec<S>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Holder_<E>, arg3: $Lifecycle): $MapCodec<$Holder<E>>;
        optionalFieldOf(arg0: string, arg1: $Holder_<E>, arg2: $Lifecycle): $MapCodec<$Holder<E>>;
        optionalFieldOf(arg0: string, arg1: $Holder_<E>): $MapCodec<$Holder<E>>;
        optionalFieldOf(arg0: string): $MapCodec<($Holder<E>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Holder_<E>, arg3: $Lifecycle): $MapCodec<$Holder<E>>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<($Holder<E>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Holder_<E>): $MapCodec<$Holder<E>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Holder_<E>, arg2: $Lifecycle): $MapCodec<$Holder<E>>;
        mapResult(arg0: $Codec$ResultFunction<$Holder_<E>>): $Codec<$Holder<E>>;
        promotePartial(arg0: $Consumer_<string>): $Codec<$Holder<E>>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<$Holder<E>>>, arg2: $Function_<$Holder<E>, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, $Holder<E>>, arg2: $Function_<$Holder<E>, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $MapCodec<E>;
        xmap<S>(arg0: $Function_<$Holder<E>, S>, arg1: $Function_<S, $Holder<E>>): $Codec<S>;
        sizeLimitedListOf(arg0: number): $Codec<$List<$Holder<E>>>;
        comapFlatMap<S>(arg0: $Function_<$Holder<E>, $DataResult<S>>, arg1: $Function_<S, $Holder<E>>): $Codec<S>;
        flatComapMap<S>(arg0: $Function_<$Holder<E>, S>, arg1: $Function_<S, $DataResult<$Holder<E>>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        comap<B>(arg0: $Function_<B, $Holder<E>>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<$Holder<E>>>): $Encoder<B>;
        encodeStart<T>(ops: $DynamicOps<T>, input: $Holder_<E>): $DataResult<T>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<$Holder<E>, T>>;
        map<B>(arg0: $Function_<$Holder<E>, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<$Holder<E>, $DataResult<B>>): $Decoder<B>;
        parse<T>(ops: $DynamicOps<T>, input: T): $DataResult<$Holder<E>>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<$Holder<E>>;
        boxed(): $Decoder$Boxed<$Holder<E>>;
        terminal(): $Decoder$Terminal<$Holder<E>>;
        simple(): $Decoder$Simple<$Holder<E>>;
        withLifecycle(arg0: $Lifecycle): $Encoder<$Holder<E>>;
        fieldOf(arg0: string): $MapEncoder<$Holder<E>>;
        registryKey: $ResourceKey<$Registry<E>>;
        elementCodec: $Codec<E>;
        allowInline: boolean;
    }
    export class $ResourceLocation$Serializer implements $JsonDeserializer<$ResourceLocation>, $JsonSerializer<$ResourceLocation> {
        serialize(src: $ResourceLocation_, typeOfSrc: $Type, context: $JsonSerializationContext): $JsonElement;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $ResourceLocation;
        constructor();
    }
    /**
     * An immutable key for a resource, in terms of the name of its parent registry and its location in that registry.
     * 
     * `Registry` uses this to return resource keys for registry objects via `Registry#getResourceKey(Object)`. It also uses this class to store its name, with the parent registry name set to `minecraft:root`. When used in this way it is usually referred to as a "registry key".
     * 
     * @param  The type of the resource represented by this `ResourceKey`, or the type of the registry if it is a registry key.
     * @see net.minecraft.resources.ResourceLocation
     */
    export class $ResourceKey<T> implements $Comparable<$ResourceKey<never>>, $SpecialEquality {
        /**
         * @note_to_llm `ResourceKey` is a reference to a registry entry. KubeJS has special type wrapper for `ResourceKey<T>`
         * that allows you to use string literals as `ResourceKey`. For example, "minecraf:apple" can be used as a `ResourceKey<Item>`.
         * Check available literals for registry entries using the #tool:prunoideae.probejs/listRegistries #tool:prunoideae.probejs/queryRegistryObjectsByRegex #tool:prunoideae.probejs/queryTaggedObjects tools.
         * `ResourceKey` is a reference to a registry entry. KubeJS has special type wrapper for `ResourceKey<T>`
         * that allows you to use string literals as `ResourceKey`. For example, "minecraf:apple" can be used as a `ResourceKey<Item>`.
         * Check available literals for registry entries using the #tool:prunoideae.probejs/listRegistries #tool:prunoideae.probejs/queryRegistryObjectsByRegex #tool:prunoideae.probejs/queryTaggedObjects tools.
         * `ResourceKey` is a reference to a registry entry. KubeJS has special type wrapper for `ResourceKey<T>`
         * that allows you to use string literals as `ResourceKey`. For example, "minecraf:apple" can be used as a `ResourceKey<Item>`.
         * Check available literals for registry entries using the #tool:prunoideae.probejs/listRegistries #tool:prunoideae.probejs/queryRegistryObjectsByRegex #tool:prunoideae.probejs/queryTaggedObjects tools.
         */
        /**
         * @return the created registry key. The registry name is set to `minecraft:root` and the location the specified `registryName`.
         */
        static createRegistryKey<T>(location: $ResourceLocation_): $ResourceKey<$Registry<T>>;
        static streamCodec<T>(registryKey: $ResourceKey_<$Registry<T>>): $StreamCodec<$ByteBuf, $ResourceKey<T>>;
        /**
         * @return `true` if this resource key is a direct child of the specified `registryKey`.
         */
        isFor(registryKey: $ResourceKey_<$Registry<never>>): boolean;
        getNamespace(): string;
        getPath(): string;
        cast<E>(registryKey: $ResourceKey_<$Registry<E>>): ($ResourceKey<E>) | undefined;
        compareTo(arg0: $ResourceKey_<never>): number;
        location(): $ResourceLocation;
        /**
         * Constructs a new `ResourceKey` for a resource with the specified `location` within the registry specified by the given `registryKey`.
         * 
         * @return the created resource key. The registry name is set to the location of the specified `registryKey` and with the specified `location` as the location of the resource.
         */
        static create<T>(registryKey: $ResourceKey_<$Registry<T>>, location: $ResourceLocation_): $ResourceKey<T>;
        registry(): $ResourceLocation;
        static codec<T>(registryKey: $ResourceKey_<$Registry<T>>): $Codec<$ResourceKey<T>>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        registryKey(): $ResourceKey<$Registry<$ResourceKey<never>>>;
        get namespace(): string;
        get path(): string;
    }
    /**
     * Values that may be interpreted as {@link $ResourceKey}.
     */
    export type $ResourceKey_<T> = RegistryTypes.ResolveObject<T>;
    export class $RegistryDataLoader {
        static load(resourceManager: $ResourceManager, registryAccess: $RegistryAccess, registryData: $List_<$RegistryDataLoader$RegistryData_<never>>): $RegistryAccess$Frozen;
        static load(elements: $Map_<$ResourceKey_<$Registry<never>>, $List_<$RegistrySynchronization$PackedRegistryEntry_>>, resourceProvider: $ResourceProvider_, registryAccess: $RegistryAccess, registryData: $List_<$RegistryDataLoader$RegistryData_<never>>): $RegistryAccess$Frozen;
        static createContext(registryAccess: $RegistryAccess, registryLoaders: $List_<$RegistryDataLoader$Loader_<never>>): $RegistryOps$RegistryInfoLookup;
        static WORLDGEN_REGISTRIES: $List<$RegistryDataLoader$RegistryData<never>>;
        static SYNCHRONIZED_REGISTRIES: $List<$RegistryDataLoader$RegistryData<never>>;
        static DIMENSION_REGISTRIES: $List<$RegistryDataLoader$RegistryData<never>>;
        constructor();
    }
    export class $RegistryFixedCodec<E> implements $Codec<$Holder<E>> {
        decode<T>(ops: $DynamicOps<T>, value: T): $DataResult<$Pair<$Holder<E>, T>>;
        encode<T>(holder: $Holder_<E>, ops: $DynamicOps<T>, value: T): $DataResult<T>;
        static create<E>(registryKey: $ResourceKey_<$Registry<E>>): $RegistryFixedCodec<E>;
        dispatch<E>(arg0: string, arg1: $Function_<E, $Holder<E>>, arg2: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<$Holder<E>, $DataResult<$Holder<E>>>): $Codec<$Holder<E>>;
        orElse(arg0: $UnaryOperator_<string>, arg1: $Holder_<E>): $Codec<$Holder<E>>;
        orElse(arg0: $Holder_<E>): $Codec<$Holder<E>>;
        orElse(arg0: $Consumer_<string>, arg1: $Holder_<E>): $Codec<$Holder<E>>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        orElseGet(arg0: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        deprecated(arg0: number): $Codec<$Holder<E>>;
        stable(): $Codec<$Holder<E>>;
        listOf(arg0: number, arg1: number): $Codec<$List<$Holder<E>>>;
        listOf(): $Codec<$List<$Holder<E>>>;
        flatXmap<S>(arg0: $Function_<$Holder<E>, $DataResult<S>>, arg1: $Function_<S, $DataResult<$Holder<E>>>): $Codec<S>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Holder_<E>, arg3: $Lifecycle): $MapCodec<$Holder<E>>;
        optionalFieldOf(arg0: string, arg1: $Holder_<E>, arg2: $Lifecycle): $MapCodec<$Holder<E>>;
        optionalFieldOf(arg0: string, arg1: $Holder_<E>): $MapCodec<$Holder<E>>;
        optionalFieldOf(arg0: string): $MapCodec<($Holder<E>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Holder_<E>, arg3: $Lifecycle): $MapCodec<$Holder<E>>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<($Holder<E>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Holder_<E>): $MapCodec<$Holder<E>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Holder_<E>, arg2: $Lifecycle): $MapCodec<$Holder<E>>;
        mapResult(arg0: $Codec$ResultFunction<$Holder_<E>>): $Codec<$Holder<E>>;
        promotePartial(arg0: $Consumer_<string>): $Codec<$Holder<E>>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<$Holder<E>>>, arg2: $Function_<$Holder<E>, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, $Holder<E>>, arg2: $Function_<$Holder<E>, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $MapCodec<E>;
        xmap<S>(arg0: $Function_<$Holder<E>, S>, arg1: $Function_<S, $Holder<E>>): $Codec<S>;
        sizeLimitedListOf(arg0: number): $Codec<$List<$Holder<E>>>;
        comapFlatMap<S>(arg0: $Function_<$Holder<E>, $DataResult<S>>, arg1: $Function_<S, $Holder<E>>): $Codec<S>;
        flatComapMap<S>(arg0: $Function_<$Holder<E>, S>, arg1: $Function_<S, $DataResult<$Holder<E>>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        comap<B>(arg0: $Function_<B, $Holder<E>>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<$Holder<E>>>): $Encoder<B>;
        encodeStart<T>(ops: $DynamicOps<T>, value: $Holder_<E>): $DataResult<T>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<$Holder<E>, T>>;
        map<B>(arg0: $Function_<$Holder<E>, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<$Holder<E>, $DataResult<B>>): $Decoder<B>;
        parse<T>(ops: $DynamicOps<T>, value: T): $DataResult<$Holder<E>>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<$Holder<E>>;
        boxed(): $Decoder$Boxed<$Holder<E>>;
        terminal(): $Decoder$Terminal<$Holder<E>>;
        simple(): $Decoder$Simple<$Holder<E>>;
        withLifecycle(arg0: $Lifecycle): $Encoder<$Holder<E>>;
        fieldOf(arg0: string): $MapEncoder<$Holder<E>>;
        registryKey: $ResourceKey<$Registry<E>>;
    }
    export class $ResourceKey$InternKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ResourceKey$InternKey}.
     */
    export type $ResourceKey$InternKey_ = { location?: $ResourceLocation_, registry?: $ResourceLocation_,  } | [location?: $ResourceLocation_, registry?: $ResourceLocation_, ];
    export class $FileToIdConverter {
        idToFile(file: $ResourceLocation_): $ResourceLocation;
        listMatchingResources(resourceManager: $ResourceManager): $Map<$ResourceLocation, $Resource>;
        fileToId(file: $ResourceLocation_): $ResourceLocation;
        listMatchingResourcesFromNamespace(arg0: $ResourceManager, arg1: string): $Map<$ResourceLocation, $Resource>;
        listMatchingResourceStacks(resourceManager: $ResourceManager): $Map<$ResourceLocation, $List<$Resource>>;
        listMatchingResourceStacksFromNamespace(arg0: $ResourceManager, arg1: string): $Map<$ResourceLocation, $List<$Resource>>;
        static json(name: string): $FileToIdConverter;
        constructor(prefix: string, extenstion: string);
    }
    export class $RegistryDataLoader$Loader<T> extends $Record {
        loadFromNetwork(elements: $Map_<$ResourceKey_<$Registry<never>>, $List_<$RegistrySynchronization$PackedRegistryEntry_>>, resourceProvider: $ResourceProvider_, registryInfoLookup: $RegistryOps$RegistryInfoLookup_): void;
        loadFromResources(resouceManager: $ResourceManager, registryInfoLookup: $RegistryOps$RegistryInfoLookup_): void;
        data(): $RegistryDataLoader$RegistryData<T>;
        registry(): $WritableRegistry<T>;
        loadingErrors(): $Map<$ResourceKey<never>, $Exception>;
        constructor(data: $RegistryDataLoader$RegistryData_<T>, registry: $WritableRegistry<T>, loadingErrors: $Map_<$ResourceKey_<never>, $Exception>);
    }
    /**
     * Values that may be interpreted as {@link $RegistryDataLoader$Loader}.
     */
    export type $RegistryDataLoader$Loader_<T> = { loadingErrors?: $Map_<$ResourceKey_<never>, $Exception>, registry?: $WritableRegistry<any>, data?: $RegistryDataLoader$RegistryData_<any>,  } | [loadingErrors?: $Map_<$ResourceKey_<never>, $Exception>, registry?: $WritableRegistry<any>, data?: $RegistryDataLoader$RegistryData_<any>, ];
    export class $RegistryOps$HolderLookupAdapter implements $RegistryOps$RegistryInfoLookup, $HolderLookupAdapterAccessor, $CachedRegistryInfoGetterAccessor {
        lookup<E>(registryKey: $ResourceKey_<$Registry<E>>): ($RegistryOps$RegistryInfo<E>) | undefined;
        owo$getRegistriesLookup(): $HolderLookup$Provider;
        getLookupProvider(): $HolderLookup$Provider;
        lookupProvider: $HolderLookup$Provider;
        constructor(lookupProvider: $HolderLookup$Provider);
    }
}
