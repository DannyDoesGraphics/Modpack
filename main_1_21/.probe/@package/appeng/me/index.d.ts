import { $GridEvent } from "@package/appeng/api/networking/events";
import { $IEnergyService } from "@package/appeng/api/networking/energy";
import { $ItemLike_, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ISpatialService } from "@package/appeng/api/networking/spatial";
import { $IStorageService } from "@package/appeng/api/networking/storage";
import { $IGridNodeListener_, $IGridNodeListener, $IGridVisitor, $IManagedGridNode, $IGridVisitor_, $IGridNode, $GridFlags_, $IGridNodeListener$State_, $IGridNodeService, $IGrid, $IGridService, $IGridConnection } from "@package/appeng/api/networking";
import { $IPathingService } from "@package/appeng/api/networking/pathing";
import { $IDebugExportable } from "@package/appeng/util";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Set_, $Map, $Set } from "@package/java/util";
import { $ICraftingService } from "@package/appeng/api/networking/crafting";
import { $AEItemKey } from "@package/appeng/api/stacks";
import { $AEColor_, $AEColor } from "@package/appeng/api/util";
import { $BiConsumer_, $Consumer_ } from "@package/java/util/function";
import { $ITickManager } from "@package/appeng/api/networking/ticking";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $Reference2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $IPathItem } from "@package/appeng/me/pathfinding";
import { $Class, $Object, $Iterable } from "@package/java/lang";
import { $JsonWriter } from "@package/com/google/gson/stream";
export * as service from "@package/appeng/me/service";
export * as cluster from "@package/appeng/me/cluster";
export * as cells from "@package/appeng/me/cells";
export * as helpers from "@package/appeng/me/helpers";
export * as pathfinding from "@package/appeng/me/pathfinding";
export * as energy from "@package/appeng/me/energy";
export * as storage from "@package/appeng/me/storage";

declare module "@package/appeng/me" {
    export class $GridSplitDetector implements $IGridVisitor {
    }
    export class $ManagedGridNode implements $IManagedGridNode {
        isPowered(): boolean;
        isOnline(): boolean;
        getIdlePowerUsage(): number;
        getGridColor(): $AEColor;
        hasGridBooted(): boolean;
        setVisualRepresentation(arg0: $AEItemKey): $ManagedGridNode;
        loadFromNBT(arg0: $CompoundTag_): void;
        saveToNBT(arg0: $CompoundTag_): void;
        setOwningPlayer(arg0: $Player): void;
        setGridColor(arg0: $AEColor_): $ManagedGridNode;
        setTagName(arg0: string): $ManagedGridNode;
        setOwningPlayerId(arg0: number): void;
        destroy(): void;
        create(arg0: $Level_, arg1: $BlockPos_): void;
        isActive(): boolean;
        getNode(): $IGridNode;
        isReady(): boolean;
        getGrid(): $IGrid;
        setVisualRepresentation(arg0: $ItemStack_): $IManagedGridNode;
        setVisualRepresentation(arg0: $ItemLike_): $IManagedGridNode;
        ifPresent(arg0: $Consumer_<$IGrid>): boolean;
        ifPresent(arg0: $BiConsumer_<$IGrid, $IGridNode>): boolean;
        setIdlePowerUsage(arg0: number): $IManagedGridNode;
        setExposedOnSides(arg0: $Set_<$Direction_>): $IManagedGridNode;
        setInWorldNode(arg0: boolean): $IManagedGridNode;
        addService<T extends $IGridNodeService>(arg0: $Class<T>, arg1: T): $IManagedGridNode;
        setFlags(...arg0: $GridFlags_[]): $IManagedGridNode;
        constructor<T>(arg0: T, arg1: $IGridNodeListener_<T>);
        get powered(): boolean;
        get online(): boolean;
        set owningPlayer(value: $Player);
        set tagName(value: string);
        set owningPlayerId(value: number);
        get active(): boolean;
        get node(): $IGridNode;
        get ready(): boolean;
        get grid(): $IGrid;
        set exposedOnSides(value: $Set_<$Direction_>);
        set inWorldNode(value: boolean);
        set flags(value: $GridFlags_[]);
    }
    export class $ManagedGridNode$InitData<T> {
    }
    export class $GridEventBus {
        static subscribe<T extends $GridEvent>(arg0: $Class<T>, arg1: $BiConsumer_<$IGrid, T>): void;
        static postEvent(arg0: $Grid, arg1: $GridEvent): void;
    }
    export class $GridPropagator implements $IGridVisitor {
        visitNode(arg0: $IGridNode): boolean;
        constructor(arg0: $Grid);
    }
    export class $GridNode implements $IGridNode, $IPathItem, $IDebugExportable {
        isPowered(): boolean;
        beginVisit(arg0: $IGridVisitor_): void;
        getGrid(): $IGrid;
        getOwningPlayerId(): number;
        getOwningPlayerProfileId(): $UUID;
        getIdlePowerUsage(): number;
        getVisualRepresentation(): $AEItemKey;
        getGridColor(): $AEColor;
        getMaxChannels(): number;
        getUsedChannels(): number;
        hasGridBooted(): boolean;
        meetsChannelRequirements(): boolean;
        getInWorldConnections(): $Map<$Direction, $IGridConnection>;
        getPreviousDraw(): number;
        setPreviousDraw(arg0: number): void;
        setIdlePowerUsage(arg0: number): void;
        setVisualRepresentation(arg0: $AEItemKey): void;
        loadFromNBT(arg0: string, arg1: $CompoundTag_): void;
        saveToNBT(arg0: string, arg1: $CompoundTag_): void;
        debugExport(arg0: $JsonWriter, arg1: $HolderLookup$Provider, arg2: $Reference2IntMap<$Object>, arg3: $Reference2IntMap<$IGridNode>): void;
        setGridColor(arg0: $AEColor_): void;
        setOwningPlayerId(arg0: number): void;
        getInternalGrid(): $Grid;
        callListener<T>(arg0: $GridNode$ListenerCallback_<T>): void;
        notifyStatusChange(arg0: $IGridNodeListener$State_): void;
        getControllerRoute(): $IPathItem;
        hasNoConnections(): boolean;
        setAdHocChannels(arg0: number): void;
        getHighestSimilarAncestor(): $GridNode;
        getSubtreeAllowsCompressedChannels(): boolean;
        setControllerRoute(arg0: $IPathItem): void;
        getPossibleOptions(): $Iterable<$IPathItem>;
        propagateChannelsUpwards(arg0: boolean): number;
        incrementChannelCount(arg0: number): void;
        finalizeChannels(): void;
        addService<T extends $IGridNodeService>(arg0: $Class<T>, arg1: T): void;
        destroy(): void;
        getOwner(): $Object;
        getLevel(): $ServerLevel;
        getService<T extends $IGridNodeService>(arg0: $Class<T>): T;
        hasFlag(arg0: $GridFlags_): boolean;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        getConnections(): $List<$IGridConnection>;
        isOnline(): boolean;
        isActive(): boolean;
        getConnectedSides(): $Set<$Direction>;
        constructor<T>(arg0: $ServerLevel, arg1: T, arg2: $IGridNodeListener_<T>, arg3: $Set_<$GridFlags_>);
        get powered(): boolean;
        get grid(): $IGrid;
        get owningPlayerProfileId(): $UUID;
        get maxChannels(): number;
        get usedChannels(): number;
        get inWorldConnections(): $Map<$Direction, $IGridConnection>;
        get internalGrid(): $Grid;
        set adHocChannels(value: number);
        get highestSimilarAncestor(): $GridNode;
        get subtreeAllowsCompressedChannels(): boolean;
        get possibleOptions(): $Iterable<$IPathItem>;
        get owner(): $Object;
        get level(): $ServerLevel;
        get connections(): $List<$IGridConnection>;
        get online(): boolean;
        get active(): boolean;
        get connectedSides(): $Set<$Direction>;
    }
    export class $InWorldGridNode extends $GridNode {
        setExposedOnSides(arg0: $Set_<$Direction_>): void;
        isExposedOnSide(arg0: $Direction_): boolean;
        getLocation(): $BlockPos;
        constructor<T>(arg0: $ServerLevel, arg1: $BlockPos_, arg2: T, arg3: $IGridNodeListener_<T>, arg4: $Set_<$GridFlags_>);
        set exposedOnSides(value: $Set_<$Direction_>);
        get location(): $BlockPos;
    }
    export class $GridEventBus$Subscriptions<T extends $GridEvent> {
    }
    export class $GridConnection implements $IGridConnection, $IPathItem {
        isInWorld(): boolean;
        getMaxChannels(): number;
        getUsedChannels(): number;
        getOtherSide(arg0: $IGridNode): $IGridNode;
        getControllerRoute(): $GridNode;
        setAdHocChannels(arg0: number): void;
        setControllerRoute(arg0: $IPathItem): void;
        getPossibleOptions(): $Iterable<$IPathItem>;
        propagateChannelsUpwards(): number;
        finalizeChannels(): void;
        destroy(): void;
        static create(arg0: $IGridNode, arg1: $IGridNode, arg2: $Direction_): $GridConnection;
        hasFlag(arg0: $GridFlags_): boolean;
        getDirection(arg0: $IGridNode): $Direction;
        b(): $IGridNode;
        a(): $IGridNode;
        get inWorld(): boolean;
        get maxChannels(): number;
        get usedChannels(): number;
        set adHocChannels(value: number);
        get possibleOptions(): $Iterable<$IPathItem>;
    }
    export class $GridNode$ListenerCallback<T> {
    }
    export interface $GridNode$ListenerCallback<T> {
        call(arg0: $IGridNodeListener_<T>, arg1: T, arg2: $IGridNode): void;
    }
    /**
     * Values that may be interpreted as {@link $GridNode$ListenerCallback}.
     */
    export type $GridNode$ListenerCallback_<T> = ((arg0: $IGridNodeListener<T>, arg1: T, arg2: $IGridNode) => void);
    export class $Grid implements $IGrid {
        onServerStartTick(): void;
        onLevelEndTick(arg0: $Level_): void;
        onServerEndTick(): void;
        onLevelStartTick(arg0: $Level_): void;
        getPivot(): $IGridNode;
        getMachineClasses(): $Iterable<$Class<never>>;
        getMachineNodes(arg0: $Class<never>): $Iterable<$IGridNode>;
        getMachines<T>(arg0: $Class<T>): $Set<T>;
        getActiveMachines<T>(arg0: $Class<T>): $Set<T>;
        notifyAllNodes(arg0: $IGridNodeListener$State_): void;
        setImportantFlag(arg0: number, arg1: boolean): void;
        getSerialNumber(): number;
        size(): number;
        isEmpty(): boolean;
        static create(arg0: $GridNode): $Grid;
        "export"(arg0: $JsonWriter): void;
        getService<C extends $IGridService>(arg0: $Class<C>): C;
        postEvent<T extends $GridEvent>(arg0: T): T;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        getTickManager(): $ITickManager;
        getStorageService(): $IStorageService;
        getEnergyService(): $IEnergyService;
        getCraftingService(): $ICraftingService;
        getPathingService(): $IPathingService;
        getSpatialService(): $ISpatialService;
        getNodes(): $Iterable<$IGridNode>;
        get pivot(): $IGridNode;
        get machineClasses(): $Iterable<$Class<never>>;
        get serialNumber(): number;
        get empty(): boolean;
        get tickManager(): $ITickManager;
        get storageService(): $IStorageService;
        get energyService(): $IEnergyService;
        get craftingService(): $ICraftingService;
        get pathingService(): $IPathingService;
        get spatialService(): $ISpatialService;
        get nodes(): $Iterable<$IGridNode>;
    }
}
