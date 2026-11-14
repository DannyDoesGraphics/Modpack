import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $RecipeType, $RecipeType_ } from "@package/net/minecraft/world/item/crafting";

declare module "@package/net/neoforged/neoforge/event/furnace" {
    /**
     * `FurnaceFuelBurnTimeEvent` is fired when determining the fuel value for an ItemStack.
     * 
     * To set the burn time of your own item, use `Item#getBurnTime(ItemStack, RecipeType)` instead.
     * 
     * This event is fired from `EventHooks#getItemBurnTime(ItemStack, int, RecipeType)`.
     * 
     * This event is `ICancellableEvent` to prevent later handlers from changing the value.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $FurnaceFuelBurnTimeEvent extends $Event implements $ICancellableEvent {
        /**
         * Set the burn time for the given ItemStack.
         * Setting it to 0 will prevent the item from being used as fuel, overriding vanilla's decision.
         */
        setBurnTime(burnTime: number): void;
        /**
         * The resulting value of this event, the burn time for the ItemStack.
         * A value of 0 will prevent the item from being used as fuel, overriding vanilla's decision.
         * 
         * The initial burn time can come from either the extension method
         * or the data map.
         */
        getBurnTime(): number;
        /**
         * Get the recipe type for which to obtain the burn time, if known.
         */
        getRecipeType(): $RecipeType<never>;
        /**
         * Get the ItemStack "fuel" in question.
         */
        getItemStack(): $ItemStack;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(itemStack: $ItemStack_, burnTime: number, recipeType: $RecipeType_<never>);
        get recipeType(): $RecipeType<never>;
        get itemStack(): $ItemStack;
    }
}
