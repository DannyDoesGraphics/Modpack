import { $BiConsumer_ } from "@package/java/util/function";
import { $TickableGuiEventListener } from "@package/net/createmod/catnip/gui";
import { $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $List } from "@package/java/util";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Runnable_ } from "@package/java/lang";
import { $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/net/createmod/catnip/gui/widget" {
    export class $AbstractSimiWidget extends $AbstractWidget implements $TickableGuiEventListener {
        atZLevel<T extends $AbstractSimiWidget>(arg0: number): T;
        withCallback<T extends $AbstractSimiWidget>(arg0: $Runnable_): T;
        withCallback<T extends $AbstractSimiWidget>(arg0: $BiConsumer_<number, number>): T;
        runCallback(arg0: number, arg1: number): void;
        tick(): void;
        setActive<T extends $AbstractSimiWidget>(arg0: boolean): T;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        getToolTip(): $List<$Component>;
        static COLOR_SUCCESS: $Couple<$Color>;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        static COLOR_CLICK: $Couple<$Color>;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        static COLOR_DISABLED: $Couple<$Color>;
        static COLOR_FAIL: $Couple<$Color>;
        get toolTip(): $List<$Component>;
    }
}
