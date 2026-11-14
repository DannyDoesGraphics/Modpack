import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
export * as serialization from "@package/dev/ryanhcode/sable/mixinterface/plot/serialization";

declare module "@package/dev/ryanhcode/sable/mixinterface/plot" {
    export class $SubLevelContainerHolder {
    }
    export interface $SubLevelContainerHolder {
        sable$getPlotContainer(): $SubLevelContainer;
    }
    /**
     * Values that may be interpreted as {@link $SubLevelContainerHolder}.
     */
    export type $SubLevelContainerHolder_ = (() => $SubLevelContainer);
}
