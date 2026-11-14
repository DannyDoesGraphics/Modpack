import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $ItemStack_, $ItemStack, $Item_ } from "@package/net/minecraft/world/item";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";

declare module "@package/io/wispforest/accessories/api/caching" {
    export class $ItemStackBasedPredicate implements $Predicate<$ItemStack> {
        static ofItem(name: string, item: $Item_): $ItemStackBasedPredicate;
        static ofItem(item: $Item_): $ItemStackBasedPredicate;
        static ofPredicate(name: string, predicate: $Predicate_<$ItemStack>): $ItemStackBasedPredicate;
        static ofPredicate(predicate: $Predicate_<$ItemStack>): $ItemStackBasedPredicate;
        extraStringData(): string;
        static ofComponents(name: string, ...dataComponentTypes: $DataComponentType_<never>[]): $ItemStackBasedPredicate;
        static ofComponents(...dataComponentTypes: $DataComponentType_<never>[]): $ItemStackBasedPredicate;
        name(): string;
        test(arg0: $ItemStack_): boolean;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
    }
}
