import { $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $BlockColor, $BlockColor_ } from "@package/net/minecraft/client/color/block";
import { $ItemColor, $ItemColor_ } from "@package/net/minecraft/client/color/item";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/fuzs/puzzleslib/neoforge/mixin/client/accessor" {
    export class $BlockColorsNeoForgeAccessor {
    }
    export interface $BlockColorsNeoForgeAccessor {
        puzzleslib$getBlockColors(): $Map<$Block, $BlockColor>;
    }
    /**
     * Values that may be interpreted as {@link $BlockColorsNeoForgeAccessor}.
     */
    export type $BlockColorsNeoForgeAccessor_ = (() => $Map_<$Block_, $BlockColor_>);
    export class $ItemColorsNeoForgeAccessor {
    }
    export interface $ItemColorsNeoForgeAccessor {
        puzzleslib$getItemColors(): $Map<$Item, $ItemColor>;
    }
    /**
     * Values that may be interpreted as {@link $ItemColorsNeoForgeAccessor}.
     */
    export type $ItemColorsNeoForgeAccessor_ = (() => $Map_<$Item_, $ItemColor_>);
}
