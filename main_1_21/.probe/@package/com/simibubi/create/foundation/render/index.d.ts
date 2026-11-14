import { $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $ScrollInstance, $ScrollTransformedInstance } from "@package/com/simibubi/create/content/processing/burner";
import { $InstanceType } from "@package/dev/engine_room/flywheel/api/instance";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $RenderStateShard$TexturingStateShard, $RenderStateShard$TransparencyStateShard, $RenderStateShard$OutputStateShard, $MultiBufferSource_, $RenderStateShard$WriteMaskStateShard, $RenderStateShard$LineStateShard, $RenderStateShard$OverlayStateShard, $RenderType, $RenderStateShard$CullStateShard, $RenderStateShard$EmptyTextureStateShard, $RenderStateShard$ShaderStateShard, $RenderStateShard, $RenderStateShard$DepthTestStateShard, $RenderStateShard$LightmapStateShard, $RenderStateShard$ColorLogicStateShard, $RenderStateShard$TextureStateShard, $RenderStateShard$LayeringStateShard } from "@package/net/minecraft/client/renderer";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BitSet, $UUID_, $Collection_, $List_ } from "@package/java/util";
import { $HumanoidModel } from "@package/net/minecraft/client/model";
import { $BiFunction } from "@package/java/util/function";
import { $RotatingInstance } from "@package/com/simibubi/create/content/kinetics/base";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Model } from "@package/dev/engine_room/flywheel/api/model";
import { $Record, $Runnable } from "@package/java/lang";
import { $LightShader_, $CardinalLightingMode_ } from "@package/dev/engine_room/flywheel/api/material";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $FluidInstance } from "@package/com/simibubi/create/content/fluids";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/com/simibubi/create/foundation/render" {
    export class $SpecialModels {
        static chunkDiffuse(arg0: $PartialModel): $Model;
        static flatLit(arg0: $PartialModel): $Model;
        static smoothLit(arg0: $PartialModel): $Model;
        static flatChunk(arg0: $PartialModel): $Model;
        constructor();
    }
    export class $MutableTemplateMesh extends $TemplateMesh {
        x(arg0: number, arg1: number): void;
        v(arg0: number, arg1: number): void;
        z(arg0: number, arg1: number): void;
        u(arg0: number, arg1: number): void;
        y(arg0: number, arg1: number): void;
        color(arg0: number, arg1: number): void;
        normal(arg0: number, arg1: number): void;
        copyFrom(arg0: number, arg1: $TemplateMesh): void;
        toImmutable(): $TemplateMesh;
        overlay(arg0: number, arg1: number): void;
        light(arg0: number, arg1: number): void;
        static NORMAL_OFFSET: number;
        static LIGHT_OFFSET: number;
        static U_OFFSET: number;
        static V_OFFSET: number;
        static COLOR_OFFSET: number;
        static OVERLAY_OFFSET: number;
        static X_OFFSET: number;
        static Y_OFFSET: number;
        static BYTE_STRIDE: number;
        static Z_OFFSET: number;
        static INT_STRIDE: number;
        constructor(arg0: number[]);
        constructor(arg0: number);
    }
    export class $RenderTypes$Shaders {
    }
    export class $TemplateMesh {
        isEmpty(): boolean;
        x(arg0: number): number;
        v(arg0: number): number;
        z(arg0: number): number;
        u(arg0: number): number;
        y(arg0: number): number;
        color(arg0: number): number;
        normal(arg0: number): number;
        vertexCount(): number;
        overlay(arg0: number): number;
        light(arg0: number): number;
        static NORMAL_OFFSET: number;
        static LIGHT_OFFSET: number;
        static U_OFFSET: number;
        static V_OFFSET: number;
        static COLOR_OFFSET: number;
        static OVERLAY_OFFSET: number;
        static X_OFFSET: number;
        static Y_OFFSET: number;
        static BYTE_STRIDE: number;
        static Z_OFFSET: number;
        static INT_STRIDE: number;
        constructor(arg0: number[]);
        constructor(arg0: number);
        get empty(): boolean;
    }
    export class $SpecialModels$Key extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpecialModels$Key}.
     */
    export type $SpecialModels$Key_ = { cardinalLightingMode?: $CardinalLightingMode_, partial?: $PartialModel, light?: $LightShader_,  } | [cardinalLightingMode?: $CardinalLightingMode_, partial?: $PartialModel, light?: $LightShader_, ];
    export class $ShadowRenderHelper {
        static renderShadow(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $LevelReader, arg3: $Vec3_, arg4: number, arg5: number): void;
        static renderShadow(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number): void;
        constructor();
    }
    export class $RenderTypes extends $RenderStateShard {
        static entitySolidBlockMipped(): $RenderType;
        static entityCutoutBlockMipped(): $RenderType;
        static entityTranslucentBlockMipped(): $RenderType;
        static itemGlowingSolid(): $RenderType;
        static itemGlowingTranslucent(): $RenderType;
        static chain(arg0: $ResourceLocation_): $RenderType;
        static additive(): $RenderType;
        static RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_DECAL_SHADER: $RenderStateShard$ShaderStateShard;
        static GLOWING_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_ALPHA_SHADER: $RenderStateShard$ShaderStateShard;
        static PARTICLES_TARGET: $RenderStateShard$OutputStateShard;
        static RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_LIGHTNING_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_SOLID_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_GUI_OVERLAY_SHADER: $RenderStateShard$ShaderStateShard;
        static NO_TEXTURE: $RenderStateShard$EmptyTextureStateShard;
        static LIGHTNING_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        setupState: $Runnable;
        static GLINT_TEXTURING: $RenderStateShard$TexturingStateShard;
        static ENTITY_GLINT_TEXTURING: $RenderStateShard$TexturingStateShard;
        static RENDERTYPE_END_GATEWAY_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_TEXT_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_OUTLINE_SHADER: $RenderStateShard$ShaderStateShard;
        static POSITION_TEX_SHADER: $RenderStateShard$ShaderStateShard;
        static LIGHTMAP: $RenderStateShard$LightmapStateShard;
        static RENDERTYPE_ENTITY_CUTOUT_SHADER: $RenderStateShard$ShaderStateShard;
        static ADDITIVE_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        static RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER: $RenderStateShard$ShaderStateShard;
        static DEFAULT_LINE: $RenderStateShard$LineStateShard;
        static RENDERTYPE_GUI_SHADER: $RenderStateShard$ShaderStateShard;
        static OUTLINE_TARGET: $RenderStateShard$OutputStateShard;
        static RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER: $RenderStateShard$ShaderStateShard;
        static NO_DEPTH_TEST: $RenderStateShard$DepthTestStateShard;
        static RENDERTYPE_ENTITY_TRANSLUCENT_SHADER: $RenderStateShard$ShaderStateShard;
        static POLYGON_OFFSET_LAYERING: $RenderStateShard$LayeringStateShard;
        static NO_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_TEXT_SEE_THROUGH_SHADER: $RenderStateShard$ShaderStateShard;
        static CULL: $RenderStateShard$CullStateShard;
        static OR_REVERSE_COLOR_LOGIC: $RenderStateShard$ColorLogicStateShard;
        static NO_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        static VIEW_OFFSET_Z_LAYERING: $RenderStateShard$LayeringStateShard;
        static NO_LAYERING: $RenderStateShard$LayeringStateShard;
        static RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER: $RenderStateShard$ShaderStateShard;
        static TRAIN_MAP: $BiFunction<$ResourceLocation, boolean, $RenderType>;
        static RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_LEASH_SHADER: $RenderStateShard$ShaderStateShard;
        static NO_OVERLAY: $RenderStateShard$OverlayStateShard;
        static NO_CULL: $RenderStateShard$CullStateShard;
        static RENDERTYPE_CLOUDS_SHADER: $RenderStateShard$ShaderStateShard;
        static POSITION_COLOR_TEX_LIGHTMAP_SHADER: $RenderStateShard$ShaderStateShard;
        static POSITION_COLOR_LIGHTMAP_SHADER: $RenderStateShard$ShaderStateShard;
        static TRANSLUCENT_TARGET: $RenderStateShard$OutputStateShard;
        static OVERLAY: $RenderStateShard$OverlayStateShard;
        static TRANSLUCENT_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        static RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_GLINT_SHADER: $RenderStateShard$ShaderStateShard;
        static POSITION_COLOR_SHADER: $RenderStateShard$ShaderStateShard;
        static CRUMBLING_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        static RENDERTYPE_CRUMBLING_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_EYES_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_WATER_MASK_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_CUTOUT_SHADER: $RenderStateShard$ShaderStateShard;
        static COLOR_DEPTH_WRITE: $RenderStateShard$WriteMaskStateShard;
        static RENDERTYPE_TRIPWIRE_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_SHADOW_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_TEXT_BACKGROUND_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_TRANSLUCENT_SHADER: $RenderStateShard$ShaderStateShard;
        static NO_COLOR_LOGIC: $RenderStateShard$ColorLogicStateShard;
        name: string;
        static RENDERTYPE_ENERGY_SWIRL_SHADER: $RenderStateShard$ShaderStateShard;
        static POSITION_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_GLINT_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_BEACON_BEAM_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_CUTOUT_MIPPED_SHADER: $RenderStateShard$ShaderStateShard;
        static DEPTH_WRITE: $RenderStateShard$WriteMaskStateShard;
        static CLOUDS_TARGET: $RenderStateShard$OutputStateShard;
        static NO_LIGHTMAP: $RenderStateShard$LightmapStateShard;
        static MAIN_TARGET: $RenderStateShard$OutputStateShard;
        static RENDERTYPE_GLINT_TRANSLUCENT_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_END_PORTAL_SHADER: $RenderStateShard$ShaderStateShard;
        static WEATHER_TARGET: $RenderStateShard$OutputStateShard;
        static LEQUAL_DEPTH_TEST: $RenderStateShard$DepthTestStateShard;
        static RENDERTYPE_LINES_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_BREEZE_WIND_SHADER: $RenderStateShard$ShaderStateShard;
        static BLOCK_SHEET_MIPPED: $RenderStateShard$TextureStateShard;
        static RENDERTYPE_ENTITY_SOLID_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_NO_OUTLINE_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER: $RenderStateShard$ShaderStateShard;
        static COLOR_WRITE: $RenderStateShard$WriteMaskStateShard;
        static ITEM_ENTITY_TARGET: $RenderStateShard$OutputStateShard;
        static RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER: $RenderStateShard$ShaderStateShard;
        static MAX_ENCHANTMENT_GLINT_SPEED_MILLIS: number;
        static DEFAULT_TEXTURING: $RenderStateShard$TexturingStateShard;
        static EQUAL_DEPTH_TEST: $RenderStateShard$DepthTestStateShard;
        static GLINT_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        static VIEW_SCALE_Z_EPSILON: number;
        clearState: $Runnable;
        static RENDERTYPE_TEXT_INTENSITY_SHADER: $RenderStateShard$ShaderStateShard;
        static GREATER_DEPTH_TEST: $RenderStateShard$DepthTestStateShard;
        static RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER: $RenderStateShard$ShaderStateShard;
        static BLOCK_SHEET: $RenderStateShard$TextureStateShard;
    }
    export class $BlockEntityRenderHelper {
        static renderBlockEntities(arg0: $List_<$BlockEntity>, arg1: $BitSet, arg2: $BitSet, arg3: $VirtualRenderWorld | null, arg4: $Level_, arg5: $PoseStack, arg6: $Matrix4f | null, arg7: $MultiBufferSource_, arg8: number): void;
        constructor();
    }
    export class $AllInstanceTypes {
        static init(): void;
        static SCROLLING_TRANSFORMED: $InstanceType<$ScrollTransformedInstance>;
        static FLUID: $InstanceType<$FluidInstance>;
        static ROTATING: $InstanceType<$RotatingInstance>;
        static SCROLLING: $InstanceType<$ScrollInstance>;
        constructor();
    }
    export class $PlayerSkyhookRenderer {
        static afterSetupAnim(arg0: $Player, arg1: $HumanoidModel<never>): void;
        static beforeSetupAnim(arg0: $Player, arg1: $HumanoidModel<never>): void;
        static updatePlayerList(arg0: $Collection_<$UUID_>): void;
        constructor();
    }
}
