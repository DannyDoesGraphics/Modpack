import { $ArtifactMetadata as $ArtifactMetadata$1 } from "@package/org/apache/maven/repository/legacy/metadata";

declare module "@package/org/apache/maven/artifact/metadata" {
    /**
     * @deprecated
     */
    export class $ArtifactMetadata {
    }
    export interface $ArtifactMetadata extends $ArtifactMetadata$1 {
        merge(arg0: $ArtifactMetadata): void;
    }
}
