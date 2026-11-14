import { $URI } from "@package/java/net";
import { $Marker } from "@package/org/apache/logging/log4j";
import { $WaterMediaAPI } from "@package/org/watermedia/api";
import { $Map } from "@package/java/util";
import { $AbstractPatch, $AbstractPatch$Result } from "@package/org/watermedia/api/network/patchs";
export * as patchs from "@package/org/watermedia/api/network/patchs";

declare module "@package/org/watermedia/api/network" {
    export class $NetworkAPI extends $WaterMediaAPI {
        static registerPatch(arg0: $AbstractPatch): void;
        static getPatchPlatforms(): string[];
        static unregisterPatch(arg0: $AbstractPatch): void;
        static parseURI(arg0: string): $URI;
        /**
         * @deprecated
         */
        static patch(arg0: string): $AbstractPatch$Result;
        static patch(arg0: $URI): $AbstractPatch$Result;
        static parseQuery(arg0: string): $Map<string, string>;
        static IT: $Marker;
        constructor();
        static get patchPlatforms(): string[];
    }
}
