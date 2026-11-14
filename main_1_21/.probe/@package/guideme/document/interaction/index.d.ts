import { $ExportableResourceProvider } from "@package/guideme/siteexport";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $List } from "@package/java/util";

declare module "@package/guideme/document/interaction" {
    export class $GuideTooltip {
    }
    export interface $GuideTooltip extends $ExportableResourceProvider {
        getIcon(): $ItemStack;
        getLines(): $List<$ClientTooltipComponent>;
        get icon(): $ItemStack;
        get lines(): $List<$ClientTooltipComponent>;
    }
}
