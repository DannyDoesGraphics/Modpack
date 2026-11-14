import { $Level_ } from "@package/net/minecraft/world/level";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Channel, $ChannelPipeline } from "@package/io/netty/channel";
import { $InetSocketAddress } from "@package/java/net";
import { $BandwidthDebugMonitor, $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $PacketFlow_ } from "@package/net/minecraft/network/protocol";
import { $Enum } from "@package/java/lang";
import { $UUID_ } from "@package/java/util";

declare module "@package/dev/ryanhcode/sable/network/udp" {
    export class $SableUDPServer {
        isConnectedTo(arg0: $ServerPlayer): boolean;
        receiveAuthenticationPacket(arg0: $UUID_, arg1: $InetSocketAddress): void;
        receiveAlivePacket(arg0: $InetSocketAddress): void;
        sendUDPPacket(arg0: $ServerPlayer, arg1: $SableUDPPacket_, arg2: boolean): boolean;
        beginAuthentication(arg0: $ServerPlayer): void;
        sendPings(): void;
        static getServer(arg0: $MinecraftServer): $SableUDPServer;
        static PING_INTERVAL: number;
        constructor(arg0: $MinecraftServer, arg1: $Channel);
    }
    export class $SableUDPPacketType extends $Enum<$SableUDPPacketType> {
        static values(): $SableUDPPacketType[];
        static valueOf(arg0: string): $SableUDPPacketType;
        write(arg0: $RegistryFriendlyByteBuf, arg1: $SableUDPPacket_): void;
        create(arg0: $RegistryFriendlyByteBuf): $SableUDPPacket;
        static SNAPSHOT: $SableUDPPacketType;
        static AUTH: $SableUDPPacketType;
        static PING: $SableUDPPacketType;
        static VALUES: $SableUDPPacketType[];
        static SNAPSHOT_INFO: $SableUDPPacketType;
        static ALIVE_SERVERBOUND: $SableUDPPacketType;
        static KEEP_ALIVE_CLIENTBOUND: $SableUDPPacketType;
    }
    /**
     * Values that may be interpreted as {@link $SableUDPPacketType}.
     */
    export type $SableUDPPacketType_ = "ping" | "snapshot" | "snapshot_info" | "auth" | "keep_alive_clientbound" | "alive_serverbound";
    export class $SableUDPPacket {
        static configureSerialization(arg0: $ChannelPipeline, arg1: $PacketFlow_, arg2: boolean, arg3: $BandwidthDebugMonitor): void;
        static configureInMemoryPipeline(arg0: $ChannelPipeline, arg1: $PacketFlow_): void;
    }
    export interface $SableUDPPacket {
        handleServer(arg0: $MinecraftServer, arg1: $InetSocketAddress): void;
        getType(): $SableUDPPacketType;
        handleClient(arg0: $Level_): void;
        get type(): $SableUDPPacketType;
    }
    /**
     * Values that may be interpreted as {@link $SableUDPPacket}.
     */
    export type $SableUDPPacket_ = (() => $SableUDPPacketType_);
}
