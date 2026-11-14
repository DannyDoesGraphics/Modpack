import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntitySectionStorage, $PersistentEntitySectionManager, $EntityAccess } from "@package/net/minecraft/world/level/entity";
import { $ClassInstanceMultiMap } from "@package/net/minecraft/util";

declare module "@package/net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/spawning" {
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
    export class $EntitySectionAccessor<T> {
    }
    export interface $EntitySectionAccessor<T> {
        getCollection(): $ClassInstanceMultiMap<T>;
        get collection(): $ClassInstanceMultiMap<T>;
    }
    /**
     * Values that may be interpreted as {@link $EntitySectionAccessor}.
     */
    export type $EntitySectionAccessor_<T> = (() => $ClassInstanceMultiMap<T>);
}
