import { $Entity } from "@package/net/minecraft/world/entity";
import { $LevelEntityGetter } from "@package/net/minecraft/world/level/entity";

declare module "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/super_glue" {
    export class $LevelAccessor {
    }
    export interface $LevelAccessor {
        invokeGetEntities(): $LevelEntityGetter<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $LevelAccessor}.
     */
    export type $LevelAccessor_ = (() => $LevelEntityGetter<$Entity>);
}
