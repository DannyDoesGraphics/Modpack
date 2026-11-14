import { $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Thread } from "@package/java/lang";
import { $UUID_, $UUID } from "@package/java/util";
import { $EntitySectionStorage, $PersistentEntitySectionManager, $EntityAccess } from "@package/net/minecraft/world/level/entity";
import { $ClassInstanceMultiMap } from "@package/net/minecraft/util";

declare module "@package/net/caffeinemc/mods/lithium/mixin/util/accessors" {
    export class $LevelAccessor {
    }
    export interface $LevelAccessor {
        getThread(): $Thread;
        get thread(): $Thread;
    }
    /**
     * Values that may be interpreted as {@link $LevelAccessor}.
     */
    export type $LevelAccessor_ = (() => $Thread);
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
    export class $ItemStackAccessor {
    }
    export interface $ItemStackAccessor {
        lithium$getItem(): $Item;
    }
    /**
     * Values that may be interpreted as {@link $ItemStackAccessor}.
     */
    export type $ItemStackAccessor_ = (() => $Item_);
    export class $TransientEntitySectionManagerAccessor<T extends $EntityAccess> {
    }
    export interface $TransientEntitySectionManagerAccessor<T extends $EntityAccess> {
        getCache(): $EntitySectionStorage<T>;
        get cache(): $EntitySectionStorage<T>;
    }
    /**
     * Values that may be interpreted as {@link $TransientEntitySectionManagerAccessor}.
     */
    export type $TransientEntitySectionManagerAccessor_<T> = (() => $EntitySectionStorage<T>);
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
    export class $ItemEntityAccessor {
    }
    export interface $ItemEntityAccessor {
        lithium$getOwner(): $UUID;
    }
    /**
     * Values that may be interpreted as {@link $ItemEntityAccessor}.
     */
    export type $ItemEntityAccessor_ = (() => $UUID_);
}
