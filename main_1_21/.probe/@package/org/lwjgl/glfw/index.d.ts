import { $FFICIF } from "@package/org/lwjgl/system/libffi";
import { $ByteBuffer } from "@package/java/nio";
import { $Struct, $StructBuffer, $CallbackI } from "@package/org/lwjgl/system";

declare module "@package/org/lwjgl/glfw" {
    export class $GLFWVidMode extends $Struct<$GLFWVidMode> {
        static create(arg0: number): $GLFWVidMode;
        static create(arg0: number, arg1: number): $GLFWVidMode$Buffer;
        width(): number;
        height(): number;
        redBits(): number;
        greenBits(): number;
        blueBits(): number;
        static nredBits(arg0: number): number;
        static ngreenBits(arg0: number): number;
        static nblueBits(arg0: number): number;
        static nrefreshRate(arg0: number): number;
        static createSafe(arg0: number): $GLFWVidMode;
        static createSafe(arg0: number, arg1: number): $GLFWVidMode$Buffer;
        static nwidth(arg0: number): number;
        static nheight(arg0: number): number;
        refreshRate(): number;
        static ALIGNOF: number;
        static SIZEOF: number;
        static GREENBITS: number;
        static WIDTH: number;
        static REFRESHRATE: number;
        static HEIGHT: number;
        static REDBITS: number;
        static BLUEBITS: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $GLFWMouseButtonCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWMouseButtonCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number, arg3: number): void;
        getCallInterface(): $FFICIF;
        callback(arg0: number, arg1: number): void;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWMouseButtonCallbackI}.
     */
    export type $GLFWMouseButtonCallbackI_ = ((arg0: number, arg1: number, arg2: number, arg3: number) => void);
    export class $GLFWErrorCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWErrorCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        callback(arg0: number, arg1: number): void;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWErrorCallbackI}.
     */
    export type $GLFWErrorCallbackI_ = ((arg0: number, arg1: number) => void);
    export class $GLFWVidMode$Buffer extends $StructBuffer<$GLFWVidMode, $GLFWVidMode$Buffer> {
        width(): number;
        height(): number;
        redBits(): number;
        greenBits(): number;
        blueBits(): number;
        refreshRate(): number;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $GLFWKeyCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWKeyCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getCallInterface(): $FFICIF;
        callback(arg0: number, arg1: number): void;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWKeyCallbackI}.
     */
    export type $GLFWKeyCallbackI_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => void);
    export class $GLFWDropCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWDropCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number): void;
        getCallInterface(): $FFICIF;
        callback(arg0: number, arg1: number): void;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWDropCallbackI}.
     */
    export type $GLFWDropCallbackI_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $GLFWCharModsCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWCharModsCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number): void;
        getCallInterface(): $FFICIF;
        callback(arg0: number, arg1: number): void;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWCharModsCallbackI}.
     */
    export type $GLFWCharModsCallbackI_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $GLFWCursorPosCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWCursorPosCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number): void;
        getCallInterface(): $FFICIF;
        callback(arg0: number, arg1: number): void;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWCursorPosCallbackI}.
     */
    export type $GLFWCursorPosCallbackI_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $GLFWScrollCallbackI {
        static CIF: $FFICIF;
    }
    export interface $GLFWScrollCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number): void;
        getCallInterface(): $FFICIF;
        callback(arg0: number, arg1: number): void;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $GLFWScrollCallbackI}.
     */
    export type $GLFWScrollCallbackI_ = ((arg0: number, arg1: number, arg2: number) => void);
}
