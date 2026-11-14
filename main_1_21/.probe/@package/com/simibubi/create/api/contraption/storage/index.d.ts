import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos_ } from "@package/net/minecraft/core";
export * as item from "@package/com/simibubi/create/api/contraption/storage/item";
export * as fluid from "@package/com/simibubi/create/api/contraption/storage/fluid";

declare module "@package/com/simibubi/create/api/contraption/storage" {
    export class $SyncedMountedStorage {
    }
    export interface $SyncedMountedStorage {
        afterSync(arg0: $Contraption, arg1: $BlockPos_): void;
        markClean(): void;
        isDirty(): boolean;
        get dirty(): boolean;
    }
}
