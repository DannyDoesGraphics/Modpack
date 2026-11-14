import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $PortableFuelInterfaceBlockEntity, $PortableFuelInterfaceBlock } from "@package/com/railwayteam/railways/content/fuel/psi";
import { $FuelTankBlockEntity, $FuelTankMountedStorageType, $FuelTankBlock } from "@package/com/railwayteam/railways/content/fuel/tank";
import { $ParticleType_, $ParticleOptions, $ParticleType } from "@package/net/minecraft/core/particles";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $RegisterParticleProvidersEvent, $RegisterKeyMappingsEvent } from "@package/net/neoforged/neoforge/client/event";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockEntityEntry, $BlockEntry, $RegistryEntry } from "@package/com/tterrag/registrate/util/entry";
import { $MountedFluidStorageType } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $EntityAttributeCreationEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $ICustomParticleData } from "@package/com/simibubi/create/foundation/particle";

declare module "@package/com/railwayteam/railways/registry/neoforge" {
    export class $CRMountedStorageTypesImpl {
        static init(): void;
        static FUEL_TANK: $RegistryEntry<$MountedFluidStorageType<never>, $FuelTankMountedStorageType>;
        constructor();
    }
    export class $CRParticleTypesParticleEntryImpl {
        static register(arg0: $IEventBus): void;
        static register(arg0: string, arg1: $Supplier_<$ParticleType<never>>): void;
        static registerFactory<T extends $ParticleOptions>(arg0: $ParticleType_<T>, arg1: $RegisterParticleProvidersEvent, arg2: $ICustomParticleData<T>): void;
        constructor();
    }
    export class $CRKeysImpl {
        static onRegisterKeyMappings(arg0: $RegisterKeyMappingsEvent): void;
        static getBoundCode(arg0: $KeyMapping): number;
        static registerKeyBinding(arg0: $KeyMapping): void;
        constructor();
    }
    export class $CRBlocksImpl {
        static init(): void;
        static PORTABLE_FUEL_INTERFACE: $BlockEntry<$PortableFuelInterfaceBlock>;
        static FUEL_TANK: $BlockEntry<$FuelTankBlock>;
        constructor();
    }
    export class $CRCreativeModeTabsRegistrateDisplayItemsGeneratorImpl {
        static isInCreativeTab(arg0: $RegistryEntry<never, never>, arg1: $ResourceKey_<$CreativeModeTab>): boolean;
        constructor();
    }
    export class $CRExtraRegistrationImpl {
        static platformSpecificRegistration(): void;
        constructor();
    }
    export class $CRBlockEntitiesImpl {
        static init(): void;
        static PORTABLE_FUEL_INTERFACE: $BlockEntityEntry<$PortableFuelInterfaceBlockEntity>;
        static FUEL_TANK: $BlockEntityEntry<$FuelTankBlockEntity>;
        constructor();
    }
    export class $CRCreativeModeTabsImpl {
        static getBaseTabKey(): $ResourceKey<$CreativeModeTab>;
        static getTracksTabKey(): $ResourceKey<$CreativeModeTab>;
        static getPalettesTabKey(): $ResourceKey<$CreativeModeTab>;
        static register(arg0: $IEventBus): void;
        static PALETTES_TAB: $DeferredHolder<$CreativeModeTab, $CreativeModeTab>;
        static TRACKS_TAB: $DeferredHolder<$CreativeModeTab, $CreativeModeTab>;
        static MAIN_TAB: $DeferredHolder<$CreativeModeTab, $CreativeModeTab>;
        constructor();
        static get baseTabKey(): $ResourceKey<$CreativeModeTab>;
        static get tracksTabKey(): $ResourceKey<$CreativeModeTab>;
        static get palettesTabKey(): $ResourceKey<$CreativeModeTab>;
    }
    export class $CREntityAttributesImpl {
        static registerAttributes(arg0: $EntityAttributeCreationEvent): void;
        constructor();
    }
}
