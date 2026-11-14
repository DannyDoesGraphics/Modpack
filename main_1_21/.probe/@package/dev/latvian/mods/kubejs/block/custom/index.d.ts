import { $LevelReader } from "@package/net/minecraft/world/level";
import { $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $Item } from "@package/net/minecraft/world/item";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List } from "@package/java/util";
import { $Consumer_, $Consumer, $ToDoubleFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $WoodType_, $BlockSetType_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_, $Holder_, $Registry } from "@package/net/minecraft/core";
import { $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/dev/latvian/mods/kubejs/block/custom" {
    export class $CropBlockBuilder$SurviveCallback {
    }
    export interface $CropBlockBuilder$SurviveCallback {
        survive(state: $BlockState_, reader: $LevelReader, pos: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CropBlockBuilder$SurviveCallback}.
     */
    export type $CropBlockBuilder$SurviveCallback_ = ((state: $BlockState, reader: $LevelReader, pos: $BlockPos) => boolean);
    export class $PillarBlockBuilder extends $BlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $BasicKubeBlock$Builder extends $BlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $PressurePlateBlockBuilder extends $ShapedBlockBuilder implements $ButtonOrPressurePlateBuilder {
        behaviour(behaviour: $BlockSetType_): this;
        ticksToStayPressed(ticks: $TickDuration_): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        static PRESSURE_PLATE_TAGS: $ResourceLocation[];
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $TrapdoorBlockBuilder extends $ShapedBlockBuilder {
        behaviour(wt: $BlockSetType_): this;
        static TRAPDOOR_TAGS: $ResourceLocation[];
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $ShapedBlockBuilder extends $BlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_, ...suffixes: string[]);
    }
    export class $FenceGateBlockBuilder extends $ShapedBlockBuilder {
        behaviour(wt: string): this;
        behaviour(wt: $WoodType_): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        static FENCE_GATE_TAGS: $ResourceLocation[];
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $CarpetBlockBuilder extends $ShapedBlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        static CARPET_TAGS: $ResourceLocation[];
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $ButtonBlockBuilder extends $ShapedBlockBuilder implements $ButtonOrPressurePlateBuilder {
        behaviour(behaviour: $BlockSetType_): this;
        ticksToStayPressed(ticks: $TickDuration_): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        static BUTTON_TAGS: $ResourceLocation[];
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $CardinalBlockBuilder extends $BlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $DoorBlockBuilder extends $ShapedBlockBuilder {
        behaviour(wt: $BlockSetType_): this;
        wooden(): this;
        static DOOR_TAGS: $ResourceLocation[];
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        static WOODEN_DOOR_TAGS: $ResourceLocation[];
        constructor(i: $ResourceLocation_);
    }
    export class $SlabBlockBuilder extends $ShapedBlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        static SLAB_TAGS: $ResourceLocation[];
        constructor(i: $ResourceLocation_);
    }
    export class $WallBlockBuilder extends $ShapedBlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        static WALL_TAGS: $ResourceLocation[];
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $StairBlockBuilder extends $ShapedBlockBuilder {
        static STAIR_TAGS: $ResourceLocation[];
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $ButtonOrPressurePlateBuilder {
    }
    export interface $ButtonOrPressurePlateBuilder {
        ticksToStayPressed(ticks: $TickDuration_): this;
        behaviour(behaviour: $BlockSetType_): this;
    }
    export class $CropBlockBuilder$ShapeBuilder {
        getShapes(): $List<$VoxelShape>;
        /**
         * Makes the block to have a box like beetroot for each stage.
         */
        beetroot(): $CropBlockBuilder$ShapeBuilder;
        /**
         * Makes the block to have a box like carrot for each stage.
         */
        carrot(): $CropBlockBuilder$ShapeBuilder;
        /**
         * Makes the block to have a box like potato for each stage.
         */
        potato(): $CropBlockBuilder$ShapeBuilder;
        /**
         * Makes the block to have a box like wheat for each stage.
         */
        wheat(): $CropBlockBuilder$ShapeBuilder;
        /**
         * Describe the shape of the crop at a specific age.
         * min/max coordinates are double values between 0 and 16.
         */
        shape(age: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): $CropBlockBuilder$ShapeBuilder;
        constructor(age: number);
        get shapes(): $List<$VoxelShape>;
    }
    export class $CropBlockBuilder extends $BlockBuilder {
        /**
         * Remove seed drops from the loot table, does not prevent seed item from creating.
         */
        noSeeds(): this;
        farmersCanPlant(): this;
        bonemeal(bonemealCallback: $ToIntFunction_<$RandomTickCallback>): this;
        survive(surviveCallback: $CropBlockBuilder$SurviveCallback_): this;
        growTick(growSpeedCallback: $ToDoubleFunction_<$RandomTickCallback>): this;
        /**
         * Add a crop output with a specific amount.
         */
        crop(output: $Holder_<$Item>, chance: $NumberProvider_): this;
        /**
         * Add a crop output with exactly one output.
         */
        crop(output: $Holder_<$Item>): this;
        /**
         * Set the age of the crop and the shape of the crop at that age.
         */
        age(age: number, builder: $Consumer_<$CropBlockBuilder$ShapeBuilder>): this;
        /**
         * Set the age of the crop. Note that the box will be the same for all ages (A full block size).
         */
        age(age: number): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        static CROP_ITEM_TAGS: $ResourceLocation[];
        static CROP_BLOCK_TAGS: $ResourceLocation[];
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(id: $ResourceLocation_);
    }
    export class $FenceBlockBuilder extends $ShapedBlockBuilder {
        static FENCE_TAGS: $ResourceLocation[];
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $FallingBlockBuilder extends $BlockBuilder {
        dustColor(color: $KubeColor_): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
}
