import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $GameEvent } from "@package/net/minecraft/world/level/gameevent";
import { $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $Map, $List_ } from "@package/java/util";
import { $CatVariant } from "@package/net/minecraft/world/entity/animal";
import { $CachedOutput_, $DataProvider, $PackOutput } from "@package/net/minecraft/data";
import { $Function_, $Function } from "@package/java/util/function";
import { $HolderLookup$Provider, $Registry } from "@package/net/minecraft/core";
import { $IIntrinsicHolderTagAppenderExtension, $ITagAppenderExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $FileHelperDataProvider } from "@package/fuzs/puzzleslib/neoforge/impl/data";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $Record } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $TagBuilder, $TagKey, $TagKey_, $TagEntry } from "@package/net/minecraft/tags";
import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $Instrument, $Item } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $FlatLevelGeneratorPreset } from "@package/net/minecraft/world/level/levelgen/flat";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BannerPattern } from "@package/net/minecraft/world/level/block/entity";
import { $DamageType } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/data/tags" {
    export class $ItemTagsProvider extends $IntrinsicHolderTagsProvider<$Item> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, blockTags: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>, arg3: string, arg4: $ExistingFileHelper);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $CompletableFuture<$TagsProvider$TagLookup_<$Item>>, arg3: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>, arg4: string, arg5: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, parentProvider: $CompletableFuture<$TagsProvider$TagLookup_<$Item>>, blockTags: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>);
    }
    export class $GameEventTagsProvider extends $TagsProvider<$GameEvent> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $FlatLevelGeneratorPresetTagsProvider extends $TagsProvider<$FlatLevelGeneratorPreset> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $DamageTypeTagsProvider extends $TagsProvider<$DamageType> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $EntityTypeTagsProvider extends $IntrinsicHolderTagsProvider<$EntityType<never>> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $PoiTypeTagsProvider extends $TagsProvider<$PoiType> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $StructureTagsProvider extends $TagsProvider<$Structure> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $BiomeTagsProvider extends $TagsProvider<$Biome> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $TradeRebalanceEnchantmentTagsProvider extends $TagsProvider<$Enchantment> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(packOutput: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $IntrinsicHolderTagsProvider<T> extends $TagsProvider<T> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $ResourceKey_<$Registry<T>>, arg2: $CompletableFuture<$HolderLookup$Provider>, arg3: $CompletableFuture<$TagsProvider$TagLookup_<T>>, arg4: $Function_<T, $ResourceKey<T>>, arg5: string, arg6: $ExistingFileHelper);
        constructor(arg0: $PackOutput, arg1: $ResourceKey_<$Registry<T>>, arg2: $CompletableFuture<$HolderLookup$Provider>, arg3: $Function_<T, $ResourceKey<T>>, arg4: string, arg5: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, registryKey: $ResourceKey_<$Registry<T>>, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, parentProvider: $CompletableFuture<$TagsProvider$TagLookup_<T>>, keyExtractor: $Function_<T, $ResourceKey<T>>);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, registryKey: $ResourceKey_<$Registry<T>>, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, keyExtractor: $Function_<T, $ResourceKey<T>>);
    }
    export class $EnchantmentTagsProvider extends $TagsProvider<$Enchantment> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $PaintingVariantTagsProvider extends $TagsProvider<$PaintingVariant> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $FluidTagsProvider extends $IntrinsicHolderTagsProvider<$Fluid> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $TagsProvider$TagAppender<T> implements $ITagAppenderExtension<T> {
        addOptional(location: $ResourceLocation_): $TagsProvider$TagAppender<T>;
        addOptionalTag(location: $ResourceLocation_): $TagsProvider$TagAppender<T>;
        getInternalBuilder(): $TagBuilder;
        /**
         * @deprecated
         */
        getModID(): string;
        add(key: $ResourceKey_<T>): $TagsProvider$TagAppender<T>;
        add(arg0: $TagEntry): $TagsProvider$TagAppender<T>;
        add(...keys: $ResourceKey_<T>[]): $TagsProvider$TagAppender<T>;
        addAll(keys: $List_<$ResourceKey_<T>>): $TagsProvider$TagAppender<T>;
        addTag(tag: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        addTags(...arg0: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
        addOptionalTags(...arg0: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
        addOptionalTag(tag: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        remove(arg0: $ResourceLocation_, ...arg1: $ResourceLocation_[]): $TagsProvider$TagAppender<T>;
        remove(key: $ResourceKey_<T>): $TagsProvider$TagAppender<T>;
        remove(arg0: $ResourceKey_<T>, ...arg1: $ResourceKey_<T>[]): $TagsProvider$TagAppender<T>;
        remove(tag: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        remove(arg0: $TagKey_<T>, ...arg1: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
        remove(location: $ResourceLocation_): $TagsProvider$TagAppender<T>;
        replace(): $TagsProvider$TagAppender<T>;
        replace(value: boolean): $TagsProvider$TagAppender<T>;
        get internalBuilder(): $TagBuilder;
        get modID(): string;
    }
    export class $BannerPatternTagsProvider extends $TagsProvider<$BannerPattern> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $VanillaEnchantmentTagsProvider extends $EnchantmentTagsProvider {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CatVariantTagsProvider extends $TagsProvider<$CatVariant> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $TagsProvider$TagLookup<T> {
        static empty<T>(): $TagsProvider$TagLookup<T>;
    }
    export interface $TagsProvider$TagLookup<T> extends $Function<$TagKey<T>, ($TagBuilder) | undefined> {
        contains(key: $TagKey_<$TagKey<T>>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TagsProvider$TagLookup}.
     */
    export type $TagsProvider$TagLookup_<T> = (() => void);
    export class $WorldPresetTagsProvider extends $TagsProvider<$WorldPreset> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T> extends $TagsProvider$TagAppender<T> implements $IIntrinsicHolderTagAppenderExtension<T> {
        add(...values: T[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        add(value: T): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        getKey(arg0: T): $ResourceKey<T>;
        addTag(tag: $TagKey_<T>): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        addTags(...arg0: $TagKey_<T>[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: $ResourceKey_<T>, ...arg1: $ResourceKey_<T>[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(value: T): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: T, ...arg1: T[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
    }
    export class $VanillaItemTagsProvider extends $ItemTagsProvider {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>);
    }
    export class $TradeRebalanceStructureTagsProvider extends $TagsProvider<$Structure> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $VanillaBlockTagsProvider extends $IntrinsicHolderTagsProvider<$Block> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $TagsProvider$1CombinedData<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $TagsProvider$1CombinedData}.
     */
    export type $TagsProvider$1CombinedData_<T> = { contents?: $HolderLookup$Provider, parent?: $TagsProvider$TagLookup_<any>,  } | [contents?: $HolderLookup$Provider, parent?: $TagsProvider$TagLookup_<any>, ];
    export class $TagsProvider<T> implements $DataProvider, $FileHelperDataProvider {
        puzzleslib$setExistingFileHelper(fileHelper: $ExistingFileHelper): void;
        contentsGetter(): $CompletableFuture<$TagsProvider$TagLookup<T>>;
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        get name(): string;
    }
    export class $InstrumentTagsProvider extends $TagsProvider<$Instrument> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
    }
}
