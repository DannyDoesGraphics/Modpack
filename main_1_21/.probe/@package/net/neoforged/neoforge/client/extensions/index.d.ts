import { $KeyModifier, $KeyModifier_, $IKeyConflictContext } from "@package/net/neoforged/neoforge/client/settings";
import { $RenderType, $LightTexture } from "@package/net/minecraft/client/renderer";
import { $ModelState, $BakedModel, $ModelResourceLocation_, $Material, $UnbakedModel } from "@package/net/minecraft/client/resources/model";
import { $KeyMapping, $Camera } from "@package/net/minecraft/client";
import { $List, $Locale } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Function_, $Function } from "@package/java/util/function";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkRenderTypeSet } from "@package/net/neoforged/neoforge/client";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Runnable_ } from "@package/java/lang";
import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $Component_, $FormattedText, $Component } from "@package/net/minecraft/network/chat";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack, $VertexFormatElement_, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Font } from "@package/net/minecraft/client/gui";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $Transformation } from "@package/com/mojang/math";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix4f, $Vector3f, $Matrix3f } from "@package/org/joml";
export * as common from "@package/net/neoforged/neoforge/client/extensions/common";

declare module "@package/net/neoforged/neoforge/client/extensions" {
    export class $IBlockEntityRendererExtension<T extends $BlockEntity> {
    }
    export interface $IBlockEntityRendererExtension<T extends $BlockEntity> {
        getRenderBoundingBox(arg0: T): $AABB;
    }
    /**
     * Extension interface for `PoseStack`.
     */
    export class $IPoseStackExtension {
    }
    export interface $IPoseStackExtension {
        /**
         * Pushes and applies the `transformation` to this pose stack.
         * 
         * The effects of this method can be reversed by a corresponding `PoseStack#popPose()` call.
         */
        pushTransformation(transformation: $Transformation): void;
    }
    export class $ModelStateExtension {
    }
    export interface $ModelStateExtension {
        /**
         * @return whether this model state may apply a rotation that is not a multiple of 90 degrees
         */
        mayApplyArbitraryRotation(): boolean;
    }
    /**
     * Extension type for the `MenuProvider` interface.
     */
    export class $IMenuProviderExtension {
    }
    export interface $IMenuProviderExtension {
        /**
         * @return `true` if the existing container should be closed on the client side when opening a new one, `false` otherwise
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
    }
    /**
     * Extension interface for `Minecraft`.
     */
    export class $IMinecraftExtension {
    }
    export interface $IMinecraftExtension {
        /**
         * Retrieves the `Locale` set by the player.
         * Useful for creating string and number formatters.
         */
        getLocale(): $Locale;
        /**
         * Pushes a screen as a new GUI layer.
         */
        pushGuiLayer(screen: $Screen): void;
        /**
         * Pops a GUI layer from the screen.
         */
        popGuiLayer(): void;
        get locale(): $Locale;
    }
    /**
     * Extension interface for `VertexConsumer`.
     */
    export class $IVertexConsumerExtension {
    }
    export interface $IVertexConsumerExtension {
        /**
         * Variant with no per-vertex shading.
         */
        putBulkData(pose: $PoseStack$Pose, bakedQuad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number, readExistingColor: boolean): void;
        applyBakedLighting(packedLight: number, data: $ByteBuffer): number;
        applyBakedNormals(generated: $Vector3f, data: $ByteBuffer, normalTransform: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
    }
    /**
     * Extension interface for `BakedModel`.
     */
    export class $IBakedModelExtension {
    }
    export interface $IBakedModelExtension {
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        /**
         * Gets an ordered list of render types to use when drawing this item.
         * All render types using the `DefaultVertexFormat#NEW_ENTITY` format are supported.
         * 
         * This method will only be called on the models returned by `#getRenderPasses(ItemStack, boolean)`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        /**
         * Gets an ordered list of render types to use when drawing this item.
         * All render types using the `DefaultVertexFormat#NEW_ENTITY` format are supported.
         * 
         * This method will only be called on the models returned by `#getRenderPasses(ItemStack, boolean)`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        /**
         * A null `RenderType` is used for the breaking overlay as well as non-standard rendering, so models should return all their quads.
         */
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource, data: $ModelData, renderType: $RenderType): $List<$BakedQuad>;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
    }
    /**
     * Extension interface for `DimensionSpecialEffects`.
     */
    export class $IDimensionSpecialEffectsExtension {
    }
    export interface $IDimensionSpecialEffectsExtension {
        /**
         * Renders the snow and rain effects of this dimension.
         */
        renderSnowAndRain(level: $ClientLevel, ticks: number, partialTick: number, lightTexture: $LightTexture, camX: number, camY: number, camZ: number): boolean;
        /**
         * Renders the sky of this dimension.
         */
        renderSky(level: $ClientLevel, ticks: number, partialTick: number, modelViewMatrix: $Matrix4f, camera: $Camera, projectionMatrix: $Matrix4f, isFoggy: boolean, setupFog: $Runnable_): boolean;
        /**
         * Allows for manipulating the coloring of the lightmap texture.
         * Will be called for each 16*16 combination of sky/block light values.
         */
        adjustLightmapColors(level: $ClientLevel, partialTicks: number, skyDarken: number, blockLightRedFlicker: number, skyLight: number, pixelX: number, pixelY: number, colors: $Vector3f): void;
        /**
         * Renders the clouds of this dimension.
         */
        renderClouds(level: $ClientLevel, ticks: number, partialTick: number, poseStack: $PoseStack, camX: number, camY: number, camZ: number, modelViewMatrix: $Matrix4f, projectionMatrix: $Matrix4f): boolean;
        /**
         * Ticks the rain of this dimension.
         */
        tickRain(level: $ClientLevel, ticks: number, camera: $Camera): boolean;
    }
    /**
     * Extension interface for `AbstractWidget`.
     */
    export class $IAbstractWidgetExtension {
    }
    export interface $IAbstractWidgetExtension {
        /**
         * Handles the logic for when this widget is clicked. Vanilla calls this after `AbstractWidget#mouseClicked(double, double, int)` validates that:
         * 
         * - this widget is active and visible
         * - the button can be handled by this widget
         * - the mouse is over this widget
         */
        onClick(mouseX: number, mouseY: number, button: number): void;
    }
    /**
     * Extension interface for `KeyMapping`.
     */
    export class $IKeyMappingExtension {
    }
    export interface $IKeyMappingExtension {
        getKey(): $InputConstants$Key;
        /**
         * @return the display name of this key mapping
         * Defaults to a translatable component of the name.
         */
        getDisplayName(): $Component;
        setToDefault(): void;
        isConflictContextAndModifierActive(): boolean;
        /**
         * @return true if the key conflict context and modifier are active and the keyCode matches this binding, false otherwise
         */
        isActiveAndMatches(keyCode: $InputConstants$Key): boolean;
        getKeyConflictContext(): $IKeyConflictContext;
        getKeyModifier(): $KeyModifier;
        getDefaultKeyModifier(): $KeyModifier;
        setKeyConflictContext(keyConflictContext: $IKeyConflictContext): void;
        setKeyModifierAndCode(keyModifier: $KeyModifier_, keyCode: $InputConstants$Key): void;
        /**
         * Returns true when one of the bindings' key codes conflicts with the other's modifier.
         */
        hasKeyModifierConflict(other: $KeyMapping): boolean;
        get key(): $InputConstants$Key;
        get displayName(): $Component;
        get conflictContextAndModifierActive(): boolean;
        get keyModifier(): $KeyModifier;
        get defaultKeyModifier(): $KeyModifier;
    }
    /**
     * Extension interface for `GuiGraphics`.
     */
    export class $IGuiGraphicsExtension {
        static DEFAULT_BORDER_COLOR_START: number;
        static TEXT_COLOR_CODES: number[];
        static UNDO_CHAR: string;
        static DEFAULT_BACKGROUND_COLOR: number;
        static VALID: string;
        static DEFAULT_BORDER_COLOR_END: number;
        static INVALID: string;
        static RESET_CHAR: string;
    }
    export interface $IGuiGraphicsExtension {
        /**
         * Draws a textured box of any size (smallest size is borderSize * 2 square)
         * based on a fixed size textured box with continuous borders and filler.
         */
        blitWithBorder(texture: $ResourceLocation_, x: number, y: number, u: number, v: number, width: number, height: number, textureWidth: number, textureHeight: number, topBorder: number, bottomBorder: number, leftBorder: number, rightBorder: number): void;
        /**
         * Draws a textured box of any size (smallest size is borderSize * 2 square)
         * based on a fixed size textured box with continuous borders and filler.
         */
        blitWithBorder(texture: $ResourceLocation_, x: number, y: number, u: number, v: number, width: number, height: number, textureWidth: number, textureHeight: number, borderSize: number): void;
        blitInscribed(texture: $ResourceLocation_, x: number, y: number, boundsWidth: number, boundsHeight: number, rectWidth: number, rectHeight: number): void;
        blitInscribed(texture: $ResourceLocation_, x: number, y: number, boundsWidth: number, boundsHeight: number, rectWidth: number, rectHeight: number, centerX: boolean, centerY: boolean): void;
        getColorFromFormattingCharacter(c: string, isLighter: boolean): number;
        /**
         * Draws a left-aligned string, with a scrolling effect if the string is too long.
         */
        drawScrollingString(font: $Font, text: $Component_, minX: number, maxX: number, y: number, color: number): number;
    }
    /**
     * Extension interface for `Font`.
     */
    export class $IFontExtension {
        static ELLIPSIS: $FormattedText;
    }
    export interface $IFontExtension {
        /**
         * If the width of the text exceeds `maxWidth`, an ellipse is added and the text is substringed.
         */
        ellipsize(text: $FormattedText, maxWidth: number): $FormattedText;
        self(): $Font;
    }
    /**
     * Values that may be interpreted as {@link $IFontExtension}.
     */
    export type $IFontExtension_ = (() => $Font);
    export class $IModelBakerExtension {
    }
    export interface $IModelBakerExtension {
        getTopLevelModel(location: $ModelResourceLocation_): $UnbakedModel;
        bakeUncached(model: $UnbakedModel, state: $ModelState, sprites: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        getModelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
        bake(location: $ResourceLocation_, state: $ModelState, sprites: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        get modelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
    }
}
