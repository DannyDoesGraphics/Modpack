import { $LevelRenderer } from "@package/net/minecraft/client/renderer";

declare module "@package/dev/ryanhcode/offroad/mixin/client/multimining_destruction_progress" {
    export class $ClientLevelAccessor {
    }
    export interface $ClientLevelAccessor {
        getLevelRenderer(): $LevelRenderer;
        get levelRenderer(): $LevelRenderer;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelAccessor}.
     */
    export type $ClientLevelAccessor_ = (() => $LevelRenderer);
}
