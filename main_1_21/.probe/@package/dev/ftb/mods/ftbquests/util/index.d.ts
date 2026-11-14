import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $UUID_, $Date, $UUID } from "@package/java/util";
import { $QuestObjectBase } from "@package/dev/ftb/mods/ftbquests/quest";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/ftb/mods/ftbquests/util" {
    export class $ProgressChange {
        getPlayerId(): $UUID;
        shouldReset(): boolean;
        shouldNotify(): boolean;
        maybeForceProgress(teamId: $UUID_): void;
        static createServerSide(origin: number, reset: boolean, playerId: $UUID_, notifications: boolean): $ProgressChange;
        setReset(reset: boolean): $ProgressChange;
        withNotifications(): $ProgressChange;
        getDate(): $Date;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ProgressChange>;
        constructor(origin: $QuestObjectBase, playerId: $UUID_);
        get playerId(): $UUID;
        set reset(value: boolean);
        get date(): $Date;
    }
}
