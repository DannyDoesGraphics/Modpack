import { $TheFasterEntityCollisionContext } from "@package/dev/ryanhcode/sable/mixinhelpers/entity/entity_collision";

declare module "@package/dev/ryanhcode/sable/mixinterface/entity/entity_collision" {
    export class $EntityExtension {
    }
    export interface $EntityExtension {
        sable$getCollisionContext(): $TheFasterEntityCollisionContext;
    }
    /**
     * Values that may be interpreted as {@link $EntityExtension}.
     */
    export type $EntityExtension_ = (() => $TheFasterEntityCollisionContext);
}
