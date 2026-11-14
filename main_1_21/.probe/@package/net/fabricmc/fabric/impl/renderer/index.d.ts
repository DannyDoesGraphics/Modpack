import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $QuadView } from "@package/net/fabricmc/fabric/api/renderer/v1/mesh";
import { $TextureAtlasSprite, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Map_ } from "@package/java/util";
import { $SpriteFinder } from "@package/net/fabricmc/fabric/api/renderer/v1/model";

declare module "@package/net/fabricmc/fabric/impl/renderer" {
    export class $SpriteFinderImpl implements $SpriteFinder {
        static get(arg0: $TextureAtlas): $SpriteFinderImpl;
        find(arg0: $QuadView): $TextureAtlasSprite;
        find(arg0: number, arg1: number): $TextureAtlasSprite;
        /**
         * @deprecated
         */
        find(arg0: $QuadView, arg1: number): $TextureAtlasSprite;
        constructor(arg0: $Map_<$ResourceLocation_, $TextureAtlasSprite>, arg1: $TextureAtlas);
    }
    export class $SpriteFinderImpl$SpriteFinderAccess {
    }
    export interface $SpriteFinderImpl$SpriteFinderAccess {
        fabric_spriteFinder(): $SpriteFinderImpl;
    }
    /**
     * Values that may be interpreted as {@link $SpriteFinderImpl$SpriteFinderAccess}.
     */
    export type $SpriteFinderImpl$SpriteFinderAccess_ = (() => $SpriteFinderImpl);
}
