import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $AESavedData } from "@package/appeng/core/worlddata";
import { $ServerStoppingEvent, $ServerAboutToStartEvent } from "@package/net/neoforged/neoforge/event/server";
import { $RegisterTicketControllersEvent, $LoadingValidationCallback, $TicketHelper } from "@package/net/neoforged/neoforge/common/world/chunk";
export * as compass from "@package/appeng/server/services/compass";

declare module "@package/appeng/server/services" {
    export class $ChunkLoadingService implements $LoadingValidationCallback {
        forceChunk(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $ChunkPos): boolean;
        validateTickets(arg0: $ServerLevel, arg1: $TicketHelper): void;
        releaseChunk(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $ChunkPos): boolean;
        isChunkForced(arg0: $ServerLevel, arg1: number, arg2: number): boolean;
        static getInstance(): $ChunkLoadingService;
        register(arg0: $RegisterTicketControllersEvent): void;
        onServerAboutToStart(arg0: $ServerAboutToStartEvent): void;
        onServerStopping(arg0: $ServerStoppingEvent): void;
        constructor();
        static get instance(): $ChunkLoadingService;
    }
    export class $ChunkLoadState extends $AESavedData {
    }
}
