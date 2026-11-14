import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Map_, $Map } from "@package/java/util";
import { $MountedItemStorage } from "@package/com/simibubi/create/api/contraption/storage/item";
export * as client from "@package/dev/ryanhcode/offroad/mixin/client";

declare module "@package/dev/ryanhcode/offroad/mixin" {
    export class $MountedStorageAccessor {
    }
    export interface $MountedStorageAccessor {
        getItemsBuilder(): $Map<$BlockPos, $MountedItemStorage>;
        get itemsBuilder(): $Map<$BlockPos, $MountedItemStorage>;
    }
    /**
     * Values that may be interpreted as {@link $MountedStorageAccessor}.
     */
    export type $MountedStorageAccessor_ = (() => $Map_<$BlockPos_, $MountedItemStorage>);
}
