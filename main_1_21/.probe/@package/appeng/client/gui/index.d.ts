import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $FormattedText$StyledContentConsumer, $Component } from "@package/net/minecraft/network/chat";
import { $AbstractWidget, $Button$OnPress_, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $LytRect_ } from "@package/guideme/document";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $ScreenStyle, $Blitter } from "@package/appeng/client/gui/style";
import { $GenericStack, $GenericStack_, $AEKey } from "@package/appeng/api/stacks";
import { $Point } from "@package/appeng/client";
import { $Consumer_ } from "@package/java/util/function";
import { $DecimalFormat } from "@package/java/text";
import { $BigDecimal } from "@package/java/math";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $AETextField, $NumberEntryWidget, $AECheckbox, $Scrollbar, $Scrollbar$Style_, $AE2Button } from "@package/appeng/client/gui/widgets";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record, $Runnable_, $Object } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $AEBaseMenu, $SlotSemantic_ } from "@package/appeng/menu";
export * as widgets from "@package/appeng/client/gui/widgets";
export * as style from "@package/appeng/client/gui/style";
export * as me from "@package/appeng/client/gui/me";
export * as implementations from "@package/appeng/client/gui/implementations";
export * as layout from "@package/appeng/client/gui/layout";

declare module "@package/appeng/client/gui" {
    export class $ICompositeWidget {
    }
    export interface $ICompositeWidget {
        getBounds(): $Rect2i;
        tick(): void;
        setSize(arg0: number, arg1: number): void;
        setPosition(arg0: $Point): void;
        getTooltip(arg0: number, arg1: number): $Tooltip;
        isVisible(): boolean;
        onMouseDown(arg0: $Point, arg1: number): boolean;
        onMouseUp(arg0: $Point, arg1: number): boolean;
        onMouseDrag(arg0: $Point, arg1: number): boolean;
        populateScreen(arg0: $Consumer_<$AbstractWidget>, arg1: $Rect2i, arg2: $AEBaseScreen<never>): void;
        updateBeforeRender(): void;
        drawForegroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        drawBackgroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        onMouseWheel(arg0: $Point, arg1: number): boolean;
        addExclusionZones(arg0: $List_<$Rect2i>, arg1: $Rect2i): void;
        wantsAllMouseDownEvents(): boolean;
        wantsAllMouseUpEvents(): boolean;
        wantsAllMouseWheelEvents(): boolean;
        get bounds(): $Rect2i;
        set position(value: $Point);
        get visible(): boolean;
    }
    export class $Tooltip {
        getContent(): $List<$Component>;
        constructor(...arg0: $Component_[]);
        constructor(arg0: $List_<$Component_>);
        get content(): $List<$Component>;
    }
    export class $Tooltip$LineSplittingVisitor implements $FormattedText$StyledContentConsumer<$Object> {
    }
    export class $WidgetContainer$ResolvedTooltipArea {
    }
    export class $Icon extends $Enum<$Icon> {
        static values(): $Icon[];
        static valueOf(arg0: string): $Icon;
        getBlitter(): $Blitter;
        static SUBSTITUTION_ENABLED: $Icon;
        static TRANSPARENT_FACADES_OFF: $Icon;
        static TAB_CRAFTING: $Icon;
        static PATTERN_TERMINAL_NOT_FULL: $Icon;
        static VALID: $Icon;
        static BACKGROUND_SPATIAL_CELL: $Icon;
        static ARROW_LEFT: $Icon;
        static LEVEL_ITEM: $Icon;
        static POWER_UNIT_RF: $Icon;
        static SCHEDULING_RANDOM: $Icon;
        static HORIZONTAL_TAB_SELECTED: $Icon;
        static PLACEMENT_BLOCK: $Icon;
        static REDSTONE_HIGH: $Icon;
        static SLOT_BACKGROUND: $Icon;
        static CONDENSER_OUTPUT_TRASH: $Icon;
        static INSCRIBER_BUFFER_64: $Icon;
        static ACCESS_READ: $Icon;
        static POWER_UNIT_AE: $Icon;
        static BACKGROUND_ORE: $Icon;
        height: number;
        static LOCKED: $Icon;
        static INSCRIBER_COMBINED_SIDES: $Icon;
        static BACKGROUND_SPATIAL_CELL_NO_SHADOW: $Icon;
        static BACKGROUND_VIEW_CELL: $Icon;
        static ARROW_RIGHT: $Icon;
        static INSCRIBER_BUFFER_1: $Icon;
        static SUBSTITUTION_DISABLED: $Icon;
        static LEVEL_ENERGY: $Icon;
        static FUZZY_PERCENT_50: $Icon;
        static INSCRIBER_BUFFER_4: $Icon;
        static HORIZONTAL_TAB_FOCUS: $Icon;
        static REDSTONE_IGNORE: $Icon;
        static STORAGE_FILTER_EXTRACTABLE_NONE: $Icon;
        static REDSTONE_OFF: $Icon;
        static COG_DISABLED: $Icon;
        static BACKGROUND_WIRELESS_BOOSTER: $Icon;
        static S_CYCLE: $Icon;
        static PATTERN_TERMINAL_ALL: $Icon;
        static BLOCKING_MODE_NO: $Icon;
        static SEARCH_REI_AUTO_CLEAR: $Icon;
        static TERMINAL_STYLE_SMALL: $Icon;
        static TAB_BUTTON_BACKGROUND_BORDERLESS_FOCUS: $Icon;
        static ENTER: $Icon;
        static BACKGROUND_ENCODED_PATTERN: $Icon;
        static VIEW_MODE_ALL: $Icon;
        static INVALID: $Icon;
        static FUZZY_PERCENT_25: $Icon;
        static TRANSPARENT_FACADES_ON: $Icon;
        static S_STORAGE: $Icon;
        static TAB_BUTTON_BACKGROUND: $Icon;
        static COG: $Icon;
        static FULLNESS_EMPTY: $Icon;
        static PLACEMENT_ITEM: $Icon;
        static ACCESS_READ_WRITE: $Icon;
        static SEARCH_AUTO_FOCUS_REMEMBER: $Icon;
        static REDSTONE_ABOVE_EQUAL: $Icon;
        static HELP: $Icon;
        static POWER_UNIT_J: $Icon;
        static SCHEDULING_DEFAULT: $Icon;
        static TOOLBAR_BUTTON_BACKGROUND_FOCUS: $Icon;
        static FILTER_ON_EXTRACT_DISABLED: $Icon;
        static BACKGROUND_INGOT: $Icon;
        static BACKGROUND_SINGULARITY: $Icon;
        static TYPE_FILTER_ALL: $Icon;
        static BLACKLIST: $Icon;
        static TYPE_FILTER_FLUIDS: $Icon;
        static BACKGROUND_STORAGE_COMPONENT: $Icon;
        static COPY_MODE_OFF: $Icon;
        static ACCESS_WRITE: $Icon;
        static FULLNESS_FULL: $Icon;
        x: number;
        width: number;
        y: number;
        static SORT_BY_MOD: $Icon;
        static BACKGROUND_UPGRADE: $Icon;
        static FUZZY_IGNORE: $Icon;
        static COPY_MODE_ON: $Icon;
        static S_FLUID_SUBSTITUTION_DISABLED: $Icon;
        static POWER_UNIT_W: $Icon;
        static BACKGROUND_WIRELESS_TERM: $Icon;
        static TEXTURE_HEIGHT: number;
        static TERMINAL_STYLE_MEDIUM: $Icon;
        static S_MACHINE: $Icon;
        static REDSTONE_ON: $Icon;
        static BACKGROUND_TRASH: $Icon;
        static PRIORITY: $Icon;
        static POWER_UNIT_EU: $Icon;
        static S_CRAFT: $Icon;
        static AUTO_EXPORT_ON: $Icon;
        static HORIZONTAL_TAB: $Icon;
        static S_ARROW_UP: $Icon;
        static SCHEDULING_ROUND_ROBIN: $Icon;
        static S_SUBSTITUTION_DISABLED: $Icon;
        static S_TERMINAL: $Icon;
        static SORT_BY_NAME: $Icon;
        static CONDENSER_OUTPUT_MATTER_BALL: $Icon;
        static PATTERN_ACCESS_HIDE: $Icon;
        static S_ARROW_DOWN: $Icon;
        static VIEW_MODE_CRAFTING: $Icon;
        static SORT_BY_INVENTORY_TWEAKS: $Icon;
        static WHITELIST: $Icon;
        static TERMINAL_STYLE_FULL: $Icon;
        static AUTO_EXPORT_OFF: $Icon;
        static S_FLUID_SUBSTITUTION_ENABLED: $Icon;
        static FUZZY_PERCENT_99: $Icon;
        static TERMINAL_STYLE_TALL: $Icon;
        static SEARCH_AUTO_FOCUS: $Icon;
        static TEXTURE: $ResourceLocation;
        static STORAGE_FILTER_EXTRACTABLE_ONLY: $Icon;
        static BACKGROUND_PLATE: $Icon;
        static ARROW_DOWN: $Icon;
        static S_SUBSTITUTION_ENABLED: $Icon;
        static S_PROCESSOR: $Icon;
        static TAB_BUTTON_BACKGROUND_BORDERLESS: $Icon;
        static BACKGROUND_DUST: $Icon;
        static PATTERN_TERMINAL_VISIBLE: $Icon;
        static BACKGROUND_FUEL: $Icon;
        static FLUID_SUBSTITUTION_ENABLED: $Icon;
        static POWER_UNIT_TR: $Icon;
        static SEARCH_REMEMBER: $Icon;
        static SEARCH_JEI_AUTO_CLEAR: $Icon;
        static OVERLAY_ON: $Icon;
        static TAB_SMITHING: $Icon;
        static TYPE_FILTER_ITEMS: $Icon;
        static REDSTONE_PULSE: $Icon;
        static VIEW_MODE_STORED: $Icon;
        static TAB_PROCESSING: $Icon;
        static S_CLEAR: $Icon;
        static BLOCKING_MODE_YES: $Icon;
        static REDSTONE_LOW: $Icon;
        static FULLNESS_HALF: $Icon;
        static PATTERN_ACCESS_SHOW: $Icon;
        static CONDENSER_OUTPUT_SINGULARITY: $Icon;
        static BACKGROUND_CHARGABLE: $Icon;
        static FLUID_SUBSTITUTION_DISABLED: $Icon;
        static INSCRIBER_SEPARATE_SIDES: $Icon;
        static TEXTURE_WIDTH: number;
        static TOOLBAR_BUTTON_BACKGROUND_HOVER: $Icon;
        static CRAFT_HAMMER: $Icon;
        static OVERLAY_OFF: $Icon;
        static FILTER_ON_EXTRACT_ENABLED: $Icon;
        static TAB_BUTTON_BACKGROUND_FOCUS: $Icon;
        static ARROW_UP: $Icon;
        static SORT_BY_AMOUNT: $Icon;
        static UNLOCKED: $Icon;
        static FUZZY_PERCENT_75: $Icon;
        static BACKGROUND_PRIMARY_OUTPUT: $Icon;
        static SEARCH_JEI: $Icon;
        static BACKGROUND_STORAGE_CELL: $Icon;
        static SEARCH_DEFAULT: $Icon;
        static TOOLBAR_BUTTON_BACKGROUND: $Icon;
        static REDSTONE_BELOW: $Icon;
        static BACK: $Icon;
        static TAB_STONECUTTING: $Icon;
        static BACKGROUND_BLANK_PATTERN: $Icon;
        static SEARCH_REI: $Icon;
        static WHITE_ARROW_DOWN: $Icon;
        static CLEAR: $Icon;
        get blitter(): $Blitter;
    }
    /**
     * Values that may be interpreted as {@link $Icon}.
     */
    export type $Icon_ = "redstone_low" | "redstone_high" | "redstone_pulse" | "redstone_ignore" | "redstone_off" | "redstone_on" | "redstone_above_equal" | "redstone_below" | "clear" | "enter" | "white_arrow_down" | "locked" | "unlocked" | "help" | "background_primary_output" | "background_storage_cell" | "view_mode_stored" | "view_mode_all" | "view_mode_crafting" | "blocking_mode_no" | "blocking_mode_yes" | "back" | "transparent_facades_off" | "transparent_facades_on" | "type_filter_items" | "type_filter_fluids" | "type_filter_all" | "background_ore" | "search_auto_focus" | "search_default" | "search_jei" | "search_rei" | "search_auto_focus_remember" | "search_remember" | "search_jei_auto_clear" | "search_rei_auto_clear" | "background_plate" | "background_dust" | "tab_crafting" | "tab_processing" | "tab_smithing" | "tab_stonecutting" | "arrow_up" | "arrow_down" | "arrow_right" | "arrow_left" | "substitution_enabled" | "storage_filter_extractable_only" | "storage_filter_extractable_none" | "substitution_disabled" | "fluid_substitution_enabled" | "fluid_substitution_disabled" | "filter_on_extract_enabled" | "filter_on_extract_disabled" | "background_ingot" | "background_storage_component" | "sort_by_name" | "sort_by_amount" | "cog" | "cog_disabled" | "level_item" | "sort_by_inventory_tweaks" | "sort_by_mod" | "priority" | "background_view_cell" | "background_wireless_term" | "fullness_empty" | "fullness_half" | "fullness_full" | "level_energy" | "pattern_access_show" | "pattern_access_hide" | "pattern_terminal_visible" | "pattern_terminal_all" | "pattern_terminal_not_full" | "background_trash" | "fuzzy_percent_25" | "fuzzy_percent_50" | "fuzzy_percent_75" | "fuzzy_percent_99" | "fuzzy_ignore" | "inscriber_separate_sides" | "inscriber_combined_sides" | "auto_export_off" | "auto_export_on" | "inscriber_buffer_4" | "inscriber_buffer_64" | "inscriber_buffer_1" | "background_wireless_booster" | "condenser_output_trash" | "condenser_output_matter_ball" | "condenser_output_singularity" | "background_encoded_pattern" | "invalid" | "valid" | "whitelist" | "blacklist" | "horizontal_tab" | "horizontal_tab_selected" | "horizontal_tab_focus" | "background_blank_pattern" | "toolbar_button_background" | "toolbar_button_background_focus" | "toolbar_button_background_hover" | "access_write" | "access_read" | "access_read_write" | "craft_hammer" | "background_chargable" | "power_unit_ae" | "power_unit_eu" | "power_unit_j" | "power_unit_w" | "power_unit_rf" | "power_unit_tr" | "background_singularity" | "copy_mode_on" | "background_spatial_cell_no_shadow" | "background_spatial_cell" | "copy_mode_off" | "tab_button_background_borderless" | "tab_button_background" | "slot_background" | "background_fuel" | "terminal_style_small" | "terminal_style_medium" | "terminal_style_tall" | "terminal_style_full" | "background_upgrade" | "placement_block" | "placement_item" | "tab_button_background_borderless_focus" | "tab_button_background_focus" | "scheduling_default" | "scheduling_round_robin" | "scheduling_random" | "overlay_off" | "overlay_on" | "s_arrow_up" | "s_arrow_down" | "s_clear" | "s_cycle" | "s_substitution_enabled" | "s_substitution_disabled" | "s_fluid_substitution_enabled" | "s_fluid_substitution_disabled" | "s_storage" | "s_processor" | "s_craft" | "s_terminal" | "s_machine";
    export class $DashedRectangle {
        static render(arg0: $PoseStack, arg1: $LytRect_, arg2: $DashPattern_, arg3: number): void;
    }
    export class $AEBaseScreen<T extends $AEBaseMenu> extends $AbstractContainerScreen<T> {
        static isSameInventory(arg0: $Slot, arg1: $Slot): boolean;
        drawItem(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $ItemStack_): void;
        getExclusionZones(): $List<$Rect2i>;
        renderSlot(arg0: $GuiGraphics, arg1: $Slot): void;
        getStyle(): $ScreenStyle;
        containerTick(): void;
        drawTooltip(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $List_<$Component_>): void;
        repositionSlots(arg0: $SlotSemantic_): void;
        setSlotsHidden(arg0: $SlotSemantic_, arg1: boolean): void;
        drawTooltipWithHeader(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $List_<$Component_>): void;
        drawFG(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        drawBG(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        isHandlingRightClick(): boolean;
        getStackUnderMouse(arg0: number, arg1: number): $StackWithBounds;
        switchToScreen(arg0: $AEBaseScreen<never>): void;
        imageWidth: number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static TEXT_ID_DIALOG_TITLE: string;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: T, arg1: $Inventory, arg2: $Component_, arg3: $ScreenStyle);
        get exclusionZones(): $List<$Rect2i>;
        get style(): $ScreenStyle;
        get handlingRightClick(): boolean;
    }
    export class $MathExpressionParser {
        static parse(arg0: string, arg1: $DecimalFormat): ($BigDecimal) | undefined;
        constructor();
    }
    export class $DashPattern extends $Record {
        onLength(): number;
        offLength(): number;
        animationCycleMs(): number;
        color(): number;
        width(): number;
        constructor(width: number, onLength: number, offLength: number, color: number, animationCycleMs: number);
    }
    /**
     * Values that may be interpreted as {@link $DashPattern}.
     */
    export type $DashPattern_ = { animationCycleMs?: number, onLength?: number, width?: number, offLength?: number, color?: number,  } | [animationCycleMs?: number, onLength?: number, width?: number, offLength?: number, color?: number, ];
    export class $StackWithBounds extends $Record {
        static fromSlot(arg0: $AEBaseScreen<never>, arg1: $Slot): $StackWithBounds;
        stack(): $GenericStack;
        bounds(): $Rect2i;
        constructor(stack: $GenericStack_, bounds: $Rect2i);
    }
    /**
     * Values that may be interpreted as {@link $StackWithBounds}.
     */
    export type $StackWithBounds_ = { stack?: $GenericStack_, bounds?: $Rect2i,  } | [stack?: $GenericStack_, bounds?: $Rect2i, ];
    export class $AEBaseScreen$SavedSlotInfo extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $AEBaseScreen$SavedSlotInfo}.
     */
    export type $AEBaseScreen$SavedSlotInfo_ = { y?: number, x?: number, slot?: $Slot, active?: boolean,  } | [y?: number, x?: number, slot?: $Slot, active?: boolean, ];
    export class $WidgetContainer {
        addButton(arg0: string, arg1: $Component_, arg2: $Runnable_): $AE2Button;
        addButton(arg0: string, arg1: $Component_, arg2: $Button$OnPress_): $AE2Button;
        add(arg0: string, arg1: $ICompositeWidget): void;
        add(arg0: string, arg1: $AbstractWidget): void;
        tick(): void;
        getTooltip(arg0: number, arg1: number): $Tooltip;
        onMouseDown(arg0: $Point, arg1: number): boolean;
        onMouseUp(arg0: $Point, arg1: number): boolean;
        onMouseDrag(arg0: $Point, arg1: number): boolean;
        updateBeforeRender(): void;
        drawForegroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        drawBackgroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        hitTest(arg0: $Point): boolean;
        addExclusionZones(arg0: $List_<$Rect2i>, arg1: $Rect2i): void;
        addOpenPriorityButton(): void;
        addBackgroundPanel(arg0: string): void;
        addScrollBar(arg0: string, arg1: $Scrollbar$Style_): $Scrollbar;
        addScrollBar(arg0: string): $Scrollbar;
        addTextField(arg0: string): $AETextField;
        addNumberEntryWidget(arg0: string, arg1: $NumberEntryType_): $NumberEntryWidget;
        addCheckbox(arg0: string, arg1: $Component_, arg2: $Runnable_): $AECheckbox;
        setTooltipAreaEnabled(arg0: string, arg1: boolean): void;
        constructor(arg0: $ScreenStyle);
    }
    export class $NumberEntryType extends $Record {
        amountPerUnit(): number;
        static of(arg0: $AEKey): $NumberEntryType;
        unit(): string;
        static ENERGY: $NumberEntryType;
        static UNITLESS: $NumberEntryType;
        constructor(amountPerUnit: number, unit: string);
    }
    /**
     * Values that may be interpreted as {@link $NumberEntryType}.
     */
    export type $NumberEntryType_ = { unit?: string, amountPerUnit?: number,  } | [unit?: string, amountPerUnit?: number, ];
    export class $AESubScreen<C extends $AEBaseMenu, P extends $AEBaseScreen<C>> extends $AEBaseScreen<C> {
        getParent(): P;
        imageWidth: number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static TEXT_ID_DIALOG_TITLE: string;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: P, arg1: string);
        get parent(): P;
    }
    export class $Rects {
        static expand(arg0: $Rect2i, arg1: number): $Rect2i;
        static move(arg0: $Rect2i, arg1: number, arg2: number): $Rect2i;
        static ZERO: $Rect2i;
    }
    export class $TextOverride {
        setContent(arg0: $Component_): void;
        isHidden(): boolean;
        getContent(): $Component;
        setHidden(arg0: boolean): void;
        constructor();
    }
}
