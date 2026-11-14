import { $Codec_ } from "@package/com/mojang/serialization";
import { $CompoundTag, $NbtAccounter, $Tag } from "@package/net/minecraft/nbt";
import { $Function4_, $Function6_, $Function5_, $Function3_, $Either } from "@package/com/mojang/datafixers/util";
import { $List, $Map, $Collection } from "@package/java/util";
import { $UnaryOperator_, $IntFunction_, $Supplier_, $Function_, $BiFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $Registry, $HolderSet, $IdMap, $Holder } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $PropertyMap } from "@package/com/mojang/authlib/properties";
import { $Quaternionf, $Vector3f } from "@package/org/joml";

declare module "@package/net/minecraft/network/codec" {
    export class $StreamCodec<B, V> {
        static of<B, V>(encoder: $StreamEncoder_<B, V>, decoder: $StreamDecoder_<B, V>): $StreamCodec<B, V>;
        static unit<B, V>(expectedValue: V): $StreamCodec<B, V>;
        static recursive<B, T>(modifier: $UnaryOperator_<$StreamCodec<B, T>>): $StreamCodec<B, T>;
        static composite<B, C, T1, T2, T3, T4, T5>(codec1: $StreamCodec<B, T1>, getter1: $Function_<C, T1>, codec2: $StreamCodec<B, T2>, getter2: $Function_<C, T2>, codec3: $StreamCodec<B, T3>, getter3: $Function_<C, T3>, codec4: $StreamCodec<B, T4>, getter4: $Function_<C, T4>, codec5: $StreamCodec<B, T5>, getter5: $Function_<C, T5>, factory: $Function5_<T1, T2, T3, T4, T5, C>): $StreamCodec<B, C>;
        static composite<B, C, T1>(codec: $StreamCodec<B, T1>, getter: $Function_<C, T1>, factory: $Function_<T1, C>): $StreamCodec<B, C>;
        static composite<B, C, T1, T2, T3, T4, T5, T6>(codec1: $StreamCodec<B, T1>, getter1: $Function_<C, T1>, codec2: $StreamCodec<B, T2>, getter2: $Function_<C, T2>, codec3: $StreamCodec<B, T3>, getter3: $Function_<C, T3>, codec4: $StreamCodec<B, T4>, getter4: $Function_<C, T4>, codec5: $StreamCodec<B, T5>, getter5: $Function_<C, T5>, codec6: $StreamCodec<B, T6>, getter6: $Function_<C, T6>, factory: $Function6_<T1, T2, T3, T4, T5, T6, C>): $StreamCodec<B, C>;
        static composite<B, C, T1, T2, T3>(codec1: $StreamCodec<B, T1>, getter1: $Function_<C, T1>, codec2: $StreamCodec<B, T2>, getter2: $Function_<C, T2>, codec3: $StreamCodec<B, T3>, getter3: $Function_<C, T3>, factory: $Function3_<T1, T2, T3, C>): $StreamCodec<B, C>;
        static composite<B, C, T1, T2>(codec1: $StreamCodec<B, T1>, getter1: $Function_<C, T1>, codec2: $StreamCodec<B, T2>, getter2: $Function_<C, T2>, factory: $BiFunction_<T1, T2, C>): $StreamCodec<B, C>;
        static composite<B, C, T1, T2, T3, T4>(codec1: $StreamCodec<B, T1>, getter1: $Function_<C, T1>, codec2: $StreamCodec<B, T2>, getter2: $Function_<C, T2>, codec3: $StreamCodec<B, T3>, getter3: $Function_<C, T3>, codec4: $StreamCodec<B, T4>, getter4: $Function_<C, T4>, factory: $Function4_<T1, T2, T3, T4, C>): $StreamCodec<B, C>;
        static ofMember<B, V>(encoder: $StreamMemberEncoder_<B, V>, decoder: $StreamDecoder_<B, V>): $StreamCodec<B, V>;
    }
    export interface $StreamCodec<B, V> extends $StreamDecoder<B, V>, $StreamEncoder<B, V> {
        dispatch<U>(keyGetter: $Function_<U, V>, codecGetter: $Function_<V, $StreamCodec<B, U>>): $StreamCodec<B, U>;
        cast<S extends B>(): $StreamCodec<S, V>;
        apply<O>(operation: $StreamCodec$CodecOperation_<B, V, O>): $StreamCodec<B, O>;
        map<O>(keyGetter: $Function_<V, O>, codecGetter: $Function_<O, V>): $StreamCodec<B, O>;
        mapStream<O extends $ByteBuf>(bufferFactory: $Function_<O, B>): $StreamCodec<O, V>;
    }
    export class $IdDispatchCodec$Builder<B extends $ByteBuf, V, T> {
        add(type: T, serializer: $StreamCodec<B, V>): $IdDispatchCodec$Builder<B, V, T>;
        build(): $IdDispatchCodec<B, V, T>;
    }
    export class $StreamMemberEncoder<O, T> {
    }
    export interface $StreamMemberEncoder<O, T> {
        encode(value: T, output: O): void;
    }
    /**
     * Values that may be interpreted as {@link $StreamMemberEncoder}.
     */
    export type $StreamMemberEncoder_<O, T> = ((arg0: T, arg1: O) => void);
    export class $StreamEncoder<O, T> {
    }
    export interface $StreamEncoder<O, T> {
        encode(buffer: O, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $StreamEncoder}.
     */
    export type $StreamEncoder_<O, T> = ((arg0: O, arg1: T) => void);
    export class $IdDispatchCodec$Entry<B, V, T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $IdDispatchCodec$Entry}.
     */
    export type $IdDispatchCodec$Entry_<B, V, T> = { type?: any, serializer?: $StreamCodec<any, any>,  } | [type?: any, serializer?: $StreamCodec<any, any>, ];
    export class $IdDispatchCodec<B extends $ByteBuf, V, T> implements $StreamCodec<B, V> {
        decode(buffer: B): V;
        encode(buffer: B, value: V): void;
        static builder<B extends $ByteBuf, V, T>(typeGetter: $Function_<V, T>): $IdDispatchCodec$Builder<B, V, T>;
        dispatch<U>(factory: $Function_<U, V>, getter: $Function_<V, $StreamCodec<B, U>>): $StreamCodec<B, U>;
        cast<S extends B>(): $StreamCodec<S, V>;
        apply<O>(operation: $StreamCodec$CodecOperation_<B, V, O>): $StreamCodec<B, O>;
        map<O>(factory: $Function_<V, O>, getter: $Function_<O, V>): $StreamCodec<B, O>;
        mapStream<O extends $ByteBuf>(bufferFactory: $Function_<O, B>): $StreamCodec<O, V>;
    }
    export class $StreamDecoder<I, T> {
    }
    export interface $StreamDecoder<I, T> {
        decode(buffer: I): T;
    }
    /**
     * Values that may be interpreted as {@link $StreamDecoder}.
     */
    export type $StreamDecoder_<I, T> = ((arg0: I) => T);
    export class $StreamCodec$CodecOperation<B, S, T> {
    }
    export interface $StreamCodec$CodecOperation<B, S, T> {
        apply(codec: $StreamCodec<B, S>): $StreamCodec<B, T>;
    }
    /**
     * Values that may be interpreted as {@link $StreamCodec$CodecOperation}.
     */
    export type $StreamCodec$CodecOperation_<B, S, T> = ((arg0: $StreamCodec<B, S>) => $StreamCodec<B, T>);
    export class $ByteBufCodecs {
        static map<B extends $ByteBuf, K, V, M extends $Map<K, V>>(factory: $IntFunction_<M>, keyCodec: $StreamCodec<B, K>, valueCodec: $StreamCodec<B, V>): $StreamCodec<B, M>;
        static map<B extends $ByteBuf, K, V, M extends $Map<K, V>>(factory: $IntFunction_<M>, keyCodec: $StreamCodec<B, K>, valueCodec: $StreamCodec<B, V>, maxSize: number): $StreamCodec<B, M>;
        static list<B extends $ByteBuf, V>(maxSize: number): $StreamCodec$CodecOperation<B, V, $List<V>>;
        static list<B extends $ByteBuf, V>(): $StreamCodec$CodecOperation<B, V, $List<V>>;
        static holder<T>(registryKey: $ResourceKey_<$Registry<T>>, codec: $StreamCodec<$RegistryFriendlyByteBuf, T>): $StreamCodec<$RegistryFriendlyByteBuf, $Holder<T>>;
        static optional<B extends $ByteBuf, V>(codec: $StreamCodec<B, V>): $StreamCodec<B, (V) | undefined>;
        static byteArray(maxSize: number): $StreamCodec<$ByteBuf, number[]>;
        static collection<B extends $ByteBuf, V, C extends $Collection<V>>(factory: $IntFunction_<C>, codec: $StreamCodec<B, V>, maxSize: number): $StreamCodec<B, C>;
        static collection<B extends $ByteBuf, V, C extends $Collection<V>>(factory: $IntFunction_<C>): $StreamCodec$CodecOperation<B, V, C>;
        static collection<B extends $ByteBuf, V, C extends $Collection<V>>(factory: $IntFunction_<C>, codec: $StreamCodec<B, V>): $StreamCodec<B, C>;
        static readCount(buffer: $ByteBuf, maxSize: number): number;
        static registry<T>(registryKey: $ResourceKey_<$Registry<T>>): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        static either<B extends $ByteBuf, L, R>(leftCodec: $StreamCodec<B, L>, rightCodec: $StreamCodec<B, R>): $StreamCodec<B, $Either<L, R>>;
        static fromCodecWithRegistries<T>(codec: $Codec_<T>, accounterSupplier: $Supplier_<$NbtAccounter>): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        static fromCodecWithRegistries<T>(codec: $Codec_<T>): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        static fromCodecWithRegistriesTrusted<T>(codec: $Codec_<T>): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        static fromCodecTrusted<T>(codec: $Codec_<T>): $StreamCodec<$ByteBuf, T>;
        static tagCodec(accounterSupplier: $Supplier_<$NbtAccounter>): $StreamCodec<$ByteBuf, $Tag>;
        static fromCodec<T>(codec: $Codec_<T>, accounterSupplier: $Supplier_<$NbtAccounter>): $StreamCodec<$ByteBuf, T>;
        static fromCodec<T>(codec: $Codec_<T>): $StreamCodec<$ByteBuf, T>;
        static idMapper<T>(idLookup: $IntFunction_<T>, idGetter: $ToIntFunction_<T>): $StreamCodec<$ByteBuf, T>;
        static idMapper<T>(idMap: $IdMap<T>): $StreamCodec<$ByteBuf, T>;
        static stringUtf8(maxSize: number): $StreamCodec<$ByteBuf, string>;
        static compoundTagCodec(accounterSupplier: $Supplier_<$NbtAccounter>): $StreamCodec<$ByteBuf, $CompoundTag>;
        static writeCount(buffer: $ByteBuf, count: number, maxSize: number): void;
        static holderRegistry<T>(registryKey: $ResourceKey_<$Registry<T>>): $StreamCodec<$RegistryFriendlyByteBuf, $Holder<T>>;
        static holderSet<T>(registryKey: $ResourceKey_<$Registry<T>>): $StreamCodec<$RegistryFriendlyByteBuf, $HolderSet<T>>;
        static FLOAT: $StreamCodec<$ByteBuf, number>;
        static QUATERNIONF: $StreamCodec<$ByteBuf, $Quaternionf>;
        static BYTE_ARRAY: $StreamCodec<$ByteBuf, number[]>;
        static VAR_INT: $StreamCodec<$ByteBuf, number>;
        static TRUSTED_TAG: $StreamCodec<$ByteBuf, $Tag>;
        static INT: $StreamCodec<$ByteBuf, number>;
        static STRING_UTF8: $StreamCodec<$ByteBuf, string>;
        static SHORT: $StreamCodec<$ByteBuf, number>;
        static VAR_LONG: $StreamCodec<$ByteBuf, number>;
        static UNSIGNED_SHORT: $StreamCodec<$ByteBuf, number>;
        static OPTIONAL_COMPOUND_TAG: $StreamCodec<$ByteBuf, ($CompoundTag) | undefined>;
        static GAME_PROFILE: $StreamCodec<$ByteBuf, $GameProfile>;
        static MAX_INITIAL_COLLECTION_SIZE: number;
        static BOOL: $StreamCodec<$ByteBuf, boolean>;
        static TRUSTED_COMPOUND_TAG: $StreamCodec<$ByteBuf, $CompoundTag>;
        static BYTE: $StreamCodec<$ByteBuf, number>;
        static COMPOUND_TAG: $StreamCodec<$ByteBuf, $CompoundTag>;
        static GAME_PROFILE_PROPERTIES: $StreamCodec<$ByteBuf, $PropertyMap>;
        static VECTOR3F: $StreamCodec<$ByteBuf, $Vector3f>;
        static DOUBLE: $StreamCodec<$ByteBuf, number>;
        static TAG: $StreamCodec<$ByteBuf, $Tag>;
    }
    export interface $ByteBufCodecs {
    }
}
