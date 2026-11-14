import { $Serializable } from "@package/java/io";

declare module "@package/org/watermedia/api/network/patchs/kick" {
    export class $KickChannel implements $Serializable {
        id: number;
        userId: number;
        url: string;
        livestream: $KickChannel$isLive;
        username: string;
        constructor();
    }
    export class $KickVideo implements $Serializable {
        streamId: number;
        id: number;
        url: string;
        constructor();
    }
    export class $KickChannel$isLive implements $Serializable {
        isStreaming: boolean;
        id: number;
        constructor();
    }
}
