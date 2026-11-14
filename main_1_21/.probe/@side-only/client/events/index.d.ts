import { $Level } from "@package/net/minecraft/world/level";
import { $BlockEntityTickKubeEvent } from "@package/dev/latvian/mods/kubejs/block/entity";
import { $CustomFilterItemKubeEvent } from "@package/dev/ftb/mods/ftbxmodcompat/neoforge/ftbquests/kubejs";
import { $BlockLeftClickedKubeEvent, $BlockStoppedFallingKubeEvent, $BlockBrokenKubeEvent, $BlockStartedFallingKubeEvent, $DetectorBlockKubeEvent, $BlockPlacedKubeEvent, $BlockRightClickedKubeEvent, $FarmlandTrampledKubeEvent, $BlockPickedKubeEvent } from "@package/dev/latvian/mods/kubejs/block";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $KubeAssetGenerator } from "@package/dev/latvian/mods/kubejs/generator";
import { $ParticleProviderRegistryKubeEvent, $KubeJSKeybinds$TickingKeyEvent, $DebugInfoKubeEvent, $LangKubeEvent, $KubeJSKeybinds$KeyEvent, $AtlasSpriteRegistryKubeEvent, $ClientPlayerKubeEvent } from "@package/dev/latvian/mods/kubejs/client";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $HighlightKubeEvent } from "@package/dev/latvian/mods/kubejs/client/highlight";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $ExplosionKubeEvent$After, $ExplosionKubeEvent$Before, $SimpleLevelKubeEvent } from "@package/dev/latvian/mods/kubejs/level";
import { $NetworkKubeEvent } from "@package/dev/latvian/mods/kubejs/net";
import { $InventoryChangedKubeEvent, $ChestKubeEvent, $StageChangedEvent, $SimplePlayerKubeEvent, $InventoryKubeEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $DynamicItemTooltipsKubeEvent, $ItemPredicate_, $ItemCraftedKubeEvent, $ItemDestroyedKubeEvent, $ModifyItemTooltipsKubeEvent, $ItemPickedUpKubeEvent, $FoodEatenKubeEvent, $ItemSmeltedKubeEvent, $ItemEntityInteractedKubeEvent, $ItemClickedKubeEvent, $ItemDroppedKubeEvent } from "@package/dev/latvian/mods/kubejs/item";
import { $LivingEntityDropsKubeEvent, $EntitySpawnedKubeEvent, $AfterLivingEntityHurtKubeEvent, $LivingEntityDeathKubeEvent, $BeforeLivingEntityHurtKubeEvent, $CheckLivingEntitySpawnKubeEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $GeneratedDataStage_ } from "@package/dev/latvian/mods/kubejs/script/data";
import { $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $RemoveRecipesKubeEvent, $GroupEntriesKubeEvent, $RemoveEntriesKubeEvent, $AddEntriesKubeEvent, $AddInformationKubeEvent, $RegisterSubtypesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe/viewer";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MenuType } from "@package/net/minecraft/world/inventory";

declare module "@side-only/client/events" {
}

export {};

declare global {
    export namespace RecipeViewerEvents {
        function addEntries(extra: "item", handler: ((event: $AddEntriesKubeEvent<$ItemStack_>) => void)): void;
        function addInformation(extra: "item", handler: ((event: $AddInformationKubeEvent<$ItemPredicate_>) => void)): void;
        function groupEntries(extra: "item", handler: ((event: $GroupEntriesKubeEvent<$ItemPredicate_>) => void)): void;
        function registerSubtypes(extra: "item", handler: ((event: $RegisterSubtypesKubeEvent<$ItemPredicate_>) => void)): void;
        function removeEntries(extra: "item", handler: ((event: $RemoveEntriesKubeEvent<$ItemPredicate_>) => void)): void;
        function removeEntriesCompletely(extra: "item", handler: ((event: $RemoveEntriesKubeEvent<$ItemPredicate_>) => void)): void;
        function removeRecipes(extra: "item", handler: ((event: $RemoveRecipesKubeEvent) => void)): void;
        function addEntries(extra: "fluid", handler: ((event: $AddEntriesKubeEvent<$FluidStack_>) => void)): void;
        function addInformation(extra: "fluid", handler: ((event: $AddInformationKubeEvent<$FluidIngredient_>) => void)): void;
        function groupEntries(extra: "fluid", handler: ((event: $GroupEntriesKubeEvent<$FluidIngredient_>) => void)): void;
        function registerSubtypes(extra: "fluid", handler: ((event: $RegisterSubtypesKubeEvent<$FluidIngredient_>) => void)): void;
        function removeEntries(extra: "fluid", handler: ((event: $RemoveEntriesKubeEvent<$FluidIngredient_>) => void)): void;
        function removeEntriesCompletely(extra: "fluid", handler: ((event: $RemoveEntriesKubeEvent<$FluidIngredient_>) => void)): void;
        function removeRecipes(extra: "fluid", handler: ((event: $RemoveRecipesKubeEvent) => void)): void;
    }
    namespace ItemEvents {
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function rightClicked(extra: $ResourceKey_<$Item>, handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function rightClicked(handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player crafts an item.
         */
        function crafted(extra: $ResourceKey_<$Item>, handler: ((event: $ItemCraftedKubeEvent) => void)): void;
        /**
         * Invoked when a player crafts an item.
         */
        function crafted(handler: ((event: $ItemCraftedKubeEvent) => void)): void;
        /**
         * Invoked when a player drops an item.
         */
        function dropped(extra: $ResourceKey_<$Item>, handler: ((event: $ItemDroppedKubeEvent) => void)): void;
        /**
         * Invoked when a player drops an item.
         */
        function dropped(handler: ((event: $ItemDroppedKubeEvent) => void)): void;
        function dynamicTooltips(extra: string, handler: ((event: $DynamicItemTooltipsKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function firstRightClicked(extra: $ResourceKey_<$Item>, handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function firstRightClicked(handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
         */
        function pickedUp(extra: $ResourceKey_<$Item>, handler: ((event: $ItemPickedUpKubeEvent) => void)): void;
        /**
         * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
         */
        function pickedUp(handler: ((event: $ItemPickedUpKubeEvent) => void)): void;
        function destroyed(extra: $ResourceKey_<$Item>, handler: ((event: $ItemDestroyedKubeEvent) => void)): void;
        function destroyed(handler: ((event: $ItemDestroyedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks on an entity.
         */
        function entityInteracted(extra: $ResourceKey_<$Item>, handler: ((event: $ItemEntityInteractedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks on an entity.
         */
        function entityInteracted(handler: ((event: $ItemEntityInteractedKubeEvent) => void)): void;
        /**
         * Invoked when an entity eats food.
         */
        function foodEaten(extra: $ResourceKey_<$Item>, handler: ((event: $FoodEatenKubeEvent) => void)): void;
        /**
         * Invoked when an entity eats food.
         */
        function foodEaten(handler: ((event: $FoodEatenKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function firstLeftClicked(extra: $ResourceKey_<$Item>, handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function firstLeftClicked(handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
         */
        function canPickUp(extra: $ResourceKey_<$Item>, handler: ((event: $ItemPickedUpKubeEvent) => void)): void;
        /**
         * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
         */
        function canPickUp(handler: ((event: $ItemPickedUpKubeEvent) => void)): void;
        /**
         * Invoked when an item is smelted by a player.
         */
        function smelted(extra: $ResourceKey_<$Item>, handler: ((event: $ItemSmeltedKubeEvent) => void)): void;
        /**
         * Invoked when an item is smelted by a player.
         */
        function smelted(handler: ((event: $ItemSmeltedKubeEvent) => void)): void;
        function modifyTooltips(handler: ((event: $ModifyItemTooltipsKubeEvent) => void)): void;
    }
    namespace NetworkEvents {
        /**
         * Invoked when a network packet is received.
         * 
         * Note that the behaviour of this event is depending on the **script type**.
         * 
         * In `server_scripts`, this event is invoked on the server side when a packet is received from a client.
         * 
         * In `client_scripts`, this event is invoked on the client side when a packet is received from the server.
         */
        function dataReceived(extra: string, handler: ((event: $NetworkKubeEvent) => void)): void;
    }
    namespace EntityEvents {
        /**
         * Invoked after an entity is hurt by a damage source.
         */
        function afterHurt(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $AfterLivingEntityHurtKubeEvent) => void)): void;
        /**
         * Invoked after an entity is hurt by a damage source.
         */
        function afterHurt(handler: ((event: $AfterLivingEntityHurtKubeEvent) => void)): void;
        /**
         * Invoked when an entity is about to be added to the world.
         * 
         * This event also fires for existing entities when they are loaded from a save.
         */
        function spawned(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $EntitySpawnedKubeEvent) => void)): void;
        /**
         * Invoked when an entity is about to be added to the world.
         * 
         * This event also fires for existing entities when they are loaded from a save.
         */
        function spawned(handler: ((event: $EntitySpawnedKubeEvent) => void)): void;
        function drops(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $LivingEntityDropsKubeEvent) => void)): void;
        function drops(handler: ((event: $LivingEntityDropsKubeEvent) => void)): void;
        /**
         * Invoked before an entity is spawned into the world.
         * 
         * Only entities from a `BaseSpawner` or world generation will trigger this event.
         */
        function checkSpawn(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $CheckLivingEntitySpawnKubeEvent) => void)): void;
        /**
         * Invoked before an entity is spawned into the world.
         * 
         * Only entities from a `BaseSpawner` or world generation will trigger this event.
         */
        function checkSpawn(handler: ((event: $CheckLivingEntitySpawnKubeEvent) => void)): void;
        /**
         * Invoked before a living entity dies.
         * 
         * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
         */
        function death(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $LivingEntityDeathKubeEvent) => void)): void;
        /**
         * Invoked before a living entity dies.
         * 
         * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
         */
        function death(handler: ((event: $LivingEntityDeathKubeEvent) => void)): void;
        /**
         * Invoked before an entity is hurt by a damage source.
         */
        function beforeHurt(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $BeforeLivingEntityHurtKubeEvent) => void)): void;
        /**
         * Invoked before an entity is hurt by a damage source.
         */
        function beforeHurt(handler: ((event: $BeforeLivingEntityHurtKubeEvent) => void)): void;
    }
    namespace KeyBindEvents {
        function pressed(extra: string, handler: ((event: $KubeJSKeybinds$KeyEvent) => void)): void;
        function tick(extra: string, handler: ((event: $KubeJSKeybinds$TickingKeyEvent) => void)): void;
        function released(extra: string, handler: ((event: $KubeJSKeybinds$TickingKeyEvent) => void)): void;
    }
    namespace ClientEvents {
        /**
         * Invoked when the debug info is rendered.
         */
        function rightDebugInfo(handler: ((event: $DebugInfoKubeEvent) => void)): void;
        /**
         * Invoked when the debug info is rendered.
         */
        function leftDebugInfo(handler: ((event: $DebugInfoKubeEvent) => void)): void;
        function atlasSpriteRegistry(extra: $ResourceLocation_, handler: ((event: $AtlasSpriteRegistryKubeEvent) => void)): void;
        function loggedOut(handler: ((event: $ClientPlayerKubeEvent) => void)): void;
        function generateAssets(extra: $GeneratedDataStage_, handler: ((event: $KubeAssetGenerator) => void)): void;
        function tick(handler: ((event: $ClientPlayerKubeEvent) => void)): void;
        /**
         * Invoked when block and entity highlight is rendered.
         */
        function highlight(handler: ((event: $HighlightKubeEvent) => void)): void;
        function particleProviderRegistry(handler: ((event: $ParticleProviderRegistryKubeEvent) => void)): void;
        function loggedIn(handler: ((event: $ClientPlayerKubeEvent) => void)): void;
        function lang(extra: string, handler: ((event: $LangKubeEvent) => void)): void;
    }
    namespace BlockEvents {
        /**
         * Invoked when a block is destroyed by a player.
         */
        function broken(extra: $ResourceKey_<$Block>, handler: ((event: $BlockBrokenKubeEvent) => void)): void;
        /**
         * Invoked when a block is destroyed by a player.
         */
        function broken(handler: ((event: $BlockBrokenKubeEvent) => void)): void;
        /**
         * Invoked when a block is placed.
         */
        function placed(extra: $ResourceKey_<$Block>, handler: ((event: $BlockPlacedKubeEvent) => void)): void;
        /**
         * Invoked when a block is placed.
         */
        function placed(handler: ((event: $BlockPlacedKubeEvent) => void)): void;
        /**
         * Invoked when a player left clicks on a block.
         */
        function leftClicked(extra: $ResourceKey_<$Block>, handler: ((event: $BlockLeftClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player left clicks on a block.
         */
        function leftClicked(handler: ((event: $BlockLeftClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks on a block.
         */
        function rightClicked(extra: $ResourceKey_<$Block>, handler: ((event: $BlockRightClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks on a block.
         */
        function rightClicked(handler: ((event: $BlockRightClickedKubeEvent) => void)): void;
        /**
         * Invoked when a falling block starts to fall.
         */
        function startedFalling(extra: $ResourceKey_<$Block>, handler: ((event: $BlockStartedFallingKubeEvent) => void)): void;
        /**
         * Invoked when a falling block starts to fall.
         */
        function startedFalling(handler: ((event: $BlockStartedFallingKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorPowered(extra: string, handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorPowered(handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when an entity attempts to trample farmland.
         */
        function farmlandTrampled(extra: $ResourceKey_<$Block>, handler: ((event: $FarmlandTrampledKubeEvent) => void)): void;
        /**
         * Invoked when an entity attempts to trample farmland.
         */
        function farmlandTrampled(handler: ((event: $FarmlandTrampledKubeEvent) => void)): void;
        /**
         * Invoked when a falling block finishes falling.
         */
        function stoppedFalling(extra: $ResourceKey_<$Block>, handler: ((event: $BlockStoppedFallingKubeEvent) => void)): void;
        /**
         * Invoked when a falling block finishes falling.
         */
        function stoppedFalling(handler: ((event: $BlockStoppedFallingKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorUnpowered(extra: string, handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorUnpowered(handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when player middle-clicks on a block.
         */
        function picked(extra: $ResourceKey_<$Block>, handler: ((event: $BlockPickedKubeEvent) => void)): void;
        /**
         * Invoked when player middle-clicks on a block.
         */
        function picked(handler: ((event: $BlockPickedKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorChanged(extra: string, handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorChanged(handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        function blockEntityTick(extra: $ResourceKey_<$Block>, handler: ((event: $BlockEntityTickKubeEvent) => void)): void;
    }
    namespace LevelEvents {
        /**
         * Invoked right before an explosion happens.
         */
        function beforeExplosion(extra: $ResourceKey_<$Level>, handler: ((event: $ExplosionKubeEvent$Before) => void)): void;
        /**
         * Invoked right before an explosion happens.
         */
        function beforeExplosion(handler: ((event: $ExplosionKubeEvent$Before) => void)): void;
        function tick(extra: $ResourceKey_<$Level>, handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function tick(handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        /**
         * Invoked right after an explosion happens.
         */
        function afterExplosion(extra: $ResourceKey_<$Level>, handler: ((event: $ExplosionKubeEvent$After) => void)): void;
        /**
         * Invoked right after an explosion happens.
         */
        function afterExplosion(handler: ((event: $ExplosionKubeEvent$After) => void)): void;
    }
    namespace FTBQuestsEvents {
        function customFilterItem(handler: ((event: $CustomFilterItemKubeEvent) => void)): void;
    }
    namespace PlayerEvents {
        /**
         * Invoked when a player opens a chest.
         * 
         * Same as `PlayerEvents.inventoryOpened`, but only for chests.
         */
        function chestOpened(extra: $ResourceKey_<$MenuType<any>>, handler: ((event: $ChestKubeEvent) => void)): void;
        /**
         * Invoked when a player opens a chest.
         * 
         * Same as `PlayerEvents.inventoryOpened`, but only for chests.
         */
        function chestOpened(handler: ((event: $ChestKubeEvent) => void)): void;
        function tick(handler: ((event: $SimplePlayerKubeEvent) => void)): void;
        function stageRemoved(extra: string, handler: ((event: $StageChangedEvent) => void)): void;
        function stageRemoved(handler: ((event: $StageChangedEvent) => void)): void;
        function stageAdded(extra: string, handler: ((event: $StageChangedEvent) => void)): void;
        function stageAdded(handler: ((event: $StageChangedEvent) => void)): void;
        /**
         * Invoked when a player opens a chest.
         * 
         * Same as `PlayerEvents.inventoryOpened`, but only for chests.
         */
        function chestClosed(extra: $ResourceKey_<$MenuType<any>>, handler: ((event: $ChestKubeEvent) => void)): void;
        /**
         * Invoked when a player opens a chest.
         * 
         * Same as `PlayerEvents.inventoryOpened`, but only for chests.
         */
        function chestClosed(handler: ((event: $ChestKubeEvent) => void)): void;
        /**
         * Invoked when a player opens or closes a container.
         */
        function inventoryClosed(extra: $ResourceKey_<$MenuType<any>>, handler: ((event: $InventoryKubeEvent) => void)): void;
        /**
         * Invoked when a player opens or closes a container.
         */
        function inventoryClosed(handler: ((event: $InventoryKubeEvent) => void)): void;
        /**
         * Invoked when a player's inventory changes.
         */
        function inventoryChanged(extra: $ResourceKey_<$Item>, handler: ((event: $InventoryChangedKubeEvent) => void)): void;
        /**
         * Invoked when a player's inventory changes.
         */
        function inventoryChanged(handler: ((event: $InventoryChangedKubeEvent) => void)): void;
        /**
         * Invoked when a player opens or closes a container.
         */
        function inventoryOpened(extra: $ResourceKey_<$MenuType<any>>, handler: ((event: $InventoryKubeEvent) => void)): void;
        /**
         * Invoked when a player opens or closes a container.
         */
        function inventoryOpened(handler: ((event: $InventoryKubeEvent) => void)): void;
    }
}
