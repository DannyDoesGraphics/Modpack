import { $Enum } from "@package/java/lang";
import { $Point } from "@package/appeng/client";

declare module "@package/appeng/client/gui/layout" {
    export class $SlotGridLayout extends $Enum<$SlotGridLayout> {
        static values(): $SlotGridLayout[];
        static valueOf(arg0: string): $SlotGridLayout;
        getPosition(arg0: number, arg1: number, arg2: number): $Point;
        static IO_BUS_CONFIG: $SlotGridLayout;
        static VERTICAL: $SlotGridLayout;
        static BREAK_AFTER_9COLS: $SlotGridLayout;
        static HORIZONTAL: $SlotGridLayout;
        static BREAK_AFTER_2COLS: $SlotGridLayout;
        static BREAK_AFTER_3COLS: $SlotGridLayout;
    }
    /**
     * Values that may be interpreted as {@link $SlotGridLayout}.
     */
    export type $SlotGridLayout_ = "io_bus_config" | "break_after_9cols" | "break_after_3cols" | "break_after_2cols" | "horizontal" | "vertical";
}
