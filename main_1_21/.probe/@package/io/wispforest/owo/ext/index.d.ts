import { $DataComponentPatch$Builder, $DataComponentMap_ } from "@package/net/minecraft/core/component";

declare module "@package/io/wispforest/owo/ext" {
    export class $OwoItem {
    }
    export interface $OwoItem {
        deriveStackComponents(source: $DataComponentMap_, target: $DataComponentPatch$Builder): void;
    }
}
