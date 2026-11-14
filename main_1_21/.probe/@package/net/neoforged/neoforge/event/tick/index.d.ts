import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BooleanSupplier_ } from "@package/java/util/function";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/net/neoforged/neoforge/event/tick" {
    /**
     * Base class of the two player tick events.
     * 
     * These events are separate from `LivingTickEvent` due to the semantics of player ticks.
     * On the client, players tick from the usual `Entity#tick()` method, but on the server, they rely
     * on `ServerPlayer#doTick()` which is called from `ServerGamePacketListenerImpl#tick()`.
     * 
     * Use of these events should only be necessary if you rely on this specific timing.
     */
    export class $PlayerTickEvent extends $PlayerEvent {
    }
    /**
     * `Post` is fired once per server tick, after the server performs work for the current tick.
     * 
     * This event only fires on the logical server.
     */
    export class $ServerTickEvent$Post extends $ServerTickEvent {
        constructor(haveTime: $BooleanSupplier_, server: $MinecraftServer);
    }
    /**
     * `Post` is fired once per game tick, per entity, after the entity performs work for the current tick.
     * 
     * If `Pre` was canceled for the current tick, this event will not fire.
     * 
     * This event fires on both the logical server and logical client.
     */
    export class $EntityTickEvent$Post extends $EntityTickEvent {
        constructor(entity: $Entity);
    }
    /**
     * `Post` is fired once per game tick, per player, after the player performs work for the current tick.
     * 
     * This event will fire on both the logical server and logical client, for subclasses of `Player` on their respective sides.
     * 
     * As such, be sure to check `Level#isClientSide()` before performing any operations.
     */
    export class $PlayerTickEvent$Post extends $PlayerTickEvent {
        constructor(player: $Player);
    }
    /**
     * `Pre` is fired once per server tick, before the server performs work for the current tick.
     * 
     * This event only fires on the logical server.
     */
    export class $ServerTickEvent$Pre extends $ServerTickEvent {
        constructor(haveTime: $BooleanSupplier_, server: $MinecraftServer);
    }
    /**
     * Base class of the two server tick events.
     */
    export class $ServerTickEvent extends $Event {
        /**
         * {@return true if the server has enough time to perform any
         * additional tasks (usually IO related) during the current tick,
         * otherwise false}
         */
        hasTime(): boolean;
        /**
         * @return the server instance
         */
        getServer(): $MinecraftServer;
        get server(): $MinecraftServer;
    }
    /**
     * Base class of the two level tick events.
     */
    export class $LevelTickEvent extends $Event {
        /**
         * On the server, returns true if the server has enough time to perform any
         * additional tasks (usually IO related) during the current tick.
         * 
         * On the client, always returns true.
         */
        hasTime(): boolean;
        /**
         * @return the level being ticked
         */
        getLevel(): $Level;
        get level(): $Level;
    }
    /**
     * `Pre` is fired once per game tick, per level, before the level performs work for the current tick.
     * 
     * This event fires on both the logical client and logical server, for `ClientLevel` and `ServerLevel` respectively.
     */
    export class $LevelTickEvent$Pre extends $LevelTickEvent {
        constructor(haveTime: $BooleanSupplier_, level: $Level_);
    }
    /**
     * Base class of the two entity tick events.
     */
    export class $EntityTickEvent extends $EntityEvent {
    }
    /**
     * `Pre` is fired once per game tick, per player, before the player performs work for the current tick.
     * 
     * This event will fire on both the logical server and logical client, for subclasses of `Player` on their respective sides.
     * 
     * As such, be sure to check `Level#isClientSide()` before performing any operations.
     */
    export class $PlayerTickEvent$Pre extends $PlayerTickEvent {
        constructor(player: $Player);
    }
    /**
     * `Post` is fired once per game tick, per level, after the level performs work for the current tick.
     * 
     * This event fires on both the logical client and logical server, for `ClientLevel` and `ServerLevel` respectively.
     */
    export class $LevelTickEvent$Post extends $LevelTickEvent {
        constructor(haveTime: $BooleanSupplier_, level: $Level_);
    }
    /**
     * `Pre` is fired once per game tick, per entity, before the entity performs work for the current tick.
     * 
     * This event fires on both the logical server and logical client.
     */
    export class $EntityTickEvent$Pre extends $EntityTickEvent implements $ICancellableEvent {
        /**
         * Cancels this event, preventing the current tick from being executed for the entity.
         * 
         * Additionally, if this event is canceled, then `Post` will not be fired for the current tick.
         */
        setCanceled(canceled: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $Entity);
    }
}
