import { $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";
import { $InclusiveRange, $InclusiveRange_ } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/server/packs/metadata/pack" {
    export class $PackMetadataSection extends $Record {
        description(): $Component;
        packFormat(): number;
        supportedFormats(): ($InclusiveRange<number>) | undefined;
        static CODEC: $Codec<$PackMetadataSection>;
        static TYPE: $MetadataSectionType<$PackMetadataSection>;
        constructor(arg0: $Component_, arg1: number);
        constructor(description: $Component_, packFormat: number, supportedFormats: ($InclusiveRange_<number>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PackMetadataSection}.
     */
    export type $PackMetadataSection_ = { supportedFormats?: ($InclusiveRange_<number>) | undefined, packFormat?: number, description?: $Component_,  } | [supportedFormats?: ($InclusiveRange_<number>) | undefined, packFormat?: number, description?: $Component_, ];
}
