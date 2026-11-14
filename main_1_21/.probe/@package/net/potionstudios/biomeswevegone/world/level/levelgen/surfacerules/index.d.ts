import { $Function_, $Function } from "@package/java/util/function";
import { $IntProvider_, $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $Record } from "@package/java/lang";
import { $SurfaceRules$RuleSource, $SurfaceRules$SurfaceRule, $SurfaceRules$Context } from "@package/net/minecraft/world/level/levelgen";
import { $KeyDispatchDataCodec } from "@package/net/minecraft/util";

declare module "@package/net/potionstudios/biomeswevegone/world/level/levelgen/surfacerules" {
    export class $BandsContext {
    }
    export interface $BandsContext {
        getBandsState(arg0: $BandsRuleSource_, arg1: $SimpleWeightedRandomList<$BlockState_>, arg2: $IntProvider_, arg3: $IntProvider_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $BandsContext}.
     */
    export type $BandsContext_ = ((arg0: $BandsRuleSource, arg1: $SimpleWeightedRandomList<$BlockState>, arg2: $IntProvider, arg3: $IntProvider, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number) => $BlockState_);
    export class $BandsRuleSource extends $Record implements $SurfaceRules$RuleSource {
        bandStates(): $SimpleWeightedRandomList<$BlockState>;
        bandSizeProvider(): $IntProvider;
        bandsCountProvider(): $IntProvider;
        noiseScale(): number;
        apply(context: $SurfaceRules$Context): $SurfaceRules$SurfaceRule;
        frequency(): number;
        codec(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>;
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
        static CODEC: $KeyDispatchDataCodec<$BandsRuleSource>;
        constructor(bandStates: $SimpleWeightedRandomList<$BlockState_>, bandSizeProvider: $IntProvider_, bandsCountProvider: $IntProvider_, frequency: number, noiseScale: number);
    }
    /**
     * Values that may be interpreted as {@link $BandsRuleSource}.
     */
    export type $BandsRuleSource_ = { bandStates?: $SimpleWeightedRandomList<$BlockState_>, bandSizeProvider?: $IntProvider_, bandsCountProvider?: $IntProvider_, frequency?: number, noiseScale?: number,  } | [bandStates?: $SimpleWeightedRandomList<$BlockState_>, bandSizeProvider?: $IntProvider_, bandsCountProvider?: $IntProvider_, frequency?: number, noiseScale?: number, ];
}
