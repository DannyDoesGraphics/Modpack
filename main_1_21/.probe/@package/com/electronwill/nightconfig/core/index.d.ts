import { $WriterSupplier_ } from "@package/com/electronwill/nightconfig/core/utils";
import { $Writer, $File_ } from "@package/java/io";
import { $Supplier_, $IntSupplier_, $Supplier, $LongSupplier_ } from "@package/java/util/function";
import { $ConfigParser, $ConfigWriter } from "@package/com/electronwill/nightconfig/core/io";
import { $Path_ } from "@package/java/nio/file";
import { $Enum, $Object, $Class } from "@package/java/lang";
import { $List, $Map_, $Map, $Set, $List_, $OptionalInt, $OptionalLong } from "@package/java/util";
export * as io from "@package/com/electronwill/nightconfig/core/io";
export * as utils from "@package/com/electronwill/nightconfig/core/utils";
export * as file from "@package/com/electronwill/nightconfig/core/file";

declare module "@package/com/electronwill/nightconfig/core" {
    export class $UnmodifiableCommentedConfig$CommentNode {
        getComment(): string;
        getChildren(): $Map<string, $UnmodifiableCommentedConfig$CommentNode>;
        constructor(arg0: string, arg1: $Map_<string, $UnmodifiableCommentedConfig$CommentNode>);
        get comment(): string;
        get children(): $Map<string, $UnmodifiableCommentedConfig$CommentNode>;
    }
    export class $Config {
        static wrap(arg0: $Map_<string, $Object>, arg1: $ConfigFormat<never>): $Config;
        static of(arg0: $ConfigFormat<$Config>): $Config;
        static of(arg0: $Supplier_<$Map<string, $Object>>, arg1: $ConfigFormat<never>): $Config;
        static copy(arg0: $UnmodifiableConfig): $Config;
        static copy(arg0: $UnmodifiableConfig, arg1: $ConfigFormat<never>): $Config;
        static copy(arg0: $UnmodifiableConfig, arg1: $Supplier_<$Map<string, $Object>>): $Config;
        static copy(arg0: $UnmodifiableConfig, arg1: $Supplier_<$Map<string, $Object>>, arg2: $ConfigFormat<never>): $Config;
        static inMemory(): $Config;
        /**
         * @deprecated
         */
        static ofConcurrent(arg0: $ConfigFormat<$Config>): $Config;
        static inMemoryUniversal(): $Config;
        /**
         * @deprecated
         */
        static inMemoryConcurrent(): $Config;
        /**
         * @deprecated
         */
        static getDefaultMapCreator<T>(arg0: boolean): $Supplier<$Map<string, T>>;
        /**
         * @deprecated
         */
        static getDefaultMapCreator<T>(arg0: boolean, arg1: boolean): $Supplier<$Map<string, T>>;
        /**
         * @deprecated
         */
        static inMemoryUniversalConcurrent(): $Config;
        /**
         * @deprecated
         */
        static concurrentCopy(arg0: $UnmodifiableConfig, arg1: $ConfigFormat<never>): $Config;
        /**
         * @deprecated
         */
        static concurrentCopy(arg0: $UnmodifiableConfig): $Config;
        static isInsertionOrderPreserved(): boolean;
        static setInsertionOrderPreserved(arg0: boolean): void;
    }
    export interface $Config extends $UnmodifiableConfig {
        remove<T>(arg0: $List_<string>): T;
        remove<T>(arg0: string): T;
        update(arg0: string, arg1: $Object): void;
        update(arg0: $List_<string>, arg1: $Object): void;
        clear(): void;
        add(arg0: $List_<string>, arg1: $Object): boolean;
        add(arg0: string, arg1: $Object): boolean;
        addAll(arg0: $UnmodifiableConfig): void;
        entrySet(): $Set<$Config$Entry>;
        putAll(arg0: $UnmodifiableConfig): void;
        set<T>(arg0: string, arg1: $Object): T;
        set<T>(arg0: $List_<string>, arg1: $Object): T;
        checked(): $Config;
        removeAll(arg0: $UnmodifiableConfig): void;
        /**
         * @deprecated
         */
        valueMap(): $Map<string, $Object>;
        createSubConfig(): $Config;
        unmodifiable(): $UnmodifiableConfig;
    }
    export class $CommentedConfig {
        static fake(arg0: $Config): $CommentedConfig;
        static wrap(arg0: $Map_<string, $Object>, arg1: $ConfigFormat<never>): $CommentedConfig;
        static of(arg0: $Supplier_<$Map<string, $Object>>, arg1: $ConfigFormat<$CommentedConfig>): $CommentedConfig;
        static of(arg0: $ConfigFormat<$CommentedConfig>): $CommentedConfig;
        static copy(arg0: $UnmodifiableConfig): $CommentedConfig;
        static copy(arg0: $UnmodifiableConfig, arg1: $ConfigFormat<never>): $CommentedConfig;
        static copy(arg0: $UnmodifiableCommentedConfig): $CommentedConfig;
        static copy(arg0: $UnmodifiableConfig, arg1: $Supplier_<$Map<string, $Object>>): $CommentedConfig;
        static copy(arg0: $UnmodifiableCommentedConfig, arg1: $ConfigFormat<never>): $CommentedConfig;
        static copy(arg0: $UnmodifiableCommentedConfig, arg1: $Supplier_<$Map<string, $Object>>): $CommentedConfig;
        static copy(arg0: $UnmodifiableCommentedConfig, arg1: $Supplier_<$Map<string, $Object>>, arg2: $ConfigFormat<$CommentedConfig>): $CommentedConfig;
        static copy(arg0: $UnmodifiableConfig, arg1: $Supplier_<$Map<string, $Object>>, arg2: $ConfigFormat<never>): $CommentedConfig;
        static inMemory(): $CommentedConfig;
        /**
         * @deprecated
         */
        static ofConcurrent(arg0: $ConfigFormat<$CommentedConfig>): $CommentedConfig;
        /**
         * @deprecated
         */
        static inMemoryConcurrent(): $CommentedConfig;
        /**
         * @deprecated
         */
        static concurrentCopy(arg0: $UnmodifiableCommentedConfig, arg1: $ConfigFormat<never>): $CommentedConfig;
        /**
         * @deprecated
         */
        static concurrentCopy(arg0: $UnmodifiableCommentedConfig): $CommentedConfig;
        /**
         * @deprecated
         */
        static concurrentCopy(arg0: $UnmodifiableConfig, arg1: $ConfigFormat<never>): $CommentedConfig;
        /**
         * @deprecated
         */
        static concurrentCopy(arg0: $UnmodifiableConfig): $CommentedConfig;
    }
    export interface $CommentedConfig extends $UnmodifiableCommentedConfig, $Config {
        entrySet(): $Set<$CommentedConfig$Entry>;
        checked(): $CommentedConfig;
        setComment(arg0: string, arg1: string): string;
        setComment(arg0: $List_<string>, arg1: string): string;
        createSubConfig(): $CommentedConfig;
        putAllComments(arg0: $UnmodifiableCommentedConfig): void;
        putAllComments(arg0: $Map_<string, $UnmodifiableCommentedConfig$CommentNode>): void;
        /**
         * @deprecated
         */
        commentMap(): $Map<string, string>;
        removeComment(arg0: $List_<string>): string;
        removeComment(arg0: string): string;
        clearComments(): void;
        unmodifiable(): $UnmodifiableConfig;
    }
    export class $CommentedConfig$Entry {
    }
    export interface $CommentedConfig$Entry extends $Config$Entry, $UnmodifiableCommentedConfig$Entry {
        setComment(arg0: string): string;
        removeComment(): string;
        set comment(value: string);
    }
    export class $ConfigSpec$CorrectionAction extends $Enum<$ConfigSpec$CorrectionAction> {
        static values(): $ConfigSpec$CorrectionAction[];
        static valueOf(arg0: string): $ConfigSpec$CorrectionAction;
        static ADD: $ConfigSpec$CorrectionAction;
        static REMOVE: $ConfigSpec$CorrectionAction;
        static REPLACE: $ConfigSpec$CorrectionAction;
    }
    /**
     * Values that may be interpreted as {@link $ConfigSpec$CorrectionAction}.
     */
    export type $ConfigSpec$CorrectionAction_ = "add" | "replace" | "remove";
    export class $UnmodifiableConfig$Entry {
    }
    export interface $UnmodifiableConfig$Entry {
        getByte(): number;
        getShort(): number;
        getChar(): string;
        getInt(): number;
        getLong(): number;
        getValue<T>(): T;
        getKey(): string;
        isNull(): boolean;
        getRawValue<T>(): T;
        getOptional<T>(): (T) | undefined;
        getOrElse<T>(arg0: T): T;
        getOptionalInt(): $OptionalInt;
        getIntOrElse(arg0: number): number;
        getOptionalLong(): $OptionalLong;
        getLongOrElse(arg0: number): number;
        getByteOrElse(arg0: number): number;
        getShortOrElse(arg0: number): number;
        getCharOrElse(arg0: string): string;
        get byte(): number;
        get short(): number;
        get char(): string;
        get int(): number;
        get long(): number;
        get value(): T;
        get key(): string;
        get null(): boolean;
        get rawValue(): T;
        get optional(): (T) | undefined;
        get optionalInt(): $OptionalInt;
        get optionalLong(): $OptionalLong;
    }
    export class $ConfigFormat<C extends $Config> {
    }
    export interface $ConfigFormat<C extends $Config> {
        createConfig(arg0: $Supplier_<$Map<string, $Object>>): C;
        createConfig(): C;
        createWriter(): $ConfigWriter;
        createParser(): $ConfigParser<C>;
        createConcurrentConfig(): C;
        supportsComments(): boolean;
        supportsType(arg0: $Class<never>): boolean;
        isInMemory(): boolean;
        initEmptyFile(arg0: $Writer): void;
        initEmptyFile(arg0: $WriterSupplier_): void;
        initEmptyFile(arg0: $File_): void;
        initEmptyFile(arg0: $Path_): void;
        get inMemory(): boolean;
    }
    export class $ConfigSpec$CorrectionListener {
    }
    export interface $ConfigSpec$CorrectionListener {
        onCorrect(arg0: $ConfigSpec$CorrectionAction_, arg1: $List_<string>, arg2: $Object, arg3: $Object): void;
    }
    /**
     * Values that may be interpreted as {@link $ConfigSpec$CorrectionListener}.
     */
    export type $ConfigSpec$CorrectionListener_ = ((arg0: $ConfigSpec$CorrectionAction, arg1: $List<string>, arg2: $Object, arg3: $Object) => void);
    export class $UnmodifiableConfig {
    }
    export interface $UnmodifiableConfig {
        size(): number;
        get<T>(arg0: string): T;
        get<T>(arg0: $List_<string>): T;
        getByte(arg0: $List_<string>): number;
        getByte(arg0: string): number;
        getShort(arg0: string): number;
        getShort(arg0: $List_<string>): number;
        getChar(arg0: string): string;
        getChar(arg0: $List_<string>): string;
        getInt(arg0: string): number;
        getInt(arg0: $List_<string>): number;
        getLong(arg0: $List_<string>): number;
        getLong(arg0: string): number;
        isEmpty(): boolean;
        apply<T>(arg0: string): T;
        apply<T>(arg0: $List_<string>): T;
        contains(arg0: $List_<string>): boolean;
        contains(arg0: string): boolean;
        entrySet(): $Set<$UnmodifiableConfig$Entry>;
        isNull(arg0: string): boolean;
        isNull(arg0: $List_<string>): boolean;
        /**
         * @deprecated
         */
        valueMap(): $Map<string, $Object>;
        getRaw<T>(arg0: string): T;
        getRaw<T>(arg0: $List_<string>): T;
        getOptional<T>(arg0: string): (T) | undefined;
        getOptional<T>(arg0: $List_<string>): (T) | undefined;
        getOrElse<T>(arg0: $List_<string>, arg1: T): T;
        getOrElse<T>(arg0: $List_<string>, arg1: $Supplier_<T>): T;
        getOrElse<T>(arg0: string, arg1: T): T;
        getOrElse<T>(arg0: string, arg1: $Supplier_<T>): T;
        getEnum<T extends $Enum<T>>(arg0: string, arg1: $Class<T>, arg2: $EnumGetMethod_): T;
        getEnum<T extends $Enum<T>>(arg0: string, arg1: $Class<T>): T;
        getEnum<T extends $Enum<T>>(arg0: $List_<string>, arg1: $Class<T>, arg2: $EnumGetMethod_): T;
        getEnum<T extends $Enum<T>>(arg0: $List_<string>, arg1: $Class<T>): T;
        getOptionalEnum<T extends $Enum<T>>(arg0: string, arg1: $Class<T>): (T) | undefined;
        getOptionalEnum<T extends $Enum<T>>(arg0: $List_<string>, arg1: $Class<T>, arg2: $EnumGetMethod_): (T) | undefined;
        getOptionalEnum<T extends $Enum<T>>(arg0: $List_<string>, arg1: $Class<T>): (T) | undefined;
        getOptionalEnum<T extends $Enum<T>>(arg0: string, arg1: $Class<T>, arg2: $EnumGetMethod_): (T) | undefined;
        getEnumOrElse<T extends $Enum<T>>(arg0: string, arg1: T): T;
        getEnumOrElse<T extends $Enum<T>>(arg0: $List_<string>, arg1: T, arg2: $EnumGetMethod_): T;
        getEnumOrElse<T extends $Enum<T>>(arg0: $List_<string>, arg1: T): T;
        getEnumOrElse<T extends $Enum<T>>(arg0: string, arg1: T, arg2: $EnumGetMethod_): T;
        getEnumOrElse<T extends $Enum<T>>(arg0: string, arg1: $Class<T>, arg2: $Supplier_<T>): T;
        getEnumOrElse<T extends $Enum<T>>(arg0: $List_<string>, arg1: $Class<T>, arg2: $Supplier_<T>): T;
        getEnumOrElse<T extends $Enum<T>>(arg0: $List_<string>, arg1: $Class<T>, arg2: $EnumGetMethod_, arg3: $Supplier_<T>): T;
        getEnumOrElse<T extends $Enum<T>>(arg0: string, arg1: $Class<T>, arg2: $EnumGetMethod_, arg3: $Supplier_<T>): T;
        getOptionalInt(arg0: $List_<string>): $OptionalInt;
        getOptionalInt(arg0: string): $OptionalInt;
        getIntOrElse(arg0: string, arg1: $IntSupplier_): number;
        getIntOrElse(arg0: $List_<string>, arg1: $IntSupplier_): number;
        getIntOrElse(arg0: $List_<string>, arg1: number): number;
        getIntOrElse(arg0: string, arg1: number): number;
        getOptionalLong(arg0: $List_<string>): $OptionalLong;
        getOptionalLong(arg0: string): $OptionalLong;
        getLongOrElse(arg0: string, arg1: $LongSupplier_): number;
        getLongOrElse(arg0: string, arg1: number): number;
        getLongOrElse(arg0: $List_<string>, arg1: $LongSupplier_): number;
        getLongOrElse(arg0: $List_<string>, arg1: number): number;
        getByteOrElse(arg0: string, arg1: number): number;
        getByteOrElse(arg0: $List_<string>, arg1: number): number;
        getShortOrElse(arg0: string, arg1: number): number;
        getShortOrElse(arg0: $List_<string>, arg1: number): number;
        getCharOrElse(arg0: $List_<string>, arg1: string): string;
        getCharOrElse(arg0: string, arg1: string): string;
        configFormat(): $ConfigFormat<never>;
        get empty(): boolean;
    }
    export class $UnmodifiableCommentedConfig$Entry {
    }
    export interface $UnmodifiableCommentedConfig$Entry extends $UnmodifiableConfig$Entry {
        getComment(): string;
        get comment(): string;
    }
    export class $UnmodifiableCommentedConfig {
        static fake(arg0: $UnmodifiableConfig): $UnmodifiableCommentedConfig;
    }
    export interface $UnmodifiableCommentedConfig extends $UnmodifiableConfig {
        entrySet(): $Set<$UnmodifiableCommentedConfig$Entry>;
        getComment(arg0: string): string;
        getComment(arg0: $List_<string>): string;
        /**
         * @deprecated
         */
        commentMap(): $Map<string, string>;
        getOptionalComment(arg0: string): (string) | undefined;
        getOptionalComment(arg0: $List_<string>): (string) | undefined;
        containsComment(arg0: $List_<string>): boolean;
        containsComment(arg0: string): boolean;
        getComments(arg0: $Map_<string, $UnmodifiableCommentedConfig$CommentNode>): void;
        getComments(): $Map<string, $UnmodifiableCommentedConfig$CommentNode>;
    }
    export class $Config$Entry {
    }
    export interface $Config$Entry extends $UnmodifiableConfig$Entry {
        setValue<T>(arg0: $Object): T;
        set value(value: $Object);
    }
    export class $EnumGetMethod extends $Enum<$EnumGetMethod> {
        isOrdinalOk(): boolean;
        get<T extends $Enum<T>>(arg0: $Object, arg1: $Class<T>): T;
        static values(): $EnumGetMethod[];
        static valueOf(arg0: string): $EnumGetMethod;
        validate<T extends $Enum<T>>(arg0: $Object, arg1: $Class<T>): boolean;
        isCaseSensitive(): boolean;
        static NAME_IGNORECASE: $EnumGetMethod;
        static ORDINAL_OR_NAME: $EnumGetMethod;
        static ORDINAL_OR_NAME_IGNORECASE: $EnumGetMethod;
        static NAME: $EnumGetMethod;
        get ordinalOk(): boolean;
        get caseSensitive(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EnumGetMethod}.
     */
    export type $EnumGetMethod_ = "name" | "name_ignorecase" | "ordinal_or_name" | "ordinal_or_name_ignorecase";
}
