import { $GifDecoder } from "@package/org/watermedia/api/image/decoders";
import { $Consumer_, $BiConsumer, $BiConsumer_ } from "@package/java/util/function";
import { $URI } from "@package/java/net";
import { $Executor_ } from "@package/java/util/concurrent";
import { $CacheAPI$Entry } from "@package/org/watermedia/api/cache";
import { $Marker } from "@package/org/apache/logging/log4j";
import { $WaterMediaAPI } from "@package/org/watermedia/api";
import { $ClassLoader, $Runnable, $Enum, $Exception } from "@package/java/lang";
import { $BufferedImage } from "@package/java/awt/image";
export * as decoders from "@package/org/watermedia/api/image/decoders";

declare module "@package/org/watermedia/api/image" {
    export class $ImageRenderer {
        isFlushed(): boolean;
        texture(arg0: number): number;
        texture(arg0: number): number;
        texture(arg0: number, arg1: number, arg2: boolean): number;
        texture(arg0: number, arg1: number, arg2: boolean): number;
        reset(): void;
        release(): void;
        duration: number;
        delay: number[];
        textures: number[];
        width: number;
        flushed: boolean;
        remaining: number;
        height: number;
    }
    export class $ImageCache {
        addReleaseCallback(arg0: $Consumer_<$ImageRenderer>): $ImageCache;
        isCache(): boolean;
        isUsed(): boolean;
        deuse(): $ImageCache;
        isVideo(): boolean;
        getUsages(): number;
        reset(): $ImageCache;
        load(): void;
        flush(): $ImageCache;
        getException(): $Exception;
        use(): $ImageCache;
        release(): void;
        reload(): void;
        getStatus(): $ImageCache$Status;
        getRenderer(): $ImageRenderer;
        uri: $URI;
        get cache(): boolean;
        get used(): boolean;
        get video(): boolean;
        get usages(): number;
        get exception(): $Exception;
        get status(): $ImageCache$Status;
        get renderer(): $ImageRenderer;
    }
    export class $ImageFetch$VideoTypeException extends $Exception {
    }
    export class $ImageCache$Status extends $Enum<$ImageCache$Status> {
        static values(): $ImageCache$Status[];
        static valueOf(arg0: string): $ImageCache$Status;
        static LOADING: $ImageCache$Status;
        static READY: $ImageCache$Status;
        static FORGOTTEN: $ImageCache$Status;
        static FAILED: $ImageCache$Status;
        static WAITING: $ImageCache$Status;
    }
    /**
     * Values that may be interpreted as {@link $ImageCache$Status}.
     */
    export type $ImageCache$Status_ = "waiting" | "loading" | "ready" | "forgotten" | "failed";
    export class $ImageRenderer$Absolute extends $ImageRenderer {
        duration: number;
        delay: number[];
        textures: number[];
        width: number;
        flushed: boolean;
        remaining: number;
        height: number;
    }
    export class $ImageFetch$InternalDecoderException extends $Exception {
    }
    export class $ImageFetch implements $Runnable {
        setSuccessCallback(arg0: $BiConsumer_<$ImageRenderer, boolean>): $ImageFetch;
        readImages(arg0: number[]): $ImageRenderer;
        readImages(arg0: $CacheAPI$Entry): $ImageRenderer;
        run(): void;
        start(): void;
        setErrorCallback(arg0: $BiConsumer_<$Exception, boolean>): $ImageFetch;
        errConsumer: $BiConsumer<$Exception, boolean>;
        successConsumer: $BiConsumer<$ImageRenderer, boolean>;
        uri: $URI;
        constructor(arg0: $URI);
        set successCallback(value: $BiConsumer_<$ImageRenderer, boolean>);
        set errorCallback(value: $BiConsumer_<$Exception, boolean>);
    }
    export class $ImageAPI extends $WaterMediaAPI {
        static createCache(arg0: $ImageRenderer): $ImageCache;
        static createCache(arg0: $BufferedImage, arg1: boolean): $ImageCache;
        static failedVLC(): $ImageRenderer;
        static failedVLCLandscape(): $ImageRenderer;
        static cacheFailedVLC(): $ImageCache;
        static cacheFailedVLCLandscape(): $ImageCache;
        static loadingGif(): $ImageRenderer;
        static loadingGif(arg0: string): $ImageRenderer;
        static blackPicture(): $ImageRenderer;
        static cacheLoadingGif(): $ImageCache;
        static reloadCache(): void;
        static renderer(arg0: $BufferedImage): $ImageRenderer;
        static renderer(arg0: $BufferedImage, arg1: boolean): $ImageRenderer;
        static renderer(arg0: $BufferedImage[], arg1: number[]): $ImageRenderer;
        static renderer(arg0: $BufferedImage[], arg1: number[], arg2: boolean): $ImageRenderer;
        static renderer(arg0: string, arg1: $ClassLoader): $ImageRenderer;
        static renderer(arg0: $GifDecoder, arg1: boolean): $ImageRenderer;
        static renderer(arg0: $GifDecoder): $ImageRenderer;
        static renderer(arg0: string, arg1: $ClassLoader, arg2: boolean): $ImageRenderer;
        static getCache(arg0: $URI, arg1: $Executor_): $ImageCache;
        static IT: $Marker;
        constructor();
    }
    export class $ImageFetch$NoImageException extends $Exception {
    }
    export class $ImageFetch$ForbiddenException extends $ImageFetch$NoImageException {
    }
}
