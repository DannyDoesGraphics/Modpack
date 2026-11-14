import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $ConditionalOps } from "@package/net/neoforged/neoforge/common/conditions";
export * as worldgen from "@package/com/almostreliable/unified/mixin/neoforge/worldgen";

declare module "@package/com/almostreliable/unified/mixin/neoforge" {
    export class $ContextAwareReloadListenerAccessor {
    }
    export interface $ContextAwareReloadListenerAccessor {
        au$makeConditionalOps(): $ConditionalOps<$JsonElement>;
    }
    /**
     * Values that may be interpreted as {@link $ContextAwareReloadListenerAccessor}.
     */
    export type $ContextAwareReloadListenerAccessor_ = (() => $ConditionalOps<$JsonElement_>);
}
