import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";

declare module "@package/net/irisshaders/iris/pbr/loader" {
    export class $AtlasPBRLoader$PBRTextureAtlasSprite extends $TextureAtlasSprite {
        getBaseSprite(): $TextureAtlasSprite;
        get baseSprite(): $TextureAtlasSprite;
    }
}
