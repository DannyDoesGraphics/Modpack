import { $ExportableResourceProvider, $ResourceExporter } from "@package/guideme/siteexport";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $GuideTooltip } from "@package/guideme/document/interaction";
import { $LytBlock } from "@package/guideme/document/block";

declare module "@package/guideme/scene/annotation" {
    export class $SceneAnnotation implements $ExportableResourceProvider {
        hasTooltip(): boolean;
        setTooltipContent(arg0: $LytBlock): void;
        setTooltipContent(arg0: $Component_): void;
        exportResources(arg0: $ResourceExporter): void;
        setHovered(arg0: boolean): void;
        getTooltip(): $GuideTooltip;
        isHovered(): boolean;
        setTooltip(arg0: $GuideTooltip): void;
        constructor();
    }
}
