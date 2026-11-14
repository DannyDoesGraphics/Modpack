import { $Instant, $Duration, $Duration_ } from "@package/java/time";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Path_ } from "@package/java/nio/file";
import { $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $TickTimeStat, $TickTimeStat_, $GcHeapStat$Summary, $FileIOStat$Summary, $ThreadAllocationStat$Summary, $GcHeapStat$Summary_, $PacketIdentification_, $IoSummary$CountAndSize, $ChunkGenStat, $CpuLoadStat, $ThreadAllocationStat$Summary_, $ChunkIdentification_, $FileIOStat$Summary_, $ChunkGenStat_, $ChunkIdentification, $CpuLoadStat_, $PacketIdentification, $TimedStatSummary, $IoSummary } from "@package/net/minecraft/util/profiling/jfr/stats";

declare module "@package/net/minecraft/util/profiling/jfr/parse" {
    export class $JfrStatsParser {
        static parse(file: $Path_): $JfrStatsResult;
    }
    export class $JfrStatsResult extends $Record {
        recordingStarted(): $Instant;
        recordingEnded(): $Instant;
        recordingDuration(): $Duration;
        worldCreationDuration(): $Duration;
        heapSummary(): $GcHeapStat$Summary;
        cpuLoadStats(): $List<$CpuLoadStat>;
        tickTimes(): $List<$TickTimeStat>;
        threadAllocationSummary(): $ThreadAllocationStat$Summary;
        chunkGenSummary(): $List<$Pair<$ChunkStatus, $TimedStatSummary<$ChunkGenStat>>>;
        fileWrites(): $FileIOStat$Summary;
        fileReads(): $FileIOStat$Summary;
        readChunks(): $IoSummary<$ChunkIdentification>;
        writtenChunks(): $IoSummary<$ChunkIdentification>;
        sentPacketsSummary(): $IoSummary<$PacketIdentification>;
        receivedPacketsSummary(): $IoSummary<$PacketIdentification>;
        chunkGenStats(): $List<$ChunkGenStat>;
        asJson(): string;
        constructor(arg0: $Instant, arg1: $Instant, arg2: $Duration_, arg3: $Duration_ | null, arg4: $List_<$TickTimeStat_>, arg5: $List_<$CpuLoadStat_>, arg6: $GcHeapStat$Summary_, arg7: $ThreadAllocationStat$Summary_, arg8: $IoSummary<$PacketIdentification_>, arg9: $IoSummary<$PacketIdentification_>, arg10: $IoSummary<$ChunkIdentification_>, arg11: $IoSummary<$ChunkIdentification_>, arg12: $FileIOStat$Summary_, arg13: $FileIOStat$Summary_, arg14: $List_<$ChunkGenStat_>);
    }
    /**
     * Values that may be interpreted as {@link $JfrStatsResult}.
     */
    export type $JfrStatsResult_ = { cpuLoadStats?: $List_<$CpuLoadStat_>, writtenChunks?: $IoSummary<$ChunkIdentification_>, sentPacketsSummary?: $IoSummary<$PacketIdentification_>, threadAllocationSummary?: $ThreadAllocationStat$Summary_, recordingDuration?: $Duration_, worldCreationDuration?: $Duration_, tickTimes?: $List_<$TickTimeStat_>, heapSummary?: $GcHeapStat$Summary_, readChunks?: $IoSummary<$ChunkIdentification_>, receivedPacketsSummary?: $IoSummary<$PacketIdentification_>, fileWrites?: $FileIOStat$Summary_, recordingStarted?: $Instant, fileReads?: $FileIOStat$Summary_, chunkGenStats?: $List_<$ChunkGenStat_>, recordingEnded?: $Instant,  } | [cpuLoadStats?: $List_<$CpuLoadStat_>, writtenChunks?: $IoSummary<$ChunkIdentification_>, sentPacketsSummary?: $IoSummary<$PacketIdentification_>, threadAllocationSummary?: $ThreadAllocationStat$Summary_, recordingDuration?: $Duration_, worldCreationDuration?: $Duration_, tickTimes?: $List_<$TickTimeStat_>, heapSummary?: $GcHeapStat$Summary_, readChunks?: $IoSummary<$ChunkIdentification_>, receivedPacketsSummary?: $IoSummary<$PacketIdentification_>, fileWrites?: $FileIOStat$Summary_, recordingStarted?: $Instant, fileReads?: $FileIOStat$Summary_, chunkGenStats?: $List_<$ChunkGenStat_>, recordingEnded?: $Instant, ];
    export class $JfrStatsParser$MutableCountAndSize {
        toCountAndSize(): $IoSummary$CountAndSize;
        increment(increment: number): void;
        constructor();
    }
}
