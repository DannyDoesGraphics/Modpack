import { $ConductorEntity } from "@package/com/railwayteam/railways/content/conductor";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ToolboxInventory } from "@package/com/simibubi/create/content/equipment/toolbox";
import { $MountedToolbox } from "@package/com/railwayteam/railways/content/conductor/toolbox";

declare module "@package/com/railwayteam/railways/content/conductor/toolbox/neoforge" {
    export class $MountedToolboxEquipPacketImpl {
        static doEquip(arg0: $ServerPlayer, arg1: number, arg2: $ItemStack_, arg3: $ToolboxInventory): void;
        constructor();
    }
    export class $MountedToolboxDisposeAllPacketImpl {
        static doDisposal(arg0: $MountedToolbox, arg1: $ServerPlayer, arg2: $ConductorEntity): boolean;
        constructor();
    }
    export class $MountedToolboxImpl {
        static openMenu(arg0: $ServerPlayer, arg1: $MountedToolbox): void;
        constructor();
    }
}
