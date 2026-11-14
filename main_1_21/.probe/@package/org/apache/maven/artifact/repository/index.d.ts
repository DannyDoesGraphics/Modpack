import { $Proxy } from "@package/org/apache/maven/repository";
import { $ArtifactRepositoryLayout } from "@package/org/apache/maven/artifact/repository/layout";
import { $Date, $List_, $List } from "@package/java/util";
import { $Artifact } from "@package/org/apache/maven/artifact";
import { $ArtifactMetadata } from "@package/org/apache/maven/artifact/metadata";
export * as layout from "@package/org/apache/maven/artifact/repository/layout";

declare module "@package/org/apache/maven/artifact/repository" {
    export class $ArtifactRepositoryPolicy {
        setChecksumPolicy(arg0: string): void;
        getUpdatePolicy(): string;
        getChecksumPolicy(): string;
        checkOutOfDate(arg0: $Date): boolean;
        setUpdatePolicy(arg0: string): void;
        isEnabled(): boolean;
        merge(arg0: $ArtifactRepositoryPolicy): void;
        setEnabled(arg0: boolean): void;
        static CHECKSUM_POLICY_IGNORE: string;
        static UPDATE_POLICY_DAILY: string;
        static CHECKSUM_POLICY_FAIL: string;
        static UPDATE_POLICY_NEVER: string;
        static CHECKSUM_POLICY_WARN: string;
        static UPDATE_POLICY_INTERVAL: string;
        static UPDATE_POLICY_ALWAYS: string;
        constructor(arg0: boolean, arg1: string, arg2: string);
        constructor(arg0: $ArtifactRepositoryPolicy);
        constructor();
    }
    export class $Authentication {
        getPassphrase(): string;
        setPassphrase(arg0: string): void;
        setPrivateKey(arg0: string): void;
        getUsername(): string;
        setUsername(arg0: string): void;
        getPrivateKey(): string;
        getPassword(): string;
        setPassword(arg0: string): void;
        constructor(arg0: string, arg1: string);
    }
    export class $ArtifactRepository {
    }
    export interface $ArtifactRepository {
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        pathOf(arg0: $Artifact): string;
        getBasedir(): string;
        setSnapshotUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        setReleaseUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        /**
         * @deprecated
         */
        isUniqueVersion(): boolean;
        /**
         * @deprecated
         */
        setBlacklisted(arg0: boolean): void;
        findVersions(arg0: $Artifact): $List<string>;
        isProjectAware(): boolean;
        setAuthentication(arg0: $Authentication): void;
        getAuthentication(): $Authentication;
        getMirroredRepositories(): $List<$ArtifactRepository>;
        setMirroredRepositories(arg0: $List_<$ArtifactRepository>): void;
        setUrl(arg0: string): void;
        setBlocked(arg0: boolean): void;
        /**
         * @deprecated
         */
        isBlacklisted(): boolean;
        setProxy(arg0: $Proxy): void;
        getKey(): string;
        find(arg0: $Artifact): $Artifact;
        getId(): string;
        getProtocol(): string;
        getUrl(): string;
        getReleases(): $ArtifactRepositoryPolicy;
        getLayout(): $ArtifactRepositoryLayout;
        setLayout(arg0: $ArtifactRepositoryLayout): void;
        setId(arg0: string): void;
        getSnapshots(): $ArtifactRepositoryPolicy;
        getProxy(): $Proxy;
        isBlocked(): boolean;
        get basedir(): string;
        set snapshotUpdatePolicy(value: $ArtifactRepositoryPolicy);
        set releaseUpdatePolicy(value: $ArtifactRepositoryPolicy);
        get uniqueVersion(): boolean;
        get projectAware(): boolean;
        get key(): string;
        get protocol(): string;
        get releases(): $ArtifactRepositoryPolicy;
        get snapshots(): $ArtifactRepositoryPolicy;
    }
}
