import { $BlockPos, $BlockPos_, $Direction$Axis_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Pair } from "@package/net/createmod/catnip/data";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/createmod/catnip/math" {
    export class $Pointing extends $Enum<$Pointing> implements $StringRepresentable {
        getCombinedDirection(arg0: $Direction_): $Direction;
        getXRotation(): number;
        static values(): $Pointing[];
        static valueOf(arg0: string): $Pointing;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static DOWN: $Pointing;
        static LEFT: $Pointing;
        static RIGHT: $Pointing;
        static UP: $Pointing;
        get XRotation(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Pointing}.
     */
    export type $Pointing_ = "up" | "left" | "down" | "right";
    export class $VoxelShaper {
        static forDirectional(arg0: $VoxelShape, arg1: $Direction_): $VoxelShaper;
        static forHorizontal(arg0: $VoxelShape, arg1: $Direction_): $VoxelShaper;
        static forHorizontalAxis(arg0: $VoxelShape, arg1: $Direction$Axis_): $VoxelShaper;
        static forAxis(arg0: $VoxelShape, arg1: $Direction$Axis_): $VoxelShaper;
        withVerticalShapes(arg0: $VoxelShape): $VoxelShaper;
        withShape(arg0: $VoxelShape, arg1: $Direction_): $VoxelShaper;
        static axisAsFace(arg0: $Direction$Axis_): $Direction;
        get(arg0: $Direction_): $VoxelShape;
        get(arg0: $Direction$Axis_): $VoxelShape;
        constructor();
    }
    export class $BlockFace extends $Pair<$BlockPos, $Direction> {
        getPos(): $BlockPos;
        getFace(): $Direction;
        getConnectedPos(): $BlockPos;
        static fromNBT(arg0: $CompoundTag_): $BlockFace;
        getOppositeFace(): $Direction;
        isEquivalent(arg0: $BlockFace): boolean;
        getOpposite(): $BlockFace;
        serializeNBT(): $CompoundTag;
        static CODEC: $Codec<$BlockFace>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockFace>;
        constructor(arg0: $BlockPos_, arg1: $Direction_);
        get pos(): $BlockPos;
        get face(): $Direction;
        get connectedPos(): $BlockPos;
        get oppositeFace(): $Direction;
        get opposite(): $BlockFace;
    }
}
