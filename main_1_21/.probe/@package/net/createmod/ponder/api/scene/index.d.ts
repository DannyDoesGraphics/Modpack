import { $Level } from "@package/net/minecraft/world/level";
import { $PonderScene } from "@package/net/createmod/ponder/foundation";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $PonderPalette_, $ParticleEmitter, $ParticleEmitter_ } from "@package/net/createmod/ponder/api";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Outliner, $Outline$OutlineParams } from "@package/net/createmod/catnip/outliner";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Predicate, $Supplier_, $Function_, $Consumer_, $UnaryOperator_ } from "@package/java/util/function";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Vec3i } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $AnimatedSceneElement, $EntityElement, $MinecartElement, $ParrotElement, $WorldSectionElement, $InputElementBuilder, $MinecartElement$MinecartConstructor_, $TextElementBuilder, $ParrotPose, $ElementLink } from "@package/net/createmod/ponder/api/element";
import { $Pointing_ } from "@package/net/createmod/catnip/math";
import { $PonderInstruction } from "@package/net/createmod/ponder/foundation/instruction";
import { $Class, $Object, $Iterable } from "@package/java/lang";
import { $AABB_, $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/createmod/ponder/api/scene" {
    export class $PonderStoryBoard {
    }
    export interface $PonderStoryBoard {
        program(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
    }
    /**
     * Values that may be interpreted as {@link $PonderStoryBoard}.
     */
    export type $PonderStoryBoard_ = ((arg0: $SceneBuilder, arg1: $SceneBuildingUtil) => void);
    export class $OverlayInstructions {
    }
    export interface $OverlayInstructions {
        showControls(arg0: $Vec3_, arg1: $Pointing_, arg2: number): $InputElementBuilder;
        showFilterSlotInput(arg0: $Vec3_, arg1: number): void;
        showFilterSlotInput(arg0: $Vec3_, arg1: $Direction_, arg2: number): void;
        chaseBoundingBoxOutline(arg0: $PonderPalette_, arg1: $Object, arg2: $AABB_, arg3: number): void;
        showOutlineWithText(arg0: $Selection, arg1: number): $TextElementBuilder;
        showCenteredScrollInput(arg0: $BlockPos_, arg1: $Direction_, arg2: number): void;
        showRepeaterScrollInput(arg0: $BlockPos_, arg1: number): void;
        showBigLine(arg0: $PonderPalette_, arg1: $Vec3_, arg2: $Vec3_, arg3: number): void;
        showScrollInput(arg0: $Vec3_, arg1: $Direction_, arg2: number): void;
        showOutline(arg0: $PonderPalette_, arg1: $Object, arg2: $Selection, arg3: number): void;
        showLine(arg0: $PonderPalette_, arg1: $Vec3_, arg2: $Vec3_, arg3: number): void;
        showText(arg0: number): $TextElementBuilder;
    }
    export class $EffectInstructions {
    }
    export interface $EffectInstructions {
        indicateSuccess(arg0: $BlockPos_): void;
        indicateRedstone(arg0: $BlockPos_): void;
        simpleParticleEmitter<T extends $ParticleOptions>(arg0: T, arg1: $Vec3_): $ParticleEmitter;
        particleEmitterWithinBlockSpace<T extends $ParticleOptions>(arg0: T, arg1: $Vec3_): $ParticleEmitter;
        createRedstoneParticles(arg0: $BlockPos_, arg1: number, arg2: number): void;
        emitParticles(arg0: $Vec3_, arg1: $ParticleEmitter_, arg2: number, arg3: number): void;
    }
    export class $SceneBuilder {
    }
    export interface $SceneBuilder {
        configureBasePlate(arg0: number, arg1: number, arg2: number): void;
        scaleSceneView(arg0: number): void;
        removeShadow(): void;
        setSceneOffsetY(arg0: number): void;
        showBasePlate(): void;
        addInstruction(arg0: $Consumer_<$PonderScene>): void;
        addInstruction(arg0: $PonderInstruction): void;
        idleSeconds(arg0: number): void;
        markAsFinished(): void;
        setNextUpEnabled(arg0: boolean): void;
        rotateCameraY(arg0: number): void;
        addLazyKeyframe(): void;
        addKeyframe(): void;
        special(): $SpecialInstructions;
        getScene(): $PonderScene;
        debug(): $DebugInstructions;
        idle(arg0: number): void;
        title(arg0: string, arg1: string): void;
        overlay(): $OverlayInstructions;
        world(): $WorldInstructions;
        effects(): $EffectInstructions;
        set sceneOffsetY(value: number);
        set nextUpEnabled(value: boolean);
        get scene(): $PonderScene;
    }
    export class $Selection {
    }
    export interface $Selection extends $Iterable<$BlockPos>, $Predicate<$BlockPos> {
        substract(arg0: $Selection): $Selection;
        makeOutline(arg0: $Outliner, arg1: $Object): $Outline$OutlineParams;
        makeOutline(arg0: $Outliner): $Outline$OutlineParams;
        add(arg0: $Selection): $Selection;
        copy(): $Selection;
        getCenter(): $Vec3;
        get center(): $Vec3;
    }
    export class $SceneBuildingUtil {
    }
    export interface $SceneBuildingUtil {
        vector(): $VectorUtil;
        grid(): $PositionUtil;
        select(): $SelectionUtil;
    }
    export class $WorldInstructions {
    }
    export interface $WorldInstructions {
        restoreBlocks(arg0: $Selection): void;
        setBlocks(arg0: $Selection, arg1: $BlockState_, arg2: boolean): void;
        hideSection(arg0: $Selection, arg1: $Direction_): void;
        modifyBlock(arg0: $BlockPos_, arg1: $UnaryOperator_<$BlockState>, arg2: boolean): void;
        makeSectionIndependent(arg0: $Selection): $ElementLink<$WorldSectionElement>;
        moveSection(arg0: $ElementLink<$WorldSectionElement>, arg1: $Vec3_, arg2: number): void;
        rotateSection(arg0: $ElementLink<$WorldSectionElement>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        showIndependentSection(arg0: $Selection, arg1: $Direction_): $ElementLink<$WorldSectionElement>;
        cycleBlockProperty(arg0: $BlockPos_, arg1: $Property<never>): void;
        toggleRedstonePower(arg0: $Selection): void;
        modifyBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $Class<T>, arg2: $Consumer_<T>): void;
        showSection(arg0: $Selection, arg1: $Direction_): void;
        createItemEntity(arg0: $Vec3_, arg1: $Vec3_, arg2: $ItemStack_): $ElementLink<$EntityElement>;
        modifyEntity(arg0: $ElementLink<$EntityElement>, arg1: $Consumer_<$Entity>): void;
        modifyEntities<T extends $Entity>(arg0: $Class<T>, arg1: $Consumer_<T>): void;
        getHolderLookupProvider(): $HolderLookup$Provider;
        hideIndependentSection(arg0: $ElementLink<$WorldSectionElement>, arg1: $Direction_): void;
        configureCenterOfRotation(arg0: $ElementLink<$WorldSectionElement>, arg1: $Vec3_): void;
        modifyBlockEntityNBT(arg0: $Selection, arg1: $Class<$BlockEntity>, arg2: $Consumer_<$CompoundTag>, arg3: boolean): void;
        modifyBlockEntityNBT(arg0: $Selection, arg1: $Class<$BlockEntity>, arg2: $Consumer_<$CompoundTag>): void;
        showSectionAndMerge(arg0: $Selection, arg1: $Direction_, arg2: $ElementLink<$WorldSectionElement>): void;
        modifyBlocks(arg0: $Selection, arg1: $UnaryOperator_<$BlockState>, arg2: boolean): void;
        showIndependentSectionImmediately(arg0: $Selection): $ElementLink<$WorldSectionElement>;
        replaceBlocks(arg0: $Selection, arg1: $BlockState_, arg2: boolean): void;
        glueBlockOnto(arg0: $BlockPos_, arg1: $Direction_, arg2: $ElementLink<$WorldSectionElement>): void;
        configureStabilization(arg0: $ElementLink<$WorldSectionElement>, arg1: $Vec3_): void;
        incrementBlockBreakingProgress(arg0: $BlockPos_): void;
        destroyBlock(arg0: $BlockPos_): void;
        modifyEntitiesInside<T extends $Entity>(arg0: $Class<T>, arg1: $Selection, arg2: $Consumer_<T>): void;
        createEntity(arg0: $Function_<$Level, $Entity>): $ElementLink<$EntityElement>;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: boolean): void;
        get holderLookupProvider(): $HolderLookup$Provider;
    }
    export class $SpecialInstructions {
    }
    export interface $SpecialInstructions {
        createBirb(arg0: $Vec3_, arg1: $Supplier_<$ParrotPose>): $ElementLink<$ParrotElement>;
        movePointOfInterest(arg0: $BlockPos_): void;
        movePointOfInterest(arg0: $Vec3_): void;
        moveParrot(arg0: $ElementLink<$ParrotElement>, arg1: $Vec3_, arg2: number): void;
        changeBirbPose(arg0: $ElementLink<$ParrotElement>, arg1: $Supplier_<$ParrotPose>): void;
        rotateParrot(arg0: $ElementLink<$ParrotElement>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        createCart(arg0: $Vec3_, arg1: number, arg2: $MinecartElement$MinecartConstructor_): $ElementLink<$MinecartElement>;
        moveCart(arg0: $ElementLink<$MinecartElement>, arg1: $Vec3_, arg2: number): void;
        rotateCart(arg0: $ElementLink<$MinecartElement>, arg1: number, arg2: number): void;
        hideElement<T extends $AnimatedSceneElement>(arg0: $ElementLink<T>, arg1: $Direction_): void;
    }
    export class $SelectionUtil {
    }
    export interface $SelectionUtil {
        layersFrom(arg0: number): $Selection;
        cuboid(arg0: $BlockPos_, arg1: $Vec3i): $Selection;
        position(arg0: number, arg1: number, arg2: number): $Selection;
        position(arg0: $BlockPos_): $Selection;
        layer(arg0: number): $Selection;
        layers(arg0: number, arg1: number): $Selection;
        column(arg0: number, arg1: number): $Selection;
        everywhere(): $Selection;
        fromTo(arg0: $BlockPos_, arg1: $BlockPos_): $Selection;
        fromTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Selection;
    }
    export class $VectorUtil {
    }
    export interface $VectorUtil {
        topOf(arg0: number, arg1: number, arg2: number): $Vec3;
        topOf(arg0: $BlockPos_): $Vec3;
        blockSurface(arg0: $BlockPos_, arg1: $Direction_, arg2: number): $Vec3;
        blockSurface(arg0: $BlockPos_, arg1: $Direction_): $Vec3;
        centerOf(arg0: number, arg1: number, arg2: number): $Vec3;
        centerOf(arg0: $BlockPos_): $Vec3;
        of(arg0: number, arg1: number, arg2: number): $Vec3;
    }
    export class $PositionUtil {
    }
    export interface $PositionUtil {
        at(arg0: number, arg1: number, arg2: number): $BlockPos;
        zero(): $BlockPos;
    }
    export class $DebugInstructions {
    }
    export interface $DebugInstructions {
        debugSchematic(): void;
        addInstructionInstance(arg0: $PonderInstruction): void;
        enqueueCallback(arg0: $Consumer_<$PonderScene>): void;
    }
}
