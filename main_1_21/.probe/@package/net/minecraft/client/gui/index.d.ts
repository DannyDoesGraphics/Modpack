import { $DrawContextAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $MultiBufferSource, $MultiBufferSource$BufferSource, $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $SpectatorGui } from "@package/net/minecraft/client/gui/components/spectator";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FontAccessor, $GuiAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Minecraft, $DeltaTracker, $StringSplitter } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $GuiRenderStateSink } from "@package/dev/isxander/yacl3/gui/render";
import { $DrawContextInvoker } from "@package/io/wispforest/owo/mixin/ui";
import { $FormattedCharSequence, $FormattedCharSequence_, $RandomSource, $FormattedCharSink } from "@package/net/minecraft/util";
import { $Function_, $BooleanSupplier_, $Function } from "@package/java/util/function";
import { $GuiGraphicsAccessor } from "@package/io/wispforest/accessories/mixin/client";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IFontExtension, $IGuiGraphicsExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $ClientTooltipComponent, $ClientTooltipPositioner_ } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $MapId_, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TextureAtlasSprite, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $FontSet } from "@package/net/minecraft/client/gui/font";
import { $Enum, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_, $FormattedText, $Style } from "@package/net/minecraft/network/chat";
import { $BossHealthOverlay, $SubtitleOverlay, $DebugScreenOverlay, $PlayerTabOverlay, $ChatComponent } from "@package/net/minecraft/client/gui/components";
import { $GuiSpriteScaling$NineSlice_, $GuiSpriteScaling } from "@package/net/minecraft/client/resources/metadata/gui";
import { $ScreenRectangle_, $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MatrixStackTransformer } from "@package/io/wispforest/owo/ui/util";
import { $TextureAtlasHolder, $MapDecorationTextureManager } from "@package/net/minecraft/client/resources";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $Matrix4f, $Quaternionf } from "@package/org/joml";
export * as components from "@package/net/minecraft/client/gui/components";
export * as layouts from "@package/net/minecraft/client/gui/layouts";
export * as screens from "@package/net/minecraft/client/gui/screens";
export * as navigation from "@package/net/minecraft/client/gui/navigation";
export * as font from "@package/net/minecraft/client/gui/font";
export * as narration from "@package/net/minecraft/client/gui/narration";
export * as spectator from "@package/net/minecraft/client/gui/spectator";

declare module "@package/net/minecraft/client/gui" {
    export class $Font$StringRenderOutput implements $FormattedCharSink {
    }
    export class $GuiGraphics implements $IGuiGraphicsExtension, $GuiGraphicsAccessor, $MatrixStackTransformer, $DrawContextInvoker, $DrawContextAccessor, $GuiRenderStateSink {
        /**
         * Disables scissoring.
         */
        flush(): void;
        /**
         * Fills a rectangle with the specified color and z-level using the given render type and coordinates as the boundaries.
         */
        fill(renderType: $RenderType, minX: number, minY: number, maxX: number, maxY: number, z: number, color: number): void;
        /**
         * Fills a rectangle with the specified color using the given render type and coordinates as the boundaries.
         */
        fill(renderType: $RenderType, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        /**
         * Fills a rectangle with the specified color and z-level using the given coordinates as the boundaries.
         */
        fill(minX: number, minY: number, maxX: number, maxY: number, z: number, color: number): void;
        /**
         * Fills a rectangle with the specified color using the given coordinates as the boundaries.
         */
        fill(minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        /**
         * Sets the current rendering color.
         */
        setColor(red: number, green: number, blue: number, alpha: number): void;
        /**
         * @return returns the height of the GUI screen in pixels
         */
        guiWidth(): number;
        /**
         * @return returns the height of the GUI screen in pixels
         */
        guiHeight(): number;
        /**
         * Blits a portion of the texture specified by the atlas location onto the screen at the given position and dimensions with texture coordinates.
         */
        blit(atlasLocation: $ResourceLocation_, x: number, y: number, uOffset: number, vOffset: number, width: number, height: number, textureWidth: number, textureHeight: number): void;
        /**
         * Blits a portion of the texture specified by the atlas location onto the screen at the given position and dimensions with texture coordinates.
         */
        blit(atlasLocation: $ResourceLocation_, x: number, y: number, width: number, height: number, uOffset: number, vOffset: number, uWidth: number, vHeight: number, textureWidth: number, textureHeight: number): void;
        /**
         * Blits a portion of the texture specified by the atlas location onto the screen at the given coordinates.
         */
        blit(atlasLocation: $ResourceLocation_, x: number, y: number, uOffset: number, vOffset: number, uWidth: number, vHeight: number): void;
        /**
         * Blits a portion of the texture specified by the atlas location onto the screen at the given coordinates with a blit offset and texture coordinates.
         */
        blit(atlasLocation: $ResourceLocation_, x: number, y: number, blitOffset: number, uOffset: number, vOffset: number, uWidth: number, vHeight: number, textureWidth: number, textureHeight: number): void;
        /**
         * Blits a portion of the specified texture atlas sprite onto the screen at the given coordinates.
         */
        blit(x: number, y: number, blitOffset: number, width: number, height: number, sprite: $TextureAtlasSprite): void;
        /**
         * Blits a portion of the specified texture atlas sprite onto the screen at the given coordinates with a color tint.
         */
        blit(x: number, y: number, blitOffset: number, width: number, height: number, sprite: $TextureAtlasSprite, red: number, green: number, blue: number, alpha: number): void;
        /**
         * @return returns the PoseStack used for transformations and rendering.
         */
        pose(): $PoseStack;
        /**
         * @return returns the buffer source for rendering.
         */
        bufferSource(): $MultiBufferSource$BufferSource;
        /**
         * @deprecated
         * Executes a runnable while managing the render state. The render state is flushed before and after executing the runnable.
         */
        drawManaged(runnable: $Runnable_): void;
        /**
         * Enables scissoring with the specified screen coordinates.
         */
        hLine(minX: number, minY: number, maxX: number, maxY: number): void;
        /**
         * Draws a horizontal line from minX to maxX at the specified y-coordinate with the given color using the specified render type.
         */
        hLine(renderType: $RenderType, minX: number, maxX: number, y: number, color: number): void;
        /**
         * Enables scissoring with the specified screen coordinates.
         */
        vLine(minX: number, minY: number, maxX: number, maxY: number): void;
        /**
         * Draws a horizontal line from minX to maxX at the specified y-coordinate with the given color using the specified render type.
         */
        vLine(renderType: $RenderType, minX: number, maxX: number, y: number, color: number): void;
        /**
         * Enables scissoring with the specified screen coordinates.
         */
        enableScissor(minX: number, minY: number, maxX: number, maxY: number): void;
        /**
         * Disables scissoring.
         */
        disableScissor(): void;
        containsPointInScissor(x: number, y: number): boolean;
        /**
         * Fills a rectangle with a gradient color from colorFrom to colorTo at the specified z-level using the given coordinates as the boundaries.
         */
        fillGradient(x1: number, y1: number, x2: number, y2: number, z: number, colorFrom: number, colorTo: number): void;
        /**
         * Fills a rectangle with the specified color and z-level using the given coordinates as the boundaries.
         */
        fillGradient(minX: number, minY: number, maxX: number, maxY: number, z: number, color: number): void;
        /**
         * Fills a rectangle with a gradient color from colorFrom to colorTo at the specified z-level using the given render type and coordinates as the boundaries.
         */
        fillGradient(renderType: $RenderType, x1: number, y1: number, x2: number, y2: number, colorFrom: number, colorTo: number, z: number): void;
        /**
         * Fills a rectangle with the specified color using the given render type and coordinates as the boundaries.
         */
        fillRenderType(renderType: $RenderType, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        /**
         * Draws a centered string at the specified coordinates using the given font, text component, and color.
         */
        drawCenteredString(font: $Font, text: $Component_, x: number, y: number, color: number): void;
        /**
         * Draws a centered string at the specified coordinates using the given font, formatted character sequence, and color.
         */
        drawCenteredString(font: $Font, text: $FormattedCharSequence_, x: number, y: number, color: number): void;
        /**
         * Draws a centered string at the specified coordinates using the given font, text, and color.
         */
        drawCenteredString(font: $Font, text: string, x: number, y: number, color: number): void;
        drawString(arg0: $Font, arg1: string | null, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        /**
         * Draws a string at the specified coordinates using the given font, text, color, and drop shadow. Returns the width of the drawn string.
         * 
         * @return the width of the drawn string.
         */
        drawString(font: $Font, text: string | null, x: number, y: number, color: number, dropShadow: boolean): number;
        /**
         * Draws a formatted character sequence at the specified coordinates using the given font, text, and color. Returns the width of the drawn string.
         * 
         * @return the width of the drawn string.
         */
        drawString(font: $Font, text: $FormattedCharSequence_, x: number, y: number, color: number): number;
        /**
         * Draws a formatted character sequence at the specified coordinates using the given font, text, color, and drop shadow. Returns the width of the drawn string.
         * 
         * @return returns the width of the drawn string.
         */
        drawString(font: $Font, text: $FormattedCharSequence_, x: number, y: number, color: number, dropShadow: boolean): number;
        /**
         * Draws a component's visual order text at the specified coordinates using the given font, text component, and color.
         * 
         * @return the width of the drawn string.
         */
        drawString(font: $Font, text: $Component_, x: number, y: number, color: number): number;
        /**
         * Draws a string at the specified coordinates using the given font, text, and color. Returns the width of the drawn string.
         * 
         * @return the width of the drawn string.
         */
        drawString(font: $Font, text: string | null, x: number, y: number, color: number): number;
        /**
         * Draws a component's visual order text at the specified coordinates using the given font, text component, color, and drop shadow.
         * 
         * @return the width of the drawn string.
         */
        drawString(font: $Font, text: $Component_, x: number, y: number, color: number, dropShadow: boolean): number;
        /**
         * Draws a formatted text with word wrapping at the specified coordinates using the given font, text, line width, and color.
         */
        drawWordWrap(font: $Font, text: $FormattedText, x: number, y: number, lineWidth: number, color: number): void;
        drawStringWithBackdrop(font: $Font, text: $Component_, x: number, y: number, xOffset: number, color: number): number;
        blitSprite(sprite: $ResourceLocation_, x: number, y: number, width: number, height: number): void;
        blitSprite(sprite: $ResourceLocation_, x: number, y: number, blitOffset: number, width: number, height: number): void;
        blitSprite(sprite: $ResourceLocation_, textureWidth: number, textureHeight: number, uPosition: number, vPosition: number, x: number, y: number, uWidth: number, vHeight: number): void;
        blitSprite(sprite: $TextureAtlasSprite, textureWidth: number, textureHeight: number, uPosition: number, vPosition: number, x: number, y: number, blitOffset: number, uWidth: number, vHeight: number): void;
        blitSprite(sprite: $ResourceLocation_, textureWidth: number, textureHeight: number, uPosition: number, vPosition: number, x: number, y: number, blitOffset: number, uWidth: number, vHeight: number): void;
        /**
         * Fills a rectangle with the specified color using the given coordinates as the boundaries.
         */
        renderOutline(minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        blitTiledSprite(sprite: $TextureAtlasSprite, x: number, y: number, blitOffset: number, width: number, height: number, uPosition: number, vPosition: number, spriteWidth: number, spriteHeight: number, nineSliceWidth: number, nineSliceHeight: number): void;
        blitNineSlicedSprite(sprite: $TextureAtlasSprite, nineSlice: $GuiSpriteScaling$NineSlice_, x: number, y: number, blitOffset: number, width: number, height: number): void;
        /**
         * Renders an item stack for a living entity in a specific level at the specified coordinates with a random seed and a custom GUI offset.
         */
        renderItem(entity: $LivingEntity | null, level: $Level_ | null, stack: $ItemStack_, x: number, y: number, seed: number, guiOffset: number): void;
        renderItem(stack: $ItemStack_, x: number, y: number, seed: number): void;
        /**
         * Renders an item stack at the specified coordinates with a random seed and a custom value.
         */
        renderItem(stack: $ItemStack_, x: number, y: number, seed: number, guiOffset: number): void;
        /**
         * Renders a fake item stack at the specified coordinates.
         */
        renderItem(stack: $ItemStack_, x: number, y: number): void;
        /**
         * Renders an item stack for a living entity at the specified coordinates with a random seed.
         */
        renderItem(entity: $LivingEntity, stack: $ItemStack_, x: number, y: number, seed: number): void;
        renderFakeItem(stack: $ItemStack_, x: number, y: number, seed: number): void;
        /**
         * Renders a fake item stack at the specified coordinates.
         */
        renderFakeItem(stack: $ItemStack_, x: number, y: number): void;
        /**
         * Renders additional decorations for an item stack at the specified coordinates with optional custom text.
         */
        renderItemDecorations(font: $Font, stack: $ItemStack_, x: number, y: number, text: string | null): void;
        /**
         * Renders additional decorations for an item stack at the specified coordinates.
         */
        renderItemDecorations(font: $Font, stack: $ItemStack_, x: number, y: number): void;
        renderTooltip(arg0: $Font, arg1: $List_<$Component_>, arg2: ($TooltipComponent) | undefined, arg3: $ItemStack_, arg4: number, arg5: number): void;
        /**
         * Renders additional decorations for an item stack at the specified coordinates.
         */
        renderTooltip(font: $Font, stack: $ItemStack_, x: number, y: number): void;
        /**
         * Renders a tooltip with multiple lines of component-based text at the specified mouse coordinates.
         */
        renderTooltip(font: $Font, tooltipLines: $List_<$FormattedCharSequence_>, mouseX: number, mouseY: number): void;
        /**
         * Renders a tooltip with a single line of text at the specified mouse coordinates.
         */
        renderTooltip(font: $Font, text: $Component_, mouseX: number, mouseY: number): void;
        /**
         * Renders a tooltip with customizable components at the specified mouse coordinates.
         */
        renderTooltip(font: $Font, tooltipLines: $List_<$Component_>, visualTooltipComponent: ($TooltipComponent) | undefined, mouseX: number, mouseY: number): void;
        /**
         * Renders a tooltip with multiple lines of formatted text using a custom tooltip positioner at the specified mouse coordinates.
         */
        renderTooltip(font: $Font, tooltipLines: $List_<$FormattedCharSequence_>, tooltipPositioner: $ClientTooltipPositioner_, mouseX: number, mouseY: number): void;
        /**
         * Renders a tooltip with multiple lines of component-based text at the specified mouse coordinates.
         */
        renderComponentTooltip(font: $Font, tooltipLines: $List_<$Component_>, mouseX: number, mouseY: number): void;
        renderComponentTooltip(arg0: $Font, arg1: $List_<$FormattedText>, arg2: number, arg3: number, arg4: $ItemStack_): void;
        renderComponentTooltipFromElements(arg0: $Font, arg1: $List_<$Either<$FormattedText, $TooltipComponent>>, arg2: number, arg3: number, arg4: $ItemStack_): void;
        /**
         * Renders a hover effect for a text component at the specified mouse coordinates.
         */
        renderComponentHoverEffect(font: $Font, style: $Style | null, mouseX: number, mouseY: number): void;
        /**
         * @return returns the PoseStack used for transformations and rendering.
         */
        getMatrixStack(): $PoseStack;
        yacl$bufferSource(): $MultiBufferSource;
        /**
         * Draws a textured box of any size (smallest size is borderSize * 2 square)
         * based on a fixed size textured box with continuous borders and filler.
         */
        blitWithBorder(texture: $ResourceLocation_, x: number, y: number, u: number, v: number, width: number, height: number, textureWidth: number, textureHeight: number, topBorder: number, bottomBorder: number, leftBorder: number, rightBorder: number): void;
        blitWithBorder(sprite: $ResourceLocation_, textureWidth: number, textureHeight: number, uPosition: number, vPosition: number, x: number, y: number, blitOffset: number, uWidth: number, vHeight: number): void;
        /**
         * Blits a portion of the texture specified by the atlas location onto the screen at the given coordinates.
         */
        blitInscribed(atlasLocation: $ResourceLocation_, x: number, y: number, uOffset: number, vOffset: number, uWidth: number, vHeight: number): void;
        blitInscribed(texture: $ResourceLocation_, x: number, y: number, boundsWidth: number, boundsHeight: number, rectWidth: number, rectHeight: number, centerX: boolean, centerY: boolean): void;
        getColorFromFormattingCharacter(c: string, isLighter: boolean): number;
        drawScrollingString(font: $Font, text: $Component_, x: number, y: number, xOffset: number, color: number): number;
        scale(x: number, y: number, z: number): $MatrixStackTransformer;
        multiply(quaternion: $Quaternionf): $MatrixStackTransformer;
        multiply(quaternion: $Quaternionf, originX: number, originY: number, originZ: number): $MatrixStackTransformer;
        push(): $MatrixStackTransformer;
        pop(): $MatrixStackTransformer;
        translate(x: number, y: number, z: number): $MatrixStackTransformer;
        translate(x: number, y: number, z: number): $MatrixStackTransformer;
        multiplyPositionMatrix(matrix: $Matrix4f): $MatrixStackTransformer;
        callBlitSprite(sprite: $TextureAtlasSprite, x: number, y: number, blitOffset: number, width: number, height: number): void;
        /**
         * Renders an internal tooltip with customizable tooltip components at the specified mouse coordinates using a tooltip positioner.
         */
        owo$renderTooltipFromComponents(font: $Font, components: $List_<$ClientTooltipComponent>, mouseX: number, mouseY: number, tooltipPositioner: $ClientTooltipPositioner_): void;
        /**
         * @return returns the PoseStack used for transformations and rendering.
         */
        owo$getMatrices(): $PoseStack;
        owo$setMatrices(arg0: $PoseStack): void;
        owo$getScissorStack(): $GuiGraphics$ScissorStack;
        owo$setScissorStack(arg0: $GuiGraphics$ScissorStack): void;
        /**
         * Renders an internal tooltip with customizable tooltip components at the specified mouse coordinates using a tooltip positioner.
         */
        invokeDrawTooltip(font: $Font, components: $List_<$ClientTooltipComponent>, mouseX: number, mouseY: number, tooltipPositioner: $ClientTooltipPositioner_): void;
        static MIN_GUI_Z: number;
        static MAX_GUI_Z: number;
        constructor(minecraft: $Minecraft, bufferSource: $MultiBufferSource$BufferSource);
        get matrixStack(): $PoseStack;
    }
    export class $LayeredDraw {
        add(layer: $LayeredDraw$Layer_): $LayeredDraw;
        add(layeredDraw: $LayeredDraw, renderInner: $BooleanSupplier_): $LayeredDraw;
        render(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker): void;
        static Z_SEPARATION: number;
        constructor();
    }
    export class $MapRenderer$MapInstance implements $AutoCloseable {
    }
    export class $MapRenderer implements $AutoCloseable {
        update(mapId: $MapId_, mapData: $MapItemSavedData): void;
        /**
         * Clears the currently loaded maps and removes their corresponding textures
         */
        close(): void;
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, mapId: $MapId_, mapData: $MapItemSavedData, active: boolean, packedLight: number): void;
        /**
         * Clears the currently loaded maps and removes their corresponding textures
         */
        resetData(): void;
        constructor(textureManager: $TextureManager, decorationTextures: $MapDecorationTextureManager);
    }
    /**
     * The `Leaf` class represents a leaf component path in the hierarchy.
     */
    export class $ComponentPath$Leaf extends $Record implements $ComponentPath {
        /**
         * @return the `GuiEventListener` component associated with this component path
         */
        component(): $GuiEventListener;
        /**
         * Applies focus to or removes focus from the component associated with this leaf path.
         * focused `true` to apply focus, `false` to remove focus
         */
        applyFocus(focused: boolean): void;
        constructor(arg0: $GuiEventListener);
    }
    /**
     * Values that may be interpreted as {@link $ComponentPath$Leaf}.
     */
    export type $ComponentPath$Leaf_ = { component?: $GuiEventListener,  } | [component?: $GuiEventListener, ];
    export class $Gui$1DisplayEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Gui$1DisplayEntry}.
     */
    export type $Gui$1DisplayEntry_ = { score?: $Component_, scoreWidth?: number, name?: $Component_,  } | [score?: $Component_, scoreWidth?: number, name?: $Component_, ];
    export class $Font implements $IFontExtension, $FontAccessor {
        getFontSet(fontLocation: $ResourceLocation_): $FontSet;
        /**
         * Apply Unicode Bidirectional Algorithm to string and return a new possibly reordered string for visual rendering.
         */
        bidirectionalShaping(text: string): string;
        drawInBatch8xOutline(text: $FormattedCharSequence_, x: number, y: number, color: number, backgroundColor: number, matrix: $Matrix4f, bufferSource: $MultiBufferSource_, packedLightCoords: number): void;
        plainSubstrByWidth(text: string, maxWidth: number, tail: boolean): string;
        plainSubstrByWidth(text: string, maxWidth: number): string;
        substrByWidth(text: $FormattedText, maxWidth: number): $FormattedText;
        /**
         * Returns the height (in pixels) of the given string if it is wordwrapped to the given max width.
         */
        wordWrapHeight(text: string, maxWidth: number): number;
        wordWrapHeight(text: $FormattedText, maxWidth: number): number;
        split(text: $FormattedText, maxWidth: number): $List<$FormattedCharSequence>;
        self(): $Font;
        width(text: $FormattedText): number;
        width(text: $FormattedCharSequence_): number;
        /**
         * Returns the width of this string. Equivalent of FontMetrics.stringWidth(String s).
         */
        width(text: string): number;
        /**
         * Get bidiFlag that controls if the Unicode Bidirectional Algorithm should be run before rendering any string
         */
        isBidirectional(): boolean;
        drawInBatch(text: string, x: number, y: number, color: number, dropShadow: boolean, matrix: $Matrix4f, buffer: $MultiBufferSource_, displayMode: $Font$DisplayMode_, backgroundColor: number, packedLightCoords: number, bidirectional: boolean): number;
        drawInBatch(text: string, x: number, y: number, color: number, dropShadow: boolean, matrix: $Matrix4f, buffer: $MultiBufferSource_, displayMode: $Font$DisplayMode_, backgroundColor: number, packedLightCoords: number): number;
        drawInBatch(text: $FormattedCharSequence_, x: number, y: number, color: number, dropShadow: boolean, matrix: $Matrix4f, buffer: $MultiBufferSource_, displayMode: $Font$DisplayMode_, backgroundColor: number, packedLightCoords: number): number;
        drawInBatch(text: $Component_, x: number, y: number, color: number, dropShadow: boolean, matrix: $Matrix4f, buffer: $MultiBufferSource_, displayMode: $Font$DisplayMode_, backgroundColor: number, packedLightCoords: number): number;
        getSplitter(): $StringSplitter;
        ellipsize(text: $FormattedText, maxWidth: number): $FormattedText;
        create$getFonts(): $Function<$ResourceLocation, $FontSet>;
        random: $RandomSource;
        static ALPHA_CUTOFF: number;
        lineHeight: number;
        constructor(fonts: $Function_<$ResourceLocation, $FontSet>, filterFishyGlyphs: boolean);
        get bidirectional(): boolean;
        get splitter(): $StringSplitter;
    }
    export class $Gui$HeartType extends $Enum<$Gui$HeartType> implements $IExtensibleEnum {
        static values(): $Gui$HeartType[];
        static valueOf(arg0: string): $Gui$HeartType;
        static getExtensionInfo(): $ExtensionInfo;
        getSprite(hardcore: boolean, halfHeart: boolean, blinking: boolean): $ResourceLocation;
        static ABSORBING: $Gui$HeartType;
        static CONTAINER: $Gui$HeartType;
        static WITHERED: $Gui$HeartType;
        static POISIONED: $Gui$HeartType;
        static FROZEN: $Gui$HeartType;
        static NORMAL: $Gui$HeartType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $Gui$HeartType}.
     */
    export type $Gui$HeartType_ = "container" | "normal" | "poisioned" | "withered" | "absorbing" | "frozen";
    export class $Font$DisplayMode extends $Enum<$Font$DisplayMode> {
        static values(): $Font$DisplayMode[];
        static valueOf(arg0: string): $Font$DisplayMode;
        static POLYGON_OFFSET: $Font$DisplayMode;
        static SEE_THROUGH: $Font$DisplayMode;
        static NORMAL: $Font$DisplayMode;
    }
    /**
     * Values that may be interpreted as {@link $Font$DisplayMode}.
     */
    export type $Font$DisplayMode_ = "normal" | "see_through" | "polygon_offset";
    /**
     * A utility class for managing a stack of screen rectangles for scissoring.
     */
    export class $GuiGraphics$ScissorStack {
        /**
         * Pushes a screen rectangle onto the scissor stack.
         * 
         * @return The resulting intersection of the pushed rectangle with the previous top rectangle on the stack, or the pushed rectangle if the stack is empty.
         */
        push(scissor: $ScreenRectangle_): $ScreenRectangle;
        /**
         * Pops the top screen rectangle from the scissor stack.
         * 
         * @return The new top screen rectangle after the pop operation, or null if the stack is empty.
         * @throws IllegalStateException if the stack is empty.
         */
        pop(): $ScreenRectangle;
        containsPoint(x: number, y: number): boolean;
    }
    export class $Gui implements $GuiAccessor {
        /**
         * Renders the experience bar on the screen using the provided GuiGraphics object and x-coordinate.
         */
        renderSelectedItemName(guiGraphics: $GuiGraphics, x: number): void;
        /**
         * Retrieves the player entity that the camera is currently focused on.
         * 
         * @return the player entity that the camera is focused on, or null if the camera is not focused on a player.
         */
        getCameraPlayer(): $Player;
        /**
         * Retrieves the living entity representing the player's vehicle with health, if any.
         * 
         * @return the living entity representing the player's vehicle with health, or null if the player is not in a vehicle or the vehicle does not have health.
         */
        getPlayerVehicleWithHealth(): $LivingEntity;
        /**
         * Retrieves the maximum number of hearts representing the vehicle's health for the given mount entity.
         * 
         * @return the maximum number of hearts representing the vehicle's health, or 0 if the mount entity is null or does not show vehicle health.
         */
        getVehicleMaxHearts(vehicle: $LivingEntity | null): number;
        /**
         * Retrieves the number of rows of visible hearts needed to represent the given mount health.
         * 
         * @return the number of rows of visible hearts needed to represent the mount health.
         */
        getVisibleVehicleHeartRows(vehicleHealth: number): number;
        /**
         * Clears the title and subtitle, resetting the title display time.
         */
        initModdedOverlays(): void;
        wrapMethod$zio000$iris$handleHudHidingScreens(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $Operation_<any>): void;
        handler$zbj000$treechop$injectChopIndicator(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $CallbackInfo): void;
        /**
         * Clears the title and subtitle, resetting the title display time.
         */
        resetTitleTimes(): void;
        /**
         * Sets the currently playing record display name and updates the overlay message.
         */
        setSubtitle(displayName: $Component_): void;
        /**
         * @return the `PlayerTabOverlay` overlay
         */
        getTabList(): $PlayerTabOverlay;
        /**
         * @return the number of GUI ticks elapsed
         */
        getLayerCount(): number;
        /**
         * Sets the currently playing record display name and updates the overlay message.
         */
        setNowPlaying(displayName: $Component_): void;
        /**
         * Clears the title and subtitle, resetting the title display time.
         */
        clear(): void;
        /**
         * Sets the fade-in, stay, and fade-out times for the title display.
         */
        setTimes(titleFadeInTime: number, titleStayTime: number, titleFadeOutTime: number): void;
        /**
         * @return `true` if the chat is disabled, `false` if chat is enabled
         */
        tick(chatDisabledByPlayerShown: boolean): void;
        /**
         * Clears the title and subtitle, resetting the title display time.
         */
        clearCache(): void;
        /**
         * @return the number of GUI ticks elapsed
         */
        getGuiTicks(): number;
        /**
         * @return a pointer to the persistent Chat GUI, containing all previous chat messages and such
         */
        getChat(): $ChatComponent;
        render(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker): void;
        /**
         * @return the `Font` used for rendering text in the GUI
         */
        getFont(): $Font;
        /**
         * Sets the currently playing record display name and updates the overlay message.
         */
        setTitle(displayName: $Component_): void;
        getDebugOverlay(): $DebugScreenOverlay;
        /**
         * @return `true` if the chat disabled message is being shown, `false` otherwise
         */
        isShowingChatDisabledByPlayer(): boolean;
        /**
         * @return `true` if the chat is disabled, `false` if chat is enabled
         */
        setChatDisabledByPlayerShown(chatDisabledByPlayerShown: boolean): void;
        /**
         * Sets the overlay message to be displayed on the screen.
         */
        setOverlayMessage(component: $Component_, animateColor: boolean): void;
        /**
         * @return the `SpectatorGui` instance
         */
        getSpectatorGui(): $SpectatorGui;
        /**
         * Clears the title and subtitle, resetting the title display time.
         */
        onDisconnected(): void;
        /**
         * @return the `BossHealthOverlay` instance associated with the client
         */
        getBossOverlay(): $BossHealthOverlay;
        renderSavingIndicator(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker): void;
        create$getSubtitleOverlay(): $SubtitleOverlay;
        /**
         * @return the number of GUI ticks elapsed
         */
        create$getToolHighlightTimer(): number;
        /**
         * Renders a texture overlay on the screen with the specified shader location and alpha value.
         */
        create$renderTextureOverlay(guiGraphics: $GuiGraphics, shaderLocation: $ResourceLocation_, alpha: number): void;
        minecraft: $Minecraft;
        tabList: $PlayerTabOverlay;
        static SPYGLASS_SCOPE_LOCATION: $ResourceLocation;
        vignetteBrightness: number;
        rightHeight: number;
        displayHealth: number;
        leftHeight: number;
        constructor(minecraft: $Minecraft);
        get cameraPlayer(): $Player;
        get playerVehicleWithHealth(): $LivingEntity;
        set subtitle(value: $Component_);
        get layerCount(): number;
        set nowPlaying(value: $Component_);
        get guiTicks(): number;
        get chat(): $ChatComponent;
        get font(): $Font;
        set title(value: $Component_);
        get debugOverlay(): $DebugScreenOverlay;
        get showingChatDisabledByPlayer(): boolean;
        set chatDisabledByPlayerShown(value: boolean);
        get spectatorGui(): $SpectatorGui;
        get bossOverlay(): $BossHealthOverlay;
    }
    export class $GuiSpriteManager extends $TextureAtlasHolder {
        getSpriteScaling(sprite: $TextureAtlasSprite): $GuiSpriteScaling;
        constructor(textureManager: $TextureManager);
    }
    /**
     * The `Path` class represents a non-leaf component path in the hierarchy.
     */
    export class $ComponentPath$Path extends $Record implements $ComponentPath {
        /**
         * @return the `GuiEventListener` component associated with this component path
         */
        component(): $ContainerEventHandler;
        /**
         * @return the child path associated with this path
         */
        childPath(): $ComponentPath;
        /**
         * Applies focus to or removes focus from the component associated with this component path.
         * focused `true` to apply focus, `false` to remove focus
         */
        applyFocus(focused: boolean): void;
        constructor(component: $ContainerEventHandler, childPath: $ComponentPath);
    }
    /**
     * Values that may be interpreted as {@link $ComponentPath$Path}.
     */
    export type $ComponentPath$Path_ = { component?: $ContainerEventHandler, childPath?: $ComponentPath,  } | [component?: $ContainerEventHandler, childPath?: $ComponentPath, ];
    export class $LayeredDraw$Layer {
    }
    export interface $LayeredDraw$Layer {
        render(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker): void;
    }
    /**
     * Values that may be interpreted as {@link $LayeredDraw$Layer}.
     */
    export type $LayeredDraw$Layer_ = ((arg0: $GuiGraphics, arg1: $DeltaTracker) => void);
    /**
     * Represents a path of components in a user interface hierarchy.
     * 
     * It provides methods to create and manipulate component paths.
     */
    export class $ComponentPath {
        /**
         * Creates a component path with the specified `ContainerEventHandler` component and an optional child path.
         * 
         * @return a new component path, or `null` if the child path is null
         */
        static path(component: $ContainerEventHandler, childPath: $ComponentPath | null): $ComponentPath;
        /**
         * Creates a new `ComponentPath` leaf node with the specified `GuiEventListener` component and an array of `ContainerEventHandler` ancestors.
         * 
         * @return a new component path
         */
        static path(leafComponent: $GuiEventListener, ...ancestorComponents: $ContainerEventHandler[]): $ComponentPath;
        /**
         * Creates a leaf component path with the specified `GuiEventListener` component.
         * 
         * @return a new leaf component path.
         */
        static leaf(component: $GuiEventListener): $ComponentPath;
    }
    export interface $ComponentPath {
        /**
         * @return the `GuiEventListener` component associated with this component path
         */
        component(): $GuiEventListener;
        /**
         * Applies focus to or removes focus from the component associated with this component path.
         */
        applyFocus(focused: boolean): void;
    }
}
