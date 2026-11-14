import { $JsonElement_, $JsonDeserializationContext_, $JsonSerializer, $JsonDeserializer, $Gson } from "@package/com/google/gson";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $SlotGridLayout, $SlotGridLayout_ } from "@package/appeng/client/gui/layout";
import { $Component_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map, $List_ } from "@package/java/util";
import { $AEFluidKey } from "@package/appeng/api/stacks";
import { $Point } from "@package/appeng/client";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Type } from "@package/java/lang/reflect";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/appeng/client/gui/style" {
    export class $GeneratedBackground {
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getWidth(): number;
        getHeight(): number;
        constructor();
    }
    export class $Text {
        getAlign(): $TextAlignment;
        getMaxWidth(): number;
        setMaxWidth(arg0: number): void;
        getText(): $Component;
        setScale(arg0: number): void;
        setColor(arg0: $PaletteColor_): void;
        setText(arg0: $Component_): void;
        setPosition(arg0: $Position): void;
        getColor(): $PaletteColor;
        getScale(): number;
        setAlign(arg0: $TextAlignment_): void;
        getPosition(): $Position;
        constructor();
    }
    export class $Position {
        setLeft(arg0: number): void;
        setRight(arg0: number): void;
        setTop(arg0: number): void;
        getTop(): number;
        setBottom(arg0: number): void;
        resolve(arg0: $Rect2i): $Point;
        getLeft(): number;
        getRight(): number;
        getBottom(): number;
        constructor();
    }
    export class $TooltipArea extends $Position {
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getTooltip(): $List<$Component>;
        setTooltip(arg0: $List_<$Component_>): void;
        getWidth(): number;
        getHeight(): number;
        constructor();
    }
    export class $Blitter {
        getDestRect(): $Rect2i;
        static guiSprite(arg0: $ResourceLocation_): $Blitter;
        blending(arg0: boolean): $Blitter;
        zOffset(arg0: number): $Blitter;
        static texture(arg0: string, arg1: number, arg2: number): $Blitter;
        static texture(arg0: $ResourceLocation_): $Blitter;
        static texture(arg0: string): $Blitter;
        static texture(arg0: $ResourceLocation_, arg1: number, arg2: number): $Blitter;
        srcWidth(arg0: number): $Blitter;
        srcHeight(arg0: number): $Blitter;
        src(arg0: $Rect2i): $Blitter;
        src(arg0: number, arg1: number, arg2: number, arg3: number): $Blitter;
        transform(arg0: $TextureTransform_): $Blitter;
        copy(): $Blitter;
        color(arg0: number, arg1: number, arg2: number, arg3: number): $Blitter;
        color(arg0: number, arg1: number, arg2: number): $Blitter;
        dest(arg0: $Rect2i): $Blitter;
        dest(arg0: number, arg1: number): $Blitter;
        dest(arg0: number, arg1: number, arg2: number, arg3: number): $Blitter;
        opacity(arg0: number): $Blitter;
        blit(arg0: $GuiGraphics): void;
        static sprite(arg0: $TextureAtlasSprite): $Blitter;
        colorRgb(arg0: number): $Blitter;
        colorArgb(arg0: number): $Blitter;
        getSrcWidth(): number;
        getSrcHeight(): number;
        getSrcX(): number;
        getSrcY(): number;
        static DEFAULT_TEXTURE_WIDTH: number;
        static DEFAULT_TEXTURE_HEIGHT: number;
        get destRect(): $Rect2i;
        get srcX(): number;
        get srcY(): number;
    }
    export class $PaletteColor extends $Enum<$PaletteColor> {
        static values(): $PaletteColor[];
        static valueOf(arg0: string): $PaletteColor;
        static TEXTFIELD_ERROR: $PaletteColor;
        static TEXTFIELD_PLACEHOLDER: $PaletteColor;
        static ERROR: $PaletteColor;
        static MUTED_TEXT_COLOR: $PaletteColor;
        static DEFAULT_TEXT_COLOR: $PaletteColor;
        static TEXTFIELD_SELECTION: $PaletteColor;
        static SELECTION_COLOR: $PaletteColor;
        static TEXTFIELD_TEXT: $PaletteColor;
    }
    /**
     * Values that may be interpreted as {@link $PaletteColor}.
     */
    export type $PaletteColor_ = "default_text_color" | "muted_text_color" | "selection_color" | "textfield_placeholder" | "textfield_selection" | "textfield_error" | "textfield_text" | "error";
    export class $TextAlignment extends $Enum<$TextAlignment> {
        static values(): $TextAlignment[];
        static valueOf(arg0: string): $TextAlignment;
        static CENTER: $TextAlignment;
        static LEFT: $TextAlignment;
        static RIGHT: $TextAlignment;
    }
    /**
     * Values that may be interpreted as {@link $TextAlignment}.
     */
    export type $TextAlignment_ = "left" | "center" | "right";
    export class $SlotPosition extends $Position {
        getGrid(): $SlotGridLayout;
        setGrid(arg0: $SlotGridLayout_): void;
        isHidden(): boolean;
        setHidden(arg0: boolean): void;
        constructor();
    }
    export class $BackgroundGenerator {
        static draw(arg0: number, arg1: number, arg2: $GuiGraphics, arg3: number, arg4: number): void;
    }
    export class $TextureTransform extends $Enum<$TextureTransform> {
        static values(): $TextureTransform[];
        static valueOf(arg0: string): $TextureTransform;
        static MIRROR_V: $TextureTransform;
        static NONE: $TextureTransform;
        static MIRROR_H: $TextureTransform;
    }
    /**
     * Values that may be interpreted as {@link $TextureTransform}.
     */
    export type $TextureTransform_ = "none" | "mirror_h" | "mirror_v";
    export class $ColorDeserializer extends $Enum<$ColorDeserializer> implements $JsonDeserializer<$Color> {
    }
    /**
     * Values that may be interpreted as {@link $ColorDeserializer}.
     */
    export type $ColorDeserializer_ = "instance";
    export class $Color {
        getA(): number;
        getB(): number;
        getG(): number;
        static parse(arg0: string): $Color;
        getR(): number;
        toARGB(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get a(): number;
        get b(): number;
        get g(): number;
        get r(): number;
    }
    export class $FluidBlitter {
        static create(arg0: $AEFluidKey): $Blitter;
        static create(arg0: $FluidStack_): $Blitter;
    }
    export class $ScreenStyle$StyleSerializer implements $JsonSerializer<$Style>, $JsonDeserializer<$Style> {
    }
    export class $ScreenStyle {
        getTerminalStyle(): $TerminalStyle;
        getBackground(): $Blitter;
        validate(): void;
        getText(): $Map<string, $Text>;
        getImage(arg0: string): $Blitter;
        getColor(arg0: $PaletteColor_): $Color;
        getWidget(arg0: string): $WidgetStyle;
        getSlots(): $Map<string, $SlotPosition>;
        getTooltips(): $Map<string, $TooltipArea>;
        getGeneratedBackground(): $GeneratedBackground;
        getHelpTopic(): string;
        static GSON: $Gson;
        constructor();
        get terminalStyle(): $TerminalStyle;
        get background(): $Blitter;
        get text(): $Map<string, $Text>;
        get slots(): $Map<string, $SlotPosition>;
        get tooltips(): $Map<string, $TooltipArea>;
        get generatedBackground(): $GeneratedBackground;
        get helpTopic(): string;
    }
    export class $WidgetStyle extends $Position {
        isHideEdge(): boolean;
        setHideEdge(arg0: boolean): void;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getWidth(): number;
        getHeight(): number;
        constructor();
    }
    export class $TerminalStyle {
        setHeader(arg0: $Blitter): void;
        setBottom(arg0: $Blitter): void;
        setFirstRow(arg0: $Blitter): void;
        setLastRow(arg0: $Blitter): void;
        setSlotsPerRow(arg0: number): void;
        setSortable(arg0: boolean): void;
        isShowTooltipsWithItemInHand(): boolean;
        setShowTooltipsWithItemInHand(arg0: boolean): void;
        setSupportsAutoCrafting(arg0: boolean): void;
        validate(): void;
        getHeader(): $Blitter;
        getRow(): $Blitter;
        setRow(arg0: $Blitter): void;
        getBottom(): $Blitter;
        getScreenWidth(): number;
        getScreenHeight(arg0: number): number;
        isSupportsAutoCrafting(): boolean;
        isSortable(): boolean;
        getSlotsPerRow(): number;
        getPossibleRows(arg0: number): number;
        getSlotPos(arg0: number, arg1: number): $Point;
        getFirstRow(): $Blitter;
        getLastRow(): $Blitter;
        constructor();
        get screenWidth(): number;
    }
    export class $BlitterDeserializer extends $Enum<$BlitterDeserializer> implements $JsonDeserializer<$Blitter> {
    }
    /**
     * Values that may be interpreted as {@link $BlitterDeserializer}.
     */
    export type $BlitterDeserializer_ = "instance";
    export class $StyleManager {
        static loadStyleDoc(arg0: string): $ScreenStyle;
        static initialize(arg0: $ResourceManager): void;
        static PROP_INCLUDES: string;
        constructor();
    }
    export class $StyleManager$ReloadListener implements $ResourceManagerReloadListener {
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        get name(): string;
    }
    export class $Rectangle2dDeserializer extends $Enum<$Rectangle2dDeserializer> implements $JsonDeserializer<$Rect2i> {
        static values(): $Rectangle2dDeserializer[];
        static valueOf(arg0: string): $Rectangle2dDeserializer;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $Rect2i;
        static INSTANCE: $Rectangle2dDeserializer;
    }
    /**
     * Values that may be interpreted as {@link $Rectangle2dDeserializer}.
     */
    export type $Rectangle2dDeserializer_ = "instance";
}
