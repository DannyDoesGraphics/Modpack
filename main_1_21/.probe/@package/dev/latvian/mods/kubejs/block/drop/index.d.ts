import { $NumberProvider_, $NumberProvider } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Record } from "@package/java/lang";

declare module "@package/dev/latvian/mods/kubejs/block/drop" {
    export class $BlockDrops extends $Record {
        rolls(): $NumberProvider;
        items(): $ItemStack[];
        static createDefault(item: $ItemStack_): $BlockDrops;
        static EMPTY: $BlockDrops;
        constructor(items: $ItemStack_[], rolls: $NumberProvider_);
    }
    /**
     * Values that may be interpreted as {@link $BlockDrops}.
     */
    export type $BlockDrops_ = { items?: $ItemStack_[], rolls?: $NumberProvider_,  } | [items?: $ItemStack_[], rolls?: $NumberProvider_, ];
    export class $BlockDropSupplier {
        static NO_DROPS: $BlockDropSupplier;
    }
    export interface $BlockDropSupplier {
        get(): $BlockDrops;
    }
    /**
     * Values that may be interpreted as {@link $BlockDropSupplier}.
     */
    export type $BlockDropSupplier_ = (() => $BlockDrops_);
}
