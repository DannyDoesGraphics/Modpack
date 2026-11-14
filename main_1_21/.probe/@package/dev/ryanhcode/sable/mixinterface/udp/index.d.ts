import { $Channel } from "@package/io/netty/channel";
import { $SableUDPServer } from "@package/dev/ryanhcode/sable/network/udp";

declare module "@package/dev/ryanhcode/sable/mixinterface/udp" {
    export class $ServerConnectionListenerExtension {
    }
    export interface $ServerConnectionListenerExtension {
        sable$setupUDPServer(arg0: $Channel): void;
        sable$getServer(): $SableUDPServer;
    }
    export class $ConnectionExtension {
    }
    export interface $ConnectionExtension {
        sable$setUDPChannel(arg0: $Channel): void;
        sable$getUDPChannel(): $Channel;
    }
}
