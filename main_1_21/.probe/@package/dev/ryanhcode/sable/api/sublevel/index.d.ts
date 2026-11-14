import { $ChunkPos, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MassTracker } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { $SubLevelPhysicsSystem, $SubLevelTrackingSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $BoundingBox3dc, $BoundingBox3i, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $SubLevelHoldingChunkMap } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $LevelPlot, $PlotChunkHolder } from "@package/dev/ryanhcode/sable/sublevel/plot";
import { $SubLevelRemovalReason_ } from "@package/dev/ryanhcode/sable/sublevel/storage";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $ServerSubLevel, $SubLevel, $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $UUID, $List, $Map, $BitSet, $UUID_, $Collection } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_ } from "@package/java/util/function";
import { $Object2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $ClientSableInterpolationState } from "@package/dev/ryanhcode/sable/network/client";
import { $FloatingClusterContainer } from "@package/dev/ryanhcode/sable/physics/floating_block";
import { $SubLevelLoadingTicketType_, $SubLevelTicketInfo } from "@package/dev/ryanhcode/sable/api/sublevel/ticket";
import { $Iterable } from "@package/java/lang";
import { $BlockSubLevelLiftProvider$LiftProviderContext } from "@package/dev/ryanhcode/sable/api/block";
import { $Vector2i, $Vector3dc, $Quaterniond } from "@package/org/joml";
export * as ticket from "@package/dev/ryanhcode/sable/api/sublevel/ticket";

declare module "@package/dev/ryanhcode/sable/api/sublevel" {
    export class $ClientSubLevelContainer extends $SubLevelContainer {
        addDebugInfo(arg0: $Consumer_<string>): void;
        getInterpolation(): $ClientSableInterpolationState;
        freeLightingScene(arg0: number): void;
        getLightingSceneId(arg0: $ClientSubLevel): number;
        getLevel(): $ClientLevel;
        static DEFAULT_LOG_SIZE_LENGTH: number;
        static DEFAULT_ORIGIN: number;
        static DEFAULT_LOG_PLOT_SIZE: number;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: number);
        get interpolation(): $ClientSableInterpolationState;
        get level(): $ClientLevel;
    }
    export class $SubLevelObserver {
    }
    export interface $SubLevelObserver {
        onSubLevelRemoved(arg0: $SubLevel, arg1: $SubLevelRemovalReason_): void;
        onSubLevelAdded(arg0: $SubLevel): void;
        tick(arg0: $SubLevelContainer): void;
    }
    export class $SubLevelTrackingPlugin {
    }
    export interface $SubLevelTrackingPlugin {
        neededPlayers(): $Iterable<$UUID>;
        sendTrackingData(arg0: number): void;
    }
    export class $KinematicContraption {
    }
    export interface $KinematicContraption {
        sable$liftProviders(): $Map<$BlockPos, $BlockSubLevelLiftProvider$LiftProviderContext>;
        sable$blockGetter(): $BlockGetter;
        sable$getLocalBounds(arg0: $BoundingBox3i): void;
        sable$getMassTracker(): $MassTracker;
        sable$getPosition(): $Vector3dc;
        sable$getPosition(arg0: number): $Vector3dc;
        sable$getOrientation(): $Quaterniond;
        sable$getOrientation(arg0: number): $Quaterniond;
        sable$isValid(): boolean;
        sable$shouldCollide(): boolean;
        sable$getFloatingClusterContainer(): $FloatingClusterContainer;
        sable$getLocalPose(arg0: $Pose3d, arg1: number): $Pose3d;
    }
    export class $ServerSubLevelContainer extends $SubLevelContainer {
        removeForceLoadTicket<T>(arg0: $ServerSubLevel, arg1: $SubLevelLoadingTicketType_<T>, arg2: T): boolean;
        addForceLoadTicket<T>(arg0: $ServerSubLevel, arg1: $SubLevelLoadingTicketType_<T>, arg2: T): boolean;
        collectForceLoadedSubLevels(): $Collection<$ServerSubLevel>;
        getAllTickets(): $Map<$UUID, $SubLevelTicketInfo>;
        loadTickets(arg0: $Object2ObjectMap<$UUID_, $SubLevelTicketInfo>): void;
        physicsSystem(): $SubLevelPhysicsSystem;
        getHoldingChunkMap(): $SubLevelHoldingChunkMap;
        takePhysicsSystem(arg0: $SubLevelPhysicsSystem): void;
        takeTrackingSystem(arg0: $SubLevelTrackingSystem): void;
        trackingSystem(): $SubLevelTrackingSystem;
        initialize(): void;
        close(): void;
        static DEFAULT_LOG_SIZE_LENGTH: number;
        static DEFAULT_ORIGIN: number;
        static DEFAULT_LOG_PLOT_SIZE: number;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: number);
        get allTickets(): $Map<$UUID, $SubLevelTicketInfo>;
        get holdingChunkMap(): $SubLevelHoldingChunkMap;
    }
    export class $SubLevelContainer {
        inBounds(arg0: $ChunkPos): boolean;
        inBounds(arg0: $BlockPos_): boolean;
        inBounds(arg0: number, arg1: number): boolean;
        inBounds(arg0: $Vector3dc): boolean;
        getChunkHolder(arg0: $ChunkPos): $PlotChunkHolder;
        getLogPlotSize(): number;
        processSubLevelRemovals(): void;
        removeSubLevel(arg0: $SubLevel, arg1: $SubLevelRemovalReason_): void;
        removeSubLevel(arg0: number, arg1: number, arg2: $SubLevelRemovalReason_): void;
        allocateSubLevel(arg0: $UUID_, arg1: number, arg2: number, arg3: $Pose3d): $SubLevel;
        getOccupancy(): $BitSet;
        allocateNewSubLevel(arg0: $Pose3d): $SubLevel;
        addObserver(arg0: $SubLevelObserver): void;
        newPopulatedChunk(arg0: $ChunkPos, arg1: $LevelChunk): void;
        getPlayersTracking(arg0: $ChunkPos): $List<$ServerPlayer>;
        getLogSideLength(): number;
        getLoadedCount(): number;
        queryIntersecting(arg0: $BoundingBox3dc): $Iterable<$SubLevel>;
        getAllSubLevels(): $List<$SubLevel>;
        static getContainer(arg0: $ServerLevel): $ServerSubLevelContainer;
        static getContainer(arg0: $Level_): $SubLevelContainer;
        static getContainer(arg0: $ClientLevel): $ClientSubLevelContainer;
        getOrigin(): $Vector2i;
        getIndex(arg0: number, arg1: number): number;
        tick(): void;
        getLevel(): $Level;
        getSubLevel(arg0: number, arg1: number): $SubLevel;
        getSubLevel(arg0: $UUID_): $SubLevel;
        getChunk(arg0: $ChunkPos): $LevelChunk;
        getPlot(arg0: number, arg1: number): $LevelPlot;
        getPlot(arg0: $ChunkPos): $LevelPlot;
        static DEFAULT_LOG_SIZE_LENGTH: number;
        static DEFAULT_ORIGIN: number;
        static DEFAULT_LOG_PLOT_SIZE: number;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: number);
        get logPlotSize(): number;
        get occupancy(): $BitSet;
        get logSideLength(): number;
        get loadedCount(): number;
        get allSubLevels(): $List<$SubLevel>;
        get origin(): $Vector2i;
        get level(): $Level;
    }
}
