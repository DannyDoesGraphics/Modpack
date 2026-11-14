import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";

declare module "@package/net/pinkcats/createlazytick/mixin/OptElement/itemdrain" {
    export class $ItemDrainAccessor {
    }
    export interface $ItemDrainAccessor {
        setHeldItem(arg0: $TransportedItemStack): void;
        getProcessingTicks(): number;
        setProcessingTicks(arg0: number): void;
        invokeContinueProcessing(): boolean;
        getHeldItem(): $TransportedItemStack;
    }
}
