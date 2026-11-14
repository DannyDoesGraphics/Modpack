import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $InstructionAccessor, $InstructionSpeedModifiersAccessor } from "@package/com/hlysine/create_connected/mixin/sequencedgearshift";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $ListTag, $CompoundTag, $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $Vector, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction$Axis, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $HorizontalAxisKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Item } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $Property, $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $SplitShaftBlockEntity } from "@package/com/simibubi/create/content/kinetics/transmission";
import { $AllGuiTextures, $AllGuiTextures_ } from "@package/com/simibubi/create/foundation/gui";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $TransformableBlock } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/kinetics/transmission/sequencer" {
    export class $ConfigureSequencedGearshiftPacket extends $BlockEntityConfigurationPacket<$SequencedGearshiftBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConfigureSequencedGearshiftPacket>;
        constructor(arg0: $BlockPos_, arg1: $Vector<$Instruction>);
    }
    export class $Instruction implements $InstructionAccessor {
        static serializeAll(arg0: $List_<$Instruction>): $ListTag;
        static deserializeAll(arg0: $ListTag_): $Vector<$Instruction>;
        static createDefault(): $Vector<$Instruction>;
        getInstruction(): $SequencerInstructions;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Instruction>;
        constructor(arg0: $SequencerInstructions_, arg1: $InstructionSpeedModifiers_, arg2: number);
        constructor(arg0: $SequencerInstructions_, arg1: number);
        constructor(arg0: $SequencerInstructions_);
        get instruction(): $SequencerInstructions;
    }
    export class $SequencerInstructions extends $Enum<$SequencerInstructions> {
        needsPropagation(): boolean;
        static invokeInit$create_connected_$md$5c91d2$0(arg0: string, arg1: number, arg2: string, arg3: $AllGuiTextures_): $SequencerInstructions;
        static invokeInit$create_connected_$md$5c91d2$1(arg0: string, arg1: number, arg2: string, arg3: $AllGuiTextures_, arg4: boolean, arg5: boolean, arg6: number, arg7: number, arg8: number): $SequencerInstructions;
        static values(): $SequencerInstructions[];
        static valueOf(arg0: string): $SequencerInstructions;
        translationKey: string;
        maxValue: number;
        defaultValue: number;
        static AWAIT: $SequencerInstructions;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SequencerInstructions>;
        static TURN_DISTANCE: $SequencerInstructions;
        shiftStep: number;
        descriptiveTranslationKey: string;
        hasValueParameter: boolean;
        background: $AllGuiTextures;
        parameterKey: string;
        hasSpeedParameter: boolean;
        static END: $SequencerInstructions;
        static TURN_ANGLE: $SequencerInstructions;
        static DELAY: $SequencerInstructions;
    }
    /**
     * Values that may be interpreted as {@link $SequencerInstructions}.
     */
    export type $SequencerInstructions_ = "turn_angle" | "turn_distance" | "delay" | "await" | "end" | "turn_await" | "turn_time" | "loop";
    export class $OnIsPoweredResult extends $Enum<$OnIsPoweredResult> {
        static values(): $OnIsPoweredResult[];
        static valueOf(arg0: string): $OnIsPoweredResult;
        static CONTINUE: $OnIsPoweredResult;
        static NOTHING: $OnIsPoweredResult;
    }
    /**
     * Values that may be interpreted as {@link $OnIsPoweredResult}.
     */
    export type $OnIsPoweredResult_ = "nothing" | "continue";
    export class $InstructionSpeedModifiers extends $Enum<$InstructionSpeedModifiers> implements $InstructionSpeedModifiersAccessor {
        static getByModifier(arg0: number): $InstructionSpeedModifiers;
        static values(): $InstructionSpeedModifiers[];
        static valueOf(arg0: string): $InstructionSpeedModifiers;
        getValue(): number;
        static FORWARD_FAST: $InstructionSpeedModifiers;
        static BACK: $InstructionSpeedModifiers;
        static FORWARD: $InstructionSpeedModifiers;
        static BACK_FAST: $InstructionSpeedModifiers;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $InstructionSpeedModifiers>;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $InstructionSpeedModifiers}.
     */
    export type $InstructionSpeedModifiers_ = "forward_fast" | "forward" | "back" | "back_fast";
    export class $SequencedGearshiftGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $SequencedGearshiftBlockEntity extends $SplitShaftBlockEntity {
        getInstruction(arg0: number): $Instruction;
        isIdle(): boolean;
        risingFlank(): void;
        getInstructions(): $Vector<$Instruction>;
        onRedstoneUpdate(arg0: boolean, arg1: boolean): void;
        run(arg0: number): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getModifier(): number;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        computerBehaviour: $AbstractComputerBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get idle(): boolean;
        get instructions(): $Vector<$Instruction>;
        get modifier(): number;
    }
    export class $SequencedGearshiftBlockEntity$SequenceContext extends $Record {
        instruction(): $SequencerInstructions;
        relativeValue(): number;
        getEffectiveValue(arg0: number): number;
        static fromNBT(arg0: $CompoundTag_): $SequencedGearshiftBlockEntity$SequenceContext;
        static fromGearshift(arg0: $SequencerInstructions_, arg1: number, arg2: number): $SequencedGearshiftBlockEntity$SequenceContext;
        serializeNBT(): $CompoundTag;
        constructor(instruction: $SequencerInstructions_, relativeValue: number);
    }
    /**
     * Values that may be interpreted as {@link $SequencedGearshiftBlockEntity$SequenceContext}.
     */
    export type $SequencedGearshiftBlockEntity$SequenceContext_ = { instruction?: $SequencerInstructions_, relativeValue?: number,  } | [instruction?: $SequencerInstructions_, relativeValue?: number, ];
    export class $SequencedGearshiftScreen extends $AbstractSimiScreen {
        handler$cam000$create_connected$updateParamsOfRow(arg0: number, arg1: $CallbackInfo): void;
        sendPacket(): void;
        initInputsOfRow(arg0: number, arg1: number, arg2: number): void;
        updateParamsOfRow(arg0: number): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $SequencedGearshiftBlockEntity);
    }
    export class $SequencedGearshiftBlock extends $HorizontalAxisKineticBlock implements $IBE<$SequencedGearshiftBlockEntity>, $TransformableBlock {
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        getBlockEntityType(): $BlockEntityType<$SequencedGearshiftBlockEntity>;
        getBlockEntityClass(): $Class<$SequencedGearshiftBlockEntity>;
        transform(arg0: $BlockState_, arg1: $StructureTransform): $BlockState;
        tick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SequencedGearshiftBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SequencedGearshiftBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$SequencedGearshiftBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($SequencedGearshiftBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $SequencedGearshiftBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static STATE: $IntegerProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static HORIZONTAL_AXIS: $Property<$Direction$Axis>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static VERTICAL: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$SequencedGearshiftBlockEntity>;
        get blockEntityClass(): $Class<$SequencedGearshiftBlockEntity>;
    }
}
