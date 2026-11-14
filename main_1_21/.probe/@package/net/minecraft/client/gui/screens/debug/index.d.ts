import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractWidget, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/debug" {
    export class $GameModeSwitcherScreen$GameModeIcon extends $Enum<$GameModeSwitcherScreen$GameModeIcon> {
    }
    /**
     * Values that may be interpreted as {@link $GameModeSwitcherScreen$GameModeIcon}.
     */
    export type $GameModeSwitcherScreen$GameModeIcon_ = "creative" | "survival" | "adventure" | "spectator";
    export class $GameModeSwitcherScreen extends $Screen {
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
        constructor();
    }
    export class $GameModeSwitcherScreen$GameModeSlot extends $AbstractWidget {
        setSelected(isSelected: boolean): void;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(icon: $GameModeSwitcherScreen, x: $GameModeSwitcherScreen$GameModeIcon_, y: number, arg3: number);
        set selected(value: boolean);
    }
}
