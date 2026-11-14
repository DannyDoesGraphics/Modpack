import { $TooltipBuilder } from "@package/appeng/api/integrations/igtooltip";

declare module "@package/appeng/integration/modules/jade" {
    export class $ContextHelper {
    }
    export class $JadeTooltipBuilder implements $TooltipBuilder {
    }
}
