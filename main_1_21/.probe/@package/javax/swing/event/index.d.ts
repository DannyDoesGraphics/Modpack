import { $UndoableEdit } from "@package/javax/swing/undo";
import { $Element, $Document } from "@package/javax/swing/text";
import { $KeyEvent, $MouseEvent } from "@package/java/awt/event";
import { $AWTEvent, $Component, $Container } from "@package/java/awt";
import { $Object } from "@package/java/lang";
import { $EventObject, $EventListener } from "@package/java/util";
import { $MenuElement, $JComponent, $MenuSelectionManager } from "@package/javax/swing";

declare module "@package/javax/swing/event" {
    export class $MenuListener {
    }
    export interface $MenuListener extends $EventListener {
        menuSelected(arg0: $MenuEvent): void;
        menuDeselected(arg0: $MenuEvent): void;
        menuCanceled(arg0: $MenuEvent): void;
    }
    export class $MenuDragMouseListener {
    }
    export interface $MenuDragMouseListener extends $EventListener {
        menuDragMouseEntered(arg0: $MenuDragMouseEvent): void;
        menuDragMouseExited(arg0: $MenuDragMouseEvent): void;
        menuDragMouseDragged(arg0: $MenuDragMouseEvent): void;
        menuDragMouseReleased(arg0: $MenuDragMouseEvent): void;
    }
    export class $DocumentEvent$EventType {
        static REMOVE: $DocumentEvent$EventType;
        static INSERT: $DocumentEvent$EventType;
        static CHANGE: $DocumentEvent$EventType;
    }
    export class $MenuEvent extends $EventObject {
        constructor(arg0: $Object);
    }
    export class $UndoableEditEvent extends $EventObject {
        getEdit(): $UndoableEdit;
        constructor(arg0: $Object, arg1: $UndoableEdit);
        get edit(): $UndoableEdit;
    }
    export class $MenuKeyEvent extends $KeyEvent {
        getMenuSelectionManager(): $MenuSelectionManager;
        getPath(): $MenuElement[];
        static VK_UNDEFINED: number;
        static VK_QUOTEDBL: number;
        /**
         * @deprecated
         */
        static BUTTON1_MASK: number;
        static VK_BRACERIGHT: number;
        static INVOCATION_EVENT_MASK: number;
        static VK_COPY: number;
        static VK_LEFT_PARENTHESIS: number;
        static VK_NUMPAD3: number;
        static VK_NUMPAD4: number;
        static VK_NUMPAD5: number;
        static VK_NUMPAD6: number;
        static VK_HELP: number;
        static VK_NUMPAD0: number;
        static VK_NUMPAD1: number;
        static VK_NUMPAD2: number;
        static VK_RIGHT: number;
        static COMPONENT_SHOWN: number;
        static BUTTON3_DOWN_MASK: number;
        static VK_AMPERSAND: number;
        static VK_ALT_GRAPH: number;
        static VK_CANCEL: number;
        static COMPONENT_RESIZED: number;
        static VK_COLON: number;
        static MOUSE_EVENT_MASK: number;
        static VK_CIRCUMFLEX: number;
        static VK_CAPS_LOCK: number;
        static COMPONENT_HIDDEN: number;
        static VK_ALL_CANDIDATES: number;
        static VK_LESS: number;
        static VK_PLUS: number;
        static VK_WINDOWS: number;
        static KEY_RELEASED: number;
        static VK_KANA: number;
        static VK_ASTERISK: number;
        static COMPONENT_MOVED: number;
        static VK_DOLLAR: number;
        static ACTION_EVENT_MASK: number;
        static VK_PAUSE: number;
        static ITEM_EVENT_MASK: number;
        /**
         * @deprecated
         */
        static BUTTON3_MASK: number;
        static VK_FINAL: number;
        static VK_DEAD_SEMIVOICED_SOUND: number;
        static VK_PROPS: number;
        static VK_RIGHT_PARENTHESIS: number;
        static VK_BEGIN: number;
        static VK_DEAD_BREVE: number;
        static FOCUS_EVENT_MASK: number;
        static VK_DEAD_ABOVEDOT: number;
        static VK_CUT: number;
        static VK_BACK_QUOTE: number;
        static CONTAINER_EVENT_MASK: number;
        static VK_HOME: number;
        static VK_UNDO: number;
        static ALT_DOWN_MASK: number;
        static VK_ESCAPE: number;
        static VK_F9: number;
        static VK_F8: number;
        static VK_F7: number;
        static VK_F6: number;
        static VK_EXCLAMATION_MARK: number;
        static VK_F5: number;
        static VK_F4: number;
        static VK_F3: number;
        static VK_HALF_WIDTH: number;
        static VK_F2: number;
        static VK_F1: number;
        static VK_GREATER: number;
        static META_DOWN_MASK: number;
        static VK_KATAKANA: number;
        static VK_INVERTED_EXCLAMATION_MARK: number;
        static VK_UP: number;
        static VK_SLASH: number;
        static VK_CONVERT: number;
        static PAINT_EVENT_MASK: number;
        static VK_SUBTRACT: number;
        static HIERARCHY_BOUNDS_EVENT_MASK: number;
        static VK_CODE_INPUT: number;
        static VK_KP_UP: number;
        static VK_EURO_SIGN: number;
        static KEY_LAST: number;
        static VK_DIVIDE: number;
        /**
         * @deprecated
         */
        static CTRL_MASK: number;
        /**
         * @deprecated
         */
        static ALT_MASK: number;
        static COMPONENT_FIRST: number;
        static KEY_TYPED: number;
        static SHIFT_DOWN_MASK: number;
        static CTRL_DOWN_MASK: number;
        static VK_PAGE_UP: number;
        static VK_SEMICOLON: number;
        static ALT_GRAPH_DOWN_MASK: number;
        static VK_SEPARATOR: number;
        static VK_ADD: number;
        static WINDOW_STATE_EVENT_MASK: number;
        static KEY_PRESSED: number;
        /**
         * @deprecated
         */
        static META_MASK: number;
        static VK_2: number;
        static ADJUSTMENT_EVENT_MASK: number;
        static VK_3: number;
        static VK_4: number;
        static VK_5: number;
        static VK_6: number;
        static VK_ALPHANUMERIC: number;
        static VK_7: number;
        static VK_8: number;
        static VK_9: number;
        static VK_DEAD_DOUBLEACUTE: number;
        static VK_0: number;
        static VK_1: number;
        static VK_DEAD_CEDILLA: number;
        static VK_B: number;
        static VK_C: number;
        static VK_D: number;
        static VK_E: number;
        static VK_F: number;
        static VK_G: number;
        static VK_H: number;
        /**
         * @deprecated
         */
        static BUTTON2_MASK: number;
        static VK_I: number;
        static VK_OPEN_BRACKET: number;
        static VK_HIRAGANA: number;
        static MOUSE_MOTION_EVENT_MASK: number;
        static VK_A: number;
        static VK_JAPANESE_KATAKANA: number;
        static VK_NUM_LOCK: number;
        static VK_AT: number;
        static VK_UNDERSCORE: number;
        static VK_KP_DOWN: number;
        static VK_BACK_SPACE: number;
        static VK_CLEAR: number;
        static VK_DELETE: number;
        static VK_DEAD_VOICED_SOUND: number;
        static VK_MULTIPLY: number;
        static VK_SPACE: number;
        static VK_FULL_WIDTH: number;
        static VK_PAGE_DOWN: number;
        static VK_END: number;
        static CHAR_UNDEFINED: string;
        static KEY_LOCATION_LEFT: number;
        static VK_DOWN: number;
        /**
         * @deprecated
         */
        static SHIFT_MASK: number;
        static VK_DEAD_CIRCUMFLEX: number;
        static INPUT_METHOD_EVENT_MASK: number;
        static VK_EQUALS: number;
        static VK_JAPANESE_ROMAN: number;
        static VK_PERIOD: number;
        static VK_F12: number;
        static VK_F11: number;
        static VK_F14: number;
        static VK_F13: number;
        static VK_COMPOSE: number;
        static VK_DEAD_ACUTE: number;
        static VK_F10: number;
        static WINDOW_EVENT_MASK: number;
        static VK_DEAD_DIAERESIS: number;
        static VK_PRINTSCREEN: number;
        static WINDOW_FOCUS_EVENT_MASK: number;
        static VK_R: number;
        static VK_DEAD_ABOVERING: number;
        static VK_S: number;
        static VK_T: number;
        static VK_U: number;
        static VK_PREVIOUS_CANDIDATE: number;
        static VK_V: number;
        static VK_W: number;
        static VK_X: number;
        static VK_Y: number;
        static VK_J: number;
        static VK_K: number;
        static VK_F19: number;
        static VK_L: number;
        static VK_M: number;
        static VK_N: number;
        static VK_F16: number;
        static VK_O: number;
        static VK_F15: number;
        static VK_P: number;
        static VK_F18: number;
        static VK_Q: number;
        static VK_F17: number;
        static KEY_LOCATION_NUMPAD: number;
        static VK_F23: number;
        static KEY_FIRST: number;
        static VK_F22: number;
        static KEY_LOCATION_UNKNOWN: number;
        static VK_F24: number;
        static VK_DEAD_TILDE: number;
        static KEY_LOCATION_RIGHT: number;
        static VK_DEAD_GRAVE: number;
        static VK_F21: number;
        static VK_F20: number;
        static VK_CONTROL: number;
        static VK_Z: number;
        static VK_QUOTE: number;
        static VK_KANA_LOCK: number;
        static VK_KP_RIGHT: number;
        static VK_NUMBER_SIGN: number;
        static VK_KP_LEFT: number;
        static VK_ENTER: number;
        static RESERVED_ID_MAX: number;
        static VK_DEAD_OGONEK: number;
        static VK_CONTEXT_MENU: number;
        static VK_KANJI: number;
        static VK_NONCONVERT: number;
        static MOUSE_WHEEL_EVENT_MASK: number;
        static BUTTON1_DOWN_MASK: number;
        static VK_COMMA: number;
        static VK_DECIMAL: number;
        static VK_FIND: number;
        static VK_DEAD_IOTA: number;
        static TEXT_EVENT_MASK: number;
        static VK_SHIFT: number;
        static VK_MODECHANGE: number;
        static VK_BACK_SLASH: number;
        static VK_ROMAN_CHARACTERS: number;
        static COMPONENT_EVENT_MASK: number;
        static VK_DEAD_MACRON: number;
        static COMPONENT_LAST: number;
        static VK_SEPARATER: number;
        /**
         * @deprecated
         */
        static ALT_GRAPH_MASK: number;
        static KEY_EVENT_MASK: number;
        static VK_MINUS: number;
        static VK_SCROLL_LOCK: number;
        static VK_PASTE: number;
        static KEY_LOCATION_STANDARD: number;
        static VK_NUMPAD7: number;
        static VK_AGAIN: number;
        static VK_NUMPAD8: number;
        static VK_NUMPAD9: number;
        static VK_LEFT: number;
        static VK_DEAD_CARON: number;
        static VK_TAB: number;
        static VK_INPUT_METHOD_ON_OFF: number;
        static VK_CLOSE_BRACKET: number;
        static VK_INSERT: number;
        static BUTTON2_DOWN_MASK: number;
        static VK_ALT: number;
        static VK_ACCEPT: number;
        static VK_JAPANESE_HIRAGANA: number;
        static VK_STOP: number;
        static HIERARCHY_EVENT_MASK: number;
        static VK_META: number;
        static VK_BRACELEFT: number;
        constructor(arg0: $Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: string, arg6: $MenuElement[], arg7: $MenuSelectionManager);
        get menuSelectionManager(): $MenuSelectionManager;
        get path(): $MenuElement[];
    }
    export class $MenuDragMouseEvent extends $MouseEvent {
        getMenuSelectionManager(): $MenuSelectionManager;
        getPath(): $MenuElement[];
        static ADJUSTMENT_EVENT_MASK: number;
        static MOUSE_FIRST: number;
        /**
         * @deprecated
         */
        static BUTTON1_MASK: number;
        static MOUSE_PRESSED: number;
        static FOCUS_EVENT_MASK: number;
        static INVOCATION_EVENT_MASK: number;
        static RESERVED_ID_MAX: number;
        static BUTTON1: number;
        /**
         * @deprecated
         */
        static BUTTON2_MASK: number;
        static CONTAINER_EVENT_MASK: number;
        static MOUSE_WHEEL_EVENT_MASK: number;
        static ALT_DOWN_MASK: number;
        static MOUSE_MOTION_EVENT_MASK: number;
        static BUTTON1_DOWN_MASK: number;
        static COMPONENT_SHOWN: number;
        static MOUSE_LAST: number;
        static META_DOWN_MASK: number;
        static BUTTON3_DOWN_MASK: number;
        static TEXT_EVENT_MASK: number;
        static NOBUTTON: number;
        static COMPONENT_RESIZED: number;
        static MOUSE_EVENT_MASK: number;
        static MOUSE_WHEEL: number;
        static COMPONENT_EVENT_MASK: number;
        static PAINT_EVENT_MASK: number;
        /**
         * @deprecated
         */
        static SHIFT_MASK: number;
        static COMPONENT_HIDDEN: number;
        static INPUT_METHOD_EVENT_MASK: number;
        static HIERARCHY_BOUNDS_EVENT_MASK: number;
        static COMPONENT_LAST: number;
        /**
         * @deprecated
         */
        static ALT_GRAPH_MASK: number;
        static KEY_EVENT_MASK: number;
        static WINDOW_EVENT_MASK: number;
        static MOUSE_EXITED: number;
        /**
         * @deprecated
         */
        static CTRL_MASK: number;
        /**
         * @deprecated
         */
        static ALT_MASK: number;
        static MOUSE_CLICKED: number;
        static COMPONENT_FIRST: number;
        static WINDOW_FOCUS_EVENT_MASK: number;
        static MOUSE_MOVED: number;
        static COMPONENT_MOVED: number;
        static SHIFT_DOWN_MASK: number;
        static CTRL_DOWN_MASK: number;
        static BUTTON2: number;
        static BUTTON3: number;
        static BUTTON2_DOWN_MASK: number;
        static ALT_GRAPH_DOWN_MASK: number;
        static ACTION_EVENT_MASK: number;
        static ITEM_EVENT_MASK: number;
        static MOUSE_RELEASED: number;
        /**
         * @deprecated
         */
        static BUTTON3_MASK: number;
        static HIERARCHY_EVENT_MASK: number;
        static WINDOW_STATE_EVENT_MASK: number;
        /**
         * @deprecated
         */
        static META_MASK: number;
        static MOUSE_ENTERED: number;
        static MOUSE_DRAGGED: number;
        constructor(arg0: $Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $MenuElement[], arg9: $MenuSelectionManager);
        constructor(arg0: $Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: $MenuElement[], arg11: $MenuSelectionManager);
        get menuSelectionManager(): $MenuSelectionManager;
        get path(): $MenuElement[];
    }
    export class $ListSelectionEvent extends $EventObject {
        getFirstIndex(): number;
        getLastIndex(): number;
        getValueIsAdjusting(): boolean;
        constructor(arg0: $Object, arg1: number, arg2: number, arg3: boolean);
        get firstIndex(): number;
        get lastIndex(): number;
        get valueIsAdjusting(): boolean;
    }
    export class $DocumentEvent$ElementChange {
    }
    export interface $DocumentEvent$ElementChange {
        getChildrenRemoved(): $Element[];
        getChildrenAdded(): $Element[];
        getIndex(): number;
        getElement(): $Element;
        get childrenRemoved(): $Element[];
        get childrenAdded(): $Element[];
        get index(): number;
        get element(): $Element;
    }
    export class $DocumentEvent {
    }
    export interface $DocumentEvent {
        getChange(arg0: $Element): $DocumentEvent$ElementChange;
        getDocument(): $Document;
        getLength(): number;
        getType(): $DocumentEvent$EventType;
        getOffset(): number;
        get document(): $Document;
        get length(): number;
        get type(): $DocumentEvent$EventType;
        get offset(): number;
    }
    export class $UndoableEditListener {
    }
    export interface $UndoableEditListener extends $EventListener {
        undoableEditHappened(arg0: $UndoableEditEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $UndoableEditListener}.
     */
    export type $UndoableEditListener_ = ((arg0: $UndoableEditEvent) => void);
    export class $ChangeListener {
    }
    export interface $ChangeListener extends $EventListener {
        stateChanged(arg0: $ChangeEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $ChangeListener}.
     */
    export type $ChangeListener_ = ((arg0: $ChangeEvent) => void);
    export class $ListSelectionListener {
    }
    export interface $ListSelectionListener extends $EventListener {
        valueChanged(arg0: $ListSelectionEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $ListSelectionListener}.
     */
    export type $ListSelectionListener_ = ((arg0: $ListSelectionEvent) => void);
    export class $MenuKeyListener {
    }
    export interface $MenuKeyListener extends $EventListener {
        menuKeyPressed(arg0: $MenuKeyEvent): void;
        menuKeyReleased(arg0: $MenuKeyEvent): void;
        menuKeyTyped(arg0: $MenuKeyEvent): void;
    }
    export class $AncestorListener {
    }
    export interface $AncestorListener extends $EventListener {
        ancestorAdded(arg0: $AncestorEvent): void;
        ancestorRemoved(arg0: $AncestorEvent): void;
        ancestorMoved(arg0: $AncestorEvent): void;
    }
    export class $AncestorEvent extends $AWTEvent {
        getAncestorParent(): $Container;
        getComponent(): $JComponent;
        getAncestor(): $Container;
        static ADJUSTMENT_EVENT_MASK: number;
        static MOUSE_EVENT_MASK: number;
        static COMPONENT_EVENT_MASK: number;
        static PAINT_EVENT_MASK: number;
        static INPUT_METHOD_EVENT_MASK: number;
        static HIERARCHY_BOUNDS_EVENT_MASK: number;
        static FOCUS_EVENT_MASK: number;
        static TEXT_EVENT_MASK: number;
        static INVOCATION_EVENT_MASK: number;
        static KEY_EVENT_MASK: number;
        static RESERVED_ID_MAX: number;
        static ACTION_EVENT_MASK: number;
        static ITEM_EVENT_MASK: number;
        static CONTAINER_EVENT_MASK: number;
        static WINDOW_EVENT_MASK: number;
        static HIERARCHY_EVENT_MASK: number;
        static ANCESTOR_ADDED: number;
        static ANCESTOR_MOVED: number;
        static WINDOW_STATE_EVENT_MASK: number;
        static ANCESTOR_REMOVED: number;
        static MOUSE_WHEEL_EVENT_MASK: number;
        static MOUSE_MOTION_EVENT_MASK: number;
        static WINDOW_FOCUS_EVENT_MASK: number;
        constructor(arg0: $JComponent, arg1: number, arg2: $Container, arg3: $Container);
        get ancestorParent(): $Container;
        get component(): $JComponent;
        get ancestor(): $Container;
    }
    export class $PopupMenuEvent extends $EventObject {
        constructor(arg0: $Object);
    }
    export class $ListDataEvent extends $EventObject {
        getIndex0(): number;
        getIndex1(): number;
        getType(): number;
        static INTERVAL_ADDED: number;
        static CONTENTS_CHANGED: number;
        static INTERVAL_REMOVED: number;
        constructor(arg0: $Object, arg1: number, arg2: number, arg3: number);
        get index0(): number;
        get index1(): number;
        get type(): number;
    }
    export class $CaretEvent extends $EventObject {
        getMark(): number;
        getDot(): number;
        constructor(arg0: $Object);
        get mark(): number;
        get dot(): number;
    }
    export class $CaretListener {
    }
    export interface $CaretListener extends $EventListener {
        caretUpdate(arg0: $CaretEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $CaretListener}.
     */
    export type $CaretListener_ = ((arg0: $CaretEvent) => void);
    export class $ListDataListener {
    }
    export interface $ListDataListener extends $EventListener {
        intervalAdded(arg0: $ListDataEvent): void;
        intervalRemoved(arg0: $ListDataEvent): void;
        contentsChanged(arg0: $ListDataEvent): void;
    }
    export class $ChangeEvent extends $EventObject {
        constructor(arg0: $Object);
    }
    export class $PopupMenuListener {
    }
    export interface $PopupMenuListener extends $EventListener {
        popupMenuWillBecomeVisible(arg0: $PopupMenuEvent): void;
        popupMenuWillBecomeInvisible(arg0: $PopupMenuEvent): void;
        popupMenuCanceled(arg0: $PopupMenuEvent): void;
    }
    export class $DocumentListener {
    }
    export interface $DocumentListener extends $EventListener {
        insertUpdate(arg0: $DocumentEvent): void;
        removeUpdate(arg0: $DocumentEvent): void;
        changedUpdate(arg0: $DocumentEvent): void;
    }
}
