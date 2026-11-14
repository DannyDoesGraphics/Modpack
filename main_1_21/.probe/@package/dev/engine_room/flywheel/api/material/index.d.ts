import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";

declare module "@package/dev/engine_room/flywheel/api/material" {
    export class $CardinalLightingMode extends $Enum<$CardinalLightingMode> {
        static values(): $CardinalLightingMode[];
        static valueOf(name: string): $CardinalLightingMode;
        static ENTITY: $CardinalLightingMode;
        static OFF: $CardinalLightingMode;
        static CHUNK: $CardinalLightingMode;
    }
    /**
     * Values that may be interpreted as {@link $CardinalLightingMode}.
     */
    export type $CardinalLightingMode_ = "off" | "chunk" | "entity";
    export class $FogShader {
    }
    export interface $FogShader {
        source(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $FogShader}.
     */
    export type $FogShader_ = (() => $ResourceLocation_);
    export class $WriteMask extends $Enum<$WriteMask> {
        static values(): $WriteMask[];
        static valueOf(name: string): $WriteMask;
        depth(): boolean;
        color(): boolean;
        static COLOR: $WriteMask;
        static COLOR_DEPTH: $WriteMask;
        static DEPTH: $WriteMask;
    }
    /**
     * Values that may be interpreted as {@link $WriteMask}.
     */
    export type $WriteMask_ = "color_depth" | "color" | "depth";
    export class $Transparency extends $Enum<$Transparency> {
        static values(): $Transparency[];
        static valueOf(name: string): $Transparency;
        static ORDER_INDEPENDENT: $Transparency;
        static CRUMBLING: $Transparency;
        static OPAQUE: $Transparency;
        static ADDITIVE: $Transparency;
        static GLINT: $Transparency;
        static TRANSLUCENT: $Transparency;
        static LIGHTNING: $Transparency;
    }
    /**
     * Values that may be interpreted as {@link $Transparency}.
     */
    export type $Transparency_ = "opaque" | "additive" | "lightning" | "glint" | "crumbling" | "translucent" | "order_independent";
    export class $Material {
    }
    export interface $Material {
        cardinalLightingMode(): $CardinalLightingMode;
        backfaceCulling(): boolean;
        depthTest(): $DepthTest;
        writeMask(): $WriteMask;
        useOverlay(): boolean;
        useLight(): boolean;
        shaders(): $MaterialShaders;
        texture(): $ResourceLocation;
        equals(other: $Material): boolean;
        fog(): $FogShader;
        polygonOffset(): boolean;
        blur(): boolean;
        mipmap(): boolean;
        ambientOcclusion(): boolean;
        light(): $LightShader;
        cutout(): $CutoutShader;
        transparency(): $Transparency;
    }
    export class $LightShader {
    }
    export interface $LightShader {
        source(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $LightShader}.
     */
    export type $LightShader_ = (() => $ResourceLocation_);
    export class $DepthTest extends $Enum<$DepthTest> {
        static values(): $DepthTest[];
        static valueOf(name: string): $DepthTest;
        static NOTEQUAL: $DepthTest;
        static EQUAL: $DepthTest;
        static NEVER: $DepthTest;
        static GEQUAL: $DepthTest;
        static GREATER: $DepthTest;
        static LESS: $DepthTest;
        static LEQUAL: $DepthTest;
        static ALWAYS: $DepthTest;
        static OFF: $DepthTest;
    }
    /**
     * Values that may be interpreted as {@link $DepthTest}.
     */
    export type $DepthTest_ = "off" | "never" | "less" | "equal" | "lequal" | "greater" | "notequal" | "gequal" | "always";
    export class $MaterialShaders {
    }
    export interface $MaterialShaders {
        fragmentSource(): $ResourceLocation;
        vertexSource(): $ResourceLocation;
    }
    export class $CutoutShader {
    }
    export interface $CutoutShader {
        source(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $CutoutShader}.
     */
    export type $CutoutShader_ = (() => $ResourceLocation_);
}
