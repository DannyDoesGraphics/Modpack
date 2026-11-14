import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemColorsExtension } from "@package/net/caffeinemc/mods/sodium/client/model/color/interop";
import { $ItemColorsNeoForgeAccessor } from "@package/fuzs/puzzleslib/neoforge/mixin/client/accessor";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $Map } from "@package/java/util";

declare module "@package/net/minecraft/client/color/item" {
    export class $ItemColors implements $ItemColorsExtension, $ItemColorsNeoForgeAccessor {
        sodium$getColorProvider(arg0: $ItemStack_): $ItemColor;
        /**
         * @deprecated
         */
        register(itemColor: $ItemColor_, ...items: $ItemLike_[]): void;
        static createDefault(colors: $BlockColors): $ItemColors;
        getColor(stack: $ItemStack_, tintIndex: number): number;
        puzzleslib$getItemColors(): $Map<$Item, $ItemColor>;
        constructor();
    }
    export class $ItemColor {
    }
    export interface $ItemColor {
        getColor(stack: $ItemStack_, tintIndex: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ItemColor}.
     */
    export type $ItemColor_ = ((arg0: $ItemStack, arg1: number) => number);
}
