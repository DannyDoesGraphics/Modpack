import { $BeltBlockEntity } from "@package/com/simibubi/create/content/kinetics/belt";
import { $List } from "@package/java/util";
import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";

declare module "@package/net/pinkcats/createlazytick/mixin/OptElement/belt" {
    export class $BeltInventoryAccessor {
    }
    export interface $BeltInventoryAccessor {
        getItems(): $List<$TransportedItemStack>;
        getBeltMovementPositive(): boolean;
        getBelt(): $BeltBlockEntity;
        getToInsert(): $List<$TransportedItemStack>;
        getToRemove(): $List<$TransportedItemStack>;
        get items(): $List<$TransportedItemStack>;
        get beltMovementPositive(): boolean;
        get belt(): $BeltBlockEntity;
        get toInsert(): $List<$TransportedItemStack>;
        get toRemove(): $List<$TransportedItemStack>;
    }
}
