import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Class } from "@package/java/lang";
import { $WorldSectionBox_ } from "@package/net/caffeinemc/mods/lithium/common/util/tuples";
import { $EntitySectionStorage, $EntityAccess } from "@package/net/minecraft/world/level/entity";

declare module "@package/net/caffeinemc/mods/lithium/common/tracking/entity" {
    export class $SectionedEntityMovementTracker<E extends $EntityAccess, S> {
        onSectionEnteredRange(arg0: $EntityMovementTrackerSection): void;
        onSectionLeftRange(arg0: $EntityMovementTrackerSection): void;
        emitEntityMovement(arg0: number, arg1: $EntityMovementTrackerSection): void;
        isUnchangedSince(arg0: number): boolean;
        unRegister(arg0: $ServerLevel): void;
        listenToEntityMovementOnce(arg0: $SectionedEntityMovementListener_): void;
        register(arg0: $ServerLevel): void;
        constructor(arg0: $WorldSectionBox_, arg1: $Class<S>);
    }
    export class $ToggleableMovementTracker {
    }
    export interface $ToggleableMovementTracker {
        lithium$setNotificationMask(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ToggleableMovementTracker}.
     */
    export type $ToggleableMovementTracker_ = ((arg0: number) => number);
    export class $EntityMovementTrackerSection {
    }
    export interface $EntityMovementTrackerSection {
        lithium$addListener(arg0: $SectionedEntityMovementTracker<never, never>): void;
        lithium$removeListener(arg0: $EntitySectionStorage<never>, arg1: $SectionedEntityMovementTracker<never, never>): void;
        lithium$trackEntityMovement(arg0: number, arg1: number): void;
        lithium$getChangeTime(arg0: number): number;
        lithium$listenToMovementOnce<S, E extends $EntityAccess>(arg0: $SectionedEntityMovementTracker<E, S>, arg1: number): void;
        lithium$removeListenToMovementOnce<S, E extends $EntityAccess>(arg0: $SectionedEntityMovementTracker<E, S>, arg1: number): void;
    }
    export class $SectionedEntityMovementListener {
    }
    export interface $SectionedEntityMovementListener {
        lithium$handleEntityMovement(arg0: $Class<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $SectionedEntityMovementListener}.
     */
    export type $SectionedEntityMovementListener_ = ((arg0: $Class<never>) => void);
}
