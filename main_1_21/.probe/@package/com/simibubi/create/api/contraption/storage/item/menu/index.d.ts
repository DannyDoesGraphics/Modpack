import { $MenuProvider } from "@package/net/minecraft/world";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $ItemHandlerContainer } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";

declare module "@package/com/simibubi/create/api/contraption/storage/item/menu" {
    export class $MountedStorageMenus {
        static createGeneric(arg0: $Component_, arg1: $IItemHandlerModifiable, arg2: $Predicate_<$Player>, arg3: $Consumer_<$Player>): $MenuProvider;
        static createGeneric9x9(arg0: $Component_, arg1: $IItemHandlerModifiable, arg2: $Predicate_<$Player>, arg3: $Consumer_<$Player>): $MenuProvider;
        static GENERIC_CHEST_MENUS: $List<$MenuType<never>>;
        constructor();
    }
    export class $StorageInteractionWrapper extends $ItemHandlerContainer {
        constructor(arg0: $IItemHandlerModifiable, arg1: $Predicate_<$Player>, arg2: $Consumer_<$Player>);
    }
}
