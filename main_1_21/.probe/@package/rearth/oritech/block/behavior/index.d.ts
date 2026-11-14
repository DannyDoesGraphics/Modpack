import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $LaserArmBlockEntity } from "@package/rearth/oritech/block/entity/interaction";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/rearth/oritech/block/behavior" {
    export class $LaserArmBlockBehavior {
        static registerDefaults(): void;
        fireAtBlock(arg0: $Level_, arg1: $LaserArmBlockEntity, arg2: $Block_, arg3: $BlockPos_, arg4: $BlockState_, arg5: $BlockEntity): boolean;
        constructor();
    }
    export class $LaserArmEntityBehavior {
        static registerDefaults(): void;
        fireAtEntity(arg0: $Level_, arg1: $LaserArmBlockEntity, arg2: $LivingEntity): boolean;
        constructor();
    }
}
