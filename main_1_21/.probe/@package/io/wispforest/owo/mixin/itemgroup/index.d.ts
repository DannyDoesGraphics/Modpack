import { $CreativeModeTab$DisplayItemsGenerator, $ItemStack_, $CreativeModeTab$Row_, $CreativeModeTab, $CreativeModeTab$DisplayItemsGenerator_ } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Set_ } from "@package/java/util";

declare module "@package/io/wispforest/owo/mixin/itemgroup" {
    export class $CreativeInventoryScreenAccessor {
        static owo$getSelectedTab(): $CreativeModeTab;
    }
    export interface $CreativeInventoryScreenAccessor {
    }
    export class $ItemGroupAccessor {
    }
    export interface $ItemGroupAccessor {
        owo$getEntryCollector(): $CreativeModeTab$DisplayItemsGenerator;
        owo$setEntryCollector(arg0: $CreativeModeTab$DisplayItemsGenerator_): void;
        owo$setSearchTabStacks(arg0: $Set_<$ItemStack_>): void;
        owo$setDisplayName(arg0: $Component_): void;
        owo$setColumn(arg0: number): void;
        owo$setRow(arg0: $CreativeModeTab$Row_): void;
    }
}
