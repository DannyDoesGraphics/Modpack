import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $RegionStorageInfo_, $RegionFileVersion } from "@package/net/minecraft/world/level/chunk/storage";
import { $EventType, $Event } from "@package/jdk/jfr";
import { $SocketAddress } from "@package/java/net";
import { $ResourceKey_ } from "@package/net/minecraft/resources";

declare module "@package/net/minecraft/util/profiling/jfr/event" {
    export class $NetworkSummaryEvent$SumAggregation {
        trackReceivedPacket(delta: number): void;
        trackSentPacket(delta: number): void;
        commitEvent(): void;
        constructor(remoteAddress: string);
    }
    export class $ChunkGenerationEvent$Fields {
        static STATUS: string;
        static WORLD_POS_X: string;
        static CHUNK_POS_X: string;
        static WORLD_POS_Z: string;
        static LEVEL: string;
        static CHUNK_POS_Z: string;
    }
    export class $ServerTickTimeEvent extends $Event {
        static EVENT_NAME: string;
        averageTickDurationNanos: number;
        static TYPE: $EventType;
        constructor(averageTickDurationMs: number);
    }
    export class $ChunkRegionWriteEvent extends $ChunkRegionIoEvent {
        regionPosX: number;
        regionPosZ: number;
        static EVENT_NAME: string;
        type: string;
        localChunkPosX: number;
        bytes: number;
        levelId: string;
        chunkPosX: number;
        localChunkPosZ: number;
        chunkPosZ: number;
        compression: string;
        static TYPE: $EventType;
        dimension: string;
        constructor(arg0: $RegionStorageInfo_, arg1: $ChunkPos, arg2: $RegionFileVersion, arg3: number);
    }
    export class $PacketEvent$Fields {
        static REMOTE_ADDRESS: string;
        static BYTES: string;
        static PACKET_ID: string;
        static PACKET_DIRECTION: string;
        static PROTOCOL_ID: string;
    }
    export class $NetworkSummaryEvent$Fields {
        static REMOTE_ADDRESS: string;
        static RECEIVED_BYTES: string;
        static SENT_BYTES: string;
    }
    export class $NetworkSummaryEvent extends $Event {
        sentPackets: number;
        receivedBytes: number;
        static EVENT_NAME: string;
        receivedPackets: number;
        static TYPE: $EventType;
        sentBytes: number;
        remoteAddress: string;
        constructor(remoteAddress: string);
    }
    export class $PacketEvent extends $Event {
        packetDirection: string;
        packetId: string;
        protocolId: string;
        bytes: number;
        remoteAddress: string;
        constructor(protocolId: string, packetDirection: string, packetId: string, address: $SocketAddress, bytes: number);
    }
    export class $ChunkRegionReadEvent extends $ChunkRegionIoEvent {
        regionPosX: number;
        regionPosZ: number;
        static EVENT_NAME: string;
        type: string;
        localChunkPosX: number;
        bytes: number;
        levelId: string;
        chunkPosX: number;
        localChunkPosZ: number;
        chunkPosZ: number;
        compression: string;
        static TYPE: $EventType;
        dimension: string;
        constructor(arg0: $RegionStorageInfo_, arg1: $ChunkPos, arg2: $RegionFileVersion, arg3: number);
    }
    export class $WorldLoadFinishedEvent extends $Event {
        static EVENT_NAME: string;
        static TYPE: $EventType;
        constructor();
    }
    export class $ChunkRegionIoEvent$Fields {
        static BYTES: string;
        static DIMENSION: string;
        static CHUNK_POS_X: string;
        static REGION_POS_X: string;
        static LEVEL: string;
        static COMPRESSION: string;
        static REGION_POS_Z: string;
        static LOCAL_POS_Z: string;
        static TYPE: string;
        static CHUNK_POS_Z: string;
        static LOCAL_POS_X: string;
    }
    export class $PacketReceivedEvent extends $PacketEvent {
        packetDirection: string;
        packetId: string;
        protocolId: string;
        bytes: number;
        static TYPE: $EventType;
        remoteAddress: string;
        static NAME: string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: $SocketAddress, arg4: number);
    }
    export class $ServerTickTimeEvent$Fields {
        static AVERAGE_TICK_DURATION: string;
    }
    export class $PacketSentEvent extends $PacketEvent {
        packetDirection: string;
        packetId: string;
        protocolId: string;
        bytes: number;
        static TYPE: $EventType;
        remoteAddress: string;
        static NAME: string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: $SocketAddress, arg4: number);
    }
    export class $ChunkRegionIoEvent extends $Event {
        regionPosX: number;
        regionPosZ: number;
        localChunkPosX: number;
        bytes: number;
        levelId: string;
        chunkPosX: number;
        localChunkPosZ: number;
        chunkPosZ: number;
        type: string;
        compression: string;
        dimension: string;
        constructor(regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos, version: $RegionFileVersion, bytes: number);
    }
    export class $ChunkGenerationEvent extends $Event {
        worldPosZ: number;
        level: string;
        static EVENT_NAME: string;
        chunkPosX: number;
        chunkPosZ: number;
        targetStatus: string;
        static TYPE: $EventType;
        worldPosX: number;
        constructor(chunkPos: $ChunkPos, level: $ResourceKey_<$Level>, targetStatus: string);
    }
}
