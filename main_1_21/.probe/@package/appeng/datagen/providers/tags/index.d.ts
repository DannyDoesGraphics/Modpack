import { $IAE2DataProvider } from "@package/appeng/datagen/providers";
import { $TagBuilder, $TagKey } from "@package/net/minecraft/tags";
import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $DyeColor_, $Item, $DyeColor } from "@package/net/minecraft/world/item";
import { $ItemTagsProvider as $ItemTagsProvider$1, $IntrinsicHolderTagsProvider, $TagsProvider$TagLookup_, $PoiTypeTagsProvider as $PoiTypeTagsProvider$1, $BiomeTagsProvider as $BiomeTagsProvider$1, $FluidTagsProvider as $FluidTagsProvider$1, $TagsProvider } from "@package/net/minecraft/data/tags";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $Map } from "@package/java/util";
import { $PackOutput } from "@package/net/minecraft/data";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $LocalizationProvider } from "@package/appeng/datagen/providers/localization";

declare module "@package/appeng/datagen/providers/tags" {
    export class $ConventionTags {
        static dye(arg0: $DyeColor_): $TagKey<$Item>;
        static ALL_QUARTZ_DUST: $TagKey<$Item>;
        static GOLD_NUGGET: $TagKey<$Item>;
        static REDSTONE: $TagKey<$Item>;
        static SKY_STONE_DUST: $TagKey<$Item>;
        static DUSTS: $TagKey<$Item>;
        static CERTUS_QUARTZ_STORAGE_BLOCK_BLOCK: $TagKey<$Block>;
        static ENDER_PEARL: $TagKey<$Item>;
        static QUARTZ_KNIFE: $TagKey<$Item>;
        static CAN_REMOVE_COLOR: $TagKey<$Item>;
        static CERTUS_QUARTZ: $TagKey<$Item>;
        static QUARTZ_AXE: $TagKey<$Item>;
        static QUARTZ_SHOVEL: $TagKey<$Item>;
        static INTERFACE: $TagKey<$Item>;
        static BUDDING_BLOCKS_BLOCKS: $TagKey<$Block>;
        static CROPS: $TagKey<$Block>;
        static COPPER_INGOT: $TagKey<$Item>;
        static PATTERN_PROVIDER: $TagKey<$Item>;
        static QUARTZ_HOE: $TagKey<$Item>;
        static DYES: $Map<$DyeColor, $TagKey<$Item>>;
        static ENDER_PEARL_DUST: $TagKey<$Item>;
        static GEMS: $TagKey<$Item>;
        static SILICON: $TagKey<$Item>;
        static BUDS_BLOCKS: $TagKey<$Block>;
        static CERTUS_QUARTZ_DUST: $TagKey<$Item>;
        static ALL_FLUIX: $TagKey<$Item>;
        static CHEST: $TagKey<$Item>;
        static WRENCH: $TagKey<$Item>;
        static COVERED_DENSE_CABLE: $TagKey<$Item>;
        static SMART_CABLE: $TagKey<$Item>;
        static CLUSTERS: $TagKey<$Item>;
        static IRON_INGOT: $TagKey<$Item>;
        static BUDDING_BLOCKS: $TagKey<$Item>;
        static SMART_DENSE_CABLE: $TagKey<$Item>;
        static GLASS_CHEAP: $TagKey<$Item>;
        static BUDS: $TagKey<$Item>;
        static FLUIX_DUST: $TagKey<$Item>;
        static DIAMOND: $TagKey<$Item>;
        static CLUSTERS_BLOCKS: $TagKey<$Block>;
        static GOLD_INGOT: $TagKey<$Item>;
        static ALL_NETHER_QUARTZ: $TagKey<$Item>;
        static GLASS: $TagKey<$Item>;
        static SAPLINGS: $TagKey<$Block>;
        static WOOD_STICK: $TagKey<$Item>;
        static INSCRIBER_PRESSES: $TagKey<$Item>;
        static FLUIX_CRYSTAL: $TagKey<$Item>;
        static PAINT_BALLS: $TagKey<$Item>;
        static GLOWSTONE: $TagKey<$Item>;
        static GLASS_CABLE: $TagKey<$Item>;
        static QUARTZ_SWORD: $TagKey<$Item>;
        static ALL_QUARTZ: $TagKey<$Item>;
        static LUMEN_PAINT_BALLS: $TagKey<$Item>;
        static NETHER_QUARTZ: $TagKey<$Item>;
        static METEORITE_OCEAN: $TagKey<$Biome>;
        static CURIOS: $TagKey<$Item>;
        static ILLUMINATED_PANEL: $TagKey<$Item>;
        static EXPORTED_SETTINGS: $TagKey<$DataComponentType<never>>;
        static ALL_CERTUS_QUARTZ: $TagKey<$Item>;
        static GLASS_BLOCK: $TagKey<$Block>;
        static IMMOVABLE_BLOCKS: $TagKey<$Block>;
        static QUARTZ_PICK: $TagKey<$Item>;
        static STONE: $TagKey<$Item>;
        static IRON_NUGGET: $TagKey<$Item>;
        static QUARTZ_WRENCH: $TagKey<$Item>;
        static COVERED_CABLE: $TagKey<$Item>;
    }
    export class $DataComponentTypeTagProvider extends $TagsProvider<$DataComponentType<never>> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper, arg3: $LocalizationProvider);
    }
    export class $BlockTagsProvider extends $IntrinsicHolderTagsProvider<$Block> implements $IAE2DataProvider {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $ItemTagsProvider extends $ItemTagsProvider$1 implements $IAE2DataProvider {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>, arg3: $ExistingFileHelper);
    }
    export class $BiomeTagsProvider extends $BiomeTagsProvider$1 implements $IAE2DataProvider {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $FluidTagsProvider extends $FluidTagsProvider$1 implements $IAE2DataProvider {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $PoiTypeTagsProvider extends $PoiTypeTagsProvider$1 implements $IAE2DataProvider {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
}
