import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $EMFAttachments } from "@package/traben/entity_model_features/models/animation";
import { $EMFDirectoryHandler } from "@package/traben/entity_model_features/utils";
import { $LinkedList, $LinkedHashMap, $HashMap, $List } from "@package/java/util";
import { $EMFModel_ID } from "@package/traben/entity_model_features/models";

declare module "@package/traben/entity_model_features/models/jem_objects" {
    export class $EMFPartData {
        getCustomTexture(): $ResourceLocation;
        prepare(textureSize: number[], jem: $EMFJemData): void;
        getAttachments(): $List<$EMFAttachments>;
        boxes: $EMFBoxData[];
        rotate: number[];
        attachments: $HashMap<string, number[]>;
        texture: string;
        invertAxis: string;
        submodel: $EMFPartData;
        mirrorTexture: string;
        part: string;
        scale: number;
        baseId: string;
        translate: number[];
        textureSize: number[];
        animations: $LinkedList<$LinkedHashMap<string, string>>;
        model: string;
        id: string;
        attach: boolean;
        submodels: $LinkedList<$EMFPartData>;
        constructor();
        get customTexture(): $ResourceLocation;
    }
    export class $EMFJemData {
        getMobModelIDInfo(): $EMFModel_ID;
        getCustomTexture(): $ResourceLocation;
        getAllTopLevelAnimationsByVanillaPartName(): $LinkedHashMap<string, $List<$LinkedHashMap<string, string>>>;
        validateResourcePathAndExists(pathIn: string, fileTypeExtension: string): $ResourceLocation;
        validateJemTexture(textureIn: string, canRemoveRedundancy: boolean): $ResourceLocation;
        validateJemTexture(textureIn: string): $ResourceLocation;
        prepare(directoryContext: $EMFDirectoryHandler, mobModelIDInfo: $EMFModel_ID): void;
        models: $LinkedList<$EMFPartData>;
        textureSize: number[];
        texture: string;
        shadow_size: number;
        constructor();
        get mobModelIDInfo(): $EMFModel_ID;
        get customTexture(): $ResourceLocation;
        get allTopLevelAnimationsByVanillaPartName(): $LinkedHashMap<string, $List<$LinkedHashMap<string, string>>>;
    }
    export class $EMFBoxData {
        checkAndFixUVLegacyDirections(): void;
        prepare(invertX: boolean, invertY: boolean, invertZ: boolean): void;
        textureOffset: number[];
        uvLeft: number[];
        uvDown: number[];
        sizesAdd: number[];
        coordinates: number[];
        sizeAddZ: number;
        uvUp: number[];
        sizeAddY: number;
        sizeAddX: number;
        uvFront: number[];
        uvBack: number[];
        uvNorth: number[];
        uvRight: number[];
        uvSouth: number[];
        uvEast: number[];
        uvWest: number[];
        sizeAdd: number;
        constructor();
    }
}
