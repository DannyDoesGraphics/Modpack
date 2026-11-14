import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $JsonElement_ } from "@package/com/google/gson";
import { $SoundsGenerator, $MultipartBlockStateGenerator, $VariantBlockStateGenerator, $ParticleGenerator, $ModelGenerator, $LoadedTexture } from "@package/dev/latvian/mods/kubejs/client";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $EntityType_ } from "@package/net/minecraft/world/entity";
import { $GameEvent_ } from "@package/net/minecraft/world/level/gameevent";
import { $Map_ } from "@package/java/util";
import { $VillagerType_, $VillagerProfession_ } from "@package/net/minecraft/world/entity/npc";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $GeneratedData_, $VirtualDataMapFile, $GeneratedData } from "@package/dev/latvian/mods/kubejs/script/data";
import { $Consumer_ } from "@package/java/util/function";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $TickDuration_, $RegistryAccessContainer } from "@package/dev/latvian/mods/kubejs/util";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/dev/latvian/mods/kubejs/generator" {
    export class $KubeResourceGenerator {
    }
    export interface $KubeResourceGenerator extends $KubeEvent {
        flush(): void;
        add(data: $GeneratedData_): void;
        text(id: $ResourceLocation_, content: string): void;
        json(id: $ResourceLocation_, json: $JsonElement_): void;
        getRegistries(): $RegistryAccessContainer;
        getGenerated(id: $ResourceLocation_): $GeneratedData;
        get registries(): $RegistryAccessContainer;
    }
    export class $KubeDataGenerator {
    }
    export interface $KubeDataGenerator extends $KubeResourceGenerator {
        setCompostable(items: $ItemPredicate_, chance: number, canVillagerCompost: boolean): void;
        removeCompostable(items: $ItemPredicate_): void;
        setFurnaceFuel(items: $ItemPredicate_, ticks: $TickDuration_): void;
        removeFurnaceFuel(items: $ItemPredicate_): void;
        setMonsterRoomMobs(entityType: $EntityType_<never>, weight: number): void;
        setOxidizable(from: $Block_, to: $Block_): void;
        setParrotImitation(type: $EntityType_<never>, sound: $SoundEvent_): void;
        setRaidHeroGifts(profession: $VillagerProfession_, lootTable: $ResourceKey_<$LootTable>): void;
        setVibrationFrequency(gameEvent: $GameEvent_, frequency: number): void;
        setVillagerType(biome: $ResourceKey_<$Biome>, villagerType: $VillagerType_): void;
        setWaxable(from: $Block_, to: $Block_): void;
        dataMap<R, T>(type: $DataMapType<R, T>, consumer: $Consumer_<$VirtualDataMapFile<R, T>>): void;
    }
    export class $KubeAssetGenerator {
        static HANDHELD_ITEM_MODEL: $ResourceLocation;
        static CUBE_BLOCK_MODEL: $ResourceLocation;
        static CUBE_ALL_BLOCK_MODEL: $ResourceLocation;
        static GENERATED_ITEM_MODEL: $ResourceLocation;
    }
    export interface $KubeAssetGenerator extends $KubeResourceGenerator {
        sounds(namespace: string, consumer: $Consumer_<$SoundsGenerator>): void;
        blockModel(id: $ResourceLocation_, consumer: $Consumer_<$ModelGenerator>): void;
        itemModel(id: $ResourceLocation_, consumer: $Consumer_<$ModelGenerator>): void;
        texture(target: $ResourceLocation_, texture: $LoadedTexture): void;
        mask(target: $ResourceLocation_, mask: $ResourceLocation_, input: $ResourceLocation_): boolean;
        particle(id: $ResourceLocation_, consumer: $Consumer_<$ParticleGenerator>): void;
        blockState(id: $ResourceLocation_, consumer: $Consumer_<$VariantBlockStateGenerator>): void;
        loadTexture(id: $ResourceLocation_): $LoadedTexture;
        multipartState(id: $ResourceLocation_, consumer: $Consumer_<$MultipartBlockStateGenerator>): void;
        defaultItemModel(id: $ResourceLocation_): void;
        defaultHandheldItemModel(id: $ResourceLocation_): void;
        stencil(target: $ResourceLocation_, stencil: $ResourceLocation_, colors: $Map_<$KubeColor_, $KubeColor_>): void;
    }
}
