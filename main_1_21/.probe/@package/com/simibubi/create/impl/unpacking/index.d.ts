import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Enum } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $PackageOrderWithCrafts_ } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $UnpackingHandler } from "@package/com/simibubi/create/api/packager/unpacking";

declare module "@package/com/simibubi/create/impl/unpacking" {
    export class $DefaultUnpackingHandler extends $Enum<$DefaultUnpackingHandler> implements $UnpackingHandler {
        static values(): $DefaultUnpackingHandler[];
        static valueOf(arg0: string): $DefaultUnpackingHandler;
        unpack(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $List_<$ItemStack_>, arg5: $PackageOrderWithCrafts_, arg6: boolean): boolean;
        static INSTANCE: $DefaultUnpackingHandler;
    }
    /**
     * Values that may be interpreted as {@link $DefaultUnpackingHandler}.
     */
    export type $DefaultUnpackingHandler_ = "instance";
    export class $CrafterUnpackingHandler extends $Enum<$CrafterUnpackingHandler> implements $UnpackingHandler {
        static values(): $CrafterUnpackingHandler[];
        static valueOf(arg0: string): $CrafterUnpackingHandler;
        unpack(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $List_<$ItemStack_>, arg5: $PackageOrderWithCrafts_, arg6: boolean): boolean;
        static INSTANCE: $CrafterUnpackingHandler;
    }
    /**
     * Values that may be interpreted as {@link $CrafterUnpackingHandler}.
     */
    export type $CrafterUnpackingHandler_ = "instance";
    export class $BasinUnpackingHandler extends $Enum<$BasinUnpackingHandler> implements $UnpackingHandler {
        static values(): $BasinUnpackingHandler[];
        static valueOf(arg0: string): $BasinUnpackingHandler;
        unpack(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $List_<$ItemStack_>, arg5: $PackageOrderWithCrafts_, arg6: boolean): boolean;
        static INSTANCE: $BasinUnpackingHandler;
    }
    /**
     * Values that may be interpreted as {@link $BasinUnpackingHandler}.
     */
    export type $BasinUnpackingHandler_ = "instance";
}
