import { $CSchematics } from "@package/com/simibubi/create/infrastructure/config";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SchematicTableBlockEntity } from "@package/com/simibubi/create/content/schematics/table";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MaterialChecklist } from "@package/com/simibubi/create/content/schematics/cannon";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Map } from "@package/java/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ItemEntry } from "@package/com/tterrag/registrate/util/entry";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Record } from "@package/java/lang";
import { $SchematicPrinterExtension } from "@package/dev/ryanhcode/sable/neoforge/mixinterface/compatibility/create/schematics";
import { $OutputStream } from "@package/java/io";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $Item$Properties, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $StructurePlaceSettings, $StructureTemplate, $StructureProcessor } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $SchematicLevel } from "@package/net/createmod/catnip/levelWrappers";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as client from "@package/com/simibubi/create/content/schematics/client";
export * as cannon from "@package/com/simibubi/create/content/schematics/cannon";
export * as packet from "@package/com/simibubi/create/content/schematics/packet";
export * as table from "@package/com/simibubi/create/content/schematics/table";
export * as requirement from "@package/com/simibubi/create/content/schematics/requirement";

declare module "@package/com/simibubi/create/content/schematics" {
    export class $SchematicPrinter$PrintStage extends $Enum<$SchematicPrinter$PrintStage> {
        static values(): $SchematicPrinter$PrintStage[];
        static valueOf(arg0: string): $SchematicPrinter$PrintStage;
        static BLOCKS: $SchematicPrinter$PrintStage;
        static DEFERRED_BLOCKS: $SchematicPrinter$PrintStage;
        static ENTITIES: $SchematicPrinter$PrintStage;
    }
    /**
     * Values that may be interpreted as {@link $SchematicPrinter$PrintStage}.
     */
    export type $SchematicPrinter$PrintStage_ = "blocks" | "deferred_blocks" | "entities";
    export class $SchematicPrinter$BlockTargetHandler {
    }
    export interface $SchematicPrinter$BlockTargetHandler {
        handle(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockEntity): void;
    }
    /**
     * Values that may be interpreted as {@link $SchematicPrinter$BlockTargetHandler}.
     */
    export type $SchematicPrinter$BlockTargetHandler_ = ((arg0: $BlockPos, arg1: $BlockState, arg2: $BlockEntity) => void);
    export class $SchematicProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$SchematicProcessor>;
        static INSTANCE: $SchematicProcessor;
    }
    export class $SchematicPrinter$EntityTargetHandler {
    }
    export interface $SchematicPrinter$EntityTargetHandler {
        handle(arg0: $BlockPos_, arg1: $Entity): void;
    }
    /**
     * Values that may be interpreted as {@link $SchematicPrinter$EntityTargetHandler}.
     */
    export type $SchematicPrinter$EntityTargetHandler_ = ((arg0: $BlockPos, arg1: $Entity) => void);
    export class $SchematicInstances {
        static clearHash(arg0: $ItemStack_): void;
        static get(arg0: $Level_, arg1: $ItemStack_): $SchematicLevel;
        static getHash(arg0: $ItemStack_): number;
        constructor();
    }
    export class $SchematicExport {
        static saveSchematic(arg0: $Path_, arg1: string, arg2: boolean, arg3: $Level_, arg4: $BlockPos_, arg5: $BlockPos_): $SchematicExport$SchematicExportResult;
        constructor();
    }
    export class $SchematicAndQuillItem extends $Item {
        static replaceStructureVoidWithAir(arg0: $CompoundTag_): void;
        static clampGlueBoxes(arg0: $Level_, arg1: $AABB_, arg2: $CompoundTag_): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ServerSchematicLoader {
        handleNewUpload(arg0: $ServerPlayer, arg1: string, arg2: number, arg3: $BlockPos_): void;
        handleWriteRequest(arg0: $ServerPlayer, arg1: string, arg2: number[]): void;
        handleFinishedUpload(arg0: $ServerPlayer, arg1: string): void;
        handleInstantSchematic(arg0: $ServerPlayer, arg1: string, arg2: $Level_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        redirect$epi000$create_pattern_schematics$handleInstantSchematic_isIn(arg0: $ItemEntry<any>, arg1: $ItemStack_): boolean;
        redirect$epi000$create_pattern_schematics$handleInstantSchematic_create(arg0: $Level_, arg1: string, arg2: string): $ItemStack;
        shutdown(): void;
        getTable(arg0: $Level_, arg1: $BlockPos_): $SchematicTableBlockEntity;
        tick(): void;
        getConfig(): $CSchematics;
        constructor();
        get config(): $CSchematics;
    }
    export class $SchematicPrinter$PlacementPredicate {
    }
    export interface $SchematicPrinter$PlacementPredicate {
        shouldPlace(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockEntity, arg3: $BlockState_, arg4: $BlockState_, arg5: boolean): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SchematicPrinter$PlacementPredicate}.
     */
    export type $SchematicPrinter$PlacementPredicate_ = ((arg0: $BlockPos, arg1: $BlockState, arg2: $BlockEntity, arg3: $BlockState, arg4: $BlockState, arg5: boolean) => boolean);
    export class $ServerSchematicLoader$SchematicUploadEntry {
        bytesUploaded: number;
        world: $Level;
        stream: $OutputStream;
        tablePos: $BlockPos;
        totalBytes: number;
        idleTime: number;
        constructor(arg0: $OutputStream, arg1: number, arg2: $Level_, arg3: $BlockPos_);
    }
    export class $SchematicPrinter implements $SchematicPrinterExtension {
        getAnchor(): $BlockPos;
        advanceCurrentPos(): boolean;
        getCurrentRequirement(): $ItemRequirement;
        shouldPlaceCurrent(arg0: $Level_): boolean;
        shouldPlaceCurrent(arg0: $Level_, arg1: $SchematicPrinter$PlacementPredicate_): boolean;
        handleCurrentTarget(arg0: $SchematicPrinter$BlockTargetHandler_, arg1: $SchematicPrinter$EntityTargetHandler_): void;
        isErrored(): boolean;
        resetSchematic(): void;
        isWorldEmpty(): boolean;
        sendBlockUpdates(arg0: $Level_): void;
        markAllBlockRequirements(arg0: $MaterialChecklist, arg1: $Level_, arg2: $SchematicPrinter$PlacementPredicate_): number;
        markAllEntityRequirements(arg0: $MaterialChecklist): void;
        sable$getSchematicLevel(): $SchematicLevel;
        loadSchematic(arg0: $ItemStack_, arg1: $Level_, arg2: boolean): void;
        getPrintStage(): $SchematicPrinter$PrintStage;
        shouldPlaceBlock(arg0: $Level_, arg1: $SchematicPrinter$PlacementPredicate_, arg2: $BlockPos_): boolean;
        tryAdvanceCurrentPos(): boolean;
        static shouldDeferBlock(arg0: $BlockState_): boolean;
        write(arg0: $CompoundTag_): void;
        isLoaded(): boolean;
        getCurrentTarget(): $BlockPos;
        fromTag(arg0: $CompoundTag_, arg1: boolean): void;
        constructor();
        get anchor(): $BlockPos;
        get currentRequirement(): $ItemRequirement;
        get errored(): boolean;
        get worldEmpty(): boolean;
        get printStage(): $SchematicPrinter$PrintStage;
        get loaded(): boolean;
        get currentTarget(): $BlockPos;
    }
    export class $SchematicExport$SchematicExportResult extends $Record {
        overwritten(): boolean;
        fileName(): string;
        bounds(): $BlockPos;
        file(): $Path;
        dir(): $Path;
        origin(): $BlockPos;
        constructor(file: $Path_, dir: $Path_, fileName: string, overwritten: boolean, origin: $BlockPos_, bounds: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $SchematicExport$SchematicExportResult}.
     */
    export type $SchematicExport$SchematicExportResult_ = { origin?: $BlockPos_, dir?: $Path_, fileName?: string, file?: $Path_, overwritten?: boolean, bounds?: $BlockPos_,  } | [origin?: $BlockPos_, dir?: $Path_, fileName?: string, file?: $Path_, overwritten?: boolean, bounds?: $BlockPos_, ];
    export class $SchematicItem extends $Item {
        static writeSize(arg0: $Level_, arg1: $ItemStack_): void;
        static loadSchematic(arg0: $Level_, arg1: $ItemStack_): $StructureTemplate;
        handler$fab000$create_pattern_schematics$onItemUse(arg0: $Player, arg1: $InteractionHand_, arg2: $CallbackInfoReturnable<any>): void;
        static getSettings(arg0: $ItemStack_): $StructurePlaceSettings;
        static getSettings(arg0: $ItemStack_, arg1: boolean): $StructurePlaceSettings;
        static create(arg0: $Level_, arg1: string, arg2: string): $ItemStack;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
}
