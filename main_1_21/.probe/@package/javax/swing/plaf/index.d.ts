import { $Rectangle2D, $Point2D } from "@package/java/awt/geom";
import { $MouseEvent } from "@package/java/awt/event";
import { $JTextComponent, $Position$Bias, $EditorKit, $View } from "@package/javax/swing/text";
import { $Point, $Graphics, $Component$BaselineResizeBehavior, $Dimension, $Rectangle } from "@package/java/awt";
import { $Accessible } from "@package/javax/accessibility";
import { $JComponent, $JPopupMenu, $Popup, $JList } from "@package/javax/swing";

declare module "@package/javax/swing/plaf" {
    export class $MenuBarUI extends $ComponentUI {
    }
    export class $RootPaneUI extends $ComponentUI {
    }
    export class $ListUI extends $ComponentUI {
        locationToIndex(arg0: $JList<never>, arg1: $Point): number;
        getCellBounds(arg0: $JList<never>, arg1: number, arg2: number): $Rectangle;
        indexToLocation(arg0: $JList<never>, arg1: number): $Point;
    }
    export class $ScrollPaneUI extends $ComponentUI {
    }
    export class $ViewportUI extends $ComponentUI {
    }
    export class $ScrollBarUI extends $ComponentUI {
    }
    export class $MenuItemUI extends $ButtonUI {
    }
    export class $ButtonUI extends $ComponentUI {
    }
    export class $ComponentUI {
        static createUI(arg0: $JComponent): $ComponentUI;
        paint(arg0: $Graphics, arg1: $JComponent): void;
        getPreferredSize(arg0: $JComponent): $Dimension;
        getAccessibleChildrenCount(arg0: $JComponent): number;
        getAccessibleChild(arg0: $JComponent, arg1: number): $Accessible;
        installUI(arg0: $JComponent): void;
        uninstallUI(arg0: $JComponent): void;
        getMaximumSize(arg0: $JComponent): $Dimension;
        getMinimumSize(arg0: $JComponent): $Dimension;
        getBaseline(arg0: $JComponent, arg1: number, arg2: number): number;
        getBaselineResizeBehavior(arg0: $JComponent): $Component$BaselineResizeBehavior;
        update(arg0: $Graphics, arg1: $JComponent): void;
        contains(arg0: $JComponent, arg1: number, arg2: number): boolean;
        constructor();
    }
    export class $PopupMenuUI extends $ComponentUI {
        getPopup(arg0: $JPopupMenu, arg1: number, arg2: number): $Popup;
        isPopupTrigger(arg0: $MouseEvent): boolean;
    }
    export class $TextUI extends $ComponentUI {
        getEditorKit(arg0: $JTextComponent): $EditorKit;
        /**
         * @deprecated
         */
        viewToModel(arg0: $JTextComponent, arg1: $Point, arg2: $Position$Bias[]): number;
        /**
         * @deprecated
         */
        viewToModel(arg0: $JTextComponent, arg1: $Point): number;
        /**
         * @deprecated
         */
        modelToView(arg0: $JTextComponent, arg1: number): $Rectangle;
        /**
         * @deprecated
         */
        modelToView(arg0: $JTextComponent, arg1: number, arg2: $Position$Bias): $Rectangle;
        modelToView2D(arg0: $JTextComponent, arg1: number, arg2: $Position$Bias): $Rectangle2D;
        viewToModel2D(arg0: $JTextComponent, arg1: $Point2D, arg2: $Position$Bias[]): number;
        damageRange(arg0: $JTextComponent, arg1: number, arg2: number, arg3: $Position$Bias, arg4: $Position$Bias): void;
        damageRange(arg0: $JTextComponent, arg1: number, arg2: number): void;
        getRootView(arg0: $JTextComponent): $View;
        getToolTipText2D(arg0: $JTextComponent, arg1: $Point2D): string;
        getNextVisualPositionFrom(arg0: $JTextComponent, arg1: number, arg2: $Position$Bias, arg3: number, arg4: $Position$Bias[]): number;
        /**
         * @deprecated
         */
        getToolTipText(arg0: $JTextComponent, arg1: $Point): string;
    }
}
