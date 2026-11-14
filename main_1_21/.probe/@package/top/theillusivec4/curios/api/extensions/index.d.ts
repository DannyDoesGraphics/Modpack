import { $SlotContext_ } from "@package/top/theillusivec4/curios/api";
import { $ItemStack_, $ItemStack, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Component } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/top/theillusivec4/curios/api/extensions" {
    export class $RegisterCuriosExtensionsEvent extends $Event implements $IModBusEvent {
        registerSlotExtension(arg0: $ICurioSlotExtension, ...arg1: string[]): void;
        isSlotExtensionRegistered(arg0: string): boolean;
        constructor();
    }
    export class $ICurioSlotExtension {
        static from(arg0: string): $ICurioSlotExtension;
        static DEFAULT: $ICurioSlotExtension;
    }
    export interface $ICurioSlotExtension {
        getCloneStack(arg0: $SlotContext_, arg1: $ItemStack_): $ItemStack;
        getDisplayStack(arg0: $SlotContext_, arg1: $ItemStack_): $ItemStack;
        getSlotTooltip(arg0: $SlotContext_, arg1: $TooltipFlag): $List<$Component>;
    }
}
