import { $FluidApi$SingleSlotStorage } from "@package/rearth/oritech/api/fluid";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ScreenProvider$BarConfiguration, $ScreenProvider$BarConfiguration_, $ScreenProvider } from "@package/rearth/oritech/util";
import { $UIComponent } from "@package/rearth/oritech/api/screen";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EnergyApi$EnergyStorage } from "@package/rearth/oritech/api/energy";
import { $FluidStack } from "@package/dev/architectury/fluid";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/rearth/oritech/api/screen/data" {
    export class $FluidDisplayWidget extends $AbstractDataDisplayWidget {
        constructor(arg0: $DisplayDataSource$FluidDataSource, arg1: $BlockPos_);
        constructor(arg0: $DisplayDataSource$FluidDataSource);
    }
    export class $FluidDisplayWidget$FluidBurstDroplet {
    }
    export class $ProgressDisplayWidget extends $AbstractDataDisplayWidget {
        constructor(arg0: $DisplayDataSource);
    }
    export class $DisplayDataSource {
        static getFluidTooltip(arg0: $FluidStack): $Component;
        static CreateFluid(arg0: $FluidApi$SingleSlotStorage, arg1: $ScreenProvider$BarConfiguration_, arg2: $ScreenProvider): $DisplayDataSource$FluidDataSource;
        static CreateEnergy(arg0: $EnergyApi$EnergyStorage, arg1: $ScreenProvider$BarConfiguration_, arg2: $ScreenProvider): $DisplayDataSource$EnergyDataSource;
        static CreateProgress(arg0: $ScreenProvider, arg1: $BlockEntity): $DisplayDataSource$ProgressDataSource;
        static CreateSoul(arg0: number, arg1: $Supplier_<number>, arg2: $ScreenProvider$BarConfiguration_): $DisplayDataSource$SoulDataSource;
        static getProgressTooltip(arg0: $BlockEntity): $Component;
        static getSoulTooltip(arg0: number, arg1: number): $Component;
        static getEnergyTooltip(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean): $Component;
        amountSupplier(): $Supplier<number>;
        getTooltipSupplier(): $Supplier<$Component>;
        capacity(): number;
        config(): $ScreenProvider$BarConfiguration;
        constructor(arg0: number, arg1: $Supplier_<number>, arg2: $Supplier_<$Component>, arg3: $ScreenProvider$BarConfiguration_);
        get tooltipSupplier(): $Supplier<$Component>;
    }
    export class $AbstractDataDisplayWidget extends $UIComponent {
    }
    export class $DisplayDataSource$ProgressDataSource extends $DisplayDataSource {
    }
    export class $DisplayDataSource$FluidDataSource extends $DisplayDataSource {
        getStorage(): $FluidApi$SingleSlotStorage;
        setTankIndex(arg0: number): void;
        getTankIndex(): number;
        getFluidSupplier(): $Supplier<$FluidStack>;
        get storage(): $FluidApi$SingleSlotStorage;
        get fluidSupplier(): $Supplier<$FluidStack>;
    }
    export class $SoulDisplayWidget extends $AbstractDataDisplayWidget {
        constructor(arg0: $DisplayDataSource);
    }
    export class $DisplayDataSource$EnergyDataSource extends $DisplayDataSource {
    }
    export class $EnergyDisplayWidget extends $AbstractDataDisplayWidget {
        constructor(arg0: $DisplayDataSource$EnergyDataSource);
    }
    export class $DisplayDataSource$SoulDataSource extends $DisplayDataSource {
    }
}
