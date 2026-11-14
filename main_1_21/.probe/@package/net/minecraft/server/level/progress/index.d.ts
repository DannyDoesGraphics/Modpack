import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Executor_ } from "@package/java/util/concurrent";
import { $ChunkStatus_, $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/minecraft/server/level/progress" {
    export class $ChunkProgressListener {
        static calculateDiameter(radius: number): number;
    }
    export interface $ChunkProgressListener {
        start(): void;
        stop(): void;
        updateSpawnPos(center: $ChunkPos): void;
        onStatusChange(chunkPos: $ChunkPos, chunkStatus: $ChunkStatus_ | null): void;
    }
    export class $ChunkProgressListenerFactory {
    }
    export interface $ChunkProgressListenerFactory {
        create(radius: number): $ChunkProgressListener;
    }
    /**
     * Values that may be interpreted as {@link $ChunkProgressListenerFactory}.
     */
    export type $ChunkProgressListenerFactory_ = ((arg0: number) => $ChunkProgressListener);
    export class $ProcessorChunkProgressListener implements $ChunkProgressListener {
        start(): void;
        stop(): void;
        static createStarted(delegate: $ChunkProgressListener, dispatcher: $Executor_): $ProcessorChunkProgressListener;
        updateSpawnPos(center: $ChunkPos): void;
        onStatusChange(chunkPos: $ChunkPos, chunkStatus: $ChunkStatus_ | null): void;
    }
    export class $StoringChunkProgressListener implements $ChunkProgressListener {
        getProgress(): number;
        static createCompleted(): $StoringChunkProgressListener;
        start(): void;
        stop(): void;
        static create(radius: number): $StoringChunkProgressListener;
        getStatus(x: number, z: number): $ChunkStatus;
        static createFromGameruleRadius(radius: number): $StoringChunkProgressListener;
        updateSpawnPos(center: $ChunkPos): void;
        onStatusChange(chunkPos: $ChunkPos, chunkStatus: $ChunkStatus_ | null): void;
        getDiameter(): number;
        getFullDiameter(): number;
        get progress(): number;
        get diameter(): number;
        get fullDiameter(): number;
    }
    export class $LoggerChunkProgressListener implements $ChunkProgressListener {
        getProgress(): number;
        static createCompleted(): $LoggerChunkProgressListener;
        start(): void;
        stop(): void;
        static create(radius: number): $LoggerChunkProgressListener;
        static createFromGameruleRadius(radius: number): $LoggerChunkProgressListener;
        updateSpawnPos(center: $ChunkPos): void;
        onStatusChange(chunkPos: $ChunkPos, chunkStatus: $ChunkStatus_ | null): void;
        get progress(): number;
    }
}
