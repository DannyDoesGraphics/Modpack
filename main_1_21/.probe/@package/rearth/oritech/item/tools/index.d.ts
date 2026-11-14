import { $SerializableDataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Map } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $AnimatableManager$ControllerRegistrar_ } from "@package/software/bernie/geckolib/animation";
import { $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Direction_, $RegistryAccess } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $Record, $Object, $Runnable } from "@package/java/lang";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $Item$Properties, $Item, $ItemStack_, $MaceItem } from "@package/net/minecraft/world/item";
import { $Tool } from "@package/net/minecraft/world/item/component";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EnergyApi$EnergyStorage } from "@package/rearth/oritech/api/energy";
import { $GeoItem } from "@package/software/bernie/geckolib/animatable";
import { $OritechEnergyItem } from "@package/rearth/oritech/item/tools/util";
import { $GeoRenderProvider } from "@package/software/bernie/geckolib/animatable/client";
import { $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3_, $HitResult } from "@package/net/minecraft/world/phys";
export * as harvesting from "@package/rearth/oritech/item/tools/harvesting";
export * as armor from "@package/rearth/oritech/item/tools/armor";
export * as util from "@package/rearth/oritech/item/tools/util";

declare module "@package/rearth/oritech/item/tools" {
    export class $Wrench$Wrenchable {
    }
    export interface $Wrench$Wrenchable {
        onWrenchUse(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $InteractionHand_): $InteractionResult;
        onWrenchUseNeighbor(arg0: $BlockState_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $BlockPos_, arg5: $Direction_, arg6: $Player, arg7: $InteractionHand_): $InteractionResult;
    }
    export class $Wrench extends $Item {
        static createToolComponent(): $Tool;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static ACTION_COOLDOWN: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $PortableLaserItem$LaserPlayerUsePacket extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$PortableLaserItem$LaserPlayerUsePacket>;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $PortableLaserItem$LaserPlayerUsePacket}.
     */
    export type $PortableLaserItem$LaserPlayerUsePacket_ = {  } | [];
    export class $ElectricMaceItem extends $MaceItem implements $OritechEnergyItem {
        static createLightningBolt(arg0: $ServerLevel, arg1: $Vec3_, arg2: $Vec3_, arg3: number, arg4: number, arg5: number, arg6: $ParticleOptions_, arg7: number, arg8: number, arg9: number): void;
        static processLightningEvents(arg0: $Level_): void;
        getEnergyCapacity(arg0: $ItemStack_): number;
        allowComponentsUpdateAnimation(arg0: $Player, arg1: $InteractionHand_, arg2: $ItemStack_, arg3: $ItemStack_): boolean;
        allowContinuingBlockBreaking(arg0: $Player, arg1: $ItemStack_, arg2: $ItemStack_): boolean;
        getEnergyMaxInput(arg0: $ItemStack_): number;
        getEnergyMaxOutput(arg0: $ItemStack_): number;
        getStoredEnergy(arg0: $ItemStack_): number;
        getEnergyStorage(arg0: $ItemStack_): $EnergyApi$EnergyStorage;
        tryUseEnergy(arg0: $ItemStack_, arg1: number, arg2: $Player): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static PENDING_LIGHTNING_HITS: $Map<number, $Runnable>;
        static SMASH_ATTACK_KNOCKBACK_RADIUS: number;
        static SMASH_ATTACK_FALL_THRESHOLD: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $PortableLaserItem extends $Item implements $OritechEnergyItem, $GeoItem {
        static getEnchantmentLevel(arg0: $ItemStack_, arg1: $ResourceKey_<$Enchantment>): number;
        static receiveUsePacket(arg0: $PortableLaserItem$LaserPlayerUsePacket_, arg1: $Player, arg2: $RegistryAccess): void;
        getEnergyCapacity(arg0: $ItemStack_): number;
        allowComponentsUpdateAnimation(arg0: $Player, arg1: $InteractionHand_, arg2: $ItemStack_, arg3: $ItemStack_): boolean;
        allowContinuingBlockBreaking(arg0: $Player, arg1: $ItemStack_, arg2: $ItemStack_): boolean;
        isMiningEnabled(arg0: $ItemStack_): boolean;
        setMiningEnabled(arg0: $ItemStack_, arg1: boolean): void;
        static getPlayerTargetRay(arg0: $Player): $HitResult;
        getEnergyMaxInput(arg0: $ItemStack_): number;
        getEnergyMaxOutput(arg0: $ItemStack_): number;
        createGeoRenderer(arg0: $Consumer_<$GeoRenderProvider>): void;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        static onUseTick(arg0: $Player): void;
        getStoredEnergy(arg0: $ItemStack_): number;
        getEnergyStorage(arg0: $ItemStack_): $EnergyApi$EnergyStorage;
        tryUseEnergy(arg0: $ItemStack_, arg1: number, arg2: $Player): boolean;
        isPerspectiveAware(): boolean;
        getTick(arg0: $Object): number;
        animatableCacheOverride(): $AnimatableInstanceCache;
        syncAnimData<D>(arg0: number, arg1: $SerializableDataTicket<D>, arg2: D, arg3: $Entity): void;
        getRenderProvider(): $Object;
        triggerArmorAnim(arg0: $Entity, arg1: number, arg2: string, arg3: string): void;
        stopTriggeredArmorAnim(arg0: $Entity, arg1: number, arg2: string, arg3: string): void;
        getAnimData<D>(arg0: number, arg1: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $Entity, arg1: number, arg2: $SerializableDataTicket<D>, arg3: D): void;
        triggerAnim<D>(arg0: $Entity, arg1: number, arg2: string, arg3: string): void;
        stopTriggeredAnim(arg0: $Entity, arg1: number, arg2: string, arg3: string): void;
        getBoneResetTime(): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static lastSingleShot: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static ACTION_COOLDOWN: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get perspectiveAware(): boolean;
        get renderProvider(): $Object;
        get boneResetTime(): number;
    }
    export class $WeedKiller extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $LaserTargetDesignator extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
}
