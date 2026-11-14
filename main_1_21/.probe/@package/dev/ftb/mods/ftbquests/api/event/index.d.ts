import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event } from "@package/dev/architectury/event";
import { $Collection_ } from "@package/java/util";

declare module "@package/dev/ftb/mods/ftbquests/api/event" {
    export class $CustomFilterDisplayItemsEvent {
        add(stack: $ItemStack_): void;
        add(stacks: $Collection_<$ItemStack_>): void;
        static ADD_ITEMSTACK: $Event<$Consumer<$CustomFilterDisplayItemsEvent>>;
        constructor(callback: $Consumer_<$ItemStack>);
    }
}
