
declare module "@package/com/hlysine/create_connected/mixin/kineticbattery" {
    export class $KineticNetworkAccessor {
    }
    export interface $KineticNetworkAccessor {
        getUnloadedStress(): number;
        get unloadedStress(): number;
    }
    /**
     * Values that may be interpreted as {@link $KineticNetworkAccessor}.
     */
    export type $KineticNetworkAccessor_ = (() => number);
}
