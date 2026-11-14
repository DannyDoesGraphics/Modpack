import { $ArtifactRepository } from "@package/org/apache/maven/artifact/repository";
import { $Object } from "@package/java/lang";

declare module "@package/org/apache/maven/repository/legacy/metadata" {
    export class $ArtifactMetadata {
    }
    export interface $ArtifactMetadata {
        storedInArtifactVersionDirectory(): boolean;
        storedInGroupDirectory(): boolean;
        getLocalFilename(arg0: $ArtifactRepository): string;
        getRemoteFilename(): string;
        storeInLocalRepository(arg0: $ArtifactRepository, arg1: $ArtifactRepository): void;
        extendedToString(): string;
        getBaseVersion(): string;
        merge(arg0: $ArtifactMetadata): void;
        getKey(): $Object;
        getArtifactId(): string;
        getGroupId(): string;
        get remoteFilename(): string;
        get baseVersion(): string;
        get key(): $Object;
        get artifactId(): string;
        get groupId(): string;
    }
}
