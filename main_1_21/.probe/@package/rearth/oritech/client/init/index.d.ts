import { $Level_ } from "@package/net/minecraft/world/level";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $RedstoneAddonScreenHandler, $OritechScreenHandler, $PlayerModifierScreenHandler, $LimitedEnergyStorageScreenHandler, $ReactorScreenHandler, $ItemFilterScreenHandler, $TaintedRefineryScreenHandler, $UpgradableOritechScreenHandler, $DroneScreenHandler, $InventoryProxyScreenHandler, $EnchanterScreenHandler, $CatalystScreenHandler, $CentrifugeScreenHandler, $RefineryScreenHandler, $AcceleratorScreenHandler, $SteamEngineScreenHandler } from "@package/rearth/oritech/client/ui";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $RegistrySupplier } from "@package/dev/architectury/registry/registries";
import { $Map } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Field } from "@package/java/lang/reflect";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MenuType_, $MenuType } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $ArchitecturyRegistryContainer } from "@package/rearth/oritech/util/registry";
import { $ModConfigSpec$DoubleValue, $ModConfigSpec$BooleanValue, $ModConfigSpec } from "@package/net/neoforged/neoforge/common";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/rearth/oritech/client/init" {
    export class $ModRenderers {
        static registerRenderers(): void;
        static RENDER_LAYERS: $Map<$Block, $RenderType>;
        constructor();
    }
    export class $OritechClientConfig {
        static showMachinePreview: $ModConfigSpec$BooleanValue;
        static ziplineCameraSwitch: $ModConfigSpec$BooleanValue;
        static CLIENT_SPEC: $ModConfigSpec;
        static ziplineAcceleration: $ModConfigSpec$DoubleValue;
        static maxZiplineSpeed: $ModConfigSpec$DoubleValue;
        static ziplineAutoJump: $ModConfigSpec$BooleanValue;
        static enableHelpButton: $ModConfigSpec$BooleanValue;
        constructor();
    }
    export class $ModScreens implements $ArchitecturyRegistryContainer<$MenuType<never>> {
        getRegistryType(): $ResourceKey<$Registry<$MenuType<never>>>;
        static registerScreens(): void;
        getTargetFieldType(): $Class<$MenuType<never>>;
        postProcessField(arg0: string, arg1: $MenuType_<never>, arg2: string, arg3: $Field, arg4: $RegistrySupplier<$MenuType_<never>>): void;
        shouldProcessField(arg0: $MenuType_<never>, arg1: string, arg2: $Field): boolean;
        afterFieldProcessing(): void;
        static TREEFELLER_SCREEN: $MenuType<$OritechScreenHandler>;
        static BASIC_GENERATOR_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static INVENTORY_PROXY_SCREEN: $MenuType<$InventoryProxyScreenHandler>;
        static GRINDER_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static STEAM_ENGINE_SCREEN: $MenuType<$SteamEngineScreenHandler>;
        static SHRINKER_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static TANK_SCREEN: $MenuType<$OritechScreenHandler>;
        static ENCHANTER_SCREEN: $MenuType<$EnchanterScreenHandler>;
        static AUGMENTER_INV_SCREEN: $MenuType<$OritechScreenHandler>;
        static CATALYST_SCREEN: $MenuType<$CatalystScreenHandler>;
        static FUEL_PORT_SCREEN: $MenuType<$OritechScreenHandler>;
        static ITEM_FILTER_SCREEN: $MenuType<$ItemFilterScreenHandler>;
        static UNSTABLE_CONTAINER_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static MODIFIER_SCREEN: $MenuType<$PlayerModifierScreenHandler>;
        static ATOMIC_FORGE_SCREEN: $MenuType<$OritechScreenHandler>;
        static ACCELERATOR_SCREEN: $MenuType<$AcceleratorScreenHandler>;
        static POWERED_FURNACE_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static PLACER_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static PULVERIZER_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static ASSEMBLER_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static REACTOR_SCREEN: $MenuType<$ReactorScreenHandler>;
        static LASER_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static POWER_POLE_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static DRONE_SCREEN: $MenuType<$DroneScreenHandler>;
        static FOUNDRY_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static DESTROYER_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static STORAGE_SCREEN: $MenuType<$LimitedEnergyStorageScreenHandler>;
        static FERTILIZER_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static FUEL_GENERATOR_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static COOLER_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static LAVA_GENERATOR_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static REFINERY_SCREEN: $MenuType<$RefineryScreenHandler>;
        static CHARGER_SCREEN: $MenuType<$OritechScreenHandler>;
        static CENTRIFUGE_SCREEN: $MenuType<$CentrifugeScreenHandler>;
        static REDSTONE_ADDON_SCREEN: $MenuType<$RedstoneAddonScreenHandler>;
        static BIO_GENERATOR_SCREEN: $MenuType<$UpgradableOritechScreenHandler>;
        static TAINTED_REFINERY_SCREEN: $MenuType<$TaintedRefineryScreenHandler>;
        constructor();
        get registryType(): $ResourceKey<$Registry<$MenuType<never>>>;
        get targetFieldType(): $Class<$MenuType<never>>;
    }
    export class $ParticleContent {
        static LaserBoom(arg0: $Level_, arg1: $Vec3_, arg2: $Vec3_): void;
        static Accelerating(arg0: $Level_, arg1: $Vec3_): void;
        static WeedKiller(arg0: $Level_, arg1: $Vec3_, arg2: $Vec3_): void;
        static CatalystConnection(arg0: $Level_, arg1: $Vec3_, arg2: $Vec3_): void;
        static HighlightBlock(arg0: $Level_, arg1: $Vec3_): void;
        static BlackHoleEmission(arg0: $Level_, arg1: $Vec3_, arg2: $Vec3_): void;
        static DebugBlock(arg0: $Level_, arg1: $Vec3_): void;
        static WanderingSoul(arg0: $Level_, arg1: $Vec3_, arg2: $Vec3_, arg3: number): void;
        static handleOnClient(arg0: $ParticleContent$Payload_, arg1: $Level_, arg2: $RegistryAccess): void;
        static registerParticles(): void;
        constructor();
    }
    export class $ParticleContent$Payload extends $Record implements $CustomPacketPayload {
        effectId(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        pos(): $Vec3;
        extraInt(): number;
        data1(): $Vec3;
        data2(): $Vec3;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$ParticleContent$Payload>;
        static PACKET_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ParticleContent$Payload>;
        constructor(effectId: number, pos: $Vec3_, data1: $Vec3_, data2: $Vec3_, extraInt: number);
    }
    /**
     * Values that may be interpreted as {@link $ParticleContent$Payload}.
     */
    export type $ParticleContent$Payload_ = { data1?: $Vec3_, data2?: $Vec3_, effectId?: number, extraInt?: number, pos?: $Vec3_,  } | [data1?: $Vec3_, data2?: $Vec3_, effectId?: number, extraInt?: number, pos?: $Vec3_, ];
    export class $ParticleContent$EffectType extends $Enum<$ParticleContent$EffectType> {
        static values(): $ParticleContent$EffectType[];
        static valueOf(arg0: string): $ParticleContent$EffectType;
        static DEBUG_BLOCK: $ParticleContent$EffectType;
        static WEED_KILLER: $ParticleContent$EffectType;
        static HIGHLIGHT_BLOCK: $ParticleContent$EffectType;
        static ACCELERATING: $ParticleContent$EffectType;
        static LASER_BOOM: $ParticleContent$EffectType;
        static BLACK_HOLE_EMISSION: $ParticleContent$EffectType;
        static CATALYST_CONNECTION: $ParticleContent$EffectType;
        static WANDERING_SOUL: $ParticleContent$EffectType;
    }
    /**
     * Values that may be interpreted as {@link $ParticleContent$EffectType}.
     */
    export type $ParticleContent$EffectType_ = "highlight_block" | "weed_killer" | "debug_block" | "wandering_soul" | "laser_boom" | "catalyst_connection" | "black_hole_emission" | "accelerating";
}
