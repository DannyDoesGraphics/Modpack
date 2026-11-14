import { $LocalDate } from "@package/java/time";
import { $Reader, $Closeable } from "@package/java/io";
import { $Consumer_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Codec_ } from "@package/com/mojang/serialization";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Iterable, $Record } from "@package/java/lang";
import { $Spliterator, $Iterator, $Set } from "@package/java/util";
import { $FileChannel } from "@package/java/nio/channels";

declare module "@package/net/minecraft/util/eventlog" {
    export class $JsonEventLog<T> implements $Closeable {
        write(data: T): void;
        close(): void;
        static open<T>(codec: $Codec_<T>, path: $Path_): $JsonEventLog<T>;
        openReader(): $JsonEventLogReader<T>;
        constructor(codec: $Codec_<T>, channel: $FileChannel);
    }
    export class $EventLogDirectory$RawFile extends $Record implements $EventLogDirectory$File {
        openChannel(): $FileChannel;
        compress(): $EventLogDirectory$CompressedFile;
        id(): $EventLogDirectory$FileId;
        path(): $Path;
        openReader(): $Reader;
        constructor(arg0: $Path_, arg1: $EventLogDirectory$FileId_);
    }
    /**
     * Values that may be interpreted as {@link $EventLogDirectory$RawFile}.
     */
    export type $EventLogDirectory$RawFile_ = { id?: $EventLogDirectory$FileId_, path?: $Path_,  } | [id?: $EventLogDirectory$FileId_, path?: $Path_, ];
    export class $EventLogDirectory {
        static open(root: $Path_, extension: string): $EventLogDirectory;
        createNewFile(date: $LocalDate): $EventLogDirectory$RawFile;
        listFiles(): $EventLogDirectory$FileList;
    }
    export class $EventLogDirectory$FileId extends $Record {
        toFileName(extension: string): string;
        index(): number;
        static parse(fileName: string): $EventLogDirectory$FileId;
        date(): $LocalDate;
        constructor(arg0: $LocalDate, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $EventLogDirectory$FileId}.
     */
    export type $EventLogDirectory$FileId_ = { index?: number, date?: $LocalDate,  } | [index?: number, date?: $LocalDate, ];
    export class $JsonEventLogReader<T> {
        static create<T>(codec: $Codec_<T>, reader: $Reader): $JsonEventLogReader<T>;
    }
    export interface $JsonEventLogReader<T> extends $Closeable {
        next(): T;
    }
    export class $EventLogDirectory$FileList implements $Iterable<$EventLogDirectory$File> {
        compressAll(): $EventLogDirectory$FileList;
        prune(date: $LocalDate, daysToKeep: number): $EventLogDirectory$FileList;
        iterator(): $Iterator<$EventLogDirectory$File>;
        stream(): $Stream<$EventLogDirectory$File>;
        ids(): $Set<$EventLogDirectory$FileId>;
        spliterator(): $Spliterator<$EventLogDirectory$File>;
        forEach(arg0: $Consumer_<$EventLogDirectory$File>): void;
        [Symbol.iterator](): Iterator<$EventLogDirectory$File>
    }
    export class $EventLogDirectory$File {
    }
    export interface $EventLogDirectory$File {
        compress(): $EventLogDirectory$CompressedFile;
        id(): $EventLogDirectory$FileId;
        path(): $Path;
        openReader(): $Reader;
    }
    export class $EventLogDirectory$CompressedFile extends $Record implements $EventLogDirectory$File {
        compress(): $EventLogDirectory$CompressedFile;
        id(): $EventLogDirectory$FileId;
        path(): $Path;
        openReader(): $Reader;
        constructor(arg0: $Path_, arg1: $EventLogDirectory$FileId_);
    }
    /**
     * Values that may be interpreted as {@link $EventLogDirectory$CompressedFile}.
     */
    export type $EventLogDirectory$CompressedFile_ = { id?: $EventLogDirectory$FileId_, path?: $Path_,  } | [id?: $EventLogDirectory$FileId_, path?: $Path_, ];
}
