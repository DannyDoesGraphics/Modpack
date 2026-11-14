import { $BlockPos, $SectionPos } from "@package/net/minecraft/core";
import { $Frustum } from "@package/net/caffeinemc/mods/sodium/client/render/viewport/frustum";
import { $Vector3d } from "@package/org/joml";
export * as frustum from "@package/net/caffeinemc/mods/sodium/client/render/viewport/frustum";

declare module "@package/net/caffeinemc/mods/sodium/client/render/viewport" {
    export class $ViewportProvider {
    }
    export interface $ViewportProvider {
        sodium$createViewport(): $Viewport;
    }
    /**
     * Values that may be interpreted as {@link $ViewportProvider}.
     */
    export type $ViewportProvider_ = (() => $Viewport);
    export class $Viewport {
        isBoxVisibleDirect(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getBoxIntersectionDirect(arg0: number, arg1: number, arg2: number, arg3: number): number;
        getBlockCoord(): $BlockPos;
        getChunkCoord(): $SectionPos;
        isBoxVisibleLooser(arg0: number, arg1: number, arg2: number): boolean;
        getTransform(): $CameraTransform;
        isBoxVisible(arg0: number, arg1: number, arg2: number): boolean;
        static CHUNK_SECTION_RADIUS: number;
        static CHUNK_SECTION_MARGIN: number;
        static CHUNK_SECTION_NEARBY_MARGIN: number;
        static CHUNK_SECTION_PADDED_RADIUS: number;
        constructor(arg0: $Frustum, arg1: $Vector3d);
        get blockCoord(): $BlockPos;
        get chunkCoord(): $SectionPos;
        get transform(): $CameraTransform;
    }
    export class $CameraTransform {
        intX: number;
        fracX: number;
        x: number;
        fracY: number;
        y: number;
        intZ: number;
        z: number;
        intY: number;
        fracZ: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
}
