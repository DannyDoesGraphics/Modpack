import { $Item } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $CRBogeyBlock } from "@package/com/railwayteam/railways/content/custom_bogeys/blocks/base";
import { $BogeyStyle, $AbstractBogeyBlock, $BogeySizes$BogeySize } from "@package/com/simibubi/create/content/trains/bogey";
import { $NonNullFunction } from "@package/com/tterrag/registrate/util/nullness";
import { $Supplier } from "@package/java/util/function";
import { $Direction$Axis, $IdMapper } from "@package/net/minecraft/core";
import { $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/railwayteam/railways/content/custom_bogeys/blocks/narrow" {
    export class $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle extends $Enum<$NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle> {
        static values(): $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle[];
        static valueOf(arg0: string): $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle;
        static SMALL: $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle;
        size: $Supplier<$BogeySizes$BogeySize>;
        static DOUBLE_SCOTCH_YOKE: $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle;
        static SCOTCH_YOKE: $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle;
        style: $Supplier<$BogeyStyle>;
    }
    /**
     * Values that may be interpreted as {@link $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle}.
     */
    export type $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle_ = "small" | "scotch_yoke" | "double_scotch_yoke";
    export class $NarrowGaugeBogeyBlock extends $CRBogeyBlock {
        static create(arg0: $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle_): $NonNullFunction<$BlockBehaviour$Properties, $NarrowGaugeBogeyBlock>;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractBogeyBlock<never>>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        size: $BogeySizes$BogeySize;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        style: $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle_);
    }
}
