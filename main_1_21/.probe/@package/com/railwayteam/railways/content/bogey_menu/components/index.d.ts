import { $WidgetSprites, $Button$OnPress_, $Button } from "@package/net/minecraft/client/gui/components";

declare module "@package/com/railwayteam/railways/content/bogey_menu/components" {
    export class $BogeyMenuButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Button$OnPress_);
    }
}
