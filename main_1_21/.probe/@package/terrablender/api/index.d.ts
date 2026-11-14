import { $Consumer_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Climate$ParameterPoint, $Biome, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";

declare module "@package/terrablender/api" {
    export class $SurfaceRuleManager$RuleCategory extends $Enum<$SurfaceRuleManager$RuleCategory> {
        static values(): $SurfaceRuleManager$RuleCategory[];
        static valueOf(arg0: string): $SurfaceRuleManager$RuleCategory;
        static OVERWORLD: $SurfaceRuleManager$RuleCategory;
        static NETHER: $SurfaceRuleManager$RuleCategory;
        static END: $SurfaceRuleManager$RuleCategory;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRuleManager$RuleCategory}.
     */
    export type $SurfaceRuleManager$RuleCategory_ = "overworld" | "nether" | "end";
    export class $RegionType extends $Enum<$RegionType> {
        static values(): $RegionType[];
        static valueOf(arg0: string): $RegionType;
        static OVERWORLD: $RegionType;
        static NETHER: $RegionType;
    }
    /**
     * Values that may be interpreted as {@link $RegionType}.
     */
    export type $RegionType_ = "overworld" | "nether";
    export class $Region {
        getWeight(): number;
        addBiomes(arg0: $Registry<$Biome_>, arg1: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        getName(): $ResourceLocation;
        getType(): $RegionType;
        static DEFERRED_PLACEHOLDER: $ResourceKey<$Biome>;
        constructor(arg0: $ResourceLocation_, arg1: $RegionType_, arg2: number);
        get weight(): number;
        get name(): $ResourceLocation;
        get type(): $RegionType;
    }
}
