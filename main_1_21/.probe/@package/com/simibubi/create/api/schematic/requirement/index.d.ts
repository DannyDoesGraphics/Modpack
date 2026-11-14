import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/api/schematic/requirement" {
    export class $SchematicRequirementRegistries$EntityRequirement {
    }
    export interface $SchematicRequirementRegistries$EntityRequirement {
        getRequiredItems(arg0: $Entity): $ItemRequirement;
    }
    /**
     * Values that may be interpreted as {@link $SchematicRequirementRegistries$EntityRequirement}.
     */
    export type $SchematicRequirementRegistries$EntityRequirement_ = ((arg0: $Entity) => $ItemRequirement);
    export class $SpecialBlockItemRequirement {
    }
    export interface $SpecialBlockItemRequirement {
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
    }
    /**
     * Values that may be interpreted as {@link $SpecialBlockItemRequirement}.
     */
    export type $SpecialBlockItemRequirement_ = ((arg0: $BlockState, arg1: $BlockEntity) => $ItemRequirement);
    export class $SchematicRequirementRegistries$BlockEntityRequirement {
    }
    export interface $SchematicRequirementRegistries$BlockEntityRequirement {
        getRequiredItems(arg0: $BlockEntity, arg1: $BlockState_): $ItemRequirement;
    }
    /**
     * Values that may be interpreted as {@link $SchematicRequirementRegistries$BlockEntityRequirement}.
     */
    export type $SchematicRequirementRegistries$BlockEntityRequirement_ = ((arg0: $BlockEntity, arg1: $BlockState) => $ItemRequirement);
    export class $SchematicRequirementRegistries$BlockRequirement {
    }
    export interface $SchematicRequirementRegistries$BlockRequirement {
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
    }
    /**
     * Values that may be interpreted as {@link $SchematicRequirementRegistries$BlockRequirement}.
     */
    export type $SchematicRequirementRegistries$BlockRequirement_ = ((arg0: $BlockState, arg1: $BlockEntity) => $ItemRequirement);
    export class $SpecialEntityItemRequirement {
    }
    export interface $SpecialEntityItemRequirement {
        getRequiredItems(): $ItemRequirement;
        get requiredItems(): $ItemRequirement;
    }
    /**
     * Values that may be interpreted as {@link $SpecialEntityItemRequirement}.
     */
    export type $SpecialEntityItemRequirement_ = (() => $ItemRequirement);
    export class $SchematicRequirementRegistries {
        static BLOCKS: $SimpleRegistry<$Block, $SchematicRequirementRegistries$BlockRequirement>;
        static BLOCK_ENTITIES: $SimpleRegistry<$BlockEntityType<never>, $SchematicRequirementRegistries$BlockEntityRequirement>;
        static ENTITIES: $SimpleRegistry<$EntityType<never>, $SchematicRequirementRegistries$EntityRequirement>;
    }
    export class $SpecialBlockEntityItemRequirement {
    }
    export interface $SpecialBlockEntityItemRequirement {
        getRequiredItems(arg0: $BlockState_): $ItemRequirement;
    }
    /**
     * Values that may be interpreted as {@link $SpecialBlockEntityItemRequirement}.
     */
    export type $SpecialBlockEntityItemRequirement_ = ((arg0: $BlockState) => $ItemRequirement);
}
