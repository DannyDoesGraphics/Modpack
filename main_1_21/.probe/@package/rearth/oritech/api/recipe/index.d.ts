import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $FluidIngredient_, $SizedIngredient_ } from "@package/rearth/oritech/util";
import { $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Attribute, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $RecipeBuilder, $RecipeProvider, $RecipeCategory_, $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $Optional } from "@package/com/google/common/base";
import { $List_ } from "@package/java/util";
import { $FluidStack } from "@package/dev/architectury/fluid";
import { $PackOutput$PathProvider, $PackOutput } from "@package/net/minecraft/data";
import { $HolderLookup$Provider, $Holder_ } from "@package/net/minecraft/core";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
export * as util from "@package/rearth/oritech/api/recipe/util";

declare module "@package/rearth/oritech/api/recipe" {
    export class $SteamGeneratorRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $OritechRecipeBuilder;
    }
    export class $OritechRecipeBuilder {
        fluidInput(arg0: $FluidIngredient_): $OritechRecipeBuilder;
        fluidInput(arg0: $Fluid_, arg1: number): $OritechRecipeBuilder;
        fluidInput(arg0: $TagKey_<$Fluid>): $OritechRecipeBuilder;
        fluidInput(arg0: $Fluid_): $OritechRecipeBuilder;
        fluidInput(arg0: $TagKey_<$Fluid>, arg1: number): $OritechRecipeBuilder;
        fluidOutput(arg0: $Fluid_, arg1: number): $OritechRecipeBuilder;
        fluidOutput(arg0: $FluidStack): $OritechRecipeBuilder;
        fluidOutput(arg0: $Fluid_): $OritechRecipeBuilder;
        timeMultiplier(arg0: number): $OritechRecipeBuilder;
        addToGrinder(): $OritechRecipeBuilder;
        specificFluidInput(arg0: $Fluid_, arg1: number): $OritechRecipeBuilder;
        specificFluidInput(arg0: $TagKey_<$Fluid>, arg1: number): $OritechRecipeBuilder;
        timeInSeconds(arg0: number): $OritechRecipeBuilder;
        result(arg0: $Optional<$Item_>): $OritechRecipeBuilder;
        result(arg0: $Item_): $OritechRecipeBuilder;
        result(arg0: $Item_, arg1: number): $OritechRecipeBuilder;
        result(arg0: $Optional<$Item_>, arg1: number): $OritechRecipeBuilder;
        result(arg0: $ItemStack_): $OritechRecipeBuilder;
        result(arg0: $List_<$ItemStack_>): $OritechRecipeBuilder;
        validate(arg0: $ResourceLocation_): void;
        time(arg0: number): $OritechRecipeBuilder;
        input(arg0: $List_<$Ingredient_>): $OritechRecipeBuilder;
        input(arg0: $Ingredient_): $OritechRecipeBuilder;
        input(arg0: $ItemLike_): $OritechRecipeBuilder;
        input(arg0: $TagKey_<$Item>): $OritechRecipeBuilder;
        "export"(arg0: $RecipeOutput, arg1: string): void;
        "export"(arg0: $RecipeOutput, arg1: string, arg2: string): void;
    }
    export class $AtomicForgeRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $OritechRecipeBuilder;
    }
    export class $CentrifugeFluidRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $OritechRecipeBuilder;
    }
    export class $AssemblerRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $OritechRecipeBuilder;
    }
    export class $PulverizerRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $PulverizerRecipeBuilder;
    }
    export class $CentrifugeRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $OritechRecipeBuilder;
    }
    export class $RefineryRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $OritechRecipeBuilder;
    }
    export class $LavaGeneratorRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $OritechRecipeBuilder;
    }
    export class $FoundryRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $OritechRecipeBuilder;
    }
    export class $FuelGeneratorRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $OritechRecipeBuilder;
    }
    export class $DeepDrillRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $OritechRecipeBuilder;
    }
    export class $BioGeneratorRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $OritechRecipeBuilder;
    }
    export class $ParticleCollisionRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $OritechRecipeBuilder;
    }
    export class $AugmentRecipeBuilder {
        researchCost(arg0: $Ingredient_, arg1: number): $AugmentRecipeBuilder;
        researchCost(arg0: $Ingredient_): $AugmentRecipeBuilder;
        researchCost(arg0: $TagKey_<$Item>): $AugmentRecipeBuilder;
        researchCost(arg0: $ItemLike_, arg1: number): $AugmentRecipeBuilder;
        researchCost(arg0: $ItemLike_): $AugmentRecipeBuilder;
        researchCost(arg0: $TagKey_<$Item>, arg1: number): $AugmentRecipeBuilder;
        researchCost(arg0: $List_<$SizedIngredient_>): $AugmentRecipeBuilder;
        researchCost(arg0: $SizedIngredient_): $AugmentRecipeBuilder;
        applyCost(arg0: $TagKey_<$Item>, arg1: number): $AugmentRecipeBuilder;
        applyCost(arg0: $Ingredient_, arg1: number): $AugmentRecipeBuilder;
        applyCost(arg0: $Ingredient_): $AugmentRecipeBuilder;
        applyCost(arg0: $ItemLike_): $AugmentRecipeBuilder;
        applyCost(arg0: $TagKey_<$Item>): $AugmentRecipeBuilder;
        applyCost(arg0: $ItemLike_, arg1: number): $AugmentRecipeBuilder;
        applyCost(arg0: $List_<$SizedIngredient_>): $AugmentRecipeBuilder;
        applyCost(arg0: $SizedIngredient_): $AugmentRecipeBuilder;
        requiredStation(arg0: $ResourceLocation_): $AugmentRecipeBuilder;
        uiX(arg0: number): $AugmentRecipeBuilder;
        uiY(arg0: number): $AugmentRecipeBuilder;
        rfCost(arg0: number): $AugmentRecipeBuilder;
        effectDefinition(arg0: $Holder_<$MobEffect>, arg1: number): $AugmentRecipeBuilder;
        modifierDefinition(arg0: $Holder_<$Attribute>, arg1: number, arg2: $AttributeModifier$Operation_): $AugmentRecipeBuilder;
        customAugmentDefinition(arg0: $ResourceLocation_): $AugmentRecipeBuilder;
        toggleable(arg0: boolean): $AugmentRecipeBuilder;
        toggleable(): $AugmentRecipeBuilder;
        requirement(arg0: $ResourceLocation_): $AugmentRecipeBuilder;
        requirement(arg0: $List_<$ResourceLocation_>): $AugmentRecipeBuilder;
        time(arg0: number): $AugmentRecipeBuilder;
        static build(): $AugmentRecipeBuilder;
        "export"(arg0: $RecipeOutput, arg1: string): void;
    }
    export class $GrinderRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $OritechRecipeBuilder;
    }
    export class $OritechRecipeGenerator extends $RecipeProvider {
        offerManualFluidApplication(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        offerManualFluidApplication(arg0: $RecipeOutput, arg1: $Item_, arg2: number, arg3: $Ingredient_, arg4: $Ingredient_, arg5: string): void;
        offerDrillRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: string): void;
        offerChainsawRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: string): void;
        offerAxeRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        offerPickaxeRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        offerWrenchRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        offerHelmetRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        offerChestplateRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        offerLegsRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        offerFeetRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        offerParticleMotorRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: string): void;
        offerGeneratorRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: string): void;
        offerInsulatedCableRecipe(arg0: $RecipeOutput, arg1: $ItemStack_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        offerTwoComponentRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        offerLeverRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        offerDoorRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: string): void;
        offerRotatedCableRecipe(arg0: $RecipeOutput, arg1: $ItemStack_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        offerMachinePlatingRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: $Ingredient_, arg5: number, arg6: string): void;
        offerSlabRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: string): void;
        offerStairsRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: string): void;
        offerPressurePlateRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: string): void;
        offerFurnaceRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: $Ingredient_, arg7: string): void;
        offerAtomicForgeRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: $Ingredient_, arg7: string): void;
        offerTankRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: number, arg3: $Ingredient_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: string): void;
        offerTankRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: $Ingredient_, arg5: string): void;
        offerMachineFrameRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: number, arg5: string): void;
        offerCableRecipe(arg0: $RecipeOutput, arg1: $ItemStack_, arg2: $Ingredient_, arg3: string): void;
        offerFramedCableRecipe(arg0: $RecipeOutput, arg1: $ItemStack_, arg2: $Ingredient_, arg3: string): void;
        offerCableFromFrameRecipe(arg0: $RecipeOutput, arg1: $ItemStack_, arg2: $Ingredient_, arg3: string): void;
        offerMachineCoreRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: number, arg3: $Ingredient_, arg4: $Ingredient_, arg5: string): void;
        offerMachineCoreRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        offerCableDuctRecipe(arg0: $RecipeOutput, arg1: $ItemStack_, arg2: $Ingredient_, arg3: string): void;
        offerCableFromDuctRecipe(arg0: $RecipeOutput, arg1: $ItemStack_, arg2: $Ingredient_, arg3: string): void;
        offerPowerPoleRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: string): void;
        offerManualAlloyRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        offerManualAlloyRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: number, arg5: string): void;
        offerBeadsRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: number, arg3: $Ingredient_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: string): void;
        offerMotorRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: $Ingredient_, arg5: string): void;
        offerPaintRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: $Ingredient_, arg5: string): void;
        offerRodRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        offerRodCombinationRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        offerBatteryRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: $Ingredient_, arg5: string): void;
        offerStarRecipe(arg0: $RecipeOutput, arg1: $Item_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: string): void;
        createCableRecipe(arg0: $RecipeCategory_, arg1: $Item_, arg2: number, arg3: $Ingredient_): $RecipeBuilder;
        createFramedCableRecipe(arg0: $RecipeCategory_, arg1: $Item_, arg2: number, arg3: $Ingredient_): $RecipeBuilder;
        createCableDuctRecipe(arg0: $RecipeCategory_, arg1: $Item_, arg2: number, arg3: $Ingredient_): $RecipeBuilder;
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CoolerRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $OritechRecipeBuilder;
    }
    export class $LaserRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $OritechRecipeBuilder;
    }
    export class $ReactorGeneratorRecipeBuilder extends $OritechRecipeBuilder {
        static build(): $OritechRecipeBuilder;
    }
}
