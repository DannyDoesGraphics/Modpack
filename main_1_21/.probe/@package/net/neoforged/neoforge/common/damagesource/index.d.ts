import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LivingShieldBlockEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Enum } from "@package/java/lang";
import { $CombatEntry_, $DamageSource_, $CombatEntry, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/neoforged/neoforge/common/damagesource" {
    /**
     * An `IDeathMessageProvider` is used by custom `DeathMessageType` instances.
     * 
     * This allows providing custom death messages based on the available parameters, instead of the hard-coded vanilla defaults.
     */
    export class $IDeathMessageProvider {
        static DEFAULT: $IDeathMessageProvider;
    }
    export interface $IDeathMessageProvider {
        /**
         * Computes the death message from the available context.
         * 
         * This method is not invoked if there are no available combat entries, since the damage source would not be available.
         */
        getDeathMessage(entity: $LivingEntity, lastEntry: $CombatEntry_, mostSignificantFall: $CombatEntry_): $Component;
    }
    /**
     * Values that may be interpreted as {@link $IDeathMessageProvider}.
     */
    export type $IDeathMessageProvider_ = ((arg0: $LivingEntity, arg1: $CombatEntry, arg2: $CombatEntry) => $Component_);
    /**
     * An `IScalingFunction` is used by custom `DamageScaling` instances.
     * 
     * This allows finer control over the actual scaling value, instead of the hard-coded vanilla defaults.
     */
    export class $IScalingFunction {
        static DEFAULT: $IScalingFunction;
    }
    export interface $IScalingFunction {
        /**
         * Scales the incoming damage amount based on the current difficulty.
         * 
         * Only damage dealt to players is scaled, other damage is not impacted.
         */
        scaleDamage(source: $DamageSource_, target: $Player, amount: number, difficulty: $Difficulty_): number;
    }
    /**
     * Values that may be interpreted as {@link $IScalingFunction}.
     */
    export type $IScalingFunction_ = ((arg0: $DamageSource, arg1: $Player, arg2: number, arg3: $Difficulty) => number);
    /**
     * DamageContainer encapsulates aspects of the entity damage sequence so that
     * relevant context related to damage dealt is accessible throughout the entire
     * sequence.
     * Note: certain values will be defaults until the stage in the sequence when they are set.
     * 
     * ### The Damage Sequence
     * 
     * 1. `LivingEntity#hurt` is invoked on the recipient from the source of
     * the attack.
     * 2. `Entity#isInvulnerableTo` is invoked and fires `EntityInvulnerabilityCheckEvent`.
     * 3. After determining the entity is vulnerable, the `DamageContainer` in instantiated for the entity.
     * 4. `LivingIncomingDamageEvent` is fired.
     * 5. `LivingShieldBlockEvent` fires and the result determines if shield effects apply.
     * 6. `LivingEntity#actuallyHurt` is called.
     * 7. armor, magic, and mob_effect reductions are captured in the DamageContainer.
     * 8. `Pre` is fired.
     * 9. absorption reductions are captured in the DamageContainer.
     * 10. if the damage is not zero, entity health is modified and recorded and `Post` is fired.
     */
    export class $DamageContainer {
        addModifier(arg0: $DamageContainer$Reduction_, arg1: $IReductionFunction_): void;
        /**
         * Explicitly sets the invulnerability ticks after the damage has been applied.
         */
        setPostAttackInvulnerabilityTicks(ticks: number): void;
        /**
         * @return the value passed into `LivingEntity#hurt(DamageSource, float)` before any modifications are made
         */
        getOriginalDamage(): number;
        /**
         * @return the value passed into `LivingEntity#hurt(DamageSource, float)` before any modifications are made
         */
        getShieldDamage(): number;
        /**
         * @return the damage source for this damage sequence
         */
        getSource(): $DamageSource;
        /**
         * @return the value passed into `LivingEntity#hurt(DamageSource, float)` before any modifications are made
         */
        getNewDamage(): number;
        setBlockedDamage(event: $LivingShieldBlockEvent): void;
        /**
         * @return the value passed into `LivingEntity#hurt(DamageSource, float)` before any modifications are made
         */
        getBlockedDamage(): number;
        /**
         * This sets the current damage value for the entity at the stage of the damage sequence in which it is set.
         * Subsequent steps in the damage sequence will use and modify this value accordingly. If this is called in
         * the final step of the sequence, this value will be applied against the entity's health.
         */
        setNewDamage(damage: number): void;
        setReduction(arg0: $DamageContainer$Reduction_, arg1: number): void;
        /**
         * @return the number of ticks this entity will be invulnerable after damage is applied
         */
        getPostAttackInvulnerabilityTicks(): number;
        getReduction(arg0: $DamageContainer$Reduction_): number;
        constructor(source: $DamageSource_, originalDamage: number);
        get originalDamage(): number;
        get shieldDamage(): number;
        get source(): $DamageSource;
    }
    /**
     * An `IReductionFunction` is used by `DamageContainer` instances.
     * 
     * This allows sequential modification of damage reduction values to be stored and
     * later invoked before actual reductions are applied to the damage sequence.
     */
    export class $IReductionFunction {
    }
    export interface $IReductionFunction {
        /**
         * Consumes an existing reduction value and produces a modified value.
         */
        modify(container: $DamageContainer, reductionIn: number): number;
    }
    /**
     * Values that may be interpreted as {@link $IReductionFunction}.
     */
    export type $IReductionFunction_ = ((arg0: $DamageContainer, arg1: number) => number);
    export class $DamageContainer$Reduction extends $Enum<$DamageContainer$Reduction> {
        static values(): $DamageContainer$Reduction[];
        static valueOf(arg0: string): $DamageContainer$Reduction;
        static MOB_EFFECTS: $DamageContainer$Reduction;
        static ENCHANTMENTS: $DamageContainer$Reduction;
        static INNATE_RESISTANCE: $DamageContainer$Reduction;
        static ARMOR: $DamageContainer$Reduction;
        static ABSORPTION: $DamageContainer$Reduction;
        static INVULNERABILITY: $DamageContainer$Reduction;
    }
    /**
     * Values that may be interpreted as {@link $DamageContainer$Reduction}.
     */
    export type $DamageContainer$Reduction_ = "invulnerability" | "armor" | "enchantments" | "mob_effects" | "absorption" | "innate_resistance";
}
