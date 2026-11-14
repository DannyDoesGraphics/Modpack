import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $UUID, $Map_, $Map, $UUID_ } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $AbstractContraptionEntity } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/contraptions/sync" {
    export class $ContraptionInteractionPacket extends $Record implements $ServerboundPacketPayload {
        face(): $Direction;
        target(): number;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        localPos(): $BlockPos;
        hand(): $InteractionHand;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionInteractionPacket>;
        constructor(arg0: $AbstractContraptionEntity, arg1: $InteractionHand_, arg2: $BlockPos_, arg3: $Direction_);
        constructor(hand: $InteractionHand_, target: number, localPos: $BlockPos_, face: $Direction_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionInteractionPacket}.
     */
    export type $ContraptionInteractionPacket_ = { target?: number, localPos?: $BlockPos_, hand?: $InteractionHand_, face?: $Direction_,  } | [target?: number, localPos?: $BlockPos_, hand?: $InteractionHand_, face?: $Direction_, ];
    export class $LimbSwingUpdatePacket extends $Record implements $ClientboundPacketPayload {
        limbSwing(): number;
        position(): $Vec3;
        handle(arg0: $LocalPlayer): void;
        entityId(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $LimbSwingUpdatePacket>;
        constructor(entityId: number, position: $Vec3_, limbSwing: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $LimbSwingUpdatePacket}.
     */
    export type $LimbSwingUpdatePacket_ = { entityId?: number, position?: $Vec3_, limbSwing?: number,  } | [entityId?: number, position?: $Vec3_, limbSwing?: number, ];
    export class $ClientMotionPacket extends $Record implements $ServerboundPacketPayload {
        limbSwing(): number;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        onGround(): boolean;
        motion(): $Vec3;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientMotionPacket>;
        constructor(motion: $Vec3_, onGround: boolean, limbSwing: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ClientMotionPacket}.
     */
    export type $ClientMotionPacket_ = { motion?: $Vec3_, limbSwing?: number, onGround?: boolean,  } | [motion?: $Vec3_, limbSwing?: number, onGround?: boolean, ];
    export class $ContraptionSeatMappingPacket extends $Record implements $ClientboundPacketPayload {
        dismountedId(): number;
        handle(arg0: $LocalPlayer): void;
        mapping(): $Map<$UUID, number>;
        entityId(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionSeatMappingPacket>;
        constructor(entityId: number, mapping: $Map_<$UUID_, number>, dismountedId: number);
        constructor(arg0: number, arg1: $Map_<$UUID_, number>);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionSeatMappingPacket}.
     */
    export type $ContraptionSeatMappingPacket_ = { entityId?: number, dismountedId?: number, mapping?: $Map_<$UUID_, number>,  } | [entityId?: number, dismountedId?: number, mapping?: $Map_<$UUID_, number>, ];
}
