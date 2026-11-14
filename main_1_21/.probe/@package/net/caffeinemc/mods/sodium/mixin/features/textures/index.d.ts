import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
export * as animations from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations";

declare module "@package/net/caffeinemc/mods/sodium/mixin/features/textures" {
    export class $SpriteContentsInvoker {
    }
    export interface $SpriteContentsInvoker {
        invokeUpload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $NativeImage[]): void;
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsInvoker}.
     */
    export type $SpriteContentsInvoker_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: $NativeImage[]) => void);
    export class $NativeImageAccessor {
    }
    export interface $NativeImageAccessor {
        sodium$getPixels(): number;
    }
    /**
     * Values that may be interpreted as {@link $NativeImageAccessor}.
     */
    export type $NativeImageAccessor_ = (() => number);
}
