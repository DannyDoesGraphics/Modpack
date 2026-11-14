import { $MultilineTextFieldAccess } from "@package/dev/ftb/mods/ftblibrary/core/mixin/common";
import { $EventSource } from "@package/io/wispforest/owo/util";
import { $Language } from "@package/net/minecraft/locale";
import { $TextFieldWidgetAccessor, $EditBoxAccessor, $ButtonWidgetAccessor, $EditBoxWidgetAccessor, $CheckboxWidgetAccessor, $ClickableWidgetAccessor } from "@package/io/wispforest/owo/mixin/ui/access";
import { $UIModel } from "@package/io/wispforest/owo/ui/parsing";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $OptionInstance, $GuiMessageTag, $OptionInstance$TooltipSupplier_, $Minecraft, $GuiMessage_, $GuiMessageTag_ } from "@package/net/minecraft/client";
import { $UUID_, $OptionalInt, $List, $SequencedCollection, $Map_, $Collection_, $List_, $AbstractList } from "@package/java/util";
import { $Event } from "@package/net/fabricmc/fabric/api/event";
import { $TooltipAccessor } from "@package/traben/entity_texture_features/mixin/mixins/accessor";
import { $AbstractSelectionListAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";
import { $FormattedCharSequence, $FormattedCharSequence_, $ArrayListDeque } from "@package/net/minecraft/util";
import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $Supplier_, $Consumer_, $Predicate_, $Predicate, $Consumer, $Function_, $BooleanSupplier, $BooleanSupplier_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $BossEvent, $BossEvent$BossBarOverlay_, $BossEvent$BossBarColor_ } from "@package/net/minecraft/world";
import { $SoundManager, $WeighedSoundEvents, $SoundEventListener } from "@package/net/minecraft/client/sounds";
import { $Tab, $TabManager } from "@package/net/minecraft/client/gui/components/tabs";
import { $IAbstractWidgetExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $VanillaWidgetComponent } from "@package/io/wispforest/owo/ui/component";
import { $Positioning, $Component$FocusSource_, $CursorStyle, $Size, $AnimatableProperty, $Component$DismountReason_, $Component as $Component$1, $ParentComponent, $CursorStyle_, $Sizing, $OwoUIDrawContext, $Size_, $Insets_, $PositionedRectangle } from "@package/io/wispforest/owo/ui/core";
import { $ClientTooltipPositioner } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Enum, $Iterable, $Record, $Runnable_ } from "@package/java/lang";
import { $ButtonEvents$AdjustRendering_, $AbstractButtonExtension } from "@package/io/wispforest/accessories/client/gui";
import { $HeaderAndFooterLayout, $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry$NarrationPriority, $NarrationElementOutput, $NarratableEntry, $NarrationSupplier } from "@package/net/minecraft/client/gui/narration";
import { $MessageSignature_, $MutableComponent, $Component_, $FormattedText, $MutableComponent_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $ScreenRectangle_, $FocusNavigationEvent_, $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $ClientboundBossEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $Duration_ } from "@package/java/time";
import { $LocalSampleLogger, $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $AccessEditBox } from "@package/com/blamejared/searchables/mixin";
import { $FocusHandler } from "@package/io/wispforest/owo/ui/util";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $PlayerSkin, $PlayerSkin_ } from "@package/net/minecraft/client/resources";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $GreedyInputComponent, $ComponentStub } from "@package/io/wispforest/owo/ui/inject";
import { $Scoreboard, $Objective } from "@package/net/minecraft/world/scores";
import { $Gui, $Font, $ComponentPath, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Element } from "@package/org/w3c/dom";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $ComponentExtension } from "@package/io/wispforest/accessories/pond/owo";
export * as toasts from "@package/net/minecraft/client/gui/components/toasts";
export * as tabs from "@package/net/minecraft/client/gui/components/tabs";
export * as spectator from "@package/net/minecraft/client/gui/components/spectator";
export * as debugchart from "@package/net/minecraft/client/gui/components/debugchart";
export * as events from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/minecraft/client/gui/components" {
    export class $Tooltip implements $NarrationSupplier, $TooltipAccessor {
        static create(message: $Component_): $Tooltip;
        static create(message: $Component_, narration: $Component_ | null): $Tooltip;
        /**
         * Updates the narration output with the current narration information.
         */
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        static splitTooltip(minecraft: $Minecraft, message: $Component_): $List<$FormattedCharSequence>;
        toCharSequence(minecraft: $Minecraft): $List<$FormattedCharSequence>;
        setCachedTooltip(arg0: $List_<$FormattedCharSequence_>): void;
        cachedTooltip: $List<$FormattedCharSequence>;
        splitWithLanguage: $Language;
        constructor(message: $Component_, narration: $Component_ | null);
    }
    export class $CommonButtons {
        static language(width: number, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton;
        static accessibility(width: number, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton;
        constructor();
    }
    export class $WidgetTooltipHolder {
        createTooltipPositioner(screenRectangle: $ScreenRectangle_, hovering: boolean, focused: boolean): $ClientTooltipPositioner;
        get(): $Tooltip;
        set(tooltip: $Tooltip | null): void;
        setDelay(delay: $Duration_): void;
        updateNarration(output: $NarrationElementOutput): void;
        refreshTooltipForNextRenderPass(hovering: boolean, focused: boolean, screenRectangle: $ScreenRectangle_): void;
        constructor();
        set delay(value: $Duration_);
    }
    export class $PopupScreen$ButtonOption extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PopupScreen$ButtonOption}.
     */
    export type $PopupScreen$ButtonOption_ = { message?: $Component_, action?: $Consumer_<$PopupScreen>,  } | [message?: $Component_, action?: $Consumer_<$PopupScreen>, ];
    export class $MultilineTextField$StringView extends $Record {
        beginIndex(): number;
        endIndex(): number;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $MultilineTextField$StringView}.
     */
    export type $MultilineTextField$StringView_ = { endIndex?: number, beginIndex?: number,  } | [endIndex?: number, beginIndex?: number, ];
    export class $TabButton extends $AbstractWidget {
        tab(): $Tab;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isSelected(): boolean;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        renderString(guiGraphics: $GuiGraphics, font: $Font, color: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(tabManager: $TabManager, tab: $Tab, width: number, height: number);
        get selected(): boolean;
    }
    export class $SubtitleOverlay$Subtitle {
    }
    export class $SplashRenderer {
        render(guiGraphics: $GuiGraphics, screenWidth: number, font: $Font, color: number): void;
        static CHRISTMAS: $SplashRenderer;
        static HALLOWEEN: $SplashRenderer;
        static NEW_YEAR: $SplashRenderer;
        constructor(splash: string);
    }
    export class $AbstractScrollWidget extends $AbstractWidget implements $Renderable, $GuiEventListener {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        scrollbarWidth(): number;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
    }
    export class $Button extends $AbstractButton implements $ButtonWidgetAccessor {
        static builder(message: $Component_, onPress: $Button$OnPress_): $Button$Builder;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        owo$setOnPress(arg0: $Button$OnPress_): void;
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
    export class $CycleButton$Builder<T> {
        withCustomNarration(narrationProvider: $Function_<$CycleButton<T>, $MutableComponent>): $CycleButton$Builder<T>;
        withTooltip(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>): $CycleButton$Builder<T>;
        create(message: $Component_, onValueChange: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        create(x: number, y: number, width: number, height: number, name: $Component_, onValueChange: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        create(x: number, y: number, width: number, height: number, name: $Component_): $CycleButton<T>;
        withValues(defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$Builder<T>;
        withValues(...values: T[]): $CycleButton$Builder<T>;
        withValues(values: $Collection_<T>): $CycleButton$Builder<T>;
        withValues(values: $CycleButton$ValueListSupplier<T>): $CycleButton$Builder<T>;
        withValues(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$Builder<T>;
        withInitialValue(initialValue: T): $CycleButton$Builder<T>;
        displayOnlyValue(): $CycleButton$Builder<T>;
        constructor(valueStringifier: $Function_<T, $Component>);
    }
    export class $Whence extends $Enum<$Whence> {
        static values(): $Whence[];
        static valueOf(arg0: string): $Whence;
        static ABSOLUTE: $Whence;
        static RELATIVE: $Whence;
        static END: $Whence;
    }
    /**
     * Values that may be interpreted as {@link $Whence}.
     */
    export type $Whence_ = "absolute" | "relative" | "end";
    export class $Button$Builder {
        createNarration(createNarration: $Button$CreateNarration_): $Button$Builder;
        size(x: number, y: number): $Button$Builder;
        bounds(x: number, y: number, width: number, height: number): $Button$Builder;
        pos(x: number, y: number): $Button$Builder;
        build(): $Button;
        build(arg0: $Function_<$Button$Builder, $Button>): $Button;
        width(width: number): $Button$Builder;
        tooltip(tooltip: $Tooltip | null): $Button$Builder;
        constructor(message: $Component_, onPress: $Button$OnPress_);
    }
    export class $MultiLineLabel {
        static create(font: $Font, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, component: $Component_, maxWidth: number): $MultiLineLabel;
        static create(font: $Font, maxWidth: number, maxRows: number, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, maxWidth: number, ...components: $Component_[]): $MultiLineLabel;
        static EMPTY: $MultiLineLabel;
    }
    export interface $MultiLineLabel {
        renderLeftAlignedNoShadow(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): number;
        renderLeftAligned(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): void;
        renderCentered(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): void;
        renderCentered(guiGraphics: $GuiGraphics, x: number, y: number): void;
        getLineCount(): number;
        getWidth(): number;
        get lineCount(): number;
        get width(): number;
    }
    export class $CommandSuggestions$SuggestionsList {
        useSuggestion(): void;
        select(change: number): void;
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        cycle(change: number): void;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseClicked(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseScrolled(delta: number): boolean;
    }
    export class $LogoRenderer {
        renderLogo(guiGraphics: $GuiGraphics, screenWidth: number, transparency: number): void;
        renderLogo(guiGraphics: $GuiGraphics, screenWidth: number, transparency: number, height: number): void;
        static EASTER_EGG_LOGO: $ResourceLocation;
        static DEFAULT_HEIGHT_OFFSET: number;
        static LOGO_WIDTH: number;
        static LOGO_TEXTURE_WIDTH: number;
        static LOGO_HEIGHT: number;
        static MINECRAFT_LOGO: $ResourceLocation;
        static LOGO_TEXTURE_HEIGHT: number;
        static MINECRAFT_EDITION: $ResourceLocation;
        constructor(keepLogoThroughFade: boolean);
    }
    export class $Checkbox$Builder {
        selected(option: $OptionInstance<boolean>): $Checkbox$Builder;
        selected(selected: boolean): $Checkbox$Builder;
        pos(x: number, y: number): $Checkbox$Builder;
        build(): $Checkbox;
        maxWidth(maxWidth: number): $Checkbox$Builder;
        tooltip(tooltip: $Tooltip): $Checkbox$Builder;
        onValueChange(onValueChange: $Checkbox$OnValueChange_): $Checkbox$Builder;
    }
    export class $PlayerTabOverlay$ScoreDisplayEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerTabOverlay$ScoreDisplayEntry}.
     */
    export type $PlayerTabOverlay$ScoreDisplayEntry_ = { score?: number, formattedScore?: $Component_, scoreWidth?: number, name?: $Component_,  } | [score?: number, formattedScore?: $Component_, scoreWidth?: number, name?: $Component_, ];
    export class $ImageWidget$Texture extends $ImageWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
    }
    export class $SpriteIconButton extends $Button {
        static builder(message: $Component_, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton$Builder;
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
    export class $CycleButton$OnValueChange<T> {
    }
    export interface $CycleButton$OnValueChange<T> {
        onValueChange(cycleButton: $CycleButton<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CycleButton$OnValueChange}.
     */
    export type $CycleButton$OnValueChange_<T> = ((arg0: $CycleButton<T>, arg1: T) => void);
    export class $AbstractSelectionList<E extends $AbstractSelectionList$Entry<E>> extends $AbstractContainerWidget implements $AbstractSelectionListAccessor {
        /**
         * Gets the focused GUI element.
         */
        getFirstElement(): E;
        replaceEntries(entries: $Collection_<E>): void;
        clampScrollAmount(): void;
        setClampedScrollAmount(scroll: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getMaxScroll(): number;
        setScrollAmount(scroll: number): void;
        updateSize(width: number, layout: $HeaderAndFooterLayout): void;
        /**
         * Gets the focused GUI element.
         */
        getSelected(): E;
        setSelected(entry: E | null): void;
        /**
         * Gets the focused GUI element.
         */
        getFocused(): E;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowWidth(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowLeft(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowRight(): number;
        updateSizeAndPosition(width: number, height: number, y: number): void;
        getScrollAmount(): number;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        scrollAmount: number;
        constructor(minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
        get firstElement(): E;
        set clampedScrollAmount(value: number);
        get maxScroll(): number;
        get focused(): E;
        get rowWidth(): number;
        get rowLeft(): number;
        get rowRight(): number;
    }
    export class $SpriteIconButton$TextAndIcon extends $SpriteIconButton {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
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
    export class $AbstractContainerWidget extends $AbstractWidget implements $ContainerEventHandler {
        isDragging(): boolean;
        setDragging(arg0: boolean): void;
        getFocused(): $GuiEventListener;
        setFocused(arg0: $GuiEventListener | null): void;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $LerpingBossEvent extends $BossEvent {
        constructor(id: $UUID_, name: $Component_, progress: number, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_, darkenScreen: boolean, bossMusic: boolean, worldFog: boolean);
    }
    export class $MultilineTextField implements $EditBoxAccessor, $MultilineTextFieldAccess {
        iterateLines(): $Iterable<$MultilineTextField$StringView>;
        characterLimit(): number;
        seekCursorToPoint(x: number, arg1: number): void;
        getLineAtCursor(): number;
        setSelecting(selecting: boolean): void;
        seekCursorLine(length: number): void;
        getNextWord(): $MultilineTextField$StringView;
        seekCursor(whence: $Whence_, position: number): void;
        getLineView(offset: number): $MultilineTextField$StringView;
        setValueListener(valueListener: $Consumer_<string>): void;
        setCursorListener(cursorListener: $Runnable_): void;
        getPreviousWord(): $MultilineTextField$StringView;
        deleteText(length: number): void;
        hasSelection(): boolean;
        getSelectedText(): string;
        getSelected(): $MultilineTextField$StringView;
        value(): string;
        setValue(text: string): void;
        cursor(): number;
        keyPressed(keyCode: number): boolean;
        insertText(text: string): void;
        getLineCount(): number;
        setCharacterLimit(length: number): void;
        hasCharacterLimit(): boolean;
        setSelectCursor(length: number): void;
        owo$setSelectionEnd(length: number): void;
        owo$getSelectionEnd(): number;
        owo$setWidth(length: number): void;
        static NO_CHARACTER_LIMIT: number;
        constructor(font: $Font, width: number);
        get lineAtCursor(): number;
        set selecting(value: boolean);
        get nextWord(): $MultilineTextField$StringView;
        set valueListener(value: $Consumer_<string>);
        set cursorListener(value: $Runnable_);
        get previousWord(): $MultilineTextField$StringView;
        get selectedText(): string;
        get selected(): $MultilineTextField$StringView;
        get lineCount(): number;
        set selectCursor(value: number);
    }
    export class $ChatComponent$State {
        constructor(messages: $List_<$GuiMessage_>, history: $List_<string>, delayedMessageDeletions: $List_<$ChatComponent$DelayedMessageDeletion_>);
    }
    export class $ContainerObjectSelectionList$Entry<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $ContainerEventHandler {
        focusPathAtIndex(event: $FocusNavigationEvent_, index: number): $ComponentPath;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        narratables(): $List<$NarratableEntry>;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isDragging(): boolean;
        /**
         * Sets if the GUI element is dragging or not.
         */
        setDragging(dragging: boolean): void;
        /**
         * Gets the focused GUI element.
         */
        getFocused(): $GuiEventListener;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(listener: $GuiEventListener | null): void;
        /**
         * Returns the first event listener that intersects with the mouse coordinates.
         */
        getChildAt(mouseX: number, arg1: number): ($GuiEventListener) | undefined;
        constructor();
    }
    export class $Checkbox extends $AbstractButton implements $CheckboxWidgetAccessor {
        static getBoxSize(font: $Font): number;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        selected(): boolean;
        static builder(message: $Component_, font: $Font): $Checkbox$Builder;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * Sets the focus state of the GUI element.
         */
        owo$setChecked(focused: boolean): void;
        owo$getTextWidget(): $MultiLineTextWidget;
        static SPRITES: $WidgetSprites;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(x: number, y: number, maxWidth: number, message: $Component_, font: $Font, selected: boolean, onValueChange: $Checkbox$OnValueChange_);
    }
    export class $LoadingDotsWidget extends $AbstractWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(font: $Font, message: $Component_);
    }
    export class $SpriteIconButton$Builder {
        size(width: number, height: number): $SpriteIconButton$Builder;
        build(): $SpriteIconButton;
        width(width: number): $SpriteIconButton$Builder;
        sprite(sprite: $ResourceLocation_, spriteWidth: number, spriteHeight: number): $SpriteIconButton$Builder;
        narration(narration: $Button$CreateNarration_): $SpriteIconButton$Builder;
        constructor(message: $Component_, onPress: $Button$OnPress_, iconOnly: boolean);
    }
    export class $PlainTextButton extends $Button {
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, onPress: $Button$OnPress_, font: $Font);
    }
    export class $ImageWidget$Sprite extends $ImageWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
    }
    export class $WidgetSprites extends $Record {
        enabledFocused(): $ResourceLocation;
        disabledFocused(): $ResourceLocation;
        get(enabled: boolean, focused: boolean): $ResourceLocation;
        enabled(): $ResourceLocation;
        disabled(): $ResourceLocation;
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_);
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_, enabledFocused: $ResourceLocation_);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $WidgetSprites}.
     */
    export type $WidgetSprites_ = { enabled?: $ResourceLocation_, enabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_,  } | [enabled?: $ResourceLocation_, enabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, ];
    export class $ImageButton extends $Button {
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        sprites: $WidgetSprites;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_, message: $Component_);
        constructor(x: number, y: number, width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_, message: $Component_);
        constructor(x: number, y: number, width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_);
    }
    export class $ComponentRenderUtils {
        static wrapComponents(component: $FormattedText, maxWidth: number, font: $Font): $List<$FormattedCharSequence>;
        constructor();
    }
    export class $PlayerTabOverlay$HealthState {
    }
    export class $StateSwitchingButton extends $AbstractWidget {
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        setStateTriggered(triggered: boolean): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isStateTriggered(): boolean;
        initTextureValues(sprites: $WidgetSprites_): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(x: number, y: number, width: number, height: number, initialState: boolean);
    }
    export class $MultiLineLabel$TextAndWidth extends $Record {
        text(): $FormattedCharSequence;
        width(): number;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $MultiLineLabel$TextAndWidth}.
     */
    export type $MultiLineLabel$TextAndWidth_ = { width?: number, text?: $FormattedCharSequence_,  } | [width?: number, text?: $FormattedCharSequence_, ];
    export class $PlayerSkinWidget$Model extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkinWidget$Model}.
     */
    export type $PlayerSkinWidget$Model_ = { slimModel?: $PlayerModel<never>, wideModel?: $PlayerModel<never>,  } | [slimModel?: $PlayerModel<never>, wideModel?: $PlayerModel<never>, ];
    export class $SubtitleOverlay$SoundPlayedAt extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SubtitleOverlay$SoundPlayedAt}.
     */
    export type $SubtitleOverlay$SoundPlayedAt_ = { time?: number, location?: $Vec3_,  } | [time?: number, location?: $Vec3_, ];
    export class $Renderable {
    }
    export interface $Renderable {
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Renderable}.
     */
    export type $Renderable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $AbstractWidget implements $Renderable, $GuiEventListener, $LayoutElement, $NarratableEntry, $IAbstractWidgetExtension, $ComponentStub, $ComponentExtension<any>, $ClickableWidgetAccessor {
        setX(height: number): void;
        setY(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        yOffset(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        xOffset(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getY(): number;
        parent(): $ParentComponent;
        inflate(space: $Size_): void;
        update(delta: number, mouseX: number, mouseY: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        x(): number;
        getMessage(): $Component;
        id(id: string): $Component$1;
        id(): string;
        mount(parent: $ParentComponent, x: number, y: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isActive(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        y(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        width(): number;
        setSize(width: number, height: number): void;
        configure(closure: $Consumer_<any>): $Component$1;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        height(): number;
        setMessage(message: $Component_): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        draw(context: $OwoUIDrawContext, mouseX: number, mouseY: number, partialTicks: number, delta: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRight(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getX(): number;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, centerX: number, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        setWidth(height: number): void;
        setHeight(height: number): void;
        tooltip(): $List<any>;
        tooltip(tooltip: $List_<any>): $Component$1;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        isMouseOver(mouseX: number, arg1: number): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * @return the narration priority
         */
        narrationPriority(): $NarratableEntry$NarrationPriority;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        getTooltip(): $Tooltip;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        charTyped(): $EventSource<any>;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isFocused(): boolean;
        setRectangle(width: number, height: number, x: number, y: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHovered(): boolean;
        setTooltipDelay(tooltipDelay: $Duration_): void;
        setAlpha(alpha: number): void;
        setTooltip(tooltip: $Tooltip | null): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        static wrapDefaultNarrationMessage(message: $Component_): $MutableComponent;
        /**
         * @deprecated
         */
        onClick(mouseX: number, arg1: number): void;
        onRelease(mouseX: number, arg1: number): void;
        playDownSound(handler: $SoundManager): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHoveredOrFocused(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getFGColor(): number;
        setFGColor(height: number): void;
        clearFGColor(): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getBottom(): number;
        setTabOrderGroup(height: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        allowIndividualOverdraw(): boolean;
        allowIndividualOverdraw(value: boolean): $Component$1;
        dismount(reason: $Component$DismountReason_): void;
        focusHandler(): $FocusHandler;
        positioning(): $AnimatableProperty<any>;
        positioning(positioning: $Positioning): $Component$1;
        horizontalSizing(horizontalSizing: $Sizing): $Component$1;
        horizontalSizing(): $AnimatableProperty<any>;
        margins(): $AnimatableProperty<any>;
        margins(margins: $Insets_): $Component$1;
        verticalSizing(verticalSizing: $Sizing): $Component$1;
        verticalSizing(): $AnimatableProperty<any>;
        mouseDown(): $EventSource<any>;
        shouldDrawTooltip(mouseX: number, mouseY: number): boolean;
        cursorStyle(): $CursorStyle;
        cursorStyle(style: $CursorStyle_): $Component$1;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        onMouseDown(mouseX: number, mouseY: number, mouseY: number): boolean;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        onMouseUp(mouseX: number, mouseY: number, mouseY: number): boolean;
        mouseUp(): $EventSource<any>;
        mouseScroll(): $EventSource<any>;
        mouseDrag(): $EventSource<any>;
        keyPress(): $EventSource<any>;
        focusGained(): $EventSource<any>;
        focusLost(): $EventSource<any>;
        mouseEnter(): $EventSource<any>;
        mouseLeave(): $EventSource<any>;
        onMouseScroll(mouseX: number, mouseY: number, amount: number): boolean;
        onMouseDrag(mouseX: number, mouseY: number, deltaX: number, deltaY: number, button: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        onKeyPress(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        onCharTyped(codePoint: string, modifiers: number): boolean;
        canFocus(source: $Component$FocusSource_): boolean;
        onFocusGained(source: $Component$FocusSource_): void;
        onFocusLost(): void;
        parseProperties(spec: $UIModel, element: $Element, children: $Map_<any, any>): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        zIndex(): number;
        zIndex(zIndex: number): $Component$1;
        widgetWrapper(): $VanillaWidgetComponent;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        widthOffset(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        heightOffset(): number;
        updateX(height: number): void;
        updateY(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getWidth(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getHeight(): number;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        mouseMoved(mouseX: number, arg1: number): void;
        setPosition(width: number, height: number): void;
        /**
         * Handles the logic for when this widget is clicked. Vanilla calls this after `AbstractWidget#mouseClicked(double, double, int)` validates that:
         * 
         * - this widget is active and visible
         * - the button can be handled by this widget
         * - the mouse is over this widget
         */
        onClick(mouseX: number, mouseY: number, button: number): void;
        remove(): void;
        root(): $ParentComponent;
        tooltip(tooltip: $Collection_<$Component_>): $Component$1;
        tooltip(tooltip: $Component_): $Component$1;
        moveTo(width: number, height: number): void;
        sizing(sizing: $Sizing): $Component$1;
        sizing(horizontalSizing: $Sizing, verticalSizing: $Sizing): $Component$1;
        drawTooltip(context: $OwoUIDrawContext, mouseX: number, mouseY: number, partialTicks: number, delta: number): void;
        drawFocusHighlight(context: $OwoUIDrawContext, mouseX: number, mouseY: number, partialTicks: number, delta: number): void;
        isInBoundingBox(mouseX: number, y: number): boolean;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        hasParent(): boolean;
        fullSize(): $Size;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        baseX(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        baseY(): number;
        interpolate(next: $PositionedRectangle, delta: number): $PositionedRectangle;
        intersects(other: $PositionedRectangle): boolean;
        intersection(other: $PositionedRectangle): $PositionedRectangle;
        owo$setX(height: number): void;
        owo$setY(height: number): void;
        owo$setHeight(height: number): void;
        owo$setWidth(height: number): void;
        owo$getTooltip(): $WidgetTooltipHolder;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
        get right(): number;
        get hovered(): boolean;
        set tooltipDelay(value: $Duration_);
        set alpha(value: number);
        get hoveredOrFocused(): boolean;
        get bottom(): number;
        get currentFocusPath(): $ComponentPath;
    }
    export class $Button$CreateNarration {
    }
    export interface $Button$CreateNarration {
        createNarrationMessage(messageSupplier: $Supplier_<$MutableComponent>): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $Button$CreateNarration}.
     */
    export type $Button$CreateNarration_ = ((arg0: $Supplier<$MutableComponent>) => $MutableComponent_);
    export class $MultiLineTextWidget$CacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MultiLineTextWidget$CacheKey}.
     */
    export type $MultiLineTextWidget$CacheKey_ = { maxRows?: $OptionalInt, maxWidth?: number, message?: $Component_,  } | [maxRows?: $OptionalInt, maxWidth?: number, message?: $Component_, ];
    export class $DebugScreenOverlay {
        clearChunkCache(): void;
        handler$zdn000$sodium_extra$preRender(arg0: $GuiGraphics, arg1: $CallbackInfo): void;
        redirect$zdn000$sodium_extra$sodiumExtra$redirectDrawLeftText(arg0: $DebugScreenOverlay, arg1: $GuiGraphics, arg2: $List_<any>, arg3: boolean): void;
        redirect$zdn000$sodium_extra$sodiumExtra$redirectDrawRightText(arg0: $DebugScreenOverlay, arg1: $GuiGraphics, arg2: $List_<any>, arg3: boolean): void;
        localvar$fmm000$sable$addDebugInfo(arg0: $List_<any>): $List<any>;
        showNetworkCharts(): boolean;
        showFpsCharts(): boolean;
        getPingLogger(): $LocalSampleLogger;
        getBandwidthLogger(): $LocalSampleLogger;
        logRemoteSample(sample: number[], sampleType: $RemoteDebugSampleType_): void;
        getTickTimeLogger(): $LocalSampleLogger;
        reset(): void;
        render(guiGraphics: $GuiGraphics): void;
        showProfilerChart(): boolean;
        showDebugScreen(): boolean;
        logFrameDuration(frameDuration: number): void;
        toggleProfilerChart(): void;
        toggleFpsCharts(): void;
        toggleNetworkCharts(): void;
        toggleOverlay(): void;
        localvar$zno000$veil$modifyGameInformation(arg0: $List_<any>): $List<any>;
        constructor(minecraft: $Minecraft);
        get pingLogger(): $LocalSampleLogger;
        get bandwidthLogger(): $LocalSampleLogger;
        get tickTimeLogger(): $LocalSampleLogger;
    }
    export class $PopupScreen extends $Screen {
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
    export class $DebugScreenOverlay$AllocationRateCalculator {
    }
    export class $EditBox extends $AbstractWidget implements $Renderable, $AccessEditBox, $GreedyInputComponent, $TextFieldWidgetAccessor {
        renderHighlight(guiGraphics: $GuiGraphics, minX: number, minY: number, maxX: number, maxY: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteCharsToPos(num: number): void;
        moveCursorToEnd(select: boolean): void;
        moveCursor(delta: number, select: boolean): void;
        moveCursorTo(delta: number, select: boolean): void;
        moveCursorToStart(select: boolean): void;
        getWordPosition(delta: number): number;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteChars(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setHighlightPos(num: number): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isEditable(): boolean;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColorUneditable(num: number): void;
        setTextShadow(select: boolean): void;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setSuggestion(textToWrite: string | null): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteWords(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setCursorPosition(num: number): void;
        setEditable(select: boolean): void;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getValue(): string;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setValue(textToWrite: string): void;
        setFormatter(textFormatter: $BiFunction_<string, number, $FormattedCharSequence>): void;
        setFilter(validator: $Predicate_<string>): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setMaxLength(num: number): void;
        setBordered(select: boolean): void;
        setResponder(responder: $Consumer_<string>): void;
        setCanLoseFocus(select: boolean): void;
        /**
         * Returns the current position of the cursor.
         */
        getMaxLength(): number;
        setVisible(select: boolean): void;
        /**
         * Returns the current position of the cursor.
         */
        getCursorPosition(): number;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        insertText(textToWrite: string): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isVisible(): boolean;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColor(num: number): void;
        setHint(hint: $Component_): void;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        canConsumeInput(): boolean;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getHighlighted(): string;
        /**
         * Returns the current position of the cursor.
         */
        getInnerWidth(): number;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isBordered(): boolean;
        getScreenX(delta: number): number;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getTextShadow(): boolean;
        searchables$getFilter(): $Predicate<string>;
        searchables$getResponder(): $Consumer<string>;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        owo$drawsBackground(): boolean;
        canLoseFocus: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static BACKWARDS: number;
        active: boolean;
        static FORWARDS: number;
        static DEFAULT_TEXT_COLOR: number;
        constructor(font: $Font, width: number, height: number, message: $Component_);
        constructor(font: $Font, x: number, y: number, width: number, height: number, message: $Component_);
        constructor(font: $Font, x: number, y: number, width: number, height: number, editBox: $EditBox | null, message: $Component_);
        set highlightPos(value: number);
        set textColorUneditable(value: number);
        set suggestion(value: string | null);
        set formatter(value: $BiFunction_<string, number, $FormattedCharSequence>);
        set filter(value: $Predicate_<string>);
        set responder(value: $Consumer_<string>);
        set textColor(value: number);
        set hint(value: $Component_);
        get highlighted(): string;
        get innerWidth(): number;
    }
    export class $StringWidget extends $AbstractStringWidget {
        alignLeft(): $StringWidget;
        alignCenter(): $StringWidget;
        alignRight(): $StringWidget;
        setColor(color: number): $StringWidget;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        alignX: number;
        constructor(message: $Component_, font: $Font);
        constructor(width: number, height: number, message: $Component_, font: $Font);
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        set color(value: number);
    }
    export class $SpriteIconButton$CenteredIcon extends $SpriteIconButton {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
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
    export class $Checkbox$OnValueChange {
        static NOP: $Checkbox$OnValueChange;
    }
    export interface $Checkbox$OnValueChange {
        onValueChange(checkbox: $Checkbox, value: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $Checkbox$OnValueChange}.
     */
    export type $Checkbox$OnValueChange_ = ((arg0: $Checkbox, arg1: boolean) => void);
    export class $FocusableTextWidget extends $MultiLineTextWidget {
        containWithin(width: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(maxWidth: number, message: $Component_, font: $Font, alwaysShowBorder: boolean, padding: number);
        constructor(maxWidth: number, message: $Component_, font: $Font, padding: number);
        constructor(maxWidth: number, message: $Component_, font: $Font);
    }
    export class $CycleButton<T> extends $AbstractButton {
        getValue(): $PositionedRectangle;
        static builder<T>(valueStringifier: $Function_<T, $Component>): $CycleButton$Builder<T>;
        setValue(value: $PositionedRectangle): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        createDefaultNarrationMessage(): $MutableComponent;
        static booleanBuilder(componentOn: $Component_, componentOff: $Component_): $CycleButton$Builder<boolean>;
        static onOffBuilder(initialValue: boolean): $CycleButton$Builder<boolean>;
        static onOffBuilder(): $CycleButton$Builder<boolean>;
        static SPRITES: $WidgetSprites;
        static DEFAULT_ALT_LIST_SELECTOR: $BooleanSupplier;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
    }
    export class $FittingMultiLineTextWidget extends $AbstractScrollWidget {
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        showingScrollBar(): boolean;
        setColor(color: number): $FittingMultiLineTextWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        set color(value: number);
    }
    export class $Button$OnPress {
    }
    export interface $Button$OnPress {
        onPress(button: $Button): void;
    }
    /**
     * Values that may be interpreted as {@link $Button$OnPress}.
     */
    export type $Button$OnPress_ = ((arg0: $Button) => void);
    export class $AbstractOptionSliderButton extends $AbstractSliderButton {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
    }
    export class $ImageWidget extends $AbstractWidget {
        static texture(width: number, height: number, texture: $ResourceLocation_, textureWidth: number, textureHeight: number): $ImageWidget;
        static sprite(width: number, height: number, sprite: $ResourceLocation_): $ImageWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
    }
    export class $ObjectSelectionList<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        scrollAmount: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $BossHealthOverlay {
        shouldCreateWorldFog(): boolean;
        reset(): void;
        update(packet: $ClientboundBossEventPacket): void;
        render(guiGraphics: $GuiGraphics): void;
        shouldPlayMusic(): boolean;
        shouldDarkenScreen(): boolean;
        constructor(minecraft: $Minecraft);
    }
    export class $CycleButton$ValueListSupplier<T> {
        static create<T>(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$ValueListSupplier<T>;
        static create<T>(values: $Collection_<T>): $CycleButton$ValueListSupplier<T>;
    }
    export interface $CycleButton$ValueListSupplier<T> {
        getDefaultList(): $List<T>;
        getSelectedList(): $List<T>;
        get defaultList(): $List<T>;
        get selectedList(): $List<T>;
    }
    export class $AbstractStringWidget extends $AbstractWidget {
        setColor(color: number): $AbstractStringWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        set color(value: number);
    }
    export class $AbstractSelectionList$Entry<E extends $AbstractSelectionList$Entry<E>> implements $GuiEventListener {
        render(guiGraphics: $GuiGraphics, index: number, top: number, left: number, width: number, height: number, mouseX: number, mouseY: number, hovering: boolean, partialTick: number): void;
        /**
         * Checks if the given mouse coordinates are over the GUI element.
         * 
         * @return `true` if the mouse is over the GUI element, `false` otherwise.
         */
        isMouseOver(mouseX: number, arg1: number): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isFocused(): boolean;
        renderBack(guiGraphics: $GuiGraphics, index: number, top: number, left: number, width: number, height: number, mouseX: number, mouseY: number, hovering: boolean, partialTick: number): void;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        /**
         * Called when a mouse button is released within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when a mouse button is released within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        /**
         * Called when the mouse is moved within the GUI element.
         */
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get tabOrderGroup(): number;
    }
    export class $AbstractSelectionList$TrackedList extends $AbstractList<E> {
        reversed(): $SequencedCollection<E>;
    }
    export class $LockIconButton$Icon extends $Enum<$LockIconButton$Icon> {
    }
    /**
     * Values that may be interpreted as {@link $LockIconButton$Icon}.
     */
    export type $LockIconButton$Icon_ = "locked" | "locked_hover" | "locked_disabled" | "unlocked" | "unlocked_hover" | "unlocked_disabled";
    export class $ContainerObjectSelectionList<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        scrollAmount: number;
        constructor(minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
    }
    export class $ChatComponent$DelayedMessageDeletion extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatComponent$DelayedMessageDeletion}.
     */
    export type $ChatComponent$DelayedMessageDeletion_ = { signature?: $MessageSignature_, deletableAfter?: number,  } | [signature?: $MessageSignature_, deletableAfter?: number, ];
    export class $AbstractButton extends $AbstractWidget implements $AbstractButtonExtension {
        onPress(): void;
        renderString(guiGraphics: $GuiGraphics, font: $Font, color: number): void;
        getRenderingEvent(): $Event<any>;
        adjustRendering<B extends $AbstractButton>(event: $ButtonEvents$AdjustRendering_): B;
        static SPRITES: $WidgetSprites;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
        get renderingEvent(): $Event<any>;
    }
    export class $PlayerSkinWidget extends $AbstractWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(width: number, height: number, model: $EntityModelSet, skin: $Supplier_<$PlayerSkin>);
    }
    export class $OptionsList$OptionEntry extends $OptionsList$Entry {
    }
    export class $MultiLineTextWidget extends $AbstractStringWidget {
        setMaxRows(color: number): $MultiLineTextWidget;
        setMaxWidth(color: number): $MultiLineTextWidget;
        setCentered(centered: boolean): $MultiLineTextWidget;
        setColor(color: number): $MultiLineTextWidget;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(x: number, y: number, message: $Component_, font: $Font);
        constructor(message: $Component_, font: $Font);
        set maxRows(value: number);
        set maxWidth(value: number);
        set centered(value: boolean);
        set color(value: number);
    }
    export class $ObjectSelectionList$Entry<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $NarrationSupplier {
        getNarration(): $Component;
        updateNarration(arg0: $NarrationElementOutput): void;
        constructor();
        get narration(): $Component;
    }
    export class $CommandSuggestions {
        renderSuggestions(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): boolean;
        renderUsage(guiGraphics: $GuiGraphics): void;
        showSuggestions(allowHiding: boolean): void;
        hide(): void;
        setAllowHiding(allowHiding: boolean): void;
        updateCommandInfo(): void;
        setAllowSuggestions(allowHiding: boolean): void;
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        getNarrationMessage(): $Component;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        getUsageNarration(): $Component;
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        mouseScrolled(delta: number): boolean;
        isVisible(): boolean;
        suggestions: $CommandSuggestions$SuggestionsList;
        constructor(minecraft: $Minecraft, screen: $Screen, input: $EditBox, font: $Font, commandsOnly: boolean, onlyShowIfCursorPastError: boolean, lineStartOffset: number, suggestionLineLimit: number, anchorToBottom: boolean, fillColor: number);
        set allowHiding(value: boolean);
        set allowSuggestions(value: boolean);
        get narrationMessage(): $Component;
        get usageNarration(): $Component;
        get visible(): boolean;
    }
    export class $PopupScreen$Builder {
        addButton(message: $Component_, action: $Consumer_<$PopupScreen>): $PopupScreen$Builder;
        setImage(image: $ResourceLocation_): $PopupScreen$Builder;
        build(): $PopupScreen;
        onClose(onClose: $Runnable_): $PopupScreen$Builder;
        setMessage(message: $Component_): $PopupScreen$Builder;
        setWidth(width: number): $PopupScreen$Builder;
        constructor(backgroundScreen: $Screen, title: $Component_);
        set image(value: $ResourceLocation_);
        set message(value: $Component_);
        set width(value: number);
    }
    export class $OptionsList$Entry extends $ContainerObjectSelectionList$Entry<$OptionsList$Entry> {
    }
    export class $ChatComponent {
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        tick(): void;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        resetChatScroll(): void;
        getRecentChat(): $ArrayListDeque<string>;
        getLinesPerPage(): number;
        scrollChat(posInc: number): void;
        handleChatQueueClicked(mouseX: number, arg1: number): boolean;
        getMessageTagAt(mouseX: number, arg1: number): $GuiMessageTag;
        getClickedComponentStyleAt(mouseX: number, arg1: number): $Style;
        /**
         * Adds this string to the list of sent messages, for recall using the up/down arrow keys
         */
        addRecentChat(message: string): void;
        render(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean): void;
        addMessage(chatComponent: $Component_): void;
        addMessage(chatComponent: $Component_, headerSignature: $MessageSignature_ | null, tag: $GuiMessageTag_ | null): void;
        getScale(): number;
        static defaultUnfocusedPct(): number;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        rescaleChat(): void;
        /**
         * Clears the chat.
         */
        clearMessages(clearSentMsgHistory: boolean): void;
        /**
         * Returns `true` if the chat GUI is open
         */
        isChatFocused(): boolean;
        deleteMessage(messageSignature: $MessageSignature_): void;
        storeState(): $ChatComponent$State;
        restoreState(state: $ChatComponent$State): void;
        getWidth(): number;
        static getWidth(height: number): number;
        getHeight(): number;
        static getHeight(height: number): number;
        constructor(minecraft: $Minecraft);
        get recentChat(): $ArrayListDeque<string>;
        get linesPerPage(): number;
        get scale(): number;
        get chatFocused(): boolean;
    }
    export class $PlayerTabOverlay {
        setHeader(footer: $Component_ | null): void;
        setFooter(footer: $Component_ | null): void;
        reset(): void;
        render(guiGraphics: $GuiGraphics, width: number, scoreboard: $Scoreboard, objective: $Objective | null): void;
        /**
         * Called by GuiIngame to update the information stored in the playerlist, does not actually render the list, however.
         */
        setVisible(visible: boolean): void;
        getNameForDisplay(playerInfo: $PlayerInfo): $Component;
        static MAX_ROWS_PER_COL: number;
        constructor(minecraft: $Minecraft, gui: $Gui);
        set header(value: $Component_ | null);
        set footer(value: $Component_ | null);
        set visible(value: boolean);
    }
    export class $PlayerFaceRenderer {
        static draw(guiGraphics: $GuiGraphics, skin: $PlayerSkin_, x: number, y: number, size: number): void;
        static draw(guiGraphics: $GuiGraphics, atlasLocation: $ResourceLocation_, x: number, y: number, size: number, drawHat: boolean, upsideDown: boolean): void;
        static draw(guiGraphics: $GuiGraphics, atlasLocation: $ResourceLocation_, x: number, y: number, size: number): void;
        static SKIN_HAT_WIDTH: number;
        static SKIN_HAT_HEIGHT: number;
        static SKIN_HEAD_WIDTH: number;
        static SKIN_HAT_U: number;
        static SKIN_TEX_HEIGHT: number;
        static SKIN_HEAD_HEIGHT: number;
        static SKIN_HEAD_V: number;
        static SKIN_HEAD_U: number;
        static SKIN_HAT_V: number;
        static SKIN_TEX_WIDTH: number;
        constructor();
    }
    export class $TabOrderedElement {
    }
    export interface $TabOrderedElement {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        get tabOrderGroup(): number;
    }
    export class $OptionsList extends $ContainerObjectSelectionList<$OptionsList$Entry> {
        addBig(option: $OptionInstance<never>): void;
        findOption(option: $OptionInstance<never>): $AbstractWidget;
        addSmall(options: $List_<$AbstractWidget>): void;
        addSmall(leftOption: $AbstractWidget, rightOption: $AbstractWidget | null): void;
        addSmall(...options: $OptionInstance<never>[]): void;
        applyUnsavedChanges(): void;
        getMouseOver(mouseX: number, arg1: number): ($GuiEventListener) | undefined;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        scrollAmount: number;
        constructor(minecraft: $Minecraft, width: number, screen: $OptionsSubScreen);
    }
    export class $SubtitleOverlay implements $SoundEventListener {
        render(guiGraphics: $GuiGraphics): void;
        onPlaySound(sound: $SoundInstance, accessor: $WeighedSoundEvents, range: number): void;
        constructor(minecraft: $Minecraft);
    }
    export class $AbstractSliderButton extends $AbstractWidget {
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, value: number);
    }
    export class $LockIconButton extends $Button {
        setLocked(locked: boolean): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isLocked(): boolean;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(x: number, y: number, onPress: $Button$OnPress_);
    }
    export class $MultiLineEditBox extends $AbstractScrollWidget implements $GreedyInputComponent, $EditBoxWidgetAccessor {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getInnerHeight(): number;
        setValueListener(valueListener: $Consumer_<string>): void;
        getValue(): string;
        setValue(fullText: string): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        setCharacterLimit(characterLimit: number): void;
        owo$getEditBox(): $MultilineTextField;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        textField: $MultilineTextField;
        constructor(font: $Font, x: number, y: number, width: number, height: number, placeholder: $Component_, message: $Component_);
        get innerHeight(): number;
        set valueListener(value: $Consumer_<string>);
        set characterLimit(value: number);
    }
}
