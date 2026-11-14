import { $PanoramaRenderer, $CubeMap } from "@package/net/minecraft/client/renderer";
import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $WidgetSprites, $Button, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";
import { $ScreenEvent$Init$Post } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/simibubi/create/infrastructure/gui" {
    export class $OpenCreateMenuButton$MenuRows {
        static MAIN_MENU: $OpenCreateMenuButton$MenuRows;
        static INGAME_MENU: $OpenCreateMenuButton$MenuRows;
        constructor(arg0: $List_<$OpenCreateMenuButton$SingleMenuRow_>);
    }
    export class $OpenCreateMenuButton$OpenConfigButtonHandler {
        static onGuiInit(arg0: $ScreenEvent$Init$Post): void;
        constructor();
    }
    export class $CreateMainMenuScreen$PlatformIconButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
    }
    export class $OpenCreateMenuButton$SingleMenuRow extends $Record {
        leftTextKey(): string;
        rightTextKey(): string;
        constructor(arg0: string);
        constructor(leftTextKey: string, rightTextKey: string);
    }
    /**
     * Values that may be interpreted as {@link $OpenCreateMenuButton$SingleMenuRow}.
     */
    export type $OpenCreateMenuButton$SingleMenuRow_ = { leftTextKey?: string, rightTextKey?: string,  } | [leftTextKey?: string, rightTextKey?: string, ];
    export class $CreateMainMenuScreen extends $AbstractSimiScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static ISSUE_TRACKER_LINK: string;
        static SUPPORT_LINK: string;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static PANORAMA_OVERLAY_TEXTURES: $ResourceLocation;
        static PANORAMA_RESOURCES: $CubeMap;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static CURSEFORGE_LINK: string;
        static MODRINTH_LINK: string;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen);
    }
    export class $OpenCreateMenuButton extends $Button {
        static click(arg0: $Button): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: number, arg1: number);
    }
}
