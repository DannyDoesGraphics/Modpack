import { $File } from "@package/java/io";
import { $JsonObject_ } from "@package/com/google/gson";
import { $DataPackConfig, $LevelSettings, $GameType } from "@package/net/minecraft/world/level";
import { $MinecraftServer$ServerResourcePackInfo, $ServerInterface, $WorldStem_, $RegistryLayer_, $MinecraftServer, $Services_ } from "@package/net/minecraft/server";
import { $Component } from "@package/net/minecraft/network/chat";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $PlayerDataStorage, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $Properties } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $SampleLogger } from "@package/net/minecraft/util/debugchart";
import { $Difficulty } from "@package/net/minecraft/world";
import { $ChunkProgressListenerFactory_ } from "@package/net/minecraft/server/level/progress";
import { $UnaryOperator_, $Supplier } from "@package/java/util/function";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $RegistryAccess, $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Thread, $Record, $Runnable } from "@package/java/lang";
import { $WorldDimensions, $WorldOptions } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/server/dedicated" {
    export class $Settings<T extends $Settings<T>> {
        store(path: $Path_): void;
        static loadFromFile(path: $Path_): $Properties;
        constructor(properties: $Properties);
    }
    export class $DedicatedServerSettings {
        forceSave(): void;
        update(propertiesOperator: $UnaryOperator_<$DedicatedServerProperties>): $DedicatedServerSettings;
        getProperties(): $DedicatedServerProperties;
        constructor(source: $Path_);
        get properties(): $DedicatedServerProperties;
    }
    export class $DedicatedServerProperties$WorldDimensionData extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DedicatedServerProperties$WorldDimensionData}.
     */
    export type $DedicatedServerProperties$WorldDimensionData_ = { levelType?: string, generatorSettings?: $JsonObject_,  } | [levelType?: string, generatorSettings?: $JsonObject_, ];
    export class $ServerWatchdog implements $Runnable {
        run(): void;
        constructor(server: $DedicatedServer);
    }
    export class $DedicatedPlayerList extends $PlayerList {
        static WHITELIST_FILE: $File;
        static USERBANLIST_FILE: $File;
        static IPBANLIST_FILE: $File;
        static OPLIST_FILE: $File;
        static CHAT_FILTERED_FULL: $Component;
        static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: $Component;
        constructor(server: $DedicatedServer, registries: $LayeredRegistryAccess<$RegistryLayer_>, playerIo: $PlayerDataStorage);
    }
    export class $Settings$MutableValue<V> implements $Supplier<V> {
        get(): V;
        update(registryAccess: $RegistryAccess, newValue: V): V;
    }
    export class $DedicatedServer extends $MinecraftServer implements $ServerInterface {
        handleConsoleInput(msg: string, source: $CommandSourceStack): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        showGui(): void;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getPluginNames(): string;
        storeUsingWhiteList(isStoreUsingWhiteList: boolean): void;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getLevelIdName(): string;
        getMaxTickLength(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getServerPort(): number;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        handleConsoleInputs(): void;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerIp(): string;
        /**
         * Handle a command received by an RCon instance
         */
        runCommand(command: string): string;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        forceDifficulty(): void;
        getTickTimeLogger(): $SampleLogger;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerName(): string;
        getProperties(): $DedicatedServerProperties;
        /**
         * Initialises the server and starts it.
         */
        initServer(): boolean;
        static VANILLA_BRAND: string;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        constructor(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, settings: $DedicatedServerSettings, fixerUpper: $DataFixer, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
        get pluginNames(): string;
        get levelIdName(): string;
        get maxTickLength(): number;
        get serverPort(): number;
        get serverIp(): string;
        get tickTimeLogger(): $SampleLogger;
        get serverName(): string;
        get properties(): $DedicatedServerProperties;
    }
    export class $DedicatedServerProperties extends $Settings<$DedicatedServerProperties> {
        static fromFile(path: $Path_): $DedicatedServerProperties;
        createDimensions(registryAccess: $RegistryAccess): $WorldDimensions;
        onlineMode: boolean;
        opPermissionLevel: number;
        allowNether: boolean;
        regionFileComression: string;
        useNativeTransport: boolean;
        maxChainedNeighborUpdates: number;
        spawnNpcs: boolean;
        serverResourcePackInfo: ($MinecraftServer$ServerResourcePackInfo) | undefined;
        gamemode: $GameType;
        broadcastConsoleToOps: boolean;
        functionPermissionLevel: number;
        enableQuery: boolean;
        spawnAnimals: boolean;
        maxTickTime: number;
        entityBroadcastRangePercentage: number;
        forceGameMode: boolean;
        announcePlayerAchievements: boolean;
        rconPort: number;
        enforceSecureProfile: boolean;
        acceptsTransfers: boolean;
        motd: string;
        queryPort: number;
        maxPlayers: number;
        enableRcon: boolean;
        worldOptions: $WorldOptions;
        pvp: boolean;
        bugReportLink: string;
        rateLimitPacketsPerSecond: number;
        difficulty: $Difficulty;
        networkCompressionThreshold: number;
        maxWorldSize: number;
        whiteList: $Settings$MutableValue<boolean>;
        rconPassword: string;
        enableStatus: boolean;
        viewDistance: number;
        spawnProtection: number;
        hideOnlinePlayers: boolean;
        serverPort: number;
        allowFlight: boolean;
        broadcastRconToOps: boolean;
        enableJmxMonitoring: boolean;
        textFilteringConfig: string;
        preventProxyConnections: boolean;
        spawnMonsters: boolean;
        enforceWhitelist: boolean;
        syncChunkWrites: boolean;
        hardcore: boolean;
        playerIdleTimeout: $Settings$MutableValue<number>;
        levelName: string;
        initialDataPackConfiguration: $DataPackConfig;
        serverIp: string;
        simulationDistance: number;
        enableCommandBlock: boolean;
        logIPs: boolean;
        constructor(properties: $Properties);
    }
}
