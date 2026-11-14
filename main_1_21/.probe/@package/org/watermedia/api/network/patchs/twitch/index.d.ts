import { $InputStream } from "@package/java/io";
import { $List } from "@package/java/util";
import { $Comparable, $Exception } from "@package/java/lang";

declare module "@package/org/watermedia/api/network/patchs/twitch" {
    export class $StreamQuality implements $Comparable<$StreamQuality> {
        setUrl(arg0: string): void;
        setResolution(arg0: string): void;
        setCodecs(arg0: string): void;
        setFramerate(arg0: number): void;
        getCodecs(): string;
        getFramerate(): number;
        compareTo(arg0: $StreamQuality): number;
        static parse(arg0: string): $List<$StreamQuality>;
        getUrl(): string;
        getBandwidth(): number;
        setBandwidth(arg0: number): void;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getWidth(): number;
        getHeight(): number;
        constructor();
        set resolution(value: string);
    }
    export class $TwitchAPI {
        static getVod(arg0: string): $List<$StreamQuality>;
        static getStream(arg0: string): $List<$StreamQuality>;
        static readAllBytes(arg0: $InputStream): number[];
        static TTV_PLAYLIST_API_URL_TEMPLATE: string;
        static CLIENT_ID: string;
        static GRAPH_QL_URL: string;
        static TTV_LIVE_API_URL_TEMPLATE: string;
        constructor();
    }
    export class $TwitchAPI$StreamNotFound extends $Exception {
        constructor(arg0: string);
    }
}
