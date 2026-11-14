import { $Level_ } from "@package/net/minecraft/world/level";
import { $PoseTransformStack } from "@package/dev/engine_room/flywheel/lib/transform";
import { $EntityVisualizer, $BlockEntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Iterable, $Iterable_ } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/dev/engine_room/flywheel/impl/extension" {
    export class $BlockEntityTypeExtension<T extends $BlockEntity> {
    }
    export interface $BlockEntityTypeExtension<T extends $BlockEntity> {
        flywheel$getVisualizer(): $BlockEntityVisualizer<T>;
        flywheel$setVisualizer(arg0: $BlockEntityVisualizer<T>): void;
    }
    export class $LevelExtension {
        static getAllLoadedEntities(level: $Level_): $Iterable<$Entity>;
    }
    export interface $LevelExtension {
        flywheel$getAllLoadedEntities(): $Iterable<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $LevelExtension}.
     */
    export type $LevelExtension_ = (() => $Iterable_<$Entity>);
    export class $PoseStackExtension {
    }
    export interface $PoseStackExtension {
        flywheel$transformStack(): $PoseTransformStack;
    }
    /**
     * Values that may be interpreted as {@link $PoseStackExtension}.
     */
    export type $PoseStackExtension_ = (() => $PoseTransformStack);
    export class $EntityTypeExtension<T extends $Entity> {
    }
    export interface $EntityTypeExtension<T extends $Entity> {
        flywheel$getVisualizer(): $EntityVisualizer<T>;
        flywheel$setVisualizer(arg0: $EntityVisualizer<T>): void;
    }
}
