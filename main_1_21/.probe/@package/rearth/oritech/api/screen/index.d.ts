import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List, $List_ } from "@package/java/util";
export * as data from "@package/rearth/oritech/api/screen/data";
export * as widgets from "@package/rearth/oritech/api/screen/widgets";

declare module "@package/rearth/oritech/api/screen" {
    export class $Insets extends $Record {
        vertical(): number;
        bottom(): number;
        static of(arg0: number, arg1: number, arg2: number, arg3: number): $Insets;
        static of(arg0: number, arg1: number): $Insets;
        static of(arg0: number): $Insets;
        top(): number;
        left(): number;
        right(): number;
        horizontal(): number;
        static NONE: $Insets;
        constructor(top: number, right: number, bottom: number, left: number);
    }
    /**
     * Values that may be interpreted as {@link $Insets}.
     */
    export type $Insets_ = { left?: number, top?: number, right?: number, bottom?: number,  } | [left?: number, top?: number, right?: number, bottom?: number, ];
    export class $OritechSurface$SurfaceRenderer {
    }
    export interface $OritechSurface$SurfaceRenderer {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $OritechSurface$SurfaceRenderer}.
     */
    export type $OritechSurface$SurfaceRenderer_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number) => void);
    export class $UIComponent {
        withTooltip(...arg0: $Component_[]): $UIComponent;
        withTooltip(arg0: $List_<$Component_>): $UIComponent;
        setX(arg0: number): void;
        setY(arg0: number): void;
        contentWidth(): number;
        contentHeight(): number;
        withSurface(arg0: $OritechSurface_): $UIComponent;
        getPadding(): $Insets;
        withZIndex(arg0: number): $UIComponent;
        getSurface(): $OritechSurface;
        setSurface(arg0: $OritechSurface_): void;
        setZIndex(arg0: number): void;
        contentX(): number;
        contentY(): number;
        paddedX(): number;
        paddedY(): number;
        paddedWidth(): number;
        paddedHeight(): number;
        addTooltipLine(arg0: $Component_): $UIComponent;
        getZIndex(): number;
        hasTooltip(): boolean;
        handleDrag(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        handleMouseRelease(arg0: number, arg1: number, arg2: number): boolean;
        handleMouseScroll(arg0: number, arg1: number, arg2: number): boolean;
        withPadding(arg0: $Insets_): $UIComponent;
        handleClick(arg0: number, arg1: number, arg2: number): boolean;
        setPadding(arg0: $Insets_): void;
        getY(): number;
        tick(): void;
        setSize(arg0: number, arg1: number): void;
        setPosition(arg0: number, arg1: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        setVisible(arg0: boolean): void;
        getX(): number;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        getTooltip(): $List<$Component>;
        isVisible(): boolean;
        setTooltip(arg0: $List_<$Component_>): void;
        getWidth(): number;
        getHeight(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $NinePatchRenderer extends $Record {
        texWidth(): number;
        texHeight(): number;
        texture(): $ResourceLocation;
        cornerWidth(): number;
        cornerHeight(): number;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        constructor(arg0: $ResourceLocation_);
        constructor(texture: $ResourceLocation_, texWidth: number, texHeight: number, cornerWidth: number, cornerHeight: number);
    }
    /**
     * Values that may be interpreted as {@link $NinePatchRenderer}.
     */
    export type $NinePatchRenderer_ = { cornerHeight?: number, texWidth?: number, cornerWidth?: number, texHeight?: number, texture?: $ResourceLocation_,  } | [cornerHeight?: number, texWidth?: number, cornerWidth?: number, texHeight?: number, texture?: $ResourceLocation_, ];
    export class $OritechSurface extends $Enum<$OritechSurface> {
        static values(): $OritechSurface[];
        static valueOf(arg0: string): $OritechSurface;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isNone(): boolean;
        static PANEL: $OritechSurface;
        static PANEL_INSET: $OritechSurface;
        static PANEL_ORANGE_HOVER: $OritechSurface;
        static PANEL_DARK_HOVER: $OritechSurface;
        static PANEL_ORANGE: $OritechSurface;
        static PANEL_DARK: $OritechSurface;
        static PANEL_HOVER: $OritechSurface;
        static NONE: $OritechSurface;
        static PANEL_PRESSED: $OritechSurface;
        get none(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $OritechSurface}.
     */
    export type $OritechSurface_ = "none" | "panel" | "panel_dark" | "panel_inset" | "panel_orange" | "panel_hover" | "panel_dark_hover" | "panel_orange_hover" | "panel_pressed";
}
