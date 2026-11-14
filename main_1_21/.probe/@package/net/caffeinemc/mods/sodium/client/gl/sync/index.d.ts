
declare module "@package/net/caffeinemc/mods/sodium/client/gl/sync" {
    export class $GlFence {
        "delete"(): void;
        sync(arg0: number): void;
        sync(): void;
        isCompleted(): boolean;
        constructor(arg0: number);
        get completed(): boolean;
    }
}
