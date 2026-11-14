import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ChunkRenderContext } from "@package/net/caffeinemc/mods/sodium/client/world/cloned";
import { $Minecraft } from "@package/net/minecraft/client";
import { $BlockModelShaper } from "@package/net/minecraft/client/renderer/block";
import { $LevelSlice } from "@package/net/caffeinemc/mods/sodium/client/world";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline" {
    export class $TextureAtlasSpriteExtension {
    }
    export interface $TextureAtlasSpriteExtension {
        sodium$hasUnknownImageContents(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TextureAtlasSpriteExtension}.
     */
    export type $TextureAtlasSpriteExtension_ = (() => boolean);
    export class $BlockRenderCache {
        getWorldSlice(): $LevelSlice;
        getBlockModels(): $BlockModelShaper;
        getFluidRenderer(): $FluidRenderer;
        init(arg0: $ChunkRenderContext): void;
        cleanup(): void;
        getBlockRenderer(): $BlockRenderer;
        constructor(arg0: $Minecraft, arg1: $ClientLevel);
        get worldSlice(): $LevelSlice;
        get blockModels(): $BlockModelShaper;
        get fluidRenderer(): $FluidRenderer;
        get blockRenderer(): $BlockRenderer;
    }
    export class $SpriteContentsExtension {
    }
    export interface $SpriteContentsExtension {
        sodium$hasTransparentPixels(): boolean;
        sodium$hasTranslucentPixels(): boolean;
    }
}
