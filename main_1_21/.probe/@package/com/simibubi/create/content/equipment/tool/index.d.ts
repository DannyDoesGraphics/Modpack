import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item$Properties, $Item, $Tier, $SwordItem } from "@package/net/minecraft/world/item";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Tool } from "@package/net/minecraft/world/item/component";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $CustomRenderedItemModelRenderer } from "@package/com/simibubi/create/foundation/item/render";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Map } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $PlayerInteractEvent$LeftClickBlock, $AttackEntityEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/equipment/tool" {
    export class $AllToolMaterials extends $Enum<$AllToolMaterials> implements $Tier {
        getUses(): number;
        getIncorrectBlocksForDrops(): $TagKey<$Block>;
        getRepairIngredient(): $Ingredient;
        getEnchantmentValue(): number;
        static values(): $AllToolMaterials[];
        static valueOf(arg0: string): $AllToolMaterials;
        getAttackDamageBonus(): number;
        getSpeed(): number;
        createToolProperties(arg0: $TagKey_<$Block>): $Tool;
        static CARDBOARD: $AllToolMaterials;
        get uses(): number;
        get incorrectBlocksForDrops(): $TagKey<$Block>;
        get repairIngredient(): $Ingredient;
        get enchantmentValue(): number;
        get attackDamageBonus(): number;
        get speed(): number;
    }
    /**
     * Values that may be interpreted as {@link $AllToolMaterials}.
     */
    export type $AllToolMaterials_ = "cardboard";
    export class $CardboardSwordItemRenderer extends $CustomRenderedItemModelRenderer {
        constructor();
    }
    export class $CardboardSwordItem extends $SwordItem {
        static cardboardSwordsMakeNoiseOnClick(arg0: $PlayerInteractEvent$LeftClickBlock): void;
        static cardboardSwordsCannotHurtYou(arg0: $AttackEntityEvent): void;
        static knockback(arg0: $LivingEntity, arg1: number, arg2: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $KnockbackPacket extends $Record implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        strength(): number;
        yRot(): number;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $KnockbackPacket>;
        constructor(yRot: number, strength: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $KnockbackPacket}.
     */
    export type $KnockbackPacket_ = { yRot?: number, strength?: number,  } | [yRot?: number, strength?: number, ];
}
