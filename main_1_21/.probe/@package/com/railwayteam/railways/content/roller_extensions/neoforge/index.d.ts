import { $FilterItemStack } from "@package/com/simibubi/create/content/logistics/filter";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";

declare module "@package/com/railwayteam/railways/content/roller_extensions/neoforge" {
    export class $TrackReplacePaverImpl {
        static extract(arg0: $FilterItemStack, arg1: $MovementContext, arg2: number): $ItemStack;
        constructor();
    }
}
