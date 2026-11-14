import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/compat/framedblocks" {
    export class $FramedBlocksInSchematics {
        static prepareBlockEntityData(arg0: $BlockState_, arg1: $BlockEntity): $CompoundTag;
        static getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        constructor();
    }
}
