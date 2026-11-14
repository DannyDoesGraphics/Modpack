import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $QuadView } from "@package/net/fabricmc/fabric/api/renderer/v1/mesh";
import { $TextureAtlasSprite, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/fabricmc/fabric/api/renderer/v1/model" {
    export class $SpriteFinder {
        static get(arg0: $TextureAtlas): $SpriteFinder;
    }
    export interface $SpriteFinder {
        /**
         * @deprecated
         */
        find(arg0: $QuadView, arg1: number): $TextureAtlasSprite;
        find(arg0: number, arg1: number): $TextureAtlasSprite;
        find(arg0: $QuadView): $TextureAtlasSprite;
    }
    export class $FabricBakedModel {
    }
    export interface $FabricBakedModel {
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<$RandomSource>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<$RandomSource>, arg2: $RenderContext): void;
        isVanillaAdapter(): boolean;
        get vanillaAdapter(): boolean;
    }
}
