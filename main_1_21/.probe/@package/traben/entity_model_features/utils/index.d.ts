import { $WolfModel } from "@package/net/minecraft/client/model";
import { $ETFEntity } from "@package/traben/entity_texture_features/utils";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $Map_, $Map } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $EMFModelPartRoot } from "@package/traben/entity_model_features/models/parts";
import { $Wolf } from "@package/net/minecraft/world/entity/animal";

declare module "@package/traben/entity_model_features/utils" {
    export class $IEMFTextureSizeSupplier {
    }
    export interface $IEMFTextureSizeSupplier {
        emf$getTextureSize(): number[];
        emf$setTextureSize(arg0: number[]): void;
    }
    export class $IEMFCustomModelHolder {
    }
    export interface $IEMFCustomModelHolder {
        emf$setModel(arg0: $EMFModelPartRoot): void;
        emf$getModel(): $EMFModelPartRoot;
        emf$hasModel(): boolean;
    }
    export class $EMFEntity {
    }
    export interface $EMFEntity extends $ETFEntity {
        emf$prevX(): number;
        emf$getX(): number;
        emf$prevY(): number;
        emf$getY(): number;
        emf$prevZ(): number;
        emf$getZ(): number;
        emf$prevPitch(): number;
        emf$getPitch(): number;
        emf$isTouchingWater(): boolean;
        emf$isOnFire(): boolean;
        emf$hasVehicle(): boolean;
        emf$isOnGround(): boolean;
        emf$isAlive(): boolean;
        emf$isGlowing(): boolean;
        emf$isInLava(): boolean;
        emf$isInvisible(): boolean;
        emf$hasPassengers(): boolean;
        emf$isSneaking(): boolean;
        emf$isSprinting(): boolean;
        emf$isWet(): boolean;
        emf$age(): number;
        emf$getYaw(): number;
        emf$getVelocity(): $Vec3;
        emf$getTypeString(): string;
        emf$getVariableMap(): $Map<string, number>;
    }
    export class $IEMFUnmodifiedLayerRootGetter {
    }
    export interface $IEMFUnmodifiedLayerRootGetter {
        emf$getUnmodifiedRoots(): $Map<$ModelLayerLocation, $LayerDefinition>;
    }
    /**
     * Values that may be interpreted as {@link $IEMFUnmodifiedLayerRootGetter}.
     */
    export type $IEMFUnmodifiedLayerRootGetter_ = (() => $Map_<$ModelLayerLocation, $LayerDefinition>);
    export class $IEMFWolfCollarHolder<T extends $Wolf> {
    }
    export interface $IEMFWolfCollarHolder<T extends $Wolf> {
        emf$hasCollarModel(): boolean;
        emf$getCollarModel(): $WolfModel<T>;
        emf$setCollarModel(arg0: $WolfModel<T>): void;
    }
    export class $EMFDirectoryHandler {
        getFinalFileLocation(): string;
        getRelativeDirectoryLocationNoValidation(fileName: string): string;
        getRelativeFilePossiblyEMFOverridden(jpmOrVariantFileNameWithSuffixAndFileType: string): $ResourceLocation;
        static getDirectoryManagerOrNull(printing: boolean, namespace: string, modelFileName: string, suffixAndFileType: string): $EMFDirectoryHandler;
        validForThisBase(propertiesOrSecond: $EMFDirectoryHandler): boolean;
        getFileNameWithType(): string;
        packIndex(): number;
        static basic(filename: string): $EMFDirectoryHandler;
        rawFileName: string;
        namespace: string;
        isSubFolder: boolean;
        get finalFileLocation(): string;
        get fileNameWithType(): string;
    }
    export class $IEMFCuboidDataSupplier {
    }
    export interface $IEMFCuboidDataSupplier {
        emf$getTextureUV(): number[];
        emf$getTextureXY(): number[];
        emf$getSizeAdd(): number[];
    }
}
