import { $GridEvent } from "@package/appeng/api/networking/events";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";

declare module "@package/appeng/api/networking/events/statistics" {
    export class $GridChunkEvent$GridChunkRemoved extends $GridChunkEvent {
        constructor(arg0: $ServerLevel, arg1: $ChunkPos);
    }
    export class $GridChunkEvent$GridChunkAdded extends $GridChunkEvent {
        constructor(arg0: $ServerLevel, arg1: $ChunkPos);
    }
    export class $GridChunkEvent extends $GridStatisticsEvent {
        getChunkPos(): $ChunkPos;
        getLevel(): $ServerLevel;
        constructor(arg0: $ServerLevel, arg1: $ChunkPos);
        get chunkPos(): $ChunkPos;
        get level(): $ServerLevel;
    }
    export class $GridStatisticsEvent extends $GridEvent {
        constructor();
    }
}
