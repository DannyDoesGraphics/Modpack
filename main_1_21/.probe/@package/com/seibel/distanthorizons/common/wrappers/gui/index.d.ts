import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $WidgetSprites, $Button$OnPress_, $Button } from "@package/net/minecraft/client/gui/components";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/com/seibel/distanthorizons/common/wrappers/gui" {
    export class $TexturedButtonWidget_neoforge extends $Button {
        renderWidget(matrices: $GuiGraphics, mouseX: number, mouseY: number, delta: number): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        renderBackground: boolean;
        static DEFAULT_SPACING: number;
        constructor(x: number, y: number, width: number, height: number, u: number, v: number, hoveredVOffset: number, textureResourceLocation: $ResourceLocation_, textureWidth: number, textureHeight: number, pressAction: $Button$OnPress_, text: $Component_);
        constructor(x: number, y: number, width: number, height: number, u: number, v: number, hoveredVOffset: number, textureResourceLocation: $ResourceLocation_, textureWidth: number, textureHeight: number, pressAction: $Button$OnPress_, text: $Component_, renderBackground: boolean);
    }
}
