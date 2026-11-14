export * as buffer from "@package/net/caffeinemc/mods/sodium/client/gl/buffer";
export * as tessellation from "@package/net/caffeinemc/mods/sodium/client/gl/tessellation";
export * as util from "@package/net/caffeinemc/mods/sodium/client/gl/util";
export * as array from "@package/net/caffeinemc/mods/sodium/client/gl/array";
export * as device from "@package/net/caffeinemc/mods/sodium/client/gl/device";
export * as attribute from "@package/net/caffeinemc/mods/sodium/client/gl/attribute";
export * as arena from "@package/net/caffeinemc/mods/sodium/client/gl/arena";
export * as sync from "@package/net/caffeinemc/mods/sodium/client/gl/sync";

declare module "@package/net/caffeinemc/mods/sodium/client/gl" {
    export class $GlObject {
        invalidateHandle(): void;
        handle(): number;
    }
}
