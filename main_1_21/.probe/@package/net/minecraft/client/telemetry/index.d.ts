import { $GameType_, $Level_ } from "@package/net/minecraft/world/level";
import { $LongList } from "@package/it/unimi/dsi/fastutil/longs";
import { $Codec, $MapCodec, $Codec_ } from "@package/com/mojang/serialization";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Minecraft, $User } from "@package/net/minecraft/client";
import { $UUID, $List, $List_, $Set } from "@package/java/util";
import { $GameLoadTimesEvent$Measurement } from "@package/net/minecraft/client/telemetry/events";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Instant, $Duration_ } from "@package/java/time";
import { $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $Consumer, $Consumer_ } from "@package/java/util/function";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $FileChannel } from "@package/java/nio/channels";
import { $TelemetrySession, $TelemetryPropertyContainer, $UserApiService, $TelemetryEvent } from "@package/com/mojang/authlib/minecraft";
export * as events from "@package/net/minecraft/client/telemetry/events";

declare module "@package/net/minecraft/client/telemetry" {
    export class $ClientTelemetryManager implements $AutoCloseable {
        createWorldSessionManager(newWorld: boolean, worldLoadDuration: $Duration_ | null, minigameName: string | null): $WorldSessionTelemetryManager;
        getLogDirectory(): $Path;
        close(): void;
        getOutsideSessionSender(): $TelemetryEventSender;
        constructor(minecraft: $Minecraft, userApiService: $UserApiService, user: $User);
        get logDirectory(): $Path;
        get outsideSessionSender(): $TelemetryEventSender;
    }
    export class $TelemetryProperty$ServerType extends $Enum<$TelemetryProperty$ServerType> implements $StringRepresentable {
        static values(): $TelemetryProperty$ServerType[];
        static valueOf(arg0: string): $TelemetryProperty$ServerType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static OTHER: $TelemetryProperty$ServerType;
        static CODEC: $Codec<$TelemetryProperty$ServerType>;
        static LOCAL: $TelemetryProperty$ServerType;
        static REALM: $TelemetryProperty$ServerType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TelemetryProperty$ServerType}.
     */
    export type $TelemetryProperty$ServerType_ = "realm" | "local" | "server";
    export class $TelemetryEventLog implements $AutoCloseable {
        close(): void;
        logger(): $TelemetryEventLogger;
        constructor(channel: $FileChannel, dispatcher: $Executor_);
    }
    export class $WorldSessionTelemetryManager {
        worldSessionStart(): void;
        onAdvancementDone(level: $Level_, advancement: $AdvancementHolder_): void;
        onPlayerInfoReceived(gameType: $GameType_, isHardcore: boolean): void;
        onServerBrandReceived(serverBrand: string): void;
        setTime(time: number): void;
        tick(): void;
        onDisconnect(): void;
        constructor(sender: $TelemetryEventSender_, newWorld: boolean, worldLoadDuration: $Duration_ | null, minigameName: string | null);
        set time(value: number);
    }
    export class $TelemetryEventInstance extends $Record {
        type(): $TelemetryEventType;
        properties(): $TelemetryPropertyMap;
        "export"(session: $TelemetrySession): $TelemetryEvent;
        static CODEC: $Codec<$TelemetryEventInstance>;
        constructor(arg0: $TelemetryEventType, arg1: $TelemetryPropertyMap);
    }
    /**
     * Values that may be interpreted as {@link $TelemetryEventInstance}.
     */
    export type $TelemetryEventInstance_ = { properties?: $TelemetryPropertyMap, type?: $TelemetryEventType,  } | [properties?: $TelemetryPropertyMap, type?: $TelemetryEventType, ];
    export class $TelemetryEventLogger {
    }
    export interface $TelemetryEventLogger {
        log(instance: $TelemetryEventInstance_): void;
    }
    /**
     * Values that may be interpreted as {@link $TelemetryEventLogger}.
     */
    export type $TelemetryEventLogger_ = ((arg0: $TelemetryEventInstance) => void);
    export class $TelemetryPropertyMap$Builder {
        put<T>(key: $TelemetryProperty_<T>, value: T): $TelemetryPropertyMap$Builder;
        putAll(propertyMap: $TelemetryPropertyMap): $TelemetryPropertyMap$Builder;
        build(): $TelemetryPropertyMap;
        putIfNotNull<T>(key: $TelemetryProperty_<T>, value: T | null): $TelemetryPropertyMap$Builder;
    }
    export class $TelemetryLogManager implements $AutoCloseable {
        openLogger(): $CompletableFuture<($TelemetryEventLogger) | undefined>;
        close(): void;
        static open(path: $Path_): $CompletableFuture<($TelemetryLogManager) | undefined>;
    }
    export class $TelemetryProperty<T> extends $Record {
        id(): string;
        static create<T>(id: string, exportKey: string, codec: $Codec_<T>, exporter: $TelemetryProperty$Exporter_<T>): $TelemetryProperty<T>;
        static makeLong(id: string, exportKey: string): $TelemetryProperty<number>;
        static string(id: string, exportKey: string): $TelemetryProperty<string>;
        "export"(propertyMap: $TelemetryPropertyMap, container: $TelemetryPropertyContainer): void;
        static integer(id: string, exportKey: string): $TelemetryProperty<number>;
        static bool(id: string, exportKey: string): $TelemetryProperty<boolean>;
        static uuid(id: string, exportKey: string): $TelemetryProperty<$UUID>;
        title(): $MutableComponent;
        exporter(): $TelemetryProperty$Exporter<T>;
        exportKey(): string;
        codec(): $Codec<T>;
        static gameLoadMeasurement(id: string, exportKey: string): $TelemetryProperty<$GameLoadTimesEvent$Measurement>;
        static longSamples(id: string, exportKey: string): $TelemetryProperty<$LongList>;
        static RENDER_TIME_SAMPLES: $TelemetryProperty<$LongList>;
        static LOAD_TIME_BOOTSTRAP_MS: $TelemetryProperty<$GameLoadTimesEvent$Measurement>;
        static USED_MEMORY_SAMPLES: $TelemetryProperty<$LongList>;
        static LOAD_TIME_TOTAL_TIME_MS: $TelemetryProperty<$GameLoadTimesEvent$Measurement>;
        static GAME_VERSION: $TelemetryProperty<string>;
        static EVENT_TIMESTAMP_UTC: $TelemetryProperty<$Instant>;
        static USER_ID: $TelemetryProperty<string>;
        static OPT_IN: $TelemetryProperty<boolean>;
        static WORLD_SESSION_ID: $TelemetryProperty<$UUID>;
        static MINECRAFT_SESSION_ID: $TelemetryProperty<$UUID>;
        static DEDICATED_MEMORY_KB: $TelemetryProperty<number>;
        static PLATFORM: $TelemetryProperty<string>;
        static GAME_MODE: $TelemetryProperty<$TelemetryProperty$GameMode>;
        static CLIENT_ID: $TelemetryProperty<string>;
        static TICKS_SINCE_LOAD: $TelemetryProperty<number>;
        static SECONDS_SINCE_LOAD: $TelemetryProperty<number>;
        static SERVER_MODDED: $TelemetryProperty<boolean>;
        static OPERATING_SYSTEM: $TelemetryProperty<string>;
        static ADVANCEMENT_GAME_TIME: $TelemetryProperty<number>;
        static CLIENT_MODDED: $TelemetryProperty<boolean>;
        static NUMBER_OF_SAMPLES: $TelemetryProperty<number>;
        static LAUNCHER_NAME: $TelemetryProperty<string>;
        static NEW_WORLD: $TelemetryProperty<boolean>;
        static SERVER_TYPE: $TelemetryProperty<$TelemetryProperty$ServerType>;
        static REALMS_MAP_CONTENT: $TelemetryProperty<string>;
        static RENDER_DISTANCE: $TelemetryProperty<number>;
        static LOAD_TIME_PRE_WINDOW_MS: $TelemetryProperty<$GameLoadTimesEvent$Measurement>;
        static ADVANCEMENT_ID: $TelemetryProperty<string>;
        static LOAD_TIME_LOADING_OVERLAY_MS: $TelemetryProperty<$GameLoadTimesEvent$Measurement>;
        static FRAME_RATE_SAMPLES: $TelemetryProperty<$LongList>;
        static WORLD_LOAD_TIME_MS: $TelemetryProperty<number>;
        constructor(arg0: string, arg1: string, arg2: $Codec_<T>, arg3: $TelemetryProperty$Exporter_<T>);
    }
    /**
     * Values that may be interpreted as {@link $TelemetryProperty}.
     */
    export type $TelemetryProperty_<T> = { exporter?: $TelemetryProperty$Exporter_<any>, codec?: $Codec_<any>, id?: string, exportKey?: string,  } | [exporter?: $TelemetryProperty$Exporter_<any>, codec?: $Codec_<any>, id?: string, exportKey?: string, ];
    export class $TelemetryPropertyMap {
        propertySet(): $Set<$TelemetryProperty<never>>;
        get<T>(key: $TelemetryProperty_<T>): T;
        static builder(): $TelemetryPropertyMap$Builder;
        static createCodec(properties: $List_<$TelemetryProperty_<never>>): $MapCodec<$TelemetryPropertyMap>;
    }
    export class $TelemetryProperty$GameMode extends $Enum<$TelemetryProperty$GameMode> implements $StringRepresentable {
        static values(): $TelemetryProperty$GameMode[];
        static valueOf(arg0: string): $TelemetryProperty$GameMode;
        id(): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SURVIVAL: $TelemetryProperty$GameMode;
        static SPECTATOR: $TelemetryProperty$GameMode;
        static CODEC: $Codec<$TelemetryProperty$GameMode>;
        static CREATIVE: $TelemetryProperty$GameMode;
        static ADVENTURE: $TelemetryProperty$GameMode;
        static HARDCORE: $TelemetryProperty$GameMode;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TelemetryProperty$GameMode}.
     */
    export type $TelemetryProperty$GameMode_ = "survival" | "creative" | "adventure" | "spectator" | "hardcore";
    export class $TelemetryEventType {
        isOptIn(): boolean;
        static values(): $List<$TelemetryEventType>;
        static builder(id: string, exportKey: string): $TelemetryEventType$Builder;
        contains<T>(property: $TelemetryProperty_<T>): boolean;
        id(): string;
        properties(): $List<$TelemetryProperty<never>>;
        "export"(session: $TelemetrySession, propertyMap: $TelemetryPropertyMap): $TelemetryEvent;
        description(): $MutableComponent;
        title(): $MutableComponent;
        codec(): $MapCodec<$TelemetryEventInstance>;
        static CODEC: $Codec<$TelemetryEventType>;
        static WORLD_LOADED: $TelemetryEventType;
        static ADVANCEMENT_MADE: $TelemetryEventType;
        static WORLD_UNLOADED: $TelemetryEventType;
        static PERFORMANCE_METRICS: $TelemetryEventType;
        static GAME_LOAD_TIMES: $TelemetryEventType;
        static WORLD_LOAD_TIMES: $TelemetryEventType;
        get optIn(): boolean;
    }
    export class $TelemetryEventType$Builder {
        optIn(): $TelemetryEventType$Builder;
        defineAll(properties: $List_<$TelemetryProperty_<never>>): $TelemetryEventType$Builder;
        register(): $TelemetryEventType;
        define<T>(property: $TelemetryProperty_<T>): $TelemetryEventType$Builder;
    }
    export class $TelemetryEventSender {
        static DISABLED: $TelemetryEventSender;
    }
    export interface $TelemetryEventSender {
        send(eventType: $TelemetryEventType, arg1: $Consumer_<$TelemetryPropertyMap$Builder>): void;
        decorate(arg0: $Consumer_<$TelemetryPropertyMap$Builder>): $TelemetryEventSender;
    }
    /**
     * Values that may be interpreted as {@link $TelemetryEventSender}.
     */
    export type $TelemetryEventSender_ = ((arg0: $TelemetryEventType, arg1: $Consumer<$TelemetryPropertyMap$Builder>) => void);
    export class $TelemetryProperty$Exporter<T> {
    }
    export interface $TelemetryProperty$Exporter<T> {
        apply(container: $TelemetryPropertyContainer, arg1: string, arg2: T): void;
    }
    /**
     * Values that may be interpreted as {@link $TelemetryProperty$Exporter}.
     */
    export type $TelemetryProperty$Exporter_<T> = ((arg0: $TelemetryPropertyContainer, arg1: string, arg2: T) => void);
}
