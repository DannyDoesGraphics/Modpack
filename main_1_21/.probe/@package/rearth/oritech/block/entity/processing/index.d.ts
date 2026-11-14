import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SerializableDataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $List, $List_, $ArrayList } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $AnimatableManager$ControllerRegistrar_, $RawAnimation } from "@package/software/bernie/geckolib/animation";
import { $DynamicEnergyStorage } from "@package/rearth/oritech/api/energy/containers";
import { $BlockPos, $BlockPos_, $Direction_, $RegistryAccess, $Vec3i, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $OritechRecipe } from "@package/rearth/oritech/init/recipes";
import { $ItemApi$InventoryStorage } from "@package/rearth/oritech/api/item";
import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $UpgradableMachineBlockEntity, $MachineBlockEntity$FilteringInventory, $MultiblockMachineEntity } from "@package/rearth/oritech/block/base/entity";
import { $Record, $Object } from "@package/java/lang";
import { $EnchantmentCatalystBlockEntity } from "@package/rearth/oritech/block/entity/arcane";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $MultiblockMachineController, $ColorableMachine$ColorVariant, $ColorableMachine$ColorVariant_, $ColorableMachine } from "@package/rearth/oritech/util";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SimpleInOutFluidStorage, $SimpleFluidStorage } from "@package/rearth/oritech/api/fluid/containers";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EnergyApi$EnergyStorage } from "@package/rearth/oritech/api/energy";
import { $GeoBlockEntity } from "@package/software/bernie/geckolib/animatable";
import { $FluidStack } from "@package/dev/architectury/fluid";
import { $FluidApi$BlockProvider, $FluidApi$FluidStorage, $FluidApi$SingleSlotStorage } from "@package/rearth/oritech/api/fluid";
import { $NetworkedBlockEntity } from "@package/rearth/oritech/api/networking";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/rearth/oritech/block/entity/processing" {
    export class $RefineryBlockEntity extends $MultiblockMachineEntity implements $FluidApi$BlockProvider {
        getNearbyNonEmptyCatalyst(): ($EnchantmentCatalystBlockEntity) | undefined;
        taintTransform(): void;
        getFluidStorageForModule(arg0: $BlockPos_): $FluidApi$FluidStorage;
        getOutputStorage(arg0: number): $FluidApi$SingleSlotStorage;
        getFluidStorage(arg0: $Direction_): $FluidApi$FluidStorage;
        getModuleCount(): number;
        nodeB: $SimpleFluidStorage;
        static WORKING: $RawAnimation;
        ownStorage: $SimpleInOutFluidStorage;
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
        static PACKAGED: $RawAnimation;
        progress: number;
        nodeA: $SimpleFluidStorage;
        remainingBurstTicks: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get nearbyNonEmptyCatalyst(): ($EnchantmentCatalystBlockEntity) | undefined;
        get moduleCount(): number;
    }
    export class $CoolerBlockEntity extends $MultiblockMachineEntity implements $FluidApi$BlockProvider {
        getFluidStorage(arg0: $Direction_): $FluidApi$FluidStorage;
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
        static PACKAGED: $RawAnimation;
        progress: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $TaintedRefineryBlockEntity extends $MultiblockMachineEntity implements $FluidApi$BlockProvider {
        static handleTankPacket(arg0: $TaintedRefineryBlockEntity$RefineryTankSelectorPacket_, arg1: $Player, arg2: $RegistryAccess): void;
        getFluidStorage(arg0: $Direction_): $FluidApi$FluidStorage;
        getOutputMultiplier(): number;
        getArcaneEnergyMultiplier(): number;
        getEnergyInputMapped(arg0: number): number;
        getEnergyFactor(arg0: number): number;
        afterCreation(): void;
        static WORKING: $RawAnimation;
        ownStorage: $SimpleInOutFluidStorage;
        level: $Level;
        energyStorage: $DynamicEnergyStorage;
        static ATTACHMENTS_NBT_KEY: string;
        lastTickRFUsed: number;
        currentColor: $ColorableMachine$ColorVariant;
        inventory: $MachineBlockEntity$FilteringInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        sculkFactor: $TaintedRefineryBlockEntity$EnvironmentFactor;
        static SETUP: $RawAnimation;
        static IDLE: $RawAnimation;
        lastWorkedAt: number;
        selectedOutput: number;
        static PACKAGED: $RawAnimation;
        progress: number;
        arcaneFactor: $TaintedRefineryBlockEntity$EnvironmentFactor;
        remainingBurstTicks: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get outputMultiplier(): number;
        get arcaneEnergyMultiplier(): number;
    }
    export class $TaintedRefineryBlockEntity$RefineryTankSelectorPacket extends $Record implements $CustomPacketPayload {
        slot(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        position(): $BlockPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$TaintedRefineryBlockEntity$RefineryTankSelectorPacket>;
        constructor(position: $BlockPos_, slot: number);
    }
    /**
     * Values that may be interpreted as {@link $TaintedRefineryBlockEntity$RefineryTankSelectorPacket}.
     */
    export type $TaintedRefineryBlockEntity$RefineryTankSelectorPacket_ = { slot?: number, position?: $BlockPos_,  } | [slot?: number, position?: $BlockPos_, ];
    export class $FoundryBlockEntity extends $MultiblockMachineEntity {
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
        static PACKAGED: $RawAnimation;
        progress: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $FragmentForgeBlockEntity extends $MultiblockMachineEntity {
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
        static PACKAGED: $RawAnimation;
        progress: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $PulverizerBlockEntity extends $UpgradableMachineBlockEntity {
        static combineSmallDusts(arg0: $List_<$ItemStack_>, arg1: $Level_): void;
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
        static PACKAGED: $RawAnimation;
        progress: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $TaintedRefineryBlockEntity$EnvironmentFactor extends $Record {
        static fromNbt(arg0: $CompoundTag_, arg1: string): $TaintedRefineryBlockEntity$EnvironmentFactor;
        static toNbt(arg0: $CompoundTag_, arg1: string, arg2: $TaintedRefineryBlockEntity$EnvironmentFactor_): void;
        result(): number;
        variants(): number;
        sources(): $List<$BlockPos>;
        static CODEC: $Codec<$TaintedRefineryBlockEntity$EnvironmentFactor>;
        static DEFAULT: $TaintedRefineryBlockEntity$EnvironmentFactor;
        constructor(result: number, variants: number, sources: $List_<$BlockPos_>);
    }
    /**
     * Values that may be interpreted as {@link $TaintedRefineryBlockEntity$EnvironmentFactor}.
     */
    export type $TaintedRefineryBlockEntity$EnvironmentFactor_ = { result?: number, sources?: $List_<$BlockPos_>, variants?: number,  } | [result?: number, sources?: $List_<$BlockPos_>, variants?: number, ];
    export class $RefineryModuleBlockEntity extends $NetworkedBlockEntity implements $MultiblockMachineController, $FluidApi$BlockProvider, $GeoBlockEntity, $ColorableMachine {
        setOwningRefinery(arg0: $RefineryBlockEntity): void;
        getFluidStorage(arg0: $Direction_): $FluidApi$FluidStorage;
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
        getCurrentColor(): $ColorableMachine$ColorVariant;
        assignColor(arg0: $ColorableMachine$ColorVariant_): void;
        getDefaultColor(): $ColorableMachine$ColorVariant;
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
        addColorToNbt(arg0: $CompoundTag_): void;
        loadColorFromNbt(arg0: $CompoundTag_): void;
        supportRecoloring(): boolean;
        getBoneResetTime(): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        animatableCacheOverride(): $AnimatableInstanceCache;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        currentColor: $ColorableMachine$ColorVariant;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set owningRefinery(value: $RefineryBlockEntity);
        get connectedCores(): $ArrayList<$BlockPos>;
        get facingForMultiblock(): $Direction;
        get posForMultiblock(): $BlockPos;
        get worldForMultiblock(): $Level;
        get inventoryForMultiblock(): $ItemApi$InventoryStorage;
        get corePositions(): $List<$Vec3i>;
        get defaultColor(): $ColorableMachine$ColorVariant;
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get nextMissingCore(): $BlockPos;
        get boneResetTime(): number;
    }
    export class $AtomicForgeBlockEntity extends $MultiblockMachineEntity {
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
        static PACKAGED: $RawAnimation;
        progress: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $CentrifugeBlockEntity extends $MultiblockMachineEntity implements $FluidApi$BlockProvider {
        getFluidStorage(arg0: $Direction_): $FluidApi$FluidStorage;
        static recipeInputMatchesTank(arg0: $FluidStack, arg1: $OritechRecipe): boolean;
        static WORKING: $RawAnimation;
        level: $Level;
        energyStorage: $DynamicEnergyStorage;
        hasFluidAddon: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        currentColor: $ColorableMachine$ColorVariant;
        inventory: $MachineBlockEntity$FilteringInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static SETUP: $RawAnimation;
        fluidContainer: $SimpleInOutFluidStorage;
        static IDLE: $RawAnimation;
        lastWorkedAt: number;
        static PACKAGED: $RawAnimation;
        progress: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $AssemblerBlockEntity extends $MultiblockMachineEntity {
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
        static PACKAGED: $RawAnimation;
        progress: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $PoweredFurnaceBlockEntity extends $MultiblockMachineEntity {
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
        static PACKAGED: $RawAnimation;
        progress: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
}
