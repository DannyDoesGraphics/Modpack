import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $ServerPlayer, $ServerLevel, $TicketType } from "@package/net/minecraft/server/level";
import { $AbstractIterator } from "@package/com/google/common/collect";
import { $AutoCloseable } from "@package/java/lang";
import { $Iterator } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/server/command/generation" {
    export class $GenerationTask$Listener {
    }
    export interface $GenerationTask$Listener {
        update(ok: number, error: number, skipped: number, total: number): void;
        complete(error: number): void;
    }
    /**
     * Special thanks to Jasmine and Gegy for allowing us to use their pregenerator mod as a model to use in NeoForge!
     * Original code: https://github.com/jaskarth/fabric-chunkpregenerator
     */
    export class $GenerationTask {
        getOkCount(): number;
        getErrorCount(): number;
        getSkippedCount(): number;
        run(arg0: $GenerationTask$Listener): void;
        stop(): void;
        getTotalCount(): number;
        static NEOFORGE_GENERATE_FORCED: $TicketType<$ChunkPos>;
        constructor(serverLevel: $ServerLevel, x: number, z: number, radius: number);
        get okCount(): number;
        get errorCount(): number;
        get skippedCount(): number;
        get totalCount(): number;
    }
    /**
     * Special thanks to Jasmine and Gegy for allowing us to use their pregenerator mod as a model to use in NeoForge!
     * Original code: https://github.com/jaskarth/fabric-chunkpregenerator
     */
    export class $GenerationBar implements $AutoCloseable {
        addPlayer(player: $ServerPlayer): void;
        update(ok: number, error: number, skipped: number, total: number): void;
        close(): void;
        constructor();
    }
    export class $CoarseOnionIterator$CellIterator implements $Iterator<$ChunkPos> {
        remove(): void;
        forEachRemaining(arg0: $Consumer_<$ChunkPos>): void;
    }
    /**
     * Special thanks to Jasmine and Gegy for allowing us to use their pregenerator mod as a model to use in NeoForge!
     * Original code: https://github.com/jaskarth/fabric-chunkpregenerator
     */
    export class $OnionIterator implements $Iterator<$ChunkPos> {
        hasNext(): boolean;
        next(): $ChunkPos;
        remove(): void;
        forEachRemaining(arg0: $Consumer_<$ChunkPos>): void;
        constructor(radius: number);
    }
    /**
     * Special thanks to Jasmine and Gegy for allowing us to use their pregenerator mod as a model to use in NeoForge!
     * Original code: https://github.com/jaskarth/fabric-chunkpregenerator
     */
    export class $CoarseOnionIterator extends $AbstractIterator<$ChunkPos> {
        constructor(radius: number, cellSize: number);
    }
}
