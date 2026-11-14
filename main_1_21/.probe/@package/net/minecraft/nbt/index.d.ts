import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $Encoder_, $DataResult, $DynamicOps, $MapLike, $ListBuilder, $Codec, $RecordBuilder$AbstractStringBuilder, $RecordBuilder, $Decoder_ } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $NbtAccounterAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID, $SequencedCollection, $Map_, $UUID_, $List_, $Map, $Set, $AbstractList } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $DelegateDataOutput } from "@package/net/minecraft/util";
import { $MapCarrier } from "@package/io/wispforest/endec/util";
import { $BiConsumer, $Consumer, $Function_, $Function } from "@package/java/util/function";
import { $TypeInfo_ } from "@package/dev/latvian/mods/rhino/type";
import { $ReportedException, $CrashReport } from "@package/net/minecraft";
import { $BlockPos, $BlockPos_, $HolderGetter } from "@package/net/minecraft/core";
import { $Dynamic2CommandExceptionType, $DynamicCommandExceptionType, $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $Path_ } from "@package/java/nio/file";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SpecialEquality, $CustomJavaToJsWrapper } from "@package/dev/latvian/mods/rhino/util";
import { $Enum, $RuntimeException, $Number, $StringBuilder, $Object } from "@package/java/lang";
import { $INbtList, $INbtCompound } from "@package/com/ishland/c2me/base/mixin/access";
import { $DataOutput, $DataInput, $InputStream, $OutputStream } from "@package/java/io";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $SerializationContext } from "@package/io/wispforest/endec";
import { $IntStream, $LongStream, $Stream } from "@package/java/util/stream";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Scriptable } from "@package/dev/latvian/mods/rhino";
import { $KeyedEndec } from "@package/io/wispforest/endec/impl";
export * as visitors from "@package/net/minecraft/nbt/visitors";

declare module "@package/net/minecraft/nbt" {
    export class $LongArrayTag extends $CollectionTag<$LongTag> {
        remove(index: number): $LongTag;
        add(index: number, tag: $LongTag): void;
        set(index: number, tag: $LongTag): $LongTag;
        getAsLongArray(): number[];
        reversed(): $SequencedCollection<$LongTag>;
        static TYPE: $TagType<$LongArrayTag>;
        constructor(dataList: $List_<number>);
        constructor(dataSet: $LongSet);
        constructor(data: number[]);
        get asLongArray(): number[];
    }
    export class $NbtOps$NbtRecordBuilder extends $RecordBuilder$AbstractStringBuilder<$Tag, $CompoundTag> {
    }
    export class $TextComponentTagVisitor implements $TagVisitor {
        visitInt(tag: $IntTag): void;
        visitShort(tag: $ShortTag): void;
        visitLong(tag: $LongTag): void;
        visitIntArray(tag: $IntArrayTag): void;
        visitByteArray(tag: $ByteArrayTag): void;
        visitLongArray(tag: $LongArrayTag): void;
        visitDouble(tag: $DoubleTag): void;
        visitByte(tag: $ByteTag): void;
        visitFloat(tag: $FloatTag): void;
        visit(tag: $Tag_): $Component;
        visitEnd(tag: $EndTag): void;
        visitCompound(tag: $CompoundTag_): void;
        visitString(tag: $StringTag): void;
        visitList(tag: $ListTag_): void;
        constructor(indentation: string);
    }
    export class $LongTag extends $NumericTag {
        static valueOf(data: number): $LongTag;
        static TYPE: $TagType<$LongTag>;
    }
    export class $TagType$StaticSize<T extends $Tag> {
    }
    export interface $TagType$StaticSize<T extends $Tag> extends $TagType<T> {
        size(): number;
        skip(arg0: $DataInput, arg1: number, arg2: $NbtAccounter): void;
        skip(arg0: $DataInput, arg1: $NbtAccounter): void;
    }
    export class $NbtOps$HeterogenousListCollector implements $NbtOps$ListCollector {
    }
    export class $NbtException extends $RuntimeException {
        constructor(message: string);
    }
    export class $ByteTag$Cache {
    }
    export class $NbtOps$InitialListCollector implements $NbtOps$ListCollector {
    }
    export class $NbtOps$IntListCollector implements $NbtOps$ListCollector {
    }
    export class $NbtIo$StringFallbackDataOutput extends $DelegateDataOutput {
        constructor(arg0: $DataOutput);
    }
    export class $TagVisitor {
    }
    export interface $TagVisitor {
        visitInt(tag: $IntTag): void;
        visitShort(tag: $ShortTag): void;
        visitLong(tag: $LongTag): void;
        visitIntArray(tag: $IntArrayTag): void;
        visitByteArray(tag: $ByteArrayTag): void;
        visitLongArray(tag: $LongArrayTag): void;
        visitDouble(tag: $DoubleTag): void;
        visitByte(tag: $ByteTag): void;
        visitFloat(tag: $FloatTag): void;
        visitEnd(tag: $EndTag): void;
        visitCompound(tag: $CompoundTag_): void;
        visitString(tag: $StringTag): void;
        visitList(tag: $ListTag_): void;
    }
    export class $NbtIo {
        static writeUnnamedTagWithFallback(tag: $Tag_, output: $DataOutput): void;
        static writeUnnamedTag(tag: $Tag_, output: $DataOutput): void;
        static writeAnyTag(tag: $Tag_, output: $DataOutput): void;
        static readAnyTag(input: $DataInput, accounter: $NbtAccounter): $Tag;
        static readCompressed(zippedStream: $InputStream, accounter: $NbtAccounter): $CompoundTag;
        static readCompressed(path: $Path_, accounter: $NbtAccounter): $CompoundTag;
        static writeCompressed(compoundTag: $CompoundTag_, path: $Path_): void;
        /**
         * Writes and compresses a compound tag to a GNU zipped file.
         * @see #writeCompressed(CompoundTag, File)
         */
        static writeCompressed(compoundTag: $CompoundTag_, outputStream: $OutputStream): void;
        static write(compoundTag: $CompoundTag_, path: $Path_): void;
        static write(compoundTag: $CompoundTag_, output: $DataOutput): void;
        /**
         * Reads a compound tag from a file. The size of the file can be infinite.
         */
        static read(input: $DataInput): $CompoundTag;
        static read(path: $Path_): $CompoundTag;
        /**
         * Reads a compound tag from a file. The size of the file is limited by the `accounter`.
         * @throws RuntimeException if the size of the file is larger than the maximum amount of bytes specified by the `accounter`
         */
        static read(input: $DataInput, accounter: $NbtAccounter): $CompoundTag;
        static parse(input: $DataInput, visitor: $StreamTagVisitor, accounter: $NbtAccounter): void;
        static parseCompressed(zippedStream: $InputStream, visitor: $StreamTagVisitor, accounter: $NbtAccounter): void;
        static parseCompressed(path: $Path_, visitor: $StreamTagVisitor, accounter: $NbtAccounter): void;
        constructor();
    }
    export class $StreamTagVisitor {
    }
    export interface $StreamTagVisitor {
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number[]): $StreamTagVisitor$ValueResult;
        visit(entry: number[]): $StreamTagVisitor$ValueResult;
        visit(entry: number[]): $StreamTagVisitor$ValueResult;
        visit(entry: string): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visitEnd(): $StreamTagVisitor$ValueResult;
        visitEntry(type: $TagType<never>, id: string): $StreamTagVisitor$EntryResult;
        visitEntry(type: $TagType<never>): $StreamTagVisitor$EntryResult;
        visitRootEntry(type: $TagType<never>): $StreamTagVisitor$ValueResult;
        visitContainerEnd(): $StreamTagVisitor$ValueResult;
        visitList(type: $TagType<never>, size: number): $StreamTagVisitor$ValueResult;
        visitElement(type: $TagType<never>, size: number): $StreamTagVisitor$EntryResult;
    }
    export class $NbtOps$HomogenousListCollector implements $NbtOps$ListCollector {
    }
    export class $ShortTag$Cache {
    }
    export class $Tag {
        static TAG_INT: number;
        static TAG_FLOAT: number;
        static TAG_BYTE_ARRAY: number;
        static MAX_DEPTH: number;
        static OBJECT_HEADER: number;
        static TAG_INT_ARRAY: number;
        static ARRAY_HEADER: number;
        static TAG_DOUBLE: number;
        static TAG_STRING: number;
        static OBJECT_REFERENCE: number;
        static TAG_BYTE: number;
        static TAG_ANY_NUMERIC: number;
        static TAG_COMPOUND: number;
        static TAG_SHORT: number;
        static TAG_END: number;
        static TAG_LIST: number;
        static TAG_LONG_ARRAY: number;
        static STRING_SIZE: number;
        static TAG_LONG: number;
    }
    export interface $Tag {
        toString(): string;
        write(output: $DataOutput): void;
        accept(visitor: $TagVisitor): void;
        accept(visitor: $StreamTagVisitor): $StreamTagVisitor$ValueResult;
        getId(): number;
        getType(): $TagType<never>;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $Tag;
        getAsString(): string;
        sizeInBytes(): number;
        acceptAsRoot(visitor: $StreamTagVisitor): void;
        get id(): number;
        get type(): $TagType<never>;
        get asString(): string;
    }
    /**
     * Values that may be interpreted as {@link $Tag}.
     */
    export type $Tag_ = string | number | boolean | object | any[];
    export class $StreamTagVisitor$EntryResult extends $Enum<$StreamTagVisitor$EntryResult> {
        static values(): $StreamTagVisitor$EntryResult[];
        static valueOf(arg0: string): $StreamTagVisitor$EntryResult;
        static HALT: $StreamTagVisitor$EntryResult;
        static BREAK: $StreamTagVisitor$EntryResult;
        static ENTER: $StreamTagVisitor$EntryResult;
        static SKIP: $StreamTagVisitor$EntryResult;
    }
    /**
     * Values that may be interpreted as {@link $StreamTagVisitor$EntryResult}.
     */
    export type $StreamTagVisitor$EntryResult_ = "enter" | "skip" | "break" | "halt";
    export class $NbtFormatException extends $NbtException {
        constructor(arg0: string);
    }
    export class $NbtOps$LongListCollector implements $NbtOps$ListCollector {
    }
    export class $NumericTag implements $Tag, $SpecialEquality {
        getAsDouble(): number;
        getAsInt(): number;
        getAsLong(): number;
        getAsNumber(): $Number;
        getAsFloat(): number;
        getAsByte(): number;
        getAsShort(): number;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getAsString(): string;
        acceptAsRoot(arg0: $StreamTagVisitor): void;
        get asDouble(): number;
        get asInt(): number;
        get asLong(): number;
        get asNumber(): $Number;
        get asFloat(): number;
        get asByte(): number;
        get asShort(): number;
        get asString(): string;
    }
    export class $NbtAccounterException extends $NbtException {
        constructor(message: string);
    }
    export class $TagType$VariableSize<T extends $Tag> {
    }
    export interface $TagType$VariableSize<T extends $Tag> extends $TagType<T> {
        skip(arg0: $DataInput, arg1: number, arg2: $NbtAccounter): void;
    }
    export class $StringTagVisitor implements $TagVisitor {
        visitInt(tag: $IntTag): void;
        visitShort(tag: $ShortTag): void;
        visitLong(tag: $LongTag): void;
        visitIntArray(tag: $IntArrayTag): void;
        visitByteArray(tag: $ByteArrayTag): void;
        visitLongArray(tag: $LongArrayTag): void;
        visitDouble(tag: $DoubleTag): void;
        visitByte(tag: $ByteTag): void;
        visitFloat(tag: $FloatTag): void;
        visit(tag: $Tag_): string;
        visitEnd(tag: $EndTag): void;
        visitCompound(tag: $CompoundTag_): void;
        visitString(tag: $StringTag): void;
        visitList(tag: $ListTag_): void;
        constructor();
    }
    export class $NbtAccounter implements $NbtAccounterAccessor {
        getUsage(): number;
        static create(quota: number): $NbtAccounter;
        readUTF(arg0: string): string;
        getDepth(): number;
        static unlimitedHeap(): $NbtAccounter;
        /**
         * Adds the bytes to the current number of read bytes. If the number of bytes is greater than the stored quota, an exception will occur.
         * @throws RuntimeException if the number of `usage` bytes exceed the number of `quota` bytes
         */
        accountBytes(bytes: number): void;
        accountBytes(bytesPerItem: number, arg1: number): void;
        pushDepth(): void;
        popDepth(): void;
        create$getUsage(): number;
        constructor(quota: number, arg1: number);
        get usage(): number;
        get depth(): number;
    }
    export class $IntTag extends $NumericTag {
        static valueOf(data: number): $IntTag;
        static TYPE: $TagType<$IntTag>;
    }
    export class $CompoundTag implements $Tag, $MapCarrier, $CustomJavaToJsWrapper, $INbtCompound {
        remove(key: string): void;
        size(): number;
        get(key: string): $Tag;
        put(key: string, value: $Tag_): $Tag;
        put(ctx: $SerializationContext, key: $KeyedEndec<any>, value: $Object): void;
        getBoolean(key: string): boolean;
        putBoolean(key: string, value: boolean): void;
        getByte(key: string): number;
        putByte(key: string, value: number): void;
        getShort(key: string): number;
        putShort(key: string, value: number): void;
        getInt(key: string): number;
        putInt(key: string, value: number): void;
        getLong(key: string): number;
        putLong(key: string, value: number): void;
        getFloat(key: string): number;
        putFloat(key: string, value: number): void;
        getDouble(key: string): number;
        putDouble(key: string, value: number): void;
        isEmpty(): boolean;
        contains(key: string): boolean;
        /**
         * Returns whether the tag of the specified `key` is a particular `tagType`. If the `tagType` is `99`, all numeric tags will be checked against the type of the stored tag.
         */
        contains(key: string, tagType: number): boolean;
        /**
         * Copies all the tags of `other` into this tag, then returns itself.
         * @see #copy()
         */
        merge(other: $CompoundTag_): $CompoundTag;
        write(output: $DataOutput): void;
        "delete"(key: $KeyedEndec<any>): void;
        accept(visitor: $StreamTagVisitor): $StreamTagVisitor$ValueResult;
        accept(visitor: $TagVisitor): void;
        getId(): number;
        getType(): $TagType<$CompoundTag>;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $CompoundTag;
        getString(key: string): string;
        has(key: $KeyedEndec<any>): boolean;
        putByteArray(key: string, value: number[]): void;
        getList(key: string, tagType: number): $ListTag;
        getUUID(key: string): $UUID;
        sizeInBytes(): number;
        getAllKeys(): $Set<string>;
        putUUID(key: string, value: $UUID_): void;
        hasUUID(key: string): boolean;
        putString(key: string, value: string): void;
        putIntArray(key: string, value: number[]): void;
        putLongArray(key: string, value: number[]): void;
        getTagType(key: string): number;
        getByteArray(key: string): number[];
        getIntArray(key: string): number[];
        getLongArray(key: string): number[];
        getCompound(key: string): $CompoundTag;
        static readNamedTagData(type: $TagType<never>, name: string, input: $DataInput, accounter: $NbtAccounter): $Tag;
        getWithErrors(ctx: $SerializationContext, key: $KeyedEndec<any>): $Object;
        convertJavaToJs(scope: $Scriptable, target: $TypeInfo_): $Scriptable;
        getAsString(): string;
        acceptAsRoot(visitor: $StreamTagVisitor): void;
        get<T>(arg0: $SerializationContext, arg1: $KeyedEndec<T>): T;
        get<T>(arg0: $KeyedEndec<T>): T;
        put<T>(arg0: $KeyedEndec<T>, arg1: T): void;
        copy<T>(arg0: $KeyedEndec<T>, arg1: $MapCarrier): void;
        copy<T>(arg0: $SerializationContext, arg1: $KeyedEndec<T>, arg2: $MapCarrier): void;
        getWithErrors<T>(arg0: $KeyedEndec<T>): T;
        putIfNotNull<T>(arg0: $SerializationContext, arg1: $KeyedEndec<T>, arg2: T): void;
        putIfNotNull<T>(arg0: $KeyedEndec<T>, arg1: T): void;
        copyIfPresent<T>(arg0: $SerializationContext, arg1: $KeyedEndec<T>, arg2: $MapCarrier): void;
        /**
         * @deprecated
         */
        copyIfPresent<T>(arg0: $KeyedEndec<T>, arg1: $SerializationContext, arg2: $MapCarrier): void;
        copyIfPresent<T>(arg0: $KeyedEndec<T>, arg1: $MapCarrier): void;
        /**
         * @deprecated
         */
        mutate<T>(arg0: $KeyedEndec<T>, arg1: $SerializationContext, arg2: $Function_<T, T>): void;
        mutate<T>(arg0: $SerializationContext, arg1: $KeyedEndec<T>, arg2: $Function_<T, T>): void;
        mutate<T>(arg0: $KeyedEndec<T>, arg1: $Function_<T, T>): void;
        static CODEC: $Codec<$CompoundTag>;
        static TYPE: $TagType<$CompoundTag>;
        tags: $Map<string, $Tag>;
        constructor(arg0: number);
        constructor();
        constructor(tags: $Map_<string, $Tag_>);
        get empty(): boolean;
        get id(): number;
        get type(): $TagType<$CompoundTag>;
        get allKeys(): $Set<string>;
        get asString(): string;
    }
    /**
     * Values that may be interpreted as {@link $CompoundTag}.
     */
    export type $CompoundTag_ = object;
    export class $StreamTagVisitor$ValueResult extends $Enum<$StreamTagVisitor$ValueResult> {
        static values(): $StreamTagVisitor$ValueResult[];
        static valueOf(arg0: string): $StreamTagVisitor$ValueResult;
        static CONTINUE: $StreamTagVisitor$ValueResult;
        static HALT: $StreamTagVisitor$ValueResult;
        static BREAK: $StreamTagVisitor$ValueResult;
    }
    /**
     * Values that may be interpreted as {@link $StreamTagVisitor$ValueResult}.
     */
    export type $StreamTagVisitor$ValueResult_ = "continue" | "break" | "halt";
    export class $NbtOps implements $DynamicOps<$Tag> {
        getStringValue(tag: $Tag_): $DataResult<string>;
        getStream(tag: $Tag_): $DataResult<$Stream<$Tag>>;
        remove(map: $Tag_, removeKey: string): $Tag;
        empty(): $Tag;
        getByteBuffer(tag: $Tag_): $DataResult<$ByteBuffer>;
        getMap(tag: $Tag_): $DataResult<$MapLike<$Tag>>;
        createLong(data: number): $Tag;
        createString(data: string): $Tag;
        getList(tag: $Tag_): $DataResult<$Consumer<$Consumer<$Tag>>>;
        mapBuilder(): $RecordBuilder<$Tag>;
        getNumberValue(tag: $Tag_): $DataResult<$Number>;
        createBoolean(data: boolean): $Tag;
        getIntStream(tag: $Tag_): $DataResult<$IntStream>;
        createIntList(data: $IntStream): $Tag;
        mergeToList(list: $Tag_, tags: $List_<$Tag_>): $DataResult<$Tag>;
        mergeToList(list: $Tag_, tag: $Tag_): $DataResult<$Tag>;
        mergeToMap(map: $Tag_, key: $Tag_, value: $Tag_): $DataResult<$Tag>;
        mergeToMap(arg0: $Tag_, arg1: $Map_<$Tag_, $Tag_>): $DataResult<$Tag>;
        mergeToMap(map: $Tag_, otherMap: $MapLike<$Tag_>): $DataResult<$Tag>;
        getLongStream(tag: $Tag_): $DataResult<$LongStream>;
        createLongList(data: $LongStream): $Tag;
        createNumeric(data: $Number): $Tag;
        getMapValues(tag: $Tag_): $DataResult<$Stream<$Pair<$Tag, $Tag>>>;
        convertTo<U>(ops: $DynamicOps<U>, tag: $Tag_): U;
        getMapEntries(tag: $Tag_): $DataResult<$Consumer<$BiConsumer<$Tag, $Tag>>>;
        get(arg0: $Tag_, arg1: string): $DataResult<$Tag>;
        update(arg0: $Tag_, arg1: string, arg2: $Function_<$Tag, $Tag>): $Tag;
        set(arg0: $Tag_, arg1: string, arg2: $Tag_): $Tag;
        emptyList(): $Tag;
        emptyMap(): $Tag;
        createMap(arg0: $Map_<$Tag_, $Tag_>): $Tag;
        getBooleanValue(arg0: $Tag_): $DataResult<boolean>;
        mergeToPrimitive(arg0: $Tag_, arg1: $Tag_): $DataResult<$Tag>;
        compressMaps(): boolean;
        getNumberValue(arg0: $Tag_, arg1: $Number): $Number;
        listBuilder(): $ListBuilder<$Tag>;
        getGeneric(arg0: $Tag_, arg1: $Tag_): $DataResult<$Tag>;
        updateGeneric(arg0: $Tag_, arg1: $Tag_, arg2: $Function_<$Tag, $Tag>): $Tag;
        withEncoder<E>(arg0: $Encoder_<E>): $Function<E, $DataResult<$Tag>>;
        withDecoder<E>(arg0: $Decoder_<E>): $Function<$Tag, $DataResult<$Pair<E, $Tag>>>;
        withParser<E>(arg0: $Decoder_<E>): $Function<$Tag, $DataResult<E>>;
        convertList<U>(arg0: $DynamicOps<U>, arg1: $Tag_): U;
        convertMap<U>(arg0: $DynamicOps<U>, arg1: $Tag_): U;
        createFloat(arg0: number): $Tag;
        createList(arg0: $Stream<$Tag_>): $Tag;
        createDouble(arg0: number): $Tag;
        createByte(arg0: number): $Tag;
        createShort(arg0: number): $Tag;
        createByteList(arg0: $ByteBuffer): $Tag;
        createInt(arg0: number): $Tag;
        static INSTANCE: $NbtOps;
    }
    export class $ByteTag extends $NumericTag {
        static valueOf(data: boolean): $ByteTag;
        static valueOf(data: number): $ByteTag;
        static ZERO: $ByteTag;
        static ONE: $ByteTag;
        static TYPE: $TagType<$ByteTag>;
    }
    export class $NbtUtils {
        static writeFluidState(state: $FluidState): $CompoundTag;
        static structureToSnbt(tag: $CompoundTag_): string;
        static addDataVersion(tag: $CompoundTag_, dataVersion: number): $CompoundTag;
        static compareNbt(tag: $Tag_ | null, other: $Tag_ | null, compareListTag: boolean): boolean;
        static readBlockPos(tag: $CompoundTag_, key: string): ($BlockPos) | undefined;
        static writeBlockState(state: $BlockState_): $CompoundTag;
        static readBlockState(blockGetter: $HolderGetter<$Block_>, tag: $CompoundTag_): $BlockState;
        static snbtToStructure(text: string): $CompoundTag;
        static prettyPrint(tag: $Tag_, prettyPrintArray: boolean): string;
        static prettyPrint(tag: $Tag_): string;
        static prettyPrint(stringBuilder: $StringBuilder, tag: $Tag_, indentLevel: number, prettyPrintArray: boolean): $StringBuilder;
        static createUUID(uuid: $UUID_): $IntArrayTag;
        static loadUUID(tag: $Tag_): $UUID;
        static getDataVersion(tag: $CompoundTag_, defaultValue: number): number;
        static addCurrentDataVersion(tag: $CompoundTag_): $CompoundTag;
        static writeBlockPos(pos: $BlockPos_): $Tag;
        static toPrettyComponent(tag: $Tag_): $Component;
        static SNBT_DATA_TAG: string;
    }
    export class $ListTag extends $CollectionTag<$Tag> implements $INbtList {
        get(index: number): $Tag;
        getShort(index: number): number;
        getInt(index: number): number;
        getFloat(index: number): number;
        getDouble(index: number): number;
        getString(index: number): string;
        getList(index: number): $ListTag;
        getIntArray(index: number): number[];
        getLongArray(index: number): number[];
        getCompound(index: number): $CompoundTag;
        reversed(): $SequencedCollection<$Tag>;
        static TYPE: $TagType<$ListTag>;
        constructor(arg0: number);
        constructor();
        constructor(list: $List_<$Tag_>, type: number);
    }
    /**
     * Values that may be interpreted as {@link $ListTag}.
     */
    export type $ListTag_ = any[];
    export class $IntTag$Cache {
    }
    export class $NbtOps$ByteListCollector implements $NbtOps$ListCollector {
    }
    export class $DoubleTag extends $NumericTag {
        static valueOf(data: number): $DoubleTag;
        static ZERO: $DoubleTag;
        static TYPE: $TagType<$DoubleTag>;
    }
    export class $ByteArrayTag extends $CollectionTag<$ByteTag> {
        get(index: number): $ByteTag;
        add(index: number, tag: $ByteTag): void;
        set(index: number, tag: $ByteTag): $ByteTag;
        getAsByteArray(): number[];
        reversed(): $SequencedCollection<$ByteTag>;
        static TYPE: $TagType<$ByteArrayTag>;
        constructor(data: number[]);
        constructor(dataList: $List_<number>);
        get asByteArray(): number[];
    }
    export class $ReportedNbtException extends $ReportedException {
        constructor(arg0: $CrashReport);
    }
    export class $TagParser {
        readValue(): $Tag;
        static parseTag(text: string): $CompoundTag;
        readStruct(): $CompoundTag;
        static ERROR_EXPECTED_VALUE: $SimpleCommandExceptionType;
        static ERROR_EXPECTED_KEY: $SimpleCommandExceptionType;
        static ERROR_TRAILING_DATA: $SimpleCommandExceptionType;
        static NAME_VALUE_SEPARATOR: string;
        static AS_CODEC: $Codec<$CompoundTag>;
        static ERROR_INSERT_MIXED_LIST: $Dynamic2CommandExceptionType;
        static ERROR_INSERT_MIXED_ARRAY: $Dynamic2CommandExceptionType;
        static ERROR_INVALID_ARRAY: $DynamicCommandExceptionType;
        static ELEMENT_SEPARATOR: string;
        static LENIENT_CODEC: $Codec<$CompoundTag>;
        constructor(reader: $StringReader);
    }
    export class $FloatTag extends $NumericTag {
        static valueOf(data: number): $FloatTag;
        static ZERO: $FloatTag;
        static TYPE: $TagType<$FloatTag>;
    }
    export class $EndTag implements $Tag {
        write(output: $DataOutput): void;
        accept(visitor: $StreamTagVisitor): $StreamTagVisitor$ValueResult;
        accept(visitor: $TagVisitor): void;
        getId(): number;
        getType(): $TagType<$EndTag>;
        sizeInBytes(): number;
        getAsString(): string;
        acceptAsRoot(visitor: $StreamTagVisitor): void;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $Tag;
        static INSTANCE: $EndTag;
        static TYPE: $TagType<$EndTag>;
        get id(): number;
        get type(): $TagType<$EndTag>;
        get asString(): string;
    }
    export class $ShortTag extends $NumericTag {
        static valueOf(data: number): $ShortTag;
        static TYPE: $TagType<$ShortTag>;
    }
    export class $SnbtPrinterTagVisitor implements $TagVisitor {
        visitInt(tag: $IntTag): void;
        visitShort(tag: $ShortTag): void;
        visitLong(tag: $LongTag): void;
        visitIntArray(tag: $IntArrayTag): void;
        visitByteArray(tag: $ByteArrayTag): void;
        visitLongArray(tag: $LongArrayTag): void;
        visitDouble(tag: $DoubleTag): void;
        visitByte(tag: $ByteTag): void;
        visitFloat(tag: $FloatTag): void;
        visit(tag: $Tag_): string;
        visitEnd(tag: $EndTag): void;
        pathString(): string;
        visitCompound(tag: $CompoundTag_): void;
        visitString(tag: $StringTag): void;
        visitList(tag: $ListTag_): void;
        constructor();
        constructor(indentation: string, depth: number, path: $List_<string>);
    }
    export class $TagTypes {
        static getType(id: number): $TagType<never>;
        constructor();
    }
    export class $LongTag$Cache {
    }
    export class $TagType<T extends $Tag> {
        static createInvalid(id: number): $TagType<$EndTag>;
    }
    export interface $TagType<T extends $Tag> {
        isValue(): boolean;
        getName(): string;
        load(input: $DataInput, accounter: $NbtAccounter): T;
        parse(input: $DataInput, visitor: $StreamTagVisitor, accounter: $NbtAccounter): $StreamTagVisitor$ValueResult;
        skip(input: $DataInput, accounter: $NbtAccounter): void;
        skip(input: $DataInput, entries: number, accounter: $NbtAccounter): void;
        getPrettyName(): string;
        parseRoot(input: $DataInput, visitor: $StreamTagVisitor, nbtAccounter: $NbtAccounter): void;
        get value(): boolean;
        get name(): string;
        get prettyName(): string;
    }
    export class $NbtOps$ListCollector {
    }
    export interface $NbtOps$ListCollector {
    }
    export class $CollectionTag<T extends $Tag> extends $AbstractList<T> implements $Tag, $CustomJavaToJsWrapper {
        setTag(index: number, tag: $Tag_): boolean;
        add(index: number, tag: T): void;
        set(index: number, tag: T): T;
        getElementType(): number;
        convertJavaToJs(scope: $Scriptable, target: $TypeInfo_): $Scriptable;
        addTag(index: number, tag: $Tag_): boolean;
        getAsString(): string;
        acceptAsRoot(visitor: $StreamTagVisitor): void;
        reversed(): $SequencedCollection<T>;
        constructor();
        get elementType(): number;
        get asString(): string;
    }
    /**
     * Values that may be interpreted as {@link $CollectionTag}.
     */
    export type $CollectionTag_<T> = any[];
    export class $StringTag implements $Tag, $SpecialEquality {
        static skipString(input: $DataInput): void;
        static valueOf(data: string): $StringTag;
        write(output: $DataOutput): void;
        accept(visitor: $TagVisitor): void;
        accept(visitor: $StreamTagVisitor): $StreamTagVisitor$ValueResult;
        getId(): number;
        getType(): $TagType<$StringTag>;
        getAsString(): string;
        sizeInBytes(): number;
        specialEquals(o: $Object, shallow: boolean): boolean;
        static quoteAndEscape(text: string): string;
        acceptAsRoot(visitor: $StreamTagVisitor): void;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $Tag;
        static TYPE: $TagType<$StringTag>;
        get id(): number;
        get type(): $TagType<$StringTag>;
        get asString(): string;
    }
    export class $IntArrayTag extends $CollectionTag<$IntTag> {
        add(index: number, tag: $IntTag): void;
        set(index: number, tag: $IntTag): $IntTag;
        getAsIntArray(): number[];
        reversed(): $SequencedCollection<$IntTag>;
        static TYPE: $TagType<$IntArrayTag>;
        constructor(data: number[]);
        constructor(dataList: $List_<number>);
        get asIntArray(): number[];
    }
}
