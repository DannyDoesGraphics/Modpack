import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tag_, $CompoundTag, $ListTag_, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $Comparator, $Queue, $List, $List_ } from "@package/java/util";
import { $Container } from "@package/net/minecraft/world";
import { $LevelChunkTicksExtension } from "@package/dev/ryanhcode/sable/mixinterface/plot/serialization";
import { $LongPredicate_, $Consumer_, $BiConsumer_, $Predicate_, $Supplier_, $Function_, $Function } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Enum, $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $IChunkTickScheduler, $ISimpleTickScheduler } from "@package/com/ishland/c2me/base/mixin/access";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/ticks" {
    export class $ContainerSingleItem {
    }
    export interface $ContainerSingleItem extends $Container {
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        getTheItem(): $ItemStack;
        setTheItem(item: $ItemStack_): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        removeTheItem(): $ItemStack;
        /**
         * Returns the stack in the given slot.
         */
        splitTheItem(slot: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        isEmpty(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        get empty(): boolean;
        get containerSize(): number;
    }
    export class $ScheduledTick<T> extends $Record {
        triggerTick(): number;
        subTickOrder(): number;
        priority(): $TickPriority;
        type(): T;
        pos(): $BlockPos;
        static probe<T>(type: T, pos: $BlockPos_): $ScheduledTick<T>;
        static INTRA_TICK_DRAIN_ORDER: $Comparator<$ScheduledTick<never>>;
        static UNIQUE_TICK_HASH: $Hash$Strategy<$ScheduledTick<never>>;
        static DRAIN_ORDER: $Comparator<$ScheduledTick<never>>;
        constructor(type: T, pos: $BlockPos_, triggerTick: number, arg3: number);
        constructor(type: T, pos: $BlockPos_, triggerTick: number, arg3: $TickPriority_, priority: number);
    }
    /**
     * Values that may be interpreted as {@link $ScheduledTick}.
     */
    export type $ScheduledTick_<T> = { subTickOrder?: number, type?: any, pos?: $BlockPos_, priority?: $TickPriority_, triggerTick?: number,  } | [subTickOrder?: number, type?: any, pos?: $BlockPos_, priority?: $TickPriority_, triggerTick?: number, ];
    export class $LevelTicks<T> implements $LevelTickAccess<T> {
        clearArea(area: $BoundingBox): void;
        copyAreaFrom(levelTicks: $LevelTicks<T>, area: $BoundingBox, offset: $Vec3i): void;
        willTickThisTick(pos: $BlockPos_, type: T): boolean;
        removeContainer(chunkPos: $ChunkPos): void;
        hasScheduledTick(pos: $BlockPos_, type: T): boolean;
        copyArea(area: $BoundingBox, offset: $Vec3i): void;
        count(): number;
        schedule(tick: $ScheduledTick_<T>): void;
        tick(gameTime: number, arg1: number, maxAllowedTicks: $BiConsumer_<$BlockPos, T>): void;
        addContainer(chunkPos: $ChunkPos, chunkTicks: $LevelChunkTicks<T>): void;
        constructor(tickCheck: $LongPredicate_, profiler: $Supplier_<$ProfilerFiller>);
    }
    export class $TickPriority extends $Enum<$TickPriority> {
        static byValue(priority: number): $TickPriority;
        static values(): $TickPriority[];
        static valueOf(arg0: string): $TickPriority;
        getValue(): number;
        static EXTREMELY_LOW: $TickPriority;
        static VERY_HIGH: $TickPriority;
        static HIGH: $TickPriority;
        static LOW: $TickPriority;
        static VERY_LOW: $TickPriority;
        static EXTREMELY_HIGH: $TickPriority;
        static NORMAL: $TickPriority;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $TickPriority}.
     */
    export type $TickPriority_ = "extremely_high" | "very_high" | "high" | "normal" | "low" | "very_low" | "extremely_low";
    export class $LevelTicks$PosAndContainerConsumer<T> {
    }
    export interface $LevelTicks$PosAndContainerConsumer<T> {
    }
    /**
     * Values that may be interpreted as {@link $LevelTicks$PosAndContainerConsumer}.
     */
    export type $LevelTicks$PosAndContainerConsumer_<T> = (() => void);
    export class $TickAccess<T> {
    }
    export interface $TickAccess<T> {
        hasScheduledTick(pos: $BlockPos_, type: T): boolean;
        count(): number;
        schedule(tick: $ScheduledTick_<T>): void;
    }
    export class $BlackholeTickAccess {
        static emptyContainer<T>(): $TickContainerAccess<T>;
        static emptyLevelList<T>(): $LevelTickAccess<T>;
        constructor();
    }
    export class $WorldGenTickAccess<T> implements $LevelTickAccess<T> {
        willTickThisTick(pos: $BlockPos_, type: T): boolean;
        hasScheduledTick(pos: $BlockPos_, type: T): boolean;
        count(): number;
        schedule(tick: $ScheduledTick_<T>): void;
        constructor(containerGetter: $Function_<$BlockPos, $TickContainerAccess<T>>);
    }
    export class $LevelTickAccess<T> {
    }
    export interface $LevelTickAccess<T> extends $TickAccess<T> {
        willTickThisTick(pos: $BlockPos_, type: T): boolean;
    }
    export class $LevelChunkTicks<T> implements $SerializableTickContainer<T>, $TickContainerAccess<T>, $LevelChunkTicksExtension<any>, $IChunkTickScheduler<any> {
        setOnTickAdded(onTickAdded: $BiConsumer_<$LevelChunkTicks<T>, $ScheduledTick<T>> | null): void;
        hasScheduledTick(pos: $BlockPos_, type: T): boolean;
        sable$copy(arg0: $LevelChunkTicks<any>): void;
        static load<T>(tag: $ListTag_, isParser: $Function_<string, (T) | undefined>, pos: $ChunkPos): $LevelChunkTicks<T>;
        count(): number;
        schedule(tick: $ScheduledTick_<T>): void;
        peek(): $ScheduledTick<T>;
        removeIf(predicate: $Predicate_<$ScheduledTick<T>>): void;
        poll(): $ScheduledTick<T>;
        getAll(): $Stream<$ScheduledTick<T>>;
        unpack(gameTime: number): void;
        getTickQueue(): $Queue<$ScheduledTick<T>>;
        save(gameTime: number, arg1: $Function_<T, string>): $Tag;
        getTicks(): $List<$SavedTick<T>>;
        constructor();
        constructor(pendingTicks: $List_<$SavedTick_<T>>);
        set onTickAdded(value: $BiConsumer_<$LevelChunkTicks<T>, $ScheduledTick<T>> | null);
        get all(): $Stream<$ScheduledTick<T>>;
        get tickQueue(): $Queue<$ScheduledTick<T>>;
        get ticks(): $List<$SavedTick<T>>;
    }
    export class $TickContainerAccess<T> {
    }
    export interface $TickContainerAccess<T> extends $TickAccess<T> {
    }
    export class $SerializableTickContainer<T> {
    }
    export interface $SerializableTickContainer<T> {
        save(gameTime: number, arg1: $Function_<T, string>): $Tag;
    }
    /**
     * Values that may be interpreted as {@link $SerializableTickContainer}.
     */
    export type $SerializableTickContainer_<T> = ((arg0: number, arg1: $Function<T, string>) => $Tag_);
    export class $ProtoChunkTicks<T> implements $SerializableTickContainer<T>, $TickContainerAccess<T>, $ISimpleTickScheduler<any> {
        scheduledTicks(): $List<$SavedTick<T>>;
        hasScheduledTick(pos: $BlockPos_, type: T): boolean;
        static load<T>(tag: $ListTag_, idParser: $Function_<string, (T) | undefined>, chunkPos: $ChunkPos): $ProtoChunkTicks<T>;
        count(): number;
        schedule(tick: $ScheduledTick_<T>): void;
        save(gameTime: number, arg1: $Function_<T, string>): $Tag;
        getScheduledTicks(): $List<$SavedTick<T>>;
        constructor();
    }
    export class $ContainerSingleItem$BlockContainerSingleItem {
    }
    export interface $ContainerSingleItem$BlockContainerSingleItem extends $ContainerSingleItem {
        getContainerBlockEntity(): $BlockEntity;
        stillValid(arg0: $Player): boolean;
        get containerBlockEntity(): $BlockEntity;
    }
    export class $SavedTick<T> extends $Record {
        static loadTick<T>(tag: $CompoundTag_, idParser: $Function_<string, (T) | undefined>): ($SavedTick<T>) | undefined;
        static saveTick(id: string, pos: $BlockPos_, delay: number, priority: $TickPriority_): $CompoundTag;
        static saveTick<T>(tick: $ScheduledTick_<T>, idGetter: $Function_<T, string>, gameTime: number): $CompoundTag;
        static loadTickList<T>(tag: $ListTag_, idParser: $Function_<string, (T) | undefined>, chunkPos: $ChunkPos, output: $Consumer_<$SavedTick<T>>): void;
        priority(): $TickPriority;
        type(): T;
        delay(): number;
        save(idGetter: $Function_<T, string>): $CompoundTag;
        pos(): $BlockPos;
        static probe<T>(type: T, pos: $BlockPos_): $SavedTick<T>;
        unpack(gameTime: number, arg1: number): $ScheduledTick<T>;
        static UNIQUE_TICK_HASH: $Hash$Strategy<$SavedTick<never>>;
        constructor(arg0: T, arg1: $BlockPos_, arg2: number, arg3: $TickPriority_);
    }
    /**
     * Values that may be interpreted as {@link $SavedTick}.
     */
    export type $SavedTick_<T> = { type?: any, priority?: $TickPriority_, pos?: $BlockPos_, delay?: number,  } | [type?: any, priority?: $TickPriority_, pos?: $BlockPos_, delay?: number, ];
}
