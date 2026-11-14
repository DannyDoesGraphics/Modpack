import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $FrameSize_, $FrameSize } from "@package/net/minecraft/client/resources/metadata/animation";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SpriteContents, $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $ResourceManager, $ResourceMetadata, $ResourceMetadata_ } from "@package/net/minecraft/server/packs/resources";
import { $Record } from "@package/java/lang";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $SpriteSource, $SpriteSource$Output, $SpriteSourceType } from "@package/net/minecraft/client/renderer/texture/atlas";

declare module "@package/net/neoforged/neoforge/client/textures" {
    /**
     * A helper sprite with UVs spanning the entire texture.
     * 
     * Useful for baking quads that won't be used with an atlas.
     */
    export class $UnitTextureAtlasSprite extends $TextureAtlasSprite {
        static LOCATION: $ResourceLocation;
        static INSTANCE: $UnitTextureAtlasSprite;
    }
    export class $NamespacedDirectoryLister extends $Record implements $SpriteSource {
        namespace(): string;
        run(arg0: $ResourceManager, arg1: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        sourcePath(): string;
        idPrefix(): string;
        static ID: $ResourceLocation;
        static TYPE: $SpriteSourceType;
        constructor(namespace: string, sourcePath: string, idPrefix: string);
    }
    /**
     * Values that may be interpreted as {@link $NamespacedDirectoryLister}.
     */
    export type $NamespacedDirectoryLister_ = { idPrefix?: string, namespace?: string, sourcePath?: string,  } | [idPrefix?: string, namespace?: string, sourcePath?: string, ];
    /**
     * Functional interface representing the signature of the SpriteContents constructor
     * but nullable to support skipping based on metadata.
     */
    export class $SpriteContentsConstructor {
    }
    export interface $SpriteContentsConstructor {
        /**
         * Construct an instance of SpriteContents or return null to not load the sprite.
         */
        create(id: $ResourceLocation_, frameSize: $FrameSize_, nativeImage: $NativeImage, resourceMetadata: $ResourceMetadata_): $SpriteContents;
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsConstructor}.
     */
    export type $SpriteContentsConstructor_ = ((arg0: $ResourceLocation, arg1: $FrameSize, arg2: $NativeImage, arg3: $ResourceMetadata) => $SpriteContents);
    /**
     * Helper class for safely accessing fluid textures on a render worker (such as in `LiquidBlockRenderer`)
     * to avoid potential issues when a chunk gets re-batched while resources are being reloaded.
     */
    export class $FluidSpriteCache {
        static reload(): void;
        /**
         * @return a specified sprite or a missing sprite texture if sprite is not found
         */
        static getSprite(texture: $ResourceLocation_): $TextureAtlasSprite;
        /**
         * {@return an array holding the still sprite, the flowing sprite and the overlay sprite (if specified,
         * otherwise null) of the given fluid at the given position}
         */
        static getFluidSprites(level: $BlockAndTintGetter, pos: $BlockPos_, fluid: $FluidState): $TextureAtlasSprite[];
    }
}
