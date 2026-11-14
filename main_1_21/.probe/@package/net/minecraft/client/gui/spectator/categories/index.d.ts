import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $SpectatorMenuItem, $SpectatorMenu, $SpectatorMenuCategory } from "@package/net/minecraft/client/gui/spectator";
import { $Component } from "@package/net/minecraft/network/chat";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List_, $Collection_, $List } from "@package/java/util";

declare module "@package/net/minecraft/client/gui/spectator/categories" {
    export class $SpectatorPage {
        getItem(index: number): $SpectatorMenuItem;
        getSelectedSlot(): number;
        static NO_SELECTION: number;
        constructor(items: $List_<$SpectatorMenuItem>, selection: number);
        get selectedSlot(): number;
    }
    export class $TeleportToPlayerMenuCategory implements $SpectatorMenuCategory, $SpectatorMenuItem {
        getItems(): $List<$SpectatorMenuItem>;
        selectItem(menu: $SpectatorMenu): void;
        getName(): $Component;
        isEnabled(): boolean;
        renderIcon(guiGraphics: $GuiGraphics, shadeColor: number, alpha: number): void;
        getPrompt(): $Component;
        constructor();
        constructor(players: $Collection_<$PlayerInfo>);
        get items(): $List<$SpectatorMenuItem>;
        get name(): $Component;
        get enabled(): boolean;
        get prompt(): $Component;
    }
    export class $TeleportToTeamMenuCategory$TeamSelectionItem implements $SpectatorMenuItem {
    }
    export class $TeleportToTeamMenuCategory implements $SpectatorMenuCategory, $SpectatorMenuItem {
        getItems(): $List<$SpectatorMenuItem>;
        selectItem(menu: $SpectatorMenu): void;
        getName(): $Component;
        isEnabled(): boolean;
        renderIcon(guiGraphics: $GuiGraphics, shadeColor: number, alpha: number): void;
        getPrompt(): $Component;
        constructor();
        get items(): $List<$SpectatorMenuItem>;
        get name(): $Component;
        get enabled(): boolean;
        get prompt(): $Component;
    }
}
