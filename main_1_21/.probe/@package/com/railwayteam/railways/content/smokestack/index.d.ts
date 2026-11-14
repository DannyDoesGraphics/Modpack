import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $DyeColor_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $ShapeWrapper } from "@package/com/railwayteam/railways/util";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $StateDefinition$Builder, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $BlockStateBlockItemGroup$IStyle } from "@package/com/railwayteam/railways/content/buffer";
import { $Rotation_, $Block_, $Mirror_ } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
export * as block from "@package/com/railwayteam/railways/content/smokestack/block";
export * as particles from "@package/com/railwayteam/railways/content/smokestack/particles";

declare module "@package/com/railwayteam/railways/content/smokestack" {
    export class $SmokeType extends $Enum<$SmokeType> {
        static values(): $SmokeType[];
        static valueOf(arg0: string): $SmokeType;
        static OLD: $SmokeType;
        static CARTOON: $SmokeType;
        static VANILLA: $SmokeType;
    }
    /**
     * Values that may be interpreted as {@link $SmokeType}.
     */
    export type $SmokeType_ = "vanilla" | "old" | "cartoon";
    export class $SmokeStackMovementBehaviour implements $MovementBehaviour {
        startMoving(arg0: $MovementContext): void;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        isRenderAsNormalBlockEntity(): boolean;
        tick(arg0: $MovementContext): void;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        cancelStall(arg0: $MovementContext): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        disableBlockEntityRendering(): boolean;
        stopMoving(arg0: $MovementContext): void;
        writeExtraData(arg0: $MovementContext): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        isActive(arg0: $MovementContext): boolean;
        constructor();
        constructor(arg0: boolean, arg1: boolean, arg2: boolean);
        constructor(arg0: boolean);
        get renderAsNormalBlockEntity(): boolean;
    }
    export class $SmokestackStyle$Context extends $Record {
        modelSuffix(): string;
        prefix(): string;
        description(): string;
        constructor(prefix: string, description: string, modelSuffix: string);
    }
    /**
     * Values that may be interpreted as {@link $SmokestackStyle$Context}.
     */
    export type $SmokestackStyle$Context_ = { description?: string, prefix?: string, modelSuffix?: string,  } | [description?: string, prefix?: string, modelSuffix?: string, ];
    export class $SmokeStackMovementBehaviour$TemporaryData {
    }
    export class $ISpeedNotifiable {
    }
    export interface $ISpeedNotifiable {
        notifySpeed(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ISpeedNotifiable}.
     */
    export type $ISpeedNotifiable_ = ((arg0: number) => void);
    export class $SmokeEmissionParams extends $Record {
        makeParticles(arg0: $Level_, arg1: $Vec3_, arg2: boolean, arg3: number, arg4: boolean, arg5: $DyeColor_, arg6: boolean, arg7: boolean): void;
        particleSpawnOffset(): $Vec3;
        particleSpawnDelta(): $Vec3;
        particleSpawnChance(): number;
        minParticles(): number;
        maxParticles(): number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $Vec3_, arg1: $Vec3_);
        constructor(arg0: $Vec3_);
        constructor(particleSpawnOffset: $Vec3_, particleSpawnDelta: $Vec3_, particleSpawnChance: number, minParticles: number, maxParticles: number);
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $SmokeEmissionParams}.
     */
    export type $SmokeEmissionParams_ = { maxParticles?: number, particleSpawnChance?: number, minParticles?: number, particleSpawnDelta?: $Vec3_, particleSpawnOffset?: $Vec3_,  } | [maxParticles?: number, particleSpawnChance?: number, minParticles?: number, particleSpawnDelta?: $Vec3_, particleSpawnOffset?: $Vec3_, ];
    export class $SmokestackStyle$Material extends $Enum<$SmokestackStyle$Material> {
    }
    /**
     * Values that may be interpreted as {@link $SmokestackStyle$Material}.
     */
    export type $SmokestackStyle$Material_ = "brass" | "copper" | "steel" | "iron";
    export class $RotationType {
        static NONE: $RotationType;
        static FACING: $RotationType;
        static AXIS: $RotationType;
    }
    export interface $RotationType {
        getStateForPlacement(arg0: $BlockPlaceContext, arg1: $BlockState_): $BlockState;
        createBlockStateDefinition(arg0: $StateDefinition$Builder<$Block_, $BlockState_>): void;
        getModelYRot(arg0: $BlockState_): number;
        makeDefaultState(arg0: $BlockState_): $BlockState;
        cloneRotation(arg0: $BlockState_, arg1: $BlockState_): $BlockState;
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        getShape(arg0: $BlockState_, arg1: $ShapeWrapper): $VoxelShape;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
    }
    export class $SmokestackStyle extends $Enum<$SmokestackStyle> implements $StringRepresentable, $BlockStateBlockItemGroup$IStyle<$SmokestackStyle$Context> {
        getLangName(arg0: $SmokestackStyle$Context_): string;
        getSegmentTexture(arg0: string): $ResourceLocation;
        static variantToTagKey(arg0: string): $TagKey<$Item>;
        static values(): $SmokestackStyle[];
        static valueOf(arg0: string): $SmokestackStyle;
        getTexture(arg0: string): $ResourceLocation;
        getModel(arg0: $SmokestackStyle$Context_): $ResourceLocation;
        getSerializedName(): string;
        getBlockId(arg0: $SmokestackStyle$Context_): string;
        getBlockId(): string;
        getRemappedEnumConstantName(): string;
        static IRON_CAP_STEEL: $SmokestackStyle;
        static STEEL: $SmokestackStyle;
        static BRASS: $SmokestackStyle;
        static IRON_CAP_BRASS: $SmokestackStyle;
        static COPPER_CAP_BRASS: $SmokestackStyle;
        static COPPER: $SmokestackStyle;
        static BRASS_CAP_COPPER: $SmokestackStyle;
        static COPPER_CAP_STEEL: $SmokestackStyle;
        static BRASS_CAP_STEEL: $SmokestackStyle;
        static IRON_CAP_COPPER: $SmokestackStyle;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SmokestackStyle}.
     */
    export type $SmokestackStyle_ = "steel" | "brass_cap_steel" | "copper_cap_steel" | "iron_cap_steel" | "brass" | "copper_cap_brass" | "iron_cap_brass" | "copper" | "brass_cap_copper" | "iron_cap_copper";
}
