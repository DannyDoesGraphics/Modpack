import { $Level } from "@package/net/minecraft/world/level";
import { $MultiblockMachineController, $ColorableMachine$ColorVariant } from "@package/rearth/oritech/util";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $SerializableDataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $SimpleInOutFluidStorage, $SimpleFluidStorage } from "@package/rearth/oritech/api/fluid/containers";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EnergyApi$EnergyStorage } from "@package/rearth/oritech/api/energy";
import { $ArrayList, $List } from "@package/java/util";
import { $GeoBlockEntity } from "@package/software/bernie/geckolib/animatable";
import { $AnimatableManager$ControllerRegistrar_, $RawAnimation } from "@package/software/bernie/geckolib/animation";
import { $FluidApi$FluidStorage, $FluidApi$BlockProvider } from "@package/rearth/oritech/api/fluid";
import { $DynamicEnergyStorage } from "@package/rearth/oritech/api/energy/containers";
import { $BlockPos, $BlockPos_, $Direction_, $Vec3i, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ItemApi$InventoryStorage } from "@package/rearth/oritech/api/item";
import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $MultiblockGeneratorBlockEntity, $PassiveGeneratorBlockEntity, $MachineBlockEntity$FilteringInventory, $FluidMultiblockGeneratorBlockEntity, $UpgradableGeneratorBlockEntity } from "@package/rearth/oritech/block/base/entity";
import { $Record, $Object } from "@package/java/lang";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/rearth/oritech/block/entity/generators" {
    export class $SteamEngineEntity$SteamEngineSyncPacket extends $Record {
        slaves(): number;
        energyProduced(): number;
        steamConsumed(): number;
        position(): $BlockPos;
        speed(): number;
        efficiency(): number;
        constructor(position: $BlockPos_, speed: number, efficiency: number, energyProduced: number, steamConsumed: number, slaves: number);
    }
    /**
     * Values that may be interpreted as {@link $SteamEngineEntity$SteamEngineSyncPacket}.
     */
    export type $SteamEngineEntity$SteamEngineSyncPacket_ = { position?: $BlockPos_, efficiency?: number, slaves?: number, speed?: number, energyProduced?: number, steamConsumed?: number,  } | [position?: $BlockPos_, efficiency?: number, slaves?: number, speed?: number, energyProduced?: number, steamConsumed?: number, ];
    export class $LavaGeneratorEntity extends $FluidMultiblockGeneratorBlockEntity {
        static WORKING: $RawAnimation;
        level: $Level;
        energyStorage: $DynamicEnergyStorage;
        static ATTACHMENTS_NBT_KEY: string;
        currentColor: $ColorableMachine$ColorVariant;
        inventory: $MachineBlockEntity$FilteringInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static SETUP: $RawAnimation;
        fluidStorage: $SimpleFluidStorage;
        static IDLE: $RawAnimation;
        lastWorkedAt: number;
        boilerStorage: $SimpleInOutFluidStorage;
        isProducingSteam: boolean;
        static PACKAGED: $RawAnimation;
        progress: number;
        currentMaxBurnTime: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $FuelGeneratorEntity extends $FluidMultiblockGeneratorBlockEntity {
        static WORKING: $RawAnimation;
        level: $Level;
        energyStorage: $DynamicEnergyStorage;
        static ATTACHMENTS_NBT_KEY: string;
        currentColor: $ColorableMachine$ColorVariant;
        inventory: $MachineBlockEntity$FilteringInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static SETUP: $RawAnimation;
        fluidStorage: $SimpleFluidStorage;
        static IDLE: $RawAnimation;
        lastWorkedAt: number;
        boilerStorage: $SimpleInOutFluidStorage;
        isProducingSteam: boolean;
        static PACKAGED: $RawAnimation;
        progress: number;
        currentMaxBurnTime: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BasicGeneratorEntity extends $UpgradableGeneratorBlockEntity {
        static WORKING: $RawAnimation;
        level: $Level;
        energyStorage: $DynamicEnergyStorage;
        static ATTACHMENTS_NBT_KEY: string;
        currentColor: $ColorableMachine$ColorVariant;
        inventory: $MachineBlockEntity$FilteringInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static SETUP: $RawAnimation;
        static IDLE: $RawAnimation;
        lastWorkedAt: number;
        boilerStorage: $SimpleInOutFluidStorage;
        isProducingSteam: boolean;
        static PACKAGED: $RawAnimation;
        progress: number;
        currentMaxBurnTime: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BigSolarPanelEntity extends $PassiveGeneratorBlockEntity implements $MultiblockMachineController, $GeoBlockEntity {
        sendInfoMessageToPlayer(arg0: $Player): void;
        getAdjustedTimeOfDay(): number;
        getTimeOffset(): number;
        getConnectedCores(): $ArrayList<$BlockPos>;
        getFacingForMultiblock(): $Direction;
        getPosForMultiblock(): $BlockPos;
        getWorldForMultiblock(): $Level;
        getCoreQuality(): number;
        setCoreQuality(arg0: number): void;
        getInventoryForMultiblock(): $ItemApi$InventoryStorage;
        getEnergyStorageForMultiblock(arg0: $Direction_): $EnergyApi$EnergyStorage;
        getCorePositions(): $List<$Vec3i>;
        triggerSetupAnimation(): void;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        isActive(arg0: $BlockState_): boolean;
        addMultiblockToNbt(arg0: $CompoundTag_): void;
        loadMultiblockNbtData(arg0: $CompoundTag_): void;
        getNextMissingCore(): $BlockPos;
        tryPlaceNextCore(arg0: $Player): boolean;
        initMultiblock(arg0: $BlockState_): boolean;
        onCoreBroken(arg0: $BlockPos_): void;
        onControllerBroken(): void;
        getTick(arg0: $Object): number;
        getAnimData<D>(arg0: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $SerializableDataTicket<D>, arg1: D): void;
        triggerAnim(arg0: string, arg1: string): void;
        stopTriggeredAnim(arg0: string, arg1: string): void;
        getBoneResetTime(): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        animatableCacheOverride(): $AnimatableInstanceCache;
        static FOLD: $RawAnimation;
        static UNFOLD: $RawAnimation;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get adjustedTimeOfDay(): number;
        get timeOffset(): number;
        get connectedCores(): $ArrayList<$BlockPos>;
        get facingForMultiblock(): $Direction;
        get posForMultiblock(): $BlockPos;
        get worldForMultiblock(): $Level;
        get inventoryForMultiblock(): $ItemApi$InventoryStorage;
        get corePositions(): $List<$Vec3i>;
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get nextMissingCore(): $BlockPos;
        get boneResetTime(): number;
    }
    export class $BioGeneratorEntity extends $MultiblockGeneratorBlockEntity {
        static WORKING: $RawAnimation;
        level: $Level;
        energyStorage: $DynamicEnergyStorage;
        static ATTACHMENTS_NBT_KEY: string;
        currentColor: $ColorableMachine$ColorVariant;
        inventory: $MachineBlockEntity$FilteringInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static SETUP: $RawAnimation;
        static IDLE: $RawAnimation;
        lastWorkedAt: number;
        boilerStorage: $SimpleInOutFluidStorage;
        isProducingSteam: boolean;
        static PACKAGED: $RawAnimation;
        progress: number;
        currentMaxBurnTime: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $SteamEngineEntity extends $MultiblockGeneratorBlockEntity implements $FluidApi$BlockProvider {
        inSlaveMode(): boolean;
        static getUsedSteamFluid(): $Fluid;
        getFluidStorage(arg0: $Direction_): $FluidApi$FluidStorage;
        static WORKING: $RawAnimation;
        level: $Level;
        energyStorage: $DynamicEnergyStorage;
        clientStats: $SteamEngineEntity$SteamEngineSyncPacket;
        static ATTACHMENTS_NBT_KEY: string;
        currentColor: $ColorableMachine$ColorVariant;
        inventory: $MachineBlockEntity$FilteringInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        master: $SteamEngineEntity;
        static SETUP: $RawAnimation;
        masterHeartbeat: number;
        static STEAM_AMOUNT_MULTIPLIER: number;
        static IDLE: $RawAnimation;
        lastWorkedAt: number;
        boilerStorage: $SimpleInOutFluidStorage;
        isProducingSteam: boolean;
        static PACKAGED: $RawAnimation;
        progress: number;
        currentMaxBurnTime: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        static get usedSteamFluid(): $Fluid;
    }
}
