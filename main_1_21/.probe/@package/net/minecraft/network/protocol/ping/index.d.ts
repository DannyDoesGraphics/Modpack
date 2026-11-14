import { $FriendlyByteBuf, $PacketListener } from "@package/net/minecraft/network";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/ping" {
    export class $ClientboundPongResponsePacket extends $Record implements $Packet<$ClientPongPacketListener> {
        type(): $PacketType<$ClientboundPongResponsePacket>;
        time(): number;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientPongPacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPongResponsePacket>;
        constructor(arg0: number);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPongResponsePacket}.
     */
    export type $ClientboundPongResponsePacket_ = { time?: number,  } | [time?: number, ];
    export class $PingPacketTypes {
        static SERVERBOUND_PING_REQUEST: $PacketType<$ServerboundPingRequestPacket>;
        static CLIENTBOUND_PONG_RESPONSE: $PacketType<$ClientboundPongResponsePacket>;
        constructor();
    }
    export class $ClientPongPacketListener {
    }
    export interface $ClientPongPacketListener extends $PacketListener {
        handlePongResponse(packet: $ClientboundPongResponsePacket_): void;
    }
    export class $ServerPingPacketListener {
    }
    export interface $ServerPingPacketListener extends $PacketListener {
        handlePingRequest(packet: $ServerboundPingRequestPacket): void;
    }
    export class $ServerboundPingRequestPacket implements $Packet<$ServerPingPacketListener> {
        type(): $PacketType<$ServerboundPingRequestPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerPingPacketListener): void;
        getTime(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundPingRequestPacket>;
        constructor(time: number);
        get time(): number;
        get terminal(): boolean;
        get skippable(): boolean;
    }
}
