import { $Level_ } from "@package/net/minecraft/world/level";
import { $Container } from "@package/net/minecraft/world";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $AddReloadListenerEvent, $TagsUpdatedEvent } from "@package/net/neoforged/neoforge/event";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List } from "@package/java/util";
import { $LevelEvent$Load } from "@package/net/neoforged/neoforge/event/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $PlayerEvent$PlayerChangeGameModeEvent, $PlayerEvent$PlayerLoggedInEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $LevelTickEvent$Pre } from "@package/net/neoforged/neoforge/event/tick";
import { $ClientPlayerNetworkEvent$LoggingIn, $ClientTickEvent$Pre, $ClientTickEvent$Post, $InputEvent$Key, $RegisterClientReloadListenersEvent, $RegisterKeyMappingsEvent } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/railwayteam/railways/neoforge/events" {
    export class $CommonEventsForge {
        static addReloadListeners(arg0: $AddReloadListenerEvent): void;
        static onTagsUpdated(arg0: $TagsUpdatedEvent): void;
        static onPlayerLogin(arg0: $PlayerEvent$PlayerLoggedInEvent): void;
        static onRegisterCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        static onGameModeChange(arg0: $PlayerEvent$PlayerChangeGameModeEvent): void;
        static onWorldTick(arg0: $LevelTickEvent$Pre): void;
        constructor();
    }
    export class $ConductorItemHandler implements $IItemHandler {
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        isEmpty(): boolean;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get slots(): number;
    }
    export class $ClientEventsForge$ModBusEvents {
        static onRegisterKeyMappings(arg0: $RegisterKeyMappingsEvent): void;
        static registerClientReloadListeners(arg0: $RegisterClientReloadListenersEvent): void;
        constructor();
    }
    export class $ClientEventsForge {
        static onWorldLoad(arg0: $LevelEvent$Load): void;
        static onLoggingIn(arg0: $ClientPlayerNetworkEvent$LoggingIn): void;
        static onTagsUpdated(arg0: $TagsUpdatedEvent): void;
        static onClientTickPost(arg0: $ClientTickEvent$Post): void;
        static onKeyInput(arg0: $InputEvent$Key): void;
        static onClientTick(arg0: $ClientTickEvent$Pre): void;
        constructor();
    }
}
