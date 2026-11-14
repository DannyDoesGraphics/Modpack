import { $AttributedCharacterIterator } from "@package/java/text";
import { $TextHitInfo } from "@package/java/awt/font";
import { $Point, $AWTEvent, $Adjustable, $Component, $Container, $Window } from "@package/java/awt";
import { $EventListener } from "@package/java/util";
import { $Enum, $Object } from "@package/java/lang";

declare module "@package/java/awt/event" {
    export class $InputMethodListener {
    }
    export interface $InputMethodListener extends $EventListener {
        inputMethodTextChanged(arg0: $InputMethodEvent): void;
        caretPositionChanged(arg0: $InputMethodEvent): void;
    }
    export class $InputEvent extends $ComponentEvent {
        isAltDown(): boolean;
        isControlDown(): boolean;
        static getModifiersExText(arg0: number): string;
        isMetaDown(): boolean;
        isAltGraphDown(): boolean;
        isShiftDown(): boolean;
        getWhen(): number;
        getModifiersEx(): number;
        static getMaskForButton(arg0: number): number;
        isConsumed(): boolean;
        /**
         * @deprecated
         */
        getModifiers(): number;
        consume(): void;
        static ADJUSTMENT_EVENT_MASK: number;
        static MOUSE_EVENT_MASK: number;
        /**
         * @deprecated
         */
        static BUTTON1_MASK: number;
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
        static FOCUS_EVENT_MASK: number;
        static INVOCATION_EVENT_MASK: number;
        /**
         * @deprecated
         */
        static ALT_GRAPH_MASK: number;
        static KEY_EVENT_MASK: number;
        static RESERVED_ID_MAX: number;
        /**
         * @deprecated
         */
        static BUTTON2_MASK: number;
        static CONTAINER_EVENT_MASK: number;
        static WINDOW_EVENT_MASK: number;
        /**
         * @deprecated
         */
        static CTRL_MASK: number;
        /**
         * @deprecated
         */
        static ALT_MASK: number;
        static MOUSE_WHEEL_EVENT_MASK: number;
        static ALT_DOWN_MASK: number;
        static MOUSE_MOTION_EVENT_MASK: number;
        static COMPONENT_FIRST: number;
        static BUTTON1_DOWN_MASK: number;
        static WINDOW_FOCUS_EVENT_MASK: number;
        static COMPONENT_MOVED: number;
        static COMPONENT_SHOWN: number;
        static META_DOWN_MASK: number;
        static BUTTON3_DOWN_MASK: number;
        static SHIFT_DOWN_MASK: number;
        static CTRL_DOWN_MASK: number;
        static TEXT_EVENT_MASK: number;
        static BUTTON2_DOWN_MASK: number;
        static ALT_GRAPH_DOWN_MASK: number;
        static ACTION_EVENT_MASK: number;
        static ITEM_EVENT_MASK: number;
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
        static COMPONENT_RESIZED: number;
        get altDown(): boolean;
        get controlDown(): boolean;
        get metaDown(): boolean;
        get altGraphDown(): boolean;
        get shiftDown(): boolean;
        get when(): number;
        get modifiersEx(): number;
        get consumed(): boolean;
        get modifiers(): number;
    }
    export class $InputMethodEvent extends $AWTEvent {
        getWhen(): number;
        getCommittedCharacterCount(): number;
        getCaret(): $TextHitInfo;
        getVisiblePosition(): $TextHitInfo;
        isConsumed(): boolean;
        getText(): $AttributedCharacterIterator;
        consume(): void;
        static ADJUSTMENT_EVENT_MASK: number;
        static MOUSE_EVENT_MASK: number;
        static CARET_POSITION_CHANGED: number;
        static COMPONENT_EVENT_MASK: number;
        static PAINT_EVENT_MASK: number;
        static INPUT_METHOD_EVENT_MASK: number;
        static HIERARCHY_BOUNDS_EVENT_MASK: number;
        static INPUT_METHOD_TEXT_CHANGED: number;
        static FOCUS_EVENT_MASK: number;
        static INPUT_METHOD_LAST: number;
        static TEXT_EVENT_MASK: number;
        static INVOCATION_EVENT_MASK: number;
        static KEY_EVENT_MASK: number;
        static RESERVED_ID_MAX: number;
        static ACTION_EVENT_MASK: number;
        static ITEM_EVENT_MASK: number;
        static CONTAINER_EVENT_MASK: number;
        static WINDOW_EVENT_MASK: number;
        static HIERARCHY_EVENT_MASK: number;
        static WINDOW_STATE_EVENT_MASK: number;
        static MOUSE_WHEEL_EVENT_MASK: number;
        static MOUSE_MOTION_EVENT_MASK: number;
        static INPUT_METHOD_FIRST: number;
        static WINDOW_FOCUS_EVENT_MASK: number;
        constructor(arg0: $Component, arg1: number, arg2: number, arg3: $AttributedCharacterIterator, arg4: number, arg5: $TextHitInfo, arg6: $TextHitInfo);
        constructor(arg0: $Component, arg1: number, arg2: $AttributedCharacterIterator, arg3: number, arg4: $TextHitInfo, arg5: $TextHitInfo);
        constructor(arg0: $Component, arg1: number, arg2: $TextHitInfo, arg3: $TextHitInfo);
        get when(): number;
        get committedCharacterCount(): number;
        get caret(): $TextHitInfo;
        get visiblePosition(): $TextHitInfo;
        get consumed(): boolean;
        get text(): $AttributedCharacterIterator;
    }
    export class $WindowFocusListener {
    }
    export interface $WindowFocusListener extends $EventListener {
        windowGainedFocus(arg0: $WindowEvent): void;
        windowLostFocus(arg0: $WindowEvent): void;
    }
    export class $MouseEvent extends $InputEvent {
        static getMouseModifiersText(arg0: number): string;
        getPoint(): $Point;
        translatePoint(arg0: number, arg1: number): void;
        getLocationOnScreen(): $Point;
        getXOnScreen(): number;
        getYOnScreen(): number;
        getClickCount(): number;
        isPopupTrigger(): boolean;
        getY(): number;
        getX(): number;
        getButton(): number;
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
        constructor(arg0: $Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number);
        constructor(arg0: $Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number);
        constructor(arg0: $Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean);
        get point(): $Point;
        get locationOnScreen(): $Point;
        get XOnScreen(): number;
        get YOnScreen(): number;
        get clickCount(): number;
        get popupTrigger(): boolean;
        get y(): number;
        get x(): number;
        get button(): number;
    }
    export class $WindowEvent extends $ComponentEvent {
        getNewState(): number;
        getOppositeWindow(): $Window;
        getOldState(): number;
        getWindow(): $Window;
        static ADJUSTMENT_EVENT_MASK: number;
        static MOUSE_EVENT_MASK: number;
        static WINDOW_CLOSED: number;
        static COMPONENT_EVENT_MASK: number;
        static PAINT_EVENT_MASK: number;
        static COMPONENT_HIDDEN: number;
        static INPUT_METHOD_EVENT_MASK: number;
        static HIERARCHY_BOUNDS_EVENT_MASK: number;
        static COMPONENT_LAST: number;
        static FOCUS_EVENT_MASK: number;
        static WINDOW_ICONIFIED: number;
        static WINDOW_GAINED_FOCUS: number;
        static WINDOW_DEICONIFIED: number;
        static INVOCATION_EVENT_MASK: number;
        static WINDOW_CLOSING: number;
        static KEY_EVENT_MASK: number;
        static RESERVED_ID_MAX: number;
        static WINDOW_OPENED: number;
        static CONTAINER_EVENT_MASK: number;
        static WINDOW_EVENT_MASK: number;
        static WINDOW_LOST_FOCUS: number;
        static MOUSE_WHEEL_EVENT_MASK: number;
        static MOUSE_MOTION_EVENT_MASK: number;
        static COMPONENT_FIRST: number;
        static WINDOW_FOCUS_EVENT_MASK: number;
        static COMPONENT_MOVED: number;
        static WINDOW_STATE_CHANGED: number;
        static COMPONENT_SHOWN: number;
        static TEXT_EVENT_MASK: number;
        static WINDOW_ACTIVATED: number;
        static WINDOW_DEACTIVATED: number;
        static ACTION_EVENT_MASK: number;
        static WINDOW_LAST: number;
        static ITEM_EVENT_MASK: number;
        static WINDOW_FIRST: number;
        static HIERARCHY_EVENT_MASK: number;
        static WINDOW_STATE_EVENT_MASK: number;
        static COMPONENT_RESIZED: number;
        constructor(arg0: $Window, arg1: number, arg2: $Window, arg3: number, arg4: number);
        constructor(arg0: $Window, arg1: number);
        constructor(arg0: $Window, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Window, arg1: number, arg2: $Window);
        get newState(): number;
        get oppositeWindow(): $Window;
        get oldState(): number;
        get window(): $Window;
    }
    export class $MouseMotionListener {
    }
    export interface $MouseMotionListener extends $EventListener {
        mouseDragged(arg0: $MouseEvent): void;
        mouseMoved(arg0: $MouseEvent): void;
    }
    export class $MouseListener {
    }
    export interface $MouseListener extends $EventListener {
        mousePressed(arg0: $MouseEvent): void;
        mouseExited(arg0: $MouseEvent): void;
        mouseEntered(arg0: $MouseEvent): void;
        mouseClicked(arg0: $MouseEvent): void;
        mouseReleased(arg0: $MouseEvent): void;
    }
    export class $KeyListener {
    }
    export interface $KeyListener extends $EventListener {
        keyTyped(arg0: $KeyEvent): void;
        keyPressed(arg0: $KeyEvent): void;
        keyReleased(arg0: $KeyEvent): void;
    }
    export class $AdjustmentListener {
    }
    export interface $AdjustmentListener extends $EventListener {
        adjustmentValueChanged(arg0: $AdjustmentEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $AdjustmentListener}.
     */
    export type $AdjustmentListener_ = ((arg0: $AdjustmentEvent) => void);
    export class $WindowListener {
    }
    export interface $WindowListener extends $EventListener {
        windowOpened(arg0: $WindowEvent): void;
        windowClosed(arg0: $WindowEvent): void;
        windowIconified(arg0: $WindowEvent): void;
        windowDeiconified(arg0: $WindowEvent): void;
        windowActivated(arg0: $WindowEvent): void;
        windowDeactivated(arg0: $WindowEvent): void;
        windowClosing(arg0: $WindowEvent): void;
    }
    export class $ComponentEvent extends $AWTEvent {
        getComponent(): $Component;
        static ADJUSTMENT_EVENT_MASK: number;
        static MOUSE_EVENT_MASK: number;
        static COMPONENT_EVENT_MASK: number;
        static PAINT_EVENT_MASK: number;
        static COMPONENT_HIDDEN: number;
        static INPUT_METHOD_EVENT_MASK: number;
        static HIERARCHY_BOUNDS_EVENT_MASK: number;
        static COMPONENT_LAST: number;
        static FOCUS_EVENT_MASK: number;
        static INVOCATION_EVENT_MASK: number;
        static KEY_EVENT_MASK: number;
        static RESERVED_ID_MAX: number;
        static CONTAINER_EVENT_MASK: number;
        static WINDOW_EVENT_MASK: number;
        static MOUSE_WHEEL_EVENT_MASK: number;
        static MOUSE_MOTION_EVENT_MASK: number;
        static COMPONENT_FIRST: number;
        static WINDOW_FOCUS_EVENT_MASK: number;
        static COMPONENT_MOVED: number;
        static COMPONENT_SHOWN: number;
        static TEXT_EVENT_MASK: number;
        static ACTION_EVENT_MASK: number;
        static ITEM_EVENT_MASK: number;
        static HIERARCHY_EVENT_MASK: number;
        static WINDOW_STATE_EVENT_MASK: number;
        static COMPONENT_RESIZED: number;
        constructor(arg0: $Component, arg1: number);
        get component(): $Component;
    }
    export class $ContainerEvent extends $ComponentEvent {
        getContainer(): $Container;
        getChild(): $Component;
        static ADJUSTMENT_EVENT_MASK: number;
        static MOUSE_EVENT_MASK: number;
        static COMPONENT_EVENT_MASK: number;
        static PAINT_EVENT_MASK: number;
        static CONTAINER_FIRST: number;
        static COMPONENT_HIDDEN: number;
        static INPUT_METHOD_EVENT_MASK: number;
        static HIERARCHY_BOUNDS_EVENT_MASK: number;
        static COMPONENT_LAST: number;
        static FOCUS_EVENT_MASK: number;
        static INVOCATION_EVENT_MASK: number;
        static KEY_EVENT_MASK: number;
        static RESERVED_ID_MAX: number;
        static CONTAINER_EVENT_MASK: number;
        static WINDOW_EVENT_MASK: number;
        static COMPONENT_ADDED: number;
        static MOUSE_WHEEL_EVENT_MASK: number;
        static MOUSE_MOTION_EVENT_MASK: number;
        static COMPONENT_FIRST: number;
        static WINDOW_FOCUS_EVENT_MASK: number;
        static COMPONENT_REMOVED: number;
        static COMPONENT_MOVED: number;
        static COMPONENT_SHOWN: number;
        static TEXT_EVENT_MASK: number;
        static CONTAINER_LAST: number;
        static ACTION_EVENT_MASK: number;
        static ITEM_EVENT_MASK: number;
        static HIERARCHY_EVENT_MASK: number;
        static WINDOW_STATE_EVENT_MASK: number;
        static COMPONENT_RESIZED: number;
        constructor(arg0: $Component, arg1: number, arg2: $Component);
        get container(): $Container;
        get child(): $Component;
    }
    export class $ComponentListener {
    }
    export interface $ComponentListener extends $EventListener {
        componentResized(arg0: $ComponentEvent): void;
        componentMoved(arg0: $ComponentEvent): void;
        componentShown(arg0: $ComponentEvent): void;
        componentHidden(arg0: $ComponentEvent): void;
    }
    export class $HierarchyBoundsListener {
    }
    export interface $HierarchyBoundsListener extends $EventListener {
        ancestorMoved(arg0: $HierarchyEvent): void;
        ancestorResized(arg0: $HierarchyEvent): void;
    }
    export class $FocusEvent$Cause extends $Enum<$FocusEvent$Cause> {
        static values(): $FocusEvent$Cause[];
        static valueOf(arg0: string): $FocusEvent$Cause;
        static UNEXPECTED: $FocusEvent$Cause;
        static CLEAR_GLOBAL_FOCUS_OWNER: $FocusEvent$Cause;
        static ACTIVATION: $FocusEvent$Cause;
        static TRAVERSAL: $FocusEvent$Cause;
        static TRAVERSAL_UP: $FocusEvent$Cause;
        static TRAVERSAL_FORWARD: $FocusEvent$Cause;
        static TRAVERSAL_DOWN: $FocusEvent$Cause;
        static TRAVERSAL_BACKWARD: $FocusEvent$Cause;
        static UNKNOWN: $FocusEvent$Cause;
        static MOUSE_EVENT: $FocusEvent$Cause;
        static ROLLBACK: $FocusEvent$Cause;
    }
    /**
     * Values that may be interpreted as {@link $FocusEvent$Cause}.
     */
    export type $FocusEvent$Cause_ = "unknown" | "mouse_event" | "traversal" | "traversal_up" | "traversal_down" | "traversal_forward" | "traversal_backward" | "rollback" | "unexpected" | "activation" | "clear_global_focus_owner";
    export class $KeyEvent extends $InputEvent {
        static getKeyText(arg0: number): string;
        isActionKey(): boolean;
        /**
         * @deprecated
         */
        static getKeyModifiersText(arg0: number): string;
        static getExtendedKeyCodeForChar(arg0: number): number;
        setKeyCode(arg0: number): void;
        getKeyLocation(): number;
        setKeyChar(arg0: string): void;
        getKeyChar(): string;
        getExtendedKeyCode(): number;
        /**
         * @deprecated
         */
        setModifiers(arg0: number): void;
        getKeyCode(): number;
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
        constructor(arg0: $Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: string, arg6: number);
        /**
         * @deprecated
         */
        constructor(arg0: $Component, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: string);
        get actionKey(): boolean;
        get keyLocation(): number;
        get extendedKeyCode(): number;
        set modifiers(value: number);
    }
    export class $WindowStateListener {
    }
    export interface $WindowStateListener extends $EventListener {
        windowStateChanged(arg0: $WindowEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $WindowStateListener}.
     */
    export type $WindowStateListener_ = ((arg0: $WindowEvent) => void);
    export class $MouseWheelListener {
    }
    export interface $MouseWheelListener extends $EventListener {
        mouseWheelMoved(arg0: $MouseWheelEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $MouseWheelListener}.
     */
    export type $MouseWheelListener_ = ((arg0: $MouseWheelEvent) => void);
    export class $ActionListener {
    }
    export interface $ActionListener extends $EventListener {
        actionPerformed(arg0: $ActionEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $ActionListener}.
     */
    export type $ActionListener_ = ((arg0: $ActionEvent) => void);
    export class $AdjustmentEvent extends $AWTEvent {
        getAdjustmentType(): number;
        getValueIsAdjusting(): boolean;
        getAdjustable(): $Adjustable;
        getValue(): number;
        static ADJUSTMENT_EVENT_MASK: number;
        static MOUSE_EVENT_MASK: number;
        static COMPONENT_EVENT_MASK: number;
        static PAINT_EVENT_MASK: number;
        static INPUT_METHOD_EVENT_MASK: number;
        static HIERARCHY_BOUNDS_EVENT_MASK: number;
        static FOCUS_EVENT_MASK: number;
        static INVOCATION_EVENT_MASK: number;
        static KEY_EVENT_MASK: number;
        static RESERVED_ID_MAX: number;
        static UNIT_INCREMENT: number;
        static CONTAINER_EVENT_MASK: number;
        static WINDOW_EVENT_MASK: number;
        static MOUSE_WHEEL_EVENT_MASK: number;
        static MOUSE_MOTION_EVENT_MASK: number;
        static ADJUSTMENT_VALUE_CHANGED: number;
        static WINDOW_FOCUS_EVENT_MASK: number;
        static ADJUSTMENT_FIRST: number;
        static BLOCK_INCREMENT: number;
        static TEXT_EVENT_MASK: number;
        static TRACK: number;
        static ADJUSTMENT_LAST: number;
        static BLOCK_DECREMENT: number;
        static ACTION_EVENT_MASK: number;
        static ITEM_EVENT_MASK: number;
        static UNIT_DECREMENT: number;
        static HIERARCHY_EVENT_MASK: number;
        static WINDOW_STATE_EVENT_MASK: number;
        constructor(arg0: $Adjustable, arg1: number, arg2: number, arg3: number, arg4: boolean);
        constructor(arg0: $Adjustable, arg1: number, arg2: number, arg3: number);
        get adjustmentType(): number;
        get valueIsAdjusting(): boolean;
        get adjustable(): $Adjustable;
        get value(): number;
    }
    export class $HierarchyListener {
    }
    export interface $HierarchyListener extends $EventListener {
        hierarchyChanged(arg0: $HierarchyEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $HierarchyListener}.
     */
    export type $HierarchyListener_ = ((arg0: $HierarchyEvent) => void);
    export class $HierarchyEvent extends $AWTEvent {
        getChanged(): $Component;
        getChangedParent(): $Container;
        getChangeFlags(): number;
        getComponent(): $Component;
        static ADJUSTMENT_EVENT_MASK: number;
        static MOUSE_EVENT_MASK: number;
        static HIERARCHY_FIRST: number;
        static HIERARCHY_CHANGED: number;
        static COMPONENT_EVENT_MASK: number;
        static PAINT_EVENT_MASK: number;
        static INPUT_METHOD_EVENT_MASK: number;
        static HIERARCHY_BOUNDS_EVENT_MASK: number;
        static FOCUS_EVENT_MASK: number;
        static INVOCATION_EVENT_MASK: number;
        static KEY_EVENT_MASK: number;
        static RESERVED_ID_MAX: number;
        static CONTAINER_EVENT_MASK: number;
        static WINDOW_EVENT_MASK: number;
        static MOUSE_WHEEL_EVENT_MASK: number;
        static MOUSE_MOTION_EVENT_MASK: number;
        static ANCESTOR_RESIZED: number;
        static HIERARCHY_LAST: number;
        static WINDOW_FOCUS_EVENT_MASK: number;
        static PARENT_CHANGED: number;
        static TEXT_EVENT_MASK: number;
        static SHOWING_CHANGED: number;
        static ACTION_EVENT_MASK: number;
        static ITEM_EVENT_MASK: number;
        static HIERARCHY_EVENT_MASK: number;
        static ANCESTOR_MOVED: number;
        static WINDOW_STATE_EVENT_MASK: number;
        static DISPLAYABILITY_CHANGED: number;
        constructor(arg0: $Component, arg1: number, arg2: $Component, arg3: $Container);
        constructor(arg0: $Component, arg1: number, arg2: $Component, arg3: $Container, arg4: number);
        get changed(): $Component;
        get changedParent(): $Container;
        get changeFlags(): number;
        get component(): $Component;
    }
    export class $AWTEventListener {
    }
    export interface $AWTEventListener extends $EventListener {
        eventDispatched(arg0: $AWTEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $AWTEventListener}.
     */
    export type $AWTEventListener_ = ((arg0: $AWTEvent) => void);
    export class $ActionEvent extends $AWTEvent {
        getActionCommand(): string;
        getWhen(): number;
        getModifiers(): number;
        static ADJUSTMENT_EVENT_MASK: number;
        static MOUSE_EVENT_MASK: number;
        static COMPONENT_EVENT_MASK: number;
        static PAINT_EVENT_MASK: number;
        static SHIFT_MASK: number;
        static ACTION_LAST: number;
        static INPUT_METHOD_EVENT_MASK: number;
        static HIERARCHY_BOUNDS_EVENT_MASK: number;
        static ACTION_FIRST: number;
        static FOCUS_EVENT_MASK: number;
        static INVOCATION_EVENT_MASK: number;
        static KEY_EVENT_MASK: number;
        static RESERVED_ID_MAX: number;
        static CONTAINER_EVENT_MASK: number;
        static WINDOW_EVENT_MASK: number;
        static CTRL_MASK: number;
        static ALT_MASK: number;
        static MOUSE_WHEEL_EVENT_MASK: number;
        static MOUSE_MOTION_EVENT_MASK: number;
        static WINDOW_FOCUS_EVENT_MASK: number;
        static TEXT_EVENT_MASK: number;
        static ACTION_EVENT_MASK: number;
        static ITEM_EVENT_MASK: number;
        static ACTION_PERFORMED: number;
        static HIERARCHY_EVENT_MASK: number;
        static WINDOW_STATE_EVENT_MASK: number;
        static META_MASK: number;
        constructor(arg0: $Object, arg1: number, arg2: string);
        constructor(arg0: $Object, arg1: number, arg2: string, arg3: number, arg4: number);
        constructor(arg0: $Object, arg1: number, arg2: string, arg3: number);
        get actionCommand(): string;
        get when(): number;
        get modifiers(): number;
    }
    export class $FocusEvent extends $ComponentEvent {
        getOppositeComponent(): $Component;
        isTemporary(): boolean;
        getCause(): $FocusEvent$Cause;
        static ADJUSTMENT_EVENT_MASK: number;
        static MOUSE_EVENT_MASK: number;
        static COMPONENT_EVENT_MASK: number;
        static PAINT_EVENT_MASK: number;
        static COMPONENT_HIDDEN: number;
        static INPUT_METHOD_EVENT_MASK: number;
        static HIERARCHY_BOUNDS_EVENT_MASK: number;
        static COMPONENT_LAST: number;
        static FOCUS_EVENT_MASK: number;
        static INVOCATION_EVENT_MASK: number;
        static KEY_EVENT_MASK: number;
        static RESERVED_ID_MAX: number;
        static FOCUS_FIRST: number;
        static CONTAINER_EVENT_MASK: number;
        static WINDOW_EVENT_MASK: number;
        static MOUSE_WHEEL_EVENT_MASK: number;
        static MOUSE_MOTION_EVENT_MASK: number;
        static COMPONENT_FIRST: number;
        static FOCUS_LOST: number;
        static WINDOW_FOCUS_EVENT_MASK: number;
        static FOCUS_GAINED: number;
        static COMPONENT_MOVED: number;
        static COMPONENT_SHOWN: number;
        static FOCUS_LAST: number;
        static TEXT_EVENT_MASK: number;
        static ACTION_EVENT_MASK: number;
        static ITEM_EVENT_MASK: number;
        static HIERARCHY_EVENT_MASK: number;
        static WINDOW_STATE_EVENT_MASK: number;
        static COMPONENT_RESIZED: number;
        constructor(arg0: $Component, arg1: number);
        constructor(arg0: $Component, arg1: number, arg2: boolean, arg3: $Component);
        constructor(arg0: $Component, arg1: number, arg2: boolean);
        constructor(arg0: $Component, arg1: number, arg2: boolean, arg3: $Component, arg4: $FocusEvent$Cause_);
        get oppositeComponent(): $Component;
        get temporary(): boolean;
        get cause(): $FocusEvent$Cause;
    }
    export class $ContainerListener {
    }
    export interface $ContainerListener extends $EventListener {
        componentAdded(arg0: $ContainerEvent): void;
        componentRemoved(arg0: $ContainerEvent): void;
    }
    export class $MouseWheelEvent extends $MouseEvent {
        getUnitsToScroll(): number;
        getScrollType(): number;
        getWheelRotation(): number;
        getPreciseWheelRotation(): number;
        getScrollAmount(): number;
        static ADJUSTMENT_EVENT_MASK: number;
        static MOUSE_FIRST: number;
        /**
         * @deprecated
         */
        static BUTTON1_MASK: number;
        static MOUSE_PRESSED: number;
        static WHEEL_BLOCK_SCROLL: number;
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
        static WHEEL_UNIT_SCROLL: number;
        static HIERARCHY_EVENT_MASK: number;
        static WINDOW_STATE_EVENT_MASK: number;
        /**
         * @deprecated
         */
        static META_MASK: number;
        static MOUSE_ENTERED: number;
        static MOUSE_DRAGGED: number;
        constructor(arg0: $Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number, arg11: number, arg12: number, arg13: number);
        constructor(arg0: $Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number, arg11: number, arg12: number);
        constructor(arg0: $Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number, arg9: number, arg10: number);
        get unitsToScroll(): number;
        get scrollType(): number;
        get wheelRotation(): number;
        get preciseWheelRotation(): number;
        get scrollAmount(): number;
    }
    export class $FocusListener {
    }
    export interface $FocusListener extends $EventListener {
        focusGained(arg0: $FocusEvent): void;
        focusLost(arg0: $FocusEvent): void;
    }
    export class $ItemListener {
    }
    export interface $ItemListener extends $EventListener {
        itemStateChanged(arg0: $ItemEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $ItemListener}.
     */
    export type $ItemListener_ = ((arg0: $ItemEvent) => void);
}
