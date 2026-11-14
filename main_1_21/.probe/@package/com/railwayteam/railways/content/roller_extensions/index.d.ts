import { $FilterItemStack } from "@package/com/simibubi/create/content/logistics/filter";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $PaveTask } from "@package/com/simibubi/create/content/contraptions/actors/roller";
export * as neoforge from "@package/com/railwayteam/railways/content/roller_extensions/neoforge";

declare module "@package/com/railwayteam/railways/content/roller_extensions" {
    export class $TrackReplacePaver {
        static pave(arg0: $MovementContext, arg1: $BlockPos_, arg2: $BlockState_, arg3: $PaveTask): void;
        static extract(arg0: $FilterItemStack, arg1: $MovementContext, arg2: number): $ItemStack;
        static extract(arg0: $FilterItemStack, arg1: $MovementContext): $ItemStack;
        static tickInstantly: boolean;
        constructor();
    }
}
