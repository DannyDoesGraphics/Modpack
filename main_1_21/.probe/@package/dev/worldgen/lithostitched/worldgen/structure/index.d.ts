import { $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Consumer_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Iterable } from "@package/java/lang";
import { $Spliterator, $Iterator, $List } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/dev/worldgen/lithostitched/worldgen/structure" {
    export class $LithostitchedTemplates implements $Iterable<$StructurePoolElement> {
        add(element: $StructurePoolElement, weight: number): $LithostitchedTemplates;
        iterator(): $Iterator<$StructurePoolElement>;
        stream(): $Stream<$StructurePoolElement>;
        shuffle(random: $RandomSource): $List<$StructurePoolElement>;
        spliterator(): $Spliterator<$StructurePoolElement>;
        forEach(arg0: $Consumer_<$StructurePoolElement>): void;
        constructor();
        [Symbol.iterator](): Iterator<$StructurePoolElement>
    }
}
