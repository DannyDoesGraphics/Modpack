import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ForgeModelBlockRendererAccessor } from "@package/team/creative/creativecore/mixin";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ModelBlockRenderer, $ModelBlockRenderer$Cache } from "@package/net/minecraft/client/renderer/block";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $CreativeQuadLighter } from "@package/team/creative/creativecore/client/render/model";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $PoseStack, $VertexConsumer, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $ThreadLocal } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/client/model/lighting" {
    /**
     * Implementation of `QuadLighter` that lights quads with flat lighting.
     */
    export class $FlatQuadLighter extends $QuadLighter {
        customTint: number;
        constructor(colors: $BlockColors);
    }
    /**
     * Wrapper around `ModelBlockRenderer` to allow rendering blocks via Forge's lighting pipeline.
     */
    export class $LightPipelineAwareModelBlockRenderer extends $ModelBlockRenderer implements $ForgeModelBlockRendererAccessor {
        static render(vertexConsumer: $VertexConsumer, lighter: $QuadLighter, level: $BlockAndTintGetter, model: $BakedModel, state: $BlockState_, pos: $BlockPos_, poseStack: $PoseStack, checkSides: boolean, rand: $RandomSource, seed: number, packedOverlay: number, modelData: $ModelData, renderType: $RenderType): boolean;
        getQuadLighter(smooth: boolean): $QuadLighter;
        getFlatLighter(): $ThreadLocal<$QuadLighter>;
        getSmoothLighter(): $ThreadLocal<$QuadLighter>;
        static CACHE: $ThreadLocal<$ModelBlockRenderer$Cache>;
        constructor(colors: $BlockColors);
        get flatLighter(): $ThreadLocal<$QuadLighter>;
        get smoothLighter(): $ThreadLocal<$QuadLighter>;
    }
    /**
     * Implementation of `QuadLighter` that lights baked quads using ambient occlusion and
     * light interpolation.
     */
    export class $SmoothQuadLighter extends $QuadLighter {
        customTint: number;
        constructor(colors: $BlockColors);
    }
    /**
     * Base class for all quad lighting providers.
     * 
     * Contains all the shared elements needed for `BakedQuad` processing and defers lighting logic to inheritors.
     */
    export class $QuadLighter implements $CreativeQuadLighter {
        /**
         * Invalidate and reset any cached state of this lighter.
         */
        reset(): void;
        /**
         * Set up this lighter to light quads of the given block.
         */
        setup(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_): void;
        process(consumer: $VertexConsumer, pose: $PoseStack$Pose, quad: $BakedQuad, overlay: number): void;
        static calculateShade(normalX: number, normalY: number, normalZ: number, constantAmbientLight: boolean): number;
        /**
         * Compute the brightness and lightmap values for each vertex of this quad. After a call to this method, the
         * values may be accessed using `QuadLighter#getComputedBrightness()` and `QuadLighter#getComputedLightmap()`.
         */
        computeLightingForQuad(quad: $BakedQuad): void;
        /**
         * Compute the brightness and lightmap values for each vertex of this quad. After a call to this method, the
         * values may be accessed using `QuadLighter#getComputedBrightness()` and `QuadLighter#getComputedLightmap()`.
         * 
         * This overload allows cleanly reusing the same vertex data array many times.
         */
        computeLightingForQuad(vertices: number[], isShade: boolean): void;
        /**
         * Returns the computed brightness for each vertex of this quad.
         * 
         * The returned array is only valid until this lighter is asked to light another quad.
         */
        getComputedBrightness(): number[];
        /**
         * Returns the computed lightmap for each vertex of this quad.
         * 
         * The returned array is only valid until this lighter is asked to light another quad.
         */
        getComputedLightmap(): number[];
        handler$emm000$creativecore$getColorMultiplierHook(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        setCustomTint(arg0: number): void;
        setState(arg0: $BlockState_): void;
        customTint: number;
        get computedBrightness(): number[];
        get computedLightmap(): number[];
        set state(value: $BlockState_);
    }
}
