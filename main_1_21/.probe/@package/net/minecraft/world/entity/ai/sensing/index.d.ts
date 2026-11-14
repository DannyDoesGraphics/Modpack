import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $Predicate_, $BiPredicate_, $Supplier_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $LivingEntity, $AgeableMob, $Mob, $Entity, $PathfinderMob } from "@package/net/minecraft/world/entity";
import { $SensorAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/ai/useless_sensors";
import { $Set, $Optional } from "@package/java/util";
import { $Hoglin } from "@package/net/minecraft/world/entity/monster/hoglin";
import { $Villager } from "@package/net/minecraft/world/entity/npc";
import { $MemoryModuleType_, $MemoryModuleType } from "@package/net/minecraft/world/entity/ai/memory";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";

declare module "@package/net/minecraft/world/entity/ai/sensing" {
    export class $BreezeAttackEntitySensor extends $NearestLivingEntitySensor<$Breeze> {
        static BREEZE_SENSOR_RADIUS: number;
        constructor();
    }
    export class $PiglinBruteSpecificSensor extends $Sensor<$LivingEntity> {
        constructor();
    }
    export class $FrogAttackablesSensor extends $NearestVisibleLivingEntitySensor {
        static TARGET_DETECTION_DISTANCE: number;
        constructor();
    }
    export class $TemptingSensor extends $Sensor<$PathfinderMob> {
        static TEMPTATION_RANGE: number;
        constructor(temptations: $Predicate_<$ItemStack>);
    }
    export class $HoglinSpecificSensor extends $Sensor<$Hoglin> {
        constructor();
    }
    export class $MobSensor<T extends $LivingEntity> extends $Sensor<T> {
        clearMemory(sensingEntity: T): void;
        checkForMobsNearby(sensingEntity: T): void;
        mobDetected(sensingEntity: T): void;
        constructor(scanRate: number, mobTest: $BiPredicate_<T, $LivingEntity>, readyTest: $Predicate_<T>, toSet: $MemoryModuleType_<boolean>, memoryTimeToLive: number);
    }
    export class $SensorType<U extends $Sensor<never>> {
        create(): U;
        static FROG_ATTACKABLES: $SensorType<$FrogAttackablesSensor>;
        static AXOLOTL_ATTACKABLES: $SensorType<$AxolotlAttackablesSensor>;
        static ARMADILLO_SCARE_DETECTED: $SensorType<$MobSensor<$Armadillo>>;
        static NEAREST_LIVING_ENTITIES: $SensorType<$NearestLivingEntitySensor<$LivingEntity>>;
        static VILLAGER_HOSTILES: $SensorType<$VillagerHostilesSensor>;
        static VILLAGER_BABIES: $SensorType<$VillagerBabiesSensor>;
        static NEAREST_BED: $SensorType<$NearestBedSensor>;
        static GOAT_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static IS_IN_WATER: $SensorType<$IsInWaterSensor>;
        static AXOLOTL_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static FROG_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static ARMADILLO_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static BREEZE_ATTACK_ENTITY_SENSOR: $SensorType<$BreezeAttackEntitySensor>;
        static GOLEM_DETECTED: $SensorType<$GolemSensor>;
        static SNIFFER_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static CAMEL_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static NEAREST_ADULT: $SensorType<$AdultSensor>;
        static DUMMY: $SensorType<$DummySensor>;
        static HURT_BY: $SensorType<$HurtBySensor>;
        static NEAREST_ITEMS: $SensorType<$NearestItemSensor>;
        static NEAREST_PLAYERS: $SensorType<$PlayerSensor>;
        static PIGLIN_SPECIFIC_SENSOR: $SensorType<$PiglinSpecificSensor>;
        static SECONDARY_POIS: $SensorType<$SecondaryPoiSensor>;
        static PIGLIN_BRUTE_SPECIFIC_SENSOR: $SensorType<$PiglinBruteSpecificSensor>;
        static HOGLIN_SPECIFIC_SENSOR: $SensorType<$HoglinSpecificSensor>;
        static WARDEN_ENTITY_SENSOR: $SensorType<$WardenEntitySensor>;
        constructor(factory: $Supplier_<U>);
    }
    /**
     * Values that may be interpreted as {@link $SensorType}.
     */
    export type $SensorType_<U> = RegistryTypes.SensorType;
    export class $PlayerSensor extends $Sensor<$LivingEntity> {
        constructor();
    }
    export class $AdultSensor extends $Sensor<$AgeableMob> {
        constructor();
    }
    export class $PiglinSpecificSensor extends $Sensor<$LivingEntity> {
        redirect$dcd000$lithium$redirectFindNearestRepellent(level: $ServerLevel, livingEntity: $LivingEntity): $Optional<any>;
        constructor();
    }
    export class $Sensor<E extends $LivingEntity> implements $SensorAccessor {
        /**
         * @return if entity is remembered as an attack target and is valid to attack
         */
        static isEntityAttackable(attacker: $LivingEntity, target: $LivingEntity): boolean;
        /**
         * @return if entity is remembered as an attack target and is valid to attack
         */
        static isEntityTargetable(attacker: $LivingEntity, target: $LivingEntity): boolean;
        /**
         * @return if entity is remembered as an attack target and is valid to attack
         */
        static isEntityAttackableIgnoringLineOfSight(attacker: $LivingEntity, target: $LivingEntity): boolean;
        requires(): $Set<$MemoryModuleType<never>>;
        tick(level: $ServerLevel, entity: E): void;
        getLastSenseTime(): number;
        getSenseInterval(): number;
        setLastSenseTime(arg0: number): void;
        constructor(scanRate: number);
        constructor();
        get senseInterval(): number;
    }
    export class $VillagerBabiesSensor extends $Sensor<$LivingEntity> {
        constructor();
    }
    export class $Sensing {
        /**
         * Clears seen and unseen.
         */
        tick(): void;
        /**
         * Updates list of visible and not visible entities for the given entity
         */
        hasLineOfSight(entity: $Entity): boolean;
        constructor(mob: $Mob);
    }
    export class $NearestLivingEntitySensor<T extends $LivingEntity> extends $Sensor<T> {
        constructor();
    }
    export class $NearestVisibleLivingEntitySensor extends $Sensor<$LivingEntity> {
        constructor();
    }
    export class $HurtBySensor extends $Sensor<$LivingEntity> {
        constructor();
    }
    export class $WardenEntitySensor extends $NearestLivingEntitySensor<$Warden> {
        constructor();
    }
    export class $VillagerHostilesSensor extends $NearestVisibleLivingEntitySensor {
        constructor();
    }
    export interface $SensorType<U> extends RegistryMarked<RegistryTypes.SensorTypeTag, RegistryTypes.SensorType> {}
    export class $IsInWaterSensor extends $Sensor<$LivingEntity> {
        constructor();
    }
    export class $DummySensor extends $Sensor<$LivingEntity> {
        constructor();
    }
    export class $NearestBedSensor extends $Sensor<$Mob> {
        constructor();
    }
    export class $NearestItemSensor extends $Sensor<$Mob> {
        static MAX_DISTANCE_TO_WANTED_ITEM: number;
        constructor();
    }
    export class $GolemSensor extends $Sensor<$LivingEntity> {
        static golemDetected(livingEntity: $LivingEntity): void;
        static checkForNearbyGolem(livingEntity: $LivingEntity): void;
        constructor();
        constructor(scanRate: number);
    }
    export class $AxolotlAttackablesSensor extends $NearestVisibleLivingEntitySensor {
        static TARGET_DETECTION_DISTANCE: number;
        constructor();
    }
    export class $SecondaryPoiSensor extends $Sensor<$Villager> {
        constructor();
    }
}
