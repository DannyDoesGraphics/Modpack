import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AbstractButton } from "@package/net/minecraft/client/gui/components";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Event } from "@package/net/fabricmc/fabric/api/event";
export * as components from "@package/io/wispforest/accessories/client/gui/components";

declare module "@package/io/wispforest/accessories/client/gui" {
    export class $AbstractButtonExtension {
    }
    export interface $AbstractButtonExtension {
        getRenderingEvent(): $Event<$ButtonEvents$AdjustRendering>;
        adjustRendering<B extends $AbstractButton>(event: $ButtonEvents$AdjustRendering_): B;
        get renderingEvent(): $Event<$ButtonEvents$AdjustRendering>;
    }
    /**
     * Values that may be interpreted as {@link $AbstractButtonExtension}.
     */
    export type $AbstractButtonExtension_ = (() => $Event<$ButtonEvents$AdjustRendering>);
    export class $ButtonEvents$AdjustRendering {
    }
    export interface $ButtonEvents$AdjustRendering {
        render(arg0: $AbstractButton, arg1: $GuiGraphics, arg2: $ResourceLocation_, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ButtonEvents$AdjustRendering}.
     */
    export type $ButtonEvents$AdjustRendering_ = ((arg0: $AbstractButton, arg1: $GuiGraphics, arg2: $ResourceLocation, arg3: number, arg4: number, arg5: number, arg6: number) => boolean);
}
