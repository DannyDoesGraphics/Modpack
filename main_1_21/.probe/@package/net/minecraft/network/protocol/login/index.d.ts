import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PublicKey, $PrivateKey } from "@package/java/security";
import { $ServerPacketListener } from "@package/net/minecraft/network/protocol/game";
import { $UUID, $UUID_ } from "@package/java/util";
import { $ClientCookiePacketListener, $ServerCookiePacketListener } from "@package/net/minecraft/network/protocol/cookie";
import { $ClientboundPacketListener, $FriendlyByteBuf, $ProtocolInfo$Unbound, $ProtocolInfo, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $CustomQueryAnswerPayload_, $CustomQueryAnswerPayload, $CustomQueryPayload } from "@package/net/minecraft/network/protocol/login/custom";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $SecretKey } from "@package/javax/crypto";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as custom from "@package/net/minecraft/network/protocol/login/custom";

declare module "@package/net/minecraft/network/protocol/login" {
    export class $ServerboundCustomQueryAnswerPacket extends $Record implements $Packet<$ServerLoginPacketListener> {
        transactionId(): number;
        payload(): $CustomQueryAnswerPayload;
        type(): $PacketType<$ServerboundCustomQueryAnswerPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ServerLoginPacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundCustomQueryAnswerPacket>;
        constructor(arg0: number, arg1: $CustomQueryAnswerPayload_ | null);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundCustomQueryAnswerPacket}.
     */
    export type $ServerboundCustomQueryAnswerPacket_ = { payload?: $CustomQueryAnswerPayload_, transactionId?: number,  } | [payload?: $CustomQueryAnswerPayload_, transactionId?: number, ];
    export class $LoginProtocols {
        static CLIENTBOUND: $ProtocolInfo<$ClientLoginPacketListener>;
        static CLIENTBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ClientLoginPacketListener, $FriendlyByteBuf>;
        static SERVERBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ServerLoginPacketListener, $FriendlyByteBuf>;
        static SERVERBOUND: $ProtocolInfo<$ServerLoginPacketListener>;
        constructor();
    }
    export class $ClientboundGameProfilePacket extends $Record implements $Packet<$ClientLoginPacketListener> {
        /**
         * @deprecated
         * Whether decoding errors will be ignored for this packet.
         */
        strictErrorHandling(): boolean;
        type(): $PacketType<$ClientboundGameProfilePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        gameProfile(): $GameProfile;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundGameProfilePacket>;
        constructor(arg0: $GameProfile, arg1: boolean);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundGameProfilePacket}.
     */
    export type $ClientboundGameProfilePacket_ = { strictErrorHandling?: boolean, gameProfile?: $GameProfile,  } | [strictErrorHandling?: boolean, gameProfile?: $GameProfile, ];
    export class $ClientboundCustomQueryPacket extends $Record implements $Packet<$ClientLoginPacketListener> {
        transactionId(): number;
        payload(): $CustomQueryPayload;
        type(): $PacketType<$ClientboundCustomQueryPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCustomQueryPacket>;
        constructor(arg0: number, arg1: $CustomQueryPayload);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCustomQueryPacket}.
     */
    export type $ClientboundCustomQueryPacket_ = { payload?: $CustomQueryPayload, transactionId?: number,  } | [payload?: $CustomQueryPayload, transactionId?: number, ];
    export class $ServerboundLoginAcknowledgedPacket implements $Packet<$ServerLoginPacketListener> {
        type(): $PacketType<$ServerboundLoginAcknowledgedPacket>;
        handle(arg0: $ServerLoginPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static INSTANCE: $ServerboundLoginAcknowledgedPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundLoginAcknowledgedPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ServerboundHelloPacket extends $Record implements $Packet<$ServerLoginPacketListener> {
        name(): string;
        type(): $PacketType<$ServerboundHelloPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerLoginPacketListener): void;
        profileId(): $UUID;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundHelloPacket>;
        constructor(arg0: string, arg1: $UUID_);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundHelloPacket}.
     */
    export type $ServerboundHelloPacket_ = { profileId?: $UUID_, name?: string,  } | [profileId?: $UUID_, name?: string, ];
    export class $LoginPacketTypes {
        static CLIENTBOUND_GAME_PROFILE: $PacketType<$ClientboundGameProfilePacket>;
        static CLIENTBOUND_CUSTOM_QUERY: $PacketType<$ClientboundCustomQueryPacket>;
        static CLIENTBOUND_HELLO: $PacketType<$ClientboundHelloPacket>;
        static CLIENTBOUND_LOGIN_DISCONNECT: $PacketType<$ClientboundLoginDisconnectPacket>;
        static SERVERBOUND_KEY: $PacketType<$ServerboundKeyPacket>;
        static CLIENTBOUND_LOGIN_COMPRESSION: $PacketType<$ClientboundLoginCompressionPacket>;
        static SERVERBOUND_HELLO: $PacketType<$ServerboundHelloPacket>;
        static SERVERBOUND_CUSTOM_QUERY_ANSWER: $PacketType<$ServerboundCustomQueryAnswerPacket>;
        static SERVERBOUND_LOGIN_ACKNOWLEDGED: $PacketType<$ServerboundLoginAcknowledgedPacket>;
        constructor();
    }
    export class $ClientboundHelloPacket implements $Packet<$ClientLoginPacketListener> {
        getChallenge(): number[];
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        shouldAuthenticate(): boolean;
        type(): $PacketType<$ClientboundHelloPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        getPublicKey(): $PublicKey;
        getServerId(): string;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundHelloPacket>;
        constructor(serverId: string, publicKey: number[], challenge: number[], shouldAuthenticate: boolean);
        get challenge(): number[];
        get publicKey(): $PublicKey;
        get serverId(): string;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * PacketListener for the server side of the LOGIN protocol.
     */
    export class $ServerLoginPacketListener {
    }
    export interface $ServerLoginPacketListener extends $ServerCookiePacketListener, $ServerPacketListener {
        handleKey(packet: $ServerboundKeyPacket): void;
        handleLoginAcknowledgement(packet: $ServerboundLoginAcknowledgedPacket): void;
        handleCustomQueryPacket(packet: $ServerboundCustomQueryAnswerPacket_): void;
        protocol(): $ConnectionProtocol;
        handleHello(packet: $ServerboundHelloPacket_): void;
    }
    export class $ServerboundKeyPacket implements $Packet<$ServerLoginPacketListener> {
        isChallengeValid(expected: number[], key: $PrivateKey): boolean;
        getSecretKey(key: $PrivateKey): $SecretKey;
        type(): $PacketType<$ServerboundKeyPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ServerLoginPacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundKeyPacket>;
        constructor(secretKey: $SecretKey, publicKey: $PublicKey, challenge: number[]);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundLoginCompressionPacket implements $Packet<$ClientLoginPacketListener> {
        getCompressionThreshold(): number;
        type(): $PacketType<$ClientboundLoginCompressionPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLoginCompressionPacket>;
        constructor(compressionThreshold: number);
        get compressionThreshold(): number;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundLoginDisconnectPacket implements $Packet<$ClientLoginPacketListener> {
        type(): $PacketType<$ClientboundLoginDisconnectPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        getReason(): $Component;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLoginDisconnectPacket>;
        constructor(reason: $Component_);
        get reason(): $Component;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * PacketListener for the client side of the LOGIN protocol.
     */
    export class $ClientLoginPacketListener {
    }
    export interface $ClientLoginPacketListener extends $ClientCookiePacketListener, $ClientboundPacketListener {
        protocol(): $ConnectionProtocol;
        handleHello(packet: $ClientboundHelloPacket): void;
        handleGameProfile(packet: $ClientboundGameProfilePacket_): void;
        handleDisconnect(packet: $ClientboundLoginDisconnectPacket): void;
        handleCompression(packet: $ClientboundLoginCompressionPacket): void;
        handleCustomQuery(packet: $ClientboundCustomQueryPacket_): void;
    }
}
