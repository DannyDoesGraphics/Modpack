import { $AdvancementProgress, $AdvancementRequirements, $AdvancementRequirements_ } from "@package/net/minecraft/advancements";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/io/wispforest/owo/mixin/offline" {
    export class $ProgressMapAccessor {
    }
    export interface $ProgressMapAccessor {
        getMap(): $Map<$ResourceLocation, $AdvancementProgress>;
        get map(): $Map<$ResourceLocation, $AdvancementProgress>;
    }
    /**
     * Values that may be interpreted as {@link $ProgressMapAccessor}.
     */
    export type $ProgressMapAccessor_ = (() => $Map_<$ResourceLocation_, $AdvancementProgress>);
    export class $AdvancementProgressAccessor {
    }
    export interface $AdvancementProgressAccessor {
        setRequirements(arg0: $AdvancementRequirements_): void;
        getRequirements(): $AdvancementRequirements;
    }
}
