import { $CreativeModeTab$ItemDisplayParameters_, $CreativeModeTab$ItemDisplayParameters } from "@package/net/minecraft/world/item";

declare module "@package/com/hlysine/create_connected/mixin/featuretoggle" {
    export class $CreativeModeTabsAccessor {
        static callBuildAllTabContents(arg0: $CreativeModeTab$ItemDisplayParameters_): void;
        static getCACHED_PARAMETERS(): $CreativeModeTab$ItemDisplayParameters;
        static get CACHED_PARAMETERS(): $CreativeModeTab$ItemDisplayParameters;
    }
    export interface $CreativeModeTabsAccessor {
    }
}
