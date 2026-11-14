import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/api/connectivity" {
    export class $ConnectivityHandler {
        static partAt<T extends $BlockEntity>(arg0: $BlockEntityType_<never>, arg1: $BlockGetter, arg2: $BlockPos_): T;
        static splitMulti<T extends $BlockEntity>(arg0: T): void;
        static formMulti<T extends $BlockEntity>(arg0: T): void;
        static isConnected<T extends $BlockEntity>(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        constructor();
    }
    export class $ConnectivityHandler$SearchCache<T extends $BlockEntity> {
    }
}
