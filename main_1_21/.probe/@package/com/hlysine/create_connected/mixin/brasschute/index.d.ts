import { $ChuteItemHandler } from "@package/com/simibubi/create/content/logistics/chute";

declare module "@package/com/hlysine/create_connected/mixin/brasschute" {
    export class $ChuteBlockEntityAccessor {
    }
    export interface $ChuteBlockEntityAccessor {
        getItemHandler(): $ChuteItemHandler;
        get itemHandler(): $ChuteItemHandler;
    }
    /**
     * Values that may be interpreted as {@link $ChuteBlockEntityAccessor}.
     */
    export type $ChuteBlockEntityAccessor_ = (() => $ChuteItemHandler);
}
