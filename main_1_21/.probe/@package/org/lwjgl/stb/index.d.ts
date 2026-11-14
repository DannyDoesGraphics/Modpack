import { $FFICIF } from "@package/org/lwjgl/system/libffi";
import { $CallbackI, $Callback } from "@package/org/lwjgl/system";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/org/lwjgl/stb" {
    export class $STBIWriteCallbackI {
        static CIF: $FFICIF;
    }
    export interface $STBIWriteCallbackI extends $CallbackI {
        invoke(arg0: number, arg1: number, arg2: number): void;
        getCallInterface(): $FFICIF;
        callback(arg0: number, arg1: number): void;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $STBIWriteCallbackI}.
     */
    export type $STBIWriteCallbackI_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $STBIWriteCallback extends $Callback implements $STBIWriteCallbackI {
        static create(arg0: number): $STBIWriteCallback;
        static create(arg0: $STBIWriteCallbackI_): $STBIWriteCallback;
        static getData(arg0: number, arg1: number): $ByteBuffer;
        static createSafe(arg0: number): $STBIWriteCallback;
        getCallInterface(): $FFICIF;
        callback(arg0: number, arg1: number): void;
        get callInterface(): $FFICIF;
    }
}
