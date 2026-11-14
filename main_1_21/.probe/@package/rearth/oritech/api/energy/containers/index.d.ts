import { $Supplier_, $BooleanSupplier_, $Consumer_, $Consumer } from "@package/java/util/function";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SyncType_, $UpdatableField } from "@package/rearth/oritech/api/networking";
import { $EnergyApi$EnergyStorage } from "@package/rearth/oritech/api/energy";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Runnable_, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/rearth/oritech/api/energy/containers" {
    export class $SimpleEnergyStorage extends $EnergyApi$EnergyStorage implements $UpdatableField<void, number> {
        useDeltaOnly(arg0: $SyncType_): boolean;
        getDeltaData(): number;
        getDeltaCodec(): $StreamCodec<$ByteBuf, number>;
        getFullCodec(): $StreamCodec<$ByteBuf, void>;
        handleDeltaUpdate(arg0: number): void;
        handleFullUpdate(arg0: void): void;
        insertIgnoringLimit(arg0: number, arg1: boolean): number;
        extractIgnoringLimit(arg0: number, arg1: boolean): number;
        getFullData(): void;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Runnable_);
        get deltaData(): number;
        get deltaCodec(): $StreamCodec<$ByteBuf, number>;
        get fullCodec(): $StreamCodec<$ByteBuf, void>;
        get fullData(): void;
    }
    export class $DynamicStatisticEnergyStorage$EnergyStatistics extends $Record {
        avgInsertSecond(): number;
        insertionCountLastTick(): number;
        maxInsertSecond(): number;
        avgExtractSecond(): number;
        maxExtractSecond(): number;
        insertedLastTickTotal(): number;
        extractedLastTickTotal(): number;
        static EMPTY: $DynamicStatisticEnergyStorage$EnergyStatistics;
        constructor(avgInsertSecond: number, avgExtractSecond: number, insertedLastTickTotal: number, extractedLastTickTotal: number, insertionCountLastTick: number, maxInsertSecond: number, maxExtractSecond: number);
    }
    /**
     * Values that may be interpreted as {@link $DynamicStatisticEnergyStorage$EnergyStatistics}.
     */
    export type $DynamicStatisticEnergyStorage$EnergyStatistics_ = { maxExtractSecond?: number, insertionCountLastTick?: number, extractedLastTickTotal?: number, maxInsertSecond?: number, avgExtractSecond?: number, avgInsertSecond?: number, insertedLastTickTotal?: number,  } | [maxExtractSecond?: number, insertionCountLastTick?: number, extractedLastTickTotal?: number, maxInsertSecond?: number, avgExtractSecond?: number, avgInsertSecond?: number, insertedLastTickTotal?: number, ];
    export class $DynamicStatisticEnergyStorage extends $DynamicEnergyStorage {
        getCurrentStatistics(arg0: number): $DynamicStatisticEnergyStorage$EnergyStatistics;
        tick(arg0: number): void;
        amount: number;
        maxExtract: number;
        static PACKET_CODEC: $StreamCodec<$ByteBuf, $DynamicEnergyStorage>;
        maxInsert: number;
        capacity: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Runnable_);
    }
    export class $SimpleEnergyItemStorage extends $SimpleEnergyStorage {
        withCallback(arg0: $Consumer_<$ItemStack>): $SimpleEnergyItemStorage;
        contextCallback: $Consumer<$ItemStack>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $ItemStack_);
    }
    export class $DelegatingEnergyStorage extends $EnergyApi$EnergyStorage {
        constructor(arg0: $Supplier_<$EnergyApi$EnergyStorage>, arg1: $BooleanSupplier_);
        constructor(arg0: $EnergyApi$EnergyStorage, arg1: $BooleanSupplier_);
    }
    export class $DynamicEnergyStorage extends $EnergyApi$EnergyStorage implements $UpdatableField<$DynamicEnergyStorage, number> {
        useDeltaOnly(arg0: $SyncType_): boolean;
        getDeltaCodec(): $StreamCodec<$ByteBuf, number>;
        getFullCodec(): $StreamCodec<$ByteBuf, $DynamicEnergyStorage>;
        handleDeltaUpdate(arg0: number): void;
        handleFullUpdate(arg0: $DynamicEnergyStorage): void;
        insertIgnoringLimit(arg0: number, arg1: boolean): number;
        setMaxExtract(arg0: number): void;
        setMaxInsert(arg0: number): void;
        getFullData(): $DynamicEnergyStorage;
        getMaxExtract(): number;
        getMaxInsert(): number;
        setCapacity(arg0: number): void;
        getDeltaData(): number;
        amount: number;
        maxExtract: number;
        static PACKET_CODEC: $StreamCodec<$ByteBuf, $DynamicEnergyStorage>;
        maxInsert: number;
        capacity: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Runnable_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Runnable_, arg4: boolean);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get deltaCodec(): $StreamCodec<$ByteBuf, number>;
        get fullCodec(): $StreamCodec<$ByteBuf, $DynamicEnergyStorage>;
        get fullData(): $DynamicEnergyStorage;
        get deltaData(): number;
    }
}
