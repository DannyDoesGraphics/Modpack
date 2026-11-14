import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $RecipeType, $RecipeSerializer } from "@package/net/minecraft/world/item/crafting";
import { $CraftingUnitTransformRecipe, $StorageCellDisassemblyRecipe } from "@package/appeng/recipes/game";
import { $EntropyRecipe } from "@package/appeng/recipes/entropy";
import { $QuartzCuttingRecipe } from "@package/appeng/recipes/quartzcutting";
import { $ChargerRecipe, $InscriberRecipe } from "@package/appeng/recipes/handlers";
import { $TransformRecipe } from "@package/appeng/recipes/transform";
import { $MatterCannonAmmo } from "@package/appeng/recipes/mattercannon";
export * as transform from "@package/appeng/recipes/transform";
export * as entropy from "@package/appeng/recipes/entropy";
export * as handlers from "@package/appeng/recipes/handlers";
export * as game from "@package/appeng/recipes/game";
export * as quartzcutting from "@package/appeng/recipes/quartzcutting";
export * as mattercannon from "@package/appeng/recipes/mattercannon";

declare module "@package/appeng/recipes" {
    export class $AERecipeTypes {
        static CHARGER: $RecipeType<$ChargerRecipe>;
        static CRAFTING_UNIT_TRANSFORM: $RecipeType<$CraftingUnitTransformRecipe>;
        static CELL_DISASSEMBLY: $RecipeType<$StorageCellDisassemblyRecipe>;
        static TRANSFORM: $RecipeType<$TransformRecipe>;
        static QUARTZ_CUTTING: $RecipeType<$QuartzCuttingRecipe>;
        static INSCRIBER: $RecipeType<$InscriberRecipe>;
        static MATTER_CANNON_AMMO: $RecipeType<$MatterCannonAmmo>;
        static DR: $DeferredRegister<$RecipeType<never>>;
        static ENTROPY: $RecipeType<$EntropyRecipe>;
    }
    export class $AERecipeSerializers {
        static DR: $DeferredRegister<$RecipeSerializer<never>>;
    }
}
