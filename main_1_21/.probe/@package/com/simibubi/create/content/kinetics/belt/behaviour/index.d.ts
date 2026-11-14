import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $Supplier_, $Function_, $Function } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Enum } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";

declare module "@package/com/simibubi/create/content/kinetics/belt/behaviour" {
    export class $TransportedItemStackHandlerBehaviour$ProcessingCallback {
    }
    export interface $TransportedItemStackHandlerBehaviour$ProcessingCallback {
        applyToAllItems(arg0: number, arg1: $Function_<$TransportedItemStack, $TransportedItemStackHandlerBehaviour$TransportedResult>): void;
    }
    /**
     * Values that may be interpreted as {@link $TransportedItemStackHandlerBehaviour$ProcessingCallback}.
     */
    export type $TransportedItemStackHandlerBehaviour$ProcessingCallback_ = ((arg0: number, arg1: $Function<$TransportedItemStack, $TransportedItemStackHandlerBehaviour$TransportedResult>) => void);
    export class $TransportedItemStackHandlerBehaviour extends $BlockEntityBehaviour {
        getWorldPositionOf(arg0: $TransportedItemStack): $Vec3;
        withStackPlacement(arg0: $TransportedItemStackHandlerBehaviour$PositionGetter_): $TransportedItemStackHandlerBehaviour;
        handleProcessingOnAllItems(arg0: $Function_<$TransportedItemStack, $TransportedItemStackHandlerBehaviour$TransportedResult>): void;
        handleCenteredProcessingOnAllItems(arg0: number, arg1: $Function_<$TransportedItemStack, $TransportedItemStackHandlerBehaviour$TransportedResult>): void;
        handleProcessingOnItem(arg0: $TransportedItemStack, arg1: $TransportedItemStackHandlerBehaviour$TransportedResult): void;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$TransportedItemStackHandlerBehaviour>;
        constructor(arg0: $SmartBlockEntity, arg1: $TransportedItemStackHandlerBehaviour$ProcessingCallback_);
    }
    export class $TransportedItemStackHandlerBehaviour$TransportedResult {
        static doNothing(): $TransportedItemStackHandlerBehaviour$TransportedResult;
        doesNothing(): boolean;
        hasHeldOutput(): boolean;
        static convertToAndLeaveHeld(arg0: $List_<$TransportedItemStack>, arg1: $TransportedItemStack): $TransportedItemStackHandlerBehaviour$TransportedResult;
        didntChangeFrom(arg0: $ItemStack_): boolean;
        getHeldOutput(): $TransportedItemStack;
        static removeItem(): $TransportedItemStackHandlerBehaviour$TransportedResult;
        getOutputs(): $List<$TransportedItemStack>;
        static convertTo(arg0: $TransportedItemStack): $TransportedItemStackHandlerBehaviour$TransportedResult;
        static convertTo(arg0: $List_<$TransportedItemStack>): $TransportedItemStackHandlerBehaviour$TransportedResult;
        get heldOutput(): $TransportedItemStack;
        get outputs(): $List<$TransportedItemStack>;
    }
    export class $BeltProcessingBehaviour$ProcessingCallback {
    }
    export interface $BeltProcessingBehaviour$ProcessingCallback {
        apply(arg0: $TransportedItemStack, arg1: $TransportedItemStackHandlerBehaviour): $BeltProcessingBehaviour$ProcessingResult;
    }
    /**
     * Values that may be interpreted as {@link $BeltProcessingBehaviour$ProcessingCallback}.
     */
    export type $BeltProcessingBehaviour$ProcessingCallback_ = ((arg0: $TransportedItemStack, arg1: $TransportedItemStackHandlerBehaviour) => $BeltProcessingBehaviour$ProcessingResult_);
    export class $DirectBeltInputBehaviour$AvailabilityPredicate {
    }
    export interface $DirectBeltInputBehaviour$AvailabilityPredicate {
        test(arg0: $Direction_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DirectBeltInputBehaviour$AvailabilityPredicate}.
     */
    export type $DirectBeltInputBehaviour$AvailabilityPredicate_ = ((arg0: $Direction) => boolean);
    export class $BeltProcessingBehaviour$ProcessingResult extends $Enum<$BeltProcessingBehaviour$ProcessingResult> {
        static values(): $BeltProcessingBehaviour$ProcessingResult[];
        static valueOf(arg0: string): $BeltProcessingBehaviour$ProcessingResult;
        static PASS: $BeltProcessingBehaviour$ProcessingResult;
        static REMOVE: $BeltProcessingBehaviour$ProcessingResult;
        static HOLD: $BeltProcessingBehaviour$ProcessingResult;
    }
    /**
     * Values that may be interpreted as {@link $BeltProcessingBehaviour$ProcessingResult}.
     */
    export type $BeltProcessingBehaviour$ProcessingResult_ = "pass" | "hold" | "remove";
    export class $BeltProcessingBehaviour extends $BlockEntityBehaviour {
        handleReceivedItem(arg0: $TransportedItemStack, arg1: $TransportedItemStackHandlerBehaviour): $BeltProcessingBehaviour$ProcessingResult;
        handleHeldItem(arg0: $TransportedItemStack, arg1: $TransportedItemStackHandlerBehaviour): $BeltProcessingBehaviour$ProcessingResult;
        whenItemEnters(arg0: $BeltProcessingBehaviour$ProcessingCallback_): $BeltProcessingBehaviour;
        whileItemHeld(arg0: $BeltProcessingBehaviour$ProcessingCallback_): $BeltProcessingBehaviour;
        static isBlocked(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$BeltProcessingBehaviour>;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $DirectBeltInputBehaviour extends $BlockEntityBehaviour {
        canSupportBeltFunnels(): boolean;
        onlyInsertWhen(arg0: $DirectBeltInputBehaviour$AvailabilityPredicate_): $DirectBeltInputBehaviour;
        setInsertionHandler(arg0: $DirectBeltInputBehaviour$InsertionCallback_): $DirectBeltInputBehaviour;
        isOccupied(arg0: $Direction_): boolean;
        considerOccupiedWhen(arg0: $DirectBeltInputBehaviour$OccupiedPredicate_): $DirectBeltInputBehaviour;
        canInsertFromSide(arg0: $Direction_): boolean;
        handleInsertion(arg0: $TransportedItemStack, arg1: $Direction_, arg2: boolean): $ItemStack;
        handleInsertion(arg0: $ItemStack_, arg1: $Direction_, arg2: boolean): $ItemStack;
        allowingBeltFunnels(): $DirectBeltInputBehaviour;
        tryExportingToBeltFunnel(arg0: $ItemStack_, arg1: $Direction_, arg2: boolean): $ItemStack;
        allowingBeltFunnelsWhen(arg0: $Supplier_<boolean>): $DirectBeltInputBehaviour;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$DirectBeltInputBehaviour>;
        constructor(arg0: $SmartBlockEntity);
        set insertionHandler(value: $DirectBeltInputBehaviour$InsertionCallback_);
    }
    export class $TransportedItemStackHandlerBehaviour$PositionGetter {
    }
    export interface $TransportedItemStackHandlerBehaviour$PositionGetter {
        getWorldPositionVector(arg0: $TransportedItemStack): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $TransportedItemStackHandlerBehaviour$PositionGetter}.
     */
    export type $TransportedItemStackHandlerBehaviour$PositionGetter_ = ((arg0: $TransportedItemStack) => $Vec3_);
    export class $DirectBeltInputBehaviour$InsertionCallback {
    }
    export interface $DirectBeltInputBehaviour$InsertionCallback {
        apply(arg0: $TransportedItemStack, arg1: $Direction_, arg2: boolean): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $DirectBeltInputBehaviour$InsertionCallback}.
     */
    export type $DirectBeltInputBehaviour$InsertionCallback_ = ((arg0: $TransportedItemStack, arg1: $Direction, arg2: boolean) => $ItemStack_);
    export class $DirectBeltInputBehaviour$OccupiedPredicate {
    }
    export interface $DirectBeltInputBehaviour$OccupiedPredicate {
        test(arg0: $Direction_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DirectBeltInputBehaviour$OccupiedPredicate}.
     */
    export type $DirectBeltInputBehaviour$OccupiedPredicate_ = ((arg0: $Direction) => boolean);
}
