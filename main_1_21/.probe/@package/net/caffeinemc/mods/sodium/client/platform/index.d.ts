
declare module "@package/net/caffeinemc/mods/sodium/client/platform" {
    export class $NativeWindowHandle {
    }
    export interface $NativeWindowHandle {
        getWin32Handle(): number;
        get win32Handle(): number;
    }
    /**
     * Values that may be interpreted as {@link $NativeWindowHandle}.
     */
    export type $NativeWindowHandle_ = (() => number);
}
