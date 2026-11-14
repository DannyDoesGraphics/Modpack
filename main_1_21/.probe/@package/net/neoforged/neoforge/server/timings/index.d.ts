import { $Entity } from "@package/net/minecraft/world/entity";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $WeakReference } from "@package/java/lang/ref";

declare module "@package/net/neoforged/neoforge/server/timings" {
    /**
     * ObjectTimings aggregates timings data collected by `TimeTracker` for an Object
     * and performs operations for interpretation of the data.
     */
    export class $ObjectTimings<T> {
        /**
         * Averages the raw timings data collected
         */
        getAverageTimings(): number;
        /**
         * Retrieves the object that the timings are for
         */
        getObject(): $WeakReference<T>;
        constructor(arg0: T, arg1: number[]);
        get averageTimings(): number;
        get object(): $WeakReference<T>;
    }
    /**
     * A class to assist in the collection of data to measure the update times of ticking objects {currently Tile Entities and Entities}
     */
    export class $TimeTracker<T> {
        /**
         * Returns the timings data recorded by the tracker
         */
        getTimingData(): $ImmutableList<$ObjectTimings<T>>;
        trackStart(arg0: T): void;
        trackEnd(arg0: T): void;
        /**
         * Resets the tracker (clears timings and stops any in-progress timings)
         */
        reset(): void;
        /**
         * Starts recording tracking data for the given duration in seconds
         */
        enable(duration: number): void;
        static ENTITY_UPDATE: $TimeTracker<$Entity>;
        static BLOCK_ENTITY_UPDATE: $TimeTracker<$BlockEntity>;
        constructor();
        get timingData(): $ImmutableList<$ObjectTimings<T>>;
    }
}
