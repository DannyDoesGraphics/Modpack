import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $List_ } from "@package/java/util";
import { $FluidStack } from "@package/dev/architectury/fluid";
import { $Tuple } from "@package/net/minecraft/util";
import { $FluidApi$SingleSlotStorage, $FluidApi$MultiSlotStorage, $FluidApi$FluidStorage } from "@package/rearth/oritech/api/fluid";
import { $Supplier_, $BooleanSupplier_, $Consumer_, $Consumer } from "@package/java/util/function";
import { $SyncType_, $UpdatableField } from "@package/rearth/oritech/api/networking";
import { $DataComponentPatch, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Runnable_ } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/rearth/oritech/api/fluid/containers" {
    export class $SimpleInOutFluidStorage extends $FluidApi$MultiSlotStorage implements $UpdatableField<void, $Tuple<$FluidStack, $FluidStack>> {
        useDeltaOnly(arg0: $SyncType_): boolean;
        getDeltaData(): $Tuple<$FluidStack, $FluidStack>;
        getDeltaCodec(): $StreamCodec<$ByteBuf, $Tuple<$FluidStack, $FluidStack>>;
        getFullCodec(): $StreamCodec<$ByteBuf, void>;
        handleDeltaUpdate(arg0: $Tuple<$FluidStack, $FluidStack>): void;
        handleFullUpdate(arg0: void): void;
        getFullData(): void;
        getInputContainer(): $FluidApi$SingleSlotStorage;
        getOutputContainer(): $FluidApi$SingleSlotStorage;
        static insertTo(arg0: $FluidStack, arg1: boolean, arg2: number, arg3: $FluidStack, arg4: $Consumer_<$FluidStack>): number;
        static extractFrom(arg0: $FluidStack, arg1: boolean, arg2: $FluidStack): number;
        getInStack(): $FluidStack;
        getOutStack(): $FluidStack;
        readNbt(arg0: $CompoundTag_, arg1: string): void;
        writeNbt(arg0: $CompoundTag_, arg1: string): void;
        constructor(arg0: number, arg1: $Runnable_);
        get deltaData(): $Tuple<$FluidStack, $FluidStack>;
        get deltaCodec(): $StreamCodec<$ByteBuf, $Tuple<$FluidStack, $FluidStack>>;
        get fullCodec(): $StreamCodec<$ByteBuf, void>;
        get fullData(): void;
        get inputContainer(): $FluidApi$SingleSlotStorage;
        get outputContainer(): $FluidApi$SingleSlotStorage;
        get inStack(): $FluidStack;
        get outStack(): $FluidStack;
    }
    export class $SimpleItemFluidStorage extends $SimpleFluidStorage {
        withCallback(arg0: $Consumer_<$ItemStack>): $SimpleItemFluidStorage;
        contextCallback: $Consumer<$ItemStack>;
        constructor(arg0: number, arg1: $ItemStack_);
    }
    export class $SimpleFluidStorage extends $FluidApi$SingleSlotStorage implements $UpdatableField<void, $FluidStack> {
        getFluid(): $Fluid;
        setAmount(arg0: number): void;
        useDeltaOnly(arg0: $SyncType_): boolean;
        getDeltaData(): $FluidStack;
        getDeltaCodec(): $StreamCodec<$ByteBuf, $FluidStack>;
        getFullCodec(): $StreamCodec<$ByteBuf, void>;
        handleDeltaUpdate(arg0: $FluidStack): void;
        handleFullUpdate(arg0: void): void;
        getChanges(): $DataComponentPatch;
        getEmptyVariant(): $Fluid;
        setChanges(arg0: $DataComponentPatch_): void;
        setFluid(arg0: $Fluid_): void;
        static transfer(arg0: $SimpleFluidStorage, arg1: $SimpleFluidStorage, arg2: number, arg3: boolean): number;
        readNbt(arg0: $CompoundTag_, arg1: string): void;
        writeNbt(arg0: $CompoundTag_, arg1: string): void;
        getAmount(): number;
        getFullData(): void;
        constructor(arg0: number, arg1: $Runnable_);
        constructor(arg0: number);
        get deltaData(): $FluidStack;
        get deltaCodec(): $StreamCodec<$ByteBuf, $FluidStack>;
        get fullCodec(): $StreamCodec<$ByteBuf, void>;
        get emptyVariant(): $Fluid;
        get fullData(): void;
    }
    export class $DelegatingFluidStorage extends $FluidApi$FluidStorage {
        getBackend(): $FluidApi$FluidStorage;
        setContent(arg0: $List_<$FluidStack>): void;
        constructor(arg0: $FluidApi$FluidStorage, arg1: $BooleanSupplier_);
        constructor(arg0: $Supplier_<$FluidApi$FluidStorage>, arg1: $BooleanSupplier_);
        get backend(): $FluidApi$FluidStorage;
        set content(value: $List_<$FluidStack>);
    }
}
