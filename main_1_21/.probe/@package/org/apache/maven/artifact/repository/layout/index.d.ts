import { $ArtifactRepository } from "@package/org/apache/maven/artifact/repository";
import { $Artifact } from "@package/org/apache/maven/artifact";
import { $ArtifactMetadata } from "@package/org/apache/maven/artifact/metadata";

declare module "@package/org/apache/maven/artifact/repository/layout" {
    export class $ArtifactRepositoryLayout {
        static ROLE: string;
    }
    export interface $ArtifactRepositoryLayout {
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        pathOf(arg0: $Artifact): string;
        getId(): string;
        get id(): string;
    }
}
