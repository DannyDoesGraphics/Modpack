import { $InputStream, $Serializable } from "@package/java/io";
import { $MenuItemUI, $ListUI, $ButtonUI, $MenuBarUI, $RootPaneUI, $ComponentUI, $PopupMenuUI, $ViewportUI, $ScrollBarUI, $ScrollPaneUI } from "@package/javax/swing/plaf";
import { $Transferable, $DataFlavor, $Clipboard } from "@package/java/awt/datatransfer";
import { $VetoableChangeListener_, $PropertyChangeListener_, $VetoableChangeListener } from "@package/java/beans";
import { $JTextComponent, $Position$Bias, $EditorKit, $Document } from "@package/javax/swing/text";
import { $MenuKeyEvent, $MenuDragMouseEvent, $ListSelectionListener_, $ListSelectionListener, $ListDataListener, $HyperlinkEvent, $MenuListener, $HyperlinkListener, $ChangeListener, $MenuDragMouseListener, $MenuKeyListener, $PopupMenuListener, $AncestorListener, $ChangeListener_ } from "@package/javax/swing/event";
import { $Locale, $List, $Vector } from "@package/java/util";
import { $Accessible } from "@package/javax/accessibility";
import { $Border } from "@package/javax/swing/border";
import { $URL } from "@package/java/net";
import { $ItemListener, $ItemListener_, $ActionListener_, $MouseEvent, $AdjustmentListener_, $ActionListener, $KeyEvent, $InputEvent, $AdjustmentListener } from "@package/java/awt/event";
import { $Color, $Dimension, $Frame, $Container, $Window, $AWTKeyStroke, $Point, $Adjustable, $Component, $ItemSelectable, $Insets, $GraphicsConfiguration, $Image, $Graphics, $Rectangle } from "@package/java/awt";
import { $Enum, $ClassLoader, $Object } from "@package/java/lang";
export * as plaf from "@package/javax/swing/plaf";
export * as event from "@package/javax/swing/event";
export * as text from "@package/javax/swing/text";
export * as undo from "@package/javax/swing/undo";
export * as border from "@package/javax/swing/border";

declare module "@package/javax/swing" {
    export class $JList$DropLocation extends $TransferHandler$DropLocation {
        isInsert(): boolean;
        getIndex(): number;
        get insert(): boolean;
        get index(): number;
    }
    export class $SwingConstants {
        static NORTH_WEST: number;
        static LEFT: number;
        static WEST: number;
        static TRAILING: number;
        static BOTTOM: number;
        static LEADING: number;
        static PREVIOUS: number;
        static CENTER: number;
        static TOP: number;
        static VERTICAL: number;
        static NORTH: number;
        static NORTH_EAST: number;
        static NEXT: number;
        static RIGHT: number;
        static SOUTH_EAST: number;
        static SOUTH: number;
        static HORIZONTAL: number;
        static SOUTH_WEST: number;
        static EAST: number;
    }
    export interface $SwingConstants {
    }
    export class $MenuElement {
    }
    export interface $MenuElement {
        menuSelectionChanged(arg0: boolean): void;
        getSubElements(): $MenuElement[];
        processKeyEvent(arg0: $KeyEvent, arg1: $MenuElement[], arg2: $MenuSelectionManager): void;
        processMouseEvent(arg0: $MouseEvent, arg1: $MenuElement[], arg2: $MenuSelectionManager): void;
        getComponent(): $Component;
        get subElements(): $MenuElement[];
        get component(): $Component;
    }
    export class $ActionMap implements $Serializable {
        remove(arg0: $Object): void;
        size(): number;
        get(arg0: $Object): $Action;
        put(arg0: $Object, arg1: $Action): void;
        clear(): void;
        getParent(): $ActionMap;
        keys(): $Object[];
        setParent(arg0: $ActionMap): void;
        allKeys(): $Object[];
        constructor();
    }
    export class $JButton extends $AbstractButton implements $Accessible {
        isDefaultButton(): boolean;
        isDefaultCapable(): boolean;
        setDefaultCapable(arg0: boolean): void;
        static ROLLOVER_ENABLED_CHANGED_PROPERTY: string;
        static ROLLOVER_ICON_CHANGED_PROPERTY: string;
        static CONTENT_AREA_FILLED_CHANGED_PROPERTY: string;
        static BOTTOM_ALIGNMENT: number;
        static MODEL_CHANGED_PROPERTY: string;
        static SELECTED_ICON_CHANGED_PROPERTY: string;
        static ICON_CHANGED_PROPERTY: string;
        static ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY: string;
        static FOCUS_PAINTED_CHANGED_PROPERTY: string;
        static WHEN_FOCUSED: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static TEXT_CHANGED_PROPERTY: string;
        static VERTICAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        static DISABLED_SELECTED_ICON_CHANGED_PROPERTY: string;
        static VERTICAL_ALIGNMENT_CHANGED_PROPERTY: string;
        static PRESSED_ICON_CHANGED_PROPERTY: string;
        static DISABLED_ICON_CHANGED_PROPERTY: string;
        static HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        static MARGIN_CHANGED_PROPERTY: string;
        static BORDER_PAINTED_CHANGED_PROPERTY: string;
        static CENTER_ALIGNMENT: number;
        static HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY: string;
        static UNDEFINED_CONDITION: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static LEFT_ALIGNMENT: number;
        static MNEMONIC_CHANGED_PROPERTY: string;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor(arg0: $Icon);
        constructor();
        constructor(arg0: string, arg1: $Icon);
        constructor(arg0: $Action);
        constructor(arg0: string);
        get defaultButton(): boolean;
    }
    export class $BoundedRangeModel {
    }
    export interface $BoundedRangeModel {
        addChangeListener(arg0: $ChangeListener_): void;
        setMaximum(arg0: number): void;
        setValueIsAdjusting(arg0: boolean): void;
        getValueIsAdjusting(): boolean;
        removeChangeListener(arg0: $ChangeListener_): void;
        setExtent(arg0: number): void;
        setMinimum(arg0: number): void;
        setRangeProperties(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        getExtent(): number;
        getValue(): number;
        setValue(arg0: number): void;
        getMaximum(): number;
        getMinimum(): number;
    }
    export class $JTextArea extends $JTextComponent {
        setRows(arg0: number): void;
        getLineWrap(): boolean;
        getWrapStyleWord(): boolean;
        getLineOfOffset(arg0: number): number;
        getLineStartOffset(arg0: number): number;
        getLineEndOffset(arg0: number): number;
        replaceRange(arg0: string, arg1: number, arg2: number): void;
        setColumns(arg0: number): void;
        setLineWrap(arg0: boolean): void;
        setWrapStyleWord(arg0: boolean): void;
        getTabSize(): number;
        setTabSize(arg0: number): void;
        append(arg0: string): void;
        insert(arg0: string, arg1: number): void;
        getColumns(): number;
        getRows(): number;
        getLineCount(): number;
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
        constructor(arg0: string);
        constructor();
        constructor(arg0: $Document);
        constructor(arg0: number, arg1: number);
        constructor(arg0: string, arg1: number, arg2: number);
        constructor(arg0: $Document, arg1: string, arg2: number, arg3: number);
        get lineCount(): number;
    }
    export class $TransferHandler$DropLocation {
        getDropPoint(): $Point;
        get dropPoint(): $Point;
    }
    export class $JMenu extends $JMenuItem implements $Accessible, $MenuElement {
        isTearOff(): boolean;
        insertSeparator(arg0: number): void;
        isPopupMenuVisible(): boolean;
        getMenuComponent(arg0: number): $Component;
        getMenuComponentCount(): number;
        getMenuComponents(): $Component[];
        isMenuComponent(arg0: $Component): boolean;
        setMenuLocation(arg0: number, arg1: number): void;
        isTopLevelMenu(): boolean;
        addMenuListener(arg0: $MenuListener): void;
        removeMenuListener(arg0: $MenuListener): void;
        getMenuListeners(): $MenuListener[];
        getPopupMenu(): $JPopupMenu;
        setPopupMenuVisible(arg0: boolean): void;
        addSeparator(): void;
        getDelay(): number;
        remove(arg0: $JMenuItem): void;
        insert(arg0: string, arg1: number): void;
        insert(arg0: $JMenuItem, arg1: number): $JMenuItem;
        insert(arg0: $Action, arg1: number): $JMenuItem;
        add(arg0: $JMenuItem): $JMenuItem;
        add(arg0: $Action): $JMenuItem;
        add(arg0: string): $JMenuItem;
        getItem(arg0: number): $JMenuItem;
        getItemCount(): number;
        setDelay(arg0: number): void;
        static ROLLOVER_ENABLED_CHANGED_PROPERTY: string;
        static ROLLOVER_ICON_CHANGED_PROPERTY: string;
        static CONTENT_AREA_FILLED_CHANGED_PROPERTY: string;
        static BOTTOM_ALIGNMENT: number;
        static MODEL_CHANGED_PROPERTY: string;
        static SELECTED_ICON_CHANGED_PROPERTY: string;
        static ICON_CHANGED_PROPERTY: string;
        static ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY: string;
        static FOCUS_PAINTED_CHANGED_PROPERTY: string;
        static WHEN_FOCUSED: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static TEXT_CHANGED_PROPERTY: string;
        static VERTICAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        static DISABLED_SELECTED_ICON_CHANGED_PROPERTY: string;
        static VERTICAL_ALIGNMENT_CHANGED_PROPERTY: string;
        static PRESSED_ICON_CHANGED_PROPERTY: string;
        static DISABLED_ICON_CHANGED_PROPERTY: string;
        static HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        static MARGIN_CHANGED_PROPERTY: string;
        static BORDER_PAINTED_CHANGED_PROPERTY: string;
        static CENTER_ALIGNMENT: number;
        static HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY: string;
        static UNDEFINED_CONDITION: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static LEFT_ALIGNMENT: number;
        static MNEMONIC_CHANGED_PROPERTY: string;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor();
        constructor(arg0: $Action);
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: string);
        get tearOff(): boolean;
        get menuComponentCount(): number;
        get menuComponents(): $Component[];
        get topLevelMenu(): boolean;
        get menuListeners(): $MenuListener[];
        get popupMenu(): $JPopupMenu;
        get itemCount(): number;
    }
    export class $JFrame extends $Frame implements $WindowConstants, $Accessible, $RootPaneContainer, $TransferHandler$HasGetTransferHandler {
        setJMenuBar(arg0: $JMenuBar): void;
        getJMenuBar(): $JMenuBar;
        getContentPane(): $Container;
        setContentPane(arg0: $Container): void;
        getLayeredPane(): $JLayeredPane;
        setLayeredPane(arg0: $JLayeredPane): void;
        getGlassPane(): $Component;
        setGlassPane(arg0: $Component): void;
        setTransferHandler(arg0: $TransferHandler): void;
        getTransferHandler(): $TransferHandler;
        setDefaultCloseOperation(arg0: number): void;
        static isDefaultLookAndFeelDecorated(): boolean;
        getDefaultCloseOperation(): number;
        static setDefaultLookAndFeelDecorated(arg0: boolean): void;
        getRootPane(): $JRootPane;
        /**
         * @deprecated
         */
        static N_RESIZE_CURSOR: number;
        static CENTER_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static MAXIMIZED_HORIZ: number;
        static ICONIFIED: number;
        /**
         * @deprecated
         */
        static S_RESIZE_CURSOR: number;
        /**
         * @deprecated
         */
        static TEXT_CURSOR: number;
        static MAXIMIZED_BOTH: number;
        /**
         * @deprecated
         */
        static NW_RESIZE_CURSOR: number;
        /**
         * @deprecated
         */
        static W_RESIZE_CURSOR: number;
        /**
         * @deprecated
         */
        static SE_RESIZE_CURSOR: number;
        /**
         * @deprecated
         */
        static NE_RESIZE_CURSOR: number;
        static LEFT_ALIGNMENT: number;
        /**
         * @deprecated
         */
        static SW_RESIZE_CURSOR: number;
        static RIGHT_ALIGNMENT: number;
        static MAXIMIZED_VERT: number;
        static TOP_ALIGNMENT: number;
        /**
         * @deprecated
         */
        static DEFAULT_CURSOR: number;
        /**
         * @deprecated
         */
        static CROSSHAIR_CURSOR: number;
        /**
         * @deprecated
         */
        static E_RESIZE_CURSOR: number;
        /**
         * @deprecated
         */
        static HAND_CURSOR: number;
        /**
         * @deprecated
         */
        static WAIT_CURSOR: number;
        static NORMAL: number;
        /**
         * @deprecated
         */
        static MOVE_CURSOR: number;
        constructor();
        constructor(arg0: $GraphicsConfiguration);
        constructor(arg0: string);
        constructor(arg0: string, arg1: $GraphicsConfiguration);
        get rootPane(): $JRootPane;
    }
    export class $DropMode extends $Enum<$DropMode> {
        static values(): $DropMode[];
        static valueOf(arg0: string): $DropMode;
        static INSERT_ROWS: $DropMode;
        static INSERT_COLS: $DropMode;
        static ON_OR_INSERT_COLS: $DropMode;
        static ON_OR_INSERT: $DropMode;
        static INSERT: $DropMode;
        static USE_SELECTION: $DropMode;
        static ON_OR_INSERT_ROWS: $DropMode;
        static ON: $DropMode;
    }
    /**
     * Values that may be interpreted as {@link $DropMode}.
     */
    export type $DropMode_ = "use_selection" | "on" | "insert" | "insert_rows" | "insert_cols" | "on_or_insert" | "on_or_insert_rows" | "on_or_insert_cols";
    export class $JMenuItem extends $AbstractButton implements $Accessible, $MenuElement {
        setArmed(arg0: boolean): void;
        isArmed(): boolean;
        setAccelerator(arg0: $KeyStroke): void;
        processMenuDragMouseEvent(arg0: $MenuDragMouseEvent): void;
        getAccelerator(): $KeyStroke;
        addMenuDragMouseListener(arg0: $MenuDragMouseListener): void;
        removeMenuDragMouseListener(arg0: $MenuDragMouseListener): void;
        getMenuDragMouseListeners(): $MenuDragMouseListener[];
        setUI(arg0: $MenuItemUI): void;
        processMenuKeyEvent(arg0: $MenuKeyEvent): void;
        addMenuKeyListener(arg0: $MenuKeyListener): void;
        removeMenuKeyListener(arg0: $MenuKeyListener): void;
        getMenuKeyListeners(): $MenuKeyListener[];
        menuSelectionChanged(arg0: boolean): void;
        getSubElements(): $MenuElement[];
        processKeyEvent(arg0: $KeyEvent, arg1: $MenuElement[], arg2: $MenuSelectionManager): void;
        processMouseEvent(arg0: $MouseEvent, arg1: $MenuElement[], arg2: $MenuSelectionManager): void;
        getComponent(): $Component;
        static ROLLOVER_ENABLED_CHANGED_PROPERTY: string;
        static ROLLOVER_ICON_CHANGED_PROPERTY: string;
        static CONTENT_AREA_FILLED_CHANGED_PROPERTY: string;
        static BOTTOM_ALIGNMENT: number;
        static MODEL_CHANGED_PROPERTY: string;
        static SELECTED_ICON_CHANGED_PROPERTY: string;
        static ICON_CHANGED_PROPERTY: string;
        static ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY: string;
        static FOCUS_PAINTED_CHANGED_PROPERTY: string;
        static WHEN_FOCUSED: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static TEXT_CHANGED_PROPERTY: string;
        static VERTICAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        static DISABLED_SELECTED_ICON_CHANGED_PROPERTY: string;
        static VERTICAL_ALIGNMENT_CHANGED_PROPERTY: string;
        static PRESSED_ICON_CHANGED_PROPERTY: string;
        static DISABLED_ICON_CHANGED_PROPERTY: string;
        static HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        static MARGIN_CHANGED_PROPERTY: string;
        static BORDER_PAINTED_CHANGED_PROPERTY: string;
        static CENTER_ALIGNMENT: number;
        static HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY: string;
        static UNDEFINED_CONDITION: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static LEFT_ALIGNMENT: number;
        static MNEMONIC_CHANGED_PROPERTY: string;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor(arg0: string, arg1: $Icon);
        constructor(arg0: $Action);
        constructor(arg0: string);
        constructor(arg0: $Icon);
        constructor();
        constructor(arg0: string, arg1: number);
        get menuDragMouseListeners(): $MenuDragMouseListener[];
        set UI(value: $MenuItemUI);
        get menuKeyListeners(): $MenuKeyListener[];
        get subElements(): $MenuElement[];
        get component(): $Component;
    }
    export class $JWindow extends $Window implements $Accessible, $RootPaneContainer, $TransferHandler$HasGetTransferHandler {
        getContentPane(): $Container;
        setContentPane(arg0: $Container): void;
        getLayeredPane(): $JLayeredPane;
        setLayeredPane(arg0: $JLayeredPane): void;
        getGlassPane(): $Component;
        setGlassPane(arg0: $Component): void;
        setTransferHandler(arg0: $TransferHandler): void;
        getTransferHandler(): $TransferHandler;
        getRootPane(): $JRootPane;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        constructor(arg0: $Window);
        constructor(arg0: $Window, arg1: $GraphicsConfiguration);
        constructor(arg0: $GraphicsConfiguration);
        constructor();
        constructor(arg0: $Frame);
        get rootPane(): $JRootPane;
    }
    export class $Popup {
        hide(): void;
        show(): void;
    }
    export class $TransferHandler$TransferSupport {
        getTransferable(): $Transferable;
        getDataFlavors(): $DataFlavor[];
        isDataFlavorSupported(arg0: $DataFlavor): boolean;
        isDrop(): boolean;
        getSourceDropActions(): number;
        getUserDropAction(): number;
        getDropAction(): number;
        setShowDropLocation(arg0: boolean): void;
        setDropAction(arg0: number): void;
        getDropLocation(): $TransferHandler$DropLocation;
        getComponent(): $Component;
        constructor(arg0: $Component, arg1: $Transferable);
        get transferable(): $Transferable;
        get dataFlavors(): $DataFlavor[];
        get drop(): boolean;
        get sourceDropActions(): number;
        get userDropAction(): number;
        set showDropLocation(value: boolean);
        get dropLocation(): $TransferHandler$DropLocation;
        get component(): $Component;
    }
    export class $ListModel<E> {
    }
    export interface $ListModel<E> {
        addListDataListener(arg0: $ListDataListener): void;
        removeListDataListener(arg0: $ListDataListener): void;
        getElementAt(arg0: number): E;
        getSize(): number;
        get size(): number;
    }
    export class $MenuSelectionManager {
        addChangeListener(arg0: $ChangeListener_): void;
        getSelectedPath(): $MenuElement[];
        isComponentPartOfCurrentMenu(arg0: $Component): boolean;
        componentForPoint(arg0: $Component, arg1: $Point): $Component;
        removeChangeListener(arg0: $ChangeListener_): void;
        getChangeListeners(): $ChangeListener[];
        static defaultManager(): $MenuSelectionManager;
        setSelectedPath(arg0: $MenuElement[]): void;
        clearSelectedPath(): void;
        processKeyEvent(arg0: $KeyEvent): void;
        processMouseEvent(arg0: $MouseEvent): void;
        constructor();
        get changeListeners(): $ChangeListener[];
    }
    export class $JRootPane extends $JComponent implements $Accessible {
        getWindowDecorationStyle(): number;
        setWindowDecorationStyle(arg0: number): void;
        setJMenuBar(arg0: $JMenuBar): void;
        /**
         * @deprecated
         */
        setMenuBar(arg0: $JMenuBar): void;
        getJMenuBar(): $JMenuBar;
        /**
         * @deprecated
         */
        getMenuBar(): $JMenuBar;
        setDefaultButton(arg0: $JButton): void;
        getDefaultButton(): $JButton;
        getContentPane(): $Container;
        setContentPane(arg0: $Container): void;
        getLayeredPane(): $JLayeredPane;
        setLayeredPane(arg0: $JLayeredPane): void;
        getGlassPane(): $Component;
        setGlassPane(arg0: $Component): void;
        getUI(): $RootPaneUI;
        setUI(arg0: $RootPaneUI): void;
        static CENTER_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static FILE_CHOOSER_DIALOG: number;
        static FRAME: number;
        static QUESTION_DIALOG: number;
        static UNDEFINED_CONDITION: number;
        static INFORMATION_DIALOG: number;
        static COLOR_CHOOSER_DIALOG: number;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static PLAIN_DIALOG: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static ERROR_DIALOG: number;
        static NONE: number;
        static WARNING_DIALOG: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor();
    }
    export class $SingleSelectionModel {
    }
    export interface $SingleSelectionModel {
        addChangeListener(arg0: $ChangeListener_): void;
        getSelectedIndex(): number;
        clearSelection(): void;
        setSelectedIndex(arg0: number): void;
        removeChangeListener(arg0: $ChangeListener_): void;
        isSelected(): boolean;
        get selected(): boolean;
    }
    export class $Action {
        static LARGE_ICON_KEY: string;
        static SHORT_DESCRIPTION: string;
        static SELECTED_KEY: string;
        static ACTION_COMMAND_KEY: string;
        static SMALL_ICON: string;
        static LONG_DESCRIPTION: string;
        static ACCELERATOR_KEY: string;
        static MNEMONIC_KEY: string;
        static DEFAULT: string;
        static NAME: string;
        static DISPLAYED_MNEMONIC_INDEX_KEY: string;
    }
    export interface $Action extends $ActionListener {
        getValue(arg0: string): $Object;
        isEnabled(): boolean;
        accept(arg0: $Object): boolean;
        putValue(arg0: string, arg1: $Object): void;
        addPropertyChangeListener(arg0: $PropertyChangeListener_): void;
        removePropertyChangeListener(arg0: $PropertyChangeListener_): void;
        setEnabled(arg0: boolean): void;
    }
    export class $JMenuBar extends $JComponent implements $Accessible, $MenuElement {
        getMenuCount(): number;
        setHelpMenu(arg0: $JMenu): void;
        getHelpMenu(): $JMenu;
        setSelectionModel(arg0: $SingleSelectionModel): void;
        getUI(): $MenuBarUI;
        setUI(arg0: $MenuBarUI): void;
        getMenu(arg0: number): $JMenu;
        getSelectionModel(): $SingleSelectionModel;
        getComponentIndex(arg0: $Component): number;
        isBorderPainted(): boolean;
        /**
         * @deprecated
         */
        getComponentAtIndex(arg0: number): $Component;
        setBorderPainted(arg0: boolean): void;
        getMargin(): $Insets;
        menuSelectionChanged(arg0: boolean): void;
        getSubElements(): $MenuElement[];
        setMargin(arg0: $Insets): void;
        processKeyEvent(arg0: $KeyEvent, arg1: $MenuElement[], arg2: $MenuSelectionManager): void;
        processMouseEvent(arg0: $MouseEvent, arg1: $MenuElement[], arg2: $MenuSelectionManager): void;
        add(arg0: $JMenu): $JMenu;
        getComponent(): $Component;
        isSelected(): boolean;
        setSelected(arg0: $Component): void;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
        constructor();
        get menuCount(): number;
        get subElements(): $MenuElement[];
        get component(): $Component;
    }
    export class $ListCellRenderer<E> {
    }
    export interface $ListCellRenderer<E> {
        getListCellRendererComponent(arg0: $JList<E>, arg1: E, arg2: number, arg3: boolean, arg4: boolean): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ListCellRenderer}.
     */
    export type $ListCellRenderer_<E> = ((arg0: $JList<E>, arg1: E, arg2: number, arg3: boolean, arg4: boolean) => $Component);
    export class $JList<E> extends $JComponent implements $Scrollable, $Accessible {
        setLayoutOrientation(arg0: number): void;
        getLastVisibleIndex(): number;
        setDragEnabled(arg0: boolean): void;
        getDragEnabled(): boolean;
        setDropMode(arg0: $DropMode_): void;
        getDropMode(): $DropMode;
        getDropLocation(): $JList$DropLocation;
        getNextMatch(arg0: string, arg1: number, arg2: $Position$Bias): number;
        getListSelectionListeners(): $ListSelectionListener[];
        setSelectionModel(arg0: $ListSelectionModel): void;
        /**
         * @deprecated
         */
        getSelectedValues(): $Object[];
        getSelectedValuesList(): $List<E>;
        getSelectedIndex(): number;
        setSelectedValue(arg0: $Object, arg1: boolean): void;
        getPreferredScrollableViewportSize(): $Dimension;
        getScrollableUnitIncrement(arg0: $Rectangle, arg1: number, arg2: number): number;
        getScrollableBlockIncrement(arg0: $Rectangle, arg1: number, arg2: number): number;
        getScrollableTracksViewportWidth(): boolean;
        getScrollableTracksViewportHeight(): boolean;
        setUI(arg0: $ListUI): void;
        clearSelection(): void;
        getSelectionMode(): number;
        getCellRenderer(): $ListCellRenderer<E>;
        getPrototypeCellValue(): E;
        locationToIndex(arg0: $Point): number;
        getCellBounds(arg0: number, arg1: number): $Rectangle;
        getLayoutOrientation(): number;
        setSelectedIndices(arg0: number[]): void;
        getSelectionModel(): $ListSelectionModel;
        getSelectedIndices(): number[];
        getAnchorSelectionIndex(): number;
        getLeadSelectionIndex(): number;
        setSelectionInterval(arg0: number, arg1: number): void;
        isSelectedIndex(arg0: number): boolean;
        indexToLocation(arg0: number): $Point;
        setModel(arg0: $ListModel<E>): void;
        addListSelectionListener(arg0: $ListSelectionListener_): void;
        removeListSelectionListener(arg0: $ListSelectionListener_): void;
        setSelectionMode(arg0: number): void;
        getMinSelectionIndex(): number;
        getMaxSelectionIndex(): number;
        isSelectionEmpty(): boolean;
        addSelectionInterval(arg0: number, arg1: number): void;
        removeSelectionInterval(arg0: number, arg1: number): void;
        setValueIsAdjusting(arg0: boolean): void;
        getValueIsAdjusting(): boolean;
        getSelectedValue(): E;
        setSelectedIndex(arg0: number): void;
        ensureIndexIsVisible(arg0: number): void;
        getVisibleRowCount(): number;
        getFixedCellWidth(): number;
        getFixedCellHeight(): number;
        getFirstVisibleIndex(): number;
        setPrototypeCellValue(arg0: E): void;
        setFixedCellWidth(arg0: number): void;
        setFixedCellHeight(arg0: number): void;
        setCellRenderer(arg0: $ListCellRenderer_<E>): void;
        getSelectionForeground(): $Color;
        setSelectionForeground(arg0: $Color): void;
        getSelectionBackground(): $Color;
        setSelectionBackground(arg0: $Color): void;
        setVisibleRowCount(arg0: number): void;
        setListData(arg0: E[]): void;
        setListData(arg0: $Vector<E>): void;
        getModel(): $ListModel<E>;
        static CENTER_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static VERTICAL_WRAP: number;
        static UNDEFINED_CONDITION: number;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static VERTICAL: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static HORIZONTAL_WRAP: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor(arg0: E[]);
        constructor(arg0: $Vector<E>);
        constructor();
        constructor(arg0: $ListModel<E>);
        get lastVisibleIndex(): number;
        get dropLocation(): $JList$DropLocation;
        get listSelectionListeners(): $ListSelectionListener[];
        get selectedValues(): $Object[];
        get selectedValuesList(): $List<E>;
        get preferredScrollableViewportSize(): $Dimension;
        get scrollableTracksViewportWidth(): boolean;
        get scrollableTracksViewportHeight(): boolean;
        set UI(value: $ListUI);
        get anchorSelectionIndex(): number;
        get leadSelectionIndex(): number;
        get minSelectionIndex(): number;
        get maxSelectionIndex(): number;
        get selectionEmpty(): boolean;
        get firstVisibleIndex(): number;
    }
    export class $JComponent extends $Container implements $Serializable, $TransferHandler$HasGetTransferHandler {
        setInheritsPopupMenu(arg0: boolean): void;
        setComponentPopupMenu(arg0: $JPopupMenu): void;
        updateUI(): void;
        getUI(): $ComponentUI;
        isPaintingTile(): boolean;
        isPaintingForPrint(): boolean;
        setRequestFocusEnabled(arg0: boolean): void;
        isRequestFocusEnabled(): boolean;
        grabFocus(): void;
        setVerifyInputWhenFocusTarget(arg0: boolean): void;
        getVerifyInputWhenFocusTarget(): boolean;
        setAlignmentY(arg0: number): void;
        setAlignmentX(arg0: number): void;
        setInputVerifier(arg0: $InputVerifier): void;
        getInputVerifier(): $InputVerifier;
        setDebugGraphicsOptions(arg0: number): void;
        getDebugGraphicsOptions(): number;
        unregisterKeyboardAction(arg0: $KeyStroke): void;
        getRegisteredKeyStrokes(): $KeyStroke[];
        getConditionForKeyStroke(arg0: $KeyStroke): number;
        getActionForKeyStroke(arg0: $KeyStroke): $ActionListener;
        resetKeyboardActions(): void;
        /**
         * @deprecated
         */
        requestDefaultFocus(): boolean;
        setToolTipText(arg0: string): void;
        getToolTipLocation(arg0: $MouseEvent): $Point;
        getPopupLocation(arg0: $MouseEvent): $Point;
        createToolTip(): $JToolTip;
        getAutoscrolls(): boolean;
        setTransferHandler(arg0: $TransferHandler): void;
        getTransferHandler(): $TransferHandler;
        getVisibleRect(): $Rectangle;
        getTopLevelAncestor(): $Container;
        setDoubleBuffered(arg0: boolean): void;
        repaint(arg0: $Rectangle): void;
        setBorder(arg0: $Border): void;
        getRootPane(): $JRootPane;
        getInheritsPopupMenu(): boolean;
        getComponentPopupMenu(): $JPopupMenu;
        /**
         * @deprecated
         */
        isManagingFocus(): boolean;
        static getDefaultLocale(): $Locale;
        putClientProperty(arg0: $Object, arg1: $Object): void;
        isOptimizedDrawingEnabled(): boolean;
        static isLightweightComponent(arg0: $Component): boolean;
        /**
         * @deprecated
         */
        getNextFocusableComponent(): $Component;
        /**
         * @deprecated
         */
        setNextFocusableComponent(arg0: $Component): void;
        getClientProperty(arg0: $Object): $Object;
        requestFocus(arg0: boolean): boolean;
        getInsets(arg0: $Insets): $Insets;
        getInputMap(): $InputMap;
        getInputMap(arg0: number): $InputMap;
        getActionMap(): $ActionMap;
        registerKeyboardAction(arg0: $ActionListener_, arg1: string, arg2: $KeyStroke, arg3: number): void;
        registerKeyboardAction(arg0: $ActionListener_, arg1: $KeyStroke, arg2: number): void;
        setInputMap(arg0: number, arg1: $InputMap): void;
        setActionMap(arg0: $ActionMap): void;
        static setDefaultLocale(arg0: $Locale): void;
        getToolTipText(): string;
        getToolTipText(arg0: $MouseEvent): string;
        scrollRectToVisible(arg0: $Rectangle): void;
        setAutoscrolls(arg0: boolean): void;
        computeVisibleRect(arg0: $Rectangle): void;
        addVetoableChangeListener(arg0: $VetoableChangeListener_): void;
        removeVetoableChangeListener(arg0: $VetoableChangeListener_): void;
        getVetoableChangeListeners(): $VetoableChangeListener[];
        addAncestorListener(arg0: $AncestorListener): void;
        removeAncestorListener(arg0: $AncestorListener): void;
        getAncestorListeners(): $AncestorListener[];
        paintImmediately(arg0: number, arg1: number, arg2: number, arg3: number): void;
        paintImmediately(arg0: $Rectangle): void;
        getUIClassID(): string;
        firePropertyChange(arg0: string, arg1: number, arg2: number): void;
        firePropertyChange(arg0: string, arg1: boolean, arg2: boolean): void;
        setOpaque(arg0: boolean): void;
        getBorder(): $Border;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
        constructor();
        get UI(): $ComponentUI;
        get paintingTile(): boolean;
        get paintingForPrint(): boolean;
        set alignmentY(value: number);
        set alignmentX(value: number);
        get registeredKeyStrokes(): $KeyStroke[];
        get visibleRect(): $Rectangle;
        get topLevelAncestor(): $Container;
        set doubleBuffered(value: boolean);
        get rootPane(): $JRootPane;
        get managingFocus(): boolean;
        get optimizedDrawingEnabled(): boolean;
        get vetoableChangeListeners(): $VetoableChangeListener[];
        get ancestorListeners(): $AncestorListener[];
        get UIClassID(): string;
        set opaque(value: boolean);
    }
    export class $Scrollable {
    }
    export interface $Scrollable {
        getPreferredScrollableViewportSize(): $Dimension;
        getScrollableUnitIncrement(arg0: $Rectangle, arg1: number, arg2: number): number;
        getScrollableBlockIncrement(arg0: $Rectangle, arg1: number, arg2: number): number;
        getScrollableTracksViewportWidth(): boolean;
        getScrollableTracksViewportHeight(): boolean;
        get preferredScrollableViewportSize(): $Dimension;
        get scrollableTracksViewportWidth(): boolean;
        get scrollableTracksViewportHeight(): boolean;
    }
    export class $InputVerifier {
        shouldYieldFocus(arg0: $JComponent, arg1: $JComponent): boolean;
        /**
         * @deprecated
         */
        shouldYieldFocus(arg0: $JComponent): boolean;
        verify(arg0: $JComponent): boolean;
        verifyTarget(arg0: $JComponent): boolean;
    }
    export class $JScrollBar extends $JComponent implements $Adjustable, $Accessible {
        setVisibleAmount(arg0: number): void;
        addAdjustmentListener(arg0: $AdjustmentListener_): void;
        removeAdjustmentListener(arg0: $AdjustmentListener_): void;
        getAdjustmentListeners(): $AdjustmentListener[];
        setUI(arg0: $ScrollBarUI): void;
        setOrientation(arg0: number): void;
        getOrientation(): number;
        setMaximum(arg0: number): void;
        setModel(arg0: $BoundedRangeModel): void;
        setValueIsAdjusting(arg0: boolean): void;
        getValueIsAdjusting(): boolean;
        setMinimum(arg0: number): void;
        getUnitIncrement(arg0: number): number;
        getUnitIncrement(): number;
        setUnitIncrement(arg0: number): void;
        getBlockIncrement(): number;
        getBlockIncrement(arg0: number): number;
        setBlockIncrement(arg0: number): void;
        getVisibleAmount(): number;
        setValues(arg0: number, arg1: number, arg2: number, arg3: number): void;
        getValue(): number;
        setValue(arg0: number): void;
        getMaximum(): number;
        getMinimum(): number;
        getModel(): $BoundedRangeModel;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: number);
        constructor();
        get adjustmentListeners(): $AdjustmentListener[];
        set UI(value: $ScrollBarUI);
    }
    export class $JPopupMenu extends $JComponent implements $Accessible, $MenuElement {
        setSelectionModel(arg0: $SingleSelectionModel): void;
        getUI(): $PopupMenuUI;
        setUI(arg0: $PopupMenuUI): void;
        show(arg0: $Component, arg1: number, arg2: number): void;
        getSelectionModel(): $SingleSelectionModel;
        static getDefaultLightWeightPopupEnabled(): boolean;
        getInvoker(): $Component;
        isLightWeightPopupEnabled(): boolean;
        setInvoker(arg0: $Component): void;
        setPopupSize(arg0: number, arg1: number): void;
        setPopupSize(arg0: $Dimension): void;
        getComponentIndex(arg0: $Component): number;
        isBorderPainted(): boolean;
        static setDefaultLightWeightPopupEnabled(arg0: boolean): void;
        setLightWeightPopupEnabled(arg0: boolean): void;
        addSeparator(): void;
        addPopupMenuListener(arg0: $PopupMenuListener): void;
        removePopupMenuListener(arg0: $PopupMenuListener): void;
        getPopupMenuListeners(): $PopupMenuListener[];
        addMenuKeyListener(arg0: $MenuKeyListener): void;
        removeMenuKeyListener(arg0: $MenuKeyListener): void;
        getMenuKeyListeners(): $MenuKeyListener[];
        /**
         * @deprecated
         */
        getComponentAtIndex(arg0: number): $Component;
        setBorderPainted(arg0: boolean): void;
        getMargin(): $Insets;
        menuSelectionChanged(arg0: boolean): void;
        getSubElements(): $MenuElement[];
        isPopupTrigger(arg0: $MouseEvent): boolean;
        setLabel(arg0: string): void;
        getLabel(): string;
        processKeyEvent(arg0: $KeyEvent, arg1: $MenuElement[], arg2: $MenuSelectionManager): void;
        processMouseEvent(arg0: $MouseEvent, arg1: $MenuElement[], arg2: $MenuSelectionManager): void;
        insert(arg0: $Action, arg1: number): void;
        insert(arg0: $Component, arg1: number): void;
        add(arg0: string): $JMenuItem;
        add(arg0: $Action): $JMenuItem;
        add(arg0: $JMenuItem): $JMenuItem;
        getComponent(): $Component;
        pack(): void;
        setSelected(arg0: $Component): void;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
        constructor(arg0: string);
        constructor();
        get popupMenuListeners(): $PopupMenuListener[];
        get menuKeyListeners(): $MenuKeyListener[];
        get margin(): $Insets;
        get subElements(): $MenuElement[];
        get component(): $Component;
        set selected(value: $Component);
    }
    export class $JViewport extends $JComponent implements $Accessible {
        addChangeListener(arg0: $ChangeListener_): void;
        setUI(arg0: $ViewportUI): void;
        setView(arg0: $Component): void;
        removeChangeListener(arg0: $ChangeListener_): void;
        setViewPosition(arg0: $Point): void;
        getChangeListeners(): $ChangeListener[];
        getViewPosition(): $Point;
        getExtentSize(): $Dimension;
        setScrollMode(arg0: number): void;
        getScrollMode(): number;
        /**
         * @deprecated
         */
        isBackingStoreEnabled(): boolean;
        /**
         * @deprecated
         */
        setBackingStoreEnabled(arg0: boolean): void;
        getViewSize(): $Dimension;
        setViewSize(arg0: $Dimension): void;
        getViewRect(): $Rectangle;
        toViewCoordinates(arg0: $Point): $Point;
        toViewCoordinates(arg0: $Dimension): $Dimension;
        setExtentSize(arg0: $Dimension): void;
        getView(): $Component;
        static CENTER_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static BACKINGSTORE_SCROLL_MODE: number;
        static UNDEFINED_CONDITION: number;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static SIMPLE_SCROLL_MODE: number;
        static BLIT_SCROLL_MODE: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor();
        set UI(value: $ViewportUI);
        get changeListeners(): $ChangeListener[];
        get viewRect(): $Rectangle;
    }
    export class $InputMap implements $Serializable {
        remove(arg0: $KeyStroke): void;
        size(): number;
        get(arg0: $KeyStroke): $Object;
        put(arg0: $KeyStroke, arg1: $Object): void;
        clear(): void;
        getParent(): $InputMap;
        keys(): $KeyStroke[];
        setParent(arg0: $InputMap): void;
        allKeys(): $KeyStroke[];
        constructor();
    }
    export class $WindowConstants {
        static HIDE_ON_CLOSE: number;
        static EXIT_ON_CLOSE: number;
        static DO_NOTHING_ON_CLOSE: number;
        static DISPOSE_ON_CLOSE: number;
    }
    export interface $WindowConstants {
    }
    export class $ButtonModel {
    }
    export interface $ButtonModel extends $ItemSelectable {
        addChangeListener(arg0: $ChangeListener_): void;
        getActionCommand(): string;
        getMnemonic(): number;
        setArmed(arg0: boolean): void;
        setRollover(arg0: boolean): void;
        setMnemonic(arg0: number): void;
        removeItemListener(arg0: $ItemListener_): void;
        addItemListener(arg0: $ItemListener_): void;
        isRollover(): boolean;
        isArmed(): boolean;
        isPressed(): boolean;
        removeChangeListener(arg0: $ChangeListener_): void;
        setPressed(arg0: boolean): void;
        setActionCommand(arg0: string): void;
        removeActionListener(arg0: $ActionListener_): void;
        addActionListener(arg0: $ActionListener_): void;
        isEnabled(): boolean;
        setGroup(arg0: $ButtonGroup): void;
        isSelected(): boolean;
        getGroup(): $ButtonGroup;
        setEnabled(arg0: boolean): void;
        setSelected(arg0: boolean): void;
    }
    export class $JLayeredPane extends $JComponent implements $Accessible {
        setLayer(arg0: $Component, arg1: number): void;
        setLayer(arg0: $Component, arg1: number, arg2: number): void;
        getComponentCountInLayer(arg0: number): number;
        static putLayer(arg0: $JComponent, arg1: number): void;
        static getLayeredPaneAbove(arg0: $Component): $JLayeredPane;
        moveToBack(arg0: $Component): void;
        highestLayer(): number;
        lowestLayer(): number;
        getComponentsInLayer(arg0: number): $Component[];
        getIndexOf(arg0: $Component): number;
        moveToFront(arg0: $Component): void;
        static getLayer(arg0: $JComponent): number;
        getLayer(arg0: $Component): number;
        setPosition(arg0: $Component, arg1: number): void;
        getPosition(arg0: $Component): number;
        static PALETTE_LAYER: number;
        static LAYER_PROPERTY: string;
        static CENTER_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static MODAL_LAYER: number;
        static UNDEFINED_CONDITION: number;
        static FRAME_CONTENT_LAYER: number;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static LEFT_ALIGNMENT: number;
        static DEFAULT_LAYER: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static DRAG_LAYER: number;
        static TOP_ALIGNMENT: number;
        static POPUP_LAYER: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor();
    }
    export class $JToolTip extends $JComponent implements $Accessible {
        setTipText(arg0: string): void;
        getTipText(): string;
        getComponent(): $JComponent;
        setComponent(arg0: $JComponent): void;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
        constructor();
    }
    export class $TransferHandler$HasGetTransferHandler {
    }
    export interface $TransferHandler$HasGetTransferHandler {
    }
    /**
     * Values that may be interpreted as {@link $TransferHandler$HasGetTransferHandler}.
     */
    export type $TransferHandler$HasGetTransferHandler_ = (() => void);
    export class $JScrollPane extends $JComponent implements $ScrollPaneConstants, $Accessible {
        getUI(): $ScrollPaneUI;
        setUI(arg0: $ScrollPaneUI): void;
        setHorizontalScrollBarPolicy(arg0: number): void;
        createVerticalScrollBar(): $JScrollBar;
        setVerticalScrollBar(arg0: $JScrollBar): void;
        createHorizontalScrollBar(): $JScrollBar;
        setHorizontalScrollBar(arg0: $JScrollBar): void;
        setViewportView(arg0: $Component): void;
        getCorner(arg0: string): $Component;
        setVerticalScrollBarPolicy(arg0: number): void;
        getVerticalScrollBar(): $JScrollBar;
        getViewport(): $JViewport;
        getColumnHeader(): $JViewport;
        getRowHeader(): $JViewport;
        getHorizontalScrollBar(): $JScrollBar;
        setRowHeader(arg0: $JViewport): void;
        setColumnHeader(arg0: $JViewport): void;
        getVerticalScrollBarPolicy(): number;
        getHorizontalScrollBarPolicy(): number;
        getViewportBorder(): $Border;
        setViewportBorder(arg0: $Border): void;
        getViewportBorderBounds(): $Rectangle;
        setRowHeaderView(arg0: $Component): void;
        setColumnHeaderView(arg0: $Component): void;
        setCorner(arg0: string, arg1: $Component): void;
        isWheelScrollingEnabled(): boolean;
        setWheelScrollingEnabled(arg0: boolean): void;
        setViewport(arg0: $JViewport): void;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
        constructor(arg0: $Component);
        constructor(arg0: $Component, arg1: number, arg2: number);
        constructor();
        constructor(arg0: number, arg1: number);
        set viewportView(value: $Component);
        get viewportBorderBounds(): $Rectangle;
        set rowHeaderView(value: $Component);
        set columnHeaderView(value: $Component);
    }
    export class $Icon {
    }
    export interface $Icon {
        paintIcon(arg0: $Component, arg1: $Graphics, arg2: number, arg3: number): void;
        getIconWidth(): number;
        getIconHeight(): number;
        get iconWidth(): number;
        get iconHeight(): number;
    }
    export class $JEditorPane extends $JTextComponent {
        setPage(arg0: $URL): void;
        setPage(arg0: string): void;
        getPage(): $URL;
        getEditorKit(): $EditorKit;
        scrollToReference(arg0: string): void;
        getEditorKitForContentType(arg0: string): $EditorKit;
        setEditorKit(arg0: $EditorKit): void;
        static createEditorKitForContentType(arg0: string): $EditorKit;
        setEditorKitForContentType(arg0: string, arg1: $EditorKit): void;
        static registerEditorKitForContentType(arg0: string, arg1: string, arg2: $ClassLoader): void;
        static registerEditorKitForContentType(arg0: string, arg1: string): void;
        addHyperlinkListener(arg0: $HyperlinkListener): void;
        removeHyperlinkListener(arg0: $HyperlinkListener): void;
        getHyperlinkListeners(): $HyperlinkListener[];
        fireHyperlinkUpdate(arg0: $HyperlinkEvent): void;
        static getEditorKitClassNameForContentType(arg0: string): string;
        read(arg0: $InputStream, arg1: $Object): void;
        getContentType(): string;
        setContentType(arg0: string): void;
        static FOCUS_ACCELERATOR_KEY: string;
        static CENTER_ALIGNMENT: number;
        static HONOR_DISPLAY_PROPERTIES: string;
        static BOTTOM_ALIGNMENT: number;
        static W3C_LENGTH_UNITS: string;
        static DEFAULT_KEYMAP: string;
        static UNDEFINED_CONDITION: number;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor(arg0: $URL);
        constructor();
        constructor(arg0: string);
        constructor(arg0: string, arg1: string);
        get hyperlinkListeners(): $HyperlinkListener[];
    }
    export class $ScrollPaneConstants {
        static HORIZONTAL_SCROLLBAR_NEVER: number;
        static LOWER_TRAILING_CORNER: string;
        static HORIZONTAL_SCROLLBAR_ALWAYS: number;
        static VERTICAL_SCROLLBAR_ALWAYS: number;
        static VERTICAL_SCROLLBAR_POLICY: string;
        static HORIZONTAL_SCROLLBAR_POLICY: string;
        static LOWER_RIGHT_CORNER: string;
        static LOWER_LEADING_CORNER: string;
        static VERTICAL_SCROLLBAR_NEVER: number;
        static UPPER_LEADING_CORNER: string;
        static UPPER_TRAILING_CORNER: string;
        static ROW_HEADER: string;
        static VERTICAL_SCROLLBAR: string;
        static VERTICAL_SCROLLBAR_AS_NEEDED: number;
        static LOWER_LEFT_CORNER: string;
        static UPPER_LEFT_CORNER: string;
        static HORIZONTAL_SCROLLBAR: string;
        static COLUMN_HEADER: string;
        static HORIZONTAL_SCROLLBAR_AS_NEEDED: number;
        static UPPER_RIGHT_CORNER: string;
        static VIEWPORT: string;
    }
    export interface $ScrollPaneConstants {
    }
    export class $RootPaneContainer {
    }
    export interface $RootPaneContainer {
        getContentPane(): $Container;
        setContentPane(arg0: $Container): void;
        getLayeredPane(): $JLayeredPane;
        setLayeredPane(arg0: $JLayeredPane): void;
        getGlassPane(): $Component;
        setGlassPane(arg0: $Component): void;
        getRootPane(): $JRootPane;
        get rootPane(): $JRootPane;
    }
    export class $TransferHandler implements $Serializable {
        getSourceActions(arg0: $JComponent): number;
        importData(arg0: $JComponent, arg1: $Transferable): boolean;
        importData(arg0: $TransferHandler$TransferSupport): boolean;
        canImport(arg0: $TransferHandler$TransferSupport): boolean;
        canImport(arg0: $JComponent, arg1: $DataFlavor[]): boolean;
        static getCutAction(): $Action;
        static getCopyAction(): $Action;
        static getPasteAction(): $Action;
        setDragImage(arg0: $Image): void;
        getDragImage(): $Image;
        setDragImageOffset(arg0: $Point): void;
        getDragImageOffset(): $Point;
        exportAsDrag(arg0: $JComponent, arg1: $InputEvent, arg2: number): void;
        exportToClipboard(arg0: $JComponent, arg1: $Clipboard, arg2: number): void;
        getVisualRepresentation(arg0: $Transferable): $Icon;
        static COPY_OR_MOVE: number;
        static MOVE: number;
        static LINK: number;
        static COPY: number;
        static NONE: number;
        constructor(arg0: string);
        static get cutAction(): $Action;
        static get copyAction(): $Action;
        static get pasteAction(): $Action;
    }
    export class $KeyStroke extends $AWTKeyStroke {
        static getKeyStrokeForEvent(arg0: $KeyEvent): $KeyStroke;
        /**
         * @deprecated
         */
        static getKeyStroke(arg0: string, arg1: boolean): $KeyStroke;
        static getKeyStroke(arg0: string, arg1: number): $KeyStroke;
        static getKeyStroke(arg0: number, arg1: number): $KeyStroke;
        static getKeyStroke(arg0: string): $KeyStroke;
        static getKeyStroke(arg0: string): $KeyStroke;
        static getKeyStroke(arg0: number, arg1: number, arg2: boolean): $KeyStroke;
    }
    export class $AbstractButton extends $JComponent implements $ItemSelectable, $SwingConstants {
        addChangeListener(arg0: $ChangeListener_): void;
        getActionCommand(): string;
        getMnemonic(): number;
        setRolloverEnabled(arg0: boolean): void;
        getDisabledIcon(): $Icon;
        getSelectedIcon(): $Icon;
        getDisabledSelectedIcon(): $Icon;
        isRolloverEnabled(): boolean;
        getHideActionText(): boolean;
        setHideActionText(arg0: boolean): void;
        setDisplayedMnemonicIndex(arg0: number): void;
        setMnemonic(arg0: number): void;
        setMnemonic(arg0: string): void;
        removeItemListener(arg0: $ItemListener_): void;
        addItemListener(arg0: $ItemListener_): void;
        setDisabledIcon(arg0: $Icon): void;
        setDisabledSelectedIcon(arg0: $Icon): void;
        getPressedIcon(): $Icon;
        getRolloverSelectedIcon(): $Icon;
        getRolloverIcon(): $Icon;
        setIconTextGap(arg0: number): void;
        setContentAreaFilled(arg0: boolean): void;
        setAction(arg0: $Action): void;
        setPressedIcon(arg0: $Icon): void;
        setSelectedIcon(arg0: $Icon): void;
        setRolloverIcon(arg0: $Icon): void;
        setRolloverSelectedIcon(arg0: $Icon): void;
        getVerticalAlignment(): number;
        setVerticalAlignment(arg0: number): void;
        getVerticalTextPosition(): number;
        getHorizontalTextPosition(): number;
        getIconTextGap(): number;
        isFocusPainted(): boolean;
        isContentAreaFilled(): boolean;
        getDisplayedMnemonicIndex(): number;
        setMultiClickThreshhold(arg0: number): void;
        getMultiClickThreshhold(): number;
        getItemListeners(): $ItemListener[];
        getSelectedObjects(): $Object[];
        getUI(): $ButtonUI;
        setUI(arg0: $ButtonUI): void;
        doClick(): void;
        doClick(arg0: number): void;
        setModel(arg0: $ButtonModel): void;
        removeChangeListener(arg0: $ChangeListener_): void;
        getChangeListeners(): $ChangeListener[];
        setActionCommand(arg0: string): void;
        removeActionListener(arg0: $ActionListener_): void;
        getActionListeners(): $ActionListener[];
        setHorizontalTextPosition(arg0: number): void;
        setVerticalTextPosition(arg0: number): void;
        isBorderPainted(): boolean;
        setBorderPainted(arg0: boolean): void;
        getMargin(): $Insets;
        setMargin(arg0: $Insets): void;
        addActionListener(arg0: $ActionListener_): void;
        setFocusPainted(arg0: boolean): void;
        getHorizontalAlignment(): number;
        setHorizontalAlignment(arg0: number): void;
        /**
         * @deprecated
         */
        setLabel(arg0: string): void;
        /**
         * @deprecated
         */
        getLabel(): string;
        getText(): string;
        setText(arg0: string): void;
        getIcon(): $Icon;
        isSelected(): boolean;
        getAction(): $Action;
        getModel(): $ButtonModel;
        setIcon(arg0: $Icon): void;
        setSelected(arg0: boolean): void;
        static ROLLOVER_ENABLED_CHANGED_PROPERTY: string;
        static ROLLOVER_ICON_CHANGED_PROPERTY: string;
        static CONTENT_AREA_FILLED_CHANGED_PROPERTY: string;
        static BOTTOM_ALIGNMENT: number;
        static MODEL_CHANGED_PROPERTY: string;
        static SELECTED_ICON_CHANGED_PROPERTY: string;
        static ICON_CHANGED_PROPERTY: string;
        static ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY: string;
        static FOCUS_PAINTED_CHANGED_PROPERTY: string;
        static WHEN_FOCUSED: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static TEXT_CHANGED_PROPERTY: string;
        static VERTICAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        static DISABLED_SELECTED_ICON_CHANGED_PROPERTY: string;
        static VERTICAL_ALIGNMENT_CHANGED_PROPERTY: string;
        static PRESSED_ICON_CHANGED_PROPERTY: string;
        static DISABLED_ICON_CHANGED_PROPERTY: string;
        static HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        static MARGIN_CHANGED_PROPERTY: string;
        static BORDER_PAINTED_CHANGED_PROPERTY: string;
        static CENTER_ALIGNMENT: number;
        static HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY: string;
        static UNDEFINED_CONDITION: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static LEFT_ALIGNMENT: number;
        static MNEMONIC_CHANGED_PROPERTY: string;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        get itemListeners(): $ItemListener[];
        get selectedObjects(): $Object[];
        get changeListeners(): $ChangeListener[];
        get actionListeners(): $ActionListener[];
    }
    export class $ListSelectionModel {
        static MULTIPLE_INTERVAL_SELECTION: number;
        static SINGLE_INTERVAL_SELECTION: number;
        static SINGLE_SELECTION: number;
    }
    export interface $ListSelectionModel {
        insertIndexInterval(arg0: number, arg1: number, arg2: boolean): void;
        removeIndexInterval(arg0: number, arg1: number): void;
        getSelectedItemsCount(): number;
        clearSelection(): void;
        getSelectionMode(): number;
        getSelectedIndices(): number[];
        getAnchorSelectionIndex(): number;
        getLeadSelectionIndex(): number;
        setAnchorSelectionIndex(arg0: number): void;
        setLeadSelectionIndex(arg0: number): void;
        setSelectionInterval(arg0: number, arg1: number): void;
        isSelectedIndex(arg0: number): boolean;
        addListSelectionListener(arg0: $ListSelectionListener_): void;
        removeListSelectionListener(arg0: $ListSelectionListener_): void;
        setSelectionMode(arg0: number): void;
        getMinSelectionIndex(): number;
        getMaxSelectionIndex(): number;
        isSelectionEmpty(): boolean;
        addSelectionInterval(arg0: number, arg1: number): void;
        removeSelectionInterval(arg0: number, arg1: number): void;
        setValueIsAdjusting(arg0: boolean): void;
        getValueIsAdjusting(): boolean;
        get selectedItemsCount(): number;
        get selectedIndices(): number[];
        get minSelectionIndex(): number;
        get maxSelectionIndex(): number;
        get selectionEmpty(): boolean;
    }
}
