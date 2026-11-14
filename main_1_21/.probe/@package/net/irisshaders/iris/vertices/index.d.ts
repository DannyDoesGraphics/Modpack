
declare module "@package/net/irisshaders/iris/vertices" {
    export class $MojangBufferAccessor {
    }
    export interface $MojangBufferAccessor {
        getPointer(): number;
        get pointer(): number;
    }
    /**
     * Values that may be interpreted as {@link $MojangBufferAccessor}.
     */
    export type $MojangBufferAccessor_ = (() => number);
    export class $BlockSensitiveBufferBuilder {
    }
    export interface $BlockSensitiveBufferBuilder {
        beginBlock(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        endBlock(): void;
        overrideBlock(arg0: number): void;
        restoreBlock(): void;
        ignoreMidBlock(arg0: boolean): void;
    }
}
