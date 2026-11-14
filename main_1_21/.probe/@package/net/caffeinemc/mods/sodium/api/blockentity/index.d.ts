import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/caffeinemc/mods/sodium/api/blockentity" {
    export class $BlockEntityRenderPredicate<T extends $BlockEntity> {
    }
    export interface $BlockEntityRenderPredicate<T extends $BlockEntity> {
        shouldRender(arg0: $BlockGetter, arg1: $BlockPos_, arg2: T): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityRenderPredicate}.
     */
    export type $BlockEntityRenderPredicate_<T> = ((arg0: $BlockGetter, arg1: $BlockPos, arg2: T) => boolean);
}
