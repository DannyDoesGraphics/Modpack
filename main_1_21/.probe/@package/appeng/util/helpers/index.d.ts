import { $AEColor, $AEColor_ } from "@package/appeng/api/util";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $FuzzyMode_ } from "@package/appeng/api/config";

declare module "@package/appeng/util/helpers" {
    export class $ItemComparisonHelper {
        isNbtTagEqual(arg0: $CompoundTag_, arg1: $CompoundTag_): boolean;
        static isFuzzyEqualItem(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $FuzzyMode_): boolean;
        static isEqualItemType(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
    }
    export class $P2PHelper {
        toColors(arg0: number): $AEColor[];
        fromColors(arg0: $AEColor_[]): number;
        toHexDigit(arg0: $AEColor_): string;
        toColoredHexString(arg0: number): $MutableComponent;
        toHexString(arg0: number): string;
        constructor();
    }
}
