import { $Entity } from "@package/net/minecraft/world/entity";
import { $TransientEntitySectionManager } from "@package/net/minecraft/world/level/entity";

declare module "@package/net/caffeinemc/mods/lithium/common/client" {
    export class $ClientWorldAccessor {
    }
    export interface $ClientWorldAccessor {
        lithium$getEntityManager(): $TransientEntitySectionManager<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $ClientWorldAccessor}.
     */
    export type $ClientWorldAccessor_ = (() => $TransientEntitySectionManager<$Entity>);
}
