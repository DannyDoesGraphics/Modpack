import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/api/contraption/transformable" {
    export class $MovedBlockTransformerRegistries$BlockEntityTransformer {
    }
    export interface $MovedBlockTransformerRegistries$BlockEntityTransformer {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
    }
    /**
     * Values that may be interpreted as {@link $MovedBlockTransformerRegistries$BlockEntityTransformer}.
     */
    export type $MovedBlockTransformerRegistries$BlockEntityTransformer_ = ((arg0: $BlockEntity, arg1: $StructureTransform) => void);
    export class $MovedBlockTransformerRegistries {
        static BLOCK_TRANSFORMERS: $SimpleRegistry<$Block, $MovedBlockTransformerRegistries$BlockTransformer>;
        static BLOCK_ENTITY_TRANSFORMERS: $SimpleRegistry<$BlockEntityType<never>, $MovedBlockTransformerRegistries$BlockEntityTransformer>;
    }
    export class $MovedBlockTransformerRegistries$BlockTransformer {
    }
    export interface $MovedBlockTransformerRegistries$BlockTransformer {
        transform(arg0: $BlockState_, arg1: $StructureTransform): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $MovedBlockTransformerRegistries$BlockTransformer}.
     */
    export type $MovedBlockTransformerRegistries$BlockTransformer_ = ((arg0: $BlockState, arg1: $StructureTransform) => $BlockState_);
    export class $TransformableBlockEntity {
    }
    export interface $TransformableBlockEntity {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
    }
    /**
     * Values that may be interpreted as {@link $TransformableBlockEntity}.
     */
    export type $TransformableBlockEntity_ = ((arg0: $BlockEntity, arg1: $StructureTransform) => void);
    export class $TransformableBlock {
    }
    export interface $TransformableBlock {
        transform(arg0: $BlockState_, arg1: $StructureTransform): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $TransformableBlock}.
     */
    export type $TransformableBlock_ = ((arg0: $BlockState, arg1: $StructureTransform) => $BlockState_);
}
