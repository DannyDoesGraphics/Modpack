import { $Pattern } from "@package/java/util/regex";
import { $Enum } from "@package/java/lang";
export * as providers from "@package/org/watermedia/videolan4j/discovery/providers";

declare module "@package/org/watermedia/videolan4j/discovery" {
    export class $NativeDiscovery$DebugDirectory {
    }
    export class $Environment extends $Enum<$Environment> {
        getFilePatterns(): $Pattern[];
        getPluginPaths(): string[];
        setVar(arg0: string, arg1: string): boolean;
        static get(): $Environment;
        static values(): $Environment[];
        static valueOf(arg0: string): $Environment;
        static osName(): string;
        static LINUX: $Environment;
        static WINDOWS: $Environment;
        static MACOS: $Environment;
        get filePatterns(): $Pattern[];
        get pluginPaths(): string[];
    }
    /**
     * Values that may be interpreted as {@link $Environment}.
     */
    export type $Environment_ = "windows" | "macos" | "linux";
    export class $NativeDiscovery {
        static discoveryPath(): string;
        static discovered(): boolean;
        static start(): boolean;
        constructor();
    }
}
