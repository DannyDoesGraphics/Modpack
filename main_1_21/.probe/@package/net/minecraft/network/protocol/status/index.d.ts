import { $Codec } from "@package/com/mojang/serialization";
import { $ClientboundPacketListener, $FriendlyByteBuf, $ProtocolInfo$Unbound, $ConnectionProtocol, $ProtocolInfo } from "@package/net/minecraft/network";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $ServerPacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List, $List_ } from "@package/java/util";
import { $ClientPongPacketListener, $ServerPingPacketListener } from "@package/net/minecraft/network/protocol/ping";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/status" {
    /**
     * PacketListener for the server side of the STATUS protocol.
     */
    export class $ServerStatusPacketListener {
    }
    export interface $ServerStatusPacketListener extends $ServerPacketListener, $ServerPingPacketListener {
        handleStatusRequest(packet: $ServerboundStatusRequestPacket): void;
        protocol(): $ConnectionProtocol;
    }
    export class $ServerStatus$Players extends $Record {
        online(): number;
        max(): number;
        sample(): $List<$GameProfile>;
        static CODEC: $Codec<$ServerStatus$Players>;
        constructor(max: number, online: number, sample: $List_<$GameProfile>);
    }
    /**
     * Values that may be interpreted as {@link $ServerStatus$Players}.
     */
    export type $ServerStatus$Players_ = { online?: number, sample?: $List_<$GameProfile>, max?: number,  } | [online?: number, sample?: $List_<$GameProfile>, max?: number, ];
    /**
     * PacketListener for the client side of the STATUS protocol.
     */
    export class $ClientStatusPacketListener {
    }
    export interface $ClientStatusPacketListener extends $ClientPongPacketListener, $ClientboundPacketListener {
        handleStatusResponse(packet: $ClientboundStatusResponsePacket_): void;
        protocol(): $ConnectionProtocol;
    }
    export class $ServerStatus$Version extends $Record {
        name(): string;
        static current(): $ServerStatus$Version;
        protocol(): number;
        static CODEC: $Codec<$ServerStatus$Version>;
        constructor(name: string, protocol: number);
    }
    /**
     * Values that may be interpreted as {@link $ServerStatus$Version}.
     */
    export type $ServerStatus$Version_ = { protocol?: number, name?: string,  } | [protocol?: number, name?: string, ];
    export class $ClientboundStatusResponsePacket extends $Record implements $Packet<$ClientStatusPacketListener> {
        cachedStatus(): string;
        type(): $PacketType<$ClientboundStatusResponsePacket>;
        status(): $ServerStatus;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientStatusPacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundStatusResponsePacket>;
        constructor(status: $ServerStatus_, cachedStatus: string);
        constructor(status: $ServerStatus_);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundStatusResponsePacket}.
     */
    export type $ClientboundStatusResponsePacket_ = { cachedStatus?: string, status?: $ServerStatus_,  } | [cachedStatus?: string, status?: $ServerStatus_, ];
    export class $ServerboundStatusRequestPacket implements $Packet<$ServerStatusPacketListener> {
        type(): $PacketType<$ServerboundStatusRequestPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerStatusPacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static INSTANCE: $ServerboundStatusRequestPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundStatusRequestPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ServerStatus$Favicon extends $Record {
        iconBytes(): number[];
        static CODEC: $Codec<$ServerStatus$Favicon>;
        constructor(iconBytes: number[]);
    }
    /**
     * Values that may be interpreted as {@link $ServerStatus$Favicon}.
     */
    export type $ServerStatus$Favicon_ = { iconBytes?: number[],  } | [iconBytes?: number[], ];
    export class $StatusPacketTypes {
        static SERVERBOUND_STATUS_REQUEST: $PacketType<$ServerboundStatusRequestPacket>;
        static CLIENTBOUND_STATUS_RESPONSE: $PacketType<$ClientboundStatusResponsePacket>;
        constructor();
    }
    export class $ServerStatus extends $Record {
        favicon(): ($ServerStatus$Favicon) | undefined;
        players(): ($ServerStatus$Players) | undefined;
        isModded(): boolean;
        enforcesSecureChat(): boolean;
        version(): ($ServerStatus$Version) | undefined;
        description(): $Component;
        static CODEC: $Codec<$ServerStatus>;
        /**
         * @deprecated
         */
        constructor(arg0: $Component_, arg1: ($ServerStatus$Players_) | undefined, arg2: ($ServerStatus$Version_) | undefined, arg3: ($ServerStatus$Favicon_) | undefined, arg4: boolean);
        constructor(description: $Component_, players: ($ServerStatus$Players_) | undefined, version: ($ServerStatus$Version_) | undefined, favicon: ($ServerStatus$Favicon_) | undefined, enforcesSecureChat: boolean, isModded: boolean);
        get modded(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerStatus}.
     */
    export type $ServerStatus_ = { description?: $Component_, favicon?: ($ServerStatus$Favicon_) | undefined, version?: ($ServerStatus$Version_) | undefined, isModded?: boolean, players?: ($ServerStatus$Players_) | undefined, enforcesSecureChat?: boolean,  } | [description?: $Component_, favicon?: ($ServerStatus$Favicon_) | undefined, version?: ($ServerStatus$Version_) | undefined, isModded?: boolean, players?: ($ServerStatus$Players_) | undefined, enforcesSecureChat?: boolean, ];
    export class $StatusProtocols {
        static CLIENTBOUND: $ProtocolInfo<$ClientStatusPacketListener>;
        static CLIENTBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ClientStatusPacketListener, $FriendlyByteBuf>;
        static SERVERBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ServerStatusPacketListener, $ByteBuf>;
        static SERVERBOUND: $ProtocolInfo<$ServerStatusPacketListener>;
        constructor();
    }
}
