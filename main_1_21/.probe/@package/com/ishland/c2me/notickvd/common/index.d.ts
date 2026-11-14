
declare module "@package/com/ishland/c2me/notickvd/common" {
    export class $ChunkLevelManagerExtension {
    }
    export interface $ChunkLevelManagerExtension {
        c2me$getPendingLoadsCount(): number;
        c2me$closeNoTickVD(): void;
    }
    export class $IRenderDistanceOverride {
    }
    export interface $IRenderDistanceOverride {
        c2me_notickvd$setRenderDistance(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IRenderDistanceOverride}.
     */
    export type $IRenderDistanceOverride_ = ((arg0: number) => void);
}
