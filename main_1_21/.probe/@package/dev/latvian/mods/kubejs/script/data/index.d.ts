import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $EntityType_ } from "@package/net/minecraft/world/entity";
import { $GameEvent_ } from "@package/net/minecraft/world/level/gameevent";
import { $IoSupplier } from "@package/net/minecraft/server/packs/resources";
import { $Map_, $Map } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $EventTargetType } from "@package/dev/latvian/mods/kubejs/event";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $BiConsumer, $BiConsumer_, $Supplier_, $Function_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $Holder_, $HolderSet_, $Registry } from "@package/net/minecraft/core";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $Path_ } from "@package/java/nio/file";
import { $TickDuration_, $RegistryAccessContainer } from "@package/dev/latvian/mods/kubejs/util";
import { $PackResources, $PackType_, $AbstractPackResources, $PackType } from "@package/net/minecraft/server/packs";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ScriptType_, $ScriptType } from "@package/dev/latvian/mods/kubejs/script";
import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $InputStream } from "@package/java/io";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $SoundsGenerator, $ModelGenerator, $MultipartBlockStateGenerator, $VariantBlockStateGenerator, $ParticleGenerator, $LoadedTexture } from "@package/dev/latvian/mods/kubejs/client";
import { $KubeAssetGenerator, $KubeDataGenerator, $KubeResourceGenerator } from "@package/dev/latvian/mods/kubejs/generator";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $VillagerType_, $VillagerProfession_ } from "@package/net/minecraft/world/entity/npc";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";

declare module "@package/dev/latvian/mods/kubejs/script/data" {
    export class $GeneratedData extends $Record implements $IoSupplier<$InputStream> {
        get(): $InputStream;
        data(): $Supplier<number[]>;
        id(): $ResourceLocation;
        static json(id: $ResourceLocation_, json: $Supplier_<$JsonElement>): $GeneratedData;
        static PACK_META: $GeneratedData;
        static INTERNAL_RELOAD: $GeneratedData;
        static PACK_ICON: $GeneratedData;
        constructor(id: $ResourceLocation_, data: $Supplier_<number[]>);
    }
    /**
     * Values that may be interpreted as {@link $GeneratedData}.
     */
    export type $GeneratedData_ = { id?: $ResourceLocation_, data?: $Supplier_<number[]>,  } | [id?: $ResourceLocation_, data?: $Supplier_<number[]>, ];
    export class $GeneratedDataStage extends $Enum<$GeneratedDataStage> implements $StringRepresentable {
        static values(): $GeneratedDataStage[];
        static valueOf(name: string): $GeneratedDataStage;
        getSerializedName(): string;
        static forScripts<T>(factory: $Function_<$GeneratedDataStage, T>): $Map<$GeneratedDataStage, T>;
        getRemappedEnumConstantName(): string;
        static BEFORE_MODS: $GeneratedDataStage;
        static TARGET: $EventTargetType<$GeneratedDataStage>;
        static REGISTRIES: $GeneratedDataStage;
        static LAST: $GeneratedDataStage;
        displayName: string;
        static INTERNAL: $GeneratedDataStage;
        static AFTER_MODS: $GeneratedDataStage;
        static FOR_SCRIPTS: $GeneratedDataStage[];
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GeneratedDataStage}.
     */
    export type $GeneratedDataStage_ = "internal" | "registries" | "before_mods" | "after_mods" | "last";
    export class $ExportablePackResources {
    }
    export interface $ExportablePackResources extends $PackResources {
        "export"(root: $Path_): void;
        exportPath(): string;
    }
    export class $VirtualResourcePack extends $AbstractPackResources implements $KubeResourceGenerator, $ExportablePackResources {
        reset(): void;
        add(data: $GeneratedData_): void;
        "export"(root: $Path_): void;
        getRegistries(): $RegistryAccessContainer;
        exportPath(): string;
        getGenerated(id: $ResourceLocation_): $GeneratedData;
        flush(): void;
        text(id: $ResourceLocation_, content: string): void;
        json(id: $ResourceLocation_, json: $JsonElement_): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        component: $Component;
        stage: $GeneratedDataStage;
        scriptType: $ScriptType;
        packType: $PackType;
        registries: $Supplier<$RegistryAccessContainer>;
        info: string;
        constructor(scriptType: $ScriptType_, packType: $PackType_, stage: $GeneratedDataStage_, registries: $Supplier_<$RegistryAccessContainer>);
    }
    export class $VirtualAssetPack extends $VirtualResourcePack implements $KubeAssetGenerator {
        sounds(namespace: string, consumer: $Consumer_<$SoundsGenerator>): void;
        texture(target: $ResourceLocation_, texture: $LoadedTexture): void;
        loadTexture(id: $ResourceLocation_): $LoadedTexture;
        blockModel(id: $ResourceLocation_, consumer: $Consumer_<$ModelGenerator>): void;
        itemModel(id: $ResourceLocation_, consumer: $Consumer_<$ModelGenerator>): void;
        mask(target: $ResourceLocation_, mask: $ResourceLocation_, input: $ResourceLocation_): boolean;
        particle(id: $ResourceLocation_, consumer: $Consumer_<$ParticleGenerator>): void;
        blockState(id: $ResourceLocation_, consumer: $Consumer_<$VariantBlockStateGenerator>): void;
        multipartState(id: $ResourceLocation_, consumer: $Consumer_<$MultipartBlockStateGenerator>): void;
        defaultItemModel(id: $ResourceLocation_): void;
        defaultHandheldItemModel(id: $ResourceLocation_): void;
        stencil(target: $ResourceLocation_, stencil: $ResourceLocation_, colors: $Map_<$KubeColor_, $KubeColor_>): void;
        component: $Component;
        stage: $GeneratedDataStage;
        scriptType: $ScriptType;
        packType: $PackType;
        registries: $Supplier<$RegistryAccessContainer>;
        info: string;
        constructor(stage: $GeneratedDataStage_, registries: $Supplier_<$RegistryAccessContainer>);
    }
    export class $VirtualDataMapFile<RT, DT> implements $BiConsumer<$ResourceLocation, DT> {
        remove(holder: RT): void;
        remove(holder: $Holder_<RT>): void;
        remove(holders: $HolderSet_<RT>): void;
        clear(): void;
        replaceAll(): void;
        add(holders: $HolderSet_<RT>, value: DT, replace: boolean): void;
        add(holders: $HolderSet_<RT>, value: DT): void;
        add(holder: $Holder_<RT>, value: DT): void;
        add(holder: $Holder_<RT>, value: DT, replace: boolean): void;
        add(holder: RT, value: DT, replace: boolean): void;
        add(holder: RT, value: DT): void;
        removeTag(tag: $TagKey_<RT>): void;
        addTag(tag: $TagKey_<RT>, value: DT): void;
        addTag(tag: $TagKey_<RT>, value: DT, replace: boolean): void;
        andThen(arg0: $BiConsumer_<$ResourceLocation, DT>): $BiConsumer<$ResourceLocation, DT>;
        registryAccess: $RegistryAccessContainer;
        registry: $Registry<RT>;
        pack: $KubeDataGenerator;
        constructor(type: $DataMapType<RT, DT>, pack: $VirtualDataPack);
    }
    export class $VirtualDataPack extends $VirtualResourcePack implements $KubeDataGenerator {
        dataMap<R, T>(type: $DataMapType<R, T>, consumer: $Consumer_<$VirtualDataMapFile<R, T>>): void;
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
        component: $Component;
        stage: $GeneratedDataStage;
        scriptType: $ScriptType;
        packType: $PackType;
        registries: $Supplier<$RegistryAccessContainer>;
        info: string;
        constructor(stage: $GeneratedDataStage_, registries: $Supplier_<$RegistryAccessContainer>);
    }
}
