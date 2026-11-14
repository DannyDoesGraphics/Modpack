import { $Behavior } from "@package/net/minecraft/world/entity/ai/behavior";
import { $NonNullList } from "@package/net/minecraft/core";
import { $SensorType, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $DispenseItemBehavior } from "@package/net/minecraft/core/dispenser";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Map, $Set } from "@package/java/util";
import { $Activity } from "@package/net/minecraft/world/entity/schedule";
import { $Iterable, $Iterable_ } from "@package/java/lang";

declare module "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor" {
    export class $DispenserBlockAccessor {
        static getDispenserRegistry(): $Map<$Item, $DispenseItemBehavior>;
        static get dispenserRegistry(): $Map<$Item, $DispenseItemBehavior>;
    }
    export interface $DispenserBlockAccessor {
    }
    export class $DispenserBlockEntityAccessor {
    }
    export interface $DispenserBlockEntityAccessor {
        getItems(): $NonNullList<$ItemStack>;
        get items(): $NonNullList<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $DispenserBlockEntityAccessor}.
     */
    export type $DispenserBlockEntityAccessor_ = (() => $NonNullList<$ItemStack_>);
    export class $BrainAccessor<E extends $LivingEntity> {
    }
    export interface $BrainAccessor<E extends $LivingEntity> {
        getAvailableBehaviorsByPriority(): $Map<number, $Map<$Activity, $Set<$Behavior<E>>>>;
        getSensors(): $Map<$SensorType<$Sensor<E>>, $Sensor<E>>;
        get availableBehaviorsByPriority(): $Map<number, $Map<$Activity, $Set<$Behavior<E>>>>;
        get sensors(): $Map<$SensorType<$Sensor<E>>, $Sensor<E>>;
    }
    export class $AgeableListModelAccessor {
    }
    export interface $AgeableListModelAccessor {
        moonlight$invokeBodyParts(): $Iterable<$ModelPart>;
    }
    /**
     * Values that may be interpreted as {@link $AgeableListModelAccessor}.
     */
    export type $AgeableListModelAccessor_ = (() => $Iterable_<$ModelPart>);
}
