import { $Model } from "@package/net/minecraft/client/model";
import { $ETFEntityRenderState } from "@package/traben/entity_texture_features/features/state";
import { $RenderType, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $ETFConfig$EmissiveRenderModes_ } from "@package/traben/entity_texture_features/config";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Resource } from "@package/net/minecraft/server/packs/resources";
import { $SpriteContents, $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum } from "@package/java/lang";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";

declare module "@package/traben/entity_texture_features/features/texture_handlers" {
    export class $ETFSprite {
        getSpriteVariant(): $TextureAtlasSprite;
        getEmissive(): $TextureAtlasSprite;
        isEmissive(): boolean;
        static load(id: $ResourceLocation_, resource: $Resource): $SpriteContents;
        isETFAltered: boolean;
        constructor(originalSprite: $TextureAtlasSprite, etfTexture: $ETFTexture, isNotVariant: boolean);
        get spriteVariant(): $TextureAtlasSprite;
    }
    export class $ETFTexture$TextureReturnState extends $Enum<$ETFTexture$TextureReturnState> {
        static values(): $ETFTexture$TextureReturnState[];
        static valueOf(name: string): $ETFTexture$TextureReturnState;
        static BLINK_PATCHED: $ETFTexture$TextureReturnState;
        static BLINK2_PATCHED: $ETFTexture$TextureReturnState;
        static APPLY_BLINK: $ETFTexture$TextureReturnState;
        static BLINK2: $ETFTexture$TextureReturnState;
        static APPLY_BLINK2: $ETFTexture$TextureReturnState;
        static NORMAL_PATCHED: $ETFTexture$TextureReturnState;
        static BLINK: $ETFTexture$TextureReturnState;
        static APPLY_PATCH: $ETFTexture$TextureReturnState;
        static NORMAL: $ETFTexture$TextureReturnState;
    }
    /**
     * Values that may be interpreted as {@link $ETFTexture$TextureReturnState}.
     */
    export type $ETFTexture$TextureReturnState_ = "normal" | "normal_patched" | "blink" | "blink_patched" | "blink2" | "blink2_patched" | "apply_patch" | "apply_blink" | "apply_blink2";
    export class $ETFTexture {
        static patchTextureToRemoveZFightingWithOtherTexture(baseImage: $NativeImage, otherImage: $NativeImage): void;
        canPatch(): boolean;
        doesBlink(): boolean;
        doesBlink2(): boolean;
        getEmissiveVertexConsumer(vertexConsumerProvider: $MultiBufferSource_, model: $Model, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes_): $VertexConsumer;
        getEmissiveRenderLayer(model: $Model, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes_): $RenderType;
        getEmissiveRenderLayer(model: $Model): $RenderType;
        static ofUnmodifiable(identifier: $ResourceLocation_, emissiveIdentifier: $ResourceLocation_): $ETFTexture;
        getPaintingSprite(originalSprite: $TextureAtlasSprite, originalID: $ResourceLocation_): $ETFSprite;
        isEnchanted(): boolean;
        assertPatchedTextures(): void;
        getTextureIdentifier(entity: $ETFEntityRenderState): $ResourceLocation;
        renderEmissive(matrixStack: $PoseStack, vertexConsumerProvider: $MultiBufferSource_, modelPart: $ModelPart, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes_): void;
        renderEmissive(matrixStack: $PoseStack, vertexConsumerProvider: $MultiBufferSource_, model: $Model, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes_): void;
        renderEmissive(matrixStack: $PoseStack, vertexConsumerProvider: $MultiBufferSource_, model: $Model): void;
        renderEmissive(matrixStack: $PoseStack, vertexConsumerProvider: $MultiBufferSource_, modelPart: $ModelPart): void;
        getEmissiveIdentifierOfCurrentState(): $ResourceLocation;
        getEnchantIdentifierOfCurrentState(): $ResourceLocation;
        isEmissive(): boolean;
        static manual(modifiedSkinIdentifier: $ResourceLocation_, emissiveIdentifier: $ResourceLocation_, enchantIdentifier: $ResourceLocation_): $ETFTexture;
        static manual(modifiedSkinIdentifier: $ResourceLocation_, blinkIdentifier: $ResourceLocation_, blink2Identifier: $ResourceLocation_, emissiveIdentifier: $ResourceLocation_, blinkEmissiveIdentifier: $ResourceLocation_, blink2EmissiveIdentifier: $ResourceLocation_, enchantIdentifier: $ResourceLocation_, blinkenchantIdentifier: $ResourceLocation_, blink2enchantIdentifier: $ResourceLocation_, patchIdentifier: $ResourceLocation_, blinkpatchIdentifier: $ResourceLocation_, blink2patchIdentifier: $ResourceLocation_): $ETFTexture;
        exists(): boolean;
        setGUIBlink(): void;
        static PATCH_NAMESPACE_PREFIX: string;
        currentTextureState: $ETFTexture$TextureReturnState;
        thisIdentifier: $ResourceLocation;
        eSuffix: string;
        constructor(variantIdentifier: $ResourceLocation_);
        get enchanted(): boolean;
        get emissiveIdentifierOfCurrentState(): $ResourceLocation;
        get enchantIdentifierOfCurrentState(): $ResourceLocation;
        get emissive(): boolean;
    }
}
