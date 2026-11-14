import { $ItemStackBasedPredicate } from "@package/io/wispforest/accessories/api/caching";
import { $EquipmentChecking_ } from "@package/io/wispforest/accessories/api";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SlotEntryReference } from "@package/io/wispforest/accessories/api/slot";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $List_, $List } from "@package/java/util";
import { $AccessoriesHolderImpl } from "@package/io/wispforest/accessories/impl";

declare module "@package/io/wispforest/accessories/impl/caching" {
    export class $AccessoriesHolderLookupCache extends $EquipmentLookupCache {
        clearContainerCache(key: string): void;
        invalidateLookupData(key: string, stack: $ItemStack_, types: $List_<$DataComponentType_<never>>): void;
        constructor(holder: $AccessoriesHolderImpl);
    }
    export class $EquipmentLookupCache {
        firstEquipped(arg0: $ItemStackBasedPredicate, arg1: $EquipmentChecking_): $SlotEntryReference;
        isEquipped(arg0: $ItemStackBasedPredicate): boolean;
        getEquipped(arg0: $ItemStackBasedPredicate): $List<$SlotEntryReference>;
        getAllEquipped(): $List<$SlotEntryReference>;
        clearCache(): void;
        get allEquipped(): $List<$SlotEntryReference>;
    }
}
