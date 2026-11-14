import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IInWorldGridNodeHost_, $IInWorldGridNodeHost } from "@package/appeng/api/networking";
import { $PowerMultiplier_, $Actionable_ } from "@package/appeng/api/config";
import { $ConfigInventory } from "@package/appeng/util";
import { $ItemMenuHostLocator } from "@package/appeng/menu/locator";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Set_ } from "@package/java/util";
import { $AEKeyType_ } from "@package/appeng/api/stacks";
import { $InternalInventory } from "@package/appeng/api/inventories";
import { $IConfigManager } from "@package/appeng/api/util";
import { $MEStorage, $ILinkStatus } from "@package/appeng/api/storage";
import { $Supplier_, $Function_, $Supplier, $BiConsumer_ } from "@package/java/util/function";
import { $NetworkToolItem } from "@package/appeng/items/tools";
import { $AbstractPortableCell } from "@package/appeng/items/tools/powered";
import { $ISubMenu } from "@package/appeng/menu";
import { $ItemMenuHost, $IPortableTerminal } from "@package/appeng/api/implementations/menuobjects";

declare module "@package/appeng/items/contents" {
    export class $CellConfig {
        static create(arg0: $ItemStack_): $ConfigInventory;
        static create(arg0: $Set_<$AEKeyType_>, arg1: $ItemStack_): $ConfigInventory;
        static create(arg0: $Set_<$AEKeyType_>, arg1: $ItemStack_, arg2: number): $ConfigInventory;
    }
    export class $NetworkToolMenuHost<T extends $NetworkToolItem> extends $ItemMenuHost<T> {
        getGridHost(): $IInWorldGridNodeHost;
        getInventory(): $InternalInventory;
        constructor(arg0: T, arg1: $Player, arg2: $ItemMenuHostLocator, arg3: $IInWorldGridNodeHost_);
        get gridHost(): $IInWorldGridNodeHost;
        get inventory(): $InternalInventory;
    }
    export class $PortableCellMenuHost<T extends $AbstractPortableCell> extends $ItemMenuHost<T> implements $IPortableTerminal {
        extractAEPower(arg0: number, arg1: $Actionable_, arg2: $PowerMultiplier_): number;
        getConfigManager(): $IConfigManager;
        returnToMainMenu(arg0: $Player, arg1: $ISubMenu): void;
        getMainMenuIcon(): $ItemStack;
        getLinkStatus(): $ILinkStatus;
        getCloseHotkey(): string;
        getInventory(): $MEStorage;
        constructor(arg0: T, arg1: $Player, arg2: $ItemMenuHostLocator, arg3: $BiConsumer_<$Player, $ISubMenu>);
        get configManager(): $IConfigManager;
        get mainMenuIcon(): $ItemStack;
        get linkStatus(): $ILinkStatus;
        get closeHotkey(): string;
        get inventory(): $MEStorage;
    }
    export class $CellConfig$Holder {
    }
    export class $PortableCellMenuHost$CellStorageSupplier implements $Supplier<$MEStorage> {
    }
    export class $StackDependentSupplier<T> implements $Supplier<T> {
        get(): T;
        constructor(arg0: $Supplier_<$ItemStack>, arg1: $Function_<$ItemStack, T>);
    }
}
