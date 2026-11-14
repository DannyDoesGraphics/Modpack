import { $Set, $Set_ } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/dev/ryanhcode/sable/mixin/sublevel_render" {
    export class $RenderSectionAccessor {
    }
    export interface $RenderSectionAccessor {
        getGlobalBlockEntities(): $Set<$BlockEntity>;
        get globalBlockEntities(): $Set<$BlockEntity>;
    }
    /**
     * Values that may be interpreted as {@link $RenderSectionAccessor}.
     */
    export type $RenderSectionAccessor_ = (() => $Set_<$BlockEntity>);
}
