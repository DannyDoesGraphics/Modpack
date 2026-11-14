import { $IEnergyService } from "@package/appeng/api/networking/energy";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IEnergyOverlayGridConnection, $EnergyThreshold } from "@package/appeng/me/energy";
import { $Future } from "@package/java/util/concurrent";
import { $ISpatialService } from "@package/appeng/api/networking/spatial";
import { $CraftingLink } from "@package/appeng/crafting";
import { $Collection, $Map, $Set } from "@package/java/util";
import { $IActionSource } from "@package/appeng/api/networking/security";
import { $KeyCounter, $AEKey } from "@package/appeng/api/stacks";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos } from "@package/net/minecraft/core";
import { $Enum, $Record, $Class, $Iterable } from "@package/java/lang";
import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $GridPowerIdleChange, $GridBootingStatusChange, $GridPowerStorageStateChanged } from "@package/appeng/api/networking/events";
import { $IStorageService } from "@package/appeng/api/networking/storage";
import { $IGridServiceProvider, $IGridNode, $IGrid, $IGridService } from "@package/appeng/api/networking";
import { $Actionable_, $PowerMultiplier_ } from "@package/appeng/api/config";
import { $ChannelMode_, $IPathingService, $ControllerState, $ChannelMode } from "@package/appeng/api/networking/pathing";
import { $Multiset, $ImmutableSet } from "@package/com/google/common/collect";
import { $ICraftingProvider, $ICraftingCPU, $ICraftingSimulationRequester_, $ICraftingSubmitResult, $CalculationStrategy_, $ICraftingService, $ICraftingRequester, $ICraftingPlan } from "@package/appeng/api/networking/crafting";
import { $ITickManager } from "@package/appeng/api/networking/ticking";
import { $IStorageProvider_, $MEStorage_, $MEStorage, $AEKeyFilter_, $IStorageMounts } from "@package/appeng/api/storage";
import { $P2PTunnelPart } from "@package/appeng/parts/p2p";
import { $IPatternDetails } from "@package/appeng/api/crafting";
import { $Stream } from "@package/java/util/stream";
import { $JsonWriter } from "@package/com/google/gson/stream";
export * as helpers from "@package/appeng/me/service/helpers";

declare module "@package/appeng/me/service" {
    export class $EnergyService implements $IEnergyService, $IGridServiceProvider {
        onServerStartTick(): void;
        onServerEndTick(): void;
        saveNodeData(arg0: $IGridNode, arg1: $CompoundTag_): void;
        getIdlePowerUsage(): number;
        getAvgPowerUsage(): number;
        getAvgPowerInjection(): number;
        isNetworkPowered(): boolean;
        injectPower(arg0: number, arg1: $Actionable_): number;
        getStoredPower(): number;
        getMaxStoredPower(): number;
        getEnergyDemand(arg0: number): number;
        extractAEPower(arg0: number, arg1: $Actionable_, arg2: $PowerMultiplier_): number;
        getChannelPowerUsage(): number;
        extractProviderPower(arg0: number, arg1: $Actionable_): number;
        injectProviderPower(arg0: number, arg1: $Actionable_): number;
        refreshPower(): void;
        getProviderEnergyDemand(arg0: number): number;
        invalidateOverlayEnergyGrid(): void;
        storagePowerChangeHandler(arg0: $GridPowerStorageStateChanged): void;
        nodeIdlePowerChangeHandler(arg0: $GridPowerIdleChange): void;
        getOverlayGridConnections(): $Collection<$IEnergyOverlayGridConnection>;
        registerEnergyInterest(arg0: $EnergyThreshold): boolean;
        unregisterEnergyInterest(arg0: $EnergyThreshold): boolean;
        removeNode(arg0: $IGridNode): void;
        addNode(arg0: $IGridNode, arg1: $CompoundTag_): void;
        onLevelEndTick(arg0: $Level_): void;
        onLevelStartTick(arg0: $Level_): void;
        debugDump(arg0: $JsonWriter, arg1: $HolderLookup$Provider): void;
        constructor(arg0: $IGrid, arg1: $IPathingService);
        get idlePowerUsage(): number;
        get avgPowerUsage(): number;
        get avgPowerInjection(): number;
        get networkPowered(): boolean;
        get storedPower(): number;
        get maxStoredPower(): number;
        get channelPowerUsage(): number;
        get overlayGridConnections(): $Collection<$IEnergyOverlayGridConnection>;
    }
    export class $StorageService$ProviderState implements $IStorageMounts {
        mount(arg0: $MEStorage_): void;
    }
    export class $SpatialPylonService implements $ISpatialService, $IGridServiceProvider {
        requiredPower(): number;
        hasRegion(): boolean;
        isValidRegion(): boolean;
        currentEfficiency(): number;
        bootingRender(arg0: $GridBootingStatusChange): void;
        getLevel(): $ServerLevel;
        getMin(): $BlockPos;
        getMax(): $BlockPos;
        onServerStartTick(): void;
        onLevelEndTick(arg0: $Level_): void;
        onServerEndTick(): void;
        onLevelStartTick(arg0: $Level_): void;
        saveNodeData(arg0: $IGridNode, arg1: $CompoundTag_): void;
        debugDump(arg0: $JsonWriter, arg1: $HolderLookup$Provider): void;
        removeNode(arg0: $IGridNode): void;
        addNode(arg0: $IGridNode, arg1: $CompoundTag_): void;
        constructor(arg0: $IGrid);
        get validRegion(): boolean;
        get level(): $ServerLevel;
        get min(): $BlockPos;
        get max(): $BlockPos;
    }
    export class $StatisticsService implements $IGridService, $IGridServiceProvider {
        chunks(arg0: $ServerLevel): $Set<$ChunkPos>;
        debugDump(arg0: $JsonWriter, arg1: $HolderLookup$Provider): void;
        getGrid(): $IGrid;
        getChunks(): $Map<$ServerLevel, $Multiset<$ChunkPos>>;
        removeNode(arg0: $IGridNode): void;
        addNode(arg0: $IGridNode, arg1: $CompoundTag_): void;
        getLevels(): $Set<$ServerLevel>;
        onServerStartTick(): void;
        onLevelEndTick(arg0: $Level_): void;
        onServerEndTick(): void;
        onLevelStartTick(arg0: $Level_): void;
        saveNodeData(arg0: $IGridNode, arg1: $CompoundTag_): void;
        constructor(arg0: $IGrid);
        get grid(): $IGrid;
        get levels(): $Set<$ServerLevel>;
    }
    export class $EnergyOverlayGrid {
    }
    export class $CraftingService implements $ICraftingService, $IGridServiceProvider {
        removeGlobalCraftingProvider(arg0: $ICraftingProvider): void;
        onServerEndTick(): void;
        refreshNodeCraftingProvider(arg0: $IGridNode): void;
        addLink(arg0: $CraftingLink): void;
        getCraftables(arg0: $AEKeyFilter_): $Set<$AEKey>;
        isRequesting(arg0: $AEKey): boolean;
        getRequestedAmount(arg0: $AEKey): number;
        isRequestingAny(): boolean;
        insertIntoCpus(arg0: $AEKey, arg1: number, arg2: $Actionable_): number;
        hasCpu(arg0: $ICraftingCPU): boolean;
        getCraftingFor(arg0: $AEKey): $Collection<$IPatternDetails>;
        addGlobalCraftingProvider(arg0: $ICraftingProvider): void;
        getFuzzyCraftable(arg0: $AEKey, arg1: $AEKeyFilter_): $AEKey;
        beginCraftingCalculation(arg0: $Level_, arg1: $ICraftingSimulationRequester_, arg2: $AEKey, arg3: number, arg4: $CalculationStrategy_): $Future<$ICraftingPlan>;
        submitJob(arg0: $ICraftingPlan, arg1: $ICraftingRequester, arg2: $ICraftingCPU, arg3: boolean, arg4: $IActionSource): $ICraftingSubmitResult;
        getCpus(): $ImmutableSet<$ICraftingCPU>;
        canEmitFor(arg0: $AEKey): boolean;
        refreshGlobalCraftingProvider(arg0: $ICraftingProvider): void;
        removeNode(arg0: $IGridNode): void;
        getProviders(arg0: $IPatternDetails): $Iterable<$ICraftingProvider>;
        addNode(arg0: $IGridNode, arg1: $CompoundTag_): void;
        isCraftable(arg0: $AEKey): boolean;
        onServerStartTick(): void;
        onLevelEndTick(arg0: $Level_): void;
        onLevelStartTick(arg0: $Level_): void;
        saveNodeData(arg0: $IGridNode, arg1: $CompoundTag_): void;
        debugDump(arg0: $JsonWriter, arg1: $HolderLookup$Provider): void;
        constructor(arg0: $IGrid, arg1: $IStorageService, arg2: $IEnergyService);
        get requestingAny(): boolean;
        get cpus(): $ImmutableSet<$ICraftingCPU>;
    }
    export class $P2PService implements $IGridService, $IGridServiceProvider {
        wakeInputTunnels(): void;
        updateFreq(arg0: $P2PTunnelPart<any>, arg1: number): void;
        newFrequency(): number;
        static get(arg0: $IGrid): $P2PService;
        removeNode(arg0: $IGridNode): void;
        getOutputs<T extends $P2PTunnelPart<T>>(arg0: number, arg1: $Class<T>): $Stream<T>;
        addNode(arg0: $IGridNode, arg1: $CompoundTag_): void;
        getInput(arg0: number): $P2PTunnelPart<any>;
        onServerStartTick(): void;
        onLevelEndTick(arg0: $Level_): void;
        onServerEndTick(): void;
        onLevelStartTick(arg0: $Level_): void;
        saveNodeData(arg0: $IGridNode, arg1: $CompoundTag_): void;
        debugDump(arg0: $JsonWriter, arg1: $HolderLookup$Provider): void;
        constructor(arg0: $IGrid);
    }
    export class $AdHocNetworkError extends $Enum<$AdHocNetworkError> {
        static values(): $AdHocNetworkError[];
        static valueOf(arg0: string): $AdHocNetworkError;
        static NESTED_P2P_TUNNEL: $AdHocNetworkError;
        static TOO_MANY_CHANNELS: $AdHocNetworkError;
    }
    /**
     * Values that may be interpreted as {@link $AdHocNetworkError}.
     */
    export type $AdHocNetworkError_ = "nested_p2p_tunnel" | "too_many_channels";
    export class $TickManagerService implements $ITickManager, $IGridServiceProvider {
        onServerStartTick(): void;
        onLevelEndTick(arg0: $Level_): void;
        onServerEndTick(): void;
        getOverallTime(arg0: $IGridNode): number;
        getMaximumTime(arg0: $IGridNode): number;
        alertDevice(arg0: $IGridNode): boolean;
        sleepDevice(arg0: $IGridNode): boolean;
        wakeDevice(arg0: $IGridNode): boolean;
        removeNode(arg0: $IGridNode): void;
        getStatus(arg0: $IGridNode): $TickManagerService$NodeStatus;
        getAverageTime(arg0: $IGridNode): number;
        addNode(arg0: $IGridNode, arg1: $CompoundTag_): void;
        onLevelStartTick(arg0: $Level_): void;
        saveNodeData(arg0: $IGridNode, arg1: $CompoundTag_): void;
        debugDump(arg0: $JsonWriter, arg1: $HolderLookup$Provider): void;
        static MONITORING_ENABLED: boolean;
        constructor();
    }
    export class $StorageService implements $IStorageService, $IGridServiceProvider {
        invalidateCache(): void;
        onServerEndTick(): void;
        debugDump(arg0: $JsonWriter, arg1: $HolderLookup$Provider): void;
        getCachedInventory(): $KeyCounter;
        addGlobalStorageProvider(arg0: $IStorageProvider_): void;
        removeGlobalStorageProvider(arg0: $IStorageProvider_): void;
        refreshNodeStorageProvider(arg0: $IGridNode): void;
        refreshGlobalStorageProvider(arg0: $IStorageProvider_): void;
        removeNode(arg0: $IGridNode): void;
        addNode(arg0: $IGridNode, arg1: $CompoundTag_): void;
        getInventory(): $MEStorage;
        onServerStartTick(): void;
        onLevelEndTick(arg0: $Level_): void;
        onLevelStartTick(arg0: $Level_): void;
        saveNodeData(arg0: $IGridNode, arg1: $CompoundTag_): void;
        constructor();
        get cachedInventory(): $KeyCounter;
        get inventory(): $MEStorage;
    }
    export class $PathingService implements $IPathingService, $IGridServiceProvider {
        getChannelMode(): $ChannelMode;
        onServerEndTick(): void;
        saveNodeData(arg0: $IGridNode, arg1: $CompoundTag_): void;
        getUsedChannels(): number;
        isNetworkBooting(): boolean;
        getControllerState(): $ControllerState;
        repath(): void;
        getAdHocNetworkError(): $AdHocNetworkError;
        setForcedChannelMode(arg0: $ChannelMode_): void;
        removeNode(arg0: $IGridNode): void;
        addNode(arg0: $IGridNode, arg1: $CompoundTag_): void;
        onServerStartTick(): void;
        onLevelEndTick(arg0: $Level_): void;
        onLevelStartTick(arg0: $Level_): void;
        debugDump(arg0: $JsonWriter, arg1: $HolderLookup$Provider): void;
        constructor(arg0: $IGrid);
        get channelMode(): $ChannelMode;
        get usedChannels(): number;
        get networkBooting(): boolean;
        get controllerState(): $ControllerState;
        get adHocNetworkError(): $AdHocNetworkError;
        set forcedChannelMode(value: $ChannelMode_);
    }
    export class $TickManagerService$NodeStatus extends $Record {
        alertable(): boolean;
        sleeping(): boolean;
        awake(): boolean;
        currentRate(): number;
        lastTick(): number;
        queued(): boolean;
        constructor(alertable: boolean, sleeping: boolean, awake: boolean, queued: boolean, currentRate: number, lastTick: number);
    }
    /**
     * Values that may be interpreted as {@link $TickManagerService$NodeStatus}.
     */
    export type $TickManagerService$NodeStatus_ = { queued?: boolean, alertable?: boolean, sleeping?: boolean, currentRate?: number, lastTick?: number, awake?: boolean,  } | [queued?: boolean, alertable?: boolean, sleeping?: boolean, currentRate?: number, lastTick?: number, awake?: boolean, ];
}
