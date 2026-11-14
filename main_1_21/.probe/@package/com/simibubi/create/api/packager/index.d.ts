import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockFace } from "@package/net/createmod/catnip/math";
import { $Record } from "@package/java/lang";
import { $Set_, $Set } from "@package/java/util";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
export * as unpacking from "@package/com/simibubi/create/api/packager/unpacking";

declare module "@package/com/simibubi/create/api/packager" {
    export class $InventoryIdentifier$Pair extends $Record implements $InventoryIdentifier {
        contains(arg0: $BlockFace): boolean;
        first(): $BlockPos;
        second(): $BlockPos;
        constructor(first: $BlockPos_, second: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $InventoryIdentifier$Pair}.
     */
    export type $InventoryIdentifier$Pair_ = { first?: $BlockPos_, second?: $BlockPos_,  } | [first?: $BlockPos_, second?: $BlockPos_, ];
    export class $InventoryIdentifier {
        static get(arg0: $Level_, arg1: $BlockFace): $InventoryIdentifier;
        static REGISTRY: $SimpleRegistry<$Block, $InventoryIdentifier$Finder>;
    }
    export interface $InventoryIdentifier {
        contains(arg0: $BlockFace): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InventoryIdentifier}.
     */
    export type $InventoryIdentifier_ = ((arg0: $BlockFace) => boolean);
    export class $InventoryIdentifier$Single extends $Record implements $InventoryIdentifier {
        contains(arg0: $BlockFace): boolean;
        pos(): $BlockPos;
        constructor(pos: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $InventoryIdentifier$Single}.
     */
    export type $InventoryIdentifier$Single_ = { pos?: $BlockPos_,  } | [pos?: $BlockPos_, ];
    export class $InventoryIdentifier$MultiFace extends $Record implements $InventoryIdentifier {
        contains(arg0: $BlockFace): boolean;
        pos(): $BlockPos;
        sides(): $Set<$Direction>;
        constructor(pos: $BlockPos_, sides: $Set_<$Direction_>);
    }
    /**
     * Values that may be interpreted as {@link $InventoryIdentifier$MultiFace}.
     */
    export type $InventoryIdentifier$MultiFace_ = { pos?: $BlockPos_, sides?: $Set_<$Direction_>,  } | [pos?: $BlockPos_, sides?: $Set_<$Direction_>, ];
    export class $InventoryIdentifier$Finder {
    }
    export interface $InventoryIdentifier$Finder {
        find(arg0: $Level_, arg1: $BlockState_, arg2: $BlockFace): $InventoryIdentifier;
    }
    /**
     * Values that may be interpreted as {@link $InventoryIdentifier$Finder}.
     */
    export type $InventoryIdentifier$Finder_ = ((arg0: $Level, arg1: $BlockState, arg2: $BlockFace) => $InventoryIdentifier_);
    export class $InventoryIdentifier$Bounds extends $Record implements $InventoryIdentifier {
        contains(arg0: $BlockFace): boolean;
        bounds(): $BoundingBox;
        constructor(bounds: $BoundingBox);
    }
    /**
     * Values that may be interpreted as {@link $InventoryIdentifier$Bounds}.
     */
    export type $InventoryIdentifier$Bounds_ = { bounds?: $BoundingBox,  } | [bounds?: $BoundingBox, ];
}
