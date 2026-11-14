import { $Consumer_ } from "@package/java/util/function";
import { $PacketListener } from "@package/net/minecraft/network";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $List } from "@package/java/util";
import { $Iterable_ } from "@package/java/lang";
import { $ClientCommonPacketListener } from "@package/net/minecraft/network/protocol/common";

declare module "@package/net/neoforged/neoforge/network/bundle" {
    export class $PacketAndPayloadAcceptor<L extends $ClientCommonPacketListener> {
        accept(packet: $Packet<L>): $PacketAndPayloadAcceptor<L>;
        accept(payload: $CustomPacketPayload_): $PacketAndPayloadAcceptor<L>;
        constructor(consumer: $Consumer_<$Packet<L>>);
    }
    /**
     * Utility class for dealing with `BundlePacket`s.
     */
    export class $BundlePacketUtils {
        static flatten<T extends $PacketListener>(packets: $Iterable_<$Packet<T>>): $List<$Packet<T>>;
    }
}
