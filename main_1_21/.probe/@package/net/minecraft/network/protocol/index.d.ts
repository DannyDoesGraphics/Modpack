import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $CrashReport, $ReportedException } from "@package/net/minecraft";
import { $IPacketFlowExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ChannelHandlerContext } from "@package/io/netty/channel";
import { $ServerboundPacketListener, $ConnectionProtocol_, $ClientboundPacketListener, $ProtocolInfo$Unbound, $PacketListener, $ProtocolInfo } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $Enum, $Record, $Exception, $Iterable } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $StreamCodec, $StreamDecoder_, $StreamMemberEncoder_ } from "@package/net/minecraft/network/codec";
export * as game from "@package/net/minecraft/network/protocol/game";
export * as common from "@package/net/minecraft/network/protocol/common";
export * as ping from "@package/net/minecraft/network/protocol/ping";
export * as login from "@package/net/minecraft/network/protocol/login";
export * as configuration from "@package/net/minecraft/network/protocol/configuration";
export * as handshake from "@package/net/minecraft/network/protocol/handshake";
export * as status from "@package/net/minecraft/network/protocol/status";
export * as cookie from "@package/net/minecraft/network/protocol/cookie";

declare module "@package/net/minecraft/network/protocol" {
    export class $PacketType<T extends $Packet<never>> extends $Record {
        id(): $ResourceLocation;
        flow(): $PacketFlow;
        constructor(arg0: $PacketFlow_, arg1: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $PacketType}.
     */
    export type $PacketType_<T> = { id?: $ResourceLocation_, flow?: $PacketFlow_,  } | [id?: $ResourceLocation_, flow?: $PacketFlow_, ];
    export class $ProtocolInfoBuilder$CodecEntry<T extends $PacketListener, P extends $Packet<T>, B extends $ByteBuf> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ProtocolInfoBuilder$CodecEntry}.
     */
    export type $ProtocolInfoBuilder$CodecEntry_<T, P, B> = { type?: $PacketType_<$Packet<T>>, serializer?: $StreamCodec<$ByteBuf, $Packet<T>>,  } | [type?: $PacketType_<$Packet<T>>, serializer?: $StreamCodec<$ByteBuf, $Packet<T>>, ];
    export class $ProtocolInfoBuilder$Implementation<L extends $PacketListener> extends $Record implements $ProtocolInfo<L> {
    }
    /**
     * Values that may be interpreted as {@link $ProtocolInfoBuilder$Implementation}.
     */
    export type $ProtocolInfoBuilder$Implementation_<L> = { flow?: $PacketFlow_, codec?: $StreamCodec<$ByteBuf, $Packet<$PacketListener>>, bundlerInfo?: $BundlerInfo, id?: $ConnectionProtocol_,  } | [flow?: $PacketFlow_, codec?: $StreamCodec<$ByteBuf, $Packet<$PacketListener>>, bundlerInfo?: $BundlerInfo, id?: $ConnectionProtocol_, ];
    /**
     * The direction of packets.
     */
    export class $PacketFlow extends $Enum<$PacketFlow> implements $IPacketFlowExtension {
        static values(): $PacketFlow[];
        static valueOf(arg0: string): $PacketFlow;
        id(): string;
        /**
         * @return the `PacketFlow` this extension is applied to
         */
        getOpposite(): $PacketFlow;
        /**
         * @return the `LogicalSide` that is receiving packets in this `PacketFlow`
         */
        getReceptionSide(): $LogicalSide;
        /**
         * @return an indication of whether this `PacketFlow` is clientbound
         */
        isServerbound(): boolean;
        /**
         * @return an indication of whether this `PacketFlow` is clientbound
         */
        isClientbound(): boolean;
        /**
         * @return the `PacketFlow` this extension is applied to
         */
        self(): $PacketFlow;
        static CLIENTBOUND: $PacketFlow;
        static SERVERBOUND: $PacketFlow;
        get opposite(): $PacketFlow;
        get receptionSide(): $LogicalSide;
        get serverbound(): boolean;
        get clientbound(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PacketFlow}.
     */
    export type $PacketFlow_ = "serverbound" | "clientbound";
    export class $BundlerInfo {
        static createForPacket<T extends $PacketListener, P extends $BundlePacket<T>>(type: $PacketType_<P>, bundler: $Function_<$Iterable<$Packet<T>>, P>, packet: $BundleDelimiterPacket<T>): $BundlerInfo;
        static BUNDLE_SIZE_LIMIT: number;
    }
    export interface $BundlerInfo {
        startPacketBundling(packet: $Packet<never>): $BundlerInfo$Bundler;
        /**
         * @deprecated
         */
        unbundlePacket(packet: $Packet<never>, consumer: $Consumer_<$Packet<never>>): void;
        unbundlePacket(arg0: $Packet<never>, arg1: $Consumer_<$Packet<never>>, arg2: $ChannelHandlerContext): void;
    }
    export class $ProtocolInfoBuilder<T extends $PacketListener, B extends $ByteBuf> {
        buildUnbound(): $ProtocolInfo$Unbound<T, B>;
        addPacket<P extends $Packet<T>>(type: $PacketType_<P>, serializer: $StreamCodec<B, P>): $ProtocolInfoBuilder<T, B>;
        withBundlePacket<P extends $BundlePacket<T>, D extends $BundleDelimiterPacket<T>>(type: $PacketType_<P>, bundler: $Function_<$Iterable<$Packet<T>>, P>, packet: D): $ProtocolInfoBuilder<T, B>;
        static serverboundProtocol<T extends $ServerboundPacketListener, B extends $ByteBuf>(protocol: $ConnectionProtocol_, setup: $Consumer_<$ProtocolInfoBuilder<T, B>>): $ProtocolInfo$Unbound<T, B>;
        static clientboundProtocol<T extends $ClientboundPacketListener, B extends $ByteBuf>(protocol: $ConnectionProtocol_, setup: $Consumer_<$ProtocolInfoBuilder<T, B>>): $ProtocolInfo$Unbound<T, B>;
        build(bufferFactory: $Function_<$ByteBuf, B>): $ProtocolInfo<T>;
        constructor(protocol: $ConnectionProtocol_, flow: $PacketFlow_);
    }
    export class $ProtocolCodecBuilder<B extends $ByteBuf, L extends $PacketListener> {
        add<T extends $Packet<L>>(packetType: $PacketType_<T>, codec: $StreamCodec<B, T>): $ProtocolCodecBuilder<B, L>;
        build(): $StreamCodec<B, $Packet<L>>;
        constructor(flow: $PacketFlow_);
    }
    export class $BundlerInfo$Bundler {
    }
    export interface $BundlerInfo$Bundler {
        addPacket(packet: $Packet<never>): $Packet<never>;
    }
    /**
     * Values that may be interpreted as {@link $BundlerInfo$Bundler}.
     */
    export type $BundlerInfo$Bundler_ = ((arg0: $Packet<never>) => $Packet<never>);
    export class $BundleDelimiterPacket<T extends $PacketListener> implements $Packet<T> {
        type(): $PacketType<$BundleDelimiterPacket<T>>;
        handle(arg0: T): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        constructor();
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $Packet<T extends $PacketListener> {
        static codec<B extends $ByteBuf, T extends $Packet<never>>(encoder: $StreamMemberEncoder_<B, T>, decoder: $StreamDecoder_<B, T>): $StreamCodec<B, T>;
    }
    export interface $Packet<T extends $PacketListener> {
        type(): $PacketType<$Packet<T>>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: T): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $BundlePacket<T extends $PacketListener> implements $Packet<T> {
        subPackets(): $Iterable<$Packet<T>>;
        type(): $PacketType<$BundlePacket<T>>;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $PacketUtils {
        /**
         * Ensures that the given packet is handled on the main thread. If the current thread is not the main thread, this method
         * throws `RunningOnDifferentThreadException`, which is caught and ignored in the outer call (`Packet)`). Additionally, it then re-schedules the packet to be handled on the main thread,
         * which will then end up back here, but this time on the main thread.
         */
        static ensureRunningOnSameThread<T extends $PacketListener>(packet: $Packet<T>, processor: T, executor: $BlockableEventLoop<never>): void;
        /**
         * Ensures that the given packet is handled on the main thread. If the current thread is not the main thread, this method
         * throws `RunningOnDifferentThreadException`, which is caught and ignored in the outer call (`Packet)`). Additionally, it then re-schedules the packet to be handled on the main thread,
         * which will then end up back here, but this time on the main thread.
         */
        static ensureRunningOnSameThread<T extends $PacketListener>(packet: $Packet<T>, processor: T, level: $ServerLevel): void;
        static fillCrashReport<T extends $PacketListener>(crashReport: $CrashReport, packetListener: T, packet: $Packet<T> | null): void;
        static makeReportedException<T extends $PacketListener>(exception: $Exception, packet: $Packet<T>, packetListener: T): $ReportedException;
        constructor();
    }
}
