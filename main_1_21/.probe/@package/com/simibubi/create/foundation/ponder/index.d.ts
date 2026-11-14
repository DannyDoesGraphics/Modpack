import { $PonderSceneBuilder$PonderEffectInstructions, $PonderSceneBuilder$PonderWorldInstructions, $PonderSceneBuilder$PonderSpecialInstructions, $PonderSceneBuilder } from "@package/net/createmod/ponder/foundation";
import { $DyeColor_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Selection, $SceneBuilder } from "@package/net/createmod/ponder/api/scene";
import { $SignalBlockEntity$SignalState_ } from "@package/com/simibubi/create/content/trains/signal";
import { $ArmBlockEntity$Phase_ } from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
import { $UnaryOperator_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ParrotPose, $ParrotElement, $ElementLink } from "@package/net/createmod/ponder/api/element";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IndexExclusionHelper, $PonderSceneRegistrationHelper, $PonderTagRegistrationHelper, $PonderPlugin, $SharedTextRegistrationHelper_ } from "@package/net/createmod/ponder/api/registration";
import { $BeltItemElement } from "@package/com/simibubi/create/foundation/ponder/element";
import { $Class } from "@package/java/lang";
import { $PonderLevel } from "@package/net/createmod/ponder/api/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as element from "@package/com/simibubi/create/foundation/ponder/element";
export * as instruction from "@package/com/simibubi/create/foundation/ponder/instruction";

declare module "@package/com/simibubi/create/foundation/ponder" {
    export class $CreateSceneBuilder extends $PonderSceneBuilder {
        special(): $CreateSceneBuilder$SpecialInstructions;
        effects(): $CreateSceneBuilder$EffectInstructions;
        constructor(arg0: $SceneBuilder);
    }
    export class $CreateSceneBuilder$EffectInstructions extends $PonderSceneBuilder$PonderEffectInstructions {
        rotationDirectionIndicator(arg0: $BlockPos_): void;
        rotationSpeedIndicator(arg0: $BlockPos_): void;
        superGlue(arg0: $BlockPos_, arg1: $Direction_, arg2: boolean): void;
        constructor(arg0: $CreateSceneBuilder);
    }
    export class $CreatePonderPlugin implements $PonderPlugin {
        registerScenes(arg0: $PonderSceneRegistrationHelper<$ResourceLocation_>): void;
        registerTags(arg0: $PonderTagRegistrationHelper<$ResourceLocation_>): void;
        registerSharedText(arg0: $SharedTextRegistrationHelper_): void;
        onPonderLevelRestore(arg0: $PonderLevel): void;
        indexExclusions(arg0: $IndexExclusionHelper): void;
        getModId(): string;
        constructor();
        get modId(): string;
    }
    export class $PonderWorldBlockEntityFix {
        static fixControllerBlockEntities(arg0: $PonderLevel): void;
        constructor();
    }
    export class $CreateSceneBuilder$WorldInstructions extends $PonderSceneBuilder$PonderWorldInstructions {
        modifyKineticSpeed(arg0: $Selection, arg1: $UnaryOperator_<number>): void;
        setKineticSpeed(arg0: $Selection, arg1: number): void;
        createItemOnBelt(arg0: $BlockPos_, arg1: $Direction_, arg2: $ItemStack_): $ElementLink<$BeltItemElement>;
        removeItemsFromBelt(arg0: $BlockPos_): void;
        createItemOnBeltLike(arg0: $BlockPos_, arg1: $Direction_, arg2: $ItemStack_): void;
        instructArm(arg0: $BlockPos_, arg1: $ArmBlockEntity$Phase_, arg2: $ItemStack_, arg3: number): void;
        changeBeltItemTo(arg0: $ElementLink<$BeltItemElement>, arg1: $ItemStack_): void;
        stallBeltItem(arg0: $ElementLink<$BeltItemElement>, arg1: boolean): void;
        rotateBearing(arg0: $BlockPos_, arg1: number, arg2: number): void;
        multiplyKineticSpeed(arg0: $Selection, arg1: number): void;
        setFilterData(arg0: $Selection, arg1: $Class<$BlockEntity>, arg2: $ItemStack_): void;
        setCraftingResult(arg0: $BlockPos_, arg1: $ItemStack_): void;
        flapFunnel(arg0: $BlockPos_, arg1: boolean): void;
        connectCrafterInvs(arg0: $BlockPos_, arg1: $BlockPos_): void;
        flashDisplayLink(arg0: $BlockPos_): void;
        animateTrainStation(arg0: $BlockPos_, arg1: boolean): void;
        toggleControls(arg0: $BlockPos_): void;
        animateBogey(arg0: $BlockPos_, arg1: number, arg2: number): void;
        propagatePipeChange(arg0: $BlockPos_): void;
        moveDeployer(arg0: $BlockPos_, arg1: number, arg2: number): void;
        changeSignalState(arg0: $BlockPos_, arg1: $SignalBlockEntity$SignalState_): void;
        conductorBlaze(arg0: $BlockPos_, arg1: boolean): void;
        setDisplayBoardText(arg0: $BlockPos_, arg1: number, arg2: $Component_): void;
        dyeDisplayBoard(arg0: $BlockPos_, arg1: number, arg2: $DyeColor_): void;
        movePulley(arg0: $BlockPos_, arg1: number, arg2: number): void;
        constructor(arg0: $CreateSceneBuilder);
    }
    export class $CreateSceneBuilder$SpecialInstructions$ParrotSpinOnComponentPose extends $ParrotPose {
        constructor(arg0: $BlockPos_);
    }
    export class $CreateSceneBuilder$SpecialInstructions extends $PonderSceneBuilder$PonderSpecialInstructions {
        conductorBirb(arg0: $ElementLink<$ParrotElement>, arg1: boolean): void;
        birbOnSpinnyShaft(arg0: $BlockPos_): $ElementLink<$ParrotElement>;
        birbOnTurntable(arg0: $BlockPos_): $ElementLink<$ParrotElement>;
        constructor(arg0: $CreateSceneBuilder);
    }
}
