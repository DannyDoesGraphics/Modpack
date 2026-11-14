import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";

declare module "@package/com/agent772/createshufflefilter/mixins" {
    export class $BlockEntityBehaviourAccessor {
    }
    export interface $BlockEntityBehaviourAccessor {
        getBlockEntity(): $SmartBlockEntity;
        get blockEntity(): $SmartBlockEntity;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityBehaviourAccessor}.
     */
    export type $BlockEntityBehaviourAccessor_ = (() => $SmartBlockEntity);
}
