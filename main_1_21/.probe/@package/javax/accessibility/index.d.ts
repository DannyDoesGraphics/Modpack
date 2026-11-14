import { $PropertyChangeListener_ } from "@package/java/beans";
import { $AttributeSet } from "@package/javax/swing/text";
import { $FocusListener } from "@package/java/awt/event";
import { $Font, $Point, $Cursor, $Color, $FontMetrics, $Dimension, $Rectangle } from "@package/java/awt";
import { $Locale } from "@package/java/util";
import { $Number, $Object } from "@package/java/lang";

declare module "@package/javax/accessibility" {
    export class $AccessibleRelationSet {
        remove(arg0: $AccessibleRelation): boolean;
        size(): number;
        get(arg0: string): $AccessibleRelation;
        clear(): void;
        add(arg0: $AccessibleRelation): boolean;
        toArray(): $AccessibleRelation[];
        contains(arg0: string): boolean;
        addAll(arg0: $AccessibleRelation[]): void;
        constructor();
        constructor(arg0: $AccessibleRelation[]);
    }
    export class $AccessibleRelation extends $AccessibleBundle {
        getKey(): string;
        getTarget(): $Object[];
        setTarget(arg0: $Object): void;
        setTarget(arg0: $Object[]): void;
        static EMBEDS: string;
        static EMBEDDED_BY: string;
        static FLOWS_FROM_PROPERTY: string;
        static LABELED_BY: string;
        static MEMBER_OF: string;
        static SUBWINDOW_OF: string;
        static LABELED_BY_PROPERTY: string;
        static CHILD_NODE_OF: string;
        static SUBWINDOW_OF_PROPERTY: string;
        static CONTROLLED_BY: string;
        static EMBEDDED_BY_PROPERTY: string;
        static LABEL_FOR: string;
        static CONTROLLER_FOR: string;
        static PARENT_WINDOW_OF: string;
        static EMBEDS_PROPERTY: string;
        static CONTROLLER_FOR_PROPERTY: string;
        static FLOWS_TO_PROPERTY: string;
        static CONTROLLED_BY_PROPERTY: string;
        static FLOWS_FROM: string;
        static LABEL_FOR_PROPERTY: string;
        static CHILD_NODE_OF_PROPERTY: string;
        static PARENT_WINDOW_OF_PROPERTY: string;
        static FLOWS_TO: string;
        static MEMBER_OF_PROPERTY: string;
        constructor(arg0: string, arg1: $Object[]);
        constructor(arg0: string, arg1: $Object);
        constructor(arg0: string);
        get key(): string;
    }
    export class $AccessibleTable {
    }
    export interface $AccessibleTable {
        getAccessibleCaption(): $Accessible;
        setAccessibleCaption(arg0: $Accessible_): void;
        getAccessibleSummary(): $Accessible;
        setAccessibleSummary(arg0: $Accessible_): void;
        getAccessibleRowCount(): number;
        getAccessibleColumnCount(): number;
        getAccessibleRowExtentAt(arg0: number, arg1: number): number;
        getAccessibleColumnExtentAt(arg0: number, arg1: number): number;
        getAccessibleRowHeader(): $AccessibleTable;
        setAccessibleRowHeader(arg0: $AccessibleTable): void;
        getAccessibleColumnHeader(): $AccessibleTable;
        setAccessibleColumnHeader(arg0: $AccessibleTable): void;
        getAccessibleRowDescription(arg0: number): $Accessible;
        setAccessibleRowDescription(arg0: number, arg1: $Accessible_): void;
        getAccessibleColumnDescription(arg0: number): $Accessible;
        setAccessibleColumnDescription(arg0: number, arg1: $Accessible_): void;
        isAccessibleSelected(arg0: number, arg1: number): boolean;
        isAccessibleRowSelected(arg0: number): boolean;
        isAccessibleColumnSelected(arg0: number): boolean;
        getSelectedAccessibleRows(): number[];
        getSelectedAccessibleColumns(): number[];
        getAccessibleAt(arg0: number, arg1: number): $Accessible;
        get accessibleRowCount(): number;
        get accessibleColumnCount(): number;
        get selectedAccessibleRows(): number[];
        get selectedAccessibleColumns(): number[];
    }
    export class $AccessibleText {
        static WORD: number;
        static CHARACTER: number;
        static SENTENCE: number;
    }
    export interface $AccessibleText {
        getCharCount(): number;
        getCaretPosition(): number;
        getSelectedText(): string;
        getIndexAtPoint(arg0: $Point): number;
        getCharacterBounds(arg0: number): $Rectangle;
        getAfterIndex(arg0: number, arg1: number): string;
        getBeforeIndex(arg0: number, arg1: number): string;
        getCharacterAttribute(arg0: number): $AttributeSet;
        getSelectionStart(): number;
        getSelectionEnd(): number;
        getAtIndex(arg0: number, arg1: number): string;
        get charCount(): number;
        get caretPosition(): number;
        get selectedText(): string;
        get selectionStart(): number;
        get selectionEnd(): number;
    }
    export class $AccessibleEditableText {
    }
    export interface $AccessibleEditableText extends $AccessibleText {
        replaceText(arg0: number, arg1: number, arg2: string): void;
        cut(arg0: number, arg1: number): void;
        paste(arg0: number): void;
        setTextContents(arg0: string): void;
        insertTextAtIndex(arg0: number, arg1: string): void;
        getTextRange(arg0: number, arg1: number): string;
        selectText(arg0: number, arg1: number): void;
        setAttributes(arg0: number, arg1: number, arg2: $AttributeSet): void;
        "delete"(arg0: number, arg1: number): void;
        set textContents(value: string);
    }
    export class $AccessibleIcon {
    }
    export interface $AccessibleIcon {
        getAccessibleIconDescription(): string;
        setAccessibleIconDescription(arg0: string): void;
        getAccessibleIconWidth(): number;
        getAccessibleIconHeight(): number;
        get accessibleIconWidth(): number;
        get accessibleIconHeight(): number;
    }
    export class $AccessibleComponent {
    }
    export interface $AccessibleComponent {
        isShowing(): boolean;
        getForeground(): $Color;
        setForeground(arg0: $Color): void;
        setBackground(arg0: $Color): void;
        setFont(arg0: $Font): void;
        removeFocusListener(arg0: $FocusListener): void;
        getBackground(): $Color;
        setBounds(arg0: $Rectangle): void;
        addFocusListener(arg0: $FocusListener): void;
        getAccessibleAt(arg0: $Point): $Accessible;
        getLocationOnScreen(): $Point;
        isFocusTraversable(): boolean;
        requestFocus(): void;
        getFontMetrics(arg0: $Font): $FontMetrics;
        contains(arg0: $Point): boolean;
        getBounds(): $Rectangle;
        isEnabled(): boolean;
        getLocation(): $Point;
        getSize(): $Dimension;
        setSize(arg0: $Dimension): void;
        setLocation(arg0: $Point): void;
        getCursor(): $Cursor;
        setVisible(arg0: boolean): void;
        setEnabled(arg0: boolean): void;
        getFont(): $Font;
        setCursor(arg0: $Cursor): void;
        isVisible(): boolean;
        get showing(): boolean;
        get locationOnScreen(): $Point;
        get focusTraversable(): boolean;
    }
    export class $AccessibleAction {
        static INCREMENT: string;
        static TOGGLE_POPUP: string;
        static CLICK: string;
        static TOGGLE_EXPAND: string;
        static DECREMENT: string;
    }
    export interface $AccessibleAction {
        getAccessibleActionCount(): number;
        getAccessibleActionDescription(arg0: number): string;
        doAccessibleAction(arg0: number): boolean;
        get accessibleActionCount(): number;
    }
    export class $AccessibleStateSet {
        remove(arg0: $AccessibleState): boolean;
        clear(): void;
        add(arg0: $AccessibleState): boolean;
        toArray(): $AccessibleState[];
        contains(arg0: $AccessibleState): boolean;
        addAll(arg0: $AccessibleState[]): void;
        constructor();
        constructor(arg0: $AccessibleState[]);
    }
    export class $AccessibleValue {
    }
    export interface $AccessibleValue {
        getCurrentAccessibleValue(): $Number;
        setCurrentAccessibleValue(arg0: $Number): boolean;
        getMinimumAccessibleValue(): $Number;
        getMaximumAccessibleValue(): $Number;
        get minimumAccessibleValue(): $Number;
        get maximumAccessibleValue(): $Number;
    }
    export class $Accessible {
    }
    export interface $Accessible {
        getAccessibleContext(): $AccessibleContext;
        get accessibleContext(): $AccessibleContext;
    }
    /**
     * Values that may be interpreted as {@link $Accessible}.
     */
    export type $Accessible_ = (() => $AccessibleContext);
    export class $AccessibleSelection {
    }
    export interface $AccessibleSelection {
        getAccessibleSelection(arg0: number): $Accessible;
        isAccessibleChildSelected(arg0: number): boolean;
        getAccessibleSelectionCount(): number;
        addAccessibleSelection(arg0: number): void;
        removeAccessibleSelection(arg0: number): void;
        clearAccessibleSelection(): void;
        selectAllAccessibleSelection(): void;
        get accessibleSelectionCount(): number;
    }
    export class $AccessibleContext {
        getAccessibleName(): string;
        setAccessibleName(arg0: string): void;
        getAccessibleDescription(): string;
        setAccessibleDescription(arg0: string): void;
        getAccessibleRole(): $AccessibleRole;
        setAccessibleParent(arg0: $Accessible_): void;
        getAccessibleAction(): $AccessibleAction;
        getAccessibleText(): $AccessibleText;
        getAccessibleEditableText(): $AccessibleEditableText;
        getAccessibleValue(): $AccessibleValue;
        getAccessibleIcon(): $AccessibleIcon[];
        getAccessibleRelationSet(): $AccessibleRelationSet;
        getAccessibleTable(): $AccessibleTable;
        getAccessibleParent(): $Accessible;
        getAccessibleSelection(): $AccessibleSelection;
        getAccessibleIndexInParent(): number;
        getAccessibleStateSet(): $AccessibleStateSet;
        getAccessibleChildrenCount(): number;
        getAccessibleChild(arg0: number): $Accessible;
        getAccessibleComponent(): $AccessibleComponent;
        firePropertyChange(arg0: string, arg1: $Object, arg2: $Object): void;
        getLocale(): $Locale;
        addPropertyChangeListener(arg0: $PropertyChangeListener_): void;
        removePropertyChangeListener(arg0: $PropertyChangeListener_): void;
        static ACCESSIBLE_COMPONENT_BOUNDS_CHANGED: string;
        static ACCESSIBLE_INVALIDATE_CHILDREN: string;
        static ACCESSIBLE_VISIBLE_DATA_PROPERTY: string;
        static ACCESSIBLE_TABLE_ROW_HEADER_CHANGED: string;
        static ACCESSIBLE_SELECTION_PROPERTY: string;
        static ACCESSIBLE_NAME_PROPERTY: string;
        static ACCESSIBLE_HYPERTEXT_OFFSET: string;
        static ACCESSIBLE_TEXT_ATTRIBUTES_CHANGED: string;
        static ACCESSIBLE_TABLE_SUMMARY_CHANGED: string;
        static ACCESSIBLE_CHILD_PROPERTY: string;
        static ACCESSIBLE_ACTIVE_DESCENDANT_PROPERTY: string;
        static ACCESSIBLE_DESCRIPTION_PROPERTY: string;
        static ACCESSIBLE_TABLE_ROW_DESCRIPTION_CHANGED: string;
        static ACCESSIBLE_CARET_PROPERTY: string;
        static ACCESSIBLE_ACTION_PROPERTY: string;
        static ACCESSIBLE_VALUE_PROPERTY: string;
        static ACCESSIBLE_TABLE_MODEL_CHANGED: string;
        static ACCESSIBLE_TABLE_COLUMN_DESCRIPTION_CHANGED: string;
        static ACCESSIBLE_STATE_PROPERTY: string;
        static ACCESSIBLE_TABLE_COLUMN_HEADER_CHANGED: string;
        static ACCESSIBLE_TEXT_PROPERTY: string;
        static ACCESSIBLE_TABLE_CAPTION_CHANGED: string;
        get accessibleRole(): $AccessibleRole;
        get accessibleAction(): $AccessibleAction;
        get accessibleText(): $AccessibleText;
        get accessibleEditableText(): $AccessibleEditableText;
        get accessibleValue(): $AccessibleValue;
        get accessibleIcon(): $AccessibleIcon[];
        get accessibleRelationSet(): $AccessibleRelationSet;
        get accessibleTable(): $AccessibleTable;
        get accessibleSelection(): $AccessibleSelection;
        get accessibleIndexInParent(): number;
        get accessibleStateSet(): $AccessibleStateSet;
        get accessibleChildrenCount(): number;
        get accessibleComponent(): $AccessibleComponent;
        get locale(): $Locale;
    }
    export class $AccessibleBundle {
        toDisplayString(): string;
        toDisplayString(arg0: $Locale): string;
        constructor();
    }
    export class $AccessibleRole extends $AccessibleBundle {
        static DATE_EDITOR: $AccessibleRole;
        static PARAGRAPH: $AccessibleRole;
        static TEXT: $AccessibleRole;
        static ALERT: $AccessibleRole;
        static FONT_CHOOSER: $AccessibleRole;
        static GROUP_BOX: $AccessibleRole;
        static ROOT_PANE: $AccessibleRole;
        static TABLE: $AccessibleRole;
        static COMBO_BOX: $AccessibleRole;
        static SLIDER: $AccessibleRole;
        static PROGRESS_MONITOR: $AccessibleRole;
        static HYPERLINK: $AccessibleRole;
        static LABEL: $AccessibleRole;
        static PROGRESS_BAR: $AccessibleRole;
        static DESKTOP_ICON: $AccessibleRole;
        static SEPARATOR: $AccessibleRole;
        static MENU_ITEM: $AccessibleRole;
        static SCROLL_PANE: $AccessibleRole;
        static AWT_COMPONENT: $AccessibleRole;
        static MENU_BAR: $AccessibleRole;
        static PUSH_BUTTON: $AccessibleRole;
        static PAGE_TAB: $AccessibleRole;
        static CHECK_BOX: $AccessibleRole;
        static TREE: $AccessibleRole;
        static PASSWORD_TEXT: $AccessibleRole;
        static LIST: $AccessibleRole;
        static HTML_CONTAINER: $AccessibleRole;
        static OPTION_PANE: $AccessibleRole;
        static DESKTOP_PANE: $AccessibleRole;
        static HEADER: $AccessibleRole;
        static FRAME: $AccessibleRole;
        static TOOL_TIP: $AccessibleRole;
        static ROW_HEADER: $AccessibleRole;
        static SPIN_BOX: $AccessibleRole;
        static CANVAS: $AccessibleRole;
        static TOOL_BAR: $AccessibleRole;
        static INTERNAL_FRAME: $AccessibleRole;
        static LAYERED_PANE: $AccessibleRole;
        static PAGE_TAB_LIST: $AccessibleRole;
        static COLUMN_HEADER: $AccessibleRole;
        static ICON: $AccessibleRole;
        static COLOR_CHOOSER: $AccessibleRole;
        static VIEWPORT: $AccessibleRole;
        static PANEL: $AccessibleRole;
        static DIRECTORY_PANE: $AccessibleRole;
        static STATUS_BAR: $AccessibleRole;
        static DIALOG: $AccessibleRole;
        static SPLIT_PANE: $AccessibleRole;
        static GLASS_PANE: $AccessibleRole;
        static SWING_COMPONENT: $AccessibleRole;
        static FOOTER: $AccessibleRole;
        static EDITBAR: $AccessibleRole;
        static FILLER: $AccessibleRole;
        static WINDOW: $AccessibleRole;
        static FILE_CHOOSER: $AccessibleRole;
        static POPUP_MENU: $AccessibleRole;
        static SCROLL_BAR: $AccessibleRole;
        static LIST_ITEM: $AccessibleRole;
        static RADIO_BUTTON: $AccessibleRole;
        static MENU: $AccessibleRole;
        static UNKNOWN: $AccessibleRole;
        static RULER: $AccessibleRole;
        static TOGGLE_BUTTON: $AccessibleRole;
    }
    export class $AccessibleState extends $AccessibleBundle {
        static ACTIVE: $AccessibleState;
        static MANAGES_DESCENDANTS: $AccessibleState;
        static EDITABLE: $AccessibleState;
        static FOCUSED: $AccessibleState;
        static CHECKED: $AccessibleState;
        static VISIBLE: $AccessibleState;
        static PRESSED: $AccessibleState;
        static SINGLE_LINE: $AccessibleState;
        static VERTICAL: $AccessibleState;
        static COLLAPSED: $AccessibleState;
        static INDETERMINATE: $AccessibleState;
        static ARMED: $AccessibleState;
        static SHOWING: $AccessibleState;
        static FOCUSABLE: $AccessibleState;
        static BUSY: $AccessibleState;
        static EXPANDED: $AccessibleState;
        static MULTISELECTABLE: $AccessibleState;
        static ICONIFIED: $AccessibleState;
        static RESIZABLE: $AccessibleState;
        static SELECTABLE: $AccessibleState;
        static EXPANDABLE: $AccessibleState;
        static MODAL: $AccessibleState;
        static SELECTED: $AccessibleState;
        static TRUNCATED: $AccessibleState;
        static OPAQUE: $AccessibleState;
        static ENABLED: $AccessibleState;
        static HORIZONTAL: $AccessibleState;
        static TRANSIENT: $AccessibleState;
        static MULTI_LINE: $AccessibleState;
    }
}
