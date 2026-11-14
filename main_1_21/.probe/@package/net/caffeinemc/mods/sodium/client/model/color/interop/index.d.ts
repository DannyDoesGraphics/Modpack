import { $ReferenceSet, $Reference2ReferenceMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockColors, $BlockColor } from "@package/net/minecraft/client/color/block";
import { $ItemColor, $ItemColor_ } from "@package/net/minecraft/client/color/item";
import { $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/net/caffeinemc/mods/sodium/client/model/color/interop" {
    export class $BlockColorsExtension {
        static getOverridenVanillaBlocks(arg0: $BlockColors): $ReferenceSet<$Block>;
        static getProviders(arg0: $BlockColors): $Reference2ReferenceMap<$Block, $BlockColor>;
    }
    export interface $BlockColorsExtension {
        sodium$getOverridenVanillaBlocks(): $ReferenceSet<$Block>;
        sodium$getProviders(): $Reference2ReferenceMap<$Block, $BlockColor>;
    }
    export class $ItemColorsExtension {
    }
    export interface $ItemColorsExtension {
        sodium$getColorProvider(arg0: $ItemStack_): $ItemColor;
    }
    /**
     * Values that may be interpreted as {@link $ItemColorsExtension}.
     */
    export type $ItemColorsExtension_ = ((arg0: $ItemStack) => $ItemColor_);
}
