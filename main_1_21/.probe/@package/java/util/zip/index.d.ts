import { $InputStream, $File_, $Closeable } from "@package/java/io";
import { $LocalDateTime } from "@package/java/time";
import { $Stream } from "@package/java/util/stream";
import { $FileTime } from "@package/java/nio/file/attribute";
import { $Charset } from "@package/java/nio/charset";
import { $Enumeration } from "@package/java/util";
import { $Object, $Cloneable } from "@package/java/lang";

declare module "@package/java/util/zip" {
    export class $ZipEntry implements $ZipConstants, $Cloneable {
        getName(): string;
        clone(): $Object;
        getMethod(): number;
        getSize(): number;
        isDirectory(): boolean;
        getLastModifiedTime(): $FileTime;
        setLastModifiedTime(arg0: $FileTime): $ZipEntry;
        getTime(): number;
        setTime(arg0: number): void;
        setTimeLocal(arg0: $LocalDateTime): void;
        getTimeLocal(): $LocalDateTime;
        setLastAccessTime(arg0: $FileTime): $ZipEntry;
        getLastAccessTime(): $FileTime;
        setCreationTime(arg0: $FileTime): $ZipEntry;
        getCreationTime(): $FileTime;
        setSize(arg0: number): void;
        getCompressedSize(): number;
        setCompressedSize(arg0: number): void;
        setCrc(arg0: number): void;
        getCrc(): number;
        setMethod(arg0: number): void;
        setExtra(arg0: number[]): void;
        getExtra(): number[];
        setComment(arg0: string): void;
        getComment(): string;
        static STORED: number;
        static DEFLATED: number;
        constructor(arg0: string);
        constructor(arg0: $ZipEntry);
        get name(): string;
        get directory(): boolean;
    }
    export class $ZipConstants {
    }
    export interface $ZipConstants {
    }
    export class $ZipFile implements $ZipConstants, $Closeable {
        getName(): string;
        size(): number;
        stream(): $Stream<$ZipEntry>;
        close(): void;
        entries(): $Enumeration<$ZipEntry>;
        getInputStream(arg0: $ZipEntry): $InputStream;
        getEntry(arg0: string): $ZipEntry;
        getComment(): string;
        static OPEN_DELETE: number;
        static OPEN_READ: number;
        constructor(arg0: string, arg1: $Charset);
        constructor(arg0: $File_, arg1: $Charset);
        constructor(arg0: string);
        constructor(arg0: $File_, arg1: number);
        constructor(arg0: $File_);
        constructor(arg0: $File_, arg1: number, arg2: $Charset);
        get name(): string;
        get comment(): string;
    }
}
