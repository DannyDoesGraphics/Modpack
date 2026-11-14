import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $List, $Collection_, $List_, $Collection, $Set } from "@package/java/util";
import { $InclusiveRange, $InclusiveRange_ } from "@package/net/minecraft/util";
import { $Consumer, $BiConsumer_, $Function_, $Consumer_, $UnaryOperator_, $UnaryOperator } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $PackSelectionConfig_, $PackResources, $PackType_, $PackLocationInfo, $PackLocationInfo_, $VanillaPackResources, $PackSelectionConfig } from "@package/net/minecraft/server/packs";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PackAccessor } from "@package/net/brazier_modding/gdarp/mixin";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $Record } from "@package/java/lang";
import { $PackMetadataSection_ } from "@package/net/minecraft/server/packs/metadata/pack";
import { $DirectoryValidator, $ForbiddenSymlinkInfo_ } from "@package/net/minecraft/world/level/validation";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/server/packs/repository" {
    export class $Pack$Position extends $Enum<$Pack$Position> {
        opposite(): $Pack$Position;
        static values(): $Pack$Position[];
        insert<T>(list: $List_<T>, element: T, packFactory: $Function_<T, $PackSelectionConfig>, flipPosition: boolean): number;
        static valueOf(arg0: string): $Pack$Position;
        static TOP: $Pack$Position;
        static BOTTOM: $Pack$Position;
    }
    /**
     * Values that may be interpreted as {@link $Pack$Position}.
     */
    export type $Pack$Position_ = "top" | "bottom";
    export class $PackSource {
        static create(decorator: $UnaryOperator_<$Component>, shouldAddAutomatically: boolean): $PackSource;
        static BUILT_IN: $PackSource;
        static SERVER: $PackSource;
        static FEATURE: $PackSource;
        static NO_DECORATION: $UnaryOperator<$Component>;
        static WORLD: $PackSource;
        static DEFAULT: $PackSource;
    }
    export interface $PackSource {
        decorate(name: $Component_): $Component;
        shouldAddAutomatically(): boolean;
    }
    export class $Pack$ResourcesSupplier {
    }
    export interface $Pack$ResourcesSupplier {
        openPrimary(location: $PackLocationInfo_): $PackResources;
        openFull(location: $PackLocationInfo_, metadata: $Pack$Metadata_): $PackResources;
    }
    export class $FolderRepositorySource implements $RepositorySource {
        loadPacks(onLoad: $Consumer_<$Pack>): void;
        static discoverPacks(folder: $Path_, validator: $DirectoryValidator, output: $BiConsumer_<$Path, $Pack$ResourcesSupplier>): void;
        constructor(folder: $Path_, packType: $PackType_, packSource: $PackSource, validator: $DirectoryValidator);
    }
    export class $PackRepository {
        reload(): void;
        openAllSelected(): $List<$PackResources>;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getSelectedPacks(): $Collection<$Pack>;
        setSelected(ids: $Collection_<string>): void;
        static displayPackList(packs: $Collection_<$Pack>): string;
        handler$bai000$resourcepackoverrides$reload(callback: $CallbackInfo): void;
        rebuildSelected(ids: $Collection_<string>): $List<$Pack>;
        handler$zeb000$globalpacks$globalpackls_discoverAvailable(arg0: $CallbackInfoReturnable<any>): void;
        addPack(id: string): boolean;
        removePack(id: string): boolean;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getAvailablePacks(): $Collection<$Pack>;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getAvailableIds(): $Collection<string>;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getSelectedIds(): $Collection<string>;
        getRequestedFeatureFlags(): $FeatureFlagSet;
        getPack(id: string): $Pack;
        addPackFinder(arg0: $RepositorySource_): void;
        isAvailable(id: string): boolean;
        sources: $Set<$RepositorySource>;
        constructor(...sources: $RepositorySource_[]);
        get selectedPacks(): $Collection<$Pack>;
        set selected(value: $Collection_<string>);
        get availablePacks(): $Collection<$Pack>;
        get availableIds(): $Collection<string>;
        get selectedIds(): $Collection<string>;
        get requestedFeatureFlags(): $FeatureFlagSet;
    }
    export class $KnownPack extends $Record {
        namespace(): string;
        version(): string;
        id(): string;
        static vanilla(name: string): $KnownPack;
        isVanilla(): boolean;
        static VANILLA_NAMESPACE: string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $KnownPack>;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $KnownPack}.
     */
    export type $KnownPack_ = { id?: string, namespace?: string, version?: string,  } | [id?: string, namespace?: string, version?: string, ];
    export class $FolderRepositorySource$FolderPackDetector extends $PackDetector<$Pack$ResourcesSupplier> {
    }
    export class $PackDetector<T> {
        detectPackResources(path: $Path_, forbiddenSymlinkInfos: $List_<$ForbiddenSymlinkInfo_>): T;
    }
    export class $ServerPacksSource extends $BuiltInPackSource {
        static createPackRepository(folder: $Path_, validator: $DirectoryValidator): $PackRepository;
        static createPackRepository(level: $LevelStorageSource$LevelStorageAccess): $PackRepository;
        static createVanillaTrustedRepository(): $PackRepository;
        static createVanillaPackSource(): $VanillaPackResources;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(validator: $DirectoryValidator);
    }
    export class $Pack$Metadata extends $Record {
        requestedFeatures(): $FeatureFlagSet;
        isHidden(): boolean;
        description(): $Component;
        compatibility(): $PackCompatibility;
        overlays(): $List<string>;
        /**
         * @deprecated
         */
        constructor(arg0: $Component_, arg1: $PackCompatibility_, arg2: $FeatureFlagSet, arg3: $List_<string>);
        constructor(description: $Component_, compatibility: $PackCompatibility_, requestedFeatures: $FeatureFlagSet, overlays: $List_<string>, isHidden: boolean);
        get hidden(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Pack$Metadata}.
     */
    export type $Pack$Metadata_ = { compatibility?: $PackCompatibility_, overlays?: $List_<string>, description?: $Component_, requestedFeatures?: $FeatureFlagSet, isHidden?: boolean,  } | [compatibility?: $PackCompatibility_, overlays?: $List_<string>, description?: $Component_, requestedFeatures?: $FeatureFlagSet, isHidden?: boolean, ];
    export class $PackCompatibility extends $Enum<$PackCompatibility> {
        static forVersion(range: $InclusiveRange_<number>, version: number): $PackCompatibility;
        getDescription(): $Component;
        static values(): $PackCompatibility[];
        static valueOf(arg0: string): $PackCompatibility;
        isCompatible(): boolean;
        getConfirmation(): $Component;
        static TOO_OLD: $PackCompatibility;
        static COMPATIBLE: $PackCompatibility;
        static TOO_NEW: $PackCompatibility;
        get description(): $Component;
        get compatible(): boolean;
        get confirmation(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PackCompatibility}.
     */
    export type $PackCompatibility_ = "too_old" | "too_new" | "compatible";
    export class $RepositorySource {
    }
    export interface $RepositorySource {
        loadPacks(onLoad: $Consumer_<$Pack>): void;
    }
    /**
     * Values that may be interpreted as {@link $RepositorySource}.
     */
    export type $RepositorySource_ = ((arg0: $Consumer<$Pack>) => void);
    export class $Pack implements $PackAccessor {
        static getDeclaredPackVersions(id: string, metadata: $PackMetadataSection_): $InclusiveRange<number>;
        getChatLink(green: boolean): $Component;
        withChildren(arg0: $List_<$Pack>): $Pack;
        getPackSource(): $PackSource;
        getDescription(): $Component;
        isHidden(): boolean;
        location(): $PackLocationInfo;
        getId(): string;
        open(): $PackResources;
        getChildren(): $List<$Pack>;
        getTitle(): $Component;
        isRequired(): boolean;
        hidden(): $Pack;
        getCompatibility(): $PackCompatibility;
        static readPackMetadata(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, version: number): $Pack$Metadata;
        static readMetaAndCreate(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, packType: $PackType_, selectionConfig: $PackSelectionConfig_): $Pack;
        getDefaultPosition(): $Pack$Position;
        selectionConfig(): $PackSelectionConfig;
        getRequestedFeatures(): $FeatureFlagSet;
        streamSelfAndChildren(): $Stream<$Pack>;
        isFixedPosition(): boolean;
        globalPacks_getSelectionConfig(): $PackSelectionConfig;
        globalPacks_setSelectionConfig(arg0: $PackSelectionConfig_): void;
        metadata: $Pack$Metadata;
        constructor(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, metadata: $Pack$Metadata_, selectionConfig: $PackSelectionConfig_);
        get packSource(): $PackSource;
        get description(): $Component;
        get id(): string;
        get children(): $List<$Pack>;
        get title(): $Component;
        get required(): boolean;
        get compatibility(): $PackCompatibility;
        get defaultPosition(): $Pack$Position;
        get requestedFeatures(): $FeatureFlagSet;
        get fixedPosition(): boolean;
    }
    export class $BuiltInPackSource implements $RepositorySource {
        static fromName(arg0: $Function_<$PackLocationInfo, $PackResources>): $Pack$ResourcesSupplier;
        getVanillaPack(): $VanillaPackResources;
        static fixedResources(resources: $PackResources): $Pack$ResourcesSupplier;
        loadPacks(packConsumer: $Consumer_<$Pack>): void;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(packType: $PackType_, vanillaPack: $VanillaPackResources, packDir: $ResourceLocation_, validator: $DirectoryValidator);
        get vanillaPack(): $VanillaPackResources;
    }
}
