import { $libvlc_renderer_discoverer_t, $libvlc_renderer_item_t } from "@package/org/watermedia/videolan4j/binding/internal";
import { $List } from "@package/java/util";
import { $NativeEventManager } from "@package/org/watermedia/videolan4j/support/eventmanager";
export * as events from "@package/org/watermedia/videolan4j/player/renderer/events";

declare module "@package/org/watermedia/videolan4j/player/renderer" {
    export class $BaseApi {
    }
    export class $RendererDiscovererEventListener {
    }
    export interface $RendererDiscovererEventListener {
        rendererDiscovererItemDeleted(arg0: $RendererDiscoverer, arg1: $RendererItem): void;
        rendererDiscovererItemAdded(arg0: $RendererDiscoverer, arg1: $RendererItem): void;
    }
    export class $RendererDiscovererNativeEventManager extends $NativeEventManager<$RendererDiscoverer, $RendererDiscovererEventListener> {
    }
    export class $RendererDiscoverer {
        rendererDiscovererInstance(): $libvlc_renderer_discoverer_t;
        list(): $ListApi;
        start(): boolean;
        stop(): void;
        release(): void;
        events(): $EventApi;
        constructor(arg0: $libvlc_renderer_discoverer_t);
    }
    export class $ListApi extends $BaseApi {
        rendererItems(): $List<$RendererItem>;
        contains(arg0: $RendererItem): boolean;
    }
    export class $RendererDiscovererDescription {
        longName(): string;
        name(): string;
        constructor(arg0: string, arg1: string);
    }
    export class $EventApi extends $BaseApi {
        removeRendererDiscovererEventListener(arg0: $RendererDiscovererEventListener): void;
        addRendererDiscovererEventListener(arg0: $RendererDiscovererEventListener): void;
    }
    export class $RendererDiscovererEventAdapter implements $RendererDiscovererEventListener {
        rendererDiscovererItemDeleted(arg0: $RendererDiscoverer, arg1: $RendererItem): void;
        rendererDiscovererItemAdded(arg0: $RendererDiscoverer, arg1: $RendererItem): void;
        constructor();
    }
    export class $RendererItem {
        rendererItemInstance(): $libvlc_renderer_item_t;
        hold(): boolean;
        iconUri(): string;
        canAudio(): boolean;
        canVideo(): boolean;
        name(): string;
        type(): string;
        release(): void;
        constructor(arg0: $libvlc_renderer_item_t);
    }
    export class $RendererItemListEventHandler implements $RendererDiscovererEventListener {
    }
}
