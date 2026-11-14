import { $WaterMediaAPI } from "@package/org/watermedia/api";
import { $Map } from "@package/java/util";
import { $IProvider$Priority, $IProvider } from "@package/org/watermedia/videolan4j/discovery/providers";
import { $MediaPlayerFactory } from "@package/org/watermedia/videolan4j/factory";
export * as videolan from "@package/org/watermedia/api/player/videolan";

declare module "@package/org/watermedia/api/player" {
    export class $PlayerAPI extends $WaterMediaAPI {
        static getFactorySoundOnly(): $MediaPlayerFactory;
        static getFactory(arg0: string): $MediaPlayerFactory;
        static getFactory(): $MediaPlayerFactory;
        static registerFactory(arg0: string, arg1: string[]): $MediaPlayerFactory;
        static isReady(): boolean;
        static FACTORIES: $Map<string, $MediaPlayerFactory>;
        constructor();
        static get factorySoundOnly(): $MediaPlayerFactory;
        static get ready(): boolean;
    }
    export class $PlayerAPI$Provider implements $IProvider {
        directories(): string[];
        supported(): boolean;
        name(): string;
        priority(): $IProvider$Priority;
        constructor();
    }
    export class $PlayerAPI$ConfigProvider implements $IProvider {
        directories(): string[];
        supported(): boolean;
        name(): string;
        priority(): $IProvider$Priority;
        constructor();
    }
}
