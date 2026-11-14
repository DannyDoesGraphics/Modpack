import { $RenderContext$QuadTransform, $QuadView, $MutableQuadView } from "@package/appeng/thirdparty/fabric";
import { $Enum } from "@package/java/lang";
import { $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/appeng/thirdparty/codechicken/lib/model/pipeline/transformers" {
    export class $QuadFaceStripper implements $RenderContext$QuadTransform {
        setMask(arg0: number): void;
        setBounds(arg0: $AABB_): void;
        transform(arg0: $MutableQuadView): boolean;
        constructor(arg0: $AABB_, arg1: number);
        set mask(value: number);
        set bounds(value: $AABB_);
    }
    export class $QuadTinter implements $RenderContext$QuadTransform {
        transform(arg0: $MutableQuadView): boolean;
        constructor(arg0: number);
    }
    export class $QuadClamper implements $RenderContext$QuadTransform {
        transform(arg0: $MutableQuadView): boolean;
        constructor(arg0: $AABB_);
    }
    export class $QuadCornerKicker$Corner extends $Enum<$QuadCornerKicker$Corner> {
        pZ(arg0: $AABB_): number;
        static fromSides(arg0: number, arg1: number, arg2: number): $QuadCornerKicker$Corner;
        static values(): $QuadCornerKicker$Corner[];
        static valueOf(arg0: string): $QuadCornerKicker$Corner;
        pX(arg0: $AABB_): number;
        pY(arg0: $AABB_): number;
        static MIN_X_MAX_Y_MIN_Z: $QuadCornerKicker$Corner;
        static MAX_X_MIN_Y_MAX_Z: $QuadCornerKicker$Corner;
        static MAX_X_MIN_Y_MIN_Z: $QuadCornerKicker$Corner;
        static MAX_X_MAX_Y_MAX_Z: $QuadCornerKicker$Corner;
        static MAX_X_MAX_Y_MIN_Z: $QuadCornerKicker$Corner;
        static MIN_X_MAX_Y_MAX_Z: $QuadCornerKicker$Corner;
        static MIN_X_MIN_Y_MAX_Z: $QuadCornerKicker$Corner;
        static MIN_X_MIN_Y_MIN_Z: $QuadCornerKicker$Corner;
    }
    /**
     * Values that may be interpreted as {@link $QuadCornerKicker$Corner}.
     */
    export type $QuadCornerKicker$Corner_ = "min_x_min_y_min_z" | "min_x_min_y_max_z" | "min_x_max_y_min_z" | "min_x_max_y_max_z" | "max_x_min_y_min_z" | "max_x_min_y_max_z" | "max_x_max_y_min_z" | "max_x_max_y_max_z";
    export class $QuadCornerKicker implements $RenderContext$QuadTransform {
        setFacadeMask(arg0: number): void;
        setThickness(arg0: number): void;
        setBox(arg0: $AABB_): void;
        transform(arg0: $MutableQuadView): boolean;
        setSide(arg0: number): void;
        static horizonals: number[][];
        static INSTANCE: $QuadCornerKicker;
        constructor();
        set facadeMask(value: number);
        set thickness(value: number);
        set box(value: $AABB_);
        set side(value: number);
    }
    export class $QuadReInterpolator implements $RenderContext$QuadTransform {
        interpUVFrom(arg0: $MutableQuadView, arg1: number): void;
        interpLightMapFrom(arg0: $MutableQuadView, arg1: number): void;
        setInputQuad(arg0: $QuadView): void;
        interpColorFrom(arg0: $MutableQuadView, arg1: number): void;
        transform(arg0: $MutableQuadView): boolean;
        constructor();
        set inputQuad(value: $QuadView);
    }
}
