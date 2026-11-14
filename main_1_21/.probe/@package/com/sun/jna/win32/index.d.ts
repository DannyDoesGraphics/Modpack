import { $FunctionMapper, $Library, $AltCallingConvention, $Callback } from "@package/com/sun/jna";

declare module "@package/com/sun/jna/win32" {
    export class $StdCallLibrary$StdCallCallback {
    }
    export interface $StdCallLibrary$StdCallCallback extends $Callback, $StdCall {
    }
    export class $StdCall {
    }
    export interface $StdCall extends $AltCallingConvention {
    }
    export class $StdCallLibrary {
        static FUNCTION_MAPPER: $FunctionMapper;
        static STDCALL_CONVENTION: number;
    }
    export interface $StdCallLibrary extends $Library, $StdCall {
    }
}
