import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $BiFunction_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vector } from "@package/java/util";
import { $StreamCodec, $StreamCodec$CodecOperation } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/foundation/codec" {
    export class $CreateCodecs {
        static boundedIntStr(arg0: number): $Codec<number>;
        static NON_NEGATIVE_DOUBLE: $Codec<number>;
        static ITEM_STACK_HANDLER: $Codec<$ItemStackHandler>;
        /**
         * @deprecated
         */
        static SIZED_FLUID_INGREDIENT: $Codec<$SizedFluidIngredient>;
        static FLAT_SIZED_FLUID_INGREDIENT_WITH_TYPE: $Codec<$SizedFluidIngredient>;
        static INT_STR: $Codec<number>;
        static POSITIVE_DOUBLE: $Codec<number>;
        constructor();
    }
    export class $CreateStreamCodecs {
        /**
         * @deprecated
         */
        static ofLegacyNbtWithRegistries<C>(arg0: $BiFunction_<C, $HolderLookup$Provider, $CompoundTag>, arg1: $BiFunction_<$HolderLookup$Provider, $CompoundTag, C>): $StreamCodec<$RegistryFriendlyByteBuf, C>;
        /**
         * @deprecated
         */
        static vector<B extends $ByteBuf, V>(): $StreamCodec$CodecOperation<B, V, $Vector<V>>;
    }
    export interface $CreateStreamCodecs {
    }
}
