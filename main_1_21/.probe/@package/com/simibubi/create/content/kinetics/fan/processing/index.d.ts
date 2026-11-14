import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SingleRecipeInput_, $SingleRecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $TransportedItemStackHandlerBehaviour$TransportedResult } from "@package/com/simibubi/create/content/kinetics/belt/behaviour";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List } from "@package/java/util";
import { $ProcessingRecipeParams, $StandardProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";

declare module "@package/com/simibubi/create/content/kinetics/fan/processing" {
    export interface $FanProcessingType extends RegistryMarked<RegistryTypes.CreateFanProcessingTypeTag, RegistryTypes.CreateFanProcessingType> {}
    export class $AllFanProcessingTypes$SmokingType implements $FanProcessingType {
        isValidAt(arg0: $Level_, arg1: $BlockPos_): boolean;
        canProcess(arg0: $ItemStack_, arg1: $Level_): boolean;
        spawnProcessingParticles(arg0: $Level_, arg1: $Vec3_): void;
        morphAirFlow(arg0: $FanProcessingType$AirFlowParticleAccess, arg1: $RandomSource): void;
        affectEntity(arg0: $Entity, arg1: $Level_): void;
        getPriority(): number;
        process(arg0: $ItemStack_, arg1: $Level_): $List<$ItemStack>;
        constructor();
        get priority(): number;
    }
    export class $FanProcessingTypeRegistry {
        static init(): void;
        static SORTED_TYPES_VIEW: $List<$FanProcessingType>;
        constructor();
    }
    export class $FanProcessing {
        static applyProcessing(arg0: $ItemEntity, arg1: $FanProcessingType_): boolean;
        static applyProcessing(arg0: $TransportedItemStack, arg1: $Level_, arg2: $FanProcessingType_): $TransportedItemStackHandlerBehaviour$TransportedResult;
        static canProcess(arg0: $ItemEntity, arg1: $FanProcessingType_): boolean;
        constructor();
    }
    export class $HauntingRecipe extends $StandardProcessingRecipe<$SingleRecipeInput> {
        matches(arg0: $SingleRecipeInput_, arg1: $Level_): boolean;
        constructor(arg0: $ProcessingRecipeParams);
    }
    export class $AllFanProcessingTypes$BlastingType implements $FanProcessingType {
        isValidAt(arg0: $Level_, arg1: $BlockPos_): boolean;
        canProcess(arg0: $ItemStack_, arg1: $Level_): boolean;
        spawnProcessingParticles(arg0: $Level_, arg1: $Vec3_): void;
        morphAirFlow(arg0: $FanProcessingType$AirFlowParticleAccess, arg1: $RandomSource): void;
        affectEntity(arg0: $Entity, arg1: $Level_): void;
        getPriority(): number;
        process(arg0: $ItemStack_, arg1: $Level_): $List<$ItemStack>;
        constructor();
        get priority(): number;
    }
    export class $SplashingRecipe extends $StandardProcessingRecipe<$SingleRecipeInput> {
        matches(arg0: $SingleRecipeInput_, arg1: $Level_): boolean;
        constructor(arg0: $ProcessingRecipeParams);
    }
    export class $FanProcessingType {
        static parse(arg0: string): $FanProcessingType;
        static getAt(arg0: $Level_, arg1: $BlockPos_): $FanProcessingType;
    }
    export interface $FanProcessingType {
        isValidAt(arg0: $Level_, arg1: $BlockPos_): boolean;
        canProcess(arg0: $ItemStack_, arg1: $Level_): boolean;
        spawnProcessingParticles(arg0: $Level_, arg1: $Vec3_): void;
        morphAirFlow(arg0: $FanProcessingType$AirFlowParticleAccess, arg1: $RandomSource): void;
        affectEntity(arg0: $Entity, arg1: $Level_): void;
        getPriority(): number;
        process(arg0: $ItemStack_, arg1: $Level_): $List<$ItemStack>;
        get priority(): number;
    }
    /**
     * Values that may be interpreted as {@link $FanProcessingType}.
     */
    export type $FanProcessingType_ = RegistryTypes.CreateFanProcessingType;
    export class $AllFanProcessingTypes$HauntingType implements $FanProcessingType {
        isValidAt(arg0: $Level_, arg1: $BlockPos_): boolean;
        canProcess(arg0: $ItemStack_, arg1: $Level_): boolean;
        spawnProcessingParticles(arg0: $Level_, arg1: $Vec3_): void;
        morphAirFlow(arg0: $FanProcessingType$AirFlowParticleAccess, arg1: $RandomSource): void;
        affectEntity(arg0: $Entity, arg1: $Level_): void;
        getPriority(): number;
        process(arg0: $ItemStack_, arg1: $Level_): $List<$ItemStack>;
        constructor();
        get priority(): number;
    }
    export class $AllFanProcessingTypes$SplashingType implements $FanProcessingType {
        isValidAt(arg0: $Level_, arg1: $BlockPos_): boolean;
        canProcess(arg0: $ItemStack_, arg1: $Level_): boolean;
        spawnProcessingParticles(arg0: $Level_, arg1: $Vec3_): void;
        morphAirFlow(arg0: $FanProcessingType$AirFlowParticleAccess, arg1: $RandomSource): void;
        affectEntity(arg0: $Entity, arg1: $Level_): void;
        getPriority(): number;
        process(arg0: $ItemStack_, arg1: $Level_): $List<$ItemStack>;
        constructor();
        get priority(): number;
    }
    export class $AllFanProcessingTypes {
        static ofLegacyName(arg0: string): $FanProcessingType;
        static init(): void;
        static parseLegacy(arg0: string): $FanProcessingType;
        static BLASTING: $AllFanProcessingTypes$BlastingType;
        static HAUNTING: $AllFanProcessingTypes$HauntingType;
        static SMOKING: $AllFanProcessingTypes$SmokingType;
        static SPLASHING: $AllFanProcessingTypes$SplashingType;
        constructor();
    }
    export class $FanProcessingType$AirFlowParticleAccess {
    }
    export interface $FanProcessingType$AirFlowParticleAccess {
        spawnExtraParticle(arg0: $ParticleOptions_, arg1: number): void;
        setColor(arg0: number): void;
        setAlpha(arg0: number): void;
        set color(value: number);
        set alpha(value: number);
    }
}
