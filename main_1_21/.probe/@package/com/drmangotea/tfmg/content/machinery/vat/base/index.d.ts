import { $Level } from "@package/net/minecraft/world/level";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartFluidTankBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/fluid";
import { $IMultiBlockEntityContainer$Fluid, $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Map, $List_ } from "@package/java/util";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $SmartInventory } from "@package/com/simibubi/create/foundation/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $Enum, $Object } from "@package/java/lang";
import { $VatMachineRecipe } from "@package/com/drmangotea/tfmg/recipes";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/com/drmangotea/tfmg/content/machinery/vat/base" {
    export class $VatBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IMultiBlockEntityContainer$Fluid {
        getFluid(arg0: number): $FluidStack;
        getMaxWidth(): number;
        static getMaxHeight(): number;
        getTanks(): $Couple<$SmartFluidTankBehaviour>;
        getTotalTankSize(): number;
        getLastKnownPos(): $BlockPos;
        isController(): boolean;
        getController(): $BlockPos;
        setController(arg0: $BlockPos_): void;
        getControllerBE(): $VatBlockEntity;
        getMatchingRecipe(): $VatMachineRecipe;
        handleRecipe(): void;
        isAtValidLocation(arg0: $IVatMachine$PositionRequirement_, arg1: $BlockPos_): boolean;
        isAtCenter(arg0: $BlockPos_): boolean;
        applyVatSize(arg0: number): void;
        addMachineTooltip(arg0: string, arg1: boolean, arg2: $List_<$Component_>): void;
        static getCapacityMultiplier(): number;
        sendDataImmediately(): void;
        getFillState(): number;
        toggleWindows(): void;
        removeController(arg0: boolean): void;
        setWindows(arg0: boolean): void;
        getFluidLevel(): $LerpedFloat[];
        preventConnectivityUpdate(): void;
        notifyMultiUpdated(): void;
        setExtraData(arg0: $Object | null): void;
        getExtraData(): $Object;
        modifyExtraData(arg0: $Object): $Object;
        getMainConnectionAxis(): $Direction$Axis;
        hasTank(): boolean;
        getTankSize(arg0: number): number;
        setTankSize(arg0: number, arg1: number): void;
        getTank(arg0: number): $IFluidTank;
        updateTemperature(): void;
        getTotalFluidUnits(arg0: number): number;
        getOtherVatBE(arg0: $Direction_): $VatBlockEntity;
        updateState(): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getTotalCapacity(): number;
        evaluate(): void;
        getMaxLength(arg0: $Direction$Axis_, arg1: number): number;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getWidth(): number;
        getHeight(): number;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        areMachinesValid: boolean;
        level: $Level;
        fluidLevel: $LerpedFloat[];
        recipe: $VatMachineRecipe;
        outputTank: $SmartFluidTankBehaviour;
        static ATTACHMENTS_NBT_KEY: string;
        inputTank: $SmartFluidTankBehaviour;
        machineMap: $Map<$BlockPos, string>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        outputInventory: $VatInventory;
        inputInventory: $VatInventory;
        operationalMachinesMap: $Map<$BlockPos, boolean>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get maxWidth(): number;
        static get maxHeight(): number;
        get tanks(): $Couple<$SmartFluidTankBehaviour>;
        get totalTankSize(): number;
        get lastKnownPos(): $BlockPos;
        get controllerBE(): $VatBlockEntity;
        get matchingRecipe(): $VatMachineRecipe;
        static get capacityMultiplier(): number;
        get fillState(): number;
        set windows(value: boolean);
        get mainConnectionAxis(): $Direction$Axis;
        get totalCapacity(): number;
    }
    export class $IVatMachine$PositionRequirement extends $Enum<$IVatMachine$PositionRequirement> {
        static values(): $IVatMachine$PositionRequirement[];
        static valueOf(arg0: string): $IVatMachine$PositionRequirement;
        static BOTTOM_CENTER: $IVatMachine$PositionRequirement;
        static TOP: $IVatMachine$PositionRequirement;
        static TOP_CENTER: $IVatMachine$PositionRequirement;
        static ANY_CENTER: $IVatMachine$PositionRequirement;
        static BOTTOM: $IVatMachine$PositionRequirement;
        static ANY: $IVatMachine$PositionRequirement;
    }
    /**
     * Values that may be interpreted as {@link $IVatMachine$PositionRequirement}.
     */
    export type $IVatMachine$PositionRequirement_ = "any" | "bottom" | "top" | "any_center" | "bottom_center" | "top_center";
    export class $VatInventory extends $SmartInventory {
        kjs$self(): $IItemHandler;
        constructor(arg0: number, arg1: $VatBlockEntity);
    }
}
