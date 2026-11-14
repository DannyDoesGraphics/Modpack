import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ContainerObjectSelectionList$Entry, $ContainerObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Enum } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";
import { $UUID_, $UUID, $Collection_, $List, $Set } from "@package/java/util";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";

declare module "@package/net/minecraft/client/gui/screens/social" {
    export class $SocialInteractionsScreen$Page extends $Enum<$SocialInteractionsScreen$Page> {
        static values(): $SocialInteractionsScreen$Page[];
        static valueOf(arg0: string): $SocialInteractionsScreen$Page;
        static ALL: $SocialInteractionsScreen$Page;
        static BLOCKED: $SocialInteractionsScreen$Page;
        static HIDDEN: $SocialInteractionsScreen$Page;
    }
    /**
     * Values that may be interpreted as {@link $SocialInteractionsScreen$Page}.
     */
    export type $SocialInteractionsScreen$Page_ = "all" | "hidden" | "blocked";
    export class $PlayerEntry extends $ContainerObjectSelectionList$Entry<$PlayerEntry> {
        getPlayerName(): string;
        getPlayerId(): $UUID;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        hasRecentMessages(): boolean;
        getSkinGetter(): $Supplier<$PlayerSkin>;
        setHasRecentMessages(hasRecentMessages: boolean): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isChatReportable(): boolean;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isRemoved(): boolean;
        setRemoved(hasRecentMessages: boolean): void;
        static BG_FILL: number;
        static PLAYERNAME_COLOR: number;
        static BG_FILL_REMOVED: number;
        static SKIN_SHADE: number;
        static PLAYER_STATUS_COLOR: number;
        constructor(minecraft: $Minecraft, socialInteractionsScreen: $SocialInteractionsScreen, id: $UUID_, playerName: string, skinGetter: $Supplier_<$PlayerSkin>, playerReportable: boolean);
        get playerName(): string;
        get playerId(): $UUID;
        get skinGetter(): $Supplier<$PlayerSkin>;
        get chatReportable(): boolean;
    }
    export class $SocialInteractionsScreen extends $Screen {
        onAddPlayer(playerInfo: $PlayerInfo): void;
        onRemovePlayer(id: $UUID_): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static LIST_START: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static SEARCH_START: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
        constructor(lastScreen: $Screen | null);
    }
    export class $SocialInteractionsPlayerList extends $ContainerObjectSelectionList<$PlayerEntry> {
        addPlayer(playerInfo: $PlayerInfo, page: $SocialInteractionsScreen$Page_): void;
        removePlayer(id: $UUID_): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isEmpty(): boolean;
        setFilter(filter: string): void;
        updatePlayerList(ids: $Collection_<$UUID_>, scrollAmount: number, arg2: boolean): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        scrollAmount: number;
        constructor(socialInteractionsScreen: $SocialInteractionsScreen, minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
        get empty(): boolean;
        set filter(value: string);
    }
    export class $PlayerSocialManager {
        addPlayer(playerInfo: $PlayerInfo): void;
        removePlayer(id: $UUID_): void;
        hidePlayer(id: $UUID_): void;
        showPlayer(id: $UUID_): void;
        getDiscoveredUUID(uuid: string): $UUID;
        isHidden(id: $UUID_): boolean;
        stopOnlineMode(): void;
        isBlocked(id: $UUID_): boolean;
        shouldHideMessageFrom(id: $UUID_): boolean;
        startOnlineMode(): void;
        getHiddenPlayers(): $Set<$UUID>;
        constructor(minecraft: $Minecraft, service: $UserApiService);
        get hiddenPlayers(): $Set<$UUID>;
    }
}
