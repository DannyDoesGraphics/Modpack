import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ClientTooltipPositioner_, $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $GuiGraphics$ScissorStack, $Font } from "@package/net/minecraft/client/gui";
import { $List_ } from "@package/java/util";
export * as access from "@package/io/wispforest/owo/mixin/ui/access";
export * as layers from "@package/io/wispforest/owo/mixin/ui/layers";

declare module "@package/io/wispforest/owo/mixin/ui" {
    export class $DrawContextInvoker {
    }
    export interface $DrawContextInvoker {
        owo$renderTooltipFromComponents(arg0: $Font, arg1: $List_<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner_): void;
        owo$getMatrices(): $PoseStack;
        owo$setMatrices(arg0: $PoseStack): void;
        owo$getScissorStack(): $GuiGraphics$ScissorStack;
        owo$setScissorStack(arg0: $GuiGraphics$ScissorStack): void;
    }
    export class $SlotAccessor {
    }
    export interface $SlotAccessor {
        owo$setX(arg0: number): void;
        owo$setY(arg0: number): void;
    }
}
