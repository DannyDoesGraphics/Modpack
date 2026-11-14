import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $DyeColor_ } from "@package/net/minecraft/world/item";
import { $EventSource, $Observable, $EventStream } from "@package/io/wispforest/owo/util";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $UIModel } from "@package/io/wispforest/owo/ui/parsing";
import { $CharTyped, $FocusLost, $MouseScroll, $MouseDown, $MouseUp, $MouseLeave, $MouseEnter, $KeyPress, $MouseDrag, $FocusGained } from "@package/io/wispforest/owo/ui/event";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $Map_, $Collection_, $List_, $ArrayList } from "@package/java/util";
import { $Function_, $Consumer_, $Predicate_, $BiFunction_ } from "@package/java/util/function";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $CursorAdapter, $FocusHandler } from "@package/io/wispforest/owo/ui/util";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $Enum, $Record, $Class, $Runnable_ } from "@package/java/lang";
import { $Font, $ComponentPath, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Element, $Node } from "@package/org/w3c/dom";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/io/wispforest/owo/ui/core" {
    export class $HorizontalAlignment extends $Enum<$HorizontalAlignment> {
        static values(): $HorizontalAlignment[];
        static valueOf(name: string): $HorizontalAlignment;
        static parse(element: $Element): $HorizontalAlignment;
        align(componentWidth: number, span: number): number;
        static CENTER: $HorizontalAlignment;
        static LEFT: $HorizontalAlignment;
        static RIGHT: $HorizontalAlignment;
    }
    /**
     * Values that may be interpreted as {@link $HorizontalAlignment}.
     */
    export type $HorizontalAlignment_ = "left" | "center" | "right";
    export class $PositionedRectangle {
        static of(x: number, y: number, width: number, height: number): $PositionedRectangle;
        static of(x: number, y: number, size: $Size_): $PositionedRectangle;
    }
    export interface $PositionedRectangle extends $Animatable<$PositionedRectangle> {
        x(): number;
        y(): number;
        width(): number;
        height(): number;
        interpolate(next: $PositionedRectangle, delta: number): $PositionedRectangle;
        isInBoundingBox(x: number, y: number): boolean;
        intersects(other: $PositionedRectangle): boolean;
        intersection(other: $PositionedRectangle): $PositionedRectangle;
    }
    export class $OwoUIDrawContext$UtilityScreen extends $Screen {
        captureLinkSource(): void;
        setLinkSource(screen: $Screen): void;
        static get(): $OwoUIDrawContext$UtilityScreen;
        getAndClearLinkSource(): $Screen;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        set linkSource(value: $Screen);
        get andClearLinkSource(): $Screen;
    }
    export class $ParentComponent {
    }
    export interface $ParentComponent extends $Component {
        removeChild(arg0: $Component): $ParentComponent;
        update(delta: number, mouseX: number, mouseY: number): void;
        queue(arg0: $Runnable_): void;
        layout(arg0: $Size_): void;
        children(): $List<$Component>;
        onChildMutated(arg0: $Component): void;
        childById<T extends $Component>(expectedClass: $Class<T>, id: string): T;
        horizontalAlignment(): $HorizontalAlignment;
        horizontalAlignment(arg0: $HorizontalAlignment_): $ParentComponent;
        childAt(x: number, y: number): $Component;
        allowOverflow(): boolean;
        allowOverflow(arg0: boolean): $ParentComponent;
        forEachDescendantWhere(action: $Consumer_<$Component>, condition: $Predicate_<$Component>): void;
        collectDescendants(into: $ArrayList<$Component>): void;
        forEachDescendant(action: $Consumer_<$Component>): void;
        surface(): $Surface;
        surface(arg0: $Surface_): $ParentComponent;
        onMouseDown(mouseX: number, mouseY: number, button: number): boolean;
        onMouseScroll(mouseX: number, mouseY: number, amount: number): boolean;
        parseProperties(model: $UIModel, element: $Element, children: $Map_<string, $Element>): void;
        drawTooltip(context: $OwoUIDrawContext, mouseX: number, mouseY: number, partialTicks: number, delta: number): void;
        verticalAlignment(): $VerticalAlignment;
        verticalAlignment(arg0: $VerticalAlignment_): $ParentComponent;
        padding(): $AnimatableProperty<$Insets>;
        padding(arg0: $Insets_): $ParentComponent;
        alignment(horizontalAlignment: $HorizontalAlignment_, verticalAlignment: $VerticalAlignment_): $ParentComponent;
    }
    export class $AnimatableProperty<A extends $Animatable<A>> extends $Observable<A> {
        animate(duration: number, easing: $Easing_, to: A): $Animation<A>;
        update(delta: number): void;
        static of<A extends $Animatable<A>>(initial: A): $AnimatableProperty<A>;
        animation(): $Animation<A>;
    }
    export class $Positioning$Type extends $Enum<$Positioning$Type> {
        static values(): $Positioning$Type[];
        static valueOf(name: string): $Positioning$Type;
        static ABSOLUTE: $Positioning$Type;
        static RELATIVE: $Positioning$Type;
        static LAYOUT: $Positioning$Type;
        static ACROSS: $Positioning$Type;
    }
    /**
     * Values that may be interpreted as {@link $Positioning$Type}.
     */
    export type $Positioning$Type_ = "relative" | "across" | "absolute" | "layout";
    export class $Color extends $Record implements $Animatable<$Color> {
        static parse(node: $Node): $Color;
        static random(): $Color;
        red(): number;
        blue(): number;
        green(): number;
        interpolate(next: $Color_, delta: number): $Color;
        alpha(): number;
        static ofArgb(argb: number): $Color;
        asHexString(includeAlpha: boolean): string;
        argb(): number;
        static ofRgb(rgb: number): $Color;
        static ofHsv(hue: number, saturation: number, value: number, alpha: number): $Color;
        static ofHsv(hue: number, saturation: number, value: number): $Color;
        static ofFormatting(formatting: $ChatFormatting_): $Color;
        static ofDye(dyeColor: $DyeColor_): $Color;
        hsv(): number[];
        static parseAndPack(node: $Node): number;
        rgb(): number;
        static RED: $Color;
        static WHITE: $Color;
        static BLUE: $Color;
        static BLACK: $Color;
        static GREEN: $Color;
        constructor(red: number, green: number, blue: number);
        constructor(red: number, green: number, blue: number, alpha: number);
    }
    /**
     * Values that may be interpreted as {@link $Color}.
     */
    export type $Color_ = { blue?: number, red?: number, alpha?: number, green?: number,  } | [blue?: number, red?: number, alpha?: number, green?: number, ];
    export class $OwoUIAdapter<R extends $ParentComponent> implements $GuiEventListener, $Renderable, $NarratableEntry {
        toggleInspector(): boolean;
        static createWithoutScreen<R extends $ParentComponent>(x: number, y: number, width: number, height: number, rootComponentMaker: $BiFunction_<$Sizing, $Sizing, R>): $OwoUIAdapter<R>;
        x(): number;
        static create<R extends $ParentComponent>(screen: $Screen, rootComponentMaker: $BiFunction_<$Sizing, $Sizing, R>): $OwoUIAdapter<R>;
        y(): number;
        width(): number;
        dispose(): void;
        height(): number;
        render(context: $GuiGraphics, mouseX: number, mouseY: number, partialTicks: number): void;
        toggleGlobalInspector(): boolean;
        moveAndResize(x: number, y: number, width: number, height: number): void;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        isMouseOver(mouseX: number, mouseY: number): boolean;
        updateNarration(builder: $NarrationElementOutput): void;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        inflateAndMount(): void;
        setFocused(focused: boolean): void;
        mouseClicked(mouseX: number, mouseY: number, button: number): boolean;
        mouseReleased(mouseX: number, mouseY: number, button: number): boolean;
        mouseDragged(mouseX: number, mouseY: number, button: number, deltaX: number, deltaY: number): boolean;
        mouseScrolled(mouseX: number, mouseY: number, horizontalAmount: number, verticalAmount: number): boolean;
        charTyped(chr: string, modifiers: number): boolean;
        isFocused(): boolean;
        static isRendering(): boolean;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getCurrentFocusPath(): $ComponentPath;
        getRectangle(): $ScreenRectangle;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        isActive(): boolean;
        getTabOrderGroup(): number;
        cursorAdapter: $CursorAdapter;
        enableInspector: boolean;
        rootComponent: R;
        inspectorZOffset: number;
        globalInspector: boolean;
        static get rendering(): boolean;
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get active(): boolean;
        get tabOrderGroup(): number;
    }
    export class $Sizing implements $Animatable<$Sizing> {
        isExpand(): boolean;
        contentFactor(): number;
        isContent(): boolean;
        static expand(percent: number): $Sizing;
        static expand(): $Sizing;
        inflate(space: number, contentSizeFunction: $Function_<$Sizing, number>): number;
        static fill(percent: number): $Sizing;
        static fill(): $Sizing;
        static parse(sizingElement: $Element): $Sizing;
        static fixed(value: number): $Sizing;
        static content(padding: number): $Sizing;
        static content(): $Sizing;
        interpolate(next: $Sizing, delta: number): $Sizing;
        method: $Sizing$Method;
        value: number;
    }
    export class $Surface {
        static tiled(texture: $ResourceLocation_, textureWidth: number, textureHeight: number): $Surface;
        static panorama(renderer: $PanoramaRenderer, alwaysVisible: boolean): $Surface;
        static panelWithInset(insetWidth: number): $Surface;
        static vanillaPanorama(alwaysVisible: boolean): $Surface;
        static parse(surfaceElement: $Element): $Surface;
        static blur(quality: number, size: number): $Surface;
        static flat(color: number): $Surface;
        static outline(color: number): $Surface;
        static OPTIONS_BACKGROUND: $Surface;
        static BLANK: $Surface;
        static PANEL: $Surface;
        static DARK_PANEL: $Surface;
        static TOOLTIP: $Surface;
        static PANEL_INSET: $Surface;
        static VANILLA_TRANSLUCENT: $Surface;
    }
    export interface $Surface {
        and(surface: $Surface_): $Surface;
        draw(arg0: $OwoUIDrawContext, arg1: $ParentComponent): void;
    }
    /**
     * Values that may be interpreted as {@link $Surface}.
     */
    export type $Surface_ = ((arg0: $OwoUIDrawContext, arg1: $ParentComponent) => void);
    export class $OwoUIDrawContext extends $GuiGraphics {
        drawLine(x1: number, y1: number, x2: number, y2: number, thiccness: number, color: $Color_): void;
        recording(): boolean;
        static of(context: $GuiGraphics): $OwoUIDrawContext;
        static utilityScreen(): $OwoUIDrawContext$UtilityScreen;
        drawPanel(x: number, y: number, width: number, height: number, dark: boolean): void;
        drawTooltip(textRenderer: $Font, x: number, y: number, components: $List_<$ClientTooltipComponent>): void;
        drawRectOutline(x: number, y: number, width: number, height: number, color: number): void;
        drawGradientRect(x: number, y: number, width: number, height: number, topLeftColor: number, topRightColor: number, bottomRightColor: number, bottomLeftColor: number): void;
        drawCircle(centerX: number, centerY: number, angleFrom: number, angleTo: number, segments: number, radius: number, color: $Color_): void;
        drawCircle(centerX: number, centerY: number, segments: number, radius: number, color: $Color_): void;
        recordQuads(): void;
        submitQuads(): void;
        drawText(text: $Component_, x: number, y: number, scale: number, color: number): void;
        drawText(text: $Component_, x: number, y: number, scale: number, color: number, anchorPoint: $OwoUIDrawContext$TextAnchor_): void;
        drawSpectrum(x: number, y: number, width: number, height: number, vertical: boolean): void;
        drawRing(centerX: number, centerY: number, angleFrom: number, angleTo: number, segments: number, innerRadius: number, outerRadius: number, innerColor: $Color_, outerColor: $Color_): void;
        drawRing(centerX: number, centerY: number, segments: number, innerRadius: number, outerRadius: number, innerColor: $Color_, outerColor: $Color_): void;
        drawInsets(x: number, y: number, width: number, height: number, insets: $Insets_, color: number): void;
        drawInspector(root: $ParentComponent, mouseX: number, mouseY: number, onlyHovered: boolean): void;
        /**
         * @deprecated
         */
        static PANEL_TEXTURE: $ResourceLocation;
        static PANEL_NINE_PATCH_TEXTURE: $ResourceLocation;
        static MIN_GUI_Z: number;
        static PANEL_INSET_NINE_PATCH_TEXTURE: $ResourceLocation;
        /**
         * @deprecated
         */
        static DARK_PANEL_TEXTURE: $ResourceLocation;
        /**
         * @deprecated
         */
        static PANEL_INSET_TEXTURE: $ResourceLocation;
        static DARK_PANEL_NINE_PATCH_TEXTURE: $ResourceLocation;
        static MAX_GUI_Z: number;
    }
    export class $Positioning implements $Animatable<$Positioning> {
        static across(xPercent: number, yPercent: number): $Positioning;
        withX(x: number): $Positioning;
        withY(y: number): $Positioning;
        static parse(positioningElement: $Element): $Positioning;
        isRelative(): boolean;
        static layout(): $Positioning;
        static absolute(xPixels: number, yPixels: number): $Positioning;
        static relative(xPercent: number, yPercent: number): $Positioning;
        interpolate(next: $Positioning, delta: number): $Positioning;
        x: number;
        y: number;
        type: $Positioning$Type;
    }
    export class $Size extends $Record {
        static of(width: number, height: number): $Size;
        static zero(): $Size;
        static square(sideLength: number): $Size;
        width(): number;
        height(): number;
        /**
         * @deprecated
         */
        constructor(width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $Size}.
     */
    export type $Size_ = { height?: number, width?: number,  } | [height?: number, width?: number, ];
    export class $Component {
    }
    export interface $Component extends $PositionedRectangle {
        remove(): void;
        parent(): $ParentComponent;
        inflate(arg0: $Size_): void;
        update(delta: number, mouseX: number, mouseY: number): void;
        x(): number;
        id(): string;
        id(arg0: string): $Component;
        root(): $ParentComponent;
        mount(arg0: $ParentComponent, arg1: number, arg2: number): void;
        y(): number;
        width(): number;
        configure<C extends $Component>(arg0: $Consumer_<C>): C;
        height(): number;
        draw(arg0: $OwoUIDrawContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        tooltip(tooltip: $Collection_<$Component_>): $Component;
        tooltip(tooltip: $Component_): $Component;
        tooltip(): $List<$ClientTooltipComponent>;
        tooltip(arg0: $List_<$ClientTooltipComponent>): $Component;
        charTyped(): $EventSource<$CharTyped>;
        moveTo(x: number, y: number): void;
        dismount(arg0: $Component$DismountReason_): void;
        focusHandler(): $FocusHandler;
        positioning(): $AnimatableProperty<$Positioning>;
        positioning(arg0: $Positioning): $Component;
        horizontalSizing(arg0: $Sizing): $Component;
        horizontalSizing(): $AnimatableProperty<$Sizing>;
        margins(): $AnimatableProperty<$Insets>;
        margins(arg0: $Insets_): $Component;
        verticalSizing(arg0: $Sizing): $Component;
        verticalSizing(): $AnimatableProperty<$Sizing>;
        mouseDown(): $EventSource<$MouseDown>;
        shouldDrawTooltip(mouseX: number, mouseY: number): boolean;
        cursorStyle(): $CursorStyle;
        cursorStyle(arg0: $CursorStyle_): $Component;
        onMouseDown(arg0: number, arg1: number, arg2: number): boolean;
        onMouseUp(arg0: number, arg1: number, arg2: number): boolean;
        mouseUp(): $EventSource<$MouseUp>;
        mouseScroll(): $EventSource<$MouseScroll>;
        mouseDrag(): $EventSource<$MouseDrag>;
        keyPress(): $EventSource<$KeyPress>;
        focusGained(): $EventSource<$FocusGained>;
        focusLost(): $EventSource<$FocusLost>;
        mouseEnter(): $EventSource<$MouseEnter>;
        mouseLeave(): $EventSource<$MouseLeave>;
        onMouseScroll(arg0: number, arg1: number, arg2: number): boolean;
        onMouseDrag(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        onKeyPress(arg0: number, arg1: number, arg2: number): boolean;
        onCharTyped(arg0: string, arg1: number): boolean;
        canFocus(source: $Component$FocusSource_): boolean;
        onFocusGained(arg0: $Component$FocusSource_): void;
        onFocusLost(): void;
        parseProperties(model: $UIModel, element: $Element, children: $Map_<string, $Element>): void;
        zIndex(): number;
        zIndex(arg0: number): $Component;
        sizing(sizing: $Sizing): $Component;
        sizing(horizontalSizing: $Sizing, verticalSizing: $Sizing): $Component;
        updateX(arg0: number): void;
        updateY(arg0: number): void;
        drawTooltip(context: $OwoUIDrawContext, mouseX: number, mouseY: number, partialTicks: number, delta: number): void;
        drawFocusHighlight(context: $OwoUIDrawContext, mouseX: number, mouseY: number, partialTicks: number, delta: number): void;
        isInBoundingBox(x: number, y: number): boolean;
        hasParent(): boolean;
        fullSize(): $Size;
        baseX(): number;
        baseY(): number;
    }
    export class $VerticalAlignment extends $Enum<$VerticalAlignment> {
        static values(): $VerticalAlignment[];
        static valueOf(name: string): $VerticalAlignment;
        static parse(element: $Element): $VerticalAlignment;
        align(componentWidth: number, span: number): number;
        static CENTER: $VerticalAlignment;
        static TOP: $VerticalAlignment;
        static BOTTOM: $VerticalAlignment;
    }
    /**
     * Values that may be interpreted as {@link $VerticalAlignment}.
     */
    export type $VerticalAlignment_ = "top" | "center" | "bottom";
    export class $Easing {
        static EXPO: $Easing;
        static QUADRATIC: $Easing;
        static QUARTIC: $Easing;
        static SINE: $Easing;
        static LINEAR: $Easing;
        static CUBIC: $Easing;
    }
    export interface $Easing {
        apply(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Easing}.
     */
    export type $Easing_ = ((arg0: number) => number);
    export class $CursorStyle extends $Enum<$CursorStyle> {
        static values(): $CursorStyle[];
        static valueOf(name: string): $CursorStyle;
        static VERTICAL_RESIZE: $CursorStyle;
        static MOVE: $CursorStyle;
        glfw: number;
        static POINTER: $CursorStyle;
        static NESW_RESIZE: $CursorStyle;
        static CROSSHAIR: $CursorStyle;
        static NOT_ALLOWED: $CursorStyle;
        static TEXT: $CursorStyle;
        static HORIZONTAL_RESIZE: $CursorStyle;
        static NONE: $CursorStyle;
        static NWSE_RESIZE: $CursorStyle;
        static HAND: $CursorStyle;
    }
    /**
     * Values that may be interpreted as {@link $CursorStyle}.
     */
    export type $CursorStyle_ = "none" | "pointer" | "text" | "hand" | "crosshair" | "move" | "horizontal_resize" | "vertical_resize" | "nwse_resize" | "nesw_resize" | "not_allowed";
    export class $Animation<A extends $Animatable<A>> {
        backwards(): $Animation<A>;
        forwards(): $Animation<A>;
        reverse(): $Animation<A>;
        update(delta: number): void;
        loop(loop: boolean): $Animation<A>;
        direction(): $Animation$Direction;
        static compose(...elements: $Animation<never>[]): $Animation$Composed;
        finished(): $EventSource<$Animation$Finished>;
        looping(): boolean;
        constructor(duration: number, setter: $Consumer_<A>, easing: $Easing_, from: A, to: A);
    }
    export class $OwoUIDrawContext$TextAnchor extends $Enum<$OwoUIDrawContext$TextAnchor> {
        static values(): $OwoUIDrawContext$TextAnchor[];
        static valueOf(name: string): $OwoUIDrawContext$TextAnchor;
        static TOP_LEFT: $OwoUIDrawContext$TextAnchor;
        static BOTTOM_RIGHT: $OwoUIDrawContext$TextAnchor;
        static TOP_RIGHT: $OwoUIDrawContext$TextAnchor;
        static BOTTOM_LEFT: $OwoUIDrawContext$TextAnchor;
    }
    /**
     * Values that may be interpreted as {@link $OwoUIDrawContext$TextAnchor}.
     */
    export type $OwoUIDrawContext$TextAnchor_ = "top_right" | "bottom_right" | "top_left" | "bottom_left";
    export class $Insets extends $Record implements $Animatable<$Insets> {
        withTop(top: number): $Insets;
        withBottom(bottom: number): $Insets;
        withLeft(left: number): $Insets;
        withRight(right: number): $Insets;
        vertical(): number;
        static vertical(inset: number): $Insets;
        bottom(): number;
        static bottom(bottom: number): $Insets;
        add(top: number, bottom: number, left: number, right: number): $Insets;
        static of(inset: number): $Insets;
        static of(top: number, bottom: number, left: number, right: number): $Insets;
        static parse(insetsElement: $Element): $Insets;
        static top(top: number): $Insets;
        top(): number;
        left(): number;
        static left(left: number): $Insets;
        static right(right: number): $Insets;
        right(): number;
        interpolate(next: $Insets_, delta: number): $Insets;
        static none(): $Insets;
        static both(horizontal: number, vertical: number): $Insets;
        inverted(): $Insets;
        static horizontal(inset: number): $Insets;
        horizontal(): number;
        /**
         * @deprecated
         */
        constructor(top: number, bottom: number, left: number, right: number);
    }
    /**
     * Values that may be interpreted as {@link $Insets}.
     */
    export type $Insets_ = { left?: number, top?: number, right?: number, bottom?: number,  } | [left?: number, top?: number, right?: number, bottom?: number, ];
    export class $Component$DismountReason extends $Enum<$Component$DismountReason> {
        static values(): $Component$DismountReason[];
        static valueOf(name: string): $Component$DismountReason;
        static LAYOUT_INFLATION: $Component$DismountReason;
        static REMOVED: $Component$DismountReason;
    }
    /**
     * Values that may be interpreted as {@link $Component$DismountReason}.
     */
    export type $Component$DismountReason_ = "layout_inflation" | "removed";
    export class $Animatable<T extends $Animatable<T>> {
    }
    export interface $Animatable<T extends $Animatable<T>> {
        interpolate(arg0: T, arg1: number): T;
    }
    /**
     * Values that may be interpreted as {@link $Animatable}.
     */
    export type $Animatable_<T> = ((arg0: T, arg1: number) => T);
    export class $Component$FocusSource extends $Enum<$Component$FocusSource> {
        static values(): $Component$FocusSource[];
        static valueOf(name: string): $Component$FocusSource;
        static MOUSE_CLICK: $Component$FocusSource;
        static KEYBOARD_CYCLE: $Component$FocusSource;
    }
    /**
     * Values that may be interpreted as {@link $Component$FocusSource}.
     */
    export type $Component$FocusSource_ = "mouse_click" | "keyboard_cycle";
    export class $Animation$Direction extends $Enum<$Animation$Direction> {
        static values(): $Animation$Direction[];
        static valueOf(name: string): $Animation$Direction;
        reversed(): $Animation$Direction;
        static BACKWARDS: $Animation$Direction;
        multiplier: number;
        static FORWARDS: $Animation$Direction;
        targetDelta: number;
    }
    /**
     * Values that may be interpreted as {@link $Animation$Direction}.
     */
    export type $Animation$Direction_ = "forwards" | "backwards";
    export class $Animation$Finished {
        static newStream(): $EventStream<$Animation$Finished>;
    }
    export interface $Animation$Finished {
        onFinished(arg0: $Animation$Direction_, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $Animation$Finished}.
     */
    export type $Animation$Finished_ = ((arg0: $Animation$Direction, arg1: boolean) => void);
    export class $Animation$Composed {
        backwards(): void;
        forwards(): void;
        reverse(): void;
        loop(loop: boolean): void;
    }
    export class $Sizing$Method extends $Enum<$Sizing$Method> {
        static values(): $Sizing$Method[];
        static valueOf(name: string): $Sizing$Method;
        static EXPAND: $Sizing$Method;
        static FILL: $Sizing$Method;
        static FIXED: $Sizing$Method;
        static CONTENT: $Sizing$Method;
    }
    /**
     * Values that may be interpreted as {@link $Sizing$Method}.
     */
    export type $Sizing$Method_ = "fixed" | "content" | "fill" | "expand";
}
