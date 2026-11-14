import { $Container } from "@package/net/minecraft/world";
import { $Item, $Item_ } from "@package/net/minecraft/world/item";
export * as mixin from "@package/dev/ftb/mods/ftblibrary/core/mixin";

declare module "@package/dev/ftb/mods/ftblibrary/core" {
    export class $CompoundContainerFTBL {
    }
    export interface $CompoundContainerFTBL {
        getContainer1FTBL(): $Container;
        getContainer2FTBL(): $Container;
        get container1FTBL(): $Container;
        get container2FTBL(): $Container;
    }
    export class $ItemFTBL {
    }
    export interface $ItemFTBL {
        setCraftingRemainingItemFTBL(arg0: $Item_): void;
        set craftingRemainingItemFTBL(value: $Item_);
    }
    /**
     * Values that may be interpreted as {@link $ItemFTBL}.
     */
    export type $ItemFTBL_ = ((arg0: $Item) => void);
}
