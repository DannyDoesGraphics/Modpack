import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Collection } from "@package/java/util";
import { $AABB, $AABB_, $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/neoforged/neoforge/common/ticket" {
    export class $ChunkTicketManager<T> implements $ITicketGetter<T> {
        getTickets(): $Collection<$SimpleTicket<T>>;
        remove(ticket: $SimpleTicket<T>): void;
        add(ticket: $SimpleTicket<T>): void;
        pos: $ChunkPos;
        constructor(pos: $ChunkPos);
        get tickets(): $Collection<$SimpleTicket<T>>;
    }
    export class $ITicketGetter<T> {
    }
    export interface $ITicketGetter<T> extends $ITicketManager<T> {
        getTickets(): $Collection<$SimpleTicket<T>>;
        get tickets(): $Collection<$SimpleTicket<T>>;
    }
    /**
     * Common class for a simple ticket based system.
     */
    export class $SimpleTicket<T> {
        setManager(arg0: $ITicketManager<T>, ...arg1: $ITicketManager<T>[]): void;
        matches(arg0: T): boolean;
        /**
         * Removes the ticket from the managing system.
         * After this call, any calls to `#isValid()` should return false unless it is registered again using `#validate()`
         */
        validate(): void;
        /**
         * Called by the managing system when a ticket wishes to unload all of it's tickets, e.g. on chunk unload
         * 
         * The ticket must not remove itself from the manager that is calling the unload!
         * The ticket must ensure that it removes itself from all of it's dummies when returning true
         */
        unload(unloadingManager: $ITicketManager<T>): boolean;
        /**
         * Checks if your ticket is still registered in the system.
         */
        isValid(): boolean;
        /**
         * Removes the ticket from the managing system.
         * After this call, any calls to `#isValid()` should return false unless it is registered again using `#validate()`
         */
        invalidate(): void;
        constructor();
        get valid(): boolean;
    }
    export class $AABBTicket extends $SimpleTicket<$Vec3> {
        matches(toMatch: $Vec3_): boolean;
        axisAlignedBB: $AABB;
        constructor(axisAlignedBB: $AABB_);
    }
    export class $ITicketManager<T> {
    }
    export interface $ITicketManager<T> {
        remove(ticket: $SimpleTicket<T>): void;
        add(ticket: $SimpleTicket<T>): void;
    }
}
