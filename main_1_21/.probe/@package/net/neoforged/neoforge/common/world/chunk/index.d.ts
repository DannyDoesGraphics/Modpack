import { $ForcedChunksSavedData } from "@package/net/minecraft/world/level";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $UUID_, $UUID, $Map } from "@package/java/util";
import { $Comparable, $Record } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/net/neoforged/neoforge/common/world/chunk" {
    export class $ForcedChunkManager$TicketOwner<T extends $Comparable<T>> implements $Comparable<$ForcedChunkManager$TicketOwner<T>> {
    }
    export class $TicketController extends $Record {
        forceChunk(arg0: $ServerLevel, arg1: $BlockPos_, arg2: number, arg3: number, arg4: boolean, arg5: boolean): boolean;
        forceChunk(arg0: $ServerLevel, arg1: $UUID_, arg2: number, arg3: number, arg4: boolean, arg5: boolean): boolean;
        forceChunk(arg0: $ServerLevel, arg1: $Entity, arg2: number, arg3: number, arg4: boolean, arg5: boolean): boolean;
        id(): $ResourceLocation;
        callback(): $LoadingValidationCallback;
        constructor(id: $ResourceLocation_, callback: $LoadingValidationCallback_);
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $TicketController}.
     */
    export type $TicketController_ = { id?: $ResourceLocation_, callback?: $LoadingValidationCallback_,  } | [id?: $ResourceLocation_, callback?: $LoadingValidationCallback_, ];
    export class $LoadingValidationCallback {
    }
    export interface $LoadingValidationCallback {
        /**
         * Called back when tickets are about to be loaded and reinstated to allow mods to invalidate and remove specific tickets that may no longer be valid.
         */
        validateTickets(level: $ServerLevel, ticketHelper: $TicketHelper): void;
    }
    /**
     * Values that may be interpreted as {@link $LoadingValidationCallback}.
     */
    export type $LoadingValidationCallback_ = ((arg0: $ServerLevel, arg1: $TicketHelper) => void);
    /**
     * Fired in order to register chunk ticket controllers.
     * This event is fired on the mod-specific event bus.
     */
    export class $RegisterTicketControllersEvent extends $Event implements $IModBusEvent {
        /**
         * Registers a controller.
         */
        register(controller: $TicketController_): void;
    }
    export class $TicketSet extends $Record {
        nonTicking(): $LongSet;
        ticking(): $LongSet;
        constructor(nonTicking: $LongSet, ticking: $LongSet);
    }
    /**
     * Values that may be interpreted as {@link $TicketSet}.
     */
    export type $TicketSet_ = { nonTicking?: $LongSet, ticking?: $LongSet,  } | [nonTicking?: $LongSet, ticking?: $LongSet, ];
    /**
     * Class to help mods remove no longer valid tickets.
     */
    export class $TicketHelper {
        /**
         * @return all "BLOCK" tickets this controller had registered and which block positions are forcing which chunks
         */
        getBlockTickets(): $Map<$BlockPos, $TicketSet>;
        /**
         * @return all "BLOCK" tickets this controller had registered and which block positions are forcing which chunks
         */
        getEntityTickets(): $Map<$UUID, $TicketSet>;
        /**
         * Removes all tickets that a given block was responsible for; both ticking and not ticking.
         */
        removeAllTickets(owner: $BlockPos_): void;
        /**
         * Removes all tickets that a given entity (UUID) was responsible for; both ticking and not ticking.
         */
        removeAllTickets(owner: $UUID_): void;
        /**
         * Removes the ticket for the given chunk that a given entity (UUID) was responsible for.
         */
        removeTicket(owner: $UUID_, chunk: number, ticking: boolean): void;
        /**
         * Removes the ticket for the given chunk that a given block was responsible for.
         */
        removeTicket(owner: $BlockPos_, chunk: number, ticking: boolean): void;
        get blockTickets(): $Map<$BlockPos, $TicketSet>;
        get entityTickets(): $Map<$UUID, $TicketSet>;
    }
    /**
     * Helper class to manage tracking and handling loaded tickets.
     */
    export class $ForcedChunkManager$TicketTracker<T extends $Comparable<T>> {
        /**
         * Gets an unmodifiable view of the tracked chunks.
         */
        getTickingChunks(): $Map<$ForcedChunkManager$TicketOwner<T>, $LongSet>;
        /**
         * Gets an unmodifiable view of the tracked chunks.
         */
        getChunks(): $Map<$ForcedChunkManager$TicketOwner<T>, $LongSet>;
        remove(arg0: $ForcedChunkManager$TicketOwner<T>, arg1: number, arg2: boolean): boolean;
        /**
         * Checks if this tracker is empty.
         */
        isEmpty(): boolean;
        constructor();
        get tickingChunks(): $Map<$ForcedChunkManager$TicketOwner<T>, $LongSet>;
        get chunks(): $Map<$ForcedChunkManager$TicketOwner<T>, $LongSet>;
        get empty(): boolean;
    }
    export class $ForcedChunkManager {
        static writeModForcedChunks(arg0: $CompoundTag_, arg1: $ForcedChunkManager$TicketTracker<$BlockPos_>, arg2: $ForcedChunkManager$TicketTracker<$UUID_>): void;
        static readModForcedChunks(arg0: $CompoundTag_, arg1: $ForcedChunkManager$TicketTracker<$BlockPos_>, arg2: $ForcedChunkManager$TicketTracker<$UUID_>): void;
        /**
         * Checks if a level has any forced chunks. Mainly used for seeing if a level should continue ticking with no players in it.
         */
        static hasForcedChunks(level: $ServerLevel): boolean;
        /**
         * Reinstates NeoForge's forced chunks when vanilla initially loads a level and reinstates their forced chunks. This method also will validate all the forced
         * chunks with the registered `LoadingValidationCallback`s.
         */
        static reinstatePersistentChunks(level: $ServerLevel, saveData: $ForcedChunksSavedData): void;
        static init(): void;
        static writeBlockPos(blockpos: $BlockPos_): $CompoundTag;
        constructor();
    }
}
