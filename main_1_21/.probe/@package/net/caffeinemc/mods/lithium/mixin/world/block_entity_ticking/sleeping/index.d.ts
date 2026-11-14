import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping" {
    export class $WrappedBlockEntityTickInvokerAccessor {
    }
    export interface $WrappedBlockEntityTickInvokerAccessor {
        getWrapped(): $TickingBlockEntity;
        callSetWrapped(arg0: $TickingBlockEntity): void;
        get wrapped(): $TickingBlockEntity;
    }
}
