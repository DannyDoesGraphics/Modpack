import { $Serializable, $Reader, $InputStream, $Writer, $OutputStream } from "@package/java/io";
import { $TextUI } from "@package/javax/swing/plaf";
import { $CaretListener_, $UndoableEditListener_, $DocumentListener, $CaretListener, $DocumentEvent, $ChangeListener_ } from "@package/javax/swing/event";
import { $Enumeration } from "@package/java/util";
import { $Accessible } from "@package/javax/accessibility";
import { $Point2D, $Rectangle2D } from "@package/java/awt/geom";
import { $CharacterIterator, $MessageFormat } from "@package/java/text";
import { $Printable } from "@package/java/awt/print";
import { $IntStream } from "@package/java/util/stream";
import { $Point, $Color, $Dimension, $Shape, $Container, $Insets, $Graphics, $Rectangle } from "@package/java/awt";
import { $CharSequence, $Cloneable, $Runnable_, $Object } from "@package/java/lang";
import { $PrintRequestAttributeSet } from "@package/javax/print/attribute";
import { $DropMode, $KeyStroke, $Scrollable, $DropMode_, $TransferHandler$DropLocation, $SwingConstants, $JComponent, $JEditorPane, $Action } from "@package/javax/swing";
import { $PrintService } from "@package/javax/print";

declare module "@package/javax/swing/text" {
    export class $Highlighter$Highlight {
    }
    export interface $Highlighter$Highlight {
        getPainter(): $Highlighter$HighlightPainter;
        getStartOffset(): number;
        getEndOffset(): number;
        get painter(): $Highlighter$HighlightPainter;
        get startOffset(): number;
        get endOffset(): number;
    }
    export class $NavigationFilter {
        setDot(arg0: $NavigationFilter$FilterBypass, arg1: number, arg2: $Position$Bias): void;
        moveDot(arg0: $NavigationFilter$FilterBypass, arg1: number, arg2: $Position$Bias): void;
        getNextVisualPositionFrom(arg0: $JTextComponent, arg1: number, arg2: $Position$Bias, arg3: number, arg4: $Position$Bias[]): number;
        constructor();
    }
    export class $Element {
    }
    export interface $Element {
        getParentElement(): $Element;
        getElementCount(): number;
        getElementIndex(arg0: number): number;
        getStartOffset(): number;
        getEndOffset(): number;
        getDocument(): $Document;
        getName(): string;
        getAttributes(): $AttributeSet;
        isLeaf(): boolean;
        getElement(arg0: number): $Element;
        get parentElement(): $Element;
        get elementCount(): number;
        get startOffset(): number;
        get endOffset(): number;
        get document(): $Document;
        get name(): string;
        get attributes(): $AttributeSet;
        get leaf(): boolean;
    }
    export class $Position {
    }
    export interface $Position {
        getOffset(): number;
        get offset(): number;
    }
    /**
     * Values that may be interpreted as {@link $Position}.
     */
    export type $Position_ = (() => number);
    export class $Keymap {
    }
    export interface $Keymap {
        setDefaultAction(arg0: $Action): void;
        addActionForKeyStroke(arg0: $KeyStroke, arg1: $Action): void;
        getDefaultAction(): $Action;
        getBoundKeyStrokes(): $KeyStroke[];
        getBoundActions(): $Action[];
        getKeyStrokesForAction(arg0: $Action): $KeyStroke[];
        isLocallyDefined(arg0: $KeyStroke): boolean;
        removeKeyStrokeBinding(arg0: $KeyStroke): void;
        removeBindings(): void;
        getResolveParent(): $Keymap;
        setResolveParent(arg0: $Keymap): void;
        getName(): string;
        getAction(arg0: $KeyStroke): $Action;
        get boundKeyStrokes(): $KeyStroke[];
        get boundActions(): $Action[];
        get name(): string;
    }
    export class $Caret {
    }
    export interface $Caret {
        getMark(): number;
        addChangeListener(arg0: $ChangeListener_): void;
        paint(arg0: $Graphics): void;
        removeChangeListener(arg0: $ChangeListener_): void;
        deinstall(arg0: $JTextComponent): void;
        setDot(arg0: number): void;
        moveDot(arg0: number): void;
        getDot(): number;
        getBlinkRate(): number;
        setBlinkRate(arg0: number): void;
        isSelectionVisible(): boolean;
        setSelectionVisible(arg0: boolean): void;
        setMagicCaretPosition(arg0: $Point): void;
        getMagicCaretPosition(): $Point;
        install(arg0: $JTextComponent): void;
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        get mark(): number;
    }
    export class $Highlighter {
    }
    export interface $Highlighter {
        paint(arg0: $Graphics): void;
        removeHighlight(arg0: $Object): void;
        addHighlight(arg0: number, arg1: number, arg2: $Highlighter$HighlightPainter_): $Object;
        getHighlights(): $Highlighter$Highlight[];
        deinstall(arg0: $JTextComponent): void;
        removeAllHighlights(): void;
        changeHighlight(arg0: $Object, arg1: number, arg2: number): void;
        install(arg0: $JTextComponent): void;
        get highlights(): $Highlighter$Highlight[];
    }
    export class $NavigationFilter$FilterBypass {
        setDot(arg0: number, arg1: $Position$Bias): void;
        moveDot(arg0: number, arg1: $Position$Bias): void;
        getCaret(): $Caret;
        get caret(): $Caret;
    }
    export class $EditorKit implements $Cloneable, $Serializable {
        getViewFactory(): $ViewFactory;
        createCaret(): $Caret;
        deinstall(arg0: $JEditorPane): void;
        createDefaultDocument(): $Document;
        clone(): $Object;
        write(arg0: $OutputStream, arg1: $Document, arg2: number, arg3: number): void;
        write(arg0: $Writer, arg1: $Document, arg2: number, arg3: number): void;
        read(arg0: $InputStream, arg1: $Document, arg2: number): void;
        read(arg0: $Reader, arg1: $Document, arg2: number): void;
        getActions(): $Action[];
        install(arg0: $JEditorPane): void;
        getContentType(): string;
        constructor();
        get viewFactory(): $ViewFactory;
        get actions(): $Action[];
        get contentType(): string;
    }
    export class $Segment implements $Cloneable, $CharacterIterator, $CharSequence {
        setPartialReturn(arg0: boolean): void;
        isPartialReturn(): boolean;
        length(): number;
        clone(): $Object;
        charAt(arg0: number): string;
        next(): string;
        subSequence(arg0: number, arg1: number): $CharSequence;
        last(): string;
        first(): string;
        current(): string;
        previous(): string;
        getIndex(): number;
        getBeginIndex(): number;
        getEndIndex(): number;
        setIndex(arg0: number): string;
        isEmpty(): boolean;
        codePoints(): $IntStream;
        chars(): $IntStream;
        offset: number;
        array: string[];
        count: number;
        constructor();
        constructor(arg0: string[], arg1: number, arg2: number);
        get beginIndex(): number;
        get endIndex(): number;
        get empty(): boolean;
    }
    export class $JTextComponent extends $JComponent implements $Scrollable, $Accessible {
        setDragEnabled(arg0: boolean): void;
        getDragEnabled(): boolean;
        setDropMode(arg0: $DropMode_): void;
        getDropMode(): $DropMode;
        getDropLocation(): $JTextComponent$DropLocation;
        getPreferredScrollableViewportSize(): $Dimension;
        getScrollableUnitIncrement(arg0: $Rectangle, arg1: number, arg2: number): number;
        getScrollableBlockIncrement(arg0: $Rectangle, arg1: number, arg2: number): number;
        getScrollableTracksViewportWidth(): boolean;
        getScrollableTracksViewportHeight(): boolean;
        getUI(): $TextUI;
        setUI(arg0: $TextUI): void;
        cut(): void;
        selectAll(): void;
        paste(): void;
        isEditable(): boolean;
        setDocument(arg0: $Document): void;
        /**
         * @deprecated
         */
        viewToModel(arg0: $Point): number;
        static addKeymap(arg0: string, arg1: $Keymap): $Keymap;
        /**
         * @deprecated
         */
        modelToView(arg0: number): $Rectangle;
        modelToView2D(arg0: number): $Rectangle2D;
        viewToModel2D(arg0: $Point2D): number;
        moveCaretPosition(arg0: number): void;
        getPrintable(arg0: $MessageFormat, arg1: $MessageFormat): $Printable;
        replaceSelection(arg0: string): void;
        static getKeymap(arg0: string): $Keymap;
        getKeymap(): $Keymap;
        addCaretListener(arg0: $CaretListener_): void;
        removeCaretListener(arg0: $CaretListener_): void;
        getCaretListeners(): $CaretListener[];
        setNavigationFilter(arg0: $NavigationFilter): void;
        getNavigationFilter(): $NavigationFilter;
        setHighlighter(arg0: $Highlighter): void;
        setKeymap(arg0: $Keymap): void;
        static removeKeymap(arg0: string): $Keymap;
        static loadKeymap(arg0: $Keymap, arg1: $JTextComponent$KeyBinding[], arg2: $Action[]): void;
        getCaretColor(): $Color;
        setCaretColor(arg0: $Color): void;
        getSelectionColor(): $Color;
        getSelectedTextColor(): $Color;
        setSelectedTextColor(arg0: $Color): void;
        getDisabledTextColor(): $Color;
        setDisabledTextColor(arg0: $Color): void;
        setFocusAccelerator(arg0: string): void;
        getFocusAccelerator(): string;
        getCaretPosition(): number;
        setSelectionStart(arg0: number): void;
        setSelectionEnd(arg0: number): void;
        getSelectedText(): string;
        setEditable(arg0: boolean): void;
        getCaret(): $Caret;
        getMargin(): $Insets;
        setMargin(arg0: $Insets): void;
        setCaret(arg0: $Caret): void;
        setCaretPosition(arg0: number): void;
        getSelectionStart(): number;
        getSelectionEnd(): number;
        getDocument(): $Document;
        write(arg0: $Writer): void;
        read(arg0: $Reader, arg1: $Object): void;
        getActions(): $Action[];
        print(arg0: $MessageFormat, arg1: $MessageFormat, arg2: boolean, arg3: $PrintService, arg4: $PrintRequestAttributeSet, arg5: boolean): boolean;
        print(arg0: $MessageFormat, arg1: $MessageFormat): boolean;
        print(): boolean;
        copy(): void;
        getText(arg0: number, arg1: number): string;
        getText(): string;
        setText(arg0: string): void;
        select(arg0: number, arg1: number): void;
        getHighlighter(): $Highlighter;
        setSelectionColor(arg0: $Color): void;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static FOCUS_ACCELERATOR_KEY: string;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static DEFAULT_KEYMAP: string;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
        constructor();
        get dropLocation(): $JTextComponent$DropLocation;
        get preferredScrollableViewportSize(): $Dimension;
        get scrollableTracksViewportWidth(): boolean;
        get scrollableTracksViewportHeight(): boolean;
        get caretListeners(): $CaretListener[];
        get selectedText(): string;
        get actions(): $Action[];
    }
    export class $JTextComponent$DropLocation extends $TransferHandler$DropLocation {
        getIndex(): number;
        getBias(): $Position$Bias;
        get index(): number;
        get bias(): $Position$Bias;
    }
    export class $Highlighter$HighlightPainter {
    }
    export interface $Highlighter$HighlightPainter {
        paint(arg0: $Graphics, arg1: number, arg2: number, arg3: $Shape, arg4: $JTextComponent): void;
    }
    /**
     * Values that may be interpreted as {@link $Highlighter$HighlightPainter}.
     */
    export type $Highlighter$HighlightPainter_ = ((arg0: $Graphics, arg1: number, arg2: number, arg3: $Shape, arg4: $JTextComponent) => void);
    export class $JTextComponent$KeyBinding {
        key: $KeyStroke;
        actionName: string;
        constructor(arg0: $KeyStroke, arg1: string);
    }
    export class $Position$Bias {
        static Backward: $Position$Bias;
        static Forward: $Position$Bias;
    }
    export class $View implements $SwingConstants {
        insertUpdate(arg0: $DocumentEvent, arg1: $Shape, arg2: $ViewFactory_): void;
        removeUpdate(arg0: $DocumentEvent, arg1: $Shape, arg2: $ViewFactory_): void;
        changedUpdate(arg0: $DocumentEvent, arg1: $Shape, arg2: $ViewFactory_): void;
        getViewFactory(): $ViewFactory;
        getResizeWeight(arg0: number): number;
        getPreferredSpan(arg0: number): number;
        preferenceChanged(arg0: $View, arg1: boolean, arg2: boolean): void;
        getViewCount(): number;
        getViewIndex(arg0: number, arg1: number, arg2: $Shape): number;
        getViewIndex(arg0: number, arg1: $Position$Bias): number;
        getChildAllocation(arg0: number, arg1: $Shape): $Shape;
        getMinimumSpan(arg0: number): number;
        getMaximumSpan(arg0: number): number;
        breakView(arg0: number, arg1: number, arg2: number, arg3: number): $View;
        getBreakWeight(arg0: number, arg1: number, arg2: number): number;
        paint(arg0: $Graphics, arg1: $Shape): void;
        /**
         * @deprecated
         */
        viewToModel(arg0: number, arg1: number, arg2: $Shape): number;
        viewToModel(arg0: number, arg1: number, arg2: $Shape, arg3: $Position$Bias[]): number;
        /**
         * @deprecated
         */
        modelToView(arg0: number, arg1: $Shape): $Shape;
        modelToView(arg0: number, arg1: $Position$Bias, arg2: number, arg3: $Position$Bias, arg4: $Shape): $Shape;
        modelToView(arg0: number, arg1: $Shape, arg2: $Position$Bias): $Shape;
        getView(arg0: number): $View;
        getStartOffset(): number;
        getEndOffset(): number;
        createFragment(arg0: number, arg1: number): $View;
        getNextVisualPositionFrom(arg0: number, arg1: $Position$Bias, arg2: $Shape, arg3: number, arg4: $Position$Bias[]): number;
        getDocument(): $Document;
        getContainer(): $Container;
        getToolTipText(arg0: number, arg1: number, arg2: $Shape): string;
        remove(arg0: number): void;
        append(arg0: $View): void;
        insert(arg0: number, arg1: $View): void;
        replace(arg0: number, arg1: number, arg2: $View[]): void;
        getParent(): $View;
        getAttributes(): $AttributeSet;
        removeAll(): void;
        setParent(arg0: $View): void;
        setSize(arg0: number, arg1: number): void;
        getElement(): $Element;
        getAlignment(arg0: number): number;
        isVisible(): boolean;
        getGraphics(): $Graphics;
        static ForcedBreakWeight: number;
        static BadBreakWeight: number;
        static GoodBreakWeight: number;
        static X_AXIS: number;
        static ExcellentBreakWeight: number;
        static Y_AXIS: number;
        constructor(arg0: $Element);
        get viewFactory(): $ViewFactory;
        get viewCount(): number;
        get startOffset(): number;
        get endOffset(): number;
        get document(): $Document;
        get container(): $Container;
        get attributes(): $AttributeSet;
        get element(): $Element;
        get visible(): boolean;
        get graphics(): $Graphics;
    }
    export class $Document {
        static TitleProperty: string;
        static StreamDescriptionProperty: string;
    }
    export interface $Document {
        getDefaultRootElement(): $Element;
        removeDocumentListener(arg0: $DocumentListener): void;
        addDocumentListener(arg0: $DocumentListener): void;
        getStartPosition(): $Position;
        insertString(arg0: number, arg1: string, arg2: $AttributeSet): void;
        createPosition(arg0: number): $Position;
        addUndoableEditListener(arg0: $UndoableEditListener_): void;
        removeUndoableEditListener(arg0: $UndoableEditListener_): void;
        getEndPosition(): $Position;
        getRootElements(): $Element[];
        remove(arg0: number, arg1: number): void;
        getProperty(arg0: $Object): $Object;
        getLength(): number;
        getText(arg0: number, arg1: number, arg2: $Segment): void;
        getText(arg0: number, arg1: number): string;
        render(arg0: $Runnable_): void;
        putProperty(arg0: $Object, arg1: $Object): void;
        get defaultRootElement(): $Element;
        get startPosition(): $Position;
        get endPosition(): $Position;
        get rootElements(): $Element[];
        get length(): number;
    }
    export class $ViewFactory {
    }
    export interface $ViewFactory {
        create(arg0: $Element): $View;
    }
    /**
     * Values that may be interpreted as {@link $ViewFactory}.
     */
    export type $ViewFactory_ = ((arg0: $Element) => $View);
    export class $AttributeSet {
        static ResolveAttribute: $Object;
        static NameAttribute: $Object;
    }
    export interface $AttributeSet {
        getAttributeNames(): $Enumeration<never>;
        getResolveParent(): $AttributeSet;
        containsAttributes(arg0: $AttributeSet): boolean;
        copyAttributes(): $AttributeSet;
        containsAttribute(arg0: $Object, arg1: $Object): boolean;
        isDefined(arg0: $Object): boolean;
        getAttribute(arg0: $Object): $Object;
        isEqual(arg0: $AttributeSet): boolean;
        getAttributeCount(): number;
        get attributeNames(): $Enumeration<never>;
        get resolveParent(): $AttributeSet;
        get attributeCount(): number;
    }
}
