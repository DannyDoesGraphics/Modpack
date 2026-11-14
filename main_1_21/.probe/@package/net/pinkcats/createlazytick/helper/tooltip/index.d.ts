import { $ChatFormatting } from "@package/net/minecraft";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/net/pinkcats/createlazytick/helper/tooltip" {
    export class $LazyTickTier extends $Enum<$LazyTickTier> {
        getDisplayComponents(arg0: number, arg1: number, arg2: number): $List<$Component>;
        static fromTicks(arg0: number, arg1: number): $LazyTickTier;
        createStatsComponent(arg0: number, arg1: number): $MutableComponent;
        static values(): $LazyTickTier[];
        static valueOf(arg0: string): $LazyTickTier;
        static DEEP: $LazyTickTier;
        static ACTIVE: $LazyTickTier;
        static MEDIUM: $LazyTickTier;
        color: $ChatFormatting;
        static LIGHT: $LazyTickTier;
    }
    /**
     * Values that may be interpreted as {@link $LazyTickTier}.
     */
    export type $LazyTickTier_ = "active" | "light" | "medium" | "deep";
}
