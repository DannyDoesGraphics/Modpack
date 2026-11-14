import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/dev/worldgen/lithostitched/worldgen/modifier/template" {
    export class $TemplateList extends $Record {
        addAll(templates: $List_<$ResourceLocation_>): void;
        templates(): $List<$ResourceLocation>;
        getRandom(randomSource: $RandomSource): $ResourceLocation;
        static CODEC: $Codec<$TemplateList>;
        constructor(templates: $List_<$ResourceLocation_>);
    }
    /**
     * Values that may be interpreted as {@link $TemplateList}.
     */
    export type $TemplateList_ = RegistryTypes.LithostitchedTemplateList | { templates?: $List_<$ResourceLocation_>,  } | [templates?: $List_<$ResourceLocation_>, ];
    export interface $TemplateList extends RegistryMarked<RegistryTypes.LithostitchedTemplateListTag, RegistryTypes.LithostitchedTemplateList> {}
}
