import { $ItemStack_ } from "@package/net/minecraft/world/item";

declare module "@package/net/caffeinemc/mods/sodium/mixin/features/render/frapi" {
    export class $ItemRendererAccessor {
        static sodium$hasAnimatedTexture(arg0: $ItemStack_): boolean;
    }
    export interface $ItemRendererAccessor {
    }
}
