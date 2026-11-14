import { $Keyable, $MapCodec_, $Decoder$Simple, $DataResult, $MapEncoder, $DynamicOps, $Codec, $MapLike, $ListBuilder, $Decoder$Boxed, $Lifecycle, $Encoder, $Codec_, $RecordBuilder$AbstractUniversalBuilder, $Dynamic, $MapCodec, $Decoder, $Codec$ResultFunction, $Encoder_, $RecordBuilder, $Decoder$Terminal, $Decoder_ } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $TimeUnit, $Semaphore, $CompletableFuture, $TimeUnit_, $Executor_ } from "@package/java/util/concurrent";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $EntityType_, $Mob, $MobSpawnType_ } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $ByteBuffer } from "@package/java/nio";
import { $ReportedException, $CrashReportCategory } from "@package/net/minecraft";
import { $Proxy, $URI, $URL } from "@package/java/net";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $RemappedEnumConstant } from "@package/dev/latvian/mods/rhino/util";
import { $Cipher, $SecretKey } from "@package/javax/crypto";
import { $Item } from "@package/net/minecraft/world/item";
import { $Component_, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $EntityClassGroup, $TypeFilterableListInternalAccess } from "@package/net/caffeinemc/mods/lithium/common/entity";
import { $Palette } from "@package/net/minecraft/world/level/chunk";
import { $Instant } from "@package/java/time";
import { $Float2FloatFunction_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $ClassGroupFilterableList, $CompactingPackedIntegerArray } from "@package/net/caffeinemc/mods/lithium/common/world/chunk";
import { $IntProvider_, $UniformInt } from "@package/net/minecraft/util/valueproviders";
import { $AABB_, $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Vector4f, $Vector3f, $AxisAngle4f, $Quaternionf } from "@package/org/joml";
import { $JsonObject_, $JsonObject, $JsonElement_, $TypeAdapterFactory, $TypeAdapter, $JsonElement, $JsonArray_, $JsonDeserializationContext_, $JsonArray, $Gson } from "@package/com/google/gson";
import { $Annotation } from "@package/java/lang/annotation";
import { $ClassInstanceMultiMapAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/alloc/entity_iteration";
import { $TypeToken } from "@package/com/google/gson/reflect";
import { $UUID_, $Set_, $ArrayList, $AbstractSet, $Map, $Spliterator, $Base64$Encoder, $List, $Map_, $List_, $Collection, $AbstractList, $OptionalLong, $Comparator, $RandomAccess, $Iterator, $UUID, $Deque, $BitSet, $AbstractCollection } from "@package/java/util";
import { $IntFunction_, $Supplier_, $Function, $BiConsumer_, $LongSupplier, $IntConsumer_, $UnaryOperator_, $ToIntFunction_, $IntFunction, $Consumer_, $Predicate, $BiConsumer, $Consumer, $IntPredicate_, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $Vec3i, $Holder, $Direction_, $IdMap, $Direction$Axis_, $Holder_, $HolderSet } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Cloneable, $Comparable_, $Number, $Exception, $Throwable, $Enum, $RuntimeException, $Comparable, $Thread, $Record, $AutoCloseable, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $PropertyMap } from "@package/com/mojang/authlib/properties";
import { $PositionalRandomFactory } from "@package/net/minecraft/world/level/levelgen";
import { $BitStorageExtension } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $Int2IntFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $DataOutput, $Reader, $Writer, $Serializable, $Closeable, $InputStream, $File_, $IOException } from "@package/java/io";
import { $Fraction } from "@package/org/apache/commons/lang3/math";
import { $Logger } from "@package/org/slf4j";
import { $HashCode, $HashFunction } from "@package/com/google/common/hash";
import { $Multimap, $AbstractIterator } from "@package/com/google/common/collect";
import { $KeyPair, $PublicKey, $Key, $PrivateKey } from "@package/java/security";
import { $Pattern } from "@package/java/util/regex";
import { $TemporalAccessor } from "@package/java/time/temporal";
import { $BigInteger, $BigDecimal } from "@package/java/math";
import { $ServicesKeyType_, $ServicesKeySet_ } from "@package/com/mojang/authlib/yggdrasil";
import { $LongStream, $Stream, $IntStream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BaseMapCodec } from "@package/com/mojang/serialization/codecs";
import { $JsonWriter } from "@package/com/google/gson/stream";
export * as datafix from "@package/net/minecraft/util/datafix";
export * as thread from "@package/net/minecraft/util/thread";
export * as debugchart from "@package/net/minecraft/util/debugchart";
export * as profiling from "@package/net/minecraft/util/profiling";
export * as random from "@package/net/minecraft/util/random";
export * as parsing from "@package/net/minecraft/util/parsing";
export * as worldupdate from "@package/net/minecraft/util/worldupdate";
export * as valueproviders from "@package/net/minecraft/util/valueproviders";
export * as eventlog from "@package/net/minecraft/util/eventlog";
export * as monitoring from "@package/net/minecraft/util/monitoring";

declare module "@package/net/minecraft/util" {
    export class $SequencedPriorityIterator<T> extends $AbstractIterator<T> {
        add(value: T, priority: number): void;
        constructor();
    }
    export class $SmoothDouble {
        reset(): void;
        getNewDeltaValue(arg0: number, arg1: number): number;
        constructor();
    }
    export class $SimpleBitStorage implements $BitStorage, $CompactingPackedIntegerArray, $BitStorageExtension {
        redirect$del000$lithium$skipValidation(arg0: number, arg1: number, arg2: number): void;
        lithium$compact(arg0: $Palette<any>, arg1: $Palette<any>, arg2: number[]): void;
        sodium$unpack(arg0: $Object[], arg1: $Palette<any>): void;
        getBits(): number;
        get(index: number): number;
        set(bits: number, size: number): void;
        copy(): $BitStorage;
        getSize(): number;
        getAndSet(index: number, value: number): number;
        getAll(consumer: $IntConsumer_): void;
        unpack(array: number[]): void;
        /**
         * Gets the long array that is used to store the data in this BitArray. This is useful for sending packet data.
         */
        getRaw(): number[];
        constructor(bits: number, size: number, data: number[]);
        constructor(bits: number, size: number, data: number[] | null);
        constructor(bits: number, size: number);
        get bits(): number;
        get size(): number;
        get raw(): number[];
    }
    /**
     * @deprecated
     */
    export class $StringRepresentable$EnumCodec<E extends $Enum<E>> extends $StringRepresentable$StringRepresentableCodec<E> {
        byName(name: string | null): E;
        byName(name: string | null, defaultValue: E): E;
        withLifecycle(arg0: $Lifecycle): $Encoder<E>;
        fieldOf(arg0: string): $MapEncoder<E>;
        constructor(values: E[], resolver: $Function_<string, E>);
    }
    export class $LowerCaseEnumTypeAdapterFactory implements $TypeAdapterFactory {
        create<T>(gson: $Gson, typeToken: $TypeToken<T>): $TypeAdapter<T>;
        constructor();
    }
    export class $SpawnUtil {
        static trySpawnMob<T extends $Mob>(entityType: $EntityType_<T>, spawnType: $MobSpawnType_, level: $ServerLevel, pos: $BlockPos_, attempts: number, spread: number, yOffset: number, strategy: $SpawnUtil$Strategy_): (T) | undefined;
        constructor();
    }
    export class $CubicSampler$Vec3Fetcher {
    }
    export interface $CubicSampler$Vec3Fetcher {
        fetch(x: number, y: number, z: number): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $CubicSampler$Vec3Fetcher}.
     */
    export type $CubicSampler$Vec3Fetcher_ = ((arg0: number, arg1: number, arg2: number) => $Vec3_);
    export class $CryptException extends $Exception {
        constructor(cause: $Throwable);
    }
    export class $ExtraCodecs$1ContextRetrievalCodec extends $MapCodec<E> {
    }
    export class $FastBufferedInputStream extends $InputStream {
        constructor(_in: $InputStream);
        constructor(_in: $InputStream, bufferSize: number);
    }
    export class $ArrayListDeque$ReversedView extends $AbstractList<T> implements $ListAndDeque<T> {
        remove(): T;
        peek(): T;
        element(): T;
        poll(): T;
        push(element: T): void;
        pop(): T;
        offer(element: T): boolean;
        reversed(): $Deque<T>;
    }
    export class $CsvOutput$Builder {
        addColumn(header: string): $CsvOutput$Builder;
        build(output: $Writer): $CsvOutput;
        constructor();
    }
    export class $FileZipper implements $Closeable {
        add(outputFile: $Path_): void;
        add(path: $Path_, filename: string): void;
        add(path: $Path_, filename: $File_): void;
        close(): void;
        constructor(outputFile: $Path_);
    }
    export class $NativeModuleLister {
        static listModules(): $List<$NativeModuleLister$NativeModuleInfo>;
        static addCrashSection(crashSection: $CrashReportCategory): void;
        constructor();
    }
    /**
     * @deprecated
     */
    export class $LazyLoadedValue<T> {
        get(): T;
        constructor(supplier: $Supplier_<T>);
    }
    export class $TimeSource {
    }
    export interface $TimeSource {
        get(unit: $TimeUnit_): number;
    }
    /**
     * Values that may be interpreted as {@link $TimeSource}.
     */
    export type $TimeSource_ = ((arg0: $TimeUnit) => number);
    export class $Graph {
        /**
         * Detects if a cycle is present in the given graph, via a depth first search, and returns `true` if a cycle was found.
         */
        static depthFirstSearch<T>(graph: $Map_<T, $Set_<T>>, nonCyclicalNodes: $Set_<T>, pathSet: $Set_<T>, onNonCyclicalNodeFound: $Consumer_<T>, currentNode: T): boolean;
    }
    export class $ExtraCodecs {
        static converter<T>(ops: $DynamicOps<T>): $Codec<T>;
        static intRange(min: number, max: number): $Codec<number>;
        static idResolverCodec<E>(encoder: $ToIntFunction_<E>, decoder: $IntFunction_<E>, notFoundValue: number): $Codec<E>;
        static orCompressed<E>(first: $Codec_<E>, second: $Codec_<E>): $Codec<E>;
        static orCompressed<E>(first: $MapCodec_<E>, second: $MapCodec_<E>): $MapCodec<E>;
        static intervalCodec<P, I>(codec: $Codec_<P>, minFieldName: string, maxFieldName: string, factory: $BiFunction_<P, P, $DataResult<I>>, minGetter: $Function_<I, P>, maxGetter: $Function_<I, P>): $Codec<I>;
        static orElsePartial<A>(value: A): $Codec$ResultFunction<A>;
        static overrideLifecycle<E>(codec: $Codec_<E>, arg1: $Function_<E, $Lifecycle>, arg2: $Function_<E, $Lifecycle>): $Codec<E>;
        static overrideLifecycle<E>(codec: $Codec_<E>, lifecycleGetter: $Function_<E, $Lifecycle>): $Codec<E>;
        static strictUnboundedMap<K, V>(key: $Codec_<K>, value: $Codec_<V>): $ExtraCodecs$StrictUnboundedMapCodec<K, V>;
        static nonEmptyList<T>(codec: $Codec_<$List_<T>>): $Codec<$List<T>>;
        static nonEmptyHolderSet<T>(codec: $Codec_<$HolderSet_<T>>): $Codec<$HolderSet<T>>;
        static retrieveContext<E>(retriever: $Function_<$DynamicOps<never>, $DataResult<E>>): $MapCodec<E>;
        static ensureHomogenous<E, L extends $Collection<E>, T>(typeGetter: $Function_<E, T>): $Function<L, $DataResult<L>>;
        static catchDecoderException<A>(codec: $Codec_<A>): $Codec<A>;
        static temporalCodec(dateTimeFormatter: $DateTimeFormatter): $Codec<$TemporalAccessor>;
        static asOptionalLong(codec: $MapCodec_<(number) | undefined>): $MapCodec<$OptionalLong>;
        static sizeLimitedMap<K, V>(mapCodec: $Codec_<$Map_<K, V>>, maxSize: number): $Codec<$Map<K, V>>;
        static object2BooleanMap<T>(codec: $Codec_<T>): $Codec<$Object2BooleanMap<T>>;
        /**
         * @deprecated
         */
        static dispatchOptionalValue<K, V>(codec: string, keyGetter: string, codecGetter: $Codec_<K>, arg3: $Function_<V, K>, arg4: $Function_<K, $Codec<V>>): $MapCodec<V>;
        static optionalEmptyMap<A>(codec: $Codec_<A>): $Codec<(A) | undefined>;
        static JAVA: $Codec<$Object>;
        static POSITIVE_FLOAT: $Codec<number>;
        static QUATERNIONF: $Codec<$Quaternionf>;
        static BIT_SET: $Codec<$BitSet>;
        static JSON: $Codec<$JsonElement>;
        static ARGB_COLOR_CODEC: $Codec<number>;
        static UNSIGNED_BYTE: $Codec<number>;
        static PATTERN: $Codec<$Pattern>;
        static TAG_OR_ELEMENT_ID: $Codec<$ExtraCodecs$TagOrElementLocation>;
        static VECTOR4F: $Codec<$Vector4f>;
        static BASE64_STRING: $Codec<number[]>;
        static PLAYER_NAME: $Codec<string>;
        static toOptionalLong: $Function<(number) | undefined, $OptionalLong>;
        static POSITIVE_INT: $Codec<number>;
        static QUATERNIONF_COMPONENTS: $Codec<$Quaternionf>;
        static fromOptionalLong: $Function<$OptionalLong, (number) | undefined>;
        static ESCAPED_STRING: $Codec<string>;
        static AXISANGLE4F: $Codec<$AxisAngle4f>;
        static GAME_PROFILE: $Codec<$GameProfile>;
        static NON_NEGATIVE_INT: $Codec<number>;
        static PROPERTY_MAP: $Codec<$PropertyMap>;
        static VECTOR3F: $Codec<$Vector3f>;
        static INSTANT_ISO8601: $Codec<$Instant>;
        static NON_EMPTY_STRING: $Codec<string>;
        static CODEPOINT: $Codec<number>;
        static RESOURCE_PATH_CODEC: $Codec<string>;
        static MATRIX4F: $Codec<$Matrix4f>;
        constructor();
    }
    export class $Crypt$ByteArrayToKeyFunction<T extends $Key> {
    }
    export interface $Crypt$ByteArrayToKeyFunction<T extends $Key> {
    }
    /**
     * Values that may be interpreted as {@link $Crypt$ByteArrayToKeyFunction}.
     */
    export type $Crypt$ByteArrayToKeyFunction_<T> = (() => void);
    export class $Crypt {
        /**
         * Creates a Cipher instance using the AES/CFB8/NoPadding algorithm. Used for protocol encryption.
         */
        static getCipher(opMode: number, key: $Key): $Cipher;
        /**
         * Generate a new shared secret AES key from a secure random source
         */
        static generateSecretKey(): $SecretKey;
        static rsaPublicKeyToString(key: $PublicKey): string;
        static pemRsaPrivateKeyToString(key: $PrivateKey): string;
        /**
         * Decrypt shared secret AES key using RSA private key
         */
        static decryptByteToSecretKey(key: $PrivateKey, secretKeyEncrypted: number[]): $SecretKey;
        /**
         * Decrypt byte[] data with RSA private key
         */
        static decryptUsingKey(key: $Key, data: number[]): number[];
        /**
         * Decrypt byte[] data with RSA private key
         */
        static encryptUsingKey(key: $Key, data: number[]): number[];
        /**
         * Compute a serverId hash for use by sendSessionRequest()
         */
        static digestData(serverId: string, publicKey: $PublicKey, secretKey: $SecretKey): number[];
        static stringToPemRsaPrivateKey(keyBase64: string): $PrivateKey;
        static stringToRsaPublicKey(keyBase64: string): $PublicKey;
        /**
         * Create a new PublicKey from encoded X.509 data
         */
        static byteToPublicKey(encodedKey: number[]): $PublicKey;
        /**
         * Generates RSA KeyPair
         */
        static generateKeyPair(): $KeyPair;
        static PUBLIC_KEY_CODEC: $Codec<$PublicKey>;
        static PRIVATE_KEY_CODEC: $Codec<$PrivateKey>;
        static SIGNATURE_BYTES: number;
        static SIGNING_ALGORITHM: string;
        static MIME_ENCODER: $Base64$Encoder;
        static MIME_LINE_SEPARATOR: string;
        static RSA_PUBLIC_KEY_HEADER: string;
        constructor();
    }
    export class $LinearCongruentialGenerator {
        static next(left: number, arg1: number): number;
        constructor();
    }
    export class $SingleKeyCache<K, V> {
        getValue(cacheKey: K): V;
        constructor(computeValue: $Function_<K, V>);
    }
    export class $DirectoryLock$LockException extends $IOException {
        static alreadyLocked(path: $Path_): $DirectoryLock$LockException;
    }
    export class $NativeModuleLister$NativeModuleInfo {
        name: string;
        version: ($NativeModuleLister$NativeModuleVersion) | undefined;
        constructor(name: string, version: ($NativeModuleLister$NativeModuleVersion) | undefined);
    }
    export class $SegmentedAnglePrecision {
        isSameAxis(first: number, second: number): boolean;
        fromDegreesWithTurns(degrees: number): number;
        toDegreesWithTurns(degreesWithTurns: number): number;
        fromDirection(direction: $Direction_): number;
        fromDegrees(degrees: number): number;
        toDegrees(degreesWithTurns: number): number;
        normalize(degrees: number): number;
        getMask(): number;
        constructor(precision: number);
        get mask(): number;
    }
    export class $AbortableIterationConsumer$Continuation extends $Enum<$AbortableIterationConsumer$Continuation> {
        shouldAbort(): boolean;
        static values(): $AbortableIterationConsumer$Continuation[];
        static valueOf(arg0: string): $AbortableIterationConsumer$Continuation;
        static CONTINUE: $AbortableIterationConsumer$Continuation;
        static ABORT: $AbortableIterationConsumer$Continuation;
    }
    /**
     * Values that may be interpreted as {@link $AbortableIterationConsumer$Continuation}.
     */
    export type $AbortableIterationConsumer$Continuation_ = "continue" | "abort";
    export class $CubicSpline$Builder<C, I extends $ToFloatFunction<C>> {
        addPoint(location: number, value: $CubicSpline<C, I>): $CubicSpline$Builder<C, I>;
        addPoint(location: number, value: number): $CubicSpline$Builder<C, I>;
        addPoint(location: number, value: number, derivative: number): $CubicSpline$Builder<C, I>;
        build(): $CubicSpline<C, I>;
    }
    export class $FutureChain implements $TaskChainer, $AutoCloseable {
        append<T>(future: $CompletableFuture<T>, consumer: $Consumer_<T>): void;
        close(): void;
        append(task: $Runnable_): void;
        constructor(executor: $Executor_);
    }
    export class $ProgressListener {
    }
    export interface $ProgressListener {
        progressStartNoAbort(stage: $Component_): void;
        progressStage(stage: $Component_): void;
        stop(): void;
        progressStart(stage: $Component_): void;
        /**
         * Updates the progress bar on the loading screen to the specified amount.
         */
        progressStagePercentage(progress: number): void;
    }
    export class $CommonLinks {
        static extendRealms(subscriptionId: string, profileId: $UUID_): string;
        static extendRealms(subscriptionId: string, profileId: $UUID_, isTrial: boolean): string;
        static ACCESSIBILITY_HELP: $URI;
        static ATTRIBUTION: $URI;
        static BUY_REALMS: $URI;
        static EULA: $URI;
        static GENERAL_HELP: $URI;
        static SNAPSHOT_FEEDBACK: $URI;
        static SYMLINK_HELP: $URI;
        static PRIVACY_STATEMENT: $URI;
        static RELEASE_FEEDBACK: $URI;
        static REALMS_CONTENT_CREATION: $URI;
        static SUSPENSION_HELP: $URI;
        static REALMS_TERMS: $URI;
        static BLOCKING_HELP: $URI;
        static LICENSES: $URI;
        static ACCOUNT_SETTINGS: $URI;
        static BUY_MINECRAFT_JAVA: $URI;
        static SNAPSHOT_BUGS_FEEDBACK: $URI;
        static START_REALMS_TRIAL: $URI;
        static GDPR: $URI;
        static REPORTING_HELP: $URI;
        constructor();
    }
    export class $DelegateDataOutput implements $DataOutput {
        write(data: number[], offset: number, length: number): void;
        write(data: number[]): void;
        write(value: number): void;
        writeInt(value: number): void;
        writeUTF(value: string): void;
        writeBytes(value: string): void;
        writeChar(value: number): void;
        writeFloat(value: number): void;
        writeBoolean(value: boolean): void;
        writeByte(value: number): void;
        writeShort(value: number): void;
        writeLong(value: number): void;
        writeDouble(value: number): void;
        writeChars(value: string): void;
        constructor(parent: $DataOutput);
    }
    export class $OptionEnum {
    }
    export interface $OptionEnum {
        getCaption(): $Component;
        getKey(): string;
        getId(): number;
        get caption(): $Component;
        get key(): string;
        get id(): number;
    }
    export class $KeyDispatchDataCodec<A> extends $Record {
        static of<A>(codec: $MapCodec_<A>): $KeyDispatchDataCodec<A>;
        codec(): $MapCodec<A>;
        constructor(arg0: $MapCodec_<A>);
    }
    /**
     * Values that may be interpreted as {@link $KeyDispatchDataCodec}.
     */
    export type $KeyDispatchDataCodec_<A> = { codec?: $MapCodec_<any>,  } | [codec?: $MapCodec_<any>, ];
    export class $SignatureUpdater {
    }
    export interface $SignatureUpdater {
        update(output: $SignatureUpdater$Output_): void;
    }
    /**
     * Values that may be interpreted as {@link $SignatureUpdater}.
     */
    export type $SignatureUpdater_ = ((arg0: $SignatureUpdater$Output) => void);
    export class $ClassInstanceMultiMap<T> extends $AbstractCollection<T> implements $ClassInstanceMultiMapAccessor<any>, $ClassGroupFilterableList<any>, $TypeFilterableListInternalAccess<any> {
        localvar$dei000$lithium$add(arg0: $Object): $Object;
        localvar$dei000$lithium$remove(arg0: $Object): $Object;
        lithium$getAllOfGroupType(arg0: $EntityClassGroup): $Collection<any>;
        lithium$getOrCreateAllOfTypeRaw(arg0: $Class<any>): $List<any>;
        lithium$replaceCollectionAndGet(arg0: $Class<any>, arg1: $Function_<any, any>): $List<any>;
        lithium$replaceCollectionAndGet(arg0: $Class<any>, arg1: $ArrayList<any>): $List<any>;
        find(type: $Class<any>): $Collection<any>;
        getAllInstances(): $List<$Object>;
        constructor(baseClass: $Class<$Object>);
        get allInstances(): $List<$Object>;
    }
    export class $Mth {
        /**
         * @return the maximum of the absolute value of two numbers
         */
        static length(x: number, arg1: number): number;
        /**
         * @return the given value if between the lower and the upper bound. If the value is less than the lower bound, returns the lower bound If the value is greater than the upper bound, returns the upper bound.
         */
        static length(value: number, arg1: number, min: number): number;
        /**
         * @return the unsigned value of an int
         */
        static abs(value: number): number;
        static abs(value: number): number;
        static sin(value: number): number;
        static cos(value: number): number;
        /**
         * @return the maximum of the absolute value of two numbers
         */
        static atan2(x: number, arg1: number): number;
        static sqrt(value: number): number;
        static floor(value: number): number;
        static floor(value: number): number;
        static ceil(value: number): number;
        static ceil(value: number): number;
        /**
         * Parses the string as an integer or returns the second parameter if it fails.
         */
        static getInt(value: string, defaultValue: number): number;
        /**
         * Changes value by stepSize towards the limit and returns the result.
         * If value is smaller than limit, the result will never be bigger than limit.
         * If value is bigger than limit, the result will never be smaller than limit.
         */
        static clamp(value: number, limit: number, stepSize: number): number;
        static clamp(value: number, arg1: number, min: number): number;
        /**
         * @return the given value if between the lower and the upper bound. If the value is less than the lower bound, returns the lower bound If the value is greater than the upper bound, returns the upper bound.
         */
        static clamp(value: number, arg1: number, min: number): number;
        /**
         * @return the given value if between the lower and the upper bound. If the value is less than the lower bound, returns the lower bound If the value is greater than the upper bound, returns the upper bound.
         */
        static clamp(value: number, min: number, max: number): number;
        static map(input: number, arg1: number, inputMin: number, arg3: number, inputMax: number): number;
        static map(delta: number, controlPoint1: number, controlPoint2: number, controlPoint3: number, controlPoint4: number): number;
        static equal(x: number, y: number): boolean;
        static equal(x: number, arg1: number): boolean;
        static sign(value: number): number;
        /**
         * Makes an integer color from the given red, green, and blue float values
         */
        static color(r: number, g: number, b: number): number;
        static nextDouble(random: $RandomSource, minimum: number, arg2: number): number;
        static floorDiv(dividend: number, divisor: number): number;
        static binarySearch(min: number, max: number, isTargetBeforeOrAt: $IntPredicate_): number;
        static nextInt(random: $RandomSource, minimum: number, maximum: number): number;
        static normal(random: $RandomSource, minimum: number, maximum: number): number;
        static square(value: number): number;
        /**
         * @return the unsigned value of an int
         */
        static square(value: number): number;
        static square(value: number): number;
        /**
         * Computes 1/sqrt(n) using the fast inverse square root with a constant of 0x5FE6EB50C7B537AA.
         */
        static square(number: number): number;
        static nextFloat(random: $RandomSource, minimum: number, maximum: number): number;
        /**
         * @deprecated
         */
        static getSeed(pos: $Vec3i): number;
        /**
         * @deprecated
         */
        static getSeed(x: number, y: number, z: number): number;
        /**
         * Is the given value a power of two?  (1, 2, 4, 8, 16, ...)
         */
        static isPowerOfTwo(value: number): boolean;
        /**
         * @return the unsigned value of an int
         */
        static log2(value: number): number;
        /**
         * @return the maximum of the absolute value of two numbers
         */
        static lengthSquared(x: number, arg1: number): number;
        /**
         * @return the given value if between the lower and the upper bound. If the value is less than the lower bound, returns the lower bound If the value is greater than the upper bound, returns the upper bound.
         */
        static lengthSquared(value: number, arg1: number, min: number): number;
        /**
         * Changes value by stepSize towards the limit and returns the result.
         * If value is smaller than limit, the result will never be bigger than limit.
         * If value is bigger than limit, the result will never be smaller than limit.
         */
        static lengthSquared(value: number, limit: number, stepSize: number): number;
        /**
         * Changes value by stepSize towards the limit and returns the result.
         * If value is smaller than limit, the result will never be bigger than limit.
         * If value is bigger than limit, the result will never be smaller than limit.
         */
        static lerp(value: number, limit: number, stepSize: number): number;
        /**
         * @return the given value if between the lower and the upper bound. If the value is less than the lower bound, returns the lower bound If the value is greater than the upper bound, returns the upper bound.
         */
        static lerp(value: number, arg1: number, min: number): number;
        static invSqrt(value: number): number;
        /**
         * Computes 1/sqrt(n) using the fast inverse square root with a constant of 0x5FE6EB50C7B537AA.
         */
        static invSqrt(number: number): number;
        /**
         * @return the unsigned value of an int
         */
        static ceillog2(value: number): number;
        /**
         * @return the unsigned value of an int
         */
        static smallestEncompassingPowerOfTwo(value: number): number;
        static wrapDegrees(value: number): number;
        /**
         * Computes 1/sqrt(n) using the fast inverse square root with a constant of 0x5FE6EB50C7B537AA.
         */
        static wrapDegrees(number: number): number;
        /**
         * @return the unsigned value of an int
         */
        static wrapDegrees(value: number): number;
        /**
         * @return the given value if between the lower and the upper bound. If the value is less than the lower bound, returns the lower bound If the value is greater than the upper bound, returns the upper bound.
         */
        static rotLerp(value: number, arg1: number, min: number): number;
        /**
         * Changes value by stepSize towards the limit and returns the result.
         * If value is smaller than limit, the result will never be bigger than limit.
         * If value is bigger than limit, the result will never be smaller than limit.
         */
        static rotLerp(value: number, limit: number, stepSize: number): number;
        /**
         * Generates a random UUID using the shared random
         */
        static createInsecureUUID(): $UUID;
        static createInsecureUUID(random: $RandomSource): $UUID;
        /**
         * Long version of floor()
         */
        static lfloor(value: number): number;
        /**
         * @return the given value if between the lower and the upper bound. If the value is less than the lower bound, returns the lower bound If the value is greater than the upper bound, returns the upper bound.
         */
        static clampedLerp(value: number, arg1: number, min: number): number;
        /**
         * Changes value by stepSize towards the limit and returns the result.
         * If value is smaller than limit, the result will never be bigger than limit.
         * If value is bigger than limit, the result will never be smaller than limit.
         */
        static clampedLerp(value: number, limit: number, stepSize: number): number;
        /**
         * @return the maximum of the absolute value of two numbers
         */
        static positiveModulo(x: number, arg1: number): number;
        static positiveModulo(dividend: number, divisor: number): number;
        /**
         * @return the difference between two angles in degrees
         */
        static positiveModulo(start: number, end: number): number;
        static isMultipleOf(number: number, multiple: number): boolean;
        /**
         * @return the difference between two angles in degrees
         */
        static degreesDifference(start: number, end: number): number;
        /**
         * @return the difference between two angles in degrees
         */
        static degreesDifferenceAbs(start: number, end: number): number;
        /**
         * Changes value by stepSize towards the limit and returns the result.
         * If value is smaller than limit, the result will never be bigger than limit.
         * If value is bigger than limit, the result will never be smaller than limit.
         */
        static rotateIfNecessary(value: number, limit: number, stepSize: number): number;
        /**
         * Changes value by stepSize towards the limit and returns the result.
         * If value is smaller than limit, the result will never be bigger than limit.
         * If value is bigger than limit, the result will never be smaller than limit.
         */
        static approach(value: number, limit: number, stepSize: number): number;
        /**
         * Changes value by stepSize towards the limit and returns the result.
         * If value is smaller than limit, the result will never be bigger than limit.
         * If value is bigger than limit, the result will never be smaller than limit.
         */
        static approachDegrees(value: number, limit: number, stepSize: number): number;
        /**
         * Computes 1/sqrt(n) using the fast inverse square root with a constant of 0x5FE6EB50C7B537AA.
         */
        static frac(number: number): number;
        static frac(value: number): number;
        /**
         * Changes value by stepSize towards the limit and returns the result.
         * If value is smaller than limit, the result will never be bigger than limit.
         * If value is bigger than limit, the result will never be smaller than limit.
         */
        static inverseLerp(value: number, limit: number, stepSize: number): number;
        /**
         * @return the given value if between the lower and the upper bound. If the value is less than the lower bound, returns the lower bound If the value is greater than the upper bound, returns the upper bound.
         */
        static inverseLerp(value: number, arg1: number, min: number): number;
        static rayIntersectsAABB(start: $Vec3_, end: $Vec3_, boundingBox: $AABB_): boolean;
        /**
         * @deprecated
         * Computes 1/sqrt(n) using the fast inverse square root with a constant of 0x5FE6EB50C7B537AA.
         */
        static fastInvSqrt(number: number): number;
        static fastInvCubeRoot(value: number): number;
        /**
         * Makes an integer color from the given red, green, and blue float values
         */
        static hsvToRgb(r: number, g: number, b: number): number;
        static hsvToArgb(hue: number, saturation: number, value: number, alpha: number): number;
        /**
         * @return the unsigned value of an int
         */
        static murmurHash3Mixer(value: number): number;
        static lerpInt(delta: number, start: number, end: number): number;
        static lerpDiscrete(delta: number, start: number, end: number): number;
        static lerp2(delta1: number, arg1: number, delta2: number, arg3: number, start1: number, arg5: number): number;
        static lerp3(delta1: number, arg1: number, delta2: number, arg3: number, delta3: number, arg5: number, start1: number, arg7: number, end1: number, arg9: number, start2: number): number;
        static catmullrom(delta: number, controlPoint1: number, controlPoint2: number, controlPoint3: number, controlPoint4: number): number;
        /**
         * Computes 1/sqrt(n) using the fast inverse square root with a constant of 0x5FE6EB50C7B537AA.
         */
        static smoothstep(number: number): number;
        /**
         * Computes 1/sqrt(n) using the fast inverse square root with a constant of 0x5FE6EB50C7B537AA.
         */
        static smoothstepDerivative(number: number): number;
        /**
         * @return the difference between two angles in degrees
         */
        static triangleWave(start: number, end: number): number;
        static clampedMap(input: number, arg1: number, inputMin: number, arg3: number, inputMax: number): number;
        static clampedMap(delta: number, controlPoint1: number, controlPoint2: number, controlPoint3: number, controlPoint4: number): number;
        /**
         * Computes 1/sqrt(n) using the fast inverse square root with a constant of 0x5FE6EB50C7B537AA.
         */
        static wobble(number: number): number;
        static roundToward(dividend: number, divisor: number): number;
        static positiveCeilDiv(dividend: number, divisor: number): number;
        static randomBetweenInclusive(random: $RandomSource, minimum: number, maximum: number): number;
        static randomBetween(random: $RandomSource, minimum: number, maximum: number): number;
        /**
         * Gets the value closest to zero that is not closer to zero than the given value and is a multiple of the factor.
         */
        static quantize(value: number, arg1: number): number;
        static outFromOrigin(input: number, lowerBound: number, upperBound: number, steps: number): $IntStream;
        static outFromOrigin(input: number, lowerBound: number, upperBound: number): $IntStream;
        static rotationAroundAxis(axis: $Vector3f, cameraOrentation: $Quaternionf, output: $Quaternionf): $Quaternionf;
        static mulAndTruncate(fraction: $Fraction, factor: number): number;
        /**
         * @return the maximum of the absolute value of two numbers
         */
        static absMax(x: number, arg1: number): number;
        static SQRT_OF_TWO: number;
        static PI: number;
        static SIN: number[];
        static TWO_PI: number;
        static Z_AXIS: $Vector3f;
        static X_AXIS: $Vector3f;
        static HALF_PI: number;
        static DEG_TO_RAD: number;
        static RAD_TO_DEG: number;
        static EPSILON: number;
        static Y_AXIS: $Vector3f;
        constructor();
    }
    export class $HttpUtil$DownloadProgressListener {
    }
    export interface $HttpUtil$DownloadProgressListener {
        requestStart(): void;
        downloadStart(totalSize: $OptionalLong): void;
        downloadedBytes(progress: number): void;
        requestFinished(success: boolean): void;
    }
    export class $CubicSpline$Constant<C, I extends $ToFloatFunction<C>> extends $Record implements $CubicSpline<C, I> {
        mapAll(arg0: $CubicSpline$CoordinateVisitor_<I>): $CubicSpline<C, I>;
        parityString(): string;
        value(): number;
        apply(arg0: C): number;
        maxValue(): number;
        minValue(): number;
        comap<C2>(arg0: $Function_<C2, C>): $ToFloatFunction<C2>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $CubicSpline$Constant}.
     */
    export type $CubicSpline$Constant_<C, I> = { value?: number,  } | [value?: number, ];
    export class $NullOps$NullMapBuilder extends $RecordBuilder$AbstractUniversalBuilder<$Unit, $Unit> {
    }
    export class $CrudeIncrementalIntIdentityHashBiMap<K> implements $IdMap<K> {
        size(): number;
        clear(): void;
        /**
         * Adds the given object while expanding this map
         */
        add(object: K): number;
        iterator(): $Iterator<K>;
        contains(value: K): boolean;
        contains(value: number): boolean;
        /**
         * Adds the given object while expanding this map
         */
        getId(object: K | null): number;
        copy(): $CrudeIncrementalIntIdentityHashBiMap<K>;
        static create<A>(size: number): $CrudeIncrementalIntIdentityHashBiMap<A>;
        /**
         * Puts the provided object value with the integer key.
         */
        addMapping(object: K, intKey: number): void;
        byId(value: number): K;
        byIdOrThrow(value: number): K;
        /**
         * Adds the given object while expanding this map
         */
        getIdOrThrow(object: K): number;
        spliterator(): $Spliterator<K>;
        forEach(arg0: $Consumer_<K>): void;
        [Symbol.iterator](): Iterator<K>
    }
    export class $ModCheck extends $Record {
        merge(other: $ModCheck_): $ModCheck;
        description(): string;
        shouldReportAsModified(): boolean;
        static identify(vanillaBrandName: string, brandNameGetter: $Supplier_<string>, side: string, signingClass: $Class<never>): $ModCheck;
        fullDescription(): string;
        confidence(): $ModCheck$Confidence;
        constructor(arg0: $ModCheck$Confidence_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $ModCheck}.
     */
    export type $ModCheck_ = { description?: string, confidence?: $ModCheck$Confidence_,  } | [description?: string, confidence?: $ModCheck$Confidence_, ];
    export class $SignatureUpdater$Output {
    }
    export interface $SignatureUpdater$Output {
        update(bodyDigest: number[]): void;
    }
    /**
     * Values that may be interpreted as {@link $SignatureUpdater$Output}.
     */
    export type $SignatureUpdater$Output_ = ((arg0: number[]) => void);
    export class $FastColor {
        static as8BitChannel(value: number): number;
        constructor();
    }
    export class $FastColor$ARGB32 {
        static average(color1: number, color2: number): number;
        static color(alpha: number, red: number, green: number, blue: number): number;
        static color(color1: number, color2: number): number;
        static color(red: number, green: number, blue: number): number;
        static multiply(color1: number, color2: number): number;
        static red(packedColor: number): number;
        static blue(packedColor: number): number;
        static green(packedColor: number): number;
        static alpha(packedColor: number): number;
        static opaque(packedColor: number): number;
        static colorFromFloat(alpha: number, red: number, green: number, blue: number): number;
        static lerp(delta: number, min: number, max: number): number;
        constructor();
    }
    export class $ExtraCodecs$TagOrElementLocation extends $Record {
        id(): $ResourceLocation;
        tag(): boolean;
        decoratedId(): string;
        constructor(arg0: $ResourceLocation_, arg1: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ExtraCodecs$TagOrElementLocation}.
     */
    export type $ExtraCodecs$TagOrElementLocation_ = { id?: $ResourceLocation_, tag?: boolean,  } | [id?: $ResourceLocation_, tag?: boolean, ];
    export class $PngInfo extends $Record {
        static validateHeader(buffer: $ByteBuffer): void;
        width(): number;
        static fromStream(stream: $InputStream): $PngInfo;
        height(): number;
        static fromBytes(bytes: number[]): $PngInfo;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $PngInfo}.
     */
    export type $PngInfo_ = { height?: number, width?: number,  } | [height?: number, width?: number, ];
    export class $FormattedCharSink {
    }
    export interface $FormattedCharSink {
        /**
         * Accepts a single code point from a `FormattedCharSequence`.
         * @return `true` to accept more characters, `false` to stop traversing the sequence.
         */
        accept(positionInCurrentSequence: number, style: $Style, codePoint: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FormattedCharSink}.
     */
    export type $FormattedCharSink_ = ((arg0: number, arg1: $Style, arg2: number) => boolean);
    export class $NullOps implements $DynamicOps<$Unit> {
        getStringValue(input: $Unit_): $DataResult<string>;
        getStream(input: $Unit_): $DataResult<$Stream<$Unit>>;
        remove(input: $Unit_, key: string): $Unit;
        empty(): $Unit;
        getByteBuffer(input: $Unit_): $DataResult<$ByteBuffer>;
        getMap(input: $Unit_): $DataResult<$MapLike<$Unit>>;
        createMap(input: $Stream<$Pair<$Unit_, $Unit_>>): $Unit;
        createString(value: string): $Unit;
        getList(input: $Unit_): $DataResult<$Consumer<$Consumer<$Unit>>>;
        createFloat(value: number): $Unit;
        getBooleanValue(input: $Unit_): $DataResult<boolean>;
        mapBuilder(): $RecordBuilder<$Unit>;
        getNumberValue(input: $Unit_): $DataResult<$Number>;
        createBoolean(value: boolean): $Unit;
        getIntStream(input: $Unit_): $DataResult<$IntStream>;
        createIntList(input: $IntStream): $Unit;
        mergeToList(list: $Unit_, values: $List_<$Unit_>): $DataResult<$Unit>;
        mergeToList(list: $Unit_, value: $Unit_): $DataResult<$Unit>;
        mergeToMap(map: $Unit_, key: $Unit_, value: $Unit_): $DataResult<$Unit>;
        mergeToMap(map: $Unit_, values: $Map_<$Unit_, $Unit_>): $DataResult<$Unit>;
        mergeToMap(map: $Unit_, values: $MapLike<$Unit_>): $DataResult<$Unit>;
        getLongStream(input: $Unit_): $DataResult<$LongStream>;
        createNumeric(value: $Number): $Unit;
        getMapValues(input: $Unit_): $DataResult<$Stream<$Pair<$Unit, $Unit>>>;
        convertTo<U>(ops: $DynamicOps<U>, unit: $Unit_): U;
        getMapEntries(input: $Unit_): $DataResult<$Consumer<$BiConsumer<$Unit, $Unit>>>;
        get(arg0: $Unit_, arg1: string): $DataResult<$Unit>;
        update(arg0: $Unit_, arg1: string, arg2: $Function_<$Unit, $Unit>): $Unit;
        set(arg0: $Unit_, arg1: string, arg2: $Unit_): $Unit;
        mergeToPrimitive(arg0: $Unit_, arg1: $Unit_): $DataResult<$Unit>;
        compressMaps(): boolean;
        getNumberValue(arg0: $Unit_, arg1: $Number): $Number;
        listBuilder(): $ListBuilder<$Unit>;
        getGeneric(arg0: $Unit_, arg1: $Unit_): $DataResult<$Unit>;
        updateGeneric(arg0: $Unit_, arg1: $Unit_, arg2: $Function_<$Unit, $Unit>): $Unit;
        withEncoder<E>(arg0: $Encoder_<E>): $Function<E, $DataResult<$Unit>>;
        withDecoder<E>(arg0: $Decoder_<E>): $Function<$Unit, $DataResult<$Pair<E, $Unit>>>;
        withParser<E>(arg0: $Decoder_<E>): $Function<$Unit, $DataResult<E>>;
        convertList<U>(arg0: $DynamicOps<U>, arg1: $Unit_): U;
        convertMap<U>(arg0: $DynamicOps<U>, arg1: $Unit_): U;
        emptyList(): $Unit;
        emptyMap(): $Unit;
        createLong(arg0: number): $Unit;
        createList(arg0: $Stream<$Unit_>): $Unit;
        createDouble(arg0: number): $Unit;
        createByte(arg0: number): $Unit;
        createShort(arg0: number): $Unit;
        createByteList(arg0: $ByteBuffer): $Unit;
        createInt(arg0: number): $Unit;
        createLongList(arg0: $LongStream): $Unit;
        static INSTANCE: $NullOps;
    }
    export class $Unit extends $Enum<$Unit> {
        static values(): $Unit[];
        static valueOf(arg0: string): $Unit;
        static CODEC: $Codec<$Unit>;
        static INSTANCE: $Unit;
    }
    /**
     * Values that may be interpreted as {@link $Unit}.
     */
    export type $Unit_ = "instance" | any;
    export class $MemoryReserve {
        static release(): void;
        static allocate(): void;
        constructor();
    }
    export class $EncoderCache$Key<A, T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $EncoderCache$Key}.
     */
    export type $EncoderCache$Key_<A, T> = { value?: any, codec?: $Codec_<any>, ops?: $DynamicOps<any>,  } | [value?: any, codec?: $Codec_<any>, ops?: $DynamicOps<any>, ];
    export class $CubicSpline$CoordinateVisitor<I> {
    }
    export interface $CubicSpline$CoordinateVisitor<I> {
        visit(coordinate: I): I;
    }
    /**
     * Values that may be interpreted as {@link $CubicSpline$CoordinateVisitor}.
     */
    export type $CubicSpline$CoordinateVisitor_<I> = ((arg0: I) => I);
    export class $NativeModuleLister$NativeModuleVersion {
        description: string;
        company: string;
        version: string;
        constructor(description: string, version: string, company: string);
    }
    export class $GsonHelper {
        static parse(reader: $Reader, lenient: boolean): $JsonObject;
        static parse(json: string, lenient: boolean): $JsonObject;
        static parse(reader: $Reader): $JsonObject;
        static parse(json: string): $JsonObject;
        /**
         * Gets a human-readable description of the given JsonElement's type.  For example: "a number (4)"
         */
        static getType(json: $JsonElement_ | null): string;
        static getAsDouble(json: $JsonObject_, memberName: string, fallback: number): number;
        static getAsDouble(json: $JsonObject_, memberName: string): number;
        /**
         * Gets the integer value of the field on the JsonObject with the given name.
         */
        static getAsInt(json: $JsonObject_, memberName: string): number;
        /**
         * Gets the integer value of the field on the JsonObject with the given name, or the given default value if the field is missing.
         */
        static getAsInt(json: $JsonObject_, memberName: string, fallback: number): number;
        /**
         * Gets a long from a JSON element, throws an error if the member does not exist.
         */
        static getAsLong(json: $JsonObject_, memberName: string): number;
        static getAsLong(json: $JsonObject_, memberName: string, fallback: number): number;
        /**
         * Gets the boolean value of the field on the JsonObject with the given name.
         */
        static getAsBoolean(json: $JsonObject_, memberName: string): boolean;
        /**
         * Gets the boolean value of the field on the JsonObject with the given name, or the given default value if the field is missing.
         */
        static getAsBoolean(json: $JsonObject_, memberName: string, fallback: boolean): boolean;
        static parseArray(string: string): $JsonArray;
        static parseArray(reader: $Reader): $JsonArray;
        static fromJson<T>(gson: $Gson, reader: $Reader, jsonClass: $Class<T>): T;
        static fromJson<T>(gson: $Gson, reader: $Reader, adapter: $Class<T>, lenient: boolean): T;
        static fromJson<T>(gson: $Gson, json: string, adapter: $Class<T>): T;
        static fromJson<T>(gson: $Gson, reader: $Reader, type: $TypeToken<T>): T;
        static fromJson<T>(gson: $Gson, reader: $Reader, type: $TypeToken<T>, lenient: boolean): T;
        static fromJson<T>(gson: $Gson, json: string, adapter: $Class<T>, lenient: boolean): T;
        static getAsBigDecimal(json: $JsonObject_, memberName: string): $BigDecimal;
        static getAsBigDecimal(json: $JsonObject_, memberName: string, fallback: $BigDecimal): $BigDecimal;
        static getAsBigInteger(json: $JsonObject_, memberName: string, fallback: $BigInteger): $BigInteger;
        static getAsBigInteger(json: $JsonObject_, memberName: string): $BigInteger;
        /**
         * Gets the JsonArray field on the JsonObject with the given name.
         */
        static getAsJsonArray(json: $JsonObject_, memberName: string): $JsonArray;
        /**
         * Gets the JsonArray field on the JsonObject with the given name, or the given default value if the field is missing.
         */
        static getAsJsonArray(json: $JsonObject_, memberName: string, fallback: $JsonArray_ | null): $JsonArray;
        /**
         * Gets the JsonObject field on the JsonObject with the given name, or the given default value if the field is missing.
         */
        static getAsJsonObject(json: $JsonObject_, memberName: string, fallback: $JsonObject_ | null): $JsonObject;
        static getAsJsonObject(json: $JsonObject_, memberName: string): $JsonObject;
        /**
         * Gets the string value of the field on the JsonObject with the given name, or the given default value if the field is missing.
         */
        static getAsString(json: $JsonObject_, memberName: string, fallback: string | null): string;
        /**
         * Gets the string value of the field on the JsonObject with the given name.
         */
        static getAsString(json: $JsonObject_, memberName: string): string;
        static writeValue(writer: $JsonWriter, jsonElement: $JsonElement_ | null, sorter: $Comparator<string> | null): void;
        /**
         * Gets the float value of the field on the JsonObject with the given name, or the given default value if the field is missing.
         */
        static getAsFloat(json: $JsonObject_, memberName: string, fallback: number): number;
        /**
         * Gets the float value of the field on the JsonObject with the given name.
         */
        static getAsFloat(json: $JsonObject_, memberName: string): number;
        static getAsByte(json: $JsonObject_, memberName: string): number;
        static getAsByte(json: $JsonObject_, memberName: string, fallback: number): number;
        static getAsCharacter(json: $JsonObject_, memberName: string): string;
        static getAsCharacter(json: $JsonObject_, memberName: string, fallback: string): string;
        static getAsShort(json: $JsonObject_, memberName: string, fallback: number): number;
        static getAsShort(json: $JsonObject_, memberName: string): number;
        /**
         * Gets a human-readable description of the given JsonElement's type.  For example: "a number (4)"
         */
        static toStableString(json: $JsonElement_): string;
        /**
         * Gets the string value of the given JsonElement.  Expects the second parameter to be the name of the element's field if an error message needs to be thrown.
         */
        static convertToString(json: $JsonElement_, memberName: string): string;
        /**
         * Gets the boolean value of the given JsonElement.  Expects the second parameter to be the name of the element's field if an error message needs to be thrown.
         */
        static convertToBoolean(json: $JsonElement_, memberName: string): boolean;
        static convertToDouble(json: $JsonElement_, memberName: string): number;
        /**
         * Gets the float value of the given JsonElement.  Expects the second parameter to be the name of the element's field if an error message needs to be thrown.
         */
        static convertToFloat(json: $JsonElement_, memberName: string): number;
        /**
         * Gets a long from a JSON element and validates that the value is actually a number.
         */
        static convertToLong(json: $JsonElement_, memberName: string): number;
        /**
         * Gets the integer value of the given JsonElement.  Expects the second parameter to be the name of the element's field if an error message needs to be thrown.
         */
        static convertToInt(json: $JsonElement_, memberName: string): number;
        static convertToByte(json: $JsonElement_, memberName: string): number;
        static convertToCharacter(json: $JsonElement_, memberName: string): string;
        static convertToBigDecimal(json: $JsonElement_, memberName: string): $BigDecimal;
        static convertToBigInteger(json: $JsonElement_, memberName: string): $BigInteger;
        static convertToShort(json: $JsonElement_, memberName: string): number;
        /**
         * Gets the given JsonElement as a JsonObject.  Expects the second parameter to be the name of the element's field if an error message needs to be thrown.
         */
        static convertToJsonObject(json: $JsonElement_, memberName: string): $JsonObject;
        /**
         * Gets the given JsonElement as a JsonArray.  Expects the second parameter to be the name of the element's field if an error message needs to be thrown.
         */
        static convertToJsonArray(json: $JsonElement_, memberName: string): $JsonArray;
        static convertToObject<T>(json: $JsonElement_ | null, memberName: string, context: $JsonDeserializationContext_, adapter: $Class<T>): T;
        static getAsObject<T>(json: $JsonObject_, memberName: string, fallback: T | null, context: $JsonDeserializationContext_, adapter: $Class<T>): T;
        static getAsObject<T>(json: $JsonObject_, memberName: string, context: $JsonDeserializationContext_, adapter: $Class<T>): T;
        static isBooleanValue(json: $JsonElement_): boolean;
        /**
         * Gets the boolean value of the field on the JsonObject with the given name.
         */
        static isBooleanValue(json: $JsonObject_, memberName: string): boolean;
        /**
         * Gets the boolean value of the field on the JsonObject with the given name.
         */
        static isArrayNode(json: $JsonObject_, memberName: string): boolean;
        /**
         * Gets the boolean value of the field on the JsonObject with the given name.
         */
        static isValidNode(json: $JsonObject_ | null, memberName: string): boolean;
        /**
         * Gets the boolean value of the field on the JsonObject with the given name.
         */
        static isObjectNode(json: $JsonObject_, memberName: string): boolean;
        static getNonNull(json: $JsonObject_, memberName: string): $JsonElement;
        static convertToItem(json: $JsonElement_, memberName: string): $Holder<$Item>;
        static getAsItem(json: $JsonObject_, memberName: string): $Holder<$Item>;
        static getAsItem(json: $JsonObject_, memberName: string, fallback: $Holder_<$Item> | null): $Holder<$Item>;
        /**
         * Gets the boolean value of the field on the JsonObject with the given name.
         */
        static isStringValue(json: $JsonObject_, memberName: string): boolean;
        static isStringValue(json: $JsonElement_): boolean;
        /**
         * Gets the boolean value of the field on the JsonObject with the given name.
         */
        static isValidPrimitive(json: $JsonObject_, memberName: string): boolean;
        /**
         * Gets the boolean value of the field on the JsonObject with the given name.
         */
        static isNumberValue(json: $JsonObject_, memberName: string): boolean;
        static isNumberValue(json: $JsonElement_): boolean;
        static fromNullableJson<T>(gson: $Gson, json: string, type: $TypeToken<T>, lenient: boolean): T;
        static fromNullableJson<T>(gson: $Gson, json: string, type: $TypeToken<T>): T;
        static fromNullableJson<T>(gson: $Gson, json: string, adapter: $Class<T>, lenient: boolean): T;
        static fromNullableJson<T>(gson: $Gson, reader: $Reader, adapter: $Class<T>, lenient: boolean): T;
        static fromNullableJson<T>(gson: $Gson, reader: $Reader, type: $TypeToken<T>, lenient: boolean): T;
        constructor();
    }
    export class $SignatureValidator {
        static from(serviceKeySet: $ServicesKeySet_, serviceKeyType: $ServicesKeyType_): $SignatureValidator;
        static from(publicKey: $PublicKey, algorithm: string): $SignatureValidator;
        static NO_VALIDATION: $SignatureValidator;
        static LOGGER: $Logger;
    }
    export interface $SignatureValidator {
        validate(updater: $SignatureUpdater_, signature: number[]): boolean;
        validate(digest: number[], signature: number[]): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SignatureValidator}.
     */
    export type $SignatureValidator_ = ((arg0: $SignatureUpdater, arg1: number[]) => boolean);
    export class $SimpleBitStorage$InitializationException extends $RuntimeException {
    }
    export class $CommonColors {
        static RED: number;
        static SOFT_RED: number;
        static SOFT_YELLOW: number;
        static WHITE: number;
        static GRAY: number;
        static LIGHT_GRAY: number;
        static LIGHTER_GRAY: number;
        static BLUE: number;
        static BLACK: number;
        static YELLOW: number;
        static GREEN: number;
        constructor();
    }
    export class $DebugBuffer<T> {
        dump(): $List<T>;
        push(value: T): void;
        constructor(length: number);
    }
    export class $CsvOutput {
        writeRow(...data: $Object[]): void;
        static builder(): $CsvOutput$Builder;
    }
    export class $ProblemReporter$Collector implements $ProblemReporter {
        forChild(name: string): $ProblemReporter;
        report(message: string): void;
        get(): $Multimap<string, string>;
        getReport(): (string) | undefined;
        constructor();
    }
    export class $Signer {
        static from(privateKey: $PrivateKey, algorithm: string): $Signer;
        static LOGGER: $Logger;
    }
    export interface $Signer {
        sign(signature: number[]): number[];
        sign(updater: $SignatureUpdater_): number[];
    }
    /**
     * Values that may be interpreted as {@link $Signer}.
     */
    export type $Signer_ = ((arg0: $SignatureUpdater) => number[]);
    export class $SortedArraySet$ArrayIterator implements $Iterator<T> {
        remove(): void;
        forEachRemaining(arg0: $Consumer_<T>): void;
    }
    export class $ParticleUtils {
        static spawnParticleOnFace(level: $Level_, pos: $BlockPos_, direction: $Direction_, particle: $ParticleOptions_, speed: $Vec3_, spread: number): void;
        static spawnParticles(level: $LevelAccessor, pos: $BlockPos_, count: number, xzSpread: number, arg4: number, ySpread: boolean, arg6: $ParticleOptions_): void;
        static spawnParticleInBlock(level: $LevelAccessor, pos: $BlockPos_, count: number, particle: $ParticleOptions_): void;
        static spawnParticleBelow(level: $Level_, pos: $BlockPos_, random: $RandomSource, particle: $ParticleOptions_): void;
        static spawnParticlesAlongAxis(axis: $Direction$Axis_, level: $Level_, pos: $BlockPos_, spread: number, arg4: $ParticleOptions_, particle: $UniformInt): void;
        static spawnSmashAttackParticles(level: $LevelAccessor, pos: $BlockPos_, power: number): void;
        static spawnParticlesOnBlockFaces(level: $Level_, pos: $BlockPos_, particle: $ParticleOptions_, count: $IntProvider_): void;
        static spawnParticlesOnBlockFace(level: $Level_, pos: $BlockPos_, particle: $ParticleOptions_, count: $IntProvider_, direction: $Direction_, speedSupplier: $Supplier_<$Vec3>, spread: number): void;
        constructor();
    }
    export class $TimeUtil {
        static rangeOfSeconds(minInclusive: number, maxInclusive: number): $UniformInt;
        static SECONDS_PER_HOUR: number;
        static SECONDS_PER_MINUTE: number;
        static NANOSECONDS_PER_SECOND: number;
        static MILLISECONDS_PER_SECOND: number;
        static NANOSECONDS_PER_MILLISECOND: number;
        constructor();
    }
    /**
     * A basic interface for random number generation. This mirrors the same methods in `Random`, however it does not make any guarantee that these are thread-safe, unlike `Random`.
     * The notable difference is that `#setSeed(long)` is not `synchronized` and should not be accessed from multiple threads.
     * The documentation for each individual method can be assumed to be otherwise the same as the identically named method in `Random`.
     * @see java.util.Random
     * @see net.minecraft.world.level.levelgen.SimpleRandomSource
     */
    export class $RandomSource {
        static create(seed: number): $RandomSource;
        static create(): $RandomSource;
        /**
         * @deprecated
         */
        static createThreadSafe(): $RandomSource;
        static createNewThreadLocalInstance(): $RandomSource;
        /**
         * @deprecated
         */
        static GAUSSIAN_SPREAD_FACTOR: number;
    }
    export interface $RandomSource {
        nextDouble(): number;
        nextInt(bound: number): number;
        nextInt(): number;
        nextInt(origin: number, bound: number): number;
        setSeed(seed: number): void;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextGaussian(): number;
        fork(): $RandomSource;
        triangle(min: number, arg1: number): number;
        nextIntBetweenInclusive(origin: number, bound: number): number;
        forkPositional(): $PositionalRandomFactory;
        consumeCount(count: number): void;
        set seed(value: number);
    }
    export class $ExtraCodecs$StrictUnboundedMapCodec<K, V> extends $Record implements $Codec<$Map<K, V>>, $BaseMapCodec<K, V> {
        decode<T>(ops: $DynamicOps<T>, input: $MapLike<T>): $DataResult<$Map<K, V>>;
        decode<T>(ops: $DynamicOps<T>, input: T): $DataResult<$Pair<$Map<K, V>, T>>;
        encode<T>(input: $Map_<K, V>, ops: $DynamicOps<T>, value: T): $DataResult<T>;
        elementCodec(): $Codec<V>;
        keyCodec(): $Codec<K>;
        dispatch<E>(arg0: string, arg1: $Function_<E, $Map<K, V>>, arg2: $Function_<$Map<K, V>, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: $Function_<E, $Map<K, V>>, arg1: $Function_<$Map<K, V>, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<$Map<K, V>, $DataResult<$Map<K, V>>>): $Codec<$Map<K, V>>;
        orElse(arg0: $UnaryOperator_<string>, arg1: $Map_<K, V>): $Codec<$Map<K, V>>;
        orElse(arg0: $Map_<K, V>): $Codec<$Map<K, V>>;
        orElse(arg0: $Consumer_<string>, arg1: $Map_<K, V>): $Codec<$Map<K, V>>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<$Map<K, V>>): $Codec<$Map<K, V>>;
        orElseGet(arg0: $Supplier_<$Map<K, V>>): $Codec<$Map<K, V>>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<$Map<K, V>>): $Codec<$Map<K, V>>;
        deprecated(arg0: number): $Codec<$Map<K, V>>;
        stable(): $Codec<$Map<K, V>>;
        listOf(arg0: number, arg1: number): $Codec<$List<$Map<K, V>>>;
        listOf(): $Codec<$List<$Map<K, V>>>;
        flatXmap<S>(arg0: $Function_<$Map<K, V>, $DataResult<S>>, arg1: $Function_<S, $DataResult<$Map<K, V>>>): $Codec<S>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Map_<K, V>, arg3: $Lifecycle): $MapCodec<$Map<K, V>>;
        optionalFieldOf(arg0: string, arg1: $Map_<K, V>, arg2: $Lifecycle): $MapCodec<$Map<K, V>>;
        optionalFieldOf(arg0: string, arg1: $Map_<K, V>): $MapCodec<$Map<K, V>>;
        optionalFieldOf(arg0: string): $MapCodec<($Map<K, V>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Map_<K, V>, arg3: $Lifecycle): $MapCodec<$Map<K, V>>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<($Map<K, V>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Map_<K, V>): $MapCodec<$Map<K, V>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Map_<K, V>, arg2: $Lifecycle): $MapCodec<$Map<K, V>>;
        mapResult(arg0: $Codec$ResultFunction<$Map_<K, V>>): $Codec<$Map<K, V>>;
        promotePartial(arg0: $Consumer_<string>): $Codec<$Map<K, V>>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<$Map<K, V>>>, arg2: $Function_<$Map<K, V>, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, $Map<K, V>>, arg2: $Function_<$Map<K, V>, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, $Map<K, V>>, arg1: $Function_<$Map<K, V>, $MapCodec<E>>): $MapCodec<E>;
        xmap<S>(arg0: $Function_<$Map<K, V>, S>, arg1: $Function_<S, $Map<K, V>>): $Codec<S>;
        sizeLimitedListOf(arg0: number): $Codec<$List<$Map<K, V>>>;
        comapFlatMap<S>(arg0: $Function_<$Map<K, V>, $DataResult<S>>, arg1: $Function_<S, $Map<K, V>>): $Codec<S>;
        flatComapMap<S>(arg0: $Function_<$Map<K, V>, S>, arg1: $Function_<S, $DataResult<$Map<K, V>>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, $Map<K, V>>, arg1: $Function_<$Map<K, V>, $MapCodec<E>>): $Codec<E>;
        encode<T>(arg0: $Map_<K, V>, arg1: $DynamicOps<T>, arg2: $RecordBuilder<T>): $RecordBuilder<T>;
        comap<B>(arg0: $Function_<B, $Map<K, V>>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<$Map<K, V>>>): $Encoder<B>;
        encodeStart<T>(ops: $DynamicOps<T>, input: $Map_<K, V>): $DataResult<T>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<$Map<K, V>, T>>;
        map<B>(arg0: $Function_<$Map<K, V>, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<$Map<K, V>, $DataResult<B>>): $Decoder<B>;
        parse<T>(ops: $DynamicOps<T>, input: T): $DataResult<$Map<K, V>>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<$Map<K, V>>;
        boxed(): $Decoder$Boxed<$Map<K, V>>;
        terminal(): $Decoder$Terminal<$Map<K, V>>;
        simple(): $Decoder$Simple<$Map<K, V>>;
        withLifecycle(arg0: $Lifecycle): $Encoder<$Map<K, V>>;
        fieldOf(arg0: string): $MapEncoder<$Map<K, V>>;
        constructor(arg0: $Codec_<K>, arg1: $Codec_<V>);
    }
    /**
     * Values that may be interpreted as {@link $ExtraCodecs$StrictUnboundedMapCodec}.
     */
    export type $ExtraCodecs$StrictUnboundedMapCodec_<K, V> = { keyCodec?: $Codec_<any>, elementCodec?: $Codec_<any>,  } | [keyCodec?: $Codec_<any>, elementCodec?: $Codec_<any>, ];
    export class $ArrayListDeque<T> extends $AbstractList<T> implements $ListAndDeque<T> {
        capacity(): number;
        reversed(): $ListAndDeque<T>;
        pollFirst(): T;
        pollLast(): T;
        offerLast(element: T): boolean;
        peekFirst(): T;
        removeFirstOccurrence(element: $Object): boolean;
        offerFirst(element: T): boolean;
        peekLast(): T;
        removeLastOccurrence(element: $Object): boolean;
        descendingIterator(): $Iterator<T>;
        remove(): T;
        peek(): T;
        element(): T;
        poll(): T;
        push(element: T): void;
        pop(): T;
        offer(element: T): boolean;
        constructor();
        constructor(size: number);
    }
    export class $BitStorage {
    }
    export interface $BitStorage {
        getBits(): number;
        /**
         * Gets the entry at the given index
         */
        get(index: number): number;
        /**
         * Sets the entry at the given location to the given value
         */
        set(index: number, value: number): void;
        copy(): $BitStorage;
        getSize(): number;
        getAndSet(index: number, value: number): number;
        getAll(consumer: $IntConsumer_): void;
        unpack(array: number[]): void;
        /**
         * Gets the long array that is used to store the data in this BitArray. This is useful for sending packet data.
         */
        getRaw(): number[];
        get bits(): number;
        get size(): number;
        get raw(): number[];
    }
    export class $Crypt$SaltSupplier {
        static getLong(): number;
        constructor();
        static get long(): number;
    }
    export class $CubicSpline$1Point<C, I extends $ToFloatFunction<C>> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CubicSpline$1Point}.
     */
    export type $CubicSpline$1Point_<C, I> = { location?: number, value?: $CubicSpline<any, $ToFloatFunction<C>>, derivative?: number,  } | [location?: number, value?: $CubicSpline<any, $ToFloatFunction<C>>, derivative?: number, ];
    export class $AbortableIterationConsumer<T> {
        static forConsumer<T>(consumer: $Consumer_<T>): $AbortableIterationConsumer<T>;
    }
    export interface $AbortableIterationConsumer<T> {
        accept(value: T): $AbortableIterationConsumer$Continuation;
    }
    /**
     * Values that may be interpreted as {@link $AbortableIterationConsumer}.
     */
    export type $AbortableIterationConsumer_<T> = ((arg0: T) => $AbortableIterationConsumer$Continuation_);
    export class $DirectoryLock implements $AutoCloseable {
        close(): void;
        static create(path: $Path_): $DirectoryLock;
        static isLocked(path: $Path_): boolean;
        isValid(): boolean;
        static LOCK_FILE: string;
        get valid(): boolean;
    }
    export class $CubicSpline$Multipoint<C, I extends $ToFloatFunction<C>> extends $Record implements $CubicSpline<C, I> {
        mapAll(visitor: $CubicSpline$CoordinateVisitor_<I>): $CubicSpline<C, I>;
        parityString(): string;
        derivatives(): number[];
        values(): $List<$CubicSpline<C, I>>;
        apply(object: $Object): number;
        locations(): number[];
        maxValue(): number;
        minValue(): number;
        coordinate(): I;
        comap<C2>(converter: $Function_<C2, C>): $ToFloatFunction<C2>;
        constructor(coordinate: I, locations: number[], values: $List_<$CubicSpline<C, I>>, derivatives: number[], minValue: number, maxValue: number);
    }
    /**
     * Values that may be interpreted as {@link $CubicSpline$Multipoint}.
     */
    export type $CubicSpline$Multipoint_<C, I> = { derivatives?: number[], values?: $List_<$CubicSpline<any, $ToFloatFunction<C>>>, coordinate?: $ToFloatFunction<C>, minValue?: number, locations?: number[], maxValue?: number,  } | [derivatives?: number[], values?: $List_<$CubicSpline<any, $ToFloatFunction<C>>>, coordinate?: $ToFloatFunction<C>, minValue?: number, locations?: number[], maxValue?: number, ];
    export class $Brightness extends $Record {
        block(): number;
        static unpack(packedBrightness: number): $Brightness;
        pack(): number;
        sky(): number;
        static FULL_BRIGHT: $Brightness;
        static CODEC: $Codec<$Brightness>;
        static LIGHT_VALUE_CODEC: $Codec<number>;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Brightness}.
     */
    export type $Brightness_ = { block?: number, sky?: number,  } | [block?: number, sky?: number, ];
    export class $ModCheck$Confidence extends $Enum<$ModCheck$Confidence> {
        static values(): $ModCheck$Confidence[];
        static valueOf(arg0: string): $ModCheck$Confidence;
        static VERY_LIKELY: $ModCheck$Confidence;
        static PROBABLY_NOT: $ModCheck$Confidence;
        static DEFINITELY: $ModCheck$Confidence;
    }
    /**
     * Values that may be interpreted as {@link $ModCheck$Confidence}.
     */
    export type $ModCheck$Confidence_ = "probably_not" | "very_likely" | "definitely";
    export class $DependencySorter$Entry<K> {
    }
    export interface $DependencySorter$Entry<K> {
        visitRequiredDependencies(visitor: $Consumer_<K>): void;
        visitOptionalDependencies(visitor: $Consumer_<K>): void;
    }
    export class $HttpUtil {
        static isPortAvailable(port: number): boolean;
        static getAvailablePort(): number;
        static downloadFile(saveFile: $Path_, url: $URL, requestProperties: $Map_<string, string>, hashFunction: $HashFunction, hash: $HashCode | null, maxSize: number, proxy: $Proxy, progressListener: $HttpUtil$DownloadProgressListener): $Path;
        static get availablePort(): number;
    }
    export class $ThreadingDetector {
        checkAndLock(): void;
        checkAndUnlock(): void;
        static makeThreadingException(accessed: string, thread: $Thread | null): $ReportedException;
        lock: $Semaphore;
        constructor(name: string);
    }
    export class $VisibleForDebug implements $Annotation {
    }
    export class $StringRepresentable {
        static keys(serializables: $StringRepresentable_[]): $Keyable;
        static fromEnum<E extends $Enum<E>>(elementsSupplier: $Supplier_<E[]>): $StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends $Enum<E>>(enumValues: $Supplier_<E[]>, keyFunction: $Function_<string, string>): $StringRepresentable$EnumCodec<E>;
        static createNameLookup<T extends $StringRepresentable>(values: T[], keyFunction: $Function_<string, string>): $Function<string, T>;
        static fromValues<T extends $StringRepresentable>(valuesSupplier: $Supplier_<T[]>): $Codec<T>;
        static PRE_BUILT_MAP_THRESHOLD: number;
    }
    export interface $StringRepresentable extends $RemappedEnumConstant {
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StringRepresentable}.
     */
    export type $StringRepresentable_ = (() => string);
    export class $ToFloatFunction<C> {
        static createUnlimited(wrapped: $Float2FloatFunction_): $ToFloatFunction<number>;
        static IDENTITY: $ToFloatFunction<number>;
    }
    export interface $ToFloatFunction<C> {
        apply(object: C): number;
        maxValue(): number;
        minValue(): number;
        comap<C2>(converter: $Function_<C2, C>): $ToFloatFunction<C2>;
    }
    export class $ClassTreeIdRegistry {
        getLastIdFor(clazz: $Class<never>): number;
        getCount(clazz: $Class<never>): number;
        define(clazz: $Class<never>): number;
        static NO_ID_VALUE: number;
        constructor();
    }
    export class $StaticCache2D<T> {
        get(x: number, z: number): T;
        contains(x: number, z: number): boolean;
        forEach(action: $Consumer_<T>): void;
        static create<T>(centerX: number, centerZ: number, size: number, initializer: $StaticCache2D$Initializer_<T>): $StaticCache2D<T>;
        constructor(minX: number, minZ: number, sizeX: number, sizeZ: number, initializer: $StaticCache2D$Initializer_<T>);
    }
    export class $ResourceLocationPattern {
        namespacePredicate(): $Predicate<string>;
        pathPredicate(): $Predicate<string>;
        locationPredicate(): $Predicate<$ResourceLocation>;
        static CODEC: $Codec<$ResourceLocationPattern>;
    }
    export class $Tuple<A, B> {
        setA(a: A): void;
        setB(a: B): void;
        getA(): A;
        getB(): B;
        constructor(a: A, b: B);
    }
    export class $TaskChainer {
        static immediate(executor: $Executor_): $TaskChainer;
        static LOGGER: $Logger;
    }
    export interface $TaskChainer {
        append<T>(future: $CompletableFuture<T>, consumer: $Consumer_<T>): void;
        append(task: $Runnable_): void;
    }
    /**
     * Values that may be interpreted as {@link $TaskChainer}.
     */
    export type $TaskChainer_ = ((arg0: $CompletableFuture<any>, arg1: $Consumer<any>) => void);
    export class $ColorRGBA extends $Record {
        rgba(): number;
        static CODEC: $Codec<$ColorRGBA>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $ColorRGBA}.
     */
    export type $ColorRGBA_ = { rgba?: number,  } | [rgba?: number, ];
    export class $ArrayListDeque$DescendingIterator implements $Iterator<T> {
        remove(): void;
        forEachRemaining(arg0: $Consumer_<T>): void;
    }
    export class $StringDecomposer {
        static getPlainText(text: $FormattedText): string;
        static iterate(text: string, style: $Style, sink: $FormattedCharSink_): boolean;
        static iterateBackwards(text: string, style: $Style, sink: $FormattedCharSink_): boolean;
        static iterateFormatted(text: string, style: $Style, sink: $FormattedCharSink_): boolean;
        static iterateFormatted(text: $FormattedText, style: $Style, sink: $FormattedCharSink_): boolean;
        /**
         * Iterate a String while applying legacy formatting codes starting with a `§` sign.
         */
        static iterateFormatted(text: string, skip: number, style: $Style, sink: $FormattedCharSink_): boolean;
        /**
         * Iterate a String while applying legacy formatting codes starting with a `§` sign.
         */
        static iterateFormatted(text: string, skip: number, currentStyle: $Style, defaultStyle: $Style, sink: $FormattedCharSink_): boolean;
        static filterBrokenSurrogates(text: string): string;
        constructor();
    }
    export class $Crypt$SaltSignaturePair extends $Record {
        saltAsBytes(): number[];
        signature(): number[];
        static write(buffer: $FriendlyByteBuf, signaturePair: $Crypt$SaltSignaturePair_): void;
        isValid(): boolean;
        salt(): number;
        static EMPTY: $Crypt$SaltSignaturePair;
        constructor(arg0: number, arg1: number[]);
        constructor(buffer: $FriendlyByteBuf);
        get valid(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Crypt$SaltSignaturePair}.
     */
    export type $Crypt$SaltSignaturePair_ = { signature?: number[], salt?: number,  } | [signature?: number[], salt?: number, ];
    export class $ExceptionCollector<T extends $Throwable> {
        throwIfPresent(): void;
        add(exception: T): void;
        constructor();
    }
    export class $StaticCache2D$Initializer<T> {
    }
    export interface $StaticCache2D$Initializer<T> {
        get(x: number, z: number): T;
    }
    /**
     * Values that may be interpreted as {@link $StaticCache2D$Initializer}.
     */
    export type $StaticCache2D$Initializer_<T> = ((arg0: number, arg1: number) => T);
    export class $ProblemReporter {
    }
    export interface $ProblemReporter {
        forChild(name: string): $ProblemReporter;
        report(message: string): void;
    }
    export class $ListAndDeque<T> {
    }
    export interface $ListAndDeque<T> extends $Serializable, $Cloneable, $Deque<T>, $List<T>, $RandomAccess {
        remove(): T;
        peek(): T;
        getFirst(): T;
        getLast(): T;
        element(): T;
        addFirst(element: T): void;
        addLast(element: T): void;
        removeFirst(): T;
        removeLast(): T;
        poll(): T;
        push(element: T): void;
        pop(): T;
        offer(element: T): boolean;
        reversed(): $Deque<T>;
        get first(): T;
        get last(): T;
    }
    export class $DependencySorter<K, V extends $DependencySorter$Entry<K>> {
        orderByDependencies(action: $BiConsumer_<K, V>): void;
        addEntry(key: K, value: V): $DependencySorter<K, V>;
        constructor();
    }
    export class $FormattedCharSequence {
        static fromList(parts: $List_<$FormattedCharSequence_>): $FormattedCharSequence;
        static codepoint(codePoint: number, style: $Style): $FormattedCharSequence;
        static composite(sequence: $FormattedCharSequence_): $FormattedCharSequence;
        static composite(first: $FormattedCharSequence_, second: $FormattedCharSequence_): $FormattedCharSequence;
        static composite(...parts: $FormattedCharSequence_[]): $FormattedCharSequence;
        static composite(): $FormattedCharSequence;
        static composite(parts: $List_<$FormattedCharSequence_>): $FormattedCharSequence;
        static forward(text: string, style: $Style): $FormattedCharSequence;
        static forward(text: string, style: $Style, codePointMapper: $Int2IntFunction_): $FormattedCharSequence;
        static backward(text: string, style: $Style): $FormattedCharSequence;
        static backward(text: string, style: $Style, codePointMapper: $Int2IntFunction_): $FormattedCharSequence;
        static decorateOutput(sink: $FormattedCharSink_, codePointMapper: $Int2IntFunction_): $FormattedCharSink;
        static fromPair(first: $FormattedCharSequence_, second: $FormattedCharSequence_): $FormattedCharSequence;
        static EMPTY: $FormattedCharSequence;
    }
    export interface $FormattedCharSequence {
        accept(sink: $FormattedCharSink_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FormattedCharSequence}.
     */
    export type $FormattedCharSequence_ = ((arg0: $FormattedCharSink) => boolean);
    export class $ByIdMap {
        static continuous<T>(keyExtractor: $ToIntFunction_<T>, values: T[], outOfBoundsStrategy: $ByIdMap$OutOfBoundsStrategy_): $IntFunction<T>;
        static sparse<T>(keyExtractor: $ToIntFunction_<T>, values: T[], fallback: T): $IntFunction<T>;
        constructor();
    }
    export class $TimeSource$NanoTimeSource {
    }
    export interface $TimeSource$NanoTimeSource extends $TimeSource, $LongSupplier {
        get(arg0: $TimeUnit_): number;
    }
    /**
     * Values that may be interpreted as {@link $TimeSource$NanoTimeSource}.
     */
    export type $TimeSource$NanoTimeSource_ = (() => void);
    export class $CubicSampler {
        static gaussianSampleVec3(vec: $Vec3_, fetcher: $CubicSampler$Vec3Fetcher_): $Vec3;
    }
    export class $ByIdMap$OutOfBoundsStrategy extends $Enum<$ByIdMap$OutOfBoundsStrategy> {
        static values(): $ByIdMap$OutOfBoundsStrategy[];
        static valueOf(arg0: string): $ByIdMap$OutOfBoundsStrategy;
        static ZERO: $ByIdMap$OutOfBoundsStrategy;
        static WRAP: $ByIdMap$OutOfBoundsStrategy;
        static CLAMP: $ByIdMap$OutOfBoundsStrategy;
    }
    /**
     * Values that may be interpreted as {@link $ByIdMap$OutOfBoundsStrategy}.
     */
    export type $ByIdMap$OutOfBoundsStrategy_ = "zero" | "wrap" | "clamp";
    export class $InclusiveRange<T extends $Comparable<T>> extends $Record {
        isValueInRange(value: T): boolean;
        contains(value: $InclusiveRange_<T>): boolean;
        static create<T extends $Comparable<T>>(min: T, max: T): $DataResult<$InclusiveRange<T>>;
        static codec<T extends $Comparable<T>>(codec: $Codec_<T>): $Codec<$InclusiveRange<T>>;
        static codec<T extends $Comparable<T>>(codec: $Codec_<T>, min: T, max: T): $Codec<$InclusiveRange<T>>;
        minInclusive(): T;
        maxInclusive(): T;
        static INT: $Codec<$InclusiveRange<number>>;
        constructor(minInclusive: T, maxInclusive: T);
        constructor(value: T);
    }
    /**
     * Values that may be interpreted as {@link $InclusiveRange}.
     */
    export type $InclusiveRange_<T> = { maxInclusive?: $Comparable_<T>, minInclusive?: $Comparable_<T>,  } | [maxInclusive?: $Comparable_<T>, minInclusive?: $Comparable_<T>, ];
    export class $SpawnUtil$Strategy {
        static ON_TOP_OF_COLLIDER: $SpawnUtil$Strategy;
        /**
         * @deprecated
         */
        static LEGACY_IRON_GOLEM: $SpawnUtil$Strategy;
    }
    export interface $SpawnUtil$Strategy {
        canSpawnOn(level: $ServerLevel, targetPos: $BlockPos_, targetState: $BlockState_, attemptedPos: $BlockPos_, attemptedState: $BlockState_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SpawnUtil$Strategy}.
     */
    export type $SpawnUtil$Strategy_ = ((arg0: $ServerLevel, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockPos, arg4: $BlockState) => boolean);
    export class $CubicSpline<C, I extends $ToFloatFunction<C>> {
        static builder<C, I extends $ToFloatFunction<C>>(coordinate: I): $CubicSpline$Builder<C, I>;
        static builder<C, I extends $ToFloatFunction<C>>(coordinate: I, valueTransformer: $ToFloatFunction<number>): $CubicSpline$Builder<C, I>;
        static constant<C, I extends $ToFloatFunction<C>>(value: number): $CubicSpline<C, I>;
        static codec<C, I extends $ToFloatFunction<C>>(arg0: $Codec_<I>): $Codec<$CubicSpline<C, I>>;
    }
    export interface $CubicSpline<C, I extends $ToFloatFunction<C>> extends $ToFloatFunction<C> {
        mapAll(visitor: $CubicSpline$CoordinateVisitor_<I>): $CubicSpline<C, I>;
        parityString(): string;
    }
    export class $SortedArraySet<T> extends $AbstractSet<T> implements $Collection<any> {
        get(element: $Object): $Object;
        /**
         * Gets the smallest element in the set
         */
        last(): $Object;
        /**
         * Gets the smallest element in the set
         */
        first(): $Object;
        static create<T>(comparator: $Comparator<T>, initialCapacity: number): $SortedArraySet<T>;
        static create<T extends $Comparable<T>>(): $SortedArraySet<T>;
        static create<T>(comparator: $Comparator<T>): $SortedArraySet<T>;
        static create<T extends $Comparable<T>>(initialCapacity: number): $SortedArraySet<T>;
        addOrGet(element: $Object): $Object;
        constructor(initialCapacity: number, comparator: $Comparator<$Object>);
    }
    export class $ZeroBitStorage implements $BitStorage, $BitStorageExtension {
        redirect$dem001$lithium$skipValidation(arg0: number, arg1: number, arg2: number): void;
        sodium$unpack(arg0: $Object[], arg1: $Palette<any>): void;
        getBits(): number;
        /**
         * Gets the entry at the given index
         */
        get(index: number): number;
        /**
         * Sets the entry at the given location to the given value
         */
        set(index: number, value: number): void;
        copy(): $BitStorage;
        getSize(): number;
        getAndSet(index: number, value: number): number;
        getAll(consumer: $IntConsumer_): void;
        unpack(array: number[]): void;
        /**
         * Gets the long array that is used to store the data in this BitArray. This is useful for sending packet data.
         */
        getRaw(): number[];
        static RAW: number[];
        constructor(size: number);
        get bits(): number;
        get size(): number;
        get raw(): number[];
    }
    export class $StringRepresentable$StringRepresentableCodec<S extends $StringRepresentable> implements $Codec<S> {
        decode<T>(ops: $DynamicOps<T>, value: T): $DataResult<$Pair<S, T>>;
        encode<T>(input: S, ops: $DynamicOps<T>, prefix: T): $DataResult<T>;
        dispatch<E>(arg0: string, arg1: $Function_<E, S>, arg2: $Function_<S, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: $Function_<E, S>, arg1: $Function_<S, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<S, $DataResult<S>>): $Codec<S>;
        orElse(arg0: $UnaryOperator_<string>, arg1: S): $Codec<S>;
        orElse(arg0: S): $Codec<S>;
        orElse(arg0: $Consumer_<string>, arg1: S): $Codec<S>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<S>): $Codec<S>;
        orElseGet(arg0: $Supplier_<S>): $Codec<S>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<S>): $Codec<S>;
        deprecated(arg0: number): $Codec<S>;
        stable(): $Codec<S>;
        listOf(arg0: number, arg1: number): $Codec<$List<S>>;
        listOf(): $Codec<$List<S>>;
        flatXmap<S>(arg0: $Function_<S, $DataResult<S>>, arg1: $Function_<S, $DataResult<S>>): $Codec<S>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: S, arg3: $Lifecycle): $MapCodec<S>;
        optionalFieldOf(arg0: string, arg1: S, arg2: $Lifecycle): $MapCodec<S>;
        optionalFieldOf(arg0: string, arg1: S): $MapCodec<S>;
        optionalFieldOf(arg0: string): $MapCodec<(S) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: S, arg3: $Lifecycle): $MapCodec<S>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<(S) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: S): $MapCodec<S>;
        lenientOptionalFieldOf(arg0: string, arg1: S, arg2: $Lifecycle): $MapCodec<S>;
        mapResult(arg0: $Codec$ResultFunction<S>): $Codec<S>;
        promotePartial(arg0: $Consumer_<string>): $Codec<S>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<S>>, arg2: $Function_<S, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, S>, arg2: $Function_<S, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, S>, arg1: $Function_<S, $MapCodec<E>>): $MapCodec<E>;
        xmap<S>(arg0: $Function_<S, S>, arg1: $Function_<S, S>): $Codec<S>;
        sizeLimitedListOf(arg0: number): $Codec<$List<S>>;
        comapFlatMap<S>(arg0: $Function_<S, $DataResult<S>>, arg1: $Function_<S, S>): $Codec<S>;
        flatComapMap<S>(arg0: $Function_<S, S>, arg1: $Function_<S, $DataResult<S>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, S>, arg1: $Function_<S, $MapCodec<E>>): $Codec<E>;
        comap<B>(arg0: $Function_<B, S>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<S>>): $Encoder<B>;
        encodeStart<T>(ops: $DynamicOps<T>, value: S): $DataResult<T>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<S, T>>;
        map<B>(arg0: $Function_<S, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<S, $DataResult<B>>): $Decoder<B>;
        parse<T>(ops: $DynamicOps<T>, value: T): $DataResult<S>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<S>;
        boxed(): $Decoder$Boxed<S>;
        terminal(): $Decoder$Terminal<S>;
        simple(): $Decoder$Simple<S>;
        withLifecycle(arg0: $Lifecycle): $Encoder<S>;
        fieldOf(arg0: string): $MapEncoder<S>;
        constructor(values: S[], nameLookup: $Function_<string, S>, indexLookup: $ToIntFunction_<S>);
    }
    export class $EncoderCache {
        wrap<A>(codec: $Codec_<A>): $Codec<A>;
        constructor(maxSize: number);
    }
    export class $FastColor$ABGR32 {
        static transparent(packedColor: number): number;
        static color(alpha: number, blue: number, green: number, red: number): number;
        static color(alpha: number, packedColor: number): number;
        static red(packedColor: number): number;
        static blue(packedColor: number): number;
        static green(packedColor: number): number;
        static alpha(packedColor: number): number;
        static opaque(packedColor: number): number;
        static fromArgb32(packedColor: number): number;
        constructor();
    }
    export class $StringUtil {
        static stripColor(text: string): string;
        static truncateStringIfNecessary(string: string, maxSize: number, addEllipsis: boolean): string;
        static formatTickDuration(ticks: number, ticksPerSecond: number): string;
        static lineCount(string: string): number;
        static isAllowedChatCharacter(character: string): boolean;
        static isWhitespace(character: number): boolean;
        static isBlank(string: string | null): boolean;
        static trimChatMessage(text: string): string;
        static isNullOrEmpty(string: string | null): boolean;
        static isValidPlayerName(string: string): boolean;
        static filterText(text: string, allowLineBreaks: boolean): string;
        static filterText(text: string): string;
        static endsWithNewLine(string: string): boolean;
        constructor();
    }
}
