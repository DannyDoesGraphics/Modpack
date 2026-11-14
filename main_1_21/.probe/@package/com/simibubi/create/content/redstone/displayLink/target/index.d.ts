import { $DisplayLinkContext } from "@package/com/simibubi/create/content/redstone/displayLink";
import { $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $DisplayTarget, $DisplayTarget_ } from "@package/com/simibubi/create/api/behaviour/display";
import { $Record } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/redstone/displayLink/target" {
    export class $SignDisplayTarget extends $DisplayTarget {
        static BY_BLOCK_ENTITY: $SimpleRegistry<$BlockEntityType<never>, $DisplayTarget>;
        static BY_BLOCK: $SimpleRegistry<$Block, $DisplayTarget>;
        constructor();
    }
    export class $NixieTubeDisplayTarget extends $SingleLineDisplayTarget {
        static BY_BLOCK_ENTITY: $SimpleRegistry<$BlockEntityType<never>, $DisplayTarget>;
        static BY_BLOCK: $SimpleRegistry<$Block, $DisplayTarget>;
        constructor();
    }
    export class $LecternDisplayTarget extends $DisplayTarget {
        static BY_BLOCK_ENTITY: $SimpleRegistry<$BlockEntityType<never>, $DisplayTarget>;
        static BY_BLOCK: $SimpleRegistry<$Block, $DisplayTarget>;
        constructor();
    }
    export class $SingleLineDisplayTarget extends $DisplayTarget {
        static BY_BLOCK_ENTITY: $SimpleRegistry<$BlockEntityType<never>, $DisplayTarget>;
        static BY_BLOCK: $SimpleRegistry<$Block, $DisplayTarget>;
        constructor();
    }
    export class $DisplayBoardTarget extends $DisplayTarget {
        acceptFlapText(arg0: number, arg1: $List_<$List_<$MutableComponent_>>, arg2: $DisplayLinkContext): void;
        static BY_BLOCK_ENTITY: $SimpleRegistry<$BlockEntityType<never>, $DisplayTarget>;
        static BY_BLOCK: $SimpleRegistry<$Block, $DisplayTarget>;
        constructor();
    }
    export class $DisplayTargetStats extends $Record {
        maxColumns(): number;
        maxRows(): number;
        type(): $DisplayTarget;
        constructor(maxRows: number, maxColumns: number, type: $DisplayTarget_);
    }
    /**
     * Values that may be interpreted as {@link $DisplayTargetStats}.
     */
    export type $DisplayTargetStats_ = { maxRows?: number, type?: $DisplayTarget_, maxColumns?: number,  } | [maxRows?: number, type?: $DisplayTarget_, maxColumns?: number, ];
}
