import { $Level_ } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $BlockPos_ } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/api/movable" {
    export class $DefaultBlockEntityMoveStrategy implements $IBlockEntityMoveStrategy {
        beginMove(arg0: $BlockEntity, arg1: $HolderLookup$Provider): $CompoundTag;
        completeMove(arg0: $BlockEntity, arg1: $BlockState_, arg2: $CompoundTag_, arg3: $Level_, arg4: $BlockPos_): boolean;
        constructor();
    }
    export class $BlockEntityMoveStrategies {
        static get(arg0: $BlockEntity): $IBlockEntityMoveStrategy;
        static add(arg0: $IBlockEntityMoveStrategy): void;
        static getDefault(): $IBlockEntityMoveStrategy;
        constructor();
        static get default(): $IBlockEntityMoveStrategy;
    }
    export class $IBlockEntityMoveStrategy {
    }
    export interface $IBlockEntityMoveStrategy {
        canHandle(arg0: $BlockEntityType_<never>): boolean;
        beginMove(arg0: $BlockEntity, arg1: $HolderLookup$Provider): $CompoundTag;
        completeMove(arg0: $BlockEntity, arg1: $BlockState_, arg2: $CompoundTag_, arg3: $Level_, arg4: $BlockPos_): boolean;
    }
}
