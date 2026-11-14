import { $KnownPack_, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $RegistrySynchronization$PackedRegistryEntry_, $Registry, $RegistrySynchronization$PackedRegistryEntry } from "@package/net/minecraft/core";
import { $IServerConfigurationPacketListenerExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $FriendlyByteBuf, $ProtocolInfo$Unbound, $ProtocolInfo, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List, $Set, $Set_, $List_ } from "@package/java/util";
import { $ServerCommonPacketListener, $ClientCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/configuration" {
    export class $ConfigurationProtocols {
        static CLIENTBOUND: $ProtocolInfo<$ClientConfigurationPacketListener>;
        static CLIENTBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ClientConfigurationPacketListener, $FriendlyByteBuf>;
        static SERVERBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ServerConfigurationPacketListener, $FriendlyByteBuf>;
        static SERVERBOUND: $ProtocolInfo<$ServerConfigurationPacketListener>;
        constructor();
    }
    export class $ServerConfigurationPacketListener {
    }
    export interface $ServerConfigurationPacketListener extends $ServerCommonPacketListener, $IServerConfigurationPacketListenerExtension {
        handleSelectKnownPacks(packet: $ServerboundSelectKnownPacks_): void;
        handleConfigurationFinished(packet: $ServerboundFinishConfigurationPacket): void;
        protocol(): $ConnectionProtocol;
    }
    export class $ClientboundResetChatPacket implements $Packet<$ClientConfigurationPacketListener> {
        type(): $PacketType<$ClientboundResetChatPacket>;
        handle(arg0: $ClientConfigurationPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static INSTANCE: $ClientboundResetChatPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundResetChatPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ServerboundFinishConfigurationPacket implements $Packet<$ServerConfigurationPacketListener> {
        type(): $PacketType<$ServerboundFinishConfigurationPacket>;
        handle(arg0: $ServerConfigurationPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static INSTANCE: $ServerboundFinishConfigurationPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundFinishConfigurationPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundUpdateEnabledFeaturesPacket extends $Record implements $Packet<$ClientConfigurationPacketListener> {
        features(): $Set<$ResourceLocation>;
        type(): $PacketType<$ClientboundUpdateEnabledFeaturesPacket>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: $ClientConfigurationPacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundUpdateEnabledFeaturesPacket>;
        constructor(arg0: $Set_<$ResourceLocation_>);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundUpdateEnabledFeaturesPacket}.
     */
    export type $ClientboundUpdateEnabledFeaturesPacket_ = { features?: $Set_<$ResourceLocation_>,  } | [features?: $Set_<$ResourceLocation_>, ];
    export class $ClientboundRegistryDataPacket extends $Record implements $Packet<$ClientConfigurationPacketListener> {
        type(): $PacketType<$ClientboundRegistryDataPacket>;
        entries(): $List<$RegistrySynchronization$PackedRegistryEntry>;
        handle(arg0: $ClientConfigurationPacketListener): void;
        registry(): $ResourceKey<$Registry<never>>;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundRegistryDataPacket>;
        constructor(arg0: $ResourceKey_<$Registry<never>>, arg1: $List_<$RegistrySynchronization$PackedRegistryEntry_>);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundRegistryDataPacket}.
     */
    export type $ClientboundRegistryDataPacket_ = { entries?: $List_<$RegistrySynchronization$PackedRegistryEntry_>, registry?: $ResourceKey_<$Registry<never>>,  } | [entries?: $List_<$RegistrySynchronization$PackedRegistryEntry_>, registry?: $ResourceKey_<$Registry<never>>, ];
    export class $ConfigurationPacketTypes {
        static CLIENTBOUND_UPDATE_ENABLED_FEATURES: $PacketType<$ClientboundUpdateEnabledFeaturesPacket>;
        static CLIENTBOUND_SELECT_KNOWN_PACKS: $PacketType<$ClientboundSelectKnownPacks>;
        static CLIENTBOUND_REGISTRY_DATA: $PacketType<$ClientboundRegistryDataPacket>;
        static SERVERBOUND_SELECT_KNOWN_PACKS: $PacketType<$ServerboundSelectKnownPacks>;
        static CLIENTBOUND_RESET_CHAT: $PacketType<$ClientboundResetChatPacket>;
        static SERVERBOUND_FINISH_CONFIGURATION: $PacketType<$ServerboundFinishConfigurationPacket>;
        static CLIENTBOUND_FINISH_CONFIGURATION: $PacketType<$ClientboundFinishConfigurationPacket>;
        constructor();
    }
    export class $ClientboundFinishConfigurationPacket implements $Packet<$ClientConfigurationPacketListener> {
        type(): $PacketType<$ClientboundFinishConfigurationPacket>;
        handle(arg0: $ClientConfigurationPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static INSTANCE: $ClientboundFinishConfigurationPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundFinishConfigurationPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ServerboundSelectKnownPacks extends $Record implements $Packet<$ServerConfigurationPacketListener> {
        knownPacks(): $List<$KnownPack>;
        type(): $PacketType<$ServerboundSelectKnownPacks>;
        handle(arg0: $ServerConfigurationPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundSelectKnownPacks>;
        constructor(knownPacks: $List_<$KnownPack_>);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundSelectKnownPacks}.
     */
    export type $ServerboundSelectKnownPacks_ = { knownPacks?: $List_<$KnownPack_>,  } | [knownPacks?: $List_<$KnownPack_>, ];
    export class $ClientConfigurationPacketListener {
    }
    export interface $ClientConfigurationPacketListener extends $ClientCommonPacketListener {
        handleRegistryData(packet: $ClientboundRegistryDataPacket_): void;
        handleResetChat(packet: $ClientboundResetChatPacket): void;
        handleEnabledFeatures(packet: $ClientboundUpdateEnabledFeaturesPacket_): void;
        handleSelectKnownPacks(packet: $ClientboundSelectKnownPacks_): void;
        handleConfigurationFinished(packet: $ClientboundFinishConfigurationPacket): void;
        protocol(): $ConnectionProtocol;
    }
    export class $ClientboundSelectKnownPacks extends $Record implements $Packet<$ClientConfigurationPacketListener> {
        knownPacks(): $List<$KnownPack>;
        type(): $PacketType<$ClientboundSelectKnownPacks>;
        handle(arg0: $ClientConfigurationPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundSelectKnownPacks>;
        constructor(arg0: $List_<$KnownPack_>);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSelectKnownPacks}.
     */
    export type $ClientboundSelectKnownPacks_ = { knownPacks?: $List_<$KnownPack_>,  } | [knownPacks?: $List_<$KnownPack_>, ];
}
