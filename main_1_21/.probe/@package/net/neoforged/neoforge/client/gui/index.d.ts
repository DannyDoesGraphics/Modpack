import { $IModInfo } from "@package/net/neoforged/neoforgespi/language";
import { $Codec } from "@package/com/mojang/serialization";
import { $ScrollPanel, $ModListWidget$ModEntry } from "@package/net/neoforged/neoforge/client/gui/widget";
import { $OptionInstance, $Minecraft, $DeltaTracker, $OptionInstance$ValueSet, $OptionInstance$TooltipSupplier_, $Options } from "@package/net/minecraft/client";
import { $List, $Map_, $Set_, $List_, $Comparator, $Map, $Set } from "@package/java/util";
import { $IExtensionPoint, $ModLoadingIssue_, $ModContainer } from "@package/net/neoforged/fml";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";
import { $Consumer, $ToDoubleFunction_, $Function_, $Consumer_, $BooleanSupplier_, $Function, $ToLongFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $ExperimentsScreen } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $Enum, $Record, $Runnable_, $Comparable, $Object } from "@package/java/lang";
import { $ModConfigSpec$ListValueSpec, $ModConfigSpec$RestartType, $ModConfigSpec$ConfigValue, $ModConfigSpec } from "@package/net/neoforged/neoforge/common";
import { $File_ } from "@package/java/io";
import { $UnmodifiableConfig$Entry } from "@package/com/electronwill/nightconfig/core";
import { $CreativeModeTab_, $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $HeaderAndFooterLayout } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $MutableComponent_, $Component } from "@package/net/minecraft/network/chat";
import { $ContainerObjectSelectionList, $AbstractWidget, $AbstractContainerWidget, $ObjectSelectionList, $ContainerObjectSelectionList$Entry, $ObjectSelectionList$Entry, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $PropertyDispatch$QuadFunction_ } from "@package/net/minecraft/data/models/blockstates";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $ConfirmScreen, $ErrorScreen, $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $Font, $LayeredDraw$Layer_, $LayeredDraw$Layer, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ModConfig$Type_, $ModConfig, $ModConfig$Type } from "@package/net/neoforged/fml/config";
import { $Matrix4f } from "@package/org/joml";
export * as map from "@package/net/neoforged/neoforge/client/gui/map";
export * as widget from "@package/net/neoforged/neoforge/client/gui/widget";

declare module "@package/net/neoforged/neoforge/client/gui" {
    export class $ModMismatchDisconnectedScreen extends $Screen {
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
        constructor(parentScreen: $Screen, reason: $Component_, mismatchedChannelData: $Map_<$ResourceLocation_, $Component_>);
    }
    export class $ConfigurationScreen$TranslationChecker {
        existsWithFallback(arg0: string): boolean;
        finish(): void;
        check(arg0: string, arg1: string): string;
        check(arg0: string): string;
        optional(arg0: $Component_, arg1: string, ...arg2: $ChatFormatting_[]): $Component;
        constructor();
    }
    /**
     * Register an instance to `ModContainer#registerExtensionPoint(Class, Supplier)`
     * to supply a config screen for your mod.
     * 
     * The config screen will be accessible from the mod list menu.
     */
    export class $IConfigScreenFactory {
        static getForMod(selectedMod: $IModInfo): ($IConfigScreenFactory) | undefined;
    }
    export interface $IConfigScreenFactory extends $IExtensionPoint {
        /**
         * Creates a new config screen. The `modListScreen` parameter can be used for a "back" button.
         */
        createScreen(container: $ModContainer, modListScreen: $Screen): $Screen;
    }
    /**
     * Values that may be interpreted as {@link $IConfigScreenFactory}.
     */
    export type $IConfigScreenFactory_ = ((arg0: $ModContainer, arg1: $Screen) => $Screen);
    export class $GuiLayerManager$NamedLayer extends $Record {
        name(): $ResourceLocation;
        layer(): $LayeredDraw$Layer;
        constructor(name: $ResourceLocation_, layer: $LayeredDraw$Layer_);
    }
    /**
     * Values that may be interpreted as {@link $GuiLayerManager$NamedLayer}.
     */
    export type $GuiLayerManager$NamedLayer_ = { name?: $ResourceLocation_, layer?: $LayeredDraw$Layer_,  } | [name?: $ResourceLocation_, layer?: $LayeredDraw$Layer_, ];
    export class $ConfigurationScreen$ConfigurationSectionScreen extends $OptionsSubScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $ModConfig$Type_, arg2: $ModConfig, arg3: $Component_);
        constructor(arg0: $ConfigurationScreen$ConfigurationSectionScreen$Context_, arg1: $Screen, arg2: $Map_<string, $Object>, arg3: string, arg4: $Set_<$UnmodifiableConfig$Entry>, arg5: $Component_);
        constructor(arg0: $Screen, arg1: $ModConfig$Type_, arg2: $ModConfig, arg3: $Component_, arg4: $ConfigurationScreen$ConfigurationSectionScreen$Filter_);
    }
    export class $ModListScreen extends $Screen {
        buildModList<T extends $ObjectSelectionList$Entry<T>>(modListViewConsumer: $Consumer_<T>, newEntry: $Function_<$ModContainer, T>): void;
        getMinecraftInstance(): $Minecraft;
        getFontRenderer(): $Font;
        init(): void;
        setSelected(entry: $ModListWidget$ModEntry): void;
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
        constructor(parentScreen: $Screen);
        get minecraftInstance(): $Minecraft;
        get fontRenderer(): $Font;
        set selected(value: $ModListWidget$ModEntry);
    }
    /**
     * Adaptation of `LayeredDraw` that is used for `Gui` rendering specifically,
     * to give layers a name and fire appropriate events.
     * 
     * Overlays can be registered using the `RegisterGuiLayersEvent` event.
     */
    export class $GuiLayerManager {
        initModdedLayers(): void;
        getLayerCount(): number;
        add(name: $ResourceLocation_, layer: $LayeredDraw$Layer_): $GuiLayerManager;
        add(child: $GuiLayerManager, shouldRender: $BooleanSupplier_): $GuiLayerManager;
        render(guiGraphics: $GuiGraphics, partialTick: $DeltaTracker): void;
        static Z_SEPARATION: number;
        constructor();
        get layerCount(): number;
    }
    export class $LoadingErrorScreen$FormattedIssue extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $LoadingErrorScreen$FormattedIssue}.
     */
    export type $LoadingErrorScreen$FormattedIssue_ = { text?: $Component_, issue?: $ModLoadingIssue_,  } | [text?: $Component_, issue?: $ModLoadingIssue_, ];
    export class $LoadingErrorScreen extends $ErrorScreen {
        init(): void;
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
        constructor(issues: $List_<$ModLoadingIssue_>, dumpedLocation: $File_, nextScreenTask: $Runnable_);
    }
    export class $ModMismatchDisconnectedScreen$MismatchInfoPanel extends $ScrollPanel {
    }
    export class $ModListScreen$InfoPanel extends $ScrollPanel {
    }
    export class $ConfigurationScreen$ConfigurationSectionScreen$Element extends $Record {
        undoable(): boolean;
        name(): $Component;
        option(): $OptionInstance<never>;
        any(): $Object;
        tooltip(): $Component;
        getWidget(arg0: $Options): $AbstractWidget;
        widget(): $AbstractWidget;
        constructor(arg0: $Component_, arg1: $Component_, arg2: $OptionInstance<never>);
        constructor(arg0: $Component_, arg1: $Component_, arg2: $OptionInstance<never>, arg3: boolean);
        constructor(name: $Component_, tooltip: $Component_, widget: $AbstractWidget, option: $OptionInstance<never>, undoable: boolean);
        constructor(arg0: $Component_, arg1: $Component_, arg2: $AbstractWidget);
        constructor(arg0: $Component_, arg1: $Component_, arg2: $AbstractWidget, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ConfigurationScreen$ConfigurationSectionScreen$Element}.
     */
    export type $ConfigurationScreen$ConfigurationSectionScreen$Element_ = { option?: $OptionInstance<never>, tooltip?: $Component_, widget?: $AbstractWidget, name?: $Component_, undoable?: boolean,  } | [option?: $OptionInstance<never>, tooltip?: $Component_, widget?: $AbstractWidget, name?: $Component_, undoable?: boolean, ];
    export class $ConfigurationScreen extends $OptionsSubScreen {
        translatableConfig(arg0: $ModConfig, arg1: string, arg2: string): $Component;
        static LONG_STRING: $Component;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static GAME_RESTART_YES: $Component;
        static MOVE_LIST_ELEMENT_UP: $Component;
        static UNDO: $Component;
        static REMOVE_LIST_ELEMENT: $Component;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static RESTART_NO: $Component;
        static RESET: $Component;
        static UNSUPPORTED_ELEMENT: $Component;
        static NEW_LIST_ELEMENT: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static RESTART_NO_TOOLTIP: $Component;
        static BIG_BUTTON_WIDTH: number;
        static TOOLTIP_CANNOT_EDIT_NOT_LOADED: $Component;
        static GAME_RESTART_MESSAGE: $Component;
        static CRUMB_SEPARATOR: $Component;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        static MOVE_LIST_ELEMENT_DOWN: $Component;
        static TOOLTIP_CANNOT_EDIT_THIS_WHILE_OPEN_TO_LAN: $Component;
        static SAVING_LEVEL: $Component;
        static TOOLTIP_CANNOT_EDIT_THIS_WHILE_ONLINE: $Component;
        static RETURN_TO_MENU: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static GAME_RESTART_TITLE: $Component;
        layout: $HeaderAndFooterLayout;
        static SERVER_RESTART_TITLE: $Component;
        static RESET_TOOLTIP: $Component;
        static SERVER_RESTART_MESSAGE: $Component;
        narratables: $List<$NarratableEntry>;
        width: number;
        static UNDO_TOOLTIP: $Component;
        needsRestart: $ModConfigSpec$RestartType;
        font: $Font;
        constructor(arg0: $ModContainer, arg1: $Screen, arg2: $PropertyDispatch$QuadFunction_<$ConfigurationScreen, $ModConfig$Type, $ModConfig, $Component, $Screen>);
        constructor(arg0: $ModContainer, arg1: $Screen, arg2: $ConfigurationScreen$ConfigurationSectionScreen$Filter_);
        constructor(arg0: $ModContainer, arg1: $Screen);
    }
    export class $ConfigurationScreen$ConfigurationListScreen$ListLabelWidget extends $AbstractContainerWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: $ConfigurationScreen$ConfigurationListScreen<any>, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Component_, arg6: number);
    }
    export class $ConfigurationScreen$ConfigurationSectionScreen$Filter {
    }
    export interface $ConfigurationScreen$ConfigurationSectionScreen$Filter {
        filterEntry(arg0: $ConfigurationScreen$ConfigurationSectionScreen$Context_, arg1: string, arg2: $ConfigurationScreen$ConfigurationSectionScreen$Element_): $ConfigurationScreen$ConfigurationSectionScreen$Element;
    }
    /**
     * Values that may be interpreted as {@link $ConfigurationScreen$ConfigurationSectionScreen$Filter}.
     */
    export type $ConfigurationScreen$ConfigurationSectionScreen$Filter_ = ((arg0: $ConfigurationScreen$ConfigurationSectionScreen$Context, arg1: string, arg2: $ConfigurationScreen$ConfigurationSectionScreen$Element) => $ConfigurationScreen$ConfigurationSectionScreen$Element_);
    export class $ScrollableExperimentsScreen$ExperimentSelectionList$ExperimentEntry extends $ContainerObjectSelectionList$Entry<$ScrollableExperimentsScreen$ExperimentSelectionList$ExperimentEntry> {
    }
    export class $ScrollableExperimentsScreen$ExperimentSelectionList extends $ContainerObjectSelectionList<$ScrollableExperimentsScreen$ExperimentSelectionList$ExperimentEntry> {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        scrollAmount: number;
    }
    export class $CreativeTabsScreenPage {
        getVisibleTabs(): $List<$CreativeModeTab>;
        getDefaultTab(): $CreativeModeTab;
        isTop(tab: $CreativeModeTab_): boolean;
        getColumn(tab: $CreativeModeTab_): number;
        constructor(tabs: $List_<$CreativeModeTab_>);
        get visibleTabs(): $List<$CreativeModeTab>;
        get defaultTab(): $CreativeModeTab;
    }
    export class $ConfigurationScreen$TooltipConfirmScreen extends $ConfirmScreen {
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
    }
    /**
     * @deprecated
     * This class provides several methods and constants used by the Config GUI classes.
     */
    export class $ScreenUtils {
        /**
         * @deprecated
         */
        static drawTexturedModalRect(guiGraphics: $GuiGraphics, x: number, y: number, u: number, v: number, width: number, height: number, zLevel: number): void;
        /**
         * Draws a textured box of any size (smallest size is borderSize * 2 square) based on a fixed size textured box with continuous borders
         * and filler. It is assumed that the desired texture ResourceLocation object has been bound using
         * Minecraft.getMinecraft().getTextureManager().bindTexture(resourceLocation).
         */
        static blitWithBorder(guiGraphics: $GuiGraphics, x: number, y: number, u: number, v: number, width: number, height: number, textureWidth: number, textureHeight: number, topBorder: number, bottomBorder: number, leftBorder: number, rightBorder: number, zLevel: number): void;
        /**
         * Draws a textured box of any size (smallest size is borderSize * 2 square) based on a fixed size textured box with continuous borders
         * and filler. It is assumed that the desired texture ResourceLocation object has been bound using
         * Minecraft.getMinecraft().getTextureManager().bindTexture(resourceLocation).
         */
        static blitWithBorder(guiGraphics: $GuiGraphics, x: number, y: number, u: number, v: number, width: number, height: number, textureWidth: number, textureHeight: number, borderSize: number, zLevel: number): void;
        /**
         * Draws a textured box of any size (smallest size is borderSize * 2 square) based on a fixed size textured box with continuous borders
         * and filler. The provided ResourceLocation object will be bound using
         * Minecraft.getMinecraft().getTextureManager().bindTexture(resourceLocation).
         */
        static blitWithBorder(guiGraphics: $GuiGraphics, res: $ResourceLocation_, x: number, y: number, u: number, v: number, width: number, height: number, textureWidth: number, textureHeight: number, borderSize: number, zLevel: number): void;
        /**
         * Draws a textured box of any size (smallest size is borderSize * 2 square) based on a fixed size textured box with continuous borders
         * and filler. The provided ResourceLocation object will be bound using
         * Minecraft.getMinecraft().getTextureManager().bindTexture(resourceLocation).
         */
        static blitWithBorder(guiGraphics: $GuiGraphics, res: $ResourceLocation_, x: number, y: number, u: number, v: number, width: number, height: number, textureWidth: number, textureHeight: number, topBorder: number, bottomBorder: number, leftBorder: number, rightBorder: number, zLevel: number): void;
        static blitInscribed(guiGraphics: $GuiGraphics, texture: $ResourceLocation_, x: number, y: number, boundsWidth: number, boundsHeight: number, rectWidth: number, rectHeight: number, centerX: boolean, centerY: boolean): void;
        static blitInscribed(guiGraphics: $GuiGraphics, texture: $ResourceLocation_, x: number, y: number, boundsWidth: number, boundsHeight: number, rectWidth: number, rectHeight: number): void;
        static getColorFromFormattingCharacter(c: string, isLighter: boolean): number;
        /**
         * @deprecated
         */
        static drawGradientRect(mat: $Matrix4f, zLevel: number, left: number, top: number, right: number, bottom: number, startColor: number, endColor: number): void;
        static DEFAULT_BORDER_COLOR_START: number;
        static TEXT_COLOR_CODES: number[];
        static UNDO_CHAR: string;
        static DEFAULT_BACKGROUND_COLOR: number;
        static VALID: string;
        static DEFAULT_BORDER_COLOR_END: number;
        static INVALID: string;
        static RESET_CHAR: string;
        constructor();
    }
    export class $LoadingErrorScreen$LoadingEntryList extends $ObjectSelectionList<$LoadingErrorScreen$LoadingEntryList$LoadingMessageEntry> {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        scrollAmount: number;
    }
    /**
     * Identifiers for the vanilla `Layer`, in the order that they render.
     * 
     * The corresponding rendering code can be found in the source code of `Gui`.
     */
    export class $VanillaGuiLayers {
        static FOOD_LEVEL: $ResourceLocation;
        static JUMP_METER: $ResourceLocation;
        static SPECTATOR_TOOLTIP: $ResourceLocation;
        static EXPERIENCE_LEVEL: $ResourceLocation;
        static CHAT: $ResourceLocation;
        static SCOREBOARD_SIDEBAR: $ResourceLocation;
        static DEMO_OVERLAY: $ResourceLocation;
        static AIR_LEVEL: $ResourceLocation;
        static ARMOR_LEVEL: $ResourceLocation;
        static OVERLAY_MESSAGE: $ResourceLocation;
        static SUBTITLE_OVERLAY: $ResourceLocation;
        static VEHICLE_HEALTH: $ResourceLocation;
        static EFFECTS: $ResourceLocation;
        static CROSSHAIR: $ResourceLocation;
        static PLAYER_HEALTH: $ResourceLocation;
        static CAMERA_OVERLAYS: $ResourceLocation;
        static BOSS_OVERLAY: $ResourceLocation;
        static SLEEP_OVERLAY: $ResourceLocation;
        static DEBUG_OVERLAY: $ResourceLocation;
        static SELECTED_ITEM_NAME: $ResourceLocation;
        static EXPERIENCE_BAR: $ResourceLocation;
        static TITLE: $ResourceLocation;
        static HOTBAR: $ResourceLocation;
        static SAVING_INDICATOR: $ResourceLocation;
        static TAB_LIST: $ResourceLocation;
        constructor();
    }
    export class $ConfigurationScreen$UndoManager$Step<T> extends $Record {
        run(): $Consumer<T>;
        oldValue(): T;
        newValue(): T;
        undo(): $Consumer<T>;
        constructor(run: $Consumer_<T>, newValue: T, undo: $Consumer_<T>, oldValue: T);
    }
    /**
     * Values that may be interpreted as {@link $ConfigurationScreen$UndoManager$Step}.
     */
    export type $ConfigurationScreen$UndoManager$Step_<T> = { oldValue?: any, newValue?: any, undo?: $Consumer_<any>, run?: $Consumer_<any>,  } | [oldValue?: any, newValue?: any, undo?: $Consumer_<any>, run?: $Consumer_<any>, ];
    export class $ModListScreen$SortType extends $Enum<$ModListScreen$SortType> implements $Comparator<$ModContainer> {
        reversed(): $Comparator<$ModContainer>;
        thenComparing<U>(arg0: $Function_<$ModContainer, U>, arg1: $Comparator<U>): $Comparator<$ModContainer>;
        thenComparing(arg0: $Comparator<$ModContainer>): $Comparator<$ModContainer>;
        thenComparing<U extends $Comparable<U>>(arg0: $Function_<$ModContainer, U>): $Comparator<$ModContainer>;
        thenComparingInt(arg0: $ToIntFunction_<$ModContainer>): $Comparator<$ModContainer>;
        thenComparingLong(arg0: $ToLongFunction_<$ModContainer>): $Comparator<$ModContainer>;
        thenComparingDouble(arg0: $ToDoubleFunction_<$ModContainer>): $Comparator<$ModContainer>;
    }
    /**
     * Values that may be interpreted as {@link $ModListScreen$SortType}.
     */
    export type $ModListScreen$SortType_ = "normal" | "a_to_z" | "z_to_a";
    export class $ScrollableExperimentsScreen extends $ExperimentsScreen {
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
        constructor(parent: $Screen, packRepository: $PackRepository, output: $Consumer_<$PackRepository>);
    }
    /**
     * Manager for `ClientTooltipComponent` factories.
     * 
     * Provides a lookup.
     */
    export class $ClientTooltipComponentManager {
        /**
         * Creates a client component for the given argument, or null if unsupported.
         */
        static createClientTooltipComponent(component: $TooltipComponent): $ClientTooltipComponent;
        static init(): void;
    }
    export class $ConfigurationScreen$ConfigurationSectionScreen$Context extends $Record {
        modConfig(): $ModConfig;
        valueSpecs(): $Map<string, $Object>;
        modSpec(): $ModConfigSpec;
        keylist(): $List<string>;
        parent(): $Screen;
        static list(arg0: $ConfigurationScreen$ConfigurationSectionScreen$Context_, arg1: $Screen): $ConfigurationScreen$ConfigurationSectionScreen$Context;
        filter(): $ConfigurationScreen$ConfigurationSectionScreen$Filter;
        entries(): $Set<$UnmodifiableConfig$Entry>;
        static top(arg0: string, arg1: $Screen, arg2: $ModConfig, arg3: $ConfigurationScreen$ConfigurationSectionScreen$Filter_): $ConfigurationScreen$ConfigurationSectionScreen$Context;
        static section(arg0: $ConfigurationScreen$ConfigurationSectionScreen$Context_, arg1: $Screen, arg2: $Set_<$UnmodifiableConfig$Entry>, arg3: $Map_<string, $Object>, arg4: string): $ConfigurationScreen$ConfigurationSectionScreen$Context;
        modId(): string;
        constructor(modId: string, parent: $Screen, modConfig: $ModConfig, modSpec: $ModConfigSpec, entries: $Set_<$UnmodifiableConfig$Entry>, valueSpecs: $Map_<string, $Object>, keylist: $List_<string>, filter: $ConfigurationScreen$ConfigurationSectionScreen$Filter_);
    }
    /**
     * Values that may be interpreted as {@link $ConfigurationScreen$ConfigurationSectionScreen$Context}.
     */
    export type $ConfigurationScreen$ConfigurationSectionScreen$Context_ = { modConfig?: $ModConfig, entries?: $Set_<$UnmodifiableConfig$Entry>, modId?: string, keylist?: $List_<string>, modSpec?: $ModConfigSpec, parent?: $Screen, filter?: $ConfigurationScreen$ConfigurationSectionScreen$Filter_, valueSpecs?: $Map_<string, $Object>,  } | [modConfig?: $ModConfig, entries?: $Set_<$UnmodifiableConfig$Entry>, modId?: string, keylist?: $List_<string>, modSpec?: $ModConfigSpec, parent?: $Screen, filter?: $ConfigurationScreen$ConfigurationSectionScreen$Filter_, valueSpecs?: $Map_<string, $Object>, ];
    export class $ConfigurationScreen$ConfigurationListScreen<T> extends $ConfigurationScreen$ConfigurationSectionScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $ConfigurationScreen$ConfigurationSectionScreen$Context_, arg1: string, arg2: $Component_, arg3: $ModConfigSpec$ListValueSpec, arg4: $ModConfigSpec$ConfigValue<$List_<T>>);
    }
    export class $ConfigurationScreen$ConfigurationSectionScreen$Custom<T> extends $Record implements $OptionInstance$ValueSet<T> {
        validateValue(arg0: T): (T) | undefined;
        values(): $List<T>;
        codec(): $Codec<T>;
        createButton(arg0: $OptionInstance$TooltipSupplier_<T>, arg1: $Options, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
        static BOOLEAN_VALUES_NO_PREFIX: $ConfigurationScreen$ConfigurationSectionScreen$Custom<boolean>;
        constructor(values: $List_<T>);
    }
    /**
     * Values that may be interpreted as {@link $ConfigurationScreen$ConfigurationSectionScreen$Custom}.
     */
    export type $ConfigurationScreen$ConfigurationSectionScreen$Custom_<T> = { values?: $List_<any>,  } | [values?: $List_<any>, ];
    export class $ConfigurationScreen$UndoManager {
        canUndo(): boolean;
        canRedo(): boolean;
        addNoExecute<T>(arg0: $Consumer_<T>, arg1: T, arg2: $Consumer_<T>, arg3: T): void;
        add(arg0: $List_<$ConfigurationScreen$UndoManager$Step_<never>>): void;
        add(...arg0: $ConfigurationScreen$UndoManager$Step_<never>[]): void;
        add<T>(arg0: $Consumer_<T>, arg1: T, arg2: $Consumer_<T>, arg3: T): void;
        step<T>(arg0: $Consumer_<T>, arg1: T, arg2: $Consumer_<T>, arg3: T): $ConfigurationScreen$UndoManager$Step<T>;
        redo(): void;
        undo(): void;
        constructor();
    }
    export class $ModMismatchDisconnectedScreen$MismatchInfoPanel$1Row extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ModMismatchDisconnectedScreen$MismatchInfoPanel$1Row}.
     */
    export type $ModMismatchDisconnectedScreen$MismatchInfoPanel$1Row_ = { reason?: $MutableComponent_, name?: $MutableComponent_,  } | [reason?: $MutableComponent_, name?: $MutableComponent_, ];
    export class $LoadingErrorScreen$LoadingEntryList$LoadingMessageEntry extends $ObjectSelectionList$Entry<$LoadingErrorScreen$LoadingEntryList$LoadingMessageEntry> {
    }
}
