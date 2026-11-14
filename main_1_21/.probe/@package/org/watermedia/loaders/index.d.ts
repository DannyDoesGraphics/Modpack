import { $Path } from "@package/java/nio/file";

declare module "@package/org/watermedia/loaders" {
    export class $DSJarLoader implements $ILoader {
        static main(...arg0: string[]): void;
        name(): string;
        tempDir(): $Path;
        clientSide(): boolean;
        tlcheck(): boolean;
        developerMode(): boolean;
        processDir(): $Path;
        constructor();
    }
    export class $ILoader {
        static DEFAULT: $ILoader;
    }
    export interface $ILoader {
        name(): string;
        tempDir(): $Path;
        clientSide(): boolean;
        tlcheck(): boolean;
        developerMode(): boolean;
        processDir(): $Path;
    }
    export class $NeoFLoader implements $ILoader {
        name(): string;
        tempDir(): $Path;
        clientSide(): boolean;
        tlcheck(): boolean;
        ofcheck(): boolean;
        developerMode(): boolean;
        processDir(): $Path;
        constructor();
    }
    export class $ForgeMCLoader implements $ILoader {
        modInstalled(arg0: string): boolean;
        name(): string;
        tempDir(): $Path;
        clientSide(): boolean;
        tlcheck(): boolean;
        ofcheck(): boolean;
        developerMode(): boolean;
        processDir(): $Path;
        constructor();
    }
}
