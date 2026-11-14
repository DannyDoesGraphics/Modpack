import { $Consumer_ } from "@package/java/util/function";
import { $Comparable } from "@package/java/lang";
import { $EMFModelPartRoot } from "@package/traben/entity_model_features/models/parts";
export * as parts from "@package/traben/entity_model_features/models/parts";
export * as animation from "@package/traben/entity_model_features/models/animation";
export * as jem_objects from "@package/traben/entity_model_features/models/jem_objects";

declare module "@package/traben/entity_model_features/models" {
    export class $IEMFModelNameContainer {
    }
    export interface $IEMFModelNameContainer {
        emf$insertKnownMappings(arg0: $EMFModel_ID): void;
    }
    /**
     * Values that may be interpreted as {@link $IEMFModelNameContainer}.
     */
    export type $IEMFModelNameContainer_ = ((arg0: $EMFModel_ID) => void);
    export class $IEMFModel {
    }
    export interface $IEMFModel {
        emf$isEMFModel(): boolean;
        emf$getEMFRootModel(): $EMFModelPartRoot;
    }
    export class $EMFModel_ID implements $Comparable<$EMFModel_ID> {
        pushNewMainModelAddingOldAsFallback(fileName: string): $EMFModel_ID;
        areBothSame(): boolean;
        setMapIdAndAddFallbackModel(mapId: string, fileName: string): $EMFModel_ID;
        setMapIdAndAddFallbackModel(both: string): $EMFModel_ID;
        setBoth(fileName: string, mapId: string): $EMFModel_ID;
        setBoth(both: string): $EMFModel_ID;
        addFallbackModel(namespace: string, fileName: string, first: boolean): $EMFModel_ID;
        addFallbackModel(fileName: string): $EMFModel_ID;
        addFallbackModel(namespace: string, fileName: string): $EMFModel_ID;
        getMapId(): string;
        getfileName(): string;
        forEachFallback(action: $Consumer_<$EMFModel_ID>): void;
        pushNewMainModelAndMapIdAddingOldAsFallback(both: string): $EMFModel_ID;
        pushNewMainModelAndMapIdAddingOldAsFallback(fileName: string, mapId: string): $EMFModel_ID;
        finishAndPrepAutomatedFallbacks(): void;
        hasFallbackModels(): boolean;
        getNextFallbackModel(): $EMFModel_ID;
        getDisplayFileName(): string;
        getNamespace(): string;
        compareTo(o: $EMFModel_ID): number;
        setFileName(fileName: string): $EMFModel_ID;
        namespace: string;
        constructor(both: string, mapId: string);
        constructor(both: string);
        get mapId(): string;
        get nextFallbackModel(): $EMFModel_ID;
        get displayFileName(): string;
    }
}
