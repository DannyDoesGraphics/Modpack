import { $Item_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $VoxelShapeAccessor } from "@package/team/creative/creativecore/mixin";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FastVoxelShapeIterable } from "@package/dev/ryanhcode/sable/mixinterface/voxel_shape_iteration";
import { $Iterator, $List, $SequencedCollection, $BitSet } from "@package/java/util";
import { $ArrayVoxelShapeInvoker, $BitSetDiscreteVoxelShapeAccessor as $BitSetDiscreteVoxelShapeAccessor$1 } from "@package/net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/collisions/empty_space";
import { $BlockPos_, $Direction_, $AxisCycle_, $Direction$Axis_, $Direction } from "@package/net/minecraft/core";
import { $OffsetVoxelShapeCache } from "@package/net/caffeinemc/mods/lithium/common/shapes";
import { $AbstractDoubleList, $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Iterable_, $Object } from "@package/java/lang";
import { $BitSetDiscreteVoxelShapeAccessor, $DiscreteVoxelShapeAccessor } from "@package/dev/ryanhcode/sable/mixin/voxel_shape_iteration";
import { $Vec3_, $AABB_, $Vec3, $AABB, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/phys/shapes" {
    export class $ArrayVoxelShape extends $VoxelShape implements $ArrayVoxelShapeInvoker {
        static init$lithium_$md$5c91d2$0(arg0: $DiscreteVoxelShape, arg1: $DoubleList, arg2: $DoubleList, arg3: $DoubleList): $ArrayVoxelShape;
        shape: $DiscreteVoxelShape;
    }
    export class $BitSetDiscreteVoxelShape extends $DiscreteVoxelShape implements $BitSetDiscreteVoxelShapeAccessor$1, $DiscreteVoxelShapeAccessor, $BitSetDiscreteVoxelShapeAccessor {
        static withFilledBounds(x: number, y: number, z: number, xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): $BitSetDiscreteVoxelShape;
        isInterior(x: number, y: number, z: number): boolean;
        getStorage(): $BitSet;
        invokeIsZStripFull(zMin: number, zMax: number, x: number, y: number): boolean;
        invokeIsXZRectangleFull(xMin: number, xMax: number, zMin: number, zMax: number, y: number): boolean;
        invokeClearZStrip(zMin: number, zMax: number, x: number, y: number): void;
        constructor(shape: $DiscreteVoxelShape);
        constructor(xSize: number, ySize: number, zSize: number);
        get storage(): $BitSet;
    }
    export class $SubShape extends $DiscreteVoxelShape {
    }
    export class $EntityCollisionContext implements $CollisionContext {
        handler$dhf000$lithium$isHolding(arg0: $Item_, arg1: $CallbackInfoReturnable<any>): void;
        handler$dhf000$lithium$canWalkOnFluid(arg0: $FluidState, arg1: $FluidState, arg2: $CallbackInfoReturnable<any>): void;
        getHeldItem(): $ItemStack;
        isAbove(shape: $VoxelShape, pos: $BlockPos_, canAscend: boolean): boolean;
        isHoldingItem(item: $Item_): boolean;
        getEntity(): $Entity;
        canStandOnFluid(fluid1: $FluidState, fluid2: $FluidState): boolean;
        isDescending(): boolean;
        get heldItem(): $ItemStack;
        get entity(): $Entity;
        get descending(): boolean;
    }
    export class $Shapes {
        static findBits(minBits: number, arg1: number): number;
        static joinUnoptimized(shape1: $VoxelShape, shape2: $VoxelShape, _function: $BooleanOp_): $VoxelShape;
        static getFaceShape(voxelShape: $VoxelShape, direction: $Direction_): $VoxelShape;
        static blockOccudes(shape: $VoxelShape, adjacentShape: $VoxelShape, side: $Direction_): boolean;
        static mergedFaceOccludes(shape: $VoxelShape, adjacentShape: $VoxelShape, side: $Direction_): boolean;
        static faceShapeOccludes(voxelShape1: $VoxelShape, voxelShape2: $VoxelShape): boolean;
        static join(shape1: $VoxelShape, shape2: $VoxelShape, _function: $BooleanOp_): $VoxelShape;
        static empty(): $VoxelShape;
        static create(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): $VoxelShape;
        static create(aabb: $AABB_): $VoxelShape;
        static box(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): $VoxelShape;
        static collide(movementAxis: $Direction$Axis_, collisionBox: $AABB_, possibleHits: $Iterable_<$VoxelShape>, desiredOffset: number): number;
        static block(): $VoxelShape;
        static or(shape1: $VoxelShape, shape2: $VoxelShape): $VoxelShape;
        static or(shape1: $VoxelShape, ...others: $VoxelShape[]): $VoxelShape;
        static joinIsNotEmpty(shape1: $VoxelShape, shape2: $VoxelShape, resultOperator: $BooleanOp_): boolean;
        static INFINITY: $VoxelShape;
        static BIG_EPSILON: number;
        static EPSILON: number;
        constructor();
    }
    export class $CollisionContext {
        static of(entity: $Entity): $CollisionContext;
        static empty(): $CollisionContext;
    }
    export interface $CollisionContext {
        isAbove(shape: $VoxelShape, pos: $BlockPos_, canAscend: boolean): boolean;
        isHoldingItem(item: $Item_): boolean;
        canStandOnFluid(fluid1: $FluidState, fluid2: $FluidState): boolean;
        isDescending(): boolean;
        get descending(): boolean;
    }
    export class $VoxelShape implements $OffsetVoxelShapeCache, $VoxelShapeAccessor, $FastVoxelShapeIterable {
        closestPointTo(point: $Vec3_): ($Vec3) | undefined;
        toAabbs(): $List<$AABB>;
        singleEncompassing(): $VoxelShape;
        forAllBoxes(action: $Shapes$DoubleLineConsumer_): void;
        forAllEdges(action: $Shapes$DoubleLineConsumer_): void;
        findIndex(axis: $Direction$Axis_, position: number): number;
        getFaceShape(side: $Direction_): $VoxelShape;
        collideX(movementAxis: $AxisCycle_, collisionBox: $AABB_, desiredOffset: number): number;
        lithium$setShape(arg0: number, arg1: $Direction_, arg2: $VoxelShape): void;
        lithium$getOffsetSimplifiedShape(arg0: number, arg1: $Direction_): $VoxelShape;
        sable$allBoxes(): $Iterator<any>;
        min(axis: $Direction$Axis_, primaryPosition: number, arg2: number): number;
        min(axis: $Direction$Axis_): number;
        max(axis: $Direction$Axis_, primaryPosition: number, arg2: number): number;
        max(axis: $Direction$Axis_): number;
        isEmpty(): boolean;
        bounds(): $AABB;
        optimize(): $VoxelShape;
        collide(movementAxis: $Direction$Axis_, collisionBox: $AABB_, desiredOffset: number): number;
        move(xOffset: number, arg1: number, yOffset: number): $VoxelShape;
        clip(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_): $BlockHitResult;
        getCoords(axis: $Direction$Axis_): $DoubleList;
        setShape(shape: $DiscreteVoxelShape): void;
        shape: $DiscreteVoxelShape;
        get empty(): boolean;
    }
    export class $CubePointRange extends $AbstractDoubleList {
        handler$dhh000$lithium$initScale(arg0: number, arg1: $CallbackInfo): void;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        get(arg0: number): number;
        top(): number;
        peek(arg0: number): number;
        reversed(): $SequencedCollection<number>;
        constructor(parts: number);
    }
    export class $DiscreteVoxelShape$IntLineConsumer {
    }
    export interface $DiscreteVoxelShape$IntLineConsumer {
        consume(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DiscreteVoxelShape$IntLineConsumer}.
     */
    export type $DiscreteVoxelShape$IntLineConsumer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
    export class $BooleanOp {
        static SAME: $BooleanOp;
        static OR: $BooleanOp;
        static TRUE: $BooleanOp;
        static NOT_AND: $BooleanOp;
        static ONLY_SECOND: $BooleanOp;
        static FIRST: $BooleanOp;
        static CAUSED_BY: $BooleanOp;
        static NOT_SAME: $BooleanOp;
        static NOT_OR: $BooleanOp;
        static AND: $BooleanOp;
        static FALSE: $BooleanOp;
        static SECOND: $BooleanOp;
        static CAUSES: $BooleanOp;
        static ONLY_FIRST: $BooleanOp;
        static NOT_FIRST: $BooleanOp;
        static NOT_SECOND: $BooleanOp;
    }
    export interface $BooleanOp {
        apply(primaryBool: boolean, secondaryBool: boolean): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BooleanOp}.
     */
    export type $BooleanOp_ = ((arg0: boolean, arg1: boolean) => boolean);
    export class $IndirectMerger implements $IndexMerger {
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        size(): number;
        getList(): $DoubleList;
        constructor(lower: $DoubleList, upper: $DoubleList, excludeUpper: boolean, excludeLower: boolean);
        get list(): $DoubleList;
    }
    export class $DiscreteVoxelShape$IntFaceConsumer {
    }
    export interface $DiscreteVoxelShape$IntFaceConsumer {
        consume(direction: $Direction_, x: number, y: number, z: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DiscreteVoxelShape$IntFaceConsumer}.
     */
    export type $DiscreteVoxelShape$IntFaceConsumer_ = ((arg0: $Direction, arg1: number, arg2: number, arg3: number) => void);
    export class $CubeVoxelShape extends $VoxelShape {
        shape: $DiscreteVoxelShape;
    }
    export class $NonOverlappingMerger extends $AbstractDoubleList implements $IndexMerger {
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        getList(): $DoubleList;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        get(arg0: number): number;
        top(): number;
        peek(arg0: number): number;
        reversed(): $SequencedCollection<number>;
        get list(): $DoubleList;
    }
    export class $DiscreteVoxelShape implements $DiscreteVoxelShapeAccessor {
        lastFull(axis: $Direction$Axis_, y: number, z: number): number;
        lastFull(axis: $Direction$Axis_): number;
        forAllBoxes(consumer: $DiscreteVoxelShape$IntLineConsumer_, combine: boolean): void;
        forAllEdges(consumer: $DiscreteVoxelShape$IntLineConsumer_, combine: boolean): void;
        forAllFaces(faceConsumer: $DiscreteVoxelShape$IntFaceConsumer_): void;
        firstFull(axis: $Direction$Axis_, y: number, z: number): number;
        firstFull(axis: $Direction$Axis_): number;
        isFullWide(x: number, y: number, z: number): boolean;
        isFullWide(rotation: $AxisCycle_, x: number, y: number, z: number): boolean;
        isFull(rotation: $AxisCycle_, x: number, y: number, z: number): boolean;
        isFull(x: number, y: number, z: number): boolean;
        isEmpty(): boolean;
        fill(xSize: number, ySize: number, zSize: number): void;
        getSize(axis: $Direction$Axis_): number;
        getXSize(): number;
        getYSize(): number;
        getZSize(): number;
        get empty(): boolean;
        get XSize(): number;
        get YSize(): number;
        get ZSize(): number;
    }
    export class $OffsetDoubleList extends $AbstractDoubleList {
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        get(arg0: number): number;
        top(): number;
        peek(arg0: number): number;
        reversed(): $SequencedCollection<number>;
        constructor(delegate: $DoubleList, offset: number);
    }
    export class $IndexMerger$IndexConsumer {
    }
    export interface $IndexMerger$IndexConsumer {
        merge(firstValue: number, secondValue: number, thirdValue: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IndexMerger$IndexConsumer}.
     */
    export type $IndexMerger$IndexConsumer_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $IdenticalMerger implements $IndexMerger {
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        size(): number;
        getList(): $DoubleList;
        constructor(coords: $DoubleList);
        get list(): $DoubleList;
    }
    export class $DiscreteCubeMerger implements $IndexMerger {
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        size(): number;
        getList(): $DoubleList;
        get list(): $DoubleList;
    }
    export class $IndexMerger {
    }
    export interface $IndexMerger {
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        size(): number;
        getList(): $DoubleList;
        get list(): $DoubleList;
    }
    export class $SliceShape extends $VoxelShape {
        shape: $DiscreteVoxelShape;
        constructor(delegate: $VoxelShape, axis: $Direction$Axis_, index: number);
    }
    export class $Shapes$DoubleLineConsumer {
    }
    export interface $Shapes$DoubleLineConsumer {
        consume(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Shapes$DoubleLineConsumer}.
     */
    export type $Shapes$DoubleLineConsumer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
}
