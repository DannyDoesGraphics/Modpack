import { $Level_ } from "@package/net/minecraft/world/level";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Minecraft } from "@package/net/minecraft/client";

declare module "@package/com/railwayteam/railways/events" {
    export class $CommonEvents {
        static onPlayerJoin(arg0: $ServerPlayer): void;
        static onTagsUpdated(): void;
        static onWorldTickStart(arg0: $Level_): void;
        constructor();
    }
    export class $ClientEvents {
        static onTagsUpdated(): void;
        static onClientTickStart(arg0: $Minecraft): void;
        static onClientTickEnd(arg0: $Minecraft): void;
        static onClientWorldLoad(arg0: $Level_): void;
        static onClientJoinedServer(arg0: $Minecraft): void;
        static onKeyInput(arg0: number, arg1: boolean): void;
        static previousDevCapeSetting: boolean;
        constructor();
    }
}
