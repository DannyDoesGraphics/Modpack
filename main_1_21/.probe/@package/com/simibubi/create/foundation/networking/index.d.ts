import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SyncedBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ServerboundPacketPayload, $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/foundation/networking" {
    export class $ISyncPersistentData {
    }
    export interface $ISyncPersistentData {
        onPersistentDataUpdated(): void;
        syncPersistentDataWithTracking(arg0: $Entity): void;
    }
    /**
     * Values that may be interpreted as {@link $ISyncPersistentData}.
     */
    export type $ISyncPersistentData_ = (() => void);
    export class $ISyncPersistentData$PersistentDataPacket extends $Record implements $ClientboundPacketPayload {
        readData(): $CompoundTag;
        handle(arg0: $LocalPlayer): void;
        entityId(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ISyncPersistentData$PersistentDataPacket>;
        constructor(arg0: $Entity);
        constructor(entityId: number, readData: $CompoundTag_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ISyncPersistentData$PersistentDataPacket}.
     */
    export type $ISyncPersistentData$PersistentDataPacket_ = { readData?: $CompoundTag_, entityId?: number,  } | [readData?: $CompoundTag_, entityId?: number, ];
    export class $BlockEntityConfigurationPacket<BE extends $SyncedBlockEntity> implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $BlockPos_);
    }
    export class $BlockEntityDataPacket<BE extends $SyncedBlockEntity> implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $BlockPos_);
    }
    export class $LeftClickPacket extends $Enum<$LeftClickPacket> implements $ServerboundPacketPayload {
        static values(): $LeftClickPacket[];
        static valueOf(arg0: string): $LeftClickPacket;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static INSTANCE: $LeftClickPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $LeftClickPacket>;
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $LeftClickPacket}.
     */
    export type $LeftClickPacket_ = "instance";
}
