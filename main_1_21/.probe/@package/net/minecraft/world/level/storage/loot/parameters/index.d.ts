import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BiMap } from "@package/com/google/common/collect";
import { $Set } from "@package/java/util";
import { $ProblemReporter } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootContextParamSetsAccess } from "@package/ht/treechop/mixin";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $LootContextUser, $ValidationContext } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/level/storage/loot/parameters" {
    /**
     * A parameter of a `LootContext`.
     * 
     * @see LootContextParams
     */
    export class $LootContextParam<T> {
        getName(): $ResourceLocation;
        constructor(name: $ResourceLocation_);
        get name(): $ResourceLocation;
    }
    export class $LootContextParamSet$Builder {
        build(): $LootContextParamSet;
        optional(parameter: $LootContextParam<never>): $LootContextParamSet$Builder;
        required(parameter: $LootContextParam<never>): $LootContextParamSet$Builder;
        constructor();
    }
    /**
     * Holds all known LootContextParams.
     */
    export class $LootContextParams {
        static DIRECT_ATTACKING_ENTITY: $LootContextParam<$Entity>;
        static ORIGIN: $LootContextParam<$Vec3>;
        static LAST_DAMAGE_PLAYER: $LootContextParam<$Player>;
        static BLOCK_STATE: $LootContextParam<$BlockState>;
        static BLOCK_ENTITY: $LootContextParam<$BlockEntity>;
        static ATTACKING_ENTITY: $LootContextParam<$Entity>;
        static EXPLOSION_RADIUS: $LootContextParam<number>;
        static THIS_ENTITY: $LootContextParam<$Entity>;
        static DAMAGE_SOURCE: $LootContextParam<$DamageSource>;
        static TOOL: $LootContextParam<$ItemStack>;
        static ENCHANTMENT_LEVEL: $LootContextParam<number>;
        static ENCHANTMENT_ACTIVE: $LootContextParam<boolean>;
        constructor();
    }
    /**
     * A LootContextParamSet defines a set of required and optional `LootContextParam`s.
     * This is used to validate that conditions, functions and other `LootContextUser`s only use those parameters that are present for the given loot table.
     * 
     * @see LootContextParamSets
     * @see ValidationContext
     */
    export class $LootContextParamSet {
        /**
         * Whether the given parameter is allowed in this set.
         */
        isAllowed(param: $LootContextParam<never>): boolean;
        /**
         * Gets the required and optional parameters
         */
        getRequired(): $Set<$LootContextParam<never>>;
        /**
         * Gets the required and optional parameters
         */
        getAllowed(): $Set<$LootContextParam<never>>;
        validateUser(problemReporter: $ProblemReporter, lootContextUser: $LootContextUser): void;
        /**
         * Validate that all parameters referenced by the given LootContextUser are present in this set.
         */
        validateUser(validationContext: $ValidationContext, lootContextUser: $LootContextUser): void;
        static builder(): $LootContextParamSet$Builder;
        get required(): $Set<$LootContextParam<never>>;
    }
    /**
     * Registry for `LootContextParamSet`s.
     */
    export class $LootContextParamSets implements $LootContextParamSetsAccess {
        static callRegister$treechop_$md$5c91d2$0(registryName: string, builderConsumer: $Consumer_<any>): $LootContextParamSet;
        static ENCHANTED_ITEM: $LootContextParamSet;
        static ENCHANTED_LOCATION: $LootContextParamSet;
        static HIT_BLOCK: $LootContextParamSet;
        static VAULT: $LootContextParamSet;
        static ADVANCEMENT_REWARD: $LootContextParamSet;
        static ARCHAEOLOGY: $LootContextParamSet;
        static ADVANCEMENT_ENTITY: $LootContextParamSet;
        static ENCHANTED_DAMAGE: $LootContextParamSet;
        static EQUIPMENT: $LootContextParamSet;
        static GIFT: $LootContextParamSet;
        static FISHING: $LootContextParamSet;
        static ENTITY: $LootContextParamSet;
        static PIGLIN_BARTER: $LootContextParamSet;
        static COMMAND: $LootContextParamSet;
        static ADVANCEMENT_LOCATION: $LootContextParamSet;
        static SHEARING: $LootContextParamSet;
        static EMPTY: $LootContextParamSet;
        static CODEC: $Codec<$LootContextParamSet>;
        static BLOCK: $LootContextParamSet;
        static CHEST: $LootContextParamSet;
        static SELECTOR: $LootContextParamSet;
        static BLOCK_USE: $LootContextParamSet;
        static ALL_PARAMS: $LootContextParamSet;
        static ENCHANTED_ENTITY: $LootContextParamSet;
        static REGISTRY: $BiMap<$ResourceLocation, $LootContextParamSet>;
        constructor();
    }
}
