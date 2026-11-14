import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $TriState } from "@package/net/fabricmc/fabric/api/util";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";

declare module "@package/net/fabricmc/fabric/api/renderer/v1/material" {
    export class $BlendMode extends $Enum<$BlendMode> {
        static fromRenderLayer(arg0: $RenderType): $BlendMode;
        static values(): $BlendMode[];
        static valueOf(arg0: string): $BlendMode;
        static CUTOUT: $BlendMode;
        static TRANSLUCENT: $BlendMode;
        static CUTOUT_MIPPED: $BlendMode;
        static SOLID: $BlendMode;
        static DEFAULT: $BlendMode;
        blockRenderLayer: $RenderType;
    }
    /**
     * Values that may be interpreted as {@link $BlendMode}.
     */
    export type $BlendMode_ = "default" | "solid" | "cutout_mipped" | "cutout" | "translucent";
    export class $ShadeMode extends $Enum<$ShadeMode> {
        static values(): $ShadeMode[];
        static valueOf(arg0: string): $ShadeMode;
        static ENHANCED: $ShadeMode;
        static VANILLA: $ShadeMode;
    }
    /**
     * Values that may be interpreted as {@link $ShadeMode}.
     */
    export type $ShadeMode_ = "enhanced" | "vanilla";
    export class $MaterialView {
    }
    export interface $MaterialView {
        emissive(): boolean;
        blendMode(): $BlendMode;
        disableColorIndex(): boolean;
        disableDiffuse(): boolean;
        shadeMode(): $ShadeMode;
        ambientOcclusion(): $TriState;
        glint(): $TriState;
    }
    export class $RenderMaterial {
        static MATERIAL_STANDARD: $ResourceLocation;
    }
    export interface $RenderMaterial extends $MaterialView {
        /**
         * @deprecated
         */
        spriteDepth(): number;
    }
}
