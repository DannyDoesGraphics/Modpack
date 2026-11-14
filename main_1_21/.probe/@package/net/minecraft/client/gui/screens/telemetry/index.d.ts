import { $DoubleConsumer_ } from "@package/java/util/function";
import { $Layout } from "@package/net/minecraft/client/gui/layouts";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Renderable, $AbstractScrollWidget } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $Options } from "@package/net/minecraft/client";
import { $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/telemetry" {
    export class $TelemetryInfoScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, options: $Options);
    }
    export class $TelemetryEventWidget extends $AbstractScrollWidget {
        onOptInChanged(optIn: boolean): void;
        setOnScrolledListener(onScrolledListener: $DoubleConsumer_ | null): void;
        updateLayout(): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(x: number, y: number, width: number, height: number, font: $Font);
        set onScrolledListener(value: $DoubleConsumer_ | null);
    }
    export class $TelemetryEventWidget$ContentBuilder {
    }
    export class $TelemetryEventWidget$Content extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $TelemetryEventWidget$Content}.
     */
    export type $TelemetryEventWidget$Content_ = { narration?: $Component_, container?: $Layout,  } | [narration?: $Component_, container?: $Layout, ];
}
