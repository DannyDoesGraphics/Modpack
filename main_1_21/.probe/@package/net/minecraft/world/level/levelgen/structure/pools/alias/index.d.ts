import { $BiConsumer_ } from "@package/java/util/function";
import { $StructureTemplatePool, $StructureTemplatePool_ } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $BlockPos_, $Holder_, $Registry } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $Record } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/structure/pools/alias" {
    export class $Random extends $Record implements $PoolAliasBinding {
    }
    /**
     * Values that may be interpreted as {@link $Random}.
     */
    export type $Random_ = { alias?: $ResourceKey_<$StructureTemplatePool>, targets?: $SimpleWeightedRandomList<$ResourceKey_<$StructureTemplatePool>>,  } | [alias?: $ResourceKey_<$StructureTemplatePool>, targets?: $SimpleWeightedRandomList<$ResourceKey_<$StructureTemplatePool>>, ];
    export class $PoolAliasBinding {
        static randomGroup(groups: $SimpleWeightedRandomList<$List_<$PoolAliasBinding>>): $RandomGroup;
        static random(alias: $ResourceKey_<$StructureTemplatePool>, targets: $SimpleWeightedRandomList<$ResourceKey_<$StructureTemplatePool>>): $Random;
        static random(alias: string, targets: $SimpleWeightedRandomList<string>): $Random;
        static direct(alias: $ResourceKey_<$StructureTemplatePool>, target: $ResourceKey_<$StructureTemplatePool>): $Direct;
        static direct(alias: string, target: string): $Direct;
        static CODEC: $Codec<$PoolAliasBinding>;
    }
    export interface $PoolAliasBinding {
        forEachResolved(random: $RandomSource, stucturePoolKey: $BiConsumer_<$ResourceKey<$StructureTemplatePool>, $ResourceKey<$StructureTemplatePool>>): void;
        allTargets(): $Stream<$ResourceKey<$StructureTemplatePool>>;
        codec(): $MapCodec<$PoolAliasBinding>;
    }
    export class $RandomGroup extends $Record implements $PoolAliasBinding {
    }
    /**
     * Values that may be interpreted as {@link $RandomGroup}.
     */
    export type $RandomGroup_ = { groups?: $SimpleWeightedRandomList<$List_<$PoolAliasBinding>>,  } | [groups?: $SimpleWeightedRandomList<$List_<$PoolAliasBinding>>, ];
    export class $PoolAliasBindings {
        static registerTargetsAsPools(context: $BootstrapContext<$StructureTemplatePool_>, pool: $Holder_<$StructureTemplatePool>, poolAliasBindings: $List_<$PoolAliasBinding>): void;
        static bootstrap(registry: $Registry<$MapCodec_<$PoolAliasBinding>>): $MapCodec<$PoolAliasBinding>;
        constructor();
    }
    export class $Direct extends $Record implements $PoolAliasBinding {
    }
    /**
     * Values that may be interpreted as {@link $Direct}.
     */
    export type $Direct_ = { alias?: $ResourceKey_<$StructureTemplatePool>, target?: $ResourceKey_<$StructureTemplatePool>,  } | [alias?: $ResourceKey_<$StructureTemplatePool>, target?: $ResourceKey_<$StructureTemplatePool>, ];
    export class $PoolAliasLookup {
        static create(aliases: $List_<$PoolAliasBinding>, pos: $BlockPos_, seed: number): $PoolAliasLookup;
        static EMPTY: $PoolAliasLookup;
    }
    export interface $PoolAliasLookup {
        lookup(poolKey: $ResourceKey_<$StructureTemplatePool>): $ResourceKey<$StructureTemplatePool>;
    }
    /**
     * Values that may be interpreted as {@link $PoolAliasLookup}.
     */
    export type $PoolAliasLookup_ = ((arg0: $ResourceKey<$StructureTemplatePool>) => $ResourceKey_<$StructureTemplatePool>);
}
