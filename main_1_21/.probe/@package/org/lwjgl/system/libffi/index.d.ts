import { $PointerBuffer } from "@package/org/lwjgl";
import { $ByteBuffer } from "@package/java/nio";
import { $MemoryStack, $NativeResource, $Struct, $StructBuffer } from "@package/org/lwjgl/system";

declare module "@package/org/lwjgl/system/libffi" {
    export class $FFIType$Buffer extends $StructBuffer<$FFIType, $FFIType$Buffer> implements $NativeResource {
        size(arg0: number): $FFIType$Buffer;
        size(): number;
        type(): number;
        type(arg0: number): $FFIType$Buffer;
        elements(arg0: $PointerBuffer | null): $FFIType$Buffer;
        elements(arg0: number): $PointerBuffer;
        alignment(): number;
        alignment(arg0: number): $FFIType$Buffer;
        close(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FFIType extends $Struct<$FFIType> implements $NativeResource {
        static nsize(arg0: number): number;
        static nsize(arg0: number, arg1: number): void;
        size(arg0: number): $FFIType;
        size(): number;
        type(arg0: number): $FFIType;
        type(): number;
        elements(arg0: $PointerBuffer | null): $FFIType;
        elements(arg0: number): $PointerBuffer;
        set(arg0: number, arg1: number, arg2: number, arg3: $PointerBuffer | null): $FFIType;
        set(arg0: $FFIType): $FFIType;
        static create(): $FFIType;
        static create(arg0: number): $FFIType;
        static create(arg0: number, arg1: number): $FFIType$Buffer;
        static create(arg0: number): $FFIType$Buffer;
        static malloc(arg0: number): $FFIType$Buffer;
        static malloc(arg0: number, arg1: $MemoryStack): $FFIType$Buffer;
        static malloc(arg0: $MemoryStack): $FFIType;
        static malloc(): $FFIType;
        static calloc(): $FFIType;
        static calloc(arg0: number, arg1: $MemoryStack): $FFIType$Buffer;
        static calloc(arg0: number): $FFIType$Buffer;
        static calloc(arg0: $MemoryStack): $FFIType;
        static createSafe(arg0: number, arg1: number): $FFIType$Buffer;
        static createSafe(arg0: number): $FFIType;
        static nalignment(arg0: number): number;
        static nalignment(arg0: number, arg1: number): void;
        static ntype(arg0: number, arg1: number): void;
        static ntype(arg0: number): number;
        static nelements(arg0: number, arg1: $PointerBuffer | null): void;
        static nelements(arg0: number, arg1: number): $PointerBuffer;
        alignment(arg0: number): $FFIType;
        alignment(): number;
        close(): void;
        static ELEMENTS: number;
        static ALIGNMENT: number;
        static ALIGNOF: number;
        static SIZE: number;
        static SIZEOF: number;
        static TYPE: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FFICIF extends $Struct<$FFICIF> implements $NativeResource {
        flags(): number;
        bytes(): number;
        static create(arg0: number): $FFICIF$Buffer;
        static create(arg0: number, arg1: number): $FFICIF$Buffer;
        static create(arg0: number): $FFICIF;
        static create(): $FFICIF;
        rtype(): $FFIType;
        nargs(): number;
        static nrtype(arg0: number): $FFIType;
        abi(): number;
        static malloc(arg0: $MemoryStack): $FFICIF;
        static malloc(): $FFICIF;
        static malloc(arg0: number, arg1: $MemoryStack): $FFICIF$Buffer;
        static malloc(arg0: number): $FFICIF$Buffer;
        static calloc(arg0: $MemoryStack): $FFICIF;
        static calloc(arg0: number, arg1: $MemoryStack): $FFICIF$Buffer;
        static calloc(arg0: number): $FFICIF$Buffer;
        static calloc(): $FFICIF;
        static createSafe(arg0: number): $FFICIF;
        static createSafe(arg0: number, arg1: number): $FFICIF$Buffer;
        static nabi(arg0: number): number;
        static nnargs(arg0: number): number;
        static narg_types(arg0: number, arg1: number): $PointerBuffer;
        static nbytes(arg0: number): number;
        static nflags(arg0: number): number;
        arg_types(arg0: number): $PointerBuffer;
        close(): void;
        static ARG_TYPES: number;
        static BYTES: number;
        static NARGS: number;
        static ALIGNOF: number;
        static RTYPE: number;
        static SIZEOF: number;
        static ABI: number;
        static FLAGS: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FFICIF$Buffer extends $StructBuffer<$FFICIF, $FFICIF$Buffer> implements $NativeResource {
        flags(): number;
        bytes(): number;
        rtype(): $FFIType;
        nargs(): number;
        abi(): number;
        arg_types(arg0: number): $PointerBuffer;
        close(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
}
