import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Map_, $Map } from "@package/java/util";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";

declare module "@package/com/simibubi/create/compat/computercraft/implementation/luaObjects" {
    export class $LuaComparable {
    }
    export interface $LuaComparable {
        getTableRepresentation(): $Map<never, never>;
        get tableRepresentation(): $Map<never, never>;
    }
    /**
     * Values that may be interpreted as {@link $LuaComparable}.
     */
    export type $LuaComparable_ = (() => $Map_<never, never>);
    export class $LuaItemStack implements $LuaComparable {
        getTableRepresentation(): $Map<never, never>;
        constructor(arg0: $ItemStack_);
        get tableRepresentation(): $Map<never, never>;
    }
    export class $PackageLuaObject implements $LuaComparable {
    }
    export class $LuaBigItemStack implements $LuaComparable {
        getTableRepresentation(): $Map<never, never>;
        constructor(arg0: $BigItemStack);
        get tableRepresentation(): $Map<never, never>;
    }
    export class $PackageOrderLuaObject implements $LuaComparable {
    }
}
