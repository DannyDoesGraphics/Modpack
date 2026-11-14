import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntitySectionStorage, $PersistentEntitySectionManager, $EntityAccess } from "@package/net/minecraft/world/level/entity";

declare module "@package/net/caffeinemc/mods/lithium/mixin/util/entity_movement_tracking" {
    export class $ServerLevelAccessor {
    }
    export interface $ServerLevelAccessor {
        getEntityManager(): $PersistentEntitySectionManager<$Entity>;
        get entityManager(): $PersistentEntitySectionManager<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $ServerLevelAccessor}.
     */
    export type $ServerLevelAccessor_ = (() => $PersistentEntitySectionManager<$Entity>);
    export class $PersistentEntitySectionManagerAccessor<T extends $EntityAccess> {
    }
    export interface $PersistentEntitySectionManagerAccessor<T extends $EntityAccess> {
        getCache(): $EntitySectionStorage<T>;
        get cache(): $EntitySectionStorage<T>;
    }
    /**
     * Values that may be interpreted as {@link $PersistentEntitySectionManagerAccessor}.
     */
    export type $PersistentEntitySectionManagerAccessor_<T> = (() => $EntitySectionStorage<T>);
}
