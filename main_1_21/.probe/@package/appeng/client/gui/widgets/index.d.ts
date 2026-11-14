import { $IProgressProvider } from "@package/appeng/menu/interfaces";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ViewItems, $PowerUnit, $SortDir, $ActionItems, $Setting, $SortOrder, $ActionItems_ } from "@package/appeng/api/config";
import { $IUpgradeableObject } from "@package/appeng/api/upgrades";
import { $EditBox, $Button, $AbstractWidget, $AbstractButton, $Button$OnPress_, $WidgetSprites } from "@package/net/minecraft/client/gui/components";
import { $List, $List_, $OptionalLong, $Set, $OptionalInt } from "@package/java/util";
import { $ScreenStyle, $Blitter, $WidgetStyle } from "@package/appeng/client/gui/style";
import { $CraftingStatusMenu } from "@package/appeng/menu/me/crafting";
import { $AEKeyType, $AEKey } from "@package/appeng/api/stacks";
import { $Point } from "@package/appeng/client";
import { $Duration_ } from "@package/java/time";
import { $Supplier_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $ISubMenuHost } from "@package/appeng/api/storage";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PositionedRectangle } from "@package/io/wispforest/owo/ui/core";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record, $Runnable_ } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $AEBaseMenu } from "@package/appeng/menu";
import { $Icon_, $AEBaseScreen, $ICompositeWidget, $NumberEntryType_, $Tooltip, $NumberEntryType } from "@package/appeng/client/gui";

declare module "@package/appeng/client/gui/widgets" {
    export class $ToggleButton$Listener {
    }
    export interface $ToggleButton$Listener {
        onChange(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $ToggleButton$Listener}.
     */
    export type $ToggleButton$Listener_ = ((arg0: boolean) => void);
    export class $ServerSettingToggleButton<T extends $Enum<T>> extends $SettingToggleButton<T> {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: $Setting<T>, arg1: T);
    }
    export class $AE2Button extends $Button {
        static renderButtonText(arg0: $GuiGraphics, arg1: $Font, arg2: $Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        static renderButtonText(arg0: $GuiGraphics, arg1: $Font, arg2: $Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Button$OnPress_);
        constructor(arg0: $Component_, arg1: $Button$OnPress_);
    }
    export class $SettingToggleButton$IHandler<T extends $SettingToggleButton<never>> {
    }
    export interface $SettingToggleButton$IHandler<T extends $SettingToggleButton<never>> {
        handle(arg0: T, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $SettingToggleButton$IHandler}.
     */
    export type $SettingToggleButton$IHandler_<T> = ((arg0: T, arg1: boolean) => void);
    export class $ToggleButton extends $IconButton implements $ITooltip {
        setState(arg0: boolean): void;
        setTooltipOn(arg0: $List_<$Component_>): void;
        setTooltipOff(arg0: $List_<$Component_>): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: $Icon_, arg1: $Icon_, arg2: $Component_, arg3: $Component_, arg4: $ToggleButton$Listener_);
        constructor(arg0: $Icon_, arg1: $Icon_, arg2: $ToggleButton$Listener_);
        set state(value: boolean);
        set tooltipOn(value: $List_<$Component_>);
        set tooltipOff(value: $List_<$Component_>);
    }
    export class $InfoBar$TextWidget implements $InfoBar$Widget {
    }
    export class $IScrollSource {
    }
    export interface $IScrollSource {
        getCurrentScroll(): number;
        get currentScroll(): number;
    }
    /**
     * Values that may be interpreted as {@link $IScrollSource}.
     */
    export type $IScrollSource_ = (() => number);
    export class $ActionButton extends $IconButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: $ActionItems_, arg1: $Runnable_);
        constructor(arg0: $ActionItems_, arg1: $Consumer_<$ActionItems>);
    }
    export class $UpgradesPanel implements $ICompositeWidget {
        getBounds(): $Rect2i;
        setSize(arg0: number, arg1: number): void;
        setPosition(arg0: $Point): void;
        getTooltip(arg0: number, arg1: number): $Tooltip;
        populateScreen(arg0: $Consumer_<$AbstractWidget>, arg1: $Rect2i, arg2: $AEBaseScreen<never>): void;
        updateBeforeRender(): void;
        drawBackgroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        addExclusionZones(arg0: $List_<$Rect2i>, arg1: $Rect2i): void;
        tick(): void;
        isVisible(): boolean;
        onMouseDown(arg0: $Point, arg1: number): boolean;
        onMouseUp(arg0: $Point, arg1: number): boolean;
        onMouseDrag(arg0: $Point, arg1: number): boolean;
        drawForegroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        onMouseWheel(arg0: $Point, arg1: number): boolean;
        wantsAllMouseDownEvents(): boolean;
        wantsAllMouseUpEvents(): boolean;
        wantsAllMouseWheelEvents(): boolean;
        constructor(arg0: $List_<$Slot>);
        constructor(arg0: $List_<$Slot>, arg1: $Supplier_<$List<$Component>>);
        constructor(arg0: $List_<$Slot>, arg1: $IUpgradeableObject);
        get bounds(): $Rect2i;
        set position(value: $Point);
        get visible(): boolean;
    }
    export class $ValidationIcon extends $IconButton {
        setValid(arg0: boolean): void;
        setTooltip(arg0: $List_<$Component_>): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor();
        set valid(value: boolean);
    }
    export class $IResizableWidget {
    }
    export interface $IResizableWidget {
        resize(arg0: number, arg1: number): void;
        move(arg0: $Point): void;
    }
    export class $InfoBar$SpaceWidget implements $InfoBar$Widget {
    }
    export class $ToolboxPanel implements $ICompositeWidget {
        getBounds(): $Rect2i;
        setSize(arg0: number, arg1: number): void;
        setPosition(arg0: $Point): void;
        getTooltip(arg0: number, arg1: number): $Tooltip;
        drawBackgroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        tick(): void;
        isVisible(): boolean;
        onMouseDown(arg0: $Point, arg1: number): boolean;
        onMouseUp(arg0: $Point, arg1: number): boolean;
        onMouseDrag(arg0: $Point, arg1: number): boolean;
        populateScreen(arg0: $Consumer_<$AbstractWidget>, arg1: $Rect2i, arg2: $AEBaseScreen<never>): void;
        updateBeforeRender(): void;
        drawForegroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        onMouseWheel(arg0: $Point, arg1: number): boolean;
        addExclusionZones(arg0: $List_<$Rect2i>, arg1: $Rect2i): void;
        wantsAllMouseDownEvents(): boolean;
        wantsAllMouseUpEvents(): boolean;
        wantsAllMouseWheelEvents(): boolean;
        constructor(arg0: $ScreenStyle, arg1: $Component_);
        get bounds(): $Rect2i;
        set position(value: $Point);
        get visible(): boolean;
    }
    export class $TabButton extends $Button implements $ITooltip {
        isSelected(): boolean;
        setSelected(arg0: boolean): void;
        getStyle(): $TabButton$Style;
        setStyle(arg0: $TabButton$Style_): void;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        isTooltipAreaVisible(): boolean;
        getTooltipArea(): $Rect2i;
        getTooltipMessage(): $List<$Component>;
        isDisableBackground(): boolean;
        setDisableBackground(arg0: boolean): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: $Icon_, arg1: $Component_, arg2: $Button$OnPress_);
        constructor(arg0: $ItemStack_, arg1: $Component_, arg2: $Button$OnPress_);
        get tooltipAreaVisible(): boolean;
        get tooltipArea(): $Rect2i;
        get tooltipMessage(): $List<$Component>;
    }
    export class $AETextField extends $EditBox implements $IResizableWidget, $ITooltip {
        selectAll(): void;
        resize(arg0: number, arg1: number): void;
        move(arg0: $Point): void;
        isTooltipAreaVisible(): boolean;
        getTooltipArea(): $Rect2i;
        getTooltipMessage(): $List<$Component>;
        setSelectionColor(arg0: number): void;
        setTooltipMessage(arg0: $List_<$Component_>): void;
        setPlaceholder(arg0: $Component_): void;
        getPlaceholder(): $Component;
        canLoseFocus: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static BACKWARDS: number;
        active: boolean;
        static FORWARDS: number;
        static DEFAULT_TEXT_COLOR: number;
        constructor(arg0: $ScreenStyle, arg1: $Font, arg2: number, arg3: number, arg4: number, arg5: number);
        get tooltipAreaVisible(): boolean;
        get tooltipArea(): $Rect2i;
        set selectionColor(value: number);
    }
    export class $ProgressBar$Direction extends $Enum<$ProgressBar$Direction> {
        static values(): $ProgressBar$Direction[];
        static valueOf(arg0: string): $ProgressBar$Direction;
        static VERTICAL: $ProgressBar$Direction;
        static HORIZONTAL: $ProgressBar$Direction;
    }
    /**
     * Values that may be interpreted as {@link $ProgressBar$Direction}.
     */
    export type $ProgressBar$Direction_ = "horizontal" | "vertical";
    export class $EventRepeater$EventCallback {
    }
    export interface $EventRepeater$EventCallback {
        trigger(): void;
    }
    /**
     * Values that may be interpreted as {@link $EventRepeater$EventCallback}.
     */
    export type $EventRepeater$EventCallback_ = (() => void);
    export class $VerticalButtonBar implements $ICompositeWidget {
        add(arg0: $Button): void;
        getBounds(): $Rect2i;
        setSize(arg0: number, arg1: number): void;
        setPosition(arg0: $Point): void;
        populateScreen(arg0: $Consumer_<$AbstractWidget>, arg1: $Rect2i, arg2: $AEBaseScreen<never>): void;
        updateBeforeRender(): void;
        drawBackgroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        tick(): void;
        getTooltip(arg0: number, arg1: number): $Tooltip;
        isVisible(): boolean;
        onMouseDown(arg0: $Point, arg1: number): boolean;
        onMouseUp(arg0: $Point, arg1: number): boolean;
        onMouseDrag(arg0: $Point, arg1: number): boolean;
        drawForegroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        onMouseWheel(arg0: $Point, arg1: number): boolean;
        addExclusionZones(arg0: $List_<$Rect2i>, arg1: $Rect2i): void;
        wantsAllMouseDownEvents(): boolean;
        wantsAllMouseUpEvents(): boolean;
        wantsAllMouseWheelEvents(): boolean;
        constructor();
        get bounds(): $Rect2i;
        set position(value: $Point);
        get visible(): boolean;
    }
    export class $EventRepeater {
        isRepeating(): boolean;
        repeat(arg0: $EventRepeater$EventCallback_): void;
        stop(): void;
        tick(): void;
        constructor(arg0: $Duration_, arg1: $Duration_);
        get repeating(): boolean;
    }
    export class $AETextField$VisualBounds extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $AETextField$VisualBounds}.
     */
    export type $AETextField$VisualBounds_ = { left?: number, top?: number, right?: number, bottom?: number,  } | [left?: number, top?: number, right?: number, bottom?: number, ];
    export class $SettingToggleButton$ButtonAppearance extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SettingToggleButton$ButtonAppearance}.
     */
    export type $SettingToggleButton$ButtonAppearance_ = { tooltipLines?: $List_<$Component_>, icon?: $Icon_, item?: $Item_,  } | [tooltipLines?: $List_<$Component_>, icon?: $Icon_, item?: $Item_, ];
    export class $TabButton$Style extends $Enum<$TabButton$Style> {
        static values(): $TabButton$Style[];
        static valueOf(arg0: string): $TabButton$Style;
        static CORNER: $TabButton$Style;
        static BOX: $TabButton$Style;
        static HORIZONTAL: $TabButton$Style;
    }
    /**
     * Values that may be interpreted as {@link $TabButton$Style}.
     */
    export type $TabButton$Style_ = "corner" | "box" | "horizontal";
    export class $ConfirmableTextField extends $AETextField {
        setOnConfirm(arg0: $Runnable_): void;
        canLoseFocus: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static BACKWARDS: number;
        active: boolean;
        static FORWARDS: number;
        static DEFAULT_TEXT_COLOR: number;
        constructor(arg0: $ScreenStyle, arg1: $Font, arg2: number, arg3: number, arg4: number, arg5: number);
        set onConfirm(value: $Runnable_);
    }
    export class $ITickingWidget {
    }
    export interface $ITickingWidget {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $ITickingWidget}.
     */
    export type $ITickingWidget_ = (() => void);
    export class $InfoBar$StackWidget extends $Record implements $InfoBar$Widget {
    }
    /**
     * Values that may be interpreted as {@link $InfoBar$StackWidget}.
     */
    export type $InfoBar$StackWidget_ = { scale?: number, xPos?: number, what?: $AEKey, yPos?: number,  } | [scale?: number, xPos?: number, what?: $AEKey, yPos?: number, ];
    export class $OpenGuideButton extends $IconButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: $Button$OnPress_);
    }
    export class $ITooltip {
    }
    export interface $ITooltip {
        isTooltipAreaVisible(): boolean;
        getTooltipArea(): $Rect2i;
        getTooltipMessage(): $List<$Component>;
        get tooltipAreaVisible(): boolean;
        get tooltipArea(): $Rect2i;
        get tooltipMessage(): $List<$Component>;
    }
    export class $SettingToggleButton$EnumPair<T extends $Enum<T>> {
    }
    export class $Scrollbar$Style extends $Record {
        handleWidth(): number;
        disabledSprite(): $ResourceLocation;
        enabledSprite(): $ResourceLocation;
        handleHeight(): number;
        static create(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $Scrollbar$Style;
        constructor(enabledSprite: $ResourceLocation_, disabledSprite: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $Scrollbar$Style}.
     */
    export type $Scrollbar$Style_ = { enabledSprite?: $ResourceLocation_, disabledSprite?: $ResourceLocation_,  } | [enabledSprite?: $ResourceLocation_, disabledSprite?: $ResourceLocation_, ];
    export class $InfoBar {
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        constructor();
    }
    export class $CPUSelectionList implements $ICompositeWidget {
        getBounds(): $Rect2i;
        setSize(arg0: number, arg1: number): void;
        setPosition(arg0: $Point): void;
        getTooltip(arg0: number, arg1: number): $Tooltip;
        onMouseUp(arg0: $Point, arg1: number): boolean;
        updateBeforeRender(): void;
        drawBackgroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        onMouseWheel(arg0: $Point, arg1: number): boolean;
        tick(): void;
        isVisible(): boolean;
        onMouseDown(arg0: $Point, arg1: number): boolean;
        onMouseDrag(arg0: $Point, arg1: number): boolean;
        populateScreen(arg0: $Consumer_<$AbstractWidget>, arg1: $Rect2i, arg2: $AEBaseScreen<never>): void;
        drawForegroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        addExclusionZones(arg0: $List_<$Rect2i>, arg1: $Rect2i): void;
        wantsAllMouseDownEvents(): boolean;
        wantsAllMouseUpEvents(): boolean;
        wantsAllMouseWheelEvents(): boolean;
        constructor(arg0: $CraftingStatusMenu, arg1: $Scrollbar, arg2: $ScreenStyle);
        get bounds(): $Rect2i;
        set position(value: $Point);
        get visible(): boolean;
    }
    export class $KeyTypeSelectionButton extends $IconButton {
        static create<C extends $AEBaseMenu, P extends $AEBaseScreen<C>>(arg0: P, arg1: $ISubMenuHost, arg2: $Component_): $KeyTypeSelectionButton;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
    }
    export class $IconButton extends $Button implements $ITooltip {
        setVisibility(arg0: boolean): void;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        isTooltipAreaVisible(): boolean;
        getTooltipArea(): $Rect2i;
        getTooltipMessage(): $List<$Component>;
        isHalfSize(): boolean;
        setHalfSize(arg0: boolean): void;
        isDisableClickSound(): boolean;
        setDisableClickSound(arg0: boolean): void;
        isDisableBackground(): boolean;
        setDisableBackground(arg0: boolean): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: $Button$OnPress_);
        set visibility(value: boolean);
        get tooltipAreaVisible(): boolean;
        get tooltipArea(): $Rect2i;
        get tooltipMessage(): $List<$Component>;
    }
    export class $Scrollbar implements $IScrollSource, $ICompositeWidget {
        setRange(arg0: number, arg1: number, arg2: number): void;
        setCurrentScroll(arg0: number): void;
        isCaptureMouseWheel(): boolean;
        getBounds(): $Rect2i;
        tick(): void;
        setSize(arg0: number, arg1: number): void;
        setPosition(arg0: $Point): void;
        setVisible(arg0: boolean): void;
        setHeight(arg0: number): $Scrollbar;
        isVisible(): boolean;
        onMouseDown(arg0: $Point, arg1: number): boolean;
        onMouseUp(arg0: $Point, arg1: number): boolean;
        onMouseDrag(arg0: $Point, arg1: number): boolean;
        drawForegroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        onMouseWheel(arg0: $Point, arg1: number): boolean;
        wantsAllMouseUpEvents(): boolean;
        wantsAllMouseWheelEvents(): boolean;
        getCurrentScroll(): number;
        setCaptureMouseWheel(arg0: boolean): void;
        getTooltip(arg0: number, arg1: number): $Tooltip;
        populateScreen(arg0: $Consumer_<$AbstractWidget>, arg1: $Rect2i, arg2: $AEBaseScreen<never>): void;
        updateBeforeRender(): void;
        drawBackgroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        addExclusionZones(arg0: $List_<$Rect2i>, arg1: $Rect2i): void;
        wantsAllMouseDownEvents(): boolean;
        static BIG: $Scrollbar$Style;
        static SMALL: $Scrollbar$Style;
        static DEFAULT: $Scrollbar$Style;
        constructor(arg0: $Scrollbar$Style_);
        constructor();
        get bounds(): $Rect2i;
        set position(value: $Point);
        set height(value: number);
    }
    export class $SettingToggleButton<T extends $Enum<T>> extends $IconButton {
        getCurrentValue(): $PositionedRectangle;
        getSetting(): $Setting<$PositionedRectangle>;
        set(arg0: $PositionedRectangle): void;
        getNextValue(arg0: boolean): $PositionedRectangle;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: $Setting<$PositionedRectangle>, arg1: $PositionedRectangle, arg2: $SettingToggleButton$IHandler_<$SettingToggleButton<$PositionedRectangle>>);
        constructor(arg0: $Setting<$PositionedRectangle>, arg1: $PositionedRectangle, arg2: $Predicate_<$PositionedRectangle>, arg3: $SettingToggleButton$IHandler_<$SettingToggleButton<$PositionedRectangle>>);
        get currentValue(): $PositionedRectangle;
        get setting(): $Setting<$PositionedRectangle>;
    }
    export class $ProgressBar extends $AbstractWidget implements $ITooltip {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        isTooltipAreaVisible(): boolean;
        getTooltipArea(): $Rect2i;
        getTooltipMessage(): $List<$Component>;
        setFullMsg(arg0: $Component_): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: $IProgressProvider, arg1: $Blitter, arg2: $ProgressBar$Direction_);
        constructor(arg0: $IProgressProvider, arg1: $Blitter, arg2: $ProgressBar$Direction_, arg3: $Component_);
        get tooltipAreaVisible(): boolean;
        get tooltipArea(): $Rect2i;
        get tooltipMessage(): $List<$Component>;
        set fullMsg(value: $Component_);
    }
    export class $CommonButtons {
        static togglePowerUnit(): $SettingToggleButton<$PowerUnit>;
    }
    export class $NumberEntryWidget implements $ICompositeWidget {
        setMinValue(arg0: number): void;
        setMaxValue(arg0: number): void;
        setTextFieldBounds(arg0: $Rect2i): void;
        getLongValue(): $OptionalLong;
        setLongValue(arg0: number): void;
        getBounds(): $Rect2i;
        getType(): $NumberEntryType;
        setSize(arg0: number, arg1: number): void;
        setPosition(arg0: $Point): void;
        setActive(arg0: boolean): void;
        getIntValue(): $OptionalInt;
        populateScreen(arg0: $Consumer_<$AbstractWidget>, arg1: $Rect2i, arg2: $AEBaseScreen<never>): void;
        updateBeforeRender(): void;
        drawBackgroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        onMouseWheel(arg0: $Point, arg1: number): boolean;
        setTextFieldStyle(arg0: $WidgetStyle): void;
        setHideValidationIcon(arg0: boolean): void;
        setOnConfirm(arg0: $Runnable_): void;
        setOnChange(arg0: $Runnable_): void;
        startsWithEquals(): boolean;
        setType(arg0: $NumberEntryType_): void;
        tick(): void;
        getTooltip(arg0: number, arg1: number): $Tooltip;
        isVisible(): boolean;
        onMouseDown(arg0: $Point, arg1: number): boolean;
        onMouseUp(arg0: $Point, arg1: number): boolean;
        onMouseDrag(arg0: $Point, arg1: number): boolean;
        drawForegroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        addExclusionZones(arg0: $List_<$Rect2i>, arg1: $Rect2i): void;
        wantsAllMouseDownEvents(): boolean;
        wantsAllMouseUpEvents(): boolean;
        wantsAllMouseWheelEvents(): boolean;
        constructor(arg0: $ScreenStyle, arg1: $NumberEntryType_);
        set minValue(value: number);
        set maxValue(value: number);
        set textFieldBounds(value: $Rect2i);
        get bounds(): $Rect2i;
        set position(value: $Point);
        set active(value: boolean);
        get intValue(): $OptionalInt;
        set textFieldStyle(value: $WidgetStyle);
        set hideValidationIcon(value: boolean);
        set onConfirm(value: $Runnable_);
        set onChange(value: $Runnable_);
        get visible(): boolean;
    }
    export class $ISortSource {
    }
    export interface $ISortSource {
        getSortBy(): $SortOrder;
        getSortDisplay(): $ViewItems;
        getSortDir(): $SortDir;
        getSortKeyTypes(): $Set<$AEKeyType>;
        get sortBy(): $SortOrder;
        get sortDisplay(): $ViewItems;
        get sortDir(): $SortDir;
        get sortKeyTypes(): $Set<$AEKeyType>;
    }
    export class $InfoBar$IconWidget extends $Record implements $InfoBar$Widget {
    }
    /**
     * Values that may be interpreted as {@link $InfoBar$IconWidget}.
     */
    export type $InfoBar$IconWidget_ = { scale?: number, icon?: $Icon_, xPos?: number, yPos?: number,  } | [scale?: number, icon?: $Icon_, xPos?: number, yPos?: number, ];
    export class $AECheckbox extends $AbstractButton {
        setChangeListener(arg0: $Runnable_): void;
        isRadio(): boolean;
        isSelected(): boolean;
        setSelected(arg0: boolean): void;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        setRadio(arg0: boolean): void;
        static SPRITES: $WidgetSprites;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static SIZE: number;
        active: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ScreenStyle, arg5: $Component_);
        set changeListener(value: $Runnable_);
    }
    export class $InfoBar$Widget {
    }
    export interface $InfoBar$Widget {
    }
    export class $BackgroundPanel implements $ICompositeWidget {
        getBounds(): $Rect2i;
        setSize(arg0: number, arg1: number): void;
        setPosition(arg0: $Point): void;
        drawBackgroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        tick(): void;
        getTooltip(arg0: number, arg1: number): $Tooltip;
        isVisible(): boolean;
        onMouseDown(arg0: $Point, arg1: number): boolean;
        onMouseUp(arg0: $Point, arg1: number): boolean;
        onMouseDrag(arg0: $Point, arg1: number): boolean;
        populateScreen(arg0: $Consumer_<$AbstractWidget>, arg1: $Rect2i, arg2: $AEBaseScreen<never>): void;
        updateBeforeRender(): void;
        drawForegroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        onMouseWheel(arg0: $Point, arg1: number): boolean;
        addExclusionZones(arg0: $List_<$Rect2i>, arg1: $Rect2i): void;
        wantsAllMouseDownEvents(): boolean;
        wantsAllMouseUpEvents(): boolean;
        wantsAllMouseWheelEvents(): boolean;
        constructor(arg0: $Blitter);
        get bounds(): $Rect2i;
        set position(value: $Point);
        get visible(): boolean;
    }
}
