import { $ConfigBase$ConfigGroup, $ConfigBase$ConfigInt, $ConfigBase$ConfigBool, $ConfigBase, $ConfigBase$ConfigEnum, $ConfigBase$ConfigFloat } from "@package/net/createmod/catnip/config";
import { $SmokeParticle$SmokeQuality } from "@package/com/railwayteam/railways/content/smokestack/particles/legacy";
import { $Map_, $Map } from "@package/java/util";
import { $ModConfig$Type_, $ModConfig, $ModConfig$Type } from "@package/net/neoforged/fml/config";
import { $SmokeType } from "@package/com/railwayteam/railways/content/smokestack";
import { $ModConfigSpec } from "@package/net/neoforged/neoforge/common";
export * as neoforge from "@package/com/railwayteam/railways/config/neoforge";

declare module "@package/com/railwayteam/railways/config" {
    export class $CServer extends $ConfigBase {
        switchPlacementRange: $ConfigBase$ConfigInt;
        flipDistantSwitches: $ConfigBase$ConfigBool;
        handcarHungerMultiplier: $ConfigBase$ConfigFloat;
        explosiveTrackDamage: $ConfigBase$ConfigBool;
        strictCoupler: $ConfigBase$ConfigBool;
        semaphores: $CSemaphores;
        specification: $ModConfigSpec;
        unlimitedCreativeRelocation: $ConfigBase$ConfigBool;
        realism: $CRealism;
        misc: $ConfigBase$ConfigGroup;
        conductors: $CConductors;
        constructor();
    }
    export class $CConductors extends $ConfigBase {
        whistleRequiresOwning: $ConfigBase$ConfigBool;
        specification: $ModConfigSpec;
        whistleRebindRate: $ConfigBase$ConfigInt;
        activationDistance: $ConfigBase$ConfigInt;
        maxVentLength: $ConfigBase$ConfigInt;
        constructor();
    }
    export class $CConductors$Comments {
    }
    export class $CRConfigs$TomlGroup {
    }
    export class $CClient extends $ConfigBase {
        smokePercentage: $ConfigBase$ConfigFloat;
        cartoonSmoke: $ConfigBase$ConfigGroup;
        spawnFasterPuffs: $ConfigBase$ConfigBool;
        useConductorSpyShader: $ConfigBase$ConfigBool;
        useDevCape: $ConfigBase$ConfigBool;
        oldSmoke: $ConfigBase$ConfigGroup;
        universalShadowWrench: $ConfigBase$ConfigBool;
        showExtendedCouplerDebug: $ConfigBase$ConfigBool;
        smoke: $ConfigBase$ConfigGroup;
        trackOverlayOffset: $ConfigBase$ConfigFloat;
        specification: $ModConfigSpec;
        flywheelSpeedMultiplier: $ConfigBase$ConfigFloat;
        nvidiaShutdownWatchdog: $ConfigBase$ConfigBool;
        skipClientDerailing: $ConfigBase$ConfigBool;
        smokeLifetime: $ConfigBase$ConfigInt;
        animatedFlywheels: $ConfigBase$ConfigBool;
        smokeQuality: $ConfigBase$ConfigEnum<$SmokeParticle$SmokeQuality>;
        smokeType: $ConfigBase$ConfigEnum<$SmokeType>;
        renderNormalCap: $ConfigBase$ConfigBool;
        spawnSteam: $ConfigBase$ConfigBool;
        client: $ConfigBase$ConfigGroup;
        thickerSmoke: $ConfigBase$ConfigBool;
        constructor();
    }
    export class $CCommon$Comments {
    }
    export class $CClient$Comments {
    }
    export class $CRealism extends $ConfigBase {
        realisticFuelTanks: $ConfigBase$ConfigBool;
        specification: $ModConfigSpec;
        realisticTrains: $ConfigBase$ConfigBool;
        constructor();
    }
    export class $CRealism$Comments {
    }
    export class $CServer$Comments {
    }
    export class $CRConfigs {
        static byType(arg0: $ModConfig$Type_): $ConfigBase;
        static migrateClient(arg0: string): string;
        static migrateCommon(arg0: string): string;
        static migrate(arg0: string, arg1: $Map_<string, string>): string;
        static getDisableDatafixer(): boolean;
        static getRegisterMissingTracks(): boolean;
        static common(): $CCommon;
        static client(): $CClient;
        static server(): $CServer;
        static onLoad(arg0: $ModConfig): void;
        static onReload(arg0: $ModConfig): void;
        static registerCommon(): void;
        static CONFIGS: $Map<$ModConfig$Type, $ConfigBase>;
        constructor();
        static get disableDatafixer(): boolean;
        static get registerMissingTracks(): boolean;
    }
    export class $CSemaphores extends $ConfigBase {
        flipYellowOrder: $ConfigBase$ConfigBool;
        simplifiedPlacement: $ConfigBase$ConfigBool;
        specification: $ModConfigSpec;
        constructor();
    }
    export class $CCommon extends $ConfigBase {
        specification: $ModConfigSpec;
        disableDatafixer: $ConfigBase$ConfigBool;
        registerMissingTracks: $ConfigBase$ConfigBool;
        constructor();
    }
    export class $CSemaphores$Comments {
    }
}
