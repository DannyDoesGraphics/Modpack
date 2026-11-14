import { $Frustum } from "@package/net/minecraft/client/renderer/culling";

declare module "@package/foundry/veil/mixin/perspective/accessor" {
    export class $GameRendererAccessor {
    }
    export interface $GameRendererAccessor {
        setRenderDistance(arg0: number): void;
        set renderDistance(value: number);
    }
    /**
     * Values that may be interpreted as {@link $GameRendererAccessor}.
     */
    export type $GameRendererAccessor_ = ((arg0: number) => void);
    export class $LevelRendererAccessor {
    }
    export interface $LevelRendererAccessor {
        setCullingFrustum(arg0: $Frustum): void;
        getCullingFrustum(): $Frustum;
    }
}
