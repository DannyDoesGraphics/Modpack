import { $BindableTexture } from "@package/net/createmod/catnip/render";
import { $AbstractSimiScreenAccessor } from "@package/com/hlysine/create_connected/mixin/sequencedgearshift";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Collection_, $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $Couple } from "@package/net/createmod/catnip/data";
export * as widget from "@package/net/createmod/catnip/gui/widget";
export * as element from "@package/net/createmod/catnip/gui/element";

declare module "@package/net/createmod/catnip/gui" {
    export class $ILightingSettings {
        static DEFAULT_3D: $ILightingSettings;
        static DEFAULT_FLAT: $ILightingSettings;
    }
    export interface $ILightingSettings {
        applyLighting(): void;
    }
    /**
     * Values that may be interpreted as {@link $ILightingSettings}.
     */
    export type $ILightingSettings_ = (() => void);
    export class $AbstractSimiScreen extends $Screen implements $AbstractSimiScreenAccessor {
        callRemoveWidgets(arg0: $Collection_<$GuiEventListener>): void;
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
    }
    export class $NavigatableSimiScreen extends $AbstractSimiScreen {
        centerScalingOnMouse(): void;
        centerScalingOn(arg0: number, arg1: number): void;
        isEquivalentTo(arg0: $NavigatableSimiScreen): boolean;
        shareContextWith(arg0: $NavigatableSimiScreen): void;
        static isCurrentlyRenderingPreviousScreen(): boolean;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        transition: $LerpedFloat;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static COLOR_NAV_ARROW: $Couple<$Color>;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
        static get currentlyRenderingPreviousScreen(): boolean;
    }
    export class $TextureSheetSegment {
    }
    export interface $TextureSheetSegment extends $BindableTexture {
        getStartX(): number;
        getStartY(): number;
        getWidth(): number;
        getHeight(): number;
        get startX(): number;
        get startY(): number;
        get width(): number;
        get height(): number;
    }
    export class $TickableGuiEventListener {
    }
    export interface $TickableGuiEventListener extends $GuiEventListener {
        tick(): void;
    }
}
