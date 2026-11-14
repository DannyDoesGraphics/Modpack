import { $Supplier_, $Function_, $Consumer_, $UnaryOperator_, $BiFunction, $BiFunction_, $Function } from "@package/java/util/function";
import { $MapCodec_, $Decoder, $Keyable_, $Decoder$Simple, $Codec$ResultFunction, $DataResult, $MapEncoder, $DynamicOps, $MapLike, $Codec, $Decoder$Boxed, $Lifecycle, $Dynamic, $RecordBuilder, $MapCodec, $Encoder, $Codec_, $Decoder$Terminal, $MapDecoder } from "@package/com/mojang/serialization";
import { $Function4_, $Function3, $Function13_, $Function4, $Function5, $Pair, $Function6, $Function8_, $Function7, $Function8, $Function9, $Function3_, $Function14_, $Function10_, $Function7_, $Function15_, $Function11_, $Function6_, $Function5_, $Function16_, $Function9_, $Function12_ } from "@package/com/mojang/datafixers/util";
import { $Record } from "@package/java/lang";
import { $List, $Map_, $Map } from "@package/java/util";
import { $Products$P10, $Products$P11, $Products$P12, $Products$P13, $Products$P14, $Products$P15, $Products$P16, $Products$P1, $Products$P5, $Products$P4, $Products$P3, $Products$P2, $Products$P9, $Products$P8, $Products$P7, $Products$P6 } from "@package/com/mojang/datafixers";
import { $Applicative$Mu, $K1, $Applicative, $App } from "@package/com/mojang/datafixers/kinds";

declare module "@package/com/mojang/serialization/codecs" {
    export class $SimpleMapCodec<K, V> extends $MapCodec<$Map<K, V>> implements $BaseMapCodec<K, V> {
        encode<T>(arg0: $Map_<K, V>, arg1: $DynamicOps<T>, arg2: $RecordBuilder<T>): $RecordBuilder<T>;
        elementCodec(): $Codec<V>;
        keyCodec(): $Codec<K>;
        constructor(arg0: $Codec_<K>, arg1: $Codec_<V>, arg2: $Keyable_);
    }
    export class $PrimitiveCodec<A> {
    }
    export interface $PrimitiveCodec<A> extends $Codec<A> {
        decode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Pair<A, T>>;
        encode<T>(arg0: A, arg1: $DynamicOps<T>, arg2: T): $DataResult<T>;
        write<T>(arg0: $DynamicOps<T>, arg1: A): T;
        read<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<A>;
    }
    export class $RecordCodecBuilder$Mu<O> implements $K1 {
        constructor();
    }
    export class $UnboundedMapCodec<K, V> extends $Record implements $BaseMapCodec<K, V>, $Codec<$Map<K, V>> {
        decode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Pair<$Map<K, V>, T>>;
        encode<T>(arg0: $Map_<K, V>, arg1: $DynamicOps<T>, arg2: T): $DataResult<T>;
        elementCodec(): $Codec<V>;
        keyCodec(): $Codec<K>;
        decode<T>(arg0: $DynamicOps<T>, arg1: $MapLike<T>): $DataResult<$Map<K, V>>;
        encode<T>(arg0: $Map_<K, V>, arg1: $DynamicOps<T>, arg2: $RecordBuilder<T>): $RecordBuilder<T>;
        dispatch<E>(arg0: string, arg1: $Function_<E, $Map<K, V>>, arg2: $Function_<$Map<K, V>, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: $Function_<E, $Map<K, V>>, arg1: $Function_<$Map<K, V>, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<$Map<K, V>, $DataResult<$Map<K, V>>>): $Codec<$Map<K, V>>;
        orElse(arg0: $UnaryOperator_<string>, arg1: $Map_<K, V>): $Codec<$Map<K, V>>;
        orElse(arg0: $Map_<K, V>): $Codec<$Map<K, V>>;
        orElse(arg0: $Consumer_<string>, arg1: $Map_<K, V>): $Codec<$Map<K, V>>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<$Map<K, V>>): $Codec<$Map<K, V>>;
        orElseGet(arg0: $Supplier_<$Map<K, V>>): $Codec<$Map<K, V>>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<$Map<K, V>>): $Codec<$Map<K, V>>;
        deprecated(arg0: number): $Codec<$Map<K, V>>;
        stable(): $Codec<$Map<K, V>>;
        listOf(arg0: number, arg1: number): $Codec<$List<$Map<K, V>>>;
        listOf(): $Codec<$List<$Map<K, V>>>;
        flatXmap<S>(arg0: $Function_<$Map<K, V>, $DataResult<S>>, arg1: $Function_<S, $DataResult<$Map<K, V>>>): $Codec<S>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Map_<K, V>, arg3: $Lifecycle): $MapCodec<$Map<K, V>>;
        optionalFieldOf(arg0: string, arg1: $Map_<K, V>, arg2: $Lifecycle): $MapCodec<$Map<K, V>>;
        optionalFieldOf(arg0: string, arg1: $Map_<K, V>): $MapCodec<$Map<K, V>>;
        optionalFieldOf(arg0: string): $MapCodec<($Map<K, V>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Map_<K, V>, arg3: $Lifecycle): $MapCodec<$Map<K, V>>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<($Map<K, V>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Map_<K, V>): $MapCodec<$Map<K, V>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Map_<K, V>, arg2: $Lifecycle): $MapCodec<$Map<K, V>>;
        mapResult(arg0: $Codec$ResultFunction<$Map_<K, V>>): $Codec<$Map<K, V>>;
        promotePartial(arg0: $Consumer_<string>): $Codec<$Map<K, V>>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<$Map<K, V>>>, arg2: $Function_<$Map<K, V>, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, $Map<K, V>>, arg2: $Function_<$Map<K, V>, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, $Map<K, V>>, arg1: $Function_<$Map<K, V>, $MapCodec<E>>): $MapCodec<E>;
        xmap<S>(arg0: $Function_<$Map<K, V>, S>, arg1: $Function_<S, $Map<K, V>>): $Codec<S>;
        sizeLimitedListOf(arg0: number): $Codec<$List<$Map<K, V>>>;
        comapFlatMap<S>(arg0: $Function_<$Map<K, V>, $DataResult<S>>, arg1: $Function_<S, $Map<K, V>>): $Codec<S>;
        flatComapMap<S>(arg0: $Function_<$Map<K, V>, S>, arg1: $Function_<S, $DataResult<$Map<K, V>>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, $Map<K, V>>, arg1: $Function_<$Map<K, V>, $MapCodec<E>>): $Codec<E>;
        comap<B>(arg0: $Function_<B, $Map<K, V>>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<$Map<K, V>>>): $Encoder<B>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: $Map_<K, V>): $DataResult<T>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<$Map<K, V>, T>>;
        map<B>(arg0: $Function_<$Map<K, V>, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<$Map<K, V>, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Map<K, V>>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<$Map<K, V>>;
        boxed(): $Decoder$Boxed<$Map<K, V>>;
        terminal(): $Decoder$Terminal<$Map<K, V>>;
        simple(): $Decoder$Simple<$Map<K, V>>;
        withLifecycle(arg0: $Lifecycle): $Encoder<$Map<K, V>>;
        fieldOf(arg0: string): $MapEncoder<$Map<K, V>>;
        constructor(keyCodec: $Codec_<K>, elementCodec: $Codec_<V>);
    }
    /**
     * Values that may be interpreted as {@link $UnboundedMapCodec}.
     */
    export type $UnboundedMapCodec_<K, V> = { keyCodec?: $Codec_<any>, elementCodec?: $Codec_<any>,  } | [keyCodec?: $Codec_<any>, elementCodec?: $Codec_<any>, ];
    export class $BaseMapCodec<K, V> {
    }
    export interface $BaseMapCodec<K, V> {
        decode<T>(arg0: $DynamicOps<T>, arg1: $MapLike<T>): $DataResult<$Map<K, V>>;
        encode<T>(arg0: $Map_<K, V>, arg1: $DynamicOps<T>, arg2: $RecordBuilder<T>): $RecordBuilder<T>;
        elementCodec(): $Codec<V>;
        keyCodec(): $Codec<K>;
    }
    export class $RecordCodecBuilder$Instance<O> implements $Applicative<$RecordCodecBuilder$Mu<O>, $RecordCodecBuilder$Instance$Mu<O>> {
        point<A>(arg0: A, arg1: $Lifecycle): $App<$RecordCodecBuilder$Mu<O>, A>;
        point<A>(arg0: A): $App<$RecordCodecBuilder$Mu<O>, A>;
        map<T, R>(arg0: $Function_<T, R>, arg1: $App<$RecordCodecBuilder$Mu<O>, T>): $App<$RecordCodecBuilder$Mu<O>, R>;
        deprecated<A>(arg0: A, arg1: number): $App<$RecordCodecBuilder$Mu<O>, A>;
        stable<A>(arg0: A): $App<$RecordCodecBuilder$Mu<O>, A>;
        ap2<A, B, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $BiFunction_<A, B, R>>, arg1: $App<$RecordCodecBuilder$Mu<O>, A>, arg2: $App<$RecordCodecBuilder$Mu<O>, B>): $App<$RecordCodecBuilder$Mu<O>, R>;
        lift1<A, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function_<A, R>>): $Function<$App<$RecordCodecBuilder$Mu<O>, A>, $App<$RecordCodecBuilder$Mu<O>, R>>;
        ap3<T1, T2, T3, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function3_<T1, T2, T3, R>>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>): $App<$RecordCodecBuilder$Mu<O>, R>;
        ap4<T1, T2, T3, T4, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function4_<T1, T2, T3, T4, R>>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>): $App<$RecordCodecBuilder$Mu<O>, R>;
        ap<A, R>(arg0: $Function_<A, R>, arg1: $App<$RecordCodecBuilder$Mu<O>, A>): $App<$RecordCodecBuilder$Mu<O>, R>;
        ap<A, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function_<A, R>>, arg1: $App<$RecordCodecBuilder$Mu<O>, A>): $App<$RecordCodecBuilder$Mu<O>, R>;
        apply2<A, B, R>(arg0: $BiFunction_<A, B, R>, arg1: $App<$RecordCodecBuilder$Mu<O>, A>, arg2: $App<$RecordCodecBuilder$Mu<O>, B>): $App<$RecordCodecBuilder$Mu<O>, R>;
        apply3<T1, T2, T3, R>(arg0: $Function3_<T1, T2, T3, R>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>): $App<$RecordCodecBuilder$Mu<O>, R>;
        ap8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>, arg6: $App<$RecordCodecBuilder$Mu<O>, T6>, arg7: $App<$RecordCodecBuilder$Mu<O>, T7>, arg8: $App<$RecordCodecBuilder$Mu<O>, T8>): $App<$RecordCodecBuilder$Mu<O>, R>;
        ap9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>, arg6: $App<$RecordCodecBuilder$Mu<O>, T6>, arg7: $App<$RecordCodecBuilder$Mu<O>, T7>, arg8: $App<$RecordCodecBuilder$Mu<O>, T8>, arg9: $App<$RecordCodecBuilder$Mu<O>, T9>): $App<$RecordCodecBuilder$Mu<O>, R>;
        lift2<A, B, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $BiFunction_<A, B, R>>): $BiFunction<$App<$RecordCodecBuilder$Mu<O>, A>, $App<$RecordCodecBuilder$Mu<O>, B>, $App<$RecordCodecBuilder$Mu<O>, R>>;
        lift3<T1, T2, T3, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function3_<T1, T2, T3, R>>): $Function3<$App<$RecordCodecBuilder$Mu<O>, T1>, $App<$RecordCodecBuilder$Mu<O>, T2>, $App<$RecordCodecBuilder$Mu<O>, T3>, $App<$RecordCodecBuilder$Mu<O>, R>>;
        lift4<T1, T2, T3, T4, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function4_<T1, T2, T3, T4, R>>): $Function4<$App<$RecordCodecBuilder$Mu<O>, T1>, $App<$RecordCodecBuilder$Mu<O>, T2>, $App<$RecordCodecBuilder$Mu<O>, T3>, $App<$RecordCodecBuilder$Mu<O>, T4>, $App<$RecordCodecBuilder$Mu<O>, R>>;
        lift5<T1, T2, T3, T4, T5, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function5_<T1, T2, T3, T4, T5, R>>): $Function5<$App<$RecordCodecBuilder$Mu<O>, T1>, $App<$RecordCodecBuilder$Mu<O>, T2>, $App<$RecordCodecBuilder$Mu<O>, T3>, $App<$RecordCodecBuilder$Mu<O>, T4>, $App<$RecordCodecBuilder$Mu<O>, T5>, $App<$RecordCodecBuilder$Mu<O>, R>>;
        ap10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function10_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>, arg6: $App<$RecordCodecBuilder$Mu<O>, T6>, arg7: $App<$RecordCodecBuilder$Mu<O>, T7>, arg8: $App<$RecordCodecBuilder$Mu<O>, T8>, arg9: $App<$RecordCodecBuilder$Mu<O>, T9>, arg10: $App<$RecordCodecBuilder$Mu<O>, T10>): $App<$RecordCodecBuilder$Mu<O>, R>;
        ap11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function11_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>, arg6: $App<$RecordCodecBuilder$Mu<O>, T6>, arg7: $App<$RecordCodecBuilder$Mu<O>, T7>, arg8: $App<$RecordCodecBuilder$Mu<O>, T8>, arg9: $App<$RecordCodecBuilder$Mu<O>, T9>, arg10: $App<$RecordCodecBuilder$Mu<O>, T10>, arg11: $App<$RecordCodecBuilder$Mu<O>, T11>): $App<$RecordCodecBuilder$Mu<O>, R>;
        ap12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function12_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>, arg6: $App<$RecordCodecBuilder$Mu<O>, T6>, arg7: $App<$RecordCodecBuilder$Mu<O>, T7>, arg8: $App<$RecordCodecBuilder$Mu<O>, T8>, arg9: $App<$RecordCodecBuilder$Mu<O>, T9>, arg10: $App<$RecordCodecBuilder$Mu<O>, T10>, arg11: $App<$RecordCodecBuilder$Mu<O>, T11>, arg12: $App<$RecordCodecBuilder$Mu<O>, T12>): $App<$RecordCodecBuilder$Mu<O>, R>;
        ap5<T1, T2, T3, T4, T5, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function5_<T1, T2, T3, T4, T5, R>>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>): $App<$RecordCodecBuilder$Mu<O>, R>;
        ap6<T1, T2, T3, T4, T5, T6, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function6_<T1, T2, T3, T4, T5, T6, R>>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>, arg6: $App<$RecordCodecBuilder$Mu<O>, T6>): $App<$RecordCodecBuilder$Mu<O>, R>;
        ap7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function7_<T1, T2, T3, T4, T5, T6, T7, R>>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>, arg6: $App<$RecordCodecBuilder$Mu<O>, T6>, arg7: $App<$RecordCodecBuilder$Mu<O>, T7>): $App<$RecordCodecBuilder$Mu<O>, R>;
        lift6<T1, T2, T3, T4, T5, T6, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function6_<T1, T2, T3, T4, T5, T6, R>>): $Function6<$App<$RecordCodecBuilder$Mu<O>, T1>, $App<$RecordCodecBuilder$Mu<O>, T2>, $App<$RecordCodecBuilder$Mu<O>, T3>, $App<$RecordCodecBuilder$Mu<O>, T4>, $App<$RecordCodecBuilder$Mu<O>, T5>, $App<$RecordCodecBuilder$Mu<O>, T6>, $App<$RecordCodecBuilder$Mu<O>, R>>;
        lift7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function7_<T1, T2, T3, T4, T5, T6, T7, R>>): $Function7<$App<$RecordCodecBuilder$Mu<O>, T1>, $App<$RecordCodecBuilder$Mu<O>, T2>, $App<$RecordCodecBuilder$Mu<O>, T3>, $App<$RecordCodecBuilder$Mu<O>, T4>, $App<$RecordCodecBuilder$Mu<O>, T5>, $App<$RecordCodecBuilder$Mu<O>, T6>, $App<$RecordCodecBuilder$Mu<O>, T7>, $App<$RecordCodecBuilder$Mu<O>, R>>;
        lift8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>>): $Function8<$App<$RecordCodecBuilder$Mu<O>, T1>, $App<$RecordCodecBuilder$Mu<O>, T2>, $App<$RecordCodecBuilder$Mu<O>, T3>, $App<$RecordCodecBuilder$Mu<O>, T4>, $App<$RecordCodecBuilder$Mu<O>, T5>, $App<$RecordCodecBuilder$Mu<O>, T6>, $App<$RecordCodecBuilder$Mu<O>, T7>, $App<$RecordCodecBuilder$Mu<O>, T8>, $App<$RecordCodecBuilder$Mu<O>, R>>;
        lift9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): $Function9<$App<$RecordCodecBuilder$Mu<O>, T1>, $App<$RecordCodecBuilder$Mu<O>, T2>, $App<$RecordCodecBuilder$Mu<O>, T3>, $App<$RecordCodecBuilder$Mu<O>, T4>, $App<$RecordCodecBuilder$Mu<O>, T5>, $App<$RecordCodecBuilder$Mu<O>, T6>, $App<$RecordCodecBuilder$Mu<O>, T7>, $App<$RecordCodecBuilder$Mu<O>, T8>, $App<$RecordCodecBuilder$Mu<O>, T9>, $App<$RecordCodecBuilder$Mu<O>, R>>;
        ap13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function13_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>, arg6: $App<$RecordCodecBuilder$Mu<O>, T6>, arg7: $App<$RecordCodecBuilder$Mu<O>, T7>, arg8: $App<$RecordCodecBuilder$Mu<O>, T8>, arg9: $App<$RecordCodecBuilder$Mu<O>, T9>, arg10: $App<$RecordCodecBuilder$Mu<O>, T10>, arg11: $App<$RecordCodecBuilder$Mu<O>, T11>, arg12: $App<$RecordCodecBuilder$Mu<O>, T12>, arg13: $App<$RecordCodecBuilder$Mu<O>, T13>): $App<$RecordCodecBuilder$Mu<O>, R>;
        ap14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function14_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>, arg6: $App<$RecordCodecBuilder$Mu<O>, T6>, arg7: $App<$RecordCodecBuilder$Mu<O>, T7>, arg8: $App<$RecordCodecBuilder$Mu<O>, T8>, arg9: $App<$RecordCodecBuilder$Mu<O>, T9>, arg10: $App<$RecordCodecBuilder$Mu<O>, T10>, arg11: $App<$RecordCodecBuilder$Mu<O>, T11>, arg12: $App<$RecordCodecBuilder$Mu<O>, T12>, arg13: $App<$RecordCodecBuilder$Mu<O>, T13>, arg14: $App<$RecordCodecBuilder$Mu<O>, T14>): $App<$RecordCodecBuilder$Mu<O>, R>;
        ap15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function15_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>, arg6: $App<$RecordCodecBuilder$Mu<O>, T6>, arg7: $App<$RecordCodecBuilder$Mu<O>, T7>, arg8: $App<$RecordCodecBuilder$Mu<O>, T8>, arg9: $App<$RecordCodecBuilder$Mu<O>, T9>, arg10: $App<$RecordCodecBuilder$Mu<O>, T10>, arg11: $App<$RecordCodecBuilder$Mu<O>, T11>, arg12: $App<$RecordCodecBuilder$Mu<O>, T12>, arg13: $App<$RecordCodecBuilder$Mu<O>, T13>, arg14: $App<$RecordCodecBuilder$Mu<O>, T14>, arg15: $App<$RecordCodecBuilder$Mu<O>, T15>): $App<$RecordCodecBuilder$Mu<O>, R>;
        ap16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: $App<$RecordCodecBuilder$Mu<O>, $Function16_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>, arg6: $App<$RecordCodecBuilder$Mu<O>, T6>, arg7: $App<$RecordCodecBuilder$Mu<O>, T7>, arg8: $App<$RecordCodecBuilder$Mu<O>, T8>, arg9: $App<$RecordCodecBuilder$Mu<O>, T9>, arg10: $App<$RecordCodecBuilder$Mu<O>, T10>, arg11: $App<$RecordCodecBuilder$Mu<O>, T11>, arg12: $App<$RecordCodecBuilder$Mu<O>, T12>, arg13: $App<$RecordCodecBuilder$Mu<O>, T13>, arg14: $App<$RecordCodecBuilder$Mu<O>, T14>, arg15: $App<$RecordCodecBuilder$Mu<O>, T15>, arg16: $App<$RecordCodecBuilder$Mu<O>, T16>): $App<$RecordCodecBuilder$Mu<O>, R>;
        apply4<T1, T2, T3, T4, R>(arg0: $Function4_<T1, T2, T3, T4, R>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>): $App<$RecordCodecBuilder$Mu<O>, R>;
        apply5<T1, T2, T3, T4, T5, R>(arg0: $Function5_<T1, T2, T3, T4, T5, R>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>): $App<$RecordCodecBuilder$Mu<O>, R>;
        apply6<T1, T2, T3, T4, T5, T6, R>(arg0: $Function6_<T1, T2, T3, T4, T5, T6, R>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>, arg6: $App<$RecordCodecBuilder$Mu<O>, T6>): $App<$RecordCodecBuilder$Mu<O>, R>;
        apply7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $Function7_<T1, T2, T3, T4, T5, T6, T7, R>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>, arg6: $App<$RecordCodecBuilder$Mu<O>, T6>, arg7: $App<$RecordCodecBuilder$Mu<O>, T7>): $App<$RecordCodecBuilder$Mu<O>, R>;
        apply8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>, arg6: $App<$RecordCodecBuilder$Mu<O>, T6>, arg7: $App<$RecordCodecBuilder$Mu<O>, T7>, arg8: $App<$RecordCodecBuilder$Mu<O>, T8>): $App<$RecordCodecBuilder$Mu<O>, R>;
        apply9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>, arg1: $App<$RecordCodecBuilder$Mu<O>, T1>, arg2: $App<$RecordCodecBuilder$Mu<O>, T2>, arg3: $App<$RecordCodecBuilder$Mu<O>, T3>, arg4: $App<$RecordCodecBuilder$Mu<O>, T4>, arg5: $App<$RecordCodecBuilder$Mu<O>, T5>, arg6: $App<$RecordCodecBuilder$Mu<O>, T6>, arg7: $App<$RecordCodecBuilder$Mu<O>, T7>, arg8: $App<$RecordCodecBuilder$Mu<O>, T8>, arg9: $App<$RecordCodecBuilder$Mu<O>, T9>): $App<$RecordCodecBuilder$Mu<O>, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App<$RecordCodecBuilder$Mu<O>, T1>, arg1: $App<$RecordCodecBuilder$Mu<O>, T2>, arg2: $App<$RecordCodecBuilder$Mu<O>, T3>, arg3: $App<$RecordCodecBuilder$Mu<O>, T4>, arg4: $App<$RecordCodecBuilder$Mu<O>, T5>, arg5: $App<$RecordCodecBuilder$Mu<O>, T6>, arg6: $App<$RecordCodecBuilder$Mu<O>, T7>, arg7: $App<$RecordCodecBuilder$Mu<O>, T8>, arg8: $App<$RecordCodecBuilder$Mu<O>, T9>, arg9: $App<$RecordCodecBuilder$Mu<O>, T10>, arg10: $App<$RecordCodecBuilder$Mu<O>, T11>): $Products$P11<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App<$RecordCodecBuilder$Mu<O>, T1>, arg1: $App<$RecordCodecBuilder$Mu<O>, T2>, arg2: $App<$RecordCodecBuilder$Mu<O>, T3>, arg3: $App<$RecordCodecBuilder$Mu<O>, T4>, arg4: $App<$RecordCodecBuilder$Mu<O>, T5>, arg5: $App<$RecordCodecBuilder$Mu<O>, T6>, arg6: $App<$RecordCodecBuilder$Mu<O>, T7>, arg7: $App<$RecordCodecBuilder$Mu<O>, T8>, arg8: $App<$RecordCodecBuilder$Mu<O>, T9>, arg9: $App<$RecordCodecBuilder$Mu<O>, T10>): $Products$P10<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App<$RecordCodecBuilder$Mu<O>, T1>, arg1: $App<$RecordCodecBuilder$Mu<O>, T2>, arg2: $App<$RecordCodecBuilder$Mu<O>, T3>, arg3: $App<$RecordCodecBuilder$Mu<O>, T4>, arg4: $App<$RecordCodecBuilder$Mu<O>, T5>, arg5: $App<$RecordCodecBuilder$Mu<O>, T6>, arg6: $App<$RecordCodecBuilder$Mu<O>, T7>, arg7: $App<$RecordCodecBuilder$Mu<O>, T8>, arg8: $App<$RecordCodecBuilder$Mu<O>, T9>): $Products$P9<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App<$RecordCodecBuilder$Mu<O>, T1>, arg1: $App<$RecordCodecBuilder$Mu<O>, T2>, arg2: $App<$RecordCodecBuilder$Mu<O>, T3>, arg3: $App<$RecordCodecBuilder$Mu<O>, T4>, arg4: $App<$RecordCodecBuilder$Mu<O>, T5>, arg5: $App<$RecordCodecBuilder$Mu<O>, T6>, arg6: $App<$RecordCodecBuilder$Mu<O>, T7>, arg7: $App<$RecordCodecBuilder$Mu<O>, T8>, arg8: $App<$RecordCodecBuilder$Mu<O>, T9>, arg9: $App<$RecordCodecBuilder$Mu<O>, T10>, arg10: $App<$RecordCodecBuilder$Mu<O>, T11>, arg11: $App<$RecordCodecBuilder$Mu<O>, T12>, arg12: $App<$RecordCodecBuilder$Mu<O>, T13>, arg13: $App<$RecordCodecBuilder$Mu<O>, T14>, arg14: $App<$RecordCodecBuilder$Mu<O>, T15>, arg15: $App<$RecordCodecBuilder$Mu<O>, T16>): $Products$P16<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App<$RecordCodecBuilder$Mu<O>, T1>, arg1: $App<$RecordCodecBuilder$Mu<O>, T2>, arg2: $App<$RecordCodecBuilder$Mu<O>, T3>, arg3: $App<$RecordCodecBuilder$Mu<O>, T4>, arg4: $App<$RecordCodecBuilder$Mu<O>, T5>, arg5: $App<$RecordCodecBuilder$Mu<O>, T6>, arg6: $App<$RecordCodecBuilder$Mu<O>, T7>, arg7: $App<$RecordCodecBuilder$Mu<O>, T8>, arg8: $App<$RecordCodecBuilder$Mu<O>, T9>, arg9: $App<$RecordCodecBuilder$Mu<O>, T10>, arg10: $App<$RecordCodecBuilder$Mu<O>, T11>, arg11: $App<$RecordCodecBuilder$Mu<O>, T12>, arg12: $App<$RecordCodecBuilder$Mu<O>, T13>, arg13: $App<$RecordCodecBuilder$Mu<O>, T14>, arg14: $App<$RecordCodecBuilder$Mu<O>, T15>): $Products$P15<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App<$RecordCodecBuilder$Mu<O>, T1>, arg1: $App<$RecordCodecBuilder$Mu<O>, T2>, arg2: $App<$RecordCodecBuilder$Mu<O>, T3>, arg3: $App<$RecordCodecBuilder$Mu<O>, T4>, arg4: $App<$RecordCodecBuilder$Mu<O>, T5>, arg5: $App<$RecordCodecBuilder$Mu<O>, T6>, arg6: $App<$RecordCodecBuilder$Mu<O>, T7>, arg7: $App<$RecordCodecBuilder$Mu<O>, T8>, arg8: $App<$RecordCodecBuilder$Mu<O>, T9>, arg9: $App<$RecordCodecBuilder$Mu<O>, T10>, arg10: $App<$RecordCodecBuilder$Mu<O>, T11>, arg11: $App<$RecordCodecBuilder$Mu<O>, T12>, arg12: $App<$RecordCodecBuilder$Mu<O>, T13>, arg13: $App<$RecordCodecBuilder$Mu<O>, T14>): $Products$P14<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App<$RecordCodecBuilder$Mu<O>, T1>, arg1: $App<$RecordCodecBuilder$Mu<O>, T2>, arg2: $App<$RecordCodecBuilder$Mu<O>, T3>, arg3: $App<$RecordCodecBuilder$Mu<O>, T4>, arg4: $App<$RecordCodecBuilder$Mu<O>, T5>, arg5: $App<$RecordCodecBuilder$Mu<O>, T6>, arg6: $App<$RecordCodecBuilder$Mu<O>, T7>, arg7: $App<$RecordCodecBuilder$Mu<O>, T8>, arg8: $App<$RecordCodecBuilder$Mu<O>, T9>, arg9: $App<$RecordCodecBuilder$Mu<O>, T10>, arg10: $App<$RecordCodecBuilder$Mu<O>, T11>, arg11: $App<$RecordCodecBuilder$Mu<O>, T12>, arg12: $App<$RecordCodecBuilder$Mu<O>, T13>): $Products$P13<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App<$RecordCodecBuilder$Mu<O>, T1>, arg1: $App<$RecordCodecBuilder$Mu<O>, T2>, arg2: $App<$RecordCodecBuilder$Mu<O>, T3>, arg3: $App<$RecordCodecBuilder$Mu<O>, T4>, arg4: $App<$RecordCodecBuilder$Mu<O>, T5>, arg5: $App<$RecordCodecBuilder$Mu<O>, T6>, arg6: $App<$RecordCodecBuilder$Mu<O>, T7>, arg7: $App<$RecordCodecBuilder$Mu<O>, T8>, arg8: $App<$RecordCodecBuilder$Mu<O>, T9>, arg9: $App<$RecordCodecBuilder$Mu<O>, T10>, arg10: $App<$RecordCodecBuilder$Mu<O>, T11>, arg11: $App<$RecordCodecBuilder$Mu<O>, T12>): $Products$P12<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
        group<T1, T2, T3>(arg0: $App<$RecordCodecBuilder$Mu<O>, T1>, arg1: $App<$RecordCodecBuilder$Mu<O>, T2>, arg2: $App<$RecordCodecBuilder$Mu<O>, T3>): $Products$P3<$RecordCodecBuilder$Mu<O>, T1, T2, T3>;
        group<T1, T2>(arg0: $App<$RecordCodecBuilder$Mu<O>, T1>, arg1: $App<$RecordCodecBuilder$Mu<O>, T2>): $Products$P2<$RecordCodecBuilder$Mu<O>, T1, T2>;
        group<T1>(arg0: $App<$RecordCodecBuilder$Mu<O>, T1>): $Products$P1<$RecordCodecBuilder$Mu<O>, T1>;
        group<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App<$RecordCodecBuilder$Mu<O>, T1>, arg1: $App<$RecordCodecBuilder$Mu<O>, T2>, arg2: $App<$RecordCodecBuilder$Mu<O>, T3>, arg3: $App<$RecordCodecBuilder$Mu<O>, T4>, arg4: $App<$RecordCodecBuilder$Mu<O>, T5>, arg5: $App<$RecordCodecBuilder$Mu<O>, T6>, arg6: $App<$RecordCodecBuilder$Mu<O>, T7>, arg7: $App<$RecordCodecBuilder$Mu<O>, T8>): $Products$P8<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8>;
        group<T1, T2, T3, T4, T5, T6, T7>(arg0: $App<$RecordCodecBuilder$Mu<O>, T1>, arg1: $App<$RecordCodecBuilder$Mu<O>, T2>, arg2: $App<$RecordCodecBuilder$Mu<O>, T3>, arg3: $App<$RecordCodecBuilder$Mu<O>, T4>, arg4: $App<$RecordCodecBuilder$Mu<O>, T5>, arg5: $App<$RecordCodecBuilder$Mu<O>, T6>, arg6: $App<$RecordCodecBuilder$Mu<O>, T7>): $Products$P7<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7>;
        group<T1, T2, T3, T4, T5, T6>(arg0: $App<$RecordCodecBuilder$Mu<O>, T1>, arg1: $App<$RecordCodecBuilder$Mu<O>, T2>, arg2: $App<$RecordCodecBuilder$Mu<O>, T3>, arg3: $App<$RecordCodecBuilder$Mu<O>, T4>, arg4: $App<$RecordCodecBuilder$Mu<O>, T5>, arg5: $App<$RecordCodecBuilder$Mu<O>, T6>): $Products$P6<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6>;
        group<T1, T2, T3, T4, T5>(arg0: $App<$RecordCodecBuilder$Mu<O>, T1>, arg1: $App<$RecordCodecBuilder$Mu<O>, T2>, arg2: $App<$RecordCodecBuilder$Mu<O>, T3>, arg3: $App<$RecordCodecBuilder$Mu<O>, T4>, arg4: $App<$RecordCodecBuilder$Mu<O>, T5>): $Products$P5<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5>;
        group<T1, T2, T3, T4>(arg0: $App<$RecordCodecBuilder$Mu<O>, T1>, arg1: $App<$RecordCodecBuilder$Mu<O>, T2>, arg2: $App<$RecordCodecBuilder$Mu<O>, T3>, arg3: $App<$RecordCodecBuilder$Mu<O>, T4>): $Products$P4<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4>;
        constructor();
    }
    export class $RecordCodecBuilder<O, F> implements $App<$RecordCodecBuilder$Mu<O>, F> {
        static point<O, F>(arg0: F): $RecordCodecBuilder<O, F>;
        static point<O, F>(arg0: F, arg1: $Lifecycle): $RecordCodecBuilder<O, F>;
        static of<O, F>(arg0: $Function_<O, F>, arg1: $MapCodec_<F>): $RecordCodecBuilder<O, F>;
        static of<O, F>(arg0: $Function_<O, F>, arg1: string, arg2: $Codec_<F>): $RecordCodecBuilder<O, F>;
        static create<O>(arg0: $Function_<$RecordCodecBuilder$Instance<O>, $App<$RecordCodecBuilder$Mu<O>, O>>): $Codec<O>;
        static instance<O>(): $RecordCodecBuilder$Instance<O>;
        static build<O>(arg0: $App<$RecordCodecBuilder$Mu<O>, O>): $MapCodec<O>;
        static unbox<O, F>(arg0: $App<$RecordCodecBuilder$Mu<O>, F>): $RecordCodecBuilder<O, F>;
        dependent<E>(arg0: $Function_<O, E>, arg1: $MapEncoder<E>, arg2: $Function_<$RecordCodecBuilder$Mu<O>, $MapDecoder<E>>): $RecordCodecBuilder<O, E>;
        static deprecated<O, F>(arg0: F, arg1: number): $RecordCodecBuilder<O, F>;
        static stable<O, F>(arg0: F): $RecordCodecBuilder<O, F>;
        static mapCodec<O>(arg0: $Function_<$RecordCodecBuilder$Instance<O>, $App<$RecordCodecBuilder$Mu<O>, O>>): $MapCodec<O>;
    }
    export class $RecordCodecBuilder$Instance$Mu<O> implements $Applicative$Mu {
    }
}
