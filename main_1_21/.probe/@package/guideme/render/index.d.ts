import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_, $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $GuiSpriteScaling } from "@package/net/minecraft/client/resources/metadata/gui";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $LytRect, $LytRect_, $LytSize } from "@package/guideme/document";
import { $ResolvedTextStyle_ } from "@package/guideme/style";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite, $AbstractTexture } from "@package/net/minecraft/client/renderer/texture";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec2 } from "@package/net/minecraft/world/phys";
import { $MutableColor, $LightDarkMode, $ColorValue_, $LightDarkMode_ } from "@package/guideme/color";

declare module "@package/guideme/render" {
    export class $GuidePageTexture {
        static releaseUsedTextures(): void;
        static load(arg0: $ResourceLocation_, arg1: number[]): $GuidePageTexture;
        getId(): $ResourceLocation;
        getSize(): $LytSize;
        use(): $AbstractTexture;
        static missing(): $GuidePageTexture;
        get id(): $ResourceLocation;
        get size(): $LytSize;
    }
    export class $RenderContext {
    }
    export interface $RenderContext {
        fillGradientVertical(arg0: $LytRect_, arg1: $ColorValue_, arg2: $ColorValue_): void;
        fillGradientVertical(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ColorValue_, arg5: $ColorValue_): void;
        fillGradientHorizontal(arg0: $LytRect_, arg1: $ColorValue_, arg2: $ColorValue_): void;
        fillGradientHorizontal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ColorValue_, arg5: $ColorValue_): void;
        resolveColor(arg0: $ColorValue_): number;
        renderPanel(arg0: $LytRect_): void;
        lightDarkMode(): $LightDarkMode;
        fillTriangle(arg0: $Vec2, arg1: $Vec2, arg2: $Vec2, arg3: $ColorValue_): void;
        poseStack(): $PoseStack;
        renderFluid(arg0: $Fluid_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        renderFluid(arg0: $FluidStack_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        pushScissor(arg0: $LytRect_): void;
        popScissor(): void;
        beginBatch(): $MultiBufferSource$BufferSource;
        intersectsViewport(arg0: $LytRect_): boolean;
        fillTexturedRect(arg0: $LytRect_, arg1: $GuidePageTexture, arg2: $ColorValue_): void;
        fillTexturedRect(arg0: $LytRect_, arg1: $TextureAtlasSprite, arg2: $ColorValue_): void;
        fillTexturedRect(arg0: $LytRect_, arg1: $ResourceLocation_): void;
        fillTexturedRect(arg0: $LytRect_, arg1: $ResourceLocation_, arg2: $ColorValue_): void;
        fillTexturedRect(arg0: $LytRect_, arg1: $AbstractTexture, arg2: $ColorValue_, arg3: $ColorValue_, arg4: $ColorValue_, arg5: $ColorValue_): void;
        fillTexturedRect(arg0: $LytRect_, arg1: $AbstractTexture, arg2: $ColorValue_, arg3: $ColorValue_, arg4: $ColorValue_, arg5: $ColorValue_, arg6: number, arg7: number, arg8: number, arg9: number): void;
        fillTexturedRect(arg0: $LytRect_, arg1: $GuidePageTexture): void;
        fillTexturedRect(arg0: $LytRect_, arg1: $AbstractTexture): void;
        fillTexturedRect(arg0: $LytRect_, arg1: $AbstractTexture, arg2: $ColorValue_): void;
        renderTextInBatch(arg0: string, arg1: $ResolvedTextStyle_, arg2: number, arg3: number, arg4: $MultiBufferSource_): void;
        mutableColor(arg0: $ColorValue_): $MutableColor;
        fillIcon(arg0: $LytRect_, arg1: $GuiSprite): void;
        fillIcon(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $GuiSprite): void;
        fillIcon(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $GuiSprite, arg5: $ColorValue_): void;
        fillIcon(arg0: $LytRect_, arg1: $GuiSprite, arg2: $ColorValue_): void;
        fillIcon(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $TextureAtlasSprite, arg5: $ColorValue_): void;
        renderText(arg0: string, arg1: $ResolvedTextStyle_, arg2: number, arg3: number): void;
        getAdvance(arg0: number, arg1: $ResolvedTextStyle_): number;
        font(): $Font;
        guiGraphics(): $GuiGraphics;
        endBatch(arg0: $MultiBufferSource$BufferSource): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        viewport(): $LytRect;
        drawIcon(arg0: number, arg1: number, arg2: $GuiSprite, arg3: $ColorValue_): void;
        drawIcon(arg0: number, arg1: number, arg2: $GuiSprite): void;
        drawIcon(arg0: number, arg1: number, arg2: $TextureAtlasSprite, arg3: $ColorValue_): void;
        fillRect(arg0: $LytRect_, arg1: $ColorValue_, arg2: $ColorValue_, arg3: $ColorValue_, arg4: $ColorValue_): void;
        fillRect(arg0: $LytRect_, arg1: $ColorValue_): void;
        fillRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ColorValue_): void;
        isDarkMode(): boolean;
        renderTextCenteredIn(arg0: string, arg1: $ResolvedTextStyle_, arg2: $LytRect_): void;
        getWidth(arg0: string, arg1: $ResolvedTextStyle_): number;
        get darkMode(): boolean;
    }
    export class $GuiSprite {
        spriteScaling(): $GuiSpriteScaling;
        atlasSprite(arg0: $LightDarkMode_): $TextureAtlasSprite;
        get(arg0: $LightDarkMode_): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    export class $SimpleRenderContext implements $RenderContext {
        resolveColor(arg0: $ColorValue_): number;
        lightDarkMode(): $LightDarkMode;
        fillTriangle(arg0: $Vec2, arg1: $Vec2, arg2: $Vec2, arg3: $ColorValue_): void;
        pushScissor(arg0: $LytRect_): void;
        popScissor(): void;
        fillTexturedRect(arg0: $LytRect_, arg1: $AbstractTexture, arg2: $ColorValue_, arg3: $ColorValue_, arg4: $ColorValue_, arg5: $ColorValue_, arg6: number, arg7: number, arg8: number, arg9: number): void;
        guiGraphics(): $GuiGraphics;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        viewport(): $LytRect;
        fillRect(arg0: $LytRect_, arg1: $ColorValue_, arg2: $ColorValue_, arg3: $ColorValue_, arg4: $ColorValue_): void;
        fillGradientVertical(arg0: $LytRect_, arg1: $ColorValue_, arg2: $ColorValue_): void;
        fillGradientVertical(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ColorValue_, arg5: $ColorValue_): void;
        fillGradientHorizontal(arg0: $LytRect_, arg1: $ColorValue_, arg2: $ColorValue_): void;
        fillGradientHorizontal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ColorValue_, arg5: $ColorValue_): void;
        renderPanel(arg0: $LytRect_): void;
        poseStack(): $PoseStack;
        renderFluid(arg0: $Fluid_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        renderFluid(arg0: $FluidStack_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        beginBatch(): $MultiBufferSource$BufferSource;
        intersectsViewport(arg0: $LytRect_): boolean;
        fillTexturedRect(arg0: $LytRect_, arg1: $GuidePageTexture, arg2: $ColorValue_): void;
        fillTexturedRect(arg0: $LytRect_, arg1: $TextureAtlasSprite, arg2: $ColorValue_): void;
        fillTexturedRect(arg0: $LytRect_, arg1: $ResourceLocation_): void;
        fillTexturedRect(arg0: $LytRect_, arg1: $ResourceLocation_, arg2: $ColorValue_): void;
        fillTexturedRect(arg0: $LytRect_, arg1: $AbstractTexture, arg2: $ColorValue_, arg3: $ColorValue_, arg4: $ColorValue_, arg5: $ColorValue_): void;
        fillTexturedRect(arg0: $LytRect_, arg1: $GuidePageTexture): void;
        fillTexturedRect(arg0: $LytRect_, arg1: $AbstractTexture): void;
        fillTexturedRect(arg0: $LytRect_, arg1: $AbstractTexture, arg2: $ColorValue_): void;
        renderTextInBatch(arg0: string, arg1: $ResolvedTextStyle_, arg2: number, arg3: number, arg4: $MultiBufferSource_): void;
        mutableColor(arg0: $ColorValue_): $MutableColor;
        fillIcon(arg0: $LytRect_, arg1: $GuiSprite): void;
        fillIcon(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $GuiSprite): void;
        fillIcon(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $GuiSprite, arg5: $ColorValue_): void;
        fillIcon(arg0: $LytRect_, arg1: $GuiSprite, arg2: $ColorValue_): void;
        fillIcon(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $TextureAtlasSprite, arg5: $ColorValue_): void;
        renderText(arg0: string, arg1: $ResolvedTextStyle_, arg2: number, arg3: number): void;
        getAdvance(arg0: number, arg1: $ResolvedTextStyle_): number;
        font(): $Font;
        endBatch(arg0: $MultiBufferSource$BufferSource): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        drawIcon(arg0: number, arg1: number, arg2: $GuiSprite, arg3: $ColorValue_): void;
        drawIcon(arg0: number, arg1: number, arg2: $GuiSprite): void;
        drawIcon(arg0: number, arg1: number, arg2: $TextureAtlasSprite, arg3: $ColorValue_): void;
        fillRect(arg0: $LytRect_, arg1: $ColorValue_): void;
        fillRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ColorValue_): void;
        isDarkMode(): boolean;
        renderTextCenteredIn(arg0: string, arg1: $ResolvedTextStyle_, arg2: $LytRect_): void;
        getWidth(arg0: string, arg1: $ResolvedTextStyle_): number;
        constructor(arg0: $LytRect_, arg1: $GuiGraphics, arg2: $LightDarkMode_);
        constructor(arg0: $GuiGraphics);
        constructor(arg0: $LytRect_, arg1: $GuiGraphics);
        get darkMode(): boolean;
    }
}
