import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Component } from "@package/net/minecraft/network/chat";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $List, $Map_, $Map } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/equipment/symmetryWand/mirror" {
    export class $PlaneMirror$Align extends $Enum<$PlaneMirror$Align> implements $StringRepresentable {
        static values(): $PlaneMirror$Align[];
        static valueOf(arg0: string): $PlaneMirror$Align;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static XY: $PlaneMirror$Align;
        static YZ: $PlaneMirror$Align;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PlaneMirror$Align}.
     */
    export type $PlaneMirror$Align_ = "xy" | "yz";
    export class $CrossPlaneMirror$Align extends $Enum<$CrossPlaneMirror$Align> implements $StringRepresentable {
        static values(): $CrossPlaneMirror$Align[];
        static valueOf(arg0: string): $CrossPlaneMirror$Align;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static D: $CrossPlaneMirror$Align;
        static Y: $CrossPlaneMirror$Align;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CrossPlaneMirror$Align}.
     */
    export type $CrossPlaneMirror$Align_ = "y" | "d";
    export class $EmptyMirror$Align extends $Enum<$EmptyMirror$Align> implements $StringRepresentable {
        static values(): $EmptyMirror$Align[];
        static valueOf(arg0: string): $EmptyMirror$Align;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static None: $EmptyMirror$Align;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EmptyMirror$Align}.
     */
    export type $EmptyMirror$Align_ = "none";
    export class $PlaneMirror extends $SymmetryMirror {
        static CROSS_PLANE: string;
        static CODEC: $Codec<$SymmetryMirror>;
        static TRIPLE_PLANE: string;
        static PLANE: string;
        enable: boolean;
        static EMPTY: string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SymmetryMirror>;
        constructor(arg0: $Vec3_);
    }
    export class $SymmetryMirror {
        static getMirrors(): $List<$Component>;
        getAlignToolTips(): $List<$Component>;
        getOrientationIndex(): number;
        applyModelTransform(arg0: $PoseStack): void;
        setOrientation(arg0: number): void;
        getOrientation(): $StringRepresentable;
        typeName(): string;
        rotate(arg0: boolean): void;
        process(arg0: $Map_<$BlockPos_, $BlockState_>): void;
        process(arg0: $BlockPos_, arg1: $BlockState_): $Map<$BlockPos, $BlockState>;
        setPosition(arg0: $Vec3_): void;
        getModel(): $PartialModel;
        getPosition(): $Vec3;
        static CROSS_PLANE: string;
        static CODEC: $Codec<$SymmetryMirror>;
        static TRIPLE_PLANE: string;
        static PLANE: string;
        enable: boolean;
        static EMPTY: string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SymmetryMirror>;
        constructor(arg0: $Vec3_);
        static get mirrors(): $List<$Component>;
        get alignToolTips(): $List<$Component>;
        get orientationIndex(): number;
        get model(): $PartialModel;
    }
    export class $CrossPlaneMirror extends $SymmetryMirror {
        static CROSS_PLANE: string;
        static CODEC: $Codec<$SymmetryMirror>;
        static TRIPLE_PLANE: string;
        static PLANE: string;
        enable: boolean;
        static EMPTY: string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SymmetryMirror>;
        constructor(arg0: $Vec3_);
    }
    export class $TriplePlaneMirror extends $SymmetryMirror {
        static CROSS_PLANE: string;
        static CODEC: $Codec<$SymmetryMirror>;
        static TRIPLE_PLANE: string;
        static PLANE: string;
        enable: boolean;
        static EMPTY: string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SymmetryMirror>;
        constructor(arg0: $Vec3_);
    }
    export class $EmptyMirror extends $SymmetryMirror {
        static CROSS_PLANE: string;
        static CODEC: $Codec<$SymmetryMirror>;
        static TRIPLE_PLANE: string;
        static PLANE: string;
        enable: boolean;
        static EMPTY: string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SymmetryMirror>;
        constructor(arg0: $Vec3_);
    }
}
