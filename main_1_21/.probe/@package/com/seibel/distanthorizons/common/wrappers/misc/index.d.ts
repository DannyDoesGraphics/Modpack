import { $ServerLevel } from "@package/net/minecraft/server/level";

declare module "@package/com/seibel/distanthorizons/common/wrappers/misc" {
    export class $IMixinServerPlayer_neoforge {
    }
    export interface $IMixinServerPlayer_neoforge {
        distantHorizons$getDimensionChangeDestination(): $ServerLevel;
    }
    /**
     * Values that may be interpreted as {@link $IMixinServerPlayer_neoforge}.
     */
    export type $IMixinServerPlayer_neoforge_ = (() => $ServerLevel);
}
