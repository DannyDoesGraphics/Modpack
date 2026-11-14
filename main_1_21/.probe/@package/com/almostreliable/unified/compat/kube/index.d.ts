import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Set } from "@package/java/util";

declare module "@package/com/almostreliable/unified/compat/kube" {
    export class $AlmostKube {
        static getVariantItemTarget(stack: $ItemStack_): $ItemStack;
        static getTagEntries(tag: $ResourceLocation_): $Set<string>;
        static getRelevantItemTag(stack: $ItemStack_): string;
        static getTagTargetItem(tag: $ResourceLocation_): $ItemStack;
        static getTags(): $Set<string>;
        static get tags(): $Set<string>;
    }
}
