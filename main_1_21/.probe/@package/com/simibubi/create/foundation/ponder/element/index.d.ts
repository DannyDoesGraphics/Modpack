import { $ParrotElementImpl, $TrackedElementBase } from "@package/net/createmod/ponder/foundation/element";
import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";

declare module "@package/com/simibubi/create/foundation/ponder/element" {
    export class $ExpandedParrotElement extends $ParrotElementImpl {
        setConductor(arg0: boolean): void;
        set conductor(value: boolean);
    }
    export class $BeltItemElement extends $TrackedElementBase<$TransportedItemStack> {
        constructor(arg0: $TransportedItemStack);
    }
}
