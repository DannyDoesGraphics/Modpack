import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $PackageOrderWithCrafts, $PackageOrderWithCrafts_ } from "@package/com/simibubi/create/content/logistics/stockTicker";

declare module "@package/com/simibubi/create/api/packager/unpacking" {
    export class $UnpackingHandler {
        static DEFAULT: $UnpackingHandler;
        static REGISTRY: $SimpleRegistry<$Block, $UnpackingHandler>;
    }
    export interface $UnpackingHandler {
        unpack(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $List_<$ItemStack_>, arg5: $PackageOrderWithCrafts_, arg6: boolean): boolean;
    }
    /**
     * Values that may be interpreted as {@link $UnpackingHandler}.
     */
    export type $UnpackingHandler_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $Direction, arg4: $List<$ItemStack>, arg5: $PackageOrderWithCrafts, arg6: boolean) => boolean);
    export class $VoidingUnpackingHandler extends $Enum<$VoidingUnpackingHandler> implements $UnpackingHandler {
        static values(): $VoidingUnpackingHandler[];
        static valueOf(arg0: string): $VoidingUnpackingHandler;
        unpack(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $List_<$ItemStack_>, arg5: $PackageOrderWithCrafts_, arg6: boolean): boolean;
        static INSTANCE: $VoidingUnpackingHandler;
    }
    /**
     * Values that may be interpreted as {@link $VoidingUnpackingHandler}.
     */
    export type $VoidingUnpackingHandler_ = "instance";
}
