import { $Guide } from "@package/guideme";
import { $Path_ } from "@package/java/nio/file";
import { $SiteExporter } from "@package/guideme/internal/siteexport";
import { $Minecraft } from "@package/net/minecraft/client";

declare module "@package/appeng/siteexport" {
    export class $AESiteExporter extends $SiteExporter {
        constructor(arg0: $Minecraft, arg1: $Path_, arg2: $Guide);
    }
}
