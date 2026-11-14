import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $LongOpenHashSet, $Long2ReferenceOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Mob } from "@package/net/minecraft/world/entity";
import { $GameEventListenerRegistry } from "@package/net/minecraft/world/level/gameevent";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $ReferenceOpenHashSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$Provider, $BlockPos$MutableBlockPos } from "@package/net/minecraft/core";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $Iterable, $Iterable_, $Record } from "@package/java/lang";
import { $SectionedEntityMovementTracker } from "@package/net/caffeinemc/mods/lithium/common/tracking/entity";
import { $ChunkSectionChangeCallback, $SectionedBlockChangeTracker } from "@package/net/caffeinemc/mods/lithium/common/tracking/block";
import { $LithiumInterner } from "@package/net/caffeinemc/mods/lithium/common/util/deduplication";
import { $EntityAccess } from "@package/net/minecraft/world/level/entity";
export * as interests from "@package/net/caffeinemc/mods/lithium/common/world/interests";
export * as block_pattern_matching from "@package/net/caffeinemc/mods/lithium/common/world/block_pattern_matching";
export * as blockentity from "@package/net/caffeinemc/mods/lithium/common/world/blockentity";
export * as chunk from "@package/net/caffeinemc/mods/lithium/common/world/chunk";
export * as listeners from "@package/net/caffeinemc/mods/lithium/common/world/listeners";

declare module "@package/net/caffeinemc/mods/lithium/common/world" {
    export class $LithiumData$Data extends $Record {
        blockChangeTrackers(): $LithiumInterner<$SectionedBlockChangeTracker>;
        entityMovementTrackers(): $LithiumInterner<$SectionedEntityMovementTracker<never, never>>;
        chunkSectionChangeCallbacks(): $Long2ReferenceOpenHashMap<$ChunkSectionChangeCallback>;
        activeNavigations(): $ReferenceOpenHashSet<$PathNavigation>;
        gameEventDispatchers(): $GameEventDispatcherStorage;
        ominousBanner(): $ItemStack;
        constructor(gameEventDispatchers: $GameEventDispatcherStorage_, ominousBanner: $ItemStack_, activeNavigations: $ReferenceOpenHashSet<$PathNavigation>, blockChangeTrackers: $LithiumInterner<$SectionedBlockChangeTracker>, entityMovementTrackers: $LithiumInterner<$SectionedEntityMovementTracker<never, never>>, chunkSectionChangeCallbacks: $Long2ReferenceOpenHashMap<$ChunkSectionChangeCallback>);
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $LithiumData$Data}.
     */
    export type $LithiumData$Data_ = { chunkSectionChangeCallbacks?: $Long2ReferenceOpenHashMap<$ChunkSectionChangeCallback>, entityMovementTrackers?: $LithiumInterner<$SectionedEntityMovementTracker<never, never>>, activeNavigations?: $ReferenceOpenHashSet<$PathNavigation>, gameEventDispatchers?: $GameEventDispatcherStorage_, blockChangeTrackers?: $LithiumInterner<$SectionedBlockChangeTracker>, ominousBanner?: $ItemStack_,  } | [chunkSectionChangeCallbacks?: $Long2ReferenceOpenHashMap<$ChunkSectionChangeCallback>, entityMovementTrackers?: $LithiumInterner<$SectionedEntityMovementTracker<never, never>>, activeNavigations?: $ReferenceOpenHashSet<$PathNavigation>, gameEventDispatchers?: $GameEventDispatcherStorage_, blockChangeTrackers?: $LithiumInterner<$SectionedBlockChangeTracker>, ominousBanner?: $ItemStack_, ];
    export class $ChunkAwareEntityIterable<T extends $EntityAccess> {
    }
    export interface $ChunkAwareEntityIterable<T extends $EntityAccess> {
        lithium$IterateEntitiesInTrackedSections(): $Iterable<T>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkAwareEntityIterable}.
     */
    export type $ChunkAwareEntityIterable_<T> = (() => $Iterable_<T>);
    export class $LithiumData {
    }
    export interface $LithiumData {
        lithium$getData(): $LithiumData$Data;
    }
    /**
     * Values that may be interpreted as {@link $LithiumData}.
     */
    export type $LithiumData_ = (() => $LithiumData$Data_);
    export class $ChunkView {
    }
    export interface $ChunkView {
        lithium$getLoadedChunk(arg0: number, arg1: number): $ChunkAccess;
    }
    /**
     * Values that may be interpreted as {@link $ChunkView}.
     */
    export type $ChunkView_ = ((arg0: number, arg1: number) => $ChunkAccess);
    export class $ServerWorldExtended {
    }
    export interface $ServerWorldExtended {
        lithium$setNavigationActive(arg0: $Mob): void;
        lithium$setNavigationInactive(arg0: $Mob): void;
    }
    export class $ChunkRandomSource {
    }
    export interface $ChunkRandomSource {
        lithium$getRandomPosInChunk(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $BlockPos$MutableBlockPos): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkRandomSource}.
     */
    export type $ChunkRandomSource_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: $BlockPos$MutableBlockPos) => void);
    export class $GameEventDispatcherStorage extends $Record {
        removeChunk(arg0: number): void;
        addChunk(arg0: number, arg1: $Int2ObjectMap<$GameEventListenerRegistry>): void;
        loadedChunks(): $LongOpenHashSet;
        get(arg0: number): $Int2ObjectMap<$GameEventListenerRegistry>;
        replace(arg0: number, arg1: $Int2ObjectMap<$GameEventListenerRegistry>): void;
        storage(): $Long2ReferenceOpenHashMap<$Int2ObjectMap<$GameEventListenerRegistry>>;
        constructor();
        constructor(storage: $Long2ReferenceOpenHashMap<$Int2ObjectMap<$GameEventListenerRegistry>>, loadedChunks: $LongOpenHashSet);
    }
    /**
     * Values that may be interpreted as {@link $GameEventDispatcherStorage}.
     */
    export type $GameEventDispatcherStorage_ = { loadedChunks?: $LongOpenHashSet, storage?: $Long2ReferenceOpenHashMap<$Int2ObjectMap<$GameEventListenerRegistry>>,  } | [loadedChunks?: $LongOpenHashSet, storage?: $Long2ReferenceOpenHashMap<$Int2ObjectMap<$GameEventListenerRegistry>>, ];
}
