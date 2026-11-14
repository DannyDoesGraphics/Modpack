import { $SpectatorMenu, $SpectatorMenuListener } from "@package/net/minecraft/client/gui/spectator";
import { $Minecraft } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/spectator" {
    export class $SpectatorGui implements $SpectatorMenuListener {
        renderHotbar(guiGraphics: $GuiGraphics): void;
        renderTooltip(guiGraphics: $GuiGraphics): void;
        onHotbarSelected(slot: number): void;
        onMouseMiddleClick(): void;
        isMenuActive(): boolean;
        onMouseScrolled(slot: number): void;
        onSpectatorMenuClosed(menu: $SpectatorMenu): void;
        constructor(minecraft: $Minecraft);
        get menuActive(): boolean;
    }
}
