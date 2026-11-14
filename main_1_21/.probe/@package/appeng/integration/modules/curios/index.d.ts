import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $EntityCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/appeng/integration/modules/curios" {
    export class $CuriosIntegration {
        static ITEM_HANDLER: $EntityCapability<$IItemHandler, void>;
        constructor();
    }
}
