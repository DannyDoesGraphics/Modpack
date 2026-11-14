import { $BiPredicate_, $Function_, $Supplier } from "@package/java/util/function";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $EntityType, $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $Class } from "@package/java/lang";
import { $ArrayList, $List } from "@package/java/util";
import { $ChangeSubscriber$EnchantmentSubscriber } from "@package/net/caffeinemc/mods/lithium/common/util/change_tracking";

declare module "@package/net/caffeinemc/mods/lithium/common/entity" {
    export class $EquipmentEntity$EquipmentTrackingEntity {
    }
    export interface $EquipmentEntity$EquipmentTrackingEntity {
        lithium$onEquipmentChanged(): void;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentEntity$EquipmentTrackingEntity}.
     */
    export type $EquipmentEntity$EquipmentTrackingEntity_ = (() => void);
    export class $EquipmentEntity$TickableEnchantmentTrackingEntity {
    }
    export interface $EquipmentEntity$TickableEnchantmentTrackingEntity extends $ChangeSubscriber$EnchantmentSubscriber<$ItemStack> {
        lithium$updateHasTickableEnchantments(arg0: $ItemStack_, arg1: $ItemStack_): void;
    }
    export class $TypeFilterableListInternalAccess<T> {
    }
    export interface $TypeFilterableListInternalAccess<T> {
        lithium$getOrCreateAllOfTypeRaw<S extends T>(arg0: $Class<S>): $List<S>;
        lithium$replaceCollectionAndGet<S extends T>(arg0: $Class<S>, arg1: $Function_<$ArrayList<S>, $List<S>>): $List<S>;
        lithium$replaceCollectionAndGet<S extends T>(arg0: $Class<S>, arg1: $ArrayList<S>): $List<S>;
    }
    export class $EntityClassGroup {
        clear(): void;
        contains(arg0: $Entity): boolean;
        contains(arg0: $Class<never>, arg1: $EntityType_<never>): boolean;
        static CUSTOM_COLLIDE_LIKE_MINECART_BOAT_WINDCHARGE: $EntityClassGroup;
        constructor(arg0: $BiPredicate_<$Class<never>, $Supplier<$EntityType<never>>>);
    }
    export class $NavigatingEntity {
    }
    export interface $NavigatingEntity {
        lithium$getRegisteredNavigation(): $PathNavigation;
        lithium$isRegisteredToWorld(): boolean;
        lithium$setRegisteredToWorld(arg0: $PathNavigation): void;
        lithium$updateNavigationRegistration(): void;
    }
    export class $PositionedEntityTrackingSection {
    }
    export interface $PositionedEntityTrackingSection {
        lithium$setPos(arg0: number): void;
        lithium$getPos(): number;
    }
    export class $EquipmentEntity {
    }
    export interface $EquipmentEntity {
        lithium$onEquipmentReplaced(arg0: $ItemStack_, arg1: $ItemStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentEntity}.
     */
    export type $EquipmentEntity_ = ((arg0: $ItemStack, arg1: $ItemStack) => void);
}
