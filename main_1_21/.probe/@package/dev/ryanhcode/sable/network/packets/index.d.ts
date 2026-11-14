import { $Enum } from "@package/java/lang";

declare module "@package/dev/ryanhcode/sable/network/packets" {
    export class $PacketReceiveMode extends $Enum<$PacketReceiveMode> {
        static values(): $PacketReceiveMode[];
        static valueOf(arg0: string): $PacketReceiveMode;
        static TCP: $PacketReceiveMode;
        static UDP: $PacketReceiveMode;
        static UNKNOWN: $PacketReceiveMode;
    }
    /**
     * Values that may be interpreted as {@link $PacketReceiveMode}.
     */
    export type $PacketReceiveMode_ = "tcp" | "udp" | "unknown";
}
