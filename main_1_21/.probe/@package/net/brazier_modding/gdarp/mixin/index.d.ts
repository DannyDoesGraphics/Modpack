import { $PackSelectionConfig, $PackSelectionConfig_ } from "@package/net/minecraft/server/packs";

declare module "@package/net/brazier_modding/gdarp/mixin" {
    export class $PackAccessor {
    }
    export interface $PackAccessor {
        globalPacks_getSelectionConfig(): $PackSelectionConfig;
        globalPacks_setSelectionConfig(arg0: $PackSelectionConfig_): void;
    }
}
