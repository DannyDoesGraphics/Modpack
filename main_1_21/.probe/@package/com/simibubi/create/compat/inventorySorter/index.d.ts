import { $IEventBus } from "@package/net/neoforged/bus/api";

declare module "@package/com/simibubi/create/compat/inventorySorter" {
    export class $InventorySorterCompat {
        static init(arg0: $IEventBus): void;
        static SLOT_BLACKLIST: string;
        constructor();
    }
}
