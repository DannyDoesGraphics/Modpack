
declare module "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/nozzle" {
    export class $NozzleBlockEntityAccessor {
    }
    export interface $NozzleBlockEntityAccessor {
        getRange(): number;
        get range(): number;
    }
    /**
     * Values that may be interpreted as {@link $NozzleBlockEntityAccessor}.
     */
    export type $NozzleBlockEntityAccessor_ = (() => number);
}
