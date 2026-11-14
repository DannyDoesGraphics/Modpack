import { $Enum } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/common/enums" {
    export class $BubbleColumnDirection extends $Enum<$BubbleColumnDirection> {
        static values(): $BubbleColumnDirection[];
        static valueOf(arg0: string): $BubbleColumnDirection;
        static DOWNWARD: $BubbleColumnDirection;
        static UPWARD: $BubbleColumnDirection;
        static NONE: $BubbleColumnDirection;
    }
    /**
     * Values that may be interpreted as {@link $BubbleColumnDirection}.
     */
    export type $BubbleColumnDirection_ = "upward" | "downward" | "none";
}
