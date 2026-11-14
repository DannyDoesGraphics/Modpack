import { $BundleContents } from "@package/net/minecraft/world/item/component";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/world/inventory/tooltip" {
    export class $TooltipComponent {
    }
    export interface $TooltipComponent {
    }
    export class $BundleTooltip extends $Record implements $TooltipComponent {
        contents(): $BundleContents;
        constructor(arg0: $BundleContents);
    }
    /**
     * Values that may be interpreted as {@link $BundleTooltip}.
     */
    export type $BundleTooltip_ = { contents?: $BundleContents,  } | [contents?: $BundleContents, ];
}
