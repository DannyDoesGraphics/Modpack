import { $Instant, $Duration, $Duration_ } from "@package/java/time";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ColumnPos_, $ColumnPos } from "@package/net/minecraft/server/level";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $RecordedEvent } from "@package/jdk/jfr/consumer";
import { $ChunkStatus_, $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";

declare module "@package/net/minecraft/util/profiling/jfr/stats" {
    export class $FileIOStat extends $Record {
        static summary(duration: $Duration_, stats: $List_<$FileIOStat_>): $FileIOStat$Summary;
        bytes(): number;
        duration(): $Duration;
        path(): string;
        constructor(arg0: $Duration_, arg1: string | null, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $FileIOStat}.
     */
    export type $FileIOStat_ = { duration?: $Duration_, bytes?: number, path?: string,  } | [duration?: $Duration_, bytes?: number, path?: string, ];
    export class $TimedStat {
    }
    export interface $TimedStat {
        duration(): $Duration;
    }
    /**
     * Values that may be interpreted as {@link $TimedStat}.
     */
    export type $TimedStat_ = (() => $Duration_);
    export class $IoSummary<T> {
        getTotalSize(): number;
        getSizePerSecond(): number;
        getCountsPerSecond(): number;
        largestSizeContributors(): $List<$Pair<T, $IoSummary$CountAndSize>>;
        getTotalCount(): number;
        constructor(recordingDuration: $Duration_, entries: $List_<$Pair<T, $IoSummary$CountAndSize_>>);
        get totalSize(): number;
        get sizePerSecond(): number;
        get countsPerSecond(): number;
        get totalCount(): number;
    }
    export class $ChunkGenStat extends $Record implements $TimedStat {
        chunkPos(): $ChunkPos;
        static from(event: $RecordedEvent): $ChunkGenStat;
        status(): $ChunkStatus;
        duration(): $Duration;
        level(): string;
        worldPos(): $ColumnPos;
        constructor(arg0: $Duration_, arg1: $ChunkPos, arg2: $ColumnPos_, arg3: $ChunkStatus_, arg4: string);
    }
    /**
     * Values that may be interpreted as {@link $ChunkGenStat}.
     */
    export type $ChunkGenStat_ = { worldPos?: $ColumnPos_, status?: $ChunkStatus_, chunkPos?: $ChunkPos, level?: string, duration?: $Duration_,  } | [worldPos?: $ColumnPos_, status?: $ChunkStatus_, chunkPos?: $ChunkPos, level?: string, duration?: $Duration_, ];
    export class $GcHeapStat$Timing extends $Enum<$GcHeapStat$Timing> {
    }
    /**
     * Values that may be interpreted as {@link $GcHeapStat$Timing}.
     */
    export type $GcHeapStat$Timing_ = "before_gc" | "after_gc";
    export class $IoSummary$CountAndSize extends $Record {
        averageSize(): number;
        totalSize(): number;
        totalCount(): number;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $IoSummary$CountAndSize}.
     */
    export type $IoSummary$CountAndSize_ = { totalCount?: number, totalSize?: number,  } | [totalCount?: number, totalSize?: number, ];
    export class $FileIOStat$Summary extends $Record {
        totalBytes(): number;
        topTenContributorsByTotalBytes(): $List<$Pair<string, number>>;
        bytesPerSecond(): number;
        countsPerSecond(): number;
        timeSpentInIO(): $Duration;
        counts(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Duration_, arg5: $List_<$Pair<string, number>>);
    }
    /**
     * Values that may be interpreted as {@link $FileIOStat$Summary}.
     */
    export type $FileIOStat$Summary_ = { bytesPerSecond?: number, countsPerSecond?: number, totalBytes?: number, topTenContributorsByTotalBytes?: $List_<$Pair<string, number>>, counts?: number, timeSpentInIO?: $Duration_,  } | [bytesPerSecond?: number, countsPerSecond?: number, totalBytes?: number, topTenContributorsByTotalBytes?: $List_<$Pair<string, number>>, counts?: number, timeSpentInIO?: $Duration_, ];
    export class $TimedStatSummary<T extends $TimedStat> extends $Record {
        static summary<T extends $TimedStat>(stats: $List_<T>): $TimedStatSummary<T>;
        totalDuration(): $Duration;
        percentilesNanos(): $Map<number, number>;
        slowest(): T;
        secondSlowest(): T;
        count(): number;
        fastest(): T;
        constructor(arg0: T, arg1: T, arg2: T | null, arg3: number, arg4: $Map_<number, number>, arg5: $Duration_);
    }
    /**
     * Values that may be interpreted as {@link $TimedStatSummary}.
     */
    export type $TimedStatSummary_<T> = { fastest?: $TimedStat_, slowest?: $TimedStat_, totalDuration?: $Duration_, secondSlowest?: $TimedStat_, percentilesNanos?: $Map_<number, number>, count?: number,  } | [fastest?: $TimedStat_, slowest?: $TimedStat_, totalDuration?: $Duration_, secondSlowest?: $TimedStat_, percentilesNanos?: $Map_<number, number>, count?: number, ];
    export class $ThreadAllocationStat extends $Record {
        totalBytes(): number;
        static summary(stats: $List_<$ThreadAllocationStat_>): $ThreadAllocationStat$Summary;
        static from(event: $RecordedEvent): $ThreadAllocationStat;
        timestamp(): $Instant;
        threadName(): string;
        constructor(arg0: $Instant, arg1: string, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $ThreadAllocationStat}.
     */
    export type $ThreadAllocationStat_ = { totalBytes?: number, timestamp?: $Instant, threadName?: string,  } | [totalBytes?: number, timestamp?: $Instant, threadName?: string, ];
    export class $TickTimeStat extends $Record {
        currentAverage(): $Duration;
        static from(event: $RecordedEvent): $TickTimeStat;
        timestamp(): $Instant;
        constructor(arg0: $Instant, arg1: $Duration_);
    }
    /**
     * Values that may be interpreted as {@link $TickTimeStat}.
     */
    export type $TickTimeStat_ = { currentAverage?: $Duration_, timestamp?: $Instant,  } | [currentAverage?: $Duration_, timestamp?: $Instant, ];
    export class $GcHeapStat$Summary extends $Record {
        allocationRateBytesPerSecond(): number;
        totalGCs(): number;
        gcOverHead(): number;
        gcTotalDuration(): $Duration;
        duration(): $Duration;
        constructor(arg0: $Duration_, arg1: $Duration_, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $GcHeapStat$Summary}.
     */
    export type $GcHeapStat$Summary_ = { allocationRateBytesPerSecond?: number, gcTotalDuration?: $Duration_, duration?: $Duration_, totalGCs?: number,  } | [allocationRateBytesPerSecond?: number, gcTotalDuration?: $Duration_, duration?: $Duration_, totalGCs?: number, ];
    export class $GcHeapStat extends $Record {
        timing(): $GcHeapStat$Timing;
        static summary(duration: $Duration_, stats: $List_<$GcHeapStat_>, gcTotalDuration: $Duration_, totalGCs: number): $GcHeapStat$Summary;
        heapUsed(): number;
        static from(event: $RecordedEvent): $GcHeapStat;
        timestamp(): $Instant;
        constructor(arg0: $Instant, arg1: number, arg2: $GcHeapStat$Timing_);
    }
    /**
     * Values that may be interpreted as {@link $GcHeapStat}.
     */
    export type $GcHeapStat_ = { heapUsed?: number, timestamp?: $Instant, timing?: $GcHeapStat$Timing_,  } | [heapUsed?: number, timestamp?: $Instant, timing?: $GcHeapStat$Timing_, ];
    export class $ChunkIdentification extends $Record {
        dimension(): string;
        x(): number;
        static from(event: $RecordedEvent): $ChunkIdentification;
        z(): number;
        level(): string;
        constructor(arg0: string, arg1: string, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $ChunkIdentification}.
     */
    export type $ChunkIdentification_ = { z?: number, x?: number, dimension?: string, level?: string,  } | [z?: number, x?: number, dimension?: string, level?: string, ];
    export class $CpuLoadStat extends $Record {
        userJvm(): number;
        static from(event: $RecordedEvent): $CpuLoadStat;
        system(): number;
        jvm(): number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $CpuLoadStat}.
     */
    export type $CpuLoadStat_ = { system?: number, userJvm?: number, jvm?: number,  } | [system?: number, userJvm?: number, jvm?: number, ];
    export class $PacketIdentification extends $Record {
        protocolId(): string;
        packetId(): string;
        static from(event: $RecordedEvent): $PacketIdentification;
        direction(): string;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $PacketIdentification}.
     */
    export type $PacketIdentification_ = { packetId?: string, direction?: string, protocolId?: string,  } | [packetId?: string, direction?: string, protocolId?: string, ];
    export class $ThreadAllocationStat$Summary extends $Record {
        allocationsPerSecondByThread(): $Map<string, number>;
        constructor(arg0: $Map_<string, number>);
    }
    /**
     * Values that may be interpreted as {@link $ThreadAllocationStat$Summary}.
     */
    export type $ThreadAllocationStat$Summary_ = { allocationsPerSecondByThread?: $Map_<string, number>,  } | [allocationsPerSecondByThread?: $Map_<string, number>, ];
}
