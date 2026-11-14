import { $List_, $List } from "@package/java/util";
import { $FormattedCharSequence, $FormattedCharSequence_ } from "@package/net/minecraft/util";

declare module "@package/traben/entity_texture_features/mixin/mixins/accessor" {
    export class $TooltipAccessor {
    }
    export interface $TooltipAccessor {
        setCachedTooltip(arg0: $List_<$FormattedCharSequence_>): void;
        set cachedTooltip(value: $List_<$FormattedCharSequence_>);
    }
    /**
     * Values that may be interpreted as {@link $TooltipAccessor}.
     */
    export type $TooltipAccessor_ = ((arg0: $List<$FormattedCharSequence>) => void);
}
