import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $ItemDefinition } from "@package/appeng/core/definitions";
import { $ItemMenuHostLocator } from "@package/appeng/menu/locator";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Record } from "@package/java/lang";
import { $AbstractPortableCell } from "@package/appeng/items/tools/powered";
import { $List, $Map } from "@package/java/util";
import { $HotkeyAction, $HotkeyAction_ } from "@package/appeng/api/features";

declare module "@package/appeng/hotkeys" {
    export class $InventoryHotkeyAction$Opener {
    }
    export interface $InventoryHotkeyAction$Opener {
        open(arg0: $Player, arg1: $ItemMenuHostLocator): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InventoryHotkeyAction$Opener}.
     */
    export type $InventoryHotkeyAction$Opener_ = ((arg0: $Player, arg1: $ItemMenuHostLocator) => boolean);
    export class $InventoryHotkeyAction extends $Record implements $HotkeyAction {
        locatable(): $Predicate<$ItemStack>;
        opener(): $InventoryHotkeyAction$Opener;
        run(arg0: $Player): boolean;
        constructor(arg0: $ItemLike_, arg1: $InventoryHotkeyAction$Opener_);
        constructor(locatable: $Predicate_<$ItemStack>, opener: $InventoryHotkeyAction$Opener_);
    }
    /**
     * Values that may be interpreted as {@link $InventoryHotkeyAction}.
     */
    export type $InventoryHotkeyAction_ = { opener?: $InventoryHotkeyAction$Opener_, locatable?: $Predicate_<$ItemStack>,  } | [opener?: $InventoryHotkeyAction$Opener_, locatable?: $Predicate_<$ItemStack>, ];
    export class $HotkeyActions {
        static registerPortableCell(arg0: $ItemDefinition<$AbstractPortableCell>, arg1: string): void;
        static register(arg0: $HotkeyAction_, arg1: string): void;
        static register(arg0: $ItemLike_, arg1: $InventoryHotkeyAction$Opener_, arg2: string): void;
        static init(): void;
        static REGISTRY: $Map<string, $List<$HotkeyAction>>;
        constructor();
    }
    export class $CuriosHotkeyAction extends $Record implements $HotkeyAction {
        locatable(): $Predicate<$ItemStack>;
        opener(): $InventoryHotkeyAction$Opener;
        run(arg0: $Player): boolean;
        constructor(arg0: $ItemLike_, arg1: $InventoryHotkeyAction$Opener_);
        constructor(locatable: $Predicate_<$ItemStack>, opener: $InventoryHotkeyAction$Opener_);
    }
    /**
     * Values that may be interpreted as {@link $CuriosHotkeyAction}.
     */
    export type $CuriosHotkeyAction_ = { opener?: $InventoryHotkeyAction$Opener_, locatable?: $Predicate_<$ItemStack>,  } | [opener?: $InventoryHotkeyAction$Opener_, locatable?: $Predicate_<$ItemStack>, ];
}
