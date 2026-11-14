import { $ProtocolInfo$Unbound, $ConnectionProtocol, $ProtocolInfo, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $ServerPacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Enum, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/handshake" {
    /**
     * PacketListener for the server side of the HANDSHAKING protocol.
     */
    export class $ServerHandshakePacketListener {
    }
    export interface $ServerHandshakePacketListener extends $ServerPacketListener {
        /**
         * There are two recognized intentions for initiating a handshake: logging in and acquiring server status. The NetworkManager's protocol will be reconfigured according to the specified intention, although a login-intention must pass a versioncheck or receive a disconnect otherwise
         */
        handleIntention(packet: $ClientIntentionPacket_): void;
        protocol(): $ConnectionProtocol;
    }
    export class $ClientIntentionPacket extends $Record implements $Packet<$ServerHandshakePacketListener> {
        intention(): $ClientIntent;
        protocolVersion(): number;
        type(): $PacketType<$ClientIntentionPacket>;
        port(): number;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerHandshakePacketListener): void;
        hostName(): string;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientIntentionPacket>;
        /**
         * @deprecated
         */
        constructor(protocolVersion: number, hostName: string, port: number, intention: $ClientIntent_);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientIntentionPacket}.
     */
    export type $ClientIntentionPacket_ = { port?: number, protocolVersion?: number, intention?: $ClientIntent_, hostName?: string,  } | [port?: number, protocolVersion?: number, intention?: $ClientIntent_, hostName?: string, ];
    export class $HandshakeProtocols {
        static SERVERBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ServerHandshakePacketListener, $FriendlyByteBuf>;
        static SERVERBOUND: $ProtocolInfo<$ServerHandshakePacketListener>;
        constructor();
    }
    export class $ClientIntent extends $Enum<$ClientIntent> {
        static values(): $ClientIntent[];
        static valueOf(arg0: string): $ClientIntent;
        id(): number;
        static byId(id: number): $ClientIntent;
        static STATUS: $ClientIntent;
        static TRANSFER: $ClientIntent;
        static LOGIN: $ClientIntent;
    }
    /**
     * Values that may be interpreted as {@link $ClientIntent}.
     */
    export type $ClientIntent_ = "status" | "login" | "transfer";
    export class $HandshakePacketTypes {
        static CLIENT_INTENTION: $PacketType<$ClientIntentionPacket>;
        constructor();
    }
}
