import { $Gson } from "@package/com/google/gson";
import { $InputStreamReader, $InputStream, $File_ } from "@package/java/io";
import { $GifDecoder } from "@package/org/watermedia/api/image/decoders";
import { $DoubleSupplier, $IntSupplier, $BooleanSupplier, $Supplier } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $ThreadFactory } from "@package/java/util/concurrent";
import { $URI, $URL, $HttpURLConnection, $URLConnection } from "@package/java/net";
import { $Type } from "@package/java/lang/reflect";
import { $Thread, $ClassLoader, $Runnable_ } from "@package/java/lang";
import { $ServiceLoader, $List, $Map_, $List_ } from "@package/java/util";
import { $BufferedImage } from "@package/java/awt/image";

declare module "@package/org/watermedia/core/tools" {
    export class $DataTool {
        static fromJSON<T>(arg0: string, arg1: $Type): T;
        static fromJSON<T>(arg0: $InputStreamReader, arg1: $Type): T;
        static sumArr(arg0: number[]): number;
        static parseLongOr(arg0: string, arg1: number): number;
        static encodeHexString(arg0: number[]): string;
        static startsWith(arg0: string, arg1: string[]): boolean;
        static toList<T>(arg0: $ServiceLoader<T>): $List<T>;
        static concat(arg0: string[], ...arg1: string[]): string[];
        static contains(arg0: string, arg1: string[]): boolean;
        static readAllBytes(arg0: $InputStream): number[];
        static filterValue(arg0: number[], arg1: number): number[];
        static unbox(arg0: $List_<number>): number[];
        static unbox(arg0: number[]): number[];
        static GSON: $Gson;
        constructor();
    }
    export class $ThreadTool {
        static minThreads(): number;
        static thread(arg0: $Runnable_): $Thread;
        static thread(arg0: number, arg1: $Runnable_): $Thread;
        static factory(arg0: string, arg1: number): $ThreadFactory;
        static maxThreads(): number;
        constructor();
    }
    export class $ArgTool implements $Supplier<string>, $BooleanSupplier, $IntSupplier, $DoubleSupplier {
        get(): string;
        value(): string;
        getKey(): string;
        override(arg0: string): void;
        argument(): string;
        getAsDouble(): number;
        getAsInt(): number;
        getAsBoolean(): boolean;
        constructor(arg0: string);
        get key(): string;
        get asDouble(): number;
        get asInt(): number;
        get asBoolean(): boolean;
    }
    export class $IOTool {
        static readGif(arg0: $Path_): $GifDecoder;
        static un7zip(arg0: $Path_): void;
        static un7zip(arg0: $Path_, arg1: $Path_): void;
        static writeData(arg0: $Path_, arg1: number[]): boolean;
        static writeData(arg0: $File_, arg1: number[]): boolean;
        static rmdirs(arg0: $Path_): boolean;
        static rmdirs(arg0: $File_): boolean;
        static unzip(arg0: $Path_): void;
        static unzip(arg0: $Path_, arg1: $Path_): void;
        static readString(arg0: $File_): string;
        static readString(arg0: $Path_): string;
        constructor();
    }
    export class $JarTool {
        static copyAsset(arg0: string, arg1: $Path_, arg2: $ClassLoader): boolean;
        static copyAsset(arg0: string, arg1: $Path_): boolean;
        static readStringList(arg0: string): $List<string>;
        static readStringList(arg0: string, arg1: $ClassLoader): $List<string>;
        static readImage(arg0: string): $BufferedImage;
        static readImage(arg0: string, arg1: $ClassLoader): $BufferedImage;
        static readGif(arg0: string, arg1: $ClassLoader): $GifDecoder;
        static readGif(arg0: string): $GifDecoder;
        static readArrayAndParse(arg0: string, arg1: $Map_<string, string>): string[];
        static readResourceAsStream(arg0: string): $InputStream;
        static readString(arg0: string, arg1: $ClassLoader): string;
        static readString(arg0: string): string;
        static readArray(arg0: string): string[];
        static readResource(arg0: string): $URL;
        constructor();
    }
    export class $PidTool$ProcessData {
        constructor(arg0: string, arg1: number, arg2: string, arg3: number, arg4: string);
    }
    export class $PidTool {
        static getWindowsPids(): $List<$PidTool$ProcessData>;
        constructor();
        static get windowsPids(): $List<$PidTool$ProcessData>;
    }
    export class $Tool {
        static t(): boolean;
        constructor();
    }
    export class $NetTool {
        static connectToHTTP(arg0: $URI, arg1: string): $HttpURLConnection;
        static connectToHTTP(arg0: string, arg1: string): $HttpURLConnection;
        static connectToHTTP(arg0: $URL, arg1: string): $HttpURLConnection;
        static connectToAny(arg0: $URL, arg1: string): $URLConnection;
        static connectToAny(arg0: $URI, arg1: string): $URLConnection;
        static USER_AGENT: string;
        constructor();
    }
}
