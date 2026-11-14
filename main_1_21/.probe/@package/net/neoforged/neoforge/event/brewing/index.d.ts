import { $RegistryAccess, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $PotionBrewing$Builder } from "@package/net/minecraft/world/item/alchemy";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/net/neoforged/neoforge/event/brewing" {
    export class $PotionBrewEvent extends $Event {
        setItem(index: number, stack: $ItemStack_): void;
        getLength(): number;
        getItem(index: number): $ItemStack;
        get length(): number;
    }
    /**
     * This event is called when a player picks up a potion from a brewing stand.
     */
    export class $PlayerBrewedPotionEvent extends $PlayerEvent {
        /**
         * The ItemStack of the potion.
         */
        getStack(): $ItemStack;
        constructor(player: $Player, stack: $ItemStack_);
        get stack(): $ItemStack;
    }
    /**
     * Event to register new brewing recipes.
     * 
     * Fired on both client and server side, on the main event bus.
     */
    export class $RegisterBrewingRecipesEvent extends $Event {
        getBuilder(): $PotionBrewing$Builder;
        getRegistryAccess(): $RegistryAccess;
        constructor(builder: $PotionBrewing$Builder, registryAccess: $RegistryAccess);
        get builder(): $PotionBrewing$Builder;
        get registryAccess(): $RegistryAccess;
    }
    /**
     * PotionBrewEvent.Post is fired when a potion is brewed in the brewing stand.
     * 
     * The event is fired during the `BrewingStandBlockEntity#doBrew(Level, BlockPos, NonNullList)` method invocation.
     * 
     * `#stacks` contains the itemstack array from the TileEntityBrewer holding all items in Brewer.
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $PotionBrewEvent$Post extends $PotionBrewEvent {
        constructor(stacks: $NonNullList<$ItemStack_>);
    }
    /**
     * PotionBrewEvent.Pre is fired before vanilla brewing takes place.
     * All changes made to the event's array will be made to the TileEntity if the event is canceled.
     * 
     * The event is fired during the `BrewingStandBlockEntity#doBrew(Level, BlockPos, NonNullList)` method invocation.
     * 
     * `#stacks` contains the itemstack array from the TileEntityBrewer holding all items in Brewer.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If the event is not canceled, the vanilla brewing will take place instead of modded brewing.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     * 
     * If this event is canceled, and items have been modified, PotionBrewEvent.Post will automatically be fired.
     */
    export class $PotionBrewEvent$Pre extends $PotionBrewEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(stacks: $NonNullList<$ItemStack_>);
    }
}
