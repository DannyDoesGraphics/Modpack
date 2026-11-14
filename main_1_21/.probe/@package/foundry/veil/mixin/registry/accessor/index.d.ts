import { $Lifecycle } from "@package/com/mojang/serialization";
import { $RegistryDataLoader$Loader, $ResourceKey_, $RegistryDataLoader$Loader_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Exception } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/foundry/veil/mixin/registry/accessor" {
    export class $RegistryDataAccessor {
    }
    export interface $RegistryDataAccessor {
        invokeCreate(arg0: $Lifecycle, arg1: $Map_<$ResourceKey_<never>, $Exception>): $RegistryDataLoader$Loader<never>;
    }
    /**
     * Values that may be interpreted as {@link $RegistryDataAccessor}.
     */
    export type $RegistryDataAccessor_ = ((arg0: $Lifecycle, arg1: $Map<$ResourceKey<never>, $Exception>) => $RegistryDataLoader$Loader_<never>);
}
