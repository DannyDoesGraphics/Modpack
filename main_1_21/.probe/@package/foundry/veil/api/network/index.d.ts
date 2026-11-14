import { $Packet } from "@package/net/minecraft/network/protocol";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";

declare module "@package/foundry/veil/api/network" {
    export class $VeilPacketManager$PacketSink {
    }
    export interface $VeilPacketManager$PacketSink {
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        sendPacket(arg0: $Packet<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $VeilPacketManager$PacketSink}.
     */
    export type $VeilPacketManager$PacketSink_ = ((arg0: $Packet<never>) => void);
}
