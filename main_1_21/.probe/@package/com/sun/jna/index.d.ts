import { $Closeable, $File } from "@package/java/io";
import { $IntStream } from "@package/java/util/stream";
import { $Method } from "@package/java/lang/reflect";
import { $ClassLoader, $Number, $CharSequence, $Comparable, $Object, $Class } from "@package/java/lang";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
export * as platform from "@package/com/sun/jna/platform";
export * as ptr from "@package/com/sun/jna/ptr";
export * as win32 from "@package/com/sun/jna/win32";

declare module "@package/com/sun/jna" {
    export class $Memory extends $Pointer implements $Closeable {
        size(): number;
        clear(): void;
        close(): void;
        dump(): string;
        valid(): boolean;
        static purge(): void;
        align(arg0: number): $Memory;
        static disposeAll(): void;
        static NULL: $Pointer;
        constructor(arg0: number);
    }
    export class $Library {
        static OPTION_CALLING_CONVENTION: string;
        static OPTION_SYMBOL_PROVIDER: string;
        static OPTION_STRUCTURE_ALIGNMENT: string;
        static OPTION_FUNCTION_MAPPER: string;
        static OPTION_OPEN_FLAGS: string;
        static OPTION_CLASSLOADER: string;
        static OPTION_TYPE_MAPPER: string;
        static OPTION_INVOCATION_MAPPER: string;
        static OPTION_STRING_ENCODING: string;
        static OPTION_ALLOW_OBJECTS: string;
    }
    export interface $Library {
    }
    export class $Function$PostCallRead {
    }
    export interface $Function$PostCallRead {
        read(): void;
    }
    /**
     * Values that may be interpreted as {@link $Function$PostCallRead}.
     */
    export type $Function$PostCallRead_ = (() => void);
    export class $Structure$ByReference {
    }
    export interface $Structure$ByReference {
    }
    export class $IntegerType extends $Number implements $NativeMapped {
        static compare(arg0: number, arg1: number): number;
        static compare<T extends $IntegerType>(arg0: T, arg1: T): number;
        static compare(arg0: $IntegerType, arg1: number): number;
        setValue(arg0: number): void;
        toNative(): $Object;
        nativeType(): $Class<never>;
        fromNative(arg0: $Object, arg1: $FromNativeContext): $Object;
        constructor(arg0: number, arg1: number, arg2: boolean);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: boolean);
        constructor(arg0: number);
        set value(value: number);
    }
    export class $NativeLong extends $IntegerType {
        static SIZE: number;
        constructor(arg0: number, arg1: boolean);
        constructor(arg0: number);
        constructor();
    }
    export class $PointerType implements $NativeMapped {
        getPointer(): $Pointer;
        setPointer(arg0: $Pointer): void;
        toNative(): $Object;
        nativeType(): $Class<never>;
        fromNative(arg0: $Object, arg1: $FromNativeContext): $Object;
    }
    export class $WString implements $CharSequence, $Comparable<any> {
        length(): number;
        compareTo(arg0: $Object): number;
        charAt(arg0: number): string;
        subSequence(arg0: number, arg1: number): $CharSequence;
        isEmpty(): boolean;
        codePoints(): $IntStream;
        chars(): $IntStream;
        constructor(arg0: string);
        get empty(): boolean;
    }
    export class $FromNativeContext {
        getTargetType(): $Class<never>;
        get targetType(): $Class<never>;
    }
    export class $Callback {
        static METHOD_NAME: string;
        static FORBIDDEN_NAMES: $List<string>;
    }
    export interface $Callback {
    }
    export class $Structure$ByValue {
    }
    export interface $Structure$ByValue {
    }
    export class $StringArray extends $Memory implements $Function$PostCallRead {
        read(): void;
        static NULL: $Pointer;
        constructor(arg0: $WString[]);
        constructor(arg0: string[], arg1: string);
        constructor(arg0: string[], arg1: boolean);
        constructor(arg0: string[]);
    }
    export class $Pointer {
        share(arg0: number, arg1: number): $Pointer;
        share(arg0: number): $Pointer;
        indexOf(arg0: number, arg1: number): number;
        getByte(arg0: number): number;
        getShort(arg0: number): number;
        getChar(arg0: number): string;
        getInt(arg0: number): number;
        getLong(arg0: number): number;
        getFloat(arg0: number): number;
        getDouble(arg0: number): number;
        clear(arg0: number): void;
        write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        write(arg0: number, arg1: $Pointer[], arg2: number, arg3: number): void;
        write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        write(arg0: number, arg1: string[], arg2: number, arg3: number): void;
        write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        read(arg0: number, arg1: string[], arg2: number, arg3: number): void;
        read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        read(arg0: number, arg1: $Pointer[], arg2: number, arg3: number): void;
        read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        setByte(arg0: number, arg1: number): void;
        setChar(arg0: number, arg1: string): void;
        setShort(arg0: number, arg1: number): void;
        setInt(arg0: number, arg1: number): void;
        setLong(arg0: number, arg1: number): void;
        setFloat(arg0: number, arg1: number): void;
        setDouble(arg0: number, arg1: number): void;
        dump(arg0: number, arg1: number): string;
        setMemory(arg0: number, arg1: number, arg2: number): void;
        getByteBuffer(arg0: number, arg1: number): $ByteBuffer;
        getStringArray(arg0: number, arg1: number, arg2: string): string[];
        getStringArray(arg0: number, arg1: string): string[];
        getStringArray(arg0: number, arg1: number): string[];
        getStringArray(arg0: number): string[];
        getString(arg0: number): string;
        getString(arg0: number, arg1: string): string;
        static createConstant(arg0: number): $Pointer;
        static createConstant(arg0: number): $Pointer;
        getPointer(arg0: number): $Pointer;
        setPointer(arg0: number, arg1: $Pointer): void;
        getByteArray(arg0: number, arg1: number): number[];
        getIntArray(arg0: number, arg1: number): number[];
        getLongArray(arg0: number, arg1: number): number[];
        getWideString(arg0: number): string;
        setWideString(arg0: number, arg1: string): void;
        getNativeLong(arg0: number): $NativeLong;
        getCharArray(arg0: number, arg1: number): string[];
        getShortArray(arg0: number, arg1: number): number[];
        getFloatArray(arg0: number, arg1: number): number[];
        getDoubleArray(arg0: number, arg1: number): number[];
        getPointerArray(arg0: number): $Pointer[];
        getPointerArray(arg0: number, arg1: number): $Pointer[];
        getWideStringArray(arg0: number, arg1: number): string[];
        getWideStringArray(arg0: number): string[];
        setNativeLong(arg0: number, arg1: $NativeLong): void;
        setString(arg0: number, arg1: string, arg2: string): void;
        setString(arg0: number, arg1: $WString): void;
        setString(arg0: number, arg1: string): void;
        static nativeValue(arg0: $Pointer, arg1: number): void;
        static nativeValue(arg0: $Pointer): number;
        static NULL: $Pointer;
        constructor(arg0: number);
    }
    export class $NativeLibrary implements $Closeable {
        getName(): string;
        static getInstance(arg0: string, arg1: $ClassLoader): $NativeLibrary;
        static getInstance(arg0: string, arg1: $Map_<string, never>): $NativeLibrary;
        static getInstance(arg0: string): $NativeLibrary;
        close(): void;
        getFunction(arg0: string): $Function;
        getFunction(arg0: string, arg1: number): $Function;
        getFunction(arg0: string, arg1: number, arg2: string): $Function;
        getFile(): $File;
        /**
         * @deprecated
         */
        dispose(): void;
        getOptions(): $Map<string, never>;
        static getProcess(arg0: $Map_<string, never>): $NativeLibrary;
        static getProcess(): $NativeLibrary;
        static addSearchPath(arg0: string, arg1: string): void;
        getGlobalVariableAddress(arg0: string): $Pointer;
        get name(): string;
        get file(): $File;
        get options(): $Map<string, never>;
    }
    export class $Structure {
        size(): number;
        toString(arg0: boolean): string;
        clear(): void;
        toArray(arg0: $Structure[]): $Structure[];
        toArray(arg0: number): $Structure[];
        static newInstance<T extends $Structure>(arg0: $Class<T>, arg1: $Pointer): T;
        static newInstance<T extends $Structure>(arg0: $Class<T>): T;
        write(): void;
        read(): void;
        readField(arg0: string): $Object;
        getPointer(): $Pointer;
        static autoRead(arg0: $Structure[]): void;
        autoRead(): void;
        static autoWrite(arg0: $Structure[]): void;
        autoWrite(): void;
        writeField(arg0: string, arg1: $Object): void;
        writeField(arg0: string): void;
        static createFieldsOrder(arg0: string): $List<string>;
        static createFieldsOrder(...arg0: string[]): $List<string>;
        static createFieldsOrder(arg0: $List_<string>, arg1: $List_<string>): $List<string>;
        static createFieldsOrder(arg0: $List_<string>, ...arg1: string[]): $List<string>;
        dataEquals(arg0: $Structure, arg1: boolean): boolean;
        dataEquals(arg0: $Structure): boolean;
        setAutoSynch(arg0: boolean): void;
        setAutoRead(arg0: boolean): void;
        getAutoRead(): boolean;
        setAutoWrite(arg0: boolean): void;
        getAutoWrite(): boolean;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        get pointer(): $Pointer;
        set autoSynch(value: boolean);
    }
    export class $AltCallingConvention {
    }
    export interface $AltCallingConvention {
    }
    export class $FunctionMapper {
    }
    export interface $FunctionMapper {
        getFunctionName(arg0: $NativeLibrary, arg1: $Method): string;
    }
    /**
     * Values that may be interpreted as {@link $FunctionMapper}.
     */
    export type $FunctionMapper_ = ((arg0: $NativeLibrary, arg1: $Method) => string);
    export class $Union extends $Structure {
        getTypedValue(arg0: $Class<never>): $Object;
        setTypedValue(arg0: $Object): $Object;
        setType(arg0: string): void;
        setType(arg0: $Class<never>): void;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
    }
    export class $Function extends $Pointer {
        invoke(arg0: $Class<never>, arg1: $Object[], arg2: $Map_<string, never>): $Object;
        invoke(arg0: $Class<never>, arg1: $Object[]): $Object;
        invoke(arg0: $Object[]): void;
        getName(): string;
        static getFunction(arg0: string, arg1: string, arg2: number, arg3: string): $Function;
        static getFunction(arg0: string, arg1: string, arg2: number): $Function;
        static getFunction(arg0: string, arg1: string): $Function;
        static getFunction(arg0: $Pointer): $Function;
        static getFunction(arg0: $Pointer, arg1: number, arg2: string): $Function;
        static getFunction(arg0: $Pointer, arg1: number): $Function;
        invokeInt(arg0: $Object[]): number;
        invokeLong(arg0: $Object[]): number;
        invokeVoid(arg0: $Object[]): void;
        invokeFloat(arg0: $Object[]): number;
        invokeDouble(arg0: $Object[]): number;
        invokePointer(arg0: $Object[]): $Pointer;
        invokeObject(arg0: $Object[]): $Object;
        getCallingConvention(): number;
        invokeString(arg0: $Object[], arg1: boolean): string;
        static NULL: $Pointer;
        static USE_VARARGS: number;
        static C_CONVENTION: number;
        static THROW_LAST_ERROR: number;
        static MAX_NARGS: number;
        static ALT_CONVENTION: number;
        get name(): string;
        get callingConvention(): number;
    }
    export class $NativeMapped {
    }
    export interface $NativeMapped {
        toNative(): $Object;
        nativeType(): $Class<never>;
        fromNative(arg0: $Object, arg1: $FromNativeContext): $Object;
    }
}
