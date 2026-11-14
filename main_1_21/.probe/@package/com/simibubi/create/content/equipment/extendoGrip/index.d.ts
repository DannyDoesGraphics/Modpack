import { $Item$Properties, $Item } from "@package/net/minecraft/world/item";
import { $CustomRenderedItemModelRenderer } from "@package/com/simibubi/create/foundation/item/render";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AttributeModifier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Map } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $AttackEntityEvent, $PlayerInteractEvent$EntityInteract, $PlayerEvent$PlayerLoggedInEvent, $PlayerInteractEvent$EntityInteractSpecific } from "@package/net/neoforged/neoforge/event/entity/player";
import { $EntityTickEvent$Pre } from "@package/net/neoforged/neoforge/event/tick";
import { $RenderHandEvent, $InputEvent$InteractionKeyMappingTriggered } from "@package/net/neoforged/neoforge/client/event";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $LivingKnockBackEvent, $LivingIncomingDamageEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $BlockEvent$BreakEvent, $BlockEvent$EntityPlaceEvent } from "@package/net/neoforged/neoforge/event/level";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/equipment/extendoGrip" {
    export class $ExtendoGripRenderHandler {
        static onRenderPlayerHand(arg0: $RenderHandEvent): void;
        static tick(): void;
        static mainHandAnimation: number;
        static pose: $PartialModel;
        static lastMainHandAnimation: number;
        constructor();
    }
    export class $ExtendoGripInteractionPacket extends $Record implements $ServerboundPacketPayload {
        point(): $Vec3;
        target(): number;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        hand(): $InteractionHand;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ExtendoGripInteractionPacket>;
        constructor(hand: $InteractionHand_, target: number, point: $Vec3_);
        constructor(arg0: $Entity, arg1: $InteractionHand_, arg2: $Vec3_);
        constructor(arg0: $Entity, arg1: $InteractionHand_);
        constructor(arg0: $Entity);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ExtendoGripInteractionPacket}.
     */
    export type $ExtendoGripInteractionPacket_ = { target?: number, hand?: $InteractionHand_, point?: $Vec3_,  } | [target?: number, hand?: $InteractionHand_, point?: $Vec3_, ];
    export class $ExtendoGripItemRenderer extends $CustomRenderedItemModelRenderer {
        constructor();
    }
    export class $ExtendoGripItem extends $Item {
        static holdingExtendoGripIncreasesRange(arg0: $EntityTickEvent$Pre): void;
        static addReachToJoiningPlayersHoldingExtendo(arg0: $PlayerEvent$PlayerLoggedInEvent): void;
        static dontMissEntitiesWhenYouHaveHighReachDistance(arg0: $InputEvent$InteractionKeyMappingTriggered): void;
        static isHoldingExtendoGrip(arg0: $Player): boolean;
        static consumeDurabilityOnBlockBreak(arg0: $BlockEvent$BreakEvent): void;
        static consumeDurabilityOnPlace(arg0: $BlockEvent$EntityPlaceEvent): void;
        static bufferLivingAttackEvent(arg0: $LivingIncomingDamageEvent): void;
        static attacksByExtendoGripHaveMoreKnockback(arg0: $LivingKnockBackEvent): void;
        static notifyServerOfLongRangeAttacks(arg0: $AttackEntityEvent): void;
        static notifyServerOfLongRangeInteractions(arg0: $PlayerInteractEvent$EntityInteract): void;
        static notifyServerOfLongRangeSpecificInteractions(arg0: $PlayerInteractEvent$EntityInteractSpecific): void;
        static doubleRangeAttributeModifier: $AttributeModifier;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static MAX_DAMAGE: number;
        static EXTENDO_MARKER: string;
        static singleRangeAttributeModifier: $AttributeModifier;
        static DUAL_EXTENDO_MARKER: string;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
}
