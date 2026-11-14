import { $File_ } from "@package/java/io";
import { $ILoader } from "@package/org/watermedia/loaders";
import { $DateFormat } from "@package/java/text";
import { $Logger, $Formatter } from "@package/java/util/logging";
import { $Path } from "@package/java/nio/file";
import { $ArgTool } from "@package/org/watermedia/core/tools";
import { $Marker, $Logger as $Logger$1 } from "@package/org/apache/logging/log4j";
import { $ClassLoader, $Thread } from "@package/java/lang";
import { $JFrame } from "@package/javax/swing";
export * as videolan4j from "@package/org/watermedia/videolan4j";
export * as api from "@package/org/watermedia/api";
export * as core from "@package/org/watermedia/core";
export * as loaders from "@package/org/watermedia/loaders";

declare module "@package/org/watermedia" {
    export class $WaterMedia {
        /**
         * @deprecated
         */
        static setSlavismMode(arg0: boolean): void;
        start(): void;
        static prepare(arg0: $ILoader): $WaterMedia;
        static getLoader(): $ILoader;
        static asResource(arg0: string): string;
        static getConfigDir(): $Path;
        static NO_VLC: $ArgTool;
        static USER_AGENT: string;
        static VERSION: string;
        static LOGGER: $Logger$1;
        static ID: string;
        static IT: $Marker;
        static NO_BOOTING: $ArgTool;
        static NAME: string;
        static set slavismMode(value: boolean);
        static get loader(): $ILoader;
        static get configDir(): $Path;
    }
    export class $Main$CollectionTask$Result {
        setCrashReport(arg0: $File_): void;
        setHsErrPids(arg0: $File_[]): void;
        contains(): boolean;
        setLog(arg0: $File_): void;
        setDebug(arg0: $File_): void;
        constructor();
        set crashReport(value: $File_);
        set hsErrPids(value: $File_[]);
        set log(value: $File_);
        set debug(value: $File_);
    }
    export class $Main {
        static main(...arg0: string[]): void;
        static classLoader: $ClassLoader;
        static FORMAT: $DateFormat;
        static LOGGER: $Logger;
        static window: $JFrame;
        constructor();
    }
    export class $Main$ConsoleFormatter extends $Formatter {
    }
    export class $Main$CollectionTask extends $Thread {
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
    }
}
