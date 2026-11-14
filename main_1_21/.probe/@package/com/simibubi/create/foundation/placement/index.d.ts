import { $Level_ } from "@package/net/minecraft/world/level";
import { $Predicate, $Predicate_, $Function_ } from "@package/java/util/function";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Direction$Axis_, $Direction_, $Direction$Axis } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Comparable } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/foundation/placement" {
    export class $PoleHelper<T extends $Comparable<T>> implements $IPlacementHelper {
        attachedPoles(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): number;
        getStatePredicate(): $Predicate<$BlockState>;
        matchesAxis(arg0: $BlockState_, arg1: $Direction$Axis_): boolean;
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        displayGhost(arg0: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        constructor(arg0: $Predicate_<$BlockState>, arg1: $Function_<$BlockState, $Direction$Axis>, arg2: $Property<T>);
        get statePredicate(): $Predicate<$BlockState>;
    }
}
