import { $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $DeferredSupplier } from "@package/dev/architectury/registry/registries";

declare module "@package/dev/architectury/impl" {
    export class $ItemPropertiesExtensionImpl {
    }
    export interface $ItemPropertiesExtensionImpl {
        arch$getTab(): $CreativeModeTab;
        arch$getTabSupplier(): $DeferredSupplier<$CreativeModeTab>;
    }
}
