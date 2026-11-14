import { $Level } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $Record } from "@package/java/lang";
import { $Vec2, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/server/chase" {
    export class $ChaseServer {
        start(): void;
        stop(): void;
        constructor(serverBindAddress: string, serverPort: number, playerList: $PlayerList, broadcastIntervalMs: number);
    }
    export class $ChaseClient {
        run(): void;
        start(): void;
        stop(): void;
        constructor(serverHost: string, serverPort: number, server: $MinecraftServer);
    }
    export class $ChaseClient$TeleportTarget extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChaseClient$TeleportTarget}.
     */
    export type $ChaseClient$TeleportTarget_ = { rot?: $Vec2, pos?: $Vec3_, level?: $ResourceKey_<$Level>,  } | [rot?: $Vec2, pos?: $Vec3_, level?: $ResourceKey_<$Level>, ];
    export class $ChaseServer$PlayerPosition extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChaseServer$PlayerPosition}.
     */
    export type $ChaseServer$PlayerPosition_ = { xRot?: number, z?: number, y?: number, x?: number, yRot?: number, dimensionName?: string,  } | [xRot?: number, z?: number, y?: number, x?: number, yRot?: number, dimensionName?: string, ];
}
