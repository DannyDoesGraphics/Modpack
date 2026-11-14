import { $DataLayer } from "@package/net/minecraft/world/level/chunk";
export * as mixin from "@package/dev/engine_room/flywheel/backend/mixin";

declare module "@package/dev/engine_room/flywheel/backend" {
    export class $SkyLightSectionStorageExtension {
    }
    export interface $SkyLightSectionStorageExtension {
        flywheel$skyDataLayer(arg0: number): $DataLayer;
    }
    /**
     * Values that may be interpreted as {@link $SkyLightSectionStorageExtension}.
     */
    export type $SkyLightSectionStorageExtension_ = ((arg0: number) => $DataLayer);
}
