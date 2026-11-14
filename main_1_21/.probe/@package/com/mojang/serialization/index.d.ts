import { $Supplier_, $Consumer_, $BiFunction, $Function, $BiConsumer, $Consumer, $Function_, $UnaryOperator_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $LongStream, $Stream, $IntStream } from "@package/java/util/stream";
import { $Function4_, $Function13_, $Function3_, $Unit, $Function14_, $Function11_, $Function6_, $Function5_, $Either, $Function12_, $Function3, $Function4, $Function5, $Pair, $Function6, $Function8_, $Function7, $Function8, $Function9, $Function10_, $Function7_, $Function15_, $Function16_, $Function9_ } from "@package/com/mojang/datafixers/util";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $SimpleMapCodec, $PrimitiveCodec, $RecordCodecBuilder, $UnboundedMapCodec } from "@package/com/mojang/serialization/codecs";
import { $Map, $List, $Map_, $List_ } from "@package/java/util";
import { $Enum, $Number, $Throwable, $Iterable_, $Record } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";
import { $Products$P10, $Products$P11, $Products$P12, $Products$P13, $Products$P14, $Products$P15, $Products$P16, $Products$P1, $Products$P5, $Products$P4, $Products$P3, $Products$P2, $Products$P9, $Products$P8, $Products$P7, $Products$P6 } from "@package/com/mojang/datafixers";
import { $Applicative$Mu, $K1, $Applicative, $App } from "@package/com/mojang/datafixers/kinds";
export * as codecs from "@package/com/mojang/serialization/codecs";

declare module "@package/com/mojang/serialization" {
    export class $Encoder<A> {
        static empty<A>(): $MapEncoder<A>;
        static error<A>(arg0: string): $Encoder<A>;
    }
    export interface $Encoder<A> {
        encode<T>(arg0: A, arg1: $DynamicOps<T>, arg2: T): $DataResult<T>;
        withLifecycle(arg0: $Lifecycle): $Encoder<A>;
        comap<B>(arg0: $Function_<B, A>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<A>>): $Encoder<B>;
        fieldOf(arg0: string): $MapEncoder<A>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: A): $DataResult<T>;
    }
    /**
     * Values that may be interpreted as {@link $Encoder}.
     */
    export type $Encoder_<A> = ((arg0: A, arg1: $DynamicOps<any>, arg2: any) => $DataResult<any>);
    export class $DynamicLike<T> {
        asByteBuffer(): $ByteBuffer;
        asLongStream(): $LongStream;
        get(arg0: string): $OptionalDynamic<T>;
        decode<A>(arg0: $Decoder_<A>): $DataResult<$Pair<A, T>>;
        emptyList(): $Dynamic<T>;
        read<A>(arg0: $Decoder_<A>): $DataResult<A>;
        asList<U>(arg0: $Function_<$Dynamic<T>, U>): $List<U>;
        emptyMap(): $Dynamic<T>;
        createMap(arg0: $Map_<$Dynamic<never>, $Dynamic<never>>): $Dynamic<T>;
        createLong(arg0: number): $Dynamic<T>;
        createString(arg0: string): $Dynamic<T>;
        getElement(arg0: string): $DataResult<T>;
        getElement(arg0: string, arg1: T): T;
        asDouble(arg0: number): number;
        asMap<K, V>(arg0: $Function_<$Dynamic<T>, K>, arg1: $Function_<$Dynamic<T>, V>): $Map<K, V>;
        createFloat(arg0: number): $Dynamic<T>;
        asString(arg0: string): string;
        asString(): $DataResult<string>;
        createList(arg0: $Stream<$Dynamic<never>>): $Dynamic<T>;
        createDouble(arg0: number): $Dynamic<T>;
        getOps(): $DynamicOps<T>;
        createByte(arg0: number): $Dynamic<T>;
        createShort(arg0: number): $Dynamic<T>;
        createBoolean(arg0: boolean): $Dynamic<T>;
        createByteList(arg0: $ByteBuffer): $Dynamic<never>;
        createIntList(arg0: $IntStream): $Dynamic<never>;
        createInt(arg0: number): $Dynamic<T>;
        createLongList(arg0: $LongStream): $Dynamic<never>;
        asIntStream(): $IntStream;
        createNumeric(arg0: $Number): $Dynamic<T>;
        getGeneric(arg0: T): $DataResult<T>;
        asListOpt<U>(arg0: $Function_<$Dynamic<T>, U>): $DataResult<$List<U>>;
        readList<E>(arg0: $Decoder_<E>): $DataResult<$List<E>>;
        readList<E>(arg0: $Function_<$Dynamic<never>, $DataResult<E>>): $DataResult<$List<E>>;
        readMap<K, V>(arg0: $Decoder_<K>, arg1: $Decoder_<V>): $DataResult<$List<$Pair<K, V>>>;
        readMap<R>(arg0: $DataResult<R>, arg1: $Function3_<R, $Dynamic<T>, $Dynamic<T>, $DataResult<R>>): $DataResult<R>;
        readMap<K, V>(arg0: $Decoder_<K>, arg1: $Function_<K, $Decoder<V>>): $DataResult<$List<$Pair<K, V>>>;
        asLong(arg0: number): number;
        asFloat(arg0: number): number;
        asByte(arg0: number): number;
        asShort(arg0: number): number;
        asStream(): $Stream<$Dynamic<T>>;
        getElementGeneric(arg0: T, arg1: T): T;
        getElementGeneric(arg0: T): $DataResult<T>;
        asNumber(): $DataResult<$Number>;
        asNumber(arg0: $Number): $Number;
        asBoolean(arg0: boolean): boolean;
        asBoolean(): $DataResult<boolean>;
        asStreamOpt(): $DataResult<$Stream<$Dynamic<T>>>;
        asMapOpt(): $DataResult<$Stream<$Pair<$Dynamic<T>, $Dynamic<T>>>>;
        asMapOpt<K, V>(arg0: $Function_<$Dynamic<T>, K>, arg1: $Function_<$Dynamic<T>, V>): $DataResult<$Map<K, V>>;
        asByteBufferOpt(): $DataResult<$ByteBuffer>;
        asIntStreamOpt(): $DataResult<$IntStream>;
        asLongStreamOpt(): $DataResult<$LongStream>;
        asInt(arg0: number): number;
        constructor(arg0: $DynamicOps<T>);
        get ops(): $DynamicOps<T>;
    }
    export class $Compressable {
    }
    export interface $Compressable extends $Keyable {
        compressor<T>(arg0: $DynamicOps<T>): $KeyCompressor<T>;
    }
    export class $Decoder$Terminal<A> {
    }
    export interface $Decoder$Terminal<A> {
        decode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<A>;
        decoder(): $Decoder<A>;
    }
    /**
     * Values that may be interpreted as {@link $Decoder$Terminal}.
     */
    export type $Decoder$Terminal_<A> = ((arg0: $DynamicOps<any>, arg1: any) => $DataResult<A>);
    export class $MapDecoder<A> {
    }
    export interface $MapDecoder<A> extends $Keyable {
        decode<T>(arg0: $DynamicOps<T>, arg1: $MapLike<T>): $DataResult<A>;
        map<B>(arg0: $Function_<A, B>): $MapDecoder<B>;
        flatMap<B>(arg0: $Function_<A, $DataResult<B>>): $MapDecoder<B>;
        decoder(): $Decoder<A>;
        ap<E>(arg0: $MapDecoder<$Function_<A, E>>): $MapDecoder<E>;
        withLifecycle(arg0: $Lifecycle): $MapDecoder<A>;
        compressedDecode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<A>;
        compressor<T>(arg0: $DynamicOps<T>): $KeyCompressor<T>;
    }
    export class $RecordBuilder$AbstractBuilder<T, R> implements $RecordBuilder<T> {
        build(arg0: T): $DataResult<T>;
        withErrorsFrom(arg0: $DataResult<never>): $RecordBuilder<T>;
        setLifecycle(arg0: $Lifecycle): $RecordBuilder<T>;
        mapError(arg0: $UnaryOperator_<string>): $RecordBuilder<T>;
        ops(): $DynamicOps<T>;
        add(arg0: string, arg1: $DataResult<T>): $RecordBuilder<T>;
        add(arg0: string, arg1: T): $RecordBuilder<T>;
        add<E>(arg0: string, arg1: E, arg2: $Encoder_<E>): $RecordBuilder<T>;
        build(arg0: $DataResult<T>): $DataResult<T>;
        set lifecycle(value: $Lifecycle);
    }
    export class $Dynamic<T> extends $DynamicLike<T> {
        remove(arg0: string): $Dynamic<T>;
        cast<U>(arg0: $DynamicOps<U>): U;
        update(arg0: string, arg1: $Function_<$Dynamic<never>, $Dynamic<never>>): $Dynamic<T>;
        convert<R>(arg0: $DynamicOps<R>): $Dynamic<R>;
        static convert<S, T>(arg0: $DynamicOps<S>, arg1: $DynamicOps<T>, arg2: S): T;
        getValue(): T;
        map(arg0: $Function_<T, T>): $Dynamic<T>;
        static copyField(arg0: $Dynamic<never>, arg1: string, arg2: $Dynamic<never>, arg3: string): $Dynamic<never>;
        merge(arg0: $Dynamic<never>): $OptionalDynamic<T>;
        merge(arg0: $Dynamic<never>, arg1: $Dynamic<never>): $OptionalDynamic<T>;
        set(arg0: string, arg1: $Dynamic<never>): $Dynamic<T>;
        getMapValues(): $DataResult<$Map<$Dynamic<T>, $Dynamic<T>>>;
        updateGeneric(arg0: T, arg1: $Function_<T, T>): $Dynamic<T>;
        castTyped<U>(arg0: $DynamicOps<U>): $Dynamic<U>;
        renameAndFixField(arg0: string, arg1: string, arg2: $UnaryOperator_<$Dynamic<never>>): $Dynamic<T>;
        setFieldIfPresent(arg0: string, arg1: ($Dynamic<never>) | undefined): $Dynamic<T>;
        static copyAndFixField<T>(arg0: $Dynamic<T>, arg1: string, arg2: $Dynamic<never>, arg3: string, arg4: $UnaryOperator_<$Dynamic<T>>): $Dynamic<never>;
        updateMapValues(arg0: $Function_<$Pair<$Dynamic<never>, $Dynamic<never>>, $Pair<$Dynamic<never>, $Dynamic<never>>>): $Dynamic<T>;
        renameField(arg0: string, arg1: string): $Dynamic<T>;
        replaceField(arg0: string, arg1: string, arg2: ($Dynamic<never>) | undefined): $Dynamic<T>;
        into<V>(arg0: $Function_<$Dynamic<T>, V>): V;
        constructor(arg0: $DynamicOps<T>);
        constructor(arg0: $DynamicOps<T>, arg1: T | null);
        get value(): T;
        get mapValues(): $DataResult<$Map<$Dynamic<T>, $Dynamic<T>>>;
    }
    export class $Decoder<A> {
        static unit<A>(arg0: A): $MapDecoder<A>;
        static unit<A>(arg0: $Supplier_<A>): $MapDecoder<A>;
        static error<A>(arg0: string): $Decoder<A>;
        static ofTerminal<A>(arg0: $Decoder$Terminal_<A>): $Decoder<A>;
        static ofBoxed<A>(arg0: $Decoder$Boxed_<A>): $Decoder<A>;
        static ofSimple<A>(arg0: $Decoder$Simple_<A>): $Decoder<A>;
    }
    export interface $Decoder<A> {
        decode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Pair<A, T>>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<A, T>>;
        map<B>(arg0: $Function_<A, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<A, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<A>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<A>;
        boxed(): $Decoder$Boxed<A>;
        terminal(): $Decoder$Terminal<A>;
        withLifecycle(arg0: $Lifecycle): $Decoder<A>;
        fieldOf(arg0: string): $MapDecoder<A>;
        promotePartial(arg0: $Consumer_<string>): $Decoder<A>;
        simple(): $Decoder$Simple<A>;
    }
    /**
     * Values that may be interpreted as {@link $Decoder}.
     */
    export type $Decoder_<A> = ((arg0: $DynamicOps<any>, arg1: any) => $DataResult<$Pair<A, any>>);
    export interface $MapCodec<A> extends RegistryMarked<RegistryTypes.LithostitchedLoadPredicateTypeTag, RegistryTypes.LithostitchedLoadPredicateType> {}
    export class $MapCodec$ResultFunction<A> {
    }
    export interface $MapCodec$ResultFunction<A> {
        apply<T>(arg0: $DynamicOps<T>, arg1: $MapLike<T>, arg2: $DataResult<A>): $DataResult<A>;
        coApply<T>(arg0: $DynamicOps<T>, arg1: A, arg2: $RecordBuilder<T>): $RecordBuilder<T>;
    }
    export class $Lifecycle {
        add(arg0: $Lifecycle): $Lifecycle;
        static deprecated(arg0: number): $Lifecycle;
        static stable(): $Lifecycle;
        static experimental(): $Lifecycle;
    }
    export class $MapEncoder<A> {
        static makeCompressedBuilder<T>(arg0: $DynamicOps<T>, arg1: $KeyCompressor<T>): $RecordBuilder<T>;
    }
    export interface $MapEncoder<A> extends $Keyable {
        encode<T>(arg0: A, arg1: $DynamicOps<T>, arg2: $RecordBuilder<T>): $RecordBuilder<T>;
        encoder(): $Encoder<A>;
        withLifecycle(arg0: $Lifecycle): $MapEncoder<A>;
        comap<B>(arg0: $Function_<B, A>): $MapEncoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<A>>): $MapEncoder<B>;
        compressedBuilder<T>(arg0: $DynamicOps<T>): $RecordBuilder<T>;
        compressor<T>(arg0: $DynamicOps<T>): $KeyCompressor<T>;
    }
    export class $Decoder$Boxed<A> {
    }
    export interface $Decoder$Boxed<A> {
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<A, T>>;
        decoder(): $Decoder<A>;
    }
    /**
     * Values that may be interpreted as {@link $Decoder$Boxed}.
     */
    export type $Decoder$Boxed_<A> = ((arg0: $Dynamic<any>) => $DataResult<$Pair<A, any>>);
    export class $DataResult$Instance$Mu implements $Applicative$Mu {
        constructor();
    }
    export class $ListBuilder<T> {
    }
    export interface $ListBuilder<T> {
        add(arg0: $DataResult<T>): $ListBuilder<T>;
        add(arg0: T): $ListBuilder<T>;
        add<E>(arg0: E, arg1: $Encoder_<E>): $ListBuilder<T>;
        addAll<E>(arg0: $Iterable_<E>, arg1: $Encoder_<E>): $ListBuilder<T>;
        build(arg0: T): $DataResult<T>;
        build(arg0: $DataResult<T>): $DataResult<T>;
        withErrorsFrom(arg0: $DataResult<never>): $ListBuilder<T>;
        mapError(arg0: $UnaryOperator_<string>): $ListBuilder<T>;
        ops(): $DynamicOps<T>;
    }
    export class $RecordBuilder<T> {
    }
    export interface $RecordBuilder<T> {
        add(arg0: string, arg1: $DataResult<T>): $RecordBuilder<T>;
        add(arg0: string, arg1: T): $RecordBuilder<T>;
        add(arg0: $DataResult<T>, arg1: $DataResult<T>): $RecordBuilder<T>;
        add<E>(arg0: string, arg1: E, arg2: $Encoder_<E>): $RecordBuilder<T>;
        add(arg0: T, arg1: T): $RecordBuilder<T>;
        add(arg0: T, arg1: $DataResult<T>): $RecordBuilder<T>;
        build(arg0: T): $DataResult<T>;
        build(arg0: $DataResult<T>): $DataResult<T>;
        withErrorsFrom(arg0: $DataResult<never>): $RecordBuilder<T>;
        setLifecycle(arg0: $Lifecycle): $RecordBuilder<T>;
        mapError(arg0: $UnaryOperator_<string>): $RecordBuilder<T>;
        ops(): $DynamicOps<T>;
        set lifecycle(value: $Lifecycle);
    }
    export class $DataResult<R> {
        static instance(): $DataResult$Instance;
        static error<R>(arg0: $Supplier_<string>, arg1: $Lifecycle): $DataResult<R>;
        static error<R>(arg0: $Supplier_<string>, arg1: R, arg2: $Lifecycle): $DataResult<R>;
        static error<R>(arg0: $Supplier_<string>, arg1: R): $DataResult<R>;
        static error<R>(arg0: $Supplier_<string>): $DataResult<R>;
        static unbox<R>(arg0: $App<$DataResult$Mu, R>): $DataResult<R>;
        static success<R>(arg0: R): $DataResult<R>;
        static success<R>(arg0: R, arg1: $Lifecycle): $DataResult<R>;
        static partialGet<K, V>(arg0: $Function_<K, V>, arg1: $Supplier_<string>): $Function<K, $DataResult<V>>;
        static appendMessages(arg0: string, arg1: string): string;
    }
    export interface $DataResult<R> extends $App<$DataResult$Mu, R> {
        map<T>(arg0: $Function_<R, T>): $DataResult<T>;
        result(): (R) | undefined;
        flatMap<R2>(arg0: $Function_<R, $DataResult<R2>>): $DataResult<R2>;
        error(): ($DataResult$Error<R>) | undefined;
        isError(): boolean;
        ap<R2>(arg0: $DataResult<$Function_<R, R2>>): $DataResult<R2>;
        promotePartial(arg0: $Consumer_<string>): $DataResult<R>;
        lifecycle(): $Lifecycle;
        setPartial(arg0: $Supplier_<R>): $DataResult<R>;
        setPartial(arg0: R): $DataResult<R>;
        setLifecycle(arg0: $Lifecycle): $DataResult<R>;
        resultOrPartial(): (R) | undefined;
        resultOrPartial(arg0: $Consumer_<string>): (R) | undefined;
        isSuccess(): boolean;
        apply2<R2, S>(arg0: $BiFunction_<R, R2, S>, arg1: $DataResult<R2>): $DataResult<S>;
        mapError(arg0: $UnaryOperator_<string>): $DataResult<R>;
        getOrThrow<E extends $Throwable>(arg0: $Function_<string, E>): R;
        getOrThrow(): R;
        getPartialOrThrow<E extends $Throwable>(arg0: $Function_<string, E>): R;
        getPartialOrThrow(): R;
        apply3<R2, R3, S>(arg0: $Function3_<R, R2, R3, S>, arg1: $DataResult<R2>, arg2: $DataResult<R3>): $DataResult<S>;
        mapOrElse<T>(arg0: $Function_<R, T>, arg1: $Function_<$DataResult$Error<R>, T>): T;
        hasResultOrPartial(): boolean;
        ifSuccess(arg0: $Consumer_<R>): $DataResult<R>;
        ifError(arg0: $Consumer_<$DataResult$Error<R>>): $DataResult<R>;
        apply2stable<R2, S>(arg0: $BiFunction_<R, R2, S>, arg1: $DataResult<R2>): $DataResult<S>;
        addLifecycle(arg0: $Lifecycle): $DataResult<R>;
    }
    export class $MapCodec<A> extends $CompressorHolder implements $MapDecoder<A>, $MapEncoder<A> {
        static of<A>(arg0: $MapEncoder<A>, arg1: $MapDecoder<A>, arg2: $Supplier_<string>): $MapCodec<A>;
        static of<A>(arg0: $MapEncoder<A>, arg1: $MapDecoder<A>): $MapCodec<A>;
        validate(arg0: $Function_<A, $DataResult<A>>): $MapCodec<A>;
        orElse(arg0: $Consumer_<string>, arg1: A): $MapCodec<A>;
        orElse(arg0: A): $MapCodec<A>;
        orElse(arg0: $UnaryOperator_<string>, arg1: A): $MapCodec<A>;
        static unit<A>(arg0: $Supplier_<A>): $MapCodec<A>;
        static unit<A>(arg0: A): $MapCodec<A>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<A>): $MapCodec<A>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<A>): $MapCodec<A>;
        orElseGet(arg0: $Supplier_<A>): $MapCodec<A>;
        static recursive<A>(arg0: string, arg1: $Function_<$Codec<A>, $MapCodec<A>>): $MapCodec<A>;
        dependent<E>(arg0: $MapCodec_<E>, arg1: $Function_<A, $Pair<E, $MapCodec<E>>>, arg2: $BiFunction_<A, E, A>): $MapCodec<A>;
        deprecated(arg0: number): $MapCodec<A>;
        stable(): $MapCodec<A>;
        codec(): $Codec<A>;
        flatXmap<S>(arg0: $Function_<A, $DataResult<S>>, arg1: $Function_<S, $DataResult<A>>): $MapCodec<S>;
        fieldOf(arg0: string): $MapCodec<A>;
        mapResult(arg0: $MapCodec$ResultFunction<A>): $MapCodec<A>;
        xmap<S>(arg0: $Function_<A, S>, arg1: $Function_<S, A>): $MapCodec<S>;
        static assumeMapUnsafe<A>(arg0: $Codec_<A>): $MapCodec<A>;
        forGetter<O>(arg0: $Function_<O, A>): $RecordCodecBuilder<O, A>;
        setPartial(arg0: $Supplier_<A>): $MapCodec<A>;
        map<B>(arg0: $Function_<A, B>): $MapDecoder<B>;
        flatMap<B>(arg0: $Function_<A, $DataResult<B>>): $MapDecoder<B>;
        decoder(): $Decoder<A>;
        ap<E>(arg0: $MapDecoder<$Function_<A, E>>): $MapDecoder<E>;
        compressedDecode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<A>;
        encoder(): $Encoder<A>;
        comap<B>(arg0: $Function_<B, A>): $MapEncoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<A>>): $MapEncoder<B>;
        compressedBuilder<T>(arg0: $DynamicOps<T>): $RecordBuilder<T>;
        withLifecycle(arg0: $Lifecycle): $MapDecoder<A>;
        constructor();
        set partial(value: $Supplier_<A>);
    }
    /**
     * Values that may be interpreted as {@link $MapCodec}.
     */
    export type $MapCodec_<A> = RegistryTypes.NeoforgeBiomeModifierSerializers | RegistryTypes.EnchantmentValueEffectType | RegistryTypes.LithostitchedProcessorConditionType | RegistryTypes.LithostitchedBiomeInjectorType | RegistryTypes.CreatePotatoProjectileRenderMode | RegistryTypes.EnchantmentLocationBasedEffectType | RegistryTypes.LithostitchedFastNoiseConfigType | RegistryTypes.WorldgenDensityFunctionType | RegistryTypes.EnchantmentEntityEffectType | RegistryTypes.WorldgenChunkGenerator | RegistryTypes.WorldgenMaterialRule | RegistryTypes.NeoforgeGlobalLootModifierSerializers | RegistryTypes.EnchantmentLevelBasedValueType | RegistryTypes.WorldgenPoolAliasBinding | RegistryTypes.WorldgenMaterialCondition | RegistryTypes.EntitySubPredicateType | RegistryTypes.CreatePotatoProjectileBlockHitAction | RegistryTypes.CreatePotatoProjectileEntityHitAction | RegistryTypes.LithostitchedPlacementConditionType | RegistryTypes.EnchantmentProviderType | RegistryTypes.BlockType | RegistryTypes.LithostitchedModifierType | RegistryTypes.LithostitchedBandlandsBandType | RegistryTypes.MoonlightVillagerTrades | RegistryTypes.NeoforgeConditionCodecs | RegistryTypes.WorldgenBiomeSource | RegistryTypes.NeoforgeStructureModifierSerializers | RegistryTypes.LithostitchedLoadPredicateType;
    export interface $Codec<A> extends RegistryMarked<RegistryTypes.CorgilibBlendingFunctionTag, RegistryTypes.CorgilibBlendingFunction> {}
    export class $Keyable {
        static forStrings(arg0: $Supplier_<$Stream<string>>): $Keyable;
    }
    export interface $Keyable {
        keys<T>(arg0: $DynamicOps<T>): $Stream<T>;
    }
    /**
     * Values that may be interpreted as {@link $Keyable}.
     */
    export type $Keyable_ = ((arg0: $DynamicOps<any>) => $Stream<any>);
    export class $DataResult$Mu implements $K1 {
        constructor();
    }
    export class $DataResult$Instance extends $Enum<$DataResult$Instance> implements $Applicative<$DataResult$Mu, $DataResult$Instance$Mu> {
        point<A>(arg0: A): $App<$DataResult$Mu, A>;
        static values(): $DataResult$Instance[];
        static valueOf(arg0: string): $DataResult$Instance;
        map<T, R>(arg0: $Function_<T, R>, arg1: $App<$DataResult$Mu, T>): $App<$DataResult$Mu, R>;
        ap<A, R>(arg0: $App<$DataResult$Mu, $Function_<A, R>>, arg1: $App<$DataResult$Mu, A>): $App<$DataResult$Mu, R>;
        ap2<A, B, R>(arg0: $App<$DataResult$Mu, $BiFunction_<A, B, R>>, arg1: $App<$DataResult$Mu, A>, arg2: $App<$DataResult$Mu, B>): $App<$DataResult$Mu, R>;
        lift1<A, R>(arg0: $App<$DataResult$Mu, $Function_<A, R>>): $Function<$App<$DataResult$Mu, A>, $App<$DataResult$Mu, R>>;
        ap3<T1, T2, T3, R>(arg0: $App<$DataResult$Mu, $Function3_<T1, T2, T3, R>>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>): $App<$DataResult$Mu, R>;
        ap<A, R>(arg0: $Function_<A, R>, arg1: $App<$DataResult$Mu, A>): $App<$DataResult$Mu, R>;
        apply2<A, B, R>(arg0: $BiFunction_<A, B, R>, arg1: $App<$DataResult$Mu, A>, arg2: $App<$DataResult$Mu, B>): $App<$DataResult$Mu, R>;
        apply3<T1, T2, T3, R>(arg0: $Function3_<T1, T2, T3, R>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>): $App<$DataResult$Mu, R>;
        ap8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App<$DataResult$Mu, $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>, arg6: $App<$DataResult$Mu, T6>, arg7: $App<$DataResult$Mu, T7>, arg8: $App<$DataResult$Mu, T8>): $App<$DataResult$Mu, R>;
        ap9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App<$DataResult$Mu, $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>, arg6: $App<$DataResult$Mu, T6>, arg7: $App<$DataResult$Mu, T7>, arg8: $App<$DataResult$Mu, T8>, arg9: $App<$DataResult$Mu, T9>): $App<$DataResult$Mu, R>;
        lift2<A, B, R>(arg0: $App<$DataResult$Mu, $BiFunction_<A, B, R>>): $BiFunction<$App<$DataResult$Mu, A>, $App<$DataResult$Mu, B>, $App<$DataResult$Mu, R>>;
        lift3<T1, T2, T3, R>(arg0: $App<$DataResult$Mu, $Function3_<T1, T2, T3, R>>): $Function3<$App<$DataResult$Mu, T1>, $App<$DataResult$Mu, T2>, $App<$DataResult$Mu, T3>, $App<$DataResult$Mu, R>>;
        lift4<T1, T2, T3, T4, R>(arg0: $App<$DataResult$Mu, $Function4_<T1, T2, T3, T4, R>>): $Function4<$App<$DataResult$Mu, T1>, $App<$DataResult$Mu, T2>, $App<$DataResult$Mu, T3>, $App<$DataResult$Mu, T4>, $App<$DataResult$Mu, R>>;
        lift5<T1, T2, T3, T4, T5, R>(arg0: $App<$DataResult$Mu, $Function5_<T1, T2, T3, T4, T5, R>>): $Function5<$App<$DataResult$Mu, T1>, $App<$DataResult$Mu, T2>, $App<$DataResult$Mu, T3>, $App<$DataResult$Mu, T4>, $App<$DataResult$Mu, T5>, $App<$DataResult$Mu, R>>;
        ap10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: $App<$DataResult$Mu, $Function10_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>, arg6: $App<$DataResult$Mu, T6>, arg7: $App<$DataResult$Mu, T7>, arg8: $App<$DataResult$Mu, T8>, arg9: $App<$DataResult$Mu, T9>, arg10: $App<$DataResult$Mu, T10>): $App<$DataResult$Mu, R>;
        ap11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: $App<$DataResult$Mu, $Function11_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>, arg6: $App<$DataResult$Mu, T6>, arg7: $App<$DataResult$Mu, T7>, arg8: $App<$DataResult$Mu, T8>, arg9: $App<$DataResult$Mu, T9>, arg10: $App<$DataResult$Mu, T10>, arg11: $App<$DataResult$Mu, T11>): $App<$DataResult$Mu, R>;
        ap12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: $App<$DataResult$Mu, $Function12_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>, arg6: $App<$DataResult$Mu, T6>, arg7: $App<$DataResult$Mu, T7>, arg8: $App<$DataResult$Mu, T8>, arg9: $App<$DataResult$Mu, T9>, arg10: $App<$DataResult$Mu, T10>, arg11: $App<$DataResult$Mu, T11>, arg12: $App<$DataResult$Mu, T12>): $App<$DataResult$Mu, R>;
        ap4<T1, T2, T3, T4, R>(arg0: $App<$DataResult$Mu, $Function4_<T1, T2, T3, T4, R>>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>): $App<$DataResult$Mu, R>;
        ap5<T1, T2, T3, T4, T5, R>(arg0: $App<$DataResult$Mu, $Function5_<T1, T2, T3, T4, T5, R>>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>): $App<$DataResult$Mu, R>;
        ap6<T1, T2, T3, T4, T5, T6, R>(arg0: $App<$DataResult$Mu, $Function6_<T1, T2, T3, T4, T5, T6, R>>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>, arg6: $App<$DataResult$Mu, T6>): $App<$DataResult$Mu, R>;
        ap7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App<$DataResult$Mu, $Function7_<T1, T2, T3, T4, T5, T6, T7, R>>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>, arg6: $App<$DataResult$Mu, T6>, arg7: $App<$DataResult$Mu, T7>): $App<$DataResult$Mu, R>;
        lift6<T1, T2, T3, T4, T5, T6, R>(arg0: $App<$DataResult$Mu, $Function6_<T1, T2, T3, T4, T5, T6, R>>): $Function6<$App<$DataResult$Mu, T1>, $App<$DataResult$Mu, T2>, $App<$DataResult$Mu, T3>, $App<$DataResult$Mu, T4>, $App<$DataResult$Mu, T5>, $App<$DataResult$Mu, T6>, $App<$DataResult$Mu, R>>;
        lift7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App<$DataResult$Mu, $Function7_<T1, T2, T3, T4, T5, T6, T7, R>>): $Function7<$App<$DataResult$Mu, T1>, $App<$DataResult$Mu, T2>, $App<$DataResult$Mu, T3>, $App<$DataResult$Mu, T4>, $App<$DataResult$Mu, T5>, $App<$DataResult$Mu, T6>, $App<$DataResult$Mu, T7>, $App<$DataResult$Mu, R>>;
        lift8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App<$DataResult$Mu, $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>>): $Function8<$App<$DataResult$Mu, T1>, $App<$DataResult$Mu, T2>, $App<$DataResult$Mu, T3>, $App<$DataResult$Mu, T4>, $App<$DataResult$Mu, T5>, $App<$DataResult$Mu, T6>, $App<$DataResult$Mu, T7>, $App<$DataResult$Mu, T8>, $App<$DataResult$Mu, R>>;
        lift9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App<$DataResult$Mu, $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): $Function9<$App<$DataResult$Mu, T1>, $App<$DataResult$Mu, T2>, $App<$DataResult$Mu, T3>, $App<$DataResult$Mu, T4>, $App<$DataResult$Mu, T5>, $App<$DataResult$Mu, T6>, $App<$DataResult$Mu, T7>, $App<$DataResult$Mu, T8>, $App<$DataResult$Mu, T9>, $App<$DataResult$Mu, R>>;
        ap13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: $App<$DataResult$Mu, $Function13_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>, arg6: $App<$DataResult$Mu, T6>, arg7: $App<$DataResult$Mu, T7>, arg8: $App<$DataResult$Mu, T8>, arg9: $App<$DataResult$Mu, T9>, arg10: $App<$DataResult$Mu, T10>, arg11: $App<$DataResult$Mu, T11>, arg12: $App<$DataResult$Mu, T12>, arg13: $App<$DataResult$Mu, T13>): $App<$DataResult$Mu, R>;
        ap14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: $App<$DataResult$Mu, $Function14_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>, arg6: $App<$DataResult$Mu, T6>, arg7: $App<$DataResult$Mu, T7>, arg8: $App<$DataResult$Mu, T8>, arg9: $App<$DataResult$Mu, T9>, arg10: $App<$DataResult$Mu, T10>, arg11: $App<$DataResult$Mu, T11>, arg12: $App<$DataResult$Mu, T12>, arg13: $App<$DataResult$Mu, T13>, arg14: $App<$DataResult$Mu, T14>): $App<$DataResult$Mu, R>;
        ap15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: $App<$DataResult$Mu, $Function15_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>, arg6: $App<$DataResult$Mu, T6>, arg7: $App<$DataResult$Mu, T7>, arg8: $App<$DataResult$Mu, T8>, arg9: $App<$DataResult$Mu, T9>, arg10: $App<$DataResult$Mu, T10>, arg11: $App<$DataResult$Mu, T11>, arg12: $App<$DataResult$Mu, T12>, arg13: $App<$DataResult$Mu, T13>, arg14: $App<$DataResult$Mu, T14>, arg15: $App<$DataResult$Mu, T15>): $App<$DataResult$Mu, R>;
        ap16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: $App<$DataResult$Mu, $Function16_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>, arg6: $App<$DataResult$Mu, T6>, arg7: $App<$DataResult$Mu, T7>, arg8: $App<$DataResult$Mu, T8>, arg9: $App<$DataResult$Mu, T9>, arg10: $App<$DataResult$Mu, T10>, arg11: $App<$DataResult$Mu, T11>, arg12: $App<$DataResult$Mu, T12>, arg13: $App<$DataResult$Mu, T13>, arg14: $App<$DataResult$Mu, T14>, arg15: $App<$DataResult$Mu, T15>, arg16: $App<$DataResult$Mu, T16>): $App<$DataResult$Mu, R>;
        apply4<T1, T2, T3, T4, R>(arg0: $Function4_<T1, T2, T3, T4, R>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>): $App<$DataResult$Mu, R>;
        apply5<T1, T2, T3, T4, T5, R>(arg0: $Function5_<T1, T2, T3, T4, T5, R>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>): $App<$DataResult$Mu, R>;
        apply6<T1, T2, T3, T4, T5, T6, R>(arg0: $Function6_<T1, T2, T3, T4, T5, T6, R>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>, arg6: $App<$DataResult$Mu, T6>): $App<$DataResult$Mu, R>;
        apply7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $Function7_<T1, T2, T3, T4, T5, T6, T7, R>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>, arg6: $App<$DataResult$Mu, T6>, arg7: $App<$DataResult$Mu, T7>): $App<$DataResult$Mu, R>;
        apply8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>, arg6: $App<$DataResult$Mu, T6>, arg7: $App<$DataResult$Mu, T7>, arg8: $App<$DataResult$Mu, T8>): $App<$DataResult$Mu, R>;
        apply9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>, arg1: $App<$DataResult$Mu, T1>, arg2: $App<$DataResult$Mu, T2>, arg3: $App<$DataResult$Mu, T3>, arg4: $App<$DataResult$Mu, T4>, arg5: $App<$DataResult$Mu, T5>, arg6: $App<$DataResult$Mu, T6>, arg7: $App<$DataResult$Mu, T7>, arg8: $App<$DataResult$Mu, T8>, arg9: $App<$DataResult$Mu, T9>): $App<$DataResult$Mu, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App<$DataResult$Mu, T1>, arg1: $App<$DataResult$Mu, T2>, arg2: $App<$DataResult$Mu, T3>, arg3: $App<$DataResult$Mu, T4>, arg4: $App<$DataResult$Mu, T5>, arg5: $App<$DataResult$Mu, T6>, arg6: $App<$DataResult$Mu, T7>, arg7: $App<$DataResult$Mu, T8>, arg8: $App<$DataResult$Mu, T9>, arg9: $App<$DataResult$Mu, T10>, arg10: $App<$DataResult$Mu, T11>): $Products$P11<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App<$DataResult$Mu, T1>, arg1: $App<$DataResult$Mu, T2>, arg2: $App<$DataResult$Mu, T3>, arg3: $App<$DataResult$Mu, T4>, arg4: $App<$DataResult$Mu, T5>, arg5: $App<$DataResult$Mu, T6>, arg6: $App<$DataResult$Mu, T7>, arg7: $App<$DataResult$Mu, T8>, arg8: $App<$DataResult$Mu, T9>, arg9: $App<$DataResult$Mu, T10>): $Products$P10<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App<$DataResult$Mu, T1>, arg1: $App<$DataResult$Mu, T2>, arg2: $App<$DataResult$Mu, T3>, arg3: $App<$DataResult$Mu, T4>, arg4: $App<$DataResult$Mu, T5>, arg5: $App<$DataResult$Mu, T6>, arg6: $App<$DataResult$Mu, T7>, arg7: $App<$DataResult$Mu, T8>, arg8: $App<$DataResult$Mu, T9>): $Products$P9<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App<$DataResult$Mu, T1>, arg1: $App<$DataResult$Mu, T2>, arg2: $App<$DataResult$Mu, T3>, arg3: $App<$DataResult$Mu, T4>, arg4: $App<$DataResult$Mu, T5>, arg5: $App<$DataResult$Mu, T6>, arg6: $App<$DataResult$Mu, T7>, arg7: $App<$DataResult$Mu, T8>, arg8: $App<$DataResult$Mu, T9>, arg9: $App<$DataResult$Mu, T10>, arg10: $App<$DataResult$Mu, T11>, arg11: $App<$DataResult$Mu, T12>, arg12: $App<$DataResult$Mu, T13>, arg13: $App<$DataResult$Mu, T14>, arg14: $App<$DataResult$Mu, T15>, arg15: $App<$DataResult$Mu, T16>): $Products$P16<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App<$DataResult$Mu, T1>, arg1: $App<$DataResult$Mu, T2>, arg2: $App<$DataResult$Mu, T3>, arg3: $App<$DataResult$Mu, T4>, arg4: $App<$DataResult$Mu, T5>, arg5: $App<$DataResult$Mu, T6>, arg6: $App<$DataResult$Mu, T7>, arg7: $App<$DataResult$Mu, T8>, arg8: $App<$DataResult$Mu, T9>, arg9: $App<$DataResult$Mu, T10>, arg10: $App<$DataResult$Mu, T11>, arg11: $App<$DataResult$Mu, T12>, arg12: $App<$DataResult$Mu, T13>, arg13: $App<$DataResult$Mu, T14>, arg14: $App<$DataResult$Mu, T15>): $Products$P15<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App<$DataResult$Mu, T1>, arg1: $App<$DataResult$Mu, T2>, arg2: $App<$DataResult$Mu, T3>, arg3: $App<$DataResult$Mu, T4>, arg4: $App<$DataResult$Mu, T5>, arg5: $App<$DataResult$Mu, T6>, arg6: $App<$DataResult$Mu, T7>, arg7: $App<$DataResult$Mu, T8>, arg8: $App<$DataResult$Mu, T9>, arg9: $App<$DataResult$Mu, T10>, arg10: $App<$DataResult$Mu, T11>, arg11: $App<$DataResult$Mu, T12>, arg12: $App<$DataResult$Mu, T13>, arg13: $App<$DataResult$Mu, T14>): $Products$P14<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App<$DataResult$Mu, T1>, arg1: $App<$DataResult$Mu, T2>, arg2: $App<$DataResult$Mu, T3>, arg3: $App<$DataResult$Mu, T4>, arg4: $App<$DataResult$Mu, T5>, arg5: $App<$DataResult$Mu, T6>, arg6: $App<$DataResult$Mu, T7>, arg7: $App<$DataResult$Mu, T8>, arg8: $App<$DataResult$Mu, T9>, arg9: $App<$DataResult$Mu, T10>, arg10: $App<$DataResult$Mu, T11>, arg11: $App<$DataResult$Mu, T12>, arg12: $App<$DataResult$Mu, T13>): $Products$P13<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App<$DataResult$Mu, T1>, arg1: $App<$DataResult$Mu, T2>, arg2: $App<$DataResult$Mu, T3>, arg3: $App<$DataResult$Mu, T4>, arg4: $App<$DataResult$Mu, T5>, arg5: $App<$DataResult$Mu, T6>, arg6: $App<$DataResult$Mu, T7>, arg7: $App<$DataResult$Mu, T8>, arg8: $App<$DataResult$Mu, T9>, arg9: $App<$DataResult$Mu, T10>, arg10: $App<$DataResult$Mu, T11>, arg11: $App<$DataResult$Mu, T12>): $Products$P12<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
        group<T1, T2, T3>(arg0: $App<$DataResult$Mu, T1>, arg1: $App<$DataResult$Mu, T2>, arg2: $App<$DataResult$Mu, T3>): $Products$P3<$DataResult$Mu, T1, T2, T3>;
        group<T1, T2>(arg0: $App<$DataResult$Mu, T1>, arg1: $App<$DataResult$Mu, T2>): $Products$P2<$DataResult$Mu, T1, T2>;
        group<T1>(arg0: $App<$DataResult$Mu, T1>): $Products$P1<$DataResult$Mu, T1>;
        group<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App<$DataResult$Mu, T1>, arg1: $App<$DataResult$Mu, T2>, arg2: $App<$DataResult$Mu, T3>, arg3: $App<$DataResult$Mu, T4>, arg4: $App<$DataResult$Mu, T5>, arg5: $App<$DataResult$Mu, T6>, arg6: $App<$DataResult$Mu, T7>, arg7: $App<$DataResult$Mu, T8>): $Products$P8<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8>;
        group<T1, T2, T3, T4, T5, T6, T7>(arg0: $App<$DataResult$Mu, T1>, arg1: $App<$DataResult$Mu, T2>, arg2: $App<$DataResult$Mu, T3>, arg3: $App<$DataResult$Mu, T4>, arg4: $App<$DataResult$Mu, T5>, arg5: $App<$DataResult$Mu, T6>, arg6: $App<$DataResult$Mu, T7>): $Products$P7<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7>;
        group<T1, T2, T3, T4, T5, T6>(arg0: $App<$DataResult$Mu, T1>, arg1: $App<$DataResult$Mu, T2>, arg2: $App<$DataResult$Mu, T3>, arg3: $App<$DataResult$Mu, T4>, arg4: $App<$DataResult$Mu, T5>, arg5: $App<$DataResult$Mu, T6>): $Products$P6<$DataResult$Mu, T1, T2, T3, T4, T5, T6>;
        group<T1, T2, T3, T4, T5>(arg0: $App<$DataResult$Mu, T1>, arg1: $App<$DataResult$Mu, T2>, arg2: $App<$DataResult$Mu, T3>, arg3: $App<$DataResult$Mu, T4>, arg4: $App<$DataResult$Mu, T5>): $Products$P5<$DataResult$Mu, T1, T2, T3, T4, T5>;
        group<T1, T2, T3, T4>(arg0: $App<$DataResult$Mu, T1>, arg1: $App<$DataResult$Mu, T2>, arg2: $App<$DataResult$Mu, T3>, arg3: $App<$DataResult$Mu, T4>): $Products$P4<$DataResult$Mu, T1, T2, T3, T4>;
        static INSTANCE: $DataResult$Instance;
    }
    /**
     * Values that may be interpreted as {@link $DataResult$Instance}.
     */
    export type $DataResult$Instance_ = "instance";
    export class $CompressorHolder implements $Compressable {
        compressor<T>(arg0: $DynamicOps<T>): $KeyCompressor<T>;
        constructor();
    }
    export class $DataResult$Error<R> extends $Record implements $DataResult<R> {
        result(): (R) | undefined;
        message(): string;
        messageSupplier(): $Supplier<string>;
        error(): ($DataResult$Error<R>) | undefined;
        ap<R2>(arg0: $DataResult<$Function_<R, R2>>): $DataResult$Error<R2>;
        promotePartial(arg0: $Consumer_<string>): $DataResult<R>;
        lifecycle(): $Lifecycle;
        setLifecycle(arg0: $Lifecycle): $DataResult$Error<R>;
        resultOrPartial(arg0: $Consumer_<string>): (R) | undefined;
        resultOrPartial(): (R) | undefined;
        isSuccess(): boolean;
        mapError(arg0: $UnaryOperator_<string>): $DataResult$Error<R>;
        getOrThrow<E extends $Throwable>(arg0: $Function_<string, E>): R;
        getPartialOrThrow<E extends $Throwable>(arg0: $Function_<string, E>): R;
        mapOrElse<T>(arg0: $Function_<R, T>, arg1: $Function_<$DataResult$Error<R>, T>): T;
        hasResultOrPartial(): boolean;
        ifSuccess(arg0: $Consumer_<R>): $DataResult<R>;
        ifError(arg0: $Consumer_<$DataResult$Error<R>>): $DataResult<R>;
        partialValue(): (R) | undefined;
        isError(): boolean;
        apply2<R2, S>(arg0: $BiFunction_<R, R2, S>, arg1: $DataResult<R2>): $DataResult<S>;
        getOrThrow(): R;
        getPartialOrThrow(): R;
        apply3<R2, R3, S>(arg0: $Function3_<R, R2, R3, S>, arg1: $DataResult<R2>, arg2: $DataResult<R3>): $DataResult<S>;
        apply2stable<R2, S>(arg0: $BiFunction_<R, R2, S>, arg1: $DataResult<R2>): $DataResult<S>;
        addLifecycle(arg0: $Lifecycle): $DataResult<R>;
        map<T>(arg0: $Function_<R, T>): $DataResult<T>;
        flatMap<R2>(arg0: $Function_<R, $DataResult<R2>>): $DataResult<R2>;
        setPartial(arg0: $Supplier_<R>): $DataResult<R>;
        setPartial(arg0: $Supplier_<R>): $DataResult<R>;
        constructor(messageSupplier: $Supplier_<string>, partialValue: (R) | undefined, lifecycle: $Lifecycle);
    }
    /**
     * Values that may be interpreted as {@link $DataResult$Error}.
     */
    export type $DataResult$Error_<R> = { messageSupplier?: $Supplier_<string>, partialValue?: (R) | undefined, lifecycle?: $Lifecycle,  } | [messageSupplier?: $Supplier_<string>, partialValue?: (R) | undefined, lifecycle?: $Lifecycle, ];
    export class $Codec$ResultFunction<A> {
    }
    export interface $Codec$ResultFunction<A> {
        apply<T>(arg0: $DynamicOps<T>, arg1: T, arg2: $DataResult<$Pair<A, T>>): $DataResult<$Pair<A, T>>;
        coApply<T>(arg0: $DynamicOps<T>, arg1: A, arg2: $DataResult<T>): $DataResult<T>;
    }
    export class $KeyCompressor<T> {
        size(): number;
        compress(arg0: T): number;
        compress(arg0: string): number;
        decompress(arg0: number): T;
        constructor(arg0: $DynamicOps<T>, arg1: $Stream<T>);
    }
    export class $OptionalDynamic<T> extends $DynamicLike<T> {
        get(): $DataResult<$Dynamic<T>>;
        map<U>(arg0: $Function_<$Dynamic<T>, U>): $DataResult<U>;
        result(): ($Dynamic<T>) | undefined;
        flatMap<U>(arg0: $Function_<$Dynamic<T>, $DataResult<U>>): $DataResult<U>;
        into<V>(arg0: $Function_<$Dynamic<T>, V>): $DataResult<V>;
        orElseEmptyMap(): $Dynamic<T>;
        orElseEmptyList(): $Dynamic<T>;
        constructor(arg0: $DynamicOps<T>, arg1: $DataResult<$Dynamic<T>>);
    }
    export class $RecordBuilder$AbstractStringBuilder<T, R> extends $RecordBuilder$AbstractBuilder<T, R> {
    }
    export class $Decoder$Simple<A> {
    }
    export interface $Decoder$Simple<A> {
        decode<T>(arg0: $Dynamic<T>): $DataResult<A>;
        decoder(): $Decoder<A>;
    }
    /**
     * Values that may be interpreted as {@link $Decoder$Simple}.
     */
    export type $Decoder$Simple_<A> = ((arg0: $Dynamic<any>) => $DataResult<A>);
    export class $RecordBuilder$AbstractUniversalBuilder<T, R> extends $RecordBuilder$AbstractBuilder<T, R> {
    }
    export class $DynamicOps<T> {
    }
    export interface $DynamicOps<T> {
        getStringValue(arg0: T): $DataResult<string>;
        getStream(arg0: T): $DataResult<$Stream<T>>;
        remove(arg0: T, arg1: string): T;
        get(arg0: T, arg1: string): $DataResult<T>;
        update(arg0: T, arg1: string, arg2: $Function_<T, T>): T;
        empty(): T;
        set(arg0: T, arg1: string, arg2: T): T;
        emptyList(): T;
        getByteBuffer(arg0: T): $DataResult<$ByteBuffer>;
        emptyMap(): T;
        getMap(arg0: T): $DataResult<$MapLike<T>>;
        createMap(arg0: $Map_<T, T>): T;
        createMap(arg0: $Stream<$Pair<T, T>>): T;
        createLong(arg0: number): T;
        createString(arg0: string): T;
        getList(arg0: T): $DataResult<$Consumer<$Consumer<T>>>;
        createFloat(arg0: number): T;
        createList(arg0: $Stream<T>): T;
        createDouble(arg0: number): T;
        getBooleanValue(arg0: T): $DataResult<boolean>;
        mergeToPrimitive(arg0: T, arg1: T): $DataResult<T>;
        compressMaps(): boolean;
        mapBuilder(): $RecordBuilder<T>;
        getNumberValue(arg0: T, arg1: $Number): $Number;
        getNumberValue(arg0: T): $DataResult<$Number>;
        createByte(arg0: number): T;
        createShort(arg0: number): T;
        createBoolean(arg0: boolean): T;
        createByteList(arg0: $ByteBuffer): T;
        getIntStream(arg0: T): $DataResult<$IntStream>;
        createIntList(arg0: $IntStream): T;
        createInt(arg0: number): T;
        mergeToList(arg0: T, arg1: $List_<T>): $DataResult<T>;
        mergeToList(arg0: T, arg1: T): $DataResult<T>;
        mergeToMap(arg0: T, arg1: $Map_<T, T>): $DataResult<T>;
        mergeToMap(arg0: T, arg1: T, arg2: T): $DataResult<T>;
        mergeToMap(arg0: T, arg1: $MapLike<T>): $DataResult<T>;
        getLongStream(arg0: T): $DataResult<$LongStream>;
        createLongList(arg0: $LongStream): T;
        listBuilder(): $ListBuilder<T>;
        createNumeric(arg0: $Number): T;
        getMapValues(arg0: T): $DataResult<$Stream<$Pair<T, T>>>;
        getGeneric(arg0: T, arg1: T): $DataResult<T>;
        convertTo<U>(arg0: $DynamicOps<U>, arg1: T): U;
        getMapEntries(arg0: T): $DataResult<$Consumer<$BiConsumer<T, T>>>;
        updateGeneric(arg0: T, arg1: T, arg2: $Function_<T, T>): T;
        withEncoder<E>(arg0: $Encoder_<E>): $Function<E, $DataResult<T>>;
        withDecoder<E>(arg0: $Decoder_<E>): $Function<T, $DataResult<$Pair<E, T>>>;
        withParser<E>(arg0: $Decoder_<E>): $Function<T, $DataResult<E>>;
        convertList<U>(arg0: $DynamicOps<U>, arg1: T): U;
        convertMap<U>(arg0: $DynamicOps<U>, arg1: T): U;
    }
    export class $Codec<A> {
        static of<A>(arg0: $MapEncoder<A>, arg1: $MapDecoder<A>, arg2: $Supplier_<string>): $MapCodec<A>;
        static of<A>(arg0: $MapEncoder<A>, arg1: $MapDecoder<A>): $MapCodec<A>;
        static of<A>(arg0: $Encoder_<A>, arg1: $Decoder_<A>, arg2: string): $Codec<A>;
        static of<A>(arg0: $Encoder_<A>, arg1: $Decoder_<A>): $Codec<A>;
        static list<E>(arg0: $Codec_<E>): $Codec<$List<E>>;
        static list<E>(arg0: $Codec_<E>, arg1: number, arg2: number): $Codec<$List<E>>;
        static unit<A>(arg0: A): $Codec<A>;
        static unit<A>(arg0: $Supplier_<A>): $Codec<A>;
        static string(arg0: number, arg1: number): $Codec<string>;
        static recursive<A>(arg0: string, arg1: $Function_<$Codec<A>, $Codec<A>>): $Codec<A>;
        static pair<F, S>(arg0: $Codec_<F>, arg1: $Codec_<S>): $Codec<$Pair<F, S>>;
        static checkRange<N extends $Number>(arg0: N, arg1: N): $Function<N, $DataResult<N>>;
        static xor<F, S>(arg0: $Codec_<F>, arg1: $Codec_<S>): $Codec<$Either<F, S>>;
        static either<F, S>(arg0: $Codec_<F>, arg1: $Codec_<S>): $Codec<$Either<F, S>>;
        static optionalField<F>(arg0: string, arg1: $Codec_<F>, arg2: boolean): $MapCodec<(F) | undefined>;
        static withAlternative<T>(arg0: $Codec_<T>, arg1: $Codec_<T>): $Codec<T>;
        static withAlternative<T, U>(arg0: $Codec_<T>, arg1: $Codec_<U>, arg2: $Function_<U, T>): $Codec<T>;
        static mapPair<F, S>(arg0: $MapCodec_<F>, arg1: $MapCodec_<S>): $MapCodec<$Pair<F, S>>;
        static mapEither<F, S>(arg0: $MapCodec_<F>, arg1: $MapCodec_<S>): $MapCodec<$Either<F, S>>;
        static compoundList<K, V>(arg0: $Codec_<K>, arg1: $Codec_<V>): $Codec<$List<$Pair<K, V>>>;
        static simpleMap<K, V>(arg0: $Codec_<K>, arg1: $Codec_<V>, arg2: $Keyable_): $SimpleMapCodec<K, V>;
        static unboundedMap<K, V>(arg0: $Codec_<K>, arg1: $Codec_<V>): $UnboundedMapCodec<K, V>;
        static dispatchedMap<K, V>(arg0: $Codec_<K>, arg1: $Function_<K, $Codec<V>>): $Codec<$Map<K, V>>;
        static stringResolver<E>(arg0: $Function_<E, string>, arg1: $Function_<string, E>): $Codec<E>;
        static lazyInitialized<A>(arg0: $Supplier_<$Codec<A>>): $Codec<A>;
        static intRange(arg0: number, arg1: number): $Codec<number>;
        static floatRange(arg0: number, arg1: number): $Codec<number>;
        static doubleRange(arg0: number, arg1: number): $Codec<number>;
        static sizeLimitedString(arg0: number): $Codec<string>;
        static FLOAT: $PrimitiveCodec<number>;
        static INT: $PrimitiveCodec<number>;
        static SHORT: $PrimitiveCodec<number>;
        static PASSTHROUGH: $Codec<$Dynamic<never>>;
        static BOOL: $PrimitiveCodec<boolean>;
        static BYTE_BUFFER: $PrimitiveCodec<$ByteBuffer>;
        static INT_STREAM: $PrimitiveCodec<$IntStream>;
        static BYTE: $PrimitiveCodec<number>;
        static LONG_STREAM: $PrimitiveCodec<$LongStream>;
        static STRING: $PrimitiveCodec<string>;
        static DOUBLE: $PrimitiveCodec<number>;
        static EMPTY: $MapCodec<$Unit>;
        static LONG: $PrimitiveCodec<number>;
    }
    export interface $Codec<A> extends $Encoder<A>, $Decoder<A> {
        dispatch<E>(arg0: string, arg1: $Function_<E, A>, arg2: $Function_<A, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: $Function_<E, A>, arg1: $Function_<A, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<A, $DataResult<A>>): $Codec<A>;
        orElse(arg0: $UnaryOperator_<string>, arg1: A): $Codec<A>;
        orElse(arg0: A): $Codec<A>;
        orElse(arg0: $Consumer_<string>, arg1: A): $Codec<A>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<A>): $Codec<A>;
        orElseGet(arg0: $Supplier_<A>): $Codec<A>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<A>): $Codec<A>;
        deprecated(arg0: number): $Codec<A>;
        stable(): $Codec<A>;
        listOf(arg0: number, arg1: number): $Codec<$List<A>>;
        listOf(): $Codec<$List<A>>;
        flatXmap<S>(arg0: $Function_<A, $DataResult<S>>, arg1: $Function_<S, $DataResult<A>>): $Codec<S>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: A, arg3: $Lifecycle): $MapCodec<A>;
        optionalFieldOf(arg0: string, arg1: A, arg2: $Lifecycle): $MapCodec<A>;
        optionalFieldOf(arg0: string, arg1: A): $MapCodec<A>;
        optionalFieldOf(arg0: string): $MapCodec<(A) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: A, arg3: $Lifecycle): $MapCodec<A>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<(A) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: A): $MapCodec<A>;
        lenientOptionalFieldOf(arg0: string, arg1: A, arg2: $Lifecycle): $MapCodec<A>;
        mapResult(arg0: $Codec$ResultFunction<A>): $Codec<A>;
        promotePartial(arg0: $Consumer_<string>): $Codec<A>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<A>>, arg2: $Function_<A, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, A>, arg2: $Function_<A, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, A>, arg1: $Function_<A, $MapCodec<E>>): $MapCodec<E>;
        xmap<S>(arg0: $Function_<A, S>, arg1: $Function_<S, A>): $Codec<S>;
        sizeLimitedListOf(arg0: number): $Codec<$List<A>>;
        comapFlatMap<S>(arg0: $Function_<A, $DataResult<S>>, arg1: $Function_<S, A>): $Codec<S>;
        flatComapMap<S>(arg0: $Function_<A, S>, arg1: $Function_<S, $DataResult<A>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, A>, arg1: $Function_<A, $MapCodec<E>>): $Codec<E>;
        withLifecycle(arg0: $Lifecycle): $Encoder<A>;
        fieldOf(arg0: string): $MapEncoder<A>;
    }
    /**
     * Values that may be interpreted as {@link $Codec}.
     */
    export type $Codec_<A> = RegistryTypes.CorgilibCondition | RegistryTypes.CorgilibBlendingFunction;
    export class $MapLike<T> {
        static forMap<T>(arg0: $Map_<T, T>, arg1: $DynamicOps<T>): $MapLike<T>;
    }
    export interface $MapLike<T> {
        get(arg0: T): T;
        get(arg0: string): T;
        entries(): $Stream<$Pair<T, T>>;
    }
}
