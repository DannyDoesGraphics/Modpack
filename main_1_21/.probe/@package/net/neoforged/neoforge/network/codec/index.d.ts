import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $Function7_ } from "@package/com/mojang/datafixers/util";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum, $Class } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec, $StreamCodec$CodecOperation_ } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/network/codec" {
    export class $NeoForgeStreamCodecs$LazyStreamCodec<B, V> implements $StreamCodec<B, V> {
        dispatch<U>(arg0: $Function_<U, V>, arg1: $Function_<V, $StreamCodec<B, U>>): $StreamCodec<B, U>;
        cast<S extends B>(): $StreamCodec<S, V>;
        apply<O>(arg0: $StreamCodec$CodecOperation_<B, V, O>): $StreamCodec<B, O>;
        map<O>(arg0: $Function_<V, O>, arg1: $Function_<O, V>): $StreamCodec<B, O>;
        mapStream<O extends $ByteBuf>(arg0: $Function_<O, B>): $StreamCodec<O, V>;
    }
    export class $NeoForgeStreamCodecs {
        static uncheckedUnit<B, V>(arg0: V): $StreamCodec<B, V>;
        /**
         * Creates a stream codec that uses different implementation depending on the `ConnectionType`.
         * Should be used to keep vanilla connection compatibility.
         */
        static connectionAware<V>(neoForgeCodec: $StreamCodec<$RegistryFriendlyByteBuf, V>, otherCodec: $StreamCodec<$RegistryFriendlyByteBuf, V>): $StreamCodec<$RegistryFriendlyByteBuf, V>;
        static enumCodec<B extends $FriendlyByteBuf, V extends $Enum<V>>(enumClass: $Class<V>): $StreamCodec<B, V>;
        static lazy<B, V>(streamCodecSupplier: $Supplier_<$StreamCodec<B, V>>): $StreamCodec<B, V>;
        static composite<B, C, T1, T2, T3, T4, T5, T6, T7>(codec1: $StreamCodec<B, T1>, getter1: $Function_<C, T1>, codec2: $StreamCodec<B, T2>, getter2: $Function_<C, T2>, codec3: $StreamCodec<B, T3>, getter3: $Function_<C, T3>, codec4: $StreamCodec<B, T4>, getter4: $Function_<C, T4>, codec5: $StreamCodec<B, T5>, getter5: $Function_<C, T5>, codec6: $StreamCodec<B, T6>, getter6: $Function_<C, T6>, codec7: $StreamCodec<B, T7>, getter7: $Function_<C, T7>, p_331335_: $Function7_<T1, T2, T3, T4, T5, T6, T7, C>): $StreamCodec<B, C>;
        /**
         * Creates a stream codec to encode and decode a `ResourceKey` that identifies a registry.
         */
        static registryKey<B extends $FriendlyByteBuf>(): $StreamCodec<B, $ResourceKey<$Registry<never>>>;
        static CHUNK_POS: $StreamCodec<$FriendlyByteBuf, $ChunkPos>;
        static UNBOUNDED_BYTE_ARRAY: $StreamCodec<$FriendlyByteBuf, number[]>;
        constructor();
    }
}
