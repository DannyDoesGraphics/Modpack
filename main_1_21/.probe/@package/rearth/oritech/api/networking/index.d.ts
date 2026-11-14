import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Annotation } from "@package/java/lang/annotation";
import { $Codec } from "@package/com/mojang/serialization";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload$Type, $CustomPacketPayload$Type_, $CustomPacketPayload, $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $HashMap, $List, $List_ } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $FluidStack } from "@package/dev/architectury/fluid";
import { $Tuple } from "@package/net/minecraft/util";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Type, $Field } from "@package/java/lang/reflect";
import { $TriConsumer_ } from "@package/org/apache/logging/log4j/util";
import { $Enum, $Record, $Object, $Class } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityTicker, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector2i } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/rearth/oritech/api/networking" {
    export class $NetworkedBlockEntity extends $BlockEntity implements $BlockEntityTicker<$NetworkedBlockEntity> {
        serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $NetworkedBlockEntity): void;
        sendUpdate(arg0: $SyncType_): void;
        sendUpdate(arg0: $SyncType_, arg1: $ServerPlayer): void;
        getSparseUpdateInterval(): number;
        getTickUpdateInterval(): number;
        preNetworkUpdate(arg0: $SyncType_): void;
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $NetworkedBlockEntity): void;
        clientTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $NetworkedBlockEntity): void;
        setChanged(arg0: boolean): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get sparseUpdateInterval(): number;
        get tickUpdateInterval(): number;
        set changed(value: boolean);
    }
    export class $SyncType extends $Enum<$SyncType> {
        static values(): $SyncType[];
        static valueOf(arg0: string): $SyncType;
        static SPARSE_TICK: $SyncType;
        static PACKET_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SyncType>;
        static INITIAL: $SyncType;
        static GUI_OPEN: $SyncType;
        static CUSTOM: $SyncType;
        static GUI_TICK: $SyncType;
        static TICK: $SyncType;
    }
    /**
     * Values that may be interpreted as {@link $SyncType}.
     */
    export type $SyncType_ = "initial" | "tick" | "sparse_tick" | "gui_tick" | "gui_open" | "custom";
    export class $NetworkManager$MessagePayload extends $Record implements $CustomPacketPayload {
        targetEntityType(): $ResourceLocation;
        syncType(): $SyncType;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        message(): number[];
        pos(): $BlockPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static GENERIC_PACKET_ID: $CustomPacketPayload$Type<$NetworkManager$MessagePayload>;
        static PACKET_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $NetworkManager$MessagePayload>;
        constructor(pos: $BlockPos_, targetEntityType: $ResourceLocation_, syncType: $SyncType_, message: number[]);
    }
    /**
     * Values that may be interpreted as {@link $NetworkManager$MessagePayload}.
     */
    export type $NetworkManager$MessagePayload_ = { message?: number[], targetEntityType?: $ResourceLocation_, syncType?: $SyncType_, pos?: $BlockPos_,  } | [message?: number[], targetEntityType?: $ResourceLocation_, syncType?: $SyncType_, pos?: $BlockPos_, ];
    export class $AdditionalNetworkingProvider {
    }
    export interface $AdditionalNetworkingProvider {
        additionalSyncedFields(arg0: $SyncType_): $List<$Field>;
    }
    /**
     * Values that may be interpreted as {@link $AdditionalNetworkingProvider}.
     */
    export type $AdditionalNetworkingProvider_ = ((arg0: $SyncType) => $List_<$Field>);
    export class $NetworkManager {
        static decodeFields(arg0: $Object, arg1: $SyncType_, arg2: $ByteBuf, arg3: $Level_): void;
        static getMapType(arg0: $Type): ($Tuple<$Type, $Type>) | undefined;
        static sendNearby(arg0: $ServerLevel, arg1: $Vec3_, arg2: number, arg3: $CustomPacketPayload_): void;
        static encodeFields(arg0: $Object, arg1: $SyncType_, arg2: $ByteBuf, arg3: $Level_): number;
        static sendBlockHandle(arg0: $BlockEntity, arg1: $CustomPacketPayload_): void;
        static sendPlayerHandle(arg0: $CustomPacketPayload_, arg1: $ServerPlayer): void;
        static registerToClient<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type_<T>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, T>, arg2: $TriConsumer_<T, $Level, $RegistryAccess>): void;
        static registerToServer<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type_<T>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, T>, arg2: $TriConsumer_<T, $Player, $RegistryAccess>): void;
        static getAutoCodec(arg0: $Field): $StreamCodec<any, any>;
        static getAutoCodec(arg0: $Class<never>): $StreamCodec<any, any>;
        static registerCodec<T>(arg0: $StreamCodec<$ByteBuf, T>, ...arg1: $Type[]): void;
        static registerDefaultCodecs(): void;
        static createMapCodec<K, V>(arg0: $Class<K>, arg1: $Class<V>): $StreamCodec<$RegistryFriendlyByteBuf, $HashMap<K, V>>;
        static getListType(arg0: $Type): ($Type) | undefined;
        static receiveMessage(arg0: $NetworkManager$MessagePayload_, arg1: $Level_, arg2: $RegistryAccess): void;
        static init(): void;
        static sendToServer(arg0: $CustomPacketPayload_): void;
        static getSetType(arg0: $Type): ($Type) | undefined;
        static VEC2I_PACKED_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Vector2i>;
        static VEC3D_PACKET_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Vec3>;
        static FLUID_STACK_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidStack>;
        static FLUID_STACK_CODEC: $Codec<$FluidStack>;
        static SIMPLE_BLOCK_STATE_PACKET_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BlockState>;
        constructor();
    }
    export class $WorldPacketCodec<I, T> {
    }
    export interface $WorldPacketCodec<I, T> extends $StreamCodec<I, T> {
        decode(arg0: I, arg1: $Level_): T;
        decode(arg0: I): T;
        encode(arg0: I, arg1: T): void;
        encode(arg0: I, arg1: T, arg2: $Level_): void;
    }
    export class $NetworkedEventHandler {
    }
    export interface $NetworkedEventHandler {
        onNetworkUpdated(): void;
    }
    /**
     * Values that may be interpreted as {@link $NetworkedEventHandler}.
     */
    export type $NetworkedEventHandler_ = (() => void);
    export class $UpdatableField<T, R> {
    }
    export interface $UpdatableField<T, R> {
        useDeltaOnly(arg0: $SyncType_): boolean;
        getDeltaData(): R;
        getDeltaCodec(): $StreamCodec<$ByteBuf, R>;
        getFullCodec(): $StreamCodec<$ByteBuf, T>;
        handleDeltaUpdate(arg0: R): void;
        handleFullUpdate(arg0: T): void;
        getFullData(): T;
        get deltaData(): R;
        get deltaCodec(): $StreamCodec<$ByteBuf, R>;
        get fullCodec(): $StreamCodec<$ByteBuf, T>;
        get fullData(): T;
    }
    export class $SyncField implements $Annotation {
        value(): $SyncType[];
    }
    export class $ReflectiveCodecBuilder {
        static createForEnum<E extends $Enum<E>>(arg0: $Class<E>): $StreamCodec<$RegistryFriendlyByteBuf, E>;
        static create<T extends $Record>(arg0: $Class<T>): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor();
    }
}
