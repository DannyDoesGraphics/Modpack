import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Enum } from "@package/java/lang";
import { $EMFModelPart } from "@package/traben/entity_model_features/models/parts";

declare module "@package/traben/entity_model_features/models/animation/math/variables" {
    export class $EMFModelOrRenderVariable extends $Enum<$EMFModelOrRenderVariable> {
        static getRenderVariable(id: string): $EMFModelOrRenderVariable;
        isRenderVariable(): boolean;
        static get(id: string): $EMFModelOrRenderVariable;
        static values(): $EMFModelOrRenderVariable[];
        static valueOf(name: string): $EMFModelOrRenderVariable;
        getValue(): number;
        getValue(arg0: $ModelPart): number;
        setValue(arg0: $EMFModelPart, arg1: number): void;
        isBoolean(): boolean;
        static TX: $EMFModelOrRenderVariable;
        static RENDER_shadow_size: $EMFModelOrRenderVariable;
        static RENDER_SHADOW_OPACITY: $EMFModelOrRenderVariable;
        static TY: $EMFModelOrRenderVariable;
        static SX: $EMFModelOrRenderVariable;
        static TZ: $EMFModelOrRenderVariable;
        static RX: $EMFModelOrRenderVariable;
        static SY: $EMFModelOrRenderVariable;
        static RY: $EMFModelOrRenderVariable;
        static SZ: $EMFModelOrRenderVariable;
        static RZ: $EMFModelOrRenderVariable;
        static RENDER_SHADOW_X: $EMFModelOrRenderVariable;
        static VISIBLE: $EMFModelOrRenderVariable;
        static RENDER_SHADOW_Z: $EMFModelOrRenderVariable;
        static RENDER_LEASH_X: $EMFModelOrRenderVariable;
        static RENDER_LEASH_Y: $EMFModelOrRenderVariable;
        static RENDER_LEASH_Z: $EMFModelOrRenderVariable;
        static VISIBLE_BOXES: $EMFModelOrRenderVariable;
        get boolean(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EMFModelOrRenderVariable}.
     */
    export type $EMFModelOrRenderVariable_ = "tx" | "ty" | "tz" | "rx" | "ry" | "rz" | "sx" | "sy" | "sz" | "visible" | "visible_boxes" | "render_shadow_size" | "render_shadow_opacity" | "render_shadow_x" | "render_shadow_z" | "render_leash_x" | "render_leash_y" | "render_leash_z";
}
