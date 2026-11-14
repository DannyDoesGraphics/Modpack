import { $GlObject } from "@package/net/caffeinemc/mods/sodium/client/gl";

declare module "@package/net/caffeinemc/mods/sodium/client/gl/array" {
    export class $GlVertexArray extends $GlObject {
        static NULL_ARRAY_ID: number;
        constructor();
    }
}
