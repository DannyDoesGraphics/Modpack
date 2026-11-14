import { $Annotation } from "@package/java/lang/annotation";
import { $DataResult, $Codec, $Dynamic } from "@package/com/mojang/serialization";
import { $ExecutorService, $Callable, $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $SystemReportAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID, $List, $Map_, $Date, $Collection_, $List_, $Collection, $Map, $Map$Entry } from "@package/java/util";
import { $Typed, $DSL$TypeReference_ } from "@package/com/mojang/datafixers";
import { $StringRepresentable, $SingleKeyCache, $RandomSource, $TimeSource$NanoTimeSource } from "@package/net/minecraft/util";
import { $Predicate, $Consumer, $ToIntFunction, $Supplier_, $Function_, $Consumer_, $UnaryOperator_, $BiFunction, $Predicate_, $BiFunction_, $Function, $Supplier } from "@package/java/util/function";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $Direction$Axis_, $BlockPos_, $Direction_, $Registry } from "@package/net/minecraft/core";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PackType_ } from "@package/net/minecraft/server/packs";
import { $URI } from "@package/java/net";
import { $Thread$UncaughtExceptionHandler, $StackTraceElement, $Thread, $Throwable, $Iterable_, $Enum, $Record, $RuntimeException, $Runnable_, $StringBuilder, $Comparable, $Object, $Runnable } from "@package/java/lang";
import { $FileSystemProvider } from "@package/java/nio/file/spi";
import { $File_ } from "@package/java/io";
import { $ResourceLeakDetector$Level } from "@package/io/netty/util";
import { $ChunkPos, $LevelHeightAccessor, $BlockGetter } from "@package/net/minecraft/world/level";
import { $IntArrayList } from "@package/it/unimi/dsi/fastutil/ints";
import { $Logger } from "@package/org/slf4j";
import { $TextColor } from "@package/net/minecraft/network/chat";
import { $KubeColor } from "@package/dev/latvian/mods/kubejs/color";
import { $DataVersion } from "@package/net/minecraft/world/level/storage";
import { $Ticker } from "@package/com/google/common/base";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $IntStream, $LongStream, $Collector, $Stream } from "@package/java/util/stream";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Type } from "@package/com/mojang/datafixers/types";
export * as network from "@package/net/minecraft/network";
export * as server from "@package/net/minecraft/server";
export * as world from "@package/net/minecraft/world";
export * as util from "@package/net/minecraft/util";
export * as commands from "@package/net/minecraft/commands";
export * as client from "@package/net/minecraft/client";
export * as nbt from "@package/net/minecraft/nbt";
export * as advancements from "@package/net/minecraft/advancements";
export * as data from "@package/net/minecraft/data";
export * as core from "@package/net/minecraft/core";
export * as gametest from "@package/net/minecraft/gametest";
export * as resources from "@package/net/minecraft/resources";
export * as sounds from "@package/net/minecraft/sounds";
export * as tags from "@package/net/minecraft/tags";
export * as recipebook from "@package/net/minecraft/recipebook";
export * as stats from "@package/net/minecraft/stats";
export * as realms from "@package/net/minecraft/realms";
export * as obfuscate from "@package/net/minecraft/obfuscate";
export * as locale from "@package/net/minecraft/locale";
export * as references from "@package/net/minecraft/references";

declare module "@package/net/minecraft" {
    export class $ResourceLocationException extends $RuntimeException {
        constructor(message: string);
        constructor(message: string, cause: $Throwable);
    }
    export class $ChatFormatting extends $Enum<$ChatFormatting> implements $StringRepresentable, $KubeColor {
        /**
         * Returns the numerical color index that represents this formatting
         */
        kjs$getRGB(): number;
        /**
         * Returns the numerical color index that represents this formatting
         */
        kjs$getARGB(): number;
        /**
         * Checks if this is a color code.
         */
        isFormat(): boolean;
        /**
         * Checks if this is a color code.
         */
        isColor(): boolean;
        static stripFormatting(string: string | null): string;
        /**
         * Get a TextFormatting from its color index
         */
        static getById(index: number): $ChatFormatting;
        static getByCode(formattingCode: string): $ChatFormatting;
        /**
         * Gets all the valid values.
         */
        static getNames(getColor: boolean, getFancyStyling: boolean): $Collection<string>;
        /**
         * Gets the friendly name of this value.
         */
        getName(): string;
        static values(): $ChatFormatting[];
        getChar(): string;
        /**
         * Gets a value by its friendly name null if the given name does not map to a defined value.
         */
        static valueOf(friendlyName: string): $ChatFormatting;
        /**
         * Returns the numerical color index that represents this formatting
         */
        getId(): number;
        /**
         * Gets a value by its friendly name null if the given name does not map to a defined value.
         */
        static getByName(friendlyName: string | null): $ChatFormatting;
        getColor(): number;
        /**
         * Gets the friendly name of this value.
         */
        getSerializedName(): string;
        /**
         * Gets the friendly name of this value.
         */
        getRemappedEnumConstantName(): string;
        /**
         * Returns the numerical color index that represents this formatting
         */
        getFireworkRGB(): number;
        /**
         * Gets the friendly name of this value.
         */
        toHexString(): string;
        /**
         * Gets the friendly name of this value.
         */
        serialize(): string;
        createTextColor(): $TextColor;
        specialEquals(o: $Object, shallow: boolean): boolean;
        static ITALIC: $ChatFormatting;
        static GOLD: $ChatFormatting;
        static GRAY: $ChatFormatting;
        static AQUA: $ChatFormatting;
        static WHITE: $ChatFormatting;
        static CODEC: $Codec<$ChatFormatting>;
        static BLUE: $ChatFormatting;
        static OBFUSCATED: $ChatFormatting;
        static DARK_AQUA: $ChatFormatting;
        static RESET: $ChatFormatting;
        static DARK_BLUE: $ChatFormatting;
        static GREEN: $ChatFormatting;
        static UNDERLINE: $ChatFormatting;
        static RED: $ChatFormatting;
        static PREFIX_CODE: string;
        static DARK_PURPLE: $ChatFormatting;
        static STRIKETHROUGH: $ChatFormatting;
        static DARK_RED: $ChatFormatting;
        static LIGHT_PURPLE: $ChatFormatting;
        static BLACK: $ChatFormatting;
        static BOLD: $ChatFormatting;
        static DARK_GREEN: $ChatFormatting;
        static YELLOW: $ChatFormatting;
        static DARK_GRAY: $ChatFormatting;
        get format(): boolean;
        get char(): string;
        get id(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
        get fireworkRGB(): number;
    }
    /**
     * Values that may be interpreted as {@link $ChatFormatting}.
     */
    export type $ChatFormatting_ = "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "obfuscated" | "bold" | "strikethrough" | "underline" | "italic" | "reset";
    export class $CrashReportCategory$Entry {
    }
    export class $DefaultUncaughtExceptionHandlerWithName implements $Thread$UncaughtExceptionHandler {
        uncaughtException(thread: $Thread, exception: $Throwable): void;
        constructor(logger: $Logger);
    }
    export class $BlockUtil$FoundRectangle {
        axis1Size: number;
        minCorner: $BlockPos;
        axis2Size: number;
        constructor(minCorner: $BlockPos_, axis1Size: number, axis2Size: number);
    }
    /**
     * Shared global constants.
     * 
     * **Note:** The majority of the fields within this class are `public static final` with constant expressions (constants), and are inlined by the Java compiler at all places which reference these constant fields. Therefore, changing the value of these constant fields will have no effect on already compiled code.
     * 
     * In addition, it is presumed that a large portion of these constant fields (such as those prefixed with `DEBUG_` are used as 'flags', for manually toggling code meant for use by Mojang developers in debugging. Therefore, optimizing compilers (which include the Java compiler) may omit the code hidden behind disabled flags, and will result in these flags having no apparent use in the code (when in reality, the optimizing compiler has removed the code which uses them).
     * 
     * @see The Java&reg; Language Specification, Java SE 16 Edition, &sect; 15.29. "Constant Expressions"
     * @see The Java&reg; Language Specification, Java SE 16 Edition, &sect; 14.22. "Unreachable Statements"
     */
    export class $SharedConstants {
        /**
         * Sets the world version, failing if a different world version is already present.
         * 
         * @throws IllegalStateException if a different world version has already been set previously
         */
        static setVersion(version: $WorldVersion): void;
        /**
         * @return the world version
         * 
         * @throws IllegalStateException if a world version has not been set previously
         */
        static getCurrentVersion(): $WorldVersion;
        static tryDetectVersion(): void;
        /**
         * @return the networking protocol version in use by this game version
         * 
         * For releases, this will be equivalent to `#RELEASE_NETWORK_PROTOCOL_VERSION`. For snapshot versions, this will be the combination (bitwise OR) of `#SNAPSHOT_NETWORK_PROTOCOL_VERSION` and the bit marked by `#SNAPSHOT_PROTOCOL_BIT`.
         */
        static getProtocolVersion(): number;
        static debugVoidTerrain(chunkPos: $ChunkPos): boolean;
        /**
         * @deprecated
         */
        static DATA_PACK_FORMAT: number;
        static DEBUG_DONT_SAVE_WORLD: boolean;
        static DEBUG_DISABLE_AQUIFERS: boolean;
        static DEBUG_DISABLE_BELOW_ZERO_RETROGENERATION: boolean;
        /**
         * @deprecated
         */
        static WORLD_VERSION: number;
        static CRASH_EAGERLY: boolean;
        static MAXIMUM_TICK_TIME_NANOS: number;
        static MAX_PLAYER_NAME_LENGTH: number;
        static FIX_SAND_DUPE: boolean;
        static DEBUG_DISABLE_SURFACE: boolean;
        static REPORT_FORMAT_VERSION: number;
        /**
         * @deprecated
         */
        static VERSION_STRING: string;
        static DEBUG_SYNCHRONOUS_GL_LOGS: boolean;
        static DEBUG_JFR_PROFILING_ENABLE_LEVEL_LOADING: boolean;
        static DEBUG_COLLISION: boolean;
        static DEBUG_RENDER: boolean;
        static DEBUG_UI_NARRATION: boolean;
        static FAKE_MS_LATENCY: number;
        static DEBUG_WORLDGENATTEMPT: boolean;
        static DEBUG_SKY_LIGHT_SECTIONS: boolean;
        static CHECK_DATA_FIXER_SCHEMA: boolean;
        static MAX_CHAT_LENGTH: number;
        static DEBUG_ORE_VEINS: boolean;
        static DEBUG_SAVE_STRUCTURES_AS_SNBT: boolean;
        static DEBUG_WATER: boolean;
        static AVERAGE_GAME_TICKS_PER_RANDOM_TICK_PER_BLOCK: number;
        static DEBUG_STRUCTURE_EDIT_MODE: boolean;
        static MAX_CHAINED_NEIGHBOR_UPDATES: number;
        static DEBUG_VALIDATE_RESOURCE_PATH_CASE: boolean;
        static DEBUG_BEES: boolean;
        static DEBUG_NEIGHBORSUPDATE: boolean;
        static DEBUG_STRUCTURES: boolean;
        static WORLD_RESOLUTION: number;
        static MAX_FUNCTION_COMMAND_LENGTH: number;
        static DEBUG_BYPASS_REALMS_VERSION_CHECK: boolean;
        static DEBUG_DUMP_INTERPOLATED_TEXTURE_FRAMES: boolean;
        static DEBUG_FORCE_ONBOARDING_SCREEN: boolean;
        static DEBUG_PATHFINDING: boolean;
        static DEBUG_FORCE_TELEMETRY: boolean;
        static DEBUG_DISABLE_FEATURES: boolean;
        static TICKS_PER_GAME_DAY: number;
        static AVERAGE_RANDOM_TICKS_PER_BLOCK_PER_GAME_DAY: number;
        static DEBUG_AQUIFERS: boolean;
        static DEBUG_IGNORE_LOCAL_MOB_CAP: boolean;
        /**
         * @deprecated
         */
        static SNAPSHOT: boolean;
        /**
         * @deprecated
         */
        static RELEASE_NETWORK_PROTOCOL_VERSION: number;
        static DEBUG_SHAPES: boolean;
        static DEBUG_DISABLE_BLENDING: boolean;
        static FAKE_MS_JITTER: number;
        static DEBUG_HOTKEYS: boolean;
        static DEBUG_GOAL_SELECTOR: boolean;
        static DEBUG_RAIDS: boolean;
        static MAXIMUM_BLOCK_EXPLOSION_RESISTANCE: number;
        static DEBUG_BRAIN: boolean;
        static FIX_TNT_DUPE: boolean;
        static DEBUG_OPEN_INCOMPATIBLE_WORLDS: boolean;
        static DEBUG_SUBTITLES: boolean;
        static DEBUG_UNLOCK_ALL_TRADES: boolean;
        static MILLIS_PER_TICK: number;
        static DEBUG_DISABLE_LIQUID_SPREADING: boolean;
        static USE_WORKFLOWS_HOOKS: boolean;
        static DEBUG_ALLOW_LOW_SIM_DISTANCE: boolean;
        static DEBUG_BLOCK_BREAK: boolean;
        static DEBUG_BREEZE_MOB: boolean;
        static DEBUG_FEATURE_COUNT: boolean;
        static DEBUG_SOLID_FACE: boolean;
        static DEBUG_SCULK_CATALYST: boolean;
        static DEBUG_DISABLE_ORE_VEINS: boolean;
        static DEBUG_LARGE_DRIPSTONE: boolean;
        static DEBUG_RESOURCE_LOAD_TIMES: boolean;
        static DEBUG_KEEP_JIGSAW_BLOCKS_DURING_STRUCTURE_GEN: boolean;
        static TICKS_PER_SECOND: number;
        static DEBUG_SUPPORT_BLOCKS: boolean;
        static INGAME_DEBUG_OUTPUT: boolean;
        static DEBUG_CARVERS: boolean;
        static DEBUG_VILLAGE_SECTIONS: boolean;
        static DATA_VERSION_TAG: string;
        static DEBUG_SHOW_SERVER_DEBUG_VALUES: boolean;
        static DEBUG_RESOURCE_GENERATION_OVERRIDE: boolean;
        static IS_RUNNING_WITH_JDWP: boolean;
        static SNBT_NAG_VERSION: number;
        static TICKS_PER_MINUTE: number;
        static WORLD_ICON_SIZE: number;
        static DEBUG_DUMP_TEXTURE_ATLAS: boolean;
        static USE_DEVONLY: boolean;
        static DEBUG_LIGHT: boolean;
        static DEBUG_SOCIAL_INTERACTIONS: boolean;
        static debugGenerateSquareTerrainWithoutNoise: boolean;
        /**
         * @deprecated
         */
        static SNAPSHOT_NETWORK_PROTOCOL_VERSION: number;
        static DEBUG_NAMED_RUNNABLES: boolean;
        static DEBUG_DONT_SEND_TELEMETRY_TO_BACKEND: boolean;
        static NETTY_LEAK_DETECTION: $ResourceLeakDetector$Level;
        static DEBUG_VERBOSE_SERVER_EVENTS: boolean;
        static DEBUG_TRIAL_SPAWNER_DETECTS_SHEEP_AS_PLAYERS: boolean;
        static DEBUG_WORLD_RECREATE: boolean;
        static DEBUG_CHUNKS: boolean;
        static MAX_USER_INPUT_COMMAND_LENGTH: number;
        static MAX_RENDER_DISTANCE: number;
        /**
         * @deprecated
         */
        static SERIES: string;
        static DEBUG_DISABLE_STRUCTURES: boolean;
        static DEBUG_GAME_EVENT_LISTENERS: boolean;
        static DEBUG_ONLY_GENERATE_HALF_THE_WORLD: boolean;
        static ILLEGAL_FILE_CHARACTERS: string[];
        static DEFAULT_MINECRAFT_PORT: number;
        static USE_DEBUG_FEATURES: boolean;
        /**
         * @deprecated
         */
        static RESOURCE_PACK_FORMAT: number;
        static COMMAND_STACK_TRACES: boolean;
        static AVERAGE_RANDOM_TICKS_PER_BLOCK_PER_MINUTE: number;
        static DEBUG_DISABLE_CARVERS: boolean;
        static DEBUG_SHOW_LOCAL_SERVER_ENTITY_HIT_BOXES: boolean;
        /**
         * @deprecated
         */
        static LANGUAGE_FORMAT: number;
        static DEBUG_HEIGHTMAP: boolean;
        static DEBUG_VAULT_DETECTS_SHEEP_AS_PLAYERS: boolean;
        static DEBUG_DISABLE_FLUID_GENERATION: boolean;
        static DEBUG_MONITOR_TICK_TIMES: boolean;
        static IS_RUNNING_IN_IDE: boolean;
        static debugGenerateStripedTerrainWithoutNoise: boolean;
        constructor();
        static set version(value: $WorldVersion);
        static get currentVersion(): $WorldVersion;
        static get protocolVersion(): number;
    }
    export class $Util$OS extends $Enum<$Util$OS> {
        static values(): $Util$OS[];
        static valueOf(arg0: string): $Util$OS;
        openUri(uri: string): void;
        openUri(uri: $URI): void;
        openFile(file: $File_): void;
        telemetryName(): string;
        openPath(path: $Path_): void;
        static LINUX: $Util$OS;
        static OSX: $Util$OS;
        static WINDOWS: $Util$OS;
        static SOLARIS: $Util$OS;
        static UNKNOWN: $Util$OS;
    }
    /**
     * Values that may be interpreted as {@link $Util$OS}.
     */
    export type $Util$OS_ = "linux" | "solaris" | "windows" | "osx" | "unknown";
    export class $FieldsAreNonnullByDefault implements $Annotation {
    }
    export class $BlockUtil$IntBounds {
        min: number;
        max: number;
        constructor(min: number, max: number);
    }
    export class $ReportType extends $Record {
        header(): string;
        appendHeader(builder: $StringBuilder, links: $List_<string>): void;
        nuggets(): $List<string>;
        getErrorComment(): string;
        static CRASH: $ReportType;
        static PROFILE: $ReportType;
        static TEST: $ReportType;
        static CHUNK_IO_ERROR: $ReportType;
        static NETWORK_PROTOCOL_ERROR: $ReportType;
        constructor(header: string, nuggets: $List_<string>);
        get errorComment(): string;
    }
    /**
     * Values that may be interpreted as {@link $ReportType}.
     */
    export type $ReportType_ = { nuggets?: $List_<string>, header?: string,  } | [nuggets?: $List_<string>, header?: string, ];
    export class $FileUtil {
        static createPathToResource(dirPath: $Path_, locationPath: string, fileFormat: string): $Path;
        static isPathNormalized(path: $Path_): boolean;
        static isPathPortable(path: $Path_): boolean;
        static resolvePath(path: $Path_, subdirectories: $List_<string>): $Path;
        static findAvailableName(dirPath: $Path_, fileName: string, fileFormat: string): string;
        static sanitizeName(path: string): string;
        static createDirectoriesSafe(path: $Path_): void;
        static validatePath(...elements: string[]): void;
        static decomposePath(path: string): $DataResult<$List<string>>;
        static isValidStrictPathSegment(segment: string): boolean;
        static getFullResourcePath(path: string): string;
        static normalizeResourcePath(path: string): string;
        constructor();
    }
    export class $DefaultUncaughtExceptionHandler implements $Thread$UncaughtExceptionHandler {
        uncaughtException(thread: $Thread, exception: $Throwable): void;
        constructor(logger: $Logger);
    }
    export class $MethodsReturnNonnullByDefault implements $Annotation {
    }
    export class $CharPredicate {
    }
    export interface $CharPredicate {
        test(value: string): boolean;
        or(predicate: $CharPredicate_): $CharPredicate;
        negate(): $CharPredicate;
        and(predicate: $CharPredicate_): $CharPredicate;
    }
    /**
     * Values that may be interpreted as {@link $CharPredicate}.
     */
    export type $CharPredicate_ = ((arg0: string) => boolean);
    export class $CrashReportDetail<V> {
    }
    export interface $CrashReportDetail<V> extends $Callable<V> {
    }
    /**
     * Values that may be interpreted as {@link $CrashReportDetail}.
     */
    export type $CrashReportDetail_<V> = (() => void);
    export class $CrashReportCategory {
        /**
         * Adds a Crashreport section with the given name with the given Throwable
         */
        setDetailError(sectionName: string, throwable: $Throwable): void;
        /**
         * Removes the given number entries from the bottom of the stack trace.
         */
        trimStacktrace(amount: number): void;
        /**
         * @deprecated
         */
        applyStackTrace(arg0: $Throwable): void;
        /**
         * Resets our stack trace according to the current trace, pruning the deepest 3 entries.  The parameter indicates how many additional deepest entries to prune.  Returns the number of entries in the resulting pruned stack trace.
         */
        fillInStackTrace(size: number): number;
        setStackTrace(arg0: $StackTraceElement[]): void;
        /**
         * Adds a section to this crash report category, resolved by calling the given callable.
         * 
         * If the given callable throws an exception, a detail containing that exception will be created instead.
         */
        setDetail(name: string, detail: $CrashReportDetail_<string>): $CrashReportCategory;
        /**
         * Adds a Crashreport section with the given name with the given value (converted `.toString()`)
         */
        setDetail(sectionName: string, value: $Object): $CrashReportCategory;
        static populateBlockDetails(category: $CrashReportCategory, levelHeightAccessor: $LevelHeightAccessor, pos: $BlockPos_, state: $BlockState_ | null): void;
        static formatLocation(levelHeightAccess: $LevelHeightAccessor, x: number, arg2: number, y: number): string;
        static formatLocation(levelHeightAccess: $LevelHeightAccessor, pos: $BlockPos_): string;
        static formatLocation(levelHeightAccess: $LevelHeightAccessor, x: number, y: number, z: number): string;
        getDetails(builder: $StringBuilder): void;
        getStacktrace(): $StackTraceElement[];
        /**
         * Do the deepest two elements of our saved stack trace match the given elements, in order from the deepest?
         */
        validateStackTrace(s1: $StackTraceElement, s2: $StackTraceElement): boolean;
        constructor(title: string);
        set stackTrace(value: $StackTraceElement[]);
        get stacktrace(): $StackTraceElement[];
    }
    export class $SystemReport implements $SystemReportAccessor {
        setDetail(property: string, valueSupplier: $Supplier_<string>): void;
        setDetail(identifier: string, value: string): void;
        toLineSeparatedString(): string;
        static getOPERATING_SYSTEM$create_$md$5c91d2$2(): string;
        static getJAVA_VERSION$create_$md$5c91d2$3(): string;
        static sizeInMiB(bytes: number): number;
        appendToCrashReportString(reportAppender: $StringBuilder): void;
        getEntries(): $Map<string, string>;
        static BYTES_PER_MEBIBYTE: number;
        constructor();
        static get OPERATING_SYSTEM$create_$md$5c91d2$2(): string;
        static get JAVA_VERSION$create_$md$5c91d2$3(): string;
        get entries(): $Map<string, string>;
    }
    export class $WorldVersion {
    }
    export interface $WorldVersion {
        getName(): string;
        getId(): string;
        isStable(): boolean;
        getProtocolVersion(): number;
        getDataVersion(): $DataVersion;
        getPackVersion(packType: $PackType_): number;
        getBuildTime(): $Date;
        get name(): string;
        get id(): string;
        get stable(): boolean;
        get protocolVersion(): number;
        get dataVersion(): $DataVersion;
        get buildTime(): $Date;
    }
    export class $BlockUtil {
        /**
         * Finds the rectangle with the largest area containing centerPos within the blocks specified by the predicate
         */
        static getLargestRectangleAround(centerPos: $BlockPos_, axis1: $Direction$Axis_, max1: number, axis2: $Direction$Axis_, max2: number, posPredicate: $Predicate_<$BlockPos>): $BlockUtil$FoundRectangle;
        static getTopConnectedBlock(getter: $BlockGetter, pos: $BlockPos_, baseBlock: $Block_, direction: $Direction_, endBlock: $Block_): ($BlockPos) | undefined;
        constructor();
    }
    export class $CrashReport {
        saveToFile(path: $Path_, type: $ReportType_, links: $List_<string>): boolean;
        saveToFile(path: $Path_, type: $ReportType_): boolean;
        /**
         * Returns the Throwable object that is the cause for the crash and Crash Report.
         */
        getException(): $Throwable;
        /**
         * Gets the stack trace of the Throwable that caused this crash report, or if that fails, the cause `.toString()`.
         */
        getTitle(): string;
        /**
         * Creates a crash report for the exception
         */
        static forThrowable(cause: $Throwable, description: string): $CrashReport;
        /**
         * Creates a CrashReportCategory for the given stack trace depth
         */
        addCategory(categoryName: string, stacktraceLength: number): $CrashReportCategory;
        /**
         * Creates a CrashReportCategory
         */
        addCategory(name: string): $CrashReportCategory;
        getFriendlyReport(type: $ReportType_, links: $List_<string>): string;
        getFriendlyReport(type: $ReportType_): string;
        getSaveFile(): $Path;
        getSystemReport(): $SystemReport;
        static preload(): void;
        /**
         * Gets the various sections of the crash report into the given StringBuilder
         */
        getDetails(builder: $StringBuilder): void;
        /**
         * Gets the stack trace of the Throwable that caused this crash report, or if that fails, the cause `.toString()`.
         */
        getDetails(): string;
        /**
         * Gets the stack trace of the Throwable that caused this crash report, or if that fails, the cause `.toString()`.
         */
        getExceptionMessage(): string;
        constructor(title: string, exception: $Throwable);
        get exception(): $Throwable;
        get title(): string;
        get saveFile(): $Path;
        get systemReport(): $SystemReport;
        get exceptionMessage(): string;
    }
    export class $ReportedException extends $RuntimeException {
        /**
         * Gets the CrashReport wrapped by this exception.
         */
        getReport(): $CrashReport;
        constructor(report: $CrashReport);
        get report(): $CrashReport;
    }
    export class $DetectedVersion implements $WorldVersion {
        getName(): string;
        getId(): string;
        isStable(): boolean;
        /**
         * Creates a new instance containing world version data from version.json (or fallback data if necessary).
         * 
         * For getting data, use `SharedConstants#getCurrentVersion` instead, as that is cached.
         */
        static tryDetectVersion(): $WorldVersion;
        getProtocolVersion(): number;
        getDataVersion(): $DataVersion;
        getPackVersion(packType: $PackType_): number;
        getBuildTime(): $Date;
        static BUILT_IN: $WorldVersion;
        get name(): string;
        get id(): string;
        get stable(): boolean;
        get protocolVersion(): number;
        get dataVersion(): $DataVersion;
        get buildTime(): $Date;
    }
    export class $Optionull {
        static firstOrDefault<T>(collection: $Collection_<T>, defaultValue: T): T;
        static firstOrElse<T>(collection: $Collection_<T>, supplier: $Supplier_<T>): T;
        static mapOrDefault<T, R>(value: T | null, mapper: $Function_<T, R>, defaultValue: R): R;
        static map<T, R>(value: T | null, mapper: $Function_<T, R>): R;
        static first<T>(collection: $Collection_<T>): T;
        static isNullOrEmpty(array: number[] | null): boolean;
        static isNullOrEmpty(array: number[] | null): boolean;
        static isNullOrEmpty(array: number[] | null): boolean;
        static isNullOrEmpty(array: number[] | null): boolean;
        static isNullOrEmpty(array: number[] | null): boolean;
        static isNullOrEmpty<T>(array: T[] | null): boolean;
        static isNullOrEmpty(array: boolean[] | null): boolean;
        static isNullOrEmpty(array: number[] | null): boolean;
        static isNullOrEmpty(array: string[] | null): boolean;
        static mapOrElse<T, R>(value: T | null, mapper: $Function_<T, R>, supplier: $Supplier_<R>): R;
        constructor();
    }
    export class $Util {
        static getVmArguments(): $Stream<string>;
        static getPropertyName<T extends $Comparable<T>>(property: $Property<T>, value: $Object): string;
        static anyOf<T>(predicates: $List_<$Predicate_<T>>): $Predicate<T>;
        static name(item: $Runnable_, nameSupplier: $Supplier_<string>): $Runnable;
        static name<T>(item: $Supplier_<T>, nameSupplier: $Supplier_<string>): $Supplier<T>;
        static prefix(prefix: string, expectedSize: $Consumer_<string>): $Consumer<string>;
        static make<T>(object: T, consumer: $Consumer_<T>): T;
        static make<T>(supplier: $Supplier_<T>): T;
        static toMap<K, V>(): $Collector<$Map$Entry<K, V>, never, $Map<K, V>>;
        static shuffle<T>(list: $List_<T>, random: $RandomSource): void;
        /**
         * Takes a list of futures and returns a future of list that completes when all of them succeed or any of them error,
         */
        static sequence(futures: $List_<any>): $CompletableFuture<any>;
        static lastOf<T>(list: $List_<T>): T;
        static getMillis(): number;
        static allOf<T>(predicates: $List_<$Predicate_<T>>): $Predicate<T>;
        static getNanos(): number;
        static getPlatform(): $Util$OS;
        static memoize<T, U, R>(memoBiFunction: $BiFunction_<T, U, R>): $BiFunction<T, U, R>;
        static memoize<T, R>(memoFunction: $Function_<T, R>): $Function<T, R>;
        static ifElse<T>(opt: (T) | undefined, consumer: $Consumer_<T>, orElse: $Runnable_): (T) | undefined;
        static startTimerHackThread(): void;
        static nonCriticalIoPool(): $ExecutorService;
        static backgroundExecutor(): $ExecutorService;
        static throwAsRuntime(throwable: $Throwable): void;
        static getFilenameFormattedDateTime(): string;
        static shutdownExecutors(): void;
        static ioPool(): $ExecutorService;
        static fixedSize(stream: $IntStream, size: number): $DataResult<number[]>;
        static fixedSize<T>(list: $List_<T>, expectedSize: number): $DataResult<$List<T>>;
        static fixedSize(stream: $LongStream, expectedSize: number): $DataResult<number[]>;
        static createIndexLookup<T>(list: $List_<T>): $ToIntFunction<T>;
        static parseAndValidateUntrustedUri(uri: string): $URI;
        static writeAndReadTypedOrThrow<A, B>(typed: $Typed<A>, type: $Type<B>, operator: $UnaryOperator_<$Dynamic<never>>): $Typed<B>;
        static readTypedOrThrow<T>(type: $Type<T>, data: $Dynamic<never>, partial: boolean): $Typed<T>;
        static readTypedOrThrow<T>(type: $Type<T>, data: $Dynamic<never>): $Typed<T>;
        static getRandom<T>(selections: T[], random: $RandomSource): T;
        static getRandom(selections: number[], random: $RandomSource): number;
        static getRandom<T>(selections: $List_<T>, random: $RandomSource): T;
        static toMutableList<T>(): $Collector<T, never, $List<T>>;
        static makeDescriptionId(type: string, id: $ResourceLocation_ | null): string;
        static safeReplaceFile(fromDirectory: $Path_, toDirectory: $Path_, filePath: $Path_): void;
        static safeReplaceOrMoveFile(current: $Path_, latest: $Path_, oldBackup: $Path_, arg3: boolean): boolean;
        static offsetByCodepoints(text: string, cursorPos: number, direction: number): number;
        static copyBetweenDirs(fromDirectory: $Path_, toDirectory: $Path_, filePath: $Path_): void;
        static sanitizeName(fileName: string, characterValidator: $CharPredicate_): string;
        static singleKeyCache<K, V>(computeValue: $Function_<K, V>): $SingleKeyCache<K, V>;
        static toShuffledList<T>(stream: $Stream<T>, random: $RandomSource): $List<T>;
        static toShuffledList(stream: $IntStream, random: $RandomSource): $IntArrayList;
        static shuffledCopy<T>(list: $ObjectArrayList<T>, random: $RandomSource): $List<T>;
        static shuffledCopy<T>(array: T[], random: $RandomSource): $List<T>;
        static blockUntilDone<T>(task: $Function_<$Executor, T>, donePredicate: $Predicate_<T>): T;
        static blockUntilDone<T>(task: $Function_<$Executor, $CompletableFuture<T>>): $CompletableFuture<T>;
        static createIndexIdentityLookup<T>(list: $List_<T>): $ToIntFunction<T>;
        static copyAndAdd<T>(list: $List_<T>, value: T): $List<T>;
        static copyAndAdd<T>(value: T, list: $List_<T>): $List<T>;
        static copyAndPut<K, V>(map: $Map_<K, V>, key: K, value: V): $Map<K, V>;
        /**
         * Takes a list of futures and returns a future of list that completes when all of them succeed or any of them error,
         */
        static sequenceFailFast(futures: $List_<any>): $CompletableFuture<any>;
        /**
         * Takes a list of futures and returns a future of list that completes when all of them succeed or any of them error,
         */
        static sequenceFailFastAndCancel(futures: $List_<any>): $CompletableFuture<any>;
        static getEpochMillis(): number;
        static pauseInIde<T extends $Throwable>(throwable: T): T;
        static fetchChoiceType(type: $DSL$TypeReference_, choiceName: string): $Type<never>;
        static wrapThreadWithTaskName<V>(name: string, task: $Supplier_<V>): $Supplier<V>;
        static wrapThreadWithTaskName(name: string, task: $Runnable_): $Runnable;
        static getRegisteredName<T>(registry: $Registry<T>, value: T): string;
        static isSymmetrical<T>(width: number, height: number, list: $List_<T>): boolean;
        static findNextInIterable<T>(iterable: $Iterable_<T>, element: T | null): T;
        static findPreviousInIterable<T>(iterable: $Iterable_<T>, element: T | null): T;
        static logAndPauseIfInIde(message: string): void;
        static logAndPauseIfInIde(message: string, error: $Throwable): void;
        static setPause(thePauser: $Consumer_<string>): void;
        static describeError(throwable: $Throwable): string;
        static getRandomSafe<T>(selections: $List_<T>, random: $RandomSource): (T) | undefined;
        static ZIP_FILE_SYSTEM_PROVIDER: $FileSystemProvider;
        static TICKER: $Ticker;
        static LINEAR_LOOKUP_THRESHOLD: number;
        static NANOS_PER_MILLI: number;
        static timeSource: $TimeSource$NanoTimeSource;
        static NIL_UUID: $UUID;
        constructor();
        static get vmArguments(): $Stream<string>;
        static get millis(): number;
        static get nanos(): number;
        static get platform(): $Util$OS;
        static get filenameFormattedDateTime(): string;
        static get epochMillis(): number;
        static set pause(value: $Consumer_<string>);
    }
}
