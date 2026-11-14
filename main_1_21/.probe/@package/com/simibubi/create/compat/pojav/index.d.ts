import { $TitleScreen } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $WarningScreen } from "@package/net/minecraft/client/gui/screens/multiplayer";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";
import { $ScreenEvent$Init$Post } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/simibubi/create/compat/pojav" {
    export class $PojavWarningScreen extends $WarningScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static QUIT: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static NARRATION: $Component;
        static CONTINUE: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static TITLE: $Component;
        static CONTENT: $Component;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $TitleScreen);
    }
    export class $PojavChecker {
        static onScreenInit(arg0: $ScreenEvent$Init$Post): void;
        static init(): void;
        static IS_PRESENT: boolean;
        constructor();
    }
}
