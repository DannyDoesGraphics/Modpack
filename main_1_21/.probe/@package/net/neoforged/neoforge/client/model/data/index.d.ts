import { $BlockAndTintGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Long2ObjectFunction, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $BitSet, $List_, $Set } from "@package/java/util";
import { $ChunkEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $SodiumModelData } from "@package/net/caffeinemc/mods/sodium/client/services";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/neoforged/neoforge/client/model/data" {
    /**
     * A manager for the lifecycle of all the `ModelData` instances in a `Level`.
     * 
     * Users should not instantiate this unless they know what they are doing. The manager is also not thread-safe,
     * it should only be interacted with on the main client thread.
     */
    export class $ModelDataManager {
        static onChunkUnload(event: $ChunkEvent$Unload): void;
        /**
         * Request a refresh of the stored data for the given `BlockEntity`. The given `BlockEntity`
         * must be in the level owning this manager
         */
        requestRefresh(blockEntity: $BlockEntity): void;
        /**
         * Snapshot the state of this manager for all sections in the volume specified by the given section coordinates.
         * The snapshot will return `ModelData#EMPTY` for nonexistent keys.
         */
        snapshotSectionRegion(sectionMinX: number, sectionMinY: number, sectionMinZ: number, sectionMaxX: number, sectionMaxY: number, sectionMaxZ: number): $Long2ObjectFunction<$ModelData>;
        /**
         * Retrieves model data for a block at the given position.
         */
        getAt(pos: $BlockPos_): $ModelData;
        /**
         * Provides all the model data for a given chunk section. This is useful for mods which wish to retrieve
         * a fast view of the model data for a single section in a level.
         * 
         * The returned map must be copied if it needs to be accessed from another thread, as it may be modified
         * by this data manager.
         */
        getAt(pos: $SectionPos): $Long2ObjectMap<$ModelData>;
        static EMPTY_SNAPSHOT: $Long2ObjectFunction<$ModelData>;
        constructor(level: $Level_);
    }
    export class $MultipartModelData {
        /**
         * Helper to get the data from a `ModelData` instance.
         */
        static resolve(modelData: $ModelData, model: $BakedModel): $ModelData;
        static create(selectors: $List_<$Pair<$Predicate_<$BlockState>, $BakedModel>>, bitset: $BitSet, level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, tileModelData: $ModelData): $ModelData;
        constructor();
    }
    /**
     * A container for data to be passed to `BakedModel` instances.
     * 
     * All objects stored in here **MUST BE IMMUTABLE OR THREAD-SAFE**.
     * Properties will be accessed from another thread.
     */
    export class $ModelData implements $SodiumModelData {
        derive(): $ModelData$Builder;
        get<T>(arg0: $ModelProperty<T>): T;
        static of<T>(arg0: $ModelProperty<T>, arg1: T): $ModelData;
        static builder(): $ModelData$Builder;
        getProperties(): $Set<$ModelProperty<never>>;
        has(property: $ModelProperty<never>): boolean;
        static EMPTY: $ModelData;
        get properties(): $Set<$ModelProperty<never>>;
    }
    export class $ModelData$Builder {
        "with"<T>(arg0: $ModelProperty<T>, arg1: T): $ModelData$Builder;
        build(): $ModelData;
    }
    /**
     * A property to be used in `ModelData`.
     * 
     * May optionally validate incoming values.
     */
    export class $ModelProperty<T> implements $Predicate<T> {
        test(arg0: T): boolean;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor();
        constructor(predicate: $Predicate_<T>);
    }
}
