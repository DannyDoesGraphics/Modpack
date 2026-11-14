import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemReciever, $BlockHarvester } from "@package/dev/simulated_team/simulated/content/blocks/auger_shaft";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $LevelAccelerator } from "@package/dev/ryanhcode/sable/util";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/dev/simulated_team/simulated/content/blocks/auger_shaft/auger_groups" {
    export class $AugerDistributor extends $Record {
        harvesters(): $List<$BlockHarvester>;
        removeReceiver(arg0: $ItemReciever): void;
        addReceiver(arg0: $ItemReciever): void;
        gatherAndAssociateHarvesters(arg0: $Direction_[], arg1: $BlockPos_, arg2: $Level_, arg3: $LevelAccelerator): void;
        distributeItem(arg0: $ItemStack_, arg1: $BlockPos_): $ItemStack;
        receivers(): $List<$ItemReciever>;
        index(): $MutableInt;
        constructor(receivers: $List_<$ItemReciever>, harvesters: $List_<$BlockHarvester>, index: $MutableInt);
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $AugerDistributor}.
     */
    export type $AugerDistributor_ = { receivers?: $List_<$ItemReciever>, harvesters?: $List_<$BlockHarvester>, index?: $MutableInt,  } | [receivers?: $List_<$ItemReciever>, harvesters?: $List_<$BlockHarvester>, index?: $MutableInt, ];
}
