import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
export * as block_properties from "@package/dev/ryanhcode/sable/mixinterface/block_properties";
export * as entity from "@package/dev/ryanhcode/sable/mixinterface/entity";
export * as clip_overwrite from "@package/dev/ryanhcode/sable/mixinterface/clip_overwrite";
export * as sublevel_render from "@package/dev/ryanhcode/sable/mixinterface/sublevel_render";
export * as loaded_chunk_debug from "@package/dev/ryanhcode/sable/mixinterface/loaded_chunk_debug";
export * as toast from "@package/dev/ryanhcode/sable/mixinterface/toast";
export * as udp from "@package/dev/ryanhcode/sable/mixinterface/udp";
export * as world_border from "@package/dev/ryanhcode/sable/mixinterface/world_border";
export * as camera from "@package/dev/ryanhcode/sable/mixinterface/camera";
export * as plot from "@package/dev/ryanhcode/sable/mixinterface/plot";
export * as respawn_point from "@package/dev/ryanhcode/sable/mixinterface/respawn_point";
export * as physics from "@package/dev/ryanhcode/sable/mixinterface/physics";
export * as water_occlusion from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
export * as dynamic_directional_shading from "@package/dev/ryanhcode/sable/mixinterface/dynamic_directional_shading";
export * as particle from "@package/dev/ryanhcode/sable/mixinterface/particle";
export * as voxel_shape_iteration from "@package/dev/ryanhcode/sable/mixinterface/voxel_shape_iteration";
export * as player_freezing from "@package/dev/ryanhcode/sable/mixinterface/player_freezing";

declare module "@package/dev/ryanhcode/sable/mixinterface" {
    export class $EntityExtension {
    }
    export interface $EntityExtension {
        sable$vanillaCollide(arg0: $Vec3_): $Vec3;
        sable$setPosSuperRaw(arg0: $Vec3_): void;
    }
    export class $BlockEntityRenderDispatcherExtension {
    }
    export interface $BlockEntityRenderDispatcherExtension {
        sable$setCameraPosition(arg0: $Vec3_): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityRenderDispatcherExtension}.
     */
    export type $BlockEntityRenderDispatcherExtension_ = ((arg0: $Vec3) => void);
}
