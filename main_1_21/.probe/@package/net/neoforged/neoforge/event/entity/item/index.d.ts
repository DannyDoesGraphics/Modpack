import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";

declare module "@package/net/neoforged/neoforge/event/entity/item" {
    /**
     * Event that is fired when an `ItemEntity`'s age has reached its maximum
     * lifespan. Adding extra life time will prevent the `ItemEntity` from being
     * flagged as dead, thus staying its removal from the world.
     * 
     * Note that using this event, you can ony extend the lifespan up to `Short#MAX_VALUE` - 1 ticks (27.5 minutes).
     * To extend an item's lifespan above that, use either `ItemEntity#setExtendedLifetime()`
     * or `ItemEntity#setUnlimitedLifetime`.
     * 
     * This event will only be fired server-side.
     */
    export class $ItemExpireEvent extends $ItemEvent {
        /**
         * Query the amount of extra time that will be added.
         * 
         * Note that this is the event result. If you need data from the entity, query it directly.
         * `ItemEntity#lifespan` is the entities maximum lifespan and also its current age.
         */
        getExtraLife(): number;
        /**
         * Sets the amount of extra life time (in ticks) to give this `ItemEntity`.
         * 
         * *Consider using `#addExtraLife(int)` in case another mod also adds extra time.*
         */
        setExtraLife(extraLife: number): void;
        /**
         * Sets the amount of extra life time (in ticks) to give this `ItemEntity`.
         * 
         * *Consider using `#addExtraLife(int)` in case another mod also adds extra time.*
         */
        addExtraLife(extraLife: number): void;
        /**
         * Creates a new event for an expiring `ItemEntity`.
         */
        constructor(itemEntity: $ItemEntity);
    }
    /**
     * Event that is fired whenever a player tosses (Q) an item or drag-n-drops a
     * stack of items outside the inventory GUI screens. Canceling the event will
     * stop the items from entering the world, but will not prevent them being
     * removed from the inventory - and thus removed from the system.
     */
    export class $ItemTossEvent extends $ItemEvent implements $ICancellableEvent {
        /**
         * The player tossing the item.
         */
        getPlayer(): $Player;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        /**
         * Creates a new event for EntityItems tossed by a player.
         */
        constructor(entityItem: $ItemEntity, player: $Player);
        get player(): $Player;
    }
    /**
     * Base class for all `ItemEntity` events. Contains a reference to the
     * ItemEntity of interest. For most ItemEntity events, there's little to no
     * additional useful data from the firing method that isn't already contained
     * within the ItemEntity instance.
     */
    export class $ItemEvent extends $EntityEvent {
        /**
         * The relevant `ItemEntity` for this event.
         */
        getEntity(): $ItemEntity;
        /**
         * Creates a new event for an `ItemEntity`.
         */
        constructor(itemEntity: $ItemEntity);
        get entity(): $ItemEntity;
    }
}
