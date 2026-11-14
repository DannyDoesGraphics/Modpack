import { $Instant } from "@package/java/time";
import { $GameType_ } from "@package/net/minecraft/world/level";
import { $GameConfig$QuickPlayData_ } from "@package/net/minecraft/client/main";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Enum, $Record } from "@package/java/lang";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/client/quickplay" {
    export class $QuickPlayLog$QuickPlayWorld extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $QuickPlayLog$QuickPlayWorld}.
     */
    export type $QuickPlayLog$QuickPlayWorld_ = { id?: string, type?: $QuickPlayLog$Type_, name?: string,  } | [id?: string, type?: $QuickPlayLog$Type_, name?: string, ];
    export class $QuickPlay {
        static connect(minecraft: $Minecraft, quickPlayData: $GameConfig$QuickPlayData_, realmsClient: $RealmsClient): void;
        static ERROR_TITLE: $Component;
        constructor();
    }
    export class $QuickPlayLog {
        log(minecraft: $Minecraft): void;
        static of(path: string | null): $QuickPlayLog;
        setWorldData(type: $QuickPlayLog$Type_, id: string, name: string): void;
    }
    export class $QuickPlayLog$QuickPlayEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $QuickPlayLog$QuickPlayEntry}.
     */
    export type $QuickPlayLog$QuickPlayEntry_ = { quickPlayWorld?: $QuickPlayLog$QuickPlayWorld_, lastPlayedTime?: $Instant, gamemode?: $GameType_,  } | [quickPlayWorld?: $QuickPlayLog$QuickPlayWorld_, lastPlayedTime?: $Instant, gamemode?: $GameType_, ];
    export class $QuickPlayLog$Type extends $Enum<$QuickPlayLog$Type> implements $StringRepresentable {
        static values(): $QuickPlayLog$Type[];
        static valueOf(arg0: string): $QuickPlayLog$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static MULTIPLAYER: $QuickPlayLog$Type;
        static SINGLEPLAYER: $QuickPlayLog$Type;
        static REALMS: $QuickPlayLog$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $QuickPlayLog$Type}.
     */
    export type $QuickPlayLog$Type_ = "singleplayer" | "multiplayer" | "realms";
}
