import { $DataComponentMap, $DataComponentMap_ } from "@package/net/minecraft/core/component";

declare module "@package/io/wispforest/owo/mixin/ext" {
    export class $ComponentMapImplAccessor {
    }
    export interface $ComponentMapImplAccessor {
        owo$setBaseComponents(arg0: $DataComponentMap_): void;
        owo$getBaseComponents(): $DataComponentMap;
    }
}
