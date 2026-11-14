import { $libvlc_instance_t, $libvlc_media_discoverer_t } from "@package/org/watermedia/videolan4j/binding/internal";
import { $MediaListRef, $MediaList } from "@package/org/watermedia/videolan4j/medialist";
import { $Enum } from "@package/java/lang";

declare module "@package/org/watermedia/videolan4j/media/discoverer" {
    export class $MediaDiscovererFactory {
        static newMediaDiscoverer(arg0: $libvlc_instance_t, arg1: $libvlc_media_discoverer_t): $MediaDiscoverer;
        constructor();
    }
    export class $MediaDiscovererCategory extends $Enum<$MediaDiscovererCategory> {
        static mediaDiscovererCategory(arg0: number): $MediaDiscovererCategory;
        static values(): $MediaDiscovererCategory[];
        intValue(): number;
        static valueOf(arg0: string): $MediaDiscovererCategory;
        static LOCAL_DIRS: $MediaDiscovererCategory;
        static LAN: $MediaDiscovererCategory;
        static DEVICES: $MediaDiscovererCategory;
        static PODCASTS: $MediaDiscovererCategory;
    }
    /**
     * Values that may be interpreted as {@link $MediaDiscovererCategory}.
     */
    export type $MediaDiscovererCategory_ = "devices" | "lan" | "podcasts" | "local_dirs";
    export class $MediaDiscoverer {
        newMediaList(): $MediaList;
        newNediaListRef(): $MediaListRef;
        start(): boolean;
        stop(): void;
        release(): void;
        isRunning(): boolean;
        get running(): boolean;
    }
    export class $MediaDiscovererDescription {
        longName(): string;
        name(): string;
        category(): $MediaDiscovererCategory;
        constructor(arg0: string, arg1: string, arg2: $MediaDiscovererCategory_);
    }
}
