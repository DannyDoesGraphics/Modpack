import { $Component, $Graphics, $Insets } from "@package/java/awt";

declare module "@package/javax/swing/border" {
    export class $Border {
    }
    export interface $Border {
        isBorderOpaque(): boolean;
        paintBorder(arg0: $Component, arg1: $Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getBorderInsets(arg0: $Component): $Insets;
        get borderOpaque(): boolean;
    }
}
