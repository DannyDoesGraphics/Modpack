import { $PistonStructureResolver } from "@package/net/minecraft/world/level/block/piston";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MobCategory_, $MobCategory, $Entity } from "@package/net/minecraft/world/entity";
import { $List, $EnumSet, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkHolder, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $ChunkType_, $ChunkType } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum } from "@package/java/lang";
import { $ItemAbility_, $ItemAbility } from "@package/net/neoforged/neoforge/common";
import { $CustomSpawner_, $Explosion, $LevelAccessor, $ChunkPos, $Level, $CustomSpawner, $Level_ } from "@package/net/minecraft/world/level";
import { $TreeDecorator$Context } from "@package/net/minecraft/world/level/levelgen/feature/treedecorators";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $LevelChunk, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $NoteBlockInstrument, $NoteBlockInstrument_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $PortalShape } from "@package/net/minecraft/world/level/portal";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $EventHandlerImplCommon$LevelEventAttachment } from "@package/dev/architectury/event/forge";
export * as block from "@package/net/neoforged/neoforge/event/level/block";

declare module "@package/net/neoforged/neoforge/event/level" {
    /**
     * This event is fired when all players are asleep and the time should be set to day.
     * 
     * setWakeUpTime(wakeUpTime) sets a new time that will be added to the dayTime.
     */
    export class $SleepFinishedTimeEvent extends $LevelEvent {
        getNewTime(): number;
        /**
         * Sets the new time which should be set when all players wake up
         */
        setTimeAddition(newTimeIn: number): boolean;
        constructor(level: $ServerLevel, newTime: number, minTime: number);
        get newTime(): number;
        set timeAddition(value: number);
    }
    /**
     * This event is fired when `Context, BlockPos)` attempts to alter a ground block when generating a feature.
     * 
     * An example of this would be large spruce trees converting grass blocks into podzol.
     * 
     * This event is not cancellable.
     * 
     * This event is fired on the main Forge event bus only on the logical server.
     * 
     * This event is fired on worker threads, meaning it is unsafe to access external global state.
     * 
     * Doing so may induce `ConcurrentModificationException` or deadlocks.
     */
    export class $AlterGroundEvent extends $Event {
        getStateProvider(): $AlterGroundEvent$StateProvider;
        setStateProvider(arg0: $AlterGroundEvent$StateProvider_): void;
        /**
         * The list of positions that are considered roots is different depending on if the context has roots, logs, or both.
         * 
         * If roots are not present, this list is equivalent to the logs.
         * 
         * If there are roots, and the roots have the same y-level as the lowest log, both this list is the union of both lists.
         * 
         * Otherwise, this list is equal to only the roots.
         * 
         * In either case, only positions which match the y-level of the zeroth element will be used during placement.
         * 
         * This list is immutable.
         */
        getPositions(): $List<$BlockPos>;
        /**
         * Gets the tree decoration context for the current alteration.
         */
        getContext(): $TreeDecorator$Context;
        constructor(arg0: $TreeDecorator$Context, arg1: $List_<$BlockPos_>, arg2: $AlterGroundEvent$StateProvider_);
        get positions(): $List<$BlockPos>;
        get context(): $TreeDecorator$Context;
    }
    /**
     * This event is fired whenever a `ServerPlayer` begins watching a chunk and the chunk is queued up for
     * sending to the client (see `ChunkMap#markChunkPendingToSend(ServerPlayer, LevelChunk)`).
     * 
     * This event must NOT be used to send additional chunk-related data to the client as the client will not be aware
     * of the chunk yet when this event fires. `Sent` should be used for this purpose instead
     * 
     * This event is not cancellable and does not have a result.
     * 
     * This event is fired on the main Forge event bus
     * only on the logical server.
     */
    export class $ChunkWatchEvent$Watch extends $ChunkWatchEvent {
        getChunk(): $LevelChunk;
        constructor(player: $ServerPlayer, chunk: $LevelChunk, level: $ServerLevel);
        get chunk(): $LevelChunk;
    }
    export class $NoteBlockEvent$Octave extends $Enum<$NoteBlockEvent$Octave> {
        static values(): $NoteBlockEvent$Octave[];
        static valueOf(arg0: string): $NoteBlockEvent$Octave;
        static HIGH: $NoteBlockEvent$Octave;
        static LOW: $NoteBlockEvent$Octave;
        static MID: $NoteBlockEvent$Octave;
    }
    /**
     * Values that may be interpreted as {@link $NoteBlockEvent$Octave}.
     */
    export type $NoteBlockEvent$Octave_ = "low" | "mid" | "high";
    /**
     * ExplosionEvent.Start is fired before the explosion actually occurs. Canceling this event will stop the explosion.
     * 
     * This event is `ICancellableEvent`.
     * 
     * This event does not use `HasResult`.
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $ExplosionEvent$Start extends $ExplosionEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(level: $Level_, explosion: $Explosion);
    }
    /**
     * This event is fired on the logical server when a `ServerLevel` is building its custom spawners.
     * 
     * Subscribe to this event to add/remove custom spawners for the level.
     * 
     * This event is not cancellable and does not have a result.
     */
    export class $ModifyCustomSpawnersEvent extends $Event {
        /**
         * Adds a custom spawner to the list.
         */
        addCustomSpawner(customSpawner: $CustomSpawner_): void;
        getCustomSpawners(): $List<$CustomSpawner>;
        /**
         * @return the server level this event is affecting
         */
        getLevel(): $ServerLevel;
        constructor(serverLevel: $ServerLevel, customSpawners: $List_<$CustomSpawner_>);
        get customSpawners(): $List<$CustomSpawner>;
        get level(): $ServerLevel;
    }
    /**
     * This event is fired whenever a chunk has its ticket level changed via the server's ChunkMap.
     * 
     * This event does not fire if the new ticket level is the same as the old level, or if both the
     * new **AND** old ticket levels represent values past the max chunk distance.
     * 
     * Due to how vanilla processes ticket level changes this event may be fired "twice" in one tick for the same chunk.
     * The scenario where this happens is when increasing the level from say 31 (ticking) to 32, the way vanilla does it
     * is by first changing it from 31 to 46, and then queuing the update from 46 to 32. However, when going from 32 to 31,
     * vanilla is able to go directly.
     * 
     * This event is not cancellable and does not have a result.
     * 
     * This event is fired on the main Forge event bus
     * only on the logical server.
     */
    export class $ChunkTicketLevelUpdatedEvent extends $Event {
        /**
         * @return the previous ticket level the chunk had
         */
        getOldTicketLevel(): number;
        /**
         * @return the previous ticket level the chunk had
         */
        getNewTicketLevel(): number;
        /**
         * @return chunk that had its ticket level updated
         */
        getChunkHolder(): $ChunkHolder;
        /**
         * @return the long representation of the chunk position the ticket level changed for
         */
        getChunkPos(): number;
        /**
         * @return the server level containing the chunk
         */
        getLevel(): $ServerLevel;
        constructor(level: $ServerLevel, chunkPos: number, oldTicketLevel: number, newTicketLevel: number, chunkHolder: $ChunkHolder);
        get oldTicketLevel(): number;
        get newTicketLevel(): number;
        get chunkHolder(): $ChunkHolder;
        get chunkPos(): number;
        get level(): $ServerLevel;
    }
    /**
     * This event is fired whenever a `ServerPlayer` stops watching a chunk. The chunk this event fires for
     * may never have actually been known to the client if the chunk goes out of range before being sent due to
     * slow pacing of chunk sync on slow connections or to slow clients.
     * 
     * This event is fired when a chunk is removed from the watched chunks of an `ServerPlayer`
     * in `ChunkMap#dropChunk(ServerPlayer, ChunkPos)`.
     * 
     * This event is not cancellable and does not have a result.
     * 
     * This event is fired on the main Forge event bus
     * only on the logical server.
     */
    export class $ChunkWatchEvent$UnWatch extends $ChunkWatchEvent {
        constructor(player: $ServerPlayer, pos: $ChunkPos, level: $ServerLevel);
    }
    /**
     * ChunkEvent.Load is fired when vanilla Minecraft attempts to load a Chunk into the level.
     * 
     * This event is fired during chunk loading in
     * 
     * Chunk.onChunkLoad().
     * 
     * **Note:** This event may be called before the underlying `LevelChunk` is promoted to `ChunkStatus#FULL`. You will cause chunk loading deadlocks if you don't delay your level interactions.
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $ChunkEvent$Load extends $ChunkEvent {
        /**
         * Check whether the Chunk is newly generated, and being loaded for the first time.
         * 
         * Will only ever return `true` on the logical server.
         */
        isNewChunk(): boolean;
        constructor(chunk: $ChunkAccess, newChunk: boolean);
        get newChunk(): boolean;
    }
    /**
     * Fired when building a list of all possible entities that can spawn at the specified location.
     * 
     * If an entry is added to the list, it needs to be a globally unique instance.
     * 
     * The event is called in `NaturalSpawner#mobsAt(ServerLevel,
     * StructureManager, ChunkGenerator, MobCategory, RandomSource, BlockPos)`.
     * 
     * This event is cancellable, and does not have a result.
     * Canceling the event will result in an empty list, meaning no entity will be spawned.
     */
    export class $LevelEvent$PotentialSpawns extends $LevelEvent implements $ICancellableEvent {
        /**
         * @return the block position where the chosen mob will be spawned.
         */
        getPos(): $BlockPos;
        /**
         * @return the list of mobs that can potentially be spawned.
         */
        getSpawnerDataList(): $List<$MobSpawnSettings$SpawnerData>;
        /**
         * Removes a SpawnerData entry from the spawn list.
         */
        removeSpawnerData(data: $MobSpawnSettings$SpawnerData): boolean;
        /**
         * @return the category of the mobs in the spawn list.
         */
        getMobCategory(): $MobCategory;
        /**
         * Appends a SpawnerData entry to the spawn list.
         */
        addSpawnerData(data: $MobSpawnSettings$SpawnerData): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(level: $LevelAccessor, category: $MobCategory_, pos: $BlockPos_, oldList: $WeightedRandomList<$MobSpawnSettings$SpawnerData>);
        get pos(): $BlockPos;
        get spawnerDataList(): $List<$MobSpawnSettings$SpawnerData>;
        get mobCategory(): $MobCategory;
    }
    /**
     * This event is fired whenever a chunk has a watch-related action.
     * 
     * The player's level may not be the same as the level of the chunk
     * when the player is teleporting to another dimension.
     * 
     * This event is not cancellable and does not have a result.
     * 
     * This event is fired on the main Forge event bus
     * only on the logical server.
     */
    export class $ChunkWatchEvent extends $Event {
        /**
         * @return the chunk position this watch event is affecting
         */
        getPos(): $ChunkPos;
        /**
         * @return the server player involved with the watch action
         */
        getPlayer(): $ServerPlayer;
        /**
         * @return the server level containing the chunk
         */
        getLevel(): $ServerLevel;
        constructor(player: $ServerPlayer, pos: $ChunkPos, level: $ServerLevel);
        get pos(): $ChunkPos;
        get player(): $ServerPlayer;
        get level(): $ServerLevel;
    }
    /**
     * This event is fired whenever an event involving a `LevelAccessor` occurs.
     * 
     * All children of this event are fired on the main Forge event bus.
     */
    export class $LevelEvent extends $Event implements $EventHandlerImplCommon$LevelEventAttachment {
        /**
         * @return the level this event is affecting
         */
        getLevel(): $LevelAccessor;
        /**
         * @return the level this event is affecting
         */
        architectury$getAttachedLevel(): $LevelAccessor;
        architectury$attachLevel(level: $LevelAccessor): void;
        constructor(level: $LevelAccessor);
        get level(): $LevelAccessor;
    }
    /**
     * This event fires whenever a level is saved.
     * This event is fired when a level is saved in
     * `ServerLevel#save(ProgressListener, boolean, boolean)`.
     * 
     * This event is not cancellable and does not have a result.
     * 
     * This event is fired on the main Forge event bus
     * only on the logical server.
     */
    export class $LevelEvent$Save extends $LevelEvent {
        constructor(level: $LevelAccessor);
    }
    /**
     * This event is fired whenever a level loads.
     * This event is fired whenever a level loads in ClientLevel's constructor and
     * MinecraftServer#createLevels(ChunkProgressListener).
     * 
     * This event is not cancellable and does not have a result.
     * 
     * This event is fired on the main Forge event bus
     * on both logical sides.
     */
    export class $LevelEvent$Load extends $LevelEvent {
        constructor(level: $LevelAccessor);
    }
    /**
     * ExplosionEvent triggers when an explosion happens in the level.
     * 
     * ExplosionEvent.Start is fired before the explosion actually occurs.
     * 
     * ExplosionEvent.Detonate is fired once the explosion has a list of affected blocks and entities.
     * 
     * ExplosionEvent.Start is `ICancellableEvent`.
     * 
     * ExplosionEvent.Detonate can modify the affected blocks and entities.
     * 
     * Children do not use `HasResult`.
     * 
     * Children of this event are fired on the `NeoForge#EVENT_BUS`.
     */
    export class $ExplosionEvent extends $Event {
        getExplosion(): $Explosion;
        getLevel(): $Level;
        constructor(level: $Level_, explosion: $Explosion);
        get explosion(): $Explosion;
        get level(): $Level;
    }
    /**
     * Fired when an attempt is made to spawn a nether portal from
     * `BaseFireBlock#onPlace(BlockState, Level, BlockPos, BlockState, boolean)`.
     * 
     * If cancelled, the portal will not be spawned.
     */
    export class $BlockEvent$PortalSpawnEvent extends $BlockEvent implements $ICancellableEvent {
        getPortalSize(): $PortalShape;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, size: $PortalShape);
        get portalSize(): $PortalShape;
    }
    /**
     * Fired when a block is broken and the drops have been determined, but before they have been added to the world. This event can be used to manipulate the dropped items and experience.
     * 
     * No guarantees can be made about the block. It will either have already been removed from the world, or will be removed after the event terminates.
     * 
     * If you wish to edit the state of the block in-world, use `BreakEvent`.
     */
    export class $BlockDropsEvent extends $BlockEvent implements $ICancellableEvent {
        /**
         * @return the amount of experience points that will be dropped by the block
         */
        getDroppedExperience(): number;
        /**
         * @return the entity that broke the block, or null if unknown
         */
        getBreaker(): $Entity;
        /**
         * @return the tool used when breaking this block; may be empty
         */
        getTool(): $ItemStack;
        /**
         * Set the amount of experience points that will be dropped by the block. This is the true value, after enchantments have been applied.
         */
        setDroppedExperience(experience: number): void;
        /**
         * Cancels this event, preventing any drops from being spawned and preventing `Block#spawnAfterBreak` from being called.
         * 
         * Also prevents experience from being spawned.
         */
        setCanceled(canceled: boolean): void;
        /**
         * Returns a mutable list of item entities that will be dropped by this block.
         * 
         * When this event completes successfully, all entities in this list will be added to the world.
         */
        getDrops(): $List<$ItemEntity>;
        /**
         * @return the block entity from the current position, if available
         */
        getBlockEntity(): $BlockEntity;
        isCanceled(): boolean;
        /**
         * Constructs a new BlockDropsEvent
         */
        constructor(level: $ServerLevel, pos: $BlockPos_, state: $BlockState_, blockEntity: $BlockEntity, drops: $List_<$ItemEntity>, breaker: $Entity, tool: $ItemStack_);
        get breaker(): $Entity;
        get tool(): $ItemStack;
        get drops(): $List<$ItemEntity>;
        get blockEntity(): $BlockEntity;
    }
    /**
     * Fired when a physics update occurs on a block. This event acts as
     * a way for mods to detect physics updates, in the same way a BUD switch
     * does. This event is only called on the server.
     */
    export class $BlockEvent$NeighborNotifyEvent extends $BlockEvent implements $ICancellableEvent {
        /**
         * Gets a list of directions from the base block that updates will occur upon.
         */
        getNotifiedSides(): $EnumSet<$Direction>;
        /**
         * Get if redstone update was forced during setBlock call (0x16 to flags)
         */
        getForceRedstoneUpdate(): boolean;
        setCanceled(arg0: boolean): void;
        /**
         * Get if redstone update was forced during setBlock call (0x16 to flags)
         */
        isCanceled(): boolean;
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_, notifiedSides: $EnumSet<$Direction_>, forceRedstoneUpdate: boolean);
        get notifiedSides(): $EnumSet<$Direction>;
        get forceRedstoneUpdate(): boolean;
    }
    /**
     * This event fires whenever a `ServerLevel` is initialized for the first time
     * and a spawn position needs to be chosen.
     * 
     * This event is cancellable and does not have a result.
     * If the event is canceled, the vanilla logic to choose a spawn position will be skipped.
     * 
     * This event is fired on the main Forge event bus
     * only on the logical server.
     */
    export class $LevelEvent$CreateSpawnPosition extends $LevelEvent implements $ICancellableEvent {
        getSettings(): $ServerLevelData;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(level: $LevelAccessor, settings: $ServerLevelData);
        get settings(): $ServerLevelData;
    }
    /**
     * Fired when when farmland gets trampled
     * This event is `ICancellableEvent`
     */
    export class $BlockEvent$FarmlandTrampleEvent extends $BlockEvent implements $ICancellableEvent {
        getFallDistance(): number;
        getEntity(): $Entity;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_, fallDistance: number, entity: $Entity);
        get fallDistance(): number;
        get entity(): $Entity;
    }
    /**
     * Called when a block is placed.
     * 
     * If a Block Place event is cancelled, the block will not be placed.
     */
    export class $BlockEvent$EntityPlaceEvent extends $BlockEvent implements $ICancellableEvent {
        getPlacedBlock(): $BlockState;
        getBlockSnapshot(): $BlockSnapshot;
        getPlacedAgainst(): $BlockState;
        getEntity(): $Entity;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(blockSnapshot: $BlockSnapshot, placedAgainst: $BlockState_, entity: $Entity);
        get placedBlock(): $BlockState;
        get blockSnapshot(): $BlockSnapshot;
        get placedAgainst(): $BlockState;
        get entity(): $Entity;
    }
    /**
     * Fired when a Noteblock plays it's note. You can override the note and instrument
     * Canceling this event will stop the note from playing.
     */
    export class $NoteBlockEvent$Play extends $NoteBlockEvent implements $ICancellableEvent {
        setInstrument(instrument: $NoteBlockInstrument_): void;
        getInstrument(): $NoteBlockInstrument;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(world: $Level_, pos: $BlockPos_, state: $BlockState_, note: number, instrument: $NoteBlockInstrument_);
    }
    /**
     * ChunkDataEvent.Save is fired when vanilla Minecraft attempts to save Chunk data.
     * 
     * This event is fired during chunk saving in
     * `ChunkMap#save(ChunkAccess)`.
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $ChunkDataEvent$Save extends $ChunkDataEvent {
        constructor(chunk: $ChunkAccess, world: $LevelAccessor, data: $CompoundTag_);
    }
    /**
     * ChunkDataEvent is fired when an event involving chunk data occurs.
     * 
     * If a method utilizes this `Event` as its parameter, the method will
     * receive every child event of this class.
     * 
     * `#data` contains the NBTTagCompound containing the chunk data for this event.
     * 
     * All children of this event are fired on the `NeoForge#EVENT_BUS`.
     */
    export class $ChunkDataEvent extends $ChunkEvent {
        getData(): $CompoundTag;
        constructor(chunk: $ChunkAccess, data: $CompoundTag_);
        constructor(chunk: $ChunkAccess, world: $LevelAccessor, data: $CompoundTag_);
        get data(): $CompoundTag;
    }
    /**
     * Fired when a single block placement triggers the
     * creation of multiple blocks(e.g. placing a bed block). The block returned
     * by `#state` and its related methods is the block where
     * the placed block would exist if the placement only affected a single
     * block.
     */
    export class $BlockEvent$EntityMultiPlaceEvent extends $BlockEvent$EntityPlaceEvent implements $ICancellableEvent {
        /**
         * Gets a list of BlockSnapshots for all blocks which were replaced by the
         * placement of the new blocks. Most of these blocks will just be of type AIR.
         */
        getReplacedBlockSnapshots(): $List<$BlockSnapshot>;
        constructor(blockSnapshots: $List_<$BlockSnapshot>, placedAgainst: $BlockState_, entity: $Entity);
        get replacedBlockSnapshots(): $List<$BlockSnapshot>;
    }
    /**
     * ChunkDataEvent.Load is fired when vanilla Minecraft attempts to load Chunk data.
     * 
     * This event is fired during chunk loading in
     * `ChunkSerializer#read(ServerLevel, PoiManager, ChunkPos, CompoundTag)` which means it is async, so be careful.
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $ChunkDataEvent$Load extends $ChunkDataEvent {
        getType(): $ChunkType;
        constructor(chunk: $ChunkAccess, data: $CompoundTag_, type: $ChunkType_);
        get type(): $ChunkType;
    }
    export class $PistonEvent$PistonMoveType extends $Enum<$PistonEvent$PistonMoveType> {
        static values(): $PistonEvent$PistonMoveType[];
        static valueOf(arg0: string): $PistonEvent$PistonMoveType;
        static RETRACT: $PistonEvent$PistonMoveType;
        isExtend: boolean;
        static EXTEND: $PistonEvent$PistonMoveType;
    }
    /**
     * Values that may be interpreted as {@link $PistonEvent$PistonMoveType}.
     */
    export type $PistonEvent$PistonMoveType_ = "extend" | "retract";
    export class $NoteBlockEvent$Note extends $Enum<$NoteBlockEvent$Note> {
        static values(): $NoteBlockEvent$Note[];
        static valueOf(arg0: string): $NoteBlockEvent$Note;
        static A: $NoteBlockEvent$Note;
        static F_SHARP: $NoteBlockEvent$Note;
        static B: $NoteBlockEvent$Note;
        static C: $NoteBlockEvent$Note;
        static D: $NoteBlockEvent$Note;
        static E: $NoteBlockEvent$Note;
        static F: $NoteBlockEvent$Note;
        static G: $NoteBlockEvent$Note;
        static G_SHARP: $NoteBlockEvent$Note;
        static A_SHARP: $NoteBlockEvent$Note;
        static D_SHARP: $NoteBlockEvent$Note;
        static C_SHARP: $NoteBlockEvent$Note;
    }
    /**
     * Values that may be interpreted as {@link $NoteBlockEvent$Note}.
     */
    export type $NoteBlockEvent$Note_ = "f_sharp" | "g" | "g_sharp" | "a" | "a_sharp" | "b" | "c" | "c_sharp" | "d" | "d_sharp" | "e" | "f";
    /**
     * Fires after the piston has moved and set surrounding states. This will not fire if `Pre` is cancelled.
     */
    export class $PistonEvent$Post extends $PistonEvent {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $PistonEvent$PistonMoveType_);
    }
    /**
     * This event is fired on the server when a player attempts to break a block, upon receipt of a block break packet.
     * 
     * The following conditions may cause this event to fire in a cancelled state:
     * 
     * - If `Player#blockActionRestricted` is true.
     * - If the target block is a `GameMasterBlock` and `Player#canUseGameMasterBlocks()` is false.
     * - If the the player is holding an item, and `Item#canAttackBlock` is false.
     * 
     * In the first two cases, un-cancelling the event will not permit the block to be broken.
     * In the third case, un-cancelling will allow the break, bypassing the behavior of `Item#canAttackBlock`.
     */
    export class $BlockEvent$BreakEvent extends $BlockEvent implements $ICancellableEvent {
        /**
         * Cancelling this event will prevent the block from being broken, and notifies the client of the refusal.
         */
        setCanceled(canceled: boolean): void;
        /**
         * @return the player who is attempting to break the block
         */
        getPlayer(): $Player;
        isCanceled(): boolean;
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_, player: $Player);
        get player(): $Player;
    }
    /**
     * This event is fired whenever a block (like a sapling) grows into a feature (like a tree).
     * 
     * In vanilla, this fires for saplings, fungi, mushrooms and azaleas. Mods may fire it for similar blocks.
     * 
     * This event is only fired on the logical server.
     */
    export class $BlockGrowFeatureEvent extends $LevelEvent implements $ICancellableEvent {
        /**
         * @return the coordinates of the sapling attempting to grow
         */
        getPos(): $BlockPos;
        /**
         * Canceling this event will prevent the feature from growing. The original block will remain in place.
         */
        setCanceled(canceled: boolean): void;
        /**
         * @return the holder of the feature which will be placed, possibly null
         */
        getFeature(): $Holder<$ConfiguredFeature<never, never>>;
        /**
         * Changes the feature that will be grown. If the holder cannot be resolved, a null feature will be set.
         */
        setFeature(featureKey: $ResourceKey_<$ConfiguredFeature<never, never>>): void;
        /**
         * Changes the feature that will be grown. If a null feature is set, the original block will remain in place.
         */
        setFeature(feature: $Holder_<$ConfiguredFeature<never, never>>): void;
        /**
         * @return the random source which initiated the sapling growth
         */
        getRandom(): $RandomSource;
        isCanceled(): boolean;
        constructor(level: $LevelAccessor, rand: $RandomSource, pos: $BlockPos_, feature: $Holder_<$ConfiguredFeature<never, never>>);
        get pos(): $BlockPos;
        get random(): $RandomSource;
    }
    /**
     * Fires before the piston has updated block states. Cancellation prevents movement.
     */
    export class $PistonEvent$Pre extends $PistonEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $PistonEvent$PistonMoveType_);
    }
    /**
     * Base piston event, use `Post` and `Pre`
     */
    export class $PistonEvent extends $BlockEvent {
        getPistonMoveType(): $PistonEvent$PistonMoveType;
        /**
         * Helper method that gets the piston position offset by its facing
         */
        getFaceOffsetPos(): $BlockPos;
        getStructureHelper(): $PistonStructureResolver;
        getDirection(): $Direction;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $PistonEvent$PistonMoveType_);
        get pistonMoveType(): $PistonEvent$PistonMoveType;
        get faceOffsetPos(): $BlockPos;
        get structureHelper(): $PistonStructureResolver;
        get direction(): $Direction;
    }
    /**
     * This event is fired whenever a chunk being watched by a `ServerPlayer` is transmitted to their client
     * (see `PlayerChunkSender#sendNextChunks(ServerPlayer)`).
     * 
     * This event may be used to send additional chunk-related data to the client.
     * 
     * This event is not cancellable and does not have a result.
     * 
     * This event is fired on the main Forge event bus
     * only on the logical server.
     */
    export class $ChunkWatchEvent$Sent extends $ChunkWatchEvent {
        getChunk(): $LevelChunk;
        constructor(player: $ServerPlayer, chunk: $LevelChunk, level: $ServerLevel);
        get chunk(): $LevelChunk;
    }
    /**
     * ChunkEvent is fired when an event involving a chunk occurs.
     * 
     * If a method utilizes this `Event` as its parameter, the method will
     * receive every child event of this class.
     * 
     * `#chunk` contains the Chunk this event is affecting.
     * 
     * All children of this event are fired on the `NeoForge#EVENT_BUS`.
     */
    export class $ChunkEvent extends $LevelEvent {
        getChunk(): $ChunkAccess;
        constructor(chunk: $ChunkAccess);
        constructor(chunk: $ChunkAccess, level: $LevelAccessor);
        get chunk(): $ChunkAccess;
    }
    /**
     * Base class for Noteblock Events
     */
    export class $NoteBlockEvent extends $BlockEvent {
        /**
         * get the vanilla note-id, which contains information about both Note and Octave. Most modders should not need this.
         */
        getVanillaNoteId(): number;
        getNote(): $NoteBlockEvent$Note;
        getOctave(): $NoteBlockEvent$Octave;
        setNote(arg0: $NoteBlockEvent$Note_, arg1: $NoteBlockEvent$Octave_): void;
        get vanillaNoteId(): number;
        get octave(): $NoteBlockEvent$Octave;
    }
    /**
     * ExplosionKnockbackEvent is fired once the explosion has calculated the knockback velocity to add to the entity caught in blast.
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not use `HasResult`.
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $ExplosionKnockbackEvent extends $ExplosionEvent {
        /**
         * return the explosion knockback velocity to apply to entity.
         */
        getKnockbackVelocity(): $Vec3;
        /**
         * return the entity affected by the explosion knockback.
         */
        getAffectedEntity(): $Entity;
        /**
         * Sets the explosion knockback velocity to add to the entity's existing velocity.
         */
        setKnockbackVelocity(newKnockbackVelocity: $Vec3_): void;
        /**
         * return the list of blocks affected by the explosion.
         */
        getAffectedBlocks(): $List<$BlockPos>;
        constructor(level: $Level_, explosion: $Explosion, entity: $Entity, knockbackVelocity: $Vec3_);
        get affectedEntity(): $Entity;
        get affectedBlocks(): $List<$BlockPos>;
    }
    export class $BlockEvent extends $Event {
        getPos(): $BlockPos;
        getState(): $BlockState;
        getLevel(): $LevelAccessor;
        constructor(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_);
        get pos(): $BlockPos;
        get state(): $BlockState;
        get level(): $LevelAccessor;
    }
    /**
     * Fired when a block is right-clicked by a tool to change its state.
     * For example: Used to determine if an axe can strip,
     * a shovel can path, or a hoe can till.
     * 
     * Care must be taken to ensure level-modifying events are only performed if `#isSimulated()` returns `false`.
     * 
     * This event is `ICancellableEvent`. If canceled, this will prevent the tool
     * from changing the block's state.
     */
    export class $BlockEvent$BlockToolModificationEvent extends $BlockEvent implements $ICancellableEvent {
        getHeldItemStack(): $ItemStack;
        /**
         * Returns the state to transform the block into after item ability use.
         * If `#setFinalState(BlockState)` is not called, this will return the original state.
         * If `#isCanceled()` is `true`, this value will be ignored and the item ability will be canceled.
         */
        getFinalState(): $BlockState;
        /**
         * Sets the state to transform the block into after tool use.
         */
        setFinalState(finalState: $BlockState_): void;
        getPlayer(): $Player;
        getItemAbility(): $ItemAbility;
        /**
         * Returns `true` if this event should not perform any actions that modify the level.
         * If `false`, then level-modifying actions can be performed.
         */
        isSimulated(): boolean;
        /**
         * Returns the nonnull use on context that this event was performed in.
         */
        getContext(): $UseOnContext;
        setCanceled(arg0: boolean): void;
        /**
         * Returns `true` if this event should not perform any actions that modify the level.
         * If `false`, then level-modifying actions can be performed.
         */
        isCanceled(): boolean;
        constructor(originalState: $BlockState_, context: $UseOnContext, itemAbility: $ItemAbility_, simulate: boolean);
        get heldItemStack(): $ItemStack;
        get player(): $Player;
        get itemAbility(): $ItemAbility;
        get simulated(): boolean;
        get context(): $UseOnContext;
    }
    /**
     * This event is fired whenever a level unloads.
     * This event is fired whenever a level unloads in
     * `Minecraft#setLevel(ClientLevel)`,
     * `MinecraftServer#stopServer()`,
     * `Minecraft#clearLevel(Screen)`.
     * 
     * This event is not cancellable and does not have a result.
     * 
     * This event is fired on the main Forge event bus
     * on both logical sides.
     */
    export class $LevelEvent$Unload extends $LevelEvent {
        constructor(level: $LevelAccessor);
    }
    /**
     * Fired when a Noteblock is changed. You can adjust the note it will change to via `#setNote(Note, Octave)`.
     * Canceling this event will not change the note and also stop the Noteblock from playing it's note.
     */
    export class $NoteBlockEvent$Change extends $NoteBlockEvent implements $ICancellableEvent {
        getOldNote(): $NoteBlockEvent$Note;
        getOldOctave(): $NoteBlockEvent$Octave;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(world: $Level_, pos: $BlockPos_, state: $BlockState_, oldNote: number, newNote: number);
        get oldNote(): $NoteBlockEvent$Note;
        get oldOctave(): $NoteBlockEvent$Octave;
    }
    export class $AlterGroundEvent$StateProvider {
    }
    export interface $AlterGroundEvent$StateProvider {
        /**
         * Gets the BlockState that will be placed at the passed position.
         */
        getState(random: $RandomSource, state: $BlockPos_): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $AlterGroundEvent$StateProvider}.
     */
    export type $AlterGroundEvent$StateProvider_ = ((arg0: $RandomSource, arg1: $BlockPos) => $BlockState_);
    /**
     * ExplosionEvent.Detonate is fired once the explosion has a list of affected blocks and entities. These lists can be modified to change the outcome.
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not use `HasResult`.
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $ExplosionEvent$Detonate extends $ExplosionEvent {
        /**
         * return the list of blocks affected by the explosion.
         */
        getAffectedEntities(): $List<$Entity>;
        /**
         * return the list of blocks affected by the explosion.
         */
        getAffectedBlocks(): $List<$BlockPos>;
        constructor(level: $Level_, explosion: $Explosion, entityList: $List_<$Entity>);
        get affectedEntities(): $List<$Entity>;
        get affectedBlocks(): $List<$BlockPos>;
    }
    /**
     * Fired when a liquid places a block. Use `#setNewState(BlockState)` to change the result of
     * a cobblestone generator or add variants of obsidian. Alternatively, you could execute
     * arbitrary code when lava sets blocks on fire, even preventing it.
     * 
     * `#getState()` will return the block that was originally going to be placed.
     * `#getPos()` will return the position of the block to be changed.
     */
    export class $BlockEvent$FluidPlaceBlockEvent extends $BlockEvent implements $ICancellableEvent {
        getNewState(): $BlockState;
        getLiquidPos(): $BlockPos;
        setNewState(state: $BlockState_): void;
        getOriginalState(): $BlockState;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(level: $LevelAccessor, pos: $BlockPos_, liquidPos: $BlockPos_, state: $BlockState_);
        get liquidPos(): $BlockPos;
        get originalState(): $BlockState;
    }
    /**
     * ChunkEvent.Unload is fired when vanilla Minecraft attempts to unload a Chunk from the level.
     * 
     * This event is fired during chunk unloading in
     * 
     * Chunk.onChunkUnload().
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $ChunkEvent$Unload extends $ChunkEvent {
        constructor(chunk: $ChunkAccess);
    }
}
