import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite, $SpriteContents$FrameInfo, $SpriteContents$AnimatedTexture } from "@package/net/minecraft/client/renderer/texture";
import { $Map, $List } from "@package/java/util";

declare module "@package/net/irisshaders/iris/mixin/texture" {
    export class $SimpleTextureAccessor {
    }
    export interface $SimpleTextureAccessor {
        getLocation(): $ResourceLocation;
        get location(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $SimpleTextureAccessor}.
     */
    export type $SimpleTextureAccessor_ = (() => $ResourceLocation_);
    export class $SpriteContentsAccessor {
    }
    export interface $SpriteContentsAccessor {
        getAnimatedTexture(): $SpriteContents$AnimatedTexture;
        get animatedTexture(): $SpriteContents$AnimatedTexture;
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsAccessor}.
     */
    export type $SpriteContentsAccessor_ = (() => $SpriteContents$AnimatedTexture);
    export class $SpriteContentsAnimatedTextureAccessor {
    }
    export interface $SpriteContentsAnimatedTextureAccessor {
        invokeUploadFrame(arg0: number, arg1: number, arg2: number): void;
        getFrames(): $List<$SpriteContents$FrameInfo>;
        get frames(): $List<$SpriteContents$FrameInfo>;
    }
    export class $SpriteContentsFrameInfoAccessor {
    }
    export interface $SpriteContentsFrameInfoAccessor {
        getIndex(): number;
        getTime(): number;
        get index(): number;
        get time(): number;
    }
    export class $AnimationMetadataSectionAccessor {
    }
    export interface $AnimationMetadataSectionAccessor {
        getFrameHeight(): number;
        getFrameWidth(): number;
        setFrameWidth(arg0: number): void;
        setFrameHeight(arg0: number): void;
    }
    export class $TextureAtlasAccessor {
    }
    export interface $TextureAtlasAccessor {
        getTexturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        getMipLevel(): number;
        callGetWidth(): number;
        callGetHeight(): number;
        get texturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get mipLevel(): number;
    }
    export class $SpriteContentsTickerAccessor {
    }
    export interface $SpriteContentsTickerAccessor {
        getSubFrame(): number;
        setSubFrame(arg0: number): void;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        getFrame(): number;
        setFrame(arg0: number): void;
        get animationInfo(): $SpriteContents$AnimatedTexture;
    }
}
