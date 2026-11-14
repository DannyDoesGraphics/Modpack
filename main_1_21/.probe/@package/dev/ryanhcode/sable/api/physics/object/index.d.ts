import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $SubLevelPhysicsSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $BoundingBox3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $SubLevelHoldingChunkMap } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
export * as box from "@package/dev/ryanhcode/sable/api/physics/object/box";
export * as rope from "@package/dev/ryanhcode/sable/api/physics/object/rope";

declare module "@package/dev/ryanhcode/sable/api/physics/object" {
    export class $ArbitraryPhysicsObject {
    }
    export interface $ArbitraryPhysicsObject {
        onUnloaded(arg0: $SubLevelHoldingChunkMap, arg1: $ChunkPos): void;
        wakeUp(): void;
        onAddition(arg0: $SubLevelPhysicsSystem): void;
        onRemoved(): void;
        getBoundingBox(arg0: $BoundingBox3d): void;
    }
}
