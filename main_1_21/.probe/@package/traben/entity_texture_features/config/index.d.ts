import { $Enum } from "@package/java/lang";
export * as screens from "@package/traben/entity_texture_features/config/screens";

declare module "@package/traben/entity_texture_features/config" {
    export class $ETFConfig$EmissiveRenderModes extends $Enum<$ETFConfig$EmissiveRenderModes> {
        static values(): $ETFConfig$EmissiveRenderModes[];
        static valueOf(name: string): $ETFConfig$EmissiveRenderModes;
        static DULL: $ETFConfig$EmissiveRenderModes;
        static BRIGHT: $ETFConfig$EmissiveRenderModes;
    }
    /**
     * Values that may be interpreted as {@link $ETFConfig$EmissiveRenderModes}.
     */
    export type $ETFConfig$EmissiveRenderModes_ = "dull" | "bright";
}
