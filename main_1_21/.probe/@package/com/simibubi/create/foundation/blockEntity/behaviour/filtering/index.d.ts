import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $MutableComponent, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BehaviourType, $ValueSettingsBoard, $ValueSettingsBehaviour, $BlockEntityBehaviour, $ValueSettingsBehaviour$ValueSettings_, $ValueBoxTransform$Sided, $ValueSettingsBehaviour$ValueSettings, $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Consumer_, $Predicate_, $Supplier_, $BiFunction_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering" {
    export class $FilteringRenderer {
        static renderOnBlockEntity(arg0: $SmartBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        static tick(): void;
        constructor();
    }
    export class $FilteringBehaviour extends $BlockEntityBehaviour implements $ValueSettingsBehaviour {
        forFluids(): $FilteringBehaviour;
        forRecipes(): $FilteringBehaviour;
        isRecipeFilter(): boolean;
        netId(): number;
        withCallback(arg0: $Consumer_<$ItemStack>): $FilteringBehaviour;
        formatValue(arg0: $ValueSettingsBehaviour$ValueSettings_): $MutableComponent;
        getTip(): $MutableComponent;
        withPredicate(arg0: $Predicate_<$ItemStack>): $FilteringBehaviour;
        getClipboardKey(): string;
        writeToClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Direction_): boolean;
        readFromClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Player, arg3: $Direction_, arg4: boolean): boolean;
        onlyActiveWhen(arg0: $Supplier_<boolean>): $FilteringBehaviour;
        testHit(arg0: $Vec3_): boolean;
        onShortInteract(arg0: $Player, arg1: $InteractionHand_, arg2: $Direction_, arg3: $BlockHitResult): void;
        createBoard(arg0: $Player, arg1: $BlockHitResult): $ValueSettingsBoard;
        getValueSettings(): $ValueSettingsBehaviour$ValueSettings;
        setValueSettings(arg0: $Player, arg1: $ValueSettingsBehaviour$ValueSettings_, arg2: boolean): void;
        getSlotPositioning(): $ValueBoxTransform;
        acceptsValueSettings(): boolean;
        showCount(): $FilteringBehaviour;
        showCountWhen(arg0: $Supplier_<boolean>): $FilteringBehaviour;
        isCountVisible(): boolean;
        anyAmount(): boolean;
        canShortInteract(arg0: $ItemStack_): boolean;
        getAmountTip(): $MutableComponent;
        getCountLabelForValueBox(): $MutableComponent;
        setLabel(arg0: $MutableComponent_): void;
        getLabel(): $MutableComponent;
        test(arg0: $FluidStack_): boolean;
        test(arg0: $ItemStack_): boolean;
        isActive(): boolean;
        getFilter(arg0: $Direction_): $ItemStack;
        getFilter(): $ItemStack;
        setFilter(arg0: $Direction_, arg1: $ItemStack_): boolean;
        setFilter(arg0: $ItemStack_): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $Direction_): number;
        getAmount(): number;
        getRenderDistance(): number;
        bypassesInput(arg0: $ItemStack_): boolean;
        newSettingHovered(arg0: $ValueSettingsBehaviour$ValueSettings_): void;
        playFeedbackSound(arg0: $BlockEntityBehaviour): void;
        onlyVisibleWithWrench(): boolean;
        mayInteract(arg0: $Player): boolean;
        upTo: boolean;
        blockEntity: $SmartBlockEntity;
        count: number;
        customLabel: $MutableComponent;
        static TYPE: $BehaviourType<$FilteringBehaviour>;
        constructor(arg0: $SmartBlockEntity, arg1: $ValueBoxTransform);
        get recipeFilter(): boolean;
        get tip(): $MutableComponent;
        get clipboardKey(): string;
        get slotPositioning(): $ValueBoxTransform;
        get countVisible(): boolean;
        get amountTip(): $MutableComponent;
        get countLabelForValueBox(): $MutableComponent;
        get active(): boolean;
        get amount(): number;
        get renderDistance(): number;
    }
    export class $SidedFilteringBehaviour extends $FilteringBehaviour {
        testHit(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction_, arg3: $Vec3_): boolean;
        updateFilterPresence(): void;
        get(arg0: $Direction_): $FilteringBehaviour;
        test(arg0: $Direction_, arg1: $ItemStack_): boolean;
        removeFilter(arg0: $Direction_): void;
        upTo: boolean;
        blockEntity: $SmartBlockEntity;
        count: number;
        customLabel: $MutableComponent;
        static TYPE: $BehaviourType<$FilteringBehaviour>;
        constructor(arg0: $SmartBlockEntity, arg1: $ValueBoxTransform$Sided, arg2: $BiFunction_<$Direction, $FilteringBehaviour, $FilteringBehaviour>, arg3: $Predicate_<$Direction>);
    }
}
