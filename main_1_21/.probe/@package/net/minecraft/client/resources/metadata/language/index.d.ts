import { $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $Codec } from "@package/com/mojang/serialization";
import { $LanguageInfo_, $LanguageInfo } from "@package/net/minecraft/client/resources/language";
import { $Record } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/net/minecraft/client/resources/metadata/language" {
    export class $LanguageMetadataSection extends $Record {
        languages(): $Map<string, $LanguageInfo>;
        static CODEC: $Codec<$LanguageMetadataSection>;
        static LANGUAGE_CODE_CODEC: $Codec<string>;
        static TYPE: $MetadataSectionType<$LanguageMetadataSection>;
        constructor(arg0: $Map_<string, $LanguageInfo_>);
    }
    /**
     * Values that may be interpreted as {@link $LanguageMetadataSection}.
     */
    export type $LanguageMetadataSection_ = { languages?: $Map_<string, $LanguageInfo_>,  } | [languages?: $Map_<string, $LanguageInfo_>, ];
}
