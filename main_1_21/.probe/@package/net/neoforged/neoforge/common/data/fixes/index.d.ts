import { $List_ } from "@package/java/util";
import { $Schema } from "@package/com/mojang/datafixers/schemas";
import { $DataFix } from "@package/com/mojang/datafixers";

declare module "@package/net/neoforged/neoforge/common/data/fixes" {
    export class $NeoForgeEntityLegacyAttributesFix extends $DataFix {
        constructor(name: string, outputSchema: $Schema, attributesToRemove: $List_<string>);
    }
}
