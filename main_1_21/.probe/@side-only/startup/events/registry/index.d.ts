import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $DetectorBlock$Builder } from "@package/dev/latvian/mods/kubejs/block";
import { $ParticleTypeBuilder, $CustomStatBuilder, $PoiTypeBuilder, $VillagerProfessionBuilder, $MobEffectBuilder, $PotionBuilder, $SoundEventBuilder, $VillagerTypeBuilder } from "@package/dev/latvian/mods/kubejs/misc";
import { $ArmorMaterial, $CreativeModeTab, $Item } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $ThickFluidBuilder, $ThinFluidBuilder, $FluidBuilder, $FluidTypeBuilder } from "@package/dev/latvian/mods/kubejs/fluid";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleType } from "@package/net/minecraft/core/particles";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $VillagerType, $VillagerProfession } from "@package/net/minecraft/world/entity/npc";
import { $ArmorMaterialBuilder, $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $AttributeBuilder } from "@package/dev/latvian/mods/kubejs/entity";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $RegistryKubeEvent } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $SlabBlockBuilder, $CropBlockBuilder, $PressurePlateBlockBuilder, $FenceGateBlockBuilder, $FenceBlockBuilder, $DoorBlockBuilder, $TrapdoorBlockBuilder, $BasicKubeBlock$Builder, $PillarBlockBuilder, $CarpetBlockBuilder, $StairBlockBuilder, $ButtonBlockBuilder, $FallingBlockBuilder, $WallBlockBuilder, $CardinalBlockBuilder } from "@package/dev/latvian/mods/kubejs/block/custom";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $CreativeTabBuilder } from "@package/dev/latvian/mods/kubejs/item/creativetab";
import { $SmithingTemplateItemBuilder, $ArmorItemBuilder$Boots, $DiggerItemBuilder$Hoe, $DiggerItemBuilder$Shovel, $ArmorItemBuilder$Chestplate, $ArmorItemBuilder$AnimalArmor, $SwordItemBuilder, $DiggerItemBuilder$Axe, $ArmorItemBuilder$Helmet, $DiggerItemBuilder$Pickaxe, $ShearsItemBuilder, $ArmorItemBuilder$Leggings } from "@package/dev/latvian/mods/kubejs/item/custom";

declare module "@side-only/startup/events/registry" {
    class VillagerProfession extends $RegistryKubeEvent<$VillagerProfession> {
        create(name: string): $VillagerProfessionBuilder;
    }
    class Fluid extends $RegistryKubeEvent<$Fluid> {
        create(name: string): $FluidBuilder;
        create(name: string, type: "kubejs:thin"): $ThinFluidBuilder;
        create(name: string, type: "kubejs:thick"): $ThickFluidBuilder;
    }
    class Block extends $RegistryKubeEvent<$Block> {
        create(name: string): $BasicKubeBlock$Builder;
        create(name: string, type: "kubejs:detector"): $DetectorBlock$Builder;
        create(name: string, type: "kubejs:slab"): $SlabBlockBuilder;
        create(name: string, type: "kubejs:stairs"): $StairBlockBuilder;
        create(name: string, type: "kubejs:fence"): $FenceBlockBuilder;
        create(name: string, type: "kubejs:wall"): $WallBlockBuilder;
        create(name: string, type: "kubejs:fence_gate"): $FenceGateBlockBuilder;
        create(name: string, type: "kubejs:pressure_plate"): $PressurePlateBlockBuilder;
        create(name: string, type: "kubejs:button"): $ButtonBlockBuilder;
        create(name: string, type: "kubejs:falling"): $FallingBlockBuilder;
        create(name: string, type: "kubejs:crop"): $CropBlockBuilder;
        create(name: string, type: "kubejs:cardinal"): $CardinalBlockBuilder;
        create(name: string, type: "kubejs:carpet"): $CarpetBlockBuilder;
        create(name: string, type: "kubejs:door"): $DoorBlockBuilder;
        create(name: string, type: "kubejs:trapdoor"): $TrapdoorBlockBuilder;
        create(name: string, type: "kubejs:pillar"): $PillarBlockBuilder;
    }
    class Potion extends $RegistryKubeEvent<$Potion> {
        create(name: string): $PotionBuilder;
    }
    class Item extends $RegistryKubeEvent<$Item> {
        create(name: string): $ItemBuilder;
        create(name: string, type: "kubejs:sword"): $SwordItemBuilder;
        create(name: string, type: "kubejs:pickaxe"): $DiggerItemBuilder$Pickaxe;
        create(name: string, type: "kubejs:axe"): $DiggerItemBuilder$Axe;
        create(name: string, type: "kubejs:shovel"): $DiggerItemBuilder$Shovel;
        create(name: string, type: "kubejs:hoe"): $DiggerItemBuilder$Hoe;
        create(name: string, type: "kubejs:shears"): $ShearsItemBuilder;
        create(name: string, type: "kubejs:helmet"): $ArmorItemBuilder$Helmet;
        create(name: string, type: "kubejs:chestplate"): $ArmorItemBuilder$Chestplate;
        create(name: string, type: "kubejs:leggings"): $ArmorItemBuilder$Leggings;
        create(name: string, type: "kubejs:boots"): $ArmorItemBuilder$Boots;
        create(name: string, type: "kubejs:animal_armor"): $ArmorItemBuilder$AnimalArmor;
        create(name: string, type: "kubejs:smithing_template"): $SmithingTemplateItemBuilder;
    }
    class MobEffect extends $RegistryKubeEvent<$MobEffect> {
        create(name: string): $MobEffectBuilder;
    }
    class VillagerType extends $RegistryKubeEvent<$VillagerType> {
        create(name: string): $VillagerTypeBuilder;
    }
    class PointOfInterestType extends $RegistryKubeEvent<$PoiType> {
        create(name: string): $PoiTypeBuilder;
    }
    class ParticleType extends $RegistryKubeEvent<$ParticleType<any>> {
        create(name: string): $ParticleTypeBuilder;
    }
    class CustomStat extends $RegistryKubeEvent<$ResourceLocation> {
        create(name: string): $CustomStatBuilder;
    }
    class CreativeModeTab extends $RegistryKubeEvent<$CreativeModeTab> {
        create(name: string): $CreativeTabBuilder;
    }
    class NeoforgeFluidType extends $RegistryKubeEvent<$FluidType> {
        create(name: string): $FluidTypeBuilder;
    }
    class Attribute extends $RegistryKubeEvent<$Attribute> {
        create(name: string): $AttributeBuilder;
    }
    class SoundEvent extends $RegistryKubeEvent<$SoundEvent> {
        create(name: string): $SoundEventBuilder;
    }
    class ArmorMaterial extends $RegistryKubeEvent<$ArmorMaterial> {
        create(name: string): $ArmorMaterialBuilder;
    }
}
