import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Multimap } from "@package/com/google/common/collect";
import { $AttributeModifier, $AttributeModifier_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";

declare module "@package/io/wispforest/accessories_compat/curios/mixin/accessor" {
    export class $CurioAttributeModifierEventAccessor {
    }
    export interface $CurioAttributeModifierEventAccessor {
        accessories$setModifiableModifiers(arg0: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>): void;
    }
    /**
     * Values that may be interpreted as {@link $CurioAttributeModifierEventAccessor}.
     */
    export type $CurioAttributeModifierEventAccessor_ = ((arg0: $Multimap<$Holder<$Attribute>, $AttributeModifier>) => void);
}
