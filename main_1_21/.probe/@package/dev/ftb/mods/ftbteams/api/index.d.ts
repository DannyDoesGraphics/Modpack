import { $NameMap } from "@package/dev/ftb/mods/ftblibrary/config";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Color4I, $Icon } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $TeamPropertyCollection, $TeamProperty } from "@package/dev/ftb/mods/ftbteams/api/property";
import { $Enum } from "@package/java/lang";
import { $UUID_, $UUID, $List, $Map, $Collection, $Set } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as property from "@package/dev/ftb/mods/ftbteams/api/property";
export * as event from "@package/dev/ftb/mods/ftbteams/api/event";

declare module "@package/dev/ftb/mods/ftbteams/api" {
    export class $TeamRank extends $Enum<$TeamRank> implements $StringRepresentable {
        isEnemyOrWorse(): boolean;
        isNoneOrBetter(): boolean;
        getPower(): number;
        isMemberOrBetter(): boolean;
        isAllyOrBetter(): boolean;
        isOfficerOrBetter(): boolean;
        isInvitedOrBetter(): boolean;
        isOwner(): boolean;
        static values(): $TeamRank[];
        static valueOf(name: string): $TeamRank;
        getDisplayName(): $Component;
        getIcon(): ($Icon) | undefined;
        isAtLeast(rank: $TeamRank_): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static OWNER: $TeamRank;
        static INVITED: $TeamRank;
        static ALLY: $TeamRank;
        static NAME_MAP: $NameMap<$TeamRank>;
        static ENEMY: $TeamRank;
        static OFFICER: $TeamRank;
        static NONE: $TeamRank;
        static MEMBER: $TeamRank;
        get enemyOrWorse(): boolean;
        get noneOrBetter(): boolean;
        get power(): number;
        get memberOrBetter(): boolean;
        get allyOrBetter(): boolean;
        get officerOrBetter(): boolean;
        get invitedOrBetter(): boolean;
        get owner(): boolean;
        get displayName(): $Component;
        get icon(): ($Icon) | undefined;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TeamRank}.
     */
    export type $TeamRank_ = "enemy" | "none" | "ally" | "invited" | "member" | "officer" | "owner";
    export class $Team {
    }
    export interface $Team {
        markDirty(): void;
        sendMessage(arg0: $UUID_, arg1: string): void;
        sendMessage(arg0: $UUID_, arg1: $Component_): void;
        getOnlineMembers(): $Collection<$ServerPlayer>;
        getTeamId(): $UUID;
        syncOnePropertyToTeam<T>(arg0: $TeamProperty<T>, arg1: T): void;
        isPartyTeam(): boolean;
        getTypeTranslationKey(): string;
        isClientTeam(): boolean;
        getColoredName(): $Component;
        createParty(arg0: string, arg1: $Color4I): $Team;
        syncOnePropertyToAll<T>(arg0: $MinecraftServer, arg1: $TeamProperty<T>, arg2: T): void;
        getShortName(): string;
        isPlayerTeam(): boolean;
        isServerTeam(): boolean;
        getMessageHistory(): $List<$TeamMessage>;
        getRankForPlayer(arg0: $UUID_): $TeamRank;
        getTeamInfo(): $List<$Component>;
        getPlayersByRank(arg0: $TeamRank_): $Map<$UUID, $TeamRank>;
        getExtraData(): $CompoundTag;
        getName(): $Component;
        getProperty<T>(arg0: $TeamProperty<T>): T;
        setProperty<T>(arg0: $TeamProperty<T>, arg1: T): void;
        getProperties(): $TeamPropertyCollection;
        getId(): $UUID;
        getOwner(): $UUID;
        isValid(): boolean;
        getMembers(): $Set<$UUID>;
        get onlineMembers(): $Collection<$ServerPlayer>;
        get teamId(): $UUID;
        get partyTeam(): boolean;
        get typeTranslationKey(): string;
        get clientTeam(): boolean;
        get coloredName(): $Component;
        get shortName(): string;
        get playerTeam(): boolean;
        get serverTeam(): boolean;
        get messageHistory(): $List<$TeamMessage>;
        get teamInfo(): $List<$Component>;
        get extraData(): $CompoundTag;
        get name(): $Component;
        get properties(): $TeamPropertyCollection;
        get id(): $UUID;
        get owner(): $UUID;
        get valid(): boolean;
        get members(): $Set<$UUID>;
    }
    export class $TeamMessage {
    }
    export interface $TeamMessage {
        sender(): $UUID;
        text(): $Component;
        date(): number;
    }
}
