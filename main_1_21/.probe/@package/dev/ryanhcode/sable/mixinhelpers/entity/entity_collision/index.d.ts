import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntityCollisionContext } from "@package/net/minecraft/world/phys/shapes";

declare module "@package/dev/ryanhcode/sable/mixinhelpers/entity/entity_collision" {
    export class $TheFasterEntityCollisionContext extends $EntityCollisionContext {
        constructor(arg0: $Entity);
    }
}
