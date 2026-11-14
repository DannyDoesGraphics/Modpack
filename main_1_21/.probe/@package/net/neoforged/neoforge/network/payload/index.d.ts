import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $RegistrySnapshot } from "@package/net/neoforged/neoforge/registries";
import { $CheckExtensibleEnums$EnumEntry_, $CheckExtensibleEnums$EnumEntry } from "@package/net/neoforged/neoforge/network/configuration";
import { $Logger } from "@package/org/slf4j";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $ClientboundContainerSetDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $List, $Map_, $Set_, $Collection_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $AttachmentType, $AttachmentType_ } from "@package/net/neoforged/neoforge/attachment";
import { $BlockPos, $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $ConnectionProtocol_, $RegistryFriendlyByteBuf, $FriendlyByteBuf, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PayloadRegistration_, $NetworkPayloadSetup, $NetworkPayloadSetup_ } from "@package/net/neoforged/neoforge/network/registration";
import { $PacketFlow, $PacketFlow_ } from "@package/net/minecraft/network/protocol";
import { $MenuType_, $MenuType } from "@package/net/minecraft/world/inventory";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/network/payload" {
    export class $CommonVersionPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CommonVersionPayload>;
        versions(): $List<number>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static ID: $ResourceLocation;
        static TYPE: $CustomPacketPayload$Type<$CommonVersionPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $CommonVersionPayload>;
        constructor();
        constructor(versions: $List_<number>);
    }
    /**
     * Values that may be interpreted as {@link $CommonVersionPayload}.
     */
    export type $CommonVersionPayload_ = { versions?: $List_<number>,  } | [versions?: $List_<number>, ];
    export class $ClientboundCustomSetTimePayload extends $Record implements $CustomPacketPayload {
        gameRule(): boolean;
        dayTimeFraction(): number;
        dayTimePerTick(): number;
        gameTime(): number;
        dayTime(): number;
        type(): $CustomPacketPayload$Type<$ClientboundCustomSetTimePayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$ClientboundCustomSetTimePayload>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundCustomSetTimePayload>;
        constructor(gameTime: number, dayTime: number, gameRule: boolean, dayTimeFraction: number, dayTimePerTick: number);
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCustomSetTimePayload}.
     */
    export type $ClientboundCustomSetTimePayload_ = { gameRule?: boolean, dayTime?: number, dayTimePerTick?: number, dayTimeFraction?: number, gameTime?: number,  } | [gameRule?: boolean, dayTime?: number, dayTimePerTick?: number, dayTimeFraction?: number, gameTime?: number, ];
    export class $FrozenRegistryPayload extends $Record implements $CustomPacketPayload {
        registryName(): $ResourceLocation;
        type(): $CustomPacketPayload$Type<$FrozenRegistryPayload>;
        snapshot(): $RegistrySnapshot;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$FrozenRegistryPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $FrozenRegistryPayload>;
        constructor(registryName: $ResourceLocation_, snapshot: $RegistrySnapshot);
    }
    /**
     * Values that may be interpreted as {@link $FrozenRegistryPayload}.
     */
    export type $FrozenRegistryPayload_ = { registryName?: $ResourceLocation_, snapshot?: $RegistrySnapshot,  } | [registryName?: $ResourceLocation_, snapshot?: $RegistrySnapshot, ];
    export class $AuxiliaryLightDataPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$AuxiliaryLightDataPayload>;
        entries(): $Map<$BlockPos, number>;
        pos(): $ChunkPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$AuxiliaryLightDataPayload>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AuxiliaryLightDataPayload>;
        constructor(pos: $ChunkPos, entries: $Map_<$BlockPos_, number>);
    }
    /**
     * Values that may be interpreted as {@link $AuxiliaryLightDataPayload}.
     */
    export type $AuxiliaryLightDataPayload_ = { entries?: $Map_<$BlockPos_, number>, pos?: $ChunkPos,  } | [entries?: $Map_<$BlockPos_, number>, pos?: $ChunkPos, ];
    export class $ModdedNetworkPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$ModdedNetworkPayload>;
        setup(): $NetworkPayloadSetup;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static ID: $ResourceLocation;
        static TYPE: $CustomPacketPayload$Type<$ModdedNetworkPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ModdedNetworkPayload>;
        constructor(setup: $NetworkPayloadSetup_);
    }
    /**
     * Values that may be interpreted as {@link $ModdedNetworkPayload}.
     */
    export type $ModdedNetworkPayload_ = { setup?: $NetworkPayloadSetup_,  } | [setup?: $NetworkPayloadSetup_, ];
    /**
     * Protocol utilities for communicating over Dinnerbone's protocol.
     */
    export class $DinnerboneProtocolUtils {
        static CHANNELS_CODEC: $StreamCodec<$FriendlyByteBuf, $Set<$ResourceLocation>>;
        static LOGGER: $Logger;
    }
    export class $MinecraftRegisterPayload extends $Record implements $CustomPacketPayload {
        newChannels(): $Set<$ResourceLocation>;
        type(): $CustomPacketPayload$Type<$MinecraftRegisterPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static ID: $ResourceLocation;
        static TYPE: $CustomPacketPayload$Type<$MinecraftRegisterPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $MinecraftRegisterPayload>;
        constructor(newChannels: $Set_<$ResourceLocation_>);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftRegisterPayload}.
     */
    export type $MinecraftRegisterPayload_ = { newChannels?: $Set_<$ResourceLocation_>,  } | [newChannels?: $Set_<$ResourceLocation_>, ];
    export class $RegistryDataMapSyncPayload<T> extends $Record implements $CustomPacketPayload {
        dataMaps(): $Map<$ResourceLocation, $Map<$ResourceKey<T>, never>>;
        type(): $CustomPacketPayload$Type<$RegistryDataMapSyncPayload<never>>;
        static decode<T>(arg0: $RegistryFriendlyByteBuf): $RegistryDataMapSyncPayload<T>;
        write(arg0: $RegistryFriendlyByteBuf): void;
        registryKey(): $ResourceKey<$Registry<T>>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$RegistryDataMapSyncPayload<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RegistryDataMapSyncPayload<never>>;
        constructor(registryKey: $ResourceKey_<$Registry<T>>, dataMaps: $Map_<$ResourceLocation_, $Map_<$ResourceKey_<T>, never>>);
    }
    /**
     * Values that may be interpreted as {@link $RegistryDataMapSyncPayload}.
     */
    export type $RegistryDataMapSyncPayload_<T> = { registryKey?: $ResourceKey_<$Registry<any>>, dataMaps?: $Map_<$ResourceLocation_, $Map_<$ResourceKey_<any>, never>>,  } | [registryKey?: $ResourceKey_<$Registry<any>>, dataMaps?: $Map_<$ResourceLocation_, $Map_<$ResourceKey_<any>, never>>, ];
    export class $KnownRegistryDataMapsReplyPayload extends $Record implements $CustomPacketPayload {
        dataMaps(): $Map<$ResourceKey<$Registry<never>>, $Collection<$ResourceLocation>>;
        type(): $CustomPacketPayload$Type<$KnownRegistryDataMapsReplyPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$KnownRegistryDataMapsReplyPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $KnownRegistryDataMapsReplyPayload>;
        constructor(dataMaps: $Map_<$ResourceKey_<$Registry<never>>, $Collection_<$ResourceLocation_>>);
    }
    /**
     * Values that may be interpreted as {@link $KnownRegistryDataMapsReplyPayload}.
     */
    export type $KnownRegistryDataMapsReplyPayload_ = { dataMaps?: $Map_<$ResourceKey_<$Registry<never>>, $Collection_<$ResourceLocation_>>,  } | [dataMaps?: $Map_<$ResourceKey_<$Registry<never>>, $Collection_<$ResourceLocation_>>, ];
    export class $SyncAttachmentsPayload$ChunkTarget extends $Record implements $SyncAttachmentsPayload$Target {
        pos(): $ChunkPos;
        constructor(pos: $ChunkPos);
    }
    /**
     * Values that may be interpreted as {@link $SyncAttachmentsPayload$ChunkTarget}.
     */
    export type $SyncAttachmentsPayload$ChunkTarget_ = { pos?: $ChunkPos,  } | [pos?: $ChunkPos, ];
    export class $ModdedNetworkQueryComponent extends $Record {
        version(): string;
        id(): $ResourceLocation;
        optional(): boolean;
        flow(): ($PacketFlow) | undefined;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ModdedNetworkQueryComponent>;
        constructor(arg0: $PayloadRegistration_<never>);
        constructor(id: $ResourceLocation_, version: string, flow: ($PacketFlow_) | undefined, optional: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ModdedNetworkQueryComponent}.
     */
    export type $ModdedNetworkQueryComponent_ = { version?: string, optional?: boolean, flow?: ($PacketFlow_) | undefined, id?: $ResourceLocation_,  } | [version?: string, optional?: boolean, flow?: ($PacketFlow_) | undefined, id?: $ResourceLocation_, ];
    export class $AdvancedOpenScreenPayload extends $Record implements $CustomPacketPayload {
        menuType(): $MenuType<never>;
        windowId(): number;
        additionalData(): number[];
        name(): $Component;
        type(): $CustomPacketPayload$Type<$AdvancedOpenScreenPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$AdvancedOpenScreenPayload>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AdvancedOpenScreenPayload>;
        constructor(windowId: number, menuType: $MenuType_<never>, name: $Component_, additionalData: number[]);
    }
    /**
     * Values that may be interpreted as {@link $AdvancedOpenScreenPayload}.
     */
    export type $AdvancedOpenScreenPayload_ = { additionalData?: number[], menuType?: $MenuType_<never>, windowId?: number, name?: $Component_,  } | [additionalData?: number[], menuType?: $MenuType_<never>, windowId?: number, name?: $Component_, ];
    export class $SyncAttachmentsPayload$LevelTarget extends $Record implements $SyncAttachmentsPayload$Target {
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $SyncAttachmentsPayload$LevelTarget}.
     */
    export type $SyncAttachmentsPayload$LevelTarget_ = {  } | [];
    export class $ExtensibleEnumAcknowledgePayload implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$ExtensibleEnumAcknowledgePayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static INSTANCE: $ExtensibleEnumAcknowledgePayload;
        static TYPE: $CustomPacketPayload$Type<$ExtensibleEnumAcknowledgePayload>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ExtensibleEnumAcknowledgePayload>;
    }
    export class $SyncAttachmentsPayload$Target {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SyncAttachmentsPayload$Target>;
    }
    export interface $SyncAttachmentsPayload$Target {
    }
    export class $FrozenRegistrySyncStartPayload extends $Record implements $CustomPacketPayload {
        toAccess(): $List<$ResourceLocation>;
        type(): $CustomPacketPayload$Type<$FrozenRegistrySyncStartPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$FrozenRegistrySyncStartPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $FrozenRegistrySyncStartPayload>;
        constructor(toAccess: $List_<$ResourceLocation_>);
    }
    /**
     * Values that may be interpreted as {@link $FrozenRegistrySyncStartPayload}.
     */
    export type $FrozenRegistrySyncStartPayload_ = { toAccess?: $List_<$ResourceLocation_>,  } | [toAccess?: $List_<$ResourceLocation_>, ];
    export class $SyncAttachmentsPayload$EntityTarget extends $Record implements $SyncAttachmentsPayload$Target {
        entity(): number;
        constructor(entity: number);
    }
    /**
     * Values that may be interpreted as {@link $SyncAttachmentsPayload$EntityTarget}.
     */
    export type $SyncAttachmentsPayload$EntityTarget_ = { entity?: number,  } | [entity?: number, ];
    export class $MinecraftUnregisterPayload extends $Record implements $CustomPacketPayload {
        forgottenChannels(): $Set<$ResourceLocation>;
        type(): $CustomPacketPayload$Type<$MinecraftUnregisterPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static ID: $ResourceLocation;
        static TYPE: $CustomPacketPayload$Type<$MinecraftUnregisterPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $MinecraftUnregisterPayload>;
        constructor(forgottenChannels: $Set_<$ResourceLocation_>);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftUnregisterPayload}.
     */
    export type $MinecraftUnregisterPayload_ = { forgottenChannels?: $Set_<$ResourceLocation_>,  } | [forgottenChannels?: $Set_<$ResourceLocation_>, ];
    export class $ConfigFilePayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$ConfigFilePayload>;
        fileName(): string;
        contents(): number[];
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$ConfigFilePayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ConfigFilePayload>;
        constructor(fileName: string, contents: number[]);
    }
    /**
     * Values that may be interpreted as {@link $ConfigFilePayload}.
     */
    export type $ConfigFilePayload_ = { fileName?: string, contents?: number[],  } | [fileName?: string, contents?: number[], ];
    export class $FeatureFlagAcknowledgePayload implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$FeatureFlagAcknowledgePayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static INSTANCE: $FeatureFlagAcknowledgePayload;
        static TYPE: $CustomPacketPayload$Type<$FeatureFlagAcknowledgePayload>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FeatureFlagAcknowledgePayload>;
    }
    export class $ModdedNetworkSetupFailedPayload extends $Record implements $CustomPacketPayload {
        failureReasons(): $Map<$ResourceLocation, $Component>;
        type(): $CustomPacketPayload$Type<$ModdedNetworkSetupFailedPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static ID: $ResourceLocation;
        static TYPE: $CustomPacketPayload$Type<$ModdedNetworkSetupFailedPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ModdedNetworkSetupFailedPayload>;
        constructor(failureReasons: $Map_<$ResourceLocation_, $Component_>);
    }
    /**
     * Values that may be interpreted as {@link $ModdedNetworkSetupFailedPayload}.
     */
    export type $ModdedNetworkSetupFailedPayload_ = { failureReasons?: $Map_<$ResourceLocation_, $Component_>,  } | [failureReasons?: $Map_<$ResourceLocation_, $Component_>, ];
    export class $FeatureFlagDataPayload extends $Record implements $CustomPacketPayload {
        moddedFlags(): $Set<$ResourceLocation>;
        type(): $CustomPacketPayload$Type<$FeatureFlagDataPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$FeatureFlagDataPayload>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FeatureFlagDataPayload>;
        constructor(moddedFlags: $Set_<$ResourceLocation_>);
    }
    /**
     * Values that may be interpreted as {@link $FeatureFlagDataPayload}.
     */
    export type $FeatureFlagDataPayload_ = { moddedFlags?: $Set_<$ResourceLocation_>,  } | [moddedFlags?: $Set_<$ResourceLocation_>, ];
    export class $AdvancedAddEntityPayload extends $Record implements $CustomPacketPayload {
        customPayload(): number[];
        type(): $CustomPacketPayload$Type<$AdvancedAddEntityPayload>;
        entityId(): number;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$AdvancedAddEntityPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $AdvancedAddEntityPayload>;
        constructor(arg0: $Entity);
        constructor(entityId: number, customPayload: number[]);
    }
    /**
     * Values that may be interpreted as {@link $AdvancedAddEntityPayload}.
     */
    export type $AdvancedAddEntityPayload_ = { entityId?: number, customPayload?: number[],  } | [entityId?: number, customPayload?: number[], ];
    export class $SyncAttachmentsPayload extends $Record implements $CustomPacketPayload {
        syncPayload(): number[];
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        target(): $SyncAttachmentsPayload$Target;
        types(): $List<$AttachmentType<never>>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$SyncAttachmentsPayload>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SyncAttachmentsPayload>;
        constructor(target: $SyncAttachmentsPayload$Target, types: $List_<$AttachmentType_<never>>, syncPayload: number[]);
    }
    /**
     * Values that may be interpreted as {@link $SyncAttachmentsPayload}.
     */
    export type $SyncAttachmentsPayload_ = { syncPayload?: number[], target?: $SyncAttachmentsPayload$Target, types?: $List_<$AttachmentType_<never>>,  } | [syncPayload?: number[], target?: $SyncAttachmentsPayload$Target, types?: $List_<$AttachmentType_<never>>, ];
    export class $KnownRegistryDataMapsPayload extends $Record implements $CustomPacketPayload {
        dataMaps(): $Map<$ResourceKey<$Registry<never>>, $List<$KnownRegistryDataMapsPayload$KnownDataMap>>;
        type(): $CustomPacketPayload$Type<$KnownRegistryDataMapsPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$KnownRegistryDataMapsPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $KnownRegistryDataMapsPayload>;
        constructor(dataMaps: $Map_<$ResourceKey_<$Registry<never>>, $List_<$KnownRegistryDataMapsPayload$KnownDataMap_>>);
    }
    /**
     * Values that may be interpreted as {@link $KnownRegistryDataMapsPayload}.
     */
    export type $KnownRegistryDataMapsPayload_ = { dataMaps?: $Map_<$ResourceKey_<$Registry<never>>, $List_<$KnownRegistryDataMapsPayload$KnownDataMap_>>,  } | [dataMaps?: $Map_<$ResourceKey_<$Registry<never>>, $List_<$KnownRegistryDataMapsPayload$KnownDataMap_>>, ];
    export class $SyncAttachmentsPayload$BlockEntityTarget extends $Record implements $SyncAttachmentsPayload$Target {
        pos(): $BlockPos;
        constructor(pos: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $SyncAttachmentsPayload$BlockEntityTarget}.
     */
    export type $SyncAttachmentsPayload$BlockEntityTarget_ = { pos?: $BlockPos_,  } | [pos?: $BlockPos_, ];
    export class $ModdedNetworkComponent extends $Record {
        version(): (string) | undefined;
        id(): $ResourceLocation;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ModdedNetworkComponent>;
        constructor(id: $ResourceLocation_, version: (string) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ModdedNetworkComponent}.
     */
    export type $ModdedNetworkComponent_ = { version?: (string) | undefined, id?: $ResourceLocation_,  } | [version?: (string) | undefined, id?: $ResourceLocation_, ];
    export class $ExtensibleEnumDataPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$ExtensibleEnumDataPayload>;
        enumEntries(): $Map<string, $CheckExtensibleEnums$EnumEntry>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$ExtensibleEnumDataPayload>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ExtensibleEnumDataPayload>;
        constructor(enumEntries: $Map_<string, $CheckExtensibleEnums$EnumEntry_>);
    }
    /**
     * Values that may be interpreted as {@link $ExtensibleEnumDataPayload}.
     */
    export type $ExtensibleEnumDataPayload_ = { enumEntries?: $Map_<string, $CheckExtensibleEnums$EnumEntry_>,  } | [enumEntries?: $Map_<string, $CheckExtensibleEnums$EnumEntry_>, ];
    export class $CommonRegisterPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CommonRegisterPayload>;
        version(): number;
        protocol(): $ConnectionProtocol;
        channels(): $Set<$ResourceLocation>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static ID: $ResourceLocation;
        static TYPE: $CustomPacketPayload$Type<$CommonRegisterPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $CommonRegisterPayload>;
        constructor(version: number, protocol: $ConnectionProtocol_, channels: $Set_<$ResourceLocation_>);
    }
    /**
     * Values that may be interpreted as {@link $CommonRegisterPayload}.
     */
    export type $CommonRegisterPayload_ = { version?: number, channels?: $Set_<$ResourceLocation_>, protocol?: $ConnectionProtocol_,  } | [version?: number, channels?: $Set_<$ResourceLocation_>, protocol?: $ConnectionProtocol_, ];
    /**
     * This payload is sent to the client when the server has finished sending all the frozen registries.
     */
    export class $FrozenRegistrySyncCompletedPayload implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$FrozenRegistrySyncCompletedPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static INSTANCE: $FrozenRegistrySyncCompletedPayload;
        static TYPE: $CustomPacketPayload$Type<$FrozenRegistrySyncCompletedPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $FrozenRegistrySyncCompletedPayload>;
    }
    export class $KnownRegistryDataMapsPayload$KnownDataMap extends $Record {
        id(): $ResourceLocation;
        mandatory(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $KnownRegistryDataMapsPayload$KnownDataMap>;
        constructor(id: $ResourceLocation_, mandatory: boolean);
    }
    /**
     * Values that may be interpreted as {@link $KnownRegistryDataMapsPayload$KnownDataMap}.
     */
    export type $KnownRegistryDataMapsPayload$KnownDataMap_ = { id?: $ResourceLocation_, mandatory?: boolean,  } | [id?: $ResourceLocation_, mandatory?: boolean, ];
    export class $ModdedNetworkQueryPayload extends $Record implements $CustomPacketPayload {
        static fromRegistry(arg0: $Map_<$ConnectionProtocol_, $Map_<$ResourceLocation_, $PayloadRegistration_<never>>>): $ModdedNetworkQueryPayload;
        type(): $CustomPacketPayload$Type<$ModdedNetworkQueryPayload>;
        queries(): $Map<$ConnectionProtocol, $Set<$ModdedNetworkQueryComponent>>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static ID: $ResourceLocation;
        static TYPE: $CustomPacketPayload$Type<$ModdedNetworkQueryPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ModdedNetworkQueryPayload>;
        constructor(queries: $Map_<$ConnectionProtocol_, $Set_<$ModdedNetworkQueryComponent_>>);
    }
    /**
     * Values that may be interpreted as {@link $ModdedNetworkQueryPayload}.
     */
    export type $ModdedNetworkQueryPayload_ = { queries?: $Map_<$ConnectionProtocol_, $Set_<$ModdedNetworkQueryComponent_>>,  } | [queries?: $Map_<$ConnectionProtocol_, $Set_<$ModdedNetworkQueryComponent_>>, ];
    export class $AdvancedContainerSetDataPayload extends $Record implements $CustomPacketPayload {
        toVanillaPacket(): $ClientboundContainerSetDataPacket;
        containerId(): number;
        dataId(): number;
        type(): $CustomPacketPayload$Type<$AdvancedContainerSetDataPayload>;
        value(): number;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$AdvancedContainerSetDataPayload>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AdvancedContainerSetDataPayload>;
        constructor(containerId: number, dataId: number, value: number);
    }
    /**
     * Values that may be interpreted as {@link $AdvancedContainerSetDataPayload}.
     */
    export type $AdvancedContainerSetDataPayload_ = { value?: number, containerId?: number, dataId?: number,  } | [value?: number, containerId?: number, dataId?: number, ];
    export class $SplitPacketPayload extends $Record implements $CustomPacketPayload {
        payload(): number[];
        type(): $CustomPacketPayload$Type<$SplitPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$SplitPacketPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $SplitPacketPayload>;
        constructor(payload: number[]);
    }
    /**
     * Values that may be interpreted as {@link $SplitPacketPayload}.
     */
    export type $SplitPacketPayload_ = { payload?: number[],  } | [payload?: number[], ];
}
