import { $List_, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Artifact } from "@package/org/apache/maven/artifact";

declare module "@package/org/apache/maven/artifact/versioning" {
    export class $ArtifactVersion {
    }
    export interface $ArtifactVersion extends $Comparable<$ArtifactVersion> {
        getMajorVersion(): number;
        getMinorVersion(): number;
        parseVersion(arg0: string): void;
        getBuildNumber(): number;
        getQualifier(): string;
        getIncrementalVersion(): number;
        get majorVersion(): number;
        get minorVersion(): number;
        get buildNumber(): number;
        get qualifier(): string;
        get incrementalVersion(): number;
    }
    export class $VersionRange {
        static createFromVersion(arg0: string): $VersionRange;
        /**
         * @deprecated
         */
        cloneOf(): $VersionRange;
        matchVersion(arg0: $List_<$ArtifactVersion>): $ArtifactVersion;
        containsVersion(arg0: $ArtifactVersion): boolean;
        restrict(arg0: $VersionRange): $VersionRange;
        isSelectedVersionKnown(arg0: $Artifact): boolean;
        hasRestrictions(): boolean;
        static createFromVersionSpec(arg0: string): $VersionRange;
        getSelectedVersion(arg0: $Artifact): $ArtifactVersion;
        getRecommendedVersion(): $ArtifactVersion;
        getRestrictions(): $List<$Restriction>;
        get recommendedVersion(): $ArtifactVersion;
        get restrictions(): $List<$Restriction>;
    }
    export class $Restriction {
        isUpperBoundInclusive(): boolean;
        getLowerBound(): $ArtifactVersion;
        getUpperBound(): $ArtifactVersion;
        containsVersion(arg0: $ArtifactVersion): boolean;
        isLowerBoundInclusive(): boolean;
        static EVERYTHING: $Restriction;
        constructor(arg0: $ArtifactVersion, arg1: boolean, arg2: $ArtifactVersion, arg3: boolean);
        get upperBoundInclusive(): boolean;
        get lowerBound(): $ArtifactVersion;
        get upperBound(): $ArtifactVersion;
        get lowerBoundInclusive(): boolean;
    }
}
