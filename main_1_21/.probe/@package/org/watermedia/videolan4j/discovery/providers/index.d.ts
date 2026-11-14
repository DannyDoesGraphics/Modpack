import { $Enum } from "@package/java/lang";

declare module "@package/org/watermedia/videolan4j/discovery/providers" {
    export class $JnaLibProvider implements $IProvider {
        directories(): string[];
        supported(): boolean;
        priority(): $IProvider$Priority;
        name(): string;
        constructor();
    }
    export class $WinProvider implements $IProvider {
        directories(): string[];
        supported(): boolean;
        priority(): $IProvider$Priority;
        name(): string;
        constructor();
    }
    export class $IProvider {
    }
    export interface $IProvider {
        directories(): string[];
        supported(): boolean;
        name(): string;
        priority(): $IProvider$Priority;
    }
    export class $MacProvider implements $IProvider {
        directories(): string[];
        supported(): boolean;
        priority(): $IProvider$Priority;
        name(): string;
        constructor();
    }
    export class $SystemProvider implements $IProvider {
        directories(): string[];
        supported(): boolean;
        priority(): $IProvider$Priority;
        name(): string;
        constructor();
    }
    export class $LinuxProvider implements $IProvider {
        directories(): string[];
        supported(): boolean;
        priority(): $IProvider$Priority;
        name(): string;
        constructor();
    }
    export class $UserProvider implements $IProvider {
        directories(): string[];
        supported(): boolean;
        priority(): $IProvider$Priority;
        name(): string;
        constructor();
    }
    export class $IProvider$Priority extends $Enum<$IProvider$Priority> {
        static values(): $IProvider$Priority[];
        static valueOf(arg0: string): $IProvider$Priority;
        static LOWEST: $IProvider$Priority;
        static HIGH: $IProvider$Priority;
        static OVERWRITE: $IProvider$Priority;
        static LOW: $IProvider$Priority;
        static HIGHEST: $IProvider$Priority;
        static NORMAL: $IProvider$Priority;
    }
    /**
     * Values that may be interpreted as {@link $IProvider$Priority}.
     */
    export type $IProvider$Priority_ = "overwrite" | "highest" | "high" | "normal" | "low" | "lowest";
}
