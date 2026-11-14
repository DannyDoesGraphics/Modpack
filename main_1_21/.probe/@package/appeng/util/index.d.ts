import { $JsonElement } from "@package/com/google/gson";
import { $Codec } from "@package/com/mojang/serialization";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $P2PHelper } from "@package/appeng/util/helpers";
import { $Recipe, $Ingredient, $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Spliterator, $Iterator, $List, $Map_, $UUID_, $Set_, $Collection_, $List_, $Map, $Set } from "@package/java/util";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $GenericStack, $AEKeyType_, $AEKey } from "@package/appeng/api/stacks";
import { $Container } from "@package/net/minecraft/world";
import { $IntFunction_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Reference2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $Holder, $BlockPos_, $Direction_, $RegistryAccess, $NonNullList, $Direction } from "@package/net/minecraft/core";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ThreadGroup, $Enum, $Runnable_, $Object } from "@package/java/lang";
import { $ItemLike_, $ChunkPos, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $GenericStackInv } from "@package/appeng/helpers/externalstorage";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGridNode } from "@package/appeng/api/networking";
import { $StatsAccumulator } from "@package/com/google/common/math";
import { $FuzzyMode_, $SortOrder_, $Setting } from "@package/appeng/api/config";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Predicate } from "@package/com/google/common/base";
import { $InternalInventory } from "@package/appeng/api/inventories";
import { $IConfigManager, $IConfigManagerListener_, $DimensionalBlockPos } from "@package/appeng/api/util";
import { $AEKeySlotFilter_ } from "@package/appeng/api/storage";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $JsonWriter } from "@package/com/google/gson/stream";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as helpers from "@package/appeng/util/helpers";
export * as prioritylist from "@package/appeng/util/prioritylist";
export * as fluid from "@package/appeng/util/fluid";
export * as inv from "@package/appeng/util/inv";
export * as iterators from "@package/appeng/util/iterators";

declare module "@package/appeng/util" {
    export class $ConfigInventory$Builder {
        supportedType(arg0: $AEKeyType_): $ConfigInventory$Builder;
        allowOverstacking(arg0: boolean): $ConfigInventory$Builder;
        supportedTypes(arg0: $Collection_<$AEKeyType_>): $ConfigInventory$Builder;
        supportedTypes(arg0: $AEKeyType_, ...arg1: $AEKeyType_[]): $ConfigInventory$Builder;
        slotFilter(arg0: $Predicate<$AEKey>): $ConfigInventory$Builder;
        slotFilter(arg0: $AEKeySlotFilter_): $ConfigInventory$Builder;
        changeListener(arg0: $Runnable_): $ConfigInventory$Builder;
        build(): $ConfigInventory;
    }
    export class $JsonStreamUtil {
        static writeProperties(arg0: $Map_<string, never>, arg1: $JsonWriter): void;
        static toMap(arg0: $StatsAccumulator): $Map<string, never>;
        static toJson(arg0: $ChunkPos): $JsonElement;
    }
    export class $IDebugExportable {
    }
    export interface $IDebugExportable {
        debugExport(arg0: $JsonWriter, arg1: $HolderLookup$Provider, arg2: $Reference2IntMap<$Object>, arg3: $Reference2IntMap<$IGridNode>): void;
    }
    /**
     * Values that may be interpreted as {@link $IDebugExportable}.
     */
    export type $IDebugExportable_ = ((arg0: $JsonWriter, arg1: $HolderLookup$Provider, arg2: $Reference2IntMap<$Object>, arg3: $Reference2IntMap<$IGridNode>) => void);
    export class $AECodecs {
        static FAULT_TOLERANT_SIMPLE_ITEM_CODEC: $Codec<$ItemStack>;
        static FAULT_TOLERANT_ITEMSTACK_CODEC: $Codec<$ItemStack>;
        static FAULT_TOLERANT_OPTIONAL_ITEMSTACK_CODEC: $Codec<$ItemStack>;
    }
    export class $SearchInventoryEvent extends $PlayerEvent {
        static getItems(arg0: $Player): $List<$ItemStack>;
        getStacks(): $List<$ItemStack>;
        constructor(arg0: $Player, arg1: $List_<$ItemStack_>);
        get stacks(): $List<$ItemStack>;
    }
    export class $InteractionUtil {
        static isInAlternateUseMode(arg0: $Player): boolean;
        static getPlayerRay(arg0: $Player, arg1: number): $LookDirection;
        static canWrenchRotate(arg0: $ItemStack_): boolean;
        static canWrenchDisassemble(arg0: $ItemStack_): boolean;
    }
    export class $NullConfigManager implements $IConfigManager {
        exportSettings(): $Map<string, string>;
        importSettings(arg0: $Map_<string, string>): boolean;
        putSetting<T extends $Enum<T>>(arg0: $Setting<T>, arg1: T): void;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): boolean;
        getSetting<T extends $Enum<T>>(arg0: $Setting<T>): T;
        getSettings(): $Set<$Setting<never>>;
        hasSetting(arg0: $Setting<never>): boolean;
        static INSTANCE: $NullConfigManager;
        constructor();
        get settings(): $Set<$Setting<never>>;
    }
    export class $EnumCycler {
        static rotateEnum<T extends $Enum<T>>(arg0: T, arg1: boolean, arg2: $Set_<T>): T;
        static next<T extends $Enum<T>>(arg0: T): T;
        static prev<T extends $Enum<T>>(arg0: T): T;
    }
    export class $ConfigMenuInventory implements $InternalInventory {
        convertToSuitableStack(arg0: $ItemStack_): $GenericStack;
        setItemDirect(arg0: number, arg1: $ItemStack_): void;
        size(): number;
        getDelegate(): $GenericStackInv;
        getStackInSlot(arg0: number): $ItemStack;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        getRedstoneSignal(): number;
        addItems(arg0: $ItemStack_): $ItemStack;
        addItems(arg0: $ItemStack_, arg1: boolean): $ItemStack;
        getSubInventory(arg0: number, arg1: number): $InternalInventory;
        toItemHandler(): $IItemHandler;
        toContainer(): $Container;
        getSlotInv(arg0: number): $InternalInventory;
        simulateAdd(arg0: $ItemStack_): $ItemStack;
        removeItems(arg0: number, arg1: $ItemStack_, arg2: $Predicate_<$ItemStack>): $ItemStack;
        simulateRemove(arg0: number, arg1: $ItemStack_, arg2: $Predicate_<$ItemStack>): $ItemStack;
        removeSimilarItems(arg0: number, arg1: $ItemStack_, arg2: $FuzzyMode_, arg3: $Predicate_<$ItemStack>): $ItemStack;
        simulateSimilarRemove(arg0: number, arg1: $ItemStack_, arg2: $FuzzyMode_, arg3: $Predicate_<$ItemStack>): $ItemStack;
        sendChangeNotification(arg0: number): void;
        clear(): void;
        isEmpty(): boolean;
        iterator(): $Iterator<$ItemStack>;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        spliterator(): $Spliterator<$ItemStack>;
        forEach(arg0: $Consumer_<$ItemStack>): void;
        constructor(arg0: $GenericStackInv);
        [Symbol.iterator](): Iterator<$ItemStack>
        get delegate(): $GenericStackInv;
        get redstoneSignal(): number;
    }
    export class $CraftingRecipeUtil {
        static ensure3by3CraftingMatrix(arg0: $Recipe<never>): $NonNullList<$Ingredient>;
        static getIngredients(arg0: $Recipe<never>): $NonNullList<$Ingredient>;
    }
    export class $BlockUpdate implements $ILevelRunnable {
        call(arg0: $Level_): void;
    }
    export class $GenericContainerHelper {
        static getContainedFluidStack(arg0: $ItemStack_): $GenericStack;
    }
    export class $ReadableNumberConverter {
        static format(arg0: number, arg1: number): string;
        static format(arg0: number, arg1: number): string;
    }
    export class $Platform {
        static getEnchantment(arg0: $MinecraftServer, arg1: $ResourceKey_<$Enchantment>): $Holder<$Enchantment>;
        static getEnchantment(arg0: $ServerLevel, arg1: $ResourceKey_<$Enchantment>): $Holder<$Enchantment>;
        static hasClientClasses(): boolean;
        static formatPower(arg0: number, arg1: boolean): string;
        static areBlockEntitiesTicking(arg0: $Level_, arg1: $BlockPos_): boolean;
        static areBlockEntitiesTicking(arg0: $Level_, arg1: number): boolean;
        static copyStackWithSize(arg0: $ItemStack_, arg1: number): $ItemStack;
        static getClientRegistryAccess(): $RegistryAccess;
        static getClientRecipeManager(): $RecipeManager;
        static p2p(): $P2PHelper;
        static formatPowerLong(arg0: number, arg1: boolean): string;
        static formatTimeMeasurement(arg0: number): string;
        static crossProduct(arg0: $Direction_, arg1: $Direction_): $Direction;
        static spawnDrops(arg0: $Level_, arg1: $BlockPos_, arg2: $List_<$ItemStack_>): void;
        static assertServerThread(): void;
        static formatModName(arg0: string): string;
        static getFluidDisplayName(arg0: $Fluid_): $Component;
        static isChargeable(arg0: $ItemStack_): boolean;
        static getFakePlayer(arg0: $ServerLevel, arg1: $UUID_): $Player;
        static configurePlayer(arg0: $Player, arg1: $Direction_, arg2: $BlockEntity): void;
        static notifyBlocksOfNeighbors(arg0: $Level_, arg1: $BlockPos_): void;
        static isSortOrderAvailable(arg0: $SortOrder_): boolean;
        static getTickingBlockEntity(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        static getFullChunkPacket(arg0: $LevelChunk): $Packet<never>;
        static getInsertionRemainder(arg0: $ItemStack_, arg1: number): $ItemStack;
        static sendImmediateBlockEntityUpdate(arg0: $Player, arg1: $BlockPos_): void;
        static isPonderLevel(arg0: $Level_): boolean;
        static hasPermissions(arg0: $DimensionalBlockPos, arg1: $Player): boolean;
        static isClient(): boolean;
        static getModName(arg0: string): string;
        static isDevelopmentEnvironment(): boolean;
        static isServer(): boolean;
        static rotateAround(arg0: $Direction_, arg1: $Direction_): $Direction;
        static DIRECTIONS_WITH_NULL: $Direction[];
        static serverThreadGroup: $ThreadGroup;
        static fallbackClientRecipeManager: $RecipeManager;
        static fallbackClientRegistryAccess: $RegistryAccess;
        constructor();
        static get clientRegistryAccess(): $RegistryAccess;
        static get clientRecipeManager(): $RecipeManager;
        static get client(): boolean;
        static get developmentEnvironment(): boolean;
        static get server(): boolean;
    }
    export class $ValidateResourceIds {
        static main(arg0: string[]): void;
        constructor();
    }
    export class $ConfigInventory extends $GenericStackInv {
        static emptyTypes(): $ConfigInventory;
        static configTypes(arg0: number): $ConfigInventory$Builder;
        static configStacks(arg0: number): $ConfigInventory$Builder;
        keySet(): $Set<$AEKey>;
        addFilter(arg0: $Fluid_): $ConfigInventory;
        addFilter(arg0: $AEKey): $ConfigInventory;
        addFilter(arg0: $ItemLike_): $ConfigInventory;
        static storage(arg0: number): $ConfigInventory$Builder;
    }
    export class $LookDirection {
        getA(): $Vec3;
        getB(): $Vec3;
        constructor(arg0: $Vec3_, arg1: $Vec3_);
        get a(): $Vec3;
        get b(): $Vec3;
    }
    export class $CowMap<K, V> {
        static identityHashMap<K, V>(): $CowMap<K, V>;
        putIfAbsent(arg0: K, arg1: V): void;
        getMap(): $Map<K, V>;
        constructor(arg0: $IntFunction_<$Map<K, V>>);
        get map(): $Map<K, V>;
    }
    export class $ConfigManager implements $IConfigManager {
        exportSettings(): $Map<string, string>;
        importSettings(arg0: $Map_<string, string>): boolean;
        registerSetting<T extends $Enum<T>>(arg0: $Setting<T>, arg1: T): void;
        putSetting<T extends $Enum<T>>(arg0: $Setting<T>, arg1: T): void;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): boolean;
        getSetting<T extends $Enum<T>>(arg0: $Setting<T>): T;
        getSettings(): $Set<$Setting<never>>;
        hasSetting(arg0: $Setting<never>): boolean;
        constructor(arg0: $IConfigManagerListener_);
        constructor(arg0: $Runnable_);
        get settings(): $Set<$Setting<never>>;
    }
    export class $SettingsFrom extends $Enum<$SettingsFrom> {
        static values(): $SettingsFrom[];
        static valueOf(arg0: string): $SettingsFrom;
        static DISMANTLE_ITEM: $SettingsFrom;
        static MEMORY_CARD: $SettingsFrom;
    }
    /**
     * Values that may be interpreted as {@link $SettingsFrom}.
     */
    export type $SettingsFrom_ = "dismantle_item" | "memory_card";
    export class $ILevelRunnable {
    }
    export interface $ILevelRunnable {
        call(arg0: $Level_): void;
    }
    /**
     * Values that may be interpreted as {@link $ILevelRunnable}.
     */
    export type $ILevelRunnable_ = ((arg0: $Level) => void);
}
