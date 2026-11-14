import { $Level_, $Level } from "@package/net/minecraft/world/level";

declare module "@package/dev/ryanhcode/sable/mixinterface/world_border" {
    export class $WorldBorderExtension {
    }
    export interface $WorldBorderExtension {
        sable$setLevel(arg0: $Level_): void;
    }
    /**
     * Values that may be interpreted as {@link $WorldBorderExtension}.
     */
    export type $WorldBorderExtension_ = ((arg0: $Level) => void);
}
