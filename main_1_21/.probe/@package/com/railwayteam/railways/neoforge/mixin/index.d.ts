import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $ServerPlayerConnection } from "@package/net/minecraft/server/network";
import { $Set, $Set_ } from "@package/java/util";

declare module "@package/com/railwayteam/railways/neoforge/mixin" {
    export class $ContainerLevelAccessMixin {
    }
    export interface $ContainerLevelAccessMixin {
    }
    export class $ChunkMapAccessor$TrackedEntityAccessor {
    }
    export interface $ChunkMapAccessor$TrackedEntityAccessor {
        getSeenBy(): $Set<$ServerPlayerConnection>;
        get seenBy(): $Set<$ServerPlayerConnection>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkMapAccessor$TrackedEntityAccessor}.
     */
    export type $ChunkMapAccessor$TrackedEntityAccessor_ = (() => $Set_<$ServerPlayerConnection>);
    export class $ChunkMapAccessor {
    }
    export interface $ChunkMapAccessor {
        getEntityMap(): $Int2ObjectMap<never>;
        get entityMap(): $Int2ObjectMap<never>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkMapAccessor}.
     */
    export type $ChunkMapAccessor_ = (() => $Int2ObjectMap<never>);
}
