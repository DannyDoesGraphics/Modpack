import { $Component_, $FormattedText, $Component } from "@package/net/minecraft/network/chat";
import { $BooleanConsumer_, $TooltipList } from "@package/dev/ftb/mods/ftblibrary/util";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Window } from "@package/com/mojang/blaze3d/platform";
import { $List, $List_ } from "@package/java/util";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $PositionedIngredient } from "@package/dev/ftb/mods/ftblibrary/util/client";
import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Color4I, $ImageIcon, $Icon } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $Iterable_, $Enum, $Runnable_, $Comparable, $Object, $Runnable } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Key, $KeyModifiers, $MouseButton } from "@package/dev/ftb/mods/ftblibrary/ui/input";
export * as input from "@package/dev/ftb/mods/ftblibrary/ui/input";

declare module "@package/dev/ftb/mods/ftblibrary/ui" {
    export class $ContextMenu extends $ModalPanel implements $PopupMenu {
        hasIcons(): boolean;
        setDrawVerticalSeparators(drawVerticalSeparators: boolean): void;
        setMaxRows(maxRows: number): void;
        getModalPanel(): $ModalPanel;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel, i: $List_<$ContextMenuItem>);
        set drawVerticalSeparators(value: boolean);
        set maxRows(value: number);
        get modalPanel(): $ModalPanel;
    }
    export class $Panel extends $Widget {
        getContentHeight(): number;
        setScrollStep(s: number): void;
        refreshWidgets(): void;
        alignWidgets(): void;
        setOnlyRenderWidgetsInside(value: boolean): void;
        setOnlyInteractWithWidgetsInside(value: boolean): void;
        getScrollX(): number;
        setScrollX(scroll: number): void;
        getScrollY(): number;
        setScrollY(scroll: number): void;
        getOnlyRenderWidgetsInside(): boolean;
        getOnlyInteractWithWidgetsInside(): boolean;
        isOffset(): boolean;
        drawOffsetBackground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        drawWidget(graphics: $GuiGraphics, theme: $Theme, widget: $Widget, x: number, y: number, w: number, h: number): void;
        scrollPanel(xDelta: number, yDelta: number): boolean;
        getScrollStep(): number;
        movePanelScroll(dx: number, dy: number): boolean;
        isMouseOverAnyWidget(): boolean;
        getContentWidth(): number;
        add(widget: $Widget): void;
        addAll(list: $Iterable_<$Widget>): void;
        setOffset(flag: boolean): void;
        align(layout: $WidgetLayout_): number;
        getWidgets(): $List<$Widget>;
        clearWidgets(): void;
        addWidgets(): void;
        getWidget(index: number): $Widget;
        drawBackground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel);
        get contentHeight(): number;
        get mouseOverAnyWidget(): boolean;
        get contentWidth(): number;
        get widgets(): $List<$Widget>;
    }
    export class $WidgetType extends $Enum<$WidgetType> {
        static mouseOver(mouseOver: boolean): $WidgetType;
        static values(): $WidgetType[];
        static valueOf(name: string): $WidgetType;
        static DISABLED: $WidgetType;
        static MOUSE_OVER: $WidgetType;
        static NORMAL: $WidgetType;
    }
    /**
     * Values that may be interpreted as {@link $WidgetType}.
     */
    export type $WidgetType_ = "normal" | "mouse_over" | "disabled";
    export class $Theme {
        getInvertedContentColor(): $Color4I;
        drawContainerSlot(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        drawCheckboxBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, radioButton: boolean): void;
        drawCheckbox(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_, selected: boolean, radioButton: boolean): void;
        drawHorizontalTab(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, selected: boolean): void;
        trimStringToWidthReverse(text: string, width: number): string;
        listFormattedStringToWidth(text: $FormattedText, width: number): $List<$FormattedText>;
        getFontHeight(): number;
        drawSlot(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        trimStringToWidth(text: string, width: number): string;
        trimStringToWidth(text: $FormattedText, width: number): $FormattedText;
        drawTextBox(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        getContentColor(type: $WidgetType_): $Color4I;
        getStringWidth(text: $FormattedText): number;
        getStringWidth(text: $FormattedCharSequence_): number;
        getStringWidth(text: string): number;
        drawButton(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawGui(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawWidget(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawScrollBar(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_, vertical: boolean): void;
        drawScrollBarBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawPanelBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        drawContextMenuBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        drawString(graphics: $GuiGraphics, text: $Object, x: number, y: number, flags: number): number;
        drawString(graphics: $GuiGraphics, text: $Object, x: number, y: number): number;
        drawString(graphics: $GuiGraphics, text: $Object, x: number, y: number, color: $Color4I, flags: number): number;
        getFont(): $Font;
        static MOUSE_OVER: number;
        static BACKGROUND_SQUARES: $ImageIcon;
        static CENTERED: number;
        static SHADOW: number;
        static CENTERED_V: number;
        static DARK: number;
        static renderDebugBoxes: boolean;
        static UNICODE: number;
        static DEFAULT: $Theme;
        constructor();
        get invertedContentColor(): $Color4I;
        get fontHeight(): number;
        get font(): $Font;
    }
    export class $BaseScreen extends $Panel {
        getTheme(): $Theme;
        setPreviousScreen(prevScreen: $Screen): void;
        initGui(): void;
        onPostInit(): void;
        shouldRenderBlur(): boolean;
        setRenderBlur(renderBlur: boolean): void;
        pushModalPanel(modalPanel: $ModalPanel): void;
        popModalPanel(): $ModalPanel;
        closeModalPanel(panel: $ModalPanel): void;
        anyModalPanelOpen(): boolean;
        getPrevScreen(): $Screen;
        usePreviousScreenOnBack(): boolean;
        onClosedByKey(key: $Key): boolean;
        onBack(): void;
        doesGuiPauseGame(): boolean;
        getContextMenu(): ($ModalPanel) | undefined;
        openPopupMenu(popupMenu: $PopupMenu_): void;
        openContextMenu(menuItems: $List_<$ContextMenuItem>): $ContextMenu;
        openContextMenu(newContextMenu: $ContextMenu): void;
        openDropdownMenu(dropDownMenu: $DropDownMenu): void;
        openDropdownMenu(menuItems: $List_<$ContextMenuItem>): $DropDownMenu;
        drawDefaultBackground(graphics: $GuiGraphics): boolean;
        getMaxZLevel(): number;
        openYesNoFull(title: $Component_, desc: $Component_, callback: $BooleanConsumer_): void;
        openYesNo(title: $Component_, desc: $Component_, callback: $Runnable_): void;
        setFocusedWidget(widget: $Widget): void;
        updateGui(mx: number, my: number, pt: number): void;
        getMinecraft(): $Minecraft;
        onInit(): boolean;
        shouldCloseOnEsc(): boolean;
        isMouseOver(x: number, y: number, w: number, h: number): boolean;
        isMouseOver(widget: $Widget): boolean;
        drawForeground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(previousScreen: $Screen);
        constructor();
        get theme(): $Theme;
        set previousScreen(value: $Screen);
        set renderBlur(value: boolean);
        get prevScreen(): $Screen;
        get contextMenu(): ($ModalPanel) | undefined;
        get maxZLevel(): number;
        set focusedWidget(value: $Widget);
        get minecraft(): $Minecraft;
    }
    export class $ModalPanel extends $Panel {
        getExtraZlevel(): number;
        setExtraZlevel(extraZlevel: number): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel);
    }
    export class $IScreenWrapper {
    }
    export interface $IScreenWrapper extends $IOpenableScreen {
        getGui(): $BaseScreen;
        closeGui(openPrevScreen: boolean): void;
        openGui(): void;
        get gui(): $BaseScreen;
    }
    /**
     * Values that may be interpreted as {@link $IScreenWrapper}.
     */
    export type $IScreenWrapper_ = (() => $BaseScreen);
    export class $CursorType extends $Enum<$CursorType> {
        static values(): $CursorType[];
        static valueOf(name: string): $CursorType;
        static set(type: $CursorType_): void;
        static VRESIZE: $CursorType;
        static ARROW: $CursorType;
        static CROSSHAIR: $CursorType;
        static IBEAM: $CursorType;
        static HRESIZE: $CursorType;
        static HAND: $CursorType;
    }
    /**
     * Values that may be interpreted as {@link $CursorType}.
     */
    export type $CursorType_ = "arrow" | "ibeam" | "crosshair" | "hand" | "hresize" | "vresize";
    export class $Button extends $Widget {
        setForceButtonSize(forceButtonSize: boolean): $Button;
        onClicked(arg0: $MouseButton): void;
        setIcon(i: $Icon): $Button;
        setTitle(s: $Component_): $Button;
        drawIcon(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        drawBackground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel, t: $Component_, i: $Icon);
        constructor(panel: $Panel);
        set forceButtonSize(value: boolean);
        set icon(value: $Icon);
        set title(value: $Component_);
    }
    export class $DropDownMenu extends $ModalPanel implements $PopupMenu {
        getModalPanel(): $ModalPanel;
        setMaxHeightPercent(maxHeightPercent: number): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel, i: $List_<$ContextMenuItem>);
        get modalPanel(): $ModalPanel;
        set maxHeightPercent(value: number);
    }
    export class $IOpenableScreen {
    }
    export interface $IOpenableScreen extends $Runnable {
        closeGui(): void;
        closeGui(openPrevScreen: boolean): void;
        closeContextMenu(): void;
        openGuiLater(): void;
        openAfter(runnable: $Runnable_): $Runnable;
        openGui(): void;
        run(): void;
    }
    /**
     * Values that may be interpreted as {@link $IOpenableScreen}.
     */
    export type $IOpenableScreen_ = (() => void);
    export class $WidgetLayout {
        static VERTICAL: $WidgetLayout;
        static NO_PADDING: $WidgetLayout$Padding;
        static HORIZONTAL: $WidgetLayout;
        static NONE: $WidgetLayout;
    }
    export interface $WidgetLayout {
        getLayoutPadding(): $WidgetLayout$Padding;
        align(arg0: $Panel): number;
        get layoutPadding(): $WidgetLayout$Padding;
    }
    /**
     * Values that may be interpreted as {@link $WidgetLayout}.
     */
    export type $WidgetLayout_ = ((arg0: $Panel) => number);
    export class $PopupMenu {
    }
    export interface $PopupMenu {
        getModalPanel(): $ModalPanel;
        get modalPanel(): $ModalPanel;
    }
    /**
     * Values that may be interpreted as {@link $PopupMenu}.
     */
    export type $PopupMenu_ = (() => $ModalPanel);
    export class $ContextMenuItem implements $Comparable<$ContextMenuItem> {
        getYesNoText(): $Component;
        isClickable(): boolean;
        setYesNoText(s: $Component_): $ContextMenuItem;
        setCloseMenu(v: boolean): $ContextMenuItem;
        createWidget(panel: $ContextMenu): $Widget;
        addMouseOverText(list: $TooltipList): void;
        static subMenu(title: $Component_, icon: $Icon, subItems: $List_<$ContextMenuItem>): $ContextMenuItem;
        onClicked(button: $Button, panel: $Panel, mouseButton: $MouseButton): void;
        compareTo(o: $ContextMenuItem): number;
        isEnabled(): boolean;
        static separator(): $ContextMenuItem;
        getIcon(): $Icon;
        static title(title: $Component_): $ContextMenuItem;
        getTitle(): $Component;
        setEnabled(enabled: boolean): $ContextMenuItem;
        drawIcon(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        static SEPARATOR: $ContextMenuItem;
        constructor(title: $Component_, icon: $Icon, callback: $Consumer_<$Button>);
        get clickable(): boolean;
        set closeMenu(value: boolean);
        get icon(): $Icon;
    }
    export class $Widget$DrawLayer extends $Enum<$Widget$DrawLayer> {
        static values(): $Widget$DrawLayer[];
        static valueOf(name: string): $Widget$DrawLayer;
        static FOREGROUND: $Widget$DrawLayer;
        static BACKGROUND: $Widget$DrawLayer;
    }
    /**
     * Values that may be interpreted as {@link $Widget$DrawLayer}.
     */
    export type $Widget$DrawLayer_ = "background" | "foreground";
    export class $Widget implements $IScreenWrapper, $Comparable<$Widget> {
        setX(v: number): void;
        setY(v: number): void;
        getGui(): $BaseScreen;
        getIngredientUnderMouse(): ($PositionedIngredient) | undefined;
        shouldDraw(): boolean;
        setPosAndSize(x: number, y: number, w: number, h: number): $Widget;
        getPosX(): number;
        getPosY(): number;
        onClosed(): void;
        updateMouseOver(mouseX: number, mouseY: number): void;
        checkMouseOver(mouseX: number, mouseY: number): boolean;
        mousePressed(button: $MouseButton): boolean;
        shouldAddMouseOverText(): boolean;
        addMouseOverText(list: $TooltipList): void;
        static isMouseButtonDown(button: $MouseButton): boolean;
        static getClipboardString(): string;
        static setClipboardString(string: string): void;
        static isCtrlKeyDown(): boolean;
        collidesWith(x: number, y: number, w: number, h: number): boolean;
        getWidgetType(): $WidgetType;
        getDrawLayer(): $Widget$DrawLayer;
        setDrawLayer(drawLayer: $Widget$DrawLayer_): void;
        isGhostIngredientTarget(ingredient: $Object): boolean;
        acceptGhostIngredient(ingredient: $Object): void;
        playClickSound(): void;
        getPartialTicks(): number;
        mouseDoubleClicked(button: $MouseButton): boolean;
        handleClick(click: string): boolean;
        handleClick(scheme: string, path: string): boolean;
        getY(): number;
        compareTo(widget: $Widget): number;
        isEnabled(): boolean;
        getParent(): $Panel;
        tick(): void;
        setSize(w: number, h: number): void;
        getTitle(): $Component;
        draw(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        getCursor(): $CursorType;
        getWindow(): $Window;
        getX(): number;
        setWidth(v: number): void;
        setHeight(v: number): void;
        static isKeyDown(key: number): boolean;
        keyPressed(key: $Key): boolean;
        isMouseOver(): boolean;
        mouseReleased(button: $MouseButton): void;
        mouseDragged(button: number, dragX: number, dragY: number): boolean;
        mouseScrolled(mouseX: number, mouseY: number, xDelta: number, yDelta: number): boolean;
        /**
         * @deprecated
         */
        mouseScrolled(yDelta: number): boolean;
        keyReleased(key: $Key): void;
        charTyped(c: string, modifiers: $KeyModifiers): boolean;
        /**
         * @deprecated
         */
        getScreen(): $Window;
        setPos(x: number, y: number): void;
        static isShiftKeyDown(): boolean;
        getMouseX(): number;
        getMouseY(): number;
        getWidth(): number;
        getHeight(): number;
        closeGui(openPrevScreen: boolean): void;
        openGui(): void;
        closeGui(): void;
        closeContextMenu(): void;
        openGuiLater(): void;
        openAfter(runnable: $Runnable_): $Runnable;
        run(): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(p: $Panel);
        get gui(): $BaseScreen;
        get ingredientUnderMouse(): ($PositionedIngredient) | undefined;
        static get ctrlKeyDown(): boolean;
        get widgetType(): $WidgetType;
        get partialTicks(): number;
        get enabled(): boolean;
        get parent(): $Panel;
        get title(): $Component;
        get cursor(): $CursorType;
        get window(): $Window;
        get mouseOver(): boolean;
        get screen(): $Window;
        static get shiftKeyDown(): boolean;
        get mouseX(): number;
        get mouseY(): number;
    }
}
