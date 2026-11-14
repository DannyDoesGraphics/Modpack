import { $Artifact } from "@package/org/apache/maven/artifact";

declare module "@package/org/apache/maven/artifact/resolver/filter" {
    export class $ArtifactFilter {
    }
    export interface $ArtifactFilter {
        include(arg0: $Artifact): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ArtifactFilter}.
     */
    export type $ArtifactFilter_ = ((arg0: $Artifact) => boolean);
}
