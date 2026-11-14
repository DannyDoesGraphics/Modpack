import { $Predicate_ } from "@package/java/util/function";
import { $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $TamableAnimal, $Mob, $LivingEntity, $PathfinderMob } from "@package/net/minecraft/world/entity";
import { $Raider } from "@package/net/minecraft/world/entity/raid";
import { $Class } from "@package/java/lang";
import { $IronGolem } from "@package/net/minecraft/world/entity/animal";

declare module "@package/net/minecraft/world/entity/ai/goal/target" {
    export class $NonTameRandomTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        constructor(tamableMob: $TamableAnimal, targetType: $Class<T>, mustSee: boolean, targetPredicate: $Predicate_<$LivingEntity> | null);
    }
    export class $DefendVillageTargetGoal extends $TargetGoal {
        constructor(golem: $IronGolem);
    }
    export class $OwnerHurtByTargetGoal extends $TargetGoal {
        constructor(tameAnimal: $TamableAnimal);
    }
    export class $HurtByTargetGoal extends $TargetGoal {
        setAlertOthers(...reinforcementTypes: $Class<never>[]): $HurtByTargetGoal;
        constructor(mob: $PathfinderMob, ...toIgnoreDamage: $Class<never>[]);
        set alertOthers(value: $Class<never>[]);
    }
    export class $ResetUniversalAngerTargetGoal<T extends $Mob> extends $Goal {
        constructor(mob: T, alertOthersOfSameType: boolean);
    }
    export class $TargetGoal extends $Goal {
        setUnseenMemoryTicks(unseenMemoryTicks: number): $TargetGoal;
        constructor(mob: $Mob, mustSee: boolean);
        constructor(mob: $Mob, mustSee: boolean, mustReach: boolean);
        set unseenMemoryTicks(value: number);
    }
    export class $OwnerHurtTargetGoal extends $TargetGoal {
        constructor(tameAnimal: $TamableAnimal);
    }
    export class $NearestHealableRaiderTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        /**
         * Execute a one shot task or start executing a continuous task
         */
        decrementCooldown(): void;
        getCooldown(): number;
        constructor(mob: $Raider, targetType: $Class<T>, mustSee: boolean, targetPredicate: $Predicate_<$LivingEntity> | null);
        get cooldown(): number;
    }
    export class $NearestAttackableWitchTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        setCanAttack(active: boolean): void;
        constructor(mob: $Raider, targetType: $Class<T>, randomInterval: number, mustSee: boolean, mustReach: boolean, targetPredicate: $Predicate_<$LivingEntity> | null);
        set canAttack(value: boolean);
    }
    export class $NearestAttackableTargetGoal<T extends $LivingEntity> extends $TargetGoal {
        setTarget(target: $LivingEntity | null): void;
        constructor(mob: $Mob, targetType: $Class<T>, mustSee: boolean);
        constructor(mob: $Mob, targetType: $Class<T>, mustSee: boolean, targetPredicate: $Predicate_<$LivingEntity>);
        constructor(mob: $Mob, targetType: $Class<T>, mustSee: boolean, mustReach: boolean);
        constructor(mob: $Mob, targetType: $Class<T>, randomInterval: number, mustSee: boolean, mustReach: boolean, targetPredicate: $Predicate_<$LivingEntity> | null);
        set target(value: $LivingEntity | null);
    }
}
