import { $SlotContext, $SlotContext_ } from "@package/top/theillusivec4/curios/api";
import { $SlotType, $SlotReference } from "@package/io/wispforest/accessories/api/slot";

declare module "@package/io/wispforest/accessories_compat/curios/pond" {
    export class $SlotContextExtension {
        static from(slotReference: $SlotReference): $SlotContext;
        static from(ctx: $SlotContext_): $SlotContextExtension;
    }
    export interface $SlotContextExtension {
        slotType(): $SlotType;
        isClient(): boolean;
        isClient(arg0: boolean): void;
        slotReference(arg0: $SlotReference): void;
        slotReference(): $SlotReference;
    }
}
