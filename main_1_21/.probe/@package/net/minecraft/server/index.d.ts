import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $VeilPacketManager$PacketSink } from "@package/foundry/veil/api/network";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $CloseableResourceManager, $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_, $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $Difficulty_, $TickRateManager } from "@package/net/minecraft/world";
import { $SystemReport, $CrashReport } from "@package/net/minecraft";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy, $URI } from "@package/java/net";
import { $GameProfileRepository_, $GameProfileRepository, $GameProfile } from "@package/com/mojang/authlib";
import { $MinecraftServerAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $ServerMidTickTask } from "@package/com/ishland/c2me/opts/scheduling/common";
import { $ChatDecorator, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $TextFilter, $ServerConnectionListener } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $MinecraftServerExtension } from "@package/foundry/veil/ext";
import { $WorldData, $LevelStorageSource$LevelStorageAccess, $CommandStorage, $LevelResource } from "@package/net/minecraft/world/level/storage";
import { $ProgressMapAccessor } from "@package/io/wispforest/owo/mixin/offline";
import { $ConfigurableRegistryLookupAccessor } from "@package/io/wispforest/accessories/mixin";
import { $CommandSource, $Commands, $Commands$CommandSelection_, $Commands$CommandSelection, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ChunkIOErrorReporter, $RegionStorageInfo_ } from "@package/net/minecraft/world/level/chunk/storage";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $AtomicLong } from "@package/java/util/concurrent/atomic";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $PlayerSelector_, $ReloadableServerResourcesKJS, $MinecraftServerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
import { $ServerStatus } from "@package/net/minecraft/network/protocol/status";
import { $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $UUID_, $Map, $List, $Map_, $Collection_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $Supplier_, $BooleanSupplier_, $Consumer_, $Function_ } from "@package/java/util/function";
import { $ChunkProgressListenerFactory_, $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $HolderGetter$Provider, $HolderLookup$RegistryLookup, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $RegistryAccess$Frozen, $Holder, $LayeredRegistryAccess, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $Exception, $Throwable, $Runnable, $Enum, $RuntimeException, $Iterable, $Thread, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $OutputStream, $PrintStream, $File_, $IOException } from "@package/java/io";
import { $GameRules, $ChunkPos, $WorldDataConfiguration_, $Level_, $GameType, $WorldDataConfiguration, $GameType_, $LevelSettings, $Level } from "@package/net/minecraft/world/level";
import { $TagManager } from "@package/net/minecraft/tags";
import { $ProfilerFiller, $ProfileResults } from "@package/net/minecraft/util/profiling";
import { $PlayerList, $GameProfileCache } from "@package/net/minecraft/server/players";
import { $KeyPair } from "@package/java/security";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $CustomBossEvents } from "@package/net/minecraft/server/bossevents";
import { $ServicesKeySet, $ServicesKeySet_, $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $Stream } from "@package/java/util/stream";
import { $DedicatedServerProperties } from "@package/net/minecraft/server/dedicated";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $RegistryOps, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TickTaskSchedulerImpl } from "@package/foundry/veil/impl";
import { $Scoreboard, $Objective, $ScoreboardSaveData } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as players from "@package/net/minecraft/server/players";
export * as packs from "@package/net/minecraft/server/packs";
export * as level from "@package/net/minecraft/server/level";
export * as commands from "@package/net/minecraft/server/commands";
export * as network from "@package/net/minecraft/server/network";
export * as advancements from "@package/net/minecraft/server/advancements";
export * as rcon from "@package/net/minecraft/server/rcon";
export * as chase from "@package/net/minecraft/server/chase";
export * as bossevents from "@package/net/minecraft/server/bossevents";
export * as dedicated from "@package/net/minecraft/server/dedicated";
export * as gui from "@package/net/minecraft/server/gui";

declare module "@package/net/minecraft/server" {
    export class $LoggedPrintStream extends $PrintStream {
        constructor(name: string, out: $OutputStream);
    }
    export class $PlayerAdvancements {
        flushDirty(serverPlayer: $ServerPlayer): void;
        getOrStartProgress(advancement: $AdvancementHolder_): $AdvancementProgress;
        revoke(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        setPlayer(serverPlayer: $ServerPlayer): void;
        stopListening(): void;
        save(): void;
        reload(manager: $ServerAdvancementManager): void;
        award(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        setSelectedTab(advancement: $AdvancementHolder_ | null): void;
        constructor(dataFixer: $DataFixer, playerList: $PlayerList, manager: $ServerAdvancementManager, playerSavePath: $Path_, player: $ServerPlayer);
        set player(value: $ServerPlayer);
        set selectedTab(value: $AdvancementHolder_ | null);
    }
    export class $WorldLoader$DataLoadOutput<D> extends $Record {
        finalDimensions(): $RegistryAccess$Frozen;
        cookie(): D;
        constructor(cookie: D, finalDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadOutput}.
     */
    export type $WorldLoader$DataLoadOutput_<D> = { cookie?: any, finalDimensions?: $RegistryAccess$Frozen,  } | [cookie?: any, finalDimensions?: $RegistryAccess$Frozen, ];
    export class $ConsoleInput {
        msg: string;
        source: $CommandSourceStack;
        constructor(msg: string, source: $CommandSourceStack);
    }
    export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable {
        managers(): $ReloadableServerResources;
        close(): void;
        resourceManager(): $CloseableResourceManager;
        constructor(resourceManager: $CloseableResourceManager, managers: $ReloadableServerResources);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ReloadableResources}.
     */
    export type $MinecraftServer$ReloadableResources_ = { resourceManager?: $CloseableResourceManager, managers?: $ReloadableServerResources,  } | [resourceManager?: $CloseableResourceManager, managers?: $ReloadableServerResources, ];
    export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener {
        getAllAdvancements(): $Collection<$AdvancementHolder>;
        get(location: $ResourceLocation_): $AdvancementHolder;
        tree(): $AdvancementTree;
        constructor(registries: $HolderLookup$Provider);
        get allAdvancements(): $Collection<$AdvancementHolder>;
    }
    export class $ServerInfo {
    }
    export interface $ServerInfo {
        getMaxPlayers(): number;
        getServerVersion(): string;
        getPlayerCount(): number;
        getMotd(): string;
        get maxPlayers(): number;
        get serverVersion(): string;
        get playerCount(): number;
        get motd(): string;
    }
    export class $ServerLinks$KnownLinkType extends $Enum<$ServerLinks$KnownLinkType> {
        static values(): $ServerLinks$KnownLinkType[];
        static valueOf(arg0: string): $ServerLinks$KnownLinkType;
        create(uri: $URI): $ServerLinks$Entry;
        static SUPPORT: $ServerLinks$KnownLinkType;
        static FORUMS: $ServerLinks$KnownLinkType;
        static STATUS: $ServerLinks$KnownLinkType;
        static ANNOUNCEMENTS: $ServerLinks$KnownLinkType;
        static COMMUNITY: $ServerLinks$KnownLinkType;
        static BUG_REPORT: $ServerLinks$KnownLinkType;
        static NEWS: $ServerLinks$KnownLinkType;
        static COMMUNITY_GUIDELINES: $ServerLinks$KnownLinkType;
        static FEEDBACK: $ServerLinks$KnownLinkType;
        static WEBSITE: $ServerLinks$KnownLinkType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$KnownLinkType>;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$KnownLinkType}.
     */
    export type $ServerLinks$KnownLinkType_ = "bug_report" | "community_guidelines" | "support" | "status" | "feedback" | "community" | "website" | "forums" | "news" | "announcements";
    export class $ReloadableServerResources$MissingTagAccessPolicy extends $Enum<$ReloadableServerResources$MissingTagAccessPolicy> {
    }
    /**
     * Values that may be interpreted as {@link $ReloadableServerResources$MissingTagAccessPolicy}.
     */
    export type $ReloadableServerResources$MissingTagAccessPolicy_ = "create_new" | "fail";
    export class $ServerTickRateManager extends $TickRateManager {
        requestGameToSprint(sprintTime: number): boolean;
        stopSprinting(): boolean;
        stopStepping(): boolean;
        stepGameIfPaused(sprintTime: number): boolean;
        updateJoiningPlayer(player: $ServerPlayer): void;
        checkShouldSprintThisTick(): boolean;
        endTickWork(): void;
        isSprinting(): boolean;
        static MIN_TICKRATE: number;
        constructor(server: $MinecraftServer);
        get sprinting(): boolean;
    }
    export class $PlayerAdvancements$Data extends $Record implements $ProgressMapAccessor {
    }
    /**
     * Values that may be interpreted as {@link $PlayerAdvancements$Data}.
     */
    export type $PlayerAdvancements$Data_ = { map?: $Map_<$ResourceLocation_, $AdvancementProgress>,  } | [map?: $Map_<$ResourceLocation_, $AdvancementProgress>, ];
    export class $ServerLinks extends $Record {
        untrust(): $List<$ServerLinks$UntrustedEntry>;
        findKnownType(type: $ServerLinks$KnownLinkType_): ($ServerLinks$Entry) | undefined;
        isEmpty(): boolean;
        entries(): $List<$ServerLinks$Entry>;
        static UNTRUSTED_LINKS_STREAM_CODEC: $StreamCodec<$ByteBuf, $List<$ServerLinks$UntrustedEntry>>;
        static TYPE_STREAM_CODEC: $StreamCodec<$ByteBuf, $Either<$ServerLinks$KnownLinkType, $Component>>;
        static EMPTY: $ServerLinks;
        constructor(arg0: $List_<$ServerLinks$Entry_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks}.
     */
    export type $ServerLinks_ = { entries?: $List_<$ServerLinks$Entry_>,  } | [entries?: $List_<$ServerLinks$Entry_>, ];
    export class $DebugLoggedPrintStream extends $LoggedPrintStream {
        constructor(name: string, out: $OutputStream);
    }
    export class $WorldLoader$PackConfig extends $Record {
        initialDataConfig(): $WorldDataConfiguration;
        initMode(): boolean;
        createResourceManager(): $Pair<$WorldDataConfiguration, $CloseableResourceManager>;
        safeMode(): boolean;
        packRepository(): $PackRepository;
        constructor(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, safeMode: boolean, initMode: boolean);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$PackConfig}.
     */
    export type $WorldLoader$PackConfig_ = { initialDataConfig?: $WorldDataConfiguration_, safeMode?: boolean, initMode?: boolean, packRepository?: $PackRepository,  } | [initialDataConfig?: $WorldDataConfiguration_, safeMode?: boolean, initMode?: boolean, packRepository?: $PackRepository, ];
    export class $ChainedJsonException$Entry {
        getJsonKeys(): string;
        getFilename(): string;
        get jsonKeys(): string;
        get filename(): string;
    }
    export class $RunningOnDifferentThreadException extends $RuntimeException {
        static RUNNING_ON_DIFFERENT_THREAD: $RunningOnDifferentThreadException;
    }
    export class $ServerScoreboard$Method extends $Enum<$ServerScoreboard$Method> {
        static values(): $ServerScoreboard$Method[];
        static valueOf(arg0: string): $ServerScoreboard$Method;
        static REMOVE: $ServerScoreboard$Method;
        static CHANGE: $ServerScoreboard$Method;
    }
    /**
     * Values that may be interpreted as {@link $ServerScoreboard$Method}.
     */
    export type $ServerScoreboard$Method_ = "change" | "remove";
    export class $ReloadableServerRegistries {
        static reload(registries: $LayeredRegistryAccess<$RegistryLayer_>, resourceManager: $ResourceManager, backgroundExecutor: $Executor_): $CompletableFuture<$LayeredRegistryAccess<$RegistryLayer>>;
        constructor();
    }
    export class $ReloadableServerRegistries$EmptyTagLookupWrapper implements $HolderLookup$Provider {
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
    }
    export class $WorldLoader$WorldDataSupplier<D> {
    }
    export interface $WorldLoader$WorldDataSupplier<D> {
        get(context: $WorldLoader$DataLoadContext_): $WorldLoader$DataLoadOutput<D>;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$WorldDataSupplier}.
     */
    export type $WorldLoader$WorldDataSupplier_<D> = ((arg0: $WorldLoader$DataLoadContext) => $WorldLoader$DataLoadOutput_<D>);
    export class $Bootstrap {
        static checkBootstrapCalled(callSite: $Supplier_<string>): void;
        static getMissingTranslations(): $Set<string>;
        /**
         * Registers blocks, items, stats, etc.
         */
        static validate(): void;
        static realStdoutPrintln(message: string): void;
        /**
         * Registers blocks, items, stats, etc.
         */
        static bootStrap(): void;
        static STDOUT: $PrintStream;
        static bootstrapDuration: $AtomicLong;
        constructor();
        static get missingTranslations(): $Set<string>;
    }
    export class $ChainedJsonException extends $IOException {
        static forException(exception: $Exception): $ChainedJsonException;
        prependJsonKey(message: string): void;
        setFilenameAndFlush(message: string): void;
        constructor(message: string);
        constructor(message: string, cause: $Throwable);
        set filenameAndFlush(value: string);
    }
    export class $WorldLoader$ResultFactory<D, R> {
    }
    export interface $WorldLoader$ResultFactory<D, R> {
        create(manager: $CloseableResourceManager, resources: $ReloadableServerResources, registryAccess: $LayeredRegistryAccess<$RegistryLayer_>, cookie: D): R;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$ResultFactory}.
     */
    export type $WorldLoader$ResultFactory_<D, R> = ((arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer>, arg3: D) => R);
    export class $MinecraftServer$TimeProfiler {
    }
    export class $RegistryLayer extends $Enum<$RegistryLayer> {
        static createRegistryAccess(): $LayeredRegistryAccess<$RegistryLayer>;
        static values(): $RegistryLayer[];
        static valueOf(arg0: string): $RegistryLayer;
        static WORLDGEN: $RegistryLayer;
        static DIMENSIONS: $RegistryLayer;
        static RELOADABLE: $RegistryLayer;
        static STATIC: $RegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $RegistryLayer}.
     */
    export type $RegistryLayer_ = "static" | "worldgen" | "dimensions" | "reloadable";
    export class $ReloadableServerResources$ConfigurableRegistryLookup implements $HolderLookup$Provider, $ConfigurableRegistryLookupAccessor {
        missingTagAccessPolicy(missingTagAccessPolicy: $ReloadableServerResources$MissingTagAccessPolicy_): void;
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        getRegistryAccess(): $RegistryAccess;
        registryAccess: $RegistryAccess;
    }
    export class $Eula {
        hasAgreedToEULA(): boolean;
        constructor(file: $Path_);
    }
    export class $WorldLoader {
        static load<D, R>(initConfig: $WorldLoader$InitConfig_, worldDataSupplier: $WorldLoader$WorldDataSupplier_<D>, resultFactory: $WorldLoader$ResultFactory_<D, R>, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<R>;
        constructor();
    }
    export class $ReloadableServerRegistries$Holder {
        get(): $RegistryAccess$Frozen;
        lookup(): $HolderGetter$Provider;
        getKeys(registryKey: $ResourceKey_<$Registry<never>>): $Collection<$ResourceLocation>;
        getLootTable(lootTableKey: $ResourceKey_<$LootTable>): $LootTable;
        constructor(registries: $RegistryAccess$Frozen);
    }
    export class $WorldLoader$DataLoadContext extends $Record {
        dataConfiguration(): $WorldDataConfiguration;
        datapackWorldgen(): $RegistryAccess$Frozen;
        datapackDimensions(): $RegistryAccess$Frozen;
        resources(): $ResourceManager;
        constructor(resources: $ResourceManager, dataConfiguration: $WorldDataConfiguration_, datapackWorldgen: $RegistryAccess$Frozen, datapackDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadContext}.
     */
    export type $WorldLoader$DataLoadContext_ = { datapackWorldgen?: $RegistryAccess$Frozen, datapackDimensions?: $RegistryAccess$Frozen, resources?: $ResourceManager, dataConfiguration?: $WorldDataConfiguration_,  } | [datapackWorldgen?: $RegistryAccess$Frozen, datapackDimensions?: $RegistryAccess$Frozen, resources?: $ResourceManager, dataConfiguration?: $WorldDataConfiguration_, ];
    export class $ServerInterface {
    }
    export interface $ServerInterface extends $ServerInfo {
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getPluginNames(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getLevelIdName(): string;
        /**
         * Never used, but "getServerPort" is already taken.
         */
        getServerPort(): number;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerIp(): string;
        /**
         * Handle a command received by an RCon instance
         */
        runCommand(command: string): string;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerName(): string;
        getProperties(): $DedicatedServerProperties;
        get pluginNames(): string;
        get levelIdName(): string;
        get serverPort(): number;
        get serverIp(): string;
        get playerNames(): string[];
        get serverName(): string;
        get properties(): $DedicatedServerProperties;
    }
    export class $ServerFunctionLibrary implements $PreparableReloadListener {
        getAvailableTags(): $Iterable<$ResourceLocation>;
        getFunctions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        getFunction(location: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getTag(location: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        getName(): string;
        static TYPE_KEY: $ResourceKey<$Registry<$CommandFunction<$CommandSourceStack>>>;
        constructor(functionCompilationLevel: number, dispatcher: $CommandDispatcher<$CommandSourceStack>);
        get availableTags(): $Iterable<$ResourceLocation>;
        get functions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        get name(): string;
    }
    export class $MinecraftServer extends $ReentrantBlockableEventLoop<$TickTask> implements $ServerInfo, $ChunkIOErrorReporter, $CommandSource, $AutoCloseable, $VeilPacketManager$PacketSink, $MinecraftServerExtension, $MinecraftServerKJS, $MinecraftServerAccessor, $ServerMidTickTask {
        wrapOperation$emn000$waterframes$redirect$runServer$getMillis(arg0: $Operation_<any>): number;
        createTextFilterForPlayer(player: $ServerPlayer): $TextFilter;
        createGameModeForPlayer(player: $ServerPlayer): $ServerPlayerGameMode;
        getSpawnRadius(level: $ServerLevel | null): number;
        getTickTime(arg0: $ResourceKey_<$Level>): number[];
        /**
         * Initialises the server and starts it.
         */
        isPvpAllowed(): boolean;
        overworld(): $ServerLevel;
        getProfilePermissions(profile: $GameProfile): number;
        getForcedGameType(): $GameType;
        getDefaultGameType(): $GameType;
        sendPacket(arg0: $Packet<any>): void;
        restoreInventories(): $Map<any, any>;
        getPlayerList(): $PlayerList;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        forceTimeSynchronization(): void;
        /**
         * Initialises the server and starts it.
         */
        isSpawningAnimals(): boolean;
        /**
         * Initialises the server and starts it.
         */
        areNpcsEnabled(): boolean;
        isUnderSpawnProtection(level: $ServerLevel, pos: $BlockPos_, player: $Player): boolean;
        /**
         * Initialises the server and starts it.
         */
        isCommandBlockEnabled(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getTickCount(): number;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickServer(isDone: $BooleanSupplier_): void;
        potionBrewing(): $PotionBrewing;
        executeTasksMidTick(level: $ServerLevel): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxChainedNeighborUpdates(): number;
        /**
         * Initialises the server and starts it.
         */
        forceSynchronousWrites(): boolean;
        getStructureManager(): $StructureTemplateManager;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getAbsoluteMaxWorldSize(): number;
        getProfileCache(): $GameProfileCache;
        getChatDecorator(): $ChatDecorator;
        getAllLevels(): $Iterable<$ServerLevel>;
        getFunctions(): $ServerFunctionManager;
        getCommandStorage(): $CommandStorage;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerModName(): string;
        getModdedStatus(): $ModCheck;
        handler$ehp000$ae2$injectSpatialLevel(arg0: $ChunkProgressListener, arg1: $CallbackInfo): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getOperatorUserPermissionLevel(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getFunctionCompilationLevel(): number;
        /**
         * Initialises the server and starts it.
         */
        shouldRconBroadcast(): boolean;
        saveAllChunks(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        saveEverything(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stop(): void;
        handler$zoo000$veil$stopServer(arg0: $CallbackInfo): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getLocalIp(): string;
        setLocalIp(serverId: string): void;
        wrapOperation$emn000$waterframes$redirect$runServer$getMillisWhile(arg0: $Operation_<any>): number;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        endMetricsRecordingTick(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onServerExit(): void;
        /**
         * Called on exit from the main run() loop.
         */
        onServerCrash(report: $CrashReport): void;
        /**
         * Initialises the server and starts it.
         */
        isTickTimeLoggingEnabled(): boolean;
        /**
         * Initialises the server and starts it.
         */
        static throwIfFatalException(): boolean;
        static setFatalException(fatalException: $RuntimeException): void;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickChildren(isDone: $BooleanSupplier_): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getStatusJson(): string;
        getAverageTickTimeNanos(): number;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onTickRateChanged(): void;
        /**
         * Initialises the server and starts it.
         */
        enforceSecureProfile(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxPlayers(): number;
        /**
         * Initialises the server and starts it.
         */
        hidesOnlinePlayers(): boolean;
        addTickable(tickable: $Runnable_): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerVersion(): string;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerCount(): number;
        fillServerSystemReport(report: $SystemReport): $SystemReport;
        getSingleplayerProfile(): $GameProfile;
        setSingleplayerProfile(singleplayerProfile: $GameProfile | null): void;
        getScaledTrackingDistance(trackingDistance: number): number;
        /**
         * Initialises the server and starts it.
         */
        isSpawningMonsters(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDemo(waitForServer: boolean): void;
        getServerResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        /**
         * Initialises the server and starts it.
         */
        isResourcePackRequired(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getRateLimitPacketsPerSecond(): number;
        /**
         * Initialises the server and starts it.
         */
        usesAuthentication(): boolean;
        /**
         * Initialises the server and starts it.
         */
        getPreventProxyConnections(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPreventProxyConnections(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        isEpollEnabled(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPvpAllowed(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        isFlightAllowed(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setFlightAllowed(waitForServer: boolean): void;
        setMotd(serverId: string): void;
        setPlayerList(list: $PlayerList): void;
        /**
         * Sets the game type for all worlds.
         */
        setDefaultGameType(gameMode: $GameType_): void;
        /**
         * Initialises the server and starts it.
         */
        hasGui(): boolean;
        publishServer(gameMode: $GameType_ | null, commands: boolean, port: number): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getSpawnProtectionRadius(): number;
        /**
         * Initialises the server and starts it.
         */
        repliesToStatus(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerIdleTimeout(): number;
        setPlayerIdleTimeout(idleTimeout: number): void;
        getSessionService(): $MinecraftSessionService;
        getProfileRepository(): $GameProfileRepository;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        invalidateStatus(): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getCompressionThreshold(): number;
        getNextTickTime(): number;
        /**
         * Replaces currently selected list of datapacks, reloads them, and sends new data to players.
         */
        reloadResources(selectedIds: $Collection_<string>): $CompletableFuture<void>;
        static configurePackRepository(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, initMode: boolean, safeMode: boolean): $WorldDataConfiguration;
        kickUnlistedPlayers(commandSource: $CommandSourceStack): void;
        /**
         * Initialises the server and starts it.
         */
        isEnforceWhitelist(): boolean;
        getPackRepository(): $PackRepository;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setEnforceWhitelist(waitForServer: boolean): void;
        getCurrentSmoothedTickTime(): number;
        getTickTimesNanos(): number[];
        isSingleplayerOwner(profile: $GameProfile): boolean;
        /**
         * @deprecated
         */
        forgeGetWorldMap(): $Map<$ResourceKey<$Level>, $ServerLevel>;
        /**
         * @deprecated
         * Directly calls System.exit(0), instantly killing the program.
         */
        markWorldsDirty(): void;
        dumpServerProperties(path: $Path_): void;
        /**
         * Initialises the server and starts it.
         */
        isRecordingMetrics(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stopRecordingMetrics(): void;
        getWorldPath(levelResource: $LevelResource): $Path;
        /**
         * Initialises the server and starts it.
         */
        isCurrentlySaving(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isTimeProfilerRunning(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        startTimeProfiler(): void;
        stopTimeProfiler(): $ProfileResults;
        /**
         * Initialises the server and starts it.
         */
        logIPs(): boolean;
        subscribeToDebugSample(player: $ServerPlayer, sampleType: $RemoteDebugSampleType_): void;
        /**
         * Initialises the server and starts it.
         */
        acceptsTransfers(): boolean;
        reportChunkLoadFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        reportChunkSaveFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        veil$getScheduler(): $TickTaskSchedulerImpl;
        veil$getOrCreateScheduler(): $TickTaskSchedulerImpl;
        getOverworld(): $ServerLevel;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        levelKeys(): $Set<$ResourceKey<$Level>>;
        static spin<S extends $MinecraftServer>(threadFunction: $Function_<$Thread, S>): S;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPort(): number;
        getFile(path: string): $Path;
        /**
         * Initialises the server and starts it.
         */
        isShutdown(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        halt(waitForServer: boolean): void;
        /**
         * Gets the worldServer by the given dimension.
         */
        getLevel(dimension: $ResourceKey_<$Level>): $ServerLevel;
        /**
         * Initialises the server and starts it.
         */
        isStopped(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isRunning(): boolean;
        getStatus(): $ServerStatus;
        setPort(idleTimeout: number): void;
        /**
         * Initialises the server and starts it.
         */
        isDedicated(): boolean;
        getProfiler(): $ProfilerFiller;
        getProxy(): $Proxy;
        /**
         * Initialises the server and starts it.
         */
        isPublished(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isHardcore(): boolean;
        fillSystemReport(report: $SystemReport): $SystemReport;
        startRecordingMetrics(output: $Consumer_<$ProfileResults>, onMetricsRecordingFinished: $Consumer_<$Path>): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        finishRecordingMetrics(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        cancelRecordingMetrics(): void;
        getWorldData(): $WorldData;
        tickRateManager(): $ServerTickRateManager;
        getAdvancements(): $ServerAdvancementManager;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setUsesAuthentication(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        isReady(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isDemo(): boolean;
        registryAccess(): $RegistryAccess$Frozen;
        /**
         * Initialises the server and starts it.
         */
        isSingleplayer(): boolean;
        getResourceManager(): $ResourceManager;
        /**
         * Initialises the server and starts it.
         */
        isPaused(): boolean;
        getRunningThread(): $Thread;
        getFixerUpper(): $DataFixer;
        getProfileKeySignatureValidator(): $SignatureValidator;
        getRecipeManager(): $RecipeManager;
        getScheduledEvents(): $ScheduledEvents;
        doRunTask(task: $TickTask): void;
        getServerResources(): $MinecraftServer$ReloadableResources;
        getScoreboard(): $ServerScoreboard;
        getGameRules(): $GameRules;
        getData(): $AttachedData<any>;
        reloadableRegistries(): $ReloadableServerRegistries$Holder;
        sendSystemMessage(component: $Component_): void;
        getCommands(): $Commands;
        createCommandSourceStack(): $CommandSourceStack;
        getPersistentData(): $CompoundTag;
        isLevelEnabled(level: $Level_): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsSuccess(): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsFailure(): boolean;
        /**
         * Initialises the server and starts it.
         */
        shouldInformAdmins(): boolean;
        serverLinks(): $ServerLinks;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getMotd(): string;
        getCustomBossEvents(): $CustomBossEvents;
        setDifficulty(difficulty: $Difficulty_, forced: boolean): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDifficultyLocked(waitForServer: boolean): void;
        /**
         * Gets KeyPair instanced in MinecraftServer.
         */
        getKeyPair(): $KeyPair;
        logChatMessage(content: $Component_, boundChatType: $ChatType$Bound_, header: string | null): void;
        getServerDirectory(): $Path;
        getWorldScreenshotFile(): ($Path) | undefined;
        getConnection(): $ServerConnectionListener;
        reportMisplacedChunk(pos: $ChunkPos, expectedPos: $ChunkPos, regionStorageInfo: $RegionStorageInfo_): void;
        /**
         * Initialises the server and starts it.
         */
        alwaysAccepts(): boolean;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        self(): $MinecraftServer;
        tell(component: $Component_): void;
        setStatusMessage(component: $Component_): void;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(serverId: string): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(serverId: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getName(): $Component;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(serverId: string): void;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getEntities(): $EntityArrayList;
        getDisplayName(): $Component;
        catnip$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        static VANILLA_BRAND: string;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        constructor(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, proxy: $Proxy, fixerUpper: $DataFixer, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
        get forcedGameType(): $GameType;
        get spawningAnimals(): boolean;
        get commandBlockEnabled(): boolean;
        get tickCount(): number;
        get maxChainedNeighborUpdates(): number;
        get structureManager(): $StructureTemplateManager;
        get absoluteMaxWorldSize(): number;
        get profileCache(): $GameProfileCache;
        get chatDecorator(): $ChatDecorator;
        get allLevels(): $Iterable<$ServerLevel>;
        get functions(): $ServerFunctionManager;
        get commandStorage(): $CommandStorage;
        get serverModName(): string;
        get moddedStatus(): $ModCheck;
        get operatorUserPermissionLevel(): number;
        get functionCompilationLevel(): number;
        get tickTimeLoggingEnabled(): boolean;
        static set fatalException(value: $RuntimeException);
        get statusJson(): string;
        get averageTickTimeNanos(): number;
        get maxPlayers(): number;
        get serverVersion(): string;
        get playerCount(): number;
        get spawningMonsters(): boolean;
        get serverResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        get resourcePackRequired(): boolean;
        get rateLimitPacketsPerSecond(): number;
        get epollEnabled(): boolean;
        get spawnProtectionRadius(): number;
        get sessionService(): $MinecraftSessionService;
        get profileRepository(): $GameProfileRepository;
        get compressionThreshold(): number;
        get nextTickTime(): number;
        get packRepository(): $PackRepository;
        get currentSmoothedTickTime(): number;
        get tickTimesNanos(): number[];
        get recordingMetrics(): boolean;
        get currentlySaving(): boolean;
        get timeProfilerRunning(): boolean;
        get playerNames(): string[];
        get shutdown(): boolean;
        get stopped(): boolean;
        get running(): boolean;
        get status(): $ServerStatus;
        get dedicated(): boolean;
        get profiler(): $ProfilerFiller;
        get proxy(): $Proxy;
        get published(): boolean;
        get hardcore(): boolean;
        get worldData(): $WorldData;
        get advancements(): $ServerAdvancementManager;
        get ready(): boolean;
        get singleplayer(): boolean;
        get resourceManager(): $ResourceManager;
        get paused(): boolean;
        get runningThread(): $Thread;
        get fixerUpper(): $DataFixer;
        get profileKeySignatureValidator(): $SignatureValidator;
        get recipeManager(): $RecipeManager;
        get scheduledEvents(): $ScheduledEvents;
        get serverResources(): $MinecraftServer$ReloadableResources;
        get scoreboard(): $ServerScoreboard;
        get gameRules(): $GameRules;
        get data(): $AttachedData<any>;
        get commands(): $Commands;
        get persistentData(): $CompoundTag;
        get customBossEvents(): $CustomBossEvents;
        set difficultyLocked(value: boolean);
        get keyPair(): $KeyPair;
        get serverDirectory(): $Path;
        get worldScreenshotFile(): ($Path) | undefined;
        get connection(): $ServerConnectionListener;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get entities(): $EntityArrayList;
        get displayName(): $Component;
    }
    export class $WorldStem extends $Record implements $AutoCloseable {
        dataPackResources(): $ReloadableServerResources;
        close(): void;
        resourceManager(): $CloseableResourceManager;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        worldData(): $WorldData;
        constructor(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: $WorldData);
    }
    /**
     * Values that may be interpreted as {@link $WorldStem}.
     */
    export type $WorldStem_ = { dataPackResources?: $ReloadableServerResources, resourceManager?: $CloseableResourceManager, worldData?: $WorldData, registries?: $LayeredRegistryAccess<$RegistryLayer_>,  } | [dataPackResources?: $ReloadableServerResources, resourceManager?: $CloseableResourceManager, worldData?: $WorldData, registries?: $LayeredRegistryAccess<$RegistryLayer_>, ];
    export class $ServerScoreboard extends $Scoreboard {
        stopTrackingObjective(objective: $Objective): void;
        startTrackingObjective(objective: $Objective): void;
        addDirtyListener(runnable: $Runnable_): void;
        getStartTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        getStopTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        dataFactory(): $SavedData$Factory<$ScoreboardSaveData>;
        getObjectiveDisplaySlotCount(objective: $Objective): number;
        static HIDDEN_SCORE_PREFIX: string;
        constructor(server: $MinecraftServer);
    }
    export class $ReloadableServerResources implements $ReloadableServerResourcesKJS {
        kjs$getTagManager(): $TagManager;
        fullRegistries(): $ReloadableServerRegistries$Holder;
        kjs$getServerScriptManager(): $ServerScriptManager;
        getFunctionLibrary(): $ServerFunctionLibrary;
        updateRegistryTags(): void;
        static loadResources(resourceManager: $ResourceManager, registries: $LayeredRegistryAccess<$RegistryLayer_>, enabledFeatures: $FeatureFlagSet, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<$ReloadableServerResources>;
        listeners(): $List<$PreparableReloadListener>;
        getAdvancements(): $ServerAdvancementManager;
        getRecipeManager(): $RecipeManager;
        getCommands(): $Commands;
        getRegistryLookup(): $HolderLookup$Provider;
        getConditionContext(): $ICondition$IContext;
        get functionLibrary(): $ServerFunctionLibrary;
        get advancements(): $ServerAdvancementManager;
        get recipeManager(): $RecipeManager;
        get commands(): $Commands;
        get registryLookup(): $HolderLookup$Provider;
        get conditionContext(): $ICondition$IContext;
    }
    export class $WorldLoader$InitConfig extends $Record {
        packConfig(): $WorldLoader$PackConfig;
        commandSelection(): $Commands$CommandSelection;
        functionCompilationLevel(): number;
        constructor(packConfig: $WorldLoader$PackConfig_, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$InitConfig}.
     */
    export type $WorldLoader$InitConfig_ = { commandSelection?: $Commands$CommandSelection_, packConfig?: $WorldLoader$PackConfig_, functionCompilationLevel?: number,  } | [commandSelection?: $Commands$CommandSelection_, packConfig?: $WorldLoader$PackConfig_, functionCompilationLevel?: number, ];
    export class $TickTask implements $Runnable {
        /**
         * Get the server time when this task was scheduled
         */
        getTick(): number;
        run(): void;
        constructor(tick: number, runnable: $Runnable_);
        get tick(): number;
    }
    export class $ServerLinks$Entry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        displayName(): $Component;
        link(): $URI;
        static custom(type: $Component_, link: $URI): $ServerLinks$Entry;
        static knownType(type: $ServerLinks$KnownLinkType_, link: $URI): $ServerLinks$Entry;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: $URI);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$Entry}.
     */
    export type $ServerLinks$Entry_ = { type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: $URI,  } | [type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: $URI, ];
    export class $MinecraftServer$ServerResourcePackInfo extends $Record {
        prompt(): $Component;
        hash(): string;
        url(): string;
        id(): $UUID;
        isRequired(): boolean;
        constructor(id: $UUID_, url: string, hash: string, isRequired: boolean, prompt: $Component_ | null);
        get required(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ServerResourcePackInfo}.
     */
    export type $MinecraftServer$ServerResourcePackInfo_ = { hash?: string, url?: string, isRequired?: boolean, prompt?: $Component_, id?: $UUID_,  } | [hash?: string, url?: string, isRequired?: boolean, prompt?: $Component_, id?: $UUID_, ];
    export class $Main {
        static main(args: string[]): void;
        constructor();
    }
    export class $ServerLinks$UntrustedEntry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        link(): string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$UntrustedEntry>;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$UntrustedEntry}.
     */
    export type $ServerLinks$UntrustedEntry_ = { type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: string,  } | [type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: string, ];
    export class $Services extends $Record {
        sessionService(): $MinecraftSessionService;
        profileKeySignatureValidator(): $SignatureValidator;
        profileRepository(): $GameProfileRepository;
        static create(authenticationService: $YggdrasilAuthenticationService, profileRepository: $File_): $Services;
        profileCache(): $GameProfileCache;
        canValidateProfileKeys(): boolean;
        servicesKeySet(): $ServicesKeySet;
        constructor(arg0: $MinecraftSessionService, arg1: $ServicesKeySet_, arg2: $GameProfileRepository_, arg3: $GameProfileCache);
    }
    /**
     * Values that may be interpreted as {@link $Services}.
     */
    export type $Services_ = { profileCache?: $GameProfileCache, servicesKeySet?: $ServicesKeySet_, sessionService?: $MinecraftSessionService, profileRepository?: $GameProfileRepository_,  } | [profileCache?: $GameProfileCache, servicesKeySet?: $ServicesKeySet_, sessionService?: $MinecraftSessionService, profileRepository?: $GameProfileRepository_, ];
    export class $ServerFunctionManager {
        getFunctionNames(): $Iterable<$ResourceLocation>;
        getGameLoopSender(): $CommandSourceStack;
        getTagNames(): $Iterable<$ResourceLocation>;
        replaceLibrary(reloader: $ServerFunctionLibrary): void;
        get(functionIdentifier: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        execute(_function: $CommandFunction<$CommandSourceStack>, source: $CommandSourceStack): void;
        tick(): void;
        getTag(functionTagIdentifier: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        constructor(server: $MinecraftServer, library: $ServerFunctionLibrary);
        get functionNames(): $Iterable<$ResourceLocation>;
        get gameLoopSender(): $CommandSourceStack;
        get tagNames(): $Iterable<$ResourceLocation>;
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
    }
}
