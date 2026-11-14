import { $Consumer } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Team } from "@package/dev/ftb/mods/ftbteams/api";
import { $Event } from "@package/dev/architectury/event";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/dev/ftb/mods/ftbteams/api/event" {
    export class $PlayerChangedTeamEvent extends $TeamEvent {
        getPlayer(): $ServerPlayer;
        getPreviousTeam(): ($Team) | undefined;
        getPlayerId(): $UUID;
        static ADD_ALLY: $Event<$Consumer<$TeamAllyEvent>>;
        static PLAYER_LEFT_PARTY: $Event<$Consumer<$PlayerLeftPartyTeamEvent>>;
        static PLAYER_JOINED_PARTY: $Event<$Consumer<$PlayerJoinedPartyTeamEvent>>;
        static DELETED: $Event<$Consumer<$TeamEvent>>;
        static INFO: $Event<$Consumer<$TeamInfoEvent>>;
        static LOADED: $Event<$Consumer<$TeamEvent>>;
        static CLIENT_PROPERTIES_CHANGED: $Event<$Consumer<$ClientTeamPropertiesChangedEvent>>;
        static CREATED: $Event<$Consumer<$TeamCreatedEvent>>;
        static PLAYER_LOGGED_IN: $Event<$Consumer<$PlayerLoggedInAfterTeamEvent>>;
        static COLLECT_PROPERTIES: $Event<$Consumer<$TeamCollectPropertiesEvent>>;
        static SAVED: $Event<$Consumer<$TeamEvent>>;
        static OWNERSHIP_TRANSFERRED: $Event<$Consumer<$PlayerTransferredTeamOwnershipEvent>>;
        static PLAYER_CHANGED: $Event<$Consumer<$PlayerChangedTeamEvent>>;
        static REMOVE_ALLY: $Event<$Consumer<$TeamAllyEvent>>;
        static PROPERTIES_CHANGED: $Event<$Consumer<$TeamPropertiesChangedEvent>>;
        constructor(newTeam: $Team, previousTeam: $Team, playerId: $UUID_, player: $ServerPlayer);
        get player(): $ServerPlayer;
        get previousTeam(): ($Team) | undefined;
        get playerId(): $UUID;
    }
    export class $PlayerLoggedInAfterTeamEvent extends $TeamEvent {
        getPlayer(): $ServerPlayer;
        static ADD_ALLY: $Event<$Consumer<$TeamAllyEvent>>;
        static PLAYER_LEFT_PARTY: $Event<$Consumer<$PlayerLeftPartyTeamEvent>>;
        static PLAYER_JOINED_PARTY: $Event<$Consumer<$PlayerJoinedPartyTeamEvent>>;
        static DELETED: $Event<$Consumer<$TeamEvent>>;
        static INFO: $Event<$Consumer<$TeamInfoEvent>>;
        static LOADED: $Event<$Consumer<$TeamEvent>>;
        static CLIENT_PROPERTIES_CHANGED: $Event<$Consumer<$ClientTeamPropertiesChangedEvent>>;
        static CREATED: $Event<$Consumer<$TeamCreatedEvent>>;
        static PLAYER_LOGGED_IN: $Event<$Consumer<$PlayerLoggedInAfterTeamEvent>>;
        static COLLECT_PROPERTIES: $Event<$Consumer<$TeamCollectPropertiesEvent>>;
        static SAVED: $Event<$Consumer<$TeamEvent>>;
        static OWNERSHIP_TRANSFERRED: $Event<$Consumer<$PlayerTransferredTeamOwnershipEvent>>;
        static PLAYER_CHANGED: $Event<$Consumer<$PlayerChangedTeamEvent>>;
        static REMOVE_ALLY: $Event<$Consumer<$TeamAllyEvent>>;
        static PROPERTIES_CHANGED: $Event<$Consumer<$TeamPropertiesChangedEvent>>;
        constructor(t: $Team, p: $ServerPlayer);
        get player(): $ServerPlayer;
    }
    export class $TeamCreatedEvent extends $TeamEvent {
        getCreatorId(): $UUID;
        getCreator(): $ServerPlayer;
        static ADD_ALLY: $Event<$Consumer<$TeamAllyEvent>>;
        static PLAYER_LEFT_PARTY: $Event<$Consumer<$PlayerLeftPartyTeamEvent>>;
        static PLAYER_JOINED_PARTY: $Event<$Consumer<$PlayerJoinedPartyTeamEvent>>;
        static DELETED: $Event<$Consumer<$TeamEvent>>;
        static INFO: $Event<$Consumer<$TeamInfoEvent>>;
        static LOADED: $Event<$Consumer<$TeamEvent>>;
        static CLIENT_PROPERTIES_CHANGED: $Event<$Consumer<$ClientTeamPropertiesChangedEvent>>;
        static CREATED: $Event<$Consumer<$TeamCreatedEvent>>;
        static PLAYER_LOGGED_IN: $Event<$Consumer<$PlayerLoggedInAfterTeamEvent>>;
        static COLLECT_PROPERTIES: $Event<$Consumer<$TeamCollectPropertiesEvent>>;
        static SAVED: $Event<$Consumer<$TeamEvent>>;
        static OWNERSHIP_TRANSFERRED: $Event<$Consumer<$PlayerTransferredTeamOwnershipEvent>>;
        static PLAYER_CHANGED: $Event<$Consumer<$PlayerChangedTeamEvent>>;
        static REMOVE_ALLY: $Event<$Consumer<$TeamAllyEvent>>;
        static PROPERTIES_CHANGED: $Event<$Consumer<$TeamPropertiesChangedEvent>>;
        constructor(team: $Team, creator: $ServerPlayer, creatorId: $UUID_);
        get creatorId(): $UUID;
        get creator(): $ServerPlayer;
    }
}
