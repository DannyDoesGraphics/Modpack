import { $Long2IntOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $DataLayer } from "@package/net/minecraft/world/level/chunk";
import { $LayerLightSectionStorage, $DataLayerStorageMap } from "@package/net/minecraft/world/level/lighting";

declare module "@package/dev/engine_room/flywheel/backend/mixin/light" {
    export class $LayerLightSectionStorageAccessor {
    }
    export interface $LayerLightSectionStorageAccessor {
        flywheel$callGetDataLayer(arg0: number, arg1: boolean): $DataLayer;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightSectionStorageAccessor}.
     */
    export type $LayerLightSectionStorageAccessor_ = ((arg0: number, arg1: boolean) => $DataLayer);
    export class $SkyDataLayerStorageMapAccessor {
    }
    export interface $SkyDataLayerStorageMapAccessor {
        flywheel$topSections(): $Long2IntOpenHashMap;
        flywheel$currentLowestY(): number;
    }
    export class $LightEngineAccessor<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> {
    }
    export interface $LightEngineAccessor<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> {
        flywheel$storage(): S;
    }
    /**
     * Values that may be interpreted as {@link $LightEngineAccessor}.
     */
    export type $LightEngineAccessor_<M, S> = (() => S);
}
