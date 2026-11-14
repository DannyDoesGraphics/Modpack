import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ProjectileDispenseBehavior } from "@package/net/minecraft/core/dispenser";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/api/contraption/dispenser" {
    export class $OptionalMountedDispenseBehavior extends $DefaultMountedDispenseBehavior {
        static INSTANCE: $MountedDispenseBehavior;
        constructor();
    }
    export class $MountedDispenseBehavior {
        static getDispenserNormal(arg0: $MovementContext): $Vec3;
        static getClosestFacingDirection(arg0: $Vec3_): $Direction;
        static placeItemInInventory(arg0: $ItemStack_, arg1: $MovementContext, arg2: $BlockPos_): void;
        static REGISTRY: $SimpleRegistry<$Item, $MountedDispenseBehavior>;
    }
    export interface $MountedDispenseBehavior {
        dispense(arg0: $ItemStack_, arg1: $MovementContext, arg2: $BlockPos_): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $MountedDispenseBehavior}.
     */
    export type $MountedDispenseBehavior_ = ((arg0: $ItemStack, arg1: $MovementContext, arg2: $BlockPos) => $ItemStack_);
    export class $MountedProjectileDispenseBehavior extends $DefaultMountedDispenseBehavior {
        static of(arg0: $ProjectileDispenseBehavior): $MountedDispenseBehavior;
        static INSTANCE: $MountedDispenseBehavior;
        constructor();
    }
    export class $DefaultMountedDispenseBehavior implements $MountedDispenseBehavior {
        dispense(arg0: $ItemStack_, arg1: $MovementContext, arg2: $BlockPos_): $ItemStack;
        static spawnItem(arg0: $Level_, arg1: $ItemStack_, arg2: number, arg3: $Vec3_, arg4: $BlockPos_, arg5: $MovementContext): void;
        static INSTANCE: $MountedDispenseBehavior;
        constructor();
    }
}
