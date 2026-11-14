import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $Predicate_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $BlockUtil$FoundRectangle } from "@package/net/minecraft";
import { $EntityDimensions_, $Entity } from "@package/net/minecraft/world/entity";
import { $Record } from "@package/java/lang";
import { $Optional } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/portal" {
    export class $PortalForcer {
        findClosestPortalPosition(exitPos: $BlockPos_, isNether: boolean, worldBorder: $WorldBorder): $Optional<any>;
        createPortal(pos: $BlockPos_, axis: $Direction$Axis_): ($BlockUtil$FoundRectangle) | undefined;
        static TICKET_RADIUS: number;
        constructor(level: $ServerLevel);
    }
    export class $DimensionTransition$PostDimensionTransition {
    }
    export interface $DimensionTransition$PostDimensionTransition {
        then(transition: $DimensionTransition$PostDimensionTransition_): $DimensionTransition$PostDimensionTransition;
        onTransition(entity: $Entity): void;
    }
    /**
     * Values that may be interpreted as {@link $DimensionTransition$PostDimensionTransition}.
     */
    export type $DimensionTransition$PostDimensionTransition_ = ((arg0: $Entity) => void);
    export class $PortalShape {
        static findPortalShape(level: $LevelAccessor, bottomLeft: $BlockPos_, predicate: $Predicate_<$PortalShape>, axis: $Direction$Axis_): ($PortalShape) | undefined;
        static findEmptyPortalShape(level: $LevelAccessor, bottomLeft: $BlockPos_, axis: $Direction$Axis_): ($PortalShape) | undefined;
        createPortalBlocks(): void;
        static findCollisionFreePosition(pos: $Vec3_, level: $ServerLevel, entity: $Entity, dimensions: $EntityDimensions_): $Vec3;
        isValid(): boolean;
        isComplete(): boolean;
        static getRelativePosition(foundRectangle: $BlockUtil$FoundRectangle, axis: $Direction$Axis_, pos: $Vec3_, entityDimensions: $EntityDimensions_): $Vec3;
        static MAX_WIDTH: number;
        static MAX_HEIGHT: number;
        constructor(level: $LevelAccessor, bottomLeft: $BlockPos_, axis: $Direction$Axis_);
        get valid(): boolean;
        get complete(): boolean;
    }
    export class $DimensionTransition extends $Record {
        static missingRespawnBlock(level: $ServerLevel, entity: $Entity, postDimensionTransition: $DimensionTransition$PostDimensionTransition_): $DimensionTransition;
        missingRespawnBlock(): boolean;
        pos(): $Vec3;
        newLevel(): $ServerLevel;
        speed(): $Vec3;
        xRot(): number;
        yRot(): number;
        postDimensionTransition(): $DimensionTransition$PostDimensionTransition;
        static PLACE_PORTAL_TICKET: $DimensionTransition$PostDimensionTransition;
        static PLAY_PORTAL_SOUND: $DimensionTransition$PostDimensionTransition;
        static DO_NOTHING: $DimensionTransition$PostDimensionTransition;
        constructor(newLevel: $ServerLevel, pos: $Vec3_, speed: $Vec3_, yRot: number, xRot: number, postDimensionTransition: $DimensionTransition$PostDimensionTransition_);
        constructor(arg0: $ServerLevel, arg1: $Vec3_, arg2: $Vec3_, arg3: number, arg4: number, arg5: boolean, arg6: $DimensionTransition$PostDimensionTransition_);
        constructor(newLevel: $ServerLevel, entity: $Entity, postDimensionTransition: $DimensionTransition$PostDimensionTransition_);
    }
    /**
     * Values that may be interpreted as {@link $DimensionTransition}.
     */
    export type $DimensionTransition_ = { xRot?: number, yRot?: number, speed?: $Vec3_, pos?: $Vec3_, postDimensionTransition?: $DimensionTransition$PostDimensionTransition_, newLevel?: $ServerLevel, missingRespawnBlock?: boolean,  } | [xRot?: number, yRot?: number, speed?: $Vec3_, pos?: $Vec3_, postDimensionTransition?: $DimensionTransition$PostDimensionTransition_, newLevel?: $ServerLevel, missingRespawnBlock?: boolean, ];
}
