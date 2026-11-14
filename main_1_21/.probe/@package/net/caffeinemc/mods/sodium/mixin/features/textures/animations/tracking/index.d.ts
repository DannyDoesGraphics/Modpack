import { $SpriteContents$FrameInfo } from "@package/net/minecraft/client/renderer/texture";
import { $List_, $List } from "@package/java/util";

declare module "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/tracking" {
    export class $AnimatedTextureAccessor {
    }
    export interface $AnimatedTextureAccessor {
        getFrames(): $List<$SpriteContents$FrameInfo>;
        get frames(): $List<$SpriteContents$FrameInfo>;
    }
    /**
     * Values that may be interpreted as {@link $AnimatedTextureAccessor}.
     */
    export type $AnimatedTextureAccessor_ = (() => $List_<$SpriteContents$FrameInfo>);
    export class $SpriteContentsFrameInfoAccessor {
    }
    export interface $SpriteContentsFrameInfoAccessor {
        getTime(): number;
        get time(): number;
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsFrameInfoAccessor}.
     */
    export type $SpriteContentsFrameInfoAccessor_ = (() => number);
}
