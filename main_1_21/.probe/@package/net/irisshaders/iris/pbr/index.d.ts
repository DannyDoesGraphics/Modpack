import { $SpriteContents$Ticker } from "@package/net/minecraft/client/renderer/texture";
export * as texture from "@package/net/irisshaders/iris/pbr/texture";
export * as loader from "@package/net/irisshaders/iris/pbr/loader";

declare module "@package/net/irisshaders/iris/pbr" {
    export class $SpriteContentsExtension {
    }
    export interface $SpriteContentsExtension {
        getCreatedTicker(): $SpriteContents$Ticker;
        get createdTicker(): $SpriteContents$Ticker;
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsExtension}.
     */
    export type $SpriteContentsExtension_ = (() => $SpriteContents$Ticker);
}
