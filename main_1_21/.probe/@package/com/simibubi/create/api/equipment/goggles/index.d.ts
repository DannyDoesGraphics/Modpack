import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $List_ } from "@package/java/util";

declare module "@package/com/simibubi/create/api/equipment/goggles" {
    export class $IHaveHoveringInformation {
    }
    export interface $IHaveHoveringInformation extends $IHaveCustomOverlayIcon {
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
    }
    export class $IHaveGoggleInformation {
    }
    export interface $IHaveGoggleInformation extends $IHaveCustomOverlayIcon {
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
    }
    export class $IProxyHoveringInformation {
    }
    export interface $IProxyHoveringInformation {
        getInformationSource(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $IProxyHoveringInformation}.
     */
    export type $IProxyHoveringInformation_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState) => $BlockPos_);
    export class $IHaveCustomOverlayIcon {
    }
    export interface $IHaveCustomOverlayIcon {
        getIcon(arg0: boolean): $ItemStack;
    }
}
