import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ChasingAABBOutline } from "@package/net/createmod/catnip/outliner";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Minecraft, $DeltaTracker } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $ClipboardCloneable } from "@package/com/simibubi/create/content/equipment/clipboard";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Function_, $Consumer_, $BiPredicate_ } from "@package/java/util/function";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Record } from "@package/java/lang";
import { $BlockEntityBehaviourAccessor } from "@package/com/agent772/createshufflefilter/mixins";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $MutableComponent, $Component_, $MutableComponent_, $Component } from "@package/net/minecraft/network/chat";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $INamedIconOptions } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font, $LayeredDraw$Layer, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $AABB_, $Vec3, $Vec2, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as scrollValue from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
export * as fluid from "@package/com/simibubi/create/foundation/blockEntity/behaviour/fluid";
export * as animatedContainer from "@package/com/simibubi/create/foundation/blockEntity/behaviour/animatedContainer";
export * as edgeInteraction from "@package/com/simibubi/create/foundation/blockEntity/behaviour/edgeInteraction";
export * as filtering from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
export * as inventory from "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory";
export * as simple from "@package/com/simibubi/create/foundation/blockEntity/behaviour/simple";

declare module "@package/com/simibubi/create/foundation/blockEntity/behaviour" {
    export class $ValueSettingsScreen extends $AbstractSimiScreen {
        getCoordinateOfValue(arg0: number, arg1: number): $Vec2;
        getClosestCoordinate(arg0: number, arg1: number): $ValueSettingsBehaviour$ValueSettings;
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
        constructor(arg0: $BlockPos_, arg1: $ValueSettingsBoard_, arg2: $ValueSettingsBehaviour$ValueSettings_, arg3: $Consumer_<$ValueSettingsBehaviour$ValueSettings>, arg4: number);
    }
    export class $ValueBoxRenderer {
        static renderFlatItemIntoValueBox(arg0: $ItemStack_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: number): void;
        static renderItemIntoValueBox(arg0: $ItemStack_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: number): void;
        constructor();
    }
    export class $ValueBox$IconValueBox extends $ValueBox {
        overrideColor: number;
        isPassive: boolean;
        constructor(arg0: $Component_, arg1: $INamedIconOptions, arg2: $AABB_, arg3: $BlockPos_);
    }
    export class $ValueSettingsFormatter {
        format(arg0: $ValueSettingsBehaviour$ValueSettings_): $MutableComponent;
        constructor(arg0: $Function_<$ValueSettingsBehaviour$ValueSettings, $MutableComponent>);
    }
    export class $ValueBoxTransform {
        getFontScale(): number;
        getOverrideColor(): number;
        getLocalOffset(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_): $Vec3;
        testHit(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): boolean;
        transform(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $PoseStack): void;
        rotate(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $PoseStack): void;
        getScale(): number;
        shouldRender(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        constructor();
        get fontScale(): number;
        get overrideColor(): number;
        get scale(): number;
    }
    export class $ValueSettingsBehaviour$ValueSettings extends $Record {
        row(): number;
        value(): number;
        format(): $MutableComponent;
        constructor(row: number, value: number);
    }
    /**
     * Values that may be interpreted as {@link $ValueSettingsBehaviour$ValueSettings}.
     */
    export type $ValueSettingsBehaviour$ValueSettings_ = { row?: number, value?: number,  } | [row?: number, value?: number, ];
    export class $ValueSettingsInputHandler {
        static canInteract(arg0: $Player): boolean;
        static onBlockActivated(arg0: $PlayerInteractEvent$RightClickBlock): void;
        constructor();
    }
    export class $ValueSettingsBehaviour {
    }
    export interface $ValueSettingsBehaviour extends $ClipboardCloneable {
        netId(): number;
        getClipboardKey(): string;
        writeToClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Direction_): boolean;
        readFromClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Player, arg3: $Direction_, arg4: boolean): boolean;
        testHit(arg0: $Vec3_): boolean;
        bypassesInput(arg0: $ItemStack_): boolean;
        onShortInteract(arg0: $Player, arg1: $InteractionHand_, arg2: $Direction_, arg3: $BlockHitResult): void;
        createBoard(arg0: $Player, arg1: $BlockHitResult): $ValueSettingsBoard;
        getValueSettings(): $ValueSettingsBehaviour$ValueSettings;
        newSettingHovered(arg0: $ValueSettingsBehaviour$ValueSettings_): void;
        playFeedbackSound(arg0: $BlockEntityBehaviour): void;
        setValueSettings(arg0: $Player, arg1: $ValueSettingsBehaviour$ValueSettings_, arg2: boolean): void;
        getSlotPositioning(): $ValueBoxTransform;
        onlyVisibleWithWrench(): boolean;
        acceptsValueSettings(): boolean;
        isActive(): boolean;
        mayInteract(arg0: $Player): boolean;
        get clipboardKey(): string;
        get slotPositioning(): $ValueBoxTransform;
        get active(): boolean;
    }
    export class $ValueBoxTransform$Dual extends $ValueBoxTransform {
        static makeSlots(arg0: $Function_<boolean, $ValueBoxTransform$Dual>): $Pair<$ValueBoxTransform, $ValueBoxTransform>;
        isFirst(): boolean;
        constructor(arg0: boolean);
        get first(): boolean;
    }
    export class $ValueBox extends $ChasingAABBOutline {
        wideOutline(): $ValueBox;
        renderContents(arg0: $PoseStack, arg1: $MultiBufferSource_): void;
        redirect$ggh001$sable$translate(arg0: $PoseStack, arg1: number, arg2: number, arg3: number): void;
        getOutline(): $AllIcons;
        passive(arg0: boolean): $ValueBox;
        transform(arg0: $ValueBoxTransform): $ValueBox;
        withColor(arg0: number): $ValueBox;
        overrideColor: number;
        isPassive: boolean;
        constructor(arg0: $Component_, arg1: $AABB_, arg2: $BlockPos_);
        constructor(arg0: $Component_, arg1: $AABB_, arg2: $BlockPos_, arg3: $BlockState_);
        get outline(): $AllIcons;
    }
    export class $BlockEntityBehaviour implements $BlockEntityBehaviourAccessor {
        getPos(): $BlockPos;
        onNeighborChanged(arg0: $BlockPos_): void;
        getWorld(): $Level;
        setLazyTickRate(arg0: number): void;
        lazyTick(): void;
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        isSafeNBT(): boolean;
        getRequiredItems(): $ItemRequirement;
        onBlockChanged(arg0: $BlockState_): void;
        static get<T extends $BlockEntityBehaviour>(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BehaviourType<T>): T;
        static get<T extends $BlockEntityBehaviour>(arg0: $BlockEntity, arg1: $BehaviourType<T>): T;
        initialize(): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        destroy(): void;
        getType(): $BehaviourType<never>;
        unload(): void;
        tick(): void;
        getBlockEntity(): $SmartBlockEntity;
        blockEntity: $SmartBlockEntity;
        constructor(arg0: $SmartBlockEntity);
        get pos(): $BlockPos;
        get world(): $Level;
        set lazyTickRate(value: number);
        get safeNBT(): boolean;
        get requiredItems(): $ItemRequirement;
        get type(): $BehaviourType<never>;
    }
    export class $ValueSettingsClient implements $LayeredDraw$Layer {
        startInteractionWith(arg0: $BlockPos_, arg1: $BehaviourType<never>, arg2: $InteractionHand_, arg3: $Direction_): void;
        cancelIfWarmupAlreadyStarted(arg0: $PlayerInteractEvent$RightClickBlock): void;
        cancelInteraction(): void;
        showHoverTip(arg0: $List_<$MutableComponent_>): void;
        tick(): void;
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        interactHeldBehaviour: $BehaviourType<never>;
        hoverTicks: number;
        hoverWarmup: number;
        lastHoverTip: $List<$MutableComponent>;
        interactHeldTicks: number;
        interactHeldFace: $Direction;
        interactHeldHand: $InteractionHand;
        interactHeldPos: $BlockPos;
        constructor();
    }
    export class $ValueBox$ItemValueBox extends $ValueBox {
        overrideColor: number;
        isPassive: boolean;
        constructor(arg0: $Component_, arg1: $AABB_, arg2: $BlockPos_, arg3: $ItemStack_, arg4: $MutableComponent_);
    }
    export class $ValueBoxTransform$Sided extends $ValueBoxTransform {
        fromSide(arg0: $Direction_): $ValueBoxTransform$Sided;
        getSide(): $Direction;
        constructor();
        get side(): $Direction;
    }
    export class $BehaviourType<T extends $BlockEntityBehaviour> {
        getName(): string;
        constructor(arg0: string);
        constructor();
        get name(): string;
    }
    export class $ValueBox$TextValueBox extends $ValueBox {
        overrideColor: number;
        isPassive: boolean;
        constructor(arg0: $Component_, arg1: $AABB_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Component_);
        constructor(arg0: $Component_, arg1: $AABB_, arg2: $BlockPos_, arg3: $Component_);
    }
    export class $ValueSettingsFormatter$ScrollOptionSettingsFormatter extends $ValueSettingsFormatter {
        getIcon(arg0: $ValueSettingsBehaviour$ValueSettings_): $AllIcons;
        constructor(arg0: $INamedIconOptions[]);
    }
    export class $ValueSettingsPacket extends $BlockEntityConfigurationPacket<$SmartBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ValueSettingsPacket>;
        constructor(arg0: $BlockPos_, arg1: number, arg2: number, arg3: $InteractionHand_, arg4: $BlockHitResult, arg5: $Direction_, arg6: boolean, arg7: number);
    }
    export class $ValueSettingsBoard extends $Record {
        milestoneInterval(): number;
        rows(): $List<$Component>;
        formatter(): $ValueSettingsFormatter;
        maxValue(): number;
        title(): $Component;
        constructor(title: $Component_, maxValue: number, milestoneInterval: number, rows: $List_<$Component_>, formatter: $ValueSettingsFormatter);
    }
    /**
     * Values that may be interpreted as {@link $ValueSettingsBoard}.
     */
    export type $ValueSettingsBoard_ = { maxValue?: number, formatter?: $ValueSettingsFormatter, rows?: $List_<$Component_>, title?: $Component_, milestoneInterval?: number,  } | [maxValue?: number, formatter?: $ValueSettingsFormatter, rows?: $List_<$Component_>, title?: $Component_, milestoneInterval?: number, ];
    export class $CenteredSideValueBoxTransform extends $ValueBoxTransform$Sided {
        constructor();
        constructor(arg0: $BiPredicate_<$BlockState, $Direction>);
    }
}
