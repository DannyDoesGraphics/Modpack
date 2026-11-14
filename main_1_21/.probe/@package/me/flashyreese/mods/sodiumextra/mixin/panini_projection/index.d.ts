import { $PostPass } from "@package/net/minecraft/client/renderer";
import { $List_, $List } from "@package/java/util";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";

declare module "@package/me/flashyreese/mods/sodiumextra/mixin/panini_projection" {
    export class $AccessorPostChain {
    }
    export interface $AccessorPostChain {
        sodiumExtra$getPasses(): $List<$PostPass>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorPostChain}.
     */
    export type $AccessorPostChain_ = (() => $List_<$PostPass>);
    export class $AccessorLevelRenderer {
    }
    export interface $AccessorLevelRenderer {
        sodiumExtra$getCapturedFrustum(): $Frustum;
    }
    /**
     * Values that may be interpreted as {@link $AccessorLevelRenderer}.
     */
    export type $AccessorLevelRenderer_ = (() => $Frustum);
}
