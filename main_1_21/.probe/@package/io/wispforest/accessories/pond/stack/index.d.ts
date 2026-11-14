import { $ItemStackMutation } from "@package/io/wispforest/accessories/utils";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $EventStream } from "@package/io/wispforest/owo/util";

declare module "@package/io/wispforest/accessories/pond/stack" {
    export class $PatchedDataComponentMapExtension {
    }
    export interface $PatchedDataComponentMapExtension {
        accessories$getMutationEvent(arg0: $ItemStack_): $EventStream<$ItemStackMutation>;
        accessories$hasChanged(): boolean;
    }
}
