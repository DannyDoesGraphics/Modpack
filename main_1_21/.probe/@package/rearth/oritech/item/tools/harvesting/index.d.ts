import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $SerializableDataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Deque, $List, $Map } from "@package/java/util";
import { $AnimatableManager$ControllerRegistrar_ } from "@package/software/bernie/geckolib/animation";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $EventResult } from "@package/dev/architectury/event";
import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $Record, $Object } from "@package/java/lang";
import { $IntValue } from "@package/dev/architectury/utils/value";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item$Properties, $Tier_, $Item, $ItemStack_, $Tier, $DiggerItem, $ItemStack, $AxeItem } from "@package/net/minecraft/world/item";
import { $ItemAttributeModifiers, $Tool } from "@package/net/minecraft/world/item/component";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EnergyApi$EnergyStorage } from "@package/rearth/oritech/api/energy";
import { $GeoItem } from "@package/software/bernie/geckolib/animatable";
import { $OritechEnergyItem } from "@package/rearth/oritech/item/tools/util";
import { $GeoRenderProvider } from "@package/software/bernie/geckolib/animatable/client";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/rearth/oritech/item/tools/harvesting" {
    export class $PromethiumAxeItem extends $AxeItem implements $GeoItem {
        createGeoRenderer(arg0: $Consumer_<$GeoRenderProvider>): void;
        static processPendingBlocks(arg0: $Level_): void;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        static onTick(arg0: $ServerLevel): void;
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
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static pendingBlocks: $Deque<$PromethiumAxeItem$PendingBlock>;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        /**
         * @deprecated
         */
        static STRIPPABLES: $Map<$Block, $Block>;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Tier_, arg1: $Item$Properties);
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get perspectiveAware(): boolean;
        get renderProvider(): $Object;
        get boneResetTime(): number;
    }
    export class $ElectricToolMaterial implements $Tier {
        getUses(): number;
        getIncorrectBlocksForDrops(): $TagKey<$Block>;
        getRepairIngredient(): $Ingredient;
        getEnchantmentValue(): number;
        getAttackDamageBonus(): number;
        getSpeed(): number;
        createToolProperties(arg0: $TagKey_<$Block>): $Tool;
        constructor();
        get uses(): number;
        get incorrectBlocksForDrops(): $TagKey<$Block>;
        get repairIngredient(): $Ingredient;
        get enchantmentValue(): number;
        get attackDamageBonus(): number;
        get speed(): number;
    }
    export class $ChainsawItem extends $AxeItem implements $OritechEnergyItem {
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
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        /**
         * @deprecated
         */
        static STRIPPABLES: $Map<$Block, $Block>;
        static BAR_STEP_COUNT: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Tier_, arg1: $Item$Properties);
    }
    export class $PromethiumToolMaterial implements $Tier {
        getUses(): number;
        getIncorrectBlocksForDrops(): $TagKey<$Block>;
        getRepairIngredient(): $Ingredient;
        getEnchantmentValue(): number;
        getAttackDamageBonus(): number;
        getSpeed(): number;
        createToolProperties(arg0: $TagKey_<$Block>): $Tool;
        constructor();
        get uses(): number;
        get incorrectBlocksForDrops(): $TagKey<$Block>;
        get repairIngredient(): $Ingredient;
        get enchantmentValue(): number;
        get attackDamageBonus(): number;
        get speed(): number;
    }
    export class $PromethiumAxeItem$PendingBlock extends $Record {
        tool(): $ItemStack;
        pos(): $BlockPos;
        level(): $Level;
        constructor(level: $Level_, pos: $BlockPos_, tool: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $PromethiumAxeItem$PendingBlock}.
     */
    export type $PromethiumAxeItem$PendingBlock_ = { tool?: $ItemStack_, pos?: $BlockPos_, level?: $Level_,  } | [tool?: $ItemStack_, pos?: $BlockPos_, level?: $Level_, ];
    export class $PromethiumPickaxeItem extends $DiggerItem implements $GeoItem {
        static createPromethiumAttributes(arg0: $Tier_, arg1: number, arg2: number, arg3: number): $ItemAttributeModifiers;
        static preMine(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ServerPlayer, arg4: $IntValue): $EventResult;
        createGeoRenderer(arg0: $Consumer_<$GeoRenderProvider>): void;
        onHeldTick(arg0: $ItemStack_, arg1: $Player, arg2: $ClientLevel): void;
        static getOffsetBlocks(arg0: $Level_, arg1: $Player, arg2: $BlockPos_): $List<$BlockPos>;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
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
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Tier_, arg1: $TagKey_<$Block>, arg2: $Item$Properties);
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get perspectiveAware(): boolean;
        get renderProvider(): $Object;
        get boneResetTime(): number;
    }
    export class $DrillItem extends $DiggerItem implements $OritechEnergyItem {
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
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static BAR_STEP_COUNT: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Tier_, arg1: $TagKey_<$Block>, arg2: $Item$Properties);
    }
}
