import { $GridEvent } from "@package/appeng/api/networking/events";
import { $IEnergyService } from "@package/appeng/api/networking/energy";
import { $ItemLike_, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ISpatialService } from "@package/appeng/api/networking/spatial";
import { $IStorageService } from "@package/appeng/api/networking/storage";
import { $IPathingService } from "@package/appeng/api/networking/pathing";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Iterator, $UUID, $List, $Set_, $Map, $Set } from "@package/java/util";
import { $ICraftingService } from "@package/appeng/api/networking/crafting";
import { $AEItemKey, $AEKey } from "@package/appeng/api/stacks";
import { $GridServiceContainer } from "@package/appeng/me/helpers";
import { $AEColor_, $AEColor, $AECableType } from "@package/appeng/api/util";
import { $BiConsumer_, $Consumer_ } from "@package/java/util/function";
import { $ITickManager } from "@package/appeng/api/networking/ticking";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Enum, $Class, $Object, $Iterable } from "@package/java/lang";
import { $JsonWriter } from "@package/com/google/gson/stream";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as events from "@package/appeng/api/networking/events";
export * as crafting from "@package/appeng/api/networking/crafting";
export * as energy from "@package/appeng/api/networking/energy";
export * as ticking from "@package/appeng/api/networking/ticking";
export * as storage from "@package/appeng/api/networking/storage";
export * as security from "@package/appeng/api/networking/security";
export * as pathing from "@package/appeng/api/networking/pathing";
export * as spatial from "@package/appeng/api/networking/spatial";

declare module "@package/appeng/api/networking" {
    export class $IGridNodeListener$State extends $Enum<$IGridNodeListener$State> {
        static values(): $IGridNodeListener$State[];
        static valueOf(arg0: string): $IGridNodeListener$State;
        static CHANNEL: $IGridNodeListener$State;
        static POWER: $IGridNodeListener$State;
        static GRID_BOOT: $IGridNodeListener$State;
    }
    /**
     * Values that may be interpreted as {@link $IGridNodeListener$State}.
     */
    export type $IGridNodeListener$State_ = "power" | "channel" | "grid_boot";
    export class $IManagedGridNode {
    }
    export interface $IManagedGridNode {
        isPowered(): boolean;
        getGrid(): $IGrid;
        isOnline(): boolean;
        hasGridBooted(): boolean;
        setIdlePowerUsage(arg0: number): $IManagedGridNode;
        setVisualRepresentation(arg0: $ItemStack_): $IManagedGridNode;
        setVisualRepresentation(arg0: $AEItemKey): $IManagedGridNode;
        setVisualRepresentation(arg0: $ItemLike_): $IManagedGridNode;
        setExposedOnSides(arg0: $Set_<$Direction_>): $IManagedGridNode;
        loadFromNBT(arg0: $CompoundTag_): void;
        saveToNBT(arg0: $CompoundTag_): void;
        setOwningPlayer(arg0: $Player): void;
        setInWorldNode(arg0: boolean): $IManagedGridNode;
        setGridColor(arg0: $AEColor_): $IManagedGridNode;
        setTagName(arg0: string): $IManagedGridNode;
        setOwningPlayerId(arg0: number): void;
        addService<T extends $IGridNodeService>(arg0: $Class<T>, arg1: T): $IManagedGridNode;
        destroy(): void;
        create(arg0: $Level_, arg1: $BlockPos_): void;
        isActive(): boolean;
        getNode(): $IGridNode;
        ifPresent(arg0: $Consumer_<$IGrid>): boolean;
        ifPresent(arg0: $BiConsumer_<$IGrid, $IGridNode>): boolean;
        setFlags(...arg0: $GridFlags_[]): $IManagedGridNode;
        isReady(): boolean;
        get powered(): boolean;
        get grid(): $IGrid;
        get online(): boolean;
        set idlePowerUsage(value: number);
        set exposedOnSides(value: $Set_<$Direction_>);
        set owningPlayer(value: $Player);
        set inWorldNode(value: boolean);
        set gridColor(value: $AEColor_);
        set tagName(value: string);
        set owningPlayerId(value: number);
        get active(): boolean;
        get node(): $IGridNode;
        set flags(value: $GridFlags_[]);
        get ready(): boolean;
    }
    export class $IGridNode {
    }
    export interface $IGridNode {
        isPowered(): boolean;
        beginVisit(arg0: $IGridVisitor_): void;
        getGrid(): $IGrid;
        getConnectedSides(): $Set<$Direction>;
        isOnline(): boolean;
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
        isActive(): boolean;
        getOwner(): $Object;
        getLevel(): $ServerLevel;
        getService<T extends $IGridNodeService>(arg0: $Class<T>): T;
        hasFlag(arg0: $GridFlags_): boolean;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        getConnections(): $List<$IGridConnection>;
        get powered(): boolean;
        get grid(): $IGrid;
        get connectedSides(): $Set<$Direction>;
        get online(): boolean;
        get owningPlayerId(): number;
        get owningPlayerProfileId(): $UUID;
        get idlePowerUsage(): number;
        get visualRepresentation(): $AEItemKey;
        get gridColor(): $AEColor;
        get maxChannels(): number;
        get usedChannels(): number;
        get inWorldConnections(): $Map<$Direction, $IGridConnection>;
        get active(): boolean;
        get owner(): $Object;
        get level(): $ServerLevel;
        get connections(): $List<$IGridConnection>;
    }
    export class $IInWorldGridNodeHost {
    }
    export interface $IInWorldGridNodeHost {
        getGridNode(arg0: $Direction_): $IGridNode;
        getCableConnectionType(arg0: $Direction_): $AECableType;
    }
    /**
     * Values that may be interpreted as {@link $IInWorldGridNodeHost}.
     */
    export type $IInWorldGridNodeHost_ = ((arg0: $Direction) => $IGridNode);
    export class $IGridVisitor {
    }
    export interface $IGridVisitor {
        visitNode(arg0: $IGridNode): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IGridVisitor}.
     */
    export type $IGridVisitor_ = ((arg0: $IGridNode) => boolean);
    export class $IGridService {
    }
    export interface $IGridService {
    }
    export class $IGrid {
    }
    export interface $IGrid {
        getPivot(): $IGridNode;
        getMachineClasses(): $Iterable<$Class<never>>;
        getMachineNodes(arg0: $Class<never>): $Iterable<$IGridNode>;
        getMachines<T>(arg0: $Class<T>): $Set<T>;
        getActiveMachines<T>(arg0: $Class<T>): $Set<T>;
        getTickManager(): $ITickManager;
        getStorageService(): $IStorageService;
        getEnergyService(): $IEnergyService;
        getCraftingService(): $ICraftingService;
        getPathingService(): $IPathingService;
        getSpatialService(): $ISpatialService;
        getNodes(): $Iterable<$IGridNode>;
        size(): number;
        isEmpty(): boolean;
        "export"(arg0: $JsonWriter): void;
        getService<C extends $IGridService>(arg0: $Class<C>): C;
        postEvent<T extends $GridEvent>(arg0: T): T;
        get pivot(): $IGridNode;
        get machineClasses(): $Iterable<$Class<never>>;
        get tickManager(): $ITickManager;
        get storageService(): $IStorageService;
        get energyService(): $IEnergyService;
        get craftingService(): $ICraftingService;
        get pathingService(): $IPathingService;
        get spatialService(): $ISpatialService;
        get nodes(): $Iterable<$IGridNode>;
        get empty(): boolean;
    }
    export class $IGridServiceProvider {
    }
    export interface $IGridServiceProvider {
        onServerStartTick(): void;
        onLevelEndTick(arg0: $Level_): void;
        onServerEndTick(): void;
        onLevelStartTick(arg0: $Level_): void;
        saveNodeData(arg0: $IGridNode, arg1: $CompoundTag_): void;
        debugDump(arg0: $JsonWriter, arg1: $HolderLookup$Provider): void;
        removeNode(arg0: $IGridNode): void;
        addNode(arg0: $IGridNode, arg1: $CompoundTag_): void;
    }
    export class $IGridNodeService {
    }
    export interface $IGridNodeService {
    }
    export class $IGridMultiblock {
    }
    export interface $IGridMultiblock extends $IGridNodeService {
        getMultiblockNodes(): $Iterator<$IGridNode>;
        get multiblockNodes(): $Iterator<$IGridNode>;
    }
    /**
     * Values that may be interpreted as {@link $IGridMultiblock}.
     */
    export type $IGridMultiblock_ = (() => $Iterator<$IGridNode>);
    export class $IStackWatcher {
    }
    export interface $IStackWatcher {
        setWatchAll(arg0: boolean): void;
        remove(arg0: $AEKey): void;
        reset(): void;
        add(arg0: $AEKey): void;
        set watchAll(value: boolean);
    }
    export class $GridServices {
        static register<T extends $IGridServiceProvider>(arg0: $Class<T>, arg1: $Class<T>): void;
    }
    export class $GridHelper {
        static addGridServiceEventHandler<T extends $GridEvent, C extends $IGridService>(arg0: $Class<T>, arg1: $Class<C>, arg2: $BiConsumer_<C, T>): void;
        static createManagedNode<T>(arg0: T, arg1: $IGridNodeListener_<T>): $IManagedGridNode;
        static getNodeHost(arg0: $Level_, arg1: $BlockPos_): $IInWorldGridNodeHost;
        static onFirstTick<T extends $BlockEntity>(arg0: T, arg1: $Consumer_<T>): void;
        static addNodeOwnerEventHandler<T extends $GridEvent, C>(arg0: $Class<T>, arg1: $Class<C>, arg2: $Consumer_<C>): void;
        static addNodeOwnerEventHandler<T extends $GridEvent, C>(arg0: $Class<T>, arg1: $Class<C>, arg2: $BiConsumer_<C, T>): void;
        static addEventHandler<T extends $GridEvent>(arg0: $Class<T>, arg1: $BiConsumer_<$IGrid, T>): void;
        static getExposedNode(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $IGridNode;
        static createConnection(arg0: $IGridNode, arg1: $IGridNode): $IGridConnection;
    }
    export class $GridServices$GridCacheRegistration<T extends $IGridServiceProvider> {
    }
    export class $IGridConnection {
    }
    export interface $IGridConnection {
        isInWorld(): boolean;
        getUsedChannels(): number;
        getOtherSide(arg0: $IGridNode): $IGridNode;
        b(): $IGridNode;
        a(): $IGridNode;
        destroy(): void;
        getDirection(arg0: $IGridNode): $Direction;
        get inWorld(): boolean;
        get usedChannels(): number;
    }
    export class $GridServicesInternal {
        static createServices(arg0: $IGrid): $GridServiceContainer;
        constructor();
    }
    export class $IGridNodeListener<T> {
    }
    export interface $IGridNodeListener<T> {
        onSaveChanges(arg0: T, arg1: $IGridNode): void;
        onInWorldConnectionChanged(arg0: T, arg1: $IGridNode): void;
        onOwnerChanged(arg0: T, arg1: $IGridNode): void;
        onGridChanged(arg0: T, arg1: $IGridNode): void;
        onStateChanged(arg0: T, arg1: $IGridNode, arg2: $IGridNodeListener$State_): void;
    }
    /**
     * Values that may be interpreted as {@link $IGridNodeListener}.
     */
    export type $IGridNodeListener_<T> = ((arg0: T, arg1: $IGridNode) => void);
    export class $IGridConnectionVisitor {
    }
    export interface $IGridConnectionVisitor extends $IGridVisitor {
        visitConnection(arg0: $IGridConnection): void;
    }
    export class $GridFlags extends $Enum<$GridFlags> {
        static values(): $GridFlags[];
        static valueOf(arg0: string): $GridFlags;
        static COMPRESSED_CHANNEL: $GridFlags;
        static CANNOT_CARRY_COMPRESSED: $GridFlags;
        static CANNOT_CARRY: $GridFlags;
        static DENSE_CAPACITY: $GridFlags;
        static PREFERRED: $GridFlags;
        static MULTIBLOCK: $GridFlags;
        static REQUIRE_CHANNEL: $GridFlags;
    }
    /**
     * Values that may be interpreted as {@link $GridFlags}.
     */
    export type $GridFlags_ = "require_channel" | "compressed_channel" | "cannot_carry" | "cannot_carry_compressed" | "dense_capacity" | "multiblock" | "preferred";
}
