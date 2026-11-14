import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AttributeModifier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Set } from "@package/java/util";

declare module "@package/io/wispforest/accessories_compat/curios/mixin/accessories" {
    export class $AccessoriesContainerImplAccessor {
    }
    export interface $AccessoriesContainerImplAccessor {
        persistentModifiers(): $Set<$AttributeModifier>;
        cachedModifiers(): $Set<$AttributeModifier>;
        modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
    }
}
