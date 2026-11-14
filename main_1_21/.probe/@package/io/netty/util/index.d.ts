import { $Comparable, $Object, $Enum, $Class } from "@package/java/lang";
export * as concurrent from "@package/io/netty/util/concurrent";

declare module "@package/io/netty/util" {
    export class $ByteProcessor {
        static FIND_NUL: $ByteProcessor;
        static FIND_COMMA: $ByteProcessor;
        static FIND_CR: $ByteProcessor;
        static FIND_ASCII_SPACE: $ByteProcessor;
        static FIND_NON_CR: $ByteProcessor;
        static FIND_NON_CRLF: $ByteProcessor;
        static FIND_LF: $ByteProcessor;
        static FIND_LINEAR_WHITESPACE: $ByteProcessor;
        static FIND_NON_LINEAR_WHITESPACE: $ByteProcessor;
        static FIND_SEMI_COLON: $ByteProcessor;
        static FIND_NON_NUL: $ByteProcessor;
        static FIND_CRLF: $ByteProcessor;
        static FIND_NON_LF: $ByteProcessor;
    }
    export interface $ByteProcessor {
        process(arg0: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ByteProcessor}.
     */
    export type $ByteProcessor_ = ((arg0: number) => boolean);
    export class $ResourceLeakDetector$Level extends $Enum<$ResourceLeakDetector$Level> {
        static values(): $ResourceLeakDetector$Level[];
        static valueOf(arg0: string): $ResourceLeakDetector$Level;
        static DISABLED: $ResourceLeakDetector$Level;
        static PARANOID: $ResourceLeakDetector$Level;
        static SIMPLE: $ResourceLeakDetector$Level;
        static ADVANCED: $ResourceLeakDetector$Level;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLeakDetector$Level}.
     */
    export type $ResourceLeakDetector$Level_ = "disabled" | "simple" | "advanced" | "paranoid";
    export class $Constant<T extends $Constant<T>> {
    }
    export interface $Constant<T extends $Constant<T>> extends $Comparable<T> {
        name(): string;
        id(): number;
    }
    export class $Attribute<T> {
    }
    export interface $Attribute<T> {
        setIfAbsent(arg0: T): T;
        /**
         * @deprecated
         */
        getAndRemove(): T;
        /**
         * @deprecated
         */
        remove(): void;
        get(): T;
        set(arg0: T): void;
        key(): $AttributeKey<T>;
        compareAndSet(arg0: T, arg1: T): boolean;
        getAndSet(arg0: T): T;
        set ifAbsent(value: T);
        get andRemove(): T;
    }
    export class $ReferenceCounted {
    }
    export interface $ReferenceCounted {
        retain(arg0: number): $ReferenceCounted;
        retain(): $ReferenceCounted;
        refCnt(): number;
        release(): boolean;
        release(arg0: number): boolean;
        touch(arg0: $Object): $ReferenceCounted;
        touch(): $ReferenceCounted;
    }
    export class $AttributeKey<T> extends $AbstractConstant<$AttributeKey<T>> {
        static valueOf<T>(arg0: string): $AttributeKey<T>;
        static valueOf<T>(arg0: $Class<never>, arg1: string): $AttributeKey<T>;
        static newInstance<T>(arg0: string): $AttributeKey<T>;
        static exists(arg0: string): boolean;
    }
    export class $AttributeMap {
    }
    export interface $AttributeMap {
        hasAttr<T>(arg0: $AttributeKey<T>): boolean;
        attr<T>(arg0: $AttributeKey<T>): $Attribute<T>;
    }
    export class $IntSupplier {
    }
    export interface $IntSupplier {
        get(): number;
    }
    /**
     * Values that may be interpreted as {@link $IntSupplier}.
     */
    export type $IntSupplier_ = (() => number);
    export class $AbstractConstant<T extends $AbstractConstant<T>> implements $Constant<T> {
        name(): string;
        compareTo(arg0: T): number;
        id(): number;
    }
}
