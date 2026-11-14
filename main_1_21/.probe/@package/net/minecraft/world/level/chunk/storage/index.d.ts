import { $Long2ObjectLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $SerializingRegionBasedStorageExtension } from "@package/com/ishland/c2me/rewrites/chunksystem/common/async_chunkio";
import { $Codec, $Dynamic, $MapCodec } from "@package/com/mojang/serialization";
import { $NbtException, $StreamTagVisitor, $Tag_, $Tag, $CompoundTag, $ListTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $IDirectStorage } from "@package/com/ishland/c2me/base/common/theinterface";
import { $BitSet } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ReportedException } from "@package/net/minecraft";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $ChunkType } from "@package/net/minecraft/world/level/chunk/status";
import { $Throwable, $Enum, $Record, $AutoCloseable, $Object, $Iterable, $Runnable } from "@package/java/lang";
import { $IStorageIoWorker, $IRegionBasedStorage, $IRegionFile, $IVersionedChunkStorage, $ISerializingRegionBasedStorage } from "@package/com/ishland/c2me/base/mixin/access";
import { $ChunkEntities, $EntityPersistentStorage } from "@package/net/minecraft/world/level/entity";
import { $IPOIUnloading } from "@package/com/ishland/c2me/rewrites/chunksystem/common/ducks";
import { $ShortList } from "@package/it/unimi/dsi/fastutil/shorts";
import { $ChunkPos, $LevelHeightAccessor, $Level } from "@package/net/minecraft/world/level";
import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $ByteArrayOutputStream, $DataOutputStream, $InputStream, $DataInputStream, $OutputStream } from "@package/java/io";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $RegionBasedStorageSectionExtended } from "@package/net/caffeinemc/mods/lithium/common/world/interests";
import { $ProtoChunk, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $DimensionDataStorage } from "@package/net/minecraft/world/level/storage";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";

declare module "@package/net/minecraft/world/level/chunk/storage" {
    /**
     * This class handles a single region (or anvil) file and all files for single chunks at chunk positions for that one region file.
     */
    export class $RegionFile implements $AutoCloseable, $IRegionFile {
        doesChunkExist(chunkPos: $ChunkPos): boolean;
        /**
         * Creates a new `InputStream` for a chunk stored in a separate file.
         */
        getChunkDataOutputStream(chunkPos: $ChunkPos): $DataOutputStream;
        getChunkDataInputStream(chunkPos: $ChunkPos): $DataInputStream;
        hasChunk(chunkPos: $ChunkPos): boolean;
        clear(chunkPos: $ChunkPos): void;
        flush(): void;
        close(): void;
        getPath(): $Path;
        getCompressionFormat(): $RegionFileVersion;
        invokeWriteChunk(chunkPos: $ChunkPos, chunkData: $ByteBuffer): void;
        constructor(info: $RegionStorageInfo_, path: $Path_, externalFileDir: $Path_, sync: boolean);
        constructor(info: $RegionStorageInfo_, path: $Path_, externalFileDir: $Path_, version: $RegionFileVersion, sync: boolean);
        get path(): $Path;
        get compressionFormat(): $RegionFileVersion;
    }
    /**
     * Handles reading and writing the region files for a `Level`.
     */
    export class $RegionFileStorage implements $AutoCloseable, $IRegionBasedStorage {
        scanChunk(chunkPos: $ChunkPos, visitor: $StreamTagVisitor): void;
        flush(): void;
        info(): $RegionStorageInfo;
        read(chunkPos: $ChunkPos): $CompoundTag;
        close(): void;
        invokeGetRegionFile(chunkPos: $ChunkPos): $RegionFile;
        folder: $Path;
        regionCache: $Long2ObjectLinkedOpenHashMap<$RegionFile>;
        static ANVIL_EXTENSION: string;
        constructor(info: $RegionStorageInfo_, folder: $Path_, sync: boolean);
    }
    export class $ChunkStorage implements $AutoCloseable, $IVersionedChunkStorage {
        flushWorker(): void;
        static injectDatafixingContext(chunkData: $CompoundTag_, levelKey: $ResourceKey_<$Level>, chunkGeneratorKey: ($ResourceKey_<$MapCodec<$ChunkGenerator>>) | undefined): void;
        isOldChunkAround(pos: $ChunkPos, radius: number): boolean;
        upgradeChunkTag(levelKey: $ResourceKey_<$Level>, storage: $Supplier_<$DimensionDataStorage>, chunkData: $CompoundTag_, chunkGeneratorKey: ($ResourceKey_<$MapCodec<$ChunkGenerator>>) | undefined): $CompoundTag;
        chunkScanner(): $ChunkScanAccess;
        write(chunkPos: $ChunkPos, data: $CompoundTag_): $CompletableFuture<void>;
        read(chunkPos: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        close(): void;
        static getVersion(chunkData: $CompoundTag_): number;
        getWorker(): $IOWorker;
        invokeGetStorageKey(): $RegionStorageInfo;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        worker: $IOWorker;
        constructor(info: $RegionStorageInfo_, folder: $Path_, fixerUpper: $DataFixer, sync: boolean);
    }
    export class $RegionStorageInfo extends $Record {
        withTypeSuffix(suffix: string): $RegionStorageInfo;
        dimension(): $ResourceKey<$Level>;
        type(): string;
        level(): string;
        constructor(arg0: string, arg1: $ResourceKey_<$Level>, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $RegionStorageInfo}.
     */
    export type $RegionStorageInfo_ = { type?: string, dimension?: $ResourceKey_<$Level>, level?: string,  } | [type?: string, dimension?: $ResourceKey_<$Level>, level?: string, ];
    export class $IOWorker implements $ChunkScanAccess, $AutoCloseable, $IStorageIoWorker, $IDirectStorage {
        isOldChunkAround(chunkPos: $ChunkPos, radius: number): boolean;
        scanChunk(chunkPos: $ChunkPos, visitor: $StreamTagVisitor): $CompletableFuture<void>;
        storageInfo(): $RegionStorageInfo;
        setRawChunkData(pos: $ChunkPos, data: number[]): $CompletableFuture<any>;
        setRawChunkData(pos: $ChunkPos, data: $CompletableFuture<any>): $CompletableFuture<any>;
        loadAsync(chunkPos: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        store(chunkPos: $ChunkPos, chunkData: $CompoundTag_ | null): $CompletableFuture<void>;
        close(): void;
        synchronize(flushStorage: boolean): $CompletableFuture<void>;
        invokeGetOrComputeBlendingStatus(chunkX: number, chunkZ: number): $CompletableFuture<$BitSet>;
        storage: $RegionFileStorage;
    }
    export class $ChunkSerializer {
        static getChunkTypeFromTag(tag: $CompoundTag_ | null): $ChunkType;
        static packOffsets(list: $ShortList[]): $ListTag;
        static write(level: $ServerLevel, chunk: $ChunkAccess): $CompoundTag;
        static read(level: $ServerLevel, poiManager: $PoiManager, regionStorageInfo: $RegionStorageInfo_, pos: $ChunkPos, tag: $CompoundTag_): $ProtoChunk;
        static SKY_LIGHT_TAG: string;
        static Z_POS_TAG: string;
        static SECTIONS_TAG: string;
        static IS_LIGHT_ON_TAG: string;
        static X_POS_TAG: string;
        static HEIGHTMAPS_TAG: string;
        static BLOCK_LIGHT_TAG: string;
        constructor();
    }
    export class $RecreatingSimpleRegionStorage extends $SimpleRegionStorage {
        constructor(info: $RegionStorageInfo_, folder: $Path_, writeInfo: $RegionStorageInfo_, writeFolder: $Path_, fixerUpper: $DataFixer, sync: boolean, dataFixType: $DataFixTypes_);
    }
    export class $IOWorker$PendingStore {
        result: $CompletableFuture<void>;
        data: $CompoundTag;
        constructor(data: $CompoundTag_ | null);
    }
    export class $ChunkIOErrorReporter {
        static createMisplacedChunkReport(pos: $ChunkPos, expectedPos: $ChunkPos): $ReportedException;
    }
    export interface $ChunkIOErrorReporter {
        reportChunkLoadFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        reportChunkSaveFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        reportMisplacedChunk(pos: $ChunkPos, expectedPos: $ChunkPos, regionStorageInfo: $RegionStorageInfo_): void;
    }
    export class $ChunkScanAccess {
    }
    export interface $ChunkScanAccess {
        scanChunk(chunkPos: $ChunkPos, visitor: $StreamTagVisitor): $CompletableFuture<void>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkScanAccess}.
     */
    export type $ChunkScanAccess_ = ((arg0: $ChunkPos, arg1: $StreamTagVisitor) => $CompletableFuture<void>);
    export class $SectionStorage<R> implements $AutoCloseable, $RegionBasedStorageSectionExtended<any>, $ISerializingRegionBasedStorage, $IPOIUnloading, $SerializingRegionBasedStorageExtension {
        lithium$getWithinChunkColumn(arg0: number, arg1: number): $Stream<any>;
        lithium$getInChunkColumn(arg0: number, arg1: number): $Iterable<any>;
        c2me$unloadPoi(chunkPos: $ChunkPos): void;
        remove(sectionKey: number): void;
        update(pos: $ChunkPos, tag: $CompoundTag_): void;
        flush(chunkPos: $ChunkPos): void;
        close(): void;
        hasWork(): boolean;
        getOrLoad(sectionKey: number): (never) | undefined;
        c2me$shouldUnloadPoi(pos: $ChunkPos): boolean;
        getStorageAccess(): $SimpleRegionStorage;
        constructor(simpleRegionStorage: $SimpleRegionStorage, codec: $Function_<$Runnable, $Codec<$Object>>, factory: $Function_<$Runnable, $Object>, registryAccess: $RegistryAccess, errorReporter: $ChunkIOErrorReporter, levelHeightAccessor: $LevelHeightAccessor);
        get storageAccess(): $SimpleRegionStorage;
    }
    export class $ChunkSerializer$ChunkReadException extends $NbtException {
        constructor(message: string);
    }
    export class $RegionFile$CommitOp {
    }
    export interface $RegionFile$CommitOp {
    }
    /**
     * Values that may be interpreted as {@link $RegionFile$CommitOp}.
     */
    export type $RegionFile$CommitOp_ = (() => void);
    export class $RecreatingChunkStorage extends $ChunkStorage {
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        worker: $IOWorker;
        constructor(info: $RegionStorageInfo_, folder: $Path_, writeInfo: $RegionStorageInfo_, writeFolder: $Path_, fixerUpper: $DataFixer, sync: boolean);
    }
    /**
     * A decorator for input and output streams used to read and write the chunk data from region files. This exists as there are different ways of compressing the chunk data inside a region file.
     * @see net.minecraft.world.level.chunk.storage.RegionFileVersion#VERSION_GZIP
     * @see net.minecraft.world.level.chunk.storage.RegionFileVersion#VERSION_DEFLATE
     * @see net.minecraft.world.level.chunk.storage.RegionFileVersion#VERSION_NONE
     */
    export class $RegionFileVersion {
        static fromId(id: number): $RegionFileVersion;
        static getSelected(): $RegionFileVersion;
        wrap(outputWrapper: $OutputStream): $OutputStream;
        wrap(inputWrapper: $InputStream): $InputStream;
        getId(): number;
        static configure(optionValue: string): void;
        static isValidVersion(id: number): boolean;
        static VERSION_GZIP: $RegionFileVersion;
        static VERSION_LZ4: $RegionFileVersion;
        static VERSION_DEFLATE: $RegionFileVersion;
        static VERSION_NONE: $RegionFileVersion;
        static VERSION_CUSTOM: $RegionFileVersion;
        static DEFAULT: $RegionFileVersion;
        static get selected(): $RegionFileVersion;
        get id(): number;
    }
    /**
     * Keeps track of which parts of a region file are used and which parts are free.
     */
    export class $RegionBitmap {
        getUsed(): $IntSet;
        /**
         * Marks a range of 4 KiB sectors relative to the region file as used.
         */
        free(sectorOffset: number, sectorCount: number): void;
        /**
         * Gets a valid offset inside the region file with enough space to store the given amount of sectors and marks that space as used.
         */
        allocate(sectorCount: number): number;
        /**
         * Marks a range of 4 KiB sectors relative to the region file as used.
         */
        force(sectorOffset: number, sectorCount: number): void;
        constructor();
        get used(): $IntSet;
    }
    export class $SimpleRegionStorage implements $AutoCloseable {
        storageInfo(): $RegionStorageInfo;
        upgradeChunkTag(tag: $CompoundTag_, version: number): $CompoundTag;
        upgradeChunkTag(tag: $Dynamic<$Tag_>, version: number): $Dynamic<$Tag>;
        write(chunkPos: $ChunkPos, data: $CompoundTag_ | null): $CompletableFuture<void>;
        read(chunkPos: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        close(): void;
        synchronize(flushStorage: boolean): $CompletableFuture<void>;
        constructor(info: $RegionStorageInfo_, folder: $Path_, fixerUpper: $DataFixer, sync: boolean, dataFixType: $DataFixTypes_);
    }
    export class $EntityStorage implements $EntityPersistentStorage<$Entity> {
        loadEntities(pos: $ChunkPos): $CompletableFuture<$ChunkEntities<$Entity>>;
        storeEntities(entities: $ChunkEntities<$Entity>): void;
        flush(synchronize: boolean): void;
        close(): void;
        constructor(simpleRegionStorage: $SimpleRegionStorage, level: $ServerLevel, executor: $Executor_);
    }
    export class $RegionFileVersion$StreamWrapper<O> {
    }
    export interface $RegionFileVersion$StreamWrapper<O> {
    }
    /**
     * Values that may be interpreted as {@link $RegionFileVersion$StreamWrapper}.
     */
    export type $RegionFileVersion$StreamWrapper_<O> = (() => void);
    export class $IOWorker$Priority extends $Enum<$IOWorker$Priority> {
    }
    /**
     * Values that may be interpreted as {@link $IOWorker$Priority}.
     */
    export type $IOWorker$Priority_ = "foreground" | "background" | "shutdown";
    export class $RegionFile$ChunkBuffer extends $ByteArrayOutputStream {
    }
}
