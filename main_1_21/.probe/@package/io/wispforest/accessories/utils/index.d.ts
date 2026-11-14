import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $EventStream } from "@package/io/wispforest/owo/util";
import { $DataComponentType, $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $List_, $List } from "@package/java/util";

declare module "@package/io/wispforest/accessories/utils" {
    export class $ItemStackMutation {
        static getEvent(stack: $ItemStack_): $EventStream<$ItemStackMutation>;
    }
    export interface $ItemStackMutation {
        onMutation(arg0: $ItemStack_, arg1: $List_<$DataComponentType_<never>>): void;
    }
    /**
     * Values that may be interpreted as {@link $ItemStackMutation}.
     */
    export type $ItemStackMutation_ = ((arg0: $ItemStack, arg1: $List<$DataComponentType<never>>) => void);
}
